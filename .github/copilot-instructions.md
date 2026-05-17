# Repository Instructions for GitHub Copilot

This repository contains a Vite + React UI project with a Storybook setup.

## Purpose
- Help maintain and extend the `bovine-ui` component library.
- Keep code consistent with the existing React + TypeScript codebase.
- Prefer small, readable components and straightforward styling.
- The project is building a design system based on React Aria: https://react-aria.adobe.com/
- Components should support quickly and easily swapped themes.

## Project structure
- `src/` contains application and component source files.
- `src/components/` contains reusable UI components.
- `public/` contains static assets.
- `package.json` defines scripts, dependencies, and tests.
- `README.md` includes high-level project information.
- `App.tsx` is a small mockup webpage meant to display components and show how they interact.

## Tooling
- Built with Vite.
- Uses Jest for unit testing.
- Storybook is the primary development environment for component work.

## Code style
- Use TypeScript for all new source files.
- Prefer functional React components.
- Components must use the shared theme system and CSS vars rather than defining independent colors or spacing.
- Avoid writing custom component-level CSS when a shared theme or existing component can provide the behavior.
- Text should always use the shared `Typography` component instead of raw text elements.
- Components should compose existing components where possible instead of creating new UI primitives.
- Add or update tests for component behavior.

## Testing
- Use existing test patterns from `src/components/Button/Button.test.tsx`.
- Keep tests focused on behavior and rendering.

## Notes for AI
- Suggest only safe and project-appropriate changes.
- Do not modify unrelated files unless necessary.
- Keep boilerplate and instructions concise and easy to follow.
