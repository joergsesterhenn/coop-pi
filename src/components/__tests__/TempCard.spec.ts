import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { server } from '../../mocks/server'
import { vuetify } from '../../mocks/setup'

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

// Mock the auth module
const mockAuthenticatedFetch = vi.fn()
vi.mock('../../auth', () => ({
  authenticatedFetch: mockAuthenticatedFetch,
}))

describe('TempCard', () => {
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
    const { default: TempCard } = await import('../TempCard.vue')
    return mount(TempCard, {
      global: {
        plugins: [vuetify],
      },
    })
  }

  it('renders the component with correct title', async () => {
    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    expect(wrapper.text()).toContain('🌡️ Temperatur')
  })

  it('displays inside temperature section', async () => {
    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    expect(wrapper.text()).toContain('Innen')
    expect(wrapper.find('.v-progress-circular').exists()).toBe(true)
  })

  it('displays outside temperature section', async () => {
    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    expect(wrapper.text()).toContain('Aussen')
    // Should have two progress circular components (inside and outside)
    const progressCirculars = wrapper.findAll('.v-progress-circular')
    expect(progressCirculars).toHaveLength(2)
  })

  it('shows initial temperature values', async () => {
    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    // Initial values should be 0
    expect(wrapper.vm.temp.inside).toBe(0)
    expect(wrapper.vm.temp.outside).toBe(0)

    // Display should show 0°C
    expect(wrapper.text()).toContain('0°C')
  })

  it('fetches temperature data on mount', async () => {
    mockAuthenticatedFetch.mockResolvedValue({
      json: () => Promise.resolve({ inside: 25, outside: 15 }),
    } as any)

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    // Wait for the component to settle
    await vi.dynamicImportSettled()

    // Verify authenticatedFetch was called
    expect(mockAuthenticatedFetch).toHaveBeenCalledWith('/temperature')
  })

  it('updates temperature display after fetching data', async () => {
    mockAuthenticatedFetch.mockResolvedValue({
      json: () => Promise.resolve({ inside: 25, outside: 15 }),
    } as any)

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    // Wait for async operations
    await vi.dynamicImportSettled()
    await wrapper.vm.$nextTick()

    // Verify temperature values are updated
    expect(wrapper.vm.temp.inside).toBe(25)
    expect(wrapper.vm.temp.outside).toBe(15)

    // Verify display shows updated values
    expect(wrapper.text()).toContain('25°C')
    expect(wrapper.text()).toContain('15°C')
  })

  it('handles missing temperature data gracefully', async () => {
    mockAuthenticatedFetch.mockResolvedValue({
      json: () => Promise.resolve({ inside: null, outside: undefined }),
    } as any)

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    // Wait for async operations
    await vi.dynamicImportSettled()
    await wrapper.vm.$nextTick()

    // Should fallback to 0 for missing values
    expect(wrapper.vm.temp.inside).toBe(0)
    expect(wrapper.vm.temp.outside).toBe(0)
  })

  it('sets up interval for temperature updates', async () => {
    const mockSetInterval = vi.spyOn(global, 'setInterval')

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    // Verify setInterval was called with correct parameters
    expect(mockSetInterval).toHaveBeenCalledWith(expect.any(Function), 30000)

    // Clean up
    mockSetInterval.mockRestore()
  })

  it('displays temperature in progress circular components', async () => {
    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    const progressCirculars = wrapper.findAll('.v-progress-circular')
    expect(progressCirculars).toHaveLength(2)

    // Check attributes of progress circular components
    progressCirculars.forEach((circular) => {
      expect(circular.attributes('color')).toBe('red')
      expect(circular.attributes('size')).toBe('120')
      expect(circular.attributes('width')).toBe('15')
      expect(circular.attributes('rotate')).toBe('270')
      expect(circular.attributes('max')).toBe('50')
    })
  })

  it('handles API errors gracefully', async () => {
    mockAuthenticatedFetch.mockRejectedValue(new Error('API Error'))

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    // Wait for async operations
    await vi.dynamicImportSettled()
    await wrapper.vm.$nextTick()

    // Should still show 0 values on error
    expect(wrapper.vm.temp.inside).toBe(0)
    expect(wrapper.vm.temp.outside).toBe(0)
  })
})
