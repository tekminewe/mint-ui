import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts(),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, "./src/globals.css"),
          dest: path.resolve(__dirname, "./dist"),
          rename: () => "styles.css",
        },
      ],
    }),
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      name: "index",
      // the proper extensions will be added
      fileName: "index",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
        },
      },
    },
  },
});
