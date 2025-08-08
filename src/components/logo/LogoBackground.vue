<template>
  <div class="mx-auto fixed z-50 top-7 left-4">
    <img src="/logo_white.png" alt="Logo" class="w-28 md:w-40" :class="themeMode === 'light' ? 'brightness-[0]' : ''" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useSystemStore } from '../../stores/system';

const useSystem = useSystemStore()
const themeMode = computed(() => useSystem.$state.theme)

</script>
