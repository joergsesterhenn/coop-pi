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
            <v-icon>{{ lightOn ? 'mdi-lightbulb-on' : 'mdi-lightbulb-off' }}</v-icon>
          </template>
        </v-switch>
      </v-card>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const lightOn =  ref<boolean | undefined>(undefined)

const toggling = ref(false)

async function toggleLight() {
  toggling.value = true
  try {
    await fetch('/lights', { method: 'POST' })
    await fetchLightState()
  } catch (e) {
    console.error('Toggle failed:', e)
  } finally {
    toggling.value = false
  }
}

async function fetchLightState(){
      const res = await fetch('/light-state')
      const data = await res.json()
      lightOn.value = data.on
}

onMounted(async () => {
  await fetchLightState()
})
</script>