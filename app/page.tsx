import Image from "next/image"
import Link from "next/link"
import HomeVideo from "@/components/HomeVideo"

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-serif">
      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-16 lg:px-32 py-4 md:py-6">
        <Link href="/" className="text-2xl font-normal hover:text-red-700 transition-colors duration-500 ease-out">
          LC
        </Link>
        <nav className="flex gap-8">
          <Link href="/" className="text-lg hover:opacity-70 transition-opacity underline">
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
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-20">
          {/* Home Video */}
          <HomeVideo />
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 md:mb-12 leading-relaxed">
            Ludovico Comito - AI Student
          </p>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Exploring the intersection of artificial intelligence and science, with a focus on healthcare and biotech applications. 
          </p>
        </div>



        {/* Featured Work */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-center mb-8 md:mb-12">Featured Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Featured Project 1 */}
            <Link href="/projects/pnmlr" className="group block">
              <div className="transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-gray-200/50 p-4 -m-4 rounded-lg text-center lg:text-left">
                <div className="mb-4 flex justify-center lg:justify-start">
                  <Image
                    src="/pnmlr-icon5.png"
                    alt="PNMLR: Personalized Route Recommendation with GATs"
                    width={300}
                    height={300}
                    className="w-3/4 md:w-4/5 lg:w-full h-auto transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-normal mb-2 transition-colors duration-300 group-hover:text-red-700">
                  PNMLR: Personalized Route Recommendation with GATs
                </h3>
           
              </div>
            </Link>

            {/* Featured Project 2 */}
            <Link href="/projects/dsi-for-ir" className="group block">
              <div className="transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-gray-200/50 p-4 -m-4 rounded-lg text-center lg:text-left">
                <div className="mb-4 flex justify-center lg:justify-start">
                  <Image
                    src="/DSI-illustration.png"
                    alt="Differentiable Search Index"
                    width={300}
                    height={300}
                    className="w-3/4 md:w-4/5 lg:w-full h-auto transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-normal mb-2 transition-colors duration-300 group-hover:text-red-700">
                  Differentiable Search Index
                </h3>
                <p className="text-gray-600 text-base md:text-base">Experiments on information retrieval</p>
              </div>
            </Link>

            {/* Featured Project 3 */}
            <Link href="/projects/rl-robot" className="group block">
              <div className="transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-gray-200/50 p-4 -m-4 rounded-lg text-center lg:text-left">
                <div className="mb-4 flex justify-center lg:justify-start">
                  <Image
                    src="/rl_robot.png"
                    alt="Reinforcement Learning project"
                    width={300}
                    height={300}
                    className="w-3/4 md:w-4/5 lg:w-full h-auto transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-normal mb-2 transition-colors duration-300 group-hover:text-red-700">
                Deep RL for Differential Drive Robot

                </h3>
              
              </div>
            </Link>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 md:mt-16">
            <Link
              href="/projects"
              className="inline-block text-lg md:text-xl text-red-700 hover:opacity-70 transition-opacity border-b border-red-700 hover:border-opacity-70"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 md:py-12 mt-12 md:mt-20">
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
