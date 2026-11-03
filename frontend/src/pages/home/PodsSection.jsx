import { PODS } from "./content";

function PodsSection() {
  return (
    <section className="section" id="pods">
      <div className="container">
        <h2 className="section__title">Pick Your Pod</h2>
        <p className="section__lead">Every pod owns a slice of the system. Pick the one you want to learn.</p>
        <div className="pod-row">
          {PODS.map((pod) => (
            <article className="card pod-card" key={pod.name}>
              <span className="pod-card__tag">{pod.name}</span>
              <h3>{pod.title}</h3>
              <p>{pod.text}</p>
              <ul>
                {pod.includes.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PodsSection;
