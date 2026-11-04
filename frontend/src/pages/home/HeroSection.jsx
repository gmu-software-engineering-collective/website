import { DISCORD_INVITE_URL, TOOLS } from "./content";

function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="eyebrow">Software Engineering Collective at GMU</p>
        <h1>Learn Software Engineering the Way Real Teams Work</h1>
        <p className="hero__lead">
          A student engineering organization where members plan, design, build,
          review, and ship real software together. No experience needed.
        </p>
        <div className="button-row button-row--center">
          <a className="button" href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">
            Join on Discord
          </a>
          <a className="button button--secondary" href="#how-we-work">
            See How We Work
          </a>
        </div>

        <div className="tool-strip">
          <p>Tools we build with</p>
          <ul>
            {TOOLS.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
