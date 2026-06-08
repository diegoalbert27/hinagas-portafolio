import { Navbar } from "./components/Navbar"
import { Header } from "./components/Header"
import { About } from "./components/About"
import { Experience } from "./components/Experience"
import { Skills } from "./components/Skills"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <div className="relative py-8 bg-neutral-950">
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      </div>
      <Skills />
      <Footer />
    </>
  )
}
