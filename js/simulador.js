const Simulador = {
  preguntas: [],
  indice: 0,
  respuestas: [],
  modo: "estudio",
  especialidad: "General",
  attemptId: null,

  iniciar({ especialidad = "General", cantidad = 30, modo = "estudio" } = {}) {
    this.especialidad = especialidad;
    this.modo = modo;

    this.attemptId = crypto.randomUUID();

    let pool = especialidad === "General"
      ? [...BANCO_PREGUNTAS]
      : BANCO_PREGUNTAS.filter(q => q.especialidad === especialidad);

    if (!pool.length) {
      alert("No hay preguntas disponibles para esta especialidad.");
      return false;
    }

    pool = this.shuffle(pool);
    this.preguntas = pool.slice(0, Math.min(cantidad, pool.length));
    this.indice = 0;
    this.respuestas = Array(this.preguntas.length).fill(null);
    return true;
  },

  shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  responder(opcion) {
    this.respuestas[this.indice] = opcion;

    const pregunta = this.preguntas[this.indice];

    guardarRespuestaSupabase({
        pregunta,
        opcion,
        indice: this.indice
    });

    renderPregunta();
},

  siguiente() {
    if (this.respuestas[this.indice] === null) {
      alert("Selecciona una respuesta antes de continuar.");
      return;
    }
    if (this.indice < this.preguntas.length - 1) {
      this.indice++;
      renderPregunta();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      finalizarSimulador();
    }
  },

  anterior() {
    if (this.indice > 0) {
      this.indice--;
      renderPregunta();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },

  resultado() {
    const correctas = this.preguntas.filter((q, i) => this.respuestas[i] === q.respuestaCorrecta).length;
    return {
      correctas,
      incorrectas: this.preguntas.length - correctas,
      total: this.preguntas.length,
      porcentaje: Math.round((correctas / this.preguntas.length) * 100)
    };
  }
};

function renderPregunta() {
  const q = Simulador.preguntas[Simulador.indice];
  const cont = document.getElementById("view-simulador");
  if (!q) return;

  const seleccion = Simulador.respuestas[Simulador.indice];
  const porcentaje = ((Simulador.indice + 1) / Simulador.preguntas.length) * 100;

  cont.innerHTML = `
    <div class="exam-header">
      <div>
        <h2>${escapeHtml(Simulador.especialidad)} · Simulador</h2>
        <div class="exam-meta">${Simulador.modo === "estudio" ? "Modo estudio" : "Modo examen"} · ${escapeHtml(q.tema)} · Dificultad ${escapeHtml(q.dificultad)}</div>
      </div>
      <button class="btn btn-outline" onclick="salirSimulador()">Salir</button>
    </div>

    <div class="progress-wrap">
      <div class="progress-bar" style="width:${porcentaje}%"></div>
    </div>

    <article class="question-card">
      <div class="question-number">Pregunta ${Simulador.indice + 1} de ${Simulador.preguntas.length}</div>
      <h3>${escapeHtml(q.pregunta)}</h3>
      <div class="case-box">${escapeHtml(q.caso)}</div>

      <div class="options">
        ${q.opciones.map((op, i) => `
          <button class="option ${seleccion === i ? "selected" : ""}" onclick="Simulador.responder(${i})">
            <strong>${String.fromCharCode(65+i)}.</strong> ${escapeHtml(op)}
          </button>
        `).join("")}
      </div>

      <div class="exam-actions">
        <button class="btn btn-outline" onclick="Simulador.anterior()" ${Simulador.indice === 0 ? "disabled" : ""}>← Anterior</button>
        <button class="btn btn-primary" onclick="Simulador.siguiente()">
          ${Simulador.indice === Simulador.preguntas.length - 1 ? "Finalizar simulador" : "Siguiente →"}
        </button>
      </div>
    </article>
  `;
}

function finalizarSimulador() {
  const r = Simulador.resultado();
  const historial = JSON.parse(localStorage.getItem("enarm_historial") || "[]");
  historial.push({
    fecha: new Date().toISOString(),
    especialidad: Simulador.especialidad,
    total: r.total,
    correctas: r.correctas,
    porcentaje: r.porcentaje
  });
  localStorage.setItem("enarm_historial", JSON.stringify(historial));
  renderResultados();
  showView("resultados");
}

function renderResultados() {
  const r = Simulador.resultado();
  const cont = document.getElementById("view-resultados");

  cont.innerHTML = `
    <div class="result-hero">
      <div class="score-circle"><strong>${r.porcentaje}%</strong></div>
      <h2>Simulador finalizado</h2>
      <p style="color:var(--muted)">Resultado de ${escapeHtml(Simulador.especialidad)}</p>
      <div class="result-grid">
        <div class="stat"><span class="stat-label">Aciertos</span><div class="stat-value">${r.correctas}</div></div>
        <div class="stat"><span class="stat-label">Errores</span><div class="stat-value">${r.incorrectas}</div></div>
        <div class="stat"><span class="stat-label">Preguntas</span><div class="stat-value">${r.total}</div></div>
      </div>
      <div style="margin-top:20px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
        <button class="btn btn-primary" onclick="showView('inicio')">Volver al inicio</button>
        <button class="btn btn-outline" onclick="renderRevision()">Revisar respuestas</button>
      </div>
    </div>
    <div id="revision"></div>
  `;
}

function renderRevision() {
  const revision = document.getElementById("revision");

  revision.innerHTML = `
    <div class="section-title">
      <div>
        <h2>Retroalimentación</h2>
        <p>Revisión de las preguntas contestadas.</p>
      </div>
    </div>

    ${Simulador.preguntas.map((q, i) => {
      const ok = Simulador.respuestas[i] === q.respuestaCorrecta;
      const seleccion = Simulador.respuestas[i];

      return `
        <div class="review-item ${ok ? "correct" : "incorrect"}">

          <h4>
            ${i + 1}. ${escapeHtml(q.pregunta)}
          </h4>

          <p>
            <strong>Tu respuesta:</strong>
            ${
              seleccion === null
                ? "Sin respuesta"
                : escapeHtml(q.opciones[seleccion])
            }
          </p>

          <p>
            <strong>Respuesta correcta:</strong>
            ${escapeHtml(q.opciones[q.respuestaCorrecta])}
          </p>

          <p>
            <strong>Explicación:</strong>
            ${escapeHtml(q.explicacion)}
          </p>

          ${
            q.perlaENARM
              ? `
                <div class="review-pearl">
                  <strong>Perla ENARM</strong>
                  <p>${escapeHtml(q.perlaENARM)}</p>
                </div>
              `
              : ""
          }

          ${
            typeof q.gpc === "object"
              ? `
                <p class="source">
                  <strong>GPC México:</strong>
                  ${escapeHtml(q.gpc.mexico || "No especificada")}
                </p>

                <p class="source">
                  <strong>Guía internacional:</strong>
                  ${escapeHtml(q.gpc.internacional || "No especificada")}
                </p>
              `
              : `
                <p class="source">
                  <strong>GPC:</strong>
                  ${escapeHtml(q.gpc || "No especificada")}
                </p>
              `
          }

          <p>
            <strong>Bibliografía:</strong>
            ${escapeHtml(q.bibliografia || "No especificada")}
          </p>

        </div>
      `;
    }).join("")}
  `;

  revision.scrollIntoView({ behavior: "smooth" });
}

function salirSimulador() {
  if (confirm("¿Salir del simulador? El progreso actual se perderá.")) showView("inicio");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[c]));
}
async function guardarRespuestaSupabase({ pregunta, opcion }) {
    try {
        // Si Supabase no está disponible, el simulador continúa normalmente.
        if (!window.supabaseClient) {
            return;
        }

        const { data: { session } } =
            await window.supabaseClient.auth.getSession();

        // Si el alumno no ha iniciado sesión,
        // solamente se conserva la respuesta local.
        if (!session?.user) {
            return;
        }

        const userId = session.user.id;

        const registro = {
            user_id: userId,
            attempt_id: Simulador.attemptId,
            question_id: String(pregunta.id),

            especialidad: pregunta.especialidad || Simulador.especialidad,
            tema: pregunta.tema || null,
            subtema: pregunta.subtema || null,

            selected_option: opcion,
            correct_option: pregunta.respuestaCorrecta,

            is_correct: opcion === pregunta.respuestaCorrecta,

            mode: Simulador.modo
        };

        const { error } = await window.supabaseClient
            .from("user_responses")
            .upsert(
                registro,
                {
                    onConflict: "user_id,attempt_id,question_id"
                }
            );

        if (error) {
            console.warn(
                "No se pudo guardar la respuesta en Supabase:",
                error
            );
        }

    } catch (error) {
        // Un problema con Supabase nunca debe detener el simulador.
        console.warn(
            "Error de conexión con Supabase. El simulador continúa:",
            error
        );
    }
}
