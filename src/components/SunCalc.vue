<template>
  <v-card class="pa-4 mt-4">
    <template #title>
      <div class="text-h6 text-center w-100">☀️ Tageslicht</div>
    </template>
    <v-card-text>
      <div v-if="error" class="text-red">{{ error }}</div>
      <div v-else-if="loading" class="text-grey">Lade Sonnen Daten...</div>
      <div v-else>
        <v-row justify="space-around" class="mb-4">
          <v-col cols="5" class="text-center">
            <div class="text-yellow-darken-2 text-h4">🌅</div>
            <div class="text-caption">Sonnen-Aufgang</div>
            <div class="font-weight-medium">{{ formatTime(sunrise) }}</div>
          </v-col>
          <v-col cols="5" class="text-center">
            <div class="text-orange-darken-2 text-h4">🌇</div>
            <div class="text-caption">Sonnen-Untergang</div>
            <div class="font-weight-medium">{{ formatTime(sunset) }}</div>
          </v-col>
        </v-row>

        <v-progress-linear
          :model-value="daylightProgress"
          color="yellow"
          height="8"
          rounded
        ></v-progress-linear>
        <div class="text-caption text-center mt-2">
          Tageslicht: {{ daylightProgress.toFixed(1) }}%
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SunCalc from 'suncalc'

const latitude = 50.22086979927997
const longitude = 7.279149155545471
const sunrise = ref<Date | null>(null)
const sunset = ref<Date | null>(null)
const daylightProgress = ref(0)
const loading = ref(true)
const error = ref<string | null>(null)

function formatTime(date: Date | null): string {
  if (!date) return '--:--'
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

onMounted(() => {
  try {
    const now = new Date()
    const times = SunCalc.getTimes(now, latitude, longitude)

    sunrise.value = times.sunrise
    sunset.value = times.sunset

    const total = sunset.value.getTime() - sunrise.value.getTime()
    const elapsed = Math.min(Math.max(now.getTime() - sunrise.value.getTime(), 0), total)

    daylightProgress.value = 100 - (elapsed / total) * 100
    loading.value = false
  } catch (e) {
    error.value = 'Fehler bei der Berechnung.'
    loading.value = false
  }
})
</script>
