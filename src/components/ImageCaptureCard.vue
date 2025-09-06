<template>
  <v-card class="pa-4 mt-4">
    <template #title>
      <div class="text-h6 text-center w-100">📸 Chicken Cam</div>
    </template>
    <v-row>
      <v-col cols="12" md="6">
        <v-btn color="primary" @click="captureImage" :loading="captureLoading"> neues Foto </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <!--imageUrl-->
        <v-img
          v-if="imageUrl.length > 0"
          :src="imageUrl"
          aspect-ratio="4/3"
          cover
          class="elevation-3"
          style="max-height: 300px"
          crossorigin="use-credentials"
        >
          <template #placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="primary" />
            </v-row>
          </template>
        </v-img>
        <v-img
          v-else
          src="imgUrl"
          aspect-ratio="4/3"
          cover
          class="elevation-3"
          style="max-height: 300px"
        ></v-img>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup lang="ts">
import { authenticatedFetch } from '@/auth'
import { useAuth } from '@/composables/useAuth'
import { onMounted, ref } from 'vue'
import noImage from '../no-image.webp'
const imageUrl = ref('')
const captureLoading = ref(false)
const { currentUser } = useAuth()

async function fetchImage() {
  try {
    const token = await currentUser.value?.getIdToken()
    if (!token) throw new Error('User not authenticated')
    const data = await authenticatedFetch<{ imageUrl: string }>(`/latest-image`, token, {
      method: 'GET',
    })
    if (data.imageUrl) {
      imageUrl.value = data.imageUrl
    }
  } catch (error) {
    console.error('Failed to fetch image:', error)
    imageUrl.value = noImage
  }
}

async function captureImage() {
  captureLoading.value = true
  const token = await currentUser.value?.getIdToken()
  if (!token) throw new Error('User not authenticated')
  await authenticatedFetch<Response>('/capture', token, { method: 'POST' })
  await fetchImage()
  captureLoading.value = false
}

onMounted(async () => {
  fetchImage()
})
</script>
