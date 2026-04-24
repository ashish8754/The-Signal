#!/usr/bin/env node
/**
 * THE SIGNAL — Daily Content Fetcher (Enhanced Heuristic Pipeline)
 * Fetches, deduplicates, scores, and curates AI/tech content.
 */

const fs = require('fs');
const path = require('path');

// ── CONFIG ──────────────────────────────────────────────────────────

const RSS_FEEDS = [
  { url: 'https://techcrunch.com/category/artificial-intelligence/feed/', source: 'TechCrunch' },
  { url: 'https://www.theverge.com/ai-artificial-intelligence/rss/index.xml', source: 'The Verge' },
  { url: 'https://venturebeat.com/category/ai/feed/', source: 'VentureBeat' },
  { url: 'https://www.marktechpost.com/category/artificial-intelligence/feed/', source: 'MarkTechPost' },
  { url: 'https://blog.google/technology/ai/rss/', source: 'Google Blog' },
  { url: 'https://openai.com/news/rss.xml', source: 'OpenAI' },
  { url: 'https://www.anthropic.com/news/rss.xml', source: 'Anthropic' },
  { url: 'https://blog.mistral.ai/rss.xml', source: 'Mistral' },
  { url: 'https://ai.googleblog.com/feeds/posts/default', source: 'Google AI' },
  { url: 'https://news.ycombinator.com/rss', source: 'Hacker News' },
];

const ARXIV_CATEGORIES = ['cs.AI', 'cs.LG', 'cs.CL', 'cs.CV', 'cs.RO'];

const SOURCE_AUTHORITY = {
  'OpenAI': 20, 'Anthropic': 20, 'Google Blog': 18, 'Google AI': 18,
  'TechCrunch': 18, 'The Verge': 18, 'VentureBeat': 16, 'Mistral': 16,
  'Hacker News': 12, 'MarkTechPost': 10, 'Default': 8
};

const SOURCE_TOPIC_HINT = {
  'OpenAI': 'llms', 'Anthropic': 'llms', 'Mistral': 'llms',
  'Google Blog': 'llms', 'Google AI': 'research',
  'MarkTechPost': 'research'
};

const TOPIC_KEYWORDS = {
  llms: ['llm', 'language model', 'gpt', 'claude', 'gemini', 'mistral', 'transformer', 'llama', 'fine-tuning', 'prompt', 'token', 'inference', 'generative ai', 'chatbot', 'foundation model', 'pretrained', 'parameter', 'embedding', 'context window', 'rag', 'retrieval augmented'],
  agents: ['agent', 'autonomous', 'crewai', 'autogen', 'devin', 'swarm', 'multi-agent', 'workflow', 'orchestration', 'tool use', 'function calling', 'planning', 'reasoning', 'chain of thought'],
  vision: ['vision', 'image generation', 'diffusion', 'stable diffusion', 'dall-e', 'sora', 'midjourney', 'computer vision', 'segmentation', 'object detection', 'image recognition', 'visual', 'generative image'],
  multimodal: ['multimodal', 'voice', 'audio', 'video generation', 'speech', 'whisper', 'text-to-speech', 'text-to-image', 'text-to-video'],
  robotics: ['robot', 'embodied', 'humanoid', 'manipulation', 'boston dynamics', 'figure ai', 'tesla bot', 'locomotion', 'dexterity', 'bipedal'],
  research: ['paper', 'arxiv', 'neurips', 'icml', 'iclr', 'benchmark', 'dataset', 'survey', 'mechanistic interpretability', 'alignment', 'theoretical', 'novel architecture'],
  opensource: ['open source', 'github', 'huggingface', 'model release', 'weights', 'license', 'apache', 'mit', 'released', 'available', 'download'],
  infra: ['gpu', 'nvidia', 'tpu', 'inference', 'quantization', 'distillation', 'hardware', 'chip', 'blackwell', 'training cluster', 'compute', 'throughput', 'latency', 'serving', 'deployment'],
  quantum: ['quantum', 'qubit', 'superconducting', 'ibm quantum', 'google quantum', 'ionq', 'quantum supremacy', 'quantum error'],
  biotech: ['biotech', 'alphafold', 'protein', 'drug discovery', 'crispr', 'genomics', 'longevity', 'brain', 'neural interface', 'bio'],
  space: ['space', 'starship', 'spacex', 'nasa', 'mars', 'satellite', 'rocket', 'orbital', 'spacecraft', 'launch'],
  energy: ['battery', 'solid state', 'fusion', 'renewable', 'solar', 'nuclear', 'energy storage', 'grid', 'power', 'efficiency'],
  hardware: ['chip', 'semiconductor', 'neural processing', 'nvidia', 'amd', 'intel', 'apple silicon', 'asic', 'processor', 'die'],
  security: ['jailbreak', 'safety', 'adversarial', 'alignment', 'red team', 'constitutional', 'robustness', 'privacy', 'attack', 'vulnerability', 'exploit'],
  devtools: ['framework', 'sdk', 'api', 'developer tool', 'vscode', 'cursor', 'coding assistant', 'ide', 'library', 'package', 'npm', 'pypi']
};

