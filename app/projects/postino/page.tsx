import { ArticleVideo, DistillArticle } from "@/components/distill-article"

const toc = [{ id: "robot-in-action", title: "Robot in action" }]

export default function PostinoProject() {
  return (
    <DistillArticle
      title="POSTino: a mobile robot for delivery pickup"
      published="December 2022"
      subtitle="A mobile delivery robot inspired by RoboCup@Home Education, designed to follow an operator and support contactless delivery pickup."
      hero={{
        src: "/optimized/thumbnails/postino.webp",
        alt: "Watercolor illustration for the POSTino delivery robot project",
        width: 400,
        height: 300,
      }}
      toc={toc}
    >
      <p>
        The inspiration for this thesis project came from a RoboCup@Home Education 2022 task. The competition is one of
        the main educational robotics events at a global scale, and its @Home version encourages students to develop AI
        and robotics solutions that can have practical impact in daily life.
      </p>

      <p>
        The competition is divided into Standard Platform and Open Platform categories. The Standard Platform track uses
        Pepper robots from SoftBank Robotics, while the Open Platform track allows custom robots. The chosen task,
        "Carry My Luggage", asks the robot to transport a payload from a starting position to a destination while
        following an operator. Bonus points are awarded when the robot can navigate the surrounding environment in a
        conscious way.
      </p>

      <p>
        The nature of the task led to an idea with a direct domestic use case: a robot that could help support social
        distancing during the COVID-19 pandemic by enabling contactless delivery pickup. The concept was motivated by
        the rapid increase in home delivery services since the beginning of the pandemic, especially in food delivery.
      </p>

      <h2 id="robot-in-action">Robot in action</h2>
      <ArticleVideo src="https://www.youtube.com/embed/su1gdKDyC_U?si=OAat_hotoWX5mAbO" title="POSTino robot in action" />
    </DistillArticle>
  )
}
