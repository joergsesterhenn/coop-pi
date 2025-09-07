<template>
  <v-app>
    <v-container>
      <h1 class="text-center">🐔 Chicken Pi ⚙️</h1>
      <!-- Condition 1: Loading state -->
      <v-card v-if="currentUser === undefined" class="pa-4 mt-4">
        <p>Lade Benutzerdaten...</p>
      </v-card>
      <!-- Condition 2: Not logged in -->
      <v-card v-else-if="!isLoggedIn" class="pa-4 mt-4">
        <p>Sie sind nicht angemeldet.</p>
        <v-btn color="primary" @click="signInWithGoogle">Mit Google anmelden</v-btn>
      </v-card>
      <!-- Condition 3: Logged in (either authorized or not) -->
      <v-card v-else class="pa-4 mt-4">
        <div v-if="isAuthorizedUser">
          <p>
            Hallo, <strong>{{ user?.displayName }}</strong
            >!
          </p>
        </div>
        <div v-else>
          <h4>Zugriff verweigert</h4>
          <p>Sie sind angemeldet, aber Ihr Konto ist nicht berechtigt, diesen Inhalt anzuzeigen.</p>
          <p>
            Bitte wenden Sie sich an Ihren Administrator, wenn Sie glauben, dass dies ein Fehler
            ist.
          </p>
        </div>
        <v-btn color="primary" @click="handleSignOut">Abmelden</v-btn>
      </v-card>

      <ChickenDashboard v-if="isAuthorizedUser" />
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import ChickenDashboard from '@/components/ChickenDashboard.vue'
import { useAuth } from '@/composables/useAuth.ts'
import { signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth'

const { auth, currentUser, isLoggedIn, isAuthorizedUser, getCurrentUserOnce } = useAuth()

const user = computed(() => currentUser.value)

onMounted(async () => {
  await getCurrentUserOnce()
})

const provider = new GoogleAuthProvider()
const signInWithGoogle = () => signInWithPopup(auth, provider)
const handleSignOut = () => signOut(auth)
</script>
