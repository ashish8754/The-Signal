# ◈ The Signal — Personal Tech Intelligence Newsletter

A curated, beautiful, and fully automated newsletter website for staying on top of AI and next-generation technology. **Fresh content every day. Zero manual work.**

## What Makes This Different

- **Truly Dynamic**: Content updates automatically every day via GitHub Actions — not a static site
- **Smart Curation**: Keyword heuristics + source authority + fuzzy deduplication filter out noise
- **Topic Clustering**: Related stories are grouped together for deeper understanding
- **Personalization**: Select your interests and stories get relevance-ranked for *you*
- **Resilient**: 7-day cache fallback means the newsletter never looks empty, even if APIs fail
- **Premium Design**: Warm amber/copper editorial aesthetic — feels like a magazine, not a SaaS template

## How the Daily Automation Works

```
Every day at 6:00 AM UTC
        │
        ▼
┌───────────────┐     ┌───────────────┐     ┌───────────────┐
│  Fetch Layer  │ ──► │ Process Layer │ ──► │ Deploy Layer  │
└───────────────┘     └───────────────┘     └───────────────┘

Fetch Layer (parallel):
  • 10 RSS feeds (TechCrunch, The Verge, OpenAI, Anthropic, etc.)
  • Hacker News top 30 stories
  • ArXiv latest papers (cs.AI, cs.LG, cs.CL, cs.CV, cs.RO)
  • GitHub trending AI repos

Process Layer:
  • 3-signal topic detection (keywords + source hint + version patterns)
  • Fuzzy deduplication (merges similar titles, e.g. "GPT-5.5" from 2 sources)
  • Quality scoring (source authority + recency + keyword density)
  • Content extraction (RSS descriptions → story excerpts)
  • Cache blending (if < 12 stories today, pull from 7-day cache)

Deploy Layer:
  • Regenerates data.js with fresh content
  • Commits to GitHub → auto-triggers GitHub Pages redeploy
```

## Sections

| Section | Description | Source |
|---------|-------------|--------|
| **Today's Lead** | The highest-quality story of the day | RSS / HN |
| **Topic Clusters** | AI news grouped by theme (LLMs, Agents, Infra, etc.) | RSS / HN |
| **Research Spotlight** | Latest papers with abstracts | ArXiv API |
| **GitHub Spotlight** | Trending AI-specific repositories | GitHub Search API |
| **The Frontier** | Quantum, biotech, space, energy breakthroughs | RSS filtered |

## Quick Start (Deploy in 5 Minutes)

### 1. Push to GitHub

```bash
cd newsletter
git init
git add .
git commit -m "Initial newsletter"
# Create a new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/the-signal.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` → `/ (root)`
4. Save — your site will be live at `https://YOUR_USERNAME.github.io/the-signal/`

### 3. Enable the Daily Workflow

1. Go to **Actions** tab in your repo
2. Click **"I understand my workflows, go ahead and enable them"**
3. The workflow `daily-update.yml` will now run automatically every day at 6:00 AM UTC
4. You can also trigger it manually: Actions → Daily Newsletter Update → Run workflow

## File Structure

```
newsletter/
├── index.html              # Main page (static, never changes)
├── styles.css              # Editorial design system (static)
├── app.js                  # Frontend interactivity (static)
├── data.js                 # ← AUTO-GENERATED daily by the pipeline
├── cache.json              # ← AUTO-GENERATED 7-day story cache
├── scripts/
│   └── fetch-content.js    # The content fetcher (run by GitHub Actions)
└── .github/
    └── workflows/
        └── daily-update.yml # GitHub Actions cron job
```

## Customization

### Change the Update Schedule

Edit `.github/workflows/daily-update.yml`:

```yaml
schedule:
  - cron: '0 6 * * *'   # Daily 6:00 AM UTC (default)
  - cron: '0 */6 * * *' # Every 6 hours (more frequent)
```

[Crontab.guru](https://crontab.guru/) is helpful for scheduling.

### Add/Remove RSS Sources

Edit `scripts/fetch-content.js` → `RSS_FEEDS` array:

```js
const RSS_FEEDS = [
  { url: 'https://your-source.com/feed/', source: 'Your Source' },
  // ... existing feeds
];
```

### Adjust Topic Keywords

Edit `scripts/fetch-content.js` → `TOPIC_KEYWORDS` to fine-tune what gets classified:

```js
const TOPIC_KEYWORDS = {
  llms: ['gpt', 'claude', 'llama', '...'],  // add your terms
  // ...
};
```

### Change Source Authority Rankings

Higher numbers = stories from this source rank higher:

```js
const SOURCE_AUTHORITY = {
  'OpenAI': 20,
  'TechCrunch': 18,
  'Your Blog': 15,
  // ...
};
```

### Manual Content Injection

If you want to manually add a story for a special issue:

1. Edit `data.js` directly
2. Add your story to the appropriate topic cluster
3. Commit and push — GitHub Pages will redeploy

The next automated run will overwrite it, so for permanent changes edit `scripts/fetch-content.js` instead.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML5, CSS3, ES6 (zero dependencies) |
| Fonts | Playfair Display, Inter, JetBrains Mono (Google Fonts) |
| Data Fetching | Node.js 20 native `fetch` |
| Hosting | GitHub Pages (free) |
| CI/CD | GitHub Actions (free) |
| APIs Used | rss2json (free), HN Firebase API (free), ArXiv API (free), GitHub Search API (free, no auth) |

## Troubleshooting

### "RSS fetch failed" warnings in Actions logs

Some RSS feeds are intermittently unavailable. This is normal — the pipeline continues with working feeds and falls back to cache if needed.

### Newsletter looks empty

The cache system guarantees minimum 12 stories by blending cached content. If it's still empty, check the Actions logs for fatal errors.

### Want to run locally?

```bash
cd newsletter
node scripts/fetch-content.js   # Fetches fresh content
python3 -m http.server 8080     # Serves the site
# Open http://localhost:8080
```

## Future Roadmap

- [ ] Telegram bot for mobile delivery
- [ ] Email digest generation (SendGrid/AWS SES)
- [ ] Dark/light mode toggle
- [ ] Search across all archived content
- [ ] Bookmarking / read-later with localStorage
- [ ] RSS feed output of the newsletter itself

---

Built for those who want to know what's next.
