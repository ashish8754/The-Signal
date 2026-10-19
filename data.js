/* ============================================
   THE SIGNAL — Auto-Generated Content
   Updated: 2026-10-19T12:31:41.572Z
   Stories: 12 | Clusters: 1 | Papers: 6 | Repos: 7
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
    "id": "rss-uhef8cc9",
    "topic": "LLMs & Generative AI",
    "topicId": "llms",
    "title": "Gemini 4 Argon: Built to solve your hardest problems",
    "excerpt": "We’re giving developers, enterprises, scientists, and consumers access to Gemini 4 Argon, our latest frontier model.",
    "source": "Google Blog",
    "time": "5d ago",
    "readTime": "5 min read",
    "relevance": 75,
    "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/"
},

    topics: [
    {
        "id": "topic-llms",
        "name": "Large Language Models",
        "icon": "◎",
        "color": "#d4a03d",
        "stories": [
            {
                "id": "hn-50151390",
                "title": "Harness Engineering 101: The LLM is the brain, the harness is the body",
                "source": "Hacker News",
                "time": "Just now",
                "relevance": 80
            },
            {
                "id": "rss-rjy4kxuf",
                "title": "Timestral: Mistral release time-series foundation models",
                "source": "Hacker News",
                "time": "2h ago",
                "relevance": 79
            },
            {
                "id": "rss-uhef8cc9",
                "title": "Gemini 4 Argon: Built to solve your hardest problems",
                "source": "Google Blog",
                "time": "5d ago",
                "relevance": 75
            },
            {
                "id": "rss-myowvhn2",
                "title": "Watch the winning trailer from the Future Vision XPRIZE, The Gifted.",
                "source": "Google Blog",
                "time": "Sep 28",
                "relevance": 75
            },
            {
                "id": "rss-gop0zhdb",
                "title": "Hybrid Reasoning Agents: LLM agents that think in latent space, act through text",
                "source": "Hacker News",
                "time": "15h ago",
                "relevance": 73
            }
        ]
    }
],

    papers: [
    {
        "id": "arxiv-cp8ufe3m",
        "title": "Learning to Correct Geometry in Generated Videos",
        "authors": "Weijie Lyu, Tiancheng Shen, Jason Li, Yujing Wang, Xiaoyuan…",
        "journal": "arXiv preprint",
        "abstract": "Generated videos often lose geometric consistency under camera motion: structures warp under viewpoint change, parallax becomes inconsistent, and smooth camera movement may collapse into shot-like transitions. We argue that this failure is largely a data problem. In web-scale video corpora, most visible motion comes…",
        "badge": "Vision",
        "url": "http://arxiv.org/abs/2610.23856v1"
    },
    {
        "id": "arxiv-r1rdw6tf",
        "title": "Rethinking the design space of Vanilla Pixel Diffusion Transformers",
        "authors": "Soumik Mukhopadhyay, Long Mai, Abhinav Shrivastava,…",
        "journal": "arXiv preprint",
        "abstract": "Pixel-space diffusion models have recently re-emerged as a compelling alternative to latent diffusion, avoiding the lossy latent bottleneck and separately trained autoencoder. JiT shows that a vanilla diffusion transformer can generate directly in pixel space by replacing the commonly used velocity prediction…",
        "badge": "Vision",
        "url": "http://arxiv.org/abs/2610.23854v1"
    },
    {
        "id": "arxiv-1yrqysgn",
        "title": "Blind Precise Assembly: Proprioceptive Sim-to-Real Peg-in-Hole for Diverse Parts",
        "authors": "Antonia Bronars, Younghyo Park, Kushal Kedia, Pulkit Agrawal",
        "journal": "arXiv preprint",
        "abstract": "Every robot already carries high-resolution contact sensors: its own joints. Legged robots and humanoids exploit them to walk, run, and track whole-body motions without vision, but there the contacts are large and forceful. Is joint sensing also enough for precise, contact-rich assembly, where the robot must find a…",
        "badge": "Robotics",
        "url": "http://arxiv.org/abs/2610.23849v1"
    },
    {
        "id": "arxiv-zhn9es9z",
        "title": "Behavioral Couplings: From Formation to Behavioral Emergence in Language Models",
        "authors": "Dongyoon Hahm, Woogyeol Jin, Dennis Wei, Yi Zhou, Nathalie…",
        "journal": "arXiv preprint",
        "abstract": "Fine-tuning large language models (LLMs) can induce behaviors beyond those explicitly targeted. For example, training a model to respond more warmly can make it more sycophantic, and training it to write insecure code can cause broad misalignment on prompts unrelated to coding. We refer to a relationship between…",
        "badge": "NLP",
        "url": "http://arxiv.org/abs/2610.23847v1"
    },
    {
        "id": "arxiv-qh3yukgn",
        "title": "AI-Driven Reproducibility and Analytical Robustness in Scientific Discovery",
        "authors": "Shicheng Liu, Krista Opsahl-Ong, Andrew Drozdov, Julian…",
        "journal": "arXiv preprint",
        "abstract": "Reproducible and analytically robust research findings are essential to scientific progress, but evaluating these properties typically requires costly manual effort. We investigate whether LLM agents can help automate reproduction and robustness analysis, using a medical case study grounded in the Surveillance,…",
        "badge": "AI",
        "url": "http://arxiv.org/abs/2610.23845v1"
    },
    {
        "id": "arxiv-821g96f1",
        "title": "StopWatch: Goal Grounding for Object-goal Navigation",
        "authors": "Xinhao Liu, Yunsheng Tian, Yuheng Qiu, Pieter Abbeel, Xi…",
        "journal": "arXiv preprint",
        "abstract": "Pretrained VLMs bring rich world knowledge and semantic priors to object-goal navigation, and fine-tuning a VLM into a navigation policy has become a common recipe. Despite this progress, success rates remain low, and it is unclear which capability these fine-tuned policies lack. Our diagnosis identifies goal…",
        "badge": "Vision",
        "url": "http://arxiv.org/abs/2610.23841v1"
    }
],

    repos: [
    {
        "id": "gh-2c5ndpj4",
        "name": "NousResearch/hermes-agent",
        "desc": "The agent that grows with you",
        "stars": "255.1k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/NousResearch/hermes-agent"
    },
    {
        "id": "gh-00rfl0f2",
        "name": "Significant-Gravitas/AutoGPT",
        "desc": "AutoGPT is the vision of accessible AI for everyone, to use and to build on. Our mission is to provide the tools, so…",
        "stars": "187.6k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/Significant-Gravitas/AutoGPT"
    },
    {
        "id": "gh-u533kdv8",
        "name": "langgenius/dify",
        "desc": "Build Agentic workflows, RAG pipelines, with rich AI model and tool support on one collaborative workspace. Deploy on…",
        "stars": "158.9k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/langgenius/dify"
    },
    {
        "id": "gh-ozd2hy1y",
        "name": "huggingface/transformers",
        "desc": "🤗 Transformers: the model-definition framework for state-of-the-art machine learning models in text, vision, audio,…",
        "stars": "167.9k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/huggingface/transformers"
    },
    {
        "id": "gh-kflw1vcg",
        "name": "pytorch/pytorch",
        "desc": "Tensors and Dynamic neural networks in Python with strong GPU acceleration",
        "stars": "104.9k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/pytorch/pytorch"
    },
    {
        "id": "gh-dk16me2a",
        "name": "AUTOMATIC1111/stable-diffusion-webui",
        "desc": "Stable Diffusion web UI",
        "stars": "165.1k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/AUTOMATIC1111/stable-diffusion-webui"
    },
    {
        "id": "gh-4c5cmu48",
        "name": "Comfy-Org/ComfyUI",
        "desc": "The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface. The fastest local…",
        "stars": "139.2k",
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
