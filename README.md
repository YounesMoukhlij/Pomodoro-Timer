


<div align="center">
  <img src="youndoro/public/pomodoro.png" width="80" alt="Pomodoro Icon" />
  
  <h1>Pomodoro-Timer</h1>
  <p><b>Modern, Responsive Pomodoro App built with React 19, TypeScript, Vite, and Tailwind CSS v4</b></p>
  <a href="https://roadmap.sh/projects/pomodoro-timer">Project on roadmap.sh</a>
</div>

---

## ✨ Overview

YounDoro is a professional Pomodoro Timer app featuring a beautiful UI, advanced state management, and a fully responsive layout. Built for productivity, learning, and extensibility.

---

## 🚀 Features

- **2D CSS Grid Layout**: Persistent sidebar, header, and main content using modern CSS Grid.
- **Responsive Design**: Adapts to all devices with Tailwind breakpoints and React state.
- **Animated Sidebar**: Expand/collapse with smooth transitions and icon navigation.
- **Accessible Header**: Burger menu for mobile, branding, and quick links.
- **Integrated Music Player**: Play calm music while you work (Header component).
- **Multiple Timers**: Pomodoro, Global Time, and a simple Timer.
- **Task Management**: Add, complete, and filter tasks (Tasks component).
- **Modern UI**: Poppins font, React Icons, and custom Tailwind utilities.
- **TypeScript Strictness**: All components are strongly typed.
- **Component Isolation**: Each feature is a separate, reusable component.

---

## 🏗️ Layout & Architecture

<details>
<summary><b>Grid System</b></summary>

```tsx
<div className='w-full h-full grid grid-cols-[15%_85%] grid-rows-[7%_93%] md:grid-cols-[250px_1fr] md:grid-rows-[7%_93%]'>
```

| Area     | Desktop (md+)         | Mobile (sm)         |
|----------|-----------------------|---------------------|
| Sidebar  | 250px (15%)           | Hidden              |
| Header   | 7%                    | 7%                  |
| Content  | 1fr (85%)             | 1fr                 |

**Visual:**

```
┌───────────────┬────────────────────────────┐
│   Sidebar     │         Header             │
├───────────────┼────────────────────────────┤
│   Sidebar     │         Content            │
└───────────────┴────────────────────────────┘
```

**Breakpoints:**
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px
</details>

---

## 🧩 Component Breakdown

### `App.tsx` (Root)
- Manages layout, sidebar state, and routing.
- Responsive sidebar auto-closes on small screens.
- Uses React Router v7 for navigation.

### `Sidebar.tsx`
- Navigation with icons and text.
- Expand/collapse with chevron button.
- Responsive: hidden on mobile, fixed width on desktop.

### `Header.tsx`
- Branding, burger menu, and quick links (Portfolio, LinkedIn, Github).
- Integrated music player (fetches calm music from API, play/pause/next/prev/loop, progress bar).
- Shows current time (auto-updates every second).

### `Pomodoro.tsx`
- Main timer with Focus, Short Break, and Long Break modes.
- Progress bar, add time buttons, and start/pause/reset controls.
- Uses `Tasks` component for task management.

### `Tasks.tsx`
- Add, complete, and filter tasks (Pending/Completed).
- Keyboard and button controls, persistent state.

### `Timer.tsx`
- Simple stopwatch timer (start, pause, reset).

### `GlobalTime.tsx`
- Shows current time in multiple timezones (selectable).

---

## 🛠️ Tech Stack & Configuration

| Tool            | Version      | Purpose                                  |
|-----------------|-------------|------------------------------------------|
| React           | 19.x        | UI library                               |
| TypeScript      | 5.x         | Type safety                              |
| Vite            | 7.x         | Fast dev/build tool                      |
| Tailwind CSS    | 4.x         | Utility-first CSS                        |
| React Icons     | 5.x         | Icon library                             |
| ESLint          | 9.x         | Linting                                  |
| PostCSS         | 8.x         | CSS processing                           |

**Tailwind Config:**
```js
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'pacifico': ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
}
```

**PostCSS Config:**
```js
// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

---

## � Project Structure

```text
youndoro/
├── public/
│   └── pomodoro.png
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── GlobalTime.tsx
│   │   ├── Header.tsx
│   │   ├── Pomodoro.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Tasks.tsx
│   │   └── Timer.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

---

## 🎨 Styling & Fonts

- **Poppins** font via Google Fonts (see `index.html` and Tailwind config)
- **Custom utility**: `.yy` for border debugging
- **Dark theme**: Uses Tailwind's dark color palette

---

## 📦 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the dev server:**
   ```bash
   npm run dev
   ```
3. **Open in browser:**
   Visit the local URL shown in your terminal (e.g., http://localhost:5173)

---

## 🧠 Best Practices & Learnings

- **CSS Grid for Layouts**: Enables true 2D layouts, perfect for sidebar + header apps.
- **Tailwind v4 Setup**: Uses new PostCSS plugin for latest features and performance.
- **Responsive State Management**: Syncs React state with media queries for seamless UX.
- **Component Isolation**: Each UI part is a separate, reusable component.
- **Consistent Widths**: Sidebar always uses a fixed width for both expanded/collapsed states.
- **Modern UI/UX**: Animations, icons, and font choices create a professional, enjoyable experience.

---

## 📚 References

- [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique)
- [Tailwind CSS Docs](https://tailwindcss.com/docs/installation)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vite](https://vitejs.dev/)

---

## 👤 Author

- **Younes Moukhlij**  
  [Portfolio](https://github.com/YounesMoukhlij/) · [LinkedIn](https://linkedin.com/in/YounesMoukhlij/) · [Github](https://github.com/YounesMoukhlij/)

---

## 💡 Contribution & License

This project is for learning and demonstration. Feel free to fork, modify, and use for your own productivity!

<div align="center">
  <a href="https://github.com/YounesMoukhlij/web-roadmap-projects">✅ Back to Web Roadmap Projects ✅</a>
</div>
