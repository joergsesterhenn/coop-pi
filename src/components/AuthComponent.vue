<template>
  <v-app>
    <v-container>
      <h1 class="text-center">🐔 Chicken Pi ⚙️</h1>
      <v-card v-if="getCurrentUser() === undefined" class="pa-4 mt-4">
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
import ChickenDashboard from '@/components/ChickenDashboard.vue'
import {
  isLoggedIn,
  signInWithGoogle,
  getCurrentUser,
  handleSignOut,
  isAuthorizedUser,
  allowedUsersFromDB,
} from '@/auth'
import { watchEffect } from 'vue'

const user = await getCurrentUser()

watchEffect(async () => {
  console.log('Current user:', user?.uid)
  console.log('Allowed users from DB:', allowedUsersFromDB.value)
  console.log('Is authorized:', isAuthorizedUser.value)
})
</script>
