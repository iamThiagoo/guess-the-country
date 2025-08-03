<template>
  <div class="h-screen">
    <UApp :toaster="{ position: 'top-center' }">
      <Loader :show="system.loading" />
      <LogoBackground v-if="username" />
      <MapboxGlobe />
      <div v-if="!system.loading">
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
  import { useSystemStore } from './stores/system'
  import { useUserStore } from './stores/user'

  import MapboxGlobe from './components/map/MapboxGlobe.vue'
  import LoginModal from './components/modal/LoginModal.vue'
  import ControlCard from './components/card/ControlCard.vue'
  import Loader from './components/loader/Loader.vue'
  import LogoBackground from './components/logo/LogoBackground.vue'

  const user = useUserStore()
  const username = computed(() => user.name)
  const system = useSystemStore()
</script>
