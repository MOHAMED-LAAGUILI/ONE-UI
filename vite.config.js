/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { visualizer } from 'rollup-plugin-visualizer';
import vitePluginCompression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';
import path from 'path';
import pkg from './package.json';

const dependencies = Object.keys(pkg.dependencies || {});
const devDependencies = Object.keys(pkg.devDependencies || {});
const allDependencies = [
  ...dependencies, ...devDependencies]
.filter(dep => !dep.startsWith('@types/') && !dep.startsWith('ldrs_react') );

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    build: {
      chunkSizeWarningLimit: 10000,
      minify: 'esbuild',
      target: 'esnext',
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) return 'vendor';
            if (id.includes('Pages/')) return `page-${path.basename(id).replace('.jsx', '')}`;
            if (id.includes('Components/')) return `component-${path.basename(path.dirname(id))}`;
            if (id.includes('locales')) return 'translations';
            if (id.includes('Layout')) return `layout-${path.basename(id).replace('.jsx', '').replace(/\//g, '-')}`;
            if (id.includes('mock')) return `mock-${path.basename(id).replace('.jsx', '').replace(/\//g, '-')}`;
          },
        },
      },
    },

    plugins: [
      react(),

      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: 'auto',
        devOptions: {
          enabled: false,
        },
        workbox: isProd
          ? {
              globDirectory: 'dist',
              globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
              globIgnores: ['**/node_modules/**/*', 'sw.js', 'workbox-*.js'],
              maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
              skipWaiting: true,
              clientsClaim: true,
            }
          : undefined,
        includeAssets: ['*.svg', '*.png'],
        manifest: {
          name: 'One UI',
          short_name: 'One UI',
          description: `One UI is a modern, fully responsive UI framework designed 
          for simplicity and efficiency. Whether you are a developer or designer, 
          One UI provides you with all the tools you need to build beautiful and 
          functional websites.`,
          start_url: '/',
          display: 'standalone',
          orientation: 'portrait',
          theme_color: '#ffffff',
          background_color: '#ffffff',
          version: '2.0.0',
          icons: [
            {
              src: 'OneUI-dark.png',
              sizes: '192x192',
              type: 'image/png',
            },
          ],
        },
      }),

      vitePluginCompression({
        algorithm: 'brotliCompress',
        ext: '.br',
        threshold: 1024,
        deleteOriginFile: false,
      }),

      vitePluginCompression({
        algorithm: 'gzip',
        ext: '.gz',
        threshold: 1024,
      }),

      visualizer({
        filename: './dist/stats.html',
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),

      viteImagemin({
        gifsicle: { optimizationLevel: 3 },
        optipng: { optimizationLevel: 7 },
        mozjpeg: { quality: 85 },
        svgo: {
          plugins: [
            { name: 'removeViewBox' },
            { name: 'removeEmptyAttrs' },
          ],
        },
      }),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/Tests/App.test.jsx', 
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@Components': path.resolve(__dirname, 'src/Components'),
        '@Layout': path.resolve(__dirname, 'src/Layout'),
        '@Pages': path.resolve(__dirname, 'src/Pages'),
        '@Assets': path.resolve(__dirname, 'src/Assets'),
        '@Locales': path.resolve(__dirname, 'src/locales'),
        '@Mock': path.resolve(__dirname, 'src/mock'),
        '@Test': path.resolve(__dirname, 'src/Test'),
        '@Public': path.resolve(__dirname, 'public'),
      },
    },

    optimizeDeps: {
      include: allDependencies,
    },
  };
});
