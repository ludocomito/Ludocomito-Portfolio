import Image from "next/image"
import Link from "next/link"
import { Github, ScrollText } from "lucide-react"
import Latex from "react-latex-next"

export default function GradientDescentProject() {
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
        <h1 className="text-4xl md:text-6xl lg:text-5xl font-normal text-red-700 text-center mb-6 md:mb-8 lg:mb-10 leading-tight">
          PNMLR: Enhancing Route Recommendations With Personalized Preferences Using Graph Attention Networks
        </h1>

        <div className="flex justify-center items-center gap-4 mb-5 lg:mb-10">
          <Link href="https://github.com/ludocomito/GNN-Route-Recommendation" target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
            <Github className="w-8 h-8 text-gray-800 hover:text-red-700 transition-colors" />
          </Link>
          <Link
            href="https://ieeexplore.ieee.org/document/10942344"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Paper"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-400 text-gray-800 hover:text-red-700 hover:border-red-700 transition-colors"
          >
            <ScrollText className="w-5 h-5" />
            <span className="text-lg">Paper</span>
          </Link>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            {/* Floating Image */}
            <div className="block md:float-left mb-6 md:mb-4 md:mr-6 text-center md:text-left">
              <div className="w-48 md:w-[280px] mx-auto md:mx-0">
                <Image
                  src="/pnmlr-icon5.png"
                  alt="Watercolor illustration of a person sitting on a cliff overlooking a gradient sky transitioning from orange to blue"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-base md:text-lg leading-relaxed">
              <p className="mx-0 sm:text-left md:text-justify lg:text-justify  text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
              In the modern landscape, millions of users rely on mapping services daily to plan trips of various kinds. While these services traditionally focus on providing the shortest routes, individual preferences often influence real-world route choices. However, most existing solutions neglect the impact of such preferences, limiting their ability to deliver truly personalized recommendations. This paper presents the Personalized Neuro-MLR (PNMLR) model, which enhances route recommendations by embedding user-specific preferences into the prediction process. Built on the Neuro-MLR (NMLR) framework, PNMLR leverages Graph Attention Networks (GAT) to integrate factors like user ID, time of day, and transport mode. This approach captures the variability in user behavior, offering personalized predictions for the most likely route. Extensive experiments on the Geolife GPS dataset show significant improvements across key metrics, including F1-score, precision, recall and route reachability, compared to models that do not consider user preferences. These results demonstrate the potential of PNMLR to transform route recommendation systems from generic solutions to user-centric models.


              </p>
              <div className="flex justify-center my-8">
                <Image
                  src="/pnmlr-architecture.png"
                  alt="Architecture diagram showing the robot's hardware and software components"
                  width={700}
                  height={500}
                  className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
                />
              </div>
              <p className="mx-0 italic mt-8 mb-8 text-left text-4xl md:text-xl lg:text-4xl">
                Methodology
              </p>
              <p className="mx-0 italic mt-6 mb-6 text-left text-3xl md:text-xl lg:text-3xl">
               Data preprocessing
              </p>
              <div className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
                <p className="mb-4">
                  We conducted extensive preprocessing of the Geolife GPS dataset through the following steps:
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    <span className="italic">Outliers Removal:</span> Filtering GPS points that deviate significantly from plausible travel paths using a speed threshold of 500 km/h.
                  </li>
                  <li>
                    <span className="italic">Staypoints and Duplicates Removal:</span> Eliminating redundant data points where users remain stationary, using a distance threshold of 5 meters.
                  </li>
                  <li>
                    <span className="italic">Compression:</span> Merging points within 100 meters of each other to reduce data dimensionality while preserving trajectory shapes.
                  </li>
                  <li>
                    <span className="italic">Map Matching:</span> Projecting GPS points onto a road network graph of Beijing using OpenStreetMap, ensuring continuous and valid paths.
                  </li>
                  <li>
                    <span className="italic">Normalization:</span> Adjusting trajectory lengths to ensure comparability with baseline models.
                  </li>
                </ol>
              </div>
              <div className="flex justify-center my-8">
                <figure className="max-w-lg">
                  <Image
                    src="/preprocessing-pnmlr.png"
                    alt="A diagram illustrating the data preprocessing pipeline for the Geolife dataset."
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <figcaption className="mt-2 text-base text-center text-gray-600">
                    Visualization of a sample trajectory before (blue dotted line) and after data preprocessing steps (red solid line).
                  </figcaption>
                </figure>
              </div>
              <p className="mx-0 italic mt-6 mb-6 text-left text-3xl md:text-xl lg:text-3xl">
              Building Dynamic Node Representations
              </p>

              <p className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
              We extend the standard Graph Convolutional Network (GCN) by integrating Graph Attention Networks (GATs). Unlike GCNs, which use fixed weights for aggregating information from neighboring nodes, GATs employ a self-attention mechanism to learn and assign different weights to each neighboring node during training.
              <br/>
              The attention scores between nodes are computed as:
              </p>
              <Latex>{`$$a(h_u, h_v) = \\text{LeakyReLU}(a^T \\cdot [Wh_u||Wh_v])$$`}</Latex>
              <p className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
              These scores are then normalized using softmax and used to weight the importance of neighboring nodes when updating representations. This dynamic weighting allows PNMLR to adapt to different users and contexts, capturing subtle variations in routing preferences.
              </p>
              <p className="mx-0 italic mt-6 mb-6 text-left text-3xl md:text-xl lg:text-3xl">
                Incorporating User Preferences
              </p>
              <p className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
              Our model incorporates three key user preferences:
              </p>
              <div className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <span className="italic">User ID:</span> Captures individual routing patterns and preferences that persist across multiple trips.
                  </li>
                  <li>
                    <span className="italic">Transport Mode:</span> Considers different routing behaviors based on transportation method (walking, driving, bus) encoded as categorical variables.
                  </li>
                  <li>
                    <span className="italic">Time Features:</span> Accounts for temporal variations using cyclical encoding of month, day, and hour information to preserve their periodic nature.
                  </li>
                </ul>
              </div>
              <p className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
                For each preference category, we create a k-dimensional embedding vector. These vectors are then processed through two alternative pipelines:
              </p>
              <div className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    <span className="italic">Concatenation:</span> Combining the three k-dimensional vectors into a single larger vector.
                  </li>
                  <li>
                    <span className="italic">Averaging:</span> Element-wise averaging to produce a single k-dimensional vector.
                  </li>
                </ol>
              </div>
              <p className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
              The aggregated preferences are then passed through an MLP block (either single-layer or three-layer) to create the final m-dimensional user preference embedding (<Latex>{`$z_p$`}</Latex>). Our experiments showed that concatenation combined with a three-layer MLP produced the best results.
              </p>
              <p className="mx-0 italic mt-8 mb-8 text-left text-4xl md:text-xl lg:text-4xl">
              Complete Architecture and Training
              </p>
              <p className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
              The complete PNMLR architecture combines several key components:
              </p>
              <div className="mx-0 my-4 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    A Graph Attention Network that processes the road network to create node embeddings.
                  </li>
                  <li>
                    A Preference Embedding Pipeline that processes user ID, transport mode, and time data.
                  </li>
                  <li>
                    A Concatenation Module that combines the current node embedding (<Latex>{`$z_{curr}$`}</Latex>), transition node embedding (<Latex>{`$z_v$`}</Latex>), destination node embedding (<Latex>{`$z_d$`}</Latex>), and preference embedding (<Latex>{`$z_p$`}</Latex>).
                  </li>
                  <li>
                    A final MLP that predicts transition probabilities based on the concatenated embeddings.
                  </li>
                </ol>
              </div>
              <p className="mx-0 italic mt-8 mb-8 text-left text-4xl md:text-xl lg:text-4xl">
              Route prediction
              </p>
              <p className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
              During inference, given a query containing source, destination, and user preferences, the model predicts transitions from the current node to neighboring nodes based on the learned representations. The system follows a greedy approach, iteratively selecting the most likely transitions until the destination is reached or a maximum path length is reached.
              </p>
              <p className="mx-0 italic mt-8 mb-8 text-left text-4xl md:text-xl lg:text-4xl">
                Results
              </p>
              <div className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
                <p className="mb-4">
                  Our experiments on the Geolife GPS dataset demonstrate that PNMLR significantly outperforms baseline models that do not consider user preferences:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>
                    <span className="font-semibold">F1-score:</span> 78.49% (+17.9% improvement over NeuroMLR)
                  </li>
                  <li>
                    <span className="font-semibold">Precision:</span> 83.11% (+12.7% improvement)
                  </li>
                  <li>
                    <span className="font-semibold">Recall:</span> 74.36% (+12.9% improvement)
                  </li>
                  <li>
                    <span className="font-semibold">Reachability:</span> 75.39% (+21.9% improvement)
                  </li>
                </ul>
                <p>
                  The most significant improvements were observed when using the Graph Attention Network variant with concatenation for preference aggregation. This confirms our hypothesis that user preferences play a crucial role in route selection and that attention mechanisms can effectively capture these personalized patterns.
                </p>
                <h2 className="text-3xl font-normal mt-12 mb-4">BibTeX</h2>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm font-mono">
                  <code>
{`@article{ponzi2025pnmlr,
  title={PNMLR: Enhancing Route Recommendations with Personalized Preferences Using Graph Attention Networks},
  author={Ponzi, Valerio and Comito, Ludovico and Napoli, Christian},
  journal={IEEE Access},
  volume={11},
  year={2025},
  doi={10.1109/ACCESS.2025.3555049},
  publisher={IEEE}
}`}
                  </code>
                </pre>
              </div>
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
