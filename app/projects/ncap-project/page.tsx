import Latex from "react-latex-next"

import { ArticleFigure, ArticleVideo, DistillArticle } from "@/components/distill-article"

const toc = [
  { id: "background", title: "Background" },
  { id: "experimental-design", title: "Experimental design" },
  { id: "sensor-ablation-patterns", title: "Sensor ablation patterns", depth: 3 as const },
  { id: "damage-scenarios", title: "Damage scenarios", depth: 3 as const },
  { id: "key-results", title: "Key results" },
  { id: "deep-learning-insights", title: "Deep learning insights" },
  { id: "sparse-connectivity", title: "Sparse connectivity", depth: 3 as const },
  { id: "reinforcement-learning", title: "Reinforcement learning", depth: 3 as const },
  { id: "future-directions", title: "Future directions" },
  { id: "conclusion", title: "Conclusion" },
]

export default function NeuroplasticityProject() {
  return (
    <DistillArticle
      title="Exploring Neuroplasticity in Bio-Inspired Neural Networks"
      published="August 2024"
      subtitle="A Neuromatch Academy project testing whether NCAP-style neural controllers can recover from sensor deprivation in continuous-control environments."
      hero={{
        src: "/optimized/thumbnails/ncap.webp",
        alt: "Watercolor illustration for the bio-inspired neural networks project",
        width: 400,
        height: 300,
      }}
      toc={toc}
    >
      <p>
        During Neuromatch Academy 2024, our team explored mechanisms of neuroplasticity in artificial neural networks.
        Drawing inspiration from the ability of <i>C. elegans</i> to recover from neural damage, we investigated whether
        bio-inspired neural architectures could exhibit similar adaptive behavior when sensors are removed.
      </p>

      <p>
        The work builds on the Neural Circuit Architectural Priors (NCAP) framework introduced by Bhattasali et al.
        (2022). Our central question was whether these networks can display neuroplasticity-like behavior after damage.
      </p>

      <ArticleVideo src="https://www.youtube.com/embed/316MRornFT4?si=OAat_hotoWX5mAbO" title="NCAP robot in action" />

      <h2 id="background">Background: the NCAP architecture</h2>
      <p>
        The NCAP architecture sits at the intersection of neuroscience and artificial intelligence. It translates the
        well-mapped neural circuits of <i>C. elegans</i>, one of the simplest organisms with a complete connectome,
        into a discrete-time artificial neural network.
      </p>

      <p>
        The architecture uses several biologically inspired constraints: repeated microcircuits for body segments,
        synapses constrained as excitatory or inhibitory, specialized units such as B neurons and oscillators, and
        aggressive weight sharing that leaves only four trainable parameters.
      </p>

      <ArticleFigure
        src="/optimized/articles/ncap-architecture.webp"
        alt="NCAP architecture diagram showing modular structure and neural connections"
        width={900}
        height={650}
        caption="NCAP maps a biologically inspired locomotion circuit into a compact neural control architecture."
      />

      <h2 id="experimental-design">Experimental design</h2>
      <p>We designed three categories of experiments to probe the network's adaptive capabilities.</p>

      <h3 id="sensor-ablation-patterns">Sensor ablation patterns</h3>
      <ul>
        <li>
          <strong>Alternating pattern:</strong> removing sensors 1, 3, 5, and so on.
        </li>
        <li>
          <strong>Sequential pattern:</strong> removing consecutive sensors such as 1, 2, 3.
        </li>
      </ul>

      <h3 id="damage-scenarios">Damage scenarios</h3>
      <ol>
        <li>
          <strong>Born without:</strong> networks trained from scratch with specific sensors permanently disabled.
        </li>
        <li>
          <strong>Removed at test:</strong> fully trained networks with sensors disabled only during evaluation.
        </li>
        <li>
          <strong>Damage and retrain:</strong> pre-trained networks damaged and then allowed to adapt through continued
          training.
        </li>
      </ol>

      <h2 id="key-results">Key results</h2>
      <div className="l-page">
        <Latex>{`$$\\begin{array}{|l|c|c|}
\\hline
\\textbf{Damage Scenario} & \\textbf{Test-Time Removal} & \\textbf{Retrained Performance} \\\\
\\hline
\\text{1,3,5} & 793 & 779 \\\\
\\text{1,3,5,7} & 678 & 711 \\\\
\\text{1,3,5,7,9} & 675 & 681 \\\\
\\text{1,3,5,7,9,11} & 637 & 650 \\\\
\\hline
\\end{array}$$`}</Latex>
      </div>

      <p>
        The experiments revealed meaningful differences between damage patterns. The alternating pattern degraded more
        gradually and showed signs of recovery under heavier damage, suggesting compensatory mechanisms. The sequential
        pattern produced a steeper performance drop and less evidence of adaptation.
      </p>

      <ArticleFigure
        src="/ncap_assets/evolution_alternating.webp"
        alt="Chart comparing test rewards across sensor deprivation scenarios"
        width={900}
        height={650}
        caption="Comparison of test rewards across sensor deprivation scenarios."
      />

      <h2 id="deep-learning-insights">Deep learning insights</h2>
      <h3 id="sparse-connectivity">Sparse connectivity as a feature</h3>
      <p>
        NCAP's extreme sparsity initially looks like a limitation. In these experiments, the constraint appears to help
        robustness. The forced modularity and local connectivity patterns create natural redundancy: when one module
        fails, others can partially compensate.
      </p>

      <h3 id="reinforcement-learning">Reinforcement learning considerations</h3>
      <p>
        The retraining experiments highlight an important RL principle: behavioral adaptation through policy
        modification. When sensors are damaged, the optimal policy changes. NCAP's modular structure allows local policy
        adjustments without fully forgetting the broader locomotion behavior. We used Proximal Policy Optimization
        (PPO) for training because of its stability and sample efficiency in continuous-control tasks.
      </p>

      <h2 id="future-directions">Implications and future directions</h2>
      <p>
        The findings suggest that neuroplasticity-like behavior in artificial networks may emerge not from complex
        learning rules alone, but from architectural constraints. This could inform more robust robotic controllers,
        adaptive prosthetics, and autonomous systems that must remain useful after sensor damage.
      </p>

      <p>
        Future work could explore dynamic architecture modification, multi-timescale adaptation, and larger morphologies
        such as quadrupeds or humanoid robots.
      </p>

      <h2 id="conclusion">Conclusion</h2>
      <p>
        This exploration shows that architectural design choices strongly influence a system's ability to adapt to
        damage. Despite its minimalist parameterization, NCAP displays resilience that emerges from its biological
        constraints. The project reinforces the value of combining neuroscience-inspired structure with modern
        reinforcement learning.
      </p>

      <p>
        <em>
          This project was completed as part of Neuromatch Academy 2024. Special thanks to the NCAP paper authors for
          providing the foundation for this exploration.
        </em>
      </p>
    </DistillArticle>
  )
}
