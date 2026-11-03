import { GITHUB_URL, PROJECT_FEATURES, SEMESTER_PHASES } from "./content";

function CurrentProject() {
  return (
    <article className="card project-feature">
      <div className="project-feature__head">
        <h3>SEC Website</h3>
        <span className="status">In progress</span>
      </div>
      <p>
        The club's official website, built from the ground up with our own engineering process.
        It's the training ground for every pod this semester.
      </p>

      <h4>Features</h4>
      <ul className="feature-list">
        {PROJECT_FEATURES.map((feature) => <li key={feature}>{feature}</li>)}
      </ul>

      <h4>Semester roadmap</h4>
      <ol className="phases">
        {SEMESTER_PHASES.map((phase) => (
          <li key={phase.name}>{phase.name}<em>{phase.weeks}</em></li>
        ))}
      </ol>

      <a className="text-link" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
        View on GitHub →
      </a>
    </article>
  );
}

function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section__title">Projects</h2>
        <p className="section__lead">What members are building, using the same process every semester.</p>
        <div className="projects">
          <CurrentProject />
          <div className="project-stack">
            <div className="project-next">
              <h3>Next project</h3>
              <p>Chosen by members after the website ships.</p>
            </div>
            <div className="project-next">
              <h3>Have an idea?</h3>
              <p>Pitch it at a retrospective. Good ideas become the next project.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
