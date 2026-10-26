/* ============================================
   THE SIGNAL — Auto-Generated Content
   Updated: 2026-10-26T12:28:38.218Z
   Stories: 12 | Clusters: 3 | Papers: 6 | Repos: 7
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
    "id": "hn-50234474",
    "topic": "Developer Tools",
    "topicId": "devtools",
    "title": "Dolly Parton's Imagination Library",
    "excerpt": "A noteworthy development in the AI and technology landscape.",
    "source": "Hacker News",
    "time": "18h ago",
    "readTime": "5 min read",
    "relevance": 72,
    "url": "https://imaginationlibrary.com/"
},

    topics: [
    {
        "id": "topic-infra",
        "name": "AI Infrastructure",
        "icon": "▣",
        "color": "#fb923c",
        "stories": [
            {
                "id": "hn-50210181",
                "title": "Superhuman Hardware Design Is the Easy Part",
                "source": "Hacker News",
                "time": "2d ago",
                "relevance": 65
            },
            {
                "id": "hn-50222525",
                "title": "Neural chip decodes interactions between brain regions",
                "source": "Hacker News",
                "time": "18h ago",
                "relevance": 65
            },
            {
                "id": "hn-50219700",
                "title": "GPU-unlock: FP/BF16 instruction issue rate on Nvidia 3000's cards",
                "source": "Hacker News",
                "time": "1d ago",
                "relevance": 65
            }
        ]
    },
    {
        "id": "topic-quantum",
        "name": "quantum",
        "icon": "•",
        "color": "#8b949e",
        "stories": [
            {
                "id": "hn-50219666",
                "title": "I don't understand quantum physics (2018)",
                "source": "Hacker News",
                "time": "1d ago",
                "relevance": 65
            },
            {
                "id": "hn-50219666",
                "title": "I Don't Understand Quantum Physics",
                "source": "Hacker News",
                "time": "Just now",
                "relevance": 65
            }
        ]
    },
    {
        "id": "topic-vision",
        "name": "Computer Vision & Media",
        "icon": "◐",
        "color": "#e8b84a",
        "stories": [
            {
                "id": "hn-50172432",
                "title": "I Built a Stereo Vision Board for Hardware Hackers",
                "source": "Hacker News",
                "time": "4d ago",
                "relevance": 65
            },
            {
                "id": "hn-50171379",
                "title": "A practical guide to AI image generation, from diffusion to agents",
                "source": "Hacker News",
                "time": "3d ago",
                "relevance": 65
            }
        ]
    }
],

    papers: [
    {
        "id": "arxiv-bdpcdmkv",
        "title": "The Language of Instruction: Genre and Generative AI",
        "authors": "James E. Dobson",
        "journal": "arXiv preprint",
        "abstract": "This article argues that instruction-fine-tuned language models should be understood as implementing a genre, what is proposed as the instructional-conversational genre. This genre is an amalgamation of discursive language from prior conversations between generative models and humans recursively run through these…",
        "badge": "NLP",
        "url": "http://arxiv.org/abs/2610.32982v1"
    },
    {
        "id": "arxiv-fjlmbl2f",
        "title": "SceneBloom: Agentic Indoor Environment Generation with Realistic and Diverse Layouts for Embodied Learning",
        "authors": "Yuhan Liu, Lianhui Qin, Shenji Wan",
        "journal": "arXiv preprint",
        "abstract": "Training generalizable embodied agents requires realistic, varied, and simulation-ready indoor environments. Language-guided methods support semantic planning and object-level reasoning, but precise spatial grounding remains difficult. Visual generative models offer rich priors over plausible arrangements, yet their…",
        "badge": "Vision",
        "url": "http://arxiv.org/abs/2610.32978v1"
    },
    {
        "id": "arxiv-dzr911vc",
        "title": "UniAction: Unified Action Conditioning for World Models",
        "authors": "Bowen Xue, Zizhang Li, Hong-Xing Yu, Jiajun Wu",
        "journal": "arXiv preprint",
        "abstract": "Actions that condition world models are highly heterogeneous, and thus existing action-conditioned world models are typically built for individual action types, fragmenting already limited action-annotated data across separate models. We introduce UniAction, a unified action-conditioning framework that represents any…",
        "badge": "Vision",
        "url": "http://arxiv.org/abs/2610.32977v1"
    },
    {
        "id": "arxiv-0gv9guve",
        "title": "FlexGlue: Sparse-to-Dense Feature Matching and Visual Disambiguation",
        "authors": "Philipp Lindenberger, Paul-Edouard Sarlin, Ondrej Miksik,…",
        "journal": "arXiv preprint",
        "abstract": "To estimate correspondences across images, existing approaches match either sparse interest points, which is highly efficient but limited by repeatability, or dense pixel grids, which is robust but expensive. Furthermore, these approaches are trained with only matching pairs and thus often fail to reject unrelated…",
        "badge": "Vision",
        "url": "http://arxiv.org/abs/2610.32976v1"
    },
    {
        "id": "arxiv-wsigao8l",
        "title": "RobustRLlib: A Unified Library and Benchmark for Robust Reinforcement Learning Algorithms",
        "authors": "Xi Chen, Fengqi Hu, Zeyu Shen, Jiaying Xu, Shangding Gu,…",
        "journal": "arXiv preprint",
        "abstract": "Robust reinforcement learning (RL) is critical for reliable real-world deployment, where policies may fail under diverse shifts and disruptions. Existing robust RL algorithms offer a rich set of mechanisms and principles, yet two major barriers limit their broader potential: limited algorithm reusability and an…",
        "badge": "ML",
        "url": "http://arxiv.org/abs/2610.32971v1"
    },
    {
        "id": "arxiv-wx5rkz4n",
        "title": "DexPort: A Hand-Held Skill Interface for Dexterous Hand Data Collection",
        "authors": "Amber Xie, Jiawei Fu, Xiaofeng Guo, Carmelo Sferrazza,…",
        "journal": "arXiv preprint",
        "abstract": "Collecting high-quality demonstrations remains a central bottleneck for learning dexterous manipulation. Teleoperation records executable robot actions, but it requires a complete robot setup and places the burden of coordinating many finger joints on the operator. Human demonstrations are easier to collect, but their…",
        "badge": "Robotics",
        "url": "http://arxiv.org/abs/2610.32969v1"
    }
],

    repos: [
    {
        "id": "gh-d5xqiyh3",
        "name": "NousResearch/hermes-agent",
        "desc": "The agent that grows with you",
        "stars": "257.2k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/NousResearch/hermes-agent"
    },
    {
        "id": "gh-k00zu3q9",
        "name": "Significant-Gravitas/AutoGPT",
        "desc": "AutoGPT is the vision of accessible AI for everyone, to use and to build on. Our mission is to provide the tools, so…",
        "stars": "187.8k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/Significant-Gravitas/AutoGPT"
    },
    {
        "id": "gh-7n4zf3kr",
        "name": "langgenius/dify",
        "desc": "Build Agentic workflows, RAG pipelines, with rich AI model and tool support on one collaborative workspace. Deploy on…",
        "stars": "159.6k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/langgenius/dify"
    },
    {
        "id": "gh-isba21aw",
        "name": "huggingface/transformers",
        "desc": "🤗 Transformers: the model-definition framework for state-of-the-art machine learning models in text, vision, audio,…",
        "stars": "168.2k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/huggingface/transformers"
    },
    {
        "id": "gh-6n908ogi",
        "name": "pytorch/pytorch",
        "desc": "Tensors and Dynamic neural networks in Python with strong GPU acceleration",
        "stars": "105.1k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/pytorch/pytorch"
    },
    {
        "id": "gh-tibapknf",
        "name": "AUTOMATIC1111/stable-diffusion-webui",
        "desc": "Stable Diffusion web UI",
        "stars": "165.2k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/AUTOMATIC1111/stable-diffusion-webui"
    },
    {
        "id": "gh-7t5hxc56",
        "name": "Comfy-Org/ComfyUI",
        "desc": "The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface. The fastest local…",
        "stars": "143.1k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/Comfy-Org/ComfyUI"
    }
],

    nextgen: [
    {
        "id": "ng-hn-50219666",
        "title": "I don't understand quantum physics (2018)",
        "desc": "Click to read more about this development.",
        "tag": "Quantum",
        "tagClass": "quantum",
        "source": "Hacker News"
    },
    {
        "id": "ng-hn-50219666",
        "title": "I Don't Understand Quantum Physics",
        "desc": "Click to read more about this development.",
        "tag": "Quantum",
        "tagClass": "quantum",
        "source": "Hacker News"
    },
    {
        "id": "ng-hn-50171379",
        "title": "A practical guide to AI image generation, from diffusion to agents",
        "desc": "Click to read more about this development.",
        "tag": "Energy",
        "tagClass": "energy",
        "source": "Hacker News"
    }
]
};
