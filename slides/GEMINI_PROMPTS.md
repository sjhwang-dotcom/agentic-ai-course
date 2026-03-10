# W2 Agentic Architecture Patterns — Gemini Image Generation Prompts

Each prompt below is designed for Gemini image generation (e.g., `gemini-2.5-flash-image` or `nano-banana-pro-preview`).
Copy-paste each prompt to generate the corresponding slide visual.

**Style guide for ALL prompts**: Clean, professional academic lecture slide style. White or very light gray background. Sans-serif font (similar to Inter or Helvetica). Consistent color scheme: Blue (#4285F4) for reasoning, Green (#0F9D58) for search/planning, Orange (#F4B400) for acting, Purple (#AB47BC) for synthesis. 16:9 aspect ratio (1920x1080). No watermarks. Minimal, clean design suitable for a KAIST graduate AI course.

---

## PART 0: OPENING (Slides 1-7)

### Slide 1: Title Slide
```
Create a clean, minimalist title slide for an academic lecture presentation.
Title: "Agentic Architecture Patterns" in large bold black text centered on the slide.
Subtitle below: "AI 89900 — Agentic AI | W2 | KAIST Spring 2026" in smaller gray text.
White background with a subtle geometric pattern or thin accent line at the bottom in blue (#4285F4).
16:9 aspect ratio, 1920x1080. Professional, modern academic style.
```

### Slide 2: The Central Question
```
Create an academic lecture diagram on a white background, 16:9 format.

At the top, large bold text: "How do we get LLMs from producing single-pass outputs to exhibiting intelligent, deliberate, self-correcting behavior?"

Below that, three horizontal rows, each containing:
- Left side: a colored rounded rectangle box with a question
- A right-pointing arrow
- Right side: a label showing which lecture section answers it

Row 1 (Blue #4285F4): "Can we make the model think harder?" → "Part 1: Internal Reasoning"
Row 2 (Green #0F9D58): "Can we search for better solutions?" → "Part 2: Structured Search"
Row 3 (Orange #F4B400): "Can we ground reasoning in the real world?" → "Part 3: Grounded Acting"

Clean sans-serif font. Each box has white text on the colored background. Arrows are the same color as the box.
```

### Slide 3: The Agentic Reasoning Spectrum
```
Create a horizontal spectrum diagram for an academic lecture slide, white background, 16:9 format.

A large right-pointing arrow spans the full width of the slide as the base.
Along the arrow, 6 stops are marked with colored boxes above the arrow, connected by thin vertical lines:

From left to right (color gradient from light blue to dark blue):
1. "IO Prompting" (light blue #BBDEFB) — simplest method
2. "Chain-of-Thought" (medium blue #90CAF9)
3. "SC / Least-to-Most" (blue #64B5F6) — ensemble methods
4. "Tree / Graph Search" (darker blue #42A5F5) — ToT, RAP, GoT
5. "ReAct / Grounded" (blue #2196F3) — agent with environment
6. "Multi-Agent Systems" (dark blue #1976D2) — multiple agents

Below the arrow, a label: "Increasing autonomy, computational cost, and capability →"
Below each stop, small gray text showing paper authors and years.

Clean, professional, minimal design. No 3D effects.
```

### Slide 4: Taxonomy — Three Pillars
```
Create a three-column taxonomy diagram for an academic lecture slide, white background, 16:9 format.

Three columns side by side, each with:
- A colored header bar at the top
- A light-colored content area below with bullet-pointed paper names

Column 1 (Blue #4285F4 header, light blue #E8F0FE background):
Header: "Internal Reasoning"
Papers: "CoT (Wei '22)", "Self-Consistency (Wang '23)", "Least-to-Most (Zhou '23)", "RAP (Hao '23)", "Test-Time Compute (Snell '25)"

Column 2 (Green #0F9D58 header, light green #E6F4EA background):
Header: "Structured Search"
Papers: "Tree of Thoughts (Yao '23)", "Plan-and-Solve (Wang '23)", "LATS (Zhou '24)", "Graph of Thoughts (Besta '24)", "Planning Survey (Huang '24)", "Planning Abilities (Valmeekam '23)"

Column 3 (Orange #F4B400 header, light orange #FEF7E0 background):
Header: "Grounded Action"
Papers: "ReAct (Yao '23)", "Reflexion (Shinn '23)", "FireAct (Chen '23)", "Scaling Agents (Kim '25)"

Small right-pointing arrows between columns. Below all three columns, a timeline showing "2022 → 2023 → 2024 → 2025".
```

### Slide 5: Two Dimensions of Progress
```
Create a 2D scatter plot diagram for an academic lecture slide, white background, 16:9 format.

Two axes forming an L-shape:
- X-axis (horizontal): "Reasoning Topology" with labels "Linear → Tree → Graph"
- Y-axis (vertical): "Environmental Grounding" with labels "Pure Reasoning → Tool Use → Full Agent"

Light gray grid lines in the background.

Papers plotted as small colored rounded rectangles:
Bottom-left area (Blue boxes): "CoT", "SC", "LtM", "PS" — linear reasoning, no environment
Middle area (Blue boxes): "RAP", "TTC" — tree reasoning, no environment
Middle area (Green boxes): "ToT" — tree, no environment
Upper-middle (Green box): "LATS" — tree with full environment interaction
Right area (Green box): "GoT" — graph, no environment
Lower-left (Orange boxes): "ReAct", "Reflexion", "FireAct" — linear/simple, full agent
Upper-right (Orange box): "Scaling" — complex, full agent

Clean academic chart style. Each paper name in its colored box with white text.
```

### Slide 6: Lecture Roadmap
```
Create a lecture roadmap diagram for an academic slide, white background, 16:9 format.

Four horizontal bars stacked vertically, each representing a lecture part:

Bar 1 (Blue #4285F4): "Part 1: Internal Reasoning"
  Right text: "CoT → Self-Consistency → Least-to-Most → RAP → Test-Time Compute"
  Meta: "5 papers | ~20 slides"

Bar 2 (Green #0F9D58): "Part 2: Structured Search & Planning"
  Right text: "ToT → Plan-and-Solve → LATS → GoT → Survey → Critical Analysis"
  Meta: "6 papers | ~24 slides"

Bar 3 (Orange #F4B400): "Part 3: Grounded Acting"
  Right text: "ReAct → Reflexion → FireAct → Scaling Agents"
  Meta: "4 papers | ~16 slides"

Bar 4 (Purple #AB47BC): "Part 4: Synthesis & Future"
  Right text: "Grand synthesis | Research trends | Open problems | Discussion"
  Meta: "~10 slides"

Down-pointing arrows between bars showing progression. Clean, minimal design.
```

### Slide 7: Key Insight Preview
```
Create an academic lecture slide with three surprising research findings, white background, 16:9 format.

Title at top: "Key Insight Preview: Three Surprising Findings"

Three sections with large bold numbers and findings:

"1" (large blue number) — "A smaller model + search can outperform a 14× larger model"
  Subtitle: "Test-Time Compute (Snell et al., 2025)"

"2" (large green number) — "LLMs achieve only ~3% on autonomous planning tasks"
  Subtitle: "Planning Abilities (Valmeekam et al., 2023)"

"3" (large orange number) — "More agents does NOT always mean better: MAS can hurt by −70%"
  Subtitle: "Scaling Agent Systems (Kim et al., 2025)"

Each finding in a light-colored card with the accent color on the left border. Professional, impactful layout.
```

---

## PART 1: INTERNAL REASONING (Slides 8-27)

### Slide 8: Section Header
```
Create a section header slide for an academic lecture, 16:9 format.
Large text: "Part 1: Internal Reasoning" in bold black.
Subtitle: "Making the LLM think harder — from chains to ensembles to decomposition"
Blue (#4285F4) accent bar or geometric element on the left side.
Clean white/light gray background. Minimal, elegant design.
```

### Slide 9: The Reasoning Prompting Stack
```
Create a pyramid/stack diagram for an academic lecture slide, white background, 16:9 format.

Five horizontal bars stacked vertically, forming an inverted pyramid (narrowest at top, widest at bottom). Each bar is a different shade of blue, darker at top:

Top (darkest blue #0D47A1, narrowest): "Test-Time Compute: Optimally allocate inference budget"
2nd (dark blue #1565C0): "RAP: Plan with MCTS over reasoning steps"
3rd (medium blue #1976D2): "Least-to-Most: Break down, solve piece by piece"
4th (blue #2196F3): "Self-Consistency: Think multiple ways, vote"
Bottom (light blue #42A5F5, widest): "Chain-of-Thought: Think step by step"

An upward arrow on the right side labeled "Increasing sophistication ↑"
White text on all bars. Clean academic style.
```

### Slide 10: Chain-of-Thought — Core Idea
```
Create an academic diagram explaining Chain-of-Thought prompting, white background, 16:9 format.

Split layout — left side text, right side diagram:

LEFT SIDE (text):
Title: "Chain-of-Thought Prompting"
Key points in bullet form:
• "Augment few-shot exemplars with intermediate reasoning steps"
• "No fine-tuning — just prompt engineering"
• "Emergent ability: only works with models ≥ 100B parameters"

RIGHT SIDE (diagram):
Show a comparison of two approaches side by side:

"Standard Prompting":
[Question Box] → [Answer Box]
Simple direct path, single arrow.

"Chain-of-Thought Prompting":
[Question Box] → [Step 1] → [Step 2] → [Step 3] → [Answer Box]
Chain of reasoning boxes connected by arrows, with each step showing a brief reasoning note.

The CoT path should be highlighted with blue (#4285F4) boxes and arrows.
The standard path uses gray boxes.
Clean, minimal, no clutter.
```

### Slide 11: CoT — How It Works
```
Create an academic diagram showing how Chain-of-Thought works, white background, 16:9 format.

Show a concrete example of CoT prompting:

Top section — "Prompt (Few-shot exemplar)":
A rounded box containing:
  Q: "Roger has 5 tennis balls. He buys 2 cans of 3. How many does he have?"
  A: "Roger started with 5. 2 cans × 3 = 6. 5 + 6 = 11. The answer is 11."

Bottom section — "Model generates CoT for new question":
  Q: "The cafeteria had 23 apples. They used 20 and bought 6 more. How many?"
  Generated: "They had 23. Used 20, so 23-20=3. Bought 6 more, so 3+6=9. The answer is 9." ✓

Highlight the reasoning steps in blue with light blue background.
Show an "X" over an ablation: "Equation only (no reasoning text) → fails"
Clean academic style with clear visual hierarchy.
```

### Slide 12: CoT — Key Results
```
Create an academic results visualization for Chain-of-Thought, white background, 16:9 format.

Split layout:

LEFT SIDE — Bar chart or results table:
"GSM8K": Standard 17.9% vs CoT 58.1% (PaLM 540B) — big blue bar
"MultiArith": Standard 33.7% vs CoT 93.5%
"StrategyQA": Standard 73.5% vs CoT 77.8%

RIGHT SIDE — "The Emergence Phenomenon" graph:
X-axis: "Model Size" (100M, 1B, 10B, 100B, 500B)
Y-axis: "Accuracy (%)"
Two lines:
  - Gray dashed: "Standard prompting" — flat or gradual increase
  - Blue solid: "Chain-of-Thought" — flat until ~100B, then sudden jump upward
A vertical dashed line at ~100B labeled "Emergence threshold"
Annotation: "CoT only helps with models > 100B parameters"

Professional chart style with clean axes and labels.
```

### Slide 13: CoT — Impact & Transition
```
Create an academic slide showing CoT's impact and transition to next topic, white background, 16:9 format.

Upper section — "Impact":
Three icons or bullet points:
• Citation icon: "10,000+ citations — one of the most influential LLM papers"
• Foundation icon: "Opened the door to ToT, ReAct, and all planning methods"
• Paradigm icon: "Established prompt-based reasoning as a viable paradigm"

Lower section — "Limitation → What's Next":
A blue rounded rectangle at the bottom spanning the full width:
"⟶ CoT produces a single reasoning chain. But what if that chain is wrong? NEXT: Self-Consistency samples multiple chains and votes."

The transition box should have a blue (#4285F4) background with white text and a right-pointing arrow icon.
```

### Slide 14: Self-Consistency — Core Idea
```
Create an academic diagram explaining Self-Consistency decoding, white background, 16:9 format.

The key diagram should show:

Center: A starting point labeled "Question" (gray box)

From the question, THREE diverging paths (like a fan), each a different color shade of blue:
  Path 1: [Step A1] → [Step A2] → [Answer: 9]
  Path 2: [Step B1] → [Step B2] → [Answer: 7]
  Path 3: [Step C1] → [Step C2] → [Answer: 9]

All three paths converge to a "Majority Vote" box at the right.
The vote result: "Answer: 9 ✓" (highlighted in green)

Labels:
- "1. Sample diverse reasoning paths" (near the fan-out)
- "2. Each path reaches a final answer" (near the answers)
- "3. Majority vote selects the most common answer" (near the vote box)

Below the diagram: "Key Insight: Complex problems have multiple valid reasoning paths. Correct answers appear more frequently."
Clean academic style, no clutter.
```

### Slide 15: Self-Consistency — Results
```
Create an academic results comparison chart for Self-Consistency, white background, 16:9 format.

Grouped bar chart with 4 benchmark groups:

For each benchmark, two bars side by side:
  Gray bar: "CoT (baseline)"
  Blue bar: "CoT + Self-Consistency"

Benchmarks:
  GSM8K: 58.1% → 76.0% (+17.9%)
  ARC Challenge: baseline → +3.9%
  StrategyQA: baseline → +6.4%
  SVAMP: baseline → improvement

Above the bars, show the improvement delta with upward arrows in blue.

On the right side, a small inset graph:
  X-axis: "Number of sampled paths (N)"
  Y-axis: "Accuracy"
  Curve that rises quickly then saturates around N=40
  Label: "Saturates at ~40 paths"

Clean chart style with axis labels. Professional academic visualization.
```

### Slide 16: Self-Consistency — Transition
```
Create a transition slide connecting Self-Consistency to Least-to-Most, white background, 16:9 format.

Upper section — "Self-Consistency: Contribution":
• "Showed decoding strategy matters as much as prompt design"
• "Established 'sample-and-aggregate' as a general improvement pattern"
• "Precursor to ToT, LATS, and other search methods"

Middle section — "Limitation" (in a light red/warning box):
"Still operates on the SAME problem — no decomposition capability"

Bottom — Transition box (blue #4285F4 background, white text):
"⟶ SC improves decoding but cannot handle problems that are too complex. What if the problem needs to be BROKEN DOWN? NEXT: Least-to-Most decomposes it."
```

### Slide 17: Least-to-Most — Core Idea
```
Create an academic diagram explaining the Least-to-Most prompting approach, white background, 16:9 format.

Show a two-stage pipeline:

STAGE 1 — "Decompose" (top):
A complex question box on the left: "If it takes 1 hour to dry 1 shirt, how long for 5 shirts?"
An arrow labeled "Decompose" points to a list of sub-questions:
  Sub-Q1: "How long does it take to dry 1 shirt?"
  Sub-Q2: "Can multiple shirts be dried simultaneously?"
  Sub-Q3: "How long for 5 shirts if dried together?"

STAGE 2 — "Solve sequentially" (bottom):
Sub-Q1 → [Answer 1: "1 hour"] →
Sub-Q2 (with Answer 1 as context) → [Answer 2: "Yes, simultaneously"] →
Sub-Q3 (with Answers 1+2 as context) → [Final Answer: "1 hour"] ✓

Each sub-question is in a blue box, answers in green boxes.
Arrows show sequential solving with context accumulation.
Label: "Key: solutions to easier sub-problems provide context for harder ones"

Clean, clear flow diagram style.
```

### Slide 18: Least-to-Most — Results
```
Create an academic results visualization for Least-to-Most prompting, white background, 16:9 format.

Three result cards arranged horizontally:

Card 1 — "SCAN Benchmark" (Compositional Generalization):
  Large number comparison:
  "CoT: 16.2%" in gray, crossed out
  "Least-to-Most: 99.7%" in bold blue
  A dramatic upward arrow showing the gap
  Label: "Near-perfect on a task where CoT completely fails"

Card 2 — "Last Letter Concatenation" (12-letter, trained on 2):
  "CoT: 15.0%" in gray
  "Least-to-Most: 74.0%" in bold blue
  Label: "Generalizes to much harder problems at test time"

Card 3 — "GSM8K" (Math):
  "Also improves, though more modest gains"
  "LtM shines when compositional structure is clear"

Each card has a light blue background with rounded corners. Professional card-based layout.
```

### Slide 19: Reasoning Stack Comparison
```
Create a three-column comparison diagram for an academic lecture, white background, 16:9 format.

Three methods compared side by side:

Column 1 (Blue #4285F4):
Header: "Chain-of-Thought"
Visual: A single straight chain of 4 circles connected by arrows (left to right)
Description: "Think step by step"
Properties: "Single path, Single pass"

Column 2 (Darker blue #1976D2):
Header: "Self-Consistency"
Visual: Three parallel chains of 3 circles, all converging to a single "Vote" diamond
Description: "Think multiple ways"
Properties: "Multiple paths, Single pass"

Column 3 (Darkest blue #0D47A1):
Header: "Least-to-Most"
Visual: A vertical chain where each step feeds into the next, with boxes getting progressively larger
Description: "Break it down"
Properties: "Single path, Multiple passes"

Bottom: Blue transition box: "⟶ All three are linear or parallel. Can we SEARCH the reasoning space? NEXT: RAP applies MCTS."
```

### Slide 20: RAP — Core Idea
```
Create an academic diagram comparing standard CoT reasoning vs RAP (Reasoning via Planning), white background, 16:9 format.

Split into two panels:

LEFT PANEL — "Chain-of-Thought" (gray, dimmed):
A single chain: [Question] → [Step 1] → [Step 2] → [Step 3] → [Answer]
Label: "Single path, no backtracking"
A red X on a wrong step showing error propagation

RIGHT PANEL — "RAP: Reasoning as Planning" (blue, highlighted):
A tree structure branching from [Question]:
  Level 1: Two branches [Action A] [Action B]
  Level 2: Each branches further
  Some branches marked with X (pruned), one path marked with ✓ (selected)
  Feedback arrows going back up (backpropagation)

Labels on the RAP side:
  "LLM as World Model: predicts next state"
  "LLM as Agent: selects best action"
  "MCTS: explores, evaluates, backpropagates"

Color the RAP tree in blue gradient. Show the exploration clearly.
```

### Slide 21: RAP — MCTS Diagram
```
Create a detailed Monte Carlo Tree Search (MCTS) diagram for an academic lecture, white background, 16:9 format.

Show the four phases of MCTS in a horizontal flow:

Phase 1 — "Selection" (leftmost):
A tree with some nodes, highlighting the path from root to a leaf using UCT formula.
Arrow from root down to selected leaf.
Label: "UCT = Q/N + c√(ln(N_parent)/N)"

Phase 2 — "Expansion" (second):
The selected leaf node expands, showing 2-3 new child nodes appearing.
New nodes shown as dashed circles becoming solid.
Label: "LLM generates candidate next steps"

Phase 3 — "Simulation" (third):
From expanded node, a dashed path goes to a terminal state.
The terminal shows a reward value (e.g., "r = 0.8").
Label: "LLM-as-world-model estimates outcome"

Phase 4 — "Backpropagation" (rightmost):
Upward arrows from the terminal back to the root, updating values along the path.
Numbers on nodes being updated (e.g., "3/5" → "4/6").
Label: "Update value estimates up the tree"

Large right-pointing arrows between each phase. Each phase in a light gray box. Blue accent color for highlights.
```

### Slide 22: RAP — Results
```
Create an academic results visualization for RAP, white background, 16:9 format.

Three result sections:

Section 1 — "Blocksworld Planning":
Bar chart comparison:
  "GPT-4 (CoT)": 64% (gray bar)
  "RAP (GPT-4)": 95.4% (blue bar)
  "LLaMA-33B (CoT)": 1% (tiny gray bar)
  "RAP (LLaMA-33B)": 45.3% (blue bar)
  Annotation: "45× improvement for LLaMA!"

Section 2 — "GSM8K Math":
  "CoT: 58.1%" → "RAP: 62.8%"
  Label: "More modest gains on linear problems"

Section 3 — "Key Insight" (highlighted box):
  "Small model + MCTS search can match much larger models"
  Icon of a small brain + magnifying glass = large brain

Professional chart style with clean bars and labels.
```

### Slide 23: RAP — Impact & Transition
```
Create an academic slide showing RAP's connections to other methods, white background, 16:9 format.

A connection diagram:
Central node: "RAP" (large blue circle)

Connected to:
  → "ToT" (green): "Simpler BFS/DFS instead of MCTS"
  → "LATS" (green): "Extends RAP with environment + reflection"
  → "Test-Time Compute" (blue): "Generalizes compute allocation"
  ← "CoT" (blue): "RAP builds on CoT reasoning"

Arrows showing influence direction. Each connection labeled.

Bottom: Blue transition box: "⟶ RAP proves search helps. But HOW MUCH computation should we allocate? NEXT: Test-Time Compute."
```

### Slide 24: Test-Time Compute — Core Finding
```
Create an academic diagram showing the Test-Time Compute scaling concept, white background, 16:9 format.

Key visual: Two paths compared:

PATH 1 (top, gray/traditional):
[Small Model 8B] →→→→→ [Large Model 70B] →→→→→ [Huge Model 405B]
Label: "Traditional: Scale MODEL size"
Cost indicator: "$$$$$"

PATH 2 (bottom, blue/new):
[Small Model 8B] + [Search icon] + [Verifier icon] = [Performance matching 70B]
Label: "New: Scale INFERENCE compute"
Cost indicator: "$$"

A dramatic "=" sign between "8B + optimal search" and "70B"
Annotation: "4× efficiency improvement"

Below: "Two knobs for test-time compute:"
Knob 1: "Proposal: revise answers iteratively (sequential)"
Knob 2: "Verifier: generate many candidates, pick best (parallel)"

Clean, impactful design showing the paradigm shift.
```

### Slide 25: Test-Time Compute — Strategy Comparison
```
Create an academic chart showing compute-optimal strategies at different difficulty levels, white background, 16:9 format.

A chart with:
X-axis: "Problem Difficulty" (Easy → Medium → Hard → Very Hard)
Y-axis: "Performance (% correct)"

Three curves:
1. "Verifier-based (PRM)" — blue solid line: high on easy problems, drops on hard
2. "Iterative Revision" — green dashed line: moderate on easy, better on hard
3. "Compute-Optimal (best of both)" — red/orange bold line: always picks the better strategy

Shaded regions:
  Left region (Easy): "PRM dominates" (blue shading)
  Right region (Hard): "Revision dominates" (green shading)
  Far right: "Neither helps" (gray zone)

Annotation: "The optimal strategy depends on problem DIFFICULTY"
Clean academic chart style with proper legends and axis labels.
```

### Slide 26: Test-Time Compute — Key Results
```
Create an academic results visualization for Test-Time Compute, white background, 16:9 format.

Central graphic — "The Scaling Equivalence":
A scale/balance diagram:
  Left pan: "Llama-3.1-8B + Optimal Search" (small model icon + magnifying glass)
  Right pan: "Llama-3.1-70B" (large model icon)
  Balance is level (equal performance)
  Label: "With 4× less FLOPs!"

Below: Three cards showing difficulty-dependent strategy:

Card 1 (Green): "Easy Problems → PRM verification is optimal"
Card 2 (Blue): "Hard Problems → Iterative refinement outperforms"
Card 3 (Gray): "Very Hard → Need fundamentally better models"

Bottom: "Connection: OpenAI o1 and DeepSeek-R1 use this principle at massive scale"
```

### Slide 27: Part 1 Summary
```
Create a Part 1 summary slide for an academic lecture, white background, 16:9 format.

Title: "Part 1 Summary: The Compute-Reasoning Tradeoff"

Five numbered findings with icons:
1. "CoT: prompt-based reasoning is powerful but fragile" (chain icon)
2. "Self-Consistency: sampling + voting improves reliability" (multiple paths icon)
3. "Least-to-Most: decomposition enables compositional generalization" (tree decomposition icon)
4. "RAP: MCTS search achieves dramatic gains" (tree search icon)
5. "Test-Time Compute: optimal inference allocation is a new scaling axis" (scale/balance icon)

Each finding on a light blue card.

Bottom: Green transition box: "⟶ Part 1 improved internal reasoning. Part 2: what if we give reasoning explicit STRUCTURE — trees, graphs, plans?"
```

---

## PART 2: STRUCTURED SEARCH & PLANNING (Slides 28-51)

### Slide 28: Section Header
```
Create a section header slide for an academic lecture, 16:9 format.
Large text: "Part 2: Structured Search & Planning" in bold black.
Subtitle: "From linear chains to trees, graphs, and formal plans"
Green (#0F9D58) accent bar or geometric element on the left side.
White/light gray background. Minimal, elegant.
```

### Slide 29: Evolution of Reasoning Topology
```
Create an evolution diagram showing the progression of reasoning structures, white background, 16:9 format.

Five topology diagrams arranged left to right, connected by arrows:

1. "IO" — Two nodes connected by a single arrow (input → output)
   Color: Gray

2. "CoT" — A chain of 5 nodes connected sequentially
   Color: Light blue

3. "CoT-SC" — Three parallel chains of 3 nodes each, all converging to a single "Vote" node
   Color: Medium blue

4. "ToT" — A binary tree structure with 3 levels, some branches pruned (marked with X)
   Color: Blue-green

5. "GoT" — An arbitrary directed graph with nodes that both branch AND merge, including loops
   Color: Green

Below the 5 diagrams, a special 6th entry:
"LATS" — A tree structure similar to ToT but with bidirectional arrows to an "Environment" box
   Color: Dark green
   Label: "Tree + Environmental Feedback"

Right-pointing arrows between each topology showing evolution.
Labels below each: method name and key property.
```

### Slide 30: Tree of Thoughts — Core Idea
```
Create the iconic Tree of Thoughts comparison diagram, white background, 16:9 format.

Four panels showing the evolution from IO to ToT:

Panel 1 — "IO (Input-Output)":
Single node → single node. One arrow. Gray color.

Panel 2 — "CoT (Chain-of-Thought)":
Linear chain of 4 nodes. Blue arrows between them.

Panel 3 — "CoT-SC (Self-Consistency)":
Three parallel chains of 3 nodes, converging to a vote. Blue.

Panel 4 — "ToT (Tree of Thoughts)" (highlighted, green border):
A tree structure with root node branching into 3 paths.
Each path has 2-3 nodes.
Some branches marked with X (pruned by LLM evaluation).
One path highlighted as the selected best path.
Evaluation labels: "LLM judges: 'Is this promising?'"

The ToT panel should be larger and more prominent than the others.
Labels: "Four Design Decisions: thought decomposition, generator, evaluator, search algorithm"
```

### Slide 31: ToT — Design Decisions
```
Create an academic diagram showing ToT's four design decisions, white background, 16:9 format.

Four vertical sections, each with an icon and description:

1. "Thought Decomposition" (puzzle piece icon):
   "How to break the problem into steps"
   "A 'thought' can be a line, sentence, or plan step"
   Visual: A problem box splitting into 3 smaller boxes

2. "Thought Generator" (lightbulb icon):
   "Propose candidate next steps"
   "Sample (random diversity) or Propose (LLM generates k candidates)"
   Visual: One box producing 3 candidate boxes

3. "State Evaluator" (checkmark/score icon):
   "LLM judges: 'Is this partial solution promising?'"
   "Value mode (score 1-10) or Vote mode (rank candidates)"
   Visual: Three boxes with scores (8, 3, 7), one highlighted

4. "Search Algorithm" (tree icon):
   "BFS: explore breadth-first, keep top-k per level"
   "DFS: depth-first with backtracking on low scores"
   Visual: Mini BFS tree vs mini DFS tree

Clean academic style with green (#0F9D58) accent color.
```

### Slide 32: ToT — Results
```
Create an academic results visualization for Tree of Thoughts, white background, 16:9 format.

Three result panels:

Panel 1 — "Game of 24" (most dramatic):
Large bar chart:
  "IO": 7.3% (tiny gray bar)
  "CoT": 4.0% (even tinier gray bar, crossed out)
  "ToT": 74% (massive green bar)
  Annotation: "CoT actually HURTS here!"
  Label: "The problem requires exploration, not linear thinking"

Panel 2 — "Creative Writing":
  Human evaluation scores:
  "IO: 6.19" vs "ToT: 7.56"
  5-star rating visual showing the difference
  Label: "Coherent passage from random sentences"

Panel 3 — "Mini Crosswords (5×5)":
  "IO: 15.6% words" vs "ToT: 60% words"
  Visual: partially filled vs mostly filled crossword grid
  Label: "DFS with pruning most effective"

Professional chart style with green accent.
```

### Slide 33: ToT — Transition
```
Create a transition slide from ToT to Plan-and-Solve, white background, 16:9 format.

Upper section — ToT Impact:
Three bullet points with green checkmarks:
✓ "Established 'LLM-as-deliberate-searcher' paradigm"
✓ "Unlocks problems where linear CoT fails (4% → 74%)"
✓ "Highly general: applicable whenever exploration helps"

Middle — Limitations (light yellow warning box):
⚠ "Requires task-specific thought decomposition"
⚠ "Uses simple BFS/DFS — more sophisticated search possible"
⚠ "No learning from experience"

Bottom — Green transition box:
"⟶ ToT uses BFS/DFS. Can we make planning EXPLICIT in the prompt? NEXT: Plan-and-Solve."
```

### Slide 34: Plan-and-Solve — Core Idea
```
Create an academic diagram comparing zero-shot CoT vs Plan-and-Solve prompting, white background, 16:9 format.

Two panels side by side:

LEFT PANEL — "Zero-Shot CoT" (gray, showing problems):
Prompt: "Let's think step by step."
Below: Three error types with red X marks:
  ✗ "Missing-step errors: skips necessary steps"
  ✗ "Calculation errors: arithmetic mistakes"
  ✗ "Semantic misunderstanding"

RIGHT PANEL — "Plan-and-Solve (PS+)" (green, showing solution):
Prompt: "Let's first understand the problem and devise a plan to solve it. Then let's carry out the plan, extract relevant variables, calculate intermediate results, and solve step by step."
Below: The same three error types now with green checkmarks:
  ✓ "Plans explicitly → no missing steps"
  ✓ "Extracts variables → fewer calc errors"
  ✓ "Understands first → fewer semantic errors"

Arrow from left to right labeled "Simple prompt improvement"
Annotation: "Zero-shot PS+ matches or exceeds FEW-SHOT CoT!"
```

### Slide 35: Plan-and-Solve — Results
```
Create an academic results chart for Plan-and-Solve, white background, 16:9 format.

Grouped bar chart comparing three methods across benchmarks:
  Gray: "Zero-shot CoT"
  Light green: "Few-shot CoT"
  Green: "Zero-shot PS+"

Benchmarks:
  GSM8K: Zero-shot CoT < Few-shot CoT (56.4%) ≈ PS+ (58.7%)
  SVAMP: PS+ (73.8%) > CoT (69.3%)
  AQuA: improvement shown
  MultiArith: improvement shown

Key callout: A spotlight/highlight on "PS+ matches few-shot without any exemplars!"

Error reduction visualization:
  "Missing-step errors: -50%+ reduction"
  Arrow showing dramatic decrease
```

### Slide 36: Plan-and-Solve — Transition
```
Create a transition slide from Plan-and-Solve to LATS, white background, 16:9 format.

Key takeaway in a green card:
"Planning doesn't require complex tree search — even a prompt-based plan helps significantly"

Comparison boxes:
"PS: Plans linearly (single pass)" vs "ToT: Searches trees (multi-step)"
Question mark between them: "Can we COMBINE both?"

Bottom — Green transition box:
"⟶ PS plans linearly. ToT searches trees. Can we COMBINE search + planning + environmental feedback? NEXT: LATS unifies all three."
```

### Slide 37: LATS — Core Idea
```
Create an academic diagram showing LATS as the unification of multiple agent capabilities, white background, 16:9 format.

Central diagram — LATS architecture:
A tree structure in the center with the following annotations:

Around the tree, five labels pointing to different aspects:
  "Reasoning" (blue arrow): pointing to the thought nodes in the tree
  "Acting" (orange arrow): pointing to action nodes that interact with environment
  "Planning" (green arrow): pointing to the search/selection process
  "Self-Reflection" (purple arrow): pointing to reflection feedback loop
  "External Memory" (red arrow): pointing to a memory store

Below the tree: "Environment" box with bidirectional arrows

Side panel listing the limitations of prior methods:
  "CoT/ToT: reasoning but no acting" ✗
  "ReAct: acting but no search" ✗
  "RAP: search but no reflection" ✗
  "Reflexion: reflection but no planning" ✗
  "LATS: ALL FIVE capabilities" ✓ (highlighted in green)

Clean academic diagram style.
```

### Slide 38: LATS — Comparison Table
```
Create a clean academic comparison table for an academic lecture, white background, 16:9 format.

A table with 7 rows and 6 columns:

Header row (blue #4285F4 background, white text):
| Method | Reasoning | Acting | Planning | Reflection | Memory |

Data rows:
| CoT        | ✓ | ✗ | ✗ | ✗ | ✗ |
| ReAct      | ✓ | ✓ | ✗ | ✗ | ✗ |
| ToT        | ✓ | ✗ | ✓ | ✗ | ✗ |
| RAP        | ✓ | ✗ | ✓ | ✗ | ✗ |
| Reflexion  | ✓ | ✓ | ✗ | ✓ | ✓ |
| LATS       | ✓ | ✓ | ✓ | ✓ | ✓ | ← highlighted row (green background)

The LATS row should be prominently highlighted with green (#0F9D58) background and bold text.
All checkmarks (✓) in green, all X marks (✗) in red/gray.
Clean table design with alternating row colors (white and very light gray).
Caption below: "LATS is the only framework that achieves all five agent capabilities."
```

### Slide 39: LATS — Algorithm
```
Create a detailed LATS algorithm flow diagram for an academic lecture, white background, 16:9 format.

Show a circular/iterative process with 6 operations:

1. "Selection" — Select most promising node in the tree (UCT)
   Icon: magnifying glass on tree node

2. "Expansion" — LLM generates candidate actions
   Icon: node splitting into children

3. "Evaluation" — LLM scores the new state
   Icon: star rating / score

4. "Simulation" — Roll out to estimate future value
   Icon: dashed path forward

5. "Backpropagation" — Update values up the tree
   Icon: upward arrows

6. "Reflection" — If failed, generate verbal critique and store in memory
   Icon: thought bubble / brain

Arrange in a circle with arrows flowing clockwise between steps.
In the center: "Environment" box that interacts with steps 2, 3, and 6.
Green (#0F9D58) accent color. Professional academic style.
```

### Slide 40: LATS — Results & Transition
```
Create an academic results visualization for LATS, white background, 16:9 format.

Three benchmark result cards:

Card 1 — "HotPotQA (Multi-hop QA)":
  Progressive bars:
  "ReAct: 30%" (small orange bar)
  "Reflexion: 40%" (medium bar)
  "LATS: 53%" (large green bar)
  Arrow showing progression

Card 2 — "HumanEval (Code Generation)":
  "CoT: 82.9%" → "LATS: 94.4%" (near perfect!)
  Visual: progress bar nearly full

Card 3 — "WebShop (Web Navigation)":
  "ReAct: 56.1%" → "LATS: 75.9%"
  Big improvement arrow

Bottom: "Key: Search + Acting + Reflection synergistically outperform each alone"
Green transition box: "⟶ LATS uses trees. But what about MERGING results from different branches? NEXT: GoT generalizes to arbitrary graphs."
```

### Slide 41: Graph of Thoughts — Core Idea
```
Create an academic diagram showing the Graph of Thoughts framework, white background, 16:9 format.

The iconic topology progression — 5 diagrams left to right:

1. "IO": Input → Output (single arrow)
2. "CoT": Chain of 4 nodes
3. "CoT-SC": Three parallel chains merging to vote
4. "ToT": Tree with branching and pruning
5. "GoT" (highlighted, green border, larger):
   An arbitrary directed graph where:
   - Some nodes branch (Generation)
   - Some nodes merge (Aggregation)
   - Some nodes loop back (Refinement)
   - The graph has no fixed structure

Three transformation labels on the GoT diagram:
  "Aggregation: merge multiple partial solutions"
  "Refinement: improve an existing thought"
  "Generation: branch into new paths"

Arrow below: "IO → CoT → CoT-SC → ToT → GoT: each step adds structural capability"
Annotation: "GoT enables operations that trees cannot: merging branches"
```

### Slide 42: GoT — Architecture
```
Create an academic architecture diagram for Graph of Thoughts, white background, 16:9 format.

Four-component architecture:

Show four labeled boxes arranged in a 2x2 grid:

Top-left: "G — Graph" (green box)
  Visual: Small graph with nodes and directed edges
  "Vertices = thoughts, Edges = dependencies"

Top-right: "T — Transformations" (green box)
  Three sub-operations:
  "Aggregate" (two nodes merging icon)
  "Refine" (node with circular arrow)
  "Generate" (node splitting icon)

Bottom-left: "E — Evaluator" (green box)
  Visual: Node with score badge
  "Scores thought quality"

Bottom-right: "R — Ranker" (green box)
  Visual: Podium / ranking bars
  "Selects best output path"

Center: "GoT = (G, T, E, R)" in bold text

Below: "Graph of Operations (GoO): user defines a static execution plan — reusable across instances"
```

### Slide 43: GoT — Results
```
Create an academic results visualization for Graph of Thoughts, white background, 16:9 format.

Two main result panels:

Panel 1 — "Sorting (32 elements)":
  Bar chart:
  "IO": baseline (gray)
  "ToT": +26% improvement (light green)
  "GoT": +62% improvement (dark green, much taller)
  "GoT cost": 1.6× less than ToT
  Annotation: "Better quality AND lower cost"

Panel 2 — "Set Intersection":
  "ToT: +22%" vs "GoT: +45%"
  Visual: Two overlapping circles (Venn diagram) showing intersection
  Label: "Aggregation is the key: combine partial solutions from subsets"

Bottom insight box:
"When the task benefits from MERGING intermediate results, graphs dramatically outperform trees"
```

### Slide 44: Full Topology Evolution — Transition
```
Create a slide showing the complete evolution of reasoning topology with a transition, white background, 16:9 format.

Horizontal timeline with increasing complexity:

IO → CoT → CoT-SC → ToT → GoT

Each method shown with its topology (small icon):
  IO: single arrow
  CoT: chain
  CoT-SC: parallel chains + vote
  ToT: tree + pruning
  GoT: arbitrary graph

Below each: the key new capability added:
  CoT: "Chain reasoning"
  CoT-SC: "Multiple samples"
  ToT: "Tree search + evaluation"
  GoT: "Aggregation + refinement"

Open question box (yellow/warning):
"These methods improve TOPOLOGY. But can LLMs actually PLAN reliably?"

Green transition box:
"⟶ Two critical analyses give a sobering answer. NEXT: Planning Survey + Planning Abilities."
```

### Slide 45: Planning Survey — Taxonomy
```
Create an academic taxonomy diagram for LLM agent planning strategies, white background, 16:9 format.

A hierarchical taxonomy with "LLM Agent Planning" at the top, branching into 5 strategies:

1. "Task Decomposition" (blue icon: puzzle splitting)
   Examples: "Least-to-Most, HuggingGPT"

2. "Multi-Plan Selection" (green icon: multiple paths)
   Examples: "ToT, RAP, GoT"

3. "External Planner-Aided" (purple icon: gear/tool)
   Examples: "LLM→PDDL→Classical Planner"

4. "Reflection & Refinement" (orange icon: loop arrow)
   Examples: "Reflexion, LATS"

5. "Memory-Augmented" (red icon: database)
   Examples: "LATS, Voyager"

Each branch connects to a box with examples and a brief description.
Clean hierarchical tree layout. Professional academic style.
```

### Slide 46: Mapping Lecture Papers to Taxonomy
```
Create a mapping diagram connecting our 15 lecture papers to the 5 planning strategies, white background, 16:9 format.

Left side — 5 strategy boxes (from slide 45):
1. Task Decomposition
2. Multi-Plan Selection
3. External Planner-Aided
4. Reflection & Refinement
5. Memory-Augmented

Right side — Paper boxes with connecting lines:

Task Decomposition ← "Least-to-Most", "Plan-and-Solve"
Multi-Plan Selection ← "Self-Consistency", "ToT", "RAP", "GoT"
External Planner ← "(Not covered in depth)"
Reflection ← "Reflexion", "LATS"
Memory ← "LATS", "Reflexion"

Lines connecting related items. Some papers connect to multiple categories (e.g., LATS connects to three).
Color-coded by original paper section (blue/green/orange).
```

### Slide 47: Planning Survey — Benchmarks
```
Create an academic benchmark overview for planning evaluation, white background, 16:9 format.

Three categories of benchmarks displayed as card groups:

Category 1 — "Interactive Benchmarks" (green cards):
  "ALFWorld: household tasks in text"
  "WebShop: online shopping navigation"
  "ScienceWorld: scientific experiments"
  Each with a small representative icon

Category 2 — "QA / Reasoning Benchmarks" (blue cards):
  "HotPotQA: multi-hop question answering"
  "FEVER: fact verification"
  "GSM8K / MATH: mathematical reasoning"

Category 3 — "Code Benchmarks" (purple cards):
  "HumanEval: code generation"
  "MBPP: basic Python programming"

Clean card-based layout with categories clearly separated.
```

### Slide 48: Can LLMs Really Plan?
```
Create a dramatic academic slide about LLM planning failures, white background, 16:9 format.

Central dramatic statistic:
Very large text: "~3%" in bold red/dark
Subtitle: "Autonomous Planning Success Rate (GPT-4)"
Source: "Valmeekam et al., NeurIPS 2023"

Below, two contrasting panels:

LEFT — "The Bad News" (red tint):
"When LLMs must generate complete plans from scratch, they fail"
Visual: Blocksworld puzzle with confused robot icon

RIGHT — "The Good News" (green tint):
"Plans are REPAIRABLE"
"LLMs can identify errors in given plans: ~40% accuracy"
"Iterative correction improves plans with each feedback round"
Visual: Broken plan → feedback arrow → improved plan → ✓

Bottom insight:
"This explains why ReAct works: environment feedback CORRECTS planning errors"
```

### Slide 49: Planning Abilities — Implications
```
Create an academic slide about the planning tension and its resolution, white background, 16:9 format.

Three sections:

Section 1 — "The Key Tension" (two opposing boxes):
LEFT box (green): "ReAct says: LLMs plan well (when grounded)"
RIGHT box (red): "Valmeekam says: LLMs cannot plan (autonomous)"
VS symbol between them

Section 2 — "Resolution" (centered, blue highlight):
"LLMs are not autonomous planners — they are COLLABORATORS"
"Environment feedback, tool use, and verification correct their errors"
Visual: LLM icon + Environment icon = Working system ✓

Section 3 — "Design Principle" (prominent box):
"NEVER let LLMs plan in isolation — always provide feedback loops"
"The best architectures combine LLM generation with external verification"

Orange transition box:
"⟶ Part 2 shows LLMs struggle alone but excel when grounded. Part 3: how to ground reasoning."
```

### Slide 50: Part 2 Synthesis
```
Create a 2D synthesis scatter plot for Part 2, white background, 16:9 format.

Axes:
  X-axis: "Search Complexity" (Linear → Tree → Graph)
  Y-axis: "Environment Interaction" (None → Partial → Full)

Papers plotted:
  "PS" (green dot): low complexity, no interaction
  "ToT" (green dot): tree complexity, no interaction
  "GoT" (green dot): graph complexity, no interaction
  "RAP" (blue dot): tree complexity, no interaction
  "LATS" (green dot): tree complexity, full interaction

At the top, a red warning banner:
"⚠ Warning (Valmeekam): LLMs alone achieve ~3% on autonomous planning"

This shows LATS is the only method in the upper-right quadrant (high capability + environment).
Clean scatter plot with labeled axes and paper labels.
```

### Slide 51: From Thinking to Acting
```
Create a transition slide from Part 2 to Part 3, white background, 16:9 format.

Five numbered key findings from Part 2:
1. "ToT: tree search unlocks problems where CoT fails (4% → 74%)" (green checkmark)
2. "PS: even a prompt-level plan matches few-shot performance" (green checkmark)
3. "LATS: combines ALL agent capabilities" (green checkmark)
4. "GoT: graphs enable merging — outperforms trees" (green checkmark)
5. "But LLMs alone: ~3% autonomous planning success" (red warning)

Central question: "Reasoning alone is not enough. Agents must ACT in the world."

Visual: Brain icon (reasoning) + arrow → Gear icon (acting) + arrow → Globe icon (real world)

Orange transition box:
"⟶ Part 3: How do we connect reasoning to the real world? ReAct, Reflexion, FireAct, Scaling."
```

---

## PART 3: GROUNDED ACTING (Slides 52-68)

### Slide 52: Section Header
```
Create a section header slide for an academic lecture, 16:9 format.
Large text: "Part 3: Grounded Acting & ReAct" in bold black.
Subtitle: "Connecting reasoning to the real world"
Orange (#F4B400) accent bar or geometric element on the left side.
White/light gray background.
```

### Slide 53: The Agent Evolution
```
Create an agent evolution timeline diagram, white background, 16:9 format.

Four stages connected by arrows, left to right:

Stage 1 — "ReAct" (orange #F4B400):
  Header: "The Basic Agent"
  Visual: Simple loop: Thought → Action → Observation → Thought
  Description: "Thought-Action-Observation loop"

Stage 2 — "Reflexion" (darker orange #E65C00):
  Header: "The Learning Agent"
  Visual: Same loop + additional "Self-Critique" and "Memory" nodes
  Description: "+ Self-critique + Episodic memory"

Stage 3 — "FireAct" (dark orange #BF360C):
  Header: "The Efficient Agent"
  Visual: Data funnel → Model fine-tuning icon
  Description: "+ Fine-tuning on trajectories"

Stage 4 — "Scaling" (red #DB4437):
  Header: "The System"
  Visual: Multiple agent icons connected in a network
  Description: "When to use multiple agents?"

Large right-pointing arrows between each stage.
Bottom label: "Each step adds capability: grounding → learning → training → system design"
```

### Slide 54: ReAct — Core Idea
```
Create the iconic ReAct comparison diagram, white background, 16:9 format.

Four panels showing different approaches to a question:

Panel 1 — "Standard Prompting" (gray):
  Question → Answer (direct, often wrong)

Panel 2 — "Chain-of-Thought (Reasoning only)" (blue):
  Question → Thought 1 → Thought 2 → Thought 3 → Answer
  Problem label: "56% hallucination in failure cases"
  Red warning icon

Panel 3 — "Act only" (gray):
  Question → Action → Obs → Action → Obs → ... (repetitive)
  Problem label: "Repetitive, goalless actions"
  Red warning icon

Panel 4 — "ReAct" (orange, highlighted, larger):
  Question →
  Thought 1: "I need to search for X" →
  Action 1: search[X] →
  Observation 1: [search results] →
  Thought 2: "The results show Y, so..." →
  Action 2: lookup[Y] →
  Observation 2: [details] →
  Thought 3: "Now I can answer" →
  Answer ✓

  Label: "0% hallucination — environment keeps agent grounded"
  Green checkmark

ReAct panel should be the largest and most prominent.
```

### Slide 55: ReAct — Method
```
Create an academic diagram showing the ReAct method, white background, 16:9 format.

Central diagram — "The ReAct Loop":
A circular flow diagram:
  [Thought] → [Action] → [Environment] → [Observation] → back to [Thought]

Each node in a different color:
  Thought: blue bubble (reasoning trace)
  Action: orange box (tool call)
  Environment: gray box (external world)
  Observation: green box (result from environment)

Around the loop, annotations:
  Thought→Action: "Agent decides what to do"
  Action→Environment: "Agent executes tool call"
  Environment→Observation: "World returns feedback"
  Observation→Thought: "Agent reasons about result"

Side note: "â = Action ∪ Thought"
"Thoughts don't change environment but update reasoning"

Bottom: "Composable: ReAct + Self-Consistency = sample multiple trajectories, vote → best results"
```

### Slide 56: ReAct — Results
```
Create an academic results visualization for ReAct, white background, 16:9 format.

Four benchmark cards arranged in a 2×2 grid:

Card 1 — "HotPotQA" (Knowledge QA):
  Act: 25.7% → ReAct: 27.4% → ReAct+SC: 35.1%
  Progressive bar chart

Card 2 — "FEVER" (Fact Verification):
  Act: 55.7% → ReAct: 60.9% → ReAct+SC: 64.6%
  Progressive bar chart

Card 3 — "ALFWorld" (Household Tasks):
  BUTLER: 10% → ReAct: 71%
  MASSIVE improvement bar with "7× improvement!" label

Card 4 — "WebShop" (Online Shopping):
  IL+RL: 29.1% → ReAct: 40.0%
  Improvement bar

Bottom highlight box:
"Error Analysis: CoT failure has 56% hallucination. ReAct failure has 0% hallucination."
Visual: CoT with red "56% hallucinated" vs ReAct with green "0% hallucinated"
```

### Slide 57: ReAct — Transition
```
Create a transition slide from ReAct to Reflexion, white background, 16:9 format.

Impact section:
"The most widely adopted agent architecture"
Logos/names: "LangChain, AutoGPT, BabyAGI, ChatGPT Plugins, Claude Tools"
"5000+ citations — defined what an LLM agent looks like"

Limitations (yellow box):
"No learning from past mistakes — each episode starts fresh"
"Performance degrades over long horizons"
Visual: An agent making the same mistake repeatedly (loop icon)

Orange transition box:
"⟶ ReAct doesn't learn from failures. What if the agent could REFLECT on its mistakes? NEXT: Reflexion."
```

### Slide 58: Reflexion — Core Idea
```
Create an academic diagram showing the Reflexion architecture, white background, 16:9 format.

Three-component architecture displayed centrally:

Component 1 — "Actor" (orange box):
  Visual: Robot/agent icon
  "Generates trajectories using ReAct"

Component 2 — "Evaluator" (blue box):
  Visual: Checkmark/X icon
  "Assesses: success or failure?"

Component 3 — "Self-Reflection" (purple box):
  Visual: Thought bubble icon
  "Generates verbal critique of failures"

These three connect to a central "Memory" database:
  "Stores reflections for future attempts"

Flow:
  Actor → attempts task → Evaluator checks
  If failed: → Self-Reflection generates critique → stored in Memory
  Next attempt: Memory provides critique in prompt → Actor improves

Circular flow showing iterative improvement.
Key label: "No weight updates — learning through prompting only"
```

### Slide 59: Reflexion — Loop
```
Create a step-by-step Reflexion loop diagram, white background, 16:9 format.

5 sequential steps in a circular flow:

Step 1: "Actor attempts the task (ReAct)" — agent icon running
Step 2: "Evaluator checks: success or failure?" — thumbs up/down
Step 3: "If failed: Self-Reflection generates critique" — thought bubble
  Example quote: "I searched for X but should have searched for Y because..."
Step 4: "Critique stored in episodic memory" — database icon with text
Step 5: "Next attempt includes critique in prompt" — agent icon with memory

Arrow from step 5 back to step 1 showing the loop.

Side panel — Key Properties:
• "No gradient updates — purely prompt-based"
• "Memory grows with each trial"
• "Self-critique > scalar reward signals"

Convergence note: "Most tasks solved within 3-5 reflection rounds"
```

### Slide 60: Reflexion — Results
```
Create an academic results visualization for Reflexion, white background, 16:9 format.

Three dramatic result cards:

Card 1 — "ALFWorld (Household Tasks)":
  "ReAct: 75% → Reflexion: 97%"
  Visual: progress bar going from 75% to near-full 97%
  "Near-perfect with just 2-3 reflection trials"

Card 2 — "HotPotQA (Multi-hop QA)":
  "ReAct: 30% → Reflexion: 40% → Reflexion+EPM: 51%"
  Three progressive bars
  "EPM = Episodic Planning Memory"

Card 3 — "HumanEval (Code Generation)":
  "GPT-4 (pass@1): 80.1% → Reflexion: 91.0%"
  "State-of-the-art at time of publication"
  Star icon for SotA

Convergence graph inset:
  X-axis: "Reflection round (1, 2, 3, 4, 5)"
  Y-axis: "Success rate"
  Curve showing rapid improvement then saturation
```

### Slide 61: Reflexion — Transition
```
Create a transition slide from Reflexion to FireAct, white background, 16:9 format.

Contribution:
"Pioneered 'verbal learning' — agents improve without retraining"
"Natural language memory as a viable learning mechanism"
"Connects to human metacognition"

Limitations (yellow box):
"Memory is session-specific — doesn't persist across tasks"
"Self-critique quality depends on base model"
"Cannot learn fundamentally NEW skills"

Orange transition box:
"⟶ Reflexion improves through prompting. Can we go further and TRAIN better agents? NEXT: FireAct fine-tunes on agent trajectories."
```

### Slide 62: FireAct — Core Idea
```
Create an academic diagram showing the FireAct training pipeline, white background, 16:9 format.

Three-stage pipeline flowing left to right:

Stage 1 — "Generate Trajectories" (blue):
  GPT-4 icon generating multiple trajectory types:
  - "ReAct trajectory" (orange line)
  - "CoT trajectory" (blue line)
  - "Reflexion trajectory" (purple line)
  Label: "Multi-method generation"

Stage 2 — "Filter" (green):
  Funnel icon
  "Keep only SUCCESSFUL trajectories"
  Some trajectories pass through (✓), some are discarded (✗)

Stage 3 — "Fine-tune" (orange):
  Smaller model icon (Llama-2-13B)
  "Train on diverse trajectory mixture"
  Arrow showing knowledge transfer from GPT-4 to smaller model

Key finding box at bottom:
"Method DIVERSITY in training data matters more than volume"
"Mixed trajectories > any single method"
```

### Slide 63: FireAct — Results
```
Create an academic results visualization for FireAct, white background, 16:9 format.

Main results panel — "HotPotQA Performance":
Bar chart:
  "GPT-3.5 + ReAct prompting": 27.4% (gray bar)
  "Llama-2-13B + FireAct": 31.8% (orange bar, taller)
  "GPT-4 + ReAct prompting": 35.1% (reference line)
  Annotation: "13B fine-tuned > 175B prompted!"

Efficiency panel:
  "70% reduction in inference time"
  Visual: Two clocks — slow GPT-3.5 prompting vs fast FireAct fine-tuned
  "Smaller model = cheaper, faster, more deployable"

Key Finding panel:
  Three training configurations compared:
  "ReAct-only training": baseline
  "CoT-only training": similar
  "MIXED training (ReAct+CoT+Reflexion)": BEST ← highlighted
  Label: "Trajectory diversity > trajectory volume"
```

### Slide 64: FireAct — Transition
```
Create a transition slide from FireAct to Scaling Agents, white background, 16:9 format.

Key insight (prominent box):
"The prompting → training pipeline for agent improvement"
Visual flow: "Prompt engineering → Trajectory generation → Fine-tuning → Deployment"

Significance:
"First systematic study of fine-tuning for language AGENTS"
"Small models can match large prompted models"

Orange transition box:
"⟶ FireAct improves individual agents. But should we use ONE strong agent or MANY? NEXT: Scaling Agent Systems."
```

### Slide 65: Scaling Agents — Core Finding
```
Create a dramatic academic slide about multi-agent scaling, white background, 16:9 format.

Central dramatic contrast:

LEFT side (green, positive):
Large "+81%" text
"Multi-agent CAN improve by +81%"
Visual: Multiple agents collaborating happily
"When: tool-heavy tasks, weak models"

RIGHT side (red, negative):
Large "−70%" text
"Multi-agent CAN hurt by −70%"
Visual: Multiple agents interfering with each other
"When: knowledge tasks, strong models"

Center: "Benefits are TASK-CONTINGENT"

Below: Study overview in a clean box:
"5 architectures × 3 model families × 5 benchmarks"
"Gemini, GPT, Claude | GSM8K, MATH, GPQA, HumanEval, MBPP"
```

### Slide 66: Five Agent Architectures
```
Create a diagram showing 5 canonical agent system architectures, white background, 16:9 format.

Five architecture diagrams arranged horizontally:

1. "SAS" (Single Agent System):
   One large agent box connected to tools
   Simplest architecture

2. "MAS-Independent":
   Multiple agents working in parallel, no communication
   Each has own tools, results merged at end

3. "MAS-Decentralized":
   Multiple agents in a chain/ring, passing messages between neighbors
   No central coordinator

4. "MAS-Centralized":
   One coordinator agent at top, multiple worker agents below
   Hub-and-spoke topology

5. "MAS-Hybrid":
   Combination: some agents centralized under coordinator, others peer-to-peer
   Most complex topology

Each diagram uses simple boxes and arrows.
Color gradient from simple (light) to complex (dark).
Labels below each with the architecture name.
```

### Slide 67: Three Scaling Principles
```
Create an academic slide presenting three fundamental scaling principles, white background, 16:9 format.

Three principle cards:

Card 1 — "Tool-Coordination Trade-off" (orange border):
  Split visual:
  Left: "Tool-heavy tasks: MAS helps (parallelize tool use)" ✓
  Right: "Knowledge tasks: MAS hurts (fragments reasoning)" ✗

Card 2 — "Capability Saturation" (orange border):
  Visual: Two model icons:
  "Weak models: benefit MORE from multi-agent" (big upward arrow)
  "Strong models (GPT-4): gain LESS from scaling" (small/flat arrow)

Card 3 — "Error Amplification via Topology" (orange border):
  Three mini architecture diagrams:
  "Centralized: single point of failure" (X on coordinator)
  "Decentralized: error propagation chain" (X spreading through chain)
  "Hybrid: balances failure modes" (balanced icon)

Clean card-based layout with clear icons and labels.
```

### Slide 68: When to Use MAS
```
Create a decision framework diagram for multi-agent systems, white background, 16:9 format.

Decision tree or checklist:

"USE multi-agent when:" (green section)
✓ "Task requires heavy tool use (code, search)"
✓ "Individual model is weak"
✓ "Task is naturally parallelizable"

"AVOID multi-agent when:" (red section)
✗ "Task requires deep, coherent reasoning"
✗ "Individual model is already strong (GPT-4)"
✗ "Communication overhead > collaboration benefit"

Bottom box (highlighted):
"Decision framework achieves 87% prediction accuracy"
"'More agents' is NOT a universal solution — architecture must match task"
```

---

## PART 4: SYNTHESIS & RESEARCH DIRECTIONS (Slides 69-78)

### Slide 69: Grand Synthesis
```
Create a network graph showing how all 15 papers connect, white background, 16:9 format.

13 paper nodes as colored circles/boxes, arranged to show influence relationships:

Blue cluster (Internal Reasoning):
  "CoT" (central, largest blue node) → arrows to: SC, LtM, ToT, ReAct
  "SC", "LtM", "RAP", "TTC" (blue nodes around CoT)

Green cluster (Search & Planning):
  "ToT" → arrows to: LATS, GoT, RAP
  "PS", "LATS", "GoT" (green nodes)

Orange cluster (Acting):
  "ReAct" → arrows to: Reflexion, LATS
  "Reflexion" → "FireAct"
  "Scaling" (standalone, red)

Meta-analysis nodes:
  "TTC" meta-analyzes RAP, ToT, SC (dashed lines)
  "Planning Survey" meta-analyzes all search methods
  "Planning Abilities" critiques all planning methods
  "Scaling Agents" meta-analyzes single vs multi

Year labels on each node. Arrows showing influence direction.
Color coding by section. Professional network visualization.
```

### Slide 70: Three Key Tensions
```
Create an academic slide presenting three unresolved tensions in the field, white background, 16:9 format.

Three tension cards with VS imagery:

Tension 1 — "Can LLMs Plan?":
  "Valmeekam: NO (~3%)" vs "ReAct/LATS: YES (when grounded)"
  Resolution: "LLMs are collaborators, not autonomous planners"

Tension 2 — "Scale Model or Scale Inference?":
  "Traditional: bigger model" vs "TTC: more compute at inference"
  Resolution: "Optimal strategy depends on problem difficulty"

Tension 3 — "One Agent or Many?":
  "Intuition: more is better" vs "Reality: MAS can hurt −70%"
  Resolution: "Architecture must match task structure"

Each tension as a card with two opposing sides and a resolution below.
VS symbol or scale/balance icon between opposing views.
Professional academic debate style.
```

### Slide 71: Trend 1 — Test-Time Compute
```
Create a research trends slide about test-time compute scaling, white background, 16:9 format.

Title: "Trend 1: Test-Time Compute as the New Scaling Axis"

Visual: A paradigm shift diagram:
  Old paradigm (crossed out, gray): "Train bigger → Better results"
  New paradigm (highlighted, purple): "Think longer → Better results"

Evidence timeline:
  2024: "Snell et al.: formal framework for compute-optimal allocation"
  2024-25: "OpenAI o1/o3: massive test-time reasoning"
  2025: "DeepSeek-R1: open-weight inference scaling"

Open questions (question mark icons):
  "How to build adaptive fast/slow thinking?"
  "Theoretical limits of test-time scaling?"
  "Can verifiers be more reliable than generators?"
```

### Slide 72: Trend 2 — Prompting to Training
```
Create a research trends slide about the evolution from prompting to training, white background, 16:9 format.

Title: "Trend 2: From Prompting to Training for Agents"

Evolution timeline (horizontal):
  2022-23: "Prompt Engineering" (CoT, ReAct, Reflexion icons)
  2024: "Trajectory Fine-tuning" (FireAct icon)
  2025+: "RLHF/RLAIF for Agents" (future icon)

Emerging approaches (three boxes):
  "Agent Distillation": GPT-4 → smaller agent
  "Online Learning": agents improve during deployment
  "Multi-task Training": one model, many tools

Challenge box (yellow):
  "Training data = trajectories are expensive to generate"
  "How to learn from imperfect demonstrations?"
```

### Slide 73: Trend 3 — Hybrid Architectures
```
Create a research trends slide about hybrid architectures, white background, 16:9 format.

Title: "Trend 3: Hybrid Architectures"

Central diagram showing three hybrid patterns:

Pattern 1 — "Neuro-Symbolic":
  LLM → generates PDDL → Classical Planner → guaranteed-correct plan
  Visual: Neural network icon → formal spec → gear icon → checkmark

Pattern 2 — "LLM + Code Interpreter":
  LLM generates code → executes → verifies results
  Visual: Brain → code icon → terminal → verification

Pattern 3 — "LLM + Retrieval (RAG)":
  LLM reasons → retrieves facts → grounds in knowledge
  Visual: Brain → database → grounded answer

Bottom insight: "Pure LLM planning (~3% success) vs Hybrid (~90%+ accuracy)"
```

### Slide 74: Trend 4 — Self-Improving Agents
```
Create a research trends slide about self-improving agents, white background, 16:9 format.

Title: "Trend 4: Self-Improving Agents"

Evolution diagram:
  "Reflexion (2023)" → "CLIN (2024)" → "Future: Continual Agents"
  Each step adds more persistent learning capability

Key challenges (three warning cards):
  "Long-horizon memory: store and retrieve relevant experience"
  "Catastrophic forgetting: new learning shouldn't erase old skills"
  "Safety: self-improving agents must not learn harmful behaviors"

Vision box (purple highlight):
  "Agents that get better with every interaction — like human experts"
  "'The best agent is not the biggest model, but the one with the most experience'"
```

### Slide 75: Open Problems
```
Create an academic slide presenting open problems in Agentic AI, white background, 16:9 format.

Four open problem cards in a 2×2 grid:

Card 1 — "Reliability & Safety" (red border):
  "How to ensure agents don't take harmful actions?"
  "Hallucination → incorrect tool calls → cascading failures"
  Icon: Shield with question mark

Card 2 — "Evaluation" (blue border):
  "Current benchmarks test narrow tasks"
  "Need: long-horizon, multi-domain, open-ended evaluation"
  Icon: Measuring ruler with question mark

Card 3 — "Cost-Performance Tradeoffs" (green border):
  "Test-time compute: diminishing returns on hard problems"
  "Multi-agent: overhead can exceed benefits"
  Icon: Balance scale

Card 4 — "Grounding & Embodiment" (orange border):
  "Moving from text to physical world"
  "Sim-to-real transfer for embodied agents"
  Icon: Robot in physical world

Professional 2×2 grid layout with clean borders.
```

### Slide 76: Discussion Questions
```
Create an academic discussion slide with 5 thought-provoking questions, white background, 16:9 format.

Five numbered questions with topic headers:

1. "The Planning Paradox":
   "If LLMs achieve only 3% on autonomous planning, should we abandon LLM-based planning?"

2. "The Scaling Question":
   "Is training ever-larger models the right approach, or should we invest in inference algorithms?"

3. "Architecture Design":
   "For a coding assistant, which combination of methods would you use and why?"

4. "The Multi-Agent Debate":
   "Under what conditions should you choose multi-agent over single-agent?"

5. "Self-Improvement Safety":
   "How should we constrain self-improving agents to prevent unsafe behaviors?"

Each question on a light-colored card with a number badge. Clean academic discussion style.
```

### Slide 77: Reading List
```
Create an academic reading list slide, white background, 16:9 format.

Title: "Reading List: W2 Papers"

Three sections with colored headers:

"Part 1: Internal Reasoning" (blue header):
[1] Wei et al. (2022). Chain-of-Thought Prompting. NeurIPS
[2] Wang et al. (2023). Self-Consistency. ICLR
[3] Zhou et al. (2023). Least-to-Most Prompting. ICLR
[4] Hao et al. (2023). RAP. EMNLP
[5] Snell et al. (2025). Test-Time Compute. ICML

"Part 2: Structured Search & Planning" (green header):
[6] Yao et al. (2023). Tree of Thoughts. NeurIPS
[7] Wang et al. (2023). Plan-and-Solve. ACL
[8] Zhou et al. (2024). LATS. ICML
[9] Besta et al. (2024). Graph of Thoughts. AAAI
[10] Huang et al. (2024). Planning Survey. arXiv
[11] Valmeekam et al. (2023). Planning Abilities. NeurIPS

"Part 3: Grounded Acting" (orange header):
[12] Yao et al. (2023). ReAct. ICLR
[13] Shinn et al. (2023). Reflexion. NeurIPS
[14] Chen et al. (2023). FireAct. arXiv
[15] Kim et al. (2025). Scaling Agents. Google Research

Clean reference list with section colors and numbered entries.
```

### Slide 78: Thank You
```
Create a clean closing slide for an academic lecture, 16:9 format.
Large centered text: "Thank You" in bold black.
Subtitle: "AI 89900 — Agentic AI | KAIST Spring 2026"
Subtle geometric accent element at the bottom.
White background. Minimal, professional.
```
