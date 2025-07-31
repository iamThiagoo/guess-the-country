<template>
  <UModal
    :close="false"
    :dismissible="false"
    v-model:open="open"
    class="!max-w-md ml-6 border-none"
  >
    <template #content>
      <section class="flex flex-col gap-6 p-8 bg-slate-950 rounded-lg shadow-lg">
        <div class="text-center flex flex-col items-center">
          <DotLottieVue
            style="width: 190px"
            :speed="1"
            autoplay
            loop
            src="https://lottie.host/434884f6-07ec-4522-89ec-e165ee37042c/Rf9kDXBE1R.json"
          />
          <h2 class="text-xl text-center font-semibold !text-gray-200">Olá, seja bem-vindo(a),</h2>
          <h3 class="text-2xl mt-0.5 text-center font-medium !text-violet-400 mb-0">
            Para iniciar... defina seu apelido
          </h3>
        </div>

        <UForm
          :schema="schema"
          :state="form"
          @submit="onSubmit"
          validate-on="submit"
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
            class="w-full flex justify-center text-white bg-violet-800 text-center mt-8 mb-2 py-2.5 cursor-pointer"
            variant="solid"
            color="primary"
            type="submit"
          >
            <Rocket class="size-6 mr-1" />
            Iniciar Jornada
          </UButton>
        </UForm>
      </section>
    </template>
  </UModal>
</template>

<script setup lang="ts">
  import { Rocket } from 'lucide-vue-next'
  import { nextTick, ref, watch, reactive } from 'vue'
  import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
  import { useToast } from '@nuxt/ui/runtime/composables/useToast.js'
  import { useUserStore } from '../../stores/user'
  import * as z from 'zod'

  const user = useUserStore()
  const toast = useToast()
  const open = ref(true)
  const nicknameInput = ref<HTMLInputElement | null>(null)

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

  const onSubmit = (values: any) => {
    const username = values.data.username.trim()
    user.setName(username)

    toast.clear()
    toast.add({
      title: `Falaa, ${username}!`,
      description: `Seja muito bem-vindo(a) ao Guest the Country.`,
      color: 'success',
      icon: 'i-lucide-hand-metal',
    })

    open.value = false
  }
</script>
