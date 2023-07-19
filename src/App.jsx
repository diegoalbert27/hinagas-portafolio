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

      <footer className="text-center bg-stone-950 text-stone-100 p-3 font-semibold italic">
        Hecho con mucho amor &#128147;, deveras! - 2023
      </footer>
    </>
  )
}
