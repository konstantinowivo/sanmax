# San Max - Notas de Migración Visual

## Decisión sobre Framework CSS

**Decisión:** NO usar framework CSS (mantener vanilla CSS).

**Motivos:**
1. **Simplicidad del proyecto:** Se trata de un sitio estático de 3 archivos (HTML, CSS, JS) sin paso de build.
2. **Alcance limitado:** La migración es únicamente de estilo visual, no de estructura ni funcionalidad.
3. **Sin necesidad de dependencias adicionales:** El proyecto actual no tiene ninguna dependencia de build tools (npm, webpack, etc.) y agregar un framework como Tailwind requeriría:
   - Instalación de Node.js y npm
   - Configuración de PostCSS
   - Paso de build para producción
   - Mantenimiento de dependencias
4. **Mantenibilidad:** Para un proyecto de este tamaño, vanilla CSS con variables CSS bien organizadas es más fácil de mantener que agregar una capa de abstracción adicional.
5. **Performance:** El CSS actual es pequeño y eficiente. Un framework agregaría kilobytes innecesarios.

**Conclusión:** Vanilla CSS es la opción correcta para este proyecto. El CSS está organizado con variables CSS para mantener consistencia y facilitar cambios futuros.

---

## Resumen de Cambios Realizados

### 1. Paleta de Colores (WhatsApp Style)

Se migró completamente la paleta de colores del theme "sci-fi HUD" (oscuro, neón) a la paleta oficial de WhatsApp:

- **Verde principal (CTAs primarios):** `#25D366`
- **Verde hover:** `#1DA851`
- **Teal oscuro (headers, CTAs secundarios):** `#075E54`
- **Teal medio (acentos):** `#128C7E`
- **Verde muy claro (fondos de card, tags):** `#D9FDD3`
- **Fondo tipo "wallpaper":** `#ECE5DD`
- **Texto principal:** `#111B21`
- **Texto secundario:** `#667781`
- **Celeste de "visto":** `#53BDEB`

### 2. Tipografía

