export default defineNuxtRouteMiddleware((): void => {
  const { isOpen, toggle } = useMobileNav()
  if (isOpen.value) {
    toggle()
  }
})
