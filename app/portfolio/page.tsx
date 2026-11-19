import type { Metadata } from "next"
import Link from "next/link"
import PostMedia from "@/components/PostMedia"

// X's media CDN returns 403 when a foreign Referer is sent, so this page sends none.
export const metadata: Metadata = {
  title: "Portfolio · Ludovico Comito",
  referrer: "no-referrer",
}

type Size = "feature" | "tall" | "small"

type Post = {
  title: string
  tag: "Biology" | "Lab automation"
  date: string
  url: string
  text: string
  poster: string
  video?: string
  alt: string
  stillAt?: number
  // object-position class choosing what stays in frame when the media is cropped
  focus?: string
  size: Size
}

const posts: Post[] = [
  {
    title: "Astra on a real manipulator",
    tag: "Lab automation",
    date: "Sep 2026",
    url: "https://x.com/ludocomito/status/2100313210335248565",
    text: "Finally tested Astra on a real manipulator! Prompt “Swap the position of the blue and red test tube”. I think it's a very good demo of effective planning and real robot control.",
    poster: "https://pbs.twimg.com/amplify_video_thumb/2100309144343388161/img/OMamX8_5zs0JjTeZ.jpg",
    video: "https://video.twimg.com/amplify_video/2100309144343388161/vid/avc1/640x360/u3DwTP_Q2p1SjJCe.mp4",
    alt: "Robot arm swapping a blue and a red test tube",
    // The arm sits ~31% from the left; left-aligning the crop centers it
    focus: "object-left",
    size: "feature",
  },
  {
    title: "An autonomous lab in 8 hours",
    tag: "Lab automation",
    date: "Jun 2026",
    url: "https://x.com/ludocomito/status/2066550082128814312",
    text: "We pulled off an end to end autonomous lab in 8 hours at HackRome! From creating the dataset to training the robot policy and connecting it to an agent for automated use, we were awarded 4 prizes for the project.",
    poster: "https://pbs.twimg.com/amplify_video_thumb/2066548463072923648/img/GQvtx9NFmKz8yORH.jpg",
    video: "https://video.twimg.com/amplify_video/2066548463072923648/vid/avc1/480x852/IOPl2t9jm8OC5puG.mp4",
    alt: "Autonomous lab prototype built at HackRome",
    size: "tall",
  },
  {
    title: "Making cells searchable from text",
    tag: "Biology",
    date: "Oct 2026",
    url: "https://x.com/ludocomito/status/2110426822911406098",
    text: "Can an unaligned cell model and a language model understand each other? Tried the recent Rosetta Stone approach to make a CLIP model for making cells searchable from text, not perfect but surprisingly good!",
    poster: "https://pbs.twimg.com/amplify_video_thumb/2110426428659408896/img/gRh87Xf-YvUIwbTe.jpg",
    video: "https://video.twimg.com/amplify_video/2110426428659408896/vid/avc1/640x360/jRkcydoYnHrkH-cO.mp4",
    alt: "Text-to-cell retrieval demo",
    stillAt: 3,
    size: "small",
  },
  {
    title: "Astra for lab automation in simulation",
    tag: "Lab automation",
    date: "Sep 2026",
    url: "https://x.com/ludocomito/status/2098219692171080152",
    text: "Had more fun with Astra embodiment + planning capabilities, this time with lab automation. It shows impressive capabilities even when complex reasoning and planning is required for the task. MuJoCo + autobio env.",
    poster: "https://pbs.twimg.com/amplify_video_thumb/2098219662295420929/img/h26W9ntzEn3KCxIF.jpg",
    video: "https://video.twimg.com/amplify_video/2098219662295420929/vid/avc1/640x360/qfFHQ-6AjY8FLpMN.mp4",
    alt: "Simulated robot arm performing a lab task in MuJoCo",
    size: "small",
  },
  {
    title: "The 48-hour cancer binder",
    tag: "Biology",
    date: "May 2026",
    url: "https://x.com/ludocomito/status/2055312580306948185",
    text: "Wrote some field notes on how we designed the best protein binder at the Future of Health hackathon in Zurich. I hope this can be useful as an intro to approaching such hackathons + discuss the current state of this world, still a lot to do!",
    poster: "https://pbs.twimg.com/media/HIXvxNPWQAAnnnZ.jpg",
    alt: "Protein binder designed at the Future of Health hackathon",
    size: "small",
  },
  {
    title: "Damage recovery in a C. elegans-inspired network",
    tag: "Biology",
    date: "Mar 2026",
    url: "https://x.com/ludocomito/status/2030691872486670498",
    text: "Work carried out with Neuromatch fellows. An architecture with few parameters based on the sensory-motor connectivity of C. elegans is much better at recovering damages than an MLP, even at different rates of damage.",
    poster: "https://pbs.twimg.com/amplify_video_thumb/2030690404962541568/img/--M3Xqrj_d7tolke.jpg",
    video: "https://video.twimg.com/amplify_video/2030690404962541568/vid/avc1/640x360/b3d8ezhXSlChxTsk.mp4?tag=14",
    alt: "Simulated swimming worm recovering from damage",
    size: "small",
  },
  {
    title: "Anatomy of BoltzGen",
    tag: "Biology",
    date: "Nov 2025",
    url: "https://x.com/ludocomito/status/1991573388322857276",
    text: "Was very excited about the release of BoltzGen, so I went through it and made an article trying to go super into detail.",
    poster: "https://pbs.twimg.com/media/G6N74FLXQAAA8Jx.png",
    alt: "Cover of the Anatomy of BoltzGen article",
    size: "small",
  },
  {
    title: "AI for food allergies",
    tag: "Biology",
    date: "Oct 2025",
    url: "https://x.com/ludocomito/status/1979151582131364099",
    text: "Last month I started leading a Hugging Science community project. The topic: exploring breakthrough applications of AI in food allergies.",
    poster: "https://pbs.twimg.com/media/G3dbBGJWoAECmB1.jpg",
    alt: "AI for Food Allergies project cover",
    size: "small",
  },
]

