import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import '@/assets/style/base.scss';`
  //     }
  //   }
  // },
  server: {
    open: true,
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:6010',
      },
    },
  },
  plugins: [vue()],
});
