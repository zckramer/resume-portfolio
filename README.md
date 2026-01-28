# Zack Kramer

A unified location for my resume, portfolio pieces, interesting \(to me\) links and things I read. It could be
a good place to revist on occasion; see what I've updated and added to the portfolio page or new reads..!

# Technical crap below...

# Boilerplate links for React + TypeScript + Vite

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
- [Babel](https://babeljs.io/)
- [oxc](https://oxc.rs)
- [rolldown-vite](https://vite.dev/guide/rolldown)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) - [SWC](https://swc.rs/)

## React Compiler

- [this documentation](https://react.dev/learn/react-compiler/installation).
- [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x)
- [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom)

## Accessibility notes

This project aims to be comfortable for keyboard-only and screen reader users.

- Keyboard-first navigation: focus is managed so navigating via the NavBar lands you in the scrollable content container (not trapped in the nav).
- Skip link: an early "Skip to content" link is available for fast keyboard access.
- Modal behavior (contact dialog): focus moves into the dialog on open, Tab/Shift+Tab are trapped within it, Escape closes it, and focus returns to the trigger.
- Background isolation for modals: uses `inert` when supported (with `aria-hidden` fallback) to hide non-modal content from assistive tech while the modal is open.
- Bloggish content structure: entries and panels use a consistent heading hierarchy so screen readers can jump between sections efficiently.
