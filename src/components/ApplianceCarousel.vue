<template>
  <section id="carrusel">
    <div class="wrap">
      <div class="section-head reveal">
        <h2>Reparamos tu electrodoméstico</h2>
        <p>
          Tocá una categoría para ver el detalle del service, o desplazate para conocer
          todos los rubros que atendemos.
        </p>
      </div>
    </div>

    <div class="carousel-container">
      <div class="carousel-stage">
        <button
          v-for="(appliance, index) in appliances"
          :key="appliance.id"
          class="appliance-card"
          :class="getCardClass(index)"
          :style="getCardStyle(index)"
          :data-target="appliance.target"
          @click="handleCardClick(index, appliance.target)"
        >
          <div class="card-image">
            <img :src="appliance.image" :alt="appliance.name" />
          </div>
          <div class="card-content">
            <h3>{{ appliance.name }}</h3>
            <p>{{ appliance.services }} servicios</p>
          </div>
        </button>
      </div>

      <div class="carousel-controls">
        <button class="carousel-btn carousel-btn-prev" @click="prev">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button class="carousel-btn carousel-btn-next" @click="next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <div class="carousel-dots">
        <button
          v-for="(appliance, index) in appliances"
          :key="'dot-' + index"
          class="carousel-dot"
          :class="{ active: index === currentIndex }"
          @click="goTo(index)"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import aireAcondicionado from '@/assets/aire_acondicionado.png'
import heladera from '@/assets/heladera.png'
import freezer from '@/assets/freezer.png'
import lavarropas from '@/assets/lavarropas.png'
import hornoElectrico from '@/assets/horno_electrico.png'
import microondas from '@/assets/microondas.png'

const currentIndex = ref(0)

const appliances = [
  {
    id: 'ac',
    name: 'Aire acondicionado',
    services: 7,
    target: 'tk-ac',
    image: aireAcondicionado,
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="8" rx="2"/><line x1="5" y1="9" x2="19" y2="9"/><line x1="5" y1="11" x2="19" y2="11"/><path d="M9 17c0 2-2 2-2 4"/><path d="M15 17c0 2 2 2 2 4"/></svg>'
  },
  {
    id: 'heladera',
    name: 'Heladera',
    services: 7,
    target: 'tk-heladera',
    image: heladera,
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="5" y1="10" x2="19" y2="10"/><line x1="8" y1="5" x2="8" y2="7"/><line x1="8" y1="13" x2="8" y2="15"/></svg>'
  },
  {
    id: 'freezer',
    name: 'Freezer',
    services: 6,
    target: 'tk-freezer',
    image: freezer,
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><line x1="3" y1="11" x2="21" y2="11"/><line x1="17" y1="14" x2="17" y2="16"/></svg>'
  },
  {
    id: 'lavarropas',
    name: 'Lavarropas',
    services: 8,
    target: 'tk-lavarropas',
    image: lavarropas,
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="14" r="5"/><circle cx="8" cy="6.5" r=".6" fill="currentColor" stroke="none"/><circle cx="11" cy="6.5" r=".6" fill="currentColor" stroke="none"/></svg>'
  },
  {
    id: 'secarropas',
    name: 'Secarropas',
    services: 6,
    target: 'tk-secarropas',
    image: lavarropas,
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="14" r="5"/><path d="M9.5 14a2.5 2.5 0 0 1 5 0"/></svg>'
  },
  {
    id: 'horno',
    name: 'Horno eléctrico',
    services: 7,
    target: 'tk-horno',
    image: hornoElectrico,
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="17" rx="2"/><rect x="6" y="10" width="12" height="8" rx="1"/><circle cx="7" cy="7" r=".6" fill="currentColor" stroke="none"/><circle cx="10" cy="7" r=".6" fill="currentColor" stroke="none"/></svg>'
  },
  {
    id: 'microondas',
    name: 'Microondas',
    services: 6,
    target: 'tk-microondas',
    image: microondas,
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><rect x="4" y="7" width="11" height="10" rx="1"/><line x1="18" y1="9" x2="19.5" y2="9"/><line x1="18" y1="12" x2="19.5" y2="12"/></svg>'
  }
]

