import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { server } from '../../mocks/server'
import { http, HttpResponse } from 'msw'

// Mock the useAuth composable
vi.mock('../../composables/useAuth', () => ({
  useAuth: () => ({
    currentUser: {
      value: {
        uid: 'test-user',
        getIdToken: async () => 'test-token',
      },
    },
  }),
}))

describe('LightCard', () => {
  afterEach(() => {
    server.resetHandlers()
    vi.restoreAllMocks()
  })

  beforeEach(() => {
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))
  })

  const mountComponent = async () => {
    // dynamically import AFTER setupFiles ensure polyfills and Vuetify are applied
    const { default: LightCard } = await import('../LightCard.vue')
    return mount(LightCard)
  }

  it('fetches and displays the initial light state as On', async () => {
    server.use(http.get('*/light-state', () => HttpResponse.json({ on: true })))
    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()
    expect(wrapper.find('.v-switch .v-label').text()).toBe('Licht an')
  })

  it('fetches and displays the initial light state as Off', async () => {
    server.use(http.get('*/light-state', () => HttpResponse.json({ on: false })))
    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()
    expect(wrapper.find('.v-switch .v-label').text()).toBe('Licht aus')
  })

  it('toggles the light from Off to On', async () => {
    // Set up initial state handler
    server.use(http.get('*/light-state', () => HttpResponse.json({ on: false })))

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()
    expect(wrapper.find('.v-switch .v-label').text()).toBe('Licht aus')

    // Set up toggle response handlers BEFORE clicking
    server.use(
      http.post('*/lights', () => HttpResponse.json({ success: true })),
      http.get('*/light-state', () => HttpResponse.json({ on: true })),
    )

    // Click the switch
    await wrapper.find('.v-switch input').trigger('click')

    // Wait for the toggle operation to complete and state to update
    await vi.dynamicImportSettled()
    await wrapper.vm.$nextTick()

    // Wait a bit more for the async operations to complete
    await new Promise((resolve) => setTimeout(resolve, 100))

    // Debug: Log the actual state
    console.log('Switch label text:', wrapper.find('.v-switch .v-label').text())

    expect(wrapper.find('.v-switch .v-label').text()).toBe('Licht an')
  })

  it('toggles the light from On to Off', async () => {
    // Set up initial state handler
    server.use(http.get('*/light-state', () => HttpResponse.json({ on: true })))

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()
    expect(wrapper.find('.v-switch .v-label').text()).toBe('Licht an')

    // Set up toggle response handlers BEFORE clicking
    server.use(
      http.post('*/lights', () => HttpResponse.json({ success: true })),
      http.get('*/light-state', () => HttpResponse.json({ on: false })),
    )

    // Click the switch
    await wrapper.find('.v-switch input').trigger('click')

    // Wait for the toggle operation to complete and state to update
    await vi.dynamicImportSettled()
    await wrapper.vm.$nextTick()

    // Wait a bit more for the async operations to complete
    await new Promise((resolve) => setTimeout(resolve, 100))

    expect(wrapper.find('.v-switch .v-label').text()).toBe('Licht aus')
  })

  it('handles API error during initial fetch and does not render switch', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    server.use(http.get('*/light-state', () => new HttpResponse(null, { status: 500 })))

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()
    expect(wrapper.find('.v-switch').exists()).toBe(false)
    expect(consoleErrorSpy).toHaveBeenCalledWith('Failed to fetch light state:', expect.any(Error))
  })

  it('handles API error when toggling the switch and maintains state', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    // Set up initial state handler
    server.use(http.get('*/light-state', () => HttpResponse.json({ on: false })))

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()
    expect(wrapper.find('.v-switch .v-label').text()).toBe('Licht aus')

    // Set up error handler for the toggle request
    server.use(http.post('*/lights', () => new HttpResponse(null, { status: 500 })))

    // Click the switch
    await wrapper.find('.v-switch input').trigger('click')

    // Wait for the error to be handled
    await vi.dynamicImportSettled()
    await wrapper.vm.$nextTick()

    // Wait a bit more for the async operations to complete
    await new Promise((resolve) => setTimeout(resolve, 100))

    expect(wrapper.find('.v-switch .v-label').text()).toBe('Licht aus')
    expect(consoleErrorSpy).toHaveBeenCalledWith('Toggle failed:', expect.any(Error))
  })
})