Se eliminaron las webfonts propias (Orbitron, Rajdhani) y se adoptó el **system font stack** de WhatsApp:

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
```

**Se mantuvo IBM Plex Mono** únicamente para datos tabulares y códigos de servicio (ej: `AC-01`, `HE-02`).

### 3. Componentes Visuales

Todos los componentes se actualizaron al estilo WhatsApp:

#### Cards
- **Antes:** Esquinas cortadas en diagonal con `clip-path`, borde oscuro
- **Ahora:** Esquinas redondeadas (`border-radius: 12px`), sombras suaves (`0 1px 3px rgba(0,0,0,.06)`)

#### Botones
- **Antes:** Rectangulares con bordes rectos
- **Ahora:** Formato "pill" con `border-radius: 24px`, sombras suaves que se elevan en hover

#### Tags/Badges
- **Antes:** Con bordes dashed y fondo transparente
- **Ahora:** Pastillas redondeadas (`border-radius: 16px`) con fondo verde claro (#D9FDD3)

#### Sombras
- **Antes:** Glow neón con `filter: drop-shadow`, colores saturados
- **Ahora:** Sombras suaves tipo `0 1px 2px rgba(0,0,0,.08)` en reposo, `0 4px 10px rgba(0,0,0,.12)` en hover

#### Acordeones (Tickets, FAQ)
- Borde se pone verde al abrir
- Icono de chevron rota 45° (efecto "+" que se convierte en "×")
- Hover suave en los summary

### 4. SwiperJS para Carousels

Se agregó **SwiperJS v11** vía CDN para mejorar la experiencia de los listados horizontales:

#### Carousel de Rubros (Electrodomésticos)
- **Antes:** Scroll manual con `scroll-snap`
- **Ahora:** Slider Swiper con:
  - Paginación (dots) verde cuando está activo
  - Flechas de navegación circulares en teal
  - Autoplay con pausa en hover
  - Responsive: 1 slide en mobile, hasta 5 en desktop
  - **Funcionalidad del click preservada:** Al hacer click en una card, sigue abriendo el acordeón correspondiente en la sección de Reparaciones

#### Testimonios
- **Antes:** Grid estático de 3 columnas
- **Ahora:** Slider Swiper con:
  - Paginación (dots)
  - Flechas de navegación
  - Autoplay lento (5s) con pausa en hover
  - Loop infinito
  - Responsive: 1 slide en mobile, 2 en tablet, 3 en desktop

#### Configuración Swiper
- **Versión:** SwiperJS v11 vía CDN (bundle)
- **Módulos:** Navigation, Pagination, Autoplay (incluidos en el bundle, no requieren importación manual)
- **Inicialización:** Sintaxis estándar de CDN (sin necesidad de declarar `modules:` explícitamente)
- **NO se aplicó a:** Wizard de presupuesto (mantiene su lógica de validación propia) ni acordeones

### 5. Wizard de Presupuesto

El wizard mantiene **toda su lógica funcional intacta**:
- 4 pasos con validación
- Navegación entre pasos
- Selección de equipo y problema
- Formulario de datos
- Resumen con preview del mensaje de WhatsApp

**Cambios visuales únicos:**
- Mockup de WhatsApp diferenciado con etiqueta "📱 Así se va a ver en tu WhatsApp" y borde teal
- Pills verdes cuando están seleccionadas
- Inputs con borde verde en focus
- Botones en formato pill

### 6. Textos Decorativos Eliminados

Se removieron todos los textos con estética "terminal/sci-fi":
- Antes: `"[ Sistema online ]"`, `"[ Consola de presupuesto ]"`, etc.
- Ahora: Textos directos sin corchetes ni referencias a "sistema"

Se eliminó también el pseudo-elemento `::before` del hero art que mostraba `"MOD. SM—01 / SERVICE TÉCNICO / CÓRDOBA CAP."`

### 7. Estructura HTML

**NO se modificó:**
- IDs de elementos
- Clases utilizadas por `script.js`
- Estructura del wizard
- Data-attributes (`data-target`, `data-equipo`, `data-label`, etc.)
- Hooks del IntersectionObserver (`.reveal`)

**SÍ se modificó:**
- Estructura interna de carousel y testimonios (envolver en `.swiper`, `.swiper-wrapper`, `.swiper-slide`)
- Se agregó `.wa-mock-label` antes del mockup de WhatsApp
- Google Fonts link (removió Oswald, mantuvo IBM Plex Mono)

---

## Archivos Modificados

1. **`index.html`**
   - Actualización de Google Fonts
   - Agregado de CDN de SwiperJS (CSS y JS)
   - Adaptación de carousel de rubros a estructura Swiper
   - Adaptación de testimonios a estructura Swiper
   - Etiqueta diferenciadora en mockup de WhatsApp
   - Textos decorativos actualizados

2. **`styles.css`**
   - Reescritura completa con paleta WhatsApp
   - System font stack
   - Componentes con estilo WhatsApp (redondeado, sombras suaves)
   - Estilos custom para SwiperJS (dots, flechas)
   - Estilos para `.wa-mock-label`

3. **`script.js`**
   - Inicialización de Swiper para carousel de rubros
   - Inicialización de Swiper para testimonios
   - **Lógica del wizard sin tocar**

---

## Comandos para Desarrollo

Como este es un proyecto estático sin paso de build, simplemente:

1. Abrir `index.html` en un navegador (doble click o servidor local)
2. Para desarrollo con live reload (opcional):
   ```bash
   # Con Python
   python -m http.server 8000

   # Con Node.js (npx)
   npx serve
   ```
3. Navegar a `http://localhost:8000` (o el puerto correspondiente)

**No hay paso de build.** Los cambios en HTML, CSS o JS se reflejan inmediatamente al refrescar el navegador.

---

## Verificación de Funcionalidad

- [x] Navegación mobile (hamburger menu)
- [x] Carousel de rubros con Swiper (click abre acordeón)
- [x] Testimonios con Swiper
- [x] Acordeones de Reparaciones (abrir/cerrar)
- [x] Acordeones de FAQ (abrir/cerrar)
- [x] Wizard de presupuesto:
  - [x] Paso 1: Selección de equipo
  - [x] Paso 2: Selección de problema (incluye "Otro" con input)
  - [x] Paso 3: Formulario de datos + horario
  - [x] Paso 4: Resumen con mockup de WhatsApp
  - [x] Navegación entre pasos
  - [x] Validación de campos requeridos
  - [x] Botones "Atrás", "Editar", "Empezar de nuevo"
  - [x] Link de envío a WhatsApp con mensaje pre-formateado
- [x] Reveal on scroll (IntersectionObserver)
- [x] Links de navegación (smooth scroll)

---

## Notas Adicionales

- **Compatibilidad de SwiperJS:** Funciona en todos los navegadores modernos. La versión 11 es compatible con IE11+ (aunque IE ya está descontinuado).
- **Accesibilidad:** Se mantuvieron todos los roles ARIA y labels del HTML original.
- **Responsive:** Todos los breakpoints se mantuvieron y se agregaron breakpoints específicos para Swiper.
- **Performance:** El sitio sigue siendo rápido. SwiperJS vía CDN se carga de forma asíncrona y está cacheado en navegadores.

