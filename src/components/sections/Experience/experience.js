import ExperienceCard from "./experienceCard";

const experiences = [
  {
    startDate: "JAN 2021",
    endDate: "PRESENT",
    title: "Software Engineer · CosmosDirekt",
    link: "https://www.cosmosdirekt.de/",
    text: "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship. ",
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
    startDate: "JAN 2019",
    endDate: "DEC 2020",
    title:
      "Research Assistant · Deutsches Forschungszentrum für künstliche Intelligenz",
    link: "https://www.cosmosdirekt.de/",
    text: "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship. ",
    tags: ["Java", "Unity", "Git", "GitLab"],
  },
  {
    startDate: "OCT 2017",
    endDate: "SEPT 2018",
    title:
      "Research Assistant · Deutsches Forschungszentrum für künstliche Intelligenz",
    link: "https://www.cosmosdirekt.de/",
    text: "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship. ",
    tags: ["Java", "Git", "GitLab"],
  },
  {
    startDate: "AUG 2017",
    endDate: "SEPT 2017",
    title:
      "Tutor for software intership · Chair of Software Engineering at Saarland Univeristy",
    link: "https://www.cosmosdirekt.de/",
    text: "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship. ",
    tags: ["Java", "Git", "GitLab", "UML"],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <ol>
        {experiences.map((experience) => {
          return (
            <li key={experience.title}>
              <ExperienceCard {...experience} />
            </li>
          );
        })}
      </ol>
    </section>
  );
}
