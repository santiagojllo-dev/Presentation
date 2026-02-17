"use client";
import { useState } from "react";

const phases = [
  {
    year: "2016",
    age: "16 años",
    title: "El Sueño del Fútbol",
    subtitle: "Envigado F.C.",
    icon: "⚽",
    color: "#F97316",
    bg: "rgba(249,115,22,0.12)",
    border: "rgba(249,115,22,0.35)",
    description:
      "Jugaba para Envigado mientras terminaba el colegio. Ganaba $200K/mes con un manager que se quedaba el 40%. El sueño era ser futbolista profesional.",
    tag: "DEPORTE",
    tagColor: "#F97316",
  },
  {
    year: "2016",
    age: "16 años",
    title: "Pericarditis — El Punto de Quiebre",
    subtitle: "UCI · 1 semana hospitalizado",
    icon: "🫀",
    color: "#EF4444",
    bg: "rgba(239,68,68,0.12)",
    border: "rgba(239,68,68,0.35)",
    description:
      "Una noche sentí un chuzón en el pecho que se intensificó hasta perder la visión y las fuerzas. UCI por pericarditis. Sin deporte intensivo por 6+ meses. El manager y el equipo me abandonaron.",
    tag: "SALUD",
    tagColor: "#EF4444",
    highlight: true,
  },
  {
    year: "2016–17",
    age: "17 años",
    title: "El Origen del Código",
    subtitle: "Transformice & hacking de juegos",
    icon: "🐭",
    color: "#A855F7",
    bg: "rgba(168,85,247,0.12)",
    border: "rgba(168,85,247,0.35)",
    description:
      "Sin deporte, mi hobby era la PC. Modifiqué código fuente de juegos para hacer trucos: velocidad, saltos. Sin darme cuenta, me estaba enamorando del código.",
    tag: "DESCUBRIMIENTO",
    tagColor: "#A855F7",
  },
  {
    year: "2017–2019",
    age: "18–20",
    title: "Universidad de Antioquia",
    subtitle: "Ing. de Sistemas · 2.5 años · Paros constantes",
    icon: "🎓",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.12)",
    border: "rgba(59,130,246,0.35)",
    description:
      "Pasé a Ing. de Sistemas. Pero los paros no paraban: 1 semestre mío = 2 o 3 en otra universidad. En 2.5 años debería estar en 5° semestre, estaba en una mezcla de 2°, 3°, 4° y 5°. Me sentía estancado.",
    tag: "ACADEMIA",
    tagColor: "#3B82F6",
  },
  {
    year: "2018–2019",
    age: "19–20",
    title: "Músico Independiente",
    subtitle: "Bares & restaurantes · Rock clásico",
    icon: "🥁",
    color: "#EC4899",
    bg: "rgba(236,72,153,0.12)",
    border: "rgba(236,72,153,0.35)",
    description:
      "Batería, piano, bajo eléctrico. Toqué rock clásico y canciones en inglés en bandas locales. Este período fue para pensar en mi futuro y en lo que realmente quería.",
    tag: "PAUSA CREATIVA",
    tagColor: "#EC4899",
  },
  {
    year: "2020–2023",
    age: "21–24",
    title: "ITM — Tecnología",
    subtitle: "Tecnología en Sistemas · 3.5 años",
    icon: "💻",
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.12)",
    border: "rgba(6,182,212,0.35)",
    description:
      "Decidí moverme al ITM tras ver que un compañero ya estaba por graduarse. Aprendí Java, C#, Python, HTML/CSS, Bootstrap. Fue el comienzo real de mi carrera tech.",
    tag: "FORMACIÓN",
    tagColor: "#06B6D4",
  },
  {
    year: "2023",
    age: "24",
    title: "Antioquia Gold — Prácticas",
    subtitle: "Power Apps · Soporte TI",
    icon: "⛏️",
    color: "#EAB308",
    bg: "rgba(234,179,8,0.12)",
    border: "rgba(234,179,8,0.35)",
    description:
      "Mi primer contacto con el mundo laboral. Llegué preparado para programar y me pusieron en Power Apps. Lo tomé como reto. Mantenimiento de apps, soporte TI, redes, servidores.",
    tag: "PRIMER EMPLEO",
    tagColor: "#EAB308",
  },
  {
    year: "2023–2024",
    age: "24–25",
    title: "Antioquia Gold — Contrato",
    subtitle: "2 aplicaciones críticas · Power Platform",
    icon: "📱",
    color: "#EAB308",
    bg: "rgba(234,179,8,0.12)",
    border: "rgba(234,179,8,0.35)",
    description:
      "Desarrollé 2 apps críticas: Centros de Costos (uso mensual) y Transportes (uso diario). Contrato de prestación de servicios hasta agosto 2024.",
    tag: "DESARROLLO",
    tagColor: "#EAB308",
  },
  {
    year: "Oct 2024",
    age: "25",
    title: "Graduación — Tecnólogo",
    subtitle: "ITM · Tecnología en Sistemas",
    icon: "🎓",
    color: "#10B981",
    bg: "rgba(16,185,129,0.12)",
    border: "rgba(16,185,129,0.35)",
    description:
      "Oficialmente Tecnólogo en Sistemas. Un logro que significó mucho después de haber empezado en la UdeA y haber tomado decisiones difíciles.",
    tag: "LOGRO",
    tagColor: "#10B981",
    highlight: true,
  },
  {
    year: "2024–2025",
    age: "25–26",
    title: "Tránsito — Analista & Automatización",
    subtitle: "n8n · IA · Power BI · CRM",
    icon: "🤖",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.12)",
    border: "rgba(139,92,246,0.35)",
    description:
      "Chatbot WhatsApp con n8n + ChatGPT, dashboards en Power BI, ETL y datawarehouses, CRM para recordatorio de vencimiento de SOAT. ~10 meses.",
    tag: "DATA & IA",
    tagColor: "#8B5CF6",
  },
  {
    year: "2025",
    age: "26",
    title: "Freelance — Full Stack",
    subtitle: "POS · Next.js · TypeScript · PostgreSQL",
    icon: "🚀",
    color: "#14B8A6",
    bg: "rgba(20,184,166,0.12)",
    border: "rgba(20,184,166,0.35)",
    description:
      "Sistemas POS para PYMEs, fruterías, tiendas, bares. Stack moderno: Next.js 14, React 18, TypeScript, Tailwind, Prisma, PostgreSQL, Docker. Crecimiento exponencial en programación.",
    tag: "EMPRENDIMIENTO",
    tagColor: "#14B8A6",
  },
  {
    year: "2025",
    age: "26",
    title: "Ingeniería — ITM",
    subtitle: "Ciclo profesional · 2 años restantes",
    icon: "📚",
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.12)",
    border: "rgba(6,182,212,0.35)",
    description:
      "Inicio del ciclo de Ingeniería para completar el título profesional. Cursando materias como Modelamiento y Simulación.",
    tag: "ACADEMIA",
    tagColor: "#06B6D4",
  },
  {
    year: "2025–Hoy",
    age: "26",
    title: "Personalsoft → Bancolombia",
    subtitle: "Automatización · Power Platform · Python · SQL",
    icon: "🏦",
    color: "#FBBF24",
    bg: "rgba(251,191,36,0.12)",
    border: "rgba(251,191,36,0.35)",
    description:
      "Analista de automatización en el área de abastecimiento. Power Apps, Power Automate, Python, SharePoint, hyperautomation. El proyecto más grande y desafiante hasta ahora.",
    tag: "ACTUAL",
    tagColor: "#FBBF24",
    highlight: true,
  },
  {
    year: "Oct 2026",
    age: "27",
    title: "Meta — Ingeniero de Sistemas",
    subtitle: "ITM · Graduación estimada",
    icon: "🎯",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.15)",
    border: "rgba(34,197,94,0.4)",
    description:
      "Si Dios quiere, el título de Ingeniero de Sistemas. El cierre de un ciclo que empezó con un chuzón en el pecho y un juego de ratones.",
    tag: "FUTURO",
    tagColor: "#22C55E",
    future: true,
  },
];

