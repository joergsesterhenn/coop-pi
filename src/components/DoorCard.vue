<template>
  <v-card class="pa-4 mt-4">
    <template #title>
      <div class="text-h6 text-center w-100">🚪 Hühnerklappe</div>
    </template>
    <v-row align="center" justify="center">
      <v-col>
        <v-btn color="blue" @click="moveDoor('up')" :disabled="open" class="fade-button">
          <v-icon>mdi-arrow-up-bold</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <div class="text-body-1 font-weight-medium">{{ doorStatusText }}</div>
      </v-col>
      <v-col>
        <v-btn color="blue" @click="moveDoor('down')" :disabled="closed" class="fade-button">
          <v-icon>mdi-arrow-down-bold</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const doorStatus = ref<number>(0)

const DoorStateLabels = [
  'Unbekannt',
  'Offen',
  'Geschlossen',
  'Öffnet...',
  'Schließt...'
]

const doorStatusText = computed(() => DoorStateLabels[doorStatus.value] ?? 'Fehler')
const closed = computed(() => doorStatus.value==2)
const open = computed(() => doorStatus.value==1)

async function fetchDoorState() {
  try {
    const res = await fetch('/door-state')
    const data = await res.json()
    doorStatus.value = data.status
  } catch (err) {
    console.error('Fehler beim Abrufen des Türstatus:', err)
    doorStatus.value = 0 // fallback to UNDEFINED
  }
}

setInterval(fetchDoorState, 2000)

onMounted(() => {
  fetchDoorState()
})

async function moveDoor(direction: 'up' | 'down') {
  await fetch(`/door?direction=${direction}`, { method: 'POST' });
}
</script>
<style scoped>
.fade-button {
  transition: opacity 0.3s ease;
}
.fade-button:disabled {
  opacity: 0.3;
  filter: grayscale(100%);
}
</style>