
# Pomodoro-Timer

This project is a modern, responsive Pomodoro Timer app built with **React 19 + TypeScript + Vite** and styled using **Tailwind CSS v4**. It demonstrates best practices in frontend architecture, state management, and responsive design, and is structured for easy learning and extension.

---

## 🚀 Features

- **Professional 2D Grid Layout**: Uses CSS Grid for a clean, app-like structure with persistent sidebar and header.
- **Responsive Design**: Adapts to all screen sizes using Tailwind breakpoints and React state.
- **Animated Sidebar**: Sidebar can be toggled open/closed, with smooth transitions and consistent width.
- **Accessible Header**: Includes a burger menu for mobile, icons, and branding.
- **Modern UI**: Uses Poppins font, React Icons, and Tailwind for a beautiful, modern look.
- **State Management**: Sidebar state is synced with screen size for seamless UX.
- **Component-Based**: All UI is split into reusable, maintainable components.

---

## 🏗️ Layout Architecture: 2D CSS Grid System

The app uses a **CSS Grid 2D layout** to create a professional structure:

### Grid Container Example

```tsx
<div className='w-full h-full grid grid-cols-[15%_85%] grid-rows-[5%_95%] md:grid-cols-[250px_1fr] md:grid-rows-[5%_95%]'>
```

**Breakdown:**
- `w-full h-full` – Full viewport
- `grid` – Enables CSS Grid
- `grid-cols-[15%_85%]` – 2 columns: sidebar (15%), main (85%)
- `grid-rows-[5%_95%]` – 2 rows: header (5%), content (95%)
- `md:grid-cols-[250px_1fr]` – On medium+ screens, sidebar is fixed 250px

### Visual Grid Structure

```
     Sidebar (15%/250px)   Main (85%/1fr)
   ┌───────────────────────┬────────────────────────────┐
R1 │                       │         Header             │ 5%
   ├───────────────────────┼────────────────────────────┤
R2 │      Sidebar          │         Content            │ 95%
   └───────────────────────┴────────────────────────────┘
```

#### Tailwind Breakpoints Used

- `sm`: 640px (small devices)
- `md`: 768px (tablets)
- `lg`: 1024px (desktops)
- `xl`: 1280px
- `2xl`: 1536px

---

## 🧩 Component Structure & Responsibilities

### 1. `App.tsx` (Root)
- **Purpose**: Manages global layout and sidebar state.
- **State**: `isActive` (sidebar open/closed)
- **Responsive Logic**: Uses a `useEffect` hook to auto-close sidebar on small screens:
  ```tsx
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleScreenChange = (e) => {
      if (e.matches) setActive(false);
    };
    if (mediaQuery.matches) setActive(false);
    mediaQuery.addEventListener('change', handleScreenChange);
    return () => mediaQuery.removeEventListener('change', handleScreenChange);
  }, []);
  ```
- **Layout**: Renders grid with sidebar, header, and content. Sidebar is hidden on small screens.

### 2. `Sidebar.tsx`
- **Purpose**: Navigation panel with toggle button and icons.
- **States**: Expanded (shows text) and collapsed (icons only), both with fixed width (`w-60`).
- **Toggle**: Chevron button toggles sidebar. Uses Tailwind transitions for smooth animation.
- **Responsive**: Hidden on small screens (`hidden md:block`).
- **Icons**: Uses `react-icons` for visual navigation.

### 3. `Header.tsx`
- **Purpose**: Top navigation bar with branding, burger menu, and navigation links.
- **Burger Menu**: Appears on mobile, toggles mobile navigation overlay.
- **Styling**: Uses Tailwind for spacing, colors, and transitions.

### 4. `Content.tsx`
- **Purpose**: Main Pomodoro timer interface (timer, controls, stats, etc.).
- **Layout**: Fills main content area of the grid.

---

## 🎨 Styling & Technology Choices

- **Tailwind CSS v4**: Utility-first CSS framework for rapid, consistent styling. Uses the new `@tailwindcss/postcss` plugin for v4 compatibility.
- **React Icons**: For all sidebar and header icons (Hi2, Gi, Io5, Fa6 sets).
- **Poppins Font**: Modern, clean font for professional look (configured in `tailwind.config.js`).
- **Custom Utilities**: Example `.yy` class for border debugging.

---

## 📱 Responsive Design & State Sync

- **Sidebar State**: Controlled by `isActive` in `App.tsx`. Automatically closes on small screens for better UX.
- **Grid Adaptation**: Grid columns/rows change at breakpoints for optimal layout.
- **Mobile Navigation**: Header burger menu opens overlay navigation on small screens.

---

## 🛠️ Project Structure

```
pomodoro-timer/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── Content.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 🧠 Key Learnings & Best Practices

1. **CSS Grid for App Layouts**: Enables true 2D layouts, perfect for sidebar + header apps.
2. **Tailwind v4 Setup**: Requires new PostCSS plugin, but enables latest features and performance.
3. **Responsive State Management**: Syncing React state with media queries ensures UI always matches device size.
4. **Component Isolation**: Each UI part is a separate, reusable component.
5. **Consistent Widths**: Sidebar always uses a fixed width (`w-60`) for both expanded/collapsed states, preventing layout shift.
6. **Modern UI/UX**: Animations, icons, and font choices create a professional, enjoyable experience.

---

## 📦 How to Run

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

## 📚 References

- [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique)
- [Tailwind CSS Docs](https://tailwindcss.com/docs/installation)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vite](https://vitejs.dev/)

---

## 💡 Contribution & License

This project is for learning and demonstration. Feel free to fork, modify, and use for your own productivity!
