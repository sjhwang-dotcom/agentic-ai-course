export const readingList = [
  {
    topic: 'Introduction to Agentic AI',
    subtopics: [
      {
        name: 'Surveys & Taxonomies',
        papers: [
          { title: 'A Survey on Large Language Model based Autonomous Agents', authors: 'Wang et al.', venue: 'Frontiers of Computer Science, 2024', url: 'https://arxiv.org/abs/2308.11432' },
          { title: 'The Rise and Potential of Large Language Model Based Agents: A Survey', authors: 'Xi et al.', venue: 'Science China Information Sciences, 2024', url: 'https://arxiv.org/abs/2309.07864' },
          { title: 'Agentic AI: A Comprehensive Survey of Architectures, Applications, and Future Directions', authors: 'Abou Ali et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2510.25445' },
          { title: 'AI Agent Systems: Architectures, Applications, and Evaluation', authors: 'Xu, B.', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2601.01743' },
          { title: 'Agentic AI: Architectures, Taxonomies, and Evaluation of LLM Agents', authors: 'Arunkumar et al.', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2601.12560' },
        ],
      },
      {
        name: 'Cognitive Foundations',
        papers: [
          { title: 'Cognitive Architectures for Language Agents (CoALA)', authors: 'Sumers et al.', venue: 'TMLR 2024', url: 'https://arxiv.org/abs/2309.02427' },
          { title: 'LLM Powered Autonomous Agents', authors: 'Weng, L.', venue: 'Lil\'Log, 2023', url: 'https://lilianweng.github.io/posts/2023-06-23-agent/' },
          { title: 'The Landscape of Emerging AI Agent Architectures for Reasoning, Planning, and Tool Calling', authors: 'Masterman et al.', venue: 'arXiv 2024', url: 'https://arxiv.org/abs/2404.11584' },
          { title: 'HuggingGPT: Solving AI Tasks with ChatGPT and its Friends in Hugging Face', authors: 'Shen et al.', venue: 'NeurIPS 2023', url: 'https://arxiv.org/abs/2303.17580' },
          { title: 'MRKL Systems: A Modular, Neuro-Symbolic Architecture that Combines LLMs, External Knowledge Sources and Discrete Reasoning', authors: 'Karpas et al.', venue: 'arXiv 2022', url: 'https://arxiv.org/abs/2205.00445' },
        ],
      },
      {
        name: 'Trends & Scaling',
        papers: [
          { title: 'Towards a Science of Scaling Agent Systems', authors: 'Kim et al.', venue: 'arXiv 2025 (Google Research)', url: 'https://arxiv.org/abs/2512.08296' },
          { title: 'Generative to Agentic AI: Survey, Conceptualization, and Challenges', authors: 'Schneider', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2504.18875' },
          { title: 'A Comprehensive Survey of Self-Evolving AI Agents', authors: 'Fang et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2508.07407' },
        ],
      },
    ],
  },
  {
    topic: 'Agentic Architecture Patterns',
    subtopics: [
      {
        name: 'Reasoning & Chain-of-Thought',
        papers: [
          { title: 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models', authors: 'Wei et al.', venue: 'NeurIPS 2022', url: 'https://arxiv.org/abs/2201.11903' },
          { title: 'Self-Consistency Improves Chain of Thought Reasoning in Language Models', authors: 'Wang et al.', venue: 'ICLR 2023', url: 'https://arxiv.org/abs/2203.11171' },
          { title: 'Least-to-Most Prompting Enables Complex Reasoning in Large Language Models', authors: 'Zhou et al.', venue: 'ICLR 2023', url: 'https://arxiv.org/abs/2205.10625' },
          { title: 'Scaling Test-Time Compute for LLM Agents', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2506.12928' },
        ],
      },
      {
        name: 'Search & Planning',
        papers: [
          { title: 'Tree of Thoughts: Deliberate Problem Solving with Large Language Models', authors: 'Yao et al.', venue: 'NeurIPS 2023', url: 'https://arxiv.org/abs/2305.10601' },
          { title: 'Plan-and-Solve Prompting', authors: 'Wang et al.', venue: 'ACL 2023', url: 'https://arxiv.org/abs/2305.04091' },
          { title: 'Language Agent Tree Search Unifies Reasoning, Acting, and Planning (LATS)', authors: 'Zhou et al.', venue: 'ICML 2024', url: 'https://arxiv.org/abs/2310.04406' },
          { title: 'Graph of Thoughts: Solving Elaborate Problems with Large Language Models', authors: 'Besta et al.', venue: 'AAAI 2024', url: 'https://arxiv.org/abs/2308.09687' },
        ],
      },
      {
        name: 'Reasoning-Action & Reflection',
        papers: [
          { title: 'ReAct: Synergizing Reasoning and Acting in Language Models', authors: 'Yao et al.', venue: 'ICLR 2023', url: 'https://arxiv.org/abs/2210.03629' },
          { title: 'Reflexion: Language Agents with Verbal Reinforcement Learning', authors: 'Shinn et al.', venue: 'NeurIPS 2023', url: 'https://arxiv.org/abs/2303.11366' },
          { title: 'Towards a Science of Scaling Agent Systems', authors: 'Kim et al.', venue: 'arXiv 2025 (Google Research)', url: 'https://arxiv.org/abs/2512.08296' },
        ],
      },
    ],
  },
  {
    topic: 'Tools & Function Calling',
    subtopics: [
      {
        name: 'Tool-Augmented LLMs',
        papers: [
          { title: 'Toolformer: Language Models Can Teach Themselves to Use Tools', authors: 'Schick et al.', venue: 'NeurIPS 2023', url: 'https://arxiv.org/abs/2302.04761' },
          { title: 'TALM: Tool Augmented Language Models', authors: 'Parisi et al.', venue: 'arXiv 2022', url: 'https://arxiv.org/abs/2205.12255' },
          { title: 'ART: Automatic Multi-step Reasoning and Tool-use', authors: 'Paranjape et al.', venue: 'arXiv 2023', url: 'https://arxiv.org/abs/2303.09014' },
          { title: 'Chameleon: Plug-and-Play Compositional Reasoning with Large Language Models', authors: 'Lu et al.', venue: 'NeurIPS 2023', url: 'https://arxiv.org/abs/2304.09842' },
          { title: 'ToolACE: Winning the Points of LLM Function Calling', authors: 'Liu et al.', venue: 'arXiv 2024', url: 'https://arxiv.org/abs/2409.00920' },
        ],
      },
      {
        name: 'API Orchestration & Benchmarks',
        papers: [
          { title: 'Gorilla: Large Language Model Connected with Massive APIs', authors: 'Patil et al.', venue: 'NeurIPS 2024', url: 'https://arxiv.org/abs/2305.15334' },
          { title: 'ToolLLM: Facilitating Large Language Models to Master 16000+ Real-world APIs', authors: 'Qin et al.', venue: 'ICLR 2024 Spotlight', url: 'https://arxiv.org/abs/2307.16789' },
          { title: 'API-Bank: A Comprehensive Benchmark for Tool-Augmented LLMs', authors: 'Li et al.', venue: 'EMNLP 2023', url: 'https://arxiv.org/abs/2304.08244' },
          { title: 'TaskMatrix.AI: Completing Tasks by Connecting Foundation Models with Millions of APIs', authors: 'Liang et al.', venue: 'arXiv 2023', url: 'https://arxiv.org/abs/2303.16434' },
        ],
      },
      {
        name: 'Model Context Protocol (MCP)',
        papers: [
          { title: 'MCPAgentBench: Evaluating LLM Agent MCP Tool Use', authors: 'Liu et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2512.24565' },
          { title: 'Enhancing Model Context Protocol (MCP) with Context-Aware Server Collaboration', authors: 'Jayanti et al.', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2601.11595' },
          { title: 'ScaleMCP: Dynamic and Auto-Synchronizing MCP Tools for LLM Agents', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2505.06416' },
          { title: 'RAG-MCP: Mitigating Prompt Bloat in LLM Tool Selection via Retrieval-Augmented Generation', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2505.03275' },
          { title: 'MCP-Zero: Active Tool Discovery for Autonomous LLM Agents', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2506.01056' },
          { title: 'MCP-Bench: Benchmarking Tool-Using LLM Agents with Complex Real-World Tasks via MCP Servers', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2508.20453' },
        ],
      },
    ],
  },
  {
    topic: 'Memory & RAG',
    subtopics: [
      {
        name: 'RAG Foundations',
        papers: [
          { title: 'Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks', authors: 'Lewis et al.', venue: 'NeurIPS 2020', url: 'https://arxiv.org/abs/2005.11401' },
          { title: 'REALM: Retrieval-Augmented Language Model Pre-Training', authors: 'Guu et al.', venue: 'ICML 2020', url: 'https://arxiv.org/abs/2002.08909' },
          { title: 'Dense Passage Retrieval for Open-Domain Question Answering', authors: 'Karpukhin et al.', venue: 'EMNLP 2020', url: 'https://arxiv.org/abs/2004.04906' },
          { title: 'REPLUG: Retrieval-Augmented Black-Box Language Models', authors: 'Shi et al.', venue: 'NAACL 2024', url: 'https://arxiv.org/abs/2301.12652' },
          { title: 'Adaptive-RAG: Learning to Adapt Retrieval-Augmented LLMs through Question Complexity', authors: 'Jeong et al.', venue: 'NAACL 2024', url: 'https://arxiv.org/abs/2403.14403' },
        ],
      },
      {
        name: 'Agent Memory Architectures',
        papers: [
          { title: 'MemGPT: Towards LLMs as Operating Systems', authors: 'Packer et al.', venue: 'arXiv 2023', url: 'https://arxiv.org/abs/2310.08560' },
          { title: 'Cognitive Architectures for Language Agents (CoALA)', authors: 'Sumers et al.', venue: 'TMLR 2024', url: 'https://arxiv.org/abs/2309.02427' },
          { title: 'A Survey on the Memory Mechanism of Large Language Model based Agents', authors: 'Zhang et al.', venue: 'ACM TOIS 2025', url: 'https://arxiv.org/abs/2404.13501' },
          { title: 'HippoRAG: Neurobiologically Inspired Long-Term Memory for Large Language Models', authors: 'Gutierrez et al.', venue: 'NeurIPS 2024', url: 'https://arxiv.org/abs/2405.14831' },
          { title: 'A-MEM: Agentic Memory for LLM Agents', authors: 'Xu et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2502.12110' },
          { title: 'Memory in the Age of AI Agents: A Survey', authors: 'Hu et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2512.13564' },
        ],
      },
      {
        name: 'Advanced & Agentic RAG',
        papers: [
          { title: 'Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection', authors: 'Asai et al.', venue: 'ICLR 2024 Oral', url: 'https://arxiv.org/abs/2310.11511' },
          { title: 'Corrective Retrieval Augmented Generation (CRAG)', authors: 'Yan et al.', venue: 'arXiv 2024', url: 'https://arxiv.org/abs/2401.15884' },
          { title: 'Agentic Retrieval-Augmented Generation: A Survey on Agentic RAG', authors: 'Singh et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2501.09136' },
          { title: 'A-RAG: Scaling Agentic RAG via Hierarchical Retrieval Interfaces', authors: 'Various', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2602.03442' },
          { title: 'GAM-RAG: Gain-Adaptive Memory for Evolving Retrieval in RAG', authors: 'Various', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2603.01783' },
        ],
      },
    ],
  },
  {
    topic: 'Multi-Agent Systems',
    subtopics: [
      {
        name: 'Multi-Agent Frameworks',
        papers: [
          { title: 'AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation', authors: 'Wu et al.', venue: 'ICOLM 2024', url: 'https://arxiv.org/abs/2308.08155' },
          { title: 'MetaGPT: Meta Programming for A Multi-Agent Collaborative Framework', authors: 'Hong et al.', venue: 'ICLR 2024', url: 'https://arxiv.org/abs/2308.00352' },
          { title: 'Communicative Agents for Software Development (ChatDev)', authors: 'Qian et al.', venue: 'ACL 2024', url: 'https://arxiv.org/abs/2307.07924' },
          { title: 'AgentVerse: Facilitating Multi-Agent Collaboration', authors: 'Chen et al.', venue: 'ICLR 2024', url: 'https://arxiv.org/abs/2308.10848' },
          { title: 'CAMEL: Communicative Agents for "Mind" Exploration of Large Language Model Society', authors: 'Li et al.', venue: 'NeurIPS 2023', url: 'https://arxiv.org/abs/2303.17760' },
          { title: 'Scaling Large Language Model-based Multi-Agent Collaboration', authors: 'Qian et al.', venue: 'ICLR 2025', url: 'https://arxiv.org/abs/2406.07155' },
        ],
      },
      {
        name: 'Debate & Argumentation',
        papers: [
          { title: 'Improving Factuality and Reasoning in Language Models through Multiagent Debate', authors: 'Du et al.', venue: 'ICML 2024', url: 'https://arxiv.org/abs/2305.14325' },
          { title: 'Encouraging Divergent Thinking in LLMs through Multi-Agent Debate', authors: 'Liang et al.', venue: 'EMNLP 2024', url: 'https://arxiv.org/abs/2305.19118' },
          { title: 'Multiagent Finetuning: Self Improvement with Diverse Reasoning Chains', authors: 'Subramaniam et al.', venue: 'ICLR 2025', url: 'https://arxiv.org/abs/2501.05707' },
          { title: 'Multi-Agent Collaboration Mechanisms: A Survey of LLMs', authors: 'Tran et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2501.06322' },
        ],
      },
      {
        name: 'Emergent Social Dynamics',
        papers: [
          { title: 'Exploring Collaboration Mechanisms for LLM Agents: A Social Psychology View', authors: 'Zhang et al.', venue: 'ACL 2024', url: 'https://arxiv.org/abs/2310.02124' },
          { title: 'Cooperate or Collapse: Emergence of Sustainable Cooperation in a Society of LLM Agents', authors: 'Piatti et al.', venue: 'NeurIPS 2024', url: 'https://arxiv.org/abs/2404.16698' },
          { title: 'Towards a Science of Scaling Agent Systems', authors: 'Kim et al.', venue: 'arXiv 2025 (Google Research)', url: 'https://arxiv.org/abs/2512.08296' },
        ],
      },
    ],
  },
  {
    topic: 'Agentic AI Frameworks',
    subtopics: [
      {
        name: 'Core Frameworks & SDKs',
        papers: [
          { title: 'DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines', authors: 'Khattab et al.', venue: 'ICLR 2024 Spotlight', url: 'https://arxiv.org/abs/2310.03714' },
          { title: 'OpenHands: An Open Platform for AI Software Developers as Generalist Agents', authors: 'Wang et al.', venue: 'ICLR 2025', url: 'https://arxiv.org/abs/2407.16741' },
          { title: 'ToolLLM: Facilitating Large Language Models to Master 16000+ Real-world APIs', authors: 'Qin et al.', venue: 'ICLR 2024 Spotlight', url: 'https://arxiv.org/abs/2307.16789' },
          { title: 'Exploration of LLM Multi-Agent Application Based on LangGraph+CrewAI', authors: 'Duan et al.', venue: 'arXiv 2024', url: 'https://arxiv.org/abs/2411.18241' },
          { title: 'The OpenHands Software Agent SDK', authors: 'Wang et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2511.03690' },
          { title: 'The Auton Agentic AI Framework', authors: 'Cao et al.', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2602.23720' },
        ],
      },
      {
        name: 'Agent Protocols & Interoperability',
        papers: [
          { title: 'A Survey of AI Agent Protocols', authors: 'Yang et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2504.16736' },
          { title: 'A Survey of Agent Interoperability Protocols: MCP, ACP, A2A, and ANP', authors: 'Ehtesham et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2505.02279' },
          { title: 'Building A Secure Agentic AI Application Leveraging A2A Protocol', authors: 'Habler et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2504.16902' },
          { title: 'MCP Safety Audit: LLMs with the Model Context Protocol Allow Major Security Exploits', authors: 'Radosevich et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2504.03767' },
        ],
      },
      {
        name: 'Production & Deployment',
        papers: [
          { title: 'Agentic AI Frameworks: Architectures, Protocols, and Design Challenges', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2508.10146' },
          { title: 'A Practical Guide for Production-Grade Agentic AI Workflows', authors: 'Bandara et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2512.08769' },
        ],
      },
    ],
  },
  {
    topic: 'Performance Evaluation',
    subtopics: [
      {
        name: 'General Agent Benchmarks',
        papers: [
          { title: 'AgentBench: Evaluating LLMs as Agents', authors: 'Liu et al.', venue: 'ICLR 2024', url: 'https://arxiv.org/abs/2308.03688' },
          { title: 'GAIA: A Benchmark for General AI Assistants', authors: 'Mialon et al.', venue: 'arXiv 2023', url: 'https://arxiv.org/abs/2311.12983' },
          { title: 'τ-bench: A Benchmark for Tool-Agent-User Interaction', authors: 'Yao et al.', venue: 'arXiv 2024', url: 'https://arxiv.org/abs/2406.12045' },
          { title: 'AgentBoard: An Analytical Evaluation Board of Multi-turn LLM Agents', authors: 'Ma et al.', venue: 'NeurIPS 2024 Oral', url: 'https://arxiv.org/abs/2401.13178' },
          { title: 'Gaia2: Benchmarking LLM Agents on Dynamic and Asynchronous Environments', authors: 'Froger et al.', venue: 'ICLR 2026 Oral', url: 'https://arxiv.org/abs/2602.11964' },
        ],
      },
      {
        name: 'Domain-Specific Benchmarks',
        papers: [
          { title: 'SWE-bench: Can Language Models Resolve Real-World GitHub Issues?', authors: 'Jimenez et al.', venue: 'ICLR 2024 Oral', url: 'https://arxiv.org/abs/2310.06770' },
          { title: 'Evaluating Large Language Models Trained on Code (HumanEval)', authors: 'Chen et al.', venue: 'arXiv 2021', url: 'https://arxiv.org/abs/2107.03374' },
          { title: 'ALFWorld: Aligning Text and Embodied Environments for Interactive Learning', authors: 'Shridhar et al.', venue: 'ICLR 2021', url: 'https://arxiv.org/abs/2010.03768' },
          { title: 'TheAgentCompany: Benchmarking LLM Agents on Consequential Real World Tasks', authors: 'Xu et al.', venue: 'NeurIPS 2025', url: 'https://arxiv.org/abs/2412.14161' },
          { title: 'SWE-Bench Pro: Can AI Agents Solve Long-Horizon Software Engineering Tasks?', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2509.16941' },
          { title: 'MCP-AgentBench: Evaluating Language Agent Performance with MCP-Mediated Tools', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2509.09734' },
        ],
      },
      {
        name: 'Evaluation Methodology',
        papers: [
          { title: 'Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena', authors: 'Zheng et al.', venue: 'NeurIPS 2023', url: 'https://arxiv.org/abs/2306.05685' },
          { title: 'AI Agents That Matter', authors: 'Kapoor et al.', venue: 'arXiv 2024', url: 'https://arxiv.org/abs/2407.01502' },
        ],
      },
    ],
  },
  {
    topic: 'Safety & Security',
    subtopics: [
      {
        name: 'Adversarial Attacks & Prompt Injection',
        papers: [
          { title: 'Not What You\'ve Signed Up For: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection', authors: 'Greshake et al.', venue: 'AISec 2023', url: 'https://arxiv.org/abs/2302.12173' },
          { title: 'AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defenses', authors: 'Debenedetti et al.', venue: 'NeurIPS 2024 Spotlight', url: 'https://arxiv.org/abs/2406.13352' },
          { title: 'InjecAgent: Benchmarking Indirect Prompt Injections in Tool-Integrated LLM Agents', authors: 'Zhan et al.', venue: 'ACL 2024 Findings', url: 'https://arxiv.org/abs/2403.02691' },
          { title: 'AgentPoison: Red-teaming LLM Agents via Poisoning Memory or Knowledge Bases', authors: 'Chen et al.', venue: 'NeurIPS 2024', url: 'https://arxiv.org/abs/2407.12784' },
          { title: 'WASP: Benchmarking Web Agent Security Against Prompt Injection Attacks', authors: 'Evtimov et al.', venue: 'arXiv 2025 (Meta)', url: 'https://arxiv.org/abs/2504.18575' },
        ],
      },
      {
        name: 'Safety Benchmarks & Evaluation',
        papers: [
          { title: 'R-Judge: Benchmarking Safety Risk Awareness for LLM Agents', authors: 'Yuan et al.', venue: 'EMNLP 2024 Findings', url: 'https://arxiv.org/abs/2401.10019' },
          { title: 'AgentHarm: A Benchmark for Measuring Harmfulness of LLM Agents', authors: 'Andriushchenko et al.', venue: 'ICLR 2025', url: 'https://arxiv.org/abs/2410.09024' },
          { title: 'Agent-SafetyBench: Evaluating the Safety of LLM Agents', authors: 'Zhang et al.', venue: 'arXiv 2024', url: 'https://arxiv.org/abs/2412.14470' },
          { title: 'Agent Security Bench (ASB): Formalizing and Benchmarking Attacks and Defenses in LLM-based Agents', authors: 'Zhang et al.', venue: 'ICLR 2025', url: 'https://arxiv.org/abs/2410.02644' },
          { title: 'SafeAgentBench: A Benchmark for Safe Task Planning of Embodied LLM Agents', authors: 'Yin et al.', venue: 'arXiv 2024', url: 'https://arxiv.org/abs/2412.13178' },
        ],
      },
      {
        name: 'Guardrails & Alignment',
        papers: [
          { title: 'TrustAgent: Towards Safe and Trustworthy LLM-based Agents', authors: 'Hua et al.', venue: 'EMNLP 2024', url: 'https://arxiv.org/abs/2402.01586' },
          { title: 'Deliberative Alignment: Reasoning Enables Safer Language Models', authors: 'Guan et al.', venue: 'arXiv 2024 (OpenAI)', url: 'https://arxiv.org/abs/2412.16339' },
          { title: 'GuardReasoner: Towards Reasoning-based LLM Safeguards', authors: 'Liu et al.', venue: 'ICLR 2025 Workshop', url: 'https://arxiv.org/abs/2501.18492' },
          { title: 'Building a Foundational Guardrail for General Agentic Systems via Synthetic Data', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2510.09781' },
          { title: 'Agentic AI Security: Threats, Defenses, Evaluation, and Open Challenges', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2510.23883' },
          { title: 'A Safety and Security Framework for Real-World Agentic Systems', authors: 'NVIDIA et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2511.21990' },
          { title: 'Security Threat Modeling for Emerging AI-Agent Protocols: MCP, A2A, Agora, and ANP', authors: 'Anbiaee et al.', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2602.11327' },
        ],
      },
    ],
  },
  {
    topic: 'AgentOps & Infrastructure',
    subtopics: [
      {
        name: 'LLM Serving & Optimization',
        papers: [
          { title: 'Efficient Memory Management for Large Language Model Serving with PagedAttention (vLLM)', authors: 'Kwon et al.', venue: 'ACM SOSP 2023', url: 'https://arxiv.org/abs/2309.06180' },
          { title: 'FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness', authors: 'Dao et al.', venue: 'NeurIPS 2022', url: 'https://arxiv.org/abs/2205.14135' },
          { title: 'Fast Inference from Transformers via Speculative Decoding', authors: 'Leviathan et al.', venue: 'ICML 2023', url: 'https://arxiv.org/abs/2211.17192' },
          { title: 'SGLang: Efficient Execution of Structured Language Model Programs', authors: 'Zheng et al.', venue: 'NeurIPS 2024', url: 'https://arxiv.org/abs/2312.07104' },
          { title: 'DistServe: Disaggregating Prefill and Decoding for Goodput-optimized LLM Serving', authors: 'Zhong et al.', venue: 'OSDI 2024', url: 'https://arxiv.org/abs/2401.09670' },
        ],
      },
      {
        name: 'Observability & Operations',
        papers: [
          { title: 'AgentOps: Enabling Observability of LLM Agents', authors: 'Zhu et al.', venue: 'arXiv 2024', url: 'https://arxiv.org/abs/2411.05285' },
          { title: 'A Survey on AgentOps: Categorization, Challenges, and Future Directions', authors: 'Wang et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2508.02121' },
          { title: 'Architecting AgentOps Needs CHANGE', authors: 'Biswas et al.', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2601.06456' },
          { title: 'The 2025 AI Agent Index', authors: 'Staufer et al.', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2602.17753' },
          { title: 'AIOS: LLM Agent Operating System', authors: 'Mei et al.', venue: 'COLM 2025', url: 'https://arxiv.org/abs/2403.16971' },
          { title: 'A Practical Guide for Production-Grade Agentic AI Workflows', authors: 'Bandara et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2512.08769' },
        ],
      },
      {
        name: 'Governance & Policy',
        papers: [
          { title: 'Practices for Governing Agentic AI Systems', authors: 'Shavit et al.', venue: 'OpenAI White Paper, 2023', url: 'https://cdn.openai.com/papers/practices-for-governing-agentic-ai-systems.pdf' },
          { title: 'Governing AI Agents', authors: 'Kolt, N.', venue: 'Notre Dame Law Review, 2025', url: 'https://arxiv.org/abs/2501.07913' },
        ],
      },
    ],
  },
  {
    topic: 'Code-Generation Agents',
    subtopics: [
      {
        name: 'Code LLMs & Foundations',
        papers: [
          { title: 'Evaluating Large Language Models Trained on Code (Codex)', authors: 'Chen et al.', venue: 'arXiv 2021', url: 'https://arxiv.org/abs/2107.03374' },
          { title: 'Competition-Level Code Generation with AlphaCode', authors: 'Li et al.', venue: 'Science 2022', url: 'https://arxiv.org/abs/2203.07814' },
          { title: 'StarCoder: May the Source Be With You!', authors: 'Li et al.', venue: 'TMLR 2023', url: 'https://arxiv.org/abs/2305.06161' },
          { title: 'CodeGen: An Open Large Language Model for Code with Multi-Turn Program Synthesis', authors: 'Nijkamp et al.', venue: 'ICLR 2023', url: 'https://arxiv.org/abs/2203.13474' },
        ],
      },
      {
        name: 'Software Engineering Agents',
        papers: [
          { title: 'SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering', authors: 'Yang et al.', venue: 'NeurIPS 2024', url: 'https://arxiv.org/abs/2405.15793' },
          { title: 'Executable Code Actions Elicit Better LLM Agents (CodeAct)', authors: 'Wang et al.', venue: 'ICML 2024', url: 'https://arxiv.org/abs/2402.01030' },
          { title: 'OpenHands: An Open Platform for AI Software Developers as Generalist Agents', authors: 'Wang et al.', venue: 'ICLR 2025', url: 'https://arxiv.org/abs/2407.16741' },
          { title: 'The OpenHands Software Agent SDK', authors: 'Wang et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2511.03690' },
          { title: 'Live-SWE-agent: Can Software Engineering Agents Self-Evolve on the Fly?', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2511.13646' },
        ],
      },
      {
        name: 'Benchmarks & Evolution',
        papers: [
          { title: 'SWE-bench: Can Language Models Resolve Real-World GitHub Issues?', authors: 'Jimenez et al.', venue: 'ICLR 2024 Oral', url: 'https://arxiv.org/abs/2310.06770' },
          { title: 'SWE-Bench Pro: Can AI Agents Solve Long-Horizon Software Engineering Tasks?', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2509.16941' },
          { title: 'SWE-rebench: Automated Pipeline for Task Collection and Decontaminated Evaluation', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2505.20411' },
          { title: 'The Rise of AI Teammates in Software Engineering 3.0', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2507.15003' },
          { title: 'AIDev: Studying AI Coding Agents on GitHub', authors: 'Various', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2602.09185' },
        ],
      },
    ],
  },
  {
    topic: 'Desktop & Web Agents',
    subtopics: [
      {
        name: 'Web Agent Environments',
        papers: [
          { title: 'WebArena: A Realistic Web Environment for Building Autonomous Agents', authors: 'Zhou et al.', venue: 'ICLR 2024', url: 'https://arxiv.org/abs/2307.13854' },
          { title: 'VisualWebArena: Evaluating Multimodal Agents on Realistic Visual Web Tasks', authors: 'Koh et al.', venue: 'ACL 2024', url: 'https://arxiv.org/abs/2401.13649' },
          { title: 'Mind2Web: Towards a Generalist Agent for the Web', authors: 'Deng et al.', venue: 'NeurIPS 2023 Spotlight', url: 'https://arxiv.org/abs/2306.06070' },
          { title: 'WebVoyager: Building an End-to-End Web Agent with Large Multimodal Models', authors: 'He et al.', venue: 'ACL 2024', url: 'https://arxiv.org/abs/2401.13919' },
          { title: 'The BrowserGym Ecosystem for Web Agent Research', authors: 'Le Sellier De Chezelles et al.', venue: 'arXiv 2024', url: 'https://arxiv.org/abs/2412.05467' },
        ],
      },
      {
        name: 'GUI Understanding & Grounding',
        papers: [
          { title: 'CogAgent: A Visual Language Model for GUI Agents', authors: 'Hong et al.', venue: 'CVPR 2024', url: 'https://arxiv.org/abs/2312.08914' },
          { title: 'Set-of-Mark Prompting Unleashes Extraordinary Visual Grounding in GPT-4V', authors: 'Yang et al.', venue: 'arXiv 2023', url: 'https://arxiv.org/abs/2310.11441' },
          { title: 'SeeClick: Harnessing GUI Grounding for Advanced Visual GUI Agents', authors: 'Cheng et al.', venue: 'ACL 2024', url: 'https://arxiv.org/abs/2401.10935' },
          { title: 'GPT-4V(ision) is a Generalist Web Agent, if Grounded', authors: 'Zheng et al.', venue: 'ICML 2024', url: 'https://arxiv.org/abs/2401.01614' },
          { title: 'UI-TARS-2: Advancing GUI Agent with Multi-Turn Reinforcement Learning', authors: 'Wang et al.', venue: 'arXiv 2025 (ByteDance)', url: 'https://arxiv.org/abs/2509.02544' },
        ],
      },
      {
        name: 'Agent Training & Evaluation',
        papers: [
          { title: 'OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments', authors: 'Xie et al.', venue: 'NeurIPS 2024', url: 'https://arxiv.org/abs/2404.07972' },
          { title: 'TheAgentCompany: Benchmarking LLM Agents on Consequential Real World Tasks', authors: 'Xu et al.', venue: 'NeurIPS 2025', url: 'https://arxiv.org/abs/2412.14161' },
          { title: 'PC Agent-E: Efficient Agent Training for Computer Use', authors: 'He et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2505.13909' },
          { title: 'GUI Agents: A Survey', authors: 'Nguyen et al.', venue: 'Findings of ACL 2025', url: 'https://arxiv.org/abs/2412.13501' },
          { title: 'Towards Trustworthy GUI Agents: A Survey', authors: 'Shi et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2503.23434' },
        ],
      },
    ],
  },
  {
    topic: 'Embodied Agents',
    subtopics: [
      {
        name: 'Language-Guided Robotics',
        papers: [
          { title: 'Do As I Can, Not As I Say: Grounding Language in Robotic Affordances (SayCan)', authors: 'Ahn et al.', venue: 'CoRL 2022', url: 'https://arxiv.org/abs/2204.01691' },
          { title: 'Inner Monologue: Embodied Reasoning through Planning with Language Models', authors: 'Huang et al.', venue: 'CoRL 2022', url: 'https://arxiv.org/abs/2207.05608' },
          { title: 'Code as Policies: Language Model Programs for Embodied Control', authors: 'Liang et al.', venue: 'ICRA 2023', url: 'https://arxiv.org/abs/2209.07753' },
          { title: 'Voyager: An Open-Ended Embodied Agent with Large Language Models', authors: 'Wang et al.', venue: 'arXiv 2023', url: 'https://arxiv.org/abs/2305.16291' },
          { title: 'DEPS: Interactive Planning with LLMs Enables Open-World Multi-Task Agents', authors: 'Wang et al.', venue: 'NeurIPS 2023', url: 'https://arxiv.org/abs/2302.01560' },
          { title: 'PaLM-E: An Embodied Multimodal Language Model', authors: 'Driess et al.', venue: 'ICML 2023', url: 'https://arxiv.org/abs/2303.03378' },
        ],
      },
      {
        name: 'Vision-Language-Action Models',
        papers: [
          { title: 'RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control', authors: 'Brohan et al.', venue: 'CoRL 2023', url: 'https://arxiv.org/abs/2307.15818' },
          { title: 'π₀: A Vision-Language-Action Flow Model for General Robot Control', authors: 'Black et al.', venue: 'arXiv 2024 (Physical Intelligence)', url: 'https://arxiv.org/abs/2410.24164' },
          { title: 'π₀.5: A Vision-Language-Action Model with Open-World Generalization', authors: 'Physical Intelligence', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2504.16054' },
          { title: 'OpenVLA: An Open-Source Vision-Language-Action Model', authors: 'Kim et al.', venue: 'CoRL 2024', url: 'https://arxiv.org/abs/2406.09246' },
          { title: 'A Survey on Vision-Language-Action Models for Embodied AI', authors: 'Ma et al.', venue: 'arXiv 2024', url: 'https://arxiv.org/abs/2405.14093' },
        ],
      },
      {
        name: 'Generalist Robot Policies',
        papers: [
          { title: 'Open X-Embodiment: Robotic Learning Datasets and RT-X Models', authors: 'Open X-Embodiment Collaboration', venue: 'ICRA 2024', url: 'https://arxiv.org/abs/2310.08864' },
          { title: 'Diffusion Policy: Visuomotor Policy Learning via Action Diffusion', authors: 'Chi et al.', venue: 'RSS 2023', url: 'https://arxiv.org/abs/2303.04137' },
          { title: 'Octo: An Open-Source Generalist Robot Policy', authors: 'Ghosh et al.', venue: 'RSS 2024', url: 'https://arxiv.org/abs/2405.12213' },
          { title: 'Towards Embodied Agentic AI: LLM- and VLM-Driven Robot Autonomy', authors: 'Salimpour et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2508.05294' },
        ],
      },
    ],
  },
  {
    topic: 'Social & Empathetic Agents',
    subtopics: [
      {
        name: 'Social Simulation',
        papers: [
          { title: 'Generative Agents: Interactive Simulacra of Human Behavior', authors: 'Park et al.', venue: 'UIST 2023', url: 'https://arxiv.org/abs/2304.03442' },
          { title: 'Social Simulacra: Creating Populated Prototypes for Social Computing Systems', authors: 'Park et al.', venue: 'UIST 2022', url: 'https://arxiv.org/abs/2208.04024' },
          { title: 'Using Large Language Models to Simulate Multiple Humans and Replicate Human Subject Studies', authors: 'Aher et al.', venue: 'ICML 2023', url: 'https://arxiv.org/abs/2208.10264' },
          { title: 'AgentSociety: Large-Scale Simulation of LLM-Driven Generative Agents', authors: 'Piao et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2502.08691' },
          { title: 'LLM Agents That Act Like Us: Accurate Human Behavior Simulation with Real-World Data', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2503.20749' },
        ],
      },
      {
        name: 'Social Intelligence Evaluation',
        papers: [
          { title: 'SOTOPIA: Interactive Evaluation for Social Intelligence in Language Agents', authors: 'Zhou et al.', venue: 'ICLR 2024', url: 'https://arxiv.org/abs/2310.11667' },
          { title: 'SOTOPIA-π: Interactive Learning of Socially Intelligent Language Agents', authors: 'Wang et al.', venue: 'ACL 2024', url: 'https://arxiv.org/abs/2403.08715' },
          { title: 'Sotopia-RL: Reward Design for Social Intelligence', authors: 'Yu et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2508.03905' },
          { title: 'Population-Aligned Persona Generation for LLM-based Social Simulation', authors: 'Hu et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2509.10127' },
          { title: 'SCOPE: Socially-Grounded Persona Framework for User Simulation', authors: 'Various', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2601.07110' },
        ],
      },
      {
        name: 'Persona & Empathy Design',
        papers: [
          { title: 'Towards Empathetic Open-domain Conversation Models: A New Benchmark and Dataset', authors: 'Rashkin et al.', venue: 'ACL 2019', url: 'https://arxiv.org/abs/1811.00207' },
          { title: 'Theory of Mind Might Have Spontaneously Emerged in Large Language Models', authors: 'Kosinski', venue: 'PNAS 2024', url: 'https://arxiv.org/abs/2302.02083' },
          { title: 'Character-LLM: A Trainable Agent for Role-Playing', authors: 'Shao et al.', venue: 'arXiv 2023', url: 'https://arxiv.org/abs/2310.10158' },
          { title: 'Systematizing LLM Persona Design for AI Companion Applications', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2511.02979' },
          { title: 'Infusing Theory of Mind into Socially Intelligent LLM Agents', authors: 'Hwang et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2509.22887' },
        ],
      },
    ],
  },
]
