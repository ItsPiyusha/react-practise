# React Practice Log

## Day 1 — Counter App

## Session Time
**9:30 PM – 10:30 PM**

---

## What I Built
- Created a basic Counter App using React + Vite + TypeScript
- Implemented increment and decrement functionality using `useState`

---

## Key Learnings

### Correct `onClick` Usage

✅ Correct

```tsx
<button onClick={() => setCount(count - 1)}>
  -
</button>
````

❌ Incorrect

```tsx
<button>
  onClick={() => setCount(count - 1)}
</button>
```

### Understanding

* Event handlers must be passed as props inside JSX elements
* React expects functions inside attributes like `onClick`
* Rendering a function directly inside JSX causes errors

---

## Challenges Faced

* Initially struggled to understand how CSS connects with React components
* Took time to understand button sizing using:

  * `width`
  * `height`
  * `padding`
  * `margin`

---

## Concepts Practiced

* React components
* JSX
* `useState`
* Event handling
* TypeScript basics
* CSS styling
* Component structure

---

## Next Steps

* Add Reset button
* Improve UI styling
* Learn props
* Learn component reuse
* Explore Tailwind CSS later


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
