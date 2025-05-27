## Rules

- This is a React UI library project using React 19 and TypeScript.
- Please check package.json for the list of dependencies.
- Always give the answers based on the dependencies in package.json.
- Use Tailwind CSS v3 for styling.
- Do not create any other css file.
- Use React 19 recommended coding styles and conventions.
- Use the same naming conventions as in the project.
  - Use kebab-case for folders and files.
  - Use camelCase for variables and functions.
  - Use PascalCase for classes, interfaces, types and enums.
- Always check for TypeScript errors and fix them.
- Always check for ESLint errors and fix them.
- Always check for Prettier errors and fix them.
- Always use named exports instead of default exports.
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

- The tailwind config file is located at `src/components/tailwind-plugin/index.ts`.
- Create the storybook story for the component for each variant of style and state.
- Ensure the accessibility of the component.

## Project Structure

```
src/
├── components/ # Components folder
│   ├── <components>/ # Component folder
│       ├── index.ts/ # Export components and types
```
