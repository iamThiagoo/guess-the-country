<template>
  <div class="h-screen">
    <UApp :toaster="{ position: 'top-center' }">
      <div class="mx-auto fixed z-50 -top-5 left-4">
        <img src="/logo.png" alt="Logo" class="w-40 brightness-[100]" />
      </div>
      <MapboxGlobe />
      <div>
        <template v-if="!username">
          <LoginModal />
        </template>
        <template v-else>
          <ControlCard />
        </template>
      </div>
    </UApp>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import MapboxGlobe from './components/map/MapboxGlobe.vue'
  import LoginModal from './components/modal/LoginModal.vue'
  import { useUserStore } from './stores/user'
  import ControlCard from './components/card/ControlCard.vue'

  const user = useUserStore()
  const username = computed(() => user.name)
</script>
