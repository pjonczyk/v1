"use client";

import { useState } from "react";
import IconGitHub from "../icons/github";
import IconLinkedin from "../icons/linkedin";
import IconXing from "../icons/xing";

const navItems = ["about", "experience"];

export default function Header() {
  const [activeSection, setActiveSection] = useState(navItems.at(0));

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-between lg:max-h-screen lg:w-1/2 lg:py-24 selection:text-teal-900">
      <div>
        <h1 className="text-5xl text-slate-200 font-bold tracking-tight">
          <a href="/">Philipp Jonczyk</a>
        </h1>
        <h2 className="text-slate-200 font-medium text-xl mt-3">
          Software Engineer at CosmosDirekt
        </h2>
        <p className="leading-normal mt-4 max-w-xs">
          I build accessible, modern products and digital experiences for the
          web.
        </p>
        <nav>
          <ul className="hidden lg:block mt-16 w-max">
            {navItems.map((item) => {
              const active = item === activeSection;
              return (
                <li key={item}>
                  <a
                    className="group flex items-center py-3 "
                    href={"#" + item}
                    onClick={() => setActiveSection(item)}
                  >
                    <span
                      className={
                        "w-8 h-px mr-4 group-hover:w-16 group-hover:bg-slate-200 " +
                        (active ? "w-16 bg-slate-200" : "bg-slate-600")
                      }
                    />
                    <span
                      className={
                        "text-xs font-bold uppercase tracking-widest  group-hover:text-slate-200 " +
                        (active ? "text-slate-100" : "text-slate-500")
                      }
                    >
                      {item}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <ul className=" ml-1 mt-8 flex items-center" aria-label="Social Media">
        <li className="mr-5">
          <a
            aria-label="GitHub"
            href="https://github.com/pjonczyk"
            target="_blank"
            className="hover:text-slate-200"
          >
            <IconGitHub />
          </a>
        </li>
        <li className="mr-5">
          <a
            aria-label="Xing"
            href="https://www.xing.com/profile/Philipp_Jonczyk2/cv"
            target="_blank"
            className="hover:text-slate-200"
          >
            <IconXing />
          </a>
        </li>
        <li className="mr-5">
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
