import IconGitHub from "./icons/github";
import IconInstagram from "./icons/instagram";
import IconLinkedin from "./icons/linkedin";
import IconTwitter from "./icons/twitter";

const navItems = ["about", "experience", "projects"];

export default function Header() {
  return (
    <header className="lg:sticky selection:text-teal-900">
      <h1 className="text-slate-200 font-bold">Philipp Jonczyk</h1>
      <h2 className="text-slate-200 font-medium">
        Software Engineer at CosmosDirekt
      </h2>
      <p className="leading-normal">
        I build accesible, modern products and digital experiences for the web.
      </p>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item}>
              <a className="hover:text-slate-200" href={"#" + item}>
                {item.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <ul aria-label="Social Media">
        <li>
          <a
            aria-label="GitHub"
            href="https://github.com/pjonczyk"
            target="_blank"
            className="hover:text-slate-200"
          >
            <IconGitHub />
          </a>
        </li>
        <li>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/philipp-jonczyk-2a15a6204/"
            target="_blank"
            className="hover:text-slate-200"
          >
            <IconLinkedin />
          </a>
        </li>
      </ul>
    </header>
  );
}
