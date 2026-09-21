export type YouTubeVideo = {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string;
  url: string;
};

type ApiResponse<T> = { items?: T[] };

const API = "https://www.googleapis.com/youtube/v3";

async function yt<T>(path: string, params: Record<string, string>) {
  const key = process.env.YOUTUBE_API_KEY;
  if (!key) return null;

  const url = new URL(`${API}/${path}`);
  Object.entries({ ...params, key }).forEach(([k, v]) => url.searchParams.set(k, v));

  const res = await fetch(url.toString(), {
    next: { revalidate: Number(process.env.YOUTUBE_CACHE_SECONDS || 300) }
  });

  if (!res.ok) throw new Error(`YouTube API error: ${res.status}`);
  return (await res.json()) as T;
}

export async function getZunkoVideos(maxResults = 12): Promise<YouTubeVideo[]> {
  if (!process.env.YOUTUBE_API_KEY) return [];

  const channel = await yt<ApiResponse<{
    id: string;
    contentDetails?: { relatedPlaylists?: { uploads?: string } };
  }>>("channels", {
    part: "id,contentDetails",
    forHandle: "@ZunkoBR"
  });

  const item = channel?.items?.[0];
  const uploads = item?.contentDetails?.relatedPlaylists?.uploads;
  if (!uploads) return [];

  const playlist = await yt<ApiResponse<{
    contentDetails: { videoId: string };
    snippet: {
      title: string;
      description: string;
      publishedAt: string;
      thumbnails?: { maxres?: { url: string }, high?: { url: string }, medium?: { url: string } };
    };
  }>>("playlistItems", {
    part: "snippet,contentDetails",
    playlistId: uploads,
    maxResults: String(Math.min(maxResults, 50))
  });

  return (playlist?.items || []).map((v) => {
    const id = v.contentDetails.videoId;
    const thumbnail =
      v.snippet.thumbnails?.maxres?.url ||
      v.snippet.thumbnails?.high?.url ||
      v.snippet.thumbnails?.medium?.url ||
      `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

    return {
      id,
      title: v.snippet.title,
      description: v.snippet.description,
      publishedAt: v.snippet.publishedAt,
      thumbnail,
      url: `https://www.youtube.com/watch?v=${id}`
    };
  });
}
