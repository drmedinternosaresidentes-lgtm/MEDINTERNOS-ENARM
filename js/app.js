
const ESPECIALIDADES = [
  ["Cardiología", "❤️", "Enfermedad cardiovascular, ECG, SCA, insuficiencia cardiaca y valvulopatías."],
  ["Neumología", "🫁", "Asma, EPOC, neumonía, tromboembolia y enfermedad intersticial."],
  ["Nefrología", "🫘", "IRA, ERC, glomerulopatías, electrolitos y trastornos ácido-base."],
  ["Pediatría", "👶", "Urgencias, infecciones, neonatología y enfermedades pediátricas."],
  ["Ginecología y Obstetricia", "🤰", "Obstetricia, ginecología, urgencias y medicina materno-fetal."],
  ["Cirugía", "🔪", "Abdomen agudo, trauma, perioperatorio y cirugía general."],
  ["Urgencias", "🚑", "Reanimación, choque, intoxicaciones y emergencias médicas."],
  ["Anestesiología", "💉", "Valoración perioperatoria, anestesia, vía aérea y reanimación."],
  ["Gastroenterología", "🩺", "Hemorragia digestiva, úlcera péptica, hepatología, patología biliar, páncreas y enfermedad intestinal."]
];


const TITULOS = {
  inicio: "Inicio",
  simuladores: "Simuladores",
  premium: "Premium",
  temario: "Temario",
  progreso: "Progreso",
  gpc: "GPC y bibliografía",
  simulador: "Simulador",
  resultados: "Resultados"
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
      <div class="cards">
  ${ESPECIALIDADES.map(([name,icon,desc]) => specialtyCard(name,icon,desc)).join("")}
</div>
  `;
}

function specialtyCard(name, icon, desc) {
  const count = BANCO_PREGUNTAS.filter(
    q => q.especialidad === name
  ).length;

  const disponible = count > 0;

  return `
    <article class="card specialty-card ${disponible ? "" : "disabled-card"}"
      ${disponible ? `onclick="iniciarEspecialidad('${name.replace(/'/g,"\\'")}')"` : ""}>

      <div class="specialty-icon">${icon}</div>

      <h3>${name}</h3>

      <p>${desc}</p>

      <div class="card-footer">
        <span>
          ${count} ${count === 1 ? "pregunta" : "preguntas"} cargadas
        </span>

        ${
          disponible
            ? `<span class="tag">Iniciar →</span>`
            : `<span class="tag">Próximamente</span>`
        }
      </div>

    </article>
  `;
}


function renderSimuladores() {
  const especialidades = ESPECIALIDADES.map(([nombre]) => nombre);

  document.getElementById("view-simuladores").innerHTML = `
    <div class="section-title">
      <div>
        <h2>Configurar simulador ENARM</h2>
        <p>Personaliza tu bloque antes de comenzar.</p>
      </div>
    </div>

    <section class="config-panel">
      <div class="config-section">
        <label class="config-label">Tipo de simulador</label>
        <div class="config-choice-grid">
          <label class="config-choice">
            <input type="radio" name="tipoSimulador"
                   value="general" checked>
            <span class="config-choice-content">
              <strong>General</strong>
              <small>Todas las especialidades</small>
            </span>
          </label>

          <label class="config-choice">
            <input type="radio" name="tipoSimulador"
                   value="especialidad">
            <span class="config-choice-content">
              <strong>Por especialidad</strong>
              <small>Un área específica</small>
            </span>
          </label>
        </div>
      </div>

      <div class="config-section">
        <label class="config-label" for="especialidadSimulador">
          Especialidad
        </label>
        <select id="especialidadSimulador" class="config-select" disabled>
          ${especialidades.map(nombre =>
            `<option value="${escapeHtml(nombre)}"
              ${nombre === "Gastroenterología" ? "selected" : ""}>
              ${escapeHtml(nombre)}
            </option>`
          ).join("")}
        </select>
        <small class="config-help" id="ayudaEspecialidad">
          En modo general se incluyen todas las especialidades.
        </small>
      </div>

      <div class="config-section">
        <label class="config-label" for="cantidadSimulador">
          Número de preguntas
        </label>
        <div class="config-count-grid">
          ${[10, 20, 30, 50, 100].map(n => `
            <label class="config-count">
              <input type="radio" name="cantidadSimulador"
                     value="${n}" ${n === 30 ? "checked" : ""}>
              <span>${n}</span>
            </label>
          `).join("")}
        </div>
      </div>

      <div class="config-section">
        <span class="config-label">Modalidad</span>
        <div class="config-mode-list">
          <label class="config-mode">
            <input type="radio" name="modoSimulador"
                   value="examen" checked>
            <span>
              <strong>Examen</strong>
              <small>Retroalimentación al finalizar.</small>
            </span>
          </label>

          <label class="config-mode">
            <input type="radio" name="modoSimulador"
                   value="estudio">
            <span>
              <strong>Estudio</strong>
              <small>Explicación disponible durante la resolución.</small>
            </span>
          </label>
        </div>
      </div>

      <div class="config-section">
        <span class="config-label">Orden de preguntas</span>
        <div class="config-choice-grid">
          <label class="config-choice">
            <input type="radio" name="ordenSimulador"
                   value="aleatorio" checked>
            <span class="config-choice-content">
              <strong>⇄ Aleatorio</strong>
            </span>
          </label>

          <label class="config-choice">
            <input type="radio" name="ordenSimulador"
                   value="secuencial">
            <span class="config-choice-content">
              <strong>☷ Secuencial</strong>
            </span>
          </label>
        </div>
      </div>

      <div class="config-summary" aria-live="polite">
        <span class="config-summary-label">Resumen de configuración</span>
        <strong id="resumenSimulador">
          Todas las especialidades · 30 preguntas · Modo examen · Orden aleatorio
        </strong>
      </div>

      <button type="button" class="btn btn-primary config-submit"
              id="iniciarConfigurado">
        ▶ Usar esta configuración
      </button>

      <p class="config-error" id="errorConfiguracion" role="alert"></p>
    </section>
  `;

  const view = document.getElementById("view-simuladores");
  const radiosTipo = view.querySelectorAll('input[name="tipoSimulador"]');
  const selector = document.getElementById("especialidadSimulador");

  function actualizarTipo() {
    const tipo = view.querySelector(
      'input[name="tipoSimulador"]:checked'
    ).value;

    selector.disabled = tipo === "general";

    document.getElementById("ayudaEspecialidad").textContent =
      tipo === "general"
        ? "En modo general se incluyen todas las especialidades."
        : "El bloque utilizará preguntas de esta especialidad.";

    actualizarResumenSimulador();
  }

  radiosTipo.forEach(radio =>
    radio.addEventListener("change", actualizarTipo)
  );

  view.querySelectorAll(
    'input[name="cantidadSimulador"], input[name="modoSimulador"], input[name="ordenSimulador"]'
  ).forEach(radio =>
    radio.addEventListener("change", actualizarResumenSimulador)
  );

  selector.addEventListener("change", actualizarResumenSimulador);

  document.getElementById("iniciarConfigurado").addEventListener(
    "click",
    iniciarConfigurado
  );

  actualizarTipo();
}

function actualizarResumenSimulador() {
  const view = document.getElementById("view-simuladores");
  if (!view) return;

  const tipo = view.querySelector(
    'input[name="tipoSimulador"]:checked'
  )?.value || "general";

  const especialidad = document.getElementById(
    "especialidadSimulador"
  )?.value || "Gastroenterología";

  const cantidad = Number(view.querySelector(
    'input[name="cantidadSimulador"]:checked'
  )?.value || 30);

  const modo = view.querySelector(
    'input[name="modoSimulador"]:checked'
  )?.value || "examen";

  const orden = view.querySelector(
    'input[name="ordenSimulador"]:checked'
  )?.value || "aleatorio";

  const alcance = tipo === "general"
    ? "Todas las especialidades"
    : especialidad;

  document.getElementById("resumenSimulador").textContent =
    `${alcance} · ${cantidad} preguntas · ` +
    `${modo === "examen" ? "Modo examen" : "Modo estudio"} · ` +
    `Orden ${orden}`;

  const boton = document.getElementById("iniciarConfigurado");
  if (boton) {
    boton.disabled = false;
    boton.textContent = "▶ Usar esta configuración";
  }
}

async function iniciarConfigurado() {
  const view = document.getElementById("view-simuladores");
  const error = document.getElementById("errorConfiguracion");
  const boton = document.getElementById("iniciarConfigurado");

  const tipo = view.querySelector(
    'input[name="tipoSimulador"]:checked'
  ).value;

  const especialidad = tipo === "general"
    ? "General"
    : document.getElementById("especialidadSimulador").value;

  const cantidad = Number(view.querySelector(
    'input[name="cantidadSimulador"]:checked'
  ).value);

  const modo = view.querySelector(
    'input[name="modoSimulador"]:checked'
  ).value;

  const orden = view.querySelector(
    'input[name="ordenSimulador"]:checked'
  ).value;

  error.textContent = "";

  const disponibles = especialidad === "General"
    ? BANCO_PREGUNTAS.length
    : BANCO_PREGUNTAS.filter(q =>
        q.especialidad === especialidad
      ).length;

  if (!disponibles) {
    error.textContent =
      "No hay preguntas disponibles para la selección elegida.";
    return;
  }

  if (disponibles < cantidad) {
    error.textContent =
      `Solo hay ${disponibles} preguntas disponibles para esta selección. ` +
      `Elige una cantidad menor o carga más preguntas.`;
    return;
  }

  boton.disabled = true;
  boton.textContent = "Preparando simulador…";

  try {
    const iniciado = await Simulador.iniciar({
      especialidad,
      cantidad,
      modo,
      orden
    });

    if (iniciado) {
      showView("simulador");
      renderPregunta();
    }
  } finally {
    boton.disabled = false;
    boton.textContent = "▶ Usar esta configuración";
  }
}


function renderTemario() {
  document.getElementById("view-temario").innerHTML = `
    <div class="section-title"><div><h2>Temario</h2><p>Selecciona una especialidad para comenzar.</p></div></div>
    <div class="list">
      ${ESPECIALIDADES.map(([name,icon,desc]) => `
        <div class="list-item">
          <div><strong>${icon} ${name}</strong><small>${desc}</small></div>
          <div style="display:flex;align-items:center;gap:8px">
  <span class="badge">
    ${BANCO_PREGUNTAS.filter(q => q.especialidad === name).length} preguntas
  </span>

  ${
    BANCO_PREGUNTAS.some(q => q.especialidad === name)
      ? `<button class="btn btn-primary"
          onclick="iniciarEspecialidad('${name.replace(/'/g,"\\'")}')">
          Abrir
        </button>`
      : `<span class="badge">Próximamente</span>`
  }
</div>
        </div>
      `).join("")}
    </div>
  `;
}

async function renderProgreso() {

  const cont = document.getElementById("view-progreso");

  // Estado inicial mientras consultamos Supabase
  cont.innerHTML = `
    <div class="section-title">
      <div>
        <h2>Mi progreso</h2>
        <p>Consultando tus resultados...</p>
      </div>
    </div>

    <div class="card empty">
      Cargando información de tu cuenta...
    </div>
  `;

  try {

    // Verificar sesión
    if (!window.supabaseClient) {
      throw new Error("Supabase no está disponible.");
    }

    const { data: { session }, error: sessionError } =
      await window.supabaseClient.auth.getSession();

    if (sessionError) {
      throw sessionError;
    }

    // Si no hay sesión, mostrar mensaje
    if (!session?.user) {

      cont.innerHTML = `
        <div class="section-title">
          <div>
            <h2>Mi progreso</h2>
            <p>Tu progreso se sincroniza con tu cuenta.</p>
          </div>
        </div>

        <div class="card empty">
          <h3>Inicia sesión para ver tu progreso</h3>
          <p>
            Tus resultados se guardan de forma segura en tu cuenta
            y pueden consultarse desde diferentes dispositivos.
          </p>
        </div>
      `;

      return;
    }

    // Obtener únicamente las respuestas del usuario actual
    const { data, error } = await window.supabaseClient
      .from("user_responses")
      .select(`
        id,
        attempt_id,
        question_id,
        especialidad,
        tema,
        subtema,
        selected_option,
        correct_option,
        is_correct,
        mode,
        answered_at
      `)
      .eq("user_id", session.user.id)
      .order("answered_at", { ascending: false });

    if (error) {
      throw error;
    }

    const respuestas = data || [];

    // Sin respuestas todavía
    if (!respuestas.length) {

      cont.innerHTML = `
        <div class="section-title">
          <div>
            <h2>Mi progreso</h2>
            <p>Resultados sincronizados con tu cuenta.</p>
          </div>
        </div>

        <div class="card empty">
          <h3>Aún no tienes respuestas registradas</h3>
          <p>Realiza un simulador para comenzar a generar estadísticas.</p>
        </div>
      `;

      return;
    }

    // ============================
    // ESTADÍSTICAS GENERALES
    // ============================

    const totalPreguntas = respuestas.length;

    const correctas = respuestas.filter(
      r => r.is_correct === true
    ).length;

    const incorrectas = totalPreguntas - correctas;

    const precision = totalPreguntas
      ? Math.round((correctas / totalPreguntas) * 100)
      : 0;

    // Intentos únicos
    const attempts = [...new Set(
      respuestas.map(r => r.attempt_id)
    )];

    // Mejor rendimiento por simulador
    const resultadosIntentos = attempts.map(attemptId => {

      const bloque = respuestas.filter(
        r => r.attempt_id === attemptId
      );

      const aciertos = bloque.filter(
        r => r.is_correct === true
      ).length;

      return {
        attemptId,
        especialidad: bloque[0]?.especialidad || "General",
        fecha: bloque.reduce((latest, r) =>
          new Date(r.answered_at) > new Date(latest)
            ? r.answered_at
            : latest,
          bloque[0]?.answered_at
        ),
        total: bloque.length,
        correctas: aciertos,
        porcentaje: Math.round(
          (aciertos / bloque.length) * 100
        )
      };
    });

    const mejorResultado = resultadosIntentos.length
      ? Math.max(
          ...resultadosIntentos.map(x => x.porcentaje)
        )
      : 0;


    // ============================
    // RENDIMIENTO POR ESPECIALIDAD
    // ============================

    const porEspecialidad = {};

    respuestas.forEach(r => {

      const nombre = r.especialidad || "General";

      if (!porEspecialidad[nombre]) {
        porEspecialidad[nombre] = {
          total: 0,
          correctas: 0
        };
      }

      porEspecialidad[nombre].total++;

      if (r.is_correct === true) {
        porEspecialidad[nombre].correctas++;
      }
    });


    // ============================
    // RENDIMIENTO POR TEMA
    // ============================

    const porTema = {};

    respuestas.forEach(r => {

      const nombre = r.tema || "Sin tema";

      if (!porTema[nombre]) {
        porTema[nombre] = {
          total: 0,
          correctas: 0
        };
      }

      porTema[nombre].total++;

      if (r.is_correct === true) {
        porTema[nombre].correctas++;
      }
    });

    // ============================
    // TEMAS PRIORITARIOS DE REPASO
    // ============================

    const temasPrioritarios = Object.entries(porTema)
      .map(([tema, datos]) => ({
        tema,
        total: datos.total,
        correctas: datos.correctas,
        porcentaje: Math.round(
          (datos.correctas / datos.total) * 100
        )
      }))
      .filter(t => t.total >= 3)
      .sort((a, b) =>
        a.porcentaje - b.porcentaje ||
        b.total - a.total
      )
      .slice(0, 5);

    const temasPrioritariosHTML = temasPrioritarios.length
      ? temasPrioritarios.map(t => `
          <div class="analytics-item">
            <div class="analytics-item-top">
              <div>
                <strong>${escapeHtml(t.tema)}</strong>
                <small>${t.correctas}/${t.total} respuestas correctas</small>
              </div>
              <span class="analytics-percent ${
                t.porcentaje < 60 ? "weak" :
                t.porcentaje < 80 ? "medium" : "good"
              }">${t.porcentaje}%</span>
            </div>
            <div class="analytics-track">
              <div class="analytics-fill ${
                t.porcentaje < 60 ? "weak" :
                t.porcentaje < 80 ? "medium" : "good"
              }" style="width:${t.porcentaje}%"></div>
            </div>
          </div>
        `).join("")
      : `<div class="card empty">
          Necesitas responder al menos 3 preguntas de un mismo tema
          para identificar prioridades de repaso.
        </div>`;


    // ============================
    // HTML ESPECIALIDADES
    // ============================

    const especialidadesHTML =
      Object.entries(porEspecialidad)
        .sort((a, b) =>
          b[1].total - a[1].total
        )
        .map(([nombre, datos]) => {

          const porcentaje = Math.round(
            (datos.correctas / datos.total) * 100
          );

          return `
            <div class="list-item">
              <div>
                <strong>${escapeHtml(nombre)}</strong>
                <small>
                  ${datos.correctas}/${datos.total} correctas
                </small>
              </div>

              <span class="badge">
                ${porcentaje}%
              </span>
            </div>
          `;

        }).join("");


    // ============================
    // HTML TEMAS
    // ============================

    const temasHTML =
      Object.entries(porTema)
        .sort((a, b) =>
          b[1].total - a[1].total
        )
        .map(([nombre, datos]) => {

          const porcentaje = Math.round(
            (datos.correctas / datos.total) * 100
          );

          return `
            <div class="list-item">
              <div>
                <strong>${escapeHtml(nombre)}</strong>
                <small>
                  ${datos.correctas}/${datos.total} correctas
                </small>
              </div>

              <span class="badge">
                ${porcentaje}%
              </span>
            </div>
          `;

        }).join("");


    // ============================
    // HISTORIAL
    // ============================

    const historialHTML =
      resultadosIntentos
        .sort(
          (a, b) =>
            new Date(b.fecha) - new Date(a.fecha)
        )
        .map(x => `
          <div class="list-item">

            <div>
              <strong>
                ${escapeHtml(x.especialidad)}
              </strong>

              <small>
                ${new Date(x.fecha).toLocaleString("es-MX")}
              </small>
            </div>

            <span class="badge">
              ${x.correctas}/${x.total} · ${x.porcentaje}%
            </span>

          </div>
        `)
        .join("");
    
    // ============================
    // EVOLUCIÓN DEL RENDIMIENTO
    // ============================

    const ultimosIntentos = [...resultadosIntentos]
      .sort((a, b) =>
        new Date(a.fecha) - new Date(b.fecha)
      )
      .slice(-8);

    const evolucionHTML = ultimosIntentos.length
      ? `
        <div class="analytics-chart">
          ${ultimosIntentos.map((x, i) => `
            <div class="analytics-chart-column"
                 title="${escapeHtml(x.especialidad)}: ${x.porcentaje}%">
              <strong>${x.porcentaje}%</strong>
              <div class="analytics-chart-track">
                <div class="analytics-chart-bar"
                     style="height:${Math.max(x.porcentaje, 2)}%"></div>
              </div>
              <small>${i + 1}</small>
            </div>
          `).join("")}
        </div>
        <p class="analytics-note">
          Últimos ${ultimosIntentos.length} simuladores completados,
          en orden cronológico.
        </p>
      `
      : `<div class="card empty">
          Tu evolución aparecerá cuando completes un simulador.
        </div>`;


    // ============================
    // RENDER FINAL
    // ============================

    cont.innerHTML = `

      <div class="section-title">
        <div>
          <h2>Mi progreso</h2>
          <p>
            Estadísticas sincronizadas con tu cuenta.
          </p>
        </div>
      </div>


      <div class="stats">

        <div class="stat">
          <span class="stat-label">
            Preguntas respondidas
          </span>

          <div class="stat-value">
            ${totalPreguntas}
          </div>
        </div>


        <div class="stat">
          <span class="stat-label">
            Aciertos
          </span>

          <div class="stat-value">
            ${correctas}
          </div>
        </div>


        <div class="stat">
          <span class="stat-label">
            Precisión
          </span>

          <div class="stat-value">
            ${precision}%
          </div>
        </div>


        <div class="stat">
          <span class="stat-label">
            Mejor resultado
          </span>

          <div class="stat-value">
            ${mejorResultado}%
          </div>
        </div>

      </div>


      <div class="section-title">
        <div>
          <h2>Evolución del rendimiento</h2>
          <p>Porcentaje de aciertos en tus últimos simuladores.</p>
        </div>
      </div>

      <div class="card analytics-card">
        ${evolucionHTML}
      </div>

      <div class="section-title">
        <div>
          <h2>Temas prioritarios de repaso</h2>
          <p>Temas con menor precisión y al menos tres respuestas registradas.</p>
        </div>
      </div>

      <div class="card analytics-card">
        ${temasPrioritariosHTML}
      </div>

      
      <div class="section-title">
        <div>
          <h2>Rendimiento por especialidad</h2>
          <p>
            Aciertos acumulados según las respuestas registradas.
          </p>
        </div>
      </div>


      <div class="list">
        ${especialidadesHTML}
      </div>


      <div class="section-title">
        <div>
          <h2>Rendimiento por tema</h2>
          <p>
            Identifica tus áreas de mayor y menor rendimiento.
          </p>
        </div>
      </div>


      <div class="list">
        ${temasHTML}
      </div>


      <div class="section-title">
        <div>
          <h2>Historial de simuladores</h2>
          <p>
            Sesiones registradas en tu cuenta.
          </p>
        </div>
      </div>


      <div class="list">
        ${historialHTML}
      </div>

    `;
    
  } catch (error) {

    console.error(
      "Error al cargar el progreso:",
      error
    );

    cont.innerHTML = `
      <div class="section-title">
        <div>
          <h2>Mi progreso</h2>
          <p>No fue posible cargar tus estadísticas.</p>
        </div>
      </div>

      <div class="card empty">

        <h3>Error al consultar Supabase</h3>

        <p>
          Tus respuestas pueden seguir guardándose
          localmente. Intenta actualizar la página.
        </p>

      </div>
    `;
  }
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

async function iniciarGeneral(modo = "estudio") {

    const iniciado = await Simulador.iniciar({
        especialidad: "General",
        cantidad: 30,
        modo
    });

    if (iniciado) {

        showView("simulador");

        renderPregunta();
    }
}


async function iniciarEspecialidad(especialidad) {

    const iniciado = await Simulador.iniciar({
        especialidad,
        cantidad: 30,
        modo: "estudio"
    });

    if (iniciado) {

        showView("simulador");

        renderPregunta();
    }
}
