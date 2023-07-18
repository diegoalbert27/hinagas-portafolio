import card1 from "../assets/images/cards/1.jpg"
import card2 from "../assets/images/cards/2.jpg"
import card3 from "../assets/images/cards/3.jpg"

export function Portfolio() {
  return (
    <div className="h-screen bg-stone-950 text-stone-100 pt-20" id="portfolio">
      <div className="h-full">
        <h2 className="text-center font-sans text-4xl font-extrabold">
          Proyectos
        </h2>

        <div className="flex justify-center gap-4 p-2 mt-5">
          <div className="bg-stone-900 text-stone-100 rounded-md w-56 shadow-lg">
            <div className="p-3">
              <img
                className="w-full h-28 rounded-md shadow-md"
                src={card1}
                alt=""
              />
              <h3 className="text-md font-sans font-semibold mt-2">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="text-sm mt-2 font-sans text-stone-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro,
                est!
              </p>

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
              <img
                className="w-full h-28 rounded-md shadow-md"
                src={card2}
                alt=""
              />
              <h3 className="text-md font-sans font-semibold mt-2">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="text-sm mt-2 font-sans text-stone-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro,
                est!
              </p>
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
              <img
                className="w-full h-28 rounded-md shadow-md"
                src={card3}
                alt=""
              />

              <h3 className="text-md font-sans font-semibold mt-2">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="text-sm mt-2 font-sans text-stone-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro,
                est!
              </p>

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
  )
}
