// BANCO DE DEMOSTRACIÓN
// Sustituye/agrega preguntas aquí. El motor acepta cientos o miles de objetos.
const BANCO_PREGUNTAS = [
  {
    id: "CARD-DEMO-001",
    especialidad: "Cardiología",
    tema: "Síndrome coronario agudo",
    dificultad: "Alta",
    caso: "Varón de 64 años con dolor retroesternal opresivo de 70 minutos de evolución. ECG con elevación del ST en V2-V5. Se encuentra en un hospital con capacidad para intervención coronaria percutánea y el equipo puede realizar la reperfusión dentro del tiempo recomendado.",
    pregunta: "¿Cuál es la estrategia de reperfusión preferida?",
    opciones: [
      "Fibrinólisis inmediata independientemente del tiempo de traslado",
      "Intervención coronaria percutánea primaria cuando puede realizarse oportunamente",
      "Solo tratamiento antianginoso y reevaluación con troponina",
      "Coronariografía electiva después de 72 horas",
      "Prueba de esfuerzo antes de decidir reperfusión"
    ],
    respuestaCorrecta: 1,
    explicacion: "En un IAM con elevación del ST, la intervención coronaria percutánea primaria es la estrategia preferida cuando puede realizarse oportunamente en un centro con capacidad de reperfusión.",
    gpc: "GPC mexicana relacionada con infarto agudo de miocardio con elevación del ST.",
    bibliografia: "Guías internacionales contemporáneas de síndrome coronario agudo."
  },
  {
    id: "NEUMO-DEMO-001",
    especialidad: "Neumología",
    tema: "Asma",
    dificultad: "Alta",
    caso: "Mujer de 28 años con episodios recurrentes de sibilancias, tos nocturna y disnea variable. Refiere síntomas dos veces por semana y despertares nocturnos ocasionales. La espirometría demuestra obstrucción reversible.",
    pregunta: "¿Qué elemento apoya con mayor fuerza el diagnóstico de asma?",
    opciones: [
      "Tos productiva crónica sin variabilidad",
      "Obstrucción fija sin cambios posteriores",
      "Limitación variable del flujo espiratorio",
      "Disminución aislada de la difusión de CO",
      "Hipoxemia persistente en reposo"
    ],
    respuestaCorrecta: 2,
    explicacion: "La variabilidad de los síntomas y de la limitación del flujo espiratorio es un componente fundamental del diagnóstico de asma.",
    gpc: "GPC mexicana aplicable al diagnóstico y tratamiento del asma.",
    bibliografia: "Guías internacionales contemporáneas para asma."
  },
  {
    id: "NEFRO-DEMO-001",
    especialidad: "Nefrología",
    tema: "Lesión renal aguda",
    dificultad: "Alta",
    caso: "Paciente hospitalizado que presenta aumento de creatinina sérica de 0.9 a 1.5 mg/dL en 48 horas. No existe información de enfermedad renal crónica previa.",
    pregunta: "¿Cuál es la interpretación más adecuada?",
    opciones: [
      "La elevación no cumple ningún criterio de lesión renal aguda",
      "Cumple criterio de lesión renal aguda por incremento de creatinina",
      "Es necesariamente enfermedad renal crónica estadio 3",
      "Debe diagnosticarse síndrome nefrótico",
      "El hallazgo confirma necrosis tubular aguda"
    ],
    respuestaCorrecta: 1,
    explicacion: "Un incremento de creatinina de al menos 0.3 mg/dL dentro de 48 horas cumple un criterio de lesión renal aguda.",
    gpc: "GPC mexicana relacionada con prevención, diagnóstico y tratamiento de lesión renal aguda.",
    bibliografia: "KDIGO y textos de medicina interna de nivel de residencia."
  },
  {
    id: "PEDI-DEMO-001",
    especialidad: "Pediatría",
    tema: "Deshidratación",
    dificultad: "Media",
    caso: "Niño de 3 años con diarrea aguda. Está alerta, bebe con avidez, presenta mucosas secas y ojos ligeramente hundidos. No hay choque.",
    pregunta: "¿Cuál es el principio terapéutico inicial más importante?",
    opciones: [
      "Suspender la vía oral durante 24 horas",
      "Iniciar rehidratación adecuada con solución de rehidratación oral cuando sea posible",
      "Indicar antibiótico de amplio espectro en todos los casos",
      "Administrar diurético",
      "Restringir líquidos para evitar edema"
    ],
    respuestaCorrecta: 1,
    explicacion: "La solución de rehidratación oral es fundamental en niños con deshidratación que pueden beber y no presentan choque o una contraindicación para la vía enteral.",
    gpc: "GPC mexicana vigente relacionada con enfermedad diarreica aguda en menores de 5 años.",
    bibliografia: "Guías internacionales de rehidratación pediátrica."
  },
  {
    id: "GO-DEMO-001",
    especialidad: "Ginecología y Obstetricia",
    tema: "Trastornos hipertensivos del embarazo",
    dificultad: "Alta",
    caso: "Gestante de 34 semanas con presión arterial de 168/112 mmHg confirmada. Presenta cefalea intensa y fosfenos. Se requiere estabilización materna inmediata.",
    pregunta: "¿Cuál es la prioridad inicial?",
    opciones: [
      "Esperar 24 horas para repetir la presión arterial",
      "Tratar de forma urgente la hipertensión severa y valorar profilaxis anticonvulsivante",
      "Indicar únicamente reposo domiciliario",
      "Realizar prueba de tolerancia a la glucosa",
      "Iniciar anticoagulación terapéutica de rutina"
    ],
    respuestaCorrecta: 1,
    explicacion: "La hipertensión severa en el embarazo requiere tratamiento urgente para reducir el riesgo materno de eventos cerebrovasculares y otras complicaciones. La evaluación de características graves y la profilaxis con sulfato de magnesio cuando está indicada forman parte del manejo.",
    gpc: "GPC mexicana relacionada con trastornos hipertensivos del embarazo.",
    bibliografia: "ACOG y guías internacionales contemporáneas."
  },
  {
    id: "CIR-DEMO-001",
    especialidad: "Cirugía",
    tema: "Abdomen agudo",
    dificultad: "Alta",
    caso: "Paciente con dolor abdominal que inició periumbilical y migró a fosa ilíaca derecha. Presenta anorexia, náusea y febrícula. A la exploración existe dolor localizado y defensa.",
    pregunta: "¿Cuál es el diagnóstico clínico más probable?",
    opciones: [
      "Apendicitis aguda",
      "Pancreatitis aguda",
      "Colecistitis aguda",
      "Obstrucción intestinal alta",
      "Gastritis erosiva"
    ],
    respuestaCorrecta: 0,
    explicacion: "La migración del dolor hacia la fosa ilíaca derecha asociada a anorexia, náusea y datos de irritación peritoneal es altamente sugestiva de apendicitis aguda.",
    gpc: "GPC mexicana relacionada con diagnóstico y tratamiento de apendicitis aguda.",
    bibliografia: "Guías quirúrgicas internacionales contemporáneas."
  }
];
