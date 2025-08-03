<template>
  <div class="fixed left-0 right-0 bottom-6 z-50 flex justify-center">
    <UCard class="bg-slate-950 text-white w-full max-w-xl shadow-2xl mx-auto">
      <form @submit.prevent="onSubmit">
        <div class="flex flex-col gap-2">
          <div class="flex items-end gap-x-3 justify-between">
            <UFormField
              label="Qual o nome do país?"
              class="w-full"
              :error="error"
              :hint="'Acertos: ' + correctAnswers"
            >
              <UInput
                ref="inputRef"
                v-model="answer"
                size="xl"
                placeholder="Informe o nome do país..."
                class="w-full [&>input]:bg-transparent [&>input]:text-white"
              />
              <p
                v-if="showCorrectMessage"
                class="mt-2 text-success transition-opacity duration-1000"
              >
                🎉 Você acertou! Indo para o próximo país...
              </p>
            </UFormField>
            <UButton
              type="submit"
              class="text-center h-[40px] px-4 text-white bg-violet-600 hover:bg-violet-500 cursor-pointer transition-all transform active:scale-99 transition-transform"
              :class="{ 'mb-7': error || showCorrectMessage }"
              size="xl"
            >
              <ConciergeBell class="size-5 ml-2" />
              Palpitar
            </UButton>
            <TipButton />
          </div>

          <div
            class="mt-1 border-t border-gray-200 pt-5"
            :class="{ 'mt-2': !error || !showCorrectMessage }"
          >
            <UButton
              @click="onSkip"
              class="text-base w-full text-center bg-red-500 text-white py-2 flex justify-center cursor-pointer active:bg-red-500 hover:bg-red-500/80 transform active:scale-99 transition-transform"
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
  import { computed, nextTick, onMounted, ref, watch } from 'vue'
  import { ChevronsRight, ConciergeBell } from 'lucide-vue-next'
  import { useGameStore } from '../../stores/game'
  import TipButton from '../button/TipButton.vue'

  const game = useGameStore()

  const answer = ref('')
  const error = ref(null)
  const inputRef = ref(null)
  const showCorrectMessage = ref(false)
  const correctAnswers = computed(() => game.correctAnswers)

  const focusInput = () => {
    nextTick(() => {
      inputRef.value?.$el?.querySelector('input')?.focus()
    })
  }

  const onSubmit = () => {
    if (game.checkAnswer(answer.value)) {
      answer.value = ''
      focusInput()

      showCorrectMessage.value = true
      setTimeout(() => {
        showCorrectMessage.value = false
        game.newRound()
      }, 1000)
      return
    }

    error.value = '❌ Resposta incorreta!'
  }

  const onSkip = () => {
    game.newRound()
  }

  watch(
    () => game.status,
    newStatus => {
      if (newStatus === 'playing') focusInput()
    },
    { immediate: true }
  )

  watch(
    () => answer.value,
    _value => {
      error.value = null
    }
  )

  onMounted(() => {
    focusInput()
  })
</script>
