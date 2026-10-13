import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { BACKGROUND_EVENT } from "../../utils/functions";

/**
 * Background 3D inspirado em uma arquitetura serverless orientada a eventos:
 * Clientes → API Gateway → Lambdas → SNS/SQS → DynamoDB.
 * Pacotes de dados (requisições/eventos) percorrem as conexões e "acendem"
 * os serviços quando chegam, como uma invocação.
 */

const RED = new THREE.Color("#FF1744");
const WHITE = new THREE.Color("#ffffff");
const DIM = new THREE.Color("#5a0a1a");

// Camadas da arquitetura (x = posição horizontal, count = nº de nós, shape = geometria)
const LAYERS = [
  { name: "client", x: -9, count: 5, shape: "octa", size: 0.22, spread: 4.5 },
  { name: "gateway", x: -4.5, count: 2, shape: "box", size: 0.45, spread: 2.2 },
  { name: "lambda", x: 0, count: 7, shape: "ico", size: 0.32, spread: 5.5 },
  { name: "queue", x: 4.5, count: 3, shape: "torus", size: 0.32, spread: 3.2 },
  { name: "db", x: 9, count: 2, shape: "cylinder", size: 0.42, spread: 2.4 },
];

const PACKET_COUNT = 70;

// PRNG determinístico para o layout não mudar a cada render
function mulberry32(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildGraph() {
  const rand = mulberry32(42);
  const nodes = [];
  const layerNodes = LAYERS.map((layer, li) => {
    const ids = [];
    for (let i = 0; i < layer.count; i++) {
      const t = layer.count === 1 ? 0.5 : i / (layer.count - 1);
      const y = (t - 0.5) * layer.spread + (rand() - 0.5) * 0.6;
      const z = (rand() - 0.5) * 4;
      ids.push(nodes.length);
      nodes.push({
        layer: li,
        shape: layer.shape,
        size: layer.size,
        position: new THREE.Vector3(layer.x + (rand() - 0.5) * 0.8, y, z),
        phase: rand() * Math.PI * 2,
      });
    }
    return ids;
  });

  // Conecta cada nó a 1–3 nós da próxima camada
  const edges = [];
  const outgoing = nodes.map(() => []);
  for (let li = 0; li < layerNodes.length - 1; li++) {
    const next = layerNodes[li + 1];
    layerNodes[li].forEach((from) => {
      const targets = new Set();
      const n = 1 + Math.floor(rand() * Math.min(3, next.length));
      while (targets.size < n) targets.add(next[Math.floor(rand() * next.length)]);
      targets.forEach((to) => {
        outgoing[from].push(edges.length);
        edges.push({ from, to });
      });
    });
    // Garante que todo nó da próxima camada recebe tráfego
    next.forEach((to) => {
      if (!edges.some((e) => e.to === to)) {
        const from = layerNodes[li][Math.floor(rand() * layerNodes[li].length)];
        outgoing[from].push(edges.length);
        edges.push({ from, to });
      }
    });
  }

  return { nodes, edges, outgoing, entry: layerNodes[0] };
}

function geometryFor(shape, size) {
  switch (shape) {
    case "box":
      return new THREE.BoxGeometry(size * 1.6, size * 1.6, size * 1.6);
    case "ico":
      return new THREE.IcosahedronGeometry(size, 0);
    case "torus":
      return new THREE.TorusGeometry(size, size * 0.28, 8, 20);
    case "cylinder":
      return new THREE.CylinderGeometry(size, size, size * 1.8, 16, 3);
    default:
      return new THREE.OctahedronGeometry(size, 0);
  }
}

function ServiceNode({ node, pulses, index }) {
  const groupRef = useRef();
  const wireRef = useRef();
  const coreRef = useRef();
  const geometry = useMemo(() => geometryFor(node.shape, node.size), [node]);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const pulse = pulses.current[index];
    pulses.current[index] = Math.max(0, pulse - delta * 1.6);

    const g = groupRef.current;
    g.rotation.x += delta * 0.2;
    g.rotation.y += delta * 0.3;
    g.position.y = node.position.y + Math.sin(t * 0.6 + node.phase) * 0.12;
    const s = 1 + pulse * 0.45;
    g.scale.setScalar(s);

    wireRef.current.color.copy(RED).lerp(WHITE, pulse * 0.7);
    wireRef.current.opacity = 0.45 + pulse * 0.55;
    coreRef.current.opacity = 0.08 + pulse * 0.35;
  });

  return (
    <group ref={groupRef} position={node.position}>
      <mesh geometry={geometry}>
        <meshBasicMaterial
          ref={coreRef}
          color={RED}
          transparent
          opacity={0.08}
          depthWrite={false}
        />
      </mesh>
      <lineSegments>
        <edgesGeometry args={[geometry]} />
        <lineBasicMaterial ref={wireRef} color={RED} transparent opacity={0.5} />
      </lineSegments>
    </group>
  );
}

