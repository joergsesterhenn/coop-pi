<template>
  <v-app>
    <v-container>
      <h1 class="text-center">🐔 Chicken Pi ⚙️</h1>
      <DoorCard />
      <LightCard />
      <ImageCaptureCard />
      <TempCard />
      <SunCalc />
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import LightCard from './LightCard.vue'
import TempCard from './TempCard.vue'
import ImageCaptureCard from './ImageCaptureCard.vue'
import DoorCard from './DoorCard.vue'
import SunCalc from './SunCalc.vue'

onMounted(() => {
})
</script>
