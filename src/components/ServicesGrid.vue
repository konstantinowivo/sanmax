<template>
  <section id="servicios" style="background:var(--bg-alt);">
    <div class="wrap">
      <div class="section-head reveal">
        <span class="plate-tag">Servicios generales</span>
        <h2>¿Qué servicios prestamos?</h2>
        <p>Además de reparar equipo por equipo, ofrecemos estos servicios generales.</p>
      </div>

      <div class="service-grid">
        <div v-for="service in services" :key="service.title" class="service-card reveal">
          <span class="icon-wrap" v-html="service.icon"></span>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Venta de electrodomésticos',
    description: 'Línea blanca nueva y usada, revisada por nuestros técnicos y con garantía.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12 12 2h8v8L10 20a2 2 0 0 1-2.83 0l-5.17-5.17A2 2 0 0 1 2 13.17V12Z"/><circle cx="14.5" cy="7.5" r="1.5"/></svg>'
  },
  {
    title: 'Diagnóstico sin cargo',
    description: 'Revisamos el equipo y te contamos qué tiene antes de presupuestar nada.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/><path d="M9 13l2 2 4-4"/></svg>'
  },
  {
    title: 'Service a domicilio',
    description: 'Vamos hasta tu casa o local en toda Córdoba capital, con turno coordinado.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11 12 4l9 7"/><path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"/></svg>'
  },
  {
    title: 'Reparación en taller',
    description: 'Para equipos que necesitan un service más completo o de banco.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.5 3.8L3 16.3V21h4.7l6.2-6.2a4 4 0 0 0 3.8-5.5l-2.6 2.6-2-2Z"/></svg>'
  },
  {
    title: 'Repuestos originales',
    description: 'Cambiamos piezas originales o equivalentes homologados, con garantía escrita.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V21a2 2 0 0 1-4 0v-.09A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 0 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.55V3a2 2 0 0 1 4 0v.09a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.55 1H21a2 2 0 0 1 0 4h-.09a1.7 1.7 0 0 0-1.55 1Z"/></svg>'
  },
  {
    title: 'Mantenimiento preventivo',
    description: 'Service periódico para que el equipo no llegue a romperse en temporada alta.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5Z"/><path d="M9 12l2 2 4-4"/></svg>'
  }
]
</script>
