import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import AuthComponent from '../AuthComponent.vue'
import { ref, type RefSymbol } from '@vue/reactivity'
import { useCurrentUser } from 'vuefire'

// Mock useAuth
vi.mock('@/composables/useAuth', () => ({
  useAuth: () => ({
    currentUser: {
      value: {
        uid: 'test-uid',
        getIdToken: vi.fn().mockResolvedValue('test-token'),
      },
    },
    getCurrentUserOnce: vi.fn().mockResolvedValue({
      uid: 'test-uid',
      getIdToken: vi.fn().mockResolvedValue('test-token'),
    }),
  }),
}))

// Mock authenticatedFetch and BASE_BACKEND_URL
vi.mock('../../auth', () => ({
  authenticatedFetch: vi.fn(),
}))

describe('AuthComponent', () => {
  let mockAuthenticatedFetch: ReturnType<typeof vi.fn>
  let mockUseAuth: ReturnType<typeof import('@/composables/useAuth').useAuth>

  beforeEach(async () => {
    vi.clearAllMocks()

    // Get the mocked functions
    const { authenticatedFetch } = await import('../../auth')
    mockAuthenticatedFetch = authenticatedFetch as ReturnType<typeof vi.fn>

    const { useAuth } = await import('@/composables/useAuth')
    mockUseAuth = useAuth()

    mockAuthenticatedFetch.mockResolvedValue({
      json: () => Promise.resolve({}),
    } as Response)
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders loading state when user data is undefined', async () => {
    // Mock undefined user

    const wrapper = mount(AuthComponent)

    // Wait for component to settle
    await vi.dynamicImportSettled()

    expect(wrapper.text()).toContain('Lade Benutzerdaten...')
  })

  it('renders sign in button when user is not logged in', () => {
    // Mock no user
    mockUseAuth.currentUser.value = null

    const wrapper = mount(AuthComponent)

    expect(wrapper.text()).toContain('Mit Google anmelden')
  })

  it('renders user info and sign out button when user is logged in and authorized', async () => {
    // Mock authorized user
    mockUseAuth.currentUser.value = {
      uid: 'test-uid',
      getIdToken: vi.fn().mockResolvedValue('test-token'),
    }

    mockAuthenticatedFetch.mockResolvedValueOnce({
      json: () => Promise.resolve({ authorized: true }),
    } as Response)

    const wrapper = mount(AuthComponent)

    // Wait for async operations
    await vi.dynamicImportSettled()

    expect(wrapper.text()).toContain('Angemeldet als')
    expect(wrapper.text()).toContain('Abmelden')
  })

  it('renders access denied message when user is logged in but not authorized', async () => {
    // Mock unauthorized user
    mockUseAuth.currentUser.value = {
      uid: 'test-uid',
      getIdToken: vi.fn().mockResolvedValue('test-token'),
    }

    mockAuthenticatedFetch.mockResolvedValueOnce({
      json: () => Promise.resolve({ authorized: false }),
    } as Response)

    const wrapper = mount(AuthComponent)

    // Wait for async operations
    await vi.dynamicImportSettled()

    expect(wrapper.text()).toContain('Zugriff verweigert')
  })

  it('renders ChickenDashboard when user is authorized', async () => {
    // Mock authorized user
    mockUseAuth.currentUser.value = {
      uid: 'test-uid',
      getIdToken: vi.fn().mockResolvedValue('test-token'),
    }

    mockAuthenticatedFetch.mockResolvedValueOnce({
      json: () => Promise.resolve({ authorized: true }),
    } as Response)

    const wrapper = mount(AuthComponent)

    // Wait for async operations
    await vi.dynamicImportSettled()

    expect(wrapper.findComponent({ name: 'ChickenDashboard' }).exists()).toBe(true)
  })

  it('displays correct title', () => {
    const wrapper = mount(AuthComponent)
    expect(wrapper.text()).toContain('Chicken Pi')
  })
})
