import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [react(), tailwindcss(), compression({ algorithm: 'brotliCompress', ext: '.br', threshold: 10240 }), compression({ algorithm: 'gzip', ext: '.gz', threshold: 10240 })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
  build: {
    // warn at a slightly higher threshold and add manual chunking for large libs
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id) return;
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'vendor-motion';
            if (id.includes('swiper')) return 'vendor-swiper';
            if (id.includes('lucide-react') || id.includes('@radix-ui')) return 'vendor-ui';
            return 'vendor';
          }
        },
      },
    },
  },
  // Target modern browsers to avoid unnecessary transpilation/polyfills
  esbuild: {
    target: 'es2022'
  },
});