// Patterns for versioned model names (e.g., gpt-5.5 matches gpt-5)
const VERSION_PATTERNS = [
  /\bgpt[-\s]?[345]\b/i, /\bgpt[-\s]?[345]\.\d+/i,
  /\bclaude[-\s]?[345]\b/i, /\bclaude[-\s]?[345]\.\d+/i,
  /\bgemini[-\s]?\d?\b/i, /\bgemini[-\s]?\d+\.\d+/i,
  /\bllama[-\s]?[2345678]\b/i, /\bllama[-\s]?\d+\.\d+/i,
  /\bmistral[-\s]?\w+\b/i,
];

const NEXTGEN_KEYWORDS = {
  quantum: ['quantum', 'qubit', 'superconducting', 'ionq'],
  biotech: ['biotech', 'alphafold', 'protein', 'drug discovery', 'crispr', 'genomics', 'longevity'],
  space: ['space', 'starship', 'spacex', 'nasa', 'mars', 'satellite', 'rocket', 'orbital'],
  energy: ['battery', 'solid state', 'fusion', 'renewable', 'solar', 'nuclear', 'energy storage'],
  materials: ['superconductor', 'graphene', 'nanomaterial', 'self-healing', 'metamaterial']
};

// ── HELPERS ─────────────────────────────────────────────────────────

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function timeAgo(dateStr) {
  const then = new Date(dateStr);
  const now = new Date();
  const diffMs = now - then;
  const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
  if (diffHrs < 1) return 'Just now';
  if (diffHrs < 24) return `${diffHrs}h ago`;
  const diffDays = Math.floor(diffHrs / 24);
  if (diffDays < 7) return `${diffDays}d ago`;
  return then.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function recencyScore(dateStr) {
  const then = new Date(dateStr);
  const now = new Date();
  const diffHrs = (now - then) / (1000 * 60 * 60);
  if (diffHrs < 1) return 15;
  if (diffHrs < 6) return 10;
  if (diffHrs < 24) return 5;
  if (diffHrs < 48) return 2;
  return 0;
}

function truncate(str, maxLen) {
  if (!str) return '';
  if (str.length <= maxLen) return str;
  return str.slice(0, maxLen).replace(/\s+\S*$/, '') + '…';
}

// Levenshtein distance for fuzzy deduplication
function levenshtein(a, b) {
  const m = a.length, n = b.length;
  if (!m) return n;
  if (!n) return m;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

function similarity(a, b) {
  const dist = levenshtein(a.toLowerCase(), b.toLowerCase());
  const maxLen = Math.max(a.length, b.length);
  return maxLen === 0 ? 1 : 1 - dist / maxLen;
}

// ── TOPIC DETECTION (3-signal heuristic) ────────────────────────────

function detectTopic(title, content = '', source = '') {
  const text = (title + ' ' + content).toLowerCase();
  const words = new Set(text.split(/[^a-z0-9\.\-]+/).filter(w => w.length > 1));
  const scores = {};

  // Signal 1: Keyword matching
  for (const [topic, keywords] of Object.entries(TOPIC_KEYWORDS)) {
    scores[topic] = keywords.reduce((sum, kw) => {
      const kwLower = kw.toLowerCase();
      if (kwLower.includes(' ')) {
        return sum + (text.includes(kwLower) ? 2 : 0); // phrase match = stronger
      }
      return sum + (words.has(kwLower) ? 1 : 0);
    }, 0);
  }

  // Signal 2: Source heuristic
  const sourceHint = SOURCE_TOPIC_HINT[source];
  if (sourceHint) {
    scores[sourceHint] = (scores[sourceHint] || 0) + 3;
  }

  // Signal 3: Version pattern matching (gpt-5.5, claude-4, etc.)
  for (const pattern of VERSION_PATTERNS) {
    if (pattern.test(title)) {
      scores.llms = (scores.llms || 0) + 2;
      break;
    }
  }

  const best = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
  return best && best[1] > 0 ? best[0] : null;
}

function detectNextGenTopic(title, content = '') {
  const text = (title + ' ' + content).toLowerCase();
  for (const [topic, keywords] of Object.entries(NEXTGEN_KEYWORDS)) {
    if (keywords.some(kw => text.includes(kw.toLowerCase()))) {
      return topic;
    }
  }
  return null;
}

// ── QUALITY SCORING ─────────────────────────────────────────────────

function scoreStory(story) {
  const authority = SOURCE_AUTHORITY[story.source] || SOURCE_AUTHORITY.Default;
  const recency = recencyScore(story.rawDate);
  const hasDesc = story.description && story.description.length > 50 ? 5 : 0;
  const keywordDensity = Math.min(story.title.split(/\s+/).length > 0
    ? (Object.values(TOPIC_KEYWORDS).flat().filter(kw =>
        (story.title + ' ' + (story.description || '')).toLowerCase().includes(kw.toLowerCase())
      ).length / story.title.split(/\s+/).length) * 20
    : 0, 10);

  return 50 + authority + recency + hasDesc + keywordDensity;
}

// ── FETCHERS ────────────────────────────────────────────────────────

async function fetchWithRetry(url, options = {}, retries = 2) {
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(url, { ...options, signal: AbortSignal.timeout(15000) });
      if (res.ok) return res;
      if (i < retries) await delay(1000 * (i + 1));
    } catch (e) {
      if (i >= retries) throw e;
      await delay(1000 * (i + 1));
    }
  }
  throw new Error(`Failed after ${retries} retries: ${url}`);
}

