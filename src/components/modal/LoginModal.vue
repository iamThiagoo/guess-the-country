<template>
  <UModal
    :close="false"
    :dismissible="false"
    v-model:open="open"
    class="!max-w-md ml-6 border-none"
    title="Login"
    description="Informe seu apelido para iniciar o jogo"
  >
    <template #content>
      <section class="flex flex-col gap-6 p-8 bg-slate-950 rounded-lg shadow-lg">
        <div class="text-center flex flex-col items-center">
          <img src="/logo_white.png" class="w-40 -ml-6 mb-4" />
          <h2 class="text-xl text-center font-semibold !text-gray-200">Olá, seja bem-vindo(a),</h2>
          <h3 class="text-2xl mt-0.5 text-center font-medium !text-violet-400 mb-0">
            Para iniciar... defina seu apelido
          </h3>
        </div>

        <UForm
          :schema="schema"
          :state="form"
          @submit="onSubmit"
          :validateOn="['submit']"
          class="w-full"
        >
          <UFormField name="username" size="xl" label="Apelido" class="w-full" required>
            <UInput
              ref="nicknameInput"
              v-model="form.username"
              placeholder="Informe o seu apelido"
              class="w-full mt-1"
            />
          </UFormField>

          <UButton
            size="xl"
            class="w-full flex justify-center text-white bg-violet-600 text-center mt-8 mb-2 py-2.5 pt-3 cursor-pointer transform active:scale-99 transition-transform"
            variant="solid"
            color="primary"
            type="submit"
          >
            <Compass class="size-6 mr-1" />
            Iniciar Jornada
          </UButton>
        </UForm>
      </section>
    </template>
  </UModal>
</template>

<script setup>
  import { Compass } from 'lucide-vue-next'
  import { nextTick, ref, watch, reactive } from 'vue'
  import { useUserStore } from '../../stores/user'
  import * as z from 'zod'
  import { useGameStore } from '../../stores/game'

  const user = useUserStore()
  const game = useGameStore()
  const open = ref(true)
  const nicknameInput = ref(null)

  const form = reactive({
    username: '',
  })

  watch(open, async val => {
    if (val) {
      await nextTick()
      nicknameInput.value?.focus()
    }
  })

  const schema = z.object({
    username: z.string().min(2, 'Mínimo 2 caracteres').max(100, 'Máximo 100 caracteres'),
  })

  const onSubmit = values => {
    const username = values.data.username.trim()
    user.setName(username)
    game.setStatus('playing')
    game.newRound()
    open.value = false
  }
</script>
