import avatar from "../assets/images/avatar.webp"
import { Fade } from "react-awesome-reveal";
import { BiLogoLinkedinSquare, BiLogoGithub, BiLogoGmail } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";

export function Header() {
  return (
    <div className="relative h-screen bg-gradient-to-b from-[var(--c-gradient-from)] to-[var(--c-gradient-to)] overflow-hidden" id="hero">
      <div className="mt-8 relative z-10 w-full h-full flex flex-col items-center justify-center text-[var(--c-text)] px-6">
        <Fade triggerOnce>
          <div className="flex justify-center mb-8">
            <img
              className="w-32 md:w-36 rounded-full ring-1 ring-[var(--c-ring)]"
              src={avatar}
              alt="Diego Hinagas"
            />
          </div>

          <h1 className="font-sans text-5xl md:text-7xl font-semibold tracking-tight text-center">
            Diego Hinagas
          </h1>

          <h2 className="mt-4 font-sans text-lg md:text-xl text-[var(--c-text-60)] font-light tracking-wide text-center">
            Backend & Product Engineer · Fintech, Pagos y Cripto
          </h2>

          <p className="mt-6 font-sans text-[var(--c-text-40)] text-base max-w-md text-center leading-relaxed">
            Construyo los sistemas detrás de pagos, wallets y crédito digital, de la API a la pantalla del usuario.
          </p>

          <div className="mt-4 flex items-center justify-center gap-1.5 text-[var(--c-text-40)] text-sm">
            <HiLocationMarker />
            <span>Caracas, Venezuela</span>
          </div>

          <div className="mt-8 flex justify-center gap-5">
            <a
              href="https://www.linkedin.com/in/diego-hinagas/"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--c-text-40)] hover:text-[var(--c-text-80)] transition-colors duration-500"
            >
              <BiLogoLinkedinSquare className="text-3xl" />
            </a>
            <a
              href="https://github.com/diegoalbert27"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--c-text-40)] hover:text-[var(--c-text-80)] transition-colors duration-500"
            >
              <BiLogoGithub className="text-3xl" />
            </a>
            <a
              href="mailto:hinagasrodriguez@gmail.com"
              className="text-[var(--c-text-40)] hover:text-[var(--c-text-80)] transition-colors duration-500"
            >
              <BiLogoGmail className="text-3xl" />
            </a>
          </div>
        </Fade>
      </div>
    </div>
  )
}
