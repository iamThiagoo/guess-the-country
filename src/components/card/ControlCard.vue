<template>
  <div class="fixed left-0 right-0 bottom-6 z-50 flex justify-center">
    <UCard class="bg-slate-950 text-white w-full max-w-xl shadow-2xl mx-auto">
      <form @submit.prevent="onSubmit">
        <div class="flex flex-col gap-2">
          <div class="flex items-end gap-x-3 justify-between">
            <UFormField label="Qual o nome do país?" class="w-full">
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

<script setup lang="ts">
  import { ref } from 'vue'
  import { useUserStore } from '../../stores/user'
  import { Send, ChevronsRight, ConciergeBell } from 'lucide-vue-next'

  const user = useUserStore()
  const answer = ref('')

  const onSubmit = () => {
    console.log(answer.value)
  }
</script>
