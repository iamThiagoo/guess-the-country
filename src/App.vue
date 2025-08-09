<template>
  <div class="h-screen">
    <UApp :toaster="{ position: 'top-center' }">
      <Loader :show="system.loading" />
      <LogoBackground v-if="username" />
      <ThemeButton />
      <MapboxGlobe />
      <div v-if="!system.loading">
        <template v-if="!username">
          <LoginModal />
        </template>
        <template v-else>
          <EndGameCard v-if="endGame" />
          <ControlCard v-else />
        </template>
      </div>
    </UApp>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useGameStore } from './stores/game'
  import { useUserStore } from './stores/user'
  import { useSystemStore } from './stores/system'

  import MapboxGlobe from './components/map/MapboxGlobe.vue'
  import LoginModal from './components/modal/LoginModal.vue'
  import ControlCard from './components/card/ControlCard.vue'
  import Loader from './components/loader/Loader.vue'
  import LogoBackground from './components/logo/LogoBackground.vue'
  import ThemeButton from './components/button/ThemeButton.vue'
  import EndGameCard from './components/card/EndGameCard.vue'

  const user = useUserStore()
  const system = useSystemStore()
  const game = useGameStore()
  const username = computed(() => user.name)
  const endGame = computed(() => game.$state.status === 'end')
</script>
