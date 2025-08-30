import { signInWithPopup, signOut } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { useAuth } from '@/composables/useAuth'

export const BASE_BACKEND_URL: string = import.meta.env.VITE_API_BASE_URL

/**
 * Performs a fetch to your FastAPI backend with Firebase auth.
 * @template T  Expected response data shape
 * @param endpoint  Path under your base URL (no leading slash)
 * @param options   Standard Fetch API options
 * @returns         Parsed JSON as type T
 */
export async function authenticatedFetch<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const { getCurrentUserOnce, isAuthorizedUser } = useAuth()

  // 1. Wait for current user
  const user = await getCurrentUserOnce()

  // 2. Check login + authorization
  if (!user || !isAuthorizedUser.value) {
    console.warn('User not authorized. Cannot call API:', endpoint)
    throw new Error('User not authorized')
  }

  try {
    // 3. Retrieve ID token (uses cache unless expired)
    const idToken = await user.getIdToken()

    // 4. Build headers (merge existing ones)
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`,
      ...options.headers,
    }

    // 5. Execute fetch against full backend URL
    const response = await fetch(`${BASE_BACKEND_URL}${endpoint}`, {
      ...options,
      headers,
    })

    // 6. Handle non-2xx errors
    if (!response.ok) {
      console.error('Backend request failed:', response.status, response.statusText)
      throw new Error(`Backend error: ${response.status} ${response.statusText}`)
    }

    // 7. Parse JSON into T
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
