import Link from "next/link";
import { Menu, Play, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Início", "#inicio"],
    ["Vídeos", "#videos"],
    ["Histórias", "#historias"],
    ["Sobre", "#sobre"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-zunko pt-4">
        <nav className="glass rounded-2xl px-4 py-3 flex items-center justify-between">
          <Link href="#inicio" className="flex items-center gap-2 font-black tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6]">
              Z
            </span>
            <span className="text-lg">Zunko</span>
          </Link>

          <div className="hidden md:flex items-center gap-7 text-sm text-zinc-400">
            {links.map(([label, href]) => <Link key={href} href={href} className="hover:text-white transition">{label}</Link>)}
          </div>

          <a href="https://www.youtube.com/@ZunkoBR" target="_blank" rel="noreferrer"
             className="hidden sm:flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-bold hover:bg-zinc-200 transition">
            <Play size={15} fill="currentColor" /> YouTube
          </a>

          <button aria-label="Abrir menu" className="md:hidden text-zinc-300" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        {open && (
          <div className="glass mt-2 rounded-2xl p-3 md:hidden">
            {links.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-zinc-300 hover:bg-white/5 hover:text-white">{label}</Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
