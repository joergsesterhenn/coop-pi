
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import DoorCard from '../DoorCard.vue';
import { server } from '../../mocks/server';
import { http, HttpResponse } from 'msw';
import { vuetify } from '../../mocks/setup';

// Mock the useAuth composable to prevent VueFire errors in tests
vi.mock('../../composables/useAuth', () => ({
  useAuth: () => ({
    currentUser: {
      value: {
        uid: 'test-user',
        getIdToken: async () => 'test-token',
      },
    },
  }),
}));

describe('DoorCard', () => {

  beforeEach(() => {
    // Use fake timers to control setInterval
    vi.useFakeTimers();
  });

  afterEach(() => {
    // Restore real timers after each test
    vi.useRealTimers();
  });

  const mountComponent = () => {
    return mount(DoorCard, {
      global: {
        plugins: [vuetify],
      },
    });
  };

  it('renders "Offen" when API returns status 1', async () => {
    // Arrange: Set up the mock response BEFORE mounting the component
    server.use(
      http.get('*/door-state', () => {
        return HttpResponse.json({ status: 1 }); // Status for "Offen"
      })
    );

    // Act: Mount the component, which triggers the API call
    const wrapper = mountComponent();
    
    // Assert: Wait for the component to update after the fetch
    await vi.dynamicImportSettled();

    const statusText = wrapper.find('[data-testid="door-status-text"]').text();
    expect(statusText).toBe('Offen');
  });

  it('renders "Geschlossen" when API returns status 2', async () => {
    // Arrange
    server.use(
      http.get('*/door-state', () => {
        return HttpResponse.json({ status: 2 }); // Status for "Geschlossen"
      })
    );

    // Act
    const wrapper = mountComponent();

    // Assert
    await vi.dynamicImportSettled();

    const statusText = wrapper.find('[data-testid="door-status-text"]').text();
    expect(statusText).toBe('Geschlossen');
  });

  it('renders "Unbekannt" on API failure', async () => {
    // Arrange
    server.use(
      http.get('*/door-state', () => {
        // Simulate a server error
        return new HttpResponse(null, { status: 500 }); 
      })
    );

    // Act
    const wrapper = mountComponent();

    // Assert
    await vi.dynamicImportSettled();

    const statusText = wrapper.find('[data-testid="door-status-text"]').text();
    expect(statusText).toBe('Unbekannt');
  });
});
