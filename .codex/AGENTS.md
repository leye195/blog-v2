# Repository Guidelines

## Project Structure & Module Organization
- Application code lives in `src/` using the Next.js App Router.
- Routes and API endpoints are under `src/app/` (for example, `src/app/posts/[id]/page.tsx`, `src/app/api/posts/route.ts`).
- Reusable UI is in `src/components/`, organized by domain (`layout/`, `page/`, `posts/`, `common/`).
- Shared logic is split into `src/hooks/`, `src/libs/`, `src/context/`, and `src/apis/`.
- Global styles live in `src/styles/`; static assets are in `public/`.
- Tests currently live in `src/components/__test__/` and use Vitest + Testing Library.

## Build, Test, and Development Commands
- `pnpm dev`: start local development server (Next.js).
- `pnpm build`: produce production build.
- `pnpm start`: run the production server from the build output.
- `pnpm lint`: run Next.js/ESLint checks.
- `pnpm lint:fix`: auto-fix lint issues in `src/**/*.{js,jsx,ts,tsx}`.
- `pnpm test`: run Vitest in watch mode.
- `pnpm coverage`: run tests once with V8 coverage output.

## Coding Style & Naming Conventions
- Language: TypeScript + React function components.
- Formatting is enforced by Prettier (`prettier.config.mjs`): 2 spaces, semicolons, single quotes, trailing commas, `printWidth: 100`.
- Linting extends `next/core-web-vitals` with import ordering rules (`eslint.config.mjs`).
- Use path aliases from `tsconfig.json` (for example, `@/components/...` instead of long relative paths).
- Follow existing naming patterns: components in `PascalCase` files (`PostPage.tsx`), hooks with `use` prefix (`useScrollUp.tsx`), route files named `page.tsx`/`route.ts`.

## Testing Guidelines
- Framework: Vitest (`vite.config.ts`) with `jsdom` and global APIs enabled.
- Setup file: `src/setup-vitest.ts`.
- Prefer colocated tests in `__test__` folders and `*.test.tsx` naming (example: `src/components/__test__/Button.test.tsx`).
- For UI changes, add or update component tests and run `pnpm coverage` before opening a PR.

## Commit & Pull Request Guidelines
- Follow the commit style in history: Conventional Commit prefixes such as `feat:`, `fix:`, `refactor(scope):`, `chore(scope):`, `style:`.
- Keep commits focused and scoped (example: `feat(posts): split server/client post grids`).
- PRs should include:
  - A short summary of behavior changes.
  - Linked issue/task reference.
  - Test/lint status (`pnpm lint`, `pnpm test` or `pnpm coverage`).
  - Screenshots or recordings for UI changes.

## Security & Configuration Tips
- Create local env values based on `README.md` (`NOTION_SECRET`, `NOTION_DATABASE`, `NEXT_PUBLIC_BASE_URL`).
- Keep secrets in local env files (`.env`, `.env.production`) and do not commit credentials.
