/* ============================================
   THE SIGNAL — Auto-Generated Content
   Updated: 2026-07-21T08:32:56.191Z
   Stories: 23 | Clusters: 3 | Papers: 6 | Repos: 7
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

    featured: {
    "id": "rss-ttkmrfn0",
    "topic": "LLMs & Generative AI",
    "topicId": "llms",
    "title": "Safety and alignment in an era of long-horizon models",
    "excerpt": "OpenAI shares lessons from deploying long-running AI models, highlighting new safety risks, observed failures, and improved safeguards through iterative deployment.",
    "source": "OpenAI",
    "time": "22h ago",
    "readTime": "5 min read",
    "relevance": 89,
    "url": "https://openai.com/index/safety-alignment-long-horizon-models"
},

    topics: [
    {
        "id": "topic-llms",
        "name": "Large Language Models",
        "icon": "◎",
        "color": "#d4a03d",
        "stories": [
            {
                "id": "rss-ttkmrfn0",
                "title": "Safety and alignment in an era of long-horizon models",
                "source": "OpenAI",
                "time": "22h ago",
                "relevance": 89
            },
            {
                "id": "rss-fqcfoht9",
                "title": "How Cars24 scales conversations and builds faster with OpenAI",
                "source": "OpenAI",
                "time": "5d ago",
                "relevance": 84
            },
            {
                "id": "rss-e9ib4zoa",
                "title": "Google is working on a new AI chip designed to make Gemini more efficient",
                "source": "TechCrunch",
                "time": "11h ago",
                "relevance": 82
            },
            {
                "id": "rss-fi48nodx",
                "title": "A scorecard for the AI age",
                "source": "OpenAI",
                "time": "3d ago",
                "relevance": 78
            },
            {
                "id": "rss-k2kvfhr7",
                "title": "Expanding Managed Agents in Gemini API:  background tasks, remote MCP and more",
                "source": "Google Blog",
                "time": "Jul 7",
                "relevance": 78
            }
        ]
    },
    {
        "id": "topic-research",
        "name": "Research & Breakthroughs",
        "icon": "◎",
        "color": "#60a5fa",
        "stories": [
            {
                "id": "rss-opwav76e",
                "title": "NVIDIA Releases Cosmos 3 Edge: A 4B-Parameter Open World Model That Reasons and Generates Robot Actions On-Device",
                "source": "MarkTechPost",
                "time": "Just now",
                "relevance": 88
            },
            {
                "id": "rss-xpfzdf2b",
                "title": "Alibaba’s Tongyi Lab Releases Qwen-Audio-3.0-TTS, a Hosted Text-to-Speech Model in Flash and Plus Tiers Across 16 Languages",
                "source": "MarkTechPost",
                "time": "11h ago",
                "relevance": 77
            },
            {
                "id": "rss-izykpqnh",
                "title": "Best Local LLMs You Can Run on a Single 24GB GPU in 2026: Qwen, Gemma, Mistral, DeepSeek Compared",
                "source": "MarkTechPost",
                "time": "1d ago",
                "relevance": 75
            },
            {
                "id": "rss-noidipz6",
                "title": "Someone Fine-Tuned OpenBMB’s MiniCPM5-1B on Claude Fable 5 Traces to Ship a 657MB Local Thinking Model",
                "source": "MarkTechPost",
                "time": "1d ago",
                "relevance": 70
            },
            {
                "id": "hn-48981206",
                "title": "How we measured AI writing across arXiv, and where the measurement breaks",
                "source": "Hacker News",
                "time": "15h ago",
                "relevance": 69
            }
        ]
    },
    {
        "id": "topic-agents",
        "name": "AI Agents & Autonomy",
        "icon": "◉",
        "color": "#c9862e",
        "stories": [
            {
                "id": "rss-hfrzq9gq",
                "title": "The agent evaluation gap: Enterprise AI organizations have a reality-alignment problem, not a coverage problem — and most are shipping to production anyway",
                "source": "VentureBeat",
                "time": "4d ago",
                "relevance": 74
            },
            {
                "id": "rss-q2zzu8u3",
                "title": "The agent security gap: 54% of enterprises have already had an AI agent incident, and most still let agents share credentials",
                "source": "VentureBeat",
                "time": "4d ago",
                "relevance": 73
            },
            {
                "id": "hn-48982535",
                "title": "Agent swarms and the new model economics",
                "source": "Hacker News",
                "time": "14h ago",
                "relevance": 73
            }
        ]
    }
],

    papers: [
    {
        "id": "arxiv-v8su1o7o",
        "title": "The Many Senses of Visual Similarity: A Text-Prompted Image Perceptual Metric",
        "authors": "Sheng-Yu Wang, Yotam Nitzan, Aaron Hertzmann, Jun-Yan Zhu,…",
        "journal": "arXiv preprint",
        "abstract": "Human visual similarity judgments are context-dependent. For example, two images may be similar in shape but distinct in color. Existing perceptual similarity metrics, however, collapse these nuances into a single scalar value, offering no mechanism to condition on specific aspects. To bridge this gap, we introduce a…",
        "badge": "Vision",
        "url": "http://arxiv.org/abs/2607.18237v1"
    },
    {
        "id": "arxiv-7qebw3nx",
        "title": "Patch Policy: Efficient Embodied Control via Dense Visual Representations",
        "authors": "Gaoyue Zhou, Zichen Jeff Cui, Ada Langford, Bowen Tan, Yann…",
        "journal": "arXiv preprint",
        "abstract": "Pretrained dense visual features from Vision Transformers (ViTs) are powerful yet have been underutilized in robot learning. Modern robot policies either compress each observation into a single global token, or rely on visual backbones trained from scratch, sacrificing both fine-grained spatial detail and the benefits…",
        "badge": "Robotics",
        "url": "http://arxiv.org/abs/2607.18236v1"
    },
    {
        "id": "arxiv-gyxb4b30",
        "title": "Automated Discovery Has No Universally Superior Harness",
        "authors": "Akshat Gupta, Jermaine Lei, Alexander Lu, Gopala…",
        "journal": "arXiv preprint",
        "abstract": "Autonomous discovery systems such as OpenEvolve and TTT-Discover are often used as general-purpose harnesses. However, in practice these are composite systems combining several design choices about archives, parent selection, exploration, and budget allocation into a single recipe. Because discovery runs are expensive…",
        "badge": "NLP",
        "url": "http://arxiv.org/abs/2607.18235v1"
    },
    {
        "id": "arxiv-j7dm5uj1",
        "title": "It's Not What You Say, It's How You Say It: Evaluating LLM Responses to Expressions of Belief",
        "authors": "Kevin Du, Clara Kümpel, Michelle Wastl, Alex Warstadt",
        "journal": "arXiv preprint",
        "abstract": "Users frequently express their beliefs to large language models (LLMs). In some situations, the LLM should accept these contextual beliefs as true. In others, they should stick to their prior knowledge. Notably, users' expressions of belief (EoBs) can take linguistically diverse forms - using presuppositions,…",
        "badge": "NLP",
        "url": "http://arxiv.org/abs/2607.18232v1"
    },
    {
        "id": "arxiv-8r6dnxks",
        "title": "FM-VLA: Force-based Memory for Vision-Language-Action Models in Contact-Rich Manipulation",
        "authors": "Ruicheng Li, Qixiu Li, Ruichun Ma, Yu Deng, Lin Luo,…",
        "journal": "arXiv preprint",
        "abstract": "Vision-language-action (VLA) models have achieved impressive generalization in robotic manipulation, and recent memory-augmented VLAs have relaxed the Markovian assumption by conditioning on past images or language summaries. Vision-based memory approaches address this by conditioning on sampled past image frames, but…",
        "badge": "Robotics",
        "url": "http://arxiv.org/abs/2607.18231v1"
    },
    {
        "id": "arxiv-qod5eh47",
        "title": "Simple Domain Generalization for Strong Pixel-Level Image Tampering Detection in Modern VLMs",
        "authors": "Yi Tang, Xinyi Shang, Jiacheng Cui, Sondos Mahmoud Bsharat,…",
        "journal": "arXiv preprint",
        "abstract": "Modern vision-language models (VLMs) have significantly improved image generation and editing capabilities, making pixel-level image tampering detection increasingly important yet challenging under cross-model and out-of-distribution shifts. This work studies domain generalization for pixel-level image tampering…",
        "badge": "Vision",
        "url": "http://arxiv.org/abs/2607.18230v1"
    }
],

    repos: [
    {
        "id": "gh-8i79llrc",
        "name": "NousResearch/hermes-agent",
        "desc": "The agent that grows with you",
        "stars": "218.0k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/NousResearch/hermes-agent"
    },
    {
        "id": "gh-0h2c92ob",
        "name": "Significant-Gravitas/AutoGPT",
        "desc": "AutoGPT is the vision of accessible AI for everyone, to use and to build on. Our mission is to provide the tools, so…",
        "stars": "185.6k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/Significant-Gravitas/AutoGPT"
    },
    {
        "id": "gh-cdh7btl6",
        "name": "langflow-ai/langflow",
        "desc": "Langflow is a powerful tool for building and deploying AI-powered agents and workflows.",
        "stars": "152.1k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/langflow-ai/langflow"
    },
    {
        "id": "gh-kqlwjuzk",
        "name": "huggingface/transformers",
        "desc": "🤗 Transformers: the model-definition framework for state-of-the-art machine learning models in text, vision, audio,…",
        "stars": "162.8k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/huggingface/transformers"
    },
    {
        "id": "gh-5a0ydj8q",
        "name": "pytorch/pytorch",
        "desc": "Tensors and Dynamic neural networks in Python with strong GPU acceleration",
        "stars": "101.8k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/pytorch/pytorch"
    },
    {
        "id": "gh-kxazcqyy",
        "name": "AUTOMATIC1111/stable-diffusion-webui",
        "desc": "Stable Diffusion web UI",
        "stars": "164.3k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/AUTOMATIC1111/stable-diffusion-webui"
    },
    {
        "id": "gh-oyzoa4ht",
        "name": "Comfy-Org/ComfyUI",
        "desc": "The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface.",
        "stars": "121.6k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/Comfy-Org/ComfyUI"
    }
],

    nextgen: [
    {
        "id": "n1",
        "title": "Quantum Error Correction Milestone Achieved",
        "desc": "Recent breakthroughs in logical qubit stability bring fault-tolerant quantum computing closer to reality.",
        "tag": "Quantum",
        "tagClass": "quantum",
        "source": "Nature"
    },
    {
        "id": "n2",
        "title": "AlphaFold Updates Expand Drug Discovery Pipeline",
        "desc": "New protein interaction predictions are accelerating pharmaceutical research timelines.",
        "tag": "Biotech",
        "tagClass": "biotech",
        "source": "DeepMind"
    },
    {
        "id": "n3",
        "title": "Commercial Space Stations Planned for 2027",
        "desc": "Multiple companies are racing to deploy orbital habitats for research and tourism.",
        "tag": "Space",
        "tagClass": "space",
        "source": "SpaceNews"
    },
    {
        "id": "n4",
        "title": "Solid-State Battery Production Lines Go Live",
        "desc": "Manufacturing scale-up begins for next-generation batteries with 2x energy density.",
        "tag": "Energy",
        "tagClass": "energy",
        "source": "Reuters"
    },
    {
        "id": "n5",
        "title": "Self-Healing Materials Enter Pilot Testing",
        "desc": "New polymers that autonomously repair cracks could revolutionize construction and aerospace.",
        "tag": "Materials",
        "tagClass": "materials",
        "source": "MIT News"
    }
]
};
