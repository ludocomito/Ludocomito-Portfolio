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
        Visual WSD using CLIPSeg
        </h1>

        <div className="flex justify-center mb-5">
          <Link href="https://github.com/ludocomito/Visual-WSD-using-CLIPSeg" target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
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
                  src="/wsd-icon.png"
                  alt="Watercolor illustration of a person sitting on a cliff overlooking a gradient sky transitioning from orange to blue"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-base md:text-lg leading-relaxed">
              <br/>
              <p className="mx-0 sm:text-left md:text-justify lg:text-justify text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
              Visual Word Sense Disambiguation (VWSD) is a recently introduced task that arises from the latest developments in the field of Multimodal Natural Language Processing. Given a context sentence, a target word, and a series of candidate images, the goal of this task is to identify the image that most appropriately represents the sense of the target word.



              </p>
              <br/>
             
              <p className="mx-0 italic mt-8 mb-8 text-left text-4xl md:text-xl lg:text-4xl">
                The project
              </p>
              <p className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
              The proposed baseline approach to tackle this problem is to utilize a pre-trained CLIP model to compute the similarities between the context and the candidate images, picking the image with the highest score. As an additional experiment, this work shows how utilizing a specialized version of CLIP for image segmentation (CLIPSeg) leads to a strong improvement in results. The intuition behind this choice is that the task of segmentation can be considered closer to a kind of disambiguation in the field of images, where the model has to properly focus on highlighting specific parts of the image and separate it from the surroundings. Finally, to deal with multilingual test data, input contexts are translated using specific translation models for Italian and Farsi.
              </p>
              <p className="mx-0 italic mt-6 mb-6 text-left text-4xl md:text-xl lg:text-4xl">
                Quantitative results
              </p>
              <p className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
              In order to establish a baseline, a first test was per- formed with the CLIP model on the English test dataset. This method yielded an accuracy score of 58.31%, which still proves the versatility of CLIP in zero-shot learning scenarios without any additional fine-tuning. Supporting the intuition described in the Introduction, the CLIPSeg model's accuracy reached 63.28%, significantly outperforming the baseline by +4.97%. Subsequently, a first attempt was made to test the CLIPSeg model on the Italian and Farsi datasets without any translation, yielding very poor results (18.03% for Italian and 9.5% for Farsi). As expected, the usage of translation models drastically increased the performances in both cases, scoring 50.49% for the Italian dataset and 32% for the Farsi one.
              </p>
              <p className="mx-0 italic mt-6 mb-6 text-left text-4xl md:text-xl lg:text-4xl">
                Qualitative analysis
              </p>
              <p className="mx-0 italic mt-6 mb-6 text-left text-3xl md:text-xl lg:text-3xl">
               Saliency maps
              </p>

              <p className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
              Saliency maps allow us to interpret which regions of the input image were of particular interest with respect to the model's predictions. In this context, we want to interpret which regions of the image are closer to the text query. The idea is to compare samples where the CLIPSeg model predicted correctly and the baseline CLIP missed the prediction, to check whether this is due to CLIPSeg's better capabilities at recognizing relevant parts of the image.
              </p>
              <div className="flex justify-center my-8">
                <Image
                  src="/glutton_saliency.png"
                  alt="Architecture diagram showing the robot's hardware and software components"
                  width={600}
                  height={400}
                  className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
                />
              </div>
              <p className="mx-0 italic mt-6 mb-6 text-left text-3xl md:text-xl lg:text-3xl">
               Image segmentation
              </p>
              <p className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
              In another attempt to investigate CLIPSeg's capabilities at visual disambiguation, another experiment was performed by comparing different contexts corresponding to a certain ambiguous word and looking at how much the segmentation changes with the same word in different contexts for images that were correctly disambiguated. For example we have the ambiguous word "madeira" and the images and contexts for "madeira river" and "madeira wine". As can be noticed, for example using the context "madeira wine" in the river image results in a much weaker segmentation that the respective correct context "madeira river". Another significant example can be seen for the mercury statue. This suggests a correlation between the segmentation and disambiguation capabilities of the model.              
              </p>
              <div className="flex justify-center my-8">
                <Image
                  src="/madeira_segmentations.png"
                  alt="Architecture diagram showing the robot's hardware and software components"
                  width={600}
                  height={400}
                  className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="flex justify-center my-8">
                <Image
                  src="/mercury_segmentations.png"
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
