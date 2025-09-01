import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'

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

// Mock the authenticatedFetch function
vi.mock('../../auth', () => ({
  authenticatedFetch: vi.fn(),
}))

describe('LightCard', () => {
  let mockAuthenticatedFetch: ReturnType<typeof vi.fn>

  beforeEach(async () => {
    // Get the mocked function
    mockAuthenticatedFetch = vi.mocked((await import('../../auth')).authenticatedFetch)

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

  afterEach(() => {
    vi.restoreAllMocks()
  })

  const mountComponent = async () => {
    // dynamically import AFTER setupFiles ensure polyfills and Vuetify are applied
    const { default: LightCard } = await import('../LightCard.vue')
    return mount(LightCard)
  }

  it('fetches and displays the initial light state as On', async () => {
    mockAuthenticatedFetch.mockResolvedValue({ on: true })

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()
    expect(wrapper.find('.v-switch .v-label').text()).toBe('Licht an')
  })

  it('fetches and displays the initial light state as Off', async () => {
    mockAuthenticatedFetch.mockResolvedValue({ on: false })

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()
    expect(wrapper.find('.v-switch .v-label').text()).toBe('Licht aus')
  })

  it('toggles the light from Off to On', async () => {
    // Mock initial state fetch
    mockAuthenticatedFetch
      .mockResolvedValueOnce({ on: false }) // Initial state
      .mockResolvedValueOnce(null) // POST /lights response
      .mockResolvedValueOnce({ on: true }) // Updated state fetch

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()
    expect(wrapper.find('.v-switch .v-label').text()).toBe('Licht aus')

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
    // Mock initial state fetch
    mockAuthenticatedFetch
      .mockResolvedValueOnce({ on: true }) // Initial state
      .mockResolvedValueOnce(null) // POST /lights response
      .mockResolvedValueOnce({ on: false }) // Updated state fetch

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()
    expect(wrapper.find('.v-switch .v-label').text()).toBe('Licht an')

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
    mockAuthenticatedFetch.mockRejectedValue(new Error('API Error'))

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()
    expect(wrapper.find('.v-switch').exists()).toBe(false)
    expect(consoleErrorSpy).toHaveBeenCalledWith('Failed to fetch light state:', expect.any(Error))
  })

  it('handles API error when toggling the switch and maintains state', async () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    // Mock initial state fetch
    mockAuthenticatedFetch
      .mockResolvedValueOnce({ on: false }) // Initial state
      .mockRejectedValueOnce(new Error('Toggle failed')) // POST /lights error

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()
    expect(wrapper.find('.v-switch .v-label').text()).toBe('Licht aus')

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
