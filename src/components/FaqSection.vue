<template>
  <section id="preguntas-frecuentes">
    <div class="wrap">
      <div class="section-head reveal">
        <span class="plate-tag">Preguntas frecuentes</span>
        <h2>Preguntas frecuentes</h2>
        <p>Lo que más nos preguntan antes de coordinar un service.</p>
      </div>
      <div class="faq-list">
        <details v-for="faq in faqs" :key="faq.question" class="faq-item">
          <summary>
            <h3>{{ faq.question }}</h3>
            <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </summary>
          <div class="faq-body">
            <p>{{ faq.answer }}</p>
          </div>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup>
const faqs = [
  {
    question: '¿El diagnóstico tiene costo?',
    answer: 'No, el diagnóstico es sin cargo. Revisamos el equipo y recién ahí te pasamos el presupuesto — vos decidís si avanzar con la reparación.'
  },
  {
    question: '¿Trabajan a domicilio?',
    answer: 'Sí, vamos a tu casa o local en toda Córdoba capital. Algunos equipos, según lo que tengan, pueden requerir retiro y reparación en taller.'
  },
  {
    question: '¿Qué garantía tienen las reparaciones?',
    answer: 'Toda reparación sale con garantía por escrito, tanto sobre la mano de obra como sobre el repuesto que se cambió.'
  },
  {
    question: '¿Con qué marcas trabajan?',
    answer: 'Trabajamos con la mayoría de las marcas que se venden en el país. Si tenés dudas sobre la tuya, consultanos por WhatsApp.'
  },
  {
    question: '¿Cuánto tardan en darme el presupuesto?',
    answer: 'Con el presupuesto online lo tenés al instante. Si preferís que pasemos a ver el equipo primero, coordinamos la visita y te lo damos en el momento.'
  },
  {
    question: '¿Cómo pago la reparación?',
    answer: 'Podés pagar en efectivo, transferencia o con tarjeta al momento de la entrega del equipo o al finalizar el service a domicilio.'
  }
]
</script>
