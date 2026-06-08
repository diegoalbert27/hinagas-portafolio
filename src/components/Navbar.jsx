import { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { BiLogoLinkedinSquare, BiLogoGithub, BiLogoGmail } from "react-icons/bi";

const links = [
  { to: "about", label: "Sobre mi" },
  { to: "experience", label: "Experiencia" },
  { to: "skills", label: "Skills" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="fixed top-0 z-30 bg-neutral-950/60 backdrop-blur-2xl border-b border-white/[0.06] w-full">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Slide>
              <a
                className="text-lg text-white/90 font-sans font-medium tracking-tight hover:text-white transition-colors"
                href="#"
              >
                Diego Hinagas
              </a>
            </Slide>

            <Slide direction="right">
              <div className="hidden md:flex items-center gap-1">
                <div className="flex space-x-1 text-white/60 font-sans font-medium text-sm mr-4">
                  {links.map((l) => (
                    <Link
                      key={l.to}
                      className="cursor-pointer hover:text-white/90 transition-colors px-3 py-2 rounded-lg hover:bg-white/[0.04]"
                      activeClass="text-white"
                      to={l.to}
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={1000}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
                <a
                  href="mailto:hinagasrodriguez@gmail.com"
                  className="text-xs font-medium font-sans bg-white/90 text-neutral-950 hover:bg-white px-4 py-2 rounded-full transition-colors"
                >
                  Contacto
                </a>
              </div>
            </Slide>

            <button
              className="md:hidden text-white/60 hover:text-white transition-colors p-1"
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
            >
              <HiMenuAlt3 className="text-2xl" />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-500 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-neutral-950/95 backdrop-blur-2xl border-l border-white/[0.06] transition-transform duration-500 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-white/[0.06]">
          <span className="text-base font-medium text-white/90 font-sans">
            Diego Hinagas
          </span>
          <button
            className="text-white/40 hover:text-white transition-colors p-1"
            onClick={closeMenu}
            aria-label="Cerrar menú"
          >
            <HiX className="text-2xl" />
          </button>
        </div>

        <nav className="flex flex-col p-5 space-y-1">
          {links.map((l) => (
            <Link
              key={l.to}
              className="cursor-pointer text-white/60 hover:text-white font-sans font-medium text-lg transition-colors px-4 py-3 rounded-xl hover:bg-white/[0.04]"
              activeClass="text-white bg-white/[0.04]"
              to={l.to}
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
              onClick={closeMenu}
            >
              {l.label}
            </Link>
          ))}

          <div className="pt-4">
            <a
              href="mailto:hinagasrodriguez@gmail.com"
              className="block text-center text-sm font-medium font-sans bg-white/90 text-neutral-950 hover:bg-white px-4 py-3 rounded-full transition-colors"
              onClick={closeMenu}
            >
              Contacto
            </a>
          </div>

          <div className="pt-8 mt-4 border-t border-white/[0.06]">
            <div className="flex justify-center gap-5">
              <a
                href="https://www.linkedin.com/in/diego-hinagas/"
                target="_blank"
                rel="noreferrer"
                className="text-white/30 hover:text-white/70 transition-colors"
              >
                <BiLogoLinkedinSquare className="text-2xl" />
              </a>
              <a
                href="https://github.com/diegoalbert27"
                target="_blank"
                rel="noreferrer"
                className="text-white/30 hover:text-white/70 transition-colors"
              >
                <BiLogoGithub className="text-2xl" />
              </a>
              <a
                href="mailto:hinagasrodriguez@gmail.com"
                className="text-white/30 hover:text-white/70 transition-colors"
              >
                <BiLogoGmail className="text-2xl" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
