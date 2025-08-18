import { signInWithPopup, signOut } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import type { Auth, User } from 'firebase/auth' // Import the User type
import { getDatabase, ref as dbRef } from 'firebase/database'
import { computed, type Ref } from 'vue'
import { useCurrentUser, useFirebaseAuth, useDatabaseObject } from 'vuefire'
import { firebaseApp } from './firebase'

export const BASE_BACKEND_URL: string = import.meta.env.VITE_API_BASE_URL

export const googleAuthProvider = new GoogleAuthProvider()
export const auth: Auth | null = useFirebaseAuth()
export const currentUser: Ref<User | undefined | null> = useCurrentUser()
export const database = getDatabase(firebaseApp)
export const allowedUsersFromDB: Ref<Record<string, boolean> | null | undefined> =
  useDatabaseObject<Record<string, boolean>>(dbRef(database, 'allowed_users'))

export const isLoggedIn = computed<boolean>(() => !!currentUser.value)
export const isAuthorizedUser = computed<boolean>(() => {
  if (
    currentUser.value === undefined ||
    currentUser.value === null ||
    allowedUsersFromDB.value === undefined ||
    allowedUsersFromDB.value === null
  ) {
    return false // Still loading or not authorized (no logged-in user or allowed users data not ready)
  }
  const userUid: string = currentUser.value.uid
  const allowedUsersMap: Record<string, boolean> = allowedUsersFromDB.value
  return !!allowedUsersMap[userUid]
})

/**
 * Handles authenticated Calls.
 */
export async function authenticatedFetch<T>( // Use a generic type T for the expected response data
  endpoint: string,
  options: RequestInit = {}, // Use RequestInit for fetch options
): Promise<T> {
  if (currentUser.value == undefined || currentUser.value == null || !isAuthorizedUser.value) {
    console.warn('User not authorized. Cannot make API call to', endpoint)
    throw new Error('User not authorized')
  } else {
    try {
      const idToken: string = await currentUser.value.getIdToken()

      const headers: HeadersInit = {
        // Use HeadersInit for headers
        ...options.headers,
        Authorization: `Bearer ${idToken}`,
        'Content-Type': 'application/json',
      }

      const response: Response = await fetch(`${BASE_BACKEND_URL}/${endpoint}`, {
        ...options,
        headers,
      })

      if (response.ok) {
        const data: T = await response.json()
        return data
      } else {
        console.error('Backend request failed:', response.status, response.statusText)
        throw new Error(`Backend request failed: ${response.statusText}`)
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error during authenticated fetch:', error.message)
      } else {
        console.error('An unknown error occurred during authenticated fetch:', error)
      }
      throw error
    }
  }
}

/**
 * Handles the Google Sign-In process.
 */
export const signInWithGoogle = async () => {
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
