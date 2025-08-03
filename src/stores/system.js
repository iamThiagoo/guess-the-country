import { defineStore } from 'pinia'

export const useSystemStore = defineStore('system', {
  state: () => ({
    loading: true,
    mapStyle: 'mapbox://styles/mapbox/streets-v12',
    theme: 'light',
  }),
  actions: {
    setLoading(value) {
      this.loading = value
    },
    toggleLoading() {
      this.loading = !this.loading
    },
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
      this.mapStyle =
        this.theme === 'light'
          ? 'mapbox://styles/mapbox/streets-v12'
          : 'mapbox://styles/mapbox/dark-v11'

      console.log(this.theme)
      console.log(this.mapStyle)
    },
  },
})
