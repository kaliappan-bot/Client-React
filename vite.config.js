import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://script.google.com/macros/s/AKfycbxYTgEt0HeuAwIgL86sfH6jbPauYRoNuwjhBq6hdONAhy7zvo6-ealV6nCN7degcv7b/exec',
        changeOrigin: true,
        rewrite: (path) => '', // Do NOT append anything
      },
    },
  },
})
