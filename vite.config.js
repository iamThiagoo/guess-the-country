import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import ui from '@nuxt/ui/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    ui({
      ui: {
        colors: {
          primary: 'violet',
        },
        formField: {
          slots: {
            label: 'block font-medium text-gray-300',
          },
        },
        modal: {
          slots: {
            overlay: 'fixed inset-0 bg-black/80',
          },
        },
      },
    }),
  ],
})
