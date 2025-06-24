import Image from "next/image"
import Link from "next/link"
import { Github } from "lucide-react"
import Latex from "react-latex-next"

export default function NeuroplasticityProject() {
  return (
    <div className="min-h-screen bg-white font-serif">
      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-16 lg:px-32 py-4 md:py-6">
        <Link href="/" className="text-2xl font-normal hover:text-red-700 transition-colors duration-500 ease-out">
          LC
        </Link>
        <nav className="flex gap-8">
          <Link href="/" className="text-lg hover:opacity-70 transition-opacity">
            home
          </Link>
          <Link href="/projects" className="text-lg hover:opacity-70 transition-opacity">
            projects
          </Link>
          <Link
            href="https://drive.google.com/file/d/1qLjER70wPDLwe5QaCSDHcAfO04wKwCjq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:opacity-70 transition-opacity"
          >
            cv
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-6 md:px-16 lg:px-32 py-8 md:py-12 mx-4 md:mx-20">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-5xl font-normal text-red-700 text-center mb-6 md:mb-8 leading-tight">
          Exploring Neuroplasticity in Bio-Inspired Neural Networks
        </h1>



        {/* Content Section */}
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            {/* Floating Image */}
            <div className="block md:float-left mb-6 md:mb-4 md:mr-6 text-center md:text-left">
              <div className="w-48 md:w-[280px] mx-auto md:mx-0">
                <Image
                  src="/ncap-icon.png"
                  alt="Watercolor illustration representing neural networks and adaptation"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-base md:text-lg leading-relaxed">
              <p className="mx-0 sm:text-left md:text-justify lg:text-justify text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
                During the 2024 Neuromatch Academy, our team embarked on an ambitious project to explore the mechanisms of neuroplasticity in artificial neural networks. Drawing inspiration from the remarkable ability of <i>C. elegans</i> to recover from neural damage, we investigated whether bio-inspired neural architectures could exhibit similar adaptive capabilities when subjected to sensor deprivation. Our work builds upon the Neural Circuit Architectural Priors (NCAP) framework introduced by Bhattasali et al. (2022), extending it to explore a critical question: Can these networks exhibit neuroplasticity-like behaviors when damaged?
              </p>
              <div className="flex justify-center my-8">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/316MRornFT4?si=OAat_hotoWX5mAbO"
                  title="Robot in action"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
              <p className="mx-0 italic mt-8 mb-8 text-left text-4xl md:text-xl lg:text-4xl">
                Background: The NCAP Architecture
              </p>
              <p className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
                The foundation of our study is the NCAP architecture developed by Bhattasali et al., which represents a fascinating intersection of neuroscience and artificial intelligence. This architecture translates the well-mapped neural circuits of <i>C. elegans</i> - one of the simplest organisms with a complete connectome - into a discrete-time artificial neural network.
                <br/><br/>
                The architecture consists of several biologically-inspired elements: modular structure where each body segment is controlled by a repeated microcircuit, constrained connectivity with synapses being either excitatory or inhibitory, specialized units including B neurons (sensory-motor neurons) and oscillator units, and remarkably sparse connectivity with only 4 trainable parameters through aggressive weight sharing.
              </p>

              <div className="flex justify-center my-8">
                <Image
                  src="/ncap_assets/ncap_architecture.png"
                  alt="NCAP architecture diagram showing modular structure and connections"
                  width={700}
                  height={500}
                  className="w-full max-w-xl h-auto rounded-lg shadow-lg"
                />
              </div>

              <p className="mx-0 italic mt-8 mb-8 text-left text-4xl md:text-xl lg:text-4xl">
                Experimental Design
              </p>
              <p className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
                We designed three categories of experiments to probe the network's adaptive capabilities:
              </p>
              
              <p className="mx-0 italic mt-6 mb-6 text-left text-3xl md:text-xl lg:text-3xl">
                1. Sensor Ablation Patterns
              </p>
              <div className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <span className="font-semibold">Alternating Pattern:</span> Removing sensors 1,3,5... (every other sensor)
                  </li>
                  <li>
                    <span className="font-semibold">Sequential Pattern:</span> Removing sensors 1,2,3... (consecutive sensors)
                  </li>
                </ul>
              </div>

              <p className="mx-0 italic mt-6 mb-6 text-left text-3xl md:text-xl lg:text-3xl">
                2. Damage Scenarios
              </p>
              <div className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    <span className="font-semibold">"Born Without":</span> Networks trained from scratch with specific sensors permanently disabled
                  </li>
                  <li>
                    <span className="font-semibold">"Removed at Test":</span> Fully trained networks with sensors disabled only during evaluation
                  </li>
                  <li>
                    <span className="font-semibold">"Damage and Retrain":</span> Pre-trained networks damaged and then allowed to adapt through continued training
                  </li>
                </ol>
              </div>

              <p className="mx-0 italic mt-8 mb-8 text-left text-4xl md:text-xl lg:text-4xl">
                Key Results
              </p>
              
              <div className="overflow-x-auto mb-8">
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

              <p className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
                Our experiments revealed fascinating differences between damage patterns. The alternating pattern showed more gradual performance degradation with interesting recovery at maximum damage (667 vs 643), suggesting compensatory mechanisms. The sequential pattern exhibited steeper performance decline with less evidence of compensatory adaptation.
              </p>

              <div className="flex justify-center my-8">
                <figure className="max-w-lg">
                  <Image
                    src="/ncap_assets/evolution_alternating.webp"
                    alt="Chart showing performance comparison between different damage scenarios"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <figcaption className="mt-2 text-base text-center text-gray-600">
                    Comparison of test rewards across different sensor deprivation scenarios
                  </figcaption>
                </figure>
              </div>

              <p className="mx-0 italic mt-8 mb-8 text-left text-4xl md:text-xl lg:text-4xl">
                Deep Learning Insights
              </p>
              
              <p className="mx-0 italic mt-6 mb-6 text-left text-3xl md:text-xl lg:text-3xl">
                Sparse Connectivity as a Feature
              </p>
              <p className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
                The NCAP's extreme sparsity (4 parameters vs. thousands in MLPs) initially seems like a limitation. However, our experiments suggest this constraint actually enhances robustness. The forced modularity and local connectivity patterns create natural redundancy - when one module fails, others can partially compensate.
              </p>

              <p className="mx-0 italic mt-6 mb-6 text-left text-3xl md:text-xl lg:text-3xl">
                Reinforcement Learning Considerations
              </p>
              <p className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
                The retraining experiments highlight an important RL principle: behavioral adaptation through policy modification. When sensors are damaged, the optimal policy changes. The NCAP architecture's modular structure allows for local policy adjustments without catastrophic forgetting of the overall locomotion strategy. We used Proximal Policy Optimization (PPO) for training, leveraging its stability and sample efficiency for continuous control tasks.
              </p>

              <p className="mx-0 italic mt-8 mb-8 text-left text-4xl md:text-xl lg:text-4xl">
                Implications and Future Directions
              </p>
              <p className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
                Our findings suggest that neuroplasticity in artificial networks may emerge not from complex learning rules but from appropriate architectural constraints. The NCAP's bio-inspired structure naturally supports graceful degradation and recovery.
                <br/><br/>
                These insights could inform the design of more robust robotic control systems: fault-tolerant robotics that maintain functionality despite sensor failures, adaptive prosthetics that can adjust to changing sensory feedback, and resilient autonomous systems for vehicles or drones that adapt to damage.
                <br/><br/>
                Future research directions include exploring dynamic architecture modification where networks can grow new connections in response to damage, investigating multi-timescale adaptation with fast compensatory mechanisms vs. slow structural changes, and testing these principles on more complex morphologies like quadruped or humanoid architectures.
              </p>

              <p className="mx-0 italic mt-8 mb-8 text-left text-4xl md:text-xl lg:text-4xl">
                Conclusion
              </p>
              <p className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
                Our exploration of neuroplasticity in bio-inspired neural networks reveals that architectural design choices profoundly impact a system's ability to adapt to damage. The NCAP architecture, despite its minimalist design, exhibits remarkable resilience that emerges from its biological constraints rather than despite them. This work demonstrates that the intersection of neuroscience and artificial intelligence continues to yield valuable insights for building truly robust AI systems.
              </p>

              <p className="mx-0 text-sm text-gray-600 italic mt-12">
                This project was completed as part of Neuromatch Academy 2024. Special thanks to the NCAP paper authors for providing the foundation for this exploration.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 md:py-12">
        <div className="flex justify-center gap-8">
          <Link href="https://www.linkedin.com/in/ludovico-comito/" className="text-lg hover:opacity-70 transition-opacity">
            linkedin
          </Link>
          <Link href="https://x.com/ludocomito" className="text-lg hover:opacity-70 transition-opacity">
            X
          </Link>
        </div>
      </footer>
    </div>
  )
}