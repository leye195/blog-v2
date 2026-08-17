# General Development Rules

## Package Manager

- Use **pnpm** exclusively. Do not use npm or yarn.

## Commands

- `pnpm dev` — development server
- `pnpm build` — production build
- `pnpm lint` / `pnpm lint:fix` — ESLint (`next lint`는 Next 16에서 제거됨)
- `pnpm typecheck` — `next typegen && tsc --noEmit`
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

Node v22.23.2 (see `.nvmrc`). `engines.node`는 `22.x`로 고정돼 있고 Vercel도 이 값을 따른다.
`pnpm test`는 이 버전을 요구한다 — vite 8이 끌어오는 rolldown이 Node >= 22.12를 요구한다.

## Testing

- Vitest + React Testing Library + jsdom
- Tests in `__test__` directories with `*.test.tsx` naming
- Setup file: `src/setup-vitest.ts`
