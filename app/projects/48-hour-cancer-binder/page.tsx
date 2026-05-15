import { ArticleFigure, DistillArticle } from "@/components/distill-article"

const optimizedBase = "/optimized/cancer-binder"

export default function CancerBinderProject() {
  return (
    <DistillArticle
      title="The 48-Hour Cancer Binder"
      published="May 2026"
      subtitle="A hackathon field note on designing an FGFR2-selective protein binder, from target biology and hotspot selection to BoltzGen generation and off-target scoring."
      hero={{
        src: "/optimized/thumbnails/cancer-binder.webp",
        alt: "Watercolor illustration of a binder interacting with a target protein",
        width: 1024,
        height: 1024,
      }}
    >
      <p>
        I am writing this blog post while on my way home from my first protein-design themed hackathon. Three days ago,
        when I first arrived in Zurich, I had no idea how it would turn out: as an ML person, I had general knowledge of
        protein design models but had never put it into practice on a real problem. Our team was a mix of CS and biology
        people, but none of us worked specifically in protein design.
      </p>

      <p>
        <em>We still got to design the best binding protein on a real-world cancer problem.</em>
      </p>

      <p>
        Besides sharing the technical details of the solution, I wanted to write this as a logbook on how to approach
        protein hackathons, and to make ML people less scared of this kind of domain.
      </p>

      <h2 id="problem-and-reasoning">Problem and reasoning</h2>
      <p>
        In these hackathons, the structure is pretty clear: you are given a target protein and some constraints, and the
        goal is to design a novel protein that binds best to that target while respecting the desired specifications.
      </p>

      <p>
        In our case the <strong>target</strong> protein was <em>FGFR2</em>, and we had to design an{" "}
        <strong>inhibitor</strong> binder for it, with the additional specification that our binder should not bind to{" "}
        <em>FGFR1</em>, another very similar protein. Before describing what those proteins are and what we wanted to do,
        the first lesson for the ML person is this: be prepared to deal with acronyms. The protein world is full of
        them.
      </p>

      <p>
        FGFR2 is a <strong>receptor</strong> found on the surface of cells. Its normal role is to receive signals from
        molecules called fibroblast growth factors, such as <em>FGF1</em>. When FGF1 binds to FGFR2, the receptor
        becomes active and sends signals inside the cell. <strong>These signals can tell the cell to grow, divide, or
        survive.</strong> That is useful in normal biology, but it becomes a problem when FGFR2 is mutated or overactive.
        In some cancers, FGFR2 signaling is too strong or constantly active, which can help tumor cells keep growing.
      </p>

      <p>
        For this reason, FGFR2 is an interesting therapeutic target: if we can block its activation, we may reduce a
        cancer-promoting signal.
      </p>

      <ArticleFigure
        src={`${optimizedBase}/fgfr2-1djs.webp`}
        alt="The 1DJS FGFR2 region that binds to FGF"
        width={1492}
        height={1052}
        caption="1DJS, the portion of FGFR2 that binds to FGF."
      />

      <p>
        The goal of our designed binder is to interfere with the normal interaction between FGFR2 and FGF1. In other
        words, <strong>the binder should occupy or block</strong> the region where the natural ligand would bind, making
        FGFR2 less likely to become activated.
      </p>

      <p>
        This brings an important challenge: <em>selectivity</em>. FGFR2 is part of a family of very similar receptors.
        FGFR1, in particular, has a structure very close to FGFR2. If we design a binder that only "likes" FGFR2 in a
        generic way, it may also bind FGFR1. That would be a problem, because FGFR1 has its own normal roles in the body,
        and blocking it could cause unwanted side effects.
      </p>

      <p>
        In the structural overlay below, FGFR2 is green and FGFR1 is gray. They share substantial structural similarity,
        which means the binder choice has to be specific rather than merely sticky.
      </p>

      <ArticleFigure
        src={`${optimizedBase}/fgfr2-fgfr1-overlap.webp`}
        alt="Structural overlay of FGFR2 and FGFR1"
        width={1588}
        height={1252}
        caption="FGFR2 and FGFR1 overlap substantially, making selectivity a central design constraint."
      />

      <p>
        Let us now put it on the quantitative side for ML. When designing a binder, we can use a number of{" "}
        <strong>affinity measures</strong> to estimate how well it binds to the target protein. The chosen metric for
        this hackathon was <strong>iPSAE</strong>, a confidence score for protein-protein binding. Our goal was to
        maximize iPSAE between our designed binder and FGFR2, while minimizing the same score with respect to FGFR1.
        This is commonly called minimizing the <em>off-target binding</em>.
      </p>

      <p>
        We will talk later about the models and tools we used to generate protein binders and measure iPSAE, but at this
        stage of the hackathon, after figuring out the main problem, it was time for our biology teammates to shine. A
        crucial step was figuring out which regions of the target our binder should attach to, and making principled
        choices grounded in protein biology.
      </p>

      <h2 id="design-choices">Design choices</h2>
      <p>
        The first priority was to clarify the key design choices: which specific regions of the target the binder should
        engage, and which ML tools we could use to generate it. With less than 48 hours available, this step is critical.
        There is not much time to iterate through many trials. Generating batches of targets takes time, and{" "}
        <strong>we wanted to generate large batches</strong> to maximize the probability of getting at least one good
        binder.
      </p>

      <p>
        At this point we decided to <strong>split based on expertise</strong>: the biology people identified the target
        regions, while the ML people set up the model pipeline and made sure it worked. During this phase, constant
        dialogue matters. While choosing the biological constraints, you must make sure you have models that can satisfy
        them. This is also how you learn a lot about the biology side of the problem; most of what I am writing here I
        learned during the hackathon.
      </p>

      <h3 id="identifying-the-target">Identifying the target</h3>
      <p>When designing our binder, we first had to decide which part of FGFR2 to target.</p>

      <p>
        This was important because FGFR2 is very similar to other receptors in the same family, especially{" "}
        <strong>FGFR1</strong>. Our goal was to find a region that satisfied three conditions.
      </p>

      <ol>
        <li>
          <strong>It had to be exposed</strong>, so a binder could physically reach it.
        </li>
        <li>
          <strong>It had to matter biologically</strong>, meaning it should be involved in receptor recognition or
          function.
        </li>
        <li>
          <strong>It had to be different enough from FGFR1</strong>, so the binder could learn FGFR2-specific features.
        </li>
      </ol>

      <p>
        Based on structural inspection and sequence comparison, we selected the <strong>D3 domain</strong> of FGFR2. This
        domain is part of the extracellular region of the receptor and contributes strongly to ligand specificity.
      </p>

      <ArticleFigure
        src={`${optimizedBase}/fgfr2-d3-domain.webp`}
        alt="FGFR2 D3 domain highlighted in cyan"
        width={1690}
        height={1264}
        caption="The selected D3 domain, highlighted in cyan."
      />

      <p>
        More importantly for our design task, D3 contains exposed loops and variable residues that differ between FGFR2
        and FGFR1. These differences give the binder something specific to recognize.
      </p>

      <ArticleFigure
        src={`${optimizedBase}/fgfr2-d3-specificity.webp`}
        alt="FGFR2-specific features on the D3 domain"
        width={1800}
        height={1400}
        caption="FGFR2-specific features on the D3 domain. The D3 domain is shown in cyan, while residues that differ from FGFR1 are highlighted in orange. These exposed variable residues create a specificity patch that can guide FGFR2-selective binder design."
      />

      <p>
        After identifying a region of the protein to target, we asked whether we could do anything else to improve the
        odds of getting a successful binder.
      </p>

      <p>
        It turns out there are several tools for identifying <em>hotspots</em>: specific residues on the FGFR2 surface
        that can be used as contact points for the binder-generation model. To choose those residues, we used{" "}
        <a href="https://www.nature.com/articles/s41467-023-37701-8" target="_blank" rel="noopener noreferrer">
          PESTO
        </a>
        , a model that predicts interaction-propensity scores for residues on protein surfaces. This helped us identify
        surface regions likely to form useful protein-protein contacts. In the image below, the residues in red have the
        highest predicted interaction probability.
      </p>

      <ArticleFigure
        src={`${optimizedBase}/pesto-hotspots.webp`}
        alt="PESTO hotspot predictions on the FGFR2 surface"
        width={2702}
        height={916}
        caption="PESTO hotspot predictions on the FGFR2 surface."
      />

      <p>We ended up selecting six residues: <strong>281, 283, 285, 286, 290, and 292</strong>.</p>

      <ArticleFigure
        src={`${optimizedBase}/selected-hotspots.webp`}
        alt="Selected FGFR2 hotspot residues highlighted in red"
        width={1782}
        height={1068}
        caption="The final selected hotspot residues, highlighted in red."
      />

      <p>It was now time to generate a binder.</p>

      <h3 id="choosing-the-right-model">Choosing the right model</h3>
      <p>
        Back to ML duties. The goal was to set up a de novo binder-generation pipeline that could design proteins from
        the input specifications we identified.
      </p>

      <p>
        You will most likely be given some basic resources, but if you have access to a good GPU server, use it. Setting
        everything up can consume some of your initial head start, but it is a huge advantage in the long run. One
        fundamental choice is which model to use for binder design. There are many possible candidates, but here are some
        lessons we learned.
      </p>

      <ul>
        <li>There are many models for de novo binder generation, but none of them is perfect.</li>
        <li>
          <strong>BindCraft</strong> can generate high-quality binders, but it is slow. We discarded it because the time
          budget was too tight.
        </li>
        <li>
          <strong>RFDiffusion</strong> is strong at generating binder backbones. It was a real option, but we chose a
          more straightforward route.
        </li>
      </ul>

      <p>
        <strong>BoltzGen</strong> looked like the best overall decision. It handles structure prediction and binder
        generation, accepts specifications through a clean YAML file, and includes quality scoring for generated
        proteins. The binder-generation phase is not too slow, and you can either set up the open repository on a server
        or use the BoltzLabs platform. If you want to learn more about BoltzGen, here is a{" "}
        <a
          href="https://huggingface.co/spaces/hugging-science/anatomy-of-boltzgen"
          target="_blank"
          rel="noopener noreferrer"
        >
          related post I wrote on it
        </a>
        .
      </p>

      <p>
        Once you make sure you can generate at least one complete sample protein with BoltzGen, write the YAML config and
        pass it to the model pipeline. In our case, the YAML looked like this:
      </p>

      <pre className="language-yaml">
        <code>
          <span className="token comment"># FGFR2 target structure.</span>
          {"\n"}
          <span className="token comment"># Put the prepared FGFR2 mmCIF/PDB here.</span>
          {"\n"}
          <span className="token punctuation">-</span> <span className="token key">file</span>
          <span className="token punctuation">:</span>
          {"\n"}
          {"    "}
          <span className="token key">path</span>
          <span className="token punctuation">:</span> <span className="token string">fgfr2_target.cif</span>
          {"\n\n"}
          {"    "}
          <span className="token comment"># Target chain is E.</span>
          {"\n"}
          {"    "}
          <span className="token key">include</span>
          <span className="token punctuation">:</span>
          {"\n"}
          {"      "}
          <span className="token punctuation">-</span> <span className="token key">chain</span>
          <span className="token punctuation">:</span>
          {"\n"}
          {"          "}
          <span className="token key">id</span>
          <span className="token punctuation">:</span> <span className="token string">E</span>
          {"\n\n"}
          {"    "}
          <span className="token comment"># FGFR2 D3-domain hotspot patch selected from our analysis.</span>
          {"\n"}
          {"    "}
          <span className="token key">binding_types</span>
          <span className="token punctuation">:</span>
          {"\n"}
          {"      "}
          <span className="token punctuation">-</span> <span className="token key">chain</span>
          <span className="token punctuation">:</span>
          {"\n"}
          {"          "}
          <span className="token key">id</span>
          <span className="token punctuation">:</span> <span className="token string">E</span>
          {"\n"}
          {"          "}
          <span className="token key">binding</span>
          <span className="token punctuation">:</span> <span className="token number">281,283,285,286,290,292</span>
          {"\n\n"}
          {"    "}
          <span className="token comment"># Keep the target structure fixed/specified.</span>
          {"\n"}
          {"    "}
          <span className="token key">structure_groups</span>
          <span className="token punctuation">:</span> <span className="token string">"all"</span>
        </code>
      </pre>

      <p>
        Then generate a batch of proteins. <strong>The more you can get, the better.</strong> Given the time available
        during a hackathon, you might generate a few hundred proteins, but ideally you would generate thousands. This
        highlights another point: it is also a game of luck. Models are not yet perfect. Generating many thousands of
        proteins is partly about trying to win the sampling-space lottery.
      </p>

      <h2 id="evaluating-generated-binders">Evaluating generated binders</h2>
      <p>
        BoltzGen already has a ranking pipeline built in. After generation, it refolded each binder-target complex using{" "}
        <strong>Boltz-2</strong> and computed a set of metrics: pTM/iPTM, PAE, refolding RMSD, hydrogen bonds, salt
        bridges, buried surface area, and more. Hard filters remove the obvious failures first, then surviving candidates
        are ranked across all metrics using a <strong>worst-rank strategy</strong>, meaning a binder has to be decent
        across the board rather than great on only one metric. We kept the <strong>top five designs by iPSAE</strong>.
      </p>

      <ArticleFigure
        src={`${optimizedBase}/generated-binder.webp`}
        alt="Generated binder shown in green next to the cyan target"
        width={2102}
        height={1272}
        caption="An example generation output. The generated binder is shown in green, while the target is shown in cyan."
      />

      <p>
        iPSAE is the key metric here. It is Boltz-2's confidence that your binder and target are forming a real,
        structurally sensible interface. Higher is better.
      </p>

      <p>
        But a high iPSAE on FGFR2 means nothing if the binder also latches onto FGFR1. So we ran a second round of
        Boltz-2 predictions to measure <strong>off-target iPSAE</strong>. The setup was simple: feed Boltz-2 a two-chain
        input, your binder sequence plus the FGFR1 sequence from PDB structure 1FQ9, and let it predict whether a real
        interface would form. Low off-target iPSAE means the binder probably ignores FGFR1, which is exactly what we
        wanted.
      </p>

      <p>
        In our case we ended up generating the best <strong>overall binder</strong> of the hackathon, with an iPSAE of
        0.7 for the target and 0.1 for the off-target protein. The numbers indicate both good predicted binding to FGFR2
        and high specificity, since the predicted affinity to FGFR1 was close to zero.
      </p>

      <h3 id="did-we-solve-cancer">Did we solve cancer?</h3>
      <p>
        We did well, but the metrics are only theoretical until tested in the lab. A fundamental thing to remember is
        that <strong>scores like iPSAE are proxy metrics</strong> produced by models. They are not direct measurements of
        binding affinity. iPSAE tells you how convinced Boltz-2 is that a real, structurally coherent interface would
        form. It is only as trustworthy as the model generating it.
      </p>

      <p>
        Models like Boltz-2 are <strong>not neutral observers</strong>. They are trained on existing structural data,
        which is skewed heavily toward alpha-helical proteins. Beta-sheet rich structures, for example, are
        underrepresented, and the model may therefore be systematically less reliable when scoring or generating them.
      </p>

      <p>
        As a bonus, both for a hackathon and for real experimentation, it can be worth measuring other properties of the
        generated binders. In our case we used{" "}
        <a href="https://biolib.com/DTU/ImmunoGeNN" target="_blank" rel="noopener noreferrer">
          ImmunoGeNN
        </a>{" "}
        to estimate <strong>immunogenicity</strong> risk, splitting each protein into overlapping 15-mer peptides and
        predicting population-level MHC-II presentation risk.
      </p>

      <p>
        That is just one example of a broader principle: a growing ecosystem of specialized models lets you probe almost
        any property you care about computationally before touching a pipette. <strong>Solubility</strong> predictors can
        flag sequences likely to aggregate. <strong>Thermostability</strong> models estimate how well a protein will hold
        its fold under physiological conditions. Others can predict expression levels, half-life, or susceptibility to
        proteolytic degradation. <strong>None of these replace experimental validation</strong>, but layering multiple in
        silico signals gives you a richer picture of your candidates and can save a lot of lab time by deprioritizing
        binders that look problematic early.
      </p>

      <h2 id="we-must-have-won-right">We must have won, right?</h2>
      <p>
        <strong>No.</strong> And this is one of the major take-home lessons from this hackathon. In this kind of event,
        scores are only half of the story. The other half is how you present the work. You need to create a pitch around
        the project and sell the idea.
      </p>

      <p>
        What counts is telling a story, and most importantly, talking about the future. While other hackathons may have
        straightforward monetary or product metrics, in this case it helped to state clearly how the project could move{" "}
        <strong>from computational design to wet-lab validation</strong>.
      </p>

      <p>
        We fumbled this part because, from our internal evaluations, we believed we would not make the finals. We
        dedicated too little time to the presentation, convinced it would not matter. Final lesson: keep pushing until the
        end, and remember that when evaluations are not public, there is always an opportunity to turn the result around.
      </p>

      <hr />

      <p>
        I hope this was a useful logbook of this hackathon. We are witnessing a remarkable shift in the bio domain. We
        are at a point where it is possible to experiment with disease-relevant targets with only a table, caffeine, and
        less than 48 hours. I also hope I have shown some of the current limitations of these models, and I think there
        is still a lot of work to do.
      </p>

      <p>Keep pushing the field.</p>
    </DistillArticle>
  )
}
