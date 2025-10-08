import { defineNuxtPlugin } from '#app'

type RevealBinding = {
  rootMargin?: string
  threshold?: number
  once?: boolean
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    beforeMount(el: HTMLElement) {
      // ensure starting (hidden) state
      el.classList.add('reveal')
    },

    mounted(el: HTMLElement, binding: { value?: RevealBinding }) {
      const opts = binding.value || {}
      const once = opts.once ?? true
      const delay = Number(opts.delay ?? el.dataset.revealDelay ?? 0)
      const direction =
        opts.direction ??
        (el.dataset.revealDirection as RevealBinding['direction']) ??
        'up'

      // add direction class if not already present
      if (!el.classList.contains(`reveal-${direction}`)) {
        el.classList.add(`reveal-${direction}`)
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (delay) {
                el.style.transitionDelay = `${delay}ms`
              }
              el.classList.add('is-visible')
              if (once) observer.unobserve(el)
            } else if (!once) {
              // allow re-hide for repeat animations
              el.classList.remove('is-visible')
              el.style.transitionDelay = ''
            }
          })
        },
        {
          root: null,
          rootMargin: opts.rootMargin ?? '0px 0px -10% 0px', // start a bit early
          threshold: opts.threshold ?? 0.1,
        }
      )

      observer.observe(el)
    },
  })
})
