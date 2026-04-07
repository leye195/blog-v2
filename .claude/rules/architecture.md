# Architecture

## Overview
Next.js 15 App Router blog using Notion as a headless CMS. Content is stored in a Notion database, fetched via the Notion SDK, and rendered with `react-notion-x`.

## Data Flow
1. **Notion Database** → `src/libs/notion/index.ts` (SDK client, `queryDatabase`, `getNotionPage`)
2. **API Routes** (`src/app/api/`) — transform Notion data into typed `Post[]` for client consumption
3. **Server Components** — fetch data directly for SSR (pages, metadata, sitemap, RSS)
4. **Client Components** — use React Query hooks (`src/hooks/useFetchPosts.ts`, `useFetchTags.ts`) via `ky` HTTP client (`src/apis/index.ts`)

## Key Directories
- `src/app/` — App Router pages, layouts, API routes
- `src/components/page/` — page-level composition components
- `src/components/posts/` — **Server/Client split** for post rendering (Server/ and Client/ subdirectories)
- `src/components/common/` — reusable UI primitives (Button, Flex, Tag, PostCard)
- `src/apis/` — client-side API layer using `ky`
- `src/libs/notion/` — server-side Notion SDK setup
- `src/hooks/` — custom React hooks
- `src/types/` — TypeScript type definitions (`Post`, `Tag`, `RowType`)

## Key Patterns
- **Server/Client component split**: Post lists have both Server (`src/components/posts/Posts/Server/`) and Client (`src/components/posts/Posts/Client/`) variants
- **Providers**: `AppProvider.tsx` wraps KBar + React Query at root layout level
- **SEO**: Each page generates metadata via `generateMetadata()` + JSON-LD via `JsonLd` component
- **GitHub integration**: `src/apis/github.ts` fetches contribution stats via GraphQL (cached 1 hour)
- **Caching**: React Query `staleTime: Infinity` for tags, `revalidate: 10` for posts API, 1-hour cache for GitHub/RSS
