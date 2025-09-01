import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { vuetify } from '../../mocks/setup'

// Mock the useAuth composable
const mockUseAuth = vi.fn()
vi.mock('../../composables/useAuth', () => ({
  useAuth: mockUseAuth,
}))

// Mock Firebase auth functions
vi.mock('firebase/auth', () => ({
  signInWithPopup: vi.fn(),
  signOut: vi.fn(),
  GoogleAuthProvider: vi.fn().mockImplementation(() => ({})),
}))

describe('AuthComponent', () => {
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
    const { default: AuthComponent } = await import('../AuthComponent.vue')
    return mount(AuthComponent, {
      global: {
        plugins: [vuetify],
      },
    })
  }

  it('renders loading state when user data is undefined', async () => {
    mockUseAuth.mockReturnValue({
      auth: {
        signInWithPopup: vi.fn(),
        signOut: vi.fn(),
      },
      currentUser: {
        value: undefined,
      },
      isLoggedIn: false,
      isAuthorizedUser: false,
      getCurrentUserOnce: vi.fn().mockResolvedValue(undefined),
    })

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    expect(wrapper.text()).toContain('Lade Benutzerdaten...')
  })

  it('renders sign in button when user is not logged in', async () => {
    mockUseAuth.mockReturnValue({
      auth: {
        signInWithPopup: vi.fn(),
        signOut: vi.fn(),
      },
      currentUser: {
        value: null,
      },
      isLoggedIn: false,
      isAuthorizedUser: false,
      getCurrentUserOnce: vi.fn().mockResolvedValue(null),
    })

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    expect(wrapper.text()).toContain('Sie sind nicht angemeldet.')
    expect(wrapper.find('button').text()).toContain('Mit Google anmelden')
  })

  it('renders user info and sign out button when user is logged in and authorized', async () => {
    mockUseAuth.mockReturnValue({
      auth: {
        signInWithPopup: vi.fn(),
        signOut: vi.fn(),
      },
      currentUser: {
        value: {
          displayName: 'Test User',
          uid: 'test-uid',
        },
      },
      isLoggedIn: true,
      isAuthorizedUser: true,
      getCurrentUserOnce: vi.fn().mockResolvedValue({
        displayName: 'Test User',
        uid: 'test-uid',
      }),
    })

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    expect(wrapper.text()).toContain('Hallo, Test User!')
    expect(wrapper.find('button').text()).toContain('Abmelden')
  })

  it('renders access denied message when user is logged in but not authorized', async () => {
    mockUseAuth.mockReturnValue({
      auth: {
        signInWithPopup: vi.fn(),
        signOut: vi.fn(),
      },
      currentUser: {
        value: {
          displayName: 'Test User',
          uid: 'test-uid',
        },
      },
      isLoggedIn: true,
      isAuthorizedUser: false,
      getCurrentUserOnce: vi.fn().mockResolvedValue({
        displayName: 'Test User',
        uid: 'test-uid',
      }),
    })

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    expect(wrapper.text()).toContain('Zugriff verweigert')
    expect(wrapper.text()).toContain('Sie sind angemeldet, aber Ihr Konto ist nicht berechtigt')
  })

  it('renders ChickenDashboard when user is authorized', async () => {
    mockUseAuth.mockReturnValue({
      auth: {
        signInWithPopup: vi.fn(),
        signOut: vi.fn(),
      },
      currentUser: {
        value: {
          displayName: 'Test User',
          uid: 'test-uid',
        },
      },
      isLoggedIn: true,
      isAuthorizedUser: true,
      getCurrentUserOnce: vi.fn().mockResolvedValue({
        displayName: 'Test User',
        uid: 'test-uid',
      }),
    })

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    // Check if ChickenDashboard is rendered
    expect(wrapper.findComponent({ name: 'ChickenDashboard' }).exists()).toBe(true)
  })

  it('displays correct title', async () => {
    mockUseAuth.mockReturnValue({
      auth: {
        signInWithPopup: vi.fn(),
        signOut: vi.fn(),
      },
      currentUser: {
        value: null,
      },
      isLoggedIn: false,
      isAuthorizedUser: false,
      getCurrentUserOnce: vi.fn().mockResolvedValue(null),
    })

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    expect(wrapper.text()).toContain('🐔 Chicken Pi ⚙️')
  })
})
