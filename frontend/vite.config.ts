import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import { compression } from "vite-plugin-compression2";
import { visualizer } from "rollup-plugin-visualizer";

const isDocker = process.env.DOCKER === "true";
const HOST = process.env.HOST;

export default defineConfig({
  base: "/",
  plugins: [
    react() as PluginOption,
    compression({
      algorithms: ["brotli", "gzip"],
    }) as PluginOption,
    visualizer({ open: true }) as PluginOption,
  ],
  server: {
    host: isDocker ? true : "localhost",
    allowedHosts: HOST ? [HOST] : [],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-icons")) return "react-icons";
            if (id.includes("react-router-dom")) return "router";
            if (id.includes("react-dom")) return "react-dom";
            return "vendor";
          }
        },
      },
    },
  },
});
