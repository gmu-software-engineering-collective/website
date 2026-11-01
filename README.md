# Software Engineering Collective Repository Template

This repository is the standard starting point for Software Engineering Collective projects.

It provides the shared repository structure, contribution workflow, documentation, security guidance, and GitHub configuration used across club projects.

> This repository is a template. Do not build project features directly in this repository.

## Purpose

Use this template when creating a new Software Engineering Collective project repository.

Repositories created from this template inherit the club's baseline engineering structure and contribution standards.

## Project Information

When creating a project from this template, replace this section with:

- Project purpose
- Project goals
- Intended users
- Current project status

## Tech Stack

Document the technologies used by the project.

## Architecture

Describe the high-level architecture of the project.

Link to an Architecture Decision Record (ADR) when applicable.

## Prerequisites

List the software, tools, and accounts required for local development.

## Local Setup

Document the steps required to set up the project locally.

## Running the Project

Document how to run the project locally.

## Running Tests

Document how to run the project's test suite.

## Folder Structure

Document the project's major directories and their responsibilities.

## Environment Variables

Document required environment variables without including real secrets or credentials.

| Variable | Purpose | Example |
| --- | --- | --- |
| `EXAMPLE_VARIABLE` | Describe its purpose | `example-value` |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the contribution workflow.

## Security

See [SECURITY.md](SECURITY.md) for security requirements and vulnerability reporting.

## Ownership

- **Owning Pod:** TBD
- **Coordinator:** TBD
- **Last Updated:** TBD

## Frontend setup

### Prerequisites

- Node.js LTS
- npm

### Run locally

From the repository root:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

### Frontend structure

- `frontend/src/pages` — complete website pages
- `frontend/src/components` — reusable UI components
- `frontend/src/styles` — shared styles

- ## Frontend CI

A GitHub Actions workflow (`.github/workflows/frontend-ci.yml`) automatically checks the React frontend. It runs on pull requests targeting `main` when files in `frontend/` (or the workflow file itself) change.

The check does three things, in order:

1. `npm ci` installs the dependencies from the lockfile.
2. `npm run lint` checks the code with ESLint.
3. `npm run build` confirms the app builds.

The workflow uses no secrets and only has read access to the repository.
