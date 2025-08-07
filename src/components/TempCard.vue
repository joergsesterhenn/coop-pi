<template>
  <v-card class="pa-4 mt-4">
    <template #title>
      <div class="text-h6 text-center w-100">🌡️ Temperatur</div>
    </template>
    <v-row>
      <v-col>
        <h3>Innen</h3>
        <v-progress-circular
          :model-value="temp.inside"
          :size="120"
          :width="15"
          color="red"
          :rotate="270"
          :max="50"
        >
          {{ temp.inside }}°C
        </v-progress-circular>
      </v-col>
      <v-col>
        <h3>Aussen</h3>
        <v-progress-circular
          :model-value="temp.outside"
          :size="120"
          :width="15"
          color="red"
          :rotate="270"
          :max="50"
        >
          {{ temp.outside }}°C
        </v-progress-circular>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const temp = ref({ inside: 0, outside: 0 })

async function fetchTemperature(){
      const res = await fetch('/temperature')
      const data = await res.json()
      temp.value = {
        inside: data.inside ?? 0,
        outside: data.outside ?? 0,
      }
}

onMounted(async () => {
   fetchTemperature()
   setInterval(fetchTemperature, 30000)
})
</script>
