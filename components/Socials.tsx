import { Instagram, Music2, Youtube } from "lucide-react";

export function Socials() {
  const socials = [
    { name: "YouTube", handle: "@ZunkoBR", href: "https://www.youtube.com/@ZunkoBR", icon: Youtube },
    { name: "Instagram", handle: "Editar link", href: "#", icon: Instagram },
    { name: "TikTok", handle: "Editar link", href: "#", icon: Music2 },
  ];
  return (
    <section className="py-24 border-y border-white/5 bg-[#0b0b12]">
      <div className="container-zunko">
        <p className="text-sm font-bold uppercase tracking-[.22em] text-blue-400">Onde encontrar</p>
        <h2 className="mt-2 text-3xl font-black">Siga o Zunko</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {socials.map(({ name, handle, href, icon: Icon }) => (
            <a key={name} href={href} target={href !== "#" ? "_blank" : undefined} rel="noreferrer"
              className="glass rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 hover:border-violet-400/30 transition">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/5"><Icon /></span>
              <span><b className="block">{name}</b><small className="text-zinc-500">{handle}</small></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
