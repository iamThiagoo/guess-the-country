import { defineStore } from 'pinia'
import countries from '../utils/countries'
import { formatCountryName } from '../utils/format'

export const useGameStore = defineStore('game', {
  state: () => ({
    status: 'paused', // 'playing', 'paused', 'end
    round: 0,
    correctAnswers: 0,
    currentCountry: {},
    previousCountries: [],
    correctCountries: [],
  }),

  actions: {
    setStatus(status) {
      this.status = status
    },
    setRound(round) {
      this.round = round
    },
    setCurrentCountry(country) {
      this.currentCountry = country
    },
    incrementCorrectAnswers() {
      this.correctAnswers++
    },
    addPreviousCountry(country) {
      this.previousCountries.push(country)
    },
    setCorrectCountry(country) {
      this.correctCountries.push(country)
    },
    newRound() {
      let available = countries.filter(
        country =>
          !this.correctCountries.some(correctCountry => correctCountry.name === country.name) &&
          country.name !== this.currentCountry?.name
      )

      if (available.length === 0) {
        this.status = 'end'
        return
      }

      const newCountry = available[Math.floor(Math.random() * available.length)]
      this.currentCountry = newCountry
      this.previousCountries.push(this.currentCountry)
    },
    checkAnswer(answer) {
      if (
        formatCountryName(answer.toLowerCase()) ===
        formatCountryName(this.currentCountry.name.toLowerCase())
      ) {
        this.incrementCorrectAnswers()
        this.setCorrectCountry(this.currentCountry)
        return true
      }

      return false
    },
    reset() {
      this.round = 0
      this.correctAnswers = 0
      this.currentCountry = {}
      this.previousCountries = []
      this.correctCountries = []
    },
  },
  persist: true,
})
