import { WORKFLOW_STEPS } from "./content";

const ACTIVE_STEP = "Design";

function ReviewFeedback() {
  return (
    <div className="feedback">
      <h3>Review feedback</h3>
      <p>
        Solid first design. The parts have clear jobs and the key decision is written down.
        A few questions before this merges:
      </p>
      <ol>
        <li><strong>Data:</strong> where is this stored, and why that database?</li>
        <li><strong>Failure:</strong> what happens to a request if one of these services is down?</li>
      </ol>
    </div>
  );
}

function HowWeWorkSection() {
  return (
    <section className="section" id="how-we-work">
      <div className="container">
        <h2 className="section__title">Build Real Software, Then Get It Reviewed</h2>
        <p className="callout">
          Every change starts as an issue, gets designed, goes through a pull request, and is
          reviewed by a teammate before it merges. You learn by doing the whole loop, not by watching.
        </p>

        <div className="review-window">
          <div className="review-window__body">
            <ol className="steps" aria-label="Workflow steps">
              {WORKFLOW_STEPS.map((step, index) => (
                <li key={step} className={step === ACTIVE_STEP ? "is-active" : undefined}>
                  {index + 1} · {step}
                </li>
              ))}
            </ol>

            <div className="canvas">
              <p className="canvas__bar">2. System design · [diagram title]</p>
              {/* TODO: replace with the club's own system design diagram */}
              <div className="diagram-placeholder">[insert system design diagram here]</div>
            </div>

            <aside className="explain">
              <h3>Explanation</h3>
              <p>[What the system does and how a request moves through it.]</p>
              <h3>Key decision</h3>
              <p>[One design choice and why it was made, for example the database.]</p>
            </aside>
          </div>

          <ReviewFeedback />
        </div>
      </div>
    </section>
  );
}

export default HowWeWorkSection;
