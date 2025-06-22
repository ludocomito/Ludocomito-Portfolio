import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      id: "pnmlr",
      title: "PNMLR: Enhancing Route Recommendations With Personalized Preferences using GATs",
      date: "16 feb 2025",
      image: "/pnmlr-icon5.png",
      alt: "Watercolor illustration of a person sitting on a cliff overlooking a gradient sky",
      preview:
        "A personalized route recommendation system that integrates user preferences using Graph Attention Networks. The PNMLR model considers factors like user ID, time of day, and transport mode to deliver truly personalized route predictions, significantly outperforming traditional generic routing solutions.",
    },
    {
      id: "dsi-for-ir",
      title: "Differentiable Search Index For Information Retrieval",
      date: "16 feb 2025",
      image: "/DSI-illustration.png",
      alt: "Watercolor illustration of a person sitting on a cliff overlooking a gradient sky",
      preview:
        "An exploration of the DSI concept using encoder-decoder architectures for information retrieval. This project investigates mapping string queries directly to relevant document IDs, experimenting with T5, Lamini-Flan-T5, and custom BERT-GPT2 architectures to understand the strengths and weaknesses of differentiable search indexing.",
    },
    {
      id: "rl-robot",
      title: "Deep RL for Differential Drive Robot",
      date: "16 feb 2025",
      image: "/rl_robot.png",
      alt: "Watercolor illustration of a cozy study workspace with a robot and person learning together",
      preview:
        "A from-scratch differential drive robot built with Arduino and Raspberry Pi, controlled by a PPO-based reinforcement learning policy. The robot navigates to targets while avoiding obstacles using only distance and angle information from sensors, demonstrating practical applications of deep RL in robotics.",
    },
    {
      id: "wsd-clipseg",
      title: "Visual WSD using CLIPSeg",
      date: "21 jun 2025",
      image: "/wsd-icon.png",
      alt: "Watercolor illustration of a figure with shield standing in a maze-like structure",
      preview:
        "A Visual Word Sense Disambiguation system that identifies images representing the correct sense of ambiguous words in context. Using CLIPSeg for improved image segmentation capabilities, this project achieves significant performance gains over baseline CLIP models, with support for multilingual contexts through translation.",
    },
    {
      id: "homonimy-disambiguation",
      title: "Homonymy disambiguation using DeBERTa",
      date: "21 jun 2025",
      image: "/homonymy_icon.png",
      alt: "Watercolor illustration of a figure with shield standing in a maze-like structure",
      preview:
        "A homonymy disambiguation system using DeBERTa for coarse-grained Word Sense Disambiguation. The architecture incorporates hidden state averaging, sub-token pooling, and logits masking to effectively assign correct meanings to ambiguous words based on their context, handling thousands of possible senses efficiently.",
    },
    {
      id: "postino",
      title: "POSTino: a mobile robot for delivery pickup",
      date: "21 jun 2025",
      image: "/postino-icon.png",
      alt: "Watercolor illustration of a figure with shield standing in a maze-like structure",
      preview:
        "A mobile delivery robot designed for the RoboCup@Home Education 2022 competition, inspired by the 'Carry My Luggage' task. POSTino addresses real-world delivery challenges by providing contactless pickup solutions, supporting social distancing requirements during the COVID-19 pandemic while following operators and navigating environments autonomously.",
    },
  ]

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
          <Link href="/projects" className="text-lg hover:opacity-70 transition-opacity underline">
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
      <main className="px-6 md:px-16 lg:px-32 py-8 md:py-12">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal text-red-700 text-center mb-8 md:mb-16 leading-tight">
          Projects
        </h1>

        {/* Projects List */}
        <div className="max-w-full md:max-w-2xl mx-auto space-y-8 md:space-y-16">
          {projects.map((project, index) => (
            <div key={project.id}>
              <Link href={`/projects/${project.id}`} className="block group relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center transition-all duration-300 ease-out md:group-hover:-translate-y-1 md:group-hover:shadow-lg md:group-hover:shadow-gray-200/50 p-4 -m-4 rounded-lg">
                  {/* Project Image */}
                  <div className="md:col-span-1 flex justify-center md:justify-start">
                    <div className="w-48 md:w-full md:max-w-xs transition-transform duration-300 ease-out md:group-hover:scale-105">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.alt}
                        width={300}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="md:col-span-2 text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl lg:text-4xl font-normal mb-2 leading-tight transition-colors duration-300 md:group-hover:text-red-700">
                      {project.title}
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 transition-colors duration-300 md:group-hover:text-gray-800">
                      {project.date}
                    </p>
                  </div>
                </div>

                {/* Book Page Preview - Hidden on mobile */}
                <div className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 ml-8 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform translate-x-4 group-hover:translate-x-0 z-10">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-xl p-6 relative">
                    {/* Page corner fold effect */}
                    <div className="absolute top-0 right-0 w-6 h-6 bg-gray-100 transform rotate-45 translate-x-3 -translate-y-3 border-r border-t border-gray-200"></div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-xl font-normal mb-3 text-red-700 border-b border-gray-200 pb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-700">{project.preview}</p>
                      <div className="mt-4 text-xs text-gray-500 italic">Click to read more...</div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Divider line (except for last item) */}
              {index < projects.length - 1 && <div className="mt-8 md:mt-16 border-b border-gray-200"></div>}
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 md:py-12 mt-8 md:mt-16">
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
