<template>
  <v-app>
    <v-container>
      <h1 class="text-center">🐔 Chicken Pi ⚙️</h1>
      <v-card v-if="currentUser === undefined" class="pa-4 mt-4">
        <p>Lade Benutzerdaten...</p>
      </v-card>
      <v-card v-if="isLoggedIn" class="pa-4 mt-4">
        <p>
          Welcome, <strong>{{ currentUser?.displayName }}</strong
          >!
        </p>
        <v-btn color="primary" @click="handleSignOut">Abmelden</v-btn>
      </v-card>
      <v-card v-if="!isAuthorizedUser && isLoggedIn" class="pa-4 mt-4">
        <h4>Zugriff verweigert</h4>
        <p>Sie sind angemeldet, aber Ihr Konto ist nicht berechtigt, diesen Inhalt anzuzeigen.</p>
        <p>
          Bitte wenden Sie sich an Ihren Administrator, wenn Sie glauben, dass dies ein Fehler ist.
        </p>
      </v-card>
      <v-card v-if="!isLoggedIn" class="pa-4 mt-4">
        <p>Sie sind nicht angemeldet.</p>
        <v-btn color="primary" @click="signInWithGoogle">Mit Google anmelden</v-btn>
      </v-card>

      <ChickenDashboard v-if="isAuthorizedUser" />
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import { GoogleAuthProvider, signInWithPopup, signOut, type User, type Auth } from 'firebase/auth'
import { useCurrentUser, useFirebaseAuth, useDatabaseObject } from 'vuefire'
import { getDatabase, ref as dbRef } from 'firebase/database'
import { computed, watchEffect, type Ref } from 'vue'
import { firebaseApp } from '@/firebase'
import ChickenDashboard from '@/components/ChickenDashboard.vue'

const auth: Auth | null = useFirebaseAuth()
const currentUser: Ref<User | undefined | null> = useCurrentUser()

// Initialize Realtime Database
const database = getDatabase(firebaseApp)

// 1. Fetch the 'allowed_users' list reactively from Realtime Database
// useDatabaseObject returns a reactive ref that mirrors the database path.
// It will be null while loading, then contain the object from 'allowed_users'.
const allowedUsersFromDB: Ref<Record<string, boolean> | null | undefined> = useDatabaseObject<
  Record<string, boolean>
>(dbRef(database, 'allowed_users'))

// 2. Create a computed property to check if the current user is authorized
const isAuthorizedUser = computed<boolean>(() => {
  // Use a series of explicit checks to narrow down types.
  // If currentUser.value is undefined or null, no user is logged in or still loading.
  // If allowedUsersFromDB.value is undefined or null, data is still loading or not available.
  if (
    currentUser.value === undefined ||
    currentUser.value === null ||
    allowedUsersFromDB.value === undefined || // Added check for undefined state
    allowedUsersFromDB.value === null
  ) {
    return false // Still loading or not authorized (no logged-in user or allowed users data not ready)
  }

  // At this point, TypeScript knows:
  // - currentUser.value is definitely a `User` object (not undefined or null)
  // - allowedUsersFromDB.value is definitely a `Record<string, boolean>` (not undefined or null)

  const userUid: string = currentUser.value.uid
  const allowedUsersMap: Record<string, boolean> = allowedUsersFromDB.value

  // Check if the current user's UID exists as a key in the allowedUsers object
  // and if its value is explicitly true.
  return !!allowedUsersMap[userUid]
})

// A computed property to easily check if the user is logged in (for general UI)
const isLoggedIn = computed<boolean>(() => !!currentUser.value)

/**
 * Handles the Google Sign-In process.
 */
const signInWithGoogle = async () => {
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
const handleSignOut = async () => {
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

watchEffect(() => {
  console.log('Current user:', currentUser.value?.uid)
  console.log('Allowed users from DB:', allowedUsersFromDB.value)
  console.log('Is authorized:', isAuthorizedUser.value)
})
</script>
