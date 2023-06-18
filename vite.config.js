import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        dir: './',
        entryFileNames: "floor-panel.js",
      },
    },
  },
});
