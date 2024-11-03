import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://sycret.ru/service/api/api', // целевой API
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // убираем префикс
      },
    }
  }
})
