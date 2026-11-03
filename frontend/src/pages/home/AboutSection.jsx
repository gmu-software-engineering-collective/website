import { DIFFERENCES } from "./content";

// Short version here; the full About page comes later behind "Learn more"
function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section__title">About SEC</h2>
        <div className="about">
          <div>
            <p className="about__mission">
              We're building a software engineering organization, not a coding club: a place where
              students learn how real teams plan, design, build, review, and ship software together.
            </p>
            <p className="about__body">
              Leaders are facilitators, not experts. Every decision is written down, so the club
              outlives its founders and every new member can catch up without asking around.
            </p>
            <a className="text-link" href="#">Learn more about SEC →</a>
          </div>

          <ul className="differences" aria-label="What makes us different">
            {DIFFERENCES.map((item) => (
              <li className="card" key={item.not}>
                <span className="differences__not">{item.not}</span>
                <span className="differences__is">{item.is}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
