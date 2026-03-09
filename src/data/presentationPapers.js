// Presentation papers: 2025-2026 only. Students choose one subtopic to present.
export const presentationPapers = [
  {
    topic: 'Introduction to Agentic AI',
    subtopics: [
      {
        name: 'Surveys & Taxonomies',
        papers: [
          { title: 'Agentic AI: A Comprehensive Survey of Architectures, Applications, and Future Directions', authors: 'Abou Ali et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2510.25445' },
          { title: 'AI Agent Systems: Architectures, Applications, and Evaluation', authors: 'Xu, B.', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2601.01743' },
          { title: 'Agentic AI: Architectures, Taxonomies, and Evaluation of LLM Agents', authors: 'Arunkumar et al.', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2601.12560' },
          { title: 'Agentic Reasoning for Large Language Models', authors: 'Wei et al.', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2601.12538' },
          { title: 'A Comprehensive Survey of Self-Evolving AI Agents', authors: 'Fang et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2508.07407' },
        ],
      },
      {
        name: 'Cognitive Foundations',
        papers: [
          { title: 'Applying Cognitive Design Patterns to General LLM Agents', authors: 'Wray et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2505.07087' },
          { title: 'A Lightweight Modular Framework for Constructing Autonomous Agents (AgentForge)', authors: 'Various', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2601.13383' },
          { title: 'A-MEM: Agentic Memory for LLM Agents', authors: 'Xu et al.', venue: 'NeurIPS 2025', url: 'https://arxiv.org/abs/2502.12110' },
          { title: 'The Auton Agentic AI Framework', authors: 'Cao et al.', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2602.23720' },
          { title: 'Generative to Agentic AI: Survey, Conceptualization, and Challenges', authors: 'Schneider', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2504.18875' },
        ],
      },
      {
        name: 'Trends & Scaling',
        papers: [
          { title: 'Towards a Science of Scaling Agent Systems', authors: 'Kim et al.', venue: 'arXiv 2025 (Google Research)', url: 'https://arxiv.org/abs/2512.08296' },
          { title: 'The 2025 AI Agent Index', authors: 'Staufer et al.', venue: 'arXiv 2026 (MIT)', url: 'https://arxiv.org/abs/2602.17753' },
          { title: 'Agents Are Not Enough', authors: 'Shah & White', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2412.16241' },
          { title: 'Measuring Agents in Production', authors: 'Pan et al.', venue: 'arXiv 2025 (UC Berkeley)', url: 'https://arxiv.org/abs/2512.04123' },
          { title: 'Agent AI: Surveying the Horizons of Multimodal Interaction', authors: 'Durante et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2401.03568' },
        ],
      },
    ],
  },
  {
    topic: 'Agentic Architecture Patterns',
    subtopics: [
      {
        name: 'Chain-of-Thought & Reasoning',
        papers: [
          { title: 'Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters', authors: 'Snell et al.', venue: 'ICML 2025', url: 'https://arxiv.org/abs/2408.03314' },
          { title: 'Expanding Reasoning Potential by Learning Diverse CoT Patterns', authors: 'Zhang et al.', venue: 'ICLR 2026', url: 'https://arxiv.org/abs/2509.21124' },
          { title: 's1: Simple Test-Time Scaling', authors: 'Muennighoff et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2501.19393' },
          { title: 'Scaling up Test-Time Compute with Latent Reasoning: A Recurrent Depth Approach', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2502.05171' },
          { title: 'Inference Scaling Laws: Compute-Optimal Inference for Problem-Solving with Language Models', authors: 'Various', venue: 'ICLR 2025', url: 'https://arxiv.org/abs/2408.00724' },
          { title: 'Training LLMs to Reason in a Continuous Latent Space (Coconut)', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2412.06769' },
        ],
      },
      {
        name: 'Search & Planning',
        papers: [
          { title: 'Tree Search for LLM Agent Reinforcement Learning (Tree-GRPO)', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2509.21240' },
          { title: 'Plan-and-Act: Improving Planning of Agents for Long-Horizon Tasks', authors: 'Erdogan et al.', venue: 'ICML 2025', url: 'https://arxiv.org/abs/2503.09572' },
          { title: 'Cost-Awareness in Tree-Search LLM Planning: A Systematic Study', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2505.14656' },
          { title: 'Inference-Time Computations for LLM Reasoning and Planning: A Benchmark', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2502.12521' },
          { title: 'Search-R1: Training LLMs to Reason and Leverage Search Engines with RL', authors: 'Jin et al.', venue: 'COLM 2025', url: 'https://arxiv.org/abs/2503.09516' },
        ],
      },
      {
        name: 'Grounded Acting & ReAct',
        papers: [
          { title: 'Towards a Science of Scaling Agent Systems', authors: 'Kim et al.', venue: 'arXiv 2025 (Google Research)', url: 'https://arxiv.org/abs/2512.08296' },
          { title: 'Pre-Act: Multi-Step Planning and Reasoning Improves Acting in LLM Agents', authors: 'Rawat et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2505.09970' },
          { title: 'Grounding Computer Use Agents on Human Demonstrations (GroundCUA)', authors: 'Feizi et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2511.07332' },
          { title: 'MCPAgentBench: Evaluating LLM Agent MCP Tool Use', authors: 'Liu et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2512.24565' },
          { title: 'Agent-R1: Training Powerful LLM Agents with End-to-End Reinforcement Learning', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2511.14460' },
        ],
      },
    ],
  },
  {
    topic: 'Tools & Function Calling',
    subtopics: [
      {
        name: 'Tool Calling',
        papers: [
          { title: 'Hammer: Robust Function-Calling for On-Device LMs via Function Masking', authors: 'Lin et al.', venue: 'ICLR 2025', url: 'https://arxiv.org/abs/2410.04587' },
          { title: 'Facilitating Multi-turn Function Calling for LLMs via Compositional Instruction Tuning', authors: 'Chen et al.', venue: 'ICLR 2025', url: 'https://arxiv.org/abs/2410.12952' },
          { title: 'The Berkeley Function Calling Leaderboard (BFCL)', authors: 'Patil et al.', venue: 'ICML 2025', url: 'https://arxiv.org/abs/2409.18157' },
          { title: 'LLM Agents Making Agent Tools (ToolMaker)', authors: 'Wolflein et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2502.11705' },
          { title: 'AutoTool: Efficient Tool Selection for Large Language Model Agents', authors: 'Jia et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2511.14650' },
        ],
      },
      {
        name: 'Tool Creation & Discovery',
        papers: [
          { title: 'LLM Agents Making Agent Tools (ToolMaker)', authors: 'Wolflein et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2502.11705' },
          { title: 'AutoTool: Efficient Tool Selection for Large Language Model Agents', authors: 'Jia et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2511.14650' },
          { title: 'MCP-Zero: Active Tool Discovery for Autonomous LLM Agents', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2506.01056' },
          { title: 'RAG-MCP: Mitigating Prompt Bloat in LLM Tool Selection via RAG', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2505.03275' },
          { title: 'Help or Hurdle? Rethinking MCP-Augmented Large Language Models', authors: 'Song et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2508.12566' },
        ],
      },
      {
        name: 'Model Context Protocol (MCP)',
        papers: [
          { title: 'MCPAgentBench: Evaluating LLM Agent MCP Tool Use', authors: 'Liu et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2512.24565' },
          { title: 'Enhancing MCP with Context-Aware Server Collaboration', authors: 'Jayanti et al.', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2601.11595' },
          { title: 'ScaleMCP: Dynamic and Auto-Synchronizing MCP Tools for LLM Agents', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2505.06416' },
          { title: 'MCP-Zero: Active Tool Discovery for Autonomous LLM Agents', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2506.01056' },
          { title: 'MCP-Bench: Benchmarking Tool-Using LLM Agents with Complex Real-World Tasks', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2508.20453' },
          { title: 'Help or Hurdle? Rethinking MCP-Augmented Large Language Models', authors: 'Song et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2508.12566' },
          { title: 'RAG-MCP: Mitigating Prompt Bloat in LLM Tool Selection via RAG', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2505.03275' },
        ],
      },
    ],
  },
  {
    topic: 'Memory & RAG',
    subtopics: [
      {
        name: 'Working Memory',
        papers: [
          { title: 'A Survey on the Memory Mechanism of LLM-based Agents', authors: 'Zhang et al.', venue: 'ACM TOIS 2025', url: 'https://arxiv.org/abs/2404.13501' },
          { title: 'Agentic Memory: Unified Long-Term and Short-Term Memory Management', authors: 'Various', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2601.01885' },
          { title: 'Memory-R1: Enhancing LLM Agents to Manage Memories via RL', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2508.19828' },
          { title: 'A-MEM: Agentic Memory for LLM Agents', authors: 'Xu et al.', venue: 'NeurIPS 2025', url: 'https://arxiv.org/abs/2502.12110' },
          { title: 'Memory in the Age of AI Agents: A Survey', authors: 'Hu et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2512.13564' },
        ],
      },
      {
        name: 'Long-term Memory',
        papers: [
          { title: 'A-MEM: Agentic Memory for LLM Agents', authors: 'Xu et al.', venue: 'NeurIPS 2025', url: 'https://arxiv.org/abs/2502.12110' },
          { title: 'Memory in the Age of AI Agents: A Survey', authors: 'Hu et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2512.13564' },
          { title: 'Position: Episodic Memory is the Missing Piece for Long-Term LLM Agents', authors: 'Pink et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2502.06975' },
          { title: 'Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory', authors: 'Chhikara et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2504.19413' },
          { title: 'Memory-R1: Enhancing LLM Agents to Manage Memories via RL', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2508.19828' },
        ],
      },
      {
        name: 'Agentic RAG',
        papers: [
          { title: 'Agentic RAG: A Survey on Agentic Retrieval-Augmented Generation', authors: 'Singh et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2501.09136' },
          { title: 'Search-R1: Training LLMs to Reason and Leverage Search Engines with RL', authors: 'Jin et al.', venue: 'COLM 2025', url: 'https://arxiv.org/abs/2503.09516' },
          { title: 'RAG-RL: Advancing RAG via RL and Curriculum Learning', authors: 'Huang et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2503.12759' },
          { title: 'A-RAG: Scaling Agentic RAG via Hierarchical Retrieval Interfaces', authors: 'Du et al.', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2602.03442' },
          { title: 'MA-RAG: Multi-Agent RAG via Collaborative Chain-of-Thought Reasoning', authors: 'Nguyen et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2505.20096' },
          { title: 'Reasoning RAG via System 1 or System 2: A Survey on Reasoning Agentic RAG', authors: 'Liang et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2506.10408' },
        ],
      },
    ],
  },
  {
    topic: 'Multi-Agent Systems',
    subtopics: [
      {
        name: 'Coordination & Frameworks',
        papers: [
          { title: 'Scaling Large Language Model-based Multi-Agent Collaboration', authors: 'Qian et al.', venue: 'ICLR 2025', url: 'https://arxiv.org/abs/2406.07155' },
          { title: 'Multi-Agent Collaboration via Evolving Orchestration', authors: 'Dang et al.', venue: 'NeurIPS 2025', url: 'https://arxiv.org/abs/2505.19591' },
          { title: 'AutoML-Agent: A Multi-Agent LLM Framework for Full-Pipeline AutoML', authors: 'Trirat et al.', venue: 'ICML 2025', url: 'https://arxiv.org/abs/2410.02958' },
          { title: 'Multi-Agent Collaboration Mechanisms: A Survey of LLMs', authors: 'Tran et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2501.06322' },
          { title: 'Adaptive, Scalable, and Robust Coordination of LLM Agents (RAPS)', authors: 'Li et al.', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2602.08009' },
        ],
      },
      {
        name: 'Debate & Argumentation',
        papers: [
          { title: 'Multiagent Finetuning: Self Improvement with Diverse Reasoning Chains', authors: 'Subramaniam et al.', venue: 'ICLR 2025', url: 'https://arxiv.org/abs/2501.05707' },
          { title: 'Multi-Agent Collaboration Mechanisms: A Survey of LLMs', authors: 'Tran et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2501.06322' },
          { title: 'Thought Communication in Multiagent Collaboration', authors: 'Zheng et al.', venue: 'NeurIPS 2025 Spotlight', url: 'https://arxiv.org/abs/2510.20733' },
          { title: 'Emergent Social Conventions and Collective Bias in LLM Populations', authors: 'Ashery et al.', venue: 'Science Advances 2025', url: 'https://arxiv.org/abs/2410.08948' },
          { title: 'MAEBE: Multi-Agent Emergent Behavior Framework', authors: 'Erisken et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2506.03053' },
        ],
      },
      {
        name: 'Emergent Behavior',
        papers: [
          { title: 'Towards a Science of Scaling Agent Systems', authors: 'Kim et al.', venue: 'arXiv 2025 (Google Research)', url: 'https://arxiv.org/abs/2512.08296' },
          { title: 'CoMAS: Co-Evolving Multi-Agent Systems via Interaction Rewards', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2510.08529' },
          { title: 'Emergent Social Conventions and Collective Bias in LLM Populations', authors: 'Ashery et al.', venue: 'Science Advances 2025', url: 'https://arxiv.org/abs/2410.08948' },
          { title: 'AgentSociety: Large-Scale Simulation of LLM-Driven Generative Agents', authors: 'Piao et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2502.08691' },
          { title: 'Emergent Coordination in Multi-Agent Language Models', authors: 'Riedl', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2510.05174' },
        ],
      },
    ],
  },
  {
    topic: 'Agentic AI Frameworks',
    subtopics: [
      {
        name: 'Development Frameworks',
        papers: [
          { title: 'OpenHands: An Open Platform for AI Software Developers as Generalist Agents', authors: 'Wang et al.', venue: 'ICLR 2025', url: 'https://arxiv.org/abs/2407.16741' },
          { title: 'The OpenHands Software Agent SDK', authors: 'Wang et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2511.03690' },
          { title: 'The Auton Agentic AI Framework', authors: 'Cao et al.', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2602.23720' },
          { title: 'Sibyl: Simple yet Effective Agent Framework for Complex Real-World Reasoning', authors: 'Wang et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2502.09382' },
          { title: 'AIOS: LLM Agent Operating System', authors: 'Mei et al.', venue: 'COLM 2025', url: 'https://arxiv.org/abs/2403.16971' },
        ],
      },
      {
        name: 'Communication Protocols',
        papers: [
          { title: 'A Survey of AI Agent Protocols', authors: 'Yang et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2504.16736' },
          { title: 'A Survey of Agent Interoperability Protocols: MCP, ACP, A2A, and ANP', authors: 'Ehtesham et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2505.02279' },
          { title: 'Building A Secure Agentic AI Application Leveraging A2A Protocol', authors: 'Habler et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2504.16902' },
          { title: 'MCP Safety Audit: LLMs with the Model Context Protocol Allow Major Security Exploits', authors: 'Radosevich et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2504.03767' },
          { title: 'Security Threat Modeling for Emerging AI-Agent Protocols', authors: 'Anbiaee et al.', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2602.11327' },
        ],
      },
      {
        name: 'Production Deployment',
        papers: [
          { title: 'Agentic AI Frameworks: Architectures, Protocols, and Design Challenges', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2508.10146' },
          { title: 'A Practical Guide for Production-Grade Agentic AI Workflows', authors: 'Bandara et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2512.08769' },
          { title: 'Measuring Agents in Production', authors: 'Pan et al.', venue: 'arXiv 2025 (UC Berkeley)', url: 'https://arxiv.org/abs/2512.04123' },
          { title: 'Compound AI Systems Optimization: Methods, Challenges, and Future Directions', authors: 'Lee et al.', venue: 'EMNLP 2025', url: 'https://arxiv.org/abs/2506.08234' },
          { title: 'Towards Resource-Efficient Compound AI Systems', authors: 'Various', venue: 'HotOS 2025', url: 'https://arxiv.org/abs/2501.16634' },
        ],
      },
    ],
  },
  {
    topic: 'Self-Improvement',
    subtopics: [
      {
        name: 'Self-Reflection & Self-Correction',
        papers: [
          { title: 'When Can LLMs Actually Correct Their Own Mistakes? A Critical Survey', authors: 'Kamoi et al.', venue: 'TMLR 2025', url: 'https://arxiv.org/abs/2406.01297' },
          { title: 'Decomposing LLM Self-Correction: The Accuracy-Correction Paradox', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2601.00828' },
          { title: 'Evolving LLMs\' Self-Refinement via Synergistic Training-Inference Optimization (EVOLVE)', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2502.05605' },
          { title: 'Self-Correction Bench: Uncovering the Self-Correction Blind Spot in LLMs', authors: 'Tsui et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2507.02778' },
          { title: 'Enhancing Self-Correction through Multi-Perspective Reflection (PR-CoT)', authors: 'Various', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2601.07780' },
        ],
      },
      {
        name: 'Self-Training & Learning from Feedback',
        papers: [
          { title: 'DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via RL', authors: 'DeepSeek-AI', venue: 'arXiv 2025 / Nature 2025', url: 'https://arxiv.org/abs/2501.12948' },
          { title: 'Process Reward Models for LLM Agents (AgentPRM)', authors: 'Choudhury', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2502.10325' },
          { title: 'Agent-R1: Training Powerful LLM Agents with End-to-End RL', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2511.14460' },
          { title: 'Post-Training LLMs via Reinforcement Learning from Self-Feedback (RLSF)', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2507.21931' },
          { title: 'RLAR: An Agentic Reward System for Multi-task RL on LLMs', authors: 'Various', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2603.00724' },
        ],
      },
      {
        name: 'Self-Evolution & Continuous Improvement',
        papers: [
          { title: 'A Comprehensive Survey of Self-Evolving AI Agents', authors: 'Fang et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2508.07407' },
          { title: 'Multiagent Finetuning: Self Improvement with Diverse Reasoning Chains', authors: 'Subramaniam et al.', venue: 'ICLR 2025', url: 'https://arxiv.org/abs/2501.05707' },
          { title: 'Absolute Zero: Reinforced Self-play Reasoning with Zero Data', authors: 'Zhao et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2505.03335' },
          { title: 'Agent-as-a-Judge: Evaluate Agents with Agents', authors: 'Zhuge et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2410.10934' },
          { title: 'DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via RL', authors: 'DeepSeek-AI', venue: 'arXiv 2025 / Nature 2025', url: 'https://arxiv.org/abs/2501.12948' },
        ],
      },
    ],
  },
  {
    topic: 'Performance Evaluation & Verification',
    subtopics: [
      {
        name: 'Agent Benchmarks',
        papers: [
          { title: 'TheAgentCompany: Benchmarking LLM Agents on Consequential Real World Tasks', authors: 'Xu et al.', venue: 'NeurIPS 2025', url: 'https://arxiv.org/abs/2412.14161' },
          { title: 'Gaia2: Benchmarking LLM Agents on Dynamic and Asynchronous Environments', authors: 'Froger et al.', venue: 'ICLR 2026 Oral', url: 'https://arxiv.org/abs/2602.11964' },
          { title: 'AgentArch: A Comprehensive Benchmark to Evaluate Agent Architectures in Enterprise', authors: 'Bogavelli et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2509.10769' },
          { title: 'CORE-Bench: Fostering Credibility Through Computational Reproducibility Agent Benchmark', authors: 'Siegel et al.', venue: 'NeurIPS 2025', url: 'https://arxiv.org/abs/2409.11363' },
          { title: 'Beyond Accuracy: CLEAR Framework for Evaluating Enterprise Agentic AI', authors: 'Mehta', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2511.14136' },
        ],
      },
      {
        name: 'Verifiability & Reproducibility',
        papers: [
          { title: 'CORE-Bench: Fostering Credibility Through Computational Reproducibility Agent Benchmark', authors: 'Siegel et al.', venue: 'NeurIPS 2025', url: 'https://arxiv.org/abs/2409.11363' },
          { title: 'When Does Verification Pay Off? A Closer Look at LLMs as Solution Verifiers', authors: 'Lu et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2512.02304' },
          { title: 'Bridging LLM Planning Agents and Formal Methods: Plan Verification', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2510.03469' },
          { title: 'Reliable Weak-to-Strong Monitoring of LLM Agents', authors: 'Kale et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2508.19461' },
          { title: 'Process Reward Models for LLM Agents (AgentPRM)', authors: 'Choudhury', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2502.10325' },
        ],
      },
      {
        name: 'AgentOps & Observability',
        papers: [
          { title: 'A Survey on AgentOps: Categorization, Challenges, and Future Directions', authors: 'Wang et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2508.02121' },
          { title: 'Architecting AgentOps Needs CHANGE', authors: 'Biswas et al.', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2601.06456' },
          { title: 'The 2025 AI Agent Index', authors: 'Staufer et al.', venue: 'arXiv 2026 (MIT)', url: 'https://arxiv.org/abs/2602.17753' },
          { title: 'MI9 -- Agent Intelligence Protocol: Runtime Governance for Agentic AI', authors: 'Wang et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2508.03858' },
          { title: 'Measuring Agents in Production', authors: 'Pan et al.', venue: 'arXiv 2025 (UC Berkeley)', url: 'https://arxiv.org/abs/2512.04123' },
        ],
      },
    ],
  },
  {
    topic: 'Safety & Security',
    subtopics: [
      {
        name: 'Adversarial Attacks',
        papers: [
          { title: 'WASP: Benchmarking Web Agent Security Against Prompt Injection Attacks', authors: 'Evtimov et al.', venue: 'arXiv 2025 (Meta)', url: 'https://arxiv.org/abs/2504.18575' },
          { title: 'The Attacker Moves Second: Stronger Adaptive Attacks Bypass Defenses', authors: 'Nasr et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2510.09023' },
          { title: 'ToolHijacker: Prompt Injection Attack to Tool Selection in LLM Agents', authors: 'Shi et al.', venue: 'NDSS 2026', url: 'https://arxiv.org/abs/2504.19793' },
          { title: 'MCP Safety Audit: LLMs with the Model Context Protocol Allow Major Security Exploits', authors: 'Radosevich et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2504.03767' },
          { title: 'Agentic AI Security: Threats, Defenses, Evaluation, and Open Challenges', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2510.23883' },
        ],
      },
      {
        name: 'Guardrails & Alignment',
        papers: [
          { title: 'GuardReasoner: Towards Reasoning-based LLM Safeguards', authors: 'Liu et al.', venue: 'ICLR 2025 Workshop', url: 'https://arxiv.org/abs/2501.18492' },
          { title: 'R2-Guard: Robust Reasoning Enabled LLM Guardrail via Knowledge-Enhanced Logical Reasoning', authors: 'Kang and Li', venue: 'ICLR 2025 Spotlight', url: 'https://arxiv.org/abs/2407.05557' },
          { title: 'Building a Foundational Guardrail for General Agentic Systems via Synthetic Data', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2510.09781' },
          { title: 'Agentic AI Security: Threats, Defenses, Evaluation, and Open Challenges', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2510.23883' },
          { title: 'Deliberative Alignment: Reasoning Enables Safer Language Models', authors: 'Guan et al.', venue: 'arXiv 2025 (OpenAI)', url: 'https://arxiv.org/abs/2412.16339' },
        ],
      },
      {
        name: 'Governance & Responsible Deployment',
        papers: [
          { title: 'Governing AI Agents', authors: 'Kolt, N.', venue: 'Notre Dame Law Review, 2025', url: 'https://arxiv.org/abs/2501.07913' },
          { title: 'On the Regulatory Potential of User Interfaces for AI Agent Governance', authors: 'Feng et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2512.00742' },
          { title: 'Governance-as-a-Service: A Multi-Agent Framework for AI System Compliance', authors: 'Pervez et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2508.18765' },
          { title: 'Security Threat Modeling for Emerging AI-Agent Protocols', authors: 'Anbiaee et al.', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2602.11327' },
          { title: 'The 2025 AI Agent Index', authors: 'Staufer et al.', venue: 'arXiv 2026 (MIT)', url: 'https://arxiv.org/abs/2602.17753' },
        ],
      },
    ],
  },
  {
    topic: 'Efficiency & Agentic AI Systems',
    subtopics: [
      {
        name: 'Agentic AI Systems',
        papers: [
          { title: 'AIOS: LLM Agent Operating System', authors: 'Mei et al.', venue: 'COLM 2025', url: 'https://arxiv.org/abs/2403.16971' },
          { title: 'OS-Copilot: Towards Generalist Computer Agents with Self-Improvement', authors: 'Wu et al.', venue: 'ICLR 2025', url: 'https://arxiv.org/abs/2402.07456' },
          { title: 'Sibyl: Simple yet Effective Agent Framework for Complex Real-World Reasoning', authors: 'Wang et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2502.09382' },
          { title: 'HALO: Hierarchical Autonomous Logic-Oriented Orchestration for Multi-Agent LLM Systems', authors: 'Hou et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2505.13516' },
          { title: 'AgentInfer: Towards Efficient Agents via Co-Design of Inference Architecture and System', authors: 'Lin et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2512.18337' },
        ],
      },
      {
        name: 'LLM Serving & Inference',
        papers: [
          { title: 'FlashInfer: Efficient and Customizable Attention Engine for LLM Inference Serving', authors: 'Ye et al.', venue: 'MLSys 2025 Best Paper', url: 'https://arxiv.org/abs/2501.01005' },
          { title: 'Mooncake: A KVCache-centric Disaggregated Architecture for LLM Serving', authors: 'Qin et al.', venue: 'FAST 2025 Best Paper', url: 'https://arxiv.org/abs/2407.00079' },
          { title: 'ChunkKV: Semantic-Preserving KV Cache Compression for Long-Context LLM Inference', authors: 'Gao et al.', venue: 'NeurIPS 2025', url: 'https://arxiv.org/abs/2502.00299' },
          { title: 'Online Scheduling for LLM Inference with KV Cache Constraints', authors: 'Gao et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2502.07115' },
          { title: 'Speculative Decoding and Beyond: An In-Depth Survey of Techniques', authors: 'Gao et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2502.19732' },
        ],
      },
      {
        name: 'Agent Runtime & Scaling',
        papers: [
          { title: 'HALO: Hierarchical Autonomous Logic-Oriented Orchestration for Multi-Agent LLM Systems', authors: 'Hou et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2505.13516' },
          { title: 'AgentInfer: Towards Efficient Agents via Co-Design of Inference Architecture and System', authors: 'Lin et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2512.18337' },
          { title: 'A Practical Guide for Production-Grade Agentic AI Workflows', authors: 'Bandara et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2512.08769' },
          { title: 'Towards Resource-Efficient Compound AI Systems', authors: 'Various', venue: 'HotOS 2025', url: 'https://arxiv.org/abs/2501.16634' },
          { title: 'Compound AI Systems Optimization: Methods, Challenges, and Future Directions', authors: 'Lee et al.', venue: 'EMNLP 2025', url: 'https://arxiv.org/abs/2506.08234' },
        ],
      },
      {
        name: 'Cost & Latency Optimization',
        papers: [
          { title: 'Agentic Plan Caching: Test-Time Memory for Fast and Cost-Efficient LLM Agents', authors: 'Zhang et al.', venue: 'NeurIPS 2025', url: 'https://arxiv.org/abs/2506.14852' },
          { title: 'AgentDiet: Improving Efficiency of LLM Agent Systems through Trajectory Reduction', authors: 'Xiao et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2509.23586' },
          { title: 'The Cost of Dynamic Reasoning: AI Agents and Test-Time Scaling from an Infrastructure Perspective', authors: 'Kim et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2506.04301' },
          { title: 'Efficient Agents: Building Effective Agents While Reducing Cost', authors: 'Wang et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2508.02694' },
          { title: 'Beyond Accuracy: CLEAR Framework for Evaluating Enterprise Agentic AI', authors: 'Mehta', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2511.14136' },
        ],
      },
    ],
  },
  {
    topic: 'Code-Generation Agents',
    subtopics: [
      {
        name: 'Code LLMs',
        papers: [
          { title: 'Qwen2.5-Coder Technical Report', authors: 'Hui et al.', venue: 'arXiv 2025 (Alibaba)', url: 'https://arxiv.org/abs/2409.12186' },
          { title: 'DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via RL', authors: 'DeepSeek-AI', venue: 'arXiv 2025 / Nature 2025', url: 'https://arxiv.org/abs/2501.12948' },
          { title: 'SWE-RL: Advancing LLM Reasoning via RL on Open Software Evolution', authors: 'Wei et al.', venue: 'NeurIPS 2025 (Meta)', url: 'https://arxiv.org/abs/2502.18449' },
          { title: 'SWE-Compass: Towards Unified Evaluation of Agentic Coding Abilities', authors: 'Xu et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2511.05459' },
          { title: 'OpenHands: An Open Platform for AI Software Developers as Generalist Agents', authors: 'Wang et al.', venue: 'ICLR 2025', url: 'https://arxiv.org/abs/2407.16741' },
        ],
      },
      {
        name: 'SE Agents',
        papers: [
          { title: 'OpenHands: An Open Platform for AI Software Developers as Generalist Agents', authors: 'Wang et al.', venue: 'ICLR 2025', url: 'https://arxiv.org/abs/2407.16741' },
          { title: 'The OpenHands Software Agent SDK', authors: 'Wang et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2511.03690' },
          { title: 'Live-SWE-agent: Can Software Engineering Agents Self-Evolve on the Fly?', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2511.13646' },
          { title: 'Agentless: Demystifying LLM-based Software Engineering Agents', authors: 'Xia et al.', venue: 'FSE 2025', url: 'https://arxiv.org/abs/2407.01489' },
          { title: 'SWE-RL: Advancing LLM Reasoning via RL on Open Software Evolution', authors: 'Wei et al.', venue: 'NeurIPS 2025 (Meta)', url: 'https://arxiv.org/abs/2502.18449' },
        ],
      },
      {
        name: 'Benchmarks & Evaluation',
        papers: [
          { title: 'SWE-Bench Pro: Can AI Agents Solve Long-Horizon Software Engineering Tasks?', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2509.16941' },
          { title: 'SWE-rebench: Automated Pipeline for Task Collection and Decontaminated Evaluation', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2505.20411' },
          { title: 'The Rise of AI Teammates in Software Engineering 3.0', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2507.15003' },
          { title: 'AIDev: Studying AI Coding Agents on GitHub', authors: 'Various', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2602.09185' },
          { title: 'SWE-Compass: Towards Unified Evaluation of Agentic Coding Abilities', authors: 'Xu et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2511.05459' },
        ],
      },
    ],
  },
  {
    topic: 'Enterprise & Data Agents',
    subtopics: [
      {
        name: 'Text-to-SQL & Data Agents',
        papers: [
          { title: 'Spider 2.0: Evaluating Language Models on Real-World Enterprise Text-to-SQL', authors: 'Lei et al.', venue: 'ICLR 2025', url: 'https://arxiv.org/abs/2411.07763' },
          { title: 'Alpha-SQL: Zero-Shot Text-to-SQL using Monte Carlo Tree Search', authors: 'Li et al.', venue: 'ICML 2025', url: 'https://arxiv.org/abs/2502.17248' },
          { title: 'CHASE-SQL: Multi-Path Reasoning and Preference Optimized Candidate Selection', authors: 'Pourreza et al.', venue: 'ICLR 2025 (Google)', url: 'https://arxiv.org/abs/2410.01943' },
          { title: 'SWE-SQL: Illuminating LLM Pathways to Solve User SQL Issues', authors: 'Li et al.', venue: 'NeurIPS 2025', url: 'https://arxiv.org/abs/2506.18951' },
          { title: 'LLM/Agent-as-Data-Analyst: A Survey', authors: 'Tang et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2509.23988' },
        ],
      },
      {
        name: 'Enterprise Workflow Agents',
        papers: [
          { title: 'TheAgentCompany: Benchmarking LLM Agents on Consequential Real World Tasks', authors: 'Xu et al.', venue: 'NeurIPS 2025', url: 'https://arxiv.org/abs/2412.14161' },
          { title: 'AgentArch: A Comprehensive Benchmark to Evaluate Agent Architectures in Enterprise', authors: 'Bogavelli et al.', venue: 'arXiv 2025 (ServiceNow)', url: 'https://arxiv.org/abs/2509.10769' },
          { title: 'Agentic Business Process Management: Practitioner Perspectives', authors: 'Vu et al.', venue: 'BPM 2025 (SAP)', url: 'https://arxiv.org/abs/2504.03693' },
          { title: 'FinRobot: Generative Business Process AI Agents for ERP in Finance', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2506.01423' },
          { title: 'AI Agentic Workflows and Enterprise APIs: Adapting API Architectures', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2502.17443' },
        ],
      },
      {
        name: 'Retrieval-Augmented & Knowledge Agents',
        papers: [
          { title: 'Agentic RAG: A Survey on Agentic Retrieval-Augmented Generation', authors: 'Singh et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2501.09136' },
          { title: 'A-RAG: Scaling Agentic RAG via Hierarchical Retrieval Interfaces', authors: 'Du et al.', venue: 'arXiv 2026', url: 'https://arxiv.org/abs/2602.03442' },
          { title: 'Retrieval-Augmented Generation with Graphs (GraphRAG Survey)', authors: 'Han et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2501.00309' },
          { title: 'Towards Practical GraphRAG: Efficient KG Construction and Hybrid Retrieval at Scale', authors: 'Min et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2507.03226' },
          { title: 'MA-RAG: Multi-Agent RAG via Collaborative Chain-of-Thought Reasoning', authors: 'Nguyen et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2505.20096' },
        ],
      },
    ],
  },
  {
    topic: 'Desktop & Web Agents',
    subtopics: [
      {
        name: 'Web Navigation',
        papers: [
          { title: 'WebRL: Training LLM Web Agents via Self-Evolving Online Curriculum RL', authors: 'Qi et al.', venue: 'ICLR 2025', url: 'https://arxiv.org/abs/2411.02337' },
          { title: 'WebAgent-R1: Training Web Agents via End-to-End Multi-Turn RL', authors: 'Wei et al.', venue: 'EMNLP 2025', url: 'https://arxiv.org/abs/2505.16421' },
          { title: 'AgentTrek: Agent Trajectory Synthesis via Guiding Replay with Web Tutorials', authors: 'Xu et al.', venue: 'ICLR 2025 Spotlight', url: 'https://arxiv.org/abs/2412.09605' },
          { title: 'A Survey of WebAgents: Towards Next-Generation AI Agents for Web Automation', authors: 'Ning et al.', venue: 'KDD 2025', url: 'https://arxiv.org/abs/2503.23350' },
          { title: 'The BrowserGym Ecosystem for Web Agent Research', authors: 'Lorieau et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2412.05467' },
        ],
      },
      {
        name: 'GUI Grounding',
        papers: [
          { title: 'UGround: Universal Visual Grounding for GUI Agents', authors: 'Gao et al.', venue: 'ICLR 2025 Oral', url: 'https://arxiv.org/abs/2410.05243' },
          { title: 'OS-ATLAS: A Foundation Action Model for Generalist GUI Agents', authors: 'Wu et al.', venue: 'ICLR 2025 Spotlight', url: 'https://arxiv.org/abs/2410.23218' },
          { title: 'ShowUI: One Vision-Language-Action Model for GUI Visual Agent', authors: 'Lin et al.', venue: 'CVPR 2025', url: 'https://arxiv.org/abs/2411.17465' },
          { title: 'UI-TARS: Pioneering Automated GUI Interaction with Native Agents', authors: 'Qin et al.', venue: 'arXiv 2025 (ByteDance)', url: 'https://arxiv.org/abs/2501.12326' },
          { title: 'UI-TARS-2: Advancing GUI Agent with Multi-Turn Reinforcement Learning', authors: 'Wang et al.', venue: 'arXiv 2025 (ByteDance)', url: 'https://arxiv.org/abs/2509.02544' },
        ],
      },
      {
        name: 'Desktop Automation',
        papers: [
          { title: 'TheAgentCompany: Benchmarking LLM Agents on Consequential Real World Tasks', authors: 'Xu et al.', venue: 'NeurIPS 2025', url: 'https://arxiv.org/abs/2412.14161' },
          { title: 'PC Agent-E: Efficient Agent Training for Computer Use', authors: 'He et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2505.13909' },
          { title: 'GUI Agents: A Survey', authors: 'Nguyen et al.', venue: 'Findings of ACL 2025', url: 'https://arxiv.org/abs/2412.13501' },
          { title: 'Towards Trustworthy GUI Agents: A Survey', authors: 'Shi et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2503.23434' },
          { title: 'Grounding Computer Use Agents on Human Demonstrations (GroundCUA)', authors: 'Feizi et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2511.07332' },
        ],
      },
    ],
  },
  {
    topic: 'Embodied & Social Agents',
    subtopics: [
      {
        name: 'Embodied Agents & Robotics',
        papers: [
          { title: 'π₀: A Vision-Language-Action Flow Model for General Robot Control', authors: 'Black et al.', venue: 'RSS 2025 (Physical Intelligence)', url: 'https://arxiv.org/abs/2410.24164' },
          { title: 'π₀.5: A VLA Model with Open-World Generalization', authors: 'Physical Intelligence et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2504.16054' },
          { title: 'GR00T N1: An Open Foundation Model for Generalist Humanoid Robots', authors: 'NVIDIA et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2503.14734' },
          { title: 'Towards Embodied Agentic AI: LLM- and VLM-Driven Robot Autonomy', authors: 'Salimpour et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2508.05294' },
          { title: 'OpenVLA: An Open-Source Vision-Language-Action Model', authors: 'Kim et al.', venue: 'CoRL 2025', url: 'https://arxiv.org/abs/2406.09246' },
        ],
      },
      {
        name: 'Social Simulation & Generative Agents',
        papers: [
          { title: 'AgentSociety: Large-Scale Simulation of LLM-Driven Generative Agents', authors: 'Piao et al.', venue: 'arXiv 2025 (Tsinghua)', url: 'https://arxiv.org/abs/2502.08691' },
          { title: 'GenSim: A General Social Simulation Platform with LLM-based Agents', authors: 'Tang et al.', venue: 'NAACL 2025', url: 'https://arxiv.org/abs/2410.04360' },
          { title: 'Project Sid: Many-agent Simulations Toward AI Civilization', authors: 'Altera AI et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2411.00114' },
          { title: 'LLM Driven Agents for Simulating Echo Chamber Formation', authors: 'Liu et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2502.18138' },
          { title: 'Population-Aligned Persona Generation for LLM-based Social Simulation', authors: 'Hu et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2509.10127' },
        ],
      },
      {
        name: 'Persona & Theory of Mind',
        papers: [
          { title: 'Position: Theory of Mind Benchmarks are Broken for LLMs', authors: 'Riemer et al.', venue: 'ICML 2025 (IBM)', url: 'https://arxiv.org/abs/2412.19726' },
          { title: 'AutoToM: Scaling Model-based Mental Inference via Automated Agent Modeling', authors: 'Zhang et al.', venue: 'arXiv 2025 (JHU)', url: 'https://arxiv.org/abs/2502.15676' },
          { title: 'Infusing Theory of Mind into Socially Intelligent LLM Agents', authors: 'Hwang et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2509.22887' },
          { title: 'Sotopia-RL: Reward Design for Social Intelligence', authors: 'Yu et al.', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2508.03905' },
          { title: 'Systematizing LLM Persona Design for AI Companion Applications', authors: 'Various', venue: 'arXiv 2025', url: 'https://arxiv.org/abs/2511.02979' },
        ],
      },
    ],
  },
]
