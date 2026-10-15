window.BANCO_PEDIATRIA = [
  
  {
    id: "PED-001",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Clasificación del recién nacido",
    dificultad: "Baja",
    caso: `Recién nacido de 39 semanas de gestación, con peso de 2,450 g al nacimiento. La exploración física no muestra malformaciones y la edad gestacional se confirmó mediante valoración obstétrica.`,
    pregunta: "¿Cómo debe clasificarse al paciente según su edad gestacional y peso?",
    opciones: [
      "Prematuro tardío con peso adecuado",
      "Recién nacido de término con bajo peso al nacer",
      "Recién nacido postérmino con peso adecuado",
      "Recién nacido de término con macrosomía",
      "Prematuro extremo con muy bajo peso"
    ],
    respuestaCorrecta: 1,
    explicacion: `Un nacimiento a las 39 semanas corresponde a un recién nacido de término. El peso inferior a 2,500 g define bajo peso al nacer, independientemente de la edad gestacional. Debe distinguirse entre bajo peso al nacer, pequeño para la edad gestacional y restricción del crecimiento fetal.`,
    perlaENARM: "Bajo peso al nacer: menos de 2,500 g; muy bajo peso: menos de 1,500 g; extremadamente bajo peso: menos de 1,000 g.",
    gpc: {
      mexico: "Consultar la normativa mexicana vigente para atención del recién nacido.",
      internacional: "WHO recommendations for care of the preterm or low-birth-weight infant."
    },
    bibliografia: "World Health Organization. Recommendations for care of the preterm or low-birth-weight infant."
  },

  {
    id: "PED-002",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Edad gestacional",
    dificultad: "Baja",
    caso: `Un recién nacido nace a las 35 semanas y 4 días de gestación. Presenta respiración espontánea, tono adecuado y peso de 2,300 g.`,
    pregunta: "¿En qué categoría de edad gestacional se encuentra?",
    opciones: [
      "Prematuro extremo",
      "Prematuro muy temprano",
      "Prematuro moderado a tardío",
      "Recién nacido de término temprano",
      "Recién nacido postérmino"
    ],
    respuestaCorrecta: 2,
    explicacion: `La prematuridad se define por nacimiento antes de completar 37 semanas. El grupo de prematuros moderados a tardíos comprende de 32 semanas a menos de 37 semanas. Esta población tiene mayor riesgo de dificultades de alimentación, hipotermia, hipoglucemia, apnea e hiperbilirrubinemia que los recién nacidos de término.`,
    perlaENARM: "Un recién nacido de 35 semanas sigue siendo prematuro, aunque tenga peso y apariencia cercanos a los de término.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente sobre atención del recién nacido prematuro.",
      internacional: "WHO recommendations for care of the preterm or low-birth-weight infant."
    },
    bibliografia: "World Health Organization. Preterm birth."
  },

  {
    id: "PED-003",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Adaptación neonatal",
    dificultad: "Baja",
    caso: `Recién nacido de término que, durante los primeros minutos posteriores al parto, presenta disminución de la resistencia vascular pulmonar y aumento progresivo del flujo sanguíneo pulmonar.`,
    pregunta: "¿Qué cambio fisiológico favorece directamente esta transición circulatoria?",
    opciones: [
      "Aumento sostenido de la resistencia vascular pulmonar",
      "Cierre inmediato anatómico del conducto arterioso",
      "Disminución del retorno venoso pulmonar",
      "Expansión pulmonar y aumento de la tensión alveolar de oxígeno",
      "Persistencia de la presión auricular derecha por encima de la izquierda"
    ],
    respuestaCorrecta: 3,
    explicacion: `La expansión pulmonar y el aumento de la oxigenación reducen la resistencia vascular pulmonar, incrementan el flujo pulmonar y elevan el retorno venoso a la aurícula izquierda. Los cambios de presión favorecen el cierre funcional del foramen oval. El cierre anatómico de las comunicaciones fetales no es instantáneo.`,
    perlaENARM: "La primera respiración transforma la circulación fetal al disminuir la resistencia vascular pulmonar.",
    gpc: {
      mexico: "Consultar normativa vigente de atención neonatal inmediata.",
      internacional: "Textbook of Neonatal Resuscitation, American Academy of Pediatrics."
    },
    bibliografia: "American Academy of Pediatrics. Textbook of Neonatal Resuscitation."
  },

  {
    id: "PED-004",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Atención inmediata del recién nacido",
    dificultad: "Baja",
    caso: `Recién nacido de término, vigoroso, con llanto espontáneo, buen tono y respiración regular después del nacimiento. No presenta factores que indiquen necesidad de reanimación avanzada.`,
    pregunta: "¿Cuál es la medida inicial que favorece la adaptación neonatal y la prevención de hipotermia?",
    opciones: [
      "Separarlo de su madre para realizar aspiración nasofaríngea sistemática",
      "Secarlo, mantenerlo caliente y favorecer el contacto piel con piel",
      "Administrar oxígeno al 100% de manera preventiva",
      "Iniciar compresiones torácicas para acelerar la transición",
      "Realizar intubación endotraqueal antes de la primera alimentación"
    ],
    respuestaCorrecta: 1,
    explicacion: `El recién nacido vigoroso debe recibir cuidados térmicos, secado, evaluación continua y contacto piel con piel cuando la situación clínica lo permite. La aspiración rutinaria de secreciones no está indicada en un neonato que respira adecuadamente. La reanimación avanzada se reserva para quienes presentan compromiso respiratorio o cardiovascular.`,
    perlaENARM: "En un recién nacido vigoroso, priorizar calor, evaluación y contacto piel con piel; evitar intervenciones rutinarias innecesarias.",
    gpc: {
      mexico: "Consultar la normativa mexicana vigente sobre atención inmediata del recién nacido.",
      internacional: "WHO recommendations on maternal and newborn care."
    },
    bibliografia: "World Health Organization. Recommendations on maternal and newborn care."
  },

  {
    id: "PED-005",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Reanimación neonatal",
    dificultad: "Baja",
    caso: `Después del nacimiento, un recién nacido presenta apnea y frecuencia cardiaca de 85 latidos por minuto pese a las medidas iniciales de estabilización.`,
    pregunta: "¿Qué intervención tiene prioridad en este escenario?",
    opciones: [
      "Administrar adrenalina antes de ventilar",
      "Iniciar compresiones torácicas de inmediato",
      "Realizar ventilación con presión positiva efectiva",
      "Administrar bicarbonato de sodio de forma rutinaria",
      "Esperar cinco minutos y repetir la frecuencia cardiaca"
    ],
    respuestaCorrecta: 2,
    explicacion: `La ventilación pulmonar efectiva es la intervención principal de la reanimación neonatal cuando existe apnea, respiración ineficaz o bradicardia significativa. Si la frecuencia cardiaca no aumenta, deben verificarse la expansión torácica, el sello de la mascarilla y la permeabilidad de la vía aérea, corrigiendo la ventilación antes de escalar las maniobras.`,
    perlaENARM: "En reanimación neonatal, la ventilación efectiva es la intervención de mayor impacto inicial.",
    gpc: {
      mexico: "Consultar la normativa mexicana vigente de reanimación neonatal.",
      internacional: "American Academy of Pediatrics. Neonatal Resuscitation Program."
    },
    bibliografia: "American Academy of Pediatrics. Neonatal Resuscitation Program."
  },

  {
    id: "PED-006",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Prematuridad",
    dificultad: "Baja",
    caso: `Recién nacido de 29 semanas de gestación, con peso de 1,150 g. Durante las primeras horas necesita soporte respiratorio y vigilancia estrecha de temperatura y glucemia.`,
    pregunta: "¿Cuál de las siguientes complicaciones se relaciona especialmente con la inmadurez de este paciente?",
    opciones: [
      "Hipertensión esencial del adulto",
      "Enfermedad de Parkinson neonatal",
      "Artritis reumatoide juvenil de inicio inmediato",
      "Apendicitis aguda neonatal como complicación habitual",
      "Hemorragia intraventricular"
    ],
    respuestaCorrecta: 4,
    explicacion: `La matriz germinal subependimaria es particularmente vulnerable en los prematuros, debido a su vascularización frágil y a las fluctuaciones hemodinámicas. La hemorragia intraventricular se asocia principalmente con la prematuridad extrema y puede producirse durante los primeros días de vida.`,
    perlaENARM: "Prematuridad extrema: relacionar inmadurez vascular cerebral con hemorragia intraventricular.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente sobre atención del recién nacido prematuro.",
      internacional: "WHO recommendations for preterm infant care."
    },
    bibliografia: "WHO. Recommendations for care of the preterm or low-birth-weight infant."
  },

  {
    id: "PED-007",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Síndrome de dificultad respiratoria",
    dificultad: "Baja",
    caso: `Prematuro de 30 semanas que presenta taquipnea, quejido espiratorio, retracciones intercostales y aumento progresivo de requerimientos de oxígeno durante las primeras horas de vida.`,
    pregunta: "¿Qué alteración explica principalmente este cuadro?",
    opciones: [
      "Deficiencia de surfactante pulmonar",
      "Exceso de surfactante con hiperinsuflación",
      "Obstrucción intestinal distal",
      "Hipersecreción de insulina",
      "Producción excesiva de bilirrubina conjugada"
    ],
    respuestaCorrecta: 0,
    explicacion: `El síndrome de dificultad respiratoria del prematuro se relaciona con inmadurez de los neumocitos tipo II y deficiencia de surfactante. El aumento de la tensión superficial favorece el colapso alveolar, reduce la distensibilidad pulmonar y provoca alteración del intercambio gaseoso.`,
    perlaENARM: "Prematuro con dificultad respiratoria desde las primeras horas: pensar en déficit de surfactante.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente para síndrome de dificultad respiratoria neonatal.",
      internacional: "European Consensus Guidelines on the Management of Respiratory Distress Syndrome."
    },
    bibliografia: "European Consensus Guidelines on the Management of Respiratory Distress Syndrome."
  },

  {
    id: "PED-008",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Taquipnea transitoria del recién nacido",
    dificultad: "Baja",
    caso: `Recién nacido de término obtenido por cesárea electiva, sin trabajo de parto. A los 40 minutos presenta taquipnea, saturación ligeramente disminuida y requerimiento moderado de oxígeno. La radiografía muestra hiperinsuflación y líquido en las cisuras.`,
    pregunta: "¿Cuál es el mecanismo fisiopatológico predominante?",
    opciones: [
      "Ausencia completa de desarrollo alveolar",
      "Hemorragia pulmonar masiva",
      "Retención de líquido pulmonar fetal",
      "Aspiración de meconio con obstrucción completa",
      "Neumonía bacteriana adquirida varios días después"
    ],
    respuestaCorrecta: 2,
    explicacion: `La taquipnea transitoria se debe a la eliminación retardada del líquido pulmonar fetal. La cesárea sin trabajo de parto aumenta el riesgo al reducir los mecanismos hormonales y mecánicos que favorecen la absorción del líquido. Suele mejorar durante las primeras 24 a 72 horas.`,
    perlaENARM: "Cesárea electiva y taquipnea temprana con líquido en cisuras: sospechar taquipnea transitoria.",
    gpc: {
      mexico: "Consultar guía mexicana vigente sobre dificultad respiratoria neonatal.",
      internacional: "European respiratory guidance for neonatal transition and respiratory disorders."
    },
    bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
  },

  {
    id: "PED-009",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Sepsis neonatal",
    dificultad: "Baja",
    caso: `Recién nacido de 36 semanas con antecedente de fiebre materna intraparto. A las 12 horas presenta rechazo al alimento, inestabilidad térmica y letargo.`,
    pregunta: "¿Qué grupo etiológico debe considerarse prioritariamente en la sepsis neonatal temprana?",
    opciones: [
      "Helmintos intestinales adquiridos por alimentos",
      "Virus de la rabia transmitido por vectores",
      "Mycobacterium leprae como causa habitual",
      "Bacterias adquiridas durante el embarazo o el parto, como estreptococo del grupo B y Escherichia coli",
      "Candida auris como causa exclusiva de infección temprana"
    ],
    respuestaCorrecta: 3,
    explicacion: `La sepsis neonatal temprana suele relacionarse con transmisión vertical de microorganismos maternos. Entre los agentes importantes se encuentran estreptococo del grupo B y E. coli. La presentación puede ser inespecífica, por lo que la inestabilidad térmica, la dificultad respiratoria, la alteración de la alimentación y el letargo requieren evaluación inmediata.`,
    perlaENARM: "La sepsis neonatal puede iniciar con signos inespecíficos; no esperar fiebre para sospecharla.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente de sepsis neonatal.",
      internacional: "NICE guideline on neonatal infection: antibiotics for prevention and treatment."
    },
    bibliografia: "NICE. Neonatal infection: antibiotics for prevention and treatment."
  },

  {
    id: "PED-010",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Enterocolitis necrosante",
    dificultad: "Baja",
    caso: `Prematuro de 28 semanas alimentado por vía enteral que desarrolla distensión abdominal, residuo gástrico aumentado y sangre en las evacuaciones.`,
    pregunta: "¿Qué enfermedad debe sospecharse ante esta combinación de hallazgos?",
    opciones: [
      "Estenosis hipertrófica del píloro",
      "Enterocolitis necrosante",
      "Enfermedad de Hirschsprung de presentación tardía obligatoria",
      "Invaginación intestinal como causa típica en el prematuro extremo",
      "Atresia esofágica aislada"
    ],
    respuestaCorrecta: 1,
    explicacion: `La enterocolitis necrosante es una enfermedad inflamatoria intestinal grave que afecta principalmente a prematuros. La inmadurez de la barrera intestinal, la disbiosis, la respuesta inflamatoria y la alimentación enteral contribuyen a su desarrollo. La distensión abdominal, la intolerancia alimentaria y la sangre en heces son signos de alarma.`,
    perlaENARM: "Prematuro con distensión abdominal, intolerancia alimentaria y sangre en heces: descartar enterocolitis necrosante.",
    gpc: {
      mexico: "Consultar protocolos neonatales mexicanos vigentes para enterocolitis necrosante.",
      internacional: "Neonatal intensive care guidance on necrotizing enterocolitis."
    },
    bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
  },

  {
    id: "PED-011",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Ictericia neonatal",
    dificultad: "Baja",
    caso: `Recién nacido de término que presenta coloración amarillenta de piel y escleras a las 72 horas de vida. Se alimenta adecuadamente, tiene exploración normal y no presenta datos de hemólisis.`,
    pregunta: "¿Cuál es una característica compatible con ictericia fisiológica?",
    opciones: [
      "Aparición durante las primeras cuatro horas de vida",
      "Bilirrubina directa marcadamente elevada en todos los casos",
      "Encefalopatía desde el nacimiento como manifestación obligatoria",
      "Persistencia indefinida sin necesidad de evaluación",
      "Inicio después de las primeras 24 horas, con evolución compatible con la edad posnatal"
    ],
    respuestaCorrecta: 4,
    explicacion: `La ictericia fisiológica suele aparecer después de las primeras 24 horas, como consecuencia de la mayor producción de bilirrubina y de la inmadurez de su conjugación y eliminación. La evaluación debe considerar la edad posnatal en horas, la edad gestacional, los factores de riesgo y la concentración de bilirrubina.`,
    perlaENARM: "La ictericia durante las primeras 24 horas es patológica hasta demostrar lo contrario.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente sobre ictericia neonatal.",
      internacional: "AAP Clinical Practice Guideline for the Management of Hyperbilirubinemia in the Newborn Infant."
    },
    bibliografia: "American Academy of Pediatrics. Clinical Practice Guideline for Management of Hyperbilirubinemia."
  },

  {
    id: "PED-012",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Encefalopatía bilirrubínica",
    dificultad: "Baja",
    caso: `Neonato con hiperbilirrubinemia intensa que evoluciona con letargo, hipotonía inicial y posteriormente alteraciones del tono y del llanto.`,
    pregunta: "¿Qué complicación neurológica debe prevenirse mediante la identificación y el tratamiento oportunos de la hiperbilirrubinemia?",
    opciones: [
      "Kernicterus o encefalopatía bilirrubínica crónica",
      "Mielomeningocele adquirido",
      "Enfermedad de Duchenne neonatal",
      "Atrofia muscular espinal tipo 3 como consecuencia directa",
      "Hidrocefalia obstructiva por estenosis del acueducto en todos los casos"
    ],
    respuestaCorrecta: 0,
    explicacion: `La bilirrubina no conjugada puede atravesar la barrera hematoencefálica y producir lesión neuronal, especialmente en ganglios basales y núcleos auditivos. La toxicidad depende de la concentración, la unión a albúmina, la edad gestacional y otros factores clínicos. El tratamiento se determina mediante umbrales ajustados a edad en horas y riesgo.`,
    perlaENARM: "Hiperbilirrubinemia grave sin tratamiento oportuno puede ocasionar encefalopatía bilirrubínica y secuelas permanentes.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente sobre hiperbilirrubinemia neonatal.",
      internacional: "AAP Clinical Practice Guideline for Management of Hyperbilirubinemia."
    },
    bibliografia: "American Academy of Pediatrics. Management of Hyperbilirubinemia in the Newborn Infant."
  },

  {
    id: "PED-013",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Hipoglucemia neonatal",
    dificultad: "Baja",
    caso: `Hijo de madre con diabetes gestacional que presenta temblores y dificultad para alimentarse durante las primeras horas de vida.`,
    pregunta: "¿Qué alteración metabólica debe descartarse de inmediato?",
    opciones: [
      "Hipercalcemia familiar",
      "Hipernatremia crónica por pérdidas renales obligatorias",
      "Hipoglucemia neonatal",
      "Hipercolesterolemia familiar",
      "Hipermagnesemia por enfermedad ósea"
    ],
    respuestaCorrecta: 2,
    explicacion: `Los hijos de madres con diabetes pueden desarrollar hiperinsulinismo fetal y presentar hipoglucemia después de interrumpirse el aporte materno de glucosa. Los temblores, la irritabilidad, la letargia, la apnea y las convulsiones son manifestaciones posibles. Debe medirse la glucosa y tratarse de acuerdo con los síntomas y el protocolo neonatal.`,
    perlaENARM: "Hijo de madre diabética con temblores o letargo: medir glucosa sin demora.",
    gpc: {
      mexico: "Consultar protocolo mexicano vigente para hipoglucemia neonatal.",
      internacional: "AAP guidance on postnatal glucose homeostasis in at-risk newborns."
    },
    bibliografia: "American Academy of Pediatrics. Postnatal Glucose Homeostasis in Late-Preterm and Term Infants."
  },

  {
    id: "PED-014",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Hipocalcemia neonatal",
    dificultad: "Baja",
    caso: `Recién nacido de bajo peso que presenta irritabilidad, temblores y un episodio convulsivo. La glucemia inmediata se encuentra dentro del rango esperado.`,
    pregunta: "¿Qué alteración electrolítica debe incluirse en la evaluación inicial?",
    opciones: [
      "Hipofosfatemia aislada como explicación universal",
      "Hipocalcemia neonatal",
      "Hiperpotasemia familiar como diagnóstico obligatorio",
      "Hipermagnesemia como única causa posible",
      "Hipernatremia esencial del recién nacido"
    ],
    respuestaCorrecta: 1,
    explicacion: `La hipocalcemia neonatal puede producir irritabilidad neuromuscular, temblores, apnea, prolongación del QT y convulsiones. Entre los factores asociados se encuentran prematuridad, restricción del crecimiento, diabetes materna y enfermedades perinatales. La valoración debe incluir calcio y, según el contexto, magnesio, fósforo y función renal.`,
    perlaENARM: "Convulsiones neonatales: evaluar glucosa, calcio y otros trastornos metabólicos, además de causas neurológicas e infecciosas.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de trastornos metabólicos neonatales.",
      internacional: "Neonatal care guidance on neonatal hypocalcemia."
    },
    bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
  },

  {
    id: "PED-015",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Asfixia perinatal",
    dificultad: "Baja",
    caso: `Recién nacido que requirió reanimación avanzada al nacimiento y posteriormente presenta alteración persistente del estado neurológico y dificultad para mantener una respiración regular.`,
    pregunta: "¿Qué complicación debe evaluarse prioritariamente en este contexto?",
    opciones: [
      "Dermatitis del pañal",
      "Cólico del lactante",
      "Estenosis hipertrófica del píloro",
      "Encefalopatía hipóxico-isquémica",
      "Reflujo gastroesofágico fisiológico"
    ],
    respuestaCorrecta: 3,
    explicacion: `La encefalopatía hipóxico-isquémica es una lesión cerebral asociada con una reducción significativa del aporte de oxígeno y perfusión durante el periodo perinatal. Requiere valoración neurológica, monitorización multiorgánica y determinación temprana de elegibilidad para hipotermia terapéutica en centros capacitados.`,
    perlaENARM: "Depresión neonatal grave seguida de encefalopatía: valorar lesión hipóxico-isquémica y la ventana de hipotermia terapéutica.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente sobre asfixia perinatal y encefalopatía neonatal.",
      internacional: "Neonatal encephalopathy and neurologic outcome guidance."
    },
    bibliografia: "American Academy of Pediatrics. Neonatal Encephalopathy and Neurologic Outcome."
  },

  {
    id: "PED-016",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Profilaxis ocular",
    dificultad: "Baja",
    caso: `Recién nacido asintomático que se encuentra en alojamiento conjunto después de un parto vaginal. No presenta secreción ocular ni hiperemia conjuntival.`,
    pregunta: "¿Cuál es el objetivo principal de la profilaxis ocular neonatal indicada conforme a la normativa local?",
    opciones: [
      "Prevenir la oftalmía neonatal gonocócica",
      "Tratar una catarata congénita",
      "Evitar todas las infecciones virales futuras",
      "Prevenir la retinopatía del prematuro",
      "Eliminar la obstrucción congénita del conducto lagrimal"
    ],
    respuestaCorrecta: 0,
    explicacion: `La profilaxis ocular neonatal tiene como objetivo prevenir principalmente la oftalmía gonocócica, una infección que puede causar lesión corneal grave. La elección del agente y su aplicación deben seguir la normativa nacional vigente. La profilaxis ocular no sustituye el tamizaje ni el tratamiento materno de las infecciones de transmisión sexual.`,
    perlaENARM: "La profilaxis ocular busca prevenir conjuntivitis neonatal gonocócica y sus complicaciones.",
    gpc: {
      mexico: "Consultar la normativa mexicana vigente sobre profilaxis neonatal.",
      internacional: "CDC guidance on gonococcal infections among neonates."
    },
    bibliografia: "Centers for Disease Control and Prevention. Sexually Transmitted Infections Treatment Guidelines."
  },

  {
    id: "PED-017",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Vitamina K",
    dificultad: "Baja",
    caso: `Recién nacido sin antecedentes hemorrágicos que recibe atención inmediata después del parto. Se explica a la familia la indicación de una medida preventiva farmacológica.`,
    pregunta: "¿Qué complicación pretende prevenir principalmente la administración neonatal de vitamina K?",
    opciones: [
      "Enfermedad hemorrágica por deficiencia de vitamina C",
      "Hiperbilirrubinemia fisiológica",
      "Sepsis por estreptococo del grupo B",
      "Retinopatía del prematuro",
      "Sangrado por deficiencia de vitamina K"
    ],
    respuestaCorrecta: 4,
    explicacion: `La vitamina K es necesaria para la gamma-carboxilación de los factores de coagulación II, VII, IX y X, así como de las proteínas C y S. Los recién nacidos tienen reservas reducidas y una microbiota intestinal inmadura. La profilaxis disminuye el riesgo de hemorragia temprana, clásica y tardía por deficiencia de vitamina K.`,
    perlaENARM: "Vitamina K al nacimiento: prevención de hemorragia por deficiencia de vitamina K.",
    gpc: {
      mexico: "Consultar la normativa mexicana vigente de atención neonatal.",
      internacional: "AAP recommendations for vitamin K and prevention of vitamin K deficiency bleeding."
    },
    bibliografia: "American Academy of Pediatrics. Vitamin K and the Newborn Infant."
  },

  {
    id: "PED-018",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Lactancia materna",
    dificultad: "Baja",
    caso: `Madre y recién nacido de término se encuentran clínicamente estables. La madre desea iniciar lactancia y pregunta cuándo debe ofrecer el pecho por primera vez.`,
    pregunta: "¿Cuál es la recomendación general para el inicio de la lactancia materna?",
    opciones: [
      "Esperar 48 horas para evitar aspiración",
      "Iniciar durante la primera hora de vida cuando las condiciones clínicas lo permitan",
      "Ofrecer fórmula obligatoriamente antes de cada toma",
      "Mantener ayuno durante las primeras 24 horas en todos los neonatos",
      "Iniciar exclusivamente después de que aparezca la ictericia"
    ],
    respuestaCorrecta: 1,
    explicacion: `La iniciación temprana de la lactancia favorece el establecimiento de la alimentación, el contacto madre-hijo y la producción de leche. En los recién nacidos estables se recomienda apoyar el inicio durante la primera hora. Las condiciones clínicas maternas o neonatales pueden requerir adaptaciones individualizadas.`,
    perlaENARM: "Lactancia temprana: idealmente durante la primera hora de vida, si madre y recién nacido están estables.",
    gpc: {
      mexico: "Consultar la normativa mexicana vigente de lactancia materna.",
      internacional: "WHO recommendations on breastfeeding initiation and support."
    },
    bibliografia: "World Health Organization. Infant and young child feeding."
  },

  {
    id: "PED-019",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Tamiz neonatal",
    dificultad: "Baja",
    caso: `Recién nacido asintomático que acude a revisión después del egreso. La familia pregunta por qué se requiere una muestra de sangre del talón si el bebé parece sano.`,
    pregunta: "¿Cuál es el propósito fundamental del tamiz neonatal metabólico?",
    opciones: [
      "Confirmar todas las enfermedades genéticas existentes",
      "Sustituir la exploración física durante la infancia",
      "Detectar enfermedades seleccionadas antes de que produzcan manifestaciones clínicas",
      "Descartar cualquier infección adquirida durante el parto",
      "Determinar el coeficiente intelectual futuro con precisión"
    ],
    respuestaCorrecta: 2,
    explicacion: `El tamiz neonatal identifica a recién nacidos con mayor probabilidad de padecer enfermedades seleccionadas que pueden beneficiarse de diagnóstico y tratamiento tempranos. Un resultado anormal requiere pruebas confirmatorias; un resultado normal no descarta todas las enfermedades ni sustituye el seguimiento clínico.`,
    perlaENARM: "Tamiz positivo no equivale a diagnóstico confirmado; requiere evaluación confirmatoria oportuna.",
    gpc: {
      mexico: "Consultar la normativa mexicana vigente sobre tamiz neonatal.",
      internacional: "WHO guidance on screening and early detection of congenital disorders."
    },
    bibliografia: "Secretaría de Salud de México. Normativa vigente de tamiz neonatal."
  },

  {
    id: "PED-020",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Exploración neonatal",
    dificultad: "Baja",
    caso: `En la exploración de un recién nacido de término se observa una fontanela anterior plana y blanda, sin vómitos, fiebre ni alteraciones del estado de alerta.`,
    pregunta: "¿Cómo debe interpretarse este hallazgo aislado?",
    opciones: [
      "Como dato suficiente para diagnosticar meningitis",
      "Como evidencia de hipertensión intracraneal grave",
      "Como criterio definitivo de deshidratación",
      "Como un hallazgo habitual en un recién nacido sin otros signos de alarma",
      "Como indicación obligatoria de punción lumbar"
    ],
    respuestaCorrecta: 3,
    explicacion: `La fontanela anterior normalmente es blanda y puede encontrarse plana en un recién nacido sano. Su abombamiento persistente en un lactante tranquilo o su hundimiento marcado, interpretados junto con el contexto clínico, pueden orientar a enfermedad. Ningún hallazgo aislado debe sustituir la valoración integral.`,
    perlaENARM: "Interpretar la fontanela junto con posición, llanto, hidratación, signos neurológicos y estado general.",
    gpc: {
      mexico: "Consultar normativa mexicana vigente para exploración neonatal.",
      internacional: "AAP guidance on routine newborn assessment."
    },
    bibliografia: "American Academy of Pediatrics. Guidelines for Perinatal Care."
  },

  {
    id: "PED-021",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Termorregulación",
    dificultad: "Baja",
    caso: `Prematuro que permanece sin protección térmica suficiente después del nacimiento presenta descenso de temperatura corporal y aumento del consumo de oxígeno.`,
    pregunta: "¿Qué mecanismo explica principalmente la producción de calor en el recién nacido?",
    opciones: [
      "Termogénesis sin escalofríos mediante tejido adiposo pardo",
      "Escalofríos intensos como principal mecanismo neonatal",
      "Contracción voluntaria de grandes grupos musculares",
      "Aumento del metabolismo óseo exclusivamente",
      "Producción de calor por sudoración profusa"
    ],
    respuestaCorrecta: 0,
    explicacion: `El recién nacido produce calor principalmente mediante termogénesis sin escalofríos, utilizando tejido adiposo pardo. La relación superficie corporal-peso elevada, la escasa grasa subcutánea y la inmadurez de los mecanismos de regulación favorecen la pérdida de calor, especialmente en prematuros.`,
    perlaENARM: "La hipotermia neonatal aumenta el consumo de oxígeno y glucosa; prevenirla es parte de la estabilización inicial.",
    gpc: {
      mexico: "Consultar normativa mexicana vigente de atención neonatal inmediata.",
      internacional: "WHO recommendations on thermal protection of newborns."
    },
    bibliografia: "World Health Organization. Thermal protection of the newborn."
  },

  {
    id: "PED-022",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Conducto arterioso persistente",
    dificultad: "Baja",
    caso: `Prematuro de 27 semanas que durante su evolución presenta soplo continuo, pulsos saltones y aumento del requerimiento respiratorio. El ecocardiograma identifica persistencia del conducto arterioso con cortocircuito de izquierda a derecha.`,
    pregunta: "¿Qué cambio hemodinámico explica mejor los hallazgos cuando el cortocircuito es significativo?",
    opciones: [
      "Disminución obligatoria del flujo pulmonar",
      "Aumento de la resistencia sistémica causado por obstrucción aórtica",
      "Ausencia completa de retorno venoso pulmonar",
      "Cortocircuito permanente de derecha a izquierda en todos los pacientes",
      "Aumento del flujo pulmonar y posible sobrecarga de volumen izquierda"
    ],
    respuestaCorrecta: 4,
    explicacion: `Tras el descenso de la resistencia vascular pulmonar, un conducto arterioso persistente puede generar flujo de la aorta hacia la arteria pulmonar. Si el cortocircuito es hemodinámicamente significativo, aumenta el flujo pulmonar y el retorno venoso a las cavidades izquierdas. La indicación terapéutica depende de la repercusión clínica y ecocardiográfica.`,
    perlaENARM: "Conducto arterioso significativo: valorar repercusión hemodinámica, no solamente la presencia de un soplo.",
    gpc: {
      mexico: "Consultar protocolos neonatales mexicanos vigentes sobre conducto arterioso persistente.",
      internacional: "Neonatal guidance on patent ductus arteriosus in preterm infants."
    },
    bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
  },

  {
    id: "PED-023",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Retinopatía del prematuro",
    dificultad: "Baja",
    caso: `Prematuro de 26 semanas con peso de 850 g que requiere oxígeno y soporte respiratorio. El equipo neonatal programa evaluaciones oftalmológicas seriadas.`,
    pregunta: "¿Qué estructura y proceso fisiopatológico están implicados en la enfermedad que se busca detectar?",
    opciones: [
      "Córnea, por depósito de calcio relacionado con hipervitaminosis",
      "Vasculatura retiniana inmadura con alteración de la angiogénesis",
      "Cristalino, por opacificación senil",
      "Nervio óptico, por degeneración propia de la edad",
      "Esclera, por inflamación autoinmunitaria neonatal habitual"
    ],
    respuestaCorrecta: 1,
    explicacion: `La retinopatía del prematuro afecta a la vascularización retiniana inmadura. La exposición a condiciones de oxigenación y los cambios posteriores en factores angiogénicos pueden conducir a proliferación vascular anormal. La detección depende de la edad gestacional, el peso y los criterios del programa de tamizaje correspondiente.`,
    perlaENARM: "Prematuridad extrema y bajo peso: seguimiento oftalmológico para detectar retinopatía del prematuro.",
    gpc: {
      mexico: "Consultar criterios mexicanos vigentes de tamizaje oftalmológico neonatal.",
      internacional: "AAP guidance on screening examination of premature infants for retinopathy of prematurity."
    },
    bibliografia: "American Academy of Pediatrics. Screening Examination of Premature Infants for Retinopathy of Prematurity."
  },

  {
    id: "PED-024",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Apnea de la prematuridad",
    dificultad: "Baja",
    caso: `Prematuro de 29 semanas presenta episodios de pausa respiratoria acompañados de desaturación, sin evidencia inicial de infección, obstrucción anatómica o alteración metabólica.`,
    pregunta: "¿Qué mecanismo favorece la apnea de la prematuridad?",
    opciones: [
      "Maduración completa y excesiva del control respiratorio",
      "Hipertrofia de los músculos respiratorios como causa exclusiva",
      "Inmadurez del control central de la respiración y de la respuesta ventilatoria",
      "Cierre anatómico prematuro de todos los bronquios",
      "Producción excesiva de surfactante como mecanismo único"
    ],
    respuestaCorrecta: 2,
    explicacion: `La apnea de la prematuridad se relaciona con inmadurez del control respiratorio central y de la respuesta a cambios de dióxido de carbono y oxígeno. Antes de atribuir episodios a prematuridad, deben considerarse sepsis, anemia, alteraciones metabólicas, medicamentos y otros trastornos clínicos.`,
    perlaENARM: "En el prematuro, apnea nueva o agravada obliga a buscar causas secundarias antes de asumir inmadurez aislada.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de vigilancia del prematuro.",
      internacional: "Neonatal care guidance on apnea of prematurity."
    },
    bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
  },

  {
    id: "PED-025",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Infecciones connatales",
    dificultad: "Baja",
    caso: `Recién nacido con antecedente materno de infección por Treponema pallidum sin tratamiento documentado durante el embarazo. Presenta lesiones cutáneas y rinorrea persistente.`,
    pregunta: "¿Qué infección congénita debe investigarse prioritariamente?",
    opciones: [
      "Sífilis congénita",
      "Toxoplasmosis exclusivamente ocular",
      "Infección por rotavirus",
      "Varicela posnatal adquirida por alimentos",
      "Infección por Helicobacter pylori"
    ],
    respuestaCorrecta: 0,
    explicacion: `La sífilis congénita puede presentarse con manifestaciones sistémicas, cutáneas, hematológicas, óseas y mucosas. El antecedente de infección materna no tratada o tratada de forma inadecuada exige evaluación neonatal y tratamiento según la historia materna, la exploración y las pruebas serológicas.`,
    perlaENARM: "Ante sífilis materna sin tratamiento adecuado, evaluar al neonato incluso si inicialmente parece sano.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente sobre sífilis congénita.",
      internacional: "CDC Sexually Transmitted Infections Treatment Guidelines."
    },
    bibliografia: "Centers for Disease Control and Prevention. Congenital Syphilis."
  },

  {
    id: "PED-026",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Hijo de madre diabética",
    dificultad: "Baja",
    caso: `Recién nacido grande para la edad gestacional, hijo de madre con diabetes pregestacional. Durante la exploración se observa aumento del grosor de los hombros y dificultad para movilizar una extremidad después de un parto complicado.`,
    pregunta: "¿Qué lesión obstétrica debe considerarse ante estos antecedentes?",
    opciones: [
      "Fractura espontánea de cadera por osteoporosis senil",
      "Luxación degenerativa del hombro",
      "Artritis séptica adquirida en la adolescencia",
      "Lesión del plexo braquial asociada con distocia de hombros",
      "Ruptura espontánea del tendón de Aquiles"
    ],
    respuestaCorrecta: 3,
    explicacion: `La macrosomía fetal aumenta el riesgo de distocia de hombros y lesiones obstétricas, incluidas lesión del plexo braquial y fracturas de clavícula o húmero. La evaluación debe documentar la movilidad, los reflejos, la simetría y la sensibilidad, con seguimiento según el tipo de lesión.`,
    perlaENARM: "Macrosomía y distocia de hombros: buscar lesión del plexo braquial y fractura de clavícula.",
    gpc: {
      mexico: "Consultar normativa mexicana vigente de atención del parto y del recién nacido.",
      internacional: "AAP guidance on neonatal brachial plexus palsy."
    },
    bibliografia: "American Academy of Pediatrics. Neonatal Brachial Plexus Palsy."
  },

  {
    id: "PED-027",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Atresia esofágica",
    dificultad: "Baja",
    caso: `Recién nacido que presenta salivación excesiva, tos y episodios de cianosis durante el primer intento de alimentación. No se consigue avanzar una sonda orogástrica hasta el estómago.`,
    pregunta: "¿Qué malformación debe sospecharse?",
    opciones: [
      "Estenosis hipertrófica del píloro",
      "Atresia esofágica, con o sin fístula traqueoesofágica",
      "Enfermedad celíaca neonatal",
      "Invaginación intestinal",
      "Hernia inguinal reducible"
    ],
    respuestaCorrecta: 1,
    explicacion: `La atresia esofágica suele manifestarse con incapacidad para manejar secreciones, tos, cianosis y dificultad durante la alimentación. La imposibilidad de avanzar una sonda y la radiografía pueden apoyar el diagnóstico. Debe evitarse la alimentación oral y prevenir la aspiración mientras se organiza la valoración quirúrgica.`,
    perlaENARM: "Sialorrea más imposibilidad de avanzar una sonda orogástrica: sospechar atresia esofágica.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de malformaciones congénitas y cirugía neonatal.",
      internacional: "Pediatric surgical guidance on esophageal atresia and tracheoesophageal fistula."
    },
    bibliografia: "Ashcraft's Pediatric Surgery."
  },

  {
    id: "PED-028",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Hernia diafragmática congénita",
    dificultad: "Baja",
    caso: `Recién nacido con dificultad respiratoria intensa desde el nacimiento, abdomen excavado y disminución de los ruidos respiratorios en un hemitórax. La imagen muestra asas intestinales en el tórax.`,
    pregunta: "¿Qué alteración explica la gravedad respiratoria de esta malformación?",
    opciones: [
      "Aumento aislado del volumen alveolar sin afectación vascular",
      "Hipertrofia pulmonar compensadora completa",
      "Exceso de surfactante en ambos pulmones",
      "Obstrucción intestinal funcional sin compromiso torácico",
      "Hipoplasia pulmonar y posible hipertensión pulmonar persistente"
    ],
    respuestaCorrecta: 4,
    explicacion: `La hernia diafragmática congénita permite el desplazamiento de vísceras abdominales al tórax y altera el desarrollo pulmonar. La hipoplasia pulmonar y la remodelación vascular pueden producir hipertensión pulmonar grave. La estabilización respiratoria y hemodinámica precede habitualmente a la reparación quirúrgica.`,
    perlaENARM: "Hernia diafragmática congénita: priorizar estabilización y evitar ventilación con mascarilla que distienda el intestino.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de estabilización neonatal y cirugía pediátrica.",
      internacional: "Congenital diaphragmatic hernia management guidelines."
    },
    bibliografia: "Ashcraft's Pediatric Surgery."
  },

  {
    id: "PED-029",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Obstrucción intestinal neonatal",
    dificultad: "Baja",
    caso: `Recién nacido de término que presenta vómito verde durante las primeras horas de vida y distensión abdominal progresiva.`,
    pregunta: "¿Qué conducta general debe priorizarse mientras se investiga la causa?",
    opciones: [
      "Considerar una urgencia quirúrgica, suspender la vía oral y evaluar obstrucción intestinal",
      "Indicar alimentación abundante para estimular el peristaltismo",
      "Atribuir el vómito a reflujo fisiológico sin evaluación",
      "Administrar antidiarreicos y egresar",
      "Esperar varios días antes de solicitar estudios"
    ],
    respuestaCorrecta: 0,
    explicacion: `El vómito bilioso neonatal debe considerarse obstrucción intestinal hasta demostrar lo contrario. Entre las causas se encuentran malrotación con vólvulo, atresias intestinales y otras anomalías. Deben suspenderse las tomas, realizar estabilización, descompresión según indicación y valoración urgente por cirugía pediátrica.`,
    perlaENARM: "Vómito bilioso en un neonato: descartar malrotación y vólvulo intestinal de forma urgente.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de urgencias quirúrgicas neonatales.",
      internacional: "Pediatric surgical guidance on neonatal bilious vomiting."
    },
    bibliografia: "Ashcraft's Pediatric Surgery."
  },

  {
    id: "PED-030",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Alta neonatal",
    dificultad: "Baja",
    caso: `Recién nacido de término clínicamente estable, con alimentación establecida, exploración sin hallazgos preocupantes y familia preparada para el egreso.`,
    pregunta: "¿Cuál de las siguientes medidas forma parte de una preparación segura para el alta?",
    opciones: [
      "Omitir la revisión de la alimentación si el peso al nacer fue normal",
      "Suspender el seguimiento hasta el primer año",
      "Verificar alimentación, prevención, tamizajes, educación familiar y seguimiento oportuno",
      "Evitar explicar los signos de alarma para no generar ansiedad",
      "Dar el alta sin comprobar estabilidad térmica"
    ],
    respuestaCorrecta: 2,
    explicacion: `El alta neonatal requiere valorar estabilidad clínica, alimentación, eliminación, riesgo de hiperbilirrubinemia, tamizajes correspondientes, prevención y capacidad familiar para los cuidados. Debe establecerse seguimiento oportuno y explicar signos de alarma como fiebre, dificultad respiratoria, rechazo persistente del alimento, letargo o ictericia progresiva.`,
    perlaENARM: "Alta segura: estabilidad clínica, alimentación, prevención, tamizajes y seguimiento documentado.",
    gpc: {
      mexico: "Consultar normativa mexicana vigente de atención del recién nacido sano.",
      internacional: "AAP guidance on hospital stay for healthy term newborns."
    },
    bibliografia: "American Academy of Pediatrics. Guidelines for Perinatal Care."
  },
  {
    id: "PED-031",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Reanimación neonatal",
    dificultad: "Media",
    caso: `Recién nacido de término que, después de los pasos iniciales, permanece en apnea y presenta frecuencia cardiaca de 70 lpm. Se inicia ventilación con presión positiva, pero el tórax no muestra expansión y la frecuencia cardiaca no aumenta.`,
    pregunta: "¿Qué acción debe realizarse para corregir la ventilación ineficaz?",
    opciones: [
      "Iniciar compresiones torácicas sin modificar la ventilación",
      "Administrar adrenalina por vía endotraqueal como primera intervención",
      "Suspender la ventilación y observar durante un minuto",
      "Corregir el sello de la mascarilla, reposicionar la vía aérea y comprobar la expansión torácica",
      "Administrar bicarbonato de sodio inmediatamente"
    ],
    respuestaCorrecta: 3,
    explicacion: `La ausencia de expansión torácica y de respuesta de la frecuencia cardiaca indica que la ventilación puede ser ineficaz. Deben realizarse maniobras correctivas: ajustar la mascarilla, reposicionar la cabeza, aspirar secreciones si existe obstrucción, abrir la boca y aumentar gradualmente la presión según la respuesta. Si no se consigue ventilación efectiva, debe considerarse una vía aérea alternativa. Las compresiones se indican cuando la frecuencia cardiaca permanece por debajo de 60 lpm después de al menos 30 segundos de ventilación efectiva.`,
    perlaENARM: "En reanimación neonatal, corregir la ventilación antes de escalar a compresiones o fármacos.",
    gpc: {
      mexico: "Consultar el protocolo mexicano vigente de reanimación neonatal.",
      internacional: "American Academy of Pediatrics. Neonatal Resuscitation Program."
    },
    bibliografia: "American Academy of Pediatrics. Textbook of Neonatal Resuscitation."
  },
  {
    id: "PED-032",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Reanimación neonatal avanzada",
    dificultad: "Media",
    caso: `Recién nacido que recibió ventilación efectiva durante 30 segundos y posteriormente compresiones torácicas coordinadas con ventilación. La frecuencia cardiaca permanece en 45 lpm pese a comprobar la expansión torácica y la colocación de la vía aérea.`,
    pregunta: "¿Qué medicamento está indicado durante la reanimación avanzada?",
    opciones: [
      "Adrenalina, siguiendo la dosis y vía recomendadas para reanimación neonatal",
      "Atropina como tratamiento rutinario de la bradicardia neonatal",
      "Adenosina para aumentar la frecuencia sinusal",
      "Digoxina intravenosa",
      "Amiodarona como primera línea para cualquier bradicardia"
    ],
    respuestaCorrecta: 0,
    explicacion: `Si la frecuencia cardiaca permanece por debajo de 60 lpm después de ventilación efectiva y compresiones coordinadas, se indica adrenalina conforme al algoritmo de reanimación neonatal. Deben verificarse la vía de administración, la concentración y la dosis protocolizada, así como considerar hipovolemia cuando existan antecedentes compatibles.`,
    perlaENARM: "Adrenalina neonatal: considerar cuando persiste frecuencia cardiaca menor de 60 lpm pese a ventilación efectiva y compresiones adecuadas.",
    gpc: {
      mexico: "Consultar el algoritmo mexicano vigente de reanimación neonatal.",
      internacional: "American Academy of Pediatrics. Neonatal Resuscitation Program."
    },
    bibliografia: "American Academy of Pediatrics. Textbook of Neonatal Resuscitation."
  },

  {
    id: "PED-033",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Síndrome de dificultad respiratoria",
    dificultad: "Media",
    caso: `Prematuro de 29 semanas con quejido, retracciones y necesidad creciente de oxígeno. La radiografía de tórax muestra volúmenes pulmonares bajos y un patrón reticulogranular difuso con broncograma aéreo.`,
    pregunta: "¿Qué mecanismo explica la combinación radiológica y clínica?",
    opciones: [
      "Acumulación exclusiva de líquido pleural",
      "Obstrucción de la vía aérea por cuerpo extraño",
      "Edema cardiogénico por cardiopatía congénita cianógena como explicación obligatoria",
      "Hiperventilación con expansión alveolar excesiva",
      "Deficiencia de surfactante con atelectasias difusas"
    ],
    respuestaCorrecta: 4,
    explicacion: `El déficit de surfactante aumenta la tensión superficial alveolar y reduce la distensibilidad pulmonar. Esto favorece atelectasias, disminución del volumen pulmonar y alteración del intercambio gaseoso. La combinación de prematuridad, dificultad respiratoria temprana y patrón reticulogranular con broncograma aéreo es característica del síndrome de dificultad respiratoria neonatal.`,
    perlaENARM: "Prematuridad más bajo volumen pulmonar y patrón reticulogranular: síndrome de dificultad respiratoria por déficit de surfactante.",
    gpc: {
      mexico: "Consultar la guía mexicana vigente de dificultad respiratoria neonatal.",
      internacional: "European Consensus Guidelines on the Management of Respiratory Distress Syndrome."
    },
    bibliografia: "European Consensus Guidelines on the Management of Respiratory Distress Syndrome."
  },

  {
    id: "PED-034",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Surfactante pulmonar",
    dificultad: "Media",
    caso: `Prematuro de 27 semanas con síndrome de dificultad respiratoria que recibe soporte no invasivo. A pesar de optimizar la presión y comprobar la posición de la interfaz, aumenta el requerimiento de oxígeno y persisten retracciones importantes.`,
    pregunta: "¿Qué tratamiento específico debe valorarse según la gravedad y el protocolo de la unidad?",
    opciones: [
      "Diurético de asa como tratamiento etiológico universal",
      "Administración de surfactante exógeno",
      "Antibiótico oral como sustituto del soporte respiratorio",
      "Restricción absoluta de líquidos durante varios días",
      "Administración rutinaria de broncodilatadores para corregir el déficit"
    ],
    respuestaCorrecta: 1,
    explicacion: `El surfactante exógeno reduce la tensión superficial y mejora la mecánica pulmonar en prematuros con síndrome de dificultad respiratoria. La decisión depende de la evolución, la necesidad de oxígeno, el soporte utilizado y los criterios del protocolo vigente. Cuando es posible, las estrategias menos invasivas de administración disminuyen la necesidad de ventilación mecánica en pacientes seleccionados.`,
    perlaENARM: "El surfactante trata la fisiopatología del síndrome de dificultad respiratoria; no sustituye la evaluación de otras causas de deterioro.",
    gpc: {
      mexico: "Consultar la guía mexicana vigente de síndrome de dificultad respiratoria neonatal.",
      internacional: "European Consensus Guidelines on the Management of Respiratory Distress Syndrome."
    },
    bibliografia: "European Consensus Guidelines on the Management of Respiratory Distress Syndrome."
  },

  {
    id: "PED-035",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Taquipnea transitoria del recién nacido",
    dificultad: "Media",
    caso: `Recién nacido de 38 semanas obtenido por cesárea sin trabajo de parto. Presenta frecuencia respiratoria de 76 rpm, saturación de 91% y retracciones leves durante las primeras horas. La radiografía muestra hiperinsuflación y líquido en las cisuras; no hay fiebre materna ni datos de infección.`,
    pregunta: "¿Qué evolución es más compatible con el diagnóstico sospechado?",
    opciones: [
      "Progresión inevitable hacia fibrosis pulmonar irreversible",
      "Desarrollo obligatorio de hipertensión pulmonar grave",
      "Resolución habitual durante las primeras 24 a 72 horas con soporte según necesidad",
      "Aparición característica después de una semana de vida",
      "Necesidad universal de ventilación invasiva prolongada"
    ],
    respuestaCorrecta: 2,
    explicacion: `La taquipnea transitoria suele mejorar conforme se reabsorbe el líquido pulmonar retenido. El manejo es principalmente de soporte, con vigilancia de oxigenación, trabajo respiratorio y capacidad de alimentación. Una evolución atípica, el deterioro progresivo o la persistencia prolongada deben motivar la búsqueda de otras causas.`,
    perlaENARM: "La taquipnea transitoria suele ser autolimitada; el deterioro progresivo obliga a reconsiderar el diagnóstico.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes para dificultad respiratoria neonatal.",
      internacional: "Neonatal respiratory care guidance."
    },
    bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
  },

  {
    id: "PED-036",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Aspiración de meconio",
    dificultad: "Media",
    caso: `Recién nacido de 41 semanas con líquido amniótico meconial presenta dificultad respiratoria poco después del nacimiento. La radiografía muestra opacidades pulmonares parcheadas e hiperinsuflación. Requiere oxígeno y vigilancia hemodinámica.`,
    pregunta: "¿Qué complicación vascular puede acompañar a este cuadro y agravar la hipoxemia?",
    opciones: [
      "Hipertensión pulmonar persistente del recién nacido",
      "Hipertensión portal congénita como mecanismo principal",
      "Trombosis de la vena porta como complicación obligatoria",
      "Coartación aórtica adquirida por aspiración",
      "Insuficiencia venosa periférica"
    ],
    respuestaCorrecta: 0,
    explicacion: `La aspiración de meconio puede producir obstrucción de vías aéreas, inflamación, inactivación del surfactante y alteraciones ventilación-perfusión. En los casos graves puede coexistir hipertensión pulmonar persistente, que mantiene cortocircuitos de derecha a izquierda y contribuye a la hipoxemia refractaria.`,
    perlaENARM: "Aspiración de meconio con hipoxemia desproporcionada o refractaria: valorar hipertensión pulmonar persistente.",
    gpc: {
      mexico: "Consultar la normativa mexicana vigente de atención del recién nacido con dificultad respiratoria.",
      internacional: "Neonatal respiratory care guidance on meconium aspiration syndrome."
    },
    bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
  },

  {
    id: "PED-037",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Sepsis neonatal temprana",
    dificultad: "Media",
    caso: `Recién nacido de 35 semanas con ruptura prolongada de membranas y fiebre materna intraparto. A las 8 horas presenta apnea, rechazo del alimento e inestabilidad térmica. Se sospecha sepsis neonatal temprana.`,
    pregunta: "¿Cuál es la conducta inicial más apropiada ante la sospecha de infección invasiva?",
    opciones: [
      "Esperar el resultado del hemocultivo antes de iniciar cualquier intervención",
      "Indicar únicamente probióticos y observación domiciliaria",
      "Administrar antibióticos por vía oral y permitir la alimentación habitual sin reevaluación",
      "Obtener cultivos sin retrasar el tratamiento e iniciar antibióticos empíricos intravenosos según el protocolo local",
      "Descartar sepsis porque no existe fiebre neonatal"
    ],
    respuestaCorrecta: 3,
    explicacion: `La sepsis neonatal puede manifestarse con signos inespecíficos y sin fiebre. En un neonato sintomático con factores de riesgo, se requiere evaluación inmediata, hemocultivo cuando sea posible antes del antibiótico y tratamiento empírico intravenoso sin retrasos clínicamente relevantes. La elección del esquema depende de la epidemiología local, los factores maternos y el riesgo de resistencia.`,
    perlaENARM: "Ante sospecha fundada de sepsis neonatal sintomática, los cultivos no deben retrasar el inicio del tratamiento.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente sobre sepsis neonatal.",
      internacional: "NICE. Neonatal infection: antibiotics for prevention and treatment."
    },
    bibliografia: "NICE. Neonatal infection: antibiotics for prevention and treatment."
  },

  {
    id: "PED-038",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Sepsis neonatal tardía",
    dificultad: "Media",
    caso: `Prematuro de 30 semanas hospitalizado durante tres semanas con catéter venoso central. Presenta apnea nueva, intolerancia alimentaria, inestabilidad térmica y aumento del requerimiento de oxígeno.`,
    pregunta: "¿Qué estrategia diagnóstica debe incluirse prioritariamente?",
    opciones: [
      "Solicitar únicamente coproparasitoscópico",
      "Realizar evaluación para infección invasiva con cultivos apropiados, incluyendo valoración del catéter y del estado clínico",
      "Atribuir todos los hallazgos a la prematuridad sin estudios",
      "Realizar prueba de esfuerzo cardiopulmonar",
      "Solicitar exclusivamente anticuerpos antinucleares"
    ],
    respuestaCorrecta: 1,
    explicacion: `La sepsis neonatal tardía puede asociarse con dispositivos intravasculares, hospitalización prolongada y microorganismos adquiridos en el entorno sanitario. La evaluación debe buscar bacteriemia y posibles focos de infección. La toma de cultivos y las decisiones sobre el catéter dependen de la estabilidad del paciente, el microorganismo sospechado y el protocolo institucional.`,
    perlaENARM: "En el prematuro hospitalizado, apnea e intolerancia alimentaria de nueva aparición pueden ser manifestaciones iniciales de sepsis.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de infección asociada a la atención sanitaria neonatal.",
      internacional: "NICE. Neonatal infection: antibiotics for prevention and treatment."
    },
    bibliografia: "NICE. Neonatal infection: antibiotics for prevention and treatment."
  },

  {
    id: "PED-039",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Meningitis neonatal",
    dificultad: "Media",
    caso: `Neonato de 12 días con rechazo del alimento, irritabilidad, temperatura inestable y episodios de apnea. No presenta rigidez de nuca evidente.`,
    pregunta: "¿Qué afirmación describe mejor la presentación de meningitis en este grupo etario?",
    opciones: [
      "La rigidez de nuca es indispensable para establecer sospecha",
      "La ausencia de fiebre excluye infección meníngea",
      "La exploración neurológica normal descarta meningitis con certeza",
      "Las convulsiones son incompatibles con infección neonatal",
      "Puede manifestarse con signos inespecíficos y requiere evaluación urgente cuando existe sospecha"
    ],
    respuestaCorrecta: 4,
    explicacion: `La meningitis neonatal puede presentarse con letargo, irritabilidad, apnea, mala alimentación, inestabilidad térmica o convulsiones, sin los signos meníngeos clásicos del adulto. La evaluación requiere valoración clínica, estudios microbiológicos y punción lumbar cuando esté indicada y sea segura. En pacientes inestables, la estabilización y el tratamiento antimicrobiano no deben retrasarse.`,
    perlaENARM: "En neonatos, la ausencia de rigidez de nuca no descarta meningitis.",
    gpc: {
      mexico: "Consultar la guía mexicana vigente sobre meningitis neonatal y sepsis.",
      internacional: "NICE. Neonatal infection: antibiotics for prevention and treatment."
    },
    bibliografia: "NICE. Neonatal infection: antibiotics for prevention and treatment."
  },

  {
    id: "PED-040",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Ictericia neonatal",
    dificultad: "Media",
    caso: `Recién nacido de 18 horas de vida que presenta ictericia visible. La madre es grupo O Rh positivo y el neonato grupo A Rh positivo. La bilirrubina aumenta rápidamente y la hemoglobina está disminuida.`,
    pregunta: "¿Qué mecanismo debe investigarse prioritariamente?",
    opciones: [
      "Ictericia fisiológica por inmadurez hepática como única explicación posible",
      "Colestasis obstructiva crónica como diagnóstico establecido",
      "Hemólisis inmunitaria por incompatibilidad ABO",
      "Síndrome de Gilbert como causa habitual de hemólisis neonatal intensa",
      "Atresia de vías biliares como explicación obligatoria durante las primeras horas"
    ],
    respuestaCorrecta: 2,
    explicacion: `La ictericia durante las primeras 24 horas es un signo de alarma. La incompatibilidad ABO puede ocasionar hemólisis, hiperbilirrubinemia de evolución rápida y anemia. Deben evaluarse la bilirrubina total y directa, la hemoglobina, los reticulocitos, el frotis y la prueba de antiglobulina directa según el contexto clínico.`,
    perlaENARM: "Ictericia precoz más anemia y aumento rápido de bilirrubina: investigar hemólisis.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente de hiperbilirrubinemia neonatal.",
      internacional: "AAP Clinical Practice Guideline for Management of Hyperbilirubinemia."
    },
    bibliografia: "American Academy of Pediatrics. Clinical Practice Guideline for Management of Hyperbilirubinemia."
  },

  {
    id: "PED-041",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Fototerapia neonatal",
    dificultad: "Media",
    caso: `Recién nacido de 38 semanas con bilirrubina sérica por encima del umbral de fototerapia correspondiente a su edad posnatal. No presenta signos de encefalopatía bilirrubínica.`,
    pregunta: "¿Cuál es el mecanismo terapéutico principal de la fototerapia?",
    opciones: [
      "Transformar la bilirrubina en fotoisómeros más hidrosolubles que pueden eliminarse sin conjugación hepática convencional",
      "Estimular la producción de eritrocitos para diluir la bilirrubina",
      "Bloquear por completo la producción intestinal de bilirrubina",
      "Aumentar la hemólisis para acelerar el recambio eritrocitario",
      "Inducir lesión hepatocelular controlada para aumentar la conjugación"
    ],
    respuestaCorrecta: 0,
    explicacion: `La fototerapia modifica la estructura de la bilirrubina mediante fotoisomerización y otros procesos fotoquímicos, generando productos que pueden eliminarse sin depender exclusivamente de la conjugación hepática. La indicación y la intensidad se determinan mediante umbrales específicos de edad posnatal, edad gestacional y factores de riesgo.`,
    perlaENARM: "La fototerapia facilita la eliminación de bilirrubina; el umbral terapéutico depende de la edad en horas y del riesgo clínico.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente sobre hiperbilirrubinemia neonatal.",
      internacional: "AAP Clinical Practice Guideline for Management of Hyperbilirubinemia."
    },
    bibliografia: "American Academy of Pediatrics. Management of Hyperbilirubinemia in the Newborn Infant."
  },

  {
    id: "PED-042",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Hiperbilirrubinemia conjugada",
    dificultad: "Media",
    caso: `Lactante de 18 días con ictericia persistente, hepatomegalia y evacuaciones hipocolóricas. La bilirrubina directa se encuentra elevada.`,
    pregunta: "¿Qué diagnóstico requiere una evaluación prioritaria por el riesgo de daño hepático progresivo?",
    opciones: [
      "Ictericia fisiológica prolongada como explicación suficiente",
      "Síndrome de dificultad respiratoria neonatal",
      "Hipoglucemia transitoria aislada",
      "Atresia de vías biliares",
      "Taquipnea transitoria del recién nacido"
    ],
    respuestaCorrecta: 3,
    explicacion: `La hiperbilirrubinemia conjugada es patológica y requiere investigación. La atresia de vías biliares puede manifestarse con ictericia persistente, heces hipocolóricas o acólicas y hepatomegalia. La referencia oportuna es esencial porque el resultado del tratamiento quirúrgico se relaciona con la edad al momento de la intervención.`,
    perlaENARM: "Ictericia persistente con bilirrubina directa elevada y heces pálidas: descartar atresia de vías biliares.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de colestasis neonatal.",
      internacional: "NASPGHAN/ESPGHAN guidance on cholestatic jaundice in infants."
    },
    bibliografia: "NASPGHAN/ESPGHAN. Guidance on the Evaluation of Cholestatic Jaundice in Infants."
  },

  {
    id: "PED-043",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Enfermedad hemorrágica por deficiencia de vitamina K",
    dificultad: "Media",
    caso: `Lactante de 5 semanas alimentado exclusivamente con leche materna, sin profilaxis documentada con vitamina K al nacimiento. Presenta equimosis y sangrado gastrointestinal. Las plaquetas son normales y el tiempo de protrombina está prolongado.`,
    pregunta: "¿Qué alteración explica mejor este patrón?",
    opciones: [
      "Trombocitopenia inmunitaria grave",
      "Deficiencia de vitamina K con disminución funcional de factores dependientes de ella",
      "Hemofilia A con prolongación aislada del tiempo de protrombina",
      "Enfermedad de von Willebrand como causa obligatoria de todos los casos",
      "Púrpura trombótica trombocitopénica neonatal"
    ],
    respuestaCorrecta: 1,
    explicacion: `La deficiencia de vitamina K reduce la actividad de los factores II, VII, IX y X y puede prolongar el tiempo de protrombina antes de afectar otros parámetros. La forma tardía puede presentarse con hemorragia intracraneal. Requiere evaluación urgente, tratamiento y búsqueda de factores predisponentes como colestasis o malabsorción.`,
    perlaENARM: "Lactante pequeño sin profilaxis de vitamina K y con sangrado: considerar deficiencia de vitamina K, incluida hemorragia intracraneal.",
    gpc: {
      mexico: "Consultar normativa mexicana vigente sobre vitamina K neonatal.",
      internacional: "AAP recommendations on vitamin K deficiency bleeding."
    },
    bibliografia: "American Academy of Pediatrics. Vitamin K and the Newborn Infant."
  },

  {
    id: "PED-044",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Hipoglucemia neonatal persistente",
    dificultad: "Media",
    caso: `Hijo de madre diabética con episodios repetidos de hipoglucemia que persisten más allá de las primeras 48 a 72 horas, pese a una alimentación adecuada. Durante uno de los episodios, la insulina no está suprimida y los ácidos grasos libres son bajos.`,
    pregunta: "¿Qué mecanismo debe considerarse?",
    opciones: [
      "Déficit aislado de hierro",
      "Hiperparatiroidismo neonatal",
      "Producción excesiva de bilirrubina",
      "Diabetes mellitus tipo 1 como causa de hipoglucemia hiperinsulinémica",
      "Hiperinsulinismo persistente o inapropiado para la concentración de glucosa"
    ],
    respuestaCorrecta: 4,
    explicacion: `La persistencia de hipoglucemia más allá del periodo transicional, junto con insulina inapropiadamente detectable y supresión de ácidos grasos libres, orienta a hiperinsulinismo. Debe obtenerse una muestra crítica durante la hipoglucemia cuando sea posible y sin retrasar la corrección urgente de la glucosa. La investigación puede requerir valoración endocrinológica especializada.`,
    perlaENARM: "Hipoglucemia persistente con insulina inapropiada y ácidos grasos libres bajos: sospechar hiperinsulinismo.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de hipoglucemia neonatal persistente.",
      internacional: "Pediatric Endocrine Society guidance on persistent hypoglycemia in neonates and infants."
    },
    bibliografia: "Pediatric Endocrine Society. Recommendations for Evaluation and Management of Persistent Hypoglycemia in Neonates, Infants, and Children."
  },

  {
    id: "PED-045",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Convulsiones neonatales",
    dificultad: "Media",
    caso: `Recién nacido de 2 días presenta movimientos repetitivos de una extremidad y desviación ocular. La glucosa es normal. El episodio no se interrumpe al sujetar suavemente la extremidad.`,
    pregunta: "¿Cuál es la estrategia diagnóstica más útil para confirmar la naturaleza epiléptica de los eventos?",
    opciones: [
      "Electroencefalograma, idealmente con monitorización continua cuando esté disponible",
      "Radiografía simple de abdomen",
      "Prueba de sudor",
      "Espirometría",
      "Medición aislada de bilirrubina como prueba confirmatoria"
    ],
    respuestaCorrecta: 0,
    explicacion: `Las manifestaciones clínicas de las convulsiones neonatales pueden ser sutiles y confundirse con movimientos no epilépticos. El electroencefalograma permite confirmar actividad ictal y caracterizar los eventos; la monitorización continua aumenta la detección. La evaluación etiológica debe considerar hipoxia-isquemia, hemorragia, infección, alteraciones metabólicas y malformaciones.`,
    perlaENARM: "Ante sospecha de convulsiones neonatales, el EEG es fundamental porque la clínica por sí sola puede ser engañosa.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de convulsiones neonatales.",
      internacional: "Neonatal seizure management guidance."
    },
    bibliografia: "International League Against Epilepsy. Neonatal Seizure Classification and Management Guidance."
  },

  {
    id: "PED-046",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Encefalopatía hipóxico-isquémica",
    dificultad: "Media",
    caso: `Recién nacido de término con antecedente de evento hipóxico intraparto, reanimación avanzada y encefalopatía moderada durante las primeras horas de vida. Se encuentra dentro de las primeras 5 horas de vida.`,
    pregunta: "¿Qué intervención neuroprotectora debe evaluarse de manera urgente si cumple los criterios clínicos y de edad gestacional?",
    opciones: [
      "Administrar corticosteroides sistémicos a todos los pacientes",
      "Realizar punción lumbar como único tratamiento",
      "Iniciar hipotermia terapéutica en un centro capacitado, idealmente dentro de las primeras 6 horas",
      "Esperar 48 horas para comprobar si persiste la encefalopatía",
      "Administrar oxígeno al 100% de forma indefinida"
    ],
    respuestaCorrecta: 2,
    explicacion: `En recién nacidos seleccionados de término o cercanos al término con encefalopatía hipóxico-isquémica moderada o grave, la hipotermia terapéutica iniciada dentro de las primeras 6 horas reduce el riesgo de muerte o discapacidad neurológica. La selección exige criterios definidos y monitorización especializada; no está indicada indiscriminadamente en todo neonato deprimido al nacimiento.`,
    perlaENARM: "Encefalopatía hipóxico-isquémica elegible: identificar pronto la ventana de hipotermia terapéutica, habitualmente dentro de las primeras 6 horas.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente sobre encefalopatía hipóxico-isquémica neonatal.",
      internacional: "AAP guidance on therapeutic hypothermia for neonatal hypoxic-ischemic encephalopathy."
    },
    bibliografia: "American Academy of Pediatrics. Neonatal Encephalopathy and Neurologic Outcome."
  },

  {
    id: "PED-047",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Enterocolitis necrosante",
    dificultad: "Media",
    caso: `Prematuro de 29 semanas con distensión abdominal, sangre en heces e inestabilidad térmica. La radiografía abdominal muestra gas dentro de la pared intestinal.`,
    pregunta: "¿Qué hallazgo radiológico se ha identificado?",
    opciones: [
      "Signo de doble burbuja",
      "Neumatosis intestinal",
      "Signo de la vela tímica",
      "Aire exclusivamente en la vía biliar como hallazgo definitorio",
      "Calcificación fisiológica de la pared intestinal"
    ],
    respuestaCorrecta: 1,
    explicacion: `La neumatosis intestinal corresponde a gas en la pared del intestino y es un hallazgo característico de enterocolitis necrosante. La presencia de gas portal o neumoperitoneo puede indicar enfermedad avanzada o perforación. La conducta depende de la gravedad, los hallazgos radiológicos y la evolución clínica.`,
    perlaENARM: "Neumatosis intestinal en un prematuro con signos gastrointestinales: hallazgo clásico de enterocolitis necrosante.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de enterocolitis necrosante.",
      internacional: "Neonatal intensive care guidance on necrotizing enterocolitis."
    },
    bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
  },

  {
    id: "PED-048",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Enterocolitis necrosante avanzada",
    dificultad: "Media",
    caso: `Prematuro con enterocolitis necrosante que desarrolla deterioro hemodinámico y distensión abdominal progresiva. La radiografía muestra aire libre intraperitoneal.`,
    pregunta: "¿Qué hallazgo modifica de manera importante la conducta y requiere valoración quirúrgica urgente?",
    opciones: [
      "Residuo gástrico aislado sin otros síntomas",
      "Deposiciones habituales sin sangre",
      "Distensión leve que mejora espontáneamente",
      "Neumoperitoneo compatible con perforación intestinal",
      "Hipo aislado después de la alimentación"
    ],
    respuestaCorrecta: 3,
    explicacion: `El neumoperitoneo en este contexto sugiere perforación intestinal y constituye una indicación de valoración quirúrgica urgente. El tratamiento incluye estabilización hemodinámica, suspensión de la alimentación enteral, descompresión gastrointestinal, antibióticos y decisión quirúrgica individualizada.`,
    perlaENARM: "Enterocolitis necrosante con neumoperitoneo: sospechar perforación intestinal y solicitar valoración quirúrgica urgente.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de enterocolitis necrosante y cirugía neonatal.",
      internacional: "Neonatal surgical guidance on necrotizing enterocolitis."
    },
    bibliografia: "Ashcraft's Pediatric Surgery."
  },

  {
    id: "PED-049",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Atresia duodenal",
    dificultad: "Media",
    caso: `Recién nacido con vómitos biliosos durante las primeras horas de vida. La radiografía abdominal muestra una burbuja gástrica y otra en el duodeno proximal, con ausencia de gas distal.`,
    pregunta: "¿Qué malformación explica mejor este patrón?",
    opciones: [
      "Atresia duodenal",
      "Estenosis hipertrófica del píloro",
      "Enfermedad de Hirschsprung de segmento ultracorto como causa obligatoria",
      "Divertículo de Meckel no complicado",
      "Reflujo gastroesofágico fisiológico"
    ],
    respuestaCorrecta: 0,
    explicacion: `El signo de doble burbuja con escaso o nulo gas distal es característico de atresia duodenal completa. Puede asociarse con síndrome de Down y otras anomalías congénitas. La estabilización incluye descompresión gástrica, líquidos intravenosos y evaluación de anomalías asociadas antes de la corrección quirúrgica.`,
    perlaENARM: "Doble burbuja sin gas distal en un neonato: pensar en atresia duodenal.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de malformaciones gastrointestinales congénitas.",
      internacional: "Pediatric surgical guidance on congenital duodenal obstruction."
    },
    bibliografia: "Ashcraft's Pediatric Surgery."
  },

  {
    id: "PED-050",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Malrotación intestinal",
    dificultad: "Media",
    caso: `Recién nacido de 2 días con vómitos biliosos súbitos, irritabilidad y distensión abdominal. Se sospecha malrotación intestinal complicada con vólvulo.`,
    pregunta: "¿Cuál es la principal razón para tratar este cuadro como una urgencia?",
    opciones: [
      "La posibilidad de resolución espontánea en todos los casos",
      "El riesgo exclusivo de deshidratación leve",
      "La asociación necesaria con estenosis hipertrófica del píloro",
      "La baja posibilidad de compromiso vascular intestinal",
      "El riesgo de isquemia, necrosis intestinal y pérdida extensa de intestino"
    ],
    respuestaCorrecta: 4,
    explicacion: `El vólvulo del intestino medio puede comprometer rápidamente el flujo sanguíneo mesentérico y provocar isquemia, necrosis y choque. La sospecha clínica exige evaluación urgente y coordinación con cirugía pediátrica. Los estudios de imagen deben seleccionarse sin retrasar la intervención cuando existe compromiso clínico importante.`,
    perlaENARM: "Vómito bilioso neonatal de inicio súbito: descartar vólvulo por malrotación, una urgencia quirúrgica.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de urgencias quirúrgicas neonatales.",
      internacional: "Pediatric surgical guidance on malrotation and midgut volvulus."
    },
    bibliografia: "Ashcraft's Pediatric Surgery."
  },

  {
    id: "PED-051",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Enfermedad de Hirschsprung",
    dificultad: "Media",
    caso: `Recién nacido de término que no ha expulsado meconio a las 48 horas, presenta distensión abdominal y vómitos biliosos. Al tacto rectal se observa salida explosiva de heces y gas después de retirar el dedo.`,
    pregunta: "¿Qué mecanismo fisiopatológico explica la enfermedad sospechada?",
    opciones: [
      "Hipersecreción gástrica por gastrinoma",
      "Ausencia congénita de células ganglionares en el intestino distal",
      "Obstrucción causada exclusivamente por hipertrofia del píloro",
      "Aumento de la absorción de agua por exceso de células ganglionares",
      "Deficiencia de lactasa como causa de obstrucción neonatal"
    ],
    respuestaCorrecta: 1,
    explicacion: `La enfermedad de Hirschsprung se debe a ausencia de células ganglionares en los plexos submucoso y mientérico de un segmento intestinal, lo que impide la relajación normal y produce obstrucción funcional. La confirmación requiere biopsia rectal. La ausencia de eliminación de meconio y la distensión en un neonato deben motivar evaluación de obstrucción y sus causas.`,
    perlaENARM: "Retraso en la expulsión de meconio más distensión abdominal: considerar enfermedad de Hirschsprung.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de estreñimiento y obstrucción intestinal neonatal.",
      internacional: "Pediatric surgical guidance on Hirschsprung disease."
    },
    bibliografia: "Ashcraft's Pediatric Surgery."
  },

  {
    id: "PED-052",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Atresia esofágica y fístula traqueoesofágica",
    dificultad: "Media",
    caso: `Recién nacido con salivación excesiva y episodios de cianosis durante la alimentación. La sonda orogástrica no avanza al estómago y la radiografía muestra la sonda enrollada en el esófago proximal; se observa gas en el abdomen.`,
    pregunta: "¿Qué variante anatómica es más probable?",
    opciones: [
      "Atresia esofágica aislada sin fístula distal",
      "Estenosis esofágica adquirida por reflujo",
      "Atresia esofágica con fístula traqueoesofágica distal",
      "Hernia hiatal deslizante aislada",
      "Acalasia neonatal primaria"
    ],
    respuestaCorrecta: 2,
    explicacion: `La presencia de gas abdominal sugiere comunicación entre la vía aérea y el esófago distal, compatible con atresia esofágica con fístula traqueoesofágica distal, la variante más frecuente. La estabilización requiere evitar la alimentación oral, prevenir la aspiración y organizar la evaluación quirúrgica.`,
    perlaENARM: "Atresia esofágica con gas distal: sospechar fístula traqueoesofágica distal.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de cirugía neonatal.",
      internacional: "Pediatric surgical guidance on esophageal atresia and tracheoesophageal fistula."
    },
    bibliografia: "Ashcraft's Pediatric Surgery."
  },

  {
    id: "PED-053",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Hernia diafragmática congénita",
    dificultad: "Media",
    caso: `Recién nacido con diagnóstico prenatal de hernia diafragmática izquierda que presenta dificultad respiratoria grave al nacimiento. El equipo prepara la estabilización antes de la cirugía.`,
    pregunta: "¿Qué estrategia de vía aérea suele preferirse ante dificultad respiratoria grave por esta malformación?",
    opciones: [
      "Ventilación con mascarilla a presión elevada como primera medida prolongada",
      "Alimentación oral inmediata para reducir el esfuerzo respiratorio",
      "Compresiones torácicas preventivas en ausencia de indicación",
      "Intubación endotraqueal y descompresión gástrica, evitando distensión intestinal por ventilación con mascarilla",
      "Retrasar toda intervención respiratoria hasta la reparación quirúrgica"
    ],
    respuestaCorrecta: 3,
    explicacion: `La ventilación con mascarilla puede introducir aire al tubo digestivo a través de la fístula fisiológica y agravar la compresión pulmonar. En recién nacidos con hernia diafragmática y compromiso respiratorio importante suele preferirse intubación endotraqueal, ventilación protectora y descompresión gástrica. La reparación se realiza después de estabilizar la fisiología cardiopulmonar.`,
    perlaENARM: "Hernia diafragmática congénita grave: evitar la distensión gastrointestinal y estabilizar antes de la cirugía.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de estabilización de hernia diafragmática congénita.",
      internacional: "Congenital diaphragmatic hernia management guidelines."
    },
    bibliografia: "Ashcraft's Pediatric Surgery."
  },

  {
    id: "PED-054",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Hipocalcemia neonatal",
    dificultad: "Media",
    caso: `Recién nacido de 36 horas con temblores y prolongación del intervalo QT. La glucosa es normal y el calcio sérico está disminuido. La madre presenta diabetes pregestacional.`,
    pregunta: "¿Qué asociación explica el mayor riesgo de hipocalcemia en este paciente?",
    opciones: [
      "Mayor reserva neonatal de calcio inducida por la diabetes materna",
      "Alteraciones de la adaptación del metabolismo mineral en el periodo neonatal, asociadas con factores perinatales",
      "Producción excesiva de vitamina D como mecanismo universal",
      "Aumento obligatorio de la absorción intestinal de calcio",
      "Exceso de hormona paratiroidea fetal en todos los hijos de madres diabéticas"
    ],
    respuestaCorrecta: 1,
    explicacion: `La hipocalcemia neonatal puede relacionarse con prematuridad, diabetes materna, restricción del crecimiento y enfermedad perinatal. La transición posnatal exige adaptación del metabolismo mineral; cuando aparecen temblores, convulsiones o prolongación del QT, debe comprobarse el calcio y evaluar otros electrolitos. El tratamiento depende de los síntomas y la magnitud de la alteración.`,
    perlaENARM: "Hijo de madre diabética con temblores y glucosa normal: investigar también calcio y magnesio.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de trastornos metabólicos neonatales.",
      internacional: "Neonatal guidance on hypocalcemia."
    },
    bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
  },

  {
    id: "PED-055",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Policitemia neonatal",
    dificultad: "Media",
    caso: `Recién nacido de 39 semanas, pequeño para la edad gestacional, presenta rubicundez, letargo y dificultad para alimentarse. El hematocrito venoso es de 68%.`,
    pregunta: "¿Qué alteración explica mejor el aumento de la viscosidad sanguínea?",
    opciones: [
      "Policitemia neonatal",
      "Anemia ferropénica",
      "Hemofilia A",
      "Trombocitopenia inmunitaria",
      "Deficiencia aislada de vitamina K"
    ],
    respuestaCorrecta: 0,
    explicacion: `La policitemia neonatal suele definirse por hematocrito venoso de al menos 65%. El aumento de la masa eritrocitaria incrementa la viscosidad y puede comprometer la perfusión. Se asocia con restricción del crecimiento, diabetes materna y transfusión placentaria, entre otros factores. La decisión de tratamiento depende de los síntomas, el hematocrito y el contexto clínico.`,
    perlaENARM: "Hematocrito venoso igual o superior a 65%: considerar policitemia neonatal.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de alteraciones hematológicas neonatales.",
      internacional: "Neonatal care guidance on neonatal polycythemia."
    },
    bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
  },

  {
    id: "PED-056",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Anemia neonatal",
    dificultad: "Media",
    caso: `Recién nacido con palidez, taquicardia y dificultad respiratoria. La hemoglobina está disminuida y se documenta antecedente de hemorragia fetomaterna.`,
    pregunta: "¿Qué mecanismo explica principalmente la anemia en este caso?",
    opciones: [
      "Producción excesiva de eritrocitos con aumento de viscosidad",
      "Deficiencia congénita de factor VIII",
      "Pérdida de sangre del compartimento fetal hacia la circulación materna",
      "Aumento aislado de bilirrubina conjugada",
      "Destrucción autoinmunitaria de plaquetas"
    ],
    respuestaCorrecta: 2,
    explicacion: `La hemorragia fetomaterna produce pérdida de volumen sanguíneo fetal y puede ocasionar anemia de gravedad variable, con compromiso hemodinámico cuando es importante. La evaluación incluye hemoglobina, reticulocitos, estado circulatorio y estudio de la causa. El tratamiento depende de la magnitud de la pérdida y de la estabilidad clínica.`,
    perlaENARM: "Palidez y anemia neonatal con antecedente obstétrico compatible: considerar pérdida sanguínea, no solo hemólisis.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de anemia neonatal.",
      internacional: "Neonatal transfusion and hematology guidance."
    },
    bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
  },

  {
    id: "PED-057",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Infección congénita por citomegalovirus",
    dificultad: "Media",
    caso: `Recién nacido con restricción del crecimiento, petequias, microcefalia y alteraciones auditivas. La imagen cerebral muestra calcificaciones periventriculares.`,
    pregunta: "¿Qué infección congénita debe sospecharse?",
    opciones: [
      "Infección congénita por citomegalovirus",
      "Infección por rotavirus",
      "Tosferina adquirida por alimentos",
      "Infección urinaria por Proteus como causa típica de calcificaciones",
      "Faringoamigdalitis estreptocócica neonatal"
    ],
    respuestaCorrecta: 0,
    explicacion: `El citomegalovirus congénito puede producir restricción del crecimiento, petequias, trombocitopenia, microcefalia, calcificaciones periventriculares y pérdida auditiva neurosensorial. El diagnóstico debe realizarse con pruebas apropiadas durante las primeras semanas de vida para diferenciar infección congénita de adquisición posnatal.`,
    perlaENARM: "Microcefalia más calcificaciones periventriculares y alteración auditiva: asociación clásica con CMV congénito.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de infecciones congénitas.",
      internacional: "CDC guidance on congenital cytomegalovirus infection."
    },
    bibliografia: "Centers for Disease Control and Prevention. Congenital Cytomegalovirus."
  },

  {
    id: "PED-058",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Toxoplasmosis congénita",
    dificultad: "Media",
    caso: `Recién nacido con hidrocefalia, coriorretinitis y calcificaciones intracraneales difusas. La madre refiere exposición durante el embarazo a carne insuficientemente cocida.`,
    pregunta: "¿Qué agente etiológico explica mejor esta combinación?",
    opciones: [
      "Streptococcus pneumoniae",
      "Virus sincitial respiratorio",
      "Treponema pallidum como causa exclusiva de hidrocefalia",
      "Toxoplasma gondii",
      "Bordetella pertussis"
    ],
    respuestaCorrecta: 3,
    explicacion: `La tríada clásica de toxoplasmosis congénita incluye hidrocefalia, coriorretinitis y calcificaciones intracraneales difusas. La presentación puede variar y algunos neonatos son inicialmente asintomáticos. La evaluación diagnóstica y el tratamiento deben coordinarse con especialistas en infectología y oftalmología pediátrica.`,
    perlaENARM: "Hidrocefalia, coriorretinitis y calcificaciones difusas: asociación clásica con toxoplasmosis congénita.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de toxoplasmosis congénita.",
      internacional: "CDC guidance on toxoplasmosis."
    },
    bibliografia: "Centers for Disease Control and Prevention. Toxoplasmosis."
  },

  {
    id: "PED-059",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Síndrome de abstinencia neonatal",
    dificultad: "Media",
    caso: `Recién nacido de madre con consumo crónico de opioides durante el embarazo. A las 36 horas presenta irritabilidad intensa, temblores, llanto agudo, dificultades para alimentarse y alteración del sueño.`,
    pregunta: "¿Qué proceso explica mejor la aparición de los síntomas después del nacimiento?",
    opciones: [
      "Infección bacteriana obligatoria en todos los casos",
      "Abstinencia neonatal por interrupción de la exposición intrauterina a opioides",
      "Encefalopatía hipóxico-isquémica como explicación exclusiva",
      "Enfermedad de Hirschsprung",
      "Hipertensión arterial primaria del lactante"
    ],
    respuestaCorrecta: 1,
    explicacion: `El síndrome de abstinencia neonatal puede aparecer tras la interrupción de la exposición intrauterina a opioides y otros fármacos. Las manifestaciones incluyen irritabilidad, temblores, alteraciones del sueño, disfunción gastrointestinal y dificultad para alimentarse. El manejo incluye valoración estructurada, apoyo no farmacológico y tratamiento farmacológico cuando la gravedad lo justifica.`,
    perlaENARM: "Irritabilidad, temblores y dificultad para alimentarse después de exposición prenatal a opioides: considerar abstinencia neonatal.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de exposición prenatal a sustancias.",
      internacional: "AAP guidance on neonatal opioid withdrawal syndrome."
    },
    bibliografia: "American Academy of Pediatrics. Neonatal Opioid Withdrawal Syndrome."
  },

  {
    id: "PED-060",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Hipertensión pulmonar persistente",
    dificultad: "Media",
    caso: `Recién nacido de término con hipoxemia intensa que persiste pese a oxígeno suplementario. La saturación preductal es de 96% y la posductal de 84%. El ecocardiograma muestra presión pulmonar elevada y cortocircuito de derecha a izquierda.`,
    pregunta: "¿Qué mecanismo explica la diferencia de saturación entre ambas mediciones?",
    opciones: [
      "Obstrucción aislada de la vena porta",
      "Anemia ferropénica neonatal",
      "Persistencia obligatoria de la circulación fetal en todos los recién nacidos sanos",
      "Hiperventilación sin alteración vascular",
      "Cortocircuito de derecha a izquierda a través del conducto arterioso por hipertensión pulmonar persistente"
    ],
    respuestaCorrecta: 4,
    explicacion: `La hipertensión pulmonar persistente mantiene una resistencia vascular pulmonar elevada y puede generar cortocircuitos de derecha a izquierda por el conducto arterioso y, en algunos casos, el foramen oval. La sangre menos oxigenada que pasa hacia la aorta descendente produce una saturación posductal inferior a la preductal. El ecocardiograma ayuda a confirmar el mecanismo y excluir cardiopatías congénitas estructurales.`,
    perlaENARM: "Diferencia preductal-posductal con hipoxemia neonatal: sospechar cortocircuito derecha-izquierda e investigar hipertensión pulmonar persistente.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de hipoxemia neonatal.",
      internacional: "Neonatal pulmonary hypertension management guidance."
    },
    bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
  },
  {
    id: "PED-031",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Reanimación neonatal",
    dificultad: "Media",
    caso: `Recién nacido de término que, después de los pasos iniciales, permanece en apnea y presenta frecuencia cardiaca de 70 lpm. Se inicia ventilación con presión positiva, pero el tórax no muestra expansión y la frecuencia cardiaca no aumenta.`,
    pregunta: "¿Qué acción debe realizarse para corregir la ventilación ineficaz?",
    opciones: [
      "Iniciar compresiones torácicas sin modificar la ventilación",
      "Administrar adrenalina por vía endotraqueal como primera intervención",
      "Suspender la ventilación y observar durante un minuto",
      "Corregir el sello de la mascarilla, reposicionar la vía aérea y comprobar la expansión torácica",
      "Administrar bicarbonato de sodio inmediatamente"
    ],
    respuestaCorrecta: 3,
    explicacion: `La ausencia de expansión torácica y de respuesta de la frecuencia cardiaca indica que la ventilación puede ser ineficaz. Deben realizarse maniobras correctivas: ajustar la mascarilla, reposicionar la cabeza, aspirar secreciones si existe obstrucción, abrir la boca y aumentar gradualmente la presión según la respuesta. Si no se consigue ventilación efectiva, debe considerarse una vía aérea alternativa. Las compresiones se indican cuando la frecuencia cardiaca permanece por debajo de 60 lpm después de al menos 30 segundos de ventilación efectiva.`,
    perlaENARM: "En reanimación neonatal, corregir la ventilación antes de escalar a compresiones o fármacos.",
    gpc: {
      mexico: "Consultar el protocolo mexicano vigente de reanimación neonatal.",
      internacional: "American Academy of Pediatrics. Neonatal Resuscitation Program."
    },
    bibliografia: "American Academy of Pediatrics. Textbook of Neonatal Resuscitation."
  },

  {
    id: "PED-032",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Reanimación neonatal avanzada",
    dificultad: "Media",
    caso: `Recién nacido que recibió ventilación efectiva durante 30 segundos y posteriormente compresiones torácicas coordinadas con ventilación. La frecuencia cardiaca permanece en 45 lpm pese a comprobar la expansión torácica y la colocación de la vía aérea.`,
    pregunta: "¿Qué medicamento está indicado durante la reanimación avanzada?",
    opciones: [
      "Adrenalina, siguiendo la dosis y vía recomendadas para reanimación neonatal",
      "Atropina como tratamiento rutinario de la bradicardia neonatal",
      "Adenosina para aumentar la frecuencia sinusal",
      "Digoxina intravenosa",
      "Amiodarona como primera línea para cualquier bradicardia"
    ],
    respuestaCorrecta: 0,
    explicacion: `Si la frecuencia cardiaca permanece por debajo de 60 lpm después de ventilación efectiva y compresiones coordinadas, se indica adrenalina conforme al algoritmo de reanimación neonatal. Deben verificarse la vía de administración, la concentración y la dosis protocolizada, así como considerar hipovolemia cuando existan antecedentes compatibles.`,
    perlaENARM: "Adrenalina neonatal: considerar cuando persiste frecuencia cardiaca menor de 60 lpm pese a ventilación efectiva y compresiones adecuadas.",
    gpc: {
      mexico: "Consultar el algoritmo mexicano vigente de reanimación neonatal.",
      internacional: "American Academy of Pediatrics. Neonatal Resuscitation Program."
    },
    bibliografia: "American Academy of Pediatrics. Textbook of Neonatal Resuscitation."
  },

  {
    id: "PED-033",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Síndrome de dificultad respiratoria",
    dificultad: "Media",
    caso: `Prematuro de 29 semanas con quejido, retracciones y necesidad creciente de oxígeno. La radiografía de tórax muestra volúmenes pulmonares bajos y un patrón reticulogranular difuso con broncograma aéreo.`,
    pregunta: "¿Qué mecanismo explica la combinación radiológica y clínica?",
    opciones: [
      "Acumulación exclusiva de líquido pleural",
      "Obstrucción de la vía aérea por cuerpo extraño",
      "Edema cardiogénico por cardiopatía congénita cianógena como explicación obligatoria",
      "Hiperventilación con expansión alveolar excesiva",
      "Deficiencia de surfactante con atelectasias difusas"
    ],
    respuestaCorrecta: 4,
    explicacion: `El déficit de surfactante aumenta la tensión superficial alveolar y reduce la distensibilidad pulmonar. Esto favorece atelectasias, disminución del volumen pulmonar y alteración del intercambio gaseoso. La combinación de prematuridad, dificultad respiratoria temprana y patrón reticulogranular con broncograma aéreo es característica del síndrome de dificultad respiratoria neonatal.`,
    perlaENARM: "Prematuridad más bajo volumen pulmonar y patrón reticulogranular: síndrome de dificultad respiratoria por déficit de surfactante.",
    gpc: {
      mexico: "Consultar la guía mexicana vigente de dificultad respiratoria neonatal.",
      internacional: "European Consensus Guidelines on the Management of Respiratory Distress Syndrome."
    },
    bibliografia: "European Consensus Guidelines on the Management of Respiratory Distress Syndrome."
  },

  {
    id: "PED-034",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Surfactante pulmonar",
    dificultad: "Media",
    caso: `Prematuro de 27 semanas con síndrome de dificultad respiratoria que recibe soporte no invasivo. A pesar de optimizar la presión y comprobar la posición de la interfaz, aumenta el requerimiento de oxígeno y persisten retracciones importantes.`,
    pregunta: "¿Qué tratamiento específico debe valorarse según la gravedad y el protocolo de la unidad?",
    opciones: [
      "Diurético de asa como tratamiento etiológico universal",
      "Administración de surfactante exógeno",
      "Antibiótico oral como sustituto del soporte respiratorio",
      "Restricción absoluta de líquidos durante varios días",
      "Administración rutinaria de broncodilatadores para corregir el déficit"
    ],
    respuestaCorrecta: 1,
    explicacion: `El surfactante exógeno reduce la tensión superficial y mejora la mecánica pulmonar en prematuros con síndrome de dificultad respiratoria. La decisión depende de la evolución, la necesidad de oxígeno, el soporte utilizado y los criterios del protocolo vigente. Cuando es posible, las estrategias menos invasivas de administración disminuyen la necesidad de ventilación mecánica en pacientes seleccionados.`,
    perlaENARM: "El surfactante trata la fisiopatología del síndrome de dificultad respiratoria; no sustituye la evaluación de otras causas de deterioro.",
    gpc: {
      mexico: "Consultar la guía mexicana vigente de síndrome de dificultad respiratoria neonatal.",
      internacional: "European Consensus Guidelines on the Management of Respiratory Distress Syndrome."
    },
    bibliografia: "European Consensus Guidelines on the Management of Respiratory Distress Syndrome."
  },

  {
    id: "PED-035",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Taquipnea transitoria del recién nacido",
    dificultad: "Media",
    caso: `Recién nacido de 38 semanas obtenido por cesárea sin trabajo de parto. Presenta frecuencia respiratoria de 76 rpm, saturación de 91% y retracciones leves durante las primeras horas. La radiografía muestra hiperinsuflación y líquido en las cisuras; no hay fiebre materna ni datos de infección.`,
    pregunta: "¿Qué evolución es más compatible con el diagnóstico sospechado?",
    opciones: [
      "Progresión inevitable hacia fibrosis pulmonar irreversible",
      "Desarrollo obligatorio de hipertensión pulmonar grave",
      "Resolución habitual durante las primeras 24 a 72 horas con soporte según necesidad",
      "Aparición característica después de una semana de vida",
      "Necesidad universal de ventilación invasiva prolongada"
    ],
    respuestaCorrecta: 2,
    explicacion: `La taquipnea transitoria suele mejorar conforme se reabsorbe el líquido pulmonar retenido. El manejo es principalmente de soporte, con vigilancia de oxigenación, trabajo respiratorio y capacidad de alimentación. Una evolución atípica, el deterioro progresivo o la persistencia prolongada deben motivar la búsqueda de otras causas.`,
    perlaENARM: "La taquipnea transitoria suele ser autolimitada; el deterioro progresivo obliga a reconsiderar el diagnóstico.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes para dificultad respiratoria neonatal.",
      internacional: "Neonatal respiratory care guidance."
    },
    bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
  },

  {
    id: "PED-036",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Aspiración de meconio",
    dificultad: "Media",
    caso: `Recién nacido de 41 semanas con líquido amniótico meconial presenta dificultad respiratoria poco después del nacimiento. La radiografía muestra opacidades pulmonares parcheadas e hiperinsuflación. Requiere oxígeno y vigilancia hemodinámica.`,
    pregunta: "¿Qué complicación vascular puede acompañar a este cuadro y agravar la hipoxemia?",
    opciones: [
      "Hipertensión pulmonar persistente del recién nacido",
      "Hipertensión portal congénita como mecanismo principal",
      "Trombosis de la vena porta como complicación obligatoria",
      "Coartación aórtica adquirida por aspiración",
      "Insuficiencia venosa periférica"
    ],
    respuestaCorrecta: 0,
    explicacion: `La aspiración de meconio puede producir obstrucción de vías aéreas, inflamación, inactivación del surfactante y alteraciones ventilación-perfusión. En los casos graves puede coexistir hipertensión pulmonar persistente, que mantiene cortocircuitos de derecha a izquierda y contribuye a la hipoxemia refractaria.`,
    perlaENARM: "Aspiración de meconio con hipoxemia desproporcionada o refractaria: valorar hipertensión pulmonar persistente.",
    gpc: {
      mexico: "Consultar la normativa mexicana vigente de atención del recién nacido con dificultad respiratoria.",
      internacional: "Neonatal respiratory care guidance on meconium aspiration syndrome."
    },
    bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
  },

  {
    id: "PED-037",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Sepsis neonatal temprana",
    dificultad: "Media",
    caso: `Recién nacido de 35 semanas con ruptura prolongada de membranas y fiebre materna intraparto. A las 8 horas presenta apnea, rechazo del alimento e inestabilidad térmica. Se sospecha sepsis neonatal temprana.`,
    pregunta: "¿Cuál es la conducta inicial más apropiada ante la sospecha de infección invasiva?",
    opciones: [
      "Esperar el resultado del hemocultivo antes de iniciar cualquier intervención",
      "Indicar únicamente probióticos y observación domiciliaria",
      "Administrar antibióticos por vía oral y permitir la alimentación habitual sin reevaluación",
      "Obtener cultivos sin retrasar el tratamiento e iniciar antibióticos empíricos intravenosos según el protocolo local",
      "Descartar sepsis porque no existe fiebre neonatal"
    ],
    respuestaCorrecta: 3,
    explicacion: `La sepsis neonatal puede manifestarse con signos inespecíficos y sin fiebre. En un neonato sintomático con factores de riesgo, se requiere evaluación inmediata, hemocultivo cuando sea posible antes del antibiótico y tratamiento empírico intravenoso sin retrasos clínicamente relevantes. La elección del esquema depende de la epidemiología local, los factores maternos y el riesgo de resistencia.`,
    perlaENARM: "Ante sospecha fundada de sepsis neonatal sintomática, los cultivos no deben retrasar el inicio del tratamiento.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente sobre sepsis neonatal.",
      internacional: "NICE. Neonatal infection: antibiotics for prevention and treatment."
    },
    bibliografia: "NICE. Neonatal infection: antibiotics for prevention and treatment."
  },

  {
    id: "PED-038",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Sepsis neonatal tardía",
    dificultad: "Media",
    caso: `Prematuro de 30 semanas hospitalizado durante tres semanas con catéter venoso central. Presenta apnea nueva, intolerancia alimentaria, inestabilidad térmica y aumento del requerimiento de oxígeno.`,
    pregunta: "¿Qué estrategia diagnóstica debe incluirse prioritariamente?",
    opciones: [
      "Solicitar únicamente coproparasitoscópico",
      "Realizar evaluación para infección invasiva con cultivos apropiados, incluyendo valoración del catéter y del estado clínico",
      "Atribuir todos los hallazgos a la prematuridad sin estudios",
      "Realizar prueba de esfuerzo cardiopulmonar",
      "Solicitar exclusivamente anticuerpos antinucleares"
    ],
    respuestaCorrecta: 1,
    explicacion: `La sepsis neonatal tardía puede asociarse con dispositivos intravasculares, hospitalización prolongada y microorganismos adquiridos en el entorno sanitario. La evaluación debe buscar bacteriemia y posibles focos de infección. La toma de cultivos y las decisiones sobre el catéter dependen de la estabilidad del paciente, el microorganismo sospechado y el protocolo institucional.`,
    perlaENARM: "En el prematuro hospitalizado, apnea e intolerancia alimentaria de nueva aparición pueden ser manifestaciones iniciales de sepsis.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de infección asociada a la atención sanitaria neonatal.",
      internacional: "NICE. Neonatal infection: antibiotics for prevention and treatment."
    },
    bibliografia: "NICE. Neonatal infection: antibiotics for prevention and treatment."
  },

  {
    id: "PED-039",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Meningitis neonatal",
    dificultad: "Media",
    caso: `Neonato de 12 días con rechazo del alimento, irritabilidad, temperatura inestable y episodios de apnea. No presenta rigidez de nuca evidente.`,
    pregunta: "¿Qué afirmación describe mejor la presentación de meningitis en este grupo etario?",
    opciones: [
      "La rigidez de nuca es indispensable para establecer sospecha",
      "La ausencia de fiebre excluye infección meníngea",
      "La exploración neurológica normal descarta meningitis con certeza",
      "Las convulsiones son incompatibles con infección neonatal",
      "Puede manifestarse con signos inespecíficos y requiere evaluación urgente cuando existe sospecha"
    ],
    respuestaCorrecta: 4,
    explicacion: `La meningitis neonatal puede presentarse con letargo, irritabilidad, apnea, mala alimentación, inestabilidad térmica o convulsiones, sin los signos meníngeos clásicos del adulto. La evaluación requiere valoración clínica, estudios microbiológicos y punción lumbar cuando esté indicada y sea segura. En pacientes inestables, la estabilización y el tratamiento antimicrobiano no deben retrasarse.`,
    perlaENARM: "En neonatos, la ausencia de rigidez de nuca no descarta meningitis.",
    gpc: {
      mexico: "Consultar la guía mexicana vigente sobre meningitis neonatal y sepsis.",
      internacional: "NICE. Neonatal infection: antibiotics for prevention and treatment."
    },
    bibliografia: "NICE. Neonatal infection: antibiotics for prevention and treatment."
  },

  {
    id: "PED-040",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Ictericia neonatal",
    dificultad: "Media",
    caso: `Recién nacido de 18 horas de vida que presenta ictericia visible. La madre es grupo O Rh positivo y el neonato grupo A Rh positivo. La bilirrubina aumenta rápidamente y la hemoglobina está disminuida.`,
    pregunta: "¿Qué mecanismo debe investigarse prioritariamente?",
    opciones: [
      "Ictericia fisiológica por inmadurez hepática como única explicación posible",
      "Colestasis obstructiva crónica como diagnóstico establecido",
      "Hemólisis inmunitaria por incompatibilidad ABO",
      "Síndrome de Gilbert como causa habitual de hemólisis neonatal intensa",
      "Atresia de vías biliares como explicación obligatoria durante las primeras horas"
    ],
    respuestaCorrecta: 2,
    explicacion: `La ictericia durante las primeras 24 horas es un signo de alarma. La incompatibilidad ABO puede ocasionar hemólisis, hiperbilirrubinemia de evolución rápida y anemia. Deben evaluarse la bilirrubina total y directa, la hemoglobina, los reticulocitos, el frotis y la prueba de antiglobulina directa según el contexto clínico.`,
    perlaENARM: "Ictericia precoz más anemia y aumento rápido de bilirrubina: investigar hemólisis.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente de hiperbilirrubinemia neonatal.",
      internacional: "AAP Clinical Practice Guideline for Management of Hyperbilirubinemia."
    },
    bibliografia: "American Academy of Pediatrics. Clinical Practice Guideline for Management of Hyperbilirubinemia."
  },

  {
    id: "PED-041",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Fototerapia neonatal",
    dificultad: "Media",
    caso: `Recién nacido de 38 semanas con bilirrubina sérica por encima del umbral de fototerapia correspondiente a su edad posnatal. No presenta signos de encefalopatía bilirrubínica.`,
    pregunta: "¿Cuál es el mecanismo terapéutico principal de la fototerapia?",
    opciones: [
      "Transformar la bilirrubina en fotoisómeros más hidrosolubles que pueden eliminarse sin conjugación hepática convencional",
      "Estimular la producción de eritrocitos para diluir la bilirrubina",
      "Bloquear por completo la producción intestinal de bilirrubina",
      "Aumentar la hemólisis para acelerar el recambio eritrocitario",
      "Inducir lesión hepatocelular controlada para aumentar la conjugación"
    ],
    respuestaCorrecta: 0,
    explicacion: `La fototerapia modifica la estructura de la bilirrubina mediante fotoisomerización y otros procesos fotoquímicos, generando productos que pueden eliminarse sin depender exclusivamente de la conjugación hepática. La indicación y la intensidad se determinan mediante umbrales específicos de edad posnatal, edad gestacional y factores de riesgo.`,
    perlaENARM: "La fototerapia facilita la eliminación de bilirrubina; el umbral terapéutico depende de la edad en horas y del riesgo clínico.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente sobre hiperbilirrubinemia neonatal.",
      internacional: "AAP Clinical Practice Guideline for Management of Hyperbilirubinemia."
    },
    bibliografia: "American Academy of Pediatrics. Management of Hyperbilirubinemia in the Newborn Infant."
  },

  {
    id: "PED-042",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Hiperbilirrubinemia conjugada",
    dificultad: "Media",
    caso: `Lactante de 18 días con ictericia persistente, hepatomegalia y evacuaciones hipocolóricas. La bilirrubina directa se encuentra elevada.`,
    pregunta: "¿Qué diagnóstico requiere una evaluación prioritaria por el riesgo de daño hepático progresivo?",
    opciones: [
      "Ictericia fisiológica prolongada como explicación suficiente",
      "Síndrome de dificultad respiratoria neonatal",
      "Hipoglucemia transitoria aislada",
      "Atresia de vías biliares",
      "Taquipnea transitoria del recién nacido"
    ],
    respuestaCorrecta: 3,
    explicacion: `La hiperbilirrubinemia conjugada es patológica y requiere investigación. La atresia de vías biliares puede manifestarse con ictericia persistente, heces hipocolóricas o acólicas y hepatomegalia. La referencia oportuna es esencial porque el resultado del tratamiento quirúrgico se relaciona con la edad al momento de la intervención.`,
    perlaENARM: "Ictericia persistente con bilirrubina directa elevada y heces pálidas: descartar atresia de vías biliares.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de colestasis neonatal.",
      internacional: "NASPGHAN/ESPGHAN guidance on cholestatic jaundice in infants."
    },
    bibliografia: "NASPGHAN/ESPGHAN. Guidance on the Evaluation of Cholestatic Jaundice in Infants."
  },

  {
    id: "PED-043",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Enfermedad hemorrágica por deficiencia de vitamina K",
    dificultad: "Media",
    caso: `Lactante de 5 semanas alimentado exclusivamente con leche materna, sin profilaxis documentada con vitamina K al nacimiento. Presenta equimosis y sangrado gastrointestinal. Las plaquetas son normales y el tiempo de protrombina está prolongado.`,
    pregunta: "¿Qué alteración explica mejor este patrón?",
    opciones: [
      "Trombocitopenia inmunitaria grave",
      "Deficiencia de vitamina K con disminución funcional de factores dependientes de ella",
      "Hemofilia A con prolongación aislada del tiempo de protrombina",
      "Enfermedad de von Willebrand como causa obligatoria de todos los casos",
      "Púrpura trombótica trombocitopénica neonatal"
    ],
    respuestaCorrecta: 1,
    explicacion: `La deficiencia de vitamina K reduce la actividad de los factores II, VII, IX y X y puede prolongar el tiempo de protrombina antes de afectar otros parámetros. La forma tardía puede presentarse con hemorragia intracraneal. Requiere evaluación urgente, tratamiento y búsqueda de factores predisponentes como colestasis o malabsorción.`,
    perlaENARM: "Lactante pequeño sin profilaxis de vitamina K y con sangrado: considerar deficiencia de vitamina K, incluida hemorragia intracraneal.",
    gpc: {
      mexico: "Consultar normativa mexicana vigente sobre vitamina K neonatal.",
      internacional: "AAP recommendations on vitamin K deficiency bleeding."
    },
    bibliografia: "American Academy of Pediatrics. Vitamin K and the Newborn Infant."
  },

  {
    id: "PED-044",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Hipoglucemia neonatal persistente",
    dificultad: "Media",
    caso: `Hijo de madre diabética con episodios repetidos de hipoglucemia que persisten más allá de las primeras 48 a 72 horas, pese a una alimentación adecuada. Durante uno de los episodios, la insulina no está suprimida y los ácidos grasos libres son bajos.`,
    pregunta: "¿Qué mecanismo debe considerarse?",
    opciones: [
      "Déficit aislado de hierro",
      "Hiperparatiroidismo neonatal",
      "Producción excesiva de bilirrubina",
      "Diabetes mellitus tipo 1 como causa de hipoglucemia hiperinsulinémica",
      "Hiperinsulinismo persistente o inapropiado para la concentración de glucosa"
    ],
    respuestaCorrecta: 4,
    explicacion: `La persistencia de hipoglucemia más allá del periodo transicional, junto con insulina inapropiadamente detectable y supresión de ácidos grasos libres, orienta a hiperinsulinismo. Debe obtenerse una muestra crítica durante la hipoglucemia cuando sea posible y sin retrasar la corrección urgente de la glucosa. La investigación puede requerir valoración endocrinológica especializada.`,
    perlaENARM: "Hipoglucemia persistente con insulina inapropiada y ácidos grasos libres bajos: sospechar hiperinsulinismo.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de hipoglucemia neonatal persistente.",
      internacional: "Pediatric Endocrine Society guidance on persistent hypoglycemia in neonates and infants."
    },
    bibliografia: "Pediatric Endocrine Society. Recommendations for Evaluation and Management of Persistent Hypoglycemia in Neonates, Infants, and Children."
  },

  {
    id: "PED-045",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Convulsiones neonatales",
    dificultad: "Media",
    caso: `Recién nacido de 2 días presenta movimientos repetitivos de una extremidad y desviación ocular. La glucosa es normal. El episodio no se interrumpe al sujetar suavemente la extremidad.`,
    pregunta: "¿Cuál es la estrategia diagnóstica más útil para confirmar la naturaleza epiléptica de los eventos?",
    opciones: [
      "Electroencefalograma, idealmente con monitorización continua cuando esté disponible",
      "Radiografía simple de abdomen",
      "Prueba de sudor",
      "Espirometría",
      "Medición aislada de bilirrubina como prueba confirmatoria"
    ],
    respuestaCorrecta: 0,
    explicacion: `Las manifestaciones clínicas de las convulsiones neonatales pueden ser sutiles y confundirse con movimientos no epilépticos. El electroencefalograma permite confirmar actividad ictal y caracterizar los eventos; la monitorización continua aumenta la detección. La evaluación etiológica debe considerar hipoxia-isquemia, hemorragia, infección, alteraciones metabólicas y malformaciones.`,
    perlaENARM: "Ante sospecha de convulsiones neonatales, el EEG es fundamental porque la clínica por sí sola puede ser engañosa.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de convulsiones neonatales.",
      internacional: "Neonatal seizure management guidance."
    },
    bibliografia: "International League Against Epilepsy. Neonatal Seizure Classification and Management Guidance."
  },

  {
    id: "PED-046",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Encefalopatía hipóxico-isquémica",
    dificultad: "Media",
    caso: `Recién nacido de término con antecedente de evento hipóxico intraparto, reanimación avanzada y encefalopatía moderada durante las primeras horas de vida. Se encuentra dentro de las primeras 5 horas de vida.`,
    pregunta: "¿Qué intervención neuroprotectora debe evaluarse de manera urgente si cumple los criterios clínicos y de edad gestacional?",
    opciones: [
      "Administrar corticosteroides sistémicos a todos los pacientes",
      "Realizar punción lumbar como único tratamiento",
      "Iniciar hipotermia terapéutica en un centro capacitado, idealmente dentro de las primeras 6 horas",
      "Esperar 48 horas para comprobar si persiste la encefalopatía",
      "Administrar oxígeno al 100% de forma indefinida"
    ],
    respuestaCorrecta: 2,
    explicacion: `En recién nacidos seleccionados de término o cercanos al término con encefalopatía hipóxico-isquémica moderada o grave, la hipotermia terapéutica iniciada dentro de las primeras 6 horas reduce el riesgo de muerte o discapacidad neurológica. La selección exige criterios definidos y monitorización especializada; no está indicada indiscriminadamente en todo neonato deprimido al nacimiento.`,
    perlaENARM: "Encefalopatía hipóxico-isquémica elegible: identificar pronto la ventana de hipotermia terapéutica, habitualmente dentro de las primeras 6 horas.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente sobre encefalopatía hipóxico-isquémica neonatal.",
      internacional: "AAP guidance on therapeutic hypothermia for neonatal hypoxic-ischemic encephalopathy."
    },
    bibliografia: "American Academy of Pediatrics. Neonatal Encephalopathy and Neurologic Outcome."
  },

  {
    id: "PED-047",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Enterocolitis necrosante",
    dificultad: "Media",
    caso: `Prematuro de 29 semanas con distensión abdominal, sangre en heces e inestabilidad térmica. La radiografía abdominal muestra gas dentro de la pared intestinal.`,
    pregunta: "¿Qué hallazgo radiológico se ha identificado?",
    opciones: [
      "Signo de doble burbuja",
      "Neumatosis intestinal",
      "Signo de la vela tímica",
      "Aire exclusivamente en la vía biliar como hallazgo definitorio",
      "Calcificación fisiológica de la pared intestinal"
    ],
    respuestaCorrecta: 1,
    explicacion: `La neumatosis intestinal corresponde a gas en la pared del intestino y es un hallazgo característico de enterocolitis necrosante. La presencia de gas portal o neumoperitoneo puede indicar enfermedad avanzada o perforación. La conducta depende de la gravedad, los hallazgos radiológicos y la evolución clínica.`,
    perlaENARM: "Neumatosis intestinal en un prematuro con signos gastrointestinales: hallazgo clásico de enterocolitis necrosante.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de enterocolitis necrosante.",
      internacional: "Neonatal intensive care guidance on necrotizing enterocolitis."
    },
    bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
  },

  {
    id: "PED-048",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Enterocolitis necrosante avanzada",
    dificultad: "Media",
    caso: `Prematuro con enterocolitis necrosante que desarrolla deterioro hemodinámico y distensión abdominal progresiva. La radiografía muestra aire libre intraperitoneal.`,
    pregunta: "¿Qué hallazgo modifica de manera importante la conducta y requiere valoración quirúrgica urgente?",
    opciones: [
      "Residuo gástrico aislado sin otros síntomas",
      "Deposiciones habituales sin sangre",
      "Distensión leve que mejora espontáneamente",
      "Neumoperitoneo compatible con perforación intestinal",
      "Hipo aislado después de la alimentación"
    ],
    respuestaCorrecta: 3,
    explicacion: `El neumoperitoneo en este contexto sugiere perforación intestinal y constituye una indicación de valoración quirúrgica urgente. El tratamiento incluye estabilización hemodinámica, suspensión de la alimentación enteral, descompresión gastrointestinal, antibióticos y decisión quirúrgica individualizada.`,
    perlaENARM: "Enterocolitis necrosante con neumoperitoneo: sospechar perforación intestinal y solicitar valoración quirúrgica urgente.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de enterocolitis necrosante y cirugía neonatal.",
      internacional: "Neonatal surgical guidance on necrotizing enterocolitis."
    },
    bibliografia: "Ashcraft's Pediatric Surgery."
  },

  {
    id: "PED-049",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Atresia duodenal",
    dificultad: "Media",
    caso: `Recién nacido con vómitos biliosos durante las primeras horas de vida. La radiografía abdominal muestra una burbuja gástrica y otra en el duodeno proximal, con ausencia de gas distal.`,
    pregunta: "¿Qué malformación explica mejor este patrón?",
    opciones: [
      "Atresia duodenal",
      "Estenosis hipertrófica del píloro",
      "Enfermedad de Hirschsprung de segmento ultracorto como causa obligatoria",
      "Divertículo de Meckel no complicado",
      "Reflujo gastroesofágico fisiológico"
    ],
    respuestaCorrecta: 0,
    explicacion: `El signo de doble burbuja con escaso o nulo gas distal es característico de atresia duodenal completa. Puede asociarse con síndrome de Down y otras anomalías congénitas. La estabilización incluye descompresión gástrica, líquidos intravenosos y evaluación de anomalías asociadas antes de la corrección quirúrgica.`,
    perlaENARM: "Doble burbuja sin gas distal en un neonato: pensar en atresia duodenal.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de malformaciones gastrointestinales congénitas.",
      internacional: "Pediatric surgical guidance on congenital duodenal obstruction."
    },
    bibliografia: "Ashcraft's Pediatric Surgery."
  },

  {
    id: "PED-050",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Malrotación intestinal",
    dificultad: "Media",
    caso: `Recién nacido de 2 días con vómitos biliosos súbitos, irritabilidad y distensión abdominal. Se sospecha malrotación intestinal complicada con vólvulo.`,
    pregunta: "¿Cuál es la principal razón para tratar este cuadro como una urgencia?",
    opciones: [
      "La posibilidad de resolución espontánea en todos los casos",
      "El riesgo exclusivo de deshidratación leve",
      "La asociación necesaria con estenosis hipertrófica del píloro",
      "La baja posibilidad de compromiso vascular intestinal",
      "El riesgo de isquemia, necrosis intestinal y pérdida extensa de intestino"
    ],
    respuestaCorrecta: 4,
    explicacion: `El vólvulo del intestino medio puede comprometer rápidamente el flujo sanguíneo mesentérico y provocar isquemia, necrosis y choque. La sospecha clínica exige evaluación urgente y coordinación con cirugía pediátrica. Los estudios de imagen deben seleccionarse sin retrasar la intervención cuando existe compromiso clínico importante.`,
    perlaENARM: "Vómito bilioso neonatal de inicio súbito: descartar vólvulo por malrotación, una urgencia quirúrgica.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de urgencias quirúrgicas neonatales.",
      internacional: "Pediatric surgical guidance on malrotation and midgut volvulus."
    },
    bibliografia: "Ashcraft's Pediatric Surgery."
  },

  {
    id: "PED-051",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Enfermedad de Hirschsprung",
    dificultad: "Media",
    caso: `Recién nacido de término que no ha expulsado meconio a las 48 horas, presenta distensión abdominal y vómitos biliosos. Al tacto rectal se observa salida explosiva de heces y gas después de retirar el dedo.`,
    pregunta: "¿Qué mecanismo fisiopatológico explica la enfermedad sospechada?",
    opciones: [
      "Hipersecreción gástrica por gastrinoma",
      "Ausencia congénita de células ganglionares en el intestino distal",
      "Obstrucción causada exclusivamente por hipertrofia del píloro",
      "Aumento de la absorción de agua por exceso de células ganglionares",
      "Deficiencia de lactasa como causa de obstrucción neonatal"
    ],
    respuestaCorrecta: 1,
    explicacion: `La enfermedad de Hirschsprung se debe a ausencia de células ganglionares en los plexos submucoso y mientérico de un segmento intestinal, lo que impide la relajación normal y produce obstrucción funcional. La confirmación requiere biopsia rectal. La ausencia de eliminación de meconio y la distensión en un neonato deben motivar evaluación de obstrucción y sus causas.`,
    perlaENARM: "Retraso en la expulsión de meconio más distensión abdominal: considerar enfermedad de Hirschsprung.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de estreñimiento y obstrucción intestinal neonatal.",
      internacional: "Pediatric surgical guidance on Hirschsprung disease."
    },
    bibliografia: "Ashcraft's Pediatric Surgery."
  },

  {
    id: "PED-052",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Atresia esofágica y fístula traqueoesofágica",
    dificultad: "Media",
    caso: `Recién nacido con salivación excesiva y episodios de cianosis durante la alimentación. La sonda orogástrica no avanza al estómago y la radiografía muestra la sonda enrollada en el esófago proximal; se observa gas en el abdomen.`,
    pregunta: "¿Qué variante anatómica es más probable?",
    opciones: [
      "Atresia esofágica aislada sin fístula distal",
      "Estenosis esofágica adquirida por reflujo",
      "Atresia esofágica con fístula traqueoesofágica distal",
      "Hernia hiatal deslizante aislada",
      "Acalasia neonatal primaria"
    ],
    respuestaCorrecta: 2,
    explicacion: `La presencia de gas abdominal sugiere comunicación entre la vía aérea y el esófago distal, compatible con atresia esofágica con fístula traqueoesofágica distal, la variante más frecuente. La estabilización requiere evitar la alimentación oral, prevenir la aspiración y organizar la evaluación quirúrgica.`,
    perlaENARM: "Atresia esofágica con gas distal: sospechar fístula traqueoesofágica distal.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de cirugía neonatal.",
      internacional: "Pediatric surgical guidance on esophageal atresia and tracheoesophageal fistula."
    },
    bibliografia: "Ashcraft's Pediatric Surgery."
  },

  {
    id: "PED-053",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Hernia diafragmática congénita",
    dificultad: "Media",
    caso: `Recién nacido con diagnóstico prenatal de hernia diafragmática izquierda que presenta dificultad respiratoria grave al nacimiento. El equipo prepara la estabilización antes de la cirugía.`,
    pregunta: "¿Qué estrategia de vía aérea suele preferirse ante dificultad respiratoria grave por esta malformación?",
    opciones: [
      "Ventilación con mascarilla a presión elevada como primera medida prolongada",
      "Alimentación oral inmediata para reducir el esfuerzo respiratorio",
      "Compresiones torácicas preventivas en ausencia de indicación",
      "Intubación endotraqueal y descompresión gástrica, evitando distensión intestinal por ventilación con mascarilla",
      "Retrasar toda intervención respiratoria hasta la reparación quirúrgica"
    ],
    respuestaCorrecta: 3,
    explicacion: `La ventilación con mascarilla puede introducir aire al tubo digestivo a través de la fístula fisiológica y agravar la compresión pulmonar. En recién nacidos con hernia diafragmática y compromiso respiratorio importante suele preferirse intubación endotraqueal, ventilación protectora y descompresión gástrica. La reparación se realiza después de estabilizar la fisiología cardiopulmonar.`,
    perlaENARM: "Hernia diafragmática congénita grave: evitar la distensión gastrointestinal y estabilizar antes de la cirugía.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de estabilización de hernia diafragmática congénita.",
      internacional: "Congenital diaphragmatic hernia management guidelines."
    },
    bibliografia: "Ashcraft's Pediatric Surgery."
  },

  {
    id: "PED-054",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Hipocalcemia neonatal",
    dificultad: "Media",
    caso: `Recién nacido de 36 horas con temblores y prolongación del intervalo QT. La glucosa es normal y el calcio sérico está disminuido. La madre presenta diabetes pregestacional.`,
    pregunta: "¿Qué asociación explica el mayor riesgo de hipocalcemia en este paciente?",
    opciones: [
      "Mayor reserva neonatal de calcio inducida por la diabetes materna",
      "Alteraciones de la adaptación del metabolismo mineral en el periodo neonatal, asociadas con factores perinatales",
      "Producción excesiva de vitamina D como mecanismo universal",
      "Aumento obligatorio de la absorción intestinal de calcio",
      "Exceso de hormona paratiroidea fetal en todos los hijos de madres diabéticas"
    ],
    respuestaCorrecta: 1,
    explicacion: `La hipocalcemia neonatal puede relacionarse con prematuridad, diabetes materna, restricción del crecimiento y enfermedad perinatal. La transición posnatal exige adaptación del metabolismo mineral; cuando aparecen temblores, convulsiones o prolongación del QT, debe comprobarse el calcio y evaluar otros electrolitos. El tratamiento depende de los síntomas y la magnitud de la alteración.`,
    perlaENARM: "Hijo de madre diabética con temblores y glucosa normal: investigar también calcio y magnesio.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de trastornos metabólicos neonatales.",
      internacional: "Neonatal guidance on hypocalcemia."
    },
    bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
  },

  {
    id: "PED-055",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Policitemia neonatal",
    dificultad: "Media",
    caso: `Recién nacido de 39 semanas, pequeño para la edad gestacional, presenta rubicundez, letargo y dificultad para alimentarse. El hematocrito venoso es de 68%.`,
    pregunta: "¿Qué alteración explica mejor el aumento de la viscosidad sanguínea?",
    opciones: [
      "Policitemia neonatal",
      "Anemia ferropénica",
      "Hemofilia A",
      "Trombocitopenia inmunitaria",
      "Deficiencia aislada de vitamina K"
    ],
    respuestaCorrecta: 0,
    explicacion: `La policitemia neonatal suele definirse por hematocrito venoso de al menos 65%. El aumento de la masa eritrocitaria incrementa la viscosidad y puede comprometer la perfusión. Se asocia con restricción del crecimiento, diabetes materna y transfusión placentaria, entre otros factores. La decisión de tratamiento depende de los síntomas, el hematocrito y el contexto clínico.`,
    perlaENARM: "Hematocrito venoso igual o superior a 65%: considerar policitemia neonatal.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de alteraciones hematológicas neonatales.",
      internacional: "Neonatal care guidance on neonatal polycythemia."
    },
    bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
  },

  {
    id: "PED-056",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Anemia neonatal",
    dificultad: "Media",
    caso: `Recién nacido con palidez, taquicardia y dificultad respiratoria. La hemoglobina está disminuida y se documenta antecedente de hemorragia fetomaterna.`,
    pregunta: "¿Qué mecanismo explica principalmente la anemia en este caso?",
    opciones: [
      "Producción excesiva de eritrocitos con aumento de viscosidad",
      "Deficiencia congénita de factor VIII",
      "Pérdida de sangre del compartimento fetal hacia la circulación materna",
      "Aumento aislado de bilirrubina conjugada",
      "Destrucción autoinmunitaria de plaquetas"
    ],
    respuestaCorrecta: 2,
    explicacion: `La hemorragia fetomaterna produce pérdida de volumen sanguíneo fetal y puede ocasionar anemia de gravedad variable, con compromiso hemodinámico cuando es importante. La evaluación incluye hemoglobina, reticulocitos, estado circulatorio y estudio de la causa. El tratamiento depende de la magnitud de la pérdida y de la estabilidad clínica.`,
    perlaENARM: "Palidez y anemia neonatal con antecedente obstétrico compatible: considerar pérdida sanguínea, no solo hemólisis.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de anemia neonatal.",
      internacional: "Neonatal transfusion and hematology guidance."
    },
    bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
  },

  {
    id: "PED-057",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Infección congénita por citomegalovirus",
    dificultad: "Media",
    caso: `Recién nacido con restricción del crecimiento, petequias, microcefalia y alteraciones auditivas. La imagen cerebral muestra calcificaciones periventriculares.`,
    pregunta: "¿Qué infección congénita debe sospecharse?",
    opciones: [
      "Infección congénita por citomegalovirus",
      "Infección por rotavirus",
      "Tosferina adquirida por alimentos",
      "Infección urinaria por Proteus como causa típica de calcificaciones",
      "Faringoamigdalitis estreptocócica neonatal"
    ],
    respuestaCorrecta: 0,
    explicacion: `El citomegalovirus congénito puede producir restricción del crecimiento, petequias, trombocitopenia, microcefalia, calcificaciones periventriculares y pérdida auditiva neurosensorial. El diagnóstico debe realizarse con pruebas apropiadas durante las primeras semanas de vida para diferenciar infección congénita de adquisición posnatal.`,
    perlaENARM: "Microcefalia más calcificaciones periventriculares y alteración auditiva: asociación clásica con CMV congénito.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de infecciones congénitas.",
      internacional: "CDC guidance on congenital cytomegalovirus infection."
    },
    bibliografia: "Centers for Disease Control and Prevention. Congenital Cytomegalovirus."
  },

  {
    id: "PED-058",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Toxoplasmosis congénita",
    dificultad: "Media",
    caso: `Recién nacido con hidrocefalia, coriorretinitis y calcificaciones intracraneales difusas. La madre refiere exposición durante el embarazo a carne insuficientemente cocida.`,
    pregunta: "¿Qué agente etiológico explica mejor esta combinación?",
    opciones: [
      "Streptococcus pneumoniae",
      "Virus sincitial respiratorio",
      "Treponema pallidum como causa exclusiva de hidrocefalia",
      "Toxoplasma gondii",
      "Bordetella pertussis"
    ],
    respuestaCorrecta: 3,
    explicacion: `La tríada clásica de toxoplasmosis congénita incluye hidrocefalia, coriorretinitis y calcificaciones intracraneales difusas. La presentación puede variar y algunos neonatos son inicialmente asintomáticos. La evaluación diagnóstica y el tratamiento deben coordinarse con especialistas en infectología y oftalmología pediátrica.`,
    perlaENARM: "Hidrocefalia, coriorretinitis y calcificaciones difusas: asociación clásica con toxoplasmosis congénita.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de toxoplasmosis congénita.",
      internacional: "CDC guidance on toxoplasmosis."
    },
    bibliografia: "Centers for Disease Control and Prevention. Toxoplasmosis."
  },

  {
    id: "PED-059",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Síndrome de abstinencia neonatal",
    dificultad: "Media",
    caso: `Recién nacido de madre con consumo crónico de opioides durante el embarazo. A las 36 horas presenta irritabilidad intensa, temblores, llanto agudo, dificultades para alimentarse y alteración del sueño.`,
    pregunta: "¿Qué proceso explica mejor la aparición de los síntomas después del nacimiento?",
    opciones: [
      "Infección bacteriana obligatoria en todos los casos",
      "Abstinencia neonatal por interrupción de la exposición intrauterina a opioides",
      "Encefalopatía hipóxico-isquémica como explicación exclusiva",
      "Enfermedad de Hirschsprung",
      "Hipertensión arterial primaria del lactante"
    ],
    respuestaCorrecta: 1,
    explicacion: `El síndrome de abstinencia neonatal puede aparecer tras la interrupción de la exposición intrauterina a opioides y otros fármacos. Las manifestaciones incluyen irritabilidad, temblores, alteraciones del sueño, disfunción gastrointestinal y dificultad para alimentarse. El manejo incluye valoración estructurada, apoyo no farmacológico y tratamiento farmacológico cuando la gravedad lo justifica.`,
    perlaENARM: "Irritabilidad, temblores y dificultad para alimentarse después de exposición prenatal a opioides: considerar abstinencia neonatal.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de exposición prenatal a sustancias.",
      internacional: "AAP guidance on neonatal opioid withdrawal syndrome."
    },
    bibliografia: "American Academy of Pediatrics. Neonatal Opioid Withdrawal Syndrome."
  },

  {
    id: "PED-060",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Hipertensión pulmonar persistente",
    dificultad: "Media",
    caso: `Recién nacido de término con hipoxemia intensa que persiste pese a oxígeno suplementario. La saturación preductal es de 96% y la posductal de 84%. El ecocardiograma muestra presión pulmonar elevada y cortocircuito de derecha a izquierda.`,
    pregunta: "¿Qué mecanismo explica la diferencia de saturación entre ambas mediciones?",
    opciones: [
      "Obstrucción aislada de la vena porta",
      "Anemia ferropénica neonatal",
      "Persistencia obligatoria de la circulación fetal en todos los recién nacidos sanos",
      "Hiperventilación sin alteración vascular",
      "Cortocircuito de derecha a izquierda a través del conducto arterioso por hipertensión pulmonar persistente"
    ],
    respuestaCorrecta: 4,
    explicacion: `La hipertensión pulmonar persistente mantiene una resistencia vascular pulmonar elevada y puede generar cortocircuitos de derecha a izquierda por el conducto arterioso y, en algunos casos, el foramen oval. La sangre menos oxigenada que pasa hacia la aorta descendente produce una saturación posductal inferior a la preductal. El ecocardiograma ayuda a confirmar el mecanismo y excluir cardiopatías congénitas estructurales.`,
    perlaENARM: "Diferencia preductal-posductal con hipoxemia neonatal: sospechar cortocircuito derecha-izquierda e investigar hipertensión pulmonar persistente.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes de hipoxemia neonatal.",
      internacional: "Neonatal pulmonary hypertension management guidance."
    },
    bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
  },
{
  id: "PED-061",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Reanimación neonatal avanzada",
  dificultad: "Alta",
  caso: `Recién nacido de término con frecuencia cardiaca de 50 lpm después de ventilación efectiva durante 30 segundos. Se inician compresiones torácicas coordinadas con ventilación mediante una vía aérea alternativa. Tras 60 segundos, la frecuencia cardiaca continúa por debajo de 60 lpm.`,
  pregunta: "¿Qué intervención farmacológica está indicada en este momento?",
  opciones: [
    "Administrar atropina como tratamiento inicial de la bradicardia",
    "Administrar adenosina para aumentar la frecuencia sinusal",
    "Iniciar infusión de dopamina antes de continuar la reanimación",
    "Administrar adrenalina siguiendo la dosis, concentración y vía del algoritmo neonatal",
    "Administrar bicarbonato de sodio de manera rutinaria"
  ],
  respuestaCorrecta: 3,
  explicacion: `La adrenalina está indicada cuando la frecuencia cardiaca permanece por debajo de 60 lpm a pesar de ventilación efectiva y compresiones torácicas adecuadas. Deben verificarse la técnica de reanimación, la vía de administración y la dosis protocolizada. Si existe sospecha de pérdida sanguínea importante, también debe valorarse hipovolemia.`,
  perlaENARM: "Bradicardia menor de 60 lpm refractaria a ventilación efectiva y compresiones: adrenalina según el algoritmo de reanimación neonatal.",
  gpc: {
    mexico: "Consultar el protocolo mexicano vigente de reanimación neonatal.",
    internacional: "AAP/AHA Neonatal Resuscitation Program."
  },
  bibliografia: "American Academy of Pediatrics. Textbook of Neonatal Resuscitation."
},

{
  id: "PED-062",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Oxigenoterapia durante la reanimación",
  dificultad: "Alta",
  caso: `Prematuro de 28 semanas que requiere ventilación con presión positiva al nacimiento. La saturación preductal es inferior al objetivo esperado para su minuto de vida, aunque existe expansión torácica y la frecuencia cardiaca está aumentando.`,
  pregunta: "¿Qué estrategia permite reducir el riesgo de hiperoxia durante la estabilización?",
  opciones: [
    "Mantener oxígeno al 100% hasta alcanzar una saturación de 100%",
    "Ajustar la concentración de oxígeno según edad gestacional, oximetría preductal y objetivos por minuto de vida",
    "Suspender la monitorización de saturación mientras recibe ventilación",
    "Mantener siempre una concentración fija de oxígeno durante toda la reanimación",
    "Evitar el uso de oximetría en prematuros"
  ],
  respuestaCorrecta: 1,
  explicacion: `La concentración inicial de oxígeno depende de la edad gestacional y debe titularse mediante oximetría preductal y objetivos de saturación por minuto de vida. La hiperoxia puede aumentar el estrés oxidativo y contribuir a lesión pulmonar y retiniana, especialmente en prematuros. La concentración debe ajustarse al protocolo vigente y a la respuesta clínica.`,
  perlaENARM: "La oxigenoterapia neonatal se titula con objetivos por minuto de vida; no se utiliza oxígeno al 100% de forma universal.",
  gpc: {
    mexico: "Consultar el algoritmo mexicano vigente de reanimación neonatal.",
    internacional: "AAP/AHA Neonatal Resuscitation Program."
  },
  bibliografia: "American Academy of Pediatrics. Textbook of Neonatal Resuscitation."
},

{
  id: "PED-063",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Encefalopatía hipóxico-isquémica",
  dificultad: "Alta",
  caso: `Recién nacido de 39 semanas con antecedente de evento hipóxico perinatal, acidosis significativa y encefalopatía moderada a las 3 horas de vida. No presenta malformaciones mayores y se encuentra en una unidad con capacidad de monitorización intensiva.`,
  pregunta: "¿Qué intervención neuroprotectora debe evaluarse sin demora?",
  opciones: [
    "Hipotermia terapéutica protocolizada si cumple los criterios de selección",
    "Hipotermia profunda sin monitorización continua",
    "Administración sistemática de corticosteroides",
    "Restricción absoluta de líquidos durante 72 horas",
    "Esperar hasta el tercer día para determinar si persiste la encefalopatía"
  ],
  respuestaCorrecta: 0,
  explicacion: `La hipotermia terapéutica reduce el riesgo de muerte o discapacidad neurológica en recién nacidos seleccionados con encefalopatía hipóxico-isquémica moderada o grave. La intervención suele iniciarse dentro de las primeras 6 horas, con criterios definidos de edad gestacional, antecedentes perinatales y evaluación neurológica. Requiere monitorización especializada de temperatura, hemodinámica y complicaciones.`,
  perlaENARM: "Encefalopatía hipóxico-isquémica elegible: identificar la ventana terapéutica de las primeras 6 horas.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre encefalopatía hipóxico-isquémica neonatal.",
    internacional: "AAP guidance on therapeutic hypothermia for neonatal encephalopathy."
  },
  bibliografia: "American Academy of Pediatrics. Neonatal Encephalopathy and Neurologic Outcome."
},

{
  id: "PED-064",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Convulsiones neonatales",
  dificultad: "Alta",
  caso: `Neonato de 2 días con encefalopatía posterior a hipoxia perinatal. Presenta episodios de desviación ocular y movimientos estereotipados, pero algunos eventos sospechosos no muestran manifestaciones motoras evidentes.`,
  pregunta: "¿Qué estudio permite identificar con mayor fiabilidad las crisis electrográficas?",
  opciones: [
    "Radiografía simple de cráneo",
    "Electrocardiograma convencional",
    "Ultrasonido abdominal",
    "Determinación aislada de bilirrubina",
    "Monitorización electroencefalográfica, preferentemente continua cuando esté indicada y disponible"
  ],
  respuestaCorrecta: 4,
  explicacion: `Las convulsiones neonatales pueden manifestarse únicamente mediante cambios electrográficos. La monitorización EEG permite confirmar crisis, caracterizar su carga y valorar la respuesta al tratamiento. La evaluación etiológica debe considerar encefalopatía hipóxico-isquémica, hemorragia, infección, trastornos metabólicos y malformaciones cerebrales.`,
  perlaENARM: "Las convulsiones neonatales pueden ser exclusivamente electrográficas; la clínica aislada puede subestimarlas.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de convulsiones neonatales.",
    internacional: "International League Against Epilepsy neonatal seizure guidance."
  },
  bibliografia: "International League Against Epilepsy. Neonatal Seizure Classification and Management Guidance."
},

{
  id: "PED-065",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Hiperbilirrubinemia grave",
  dificultad: "Alta",
  caso: `Recién nacido de 36 semanas con hiperbilirrubinemia que alcanza el umbral de escalamiento de atención para su edad en horas y factores de riesgo. Presenta letargo y alteración del tono muscular.`,
  pregunta: "¿Qué estrategia corresponde ante la posibilidad de neurotoxicidad por bilirrubina?",
  opciones: [
    "Dar seguimiento ambulatorio en una semana",
    "Iniciar hierro oral y suspender las mediciones",
    "Escalar urgentemente la atención, administrar fototerapia intensiva y valorar exanguinotransfusión según criterios vigentes",
    "Administrar vitamina D como tratamiento específico",
    "Esperar a que la bilirrubina alcance un valor fijo independiente de la edad"
  ],
  respuestaCorrecta: 2,
  explicacion: `La hiperbilirrubinemia que alcanza umbrales de escalamiento exige atención urgente. La fototerapia intensiva y la preparación para exanguinotransfusión dependen de la edad posnatal en horas, edad gestacional, factores de neurotoxicidad y signos de encefalopatía. El deterioro neurológico requiere intervención inmediata y valoración especializada.`,
  perlaENARM: "El tratamiento se decide por bilirrubina, edad en horas, edad gestacional y factores de neurotoxicidad, no por un único umbral universal.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre hiperbilirrubinemia neonatal.",
    internacional: "AAP Clinical Practice Guideline for Management of Hyperbilirubinemia."
  },
  bibliografia: "American Academy of Pediatrics. Clinical Practice Guideline for Management of Hyperbilirubinemia."
},

{
  id: "PED-066",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Ictericia asociada con lactancia",
  dificultad: "Alta",
  caso: `Lactante de 13 días alimentado exclusivamente al pecho, con ictericia persistente, ganancia ponderal insuficiente y pocas micciones. La bilirrubina es predominantemente indirecta.`,
  pregunta: "¿Qué explicación debe considerarse antes de atribuir el cuadro a ictericia por leche materna?",
  opciones: [
    "La ganancia ponderal insuficiente demuestra una enfermedad hemolítica",
    "La lactancia materna siempre provoca hiperbilirrubinemia patológica",
    "La bilirrubina indirecta elevada confirma atresia biliar",
    "La ingesta insuficiente con deshidratación puede contribuir a la hiperbilirrubinemia",
    "La ictericia persistente excluye cualquier problema de alimentación"
  ],
  respuestaCorrecta: 3,
  explicacion: `La ingesta insuficiente puede aumentar la circulación enterohepática de bilirrubina y asociarse con pérdida excesiva de peso y deshidratación. Deben evaluarse la transferencia de leche, la frecuencia de las tomas, el peso, la hidratación y la bilirrubina. La ictericia asociada con leche materna se considera después de valorar estas variables y descartar causas patológicas pertinentes.`,
  perlaENARM: "Ictericia en un lactante amamantado con pérdida ponderal: evaluar primero suficiencia de ingesta e hidratación.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente de hiperbilirrubinemia neonatal y lactancia.",
    internacional: "AAP Clinical Practice Guideline for Management of Hyperbilirubinemia."
  },
  bibliografia: "American Academy of Pediatrics. Management of Hyperbilirubinemia in the Newborn Infant."
},

{
  id: "PED-067",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Sepsis neonatal y biomarcadores",
  dificultad: "Alta",
  caso: `Neonato de 12 horas con factores de riesgo infeccioso y deterioro respiratorio. La proteína C reactiva inicial es normal, pero presenta inestabilidad térmica y apnea recurrente.`,
  pregunta: "¿Qué conclusión debe obtenerse del resultado inicial de proteína C reactiva?",
  opciones: [
    "La infección bacteriana queda excluida definitivamente",
    "El resultado normal no descarta por sí solo sepsis neonatal temprana",
    "Se puede suspender toda vigilancia clínica",
    "Los hemocultivos dejan de ser útiles",
    "La proteína C reactiva confirma una infección viral"
  ],
  respuestaCorrecta: 1,
  explicacion: `La proteína C reactiva puede permanecer normal durante las primeras horas de una infección y su sensibilidad depende del momento de obtención. La sospecha clínica de sepsis no debe descartarse por un biomarcador aislado. La decisión de iniciar o suspender antimicrobianos debe integrar evolución, factores de riesgo, cultivos y estudios seriados cuando correspondan.`,
  perlaENARM: "Un marcador inflamatorio normal al inicio no excluye sepsis neonatal.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre sepsis neonatal.",
    internacional: "NICE. Neonatal infection: antibiotics for prevention and treatment."
  },
  bibliografia: "NICE. Neonatal infection: antibiotics for prevention and treatment."
},

{
  id: "PED-068",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Enterocolitis necrosante",
  dificultad: "Alta",
  caso: `Prematuro de 28 semanas con distensión abdominal, acidosis metabólica, trombocitopenia y sangre en heces. La radiografía inicial no muestra neumatosis intestinal, pero el deterioro clínico continúa.`,
  pregunta: "¿Qué conducta es apropiada ante una sospecha clínica significativa pese a la imagen inicial no concluyente?",
  opciones: [
    "Descartar definitivamente enterocolitis necrosante",
    "Continuar alimentación enteral completa sin vigilancia",
    "Dar el alta por ausencia de neumatosis",
    "Esperar a que aparezca neumoperitoneo antes de tratar",
    "Suspender la alimentación, iniciar soporte y evaluación seriada, y tratar según la gravedad y el protocolo"
  ],
  respuestaCorrecta: 4,
  explicacion: `La enterocolitis necrosante puede evolucionar antes de que los hallazgos radiológicos sean evidentes. La conducta depende de la integración de síntomas digestivos, deterioro sistémico, laboratorio e imagen seriada. Si la sospecha es significativa, se requiere suspensión de la alimentación, soporte, antimicrobianos según protocolo y valoración quirúrgica cuando corresponda.`,
  perlaENARM: "Una radiografía inicial sin neumatosis no excluye enterocolitis necrosante en un prematuro que se deteriora.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de enterocolitis necrosante.",
    internacional: "Neonatal intensive care guidance on necrotizing enterocolitis."
  },
  bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
},

{
  id: "PED-069",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Vólvulo del intestino medio",
  dificultad: "Alta",
  caso: `Recién nacido de 4 días con vómitos biliosos súbitos, palidez y deterioro hemodinámico. El abdomen no está marcadamente distendido, pero se sospecha obstrucción intestinal.`,
  pregunta: "¿Qué diagnóstico debe excluirse urgentemente por el riesgo de isquemia intestinal?",
  opciones: [
    "Malrotación intestinal con vólvulo del intestino medio",
    "Reflujo gastroesofágico fisiológico",
    "Estenosis hipertrófica del píloro como causa habitual de vómito bilioso neonatal",
    "Ictericia fisiológica",
    "Cólico del lactante"
  ],
  respuestaCorrecta: 0,
  explicacion: `La malrotación intestinal con vólvulo puede comprometer rápidamente la circulación mesentérica y producir necrosis intestinal. El vómito bilioso neonatal es un signo de alarma que requiere estabilización, evaluación urgente y valoración quirúrgica. La ausencia de distensión abdominal marcada no excluye una obstrucción grave.`,
  perlaENARM: "Vómito bilioso neonatal con deterioro: descartar vólvulo intestinal aunque la distensión sea discreta.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de urgencias quirúrgicas neonatales.",
    internacional: "Pediatric surgical guidance on malrotation and midgut volvulus."
  },
  bibliografia: "Ashcraft's Pediatric Surgery."
},

{
  id: "PED-070",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Hipoglucemia persistente",
  dificultad: "Alta",
  caso: `Neonato con hipoglucemia recurrente que requiere una velocidad de infusión de glucosa elevada para mantener la glucemia. Durante un episodio documentado, la insulina permanece detectable y los ácidos grasos libres están suprimidos.`,
  pregunta: "¿Qué mecanismo fisiopatológico explica mejor estos hallazgos?",
  opciones: [
    "Deficiencia aislada de vitamina K",
    "Hipotiroidismo transitorio como explicación obligatoria",
    "Hiperinsulinismo persistente o inapropiado para la concentración de glucosa",
    "Atresia duodenal",
    "Colestasis neonatal aislada"
  ],
  respuestaCorrecta: 2,
  explicacion: `Durante la hipoglucemia, la secreción de insulina debe suprimirse. La presencia de insulina inapropiadamente detectable, junto con supresión de ácidos grasos libres y necesidad elevada de glucosa, orienta a hiperinsulinismo. Debe obtenerse una muestra crítica cuando sea posible sin retrasar la corrección de la hipoglucemia sintomática.`,
  perlaENARM: "Hipoglucemia persistente con insulina inapropiada y ácidos grasos libres bajos: investigar hiperinsulinismo.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de hipoglucemia neonatal persistente.",
    internacional: "Pediatric Endocrine Society guidance on persistent hypoglycemia."
  },
  bibliografia: "Pediatric Endocrine Society. Recommendations for Evaluation and Management of Persistent Hypoglycemia."
},

{
  id: "PED-071",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Hiponatremia sintomática",
  dificultad: "Alta",
  caso: `Prematuro con enfermedad crítica presenta convulsiones y sodio sérico de 117 mmol/L. Se confirma hiponatremia hipotónica y se inicia monitorización intensiva.`,
  pregunta: "¿Qué principio debe guiar la corrección inicial?",
  opciones: [
    "Normalizar el sodio en pocos minutos sin límites",
    "Administrar agua libre para disminuir la osmolaridad",
    "Posponer cualquier tratamiento hasta conocer la causa definitiva",
    "Tratar urgentemente los síntomas con solución hipertónica cuando esté indicada y controlar estrechamente la velocidad de corrección",
    "Utilizar diuréticos como única intervención"
  ],
  respuestaCorrecta: 3,
  explicacion: `La hiponatremia grave sintomática requiere tratamiento urgente, habitualmente con solución salina hipertónica bajo monitorización. El objetivo inicial es controlar los síntomas neurológicos y evitar la sobrecorrección, que puede producir lesión osmótica. Deben evaluarse la duración, el estado de volumen y la causa subyacente.`,
  perlaENARM: "Hiponatremia con convulsiones: urgencia neurológica; tratar síntomas y evitar sobrecorrección.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de urgencias hidroelectrolíticas neonatales.",
    internacional: "Pediatric and neonatal guidance on severe symptomatic hyponatremia."
  },
  bibliografia: "Clinical guidance on hyponatremia in children and neonates."
},

{
  id: "PED-072",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Hiperpotasemia neonatal",
  dificultad: "Alta",
  caso: `Prematuro extremo de 12 horas de vida con potasio sérico de 7.2 mmol/L en una muestra no hemolizada. El electrocardiograma muestra ondas T picudas y ensanchamiento progresivo del QRS.`,
  pregunta: "¿Cuál es la prioridad terapéutica inmediata?",
  opciones: [
    "Administrar potasio intravenoso para estabilizar la membrana",
    "Administrar calcio intravenoso para estabilizar el miocardio y comenzar medidas para reducir el potasio según protocolo",
    "Administrar bicarbonato oral como único tratamiento",
    "Esperar a que aparezcan arritmias sostenidas",
    "Iniciar aporte elevado de potasio para corregir la inmadurez renal"
  ],
  respuestaCorrecta: 1,
  explicacion: `La hiperpotasemia con cambios electrocardiográficos constituye una urgencia por riesgo de arritmias malignas. El calcio intravenoso estabiliza la membrana miocárdica, pero no reduce el potasio sérico. Se requieren medidas adicionales de redistribución y eliminación, además de revisar el aporte de potasio, la función renal y posibles causas iatrogénicas.`,
  perlaENARM: "Calcio para estabilizar el miocardio; no reduce el potasio. Deben añadirse medidas para corregir la hiperpotasemia.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de hiperpotasemia neonatal.",
    internacional: "Neonatal emergency guidance on hyperkalemia."
  },
  bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
},

{
  id: "PED-073",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Cardiopatía congénita crítica",
  dificultad: "Alta",
  caso: `Recién nacido de 3 días que había permanecido estable presenta rechazo del alimento, taquipnea, pulsos femorales débiles y acidosis metabólica. La saturación es de 95% en ambas extremidades, pero el estado hemodinámico empeora.`,
  pregunta: "¿Qué diagnóstico debe considerarse aunque la saturación no esté marcadamente disminuida?",
  opciones: [
    "Taquipnea transitoria del recién nacido",
    "Ictericia fisiológica",
    "Reflujo gastroesofágico aislado",
    "Hipoglucemia como explicación obligatoria",
    "Cardiopatía congénita dependiente del conducto arterioso, como coartación crítica de la aorta"
  ],
  respuestaCorrecta: 4,
  explicacion: `Algunas cardiopatías congénitas críticas producen deterioro sistémico cuando disminuye el flujo a través del conducto arterioso. La coartación crítica puede manifestarse con pulsos femorales débiles, hipoperfusión, acidosis y choque, sin cianosis intensa. La evaluación requiere ecocardiografía urgente y estabilización especializada; ante sospecha alta de lesión ductus-dependiente puede indicarse prostaglandina E1 bajo monitorización.`,
  perlaENARM: "Pulsos femorales débiles y choque neonatal: considerar coartación crítica incluso con saturación aparentemente normal.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de cardiopatías congénitas críticas.",
    internacional: "Pediatric cardiology guidance on duct-dependent congenital heart disease."
  },
  bibliografia: "Moss and Adams. Heart Disease in Infants, Children, and Adolescents."
},

{
  id: "PED-074",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Cardiopatía dependiente del conducto arterioso",
  dificultad: "Alta",
  caso: `Neonato de 5 días con cianosis central persistente, saturación baja pese al oxígeno y ecocardiograma pendiente. Se sospecha una cardiopatía congénita crítica dependiente del conducto arterioso.`,
  pregunta: "¿Qué intervención farmacológica puede mantener temporalmente el flujo sanguíneo hasta la evaluación definitiva?",
  opciones: [
    "Prostaglandina E1 en infusión bajo monitorización especializada",
    "Indometacina para cerrar el conducto arterioso",
    "Ibuprofeno para reducir el flujo pulmonar en cualquier cardiopatía",
    "Digoxina oral como tratamiento universal de la cianosis",
    "Vitamina K intravenosa como vasodilatador"
  ],
  respuestaCorrecta: 0,
  explicacion: `La prostaglandina E1 mantiene la permeabilidad del conducto arterioso y puede ser vital en lesiones ductus-dependientes. Debe administrarse en un entorno monitorizado por el riesgo de apnea e hipotensión, con preparación para soporte respiratorio. El tratamiento definitivo depende de la anatomía y la evaluación cardiológica.`,
  perlaENARM: "Sospecha de cardiopatía ductus-dependiente: prostaglandina E1; no utilizar fármacos destinados al cierre ductal.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de cardiopatía congénita crítica.",
    internacional: "Pediatric cardiology guidance on duct-dependent lesions."
  },
  bibliografia: "Moss and Adams. Heart Disease in Infants, Children, and Adolescents."
},

{
  id: "PED-075",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Retinopatía del prematuro",
  dificultad: "Alta",
  caso: `Prematuro de 25 semanas y 720 g que requirió soporte respiratorio prolongado. Al acercarse a la edad posmenstrual establecida para vigilancia oftalmológica, permanece clínicamente estable.`,
  pregunta: "¿Qué estrategia reduce el riesgo de pérdida visual por retinopatía del prematuro?",
  opciones: [
    "Realizar fondo de ojo únicamente si los padres detectan estrabismo",
    "Esperar hasta la edad escolar para iniciar vigilancia",
    "Suspender el seguimiento si la saturación es normal",
    "Realizar tamizaje oftalmológico en los intervalos establecidos y tratar oportunamente la enfermedad que cumpla criterios",
    "Administrar vitamina A como sustituto de la exploración retiniana"
  ],
  respuestaCorrecta: 3,
  explicacion: `La retinopatía del prematuro se asocia con prematuridad extrema, bajo peso y exposición a factores que alteran el desarrollo vascular retiniano. La detección depende de tamizaje oportuno según edad gestacional, peso y evolución clínica. Las formas que cumplen criterios requieren tratamiento por oftalmología especializada y seguimiento posterior.`,
  perlaENARM: "La retinopatía del prematuro puede ser asintomática al inicio: el tamizaje programado es indispensable.",
  gpc: {
    mexico: "Consultar la normativa mexicana vigente para tamizaje de retinopatía del prematuro.",
    internacional: "AAP guidance on screening and management of retinopathy of prematurity."
  },
  bibliografia: "American Academy of Pediatrics. Screening Examination of Premature Infants for Retinopathy of Prematurity."
},

{
  id: "PED-076",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Displasia broncopulmonar",
  dificultad: "Alta",
  caso: `Prematuro de 25 semanas con dependencia de oxígeno y soporte respiratorio prolongado. La imagen pulmonar muestra alteraciones persistentes y el paciente presenta dificultad para retirar el soporte.`,
  pregunta: "¿Qué proceso fisiopatológico contribuye de manera central a la displasia broncopulmonar?",
  opciones: [
    "Aumento de la alveolización por maduración acelerada",
    "Alteración del desarrollo alveolar y vascular, junto con inflamación y lesión pulmonar",
    "Depósito de bilirrubina en los alvéolos",
    "Ausencia congénita de circulación pulmonar en todos los casos",
    "Hipertrofia del píloro con compresión pulmonar"
  ],
  respuestaCorrecta: 1,
  explicacion: `La displasia broncopulmonar refleja alteraciones del desarrollo pulmonar en el prematuro, agravadas por inflamación, exposición a oxígeno, ventilación mecánica y otros factores. La definición clínica depende de los criterios utilizados y del soporte respiratorio a una edad posmenstrual determinada. El manejo se individualiza y busca reducir la lesión adicional y favorecer el crecimiento pulmonar.`,
  perlaENARM: "Displasia broncopulmonar: alteración del desarrollo alveolar y vascular en el pulmón inmaduro.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de enfermedad pulmonar crónica del prematuro.",
    internacional: "Neonatal guidance on bronchopulmonary dysplasia."
  },
  bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
},

{
  id: "PED-077",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Hemorragia intraventricular",
  dificultad: "Alta",
  caso: `Prematuro de 26 semanas que presenta deterioro súbito, apnea, hipotensión y caída del hematocrito. El ultrasonido transfontanelar muestra hemorragia intraventricular con dilatación ventricular progresiva.`,
  pregunta: "¿Qué complicación neurológica requiere vigilancia estrecha durante la evolución?",
  opciones: [
    "Atresia de vías biliares",
    "Estenosis hipertrófica del píloro",
    "Hidrocefalia poshemorrágica",
    "Hipotiroidismo primario",
    "Displasia de cadera"
  ],
  respuestaCorrecta: 2,
  explicacion: `La hemorragia intraventricular del prematuro puede obstruir la circulación o absorción del líquido cefalorraquídeo y ocasionar dilatación ventricular progresiva. La vigilancia seriada del perímetro cefálico, la exploración neurológica y la neuroimagen permite identificar a los pacientes que requieren intervención neuroquirúrgica o manejo especializado.`,
  perlaENARM: "Hemorragia intraventricular en prematuros: vigilar dilatación ventricular y posible hidrocefalia poshemorrágica.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de neuroimagen neonatal.",
    internacional: "Neonatal neuroimaging guidance for preterm infants."
  },
  bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
},

{
  id: "PED-078",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Hemorragia de la matriz germinal",
  dificultad: "Alta",
  caso: `Prematuro extremo de 24 semanas que presenta fluctuaciones de presión arterial y episodios de hipoxemia durante las primeras 72 horas. Se busca prevenir complicaciones hemorrágicas cerebrales.`,
  pregunta: "¿Qué medida forma parte de una estrategia razonable para reducir factores asociados con hemorragia cerebral del prematuro?",
  opciones: [
    "Realizar manipulaciones bruscas y frecuentes para estimular la respuesta neurológica",
    "Evitar toda monitorización hemodinámica",
    "Mantener oscilaciones amplias de presión arterial como estrategia de adaptación",
    "Administrar anticoagulación profiláctica a todos los prematuros extremos",
    "Proporcionar cuidados de neuroprotección con manejo hemodinámico y respiratorio cuidadoso, evitando fluctuaciones importantes"
  ],
  respuestaCorrecta: 4,
  explicacion: `La matriz germinal es vulnerable por su vascularización inmadura. Las fluctuaciones hemodinámicas y los cambios bruscos en el flujo cerebral pueden contribuir a lesión hemorrágica. Las estrategias preventivas incluyen estabilización respiratoria y circulatoria, manipulación cuidadosa y cumplimiento de protocolos específicos; ninguna medida aislada elimina por completo el riesgo.`,
  perlaENARM: "En prematuros extremos, la estabilidad hemodinámica y la reducción de fluctuaciones forman parte de los cuidados neuroprotectores.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de cuidados del prematuro extremo.",
    internacional: "Neonatal neuroprotection guidance for extremely preterm infants."
  },
  bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
},

{
  id: "PED-079",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Apnea de la prematuridad",
  dificultad: "Alta",
  caso: `Prematuro de 29 semanas tratado con cafeína por apnea. Después de varios días estable, desarrolla aumento de episodios de apnea, intolerancia alimentaria y temperatura inestable.`,
  pregunta: "¿Qué conducta clínica es más apropiada ante este cambio de patrón?",
  opciones: [
    "Aumentar automáticamente la cafeína sin investigar otras causas",
    "Reevaluar causas secundarias como sepsis, anemia, alteraciones metabólicas o deterioro respiratorio",
    "Considerar que toda apnea en un prematuro es fisiológica",
    "Suspender permanentemente la monitorización",
    "Indicar alimentación oral forzada durante los episodios"
  ],
  respuestaCorrecta: 1,
  explicacion: `Aunque la apnea de la prematuridad es frecuente, un aumento nuevo de episodios después de estabilidad obliga a investigar causas secundarias. Entre ellas están infección, anemia, alteraciones de glucosa o electrolitos, obstrucción de la vía aérea y enfermedad respiratoria. La cafeína y el soporte respiratorio deben ajustarse según la evaluación clínica.`,
  perlaENARM: "Apnea nueva o agravada después de estabilidad: buscar una causa secundaria antes de atribuirla solo a prematuridad.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de apnea de la prematuridad.",
    internacional: "Neonatal care guidance on apnea of prematurity."
  },
  bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
},

{
  id: "PED-080",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Enfermedad hemolítica del recién nacido",
  dificultad: "Alta",
  caso: `Recién nacido de madre Rh negativa con anticuerpos anti-D detectables durante el embarazo. Presenta anemia, reticulocitosis e hiperbilirrubinemia precoz. La prueba de antiglobulina directa es positiva.`,
  pregunta: "¿Qué mecanismo explica el cuadro hematológico?",
  opciones: [
    "Destrucción de eritrocitos fetales por anticuerpos maternos IgG que atraviesan la placenta",
    "Deficiencia aislada de vitamina D",
    "Aplasia eritrocitaria causada por déficit de surfactante",
    "Obstrucción biliar como causa de anemia hemolítica",
    "Producción insuficiente de bilirrubina por inmadurez hepática"
  ],
  respuestaCorrecta: 0,
  explicacion: `Los anticuerpos maternos IgG contra antígenos eritrocitarios fetales pueden atravesar la placenta y causar hemólisis, anemia e hiperbilirrubinemia. La gravedad depende de la especificidad y concentración de anticuerpos y de la respuesta fetal. La prevención de la aloinmunización Rh mediante inmunoglobulina anti-D es una estrategia fundamental en las pacientes elegibles.`,
  perlaENARM: "Incompatibilidad Rh: anticuerpos IgG maternos cruzan la placenta y producen hemólisis fetal o neonatal.",
  gpc: {
    mexico: "Consultar normativa mexicana vigente de atención prenatal y enfermedad hemolítica perinatal.",
    internacional: "Guidance on prevention and management of Rh alloimmunization."
  },
  bibliografia: "Williams Obstetrics. Alloimmunization and Hemolytic Disease of the Fetus and Newborn."
},

{
  id: "PED-081",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Enfermedad hemolítica y anemia fetal",
  dificultad: "Alta",
  caso: `Recién nacido de madre con aloinmunización Rh significativa. Presenta anemia grave, hepatomegalia, edema generalizado y derrames serosos. Durante la gestación se había documentado hidropesía fetal.`,
  pregunta: "¿Qué mecanismo fisiopatológico explica la aparición de hidropesía en la enfermedad hemolítica grave?",
  opciones: [
    "Aumento aislado de bilirrubina indirecta sin repercusión hemodinámica",
    "Obstrucción del conducto biliar",
    "Disminución de la masa eritrocitaria con hipoxia, insuficiencia cardiaca de alto gasto y edema generalizado",
    "Exceso de surfactante pulmonar",
    "Hipertensión portal como única alteración"
  ],
  respuestaCorrecta: 2,
  explicacion: `La hemólisis fetal intensa puede causar anemia profunda, hipoxia tisular y aumento compensatorio del gasto cardiaco. Cuando la compensación falla, se produce insuficiencia cardiaca y acumulación de líquido en compartimentos fetales, manifestada como hidropesía. Es una condición grave que requiere manejo especializado antenatal y neonatal.`,
  perlaENARM: "Hidropesía fetal por anemia: la insuficiencia cardiaca de alto gasto es un mecanismo central.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de aloinmunización materno-fetal.",
    internacional: "Guidance on fetal anemia and hemolytic disease of the fetus and newborn."
  },
  bibliografia: "Williams Obstetrics. Fetal Anemia and Hemolytic Disease."
},

{
  id: "PED-082",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Sífilis congénita",
  dificultad: "Alta",
  caso: `Recién nacido de madre con sífilis no tratada adecuadamente durante el embarazo. Presenta rinitis persistente, lesiones palmoplantares y alteraciones óseas en radiografías.`,
  pregunta: "¿Qué infección explica mejor los hallazgos?",
  opciones: [
    "Toxoplasmosis congénita",
    "Citomegalovirus congénito",
    "Infección neonatal por rotavirus",
    "Sífilis congénita",
    "Infección por virus sincitial respiratorio"
  ],
  respuestaCorrecta: 3,
  explicacion: `La sífilis congénita puede manifestarse con rinitis, lesiones cutáneas palmoplantares, hepatoesplenomegalia, alteraciones hematológicas y lesiones óseas. La evaluación integra antecedentes maternos, pruebas serológicas y exploración neonatal. El tratamiento con penicilina se determina según la probabilidad de infección, los estudios y la adecuación del tratamiento materno.`,
  perlaENARM: "Rinitis persistente, lesiones palmoplantares y alteraciones óseas en un neonato: sospechar sífilis congénita.",
  gpc: {
    mexico: "Consultar la normativa mexicana vigente de prevención y tratamiento de sífilis congénita.",
    internacional: "CDC. Sexually Transmitted Infections Treatment Guidelines."
  },
  bibliografia: "Centers for Disease Control and Prevention. Sexually Transmitted Infections Treatment Guidelines."
},

{
  id: "PED-083",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Herpes neonatal",
  dificultad: "Alta",
  caso: `Neonato de 10 días con fiebre, irritabilidad, convulsiones y elevación de transaminasas. No presenta vesículas cutáneas. La madre tuvo lesiones genitales compatibles con herpes cerca del parto.`,
  pregunta: "¿Qué principio debe orientar la conducta inicial?",
  opciones: [
    "Descartar herpes porque no existen vesículas",
    "Iniciar aciclovir intravenoso ante sospecha clínica significativa mientras se completa la evaluación",
    "Administrar exclusivamente antibiótico tópico",
    "Esperar el resultado de todas las pruebas antes de tratar",
    "Indicar fototerapia como tratamiento etiológico"
  ],
  respuestaCorrecta: 1,
  explicacion: `El herpes neonatal puede presentarse como enfermedad del sistema nervioso central o enfermedad diseminada sin lesiones vesiculares evidentes. La sospecha clínica significativa exige evaluación urgente e inicio temprano de aciclovir intravenoso. Deben estudiarse el líquido cefalorraquídeo cuando sea seguro, muestras virológicas y función hepática, sin retrasar el tratamiento en pacientes de alto riesgo.`,
  perlaENARM: "La ausencia de vesículas no excluye herpes neonatal; convulsiones y hepatitis en un neonato exigen alta sospecha.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de herpes neonatal.",
    internacional: "AAP guidance on neonatal herpes simplex virus infection."
  },
  bibliografia: "American Academy of Pediatrics. Red Book: Report of the Committee on Infectious Diseases."
},

{
  id: "PED-084",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Infección congénita por rubéola",
  dificultad: "Alta",
  caso: `Recién nacido cuya madre presentó exantema durante el primer trimestre. El neonato presenta cataratas, conducto arterioso persistente y pérdida auditiva neurosensorial.`,
  pregunta: "¿Qué infección congénita es compatible con esta combinación de manifestaciones?",
  opciones: [
    "Toxoplasmosis congénita",
    "Citomegalovirus congénito como única posibilidad",
    "Rubéola congénita",
    "Sífilis congénita sin afectación ocular",
    "Infección neonatal por estreptococo del grupo B"
  ],
  respuestaCorrecta: 2,
  explicacion: `La rubéola congénita se asocia clásicamente con cataratas, cardiopatía congénita —en particular conducto arterioso persistente— y sordera neurosensorial. La probabilidad y gravedad dependen del momento de la infección materna, siendo mayor el riesgo de daño fetal cuando ocurre temprano en la gestación.`,
  perlaENARM: "Cataratas, conducto arterioso persistente y sordera: tríada clásica de rubéola congénita.",
  gpc: {
    mexico: "Consultar normativa mexicana vigente de vacunación y vigilancia de rubéola congénita.",
    internacional: "CDC guidance on congenital rubella syndrome."
  },
  bibliografia: "Centers for Disease Control and Prevention. Congenital Rubella Syndrome."
},

{
  id: "PED-085",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Infección por estreptococo del grupo B",
  dificultad: "Alta",
  caso: `Recién nacido de 7 horas con dificultad respiratoria, hipotensión y mala perfusión. La madre presentó colonización por estreptococo del grupo B y no recibió profilaxis intraparto adecuada.`,
  pregunta: "¿Qué forma de infección neonatal es más probable por el momento de presentación?",
  opciones: [
    "Infección neonatal temprana por estreptococo del grupo B",
    "Infección urinaria tardía adquirida en la comunidad",
    "Osteomielitis neonatal por transmisión alimentaria",
    "Meningitis tuberculosa de evolución crónica",
    "Infección por citomegalovirus adquirida durante la lactancia"
  ],
  respuestaCorrecta: 0,
  explicacion: `La enfermedad neonatal temprana por estreptococo del grupo B suele manifestarse durante las primeras 24 horas o los primeros días, frecuentemente con sepsis y neumonía. La prevención depende del tamizaje materno y de la profilaxis intraparto cuando está indicada. El neonato sintomático requiere evaluación y tratamiento empírico sin retrasos.`,
  perlaENARM: "Sepsis o neumonía durante las primeras horas en un neonato con riesgo materno: considerar estreptococo del grupo B.",
  gpc: {
    mexico: "Consultar la normativa mexicana vigente para prevención de infección neonatal por estreptococo del grupo B.",
    internacional: "AAP guidance on management of infants at risk for group B streptococcal disease."
  },
  bibliografia: "American Academy of Pediatrics. Management of Infants at Risk for Group B Streptococcal Disease."
},

{
  id: "PED-086",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Infección neonatal por Listeria",
  dificultad: "Alta",
  caso: `Neonato con sepsis de inicio temprano y neumonía. La madre presentó fiebre durante el embarazo y refirió consumo frecuente de alimentos no pasteurizados. El hemocultivo identifica bacilos grampositivos.`,
  pregunta: "¿Qué agente debe considerarse por el contexto clínico y microbiológico?",
  opciones: [
    "Mycoplasma pneumoniae como causa habitual de sepsis neonatal temprana",
    "Virus de influenza como causa de bacilos grampositivos",
    "Candida auris como explicación obligatoria de todos los hemocultivos",
    "Listeria monocytogenes",
    "Vibrio cholerae"
  ],
  respuestaCorrecta: 3,
  explicacion: `Listeria monocytogenes puede transmitirse verticalmente y producir sepsis, neumonía o meningitis neonatal. La infección materna puede ser inespecífica y asociarse con alimentos contaminados. El tratamiento empírico neonatal debe seguir el protocolo institucional y ajustarse cuando se identifique el microorganismo y su sensibilidad.`,
  perlaENARM: "Sepsis neonatal temprana con bacilos grampositivos y antecedente materno compatible: considerar Listeria.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de sepsis neonatal.",
    internacional: "AAP guidance on neonatal bacterial infections."
  },
  bibliografia: "Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases."
},

{
  id: "PED-087",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Hipotiroidismo congénito",
  dificultad: "Alta",
  caso: `Lactante de 12 días con tamiz neonatal compatible con hipotiroidismo congénito. La familia refiere somnolencia y dificultades para alimentarse, aunque la exploración inicial no muestra alteraciones llamativas.`,
  pregunta: "¿Qué conducta debe priorizarse después de un tamiz positivo?",
  opciones: [
    "Esperar hasta los seis meses para repetir el tamiz",
    "Confirmar rápidamente con pruebas séricas y comenzar tratamiento oportuno cuando se establezca el diagnóstico, sin retrasos innecesarios",
    "Indicar suplementos de hierro como tratamiento hormonal",
    "Descartar hipotiroidismo si no existe bocio",
    "Esperar a que aparezcan alteraciones neurológicas antes de intervenir"
  ],
  respuestaCorrecta: 1,
  explicacion: `El hipotiroidismo congénito puede ser clínicamente poco evidente al nacimiento, pero la deficiencia hormonal prolongada puede afectar de manera irreversible el neurodesarrollo. Un tamiz positivo requiere confirmación rápida mediante pruebas séricas y tratamiento temprano según el protocolo especializado. No debe esperarse la aparición de síntomas graves para actuar.`,
  perlaENARM: "Tamiz neonatal positivo para hipotiroidismo: confirmación sérica rápida y tratamiento temprano para proteger el neurodesarrollo.",
  gpc: {
    mexico: "Consultar la normativa mexicana vigente de tamiz neonatal e hipotiroidismo congénito.",
    internacional: "International guidance on congenital hypothyroidism."
  },
  bibliografia: "International guidelines for congenital hypothyroidism."
},

{
  id: "PED-088",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Hiperplasia suprarrenal congénita",
  dificultad: "Alta",
  caso: `Lactante de 12 días con vómitos, pérdida de peso, deshidratación e hipotensión. Los estudios muestran hiponatremia e hiperpotasemia. La exploración genital identifica virilización en una recién nacida.`,
  pregunta: "¿Qué enfermedad debe sospecharse de manera prioritaria?",
  opciones: [
    "Hipotiroidismo congénito aislado",
    "Atresia duodenal",
    "Síndrome de abstinencia neonatal",
    "Deficiencia aislada de vitamina K",
    "Hiperplasia suprarrenal congénita por deficiencia de 21-hidroxilasa con pérdida de sal"
  ],
  respuestaCorrecta: 4,
  explicacion: `La deficiencia de 21-hidroxilasa puede reducir la síntesis de cortisol y aldosterona, aumentar la producción de andrógenos y provocar una crisis suprarrenal con pérdida de sal. La combinación de deshidratación, hipotensión, hiponatremia, hiperpotasemia y virilización es altamente sugestiva. La sospecha de crisis requiere tratamiento urgente con glucocorticoides y corrección de alteraciones hemodinámicas y electrolíticas.`,
  perlaENARM: "Virilización más pérdida de sal e hiperpotasemia en una recién nacida: sospechar hiperplasia suprarrenal congénita.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de tamiz neonatal y crisis suprarrenal.",
    internacional: "Endocrine Society Clinical Practice Guideline on Congenital Adrenal Hyperplasia."
  },
  bibliografia: "Endocrine Society. Congenital Adrenal Hyperplasia Clinical Practice Guideline."
},

{
  id: "PED-089",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Errores innatos del metabolismo",
  dificultad: "Alta",
  caso: `Neonato de 4 días previamente estable que desarrolla rechazo del alimento, vómitos, letargo y taquipnea después del inicio de la alimentación. No hay un foco infeccioso evidente y la evolución progresa rápidamente.`,
  pregunta: "¿Qué enfoque debe incorporarse a la evaluación urgente?",
  opciones: [
    "Considerar exclusivamente reflujo fisiológico",
    "Descartar trastornos metabólicos porque el neonato estaba sano al nacimiento",
    "Investigar errores innatos del metabolismo junto con sepsis y otras causas de deterioro neonatal",
    "Atribuir el cuadro a cólico del lactante",
    "Indicar alimentación forzada para evitar catabolismo"
  ],
  respuestaCorrecta: 2,
  explicacion: `Algunos errores innatos del metabolismo se manifiestan después de un periodo inicial aparentemente normal, cuando comienza la exposición a proteínas, carbohidratos o grasas. El deterioro puede incluir encefalopatía, vómitos, acidosis o hiperamonemia. La evaluación urgente puede requerir gasometría, glucosa, lactato, amonio, cetonas y muestras metabólicas específicas, sin retrasar la estabilización.`,
  perlaENARM: "Neonato que se deteriora después de un periodo sano: incluir errores innatos del metabolismo en el diagnóstico diferencial.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de urgencias metabólicas neonatales.",
    internacional: "International guidance on inherited metabolic disorders in newborns."
  },
  bibliografia: "Harrison's Principles of Internal Medicine. Inherited Metabolic Disorders."
},

{
  id: "PED-090",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Hiperamonemia neonatal",
  dificultad: "Alta",
  caso: `Neonato de 4 días con rechazo del alimento, vómitos, hiperventilación y deterioro del estado de conciencia. La gasometría muestra alcalosis respiratoria y el amonio plasmático está marcadamente elevado.`,
  pregunta: "¿Qué grupo de enfermedades debe investigarse prioritariamente?",
  opciones: [
    "Deficiencias de factores de coagulación dependientes de vitamina K",
    "Trastornos aislados de absorción intestinal de lactosa",
    "Enfermedad por reflujo gastroesofágico",
    "Trastornos del ciclo de la urea",
    "Estenosis hipertrófica del píloro"
  ],
  respuestaCorrecta: 3,
  explicacion: `La hiperamonemia neonatal con alcalosis respiratoria y deterioro neurológico sugiere un trastorno del ciclo de la urea, aunque deben considerarse otras causas metabólicas y hepáticas. Es una urgencia por el riesgo de edema cerebral y daño neurológico. Se requiere tratamiento especializado inmediato, reducción del catabolismo y estrategias de eliminación de amonio según la concentración y el estado clínico.`,
  perlaENARM: "Hiperamonemia neonatal con alcalosis respiratoria: sospechar un trastorno del ciclo de la urea.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de hiperamonemia y errores innatos del metabolismo.",
    internacional: "International guidance on urea cycle disorders."
  },
  bibliografia: "Harrison's Principles of Internal Medicine. Urea Cycle Disorders."
},
{
  id: "PED-091",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Reanimación neonatal y ventilación efectiva",
  dificultad: "Muy alta",
  caso: `Recién nacido de 30 semanas obtenido por cesárea urgente. Tras los pasos iniciales presenta apnea y frecuencia cardiaca de 80 lpm. Se inicia ventilación con presión positiva, pero la frecuencia cardiaca permanece sin cambios y no existe expansión torácica visible. La mascarilla parece correctamente colocada.`,
  pregunta: "¿Qué estrategia debe priorizarse antes de considerar intervenciones avanzadas adicionales?",
  opciones: [
    "Iniciar compresiones torácicas porque toda frecuencia cardiaca menor de 100 lpm constituye indicación",
    "Administrar adrenalina intravenosa de inmediato",
    "Aumentar la concentración de oxígeno al 100% sin modificar la técnica ventilatoria",
    "Realizar maniobras correctivas de ventilación y comprobar la expansión torácica, considerando una vía aérea alternativa si persiste la ineficacia",
    "Administrar bicarbonato de sodio para corregir la acidosis presumida"
  ],
  respuestaCorrecta: 3,
  explicacion: `La respuesta de la frecuencia cardiaca es el indicador principal de la eficacia de la ventilación durante la reanimación neonatal. Si no existe expansión torácica ni mejoría de la frecuencia cardiaca, deben corregirse la posición de la cabeza, el sello de la mascarilla y la posible obstrucción de la vía aérea; también debe ajustarse la presión según la respuesta. Si la ventilación continúa siendo ineficaz, debe considerarse una vía aérea alternativa. Las compresiones se reservan para una frecuencia cardiaca menor de 60 lpm después de ventilación efectiva.`,
  perlaENARM: "La ventilación efectiva es la intervención fundamental de la reanimación neonatal. No escalar a compresiones sin comprobar su eficacia.",
  gpc: {
    mexico: "Consultar el protocolo mexicano vigente de reanimación neonatal.",
    internacional: "AAP/AHA Neonatal Resuscitation Program."
  },
  bibliografia: "American Academy of Pediatrics. Textbook of Neonatal Resuscitation."
},

{
  id: "PED-092",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Síndrome de dificultad respiratoria y soporte no invasivo",
  dificultad: "Muy alta",
  caso: `Prematuro de 27 semanas con dificultad respiratoria desde el nacimiento. Recibe presión positiva continua en la vía aérea, pero aumenta progresivamente su requerimiento de oxígeno. La radiografía muestra bajo volumen pulmonar y patrón reticulogranular difuso. No presenta hipotensión ni datos clínicos predominantes de infección.`,
  pregunta: "¿Qué estrategia terapéutica se relaciona directamente con el mecanismo fisiopatológico predominante?",
  opciones: [
    "Administrar diuréticos como tratamiento etiológico de primera línea",
    "Valorar administración temprana de surfactante exógeno según gravedad y protocolo de la unidad",
    "Suspender todo soporte respiratorio para estimular la producción endógena de surfactante",
    "Administrar broncodilatadores como sustituto del surfactante",
    "Iniciar antibióticos prolongados aunque no exista evidencia de infección"
  ],
  respuestaCorrecta: 1,
  explicacion: `El déficit de surfactante en el prematuro aumenta la tensión superficial, favorece el colapso alveolar y disminuye la distensibilidad pulmonar. El incremento del requerimiento de oxígeno pese al soporte no invasivo obliga a valorar surfactante exógeno y a descartar causas adicionales de deterioro. La administración menos invasiva puede ser preferible en pacientes seleccionados cuando existe experiencia y disponibilidad.`,
  perlaENARM: "Prematuridad, bajo volumen pulmonar y patrón reticulogranular: déficit de surfactante; la decisión de administrarlo depende de la evolución clínica.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente de dificultad respiratoria neonatal.",
    internacional: "European Consensus Guidelines on the Management of Respiratory Distress Syndrome."
  },
  bibliografia: "European Consensus Guidelines on the Management of Respiratory Distress Syndrome."
},

{
  id: "PED-093",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Hipertensión pulmonar persistente",
  dificultad: "Muy alta",
  caso: `Recién nacido de término con aspiración de meconio, hipoxemia grave y respuesta insuficiente al oxígeno. La ecocardiografía muestra presión pulmonar elevada, función ventricular izquierda conservada y cortocircuito de derecha a izquierda a través del conducto arterioso.`,
  pregunta: "¿Qué tratamiento específico puede disminuir la resistencia vascular pulmonar en un paciente seleccionado?",
  opciones: [
    "Indometacina para cerrar sistemáticamente el conducto arterioso",
    "Administración rutinaria de grandes volúmenes de líquidos sin evaluación hemodinámica",
    "Hiperventilación extrema para inducir alcalosis respiratoria",
    "Administración de surfactante como única intervención en todos los casos",
    "Óxido nítrico inhalado después de optimizar la ventilación y la hemodinámica, si cumple criterios"
  ],
  respuestaCorrecta: 4,
  explicacion: `El óxido nítrico inhalado puede reducir selectivamente la resistencia vascular pulmonar y mejorar la oxigenación en determinados recién nacidos con hipertensión pulmonar persistente. Antes de su utilización deben optimizarse la ventilación, la oxigenación y la hemodinámica, además de confirmar la fisiología mediante ecocardiografía y excluir cardiopatías congénitas que contraindiquen su uso. La respuesta clínica debe monitorizarse estrechamente.`,
  perlaENARM: "Hipoxemia neonatal refractaria con hipertensión pulmonar confirmada: valorar óxido nítrico inhalado en pacientes elegibles.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de hipertensión pulmonar persistente neonatal.",
    internacional: "Neonatal pulmonary hypertension management guidance."
  },
  bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
},

{
  id: "PED-094",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Sepsis neonatal y meningitis",
  dificultad: "Muy alta",
  caso: `Neonato de 9 días con fiebre, apnea y deterioro del estado de conciencia. Presenta mala perfusión y requiere estabilización respiratoria y circulatoria. La sospecha clínica incluye sepsis con posible compromiso del sistema nervioso central.`,
  pregunta: "¿Qué principio debe guiar la secuencia de estabilización, diagnóstico y tratamiento?",
  opciones: [
    "Realizar punción lumbar inmediatamente, aunque exista inestabilidad hemodinámica",
    "Esperar los resultados del cultivo antes de iniciar antimicrobianos",
    "Estabilizar al paciente, obtener cultivos sin retrasar el tratamiento y realizar punción lumbar cuando sea clínicamente segura",
    "Descartar meningitis si no existe rigidez de nuca",
    "Administrar únicamente tratamiento antipirético y reevaluar al día siguiente"
  ],
  respuestaCorrecta: 2,
  explicacion: `La sepsis neonatal puede progresar rápidamente y acompañarse de meningitis sin signos meníngeos clásicos. La estabilización respiratoria y hemodinámica tiene prioridad. Los cultivos deben obtenerse antes del tratamiento cuando sea posible sin retrasarlo; la punción lumbar se realiza cuando el estado clínico permite hacerlo de forma segura. El esquema antimicrobiano debe cubrir los patógenos pertinentes según edad, epidemiología y protocolo local.`,
  perlaENARM: "La sospecha de meningitis neonatal no exige realizar punción lumbar a cualquier costo: primero estabilizar y evitar retrasos terapéuticos.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre sepsis y meningitis neonatal.",
    internacional: "NICE. Neonatal infection: antibiotics for prevention and treatment."
  },
  bibliografia: "NICE. Neonatal infection: antibiotics for prevention and treatment."
},

{
  id: "PED-095",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Enterocolitis necrosante y perforación intestinal",
  dificultad: "Muy alta",
  caso: `Prematuro de 26 semanas con enterocolitis necrosante confirmada. Después de varias horas desarrolla acidosis metabólica progresiva, trombocitopenia, hipotensión y mayor distensión abdominal. La radiografía muestra neumatosis intestinal, sin aire libre evidente.`,
  pregunta: "¿Qué dato clínico debe modificar la evaluación de gravedad aunque no exista neumoperitoneo?",
  opciones: [
    "El deterioro sistémico progresivo, que obliga a reevaluar la enfermedad y solicitar valoración quirúrgica urgente",
    "La ausencia de aire libre, que descarta enfermedad avanzada",
    "La trombocitopenia aislada como prueba definitiva de perforación",
    "La presencia de neumatosis como indicación automática de laparotomía en todos los pacientes",
    "La mejoría de la distensión como único criterio para continuar la alimentación"
  ],
  respuestaCorrecta: 0,
  explicacion: `La enterocolitis necrosante puede progresar a necrosis transmural, sepsis y perforación. El neumoperitoneo es un hallazgo importante, pero su ausencia no excluye enfermedad grave ni necesidad de intervención. El deterioro hemodinámico, la acidosis persistente, la trombocitopenia y los hallazgos abdominales deben integrarse en una valoración urgente por neonatología y cirugía pediátrica.`,
  perlaENARM: "La decisión quirúrgica en enterocolitis necrosante integra evolución clínica, laboratorio e imagen; la ausencia de neumoperitoneo no excluye gravedad.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de enterocolitis necrosante.",
    internacional: "Neonatal surgical guidance on necrotizing enterocolitis."
  },
  bibliografia: "Ashcraft's Pediatric Surgery."
},

{
  id: "PED-096",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Hiperbilirrubinemia y hemólisis",
  dificultad: "Muy alta",
  caso: `Recién nacido de 37 semanas con ictericia a las 10 horas de vida. La bilirrubina indirecta aumenta rápidamente, la hemoglobina está disminuida y los reticulocitos elevados. La madre tiene grupo O y el neonato grupo A.`,
  pregunta: "¿Qué interpretación integra mejor el momento de presentación y los hallazgos hematológicos?",
  opciones: [
    "Ictericia fisiológica habitual por inmadurez hepática",
    "Ictericia por leche materna como explicación suficiente durante las primeras horas",
    "Colestasis neonatal primaria confirmada por la bilirrubina indirecta",
    "Hiperbilirrubinemia probablemente asociada con hemólisis, con incompatibilidad ABO entre las causas posibles",
    "Atresia de vías biliares como diagnóstico demostrado"
  ],
  respuestaCorrecta: 3,
  explicacion: `La ictericia en las primeras 24 horas es patológica hasta demostrar lo contrario. El aumento rápido de bilirrubina, la anemia y la reticulocitosis orientan a hemólisis; la incompatibilidad ABO es una posibilidad relevante. Se requieren evaluación seriada de bilirrubina, pruebas hematológicas y estudio inmunohematológico según el contexto. El tratamiento se determina mediante umbrales específicos por edad en horas, edad gestacional y factores de riesgo.`,
  perlaENARM: "Ictericia antes de las 24 horas más anemia y reticulocitosis: investigar hemólisis de inmediato.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre hiperbilirrubinemia neonatal.",
    internacional: "AAP Clinical Practice Guideline for Management of Hyperbilirubinemia."
  },
  bibliografia: "American Academy of Pediatrics. Clinical Practice Guideline for Management of Hyperbilirubinemia."
},

{
  id: "PED-097",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Colestasis neonatal y atresia biliar",
  dificultad: "Muy alta",
  caso: `Lactante de 24 días con ictericia persistente, heces acólicas, hepatomegalia y bilirrubina directa elevada. La ecografía abdominal no demuestra dilatación clara de las vías biliares.`,
  pregunta: "¿Qué decisión diagnóstica es fundamental para evitar un retraso perjudicial?",
  opciones: [
    "Descartar atresia biliar porque no existe dilatación de los conductos",
    "Considerar que la bilirrubina directa es normal durante el primer mes",
    "Esperar hasta los seis meses para repetir las pruebas hepáticas",
    "Atribuir el cuadro a lactancia materna sin estudiar la colestasis",
    "Mantener la sospecha de atresia biliar y acelerar la evaluación especializada aunque la ecografía no sea concluyente"
  ],
  respuestaCorrecta: 4,
  explicacion: `La hiperbilirrubinemia conjugada es patológica. Las heces acólicas, la hepatomegalia y la ictericia persistente obligan a investigar atresia biliar y otras causas de colestasis. Una ecografía sin hallazgos concluyentes no excluye la enfermedad. La referencia temprana a gastroenterología y cirugía pediátrica es esencial para no perder la oportunidad de tratamiento oportuno.`,
  perlaENARM: "Heces acólicas e hiperbilirrubinemia directa: la ecografía no concluyente no descarta atresia biliar.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de colestasis neonatal.",
    internacional: "NASPGHAN/ESPGHAN guidance on cholestatic jaundice in infants."
  },
  bibliografia: "NASPGHAN/ESPGHAN. Guidance on the Evaluation of Cholestatic Jaundice in Infants."
},

{
  id: "PED-098",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Hipoglucemia neonatal y muestra crítica",
  dificultad: "Muy alta",
  caso: `Neonato de 6 días con episodios recurrentes de hipoglucemia grave. Durante un episodio se documenta glucosa plasmática baja, insulina inapropiadamente detectable, beta-hidroxibutirato bajo y ácidos grasos libres suprimidos. La necesidad de infusión de glucosa es elevada.`,
  pregunta: "¿Qué alteración explica mejor el patrón bioquímico?",
  opciones: [
    "Hiperinsulinismo, con supresión de la lipólisis y de la cetogénesis",
    "Deficiencia aislada de hierro",
    "Diabetes mellitus tipo 1 neonatal como causa típica de hipoglucemia",
    "Hipotiroidismo como explicación única de la supresión de cuerpos cetónicos",
    "Deficiencia de vitamina K"
  ],
  respuestaCorrecta: 0,
  explicacion: `La insulina inhibe la lipólisis y la producción hepática de cuerpos cetónicos. Durante una hipoglucemia, su presencia inapropiada junto con beta-hidroxibutirato y ácidos grasos libres bajos orienta a hiperinsulinismo. La muestra crítica debe obtenerse durante el episodio si es posible, pero la obtención de estudios nunca debe retrasar la corrección urgente de la hipoglucemia sintomática.`,
  perlaENARM: "Hipoglucemia hipocetósica con ácidos grasos libres suprimidos: sospechar hiperinsulinismo.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de hipoglucemia neonatal persistente.",
    internacional: "Pediatric Endocrine Society guidance on persistent hypoglycemia."
  },
  bibliografia: "Pediatric Endocrine Society. Recommendations for Evaluation and Management of Persistent Hypoglycemia."
},

{
  id: "PED-099",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Hiperamonemia y errores innatos del metabolismo",
  dificultad: "Muy alta",
  caso: `Neonato de 3 días con deterioro neurológico, rechazo del alimento y taquipnea. La gasometría muestra alcalosis respiratoria, el amonio está marcadamente elevado y no hay hipoglucemia significativa. La evaluación infecciosa inicial no identifica un foco claro.`,
  pregunta: "¿Qué alteración metabólica debe investigarse de manera prioritaria?",
  opciones: [
    "Deficiencia aislada de vitamina K",
    "Estenosis hipertrófica del píloro",
    "Trastorno del ciclo de la urea",
    "Atresia de vías biliares como causa habitual de alcalosis respiratoria",
    "Enfermedad de Hirschsprung"
  ],
  respuestaCorrecta: 2,
  explicacion: `Los trastornos del ciclo de la urea pueden producir hiperamonemia grave después del inicio de la alimentación, con alcalosis respiratoria y encefalopatía. Es necesario iniciar estabilización y tratamiento especializado urgente, reducir el catabolismo y valorar estrategias de eliminación de amonio según la gravedad. La investigación debe incluir otros errores innatos del metabolismo y causas hepáticas.`,
  perlaENARM: "Hiperamonemia neonatal más alcalosis respiratoria: asociación clásica con trastornos del ciclo de la urea.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de hiperamonemia neonatal.",
    internacional: "International guidance on urea cycle disorders."
  },
  bibliografia: "Harrison's Principles of Internal Medicine. Urea Cycle Disorders."
},

{
  id: "PED-100",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Crisis suprarrenal neonatal",
  dificultad: "Muy alta",
  caso: `Recién nacida de 11 días con vómitos, pérdida de peso, hipotensión, hiponatremia e hiperpotasemia. Presenta virilización de genitales externos y el tamiz neonatal está pendiente.`,
  pregunta: "¿Cuál es la prioridad terapéutica ante la sospecha de crisis suprarrenal por hiperplasia suprarrenal congénita?",
  opciones: [
    "Esperar el resultado del tamiz antes de intervenir",
    "Administrar exclusivamente solución hipotónica",
    "Iniciar tratamiento oral ambulatorio y citar en una semana",
    "Administrar glucocorticoides de estrés y corregir la hipovolemia y las alteraciones electrolíticas bajo monitorización",
    "Restringir sodio y líquidos"
  ],
  respuestaCorrecta: 3,
  explicacion: `La deficiencia de 21-hidroxilasa puede provocar insuficiencia de cortisol y aldosterona, con crisis suprarrenal y pérdida de sal. El tratamiento no debe retrasarse por esperar el tamiz o la confirmación hormonal. Se requieren glucocorticoides parenterales, reposición de volumen y corrección controlada de glucosa y electrolitos. La confirmación etiológica se realiza en paralelo con la estabilización.`,
  perlaENARM: "Sospecha de crisis suprarrenal neonatal: tratar inmediatamente; no esperar el tamiz confirmatorio.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de crisis suprarrenal e hiperplasia suprarrenal congénita.",
    internacional: "Endocrine Society Clinical Practice Guideline on Congenital Adrenal Hyperplasia."
  },
  bibliografia: "Endocrine Society. Congenital Adrenal Hyperplasia Clinical Practice Guideline."
},

{
  id: "PED-101",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Cardiopatía congénita dependiente del conducto",
  dificultad: "Muy alta",
  caso: `Neonato de 4 días con mala alimentación, acidosis metabólica, hepatomegalia y pulsos femorales débiles. La saturación preductal y posductal es de 96% y 95%, respectivamente. La ecocardiografía urgente todavía no está disponible.`,
  pregunta: "¿Qué decisión debe considerarse ante la sospecha de una lesión sistémica dependiente del conducto arterioso?",
  opciones: [
    "Descartar cardiopatía porque ambas saturaciones son normales",
    "Iniciar prostaglandina E1 bajo monitorización mientras se organiza la evaluación especializada, si la sospecha clínica lo justifica",
    "Administrar indometacina para cerrar el conducto",
    "Dar el alta si no existe cianosis",
    "Administrar oxígeno al 100% como tratamiento definitivo"
  ],
  respuestaCorrecta: 1,
  explicacion: `La coartación crítica y otras lesiones ductus-dependientes pueden producir choque cuando disminuye el flujo por el conducto arterioso. La saturación normal no excluye una cardiopatía con compromiso de la circulación sistémica. La prostaglandina E1 puede mantener la permeabilidad ductal mientras se realiza la evaluación, con vigilancia por el riesgo de apnea e hipotensión.`,
  perlaENARM: "Pulsos femorales débiles, acidosis y choque en un neonato: la saturación normal no descarta cardiopatía crítica.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de cardiopatías congénitas críticas.",
    internacional: "Pediatric cardiology guidance on duct-dependent congenital heart disease."
  },
  bibliografia: "Moss and Adams. Heart Disease in Infants, Children, and Adolescents."
},

{
  id: "PED-102",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Vómito bilioso y obstrucción intestinal",
  dificultad: "Muy alta",
  caso: `Recién nacido de 2 días con vómitos biliosos, irritabilidad y aumento del lactato. La radiografía abdominal es poco específica y no muestra neumoperitoneo. El equipo sospecha malrotación intestinal con posible vólvulo.`,
  pregunta: "¿Qué principio debe guiar la evaluación de imagen y la valoración quirúrgica?",
  opciones: [
    "Descartar vólvulo porque no hay aire libre",
    "Permitir alimentación oral para valorar tolerancia",
    "Esperar varios días antes de solicitar valoración quirúrgica",
    "Solicitar exclusivamente una prueba de sangre oculta en heces",
    "Priorizar estabilización y evaluación quirúrgica urgente; realizar imagen diagnóstica apropiada sin retrasar el tratamiento ante deterioro significativo"
  ],
  respuestaCorrecta: 4,
  explicacion: `El vólvulo del intestino medio puede comprometer rápidamente la circulación mesentérica. La radiografía simple puede ser normal o inespecífica en fases iniciales, por lo que no excluye malrotación ni vólvulo. Deben suspenderse la alimentación, iniciar estabilización y descompresión gastrointestinal, y solicitar valoración quirúrgica urgente. La modalidad de imagen depende de la estabilidad y los recursos disponibles.`,
  perlaENARM: "Vómito bilioso neonatal es una urgencia hasta descartar obstrucción quirúrgica, especialmente vólvulo.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de urgencias quirúrgicas neonatales.",
    internacional: "Pediatric surgical guidance on malrotation and midgut volvulus."
  },
  bibliografia: "Ashcraft's Pediatric Surgery."
},

{
  id: "PED-103",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Meningitis neonatal por bacilos gramnegativos",
  dificultad: "Muy alta",
  caso: `Prematuro de 31 semanas con sepsis tardía y meningitis confirmada. El cultivo identifica un bacilo gramnegativo. El paciente presenta convulsiones y deterioro neurológico.`,
  pregunta: "¿Qué principio debe guiar el ajuste del tratamiento antimicrobiano?",
  opciones: [
    "Utilizar un esquema con penetración adecuada al sistema nervioso central, dirigido por identificación microbiológica y sensibilidad",
    "Suspender antibióticos cuando desaparezca la fiebre",
    "Cambiar a antibiótico oral de inmediato por la edad gestacional",
    "Tratar únicamente con un aminoglucósido intramuscular en todos los casos",
    "Utilizar antifúngicos como tratamiento universal de las meningitis por bacilos gramnegativos"
  ],
  respuestaCorrecta: 0,
  explicacion: `La meningitis neonatal por bacilos gramnegativos requiere antimicrobianos intravenosos con actividad y penetración adecuadas al sistema nervioso central. La selección y duración dependen del microorganismo, la sensibilidad, la evolución clínica y las complicaciones. Las convulsiones y el deterioro neurológico requieren evaluación adicional y seguimiento especializado.`,
  perlaENARM: "En meningitis neonatal, la selección antimicrobiana debe considerar penetración al SNC y sensibilidad del microorganismo.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre meningitis neonatal.",
    internacional: "NICE. Neonatal infection: antibiotics for prevention and treatment."
  },
  bibliografia: "Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases."
},

{
  id: "PED-104",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Herpes neonatal diseminado",
  dificultad: "Muy alta",
  caso: `Neonato de 8 días con choque, hepatitis aguda, coagulopatía y convulsiones. No presenta vesículas. La madre tuvo lesiones genitales durante el embarazo y el parto.`,
  pregunta: "¿Cuál es la conducta más importante mientras se completa la investigación etiológica?",
  opciones: [
    "Descartar herpes por ausencia de lesiones cutáneas",
    "Administrar exclusivamente vitamina K y observar",
    "Iniciar aciclovir intravenoso ante la sospecha significativa, además de estabilizar y estudiar infección diseminada",
    "Esperar confirmación virológica antes de iniciar cualquier antiviral",
    "Administrar únicamente antibióticos tópicos"
  ],
  respuestaCorrecta: 2,
  explicacion: `El herpes neonatal diseminado puede afectar hígado, sistema nervioso central, pulmones y otros órganos sin producir vesículas. La combinación de hepatitis, coagulopatía y deterioro sistémico obliga a considerar esta infección. El aciclovir intravenoso debe iniciarse con prontitud cuando la sospecha es significativa, junto con soporte intensivo y pruebas virológicas apropiadas.`,
  perlaENARM: "Hepatitis y coagulopatía en un neonato con deterioro sistémico: el herpes neonatal debe considerarse incluso sin vesículas.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de herpes neonatal.",
    internacional: "AAP guidance on neonatal herpes simplex virus infection."
  },
  bibliografia: "American Academy of Pediatrics. Red Book: Report of the Committee on Infectious Diseases."
},

{
  id: "PED-105",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Toxoplasmosis congénita",
  dificultad: "Muy alta",
  caso: `Recién nacido con hidrocefalia, coriorretinitis y calcificaciones intracraneales difusas. La madre tuvo serología sugestiva de infección durante el embarazo, pero el momento exacto de adquisición no está bien establecido.`,
  pregunta: "¿Qué estrategia integra mejor la confirmación diagnóstica y la valoración de complicaciones?",
  opciones: [
    "Descartar toxoplasmosis porque el neonato no tiene fiebre",
    "Solicitar únicamente una biometría hemática",
    "Atribuir las calcificaciones exclusivamente a hipoxia perinatal",
    "Realizar evaluación especializada con pruebas específicas, neuroimagen y valoración oftalmológica",
    "Esperar a que aparezca pérdida visual antes de investigar"
  ],
  respuestaCorrecta: 3,
  explicacion: `La combinación de hidrocefalia, coriorretinitis y calcificaciones difusas es característica de toxoplasmosis congénita. La evaluación requiere integrar la serología materna y neonatal, pruebas específicas según disponibilidad, neuroimagen y examen oftalmológico. La valoración temprana permite determinar extensión de enfermedad y organizar el tratamiento y seguimiento.`,
  perlaENARM: "Hidrocefalia, coriorretinitis y calcificaciones intracraneales difusas: patrón clásico de toxoplasmosis congénita.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de toxoplasmosis congénita.",
    internacional: "CDC guidance on toxoplasmosis."
  },
  bibliografia: "Centers for Disease Control and Prevention. Toxoplasmosis."
},

{
  id: "PED-106",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Citomegalovirus congénito y pérdida auditiva",
  dificultad: "Muy alta",
  caso: `Recién nacido de 18 días con petequias, trombocitopenia y microcefalia. La PCR para citomegalovirus en saliva es positiva y se requiere confirmar la infección congénita.`,
  pregunta: "¿Qué aspecto temporal es fundamental para interpretar el resultado virológico?",
  opciones: [
    "La PCR solo es útil después de los seis meses",
    "La confirmación de infección congénita requiere pruebas apropiadas obtenidas durante las primeras tres semanas de vida",
    "Una PCR positiva en saliva demuestra siempre infección adquirida durante el parto",
    "La prueba auditiva sustituye toda evaluación virológica",
    "La infección congénita se descarta si no hay ictericia"
  ],
  respuestaCorrecta: 1,
  explicacion: `La detección de CMV en muestras obtenidas durante las primeras tres semanas de vida permite distinguir la infección congénita de la adquisición posnatal. Una PCR positiva en saliva suele requerir confirmación con una muestra apropiada, como orina, de acuerdo con el protocolo diagnóstico. La evaluación debe incluir audición, sistema nervioso central y órganos afectados.`,
  perlaENARM: "CMV congénito: obtener pruebas virológicas dentro de los primeros 21 días para establecer el origen congénito.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de infección congénita por citomegalovirus.",
    internacional: "CDC guidance on congenital cytomegalovirus infection."
  },
  bibliografia: "Centers for Disease Control and Prevention. Congenital Cytomegalovirus."
},

{
  id: "PED-107",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Sífilis congénita y evaluación neonatal",
  dificultad: "Muy alta",
  caso: `Recién nacido de madre con sífilis diagnosticada durante el embarazo, cuyo tratamiento fue incompleto y cercano al parto. El neonato está aparentemente asintomático y su prueba no treponémica presenta un título inferior al materno.`,
  pregunta: "¿Qué elemento es esencial para determinar la conducta neonatal?",
  opciones: [
    "La ausencia de síntomas descarta infección congénita",
    "Un título neonatal inferior al materno elimina la necesidad de seguimiento",
    "La evaluación de la adecuación del tratamiento materno, el momento del tratamiento, la comparación serológica y los hallazgos neonatales",
    "La presencia de un título bajo confirma siempre sífilis congénita",
    "La evaluación debe posponerse hasta que aparezcan lesiones óseas"
  ],
  respuestaCorrecta: 2,
  explicacion: `La evaluación de sífilis congénita no depende exclusivamente de los síntomas ni de que el título neonatal supere al materno. Deben considerarse el tratamiento materno, su oportunidad, la posibilidad de reinfección, la comparación de títulos no treponémicos y la exploración neonatal. La clasificación de riesgo determina los estudios, el tratamiento y el seguimiento serológico.`,
  perlaENARM: "Sífilis congénita: el tratamiento materno adecuado y oportuno es determinante; la ausencia de síntomas no basta para excluirla.",
  gpc: {
    mexico: "Consultar la normativa mexicana vigente para prevención y tratamiento de sífilis congénita.",
    internacional: "CDC. Sexually Transmitted Infections Treatment Guidelines."
  },
  bibliografia: "Centers for Disease Control and Prevention. Sexually Transmitted Infections Treatment Guidelines."
},

{
  id: "PED-108",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Prematuridad extrema y prevención de lesión pulmonar",
  dificultad: "Muy alta",
  caso: `Prematuro de 24 semanas que requiere soporte respiratorio desde el nacimiento. Durante la primera semana presenta múltiples episodios de desaturación y ajustes frecuentes de ventilación. El equipo busca reducir el riesgo de displasia broncopulmonar.`,
  pregunta: "¿Qué principio terapéutico es consistente con una estrategia de protección pulmonar?",
  opciones: [
    "Utilizar volúmenes corrientes elevados para mantener siempre una radiografía normal",
    "Mantener hiperoxia continua para evitar episodios de desaturación",
    "Evitar cualquier ajuste de ventilación aunque cambie la mecánica pulmonar",
    "Administrar corticosteroides sistémicos a todos los prematuros sin selección",
    "Individualizar el soporte, utilizar estrategias ventilatorias protectoras y titular el oxígeno a objetivos apropiados"
  ],
  respuestaCorrecta: 4,
  explicacion: `La lesión pulmonar del prematuro se relaciona con inmadurez, inflamación, oxígeno y ventilación mecánica. La estrategia protectora busca evitar tanto la sobredistensión como el colapso repetido, limitar la exposición innecesaria a oxígeno y utilizar soporte no invasivo cuando sea apropiado. Las intervenciones farmacológicas deben individualizarse según riesgo, gravedad y evidencia disponible.`,
  perlaENARM: "La prevención de displasia broncopulmonar depende de reducir la lesión pulmonar acumulativa, no de una intervención aislada.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de atención del prematuro extremo.",
    internacional: "Neonatal guidance on bronchopulmonary dysplasia prevention."
  },
  bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
},

{
  id: "PED-109",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Hemorragia intraventricular y seguimiento",
  dificultad: "Muy alta",
  caso: `Prematuro de 25 semanas con hemorragia intraventricular grave. Durante los días siguientes aumenta progresivamente el perímetro cefálico y la ecografía transfontanelar muestra dilatación ventricular creciente.`,
  pregunta: "¿Qué estrategia permite detectar progresión y orientar oportunamente la intervención?",
  opciones: [
    "Seguimiento seriado del perímetro cefálico, exploración clínica y neuroimagen, con valoración especializada según evolución",
    "Suspender las ecografías si el neonato no presenta convulsiones",
    "Esperar a que aparezca una fontanela muy tensa antes de reevaluar",
    "Realizar únicamente radiografías de cráneo",
    "Indicar diuréticos como tratamiento definitivo de toda dilatación ventricular"
  ],
  respuestaCorrecta: 0,
  explicacion: `La dilatación ventricular poshemorrágica puede progresar antes de que existan signos clínicos evidentes. El seguimiento seriado de la neuroimagen y las mediciones clínicas ayuda a identificar el momento de intervención. La decisión sobre drenaje u otras medidas depende de la evolución ventricular, el estado clínico y la valoración de neurocirugía pediátrica.`,
  perlaENARM: "En prematuros con hemorragia intraventricular, la vigilancia seriada permite detectar hidrocefalia antes de que aparezcan signos tardíos.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de neuroimagen del prematuro.",
    internacional: "Neonatal neuroimaging guidance for preterm infants."
  },
  bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
},

{
  id: "PED-110",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Apnea neonatal y diagnóstico diferencial",
  dificultad: "Muy alta",
  caso: `Prematuro de 30 semanas tratado con cafeína que presenta incremento brusco de apneas, bradicardias y requerimiento de oxígeno a las 72 horas de estabilidad. También desarrolla distensión abdominal y temperatura inestable.`,
  pregunta: "¿Qué enfoque diagnóstico evita atribuir incorrectamente el deterioro a inmadurez respiratoria?",
  opciones: [
    "Incrementar indefinidamente la cafeína sin realizar evaluación adicional",
    "Considerar el patrón normal de apnea y suspender la monitorización",
    "Investigar causas secundarias, incluyendo sepsis, enterocolitis necrosante, anemia y alteraciones metabólicas",
    "Descartar infección por ausencia de fiebre",
    "Administrar sedantes para disminuir los movimientos respiratorios"
  ],
  respuestaCorrecta: 2,
  explicacion: `La apnea de la prematuridad es un diagnóstico que requiere reconsiderar causas secundarias cuando existe un cambio brusco después de estabilidad. La asociación con distensión abdominal e inestabilidad térmica obliga a evaluar infección y enterocolitis necrosante, además de anemia, alteraciones metabólicas y deterioro respiratorio. El tratamiento debe dirigirse a la causa y al soporte necesario.`,
  perlaENARM: "El cambio abrupto del patrón respiratorio en un prematuro es una señal de alarma, no una manifestación que deba atribuirse automáticamente a inmadurez.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de apnea y sepsis neonatal.",
    internacional: "Neonatal care guidance on apnea of prematurity and neonatal infection."
  },
  bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
},

{
  id: "PED-111",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Trombocitopenia neonatal y sepsis",
  dificultad: "Muy alta",
  caso: `Neonato de 32 semanas con sepsis, trombocitopenia progresiva, prolongación de los tiempos de coagulación y elevación del dímero D. Presenta sangrado en sitios de punción y deterioro hemodinámico.`,
  pregunta: "¿Qué alteración sistémica debe considerarse ante la combinación de consumo plaquetario y coagulopatía?",
  opciones: [
    "Hemofilia A aislada",
    "Deficiencia aislada de hierro",
    "Trombocitopenia inmune sin alteración de la coagulación",
    "Coagulación intravascular diseminada asociada con enfermedad sistémica grave",
    "Enfermedad de von Willebrand como única explicación"
  ],
  respuestaCorrecta: 3,
  explicacion: `La coagulación intravascular diseminada puede aparecer en sepsis grave y otras situaciones críticas, con activación sistémica de la coagulación, consumo de plaquetas y factores, y riesgo simultáneo de trombosis y hemorragia. La evaluación integra tendencias de plaquetas, tiempos de coagulación, fibrinógeno, dímero D y contexto clínico. El manejo prioritario es tratar la causa subyacente y proporcionar soporte hemostático cuando esté indicado.`,
  perlaENARM: "Sepsis grave con trombocitopenia, tiempos prolongados y sangrado: considerar coagulación intravascular diseminada.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de sepsis y coagulopatía neonatal.",
    internacional: "Neonatal critical care guidance on disseminated intravascular coagulation."
  },
  bibliografia: "Harrison's Principles of Internal Medicine. Disseminated Intravascular Coagulation."
},

{
  id: "PED-112",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Anemia neonatal y hemorragia fetomaterna",
  dificultad: "Muy alta",
  caso: `Recién nacido con palidez intensa, taquicardia y mala perfusión inmediatamente después del nacimiento. La hemoglobina está marcadamente disminuida y no existen datos predominantes de hemólisis. El embarazo no presentó signos claros de sangrado materno.`,
  pregunta: "¿Qué mecanismo debe investigarse ante la posibilidad de pérdida sanguínea prenatal?",
  opciones: [
    "Hemorragia fetomaterna, que puede ser clínicamente silenciosa durante la gestación",
    "Atresia duodenal",
    "Deficiencia aislada de surfactante",
    "Hipotiroidismo congénito",
    "Hiperbilirrubinemia fisiológica"
  ],
  respuestaCorrecta: 0,
  explicacion: `La hemorragia fetomaterna puede ocasionar anemia fetal aguda o crónica sin que exista sangrado vaginal materno evidente. La presentación depende de la magnitud y rapidez de la pérdida; puede incluir palidez, taquicardia, hipovolemia y choque. La evaluación debe distinguir pérdida sanguínea de hemólisis y considerar estudios maternos específicos cuando estén indicados.`,
  perlaENARM: "La ausencia de sangrado vaginal no excluye hemorragia fetomaterna como causa de anemia neonatal.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de anemia neonatal y hemorragia fetomaterna.",
    internacional: "Neonatal transfusion and hematology guidance."
  },
  bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
},

{
  id: "PED-113",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Policitemia neonatal e hiperviscosidad",
  dificultad: "Muy alta",
  caso: `Recién nacido pequeño para la edad gestacional con hematocrito venoso de 70%, letargo, mala alimentación y episodios de hipoglucemia. La muestra fue obtenida de una vena periférica y no está hemolizada.`,
  pregunta: "¿Qué consideración debe orientar la valoración terapéutica?",
  opciones: [
    "La cifra de hematocrito obliga a realizar exanguinotransfusión en todos los casos, independientemente de los síntomas",
    "La hipoglucemia excluye policitemia neonatal",
    "El hematocrito capilar es siempre idéntico al venoso",
    "La policitemia no produce alteraciones neurológicas ni metabólicas",
    "La decisión debe integrar hematocrito venoso, síntomas, hidratación y posibles complicaciones, valorando recambio parcial en casos seleccionados"
  ],
  respuestaCorrecta: 4,
  explicacion: `La policitemia neonatal se define habitualmente por hematocrito venoso igual o superior a 65%, pero la indicación de recambio parcial depende del estado clínico y de la evidencia disponible. Deben considerarse síntomas atribuibles a hiperviscosidad, hipoglucemia, hidratación y diagnósticos alternativos. El procedimiento no está indicado automáticamente en todo recién nacido con hematocrito elevado.`,
  perlaENARM: "Policitemia neonatal: interpretar el hematocrito venoso junto con la clínica; no todos los pacientes requieren recambio parcial.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de policitemia neonatal.",
    internacional: "Neonatal guidance on neonatal polycythemia and hyperviscosity."
  },
  bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
},

{
  id: "PED-114",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Hipocalcemia neonatal sintomática",
  dificultad: "Muy alta",
  caso: `Recién nacido de 36 horas con convulsiones, intervalo QT prolongado y calcio ionizado marcadamente disminuido. La glucosa es normal y el paciente está hemodinámicamente estable.`,
  pregunta: "¿Qué tratamiento corresponde a la alteración metabólica que amenaza la estabilidad neurológica?",
  opciones: [
    "Administrar calcio oral como única medida durante la convulsión",
    "Administrar calcio intravenoso bajo monitorización electrocardiográfica y vigilancia clínica",
    "Administrar potasio intravenoso",
    "Iniciar fototerapia intensiva",
    "Restringir todos los electrolitos durante 24 horas"
  ],
  respuestaCorrecta: 1,
  explicacion: `La hipocalcemia sintomática con convulsiones requiere corrección urgente con calcio intravenoso bajo monitorización, por el riesgo de bradicardia y arritmias durante la administración. Deben evaluarse magnesio, función renal, fósforo y posibles causas perinatales. La dosis y la velocidad de administración deben seguir el protocolo neonatal correspondiente.`,
  perlaENARM: "Hipocalcemia neonatal con convulsiones: calcio intravenoso monitorizado y búsqueda de alteraciones asociadas, especialmente hipomagnesemia.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de alteraciones metabólicas neonatales.",
    internacional: "Neonatal guidance on symptomatic hypocalcemia."
  },
  bibliografia: "Cloherty and Stark. Manual of Neonatal Care."
},

{
  id: "PED-115",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Hiperpotasemia y lesión renal neonatal",
  dificultad: "Muy alta",
  caso: `Prematuro de 27 semanas con oliguria y potasio sérico elevado en dos muestras no hemolizadas. El electrocardiograma presenta cambios compatibles con hiperpotasemia. La creatinina aumenta y no existen pérdidas gastrointestinales importantes.`,
  pregunta: "¿Qué combinación de medidas aborda tanto el riesgo inmediato como la causa de la alteración?",
  opciones: [
    "Administrar potasio y suspender la monitorización",
    "Indicar únicamente restricción de proteínas",
    "Estabilizar la membrana miocárdica, reducir el potasio mediante medidas protocolizadas y evaluar la lesión renal y los aportes exógenos",
    "Administrar calcio oral y observar durante 48 horas",
    "Esperar a que la diuresis se normalice sin intervenir"
  ],
  respuestaCorrecta: 2,
  explicacion: `La hiperpotasemia con cambios electrocardiográficos requiere estabilización miocárdica inmediata y medidas para redistribuir y eliminar potasio. La oliguria y el aumento de creatinina sugieren disfunción renal que puede limitar su eliminación. Deben revisarse los aportes intravenosos, los medicamentos, el equilibrio ácido-base y la necesidad de soporte renal especializado.`,
  perlaENARM: "En hiperpotasemia grave, estabilizar el miocardio no equivale a eliminar el potasio: ambas necesidades deben abordarse.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de lesión renal aguda e hiperpotasemia neonatal.",
    internacional: "Neonatal emergency guidance on hyperkalemia and acute kidney injury."
  },
  bibliografia: "Brenner and Rector's The Kidney."
},

{
  id: "PED-116",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Lesión renal aguda neonatal",
  dificultad: "Muy alta",
  caso: `Neonato con antecedente de asfixia perinatal que presenta oliguria persistente, creatinina ascendente y alteraciones electrolíticas. La presión arterial es estable, pero requiere vigilancia intensiva.`,
  pregunta: "¿Qué principio permite evaluar correctamente la función renal durante los primeros días de vida?",
  opciones: [
    "Interpretar la creatinina considerando su evolución seriada, la edad posnatal y la función renal materna inicial",
    "Utilizar un único valor de creatinina sin considerar el momento de obtención",
    "Asumir que la creatinina neonatal es siempre independiente de la materna",
    "Descartar lesión renal si no existe hematuria",
    "Considerar la oliguria como fisiológica en todos los neonatos enfermos"
  ],
  respuestaCorrecta: 0,
  explicacion: `La creatinina neonatal refleja inicialmente en parte la concentración materna y cambia durante los primeros días. La lesión renal aguda se evalúa mediante la tendencia de creatinina y la diuresis, además del contexto hemodinámico y los criterios neonatales disponibles. La hipoxia, la sepsis, los fármacos nefrotóxicos y la hipoperfusión son causas relevantes.`,
  perlaENARM: "En el neonato, la tendencia de creatinina y la diuresis son más informativas que una medición aislada.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de lesión renal aguda neonatal.",
    internacional: "Neonatal Kidney Collaborative and neonatal acute kidney injury guidance."
  },
  bibliografia: "Brenner and Rector's The Kidney."
},

{
  id: "PED-117",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Tamiz neonatal y galactosemia",
  dificultad: "Muy alta",
  caso: `Neonato de 7 días alimentado con leche que presenta vómitos, ictericia, hepatomegalia y deterioro general. El hemocultivo identifica Escherichia coli y el tamiz metabólico está pendiente.`,
  pregunta: "¿Qué error innato del metabolismo debe investigarse ante la combinación de hepatopatía y sepsis por E. coli?",
  opciones: [
    "Fenilcetonuria como causa habitual de sepsis por E. coli",
    "Deficiencia de biotinidasa como explicación obligatoria de ictericia neonatal",
    "Enfermedad de Huntington",
    "Galactosemia clásica",
    "Síndrome de Marfan"
  ],
  respuestaCorrecta: 3,
  explicacion: `La galactosemia clásica por deficiencia de galactosa-1-fosfato uridiltransferasa puede manifestarse después de la exposición a lactosa con vómitos, ictericia, hepatopatía, alteraciones metabólicas y mayor riesgo de sepsis por E. coli. La sospecha exige evaluación metabólica urgente y medidas dietéticas específicas mientras se completa la confirmación, bajo supervisión especializada.`,
  perlaENARM: "Neonato con hepatopatía y sepsis por E. coli tras iniciar alimentación láctea: investigar galactosemia clásica.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de tamiz neonatal y errores innatos del metabolismo.",
    internacional: "GeneReviews. Classic Galactosemia."
  },
  bibliografia: "GeneReviews. Classic Galactosemia."
},

{
  id: "PED-118",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Fenilcetonuria y neurodesarrollo",
  dificultad: "Muy alta",
  caso: `Lactante identificado mediante tamiz neonatal con concentraciones elevadas de fenilalanina. Está asintomático y se encuentra en los primeros días de vida. La confirmación bioquímica está en proceso.`,
  pregunta: "¿Qué principio terapéutico debe guiar el manejo tras confirmar una hiperfenilalaninemia clínicamente significativa?",
  opciones: [
    "Esperar a que aparezcan alteraciones neurológicas para iniciar intervención",
    "Iniciar oportunamente un plan nutricional individualizado que controle la fenilalanina y permita crecimiento adecuado",
    "Eliminar por completo todas las proteínas de la dieta sin supervisión",
    "Administrar antibióticos para normalizar la fenilalanina",
    "Suspender toda alimentación enteral durante varias semanas"
  ],
  respuestaCorrecta: 1,
  explicacion: `La fenilcetonuria clásica resulta de la alteración del metabolismo de fenilalanina y puede causar daño neurológico si no se trata oportunamente. El tratamiento dietético debe iniciarse de forma temprana cuando esté indicado, con control bioquímico y supervisión especializada para mantener concentraciones objetivo y cubrir los requerimientos nutricionales. La estrategia depende del diagnóstico confirmado y del fenotipo metabólico.`,
  perlaENARM: "Fenilcetonuria detectada por tamiz: intervención nutricional temprana para prevenir lesión neurológica irreversible.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de tamiz neonatal y fenilcetonuria.",
    internacional: "International guidance on phenylketonuria management."
  },
  bibliografia: "GeneReviews. Phenylalanine Hydroxylase Deficiency."
},

{
  id: "PED-119",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Atresia esofágica y anomalías asociadas",
  dificultad: "Muy alta",
  caso: `Recién nacido con atresia esofágica y fístula traqueoesofágica confirmadas. Antes de la reparación se identifican un soplo cardiaco y una anomalía vertebral en la imagen inicial.`,
  pregunta: "¿Qué estrategia de evaluación preoperatoria es importante por la posibilidad de anomalías congénitas asociadas?",
  opciones: [
    "Limitar el estudio a una radiografía de tórax porque la atresia es una lesión aislada",
    "Realizar únicamente pruebas hepáticas",
    "Evaluar de manera sistemática anomalías asociadas, incluyendo valoración cardiaca y renal, además de los componentes vertebrales y otros pertinentes",
    "Descartar anomalías adicionales si el neonato se encuentra hemodinámicamente estable",
    "Posponer la evaluación cardiaca hasta después de la cirugía en todos los casos"
  ],
  respuestaCorrecta: 2,
  explicacion: `La atresia esofágica puede coexistir con otras malformaciones, incluidas anomalías vertebrales, anorrectales, cardiacas, traqueoesofágicas, renales y de extremidades. La evaluación preoperatoria permite identificar lesiones que modifican el riesgo anestésico, la secuencia de intervención y el pronóstico. La estabilización respiratoria y la prevención de aspiración siguen siendo prioritarias.`,
  perlaENARM: "Atresia esofágica: buscar malformaciones asociadas, especialmente cardiacas y renales, antes de planificar la reparación.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de malformaciones congénitas y cirugía neonatal.",
    internacional: "Pediatric surgical guidance on esophageal atresia and associated anomalies."
  },
  bibliografia: "Ashcraft's Pediatric Surgery."
},

{
  id: "PED-120",
  especialidad: "Pediatría",
  tema: "Neonatología",
  subtema: "Prematuridad y pronóstico neurológico",
  dificultad: "Muy alta",
  caso: `Prematuro de 25 semanas que sobrevivió a enfermedad respiratoria grave, hemorragia intraventricular y sepsis neonatal. Antes del egreso, la familia solicita información sobre las medidas necesarias para detectar secuelas a largo plazo.`,
  pregunta: "¿Qué estrategia de seguimiento está indicada por el perfil de riesgo?",
  opciones: [
    "Alta sin seguimiento si la exploración neurológica al egreso es normal",
    "Realizar neuroimagen diaria indefinidamente en todos los pacientes",
    "Indicar únicamente seguimiento del peso sin evaluación del desarrollo",
    "Esperar hasta la edad escolar para evaluar audición y visión",
    "Organizar seguimiento multidisciplinario del neurodesarrollo, audición, visión, crecimiento y necesidades de rehabilitación"
  ],
  respuestaCorrecta: 4,
  explicacion: `La prematuridad extrema, la hemorragia intraventricular, la sepsis y la enfermedad pulmonar grave aumentan el riesgo de alteraciones del neurodesarrollo y de déficits sensoriales. El seguimiento debe incluir vigilancia del desarrollo, crecimiento, audición, visión y necesidades de intervención temprana. La intensidad y periodicidad se individualizan según antecedentes, exploración y hallazgos de seguimiento.`,
  perlaENARM: "El egreso de un prematuro de alto riesgo no concluye la atención: el seguimiento longitudinal permite detectar secuelas e iniciar intervención temprana.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de seguimiento del recién nacido de alto riesgo.",
    internacional: "AAP guidance on follow-up care of high-risk infants."
  },
  bibliografia: "American Academy of Pediatrics. Follow-up Care of High-Risk Infants."
  },
  {
    id: "PED-121",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Reanimación neonatal",
    dificultad: "Muy alta",
    caso: `Recién nacido de 39 semanas obtenido por cesárea urgente. Tras los pasos iniciales de estabilización, permanece apneico y presenta frecuencia cardiaca de 80 lpm. Se inicia ventilación con presión positiva, pero después de 30 segundos la frecuencia cardiaca continúa en 80 lpm y no se observa elevación torácica.`,
    pregunta: "¿Qué intervención debe priorizarse ante la respuesta insuficiente a la ventilación?",
    opciones: [
      "Iniciar compresiones torácicas inmediatamente",
      "Aumentar la concentración de oxígeno al 100% sin modificar la ventilación",
      "Corregir la ventilación mediante evaluación de la mascarilla, posición de la vía aérea y permeabilidad, y considerar una vía aérea alternativa",
      "Administrar adrenalina intravenosa",
      "Administrar expansión de volumen de inmediato"
    ],
    respuestaCorrecta: 2,
    explicacion: `En la reanimación neonatal, la ventilación efectiva es la intervención prioritaria para la bradicardia asociada con apnea. La ausencia de movimiento torácico sugiere ventilación ineficaz. Deben corregirse el sello de la mascarilla, la posición de la cabeza y la permeabilidad de la vía aérea; si es necesario, se considera una mascarilla laríngea o intubación. Las compresiones se indican cuando la frecuencia cardiaca permanece por debajo de 60 lpm pese a ventilación efectiva.`,
    perlaENARM: "La ventilación ineficaz debe corregirse antes de escalar a compresiones o fármacos. La frecuencia cardiaca es el principal indicador de respuesta.",
    gpc: {
      mexico: "Consultar la normativa mexicana vigente de reanimación neonatal y atención inmediata del recién nacido.",
      internacional: "Neonatal Resuscitation: 2020 American Heart Association Guidelines for CPR and ECC; verificar actualizaciones vigentes."
    },
    bibliografia: "Textbook of Neonatal Resuscitation, 8.ª ed.; AHA Guidelines for CPR and ECC."
  },
  {
    id: "PED-122",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Enfermedad de membrana hialina",
    dificultad: "Muy alta",
    caso: `Recién nacido de 29 semanas, con dificultad respiratoria desde el nacimiento. Recibe CPAP nasal, pero aumenta el requerimiento de oxígeno y presenta retracciones subcostales. La radiografía muestra bajo volumen pulmonar, patrón reticulogranular difuso y broncogramas aéreos.`,
    pregunta: "¿Cuál es el mecanismo fisiopatológico predominante de esta enfermedad?",
    opciones: [
      "Obstrucción bronquial por tapones de moco con atrapamiento aéreo",
      "Deficiencia de surfactante con aumento de la tensión superficial y colapso alveolar",
      "Exceso de líquido pulmonar por retraso en su reabsorción",
      "Hipertensión venosa pulmonar secundaria a disfunción ventricular izquierda",
      "Destrucción alveolar por inflamación neutrofílica primaria"
    ],
    respuestaCorrecta: 1,
    explicacion: `La enfermedad de membrana hialina se debe principalmente a inmadurez de los neumocitos tipo II y producción insuficiente de surfactante. El aumento de la tensión superficial reduce la distensibilidad, favorece atelectasias difusas y aumenta el trabajo respiratorio. La prematuridad es el principal factor de riesgo. La CPAP y el surfactante de rescate temprano, cuando están indicados, disminuyen la necesidad de ventilación invasiva y sus complicaciones.`,
    perlaENARM: "Prematuridad más bajo volumen pulmonar, patrón reticulogranular y broncogramas aéreos orientan a déficit de surfactante.",
    gpc: {
      mexico: "Consultar la guía mexicana vigente para diagnóstico y manejo del síndrome de dificultad respiratoria neonatal.",
      internacional: "European Consensus Guidelines on the Management of Respiratory Distress Syndrome: 2022 update."
    },
    bibliografia: "European Consensus Guidelines on the Management of Respiratory Distress Syndrome, 2022; Avery's Diseases of the Newborn."
  },
  {
    id: "PED-123",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Sepsis neonatal de inicio temprano",
    dificultad: "Muy alta",
    caso: `Recién nacido de 35 semanas con dificultad respiratoria, letargo y mala perfusión a las 8 horas de vida. La madre presentó fiebre intraparto y ruptura de membranas de 22 horas. Se sospecha infección bacteriana invasiva y se obtiene hemocultivo antes de iniciar tratamiento, sin retrasar la estabilización.`,
    pregunta: "¿Cuál es el esquema empírico clásico para una sospecha de sepsis neonatal temprana mientras se esperan los cultivos?",
    opciones: [
      "Vancomicina y meropenem en todos los casos",
      "Ceftriaxona como monoterapia",
      "Ampicilina y gentamicina",
      "Azitromicina y amoxicilina",
      "Metronidazol y cefalexina"
    ],
    respuestaCorrecta: 2,
    explicacion: `Ampicilina más gentamicina es un esquema empírico clásico para la sepsis neonatal temprana, con cobertura para patógenos relevantes como estreptococo del grupo B, Listeria monocytogenes y bacilos gramnegativos. La elección definitiva debe ajustarse a la epidemiología local, susceptibilidad antimicrobiana, función renal, sospecha de meningitis y protocolos institucionales. En un neonato inestable, el tratamiento no debe retrasarse por estudios complementarios.`,
    perlaENARM: "Sepsis neonatal temprana: hemocultivo antes del antibiótico si no retrasa el tratamiento; ampicilina más gentamicina es un esquema empírico habitual.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente sobre prevención, diagnóstico y tratamiento de sepsis neonatal.",
      internacional: "NICE. Neonatal infection: antibiotics for prevention and treatment; consultar versión vigente."
    },
    bibliografia: "NICE NG195, Neonatal infection: antibiotics for prevention and treatment; Manual de Neonatología."
  },
  {
    id: "PED-124",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Enterocolitis necrosante",
    dificultad: "Muy alta",
    caso: `Prematuro de 30 semanas que recibe alimentación enteral presenta distensión abdominal progresiva, residuo gástrico bilioso, sangre en heces y episodios de apnea. La radiografía abdominal muestra neumatosis intestinal. El paciente aún mantiene presión arterial y diuresis adecuadas.`,
    pregunta: "¿Cuál es la conducta inicial más apropiada?",
    opciones: [
      "Continuar alimentación trófica y repetir radiografía en 24 horas",
      "Indicar antidiarreicos y observación",
      "Realizar colonoscopia urgente para confirmar el diagnóstico",
      "Suspender alimentación enteral, descomprimir el estómago, iniciar antibióticos y vigilar estrechamente la evolución",
      "Indicar cirugía inmediata en todo paciente con neumatosis intestinal"
    ],
    respuestaCorrecta: 3,
    explicacion: `La neumatosis intestinal en un prematuro con síntomas gastrointestinales es característica de enterocolitis necrosante. El tratamiento inicial incluye ayuno, descompresión nasogástrica, líquidos intravenosos, corrección de alteraciones metabólicas, antibióticos según el protocolo local y monitorización clínica y radiológica. La cirugía se considera ante perforación, peritonitis, deterioro persistente o evidencia de necrosis intestinal que no responde al manejo médico.`,
    perlaENARM: "La neumatosis intestinal es un hallazgo clásico. Neumoperitoneo sugiere perforación y constituye una indicación quirúrgica urgente.",
    gpc: {
      mexico: "Consultar protocolo institucional y recomendaciones mexicanas vigentes para enterocolitis necrosante neonatal.",
      internacional: "Revisiones sistemáticas y protocolos neonatales basados en evidencia para diagnóstico y manejo de enterocolitis necrosante."
    },
    bibliografia: "Cochrane Database of Systematic Reviews: intervenciones para prevención y tratamiento de enterocolitis necrosante; Avery's Diseases of the Newborn."
  },
  {
    id: "PED-125",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Hiperbilirrubinemia neonatal",
    dificultad: "Muy alta",
    caso: `Recién nacido de 37 semanas, de 30 horas de vida, presenta ictericia progresiva. La bilirrubina sérica total está por encima del umbral de fototerapia correspondiente a su edad en horas y factores de riesgo. Tiene prueba de antiglobulina directa positiva y anemia.`,
    pregunta: "¿Qué principio debe guiar la decisión de iniciar fototerapia?",
    opciones: [
      "Utilizar un valor fijo de bilirrubina para todos los recién nacidos",
      "Esperar a que la bilirrubina sea visible en las extremidades inferiores",
      "Iniciar fototerapia únicamente cuando aparezca letargo",
      "Basarse exclusivamente en la bilirrubina indirecta, sin considerar la edad gestacional",
      "Interpretar la bilirrubina total según edad posnatal en horas, edad gestacional y factores de neurotoxicidad"
    ],
    respuestaCorrecta: 4,
    explicacion: `La decisión de fototerapia depende de umbrales específicos según edad posnatal en horas y edad gestacional, además de factores que aumentan el riesgo de neurotoxicidad, como hemólisis isoimmune, deficiencia de G6PD, sepsis o inestabilidad clínica significativa. Una prueba de antiglobulina directa positiva y anemia sugieren hemólisis y requieren vigilancia estrecha. Deben utilizarse las curvas de la guía vigente aplicable al recién nacido.`,
    perlaENARM: "La ictericia durante las primeras 24 horas es patológica hasta demostrar lo contrario. La conducta se decide con bilirrubina sérica y curvas por edad en horas.",
    gpc: {
      mexico: "Consultar la guía mexicana vigente de hiperbilirrubinemia neonatal y los protocolos locales de fototerapia.",
      internacional: "American Academy of Pediatrics. Clinical Practice Guideline Revision: Management of Hyperbilirubinemia in the Newborn Infant 35 or More Weeks of Gestation, 2022."
    },
    bibliografia: "AAP Clinical Practice Guideline, Pediatrics, 2022; recomendaciones vigentes para hiperbilirrubinemia neonatal."
  },
  {
    id: "PED-126",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Colestasis neonatal",
    dificultad: "Muy alta",
    caso: `Lactante de 5 semanas con ictericia persistente, orina oscura y evacuaciones hipocólicas. La bilirrubina total es de 7 mg/dL y la directa de 4.2 mg/dL. Presenta hepatomegalia y ganancia ponderal insuficiente.`,
    pregunta: "¿Cuál es la prioridad diagnóstica ante este cuadro?",
    opciones: [
      "Considerar colestasis patológica e iniciar evaluación urgente para atresia biliar y otras causas hepatobiliares",
      "Atribuir la ictericia a leche materna sin realizar más estudios",
      "Indicar fototerapia como tratamiento definitivo",
      "Esperar hasta los 6 meses para valorar función hepática",
      "Solicitar únicamente prueba de antiglobulina directa"
    ],
    respuestaCorrecta: 0,
    explicacion: `La hiperbilirrubinemia conjugada nunca debe considerarse fisiológica. La acolia, coluria y hepatomegalia son signos de alarma de colestasis y obligan a evaluar con urgencia la posibilidad de atresia biliar, además de causas infecciosas, metabólicas y genéticas. El diagnóstico oportuno de atresia biliar es crucial porque el resultado de la portoenterostomía de Kasai suele ser mejor cuando se realiza tempranamente.`,
    perlaENARM: "Ictericia persistente con heces pálidas y bilirrubina directa elevada es una urgencia diagnóstica; no confundir con ictericia por leche materna.",
    gpc: {
      mexico: "Consultar recomendaciones mexicanas vigentes para evaluación de colestasis neonatal y referencia a hepatología pediátrica.",
      internacional: "NASPGHAN/ESPGHAN. Guideline for the Evaluation of Cholestatic Jaundice in Infants."
    },
    bibliografia: "NASPGHAN/ESPGHAN guidelines on cholestatic jaundice in infants; Sleisenger and Fordtran's Gastrointestinal and Liver Disease."
  },
  {
    id: "PED-127",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Hiperplasia suprarrenal congénita",
    dificultad: "Muy alta",
    caso: `Recién nacido de 10 días con vómitos, pérdida ponderal, deshidratación y choque. Los estudios muestran hiponatremia, hiperpotasemia, acidosis metabólica e hipoglucemia. Se sospecha una crisis suprarrenal por deficiencia de 21-hidroxilasa.`,
    pregunta: "Además de la reanimación con líquidos y corrección de la hipoglucemia, ¿qué tratamiento es prioritario?",
    opciones: [
      "Fludrocortisona oral como único tratamiento inmediato",
      "Restricción hídrica y vigilancia de electrolitos",
      "Hidrocortisona parenteral, sin retrasarla por la confirmación hormonal",
      "Levotiroxina intravenosa",
      "Insulina intravenosa como tratamiento de primera línea de la hiperpotasemia, independientemente del electrocardiograma"
    ],
    respuestaCorrecta: 2,
    explicacion: `La crisis suprarrenal neonatal requiere tratamiento inmediato con hidrocortisona parenteral, solución isotónica y dextrosa según glucemia y estado hemodinámico. La hiperpotasemia debe tratarse de acuerdo con su gravedad y el electrocardiograma. La confirmación etiológica incluye 17-hidroxiprogesterona y evaluación hormonal, pero no debe retrasar la estabilización. Después de la fase aguda se ajustan glucocorticoides y, cuando existe pérdida salina, mineralocorticoides y suplementación de sodio.`,
    perlaENARM: "Vómitos, choque, hiponatremia e hiperpotasemia en un neonato sugieren pérdida salina por hiperplasia suprarrenal congénita. La hidrocortisona urgente salva vidas.",
    gpc: {
      mexico: "Consultar GPC mexicana vigente para hiperplasia suprarrenal congénita y manejo de crisis suprarrenal pediátrica.",
      internacional: "Endocrine Society Clinical Practice Guideline: Congenital Adrenal Hyperplasia Due to Steroid 21-Hydroxylase Deficiency."
    },
    bibliografia: "Endocrine Society Clinical Practice Guideline on Congenital Adrenal Hyperplasia; Williams Textbook of Endocrinology."
  },
  {
    id: "PED-128",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Cardiopatía congénita ductus-dependiente",
    dificultad: "Muy alta",
    caso: `Recién nacido de 4 días que había evolucionado estable presenta dificultad respiratoria, pulsos femorales débiles, extremidades frías y choque. La saturación preductal es de 94% y la posductal de 92%. Se sospecha una lesión obstructiva sistémica ductus-dependiente.`,
    pregunta: "¿Qué intervención farmacológica debe iniciarse mientras se organiza la valoración cardiológica urgente?",
    opciones: [
      "Indometacina para cerrar el conducto arterioso",
      "Prostaglandina E1 para mantener o restablecer la permeabilidad ductal",
      "Furosemida como monoterapia",
      "Adenosina intravenosa",
      "Digoxina como tratamiento inicial de toda cardiopatía congénita"
    ],
    respuestaCorrecta: 1,
    explicacion: `En una lesión sistémica ductus-dependiente, como la coartación crítica de la aorta o el síndrome de corazón izquierdo hipoplásico, el cierre del conducto puede precipitar hipoperfusión y choque. La prostaglandina E1 permite mantener o restablecer el flujo ductal mientras se realiza ecocardiografía y se define el tratamiento definitivo. Debe administrarse con monitorización cardiorrespiratoria, ya que puede provocar apnea e hipotensión.`,
    perlaENARM: "Un recién nacido que se deteriora al cerrarse el conducto arterioso puede tener una cardiopatía crítica aunque la diferencia de saturación sea pequeña.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes para detección y estabilización de cardiopatías congénitas críticas.",
      internacional: "AHA scientific statements and neonatal critical congenital heart disease management guidance."
    },
    bibliografia: "Moss and Adams' Heart Disease in Infants, Children, and Adolescents; Braunwald's Heart Disease."
  },
  {
    id: "PED-129",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Hemorragia intraventricular del prematuro",
    dificultad: "Muy alta",
    caso: `Prematuro de 26 semanas y 780 g, clínicamente estable tras el nacimiento, con alto riesgo de hemorragia intraventricular. El equipo implementa medidas de cuidado del neurodesarrollo y vigilancia neurológica.`,
    pregunta: "¿Cuál es la estrategia de imagen habitual para detectar hemorragia intraventricular en este paciente?",
    opciones: [
      "Tomografía de cráneo diaria durante la primera semana",
      "Resonancia magnética urgente en todos los prematuros durante las primeras 6 horas",
      "Radiografía simple de cráneo al nacimiento",
      "Ultrasonido transfontanelar seriado según edad posnatal y protocolo para prematuros de alto riesgo",
      "Electroencefalograma como prueba de imagen de primera línea"
    ],
    respuestaCorrecta: 3,
    explicacion: `La ultrasonografía transfontanelar es la herramienta inicial de elección para detectar hemorragia de la matriz germinal e intraventricular en prematuros, debido a su disponibilidad, ausencia de radiación y posibilidad de realizar estudios seriados a la cabecera. La periodicidad depende de la edad gestacional, el riesgo clínico y el protocolo institucional. La resonancia puede aportar información adicional en situaciones seleccionadas, especialmente para lesiones de sustancia blanca y pronóstico neurológico.`,
    perlaENARM: "Prematuridad extrema: el ultrasonido transfontanelar es la prueba inicial habitual para hemorragia intraventricular; la tomografía no es el estudio de cribado rutinario.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes para seguimiento neurológico e imagen cerebral del recién nacido prematuro.",
      internacional: "Canadian Paediatric Society. Routine imaging of the preterm neonatal brain."
    },
    bibliografia: "Canadian Paediatric Society, Routine imaging of the preterm neonatal brain; Avery's Diseases of the Newborn."
  },
  {
    id: "PED-130",
    especialidad: "Pediatría",
    tema: "Neonatología",
    subtema: "Errores innatos del metabolismo",
    dificultad: "Muy alta",
    caso: `Recién nacido de 4 días que inicialmente se encontraba estable presenta rechazo al alimento, vómitos, taquipnea y deterioro neurológico. La gasometría muestra alcalosis respiratoria y los estudios revelan hiperamonemia marcada. No presenta hipoglucemia ni acidosis metabólica significativa.`,
    pregunta: "¿Qué grupo de enfermedades debe sospecharse prioritariamente?",
    opciones: [
      "Defectos del ciclo de la urea",
      "Galactosemia clásica como explicación única de la alcalosis respiratoria",
      "Hipotiroidismo congénito aislado",
      "Deficiencia de biotinidasa sin otras alteraciones",
      "Enfermedad de almacenamiento de glucógeno tipo I"
    ],
    respuestaCorrecta: 0,
    explicacion: `La hiperamonemia neonatal con alcalosis respiratoria y ausencia de acidosis metabólica significativa orienta a un defecto del ciclo de la urea. Se requiere valoración urgente, confirmación de amonio con una muestra correctamente procesada, determinación de aminoácidos plasmáticos y ácido orótico urinario, además de estudios metabólicos adicionales. La estabilización incluye suspender temporalmente el aporte proteico, proporcionar calorías para limitar el catabolismo y activar de inmediato al equipo metabólico; en hiperamonemia grave puede requerirse depuración extracorpórea.`,
    perlaENARM: "Hiperamonemia más alcalosis respiratoria en un neonato sugiere defecto del ciclo de la urea; la hiperamonemia con acidosis metabólica y cetosis orienta más a acidemias orgánicas.",
    gpc: {
      mexico: "Consultar protocolos de referencia mexicanos para errores innatos del metabolismo e hiperamonemia neonatal.",
      internacional: "Guidelines for the diagnosis and management of urea cycle disorders; consensos internacionales sobre hiperamonemia."
    },
    bibliografia: "Häberle et al. Guidelines for the diagnosis and management of urea cycle disorders; Nelson Textbook of Pediatrics."
  },

  {
    id: "PED-131",
    especialidad: "Pediatría",
    tema: "Crecimiento y desarrollo",
    subtema: "Desarrollo psicomotor normal",
    dificultad: "Baja",
    caso: `Lactante de 6 meses, producto de embarazo y parto sin complicaciones, acude a consulta de control. Se sienta con apoyo, sostiene adecuadamente la cabeza, transfiere objetos entre las manos y responde con sonidos ante la interacción de sus padres. La exploración neurológica no muestra alteraciones.`,
    pregunta: "¿Cuál de los siguientes hitos del desarrollo suele adquirirse alrededor de esta edad?",
    opciones: [
      "Caminar sin apoyo",
      "Realizar frases de dos palabras",
      "Sentarse sin apoyo de manera estable",
      "Controlar voluntariamente esfínteres",
      "Subir escaleras alternando los pies"
    ],
    respuestaCorrecta: 2,
    explicacion: `Alrededor de los 6 meses muchos lactantes comienzan a sentarse brevemente sin apoyo, aunque existe variabilidad individual. El desarrollo debe evaluarse en los dominios motor grueso, motor fino, lenguaje, cognición y área social. Caminar de manera independiente suele adquirirse aproximadamente entre los 12 y 15 meses; las frases de dos palabras aparecen habitualmente cerca de los 2 años.`,
    perlaENARM: "Los hitos del desarrollo se interpretan por rangos de edad, no como fechas rígidas. La pérdida de habilidades previamente adquiridas es siempre una señal de alarma.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente para vigilancia del crecimiento y desarrollo del menor de cinco años.",
      internacional: "CDC. Developmental Milestones; American Academy of Pediatrics, Bright Futures."
    },
    bibliografia: "Kliegman et al. Nelson Textbook of Pediatrics; CDC Developmental Milestones."
  },
  {
    id: "PED-132",
    especialidad: "Pediatría",
    tema: "Crecimiento y desarrollo",
    subtema: "Evaluación antropométrica",
    dificultad: "Baja",
    caso: `Niño de 2 años que acude a consulta preventiva. Se encuentra clínicamente sano, con alimentación variada y desarrollo adecuado. El médico desea evaluar su crecimiento mediante indicadores antropométricos estandarizados.`,
    pregunta: "¿Qué indicador es especialmente útil para evaluar el estado nutricional agudo en menores de 5 años?",
    opciones: [
      "Peso para la talla o longitud",
      "Perímetro cefálico aislado",
      "Talla para la edad exclusivamente",
      "Edad ósea como estudio inicial de rutina",
      "Perímetro torácico como único indicador"
    ],
    respuestaCorrecta: 0,
    explicacion: `El peso para la talla o longitud permite identificar emaciación y alteraciones del estado nutricional agudo. La talla para la edad es útil para detectar retraso del crecimiento lineal, generalmente asociado con desnutrición crónica u otros problemas persistentes. El peso para la edad identifica bajo peso, pero no distingue por sí solo entre talla baja y emaciación. La interpretación debe realizarse con curvas de crecimiento apropiadas para edad y sexo.`,
    perlaENARM: "Peso/talla: desnutrición aguda; talla/edad: retraso del crecimiento; peso/edad: bajo peso sin distinguir su mecanismo.",
    gpc: {
      mexico: "Consultar las normas y guías mexicanas vigentes para vigilancia nutricional y crecimiento infantil.",
      internacional: "WHO Child Growth Standards."
    },
    bibliografia: "WHO Child Growth Standards; Nelson Textbook of Pediatrics."
  },
  {
    id: "PED-133",
    especialidad: "Pediatría",
    tema: "Crecimiento y desarrollo",
    subtema: "Lactancia materna",
    dificultad: "Baja",
    caso: `Madre de un recién nacido sano de término pregunta durante el puerperio cuánto tiempo debe mantener la lactancia materna exclusiva y cuándo se recomienda comenzar la alimentación complementaria.`,
    pregunta: "¿Cuál es la recomendación general de alimentación para un lactante sano?",
    opciones: [
      "Introducir alimentos sólidos durante el primer mes",
      "Suspender la lactancia materna al cumplir 3 meses",
      "Ofrecer exclusivamente agua durante el día y leche por la noche",
      "Mantener lactancia materna exclusiva aproximadamente durante los primeros 6 meses e iniciar entonces alimentación complementaria adecuada",
      "Evitar la lactancia materna después de los 6 meses"
    ],
    respuestaCorrecta: 3,
    explicacion: `La recomendación general es mantener lactancia materna exclusiva durante los primeros 6 meses, sin agua ni otros alimentos, salvo indicación médica específica. A partir de esa edad se introducen alimentos complementarios seguros, variados y con densidad nutricional adecuada, mientras continúa la lactancia materna hasta los 2 años o más si madre e hijo lo desean.`,
    perlaENARM: "Lactancia materna exclusiva: aproximadamente 6 meses. La alimentación complementaria comienza alrededor de los 6 meses y no sustituye automáticamente la lactancia.",
    gpc: {
      mexico: "Consultar recomendaciones mexicanas vigentes de promoción, protección y apoyo a la lactancia materna.",
      internacional: "WHO. Infant and young child feeding."
    },
    bibliografia: "World Health Organization. Infant and young child feeding; Nelson Textbook of Pediatrics."
  },
  {
    id: "PED-134",
    especialidad: "Pediatría",
    tema: "Crecimiento y desarrollo",
    subtema: "Vacunación infantil",
    dificultad: "Baja",
    caso: `Lactante de 2 meses acude a su primera consulta de vacunación programada. No presenta fiebre, inmunodeficiencia conocida ni antecedentes de reacción grave a vacunas. El personal sanitario revisa la cartilla y confirma que no existen dosis previas correspondientes a esta edad.`,
    pregunta: "¿Cuál es el principio fundamental para decidir las vacunas que deben aplicarse en esta consulta?",
    opciones: [
      "Aplicar únicamente vacunas cuando el niño comience a acudir a guardería",
      "Revisar la cartilla y administrar las vacunas correspondientes a la edad conforme al esquema nacional vigente",
      "Esperar hasta los 6 meses para iniciar todas las vacunas",
      "Posponer toda vacunación por la posibilidad de fiebre posterior",
      "Reiniciar desde cero cualquier esquema si se desconoce una fecha exacta"
    ],
    respuestaCorrecta: 1,
    explicacion: `La vacunación debe realizarse conforme al esquema nacional vigente y los antecedentes documentados. En general, una enfermedad leve sin contraindicación específica no obliga a retrasar la vacunación. Cuando existen dosis atrasadas, se utiliza un esquema de recuperación según edad e intervalos mínimos; habitualmente no es necesario reiniciar series por interrupciones.`,
    perlaENARM: "Antes de vacunar, verifica edad, cartilla, dosis previas, contraindicaciones reales y esquema de recuperación. No reinicies automáticamente una serie interrumpida.",
    gpc: {
      mexico: "Programa de Vacunación Universal de México y cartilla nacional vigente.",
      internacional: "WHO. Immunization in practice; recomendaciones vigentes de inmunización pediátrica."
    },
    bibliografia: "Secretaría de Salud de México. Programa de Vacunación Universal; WHO Immunization in Practice."
  },
  {
    id: "PED-135",
    especialidad: "Pediatría",
    tema: "Crecimiento y desarrollo",
    subtema: "Desarrollo del lenguaje",
    dificultad: "Baja",
    caso: `Niña de 18 meses acude a revisión del desarrollo. Camina de forma independiente, señala objetos que desea y comprende instrucciones sencillas. Sus padres comentan que todavía no utiliza palabras reconocibles de manera consistente.`,
    pregunta: "¿Cuál es la conducta clínica más apropiada ante la preocupación por el lenguaje?",
    opciones: [
      "Asegurar a los padres que siempre es normal no hablar hasta los 4 años",
      "Indicar únicamente ejercicios de pronunciación y revisar hasta el ingreso escolar",
      "Diagnosticar discapacidad intelectual sin realizar evaluación adicional",
      "Esperar obligatoriamente hasta los 3 años antes de investigar",
      "Realizar evaluación del desarrollo y considerar valoración auditiva e intervención temprana según los hallazgos"
    ],
    respuestaCorrecta: 4,
    explicacion: `La ausencia de palabras reconocibles alrededor de los 18 meses amerita una evaluación del desarrollo y de la audición, además de revisar la comunicación social y los antecedentes clínicos. La intervención temprana puede iniciarse cuando existe una preocupación funcional, sin esperar necesariamente a establecer un diagnóstico etiológico definitivo. También deben investigarse regresión del lenguaje, falta de respuesta al nombre y dificultades de interacción social.`,
    perlaENARM: "Ante retraso del lenguaje, evalúa audición y desarrollo global. No atribuyas automáticamente el problema a variación normal ni esperes hasta la edad escolar.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente para vigilancia del desarrollo infantil y detección oportuna de alteraciones.",
      internacional: "American Academy of Pediatrics. Developmental surveillance and screening; CDC Developmental Milestones."
    },
    bibliografia: "American Academy of Pediatrics. Developmental Surveillance and Screening; Nelson Textbook of Pediatrics."
  },
  {
    id: "PED-136",
    especialidad: "Pediatría",
    tema: "Crecimiento y desarrollo",
    subtema: "Deshidratación por gastroenteritis",
    dificultad: "Baja",
    caso: `Niño de 2 años con diarrea acuosa de 24 horas de evolución, sin sangre en las evacuaciones. Está despierto, acepta líquidos, presenta mucosas ligeramente secas y mantiene perfusión periférica adecuada. No tiene vómitos persistentes ni signos de choque.`,
    pregunta: "¿Cuál es la intervención inicial de elección para prevenir o corregir una deshidratación leve?",
    opciones: [
      "Administrar solución de rehidratación oral en cantidades pequeñas y frecuentes",
      "Indicar ayuno absoluto durante 24 horas",
      "Administrar antibióticos a todos los niños con diarrea",
      "Sustituir todos los líquidos por bebidas carbonatadas",
      "Administrar líquidos intravenosos en todos los casos, independientemente del estado clínico"
    ],
    respuestaCorrecta: 0,
    explicacion: `La solución de rehidratación oral es el tratamiento de primera línea en la mayoría de los niños con deshidratación leve o moderada que pueden beber. Se administra en tomas frecuentes y se repone la pérdida continua por diarrea o vómitos. Debe continuarse la alimentación apropiada para la edad. La vía intravenosa se reserva para choque, deshidratación grave, deterioro clínico o fracaso de la rehidratación oral, según la evaluación.`,
    perlaENARM: "La solución de rehidratación oral es preferente cuando el niño puede beber y no presenta choque. Las bebidas gaseosas y jugos concentrados no la sustituyen.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente para prevención, diagnóstico y tratamiento de enfermedad diarreica aguda en menores de cinco años.",
      internacional: "WHO. Diarrhoeal disease: treatment and prevention guidance."
    },
    bibliografia: "WHO. Diarrhoeal disease; Nelson Textbook of Pediatrics."
  },
  {
    id: "PED-137",
    especialidad: "Pediatría",
    tema: "Crecimiento y desarrollo",
    subtema: "Fiebre en la infancia",
    dificultad: "Baja",
    caso: `Niño de 4 años con fiebre de 38.5 °C desde hace 12 horas, rinorrea y tos leve. Está activo entre los episodios febriles, bebe líquidos, orina normalmente y no presenta dificultad respiratoria, rigidez de nuca ni exantema petequial.`,
    pregunta: "¿Cuál es una recomendación apropiada para el manejo domiciliario inicial si la evaluación clínica confirma bajo riesgo?",
    opciones: [
      "Administrar ácido acetilsalicílico para reducir la temperatura",
      "Utilizar antibióticos de amplio espectro de forma preventiva",
      "Ofrecer líquidos, vigilar el estado general y utilizar un antitérmico apropiado si existe malestar",
      "Alternar rutinariamente varios antitérmicos cada hora",
      "Solicitar tomografía cerebral por toda fiebre superior a 38 °C"
    ],
    respuestaCorrecta: 2,
    explicacion: `En un niño con buen estado general y sin signos de alarma, el manejo es principalmente de soporte: líquidos, vigilancia clínica y un antitérmico apropiado para aliviar el malestar, según peso y contraindicaciones. No se recomienda tratar exclusivamente el número del termómetro ni utilizar ácido acetilsalicílico en niños con enfermedades febriles. Debe indicarse reevaluación si aparecen dificultad respiratoria, alteración del estado de conciencia, deshidratación, rigidez de nuca u otros signos de alarma.`,
    perlaENARM: "Los antitérmicos se utilizan para aliviar el malestar, no solo para normalizar la temperatura. El estado general y los signos de alarma orientan la conducta.",
    gpc: {
      mexico: "Consultar recomendaciones mexicanas vigentes para valoración y manejo de fiebre en población pediátrica.",
      internacional: "NICE. Fever in under 5s: assessment and initial management."
    },
    bibliografia: "NICE NG143. Fever in under 5s: assessment and initial management; Nelson Textbook of Pediatrics."
  },
  {
    id: "PED-138",
    especialidad: "Pediatría",
    tema: "Crecimiento y desarrollo",
    subtema: "Otitis media aguda",
    dificultad: "Baja",
    caso: `Niño de 3 años con otalgia de inicio reciente después de un cuadro de infección respiratoria superior. La otoscopia muestra membrana timpánica abombada y movilidad reducida. Está afebril, tolera la vía oral y no presenta otorrea ni complicaciones.`,
    pregunta: "¿Qué hallazgo otoscópico respalda con mayor fuerza el diagnóstico de otitis media aguda?",
    opciones: [
      "Cerumen abundante que impide visualizar la membrana",
      "Eritema aislado de la membrana timpánica después del llanto",
      "Membrana timpánica normal con conducto auditivo inflamado",
      "Abombamiento de la membrana timpánica acompañado de evidencia de derrame en oído medio",
      "Prurito auricular sin alteraciones otoscópicas"
    ],
    respuestaCorrecta: 3,
    explicacion: `El abombamiento de la membrana timpánica y la evidencia de derrame en el oído medio son hallazgos centrales para diagnosticar otitis media aguda. El eritema aislado es inespecífico y puede aparecer por llanto o irritación. La decisión entre observación y antibióticos depende de la edad, gravedad, lateralidad, otorrea, certeza diagnóstica y posibilidad de seguimiento.`,
    perlaENARM: "El abombamiento timpánico es más específico que el eritema aislado. No diagnostiques otitis media aguda únicamente por una membrana roja.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente para diagnóstico y tratamiento de otitis media aguda en pediatría.",
      internacional: "American Academy of Pediatrics. The Diagnosis and Management of Acute Otitis Media."
    },
    bibliografia: "American Academy of Pediatrics. Acute Otitis Media Clinical Practice Guideline; Nelson Textbook of Pediatrics."
  },
  {
    id: "PED-139",
    especialidad: "Pediatría",
    tema: "Crecimiento y desarrollo",
    subtema: "Asma pediátrica",
    dificultad: "Baja",
    caso: `Niño de 7 años con episodios recurrentes de sibilancias, tos nocturna y disnea desencadenada por ejercicio. Los síntomas fluctúan y mejoran espontáneamente entre episodios. Actualmente se encuentra estable, sin dificultad respiratoria.`,
    pregunta: "¿Qué prueba objetiva es útil para demostrar variabilidad del flujo espiratorio en un niño capaz de realizar la maniobra correctamente?",
    opciones: [
      "Radiografía de tórax en cada episodio",
      "Espirometría antes y después de broncodilatador",
      "Hemocultivo durante un episodio de tos",
      "Tomografía de tórax como estudio inicial rutinario",
      "Prueba cutánea de alergia como confirmación funcional del asma"
    ],
    respuestaCorrecta: 1,
    explicacion: `En niños en edad escolar que pueden realizar una maniobra reproducible, la espirometría con prueba broncodilatadora ayuda a documentar obstrucción variable del flujo aéreo. Un resultado normal no excluye asma si el paciente está asintomático, por lo que puede ser necesario repetir la prueba durante los síntomas o utilizar pruebas adicionales según el contexto. La historia clínica debe demostrar síntomas variables compatibles y considerar diagnósticos diferenciales.`,
    perlaENARM: "En escolares, confirma el diagnóstico de asma con síntomas compatibles y evidencia objetiva de variabilidad del flujo aéreo siempre que sea posible.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente para diagnóstico y tratamiento del asma en niños.",
      internacional: "Global Initiative for Asthma (GINA), estrategia global vigente."
    },
    bibliografia: "Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention; Nelson Textbook of Pediatrics."
  },
  {
    id: "PED-140",
    especialidad: "Pediatría",
    tema: "Crecimiento y desarrollo",
    subtema: "Prevención de anemia ferropénica",
    dificultad: "Baja",
    caso: `Lactante de 10 meses con alimentación complementaria basada principalmente en frutas, verduras y cereales refinados. Consume cantidades escasas de alimentos ricos en hierro y no recibe fórmula fortificada. En la exploración se observa palidez leve, sin dificultad respiratoria ni compromiso hemodinámico.`,
    pregunta: "¿Cuál de las siguientes medidas nutricionales ayuda a prevenir la deficiencia de hierro durante la alimentación complementaria?",
    opciones: [
      "Retrasar todos los alimentos sólidos hasta los 12 meses",
      "Ofrecer té después de cada comida para mejorar la absorción del hierro",
      "Sustituir los alimentos ricos en hierro por leche de vaca como bebida principal antes de los 12 meses",
      "Evitar carnes y leguminosas durante el primer año",
      "Incorporar alimentos apropiados para la edad ricos en hierro y valorar hemoglobina y estudios adicionales según el riesgo clínico"
    ],
    respuestaCorrecta: 4,
    explicacion: `Durante la segunda mitad del primer año aumentan los requerimientos de hierro. La alimentación complementaria debe incluir fuentes apropiadas para la edad, como carnes y alimentos fortificados; las leguminosas también contribuyen, aunque el hierro no hemo tiene menor biodisponibilidad. La evaluación de anemia debe considerar factores de riesgo, antecedentes perinatales, dieta y pruebas indicadas por la edad y las recomendaciones locales. La leche de vaca como bebida principal no se recomienda antes de los 12 meses.`,
    perlaENARM: "La prevención de ferropenia requiere alimentos ricos en hierro desde el inicio de la alimentación complementaria. La leche de vaca como bebida principal antes del año aumenta el riesgo de deficiencia de hierro.",
    gpc: {
      mexico: "Consultar recomendaciones mexicanas vigentes de nutrición infantil, prevención y diagnóstico de anemia ferropénica.",
      internacional: "WHO. Guideline on use of ferritin concentrations to assess iron status; recomendaciones de alimentación complementaria."
    },
    bibliografia: "WHO. Guideline on use of ferritin concentrations to assess iron status; Nelson Textbook of Pediatrics."
  },
  {
    id: "PED-141",
    especialidad: "Pediatría",
    tema: "Crecimiento y desarrollo",
    subtema: "Desarrollo puberal",
    dificultad: "Media",
    caso: `Niña de 7 años y 4 meses es llevada a consulta porque su madre nota crecimiento mamario progresivo desde hace 3 meses. No presenta cefalea, alteraciones visuales ni exposición conocida a estrógenos. La exploración confirma desarrollo mamario Tanner II, sin vello púbico. Su velocidad de crecimiento ha aumentado respecto al año previo.`,
    pregunta: "¿Cuál es la conducta inicial más apropiada ante la sospecha de pubertad precoz central?",
    opciones: [
      "Diagnosticar una variante normal sin seguimiento porque no existe vello púbico",
      "Solicitar exclusivamente una resonancia magnética cerebral antes de cualquier valoración endocrina",
      "Realizar evaluación clínica del desarrollo puberal y crecimiento, edad ósea y estudios hormonales dirigidos según los hallazgos",
      "Iniciar análogos de GnRH sin confirmar la progresión puberal",
      "Indicar tratamiento con hormona de crecimiento para frenar la maduración ósea"
    ],
    respuestaCorrecta: 2,
    explicacion: `La aparición de desarrollo mamario antes de los 8 años puede indicar pubertad precoz, especialmente cuando existe progresión y aceleración de la velocidad de crecimiento. La valoración incluye historia clínica, exploración Tanner, gráfica de crecimiento y edad ósea. Las concentraciones basales de LH y otras pruebas hormonales se seleccionan según el contexto; en casos dudosos puede requerirse estimulación con GnRH o un agonista. La indicación de neuroimagen depende de la edad, los hallazgos y la sospecha de lesión del sistema nervioso central.`,
    perlaENARM: "En niñas, el desarrollo mamario antes de los 8 años amerita valoración. La progresión clínica y la aceleración del crecimiento ayudan a distinguir pubertad precoz de telarquia aislada.",
    gpc: {
      mexico: "Consultar las recomendaciones mexicanas vigentes para evaluación de alteraciones del desarrollo puberal.",
      internacional: "Pediatric Endocrine Society y Endocrine Society: recomendaciones para evaluación de pubertad precoz central."
    },
    bibliografia: "Williams Textbook of Endocrinology; recomendaciones de la Pediatric Endocrine Society sobre pubertad precoz."
  },
  {
    id: "PED-142",
    especialidad: "Pediatría",
    tema: "Crecimiento y desarrollo",
    subtema: "Talla baja",
    dificultad: "Media",
    caso: `Niño de 8 años referido por talla baja. Su estatura se encuentra por debajo del percentil 3, pero conserva una velocidad de crecimiento anual cercana a la esperada. Ambos padres son de talla baja. La exploración física no muestra dismorfias, desproporción corporal ni datos de enfermedad sistémica.`,
    pregunta: "¿Qué dato ayuda más a diferenciar una talla baja familiar de una alteración patológica del crecimiento?",
    opciones: [
      "La velocidad de crecimiento longitudinal y su evolución en la gráfica",
      "El peso registrado en una sola consulta",
      "La presencia aislada de apetito conservado",
      "La edad cronológica sin considerar antecedentes familiares",
      "La concentración de glucosa capilar en una medición aislada"
    ],
    respuestaCorrecta: 0,
    explicacion: `La talla baja familiar suele acompañarse de velocidad de crecimiento conservada y una talla adulta estimada congruente con el potencial genético. En cambio, la desaceleración del crecimiento, el cruce descendente de percentiles o la desproporción corporal obligan a buscar causas endocrinas, nutricionales, genéticas o sistémicas. La evaluación incluye mediciones seriadas confiables, talla parental, proporciones corporales y estudios dirigidos según la historia clínica.`,
    perlaENARM: "No basta con identificar una talla menor al percentil 3: la velocidad de crecimiento y la trayectoria longitudinal son esenciales para interpretar el hallazgo.",
    gpc: {
      mexico: "Consultar recomendaciones mexicanas vigentes para evaluación de talla baja y trastornos del crecimiento.",
      internacional: "Pediatric Endocrine Society. Clinical guidance for evaluation of short stature."
    },
    bibliografia: "Williams Textbook of Endocrinology; Nelson Textbook of Pediatrics."
  },
  {
    id: "PED-143",
    especialidad: "Pediatría",
    tema: "Nutrición pediátrica",
    subtema: "Desnutrición aguda grave",
    dificultad: "Media",
    caso: `Lactante de 14 meses con pérdida ponderal importante, edema bilateral en ambos pies y apatía. Presenta temperatura de 35.4 °C, glucemia de 48 mg/dL y rechazo parcial de la alimentación. La perfusión es lenta y existe sospecha de infección concomitante.`,
    pregunta: "¿Cuál es una prioridad inmediata en la estabilización de este paciente?",
    opciones: [
      "Administrar una carga rápida de proteínas para recuperar masa muscular",
      "Iniciar una dieta hipercalórica completa sin adaptación",
      "Restringir todos los líquidos durante 24 horas",
      "Reconocer la desnutrición grave complicada y tratar de inmediato la hipoglucemia y la hipotermia, mientras se evalúan infección y perfusión",
      "Indicar diuréticos como primera medida para eliminar el edema"
    ],
    respuestaCorrecta: 3,
    explicacion: `La desnutrición aguda grave con edema, hipoglucemia e hipotermia es una emergencia. La estabilización requiere corregir la hipoglucemia y la hipotermia, evaluar y tratar infección cuando esté indicada, vigilar perfusión y electrolitos y comenzar alimentación terapéutica cuidadosamente adaptada. Estos pacientes tienen riesgo de sobrecarga de líquidos y síndrome de realimentación, por lo que no debe iniciarse una rehabilitación nutricional agresiva sin estabilización y monitorización.`,
    perlaENARM: "En desnutrición grave complicada, primero se estabilizan hipoglucemia, hipotermia, infección y alteraciones hidroelectrolíticas; la rehabilitación nutricional se realiza de forma progresiva.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente para diagnóstico y tratamiento de desnutrición grave en menores de cinco años.",
      internacional: "WHO. Guideline on the prevention and management of wasting and nutritional oedema in infants and children under 5 years."
    },
    bibliografia: "WHO. Guideline on the prevention and management of wasting and nutritional oedema; Nelson Textbook of Pediatrics."
  },
  {
    id: "PED-144",
    especialidad: "Pediatría",
    tema: "Nutrición pediátrica",
    subtema: "Obesidad infantil",
    dificultad: "Media",
    caso: `Niño de 10 años con índice de masa corporal por encima del percentil 97 para edad y sexo. Presenta acantosis nigricans cervical y antecedente familiar de diabetes tipo 2. No refiere poliuria, polidipsia ni pérdida ponderal.`,
    pregunta: "¿Qué estrategia de evaluación es más apropiada ante el riesgo cardiometabólico de este paciente?",
    opciones: [
      "Solicitar tomografía abdominal para cuantificar grasa visceral como prueba inicial",
      "Evaluar presión arterial, historia familiar y hábitos, y solicitar pruebas metabólicas apropiadas para edad y factores de riesgo",
      "Indicar insulina preventiva aunque no se haya demostrado diabetes",
      "Limitar la evaluación a medir nuevamente el peso dentro de un año",
      "Solicitar exclusivamente concentraciones de cortisol para descartar síndrome de Cushing"
    ],
    respuestaCorrecta: 1,
    explicacion: `La obesidad pediátrica requiere evaluación integral de comorbilidades, presión arterial, trayectoria del IMC, hábitos, salud mental y antecedentes familiares. La acantosis nigricans sugiere resistencia a la insulina, pero no confirma diabetes. Según edad, gravedad y factores de riesgo, se consideran glucosa o HbA1c, perfil lipídico y evaluación de enfermedad hepática metabólica. Las pruebas endocrinas extensas no se solicitan rutinariamente si el crecimiento lineal es normal y no existen datos clínicos específicos.`,
    perlaENARM: "La acantosis nigricans es un marcador clínico de resistencia a la insulina, no un diagnóstico de diabetes. El cribado debe individualizarse por edad y riesgo.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente para prevención, diagnóstico y tratamiento del sobrepeso y obesidad en población pediátrica.",
      internacional: "American Academy of Pediatrics. Clinical Practice Guideline for the Evaluation and Treatment of Children and Adolescents With Obesity, 2023."
    },
    bibliografia: "AAP Clinical Practice Guideline for the Evaluation and Treatment of Children and Adolescents With Obesity, 2023; Nelson Textbook of Pediatrics."
  },
  {
    id: "PED-145",
    especialidad: "Pediatría",
    tema: "Urgencias pediátricas",
    subtema: "Convulsión febril simple",
    dificultad: "Media",
    caso: `Niño de 20 meses presenta una crisis tónico-clónica generalizada de 4 minutos durante un cuadro febril. Recupera completamente el estado de conciencia, no presenta déficit neurológico focal y no tiene antecedentes de crisis afebriles. No ha repetido la convulsión durante las siguientes 24 horas.`,
    pregunta: "¿Qué característica permite clasificar este episodio como convulsión febril simple?",
    opciones: [
      "Duración superior a 30 minutos",
      "Inicio focal con parálisis persistente posterior",
      "Crisis recurrentes en el mismo episodio febril",
      "Presencia de infección del sistema nervioso central",
      "Crisis generalizada de menos de 15 minutos, sin recurrencia en 24 horas y sin datos de infección del sistema nervioso central"
    ],
    respuestaCorrecta: 4,
    explicacion: `La convulsión febril simple ocurre habitualmente entre los 6 y 60 meses, es generalizada, dura menos de 15 minutos y no se repite dentro de 24 horas. El niño recupera su estado neurológico basal y no hay evidencia de infección del sistema nervioso central ni de una causa metabólica aguda. La evaluación se dirige a identificar la causa de la fiebre y descartar signos de alarma; no se indican rutinariamente electroencefalograma, neuroimagen o anticonvulsivos continuos en un caso típico.`,
    perlaENARM: "Simple: generalizada, menos de 15 minutos y una sola crisis en 24 horas. Focalidad, duración prolongada o recurrencia orientan a convulsión febril compleja.",
    gpc: {
      mexico: "Consultar las recomendaciones mexicanas vigentes para evaluación de crisis convulsivas febriles en pediatría.",
      internacional: "American Academy of Pediatrics. Neurodiagnostic evaluation of the child with a simple febrile seizure."
    },
    bibliografia: "American Academy of Pediatrics, Pediatrics: Neurodiagnostic evaluation of the child with a simple febrile seizure; Nelson Textbook of Pediatrics."
  },
  {
    id: "PED-146",
    especialidad: "Pediatría",
    tema: "Urgencias pediátricas",
    subtema: "Cetoacidosis diabética",
    dificultad: "Media",
    caso: `Adolescente de 13 años con poliuria, polidipsia, dolor abdominal y vómitos. Está deshidratado, respira profundamente y presenta glucosa de 420 mg/dL, pH venoso de 7.12 y bicarbonato de 8 mmol/L. Se sospecha cetoacidosis diabética.`,
    pregunta: "¿Qué aspecto del tratamiento requiere especial atención para reducir el riesgo de lesión cerebral durante la estabilización?",
    opciones: [
      "Administrar bicarbonato sistemáticamente para normalizar de inmediato el pH",
      "Administrar insulina en bolo intravenoso antes de iniciar líquidos",
      "Realizar rehidratación y administrar insulina intravenosa de forma protocolizada, con monitorización neurológica y electrolítica estrecha",
      "Suspender toda monitorización cuando disminuya la glucosa",
      "Restringir completamente los líquidos hasta normalizar el bicarbonato"
    ],
    respuestaCorrecta: 2,
    explicacion: `La cetoacidosis diabética pediátrica requiere rehidratación cuidadosa, insulina intravenosa continua según protocolo, vigilancia estrecha del potasio y evaluación neurológica frecuente. Debe evitarse el bolo inicial de insulina y el uso rutinario de bicarbonato, salvo indicaciones excepcionales. La alteración del estado mental, cefalea progresiva, bradicardia, hipertensión o deterioro neurológico pueden indicar lesión cerebral asociada a cetoacidosis y requieren actuación inmediata conforme al protocolo pediátrico.`,
    perlaENARM: "En cetoacidosis diabética pediátrica, no administrar bolo de insulina de rutina. Vigila el potasio y los cambios neurológicos durante todo el tratamiento.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente para diagnóstico y tratamiento de diabetes mellitus tipo 1 y cetoacidosis diabética pediátrica.",
      internacional: "ISPAD Clinical Practice Consensus Guidelines, 2022: diabetic ketoacidosis and hyperglycemic hyperosmolar state."
    },
    bibliografia: "ISPAD Clinical Practice Consensus Guidelines, 2022; Nelson Textbook of Pediatrics."
  },
  {
    id: "PED-147",
    especialidad: "Pediatría",
    tema: "Infectología pediátrica",
    subtema: "Enfermedad de Kawasaki",
    dificultad: "Media",
    caso: `Niño de 3 años con fiebre persistente durante 6 días, conjuntivitis bilateral no purulenta, labios eritematosos y fisurados, lengua aframbuesada, exantema polimorfo y edema de manos. No se identifica un foco bacteriano que explique el cuadro.`,
    pregunta: "¿Cuál es la complicación que se busca prevenir mediante el tratamiento oportuno de esta enfermedad?",
    opciones: [
      "Glomerulonefritis rápidamente progresiva",
      "Estenosis hipertrófica del píloro",
      "Fibrosis pulmonar irreversible",
      "Aneurismas de las arterias coronarias",
      "Obstrucción intestinal por invaginación en todos los casos"
    ],
    respuestaCorrecta: 3,
    explicacion: `La enfermedad de Kawasaki es una vasculitis de vasos medianos que afecta especialmente las arterias coronarias. El tratamiento oportuno con inmunoglobulina intravenosa y ácido acetilsalicílico, de acuerdo con el protocolo y la evaluación cardiológica, reduce el riesgo de aneurismas coronarios. La ecocardiografía permite valorar las arterias coronarias y la función cardiaca; el seguimiento se adapta al riesgo y a los hallazgos iniciales.`,
    perlaENARM: "Fiebre de al menos 5 días con manifestaciones mucocutáneas características obliga a considerar Kawasaki. La principal complicación a prevenir es la lesión coronaria.",
    gpc: {
      mexico: "Consultar recomendaciones mexicanas vigentes para diagnóstico y tratamiento de enfermedad de Kawasaki.",
      internacional: "American Heart Association. Diagnosis, Treatment, and Long-Term Management of Kawasaki Disease."
    },
    bibliografia: "American Heart Association scientific statement on Kawasaki disease; Nelson Textbook of Pediatrics."
  },
  {
    id: "PED-148",
    especialidad: "Pediatría",
    tema: "Infectología pediátrica",
    subtema: "Infección urinaria febril",
    dificultad: "Media",
    caso: `Niña de 18 meses con fiebre de 39 °C, irritabilidad y vómitos sin foco evidente. El análisis de orina muestra piuria y esterasa leucocitaria positiva. Se sospecha infección urinaria febril y la paciente está hemodinámicamente estable.`,
    pregunta: "¿Cuál es el método preferido para obtener una muestra de orina para urocultivo en una niña que aún no controla esfínteres, cuando se necesita una muestra diagnóstica confiable?",
    opciones: [
      "Recolectar orina de una bolsa adhesiva y aceptar cualquier cultivo positivo como confirmatorio",
      "Obtener una muestra mediante cateterismo vesical o aspiración suprapúbica, según el contexto clínico",
      "Utilizar una muestra exprimida del pañal",
      "Realizar el urocultivo con una muestra de agua del baño",
      "Evitar el cultivo si la fiebre es elevada"
    ],
    respuestaCorrecta: 1,
    explicacion: `En niños sin control de esfínteres, el cateterismo vesical o la aspiración suprapúbica proporcionan muestras más confiables para urocultivo cuando se requiere confirmación diagnóstica. Las muestras obtenidas con bolsa adhesiva presentan alta contaminación y un resultado positivo no confirma por sí solo una infección urinaria. El tratamiento se inicia según gravedad, edad, tolerancia oral y protocolos locales, ajustándolo posteriormente al cultivo y antibiograma.`,
    perlaENARM: "La bolsa recolectora puede ser útil para cribado en ciertos contextos, pero un cultivo positivo de bolsa tiene alto riesgo de contaminación y no confirma de manera fiable una infección urinaria.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente para diagnóstico y tratamiento de infección urinaria en menores de 18 años.",
      internacional: "NICE. Urinary tract infection in under 16s: diagnosis and management."
    },
    bibliografia: "NICE NG224. Urinary tract infection in under 16s: diagnosis and management; Nelson Textbook of Pediatrics."
  },
  {
    id: "PED-149",
    especialidad: "Pediatría",
    tema: "Neumología pediátrica",
    subtema: "Bronquiolitis aguda",
    dificultad: "Media",
    caso: `Lactante de 5 meses con rinorrea, tos y sibilancias después de tres días de síntomas respiratorios. Presenta tiraje subcostal leve, saturación de oxígeno de 94% al aire ambiente y alimentación conservada. No tiene antecedentes de episodios recurrentes de sibilancias.`,
    pregunta: "¿Cuál es el manejo habitual de una bronquiolitis no complicada en este paciente?",
    opciones: [
      "Antibióticos de amplio espectro durante 10 días",
      "Corticoides sistémicos y broncodilatadores de forma rutinaria",
      "Radiografía de tórax y tomografía en todos los casos",
      "Oxígeno suplementario obligatorio con saturación de 94% en todo lactante",
      "Tratamiento de soporte, vigilancia del esfuerzo respiratorio y de la hidratación, con oxígeno si cumple criterios clínicos"
    ],
    respuestaCorrecta: 4,
    explicacion: `La bronquiolitis típica se diagnostica clínicamente y su tratamiento es principalmente de soporte. Se vigilan trabajo respiratorio, hidratación y capacidad para alimentarse. El oxígeno se utiliza según la saturación persistente, edad, comorbilidades y guía aplicable; una saturación aislada de 94% en un lactante estable no obliga por sí sola a administrarlo. Los broncodilatadores, corticoides y antibióticos no se recomiendan rutinariamente en la bronquiolitis típica sin otra indicación.`,
    perlaENARM: "Bronquiolitis típica: soporte e hidratación. Evita radiografías, antibióticos y broncodilatadores rutinarios si no existe una indicación específica.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente para diagnóstico, tratamiento y prevención de bronquiolitis en menores de dos años.",
      internacional: "NICE. Bronchiolitis in children: diagnosis and management."
    },
    bibliografia: "NICE NG9. Bronchiolitis in children: diagnosis and management; Nelson Textbook of Pediatrics."
  },
  {
    id: "PED-150",
    especialidad: "Pediatría",
    tema: "Hematología pediátrica",
    subtema: "Púrpura trombocitopénica inmune",
    dificultad: "Media",
    caso: `Niño de 6 años que presentó una infección respiratoria viral dos semanas antes. Acude por petequias y equimosis de aparición reciente, sin hemorragia mucosa importante ni síntomas sistémicos. El hemograma muestra trombocitopenia aislada de 18 000/µL; hemoglobina y leucocitos son normales. La exploración no revela hepatoesplenomegalia ni adenopatías.`,
    pregunta: "¿Qué estrategia de manejo debe considerarse en una probable púrpura trombocitopénica inmune recién diagnosticada?",
    opciones: [
      "Evaluar la gravedad del sangrado y el contexto clínico; puede elegirse observación estrecha o tratamiento según el riesgo hemorrágico",
      "Indicar transfusión profiláctica de plaquetas en todo paciente con menos de 30 000/µL",
      "Administrar quimioterapia urgente por la posibilidad de leucemia, sin revisar el frotis",
      "Realizar esplenectomía como tratamiento inicial habitual",
      "Prescribir anticoagulación para prevenir trombosis por la trombocitopenia"
    ],
    respuestaCorrecta: 0,
    explicacion: `La púrpura trombocitopénica inmune suele manifestarse con trombocitopenia aislada en un niño por lo demás sano. El tratamiento se decide principalmente según el sangrado, la calidad de vida, el riesgo individual y la posibilidad de seguimiento, no solo por el recuento plaquetario. La observación es apropiada en muchos niños con sangrado ausente o leve; los tratamientos de primera línea se consideran cuando el sangrado o las circunstancias clínicas lo justifican. Deben buscarse datos atípicos que sugieran otras causas.`,
    perlaENARM: "En la PTI pediátrica, el recuento plaquetario aislado no determina automáticamente el tratamiento: la gravedad del sangrado y el contexto clínico son fundamentales.",
    gpc: {
      mexico: "Consultar las recomendaciones mexicanas vigentes para diagnóstico y manejo de trombocitopenia inmune primaria pediátrica.",
      internacional: "American Society of Hematology. 2019 guidelines for immune thrombocytopenia; verificar actualizaciones posteriores."
    },
    bibliografia: "American Society of Hematology. Guidelines for immune thrombocytopenia, 2019; Nelson Textbook of Pediatrics."
  },
  {
    id: "PED-151",
    especialidad: "Pediatría",
    tema: "Hematología pediátrica",
    subtema: "Anemia ferropénica",
    dificultad: "Media",
    caso: `Niña de 20 meses con palidez, irritabilidad y consumo aproximado de 900 mL diarios de leche de vaca. El hemograma muestra hemoglobina de 8.9 g/dL, volumen corpuscular medio disminuido y amplitud de distribución eritrocitaria elevada. La ferritina está disminuida y no existen datos clínicos de infección aguda.`,
    pregunta: "¿Cuál es el mecanismo fisiopatológico principal de las alteraciones hematológicas?",
    opciones: [
      "Destrucción autoinmune de eritrocitos por anticuerpos calientes",
      "Disminución de la síntesis de hemoglobina por disponibilidad insuficiente de hierro",
      "Fallo medular por sustitución de la médula ósea",
      "Defecto hereditario de síntesis de cadenas beta de globina",
      "Deficiencia aislada de vitamina B12 con alteración de la maduración nuclear"
    ],
    respuestaCorrecta: 1,
    explicacion: `La deficiencia de hierro limita la síntesis de hemoglobina y produce eritrocitos microcíticos e hipocrómicos. Una ferritina baja apoya fuertemente el diagnóstico de ferropenia, especialmente cuando no existe inflamación que altere su interpretación. El consumo excesivo de leche de vaca puede desplazar alimentos ricos en hierro y contribuir al problema. El tratamiento incluye hierro oral en dosis calculada por hierro elemental, modificación de la alimentación y seguimiento de la respuesta hematológica.`,
    perlaENARM: "Microcitosis, RDW elevado y ferritina baja orientan a anemia ferropénica. La talasemia menor suele mostrar un recuento eritrocitario relativamente conservado o elevado para el grado de microcitosis.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente para prevención, diagnóstico y tratamiento de anemia por deficiencia de hierro en población pediátrica.",
      internacional: "WHO. Guideline on use of ferritin concentrations to assess iron status; recomendaciones pediátricas vigentes."
    },
    bibliografia: "WHO. Guideline on use of ferritin concentrations to assess iron status; Nelson Textbook of Pediatrics."
  },
  {
    id: "PED-152",
    especialidad: "Pediatría",
    tema: "Hematología pediátrica",
    subtema: "Enfermedad de células falciformes",
    dificultad: "Media",
    caso: `Niño de 5 años con enfermedad de células falciformes confirmada presenta fiebre de 39.2 °C y tos de inicio reciente. Está taquicárdico y luce enfermo. No tiene un foco infeccioso evidente y sus padres refieren que recibió las vacunas correspondientes a su edad.`,
    pregunta: "¿Cuál es la prioridad en la evaluación y el manejo inicial?",
    opciones: [
      "Indicar únicamente paracetamol y revisión en 72 horas",
      "Esperar el resultado del hemocultivo antes de iniciar cualquier tratamiento",
      "Administrar hierro oral por la anemia crónica y dar de alta",
      "Realizar evaluación urgente para infección bacteriana invasiva, obtener cultivos sin retrasar el tratamiento e iniciar antibióticos parenterales según protocolo",
      "Indicar ácido acetilsalicílico y reposo domiciliario"
    ],
    respuestaCorrecta: 3,
    explicacion: `Los niños con enfermedad de células falciformes tienen mayor riesgo de infección invasiva por disfunción esplénica funcional. La fiebre significativa requiere evaluación urgente, hemocultivo y antibióticos parenterales empíricos oportunos según el protocolo local y el estado clínico. La tos obliga además a valorar síndrome torácico agudo mediante exploración, oximetría e imagen cuando esté indicada. La profilaxis, vacunación y educación familiar reducen riesgos, pero no eliminan la posibilidad de infección grave.`,
    perlaENARM: "Fiebre en enfermedad falciforme es una urgencia por el riesgo de bacteriemia y sepsis. Hipoxemia, dolor torácico, fiebre o infiltrado pulmonar nuevo obligan a considerar síndrome torácico agudo.",
    gpc: {
      mexico: "Consultar los protocolos mexicanos vigentes para enfermedad de células falciformes, fiebre y síndrome torácico agudo.",
      internacional: "NHLBI. Evidence-Based Management of Sickle Cell Disease; recomendaciones vigentes para fiebre en pacientes pediátricos."
    },
    bibliografia: "NHLBI. Evidence-Based Management of Sickle Cell Disease; Nelson Textbook of Pediatrics."
  },
  {
    id: "PED-153",
    especialidad: "Pediatría",
    tema: "Hematología pediátrica",
    subtema: "Hemofilia A",
    dificultad: "Media",
    caso: `Niño de 4 años presenta aumento de volumen doloroso de la rodilla después de un traumatismo mínimo. Tiene antecedentes de hematomas extensos y sangrado prolongado tras procedimientos menores. El estudio de coagulación muestra tiempo de protrombina normal, tiempo de tromboplastina parcial activado prolongado y recuento plaquetario normal.`,
    pregunta: "¿Qué alteración debe investigarse prioritariamente para confirmar la sospecha clínica?",
    opciones: [
      "Deficiencia de factor VIII mediante actividad específica, con evaluación de factor IX y pruebas adicionales según los resultados",
      "Deficiencia aislada de vitamina K como explicación obligatoria del patrón",
      "Trombocitopenia inmune primaria",
      "Enfermedad de von Willebrand tipo exclusivamente plaquetario sin más estudios",
      "Deficiencia de factor VII como causa típica de prolongación aislada del TTPa"
    ],
    respuestaCorrecta: 0,
    explicacion: `La hemartrosis y el sangrado profundo sugieren una deficiencia de factores de coagulación. En la hemofilia A existe disminución de la actividad del factor VIII; la hemofilia B se debe a deficiencia de factor IX. Ambas pueden producir TTPa prolongado con TP y plaquetas normales. La confirmación requiere medición específica de actividad del factor y, en determinadas circunstancias, pruebas de inhibidores. Una hemartrosis sospechada requiere tratamiento hemostático oportuno y valoración especializada.`,
    perlaENARM: "Hemartrosis recurrente con TP normal y TTPa prolongado orienta a hemofilia A o B. El diagnóstico se establece midiendo la actividad del factor correspondiente.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes para diagnóstico y manejo de hemofilia pediátrica.",
      internacional: "World Federation of Hemophilia. Guidelines for the Management of Hemophilia, 3rd edition."
    },
    bibliografia: "World Federation of Hemophilia. Guidelines for the Management of Hemophilia, 3.ª ed.; Nelson Textbook of Pediatrics."
  },
  {
    id: "PED-154",
    especialidad: "Pediatría",
    tema: "Hematología pediátrica",
    subtema: "Leucemia linfoblástica aguda",
    dificultad: "Media",
    caso: `Niño de 6 años con cuatro semanas de fatiga, palidez, fiebre intermitente y dolor óseo nocturno. La biometría hemática muestra anemia, trombocitopenia y leucocitos de 18 000/µL con células inmaduras reportadas en el frotis. Se palpan adenopatías cervicales y hepatomegalia.`,
    pregunta: "¿Qué estudio permite establecer el diagnóstico definitivo y caracterizar la proliferación sospechosa?",
    opciones: [
      "Radiografía de huesos largos como única prueba confirmatoria",
      "Determinación aislada de ferritina sérica",
      "Biopsia de ganglio cervical como estudio obligatorio inicial en todos los casos",
      "Prueba de Coombs directa",
      "Aspirado de médula ósea con morfología, inmunofenotipo y estudios citogenéticos o moleculares según el caso"
    ],
    respuestaCorrecta: 4,
    explicacion: `La combinación de citopenias, células inmaduras, dolor óseo y organomegalias obliga a descartar leucemia aguda. El estudio de médula ósea permite valorar la población blástica y, junto con la citometría de flujo y las pruebas citogenéticas o moleculares, establecer el subtipo y la estratificación de riesgo. Se requiere valoración urgente por hematología-oncología pediátrica. Si existe sospecha de leucemia, deben evitarse intervenciones innecesarias antes de definir el plan diagnóstico y terapéutico.`,
    perlaENARM: "Dolor óseo persistente más citopenias y organomegalias son datos de alarma para leucemia. La inmunofenotipificación y la caracterización genética son esenciales para clasificarla.",
    gpc: {
      mexico: "Consultar los protocolos mexicanos vigentes para diagnóstico y tratamiento de leucemias agudas en población pediátrica.",
      internacional: "NCI. Childhood Acute Lymphoblastic Leukemia Treatment; protocolos internacionales de leucemia pediátrica."
    },
    bibliografia: "National Cancer Institute. Childhood Acute Lymphoblastic Leukemia Treatment; Nelson Textbook of Pediatrics."
  },
  {
    id: "PED-155",
    especialidad: "Pediatría",
    tema: "Nefrología pediátrica",
    subtema: "Síndrome nefrótico idiopático",
    dificultad: "Media",
    caso: `Niño de 4 años presenta edema periorbitario matutino y edema progresivo en extremidades inferiores. El análisis de orina muestra proteinuria intensa; la albúmina sérica es de 1.8 g/dL y el colesterol está elevado. La creatinina es normal y no existe hematuria macroscópica.`,
    pregunta: "¿Cuál es la causa histológica más frecuente del síndrome nefrótico en este grupo de edad?",
    opciones: [
      "Glomerulonefritis rápidamente progresiva",
      "Enfermedad de cambios mínimos",
      "Nefropatía por IgA",
      "Glomeruloesclerosis diabética",
      "Nefritis lúpica proliferativa difusa"
    ],
    respuestaCorrecta: 1,
    explicacion: `En preescolares, la enfermedad de cambios mínimos es la causa más frecuente de síndrome nefrótico idiopático. El cuadro clásico incluye proteinuria intensa, hipoalbuminemia y edema, con posible hiperlipidemia. La función renal suele conservarse. La evaluación debe identificar características atípicas como hipertensión persistente, hematuria significativa, deterioro renal o manifestaciones sistémicas, que pueden justificar estudios adicionales o biopsia. El tratamiento inicial suele incluir corticosteroides según la guía y el protocolo pediátrico vigente.`,
    perlaENARM: "Preescolar con síndrome nefrótico típico y función renal conservada: cambios mínimos es la etiología más probable. Los datos atípicos modifican la evaluación.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente para diagnóstico y tratamiento del síndrome nefrótico primario en pediatría.",
      internacional: "KDIGO Clinical Practice Guideline for the Management of Glomerular Diseases, 2021, y actualizaciones vigentes."
    },
    bibliografia: "KDIGO Clinical Practice Guideline for the Management of Glomerular Diseases, 2021; Nelson Textbook of Pediatrics."
  },
  {
    id: "PED-156",
    especialidad: "Pediatría",
    tema: "Nefrología pediátrica",
    subtema: "Síndrome nefrítico agudo",
    dificultad: "Media",
    caso: `Niño de 8 años presenta edema palpebral, orina color té y disminución de la diuresis. Hace tres semanas tuvo una infección cutánea. La presión arterial está elevada y el examen de orina revela hematuria, cilindros eritrocitarios y proteinuria. La creatinina está discretamente elevada.`,
    pregunta: "¿Qué hallazgo de laboratorio apoyaría una glomerulonefritis postestreptocócica?",
    opciones: [
      "Hipercalcemia persistente como hallazgo característico",
      "Ausencia obligatoria de hematuria",
      "Complemento C3 disminuido durante la fase aguda",
      "Aumento aislado de troponina cardiaca",
      "Concentración de complemento C3 elevada de manera sostenida"
    ],
    respuestaCorrecta: 2,
    explicacion: `La glomerulonefritis postestreptocócica puede aparecer después de una infección faríngea o cutánea por estreptococo del grupo A. El síndrome nefrítico se caracteriza por hematuria, edema, hipertensión y reducción de la función renal en grados variables. El C3 suele estar disminuido en la fase aguda y generalmente se recupera en semanas; su persistencia baja obliga a reconsiderar el diagnóstico. El manejo se centra en control de presión arterial, edema, balance hídrico y tratamiento de infección activa si existe.`,
    perlaENARM: "Síndrome nefrítico después de infección estreptocócica más C3 bajo orienta a glomerulonefritis postestreptocócica. La falta de recuperación del complemento requiere reevaluación.",
    gpc: {
      mexico: "Consultar recomendaciones mexicanas vigentes para glomerulonefritis aguda postinfecciosa en pediatría.",
      internacional: "KDIGO Clinical Practice Guideline for the Management of Glomerular Diseases, 2021."
    },
    bibliografia: "KDIGO Clinical Practice Guideline for the Management of Glomerular Diseases, 2021; Nelson Textbook of Pediatrics."
  },
  {
    id: "PED-157",
    especialidad: "Pediatría",
    tema: "Urgencias pediátricas",
    subtema: "Invaginación intestinal",
    dificultad: "Media",
    caso: `Lactante de 9 meses presenta episodios súbitos de llanto intenso con flexión de las piernas, seguidos de periodos de aparente normalidad. Posteriormente desarrolla vómitos y palidez. En la exploración abdominal se palpa una masa alargada en el cuadrante superior derecho. Aún no presenta signos de peritonitis.`,
    pregunta: "¿Cuál es el estudio de imagen inicial de elección para confirmar la sospecha diagnóstica?",
    opciones: [
      "Ultrasonido abdominal",
      "Tomografía computarizada abdominal en todos los pacientes",
      "Colonoscopia urgente",
      "Radiografía simple normal como prueba confirmatoria definitiva",
      "Resonancia magnética abdominal como primera línea"
    ],
    respuestaCorrecta: 0,
    explicacion: `La invaginación intestinal suele presentarse en lactantes con dolor cólico episódico, vómitos y, en ocasiones, letargo. La evacuación en jalea de grosella es un hallazgo clásico, pero no siempre aparece. El ultrasonido es el estudio inicial preferido y puede mostrar los signos de diana o pseudorriñón. Si no hay perforación, peritonitis ni inestabilidad, puede realizarse reducción neumática o hidrostática bajo supervisión especializada; la cirugía se reserva para contraindicaciones, fracaso de reducción o complicaciones.`,
    perlaENARM: "Dolor cólico episódico en lactante más masa abdominal sugiere invaginación. El ultrasonido confirma el diagnóstico y la reducción por enema puede ser terapéutica.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes para diagnóstico y tratamiento de invaginación intestinal pediátrica.",
      internacional: "American College of Radiology. Appropriateness Criteria for suspected intussusception."
    },
    bibliografia: "American College of Radiology. Appropriateness Criteria for Suspected Intussusception; Nelson Textbook of Pediatrics."
  },
  {
    id: "PED-158",
    especialidad: "Pediatría",
    tema: "Urgencias pediátricas",
    subtema: "Estenosis hipertrófica del píloro",
    dificultad: "Media",
    caso: `Lactante de 5 semanas con vómitos progresivos después de las tomas, de carácter no bilioso y en ocasiones proyectivos. Después de vomitar vuelve a mostrar hambre. Presenta pérdida de peso y signos de deshidratación. Los estudios revelan alcalosis metabólica hipoclorémica.`,
    pregunta: "¿Cuál es la conducta inicial antes de la corrección quirúrgica definitiva?",
    opciones: [
      "Realizar piloromiotomía inmediata sin corregir las alteraciones metabólicas",
      "Administrar antieméticos y mantener alimentación habitual",
      "Indicar antibióticos intravenosos como tratamiento definitivo",
      "Corregir la deshidratación y las alteraciones electrolíticas, especialmente cloro y potasio, antes de la cirugía",
      "Iniciar alimentación con alto contenido de fibra"
    ],
    respuestaCorrecta: 3,
    explicacion: `La estenosis hipertrófica del píloro produce obstrucción de la salida gástrica y vómitos no biliosos, con riesgo de deshidratación y alcalosis metabólica hipoclorémica. El ultrasonido suele confirmar el diagnóstico. La estabilización con líquidos intravenosos y corrección de cloro, potasio y alteraciones ácido-base es fundamental antes de la piloromiotomía, porque la alcalosis no corregida aumenta el riesgo anestésico y de apnea posoperatoria.`,
    perlaENARM: "Vómito proyectivo no bilioso en lactante de pocas semanas más alcalosis hipoclorémica sugiere estenosis pilórica. Primero se corrigen líquidos y electrolitos; después se opera.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes para diagnóstico y tratamiento de estenosis hipertrófica del píloro.",
      internacional: "American Pediatric Surgical Association y referencias quirúrgicas pediátricas vigentes."
    },
    bibliografia: "Ashcraft's Pediatric Surgery; Nelson Textbook of Pediatrics."
  },
  {
    id: "PED-159",
    especialidad: "Pediatría",
    tema: "Infectología pediátrica",
    subtema: "Meningitis bacteriana",
    dificultad: "Media",
    caso: `Lactante de 7 meses con fiebre alta, irritabilidad, vómitos y disminución del estado de alerta. Presenta rigidez de nuca y fontanela anterior abombada. Se sospecha meningitis bacteriana. El equipo considera que la punción lumbar podría retrasar la estabilización por el deterioro neurológico.`,
    pregunta: "¿Cuál es el principio prioritario del manejo inicial?",
    opciones: [
      "Esperar obligatoriamente el resultado del líquido cefalorraquídeo antes de iniciar antibióticos",
      "Estabilizar al paciente, obtener hemocultivos si no generan retraso e iniciar tratamiento antimicrobiano empírico urgente",
      "Administrar únicamente antipiréticos durante las primeras 24 horas",
      "Realizar tomografía cerebral antes de cualquier tratamiento en todos los lactantes con fiebre",
      "Posponer el tratamiento hasta identificar el microorganismo mediante cultivo"
    ],
    respuestaCorrecta: 1,
    explicacion: `La sospecha de meningitis bacteriana es una emergencia. La punción lumbar se realiza cuando es segura y no retrasa el tratamiento; ante inestabilidad o signos de posible hipertensión intracraneal debe priorizarse la estabilización y el inicio urgente de antibióticos empíricos. La selección del esquema depende de la edad, inmunización, epidemiología local y factores de riesgo. La neuroimagen no es obligatoria antes de toda punción lumbar y se reserva para indicaciones clínicas específicas.`,
    perlaENARM: "La sospecha de meningitis bacteriana exige antibióticos oportunos. No retrases el tratamiento por una punción lumbar insegura o por estudios de imagen no indicados.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente para diagnóstico y tratamiento de meningitis bacteriana en población pediátrica.",
      internacional: "WHO. Guidelines on meningitis diagnosis, treatment and care, 2025."
    },
    bibliografia: "WHO. Guidelines on meningitis diagnosis, treatment and care, 2025; Nelson Textbook of Pediatrics."
  },
  {
    id: "PED-160",
    especialidad: "Pediatría",
    tema: "Infectología pediátrica",
    subtema: "Escarlatina",
    dificultad: "Media",
    caso: `Niño de 7 años con fiebre, odinofagia y exantema eritematoso de textura áspera, más intenso en pliegues. Presenta lengua aframbuesada y líneas de Pastia. No tiene tos ni rinorrea prominentes. Se sospecha infección por estreptococo del grupo A.`,
    pregunta: "¿Cuál es la estrategia diagnóstica recomendada para confirmar la etiología estreptocócica en un escolar cuando está disponible?",
    opciones: [
      "Diagnosticar exclusivamente por el aspecto del exantema y nunca realizar pruebas",
      "Solicitar anticuerpos antiestreptolisina O para confirmar la infección aguda en la consulta",
      "Realizar una radiografía de cuello como prueba confirmatoria",
      "Solicitar hemocultivo en todos los casos no complicados",
      "Realizar una prueba rápida de detección de antígeno o prueba molecular, y confirmar con cultivo cuando esté indicado por edad y protocolo"
    ],
    respuestaCorrecta: 4,
    explicacion: `La escarlatina es una manifestación de infección por estreptococo del grupo A productor de toxinas eritrogénicas. La clínica orienta, pero las pruebas microbiológicas ayudan a confirmar la faringitis estreptocócica. En niños sintomáticos, una prueba rápida de antígeno negativa suele requerir cultivo de respaldo según la guía aplicable, mientras que algunas pruebas moleculares tienen mayor sensibilidad. La confirmación permite seleccionar tratamiento antibiótico apropiado y reducir complicaciones y transmisión.`,
    perlaENARM: "Exantema áspero, líneas de Pastia y lengua aframbuesada orientan a escarlatina, pero la confirmación de estreptococo se basa en pruebas microbiológicas apropiadas.",
    gpc: {
      mexico: "Consultar las recomendaciones mexicanas vigentes para diagnóstico y tratamiento de faringoamigdalitis estreptocócica y escarlatina.",
      internacional: "CDC. Clinical Guidance for Scarlet Fever and Group A Streptococcal Pharyngitis."
    },
    bibliografia: "CDC. Clinical Guidance for Scarlet Fever; Nelson Textbook of Pediatrics."
  },

{
  id: "PED-161",
  especialidad: "Pediatría",
  tema: "Neumología pediátrica",
  subtema: "Neumonía adquirida en la comunidad",
  dificultad: "Alta",
  caso: `Niño de 4 años previamente sano presenta fiebre de 39 °C, tos y taquipnea de 48 respiraciones por minuto. A la exploración tiene crépitos focales en hemitórax derecho y saturación de oxígeno de 95% al aire ambiente. Tolera líquidos, no presenta tiraje ni alteración del estado de conciencia y mantiene una adecuada perfusión.`,
  pregunta: "¿Qué elemento clínico tiene mayor utilidad para decidir si requiere hospitalización?",
  opciones: [
    "La presencia aislada de fiebre superior a 38.5 °C",
    "La edad preescolar, independientemente de la gravedad",
    "La presencia de crépitos focales como único criterio",
    "La evaluación integral de oxigenación, trabajo respiratorio, hidratación, estado general y posibilidad de seguimiento domiciliario",
    "La duración de la tos superior a 48 horas"
  ],
  respuestaCorrecta: 3,
  explicacion: `La decisión de hospitalización en neumonía pediátrica depende de la gravedad clínica, hipoxemia, dificultad respiratoria, incapacidad para mantener hidratación o tratamiento oral, complicaciones, comorbilidades y condiciones de seguimiento. La fiebre o los crépitos aislados no determinan por sí solos la necesidad de ingreso. La saturación debe interpretarse junto con el estado general y la evolución clínica.`,
  perlaENARM: "La hospitalización se decide por gravedad y necesidades de soporte, no por la fiebre aislada ni por un hallazgo auscultatorio único.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para diagnóstico y tratamiento de neumonía adquirida en la comunidad en población pediátrica.",
    internacional: "PIDS/IDSA. Clinical Practice Guidelines for Community-Acquired Pneumonia in Infants and Children Older Than 3 Months."
  },
  bibliografia: "PIDS/IDSA Clinical Practice Guidelines for Community-Acquired Pneumonia in Children; Nelson Textbook of Pediatrics."
},
{
  id: "PED-162",
  especialidad: "Pediatría",
  tema: "Neumología pediátrica",
  subtema: "Fibrosis quística",
  dificultad: "Alta",
  caso: `Lactante de 8 meses con tos crónica, infecciones respiratorias recurrentes y evacuaciones voluminosas, grasosas y de olor intenso. Presenta escasa ganancia ponderal pese a un apetito conservado. La prueba de tripsinógeno inmunorreactivo neonatal fue positiva, pero no se completó el estudio confirmatorio.`,
  pregunta: "¿Qué prueba se utiliza habitualmente para confirmar el diagnóstico de fibrosis quística?",
  opciones: [
    "Concentración sérica de inmunoglobulina E total",
    "Cuantificación de cloro en sudor mediante una técnica validada",
    "Radiografía de tórax como única prueba diagnóstica",
    "Cultivo de heces para enteropatógenos",
    "Medición aislada de elastasa sérica"
  ],
  respuestaCorrecta: 1,
  explicacion: `La fibrosis quística debe sospecharse ante enfermedad respiratoria crónica, insuficiencia pancreática exocrina y alteración del crecimiento. La prueba cuantitativa de cloro en sudor es fundamental para la confirmación diagnóstica, realizada con metodología estandarizada. Un resultado de 60 mmol/L o más apoya el diagnóstico en el contexto clínico apropiado; los resultados intermedios requieren evaluación adicional. El análisis genético de CFTR y otras pruebas especializadas pueden completar el estudio.`,
  perlaENARM: "Tos crónica, esteatorrea y falla de medro sugieren fibrosis quística. El cloro en sudor es la prueba confirmatoria clásica; el tamiz neonatal no sustituye la confirmación.",
  gpc: {
    mexico: "Consultar los protocolos mexicanos vigentes de tamiz neonatal y diagnóstico de fibrosis quística.",
    internacional: "Cystic Fibrosis Foundation. Consensus Guidelines for Diagnosis of Cystic Fibrosis."
  },
  bibliografia: "Cystic Fibrosis Foundation. Diagnostic Guidelines; Nelson Textbook of Pediatrics."
},
{
  id: "PED-163",
  especialidad: "Pediatría",
  tema: "Cardiología pediátrica",
  subtema: "Comunicación interventricular",
  dificultad: "Alta",
  caso: `Lactante de 3 meses presenta taquipnea durante la alimentación, sudoración al succionar y ganancia ponderal insuficiente. A la auscultación se identifica soplo holosistólico intenso en el borde esternal izquierdo inferior. La ecocardiografía demuestra una comunicación interventricular amplia con cortocircuito de izquierda a derecha.`,
  pregunta: "¿Qué mecanismo explica la aparición de insuficiencia cardiaca en este paciente?",
  opciones: [
    "Disminución primaria del retorno venoso sistémico por obstrucción de la vena cava",
    "Cortocircuito de derecha a izquierda desde el nacimiento en todas las comunicaciones interventriculares",
    "Obstrucción fija de la válvula pulmonar con reducción del flujo pulmonar",
    "Hipertrofia ventricular izquierda causada exclusivamente por hipertensión sistémica",
    "Aumento del flujo pulmonar y del retorno venoso a cavidades izquierdas, con sobrecarga de volumen"
  ],
  respuestaCorrecta: 4,
  explicacion: `Una comunicación interventricular amplia permite un cortocircuito de izquierda a derecha cuando disminuye la resistencia vascular pulmonar después del nacimiento. Esto aumenta el flujo pulmonar y el retorno venoso a la aurícula y al ventrículo izquierdos, generando sobrecarga de volumen e insuficiencia cardiaca. La magnitud del cortocircuito depende del tamaño del defecto y de las resistencias vasculares. La ecocardiografía determina la anatomía y las repercusiones hemodinámicas.`,
  perlaENARM: "Los síntomas de insuficiencia cardiaca por un cortocircuito significativo suelen aparecer cuando desciende la resistencia vascular pulmonar durante las primeras semanas de vida.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para diagnóstico y tratamiento de cardiopatías congénitas con cortocircuito.",
    internacional: "American Heart Association. Recommendations for management of congenital heart disease."
  },
  bibliografia: "Moss and Adams' Heart Disease in Infants, Children, and Adolescents; Braunwald's Heart Disease."
},
{
  id: "PED-164",
  especialidad: "Pediatría",
  tema: "Cardiología pediátrica",
  subtema: "Tetralogía de Fallot",
  dificultad: "Alta",
  caso: `Lactante de 10 meses con tetralogía de Fallot conocida presenta cianosis súbita y respiración rápida mientras llora. La saturación desciende notablemente y aparece irritabilidad. No hay fiebre ni datos de infección respiratoria. El episodio es compatible con una crisis hipercianótica.`,
  pregunta: "¿Qué intervención inicial ayuda a disminuir el cortocircuito de derecha a izquierda durante una crisis hipercianótica?",
  opciones: [
    "Colocar al niño en posición genupectoral, calmarlo y administrar oxígeno mientras se proporciona soporte urgente",
    "Administrar un vasodilatador sistémico para reducir la resistencia vascular sistémica",
    "Indicar diurético como tratamiento único",
    "Estimular el llanto para aumentar el retorno venoso",
    "Administrar indometacina para cerrar el conducto arterioso"
  ],
  respuestaCorrecta: 0,
  explicacion: `La crisis hipercianótica se relaciona con un aumento del cortocircuito de derecha a izquierda, frecuentemente por reducción del flujo pulmonar y cambios en las resistencias vasculares. La posición genupectoral incrementa la resistencia vascular sistémica y puede favorecer el flujo pulmonar relativo. Deben minimizarse la agitación y el llanto, administrarse oxígeno y solicitar ayuda especializada urgente. Según la respuesta, pueden requerirse líquidos, analgesia o sedación, betabloqueo y otras intervenciones bajo monitorización.`,
  perlaENARM: "En la crisis hipercianótica de Fallot, la posición genupectoral aumenta la resistencia sistémica y ayuda a reducir el cortocircuito de derecha a izquierda.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para estabilización de cardiopatías congénitas cianógenas.",
    internacional: "AHA scientific statements and pediatric congenital heart disease emergency management guidance."
  },
  bibliografia: "Moss and Adams' Heart Disease in Infants, Children, and Adolescents; Nelson Textbook of Pediatrics."
},
{
  id: "PED-165",
  especialidad: "Pediatría",
  tema: "Endocrinología pediátrica",
  subtema: "Hipotiroidismo congénito",
  dificultad: "Alta",
  caso: `Recién nacido de 12 días con tamiz neonatal anormal para hipotiroidismo. Presenta ictericia prolongada, estreñimiento, hipotonía y dificultad para alimentarse. La muestra venosa confirma TSH marcadamente elevada y tiroxina libre disminuida.`,
  pregunta: "¿Cuál es la conducta terapéutica recomendada?",
  opciones: [
    "Esperar una segunda prueba de tamiz durante varias semanas antes de intervenir",
    "Iniciar yodo oral como tratamiento definitivo",
    "Comenzar levotiroxina sin retrasos innecesarios y realizar seguimiento bioquímico estrecho",
    "Administrar glucocorticoides como tratamiento inicial",
    "Iniciar tratamiento únicamente cuando aparezca retraso del desarrollo"
  ],
  respuestaCorrecta: 2,
  explicacion: `El hipotiroidismo congénito primario confirmado requiere tratamiento inmediato con levotiroxina para reducir el riesgo de daño neurocognitivo irreversible. La dosis inicial se selecciona según la gravedad bioquímica, el peso y las recomendaciones vigentes. Se debe monitorizar TSH y T4 libre con frecuencia durante los primeros meses para ajustar la dosis y mantener concentraciones apropiadas para la edad. La imagen tiroidea puede ayudar a definir la etiología, pero no debe retrasar el inicio del tratamiento.`,
  perlaENARM: "El hipotiroidismo congénito es una causa prevenible de discapacidad intelectual. Ante confirmación bioquímica, inicia levotiroxina de forma oportuna.",
  gpc: {
    mexico: "Consultar la normativa mexicana vigente de tamiz neonatal y tratamiento del hipotiroidismo congénito.",
    internacional: "European Society for Paediatric Endocrinology y recomendaciones internacionales para hipotiroidismo congénito."
  },
  bibliografia: "European Society for Paediatric Endocrinology. Congenital Hypothyroidism Guidelines; Williams Textbook of Endocrinology."
},
{
  id: "PED-166",
  especialidad: "Pediatría",
  tema: "Endocrinología pediátrica",
  subtema: "Diabetes mellitus tipo 1",
  dificultad: "Alta",
  caso: `Niña de 9 años con diabetes mellitus tipo 1 diagnosticada hace dos años presenta temblor, sudoración, palidez y dificultad para concentrarse después de realizar actividad física. La glucosa capilar es de 52 mg/dL. Está despierta y puede deglutir con seguridad.`,
  pregunta: "¿Cuál es el tratamiento inmediato indicado para esta hipoglucemia en una paciente consciente que puede ingerir carbohidratos?",
  opciones: [
    "Administrar una dosis adicional de insulina rápida",
    "Suspender todos los alimentos hasta repetir la glucemia en una hora",
    "Administrar bicarbonato oral",
    "Ofrecer aproximadamente 15 g de carbohidratos de acción rápida y volver a medir la glucosa en unos 15 minutos",
    "Administrar glucagón intramuscular como primera elección en toda hipoglucemia leve"
  ],
  respuestaCorrecta: 3,
  explicacion: `Una glucosa inferior a 70 mg/dL requiere tratamiento inmediato. Si la paciente está consciente y puede deglutir, se administran carbohidratos de absorción rápida en una cantidad apropiada para su edad y peso, se vuelve a medir la glucosa aproximadamente a los 15 minutos y se repite el tratamiento si continúa baja. El glucagón se reserva para hipoglucemia grave cuando no puede ingerir carbohidratos con seguridad o requiere ayuda para recuperarse. Debe investigarse el desencadenante y ajustarse el plan preventivo.`,
  perlaENARM: "Hipoglucemia consciente: carbohidrato de acción rápida y reevaluación en 15 minutos. Si existe alteración de conciencia, no se administran líquidos ni alimentos por vía oral.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para manejo de diabetes tipo 1 e hipoglucemia pediátrica.",
    internacional: "ISPAD Clinical Practice Consensus Guidelines for Assessment and Management of Hypoglycemia in Children and Adolescents with Diabetes."
  },
  bibliografia: "ISPAD Clinical Practice Consensus Guidelines; Nelson Textbook of Pediatrics."
},
{
  id: "PED-167",
  especialidad: "Pediatría",
  tema: "Gastroenterología pediátrica",
  subtema: "Enfermedad celíaca",
  dificultad: "Alta",
  caso: `Niño de 5 años con distensión abdominal recurrente, diarrea intermitente, irritabilidad y desaceleración de la velocidad de crecimiento. La biometría muestra anemia microcítica y ferritina baja. Consume gluten habitualmente y no presenta signos de abdomen agudo.`,
  pregunta: "¿Cuál es el abordaje serológico inicial más apropiado para investigar enfermedad celíaca?",
  opciones: [
    "Solicitar anticuerpos antinucleares como prueba específica",
    "Determinar anticuerpos antitransglutaminasa tisular IgA junto con IgA total",
    "Suspender inmediatamente el gluten antes de obtener las pruebas",
    "Solicitar exclusivamente anticuerpos IgG contra gliadina no desamidada",
    "Realizar colonoscopia como primer estudio confirmatorio en todos los pacientes"
  ],
  respuestaCorrecta: 1,
  explicacion: `En pacientes que consumen gluten, la prueba serológica inicial habitual es anticuerpo antitransglutaminasa tisular IgA junto con IgA total, porque una deficiencia de IgA puede producir resultados falsamente negativos. Si existe deficiencia de IgA, se utilizan pruebas basadas en IgG. No debe retirarse el gluten antes de completar la evaluación, porque puede disminuir la sensibilidad de las pruebas. La necesidad de biopsia duodenal depende de los resultados, los criterios pediátricos aplicables y la valoración especializada.`,
  perlaENARM: "Ante sospecha de enfermedad celíaca, solicita anti-transglutaminasa IgA e IgA total mientras el paciente consume gluten.",
  gpc: {
    mexico: "Consultar recomendaciones mexicanas vigentes para diagnóstico de enfermedad celíaca en pediatría.",
    internacional: "ESPGHAN Guidelines for Diagnosing Coeliac Disease, 2020."
  },
  bibliografia: "ESPGHAN Guidelines for Diagnosing Coeliac Disease, 2020; Sleisenger and Fordtran's Gastrointestinal and Liver Disease."
},
{
  id: "PED-168",
  especialidad: "Pediatría",
  tema: "Gastroenterología pediátrica",
  subtema: "Hepatitis A",
  dificultad: "Alta",
  caso: `Niño de 8 años presenta anorexia, náuseas, dolor abdominal, coluria e ictericia. Las aminotransferasas están muy elevadas y se sospecha hepatitis viral aguda. No tiene antecedente de hepatopatía crónica ni datos actuales de encefalopatía.`,
  pregunta: "¿Qué marcador serológico apoya una infección aguda por virus de hepatitis A?",
  opciones: [
    "Antígeno de superficie de hepatitis B",
    "Anticuerpo anti-VHC aislado",
    "Anticuerpo antimitocondrial",
    "Anticuerpo antinuclear aislado",
    "Anticuerpo IgM contra el virus de hepatitis A"
  ],
  respuestaCorrecta: 4,
  explicacion: `La IgM anti-VHA indica infección reciente o aguda por hepatitis A en el contexto clínico apropiado. El tratamiento suele ser de soporte, con vigilancia de hidratación, tolerancia oral y signos de insuficiencia hepática aguda. La coagulopatía significativa, encefalopatía, hipoglucemia persistente o deterioro clínico requieren evaluación urgente especializada. La prevención se basa en vacunación, higiene y medidas sanitarias.`,
  perlaENARM: "IgM anti-VHA orienta a hepatitis A aguda; la IgG anti-VHA indica infección pasada o inmunidad por vacunación.",
  gpc: {
    mexico: "Consultar el esquema nacional vigente de vacunación y las recomendaciones mexicanas para hepatitis viral aguda.",
    internacional: "CDC. Clinical Overview of Hepatitis A."
  },
  bibliografia: "CDC. Clinical Overview of Hepatitis A; Nelson Textbook of Pediatrics."
},
{
  id: "PED-169",
  especialidad: "Pediatría",
  tema: "Neurología pediátrica",
  subtema: "Migraña infantil",
  dificultad: "Alta",
  caso: `Niña de 11 años presenta episodios recurrentes de cefalea pulsátil acompañada de náuseas, fotofobia y limitación para continuar sus actividades. Los episodios duran varias horas y mejoran con el reposo. La exploración neurológica es normal y no hay cefalea explosiva, fiebre, papiledema ni déficit focal.`,
  pregunta: "¿Qué estrategia terapéutica es razonable para un episodio agudo de migraña en esta paciente?",
  opciones: [
    "Administrar un analgésico apropiado para la edad al inicio del episodio, favorecer hidratación y reposo, y valorar tratamiento específico si la respuesta es insuficiente",
    "Solicitar tomografía urgente en cada episodio típico",
    "Indicar opioides como primera línea habitual",
    "Administrar antibióticos por la presencia de náuseas",
    "Iniciar anticonvulsivos intravenosos en todos los episodios"
  ],
  respuestaCorrecta: 0,
  explicacion: `En la migraña pediátrica típica sin signos de alarma, el tratamiento agudo incluye analgésicos como ibuprofeno o paracetamol en dosis apropiadas para el peso; en adolescentes seleccionados pueden utilizarse triptanes según la guía y las contraindicaciones. La intervención temprana suele mejorar la respuesta. Se deben identificar desencadenantes, mantener sueño e hidratación adecuados y valorar prevención si las crisis son frecuentes o incapacitantes. La neuroimagen no se requiere de rutina cuando la historia y la exploración son típicas.`,
  perlaENARM: "Migraña recurrente con exploración neurológica normal y sin signos de alarma suele ser un diagnóstico clínico; no requiere neuroimagen sistemática.",
  gpc: {
    mexico: "Consultar recomendaciones mexicanas vigentes para diagnóstico y tratamiento de cefalea primaria en pediatría.",
    internacional: "American Academy of Neurology/American Headache Society. Pediatric migraine treatment guidance."
  },
  bibliografia: "American Academy of Neurology and American Headache Society pediatric migraine recommendations; Nelson Textbook of Pediatrics."
},
{
  id: "PED-170",
  especialidad: "Pediatría",
  tema: "Reumatología pediátrica",
  subtema: "Artritis idiopática juvenil",
  dificultad: "Alta",
  caso: `Niña de 6 años con tumefacción persistente de la rodilla derecha durante 9 semanas. Presenta rigidez matutina y limitación funcional, sin fiebre prolongada ni datos de infección aguda. La biometría no muestra leucocitosis importante y la velocidad de sedimentación globular está moderadamente elevada.`,
  pregunta: "¿Qué elemento es fundamental para establecer el diagnóstico de artritis idiopática juvenil?",
  opciones: [
    "Anticuerpos antinucleares positivos como requisito indispensable",
    "Factor reumatoide positivo en todos los pacientes",
    "Artritis de inicio antes de los 16 años, persistente al menos 6 semanas y sin otra causa identificable",
    "Presencia obligatoria de erosiones radiográficas desde el inicio",
    "Fiebre diaria durante al menos dos semanas en todos los subtipos"
  ],
  respuestaCorrecta: 2,
  explicacion: `La artritis idiopática juvenil comprende artritis de inicio antes de los 16 años, duración mínima de 6 semanas y ausencia de otra causa identificable. Es un diagnóstico clínico de exclusión. Los anticuerpos antinucleares pueden ayudar a identificar riesgo de uveítis en determinados subtipos, pero no son requisito diagnóstico. El factor reumatoide solo es positivo en una minoría de pacientes y las radiografías pueden ser normales al inicio. Debe considerarse artritis séptica si existe dolor intenso, fiebre, incapacidad para apoyar o compromiso sistémico.`,
    perlaENARM: "Artritis antes de los 16 años durante al menos 6 semanas, sin causa alternativa: criterio temporal clave de artritis idiopática juvenil.",
    gpc: {
      mexico: "Consultar recomendaciones mexicanas vigentes para diagnóstico y tratamiento de artritis idiopática juvenil.",
      internacional: "American College of Rheumatology. Guidelines for the Treatment of Juvenile Idiopathic Arthritis."
    },
    bibliografia: "American College of Rheumatology. Juvenile Idiopathic Arthritis Guidelines; Firestein & Kelley’s Textbook of Rheumatology."
},

{
  id: "PED-171",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Diagnóstico clínico y gravedad",
  dificultad: "Baja",
  caso: `Niño de 3 años previamente sano presenta fiebre de 38.8 °C, tos y respiración rápida desde hace 2 días. A la exploración tiene frecuencia respiratoria de 46 rpm, crépitos en base pulmonar derecha y saturación de oxígeno de 96% al aire ambiente. Está alerta, bebe líquidos y no presenta tiraje ni aleteo nasal.`,
  pregunta: "¿Qué hallazgo clínico apoya con mayor fuerza la sospecha de neumonía adquirida en la comunidad?",
  opciones: [
    "Rinorrea aislada sin fiebre",
    "Tos ocasional con exploración pulmonar normal",
    "Taquipnea acompañada de hallazgos focales en la auscultación",
    "Estornudos frecuentes sin dificultad respiratoria",
    "Fiebre aislada sin síntomas respiratorios"
  ],
  respuestaCorrecta: 2,
  explicacion: `La neumonía adquirida en la comunidad se sospecha a partir de la combinación de síntomas respiratorios, fiebre, taquipnea y hallazgos pulmonares compatibles. Los crépitos focales apoyan la posibilidad de afectación parenquimatosa, aunque ningún hallazgo aislado confirma por sí solo la etiología. La frecuencia respiratoria debe medirse con el niño tranquilo y compararse con los umbrales apropiados para la edad.`,
  perlaENARM: "La taquipnea es un signo clínico importante en la evaluación de neumonía infantil, pero debe interpretarse junto con el estado general, el trabajo respiratorio y la auscultación.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para diagnóstico y tratamiento de neumonía adquirida en la comunidad en menores de cinco años.",
    internacional: "WHO. Recommendations for management of childhood pneumonia; PIDS/IDSA guidelines for community-acquired pneumonia."
  },
  bibliografia: "WHO. Recommendations for management of childhood pneumonia; Nelson Textbook of Pediatrics."
},
{
  id: "PED-172",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Etiología según edad",
  dificultad: "Baja",
  caso: `Lactante de 7 meses presenta fiebre, tos, taquipnea y crépitos focales. No tiene antecedentes de cardiopatía, inmunodeficiencia ni enfermedad pulmonar crónica. Su esquema de vacunación está actualizado para la edad.`,
  pregunta: "¿Cuál de los siguientes microorganismos es una causa bacteriana importante de neumonía adquirida en la comunidad en lactantes y preescolares?",
  opciones: [
    "Mycoplasma genitalium",
    "Mycobacterium leprae",
    "Clostridium tetani",
    "Streptococcus pneumoniae",
    "Helicobacter pylori"
  ],
  respuestaCorrecta: 3,
  explicacion: `Streptococcus pneumoniae continúa siendo un patógeno bacteriano relevante en la neumonía pediátrica. La distribución de agentes etiológicos cambia con la edad, la vacunación, la epidemiología local y la circulación de virus respiratorios. En lactantes y preescolares, los virus son causas frecuentes de infección respiratoria baja, por lo que la sospecha bacteriana debe basarse en el conjunto de hallazgos clínicos y la gravedad.`,
  perlaENARM: "El neumococo es un agente bacteriano clásico de neumonía infantil; la edad y la vacunación modifican la probabilidad etiológica.",
  gpc: {
    mexico: "Consultar el esquema nacional vigente de vacunación y las recomendaciones mexicanas para neumonía infantil.",
    internacional: "WHO. Pneumonia in children; PIDS/IDSA Clinical Practice Guidelines for Community-Acquired Pneumonia."
  },
  bibliografia: "Nelson Textbook of Pediatrics; WHO. Pneumonia in children."
},
{
  id: "PED-173",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Neumonía viral",
  dificultad: "Baja",
  caso: `Niña de 2 años con rinorrea, tos, fiebre moderada y sibilancias bilaterales. Mantiene saturación de 97% al aire ambiente, acepta líquidos y no presenta hallazgos focales claros ni dificultad respiratoria significativa. Varios familiares tienen síntomas respiratorios similares.`,
  pregunta: "¿Cuál es la conducta general más apropiada si la valoración clínica no identifica datos de infección bacteriana ni gravedad?",
  opciones: [
    "Iniciar dos antibióticos de amplio espectro",
    "Indicar tratamiento de soporte, hidratación y vigilancia de signos de alarma",
    "Administrar corticoides sistémicos en todos los casos",
    "Solicitar tomografía torácica antes de decidir el manejo",
    "Hospitalizar obligatoriamente por la presencia de sibilancias"
  ],
  respuestaCorrecta: 1,
  explicacion: `Los cuadros respiratorios con síntomas virales predominantes, estado general conservado y ausencia de datos de gravedad suelen manejarse con medidas de soporte. Los antibióticos no están indicados de manera rutinaria cuando no hay evidencia que sugiera infección bacteriana. La aparición de dificultad respiratoria, hipoxemia, rechazo persistente de líquidos, letargo o empeoramiento clínico requiere reevaluación.`,
  perlaENARM: "Los antibióticos no tratan las infecciones virales. La decisión terapéutica debe integrar la edad, la exploración, la oxigenación y la evolución.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para infecciones respiratorias agudas en menores de cinco años.",
    internacional: "WHO. Pneumonia in children; NICE guidance for lower respiratory tract infections in children."
  },
  bibliografia: "WHO. Pneumonia in children; Nelson Textbook of Pediatrics."
},
{
  id: "PED-174",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Radiografía de tórax",
  dificultad: "Baja",
  caso: `Niño de 5 años con fiebre, tos y hallazgos focales compatibles con neumonía. Está hemodinámicamente estable, tiene saturación de 96% al aire ambiente y tolera tratamiento oral. No existen antecedentes de enfermedad pulmonar ni sospecha de complicaciones.`,
  pregunta: "¿Cuál es el principio general sobre el uso de radiografía de tórax en una neumonía infantil no complicada?",
  opciones: [
    "Debe realizarse diariamente hasta que desaparezca la tos",
    "Es obligatoria para confirmar cualquier episodio de neumonía ambulatoria",
    "Sustituye la valoración clínica de gravedad",
    "Permite identificar con certeza el microorganismo responsable",
    "No se requiere de rutina en todos los casos ambulatorios clínicamente estables"
  ],
  respuestaCorrecta: 4,
  explicacion: `En niños con sospecha clínica de neumonía que pueden manejarse ambulatoriamente y no presentan signos de gravedad, la radiografía no es obligatoria de manera rutinaria. Puede indicarse ante hipoxemia, dificultad respiratoria importante, sospecha de complicaciones, incertidumbre diagnóstica relevante o evolución desfavorable. Los hallazgos radiográficos no identifican de forma confiable por sí solos el agente etiológico.`,
  perlaENARM: "La radiografía de tórax se reserva para situaciones clínicas seleccionadas; no debe utilizarse de forma sistemática en toda neumonía ambulatoria no complicada.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre neumonía adquirida en la comunidad en pediatría.",
    internacional: "PIDS/IDSA. Clinical Practice Guidelines for Community-Acquired Pneumonia in Infants and Children."
  },
  bibliografia: "PIDS/IDSA Clinical Practice Guidelines for Community-Acquired Pneumonia in Children; Nelson Textbook of Pediatrics."
},
{
  id: "PED-175",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Tratamiento antibiótico ambulatorio",
  dificultad: "Baja",
  caso: `Niño de 4 años con fiebre, tos y taquipnea. La exploración sugiere neumonía bacteriana no complicada. Está estable, no tiene alergia a betalactámicos, tolera la vía oral y puede acudir a seguimiento.`,
  pregunta: "¿Cuál es el antibiótico oral de primera línea habitual cuando se decide tratar una neumonía bacteriana no complicada en un niño previamente sano?",
  opciones: [
    "Amoxicilina",
    "Vancomicina",
    "Meropenem",
    "Clindamicina en todos los casos",
    "Amikacina como monoterapia oral"
  ],
  respuestaCorrecta: 0,
  explicacion: `La amoxicilina oral es una opción de primera línea habitual para neumonía bacteriana no complicada en niños previamente sanos, dirigida principalmente contra neumococo. La dosis, la duración y la necesidad de tratamiento antibiótico dependen de la guía vigente, la edad, la gravedad, la resistencia local y la evolución. Los antibióticos de amplio espectro deben reservarse para indicaciones clínicas específicas.`,
  perlaENARM: "En neumonía bacteriana ambulatoria no complicada, amoxicilina suele ser la primera opción; ajusta la pauta a la guía local y al contexto clínico.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para selección y duración del tratamiento antibiótico en neumonía pediátrica.",
    internacional: "PIDS/IDSA Clinical Practice Guidelines for Community-Acquired Pneumonia in Infants and Children."
  },
  bibliografia: "PIDS/IDSA Clinical Practice Guidelines for Community-Acquired Pneumonia in Children; Nelson Textbook of Pediatrics."
},
{
  id: "PED-176",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Evaluación de hipoxemia",
  dificultad: "Baja",
  caso: `Lactante de 11 meses con neumonía presenta frecuencia respiratoria elevada, tiraje subcostal y saturación persistente de oxígeno de 88% al aire ambiente, confirmada con una señal de pulsioximetría confiable. Se encuentra irritable y rechaza parcialmente las tomas.`,
  pregunta: "¿Qué intervención debe priorizarse en este contexto?",
  opciones: [
    "Dar de alta con antibiótico oral y revisión en una semana",
    "Administrar antitusivos para reducir el trabajo respiratorio",
    "Iniciar oxígeno suplementario y evaluar urgentemente la necesidad de hospitalización y soporte adicional",
    "Esperar a que aparezca cianosis central antes de intervenir",
    "Indicar únicamente fisioterapia torácica"
  ],
  respuestaCorrecta: 2,
  explicacion: `Una saturación persistente de 88% al aire ambiente, asociada con dificultad respiratoria y rechazo de la alimentación, representa hipoxemia clínicamente importante. Se requiere oxígeno suplementario, reevaluación inmediata del estado respiratorio y valoración para hospitalización. Deben vigilarse fatiga, apnea, alteración de conciencia y deterioro hemodinámico, que pueden indicar insuficiencia respiratoria progresiva.`,
  perlaENARM: "La hipoxemia confirmada en un niño con neumonía exige soporte y evaluación de gravedad; no esperes a que aparezca cianosis visible.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para manejo hospitalario de neumonía e hipoxemia pediátrica.",
    internacional: "WHO. Recommendations for oxygen therapy in children; PIDS/IDSA pediatric pneumonia guidance."
  },
  bibliografia: "WHO. Oxygen therapy for children; Nelson Textbook of Pediatrics."
},
{
  id: "PED-177",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Neumonía atípica",
  dificultad: "Baja",
  caso: `Escolar de 10 años presenta tos persistente de una semana, cefalea, febrícula y malestar general. La auscultación revela hallazgos respiratorios poco llamativos en relación con la tos. En su escuela hay varios compañeros con cuadros similares.`,
  pregunta: "¿Qué microorganismo debe considerarse entre las causas de neumonía atípica en escolares?",
  opciones: [
    "Bordetella pertussis como causa exclusiva de neumonía lobar",
    "Staphylococcus epidermidis en todos los casos comunitarios",
    "Clostridium difficile",
    "Mycoplasma pneumoniae",
    "Neisseria gonorrhoeae"
  ],
  respuestaCorrecta: 3,
  explicacion: `Mycoplasma pneumoniae es una causa reconocida de neumonía en escolares y adolescentes. Puede producir tos persistente, síntomas constitucionales y hallazgos clínicos o radiológicos que no siempre se correlacionan con la intensidad de la tos. La decisión de realizar pruebas y administrar tratamiento dirigido depende de la epidemiología, la gravedad, la probabilidad clínica y las recomendaciones locales.`,
  perlaENARM: "Escolar con tos persistente y síntomas respiratorios de evolución gradual: considera Mycoplasma pneumoniae, sin asumir que todo cuadro prolongado requiere antibióticos.",
  gpc: {
    mexico: "Consultar recomendaciones mexicanas vigentes para diagnóstico y tratamiento de neumonía atípica pediátrica.",
    internacional: "PIDS/IDSA Clinical Practice Guidelines for Community-Acquired Pneumonia in Infants and Children."
  },
  bibliografia: "Nelson Textbook of Pediatrics; PIDS/IDSA Clinical Practice Guidelines for Community-Acquired Pneumonia in Children."
},
{
  id: "PED-178",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Complicaciones pleurales",
  dificultad: "Baja",
  caso: `Niño de 6 años tratado por neumonía bacteriana presenta persistencia de fiebre, dolor torácico pleurítico y disminución del murmullo vesicular en la base derecha después de 72 horas. La evolución clínica es desfavorable pese al tratamiento inicial.`,
  pregunta: "¿Qué complicación debe investigarse prioritariamente?",
  opciones: [
    "Rinitis alérgica",
    "Derrame pleural paraneumónico o empiema",
    "Otitis externa",
    "Gastroenteritis viral",
    "Dermatitis atópica"
  ],
  respuestaCorrecta: 1,
  explicacion: `La persistencia de fiebre y el dolor pleurítico con disminución localizada del murmullo vesicular durante una neumonía sugieren una complicación pleural, como derrame paraneumónico o empiema. El ultrasonido torácico es útil para identificar y caracterizar el líquido pleural. La conducta depende del tamaño, la presencia de loculaciones, el compromiso respiratorio y la evolución, y puede requerir antibióticos intravenosos y drenaje.`,
  perlaENARM: "Neumonía con fiebre persistente, dolor pleurítico y disminución focal de ruidos respiratorios: busca derrame pleural o empiema.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para complicaciones pleurales de neumonía pediátrica.",
    internacional: "PIDS/IDSA. Guidelines for management of community-acquired pneumonia and parapneumonic effusion in children."
  },
  bibliografia: "PIDS/IDSA pediatric pneumonia guidelines; Nelson Textbook of Pediatrics."
},
{
  id: "PED-179",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Falla terapéutica",
  dificultad: "Baja",
  caso: `Niña de 5 años con neumonía tratada ambulatoriamente vuelve a consulta después de 48 a 72 horas por persistencia de fiebre y aumento de la tos. La familia confirma adherencia al tratamiento. La niña ahora presenta mayor trabajo respiratorio y menor tolerancia a líquidos.`,
  pregunta: "¿Cuál es la conducta más adecuada ante este deterioro clínico?",
  opciones: [
    "Duplicar el antibiótico sin reevaluar el diagnóstico",
    "Mantener exactamente el mismo plan y citarla en dos semanas",
    "Suspender todos los líquidos para disminuir las secreciones",
    "Indicar antitusivos y no realizar nuevas exploraciones",
    "Reevaluar urgentemente la gravedad, la oxigenación, el diagnóstico y posibles complicaciones, considerando hospitalización"
  ],
  respuestaCorrecta: 4,
  explicacion: `El empeoramiento clínico o la ausencia de respuesta después de 48 a 72 horas exige una nueva evaluación. Deben revisarse gravedad, oxigenación, adherencia, diagnóstico alternativo, resistencia antimicrobiana y complicaciones como derrame pleural, empiema o absceso. La necesidad de estudios de imagen, cultivos, cambio de tratamiento o ingreso hospitalario depende de los hallazgos. No es apropiado modificar antibióticos de forma automática sin reevaluar al paciente.`,
  perlaENARM: "La falta de mejoría a las 48–72 horas obliga a buscar complicaciones, resistencia o diagnóstico alternativo, especialmente si aumenta el trabajo respiratorio.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para reevaluación de neumonía pediátrica con mala respuesta al tratamiento.",
    internacional: "PIDS/IDSA Clinical Practice Guidelines for Community-Acquired Pneumonia in Infants and Children."
  },
  bibliografia: "PIDS/IDSA Clinical Practice Guidelines for Community-Acquired Pneumonia in Children; Nelson Textbook of Pediatrics."
},
{
  id: "PED-180",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Prevención",
  dificultad: "Baja",
  caso: `En una consulta preventiva, los padres de un lactante de 6 meses preguntan qué medidas reducen el riesgo de neumonía y de enfermedad respiratoria grave durante la infancia.`,
  pregunta: "¿Cuál de las siguientes estrategias contribuye de manera importante a prevenir neumonía y sus complicaciones?",
  opciones: [
    "Evitar todas las vacunas durante los primeros dos años",
    "Administrar antibióticos preventivos durante cada temporada invernal a todos los niños",
    "Mantener al niño alejado del humo del tabaco, asegurar vacunación según el esquema vigente y promover alimentación adecuada",
    "Utilizar antitusivos diariamente durante la temporada de virus respiratorios",
    "Restringir la actividad física habitual en todos los niños sanos"
  ],
  respuestaCorrecta: 2,
  explicacion: `La prevención de neumonía pediátrica incluye vacunación de acuerdo con el calendario vigente, lactancia materna cuando sea posible, nutrición adecuada, higiene de manos, reducción de exposición al humo de tabaco y atención oportuna de los factores de riesgo. Los antibióticos profilácticos no se indican de forma general en niños sanos para prevenir infecciones respiratorias estacionales.`,
  perlaENARM: "Vacunación, nutrición adecuada y reducción de exposición al humo son medidas preventivas fundamentales frente a neumonía infantil.",
  gpc: {
    mexico: "Consultar el Programa de Vacunación Universal de México vigente y las recomendaciones nacionales de prevención de infecciones respiratorias.",
    internacional: "WHO. Pneumonia in children; WHO recommendations on immunization and infant feeding."
  },
  bibliografia: "WHO. Pneumonia in children; Nelson Textbook of Pediatrics."
},

{
  id: "PED-181",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Clasificación de gravedad",
  dificultad: "Media",
  caso: `Lactante de 18 meses con fiebre, tos y dificultad respiratoria progresiva. Presenta frecuencia respiratoria de 58 rpm, tiraje subcostal marcado, aleteo nasal y saturación de oxígeno de 89% al aire ambiente. Está irritable y rechaza los líquidos.`,
  pregunta: "¿Qué hallazgo constituye el principal indicador de gravedad que obliga a iniciar soporte respiratorio y valorar hospitalización urgente?",
  opciones: [
    "Fiebre de 38.5 °C",
    "Tos de tres días de evolución",
    "Presencia de rinorrea",
    "Hipoxemia acompañada de aumento del trabajo respiratorio",
    "Disminución del apetito durante una comida"
  ],
  respuestaCorrecta: 3,
  explicacion: `La hipoxemia y el aumento del trabajo respiratorio son indicadores importantes de neumonía grave. La saturación persistentemente baja requiere oxígeno suplementario y evaluación inmediata de la necesidad de hospitalización. También deben valorarse el estado de conciencia, la hidratación, la perfusión y la presencia de apnea o agotamiento respiratorio. La conducta debe ajustarse a la respuesta clínica y al protocolo institucional.`,
  perlaENARM: "La hipoxemia y el tiraje marcado tienen mayor relevancia para la gravedad que la fiebre aislada.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para diagnóstico y tratamiento de neumonía adquirida en la comunidad en menores de cinco años.",
    internacional: "WHO. Recommendations for management of childhood pneumonia; guías PIDS/IDSA para neumonía pediátrica."
  },
  bibliografia: "WHO. Pneumonia in children; Nelson Textbook of Pediatrics."
},
{
  id: "PED-182",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Neumonía neumocócica",
  dificultad: "Media",
  caso: `Niño de 6 años presenta fiebre elevada de inicio súbito, escalofríos, tos y dolor torácico localizado. La exploración identifica matidez a la percusión y soplo tubario en la base pulmonar derecha. La radiografía muestra consolidación lobar.`,
  pregunta: "¿Qué característica clínica y radiológica es compatible con una neumonía bacteriana típica?",
  opciones: [
    "Consolidación focal acompañada de fiebre y hallazgos auscultatorios localizados",
    "Sibilancias difusas sin fiebre ni alteración del estado general",
    "Tos crónica de meses de evolución sin síntomas sistémicos",
    "Hiperinsuflación aislada sin infiltrados ni síntomas respiratorios",
    "Rinorrea acuosa como única manifestación"
  ],
  respuestaCorrecta: 0,
  explicacion: `La neumonía bacteriana típica puede producir fiebre de inicio agudo, tos, dolor pleurítico y hallazgos focales de consolidación. Sin embargo, la presentación clínica y radiológica no permite identificar con certeza el microorganismo. El tratamiento empírico debe basarse en la edad, la gravedad, la inmunización y la epidemiología local.`,
  perlaENARM: "Fiebre aguda, hallazgos focales y consolidación lobar sugieren neumonía bacteriana típica, pero no identifican por sí solos al patógeno.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para neumonía adquirida en la comunidad en pediatría.",
    internacional: "PIDS/IDSA. Clinical Practice Guidelines for Community-Acquired Pneumonia in Infants and Children."
  },
  bibliografia: "Nelson Textbook of Pediatrics; PIDS/IDSA pediatric pneumonia guidelines."
},
{
  id: "PED-183",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Neumonía por aspiración",
  dificultad: "Media",
  caso: `Niño de 2 años con trastorno neurológico y dificultad para deglutir presenta tos intensa durante la alimentación, fiebre y aumento de secreciones respiratorias. Posteriormente desarrolla taquipnea y crépitos en regiones pulmonares dependientes. Tiene antecedentes de episodios similares durante las tomas.`,
  pregunta: "¿Qué mecanismo fisiopatológico explica mejor el riesgo aumentado de neumonía en este paciente?",
  opciones: [
    "Producción excesiva de surfactante por neumocitos tipo II",
    "Disminución de la presión oncótica plasmática como mecanismo exclusivo",
    "Obstrucción de la arteria pulmonar por trombos",
    "Hipersecreción de hormona antidiurética",
    "Entrada de contenido orofaríngeo o gástrico a las vías respiratorias por alteración de los mecanismos protectores"
  ],
  respuestaCorrecta: 4,
  explicacion: `La disfagia y la alteración de los reflejos protectores de la vía aérea favorecen la aspiración de secreciones, alimentos o contenido gástrico. Esto puede ocasionar lesión química, obstrucción e infección pulmonar. La evaluación debe incluir seguridad de la deglución, estado neurológico, patrón respiratorio y factores predisponentes. La selección del tratamiento depende de la gravedad y de si existe evidencia de infección bacteriana, sin asumir que toda aspiración requiere antibióticos.`,
  perlaENARM: "Disfagia, tos durante las tomas y neumonías recurrentes obligan a evaluar aspiración y seguridad de la deglución.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para evaluación de disfagia y neumonía por aspiración en pediatría.",
    internacional: "American Academy of Pediatrics y guías pediátricas de evaluación de disfagia y aspiración."
  },
  bibliografia: "Nelson Textbook of Pediatrics; referencias pediátricas sobre disfagia y aspiración."
},
{
  id: "PED-184",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Derrame pleural paraneumónico",
  dificultad: "Media",
  caso: `Niño de 7 años hospitalizado por neumonía presenta dolor torácico pleurítico y persistencia de fiebre. La exploración revela disminución del murmullo vesicular y matidez en la base izquierda. Se sospecha acumulación de líquido pleural.`,
  pregunta: "¿Qué estudio permite identificar y caracterizar inicialmente un derrame pleural en este contexto?",
  opciones: [
    "Electroencefalograma",
    "Ultrasonido torácico",
    "Electromiografía",
    "Radiografía de cráneo",
    "Prueba de esfuerzo cardiopulmonar"
  ],
  respuestaCorrecta: 1,
  explicacion: `El ultrasonido torácico permite detectar líquido pleural, estimar su volumen e identificar tabicaciones o loculaciones, sin radiación ionizante. La decisión de drenaje depende de la magnitud del derrame, el compromiso respiratorio, la presencia de pus o loculaciones y la evolución clínica. No todos los derrames pequeños requieren intervención invasiva.`,
  perlaENARM: "El ultrasonido es especialmente útil para caracterizar derrames pleurales y orientar procedimientos de drenaje.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para derrame pleural paraneumónico y empiema en niños.",
    internacional: "PIDS/IDSA. Guidelines for management of community-acquired pneumonia and parapneumonic effusion in children."
  },
  bibliografia: "PIDS/IDSA pediatric pneumonia guidelines; Nelson Textbook of Pediatrics."
},
{
  id: "PED-185",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Neumonía por Staphylococcus aureus",
  dificultad: "Media",
  caso: `Niño de 5 años desarrolla fiebre elevada, dificultad respiratoria intensa y deterioro rápido después de una infección viral por influenza. La radiografía muestra infiltrados pulmonares extensos y áreas compatibles con necrosis. El paciente presenta hipoxemia y requiere hospitalización.`,
  pregunta: "¿Qué agente etiológico debe considerarse especialmente ante este patrón de deterioro rápido y neumonía necrosante posterior a influenza?",
  opciones: [
    "Moraxella catarrhalis como única posibilidad",
    "Mycobacterium leprae",
    "Staphylococcus aureus, incluido el resistente a meticilina según la epidemiología local",
    "Bordetella parapertussis como causa obligatoria",
    "Chlamydia trachomatis neonatal"
  ],
  respuestaCorrecta: 2,
  explicacion: `La neumonía grave que aparece después de influenza, especialmente con progresión rápida, necrosis, cavitación o choque, obliga a considerar Staphylococcus aureus, incluido MRSA según la epidemiología local. El tratamiento hospitalario debe proporcionar cobertura empírica apropiada a la gravedad y al patrón clínico, obtener cultivos cuando sea posible sin retrasar la terapia y ajustar los antimicrobianos según los resultados.`,
  perlaENARM: "Deterioro rápido y neumonía necrosante después de influenza son señales para considerar S. aureus, incluido MRSA.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de neumonía grave, influenza y cobertura de microorganismos resistentes.",
    internacional: "PIDS/IDSA pediatric community-acquired pneumonia guidance; recomendaciones vigentes para influenza grave."
  },
  bibliografia: "Nelson Textbook of Pediatrics; PIDS/IDSA pediatric pneumonia guidelines."
},
{
  id: "PED-186",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Neumonía en lactantes pequeños",
  dificultad: "Media",
  caso: `Lactante de 7 semanas presenta temperatura de 38.2 °C, rechazo de las tomas, taquipnea y episodios breves de apnea. La saturación de oxígeno es de 91% al aire ambiente. La exploración pulmonar muestra crépitos dispersos y el niño se encuentra menos reactivo de lo habitual.`,
  pregunta: "¿Cuál es la conducta inicial más apropiada?",
  opciones: [
    "Indicar vigilancia domiciliaria sin evaluación adicional",
    "Administrar antitusivos y revisar en una semana",
    "Iniciar únicamente un broncodilatador inhalado y dar de alta",
    "Realizar valoración hospitalaria urgente, estabilizar respiración y circulación e investigar infección grave",
    "Esperar a que la fiebre supere los 39 °C para intervenir"
  ],
  respuestaCorrecta: 3,
  explicacion: `La fiebre en un lactante menor de 3 meses requiere una evaluación cuidadosa; la apnea, la hipoxemia, el rechazo alimentario y la disminución de la reactividad aumentan la preocupación por infección grave y deterioro respiratorio. Se requiere valoración hospitalaria urgente, monitorización, soporte respiratorio si está indicado y estudios según el protocolo para lactantes febriles. La selección de antibióticos depende de la edad, el estado clínico y la sospecha etiológica.`,
  perlaENARM: "En lactantes pequeños, apnea, hipoxemia o alteración del estado general son signos de alarma aunque la fiebre sea moderada.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para fiebre en lactantes menores de tres meses e infección respiratoria baja.",
    internacional: "AAP guidance for well-appearing febrile infants; WHO recommendations for management of serious bacterial infection in young infants."
  },
  bibliografia: "Nelson Textbook of Pediatrics; AAP guidance for febrile infants."
},
{
  id: "PED-187",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Antibióticos y resistencia",
  dificultad: "Media",
  caso: `Niño de 8 años con neumonía adquirida en la comunidad recibe tratamiento antibiótico ambulatorio. A las 72 horas continúa febril, aunque mantiene presión arterial estable. La familia refiere que ha tomado las dosis indicadas. La exploración muestra persistencia de hallazgos focales, sin datos de choque.`,
  pregunta: "¿Cuál es la estrategia más apropiada antes de ampliar indiscriminadamente el espectro antimicrobiano?",
  opciones: [
    "Reevaluar diagnóstico, adherencia, gravedad y posibles complicaciones, y decidir estudios microbiológicos o de imagen según los hallazgos",
    "Añadir simultáneamente tres antibióticos de amplio espectro en todos los casos",
    "Suspender toda evaluación porque la fiebre siempre persiste durante una semana",
    "Indicar antifúngicos empíricos en todo niño con fiebre persistente",
    "Cambiar a un antibiótico diferente cada 12 horas sin revisar la evolución"
  ],
  respuestaCorrecta: 0,
  explicacion: `La ausencia de mejoría tras 48 a 72 horas requiere reevaluar la evolución y la hipótesis diagnóstica. Deben considerarse complicaciones, resistencia, administración incorrecta, una etiología viral o atípica y diagnósticos alternativos. Los cultivos y estudios de imagen se seleccionan según la gravedad y la sospecha clínica. La ampliación del espectro debe justificarse por el cuadro clínico, los factores de riesgo y la epidemiología local.`,
  perlaENARM: "La falla terapéutica exige reevaluación sistemática antes de ampliar antibióticos; busca complicaciones y reconsidera el diagnóstico.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para neumonía pediátrica y uso racional de antimicrobianos.",
    internacional: "PIDS/IDSA. Clinical Practice Guidelines for Community-Acquired Pneumonia in Infants and Children."
  },
  bibliografia: "PIDS/IDSA pediatric pneumonia guidelines; Nelson Textbook of Pediatrics."
},
{
  id: "PED-188",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Neumonía y vacunación",
  dificultad: "Media",
  caso: `Niño de 2 años con esquema de vacunación incompleto presenta neumonía y requiere atención ambulatoria. Sus padres preguntan si las vacunas pueden disminuir el riesgo de infecciones respiratorias bacterianas graves.`,
  pregunta: "¿Qué estrategia preventiva reduce el riesgo de neumonía causada por serotipos incluidos de neumococo y por Haemophilus influenzae tipo b?",
  opciones: [
    "Antibióticos profilácticos continuos para todos los niños",
    "Vacunación antineumocócica y contra Haemophilus influenzae tipo b conforme al esquema vigente",
    "Vacunación contra varicela como única medida específica frente a ambos patógenos",
    "Uso diario de corticoides inhalados en todos los niños sanos",
    "Restricción de la actividad física durante toda la infancia"
  ],
  respuestaCorrecta: 1,
  explicacion: `Las vacunas conjugadas contra neumococo y Haemophilus influenzae tipo b reducen la enfermedad invasiva y las neumonías atribuibles a los serotipos o tipos incluidos en las formulaciones. No previenen todas las neumonías, porque existen otros agentes y serotipos. Debe revisarse la cartilla y completarse el esquema conforme a la edad, las dosis previas y las recomendaciones nacionales vigentes.`,
  perlaENARM: "Las vacunas antineumocócica y contra Hib previenen parte importante de la enfermedad bacteriana grave, pero no eliminan todas las causas de neumonía.",
  gpc: {
    mexico: "Consultar el Programa de Vacunación Universal de México vigente y el esquema de recuperación correspondiente.",
    internacional: "WHO. Pneumococcal vaccines position paper; WHO. Haemophilus influenzae type b vaccines position paper."
  },
  bibliografia: "WHO position papers on pneumococcal and Hib vaccines; Nelson Textbook of Pediatrics."
},
{
  id: "PED-189",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Absceso pulmonar",
  dificultad: "Media",
  caso: `Niño de 9 años hospitalizado por neumonía presenta fiebre persistente y pérdida de apetito a pesar del tratamiento inicial. La tomografía solicitada por evolución desfavorable identifica una cavidad pulmonar con nivel hidroaéreo y pared definida, compatible con absceso.`,
  pregunta: "¿Qué mecanismo explica la formación de un absceso pulmonar en este contexto?",
  opciones: [
    "Acumulación aislada de líquido intersticial sin lesión del parénquima",
    "Vasoconstricción pulmonar reversible sin inflamación",
    "Necrosis localizada del tejido pulmonar con formación de una cavidad que contiene material purulento",
    "Dilatación bronquial congénita sin infección",
    "Aumento de la presión arterial sistémica sin daño pulmonar"
  ],
  respuestaCorrecta: 2,
  explicacion: `El absceso pulmonar es una cavidad producida por necrosis del parénquima, generalmente en relación con infección. Puede aparecer tras aspiración o neumonía necrosante y manifestarse con fiebre persistente y evolución prolongada. El manejo suele requerir antibióticos dirigidos al contexto microbiológico y seguimiento clínico-radiológico. El drenaje o la intervención quirúrgica se consideran en casos seleccionados con mala respuesta, complicaciones o características anatómicas específicas.`,
  perlaENARM: "Una cavidad pulmonar con nivel hidroaéreo en el contexto de infección sugiere absceso; diferencia esta complicación de un derrame pleural.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para complicaciones supurativas de neumonía en pediatría.",
    internacional: "Pediatric infectious disease and thoracic management guidance for lung abscess."
  },
  bibliografia: "Nelson Textbook of Pediatrics; referencias de infectología y cirugía torácica pediátrica."
},
{
  id: "PED-190",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Seguimiento posterior al tratamiento",
  dificultad: "Media",
  caso: `Niña de 6 años tratada por neumonía no complicada en forma ambulatoria. Después de 72 horas presenta mejoría de la fiebre, disminución de la taquipnea, recuperación del apetito y mejor estado general. No tiene hipoxemia ni hallazgos que sugieran complicaciones.`,
  pregunta: "¿Cuál es el enfoque de seguimiento más apropiado?",
  opciones: [
    "Solicitar tomografía de tórax para demostrar resolución inmediata",
    "Mantener antibióticos indefinidamente hasta que desaparezca cualquier tos",
    "Realizar radiografía diaria hasta que los pulmones sean normales",
    "Indicar hospitalización aunque la evolución sea favorable",
    "Continuar el tratamiento indicado, vigilar la recuperación clínica y explicar signos de alarma que requieren reevaluación"
  ],
  respuestaCorrecta: 4,
  explicacion: `La mejoría clínica suele preceder a la resolución radiográfica completa. En una neumonía no complicada con evolución favorable no se recomienda realizar radiografías seriadas de rutina. Es importante completar la pauta prescrita conforme a la guía aplicable, mantener hidratación y explicar que la fiebre persistente, el aumento del trabajo respiratorio, la hipoxemia, el rechazo de líquidos o el deterioro general requieren reevaluación.`,
  perlaENARM: "En neumonía no complicada con buena evolución, el seguimiento es principalmente clínico; la imagen de control se reserva para indicaciones específicas.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para seguimiento de neumonía adquirida en la comunidad en pediatría.",
    internacional: "PIDS/IDSA. Clinical Practice Guidelines for Community-Acquired Pneumonia in Infants and Children."
  },
  bibliografia: "PIDS/IDSA pediatric pneumonia guidelines; Nelson Textbook of Pediatrics."
},

{
  id: "PED-191",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Diagnóstico diferencial con bronquiolitis",
  dificultad: "Alta",
  caso: `Lactante de 8 meses presenta rinorrea, tos, fiebre de 38 °C y dificultad respiratoria de 48 horas de evolución. A la exploración tiene sibilancias bilaterales, crépitos dispersos y tiraje subcostal leve. Es el primer episodio de sibilancias y mantiene saturación de 95% al aire ambiente.`,
  pregunta: "¿Qué característica favorece el diagnóstico de bronquiolitis sobre una neumonía bacteriana focal?",
  opciones: [
    "Consolidación lobar con soplo tubario",
    "Derrame pleural con matidez localizada",
    "Primer episodio de sibilancias en un lactante con pródromo catarral y hallazgos difusos",
    "Hemoptisis con cavitación pulmonar",
    "Dolor pleurítico localizado con disminución unilateral del murmullo vesicular"
  ],
  respuestaCorrecta: 2,
  explicacion: `La bronquiolitis suele presentarse en menores de 2 años con pródromo de infección respiratoria superior, seguido de tos, taquipnea, sibilancias y crépitos difusos. La neumonía puede compartir algunos síntomas, por lo que la diferenciación se basa en el conjunto clínico. Los hallazgos focales persistentes, la hipoxemia significativa o una evolución atípica justifican investigar otras causas. La radiografía no se recomienda de rutina en bronquiolitis típica.`,
  perlaENARM: "Lactante menor de 2 años con primer episodio de sibilancias después de rinorrea: considera bronquiolitis, especialmente si los hallazgos son difusos.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para bronquiolitis y neumonía adquirida en la comunidad en menores de dos años.",
    internacional: "NICE. Bronchiolitis in children: diagnosis and management."
  },
  bibliografia: "NICE NG9. Bronchiolitis in children; Nelson Textbook of Pediatrics."
},
{
  id: "PED-192",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Neumonía por Mycoplasma pneumoniae",
  dificultad: "Alta",
  caso: `Adolescente de 13 años presenta tos seca persistente, febrícula, cefalea y malestar general de una semana. La radiografía muestra infiltrados intersticiales bilaterales. Está hemodinámicamente estable y no presenta hipoxemia. Se considera neumonía atípica.`,
  pregunta: "¿Qué grupo farmacológico tiene actividad contra Mycoplasma pneumoniae y puede utilizarse cuando el tratamiento antibiótico está indicado?",
  opciones: [
    "Penicilinas, porque Mycoplasma tiene una pared celular rica en peptidoglucano",
    "Macrólidos, considerando la resistencia local y las recomendaciones vigentes",
    "Glucopéptidos como tratamiento de primera elección",
    "Polimixinas por su acción sobre la pared bacteriana",
    "Cefalosporinas como monoterapia dirigida contra Mycoplasma"
  ],
  respuestaCorrecta: 1,
  explicacion: `Mycoplasma pneumoniae carece de pared celular, por lo que los antibióticos que actúan sobre la síntesis de esta estructura, como los betalactámicos, no tienen actividad contra él. Los macrólidos se utilizan habitualmente en población pediátrica cuando se considera indicado tratar una neumonía por este microorganismo. La elección debe considerar edad, gravedad, epidemiología y resistencia local; la presentación clínica por sí sola no confirma la etiología.`,
  perlaENARM: "Mycoplasma carece de pared celular: los betalactámicos no son activos contra este microorganismo.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para tratamiento de neumonía pediátrica y la epidemiología local de resistencia antimicrobiana.",
    internacional: "PIDS/IDSA. Clinical Practice Guidelines for Community-Acquired Pneumonia in Infants and Children."
  },
  bibliografia: "Nelson Textbook of Pediatrics; PIDS/IDSA pediatric pneumonia guidelines."
},
{
  id: "PED-193",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Neumonía complicada y empiema",
  dificultad: "Alta",
  caso: `Niño de 8 años hospitalizado por neumonía presenta fiebre persistente, dolor pleurítico y dificultad respiratoria progresiva. El ultrasonido torácico muestra un derrame pleural grande, tabicado, con material ecogénico. La saturación disminuye pese al tratamiento inicial.`,
  pregunta: "¿Qué característica apoya con mayor fuerza la necesidad de valorar drenaje pleural además del tratamiento antimicrobiano?",
  opciones: [
    "Derrame mínimo sin síntomas ni repercusión clínica",
    "Tos residual aislada con recuperación general",
    "Radiografía normal con fiebre ya resuelta",
    "Derrame grande y tabicado asociado con compromiso respiratorio",
    "Presencia aislada de rinorrea"
  ],
  respuestaCorrecta: 3,
  explicacion: `Un derrame pleural grande, loculado y asociado con deterioro respiratorio sugiere una complicación pleural que puede requerir drenaje además de antibióticos. La decisión depende del tamaño, la complejidad del líquido, la repercusión respiratoria y la evolución. La valoración por pediatría, infectología y cirugía o el equipo intervencionista permite seleccionar drenaje, fibrinolíticos intrapleurales o cirugía en casos seleccionados.`,
  perlaENARM: "Derrame grande, tabicado y con repercusión respiratoria: considera drenaje. No todos los derrames paraneumónicos pequeños requieren intervención.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para empiema y derrame paraneumónico complicado en pediatría.",
    internacional: "PIDS/IDSA. Guidelines for management of community-acquired pneumonia and parapneumonic effusion in children."
  },
  bibliografia: "PIDS/IDSA pediatric pneumonia guidelines; Nelson Textbook of Pediatrics."
},
{
  id: "PED-194",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Neumonía necrosante",
  dificultad: "Alta",
  caso: `Niña de 7 años con neumonía grave continúa febril y presenta empeoramiento respiratorio después de varios días de tratamiento. La tomografía muestra múltiples áreas de disminución de la perfusión y cavitación dentro del parénquima pulmonar. Los cultivos están pendientes.`,
  pregunta: "¿Cuál es la característica que distingue a la neumonía necrosante de una neumonía no complicada?",
  opciones: [
    "Necrosis del parénquima pulmonar con formación de múltiples cavidades pequeñas o áreas licuadas",
    "Inflamación exclusiva de la mucosa nasal",
    "Presencia obligatoria de derrame pleural en todos los pacientes",
    "Afectación limitada al árbol bronquial sin lesión alveolar",
    "Ausencia de fiebre durante toda la evolución"
  ],
  respuestaCorrecta: 0,
  explicacion: `La neumonía necrosante implica destrucción del tejido pulmonar, con áreas de necrosis y posible cavitación. Se asocia con enfermedad grave y puede complicarse con insuficiencia respiratoria, abscesos o fístula broncopleural. Requiere hospitalización, tratamiento antimicrobiano adaptado a la gravedad y al contexto microbiológico, y vigilancia estrecha. La intervención quirúrgica se reserva para complicaciones o falta de respuesta en situaciones seleccionadas.`,
  perlaENARM: "La cavitación y necrosis parenquimatosa en una neumonía grave sugieren neumonía necrosante y obligan a investigar patógenos virulentos y complicaciones.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para neumonía necrosante y neumonía grave en pediatría.",
    internacional: "PIDS/IDSA pediatric community-acquired pneumonia guidance and pediatric infectious disease references."
  },
  bibliografia: "Nelson Textbook of Pediatrics; PIDS/IDSA pediatric pneumonia guidelines."
},
{
  id: "PED-195",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Neumonía y derrame pleural",
  dificultad: "Alta",
  caso: `Niño de 9 años con neumonía y derrame pleural es sometido a toracocentesis diagnóstica por indicación clínica. El líquido es purulento y contiene abundantes neutrófilos. El paciente permanece febril y requiere oxígeno suplementario.`,
  pregunta: "¿Cómo debe interpretarse la presencia de pus franco en el espacio pleural?",
  opciones: [
    "Como un hallazgo normal durante la resolución de una neumonía",
    "Como evidencia de edema pulmonar cardiogénico",
    "Como un resultado que descarta infección bacteriana",
    "Como una indicación para suspender antibióticos",
    "Como empiema pleural, que requiere antibióticos y valoración de drenaje"
  ],
  respuestaCorrecta: 4,
  explicacion: `El pus franco en el espacio pleural define un empiema. El tratamiento requiere antibióticos y, habitualmente, drenaje pleural, cuya modalidad depende de la anatomía del derrame, las loculaciones y la condición clínica. El material debe enviarse para estudios microbiológicos cuando sea posible, sin retrasar el tratamiento. La evolución clínica y la función respiratoria guían la monitorización.`,
  perlaENARM: "Pus en el espacio pleural equivale a empiema: antibióticos y evaluación para drenaje, no observación aislada.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para empiema pleural pediátrico.",
    internacional: "PIDS/IDSA. Management of community-acquired pneumonia and parapneumonic effusion in children."
  },
  bibliografia: "PIDS/IDSA pediatric pneumonia guidelines; Nelson Textbook of Pediatrics."
},
{
  id: "PED-196",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Neumonía en inmunocomprometidos",
  dificultad: "Alta",
  caso: `Niño de 10 años con leucemia en tratamiento quimioterapéutico presenta fiebre, tos seca e hipoxemia progresiva. La tomografía muestra opacidades bilaterales en vidrio despulido. Tiene neutropenia profunda y linfopenia, sin diagnóstico microbiológico establecido.`,
  pregunta: "¿Qué principio debe guiar la evaluación y el tratamiento inicial?",
  opciones: [
    "Asumir que se trata de neumonía neumocócica y no solicitar estudios adicionales",
    "Realizar evaluación hospitalaria urgente, estudiar patógenos oportunistas y bacterianos, e iniciar tratamiento empírico según gravedad y riesgos",
    "Indicar exclusivamente un antitusivo",
    "Evitar la valoración especializada hasta que se resuelva la neutropenia",
    "Administrar corticoides como monoterapia para cualquier infiltrado bilateral"
  ],
  respuestaCorrecta: 1,
  explicacion: `La neumonía en un paciente inmunocomprometido tiene un espectro etiológico más amplio que incluye bacterias, virus, hongos y microorganismos oportunistas. La neutropenia profunda y la hipoxemia progresiva requieren evaluación urgente, cultivos y estudios dirigidos, con tratamiento empírico oportuno según el riesgo infeccioso y los protocolos oncohematológicos. El abordaje debe individualizarse con infectología, oncología y cuidados intensivos cuando corresponda.`,
  perlaENARM: "Inmunosupresión más infiltrados pulmonares exige ampliar el diagnóstico diferencial y no limitarse a los patógenos comunitarios habituales.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para neutropenia febril y neumonía en pacientes pediátricos inmunocomprometidos.",
    internacional: "IDSA guidance for fever and neutropenia in patients with cancer; recomendaciones para infecciones en inmunocomprometidos."
  },
  bibliografia: "IDSA Clinical Practice Guidelines for Fever and Neutropenia in Patients with Cancer; Nelson Textbook of Pediatrics."
},
{
  id: "PED-197",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Interpretación de gasometría",
  dificultad: "Alta",
  caso: `Adolescente de 14 años con neumonía grave presenta taquipnea, uso de músculos accesorios y agotamiento progresivo. La gasometría arterial muestra pH de 7.28, PaCO2 de 52 mmHg y PaO2 de 58 mmHg con aporte de oxígeno. El estado de conciencia comienza a deteriorarse.`,
  pregunta: "¿Qué alteración fisiológica sugieren principalmente estos resultados?",
  opciones: [
    "Alcalosis respiratoria compensada sin alteración de la oxigenación",
    "Acidosis metabólica aislada con ventilación adecuada",
    "Insuficiencia respiratoria con hipoxemia e hipoventilación alveolar",
    "Hipoxemia aislada con eliminación excesiva de dióxido de carbono",
    "Gasometría normal para un adolescente con neumonía"
  ],
  respuestaCorrecta: 2,
  explicacion: `La PaO2 baja indica hipoxemia y la PaCO2 elevada con acidemia sugiere ventilación alveolar insuficiente con acidosis respiratoria. En un paciente con neumonía grave, el agotamiento y el deterioro neurológico son signos de alarma de insuficiencia respiratoria inminente. Se requiere intervención urgente, soporte respiratorio escalonado y valoración por cuidados intensivos pediátricos.`,
  perlaENARM: "En dificultad respiratoria grave, una PaCO2 ascendente con deterioro clínico puede indicar fatiga ventilatoria, no mejoría.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para insuficiencia respiratoria aguda pediátrica y neumonía grave.",
    internacional: "Pediatric acute respiratory failure and critical care guidance."
  },
  bibliografia: "Nelson Textbook of Pediatrics; Fuhrman and Zimmerman’s Pediatric Critical Care."
},
{
  id: "PED-198",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Complicaciones extrapulmonares",
  dificultad: "Alta",
  caso: `Escolar de 11 años con neumonía bacteriana presenta palidez súbita, ictericia y orina oscura durante la evolución. La hemoglobina disminuye respecto al ingreso y los estudios muestran elevación de bilirrubina indirecta y reticulocitosis.`,
  pregunta: "¿Qué mecanismo debe investigarse ante la sospecha de anemia hemolítica asociada con la infección?",
  opciones: [
    "Hemólisis por un mecanismo inmunológico o por susceptibilidad eritrocitaria, según el microorganismo y el contexto clínico",
    "Deficiencia de vitamina D como causa directa de hemólisis aguda",
    "Disminución aislada de la síntesis de albúmina",
    "Hipotiroidismo subclínico como explicación suficiente",
    "Aumento fisiológico de la masa eritrocitaria durante la infección"
  ],
  respuestaCorrecta: 0,
  explicacion: `La caída de hemoglobina, la bilirrubina indirecta elevada y la reticulocitosis sugieren hemólisis. En el contexto de infección respiratoria, deben investigarse mecanismos inmunológicos y alteraciones eritrocitarias, sin atribuir automáticamente la anemia al microorganismo. La evaluación puede incluir frotis, LDH, haptoglobina, prueba de antiglobulina directa y pruebas adicionales dirigidas. La gravedad clínica y la rapidez de la hemólisis determinan la urgencia del manejo.`,
  perlaENARM: "Ictericia, hemoglobinuria y descenso de hemoglobina durante una infección requieren distinguir hemólisis de anemia inflamatoria o pérdida sanguínea.",
  gpc: {
    mexico: "Consultar recomendaciones mexicanas vigentes para evaluación de anemia hemolítica aguda en pediatría.",
    internacional: "ASH guidance and standard pediatric hematology recommendations for hemolytic anemia."
  },
  bibliografia: "Nelson Textbook of Pediatrics; Williams Hematology."
},
{
  id: "PED-199",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Diagnóstico diferencial de neumonía recurrente",
  dificultad: "Alta",
  caso: `Niño de 6 años presenta tres episodios documentados de neumonía en el mismo lóbulo inferior derecho durante los últimos 18 meses. Entre los episodios mejora parcialmente, pero persiste tos ocasional. No hay antecedentes de inmunodeficiencia conocida.`,
  pregunta: "¿Qué explicación debe investigarse prioritariamente ante recurrencia en la misma localización pulmonar?",
  opciones: [
    "Variación normal de la frecuencia respiratoria",
    "Alergia alimentaria sin manifestaciones adicionales",
    "Deficiencia de hierro como causa directa de obstrucción bronquial localizada",
    "Obstrucción bronquial focal, cuerpo extraño retenido o anomalía anatómica",
    "Migraña infantil"
  ],
  respuestaCorrecta: 3,
  explicacion: `La neumonía recurrente en la misma región pulmonar obliga a investigar una causa localizada, como cuerpo extraño retenido, obstrucción endobronquial, compresión extrínseca o anomalía anatómica. La evaluación puede incluir revisión de imágenes previas, radiografía durante la fase estable, tomografía o broncoscopia según la sospecha. La neumonía recurrente en distintas localizaciones orienta más a causas sistémicas, aspiración o alteraciones inmunológicas, entre otras posibilidades.`,
  perlaENARM: "Neumonía recurrente en el mismo lóbulo: busca una causa anatómica u obstructiva antes de atribuirla a infecciones independientes.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para estudio de neumonía recurrente en pediatría.",
    internacional: "Pediatric pulmonology recommendations for recurrent pneumonia evaluation."
  },
  bibliografia: "Nelson Textbook of Pediatrics; Murray & Nadel’s Textbook of Respiratory Medicine."
},
{
  id: "PED-200",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Criterios de ingreso a cuidados intensivos",
  dificultad: "Alta",
  caso: `Niño de 5 años con neumonía presenta hipoxemia persistente a pesar de oxígeno suplementario, tiraje intenso, quejido espiratorio y episodios de disminución del estado de conciencia. La frecuencia respiratoria aumenta y posteriormente se vuelve irregular. El equipo sospecha agotamiento respiratorio.`,
  pregunta: "¿Qué situación justifica valoración inmediata para soporte ventilatorio avanzado y manejo en cuidados intensivos pediátricos?",
  opciones: [
    "Tos persistente con saturación normal y estado general conservado",
    "Fiebre aislada que responde a antitérmicos",
    "Rinorrea sin dificultad respiratoria",
    "Disminución del apetito sin signos de deshidratación",
    "Hipoxemia refractaria, agotamiento respiratorio y deterioro del estado de conciencia"
  ],
  respuestaCorrecta: 4,
  explicacion: `La hipoxemia refractaria, el agotamiento respiratorio, la respiración irregular y la alteración del estado de conciencia indican riesgo de falla respiratoria. Se requiere valoración inmediata por cuidados intensivos pediátricos, optimización del soporte respiratorio y preparación para escalamiento ventilatorio según la respuesta. La intervención debe adelantarse al paro respiratorio, con monitorización continua y tratamiento simultáneo de la causa subyacente.`,
  perlaENARM: "El agotamiento, la respiración irregular y el deterioro neurológico en un niño con dificultad respiratoria son signos preterminales: no esperes al paro para escalar soporte.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para insuficiencia respiratoria aguda y criterios de ingreso a terapia intensiva pediátrica.",
    internacional: "Pediatric acute respiratory failure and critical care guidelines."
  },
  bibliografia: "Fuhrman and Zimmerman’s Pediatric Critical Care; Nelson Textbook of Pediatrics."
},

{
  id: "PED-201",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Neumonía en pacientes con anemia falciforme",
  dificultad: "Muy alta",
  caso: `Adolescente de 13 años con enfermedad de células falciformes presenta fiebre, dolor torácico, tos e hipoxemia. La radiografía muestra un infiltrado pulmonar nuevo. Durante las siguientes horas aumenta el requerimiento de oxígeno y desciende la hemoglobina respecto a su valor basal.`,
  pregunta: "¿Qué complicación debe sospecharse y qué aspecto del tratamiento es prioritario?",
  opciones: [
    "Crisis aplásica aislada; administrar hierro oral como única intervención",
    "Síndrome torácico agudo; proporcionar soporte respiratorio, analgesia, antibióticos y valorar transfusión según gravedad",
    "Crisis vasooclusiva no complicada; dar de alta si disminuye el dolor",
    "Edema pulmonar cardiogénico como diagnóstico obligatorio; administrar diuréticos sin evaluación adicional",
    "Neumonía viral leve; evitar la monitorización de la oxigenación"
  ],
  respuestaCorrecta: 1,
  explicacion: `El síndrome torácico agudo se define por la aparición de un infiltrado pulmonar nuevo acompañado de manifestaciones como fiebre, dolor torácico, tos, taquipnea o hipoxemia en una persona con enfermedad falciforme. Puede progresar rápidamente. El manejo incluye hospitalización, oxígeno cuando está indicado, analgesia cuidadosa, antibióticos, espirometría incentivada y vigilancia estrecha. La transfusión simple o de recambio se considera según la gravedad, la progresión de la hipoxemia y la evolución hematológica.`,
  perlaENARM: "En enfermedad falciforme, fiebre, síntomas respiratorios e infiltrado pulmonar nuevo obligan a considerar síndrome torácico agudo, una complicación potencialmente mortal.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para enfermedad de células falciformes y síndrome torácico agudo.",
    internacional: "ASH. Guidelines for Sickle Cell Disease: Transfusion Support; NHLBI recommendations for sickle cell disease."
  },
  bibliografia: "American Society of Hematology. Transfusion Support Guidelines; Nelson Textbook of Pediatrics."
},
{
  id: "PED-202",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Neumonía por aspiración y absceso pulmonar",
  dificultad: "Muy alta",
  caso: `Niño de 6 años con trastorno neurológico y episodios repetidos de aspiración presenta fiebre prolongada, tos productiva y expectoración fétida. La tomografía identifica una cavidad pulmonar con nivel hidroaéreo en un segmento dependiente. No presenta choque, pero continúa febril.`,
  pregunta: "¿Qué consideración microbiológica es relevante al seleccionar el tratamiento empírico?",
  opciones: [
    "Los anaerobios nunca participan en infecciones pulmonares asociadas con aspiración",
    "El tratamiento debe dirigirse exclusivamente contra Mycoplasma pneumoniae",
    "Todos los abscesos pulmonares pediátricos son causados por virus",
    "Debe considerarse flora oral y anaerobia según el contexto de aspiración, además de otros patógenos posibles",
    "La presencia de una cavidad descarta una infección bacteriana"
  ],
  respuestaCorrecta: 3,
  explicacion: `El absceso pulmonar puede desarrollarse por aspiración y necrosis del parénquima. En ese contexto, la flora orofaríngea y los anaerobios pueden ser relevantes, aunque la microbiología depende de la edad, los factores predisponentes y las exposiciones. La selección del antibiótico debe contemplar la etiología probable y las recomendaciones locales. También es esencial corregir el factor predisponente, como la disfagia, y vigilar la respuesta clínica y las complicaciones.`,
  perlaENARM: "Aspiración recurrente, esputo fétido y cavidad con nivel hidroaéreo orientan a absceso pulmonar; considera flora oral y anaerobia según el contexto.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para absceso pulmonar y neumonía por aspiración en pediatría.",
    internacional: "Referencias pediátricas de infectología y neumología sobre absceso pulmonar y aspiración."
  },
  bibliografia: "Nelson Textbook of Pediatrics; Murray & Nadel's Textbook of Respiratory Medicine."
},
{
  id: "PED-203",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Derrame pleural complicado",
  dificultad: "Muy alta",
  caso: `Niño de 9 años con neumonía bacteriana presenta derrame pleural tabicado. Se coloca un drenaje pleural y se administra tratamiento antimicrobiano. Tras la valoración multidisciplinaria persiste una colección loculada y el drenaje es insuficiente, con fiebre y dificultad respiratoria persistentes.`,
  pregunta: "¿Qué alternativa puede considerarse cuando el drenaje inicial es insuficiente para un empiema loculado?",
  opciones: [
    "Retirar el drenaje sin realizar nueva valoración",
    "Suspender antibióticos porque ya existe drenaje",
    "Administrar antitusivos como tratamiento definitivo",
    "Mantener observación indefinida pese al deterioro clínico",
    "Valorar fibrinolíticos intrapleurales o intervención quirúrgica, según anatomía, evolución y recursos disponibles"
  ],
  respuestaCorrecta: 4,
  explicacion: `En el empiema loculado, el drenaje puede ser insuficiente por la presencia de tabiques y material espeso. Según la anatomía, la respuesta clínica y los recursos, pueden considerarse fibrinolíticos intrapleurales o cirugía toracoscópica asistida por video. La decisión debe individualizarse y acompañarse de antibióticos apropiados. El deterioro respiratorio o la persistencia de sepsis requieren reevaluación urgente.`,
  perlaENARM: "En empiema loculado con drenaje insuficiente, considera fibrinolíticos intrapleurales o cirugía; la elección depende de la anatomía y la respuesta clínica.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para empiema pediátrico y manejo de derrame pleural complicado.",
    internacional: "PIDS/IDSA pediatric community-acquired pneumonia guidance; recomendaciones de cirugía torácica pediátrica."
  },
  bibliografia: "PIDS/IDSA pediatric pneumonia guidelines; Nelson Textbook of Pediatrics."
},
{
  id: "PED-204",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Neumonía por Pneumocystis jirovecii",
  dificultad: "Muy alta",
  caso: `Lactante de 5 meses con infección por VIH no diagnosticada previamente presenta taquipnea progresiva, hipoxemia y tos seca. La tomografía muestra opacidades bilaterales difusas en vidrio despulido. La gasometría evidencia alteración importante de la oxigenación y el paciente requiere hospitalización.`,
  pregunta: "¿Qué agente oportunista debe considerarse y qué tratamiento específico se utiliza habitualmente?",
  opciones: [
    "Pneumocystis jirovecii; trimetoprim-sulfametoxazol, con soporte respiratorio y valoración de corticosteroides según gravedad",
    "Bordetella pertussis; tratamiento exclusivo con antitusivos",
    "Streptococcus pyogenes; penicilina oral como única medida en todos los casos",
    "Mycoplasma pneumoniae; cefalosporina de primera generación",
    "Candida albicans; fluconazol como tratamiento universal de neumonía oportunista"
  ],
  respuestaCorrecta: 0,
  explicacion: `La neumonía por Pneumocystis jirovecii debe considerarse en lactantes con inmunodeficiencia celular, especialmente VIH sin tratamiento o profilaxis. Puede producir hipoxemia desproporcionada y opacidades difusas. Trimetoprim-sulfametoxazol es el tratamiento habitual de primera línea. En enfermedad moderada o grave puede considerarse tratamiento corticosteroide complementario según criterios clínicos y gasométricos aplicables. La confirmación microbiológica y el estudio inmunológico no deben retrasar la estabilización ni el tratamiento cuando la sospecha es alta.`,
  perlaENARM: "Lactante con inmunodeficiencia, hipoxemia progresiva y vidrio despulido bilateral: considera Pneumocystis jirovecii y trata oportunamente.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para infecciones oportunistas en niños con VIH e inmunodeficiencia celular.",
    internacional: "NIH. Guidelines for the Prevention and Treatment of Opportunistic Infections in Children With and Exposed to HIV."
  },
  bibliografia: "NIH Pediatric Opportunistic Infection Guidelines; Nelson Textbook of Pediatrics."
},
{
  id: "PED-205",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Neumonía por influenza",
  dificultad: "Muy alta",
  caso: `Niño de 8 años con asma presenta fiebre, mialgias y tos durante una temporada de alta circulación de influenza. A las 48 horas desarrolla disnea y saturación de 90% al aire ambiente. La radiografía muestra infiltrados bilaterales. No se dispone todavía del resultado de la prueba molecular para influenza.`,
  pregunta: "¿Cuál es el principio terapéutico más importante ante sospecha de influenza grave que requiere hospitalización?",
  opciones: [
    "Esperar siempre la confirmación molecular antes de iniciar cualquier tratamiento",
    "Administrar exclusivamente antibióticos contra neumococo",
    "Considerar tratamiento antiviral temprano, además de soporte respiratorio y evaluación de coinfección bacteriana",
    "Evitar oxígeno suplementario aunque persista la hipoxemia",
    "Indicar corticoides sistémicos en todos los casos de influenza sin considerar comorbilidades"
  ],
  respuestaCorrecta: 2,
  explicacion: `En influenza sospechada o confirmada con enfermedad grave, progresiva o que requiere hospitalización, se recomienda iniciar tratamiento antiviral oportuno, habitualmente oseltamivir, sin esperar necesariamente la confirmación de laboratorio. Debe proporcionarse soporte respiratorio y valorar coinfección bacteriana, especialmente ante deterioro rápido, choque o hallazgos compatibles con neumonía bacteriana secundaria. Los corticosteroides no se indican de rutina para tratar influenza por sí sola, aunque pueden existir otras indicaciones, como una exacerbación asmática.`,
  perlaENARM: "Influenza grave hospitalizada: inicia antiviral oportunamente sin retrasarlo por el resultado de la prueba, y evalúa coinfección bacteriana.",
  gpc: {
    mexico: "Consultar lineamientos mexicanos vigentes para influenza estacional grave y tratamiento antiviral pediátrico.",
    internacional: "CDC. Influenza Antiviral Medications: Summary for Clinicians."
  },
  bibliografia: "CDC. Influenza Antiviral Medications: Summary for Clinicians; Nelson Textbook of Pediatrics."
},
{
  id: "PED-206",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Neumonía y ventilación no invasiva",
  dificultad: "Muy alta",
  caso: `Niño de 4 años con neumonía grave presenta hipoxemia persistente pese a oxígeno convencional. Está consciente, mantiene protección de la vía aérea y conserva estabilidad hemodinámica, aunque tiene trabajo respiratorio elevado. Se encuentra en un área con monitorización continua y personal capacitado.`,
  pregunta: "¿Qué condición es esencial al considerar una modalidad de soporte respiratorio no invasivo?",
  opciones: [
    "Utilizarla sin monitorización porque evita toda complicación",
    "Ignorar la evolución del trabajo respiratorio si aumenta la saturación",
    "Mantenerla indefinidamente aunque empeore el estado neurológico",
    "Seleccionar cuidadosamente al paciente, monitorizar respuesta y disponer de escalamiento inmediato si fracasa",
    "Evitar reevaluaciones gasométricas o clínicas durante el tratamiento"
  ],
  respuestaCorrecta: 3,
  explicacion: `El soporte respiratorio no invasivo puede ser útil en pacientes seleccionados con insuficiencia respiratoria, pero requiere monitorización estrecha y reevaluación frecuente. La alteración de conciencia, la incapacidad para proteger la vía aérea, la inestabilidad hemodinámica o el empeoramiento progresivo pueden contraindicar su uso o indicar fracaso. La intubación no debe retrasarse cuando la respuesta es insuficiente o existe deterioro clínico.`,
  perlaENARM: "El soporte no invasivo requiere selección y vigilancia estrechas; el empeoramiento clínico obliga a escalar el soporte sin demora.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de insuficiencia respiratoria aguda y soporte ventilatorio pediátrico.",
    internacional: "Pediatric acute respiratory failure and critical care recommendations."
  },
  bibliografia: "Fuhrman and Zimmerman’s Pediatric Critical Care; Nelson Textbook of Pediatrics."
},
{
  id: "PED-207",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Neumonía recurrente y aspiración",
  dificultad: "Muy alta",
  caso: `Niña de 5 años con parálisis cerebral presenta dos neumonías en lóbulos diferentes durante el último año. Sus cuidadores describen tos y cambios en la voz durante las comidas, además de infecciones respiratorias recurrentes. No existe antecedente de inmunodeficiencia documentada.`,
  pregunta: "¿Qué evaluación es especialmente relevante para identificar un factor predisponente modificable?",
  opciones: [
    "Evaluación de la deglución y del riesgo de aspiración, con valoración multidisciplinaria",
    "Realizar únicamente pruebas cutáneas de alergia alimentaria",
    "Solicitar electroencefalograma como prueba confirmatoria de aspiración",
    "Indicar antibióticos profilácticos indefinidos sin estudiar la causa",
    "Excluir aspiración porque las neumonías aparecen en lóbulos distintos"
  ],
  respuestaCorrecta: 0,
  explicacion: `La tos durante las comidas y las alteraciones neurológicas sugieren disfagia y posible aspiración. La evaluación de la deglución puede incluir valoración clínica y, cuando está indicada, estudios instrumentales como videofluoroscopia o evaluación endoscópica de la deglución. Las medidas preventivas se individualizan según el mecanismo de aspiración y las necesidades nutricionales. También deben considerarse otras causas de neumonía recurrente cuando la historia lo justifique.`,
  perlaENARM: "Neumonías recurrentes en distintas localizaciones más tos durante la alimentación orientan a aspiración; evalúa la deglución antes de indicar profilaxis antibiótica crónica.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para disfagia, aspiración y neumonía recurrente en niños con trastornos neurológicos.",
    internacional: "American Academy of Pediatrics y guías especializadas de evaluación de deglución pediátrica."
  },
  bibliografia: "Nelson Textbook of Pediatrics; Murray & Nadel's Textbook of Respiratory Medicine."
},
{
  id: "PED-208",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Neumonía y síndrome de dificultad respiratoria aguda pediátrica",
  dificultad: "Muy alta",
  caso: `Niño de 7 años con neumonía grave requiere ventilación mecánica invasiva. Presenta hipoxemia persistente, opacidades pulmonares bilaterales y disminución de la distensibilidad pulmonar. La evaluación no identifica evidencia clínica de que el edema pulmonar sea explicado principalmente por insuficiencia cardiaca o sobrecarga de volumen.`,
  pregunta: "¿Qué proceso fisiopatológico explica mejor el deterioro pulmonar?",
  opciones: [
    "Broncoconstricción reversible aislada sin lesión alveolar",
    "Lesión inflamatoria pulmonar difusa con aumento de la permeabilidad de la barrera alveolocapilar",
    "Obstrucción mecánica exclusiva de la vía aérea superior",
    "Aumento aislado de la presión oncótica plasmática",
    "Disminución de la permeabilidad vascular pulmonar"
  ],
  respuestaCorrecta: 1,
  explicacion: `El síndrome de dificultad respiratoria aguda pediátrica se caracteriza por lesión pulmonar inflamatoria, aumento de la permeabilidad alveolocapilar, edema no explicado principalmente por causas cardiogénicas y deterioro de la oxigenación. El diagnóstico requiere criterios pediátricos específicos y evaluación de la relación entre oxigenación, soporte respiratorio e imagen. El manejo incluye tratamiento de la causa, ventilación protectora y estrategias de soporte individualizadas en cuidados intensivos.`,
  perlaENARM: "Hipoxemia, infiltrados bilaterales y lesión pulmonar inflamatoria no explicada principalmente por falla cardiaca sugieren síndrome de dificultad respiratoria aguda.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para síndrome de dificultad respiratoria aguda pediátrica y ventilación protectora.",
    internacional: "PALICC-2. Pediatric Acute Lung Injury Consensus Conference recommendations."
  },
  bibliografia: "PALICC-2 recommendations; Fuhrman and Zimmerman’s Pediatric Critical Care."
},
{
  id: "PED-209",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Interpretación de cultivos respiratorios",
  dificultad: "Muy alta",
  caso: `Niño de 6 años hospitalizado por neumonía grave presenta secreciones traqueales abundantes después de varios días de intubación. El cultivo de aspirado traqueal desarrolla un bacilo gramnegativo, pero el paciente muestra mejoría clínica, sin fiebre nueva, sin incremento del requerimiento de oxígeno y sin nuevos infiltrados.`,
  pregunta: "¿Qué principio debe guiar la interpretación del cultivo respiratorio?",
  opciones: [
    "Todo cultivo positivo demuestra neumonía bacteriana activa y obliga a ampliar antibióticos",
    "Debe administrarse tratamiento contra todos los microorganismos recuperados, sin importar el contexto",
    "Un cultivo positivo descarta colonización y contaminación",
    "La decisión debe integrar la clínica, la evolución, la calidad de la muestra y la posibilidad de colonización",
    "Debe suspenderse la monitorización porque el microorganismo ya fue identificado"
  ],
  respuestaCorrecta: 3,
  explicacion: `Los cultivos de secreciones respiratorias, especialmente en pacientes intubados, pueden reflejar colonización y no necesariamente infección activa. Su interpretación debe integrar el estado clínico, los cambios en la oxigenación, la presencia de nuevos infiltrados, la calidad de la muestra y los resultados microbiológicos. El tratamiento antimicrobiano debe dirigirse a una infección clínicamente probable y ajustarse a la susceptibilidad cuando sea pertinente, evitando la ampliación innecesaria del espectro.`,
  perlaENARM: "Un cultivo respiratorio positivo no equivale automáticamente a infección; diferencia colonización de neumonía mediante correlación clínica y microbiológica.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para neumonía asociada a ventilación y uso racional de antimicrobianos.",
    internacional: "ATS/IDSA guidance for hospital-acquired and ventilator-associated pneumonia; recomendaciones pediátricas institucionales."
  },
  bibliografia: "ATS/IDSA guidance on hospital-acquired and ventilator-associated pneumonia; Fuhrman and Zimmerman’s Pediatric Critical Care."
},
{
  id: "PED-210",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Decisiones de ingreso y egreso hospitalario",
  dificultad: "Muy alta",
  caso: `Niña de 6 años hospitalizada por neumonía bacteriana y tratada con antibióticos intravenosos. Después de 48 horas está afebril, mantiene saturación de 96% al aire ambiente, presenta trabajo respiratorio mínimo, tolera líquidos y medicamentos orales y tiene cuidadores capaces de reconocer signos de alarma. No existen complicaciones pleurales.`,
  pregunta: "¿Qué conjunto de condiciones apoya considerar el egreso hospitalario con seguimiento ambulatorio?",
  opciones: [
    "Persistencia de hipoxemia y necesidad de oxígeno creciente",
    "Deterioro del estado de conciencia con rechazo de líquidos",
    "Estabilidad clínica, mejoría respiratoria, oxigenación adecuada sin soporte y tolerancia del tratamiento oral",
    "Fiebre persistente con sospecha de empiema no drenado",
    "Inestabilidad hemodinámica aunque la tos haya disminuido"
  ],
  respuestaCorrecta: 2,
  explicacion: `El egreso puede considerarse cuando existe mejoría clínica sostenida, estabilidad hemodinámica, oxigenación adecuada sin soporte, reducción del trabajo respiratorio y capacidad para mantener hidratación y tratamiento oral. También deben existir un plan de seguimiento y cuidadores que comprendan las indicaciones y los signos de alarma. La decisión se individualiza según la evolución, las comorbilidades y la ausencia de complicaciones que requieran atención hospitalaria.`,
  perlaENARM: "El egreso por neumonía depende de estabilidad clínica y respiratoria, tolerancia oral y seguimiento seguro, no únicamente de la desaparición de la fiebre.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para criterios de hospitalización y egreso en neumonía pediátrica.",
    internacional: "PIDS/IDSA. Clinical Practice Guidelines for Community-Acquired Pneumonia in Infants and Children."
  },
  bibliografia: "PIDS/IDSA pediatric pneumonia guidelines; Nelson Textbook of Pediatrics."
},

{
  id: "PED-211",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Diferenciación entre neumonía típica y atípica",
  dificultad: "Muy alta",
  caso: `Adolescente de 14 años con fiebre, tos persistente y cefalea de 8 días de evolución. La radiografía muestra infiltrados intersticiales bilaterales. Durante la hospitalización desarrolla anemia hemolítica con prueba de antiglobulina directa positiva. No presenta antecedentes de enfermedad hematológica.`,
  pregunta: "¿Qué microorganismo puede asociarse con neumonía atípica y anemia hemolítica mediada por aglutininas frías?",
  opciones: [
    "Streptococcus pyogenes",
    "Mycoplasma pneumoniae",
    "Moraxella catarrhalis",
    "Bordetella pertussis",
    "Haemophilus influenzae tipo b"
  ],
  respuestaCorrecta: 1,
  explicacion: `Mycoplasma pneumoniae puede producir neumonía atípica y manifestaciones extrapulmonares, incluida anemia hemolítica asociada con aglutininas frías. Estas manifestaciones no aparecen en todos los pacientes y requieren correlación clínica y pruebas específicas. El diagnóstico debe integrar la epidemiología, la presentación respiratoria y, cuando esté indicado, pruebas moleculares o serológicas. La anemia hemolítica significativa necesita evaluación hematológica y vigilancia de la gravedad.`,
  perlaENARM: "Neumonía atípica acompañada de anemia hemolítica por aglutininas frías es una asociación clásica con Mycoplasma pneumoniae.",
  gpc: {
    mexico: "Consultar las recomendaciones mexicanas vigentes para neumonía pediátrica y evaluación de anemia hemolítica.",
    internacional: "PIDS/IDSA. Clinical Practice Guidelines for Community-Acquired Pneumonia in Infants and Children."
  },
  bibliografia: "Nelson Textbook of Pediatrics; PIDS/IDSA pediatric pneumonia guidelines."
},
{
  id: "PED-212",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Neumonía bacteriana y bacteriemia",
  dificultad: "Muy alta",
  caso: `Niño de 3 años con neumonía lobar presenta fiebre persistente, taquicardia, llenado capilar de 4 segundos y disminución de la diuresis. La presión arterial todavía se encuentra dentro del intervalo esperado para su edad. El lactato está elevado y el hemocultivo permanece pendiente.`,
  pregunta: "¿Cuál es la interpretación más importante de la ausencia de hipotensión en este paciente?",
  opciones: [
    "Descarta choque séptico mientras la presión arterial sea normal",
    "Permite diferir el tratamiento antimicrobiano hasta conocer el hemocultivo",
    "Indica que la infección está limitada al parénquima pulmonar",
    "No excluye choque compensado, por lo que debe tratarse la hipoperfusión y reevaluarse urgentemente",
    "Demuestra que la taquicardia es exclusivamente secundaria a la fiebre"
  ],
  respuestaCorrecta: 3,
  explicacion: `En pediatría, la hipotensión puede ser un signo tardío de choque. La taquicardia, el llenado capilar prolongado, la oliguria y la elevación del lactato sugieren hipoperfusión y requieren evaluación urgente. El manejo incluye soporte hemodinámico individualizado, antibióticos oportunos cuando se sospecha sepsis bacteriana y monitorización estrecha de la respuesta. Deben obtenerse cultivos cuando sea posible sin retrasar intervenciones esenciales.`,
  perlaENARM: "La presión arterial normal no descarta choque compensado en niños. La perfusión periférica, el estado mental y la diuresis son indicadores fundamentales.",
  gpc: {
    mexico: "Consultar los protocolos mexicanos vigentes para sepsis y choque séptico pediátrico.",
    internacional: "Surviving Sepsis Campaign. International Guidelines for the Management of Septic Shock and Sepsis-Associated Organ Dysfunction in Children."
  },
  bibliografia: "Surviving Sepsis Campaign pediatric guidelines, 2020; Fuhrman and Zimmerman’s Pediatric Critical Care."
},
{
  id: "PED-213",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Derrame pleural y microbiología",
  dificultad: "Muy alta",
  caso: `Niño de 8 años con neumonía y derrame pleural requiere drenaje por compromiso respiratorio. El líquido pleural es purulento. El cultivo convencional no muestra crecimiento después de tratamiento antibiótico previo, pero la sospecha de infección bacteriana continúa siendo elevada.`,
  pregunta: "¿Qué explica mejor un cultivo pleural negativo en este contexto?",
  opciones: [
    "El tratamiento antibiótico previo puede reducir el rendimiento del cultivo sin excluir una infección bacteriana",
    "La presencia de pus demuestra que la causa es exclusivamente viral",
    "Un cultivo negativo excluye empiema y permite retirar el drenaje de inmediato",
    "El líquido pleural purulento es incompatible con neumonía bacteriana",
    "La ausencia de crecimiento confirma una enfermedad autoinmune"
  ],
  respuestaCorrecta: 0,
  explicacion: `La administración previa de antibióticos puede disminuir la recuperación de bacterias en los cultivos. El pus pleural sigue siendo compatible con empiema y requiere manejo basado en la clínica, la anatomía del derrame y la respuesta terapéutica. Según los recursos disponibles, pueden considerarse pruebas moleculares u otros métodos microbiológicos. Un cultivo negativo no debe utilizarse de forma aislada para descartar infección ni para decidir la retirada del drenaje.`,
  perlaENARM: "Cultivo negativo después de antibióticos no descarta infección pleural; interpreta el resultado junto con el aspecto del líquido y el cuadro clínico.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para diagnóstico microbiológico y tratamiento del empiema pediátrico.",
    internacional: "PIDS/IDSA pediatric community-acquired pneumonia guidance."
  },
  bibliografia: "PIDS/IDSA pediatric pneumonia guidelines; Nelson Textbook of Pediatrics."
},
{
  id: "PED-214",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Neumonía grave y ventilación mecánica",
  dificultad: "Muy alta",
  caso: `Niño de 6 años con neumonía grave está bajo ventilación mecánica invasiva por hipoxemia refractaria. Presenta disminución importante de la distensibilidad pulmonar y opacidades bilaterales. El equipo busca limitar la lesión pulmonar inducida por el ventilador.`,
  pregunta: "¿Qué principio ventilatorio contribuye a reducir la lesión pulmonar asociada con la ventilación mecánica?",
  opciones: [
    "Usar siempre volúmenes corrientes elevados para normalizar rápidamente la PaCO2",
    "Mantener presiones de distensión máximas sin considerar la mecánica pulmonar",
    "Aplicar ventilación protectora con volúmenes corrientes y presiones ajustados a la distensibilidad y al contexto clínico",
    "Eliminar toda presión positiva al final de la espiración en cualquier paciente",
    "Ajustar el ventilador únicamente según la saturación periférica, sin valorar la gasometría ni la mecánica"
  ],
  respuestaCorrecta: 2,
  explicacion: `La ventilación protectora busca limitar la sobredistensión alveolar y las presiones excesivas, ajustando los volúmenes corrientes a la mecánica pulmonar y utilizando presión positiva al final de la espiración cuando está indicada. Los objetivos deben individualizarse según la gravedad, la oxigenación, la distensibilidad y la hemodinámica. La ventilación debe manejarse en un entorno de cuidados intensivos pediátricos con reevaluación continua.`,
  perlaENARM: "En lesión pulmonar aguda, evita la sobredistensión y las presiones excesivas; el soporte ventilatorio debe individualizarse según la mecánica pulmonar.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de ventilación protectora en insuficiencia respiratoria pediátrica.",
    internacional: "PALICC-2. Pediatric Acute Lung Injury Consensus Conference recommendations."
  },
  bibliografia: "PALICC-2 recommendations; Fuhrman and Zimmerman’s Pediatric Critical Care."
},
{
  id: "PED-215",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Neumonía asociada con influenza y sobreinfección",
  dificultad: "Muy alta",
  caso: `Niña de 10 años con influenza confirmada presenta mejoría inicial durante dos días, seguida de recurrencia de fiebre alta, dolor torácico, disnea y deterioro del estado general. La radiografía muestra una nueva consolidación focal. La saturación de oxígeno desciende a 90% al aire ambiente.`,
  pregunta: "¿Qué interpretación clínica debe priorizarse ante esta evolución bifásica?",
  opciones: [
    "La recurrencia de fiebre demuestra necesariamente resistencia al antiviral",
    "La mejoría inicial excluye una complicación infecciosa posterior",
    "Debe considerarse una sobreinfección bacteriana y evaluar de inmediato la gravedad respiratoria",
    "La consolidación focal descarta cualquier etiología bacteriana",
    "Debe evitarse toda evaluación microbiológica por existir influenza confirmada"
  ],
  respuestaCorrecta: 2,
  explicacion: `El empeoramiento después de una mejoría inicial de influenza, especialmente con fiebre recurrente, consolidación nueva e hipoxemia, obliga a considerar una sobreinfección bacteriana. Entre los agentes posibles se encuentran neumococo y Staphylococcus aureus, según el contexto epidemiológico. Se requiere reevaluación urgente, soporte respiratorio y tratamiento antimicrobiano empírico cuando esté indicado, además de continuar las medidas específicas para influenza según la situación clínica.`,
  perlaENARM: "Influenza con mejoría inicial seguida de fiebre recurrente, consolidación e hipoxemia: sospecha sobreinfección bacteriana.",
  gpc: {
    mexico: "Consultar los lineamientos mexicanos vigentes para influenza grave y neumonía bacteriana secundaria.",
    internacional: "CDC. Influenza Antiviral Medications and Clinical Guidance; PIDS/IDSA pediatric pneumonia guidelines."
  },
  bibliografia: "CDC. Influenza Clinical Guidance; Nelson Textbook of Pediatrics."
},
{
  id: "PED-216",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Neumonía y derrame pleural: interpretación clínica",
  dificultad: "Muy alta",
  caso: `Adolescente de 15 años con neumonía presenta disnea y dolor pleurítico. El ultrasonido identifica un derrame pleural moderado sin tabicaciones. Está hemodinámicamente estable, con saturación de 95% al aire ambiente y respuesta favorable al tratamiento antibiótico. No presenta dificultad respiratoria significativa.`,
  pregunta: "¿Qué factor debe tener mayor peso al decidir entre vigilancia y drenaje pleural?",
  opciones: [
    "La edad cronológica por sí sola",
    "La presencia de tos, independientemente de la evolución",
    "La duración total de la fiebre como único criterio",
    "El tamaño y la complejidad del derrame, la repercusión respiratoria y la respuesta clínica",
    "La presencia de cualquier infiltrado en la radiografía, aunque el derrame sea mínimo"
  ],
  respuestaCorrecta: 3,
  explicacion: `El manejo de un derrame paraneumónico depende del tamaño, la complejidad, la repercusión respiratoria y la evolución clínica. Los derrames pequeños o moderados no complicados pueden manejarse en determinados casos con antibióticos y vigilancia estrecha. Los derrames grandes, purulentos, loculados o asociados con compromiso respiratorio suelen requerir evaluación para drenaje. La decisión debe ajustarse al protocolo local y a la valoración multidisciplinaria.`,
  perlaENARM: "No todo derrame paraneumónico requiere drenaje; la anatomía, el compromiso respiratorio y la evolución orientan la intervención.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para manejo de derrame pleural paraneumónico en niños y adolescentes.",
    internacional: "PIDS/IDSA pediatric community-acquired pneumonia guidance."
  },
  bibliografia: "PIDS/IDSA pediatric pneumonia guidelines; Nelson Textbook of Pediatrics."
},
{
  id: "PED-217",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Neumonía y alteraciones electrolíticas",
  dificultad: "Muy alta",
  caso: `Niño de 9 años hospitalizado por neumonía grave presenta cefalea, náuseas y somnolencia progresiva. La concentración sérica de sodio es de 122 mmol/L. La glucosa es normal y no hay antecedentes de enfermedad renal. Se sospecha hiponatremia asociada con enfermedad respiratoria.`,
  pregunta: "¿Qué elemento debe determinar la urgencia y la estrategia de corrección del sodio?",
  opciones: [
    "La presencia de tos productiva como único criterio",
    "La gravedad de los síntomas neurológicos, la duración probable de la hiponatremia y el estado de volumen",
    "La edad escolar como criterio para administrar solución hipertónica a todos los pacientes",
    "La normalización inmediata del sodio en menos de una hora",
    "La ausencia de fiebre como indicación de restricción hídrica absoluta"
  ],
  respuestaCorrecta: 1,
  explicacion: `La hiponatremia puede aparecer durante infecciones pulmonares y debe evaluarse considerando síntomas, estado de volumen, osmolaridad y duración probable. Los síntomas neurológicos significativos pueden indicar encefalopatía hiponatrémica y requieren manejo urgente. La solución salina hipertónica se reserva para indicaciones clínicas específicas y la corrección debe monitorizarse cuidadosamente para evitar cambios excesivamente rápidos que puedan causar lesión neurológica.`,
  perlaENARM: "En hiponatremia, la urgencia depende de los síntomas neurológicos y del contexto; evita la corrección rápida indiscriminada.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para diagnóstico y tratamiento de trastornos hidroelectrolíticos en pediatría.",
    internacional: "European clinical practice guidance on diagnosis and treatment of hyponatraemia; protocolos pediátricos institucionales."
  },
  bibliografia: "Nelson Textbook of Pediatrics; Clinical Physiology of Acid-Base and Electrolyte Disorders."
},
{
  id: "PED-218",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Neumonía en paciente con cardiopatía congénita",
  dificultad: "Muy alta",
  caso: `Lactante de 8 meses con cardiopatía congénita y cortocircuito de izquierda a derecha presenta tos, fiebre, taquipnea y dificultad para alimentarse. Tiene hepatomegalia leve y crépitos bilaterales. La saturación se mantiene en su rango basal conocido, pero el trabajo respiratorio ha aumentado.`,
  pregunta: "¿Qué aspecto debe considerarse al valorar la gravedad y el tratamiento de la infección respiratoria?",
  opciones: [
    "Asumir que toda taquipnea se debe a neumonía y descartar descompensación cardiaca",
    "Ignorar la saturación basal porque no cambia con la enfermedad",
    "Administrar líquidos intravenosos rápidamente en todos los casos, sin valorar congestión",
    "Suspender la evaluación cardiológica porque la fiebre confirma una causa infecciosa exclusiva",
    "Distinguir infección pulmonar de congestión cardiaca y valorar cuidadosamente oxigenación, perfusión y balance de líquidos"
  ],
  respuestaCorrecta: 4,
  explicacion: `En niños con cardiopatía congénita, la taquipnea y los crépitos pueden relacionarse con infección, congestión cardiaca o ambas. La saturación debe compararse con el valor basal del paciente, especialmente en cardiopatías cianógenas. El manejo requiere valorar perfusión, signos de sobrecarga de volumen, función cardiaca y gravedad respiratoria, evitando tanto la hipovolemia como la administración indiscriminada de líquidos.`,
  perlaENARM: "En cardiopatía congénita, compara la saturación con el basal y distingue neumonía de congestión cardiaca antes de definir el soporte hídrico y respiratorio.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para infecciones respiratorias en pacientes pediátricos con cardiopatía congénita.",
    internacional: "AHA guidance on congenital heart disease; PIDS/IDSA pediatric pneumonia guidelines."
  },
  bibliografia: "Moss and Adams' Heart Disease in Infants, Children, and Adolescents; Nelson Textbook of Pediatrics."
},
{
  id: "PED-219",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Neumonía recurrente y déficit inmunitario",
  dificultad: "Muy alta",
  caso: `Niño de 7 años presenta múltiples neumonías bacterianas en diferentes lóbulos, dos episodios de otitis media complicada y antecedentes de infecciones respiratorias recurrentes desde la primera infancia. Tiene crecimiento por debajo de lo esperado y no existe una explicación anatómica identificada.`,
  pregunta: "¿Qué grupo de estudios puede formar parte de la evaluación inicial de una posible inmunodeficiencia humoral?",
  opciones: [
    "Determinación de inmunoglobulinas séricas y valoración de la respuesta específica a vacunas según la edad y el contexto",
    "Concentración de troponina como único estudio",
    "Prueba de tolerancia oral a la glucosa como confirmación de inmunodeficiencia",
    "Radiografía de muñeca para evaluar la respuesta inmunitaria",
    "Determinación aislada de IgE para descartar todos los defectos inmunitarios"
  ],
  respuestaCorrecta: 0,
  explicacion: `Las infecciones bacterianas recurrentes en diferentes localizaciones, especialmente con crecimiento deficiente, justifican investigar una inmunodeficiencia. La evaluación inicial puede incluir biometría hemática con diferencial, cuantificación de inmunoglobulinas y valoración de anticuerpos específicos frente a antígenos vacunales, interpretados según edad y antecedentes de inmunización. Otros estudios se seleccionan según el patrón infeccioso y la sospecha de defectos celulares, fagocíticos o del complemento.`,
  perlaENARM: "Infecciones bacterianas recurrentes en múltiples localizaciones y falla de crecimiento son señales de alarma para inmunodeficiencia; las pruebas deben dirigirse por el patrón clínico.",
  gpc: {
    mexico: "Consultar recomendaciones mexicanas vigentes para diagnóstico de inmunodeficiencias primarias en pediatría.",
    internacional: "AAAAI/ACAAI practice parameters for diagnosis and management of primary immunodeficiency."
  },
  bibliografia: "Nelson Textbook of Pediatrics; recomendaciones de inmunología clínica para inmunodeficiencias primarias."
},
{
  id: "PED-220",
  especialidad: "Pediatría",
  tema: "Neumonía",
  subtema: "Reevaluación de neumonía grave",
  dificultad: "Muy alta",
  caso: `Niño de 5 años hospitalizado por neumonía grave continúa con fiebre y taquipnea al cuarto día. El requerimiento de oxígeno no disminuye y aparece dolor torácico unilateral. Los hemocultivos iniciales son negativos y la exploración revela disminución del murmullo vesicular en la base afectada.`,
  pregunta: "¿Qué enfoque permite identificar mejor una complicación que explique la falta de mejoría?",
  opciones: [
    "Aumentar la duración del antibiótico sin realizar nueva evaluación",
    "Reevaluar clínica y oxigenación, obtener imagen dirigida para buscar complicaciones pleurales o parenquimatosas y ajustar el estudio microbiológico",
    "Descartar complicaciones porque los hemocultivos son negativos",
    "Suspender el tratamiento antimicrobiano por la persistencia de fiebre",
    "Solicitar exclusivamente pruebas de alergia respiratoria"
  ],
  respuestaCorrecta: 1,
  explicacion: `La falta de mejoría a las 48–72 horas o el deterioro posterior requieren una reevaluación sistemática. El dolor pleurítico y la disminución focal del murmullo vesicular aumentan la sospecha de derrame pleural, empiema o complicación parenquimatosa. El ultrasonido torácico y otros estudios se seleccionan según los hallazgos. Los cultivos negativos no excluyen infección bacteriana, especialmente si se administraron antibióticos previamente.`,
  perlaENARM: "Neumonía grave que no mejora, con dolor pleurítico y hallazgos focales nuevos: investiga complicaciones antes de modificar empíricamente todo el esquema.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para neumonía pediátrica complicada y falta de respuesta terapéutica.",
    internacional: "PIDS/IDSA. Clinical Practice Guidelines for Community-Acquired Pneumonia in Infants and Children."
  },
  bibliografia: "PIDS/IDSA pediatric pneumonia guidelines; Nelson Textbook of Pediatrics."
},

{
  id: "PED-221",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Diagnóstico clínico y epidemiología",
  dificultad: "Baja",
  caso: `Lactante de 5 meses, previamente sano, presenta rinorrea y tos de 3 días de evolución. Desde hace 24 horas tiene dificultad respiratoria leve y disminución de la ingesta. A la exploración: temperatura de 37.8 °C, frecuencia respiratoria de 52/min, tiraje subcostal leve, sibilancias espiratorias y estertores finos bilaterales. La saturación de oxígeno al aire ambiente es de 94%.`,
  pregunta: "¿Cuál es el diagnóstico más probable?",
  opciones: [
    "Asma del lactante",
    "Neumonía bacteriana típica",
    "Bronquiolitis aguda",
    "Laringotraqueítis viral",
    "Cuerpo extraño en vía aérea"
  ],
  respuestaCorrecta: 2,
  explicacion: `La bronquiolitis es una infección respiratoria viral aguda que afecta principalmente a menores de 2 años, con mayor incidencia durante el primer año de vida. Suele comenzar con síntomas de vías respiratorias superiores y progresar a taquipnea, retracciones, sibilancias y estertores. El diagnóstico es clínico y no requiere radiografía ni pruebas virales de rutina en cuadros típicos.`,
  perlaENARM: "Lactante menor de 2 años con pródromo catarral seguido de sibilancias y estertores: pensar primero en bronquiolitis.",
  gpc: {
    mexico: "Guías de Práctica Clínica de México: diagnóstico y tratamiento de bronquiolitis en menores de 2 años.",
    internacional: "American Academy of Pediatrics (AAP). Clinical Practice Guideline: The Diagnosis, Management, and Prevention of Bronchiolitis."
  },
  bibliografia: "Harrison. Principios de Medicina Interna, 19.ª ed.; AAP Clinical Practice Guideline on Bronchiolitis."
},
{
  id: "PED-222",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Etiología viral",
  dificultad: "Baja",
  caso: `Lactante de 7 meses acude en invierno por tos, rinorrea y dificultad respiratoria progresiva. Presenta sibilancias difusas, estertores bilaterales y tiraje subcostal. En la guardería se reportaron varios niños con infección respiratoria. No tiene antecedentes de episodios similares ni diagnóstico previo de asma.`,
  pregunta: "¿Qué agente etiológico se asocia con mayor frecuencia a la bronquiolitis?",
  opciones: [
    "Virus sincitial respiratorio",
    "Streptococcus pneumoniae",
    "Mycobacterium tuberculosis",
    "Bordetella pertussis",
    "Staphylococcus aureus"
  ],
  respuestaCorrecta: 0,
  explicacion: `El virus sincitial respiratorio (VSR) es la causa más frecuente de bronquiolitis. Otros virus implicados incluyen rinovirus, metapneumovirus, influenza, parainfluenza, adenovirus y coronavirus. La identificación del agente no suele modificar el tratamiento de soporte en los casos no complicados.`,
  perlaENARM: "El VSR es el principal agente etiológico de bronquiolitis; la estación epidemiológica y el contacto con otros niños orientan, pero el diagnóstico suele ser clínico.",
  gpc: {
    mexico: "Guías de Práctica Clínica de México: bronquiolitis en menores de 2 años.",
    internacional: "AAP. Clinical Practice Guideline: The Diagnosis, Management, and Prevention of Bronchiolitis."
  },
  bibliografia: "Harrison. Principios de Medicina Interna, 19.ª ed.; AAP Clinical Practice Guideline on Bronchiolitis."
},
{
  id: "PED-223",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Fisiopatología",
  dificultad: "Baja",
  caso: `Lactante de 4 meses con infección respiratoria viral presenta taquipnea, sibilancias y estertores. La auscultación muestra entrada de aire disminuida en algunas regiones, sin asimetría marcada. La radiografía, solicitada en otra unidad, describe hiperinsuflación pulmonar y engrosamiento peribronquial.`,
  pregunta: "¿Qué mecanismo fisiopatológico explica principalmente los síntomas de la bronquiolitis?",
  opciones: [
    "Vasoconstricción pulmonar primaria con edema alveolar cardiogénico",
    "Obstrucción de bronquiolos por edema, inflamación y detritos celulares",
    "Destrucción alveolar irreversible por déficit de alfa-1 antitripsina",
    "Broncoconstricción aislada mediada por IgE",
    "Fibrosis intersticial difusa de evolución crónica"
  ],
  respuestaCorrecta: 1,
  explicacion: `La infección viral produce lesión epitelial, edema de la mucosa, aumento de secreciones y acumulación de detritos celulares en los bronquiolos. El estrechamiento de la vía aérea pequeña ocasiona atrapamiento aéreo, atelectasias y alteración de la relación ventilación-perfusión. La broncoconstricción no es el mecanismo único ni predominante.`,
  perlaENARM: "En bronquiolitis predominan edema, moco y detritos en vías aéreas pequeñas; esto explica las sibilancias, el atrapamiento aéreo y las atelectasias.",
  gpc: {
    mexico: "Guías de Práctica Clínica de México: bronquiolitis en menores de 2 años.",
    internacional: "AAP. Clinical Practice Guideline: The Diagnosis, Management, and Prevention of Bronchiolitis."
  },
  bibliografia: "Harrison. Principios de Medicina Interna, 19.ª ed.; Murray & Nadel. Textbook of Respiratory Medicine."
},
{
  id: "PED-224",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Diagnóstico diferencial",
  dificultad: "Baja",
  caso: `Lactante de 8 meses presenta tos y sibilancias por primera vez después de un cuadro catarral. Tiene temperatura de 37.5 °C, sibilancias bilaterales y estertores finos. No hay antecedente de episodios recurrentes, atopia ni respuesta documentada previa a broncodilatadores.`,
  pregunta: "¿Qué dato favorece más el diagnóstico de bronquiolitis frente al asma infantil?",
  opciones: [
    "Presencia de sibilancias",
    "Tos durante una infección respiratoria",
    "Antecedente familiar de alergia",
    "Primer episodio de sibilancias asociado a pródromo viral en un lactante",
    "Mejoría espontánea de la tos durante el día"
  ],
  respuestaCorrecta: 3,
  explicacion: `La bronquiolitis se caracteriza habitualmente por un primer episodio de dificultad respiratoria con sibilancias o estertores en un lactante, precedido por síntomas de vías respiratorias superiores. El asma se vuelve más probable con episodios recurrentes, antecedentes atópicos y patrones compatibles, aunque existe solapamiento clínico.`,
  perlaENARM: "Primer episodio de sibilancias en un lactante con pródromo catarral sugiere bronquiolitis; las sibilancias por sí solas no distinguen asma de bronquiolitis.",
  gpc: {
    mexico: "Guías de Práctica Clínica de México: bronquiolitis en menores de 2 años.",
    internacional: "AAP. Clinical Practice Guideline: The Diagnosis, Management, and Prevention of Bronchiolitis."
  },
  bibliografia: "Harrison. Principios de Medicina Interna, 19.ª ed.; AAP Clinical Practice Guideline on Bronchiolitis."
},
{
  id: "PED-225",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Estudios diagnósticos",
  dificultad: "Baja",
  caso: `Lactante de 6 meses con rinorrea, tos, sibilancias y retracciones leves. Está alerta, mantiene una saturación de oxígeno de 95% al aire ambiente y acepta tomas pequeñas. No presenta fiebre elevada ni hallazgos focales a la auscultación.`,
  pregunta: "¿Cuál es la estrategia diagnóstica inicial indicada?",
  opciones: [
    "Tomografía de tórax",
    "Radiografía de tórax obligatoria",
    "Hemocultivos y biometría hemática en todos los casos",
    "Panel molecular respiratorio obligatorio",
    "Diagnóstico clínico mediante historia y exploración física"
  ],
  respuestaCorrecta: 4,
  explicacion: `En una presentación típica de bronquiolitis, el diagnóstico se establece clínicamente. La radiografía, la biometría hemática, los cultivos y las pruebas virales no se recomiendan de rutina, porque rara vez modifican el manejo y pueden conducir a estudios o tratamientos innecesarios. Se reservan para situaciones seleccionadas, como evolución atípica o sospecha de otro diagnóstico.`,
  perlaENARM: "Bronquiolitis típica = diagnóstico clínico. Evita radiografías y pruebas de laboratorio rutinarias si no cambiarán la conducta.",
  gpc: {
    mexico: "Guías de Práctica Clínica de México: diagnóstico y tratamiento de bronquiolitis.",
    internacional: "AAP. Clinical Practice Guideline: The Diagnosis, Management, and Prevention of Bronchiolitis."
  },
  bibliografia: "AAP Clinical Practice Guideline on Bronchiolitis; Harrison. Principios de Medicina Interna, 19.ª ed."
},
{
  id: "PED-226",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Tratamiento de soporte",
  dificultad: "Baja",
  caso: `Lactante de 5 meses con bronquiolitis leve presenta rinorrea abundante y dificultad para alimentarse porque se obstruyen sus narinas. Se encuentra alerta, sin apnea, con saturación de 96% al aire ambiente y sin signos de agotamiento respiratorio.`,
  pregunta: "¿Qué intervención de soporte es razonable para facilitar la alimentación y la respiración?",
  opciones: [
    "Aspiración nasal superficial suave cuando las secreciones interfieren con la alimentación",
    "Aspiración nasofaríngea profunda programada cada hora",
    "Fisioterapia torácica rutinaria",
    "Salbutamol cada 4 horas de forma sistemática",
    "Corticoide sistémico durante 5 días"
  ],
  respuestaCorrecta: 0,
  explicacion: `El tratamiento de la bronquiolitis es principalmente de soporte. La limpieza nasal suave puede ayudar cuando las secreciones dificultan la alimentación o la respiración. La aspiración profunda rutinaria puede traumatizar la mucosa y no se recomienda como práctica programada. Los broncodilatadores, corticoides y la fisioterapia torácica no se indican sistemáticamente en bronquiolitis típica.`,
  perlaENARM: "La base del manejo es soporte: limpieza nasal suave según necesidad, hidratación y vigilancia del trabajo respiratorio.",
  gpc: {
    mexico: "Guías de Práctica Clínica de México: tratamiento de bronquiolitis en menores de 2 años.",
    internacional: "AAP. Clinical Practice Guideline: The Diagnosis, Management, and Prevention of Bronchiolitis."
  },
  bibliografia: "AAP Clinical Practice Guideline on Bronchiolitis; NICE. Bronchiolitis in children: diagnosis and management."
},
{
  id: "PED-227",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Hidratación y alimentación",
  dificultad: "Baja",
  caso: `Lactante de 7 meses con bronquiolitis presenta taquipnea moderada y ha consumido aproximadamente la mitad de su volumen habitual durante las últimas 12 horas. Está despierto, perfundido y sin vómitos persistentes. No tiene datos de choque ni insuficiencia respiratoria inminente.`,
  pregunta: "Si no consigue mantener una hidratación oral suficiente, ¿qué vía de hidratación suele preferirse inicialmente?",
  opciones: [
    "Nutrición parenteral total",
    "Bolos intravenosos repetidos sin reevaluación",
    "Hidratación enteral por sonda nasogástrica",
    "Restricción absoluta de líquidos",
    "Administración rutinaria de diuréticos"
  ],
  respuestaCorrecta: 2,
  explicacion: `Cuando la ingesta oral es insuficiente, puede utilizarse hidratación enteral por sonda nasogástrica u orogástrica si el estado clínico lo permite. La hidratación intravenosa isotónica se considera cuando la vía enteral no se tolera o existe insuficiencia respiratoria inminente u otra contraindicación. La elección requiere vigilancia del estado respiratorio y del balance hídrico.`,
  perlaENARM: "En bronquiolitis con ingesta insuficiente y estabilidad clínica, la hidratación enteral por sonda es una opción inicial; reserva la vía IV para indicaciones clínicas.",
  gpc: {
    mexico: "Guías de Práctica Clínica de México: manejo integral de bronquiolitis.",
    internacional: "NICE. Bronchiolitis in children: diagnosis and management; AAP Clinical Practice Guideline on Bronchiolitis."
  },
  bibliografia: "NICE NG9. Bronchiolitis in children: diagnosis and management; AAP Clinical Practice Guideline on Bronchiolitis."
},
{
  id: "PED-228",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Oxigenoterapia",
  dificultad: "Baja",
  caso: `Lactante de 4 meses con bronquiolitis presenta saturación de oxígeno de 91% al aire ambiente, tiraje subcostal leve y alimentación parcialmente conservada. No tiene cardiopatía congénita, enfermedad pulmonar crónica ni antecedentes de prematuridad extrema.`,
  pregunta: "¿Qué criterio general se utiliza para decidir el inicio de oxígeno suplementario en un lactante con bronquiolitis?",
  opciones: [
    "Cualquier lectura aislada menor de 98%",
    "La presencia de sibilancias, independientemente de la saturación",
    "La presencia de tos nocturna",
    "La fiebre mayor de 37.5 °C",
    "Hipoxemia persistente por debajo del umbral recomendado, interpretada junto con el estado clínico"
  ],
  respuestaCorrecta: 4,
  explicacion: `La oxigenoterapia se decide según la saturación persistente y la condición clínica. Las guías difieren ligeramente en sus umbrales y en la edad o los factores de riesgo que modifican la conducta; con frecuencia se utiliza una saturación persistentemente inferior a 90% en lactantes de al menos 6 semanas, y un umbral más alto en lactantes menores o con comorbilidades relevantes. Una medición aislada debe confirmarse y contextualizarse.`,
  perlaENARM: "No se busca mantener saturaciones cercanas al 100% de forma rutinaria; confirma la hipoxemia persistente y considera edad, comorbilidades y trabajo respiratorio.",
  gpc: {
    mexico: "Guías de Práctica Clínica de México: manejo de bronquiolitis y criterios de referencia.",
    internacional: "AAP. Clinical Practice Guideline on Bronchiolitis; NICE NG9. Bronchiolitis in children: diagnosis and management."
  },
  bibliografia: "AAP Clinical Practice Guideline on Bronchiolitis; NICE NG9."
},
{
  id: "PED-229",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Criterios de hospitalización",
  dificultad: "Baja",
  caso: `Lactante de 2 meses con bronquiolitis tiene episodios de apnea observados por sus padres y durante la valoración presenta una pausa respiratoria con desaturación. Está afebril, pero su frecuencia respiratoria es irregular y la alimentación ha disminuido notablemente.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Alta domiciliaria con vigilancia habitual",
    "Hospitalización para monitorización y soporte respiratorio según evolución",
    "Tratamiento ambulatorio exclusivo con salbutamol",
    "Antibiótico oral y revisión en una semana",
    "Administración de antitusígenos y líquidos por vía oral sin vigilancia"
  ],
  respuestaCorrecta: 1,
  explicacion: `La apnea constituye un signo de alarma en bronquiolitis, especialmente en lactantes pequeños. Requiere evaluación hospitalaria y monitorización, con soporte respiratorio según la gravedad. La edad menor de 3 meses, la prematuridad, la hipoxemia, la dificultad respiratoria importante y la incapacidad para mantener la hidratación aumentan la probabilidad de ingreso.`,
  perlaENARM: "Apnea en un lactante con bronquiolitis es indicación de valoración hospitalaria urgente, incluso si no presenta fiebre.",
  gpc: {
    mexico: "Guías de Práctica Clínica de México: criterios de referencia y hospitalización por bronquiolitis.",
    internacional: "NICE NG9. Bronchiolitis in children: diagnosis and management; AAP Clinical Practice Guideline on Bronchiolitis."
  },
  bibliografia: "NICE NG9; AAP Clinical Practice Guideline on Bronchiolitis."
},
{
  id: "PED-230",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Prevención",
  dificultad: "Baja",
  caso: `Recién nacido de término egresa de maternidad durante una temporada de circulación del virus sincitial respiratorio. Sus padres preguntan cómo disminuir el riesgo de bronquiolitis grave durante los primeros meses de vida. No se conocen contraindicaciones para las medidas preventivas recomendadas.`,
  pregunta: "¿Cuál afirmación sobre la prevención de enfermedad grave por VSR es correcta?",
  opciones: [
    "La vacuna antigripal protege directamente contra el VSR",
    "Los antibióticos profilácticos previenen la bronquiolitis por VSR",
    "El palivizumab se administra a todos los lactantes sanos como tratamiento de una infección activa",
    "Existen estrategias de inmunización preventiva contra VSR, cuya indicación depende de las recomendaciones vigentes, la edad y los antecedentes maternos o del lactante",
    "La exposición deliberada a niños infectados genera inmunidad segura"
  ],
  respuestaCorrecta: 3,
  explicacion: `La prevención de enfermedad grave por VSR ha evolucionado con la disponibilidad de vacunación materna durante el embarazo y anticuerpos monoclonales de acción prolongada para lactantes, como nirsevimab, según disponibilidad, temporada y recomendaciones locales. Palivizumab se ha reservado históricamente para determinados lactantes de alto riesgo. La selección depende de las políticas vigentes y de si la madre recibió vacunación durante el embarazo en el intervalo recomendado.`,
  perlaENARM: "La prevención frente al VSR no consiste en antibióticos ni en tratar una infección activa con anticuerpos; verifica las recomendaciones vigentes de inmunización materna e infantil.",
  gpc: {
    mexico: "Consultar recomendaciones nacionales vigentes de prevención de infección por VSR y lineamientos de inmunización disponibles en México.",
    internacional: "CDC. RSV Immunization Guidance for Infants and Young Children; recomendaciones de inmunización materna y anticuerpos monoclonales."
  },
  bibliografia: "CDC. RSV Immunization Guidance for Infants and Young Children; AAP. Red Book: Report of the Committee on Infectious Diseases."
},

{
  id: "PED-231",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Clasificación de gravedad",
  dificultad: "Media",
  caso: `Lactante de 6 meses con rinorrea y tos de 4 días de evolución presenta frecuencia respiratoria de 58/min, tiraje subcostal moderado y sibilancias difusas. Saturación de oxígeno de 93% al aire ambiente. Está despierto, responde a estímulos y acepta aproximadamente el 60% de su alimentación habitual. No presenta apnea ni cianosis.`,
  pregunta: "¿Qué elemento clínico tiene mayor relevancia para determinar la gravedad y la necesidad de vigilancia estrecha?",
  opciones: [
    "La duración de la rinorrea",
    "La presencia aislada de sibilancias",
    "El color de las secreciones nasales",
    "El trabajo respiratorio, la oxigenación y la capacidad para mantener la hidratación",
    "La ausencia de fiebre"
  ],
  respuestaCorrecta: 3,
  explicacion: `La gravedad de la bronquiolitis se evalúa integrando el trabajo respiratorio, la oxigenación, la alimentación, la hidratación, el estado neurológico y la presencia de apnea. Ningún hallazgo aislado determina por sí solo la gravedad. La evolución clínica y los factores de riesgo, como edad pequeña, prematuridad y comorbilidades, también influyen en la decisión de hospitalización.`,
  perlaENARM: "La gravedad se define por el conjunto de dificultad respiratoria, hipoxemia, alteración de la alimentación y estado general, no por la intensidad de las sibilancias aisladas.",
  gpc: {
    mexico: "Guías de Práctica Clínica de México: diagnóstico, tratamiento y criterios de referencia de bronquiolitis.",
    internacional: "NICE NG9. Bronchiolitis in children: diagnosis and management; American Academy of Pediatrics, Clinical Practice Guideline on Bronchiolitis."
  },
  bibliografia: "NICE NG9; AAP Clinical Practice Guideline on Bronchiolitis."
},
{
  id: "PED-232",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Uso de broncodilatadores",
  dificultad: "Media",
  caso: `Lactante de 5 meses, sin antecedentes de sibilancias recurrentes ni atopia, presenta su primer episodio de bronquiolitis. Tiene tiraje leve, sibilancias bilaterales y saturación de 95% al aire ambiente. Un familiar solicita salbutamol porque otro niño de la familia lo utilizó durante una crisis asmática.`,
  pregunta: "¿Cuál es la recomendación terapéutica habitual en este caso?",
  opciones: [
    "Administrar salbutamol de manera sistemática durante 7 días",
    "Evitar el uso rutinario de salbutamol en la bronquiolitis típica",
    "Combinar salbutamol e ipratropio en todos los lactantes",
    "Iniciar salbutamol intravenoso",
    "Indicar salbutamol y corticoide sistémico de forma obligatoria"
  ],
  respuestaCorrecta: 1,
  explicacion: `Las guías no recomiendan broncodilatadores de manera rutinaria en la bronquiolitis típica, porque no han demostrado beneficios clínicos consistentes en desenlaces relevantes. Las sibilancias se deben principalmente a edema, secreciones y detritos en vías aéreas pequeñas, no exclusivamente a broncoconstricción reversible como en el asma.`,
  perlaENARM: "Bronquiolitis típica: no indicar salbutamol de rutina. No extrapolar automáticamente el tratamiento del asma al primer episodio de sibilancias del lactante.",
  gpc: {
    mexico: "Guías de Práctica Clínica de México: tratamiento de bronquiolitis en menores de 2 años.",
    internacional: "AAP. Clinical Practice Guideline: The Diagnosis, Management, and Prevention of Bronchiolitis."
  },
  bibliografia: "AAP Clinical Practice Guideline on Bronchiolitis; NICE NG9."
},
{
  id: "PED-233",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Corticoides y tratamiento farmacológico",
  dificultad: "Media",
  caso: `Lactante de 9 meses con primer episodio de sibilancias asociado a infección viral, rinorrea y tiraje subcostal leve. Está hemodinámicamente estable, sin antecedentes de asma ni enfermedad pulmonar crónica. Se plantea iniciar prednisolona para acortar la evolución.`,
  pregunta: "¿Qué conducta se recomienda respecto al uso de corticoides sistémicos?",
  opciones: [
    "Administrarlos durante 10 días en todos los casos",
    "Utilizarlos únicamente si hay rinorrea purulenta",
    "Asociarlos obligatoriamente con antibióticos",
    "Usarlos para prevenir la progresión a neumonía bacteriana",
    "No utilizarlos de manera rutinaria en la bronquiolitis típica"
  ],
  respuestaCorrecta: 4,
  explicacion: `Los corticoides sistémicos no han demostrado un beneficio clínico consistente en la bronquiolitis aguda típica y no se recomiendan de forma rutinaria. La conducta principal es de soporte, con vigilancia de la respiración, oxigenación e hidratación. La presencia de otra enfermedad concomitante puede requerir un abordaje distinto.`,
  perlaENARM: "Corticoides sistémicos e inhalados no son tratamiento rutinario de la bronquiolitis aguda no complicada.",
  gpc: {
    mexico: "Guías de Práctica Clínica de México: manejo de bronquiolitis.",
    internacional: "AAP. Clinical Practice Guideline on Bronchiolitis; NICE NG9."
  },
  bibliografia: "AAP Clinical Practice Guideline on Bronchiolitis; NICE NG9."
},
{
  id: "PED-234",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Antibióticos",
  dificultad: "Media",
  caso: `Lactante de 7 meses con diagnóstico clínico de bronquiolitis presenta tos, rinorrea, sibilancias y estertores bilaterales. La temperatura máxima ha sido de 38 °C, está hemodinámicamente estable y no tiene hallazgos focales persistentes ni datos clínicos de infección bacteriana concomitante.`,
  pregunta: "¿Cuál es la conducta respecto a los antibióticos?",
  opciones: [
    "No indicarlos rutinariamente si no existe evidencia de infección bacteriana concomitante",
    "Iniciar amoxicilina en todos los casos",
    "Administrar ceftriaxona por la presencia de estertores",
    "Usar macrólidos para eliminar el virus sincitial respiratorio",
    "Indicar antibiótico profiláctico para evitar otitis media"
  ],
  respuestaCorrecta: 0,
  explicacion: `La bronquiolitis es habitualmente viral y los antibióticos no modifican su evolución cuando no existe una infección bacteriana concomitante. Deben considerarse si hay evidencia que sustente otro diagnóstico, como otitis media bacteriana, infección urinaria, neumonía bacteriana u otra infección específica.`,
  perlaENARM: "Los estertores y la fiebre baja pueden formar parte de la bronquiolitis; por sí solos no justifican antibióticos.",
  gpc: {
    mexico: "Guías de Práctica Clínica de México: tratamiento de bronquiolitis en menores de 2 años.",
    internacional: "AAP. Clinical Practice Guideline on Bronchiolitis; NICE NG9."
  },
  bibliografia: "AAP Clinical Practice Guideline on Bronchiolitis; NICE NG9."
},
{
  id: "PED-235",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Indicaciones de radiografía de tórax",
  dificultad: "Media",
  caso: `Lactante de 10 meses con bronquiolitis presenta tos, sibilancias difusas y tiraje leve. Está afebril, tiene saturación de 95% al aire ambiente y se mantiene activo. No hay asimetría auscultatoria, deterioro inesperado ni sospecha de complicación.`,
  pregunta: "¿Cuál es la conducta más apropiada respecto a la radiografía de tórax?",
  opciones: [
    "Solicitarla diariamente hasta que desaparezcan las sibilancias",
    "Realizarla para confirmar toda bronquiolitis",
    "Evitarla de rutina porque el diagnóstico es clínico y el resultado probablemente no cambiará el manejo",
    "Solicitar tomografía de tórax antes del alta",
    "Realizarla únicamente para identificar el virus causal"
  ],
  respuestaCorrecta: 2,
  explicacion: `La radiografía de tórax no se recomienda rutinariamente en bronquiolitis típica. Puede mostrar hiperinsuflación, engrosamiento peribronquial o atelectasias, hallazgos que pueden confundirse con neumonía y favorecer el uso innecesario de antibióticos. Se considera si la evolución es atípica, existe deterioro significativo o se sospecha otro diagnóstico o complicación.`,
  perlaENARM: "No solicites radiografía de rutina en bronquiolitis típica: reserva la imagen para sospecha de complicación, diagnóstico alternativo o evolución atípica.",
  gpc: {
    mexico: "Guías de Práctica Clínica de México: diagnóstico de bronquiolitis.",
    internacional: "AAP. Clinical Practice Guideline on Bronchiolitis; NICE NG9."
  },
  bibliografia: "AAP Clinical Practice Guideline on Bronchiolitis; NICE NG9."
},
{
  id: "PED-236",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Criterios de egreso",
  dificultad: "Media",
  caso: `Lactante de 8 meses hospitalizado por bronquiolitis mejora tras 24 horas de observación. Presenta menor trabajo respiratorio, mantiene saturación adecuada al aire ambiente durante la observación, se alimenta casi como de costumbre y sus cuidadores comprenden las indicaciones de vigilancia en casa.`,
  pregunta: "¿Qué conjunto de condiciones apoya el egreso hospitalario?",
  opciones: [
    "Persistencia de apnea si la saturación se normaliza entre episodios",
    "Necesidad continua de oxígeno suplementario sin posibilidad de retirarlo",
    "Ingesta menor al 25% de la habitual y signos de deshidratación",
    "Mejoría clínica sostenida, oxigenación estable sin soporte cuando corresponda, hidratación suficiente y cuidadores capaces de vigilar signos de alarma",
    "Desaparición completa de la tos y las sibilancias antes del alta"
  ],
  respuestaCorrecta: 3,
  explicacion: `El egreso se basa en estabilidad clínica sostenida, mejoría del trabajo respiratorio, oxigenación adecuada sin soporte cuando corresponda, ingesta suficiente y un entorno domiciliario capaz de proporcionar vigilancia. No es necesario que desaparezcan por completo la tos o las sibilancias, que pueden persistir después de la fase aguda.`,
  perlaENARM: "Para el alta importa la estabilidad respiratoria y la hidratación, además de la educación de los cuidadores; no se exige la desaparición completa de la tos.",
  gpc: {
    mexico: "Guías de Práctica Clínica de México: criterios de referencia, hospitalización y seguimiento de bronquiolitis.",
    internacional: "NICE NG9. Bronchiolitis in children: diagnosis and management."
  },
  bibliografia: "NICE NG9; AAP Clinical Practice Guideline on Bronchiolitis."
},
{
  id: "PED-237",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Factores de riesgo de enfermedad grave",
  dificultad: "Media",
  caso: `Lactante de 7 semanas, nacido a las 30 semanas de gestación, presenta rinorrea, tos y dificultad para alimentarse. Tiene tiraje leve y saturación de 93% al aire ambiente. No se observan cianosis ni apnea durante la primera exploración.`,
  pregunta: "¿Qué característica aumenta especialmente el riesgo de evolución grave por bronquiolitis?",
  opciones: [
    "Sexo masculino por sí solo",
    "Prematuridad y edad cronológica pequeña",
    "Rinorrea durante menos de 24 horas",
    "Ausencia de fiebre",
    "Antecedente de vacunación acorde con la edad"
  ],
  respuestaCorrecta: 1,
  explicacion: `La edad menor de 3 meses y la prematuridad son factores de riesgo importantes para bronquiolitis grave. También aumentan el riesgo la displasia broncopulmonar, determinadas cardiopatías congénitas, inmunodeficiencias y enfermedades neuromusculares. Estos pacientes requieren un umbral más bajo para observación hospitalaria y vigilancia de apnea, alimentación y oxigenación.`,
  perlaENARM: "Lactante pequeño y prematuro con bronquiolitis: mayor riesgo de apnea, deterioro respiratorio y dificultades de alimentación.",
  gpc: {
    mexico: "Guías de Práctica Clínica de México: factores de riesgo y criterios de referencia en bronquiolitis.",
    internacional: "NICE NG9; AAP Clinical Practice Guideline on Bronchiolitis."
  },
  bibliografia: "NICE NG9; AAP Clinical Practice Guideline on Bronchiolitis."
},
{
  id: "PED-238",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Pruebas virales",
  dificultad: "Media",
  caso: `Lactante de 11 meses con cuadro típico de bronquiolitis permanece estable en observación. No se planea aislamiento por una decisión de cohorte hospitalaria ni existe otra indicación epidemiológica específica. El equipo considera solicitar una prueba molecular para VSR antes de decidir el tratamiento.`,
  pregunta: "¿Cuál afirmación describe mejor la utilidad de las pruebas virales en la bronquiolitis no complicada?",
  opciones: [
    "Son indispensables para decidir si se administra oxígeno",
    "Permiten distinguir con certeza la bronquiolitis de la neumonía bacteriana",
    "Su resultado determina automáticamente la necesidad de antibióticos",
    "Son necesarias antes de indicar hidratación enteral",
    "No suelen ser necesarias de rutina porque habitualmente no modifican el manejo individual"
  ],
  respuestaCorrecta: 4,
  explicacion: `En la bronquiolitis típica, las pruebas virales no suelen modificar el tratamiento, que es de soporte. Pueden ser útiles en circunstancias seleccionadas, por ejemplo para decisiones de aislamiento, vigilancia epidemiológica o protocolos institucionales. Un resultado positivo para VSR no excluye por completo una coinfección bacteriana si existen hallazgos clínicos que la sugieran.`,
  perlaENARM: "La detección del VSR no es requisito para diagnosticar ni tratar la bronquiolitis típica; solicita pruebas cuando el resultado pueda cambiar una decisión concreta.",
  gpc: {
    mexico: "Guías de Práctica Clínica de México: diagnóstico de bronquiolitis.",
    internacional: "AAP. Clinical Practice Guideline on Bronchiolitis; NICE NG9."
  },
  bibliografia: "AAP Clinical Practice Guideline on Bronchiolitis; NICE NG9."
},
{
  id: "PED-239",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Solución salina hipertónica nebulizada",
  dificultad: "Media",
  caso: `Lactante de 6 meses ingresado por bronquiolitis presenta sibilancias y retracciones moderadas, sin necesidad de ventilación mecánica. El equipo propone nebulizaciones con solución salina hipertónica al 3% para todos los pacientes hospitalizados con el objetivo de reducir la duración de la estancia.`,
  pregunta: "¿Cuál es la interpretación más acorde con la evidencia y las recomendaciones de guías?",
  opciones: [
    "No debe considerarse una intervención universal; las recomendaciones varían y no se indica rutinariamente en todos los contextos",
    "Es obligatoria en todos los lactantes ambulatorios",
    "Sustituye a la oxigenoterapia cuando existe hipoxemia",
    "Tiene eficacia demostrada equivalente a los antibióticos en la prevención de complicaciones",
    "Debe combinarse siempre con corticoides sistémicos"
  ],
  respuestaCorrecta: 0,
  explicacion: `La evidencia sobre solución salina hipertónica nebulizada en bronquiolitis ha sido heterogénea. Algunas guías han permitido considerarla en pacientes hospitalizados seleccionados, mientras otras no recomiendan su uso rutinario. No sustituye las medidas de soporte ni debe convertirse en una intervención universal sin considerar la guía local y el contexto clínico.`,
  perlaENARM: "La solución salina hipertónica no es un tratamiento universal de la bronquiolitis; las recomendaciones dependen de la guía y del contexto asistencial.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente y el protocolo institucional para solución salina hipertónica nebulizada en bronquiolitis.",
    internacional: "AAP. Clinical Practice Guideline on Bronchiolitis; NICE NG9."
  },
  bibliografia: "AAP Clinical Practice Guideline on Bronchiolitis; NICE NG9."
},
{
  id: "PED-240",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Signos de alarma y seguimiento",
  dificultad: "Media",
  caso: `Lactante de 4 meses con bronquiolitis es valorado en consulta externa. Tiene tiraje leve, pero conserva la saturación de oxígeno y aún acepta líquidos. Sus padres viven lejos del hospital y preguntan qué cambios deberían motivar una nueva valoración urgente.`,
  pregunta: "¿Cuál de los siguientes hallazgos requiere atención urgente?",
  opciones: [
    "Tos residual ocasional con mejoría progresiva",
    "Rinorrea transparente sin dificultad para alimentarse",
    "Apnea, cianosis, agotamiento respiratorio o incapacidad importante para beber",
    "Persistencia de tos leve al quinto día sin deterioro",
    "Disminución progresiva de las secreciones nasales"
  ],
  respuestaCorrecta: 2,
  explicacion: `Los signos de alarma incluyen apnea, cianosis, aumento importante del trabajo respiratorio, quejido, agotamiento, alteración del estado de alerta y disminución marcada de la ingesta o de la diuresis. La educación de los cuidadores y la capacidad de acceder a atención médica son componentes relevantes para decidir el seguimiento ambulatorio.`,
  perlaENARM: "Enseña signos de alarma concretos: apnea, cianosis, agotamiento, dificultad respiratoria progresiva y reducción marcada de la ingesta o la diuresis.",
  gpc: {
    mexico: "Guías de Práctica Clínica de México: seguimiento y criterios de referencia en bronquiolitis.",
    internacional: "NICE NG9. Bronchiolitis in children: diagnosis and management."
  },
  bibliografia: "NICE NG9; AAP Clinical Practice Guideline on Bronchiolitis."
},

{
  id: "PED-241",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Insuficiencia respiratoria aguda",
  dificultad: "Alta",
  caso: `Lactante de 3 meses con bronquiolitis por VSR presenta incremento progresivo del trabajo respiratorio durante las últimas 6 horas. A la exploración tiene frecuencia respiratoria de 72/min, retracciones supraesternales e intercostales, quejido espiratorio y saturación de 88% al aire ambiente. Está irritable y acepta menos del 25% de la alimentación habitual.`,
  pregunta: "¿Cuál es la conducta inicial más apropiada?",
  opciones: [
    "Administrar salbutamol y reevaluar al día siguiente",
    "Indicar egreso con vigilancia domiciliaria",
    "Iniciar antibiótico oral como única intervención",
    "Proporcionar estabilización inmediata, oxígeno suplementario y valoración urgente del soporte respiratorio",
    "Solicitar radiografía antes de iniciar cualquier intervención"
  ],
  respuestaCorrecta: 3,
  explicacion: `El paciente presenta hipoxemia y dificultad respiratoria grave, por lo que requiere estabilización inmediata. Debe asegurarse la permeabilidad de la vía aérea, iniciar oxígeno y monitorizar estrechamente el estado respiratorio, hemodinámico y de hidratación. Si persisten la hipoxemia o el agotamiento, puede requerir soporte respiratorio avanzado. Los estudios complementarios no deben retrasar la estabilización.`,
  perlaENARM: "Hipoxemia, quejido, retracciones intensas y deterioro de la alimentación indican bronquiolitis grave; estabiliza primero y estudia después.",
  gpc: {
    mexico: "Guías de Práctica Clínica de México: manejo y criterios de referencia de bronquiolitis grave.",
    internacional: "NICE NG9. Bronchiolitis in children: diagnosis and management; AAP Clinical Practice Guideline on Bronchiolitis."
  },
  bibliografia: "NICE NG9; AAP Clinical Practice Guideline on Bronchiolitis."
},
{
  id: "PED-242",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Cánula nasal de alto flujo",
  dificultad: "Alta",
  caso: `Lactante de 5 meses hospitalizado por bronquiolitis presenta hipoxemia persistente y trabajo respiratorio moderado pese a oxígeno convencional. Se encuentra hemodinámicamente estable, sin apnea ni alteración del estado de conciencia. El equipo dispone de cánula nasal de alto flujo y monitorización continua.`,
  pregunta: "¿Cuál es el papel de la cánula nasal de alto flujo en este contexto?",
  opciones: [
    "Puede considerarse como escalamiento del soporte en pacientes seleccionados con dificultad respiratoria o hipoxemia persistente, con vigilancia de la respuesta",
    "Debe utilizarse en todos los lactantes con bronquiolitis leve",
    "Sustituye la evaluación clínica y permite retirar la monitorización",
    "Está indicada únicamente cuando se confirma una infección bacteriana",
    "Es equivalente a la ventilación invasiva en cualquier grado de insuficiencia respiratoria"
  ],
  respuestaCorrecta: 0,
  explicacion: `La cánula nasal de alto flujo puede mejorar la oxigenación y reducir el trabajo respiratorio en pacientes seleccionados que no responden adecuadamente al oxígeno convencional. No se recomienda de manera universal en bronquiolitis leve. Debe reevaluarse de forma frecuente; la persistencia del deterioro, la apnea, el agotamiento o la inestabilidad hemodinámica obligan a escalar el soporte sin demora.`,
  perlaENARM: "El alto flujo es una opción de escalamiento en pacientes seleccionados; nunca debe retrasar la ventilación no invasiva o invasiva cuando existe fracaso respiratorio.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente y los protocolos institucionales de soporte respiratorio en bronquiolitis grave.",
    internacional: "NICE NG9; evidencia clínica sobre cánula nasal de alto flujo en bronquiolitis pediátrica."
  },
  bibliografia: "NICE NG9; Franklin D et al. A Randomized Trial of High-Flow Oxygen Therapy in Infants with Bronchiolitis. New England Journal of Medicine. 2018."
},
{
  id: "PED-243",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Indicaciones de ventilación invasiva",
  dificultad: "Alta",
  caso: `Lactante de 4 meses con bronquiolitis grave presenta pausas de apnea recurrentes, disminución progresiva del esfuerzo respiratorio, respuesta lenta a estímulos y agotamiento. A pesar del soporte respiratorio inicial, mantiene hipoxemia y muestra deterioro clínico.`,
  pregunta: "¿Qué hallazgo constituye una indicación importante para valorar intubación endotraqueal y ventilación mecánica invasiva?",
  opciones: [
    "Tos persistente sin hipoxemia",
    "Rinorrea abundante con alimentación conservada",
    "Sibilancias aisladas con estado general normal",
    "Fiebre baja durante las primeras 48 horas",
    "Apnea recurrente, agotamiento o fracaso para mantener una oxigenación y ventilación adecuadas"
  ],
  respuestaCorrecta: 4,
  explicacion: `La ventilación invasiva se considera ante fracaso respiratorio, apnea recurrente significativa, agotamiento, alteración del estado de conciencia o incapacidad para mantener una oxigenación y ventilación adecuadas con medidas menos invasivas. La decisión debe basarse en la evolución clínica integral, no en un único valor aislado.`,
  perlaENARM: "La disminución del esfuerzo respiratorio no siempre significa mejoría: en un lactante agotado puede anunciar fracaso respiratorio inminente.",
  gpc: {
    mexico: "Guías de Práctica Clínica de México: manejo de bronquiolitis grave y referencia a cuidados intensivos pediátricos.",
    internacional: "NICE NG9; recomendaciones de soporte respiratorio pediátrico en insuficiencia respiratoria aguda."
  },
  bibliografia: "NICE NG9; Kneyber MCJ et al. Recommendations for mechanical ventilation of critically ill children."
},
{
  id: "PED-244",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Bronquiolitis en pacientes con cardiopatía congénita",
  dificultad: "Alta",
  caso: `Lactante de 4 meses con cardiopatía congénita hemodinámicamente significativa presenta bronquiolitis con taquipnea, retracciones y saturación de 91% al aire ambiente. Su alimentación ha disminuido y los padres refieren menor tolerancia al esfuerzo. No se cuenta con su saturación basal habitual.`,
  pregunta: "¿Qué aspecto debe modificar especialmente la valoración y el plan de manejo?",
  opciones: [
    "La cardiopatía no cambia el riesgo si el paciente tiene menos de 1 año",
    "La cardiopatía significativa aumenta el riesgo de evolución grave y exige valorar oxigenación basal, perfusión, hidratación y necesidad de hospitalización",
    "Debe administrarse diurético a todos los lactantes con bronquiolitis",
    "Se deben evitar todos los líquidos, independientemente del estado de hidratación",
    "El tratamiento de elección es un corticoide sistémico"
  ],
  respuestaCorrecta: 1,
  explicacion: `Las cardiopatías congénitas hemodinámicamente significativas aumentan el riesgo de complicaciones por bronquiolitis. Es importante integrar la saturación basal, el estado hemodinámico, los signos de congestión, la perfusión y la capacidad para alimentarse. Las decisiones sobre oxígeno y líquidos deben individualizarse, sin indicar diuréticos o restricción hídrica de manera automática.`,
  perlaENARM: "En cardiopatía congénita, interpreta la saturación respecto al valor basal y evalúa simultáneamente insuficiencia cardiaca, perfusión e hidratación.",
  gpc: {
    mexico: "Guías de Práctica Clínica de México: bronquiolitis en pacientes con factores de riesgo.",
    internacional: "AAP. Clinical Practice Guideline on Bronchiolitis; NICE NG9."
  },
  bibliografia: "AAP Clinical Practice Guideline on Bronchiolitis; NICE NG9."
},
{
  id: "PED-245",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Diagnóstico diferencial: neumonía bacteriana",
  dificultad: "Alta",
  caso: `Lactante de 8 meses con síntomas catarrales y sibilancias presenta fiebre de 39.5 °C, aspecto tóxico y estertores focales persistentes en la base pulmonar derecha. La saturación es de 92% al aire ambiente y el trabajo respiratorio ha aumentado. No hay respuesta clínica favorable durante la observación inicial.`,
  pregunta: "¿Qué diagnóstico alternativo o concomitante debe investigarse con mayor atención?",
  opciones: [
    "Bronquiolitis leve sin complicaciones",
    "Rinitis alérgica aislada",
    "Neumonía bacteriana concomitante",
    "Reflujo gastroesofágico fisiológico",
    "Laringotraqueítis no complicada"
  ],
  respuestaCorrecta: 2,
  explicacion: `La fiebre alta, el aspecto tóxico, los hallazgos auscultatorios focales persistentes y el deterioro clínico justifican considerar neumonía bacteriana u otra infección concomitante. En estos casos pueden estar indicados estudios dirigidos, como radiografía de tórax y pruebas de laboratorio según la gravedad. La presencia de bronquiolitis no excluye otra enfermedad.`,
  perlaENARM: "Fiebre alta, toxicidad sistémica y hallazgos focales persistentes son señales para reconsiderar bronquiolitis aislada y buscar neumonía u otra infección.",
  gpc: {
    mexico: "Guías de Práctica Clínica de México: diagnóstico diferencial de bronquiolitis y neumonía adquirida en la comunidad.",
    internacional: "AAP. Clinical Practice Guideline on Bronchiolitis; guías PIDS/IDSA para neumonía adquirida en la comunidad pediátrica."
  },
  bibliografia: "AAP Clinical Practice Guideline on Bronchiolitis; PIDS/IDSA. Clinical Practice Guidelines for Pediatric Community-Acquired Pneumonia."
},
{
  id: "PED-246",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Alteraciones ácido-base",
  dificultad: "Alta",
  caso: `Lactante de 3 meses con bronquiolitis grave presenta taquipnea intensa y aumento progresivo del trabajo respiratorio. En una gasometría arterial se reportan pH de 7.28, PaCO2 de 58 mmHg y bicarbonato de 26 mEq/L. El niño comienza a mostrar menor actividad y respiración menos vigorosa.`,
  pregunta: "¿Cuál es la alteración ácido-base predominante?",
  opciones: [
    "Acidosis respiratoria por retención de dióxido de carbono",
    "Alcalosis respiratoria aguda",
    "Acidosis metabólica con compensación respiratoria completa",
    "Alcalosis metabólica con hipoventilación compensadora",
    "Trastorno mixto de alcalosis respiratoria y metabólica"
  ],
  respuestaCorrecta: 0,
  explicacion: `El pH bajo indica acidemia y la PaCO2 elevada identifica un componente respiratorio primario. El bicarbonato cercano al rango normal sugiere un trastorno respiratorio agudo con compensación metabólica limitada. En el contexto clínico, la hipercapnia y la disminución del esfuerzo respiratorio pueden indicar fatiga ventilatoria y requieren reevaluación urgente del soporte respiratorio.`,
  perlaENARM: "En bronquiolitis grave, una PaCO2 ascendente acompañada de agotamiento es preocupante; la reducción de la taquipnea puede reflejar fracaso y no recuperación.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para insuficiencia respiratoria pediátrica y bronquiolitis grave.",
    internacional: "NICE NG9; recomendaciones de cuidados intensivos pediátricos para insuficiencia respiratoria aguda."
  },
  bibliografia: "Harrison. Principios de Medicina Interna, 19.ª ed.; textos de fisiología ácido-base y cuidados intensivos pediátricos."
},
{
  id: "PED-247",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Apnea asociada a infección por VSR",
  dificultad: "Alta",
  caso: `Lactante de 6 semanas, nacido a término, acude por rinorrea y dificultad para alimentarse. Durante la valoración presenta un episodio de apnea con desaturación y recuperación espontánea. Después del evento parece relativamente cómodo, con tiraje mínimo y saturación de 95% al aire ambiente.`,
  pregunta: "¿Por qué no debe considerarse tranquilizadora la exploración respiratoria posterior al episodio?",
  opciones: [
    "Porque la apnea siempre indica una cardiopatía estructural",
    "Porque la saturación normal descarta cualquier enfermedad respiratoria",
    "Porque los lactantes con bronquiolitis siempre requieren intubación",
    "Porque la apnea solo ocurre después de una sobredosis de broncodilatadores",
    "Porque los lactantes pequeños pueden presentar apnea como manifestación relevante aun sin dificultad respiratoria intensa entre episodios"
  ],
  respuestaCorrecta: 4,
  explicacion: `En lactantes pequeños, especialmente durante las primeras semanas de vida, la bronquiolitis puede asociarse con apnea, que puede preceder a un deterioro clínico evidente. La mejoría aparente entre episodios no elimina el riesgo. Se requiere valoración hospitalaria, monitorización y búsqueda de otras causas de apnea según la historia clínica y la exploración.`,
  perlaENARM: "En un lactante pequeño, la apnea puede ser la manifestación predominante de una infección viral respiratoria; no la descartes por una saturación normal entre episodios.",
  gpc: {
    mexico: "Guías de Práctica Clínica de México: criterios de hospitalización y vigilancia de lactantes con bronquiolitis.",
    internacional: "NICE NG9; AAP Clinical Practice Guideline on Bronchiolitis."
  },
  bibliografia: "NICE NG9; AAP Clinical Practice Guideline on Bronchiolitis."
},
{
  id: "PED-248",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Hidratación y riesgo de aspiración",
  dificultad: "Alta",
  caso: `Lactante de 5 meses con bronquiolitis presenta frecuencia respiratoria de 68/min, retracciones moderadas y fatiga durante las tomas. Tose repetidamente al intentar beber y ha disminuido la diuresis. Se encuentra despierto, con perfusión periférica conservada y sin datos de choque.`,
  pregunta: "¿Cuál es la estrategia más segura para abordar la hidratación en este momento?",
  opciones: [
    "Forzar tomas orales frecuentes para evitar cualquier intervención enteral",
    "Valorar la seguridad de la alimentación y proporcionar hidratación enteral por sonda o intravenosa según el compromiso respiratorio y la tolerancia",
    "Restringir todos los líquidos hasta que desaparezcan las sibilancias",
    "Administrar únicamente soluciones azucaradas por vía oral",
    "Indicar diuréticos para reducir las secreciones bronquiales"
  ],
  respuestaCorrecta: 1,
  explicacion: `La taquipnea importante, la fatiga y la tos durante las tomas aumentan el riesgo de alimentación insegura y aspiración. Debe evaluarse la capacidad para alimentarse y la gravedad respiratoria. Si la vía oral no es segura o suficiente, puede utilizarse hidratación por sonda si se tolera, o líquidos intravenosos isotónicos cuando el estado respiratorio impida la vía enteral o exista otra indicación clínica.`,
  perlaENARM: "No fuerces la alimentación oral en un lactante con dificultad respiratoria importante; individualiza la vía de hidratación según seguridad, tolerancia y gravedad.",
  gpc: {
    mexico: "Guías de Práctica Clínica de México: hidratación y alimentación en bronquiolitis.",
    internacional: "NICE NG9. Bronchiolitis in children: diagnosis and management."
  },
  bibliografia: "NICE NG9; AAP Clinical Practice Guideline on Bronchiolitis."
},
{
  id: "PED-249",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Interpretación de la saturación de oxígeno",
  dificultad: "Alta",
  caso: `Lactante de 7 meses con bronquiolitis está despierto, sin retracciones importantes y con alimentación adecuada. El oxímetro registra 89% durante unos segundos mientras el niño se mueve; inmediatamente después, con una señal de buena calidad y en reposo, la saturación es de 94%. No tiene cardiopatía ni enfermedad pulmonar crónica.`,
  pregunta: "¿Qué debe hacerse antes de tomar una decisión terapéutica basada en la primera lectura?",
  opciones: [
    "Iniciar ventilación mecánica invasiva",
    "Indicar antibióticos de amplio espectro",
    "Confirmar una lectura fiable y persistente, integrándola con el estado clínico y la calidad de la señal",
    "Solicitar una tomografía torácica urgente",
    "Administrar diuréticos para corregir la desaturación"
  ],
  respuestaCorrecta: 2,
  explicacion: `La oximetría puede verse afectada por movimiento, mala perfusión, colocación incorrecta del sensor y otros artefactos. Una lectura aislada y transitoria debe interpretarse según la calidad de la señal y confirmarse cuando el estado clínico lo permita. La hipoxemia persistente y la dificultad respiratoria sí requieren intervención; no debe ignorarse una lectura baja fiable en un paciente clínicamente deteriorado.`,
  perlaENARM: "Distingue una desaturación transitoria por artefacto de la hipoxemia persistente; nunca interpretes el número sin valorar señal y paciente.",
  gpc: {
    mexico: "Guías de Práctica Clínica de México: oxigenoterapia y monitorización en bronquiolitis.",
    internacional: "NICE NG9; AAP Clinical Practice Guideline on Bronchiolitis."
  },
  bibliografia: "NICE NG9; AAP Clinical Practice Guideline on Bronchiolitis."
},
{
  id: "PED-250",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Prevención de transmisión intrahospitalaria",
  dificultad: "Alta",
  caso: `En una sala pediátrica se hospitaliza un lactante con bronquiolitis confirmada por VSR. Comparte área con otros lactantes, incluidos prematuros y pacientes con cardiopatías congénitas. El personal pregunta qué medidas son importantes para disminuir la transmisión del virus.`,
  pregunta: "¿Cuál es el conjunto de medidas más apropiado?",
  opciones: [
    "Higiene de manos rigurosa, precauciones de contacto y medidas adicionales según el protocolo institucional para infecciones respiratorias",
    "Profilaxis antibiótica para todos los pacientes expuestos",
    "Suspender toda limpieza ambiental durante la estancia",
    "Mantener al lactante en contacto directo con otros pacientes para generar inmunidad",
    "Administrar salbutamol a los contactos asintomáticos"
  ],
  respuestaCorrecta: 0,
  explicacion: `El VSR se transmite principalmente mediante secreciones respiratorias y contacto con superficies contaminadas. La higiene de manos, las precauciones de contacto, el equipo de protección indicado por el protocolo local y la limpieza de superficies son medidas fundamentales. La organización de cohortes y las precauciones adicionales deben seguir las normas de control de infecciones del hospital.`,
  perlaENARM: "Para prevenir transmisión intrahospitalaria del VSR: higiene de manos, precauciones de contacto y limpieza ambiental; los antibióticos no tienen función profiláctica rutinaria.",
  gpc: {
    mexico: "Lineamientos mexicanos vigentes de prevención y control de infecciones asociadas a la atención sanitaria.",
    internacional: "CDC. Infection Control Guidance for Respiratory Syncytial Virus."
  },
  bibliografia: "CDC. Infection Control Guidance for Respiratory Syncytial Virus; AAP Red Book."
},

{
  id: "PED-251",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Diagnóstico diferencial: insuficiencia cardiaca",
  dificultad: "Muy alta",
  caso: `Lactante de 4 meses con antecedente de comunicación interventricular amplia presenta tos, taquipnea y dificultad para alimentarse durante una infección respiratoria. A la exploración tiene frecuencia cardiaca de 178/min, frecuencia respiratoria de 66/min, hepatomegalia de 3 cm por debajo del reborde costal y estertores bilaterales. La radiografía muestra cardiomegalia y aumento de la vascularidad pulmonar. La madre refiere diaforesis durante las tomas desde hace varias semanas.`,
  pregunta: "¿Qué elemento clínico favorece que exista insuficiencia cardiaca concomitante y no únicamente bronquiolitis?",
  opciones: [
    "La presencia de rinorrea previa",
    "Las sibilancias bilaterales",
    "La tos de predominio nocturno",
    "La hepatomegalia asociada con diaforesis durante la alimentación y cardiomegalia",
    "La edad menor de 6 meses"
  ],
  respuestaCorrecta: 3,
  explicacion: `La bronquiolitis puede producir taquipnea, estertores y dificultad para alimentarse; sin embargo, la hepatomegalia, la diaforesis durante las tomas y la cardiomegalia con congestión vascular pulmonar sugieren insuficiencia cardiaca. Ambas enfermedades pueden coexistir. La valoración debe integrar perfusión, pulsos, hepatomegalia, evolución previa, saturación basal y ecocardiografía cuando esté indicada. El tratamiento hídrico y respiratorio debe individualizarse.`,
  perlaENARM: "En un lactante con cardiopatía, hepatomegalia y diaforesis durante las tomas son datos orientadores de insuficiencia cardiaca; no atribuyas toda taquipnea a bronquiolitis.",
  gpc: {
    mexico: "Consultar GPC mexicanas vigentes de insuficiencia cardiaca pediátrica y bronquiolitis.",
    internacional: "AAP Clinical Practice Guideline on Bronchiolitis; guías internacionales de insuficiencia cardiaca pediátrica."
  },
  bibliografia: "Harrison. Principios de Medicina Interna, 19.ª ed.; AAP Clinical Practice Guideline on Bronchiolitis."
},
{
  id: "PED-252",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Coinfección bacteriana en pacientes críticos",
  dificultad: "Muy alta",
  caso: `Lactante de 2 meses con bronquiolitis grave por VSR requiere intubación por apnea recurrente e insuficiencia respiratoria. Durante las siguientes horas desarrolla temperatura de 39.4 °C, hipotensión, llenado capilar de 4 segundos y elevación del lactato. La biometría hemática muestra leucocitosis con neutrofilia.`,
  pregunta: "¿Qué estrategia permite abordar adecuadamente la posibilidad de una infección bacteriana invasiva sin asumir que todo paciente con VSR la presenta?",
  opciones: [
    "Atribuir la fiebre a la infección viral y evitar estudios microbiológicos",
    "Iniciar únicamente corticoides sistémicos",
    "Solicitar exclusivamente una prueba molecular para VSR",
    "Esperar el resultado de todos los cultivos antes de tratar la inestabilidad",
    "Obtener cultivos y estudios dirigidos sin retrasar el tratamiento empírico indicado ante sospecha de sepsis"
  ],
  respuestaCorrecta: 4,
  explicacion: `La coinfección bacteriana invasiva no es universal en bronquiolitis, pero la fiebre alta, la hipoperfusión y la inestabilidad hemodinámica obligan a evaluar sepsis. Deben obtenerse hemocultivos y otros estudios según la edad, los hallazgos y los posibles focos, sin retrasar el tratamiento antimicrobiano cuando existe sospecha clínica de sepsis. La selección de antibióticos depende de la edad, el contexto epidemiológico y los protocolos locales.`,
  perlaENARM: "Un resultado positivo para VSR no excluye sepsis bacteriana. En un lactante inestable, cultiva cuando sea posible y no retrases el tratamiento urgente.",
  gpc: {
    mexico: "GPC mexicanas vigentes de sepsis pediátrica e infección bacteriana invasiva en lactantes.",
    internacional: "Surviving Sepsis Campaign: International Guidelines for the Management of Septic Shock and Sepsis-Associated Organ Dysfunction in Children; NICE NG9."
  },
  bibliografia: "Surviving Sepsis Campaign, guías pediátricas internacionales; NICE NG9."
},
{
  id: "PED-253",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Hiponatremia y alteraciones del balance hídrico",
  dificultad: "Muy alta",
  caso: `Lactante de 6 meses hospitalizado por bronquiolitis grave recibe líquidos hipotónicos de mantenimiento durante 24 horas. Presenta irritabilidad, vómitos y un episodio convulsivo. La concentración sérica de sodio es de 119 mEq/L, la glucosa es normal y no hay datos evidentes de choque. La diuresis ha disminuido y el peso aumentó respecto al ingreso.`,
  pregunta: "¿Qué mecanismo puede contribuir a la hiponatremia en este contexto?",
  opciones: [
    "Pérdida renal aislada de bicarbonato por alcalosis metabólica",
    "Liberación no osmótica de hormona antidiurética durante la enfermedad respiratoria, agravada por aporte de líquidos hipotónicos",
    "Producción excesiva de aldosterona con retención selectiva de agua libre",
    "Hipernatremia secundaria a pérdidas insensibles",
    "Déficit aislado de hormona paratiroidea"
  ],
  respuestaCorrecta: 1,
  explicacion: `La enfermedad pulmonar aguda, el estrés y la hipoxemia pueden estimular la liberación no osmótica de hormona antidiurética, disminuyendo la excreción de agua libre. La administración de líquidos hipotónicos puede agravar la hiponatremia. Una convulsión con hiponatremia grave constituye una urgencia: se requiere tratamiento inmediato con solución salina hipertónica según protocolo, monitorización estrecha del sodio y prevención de una corrección excesivamente rápida.`,
  perlaENARM: "Bronquiolitis grave más hiponatremia sintomática: considera exceso relativo de agua por ADH; las convulsiones requieren corrección urgente y monitorizada.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de hiponatremia pediátrica aguda y fluidoterapia hospitalaria.",
    internacional: "NICE. Intravenous fluid therapy in children and young people in hospital; guías pediátricas de tratamiento de hiponatremia aguda."
  },
  bibliografia: "NICE: Intravenous fluid therapy in children and young people in hospital; textos de fisiología ácido-base y electrolitos."
},
{
  id: "PED-254",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Fracaso de cánula nasal de alto flujo",
  dificultad: "Muy alta",
  caso: `Lactante de 7 meses con bronquiolitis grave recibe cánula nasal de alto flujo. Tras 90 minutos persisten retracciones intensas, taquipnea de 74/min y necesidad creciente de oxígeno. Está cada vez menos reactivo y la gasometría muestra pH de 7.24 y PaCO2 de 64 mmHg. La presión arterial se mantiene inicialmente dentro del rango esperado para la edad.`,
  pregunta: "¿Qué conducta evita el retraso peligroso del soporte respiratorio definitivo?",
  opciones: [
    "Mantener el mismo flujo durante otras 12 horas sin reevaluación",
    "Suspender el oxígeno porque la PaCO2 está elevada",
    "Reevaluar de inmediato y escalar el soporte respiratorio, considerando ventilación avanzada por fracaso clínico",
    "Administrar un antitusígeno para disminuir el trabajo respiratorio",
    "Iniciar antibióticos y posponer la valoración respiratoria"
  ],
  respuestaCorrecta: 2,
  explicacion: `El deterioro del estado de alerta, la acidosis respiratoria, la hipercapnia progresiva y el trabajo respiratorio persistente indican fracaso del soporte actual. Se requiere evaluación urgente por un equipo con experiencia en cuidados intensivos pediátricos y preparación para ventilación no invasiva o invasiva según la estabilidad y el riesgo de pérdida de la vía aérea. No debe prolongarse un ensayo de alto flujo cuando existen signos de agotamiento.`,
  perlaENARM: "El alto flujo requiere reevaluación temprana. Hipercapnia progresiva, acidosis y alteración neurológica son señales de fracaso, aunque la presión arterial siga conservada.",
  gpc: {
    mexico: "Protocolos mexicanos vigentes de insuficiencia respiratoria aguda y cuidados intensivos pediátricos.",
    internacional: "NICE NG9; recomendaciones internacionales de soporte respiratorio pediátrico."
  },
  bibliografia: "Franklin D et al. A Randomized Trial of High-Flow Oxygen Therapy in Infants with Bronchiolitis. New England Journal of Medicine. 2018; NICE NG9."
},
{
  id: "PED-255",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Apnea: diagnóstico diferencial y evaluación",
  dificultad: "Muy alta",
  caso: `Lactante de 5 semanas presenta episodios de apnea y cianosis durante una infección respiratoria leve. La madre refiere que la tos ha ocurrido en accesos repetidos y que un hermano adolescente lleva tres semanas con tos paroxística. El lactante no tiene fiebre y la auscultación pulmonar muestra pocos hallazgos.`,
  pregunta: "Además de valorar la bronquiolitis, ¿qué etiología debe investigarse de forma prioritaria?",
  opciones: [
    "Tosferina por Bordetella pertussis",
    "Asma alérgica persistente",
    "Neumonía por aspiración crónica como diagnóstico único",
    "Fibrosis pulmonar idiopática",
    "Crup viral clásico"
  ],
  respuestaCorrecta: 0,
  explicacion: `La tosferina puede presentarse en lactantes pequeños con apnea, cianosis y escasa o nula fiebre, incluso antes de que aparezca el patrón clásico de tos paroxística. El contacto domiciliario con tos prolongada aumenta la sospecha. Se requiere evaluación urgente, medidas de aislamiento y pruebas diagnósticas apropiadas, habitualmente PCR nasofaríngea según el tiempo de evolución y los protocolos locales. La sospecha clínica puede justificar tratamiento y medidas de salud pública sin esperar el resultado en un lactante de alto riesgo.`,
  perlaENARM: "Apnea en un lactante pequeño, tos paroxística en convivientes y ausencia de fiebre obligan a considerar tosferina, aunque la exploración pulmonar sea poco llamativa.",
  gpc: {
    mexico: "GPC mexicanas vigentes de tosferina y manejo de infecciones respiratorias en lactantes pequeños.",
    internacional: "CDC. Clinical Features and Diagnosis of Pertussis; recomendaciones internacionales de manejo de tosferina."
  },
  bibliografia: "CDC. Clinical Features and Diagnosis of Pertussis; AAP Red Book."
},
{
  id: "PED-256",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Interpretación de atelectasias y uso de antibióticos",
  dificultad: "Muy alta",
  caso: `Lactante de 9 meses con bronquiolitis presenta hipoxemia moderada. La radiografía solicitada por deterioro respiratorio muestra hiperinsuflación y una opacidad lineal en el lóbulo medio, compatible con atelectasia subsegmentaria. La temperatura máxima es de 38.1 °C, no hay toxicidad sistémica y los hallazgos auscultatorios son difusos.`,
  pregunta: "¿Qué interpretación evita el tratamiento antibiótico innecesario?",
  opciones: [
    "Toda opacidad radiográfica en bronquiolitis demuestra neumonía bacteriana",
    "La atelectasia confirma infección por neumococo",
    "La ausencia de fiebre excluye cualquier complicación",
    "La atelectasia puede ser consecuencia de obstrucción bronquiolar y no justifica antibióticos por sí sola",
    "Debe administrarse antibiótico profiláctico para prevenir empiema"
  ],
  respuestaCorrecta: 3,
  explicacion: `La obstrucción por moco, edema y detritos puede provocar atrapamiento aéreo y atelectasias en la bronquiolitis. Una opacidad lineal o subsegmentaria sin otros datos que sustenten infección bacteriana no constituye por sí sola indicación de antibióticos. La decisión debe integrar fiebre, estado general, evolución, focalidad clínica y otros hallazgos. La radiografía de rutina puede favorecer errores diagnósticos cuando no está indicada.`,
  perlaENARM: "En bronquiolitis, las atelectasias radiográficas pueden simular consolidación; no prescribas antibióticos por una imagen aislada.",
  gpc: {
    mexico: "GPC mexicanas vigentes de bronquiolitis y neumonía adquirida en la comunidad pediátrica.",
    internacional: "AAP Clinical Practice Guideline on Bronchiolitis; guías PIDS/IDSA de neumonía pediátrica."
  },
  bibliografia: "AAP Clinical Practice Guideline on Bronchiolitis; PIDS/IDSA Pediatric Community-Acquired Pneumonia Guidelines."
},
{
  id: "PED-257",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Bronquiolitis en enfermedad neuromuscular",
  dificultad: "Muy alta",
  caso: `Lactante de 10 meses con enfermedad neuromuscular y tos basal débil presenta bronquiolitis. Tiene secreciones abundantes, tos ineficaz, dificultad para eliminar secreciones y episodios de desaturación. La frecuencia respiratoria aumenta, pero el tiraje no es intenso; posteriormente se observa menor interacción con sus cuidadores.`,
  pregunta: "¿Qué particularidad debe considerarse al valorar la gravedad respiratoria?",
  opciones: [
    "La ausencia de tiraje intenso descarta insuficiencia respiratoria",
    "La enfermedad neuromuscular puede limitar la tos y la ventilación, por lo que el deterioro puede ser importante aun sin signos clásicos llamativos",
    "La bronquiolitis no produce complicaciones en pacientes neuromusculares",
    "Las secreciones deben tratarse exclusivamente con antibióticos",
    "La menor interacción es un dato irrelevante si no hay fiebre"
  ],
  respuestaCorrecta: 1,
  explicacion: `Las enfermedades neuromusculares pueden reducir la fuerza de la tos, el aclaramiento de secreciones y la reserva ventilatoria. Por ello, los signos externos de trabajo respiratorio pueden subestimar la gravedad. La disminución de la interacción, la tos ineficaz, las desaturaciones y la dificultad para manejar secreciones requieren evaluación urgente, vigilancia estrecha y planificación individualizada del soporte respiratorio y la asistencia para eliminación de secreciones.`,
  perlaENARM: "En enfermedad neuromuscular, una tos débil y menor interacción pueden preceder a signos respiratorios clásicos; no uses la intensidad del tiraje como único marcador.",
  gpc: {
    mexico: "Consultar GPC mexicanas vigentes de insuficiencia respiratoria pediátrica y atención de pacientes con enfermedades neuromusculares.",
    internacional: "NICE NG9; guías internacionales de manejo respiratorio en enfermedades neuromusculares pediátricas."
  },
  bibliografia: "NICE NG9; recomendaciones internacionales de soporte respiratorio pediátrico en enfermedad neuromuscular."
},
{
  id: "PED-258",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Prevención con anticuerpos monoclonales frente al VSR",
  dificultad: "Muy alta",
  caso: `Lactante de 2 meses, nacido a término, acude a control antes de la temporada de circulación del VSR. Su madre recibió una vacuna contra VSR durante el embarazo, pero no recuerda la fecha exacta. El equipo debe decidir si el lactante requiere inmunización preventiva con un anticuerpo monoclonal de acción prolongada según las recomendaciones disponibles.`,
  pregunta: "¿Qué información resulta esencial para individualizar la prevención?",
  opciones: [
    "La confirmación de una bronquiolitis previa, porque la prevención solo se indica después de una infección",
    "La administración simultánea de antibióticos profilácticos",
    "La fecha y oportunidad de la vacunación materna, la edad del lactante, la temporada epidemiológica y las recomendaciones nacionales vigentes",
    "El grupo sanguíneo del lactante como principal determinante de elegibilidad",
    "La necesidad de demostrar anticuerpos contra VSR mediante pruebas rutinarias antes de cualquier decisión"
  ],
  respuestaCorrecta: 2,
  explicacion: `La prevención de enfermedad grave por VSR puede incluir vacunación materna durante el embarazo o un anticuerpo monoclonal de acción prolongada para el lactante, según las recomendaciones y la disponibilidad. En muchos lineamientos internacionales, la mayoría de los lactantes no necesita ambas estrategias de rutina, aunque existen situaciones especiales. La decisión depende de la oportunidad de la vacunación materna, la edad, la temporada, los factores de riesgo y las normas nacionales vigentes.`,
  perlaENARM: "La prevención frente al VSR debe seguir los lineamientos vigentes: documenta vacunación materna, oportunidad de administración y elegibilidad del lactante; no solicites serología rutinaria para decidir.",
  gpc: {
    mexico: "Verificar los lineamientos nacionales mexicanos vigentes de prevención de infección por VSR y disponibilidad de inmunización materna o infantil.",
    internacional: "CDC. RSV Immunization Guidance for Infants and Young Children; recomendaciones internacionales sobre vacunación materna y nirsevimab."
  },
  bibliografia: "CDC. RSV Immunization Guidance for Infants and Young Children; AAP Red Book."
},
{
  id: "PED-259",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Alta hospitalaria en lactantes con factores de riesgo",
  dificultad: "Muy alta",
  caso: `Lactante de 7 semanas, prematuro de 32 semanas, hospitalizado por bronquiolitis. Después de 36 horas ya no requiere oxígeno, mantiene saturación estable durante la observación, presenta menor trabajo respiratorio y recuperó cerca del 80% de la ingesta habitual. No ha tenido apnea durante las últimas 24 horas. Sus padres viven a dos horas del hospital y tienen dificultades para regresar de inmediato si empeora.`,
  pregunta: "¿Qué factor debe incorporarse explícitamente a la decisión de egreso?",
  opciones: [
    "La posibilidad real de vigilancia domiciliaria, comprensión de signos de alarma y acceso oportuno a atención médica, además de la estabilidad clínica",
    "La obligación de mantener hospitalizado a todo prematuro hasta que desaparezca la tos",
    "La necesidad de una radiografía normal antes del alta en todos los casos",
    "La indicación de antibióticos profilácticos por la prematuridad",
    "La administración de salbutamol domiciliario como requisito de egreso"
  ],
  respuestaCorrecta: 0,
  explicacion: `La decisión de egreso requiere estabilidad clínica, oxigenación adecuada, alimentación e hidratación suficientes y ausencia de episodios preocupantes durante el periodo de observación. También debe evaluarse la capacidad de los cuidadores para reconocer el deterioro y obtener atención oportuna. La prematuridad y la corta edad aumentan el riesgo, por lo que pueden justificar un periodo de vigilancia más prolongado según la evolución y el protocolo local.`,
  perlaENARM: "El alta no depende solo de los parámetros fisiológicos: integra edad, prematuridad, estabilidad sostenida, alimentación y posibilidad real de regresar a atención urgente.",
  gpc: {
    mexico: "GPC mexicanas vigentes de bronquiolitis: criterios de hospitalización, egreso y seguimiento.",
    internacional: "NICE NG9. Bronchiolitis in children: diagnosis and management."
  },
  bibliografia: "NICE NG9; AAP Clinical Practice Guideline on Bronchiolitis."
},
{
  id: "PED-260",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Persistencia de síntomas y reconsideración diagnóstica",
  dificultad: "Muy alta",
  caso: `Lactante de 11 meses tratado con medidas de soporte por un cuadro inicialmente compatible con bronquiolitis. Tras 12 días persisten tos intensa y taquipnea, presenta pérdida de peso y episodios repetidos de tos durante la alimentación. La auscultación muestra estertores persistentes y no hay una tendencia clara a la mejoría. Los cuidadores refieren episodios similares desde los primeros meses de vida.`,
  pregunta: "¿Qué aspecto de la evolución obliga a ampliar el diagnóstico diferencial?",
  opciones: [
    "La persistencia de rinorrea aislada durante unos días",
    "La presencia de tos leve durante la recuperación",
    "La edad menor de 2 años, que confirma bronquiolitis sin necesidad de reevaluación",
    "La falta de mejoría, los síntomas recurrentes, la pérdida de peso y la asociación con la alimentación, que obligan a investigar otras causas",
    "La ausencia de fiebre, que descarta enfermedades pulmonares crónicas"
  ],
  respuestaCorrecta: 3,
  explicacion: `Aunque la tos puede persistir después de una bronquiolitis, la evolución prolongada sin mejoría, la pérdida de peso, los episodios recurrentes y la tos relacionada con la alimentación sugieren diagnósticos alternativos o concomitantes. Deben considerarse aspiración, alteraciones de la deglución, anomalías anatómicas, enfermedad pulmonar crónica, inmunodeficiencia u otras causas según los antecedentes y la exploración. Los estudios se seleccionan de forma dirigida.`,
  perlaENARM: "Una evolución atípica o recurrente no debe etiquetarse indefinidamente como bronquiolitis; la tos con alimentación y la falla para crecer orientan a aspiración u otra enfermedad subyacente.",
  gpc: {
    mexico: "GPC mexicanas vigentes de bronquiolitis, trastornos de deglución y evaluación de tos crónica pediátrica.",
    internacional: "NICE NG9; guías internacionales de evaluación de tos crónica y aspiración en pediatría."
  },
  bibliografia: "NICE NG9; textos de neumología pediátrica y evaluación de tos crónica infantil."
},

{
  id: "PED-261",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Diagnóstico diferencial: aspiración de cuerpo extraño",
  dificultad: "Muy alta",
  caso: `Lactante de 10 meses presenta tos y sibilancias de inicio súbito mientras comía trozos de fruta. No tenía síntomas catarrales previos. En urgencias persiste con tos, disminución unilateral de la entrada de aire y sibilancias predominantemente en el hemitórax derecho. La saturación es de 93% al aire ambiente y no presenta fiebre.`,
  pregunta: "¿Qué diagnóstico debe priorizarse ante este patrón de inicio y exploración?",
  opciones: [
    "Bronquiolitis por VSR",
    "Asma episódica viral",
    "Neumonía atípica",
    "Laringotraqueítis viral",
    "Aspiración de cuerpo extraño en la vía aérea"
  ],
  respuestaCorrecta: 4,
  explicacion: `El inicio súbito durante la alimentación, la ausencia de pródromo viral y la asimetría auscultatoria sugieren aspiración de cuerpo extraño. Una radiografía normal no la excluye, ya que muchos objetos son radiolúcidos. Si la sospecha clínica es significativa, se requiere valoración urgente por un equipo con experiencia en vía aérea y consideración de broncoscopia. La estabilización respiratoria tiene prioridad si existe obstrucción crítica.`,
  perlaENARM: "Sibilancias unilaterales de inicio súbito durante la alimentación o el juego: sospecha cuerpo extraño, incluso con radiografía normal.",
  gpc: {
    mexico: "Consultar GPC mexicanas vigentes para diagnóstico y tratamiento de aspiración de cuerpo extraño en pediatría.",
    internacional: "Royal Children's Hospital Melbourne. Clinical Practice Guidelines: Foreign bodies inhaled."
  },
  bibliografia: "Royal Children's Hospital Melbourne. Clinical Practice Guidelines: Foreign bodies inhaled; textos de urgencias pediátricas."
},
{
  id: "PED-262",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Bronquiolitis y displasia broncopulmonar",
  dificultad: "Muy alta",
  caso: `Lactante de 5 meses de edad cronológica, nacido a las 27 semanas y con antecedente de displasia broncopulmonar, presenta infección respiratoria por VSR. Su saturación basal domiciliaria es de 93-94% con oxígeno nocturno; ahora requiere oxígeno continuo, tiene retracciones y disminución de la ingesta. No presenta fiebre ni hipotensión.`,
  pregunta: "¿Qué principio debe guiar la interpretación de la oxigenación y la necesidad de ingreso?",
  opciones: [
    "La saturación basal reducida descarta una exacerbación respiratoria aguda",
    "Debe compararse con el estado basal y valorar el aumento del requerimiento de oxígeno, el trabajo respiratorio y la alimentación",
    "La ausencia de fiebre descarta bronquiolitis grave",
    "Debe retirarse el oxígeno para obtener una saturación basal real antes de decidir",
    "La displasia broncopulmonar contraindica cualquier soporte respiratorio"
  ],
  respuestaCorrecta: 1,
  explicacion: `La displasia broncopulmonar y la prematuridad disminuyen la reserva respiratoria y aumentan el riesgo de evolución grave. La evaluación debe comparar el requerimiento actual de oxígeno con el basal, además de integrar el trabajo respiratorio, la alimentación y el estado general. No debe retirarse un soporte necesario para realizar una medición basal. La decisión de ingreso y monitorización se individualiza según la evolución.`,
  perlaENARM: "En enfermedad pulmonar crónica, un aumento del requerimiento de oxígeno respecto al basal puede ser más informativo que una saturación aislada.",
  gpc: {
    mexico: "GPC mexicanas vigentes de bronquiolitis y seguimiento de prematuros con enfermedad pulmonar crónica.",
    internacional: "NICE NG9. Bronchiolitis in children: diagnosis and management; AAP Clinical Practice Guideline on Bronchiolitis."
  },
  bibliografia: "NICE NG9; AAP Clinical Practice Guideline on Bronchiolitis."
},
{
  id: "PED-263",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Bronquiolitis en inmunodeficiencia",
  dificultad: "Muy alta",
  caso: `Lactante de 8 meses con inmunodeficiencia combinada conocida presenta tos, taquipnea e hipoxemia progresiva. La prueba molecular respiratoria detecta VSR. A pesar del soporte inicial, empeora y desarrolla infiltrados pulmonares difusos. No hay respuesta clínica favorable y el equipo considera que la infección viral podría explicar todos los hallazgos.`,
  pregunta: "¿Qué consideración es fundamental en este paciente?",
  opciones: [
    "Un resultado positivo para VSR excluye cualquier infección concomitante",
    "Los infiltrados difusos demuestran exclusivamente infección bacteriana",
    "La inmunodeficiencia no modifica el riesgo de complicaciones por VSR",
    "Debe mantenerse un umbral bajo para investigar coinfecciones y otras causas de deterioro, con apoyo de infectología e inmunología",
    "Los antibióticos y antivirales deben administrarse siempre sin evaluación adicional"
  ],
  respuestaCorrecta: 3,
  explicacion: `La inmunodeficiencia puede asociarse con infección viral más grave, eliminación prolongada del virus y mayor riesgo de coinfección. Un resultado positivo para VSR no excluye otros patógenos ni complicaciones. El deterioro progresivo justifica una evaluación microbiológica e imagenológica dirigida, junto con valoración especializada. La selección de tratamientos adicionales depende del agente sospechado o identificado, la gravedad y la evidencia disponible.`,
  perlaENARM: "En inmunodeficiencia, la detección de un virus no cierra el diagnóstico; busca coinfecciones y causas alternativas si la evolución no corresponde a lo esperado.",
  gpc: {
    mexico: "Consultar GPC mexicanas vigentes de inmunodeficiencias primarias e infecciones respiratorias graves en pediatría.",
    internacional: "AAP Red Book; guías internacionales de evaluación de infecciones en pacientes inmunocomprometidos."
  },
  bibliografia: "AAP Red Book: Report of the Committee on Infectious Diseases; textos de infectología pediátrica."
},
{
  id: "PED-264",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Deterioro súbito durante la hospitalización",
  dificultad: "Muy alta",
  caso: `Lactante de 6 meses hospitalizado por bronquiolitis presenta deterioro repentino, cianosis y disminución marcada de la entrada de aire en el hemitórax izquierdo. Hasta minutos antes tenía sibilancias bilaterales. Recibe oxígeno, pero la saturación permanece en 82% y la ventilación manual resulta difícil.`,
  pregunta: "¿Qué complicación debe sospecharse y evaluarse de inmediato?",
  opciones: [
    "Neumotórax asociado a atrapamiento aéreo",
    "Otitis media aguda",
    "Reflujo gastroesofágico fisiológico",
    "Exantema viral",
    "Hipocalcemia asintomática"
  ],
  respuestaCorrecta: 0,
  explicacion: `El deterioro súbito con hipoxemia grave, asimetría auscultatoria y dificultad para ventilar obliga a sospechar neumotórax, entre otras causas críticas. La prioridad es la evaluación y estabilización inmediata de la vía aérea, respiración y circulación. Si existe sospecha de neumotórax a tensión con inestabilidad, el tratamiento urgente no debe retrasarse para obtener imágenes; el procedimiento debe realizarlo personal entrenado.`,
  perlaENARM: "En un paciente respiratorio que empeora súbitamente con asimetría torácica, considera neumotórax; si hay tensión e inestabilidad, no esperes la radiografía.",
  gpc: {
    mexico: "Protocolos mexicanos vigentes de urgencias pediátricas y manejo del neumotórax.",
    internacional: "Pediatric Advanced Life Support (PALS); guías internacionales de emergencia respiratoria pediátrica."
  },
  bibliografia: "American Heart Association. Pediatric Advanced Life Support; textos de urgencias y cuidados intensivos pediátricos."
},
{
  id: "PED-265",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Bronquiolitis y trastornos de la deglución",
  dificultad: "Muy alta",
  caso: `Lactante de 7 meses con tos recurrente y dos hospitalizaciones previas por cuadros respiratorios etiquetados como bronquiolitis. Los cuidadores refieren tos y cambios en la respiración durante las tomas, episodios de atragantamiento y ganancia ponderal insuficiente. Entre los episodios agudos persisten estertores finos.`,
  pregunta: "¿Qué evaluación debe considerarse para investigar una causa subyacente de los episodios recurrentes?",
  opciones: [
    "Panel viral mensual aunque el resultado no cambie la conducta",
    "Tratamiento antibiótico profiláctico prolongado",
    "Evaluación de la deglución y posible aspiración, con estudios dirigidos según la valoración clínica",
    "Broncodilatadores permanentes sin reevaluación",
    "Supresión de todas las tomas por vía oral sin valorar alternativas nutricionales"
  ],
  respuestaCorrecta: 2,
  explicacion: `La tos o el atragantamiento durante la alimentación, la falla para crecer y los síntomas respiratorios persistentes sugieren alteración de la deglución y posible aspiración. La evaluación puede incluir valoración clínica de alimentación y, cuando esté indicado, estudios instrumentales de deglución. El abordaje debe coordinarse con pediatría, fonoaudiología o terapia de deglución, nutrición y las especialidades pertinentes.`,
  perlaENARM: "Infecciones respiratorias recurrentes más tos durante las tomas y mala ganancia ponderal obligan a investigar aspiración y trastornos de deglución.",
  gpc: {
    mexico: "Consultar GPC mexicanas vigentes de trastornos de deglución y evaluación de aspiración en pediatría.",
    internacional: "Guías internacionales de evaluación de disfagia pediátrica y aspiración."
  },
  bibliografia: "Textos de neumología pediátrica y trastornos de deglución infantil; guías clínicas de evaluación de disfagia."
},
{
  id: "PED-266",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Interpretación de biomarcadores inflamatorios",
  dificultad: "Muy alta",
  caso: `Lactante de 8 meses con bronquiolitis confirmada por VSR presenta leucocitos de 15,000/µL y proteína C reactiva de 22 mg/L. Está afebril, hemodinámicamente estable, tiene sibilancias difusas y no presenta focalidad auscultatoria. La radiografía, realizada por una desaturación transitoria, muestra hiperinsuflación sin consolidación lobar.`,
  pregunta: "¿Qué conclusión debe extraerse de los biomarcadores disponibles?",
  opciones: [
    "La leucocitosis confirma neumonía bacteriana",
    "La proteína C reactiva por encima de 20 mg/L obliga siempre a indicar antibióticos",
    "Los biomarcadores excluyen una infección viral",
    "La radiografía descarta toda coinfección bacteriana posible",
    "Los valores aislados no confirman una infección bacteriana y deben interpretarse con la evolución y los hallazgos clínicos"
  ],
  respuestaCorrecta: 4,
  explicacion: `La leucocitosis y la elevación moderada de proteína C reactiva pueden observarse en diversos procesos infecciosos e inflamatorios y no diagnostican por sí solas una infección bacteriana. La decisión de realizar estudios adicionales o indicar antibióticos debe sustentarse en la situación clínica global, la focalidad, la fiebre, el estado general y la evolución. Tampoco una radiografía sin consolidación excluye absolutamente una infección concomitante.`,
  perlaENARM: "No conviertas un valor aislado de leucocitos o proteína C reactiva en indicación automática de antibióticos; integra la probabilidad clínica.",
  gpc: {
    mexico: "GPC mexicanas vigentes de bronquiolitis y neumonía adquirida en la comunidad pediátrica.",
    internacional: "AAP Clinical Practice Guideline on Bronchiolitis; guías PIDS/IDSA de neumonía pediátrica."
  },
  bibliografia: "AAP Clinical Practice Guideline on Bronchiolitis; PIDS/IDSA Pediatric Community-Acquired Pneumonia Guidelines."
},
{
  id: "PED-267",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Bronquiolitis y riesgo de aspiración durante el soporte",
  dificultad: "Muy alta",
  caso: `Lactante de 4 meses con bronquiolitis grave presenta taquipnea intensa, retracciones marcadas y episodios de tos al intentar alimentarse. La saturación es de 90% pese a oxígeno suplementario. Está alerta, pero se fatiga rápidamente durante las tomas y presenta menor diuresis.`,
  pregunta: "¿Cuál es la principal preocupación respecto a mantener la alimentación oral sin modificar la estrategia?",
  opciones: [
    "Que la leche materna pierde sus propiedades durante una infección viral",
    "Que la taquipnea y la fatiga pueden comprometer la coordinación succión-deglución-respiración y aumentar el riesgo de aspiración",
    "Que toda alimentación oral está contraindicada durante cualquier bronquiolitis leve",
    "Que la alimentación oral provoca necesariamente una infección bacteriana",
    "Que el ayuno prolongado es siempre preferible a cualquier modalidad de hidratación"
  ],
  respuestaCorrecta: 1,
  explicacion: `La dificultad respiratoria intensa puede alterar la coordinación entre succión, deglución y respiración, aumentando el riesgo de aspiración y empeorando la fatiga. Debe evaluarse la seguridad de la vía oral y proporcionar hidratación por una vía alternativa si es necesario. La decisión entre sonda e hidratación intravenosa depende del compromiso respiratorio, la tolerancia enteral y el estado hemodinámico.`,
  perlaENARM: "La alimentación se individualiza según el trabajo respiratorio y la seguridad de la deglución; no fuerces tomas en un lactante con fatiga y tos durante la ingesta.",
  gpc: {
    mexico: "GPC mexicanas vigentes de bronquiolitis y fluidoterapia pediátrica.",
    internacional: "NICE NG9. Bronchiolitis in children: diagnosis and management."
  },
  bibliografia: "NICE NG9; AAP Clinical Practice Guideline on Bronchiolitis."
},
{
  id: "PED-268",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Factores ambientales y prevención secundaria",
  dificultad: "Muy alta",
  caso: `Lactante de 6 meses con episodios repetidos de bronquiolitis vive en un hogar donde varios adultos fuman dentro de la vivienda. Su cuidador considera que abrir las ventanas después de fumar elimina el riesgo. El niño acude a guardería y tiene contacto frecuente con otros niños con infecciones respiratorias.`,
  pregunta: "¿Qué recomendación preventiva tiene mayor fundamento para reducir la exposición respiratoria perjudicial?",
  opciones: [
    "Permitir fumar en otra habitación si la puerta permanece cerrada",
    "Utilizar aromatizantes para neutralizar el humo",
    "Evitar exclusivamente el contacto con niños vacunados",
    "Establecer un entorno completamente libre de humo de tabaco, además de reforzar higiene de manos y medidas razonables para reducir la transmisión viral",
    "Administrar antibióticos durante toda la temporada respiratoria"
  ],
  respuestaCorrecta: 3,
  explicacion: `La exposición al humo de tabaco se asocia con mayor riesgo de infecciones respiratorias y enfermedad más grave. Abrir ventanas o fumar en otra habitación no elimina la exposición al humo de segunda mano ni los residuos contaminantes. Un ambiente libre de humo y las medidas de higiene respiratoria ayudan a disminuir riesgos, aunque no previenen todas las infecciones virales.`,
  perlaENARM: "La recomendación eficaz es un hogar y automóvil completamente libres de humo; ventilar la habitación no neutraliza la exposición al tabaco.",
  gpc: {
    mexico: "Lineamientos mexicanos vigentes de prevención de exposición al humo de tabaco y prevención de infecciones respiratorias pediátricas.",
    internacional: "CDC. RSV Prevention; recomendaciones de salud pública para eliminar la exposición al humo de tabaco."
  },
  bibliografia: "CDC. RSV Prevention; literatura científica sobre exposición al humo de tabaco e infecciones respiratorias infantiles."
},
{
  id: "PED-269",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Diagnóstico diferencial: fibrosis quística",
  dificultad: "Muy alta",
  caso: `Lactante de 9 meses con episodios respiratorios recurrentes, tos crónica húmeda, evacuaciones voluminosas y grasosas, distensión abdominal y falta de ganancia ponderal. Durante una infección viral presenta sibilancias y estertores difusos. La familia refiere que el tamiz neonatal no está disponible para revisión.`,
  pregunta: "¿Qué enfermedad subyacente debe investigarse por la combinación de manifestaciones respiratorias y malabsorción?",
  opciones: [
    "Fibrosis quística",
    "Rinitis alérgica aislada",
    "Laringotraqueítis recurrente",
    "Bronquiolitis viral no complicada como explicación suficiente de todos los síntomas",
    "Otitis media aguda recurrente"
  ],
  respuestaCorrecta: 0,
  explicacion: `La combinación de enfermedad respiratoria recurrente, tos crónica, esteatorrea y falla para crecer sugiere fibrosis quística por disfunción de CFTR y posible insuficiencia pancreática exocrina. La evaluación incluye revisión del tamiz neonatal y pruebas diagnósticas específicas, como cloruros en sudor, junto con valoración especializada. Una infección viral aguda puede coexistir, pero no explica por sí sola el patrón crónico multisistémico.`,
  perlaENARM: "Infecciones respiratorias recurrentes más esteatorrea y falla de crecimiento: considera fibrosis quística y evalúa la función de CFTR.",
  gpc: {
    mexico: "Consultar GPC mexicanas vigentes para diagnóstico y manejo de fibrosis quística en pediatría.",
    internacional: "Cystic Fibrosis Foundation. Diagnostic Guidelines; recomendaciones internacionales para diagnóstico de fibrosis quística."
  },
  bibliografia: "Cystic Fibrosis Foundation. Diagnostic Guidelines; Murray & Nadel. Textbook of Respiratory Medicine."
},
{
  id: "PED-270",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Criterios de gravedad y toma de decisiones integrada",
  dificultad: "Muy alta",
  caso: `Lactante de 3 meses con bronquiolitis presenta frecuencia respiratoria de 66/min, retracciones moderadas, ingesta cercana al 40% de lo habitual y saturación de 92% al aire ambiente. Está alerta, pero ha disminuido la diuresis. Nació a las 35 semanas y vive a más de una hora del hospital. No ha presentado apnea observada.`,
  pregunta: "¿Qué enfoque permite tomar una decisión de disposición clínica que integre adecuadamente los riesgos?",
  opciones: [
    "Dar el alta porque la saturación es superior a 90%, sin considerar los demás datos",
    "Hospitalizar exclusivamente por la frecuencia respiratoria, sin reevaluar al paciente",
    "Indicar broncodilatador y considerar resuelto el riesgo si disminuyen las sibilancias",
    "Integrar edad, prematuridad, trabajo respiratorio, oxigenación, hidratación, evolución y capacidad de acceso a atención urgente para decidir observación o ingreso",
    "Solicitar un panel viral y basar la disposición únicamente en el resultado"
  ],
  respuestaCorrecta: 3,
  explicacion: `La decisión entre manejo ambulatorio, observación e ingreso debe integrar gravedad respiratoria, oxigenación persistente, ingesta, diuresis, edad, prematuridad, comorbilidades y condiciones del entorno. Una saturación aislada no basta para determinar el alta. La disminución importante de la ingesta y la diuresis, junto con edad pequeña y prematuridad, favorece una valoración más estrecha y puede justificar observación hospitalaria según la evolución y las guías locales.`,
  perlaENARM: "La disposición en bronquiolitis es multifactorial: una saturación aparentemente aceptable no compensa alimentación insuficiente, edad pequeña, prematuridad o barreras de acceso.",
  gpc: {
    mexico: "GPC mexicanas vigentes de bronquiolitis: criterios de referencia, hospitalización y egreso.",
    internacional: "NICE NG9. Bronchiolitis in children: diagnosis and management; AAP Clinical Practice Guideline on Bronchiolitis."
  },
  bibliografia: "NICE NG9; AAP Clinical Practice Guideline on Bronchiolitis."
},

{
  id: "PED-271",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Diagnóstico diferencial: tosferina y bronquiolitis por VSR",
  dificultad: "Muy alta",
  caso: `Lactante de 7 semanas presenta rinorrea, tos en accesos y episodios de cianosis durante la alimentación. Está afebril y tiene escasos hallazgos auscultatorios. La madre no recibió vacunación contra tosferina durante el embarazo y un hermano presenta tos persistente desde hace un mes. La prueba molecular para VSR resulta negativa.`,
  pregunta: "¿Qué combinación de hallazgos orienta con mayor fuerza hacia tosferina?",
  opciones: [
    "Fiebre alta, consolidación lobar y dolor pleurítico",
    "Sibilancias recurrentes desde el nacimiento y respuesta sostenida a salbutamol",
    "Apnea o cianosis en un lactante pequeño, tos paroxística y contacto domiciliario con tos prolongada",
    "Estridor inspiratorio, disfonía y tos perruna",
    "Tos productiva crónica con esteatorrea y falla de crecimiento"
  ],
  respuestaCorrecta: 2,
  explicacion: `La tosferina puede manifestarse en lactantes pequeños con apnea, cianosis y dificultad para alimentarse, incluso sin el patrón clásico de tos paroxística ni fiebre. El contacto con una persona con tos prolongada aumenta la sospecha. Se recomienda aislamiento, evaluación urgente y toma de muestra nasofaríngea para PCR según el tiempo de evolución y las recomendaciones locales. En lactantes de alto riesgo, el tratamiento indicado no debe retrasarse innecesariamente a la espera del resultado.`,
  perlaENARM: "En menores de 3 meses, la tosferina puede presentarse principalmente con apnea y cianosis, sin tos clásica ni fiebre.",
  gpc: {
    mexico: "GPC mexicanas vigentes de tosferina e infecciones respiratorias en lactantes.",
    internacional: "CDC. Clinical Features and Diagnosis of Pertussis; AAP Red Book."
  },
  bibliografia: "CDC. Clinical Features and Diagnosis of Pertussis; AAP Red Book: Report of the Committee on Infectious Diseases."
},
{
  id: "PED-272",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Interpretación de gasometría y agotamiento respiratorio",
  dificultad: "Muy alta",
  caso: `Lactante de 5 meses con bronquiolitis grave recibe oxígeno de alto flujo. Inicialmente presenta frecuencia respiratoria de 76/min y retracciones intensas. Dos horas después, la frecuencia respiratoria disminuye a 38/min, pero está somnoliento, tiene menor entrada de aire y presenta pH de 7.21, PaCO2 de 68 mmHg y bicarbonato de 26 mEq/L.`,
  pregunta: "¿Cuál es la explicación más preocupante del cambio en la frecuencia respiratoria?",
  opciones: [
    "Resolución de la obstrucción bronquiolar y recuperación completa",
    "Agotamiento de los músculos respiratorios con hipoventilación y acidosis respiratoria",
    "Alcalosis respiratoria compensada",
    "Respuesta terapéutica definitiva al oxígeno de alto flujo",
    "Mejoría demostrada por la normalización de la frecuencia respiratoria"
  ],
  respuestaCorrecta: 1,
  explicacion: `La disminución de la frecuencia respiratoria no implica mejoría cuando se acompaña de somnolencia, menor entrada de aire, hipercapnia y acidemia. Estos hallazgos sugieren agotamiento ventilatorio y fracaso del soporte respiratorio. Se requiere evaluación inmediata por cuidados intensivos pediátricos y preparación para escalamiento del soporte, incluida ventilación invasiva si está indicada.`,
  perlaENARM: "Taquipnea que disminuye junto con somnolencia, hipercapnia y menor entrada de aire puede indicar agotamiento respiratorio, no recuperación.",
  gpc: {
    mexico: "Protocolos mexicanos vigentes de insuficiencia respiratoria aguda y cuidados intensivos pediátricos.",
    internacional: "NICE NG9; recomendaciones internacionales de soporte respiratorio pediátrico."
  },
  bibliografia: "NICE NG9. Bronchiolitis in children: diagnosis and management; textos de cuidados intensivos pediátricos."
},
{
  id: "PED-273",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Hipoxemia persistente y decisión de soporte",
  dificultad: "Muy alta",
  caso: `Lactante de 4 meses con bronquiolitis presenta saturación persistentemente de 87-89% al aire ambiente, retracciones moderadas y rechazo parcial de la alimentación. Tras iniciar oxígeno convencional, la saturación mejora a 93%, pero persisten el trabajo respiratorio y la fatiga durante las tomas. No tiene apnea ni alteración del estado de conciencia.`,
  pregunta: "¿Qué principio debe guiar la vigilancia después de corregir parcialmente la hipoxemia?",
  opciones: [
    "La mejoría de la saturación elimina la necesidad de reevaluar el trabajo respiratorio",
    "Debe retirarse el oxígeno para demostrar que la hipoxemia persiste",
    "La fatiga durante la alimentación no tiene relevancia si la saturación supera 90%",
    "La respuesta debe evaluarse de forma integral, vigilando trabajo respiratorio, estado neurológico, ingesta y necesidad creciente de soporte",
    "Debe indicarse antibiótico para resolver la fatiga"
  ],
  respuestaCorrecta: 3,
  explicacion: `La corrección de la saturación es un objetivo importante, pero no garantiza que la ventilación ni el trabajo respiratorio sean adecuados. La persistencia de retracciones, fatiga y alimentación insegura obliga a reevaluar con frecuencia y considerar escalamiento si existe deterioro. La decisión no debe basarse exclusivamente en un valor de oximetría.`,
  perlaENARM: "Oxigenación y ventilación son dimensiones distintas: una saturación mejor puede coexistir con trabajo respiratorio excesivo o fatiga.",
  gpc: {
    mexico: "GPC mexicanas vigentes de bronquiolitis y oxigenoterapia pediátrica.",
    internacional: "NICE NG9; AAP Clinical Practice Guideline on Bronchiolitis."
  },
  bibliografia: "NICE NG9; AAP Clinical Practice Guideline on Bronchiolitis."
},
{
  id: "PED-274",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Bronquiolitis grave y líquidos intravenosos",
  dificultad: "Muy alta",
  caso: `Lactante de 6 meses hospitalizado por bronquiolitis grave presenta ingesta mínima, taquipnea intensa y riesgo de aspiración durante las tomas. Se decide suspender temporalmente la vía oral. No tiene choque ni signos clínicos de deshidratación grave; los electrolitos iniciales son normales.`,
  pregunta: "Si se requiere hidratación intravenosa, ¿qué enfoque es preferible?",
  opciones: [
    "Administrar líquidos hipotónicos de mantenimiento de manera sistemática",
    "Usar soluciones isotónicas apropiadas, ajustar el volumen a la situación clínica y monitorizar electrolitos y balance hídrico",
    "Administrar bolos repetidos de solución salina sin valorar perfusión",
    "Restringir completamente los líquidos durante 24 horas",
    "Iniciar diuréticos para prevenir edema pulmonar en todos los pacientes"
  ],
  respuestaCorrecta: 1,
  explicacion: `Cuando la vía enteral no es segura o suficiente, puede requerirse hidratación intravenosa. Se prefieren soluciones isotónicas de mantenimiento en la mayoría de los niños hospitalizados, con ajustes según edad, estado hemodinámico, electrolitos, diuresis y riesgo de retención de agua por hormona antidiurética. Los bolos se reservan para indicaciones como hipovolemia o choque y requieren reevaluación clínica.`,
  perlaENARM: "En bronquiolitis hospitalizada, evita la administración rutinaria de líquidos hipotónicos; individualiza el volumen y vigila sodio, diuresis y balance hídrico.",
  gpc: {
    mexico: "GPC mexicanas vigentes de fluidoterapia intravenosa pediátrica y bronquiolitis.",
    internacional: "NICE. Intravenous fluid therapy in children and young people in hospital; NICE NG9."
  },
  bibliografia: "NICE. Intravenous fluid therapy in children and young people in hospital; NICE NG9."
},
{
  id: "PED-275",
  especialidad: "Pediatría",
  tema: "Bronquiolitis",
  subtema: "Anticuerpos monoclonales y prevención del VSR",
  dificultad: "Muy alta",
  caso: `Lactante de 3 meses, nacido a término y sin cardiopatía, acude antes de la temporada de VSR. Sus padres solicitan palivizumab porque un familiar les comentó que debe administrarse a todos los lactantes sanos. El centro cuenta con recomendaciones actualizadas de prevención, pero primero necesita verificar la elegibilidad del paciente y las estrategias disponibles.`,
  pregunta: "¿Cuál afirmación sobre la prevención con anticuerpos monoclonales es correcta?",
  opciones: [
    "Palivizumab es el tratamiento de primera línea de toda infección activa por VSR",
    "Todos los lactantes deben recibir palivizumab mensualmente, independientemente del riesgo",
    "Los anticuerpos monoclonales solo se administran después de una hospitalización por bronquiolitis",
    "La prevención con anticuerpos no tiene utilidad clínica demostrada",
    "La indicación depende de las recomendaciones vigentes, el producto disponible, la edad, la temporada y los factores de riesgo; palivizumab no se indica universalmente a todos los lactantes sanos"
  ],
  respuestaCorrecta: 4,
  explicacion: `La prevención frente al VSR ha cambiado con la disponibilidad de anticuerpos monoclonales de acción prolongada, como nirsevimab, y de vacunación materna en determinados contextos. Palivizumab se ha reservado tradicionalmente para grupos seleccionados de alto riesgo y no es un tratamiento de una infección activa. La estrategia apropiada depende de las recomendaciones nacionales, la temporada, la disponibilidad y las características del lactante.`,
  perlaENARM: "Distingue profilaxis de tratamiento: palivizumab no es terapia para bronquiolitis activa ni se indica universalmente a todos los lactantes sanos.",
  gpc: {
    mexico: "Verificar lineamientos mexicanos vigentes de prevención de VSR y disponibilidad de inmunización materna o infantil.",
    internacional: "CDC. RSV Immunization Guidance for Infants and Young Children; AAP Red Book."
  },
  bibliografia: "CDC. RSV Immunization Guidance for Infants and Young Children; AAP Red Book: Report of the Committee on Infectious Diseases."
},
{
  id: "PED-276",
  especialidad: "Pediatría",
  tema: "Asma",
  subtema: "Diagnóstico clínico y variabilidad de los síntomas",
  dificultad: "Muy alta",
  caso: `Escolar de 9 años presenta episodios recurrentes de tos nocturna, disnea y sibilancias durante el ejercicio, con periodos completamente asintomáticos. Tiene antecedente de dermatitis atópica y rinitis alérgica. En la consulta está asintomático y la auscultación es normal. La espirometría basal muestra FEV1 de 92% del predicho y relación FEV1/FVC dentro del límite normal.`,
  pregunta: "¿Qué estrategia contribuye a confirmar el diagnóstico de asma cuando la espirometría basal es normal?",
  opciones: [
    "Descartar asma definitivamente porque el FEV1 es normal",
    "Confirmar asma únicamente por el antecedente de atopia",
    "Buscar evidencia objetiva de variabilidad del flujo espiratorio, mediante repetición de espirometría durante síntomas, prueba broncodilatadora u otra prueba de provocación apropiada",
    "Solicitar una radiografía de tórax como prueba confirmatoria",
    "Iniciar antibióticos y evaluar la respuesta"
  ],
  respuestaCorrecta: 2,
  explicacion: `El asma se caracteriza por síntomas respiratorios variables y limitación variable del flujo espiratorio. Una espirometría normal entre episodios no excluye la enfermedad. Debe buscarse evidencia objetiva de variabilidad, por ejemplo mediante prueba broncodilatadora, repetición de la función pulmonar cuando hay síntomas o pruebas de provocación seleccionadas. La atopia apoya el contexto clínico, pero no confirma el diagnóstico por sí sola.`,
  perlaENARM: "En asma, la normalidad de la espirometría entre episodios no excluye el diagnóstico; busca variabilidad objetiva del flujo aéreo.",
  gpc: {
    mexico: "Consultar GPC mexicanas vigentes de diagnóstico y tratamiento del asma en edad pediátrica.",
    internacional: "Global Initiative for Asthma (GINA). Global Strategy for Asthma Management and Prevention."
  },
  bibliografia: "GINA. Global Strategy for Asthma Management and Prevention; Harrison. Principios de Medicina Interna, 19.ª ed."
},
{
  id: "PED-277",
  especialidad: "Pediatría",
  tema: "Asma",
  subtema: "Interpretación de la prueba broncodilatadora",
  dificultad: "Muy alta",
  caso: `Escolar de 11 años con episodios de disnea y sibilancias presenta espirometría basal con FEV1 de 1.80 L. Después de administrar un broncodilatador, el FEV1 aumenta a 2.15 L. El paciente tiene síntomas variables desencadenados por ejercicio y exposición a alérgenos. No presenta infección respiratoria aguda.`,
  pregunta: "¿Qué interpretación cuantitativa corresponde al cambio del FEV1?",
  opciones: [
    "Aumento de 19.4%, compatible con reversibilidad significativa según el criterio clásico pediátrico de aumento superior al 12% del valor basal",
    "Aumento de 5%, insuficiente para considerar cualquier variabilidad",
    "Disminución de 19.4%, compatible con obstrucción fija",
    "Aumento de 12 mL, sin cambio funcional",
    "El resultado confirma enfermedad pulmonar restrictiva"
  ],
  respuestaCorrecta: 0,
  explicacion: `El cambio absoluto es de 0.35 L. Respecto al valor basal, el aumento es aproximadamente 19.4%: (2.15 - 1.80) / 1.80 × 100. Este resultado supera el umbral clásico de reversibilidad utilizado en niños, aunque la interpretación formal debe considerar los criterios técnicos y la guía de función pulmonar vigente. La respuesta broncodilatadora apoya el diagnóstico en el contexto clínico, pero debe integrarse con la historia y otras pruebas cuando sea necesario.`,
  perlaENARM: "Calcula la reversibilidad como cambio del FEV1 respecto al basal cuando se aplica ese criterio; 350 mL sobre 1.80 L equivale aproximadamente a 19.4%.",
  gpc: {
    mexico: "GPC mexicanas vigentes de diagnóstico funcional del asma pediátrica.",
    internacional: "GINA. Global Strategy for Asthma Management and Prevention; estándares técnicos de espirometría de ATS/ERS."
  },
  bibliografia: "GINA. Global Strategy for Asthma Management and Prevention; ATS/ERS Technical Standard on Spirometry."
},
{
  id: "PED-278",
  especialidad: "Pediatría",
  tema: "Asma",
  subtema: "Inflamación tipo 2 y biomarcadores",
  dificultad: "Muy alta",
  caso: `Escolar de 10 años con asma persistente presenta exacerbaciones recurrentes pese a tratamiento inhalado prescrito. Se confirma técnica inhalatoria correcta y adherencia adecuada. Tiene rinitis alérgica, eosinófilos sanguíneos de 650 células/µL y fracción exhalada de óxido nítrico elevada. No hay datos clínicos de infección activa.`,
  pregunta: "¿Qué patrón inflamatorio sugieren estos hallazgos y qué utilidad tienen los biomarcadores?",
  opciones: [
    "Inflamación bacteriana crónica, que obliga a administrar antibióticos",
    "Enfermedad pulmonar restrictiva, confirmada por eosinofilia",
    "Deficiencia de alfa-1 antitripsina",
    "Inflamación tipo 2, que puede apoyar la caracterización del fenotipo y la evaluación de terapias dirigidas, sin sustituir la valoración clínica integral",
    "Ausencia de inflamación bronquial porque el paciente recibe tratamiento inhalado"
  ],
  respuestaCorrecta: 3,
  explicacion: `La eosinofilia y la elevación de FeNO pueden apoyar la presencia de inflamación tipo 2 en el contexto clínico apropiado. Estos marcadores pueden ayudar a caracterizar el fenotipo y a seleccionar pacientes para terapias biológicas cuando el asma continúa sin control pese a optimizar el tratamiento. No deben interpretarse de forma aislada: es necesario confirmar el diagnóstico, la adherencia, la técnica inhalatoria, las exposiciones y las comorbilidades.`,
  perlaENARM: "Eosinofilia y FeNO elevado pueden apoyar un fenotipo tipo 2; antes de escalar a biológicos, verifica diagnóstico, adherencia, técnica y comorbilidades.",
  gpc: {
    mexico: "GPC mexicanas vigentes de asma grave y evaluación de inflamación tipo 2.",
    internacional: "GINA. Global Strategy for Asthma Management and Prevention; recomendaciones internacionales de asma grave."
  },
  bibliografia: "GINA. Global Strategy for Asthma Management and Prevention; literatura clínica sobre biomarcadores y terapias biológicas en asma."
},
{
  id: "PED-279",
  especialidad: "Pediatría",
  tema: "Asma",
  subtema: "Exacerbación aguda grave",
  dificultad: "Muy alta",
  caso: `Adolescente de 13 años con asma conocida acude por disnea intensa después de una infección viral. Habla en palabras aisladas, tiene retracciones marcadas y saturación de 89% al aire ambiente. Inicialmente presenta sibilancias difusas; después de varios minutos, la entrada de aire disminuye notablemente y se muestra agotado.`,
  pregunta: "¿Qué significado clínico tiene la disminución de las sibilancias en este contexto?",
  opciones: [
    "Resolución completa del broncoespasmo",
    "Respuesta terapéutica definitiva, aunque persista hipoxemia",
    "Ausencia de obstrucción bronquial significativa",
    "Efecto esperado de una crisis leve que no requiere vigilancia",
    "Posible tórax silencioso por obstrucción crítica y flujo aéreo muy reducido, que exige tratamiento urgente"
  ],
  respuestaCorrecta: 4,
  explicacion: `En una exacerbación grave, la reducción de las sibilancias junto con agotamiento y menor entrada de aire puede indicar flujo aéreo críticamente reducido. Es un signo de alarma, no necesariamente de mejoría. Se requiere tratamiento inmediato con broncodilatadores inhalados repetidos, oxígeno según necesidad, corticoide sistémico temprano y valoración de terapias adicionales y soporte avanzado según la respuesta clínica.`,
  perlaENARM: "El tórax silencioso en una crisis asmática grave es un signo ominoso; la ausencia de sibilancias puede reflejar obstrucción extrema.",
  gpc: {
    mexico: "GPC mexicanas vigentes de atención de exacerbación asmática grave en pediatría.",
    internacional: "GINA. Global Strategy for Asthma Management and Prevention; recomendaciones de urgencias pediátricas."
  },
  bibliografia: "GINA. Global Strategy for Asthma Management and Prevention; textos de urgencias y cuidados intensivos pediátricos."
},
{
  id: "PED-280",
  especialidad: "Pediatría",
  tema: "Asma",
  subtema: "Diagnóstico diferencial de sibilancias persistentes",
  dificultad: "Muy alta",
  caso: `Niño de 4 años presenta tos húmeda diaria desde hace 4 meses, neumonías recurrentes en el mismo lóbulo y respuesta escasa a tratamientos broncodilatadores. Los padres refieren tos durante la alimentación desde la lactancia. En la exploración se auscultan estertores persistentes y sibilancias focales.`,
  pregunta: "¿Qué enfoque evita atribuir incorrectamente todos los síntomas a asma?",
  opciones: [
    "Mantener broncodilatadores de forma indefinida sin reevaluación",
    "Investigar causas estructurales o aspirativas, incluida alteración de deglución, cuerpo extraño retenido o anomalía de la vía aérea según los hallazgos",
    "Diagnosticar asma exclusivamente por la presencia de sibilancias",
    "Indicar antibióticos profilácticos sin identificar la causa",
    "Descartar enfermedad pulmonar porque el paciente es preescolar"
  ],
  respuestaCorrecta: 1,
  explicacion: `La tos húmeda diaria prolongada, las neumonías recurrentes en la misma localización, la focalidad auscultatoria y la tos durante la alimentación son datos atípicos para asma aislada. Deben investigarse aspiración, alteraciones de deglución, anomalías anatómicas, cuerpo extraño y otras enfermedades según la evaluación clínica. La falta de respuesta al tratamiento obliga a revisar el diagnóstico antes de escalar la terapia antiasmática.`,
  perlaENARM: "Tos húmeda crónica, focalidad persistente y neumonías repetidas en el mismo sitio son señales para buscar una causa estructural o aspirativa.",
  gpc: {
    mexico: "GPC mexicanas vigentes de asma pediátrica, tos crónica y aspiración en niños.",
    internacional: "GINA. Global Strategy for Asthma Management and Prevention; guías internacionales de evaluación de tos crónica pediátrica."
  },
  bibliografia: "GINA. Global Strategy for Asthma Management and Prevention; textos de neumología pediátrica."
},

{
  id: "PED-281",
  especialidad: "Pediatría",
  tema: "Asma",
  subtema: "Control clínico y riesgo futuro",
  dificultad: "Muy alta",
  caso: `Escolar de 10 años con diagnóstico de asma utiliza salbutamol de rescate casi diariamente, despierta por tos tres noches por semana y limita su participación en educación física. Ha presentado dos exacerbaciones que requirieron corticoides sistémicos durante los últimos 12 meses. Su FEV1 actual es de 94% del predicho. La familia considera que el asma está controlada porque la espirometría es normal.`,
  pregunta: "¿Cuál es la valoración clínica más relevante para determinar el control actual y el riesgo futuro?",
  opciones: [
    "Considerar controlada la enfermedad porque el FEV1 es normal",
    "Basarse exclusivamente en el número de hospitalizaciones",
    "Suspender el tratamiento controlador si no hay sibilancias durante la consulta",
    "Integrar síntomas diurnos y nocturnos, limitación de actividad, uso de rescate y antecedentes de exacerbaciones",
    "Clasificar la gravedad únicamente por la intensidad de las sibilancias en la exploración"
  ],
  respuestaCorrecta: 3,
  explicacion: `El control del asma incluye el control de síntomas y la evaluación del riesgo futuro, particularmente exacerbaciones, deterioro funcional y efectos adversos del tratamiento. El uso frecuente de medicación de rescate, los despertares nocturnos y la limitación de actividad indican control insuficiente. Una función pulmonar normal en una medición aislada no excluye síntomas mal controlados ni riesgo futuro elevado. Antes de modificar el tratamiento deben revisarse adherencia, técnica inhalatoria, exposiciones y comorbilidades.`,
  perlaENARM: "Control actual y riesgo futuro son dimensiones distintas; una espirometría normal no compensa síntomas frecuentes ni exacerbaciones previas.",
  gpc: {
    mexico: "GPC mexicanas vigentes para diagnóstico, tratamiento y seguimiento del asma pediátrica.",
    internacional: "Global Initiative for Asthma (GINA). Global Strategy for Asthma Management and Prevention."
  },
  bibliografia: "GINA. Global Strategy for Asthma Management and Prevention; Harrison. Principios de Medicina Interna, 19.ª ed."
},
{
  id: "PED-282",
  especialidad: "Pediatría",
  tema: "Asma",
  subtema: "Adherencia y técnica inhalatoria",
  dificultad: "Muy alta",
  caso: `Adolescente de 14 años con asma persistente continúa presentando exacerbaciones a pesar de tener prescrita una dosis alta de corticoide inhalado combinado. La familia afirma que el tratamiento es ineficaz. Durante la consulta, el paciente inspira de forma rápida con un inhalador de polvo seco sin realizar una inhalación suficientemente profunda y omite varias dosis cada semana. Además, convive con fumadores.`,
  pregunta: "¿Qué debe abordarse antes de clasificar el cuadro como asma grave refractaria y escalar a una terapia biológica?",
  opciones: [
    "Confirmar y corregir adherencia y técnica inhalatoria, además de reducir exposiciones y reevaluar el diagnóstico",
    "Añadir automáticamente un segundo biológico",
    "Duplicar indefinidamente la dosis de corticoide inhalado sin reevaluación",
    "Suspender todo tratamiento controlador para observar la evolución natural",
    "Indicar antibióticos profilácticos durante varios meses"
  ],
  respuestaCorrecta: 0,
  explicacion: `El asma grave debe distinguirse del asma difícil de tratar. La técnica inhalatoria incorrecta, la falta de adherencia, las exposiciones ambientales y las comorbilidades pueden explicar el mal control aparente. Antes de escalar a tratamientos de mayor complejidad se debe confirmar el diagnóstico, observar la técnica, evaluar adherencia, abordar el humo de tabaco y optimizar el manejo según las guías vigentes.`,
  perlaENARM: "Antes de etiquetar asma grave y prescribir biológicos, verifica diagnóstico, adherencia, técnica inhalatoria, exposiciones y comorbilidades.",
  gpc: {
    mexico: "GPC mexicanas vigentes de asma difícil de tratar y asma grave en pediatría.",
    internacional: "GINA. Difficult-to-Treat and Severe Asthma: Guide for Health Professionals."
  },
  bibliografia: "GINA. Difficult-to-Treat and Severe Asthma: Guide for Health Professionals."
},
{
  id: "PED-283",
  especialidad: "Pediatría",
  tema: "Asma",
  subtema: "Tratamiento controlador con corticoide inhalado",
  dificultad: "Muy alta",
  caso: `Niña de 8 años con asma presenta síntomas diurnos cuatro días por semana, tos nocturna y uso frecuente de salbutamol. No utiliza tratamiento controlador. La espirometría demuestra obstrucción reversible y no hay datos de exacerbación grave en la consulta. La familia solicita exclusivamente un broncodilatador porque teme los efectos del corticoide inhalado.`,
  pregunta: "¿Qué principio terapéutico debe explicarse a la familia?",
  opciones: [
    "El salbutamol aislado es suficiente para prevenir exacerbaciones en cualquier grado de asma",
    "Los corticoides inhalados solo se utilizan durante una crisis con hipoxemia",
    "El tratamiento controlador que contiene corticoide inhalado reduce la inflamación y el riesgo de exacerbaciones; el esquema específico depende de edad, control y guía vigente",
    "Los corticoides inhalados deben sustituirse siempre por antibióticos",
    "La terapia antiinflamatoria está contraindicada en escolares"
  ],
  respuestaCorrecta: 2,
  explicacion: `Los corticoides inhalados son la base del tratamiento antiinflamatorio controlador en el asma persistente y reducen el riesgo de exacerbaciones. La estrategia exacta depende de la edad, la gravedad, el control, los medicamentos disponibles y las recomendaciones vigentes. Deben enseñarse la técnica correcta, el uso de espaciador cuando corresponda y las medidas para reducir efectos locales, como enjuagarse la boca después de la administración.`,
  perlaENARM: "El broncodilatador de rescate alivia la broncoconstricción, pero no sustituye el tratamiento antiinflamatorio controlador cuando está indicado.",
  gpc: {
    mexico: "GPC mexicanas vigentes de tratamiento farmacológico del asma en escolares.",
    internacional: "GINA. Global Strategy for Asthma Management and Prevention."
  },
  bibliografia: "GINA. Global Strategy for Asthma Management and Prevention; guías internacionales de tratamiento del asma pediátrica."
},
{
  id: "PED-284",
  especialidad: "Pediatría",
  tema: "Asma",
  subtema: "Crisis asmática y sulfato de magnesio",
  dificultad: "Muy alta",
  caso: `Niño de 12 años con exacerbación asmática grave recibe oxígeno según necesidad, broncodilatadores inhalados repetidos y corticoide sistémico temprano. Después del tratamiento inicial persisten retracciones intensas, dificultad para hablar y obstrucción importante. No presenta hipotensión ni alteración del estado de conciencia.`,
  pregunta: "¿Qué intervención complementaria puede considerarse en una exacerbación grave que no responde adecuadamente al tratamiento inicial?",
  opciones: [
    "Antibiótico de amplio espectro en todos los casos",
    "Antitusígeno opioide para reducir el trabajo respiratorio",
    "Suspender el broncodilatador por persistencia de sibilancias",
    "Sulfato de magnesio intravenoso en un entorno monitorizado, según gravedad y protocolo",
    "Diurético intravenoso para reducir la inflamación bronquial"
  ],
  respuestaCorrecta: 3,
  explicacion: `El sulfato de magnesio intravenoso puede considerarse como tratamiento complementario en exacerbaciones graves que no responden suficientemente al manejo inicial. Debe administrarse con vigilancia clínica y conforme al protocolo institucional. No reemplaza los broncodilatadores inhalados, el corticoide sistémico ni la evaluación continua de la necesidad de soporte respiratorio avanzado.`,
  perlaENARM: "El sulfato de magnesio IV es una opción en exacerbación asmática grave con respuesta insuficiente al tratamiento inicial; no se indica de rutina en crisis leves.",
  gpc: {
    mexico: "GPC mexicanas vigentes de atención de la exacerbación asmática grave en niños.",
    internacional: "GINA. Global Strategy for Asthma Management and Prevention; guías internacionales de urgencias pediátricas."
  },
  bibliografia: "GINA. Global Strategy for Asthma Management and Prevention; guías de urgencias pediátricas."
},
{
  id: "PED-285",
  especialidad: "Pediatría",
  tema: "Asma",
  subtema: "Anafilaxia con broncoespasmo",
  dificultad: "Muy alta",
  caso: `Adolescente de 13 años con antecedente de asma presenta disnea súbita, sibilancias generalizadas, urticaria, edema labial y mareo minutos después de ingerir un alimento. La presión arterial es de 82/48 mmHg y la saturación de oxígeno de 90%.`,
  pregunta: "¿Cuál es el tratamiento farmacológico prioritario?",
  opciones: [
    "Salbutamol inhalado como única intervención",
    "Adrenalina intramuscular inmediata, junto con soporte de vía aérea, oxígeno y manejo hemodinámico",
    "Corticoide inhalado y observación domiciliaria",
    "Antihistamínico oral como único tratamiento inicial",
    "Antibiótico intravenoso y líquidos por vía oral"
  ],
  respuestaCorrecta: 1,
  explicacion: `La combinación de compromiso respiratorio, manifestaciones cutáneas y datos de choque tras exposición a un posible alérgeno es compatible con anafilaxia. La adrenalina intramuscular en la cara anterolateral del muslo es el tratamiento de primera línea y no debe retrasarse por la administración de antihistamínicos o corticoides. Se requiere atención de emergencia, soporte de vía aérea, oxígeno y líquidos intravenosos según el estado hemodinámico. El broncodilatador inhalado puede utilizarse como complemento para el broncoespasmo, pero no sustituye la adrenalina.`,
  perlaENARM: "Anafilaxia con hipotensión o compromiso respiratorio: adrenalina intramuscular primero; salbutamol, antihistamínicos y corticoides son complementarios, no sustitutos.",
  gpc: {
    mexico: "GPC mexicanas vigentes de diagnóstico y tratamiento de anafilaxia en pediatría.",
    internacional: "World Allergy Organization. Anaphylaxis Guidance; guías internacionales de anafilaxia."
  },
  bibliografia: "World Allergy Organization. Anaphylaxis Guidance; guías internacionales de urgencias y alergia."
},
{
  id: "PED-286",
  especialidad: "Pediatría",
  tema: "Asma",
  subtema: "Asma inducida por ejercicio",
  dificultad: "Muy alta",
  caso: `Escolar de 10 años refiere tos, opresión torácica y disnea durante carreras prolongadas. Los síntomas suelen iniciar al final del ejercicio y mejoran después de detenerse. La espirometría en reposo es normal y no existen síntomas nocturnos frecuentes. La familia solicita evitar toda actividad física.`,
  pregunta: "¿Qué estrategia permite evaluar objetivamente la sospecha de broncoconstricción inducida por ejercicio?",
  opciones: [
    "Radiografía de tórax en reposo como prueba confirmatoria",
    "Diagnosticar asma únicamente por el relato de disnea durante ejercicio",
    "Indicar reposo deportivo permanente sin evaluación adicional",
    "Solicitar hemocultivos durante el ejercicio",
    "Realizar una prueba de provocación con ejercicio o una prueba indirecta apropiada, midiendo la función pulmonar antes y después"
  ],
  respuestaCorrecta: 4,
  explicacion: `La broncoconstricción inducida por ejercicio puede presentarse con espirometría normal en reposo. La evaluación objetiva mediante una prueba de ejercicio estandarizada u otra prueba de provocación apropiada permite demostrar la caída del FEV1. Deben considerarse diagnósticos alternativos, como disfunción laríngea inducida por ejercicio, desacondicionamiento o causas cardiacas, según las características de los síntomas.`,
  perlaENARM: "La disnea durante el ejercicio no confirma por sí sola asma; demuestra variabilidad o broncoconstricción mediante pruebas funcionales cuando sea posible.",
  gpc: {
    mexico: "GPC mexicanas vigentes de diagnóstico funcional y manejo del asma pediátrica.",
    internacional: "GINA. Global Strategy for Asthma Management and Prevention; estándares ATS sobre broncoconstricción inducida por ejercicio."
  },
  bibliografia: "GINA. Global Strategy for Asthma Management and Prevention; American Thoracic Society guidelines on exercise-induced bronchoconstriction."
},
{
  id: "PED-287",
  especialidad: "Pediatría",
  tema: "Asma",
  subtema: "Disfunción laríngea inducida por ejercicio",
  dificultad: "Muy alta",
  caso: `Adolescente de 15 años presenta episodios de dificultad respiratoria máxima durante el ejercicio intenso. Describe sensación de cierre en la garganta y ruido inspiratorio audible. Los síntomas ceden pocos minutos después de detener la actividad. La espirometría basal es normal y el uso previo de salbutamol no ha producido mejoría consistente.`,
  pregunta: "¿Qué diagnóstico alternativo debe considerarse especialmente?",
  opciones: [
    "Disfunción laríngea inducida por ejercicio",
    "Neumonía bacteriana lobar",
    "Bronquiolitis por VSR",
    "Insuficiencia cardiaca por cardiopatía congénita",
    "Fibrosis quística con insuficiencia pancreática"
  ],
  respuestaCorrecta: 0,
  explicacion: `La disfunción laríngea inducida por ejercicio suele producir síntomas inspiratorios, sensación de cierre faríngeo y resolución rápida al suspender la actividad. Puede confundirse con asma, pero la respuesta al broncodilatador suele ser limitada cuando la alteración laríngea es la causa principal. La evaluación especializada puede requerir visualización laríngea durante el ejercicio para documentar el fenómeno.`,
  perlaENARM: "Estridor inspiratorio durante el ejercicio, sensación de cierre faríngeo y resolución rápida orientan a disfunción laríngea inducida por ejercicio.",
  gpc: {
    mexico: "Consultar GPC mexicanas vigentes de asma pediátrica y evaluación de disnea inducida por ejercicio.",
    internacional: "GINA. Global Strategy for Asthma Management and Prevention; literatura internacional sobre inducible laryngeal obstruction."
  },
  bibliografia: "GINA. Global Strategy for Asthma Management and Prevention; guías internacionales de evaluación de disnea inducida por ejercicio."
},
{
  id: "PED-288",
  especialidad: "Pediatría",
  tema: "Asma",
  subtema: "Efectos adversos de corticoides inhalados",
  dificultad: "Muy alta",
  caso: `Niño de 8 años con asma persistente recibe corticoide inhalado durante varios meses. Su familia nota disfonía recurrente y aparición de placas blanquecinas en la mucosa oral. El paciente utiliza el dispositivo sin espaciador cuando está indicado y no se enjuaga la boca después de las inhalaciones. El control del asma ha mejorado significativamente.`,
  pregunta: "¿Qué intervención ayuda a reducir los efectos adversos locales sin retirar automáticamente un tratamiento eficaz?",
  opciones: [
    "Suspender permanentemente todos los controladores",
    "Añadir antibiótico sistémico de forma preventiva",
    "Revisar técnica y dispositivo, utilizar espaciador cuando corresponda, enjuagar la boca y reevaluar la dosis mínima eficaz",
    "Aumentar la dosis de corticoide inhalado",
    "Sustituir el tratamiento por salbutamol exclusivo"
  ],
  respuestaCorrecta: 2,
  explicacion: `La disfonía y la candidiasis orofaríngea son efectos adversos locales conocidos de los corticoides inhalados. La técnica correcta, el uso de espaciador con dispositivos compatibles y el enjuague bucal después de la administración reducen la deposición orofaríngea. Si el asma está controlada de forma sostenida, debe evaluarse la posibilidad de ajustar el tratamiento a la menor dosis eficaz según las guías, sin retirar de manera abrupta el controlador necesario.`,
  perlaENARM: "Candidiasis oral o disfonía por corticoide inhalado: corrige técnica, enjuague y dispositivo; considera reducción gradual de dosis solo si el control lo permite.",
  gpc: {
    mexico: "GPC mexicanas vigentes de tratamiento controlador y seguimiento del asma pediátrica.",
    internacional: "GINA. Global Strategy for Asthma Management and Prevention."
  },
  bibliografia: "GINA. Global Strategy for Asthma Management and Prevention; literatura clínica sobre seguridad de corticoides inhalados."
},
{
  id: "PED-289",
  especialidad: "Pediatría",
  tema: "Asma",
  subtema: "Fenotipo eosinofílico y terapias biológicas",
  dificultad: "Muy alta",
  caso: `Adolescente de 16 años con asma grave presenta exacerbaciones repetidas pese a tratamiento inhalado optimizado y adherencia documentada. Tiene eosinofilia sanguínea persistente, poliposis nasal y antecedente de dermatitis atópica. La evaluación descarta una infección activa y otras causas frecuentes de mal control. Se considera valoración en una clínica especializada de asma grave.`,
  pregunta: "¿Qué criterio es esencial antes de seleccionar una terapia biológica dirigida?",
  opciones: [
    "Elegir el biológico exclusivamente por la edad",
    "Confirmar asma grave no controlada tras optimización terapéutica y caracterizar fenotipo, biomarcadores, comorbilidades y criterios de elegibilidad",
    "Prescribir el mismo biológico a todos los pacientes con sibilancias",
    "Suspender los corticoides inhalados antes de la evaluación",
    "Utilizar eosinófilos como único criterio, sin considerar exacerbaciones ni tratamiento previo"
  ],
  respuestaCorrecta: 1,
  explicacion: `La elección de una terapia biológica en asma grave requiere confirmar el diagnóstico y verificar que persiste el mal control pese a tratamiento optimizado, adherencia y técnica adecuadas. Se consideran el fenotipo inflamatorio, biomarcadores, exacerbaciones, comorbilidades, edad autorizada y criterios específicos de cada fármaco. La eosinofilia y la poliposis nasal pueden orientar hacia determinados mecanismos, pero no bastan por sí solas para seleccionar una terapia.`,
  perlaENARM: "La terapia biológica se elige según fenotipo, biomarcadores, exacerbaciones, comorbilidades y elegibilidad; no por eosinofilia aislada.",
  gpc: {
    mexico: "Consultar GPC mexicanas vigentes de asma grave y criterios de referencia a centros especializados.",
    internacional: "GINA. Difficult-to-Treat and Severe Asthma: Guide for Health Professionals."
  },
  bibliografia: "GINA. Difficult-to-Treat and Severe Asthma: Guide for Health Professionals."
},
{
  id: "PED-290",
  especialidad: "Pediatría",
  tema: "Asma",
  subtema: "Plan de acción escrito y reconocimiento de exacerbación",
  dificultad: "Muy alta",
  caso: `Escolar de 9 años con asma ha presentado dos exacerbaciones durante el último año. Su familia utiliza el inhalador de rescate, pero no sabe cuándo debe buscar atención urgente ni cómo ajustar el tratamiento durante un empeoramiento. El niño participa en actividades deportivas y actualmente está asintomático.`,
  pregunta: "¿Qué elemento del seguimiento puede mejorar la capacidad de la familia para responder ante una exacerbación?",
  opciones: [
    "Evitar explicar los signos de alarma para no generar ansiedad",
    "Indicar que toda exacerbación puede manejarse en casa sin evaluación",
    "Entregar un plan genérico sin identificar medicamentos ni umbrales de consulta",
    "Proporcionar un plan de acción escrito e individualizado con instrucciones de tratamiento, reconocimiento de deterioro y criterios claros de atención urgente",
    "Suspender el tratamiento controlador cuando el niño esté asintomático"
  ],
  respuestaCorrecta: 3,
  explicacion: `Un plan de acción escrito e individualizado ayuda a reconocer el empeoramiento, utilizar correctamente los medicamentos indicados y decidir cuándo solicitar atención urgente. Debe adaptarse a la edad, al tratamiento y a la capacidad de comprensión de la familia. También se deben revisar la técnica inhalatoria, la adherencia, las exposiciones y el seguimiento periódico del control y del riesgo de exacerbaciones.`,
  perlaENARM: "El plan de acción escrito debe indicar qué hacer ante empeoramiento y qué signos requieren atención urgente; forma parte del manejo integral del asma.",
  gpc: {
    mexico: "GPC mexicanas vigentes de educación, seguimiento y automanejo del asma pediátrica.",
    internacional: "GINA. Global Strategy for Asthma Management and Prevention."
  },
  bibliografia: "GINA. Global Strategy for Asthma Management and Prevention; guías internacionales de educación y automanejo del asma."
},

{
  id: "PED-291",
  especialidad: "Pediatría",
  tema: "Asma",
  subtema: "Crisis asmática: hipopotasemia inducida por beta-2 agonistas",
  dificultad: "Muy alta",
  caso: `Adolescente de 14 años ingresa por exacerbación asmática grave y recibe nebulizaciones repetidas de salbutamol. Después de varias dosis presenta temblor, palpitaciones y debilidad muscular. La frecuencia cardiaca es de 148/min; el potasio sérico es de 2.7 mEq/L y el electrocardiograma muestra aplanamiento de la onda T. La función renal es normal.`,
  pregunta: "¿Qué mecanismo explica principalmente la disminución del potasio sérico?",
  opciones: [
    "Pérdida renal obligatoria de potasio por inhibición de la aldosterona",
    "Destrucción muscular con liberación masiva de potasio",
    "Redistribución intracelular del potasio mediada por estimulación beta-2 adrenérgica",
    "Disminución de la absorción intestinal por inflamación bronquial",
    "Retención renal de sodio secundaria a deficiencia de hormona antidiurética"
  ],
  respuestaCorrecta: 2,
  explicacion: `Los agonistas beta-2 estimulan la Na+/K+-ATPasa y favorecen el desplazamiento del potasio hacia el espacio intracelular. Las dosis altas o repetidas pueden producir hipopotasemia, temblor, taquicardia y alteraciones electrocardiográficas. Deben monitorizarse electrolitos y ritmo cardiaco en pacientes graves o con exposiciones intensivas. La corrección del potasio debe individualizarse según la gravedad y el contexto clínico, evitando tanto la reposición insuficiente como la excesiva.`,
  perlaENARM: "Salbutamol en dosis repetidas puede causar hipopotasemia por redistribución intracelular; vigila potasio y electrocardiograma en exacerbaciones graves.",
  gpc: {
    mexico: "Consultar GPC mexicanas vigentes de exacerbación asmática grave y monitorización de electrolitos.",
    internacional: "Global Initiative for Asthma (GINA). Global Strategy for Asthma Management and Prevention."
  },
  bibliografia: "GINA. Global Strategy for Asthma Management and Prevention; textos de farmacología clínica y urgencias pediátricas."
},
{
  id: "PED-292",
  especialidad: "Pediatría",
  tema: "Asma",
  subtema: "Acidosis láctica durante el tratamiento de la exacerbación",
  dificultad: "Muy alta",
  caso: `Adolescente de 15 años con exacerbación asmática recibe salbutamol nebulizado de manera intensiva. Después de varias horas, las sibilancias y la entrada de aire mejoran, pero persiste una taquipnea importante. La gasometría muestra pH de 7.31, bicarbonato de 17 mEq/L y lactato de 5.2 mmol/L. La presión arterial es estable, la perfusión es adecuada y no presenta fiebre.`,
  pregunta: "¿Qué posibilidad debe considerarse al reevaluar la taquipnea persistente?",
  opciones: [
    "Que toda taquipnea persistente demuestra empeoramiento del broncoespasmo",
    "Que la acidosis láctica solo ocurre en choque séptico",
    "Que la mejoría de las sibilancias descarta cualquier alteración metabólica",
    "Que debe suspenderse toda evaluación porque la saturación es normal",
    "Que el uso intensivo de beta-2 agonistas puede contribuir a acidosis láctica, sin dejar de descartar hipoperfusión y otras causas"
  ],
  respuestaCorrecta: 4,
  explicacion: `Los agonistas beta-2 en dosis altas pueden aumentar la producción de lactato y ocasionar acidosis metabólica con taquipnea compensatoria. Esto puede confundirse con persistencia del broncoespasmo y llevar a intensificar innecesariamente el tratamiento. Sin embargo, el lactato elevado exige valorar perfusión, oxigenación, infección y otras causas; la interpretación depende de la evolución clínica y de las mediciones seriadas.`,
  perlaENARM: "Taquipnea persistente con mejoría del flujo aéreo y lactato elevado durante salbutamol intensivo: considera acidosis láctica farmacológica, pero descarta causas peligrosas.",
  gpc: {
    mexico: "Consultar GPC mexicanas vigentes de exacerbación asmática y evaluación de acidosis metabólica en urgencias pediátricas.",
    internacional: "GINA. Global Strategy for Asthma Management and Prevention; literatura clínica sobre acidosis láctica asociada a beta-2 agonistas."
  },
  bibliografia: "GINA. Global Strategy for Asthma Management and Prevention; literatura clínica sobre acidosis láctica inducida por agonistas beta-2."
},
{
  id: "PED-293",
  especialidad: "Pediatría",
  tema: "Asma",
  subtema: "Asma inducida por antiinflamatorios no esteroideos",
  dificultad: "Muy alta",
  caso: `Adolescente de 16 años con asma y rinosinusitis crónica con pólipos nasales presenta congestión nasal intensa, tos, sibilancias y disnea aproximadamente 45 minutos después de ingerir ácido acetilsalicílico por cefalea. No desarrolla urticaria ni angioedema y mejora después de recibir atención por la exacerbación.`,
  pregunta: "¿Qué mecanismo explica mejor este fenotipo de enfermedad respiratoria exacerbada por aspirina?",
  opciones: [
    "Inhibición de COX-1 con alteración del equilibrio de eicosanoides y aumento relativo de mediadores broncoconstrictores derivados de la vía de leucotrienos",
    "Reacción mediada exclusivamente por IgE específica contra el ácido acetilsalicílico",
    "Infección bacteriana de los bronquios desencadenada por el medicamento",
    "Deficiencia congénita de surfactante pulmonar",
    "Depósito de inmunocomplejos en los alvéolos"
  ],
  respuestaCorrecta: 0,
  explicacion: `La enfermedad respiratoria exacerbada por antiinflamatorios no esteroideos se asocia con asma, rinosinusitis crónica y pólipos nasales. La inhibición de COX-1 altera el metabolismo del ácido araquidónico y favorece la producción o acción de cisteinil-leucotrienos, que promueven broncoconstricción e inflamación. No es una alergia IgE clásica en la mayoría de los casos. Deben evitarse las exposiciones desencadenantes y realizar evaluación especializada.`,
  perlaENARM: "Asma más pólipos nasales y reacción respiratoria tras aspirina sugieren enfermedad respiratoria exacerbada por AINE, mediada por alteraciones de eicosanoides.",
  gpc: {
    mexico: "Consultar GPC mexicanas vigentes de asma y rinosinusitis crónica con pólipos nasales.",
    internacional: "GINA. Global Strategy for Asthma Management and Prevention; recomendaciones internacionales sobre enfermedad respiratoria exacerbada por AINE."
  },
  bibliografia: "GINA. Global Strategy for Asthma Management and Prevention; literatura especializada sobre enfermedad respiratoria exacerbada por aspirina."
},
{
  id: "PED-294",
  especialidad: "Pediatría",
  tema: "Asma",
  subtema: "Asma grave y aspergilosis broncopulmonar alérgica",
  dificultad: "Muy alta",
  caso: `Adolescente de 15 años con asma de difícil control presenta exacerbaciones recurrentes, tos productiva con expectoración de tapones mucosos parduzcos y opacidades pulmonares transitorias. Tiene eosinofilia periférica, IgE total marcadamente elevada y sensibilización demostrada a Aspergillus fumigatus. No hay neutropenia ni datos de invasión fúngica.`,
  pregunta: "¿Qué diagnóstico debe considerarse ante esta combinación de hallazgos?",
  opciones: [
    "Neumonía neumocócica recurrente como única explicación",
    "Aspergilosis broncopulmonar alérgica",
    "Fibrosis pulmonar idiopática",
    "Tuberculosis miliar",
    "Edema pulmonar cardiogénico"
  ],
  respuestaCorrecta: 1,
  explicacion: `La aspergilosis broncopulmonar alérgica es una reacción de hipersensibilidad a Aspergillus que aparece principalmente en pacientes con asma o fibrosis quística. Puede asociarse con IgE total elevada, sensibilización específica, eosinofilia, tapones mucosos y opacidades pulmonares transitorias; la imagen puede mostrar bronquiectasias centrales o moco de alta atenuación. El diagnóstico requiere integrar criterios clínicos, inmunológicos y radiológicos actualizados, no un biomarcador aislado.`,
  perlaENARM: "Asma difícil de controlar, IgE elevada, eosinofilia, tapones mucosos y opacidades migratorias: considera aspergilosis broncopulmonar alérgica.",
  gpc: {
    mexico: "Consultar recomendaciones mexicanas vigentes de asma grave y evaluación de aspergilosis broncopulmonar alérgica.",
    internacional: "International Society for Human and Animal Mycology (ISHAM). Revised guidelines for diagnosis and management of allergic bronchopulmonary aspergillosis."
  },
  bibliografia: "ISHAM. Revised Guidelines for Diagnosis and Management of Allergic Bronchopulmonary Aspergillosis; GINA."
},
{
  id: "PED-295",
  especialidad: "Pediatría",
  tema: "Asma",
  subtema: "Tratamiento de mantenimiento y alivio con corticosteroide-formoterol",
  dificultad: "Muy alta",
  caso: `Adolescente de 14 años con asma persistente presenta síntomas frecuentes y dos exacerbaciones durante el último año. Tiene prescrita una combinación inhalada de corticoide y formoterol, pero utiliza un inhalador diferente con salmeterol para aliviar los síntomas entre dosis. La familia considera que ambos medicamentos pueden intercambiarse porque pertenecen al grupo de beta-2 agonistas de acción prolongada.`,
  pregunta: "¿Qué principio farmacológico debe aclararse al seleccionar una estrategia de mantenimiento y alivio con el mismo inhalador?",
  opciones: [
    "Todos los beta-2 agonistas de acción prolongada pueden utilizarse como rescate",
    "El corticoide inhalado debe omitirse durante las exacerbaciones",
    "Salmeterol y formoterol tienen idéntico inicio de acción y son intercambiables como medicación de alivio",
    "La estrategia con corticoide-formoterol depende de formulaciones y pautas específicas; salmeterol no debe sustituirse como inhalador de alivio",
    "La combinación de corticoide y formoterol está contraindicada en todo adolescente"
  ],
  respuestaCorrecta: 3,
  explicacion: `El formoterol tiene un inicio de acción rápido y, en formulaciones específicas con corticoide inhalado, puede utilizarse en estrategias de mantenimiento y alivio conforme a la edad, dosis y guía vigente. Salmeterol no se utiliza como medicación de rescate por su perfil de inicio de acción. No todas las combinaciones ni todos los dispositivos están autorizados para la misma estrategia; es indispensable verificar la formulación y las instrucciones prescritas.`,
  perlaENARM: "No todos los LABA son intercambiables como rescate: las estrategias de mantenimiento y alivio se basan en formulaciones específicas de corticoide-formoterol.",
  gpc: {
    mexico: "Consultar GPC mexicanas vigentes y fichas técnicas autorizadas para tratamiento inhalado del asma en adolescentes.",
    internacional: "GINA. Global Strategy for Asthma Management and Prevention."
  },
  bibliografia: "GINA. Global Strategy for Asthma Management and Prevention; fichas técnicas de combinaciones inhaladas autorizadas."
},
{
  id: "PED-296",
  especialidad: "Pediatría",
  tema: "Asma",
  subtema: "Exacerbación asmática: oxigenación y ventilación",
  dificultad: "Muy alta",
  caso: `Adolescente de 13 años llega a urgencias por crisis asmática grave. Tiene saturación de 88% al aire ambiente, uso intenso de músculos accesorios y dificultad para hablar. Tras tratamiento inicial, la saturación mejora a 95%, pero la gasometría muestra PaCO2 de 42 mmHg, cuando previamente tenía hipocapnia durante la crisis. Continúa fatigado y con entrada de aire disminuida.`,
  pregunta: "¿Por qué una PaCO2 que parece normal puede ser preocupante durante una crisis asmática grave?",
  opciones: [
    "Porque siempre confirma una alcalosis metabólica",
    "Porque demuestra que el paciente ya no tiene obstrucción",
    "Porque en una crisis con hiperventilación se espera con frecuencia una PaCO2 baja; su normalización en un paciente fatigado puede indicar ventilación insuficiente",
    "Porque la PaCO2 no tiene relación con la ventilación alveolar",
    "Porque descarta la necesidad de reevaluar el soporte respiratorio"
  ],
  respuestaCorrecta: 2,
  explicacion: `En la crisis asmática inicial, la hiperventilación suele reducir la PaCO2. Si el paciente continúa con obstrucción grave y fatiga, una PaCO2 que asciende hacia valores normales o elevados puede reflejar reducción de la ventilación alveolar y agotamiento. Debe interpretarse junto con el estado mental, el trabajo respiratorio, la entrada de aire y la evolución gasométrica; no es un criterio aislado para intubación.`,
  perlaENARM: "En asma grave, una PaCO2 normal o ascendente puede ser un signo de alarma cuando persisten la obstrucción y el agotamiento.",
  gpc: {
    mexico: "GPC mexicanas vigentes de crisis asmática grave y manejo de insuficiencia respiratoria pediátrica.",
    internacional: "GINA. Global Strategy for Asthma Management and Prevention; recomendaciones de urgencias y cuidados intensivos pediátricos."
  },
  bibliografia: "GINA. Global Strategy for Asthma Management and Prevention; textos de urgencias y cuidados intensivos pediátricos."
},
{
  id: "PED-297",
  especialidad: "Pediatría",
  tema: "Asma",
  subtema: "Asma y obesidad",
  dificultad: "Muy alta",
  caso: `Adolescente de 15 años con obesidad presenta disnea al subir escaleras, tos ocasional y uso frecuente de salbutamol. La espirometría muestra FEV1 y FVC normales, sin reversibilidad significativa. No hay despertares nocturnos ni sibilancias documentadas durante los episodios. La familia solicita incrementar el tratamiento antiasmático.`,
  pregunta: "¿Qué enfoque ayuda a evitar la escalada innecesaria de tratamiento?",
  opciones: [
    "Confirmar el diagnóstico y evaluar contribuciones de obesidad, desacondicionamiento, respiración disfuncional y otras causas de disnea antes de intensificar la terapia",
    "Aumentar automáticamente la dosis de corticoide inhalado",
    "Diagnosticar asma grave por el uso frecuente de salbutamol, sin revisar la historia",
    "Iniciar un biológico por la presencia de obesidad",
    "Indicar antibióticos para reducir la disnea durante el ejercicio"
  ],
  respuestaCorrecta: 0,
  explicacion: `La obesidad puede contribuir a disnea y limitación del ejercicio, pero no confirma ni excluye asma. Cuando los síntomas no concuerdan con la evidencia objetiva de variabilidad del flujo aéreo, debe reconsiderarse el diagnóstico y evaluar desacondicionamiento, respiración disfuncional, alteraciones del sueño y otras causas según la historia clínica. La escalada farmacológica sin confirmar el mecanismo puede añadir efectos adversos sin beneficio.`,
  perlaENARM: "En un paciente con obesidad y disnea, diferencia asma objetivamente demostrada de desacondicionamiento y otras causas antes de escalar el tratamiento.",
  gpc: {
    mexico: "GPC mexicanas vigentes de asma pediátrica y evaluación integral de obesidad infantil.",
    internacional: "GINA. Global Strategy for Asthma Management and Prevention."
  },
  bibliografia: "GINA. Global Strategy for Asthma Management and Prevention; literatura clínica sobre asma y obesidad pediátrica."
},
{
  id: "PED-298",
  especialidad: "Pediatría",
  tema: "Asma",
  subtema: "Asma y reflujo gastroesofágico",
  dificultad: "Muy alta",
  caso: `Escolar de 11 años con asma persistente presenta tos nocturna a pesar de tratamiento controlador. La familia refiere regurgitación ocasional después de comidas copiosas, pero no hay pirosis frecuente, dolor retroesternal ni disfagia. La técnica inhalatoria y la adherencia son adecuadas. Solicitan iniciar un inhibidor de la bomba de protones para mejorar el asma.`,
  pregunta: "¿Qué principio debe guiar la decisión sobre tratamiento antirreflujo?",
  opciones: [
    "Todo paciente con asma y tos nocturna requiere inhibidor de la bomba de protones",
    "El reflujo siempre es la causa principal del asma difícil de controlar",
    "El tratamiento antirreflujo sustituye al corticoide inhalado",
    "La regurgitación ocasional confirma enfermedad por reflujo con manifestaciones respiratorias",
    "Debe evaluarse si existe enfermedad por reflujo clínicamente significativa; el tratamiento antirreflujo no se indica de rutina solo para mejorar el asma"
  ],
  respuestaCorrecta: 4,
  explicacion: `El reflujo gastroesofágico puede coexistir con el asma, pero tratar el reflujo en ausencia de síntomas o evidencia clínica suficiente no mejora consistentemente el control asmático. La decisión de iniciar tratamiento depende de la presencia de indicaciones gastrointestinales y de la evaluación clínica. Ante asma persistente deben revisarse también exposición a alérgenos, técnica, adherencia, rinitis, obesidad y otras causas de síntomas nocturnos.`,
  perlaENARM: "No prescribas inhibidores de bomba de protones de rutina para asma mal controlada sin evidencia clínica de enfermedad por reflujo que amerite tratamiento.",
  gpc: {
    mexico: "GPC mexicanas vigentes de asma pediátrica y enfermedad por reflujo gastroesofágico.",
    internacional: "GINA. Global Strategy for Asthma Management and Prevention; guías internacionales de enfermedad por reflujo."
  },
  bibliografia: "GINA. Global Strategy for Asthma Management and Prevention; guías clínicas de enfermedad por reflujo gastroesofágico."
},
{
  id: "PED-299",
  especialidad: "Pediatría",
  tema: "Asma",
  subtema: "Asma y exposición al humo de tabaco",
  dificultad: "Muy alta",
  caso: `Escolar de 9 años con asma presenta exacerbaciones frecuentes pese a tratamiento controlador prescrito. La técnica inhalatoria es correcta y la familia asegura adherencia. Durante la entrevista privada, el niño refiere que varios adultos fuman dentro del automóvil cuando lo transportan a la escuela. No hay exposición ocupacional ni otras causas evidentes de mala respuesta.`,
  pregunta: "¿Qué intervención ambiental tiene mayor fundamento para reducir esta exposición?",
  opciones: [
    "Abrir las ventanas durante el consumo de tabaco",
    "Establecer una prohibición completa de fumar dentro del automóvil y del hogar, además de ofrecer apoyo para dejar de fumar a los adultos",
    "Usar aromatizantes para neutralizar el humo",
    "Permitir fumar si el niño no está sentado junto al fumador",
    "Indicar antibióticos preventivos durante la temporada invernal"
  ],
  respuestaCorrecta: 1,
  explicacion: `La exposición al humo de tabaco se relaciona con peor control del asma y mayor riesgo de exacerbaciones. Ventilar el automóvil o fumar lejos del niño no elimina la exposición a contaminantes. La intervención debe establecer ambientes completamente libres de humo y ofrecer apoyo para cesación tabáquica a los cuidadores. El control ambiental complementa, pero no sustituye, el tratamiento farmacológico adecuado.`,
  perlaENARM: "El hogar y el automóvil deben ser completamente libres de humo; abrir ventanas o fumar en otra habitación no elimina la exposición del niño.",
  gpc: {
    mexico: "GPC mexicanas vigentes de asma pediátrica y prevención de exposición al humo de tabaco.",
    internacional: "GINA. Global Strategy for Asthma Management and Prevention; recomendaciones de salud pública sobre humo de tabaco."
  },
  bibliografia: "GINA. Global Strategy for Asthma Management and Prevention; literatura científica sobre humo de tabaco y control del asma infantil."
},
{
  id: "PED-300",
  especialidad: "Pediatría",
  tema: "Asma",
  subtema: "Reevaluación diagnóstica del asma de difícil control",
  dificultad: "Muy alta",
  caso: `Adolescente de 16 años ha sido tratado durante 18 meses como asmático grave con dosis altas de corticoide inhalado y broncodilatador de acción prolongada. Continúa con disnea episódica, pero varias espirometrías no muestran obstrucción ni variabilidad significativa. Durante algunos episodios presenta parestesias, respiración rápida y sensación de opresión faríngea. No se ha documentado respuesta objetiva al broncodilatador.`,
  pregunta: "¿Qué decisión clínica es prioritaria antes de continuar aumentando la intensidad del tratamiento?",
  opciones: [
    "Añadir un biológico sin reevaluar el diagnóstico",
    "Duplicar indefinidamente la dosis de corticoide inhalado",
    "Confirmar de nuevo el diagnóstico y considerar diagnósticos alternativos, incluida respiración disfuncional o disfunción laríngea inducida",
    "Iniciar antibióticos por la persistencia de disnea",
    "Suspender toda evaluación funcional porque los síntomas son subjetivos"
  ],
  respuestaCorrecta: 2,
  explicacion: `El diagnóstico de asma debe sustentarse en síntomas variables y evidencia objetiva de variabilidad del flujo espiratorio siempre que sea posible. La ausencia repetida de obstrucción o reversibilidad, junto con síntomas faríngeos y parestesias, obliga a reconsiderar diagnósticos alternativos o concomitantes, como disfunción laríngea inducida, respiración disfuncional, ansiedad u otras causas cardiopulmonares. La reevaluación debe ser estructurada y evitar tanto la escalada innecesaria como la retirada insegura de tratamiento sin supervisión.`,
  perlaENARM: "Antes de etiquetar asma refractaria, confirma el diagnóstico y busca imitadores; síntomas persistentes sin variabilidad objetiva requieren reevaluación estructurada.",
  gpc: {
    mexico: "GPC mexicanas vigentes de asma difícil de tratar, asma grave y diagnóstico diferencial de disnea.",
    internacional: "GINA. Difficult-to-Treat and Severe Asthma: Guide for Health Professionals."
  },
  bibliografia: "GINA. Difficult-to-Treat and Severe Asthma: Guide for Health Professionals."
 },
  {
    id: "PED-301",
    especialidad: "Pediatría",
    tema: "Laringotraqueítis aguda",
    subtema: "Presentación clínica característica",
    dificultad: "Baja",
    caso: "Niño de 22 meses previamente sano presenta rinorrea y febrícula durante dos días. Durante la madrugada desarrolla tos áspera semejante al ladrido de un perro, disfonía y ruido respiratorio audible durante la inspiración. Se encuentra despierto, acepta líquidos y presenta retracciones supraesternales leves cuando llora.",
    pregunta: "¿Qué estructura anatómica explica principalmente el estridor inspiratorio de este cuadro?",
    opciones: [
      "Bronquiolos terminales con obstrucción por secreciones",
      "Alvéolos con ocupación inflamatoria difusa",
      "Espacio subglótico con edema que estrecha la vía aérea superior",
      "Pleura visceral con inflamación aguda",
      "Parénquima pulmonar con pérdida de elasticidad"
    ],
    respuestaCorrecta: 2,
    explicacion: "La laringotraqueítis produce inflamación y edema de la laringe, especialmente en la región subglótica. El estrechamiento de esta vía aérea genera flujo turbulento y estridor predominantemente inspiratorio. La tos perruna y la disfonía reflejan la afectación laríngea. La gravedad depende del grado de obstrucción y del trabajo respiratorio, no únicamente de la intensidad de la tos.",
    perlaENARM: "Tos perruna, disfonía y estridor inspiratorio después de un pródromo catarral constituyen la presentación clásica del crup.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente aplicable a laringotraqueítis aguda pediátrica.",
      internacional: "Guías pediátricas internacionales vigentes para crup y obstrucción aguda de la vía aérea superior."
    },
    bibliografia: "Manual de Pediatría adjunto, capítulo de patología respiratoria pediátrica; guías clínicas pediátricas sobre crup."
  },
  {
    id: "PED-302",
    especialidad: "Pediatría",
    tema: "Laringotraqueítis aguda",
    subtema: "Etiología viral",
    dificultad: "Baja",
    caso: "En una guardería, varios niños presentan infección de vías respiratorias superiores durante el otoño. Un niño de 2 años desarrolla posteriormente tos metálica, disfonía y estridor inspiratorio. No tiene sialorrea ni dificultad para deglutir. El cuadro es compatible con laringotraqueítis viral.",
    pregunta: "¿Qué agente etiológico se asocia clásicamente con este síndrome?",
    opciones: [
      "Virus parainfluenza, especialmente el tipo 1",
      "Virus de la hepatitis A",
      "Rotavirus",
      "Virus de Epstein-Barr como causa habitual",
      "Parvovirus B19"
    ],
    respuestaCorrecta: 0,
    explicacion: "Los virus parainfluenza son causas clásicas de laringotraqueítis viral, en particular el tipo 1. También pueden participar influenza, virus sincitial respiratorio, adenovirus y rinovirus. La presentación clínica habitual incluye pródromo catarral seguido de tos perruna, disfonía y estridor. En un cuadro típico no se requieren pruebas virológicas para establecer el diagnóstico.",
    perlaENARM: "Parainfluenza tipo 1 es la asociación clásica de examen con crup; recuerda que otros virus respiratorios también pueden producirlo.",
    gpc: {
      mexico: "Consultar recomendaciones mexicanas vigentes sobre diagnóstico clínico de laringotraqueítis.",
      internacional: "Guías pediátricas internacionales vigentes para crup."
    },
    bibliografia: "Manual de Pediatría adjunto, apartado de laringitis vírica; literatura pediátrica sobre etiología viral del crup."
  },
  {
    id: "PED-303",
    especialidad: "Pediatría",
    tema: "Laringotraqueítis aguda",
    subtema: "Diagnóstico clínico",
    dificultad: "Baja",
    caso: "Lactante de 18 meses con rinorrea y tos leve desde hace 36 horas presenta por la noche tos perruna y disfonía. Tiene estridor inspiratorio únicamente cuando llora, sin tiraje en reposo, y permanece activo. No hay antecedente de atragantamiento ni signos de toxicidad.",
    pregunta: "¿Qué estrategia diagnóstica está indicada en este escenario típico?",
    opciones: [
      "Tomografía cervical con contraste en todos los casos",
      "Hemocultivos y cultivo de secreciones laríngeas de rutina",
      "Broncoscopia urgente aunque no existan datos atípicos",
      "Radiografía cervical obligatoria antes de tratar",
      "Diagnóstico clínico basado en la historia y la exploración respiratoria"
    ],
    respuestaCorrecta: 4,
    explicacion: "El crup típico se diagnostica clínicamente por la combinación de pródromo respiratorio, tos perruna, disfonía y estridor. Las pruebas de imagen y los estudios de laboratorio no se solicitan de rutina en un niño estable con presentación característica. Deben reservarse para situaciones seleccionadas en las que exista incertidumbre diagnóstica, evolución atípica o sospecha de otra enfermedad.",
    perlaENARM: "Crup típico y paciente estable: diagnóstico clínico. No retrases el tratamiento para obtener radiografías innecesarias.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente para el abordaje diagnóstico del crup pediátrico.",
      internacional: "Guías pediátricas internacionales vigentes para diagnóstico de crup."
    },
    bibliografia: "Manual de Pediatría adjunto, capítulo de laringitis; guías clínicas pediátricas sobre evaluación del crup."
  },
  {
    id: "PED-304",
    especialidad: "Pediatría",
    tema: "Laringotraqueítis aguda",
    subtema: "Tratamiento antiinflamatorio",
    dificultad: "Baja",
    caso: "Niña de 3 años con tos perruna, disfonía y estridor inspiratorio leve es evaluada en urgencias. Está alerta, mantiene una saturación normal y no presenta signos de agotamiento. La exploración es compatible con crup sin datos de obstrucción grave.",
    pregunta: "¿Qué medicamento reduce el edema de la vía aérea y se recomienda como tratamiento farmacológico en el crup?",
    opciones: [
      "Amoxicilina en todos los pacientes",
      "Dexametasona",
      "Furosemida intravenosa",
      "Salbutamol como único tratamiento antiinflamatorio",
      "Antihistamínico sedante como monoterapia"
    ],
    respuestaCorrecta: 1,
    explicacion: "La dexametasona es un corticoide sistémico utilizado en el crup para reducir la inflamación y mejorar los síntomas. Se recomienda en distintos grados de gravedad; la vía oral suele ser apropiada cuando el niño puede recibir el medicamento. La dosis y la vía se determinan conforme al protocolo clínico aplicable. Los antibióticos no están indicados de rutina porque la causa habitual es viral.",
    perlaENARM: "Dexametasona es el tratamiento farmacológico central del crup, incluso en cuadros leves según las recomendaciones clínicas vigentes.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente para dosis y administración de corticoides en laringotraqueítis.",
      internacional: "Guías pediátricas internacionales vigentes para tratamiento farmacológico del crup."
    },
    bibliografia: "Manual de Pediatría adjunto, apartado de tratamiento de laringitis; guías pediátricas sobre corticoides en crup."
  },
  {
    id: "PED-305",
    especialidad: "Pediatría",
    tema: "Laringotraqueítis aguda",
    subtema: "Uso de adrenalina nebulizada",
    dificultad: "Baja",
    caso: "Niño de 2 años y medio presenta tos perruna, estridor en reposo y retracciones supraesternales e intercostales. Está consciente, pero muestra aumento evidente del trabajo respiratorio. Se inicia tratamiento para crup moderado a grave y se mantiene monitorizado.",
    pregunta: "¿Qué fármaco inhalado puede proporcionar una mejoría rápida y transitoria de la obstrucción en este paciente?",
    opciones: [
      "Budesonida oral",
      "Ipratropio como monoterapia obligatoria",
      "Adrenalina nebulizada",
      "Cromoglicato inhalado",
      "Solución salina hipertónica como tratamiento específico"
    ],
    respuestaCorrecta: 2,
    explicacion: "La adrenalina nebulizada produce vasoconstricción de la mucosa y reduce temporalmente el edema de la vía aérea superior. Está indicada en crup con síntomas moderados o graves, especialmente ante estridor en reposo y aumento del trabajo respiratorio. Su efecto puede disminuir después de un periodo de observación, por lo que se requiere vigilancia clínica y reevaluación tras la administración.",
    perlaENARM: "Estridor en reposo con dificultad respiratoria significativa: considera adrenalina nebulizada y vigilancia. Su efecto es rápido, pero transitorio.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente para indicaciones, dosis y monitorización de adrenalina nebulizada.",
      internacional: "Guías pediátricas internacionales vigentes para crup moderado y grave."
    },
    bibliografia: "Manual de Pediatría adjunto, apartado de tratamiento de laringitis; guías clínicas sobre adrenalina nebulizada."
  },
  {
    id: "PED-306",
    especialidad: "Pediatría",
    tema: "Laringotraqueítis aguda",
    subtema: "Diferenciación de estridor y sibilancias",
    dificultad: "Baja",
    caso: "Escolar de 4 años presenta tos perruna y disfonía después de un catarro. Durante la inspiración se escucha un ruido áspero más intenso en el cuello; la auscultación pulmonar no muestra sibilancias espiratorias difusas. No hay antecedente de atragantamiento.",
    pregunta: "¿Qué característica del ruido respiratorio favorece una obstrucción de la vía aérea superior?",
    opciones: [
      "Estridor de predominio inspiratorio audible en el cuello",
      "Sibilancias polifónicas predominantemente espiratorias",
      "Estertores crepitantes bibasales persistentes",
      "Roce pleural durante la inspiración profunda",
      "Roncus que desaparecen después de la tos"
    ],
    respuestaCorrecta: 0,
    explicacion: "El estridor es un ruido respiratorio áspero que suele reflejar obstrucción de la vía aérea superior. En el crup predomina durante la inspiración por el estrechamiento de la región laríngea y subglótica. Las sibilancias suelen originarse en vías aéreas intratorácicas de menor calibre y son típicamente espiratorias. La localización y la fase respiratoria del ruido ayudan a orientar el diagnóstico.",
    perlaENARM: "Estridor inspiratorio orienta a vía aérea superior; sibilancias espiratorias orientan a obstrucción de vías aéreas inferiores.",
    gpc: {
      mexico: "Consultar recomendaciones mexicanas vigentes para evaluación del estridor pediátrico.",
      internacional: "Guías pediátricas internacionales vigentes para diagnóstico diferencial de estridor."
    },
    bibliografia: "Manual de Pediatría adjunto, patología respiratoria pediátrica y características del estridor."
  },
  {
    id: "PED-307",
    especialidad: "Pediatría",
    tema: "Laringotraqueítis aguda",
    subtema: "Signos de gravedad",
    dificultad: "Baja",
    caso: "Niño de 20 meses con crup recibe tratamiento inicial y permanece en observación. Posteriormente se muestra somnoliento, con retracciones marcadas, entrada de aire disminuida y menor intensidad del estridor, aunque el esfuerzo respiratorio continúa siendo evidente.",
    pregunta: "¿Qué interpretación clínica debe hacerse ante la disminución del estridor acompañada de somnolencia y menor entrada de aire?",
    opciones: [
      "Resolución confirmada del edema subglótico",
      "Efecto esperado sin necesidad de reevaluación",
      "Evolución favorable porque ya no hay tos perruna",
      "Probable agotamiento y obstrucción grave que requieren atención inmediata",
      "Manifestación exclusiva de ansiedad posterior al tratamiento"
    ],
    respuestaCorrecta: 3,
    explicacion: "La somnolencia, el esfuerzo respiratorio marcado y la reducción de la entrada de aire son signos de alarma. Un estridor menos intenso no demuestra mejoría si disminuye el flujo aéreo debido a una obstrucción crítica o agotamiento. Se requiere reevaluación inmediata, apoyo de un equipo experto en vía aérea y tratamiento urgente según la gravedad.",
    perlaENARM: "La disminución del ruido respiratorio en un niño que empeora puede indicar flujo aéreo críticamente reducido; nunca interpretes el estridor de forma aislada.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes para manejo de obstrucción grave de la vía aérea pediátrica.",
      internacional: "Guías pediátricas internacionales vigentes para evaluación de crup grave."
    },
    bibliografia: "Manual de Pediatría adjunto; guías clínicas pediátricas sobre signos de alarma y crup grave."
  },
  {
    id: "PED-308",
    especialidad: "Pediatría",
    tema: "Laringotraqueítis aguda",
    subtema: "Diagnóstico diferencial: epiglotitis",
    dificultad: "Baja",
    caso: "Niño de 4 años presenta fiebre alta, aspecto tóxico, dolor intenso al deglutir, sialorrea y postura inclinada hacia adelante. La voz está apagada y la dificultad respiratoria progresa rápidamente. No tiene la tos perruna característica del crup.",
    pregunta: "¿Qué diagnóstico debe sospecharse por la combinación de odinofagia intensa, sialorrea y postura en trípode?",
    opciones: [
      "Laringotraqueítis viral leve",
      "Epiglotitis aguda",
      "Bronquiolitis por virus sincitial respiratorio",
      "Laringomalacia congénita",
      "Rinitis alérgica aguda"
    ],
    respuestaCorrecta: 1,
    explicacion: "La fiebre alta, el aspecto tóxico, la sialorrea, la dificultad para deglutir y la postura en trípode orientan a epiglotitis, una urgencia por riesgo de obstrucción súbita de la vía aérea. Debe solicitarse ayuda experta y evitar maniobras que agiten al niño o la exploración faríngea forzada. El crup suele presentar tos perruna y un estado general relativamente mejor.",
    perlaENARM: "Sialorrea, disfagia intensa, fiebre alta y postura en trípode son datos clásicos de epiglotitis, no de crup típico.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes para sospecha y manejo urgente de epiglotitis pediátrica.",
      internacional: "Guías pediátricas internacionales vigentes para epiglotitis y obstrucción de vía aérea superior."
    },
    bibliografia: "Manual de Pediatría adjunto, diagnóstico diferencial entre laringitis y epiglotitis."
  },
  {
    id: "PED-309",
    especialidad: "Pediatría",
    tema: "Laringotraqueítis aguda",
    subtema: "Medidas de soporte",
    dificultad: "Baja",
    caso: "Lactante de 2 años con crup leve permanece tranquilo en brazos de su cuidador. Está bien perfundido, mantiene saturación normal y presenta estridor únicamente al llorar. La familia pregunta si debe administrarse oxígeno de forma rutinaria aunque no exista hipoxemia.",
    pregunta: "¿Cuál es el principio de soporte más apropiado en este paciente estable?",
    opciones: [
      "Separarlo de su cuidador para realizar exploraciones repetidas",
      "Administrar oxígeno a alto flujo a todos los niños con tos perruna",
      "Indicar antibióticos profilácticos para prevenir neumonía",
      "Realizar intubación preventiva por el diagnóstico de crup",
      "Mantenerlo tranquilo, minimizar la agitación y vigilar la evolución respiratoria"
    ],
    respuestaCorrecta: 4,
    explicacion: "La agitación y el llanto pueden aumentar el trabajo respiratorio y empeorar el estridor. En un niño estable es conveniente mantenerlo cómodo con su cuidador y evitar procedimientos innecesarios. El oxígeno se utiliza cuando existe hipoxemia o una indicación clínica concreta, mientras que la vigilancia debe ajustarse a la gravedad. Las medidas de soporte no sustituyen el corticoide indicado para el crup.",
    perlaENARM: "En la obstrucción de la vía aérea superior, tranquilizar al niño y evitar maniobras innecesarias forma parte del manejo seguro.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente para medidas de soporte y monitorización en crup.",
      internacional: "Guías pediátricas internacionales vigentes para manejo de crup."
    },
    bibliografia: "Manual de Pediatría adjunto; recomendaciones clínicas sobre soporte y monitorización del crup."
  },
  {
    id: "PED-310",
    especialidad: "Pediatría",
    tema: "Laringotraqueítis aguda",
    subtema: "Uso de estudios de imagen",
    dificultad: "Baja",
    caso: "Niña de 3 años con tos perruna, disfonía y estridor inspiratorio leve después de un catarro es evaluada en consulta. No presenta sialorrea, fiebre alta, hipoxemia ni datos de cuerpo extraño. La exploración es compatible con crup típico.",
    pregunta: "¿En qué circunstancia estaría más justificado solicitar una radiografía cervical?",
    opciones: [
      "En todo niño con tos nocturna, aunque no tenga estridor",
      "Como requisito antes de administrar dexametasona",
      "Cuando existe incertidumbre diagnóstica o sospecha de una causa alternativa y el paciente está estable",
      "Para cuantificar de forma rutinaria el edema en cada reevaluación",
      "Para descartar definitivamente cualquier obstrucción si la imagen es normal"
    ],
    respuestaCorrecta: 2,
    explicacion: "El diagnóstico de crup es clínico y la radiografía no se requiere de rutina. Puede considerarse si la presentación es atípica o existe duda diagnóstica, siempre que el paciente esté suficientemente estable y el estudio no retrase la atención necesaria. La imagen no descarta por completo otras causas de obstrucción y nunca debe anteponerse a la estabilización de una vía aérea amenazada.",
    perlaENARM: "No solicites radiografía de rutina en el crup típico. Si hay signos de obstrucción grave, la prioridad es estabilizar la vía aérea.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente para indicaciones de imagen en laringotraqueítis pediátrica.",
      internacional: "Guías pediátricas internacionales vigentes para evaluación diagnóstica del crup."
    },
    bibliografia: "Manual de Pediatría adjunto, apartado de diagnóstico de laringitis; guías clínicas pediátricas sobre crup."
  },
  
  {
    id: "PED-311",
    especialidad: "Pediatría",
    tema: "Laringotraqueítis aguda",
    subtema: "Clasificación de gravedad",
    dificultad: "Media",
    caso: "Niño de 2 años y 8 meses con rinorrea y tos perruna desde hace 24 horas. En urgencias presenta estridor audible en reposo, retracciones supraesternales y subcostales moderadas, pero permanece alerta, puede hablar y mantiene una entrada de aire bilateral adecuada. La saturación de oxígeno es de 96% al aire ambiente.",
    pregunta: "¿Qué característica permite clasificar el cuadro como algo más que una laringotraqueítis leve?",
    opciones: [
      "La presencia de rinorrea durante el pródromo",
      "La edad menor de cinco años",
      "La tos perruna durante la noche",
      "El estridor en reposo acompañado de retracciones",
      "La saturación de oxígeno conservada"
    ],
    respuestaCorrecta: 3,
    explicacion: "El estridor en reposo y las retracciones indican obstrucción clínicamente significativa y orientan a crup moderado, aunque la saturación permanezca normal. La gravedad se determina mediante la valoración conjunta del estridor, el trabajo respiratorio, la entrada de aire, el estado mental y la evolución clínica.",
    perlaENARM: "El estridor en reposo diferencia un cuadro más significativo del estridor que aparece únicamente con el llanto.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente sobre evaluación de gravedad de laringotraqueítis pediátrica.",
      internacional: "Guías pediátricas internacionales vigentes para evaluación del crup."
    },
    bibliografia: "Manual de Pediatría adjunto, apartado de laringitis; guías clínicas pediátricas sobre gravedad del crup."
  },
  {
    id: "PED-312",
    especialidad: "Pediatría",
    tema: "Laringotraqueítis aguda",
    subtema: "Tratamiento según gravedad",
    dificultad: "Media",
    caso: "Niña de 3 años con crup presenta estridor en reposo, retracciones moderadas y ansiedad por la dificultad respiratoria. No tiene sialorrea ni postura en trípode. Se encuentra en urgencias con monitorización disponible.",
    pregunta: "Además del corticoide sistémico, ¿qué intervención farmacológica está indicada para lograr una mejoría rápida de la obstrucción?",
    opciones: [
      "Adrenalina nebulizada",
      "Amoxicilina oral",
      "Salbutamol inhalado como tratamiento específico del edema subglótico",
      "Antihistamínico sedante",
      "Montelukast oral como medicación de rescate"
    ],
    respuestaCorrecta: 0,
    explicacion: "La adrenalina nebulizada produce vasoconstricción de la mucosa y reduce transitoriamente el edema de la vía aérea superior. Se utiliza en cuadros moderados o graves, junto con corticoide sistémico y vigilancia clínica. La respuesta debe reevaluarse porque el efecto de la adrenalina disminuye con el tiempo.",
    perlaENARM: "En crup con estridor en reposo y dificultad respiratoria, la adrenalina nebulizada proporciona alivio rápido, pero requiere observación posterior.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente para tratamiento de crup moderado o grave.",
      internacional: "Guías pediátricas internacionales vigentes para tratamiento de laringotraqueítis."
    },
    bibliografia: "Manual de Pediatría adjunto; guías clínicas pediátricas sobre adrenalina nebulizada y corticoides."
  },
  {
    id: "PED-313",
    especialidad: "Pediatría",
    tema: "Laringotraqueítis aguda",
    subtema: "Observación después de adrenalina",
    dificultad: "Media",
    caso: "Lactante de 26 meses con crup moderado recibe dexametasona y adrenalina nebulizada. A los 20 minutos desaparece el estridor en reposo y disminuyen las retracciones. La familia solicita el alta inmediata porque el niño parece encontrarse bien.",
    pregunta: "¿Qué aspecto debe considerarse antes de decidir el egreso?",
    opciones: [
      "Realizar una tomografía cervical a todos los pacientes",
      "Administrar antibióticos para prevenir una recaída",
      "Mantener al niño en ayuno durante 24 horas",
      "Repetir adrenalina de forma automática aunque permanezca asintomático",
      "Observar la evolución durante el periodo recomendado y confirmar estabilidad sin recurrencia del estridor en reposo"
    ],
    respuestaCorrecta: 4,
    explicacion: "La mejoría tras adrenalina nebulizada puede ser transitoria. El paciente debe permanecer en observación durante el intervalo establecido por el protocolo clínico, con reevaluación del estridor en reposo, trabajo respiratorio, entrada de aire y capacidad para hidratarse. El egreso depende de la estabilidad clínica y de la ausencia de recurrencia significativa.",
    perlaENARM: "La respuesta inicial a adrenalina no basta para decidir el alta: debe descartarse recurrencia de la obstrucción durante la observación.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente sobre observación y criterios de alta en crup.",
      internacional: "Guías pediátricas internacionales vigentes para disposición clínica tras adrenalina nebulizada."
    },
    bibliografia: "Manual de Pediatría adjunto; guías clínicas pediátricas para observación y alta en laringotraqueítis."
  },
  {
    id: "PED-314",
    especialidad: "Pediatría",
    tema: "Laringotraqueítis aguda",
    subtema: "Diagnóstico diferencial: traqueítis bacteriana",
    dificultad: "Media",
    caso: "Niño de 5 años presenta un cuadro inicial de tos y rinorrea que progresa a fiebre alta, aspecto tóxico, estridor intenso y dificultad respiratoria. No mejora como se esperaba después del tratamiento habitual del crup y desarrolla secreciones respiratorias espesas.",
    pregunta: "¿Qué diagnóstico debe considerarse ante esta evolución y la falta de respuesta al tratamiento inicial?",
    opciones: [
      "Laringomalacia congénita",
      "Traqueítis bacteriana",
      "Rinitis alérgica",
      "Asma inducida por ejercicio",
      "Reflujo gastroesofágico no complicado"
    ],
    respuestaCorrecta: 1,
    explicacion: "La traqueítis bacteriana puede comenzar con síntomas respiratorios similares a una infección viral y evolucionar a fiebre elevada, toxicidad sistémica, secreciones espesas y obstrucción importante. La falta de respuesta al tratamiento convencional del crup es una señal de alarma. Se requiere manejo hospitalario urgente, evaluación experta de la vía aérea y tratamiento antimicrobiano intravenoso según el protocolo local.",
    perlaENARM: "Fiebre alta, aspecto tóxico, secreciones espesas y mala respuesta al tratamiento habitual obligan a sospechar traqueítis bacteriana.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes para obstrucción infecciosa grave de la vía aérea pediátrica.",
      internacional: "Guías pediátricas internacionales vigentes para traqueítis bacteriana."
    },
    bibliografia: "Manual de Pediatría adjunto; literatura pediátrica sobre traqueítis bacteriana y diagnóstico diferencial del crup."
  },
  {
    id: "PED-315",
    especialidad: "Pediatría",
    tema: "Laringotraqueítis aguda",
    subtema: "Diagnóstico diferencial: aspiración de cuerpo extraño",
    dificultad: "Media",
    caso: "Niño de 2 años presenta tos y ruido respiratorio de inicio abrupto mientras jugaba con piezas pequeñas. No había tenido síntomas catarrales previos. En la exploración se identifica estridor y disminución asimétrica de la entrada de aire.",
    pregunta: "¿Qué elemento clínico favorece más una obstrucción por cuerpo extraño frente a un crup viral?",
    opciones: [
      "Tos perruna después de un pródromo catarral de varios días",
      "Disfonía leve que empeora durante la noche",
      "Inicio súbito durante el juego, sin pródromo infeccioso",
      "Antecedente de rinorrea y febrícula",
      "Episodios de tos que aparecen después de un catarro"
    ],
    respuestaCorrecta: 2,
    explicacion: "La aspiración de cuerpo extraño suele presentarse de forma abrupta durante la alimentación o el juego y puede producir hallazgos asimétricos. El crup habitualmente sigue a un pródromo viral y desarrolla tos perruna, disfonía y estridor. Ante la sospecha de cuerpo extraño con compromiso de la vía aérea, la evaluación y el manejo deben ser urgentes.",
    perlaENARM: "Inicio súbito y asimetría respiratoria en un niño pequeño son pistas importantes de aspiración de cuerpo extraño.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes para sospecha de aspiración de cuerpo extraño.",
      internacional: "Guías pediátricas internacionales vigentes para obstrucción de vía aérea por cuerpo extraño."
    },
    bibliografia: "Manual de Pediatría adjunto; literatura pediátrica sobre aspiración de cuerpo extraño y estridor."
  },
  {
    id: "PED-316",
    especialidad: "Pediatría",
    tema: "Laringotraqueítis aguda",
    subtema: "Corticoides y prevención de progresión",
    dificultad: "Media",
    caso: "Niño de 18 meses con crup leve recibe dexametasona oral. Sus padres preguntan por qué se administra un corticoide si el niño no presenta hipoxemia y solo tiene estridor cuando llora.",
    pregunta: "¿Cuál es el fundamento fisiopatológico del beneficio de la dexametasona?",
    opciones: [
      "Disminuye la inflamación y el edema de la mucosa de la vía aérea superior",
      "Elimina directamente todos los virus respiratorios",
      "Produce broncodilatación beta-2 inmediata como mecanismo principal",
      "Aumenta la secreción de moco para expulsar el agente causal",
      "Suprime de forma inmediata el reflejo de la tos mediante sedación"
    ],
    respuestaCorrecta: 0,
    explicacion: "El corticoide reduce la respuesta inflamatoria y el edema laríngeo-subglótico, lo que mejora los síntomas y disminuye la probabilidad de necesitar nuevas intervenciones. Su efecto no depende de que exista hipoxemia. No actúa como antiviral ni como broncodilatador beta-2 de acción rápida.",
    perlaENARM: "El mecanismo principal del corticoide en crup es antiinflamatorio: reduce el edema de la vía aérea superior.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente sobre tratamiento con corticoides en crup pediátrico.",
      internacional: "Guías pediátricas internacionales vigentes para uso de corticoides en laringotraqueítis."
    },
    bibliografia: "Manual de Pediatría adjunto; evidencia clínica sobre corticoides en laringotraqueítis aguda."
  },
  {
    id: "PED-317",
    especialidad: "Pediatría",
    tema: "Laringotraqueítis aguda",
    subtema: "Medidas no recomendadas de rutina",
    dificultad: "Media",
    caso: "Niña de 4 años con crup típico, sin datos de infección bacteriana, acude a consulta. Su cuidador solicita un antibiótico porque considera que la tos intensa indica una infección bacteriana. La niña está activa, sin fiebre alta ni signos de toxicidad.",
    pregunta: "¿Cuál es la razón principal para no indicar antibióticos de rutina en este caso?",
    opciones: [
      "Los antibióticos empeoran inevitablemente la obstrucción laríngea",
      "La tos perruna excluye cualquier infección",
      "Los corticoides están contraindicados si existe una infección viral",
      "La causa habitual es viral y no hay datos que sugieran una infección bacteriana",
      "Los antibióticos sustituyen la necesidad de valorar la gravedad"
    ],
    respuestaCorrecta: 3,
    explicacion: "La laringotraqueítis típica suele ser viral. Sin evidencia de una complicación bacteriana o de otro diagnóstico que requiera antimicrobianos, los antibióticos no aportan beneficio y pueden causar efectos adversos. La prioridad es evaluar la gravedad, administrar el tratamiento indicado y proporcionar vigilancia e instrucciones sobre signos de alarma.",
    perlaENARM: "No se indican antibióticos de rutina en el crup viral no complicado.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente sobre uso racional de antimicrobianos en infecciones respiratorias pediátricas.",
      internacional: "Guías pediátricas internacionales vigentes para tratamiento del crup viral."
    },
    bibliografia: "Manual de Pediatría adjunto; recomendaciones clínicas sobre manejo de laringotraqueítis viral."
  },
  {
    id: "PED-318",
    especialidad: "Pediatría",
    tema: "Laringotraqueítis aguda",
    subtema: "Factores anatómicos y fisiopatología",
    dificultad: "Media",
    caso: "Dos niños presentan edema subglótico de magnitud similar durante una infección viral. El primero tiene 10 meses y el segundo 9 años. El lactante desarrolla estridor y retracciones más evidentes, mientras el escolar conserva una ventilación relativamente cómoda.",
    pregunta: "¿Qué propiedad anatómica explica principalmente la mayor repercusión del edema en el lactante?",
    opciones: [
      "Mayor volumen pulmonar residual en relación con la edad",
      "Menor diámetro basal de la vía aérea, que amplifica el efecto del edema",
      "Ausencia completa de cartílago laríngeo durante el primer año",
      "Mayor capacidad de difusión de oxígeno en la mucosa",
      "Mayor calibre subglótico en comparación con el escolar"
    ],
    respuestaCorrecta: 1,
    explicacion: "En los lactantes, el menor diámetro de la vía aérea hace que una reducción relativamente pequeña del radio aumente de forma importante la resistencia al flujo. Por ello, el edema subglótico puede causar síntomas más intensos que en un niño mayor. La evaluación debe considerar edad, trabajo respiratorio, entrada de aire y signos de agotamiento.",
    perlaENARM: "El pequeño diámetro de la vía aérea del lactante explica por qué un edema subglótico relativamente limitado puede causar obstrucción clínicamente importante.",
    gpc: {
      mexico: "Consultar recomendaciones mexicanas vigentes para evaluación de obstrucción de vía aérea superior en lactantes.",
      internacional: "Guías pediátricas internacionales vigentes sobre fisiopatología y gravedad del crup."
    },
    bibliografia: "Manual de Pediatría adjunto; literatura pediátrica sobre anatomía de la vía aérea y laringotraqueítis."
  },
  {
    id: "PED-319",
    especialidad: "Pediatría",
    tema: "Laringotraqueítis aguda",
    subtema: "Criterios de reevaluación urgente",
    dificultad: "Media",
    caso: "Niño de 3 años con crup recibe tratamiento y regresa a urgencias horas después por empeoramiento. Presenta estridor persistente en reposo, retracciones progresivas y dificultad para beber. La familia refiere que ahora está menos activo que al inicio.",
    pregunta: "¿Qué hallazgo adicional elevaría especialmente la preocupación por insuficiencia respiratoria inminente?",
    opciones: [
      "Rinorrea transparente",
      "Tos que aumenta cuando llora",
      "Disfonía aislada sin dificultad respiratoria",
      "Febrícula con buen estado general",
      "Somnolencia progresiva y reducción de la entrada de aire"
    ],
    respuestaCorrecta: 4,
    explicacion: "La alteración del estado mental y la disminución de la entrada de aire pueden indicar hipoxemia, agotamiento o flujo aéreo críticamente reducido. En este contexto se requiere atención urgente y preparación para el manejo avanzado de la vía aérea por personal experimentado. No debe retrasarse la estabilización para completar estudios no esenciales.",
    perlaENARM: "Alteración del estado mental, agotamiento y entrada de aire reducida son signos de alarma en cualquier obstrucción respiratoria pediátrica.",
    gpc: {
      mexico: "Consultar protocolos mexicanos vigentes para atención urgente de obstrucción grave de vía aérea pediátrica.",
      internacional: "Guías pediátricas internacionales vigentes para evaluación del crup grave."
    },
    bibliografia: "Manual de Pediatría adjunto; guías clínicas sobre signos de gravedad y manejo de la vía aérea."
  },
  {
    id: "PED-320",
    especialidad: "Pediatría",
    tema: "Laringotraqueítis aguda",
    subtema: "Criterios de egreso y educación familiar",
    dificultad: "Media",
    caso: "Lactante de 2 años atendido por crup moderado mejora tras recibir tratamiento. Durante la observación permanece alerta, tolera líquidos, no presenta estridor en reposo y tiene un trabajo respiratorio mínimo. Sus cuidadores viven cerca del hospital y comprenden las instrucciones de vigilancia.",
    pregunta: "¿Qué conjunto de condiciones apoya mejor la posibilidad de egreso tras la reevaluación clínica?",
    opciones: [
      "Persistencia de estridor en reposo, aunque haya mejorado la tos",
      "Necesidad repetida de adrenalina sin estabilidad posterior",
      "Ausencia de estridor en reposo, trabajo respiratorio mínimo, tolerancia oral e instrucciones claras de retorno",
      "Somnolencia persistente y entrada de aire disminuida",
      "Hipoxemia no resuelta compensada con menor intensidad de la tos"
    ],
    respuestaCorrecta: 2,
    explicacion: "El egreso puede considerarse cuando el niño permanece clínicamente estable, no presenta estridor en reposo ni dificultad respiratoria significativa, tolera líquidos y cuenta con cuidadores capaces de reconocer signos de alarma. La decisión debe incorporar el tiempo de observación requerido después de adrenalina, la respuesta sostenida y las condiciones de seguimiento.",
    perlaENARM: "El alta del crup depende de la estabilidad respiratoria sostenida y de instrucciones claras para regresar ante estridor en reposo, retracciones o deterioro general.",
    gpc: {
      mexico: "Consultar la GPC mexicana vigente sobre criterios de egreso y seguimiento del crup pediátrico.",
      internacional: "Guías pediátricas internacionales vigentes para disposición clínica tras laringotraqueítis."
    },
    bibliografia: "Manual de Pediatría adjunto; guías clínicas pediátricas sobre observación, egreso y educación familiar en crup."
  },

{
  id: "PED-321",
  especialidad: "Pediatría",
  tema: "Laringotraqueítis aguda",
  subtema: "Diagnóstico diferencial y gravedad clínica",
  dificultad: "Alta",
  caso: "Niño de 2 años con 24 horas de rinorrea y tos perruna. Durante la noche presenta disfonía, estridor inspiratorio en reposo y retracciones supraesternales. Está despierto, interactúa con sus padres y mantiene adecuada entrada de aire bilateral. No presenta sialorrea ni dificultad para deglutir.",
  pregunta: "¿Qué característica permite clasificar el cuadro como laringotraqueítis al menos moderada y orienta a administrar tratamiento adicional a un corticosteroide?",
  opciones: [
    "La presencia aislada de tos perruna durante la noche",
    "La rinorrea previa al inicio de la tos",
    "El estridor inspiratorio en reposo acompañado de retracciones",
    "La disfonía sin alteraciones respiratorias",
    "La edad menor de tres años"
  ],
  respuestaCorrecta: 2,
  explicacion: "El estridor en reposo y las retracciones indican obstrucción clínicamente significativa de la vía aérea superior. En cuadros moderados o graves se considera adrenalina nebulizada además de corticosteroide, con vigilancia posterior por posible recurrencia de los síntomas. La tos perruna, la disfonía y la edad son compatibles con el diagnóstico, pero no determinan por sí solas la gravedad.",
  perlaENARM: "El estridor en reposo diferencia la enfermedad moderada de la presentación leve; las retracciones, el agotamiento y la entrada de aire disminuida ayudan a reconocer mayor compromiso.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para diagnóstico y tratamiento de laringotraqueítis aguda en pediatría.",
    internacional: "Canadian Paediatric Society. Acute management of croup in the emergency department."
  },
  bibliografia: "Harrison. Principios de Medicina Interna; Manual de Pediatría aportado por el usuario; Canadian Paediatric Society, Acute management of croup in the emergency department."
},
{
  id: "PED-322",
  especialidad: "Pediatría",
  tema: "Laringotraqueítis aguda",
  subtema: "Falla respiratoria inminente",
  dificultad: "Alta",
  caso: "Paciente de 20 meses con diagnóstico de crup que inicialmente presentaba estridor intenso y retracciones marcadas. Tras empeorar durante la observación, se torna somnoliento, disminuye el esfuerzo respiratorio y la entrada de aire es pobre bilateralmente. La saturación de oxígeno es de 91%.",
  pregunta: "¿Cuál es la interpretación clínica prioritaria ante la disminución del estridor en este contexto?",
  opciones: [
    "Respuesta favorable espontánea a la inflamación laríngea",
    "Resolución de la obstrucción por disminución del edema",
    "Evolución esperada después de la fase febril",
    "Probable transición a una infección de vías respiratorias inferiores sin gravedad",
    "Agotamiento respiratorio con riesgo de obstrucción crítica"
  ],
  respuestaCorrecta: 4,
  explicacion: "La reducción del estridor no siempre significa mejoría. Si se acompaña de somnolencia, menor esfuerzo respiratorio y entrada de aire deficiente, puede reflejar flujo aéreo críticamente reducido y agotamiento. Se requiere atención inmediata, estabilización de la vía aérea por personal experimentado y oxígeno según necesidad; no debe retrasarse la intervención por estudios de imagen.",
  perlaENARM: "Un niño que deja de hacer ruido, pero se vuelve somnoliento y mueve menos aire, puede estar empeorando, no mejorando.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente de urgencias pediátricas y laringotraqueítis aguda.",
    internacional: "Canadian Paediatric Society. Acute management of croup in the emergency department."
  },
  bibliografia: "Manual de Pediatría aportado por el usuario; Canadian Paediatric Society. Acute management of croup in the emergency department."
},
{
  id: "PED-323",
  especialidad: "Pediatría",
  tema: "Laringotraqueítis aguda",
  subtema: "Uso de adrenalina nebulizada",
  dificultad: "Alta",
  caso: "Niña de 3 años con tos perruna, estridor en reposo y retracciones intercostales. Recibe dexametasona y adrenalina nebulizada, con disminución rápida del estridor y mejoría del trabajo respiratorio.",
  pregunta: "¿Cuál es la razón principal para mantenerla en observación después de la mejoría inicial?",
  opciones: [
    "La adrenalina puede producir una mejoría transitoria y los síntomas pueden reaparecer cuando disminuye su efecto",
    "La dexametasona produce broncoespasmo de rebote durante las primeras dos horas",
    "La adrenalina elimina la inflamación laríngea, pero favorece una sobreinfección bacteriana inmediata",
    "La respuesta inicial confirma una infección por virus sincitial respiratorio",
    "Todos los pacientes con crup requieren hospitalización durante 24 horas"
  ],
  respuestaCorrecta: 0,
  explicacion: "La adrenalina nebulizada reduce temporalmente el edema de la mucosa mediante vasoconstricción. Su efecto clínico es rápido, pero no sustituye el efecto antiinflamatorio más sostenido del corticosteroide. La observación permite detectar recurrencia del estridor o del aumento del trabajo respiratorio y decidir el alta con criterios clínicos.",
  perlaENARM: "La adrenalina actúa rápido y por un periodo limitado; el corticosteroide es fundamental para controlar la inflamación de manera más sostenida.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para manejo de laringotraqueítis aguda en pediatría.",
    internacional: "Canadian Paediatric Society. Acute management of croup in the emergency department."
  },
  bibliografia: "Canadian Paediatric Society. Acute management of croup in the emergency department; Manual de Pediatría aportado por el usuario."
},
{
  id: "PED-324",
  especialidad: "Pediatría",
  tema: "Laringotraqueítis aguda",
  subtema: "Diagnóstico diferencial: epiglotitis",
  dificultad: "Alta",
  caso: "Niño de 4 años con fiebre alta de inicio abrupto, aspecto tóxico, voz apagada, sialorrea y postura en trípode. Rechaza la deglución y presenta dificultad respiratoria. No tiene tos perruna característica.",
  pregunta: "¿Cuál es la conducta inicial más segura ante la sospecha de epiglotitis?",
  opciones: [
    "Solicitar radiografía lateral de cuello antes de cualquier intervención",
    "Explorar la orofaringe con abatelenguas para confirmar el edema epiglótico",
    "Administrar únicamente dexametasona y enviarlo a casa si mejora",
    "Minimizar la agitación y organizar el manejo urgente de la vía aérea con personal experto",
    "Realizar nebulizaciones repetidas y esperar la desaparición de la sialorrea"
  ],
  respuestaCorrecta: 3,
  explicacion: "La fiebre elevada, el aspecto tóxico, la sialorrea, la disfagia y la postura en trípode sugieren epiglotitis, una urgencia por riesgo de obstrucción completa. Debe evitarse la manipulación faríngea que pueda desencadenar obstrucción. La prioridad es mantener al niño tranquilo y asegurar el manejo de la vía aérea en un entorno controlado por personal experimentado.",
  perlaENARM: "Crup: tos perruna y disfonía. Epiglotitis: fiebre alta, disfagia, sialorrea y aspecto tóxico; la manipulación faríngea puede ser peligrosa.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para urgencias pediátricas y obstrucción aguda de la vía aérea superior.",
    internacional: "Royal Children's Hospital Melbourne. Clinical practice guideline: Acute upper airway obstruction."
  },
  bibliografia: "Manual de Pediatría aportado por el usuario; Royal Children's Hospital Melbourne. Acute upper airway obstruction."
},
{
  id: "PED-325",
  especialidad: "Pediatría",
  tema: "Laringotraqueítis aguda",
  subtema: "Diagnóstico diferencial: traqueítis bacteriana",
  dificultad: "Alta",
  caso: "Niño de 5 años con cuadro respiratorio viral de cuatro días que desarrolla fiebre alta, aspecto tóxico, estridor progresivo y dificultad respiratoria. Recibió adrenalina nebulizada por sospecha de crup, con respuesta escasa y transitoria. Presenta secreciones espesas.",
  pregunta: "¿Qué diagnóstico alternativo debe sospecharse con mayor fuerza?",
  opciones: [
    "Laringotraqueítis viral no complicada",
    "Traqueítis bacteriana",
    "Rinitis alérgica estacional",
    "Laringomalacia congénita",
    "Tos ferina sin complicaciones"
  ],
  respuestaCorrecta: 1,
  explicacion: "La fiebre elevada, el aspecto tóxico, el deterioro progresivo, las secreciones espesas y la respuesta insuficiente a la adrenalina sugieren traqueítis bacteriana. Puede producir obstrucción por inflamación y material purulento, por lo que requiere hospitalización, valoración urgente de la vía aérea, tratamiento antimicrobiano intravenoso y manejo multidisciplinario según la gravedad.",
  perlaENARM: "Un cuadro que parece crup, pero cursa con toxicidad sistémica y escasa respuesta a adrenalina, obliga a considerar traqueítis bacteriana.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente de infecciones respiratorias agudas y urgencias pediátricas.",
    internacional: "Royal Children's Hospital Melbourne. Clinical practice guideline: Acute upper airway obstruction."
  },
  bibliografia: "Manual de Pediatría aportado por el usuario; Royal Children's Hospital Melbourne. Acute upper airway obstruction."
},
{
  id: "PED-326",
  especialidad: "Pediatría",
  tema: "Laringotraqueítis aguda",
  subtema: "Corticosteroides: elección y administración",
  dificultad: "Alta",
  caso: "Paciente de 18 meses con tos perruna y disfonía, sin estridor en reposo ni retracciones. Tolera líquidos y se encuentra activo. Se establece diagnóstico clínico de laringotraqueítis aguda leve.",
  pregunta: "¿Qué intervención farmacológica cuenta con evidencia de beneficio incluso en cuadros leves?",
  opciones: [
    "Antibiótico de amplio espectro durante siete días",
    "Salbutamol inhalado como tratamiento antiinflamatorio laríngeo",
    "Antitusígeno opioide para suprimir la tos nocturna",
    "Adrenalina nebulizada obligatoria en todos los casos",
    "Una dosis de corticosteroide sistémico, habitualmente dexametasona"
  ],
  respuestaCorrecta: 4,
  explicacion: "Los corticosteroides reducen la inflamación de la vía aérea superior y mejoran desenlaces clínicos, incluida la necesidad de nuevas consultas y hospitalización. La dexametasona es una opción habitual por su duración de acción y posibilidad de administración en dosis única. La dosis se individualiza de acuerdo con el protocolo clínico y la gravedad.",
  perlaENARM: "La dexametasona se utiliza en crup de diferentes grados de gravedad; la adrenalina nebulizada se reserva para cuadros con estridor en reposo o compromiso moderado-grave.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para diagnóstico y tratamiento de laringotraqueítis aguda.",
    internacional: "Canadian Paediatric Society. Acute management of croup in the emergency department."
  },
  bibliografia: "Canadian Paediatric Society. Acute management of croup in the emergency department; Manual de Pediatría aportado por el usuario."
},
{
  id: "PED-327",
  especialidad: "Pediatría",
  tema: "Laringotraqueítis aguda",
  subtema: "Medidas generales y tratamiento de soporte",
  dificultad: "Alta",
  caso: "Niño de 2 años con crup leve, saturación de oxígeno normal, sin estridor en reposo y con adecuada hidratación. Sus padres preguntan si deben utilizar vapor caliente en el baño para reducir la inflamación laríngea.",
  pregunta: "¿Cuál es la recomendación más sustentada para el manejo domiciliario, además del tratamiento indicado?",
  opciones: [
    "Utilizar vapor de agua hirviendo durante 15 minutos cada hora",
    "Administrar descongestionantes nasales combinados con antitusígenos",
    "Mantener al niño tranquilo, ofrecer líquidos según tolerancia y reconocer signos de alarma",
    "Evitar toda ingesta oral hasta que desaparezca la tos",
    "Iniciar antibiótico preventivo para evitar traqueítis bacteriana"
  ],
  respuestaCorrecta: 2,
  explicacion: "La agitación puede incrementar el trabajo respiratorio y empeorar la obstrucción dinámica. En cuadros leves se recomienda mantener al niño cómodo, ofrecer líquidos y explicar a los cuidadores cuándo buscar atención urgente. La humidificación con vapor no ha demostrado beneficio clínico consistente y el agua caliente implica riesgo de quemaduras.",
  perlaENARM: "Evita recomendar vapor caliente como tratamiento del crup. Estridor en reposo, retracciones progresivas, cianosis, somnolencia o incapacidad para beber requieren reevaluación urgente.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para atención de infecciones respiratorias agudas en menores de cinco años.",
    internacional: "Canadian Paediatric Society. Acute management of croup in the emergency department."
  },
  bibliografia: "Canadian Paediatric Society. Acute management of croup in the emergency department; Manual de Pediatría aportado por el usuario."
},
{
  id: "PED-328",
  especialidad: "Pediatría",
  tema: "Laringotraqueítis aguda",
  subtema: "Criterios de hospitalización",
  dificultad: "Alta",
  caso: "Niña de 2 años con crup que recibió dexametasona y adrenalina nebulizada. Durante la observación presenta recurrencia persistente del estridor en reposo, retracciones y dificultad para tolerar líquidos. La familia vive a varias horas del hospital y no dispone de transporte confiable.",
  pregunta: "¿Cuál de los siguientes elementos favorece más la hospitalización?",
  opciones: [
    "Estridor persistente o recurrente en reposo, dificultad respiratoria y problemas para mantener hidratación segura",
    "Antecedente de rinorrea de dos días de evolución",
    "Tos perruna aislada cuando llora",
    "Edad de dos años sin otros datos de gravedad",
    "Disfonía residual con respiración tranquila y tolerancia oral normal"
  ],
  respuestaCorrecta: 0,
  explicacion: "La persistencia o recurrencia de síntomas moderados-graves, la dificultad respiratoria y la incapacidad para mantener hidratación segura son motivos para prolongar la vigilancia y considerar ingreso. La distancia al hospital y la falta de acceso confiable a atención urgente también modifican la seguridad del alta.",
  perlaENARM: "El alta no depende únicamente de la respuesta inicial: se requiere estabilidad clínica sostenida, ausencia de estridor en reposo y capacidad para beber, además de un entorno domiciliario seguro.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para manejo de laringotraqueítis aguda y criterios de referencia hospitalaria.",
    internacional: "Canadian Paediatric Society. Acute management of croup in the emergency department."
  },
  bibliografia: "Canadian Paediatric Society. Acute management of croup in the emergency department; Manual de Pediatría aportado por el usuario."
},
{
  id: "PED-329",
  especialidad: "Pediatría",
  tema: "Laringotraqueítis aguda",
  subtema: "Estudios complementarios",
  dificultad: "Alta",
  caso: "Lactante de 22 meses con tos perruna, disfonía y estridor inspiratorio de inicio gradual tras síntomas catarrales. Se encuentra hemodinámicamente estable, sin sialorrea ni aspecto tóxico, y la exploración es compatible con crup.",
  pregunta: "¿Cuál es la estrategia diagnóstica inicial más apropiada?",
  opciones: [
    "Tomografía cervical contrastada para confirmar edema subglótico",
    "Laringoscopia directa sistemática en todos los pacientes",
    "Hemocultivos y cultivo de secreción laríngea antes de tratar",
    "Diagnóstico clínico sin estudios complementarios rutinarios si la presentación es típica",
    "Radiografía de cuello obligatoria para demostrar estrechamiento subglótico"
  ],
  respuestaCorrecta: 3,
  explicacion: "La laringotraqueítis típica se diagnostica clínicamente. Las radiografías y la endoscopia no son rutinarias y pueden retrasar el tratamiento o provocar agitación en pacientes con obstrucción significativa. Los estudios se reservan para presentaciones atípicas, mala evolución o sospecha de diagnósticos alternativos, siempre priorizando la seguridad de la vía aérea.",
  perlaENARM: "El diagnóstico del crup típico es clínico; los estudios de imagen no son requisito para iniciar el manejo.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para diagnóstico clínico de laringotraqueítis aguda en pediatría.",
    internacional: "Canadian Paediatric Society. Acute management of croup in the emergency department."
  },
  bibliografia: "Canadian Paediatric Society. Acute management of croup in the emergency department; Manual de Pediatría aportado por el usuario."
},
{
  id: "PED-330",
  especialidad: "Pediatría",
  tema: "Laringotraqueítis aguda",
  subtema: "Epidemiología y etiología",
  dificultad: "Alta",
  caso: "Niño de 3 años con cuadro de coriza y febrícula seguido de tos metálica, disfonía y estridor inspiratorio nocturno. No presenta sialorrea, disfagia ni aspecto tóxico. Se sospecha laringotraqueítis viral.",
  pregunta: "¿Cuál es el agente etiológico clásico más asociado con este síndrome?",
  opciones: [
    "Streptococcus pyogenes",
    "Virus parainfluenza, especialmente los tipos 1 y 2",
    "Mycoplasma pneumoniae",
    "Corynebacterium diphtheriae",
    "Virus de Epstein-Barr"
  ],
  respuestaCorrecta: 1,
  explicacion: "Los virus parainfluenza son causas clásicas de laringotraqueítis aguda, aunque otros virus respiratorios también pueden producirla. La infección genera inflamación en la región subglótica; el edema adquiere especial relevancia en niños pequeños por el diámetro reducido de su vía aérea.",
  perlaENARM: "Parainfluenza es la asociación clásica del crup. La etiología viral habitual no justifica antibióticos rutinarios en ausencia de datos que sugieran infección bacteriana.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente de infecciones respiratorias agudas en población pediátrica.",
    internacional: "Canadian Paediatric Society. Acute management of croup in the emergency department."
  },
  bibliografia: "Manual de Pediatría aportado por el usuario; Canadian Paediatric Society. Acute management of croup in the emergency department."
},

];


