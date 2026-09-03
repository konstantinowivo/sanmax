<template>
  <section id="reparaciones">
    <div class="wrap">
      <div class="section-head reveal">
        <span class="plate-tag">Reparaciones</span>
        <h2>¿Qué necesitas que revisemos?</h2>
        <p>
          Cada rubro tiene su propia orden de trabajo. Elegí el equipo y contanos qué le pasa
          por WhatsApp citando el código.
        </p>
      </div>

      <div class="tickets">
        <details
          v-for="(ticket, index) in tickets"
          :key="ticket.id"
          :id="ticket.id"
          class="ticket"
          :class="{ 'ticket-hidden-mobile': !showAllTickets && index >= 3 }"
          :open="ticket.open"
        >
          <summary>
            <div class="ticket-head-left">
              <span class="ticket-code">{{ ticket.code }}</span>
              <h3>{{ ticket.title }}</h3>
            </div>
            <svg class="ticket-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </summary>
          <div class="ticket-body">
            <ul class="ticket-list">
              <li v-for="(service, idx) in ticket.services" :key="idx">
                <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                {{ service.name }}
              </li>
            </ul>
          </div>
        </details>
      </div>

      <div v-if="!showAllTickets && tickets.length > 3" class="show-more-container">
        <button class="btn btn-outline" @click="showAllTickets = true">
          Ver más equipos
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const showAllTickets = ref(false)

const tickets = [
  {
    id: 'tk-ac',
    code: 'AC',
    title: 'Aire acondicionado',
    open: true,
    services: [
      { name: 'Instalación de split' },
      { name: 'Carga de gas' },
      { name: 'Service preventivo / limpieza' },
      { name: 'Reparación de placa electrónica' },
      { name: 'Cambio de motor / turbina' },
      { name: 'Desinstalación y reinstalación' },
      { name: 'Instalación multisplit / VRF' }
    ]
  },
  {
    id: 'tk-heladera',
    code: 'HE',
    title: 'Heladera',
    open: false,
    services: [
      { name: 'Cambio de motocompresor' },
      { name: 'Carga de gas refrigerante' },
      { name: 'Cambio de termostato' },
      { name: 'Cambio de burlete' },
      { name: 'Limpieza de no-frost' },
      { name: 'Reparación de placa electrónica' },
      { name: 'Cambio de resistencia de descongelado' }
    ]
  },
  {
    id: 'tk-freezer',
    code: 'FR',
    title: 'Freezer',
    open: false,
    services: [
      { name: 'Cambio de motocompresor' },
      { name: 'Carga de gas refrigerante' },
      { name: 'Cambio de termostato' },
      { name: 'Cambio de burlete' },
      { name: 'Reparación de placa electrónica' },
      { name: 'Service de exhibidoras / comerciales' }
    ]
  },
  {
    id: 'tk-lavarropas',
    code: 'LR',
    title: 'Lavarropas',
    open: false,
    services: [
      { name: 'Cambio de bomba de agua' },
      { name: 'Cambio de electroválvula' },
      { name: 'Cambio de carbones del motor' },
      { name: 'Cambio de rulemanes' },
      { name: 'Reparación de placa electrónica' },
      { name: 'Destape de filtro y mangueras' },
      { name: 'Cambio de correa' },
      { name: 'Cambio de amortiguadores' }
    ]
  },
  {
    id: 'tk-secarropas',
    code: 'SR',
    title: 'Secarropas',
    open: false,
    services: [
      { name: 'Cambio de motor / freno' },
      { name: 'Cambio de resistencia' },
      { name: 'Cambio de termostato' },
      { name: 'Reparación de centrífugo' },
      { name: 'Reparación de secarropas a gas' },
      { name: 'Limpieza de filtros y conductos' }
    ]
  },
  {
    id: 'tk-horno',
    code: 'HO',
    title: 'Horno eléctrico',
    open: false,
    services: [
      { name: 'Cambio de resistencias (superior / inferior / grill)' },
      { name: 'Cambio de termostato' },
      { name: 'Cambio de turbina del horno' },
      { name: 'Cambio de burlete del horno' },
      { name: 'Cambio de luz interior' },
      { name: 'Reparación de placa electrónica' },
      { name: 'Reparación de panel táctil' }
    ]
  },
  {
    id: 'tk-microondas',
    code: 'MW',
    title: 'Microondas',
    open: false,
    services: [
      { name: 'Cambio de magnetrón' },
      { name: 'Cambio de fusible' },
      { name: 'Cambio de transformador de alta tensión' },
      { name: 'Reparación de plato giratorio' },
      { name: 'Cambio de panel táctil' },
      { name: 'Limpieza interior' }
    ]
  }
]
</script>
