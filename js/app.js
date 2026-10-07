const ESPECIALIDADES = [
  ["Cardiología","❤️","Enfermedad cardiovascular, ECG, SCA, insuficiencia cardiaca y valvulopatías."],
  ["Neumología","🫁","Asma, EPOC, neumonía, tromboembolia y enfermedad intersticial."],
  ["Nefrología","🫘","IRA, ERC, glomerulopatías, electrolitos y trastornos ácido-base."],
  ["Pediatría","👶","Urgencias, infecciones, neonatología y enfermedades pediátricas."],
  ["Ginecología y Obstetricia","🤰","Obstetricia, ginecología, urgencias y medicina materno-fetal."],
  ["Cirugía","🔪","Abdomen agudo, trauma, perioperatorio y cirugía general."],
  ["Urgencias","🚑","Reanimación, choque, intoxicaciones y emergencias médicas."],
  ["Anestesiología","💉","Valoración perioperatoria, anestesia, vía aérea y reanimación."]
];

const TITULOS = {
  inicio:"Inicio", simuladores:"Simuladores", temario:"Temario",
  progreso:"Progreso", gpc:"GPC y bibliografía", simulador:"Simulador", resultados:"Resultados"
};

document.addEventListener("DOMContentLoaded", () => {
  renderInicio();
  renderSimuladores();
  renderTemario();
  renderProgreso();
  renderGpc();

  document.querySelectorAll(".nav-item").forEach(btn => {
    btn.addEventListener("click", () => {
      showView(btn.dataset.view);
      closeMobileMenu();
    });
  });

  document.getElementById("menuBtn").addEventListener("click", openMobileMenu);
  document.getElementById("overlay").addEventListener("click", closeMobileMenu);
});

function showView(view) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active-view"));
  const target = document.getElementById("view-" + view);
  if (target) target.classList.add("active-view");

  document.querySelectorAll(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.view === view));
  document.getElementById("pageTitle").textContent = TITULOS[view] || "ENARM";
  window.scrollTo({top:0, behavior:"smooth"});
}

function openMobileMenu() {
  document.getElementById("sidebar").classList.add("open");
  document.getElementById("overlay").classList.add("show");
}
function closeMobileMenu() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}

function renderInicio() {
  document.getElementById("view-inicio").innerHTML = `
    <section class="hero">
      <h1>Preparación ENARM de alto rendimiento</h1>
      <p>Plataforma modular para estudiar por especialidad, resolver simuladores clínicos y revisar retroalimentación basada en guías y bibliografía médica.</p>
      <div class="hero-actions">
        <button class="btn btn-primary" onclick="iniciarGeneral()">Iniciar simulador</button>
        <button class="btn btn-light" onclick="showView('temario')">Explorar temario</button>
      </div>
    </section>

    <div class="stats">
      <div class="stat"><span class="stat-label">Preguntas cargadas</span><div class="stat-value">${BANCO_PREGUNTAS.length}</div><div class="stat-note">Banco actual</div></div>
      <div class="stat"><span class="stat-label">Especialidades</span><div class="stat-value">${ESPECIALIDADES.length}</div><div class="stat-note">Módulos disponibles</div></div>
      <div class="stat"><span class="stat-label">Bloque estándar</span><div class="stat-value">30</div><div class="stat-note">Preguntas por simulador</div></div>
      <div class="stat"><span class="stat-label">Nivel</span><div class="stat-value">Residencia</div><div class="stat-note">Orientación ENARM</div></div>
    </div>

    <div class="section-title">
      <div><h2>Especialidades</h2><p>Acceso rápido a simuladores por área.</p></div>
    </div>
    <div class="cards">
      ${ESPECIALIDADES.slice(0,6).map(([name,icon,desc]) => specialtyCard(name,icon,desc)).join("")}
    </div>
  `;
}

function specialtyCard(name, icon, desc) {
  const count = BANCO_PREGUNTAS.filter(q => q.especialidad === name).length;
  return `
    <article class="card specialty-card" onclick="iniciarEspecialidad('${name.replace(/'/g,"\\'")}')">
      <div class="specialty-icon">${icon}</div>
      <h3>${name}</h3>
      <p>${desc}</p>
      <div class="card-footer"><span>${count} preguntas cargadas</span><span class="tag">Iniciar →</span></div>
    </article>
  `;
}

