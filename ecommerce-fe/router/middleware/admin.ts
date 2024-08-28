export default defineNuxtRouteMiddleware((to, from) => {
    const { $auth } = useNuxtApp()
    if (!$auth.loggedIn || $auth.user.role !== 'admin') {
      return navigateTo('/')
    }
  })