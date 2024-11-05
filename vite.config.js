import { defineConfig } from 'vite'; // Импортируем defineConfig
import react from '@vitejs/plugin-react-swc'; // Плагин для React

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://sycret.ru', // Указываем целевой сервер
        changeOrigin: true, // Изменяет заголовок Origin
        rewrite: (path) => path.replace(/^\/api/, '/service/api'), // Переписываем путь, если нужно
      },
    },
  },
});
