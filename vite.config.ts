import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import tailwindcss from '@tailwindcss/vite';
import packageJson from './package.json';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
  },
  server: { port: 3000 },
  preview: { port: 3000 },
  plugins: [
    react(),
    tailwindcss(),
    dts({
      include: ['./src'],
      afterDiagnostic(diagnostic) {
        if (diagnostic.length > 0) {
          throw new Error(`Found ${diagnostic.length} typescript errors`);
        }
      },
    }),
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'build',
    assetsDir: 'artifacts',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendors';
          }
          if (id.includes('packages')) {
            return 'packages';
          }
          return null;
        },
      },
    },
  },
});
