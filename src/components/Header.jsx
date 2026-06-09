import avatar from "../assets/images/avatar.webp"
import { Fade } from "react-awesome-reveal";
import { BiLogoLinkedinSquare, BiLogoGithub, BiLogoGmail } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";

export function Header() {
  return (
    <div className="relative h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 overflow-hidden" id="hero">
      <div className="mt-8 relative z-10 w-full h-full flex flex-col items-center justify-center text-stone-100 px-6">
        <Fade triggerOnce>
          <div className="flex justify-center mb-8">
            <img
              className="w-32 md:w-36 rounded-full ring-1 ring-white/10"
              src={avatar}
              alt="Diego Hinagas"
            />
          </div>

          <h1 className="font-sans text-5xl md:text-7xl font-semibold tracking-tight text-center">
            Diego Hinagas
          </h1>

          <h2 className="mt-4 font-sans text-lg md:text-xl text-white/50 font-light tracking-wide text-center">
            Full-Stack Backend Engineer · Fintech & Crypto
          </h2>

          <p className="mt-6 font-sans text-white/40 text-base max-w-md text-center leading-relaxed">
            Construyo productos fintech, de pagos y crypto end-to-end, desde el backend hasta experiencias web y mobile.
          </p>

          <div className="mt-4 flex items-center justify-center gap-1.5 text-white/30 text-sm">
            <HiLocationMarker />
            <span>Caracas, Venezuela</span>
          </div>

          <div className="mt-8 flex justify-center gap-5">
            <a
              href="https://www.linkedin.com/in/diego-hinagas/"
              target="_blank"
              rel="noreferrer"
              className="text-white/30 hover:text-white/80 transition-colors duration-500"
            >
              <BiLogoLinkedinSquare className="text-3xl" />
            </a>
            <a
              href="https://github.com/diegoalbert27"
              target="_blank"
              rel="noreferrer"
              className="text-white/30 hover:text-white/80 transition-colors duration-500"
            >
              <BiLogoGithub className="text-3xl" />
            </a>
            <a
              href="mailto:hinagasrodriguez@gmail.com"
              className="text-white/30 hover:text-white/80 transition-colors duration-500"
            >
              <BiLogoGmail className="text-3xl" />
            </a>
          </div>
        </Fade>
      </div>
    </div>
  )
}
