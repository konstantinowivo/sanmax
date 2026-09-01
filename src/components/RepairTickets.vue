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
          v-for="ticket in tickets"
          :key="ticket.id"
          :id="ticket.id"
          class="ticket"
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
                <span class="num">{{ service.code }}</span>{{ service.name }}
              </li>
            </ul>
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup>
const tickets = [
  {
    id: 'tk-ac',
    code: 'AC',
    title: 'Aire acondicionado',
    open: true,
    services: [
      { code: 'AC—01', name: 'Instalación de split' },
      { code: 'AC—02', name: 'Carga de gas' },
      { code: 'AC—03', name: 'Service preventivo / limpieza' },
      { code: 'AC—04', name: 'Reparación de placa electrónica' },
      { code: 'AC—05', name: 'Cambio de motor / turbina' },
      { code: 'AC—06', name: 'Desinstalación y reinstalación' },
      { code: 'AC—07', name: 'Instalación multisplit / VRF' }
    ]
  },
  {
    id: 'tk-heladera',
    code: 'HE',
    title: 'Heladera',
    open: false,
    services: [
      { code: 'HE—01', name: 'Cambio de motocompresor' },
      { code: 'HE—02', name: 'Carga de gas refrigerante' },
      { code: 'HE—03', name: 'Cambio de termostato' },
      { code: 'HE—04', name: 'Cambio de burlete' },
      { code: 'HE—05', name: 'Limpieza de no-frost' },
      { code: 'HE—06', name: 'Reparación de placa electrónica' },
      { code: 'HE—07', name: 'Cambio de resistencia de descongelado' }
    ]
  },
  {
    id: 'tk-freezer',
    code: 'FR',
    title: 'Freezer',
    open: false,
    services: [
      { code: 'FR—01', name: 'Cambio de motocompresor' },
      { code: 'FR—02', name: 'Carga de gas refrigerante' },
      { code: 'FR—03', name: 'Cambio de termostato' },
      { code: 'FR—04', name: 'Cambio de burlete' },
      { code: 'FR—05', name: 'Reparación de placa electrónica' },
      { code: 'FR—06', name: 'Service de exhibidoras / comerciales' }
    ]
  },
  {
    id: 'tk-lavarropas',
    code: 'LR',
    title: 'Lavarropas',
    open: false,
    services: [
      { code: 'LR—01', name: 'Cambio de bomba de agua' },
      { code: 'LR—02', name: 'Cambio de electroválvula' },
      { code: 'LR—03', name: 'Cambio de carbones del motor' },
      { code: 'LR—04', name: 'Cambio de rulemanes' },
      { code: 'LR—05', name: 'Reparación de placa electrónica' },
      { code: 'LR—06', name: 'Destape de filtro y mangueras' },
      { code: 'LR—07', name: 'Cambio de correa' },
      { code: 'LR—08', name: 'Cambio de amortiguadores' }
    ]
  },
  {
    id: 'tk-secarropas',
    code: 'SR',
    title: 'Secarropas',
    open: false,
    services: [
      { code: 'SR—01', name: 'Cambio de motor / freno' },
      { code: 'SR—02', name: 'Cambio de resistencia' },
      { code: 'SR—03', name: 'Cambio de termostato' },
      { code: 'SR—04', name: 'Reparación de centrífugo' },
      { code: 'SR—05', name: 'Reparación de secarropas a gas' },
      { code: 'SR—06', name: 'Limpieza de filtros y conductos' }
    ]
  },
  {
    id: 'tk-horno',
    code: 'HO',
    title: 'Horno eléctrico',
    open: false,
    services: [
      { code: 'HO—01', name: 'Cambio de resistencias (superior / inferior / grill)' },
      { code: 'HO—02', name: 'Cambio de termostato' },
      { code: 'HO—03', name: 'Cambio de turbina del horno' },
      { code: 'HO—04', name: 'Cambio de burlete del horno' },
      { code: 'HO—05', name: 'Cambio de luz interior' },
      { code: 'HO—06', name: 'Reparación de placa electrónica' },
      { code: 'HO—07', name: 'Reparación de panel táctil' }
    ]
  },
  {
    id: 'tk-microondas',
    code: 'MW',
    title: 'Microondas',
    open: false,
    services: [
      { code: 'MW—01', name: 'Cambio de magnetrón' },
      { code: 'MW—02', name: 'Cambio de fusible' },
      { code: 'MW—03', name: 'Cambio de transformador de alta tensión' },
      { code: 'MW—04', name: 'Reparación de plato giratorio' },
      { code: 'MW—05', name: 'Cambio de panel táctil' },
      { code: 'MW—06', name: 'Limpieza interior' }
    ]
  }
]
</script>
