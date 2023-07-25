import background from "../assets/images/background.webp"
import avatar from "../assets/images/avatar.webp"

import Typewriter from "typewriter-effect";
import { Zoom } from "react-awesome-reveal";

import { BiLogoLinkedinSquare, BiLogoGithub, BiLogoGmail } from "react-icons/bi";

export function Header() {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-full h-full backdrop-blur-lg text-stone-100 grid grid-cols-1 gap-4 place-content-center">
        <div className="text-center">
          <Zoom cascade>
            <div className="flex justify-center">
              <img
                className="w-52 border border-4 border-stone-100 rounded-full mb-2"
                src={avatar}
                alt="Diego Hinagas"
              />
            </div>

            <h1 className="font-sans text-4xl md:text-5xl font-extrabold">
              <Typewriter options={{ loop: true }}
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(500)
                        .typeString('Hola, soy Diego ;)')
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString('Soy Desarrollador Web')
                        .pauseFor(1000)
                        .start()
                }}
              />
            </h1>
            <div className="w-64 md:w-96 mx-auto">
              <p className="mt-3 md:mt-4 font-sans font-semibold text-lg">
                Me gusta escuchar música, aprender del mundo de la tecnología y colaborar en proyectos e ideas creativas
              </p>
            </div>
            <div className="mt-3 md:mt-4 flex justify-center gap-4">
              <a href="https://www.linkedin.com/in/diego-hinagas/" target="_blanck">
                <BiLogoLinkedinSquare className="text-4xl" />
              </a>
              <a href="https://github.com/diegoalbert27" target="_blanck">
                <BiLogoGithub className="text-4xl" />
              </a>
              <a href="mailto: hinagasrodriguez@gmail.com">
                <BiLogoGmail className="text-4xl" />
              </a>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  )
}
