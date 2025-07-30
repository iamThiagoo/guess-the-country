<template>
  <div class="h-screen">
    <UApp>
      <MapboxGlobe />

      <div>
        <LoginModal v-if="!username" />
        <ControlCard v-else />
      </div>
    </UApp>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import MapboxGlobe from './components/map/MapboxGlobe.vue'
  import LoginModal from './components/modal/LoginModal.vue'
  import { useUserStore } from './stores/user'
  import ControlCard from './components/card/ControlCard.vue'

  const user = useUserStore()
  const username = computed(() => user.name)
</script>
