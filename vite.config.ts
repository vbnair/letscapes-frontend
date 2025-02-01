import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    port: 5173, // Ensure this port matches in all configs
  }
})
