export default function ExperienceCard({
  startDate,
  endDate,
  title,
  link,
  text,
  tags,
}) {
  return (
    <div className="group grid sm:grid-cols-10 relative md:gap-4 sm:gap-8">
      <header className="mt-1 tracking-wide text-xs font-semibold uppercase text-slate-500 sm:col-span-3">
        {startDate} — {endDate}
      </header>
      <div className="sm:col-span-7">
        <h3>
          <div>
            <a
              href={link}
              target="_blank"
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            >
              {title}
            </a>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal">{text}</p>
        <ul className="mt-2 flex flex-wrap">
          {tags.map((map) => {
            return (
              <li key={map} className="mr-1.5 mt-2">
                <div className="rounded-full bg-teal-400/10 px-3 py-1 text-sm font-medium leading-5 text-teal-300">
                  {map}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
