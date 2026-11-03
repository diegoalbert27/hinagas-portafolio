import { Fade } from "react-awesome-reveal";
import { BiLogoGithub } from "react-icons/bi";
import { HiOutlinePlayCircle } from "react-icons/hi2";
import balances from "../assets/images/previsora/balances.webp";
import envelopes from "../assets/images/previsora/envelopes.webp";
import allocation from "../assets/images/previsora/allocation.webp";

const PREVISORA_REPO = "https://github.com/diegoalbert27/previsora-wallet-service";

// Solo se renderizan los proyectos con `visible: true`.
const projects = [
  {
    visible: true,
    featured: true,
    title: "Previsora",
    tagline: "Tesorería inteligente para stablecoins",
    badges: ["Proyecto personal", "Testnet"],
    note: "Sepolia y Binance Spot Testnet, sin fondos reales ni auditoría de seguridad.",
    details: [
      {
        label: "Problema",
        text: "Los saldos en stablecoins (USDC, USDT, USD1) están repartidos entre wallets y exchanges, sin una vista única de cuánto está asignado y cuánto libre.",
      },
      {
        label: "Qué construí",
        text: "Una app móvil que unifica saldos de wallets Ethereum y Binance y permite repartirlos en «sobres» (fondo de emergencia, viajes) con un porcentaje por fuente de fondos. Backend en Supabase con Row Level Security, funciones Edge para sincronizar saldos y webhooks de Alchemy para actualizaciones casi en tiempo real. Credenciales del exchange cifradas con AES-256-GCM.",
      },
      {
        label: "Decisión de diseño",
        highlight: true,
        text: "Los saldos de cada sobre se calculan con vistas de base de datos en lugar de guardarse, para que todos los clientes obtengan los mismos números. Las vistas usan security_invoker, así que Row Level Security sigue aplicando y los datos derivados no se filtran entre usuarios.",
      },
    ],
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "Edge Functions", "Alchemy"],
    links: [
      { href: PREVISORA_REPO, label: "Ver código", icon: BiLogoGithub, primary: true },
      { href: `${PREVISORA_REPO}/blob/HEAD/screenshots/Demo.mp4`, label: "Ver demo", icon: HiOutlinePlayCircle },
    ],
    // El orden importa: la captura central es la que queda al frente del abanico.
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

// Posición de cada captura dentro del abanico (izquierda, centro, derecha).
const phoneStyles = [
  "left-0 top-[9%] w-[36%] -rotate-6 group-hover:-translate-x-2 z-0",
  "left-1/2 -translate-x-1/2 top-0 w-[42%] z-10 group-hover:-translate-y-2",
  "right-0 top-[9%] w-[36%] rotate-6 group-hover:translate-x-2 z-0",
];

function renderChips(items) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <span
          key={t}
          className="text-xs text-[var(--c-text-40)] bg-[var(--c-bg-card)] border border-[var(--c-border)] px-2.5 py-0.5 rounded-full"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function renderFeatured(project) {
  return (
    <div className="group grid lg:grid-cols-[minmax(0,1fr)_25rem] gap-8 lg:gap-12 items-center bg-[var(--c-bg-card)] backdrop-blur-xl border border-[var(--c-border)] rounded-2xl p-6 md:p-10">
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {project.badges.map((b, i) => (
            <span
              key={b}
              className={`text-[11px] font-medium uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                i === 0
                  ? "text-[var(--c-text-60)] border-[var(--c-border)]"
                  : "text-amber-500 border-amber-500/30 bg-amber-500/10"
              }`}
            >
              {b}
            </span>
          ))}
        </div>

        <h3 className="font-sans text-3xl md:text-4xl font-semibold tracking-tight text-[var(--c-text-h)]">
          {project.title}
        </h3>
        <p className="mt-1 text-base text-[var(--c-text-60)] font-sans">{project.tagline}</p>
        <p className="mt-3 text-xs text-[var(--c-text-40)] leading-relaxed">{project.note}</p>

        <div className="mt-6 space-y-5">
          {project.details.map((d) =>
            d.highlight ? (
              <div
                key={d.label}
                className="border-l-2 border-[var(--c-text-20)] bg-[var(--c-bg-card)] rounded-r-xl pl-4 pr-4 py-3"
              >
                <h4 className="text-[11px] font-medium text-[var(--c-text-40)] uppercase tracking-widest">
                  {d.label}
                </h4>
                <p className="mt-1.5 text-sm text-[var(--c-text-70)] leading-relaxed">{d.text}</p>
              </div>
            ) : (
              <div key={d.label}>
                <h4 className="text-[11px] font-medium text-[var(--c-text-40)] uppercase tracking-widest">
                  {d.label}
                </h4>
                <p className="mt-1.5 text-sm text-[var(--c-text-60)] leading-relaxed">{d.text}</p>
              </div>
            )
          )}
        </div>

        <div className="mt-6">
          {renderChips(project.stack)}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.links.map((l) => {
            const Icon = l.icon;
            return (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-xs font-medium font-sans px-4 py-2 rounded-full transition-colors ${
                  l.primary
                    ? "bg-[var(--c-bg-btn)] text-[var(--c-text-btn)] hover:bg-[var(--c-bg-btn-hover)]"
                    : "border border-[var(--c-border)] text-[var(--c-text-80)] hover:bg-[var(--c-bg-card)]"
                }`}
              >
                <Icon className="text-base" aria-hidden="true" />
                {l.label}
              </a>
            );
          })}
        </div>
      </div>

      <div className="relative w-full max-w-sm lg:max-w-none mx-auto aspect-[1/1.05] rounded-2xl bg-[radial-gradient(circle_at_50%_45%,rgba(139,223,66,0.18),transparent_65%)]">
        {project.images.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className={`absolute h-auto rounded-[1.1rem] border-2 border-white/10 shadow-2xl shadow-black/40 transition-transform duration-500 ${phoneStyles[i]}`}
          />
        ))}
      </div>
    </div>
  );
}

function renderCard(project) {
  return (
    <div className="h-full flex flex-col bg-[var(--c-bg-card)] backdrop-blur-xl border border-[var(--c-border)] rounded-2xl p-6 md:p-8">
      <h3 className="text-xl font-semibold text-[var(--c-text-h)] font-sans">{project.title}</h3>

      {project.description && (
        <p className="text-sm text-[var(--c-text-60)] leading-relaxed mt-3">{project.description}</p>
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

      <div className="mt-6">
        {renderChips(project.stack)}
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
  );
}

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
            {project.featured ? renderFeatured(project) : renderCard(project)}
          </Fade>
        ))}
      </div>
    </div>
  );
}
