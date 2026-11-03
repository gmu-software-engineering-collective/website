// Text and links for the home page. Copy comes from the Club Overview and the
// Club Design Document; update it there first, then here.

// TODO: replace with the club's permanent Discord invite link
export const DISCORD_INVITE_URL = "https://discord.gg/REPLACE_ME";
export const GITHUB_URL = "https://github.com/gmu-software-engineering-collective";

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "how-we-work", label: "How We Work" },
  { id: "projects", label: "Projects" },
  { id: "learning", label: "Learning" },
  { id: "pods", label: "Pods" },
];

export const TOOLS = ["GitHub", "React", "Django", "PostgreSQL", "Docker", "GitHub Actions", "Figma", "Discord"];

export const DIFFERENCES = [
  { not: "Learning by watching slides", is: "Learning by building real systems and shipping features" },
  { not: "Leaders are the experts", is: "Leaders are facilitators. Nobody pretends to know everything" },
  { not: "Knowledge is lost every year", is: "Documentation first. The club outlives its founders" },
  { not: "One messy process", is: "A repeatable process for every project, every semester" },
];

export const WORKFLOW_STEPS = ["Issue", "Design", "Review", "Ship"];

export const PROJECT_FEATURES = [
  "Public homepage",
  "Project showcase",
  "Workshop archive",
  "Member profiles",
  "Join form",
  "Member dashboard (later)",
];

export const SEMESTER_PHASES = [
  { name: "Foundation", weeks: "wk 1–3" },
  { name: "Build", weeks: "wk 4–9" },
  { name: "Integrate", weeks: "wk 10–12" },
  { name: "Ship", weeks: "wk 13–15" },
  { name: "Reflect", weeks: "wk 16" },
];

export const START_HERE = [
  {
    badge: "10",
    title: "Engineering Principles",
    text: "Ten rules every member follows. Reading them takes about five minutes.",
    link: "Read the principles",
    href: "#",
  },
  {
    badge: "#1",
    title: "Good First Issues",
    text: "Small tasks, usually under fifteen minutes, so your first pull request happens in week one.",
    link: "Browse issues",
    href: "#",
  },
  {
    badge: "▶",
    title: "Workshops",
    text: "A ten-step format, scheduled right before we build the thing it teaches.",
    link: "See the schedule",
    href: "#learning",
  },
];

export const LEARNING_VALUES = [
  {
    name: "Research before implementation",
    text: "every non-trivial feature starts with research notes and a clear recommendation.",
  },
  {
    name: "Learning over ego",
    text: "every pull request, workshop, and project is a learning artifact.",
  },
  {
    name: "Teach it back",
    text: "a member who learned something two weeks ago can teach it well, because the format does the heavy lifting.",
  },
];

// Club Design Document, section 6.4
export const WORKSHOPS = [
  { topic: "How our engineering workflow works", detail: "The board, GitHub, issues, branches, pull requests" },
  { topic: "Git and GitHub flow", detail: "Every member's first real pull request" },
  { topic: "Writing good engineering tasks", detail: "Acceptance criteria and the Definition of Done" },
  { topic: "Documentation for engineers", detail: "READMEs, ADRs, meeting notes, setup guides" },
  { topic: "REST APIs from first principles", detail: "The first project endpoints" },
  { topic: "Database design", detail: "Users, projects, and roles in PostgreSQL" },
  { topic: "Authentication from scratch", detail: "Register and login, before reaching for a framework" },
  { topic: "CI/CD basics", detail: "The pipeline that runs on every pull request" },
  { topic: "Testing", detail: "Unit and integration tests, required before merge" },
  { topic: "System design for the website", detail: "A full walkthrough of what we built" },
];

export const LEARNING_CYCLE = ["Learn", "Apply", "Refactor", "Teach", "Document"];

export const PR_TEMPLATE_LINES = [
  { text: "## Summary", kind: "heading" },
  { text: "What changed and why.", kind: "comment" },
  { text: "" },
  { text: "## Linked issue", kind: "heading" },
  { text: "Closes #12" },
  { text: "" },
  { text: "## Checklist", kind: "heading" },
  { text: "- [x] Tests pass locally" },
  { text: "- [x] CI pipeline passes" },
  { text: "- [x] Documentation updated" },
  { text: "- [x] No secrets committed" },
  { text: "- [ ] Every acceptance criterion is met" },
];

// Club Design Document, section 1.3
export const PODS = [
  {
    name: "Frontend",
    title: "Pages people use",
    text: "UI components, pages, responsive layout, and design system implementation.",
    includes: ["Figma to code", "Accessible markup", "Client-side validation"],
  },
  {
    name: "Backend",
    title: "APIs and data",
    text: "REST API design, business logic, authentication, and the database schema.",
    includes: ["Auth and permissions", "Database design", "Input validation"],
  },
  {
    name: "DevOps",
    title: "Ship it safely",
    text: "CI/CD pipelines, Docker, deployment, environments, and secrets management.",
    includes: ["GitHub Actions", "Branch protection", "Staging and production"],
  },
  {
    name: "QA",
    title: "Make it trustworthy",
    text: "Test suites, accessibility checks, mobile testing, and regression coverage.",
    includes: ["Test coverage review", "QA sprint before release", "Bug triage"],
  },
];
