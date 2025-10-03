import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import { compression } from "vite-plugin-compression2";
// import { visualizer } from "rollup-plugin-visualizer";
export default defineConfig({
  base: "/",
  plugins: [
    react() as PluginOption,
    compression({
      algorithms: ["brotli", "gzip"],
    }) as PluginOption,
  ],
});
