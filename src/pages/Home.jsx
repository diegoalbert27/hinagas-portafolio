import background from '../assets/images/home-image.webp'
import osLogo from '../assets/images/os-logo.svg'

import calcIcon from '../assets/images/apps/calc.svg'
import fileManagerIcon from '../assets/images/apps/file-manager.svg'
import cheeseIcon from '../assets/images/apps/cheese.svg'
import musicIcon from '../assets/images/apps/gnome-music.svg'
import helpIcon from '../assets/images/apps/help.svg'
import textIcon from '../assets/images/apps/text-editor.svg'
import eogIcon from '../assets/images/apps/eog.svg'
import addressIcon from '../assets/images/apps/addressbook.svg'

export default function Home() {
  return(
    <div className="h-screen bg-cover bg-no-repeat" style={{ backgroundImage: `url(${background})` }}>
      <div className="w-full h-full flex flex-col">
        <div className="bg-stone-200/40 shadow-md	shadow-stone-800/40 flex">
          <div className="basis-1/1">
            <div className="ms-1.5 px-1">
              <img className="w-6 cursor-pointer" src={osLogo} alt="Os Logo" />
            </div>
          </div>
          <div className="grow">
            <div className="">
              
            </div>
          </div>
          <div className="grow flex justify-end gap-0.5 py-0.5 pe-2 text-sm font-mono font-semibold">            
            <div className="px-1.5 hover:rounded-lg hover:bg-stone-300/50 cursor-pointer">
              <span className="align-middle">16:10</span>
            </div>
          </div>
        </div>

        <div className="grow"></div>
        
        <div className="flex justify-center p-1.5">
          <div className="bg-stone-200/30 border border-stone-400 rounded-3xl flex gap-2.5 p-2.5 shadow-lg shadow-stone-800/40">
            <div className="">
              <img className="w-12 drop-shadow-md" src={fileManagerIcon} alt="" />
            </div>
            <div className="">
              <img className="w-12 drop-shadow-md" src={helpIcon} alt="" />
            </div>
            <div className="">
              <img className="w-12 drop-shadow-md" src={calcIcon} alt="" />
            </div>
            <div className="">
              <img className="w-12 drop-shadow-md" src={cheeseIcon} alt="" />
            </div>
            <div className="">
              <img className="w-12 drop-shadow-md" src={musicIcon} alt="" />
            </div>
            <div className="">
              <img className="w-12 drop-shadow-md" src={textIcon} alt="" />
            </div>
            <div className="">
              <img className="w-12 drop-shadow-md" src={eogIcon} alt="" />
            </div>
            <div className="">
              <img className="w-12 drop-shadow-md" src={addressIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}