function Connections({ nodes, edges }) {
  const geometry = useMemo(() => {
    const positions = new Float32Array(edges.length * 6);
    edges.forEach((e, i) => {
      const a = nodes[e.from].position;
      const b = nodes[e.to].position;
      positions.set([a.x, a.y, a.z, b.x, b.y, b.z], i * 6);
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [nodes, edges]);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color={DIM} transparent opacity={0.55} depthWrite={false} />
    </lineSegments>
  );
}

function Packets({ graph, pulses, reducedMotion }) {
  const { nodes, edges, outgoing, entry } = graph;
  const pointsRef = useRef();

  const state = useMemo(() => {
    const rand = Math.random;
    const startEdge = () => {
      const from = entry[Math.floor(rand() * entry.length)];
      const outs = outgoing[from];
      return outs[Math.floor(rand() * outs.length)];
    };
    const packets = Array.from({ length: PACKET_COUNT }, () => ({
      edge: startEdge(),
      t: rand(),
      speed: 0.25 + rand() * 0.45,
    }));
    return { packets, startEdge };
  }, [entry, outgoing]);

  const positions = useMemo(() => new Float32Array(PACKET_COUNT * 3), []);
  const tmp = useMemo(() => new THREE.Vector3(), []);

  useFrame((_, delta) => {
    const speedFactor = reducedMotion ? 0.15 : 1;
    const dt = Math.min(delta, 0.05) * speedFactor;

    state.packets.forEach((p, i) => {
      p.t += dt * p.speed;
      if (p.t >= 1) {
        const arrived = edges[p.edge].to;
        pulses.current[arrived] = 1;
        const outs = outgoing[arrived];
        p.edge = outs.length
          ? outs[Math.floor(Math.random() * outs.length)]
          : state.startEdge();
        p.t = 0;
      }
      const e = edges[p.edge];
      tmp.lerpVectors(nodes[e.from].position, nodes[e.to].position, p.t);
      positions[i * 3] = tmp.x;
      positions[i * 3 + 1] = tmp.y;
      positions[i * 3 + 2] = tmp.z;
    });

    const attr = pointsRef.current.geometry.attributes.position;
    attr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={PACKET_COUNT}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffd2da"
        size={0.11}
        sizeAttenuation
        transparent
        opacity={0.95}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Poeira de dados ao fundo (região da "nuvem")
function CloudDust() {
  const ref = useRef();
  const positions = useMemo(() => {
    const rand = mulberry32(7);
    const arr = new Float32Array(900 * 3);
    for (let i = 0; i < 900; i++) {
      arr[i * 3] = (rand() - 0.5) * 40;
      arr[i * 3 + 1] = (rand() - 0.5) * 24;
      arr[i * 3 + 2] = -6 - rand() * 18;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    ref.current.rotation.z += delta * 0.006;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={900} />
      </bufferGeometry>
      <pointsMaterial color="#ff4d6d" size={0.04} transparent opacity={0.45} depthWrite={false} />
    </points>
  );
}

// Grade em perspectiva, como o "chão" de uma região AWS
function RegionGrid() {
  const ref = useRef();
  useFrame((state) => {
    ref.current.position.z = (state.clock.elapsedTime * 0.4) % 2;
  });
  return (
    <gridHelper
      ref={ref}
      args={[60, 30, "#3a0812", "#22050b"]}
      position={[0, -5.5, 0]}
    />
  );
}

function Scene({ reducedMotion }) {
  const graph = useMemo(buildGraph, []);
  const pulses = useRef(new Float32Array(graph.nodes.length));
  const rigRef = useRef();
  const { camera, size, setFrameloop } = useThree();

  // Pausa o render quando algo cobre a tela inteira (ex.: modal de projeto)
  useEffect(() => {
    const onToggle = (e) => setFrameloop(e.detail.paused ? "never" : "always");
    window.addEventListener(BACKGROUND_EVENT, onToggle);
    return () => window.removeEventListener(BACKGROUND_EVENT, onToggle);
  }, [setFrameloop]);
  const pointer = useRef({ x: 0, y: 0 });
  const scroll = useRef(0);

  useEffect(() => {
    const onMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scroll.current = max > 0 ? window.scrollY / max : 0;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Em telas estreitas afasta a câmera para a arquitetura caber; no desktop
  // desloca a cena para o centro da área de conteúdo (à direita do Aside)
  useEffect(() => {
    const aspect = size.width / size.height;
    camera.position.z = aspect < 1 ? 24 : 16;
    camera.updateProjectionMatrix();
    rigRef.current.position.x = size.width >= 1024 ? 2 : 0;
  }, [camera, size]);

  useFrame((state, delta) => {
    const rig = rigRef.current;
    const t = state.clock.elapsedTime;
    const targetY = -0.2 + scroll.current * Math.PI * 0.6 + pointer.current.x * 0.15;
    const targetX = 0.18 + pointer.current.y * 0.08 + Math.sin(t * 0.1) * 0.03;
    const k = 1 - Math.exp(-delta * 2);
    rig.rotation.y += (targetY - rig.rotation.y) * k;
    rig.rotation.x += (targetX - rig.rotation.x) * k;
  });

  return (
    <>
      <fog attach="fog" args={["#0e0e0e", 10, 34]} />
      <CloudDust />
      <RegionGrid />
      <group ref={rigRef}>
        <Connections nodes={graph.nodes} edges={graph.edges} />
        {graph.nodes.map((node, i) => (
          <ServiceNode key={i} node={node} index={i} pulses={pulses} />
        ))}
        <Packets graph={graph} pulses={pulses} reducedMotion={reducedMotion} />
      </group>
    </>
  );
}

export default function ThreeBackground() {
  const reducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  return (
    <Canvas
      aria-hidden="true"
      dpr={[1, 1.25]}
      gl={{ antialias: true, powerPreference: "low-power" }}
      camera={{ position: [0, 0, 14], fov: 55 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
        background: "#0e0e0e",
      }}
    >
      <Scene reducedMotion={reducedMotion} />
    </Canvas>
  );
}
