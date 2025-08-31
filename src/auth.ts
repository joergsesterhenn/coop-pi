import { signInWithPopup, signOut } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { useAuth } from '@/composables/useAuth'

export const BASE_BACKEND_URL: string = import.meta.env.VITE_API_BASE_URL

/**
 * Performs a fetch to your FastAPI backend with Firebase auth.
 * @template T  Expected response data shape
 * @param endpoint  Path under your base URL (no leading slash)
 * @param token The firebase auth token
 * @param options   Standard Fetch API options
 * @returns         Parsed JSON as type T
 */
export async function authenticatedFetch<T>(
  endpoint: string,
  token: string,
  options: RequestInit = {},
): Promise<T> {
  // 1. Check for token
  if (!token) {
    console.warn('No auth token provided. Cannot call API:', endpoint)
    throw new Error('User not authorized')
  }

  try {
    // 2. Build headers (merge existing ones)
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...options.headers,
    }

    // 3. Execute fetch against full backend URL
    const response = await fetch(`${BASE_BACKEND_URL}${endpoint}`, {
      ...options,
      headers,
    })

    // 4. Handle non-2xx errors
    if (!response.ok) {
      console.error('Backend request failed:', response.status, response.statusText)
      throw new Error(`Backend error: ${response.status} ${response.statusText}`)
    }

    // 5. Parse JSON into T
    return (await response.json()) as T
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Error during authenticatedFetch:', err.message)
      throw err
    }
    console.error('Unknown error during authenticatedFetch:', err)
    throw new Error('Unknown fetch error')
  }
}

/**
 * Handles the Google Sign-In process.
 */
export const signInWithGoogle = async () => {
  const { auth } = useAuth()
  if (!auth) return
  const provider = new GoogleAuthProvider()
  try {
    await signInWithPopup(auth, provider)
    console.log('Signed in with Google!')
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error signing in:', error.message)
    } else {
      console.error('An unknown error occurred during sign-in:', error)
    }
  }
}

/**
 * Handles the user signing out.
 */
export const handleSignOut = async () => {
  const { auth } = useAuth()
  if (!auth) return
  try {
    await signOut(auth)
    console.log('Signed out!')
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error signing out:', error.message)
    } else {
      console.error('An unknown error occurred during sign-out:', error)
    }
  }
}
