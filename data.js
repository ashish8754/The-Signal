/* ============================================
   THE SIGNAL — Auto-Generated Content
   Updated: 2026-05-17T08:24:54.839Z
   Stories: 23 | Clusters: 2 | Papers: 6 | Repos: 7
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
    "id": "rss-wn5rs10x",
    "topic": "LLMs & Generative AI",
    "topicId": "llms",
    "title": "Databricks brings GPT-5.5 to enterprise agent workflows",
    "excerpt": "Databricks uses GPT-5.5 for enterprise agent workflows after the model set a new state of the art on the OfficeQA Pro benchmark.",
    "source": "OpenAI",
    "time": "2d ago",
    "readTime": "5 min read",
    "relevance": 85,
    "url": "https://openai.com/index/databricks"
},

    topics: [
    {
        "id": "topic-llms",
        "name": "Large Language Models",
        "icon": "◎",
        "color": "#d4a03d",
        "stories": [
            {
                "id": "rss-wn5rs10x",
                "title": "Databricks brings GPT-5.5 to enterprise agent workflows",
                "source": "OpenAI",
                "time": "2d ago",
                "relevance": 85
            },
            {
                "id": "rss-v6knjnl6",
                "title": "Research repository ArXiv will ban authors for a year if they let AI do all the work",
                "source": "TechCrunch",
                "time": "13h ago",
                "relevance": 82
            },
            {
                "id": "rss-l9r1an7e",
                "title": "OpenAI and Malta partner to bring ChatGPT Plus to all citizens",
                "source": "OpenAI",
                "time": "1d ago",
                "relevance": 79
            },
            {
                "id": "rss-ww5pbx57",
                "title": "Claude Code costs up to $200 a month. Goose does the same thing for free.",
                "source": "VentureBeat",
                "time": "Jan 19",
                "relevance": 78
            },
            {
                "id": "rss-tmjlposl",
                "title": "The new AI-powered Google Finance is expanding to Europe.",
                "source": "Google Blog",
                "time": "6d ago",
                "relevance": 77
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
                "id": "rss-wx92yo8x",
                "title": "A Coding Guide Implementing SHAP Explainability Workflows with Explainer Comparisons, Maskers, Interactions, Drift, and Black-Box Models",
                "source": "MarkTechPost",
                "time": "Just now",
                "relevance": 85
            },
            {
                "id": "rss-0gl4yllm",
                "title": "Vercel Labs Introduces Zero, a Systems Programming Language Designed So AI Agents Can Read, Repair, and Ship Native Programs",
                "source": "MarkTechPost",
                "time": "Just now",
                "relevance": 84
            },
            {
                "id": "rss-0gzjrjtz",
                "title": "Meet LiteLLM Agent Platform: A Kubernetes-Based, Self-Hosted Infrastructure Layer for Isolated Agent Sandboxes and Persistent Session Management in Production",
                "source": "MarkTechPost",
                "time": "14h ago",
                "relevance": 72
            },
            {
                "id": "rss-9d20f27d",
                "title": "Nous Research Proposes Lighthouse Attention: A Training-Only Selection-Based Hierarchical Attention That Delivers 1.4–1.7× Pretraining Speedup at Long Context",
                "source": "MarkTechPost",
                "time": "10h ago",
                "relevance": 70
            }
        ]
    }
],

    papers: [
    {
        "id": "arxiv-jeexqkls",
        "title": "EntityBench: Towards Entity-Consistent Long-Range Multi-Shot Video Generation",
        "authors": "Ruozhen He, Meng Wei, Ziyan Yang, Vicente Ordonez",
        "journal": "arXiv preprint",
        "abstract": "Multi-shot video generation extends single-shot generation to coherent visual narratives, yet maintaining consistent characters, objects, and locations across shots remains a challenge over long sequences. Existing evaluations typically use independently generated prompt sets with limited entity coverage and simple…",
        "badge": "Vision",
        "url": "http://arxiv.org/abs/2605.15199v1"
    },
    {
        "id": "arxiv-gomvigrr",
        "title": "ATLAS: Agentic or Latent Visual Reasoning? One Word is Enough for Both",
        "authors": "Ziyu Guo, Rain Liu, Xinyan Chen, Pheng-Ann Heng",
        "journal": "arXiv preprint",
        "abstract": "Visual reasoning, often interleaved with intermediate visual states, has emerged as a promising direction in the field. A straightforward approach is to directly generate images via unified models during reasoning, but this is computationally expensive and architecturally non-trivial. Recent alternatives include…",
        "badge": "Vision",
        "url": "http://arxiv.org/abs/2605.15198v1"
    },
    {
        "id": "arxiv-b4wqyip8",
        "title": "RefDecoder: Enhancing Visual Generation with Conditional Video Decoding",
        "authors": "Xiang Fan, Yuheng Wang, Bohan Fang, Zhongzheng Ren, Ranjay…",
        "journal": "arXiv preprint",
        "abstract": "Video generation powers a vast array of downstream applications. However, while the de facto standard, i.e., latent diffusion models, typically employ heavily conditioned denoising networks, their decoders often remain unconditional. We observe that this architectural asymmetry leads to significant loss of detail and…",
        "badge": "Vision",
        "url": "http://arxiv.org/abs/2605.15196v1"
    },
    {
        "id": "arxiv-xg1vd26l",
        "title": "VGGT-$Ω$",
        "authors": "Jianyuan Wang, Minghao Chen, Shangzhan Zhang, Nikita…",
        "journal": "arXiv preprint",
        "abstract": "Recent feed-forward reconstruction models, such as VGGT, have proven competitive with traditional optimization-based reconstructors while also providing geometry-aware features useful for other tasks. Here, we show that the quality of these models scales predictably with model and data size. We do so by introducing…",
        "badge": "Vision",
        "url": "http://arxiv.org/abs/2605.15195v1"
    },
    {
        "id": "arxiv-7d70cyvu",
        "title": "Aligning Latent Geometry for Spherical Flow Matching in Image Generation",
        "authors": "Tuna Han Salih Meral, Kaan Oktay, Hidir Yesiltepe, Adil…",
        "journal": "arXiv preprint",
        "abstract": "Latent flow matching for image generation usually transports Gaussian noise to variational autoencoder latents along linear paths. Both endpoints, however, concentrate in thin spherical shells, and a Euclidean chord leaves those shells even when preprocessing aligns their radii. By decomposing each latent token into…",
        "badge": "Vision",
        "url": "http://arxiv.org/abs/2605.15193v1"
    },
    {
        "id": "arxiv-7qx73eyn",
        "title": "RAVEN: Real-time Autoregressive Video Extrapolation with Consistency-model GRPO",
        "authors": "Yanzuo Lu, Ronglai Zuo, Jiankang Deng",
        "journal": "arXiv preprint",
        "abstract": "Causal autoregressive video diffusion models support real-time streaming generation by extrapolating future chunks from previously generated content. Distilling such generators from high-fidelity bidirectional teachers yields competitive few-step models, yet a persistent gap between the history distributions…",
        "badge": "Vision",
        "url": "http://arxiv.org/abs/2605.15190v1"
    }
],

    repos: [
    {
        "id": "gh-pdi9r2i6",
        "name": "Significant-Gravitas/AutoGPT",
        "desc": "AutoGPT is the vision of accessible AI for everyone, to use and to build on. Our mission is to provide the tools, so…",
        "stars": "184.4k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/Significant-Gravitas/AutoGPT"
    },
    {
        "id": "gh-d4vtrcx0",
        "name": "huggingface/transformers",
        "desc": "🤗 Transformers: the model-definition framework for state-of-the-art machine learning models in text, vision, audio,…",
        "stars": "160.7k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/huggingface/transformers"
    },
    {
        "id": "gh-l0g57wej",
        "name": "NousResearch/hermes-agent",
        "desc": "The agent that grows with you",
        "stars": "153.8k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/NousResearch/hermes-agent"
    },
    {
        "id": "gh-jh9wixa9",
        "name": "langflow-ai/langflow",
        "desc": "Langflow is a powerful tool for building and deploying AI-powered agents and workflows.",
        "stars": "148.3k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/langflow-ai/langflow"
    },
    {
        "id": "gh-ykce2qp8",
        "name": "pytorch/pytorch",
        "desc": "Tensors and Dynamic neural networks in Python with strong GPU acceleration",
        "stars": "100.0k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/pytorch/pytorch"
    },
    {
        "id": "gh-0rackypz",
        "name": "AUTOMATIC1111/stable-diffusion-webui",
        "desc": "Stable Diffusion web UI",
        "stars": "163.1k",
        "lang": "Python",
        "langColor": "#3572A5",
        "url": "https://github.com/AUTOMATIC1111/stable-diffusion-webui"
    },
    {
        "id": "gh-5yp1eb33",
        "name": "Comfy-Org/ComfyUI",
        "desc": "The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface.",
        "stars": "113.2k",
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