const skills = [
  { name: "Power Platform", icon: "⚡" },
  { name: "Python", icon: "🐍" },
  { name: "TypeScript", icon: "📘" },
  { name: "SQL", icon: "🗄️" },
  { name: "Next.js / React", icon: "⚛️" },
  { name: "Power BI", icon: "📊" },
  { name: "n8n / IA", icon: "🤖" },
  { name: "Docker", icon: "🐳" },
];

export default function Timeline() {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0A0A0F",
        color: "#E2E8F0",
        fontFamily: "'Outfit', 'Segoe UI', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />

      {/* Ambient background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 20% 10%, rgba(59,130,246,0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 90%, rgba(168,85,247,0.05) 0%, transparent 60%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Header */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "56px 24px 20px",
        }}
      >
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11,
            letterSpacing: 6,
            color: "#64748B",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          De la Cancha al Código
        </div>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 900,
            lineHeight: 1.05,
            margin: 0,
            background:
              "linear-gradient(135deg, #F8FAFC 0%, #94A3B8 50%, #F8FAFC 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: -1.5,
          }}
        >
          Santiago
        </h1>
        <p
          style={{
            fontSize: 15,
            color: "#64748B",
            marginTop: 8,
            fontWeight: 300,
            letterSpacing: 0.5,
          }}
        >
          Futbolista → Músico → Tecnólogo → Ingeniero en formación →{" "}
          <span style={{ color: "#FBBF24", fontWeight: 600 }}>
            Automatización @ Bancolombia
          </span>
        </p>
      </div>

      {/* Skills bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
          flexWrap: "wrap",
          padding: "8px 24px 32px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {skills.map((s, i) => (
          <div
            key={i}
            style={{
              fontSize: 11,
              padding: "5px 12px",
              borderRadius: 20,
              border: "1px solid rgba(100,116,139,0.25)",
              color: "#94A3B8",
              fontFamily: "'Space Mono', monospace",
              letterSpacing: 0.5,
              background: "rgba(15,23,42,0.6)",
            }}
          >
            {s.icon} {s.name}
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 720,
          margin: "0 auto",
          padding: "0 24px 80px",
        }}
      >
        {/* Vertical line */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: 2,
            background:
              "linear-gradient(to bottom, transparent, rgba(100,116,139,0.2) 5%, rgba(100,116,139,0.2) 95%, transparent)",
            transform: "translateX(-50%)",
          }}
        />

        {phases.map((phase, i) => {
          const isLeft = i % 2 === 0;
          const isActive = activeIdx === i;

          return (
            <div
              key={i}
              onClick={() => setActiveIdx(isActive ? null : i)}
              style={{
                position: "relative",
                display: "flex",
                justifyContent: isLeft ? "flex-start" : "flex-end",
                padding: "12px 0",
                cursor: "pointer",
              }}
            >
              {/* Center dot */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 24,
                  width: isActive ? 18 : 12,
                  height: isActive ? 18 : 12,
                  borderRadius: "50%",
                  background: phase.color,
                  transform: "translate(-50%, 0)",
                  boxShadow: isActive
                    ? `0 0 20px ${phase.color}60, 0 0 40px ${phase.color}30`
                    : `0 0 8px ${phase.color}30`,
                  transition: "all 0.3s ease",
                  zIndex: 2,
                }}
              />

              {/* Card */}
              <div
                style={{
                  width: "calc(50% - 32px)",
                  background: isActive ? phase.bg : "rgba(15,23,42,0.4)",
                  border: `1px solid ${isActive ? phase.border : "rgba(51,65,85,0.3)"}`,
                  borderRadius: 14,
                  padding: isActive ? "16px 18px" : "12px 16px",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(8px)",
                  position: "relative",
                  ...(phase.highlight && !isActive
                    ? {
                        border: `1px solid ${phase.border}`,
                        background: phase.bg,
                      }
                    : {}),
                  ...(phase.future
                    ? {
                        borderStyle: "dashed",
                      }
                    : {}),
                }}
              >
                {/* Tag */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 6,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 9,
                      letterSpacing: 2,
                      color: phase.tagColor,
                      textTransform: "uppercase",
                      opacity: 0.9,
                    }}
                  >
                    {phase.tag}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 10,
                      color: "#475569",
                    }}
                  >
                    {phase.year}
                  </span>
                </div>

                {/* Icon + Title */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    marginBottom: 4,
                  }}
                >
                  <span style={{ fontSize: 22, lineHeight: 1 }}>
                    {phase.icon}
                  </span>
                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#F1F5F9",
                        lineHeight: 1.3,
                      }}
                    >
                      {phase.title}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#64748B",
                        fontWeight: 400,
                        marginTop: 2,
                      }}
                    >
                      {phase.subtitle}
                    </div>
                  </div>
                </div>

                {/* Description (expandable) */}
                <div
                  style={{
                    maxHeight: isActive ? 200 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.4s ease, opacity 0.3s ease",
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  <p
                    style={{
                      fontSize: 12,
                      lineHeight: 1.6,
                      color: "#94A3B8",
                      margin: "10px 0 4px",
                      fontWeight: 300,
                    }}
                  >
                    {phase.description}
                  </p>
                </div>

                {/* Expand hint */}
                {!isActive && (
                  <div
                    style={{
                      fontSize: 9,
                      color: "#475569",
                      marginTop: 4,
                      fontFamily: "'Space Mono', monospace",
                    }}
                  >
                    ▸ click para expandir
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          padding: "0 24px 48px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: 60,
            height: 1,
            background: "rgba(100,116,139,0.3)",
            margin: "0 auto 16px",
          }}
        />
        <p
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 10,
            color: "#475569",
            letterSpacing: 2,
          }}
        >
          «Sin darme cuenta, me estaba gustando el código.»
        </p>
      </div>
    </div>
  );
}
