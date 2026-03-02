import { defineStore } from 'pinia'

export const useCalendarStore = defineStore('calendar', {
  state: () => ({
    events: [
      { id: 1, title: 'Team Sync', start_time: new Date().toISOString(), end_time: new Date(Date.now() + 3600000).toISOString(), type: 'meeting' },
      { id: 2, title: 'Deep Work Block', start_time: new Date(Date.now() + 7200000).toISOString(), end_time: new Date(Date.now() + 14400000).toISOString(), type: 'focus' }
    ],
    loading: false,
    error: null,
    lastFetched: null
  }),
  getters: {
    getEventsForDay: (state) => (date) => {
      const targetDate = new Date(date).toISOString().split('T')[0]
      return state.events.filter(e => {
        // Handle both start_time and 'date' formats just in case
        const eventDateStr = e.date ? new Date(e.date).toISOString().split('T')[0] : 
                             e.start_time ? new Date(e.start_time).toISOString().split('T')[0] : null
        return eventDateStr === targetDate
      })
    }
  },
  actions: {
    async fetchEvents(startStr, endStr) {
      // Just return everything for demo
      this.lastFetched = Date.now()
    },
    async createEvent(event) {
      const newEvent = { ...event, id: Date.now() }
      this.events.push(newEvent)
      return newEvent
    },
    async updateEvent(id, event) {
      const index = this.events.findIndex(e => e.id === id)
      if (index !== -1) {
        this.events[index] = { ...this.events[index], ...event }
        return this.events[index]
      }
      throw new Error('Event not found')
    },
    async deleteEvent(id) {
      this.events = this.events.filter(e => e.id !== id)
    }
  }
})
