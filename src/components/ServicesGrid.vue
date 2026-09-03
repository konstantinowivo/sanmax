<template>
  <section id="servicios" style="background:var(--bg-alt);">
    <div class="wrap">
      <div class="section-head reveal">
        <span class="plate-tag">Servicios generales</span>
        <h2>¿Qué servicios prestamos?</h2>
        <p>Además de reparar equipo por equipo, ofrecemos estos servicios generales.</p>
      </div>

      <div class="service-grid">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="service-card reveal"
          :class="{ 'service-hidden-mobile': !showAllServices && index >= 3 }"
        >
          <div class="service-image">
            <img :src="service.image" :alt="service.title" />
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>

      <div v-if="!showAllServices && services.length > 3" class="show-more-container">
        <button class="btn btn-outline" @click="showAllServices = true">
          Ver más servicios
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ventaImg from '@/assets/sanmax_venta.png'
import diagnosticoImg from '@/assets/sanmax_diagnostico.png'
import domicilioImg from '@/assets/sanmax_domicilio.png'
import tallerImg from '@/assets/sanmax_reparacion_taller.png'
import repuestosImg from '@/assets/sanmax_repuestos_originales.png'
import mantenimientoImg from '@/assets/sanmax_manteniiento.png'

const showAllServices = ref(false)

const services = [
  {
    title: 'Venta de electrodomésticos',
    description: 'Línea blanca nueva y usada, revisada por nuestros técnicos y con garantía.',
    image: ventaImg
  },
  {
    title: 'Diagnóstico sin cargo',
    description: 'Revisamos el equipo y te contamos qué tiene antes de presupuestar nada.',
    image: diagnosticoImg
  },
  {
    title: 'Service a domicilio',
    description: 'Vamos hasta tu casa o local en toda Córdoba capital, con turno coordinado.',
    image: domicilioImg
  },
  {
    title: 'Reparación en taller',
    description: 'Para equipos que necesitan un service más completo o de banco.',
    image: tallerImg
  },
  {
    title: 'Repuestos originales',
    description: 'Cambiamos piezas originales o equivalentes homologados, con garantía escrita.',
    image: repuestosImg
  },
  {
    title: 'Mantenimiento preventivo',
    description: 'Service periódico para que el equipo no llegue a romperse en temporada alta.',
    image: mantenimientoImg
  }
]
</script>