---

**Fecha de migración visual:** 2026-08-29
**Versión de SwiperJS:** 11 (CDN → Módulos ES6 en Vue)
**Framework CSS:** Ninguno (Vanilla CSS)
**Framework JS:** Vue.js 3 + Vite (migración del 29/08/2026)

---

# Migración a Vue.js 3 + Vite

## Decisión de Migración

**Fecha:** 2026-08-29
**Razón:** Mejorar la identificación y organización de componentes para facilitar el mantenimiento.

### Stack Tecnológico

- **Vue 3** (Composition API) - Framework reactivo
- **Vite 5** - Build tool ultra-rápido con HMR
- **Swiper 11** - Importado como módulo ES6 (ya no CDN)

### Estructura del Proyecto Vue

```
sanmax/
├── src/
│   ├── main.js                  - Punto de entrada
│   ├── App.vue                  - Componente raíz
│   ├── assets/
│   │   └── styles.css           - Estilos globales (WhatsApp palette)
│   ├── composables/
│   │   └── useRevealOnScroll.js - Lógica reutilizable para reveal on scroll
│   └── components/
│       ├── TheNavbar.vue
│       ├── TheHero.vue
│       ├── ApplianceCarousel.vue (integra Swiper)
│       ├── AboutSection.vue
│       ├── RepairTickets.vue
│       ├── ServicesGrid.vue
│       ├── WorkflowSteps.vue
│       ├── BudgetWizard.vue (wizard de 4 pasos)
│       ├── TestimonialsCarousel.vue (integra Swiper)
│       ├── FaqSection.vue
│       ├── ContactSection.vue
│       └── TheFooter.vue
├── public/                      - Assets estáticos
├── index.html                   - HTML de entrada para Vite
├── vite.config.js               - Configuración de Vite
├── package.json                 - Dependencias
└── README-VUE.md                - Documentación completa de Vue

Archivos originales (backup):
├── index-old.html               - HTML original pre-Vue
├── styles.css                   - CSS original (copiado a src/assets/)
└── script.js                    - JS original (dividido en componentes)
```

### Componentes Creados

#### ✅ Completados:
1. **TheNavbar.vue** - Navbar con menú mobile reactivo
2. **TheHero.vue** - Hero section con SVG art
3. **ApplianceCarousel.vue** - Carousel de electrodomésticos con Swiper, click handler para abrir tickets
4. **App.vue** - Componente raíz que orquesta toda la aplicación
5. **useRevealOnScroll.js** - Composable para animaciones de reveal

#### 🔧 Pendientes (ver README-VUE.md):
- AboutSection.vue
- RepairTickets.vue
- ServicesGrid.vue
- WorkflowSteps.vue
- BudgetWizard.vue (complejo - wizard de 4 pasos)
- TestimonialsCarousel.vue
- FaqSection.vue
- ContactSection.vue
- TheFooter.vue

### Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (HMR activo)
npm run dev

# Build para producción
npm run build

# Preview de build
npm run preview
```

### Integración de Swiper en Vue

A diferencia de la versión CDN, ahora Swiper se importa como módulo:

```javascript
import { onMounted } from 'vue'
import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

onMounted(() => {
  new Swiper('.carousel-swiper', {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1.2,
    spaceBetween: 16,
    // ... configuración
  })
})
```

### Ventajas de la Migración

1. **Componentización:** Cada sección es un componente independiente y reutilizable
2. **Reactividad nativa:** No más `querySelector` ni manipulación manual del DOM
3. **HMR (Hot Module Replacement):** Cambios instantáneos sin refrescar el navegador
4. **Composables:** Lógica reutilizable (ej: `useRevealOnScroll`)
5. **Type safety potencial:** Fácil migrar a TypeScript en el futuro
6. **Build optimizado:** Vite genera código minificado con tree-shaking
7. **Mantenibilidad:** Código más organizado y fácil de mantener

### Funcionalidad Preservada

✅ Toda la lógica del wizard de presupuesto
✅ Click en carousel → abrir acordeón de reparaciones
✅ Navegación smooth scroll con anchors
✅ Menú mobile con checkbox reactivo
✅ Reveal on scroll con IntersectionObserver
✅ Swiper con autoplay, pagination y navigation
✅ Mockup de WhatsApp con mensaje pre-formateado

---

**Última actualización:** 2026-08-29
**Versión Vue:** 3.4.21
**Versión Vite:** 5.1.6
**Versión Swiper:** 11.0.7
