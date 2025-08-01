import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { compression } from "vite-plugin-compression2";

const isDocker = process.env.DOCKER === "true";
const HOST = process.env.HOST;

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    compression({
      algorithms: ["brotli", "gzip"],
    }),
  ],
  server: {
    host: isDocker ? true : "localhost",
    allowedHosts: [HOST || "frc5431.wucode.org"],
  },
});
