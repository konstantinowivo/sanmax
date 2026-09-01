<template>
  <section id="como-trabajamos">
    <div class="wrap">
      <div class="section-head reveal">
        <span class="plate-tag">Nuestro proceso</span>
        <h2>¿Cómo trabajamos?</h2>
        <p>Del primer mensaje a la entrega del equipo, así es una reparación con San Max.</p>
      </div>

      <div class="steps">
        <div v-for="step in steps" :key="step.num" class="step reveal">
          <span class="step-num">{{ step.num }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    num: '01',
    title: 'Nos escribís',
    description: 'Contanos qué le pasa al equipo por WhatsApp. Mandá fotos o un video si podés.'
  },
  {
    num: '02',
    title: 'Diagnóstico',
    description: 'Coordinamos una visita a domicilio o el retiro del equipo, sin cargo.'
  },
  {
    num: '03',
    title: 'Presupuesto',
    description: 'Te pasamos el presupuesto detallado antes de tocar el equipo.'
  },
  {
    num: '04',
    title: 'Reparación',
    description: 'Reparamos con repuestos originales y probamos el equipo funcionando.'
  },
  {
    num: '05',
    title: 'Entrega y garantía',
    description: 'Te lo entregamos andando, con garantía por escrito sobre el service.'
  }
]
</script>
