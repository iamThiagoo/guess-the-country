<template>
  <UModal
    :close="false"
    :dismissible="false"
    v-model:open="open"
    class="!max-w-md border-none md:ml-6"
    title="End Game"
    description="Parabéns, você finalizou o game!"
  >
    <template #content>
      <section
        class="flex flex-col gap-3 p-8 px-5 bg-slate-950 rounded-lg shadow-lg md:px-8 md:gap-6"
      >
        <div class="text-center flex flex-col items-center">
          <img src="/logo_white.png" class="w-40 -ml-6 mb-4" />
          <h2 class="text-xl text-center font-semibold !text-gray-200">
            Parabéns {{ user.name }},
          </h2>
          <h3 class="text-lg md:text-2xl mt-0.5 text-center font-medium !text-violet-400 mb-0">
            Você completou o game!
          </h3>
          <img src="/trophy.png" class="size-26 mb-3 text-amber-400 mt-4 animate-pulse" />
        </div>

        <UButton
          size="xl"
          class="w-full flex justify-center text-white bg-violet-600 text-center mt-0 mb-2 py-2.5 pt-3 cursor-pointer transform active:scale-99 transition-transform"
          variant="solid"
          color="primary"
          type="button"
          @click="onReset"
        >
          <RotateCcw class="size-6 mr-1" />
          Resetar Jornada
        </UButton>
      </section>
    </template>
  </UModal>
</template>

<script setup>
  import { RotateCcw } from 'lucide-vue-next'
  import { ref } from 'vue'
  import { useUserStore } from '../../stores/user'
  import { useGameStore } from '../../stores/game'

  const user = useUserStore()
  const game = useGameStore()
  const open = ref(true)

  const onReset = () => {
    game.reset()
    game.newRound()
    game.setStatus('playing')
    open.value = false
  }
</script>
