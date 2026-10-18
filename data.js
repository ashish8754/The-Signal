/* ============================================
   THE SIGNAL — Auto-Generated Content
   Updated: 2026-10-18T10:35:16.517Z
   Stories: 16 | Clusters: 2 | Papers: 6 | Repos: 7
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
    "id": "rss-c878e7b4",
    "topic": "LLMs & Generative AI",
    "topicId": "llms",
    "title": "Replit makes OpenAI its default over Anthropic, CEO says",
    "excerpt": "Over the weekend, Masad clarified that OpenAI would replace Anthropic as its default model provider. Claude will still be available to customers on the platform.",
    "source": "TechCrunch",
    "time": "15h ago",
    "readTime": "5 min read",
    "relevance": 85,
    "url": "https://techcrunch.com/2026/10/17/replit-is-no-longer-working-with-anthropic-ceo-says/"
},

    topics: [
    {
        "id": "topic-llms",
        "name": "Large Language Models",
        "icon": "◎",
        "color": "#d4a03d",
        "stories": [
            {
                "id": "rss-c878e7b4",
                "title": "Replit makes OpenAI its default over Anthropic, CEO says",
                "source": "TechCrunch",
                "time": "15h ago",
                "relevance": 85
            },
            {
                "id": "rss-fnk6f686",
                "title": "Stack Overflow for Agents triples signups with ChatGPT plugin",
                "source": "OpenAI",
                "time": "2d ago",
                "relevance": 79
            },
            {
                "id": "rss-nsxe91uo",
                "title": "How Itaú is building generative AI for its entire customer base",
                "source": "OpenAI",
                "time": "1d ago",
                "relevance": 79
            },
            {
                "id": "rss-9tiopobm",
                "title": "Bringing GPT-Rosalind to academic research labs",
                "source": "OpenAI",
                "time": "2d ago",
                "relevance": 78
            },
            {
                "id": "rss-oxjjl8bv",
                "title": "Gemini 4 Argon: Built to solve your hardest problems",
                "source": "Google Blog",
                "time": "4d ago",
                "relevance": 75
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
                "id": "rss-qk5atf0a",
                "title": "India becomes the latest country to report rogue AI agent activity",
                "source": "TechCrunch",
                "time": "1d ago",
                "relevance": 77
            },
            {
                "id": "rss-6fn1nbxk",
                "title": "Enterprise AI's real risk isn't autonomous agents. It's the complexity between them.",
                "source": "VentureBeat",
                "time": "Aug 27",
                "relevance": 69
            },
            {
                "id": "rss-qmm8b03j",
                "title": "Orchestration is the new challenge for CX in the age of AI agents",
                "source": "VentureBeat",
                "time": "Aug 26",
                "relevance": 69
            }
        ]
    }
],

    papers: [
    {
        "id": "arxiv-e8y3wgx8",
        "title": "LIBERO-PeRM: Benchmarking Personalized Robotic Manipulation",
        "authors": "Zhixu Li, Keqian Tang, Litian Gong, Jingyu Yao, Wenqian…",
        "journal": "arXiv preprint",
        "abstract": "Personalization is essential for general-purpose robots to transition into household environments and achieve true practicality. While general robotic manipulation has been extensively studied, personalized robotic manipulation (PeRM) lacks a controlled benchmark for separating task completion from preference…",
        "badge": "Robotics",
        "url": "http://arxiv.org/abs/2610.22372v1"
    },
    {
        "id": "arxiv-v5vrag4f",
        "title": "Gen4P: Video Generators are 4D Perceivers",
        "authors": "Yitong Xia, Zeren Jiang, Chuanxia Zheng",
        "journal": "arXiv preprint",
        "abstract": "We introduce Gen4P, a unified framework for recovering 4D geometry and motion from monocular video. We show that a pretrained video generator can be repurposed into a feed-forward 4D perceiver without iterative denoising. Building on on-demand querying, Gen4P processes clean video latents in a single encoder pass and…",
        "badge": "Vision",
        "url": "http://arxiv.org/abs/2610.22371v1"
    },
    {
        "id": "arxiv-bvbn0k2n",
        "title": "Which Tokens to Merge? Diffusion Dynamics for Efficient Image Generation",
        "authors": "SeungJu Cha, Ye-Chan Kim, HyunGee Kim, Sungho Koh, Dong-Jin…",
        "journal": "arXiv preprint",
        "abstract": "Token merging has emerged as an effective training-free strategy for accelerating diffusion models by reducing redundant token computation while minimizing generation degradation. A key challenge is determining which tokens can be safely merged and which should be preserved for subsequent computation. Existing method…",
        "badge": "Vision",
        "url": "http://arxiv.org/abs/2610.22370v1"
    },
    {
        "id": "arxiv-ix193lko",
        "title": "SoftCache: Adaptive Step Size Caching for Diffusion Transformers",
        "authors": "Shimon Malnick, Nadav Orenstein, Ohad Fried, Shai Avidan",
        "journal": "arXiv preprint",
        "abstract": "Diffusion and flow models generate a sample over iterative steps, each a full pass through a large network, and that pass dominates generation cost. Training-free caching accelerates them by reusing activations from recent evaluations instead of recomputing them. Dynamic caching methods decide when to refresh by…",
        "badge": "Vision",
        "url": "http://arxiv.org/abs/2610.22369v1"
    },
    {
        "id": "arxiv-eh52i95b",
        "title": "Value as Memory: Online Value-Guided Post-training for General Robot Policies",
        "authors": "Wenye Yu, Yijin Chen, Kaiyi Xiong, Wenbo Han, Wendi Chen,…",
        "journal": "arXiv preprint",
        "abstract": "Real-world post-training of generalist robot policies faces two challenges: partial observability makes action selection ambiguous, while offline post-training methods delay feedback from deployment experience. We present Value as Memory (VaM), a framework that addresses these challenges through value caching and…",
        "badge": "Robotics",
        "url": "http://arxiv.org/abs/2610.22368v1"
    },
    {
        "id": "arxiv-d05za12r",
        "title": "Discovering state-of-the-art quantum circuits with large language models",
        "authors": "Andi Gu, Alek H. Kemeny, Susanne F. Yelin, Mikhail D. Lukin",
        "journal": "arXiv preprint",
        "abstract": "Significant efforts are currently being directed toward the implementation of large-scale quantum information processors, but realizing useful quantum advantage also requires the development of efficient quantum algorithms. While for many practical problems the dominant resource costs are associated with a small set…",
        "badge": "Research",
        "url": "http://arxiv.org/abs/2610.22367v1"
    }
],

    repos: [
    {
        "id": "gh-xc9s8msh",
        "name": "NousResearch/hermes-agent",
        "desc": "The agent that grows with you",
        "stars": "254.8k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/NousResearch/hermes-agent"
    },
    {
        "id": "gh-8sdbcwr8",
        "name": "Significant-Gravitas/AutoGPT",
        "desc": "AutoGPT is the vision of accessible AI for everyone, to use and to build on. Our mission is to provide the tools, so…",
        "stars": "187.6k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/Significant-Gravitas/AutoGPT"
    },
    {
        "id": "gh-bw4vxa0v",
        "name": "langgenius/dify",
        "desc": "Build Agentic workflows, RAG pipelines, with rich AI model and tool support on one collaborative workspace. Deploy on…",
        "stars": "158.8k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/langgenius/dify"
    },
    {
        "id": "gh-rc4uo3kd",
        "name": "huggingface/transformers",
        "desc": "🤗 Transformers: the model-definition framework for state-of-the-art machine learning models in text, vision, audio,…",
        "stars": "167.8k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/huggingface/transformers"
    },
    {
        "id": "gh-l2qoh4rl",
        "name": "pytorch/pytorch",
        "desc": "Tensors and Dynamic neural networks in Python with strong GPU acceleration",
        "stars": "104.8k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/pytorch/pytorch"
    },
    {
        "id": "gh-ckeaw64e",
        "name": "AUTOMATIC1111/stable-diffusion-webui",
        "desc": "Stable Diffusion web UI",
        "stars": "165.1k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/AUTOMATIC1111/stable-diffusion-webui"
    },
    {
        "id": "gh-7sjzaigr",
        "name": "Comfy-Org/ComfyUI",
        "desc": "The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface. The fastest local…",
        "stars": "138.1k",
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
