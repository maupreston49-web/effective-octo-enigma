# Wildcord – Next.js + Tailwind (Dark Only)

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the dev server:

   ```bash
   npm run dev
   ```

3. Open http://localhost:3000 in your browser.

Routes:

- `/` – Hero / landing page
- `/chat` – Wildcord chat interface
- `/dashboard` – User dashboard
- `/community` – Community hub
- `/training` – Model training center (placeholder)

## Netlify deployment

This project is configured for Netlify's Next.js runtime via `netlify.toml`.

1. Set the build command to `npm run build` and the publish directory to `.next` (already defined in `netlify.toml`).
2. Ensure Node 18+ is available in the Netlify site settings (the official Next.js runtime requires it).
3. Deploy by connecting the repository to Netlify; the `@netlify/plugin-nextjs` plugin will handle serverless/edge output automatically during the build.
