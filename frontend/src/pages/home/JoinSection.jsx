import { DISCORD_INVITE_URL } from "./content";

function JoinSection() {
  return (
    <section className="section join" id="join">
      <div className="container">
        <h2 className="section__title">Ready to build with us?</h2>
        <p className="section__lead">
          You don't need to be an expert. Bring curiosity and a willingness to learn alongside
          other GMU students.
        </p>
        <div className="button-row button-row--center">
          <a className="button" href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">
            Join Our Discord
          </a>
        </div>
      </div>
    </section>
  );
}

export default JoinSection;
