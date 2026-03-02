import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/demo/',
  plugins: [vue()],
  server: {
    host: true,
    allowedHosts: true,
    port: 5173
  }
})
