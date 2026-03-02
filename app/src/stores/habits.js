import { defineStore } from 'pinia'

export const useHabitStore = defineStore('habits', {
  state: () => ({
    habits: [
      { id: 1, name: 'Read 20 pages', description: 'Morning reading', frequency: 'daily', color: '#10b981', phase: 'identity', logs: [] },
      { id: 2, name: 'Workout', description: 'Gym or run', frequency: 'daily', color: '#6366f1', phase: 'process', logs: [{ log_date: new Date().toISOString() }] },
      { id: 3, name: 'Meditate 10m', description: 'Clear mind', frequency: 'daily', color: '#8b5cf6', phase: 'outcome', logs: [] }
    ],
    loading: false,
    error: null,
    lastFetched: null
  }),
  actions: {
    async fetchHabits() {
      this.lastFetched = Date.now()
    },
    async createHabit(habit) {
      const newHabit = { ...habit, id: Date.now(), logs: [] }
      this.habits.push(newHabit)
      return newHabit
    },
    async logHabit(id, date) {
      const habit = this.habits.find(h => h.id === id)
      if (habit) {
        const d = date.includes('T') ? date : `${date}T00:00:00Z`
        const newLog = { id: Date.now(), habit_id: id, log_date: d, created_at: new Date().toISOString() }
        habit.logs.push(newLog)
        return newLog
      }
      throw new Error('Habit not found')
    },
    async deleteHabit(id) {
      this.habits = this.habits.filter(h => h.id !== id)
    },
    async updateHabit(id, habit) {
      const index = this.habits.findIndex(h => h.id === id)
      if (index !== -1) {
        this.habits[index] = { ...this.habits[index], ...habit }
        return this.habits[index]
      }
      throw new Error('Habit not found')
    }
  }
})
