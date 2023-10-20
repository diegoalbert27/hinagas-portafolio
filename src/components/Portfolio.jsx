import bpc from "../assets/images/cards/bpc.png"

export function Portfolio() {
  return (
    <div className="bg-stone-950 text-stone-100 pt-10 md:py-10" id="portfolio">
      <h2 className="text-center font-sans text-4xl font-extrabold">
        Proyectos
      </h2>

      <div className="flex flex-col md:flex-row md:justify-center gap-4 p-8 md:p-2 md:mt-5">
        <div className="bg-stone-900 text-stone-100 rounded-md md:w-56 shadow-lg">
          <div className="p-3">
            <a href="http://bpcaragua.com/" target="_blank" rel="noreferrer">
              <img
                className="w-full h-28 rounded-md shadow-md"
                src={bpc}
                alt="BPC proyecto"
              />
            </a>
            <h3 className="text-md font-sans font-semibold mt-2">
              Biblioteca Publica Agustín Codazzi
            </h3>
            <p className="text-sm mt-2 font-sans text-stone-400">
              Sitio web para la gestión de procesos administrativo de la biblioteca
            </p>

            <div className="flex flex-wrap gap-1 mt-2">
              <div className="bg-stone-100 text-stone-950 rounded-full px-2 py-1">
                <p className="text-xs font-sans">CSS</p>
              </div>
              <div className="bg-stone-100 text-stone-950 rounded-full px-2 py-1">
                <p className="text-xs font-sans">PHP</p>
              </div>
              <div className="bg-stone-100 text-stone-950 rounded-full px-2 py-1">
                <p className="text-xs font-sans">HTML</p>
              </div>
              <div className="bg-stone-100 text-stone-950 rounded-full px-2 py-1">
                <p className="text-xs font-sans">Javascript</p>
              </div>
              <div className="bg-stone-100 text-stone-950 rounded-full px-2 py-1">
                <p className="text-xs font-sans">MySQL</p>
              </div>
              <div className="bg-stone-100 text-stone-950 rounded-full px-2 py-1">
                <p className="text-xs font-sans">Web</p>
              </div>
              <div className="bg-stone-100 text-stone-950 rounded-full px-2 py-1">
                <p className="text-xs font-sans">CMS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-stone-900 text-stone-100 rounded-md md:w-56 shadow-lg">
          <div className="p-3">
            <a href="https://simple-online-store-production.up.railway.app" target="_blank" rel="noreferrer">
              <img
                className="w-full h-28 rounded-md shadow-md"
                src="https://user-images.githubusercontent.com/48531350/272437822-fbe5fbe9-3d7a-4a45-b882-dc0e596e04a0.png"
                alt=""
              />
            </a>
            <h3 className="text-md font-sans font-semibold mt-2">
              Simple Online Store
            </h3>
            <p className="text-sm mt-2 font-sans text-stone-400">
              E-commerce para la venta de productos en linea.
            </p>
            <div className="flex flex-wrap gap-1 mt-2">
              <div className="bg-stone-100 text-stone-950 rounded-full px-2 py-1">
                <p className="text-xs font-sans">HTML</p>
              </div>
              <div className="bg-stone-100 text-stone-950 rounded-full px-2 py-1">
                <p className="text-xs font-sans">Javascript</p>
              </div>
              <div className="bg-stone-100 text-stone-950 rounded-full px-2 py-1">
                <p className="text-xs font-sans">CSS</p>
              </div>
              <div className="bg-stone-100 text-stone-950 rounded-full px-2 py-1">
                <p className="text-xs font-sans">PHP</p>
              </div>
              <div className="bg-stone-100 text-stone-950 rounded-full px-2 py-1">
                <p className="text-xs font-sans">Laravel</p>
              </div>
              <div className="bg-stone-100 text-stone-950 rounded-full px-2 py-1">
                <p className="text-xs font-sans">React</p>
              </div>
              <div className="bg-stone-100 text-stone-950 rounded-full px-2 py-1">
                <p className="text-xs font-sans">MySQL</p>
              </div>
              <div className="bg-stone-100 text-stone-950 rounded-full px-2 py-1">
                <p className="text-xs font-sans">E-commerce</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
