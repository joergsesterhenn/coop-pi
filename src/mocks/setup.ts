import 'vuetify/styles'
import { beforeAll, afterEach, afterAll, vi } from 'vitest'
import { server } from './server'
import { config } from '@vue/test-utils'
import { createVuetify } from 'vuetify'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

// Polyfill matchMedia
if (!window.matchMedia) {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: false, // force all queries to "not match"
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))
}

export const vuetify = createVuetify({
  display: {
    thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },
    mobileBreakpoint: 'sm', // Vuetify will compute `mobile`
  },
})

config.global.plugins.push(vuetify)
