import { Fade } from "react-awesome-reveal";

const education = [
  {
    title: "Ingeniería en Informática",
    school: "Universidad Politécnica Territorial del Estado Aragua (UPTA)",
    period: "2024",
    link: "http://upta.edu.ve/",
  },
];

const certifications = [
  {
    title: "Modern Software Architecture: DDD, Events & Microservices",
    issuer: "Udemy",
    year: "2024",
  },
  {
    title: "TypeScript: Complete Guide",
    issuer: "Udemy",
    year: "2025",
  },
  {
    title: "Full Stack Open – JavaScript",
    issuer: "University of Helsinki",
    year: "2021",
  },
];

export function About() {
  return (
    <div className="bg-[var(--c-bg)] text-[var(--c-text)] py-20 px-6 md:px-10 lg:px-28" id="about">
      <div className="max-w-5xl mx-auto">
        <Fade triggerOnce>
          <h2 className="text-center font-sans text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-[var(--c-text-h)]">
            👨‍💻 Sobre mi
          </h2>
          <p className="text-center text-[var(--c-text-40)] font-sans text-sm max-w-xl mx-auto mb-16 tracking-wide">
            Full-Stack Backend Engineer · Fintech & Crypto
          </p>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <Fade triggerOnce direction="up" className="md:col-span-3">
            <div className="bg-[var(--c-bg-card)] backdrop-blur-xl border border-[var(--c-border)] rounded-2xl p-6 md:p-8">
              <p className="text-[var(--c-text-70)] leading-relaxed">
                Backend Engineer con enfoque Full-Stack y 4+ años construyendo productos fintech, de pagos y crypto en ecosistemas web y mobile.
              </p>
              <p className="text-[var(--c-text-70)] leading-relaxed mt-4">
                Me desenvuelvo en sistemas distribuidos y arquitecturas orientadas a eventos, y he lanzado productos que operan a escala en producción. Me apasiona enfrentar retos técnicos complejos y ser parte de proyectos innovadores que me permitan aprender y crecer como profesional.
              </p>
              <p className="text-[var(--c-text-70)] leading-relaxed mt-4">
                Siempre en busca de colaborar con personas talentosas y aportar soluciones que generen impacto real.
              </p>
            </div>
          </Fade>

          <div className="md:col-span-2 space-y-4">
            <Fade triggerOnce direction="up" delay={100}>
              <div className="bg-[var(--c-bg-card)] backdrop-blur-xl border border-[var(--c-border)] rounded-2xl p-5">
                <h3 className="text-xs font-medium text-[var(--c-text-40)] uppercase tracking-widest mb-4 font-sans">
                  Educación
                </h3>
                {education.map((edu, i) => (
                  <div key={i}>
                    <h4 className="font-semibold text-[var(--c-text-80)] font-sans text-sm">
                      {edu.title}
                    </h4>
                    <a
                      className="text-[var(--c-text-40)] hover:text-[var(--c-text-70)] text-xs font-sans transition-colors"
                      href={edu.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {edu.school}
                    </a>
                    <p className="text-[var(--c-text-20)] text-xs mt-1 tracking-wide">{edu.period}</p>
                  </div>
                ))}
              </div>
            </Fade>

            <Fade triggerOnce direction="up" delay={200}>
              <div className="bg-[var(--c-bg-card)] backdrop-blur-xl border border-[var(--c-border)] rounded-2xl p-5">
                <h3 className="text-xs font-medium text-[var(--c-text-40)] uppercase tracking-widest mb-4 font-sans">
                  Certificaciones
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, i) => (
                    <div key={i} className="border-l border-[var(--c-border)] pl-3">
                      <h4 className="text-sm font-medium text-[var(--c-text-70)] font-sans leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-[var(--c-text-40)] mt-0.5 tracking-wide">
                        {cert.issuer} · {cert.year}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
