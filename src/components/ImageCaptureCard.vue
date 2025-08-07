<template>
  <v-card class="pa-4 mt-4">
    <template #title>
      <div class="text-h6 text-center w-100">📸 Chicken Cam</div>
    </template>
    <v-row>
      <v-col cols="12" md="6">
        <v-btn color="primary" @click="captureImage" :loading="captureLoading">
          neues Foto
        </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <v-img
          v-if="imageUrl"
          :src="imageUrl"
          aspect-ratio="4/3"
          cover
          class="elevation-3"
          style="max-height: 300px;"
        >
          <template #placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="primary" />
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const imageUrl = ref('')
const captureLoading = ref(false)

async function fetchImage(){
      const timestamp = new Date().getTime()
      imageUrl.value = `/latest-image?_=${timestamp}`
}

async function captureImage(){
      captureLoading.value = true
      await fetch('/capture', { method: 'POST' })
      await fetchImage()
      captureLoading.value = false
}

onMounted(async () => {
  fetchImage()
})
</script>
