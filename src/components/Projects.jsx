import { Fade } from "react-awesome-reveal";

// Solo se renderizan los proyectos con `visible: true`.
const projects = [
  {
    visible: false,
    // TODO(diego): completar la app React Native + Expo y poner `visible: true`:
    // nombre, problema que resuelve, decisiones de producto, stack, enlace
    // (TestFlight / Play / APK / repo) y captura.
    title: null,
    description: null,
    details: [],
    stack: [],
    link: null,
    image: null,
  },
  {
    visible: true,
    title: "Sistema de préstamo circulante para una biblioteca",
    // TODO(diego): agregar el contexto de uso real (institución, usuarios).
    description:
      "Aplicación web para gestionar el préstamo de libros de una biblioteca: usuarios y cuentas, solicitantes, inventario, préstamos y devoluciones, eventos y organizadores, y auditoría con control de acceso. Proyecto de grado de Ingeniería en Informática.",
    details: [],
    stack: ["PHP", "MySQL", "JavaScript", "Webpack", "Composer"],
    link: { href: "https://github.com/diegoalbert27/bpc_v2Vani", label: "Ver código en GitHub" },
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
    link: null,
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
          <Fade key={project.title} triggerOnce direction="up" delay={i * 100}>
            <div className="h-full flex flex-col bg-[var(--c-bg-card)] backdrop-blur-xl border border-[var(--c-border)] rounded-2xl p-6 md:p-8">
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

              {project.link && (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-5 text-xs text-[var(--c-text-40)] hover:text-[var(--c-text-70)] tracking-wide transition-colors"
                >
                  {project.link.label} →
                </a>
              )}
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}
