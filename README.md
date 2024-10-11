# Mint UI (Under developement)

The UI library that leverage radix-ui as the base and add consistent behaviour to the components.

It has successfully power the following website:

- tekminewe.com
- onsentalent.com

# Usage

1. Install the package

```bash
$ pnpm add @tekminewe/mint-ui
```

2. Import the CSS styles at the root of your application

```jsx
import "@tekminewe/mint-ui/styles.css";
```

3. Update your `tailwind.config.ts` to include the plugin and path:

```js
import type { Config } from "tailwindcss";
import mintPlugin from "@tekminewe/mint-ui/tailwind-plugin";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@tekminewe/mint-ui/**/*.js", // Add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [mintPlugin()], // Include the plugin
};
export default config;
```

3. Wrap your root Client component with the `Theme` component.

```jsx
"use client";

import { Theme } from "@tekminewe/mint-ui/theme";

function App() {
  return (
    <Theme>
      <YourRootComponent />
    </Theme>
  );
}
```

3. Import the components you need

```jsx
import { Button } from "@tekminewe/mint-ui/button";
```
