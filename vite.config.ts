import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["frc5431.duckdns.org"],
    port: 5173,
    strictPort: true,
    https: false,
  }
})
