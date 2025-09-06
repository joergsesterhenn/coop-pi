import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
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

// Mock the suncalc library
const mockSunCalc = {
  getTimes: vi.fn(),
}
vi.mock('suncalc', () => ({
  default: mockSunCalc,
}))

describe('SunCalc', () => {
  afterEach(() => {
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
    const { default: SunCalc } = await import('../SunCalc.vue')
    return mount(SunCalc, {
      global: {
        plugins: [vuetify],
      },
    })
  }

  it('renders the component with correct title', async () => {
    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    expect(wrapper.text()).toContain('☀️ Tageslicht')
  })

  it('shows loading state initially', async () => {
    const loading = true
    const { default: SunCalc } = await import('../SunCalc.vue')
    const wrapper = mount(SunCalc, {
      mocks: {
        loading,
      },
      global: {
        plugins: [vuetify],
      },
    })

    expect(wrapper.text()).toContain('Lade Sonnen Daten...')
  })

  it('displays sunrise and sunset sections', async () => {
    const mockTimes = {
      sunrise: new Date('2024-01-15T08:00:00Z'),
      sunset: new Date('2024-01-15T18:00:00Z'),
    }

    mockSunCalc.getTimes.mockReturnValue(mockTimes)

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    expect(wrapper.text()).toContain('🌅')
    expect(wrapper.text()).toContain('🌇')
    expect(wrapper.text()).toContain('Sonnen-Aufgang')
    expect(wrapper.text()).toContain('Sonnen-Untergang')
  })

  it('calculates and displays sunrise and sunset times', async () => {
    // Mock sunrise and sunset times
    const mockTimes = {
      sunrise: new Date('2024-01-15T08:00:00Z'),
      sunset: new Date('2024-01-15T18:00:00Z'),
    }

    mockSunCalc.getTimes.mockReturnValue(mockTimes)

    // Mock Date.now() to return a fixed time
    const mockNow = new Date('2024-01-15T12:00:00Z')
    vi.spyOn(global, 'Date').mockImplementation(() => {
      return mockNow
    })

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    // Wait for calculations to complete
    await vi.dynamicImportSettled()
    await wrapper.vm.$nextTick()

    // Verify SunCalc.getTimes was called with correct coordinates
    expect(mockSunCalc.getTimes).toHaveBeenCalledWith(mockNow, 50.22086979927997, 7.279149155545471)

    // Verify times are displayed
    expect(wrapper.text()).toBe(
      '☀️ Tageslicht🌅Sonnen-Aufgang09:00 AM🌇Sonnen-Untergang07:00 PM Tageslicht: 60.0%',
    )

    // Clean up
    vi.restoreAllMocks()
  })

  it('displays daylight progress bar', async () => {
    // Mock sunrise and sunset times
    const mockTimes = {
      sunrise: new Date('2024-01-15T08:00:00Z'),
      sunset: new Date('2024-01-15T18:00:00Z'),
    }

    mockSunCalc.getTimes.mockReturnValue(mockTimes)

    // Mock Date.now() to return a fixed time
    const mockNow = new Date('2024-01-15T12:00:00Z')
    vi.spyOn(global, 'Date').mockImplementation(() => {
      return mockNow
    })

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    // Wait for calculations to complete
    await vi.dynamicImportSettled()
    await wrapper.vm.$nextTick()

    // Verify progress bar exists
    const progressBar = wrapper.find('.v-progress-linear')
    expect(progressBar.exists()).toBe(true)

    // Verify progress percentage is displayed
    expect(wrapper.text()).toContain('Tageslicht:')
    expect(wrapper.text()).toMatch(/Tageslicht: \d+\.\d+%/)

    // Clean up
    vi.restoreAllMocks()
  })

  it('handles calculation errors gracefully', async () => {
    // Mock SunCalc to throw an error
    mockSunCalc.getTimes.mockImplementation(() => {
      throw new Error('Calculation failed')
    })

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    // Wait for error handling to complete
    await vi.dynamicImportSettled()
    await wrapper.vm.$nextTick()

    // Should show error message
    expect(wrapper.text()).toContain('Fehler bei der Berechnung.')
    expect(wrapper.text()).toContain('Calculation failed')

    // Should not be loading anymore
    expect(wrapper.text()).not.toContain('Lade Sonnen Daten...')
  })
})
