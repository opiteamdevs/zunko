# Zunko — site oficial

Site oficial moderno para o canal brasileiro **@ZunkoBR**.

## Stack
- Next.js + TypeScript
- Tailwind CSS
- YouTube Data API v3
- Render

## Desenvolvimento

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abra `http://localhost:3000`.

## YouTube Data API

A chave deve ficar somente no servidor:

```env
YOUTUBE_API_KEY=sua_chave
```

Não use `NEXT_PUBLIC_YOUTUBE_API_KEY`.

A integração resolve o canal pelo handle `@ZunkoBR`, encontra a playlist de uploads e busca os vídeos reais. Sem a chave, o site mostra placeholders em vez de inventar vídeos.

## Render

O `render.yaml` já define:

- Build: `npm install && npm run build`
- Start: `npm run start`
- `YOUTUBE_API_KEY` como variável secreta

No painel do Render, adicione a chave da API em Environment Variables.

## Editar redes sociais

Edite `components/Socials.tsx`.

## Observação

O `metadataBase` em `app/layout.tsx` usa um domínio de exemplo do Render. Troque pelo domínio final quando ele existir.
