import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  html: {
    inject: {
      injectData: {
        type: 'module',
      },
    },
  },
})   