const scrollToTicket = (targetId) => {
  const target = document.getElementById(targetId)
  if (!target) return

  document.querySelectorAll('.ticket').forEach((t) => {
    if (t.id !== targetId) t.removeAttribute('open')
  })

  target.setAttribute('open', '')
  target.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

const getCardClass = (index) => {
  const total = appliances.length
  let diff = index - currentIndex.value

  // Normalizar para loop infinito
  if (diff > total / 2) {
    diff -= total
  } else if (diff < -total / 2) {
    diff += total
  }

  if (diff === 0) return 'is-active'
  if (diff === -1) return 'is-prev'
  if (diff === 1) return 'is-next'
  if (diff < -1) return 'is-hidden-left'
  return 'is-hidden-right'
}

const getCardStyle = (index) => {
  const total = appliances.length
  let diff = index - currentIndex.value

  // Normalizar para loop infinito
  if (diff > total / 2) {
    diff -= total
  } else if (diff < -total / 2) {
    diff += total
  }

  // Responsive card spacing
  const isMobile = window.innerWidth <= 768
  const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024
  const cardSpacing = isMobile ? 300 : isTablet ? 340 : 416

  const translateZ = diff === 0 ? 0 : -200 - Math.abs(diff) * 100
  const opacity = diff === 0 ? 1 : diff === -1 || diff === 1 ? 0.6 : 0.3
  const scale = diff === 0 ? 1 : diff === -1 || diff === 1 ? 0.85 : 0.7

  return {
    transform: `translateX(${diff * cardSpacing}px) translateZ(${translateZ}px) scale(${scale})`,
    opacity: opacity,
    zIndex: 100 - Math.abs(diff)
  }
}

const prev = () => {
  currentIndex.value = currentIndex.value === 0
    ? appliances.length - 1
    : currentIndex.value - 1
}

const next = () => {
  currentIndex.value = currentIndex.value === appliances.length - 1
    ? 0
    : currentIndex.value + 1
}

const goTo = (index) => {
  currentIndex.value = index
}

const handleCardClick = (index, targetId) => {
  if (index === currentIndex.value) {
    scrollToTicket(targetId)
  } else {
    goTo(index)
  }
}
</script>

<style scoped>
.section-head {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 30px;
}

.section-head .plate-tag {
  display: inline-block;
  background: #2196F3;
  color: #fff;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
}

.section-head h2 {
  font-size: 36px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
  line-height: 1.2;
}

.section-head p {
  font-size: 16px;
  color: #ccc;
  line-height: 1.6;
}

.carousel-container {
  position: relative;
  width: 100%;
  padding: 80px 0;
  overflow: hidden;
}

.carousel-stage {
  position: relative;
  width: 100%;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1500px;
  transform-style: preserve-3d;
}

.appliance-card {
  position: absolute;
  width: 390px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 0;
  cursor: pointer;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0,0,0,.15);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  backface-visibility: visible;
  overflow: hidden;
}

.appliance-card.is-active {
  cursor: pointer;
}

.appliance-card.is-active:hover {
  border-color: #2196F3;
  box-shadow: 0 15px 50px rgba(33,150,243,.3);
}

.appliance-card.is-prev,
.appliance-card.is-next {
  cursor: pointer;
}

.appliance-card.is-hidden-left,
.appliance-card.is-hidden-right {
  pointer-events: none;
}

.card-image {
  width: 100%;
  height: 260px;
  overflow: hidden;
  background: #f5f5f5;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.appliance-card.is-active:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 26px 40px 40px;
}

.appliance-card h3 {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #1a202c;
}

.appliance-card p {
  font-size: 19px;
  color: #718096;
}

/* Controls */
.carousel-controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  pointer-events: none;
  padding: 0 20px;
  z-index: 200;
}

.carousel-btn {
  pointer-events: all;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 10px rgba(0,0,0,.1);
}

.carousel-btn:hover {
  background: #2196F3;
  border-color: #2196F3;
  color: #fff;
  box-shadow: 0 6px 20px rgba(33,150,243,.3);
}

.carousel-btn svg {
  width: 24px;
  height: 24px;
}

/* Dots */
.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
}

.carousel-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #cbd5e0;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  padding: 0;
}

.carousel-dot:hover {
  background: #a0aec0;
}

.carousel-dot.active {
  background: #2196F3;
  width: 30px;
  border-radius: 5px;
}

/* Mobile-first optimizations */
@media (max-width: 768px) {
  .carousel-container {
    padding: 40px 0;
  }

  .carousel-stage {
    height: 420px;
  }

  .appliance-card {
    width: 280px;
  }

  .card-image {
    height: 180px;
  }

  .card-content {
    padding: 20px 24px 28px;
  }

  .appliance-card h3 {
    font-size: 20px;
    margin-bottom: 8px;
  }

  .appliance-card p {
    font-size: 15px;
  }

  /* Botones táctiles más grandes */
  .carousel-btn {
    width: 44px;
    height: 44px;
  }

  .carousel-btn svg {
    width: 20px;
    height: 20px;
  }

  /* Dots más grandes para táctil */
  .carousel-dot {
    width: 12px;
    height: 12px;
  }

  .carousel-dot.active {
    width: 32px;
  }

  .carousel-controls {
    padding: 0 12px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .appliance-card {
    width: 320px;
  }

  .card-image {
    height: 220px;
  }

  .carousel-stage {
    height: 480px;
  }

  .card-content {
    padding: 24px 32px 36px;
  }

  .appliance-card h3 {
    font-size: 22px;
  }

  .appliance-card p {
    font-size: 17px;
  }
}
</style>
