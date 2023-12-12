import ExperienceCard from "./experienceCard";

const experiences = [
  {
    startDate: "Jan 2021",
    endDate: "present",
    title: "Software Engineer · CosmosDirekt",
    link: "https://www.cosmosdirekt.de/",
    text: (
      <span>
        Deliver and style interactive web apps for CosmosDirekt in an agile
        scrum environment.
      </span>
    ),
    tags: [
      "React",
      "JavaScript",
      "TypeScript",
      "Java",
      "SpringBoot",
      "Git",
      "GitLab",
    ],
  },
  {
    startDate: "Jan 2019",
    endDate: "Dec 2020",
    title: "Research Assistant · Chair of Cognitive Assistants (DFKI)",
    link: "https://www.dfki.de/en/web/research/research-departments/cognitive-assistants",
    text: (
      <span>
        Assisted in the project{" "}
        <a
          className="text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://www.dfki.de/en/web/research/projects-and-publications/project/koposab"
          target="_blank"
        >
          KoPoSaB
        </a>{" "}
        in the development of a collaboration platform based on artificial
        intelligence for the control and optimization of autonomous bot systems.
        Developed a novel route generation method for end customers in the
        retail industry which takes other customers and their planned routes
        into account in order to avoid long queues at fresh food counters and
        checkouts.
      </span>
    ),
    tags: ["Java", "Unity", "Git", "GitLab"],
  },
  {
    startDate: "Oct 2017",
    endDate: "Sept 2018",
    title: "Research Assistant · Chair of Intelligent User Interfaces (DFKI)",
    link: "https://www.dfki.de/",
    text: (
      <span>
        Assisted in the development of TECS (Thrift Event Communication Service)
        which is a communication middleware for C#, C++, Ruby and Python. It can
        be used for rapid prototyping in research scenarios which involve
        different programming languages and operating systems. Assisted in the
        project{" "}
        <a
          className="text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://www.dfki.de/en/web/research/projects-and-publications/project/tractat"
          target="_blank"
        >
          TRACTAT
        </a>{" "}
        which aims to lay the foundation for a smooth and effective Transfer of
        Control (ToC) between autonomous systems and humans in cyber-physical
        environments.
      </span>
    ),
    tags: ["Java", "Git", "GitLab"],
  },
  {
    startDate: "Aug 2017",
    endDate: "Sept 2017",
    title:
      "Software intership tutor · Chair of Software Engineering (Saarland University)",
    link: "https://www.cosmosdirekt.de/",
    text: (
      <span>
        Assisted teams of 7 students as a tutor in the{" "}
        <a
          className="text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://www.st.cs.uni-saarland.de/edu/sopra/2017/"
          target="_blank"
        >
          SoPra
        </a>
        . Evaluated the teams software architecture and design decisions.
      </span>
    ),
    tags: ["Java", "Git", "GitLab", "UML"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mt-10 lg:mt-32 mb-20 scroll-mt-24">
      <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only pb-4">
        Experience
      </h2>
      <ol>
        {experiences.map((experience) => {
          return (
            <li key={experience.title} className="mb-12">
              <ExperienceCard {...experience} />
            </li>
          );
        })}
      </ol>
    </section>
  );
}
