# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Dan DevLog v2 — a personal tech blog built with Next.js 16 (App Router) + TypeScript, using Notion as a headless CMS. Content is fetched from a Notion database and rendered with `react-notion-x`.

**Live site:** https://www.dantechblog.xyz

## Quick Reference

| Command          | Description                      |
| ---------------- | -------------------------------- |
| `pnpm dev`       | Development server               |
| `pnpm build`     | Production build                 |
| `pnpm lint`      | ESLint check                     |
| `pnpm lint:fix`  | Auto-fix lint issues             |
| `pnpm typecheck` | `next typegen` 후 `tsc --noEmit` |
| `pnpm test`      | Run Vitest (watch)               |
| `pnpm coverage`  | Test coverage report             |

## Git Hooks

husky로 관리한다. `pnpm install`의 `prepare` 스크립트가 자동 설정한다.

- `pre-commit` — lint-staged로 **스테이징된 파일만** `eslint --fix` + `prettier --write`
- `pre-push` — `pnpm typecheck` + `pnpm test --run` (프로젝트 전체 단위라 push 시점에만)

## Rules

Detailed guidance is split into focused rule files:

- [General](.claude/rules/general.md) — package manager, env vars, commit style, testing setup
- [Architecture](.claude/rules/architecture.md) — data flow, directory structure, key patterns
- [Style](.claude/rules/style.md) — Tailwind v4 config, theme, formatting conventions
- [API](.claude/rules/api.md) — Notion integration, API routes, data fetching patterns
