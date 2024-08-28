import { defineStore } from 'pinia'
import axios from 'axios'
import Cookies from 'js-cookie'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loggedIn: false,
    user: null as User | null,
  }),
  actions: {
    async login(credentials: { username: string; password: string }) {
      try {
        const { data } = await axios.post('/api/auth/login', credentials)
        this.loggedIn = true
        this.user = data.user
        Cookies.set('auth_token', data.token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
      } catch (error) {
        console.error('Login failed:', error)
        throw error
      }
    },
    async logout() {
      try {
        await axios.post('/api/auth/logout')
        this.loggedIn = false
        this.user = null
        Cookies.remove('auth_token')
        delete axios.defaults.headers.common['Authorization']
      } catch (error) {
        console.error('Logout failed:', error)
        throw error
      }
    },
    async fetchUser() {
      try {
        const { data } = await axios.get('/api/auth/user')
        this.loggedIn = true
        this.user = data
      } catch (error) {
        console.error('Fetching user failed:', error)
        this.loggedIn = false
        this.user = null
      }
    },
  },
})