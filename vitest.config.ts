import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      isolate: true,
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      setupFiles: ['./src/mocks/setup.ts'],
      server: {
        deps: {
          inline: ['vuetify', '@firebase/app', '@firebase/auth', 'vuefire'],
        },
      },
    },
    // Define a dummy value for the environment variable
    define: {
      // polyfill matchMedia early
      'window.matchMedia': `(() => {
        return (query) => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: () => {},
          removeListener: () => {},
          addEventListener: () => {},
          removeEventListener: () => {},
          dispatchEvent: () => false,
        });
      })()`,
      'import.meta.env.VITE_API_BASE_URL': JSON.stringify('http://localhost:3000'),
    },
  }),
)
