# API & Data Fetching Rules

## Notion Integration
- SDK client initialized in `src/libs/notion/index.ts` with API version `2022-06-28`
- `queryDatabase()` — queries Notion DB with date-descending sort, returns `Post[]`
- `getNotionPage(pageId)` — fetches raw Notion page for rendering with `react-notion-x`
- Content rendering uses `NotionRenderer` from `react-notion-x` (see `src/components/posts/PostRenderer.tsx`)

## API Routes (`src/app/api/`)
- `GET /api/posts` — all posts, optional `category` and `count` query params
- `GET /api/post` — single post by `id` query param
- `GET /api/tags` — all unique tags from the database

## Client-Side Fetching
- HTTP client: `ky` with `prefixUrl` from `NEXT_PUBLIC_BASE_URL` (`src/apis/index.ts`)
- React Query hooks in `src/hooks/`:
  - `useFetchPosts` — paginated/filtered posts
  - `useFetchTags` — uses `useSuspenseQuery` with `staleTime: Infinity`

## Server-Side Fetching
- Page components (`page.tsx`) call Notion SDK directly for SSR
- Metadata generation (`generateMetadata`) fetches Notion page for title/description
- RSS (`src/app/rss.xml/route.ts`) and Sitemap (`src/app/sitemap.ts`) fetch posts server-side

## Type Definitions
- `Post`, `Tag`, `RowType`, `notionPage` defined in `src/types/notion.ts`
- `PageProps`, `Data` in `src/types/page.ts`
