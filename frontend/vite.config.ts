import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [WindiCSS(), vue()],
});
