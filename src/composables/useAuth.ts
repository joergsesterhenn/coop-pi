// src/composables/useAuth.ts
import { computed, inject, watch } from 'vue'
import { useFirebaseAuth, useCurrentUser, useDatabaseObject } from 'vuefire'
import { ref as dbRef } from 'firebase/database'
import { getAuth, type Auth, type User } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { firebaseApp } from '../firebase'

export function useAuth() {
  // now runs inside setup(), after plugin registration
  const auth = getAuth()

  if (!auth) {
    throw new Error('Firebase Auth instance not found!')
  }

  const database = getDatabase(firebaseApp)
  const currentUser = useCurrentUser()
  const allowedUsers = useDatabaseObject<Record<string, boolean>>(dbRef(database, 'allowed_users'))

  const isLoggedIn = computed(() => !!currentUser.value)
  const isAuthorizedUser = computed(() => {
    const uid = currentUser.value?.uid
    return !!uid && !!allowedUsers.value?.[uid]
  })

  async function getCurrentUserOnce(): Promise<User | null> {
    if (currentUser.value !== undefined) {
      return currentUser.value
    }

    return new Promise<User | null>((resolve) => {
      // watch for the first non-undefined value
      const stopWatch = watch(
        currentUser,
        (newVal) => {
          if (newVal !== undefined) {
            stopWatch() // stop watching
            resolve(newVal) // resolve promise
          }
        },
        { immediate: true }, // trigger callback immediately if there's already a value
      )
    })
  }

  return {
    auth,
    currentUser,
    allowedUsers,
    isLoggedIn,
    isAuthorizedUser,
    getCurrentUserOnce,
  }
}
