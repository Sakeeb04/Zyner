import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Beginner-friendly Vite configuration for React
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: false
  }
});
