# San Max - Migración a Vue.js 3 + Vite

## ✅ Estado del Proyecto

### Archivos Creados (Base del Proyecto)

✅ **Configuración:**
- `package.json` - Dependencias Vue 3 + Vite + Swiper
- `vite.config.js` - Configuración de Vite con alias @
- `.gitignore` - Para node_modules y dist

✅ **Estructura:**
```
sanmax/
├── src/
│   ├── main.js                    ✅ Punto de entrada Vue
│   ├── App.vue                    ✅ Componente raíz
│   ├── assets/
│   │   └── styles.css             ✅ Migrado desde raíz
│   ├── composables/
│   │   └── useRevealOnScroll.js   ✅ Composable reutilizable
│   └── components/
│       ├── TheNavbar.vue          ✅ Navbar con menu mobile
│       ├── TheHero.vue            ✅ Hero con SVG art
│       ├── ApplianceCarousel.vue  ✅ Carousel con Swiper
│       ├── BudgetWizard.vue       🔧 NECESITA CREARSE
│       ├── AboutSection.vue       🔧 NECESITA CREARSE
│       ├── RepairTickets.vue      🔧 NECESITA CREARSE
│       ├── ServicesGrid.vue       🔧 NECESITA CREARSE
│       ├── WorkflowSteps.vue      🔧 NECESITA CREARSE
│       ├── TestimonialsCarousel.vue  🔧 NECESITA CREARSE
│       ├── FaqSection.vue         🔧 NECESITA CREARSE
│       ├── ContactSection.vue     🔧 NECESITA CREARSE
│       └── TheFooter.vue          🔧 NECESITA CREARSE
├── public/                        (vacío por ahora)
├── index.html                     ✅ HTML de entrada para Vite
├── index-old.html                 ✅ Backup del HTML original
├── styles.css                     (original, ahora en src/assets/)
└── script.js                      (original, ahora dividido en componentes)
```

---

## 🚀 Instalación y Ejecución

### 1. Instalar Dependencias

```bash
cd C:\Users\PC\Desktop\sanmax
npm install
```

Esto instalará:
- **vue** ^3.4.21
- **swiper** ^11.0.7
- **@vitejs/plugin-vue** ^5.0.4 (devDep)
- **vite** ^5.1.6 (devDep)

### 2. Ejecutar en Desarrollo

```bash
npm run dev
```

Vite levantará el servidor en `http://localhost:5173` (o el puerto que esté disponible) con **Hot Module Replacement (HMR)**.

### 3. Build para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en `dist/`.

### 4. Preview de Build

```bash
npm run preview
```

Para ver la versión de producción localmente.

---

## 📦 Componentes Pendientes de Crear

Usa el archivo `index-old.html` como referencia para crear cada componente.

### 1. **AboutSection.vue**

```vue
<template>
  <section id="nosotros" style="background:var(--bg-alt);">
    <div class="wrap">
      <div class="about-grid">
        <div class="about-copy reveal">
          <span class="plate-tag" style="margin-bottom:18px;">Sobre nosotros</span>
          <h2 style="font-size:clamp(26px,4vw,36px); font-weight:700; margin:16px 0 20px;">
            Oficio, repuestos originales y trato directo
          </h2>
          <p>Somos un service técnico de Córdoba especializado en línea blanca y climatización...</p>
          <p>Atendemos a domicilio y en taller...</p>
        </div>
        <div class="stat-cards reveal">
          <div class="stat-card">
            <b>+15</b>
            <span>Años de trayectoria</span>
          </div>
          <div class="stat-card">
            <b>+3.200</b>
            <span>Clientes satisfechos</span>
          </div>
          <div class="stat-card">
            <b>+20</b>
            <span>Marcas atendidas</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
```

### 2. **RepairTickets.vue**

- Usar acordeones `<details>` con `v-for` sobre un array de tickets
- Mantener los IDs (`tk-ac`, `tk-heladera`, etc.) para que el scroll desde ApplianceCarousel funcione

### 3. **ServicesGrid.vue**

- Grid de 6 cards con iconos SVG
- Efecto hover con bordes verdes

### 4. **WorkflowSteps.vue**

- 5 pasos numerados con círculos verdes
- Línea de progreso horizontal (desktop) desaparece en mobile

### 5. **BudgetWizard.vue** (COMPLEJO)

