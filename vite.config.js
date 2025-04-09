import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    // Generate a _redirects file for Netlify or a 200.html for surge
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  server: {
    port: 3000,
    // Handle client-side routing during development
    historyApiFallback: true,
    middleware: [
      (req, res, next) => {
        // Redirect all requests to index.html
        if (req.url !== '/' && !req.url.includes('.')) {
          req.url = '/';
        }
        next();
      }
    ]
  }
})