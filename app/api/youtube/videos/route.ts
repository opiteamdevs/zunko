import { NextResponse } from "next/server";
import { getZunkoVideos } from "@/lib/youtube";

export async function GET() {
  try {
    const configured = Boolean(process.env.YOUTUBE_API_KEY);
    const videos = configured ? await getZunkoVideos() : [];
    return NextResponse.json({
      configured,
      videos,
      message: configured ? undefined : "YOUTUBE_API_KEY não configurada."
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { configured: true, videos: [], error: "Não foi possível carregar os vídeos agora." },
      { status: 200 }
    );
  }
}
