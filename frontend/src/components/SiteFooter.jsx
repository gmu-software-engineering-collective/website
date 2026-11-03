import { DISCORD_INVITE_URL, GITHUB_URL } from "../pages/home/content";

const FOOTER_COLUMNS = [
  {
    title: "Club",
    links: [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Club Overview", href: "#" },
      { label: "Member Handbook", href: "#" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Join Discord", href: DISCORD_INVITE_URL },
      { label: "Good First Issues", href: "#" },
      { label: "Workshops", href: "#learning" },
    ],
  },
  {
    title: "Build",
    links: [
      { label: "GitHub", href: GITHUB_URL },
      { label: "Docs Repository", href: "#" },
      { label: "Pods", href: "#pods" },
    ],
  },
];

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <strong>Software Engineering Collective</strong>
          <p>© 2026 Software Engineering Collective at George Mason University.</p>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2>{column.title}</h2>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
    </footer>
  );
}

export default SiteFooter;
