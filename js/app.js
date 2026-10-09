const ESPECIALIDADES = [
  ["Cardiología","❤️","Enfermedad cardiovascular, ECG, SCA, insuficiencia cardiaca y valvulopatías."],
  ["Neumología","🫁","Asma, EPOC, neumonía, tromboembolia y enfermedad intersticial."],
  ["Nefrología","🫘","IRA, ERC, glomerulopatías, electrolitos y trastornos ácido-base."],
  ["Pediatría","👶","Urgencias, infecciones, neonatología y enfermedades pediátricas."],
  ["Ginecología y Obstetricia","🤰","Obstetricia, ginecología, urgencias y medicina materno-fetal."],
  ["Cirugía","🔪","Abdomen agudo, trauma, perioperatorio y cirugía general."],
  ["Urgencias","🚑","Reanimación, choque, intoxicaciones y emergencias médicas."],
  ["Anestesiología","💉","Valoración perioperatoria, anestesia, vía aérea y reanimación."]
  ["Gastroenterología", "Hemorragia digestiva, úlcera péptica, hepatología, patología biliar, páncreas y enfermedad intestinal."]
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
