import background from "./assets/images/background.webp"
import avatar from "./assets/images/avatar.webp"

export default function App() {
  return (
    <>
      <nav className="fixed top-0 z-10 bg-blue-950/30 backdrop-filter backdrop-blur-lg w-full">
        <div className="max-w-5xl mx-auto px-4">
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
        <div className="w-full h-full backdrop-blur-lg text-stone-100 grid grid-cols-2 gap-4 place-content-center px-20">
          {/* <div className="">
            
          </div> */}
          <div className="">
            <img
              className="w-52 border border-4 border-stone-100 rounded-full mb-2"
              src={avatar}
              alt="Diego Hinagas"
            />

            <h1 className="font-sans text-5xl font-extrabold">
              Hola, Soy Diego
            </h1>

            <p className="mt-4 font-sans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quas eos voluptatum vel animi nulla expedita
              incidunt eveniet consequatur rerum?
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
