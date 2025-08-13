Zynndigital - Final Safe Package (Dark Mode)
Files included:
- index.html (dark mode)
- style.css
- app.js
- articles.json (20 articles)
- news.json (initially empty; will be updated by the workflow)
- scripts/fetch_news.py (safe excerpt-only fetcher)
- .github/workflows/news-updater.yml (runs every 3 hours)
- robots.txt, sitemap.xml, google verification file (if provided)
- README.txt

Deployment steps:
1. Create a public GitHub repo named 'zynndigital'.
2. Upload all files and folders (from this package) to repo root.
3. In repo Settings -> Pages: choose 'Deploy from a branch' -> branch 'main' -> root -> Save.
4. Visit: https://<your-username>.github.io/zynndigital/ after 1-2 minutes.
5. In Google Search Console, add property with that URL and verify using included HTML file.
6. To enable news auto-update: ensure GitHub Actions are enabled. You can run the workflow manually once from Actions tab to populate news.json.
Notes on copyright & safety:
- News fetcher saves excerpt only and links to original sources; respects robots.txt.
- If target site blocks scraping, workflow will produce empty news.json and site will continue functioning.
