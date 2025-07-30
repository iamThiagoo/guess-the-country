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
          variants: {
            fullscreen: {
              // false: {
              //   content: `top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-2rem)] max-w-lg max-h-[calc(100dvh-2rem)] sm:max-h-[calc(100dvh-4rem)] rounded-lg shadow-lg ring ring-slate-800 overflow-hidden`
              // }
            },
          },
        },
      },
    }),
  ],
})
