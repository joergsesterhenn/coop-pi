import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import AuthComponent from '../AuthComponent.vue'
import { ref } from 'vue'

// Define the user object type
type MockUser = {
  uid: string
  displayName?: string
  getIdToken: ReturnType<typeof vi.fn>
}

// Mock the entire useAuth composable
const mockCurrentUser = ref<MockUser | null | undefined>(undefined)
const mockIsLoggedIn = ref(false)
const mockIsAuthorizedUser = ref(false)

// We'll define the mockImplementation inside beforeEach
const mockGetCurrentUserOnce = vi.fn()

vi.mock('@/composables/useAuth', () => ({
  useAuth: () => ({
    currentUser: mockCurrentUser,
    isLoggedIn: mockIsLoggedIn,
    isAuthorizedUser: mockIsAuthorizedUser,
    getCurrentUserOnce: mockGetCurrentUserOnce,
    auth: {},
  }),
}))

vi.mock('../../auth', () => ({
  authenticatedFetch: vi.fn(),
}))

vi.mock('firebase/auth', () => ({
  signInWithPopup: vi.fn(),
  signOut: vi.fn(),
  GoogleAuthProvider: vi.fn(() => ({})),
}))

vi.mock('@/components/ChickenDashboard.vue', () => ({
  default: {
    name: 'ChickenDashboard',
    template: '<div class="chicken-dashboard">Mock Chicken Dashboard</div>',
  },
}))

describe('AuthComponent', () => {
  let mockAuthenticatedFetch: ReturnType<typeof vi.fn>

  beforeEach(async () => {
    vi.clearAllMocks()
    const { authenticatedFetch } = await import('../../auth')
    mockAuthenticatedFetch = authenticatedFetch as ReturnType<typeof vi.fn>

    // Reset reactive state before each test
    mockCurrentUser.value = undefined
    mockIsLoggedIn.value = false
    mockIsAuthorizedUser.value = false

    // Reset the mock implementation for each test
    mockGetCurrentUserOnce.mockImplementation(async () => {
      // In a real scenario, this mock would fetch the user and update
      // the `currentUser` and `isLoggedIn` states inside the composable.
      // We simulate that here.
      mockCurrentUser.value = null
      mockIsLoggedIn.value = false
      return null
    })
  })

  it('shows loading state initially, then updates to sign-in', async () => {
    const wrapper = mount(AuthComponent)
    expect(wrapper.text()).toContain('Lade Benutzerdaten...')

    await flushPromises()

    expect(wrapper.text()).not.toContain('Lade Benutzerdaten...')
    expect(wrapper.text()).toContain('Mit Google anmelden')
  })

  it('renders sign in button when user is not logged in', async () => {
    // This test no longer needs to explicitly mock the state, as the
    // beforeEach setup now correctly sets the initial state to a logged-out user.
    const wrapper = mount(AuthComponent)
    await flushPromises()
    expect(wrapper.text()).toContain('Mit Google anmelden')
  })

  it('renders user info and sign out button when user is logged in and authorized', async () => {
    const testUser: MockUser = {
      uid: 'test-uid',
      displayName: 'Test User',
      getIdToken: vi.fn().mockResolvedValue('test-token'),
    }

    // Set the mock implementation to return an authorized user
    mockGetCurrentUserOnce.mockResolvedValue(testUser)
    mockCurrentUser.value = testUser
    mockIsLoggedIn.value = true
    mockIsAuthorizedUser.value = true

    const wrapper = mount(AuthComponent)
    await flushPromises()

    expect(wrapper.text()).toContain('Hallo, Test User!')
    expect(wrapper.text()).toContain('Abmelden')
  })

  it('renders access denied message when user is logged in but not authorized', async () => {
    const testUser: MockUser = {
      uid: 'test-uid',
      getIdToken: vi.fn().mockResolvedValue('test-token'),
    }

    // Set the mock implementation to return an unauthorized user
    mockGetCurrentUserOnce.mockResolvedValue(testUser)
    mockCurrentUser.value = testUser
    mockIsLoggedIn.value = true
    mockIsAuthorizedUser.value = false

    const wrapper = mount(AuthComponent)
    await flushPromises()

    expect(wrapper.text()).toContain('Zugriff verweigert')
    expect(wrapper.text()).toContain('Abmelden')
  })

  it('renders ChickenDashboard when user is authorized', async () => {
    const testUser: MockUser = {
      uid: 'test-uid',
      getIdToken: vi.fn().mockResolvedValue('test-token'),
    }

    mockGetCurrentUserOnce.mockResolvedValue(testUser)
    mockCurrentUser.value = testUser
    mockIsLoggedIn.value = true
    mockIsAuthorizedUser.value = true

    const wrapper = mount(AuthComponent)
    await flushPromises()

    expect(wrapper.findComponent({ name: 'ChickenDashboard' }).exists()).toBe(true)
  })

  it('displays correct title', () => {
    const wrapper = mount(AuthComponent)
    expect(wrapper.text()).toContain('Chicken Pi')
  })
})
