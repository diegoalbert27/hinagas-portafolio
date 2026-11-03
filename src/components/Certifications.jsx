import { Fade } from "react-awesome-reveal";
import { HiOutlineCheckBadge } from "react-icons/hi2";

// TODO(diego): agregar el resto de certificaciones de LinkedIn
// (https://www.linkedin.com/in/diego-hinagas/details/certifications/) y, si quieres,
// el enlace a cada credencial en `url`.
const certifications = [
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    year: "2025",
    url: null,
  },
  {
    title: "Modern Software Architecture: DDD, Events & Microservices",
    issuer: "Udemy",
    year: "2024",
    url: null,
  },
  {
    title: "TypeScript: Complete Guide",
    issuer: "Udemy",
    year: "2025",
    url: null,
  },
  {
    title: "Full Stack Open – JavaScript",
    issuer: "University of Helsinki",
    // TODO(diego): confirmar el año (2021 o 2022).
    year: "2021",
    url: null,
  },
  {
    title: "AI Fundamentals",
    issuer: "Google",
    year: "2026",
    url: null,
  },
  {
    title: "Claude Code para Programadores",
    issuer: "Platzi",
    year: "2026",
    url: null,
  },
];

export function Certifications() {
  return (
    <div className="bg-[var(--c-bg)] text-[var(--c-text)] py-20 px-6 md:px-10 lg:px-28" id="certificaciones">
      <Fade triggerOnce>
        <h2 className="text-center font-sans text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-[var(--c-text-h)]">
          🎓 Certificaciones
        </h2>
        <p className="text-center text-[var(--c-text-40)] font-sans text-sm max-w-xl mx-auto mb-16 tracking-wide">
          Formación continua en arquitectura, TypeScript e IA aplicada
        </p>
      </Fade>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {certifications.map((cert, i) => (
          <Fade key={cert.title} triggerOnce direction="up" delay={(i % 3) * 100}>
            <div className="h-full flex flex-col bg-[var(--c-bg-card)] backdrop-blur-xl border border-[var(--c-border)] rounded-2xl p-5">
              <div className="flex items-start justify-between gap-3">
                <HiOutlineCheckBadge className="text-2xl text-[var(--c-text-40)] shrink-0" aria-hidden="true" />
                <span className="text-xs text-[var(--c-text-20)] tracking-widest">{cert.year}</span>
              </div>

              <h3 className="mt-4 text-sm font-semibold text-[var(--c-text-80)] font-sans leading-snug">
                {cert.title}
              </h3>
              <p className="mt-1 text-xs text-[var(--c-text-40)] tracking-wide">{cert.issuer}</p>

              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-4 text-xs text-[var(--c-text-40)] hover:text-[var(--c-text-70)] tracking-wide transition-colors"
                >
                  Ver credencial →
                </a>
              )}
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}
