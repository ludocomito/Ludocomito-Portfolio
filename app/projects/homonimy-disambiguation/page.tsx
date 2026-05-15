import { ArticleFigure, DistillArticle } from "@/components/distill-article"

const toc = [
  { id: "proposed-architecture", title: "Proposed architecture" },
  { id: "averaging-hidden-states", title: "Averaging hidden states", depth: 3 as const },
  { id: "sub-token-pooling", title: "Sub-token pooling", depth: 3 as const },
  { id: "logits-mask", title: "Logits mask", depth: 3 as const },
]

export default function HomonymyDisambiguationProject() {
  return (
    <DistillArticle
      title="Homonymy disambiguation using DeBERTa"
      published="November 2023"
      subtitle="A coarse-grained word sense disambiguation system that uses DeBERTa embeddings, target-word pooling, and candidate-sense masking to classify ambiguous words in context."
      hero={{
        src: "/optimized/thumbnails/homonymy.webp",
        alt: "Watercolor illustration for the homonymy disambiguation project",
        width: 400,
        height: 300,
      }}
      links={[
        {
          href: "https://github.com/ludocomito/Homonymy-Disambiguation-NLP?tab=readme-ov-file",
          label: "GitHub",
          kind: "github",
        },
      ]}
      toc={toc}
    >
      <p>
        In Natural Language Processing, Word Sense Disambiguation (WSD) is the task of assigning the correct
        meaning to ambiguous target words given their context. Homonymy disambiguation is a specific instance of this
        task where related senses are clustered together, producing a coarse-grained WSD setup. In this context, two
        words are homonyms if they share the same lexical form but have unrelated meanings.
      </p>

      <p>
        BERT-based models such as GlossBERT have been extensively used for this family of tasks because contextualized
        embeddings can capture word senses. This project describes a series of experiments with BERT-based
        architectures, focusing on fine-tuning choices and the practical operations needed to make the classifier
        behave well with a large sense inventory.
      </p>

      <h2 id="proposed-architecture">Proposed architecture</h2>
      <p>
        The proposed architecture consists of two main modules: DeBERTa, used to extract word embeddings for each
        token, and a classifier head, implemented as a Multi-Layer Perceptron. The classifier consumes the
        transformer's embeddings and outputs logits for each possible class. The model also adds operations at both the
        embedding level and the logits level.
      </p>

      <ArticleFigure
        src="/optimized/articles/proposed-architecture-homonymy.webp"
        alt="Architecture diagram for the DeBERTa homonymy disambiguation model"
        width={900}
        height={600}
        caption="High-level model architecture: contextual embeddings, target-word representation, and candidate-sense classification."
      />

      <h3 id="averaging-hidden-states">Averaging hidden states</h3>
      <p>
        Different transformer layers encode information at different levels of abstraction. The proposed method uses
        the average of the last four hidden states to build a richer representation for each token before pooling the
        target word.
      </p>

      <h3 id="sub-token-pooling">Sub-token pooling</h3>
      <p>
        During tokenization, some words are split into multiple sub-tokens. After the transformer pass, the resulting
        sub-token embeddings for each word are averaged to obtain a single representation for the complete word.
      </p>

      <ArticleFigure
        src="/optimized/articles/token-handling.webp"
        alt="Diagram showing how sub-token embeddings are pooled into complete word representations"
        width={900}
        height={600}
      />

      <h3 id="logits-mask">Logits mask</h3>
      <p>
        This task can involve thousands of possible senses. To keep the classifier focused, candidate senses for target
        words in the dataset are used to create a logits mask. Candidate senses receive ones and all other senses
        receive zeros, constraining the model to score only plausible meanings for the current target.
      </p>

      <ArticleFigure
        src="/optimized/articles/logits-mask.webp"
        alt="Diagram showing the candidate-sense logits mask"
        width={900}
        height={600}
      />
    </DistillArticle>
  )
}
