
# React Practice Log

## Day 1 — Counter App

### Session Time
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

```
```
