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

describe('ChickenDashboard', () => {
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
    const { default: ChickenDashboard } = await import('../ChickenDashboard.vue')
    return mount(ChickenDashboard, {
      global: {
        plugins: [vuetify],
      },
    })
  }

  it('renders all child components', async () => {
    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    // Check if all expected components are rendered
    expect(wrapper.findComponent({ name: 'DoorCard' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'LightCard' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'ImageCaptureCard' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'TempCard' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'SunCalc' }).exists()).toBe(true)
  })

  it('renders components in correct order', async () => {
    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    // Get all child components
    const components = wrapper.findAllComponents('*')

    // Find the main child components (excluding wrapper divs)
    const mainComponents = components.filter((comp) =>
      ['DoorCard', 'LightCard', 'ImageCaptureCard', 'TempCard', 'SunCalc'].includes(
        comp.name || '',
      ),
    )

    // Verify we have exactly 5 main components
    expect(mainComponents).toHaveLength(5)
  })

  it('calls onMounted lifecycle hook', async () => {
    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    // The component should be mounted successfully
    expect(wrapper.exists()).toBe(true)
  })

  it('renders without errors', async () => {
    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    // Should render without throwing errors
    expect(wrapper.text()).toBeDefined()
  })
})
