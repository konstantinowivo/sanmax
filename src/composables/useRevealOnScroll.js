import { onMounted, onUnmounted } from 'vue'

export function useRevealOnScroll() {
  let observer = null

  onMounted(() => {
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.15 })

      const elements = document.querySelectorAll('.reveal')
      elements.forEach((el) => observer.observe(el))
    } else {
      // Fallback para navegadores sin soporte
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('is-visible')
      })
    }
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
}