async function fetchRSS() {
  const stories = [];
  for (const feed of RSS_FEEDS) {
    try {
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}`;
      const data = await (await fetchWithRetry(apiUrl)).json();
      if (!data.items) continue;

      for (const item of (data.items || []).slice(0, 4)) {
        const desc = item.description || item.content || '';
        const cleanDesc = desc.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
        const topic = detectTopic(item.title, cleanDesc, feed.source);

        stories.push({
          id: 'rss-' + Math.random().toString(36).slice(2, 10),
          title: item.title.trim(),
          source: feed.source,
          time: timeAgo(item.pubDate),
          rawDate: item.pubDate,
          topic: topic,
          url: item.link,
          description: truncate(cleanDesc, 500),
          score: 0 // computed later
        });
      }
      await delay(600);
    } catch (e) {
      console.warn(`  ⚠️ RSS failed: ${feed.source} — ${e.message}`);
    }
  }
  return stories;
}

async function fetchHackerNews() {
  const stories = [];
  try {
    const topIds = await (await fetchWithRetry('https://hacker-news.firebaseio.com/v0/topstories.json')).json();

    for (const id of topIds.slice(0, 30)) {
      try {
        const item = await (await fetchWithRetry(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)).json();
        if (!item || !item.title) continue;

        const topic = detectTopic(item.title);
        if (!topic) continue;

        stories.push({
          id: 'hn-' + id,
          title: item.title,
          source: 'Hacker News',
          time: timeAgo(new Date(item.time * 1000).toISOString()),
          rawDate: new Date(item.time * 1000).toISOString(),
          topic: topic,
          url: item.url || `https://news.ycombinator.com/item?id=${id}`,
          description: '',
          score: 0
        });
        await delay(80);
      } catch (e) {
        // Skip individual failures
      }
    }
  } catch (e) {
    console.warn(`  ⚠️ HN failed — ${e.message}`);
  }
  return stories;
}

