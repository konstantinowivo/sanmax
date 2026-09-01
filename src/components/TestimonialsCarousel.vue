<template>
  <section id="testimonios" style="background:var(--bg-alt);">
    <div class="wrap">
      <div class="section-head reveal">
        <span class="plate-tag">Testimonios</span>
        <h2>Testimonios</h2>
        <p>Algunas reseñas de quienes ya confiaron en San Max.</p>
      </div>
      <div class="swiper testimonios-swiper">
        <div class="swiper-wrapper">
          <div v-for="(testi, idx) in testimonials" :key="idx" class="swiper-slide">
            <div class="testi-card reveal">
              <div class="testi-stars">★★★★★</div>
              <p class="testi-text">{{ testi.text }}</p>
              <div class="testi-author">
                <b>{{ testi.author }}</b>
                <span>{{ testi.location }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const testimonials = [
  {
    text: 'Vinieron el mismo día y me arreglaron la heladera en menos de una hora. Precio justo y muy prolijos con la instalación.',
    author: 'Marisa G.',
    location: 'Nueva Córdoba · Heladera'
  },
  {
    text: 'Le cargaron gas al aire acondicionado y quedó como nuevo. Me explicaron todo antes de arrancar, sin sorpresas en el presupuesto.',
    author: 'Fernando R.',
    location: 'Alta Córdoba · Aire acondicionado'
  },
  {
    text: 'El lavarropas no centrifugaba y pensé que había que comprar uno nuevo. Lo arreglaron en el momento y con garantía por escrito.',
    author: 'Lucía P.',
    location: 'Cerro de las Rosas · Lavarropas'
  }
]

onMounted(() => {
  new Swiper('.testimonios-swiper', {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 18,
    loop: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true
    },
    pagination: {
      el: '.testimonios-swiper .swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.testimonios-swiper .swiper-button-next',
      prevEl: '.testimonios-swiper .swiper-button-prev'
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 18
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 18
      }
    }
  })
})
</script>
