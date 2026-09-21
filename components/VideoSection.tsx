import { ExternalLink, Play } from "lucide-react";
import type { YouTubeVideo } from "@/lib/youtube";

function dateBR(date: string) {
  return new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(date));
}

export function VideoSection({ videos, configured }: { videos: YouTubeVideo[]; configured: boolean }) {
  return (
    <section id="videos" className="py-24">
      <div className="container-zunko">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.22em] text-violet-400">Vídeos</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-black">Direto do canal</h2>
          </div>
          <a href="https://www.youtube.com/@ZunkoBR/videos" target="_blank" rel="noreferrer"
             className="text-sm text-zinc-400 hover:text-white transition">Ver todos no YouTube →</a>
        </div>

        {!configured && (
          <div className="mb-7 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-5 text-sm text-zinc-300">
            <strong className="text-white">Placeholder da API:</strong> configure <code className="text-violet-300">YOUTUBE_API_KEY</code> no ambiente do Render para carregar os vídeos reais de @ZunkoBR.
          </div>
        )}

        {videos.length === 0 ? (
          <div className="gradient-border rounded-3xl bg-[#11111A] p-8 md:p-12 text-center">
            <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 text-violet-300">
              <Play />
            </div>
            <h3 className="text-xl font-bold">Os vídeos aparecerão aqui</h3>
            <p className="mt-2 text-zinc-500 max-w-lg mx-auto">Nenhum vídeo foi carregado ainda. O conteúdo real do canal será exibido automaticamente quando a integração estiver configurada.</p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, i) => (
              <a key={video.id} href={video.url} target="_blank" rel="noreferrer"
                 className={`group overflow-hidden rounded-3xl bg-[#11111A] border border-white/7 hover:border-violet-400/30 transition duration-300 ${i === 0 ? "lg:col-span-2" : ""}`}>
                <div className="relative aspect-video overflow-hidden">
                  <img src={video.thumbnail} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
                  {i === 0 && <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold backdrop-blur">MAIS RECENTE</span>}
                  <span className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-white text-black opacity-0 group-hover:opacity-100 transition"><Play size={17} fill="currentColor"/></span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold leading-snug group-hover:text-violet-300 transition">{video.title}</h3>
                  <p className="mt-2 text-xs text-zinc-500">{dateBR(video.publishedAt)}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
