import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoPhp, BiLogoGit, BiSolidDownload } from "react-icons/bi";
import { Zoom } from "react-awesome-reveal";

export function About() {
  return (
    <div className="bg-gradient-to-b from-slate-900 from-70% to-stone-950 text-stone-100" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-4 content-start px-8 md:px-10 lg:px-28 pt-12 md:pt-18">
        <Zoom>
          <div className="md:p-4">
            <h2 className="font-sans text-4xl font-extrabold">Sobre mi</h2>
  
            <p className="mt-3 font-sans">
              Mi nombre es Diego y me encanta la música y la programación. Me apasiona enfrentar retos y ser parte de proyectos innovadores que me permitan aprender y crecer como profesional. Siempre estoy dispuesto a ayudar en todo lo que pueda y aportar mi granito de arena para lograr resultados brillantes.
            </p>
  
            <p className="mt-3 font-sans">
              Desde un tiempo para acá he estado desarrollando distintos proyectos para todo tipo de clientes como desarrollador web, ya sean páginas, aplicaciones o apis con distintas herramientas que se usan actualmente
            </p>
  
            <p className="mt-3 font-sans">
              Siempre me encuentro en busca de retos y conocer personas talentosas para aprender de ellas. Actualmente, tengo dos años de experiencia como desarrollador web, he trabajado con distintos lenguajes de programación como PHP, Python, JavaScript, CSS y HTML
            </p>
  
            <button className="mx-auto mt-8 md:mt-6 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-3 rounded-lg flex gap-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              <span className="font-extrabold">Descargar CV</span>
              <BiSolidDownload className="text-2xl" />
            </button>
          </div>
          <div className="mt-6 md:mt-0 md:p-4">
            <h2 className="font-sans text-4xl font-extrabold">Mis estudios</h2>
  
            <div className="mt-6 md:mt-4">
              <div className="bg-sky-800 transition ease-in delay-150 hover:bg-slate-700 duration-300 rounded-lg p-5 shadow-lg">
                <h3 className="text-1xl font-extrabold font-sans">
                  Tsu en Informática
                </h3>
                <a
                  className="text-stone-300 hover:text-blue-100 text-sm font-sans"
                  href="http://upta.edu.ve/"
                  target="_blanck"
                >
                  Universidad Politécnica Territorial del Estado Aragua
                </a>
                <div className="text-stone-300 text-sm font-light font-sans italic">
                  <time>Octubre, 2018</time> - <time>Diciembre, 2021</time>
                </div>
              </div>
  
              <div className="bg-sky-800 transition ease-in-out delay-150 hover:bg-slate-700 duration-700 rounded-lg p-5 shadow-lg mt-4">
                <h3 className="text-1xl font-extrabold font-sans">
                  Bootcamp Fullstack Certificate
                </h3>
                <a
                  className="text-stone-300 hover:text-blue-100 text-sm font-sans"
                  href="https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/d987a7a3d60e4bbb5903af5da20cff04"
                  target="_blanck"
                >
                  Fullstack Open 2022
                </a>
                <div className="text-stone-300 text-sm font-light font-sans italic">
                  <time>Octubre, 2021</time> - <time>Abril, 2022</time>
                </div>
              </div>
  
              <div className="md:p-3 mt-8 md:mt-4">
                <h4 className="text-center md:text-start text-lg md:text-sm font-extrabold font-sans">Habilidades</h4>
                <div className="flex overflow-x-auto space-x-8 w-full mt-3 p-1 lg:p-4">
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
                    <BiLogoGit className="hover:text-red-600 cursor-pointer shadow-sm text-5xl" />
                    <p className="text-sm">Git</p>
                  </div>
                  <div className="text-center">
                    <BiLogoPhp className="hover:text-blue-400 cursor-pointer shadow-sm text-5xl" />
                    <p className="text-sm">PHP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  )
}
