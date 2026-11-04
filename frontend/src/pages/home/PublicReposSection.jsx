import { PR_TEMPLATE_LINES } from "./content";

function PublicReposSection() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">Real Code, Public Repos</h2>
        <p className="callout">
          Every club repository is public. You can link your work in a resume, and anyone thinking
          about joining can see exactly how we work before they do.
        </p>
        <div className="media-pair">
          <div className="card workflow-card">
            <h3>Learn the workflow real teams use</h3>
            <p>
              Issues with acceptance criteria, branches, conventional commits, pull requests, code
              review, and CI. The same loop you'll use at an internship.
            </p>
          </div>

          <div className="card code-card">
            <div className="code-card__bar">
              <span>.github/pull_request_template.md</span>
              <span>public</span>
            </div>
            <pre>
              {PR_TEMPLATE_LINES.map((line, index) => (
                <span key={index} className={line.kind ? `code-card__${line.kind}` : undefined}>
                  {line.text}
                  {"\n"}
                </span>
              ))}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PublicReposSection;
