import { defineStore } from 'pinia'

export const useSystemStore = defineStore('system', {
  state: () => ({
    loading: true,
  }),
  actions: {
    setLoading(value) {
      this.loading = value
    },
    toggleLoading() {
      this.loading = !this.loading
      console.log('mudou')
    },
  },
})
