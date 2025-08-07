import { defineStore } from 'pinia'
import countries from '../utils/countries'
import { formatCountryName } from '../utils/format'

export const useGameStore = defineStore('game', {
  state: () => ({
    status: 'paused', // 'playing', 'paused'
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
      let newCountry = countries[Math.floor(Math.random() * countries.length)]

      if (newCountry.name === this.currentCountry.name) {
        this.newRound()
        return
      }

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
      this.currentCountry = null
      this.previousCountries = []
      this.correctCountries = []
    },
  },
  persist: true,
})
