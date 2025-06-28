/**
 * Standardized color classes for components to ensure consistency
 * and prevent common theming issues across the component library.
 */

/**
 * Standard surface/card background colors
 * - Light mode: Very subtle off-white for cards and surfaces
 * - Dark mode: Dark but not extreme background for readability
 */
export const SURFACE_COLORS = {
  /** Main surface background (cards, panels, modals) */
  surface: 'bg-neutral-50 dark:bg-neutral-100',

  /** Elevated surface background (dropdowns, popovers, tooltips) */
  surfaceElevated: 'bg-white dark:bg-neutral-200',

  /** Subtle surface background (section backgrounds, subtle cards) */
  surfaceSubtle: 'bg-neutral-25 dark:bg-neutral-50',
} as const;

/**
 * Standard text colors that work with surface backgrounds
 */
export const TEXT_COLORS = {
  /** Primary text color with high contrast */
  primary: 'text-neutral-900 dark:text-neutral-900',

  /** Secondary text color with medium contrast */
  secondary: 'text-neutral-700 dark:text-neutral-700',

  /** Muted text color for less important content */
  muted: 'text-neutral-500 dark:text-neutral-500',

  /** Disabled text color */
  disabled: 'text-neutral-400 dark:text-neutral-400',
} as const;

/**
 * Standard border colors that work with surface backgrounds
 */
export const BORDER_COLORS = {
  /** Default border color for cards and surfaces */
  default: 'border-neutral-200 dark:border-neutral-300',

  /** Subtle border color for less prominent divisions */
  subtle: 'border-neutral-100 dark:text-neutral-200',

  /** Strong border color for emphasis */
  strong: 'border-neutral-300 dark:border-neutral-400',
} as const;

/**
 * Accent colors for brand theming and call-to-action elements
 * These can be overridden by consuming applications via CSS custom properties
 */
export const ACCENT_COLORS = {
  /** Primary accent color for CTAs and brand elements */
  primary: 'bg-accent-500 text-accent-contrast',

  /** Secondary accent color for less prominent actions */
  secondary: 'bg-accent-400 text-accent-contrast',

  /** Subtle accent background with accent text */
  subtle: 'bg-accent-100 text-accent-800',

  /** Accent text color */
  text: 'text-accent-600 dark:text-accent-400',

  /** Accent border color */
  border: 'border-accent-300 dark:border-accent-600',

  /** Accent hover states */
  hover: 'hover:bg-accent-600 hover:text-accent-contrast',
} as const;

/**
 * Complete card styling with consistent background, text, and border
 */
export const CARD_COLORS = {
  /** Standard card styling */
  default: `${SURFACE_COLORS.surface} ${TEXT_COLORS.primary} ${BORDER_COLORS.default}`,

  /** Elevated card styling (with stronger background) */
  elevated: `${SURFACE_COLORS.surfaceElevated} ${TEXT_COLORS.primary} ${BORDER_COLORS.default}`,

  /** Subtle card styling (less prominent) */
  subtle: `${SURFACE_COLORS.surfaceSubtle} ${TEXT_COLORS.secondary} ${BORDER_COLORS.subtle}`,
} as const;

/**
 * Helper function to get consistent card colors
 * @param variant - The card variant
 * @returns Tailwind classes string
 */
export function getCardColors(
  variant: keyof typeof CARD_COLORS = 'default',
): string {
  return CARD_COLORS[variant];
}
