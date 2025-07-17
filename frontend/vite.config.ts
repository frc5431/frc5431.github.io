import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'
import viteImagemin from 'vite-plugin-imagemin'

const isDocker = process.env.DOCKER === 'true'

// https://thedkpatel.medium.com/dockerizing-react-application-built-with-vite-a-simple-guide-4c41eb09defaexport default defineConfig({
export default defineConfig({
 base: "/",
 plugins: [react(),  compression({
      algorithms: ['brotli', 'gzip'],
   }),
   viteImagemin({
        gifsicle: {
          optimizationLevel: 1,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 3,
        },
        mozjpeg: {
          quality: 20,
        },
        pngquant: {
          quality: [0.9, 0.9],
          speed: 8,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
         ],
      },
   }),
 ],
 preview: {
  port: 8080,
  strictPort: true,
 },
 server: {
  port: isDocker ? 8080 : 5173,
  strictPort: true,
   host: isDocker ? true : 'localhost',
    origin: isDocker ? 'http://0.0.0.0:8080' : undefined,
    allowedHosts: isDocker ? ['frc5431.duckdns.org'] : undefined,
 }
});