import { Slide } from "react-awesome-reveal";
import { Link } from "react-scroll";

export function Navbar() {
  return (
    <nav className="fixed bottom-0 md:top-0 md:bottom-auto z-10 bg-blue-950/30 backdrop-filter backdrop-blur-lg w-full">
      <div className="md:max-w-lg lg:max-w-6xl mx-auto">
        <div className="flex items-center justify-center md:justify-between h-16">
          <Slide>
            <a
              className="text-2xl text-stone-100 font-sans font-bold italic hidden md:block"
              href="#"
            >
              Diego Hinagas
            </a>
          </Slide>
          <Slide direction="right">
            <div className="flex space-x-4 text-stone-100 font-sans font-semibold">
              <Link className="cursor-pointer" activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={1000}>Sobre mi</Link>
              <Link className="cursor-pointer" activeClass="active" to="portfolio" spy={true} smooth={true} offset={50} duration={1000}>Proyectos</Link>
            </div>
          </Slide>
        </div>
      </div>
    </nav>
  )
}
