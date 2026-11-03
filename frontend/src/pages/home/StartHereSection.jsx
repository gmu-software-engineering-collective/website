import { START_HERE } from "./content";

function StartHereSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">Start Here</h2>
        <p className="section__lead">Everything a new member needs in week one.</p>
        <div className="three-up">
          {START_HERE.map((item) => (
            <article className="card start-card" key={item.title}>
              <div className="start-card__badge" aria-hidden="true">{item.badge}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a className="text-link" href={item.href}>{item.link} →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StartHereSection;