Ver el `script.js` original (líneas 35-203). El componente ya está parcialmente esbozado arriba, pero necesita:

- State reactivo con `ref()` para `equipoId`, `problema`, `nombre`, `telefono`, etc.
- 4 pasos con navegación controlada
- Validación en cada paso
- Mockup de WhatsApp en paso 4
- Link dinámico a WhatsApp con el mensaje pre-formateado

### 6. **TestimonialsCarousel.vue**

```vue
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

const testimonials = [
  { text: '...', author: 'Marisa G.', location: 'Nueva Córdoba · Heladera' },
  { text: '...', author: 'Fernando R.', location: 'Alta Córdoba · Aire acondicionado' },
  { text: '...', author: 'Lucía P.', location: 'Cerro de las Rosas · Lavarropas' }
]

onMounted(() => {
  new Swiper('.testimonios-swiper', {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 18,
    loop: true,
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
      640: { slidesPerView: 2, spaceBetween: 18 },
      900: { slidesPerView: 3, spaceBetween: 18 }
    }
  })
})
</script>
```

### 7. **FaqSection.vue**

- Acordeones `<details>` con `v-for` sobre un array de preguntas
- Mantener clases `.faq-item`, `.faq-chevron`, etc.

### 8. **ContactSection.vue**

- Sección de contacto con info y mapa de Google Maps embebido

### 9. **TheFooter.vue**

- Footer con grid de 3 columnas
- Mapa embebido de Google
- Links de navegación

---

## 🔧 Integración con Swiper en Vue

Ya implementado en `ApplianceCarousel.vue`, pero para referencia:

```javascript
import { onMounted } from 'vue'
import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

onMounted(() => {
  new Swiper('.mi-swiper', {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 16,
    // ... config
  })
})
```

**Importante:** Importar los módulos y los estilos CSS de Swiper en cada componente que lo use.

---

## 📝 Composables Disponibles

### `useRevealOnScroll()`

Ya creado en `src/composables/useRevealOnScroll.js`. Usarlo en `App.vue` para que aplique a toda la página, o en componentes individuales si prefieres control granular.

```javascript
import { useRevealOnScroll } from './composables/useRevealOnScroll'

useRevealOnScroll()
```

---

## 🎨 Estilos

Los estilos están en `src/assets/styles.css` (copia del `styles.css` original con paleta WhatsApp).

Se importan globalmente en `src/main.js`:

```javascript
import './assets/styles.css'
```

No requiere módulos CSS ni Scoped styles, ya que el diseño actual es global.

---

## ✅ Ventajas de la Migración a Vue

### Antes (Vanilla HTML/JS):
- 1 archivo HTML monolítico (770+ líneas)
- 1 archivo JS mezclando toda la lógica
- Difícil de mantener y escalar

### Ahora (Vue 3):
- **Componentes separados** → Fácil identificación de cada sección
- **Reactividad nativa** → No más `querySelector` manual
- **Composables reutilizables** → Lógica compartida (ej: `useRevealOnScroll`)
- **HMR (Hot Module Replacement)** → Cambios instantáneos sin refresh
- **Build optimizado** → Vite genera código minificado y tree-shaken

---

## 🚨 Importante: Mantener Funcionalidad

Al crear cada componente, asegúrate de:

1. **IDs preservados:** `#inicio`, `#presupuesto`, `#reparaciones`, etc. (para navegación con anchors)
2. **Clases preservadas:** `.reveal`, `.wizard`, `.pill`, etc. (para estilos)
3. **Data-attributes:** `data-target`, `data-equipo`, `data-label` (para lógica de click)
4. **Validación del wizard:** Mantener la lógica de validación de cada paso

---

## 📚 Recursos

- [Vue 3 Docs](https://vuejs.org/)
- [Vite Docs](https://vitejs.dev/)
- [Swiper Vue Integration](https://swiperjs.com/vue)
- [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)

---

## 🎯 Próximos Pasos

1. ✅ Instalar dependencias: `npm install`
2. ✅ Verificar que el servidor dev corre: `npm run dev`
3. 🔧 Crear los componentes faltantes uno por uno (ver lista arriba)
4. 🔧 Probar cada componente en el navegador
5. ✅ Build para producción: `npm run build`
6. ✅ Deployar desde la carpeta `dist/`

---

**Nota:** Los archivos originales (`index.html` → `index-old.html`, `styles.css`, `script.js`) se mantienen como backup y referencia.
