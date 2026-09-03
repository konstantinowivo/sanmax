<template>
  <section id="presupuesto" style="background:var(--bg-alt);">
    <div class="wrap">
      <div class="section-head reveal" style="max-width:640px;">
        <span class="plate-tag">Presupuesto rápido</span>
        <h2>Pedí tu presupuesto en 4 pasos</h2>
        <p>
          Contanos qué equipo tenés y qué le pasa. Al final vas a ver el mensaje exacto
          que le llega a San Max por WhatsApp, antes de enviarlo.
        </p>
      </div>

      <div class="wizard reveal">
        <div class="wizard-progress">
          <button
            v-for="step in 4"
            :key="step"
            type="button"
            class="wprog-step"
            :class="{ 'is-active': currentStep === step, 'is-done': step < currentStep }"
            :data-step="step"
            :disabled="step > maxReached"
            @click="goToStep(step)"
          >
            <span class="wprog-num">{{ step }}</span>
            <span class="wprog-label">{{ stepLabels[step - 1] }}</span>
          </button>
        </div>

        <div class="wizard-panels">
          <div :class="['wizard-panel', { 'is-active': currentStep === 1 }]" data-panel="1">
            <h3 class="wizard-q">¿Qué equipo necesitás reparar?</h3>
            <div class="option-grid">
              <button
                v-for="equipo in equipos"
                :key="equipo.id"
                type="button"
                class="equip-option"
                :class="{ 'is-selected': state.equipoId === equipo.id }"
                :data-equipo="equipo.id"
                :data-label="equipo.label"
                @click="selectEquipo(equipo)"
              >
                <span class="icon-wrap" v-html="equipo.icon"></span>
                {{ equipo.label }}
              </button>
            </div>
            <div class="wizard-actions wizard-actions--end">
              <button
                type="button"
                class="btn btn-accent"
                id="btn-step1-next"
                :disabled="!state.equipoId"
                @click="nextToStep2"
              >
                Siguiente
              </button>
            </div>
          </div>

          <div :class="['wizard-panel', { 'is-active': currentStep === 2 }]" data-panel="2">
            <h3 class="wizard-q">
              ¿Qué le pasa: <span id="equipo-elegido">{{ state.equipoLabel || 'tu equipo' }}</span>?
            </h3>
            <div class="option-list" id="problema-grid">
              <button
                v-for="problema in currentProblemas"
                :key="problema"
                type="button"
                class="pill"
                :class="{ 'is-selected': state.problema === problema }"
                :data-problema="problema"
                @click="selectProblema(problema)"
              >
                {{ problema }}
              </button>
            </div>
            <div v-if="showOtroInput" class="wizard-otro" id="otro-wrap">
              <label for="otro-input">Contanos brevemente qué le pasa</label>
              <input
                type="text"
                id="otro-input"
                v-model="state.otro"
                placeholder="Ej: hace un ruido raro al arrancar"
              >
            </div>
            <div class="wizard-actions">
              <button type="button" class="btn btn-outline" @click="goToStep(1)">Atrás</button>
              <button
                type="button"
                class="btn btn-accent"
                id="btn-step2-next"
                :disabled="!canAdvanceFromStep2"
                @click="nextToStep3"
              >
                Siguiente
              </button>
            </div>
          </div>

          <div :class="['wizard-panel', { 'is-active': currentStep === 3 }]" data-panel="3">
            <h3 class="wizard-q">Tus datos y el horario que preferís</h3>
            <div class="form-grid">
              <label>
                Nombre y apellido *
                <input type="text" id="f-nombre" v-model="state.nombre" autocomplete="name">
              </label>
              <label>
                Teléfono *
                <input type="tel" id="f-telefono" v-model="state.telefono" autocomplete="tel" placeholder="351 000-0000">
              </label>
              <label class="full">
                Dirección (para coordinar la visita)
                <input type="text" id="f-direccion" v-model="state.direccion" autocomplete="street-address" placeholder="Calle, número y barrio">
              </label>
              <div class="full">
                <span class="form-label-standalone">Horario preferido *</span>
                <div class="pill-group" id="horario-grid">
                  <button
                    v-for="horario in horarios"
                    :key="horario.value"
                    type="button"
                    class="pill"
                    :class="{ 'is-selected': state.horario === horario.value }"
                    :data-horario="horario.value"
                    @click="state.horario = horario.value"
                  >
                    {{ horario.label }}
                  </button>
                </div>
              </div>
              <label class="full">
                Comentario adicional (opcional)
                <textarea id="f-comentario" v-model="state.comentario" rows="3" placeholder="Marca, modelo o cualquier detalle que sirva"></textarea>
              </label>
            </div>
            <div class="wizard-actions">
              <button type="button" class="btn btn-outline" @click="goToStep(2)">Atrás</button>
              <button type="button" class="btn btn-accent" id="btn-step3-next" @click="goToStep4">Ver resumen</button>
            </div>
          </div>

          <div :class="['wizard-panel', { 'is-active': currentStep === 4 }]" data-panel="4">
            <h3 class="wizard-q">Así queda tu mensaje</h3>
            <div class="wa-mock-label">📱 Así se va a ver en tu WhatsApp</div>
            <div class="wa-mock">
              <div class="wa-mock-head">
                <div class="wa-avatar">SM</div>
                <div>
                  <b>San Max</b>
                  <span>Service técnico</span>
                </div>
              </div>
              <div class="wa-mock-body">
                <div class="wa-bubble" id="wa-bubble-text" v-html="formattedMessage"></div>
              </div>
            </div>
            <div class="wizard-actions wizard-actions--summary">
              <button type="button" class="btn-ghost-plain" id="btn-restart" @click="restart">Empezar de nuevo</button>
              <button type="button" class="btn btn-outline" id="btn-edit" @click="goToStep(3)">Editar datos</button>
              <a class="btn btn-accent" id="btn-send-wa" :href="whatsappLink" target="_blank" rel="noopener">
                Enviar presupuesto por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const WA_NUMBER = '5493510000000'
