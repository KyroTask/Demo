import { defineStore } from 'pinia'

export const useProjectStore = defineStore('projects', {
  state: () => ({
    projects: [
      { id: 1, name: 'Startup MVP', description: 'Core features for launch', color: '#6366f1', status: 'active', created_at: '2026-01-10T00:00:00Z' },
      { id: 2, name: 'Marathon Training', description: 'Prep for the city marathon', color: '#10b981', status: 'active', created_at: '2026-02-01T00:00:00Z' },
      { id: 3, name: 'Learn Spanish', description: 'B2 Level certification', color: '#f59e0b', status: 'active', created_at: '2026-01-15T00:00:00Z' }
    ],
    loading: false,
    error: null,
    lastFetched: null
  }),
  actions: {
    async fetchProjects() {
      this.lastFetched = Date.now()
    },
    async createProject(project) {
      const newProject = { ...project, id: Date.now(), created_at: new Date().toISOString() }
      this.projects.push(newProject)
      return newProject
    },
    async updateProject(id, project) {
      const index = this.projects.findIndex(p => p.id === id)
      if (index !== -1) {
        this.projects[index] = { ...this.projects[index], ...project }
        return this.projects[index]
      }
      throw new Error('Project not found')
    },
    async deleteProject(id) {
      this.projects = this.projects.filter(p => p.id !== id)
    }
  }
})
