import { Fade } from "react-awesome-reveal";

export function About() {
  return (
    <div className="bg-[var(--c-bg)] text-[var(--c-text)] py-12 px-4 sm:px-6 md:px-10 lg:px-28" id="about">
      <div className="max-w-5xl mx-auto">
        <Fade triggerOnce>
          <h2 className="text-center font-sans text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-[var(--c-text-h)]">
            👨‍💻 Sobre mí
          </h2>
          <p className="text-center text-[var(--c-text-40)] font-sans text-sm max-w-xl mx-auto mb-10 tracking-wide">
            Backend & Product Engineer · Fintech, Pagos y Cripto
          </p>
        </Fade>

        <div className="max-w-3xl mx-auto">
          <Fade triggerOnce direction="up">
            <div className="bg-[var(--c-bg-card)] backdrop-blur-xl border border-[var(--c-border)] rounded-2xl p-6 md:p-8">
              <p className="text-[var(--c-text-70)] leading-relaxed">
                Ingeniero backend con mentalidad de producto. Diseño y opero los sistemas detrás de pagos, wallets y crédito digital, y hoy extiendo mi alcance al producto completo con React Native + Expo.
              </p>
              <p className="text-[var(--c-text-70)] leading-relaxed mt-4">
                Más de 5 años construyendo fintech con TypeScript, Node.js, NestJS y AWS, en arquitecturas orientadas a eventos. Trabajo cerca de producto y operaciones para decidir qué construir, no solo cómo.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
