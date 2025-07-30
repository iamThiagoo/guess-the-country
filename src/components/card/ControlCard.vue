<template>
  <div class="fixed left-0 right-0 bottom-6 z-50 flex justify-center">
    <UCard class="bg-slate-950 text-white w-full max-w-2xl shadow-2xl mx-auto">
      <div class="flex flex-col gap-2">
        <div>
          <div class="flex items-end gap-x-3 justify-between">
            <UFormField label="Qual o nome do país?" class="w-full">
              <UInput
                size="xl"
                placeholder="Informe o nome e pressione Enter ou 'Responder'..."
                class="w-full"
              />
            </UFormField>
            <UButton
              class="text-center h-[40px] px-4 text-white bg-violet-600 hover:bg-violet-800 cursor-pointer"
              size="xl"
            >
              <Send class="size-5 ml-2" />
              Responder
            </UButton>
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
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
  import { useToast } from '@nuxt/ui/runtime/composables/useToast.js'
  import { useUserStore } from '../../stores/user'
  import { Send, ChevronsRight } from 'lucide-vue-next'

  const user = useUserStore()
  const toast = useToast()

  function reset() {
    user.correctAnswers = 0
    toast.add({ title: 'Progresso resetado' })
  }

  function logout() {
    user.reset()
    toast.add({ title: 'Você saiu' })
  }
</script>
