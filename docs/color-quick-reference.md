# Mint-UI Color Quick Reference

## 🎯 Component Colors - Quick Copy/Paste

### Cards & Surfaces

```typescript
// Standard card
getCardColors('default');
// Result: bg-neutral-50 dark:bg-neutral-100 text-neutral-900 dark:text-neutral-900 border-neutral-200 dark:border-neutral-300

// Elevated card (dropdowns, modals)
getCardColors('elevated');
// Result: bg-white dark:bg-neutral-200 text-neutral-900 dark:text-neutral-900 border-neutral-200 dark:border-neutral-300

// Subtle card
getCardColors('subtle');
// Result: bg-neutral-25 dark:bg-neutral-50 text-neutral-700 dark:text-neutral-700 border-neutral-100 dark:text-neutral-200
```

### Individual Elements

```typescript
// Backgrounds
SURFACE_COLORS.surface; // bg-neutral-50 dark:bg-neutral-100
SURFACE_COLORS.surfaceElevated; // bg-white dark:bg-neutral-200
SURFACE_COLORS.surfaceSubtle; // bg-neutral-25 dark:bg-neutral-50

// Text
TEXT_COLORS.primary; // text-neutral-900 dark:text-neutral-900
TEXT_COLORS.secondary; // text-neutral-700 dark:text-neutral-700
TEXT_COLORS.muted; // text-neutral-500 dark:text-neutral-500
TEXT_COLORS.disabled; // text-neutral-400 dark:text-neutral-400

// Borders
BORDER_COLORS.default; // border-neutral-200 dark:border-neutral-300
BORDER_COLORS.strong; // border-neutral-300 dark:border-neutral-400
BORDER_COLORS.subtle; // border-neutral-100 dark:border-neutral-200
```

## 🚨 Common Mistakes to Avoid

❌ **DON'T** manually write colors:

```typescript
className = 'bg-white dark:bg-neutral-900 text-black dark:text-white';
```

✅ **DO** use standardized utilities:

```typescript
className={cn(getCardColors('default'), 'border')}
```

❌ **DON'T** assume color numbers work the same in both modes:

```typescript
className = 'bg-neutral-800'; // This becomes LIGHT gray in dark mode!
```

✅ **DO** understand the inversion and use documented combinations:

```typescript
className={SURFACE_COLORS.surface} // Properly handles both modes
```

## 📖 Import Statement

```typescript
import {
  getCardColors,
  SURFACE_COLORS,
  TEXT_COLORS,
  BORDER_COLORS,
} from '../utils/component-colors';
```
