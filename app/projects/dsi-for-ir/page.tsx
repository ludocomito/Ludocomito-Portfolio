import Latex from "react-latex-next"

import { DistillArticle } from "@/components/distill-article"

const toc = [
  { id: "introduction", title: "Introduction" },
  { id: "model-architecture", title: "Model architecture" },
  { id: "results", title: "Results" },
]

export default function DifferentiableSearchIndexProject() {
  return (
    <DistillArticle
      title="Differentiable Search Index For Information Retrieval"
      published="September 2024"
      subtitle="An exploration of encoder-decoder architectures for mapping natural language queries directly to document identifiers."
      hero={{
        src: "/optimized/thumbnails/dsi.webp",
        alt: "Watercolor illustration for the differentiable search index project",
        width: 400,
        height: 300,
      }}
      links={[
        {
          href: "https://github.com/ludocomito/DSI-Project",
          label: "GitHub",
          kind: "github",
        },
      ]}
      toc={toc}
    >
      <p>
        In modern Information Retrieval, one of the most interesting neural approaches is the Differentiable Search
        Index (DSI), where a single encoder-decoder architecture is trained in a multi-task fashion to perform both
        indexing and retrieval. The core idea is to map string queries directly to relevant document IDs, simplifying
        the retrieval process.
      </p>

      <p>
        This project explores solutions based on the same DSI concept while testing new architectures and training
        strategies. The goal was to deepen our understanding of the original paper and clarify the strengths and
        weaknesses of this retrieval formulation.
      </p>

      <h2 id="introduction">Introduction</h2>
      <p>
        The original DSI model uses an encoder-decoder architecture based on a pre-trained T5 model. The model is
        trained to perform both indexing and retrieval in a multi-task setup. We used Okapi BM25 as a baseline and T5
        as the initial neural model, then experimented with architecture and preprocessing variations.
      </p>

      <p>
        The first extension used a Lamini-Flan-T5 model trained through knowledge distillation. We then repeated the
        experiment with a custom encoder-decoder architecture. Finally, we tested data augmentation through query
        generation, inspired by{" "}
        <a href="https://arxiv.org/abs/2305.15115" target="_blank" rel="noopener noreferrer">
          Tang et al.
        </a>
      </p>

      <h2 id="model-architecture">Model architecture</h2>
      <p>
        The first experiment uses T5-base to establish a comparison with the original methodology. The next iteration
        replaces it with Lamini-Flan-T5, which combines the Flan-T5 family with Lamini's knowledge distillation method.
        Flan-T5 keeps the T5 encoder-decoder structure but is trained on a larger instruction-finetuning dataset.
      </p>

      <p>
        Lamini's method trains a smaller student model from synthetic outputs produced by a larger teacher model. In
        this case, the teacher is GPT-3.5 Turbo and the student is Flan-T5. The final iteration uses a custom
        encoder-decoder architecture with BERT-base-uncased as the encoder and GPT-2 as the decoder.
      </p>

      <h2 id="results">Results</h2>
      <p>
        As expected, the BM25 baseline produced very low scores, reaching only 0.003% MAP and 0.002% Recall@10. The
        T5-base model reached 2.53% MAP and 1.92% Recall@10. Lamini-Flan-T5 outperformed it under the same
        hyperparameters, and the best run was achieved with batch size 64 and learning rate 0.0005, reaching 3.34% MAP
        and 2.62% Recall@10.
      </p>

      <p>
        Query generation augmentation did not improve over the best Lamini-Flan-T5 setup. The custom BERT-GPT2 model
        performed worst, likely because the encoder and decoder representations were poorly aligned for this task.
      </p>

      <div className="l-page">
        <Latex>{`$$\\begin{array}{|l|c|c|c|c|}
\\hline
\\textbf{Model} & \\textbf{Batch Size} & \\textbf{Learning Rate} & \\textbf{Mean Average Precision} & \\textbf{Recall@10} \\\\
\\hline
\\text{BM-25 baseline} & 32 & 0.0005 & 0.003\\% & 0.002\\% \\\\
\\text{T5 Base} & 32 & 0.0005 & 2.53\\% & 1.92\\% \\\\
\\textbf{Lamini Flan T5} & 32 & 0.0005 & \\textbf{3.31\\%} & \\textbf{2.62\\%} \\\\
\\text{Lamini Flan T5} & 32 & 0.0001 & 1.81\\% & 1.44\\% \\\\
\\text{Lamini Flan T5} & 64 & 0.0005 & 3.34\\% & 2.62\\% \\\\
\\text{Lamini Flan T5 QG} & 32 & 0.0005 & 3.31\\% & 2.61\\% \\\\
\\text{BERT-GPT2 custom} & 32 & 0.0005 & 0.0019\\% & 0.0016\\% \\\\
\\hline
\\end{array}$$`}</Latex>
      </div>
    </DistillArticle>
  )
}
