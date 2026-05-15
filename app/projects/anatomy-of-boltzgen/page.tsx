import katex from "katex"

import { BoltzgenFragmentResizer } from "@/components/boltzgen-fragment-resizer"
import { DistillArticle } from "@/components/distill-article"
import { boltzgenArticleSource } from "./article-source"

export const dynamic = "force-static"

const fragmentHeights: Record<string, number> = {
  interactive_decoder: 760,
  pairformer_viz: 620,
  edm_sampler_interactive: 520,
  dilated_scheduling_viz: 520,
  training_tasks_viz: 500,
  conditioning_viz: 540,
  dsl_viz: 650,
  pipeline_viz: 650,
}

function renderMath(math: string, displayMode: boolean) {
  return katex.renderToString(math.trim(), {
    displayMode,
    throwOnError: false,
    strict: "ignore",
  })
}

function getArticleHtml() {
  return boltzgenArticleSource
    .replace(/<d-contents>[\s\S]*?<\/d-contents>/, "")
    .replace(/<div id="fragment-([^"]+)"><\/div>/g, (_match, name) => {
      const height = fragmentHeights[name] ?? 560
      return `<iframe class="boltzgen-fragment" title="${name.replace(/_/g, " ")}" src="/boltzgen-fragments/${name}.html" loading="lazy" scrolling="no" style="height: ${height}px;"></iframe>`
    })
    .replace(/src="\/assets\/images\//g, 'src="/boltzgen-assets/images/')
    .replace(/src="assets\//g, 'src="/boltzgen-assets/')
    .replace(/<img /g, '<img loading="lazy" decoding="async" ')
    .replace(/<d-math block>([\s\S]*?)<\/d-math>/g, (_match, math) => {
      return `<div class="distill-math-block">${renderMath(math, true)}</div>`
    })
    .replace(/<d-math>([\s\S]*?)<\/d-math>/g, (_match, math) => {
      return `<span class="distill-math-inline">${renderMath(math, false)}</span>`
    })
}

export default function AnatomyOfBoltzgenProject() {
  return (
    <DistillArticle
      title="Anatomy of BoltzGen"
      published="November 20, 2025"
      subtitle="A comprehensive exploration of BoltzGen's architecture: from molecular representations to diffusion-based generation of protein binders."
      hero={{
        src: "/optimized/thumbnails/boltzgen.webp",
        alt: "Protein structure render on a dark background",
        width: 1100,
        height: 595,
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: getArticleHtml() }} />
      <BoltzgenFragmentResizer />
    </DistillArticle>
  )
}
