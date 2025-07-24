import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'
// import viteImagemin from 'vite-plugin-imagemin'

const isDocker = process.env.DOCKER === 'true'
const host = process.env.HOST

// https://thedkpatel.medium.com/dockerizing-react-application-built-with-vite-a-simple-guide-4c41eb09defaexport default defineConfig({
export default defineConfig({
 base: "/",
 plugins: [react(),  compression({
      algorithms: ['brotli', 'gzip'],
   }),
   
 ],
 server: {
  host: isDocker ? true : 'localhost',
  allowedHosts: host ? [host] : undefined,
 }
});

// viteImagemin({
//       optipng: {
//         optimizationLevel: 3,
//       },
//       mozjpeg: {
//         quality: 20,
//       },
//       pngquant: {
//         quality: [0.9, 0.9],
//         speed: 8,
//       },
//       svgo: {
//         plugins: [
//           {
//             name: 'removeViewBox',
//             active: false,
//           },
//           {
//             name: 'removeEmptyAttrs',
//             active: false,
//           },
//         ],
//       },
//     }),