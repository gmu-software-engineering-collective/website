import HeroAnimation from "../components/HeroAnimation";

// TODO: replace with the club's permanent Discord invite link
const DISCORD_INVITE_URL = "https://discord.gg/REPLACE_ME";

const differentiators = [
  {
    number: "01",
    title: "Organization First",
    description:
      "Before writing production code, we build the engineering organization that supports every project.",
  },
  {
    number: "02",
    title: "Build, Not Watch",
    description:
      "We learn by building real systems, opening pull requests, and shipping features.",
  },
  {
    number: "03",
    title: "Leaders Facilitate",
    description:
      "Leaders are facilitators, not experts. Nobody pretends to know everything.",
  },
  {
    number: "04",
    title: "Documentation First",
    description:
      "Knowledge is written down so the club outlives its founders.",
  },
  {
    number: "05",
    title: "Repeatable Process",
    description:
      "One engineering process, applied to every project, every semester.",
  },
];

const learningCycle = [
  {
    number: "01",
    title: "Learn",
    description: "Understand first principles, not just syntax.",
  },
  {
    number: "02",
    title: "Apply",
    description: "Build the concept into the club’s real project.",
  },
  {
    number: "03",
    title: "Refactor",
    description: "Improve the design and discuss the tradeoffs.",
  },
  {
    number: "04",
    title: "Teach",
    description: "Share what we learned through a structured workshop.",
  },
  {
    number: "05",
    title: "Document",
    description: "Publish the knowledge for current and future members.",
  },
];

const pods = [
  {
    number: "01",
    title: "Frontend",
    description:
      "UI components, pages, responsive layout, and design system implementation.",
  },
  {
    number: "02",
    title: "Backend",
    description:
      "REST APIs, authentication, business logic, database design, and data access.",
  },
  {
    number: "03",
    title: "DevOps",
    description:
      "CI/CD pipelines, Docker, deployment, environments, and secrets management.",
  },
  {
    number: "04",
    title: "QA",
    description:
      "Test suites, accessibility checks, mobile testing, and regression coverage.",
  },
];

const semesterPhases = [
  {
    number: "01",
    label: "Early Semester",
    title: "Foundation",
    description:
      "Set up the team, define how we work, plan the project, and shape the initial design.",
  },
  {
    number: "02",
    label: "Build Phase",
    title: "Build",
    description:
      "Develop features in short sprints across the project’s areas of work.",
  },
  {
    number: "03",
    label: "Integration Phase",
    title: "Integrate",
    description:
      "Connect the pieces, test the system, and prepare it for release.",
  },
  {
    number: "04",
    label: "Release Phase",
    title: "Ship",
    description:
      "Complete final quality checks and launch a usable version of the project.",
  },
  {
    number: "05",
    label: "Semester Close",
    title: "Reflect",
    description:
      "Share what we built, review what worked, and carry lessons into the next project.",
  },
];

function HomePage() {
  return (
    <main>
      <section id="home" className="hero">
        <div className="hero__copy">
          <p className="eyebrow">Software Engineering Collective at GMU</p>

          <h1>Learn and build real software together.</h1>

          <p className="hero__support">
            The Software Engineering Collective is a student engineering
            organization where members learn how software teams work by
            researching, designing, building, reviewing, and shipping projects
            together.
          </p>

          <div className="button-row">
            <a className="button" href="#join">
              Join SEC
            </a>
            <a className="button button--secondary" href="#projects">
              Explore Our Project
            </a>
          </div>
        </div>

        <HeroAnimation />
      </section>

      <section id="why-sec" className="content-section">
        <div className="section-heading">
          <h2>What Makes Us Different</h2>
          <p>
            We are a software engineering organization, not a coding club.
          </p>
        </div>

        <div className="learning-grid">
          {differentiators.map((item) => (
            <article className="learning-card" key={item.title}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how-we-learn" className="content-section section-muted">
        <div className="section-heading">
          <h2>How We Learn</h2>
          <p>
            Members learn each topic through a practical cycle connected to a
            shared project.
          </p>
        </div>

        <div className="learning-grid">
          {learningCycle.map((item) => (
            <article className="learning-card" key={item.title}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="pods" className="content-section">
        <div className="section-heading">
          <h2>Pods</h2>
          <p>
            Work is organized into four pods, each owning a slice of the
            project. Members join the pod for the area they want to learn.
          </p>
        </div>

        <div className="learning-grid learning-grid--four">
          {pods.map((pod) => (
            <article className="learning-card" key={pod.title}>
              <span>{pod.number}</span>
              <h3>{pod.title}</h3>
              <p>{pod.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section section-muted">
        <div className="section-heading">
          <h2>Semester Timeline</h2>
          <p>
            Each semester follows a flexible path from forming a team to
            delivering and learning from a real project.
          </p>
        </div>

        <div className="workflow-timeline">
          {semesterPhases.map((phase) => (
            <article className="workflow-step" key={phase.number}>
              <p className="workflow-step__label">
                PHASE {phase.number} · {phase.label}
              </p>

              <div className="workflow-track" aria-hidden="true">
                <span className="workflow-indicator" />
              </div>

              <div className="workflow-step__content">
                <h3>{phase.title}</h3>
                <p>{phase.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="content-section">
        <div className="section-heading">
          <h2>Current Project</h2>
          <p>See what SEC members are building together.</p>
        </div>

        <article className="project-summary">
          <div className="project-visual" aria-hidden="true">
            <span>SEC WEBSITE</span>
          </div>

          <div className="project-details">
            <p className="field-label">CURRENT PROJECT</p>
            <h3>SEC Website</h3>
            <p>
              We’re designing and building a website for the collective while
              practicing the workflows used by software engineering teams.
            </p>
            <p className="project-status">
              <strong>Status:</strong> In progress
            </p>
          </div>
        </article>
      </section>

      <section id="workshops" className="content-section section-muted">
        <div className="section-heading">
          <h2>Workshops</h2>
          <p>
            SEC workshops connect engineering concepts to the work members are
            doing on the club project.
          </p>
        </div>

        <p className="workshop-notice">
          Workshop details will be shared as sessions are scheduled.
        </p>
      </section>

      <section id="join" className="join-section">
        <div>
          <h2>Ready to build with us?</h2>
          <p>
            You don’t need to be an expert. Bring curiosity and a willingness to
            learn alongside other GMU students.
          </p>

          <div className="button-row">
            <a
              className="button"
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Our Discord
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;