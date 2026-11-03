import { LEARNING_VALUES, WORKSHOPS } from "./content";

function LearningSection() {
  return (
    <section className="section" id="learning">
      <div className="container">
        <h2 className="section__title">Structured Learning</h2>
        <div className="split">
          <div className="card feature-card">
            <div className="feature-card__top">
              <h3>We don't pretend to be experts</h3>
              <p>Leaders are facilitators. Everyone, including leadership, is learning.</p>
            </div>
            <ul className="checks">
              {LEARNING_VALUES.map((value) => (
                <li key={value.name}><strong>{value.name}:</strong> {value.text}</li>
              ))}
            </ul>
          </div>

          <div className="card list-card">
            <h3>Semester 1 workshops</h3>
            <ol className="scroll-list">
              {WORKSHOPS.map((workshop, index) => (
                <li key={workshop.topic}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>{workshop.topic}<em>{workshop.detail}</em></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearningSection;