// Footprint in the grid, media box, and type scale for each card size.
// Below `sm` small cards collapse into a compact row with a square thumbnail.
const layout: Record<Size, { card: string; article: string; media: string; title: string; text: string }> = {
  feature: {
    card: "sm:col-span-2 lg:row-span-2",
    article: "flex-col",
    media: "aspect-video lg:aspect-auto lg:flex-1 lg:min-h-[18rem]",
    title: "text-2xl md:text-3xl",
    text: "text-base line-clamp-3",
  },
  tall: {
    card: "sm:row-span-2",
    article: "flex-col",
    media: "aspect-[4/5] sm:aspect-auto sm:flex-1 sm:min-h-[16rem]",
    title: "text-xl",
    text: "text-sm line-clamp-3",
  },
  small: {
    card: "",
    article: "flex-row sm:flex-col",
    media: "w-28 shrink-0 self-stretch min-h-[7rem] sm:w-auto sm:min-h-0 sm:aspect-video",
    title: "text-lg",
    text: "text-sm line-clamp-2 sm:line-clamp-3",
  },
}

export default function Portfolio() {
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
          <Link href="/blog" className="text-lg hover:opacity-70 transition-opacity">
            blog
          </Link>
          <Link
            href="https://drive.google.com/file/d/19IZZxzTEsonyKzqAG8KJJMjNe269vuor/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:opacity-70 transition-opacity"
          >
            cv
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-6 md:px-16 lg:px-24 py-8 md:py-10">
        <div className="max-w-6xl mx-auto">
          {/* Intro */}
          <div className="mb-8 md:mb-10 pb-6 border-b border-gray-200">
            <h1 className="text-4xl md:text-6xl font-normal text-red-700 leading-tight">My Portfolio</h1>
            <p className="text-base md:text-lg text-gray-600 mt-2 leading-relaxed">
              Biology and lab automation projects
            </p>
          </div>

          {/* Bento */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 grid-flow-dense">
            {posts.map((post) => {
              const l = layout[post.size]
              return (
                <Link
                  key={post.url}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block ${l.card}`}
                >
                  <article
                    className={`h-full flex ${l.article} rounded-xl overflow-hidden bg-white ring-1 ring-gray-200 transition-all duration-300 ease-out md:group-hover:-translate-y-1 md:group-hover:shadow-xl md:group-hover:shadow-gray-200/60 md:group-hover:ring-gray-300`}
                  >
                    <div className={`relative overflow-hidden bg-gray-100 ${l.media}`}>
                      <PostMedia
                        poster={post.poster}
                        video={post.video}
                        alt={post.alt}
                        stillAt={post.stillAt}
                        className={`${post.focus ?? ""} transition-transform duration-700 ease-out md:group-hover:scale-105`}
                      />
                      <span
                        aria-hidden
                        className="hidden sm:flex absolute top-3 right-3 h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-800 text-sm shadow-sm opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                      >
                        ↗
                      </span>
                    </div>

                    <div className="p-4 md:p-5 flex flex-col gap-1.5 min-w-0">
                      <p className="text-[11px] uppercase tracking-[0.18em]">
                        <span className="text-red-700">{post.tag}</span>
                        <span className="text-gray-400"> · {post.date}</span>
                      </p>
                      <h2
                        className={`${l.title} font-normal leading-snug transition-colors duration-300 md:group-hover:text-red-700`}
                      >
                        {post.title}
                      </h2>
                      <p className={`${l.text} text-gray-600 leading-relaxed`}>{post.text}</p>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 md:py-12 mt-8 md:mt-16">
        <div className="flex justify-center gap-8">
          <Link href="https://www.linkedin.com/in/ludovico-comito/" className="text-lg hover:opacity-70 transition-opacity">
            LinkedIn
          </Link>
          <Link href="https://x.com/ludocomito" className="text-lg hover:opacity-70 transition-opacity">
            X
          </Link>
          <Link href="https://github.com/ludocomito" className="text-lg hover:opacity-70 transition-opacity">
            GitHub
          </Link>
        </div>
      </footer>
    </div>
  )
}
