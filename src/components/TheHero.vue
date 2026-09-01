<template>
  <section id="inicio" class="relative overflow-hidden bg-gradient-to-br from-wa-teal-dark to-wa-teal h-screen flex items-center">
    <!-- Imagen de fondo lateral derecho -->
    <div class="hidden lg:block absolute top-0 right-0 w-[40%] h-full">
      <img
        src="/src/assets/hielo.avif"
        alt="Hielo"
        class="w-full h-full object-cover"
      />
      <!-- Logo SANMAX superpuesto -->
      <div class="absolute inset-0 flex items-center justify-center">
        <img
          src="/src/assets/img_sanmax.png"
          alt="SANMAX"
          class="max-w-[90%] max-h-[75%] object-contain animate-fade-in-right"
        />
      </div>
    </div>

    <!-- Electrodomésticos en la división -->
    <div class="hidden lg:flex absolute top-0 left-[60%] h-full items-center z-20 -translate-x-1/2">
      <div class="flex flex-col gap-6">
        <!-- Heladera -->
        <div class="bg-white/90 backdrop-blur-sm p-3.5 rounded-xl shadow-2xl transform hover:scale-110 transition-all duration-300 animate-fade-in-right" style="animation-delay: 0.2s">
          <svg viewBox="0 0 64 64" class="w-11 h-11 text-wa-blue" fill="currentColor">
            <rect x="16" y="8" width="32" height="48" rx="3" fill="currentColor" opacity="0.2"/>
            <line x1="16" y1="32" x2="48" y2="32" stroke="currentColor" stroke-width="2"/>
            <line x1="22" y1="16" x2="22" y2="24" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            <line x1="22" y1="38" x2="22" y2="46" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </div>
        <!-- Lavarropas -->
        <div class="bg-white/90 backdrop-blur-sm p-3.5 rounded-xl shadow-2xl transform hover:scale-110 transition-all duration-300 animate-fade-in-right" style="animation-delay: 0.4s">
          <svg viewBox="0 0 64 64" class="w-11 h-11 text-wa-blue" fill="currentColor">
            <rect x="12" y="12" width="40" height="40" rx="4" fill="currentColor" opacity="0.2"/>
            <circle cx="32" cy="36" r="12" stroke="currentColor" stroke-width="2" fill="none"/>
            <circle cx="32" cy="36" r="7" stroke="currentColor" stroke-width="2" fill="none" stroke-dasharray="2 3"/>
            <circle cx="20" cy="18" r="2" fill="currentColor"/>
            <circle cx="28" cy="18" r="2" fill="currentColor"/>
          </svg>
        </div>
        <!-- Aire Acondicionado -->
        <div class="bg-white/90 backdrop-blur-sm p-3.5 rounded-xl shadow-2xl transform hover:scale-110 transition-all duration-300 animate-fade-in-right" style="animation-delay: 0.6s">
          <svg viewBox="0 0 64 64" class="w-11 h-11 text-wa-blue" fill="currentColor">
            <rect x="10" y="18" width="44" height="16" rx="3" fill="currentColor" opacity="0.2"/>
            <line x1="16" y1="24" x2="48" y2="24" stroke="currentColor" stroke-width="2"/>
            <line x1="16" y1="28" x2="48" y2="28" stroke="currentColor" stroke-width="2"/>
            <path d="M32 38 Q 22 44, 22 52" stroke="currentColor" stroke-width="2" fill="none" stroke-dasharray="2 4"/>
            <path d="M38 38 Q 42 44, 42 52" stroke="currentColor" stroke-width="2" fill="none" stroke-dasharray="2 4"/>
          </svg>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-12">

        <!-- Columna izquierda: Contenido -->
        <div class="w-full lg:w-[60%] text-white lg:py-8 text-center lg:text-left">
          <span class="inline-block bg-wa-blue text-white px-5 py-2 rounded-full text-base font-semibold mb-4">
            Servicio Técnico
          </span>

          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
            SANMAX
          </h1>

          <p class="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-5 text-wa-blue-light">
            Reparación y ventas de lavarropas, heladeras, aires acondicionados & también repuestos
          </p>

          <p class="text-lg sm:text-xl text-gray-100 mb-6 max-w-2xl mx-auto lg:mx-0">
            Diagnóstico claro, repuestos con garantía y service a domicilio para heladeras,
            lavarropas, aires acondicionados y más. Le contamos qué tiene el equipo antes
            de tocarlo — sin sorpresas en el presupuesto.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#presupuesto"
              class="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-wa-teal-dark font-semibold text-lg rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="4" y="3" width="16" height="18" rx="2"/>
                <line x1="8" y1="8" x2="16" y2="8"/>
                <line x1="8" y1="12" x2="16" y2="12"/>
                <line x1="8" y1="16" x2="12" y2="16"/>
              </svg>
              Pedir presupuesto
            </a>

            <a
              href="https://wa.me/5493510000000"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center justify-center gap-2 px-10 py-4 bg-wa-green text-white font-semibold text-lg rounded-full hover:bg-wa-green-hover transition-all transform hover:scale-105 shadow-lg"
            >
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.09c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.12.11-1.81-.11-.42-.13-.95-.3-1.65-.6-2.9-1.26-4.8-4.18-4.94-4.37-.14-.19-1.19-1.58-1.19-3.02s.75-2.14 1.02-2.43c.26-.29.57-.36.76-.36h.55c.18 0 .42-.02.64.5.24.57.81 1.98.88 2.13.07.14.11.32.02.51-.09.19-.14.3-.28.46-.14.16-.29.36-.42.49-.14.14-.28.29-.12.57.16.29.71 1.18 1.53 1.92 1.05.95 1.94 1.24 2.22 1.38.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.28.36-.23.6-.14.24.09 1.55.74 1.82.87.27.14.45.2.51.32.07.11.07.66-.17 1.35Z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        <!-- Columna derecha: Espacio vacío en desktop, oculto en móvil -->
        <div class="hidden lg:block lg:w-[40%]"></div>
      </div>
    </div>
  </section>
</template>
