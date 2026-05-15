import { ArticleFigure, ArticleVideo, DistillArticle } from "@/components/distill-article"

const toc = [
  { id: "robot-in-action", title: "Robot in action" },
  { id: "robot-architecture", title: "Robot architecture" },
]

export default function ReinforcementLearningRobotProject() {
  return (
    <DistillArticle
      title="Deep RL for Differential Drive Robot"
      published="January 2024"
      subtitle="A from-scratch Arduino and Raspberry Pi robot controlled by a PPO policy for target reaching and obstacle avoidance."
      hero={{
        src: "/optimized/thumbnails/rl-robot.webp",
        alt: "Watercolor illustration for the reinforcement learning robot project",
        width: 400,
        height: 300,
      }}
      links={[
        {
          href: "https://github.com/ludocomito/RL_2024_Sapienza",
          label: "GitHub",
          kind: "github",
        },
      ]}
      toc={toc}
    >
      <p>
        This project was developed for the 2024 Reinforcement Learning class. We built a differential drive robot from
        scratch with Arduino and Raspberry Pi, then implemented a PPO-based policy to control it. The robot's objective
        was to reach a target while avoiding obstacles using only distance, angle-to-target, and distance-sensor
        observations.
      </p>

      <h2 id="robot-in-action">Robot in action</h2>
      <ArticleVideo src="https://www.youtube.com/embed/j6mQqo46NYQ?si=OAat_hotoWX5mAbO" title="Robot in action" />

      <h2 id="robot-architecture">Architecture developed for the robot</h2>
      <ArticleFigure
        src="/optimized/articles/robot-architecture.webp"
        alt="Architecture diagram showing the robot hardware and software components"
        width={1000}
        height={750}
        size="page"
      />
    </DistillArticle>
  )
}
