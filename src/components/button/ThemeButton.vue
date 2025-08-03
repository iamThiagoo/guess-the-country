<template>
  <UButton
    class="theme-btn fixed right-1 top-28 inline-block z-10"
    id="toggleTheme"
    size="md"
    @click="toggleTheme"
    color="primary"
    variant="info"
  >
    <Sun v-if="theme === 'light'" />
    <Moon v-else />
  </UButton>
</template>

<script setup>
  import { Sun, Moon } from 'lucide-vue-next'
  import { useSystemStore } from '../../stores/system'
  import { computed } from 'vue'

  const system = useSystemStore()
  const theme = computed(() => system.$state.theme)
  const toggleTheme = () => system.toggleTheme()
</script>