async function fetchArXiv() {
  const papers = [];
  try {
    const categoryQuery = ARXIV_CATEGORIES.map(c => `cat:${c}`).join('+OR+');
    const url = `http://export.arxiv.org/api/query?search_query=${categoryQuery}&sortBy=submittedDate&sortOrder=descending&max_results=12`;
    const xml = await (await fetchWithRetry(url)).text();

    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
    let match;
    while ((match = entryRegex.exec(xml)) !== null && papers.length < 6) {
      const entry = match[1];
      const title = (entry.match(/<title>([\s\S]*?)<\/title>/)?.[1] || '').replace(/\n/g, ' ').trim();
      const summary = (entry.match(/<summary>([\s\S]*?)<\/summary>/)?.[1] || '').replace(/\n/g, ' ').trim();
      const authors = [...entry.matchAll(/<name>(.*?)<\/name>/g)].map(m => m[1]).join(', ');
      const journal = (entry.match(/<arxiv:journal_ref>(.*?)<\/arxiv:journal_ref>/)?.[1] || 'arXiv preprint').trim();
      const idMatch = entry.match(/<id>(.*?)<\/id>/);
      const paperUrl = idMatch ? idMatch[1] : '#';
      const category = entry.match(/<category term="(.*?)"/)?.[1] || 'cs.AI';

      const badgeMap = { 'cs.AI': 'AI', 'cs.LG': 'ML', 'cs.CL': 'NLP', 'cs.CV': 'Vision', 'cs.RO': 'Robotics' };

      papers.push({
        id: 'arxiv-' + Math.random().toString(36).slice(2, 10),
        title: title,
        authors: truncate(authors, 60) || 'Unknown Authors',
        journal: journal,
        abstract: truncate(summary, 320),
        badge: badgeMap[category] || 'Research',
        url: paperUrl
      });
    }
  } catch (e) {
    console.warn(`  ⚠️ ArXiv failed — ${e.message}`);
  }
  return papers;
}

