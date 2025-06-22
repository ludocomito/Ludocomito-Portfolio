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
          Differentiable Search Index For Information Retrieval
        </h1>

        <div className="flex justify-center mb-5">
          <Link href="https://github.com/ludocomito/DSI-Project" target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
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
                  src="/DSI-illustration.png"
                  alt="Watercolor illustration of a person sitting on a cliff overlooking a gradient sky transitioning from orange to blue"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-base md:text-lg leading-relaxed">
              <p className="mx-0 sm:text-left md:text-justify lg:text-justify text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
              In the modern of the approaches to Information Retrieval, one of the most interesting solutions was published in [1], where a single encoder-decoder architecture was trained in a multitask fashion to perform both indexing and retrieval of documents at the same time. The core idea is to map string queries directly to relevant docids, simplifying the retrieval process. With this project, we explore solutions based on the same DSI concept, but exploring new architectures and new training approaches to further deepen our understanding of the original paper and trying to clarify and uncover its strengths and weaknesses.



              </p>
              <p className="mx-0 italic mt-8 mb-8 text-left text-4xl md:text-xl lg:text-4xl">
                Introduction
              </p>
              <p className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
              The original DSI model is based on an encoder-decoder architecture, specifically a pre-trained T5 model. In the DSI approach, the model is trained to perform both indexing and retrieval at the same time in a multi-task fashion. We chose as our baseline the Okapi BM25 scores and as the base model to work with the T5, as specified in the aforementioned paper. From there we proceeded to experiment with the model's architecture. More specifically we implemented the use of a model belonging to a recently presented class of models (Lamini) pretrained using knowledge distillation. Finally, we repeated the experiment again but with a custom encoder-decoder architecture. Furthermore we tried to tinker with various pre-processing strategies, first leveraging the multi-task approach as suggested by the referenced paper and, after that, following our own intuition applying data augmentation through query generation taking inspiration from <a href="https://arxiv.org/abs/2305.15115" className="underline" target="_blank" rel="noopener noreferrer">Tang et al</a>.
              </p>
              <p className="mx-0 italic mt-8 mb-8 text-left text-4xl md:text-xl lg:text-4xl">
                Model Architecture
              </p>
              <p className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
              The chosen model to perform our experiments is the T5 encoder-decoder architecture. The first experiment is run on the base T5 model in order to have a viable comparison between the methodology used in the original paper and ours. The first iteration of our methodology is to implement the Lamini-Flan-T5 model. 
              Its main features are the use of both the Flan T5 variant and the Lamini method. Flan T5 utilizes the same encoder-decoder architecture as T5, but has been trained on a larger instruction finetuning dataset.
              <br/>
              <br/>
              On the other hand the Lamini method is based on knowledge distillation, which means training a smaller model (called student) leveraging the knowledge of a bigger model (the teacher). In this case the teacher is gpt-turbo-3.5 and the student is Flan T5. The teacher is used to produce a synthetic output that the student will learn on.
              <br/>
              <br/>
              The second iteration of our methodology is to perform the training on a custom encoder-decoder architecture. The choice for the encoder fell on bert-based-uncased model, this is because it is one of the most commonly recognised starting points of any LLM centered research worth its salt. The choice for the decoder fell instead on gpt-2 since it is a decoder only model that has shown incredibly promising results. In the following section 4 we will go in depth on how we tested the various architectures and how we devised the strategy for the experiments that we conducted, including the additional preprocessing and the test conducted.
        
              </p>
              <p className="mx-0 italic mt-8 mb-8 text-left text-4xl md:text-xl lg:text-4xl">
                Results
              </p>
              <p className="mx-0 mb-14 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
              As expected, the BM-25 baseline scored very poor results, reaching only 0.003% MAP and 0.002% for Recall@10. Our hypothesis is that the model is just able to capture statistical correlations between words, but not the full semantics of the documents and their relationship with their semantic ids.


              <br/>
              <br/>
              The T5-base model scored 2.53% in MAP and 1.92% in Recall@10, and was outperformed by the Lamini Flan T5 in both metrics while utilizing the same hyperparameters (batch size 32 and learning rate 0.0005). As the Lamini Flan T5 model demonstrated better performances, we decided to conduct hyperparameter tuning on it, by experimenting with different batch sizes and learning rates. The best result was achieved with batch size 64 and learning rate 0.0005, achieving 3.34% MAP and 2.62% Recall@10.
              <br/>
              <br/>
              Our hypothesis is that thanks to its extensive pre-training and the Lamini knowledge distillation techniques, the Lamini Flan T5 model has higher capabilities at dealing with multi-task learning tasks. Although performing the overall highest validation MAP and Recall@10 during training, the model trained on the Query Generation augmented dataset scored the same performances as the Lamini T5 model.
             <br/>
             <br/>
             Finally, the worst performing model was the BERT-GPT2 custom encoder-decoder, which only scored 0.0019% MAP and 0.0016% Recall@10. In our opinion, this is due to the incompatibility between the representation of both encoder and decoder and could improve by incrementing the number of training epochs.
              </p>
              <div className="overflow-x-auto">
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
\\end{array}
 $$`}</Latex>
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
