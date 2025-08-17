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
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useCurrentUser, useFirebaseAuth, useDatabaseObject } from 'vuefire'
import { getDatabase, ref as dbRef } from 'firebase/database' // Import dbRef for database paths
import { computed, watchEffect } from 'vue'
import { firebaseApp } from '@/firebase'
import ChickenDashboard from '@/components/ChickenDashboard.vue'

const auth = useFirebaseAuth()
const currentUser = useCurrentUser() // Reactive Firebase user object

// Initialize Realtime Database
const database = getDatabase(firebaseApp)

// 1. Fetch the 'allowed_users' list reactively from Realtime Database
// useDatabaseObject returns a reactive ref that mirrors the database path.
// It will be null while loading, then contain the object from 'allowed_users'.
const allowedUsersFromDB = useDatabaseObject(dbRef(database, 'allowed_users'))

// 2. Create a computed property to check if the current user is authorized
const isAuthorizedUser = computed(() => {
  // Wait for currentUser to be loaded (not undefined)
  // And for allowedUsersFromDB to be loaded (not null)
  if (currentUser.value === undefined || allowedUsersFromDB.value === null) {
    return false // Still loading or not available
  }

  // If no user is logged in, they are not authorized
  if (!currentUser.value) {
    return false
  }

  // Check if the current user's UID exists as a key in the allowedUsers object
  // Remember our RTDB structure: "UID_OF_PERSON_1": true
  return !!allowedUsersFromDB.value[currentUser.value.uid]
})

// A computed property to easily check if the user is logged in (for general UI)
const isLoggedIn = computed(() => !!currentUser.value)

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
    console.error('Error signing in:', error.message)
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
    console.error('Error signing out:', error.message)
  }
}

// Optional: watch for authorization status changes for logging or debugging
watchEffect(() => {
  console.log('Current user:', currentUser.value?.uid)
  console.log('Allowed users from DB:', allowedUsersFromDB.value)
  console.log('Is authorized:', isAuthorizedUser.value)
})
</script>
