import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [],
  base: '/psychologists.services/',
  server: { host: true, port: 8080, },
})