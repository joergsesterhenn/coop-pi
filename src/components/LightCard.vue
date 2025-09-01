<template>
  <v-card class="pa-4 mt-4">
    <template #title>
      <div class="text-h6 text-center w-100">💡 Licht</div>
    </template>
    <v-switch
      v-if="lightOn !== undefined"
      :model-value="lightOn"
      :label="lightOn ? 'Licht an' : 'Licht aus'"
      inset
      color="yellow-darken-3"
      hide-details
      :loading="toggling"
      :disabled="toggling"
      @click="toggleLight"
    >
      <template #thumb>
        <v-icon :icon="lightOn ? mdiLightbulbOn : mdiLightbulbOff" />
      </template>
    </v-switch>
  </v-card>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { mdiLightbulbOn, mdiLightbulbOff } from '@mdi/js'
import { authenticatedFetch } from '../auth'
import { useAuth } from '../composables/useAuth'

const { currentUser } = useAuth()
const lightOn = ref<boolean | undefined>(undefined)
const toggling = ref(false)

async function toggleLight() {
  toggling.value = true
  try {
    const token = await currentUser.value?.getIdToken()
    if (!token) throw new Error('User not authenticated')
    await authenticatedFetch('/lights', token, { method: 'POST' })
    await fetchLightState()
  } catch (e) {
    console.error('Toggle failed:', e)
  } finally {
    toggling.value = false
  }
}

async function fetchLightState() {
  try {
    const token = await currentUser.value?.getIdToken()
    if (!token) throw new Error('User not authenticated')
    const data = await authenticatedFetch<{ on: boolean }>('/light-state', token)
    lightOn.value = data.on
  } catch (e) {
    console.error('Failed to fetch light state:', e)
    lightOn.value = undefined
  }
}

onMounted(async () => {
  await fetchLightState()
})
</script>
