import { defineStore } from 'pinia'

export const usePomodoroStore = defineStore('pomodoro', {
  state: () => ({
    status: {
      is_active: false,
      start_time: null,
      accumulated_seconds: 0,
      current_phase: 'normal',
      daily_focus_seconds: 3600 * 2,
      daily_level: 3,
      can_start_today: true,
      target_cycles: 4,
      required_work_duration: 25,
      required_break_duration: 5,
      requires_project: false
    },
    loading: false,
    error: null
  }),
  actions: {
    async fetchStatus() {
      // Return static state
      return this.status
    },
    async startSession(projectId = null) {
      this.status.is_active = true
      this.status.start_time = new Date().toISOString()
      this.status.current_phase = 'focus'
      return this.status
    },
    async pauseSession() {
      this.status.is_active = false
      return this.status
    },
    async resumeSession() {
      this.status.is_active = true
      this.status.start_time = new Date().toISOString()
      return this.status
    },
    async stopSession() {
      this.status.is_active = false
      this.status.start_time = null
      this.status.current_phase = 'normal'
      return this.status
    },
    async completeCycle() {
      this.status.is_active = false
      this.status.start_time = null
      this.status.daily_level += 1
      this.status.current_phase = 'normal'
      return this.status
    }
  }
})
