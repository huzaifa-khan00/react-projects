# react-projects
Personal repo for practicing React — small exercises, mini-projects, and larger builds.

## Structure
- `practices/` — small exercises for individual concepts as they're taught
- `mini-projects/` — self-contained small projects

This repo uses **npm workspaces** — dependencies are installed once at the root.
Each folder inside these is its own project with its own `package.json`, but shares one root `node_modules`.

### Setup
```bash
npm install
```

### Run a specific project
```bash
cd mini-projects/<project-name>
npm run dev
```
