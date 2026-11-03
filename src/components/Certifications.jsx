import { Fade } from "react-awesome-reveal";
import { HiOutlineCheckBadge } from "react-icons/hi2";

// Ordenadas de la más reciente a la más antigua (fuente: LinkedIn).
const certifications = [
  {
    title: "Claude Code para Programadores",
    issuer: "Platzi",
    date: "NOV 2026",
    url: "https://platzi.com/p/hinagasdev/curso/14051-course/diploma/detalle/",
  },
  {
    title: "Curso de Fundamentos de Ingeniería de Software",
    issuer: "Platzi",
    date: "OCT 2026",
    url: "https://platzi.com/p/hinagasdev/curso/11997-course/diploma/detalle/",
  },
  {
    title: "Curso Básico de Computadores e Informática",
    issuer: "Platzi",
    date: "AGO 2026",
    url: "https://platzi.com/p/hinagasdev/curso/2793-course/diploma/detalle/",
  },
  {
    title: "AI Fundamentals",
    issuer: "Google",
    date: "MAY 2026",
    url: "https://www.coursera.org/account/accomplishments/verify/L0NOIENV3YI8",
  },
  {
    title: "TypeScript",
    issuer: "Udemy",
    date: "NOV 2025",
    url: "https://www.udemy.com/certificate/UC-335df6a5-7ca0-48ab-a8f4-27643b1b2a59/",
  },
  {
    title: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic",
    date: "AGO 2025",
    url: "https://verify.skilljar.com/c/utzwa5jnhpox",
  },
  {
    title: "Arquitectura Software Moderna: DDD, Eventos, Microservicios",
    issuer: "Udemy",
    date: "AGO 2024",
    url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-278a661b-b366-4219-b59d-fbe6bad9e037.pdf",
  },
  {
    title: "Full Stack Open",
    issuer: "University of Helsinki",
    date: "OCT 2021",
    url: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/d987a7a3d60e4bbb5903af5da20cff04",
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
          Formación continua en ingeniería de software, TypeScript e IA aplicada
        </p>
      </Fade>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {certifications.map((cert, i) => (
          <Fade key={cert.title} triggerOnce direction="up" delay={(i % 3) * 100}>
            <div className="h-full flex flex-col bg-[var(--c-bg-card)] backdrop-blur-xl border border-[var(--c-border)] rounded-2xl p-5">
              <div className="flex items-start justify-between gap-3">
                <HiOutlineCheckBadge className="text-2xl text-[var(--c-text-40)] shrink-0" aria-hidden="true" />
                <span className="text-xs text-[var(--c-text-20)] tracking-widest">{cert.date}</span>
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
