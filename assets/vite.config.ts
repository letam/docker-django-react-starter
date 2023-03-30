import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: process.env.VITE_PORT,
  },
})
