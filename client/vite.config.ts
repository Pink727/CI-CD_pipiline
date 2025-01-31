import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import NodePolyfills from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    NodePolyfills({
      // To include specific polyfills, you can configure here
      crypto: true,
    }),
  ],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});