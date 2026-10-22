/* ============================================
   THE SIGNAL — Auto-Generated Content
   Updated: 2026-10-22T11:22:40.696Z
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
    "id": "hn-50192868",
    "topic": "LLMs & Generative AI",
    "topicId": "llms",
    "title": "Achieving AI-style reasoning without an LLM",
    "excerpt": "A major development in large language models that could reshape how we interact with AI systems.",
    "source": "Hacker News",
    "time": "2h ago",
    "readTime": "5 min read",
    "relevance": 79,
    "url": "https://fleetingswallow.com/minotaur-ai-deep-dive-achieving-reasoning-without-a-language-model/"
},

    topics: [
    {
        "id": "topic-llms",
        "name": "Large Language Models",
        "icon": "◎",
        "color": "#d4a03d",
        "stories": [
            {
                "id": "hn-50192868",
                "title": "Achieving AI-style reasoning without an LLM",
                "source": "Hacker News",
                "time": "2h ago",
                "relevance": 79
            },
            {
                "id": "hn-50176082",
                "title": "Using LLM for confidence scoring is a bad idea",
                "source": "Hacker News",
                "time": "1d ago",
                "relevance": 68
            },
            {
                "id": "hn-50163277",
                "title": "DeepInfer: High-performance inference framework for DeepSeek models",
                "source": "Hacker News",
                "time": "1d ago",
                "relevance": 65
            },
            {
                "id": "hn-50175779",
                "title": "Using Claude to reduce the attack surface of code",
                "source": "Hacker News",
                "time": "7h ago",
                "relevance": 65
            }
        ]
    }
],

    papers: [
    {
        "id": "arxiv-izno0sjs",
        "title": "Agentic World Action Models",
        "authors": "Zhuoyang Liu, Dantong Niu, Botong Zhang, Boning Shao, Jing…",
        "journal": "arXiv preprint",
        "abstract": "Recent world action models provide visual foresight and future prediction for robot manipulation, but lack explicit mechanisms for compositional skill reuse. Agentic robotics combines code-based planning and reasoning with reusable skills, but often lacks predictive grounding in physical dynamics. We introduce AW-0,…",
        "badge": "Robotics",
        "url": "http://arxiv.org/abs/2610.30136v1"
    },
    {
        "id": "arxiv-l8l68tvo",
        "title": "LongZero: Enhancing Long-Context Reasoning in LLMs from Zero Data",
        "authors": "Zhennan Wan, Jianfei Chen",
        "journal": "arXiv preprint",
        "abstract": "Reinforcement learning (RL) is an effective way to strengthen the long-context reasoning of large language models (LLMs), but it needs training data that are long, diverse, challenging, and verifiable. Human annotation of such data is expensive, naturally occurring data are too scarce to sustain RL, and existing…",
        "badge": "NLP",
        "url": "http://arxiv.org/abs/2610.30132v1"
    },
    {
        "id": "arxiv-pny6ajsk",
        "title": "Rethinking Video Autoencoders for Interactive World Models",
        "authors": "Adrien Ramanana Rahary, Yutong Bai, Nicolas Dufour, Patrick…",
        "journal": "arXiv preprint",
        "abstract": "Video world models predict future frames from past frames and actions. They serve as simulators in which agents train, plan or are evaluated, and that humans can control interactively. They generate in the latent space of a video autoencoder, whose compression sets their cost per frame and how long each action waits…",
        "badge": "Vision",
        "url": "http://arxiv.org/abs/2610.30129v1"
    },
    {
        "id": "arxiv-ip1zcpfl",
        "title": "Think Harder Where It Matters: Item-Level Adaptive Recursion for Sequential Recommendation",
        "authors": "Zhanshuo Cao, Jiakai Tang, Yuqi Zhou, Sunhao Dai, Jun Xu",
        "journal": "arXiv preprint",
        "abstract": "Existing sequential recommenders usually allocate a fixed computational budget to every item in a user's interaction history, regardless of the item's contribution to the final prediction. We challenge this de facto design with two diagnostic findings. (1) Non-uniform computational need: items within the same sequence…",
        "badge": "Research",
        "url": "http://arxiv.org/abs/2610.30128v1"
    },
    {
        "id": "arxiv-mdr8j6e0",
        "title": "VoxProg: 3D Spatial Reasoning through Voxel Programming",
        "authors": "Zhichao Zhai, Menglei Zhao, Guikun Chen, Zihao Yan, Kanzhi…",
        "journal": "arXiv preprint",
        "abstract": "Language models' abilities to interpret tasks and generate programs offer a promising basis for 3D spatial reasoning. Yet following spatial instructions in 3D scenes requires programs to construct geometric references that language leaves implicit. In this work, we introduce VoxProg, which formulates 3D object…",
        "badge": "Vision",
        "url": "http://arxiv.org/abs/2610.30127v1"
    },
    {
        "id": "arxiv-hqqzk3e9",
        "title": "PhysiCalWorld: In-Context Physics Calibration for World Models",
        "authors": "Yunhao Luo, Wentao He, Yinpei Dai, Hyelin Nam, Hongze Fu,…",
        "journal": "arXiv preprint",
        "abstract": "Existing world models typically perceive a scene through current visual frame or a narrow history window. However, these observations may not reveal the physics properties that determine transition dynamics, such as an object's mass distribution, joint damping, or surface friction. Without calibrating these physics…",
        "badge": "Robotics",
        "url": "http://arxiv.org/abs/2610.30125v1"
    }
],

    repos: [
    {
        "id": "gh-wvcbxk56",
        "name": "NousResearch/hermes-agent",
        "desc": "The agent that grows with you",
        "stars": "256.1k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/NousResearch/hermes-agent"
    },
    {
        "id": "gh-b6olkyvr",
        "name": "Significant-Gravitas/AutoGPT",
        "desc": "AutoGPT is the vision of accessible AI for everyone, to use and to build on. Our mission is to provide the tools, so…",
        "stars": "187.7k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/Significant-Gravitas/AutoGPT"
    },
    {
        "id": "gh-n96kxpsq",
        "name": "langgenius/dify",
        "desc": "Build Agentic workflows, RAG pipelines, with rich AI model and tool support on one collaborative workspace. Deploy on…",
        "stars": "159.2k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/langgenius/dify"
    },
    {
        "id": "gh-hrpfzrq2",
        "name": "huggingface/transformers",
        "desc": "🤗 Transformers: the model-definition framework for state-of-the-art machine learning models in text, vision, audio,…",
        "stars": "168.0k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/huggingface/transformers"
    },
    {
        "id": "gh-12pxkk0z",
        "name": "pytorch/pytorch",
        "desc": "Tensors and Dynamic neural networks in Python with strong GPU acceleration",
        "stars": "105.0k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/pytorch/pytorch"
    },
    {
        "id": "gh-mpydzwqb",
        "name": "AUTOMATIC1111/stable-diffusion-webui",
        "desc": "Stable Diffusion web UI",
        "stars": "165.1k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/AUTOMATIC1111/stable-diffusion-webui"
    },
    {
        "id": "gh-bu5spy7y",
        "name": "Comfy-Org/ComfyUI",
        "desc": "The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface. The fastest local…",
        "stars": "141.9k",
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
