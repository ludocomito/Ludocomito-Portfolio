import Latex from "react-latex-next"

import { ArticleFigure, DistillArticle } from "@/components/distill-article"

const toc = [
  { id: "methodology", title: "Methodology" },
  { id: "data-preprocessing", title: "Data preprocessing", depth: 3 as const },
  { id: "dynamic-node-representations", title: "Dynamic node representations", depth: 3 as const },
  { id: "user-preferences", title: "User preferences", depth: 3 as const },
  { id: "complete-architecture", title: "Architecture and training" },
  { id: "route-prediction", title: "Route prediction" },
  { id: "results", title: "Results" },
  { id: "bibtex", title: "BibTeX" },
]

export default function PnmlrProject() {
  return (
    <DistillArticle
      title="PNMLR: Enhancing Route Recommendations With Personalized Preferences Using Graph Attention Networks"
      published="March 2025"
      subtitle="A personalized route recommendation model that combines Neuro-MLR with user, time, and transport-mode preferences through Graph Attention Networks."
      hero={{
        src: "/optimized/thumbnails/pnmlr.webp",
        alt: "Watercolor illustration for the PNMLR route recommendation project",
        width: 400,
        height: 300,
      }}
      links={[
        {
          href: "https://github.com/ludocomito/GNN-Route-Recommendation",
          label: "GitHub",
          kind: "github",
        },
        {
          href: "https://ieeexplore.ieee.org/document/10942344",
          label: "Paper",
          kind: "paper",
        },
      ]}
      toc={toc}
    >
      <p>
        Millions of people rely on mapping services every day, but most routing systems still optimize for generic
        shortest paths. Real route choice is more personal: transport mode, time of day, and individual habits all
        influence the path a person is likely to take.
      </p>

      <p>
        PNMLR extends the Neuro-MLR framework by embedding user-specific preferences into route prediction. The model
        uses Graph Attention Networks (GATs) to integrate factors such as user ID, time, and transport mode, capturing
        variability in user behavior and predicting the most likely route. Experiments on the Geolife GPS dataset show
        improvements in F1-score, precision, recall, and reachability compared with models that do not model user
        preferences.
      </p>

      <ArticleFigure
        src="/optimized/articles/pnmlr-architecture.webp"
        alt="PNMLR architecture diagram"
        width={1000}
        height={720}
        caption="The PNMLR pipeline combines road-network embeddings with learned user preference representations."
      />

      <h2 id="methodology">Methodology</h2>
      <h3 id="data-preprocessing">Data preprocessing</h3>
      <p>We preprocess the Geolife GPS dataset with the following steps.</p>

      <ol>
        <li>
          <strong>Outlier removal:</strong> filtering GPS points that deviate from plausible travel paths using a speed
          threshold of 500 km/h.
        </li>
        <li>
          <strong>Staypoint and duplicate removal:</strong> eliminating redundant points where users remain stationary,
          using a distance threshold of 5 meters.
        </li>
        <li>
          <strong>Compression:</strong> merging points within 100 meters of each other to reduce dimensionality while
          preserving trajectory shape.
        </li>
        <li>
          <strong>Map matching:</strong> projecting GPS points onto a Beijing road network graph from OpenStreetMap.
        </li>
        <li>
          <strong>Normalization:</strong> adjusting trajectory lengths so results remain comparable with baseline
          models.
        </li>
      </ol>

      <ArticleFigure
        src="/optimized/articles/preprocessing-pnmlr.webp"
        alt="Data preprocessing pipeline for the Geolife dataset"
        width={900}
        height={650}
        caption="A sample trajectory before and after preprocessing, from noisy GPS points to a matched road-network path."
      />

      <h3 id="dynamic-node-representations">Building dynamic node representations</h3>
      <p>
        PNMLR extends a standard Graph Convolutional Network by integrating Graph Attention Networks. Unlike GCNs, which
        use fixed weights when aggregating information from neighboring nodes, GATs use self-attention to learn
        different weights for each neighbor during training.
      </p>

      <p>The attention score between nodes is computed as:</p>

      <div className="l-page">
        <Latex>{`$$a(h_u, h_v) = \\text{LeakyReLU}(a^T \\cdot [Wh_u||Wh_v])$$`}</Latex>
      </div>

      <p>
        These scores are normalized with softmax and used to weight neighboring nodes when representations are updated.
        This dynamic weighting lets PNMLR adapt to users and context, capturing variations in route preference.
      </p>

      <h3 id="user-preferences">Incorporating user preferences</h3>
      <p>PNMLR models three user preference categories.</p>

      <ul>
        <li>
          <strong>User ID:</strong> persistent individual routing habits.
        </li>
        <li>
          <strong>Transport mode:</strong> different routing behavior for walking, driving, or bus trips.
        </li>
        <li>
          <strong>Time features:</strong> cyclical encodings for month, day, and hour.
        </li>
      </ul>

      <p>For each category, the model creates a k-dimensional embedding vector. These are processed in two ways.</p>

      <ol>
        <li>
          <strong>Concatenation:</strong> combining the vectors into one larger preference representation.
        </li>
        <li>
          <strong>Averaging:</strong> element-wise averaging into a single k-dimensional vector.
        </li>
      </ol>

      <p>
        The resulting preference representation passes through an MLP block to produce the final m-dimensional user
        preference embedding <Latex>{`$z_p$`}</Latex>. In our experiments, concatenation followed by a three-layer MLP
        produced the strongest results.
      </p>

      <h2 id="complete-architecture">Complete architecture and training</h2>
      <p>The complete PNMLR architecture combines four components.</p>

      <ol>
        <li>A Graph Attention Network that processes the road network and creates node embeddings.</li>
        <li>A preference embedding pipeline for user ID, transport mode, and time features.</li>
        <li>
          A concatenation module that combines current node embedding <Latex>{`$z_{curr}$`}</Latex>, transition node
          embedding <Latex>{`$z_v$`}</Latex>, destination node embedding <Latex>{`$z_d$`}</Latex>, and preference
          embedding <Latex>{`$z_p$`}</Latex>.
        </li>
        <li>A final MLP that predicts transition probabilities from the concatenated representation.</li>
      </ol>

      <h2 id="route-prediction">Route prediction</h2>
      <p>
        During inference, the model receives a query with source, destination, and user preferences. It predicts
        transitions from the current node to neighboring nodes, then greedily selects the most likely transition until
        the destination is reached or a maximum path length is exceeded.
      </p>

      <h2 id="results">Results</h2>
      <p>
        Experiments on the Geolife GPS dataset show that PNMLR significantly outperforms baselines that ignore user
        preferences.
      </p>

      <ul>
        <li>
          <strong>F1-score:</strong> 78.49%, a 17.9% improvement over Neuro-MLR.
        </li>
        <li>
          <strong>Precision:</strong> 83.11%, a 12.7% improvement.
        </li>
        <li>
          <strong>Recall:</strong> 74.36%, a 12.9% improvement.
        </li>
        <li>
          <strong>Reachability:</strong> 75.39%, a 21.9% improvement.
        </li>
      </ul>

      <p>
        The largest gains appear when using the Graph Attention Network variant with concatenation for preference
        aggregation. This supports the hypothesis that routing preferences matter, and that attention mechanisms can
        capture personalized route-choice patterns effectively.
      </p>

      <h2 id="bibtex">BibTeX</h2>
      <pre>
        <code>{`@article{ponzi2025pnmlr,
  title={PNMLR: Enhancing Route Recommendations with Personalized Preferences Using Graph Attention Networks},
  author={Ponzi, Valerio and Comito, Ludovico and Napoli, Christian},
  journal={IEEE Access},
  volume={11},
  year={2025},
  doi={10.1109/ACCESS.2025.3555049},
  publisher={IEEE}
}`}</code>
      </pre>
    </DistillArticle>
  )
}
