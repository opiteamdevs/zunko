import { ArrowRight, BookOpen, Globe2, Play, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { VideoSection } from "@/components/VideoSection";
import { Socials } from "@/components/Socials";
import { getZunkoVideos } from "@/lib/youtube";

export const revalidate = 300;

const topics = [
  { category: "Histórias", title: "A internet tem histórias que parecem inventadas.", description: "Conteúdos rápidos para descobrir acontecimentos e contextos curiosos da web.", icon: BookOpen },
  { category: "Curiosidades", title: "Detalhes que passam despercebidos.", description: "Fatos e pequenas histórias apresentados de forma direta e dinâmica.", icon: Sparkles },
  { category: "Internet", title: "Do passado da web ao que está acontecendo agora.", description: "Uma seleção de assuntos relacionados à cultura e às histórias da internet.", icon: Globe2 },
];

export default async function Home() {
  const configured = Boolean(process.env.YOUTUBE_API_KEY);
  const videos = configured ? await getZunkoVideos(12) : [];
  const latest = videos[0];

  return (
    <>
      <Header />
      <main>
        <section id="inicio" className="relative min-h-[760px] overflow-hidden flex items-center pt-28">
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute -left-24 top-40 h-80 w-80 rounded-full bg-violet-600/15 blur-[110px]" />
          <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="container-zunko relative grid lg:grid-cols-[1.1fr_.9fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 text-xs text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" /> @ZunkoBR
              </div>
              <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-black tracking-[-.045em] leading-[.95]">
                Histórias e<br /><span className="gradient-text">curiosidades</span><br />da internet.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">
                Vídeos rápidos, narrados e com edição dinâmica para transformar histórias da internet em conteúdo fácil de assistir.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#videos" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-black hover:bg-zinc-200 transition">
                  <Play size={17} fill="currentColor" /> Assistir aos vídeos
                </a>
                <a href="https://www.youtube.com/@ZunkoBR" target="_blank" rel="noreferrer"
                   className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-bold hover:bg-white/10 transition">
                  Visitar o YouTube <ArrowRight size={17} />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="glow gradient-border rounded-[28px] overflow-hidden bg-[#11111A]">
                {latest ? (
                  <a href={latest.url} target="_blank" rel="noreferrer">
                    <div className="relative aspect-video">
                      <img src={latest.thumbnail} alt="" className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                      <div className="absolute bottom-0 p-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-violet-300">Vídeo mais recente</span>
                        <h2 className="mt-2 text-xl font-black">{latest.title}</h2>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="aspect-video p-8 flex flex-col justify-end bg-gradient-to-br from-violet-500/10 via-[#11111A] to-blue-500/10">
                    <span className="text-xs font-bold uppercase tracking-widest text-violet-300">Zunko</span>
                    <h2 className="mt-2 text-2xl font-black">Seu próximo vídeo em destaque aparece aqui.</h2>
                    <p className="mt-2 text-sm text-zinc-500">Placeholder até a API do YouTube ser configurada.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <VideoSection videos={videos} configured={configured} />

        <section id="historias" className="py-24">
          <div className="container-zunko">
            <p className="text-sm font-bold uppercase tracking-[.22em] text-violet-400">Universo Zunko</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-black">Histórias que dão vontade de clicar.</h2>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {topics.map(({ category, title, description, icon: Icon }) => (
                <article key={category} className="group rounded-3xl border border-white/7 bg-[#11111A] p-6 hover:-translate-y-1 hover:border-violet-400/25 transition">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-500/15 to-blue-500/15 text-violet-300"><Icon /></div>
                  <p className="mt-8 text-xs font-bold uppercase tracking-widest text-blue-400">{category}</p>
                  <h3 className="mt-2 text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-500">{description}</p>
                  <a href="#videos" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-zinc-300 hover:text-white">Explorar <ArrowRight size={15}/></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="py-24 bg-[#0b0b12] border-y border-white/5">
          <div className="container-zunko max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[.22em] text-blue-400">Sobre o Zunko</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-black">Uma janela para as histórias da internet.</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Zunko é um canal brasileiro dedicado a histórias e curiosidades da internet. A proposta é apresentar assuntos interessantes em vídeos rápidos, narrados e com edição dinâmica.
            </p>
            <p className="mt-4 text-zinc-500 leading-7">
              Este site não inventa informações pessoais sobre o criador: os dados exibidos aqui são focados no canal e no conteúdo publicado.
            </p>
          </div>
        </section>

        <Socials />
      </main>

      <footer className="py-8">
        <div className="container-zunko flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <span>© {new Date().getFullYear()} Zunko. Todos os direitos reservados.</span>
          <span>@ZunkoBR · Histórias e curiosidades da internet</span>
        </div>
      </footer>
    </>
  );
}
