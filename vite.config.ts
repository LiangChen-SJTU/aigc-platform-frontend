import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  // GitHub Pages（repo pages）必须加仓库名作为前缀
  base: "/aigc-platform-frontend/",
});
