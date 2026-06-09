import { SiVite, SiReact, SiCloudflare } from "react-icons/si";
import { HiHeart } from "react-icons/hi2";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 bg-neutral-950 text-white/20 py-8 text-xs tracking-wide border-t border-white/[0.04]">
      <span className="inline-flex items-center gap-1">
        Hecho con{" "}
        <HiHeart className="text-red-500" />
        {" "}dedicación — 2026
      </span>
      <span className="inline-flex items-center gap-1.5 text-white/15 text-sm">
        Powered by{" "}
        <span className="inline-flex items-center gap-1">
          <SiVite />
          Vite
        </span>
        {" + "}
        <span className="inline-flex items-center gap-1">
          <SiReact />
          React
        </span>
        {" + "}
        <span className="inline-flex items-center gap-1">
          <SiCloudflare />
          Cloudflare Workers
        </span>
      </span>
    </footer>
  )
}
