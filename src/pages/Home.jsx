import background from '../assets/images/home-image.webp'

export default function Home() {
  return(
    <div className="h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${background})` }}>
      <div className="w-full h-full transition ease-in delay-150 backdrop-blur-sm duration-300">
        Home
      </div>
    </div>
  )
}