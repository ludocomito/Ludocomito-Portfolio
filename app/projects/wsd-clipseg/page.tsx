import { ArticleFigure, DistillArticle } from "@/components/distill-article"

const toc = [
  { id: "the-project", title: "The project" },
  { id: "quantitative-results", title: "Quantitative results" },
  { id: "qualitative-analysis", title: "Qualitative analysis" },
  { id: "saliency-maps", title: "Saliency maps", depth: 3 as const },
  { id: "image-segmentation", title: "Image segmentation", depth: 3 as const },
]

export default function VisualWsdProject() {
  return (
    <DistillArticle
      title="Visual WSD using CLIPSeg"
      published="March 2024"
      subtitle="A multimodal word sense disambiguation project that compares CLIP and CLIPSeg for choosing the candidate image that best matches an ambiguous word in context."
      hero={{
        src: "/optimized/thumbnails/wsd.webp",
        alt: "Watercolor illustration for the visual word sense disambiguation project",
        width: 400,
        height: 300,
      }}
      links={[
        {
          href: "https://github.com/ludocomito/Visual-WSD-using-CLIPSeg",
          label: "GitHub",
          kind: "github",
        },
      ]}
      toc={toc}
    >
      <p>
        Visual Word Sense Disambiguation (VWSD) is a multimodal NLP task. Given a context sentence, a target word, and
        a set of candidate images, the goal is to identify the image that most appropriately represents the intended
        sense of the target word.
      </p>

      <h2 id="the-project">The project</h2>
      <p>
        The baseline approach uses a pre-trained CLIP model to compute similarities between the context and candidate
        images, selecting the image with the highest score. As an additional experiment, this work evaluates CLIPSeg, a
        CLIP-based image segmentation model. The intuition is that segmentation is closer to visual disambiguation:
        the model must focus on the relevant image region and separate it from surrounding content. For multilingual
        test data, contexts are translated with dedicated Italian and Farsi translation models.
      </p>

      <h2 id="quantitative-results">Quantitative results</h2>
      <p>
        The first English test with CLIP reached 58.31% accuracy, confirming CLIP's usefulness in zero-shot settings.
        CLIPSeg reached 63.28%, outperforming the baseline by 4.97 percentage points. Running CLIPSeg directly on
        Italian and Farsi contexts without translation led to poor results, with 18.03% accuracy for Italian and 9.5%
        for Farsi. Translation improved both cases substantially, reaching 50.49% for Italian and 32% for Farsi.
      </p>

      <h2 id="qualitative-analysis">Qualitative analysis</h2>
      <h3 id="saliency-maps">Saliency maps</h3>
      <p>
        Saliency maps help interpret which image regions influence the model's predictions. Here, the goal is to compare
        samples where CLIPSeg predicts correctly and baseline CLIP fails, checking whether CLIPSeg's advantage comes
        from focusing on the parts of the image that actually match the intended sense.
      </p>

      <ArticleFigure
        src="/optimized/articles/glutton-saliency.webp"
        alt="Saliency map comparison for the glutton visual word sense disambiguation example"
        width={900}
        height={600}
      />

      <h3 id="image-segmentation">Image segmentation</h3>
      <p>
        Another experiment compares different contexts for the same ambiguous word and observes how segmentation
        changes. For example, using "madeira wine" on an image of the Madeira river produces a weaker segmentation than
        the correct "madeira river" context. A similar pattern appears with the Mercury statue examples, suggesting a
        useful correlation between segmentation behavior and disambiguation accuracy.
      </p>

      <ArticleFigure
        src="/optimized/articles/madeira-segmentations.webp"
        alt="CLIPSeg segmentations for Madeira river and Madeira wine contexts"
        width={900}
        height={600}
      />

      <ArticleFigure
        src="/optimized/articles/mercury-segmentations.webp"
        alt="CLIPSeg segmentations for different Mercury contexts"
        width={900}
        height={600}
      />
    </DistillArticle>
  )
}
