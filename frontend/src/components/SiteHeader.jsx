import { useEffect, useState } from "react";
import { DISCORD_INVITE_URL, NAV_LINKS } from "../pages/home/content";

const SCROLLED_AFTER_PX = 8;
// The section crossing this band of the screen counts as the one in view
const ACTIVE_SECTION_BAND = "-45% 0px -50% 0px";

// The nav is clear over the hero and turns solid, with a shadow, once the page scrolls
function useHasScrolled() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > SCROLLED_AFTER_PX);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return scrolled;
}

// Which nav section is on screen, so its link can be underlined
function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) setActiveId(visible.target.id);
    }, { rootMargin: ACTIVE_SECTION_BAND });

    ids.map((id) => document.getElementById(id)).filter(Boolean).forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useHasScrolled();
  const activeId = useActiveSection(SECTION_IDS);
  const closeMenu = () => setMenuOpen(false);

  const classNames = ["site-nav", scrolled && "is-scrolled", menuOpen && "is-open"].filter(Boolean).join(" ");

  return (
    <header className={classNames} onKeyDown={(event) => event.key === "Escape" && closeMenu()}>
      <div className="container site-nav__inner">
        <a className="site-nav__brand" href="#top">
          <img className="site-nav__logo" src="/favicon.svg" alt="" width="28" height="28" />
          Software Engineering Collective
        </a>

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
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={activeId === link.id ? "true" : undefined}
                onClick={closeMenu}
              >
                {link.label}
              </a>
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
