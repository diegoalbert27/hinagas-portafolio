import { Loader } from "../components/loader"

export default function Init() {
  return (
    <div className="bg-stone-950 text-stone-50 h-screen flex flex-col justify-center">
      <div className="flex items-center justify-center">
        <Loader />
      </div>
      <div className="text-center mt-8">
        <h1 className="font-mono text-2xl">Hinagas OS</h1>
      </div>
    </div>
  )
}
