import { Navbar } from "./components/Navbar"
import { Header } from "./components/Header"
import { About } from "./components/About"
import { Portfolio } from "./components/Portfolio"



export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Portfolio />

      <footer className="text-center bg-slate-900 text-stone-100 py-4 font-light italic">
        Hecho con amor &#128147;, deveras! - 2023
      </footer>
    </>
  )
}
