import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base:"/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 5000,
    cors: true,
    headers: { "access-control-allow-origin": "*" },
  },
  build: {
    outDir: "../../dist/main",
    assetsDir: "assets",
  },
});
