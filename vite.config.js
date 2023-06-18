import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: "src/main.js",
      output: {
        format: 'umd',
        inlineDynamicImports: true,
        entryFileNames: "main.js",
      },
    },
  },
});
