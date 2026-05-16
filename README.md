# Bovine UI

A minimal React design system starter built with Vite, React Aria, Storybook, and Jest.

## Project structure

- `src/components/Button/`
  - `Button.tsx` — React Aria button component
  - `button.css` — button styles
  - `Button.stories.ts` — Storybook stories for the button
  - `Button.test.tsx` — Jest unit tests for the button
- `.storybook/` — Storybook configuration
- `jest.config.cjs` — Jest configuration
- `tsconfig.app.json` — app TypeScript configuration
- `tsconfig.jest.json` — Jest TypeScript configuration

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Storybook

```bash
npm run storybook
```

## Testing

```bash
npm test
```

## Notes

- Uses `react-aria-components` for accessible headless UI.
- The button is the first design system component and includes Storybook and Jest coverage.
- Styles are separated per component under `src/components/<ComponentName>/`.
