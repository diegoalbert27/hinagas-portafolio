import { Fade } from "react-awesome-reveal";

const experiences = [
  {
    company: "Fintech crypto-fiat",
    role: "Ingeniero de Software",
    period: "SEP 2025 – PRESENTE",
    location: "Remoto",
    description: "Plataforma fintech enfocada en pagos con criptomonedas y productos financieros crypto-fiat.",
    bullets: [
      "Desarrollé un módulo de gestión de dispositivos que reforzó la seguridad de las cuentas y agilizó la autenticación.",
      "Integré servicios de tarjetas crypto-fiat para pagos en punto de venta, en conjunto con producto y operaciones.",
      "Soy responsable de la confiabilidad de servicios financieros críticos: monitoreo, análisis y resolución de incidentes.",
    ],
    tech: ["TypeScript", "Node.js", "NestJS", "PostgreSQL", "Redis", "PM2", "Microservicios"],
  },
  {
    company: "Elitgon - Plurall",
    role: "Desarrollador Backend",
    period: "NOV 2023 – SEP 2025",
    location: "Bogotá, Colombia · Remoto",
    link: "https://pidetucredito.plurall.com/",
    description: "Startup fintech enfocada en préstamos digitales y soluciones de microcrédito.",
    bullets: [
      "Construí procesos de generación y distribución de información financiera con modelos pub/sub sobre AWS (EventBridge, Lambda).",
      "Integré HubSpot CRM para automatizar el onboarding y el seguimiento de clientes.",
      "Desarrollé y mantuve servicios de cobranzas, desembolsos y operaciones financieras.",
      "Monitoreé producción con Grafana y AWS CloudWatch, e investigué y resolví incidentes.",
    ],
    tech: ["TypeScript", "Node.js", "NestJS", "PostgreSQL", "AWS Lambda", "DynamoDB", "S3", "EventBridge", "Docker", "Serverless Framework"],
  },
  {
    company: "DevelopersandGraphics",
    role: "Desarrollador Full Stack",
    period: "JUL 2021 – AGO 2023",
    location: "Maracay, Venezuela · Presencial",
    description: "Agencia de desarrollo de software entregando soluciones a medida y productos internos.",
    bullets: [
      "Plataforma de gestión de nómina y sistema de inventario y ventas.",
      "Plugin de PrestaShop que habilitó pagos con criptomonedas mediante QR, wallets y webhooks.",
      "Backend de una app móvil para la gestión de instalaciones solares.",
      "Herramienta de automatización y sincronización de cargas masivas de datos con .NET y C#.",
      "APIs REST con Laravel y frontends con Inertia (React y Vue); apps full stack con stack MEVN.",
    ],
    tech: ["PHP", "Laravel", "Node.js", "JavaScript", "Vue", "React", "MySQL", ".NET / C#"],
  },
  {
    company: "Neo Aplicaciones",
    role: "Desarrollador Web",
    period: "MAR 2021 – JUL 2021",
    location: "Maracay, Venezuela · Presencial",
    link: "https://neoaplicaciones.com/",
    description: "Plataforma de pagos digitales enfocada en soluciones de pago electrónico.",
    bullets: [
      "Desarrollé módulos de administración de directorios de pago.",
      "Implementé transferencias entre usuarios, en frontend y backend.",
      "Trabajé con PHP, JavaScript y MySQL, incluyendo pruebas e2e.",
    ],
    tech: ["PHP", "HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "MySQL"],
  },
];

export function Experience() {
  return (
    <div className="bg-[var(--c-bg)] text-[var(--c-text)] py-12 px-6 md:px-10 lg:px-28" id="experience">
      <Fade triggerOnce>
        <h2 className="text-center font-sans text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-[var(--c-text-h)]">
          💼 Experiencia
        </h2>
        <p className="text-center text-[var(--c-text-40)] font-sans text-sm max-w-xl mx-auto mb-10 tracking-wide">
          Más de 5 años construyendo productos fintech en web y mobile
        </p>
      </Fade>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-[var(--c-timeline-line)]" />

        {experiences.map((exp, i) => (
          <Fade key={i} triggerOnce direction="up" delay={i * 200} className="pb-10 last:pb-0">
            <div className="relative pl-12 md:pl-16">
              <div className="absolute left-[13px] md:left-[21px] top-2 w-1.5 h-1.5 rounded-full bg-[var(--c-timeline-dot)] ring-4 ring-[var(--c-timeline-ring)]" />

              <div className="bg-[var(--c-bg-card)] backdrop-blur-xl border border-[var(--c-border)] rounded-2xl p-6 md:p-8">
                <span className="block text-xs text-[var(--c-text-20)] tracking-widest uppercase">
                  {exp.period}
                </span>
                <p className="text-xs text-[var(--c-text-20)] mt-1 mb-3">{exp.location}</p>

                <h3 className="text-xl font-semibold text-[var(--c-text-h)] font-sans">
                  {exp.role}
                </h3>
                <p className="text-[var(--c-text-60)] font-medium text-sm mt-0.5">
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--c-text-80)] transition-colors"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </p>
                <p className="text-[var(--c-text-40)] text-xs mt-2 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-[var(--c-text-60)] leading-relaxed">
                      <span className="text-[var(--c-text-20)] mt-1 shrink-0 select-none">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-6">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-[var(--c-text-40)] bg-[var(--c-bg-card)] border border-[var(--c-border)] px-2.5 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}
