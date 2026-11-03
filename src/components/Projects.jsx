import { Fade } from "react-awesome-reveal";
import balances from "../assets/images/previsora/balances.webp";
import envelopes from "../assets/images/previsora/envelopes.webp";
import allocation from "../assets/images/previsora/allocation.webp";

const PREVISORA_REPO = "https://github.com/diegoalbert27/previsora-wallet-service";

// Solo se renderizan los proyectos con `visible: true`.
const projects = [
  {
    visible: true,
    featured: true,
    title: "Previsora — tesorería inteligente para stablecoins",
    description: null,
    details: [
      {
        label: "Contexto",
        text: "proyecto personal en testnet (Sepolia y Binance Spot Testnet), sin fondos reales ni auditoría de seguridad.",
      },
      {
        label: "Problema",
        text: "los saldos en stablecoins (USDC, USDT, USD1) están repartidos entre wallets y exchanges, sin una vista única de cuánto está asignado y cuánto libre.",
      },
      {
        label: "Qué construí",
        text: "una app móvil que unifica saldos de wallets Ethereum y Binance y permite repartirlos en «sobres» (fondo de emergencia, viajes) con un porcentaje por fuente de fondos. Backend en Supabase con Row Level Security, funciones Edge para sincronizar saldos y webhooks de Alchemy para actualizaciones casi en tiempo real. Credenciales del exchange cifradas con AES-256-GCM.",
      },
      {
        label: "Decisión de diseño",
        text: "los saldos de cada sobre se calculan con vistas de base de datos en lugar de guardarse, para que todos los clientes obtengan los mismos números. Las vistas usan security_invoker, así que Row Level Security sigue aplicando y los datos derivados no se filtran entre usuarios.",
      },
    ],
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "Edge Functions", "Alchemy"],
    links: [
      { href: PREVISORA_REPO, label: "Ver código en GitHub" },
      { href: `${PREVISORA_REPO}/blob/HEAD/screenshots/Demo.mp4`, label: "Ver demo en video" },
    ],
    images: [
      { src: balances, alt: "Previsora: saldo total, asignado y sin asignar, y desglose por activo (USDT, USDC, USD1)" },
      { src: envelopes, alt: "Previsora: sobres de ahorro con el total asignado" },
      { src: allocation, alt: "Previsora: porcentaje asignado a cada sobre para una fuente de fondos" },
    ],
  },
  {
    visible: true,
    title: "Sistema de préstamo circulante para una biblioteca",
    // TODO(diego): agregar el contexto de uso real (institución, usuarios).
    description:
      "Aplicación web para gestionar el préstamo de libros de una biblioteca: usuarios y cuentas, solicitantes, inventario, préstamos y devoluciones, eventos y organizadores, y auditoría con control de acceso. Proyecto de grado de Ingeniería en Informática.",
    details: [],
    stack: ["PHP", "MySQL", "JavaScript", "Webpack", "Composer"],
    links: [{ href: "https://github.com/diegoalbert27/bpc_v2Vani", label: "Ver código en GitHub" }],
  },
  {
    visible: true,
    title: "Scoring de riesgo crediticio",
    description: null,
    details: [
      { label: "Contexto", text: "startup fintech de crédito digital y microfinanzas." },
      {
        label: "Qué construí",
        text: "junto al equipo de Data, un pipeline orientado a eventos que recolecta datos de solicitantes y negocios y automatiza la clasificación de riesgo para respaldar las decisiones de préstamo, con pipelines pub/sub que distribuyen la información entre análisis de riesgo y operaciones.",
      },
      // TODO(diego): agregar una métrica real de impacto (por ejemplo tiempo de decisión
      // o % de solicitudes automatizadas) como { label: "Impacto", text: "..." }.
    ],
    stack: ["TypeScript", "NestJS", "AWS Lambda", "EventBridge", "DynamoDB"],
    links: [],
  },
];

export function Projects() {
  const visibleProjects = projects.filter((p) => p.visible);

  return (
    <div className="bg-[var(--c-bg)] text-[var(--c-text)] py-20 px-6 md:px-10 lg:px-28" id="proyectos">
      <Fade triggerOnce>
        <h2 className="text-center font-sans text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-[var(--c-text-h)]">
          🚀 Proyectos
        </h2>
        <p className="text-center text-[var(--c-text-40)] font-sans text-sm max-w-xl mx-auto mb-16 tracking-wide">
          Decisiones de producto y de ingeniería detrás de lo que construyo
        </p>
      </Fade>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {visibleProjects.map((project, i) => (
          <Fade
            key={project.title}
            triggerOnce
            direction="up"
            delay={i * 100}
            className={project.featured ? "md:col-span-2" : ""}
          >
            <div
              className={`h-full bg-[var(--c-bg-card)] backdrop-blur-xl border border-[var(--c-border)] rounded-2xl p-6 md:p-8 ${
                project.images ? "flex flex-col md:flex-row md:gap-10" : "flex flex-col"
              }`}
            >
              <div className="flex flex-col flex-1 min-w-0">
                <h3 className="text-xl font-semibold text-[var(--c-text-h)] font-sans">
                  {project.title}
                </h3>

                {project.description && (
                  <p className="text-sm text-[var(--c-text-60)] leading-relaxed mt-3">
                    {project.description}
                  </p>
                )}

                {project.details.length > 0 && (
                  <ul className="mt-3 space-y-2.5">
                    {project.details.map((d) => (
                      <li key={d.label} className="text-sm text-[var(--c-text-60)] leading-relaxed">
                        <span className="font-medium text-[var(--c-text-80)]">{d.label}:</span> {d.text}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-1.5 mt-6">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-[var(--c-text-40)] bg-[var(--c-bg-card)] border border-[var(--c-border)] px-2.5 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.links.length > 0 && (
                  <div className="mt-auto pt-5 flex flex-wrap gap-x-5 gap-y-2">
                    {project.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[var(--c-text-40)] hover:text-[var(--c-text-70)] tracking-wide transition-colors"
                      >
                        {l.label} →
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {project.images && (
                <div className="mt-8 md:mt-0 md:w-[26rem] shrink-0 grid grid-cols-3 gap-3 self-start">
                  {project.images.map((img) => (
                    <img
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-auto rounded-xl border border-[var(--c-border)]"
                    />
                  ))}
                </div>
              )}
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}
