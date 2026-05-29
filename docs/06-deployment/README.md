# 06 — Deployment

## Platform: Vercel

```bash
npm install -g vercel
vercel login
vercel
```

## vercel.json
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Auto-deploy
Push to GitHub `main` → Vercel builds automatically.
