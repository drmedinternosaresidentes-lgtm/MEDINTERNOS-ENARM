const Simulador = {
  preguntas: [],
  indice: 0,
  respuestas: [],
  modo: "estudio",
  especialidad: "General",
  attemptId: null,
  startedAt: null,

 async iniciar({
  especialidad = "General",
  cantidad = 30,
  modo = "estudio",
  orden = "aleatorio"
} = {}) {

    // ============================================================
    // VERIFICAR AUTENTICACIÓN ANTES DE INICIAR
    // ============================================================

    if (!window.supabaseClient) {

        alert(
            "No fue posible conectar con el sistema de autenticación."
        );

        return false;
    }

    try {

        const {
            data: { session },
            error
        } = await window.supabaseClient.auth.getSession();
      const usuarioId = session?.user?.id;

        if (error) {
            throw error;
        }

        // --------------------------------------------------------
        // USUARIO NO AUTENTICADO
        // --------------------------------------------------------

        if (!session?.user) {

            // Guardamos la acción que el usuario intentó realizar.
           window.accionPendienteAuth = () => {
  Simulador.iniciar({
    especialidad,
    cantidad,
    modo,
    orden
  }).then(iniciado => {
    if (iniciado) {
      showView("simulador");
      renderPregunta();
    }
  });
};

            // Abrir el modal de autenticación existente.
            if (typeof window.abrirLogin === "function") {

                window.abrirLogin();

            } else {

                alert(
                    "Debes iniciar sesión para comenzar un simulador."
                );
            }

            return false;
        }

    } catch (error) {

        console.error(
            "Error verificando la sesión:",
            error
        );

        alert(
            "No fue posible verificar tu sesión. Intenta nuevamente."
        );

        return false;
    }


    // ============================================================
    // SESIÓN VALIDADA → INICIAR SIMULADOR
    // ============================================================


    // ==========================================
    // VALIDAR PLAN FREE / PREMIUM
    // ==========================================
    let plan = "free";
    window.planUsuario = "free";
try {
  const {
    data: { session: sesionPlan },
    error: errorSesionPlan
  } = await window.supabaseClient.auth.getSession();

  if (errorSesionPlan || !sesionPlan?.user?.id) {
    throw errorSesionPlan || new Error("Sesión no válida.");
  }

  const usuarioId = sesionPlan.user.id;
      const { data: membresia, error: errorMembresia } =
        await window.supabaseClient
          .from("memberships")
          .select("status, expires_at")
          .eq("user_id", usuarioId)
          .maybeSingle();

      if (errorMembresia) {
        throw errorMembresia;
      }
   
const vence = membresia?.expires_at
  ? new Date(membresia.expires_at).getTime()
  : Infinity;

if (
  membresia?.status === "active" &&
  vence > Date.now()
) {
  plan = "premium";
  window.planUsuario = "premium";
}

  console.log("DEBUG membresía:", { usuarioId, membresia, errorMembresia });
  console.log("DEBUG plan antes del límite:", plan, "cantidad:", cantidad);
  
    } catch (error) {
      console.error("No se pudo verificar la membresía:", error);
      alert("No se pudo verificar tu plan. Intenta nuevamente.");
      return false;
    }

    if (plan === "free" && cantidad > 10) {
      alert("El plan Free permite un máximo de 10 preguntas por simulador.");
      return false;
    }

    if (cantidad > 100) {
      alert("El máximo permitido por simulador es de 100 preguntas.");
      return false;
    }

   this.especialidad = especialidad;
this.modo = modo;
this.orden = orden;

    this.attemptId = crypto.randomUUID();
    this.startedAt = new Date().toISOString();

    let pool = especialidad === "General"
  ? [...BANCO_PREGUNTAS]
  : BANCO_PREGUNTAS.filter(q =>
      especialidad === "Cirugía"
        ? ["Cirugía", "Cirugía General"].includes(q.especialidad)
        : q.especialidad === especialidad
    );

    if (!pool.length) {

        alert(
            "No hay preguntas disponibles para esta especialidad."
        );

        return false;
    }

    if (orden === "aleatorio") {
  pool = this.shuffle(pool);
}


    const seleccionadas = pool.slice(0, cantidad);

const seleccionadasNormalizadas = seleccionadas.map((pregunta) => {
  if (
    especialidad === "Obstetricia" ||
    pregunta.especialidad === "Obstetricia"
  ) {
    return {
      ...pregunta,
      respuestaCorrecta: pregunta.respuestaCorrecta - 1
    };
  }

  return pregunta;
});

const distribucion = this.distribuirRespuestas(
  seleccionadasNormalizadas.length
);

this.preguntas = seleccionadasNormalizadas.map((pregunta, indicePregunta) => {
      if (
        !Array.isArray(pregunta.opciones) ||
        pregunta.opciones.length !== 5 ||
        !Number.isInteger(pregunta.respuestaCorrecta) ||
        pregunta.respuestaCorrecta < 0 ||
        pregunta.respuestaCorrecta >= pregunta.opciones.length
      ) {
        throw new Error(
          `Pregunta inválida o sin cinco opciones: ${pregunta.id ?? "sin ID"}`
        );
      }

      const opcionesMezcladas = pregunta.opciones.map(
        (texto, indiceOriginal) => ({
          texto,
          indiceOriginal
        })
      );

      const correctaOriginal = pregunta.respuestaCorrecta;

      for (let i = opcionesMezcladas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [
          opcionesMezcladas[i],
          opcionesMezcladas[j]
        ] = [
          opcionesMezcladas[j],
          opcionesMezcladas[i]
        ];
      }

      const indiceObjetivo = distribucion[indicePregunta];

      const indiceActual = opcionesMezcladas.findIndex(
        (opcion) => opcion.indiceOriginal === correctaOriginal
      );

      [
        opcionesMezcladas[indiceObjetivo],
        opcionesMezcladas[indiceActual]
      ] = [
        opcionesMezcladas[indiceActual],
        opcionesMezcladas[indiceObjetivo]
      ];

      return {
        ...pregunta,
        opciones: opcionesMezcladas.map((opcion) => opcion.texto),
        respuestaCorrecta: indiceObjetivo
      };
    });

    this.indice = 0;

    this.respuestas =
        Array(this.preguntas.length).fill(null);

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
  distribuirRespuestas(cantidad) {
    const letras = [];
    const base = Math.floor(cantidad / 5);
    const sobrantes = cantidad % 5;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < base; j++) {
        letras.push(i);
      }
    }

    const indicesExtra = this.shuffle([0, 1, 2, 3, 4]);

    for (let i = 0; i < sobrantes; i++) {
      letras.push(indicesExtra[i]);
    }

    return this.shuffle(letras);
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
  const mostrarFeedback =
  Simulador.modo === "estudio" && seleccion !== null;

const feedbackHTML = mostrarFeedback ? `
  <div class="study-feedback ${
    seleccion === q.respuestaCorrecta ? "correct" : "incorrect"
  }">
    <strong>
      ${seleccion === q.respuestaCorrecta
        ? "Respuesta correcta"
        : "Respuesta incorrecta"}
    </strong>

    <p>
      <b>Respuesta correcta:</b>
      ${escapeHtml(q.opciones[q.respuestaCorrecta])}
    </p>

    <p>
      <b>Explicación:</b>
      ${escapeHtml(q.explicacion || "Sin explicación disponible.")}
    </p>

    ${q.perlaENARM ? `
      <p><b>Perla ENARM:</b> ${escapeHtml(q.perlaENARM)}</p>
    ` : ""}
  </div>
` : "";

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
      ${feedbackHTML}
      <div class="exam-actions">
        <button class="btn btn-outline" onclick="Simulador.anterior()" ${Simulador.indice === 0 ? "disabled" : ""}>← Anterior</button>
        <button class="btn btn-primary" onclick="Simulador.siguiente()">
          ${Simulador.indice === Simulador.preguntas.length - 1 ? "Finalizar simulador" : "Siguiente →"}
        </button>
      </div>
    </article>
  `;
}

async function finalizarSimulador() {

  const r = Simulador.resultado();

  // ==========================================
  // HISTORIAL LOCAL
  // ==========================================

  const historial = JSON.parse(
    localStorage.getItem("enarm_historial") || "[]"
  );

  historial.push({
    fecha: new Date().toISOString(),
    especialidad: Simulador.especialidad,
    total: r.total,
    correctas: r.correctas,
    porcentaje: r.porcentaje
  });

  localStorage.setItem(
    "enarm_historial",
    JSON.stringify(historial)
  );


  // ==========================================
  // GUARDAR INTENTO EN SUPABASE
  // ==========================================

  try {

    if (window.supabaseClient && Simulador.attemptId) {

      const {
        data: { session },
        error: sessionError
      } = await window.supabaseClient.auth.getSession();

      if (sessionError) {
        throw sessionError;
      }

      if (session?.user) {

        const { error } =
          await window.supabaseClient
            .from("simulator_attempts")
            .upsert(
              {
                id: Simulador.attemptId,

                user_id: session.user.id,

                especialidad:
                  Simulador.especialidad,

                mode:
                  Simulador.modo,

                question_count:
                  r.total,

                correct_count:
                  r.correctas,

                score:
                  r.porcentaje,

                started_at:
                  Simulador.startedAt || new Date().toISOString(),

                completed_at:
                  new Date().toISOString()
              },
              {
                onConflict: "id"
              }
            );

        if (error) {
          console.warn(
            "No se pudo guardar el simulador en Supabase:",
            error
          );
        }
      }
    }

  } catch (error) {

    // Supabase nunca debe impedir que
    // el alumno vea su resultado.
    console.warn(
      "Error al guardar el simulador en Supabase:",
      error
    );
  }


  // ==========================================
  // MOSTRAR RESULTADO
  // ==========================================

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
