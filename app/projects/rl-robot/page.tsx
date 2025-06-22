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
        Deep RL for Differential Drive Robot
        </h1>

        <div className="flex justify-center mb-5">
          <Link href="https://github.com/ludocomito/RL_2024_Sapienza" target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
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
                  src="/rl_robot.png"
                  alt="Watercolor illustration of a person sitting on a cliff overlooking a gradient sky transitioning from orange to blue"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-base md:text-lg leading-relaxed">
              <p className="mx-0 sm:text-left md:text-justify lg:text-justify  text-xl md:text-xl lg:text-2xl max-w-none md:max-w-4xl hyphens-auto" style={{hyphens: 'auto', wordBreak: 'break-word'}}>
              Project developed for the 2024 class of Reinforcement Learning. During this project we built form scratch a differential drive robot based on Arduino + Raspberry Pi implementing a PPO based policy to control it. The goal of the robot was to successfully reach the target and avoiding obstacles in the path. The only informations given were about the distance and angle from with respect to the target and the information coming from the distance sensors.



              </p>
              <p className="mx-0 italic mt-8 mb-8 text-left text-4xl md:text-xl lg:text-4xl">
                Robot in action
              </p>
              <div className="flex justify-center my-8">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/j6mQqo46NYQ?si=OAat_hotoWX5mAbO"
                  title="Robot in action"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
              <p className="mx-0 italic mt-24 mb-10 text-left text-4xl md:text-xl lg:text-4xl">
                Architecture developed for the robot
              </p>
              <div className="flex justify-center my-8">
                <Image
                  src="/robot_architecture.png"
                  alt="Architecture diagram showing the robot's hardware and software components"
                  width={800}
                  height={600}
                  className="w-full max-w-4xl h-auto rounded-lg shadow-lg"
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
