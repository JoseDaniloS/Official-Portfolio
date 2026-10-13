import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TitleSections from "../../../../components/Global/TitleSections";
import About_MeImage from "/About_Me.webp";
import { motionConfig, staggerConfig } from "../../../../utils/functions";
import TextRedShadow from "../../../../components/Global/TextRedShadow";
import {
  certificates,
  softwareRegistrations,
} from "../../../../database/achievements";

const Strong = ({ children }) => (
  <span className="font-bold text-white">{children}</span>
);

export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full min-h-screen max-xl:h-full flex flex-col items-center max-lg:mt-22 justify-around py-10 gap-20"
    >
      <TitleSections text="Sobre mim" label="// 01" />
      <div className="h-full max-md:w-[90vw] md:w-[80%] max-md:flex-col text-[#ccc] flex gap-6 md:gap-12">
        <motion.div
          {...motionConfig}
          className="w-full md:w-5/6 flex flex-col gap-6 items-center text-left"
        >
          <div className="flex flex-col gap-5 md:text-left leading-relaxed">
            <h2 className="text-3xl max-md:text-2xl text-white font-bold">
              Eu sou <TextRedShadow>José Danilo</TextRedShadow>, Desenvolvedor
              Full-Stack e Tech Lead, fundador da{" "}
              <TextRedShadow>Chronos Web Soluções</TextRedShadow>.
            </h2>
            <p>
              Atuo em toda a stack — <Strong>do componente React à função
              Lambda</Strong> — com foco em{" "}
              <Strong>arquitetura de sistemas escaláveis, CI/CD e segurança</Strong>.
              Tenho experiência em produção com React, TypeScript, Node.js e{" "}
              <Strong>
                arquitetura serverless na AWS (Lambda, DynamoDB, API Gateway,
                Cognito, SNS, SQS e SAM)
              </Strong>
              .
            </p>
            <p>
              Na <Strong>Chronos Web Soluções</Strong>, estúdio que fundei e
              opero, atendo uma carteira ativa de clientes nos segmentos
              institucional, financeiro e e-commerce. Nosso carro-chefe é o{" "}
              <Strong>Chronos Pay</Strong>, um{" "}
              <Strong>gateway de pagamentos com Pix 100% serverless</Strong>,
              com processamento orientado a eventos (SNS + SQS) e dashboard de
              transações em tempo real, já em uso por clientes reais.
            </p>
            <p>
              Também sou <Strong>Tech Lead do front-end no Projeto Carcará
              (UFERSA)</Strong> e atuei como{" "}
              <Strong>Engenheiro de Software bolsista FAPERN</Strong>,
              construindo a infraestrutura do portal da{" "}
              <Strong>Rede REBECA em parceria com a USP</Strong>. Sou graduando
              em <Strong>Tecnologia da Informação pela UFERSA</Strong>, Técnico
              em Informática pela <Strong>EEEP Balbina Viana Arrais</Strong> e
              professor de{" "}
              <Strong>AWS Fundamentos da Nuvem na UFERSA</Strong>, levando para
              a sala de aula a mesma prática que aplico nos meus projetos.
            </p>
          </div>
        </motion.div>

        <PersonalInfo />
      </div>

      {/* Imagem e estatísticas */}
      <div className="flex flex-col text-white max-md:w-[90vw] md:w-[80%] gap-6">
        <motion.figure {...motionConfig} className="flex flex-col gap-3">
          <div className="overflow-hidden rounded-lg max-xl:w-full xl:max-w-[600px]">
            <img
              src={About_MeImage}
              alt="Participação no Evento Start-up Day 22/03/2025"
              loading="lazy"
              className="w-full h-[400px] object-center object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <figcaption className="text-sm text-white/70">
            Participação no Evento Start-up Day 22/03/2025
          </figcaption>
        </motion.figure>

        <div className="max-md:flex-col flex justify-center md:justify-between text-[42px] gap-6">
          <StatCard index={0} value={2} suffix="+" label="Anos de experiência" />
          <StatCard
            index={1}
            value={softwareRegistrations.length}
            label="Softwares registrados no INPI"
          />
          <StatCard
            index={2}
            value={certificates.length}
            label="Certificações (AWS & Mercado Pago)"
          />
        </div>
      </div>
    </section>
  );
}

// Número que conta de 0 até o valor quando entra na tela
function CountUp({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function StatCard({ value, suffix, label, index }) {
  return (
    <motion.div
      {...staggerConfig(index, 0.12)}
      className="flex flex-col items-center text-center p-6"
    >
      <TextRedShadow>
        <CountUp value={value} suffix={suffix} />
      </TextRedShadow>
      <p className="text-[18px] text-[#aaa]">{label}</p>
    </motion.div>
  );
}

function PersonalInfo() {
  const personalData = [
    { label: "Nome", value: "José Danilo Santos do Nascimento" },
    {
      label: "Email",
      value: (
        <a
          href="mailto:danilojose.1d@gmail.com"
          aria-label="Enviar email para José Danilo"
        >
          <TextRedShadow>danilojose.1d@gmail.com</TextRedShadow>
        </a>
      ),
    },
    { label: "Idade", value: "21 anos" },
    { label: "De", value: "Pau dos Ferros, Rio Grande do Norte, Brasil" },
    { label: "Idiomas", value: "Português (nativo) · Inglês (intermediário)" },
  ];

  return (
    <div className="flex flex-col gap-5 text-xl w-full md:w-auto">
      {personalData.map((item, i) => (
        <motion.p
          key={item.label}
          {...staggerConfig(i)}
          className="border-b border-[#303030] py-2"
        >
          <i className="font-bold text-white">{item.label}:</i> {item.value}
        </motion.p>
      ))}
    </div>
  );
}
