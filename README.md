# 右肺摘除

Personal translation archive site by 鱼肉. Deployed via GitHub Pages.

## Stack

- **Vite 6** + **React 18** + **react-router-dom 6** (HashRouter)
- Plain CSS  — retro pixel aesthetic with VT323 font
- Data-driven: JSON files in `public/data/`, fetched at runtime

## Project Structure

```
public/
  data/
    comics.json        # comic entries (id, titles, cover, urls, status)
    videos.json        # video entries (id, titles, thumbnail, urls, status)
    news.json          # news strings displayed on Home
  media/img/
    covers/            # comic cover images (manually placed)
    thumbs/            # video thumbnail images (manually placed)
src/
  main.jsx             # entry point
  App.jsx              # HashRouter + routes
  pages/               # Home, Comics, Videos, About, Contact
  components/          # Navbar, FilterBar, ComicCard, VideoCard
  styles/              # one CSS file per component + global.css
```

## Data Format

### comics.json

```jsonc
{
  "comics": [{
    "id": "BoD",              // ID used as key
    "title_zh": "贝恩与恶魔",
    "title_en": "Batman: Bane of Demon",
    "author": "DC Comics",
    "chapters": "共四章",
    "translator": "鱼肉",
    "description": "...",
    "quote": "...",
    "cover": "media/img/covers/BoD-cover.jpg",  
    "download_url": "https://...",
    "read_url": "https://...",
    "status": "completed"     // "completed" | "in_progress"
  }]
}
```

### videos.json

```jsonc
{
  "videos": [{
    "id": "FrightFest2013",
    "title_zh": "...",
    "title_en": "...",
    "category": "Human Centipede",
    "description": "...",
    "original_url": "https://...",
    "thumbnail": "media/img/thumbs/FrightFest2013-thumb.jpg",
    "download_url": "https://...",
    "watch_url": "https://...",
    "status": "completed"
  }]
}
```

### news.json

```jsonc
{
  "news": [
    "03/01/2026 摘肺站..."   
  ]
}
```

## Commands

```bash
npm run dev       # start dev server
npm run build     # build to dist/
npm run preview   # preview production build locally
npm run deploy    # build + deploy to gh-pages branch
```

## Adding Content

1. Add entry to `public/data/comics.json` or `videos.json`
2. Place cover/thumbnail image in corresponding `public/media/img/` subfolder
3. Image paths in JSON are relative to `public/` (e.g. `media/img/covers/xxx.jpg`)
4. Cover filenames use lowercase

## Design Notes

- All images use `image-rendering: pixelated`
- CSS variables defined in `global.css` — edit there to change colors
