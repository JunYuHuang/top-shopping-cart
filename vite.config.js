import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  base: "/top-shopping-cart/",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/specs/setup.js",
  },
});
