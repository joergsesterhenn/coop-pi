<template>
  <v-card class="pa-4 mt-4">
    <template #title>
      <div class="text-h6 text-center w-100">💡 Licht</div>
    </template>
    <v-switch
      v-if="lightOn !== undefined"
      v-model="lightOn"
      :label="lightOn ? 'Licht an' : 'Licht aus'"
      inset
      color="yellow-darken-3"
      hide-details
      :loading="toggling"
      :disabled="toggling"
      @change="toggleLight"
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
const lightOn = ref<boolean | undefined>(undefined)
const apiBaseUrl: string = import.meta.env.VITE_API_BASE_URL

const toggling = ref(false)

async function toggleLight() {
  toggling.value = true
  try {
    await fetch(`${apiBaseUrl}/lights`, { method: 'POST' })
    await fetchLightState()
  } catch (e) {
    console.error('Toggle failed:', e)
  } finally {
    toggling.value = false
  }
}

async function fetchLightState() {
  const res = await fetch(`${apiBaseUrl}/light-state`)
  const data = await res.json()
  lightOn.value = data.on
}

onMounted(async () => {
  await fetchLightState()
})
</script>
