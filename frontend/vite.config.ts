import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { compression } from "vite-plugin-compression2";
// import viteImagemin from 'vite-plugin-imagemin'

const isDocker = process.env.DOCKER === "true";

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
    allowedHosts: ["https://frc5431.wucode.org"],
  },
});
