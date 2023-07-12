import background from "./assets/images/background.webp"
import avatar from "./assets/images/avatar.webp"

import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoPhp, BiLogoGit } from "react-icons/bi";

export default function App() {
  return (
    <>
      <nav className="fixed top-0 z-10 bg-blue-950/30 backdrop-filter backdrop-blur-lg w-full">
        <div className="max-w-5xl mx-auto px-1.5">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl text-stone-100 font-sans font-semibold">Logo</span>
            <div className="flex space-x-8 text-stone-100 font-sans font-semibold">
              <a href="#">Sobre mi</a>
              <a href="#">Proyectos</a>
              <a href="#">Contacto</a>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="w-full h-full backdrop-blur-lg text-stone-100 grid grid-cols-1 gap-4 place-content-center px-32">
          <div className="text-center">
            <div className="flex justify-center">
              <img
                className="w-52 border border-4 border-stone-100 rounded-full mb-2"
                src={avatar}
                alt="Diego Hinagas"
              />
            </div>

            <h1 className="font-sans text-5xl font-extrabold">
              Hola, Soy Diego
            </h1>
            <div className="w-96 mx-auto">
              <p className="mt-4 font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus quas eos voluptatum
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen bg-slate-900 text-stone-100">
        <div className="grid grid-cols-2 gap-4 content-start px-28 pt-32">
          <div className="p-4">
            <h2 className="font-sans text-4xl font-extrabold">Sobre mi</h2>
            
            <p className="mt-3 font-sans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse qui quis a rerum cumque necessitatibus itaque ducimus eos. Ea temporibus qui incidunt odio nobis architecto quae maiores dolorem harum id!</p>

            <p className="mt-3 font-sans">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis culpa praesentium illo tenetur voluptas temporibus eveniet laboriosam id qui voluptate. Quibusdam rerum nam dolore tempore, quidem quae perspiciatis ullam nobis!</p>

            <p className="mt-3 font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni obcaecati ipsum architecto similique id illo voluptatibus rem consequatur nesciunt eos optio commodi, accusamus blanditiis cum?</p>
          </div>
          <div className="p-4">
            <h2 className="font-sans text-4xl font-extrabold">Mis estudios</h2>
            
            <div className="mt-3">
              <div className="bg-sky-800 transition ease-in-out delay-185 hover:bg-slate-700 hover:p-5 duration-150 rounded-lg p-3 shadow-lg">
                <h3 className="text-1xl font-extrabold font-sans">Tsu en Informartica</h3>
                <a className="text-stone-300 hover:text-blue-100 text-sm font-sans" href="http://upta.edu.ve/" target="_blanck">
                  Universidad Politecnica Territorial del Estado Aragua
                </a>
                <div className="text-stone-300 text-sm font-light font-sans italic">
                  <time>Octubre, 2018</time> - <time>Diciembre, 2021</time>
                </div>
              </div>
              
              <div className="bg-sky-800 transition ease-in-out delay-185 hover:bg-slate-700 hover:p-5 duration-150 rounded-lg p-3 shadow-lg mt-4">
                  <h3 className="text-1xl font-extrabold font-sans">Bootcamp Fullstack Certifate</h3>
                  <a className="text-stone-300 hover:text-blue-100 text-sm font-sans" href="https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/d987a7a3d60e4bbb5903af5da20cff04" target="_blanck">
                    Fullstack Open 2022
                  </a>
                  <div className="text-stone-300 text-sm font-light font-sans italic">
                    <time>Octubre, 2021</time> - <time>Abril, 2022</time>
                  </div>
              </div>
              
              <div className="p-3 mt-4">
                  <h4 className="text-sm font-extrabold font-sans">Habilidades</h4>
                  <div className="flex justify-around mt-3 p-4">
                    <div className="text-center">
                      <BiLogoHtml5 className="hover:text-orange-500 cursor-pointer shadow-sm text-5xl" />
                      <p className="text-sm">HTML</p>
                    </div>
                    <div className="text-center">
                      <BiLogoCss3 className="hover:text-blue-700 cursor-pointer shadow-sm text-5xl" />
                      <p className="text-sm">CSS</p>
                    </div>
                    <div className="text-center">
                      <BiLogoJavascript className="hover:text-amber-400 cursor-pointer shadow-sm text-5xl" />
                      <p className="text-sm">Javascript</p>
                    </div>
                    <div className="text-center">
                      <BiLogoPhp className="hover:text-blue-400 cursor-pointer shadow-sm text-5xl" />
                      <p className="text-sm">PHP</p>
                    </div>
                    <div className="text-center">
                      <BiLogoGit className="hover:text-red-600 cursor-pointer shadow-sm text-5xl" />
                      <p className="text-sm">Git</p>
                    </div>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
