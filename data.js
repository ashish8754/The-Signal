/* ============================================
   THE SIGNAL — Auto-Generated Content
   Updated: 2026-06-25T09:27:09.452Z
   Stories: 24 | Clusters: 4 | Papers: 6 | Repos: 7
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
    "id": "rss-bi0u4xit",
    "topic": "LLMs & Generative AI",
    "topicId": "llms",
    "title": "How agents are transforming work",
    "excerpt": "A new OpenAI research paper shows how AI agents are transforming work, enabling longer, more complex tasks and expanding productivity across roles.",
    "source": "OpenAI",
    "time": "7h ago",
    "readTime": "5 min read",
    "relevance": 88,
    "url": "https://openai.com/index/how-agents-are-transforming-work"
},

    topics: [
    {
        "id": "topic-llms",
        "name": "Large Language Models",
        "icon": "◎",
        "color": "#d4a03d",
        "stories": [
            {
                "id": "rss-bi0u4xit",
                "title": "How agents are transforming work",
                "source": "OpenAI",
                "time": "7h ago",
                "relevance": 88
            },
            {
                "id": "rss-7xh61n71",
                "title": "OpenAI and Broadcom unveil LLM-optimized inference chip",
                "source": "OpenAI",
                "time": "1d ago",
                "relevance": 87
            },
            {
                "id": "rss-221xiyre",
                "title": "Helping build shared standards for advanced AI",
                "source": "OpenAI",
                "time": "1d ago",
                "relevance": 83
            },
            {
                "id": "rss-d1rjr2mo",
                "title": "How GPT-5 helped immunologist Derya Unutmaz solve a 3-year-old mystery",
                "source": "OpenAI",
                "time": "1d ago",
                "relevance": 79
            },
            {
                "id": "rss-r5bi76dz",
                "title": "Claude Code costs up to $200 a month. Goose does the same thing for free.",
                "source": "VentureBeat",
                "time": "Jan 19",
                "relevance": 78
            }
        ]
    },
    {
        "id": "topic-infra",
        "name": "AI Infrastructure",
        "icon": "▣",
        "color": "#fb923c",
        "stories": [
            {
                "id": "rss-u0ke9cpa",
                "title": "Europe is pushing back on Washington’s chip war",
                "source": "TechCrunch",
                "time": "9h ago",
                "relevance": 86
            },
            {
                "id": "rss-er07ew0y",
                "title": "Railway secures $100 million to challenge AWS with AI-native cloud infrastructure",
                "source": "VentureBeat",
                "time": "Jan 22",
                "relevance": 75
            },
            {
                "id": "rss-383g11du",
                "title": "OpenAI unveils its first custom chip, built by Broadcom",
                "source": "Hacker News",
                "time": "15h ago",
                "relevance": 71
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
                "id": "rss-66n3xykn",
                "title": "Baidu Releases Unlimited OCR, a 3B Model That Keeps the KV Cache Flat for Long-Document Parsing",
                "source": "MarkTechPost",
                "time": "3h ago",
                "relevance": 81
            },
            {
                "id": "rss-hpxsjih3",
                "title": "Gradium Launches stt-translate and s2s-translate, Real-Time Speech Translation Models Beating gpt-realtime-translate on Accuracy and Latency",
                "source": "MarkTechPost",
                "time": "13h ago",
                "relevance": 80
            },
            {
                "id": "rss-51dx1385",
                "title": "Nous Research Adds /learn to Hermes Agent’s Skills System, Capturing Workflows as Slash Commands Without Hand-Writing SKILL.md",
                "source": "MarkTechPost",
                "time": "1d ago",
                "relevance": 71
            }
        ]
    },
    {
        "id": "topic-opensource",
        "name": "Open Source",
        "icon": "⚡",
        "color": "#4ade80",
        "stories": [
            {
                "id": "rss-f3hadevk",
                "title": "Listen Labs raises $69M after viral billboard hiring stunt to scale AI customer interviews",
                "source": "VentureBeat",
                "time": "Jan 16",
                "relevance": 72
            },
            {
                "id": "hn-48636753",
                "title": "Bohemia Interactive: Cold War Assault Remastered Source Code on GitHub",
                "source": "Hacker News",
                "time": "2d ago",
                "relevance": 65
            }
        ]
    }
],

    papers: [
    {
        "id": "arxiv-j7o610w8",
        "title": "Learning Action Priors for Cross-embodiment Robot Manipulation",
        "authors": "Dong Jing, Tianqi Zhang, Jiaqi Liu, Jinman Zhao, Zelong…",
        "journal": "arXiv preprint",
        "abstract": "Most Vision-Language-Action (VLA) models build on a Vision-Language Model (VLM) backbone by attaching an action module and optimizing the full policy jointly. This design inherits strong visual and linguistic priors from the VLM, but leaves the action module to learn physical motion almost from scratch. As a result,…",
        "badge": "Robotics",
        "url": "http://arxiv.org/abs/2606.26095v1"
    },
    {
        "id": "arxiv-0h9yfhr1",
        "title": "RevengeBench: Reverse Engineering Code-Space Policies from Behavioral Experiments",
        "authors": "Babak Rahmani, Sebastian Dziadzio, Joschka Strüber, Sergio…",
        "journal": "arXiv preprint",
        "abstract": "For most of scientific history, researchers studying behavior could only infer hidden mechanisms from outward actions: an inverse problem that becomes more tractable when observation is augmented by targeted intervention. We pose a computational analogue: given only behavioral traces of an agent in a game environment,…",
        "badge": "ML",
        "url": "http://arxiv.org/abs/2606.26094v1"
    },
    {
        "id": "arxiv-mqk4y09z",
        "title": "ForceBand: Learning Forceful Manipulation with sEMG",
        "authors": "Botao He, Zhi Wang, Linna Kuang, Ishaan Ghosh, Jitendra…",
        "journal": "arXiv preprint",
        "abstract": "Human demonstrations are a scalable data source for learning robot manipulation policies. However, common sources of human demonstration data, such as motion-capture trajectories and internet videos, capture mostly motion and appearance while missing the contact forces that are critical for force-sensitive…",
        "badge": "Robotics",
        "url": "http://arxiv.org/abs/2606.26093v1"
    },
    {
        "id": "arxiv-0whelzhu",
        "title": "TryOnCrafter: Unleashing Camera Trajectories for Realistic Video Virtual Try-on via a Renderable 4D Try-on Proxy",
        "authors": "Hao Sun, Hao Yan, Mengting Chen, Quanjian Song, Yu Li, Juan…",
        "journal": "arXiv preprint",
        "abstract": "While Video Virtual Try-on (VVT) has achieved remarkable progress in synthesizing realistic garment overlays on dynamic subjects, existing paradigms remains fundamentally constrained by a passive dependency on source camera trajectories, failing to accommodate the requisite interactive freedom for omnidirectional…",
        "badge": "Vision",
        "url": "http://arxiv.org/abs/2606.26092v1"
    },
    {
        "id": "arxiv-1d2cnmqr",
        "title": "On-Policy Self-Distillation with Sampled Demonstrations Reduces Output Diversity",
        "authors": "Andrei Liviu Nicolicioiu, Mohammad Pezeshki, Aaron Courville",
        "journal": "arXiv preprint",
        "abstract": "On-policy self-distillation achieves strong pass@1 accuracy by using a single model as both teacher and student, with the teacher conditioned on a correct demonstration to provide dense token-level feedback. We show that this could come at a hidden cost: rollout diversity decreases and pass@k curves flatten (i.e.,…",
        "badge": "ML",
        "url": "http://arxiv.org/abs/2606.26091v1"
    },
    {
        "id": "arxiv-qwgudhy9",
        "title": "MVTrack4Gen: Multi-View Point Tracking as Geometric Supervision for 4D Video Generation",
        "authors": "JoungBin Lee, Jaewoo Jung, Jongmin Lee, Tongmin Kim,…",
        "journal": "arXiv preprint",
        "abstract": "Synthesizing a novel-view video from a monocular reference video along a target camera trajectory requires both geometric consistency and motion fidelity with respect to the reference video. Existing methods based on explicit 3D representations are limited by the accuracy of off-the-shelf reconstruction modules, which…",
        "badge": "Vision",
        "url": "http://arxiv.org/abs/2606.26087v1"
    }
],

    repos: [
    {
        "id": "gh-3b3il2us",
        "name": "NousResearch/hermes-agent",
        "desc": "The agent that grows with you",
        "stars": "202.5k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/NousResearch/hermes-agent"
    },
    {
        "id": "gh-ewjg723w",
        "name": "Significant-Gravitas/AutoGPT",
        "desc": "AutoGPT is the vision of accessible AI for everyone, to use and to build on. Our mission is to provide the tools, so…",
        "stars": "185.2k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/Significant-Gravitas/AutoGPT"
    },
    {
        "id": "gh-5ro0vm6v",
        "name": "langflow-ai/langflow",
        "desc": "Langflow is a powerful tool for building and deploying AI-powered agents and workflows.",
        "stars": "150.1k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/langflow-ai/langflow"
    },
    {
        "id": "gh-josv3gp4",
        "name": "huggingface/transformers",
        "desc": "🤗 Transformers: the model-definition framework for state-of-the-art machine learning models in text, vision, audio,…",
        "stars": "161.9k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/huggingface/transformers"
    },
    {
        "id": "gh-f9kvakn1",
        "name": "pytorch/pytorch",
        "desc": "Tensors and Dynamic neural networks in Python with strong GPU acceleration",
        "stars": "101.1k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/pytorch/pytorch"
    },
    {
        "id": "gh-khfu0wl7",
        "name": "AUTOMATIC1111/stable-diffusion-webui",
        "desc": "Stable Diffusion web UI",
        "stars": "163.9k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/AUTOMATIC1111/stable-diffusion-webui"
    },
    {
        "id": "gh-zfsdgfuj",
        "name": "Comfy-Org/ComfyUI",
        "desc": "The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface.",
        "stars": "118.3k",
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
