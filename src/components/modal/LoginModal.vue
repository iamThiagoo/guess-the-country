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
        <div class="w-full">
          <Form>
            <UFormField size="xl" label="Apelido" class="w-full" required>
              <UInput ref="nicknameInput" placeholder="Informe o seu apelido" class="w-full mt-1" />
            </UFormField>

            <UButton
              size="xl"
              class="w-full flex justify-center text-center mt-8 mb-2 py-2.5 cursor-pointer"
              variant="solid"
              color="primary"
              type="submit"
            >
              <Rocket class="size-6 mr-1" />
              Iniciar Jornada
            </UButton>
          </Form>
        </div>
      </section>
    </template>
  </UModal>
</template>

<script setup lang="ts">
  import { LockKeyhole, LogIn, Rocket } from 'lucide-vue-next'
  import { nextTick, ref, watch } from 'vue'
  import { DotLottieVue } from '@lottiefiles/dotlottie-vue'

  const nicknameInput = ref<HTMLInputElement | null>(null)
  const open = ref(true)

  watch(open, async val => {
    if (val) {
      await nextTick()
      nicknameInput.value?.focus()
    }
  })
</script>
