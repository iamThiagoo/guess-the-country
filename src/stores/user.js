import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '',
    correctAnswers: 0,
  }),

  actions: {
    setName(name) {
      this.name = name
    },
    incrementCorrectAnswers() {
      this.correctAnswers++
    },
    reset() {
      this.name = ''
      this.correctAnswers = 0
    },
    resetCounter() {
      this.correctAnswers = 0
    },
  },
  persist: true,
})
