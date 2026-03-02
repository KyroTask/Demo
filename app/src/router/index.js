import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import Landing from '../pages/Landing.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/app',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('../pages/Dashboard.vue')
      },
      {
        path: 'projects',
        name: 'Projects',
        component: () => import('../pages/Projects.vue')
      },
      {
        path: 'projects/:slug',
        name: 'ProjectDetail',
        component: () => import('../pages/ProjectDetail.vue')
      },
      {
        path: 'tasks',
        name: 'Tasks',
        component: () => import('../pages/Tasks.vue')
      },
      {
        path: 'tasks/:slug',
        name: 'TaskDetail',
        component: () => import('../pages/TaskDetail.vue')
      },
      {
        path: 'goals',
        name: 'Goals',
        component: () => import('../pages/Goals.vue')
      },
      {
        path: 'goals/:slug',
        name: 'GoalDetail',
        component: () => import('../pages/GoalDetail.vue')
      },
      {
        path: 'habits',
        name: 'Habits',
        component: () => import('../pages/Habits.vue')
      },
      {
        path: 'pomodoro',
        name: 'Pomodoro',
        component: () => import('../pages/Pomodoro.vue')
      },
      {
        path: 'calendar',
        name: 'Calendar',
        component: () => import('../pages/Calendar.vue')
      },
      {
        path: 'activity',
        name: 'Activity',
        component: () => import('../pages/Activity.vue')
      },
      {
        path: 'analytics',
        name: 'Analytics',
        component: () => import('../pages/Analytics.vue')
      },
      {
        path: 'settings',
        name: 'Settings',
        component: () => import('../pages/Settings.vue')
      }
    ]
  },
  // Catchall redirect to landing
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Completely removed the auth guard for the Demo site

export default router
