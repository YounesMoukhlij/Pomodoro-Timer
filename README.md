# Pomodoro-Timer
The goal of this project is to learn and practice frontend development skills by building a Pomodoro Timer, a productivity tool based on the Pomodoro Technique. The Pomodoro Technique is a time management method that uses a timer to break work into intervals (typically 25 minutes) separated by short breaks.

https://roadmap.sh/projects/pomodoro-timer


## 🏗️ Layout Architecture: 2D Grid System

This project uses a **CSS Grid 2D layout** to create a professional app structure with a persistent sidebar and header. Here's how it's implemented:

### Grid Container Setup

```tsx
<div className='w-full h-full grid grid-cols-[5%_95%] grid-rows-[6%_94%]'>
```

**Breakdown:**
- `w-full h-full` - Full width and height of the viewport
- `grid` - Enables CSS Grid layout system
- `grid-cols-[5%_95%]` - Creates **2 columns**: 5% (sidebar) + 95% (main area)
- `grid-rows-[6%_94%]` - Creates **2 rows**: 6% (header) + 94% (content)

### Visual Grid Structure

```
     Column 1 (5%)    Column 2 (95%)
   ┌─────────────────┬──────────────────────┐
R1 │                 │      Header          │ 6%
   │                 │     (95% × 6%)       │
   ├─────────────────┼──────────────────────┤
R2 │    Sidebar      │                      │
   │   (5% × 100%)   │      Content         │ 94%
   │                 │     (95% × 94%)      │
   │                 │                      │
   └─────────────────┴──────────────────────┘
```

/* Default breakpoints */
sm: 640px   /* Small devices (landscape phones) */
md: 768px   /* Medium devices (tablets) */
lg: 1024px  /* Large devices (desktops) */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X Extra large devices */

### Component Positioning

#### 1. Sidebar Component
```tsx
<div className="col-span-1 row-span-2 bg-orange-200">
  <Sidebar/>
</div>
```
- **Position**: Column 1, spans both rows (full height)
- **Dimensions**: 5% width × 100% height
- **Purpose**: Navigation and tools

#### 2. Header Component
```tsx
<div className='col-span-1 row-span-1'>
  <Header/>
</div>
```
- **Position**: Column 2, Row 1
- **Dimensions**: 95% width × 6% height
- **Purpose**: Branding, navigation, and status

#### 3. Content Component
```tsx
<div className="col-span-1 row-span-1 bg-yellow-500">
  <Content/>
</div>
```
- **Position**: Column 2, Row 2
- **Dimensions**: 95% width × 94% height
- **Purpose**: Main Pomodoro timer interface

### Why CSS Grid Over Flexbox?

| Feature | CSS Grid | Flexbox |
|---------|----------|---------|
| **Layout Type** | 2D (rows + columns) | 1D (row or column) |
| **Use Case** | Complex layouts | Simple alignment |
| **Positioning** | Precise grid placement | Flow-based |
| **Best For** | App layouts | Component alignment |

### Advantages of This Layout

1. ✅ **No Empty Spaces** - Sidebar fills the entire left side
2. ✅ **Responsive Design** - Percentage-based sizing
3. ✅ **Clean Structure** - Each component has dedicated space
4. ✅ **Professional Look** - Common app layout pattern
5. ✅ **Easy Maintenance** - Clear component boundaries

### Layout Result

```
┌─────┬─────────────────────────────────────┐
│     │  🍅 Pomodoro | Portfolio | GitHub   │ 6%
│  📱 ├─────────────────────────────────────┤
│  📊 │                                     │
│  ⚙️  │         🍅 Timer Display           │
│  📈 │            25:00                    │ 94%
│     │                                     │
│     │      [Start] [Pause] [Reset]        │
│     │                                     │
└─────┴─────────────────────────────────────┘
  5%                   95%
```

This grid system provides the foundation for a professional Pomodoro timer application with intuitive layout and excellent user experience.
