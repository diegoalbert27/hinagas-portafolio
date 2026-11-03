import { SiVite, SiReact, SiCloudflare } from "react-icons/si";
import { HiHeart } from "react-icons/hi2";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 bg-[var(--c-bg)] text-[var(--c-text-20)] pt-8 pb-[max(2rem,env(safe-area-inset-bottom))] px-4 text-xs tracking-wide text-center border-t border-[var(--c-border-subtle)]">
      <span className="inline-flex items-center gap-1">
        Hecho con{" "}
        <HiHeart className="text-[var(--c-heart)]" />
        {" "}dedicación — 2026
      </span>
      <span className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[var(--c-text-20)] text-xs sm:text-sm">
        Powered by{" "}
        <span className="inline-flex items-center gap-1 whitespace-nowrap">
          <SiVite />
          Vite
        </span>
        {" + "}
        <span className="inline-flex items-center gap-1 whitespace-nowrap">
          <SiReact />
          React
        </span>
        {" + "}
        <span className="inline-flex items-center gap-1 whitespace-nowrap">
          <SiCloudflare />
          Cloudflare Workers
        </span>
      </span>
    </footer>
  )
}
