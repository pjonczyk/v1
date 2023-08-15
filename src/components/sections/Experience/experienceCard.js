export default function ExperienceCard({
  startDate,
  endDate,
  title,
  link,
  text,
  tags,
}) {
  return (
    <div>
      <div>
        {startDate} — {endDate}
      </div>
      <div>
        <h3>
          <a href={link} target="_blank">
            {title}
          </a>
        </h3>
        <p>{text}</p>
        <ul>
          {tags.map((map) => {
            return <li>{map}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
