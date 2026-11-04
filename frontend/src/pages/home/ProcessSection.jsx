import { LEARNING_CYCLE } from "./content";

// Layout of the learning-cycle drawing, in SVG units
const BOX_WIDTH = 88;
const BOX_HEIGHT = 44;
const BOX_STEP = 103;
const BOX_TOP = 40;
const FIRST_BOX_X = 10;

function LearningCycleDrawing() {
  const centerY = BOX_TOP + BOX_HEIGHT / 2;
  const boxX = (index) => FIRST_BOX_X + index * BOX_STEP;
  const lastCenterX = boxX(LEARNING_CYCLE.length - 1) + BOX_WIDTH / 2;
  const firstCenterX = boxX(0) + BOX_WIDTH / 2;

  return (
    <svg viewBox="0 0 520 240" role="img" aria-label="Learning cycle: learn, apply, refactor, teach, document, then repeat">
      {LEARNING_CYCLE.map((stage, index) => (
        <g key={stage}>
          <rect className="cycle__box" x={boxX(index)} y={BOX_TOP} width={BOX_WIDTH} height={BOX_HEIGHT} rx="8" />
          <text x={boxX(index) + BOX_WIDTH / 2} y={centerY + 5} textAnchor="middle">{stage}</text>
          {index > 0 && (
            <path
              className="cycle__arrow"
              d={`M${boxX(index) - 15} ${centerY} H${boxX(index) - 2} M${boxX(index) - 7} ${centerY - 5} L${boxX(index) - 2} ${centerY} L${boxX(index) - 7} ${centerY + 5}`}
            />
          )}
        </g>
      ))}
      <path
        className="cycle__arrow"
        d={`M${lastCenterX} ${BOX_TOP + BOX_HEIGHT} V150 H${firstCenterX} V${BOX_TOP + BOX_HEIGHT + 2} M${firstCenterX - 5} ${BOX_TOP + BOX_HEIGHT + 7} L${firstCenterX} ${BOX_TOP + BOX_HEIGHT + 2} L${firstCenterX + 5} ${BOX_TOP + BOX_HEIGHT + 7}`}
      />
      <text className="cycle__note" x="260" y="174" textAnchor="middle">next topic, same cycle</text>
      <text className="cycle__note" x="260" y="220" textAnchor="middle">Git · REST APIs · databases · auth · CI/CD · testing</text>
    </svg>
  );
}

function ProcessSection() {
  return (
    <section className="section" id="process">
      <div className="container">
        <h2 className="section__title">One Process, Every Project</h2>
        <p className="callout">
          Learn, apply, refactor, teach, document. Git, backend, Docker, and authentication aren't
          separate tracks. They're pieces of the same system, learned as they become necessary.
        </p>
        <div className="media-pair">
          <div className="card cycle">
            <LearningCycleDrawing />
          </div>
          <div className="video-card">
            <div>
              <div className="video-card__play" aria-hidden="true">▶</div>
              <h3>Workshop 1: How our engineering workflow works</h3>
              <p>Recording coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
