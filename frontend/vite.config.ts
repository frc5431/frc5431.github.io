import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import { compression } from "vite-plugin-compression2";
// import { visualizer } from "rollup-plugin-visualizer";

const isDocker = process.env.DOCKER === "true";
const HOST = process.env.HOST;

export default defineConfig({
  base: "/",
  plugins: [
    react() as PluginOption,
    compression({
      algorithms: ["brotli", "gzip"],
    }) as PluginOption,
  ],
  server: {
    host: isDocker ? true : "localhost",
    allowedHosts: HOST ? [HOST] : [],
  },
});
