import differentIcon from "../../assets/about/different.png";
import missionIcon from "../../assets/about/mission.png";
import visionIcon from "../../assets/about/vision.png";
import { ABOUT, DIFFERENCES } from "./content";

function AboutCard({ icon, title, children }) {
  return (
    <article className="about-card">
      <span className="about-card__icon">
        <img src={icon} alt="" width="56" height="56" />
      </span>
      <h3>{title}</h3>
      {children}
    </article>
  );
}

// Short version here; the full About page comes later behind "Learn more"
function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section__title">About SEC</h2>
        <p className="about__intro">{ABOUT.intro}</p>

        <div className="about">
          <AboutCard icon={missionIcon} title="Mission">
            <p>{ABOUT.mission}</p>
          </AboutCard>
          <AboutCard icon={visionIcon} title="Vision">
            <p>{ABOUT.vision}</p>
          </AboutCard>
          <AboutCard icon={differentIcon} title="What makes us different">
            <ul className="about-card__checks">
              {DIFFERENCES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </AboutCard>
        </div>

        <p className="about__more">
          <a className="button button--secondary" href="#">Learn more about SEC</a>
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
