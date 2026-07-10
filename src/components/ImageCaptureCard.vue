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
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
            </div>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { authenticatedFetch } from '@/auth'
import noImage from '@/no-image.webp'
import { useAuth } from '@/composables/useAuth'

const { currentUser } = useAuth()
const imageUrl = ref('')
const captureLoading = ref(false)

async function fetchImage() {
  try {
    const token = await currentUser.value?.getIdToken()
    if (!token) throw new Error('User not authenticated')

    // The backend returns the image file directly, so we fetch it as a blob
    // and create an object URL to display it.
    const response = await authenticatedFetch<Response>(`/image`, token, {
      method: 'GET',
    })

    if (!response.ok) {
      throw new Error(`Image fetch failed with status: ${response.status}`)
    }

    const imageBlob = await response.blob()

    // Revoke the old object URL to avoid memory leaks
    if (imageUrl.value && imageUrl.value.startsWith('blob:')) {
      URL.revokeObjectURL(imageUrl.value)
    }

    imageUrl.value = URL.createObjectURL(imageBlob)
  } catch (error) {
    console.error('Failed to fetch image:', error)
    imageUrl.value = noImage
  }
}

async function captureImage() {
  captureLoading.value = true
  const token = await currentUser.value?.getIdToken()
  if (!token) throw new Error('User not authenticated')
  await authenticatedFetch<Response>('/image', token, { method: 'POST' })
  await fetchImage()
  captureLoading.value = false
}

onMounted(() => {
  fetchImage()
})
</script>
