<template>
  <v-app>
    <v-container>
      <h1 class="text-center">🐔 Chicken Pi ⚙️</h1>
      <v-card v-if="currentUser === undefined" class="pa-4 mt-4">
        <p>Lade Benutzerdaten...</p>
      </v-card>
      <v-card v-if="isLoggedIn" class="pa-4 mt-4">
        <p>
          Hallo, <strong>{{ user?.displayName }}</strong
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
import { ref, onMounted } from 'vue'
import ChickenDashboard from '@/components/ChickenDashboard.vue'
import { useAuth } from '@/composables/useAuth.ts'
import { signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth'

const { auth, currentUser, isLoggedIn, isAuthorizedUser, getCurrentUserOnce } = useAuth()

const user = ref(currentUser.value) // initially undefined

// Load the initial user when the component mounts
onMounted(async () => {
  user.value = await getCurrentUserOnce()
})

// your Google handlers
const provider = new GoogleAuthProvider()
const signInWithGoogle = () => signInWithPopup(auth, provider)
const handleSignOut = () => signOut(auth)
</script>
