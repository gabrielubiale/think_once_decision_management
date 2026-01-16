# 🎨 Think Once - Design System

## Color Palette

### Primary Colors (From Logo)

Our brand identity is built around the colors extracted from our Think Once logo:

#### Primary - Pink/Red (`#E5366A`)
The signature pink/red from our logo. Use for:
- Primary CTAs and buttons
- Important highlights
- Brand identity elements
- Interactive elements on hover

```css
/* CSS Variables */
var(--primary)
var(--primary-hover)  /* #D21E56 */
var(--primary-light)  /* #F9A3B8 */
var(--primary-dark)   /* #B01447 */

/* Tailwind Classes */
bg-primary-500
text-primary-500
border-primary-500
```

**Color Scale:**
- `50`: `#fef2f5` - Lightest tint
- `100`: `#fde6eb`
- `200`: `#fccdd8`
- `300`: `#f9a3b8`
- `400`: `#f5699a`
- `500`: `#e5366a` ⭐ **Main Brand Color**
- `600`: `#d21e56`
- `700`: `#b01447`
- `800`: `#921341`
- `900`: `#7b133c`
- `950`: `#47061e` - Darkest shade

---

### Secondary Colors

#### Neutral Grays
Used for text, backgrounds, and UI elements

```css
/* CSS Variables */
var(--secondary)
var(--foreground)
var(--background)

/* Tailwind Classes */
bg-secondary-500
text-secondary-700
```

---

### Dark Theme Colors

#### Dark Background (`#1A0A0F`)
Extracted from the logo's dark background. Creates a sophisticated dark mode experience.

```css
/* CSS Variable */
var(--background) /* in dark mode */

/* Tailwind Classes */
bg-dark-950
dark:bg-dark-950
```

**Dark Scale:**
- `50`: `#f5f3f4`
- `100`: `#e9e5e7`
- `200`: `#d6cdd0`
- `300`: `#b8a9af`
- `400`: `#957e87`
- `500`: `#7a616b`
- `600`: `#654f58`
- `700`: `#55424a`
- `800`: `#49393f`
- `900`: `#3f3337`
- `950`: `#1a0a0f` ⭐ **Dark Background**

---

### Semantic Colors

#### Success (`#22C55E`)
For positive actions, confirmations, and success states

```css
var(--success)
bg-success-500
```

#### Warning (`#F59E0B`)
For warnings and cautionary messages

```css
var(--warning)
bg-warning-500
```

#### Error (`#EF4444`)
For errors, destructive actions, and critical alerts

```css
var(--error)
bg-error-500
```

#### Info (`#3B82F6`)
For informational messages and hints

```css
var(--info)
bg-info-500
```

---

## Usage Guidelines

### Buttons

**Primary Button:**
```jsx
<button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-base">
  Primary Action
</button>
```

**Secondary Button:**
```jsx
<button className="bg-secondary-100 hover:bg-secondary-200 text-secondary-900 px-6 py-3 rounded-lg transition-base">
  Secondary Action
</button>
```

**Outlined Button:**
```jsx
<button className="border-2 border-primary-500 text-primary-500 hover:bg-primary-50 px-6 py-3 rounded-lg transition-base">
  Outlined Action
</button>
```

---

### Cards

```jsx
<div className="bg-surface p-6 rounded-xl shadow-soft hover:shadow-soft-lg transition-base border border-border">
  {/* Card content */}
</div>
```

---

### Inputs

```jsx
<input 
  className="w-full px-4 py-3 bg-surface border border-border rounded-lg 
             focus:border-primary-500 focus:ring-2 focus:ring-primary-200 
             transition-base"
  type="text"
/>
```

---

### Typography

**Headings:**
```jsx
<h1 className="text-4xl font-bold text-foreground">Main Heading</h1>
<h2 className="text-3xl font-semibold text-foreground">Section Heading</h2>
<h3 className="text-2xl font-medium text-foreground">Subsection</h3>
```

**Body Text:**
```jsx
<p className="text-base text-foreground-secondary leading-relaxed">
  Body text content
</p>
```

---

## Shadows & Effects

### Soft Shadows
```css
/* Tailwind */
shadow-soft       /* Subtle elevation */
shadow-soft-lg    /* More pronounced */

/* CSS Variables */
var(--shadow-sm)
var(--shadow-md)
var(--shadow-lg)
```

### Glow Effects
For highlighting interactive elements with brand identity:

```css
/* Tailwind */
shadow-glow
shadow-glow-lg

/* CSS Variable */
var(--shadow-glow)
```

---

## Animations

### Predefined Animations

```jsx
{/* Fade In */}
<div className="animate-fade-in">Content</div>

{/* Slide Up */}
<div className="animate-slide-up">Content</div>

{/* Slide Down */}
<div className="animate-slide-down">Content</div>

{/* Scale In */}
<div className="animate-scale-in">Content</div>

{/* Pulse Soft */}
<div className="animate-pulse-soft">Content</div>
```

### Transition Utilities

```jsx
{/* Base transition (250ms) */}
<div className="transition-base hover:scale-105">Hover me</div>

{/* Fast transition (150ms) */}
<div className="transition-fast hover:opacity-80">Quick fade</div>

{/* Slow transition (350ms) */}
<div className="transition-slow hover:transform">Smooth transform</div>
```

---

## Dark Mode

### Automatic (System Preference)
Dark mode automatically activates based on system preferences.

### Manual Toggle
Add the `dark` class to the `<html>` element:

```jsx
<html className="dark">
  {/* Dark mode active */}
</html>
```

### Dark Mode Classes

```jsx
{/* Responsive to dark mode */}
<div className="bg-white dark:bg-dark-950 text-gray-900 dark:text-gray-100">
  Content that adapts to theme
</div>
```

---

## Best Practices

1. **Use CSS Variables** for dynamic theming support
2. **Prefer Tailwind classes** for consistency
3. **Always include hover states** for interactive elements
4. **Use transitions** for smooth UX (use `transition-base` utility)
5. **Test in both light and dark modes**
6. **Maintain consistent spacing** using Tailwind's spacing scale
7. **Use semantic colors** appropriately (success, warning, error, info)

---

## Examples

### Logo Usage

```jsx
import Image from 'next/image'

<Image 
  src="/images/logo.png" 
  alt="Think Once - Decision Management" 
  width={200} 
  height={200}
  className="hover:shadow-glow transition-base"
/>
```

### Brand Card

```jsx
<div className="bg-gradient-to-br from-primary-500 to-primary-700 p-8 rounded-2xl shadow-glow">
  <h2 className="text-3xl font-bold text-white mb-4">Think Once</h2>
  <p className="text-primary-50">Decision Management Platform</p>
</div>
```

---

## Resources

- Logo: `/public/images/logo.png`
- Globals CSS: `/src/app/globals.css`
- Tailwind Config: `/tailwind.config.js`

---

**Last Updated:** 2026-01-16
**Version:** 1.0.0
