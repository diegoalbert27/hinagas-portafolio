export function Navbar() {
  return (
    <nav className="fixed top-0 z-10 bg-blue-950/30 backdrop-filter backdrop-blur-lg w-full">
      <div className="max-w-5xl mx-auto px-1.5">
        <div className="flex items-center justify-between h-16">
          <a
            className="text-2xl text-stone-100 font-sans font-bold italic"
            href="#"
          >
            Diego Hinagas
          </a>
          <div className="flex space-x-8 text-stone-100 font-sans font-semibold">
            <a href="#about">Sobre mi</a>
            <a href="#portfolio">Proyectos</a>
          </div>
        </div>
      </div>
    </nav>
  )
}