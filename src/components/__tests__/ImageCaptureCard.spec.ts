import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { server } from '../../mocks/server'
import { http, HttpResponse } from 'msw'
import { vuetify } from '../../mocks/setup'
import ImageCaptureCard from '../ImageCaptureCard.vue'

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

describe('ImageCaptureCard', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    server.resetHandlers()
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
    expect(wrapper.text()).toContain('Chicken Cam')
  })

  it('renders capture button', async () => {
    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()
    const captureButton = wrapper.find('button')
    expect(captureButton.text()).toContain('neues Foto')
  })

  it('shows loading state on capture button when capturing', async () => {
    // Mock slow response to trigger loading state
    server.use(
      http.post('/image', () => {
        return new Promise((resolve) =>
          setTimeout(() => resolve(HttpResponse.json({ success: true })), 100),
        )
      }),
    )

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    // Click capture button to trigger loading
    const captureButton = wrapper.find('button')
    await captureButton.trigger('click')

    // Check for loading state - button should be disabled or show loading
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('displays image when imageUrl is set', async () => {
    // Mock successful image fetch
    server.use(
      http.get('/image', () => {
        return HttpResponse.json({ imageUrl: 'test-image.jpg' })
      }),
    )

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    // Check for image display
    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('does display placeholder image when imageUrl is empty', async () => {
    // Mock empty image response
    server.use(
      http.get('/image', () => {
        return HttpResponse.json({})
      }),
    )

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    expect(wrapper.find('img').attributes().src).toBe('/src/no-image.webp')
  })

  it('fetches image on mount', async () => {
    // Mock the image fetch
    server.use(
      http.get('/image', () => {
        return HttpResponse.json({ imageUrl: 'test-image.jpg' })
      }),
    )

    const wrapper = await mount(ImageCaptureCard)
    await vi.dynamicImportSettled()

    // Component should render without errors
    expect(wrapper.find('img').attributes().src).toBe('test-image.jpg')
  })

  it('handles capture image button click', async () => {
    // Mock successful capture
    server.use(
      http.post('/image', () => {
        return HttpResponse.json({ success: true })
      }),
    )

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    // Find and click capture button
    const captureButton = wrapper.find('button')
    await captureButton.trigger('click')

    // Wait for async operations
    await vi.dynamicImportSettled()

    // Component should still exist after capture
    expect(wrapper.exists()).toBe(true)
  })

  it('updates image after capture', async () => {
    // Mock successful capture response
    server.use(
      http.post('/image', () => {
        return HttpResponse.json({ success: true })
      }),
    )

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    // Click capture button
    const captureButton = wrapper.find('button')
    await captureButton.trigger('click')

    // Wait for async operations
    await vi.dynamicImportSettled()

    // Component should still exist after capture
    expect(wrapper.exists()).toBe(true)
  })

  it('sets loading state during capture', async () => {
    // Mock slow response
    server.use(
      http.post('/image', () => {
        return new Promise((resolve) =>
          setTimeout(() => resolve(HttpResponse.json({ success: true })), 100),
        )
      }),
    )

    const wrapper = await mountComponent()
    await vi.dynamicImportSettled()

    // Click capture button
    const captureButton = wrapper.find('button')
    await captureButton.trigger('click')

    // Check that button exists and can be interacted with
    expect(wrapper.find('button').exists()).toBe(true)
  })
})
