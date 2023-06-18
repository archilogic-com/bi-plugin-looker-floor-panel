import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      root: "src",
      input: {
        main: path.resolve(__dirname, "src/main.js"),
        fpe: path.resolve(__dirname, "looker-fpe.js"),
      },
      output: {
        outDir: "../",
        entryFileNames: "[name].js",
      },
    },
  },
});