const stepLabels = ['Equipo', 'Problema', 'Datos', 'Resumen']

const equipos = [
  {
    id: 'aire',
    label: 'Aire acondicionado',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="8" rx="2"/><line x1="5" y1="9" x2="19" y2="9"/><line x1="5" y1="11" x2="19" y2="11"/><path d="M9 17c0 2-2 2-2 4"/><path d="M15 17c0 2 2 2 2 4"/></svg>'
  },
  {
    id: 'heladera',
    label: 'Heladera',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="5" y1="10" x2="19" y2="10"/><line x1="8" y1="5" x2="8" y2="7"/><line x1="8" y1="13" x2="8" y2="15"/></svg>'
  },
  {
    id: 'freezer',
    label: 'Freezer',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><line x1="3" y1="11" x2="21" y2="11"/><line x1="17" y1="14" x2="17" y2="16"/></svg>'
  },
  {
    id: 'lavarropas',
    label: 'Lavarropas',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="14" r="5"/><circle cx="8" cy="6.5" r=".6" fill="currentColor" stroke="none"/><circle cx="11" cy="6.5" r=".6" fill="currentColor" stroke="none"/></svg>'
  },
  {
    id: 'secarropas',
    label: 'Secarropas',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="14" r="5"/><path d="M9.5 14a2.5 2.5 0 0 1 5 0"/></svg>'
  },
  {
    id: 'horno',
    label: 'Horno eléctrico',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="17" rx="2"/><rect x="6" y="10" width="12" height="8" rx="1"/><circle cx="7" cy="7" r=".6" fill="currentColor" stroke="none"/><circle cx="10" cy="7" r=".6" fill="currentColor" stroke="none"/></svg>'
  },
  {
    id: 'microondas',
    label: 'Microondas',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><rect x="4" y="7" width="11" height="10" rx="1"/><line x1="18" y1="9" x2="19.5" y2="9"/><line x1="18" y1="12" x2="19.5" y2="12"/></svg>'
  }
]

const PROBLEMS = {
  heladera: ['No enfría', 'No arranca / no prende', 'Hace ruido extraño', 'Pierde agua / gotea', 'El motor no para', 'Otro'],
  freezer: ['No enfría', 'No arranca / no prende', 'Hace ruido extraño', 'Pierde agua / gotea', 'Otro'],
  lavarropas: ['No centrifuga', 'No carga agua', 'No descarga / pierde agua', 'Hace ruido o vibra mucho', 'No arranca', 'Otro'],
  secarropas: ['No calienta', 'No gira el tambor', 'No arranca', 'Hace ruido extraño', 'Otro'],
  horno: ['No calienta', 'No prende', 'El termostato no corta', 'La luz no enciende', 'Otro'],
  microondas: ['No calienta', 'No gira el plato', 'No prende', 'Hace ruido o chispas', 'Otro'],
  aire: ['No enfría', 'No prende', 'Pierde agua', 'Hace ruido', 'Necesita carga de gas', 'Otro']
}

