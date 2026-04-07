# General Development Rules

## Package Manager
- Use **pnpm** exclusively. Do not use npm or yarn.

## Commands
- `pnpm dev` — development server
- `pnpm build` — production build
- `pnpm lint` / `pnpm lint:fix` — ESLint
- `pnpm test` — Vitest (watch mode)
- `pnpm coverage` — test coverage

## Environment Variables
Required in `.env.local`:
- `NOTION_SECRET` — Notion API integration token
- `NOTION_DATABASE` — Notion database ID
- `NEXT_PUBLIC_BASE_URL` — Site base URL
- `NEXT_PUBLIC_GA_ID` — Google Analytics ID
- `NEXT_PUBLIC_GITHUB_USERNAME` — GitHub username for stats
- `GITHUB_TOKEN` — GitHub PAT for GraphQL API

## Commit Style
Follow Conventional Commits with scope: `feat(posts):`, `fix(api):`, `refactor(layout):`, `chore(package):`, `style:`.

## Node Version
Node v18.17.0 (see `.nvmrc`).

## Testing
- Vitest + React Testing Library + jsdom
- Tests in `__test__` directories with `*.test.tsx` naming
- Setup file: `src/setup-vitest.ts`
