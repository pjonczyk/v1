export default function About() {
  return (
    <section id="about" className="leading-relaxed">
      <p className="mb-5">
        {
          <span>
            Back in 2014, I started studying computer science at Saarland
            University and soon realized that software development and
            architecture is what I enjoy the most. Fast-forward to today, and
            I've had the privilege of building software for a{" "}
            <a
              href="https://www.dfki.de/"
              target="_blank"
              className="text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            >
              research center
            </a>{" "}
            and a large corporation.
          </span>
        }
      </p>
      <p className="mb-5">
        {
          <span>
            My main focus these days is to get to know more frontend and backend
            technologies and libraries in order to increase my technology stack.
          </span>
        }
      </p>
    </section>
  );
}
