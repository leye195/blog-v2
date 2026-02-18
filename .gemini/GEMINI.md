# GEMINI.md - Dan DevLog Context

This project is a modern personal blog built with Next.js 15, powered by the Notion API as a Headless CMS.

## Project Overview
- **Name:** Dan DevLog (v2)
- **Purpose:** A personal technical blog that fetches and renders content from a Notion database.
- **Architecture:** Next.js App Router with a mix of Server Components for SEO/performance and Client Components for interactivity.
- **Key Features:**
    - Notion API integration for content management.
    - Command palette search with `kbar`.
    - RSS feed and Sitemap generation.
    - Responsive design with Tailwind CSS and Framer Motion.
    - Google Analytics and Giscus integration for comments.

## Tech Stack
- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) (using `@tailwindcss/postcss`), PostCSS
- **Data Fetching:** [TanStack React Query v5](https://tanstack.com/query/latest), Notion SDK (`@notionhq/client`), `notion-client`
- **Content Rendering:** `react-notion-x`, `notion-to-md`
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Search/UI:** `kbar`, `nprogress`
- **Testing:** [Vitest](https://vitest.dev/), React Testing Library

## Project Structure
```text
src/
├── apis/            # API client logic
├── app/             # Next.js App Router (pages, layouts, API routes)
├── components/      # React components
│   ├── common/      # Reusable UI primitives (Button, Flex, etc.)
│   ├── layout/      # Layout-specific components (Header, Footer)
│   ├── page/        # Page-level container components
│   └── posts/       # Post-specific rendering logic (Server/Client split)
├── context/         # React Context providers (Theme, etc.)
├── hooks/           # Custom React hooks
├── libs/            # Shared utility libraries (Notion client, helpers)
├── styles/          # Global styles, variables, and mixins
└── types/           # TypeScript type definitions
```

## Development Commands
- `pnpm dev`: Start development server.
- `pnpm build`: Create production build.
- `pnpm start`: Run production server.
- `pnpm lint`: Run ESLint.
- `pnpm lint:fix`: Auto-fix linting issues.
- `pnpm test`: Run tests with Vitest.
- `pnpm coverage`: Run tests and generate coverage report.

## Environment Variables
The following variables are required in `.env.local`:
- `NOTION_SECRET`: Notion API integration token.
- `NOTION_DATABASE`: The ID of the Notion database.
- `NEXT_PUBLIC_BASE_URL`: The production URL of the blog.

## Development Conventions
- **Naming:**
    - Components: `PascalCase` in `.tsx` files (e.g., `PostCard.tsx`).
    - Hooks: `camelCase` with `use` prefix (e.g., `useMounted.ts`).
    - Helpers/Utilities: `camelCase` in `.ts` files.
- **Styling:** Use Tailwind CSS utility classes. Prefer CSS variables for themes (defined in `src/styles/variable.ts` or `globals.css`).
- **Data Fetching:** Prefer Server Components for initial data fetching where possible. Use React Query for client-side interactions and state management.
- **Imports:** Use path aliases (e.g., `@/components/...`) as defined in `tsconfig.json`.
- **Testing:** Colocate tests in `__test__` directories within component folders. Use `*.test.tsx` naming.

## Key Files & Entry Points
- `src/app/layout.tsx`: Root layout with providers and global styles.
- `src/libs/notion/index.ts`: Central Notion API client configuration.
- `src/components/AppProvider.tsx`: Global context providers (React Query, KBar).
- `src/app/api/posts/route.ts`: API endpoint for fetching post data.
