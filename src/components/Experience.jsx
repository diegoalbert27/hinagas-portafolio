import { Fade } from "react-awesome-reveal";

const experiences = [
  {
    company: "Crixto Venezuela",
    role: "Backend Developer",
    period: "2025 – Presente",
    link: "https://play.google.com/store/apps/details?id=crixto.pay&hl=en",
    description: "Plataforma fintech enfocada en pagos con criptomonedas y productos financieros crypto-fiat.",
    bullets: [
      "Integré servicios de tarjetas crypto-fiat para transacciones punto de venta — el producto generó más de $300K en comisiones en sus primeros tres meses.",
      "Construí un módulo de gestión de dispositivos que reforzó la seguridad de cuentas y optimizó los flujos de autenticación.",
      "Mantuve servicios de API de wallets y gestioné respuesta a incidentes en sistemas críticos en producción.",
    ],
    tech: ["TypeScript", "Node.js", "NestJS", "PostgreSQL", "Redis", "PM2", "Microservicios"],
  },
  {
    company: "Plurall",
    role: "Backend Developer",
    period: "2023 – 2025",
    link: "https://pidetucredito.plurall.com/",
    description: "Startup fintech enfocada en préstamos digitales y soluciones de microcrédito.",
    bullets: [
      "Co-construí un pipeline de scoring de riesgo crediticio con el equipo de Data: recolecté datos de solicitantes y negocios mediante una arquitectura orientada a eventos y automaticé la clasificación de riesgo para respaldar decisiones de préstamo.",
      "Diseñé pipelines pub/sub para distribuir datos financieros estructurados entre análisis de riesgo y operaciones.",
      "Construí una integración con HubSpot que sincronizaba automáticamente datos de solicitantes durante el onboarding — redujo el trabajo manual y dio mejor visibilidad al equipo de operaciones.",
      "Manejé monitoreo en producción con Grafana y CloudWatch; lideré investigaciones de incidentes cuando algo fallaba.",
    ],
    tech: ["TypeScript", "Node.js", "NestJS", "PostgreSQL", "AWS Lambda", "DynamoDB", "S3", "EventBridge", "Docker", "Serverless"],
  },
  {
    company: "Design & Graphics",
    role: "Full Stack Developer",
    period: "Ago 2021 – Nov 2023",
    description: "Agencia de desarrollo de software entregando soluciones a medida y productos internos.",
    bullets: [
      "Construí una plataforma de nómina cubriendo salarios, vacaciones, incidencias y seguros — ciclo completo, no solo cálculos.",
      "Desarrollé un plugin de PrestaShop para pagos con crypto mediante QR codes y webhooks.",
      "Construí el backend para una app móvil de gestión de instalaciones de paneles solares: programación, órdenes de trabajo, onboarding de clientes y seguimiento energético.",
    ],
    tech: ["PHP", "Laravel", "WordPress", "Node.js", "JavaScript", "MySQL", "Swift", "Git"],
  },
  {
    company: "Neo Aplicaciones",
    role: "Web Developer",
    period: "Mar 2021 – Jul 2021",
    link: "https://neoaplicaciones.com/",
    description: "Plataforma de pagos digitales enfocada en soluciones de pago electrónico.",
    bullets: [
      "Desarrollé módulos para administración de directorios de pago y gestión de transacciones.",
      "Construí funcionalidad de transferencia entre directorios de pago y componentes UI para flujos de pago.",
    ],
    tech: ["PHP", "HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "MySQL"],
  },
];

export function Experience() {
  return (
    <div className="bg-[var(--c-bg)] text-[var(--c-text)] py-8 px-6 md:px-10 lg:px-28" id="experience">
      <Fade triggerOnce>
        <h2 className="text-center font-sans text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-[var(--c-text-h)]">
          💼 Experiencia
        </h2>
        <p className="text-center text-[var(--c-text-40)] font-sans text-sm max-w-xl mx-auto mb-16 tracking-wide">
          Más de 4 años construyendo productos fintech en web y mobile
        </p>
      </Fade>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-[var(--c-timeline-line)]" />

        {experiences.map((exp, i) => (
          <Fade key={i} triggerOnce direction="up" delay={i * 200} className="pb-16 last:pb-0">
            <div className="relative pl-12 md:pl-16">
              <div className="absolute left-[13px] md:left-[21px] top-2 w-1.5 h-1.5 rounded-full bg-[var(--c-timeline-dot)] ring-4 ring-[var(--c-timeline-ring)]" />

              <div className="bg-[var(--c-bg-card)] backdrop-blur-xl border border-[var(--c-border)] rounded-2xl p-6 md:p-8">
                <span className="inline-block text-xs text-[var(--c-text-20)] tracking-widest uppercase mb-3">
                  {exp.period}
                </span>

                <h3 className="text-xl font-semibold text-[var(--c-text-h)] font-sans">
                  {exp.role}
                </h3>
                <p className="text-[var(--c-text-60)] font-medium text-sm mt-0.5">
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[var(--c-text-80)] transition-colors"
                  >
                    {exp.company}
                  </a>
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
