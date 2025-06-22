import Image from "next/image"
import Link from "next/link"
import { Github } from "lucide-react"
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
        <h1 className="text-4xl md:text-6xl lg:text-5xl font-normal text-red-700 text-center mb-6 md:mb-8 leading-tight">
        Homonymy disambiguation using DeBERTa
        </h1>

        <div className="flex justify-center mb-5">
          <Link href="https://github.com/ludocomito/Homonymy-Disambiguation-NLP?tab=readme-ov-file" target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
            <Github className="w-8 mt-2 lg:mt-5  lg:mb-5 h-10 text-gray-800 hover:text-red-700 transition-colors" />
          </Link>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            {/* Floating Image */}
            <div className="block md:float-left mb-6 md:mb-4 md:mr-6 text-center md:text-left">
              <div className="w-48 md:w-[280px] mx-auto md:mx-0">
                <Image
                  src="/homonymy_icon.png"
                  alt="Watercolor illustration of a person sitting on a cliff overlooking a gradient sky transitioning from orange to blue"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-base md:text-lg leading-relaxed">
    
              <p className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
              In the field of Natural Language Processing, Word Sense Disambiguation (WSD) is a challenging task with the objective of assigning the correct meaning to ambiguous target words, given their context. Homonymy disambiguation is a specific instance of this task, where related senses are clustered together, leading to a form of Coarse-Grained WSD. In this context, two words are homonyms if they share the same lexical form but have unrelated meanings. BERT-based models such as GlossBERT have been extensively used, demonstrating the capability to produce contextualized embeddings that can capture word senses. The work presented describes a series of experiments involving BERT-based architectures, detailing the process of fine-tuning and the implementation choices.



              </p>
              <br/>
             
              <p className="mx-0 italic mt-5 mb-8 text-left text-4xl md:text-xl lg:text-4xl">
                Proposed architecture
              </p>
              <p className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
              The proposed architecture consists of two main modules: DeBERTa, used to extract word embeddings for each token, and a classifier head, consisting of a Multi-Layer Perceptron, which takes the Transformer's embeddings as input and outputs the logits for each possible class. Additionally, the model implements some operations both at the embeddings level and at the logits level, which will be highlighted in the following paragraphs.              </p>
              <div className="flex justify-center my-8">
                <Image
                  src="/proposed_architecture_homonymy.png"
                  alt="Architecture diagram showing the robot's hardware and software components"
                  width={600}
                  height={400}
                  className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
                />
              </div>
              <p className="mx-0 italic mt-6 mb-6 text-left text-3xl md:text-xl lg:text-3xl">
               Averaging hidden states
              </p>
              <p className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
              As different layers of BERT are expected to encode information at different levels, the proposed method considers the representation obtained by averaging the last four hidden states of BERT to obtain a more informative representation.
              </p>
              <p className="mx-0 italic mt-6 mb-6 text-left text-3xl md:text-xl lg:text-3xl">
              Sub-token Pooling
              </p>
            
              <p className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
              During tokenization, certain words can be split by BERT's tokenizer into sub-tokens. After being fed to the transformer, the resulting sub-token embeddings for each word are averaged to obtain a single representation for the entire word. This operation is performed for each word.
              </p>
              <div className="flex justify-center my-8">
                <Image
                  src="/token_handling.png"
                  alt="Architecture diagram showing the robot's hardware and software components"
                  width={600}
                  height={400}
                  className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
                />
              </div>
              <p className="mx-0 italic mt-6 mb-6 text-left text-4xl md:text-xl lg:text-3xl">
                Logits mask
              </p>
              <p className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
              In this kind of task, the classifier could potentially deal with thousands of possible senses. To address this problem, the candidate senses for target words present in the datasets are used to create a logits mask in the form of a list of zeros and ones. Specifically, ones are assigned to all the candidate senses for each target word, while all the others correspond to zero. This constrains the model to focus on the actual candidates.
              </p>
              <div className="flex justify-center my-8">
                <Image
                  src="/logits_mask.png"
                  alt="Architecture diagram showing the robot's hardware and software components"
                  width={600}
                  height={400}
                  className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
                />
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
