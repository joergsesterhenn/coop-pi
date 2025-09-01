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
  BASE_BACKEND_URL: 'http://localhost:3000',
}))

describe('ImageCaptureCard', () => {
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
    const { default: ImageCaptureCard } = await import('../ImageCaptureCard.vue')
    return mount(ImageCaptureCard, {
      global: {
        plugins: [vuetify],
      },
    })
  }

  it('renders the component with correct title', async () => {
    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    expect(wrapper.text()).toContain('📸 Chicken Cam')
  })

  it('renders capture button', async () => {
    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    const captureButton = wrapper.find('button')
    expect(captureButton.text()).toContain('neues Foto')
    expect(captureButton.attributes('color')).toBe('primary')
  })

  it('shows loading state on capture button when capturing', async () => {
    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    // Initially not loading
    expect(wrapper.find('button').attributes('loading')).toBeFalsy()

    // Set loading state
    await wrapper.setData({ captureLoading: true })

    expect(wrapper.find('button').attributes('loading')).toBe('true')
  })

  it('displays image when imageUrl is set', async () => {
    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    // Set image URL
    await wrapper.setData({
      imageUrl: 'http://localhost:3000/test-image.jpg',
    })

    const image = wrapper.find('img')
    expect(image.exists()).toBe(true)
    expect(image.attributes('src')).toBe('http://localhost:3000/test-image.jpg')
  })

  it('does not display image when imageUrl is empty', async () => {
    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    const image = wrapper.find('img')
    expect(image.exists()).toBe(false)
  })

  it('shows placeholder with loading spinner when image is loading', async () => {
    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    // Set image URL to trigger image loading
    await wrapper.setData({
      imageUrl: 'http://localhost:3000/test-image.jpg',
    })

    // Check if placeholder template exists
    const placeholder = wrapper.find('.v-progress-circular')
    expect(placeholder.exists()).toBe(true)
  })

  it('fetches image on mount', async () => {
    mockAuthenticatedFetch.mockResolvedValue({} as any)

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    // Wait for the component to settle
    await vi.dynamicImportSettled()

    // Check if image URL is set (indicating fetchImage was called)
    expect(wrapper.vm.imageUrl).toBeTruthy()
  })

  it('handles capture image button click', async () => {
    mockAuthenticatedFetch.mockResolvedValue({} as any)

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    // Click capture button
    await wrapper.find('button').trigger('click')

    // Wait for async operations
    await vi.dynamicImportSettled()
    await wrapper.vm.$nextTick()

    // Verify authenticatedFetch was called
    expect(mockAuthenticatedFetch).toHaveBeenCalledWith('/capture', { method: 'POST' })
  })

  it('updates image after capture', async () => {
    mockAuthenticatedFetch.mockResolvedValue({} as any)

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    // Store initial image URL
    const initialUrl = wrapper.vm.imageUrl

    // Click capture button
    await wrapper.find('button').trigger('click')

    // Wait for async operations
    await vi.dynamicImportSettled()
    await wrapper.vm.$nextTick()

    // Verify image URL was updated (should have new timestamp)
    expect(wrapper.vm.imageUrl).not.toBe(initialUrl)
  })

  it('sets loading state during capture', async () => {
    mockAuthenticatedFetch.mockResolvedValue({} as any)

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    // Initially not loading
    expect(wrapper.vm.captureLoading).toBe(false)

    // Click capture button
    await wrapper.find('button').trigger('click')

    // Should be loading during capture
    expect(wrapper.vm.captureLoading).toBe(true)

    // Wait for async operations to complete
    await vi.dynamicImportSettled()
    await wrapper.vm.$nextTick()

    // Should not be loading after capture
    expect(wrapper.vm.captureLoading).toBe(false)
  })
})
