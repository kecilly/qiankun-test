import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";


export default defineConfig({
  base: "/basic/", //qiankunWindow.__POWERED_BY_QIANKUN__ ? "/basic/" : "/",
  plugins: [vue(), qiankun("basic", { useDevMode: true })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 5001,
    cors: true,
    headers: { "Access-Control-Allow-Origin": "*" },
  },
  build: {
    outDir: "../../dist/basic",
    assetsDir: "assets",
    // lib: {
    //   entry: "./src/main.ts",
    //   name: "basic",
    //   fileName: "basic",
    //   formats: ["umd"],
    // },
    rollupOptions: {
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