function renderSimuladores() {
  document.getElementById("view-simuladores").innerHTML = `
    <div class="section-title"><div><h2>Simuladores</h2><p>Elige el tipo de entrenamiento.</p></div></div>
    <div class="cards">
      <div class="card sim-card"><div class="specialty-icon">🎯</div><h3>Simulador general</h3><p>Preguntas aleatorias de todas las especialidades disponibles.</p><button class="btn btn-primary" onclick="iniciarGeneral()">30 preguntas</button></div>
      <div class="card sim-card"><div class="specialty-icon">📚</div><h3>Por especialidad</h3><p>Concentra el bloque en una sola especialidad.</p><button class="btn btn-outline" onclick="showView('temario')">Elegir especialidad</button></div>
      <div class="card sim-card"><div class="specialty-icon">🧠</div><h3>Modo estudio</h3><p>Resuelve y posteriormente revisa explicación, GPC y bibliografía.</p><button class="btn btn-outline" onclick="iniciarGeneral('estudio')">Iniciar</button></div>
    </div>
  `;
}

function renderTemario() {
  document.getElementById("view-temario").innerHTML = `
    <div class="section-title"><div><h2>Temario</h2><p>Selecciona una especialidad para comenzar.</p></div></div>
    <div class="list">
      ${ESPECIALIDADES.map(([name,icon,desc]) => `
        <div class="list-item">
          <div><strong>${icon} ${name}</strong><small>${desc}</small></div>
          <div style="display:flex;align-items:center;gap:8px">
            <span class="badge">${BANCO_PREGUNTAS.filter(q=>q.especialidad===name).length} preguntas</span>
            <button class="btn btn-primary" onclick="iniciarEspecialidad('${name.replace(/'/g,"\\'")}')">Abrir</button>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderProgreso() {
  const historial = JSON.parse(localStorage.getItem("enarm_historial") || "[]");
  const promedio = historial.length ? Math.round(historial.reduce((a,b)=>a+b.porcentaje,0)/historial.length) : 0;

  document.getElementById("view-progreso").innerHTML = `
    <div class="section-title"><div><h2>Progreso</h2><p>Datos almacenados localmente en este navegador.</p></div></div>
    <div class="stats">
      <div class="stat"><span class="stat-label">Simuladores realizados</span><div class="stat-value">${historial.length}</div></div>
      <div class="stat"><span class="stat-label">Promedio</span><div class="stat-value">${promedio}%</div></div>
      <div class="stat"><span class="stat-label">Mejor resultado</span><div class="stat-value">${historial.length ? Math.max(...historial.map(x=>x.porcentaje)) : 0}%</div></div>
      <div class="stat"><span class="stat-label">Preguntas respondidas</span><div class="stat-value">${historial.reduce((a,b)=>a+b.total,0)}</div></div>
    </div>
    <div class="section-title"><div><h2>Historial</h2></div></div>
    <div class="list">
      ${historial.length ? historial.slice().reverse().map(x => `
        <div class="list-item">
          <div><strong>${x.especialidad}</strong><small>${new Date(x.fecha).toLocaleString("es-MX")}</small></div>
          <span class="badge">${x.correctas}/${x.total} · ${x.porcentaje}%</span>
        </div>
      `).join("") : `<div class="card empty">Todavía no hay simuladores registrados.</div>`}
    </div>
  `;
}

function renderGpc() {
  document.getElementById("view-gpc").innerHTML = `
    <div class="section-title"><div><h2>GPC y bibliografía</h2><p>Esta sección será el repositorio de fuentes asociado a cada banco.</p></div></div>
    <div class="cards">
      <div class="card"><h3>Guías de Práctica Clínica mexicanas</h3><p>Las preguntas pueden vincularse con la GPC mexicana correspondiente al tema, incluyendo institución y año.</p></div>
      <div class="card"><h3>Guías internacionales</h3><p>Se pueden registrar sociedades y documentos internacionales actualizados por especialidad.</p></div>
      <div class="card"><h3>Bibliografía de residencia</h3><p>El campo de bibliografía permite asociar libros y revisiones sin mezclar las fuentes con la interfaz.</p></div>
    </div>
  `;
}

function iniciarGeneral(modo="estudio") {
  if (Simulador.iniciar({especialidad:"General", cantidad:30, modo})) {
    showView("simulador");
    renderPregunta();
  }
}

function iniciarEspecialidad(especialidad) {
  if (Simulador.iniciar({especialidad, cantidad:30, modo:"estudio"})) {
    showView("simulador");
    renderPregunta();
  }
}
