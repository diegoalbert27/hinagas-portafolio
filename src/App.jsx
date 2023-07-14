import background from "./assets/images/background.webp"
import avatar from "./assets/images/avatar.webp"

import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoPhp, BiLogoGit, BiSolidDownload, BiLogoLinkedinSquare, BiLogoGithub, BiLogoGmail } from "react-icons/bi";

import card1 from "./assets/images/cards/1.jpg"
import card2 from "./assets/images/cards/2.jpg"
import card3 from "./assets/images/cards/3.jpg"

export default function App() {
  return (
    <>
      <nav className="fixed top-0 z-10 bg-blue-950/30 backdrop-filter backdrop-blur-lg w-full">
        <div className="max-w-5xl mx-auto px-1.5">
          <div className="flex items-center justify-between h-16">
            <a className="text-2xl text-stone-100 font-sans font-semibold" href="#">Diego Hinagas</a>
            <div className="flex space-x-8 text-stone-100 font-sans font-semibold">
              <a href="#">Sobre mi</a>
              <a href="#">Proyectos</a>
              <a href="#">Contactame</a>
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
              Hey, Soy Diego ;)
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

      <div className="h-screen bg-gradient-to-b from-slate-900 from-70% to-stone-950 text-stone-100">
        <div className="grid grid-cols-2 gap-4 content-start px-28 pt-24">
          <div className="p-4">
            <h2 className="font-sans text-4xl font-extrabold">Sobre mi</h2>
            
            <p className="mt-3 font-sans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse qui quis a rerum cumque necessitatibus itaque ducimus eos. Ea temporibus qui incidunt odio nobis architecto quae maiores dolorem harum id!</p>

            <p className="mt-3 font-sans">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis culpa praesentium illo tenetur voluptas temporibus eveniet laboriosam id qui voluptate. Quibusdam rerum nam dolore tempore, quidem quae perspiciatis ullam nobis!</p>

            <p className="mt-3 font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni obcaecati ipsum architecto similique id illo voluptatibus rem consequatur nesciunt eos optio commodi, accusamus blanditiis cum?</p>

            <button className="mx-auto mt-1 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-3 rounded-lg flex gap-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <span className="font-extrabold">Descargar CV </span>
              <BiSolidDownload className="text-2xl" />
            </button>
          </div>
          <div className="p-4">
            <h2 className="font-sans text-4xl font-extrabold">Mis estudios</h2>
            
            <div className="mt-3">
              <div className="bg-sky-800 transition ease-in delay-150 hover:bg-slate-700 duration-300 rounded-lg p-5 shadow-lg">
                <h3 className="text-1xl font-extrabold font-sans">Tsu en Informartica</h3>
                <a className="text-stone-300 hover:text-blue-100 text-sm font-sans" href="http://upta.edu.ve/" target="_blanck">
                  Universidad Politecnica Territorial del Estado Aragua
                </a>
                <div className="text-stone-300 text-sm font-light font-sans italic">
                  <time>Octubre, 2018</time> - <time>Diciembre, 2021</time>
                </div>
              </div>
              
              <div className="bg-sky-800 transition ease-in-out delay-150 hover:bg-slate-700 duration-700 rounded-lg p-5 shadow-lg mt-4">
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

      <div className="h-screen bg-stone-950 text-stone-100 pt-20">
        <div className="h-full">
          <h2 className="text-center font-sans text-4xl font-extrabold">Proyectos</h2>
          
          <div className="flex justify-center gap-4 p-2 mt-5">
            <div className="bg-stone-900 text-stone-100 rounded-md w-56 shadow-lg">
              <div className="p-3">
                <img className="w-full h-28 rounded-md shadow-md" src={card1} alt="" />
                <h3 className="text-md font-sans font-semibold mt-2">Lorem ipsum dolor sit amet.</h3>
                <p className="text-sm mt-2 font-sans text-stone-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, est!</p>

                <div className="flex flex-wrap gap-1 mt-2">
                  <div className="bg-stone-100 text-stone-950 rounded-full px-2 py-1">
                    <p className="text-xs font-sans">CSS</p>
                  </div>
                  <div className="bg-stone-100 text-stone-950 rounded-full px-2 py-1">
                    <p className="text-xs font-sans">Web</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-stone-900 text-stone-100 rounded-md w-56 shadow-lg">
              <div className="p-3">
                <img className="w-full h-28 rounded-md shadow-md" src={card2} alt="" />
                <h3 className="text-md font-sans font-semibold mt-2">Lorem ipsum dolor sit amet.</h3>
                <p className="text-sm mt-2 font-sans text-stone-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, est!</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  <div className="bg-stone-100 text-stone-950 rounded-full px-2 py-1">
                    <p className="text-xs font-sans">HTML</p>
                  </div>
                  <div className="bg-stone-100 text-stone-950 rounded-full px-2 py-1">
                    <p className="text-xs font-sans">Javascript</p>
                  </div>
                  <div className="bg-stone-100 text-stone-950 rounded-full px-2 py-1">
                    <p className="text-xs font-sans">Web</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-stone-900 text-stone-100 rounded-md w-56 shadow-lg">
              <div className="p-3">
                <img className="w-full h-28 rounded-md shadow-md" src={card3} alt="" />
                
                <h3 className="text-md font-sans font-semibold mt-2">Lorem ipsum dolor sit amet.</h3>
                <p className="text-sm mt-2 font-sans text-stone-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, est!</p>

                <div className="flex flex-wrap gap-1 mt-2">
                  <div className="bg-stone-100 text-stone-950 rounded-full px-2 py-1">
                    <p className="text-xs font-sans">HTML</p>
                  </div>
                  <div className="bg-stone-100 text-stone-950 rounded-full px-2 py-1">
                    <p className="text-xs font-sans">CSS</p>
                  </div>
                  <div className="bg-stone-100 text-stone-950 rounded-full px-2 py-1">
                    <p className="text-xs font-sans">Javascript</p>
                  </div>
                  <div className="bg-stone-100 text-stone-950 rounded-full px-2 py-1">
                    <p className="text-xs font-sans">Web</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen bg-stone-950 text-stone-100 pt-28">
        <div className="h-full">
          <h2 className="text-center font-sans text-4xl font-extrabold">Contactame</h2>
          <div className="mt-4">
            <div className="bg-stone-900 p-4 rounded-md shadow-lg">
              <BiLogoLinkedinSquare className="mx-auto text-4xl" />
              <h3 className="font-light italic">@DiegoHinagas</h3>
            </div>
            
            <div className="bg-stone-900 p-4 rounded-md shadow-lg">
              <BiLogoGithub className="mx-auto text-4xl" />
              <h3 className="font-light italic">@DiegoHinagas</h3>
            </div>
            
            <div className="bg-stone-900 p-4 rounded-md shadow-lg">
              <BiLogoGmail className="mx-auto text-4xl" />
              <h3 className="font-light italic">@DiegoHinagas</h3>
            </div>
          </div>
        
        </div>
      </div>
    </>
  )
}
