# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Dan DevLog v2 — a personal tech blog built with Next.js 15 (App Router) + TypeScript, using Notion as a headless CMS. Content is fetched from a Notion database and rendered with `react-notion-x`.

**Live site:** https://www.dantechblog.xyz

## Quick Reference

| Command | Description |
|---------|------------|
| `pnpm dev` | Development server |
| `pnpm build` | Production build |
| `pnpm lint` | ESLint check |
| `pnpm lint:fix` | Auto-fix lint issues |
| `pnpm test` | Run Vitest (watch) |
| `pnpm coverage` | Test coverage report |

## Rules

Detailed guidance is split into focused rule files:

- [General](.claude/rules/general.md) — package manager, env vars, commit style, testing setup
- [Architecture](.claude/rules/architecture.md) — data flow, directory structure, key patterns
- [Style](.claude/rules/style.md) — Tailwind v4 config, theme, formatting conventions
- [API](.claude/rules/api.md) — Notion integration, API routes, data fetching patterns
