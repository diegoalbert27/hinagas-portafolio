import { Fade } from "react-awesome-reveal";

const education = [
  {
    title: "Ingeniería en Informática",
    school: "Universidad Politécnica Territorial del Estado Aragua (UPTA)",
    period: "2018 – 2024",
    link: "http://upta.edu.ve/",
    thesis: {
      label: "Proyecto de grado: Sistema de préstamo circulante para una biblioteca (PHP, MySQL, JavaScript)",
      link: "https://github.com/diegoalbert27/bpc_v2Vani",
    },
  },
];

export function About() {
  return (
    <div className="bg-[var(--c-bg)] text-[var(--c-text)] py-20 px-6 md:px-10 lg:px-28" id="about">
      <div className="max-w-5xl mx-auto">
        <Fade triggerOnce>
          <h2 className="text-center font-sans text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-[var(--c-text-h)]">
            👨‍💻 Sobre mí
          </h2>
          <p className="text-center text-[var(--c-text-40)] font-sans text-sm max-w-xl mx-auto mb-16 tracking-wide">
            Backend & Product Engineer · Fintech, Pagos y Cripto
          </p>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <Fade triggerOnce direction="up" className="md:col-span-3">
            <div className="bg-[var(--c-bg-card)] backdrop-blur-xl border border-[var(--c-border)] rounded-2xl p-6 md:p-8">
              <p className="text-[var(--c-text-70)] leading-relaxed">
                Ingeniero backend con mentalidad de producto. Diseño y opero los sistemas detrás de pagos, wallets y crédito digital, y hoy extiendo mi alcance al producto completo con React Native + Expo.
              </p>
              <p className="text-[var(--c-text-70)] leading-relaxed mt-4">
                Más de 5 años construyendo fintech con TypeScript, Node.js, NestJS y AWS, en arquitecturas orientadas a eventos. Trabajo cerca de producto y operaciones para decidir qué construir, no solo cómo.
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
                      rel="noopener noreferrer"
                    >
                      {edu.school}
                    </a>
                    <p className="text-[var(--c-text-20)] text-xs mt-1 tracking-wide">{edu.period}</p>
                    {edu.thesis && (
                      <a
                        className="block text-[var(--c-text-40)] hover:text-[var(--c-text-70)] text-xs font-sans leading-snug mt-2 transition-colors"
                        href={edu.thesis.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {edu.thesis.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
