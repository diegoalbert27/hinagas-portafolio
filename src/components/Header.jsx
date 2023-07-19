import background from "../assets/images/background.webp"
import avatar from "../assets/images/avatar.webp"

import { BiLogoLinkedinSquare, BiLogoGithub, BiLogoGmail } from "react-icons/bi";

export function Header() {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-full h-full backdrop-blur-lg text-stone-100 grid grid-cols-1 gap-4 place-content-center">
        <div className="text-center">
          <div className="flex justify-center">
            <img
              className="w-52 border border-4 border-stone-100 rounded-full mb-2"
              src={avatar}
              alt="Diego Hinagas"
            />
          </div>

          <h1 className="font-sans text-4xl md:text-5xl font-extrabold">
            Hey, soy Diego ;)
          </h1>
          <div className="w-64 md:w-96 mx-auto">
            <p className="mt-3 md:mt-4 font-sans font-semibold text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quas eos voluptatum
            </p>
          </div>
          <div className="mt-3 md:mt-4 flex justify-center gap-4">
            <a>
              <BiLogoLinkedinSquare className="text-4xl" />
            </a>
            <a>
              <BiLogoGithub className="text-4xl" />
            </a>
            <a>
              <BiLogoGmail className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
