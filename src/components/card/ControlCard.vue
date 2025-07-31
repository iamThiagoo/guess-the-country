<template>
  <div class="fixed left-0 right-0 bottom-6 z-50 flex justify-center">
    <UCard class="bg-slate-950 text-white w-full max-w-xl shadow-2xl mx-auto">
      <form @submit.prevent="onSubmit">
        <div class="flex flex-col gap-2">
          <div class="flex items-end gap-x-3 justify-between">
            <UFormField
              label="Qual o nome do país?"
              class="w-full"
              :hint="'Acertos: ' + correctAnswers"
            >
              <UInput
                v-model="answer"
                size="xl"
                placeholder="Informe o nome do país..."
                class="w-full"
              />
            </UFormField>
            <UButton
              type="submit"
              class="text-center h-[40px] px-4 text-white bg-violet-600 hover:bg-violet-500 cursor-pointer transition-all"
              size="xl"
            >
              <ConciergeBell class="size-5 ml-2" />
              Palpitar
            </UButton>
            <UTooltip
              :content="{
                align: 'center',
                side: 'top',
                sideOffset: 8,
              }"
              :delay-duration="0"
              text="Open on GitHub"
            >
              <UButton
                type="submit"
                class="text-center h-[40px] px-4 text-amber-300 bg-violet-600 hover:bg-violet-500 cursor-pointer transition-all"
                size="xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-7 fill-amber-300"
                  viewBox="0 0 640 640"
                >
                  <path
                    d="M420.9 448C428.2 425.7 442.8 405.5 459.3 388.1C492 353.7 512 307.2 512 256C512 150 426 64 320 64C214 64 128 150 128 256C128 307.2 148 353.7 180.7 388.1C197.2 405.5 211.9 425.7 219.1 448L420.8 448zM416 496L224 496L224 512C224 556.2 259.8 592 304 592L336 592C380.2 592 416 556.2 416 512L416 496zM312 176C272.2 176 240 208.2 240 248C240 261.3 229.3 272 216 272C202.7 272 192 261.3 192 248C192 181.7 245.7 128 312 128C325.3 128 336 138.7 336 152C336 165.3 325.3 176 312 176z"
                  />
                </svg>
              </UButton>
            </UTooltip>
          </div>

          <div class="mt-6 border-t border-gray-200 pt-5">
            <UButton
              class="text-base w-full text-center bg-red-500 text-white py-2 flex justify-center cursor-pointer hover:bg-red-400"
            >
              Pular / Próximo
              <ChevronsRight class="size-6 ml-1" />
            </UButton>
          </div>
        </div>
      </form>
    </UCard>
  </div>
</template>

<script setup>
  import { computed, ref } from 'vue'
  import { ChevronsRight, ConciergeBell } from 'lucide-vue-next'
  import { useGameStore } from '../../stores/game'

  const answer = ref('')
  const game = useGameStore()
  const correctAnswers = computed(() => game.correctAnswers)

  const onSubmit = () => {
    console.log(answer.value)
  }
</script>
