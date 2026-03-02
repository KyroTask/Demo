import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [
      { id: 1, title: 'Draft investor update', status: 'pending', priority: 'high', description: 'Q1 metrics look great', is_daily: false, project_id: 1, due_date: new Date().toISOString() },
      { id: 2, title: 'Review PRs', status: 'completed', priority: 'medium', description: 'Frontend refactor PRs', is_daily: false, project_id: 1, due_date: new Date().toISOString() },
      { id: 3, title: '10km run', status: 'pending', priority: 'high', description: 'Zone 2 heart rate', is_daily: true, project_id: 2 },
      { id: 4, title: 'Duolingo Spanish Lesson', status: 'completed', priority: 'low', description: 'Maintain 365 day streak', is_daily: true, project_id: 3 }
    ],
    loading: false,
    error: null,
    lastFetched: null
  }),
  actions: {
    async fetchTasks() {
      this.lastFetched = Date.now()
    },
    async createTask(task) {
      const newTask = {
        ...task,
        id: Date.now(),
        status: 'pending',
        created_at: new Date().toISOString(),
        due_date: task.due_date ? new Date(task.due_date).toISOString() : new Date().toISOString()
      }
      this.tasks.push(newTask)
      return newTask
    },
    async updateTask(id, task) {
      const index = this.tasks.findIndex(t => t.id === id)
      if (index !== -1) {
        this.tasks[index] = { ...this.tasks[index], ...task }
        return this.tasks[index]
      }
      throw new Error('Task not found')
    },
    async deleteTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id)
    },
    async toggleTaskStatus(task) {
      const newStatus = task.status === 'completed' ? 'pending' : 'completed'
      return this.updateTask(task.id, { status: newStatus })
    }
  }
})
