import { defineStore } from 'pinia'

export const useAnalyticsStore = defineStore('analytics', {
  state: () => ({
    analytics: {
      tasks: { total_completed: 45, completed_today: 3, completed_week: 12, total_pending: 10 },
      pomodoros: {
        total_sessions: 24,
        total_focus_minutes: 600,
        focus_minutes_today: 120,
        focus_minutes_week: 360,
        recent_records: [
          { date: new Date().toISOString(), focus_minutes: 120, completed_sessions: 4 },
          { date: new Date(Date.now() - 86400000).toISOString(), focus_minutes: 90, completed_sessions: 3 }
        ],
        current_phase: 'Deep Work',
        current_level: 5,
        total_sessions_completed: 24,
        active_days: [
          new Date().toISOString(),
          new Date(Date.now() - 86400000).toISOString(),
          new Date(Date.now() - 86400000 * 3).toISOString()
        ]
      },
      project_stats: [
        { project_id: 1, total_focus_minutes: 300 },
        { project_id: 2, total_focus_minutes: 150 },
        { project_id: 3, total_focus_minutes: 150 }
      ],
      habit_distribution: [
        { phase: 'identity', total_logs: 15 },
        { phase: 'process', total_logs: 25 },
        { phase: 'outcome', total_logs: 10 }
      ],
      habits: {
        highest_streak: 12,
        total_logs: 50,
        active_habits: 4
      },
      goals: {
        completed_goals: 2,
        active_goals: 3
      }
    },
    loading: false,
    error: null
  }),

  actions: {
    async fetchAnalytics() {
      return this.analytics
    }
  }
})
