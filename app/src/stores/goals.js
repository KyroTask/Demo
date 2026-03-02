import { defineStore } from 'pinia'

export const useGoalStore = defineStore('goals', {
  state: () => ({
    goals: [
      {
        id: 1,
        title: 'Launch Product V2.0',
        description: 'Complete the redesign and launch the massive update to the public',
        status: 'active',
        target_date: '2026-12-31T00:00:00Z',
        project_id: 1,
        milestones: [
          { id: 1, goal_id: 1, title: 'Finish UI Mockups', status: 'completed' },
          { id: 2, goal_id: 1, title: 'Implement Frontend', status: 'pending' },
          { id: 3, goal_id: 1, title: 'Beta Testing', status: 'pending' }
        ]
      }
    ],
    loading: false,
    error: null,
    lastFetched: null
  }),
  actions: {
    async fetchGoals() {
      this.lastFetched = Date.now()
    },
    async fetchGoal(idOrSlug) {
      const goal = this.goals.find(g => g.id === Number(idOrSlug) || g.slug === idOrSlug)
      if (goal) return goal
      throw new Error('Goal not found')
    },
    async createGoal(goal) {
      const newGoal = { ...goal, id: Date.now(), milestones: [] }
      this.goals.push(newGoal)
      return newGoal
    },
    async updateGoal(id, updates) {
      const index = this.goals.findIndex(g => g.id === id)
      if (index !== -1) {
        this.goals[index] = { ...this.goals[index], ...updates }
        return this.goals[index]
      }
      throw new Error('Goal not found')
    },
    async deleteGoal(id) {
      this.goals = this.goals.filter(g => g.id !== id)
    },
    async createMilestone(milestone) {
      const goal = this.goals.find(g => g.id === milestone.goal_id)
      if (goal) {
        const newMilestone = { ...milestone, id: Date.now(), status: 'pending' }
        goal.milestones.push(newMilestone)
        return newMilestone
      }
      throw new Error('Goal not found')
    },
    async updateMilestone(id, updates) {
      for (const goal of this.goals) {
        const index = goal.milestones.findIndex(m => m.id === id)
        if (index !== -1) {
          goal.milestones[index] = { ...goal.milestones[index], ...updates }
          return goal.milestones[index]
        }
      }
      throw new Error('Milestone not found')
    },
    async deleteMilestone(id) {
      for (const goal of this.goals) {
        goal.milestones = goal.milestones.filter(m => m.id !== id)
      }
    }
  }
})
