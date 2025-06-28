import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";

export function PointsCloud() {
  const pointsRef = useRef();

  const sphere = useMemo(() => {
  const positions = new Float32Array(1000 * 3);
  for (let i = 0; i < 1000 * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }
  return positions;
}, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <Points ref={pointsRef} positions={sphere} stride={3}>
      <PointMaterial color="#f00" size={0.05} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

export default function ThreeBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
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
      <ambientLight />
      <PointsCloud />
    </Canvas>
  );
}
