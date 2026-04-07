# Styling Rules

## Tailwind CSS v4
- Primary styling approach: Tailwind utility classes
- Config via `@theme` directive in `src/styles/globals.css` (not tailwind.config.js)
- PostCSS plugin: `@tailwindcss/postcss`

## Custom Theme
- Color palette defined as CSS variables in `src/styles/globals.css`
- Programmatic access via `src/styles/variable.ts` (`paletteColor` object)
- Key colors: `dgray-100` ~ `dgray-900` (design grays), `primary-orange`, `primary-blue`
- Custom breakpoints: xs(360), sm(540), md(753), lg(1024), xl(1265), xxl(1600)

## Conventions
- Use `cn()` from `src/libs/utils.ts` for conditional class merging (clsx + tailwind-merge)
- `Flex` component (`src/components/common/Flex.tsx`) uses `$`-prefixed props (`$direction`, `$gap`, `$alignItems`, `$justifyContent`)
- Font: Pretendard (loaded via CDN in globals.css)
- Prettier plugin `prettier-plugin-tailwindcss` sorts Tailwind classes automatically

## Formatting
- Prettier: `printWidth: 100`, 2 spaces, semicolons, single quotes (JS), double quotes (JSX), trailing commas
- ESLint: import ordering with custom path groups (react → next → @tanstack → internal @/ aliases)