const horarios = [
  { label: 'Mañana', value: 'Mañana (9 a 13 h)' },
  { label: 'Mediodía', value: 'Mediodía (12 a 15 h)' },
  { label: 'Tarde', value: 'Tarde (15 a 18 h)' }
]

const currentStep = ref(1)
const maxReached = ref(1)

const state = ref({
  equipoId: null,
  equipoLabel: '',
  problema: null,
  otro: '',
  nombre: '',
  telefono: '',
  direccion: '',
  horario: null,
  comentario: ''
})

const currentProblemas = computed(() => {
  return state.value.equipoId ? PROBLEMS[state.value.equipoId] || [] : []
})

const showOtroInput = computed(() => state.value.problema === 'Otro')

const canAdvanceFromStep2 = computed(() => {
  if (!state.value.problema) return false
  if (state.value.problema === 'Otro' && !state.value.otro.trim()) return false
  return true
})

const selectEquipo = (equipo) => {
  state.value.equipoId = equipo.id
  state.value.equipoLabel = equipo.label
}

const nextToStep2 = () => {
  currentStep.value = 2
  if (maxReached.value < 2) maxReached.value = 2
}

const nextToStep3 = () => {
  currentStep.value = 3
  if (maxReached.value < 3) maxReached.value = 3
}

const selectProblema = (problema) => {
  state.value.problema = problema
  if (problema !== 'Otro') {
    state.value.otro = ''
  }
}

const goToStep = (n) => {
  if (n > maxReached.value) return
  currentStep.value = n
}

const goToStep4 = () => {
  if (!state.value.nombre || !state.value.telefono || !state.value.horario) {
    alert('Completá nombre, teléfono y horario preferido para continuar.')
    return
  }
  currentStep.value = 4
  if (maxReached.value < 4) maxReached.value = 4
}

const restart = () => {
  state.value = {
    equipoId: null,
    equipoLabel: '',
    problema: null,
    otro: '',
    nombre: '',
    telefono: '',
    direccion: '',
    horario: null,
    comentario: ''
  }
  currentStep.value = 1
  maxReached.value = 1
}

const formattedMessage = computed(() => {
  const problemaFinal = state.value.problema === 'Otro' ? state.value.otro : state.value.problema
  const direccionFinal = state.value.direccion || 'A coordinar'
  const comentarioFinal = state.value.comentario || '-'

  const msg = `Hola San Max! 👋
Quiero pedir un presupuesto:

🔧 Equipo: ${state.value.equipoLabel}
⚠️ Problema: ${problemaFinal}

👤 Nombre: ${state.value.nombre}
📞 Teléfono: ${state.value.telefono}
📍 Dirección: ${direccionFinal}
🕐 Horario preferido: ${state.value.horario}
📝 Comentario: ${comentarioFinal}`

  return msg.replace(/\n/g, '<br>') + '<span class="wa-time">12:04&nbsp;<svg viewBox="0 0 16 11" width="15" height="11" fill="none"><path d="M1 5.5 4 8.5 10 1.5" stroke="#53BDEB" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.5 5.5 8.5 8.5 14.5 1.5" stroke="#53BDEB" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>'
})

const whatsappLink = computed(() => {
  const problemaFinal = state.value.problema === 'Otro' ? state.value.otro : state.value.problema
  const direccionFinal = state.value.direccion || 'A coordinar'
  const comentarioFinal = state.value.comentario || '-'

  const msg = `Hola San Max! 👋
Quiero pedir un presupuesto:

🔧 Equipo: ${state.value.equipoLabel}
⚠️ Problema: ${problemaFinal}

👤 Nombre: ${state.value.nombre}
📞 Teléfono: ${state.value.telefono}
📍 Dirección: ${direccionFinal}
🕐 Horario preferido: ${state.value.horario}
📝 Comentario: ${comentarioFinal}`

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
})
</script>
