import { useState } from "react";
import { DISCORD_INVITE_URL, NAV_LINKS } from "../pages/home/content";

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={menuOpen ? "site-nav is-open" : "site-nav"}
      onKeyDown={(event) => event.key === "Escape" && closeMenu()}
    >
      <div className="container site-nav__inner">
        <a className="site-nav__brand" href="#top">Software Engineering Collective</a>

        <button
          className="site-nav__toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
        </button>

        <div className="site-nav__menu" id="site-nav-menu">
          <nav className="site-nav__links" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={closeMenu}>{link.label}</a>
            ))}
          </nav>
          <a className="button button--small" href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">
            Join SEC
          </a>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
