/* ============================================
   THE SIGNAL — Auto-Generated Content
   Updated: 2026-10-29T12:30:02.413Z
   Stories: 12 | Clusters: 2 | Papers: 6 | Repos: 7
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
    "id": "hn-50287001",
    "topic": "Artificial Intelligence",
    "topicId": "energy",
    "title": "The US added a record 20.2 GWh of battery storage in just 3 months",
    "excerpt": "A noteworthy development in the AI and technology landscape.",
    "source": "Hacker News",
    "time": "1h ago",
    "readTime": "5 min read",
    "relevance": 75,
    "url": "https://electrek.co/2026/08/31/the-us-added-a-record-20-2-gwh-of-battery-storage-in-just-3-months/"
},

    topics: [
    {
        "id": "topic-llms",
        "name": "Large Language Models",
        "icon": "◎",
        "color": "#d4a03d",
        "stories": [
            {
                "id": "hn-50276792",
                "title": "Gemini 4 Carbon",
                "source": "Hacker News",
                "time": "19h ago",
                "relevance": 74
            },
            {
                "id": "hn-50284255",
                "title": "Claude Code regularly sends each background agent’s transcript to its model",
                "source": "Hacker News",
                "time": "8h ago",
                "relevance": 71
            },
            {
                "id": "hn-50264853",
                "title": "Survival LLM: AI assistant and emergency library that runs on your own computer",
                "source": "Hacker News",
                "time": "16h ago",
                "relevance": 65
            },
            {
                "id": "hn-50265609",
                "title": "Early progress on accelerating drug development with Claude",
                "source": "Hacker News",
                "time": "15h ago",
                "relevance": 65
            }
        ]
    },
    {
        "id": "topic-energy",
        "name": "energy",
        "icon": "•",
        "color": "#8b949e",
        "stories": [
            {
                "id": "hn-50287001",
                "title": "The US added a record 20.2 GWh of battery storage in just 3 months",
                "source": "Hacker News",
                "time": "1h ago",
                "relevance": 75
            },
            {
                "id": "hn-50245385",
                "title": "Solar power is becoming bigger than nuclear",
                "source": "Hacker News",
                "time": "20h ago",
                "relevance": 65
            }
        ]
    }
],

    papers: [
    {
        "id": "arxiv-dzo93hc3",
        "title": "Honeycomb-Surfels: Compact Hexagonal Primitives for Efficient Scene Rendering and Reconstruction",
        "authors": "Prakhar Kaushik, Soumava Paul, Alan Yuille",
        "journal": "arXiv preprint",
        "abstract": "Novel view synthesis and 3D reconstruction have advanced rapidly with radiance fields and splatting, yet their memory and computational demands limit their use in resource-constrained settings. We introduce Hexels: novel planar hexagonal surface elements with a first-order spatial color field for efficient 3D scene…",
        "badge": "Vision",
        "url": "http://arxiv.org/abs/2610.37668v1"
    },
    {
        "id": "arxiv-mnsa8ax1",
        "title": "ThinkWorld: World Imagination Reinforces Chain-of-Dynamics Reasoning",
        "authors": "Chaehyun Kim, Chi-Pin Huang, Jisoo Kim, Min-Hung Chen,…",
        "journal": "arXiv preprint",
        "abstract": "Vision-Language-Action (VLA) models have made substantial progress in robotic manipulation, but their generalization remains constrained by the diversity and coverage of action-labeled robot demonstrations. Human videos provide much broader behavioral and environmental experience, while learning from them faces a…",
        "badge": "Robotics",
        "url": "http://arxiv.org/abs/2610.37666v1"
    },
    {
        "id": "arxiv-msh3dx0l",
        "title": "Can Discrete Tokens Serve as Semantically Lossless Representations of Visual Signals?",
        "authors": "Jialv Zou, Xiaotong Li, Zhengrong Yue, Xu Huang, Yaxin Luo,…",
        "journal": "arXiv preprint",
        "abstract": "Discrete visual tokens represent vision in a discrete form analogous to language, offering a native interface for multimodal modeling under a shared next-token prediction objective. However, quantization error is widely assumed to cause unavoidable semantic loss, fundamentally limiting the semantic fidelity of…",
        "badge": "Vision",
        "url": "http://arxiv.org/abs/2610.37662v1"
    },
    {
        "id": "arxiv-m7qeptoh",
        "title": "When Should We Intervene at Test Time?",
        "authors": "Jiahao Zhang, Xinling Wen, Liangliang Li, Yu Chen",
        "journal": "arXiv preprint",
        "abstract": "Test-time adaptation helps a deployed model respond to changing inputs, but the same intervention can rescue one batch and damage the next. Updating normalization statistics, for example, can improve corrupted images yet fail when a batch contains mostly one class. Average accuracy hides these failures and cannot tell…",
        "badge": "ML",
        "url": "http://arxiv.org/abs/2610.37658v1"
    },
    {
        "id": "arxiv-yqxh9yuc",
        "title": "Heads of Security: Learned Attention Gates Improve Prompt Injection Robustness",
        "authors": "Igor Shilov, Xiaoxue Yang, Alexander Panfilov, Evgenii…",
        "journal": "arXiv preprint",
        "abstract": "We introduce Heads of Security (HoS), a prompt injection defense that enforces instruction-data separation via a small set of learned per-head attention gates. HoS learns how each head should redistribute attention between trusted and untrusted tokens, enabling models to reason over untrusted content without following…",
        "badge": "ML",
        "url": "http://arxiv.org/abs/2610.37657v1"
    },
    {
        "id": "arxiv-y3equwur",
        "title": "Attention as Lattice Gauge Theory: Relations Interact Only Through Wilson Loops",
        "authors": "Aakash Sarkar, Ananya Mukherjee, Motoshige Sato",
        "journal": "arXiv preprint",
        "abstract": "Relations compose through the entity they share - Alice is Bob's mother and Bob is Carol's father, so Alice is Carol's grandmother - and the order matters, since a father's mother is not a mother's father; verifying a composed relation means closing the loop. We show that if each entity's coordinate frame may be…",
        "badge": "ML",
        "url": "http://arxiv.org/abs/2610.37656v1"
    }
],

    repos: [
    {
        "id": "gh-womwi9zx",
        "name": "NousResearch/hermes-agent",
        "desc": "The agent that grows with you",
        "stars": "258.4k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/NousResearch/hermes-agent"
    },
    {
        "id": "gh-wluqnjco",
        "name": "Significant-Gravitas/AutoGPT",
        "desc": "AutoGPT is the vision of accessible AI for everyone, to use and to build on. Our mission is to provide the tools, so…",
        "stars": "187.8k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/Significant-Gravitas/AutoGPT"
    },
    {
        "id": "gh-08a8x5i8",
        "name": "langgenius/dify",
        "desc": "Build Agentic workflows, RAG pipelines, with rich AI model and tool support on one collaborative workspace. Deploy on…",
        "stars": "159.9k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/langgenius/dify"
    },
    {
        "id": "gh-bozf3t24",
        "name": "huggingface/transformers",
        "desc": "🤗 Transformers: the model-definition framework for state-of-the-art machine learning models in text, vision, audio,…",
        "stars": "168.3k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/huggingface/transformers"
    },
    {
        "id": "gh-r5i7d2md",
        "name": "pytorch/pytorch",
        "desc": "Tensors and Dynamic neural networks in Python with strong GPU acceleration",
        "stars": "105.2k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/pytorch/pytorch"
    },
    {
        "id": "gh-pd2jholl",
        "name": "AUTOMATIC1111/stable-diffusion-webui",
        "desc": "Stable Diffusion web UI",
        "stars": "165.2k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/AUTOMATIC1111/stable-diffusion-webui"
    },
    {
        "id": "gh-xhc16xpt",
        "name": "Comfy-Org/ComfyUI",
        "desc": "The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface. The fastest local…",
        "stars": "143.9k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/Comfy-Org/ComfyUI"
    }
],

    nextgen: [
    {
        "id": "ng-hn-50287001",
        "title": "The US added a record 20.2 GWh of battery storage in just 3 months",
        "desc": "Click to read more about this development.",
        "tag": "Energy",
        "tagClass": "energy",
        "source": "Hacker News"
    },
    {
        "id": "ng-hn-50272145",
        "title": "Amazon to buy satellite firm Globalstar in $11.57B deal",
        "desc": "Click to read more about this development.",
        "tag": "Space",
        "tagClass": "space",
        "source": "Hacker News"
    },
    {
        "id": "ng-hn-50245385",
        "title": "Solar power is becoming bigger than nuclear",
        "desc": "Click to read more about this development.",
        "tag": "Energy",
        "tagClass": "energy",
        "source": "Hacker News"
    }
]
};
