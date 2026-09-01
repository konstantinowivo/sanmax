<template>
  <header class="nav">
    <div class="wrap">
      <a href="#top" class="logo">
        <span class="word">SANMAX</span>
      </a>

      <input
        type="checkbox"
        id="nav-toggle"
        class="nav-toggle"
        v-model="menuOpen"
      >

      <nav class="nav-links">
        <a href="#servicios" @click="closeMenu">SERVICIOS</a>
        <a href="#reparaciones" @click="closeMenu">¿QUÉ REPARAMOS?</a>
        <a href="#como-trabajamos" @click="closeMenu">¿CÓMO TRABAJAMOS?</a>
        <a href="#contacto" @click="closeMenu">CONTACTO</a>
      </nav>

      <div class="nav-right">
        <a class="btn btn-outline" href="#presupuesto" @click="closeMenu">Presupuesto</a>
        <a
          class="btn btn-whatsapp"
          href="https://wa.me/5493510000000"
          target="_blank"
          rel="noopener"
          @click="closeMenu"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.09c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.12.11-1.81-.11-.42-.13-.95-.3-1.65-.6-2.9-1.26-4.8-4.18-4.94-4.37-.14-.19-1.19-1.58-1.19-3.02s.75-2.14 1.02-2.43c.26-.29.57-.36.76-.36h.55c.18 0 .42-.02.64.5.24.57.81 1.98.88 2.13.07.14.11.32.02.51-.09.19-.14.3-.28.46-.14.16-.29.36-.42.49-.14.14-.28.29-.12.57.16.29.71 1.18 1.53 1.92 1.05.95 1.94 1.24 2.22 1.38.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.28.36-.23.6-.14.24.09 1.55.74 1.82.87.27.14.45.2.51.32.07.11.07.66-.17 1.35Z"/>
          </svg>
          WhatsApp
        </a>
      </div>

      <label
        for="nav-toggle"
        class="nav-toggle-label"
        aria-label="Menú"
        :aria-expanded="menuOpen"
      >
        <span></span><span></span><span></span>
      </label>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const closeMenu = () => {
  menuOpen.value = false
}
</script>
