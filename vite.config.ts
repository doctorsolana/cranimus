import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

const ENV_PREFIX = ['GAMBA_', 'VITE_']

export default defineConfig(() => ({
  envPrefix: ENV_PREFIX,
  assetsInclude: ['**/*.glb'],
  server: {
    port: 3000,
    host: true,
  },
  define: { 'process.env.ANCHOR_BROWSER': true },
  plugins: [
    react(),
    Unfonts({
      custom: {
        families: [{
          name: 'Pixelated',
          local: 'Pixelated',
          src: './src/assets/fonts/*.ttf',
          transform(font) {
            if (font.basename === 'pixelated') {
              font.weight = 400;
            }
            return font;
          },
        }],
        display: 'auto',
        preload: true,
        injectTo: 'head-prepend',
      },
    }),
    VitePWA({
      base: '/',
      includeAssets: ['/favicon.png'],
      manifest: {
        name: 'Gamba Demo',
        short_name: 'Gamba',
        theme_color: '#FF5555',
        background_color: '#000000',
        display: 'standalone',
        description: '',
        icons: [
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
      devOptions: {
        enabled: true,
        type: 'module',
        navigateFallback: 'index.html',
      },
    }),
  ],
}))
