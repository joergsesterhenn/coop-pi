<template>
  <v-card class="pa-4 mt-4">
    <template #title>
      <div class="text-h6 text-center w-100">📸 Chicken Live Cam</div>
    </template>

    <v-row justify="center">
      <v-col cols="12" md="8" class="d-flex justify-center">
        <!-- Wenn der Stream geladen ist, zeigen wir ihn an -->
        <v-img
          v-if="streamUrl"
          :src="streamUrl"
          aspect-ratio="4/3"
          cover
          class="elevation-3 rounded-lg"
          style="max-width: 640px; width: 100%"
          @error="handleStreamError"
        >
          <template #placeholder>
            <div
              class="d-flex align-center justify-center fill-height bg-grey-lighten-3"
            >
              <v-progress-circular
                color="primary"
                indeterminate
              ></v-progress-circular>
            </div>
          </template>
        </v-img>

        <!-- Fallback-Anzeige bei Fehlern oder fehlendem Token -->
        <v-img
          v-else
          :src="noImage"
          aspect-ratio="4/3"
          cover
          class="elevation-3 rounded-lg"
          style="max-width: 640px; width: 100%"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from "vue";
import noImage from "@/no-image.webp";
import { useAuth } from "@/composables/useAuth";
// Importiere die Basis-URL aus deiner bestehenden Auth-Datei
import { BASE_BACKEND_URL } from "@/auth";

const { currentUser } = useAuth();
const streamUrl = ref("");

async function startStream() {
  try {
    // 1. Hole das aktuelle Firebase-Token genau wie vorher
    const token = await currentUser.value?.getIdToken();
    if (!token) throw new Error("User nicht authentifiziert");

    // 2. Erstelle die URL und hänge das Token als Query-Parameter an.
    streamUrl.value = `${baseUrl}/stream?token=${encodeURIComponent(token)}`;
  } catch (error) {
    console.error("Stream konnte nicht gestartet werden:", error);
    streamUrl.value = "";
  }
}

function handleStreamError() {
  console.error("Stream-Verbindung abgebrochen oder unautorisiert.");
  streamUrl.value = ""; // Zeigt das Fallback-Bild (noImage) an
}

onMounted(() => {
  startStream();
});

onBeforeUnmount(() => {
  // Beendet den Stream-Request im Browser, wenn die Komponente verlassen wird
  streamUrl.value = "";
});
</script>
