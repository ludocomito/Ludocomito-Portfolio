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
        POSTino: a mobile robot for delivery pickup
        </h1>


        {/* Content Section */}
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            {/* Floating Image */}
            <div className="block md:float-left mb-6 md:mb-4 md:mr-6 text-center md:text-left">
              <div className="w-48 md:w-[280px] mx-auto md:mx-0">
                <Image
                  src="/postino-icon.png"
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
              <p className="mx-0 text-left text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
              The inspiration for this thesis project was derived from a task of the RoboCup@Home Education 2022. QThis competition is one of the main events in the field of educational robotics at a global scale, and in its @Home versions it has the purpose of making new generations of students interested in the fields of artificial intelligence and robotics approach the development of solutions that could have an effective impact on daily life, providing the educative instruments in order to develop innovative ideas.
              The competition is divided in two categories: Standard Platform and Open Platform. The first one requires competing using only Pepper robots developed by Softbank Robotics, while the Open Platform (the one chosen in this case) admits participation using custom made robots. As described by the competition rulebook, a score based on the overall completeness of the solution gets assigned to each team, which has the pobbility of accessing the final phase of the competition, where an additional task will be assignes.
              <br/>
              <br/>
              The chosen task for this project is named "Carry My Luggage". The goal described consists in transporting a payload from the starting position to the final one while following an operator. Bonus points get rewarded in case it is demonstrated that the robot can navigate the surrounding environment in a "conscious" way.

              The inspiration, derived from the nature of the chosen task, brought to the development of an idea based on a robot whose function can have a real impact on daily life and in a domestic sphere. In particular, it sought to provide support for achieving the social distancing imposed by the COVID-19 pandemic to help effectively prevent new infections. The idea stems from the evidence of data reporting a marked increase since the start of the pandemic in the number of home deliveries of products of all kinds. Before illustrating this idea, it is useful to refer to the context in which it was born, that is food delivery (the delivery at home of ready meals), one of the fastest growing sectors with a market that has more than tripled since the beginning of 2019.
              </p>
              <br/>
              <p className="mx-0 italic mt-8 mb-8 text-left text-4xl md:text-xl lg:text-4xl">
                Robot in action
              </p>
              <div className="flex justify-center my-8">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/su1gdKDyC_U?si=OAat_hotoWX5mAbO"
                  title="Robot in action"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-lg"
                ></iframe>
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
