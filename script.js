// mobile menu autoclose on link click
document.querySelectorAll('.nav-links a').forEach(function(a){
  a.addEventListener('click', function(){
    var t = document.getElementById('nav-toggle');
    if(t) t.checked = false;
  });
});

// carousel card -> open matching ticket + scroll
document.querySelectorAll('.appliance-card').forEach(function(card){
  card.addEventListener('click', function(){
    var id = card.getAttribute('data-target');
    var target = document.getElementById(id);
    if(!target) return;
    document.querySelectorAll('.ticket').forEach(function(t){ if(t!==target) t.removeAttribute('open'); });
    target.setAttribute('open','');
    target.scrollIntoView({behavior:'smooth', block:'center'});
  });
});

// reveal on scroll
if('IntersectionObserver' in window){
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {threshold:0.15});
  document.querySelectorAll('.reveal').forEach(function(el){ obs.observe(el); });
} else {
  document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('is-visible'); });
}
// ============ PRESUPUESTO ONLINE (wizard) ============
(function(){
  var wizard = document.querySelector('.wizard');
  if(!wizard) return;

  var PROBLEMS = {
    heladera: ['No enfría', 'No arranca / no prende', 'Hace ruido extraño', 'Pierde agua / gotea', 'El motor no para', 'Otro'],
    freezer: ['No enfría', 'No arranca / no prende', 'Hace ruido extraño', 'Pierde agua / gotea', 'Otro'],
    lavarropas: ['No centrifuga', 'No carga agua', 'No descarga / pierde agua', 'Hace ruido o vibra mucho', 'No arranca', 'Otro'],
    secarropas: ['No calienta', 'No gira el tambor', 'No arranca', 'Hace ruido extraño', 'Otro'],
    horno: ['No calienta', 'No prende', 'El termostato no corta', 'La luz no enciende', 'Otro'],
    microondas: ['No calienta', 'No gira el plato', 'No prende', 'Hace ruido o chispas', 'Otro'],
    aire: ['No enfría', 'No prende', 'Pierde agua', 'Hace ruido', 'Necesita carga de gas', 'Otro']
  };

  var WA_NUMBER = '5493510000000';

  var state = { equipoId:null, equipoLabel:'', problema:null, otro:'', nombre:'', telefono:'', direccion:'', horario:null, comentario:'' };
  var maxReached = 1;

  var panels = wizard.querySelectorAll('.wizard-panel');
  var progressBtns = wizard.querySelectorAll('.wprog-step');
  var otroWrap = document.getElementById('otro-wrap');
  var otroInput = document.getElementById('otro-input');
  var btnStep1Next = document.getElementById('btn-step1-next');
  var btnStep2Next = document.getElementById('btn-step2-next');

  function goToStep(n){
    if(n > maxReached) maxReached = n;
    panels.forEach(function(p){ p.classList.toggle('is-active', +p.dataset.panel === n); });
    progressBtns.forEach(function(b){
      var s = +b.dataset.step;
      b.classList.toggle('is-active', s === n);
      b.classList.toggle('is-done', s < n);
      b.disabled = s > maxReached;
    });
  }

  // Paso 1: elegir equipo
  wizard.querySelectorAll('.equip-option').forEach(function(btn){
    btn.addEventListener('click', function(){
      wizard.querySelectorAll('.equip-option').forEach(function(b){ b.classList.remove('is-selected'); });
      btn.classList.add('is-selected');
      state.equipoId = btn.getAttribute('data-equipo');
      state.equipoLabel = btn.getAttribute('data-label');
      btnStep1Next.disabled = false;
    });
  });
  btnStep1Next.addEventListener('click', function(){
    renderProblemStep();
    goToStep(2);
  });

  // Paso 2: elegir problema (según equipo elegido)
  function renderProblemStep(){
    document.getElementById('equipo-elegido').textContent = state.equipoLabel;
    var grid = document.getElementById('problema-grid');
    grid.innerHTML = '';
    var list = PROBLEMS[state.equipoId] || [];
    list.forEach(function(p){
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'pill';
      b.setAttribute('data-problema', p);
      b.textContent = p;
      grid.appendChild(b);
    });
    state.problema = null;
    state.otro = '';
    otroWrap.hidden = true;
    otroInput.value = '';
    btnStep2Next.disabled = true;
    grid.querySelectorAll('.pill').forEach(function(btn){
      btn.addEventListener('click', function(){
        grid.querySelectorAll('.pill').forEach(function(b){ b.classList.remove('is-selected'); });
        btn.classList.add('is-selected');
        state.problema = btn.getAttribute('data-problema');
        var isOtro = state.problema === 'Otro';
        otroWrap.hidden = !isOtro;
        btnStep2Next.disabled = isOtro ? (otroInput.value.trim() === '') : false;
      });
    });
  }
  otroInput.addEventListener('input', function(){
    state.otro = this.value.trim();
    if(state.problema === 'Otro'){
      btnStep2Next.disabled = state.otro === '';
    }
  });
  btnStep2Next.addEventListener('click', function(){ goToStep(3); });

  // Volver
  wizard.querySelectorAll('[data-back]').forEach(function(btn){
    btn.addEventListener('click', function(){ goToStep(+btn.getAttribute('data-back')); });
  });

  // Paso 3: horario preferido
  var horarioGrid = document.getElementById('horario-grid');
  horarioGrid.querySelectorAll('.pill').forEach(function(btn){
    btn.addEventListener('click', function(){
      horarioGrid.querySelectorAll('.pill').forEach(function(b){ b.classList.remove('is-selected'); });
      btn.classList.add('is-selected');
      state.horario = btn.getAttribute('data-horario');
    });
  });

  document.getElementById('btn-step3-next').addEventListener('click', function(){
    state.nombre = document.getElementById('f-nombre').value.trim();
    state.telefono = document.getElementById('f-telefono').value.trim();
    state.direccion = document.getElementById('f-direccion').value.trim();
    state.comentario = document.getElementById('f-comentario').value.trim();
    if(!state.nombre || !state.telefono || !state.horario){
      alert('Completá nombre, teléfono y horario preferido para continuar.');
      return;
    }
    renderSummary();
    goToStep(4);
  });

  // Paso 4: resumen estilo WhatsApp
  function escapeHtml(str){
    return str.replace(/[&<>"']/g, function(c){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
    });
  }

  function buildMessage(){
    var problemaFinal = state.problema === 'Otro' ? state.otro : state.problema;
    return 'Hola San Max! 👋\n' +
      'Quiero pedir un presupuesto:\n\n' +
      '🔧 Equipo: ' + state.equipoLabel + '\n' +
      '⚠️ Problema: ' + problemaFinal + '\n\n' +
      '👤 Nombre: ' + state.nombre + '\n' +
      '📞 Teléfono: ' + state.telefono + '\n' +
      '📍 Dirección: ' + (state.direccion || 'A coordinar') + '\n' +
      '🕐 Horario preferido: ' + state.horario + '\n' +
      '📝 Comentario: ' + (state.comentario || '-');
  }

  function renderSummary(){
    var msg = buildMessage();
    var bubble = document.getElementById('wa-bubble-text');
    bubble.innerHTML = escapeHtml(msg).replace(/\n/g, '<br>') +
      '<span class="wa-time">12:04&nbsp;<svg viewBox="0 0 16 11" width="15" height="11" fill="none"><path d="M1 5.5 4 8.5 10 1.5" stroke="#53BDEB" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.5 5.5 8.5 8.5 14.5 1.5" stroke="#53BDEB" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
    document.getElementById('btn-send-wa').setAttribute('href', 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg));
  }

  document.getElementById('btn-edit').addEventListener('click', function(){ goToStep(3); });

  document.getElementById('btn-restart').addEventListener('click', function(){
    state = { equipoId:null, equipoLabel:'', problema:null, otro:'', nombre:'', telefono:'', direccion:'', horario:null, comentario:'' };
    wizard.querySelectorAll('.equip-option').forEach(function(b){ b.classList.remove('is-selected'); });
    btnStep1Next.disabled = true;
    document.getElementById('f-nombre').value = '';
    document.getElementById('f-telefono').value = '';
    document.getElementById('f-direccion').value = '';
    document.getElementById('f-comentario').value = '';
    horarioGrid.querySelectorAll('.pill').forEach(function(b){ b.classList.remove('is-selected'); });
    maxReached = 1;
    goToStep(1);
  });

  progressBtns.forEach(function(b){
    b.addEventListener('click', function(){
      if(b.disabled) return;
      goToStep(+b.getAttribute('data-step'));
    });
  });
})();
