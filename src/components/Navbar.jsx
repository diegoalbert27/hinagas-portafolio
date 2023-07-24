export function Navbar() {
  return (
    <nav className="fixed bottom-0 md:top-0 md:bottom-auto z-10 bg-blue-950/30 backdrop-filter backdrop-blur-lg w-full">
      <div className="md:max-w-lg lg:max-w-6xl mx-auto">
        <div className="flex items-center justify-center md:justify-between h-16">
          <a
            className="text-2xl text-stone-100 font-sans font-bold italic hidden md:block"
            href="#"
          >
            Diego Hinagas
          </a>
          <div className="flex space-x-4 text-stone-100 font-sans font-semibold">
            <a href="#about">Sobre mi</a>
            <a href="#portfolio">Proyectos</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
