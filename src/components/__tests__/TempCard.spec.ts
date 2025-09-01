import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import TempCard from '../TempCard.vue'

// Mock useAuth
vi.mock('@/composables/useAuth', () => ({
  useAuth: () => ({
    currentUser: {
      value: {
        uid: 'test-uid',
        getIdToken: vi.fn().mockResolvedValue('test-token'),
      },
    },
  }),
}))

// Mock authenticatedFetch and BASE_BACKEND_URL
vi.mock('../../auth', () => ({
  authenticatedFetch: vi.fn(),
  BASE_BACKEND_URL: 'http://localhost:3000',
}))

// Mock setInterval and clearInterval
vi.stubGlobal('setInterval', vi.fn())
vi.stubGlobal('clearInterval', vi.fn())

describe('TempCard', () => {
  let mockAuthenticatedFetch: ReturnType<typeof vi.fn>
  let mockSetInterval: ReturnType<typeof vi.fn>
  let mockClearInterval: ReturnType<typeof vi.fn>

  beforeEach(async () => {
    vi.clearAllMocks()

    // Get the mocked functions
    const { authenticatedFetch } = await import('../../auth')
    mockAuthenticatedFetch = authenticatedFetch as ReturnType<typeof vi.fn>

    mockSetInterval = global.setInterval as ReturnType<typeof vi.fn>
    mockClearInterval = global.clearInterval as ReturnType<typeof vi.fn>

    mockAuthenticatedFetch.mockResolvedValue({
      json: () => Promise.resolve({ inside: 25, outside: 15 }),
    } as Response)
  })

  afterEach(() => {
    // Clean up specific mocks without restoring all
    vi.clearAllMocks()
  })

  it('renders the component with correct title', () => {
    const wrapper = mount(TempCard)
    expect(wrapper.text()).toContain('Temperatur')
  })

  it('displays inside temperature section', () => {
    const wrapper = mount(TempCard)
    expect(wrapper.text()).toContain('Innen')
  })

  it('displays outside temperature section', () => {
    const wrapper = mount(TempCard)
    expect(wrapper.text()).toContain('Aussen')
  })

  it('shows initial temperature values', () => {
    const wrapper = mount(TempCard)
    expect(wrapper.text()).toContain('0°C')
  })

  it('fetches temperature data on mount', async () => {
    mount(TempCard)

    // Wait for component to mount and fetch
    await vi.dynamicImportSettled()

    // Verify authenticatedFetch was called
    expect(mockAuthenticatedFetch).toHaveBeenCalledWith('/temperature')
  })

  it('updates temperature display after fetching data', async () => {
    const wrapper = mount(TempCard)

    // Wait for async operations
    await vi.dynamicImportSettled()

    // Verify display shows updated values
    expect(wrapper.text()).toContain('25°C')
    expect(wrapper.text()).toContain('15°C')
  })

  it('handles missing temperature data gracefully', async () => {
    mockAuthenticatedFetch.mockResolvedValueOnce({
      json: () => Promise.resolve({}),
    } as Response)

    const wrapper = mount(TempCard)

    // Wait for async operations
    await vi.dynamicImportSettled()

    // Should still show 0°C for missing values
    expect(wrapper.text()).toContain('0°C')
  })

  it('sets up interval for temperature updates', async () => {
    mount(TempCard)

    // Wait for component to mount
    await vi.dynamicImportSettled()

    // Verify setInterval was called with correct parameters
    expect(mockSetInterval).toHaveBeenCalledWith(expect.any(Function), 30000)

    // Clean up
    mockClearInterval.mockClear()
  })

  it('displays temperature in progress circular components', () => {
    const wrapper = mount(TempCard)

    // Check for progress circular components
    const progressCirculars = wrapper.findAll('.v-progress-circular')
    expect(progressCirculars.length).toBeGreaterThan(0)
  })

  it('handles API errors gracefully', async () => {
    // Mock a failed response instead of rejection to avoid unhandled promise rejection
    mockAuthenticatedFetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
      json: () => Promise.resolve({ error: 'API Error' }),
    } as Response)

    const wrapper = mount(TempCard)

    // Wait for async operations
    await vi.dynamicImportSettled()

    // Should still show 0°C on error
    expect(wrapper.text()).toContain('0°C')
  })
})
