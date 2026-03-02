import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const token = ref('demo-token')
  const user = ref({
    id: 1,
    username: 'demouser',
    first_name: 'Demo Person',
    last_name: '',
    language_code: 'en',
    photo_url: '',
    auth_date: Date.now() / 1000
  })
  
  const loading = ref(false)
  const error = ref(null)
  const theme = ref(localStorage.getItem('theme') || 'light')

  const isAuthenticated = computed(() => true)

  function setTheme(newTheme) {
    theme.value = newTheme
    localStorage.setItem('theme', newTheme)
    applyTheme()
  }

  function applyTheme() {
    const isDark = theme.value === 'dark' ||
      (theme.value === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (theme.value === 'system') {
      applyTheme()
    }
  })

  // Mock endpoints just return success
  async function loginWithTelegram(initData) {
    return { token: token.value, user: user.value }
  }

  async function loginWithWidget(user_data) {
    return { token: token.value, user: user.value }
  }

  async function loginWithFirebase(idToken, linkAccount = false) {
    return { token: token.value, user: user.value }
  }

  async function fetchCurrentUser(force = false) {
    return user.value
  }

  function logout() {
    // In demo mode, logout just reloads the app or goes to landing
    window.location.href = '/'
  }

  async function loginDev() {
    return { token: token.value, user: user.value }
  }

  return {
    token,
    user,
    loading,
    error,
    theme,
    isAuthenticated,
    loginWithTelegram,
    loginWithWidget,
    loginWithFirebase,
    loginDev,
    fetchCurrentUser,
    logout,
    setTheme,
    applyTheme
  }
})
