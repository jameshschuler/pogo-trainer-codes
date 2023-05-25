import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/styles.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      "~/": `${resolve(__dirname, "src")}/`,
      "@": resolve("src"),
      "@components": resolve("src/@components"),
    },
  },
  plugins: [WindiCSS(), vue()],
});
