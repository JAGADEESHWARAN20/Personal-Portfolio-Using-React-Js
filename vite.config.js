import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Add base URL
  server: {
    port: 3000,
    host: true,
    strictPort: true,
    historyApiFallback: true // Enable history API fallback
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src' // Optional: Add source directory alias
    }
  }
})