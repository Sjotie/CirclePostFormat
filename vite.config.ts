import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true,
    port: Number(process.env.PORT) || 5173,
    hmr: process.env.NODE_ENV === 'production' ? false : {
      host: process.env.VITE_HMR_HOST || 'localhost',
      protocol: 'wss',
      clientPort: 443
    }
  },
});
