import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoPhp, BiLogoGit, BiSolidDownload } from "react-icons/bi";

export function About() {
  return (
    <div className="h-screen bg-gradient-to-b from-slate-900 from-70% to-stone-950 text-stone-100" id="about">
      <div className="grid grid-cols-2 gap-4 content-start px-28 pt-24">
        <div className="p-4">
          <h2 className="font-sans text-4xl font-extrabold">Sobre mi</h2>

          <p className="mt-3 font-sans">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse qui
            quis a rerum cumque necessitatibus itaque ducimus eos. Ea temporibus
            qui incidunt odio nobis architecto quae maiores dolorem harum id!
          </p>

          <p className="mt-3 font-sans">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            culpa praesentium illo tenetur voluptas temporibus eveniet
            laboriosam id qui voluptate. Quibusdam rerum nam dolore tempore,
            quidem quae perspiciatis ullam nobis!
          </p>

          <p className="mt-3 font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            obcaecati ipsum architecto similique id illo voluptatibus rem
            consequatur nesciunt eos optio commodi, accusamus blanditiis cum?
          </p>

          <button className="mx-auto mt-1 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-3 rounded-lg flex gap-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <span className="font-extrabold">Descargar CV </span>
            <BiSolidDownload className="text-2xl" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="font-sans text-4xl font-extrabold">Mis estudios</h2>

          <div className="mt-3">
            <div className="bg-sky-800 transition ease-in delay-150 hover:bg-slate-700 duration-300 rounded-lg p-5 shadow-lg">
              <h3 className="text-1xl font-extrabold font-sans">
                Tsu en Informartica
              </h3>
              <a
                className="text-stone-300 hover:text-blue-100 text-sm font-sans"
                href="http://upta.edu.ve/"
                target="_blanck"
              >
                Universidad Politecnica Territorial del Estado Aragua
              </a>
              <div className="text-stone-300 text-sm font-light font-sans italic">
                <time>Octubre, 2018</time> - <time>Diciembre, 2021</time>
              </div>
            </div>

            <div className="bg-sky-800 transition ease-in-out delay-150 hover:bg-slate-700 duration-700 rounded-lg p-5 shadow-lg mt-4">
              <h3 className="text-1xl font-extrabold font-sans">
                Bootcamp Fullstack Certifate
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
  )
}
