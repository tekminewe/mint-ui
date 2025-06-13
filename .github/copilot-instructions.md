## Rules

- This is a React UI library project using React 19, TypeScript and Storybook.
- Please check package.json for the list of dependencies.
- Always give the answers based on the dependencies in package.json.

## Package Manager

- Use `pnpm` for package management.

## Development Rules

- I have run the storybook server and the development server. You can see the changes in real-time.
- Use Tailwind CSS v3 for styling.
- Make sure no Typescript error at the end of each iteration. Fix any TypeScript errors immediately.
- Make sure no ESLint error at the end of each iteration. Fix any ESLint errors immediately.
- Make sure no Prettier error at the end of each iteration. Fix any Prettier errors immediately.

## Naming Conventions

- Use React 19 recommended coding styles and conventions.
- Use kebab-case for folders and files.
- Use camelCase for variables and functions.
- Use PascalCase for classes, interfaces, types and enums.

## TypeScript Rules

- Always use named exports instead of default exports.

## React Rules

- Always use functional components.
- Always create one file per component.
- Always add description for props of the component. For example:

```typescript
interface MyComponentProps {
  /**
   * The description of the prop.
   * @default undefined
   * @example "John Doe"
   */
  myProps: string;
}
```

## Storybook Rules

- Create the storybook story for the component for each variant of style and state.
- Show all variant or state of the component in the same storybook.
- Each story should include dark and light mode variants.

## Tailwind CSS Rules

- The tailwind config file is located at `src/components/tailwind-plugin/index.ts`.

## Accessibility Rules

### General Accessibility

- Ensure all components are accessible and follow WCAG 2.1 AA guidelines.
- Test components with keyboard navigation and screen readers.
- Maintain a minimum color contrast ratio of 4.5:1 for normal text and 3:1 for large text.

### Semantic HTML

- Use semantic HTML elements whenever possible (`button`, `nav`, `main`, `section`, `article`, etc.).
- Prefer native HTML elements over custom implementations for better accessibility.
- Use heading elements (`h1`, `h2`, etc.) in proper hierarchical order.

### ARIA Attributes

- Add appropriate ARIA labels (`aria-label`, `aria-labelledby`, `aria-describedby`).
- Use ARIA roles when semantic HTML is not sufficient (`role="button"`, `role="dialog"`, etc.).
- Implement ARIA states (`aria-expanded`, `aria-selected`, `aria-checked`, `aria-disabled`).
- Use `aria-hidden="true"` for decorative elements that should be ignored by screen readers.

### Keyboard Navigation

- Ensure all interactive elements are keyboard accessible using Tab, Enter, Space, and Arrow keys.
- Implement proper focus management with `tabIndex` when necessary.
- Provide visible focus indicators for all focusable elements.
- Handle focus trapping in modal dialogs and overlays.
- Support Escape key to close modals, dropdowns, and other overlays.

### Form Accessibility

- Associate all form inputs with labels using `htmlFor` or wrap inputs in `<label>`.
- Provide error messages with `aria-describedby` linking to error text.
- Use `aria-invalid` to indicate form validation errors.
- Group related form controls with `<fieldset>` and `<legend>`.
- Implement proper autocomplete attributes where applicable.

### Interactive Components

- Use `role="button"` and proper keyboard handlers for clickable elements that aren't `<button>`.
- Implement `aria-expanded` for collapsible content and dropdowns.
- Use `aria-selected` for selectable items in lists and menus.
- Provide `aria-label` or `aria-labelledby` for buttons with only icons.

### Dynamic Content

- Use `aria-live` regions for dynamic content updates.
- Implement `aria-busy` for loading states.
- Provide alternative text for images using `alt` attributes.
- Use `aria-describedby` to associate help text with form controls.

### Component-Specific Rules

- **Buttons**: Must have accessible names and proper keyboard support.
- **Links**: Must have meaningful link text and proper focus states.
- **Tables**: Use proper table headers (`<th>`) with `scope` attributes.
- **Lists**: Use proper list markup (`<ul>`, `<ol>`, `<li>`).
- **Modals**: Implement focus trapping and return focus to trigger element.
- **Tooltips**: Use `aria-describedby` to associate tooltips with their triggers.
- **Tabs**: Implement proper arrow key navigation and `aria-selected` states.

### Testing Requirements

- Test with screen readers (VoiceOver on macOS, NVDA on Windows).
- Verify keyboard-only navigation works for all functionality.
- Check color contrast ratios meet WCAG standards.
- Validate that focus indicators are clearly visible.
- Ensure all interactive elements have accessible names.

## Project Structure

```
src/
├── components/ # Components folder
│   ├── <components>/ # Component folder
│       ├── index.ts/ # Export components and types
│       ├── <ComponentName>.tsx # Component file
│       ├── <ComponentName>.stories.tsx # Storybook file
```
