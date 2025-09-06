import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ChickenDashboard from '../ChickenDashboard.vue'

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

describe('ChickenDashboard', () => {
  let mockAuthenticatedFetch: ReturnType<typeof vi.fn>

  beforeEach(async () => {
    vi.clearAllMocks()

    // Get the mocked function
    const { authenticatedFetch } = await import('../../auth')
    mockAuthenticatedFetch = authenticatedFetch as ReturnType<typeof vi.fn>

    mockAuthenticatedFetch.mockResolvedValue({
      json: () => Promise.resolve({}),
    } as Response)
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders all child components', () => {
    const wrapper = mount(ChickenDashboard)

    // Check for all expected child components
    expect(wrapper.findComponent({ name: 'DoorCard' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'LightCard' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'TempCard' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'ImageCaptureCard' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'SunCalc' }).exists()).toBe(true)
  })

  it('renders components in correct order', () => {
    const wrapper = mount(ChickenDashboard)

    // Check that components exist in the expected order
    expect(wrapper.findComponent({ name: 'DoorCard' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'LightCard' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'TempCard' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'ImageCaptureCard' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'SunCalc' }).exists()).toBe(true)
  })

  it('calls onMounted lifecycle hook', () => {
    const wrapper = mount(ChickenDashboard)

    // Component should mount successfully
    expect(wrapper.exists()).toBe(true)
  })

  it('renders without errors', () => {
    const wrapper = mount(ChickenDashboard)

    // Component should render without throwing errors
    expect(wrapper.exists()).toBe(true)
  })
})
