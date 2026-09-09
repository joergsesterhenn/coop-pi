<template>
  <DoorCard />
  <LightCard />
  <StreamCard />
  <TempCard />
  <SunCalc />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import LightCard from "./LightCard.vue";
import TempCard from "./TempCard.vue";
import StreamCard from "./StreamCard.vue";
// import DoorCard from './DoorCard.vue'
import SunCalc from "./SunCalc.vue";
onMounted(() => {});
</script>