async function fetchGitHubTrending() {
  const repos = [];
  try {
    // Search for AI-specific repos by topic keywords in description
    const queries = [
      'llm stars:>100 language:Python',
      'ai-agent stars:>50 language:Python',
      'machine-learning stars:>200 language:Python',
      'diffusion stars:>50 language:Python',
      'llm stars:>50 language:TypeScript',
      'neural-network stars:>100 language:Rust'
    ];

    const langColors = {
      'Python': '#3572A5', 'TypeScript': '#3178c6', 'JavaScript': '#f1e05a',
      'Rust': '#dea584', 'Go': '#00ADD8', 'C++': '#f34b7d', 'Java': '#b07219',
      'Jupyter Notebook': '#DA5B0B', 'C': '#555555'
    };

    for (const query of queries) {
      if (repos.length >= 6) break;
      try {
        const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=3`;
        const data = await (await fetchWithRetry(url, {
          headers: { 'Accept': 'application/vnd.github.v3+json' }
        })).json();

        for (const repo of (data.items || []).slice(0, 2)) {
          // Deduplicate by name
          if (repos.some(r => r.name === repo.full_name)) continue;

          repos.push({
            id: 'gh-' + Math.random().toString(36).slice(2, 10),
            name: repo.full_name,
            desc: truncate(repo.description || 'No description available.', 120),
            stars: repo.stargazers_count > 1000
              ? (repo.stargazers_count / 1000).toFixed(1) + 'k'
              : String(repo.stargazers_count),
            lang: repo.language || 'Unknown',
            langColor: langColors[repo.language] || '#8b949e',
            url: repo.html_url
          });
        }
        await delay(500);
      } catch (e) {
        console.warn(`  ⚠️ GitHub query failed: ${query} — ${e.message}`);
      }
    }
  } catch (e) {
    console.warn(`  ⚠️ GitHub failed — ${e.message}`);
  }
  return repos;
}

// ── PROCESSING ──────────────────────────────────────────────────────

function deduplicateStories(stories) {
  const unique = [];
  for (const story of stories) {
    const normalizedTitle = story.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
    const dupIndex = unique.findIndex(u => similarity(normalizedTitle, u._normalizedTitle) > 0.72);

    if (dupIndex >= 0) {
      // Merge: keep higher-authority source, accumulate description
      const existing = unique[dupIndex];
      const existingAuth = SOURCE_AUTHORITY[existing.source] || 0;
      const newAuth = SOURCE_AUTHORITY[story.source] || 0;

      if (newAuth > existingAuth) {
        existing.source = story.source;
        existing.url = story.url;
      }
      if (story.description && story.description.length > (existing.description || '').length) {
        existing.description = story.description;
      }
      existing._mergedSources = (existing._mergedSources || [existing.source]).concat(story.source);
    } else {
      story._normalizedTitle = normalizedTitle;
      story._mergedSources = [story.source];
      unique.push(story);
    }
  }

  // Clean up temp fields
  return unique.map(s => {
    delete s._normalizedTitle;
    delete s._mergedSources;
    return s;
  });
}

function computeScores(stories) {
  for (const story of stories) {
    story.score = scoreStory(story);
  }
  return stories.sort((a, b) => b.score - a.score);
}

// ── CACHE ───────────────────────────────────────────────────────────

function loadCache() {
  const cachePath = path.join(__dirname, '..', 'cache.json');
  try {
    if (fs.existsSync(cachePath)) {
      const cache = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
      // Filter to last 7 days
      const cutoff = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      cache.stories = (cache.stories || []).filter(s => new Date(s.cachedAt) > cutoff);
      return cache;
    }
  } catch (e) {
    console.warn('  ⚠️ Cache load failed:', e.message);
  }
  return { stories: [] };
}

function saveCache(stories) {
  const cachePath = path.join(__dirname, '..', 'cache.json');
  const now = new Date().toISOString();
  const existing = loadCache();

  // Merge new stories with existing, deduplicate
  const all = [...stories.map(s => ({ ...s, cachedAt: now })), ...existing.stories];
  const seen = new Set();
  const deduped = [];
  for (const s of all) {
    const key = s.title.toLowerCase().trim();
    if (!seen.has(key)) {
      seen.add(key);
      deduped.push(s);
    }
  }

  fs.writeFileSync(cachePath, JSON.stringify({ stories: deduped }, null, 2), 'utf8');
}

function blendWithCache(stories, minCount = 12) {
  if (stories.length >= minCount) return stories;

  const cache = loadCache();
  const needed = minCount - stories.length;
  const cacheStories = cache.stories
    .filter(cs => !stories.some(s => s.title.toLowerCase().trim() === cs.title.toLowerCase().trim()))
    .slice(0, needed);

  console.log(`  📦 Blending ${cacheStories.length} cached stories (need ${needed} more)`);
  return [...stories, ...cacheStories.map(s => ({
    id: s.id,
    title: s.title,
    source: s.source,
    time: s.time,
    rawDate: s.rawDate,
    topic: s.topic,
    url: s.url,
    description: s.description || '',
    score: Math.floor(s.score * 0.7) // Penalize cached content
  }))];
}

// ── ASSEMBLE ────────────────────────────────────────────────────────

function groupStoriesByTopic(stories) {
  const groups = {};
  for (const story of stories) {
    if (!story.topic) continue;
    if (!groups[story.topic]) groups[story.topic] = [];
    groups[story.topic].push(story);
  }

  const topicConfig = {
    llms: { name: 'Large Language Models', icon: '◎', color: '#d4a03d' },
    agents: { name: 'AI Agents & Autonomy', icon: '◉', color: '#c9862e' },
    vision: { name: 'Computer Vision & Media', icon: '◐', color: '#e8b84a' },
    multimodal: { name: 'Multimodal AI', icon: '◑', color: '#b87333' },
    robotics: { name: 'Robotics & Embodiment', icon: '◈', color: '#a855f7' },
    research: { name: 'Research & Breakthroughs', icon: '◎', color: '#60a5fa' },
    opensource: { name: 'Open Source', icon: '⚡', color: '#4ade80' },
    infra: { name: 'AI Infrastructure', icon: '▣', color: '#fb923c' },
    hardware: { name: 'AI Hardware', icon: '◆', color: '#f472b6' },
    security: { name: 'AI Safety & Security', icon: '◊', color: '#ef4444' },
    devtools: { name: 'Developer Tools', icon: '◇', color: '#38bdf8' }
  };

  const clusters = [];
  for (const [topicId, items] of Object.entries(groups)) {
    const config = topicConfig[topicId] || { name: topicId, icon: '•', color: '#8b949e' };
    if (items.length < 2) continue;

    const sorted = items.sort((a, b) => b.score - a.score).slice(0, 5);
    clusters.push({
      id: `topic-${topicId}`,
      name: config.name,
      icon: config.icon,
      color: config.color,
      stories: sorted.map((s, idx) => ({
        id: s.id,
        title: s.title,
        source: s.source,
        time: s.time,
        relevance: Math.max(65, Math.round(s.score))
      }))
    });
  }

  return clusters.sort((a, b) => b.stories.length - a.stories.length);
}

function pickFeatured(stories) {
  if (!stories.length) return null;

  const prioritySources = ['TechCrunch', 'The Verge', 'OpenAI', 'Anthropic', 'Google Blog', 'VentureBeat'];
  const candidates = stories.filter(s => s.score >= 75);
  const featured = candidates.find(s => prioritySources.includes(s.source))
    || candidates[0]
    || stories[0];

  const topicNames = {
    llms: 'LLMs & Generative AI', agents: 'AI Agents & Autonomy',
    vision: 'Computer Vision', multimodal: 'Multimodal AI',
    robotics: 'Robotics', research: 'AI Research',
    opensource: 'Open Source AI', infra: 'AI Infrastructure',
    hardware: 'AI Hardware', security: 'AI Safety',
    devtools: 'Developer Tools'
  };

  // Generate excerpt from description or template
  let excerpt = featured.description;
  if (!excerpt || excerpt.length < 30) {
    const templates = {
      llms: 'A major development in large language models that could reshape how we interact with AI systems.',
      agents: 'A significant step forward in autonomous AI agent capabilities and real-world deployment.',
      vision: 'New advances in computer vision and generative media with broad industry implications.',
      infra: 'Critical infrastructure developments that will impact AI training and deployment costs.',
      research: 'Fresh research findings that push the boundaries of what AI systems can achieve.',
      opensource: 'Important open-source releases that democratize access to cutting-edge AI capabilities.',
      security: 'New insights into AI safety, alignment, and the robustness of deployed systems.'
    };
    excerpt = templates[featured.topic] || 'A noteworthy development in the AI and technology landscape.';
  }

  return {
    id: featured.id,
    topic: topicNames[featured.topic] || 'Artificial Intelligence',
    topicId: featured.topic,
    title: featured.title,
    excerpt: truncate(excerpt, 320),
    source: featured.source,
    time: featured.time,
    readTime: '5 min read',
    relevance: Math.min(99, Math.round(featured.score)),
    url: featured.url
  };
}

function extractNextGen(stories) {
  const nextgen = [];
  const tagMap = {
    quantum: 'Quantum', biotech: 'Biotech', space: 'Space',
    energy: 'Energy', materials: 'Materials'
  };
  const classMap = {
    quantum: 'quantum', biotech: 'biotech', space: 'space',
    energy: 'energy', materials: 'materials'
  };

  for (const story of stories) {
    const ngTopic = detectNextGenTopic(story.title, story.description);
    if (!ngTopic) continue;

    nextgen.push({
      id: 'ng-' + story.id,
      title: story.title,
      desc: truncate(story.description || 'Click to read more about this development.', 180),
      tag: tagMap[ngTopic],
      tagClass: classMap[ngTopic],
      source: story.source
    });

    if (nextgen.length >= 5) break;
  }

  return nextgen;
}

function generateFallbackNextGen() {
  return [
    { id: 'n1', title: 'Quantum Error Correction Milestone Achieved', desc: 'Recent breakthroughs in logical qubit stability bring fault-tolerant quantum computing closer to reality.', tag: 'Quantum', tagClass: 'quantum', source: 'Nature' },
    { id: 'n2', title: 'AlphaFold Updates Expand Drug Discovery Pipeline', desc: 'New protein interaction predictions are accelerating pharmaceutical research timelines.', tag: 'Biotech', tagClass: 'biotech', source: 'DeepMind' },
    { id: 'n3', title: 'Commercial Space Stations Planned for 2027', desc: 'Multiple companies are racing to deploy orbital habitats for research and tourism.', tag: 'Space', tagClass: 'space', source: 'SpaceNews' },
    { id: 'n4', title: 'Solid-State Battery Production Lines Go Live', desc: 'Manufacturing scale-up begins for next-generation batteries with 2x energy density.', tag: 'Energy', tagClass: 'energy', source: 'Reuters' },
    { id: 'n5', title: 'Self-Healing Materials Enter Pilot Testing', desc: 'New polymers that autonomously repair cracks could revolutionize construction and aerospace.', tag: 'Materials', tagClass: 'materials', source: 'MIT News' }
  ];
}

// ── MAIN ────────────────────────────────────────────────────────────

async function main() {
  const startTime = Date.now();
  console.log('🚀 The Signal — Fetching fresh content...\n');

  const [rssStories, hnStories, papers, repos] = await Promise.all([
    fetchRSS(),
    fetchHackerNews(),
    fetchArXiv(),
    fetchGitHubTrending()
  ]);

  let allStories = [...rssStories, ...hnStories]
    .filter(s => s.title.length >= 15); // Filter out nav items / empty titles
  console.log(`📰 Raw: ${rssStories.length} RSS + ${hnStories.length} HN = ${allStories.length} total`);

  // Deduplicate
  allStories = deduplicateStories(allStories);
  console.log(`🧹 After dedup: ${allStories.length} unique stories`);

  // Score
  allStories = computeScores(allStories);

  // Filter to AI-relevant only
  allStories = allStories.filter(s => s.topic !== null);
  console.log(`🎯 AI-relevant: ${allStories.length} stories`);

  // Blend with cache if needed
  allStories = blendWithCache(allStories, 12);
  console.log(`📦 After cache blend: ${allStories.length} stories`);

  // Sort by score
  allStories = allStories.sort((a, b) => b.score - a.score);

  // Save to cache
  saveCache(allStories);

  // Assemble sections
  const topicClusters = groupStoriesByTopic(allStories);
  const featured = pickFeatured(allStories);
  const nextgen = extractNextGen(allStories);

  console.log(`\n📊 Output:`);
  console.log(`   Featured: ${featured ? '✅' : '❌'}`);
  console.log(`   Topic clusters: ${topicClusters.length}`);
  topicClusters.forEach(c => console.log(`     • ${c.name}: ${c.stories.length} stories`));
  console.log(`   Papers: ${papers.length}`);
  console.log(`   Repos: ${repos.length}`);
  console.log(`   Next-gen: ${nextgen.length}`);

  // Generate data.js
  const dataModule = `/* ============================================
   THE SIGNAL — Auto-Generated Content
   Updated: ${new Date().toISOString()}
   Stories: ${allStories.length} | Clusters: ${topicClusters.length} | Papers: ${papers.length} | Repos: ${repos.length}
   ============================================ */

const NEWSLETTER_DATA = {

    interests: [
        { id: 'llms', label: 'Large Language Models', color: '#d4a03d' },
        { id: 'agents', label: 'AI Agents & Autonomy', color: '#c9862e' },
        { id: 'vision', label: 'Computer Vision', color: '#e8b84a' },
        { id: 'multimodal', label: 'Multimodal AI', color: '#b87333' },
        { id: 'robotics', label: 'Robotics & Embodiment', color: '#a855f7' },
        { id: 'research', label: 'Research & Papers', color: '#60a5fa' },
        { id: 'opensource', label: 'Open Source', color: '#4ade80' },
        { id: 'infra', label: 'AI Infrastructure', color: '#fb923c' },
        { id: 'quantum', label: 'Quantum Computing', color: '#a855f7' },
        { id: 'biotech', label: 'Biotech & Longevity', color: '#4ade80' },
        { id: 'space', label: 'Space Tech', color: '#60a5fa' },
        { id: 'energy', label: 'Energy & Climate', color: '#fb923c' },
        { id: 'hardware', label: 'AI Hardware', color: '#f472b6' },
        { id: 'security', label: 'AI Safety & Security', color: '#ef4444' },
        { id: 'devtools', label: 'Developer Tools', color: '#38bdf8' }
    ],

    featured: ${JSON.stringify(featured || null, null, 4)},

    topics: ${JSON.stringify(topicClusters, null, 4)},

    papers: ${JSON.stringify(papers.length ? papers : [
        {
            id: 'p-fallback', title: 'Latest AI Research Papers',
            authors: 'Various Authors', journal: 'arXiv',
            abstract: 'Check back tomorrow for fresh research highlights.',
            badge: 'Research', url: 'https://arxiv.org/list/cs.AI/recent'
        }
    ], null, 4)},

    repos: ${JSON.stringify(repos.length ? repos : [], null, 4)},

    nextgen: ${JSON.stringify(nextgen.length >= 3 ? nextgen : generateFallbackNextGen(), null, 4)}
};
`;

  const dataPath = path.join(__dirname, '..', 'data.js');
  fs.writeFileSync(dataPath, dataModule, 'utf8');

  const duration = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n💾 Generated data.js (${Math.round(dataModule.length / 1024)}KB) in ${duration}s`);
  console.log('✨ Done!');
}

main().catch(err => {
  console.error('\n❌ Fatal error:', err);
  process.exit(1);
});
