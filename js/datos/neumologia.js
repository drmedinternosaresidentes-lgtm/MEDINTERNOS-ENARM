// ============================================================
// BANCO DE PREGUNTAS ENARM — NEUMOLOGÍA
// ============================================================

window.BANCO_NEUMOLOGIA = [
// ============================================================
// NEUMOLOGÍA — BLOQUE 001
// Fisiología, gasometría, semiología e imagen
// NEUMO-001 a NEUMO-010
// ============================================================

{
  id: "NEUMO-001",
  especialidad: "Neumología",
  tema: "Fisiología respiratoria",
  subtema: "Ventilación alveolar y espacio muerto",
  dificultad: "Muy alta",

  caso: `Varón de 68 años con antecedente de enfisema pulmonar avanzado consulta por disnea progresiva. En reposo presenta frecuencia respiratoria de 28/min, volumen corriente estimado de 250 mL y una PaCO₂ de 58 mmHg. No presenta alteraciones neurológicas ni recibe fármacos sedantes.

Se explica al paciente que una parte del volumen corriente no participa directamente en el intercambio gaseoso porque permanece en las vías aéreas de conducción. En este paciente, debido a su enfermedad pulmonar, además existe un incremento importante del espacio muerto fisiológico.

El médico desea determinar qué variable explica mejor el desarrollo de hipercapnia en este contexto.`,

  pregunta: "¿Cuál de las siguientes relaciones fisiológicas explica mejor el aumento de PaCO₂ observado en este paciente?",

  opciones: [
    "Disminución de la ventilación alveolar efectiva con aumento de la PaCO₂",
    "Aumento de la ventilación alveolar efectiva con disminución de la PaCO₂",
    "Disminución del consumo metabólico de CO₂ con aumento compensatorio de la PaCO₂",
    "Aumento del espacio muerto anatómico con incremento obligatorio de la PaO₂",
    "Aumento de la difusión alveolocapilar con retención de CO₂"
  ],

  respuestaCorrecta: 0,

  explicacion: `La respuesta correcta es la opción 1.

La PaCO₂ depende fundamentalmente de la producción metabólica de CO₂ y de la ventilación alveolar. En términos fisiológicos:

PaCO₂ ≈ VCO₂ / VA

Por tanto, cuando disminuye la ventilación alveolar efectiva, la eliminación pulmonar de CO₂ resulta insuficiente y la PaCO₂ aumenta.

La ventilación minuto no debe confundirse con la ventilación alveolar. La ventilación minuto es el volumen corriente multiplicado por la frecuencia respiratoria, mientras que la ventilación alveolar considera únicamente el volumen que llega a unidades capaces de participar en el intercambio gaseoso:

VA = (VT − VD) × FR

En un paciente con enfermedad obstructiva grave puede aumentar el espacio muerto fisiológico, de manera que una proporción mayor de cada respiración no participa adecuadamente en el intercambio. Si el paciente no aumenta suficientemente la ventilación minuto para compensarlo, la ventilación alveolar efectiva disminuye y aparece hipercapnia.

La hipercapnia, por tanto, debe hacer pensar primordialmente en un problema de ventilación alveolar insuficiente.`,

  perlaENARM: "PaCO₂ es el mejor marcador gasométrico de ventilación alveolar. Hipercapnia = pensar primero en hipoventilación alveolar.",

  gpc: {
    mexico: "No existe una GPC mexicana específica para este concepto fisiológico; se emplean principios de fisiología respiratoria y criterios clínicos de insuficiencia respiratoria.",
    internacional: "ATS/ERS: principios de fisiología pulmonar y evaluación de la insuficiencia respiratoria."
  },

  bibliografia: [
    "Murray & Nadel's Textbook of Respiratory Medicine.",
    "West. Respiratory Physiology: The Essentials.",
    "ATS/ERS. Standards and clinical guidance on pulmonary function and respiratory physiology."
  ]
},

{
  id: "NEUMO-002",
  especialidad: "Neumología",
  tema: "Fisiología respiratoria",
  subtema: "Ventilación minuto versus ventilación alveolar",
  dificultad: "Muy alta",

  caso: `Mujer de 45 años, previamente sana, ingresa por intoxicación con un opioide. Presenta somnolencia, frecuencia respiratoria de 8/min y respiraciones superficiales. Su volumen corriente estimado es de 500 mL y el espacio muerto anatómico aproximado es de 150 mL.

La producción metabólica de CO₂ se mantiene dentro de límites normales.

Se solicita calcular aproximadamente la ventilación alveolar por minuto para determinar la magnitud de la alteración ventilatoria.`,

  pregunta: "¿Cuál es la ventilación alveolar aproximada de esta paciente?",

  opciones: [
    "4,0 L/min",
    "2,8 L/min",
    "1,2 L/min",
    "0,5 L/min",
    "6,4 L/min"
  ],

  respuestaCorrecta: 2,

  explicacion: `La respuesta correcta es la opción 3.

La ventilación alveolar se calcula:

VA = (VT − VD) × FR

VT = 500 mL
VD = 150 mL
FR = 8/min

VA = (500 − 150) × 8
VA = 350 × 8
VA = 2800 mL/min

Por tanto, la ventilación alveolar es aproximadamente 2,8 L/min.

La clave es distinguir ventilación minuto de ventilación alveolar.

Ventilación minuto:

500 mL × 8 = 4000 mL/min

Pero 150 mL de cada respiración corresponden aproximadamente al espacio muerto anatómico y no participan directamente en el intercambio gaseoso.

Por ello:

4000 mL/min de ventilación minuto
− 1200 mL/min correspondientes al espacio muerto
= 2800 mL/min de ventilación alveolar.

En un paciente con hipoventilación por opioides, la reducción de la frecuencia respiratoria disminuye la ventilación alveolar y conduce a retención de CO₂.`,

  perlaENARM: "Dos pacientes pueden tener la misma ventilación minuto pero distinta ventilación alveolar si tienen diferente volumen corriente o espacio muerto.",

  gpc: {
    mexico: "No aplica una GPC mexicana específica para el cálculo fisiológico de ventilación alveolar.",
    internacional: "Principios ATS/ERS de fisiología respiratoria y evaluación de la ventilación."
  },

  bibliografia: [
    "West. Respiratory Physiology: The Essentials.",
    "Murray & Nadel's Textbook of Respiratory Medicine.",
    "ATS/ERS pulmonary function standards."
  ]
},

{
  id: "NEUMO-003",
  especialidad: "Neumología",
  tema: "Intercambio gaseoso",
  subtema: "Relación ventilación/perfusión",
  dificultad: "Muy alta",

  caso: `Varón de 34 años, sin antecedentes relevantes, presenta dolor torácico súbito, disnea y taquicardia después de un vuelo transatlántico. La saturación de oxígeno es de 88% al aire ambiente. La gasometría arterial muestra:

pH 7,47
PaCO₂ 29 mmHg
PaO₂ 58 mmHg

La radiografía de tórax no muestra consolidaciones ni edema pulmonar. Se sospecha tromboembolia pulmonar.

El residente interpreta que las regiones pulmonares afectadas por el trombo tienen ventilación relativamente conservada pero perfusión reducida.`,

  pregunta: "¿Cuál de los siguientes mecanismos explica mejor la alteración gasométrica predominante?",

  opciones: [
    "Shunt intrapulmonar por perfusión de unidades no ventiladas",
    "Aumento de unidades con relación V/Q elevada por incremento del espacio muerto fisiológico",
    "Disminución de la relación V/Q por ocupación alveolar",
    "Alteración primaria de la difusión por engrosamiento de la membrana alveolocapilar",
    "Hipoventilación alveolar global por disminución del estímulo respiratorio"
  ],

  respuestaCorrecta: 1,

  explicacion: `La respuesta correcta es la opción 2.

En la tromboembolia pulmonar existe una obstrucción vascular que reduce la perfusión de determinadas unidades alveolares mientras la ventilación puede mantenerse. Esto genera unidades con relación V/Q elevada y aumenta el espacio muerto fisiológico.

El patrón gasométrico clásico del TEP agudo incluye hipoxemia y, con frecuencia, hipocapnia secundaria a hiperventilación. Por eso una PaCO₂ de 29 mmHg es compatible con el cuadro.

No corresponde a un shunt verdadero. En el shunt existe perfusión de unidades que no reciben ventilación adecuada, como ocurre en una consolidación alveolar extensa o en determinadas formas de atelectasia.

Tampoco se trata primariamente de hipoventilación global: esta produciría retención de CO₂, mientras que en este caso existe hipocapnia.

El trastorno V/Q es uno de los mecanismos más importantes de hipoxemia y puede coexistir con otras alteraciones según la enfermedad pulmonar.`,

  perlaENARM: "TEP → aumento de espacio muerto fisiológico → V/Q alto → hipoxemia + hiperventilación compensadora frecuente → PaCO₂ baja.",

  gpc: {
    mexico: "La interpretación fisiopatológica es aplicable al abordaje de enfermedad tromboembólica venosa; debe integrarse con la GPC mexicana vigente disponible para TEP.",
    internacional: "Guías internacionales contemporáneas de enfermedad tromboembólica venosa y fisiopatología pulmonar."
  },

  bibliografia: [
    "ESC/ERS. Guidelines for the diagnosis and management of acute pulmonary embolism.",
    "Murray & Nadel's Textbook of Respiratory Medicine.",
    "West. Respiratory Physiology: The Essentials."
  ]
},

{
  id: "NEUMO-004",
  especialidad: "Neumología",
  tema: "Hipoxemia",
  subtema: "Gradiente alveolo-arterial de oxígeno",
  dificultad: "Extrema",

  caso: `Mujer de 29 años consulta por disnea episódica y sensación de falta de aire. No presenta fiebre, dolor torácico ni tos. La exploración pulmonar es normal. Se encuentra respirando aire ambiente a nivel del mar.

Gasometría arterial:

pH 7,44
PaCO₂ 30 mmHg
PaO₂ 72 mmHg

La PaCO₂ reducida indica hiperventilación. El residente debe determinar si la hipoxemia puede explicarse únicamente por hipoventilación alveolar o si existe alteración adicional del intercambio gaseoso.

Se utiliza una estimación simplificada de la ecuación alveolar del oxígeno:

PAO₂ ≈ FiO₂ × (Patm − PH₂O) − PaCO₂/R

Considerando:
FiO₂ = 0,21
Patm = 760 mmHg
PH₂O = 47 mmHg
R = 0,8`,

  pregunta: "¿Cuál es la interpretación fisiopatológica más adecuada de esta gasometría?",

  opciones: [
    "La hipoxemia se explica por hipoventilación alveolar pura",
    "Existe un gradiente A-a de oxígeno aumentado que obliga a considerar un trastorno V/Q, difusión o shunt",
    "La PaCO₂ baja demuestra insuficiencia respiratoria hipercápnica",
    "La PaO₂ de 72 mmHg demuestra necesariamente un shunt intracardíaco",
    "La hipoxemia no puede existir porque la PaCO₂ está disminuida"
  ],

  respuestaCorrecta: 1,

  explicacion: `La respuesta correcta es la opción 2.

Primero se calcula aproximadamente la PAO₂:

PAO₂ ≈ 0,21 × (760 − 47) − 30/0,8

PAO₂ ≈ 149,7 − 37,5
PAO₂ ≈ 112 mmHg

Gradiente A-a:

A-a ≈ PAO₂ − PaO₂
A-a ≈ 112 − 72
A-a ≈ 40 mmHg

Para una persona joven este gradiente es mayor de lo esperado.

La hipoventilación alveolar pura suele producir hipoxemia con un gradiente A-a normal o relativamente conservado. En cambio, un gradiente A-a aumentado orienta hacia alteración de la relación V/Q, trastorno de difusión o shunt.

El caso no permite establecer cuál de estos mecanismos es responsable. Lo importante para ENARM es reconocer que la presencia de hipoxemia con PaCO₂ baja no corresponde a hipoventilación pura.

Además, una PaCO₂ baja representa hiperventilación y puede aparecer como respuesta a hipoxemia o por otros mecanismos respiratorios.`,

  perlaENARM: "Hipoxemia + gradiente A-a normal → hipoventilación o FiO₂ baja. Hipoxemia + A-a aumentado → V/Q, difusión o shunt.",

  gpc: {
    mexico: "No existe una GPC mexicana específica para el cálculo del gradiente A-a; corresponde a fisiología respiratoria aplicada.",
    internacional: "ATS/ERS: evaluación fisiológica de hipoxemia y función pulmonar."
  },

  bibliografia: [
    "West. Respiratory Physiology: The Essentials.",
    "Murray & Nadel's Textbook of Respiratory Medicine.",
    "ATS/ERS pulmonary function standards."
  ]
},

{
  id: "NEUMO-005",
  especialidad: "Neumología",
  tema: "Insuficiencia respiratoria",
  subtema: "Clasificación gasométrica",
  dificultad: "Muy alta",

  caso: `Varón de 72 años con antecedente de EPOC grave presenta incremento de disnea y somnolencia durante una exacerbación. Recibe oxígeno suplementario y se obtiene una gasometría arterial.

pH 7,28
PaCO₂ 68 mmHg
PaO₂ 52 mmHg
HCO₃⁻ 31 mEq/L

El paciente se encuentra hemodinámicamente estable, pero presenta deterioro del estado de alerta.

El residente debe identificar correctamente el tipo de insuficiencia respiratoria y el trastorno ácido-base predominante.`,

  pregunta: "¿Cuál es la interpretación más adecuada?",

  opciones: [
    "Insuficiencia respiratoria hipoxémica pura con alcalosis respiratoria",
    "Insuficiencia respiratoria global con acidosis respiratoria sobre un componente crónico compensado",
    "Insuficiencia respiratoria hipoxémica aislada con acidosis metabólica",
    "Insuficiencia respiratoria crónica compensada sin descompensación aguda",
    "Alcalosis metabólica con hipoventilación compensadora"
  ],

  respuestaCorrecta: 1,

  explicacion: `La respuesta correcta es la opción 2.

El paciente presenta PaO₂ de 52 mmHg y PaCO₂ de 68 mmHg, por lo que existe insuficiencia respiratoria con hipoxemia e hipercapnia, es decir, insuficiencia respiratoria global.

El pH de 7,28 indica acidemia. La PaCO₂ elevada demuestra acidosis respiratoria.

El bicarbonato de 31 mEq/L está aumentado, lo que indica que existe una respuesta renal compensadora y sugiere que el paciente probablemente tenía un componente crónico de retención de CO₂, frecuente en EPOC avanzado.

Sin embargo, el pH continúa claramente acidémico y existe deterioro clínico, por lo que hay una descompensación aguda sobre un trastorno crónico.

La distinción es fundamental:

Insuficiencia respiratoria hipoxémica:
PaO₂ baja sin hipercapnia obligatoria.

Insuficiencia respiratoria global:
hipoxemia + hipercapnia.

En un paciente con EPOC, una PaCO₂ crónicamente elevada puede coexistir con bicarbonato elevado, pero un descenso significativo del pH orienta hacia descompensación aguda.`,

  perlaENARM: "EPOC con PaCO₂ crónicamente elevada puede tener HCO₃⁻ alto; si aparece acidemia significativa, piensa en componente respiratorio agudo sobre crónico.",

  gpc: {
    mexico: "Debe integrarse con la GPC mexicana vigente para EPOC y exacerbación de EPOC cuando corresponda.",
    internacional: "GOLD 2026 para EPOC; recomendaciones contemporáneas ATS/ERS para insuficiencia respiratoria."
  },

  bibliografia: [
    "GOLD 2026. Global Strategy for Prevention, Diagnosis and Management of COPD.",
    "Murray & Nadel's Textbook of Respiratory Medicine.",
    "ATS/ERS guidance on respiratory failure and COPD."
  ]
},

{
  id: "NEUMO-006",
  especialidad: "Neumología",
  tema: "Semiología respiratoria",
  subtema: "Auscultación y transmisión de sonidos",
  dificultad: "Muy alta",

  caso: `Varón de 61 años consulta por fiebre, escalofríos, tos productiva y dolor torácico pleurítico de 48 horas de evolución.

Temperatura: 39,1 °C
FR: 28/min
FC: 112/min
SpO₂: 89% al aire ambiente.

En la exploración del hemitórax inferior derecho se encuentra matidez a la percusión. En esa zona el murmullo vesicular está reemplazado por un sonido respiratorio de tonalidad más intensa y se aprecia aumento de la transmisión de la voz.

La radiografía muestra una opacidad segmentaria con broncograma aéreo.`,

  pregunta: "¿Cuál de los siguientes hallazgos auscultatorios es más congruente con el proceso pulmonar descrito?",

  opciones: [
    "Ausencia completa de transmisión de la voz por interposición pleural",
    "Soplo o ruido bronquial por consolidación pulmonar",
    "Disminución del murmullo vesicular por neumotórax",
    "Hipersonoridad a la percusión por atrapamiento aéreo",
    "Roce pleural exclusivamente espiratorio"
  ],

  respuestaCorrecta: 1,

  explicacion: `La respuesta correcta es la opción 2.

La consolidación pulmonar modifica la transmisión de los sonidos respiratorios. El tejido consolidado transmite mejor determinadas frecuencias procedentes de la vía aérea central, por lo que puede aparecer respiración bronquial o soplo bronquial y aumento de la transmisión de la voz.

La matidez a la percusión también es compatible con ocupación del espacio aéreo por líquido o material inflamatorio.

En cambio:

El derrame pleural disminuye la transmisión de vibraciones vocales y suele asociarse con matidez.

El neumotórax produce hiperresonancia/hipersonoridad y disminución o abolición del murmullo vesicular.

La hiperinsuflación también puede producir hipersonoridad.

El roce pleural se produce por superficies pleurales inflamadas y suele tener componentes inspiratorio y espiratorio; no explica por sí solo este patrón de consolidación.`,

  perlaENARM: "Consolidación → matidez + aumento de transmisión vocal + respiración bronquial. Derrame/neumotórax → disminuyen transmisión y murmullo vesicular.",

  gpc: {
    mexico: "Aplicable al abordaje clínico de neumonía; debe complementarse con la GPC mexicana vigente correspondiente.",
    internacional: "ATS/IDSA y actualizaciones contemporáneas para neumonía adquirida en la comunidad."
  },

  bibliografia: [
    "ATS/IDSA. Diagnosis and Treatment of Adults with Community-acquired Pneumonia.",
    "Murray & Nadel's Textbook of Respiratory Medicine.",
    "Bates' Guide to Physical Examination and History Taking."
  ]
},

{
  id: "NEUMO-007",
  especialidad: "Neumología",
  tema: "Semiología respiratoria",
  subtema: "Percusión pulmonar",
  dificultad: "Alta",

  caso: `Mujer de 58 años con antecedente de cáncer de mama tratado cinco años antes presenta disnea progresiva y ortopnea. A la exploración presenta disminución de la expansión del hemitórax izquierdo.

En la base pulmonar izquierda se identifica matidez franca a la percusión y disminución marcada del murmullo vesicular. Las vibraciones vocales están disminuidas en la misma región.

La radiografía de tórax demuestra ocupación del seno costofrénico izquierdo con una opacidad basal de morfología compatible con líquido pleural.`,

  pregunta: "¿Qué combinación de hallazgos físicos apoya con mayor fuerza el diagnóstico de derrame pleural?",

  opciones: [
    "Hipersonoridad + aumento de vibraciones vocales + soplo bronquial",
    "Matidez + disminución de vibraciones vocales + disminución del murmullo vesicular",
    "Matidez + aumento intenso del murmullo vesicular + pectoriloquia",
    "Hipersonoridad + disminución del murmullo vesicular + broncofonía",
    "Percusión normal + crepitantes difusos + aumento de transmisión vocal"
  ],

  respuestaCorrecta: 1,

  explicacion: `La respuesta correcta es la opción 2.

El líquido pleural se interpone entre el pulmón y la pared torácica. Por ello produce:

• Matidez a la percusión.
• Disminución o abolición del murmullo vesicular.
• Disminución de la transmisión de las vibraciones vocales.

Estos hallazgos diferencian el derrame pleural de una consolidación pulmonar.

En una consolidación, el tejido pulmonar se vuelve más denso pero mantiene continuidad con la vía aérea, por lo que puede aumentar la transmisión de la voz y aparecer respiración bronquial.

En el neumotórax, por el contrario, predomina la hipersonoridad o hiperresonancia a la percusión, junto con disminución del murmullo vesicular y de la transmisión vocal.`,

  perlaENARM: "Matidez + vibraciones vocales disminuidas = piensa en líquido pleural. Matidez + vibraciones aumentadas = consolidación.",

  gpc: {
    mexico: "Debe integrarse con la GPC mexicana vigente para derrame pleural cuando exista una indicación etiológica específica.",
    internacional: "Guías y documentos ATS sobre enfermedad pleural y evaluación de derrame pleural."
  },

  bibliografia: [
    "Murray & Nadel's Textbook of Respiratory Medicine.",
    "ATS clinical resources on pleural disease.",
    "Bates' Guide to Physical Examination and History Taking."
  ]
},

{
  id: "NEUMO-008",
  especialidad: "Neumología",
  tema: "Semiología respiratoria",
  subtema: "Ruidos respiratorios añadidos",
  dificultad: "Muy alta",

  caso: `Varón de 67 años con antecedente de insuficiencia cardiaca con fracción de eyección reducida consulta por disnea progresiva, ortopnea y aumento de peso de 4 kg durante la última semana.

A la exploración presenta edema bilateral de miembros inferiores y presión arterial de 150/90 mmHg. En ambos campos pulmonares inferiores se auscultan ruidos discontinuos, breves y de predominio inspiratorio que persisten después de solicitar al paciente que tosa.

La radiografía muestra congestión vascular y edema intersticial.`,

  pregunta: "¿Cuál es la interpretación más adecuada de los ruidos auscultatorios descritos?",

  opciones: [
    "Sibilancias producidas por broncoconstricción difusa",
    "Roncus producidos por secreciones en vías aéreas grandes",
    "Crepitantes asociados con apertura de pequeñas vías aéreas y/o unidades alveolares",
    "Roce pleural por inflamación de la pleura visceral y parietal",
    "Estridor por obstrucción de la vía aérea superior"
  ],

  respuestaCorrecta: 2,

  explicacion: `La respuesta correcta es la opción 3.

Los crepitantes son ruidos discontinuos, generalmente inspiratorios, que pueden aparecer en procesos con líquido intersticial/alveolar o alteraciones de la apertura de pequeñas vías aéreas.

En este caso, el contexto clínico y radiológico apunta a congestión pulmonar por insuficiencia cardiaca.

Las sibilancias son sonidos continuos, predominantemente musicales, relacionados con estrechamiento de la vía aérea.

Los roncus son sonidos de tonalidad más grave relacionados con secreciones o estrechamiento de vías aéreas de mayor calibre y pueden modificar con la tos.

El roce pleural tiene un carácter áspero y puede auscultarse tanto en inspiración como en espiración.

El estridor es un sonido de vía aérea superior y obliga a buscar obstrucción laríngea o traqueal proximal.`,

  perlaENARM: "Crepitantes inspiratorios persistentes + congestión radiológica + ortopnea = edema/congestión pulmonar hasta demostrar lo contrario.",

  gpc: {
    mexico: "Debe integrarse con la GPC mexicana vigente para insuficiencia cardiaca cuando el origen sea cardiogénico.",
    internacional: "Guías contemporáneas ESC/ACC/AHA sobre insuficiencia cardiaca."
  },

  bibliografia: [
    "ESC Guidelines for Heart Failure.",
    "Murray & Nadel's Textbook of Respiratory Medicine.",
    "Bates' Guide to Physical Examination and History Taking."
  ]
},

{
  id: "NEUMO-009",
  especialidad: "Neumología",
  tema: "Imagen pulmonar",
  subtema: "Atelectasia y pérdida de volumen",
  dificultad: "Extrema",

  caso: `Mujer de 64 años, fumadora de 45 paquetes-año, presenta tos persistente y pérdida ponderal de 8 kg en cuatro meses. Durante las últimas semanas ha desarrollado disnea progresiva.

La radiografía de tórax muestra una opacidad parahiliar derecha asociada con desplazamiento de una cisura hacia la región afectada, aproximación de las costillas y aumento de la densidad pulmonar. Existe elevación del hemidiafragma derecho.

Se sospecha una lesión obstructiva de un bronquio principal o lobar.`,

  pregunta: "¿Cuál es el mecanismo que mejor explica los hallazgos radiológicos?",

  opciones: [
    "Edema pulmonar por aumento de la presión hidrostática",
    "Atelectasia obstructiva con pérdida de volumen pulmonar",
    "Derrame pleural masivo con desplazamiento mediastínico ipsilateral",
    "Neumotórax a tensión con aumento del volumen pulmonar",
    "Enfisema lobar con hiperinsuflación regional"
  ],

  respuestaCorrecta: 1,

  explicacion: `La respuesta correcta es la opción 2.

La atelectasia implica pérdida de volumen pulmonar. Cuando existe una obstrucción bronquial, el aire distal se reabsorbe progresivamente y el segmento, lóbulo o pulmón afectado pierde volumen.

Los signos radiológicos de pérdida de volumen incluyen:

• Desplazamiento de cisuras hacia el área afectada.
• Aproximación de las estructuras broncovasculares.
• Elevación del hemidiafragma ipsilateral.
• Aproximación de las costillas.
• Desplazamiento de estructuras mediastínicas hacia el lado afectado en determinadas atelectasias extensas.

En un adulto fumador con atelectasia obstructiva debe considerarse especialmente una lesión endobronquial maligna.

La broncoscopia tiene un papel fundamental cuando se sospecha una causa endobronquial susceptible de visualización y biopsia.`,

  perlaENARM: "Atelectasia = pérdida de volumen. La mayoría de sus signos radiológicos apuntan hacia el lado afectado.",

  gpc: {
    mexico: "Debe integrarse con las recomendaciones mexicanas vigentes para sospecha y diagnóstico de cáncer pulmonar cuando exista una lesión obstructiva.",
    internacional: "ATS y sociedades internacionales de oncología torácica para evaluación de lesiones pulmonares sospechosas."
  },

  bibliografia: [
    "Murray & Nadel's Textbook of Respiratory Medicine.",
    "ATS clinical resources on lung cancer.",
    "Fleischner Society recommendations for pulmonary imaging when applicable."
  ]
},

{
  id: "NEUMO-010",
  especialidad: "Neumología",
  tema: "Imagen pulmonar",
  subtema: "Consolidación alveolar versus derrame pleural",
  dificultad: "Extrema",

  caso: `Varón de 55 años consulta por fiebre de 39 °C, tos productiva y dolor pleurítico derecho de tres días de evolución.

A la exploración:

FR 30/min
FC 118/min
SpO₂ 87% al aire ambiente.

En la región basal derecha presenta matidez a la percusión y disminución del murmullo vesicular. Sin embargo, en una zona inmediatamente superior a la base se ausculta respiración bronquial y se encuentra aumento de la transmisión de la voz.

La radiografía demuestra una consolidación del lóbulo inferior derecho y una pequeña colección líquida pleural asociada.`,

  pregunta: "¿Cuál de los siguientes hallazgos permite distinguir mejor la consolidación pulmonar de la colección pleural asociada?",

  opciones: [
    "La consolidación produce disminución de la transmisión vocal, mientras el derrame la aumenta",
    "La consolidación puede aumentar la transmisión vocal y producir respiración bronquial, mientras el derrame suele disminuir la transmisión vocal",
    "Ambas lesiones producen exactamente los mismos hallazgos porque contienen líquido",
    "El derrame pleural produce siempre soplo bronquial intenso",
    "La consolidación siempre produce hipersonoridad a la percusión"
  ],

  respuestaCorrecta: 1,

  explicacion: `La respuesta correcta es la opción 2.

Este caso obliga a diferenciar dos procesos que pueden coexistir: consolidación pulmonar y derrame pleural.

En la consolidación alveolar, los alvéolos se llenan de material inflamatorio pero las vías aéreas pueden permanecer permeables. El tejido pulmonar consolidado transmite mejor los sonidos procedentes de la vía aérea, por lo que pueden encontrarse:

• Respiración bronquial.
• Broncofonía.
• Pectoriloquia.
• Aumento de vibraciones vocales.

En cambio, el líquido pleural se interpone físicamente entre el pulmón y la pared torácica, por lo que suele producir:

• Matidez.
• Disminución de vibraciones vocales.
• Disminución del murmullo vesicular.

Por ello, en este caso la zona con respiración bronquial y mayor transmisión vocal corresponde mejor a consolidación, mientras que la región con matidez y disminución de los sonidos respiratorios sugiere líquido pleural.`,

  perlaENARM: "El líquido pleural bloquea la transmisión; la consolidación pulmonar la favorece. Esta diferencia es clásica en preguntas de semiología ENARM.",

  gpc: {
    mexico: "Debe integrarse con la GPC mexicana vigente para neumonía adquirida en la comunidad y derrame parapneumónico.",
    internacional: "ATS/IDSA y documentos ATS contemporáneos para neumonía y enfermedad pleural."
  },

  bibliografia: [
    "ATS/IDSA. Diagnosis and Treatment of Adults with Community-acquired Pneumonia.",
    "ATS clinical resources on pleural disease.",
    "Murray & Nadel's Textbook of Respiratory Medicine."
  ]
}

];
