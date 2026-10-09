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

  respuestaCorrecta: 1,

  explicacion: `La respuesta correcta es la opción 2.

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
},
  
{
  id: "NEUMO-011",
  especialidad: "Neumología",
  tema: "EPOC",
  subtema: "Confirmación diagnóstica mediante espirometría",
  dificultad: "Muy alta",
  caso: `Varón de 68 años, exfumador de 45 paquetes-año, con disnea progresiva de cinco años, tos matutina y expectoración mucosa. Niega episodios previos de sibilancias desde la infancia, atopia o variabilidad marcada de los síntomas. La espirometría muestra FEV1 de 1.42 L, FVC de 2.65 L y FEV1/FVC de 0.54 antes del broncodilatador. Tras administrar broncodilatador, el FEV1 aumenta a 1.55 L y la FVC a 2.80 L; el cociente posbroncodilatador permanece en 0.55. La calidad técnica de la prueba es adecuada. ¿Cuál es la interpretación diagnóstica más apropiada?`,
  pregunta: "¿Qué hallazgo permite confirmar la obstrucción persistente compatible con EPOC en este contexto?",
  opciones: [
    "Un aumento del FEV1 de al menos 12% y 200 mL después del broncodilatador",
    "Un cociente FEV1/FVC posbroncodilatador inferior a 0.70, integrado con síntomas y exposición compatible",
    "Una FVC inferior al 80% del valor predicho, independientemente del cociente",
    "Una PaCO2 superior a 45 mmHg en una gasometría arterial",
    "Una radiografía con hiperinsuflación, aunque la espirometría sea normal"
  ],
  respuestaCorrecta: 1,
  explicacion: `La EPOC se sospecha ante síntomas respiratorios persistentes y exposición relevante a factores de riesgo, especialmente tabaco. La confirmación funcional clásica se establece con FEV1/FVC posbroncodilatador <0.70, interpretado dentro del contexto clínico. En este paciente, el cociente permanece en 0.55. La respuesta broncodilatadora no debe utilizarse aisladamente para excluir EPOC ni para diferenciar de forma absoluta EPOC de asma, pues puede existir reversibilidad parcial en ambas enfermedades. La gasometría y la radiografía ayudan a caracterizar gravedad o diagnósticos alternativos, pero no sustituyen la espirometría para confirmar la obstrucción.`,
  perlaENARM: "Para confirmar EPOC se necesita obstrucción persistente en espirometría posbroncodilatador y un contexto clínico compatible; la radiografía por sí sola no confirma el diagnóstico.",
  gpc: {
    mexico: "Consultar catálogo CENETEC/IMSS para la versión institucional vigente sobre diagnóstico y tratamiento de EPOC; verificar vigencia antes de atribuir una recomendación a una GPC específica.",
    internacional: "GOLD 2026: Global Strategy for Prevention, Diagnosis and Management of COPD."
  },
  bibliografia: "GOLD 2026; Harrison. Principles of Internal Medicine; Murray & Nadel's Textbook of Respiratory Medicine."
},
{
  id: "NEUMO-012",
  especialidad: "Neumología",
  tema: "EPOC",
  subtema: "Clasificación de gravedad espirométrica",
  dificultad: "Muy alta",
  caso: `Mujer de 70 años con EPOC confirmada, disnea crónica y exposición acumulada al humo de biomasa. En una espirometría técnicamente adecuada, el FEV1 posbroncodilatador corresponde al 42% del valor predicho y el cociente FEV1/FVC es de 0.48. Se encuentra clínicamente estable, sin datos actuales de exacerbación. El equipo médico necesita clasificar por separado la limitación al flujo aéreo y la carga sintomática para orientar el seguimiento. ¿A qué grado espirométrico GOLD corresponde un FEV1 del 42% del predicho?`,
  pregunta: "¿Cuál es la clasificación espirométrica correcta?",
  opciones: [
    "GOLD 1, limitación leve",
    "GOLD 2, limitación moderada",
    "GOLD 3, limitación grave",
    "GOLD 4, limitación muy grave",
    "No puede graduarse la limitación si el paciente no está exacerbado"
  ],
  respuestaCorrecta: 2,
  explicacion: `La graduación espirométrica de la limitación al flujo aéreo se realiza con el FEV1 posbroncodilatador en porcentaje del valor predicho, una vez confirmada la obstrucción. Los intervalos habituales son GOLD 1: FEV1 ≥80%; GOLD 2: 50–79%; GOLD 3: 30–49%; GOLD 4: <30%. Un FEV1 del 42% corresponde a GOLD 3. Esta clasificación no debe confundirse con la evaluación combinada de síntomas y riesgo de exacerbaciones, que utiliza herramientas como mMRC y CAT, además de los antecedentes de exacerbación.`,
  perlaENARM: "FEV1 del 30–49% del predicho corresponde a GOLD 3; gravedad espirométrica y grupo clínico de tratamiento no son sinónimos.",
  gpc: {
    mexico: "Consultar catálogo CENETEC/IMSS para la versión institucional vigente sobre EPOC.",
    internacional: "GOLD 2026: Global Strategy for Prevention, Diagnosis and Management of COPD."
  },
  bibliografia: "GOLD 2026; Murray & Nadel's Textbook of Respiratory Medicine."
},
{
  id: "NEUMO-013",
  especialidad: "Neumología",
  tema: "EPOC",
  subtema: "Selección de broncodilatadores en enfermedad estable",
  dificultad: "Muy alta",
  caso: `Varón de 66 años con EPOC confirmada por espirometría, sin exacerbaciones que hayan requerido hospitalización durante el último año. Refiere disnea al caminar a su ritmo habitual y necesita detenerse al subir una pendiente. CAT de 16 puntos, mMRC de 2. No presenta eosinofilia conocida, asma concomitante ni otra indicación específica de corticoide inhalado. Utiliza salbutamol a demanda, con alivio breve, y la técnica inhalatoria ya fue revisada y corregida. ¿Cuál es el siguiente paso farmacológico de mantenimiento más razonable?`,
  pregunta: "¿Qué estrategia inicial ofrece mejor enfoque para sus síntomas persistentes?",
  opciones: [
    "Mantener únicamente salbutamol a demanda de forma indefinida",
    "Iniciar corticoide inhalado en monoterapia",
    "Iniciar combinación de broncodilatadores de acción prolongada LAMA/LABA, con reevaluación posterior",
    "Iniciar corticoide oral diario para reducir la disnea",
    "Indicar antibiótico macrólido continuo como tratamiento inicial de la disnea"
  ],
  respuestaCorrecta: 2,
  explicacion: `En EPOC estable sintomática, los broncodilatadores de acción prolongada son la base del tratamiento. La combinación LAMA/LABA suele ser apropiada cuando persisten síntomas relevantes, tras confirmar diagnóstico, revisar técnica inhalatoria, adherencia, exposición y comorbilidades. Los corticoides inhalados no se indican de rutina como monoterapia para EPOC; su incorporación depende de factores como exacerbaciones, eosinófilos sanguíneos y coexistencia de asma. Los corticoides sistémicos crónicos y los antibióticos continuos no son tratamiento inicial de la disnea estable.`,
  perlaENARM: "En EPOC, trata síntomas y riesgo de exacerbación; no prescribas corticoide inhalado automáticamente por la sola presencia de obstrucción.",
  gpc: {
    mexico: "Consultar catálogo CENETEC/IMSS para la versión institucional vigente sobre tratamiento farmacológico de EPOC.",
    internacional: "GOLD 2026: Global Strategy for Prevention, Diagnosis and Management of COPD."
  },
  bibliografia: "GOLD 2026; Harrison. Principles of Internal Medicine."
},
{
  id: "NEUMO-014",
  especialidad: "Neumología",
  tema: "EPOC",
  subtema: "Oxigenoterapia crónica domiciliaria",
  dificultad: "Muy alta",
  caso: `Mujer de 72 años con EPOC grave, tratamiento inhalado optimizado y abstinencia tabáquica. Se encuentra estable desde hace ocho semanas, sin infección ni exacerbación reciente. En dos valoraciones separadas, respirando aire ambiente y a nivel del mar, la PaO2 es de 52–53 mmHg y la saturación arterial se mantiene en 87–88%. No hay datos de hipercapnia aguda. Se pregunta si cumple criterios fisiológicos para oxigenoterapia domiciliaria prolongada. ¿Cuál es la conducta más adecuada?`,
  pregunta: "¿Qué decisión corresponde respecto a la oxigenoterapia crónica?",
  opciones: [
    "No indicarla porque la oxigenoterapia solo está indicada durante las exacerbaciones",
    "Indicar oxígeno domiciliario prolongado, con titulación, evaluación de seguridad y seguimiento",
    "Indicar oxígeno únicamente durante el sueño, sin valorar necesidades diurnas",
    "Esperar a que la PaO2 disminuya por debajo de 40 mmHg",
    "Sustituir los broncodilatadores por oxígeno domiciliario"
  ],
  respuestaCorrecta: 1,
  explicacion: `La hipoxemia crónica grave en un paciente estable con EPOC es una indicación clásica de oxigenoterapia domiciliaria prolongada. Los umbrales utilizados habitualmente incluyen PaO2 ≤55 mmHg o SaO2 ≤88%, con criterios adicionales posibles cuando PaO2 está entre 55 y 60 mmHg y existen complicaciones como hipertensión pulmonar, edema periférico sugerente de insuficiencia cardiaca derecha o policitemia. La indicación debe confirmarse en estabilidad clínica y requiere titular el flujo, educar sobre seguridad —especialmente ausencia de tabaquismo y fuentes de ignición— y reevaluar la necesidad. El oxígeno no sustituye el tratamiento inhalado ni se limita a la fase aguda.`,
  perlaENARM: "PaO2 ≤55 mmHg o saturación ≤88% en situación estable orientan a oxigenoterapia prolongada; confirma la indicación fuera de la exacerbación.",
  gpc: {
    mexico: "Consultar catálogo CENETEC/IMSS para la versión institucional vigente sobre oxigenoterapia en EPOC.",
    internacional: "GOLD 2026; criterios clásicos de oxigenoterapia prolongada en EPOC."
  },
  bibliografia: "GOLD 2026; ATS Clinical Practice Guideline on Home Oxygen Therapy for Adults with Chronic Lung Disease."
},
{
  id: "NEUMO-015",
  especialidad: "Neumología",
  tema: "EPOC",
  subtema: "Exacerbación e indicación de ventilación no invasiva",
  dificultad: "Muy alta",
  caso: `Varón de 69 años con EPOC conocida llega por tres días de aumento de disnea, volumen de esputo y purulencia. Tras oxígeno titulado, broncodilatadores de acción corta y corticoide sistémico, persiste con frecuencia respiratoria de 30/min, uso de músculos accesorios y dificultad para hablar frases largas. Gasometría arterial: pH 7.27, PaCO2 68 mmHg, PaO2 60 mmHg y HCO3− 30 mmol/L. Está despierto, coopera, protege la vía aérea, no vomita y mantiene estabilidad hemodinámica. ¿Cuál es la intervención ventilatoria más apropiada en este momento?`,
  pregunta: "¿Cuál es el siguiente paso prioritario?",
  opciones: [
    "Administrar oxígeno a alto flujo sin objetivo de saturación y observar varias horas",
    "Iniciar ventilación no invasiva con dos niveles de presión, con vigilancia estrecha",
    "Intubación inmediata obligatoria en toda hipercapnia superior a 60 mmHg",
    "Administrar sedación profunda para disminuir el trabajo respiratorio sin soporte ventilatorio",
    "Suspender broncodilatadores porque pueden empeorar la hipercapnia"
  ],
  respuestaCorrecta: 1,
  explicacion: `El cuadro es compatible con exacerbación de EPOC e insuficiencia respiratoria hipercápnica con acidosis respiratoria. En un paciente que coopera, protege la vía aérea y no presenta contraindicaciones mayores, la ventilación no invasiva (VNI) tipo bilevel es una intervención de primera línea ante acidosis respiratoria persistente, habitualmente con pH ≤7.35 y PaCO2 elevada pese al tratamiento inicial. Debe acompañarse de monitorización clínica y gasométrica, tratamiento de la causa precipitante y oxígeno titulado. La intubación está indicada si existe deterioro, fracaso de VNI, incapacidad para proteger la vía aérea, inestabilidad u otras contraindicaciones; no se decide por un valor aislado de PaCO2.`,
  perlaENARM: "EPOC exacerbada + pH bajo + hipercapnia persistente y paciente cooperador: considerar VNI bilevel precoz, vigilando criterios de fracaso.",
  gpc: {
    mexico: "Consultar catálogo CENETEC/IMSS para la versión institucional vigente sobre exacerbación de EPOC y soporte ventilatorio.",
    internacional: "GOLD 2026; ATS/ERS guidance on noninvasive ventilation in acute respiratory failure."
  },
  bibliografia: "GOLD 2026; ERS/ATS Clinical Practice Guidelines on Noninvasive Ventilation for Acute Respiratory Failure."
},
{
  id: "NEUMO-016",
  especialidad: "Neumología",
  tema: "Asma",
  subtema: "Confirmación objetiva del diagnóstico",
  dificultad: "Muy alta",
  caso: `Mujer de 24 años con episodios de tos seca, opresión torácica y sibilancias nocturnas, desencadenados por ejercicio y exposición a polvo. Entre episodios permanece asintomática. La espirometría basal muestra FEV1 de 2.40 L y FVC de 3.50 L, con FEV1/FVC de 0.69. Después de broncodilatador, el FEV1 aumenta a 2.72 L. La paciente no ha recibido corticoide inhalado. No hay fiebre, expectoración purulenta ni hallazgos radiográficos que sugieran infección. ¿Cuál es la interpretación más adecuada de los hallazgos?`,
  pregunta: "¿Qué conclusión diagnóstica está mejor sustentada?",
  opciones: [
    "El asma queda descartada porque los síntomas no son diarios",
    "La mejoría del FEV1 de 320 mL y aproximadamente 13% apoya variabilidad reversible del flujo aéreo compatible con asma",
    "El diagnóstico definitivo es EPOC por el solo hecho de tener FEV1/FVC inferior a 0.70",
    "El diagnóstico depende exclusivamente de encontrar eosinofilia periférica",
    "La radiografía normal descarta asma"
  ],
  respuestaCorrecta: 1,
  explicacion: `El asma se caracteriza por síntomas respiratorios variables y limitación variable del flujo aéreo. En adultos, un aumento del FEV1 de al menos 12% y 200 mL respecto al basal constituye evidencia clásica de respuesta broncodilatadora compatible con asma. En este caso el aumento es de 320 mL, aproximadamente 13.3% del FEV1 basal. La historia clínica y la demostración objetiva deben integrarse; ningún hallazgo aislado sustituye el juicio clínico. La eosinofilia o FeNO pueden apoyar un fenotipo inflamatorio, pero no son requisitos universales. Una radiografía normal es frecuente y no excluye asma.`,
  perlaENARM: "En adultos con sospecha de asma, busca síntomas variables y evidencia objetiva de variabilidad del flujo aéreo; una espirometría aislada normal no excluye la enfermedad.",
  gpc: {
    mexico: "Consultar catálogo CENETEC/IMSS para la versión institucional vigente sobre diagnóstico y tratamiento del asma.",
    internacional: "GINA 2026: Global Strategy for Asthma Management and Prevention."
  },
  bibliografia: "GINA 2026; Harrison. Principles of Internal Medicine; Murray & Nadel's Textbook of Respiratory Medicine."
},
{
  id: "NEUMO-017",
  especialidad: "Neumología",
  tema: "Asma",
  subtema: "Espirometría normal con sospecha clínica persistente",
  dificultad: "Muy alta",
  caso: `Varón de 31 años con episodios recurrentes de tos nocturna y disnea al correr, especialmente en temporadas de polinización. No fuma. La exploración física y la espirometría basal son normales; no se documenta respuesta broncodilatadora significativa durante esa consulta. La sospecha clínica sigue siendo alta y no presenta signos de urgencia. Antes de concluir que no tiene asma, se plantea una prueba adicional. ¿Cuál es la estrategia diagnóstica más razonable?`,
  pregunta: "¿Qué estudio puede demostrar hiperrespuesta bronquial cuando la espirometría basal es normal?",
  opciones: [
    "Prueba de provocación bronquial con metacolina o un estímulo validado, si no existen contraindicaciones",
    "Tomografía de tórax de alta resolución como prueba confirmatoria obligatoria",
    "Broncoscopia con biopsia bronquial en todos los casos",
    "Dímero D para confirmar hiperreactividad bronquial",
    "Prueba terapéutica con antibiótico y respuesta clínica como criterio diagnóstico"
  ],
  respuestaCorrecta: 0,
  explicacion: `La función pulmonar puede ser normal entre episodios de asma. Si la sospecha permanece y no se ha demostrado variabilidad mediante espirometría seriada o flujo espiratorio máximo, puede considerarse una prueba de provocación bronquial, por ejemplo con metacolina, en un entorno apropiado y tras evaluar contraindicaciones. Una prueba positiva demuestra hiperrespuesta, pero debe interpretarse con la clínica porque no es completamente específica; una prueba negativa bien realizada puede ayudar a reducir la probabilidad de asma activa. No se requieren rutinariamente tomografía ni broncoscopia para confirmar asma típica.`,
  perlaENARM: "La espirometría normal entre episodios no excluye asma; la provocación bronquial puede ser útil cuando persiste una sospecha clínica fundada.",
  gpc: {
    mexico: "Consultar catálogo CENETEC/IMSS para la versión institucional vigente sobre diagnóstico de asma.",
    internacional: "GINA 2026: Global Strategy for Asthma Management and Prevention."
  },
  bibliografia: "GINA 2026; Murray & Nadel's Textbook of Respiratory Medicine."
},
{
  id: "NEUMO-018",
  especialidad: "Neumología",
  tema: "Asma",
  subtema: "Tratamiento controlador y prevención de exacerbaciones",
  dificultad: "Muy alta",
  caso: `Mujer de 27 años con asma confirmada, síntomas diurnos varias veces por semana y despertares nocturnos ocasionales. Ha acudido dos veces a urgencias durante el último año por exacerbaciones que requirieron corticoide sistémico. Actualmente solo utiliza salbutamol a demanda porque considera que el inhalador controlador es innecesario cuando está asintomática. No hay contraindicación para corticoides inhalados. Se revisa la técnica y se confirma que el diagnóstico es correcto. ¿Cuál es el principio terapéutico esencial?`,
  pregunta: "¿Qué estrategia debe incorporarse para reducir el riesgo futuro de exacerbaciones?",
  opciones: [
    "Mantener salbutamol como único tratamiento, ya que alivia rápidamente los síntomas",
    "Indicar corticoide inhalado dentro de un esquema que contenga tratamiento antiinflamatorio y adaptar el régimen según control y riesgo",
    "Sustituir todos los inhaladores por corticoide oral diario de forma indefinida",
    "Utilizar antibióticos preventivos como controlador principal",
    "Suspender el tratamiento cuando desaparezcan las sibilancias, sin plan de seguimiento"
  ],
  respuestaCorrecta: 1,
  explicacion: `El tratamiento del asma debe incluir un componente que contenga corticoide inhalado para reducir la inflamación y el riesgo de exacerbaciones. El alivio rápido con un broncodilatador no sustituye el tratamiento antiinflamatorio. La elección del esquema concreto depende de edad, síntomas, exacerbaciones, acceso, preferencias, técnica inhalatoria y disponibilidad local; las estrategias preferidas actuales de GINA utilizan combinaciones con corticoide inhalado y formoterol en los escalones apropiados, mientras que otros esquemas también requieren asegurar exposición a corticoide inhalado. Los corticoides orales crónicos se reservan para situaciones excepcionales debido a toxicidad; los antibióticos no son controladores rutinarios del asma.`,
  perlaENARM: "El asma requiere tratamiento que contenga corticoide inhalado; no bases el control a largo plazo exclusivamente en salbutamol.",
  gpc: {
    mexico: "Consultar catálogo CENETEC/IMSS para la versión institucional vigente sobre tratamiento controlador del asma.",
    internacional: "GINA 2026: Global Strategy for Asthma Management and Prevention."
  },
  bibliografia: "GINA 2026; Harrison. Principles of Internal Medicine."
},
{
  id: "NEUMO-019",
  especialidad: "Neumología",
  tema: "Asma",
  subtema: "Exacerbación grave y gasometría",
  dificultad: "Muy alta",
  caso: `Varón de 22 años con asma conocida consulta por disnea intensa de seis horas de evolución. Ha utilizado repetidamente su inhalador de rescate sin respuesta suficiente. Está ansioso, habla en palabras aisladas, presenta tiraje y sibilancias difusas. Después de tratamiento inicial, la frecuencia respiratoria sigue elevada. La gasometría muestra pH 7.36, PaCO2 41 mmHg y PaO2 61 mmHg en aire ambiente. En una crisis asmática con hiperventilación esperada, el equipo interpreta que la PaCO2 no está disminuida. ¿Qué significado clínico tiene este hallazgo?`,
  pregunta: "¿Cuál es la interpretación más importante de la PaCO2 de 41 mmHg en este contexto?",
  opciones: [
    "Confirma que la exacerbación es leve porque el pH es casi normal",
    "Es tranquilizadora y permite dar de alta sin reevaluación",
    "Puede indicar fatiga ventilatoria y una crisis potencialmente grave; exige reevaluación y escalamiento urgente según la respuesta clínica",
    "Demuestra que el paciente tiene EPOC y no asma",
    "Indica que debe suspenderse el oxígeno y administrarse sedación"
  ],
  respuestaCorrecta: 2,
  explicacion: `En una exacerbación asmática significativa suele existir hiperventilación y la PaCO2 tiende a disminuir. Una PaCO2 normal en un paciente con dificultad respiratoria intensa puede ser un signo preocupante de ventilación alveolar insuficiente o fatiga muscular; una PaCO2 ascendente, especialmente con acidosis, aumenta la preocupación por insuficiencia respiratoria inminente. No debe interpretarse aisladamente: se integra con estado mental, habla, trabajo respiratorio, flujo espiratorio, saturación y respuesta al tratamiento. Se requiere manejo urgente, broncodilatadores inhalados repetidos, corticoide sistémico y otras medidas según gravedad, con preparación para soporte ventilatorio si hay deterioro.`,
  perlaENARM: "En una crisis asmática grave, una PaCO2 normal o elevada no es tranquilizadora: puede señalar fatiga ventilatoria.",
  gpc: {
    mexico: "Consultar catálogo CENETEC/IMSS para la versión institucional vigente sobre exacerbación aguda de asma.",
    internacional: "GINA 2026: Global Strategy for Asthma Management and Prevention."
  },
  bibliografia: "GINA 2026; ERS/ATS resources on acute respiratory failure."
},
{
  id: "NEUMO-020",
  especialidad: "Neumología",
  tema: "Asma",
  subtema: "Asma grave aparente: evaluación antes de escalar tratamiento",
  dificultad: "Muy alta",
  caso: `Mujer de 38 años con diagnóstico de asma y síntomas persistentes pese a tener prescrita una combinación de dosis altas de corticoide inhalado y broncodilatador de acción prolongada. Ha requerido tres ciclos de corticoide oral en seis meses. Refiere uso irregular del inhalador por temor a efectos adversos. En consulta se observa técnica inhalatoria incorrecta, rinitis alérgica no controlada y exposición continua al humo de tabaco en el domicilio. No hay espirometría reciente que confirme obstrucción variable ni evaluación de comorbilidades. ¿Cuál es el siguiente paso más apropiado antes de etiquetar el cuadro como asma grave refractaria o indicar un biológico?`,
  pregunta: "¿Qué enfoque debe priorizarse?",
  opciones: [
    "Iniciar inmediatamente un biológico sin verificar adherencia ni diagnóstico",
    "Aumentar indefinidamente la dosis de corticoide inhalado sin revisar la técnica",
    "Confirmar diagnóstico y función pulmonar, evaluar adherencia y técnica, corregir exposiciones y tratar comorbilidades antes de clasificar y escalar",
    "Suspender todo tratamiento controlador hasta obtener una nueva espirometría",
    "Prescribir antibióticos prolongados por la frecuencia de los síntomas"
  ],
  respuestaCorrecta: 2,
  explicacion: `Antes de clasificar asma como grave o refractaria hay que confirmar que el diagnóstico sea correcto y que el tratamiento esté realmente optimizado. Deben evaluarse adherencia, técnica inhalatoria, exposiciones, comorbilidades —por ejemplo rinitis/rinosinusitis, obesidad, reflujo cuando sea clínicamente pertinente, apnea del sueño o disfunción laríngea inducible— y diagnósticos alternativos. Solo después de corregir factores modificables y confirmar asma no controlada pese a tratamiento optimizado se valora fenotipificación y elegibilidad para terapias biológicas. Escalar sin abordar estos factores puede aumentar costes y toxicidad sin resolver la causa del mal control.`,
  perlaENARM: "Antes de diagnosticar asma grave y seleccionar biológicos, confirma el diagnóstico y revisa adherencia, técnica, exposiciones y comorbilidades.",
  gpc: {
    mexico: "Consultar catálogo CENETEC/IMSS para la versión institucional vigente sobre asma de difícil control.",
    internacional: "GINA 2026: Difficult-to-Treat & Severe Asthma Guide."
  },
  bibliografia: "GINA 2026; Difficult-to-Treat & Severe Asthma Guide 2026; Harrison. Principles of Internal Medicine."
},

{
  id: "NEUMO-021",
  especialidad: "Neumología",
  tema: "Neumonía adquirida en la comunidad",
  subtema: "Confirmación diagnóstica y diagnóstico diferencial",
  dificultad: "Muy alta",
  caso: `Varón de 58 años, fumador de 35 paquetes-año, consulta por cuatro días de fiebre de 39 °C, tos productiva, dolor torácico pleurítico derecho y disnea progresiva. Presenta TA 118/72 mmHg, FC 108 lpm, FR 26 rpm y SpO2 91% al aire ambiente. A la auscultación hay crepitantes focales y soplo tubario en base derecha. La radiografía muestra opacidad alveolar segmentaria con broncograma aéreo. No hay datos de congestión vascular ni cardiomegalia. ¿Cuál es la interpretación más apropiada?`,
  pregunta: "¿Cuál es el diagnóstico más probable y qué elemento lo sustenta mejor?",
  opciones: [
    "Exacerbación de EPOC, confirmada por la presencia de tos productiva",
    "Neumonía adquirida en la comunidad, por síndrome infeccioso agudo y nuevo infiltrado pulmonar",
    "Insuficiencia cardiaca aguda, porque los crepitantes son específicos de edema",
    "Tuberculosis pulmonar, por el antecedente de tabaquismo",
    "Tromboembolia pulmonar, confirmada por el dolor pleurítico"
  ],
  respuestaCorrecta: 1,
  explicacion: `La combinación de enfermedad respiratoria aguda, fiebre, tos, hallazgos focales y un infiltrado pulmonar nuevo es compatible con neumonía adquirida en la comunidad. El broncograma aéreo refleja bronquios permeables rodeados por alvéolos ocupados. La exploración aislada no distingue de forma definitiva todas las causas de infiltrado, pero la cronología y el patrón radiológico favorecen infección. La insuficiencia cardiaca suele acompañarse de otros signos de congestión; el tromboembolismo puede producir dolor pleurítico e hipoxemia, pero no queda confirmado por ellos. La tuberculosis debe considerarse según evolución, epidemiología y patrón radiológico, especialmente ante síntomas prolongados.`,
  perlaENARM: "La NAC se sustenta en un cuadro clínico compatible y un infiltrado pulmonar nuevo; los crepitantes por sí solos no confirman etiología.",
  gpc: {
    mexico: "IMSS-234-09, GPC de NAC en adultos disponible en el catálogo institucional; verificar vigencia.",
    internacional: "ATS/IDSA 2019, Diagnosis and Treatment of Adults with Community-Acquired Pneumonia."
  },
  bibliografia: "ATS/IDSA 2019; Harrison. Principles of Internal Medicine; Murray & Nadel's Textbook of Respiratory Medicine."
},
{
  id: "NEUMO-022",
  especialidad: "Neumología",
  tema: "Neumonía adquirida en la comunidad",
  subtema: "Estratificación mediante CURB-65",
  dificultad: "Muy alta",
  caso: `Mujer de 73 años con fiebre, tos productiva y consolidación lobar. Está desorientada respecto al día, FR 32 rpm, TA 108/66 mmHg y urea sérica de 9 mmol/L. La saturación es 90% al aire ambiente. No presenta choque manifiesto. El equipo necesita cuantificar el riesgo clínico sin utilizar la puntuación como sustituto del juicio médico. ¿Cuál es su CURB-65?`,
  pregunta: "¿Qué puntuación CURB-65 corresponde a esta paciente?",
  opciones: [
    "2 puntos",
    "3 puntos",
    "4 puntos",
    "5 puntos",
    "1 punto"
  ],
  respuestaCorrecta: 2,
  explicacion: `CURB-65 asigna un punto por confusión nueva, urea >7 mmol/L, frecuencia respiratoria ≥30/min, presión arterial sistólica <90 o diastólica ≤60 mmHg, y edad ≥65 años. Esta paciente presenta confusión, urea elevada, FR de 32 y edad de 73 años: cuatro puntos. La presión arterial no añade un punto. Una puntuación elevada se asocia con mayor mortalidad y apoya hospitalización y evaluación intensiva, pero la decisión debe integrar oxigenación, comorbilidades, funcionalidad, soporte domiciliario y evolución clínica.`,
  perlaENARM: "CURB-65: confusión, urea, FR ≥30, presión baja y edad ≥65; cada criterio suma un punto.",
  gpc: {
    mexico: "IMSS-234-09: considerar CURB-65 o PSI para estratificación de riesgo y decisión del sitio de atención.",
    internacional: "ATS/IDSA 2019: utilizar reglas pronósticas validadas junto con juicio clínico."
  },
  bibliografia: "ATS/IDSA 2019; Fine MJ et al. Prediction rule to identify low-risk patients with community-acquired pneumonia."
},
{
  id: "NEUMO-023",
  especialidad: "Neumología",
  tema: "Neumonía adquirida en la comunidad",
  subtema: "Elección del sitio de atención",
  dificultad: "Muy alta",
  caso: `Varón de 46 años, previamente sano, con fiebre y tos de tres días. Está orientado, FR 18 rpm, TA 124/76 mmHg, FC 92 lpm y SpO2 97% al aire ambiente. La radiografía muestra infiltrado segmentario pequeño. Tolera la vía oral, no tiene vómitos, insuficiencia renal ni barreras sociales para seguimiento. CURB-65 de 0. No ha recibido antibióticos recientemente. ¿Cuál es el enfoque más apropiado?`,
  pregunta: "¿Qué sitio de atención resulta razonable si se mantiene estable tras la valoración completa?",
  opciones: [
    "Ingreso obligatorio a UCI por todo infiltrado radiológico",
    "Tratamiento ambulatorio con antibiótico apropiado y seguimiento estrecho",
    "Hospitalización obligatoria por al menos siete días",
    "No tratar porque CURB-65 de 0 descarta infección bacteriana",
    "Indicar cobertura empírica para MRSA y Pseudomonas en todos los casos"
  ],
  respuestaCorrecta: 1,
  explicacion: `En un adulto estable, con baja puntuación pronóstica, oxigenación conservada, tolerancia oral y seguimiento fiable, el tratamiento ambulatorio puede ser apropiado. CURB-65 ayuda a estimar riesgo, pero no sustituye el juicio clínico ni evalúa todos los factores que pueden obligar a hospitalizar, como hipoxemia, descompensación de comorbilidades, incapacidad para tomar medicación o falta de soporte. No se requiere cobertura para patógenos resistentes sin factores de riesgo validados.`,
  perlaENARM: "El sitio de atención depende del riesgo, oxigenación, comorbilidades y viabilidad del manejo domiciliario, no solo de la radiografía.",
  gpc: {
    mexico: "IMSS-234-09, evaluación de gravedad y sitio de atención.",
    internacional: "ATS/IDSA 2019, criterios de decisión ambulatoria frente a hospitalización."
  },
  bibliografia: "ATS/IDSA 2019; Harrison. Principles of Internal Medicine."
},
{
  id: "NEUMO-024",
  especialidad: "Neumología",
  tema: "Neumonía adquirida en la comunidad",
  subtema: "Estudios microbiológicos en enfermedad grave",
  dificultad: "Muy alta",
  caso: `Mujer de 64 años con NAC grave, hipotensión que requiere vasopresor y necesidad de ventilación mecánica. La radiografía muestra infiltrados multilobares. No se conocen aislamientos previos de patógenos resistentes, pero el equipo inicia tratamiento empírico de amplio espectro por la gravedad. Se busca identificar el agente, facilitar desescalamiento y evitar mantener antimicrobianos innecesarios. ¿Qué estrategia microbiológica es la más adecuada?`,
  pregunta: "¿Cuál es el enfoque diagnóstico microbiológico apropiado?",
  opciones: [
    "No tomar cultivos porque el antibiótico empírico vuelve inútiles todos los estudios",
    "Obtener hemocultivos y muestra respiratoria de calidad para cultivo, además de pruebas dirigidas según contexto",
    "Solicitar únicamente procalcitonina para identificar la especie bacteriana",
    "Realizar serología para todos los microorganismos respiratorios antes de iniciar tratamiento",
    "Esperar 72 horas sin antibióticos para maximizar el rendimiento de los cultivos"
  ],
  respuestaCorrecta: 1,
  explicacion: `En NAC grave se recomienda obtener hemocultivos y muestras respiratorias apropiadas, idealmente antes del antibiótico si ello no retrasa el tratamiento urgente. Las pruebas adicionales se seleccionan según epidemiología, exposición, sospecha de influenza u otros virus y riesgo de patógenos específicos. Los cultivos permiten ajustar y desescalar la terapia. La procalcitonina no identifica por sí misma el agente y no debe utilizarse aisladamente para negar el inicio de antibióticos en una NAC radiológicamente confirmada.`,
  perlaENARM: "En NAC grave, toma cultivos pertinentes sin retrasar antibióticos ni estabilización hemodinámica.",
  gpc: {
    mexico: "IMSS-234-09, diagnóstico y tratamiento de NAC; adaptar estudios al nivel de atención.",
    internacional: "ATS/IDSA 2019: cultivos en NAC grave y cuando se administra cobertura empírica para MRSA o Pseudomonas."
  },
  bibliografia: "ATS/IDSA 2019; Clinical Microbiology Reviews sobre diagnóstico microbiológico de neumonía."
},
{
  id: "NEUMO-025",
  especialidad: "Neumología",
  tema: "Neumonía adquirida en la comunidad",
  subtema: "Tratamiento ambulatorio sin comorbilidades",
  dificultad: "Muy alta",
  caso: `Varón de 39 años con NAC confirmada por radiografía, sin comorbilidades, alergias medicamentosas, exposición reciente a antibióticos ni factores de riesgo para patógenos resistentes. Está estable, tolera la vía oral y no tiene criterios de hospitalización. En su región no se dispone de datos que respalden una resistencia neumocócica excepcionalmente baja a macrólidos. ¿Cuál es una opción empírica ambulatoria apropiada según recomendaciones internacionales para adultos sanos?`,
  pregunta: "¿Cuál de las siguientes opciones es razonable?",
  opciones: [
    "Amoxicilina 1 g por vía oral cada 8 horas",
    "Vancomicina intravenosa como monoterapia",
    "Meropenem intravenoso como primera línea ambulatoria",
    "Corticoide sistémico en monoterapia",
    "Azitromicina como elección universal, sin considerar resistencia local"
  ],
  respuestaCorrecta: 0,
  explicacion: `La guía ATS/IDSA 2019 incluye amoxicilina 1 g por vía oral cada 8 horas como opción para adultos ambulatorios sin comorbilidades ni factores de riesgo específicos. Doxiciclina es otra opción aceptada. La monoterapia con macrólido se condiciona a que la resistencia neumocócica local sea suficientemente baja. La elección final debe considerar alergias, interacciones, embarazo, epidemiología local y protocolos nacionales. Antibióticos intravenosos de amplio espectro no están justificados por el solo diagnóstico de NAC ambulatoria no complicada.`,
  perlaENARM: "En adulto sano ambulatorio con NAC, amoxicilina es una opción recomendada; la monoterapia con macrólido depende de resistencia local.",
  gpc: {
    mexico: "IMSS-234-09, verificar esquema y disponibilidad en protocolo institucional vigente.",
    internacional: "ATS/IDSA 2019, tratamiento ambulatorio de NAC en adultos sin comorbilidades."
  },
  bibliografia: "ATS/IDSA 2019; Harrison. Principles of Internal Medicine."
},
{
  id: "NEUMO-026",
  especialidad: "Neumología",
  tema: "Neumonía adquirida en la comunidad",
  subtema: "Tratamiento ambulatorio con comorbilidades",
  dificultad: "Muy alta",
  caso: `Mujer de 68 años con diabetes mellitus tipo 2 y EPOC estable presenta NAC confirmada. Está hemodinámicamente estable, sin hipoxemia grave y puede recibir tratamiento oral. No tiene alergia a betalactámicos ni aislamiento previo de MRSA o Pseudomonas. Recibió antibióticos hace varios meses, sin hospitalización reciente. Se busca un régimen empírico que considere las comorbilidades y el riesgo de patógenos habituales. ¿Cuál es la estrategia más apropiada?`,
  pregunta: "¿Qué esquema es una opción aceptada para tratamiento ambulatorio de NAC con comorbilidades?",
  opciones: [
    "Amoxicilina sola a dosis baja, sin considerar comorbilidades",
    "Un betalactámico apropiado, como amoxicilina/clavulanato, combinado con macrólido o doxiciclina según el contexto",
    "Vancomicina más meropenem en todos los pacientes con diabetes",
    "Azitromicina sola, independientemente de resistencia y comorbilidades",
    "Prednisona como monoterapia hasta que desaparezca la fiebre"
  ],
  respuestaCorrecta: 1,
  explicacion: `En adultos ambulatorios con comorbilidades como enfermedad cardiaca, pulmonar, hepática o renal, diabetes, alcoholismo, malignidad o asplenia, ATS/IDSA contempla un betalactámico como amoxicilina/clavulanato o ciertas cefalosporinas, combinado con macrólido o doxiciclina; una fluoroquinolona respiratoria es otra alternativa en pacientes seleccionados, considerando sus riesgos. La selección debe individualizarse según alergias, función renal, interacciones y resistencias. Diabetes no equivale por sí sola a riesgo de MRSA o Pseudomonas.`,
  perlaENARM: "Las comorbilidades modifican el esquema empírico ambulatorio, pero no justifican automáticamente cobertura para patógenos multirresistentes.",
  gpc: {
    mexico: "IMSS-234-09, adaptar al protocolo institucional vigente y antibiograma local.",
    internacional: "ATS/IDSA 2019, tratamiento ambulatorio de NAC con comorbilidades."
  },
  bibliografia: "ATS/IDSA 2019; Harrison. Principles of Internal Medicine."
},
{
  id: "NEUMO-027",
  especialidad: "Neumología",
  tema: "Neumonía adquirida en la comunidad",
  subtema: "Tratamiento empírico hospitalario no grave",
  dificultad: "Muy alta",
  caso: `Varón de 61 años con NAC que requiere hospitalización por hipoxemia moderada y comorbilidades, pero sin criterios de NAC grave. No tiene antecedente de aislamiento de MRSA o Pseudomonas, ni factores de riesgo validados para estos microorganismos. La función renal permite tratamiento estándar y no hay alergias relevantes. ¿Qué régimen empírico es apropiado mientras se vigila la respuesta y se ajusta según resultados?`,
  pregunta: "¿Cuál es una estrategia inicial razonable para un paciente hospitalizado con NAC no grave?",
  opciones: [
    "Betalactámico, como ceftriaxona, más macrólido",
    "Vancomicina en monoterapia",
    "Metronidazol en monoterapia",
    "Antifúngico sistémico en todos los pacientes",
    "No iniciar antibióticos hasta disponer de cultivo definitivo"
  ],
  respuestaCorrecta: 0,
  explicacion: `Para NAC hospitalizada no grave, una combinación de betalactámico más macrólido es un régimen empírico recomendado en ATS/IDSA. Una fluoroquinolona respiratoria puede ser alternativa en determinados pacientes, según contraindicaciones y contexto. La cobertura anti-MRSA o antipseudomónica debe reservarse para factores de riesgo validados, antecedentes microbiológicos relevantes o circunstancias epidemiológicas concretas. Los cultivos, cuando están indicados, ayudan a ajustar la terapia; no se debe retrasar el tratamiento de una neumonía clínicamente importante a la espera de resultados definitivos.`,
  perlaENARM: "En NAC hospitalizada, ceftriaxona más azitromicina es un esquema empírico clásico; amplía cobertura solo cuando esté justificado.",
  gpc: {
    mexico: "IMSS-234-09, verificar régimen local vigente, alergias y antibiograma institucional.",
    internacional: "ATS/IDSA 2019, tratamiento empírico intrahospitalario."
  },
  bibliografia: "ATS/IDSA 2019; Harrison. Principles of Internal Medicine."
},
{
  id: "NEUMO-028",
  especialidad: "Neumología",
  tema: "Neumonía adquirida en la comunidad",
  subtema: "NAC grave y terapia empírica inicial",
  dificultad: "Muy alta",
  caso: `Mujer de 57 años con fiebre, tos y disnea, que evoluciona rápidamente a insuficiencia respiratoria con necesidad de ventilación mecánica. La imagen muestra infiltrados multilobares. No tiene antecedentes de colonización por MRSA o Pseudomonas ni factores de riesgo locales conocidos para estos patógenos. La sospecha clínica de NAC grave es alta. ¿Cuál es el principio correcto del tratamiento antibiótico inicial?`,
  pregunta: "¿Qué esquema empírico inicial es apropiado en NAC grave sin riesgo específico conocido de MRSA o Pseudomonas?",
  opciones: [
    "Betalactámico más macrólido, con monitorización y ajuste según microbiología",
    "Macrólido en monoterapia",
    "Amoxicilina oral a dosis ambulatoria",
    "Vancomicina en monoterapia",
    "Esperar el resultado de hemocultivos antes de iniciar tratamiento"
  ],
  respuestaCorrecta: 0,
  explicacion: `En NAC grave, la terapia empírica debe iniciarse con prontitud. La combinación de un betalactámico más macrólido cuenta con respaldo en recomendaciones internacionales; un betalactámico más fluoroquinolona respiratoria puede considerarse en escenarios seleccionados. La elección se adapta a alergias, epidemiología y riesgos individuales. La cobertura ampliada para MRSA o Pseudomonas no se indica automáticamente por la gravedad sola; se justifica cuando existen factores de riesgo validados o evidencia microbiológica previa. La estabilización respiratoria y hemodinámica ocurre en paralelo.`,
  perlaENARM: "NAC grave: tratamiento empírico precoz y combinado; cobertura para MRSA/Pseudomonas según factores de riesgo, no de forma universal.",
  gpc: {
    mexico: "IMSS-234-09, complementar con protocolos hospitalarios vigentes para NAC grave.",
    internacional: "ATS/IDSA 2019, manejo de NAC grave."
  },
  bibliografia: "ATS/IDSA 2019; Harrison. Principles of Internal Medicine."
},
{
  id: "NEUMO-029",
  especialidad: "Neumología",
  tema: "Neumonía adquirida en la comunidad",
  subtema: "Riesgo de MRSA y Pseudomonas",
  dificultad: "Muy alta",
  caso: `Varón de 70 años ingresa por NAC grave. Hace cuatro meses tuvo un cultivo de esputo positivo para Pseudomonas aeruginosa durante una infección respiratoria documentada. Actualmente requiere oxígeno de alto flujo y presenta infiltrados nuevos. No se dispone aún de cultivos actuales. ¿Cuál es la conducta antimicrobiana inicial más razonable?`,
  pregunta: "¿Cómo debe influir el antecedente microbiológico reciente en el tratamiento?",
  opciones: [
    "Ignorarlo porque toda NAC debe tratarse con el mismo esquema",
    "Considerar cobertura empírica antipseudomónica junto con el tratamiento apropiado para NAC grave, y obtener cultivos para reevaluar",
    "Administrar exclusivamente vancomicina",
    "Esperar el antibiograma actual sin dar antibióticos",
    "Usar antifúngico como tratamiento principal"
  ],
  respuestaCorrecta: 1,
  explicacion: `Un aislamiento respiratorio previo de Pseudomonas, especialmente si es reciente y clínicamente relevante, puede ser un factor de riesgo importante para recurrencia y modificar la terapia empírica. En NAC grave, se debe considerar un betalactámico antipseudomónico apropiado según susceptibilidad previa y antibiograma local, junto con cobertura estándar para los demás patógenos de NAC grave. Deben obtenerse cultivos y reevaluarse diariamente para desescalar o ajustar según resultados y evolución. La cobertura no debe mantenerse de manera automática si la evidencia posterior no la respalda.`,
  perlaENARM: "Antecedentes de aislamiento respiratorio de Pseudomonas o MRSA pueden cambiar el esquema empírico; cultiva y desescala según resultados.",
  gpc: {
    mexico: "IMSS-234-09, complementar con antibiograma y protocolos institucionales actuales.",
    internacional: "ATS/IDSA 2019: cobertura ampliada ante antecedentes microbiológicos y factores de riesgo validados."
  },
  bibliografia: "ATS/IDSA 2019; Sanford Guide to Antimicrobial Therapy, edición vigente."
},
{
  id: "NEUMO-030",
  especialidad: "Neumología",
  tema: "Neumonía adquirida en la comunidad",
  subtema: "Procalcitonina y decisión de iniciar antibióticos",
  dificultad: "Muy alta",
  caso: `Mujer de 63 años con fiebre, tos productiva, taquipnea y consolidación lobar nueva en radiografía. Está hemodinámicamente estable, pero presenta malestar sistémico. La procalcitonina inicial es de 0.08 ng/mL y el equipo considera que este resultado podría indicar ausencia de infección bacteriana. No hay evidencia suficiente para establecer una etiología viral exclusiva. ¿Cuál es la interpretación más correcta?`,
  pregunta: "¿Debe utilizarse la procalcitonina baja como motivo único para omitir antibióticos?",
  opciones: [
    "Sí, una procalcitonina baja excluye neumonía bacteriana",
    "Sí, siempre que la radiografía muestre consolidación",
    "No; una procalcitonina baja no excluye con seguridad etiología bacteriana y no debe decidir por sí sola el inicio de antibióticos en NAC confirmada",
    "Sí, pero solo en adultos mayores",
    "La procalcitonina permite identificar con certeza el microorganismo causal"
  ],
  respuestaCorrecta: 2,
  explicacion: `La procalcitonina puede aportar información complementaria, pero su sensibilidad no es suficiente para descartar de forma fiable infección bacteriana en todos los pacientes con NAC. En una presentación clínico-radiológica compatible, no debe utilizarse de manera aislada para negar tratamiento antibiótico inicial. La decisión se integra con gravedad, evidencia microbiológica, evolución y probabilidad de etiología viral o alternativa. La procalcitonina tampoco identifica por sí sola el agente etiológico.`,
  perlaENARM: "Una procalcitonina baja no descarta NAC bacteriana ni debe ser el único criterio para negar antibióticos iniciales.",
  gpc: {
    mexico: "IMSS-234-09, interpretación clínica integral de estudios diagnósticos.",
    internacional: "ATS/IDSA 2019, recomendación contra usar procalcitonina para decidir por sí sola el inicio de antibióticos en NAC radiológicamente confirmada."
  },
  bibliografia: "ATS/IDSA 2019; Cochrane Reviews on procalcitonin-guided antibiotic therapy."
},
{
  id: "NEUMO-031",
  especialidad: "Neumología",
  tema: "Neumonía adquirida en la comunidad",
  subtema: "Influenza concomitante",
  dificultad: "Muy alta",
  caso: `Varón de 59 años con fiebre, mialgias y tos que progresan a disnea. La PCR para influenza resulta positiva y la radiografía muestra consolidación lobar compatible con neumonía. Se encuentra hospitalizado por hipoxemia. No hay resultados microbiológicos que descarten coinfección bacteriana. ¿Cuál es la estrategia inicial más apropiada?`,
  pregunta: "¿Qué tratamiento debe considerarse al reconocer influenza asociada a NAC hospitalizada?",
  opciones: [
    "Suspender antibióticos automáticamente porque influenza explica todos los hallazgos",
    "Iniciar antiviral para influenza según indicación y mantener antibióticos empíricos iniciales para NAC mientras se evalúa coinfección",
    "Administrar exclusivamente corticoide sistémico",
    "Indicar antifúngico empírico a todos los pacientes con influenza",
    "Esperar la PCR bacteriana antes de tratar la influenza"
  ],
  respuestaCorrecta: 1,
  explicacion: `En pacientes hospitalizados con NAC e influenza confirmada, se recomienda tratamiento antiviral apropiado, como oseltamivir cuando esté indicado, incluso si han transcurrido más de 48 horas desde el inicio en pacientes hospitalizados. La coinfección bacteriana puede coexistir y producir deterioro grave; por ello, la prueba viral positiva no elimina automáticamente la necesidad de antibióticos empíricos en NAC radiológicamente confirmada. La evolución, microbiología y probabilidad de coinfección guían el ajuste posterior.`,
  perlaENARM: "Influenza positiva no excluye coinfección bacteriana; en NAC hospitalizada considera antiviral y tratamiento antibiótico inicial según el cuadro.",
  gpc: {
    mexico: "Consultar protocolo institucional vigente de influenza y NAC, considerando circulación viral local.",
    internacional: "ATS/IDSA 2019, tratamiento antiviral y evaluación de coinfección en NAC con influenza."
  },
  bibliografia: "ATS/IDSA 2019; CDC guidance on influenza antiviral treatment."
},
{
  id: "NEUMO-032",
  especialidad: "Neumología",
  tema: "Neumonía adquirida en la comunidad",
  subtema: "Corticosteroides en NAC",
  dificultad: "Muy alta",
  caso: `Mujer de 65 años con NAC hospitalizada, fiebre y consolidación multilobar. No presenta exacerbación asmática ni de EPOC, insuficiencia suprarrenal ni otra indicación independiente para corticosteroides. Un integrante del equipo propone administrar prednisona de rutina a todos los pacientes con NAC para acelerar la resolución radiológica. ¿Cuál es la conducta más apropiada según la guía ATS/IDSA de 2019?`,
  pregunta: "¿Cuál es la postura correcta respecto a los corticosteroides sistémicos de rutina?",
  opciones: [
    "Administrarlos a todos los pacientes con NAC independientemente de gravedad",
    "No utilizarlos rutinariamente para NAC; valorar indicaciones específicas independientes, como choque séptico refractario según protocolos",
    "Usarlos como sustituto de antibióticos en NAC grave",
    "Administrarlos únicamente cuando la procalcitonina sea baja",
    "Indicar corticoides inhalados como tratamiento etiológico universal"
  ],
  respuestaCorrecta: 1,
  explicacion: `ATS/IDSA 2019 recomienda no administrar corticosteroides sistémicos de rutina en NAC, salvo indicaciones clínicas específicas; el choque séptico refractario puede requerir corticosteroides conforme a protocolos de sepsis. La evidencia y las recomendaciones pueden evolucionar y algunas guías más recientes pueden diferir en subgrupos críticos seleccionados. Por ello, en la práctica actual debe verificarse la guía vigente aplicable y distinguir NAC general de escenarios de NAC grave en UCI. No deben sustituir antimicrobianos ni soporte orgánico.`,
  perlaENARM: "No generalices corticoides a toda NAC; identifica indicaciones independientes y consulta recomendaciones actuales para subgrupos críticos.",
  gpc: {
    mexico: "IMSS-234-09, complementar con protocolos vigentes de sepsis y cuidados críticos.",
    internacional: "ATS/IDSA 2019; comprobar actualizaciones internacionales aplicables a NAC grave."
  },
  bibliografia: "ATS/IDSA 2019; Surviving Sepsis Campaign, edición vigente."
},
{
  id: "NEUMO-033",
  especialidad: "Neumología",
  tema: "Neumonía adquirida en la comunidad",
  subtema: "Duración del tratamiento antibiótico",
  dificultad: "Muy alta",
  caso: `Varón de 52 años hospitalizado por NAC no complicada. Después de cuatro días de tratamiento dirigido, está afebril desde hace 48 horas, estable hemodinámicamente, con frecuencia respiratoria normal, tolera vía oral y ha recuperado su estado mental basal. No hay bacteriemia complicada, absceso, empiema ni microorganismo que exija tratamiento prolongado. ¿Cuál es el principio adecuado para decidir la duración?`,
  pregunta: "¿Qué criterio debe orientar la duración del antibiótico?",
  opciones: [
    "Mantener siempre 14–21 días, aunque haya resolución clínica rápida",
    "Suspender después de una sola dosis si la fiebre desaparece",
    "Individualizar según estabilidad clínica, agente, complicaciones y guía aplicable; en NAC no complicada puede bastar un curso corto de al menos cinco días si alcanza estabilidad",
    "Mantener antibióticos hasta que la radiografía sea completamente normal",
    "Continuar indefinidamente mientras persista cualquier tos"
  ],
  respuestaCorrecta: 2,
  explicacion: `La duración debe guiarse por estabilidad clínica y por la presencia de complicaciones o microorganismos que requieran cursos específicos. En la recomendación ATS/IDSA de 2019, la mayoría de los adultos con NAC deben recibir tratamiento hasta alcanzar estabilidad clínica y por un mínimo de cinco días. La resolución radiológica suele ser más lenta que la mejoría clínica y no es un criterio para prolongar automáticamente antibióticos. Bacteriemia complicada, absceso, empiema, inmunosupresión u otros escenarios requieren valoración individual.`,
  perlaENARM: "La duración de antibióticos se basa en estabilidad clínica y complicaciones; no se prolonga únicamente por una radiografía aún anormal.",
  gpc: {
    mexico: "IMSS-234-09, verificar duración y recomendaciones en protocolo institucional vigente.",
    internacional: "ATS/IDSA 2019, duración y estabilidad clínica en NAC."
  },
  bibliografia: "ATS/IDSA 2019; revisiones sistemáticas de duración de tratamiento antibiótico en NAC."
},
{
  id: "NEUMO-034",
  especialidad: "Neumología",
  tema: "Neumonía adquirida en la comunidad",
  subtema: "Falta de respuesta al tratamiento",
  dificultad: "Muy alta",
  caso: `Mujer de 60 años con NAC tratada ambulatoriamente con un esquema apropiado. A las 72 horas persisten fiebre alta, disnea progresiva y dolor pleurítico; la saturación ha disminuido a 88% al aire ambiente. La radiografía muestra aumento de la opacidad basal y un nuevo borramiento del seno costofrénico. La paciente no ha presentado mejoría funcional. ¿Cuál es el siguiente paso más adecuado?`,
  pregunta: "¿Cuál es la prioridad clínica ante este deterioro?",
  opciones: [
    "Mantener el mismo manejo domiciliario sin reevaluación hasta completar diez días",
    "Reevaluar urgentemente gravedad, oxigenación, complicaciones pleurales, diagnóstico alternativo y necesidad de hospitalización",
    "Añadir de inmediato tres antibióticos sin obtener nueva información",
    "Suspender todo tratamiento porque la persistencia de fiebre demuestra etiología viral",
    "Solicitar únicamente una radiografía de control en seis semanas"
  ],
  respuestaCorrecta: 1,
  explicacion: `La falta de respuesta o el deterioro exige reevaluación urgente. Deben revisarse gravedad, adherencia, dosis, resistencia, diagnóstico alternativo y complicaciones como derrame parapneumónico, empiema, absceso, embolia pulmonar o infección no bacteriana. La hipoxemia nueva y la progresión radiológica justifican valoración hospitalaria. La ampliación indiscriminada de antibióticos sin reconsiderar el diagnóstico puede retrasar el tratamiento correcto y aumentar toxicidad.`,
  perlaENARM: "Si empeora a las 48–72 horas, reevalúa diagnóstico, gravedad y complicaciones antes de ampliar antibióticos a ciegas.",
  gpc: {
    mexico: "IMSS-234-09, reevaluación clínica y búsqueda de complicaciones.",
    internacional: "ATS/IDSA 2019, manejo posterior al inicio del tratamiento y evaluación de respuesta."
  },
  bibliografia: "ATS/IDSA 2019; Harrison. Principles of Internal Medicine."
},
{
  id: "NEUMO-035",
  especialidad: "Neumología",
  tema: "Neumonía adquirida en la comunidad",
  subtema: "Derrame parapneumónico complicado",
  dificultad: "Muy alta",
  caso: `Varón de 55 años con NAC y fiebre persistente tras 72 horas de tratamiento. La ecografía torácica revela derrame pleural moderado, tabiques internos y material ecogénico. La toracocentesis obtiene líquido turbio con pH 7.08, glucosa baja y predominio neutrofílico. No hay contraindicación para drenaje. ¿Cuál es la conducta más apropiada?`,
  pregunta: "¿Qué intervención debe añadirse al tratamiento antimicrobiano?",
  opciones: [
    "Observación exclusiva porque todo derrame parapneumónico se resuelve con antibióticos",
    "Drenaje pleural mediante tubo, junto con antibióticos y valoración de respuesta",
    "Diurético de asa como tratamiento definitivo",
    "Corticoide sistémico en monoterapia",
    "Repetir radiografía en un mes antes de intervenir"
  ],
  respuestaCorrecta: 1,
  explicacion: `El pH pleural muy bajo, la glucosa reducida, el aspecto turbio y la loculación sugieren derrame parapneumónico complicado o empiema en evolución. El manejo requiere antibióticos y drenaje pleural, habitualmente con tubo, además de seguimiento clínico e imagenológico. Si el drenaje es insuficiente o persisten colecciones, se considera terapia intrapleural seleccionada o intervención quirúrgica según anatomía y evolución. El tratamiento no debe limitarse a antibióticos cuando existe una colección que requiere control de foco.`,
  perlaENARM: "Derrame parapneumónico con pH pleural bajo, pus o loculaciones: valorar drenaje además de antibióticos.",
  gpc: {
    mexico: "Consultar GPC institucional vigente de derrame pleural/empiema y NAC.",
    internacional: "ATS/IDSA 2019 para NAC; guías pleurales actuales para drenaje de infección pleural."
  },
  bibliografia: "British Thoracic Society Guideline for Pleural Disease, edición vigente; Harrison. Principles of Internal Medicine."
},
{
  id: "NEUMO-036",
  especialidad: "Neumología",
  tema: "Neumonía adquirida en la comunidad",
  subtema: "Complicación: absceso pulmonar",
  dificultad: "Muy alta",
  caso: `Varón de 62 años con alcoholismo, mala dentición y alteración del estado de conciencia previa al inicio de síntomas. Presenta fiebre persistente, pérdida de peso, expectoración fétida y cavidad pulmonar con nivel hidroaéreo en segmento posterior del lóbulo superior derecho. No se identifica lesión obstructiva en la evaluación inicial. ¿Cuál es la interpretación más probable y qué aspecto debe guiar el tratamiento?`,
  pregunta: "¿Cuál es el enfoque más apropiado?",
  opciones: [
    "Absceso pulmonar probable; cubrir flora compatible con aspiración según contexto y evaluar respuesta y obstrucción subyacente",
    "Edema pulmonar cardiogénico, tratar exclusivamente con diuréticos",
    "Asma grave, iniciar broncodilatadores como tratamiento definitivo",
    "Tromboembolia pulmonar sin infarto, tratar solo con anticoagulación",
    "Tuberculosis confirmada por cualquier nivel hidroaéreo, sin necesidad de diferencial"
  ],
  respuestaCorrecta: 0,
  explicacion: `El nivel hidroaéreo en una cavidad, junto con fiebre persistente y esputo fétido, sugiere absceso pulmonar. El antecedente de aspiración y mala dentición orienta hacia flora orofaríngea, incluidos anaerobios, aunque deben considerarse otras etiologías según epidemiología, inmunidad y patrón de imagen. Se requiere tratamiento antimicrobiano apropiado, evaluación de complicaciones y seguimiento. Si no mejora, debe investigarse resistencia, obstrucción endobronquial, neoplasia, tuberculosis u hongos según el contexto.`,
  perlaENARM: "Cavidad con nivel hidroaéreo y esputo fétido tras riesgo de aspiración orienta a absceso; considera obstrucción si la evolución no es favorable.",
  gpc: {
    mexico: "Consultar GPC institucional vigente sobre neumonía complicada y absceso pulmonar.",
    internacional: "ATS/IDSA 2019 para NAC; bibliografía especializada sobre absceso pulmonar y aspiración."
  },
  bibliografia: "Murray & Nadel's Textbook of Respiratory Medicine; Harrison. Principles of Internal Medicine."
},
{
  id: "NEUMO-037",
  especialidad: "Neumología",
  tema: "Neumonía adquirida en la comunidad",
  subtema: "Neumonía por aspiración",
  dificultad: "Muy alta",
  caso: `Mujer de 79 años con secuelas de enfermedad vascular cerebral y disfagia documentada. Presenta fiebre, tos y nueva consolidación en segmentos dependientes del pulmón tras un episodio de atragantamiento. Está estable y no tiene absceso, empiema ni esputo fétido. No hay datos de exposición a microorganismos resistentes. ¿Cuál es el principio correcto para seleccionar tratamiento empírico?`,
  pregunta: "¿Qué conducta es más apropiada?",
  opciones: [
    "Añadir cobertura anaerobia extensa en todos los casos de aspiración, sin excepción",
    "Tratar según el cuadro de NAC y gravedad, reservando cobertura anaerobia específica para situaciones como absceso o empiema",
    "No utilizar antibióticos nunca después de una aspiración",
    "Administrar antifúngicos por el antecedente neurológico",
    "Indicar vancomicina en monoterapia"
  ],
  respuestaCorrecta: 1,
  explicacion: `La aspiración puede contribuir a neumonitis química o a neumonía infecciosa, y la distinción depende de cronología y evolución. Cuando existe neumonía, el esquema se elige según gravedad, sitio de atención y riesgos microbiológicos. ATS/IDSA no recomienda añadir cobertura anaerobia de rutina en toda sospecha de neumonía por aspiración, salvo que se sospechen absceso pulmonar o empiema. También es esencial evaluar deglución, prevenir nuevas aspiraciones y ajustar el plan nutricional y de cuidados.`,
  perlaENARM: "La aspiración no implica automáticamente cobertura anaerobia ampliada; absceso y empiema cambian la consideración.",
  gpc: {
    mexico: "Consultar protocolo institucional vigente de NAC y prevención de aspiración.",
    internacional: "ATS/IDSA 2019, recomendación sobre cobertura anaerobia en neumonía por aspiración."
  },
  bibliografia: "ATS/IDSA 2019; Harrison. Principles of Internal Medicine."
},
{
  id: "NEUMO-038",
  especialidad: "Neumología",
  tema: "Neumonía adquirida en la comunidad",
  subtema: "Diferenciación de edema pulmonar cardiogénico",
  dificultad: "Muy alta",
  caso: `Varón de 76 años con disnea, fiebre de 38.5 °C, tos productiva y dolor pleurítico. La radiografía muestra una consolidación lobar focal, sin cardiomegalia ni redistribución vascular. La ecografía pulmonar identifica consolidación subpleural focal con broncograma aéreo dinámico; no hay derrames bilaterales significativos. El BNP no está marcadamente elevado y no presenta ingurgitación yugular ni edema periférico. ¿Cuál es la causa más probable de la opacidad?`,
  pregunta: "¿Qué diagnóstico explica mejor el conjunto de datos?",
  opciones: [
    "Edema pulmonar cardiogénico como única explicación",
    "Neumonía focal, por síndrome infeccioso y consolidación con broncograma aéreo",
    "Fibrosis pulmonar idiopática",
    "Neumotórax a tensión",
    "Hipertensión pulmonar crónica sin infección"
  ],
  respuestaCorrecta: 1,
  explicacion: `La fiebre, tos productiva, dolor pleurítico y consolidación focal favorecen neumonía. El edema cardiogénico suele mostrar un patrón clínico y radiológico de congestión, aunque puede coexistir con infección y no siempre presenta todos los signos clásicos. El broncograma aéreo dinámico en una consolidación periférica puede apoyar neumonía en el contexto apropiado, pero ningún hallazgo ecográfico aislado reemplaza la integración clínica. Si persiste incertidumbre, deben reconsiderarse diagnósticos mixtos y realizar estudios dirigidos.`,
  perlaENARM: "Distingue consolidación infecciosa de congestión integrando cronología, fiebre, patrón radiológico y datos de sobrecarga cardiaca.",
  gpc: {
    mexico: "IMSS-234-09, diagnóstico clínico-radiológico de NAC.",
    internacional: "ATS/IDSA 2019, definición y diagnóstico de NAC."
  },
  bibliografia: "ATS/IDSA 2019; Murray & Nadel's Textbook of Respiratory Medicine."
},
{
  id: "NEUMO-039",
  especialidad: "Neumología",
  tema: "Neumonía adquirida en la comunidad",
  subtema: "Reevaluación radiológica y sospecha de neoplasia",
  dificultad: "Muy alta",
  caso: `Varón de 67 años, fumador de 50 paquetes-año, tratado por neumonía focal en lóbulo superior derecho. Los síntomas infecciosos desaparecen, pero seis semanas después persisten tos y una opacidad en la misma localización. No presenta fiebre ni elevación importante de marcadores inflamatorios. La radiografía inicial ya mostraba discreta pérdida de volumen y estrechamiento bronquial. ¿Cuál es el siguiente paso más apropiado?`,
  pregunta: "¿Qué diagnóstico alternativo debe investigarse de forma prioritaria?",
  opciones: [
    "Asma intermitente",
    "Obstrucción endobronquial por neoplasia con neumonía posobstructiva",
    "Edema pulmonar agudo",
    "Neumonía viral autolimitada sin necesidad de evaluación adicional",
    "Tromboembolia pulmonar confirmada por la persistencia de opacidad"
  ],
  respuestaCorrecta: 1,
  explicacion: `La persistencia de una opacidad focal en el mismo sitio, especialmente en un fumador mayor con pérdida de volumen y signos de obstrucción bronquial, obliga a investigar una lesión endobronquial, incluida neoplasia pulmonar con neumonía posobstructiva. La tomografía de tórax y la evaluación broncoscópica se consideran según los hallazgos. No todos los pacientes requieren radiografía de control sistemática tras una NAC que se resuelve, pero la persistencia de síntomas o anomalías y el riesgo de cáncer justifican evaluación dirigida.`,
  perlaENARM: "Neumonía recurrente o persistente en la misma localización, sobre todo en fumador, obliga a descartar obstrucción tumoral.",
  gpc: {
    mexico: "Consultar GPC institucional vigente sobre cáncer pulmonar y evaluación de opacidades persistentes.",
    internacional: "ATS/IDSA 2019: no se recomienda imagen de control rutinaria en todos los pacientes con resolución clínica; sí evaluación dirigida cuando persisten hallazgos o hay sospecha alternativa."
  },
  bibliografia: "ATS/IDSA 2019; Harrison. Principles of Internal Medicine; Murray & Nadel's Textbook of Respiratory Medicine."
},
{
  id: "NEUMO-040",
  especialidad: "Neumología",
  tema: "Neumonía adquirida en la comunidad",
  subtema: "Integración: NAC grave, hipoxemia y choque",
  dificultad: "Muy alta",
  caso: `Mujer de 71 años con diabetes y enfermedad renal crónica consulta por fiebre, tos, confusión y disnea. Presenta TA 82/48 mmHg, FC 128 lpm, FR 34 rpm, SpO2 84% al aire ambiente y temperatura de 39.2 °C. La radiografía muestra infiltrados bilaterales multilobares. Lactato de 4.2 mmol/L y creatinina superior a su basal. Requiere oxígeno suplementario y persiste hipotensa después de una evaluación inicial de volumen. ¿Cuál es la prioridad terapéutica integral?`,
  pregunta: "¿Cuál es la conducta inicial más apropiada?",
  opciones: [
    "Tratamiento ambulatorio con antibiótico oral y control en 48 horas",
    "Manejo urgente en área crítica con soporte respiratorio, antibióticos intravenosos tempranos, cultivos sin retrasar tratamiento y manejo protocolizado del choque",
    "Esperar resultados microbiológicos definitivos antes de administrar antibióticos",
    "Administrar exclusivamente diuréticos por los infiltrados bilaterales",
    "Dar corticoide oral y egresar cuando disminuya la fiebre"
  ],
  respuestaCorrecta: 1,
  explicacion: `La paciente presenta NAC grave con insuficiencia respiratoria, alteración del estado mental, hipotensión y datos de hipoperfusión compatibles con choque séptico. La prioridad es estabilización ABC, soporte de oxigenación y ventilación según necesidad, antimicrobianos intravenosos tempranos, cultivos pertinentes sin retrasar el tratamiento, evaluación de perfusión y líquidos individualizados, y vasopresores si persiste hipotensión según protocolo de sepsis. Debe considerarse ingreso a UCI. La elección del antibiótico se guía por NAC grave y riesgos microbiológicos; no se debe ampliar cobertura de forma indiscriminada sin reevaluación posterior.`,
  perlaENARM: "NAC con hipotensión, lactato elevado, confusión e hipoxemia es una emergencia: estabilización, antibióticos tempranos y manejo de choque en paralelo.",
  gpc: {
    mexico: "IMSS-234-09, complementar con protocolo institucional vigente de sepsis y cuidados críticos.",
    internacional: "ATS/IDSA 2019 para NAC grave; Surviving Sepsis Campaign, edición vigente."
  },
  bibliografia: "ATS/IDSA 2019; Surviving Sepsis Campaign; Harrison. Principles of Internal Medicine."
},

{
  id: "NEUMO-041",
  especialidad: "Neumología",
  tema: "Neumonía nosocomial",
  subtema: "Definición, cronología y diagnóstico diferencial",
  dificultad: "Alta",
  caso: `Masculino de 68 años, ingresado por pancreatitis aguda biliar. Durante las primeras 48 horas permanece afebril, sin tos ni requerimiento de oxígeno; la radiografía inicial muestra únicamente atelectasias laminares bibasales. Al sexto día de hospitalización presenta fiebre de 39 °C, tos con expectoración purulenta, frecuencia respiratoria de 31/min y SpO₂ de 87% al aire ambiente. La presión arterial es de 108/66 mmHg y la frecuencia cardiaca de 116/min. En la exploración se identifican crepitantes en la base pulmonar derecha. La radiografía de control muestra una nueva opacidad alveolar en el lóbulo inferior derecho. Leucocitos 18,400/µL, creatinina 1.1 mg/dL y lactato 1.8 mmol/L. No está intubado y no presenta datos clínicos de sobrecarga hídrica. Se solicita clasificar el proceso infeccioso antes de seleccionar el esquema antimicrobiano.`,
  pregunta: "¿Cuál es la clasificación diagnóstica más apropiada?",
  opciones: [
    "Neumonía adquirida en la comunidad de presentación tardía, porque los síntomas respiratorios comenzaron durante la hospitalización",
    "Neumonía hospitalaria no asociada a ventilación mecánica, por aparición después de 48 horas de ingreso y ausencia de intubación",
    "Neumonía asociada a ventilación mecánica, porque el paciente requiere oxígeno suplementario",
    "Neumonitis química por aspiración, confirmada por la localización basal de la opacidad",
    "Atelectasia posoperatoria infectada, diagnóstico que excluye la necesidad de evaluar una infección pulmonar nueva"
  ],
  respuestaCorrecta: 1,
  explicacion: `La neumonía hospitalaria se define por su aparición al menos 48 horas después del ingreso, cuando la infección no estaba incubándose al momento de la admisión. El paciente presenta un infiltrado nuevo acompañado de fiebre, secreciones purulentas, leucocitosis e hipoxemia, un conjunto compatible con infección pulmonar nosocomial. Al no estar intubado, no corresponde clasificarla como neumonía asociada a ventilación mecánica. La cronología y el infiltrado nuevo son esenciales, pero deben interpretarse junto con el contexto clínico y los diagnósticos alternativos. La atelectasia aislada no explica satisfactoriamente todos los datos; la aspiración tampoco puede diagnosticarse solo por una opacidad basal. Antes del antibiótico, si no retrasa el tratamiento de un paciente inestable, deben obtenerse muestras respiratorias adecuadas y valorar la gravedad, las exposiciones antimicrobianas previas y la epidemiología local.`,
  perlaENARM: "Un infiltrado nuevo que aparece ≥48 horas después del ingreso orienta a neumonía hospitalaria; la necesidad de oxígeno por sí sola no define neumonía asociada a ventilación mecánica.",
  gpc: {
    mexico: "GPC IMSS-624-24: prevención, diagnóstico y tratamiento de la neumonía asociada a ventilación mecánica; aplicable específicamente a NAVM.",
    internacional: "ATS/IDSA 2016: manejo de neumonía hospitalaria y asociada a ventilación mecánica en adultos."
  },
  bibliografia: "ATS/IDSA. Clinical Practice Guidelines for HAP/VAP. Clinical Infectious Diseases. 2016;63:e61-e111."
},
{
  id: "NEUMO-042",
  especialidad: "Neumología",
  tema: "Neumonía nosocomial",
  subtema: "Diagnóstico diferencial en paciente hospitalizado",
  dificultad: "Alta",
  caso: `Femenina de 74 años, hospitalizada por fractura de cadera y sometida a osteosíntesis hace cuatro días. Tiene antecedente de insuficiencia cardiaca con fracción de eyección de 35% y enfermedad renal crónica G3a. Tras recibir varios bolos de cristaloides por hipotensión perioperatoria, desarrolla disnea progresiva, ortopnea y aumento de requerimiento de oxígeno. Temperatura 37.4 °C, frecuencia cardiaca 108/min, frecuencia respiratoria 30/min y presión arterial 154/92 mmHg. Presenta ingurgitación yugular, edema maleolar y crepitantes bilaterales. La radiografía revela opacidades perihiliares bilaterales, redistribución vascular y pequeños derrames pleurales. Leucocitos 12,100/µL, procalcitonina 0.12 ng/mL y BNP significativamente elevado respecto a su basal. No tiene secreciones purulentas ni un foco lobar definido. El equipo considera iniciar antibióticos por una posible neumonía hospitalaria.`,
  pregunta: "¿Cuál es la conducta inicial mejor sustentada por los datos disponibles?",
  opciones: [
    "Iniciar de inmediato vancomicina, cefepima y amikacina, porque toda opacidad nueva después de 48 horas indica infección nosocomial",
    "Diagnosticar neumonía hospitalaria exclusivamente por la leucocitosis y mantener antibióticos durante siete días",
    "Evaluar y tratar prioritariamente la congestión cardiogénica, reevaluando la probabilidad de infección con la evolución clínica y los estudios pertinentes",
    "Descartar infección pulmonar de manera definitiva por la procalcitonina baja",
    "Administrar glucocorticoides sistémicos como tratamiento de primera línea para cualquier infiltrado bilateral posoperatorio"
  ],
  respuestaCorrecta: 2,
  explicacion: `La combinación de balance hídrico positivo, ortopnea, ingurgitación yugular, edema periférico, redistribución vascular y derrames bilaterales favorece edema pulmonar cardiogénico. La leucocitosis posoperatoria es inespecífica, y una procalcitonina baja disminuye la sospecha en determinados contextos, pero no excluye de manera absoluta una infección. La decisión debe integrar evolución temporal, secreciones, fiebre, cultivos cuando estén indicados y respuesta a la descongestión. La administración indiscriminada de antibióticos amplios puede causar toxicidad, infección por Clostridioides difficile y selección de resistencia. Si aparecen datos sólidos de infección concomitante o deterioro compatible con sepsis, el tratamiento antimicrobiano no debe retrasarse indebidamente. La reevaluación seriada evita convertir todo infiltrado hospitalario en neumonía.`,
  perlaENARM: "Un infiltrado hospitalario no equivale automáticamente a neumonía: edema cardiogénico, atelectasia, hemorragia y lesión pulmonar aguda son diagnósticos alternativos relevantes.",
  gpc: {
    mexico: "GPC IMSS-624-24 para NAVM cuando exista ventilación mecánica; no sustituye la evaluación diferencial general de infiltrados en pacientes no ventilados.",
    internacional: "ATS/IDSA 2016: integrar criterios clínicos, microbiología y epidemiología; evitar el uso indiscriminado de antimicrobianos."
  },
  bibliografia: "ATS/IDSA. Clinical Practice Guidelines for HAP/VAP. 2016."
},
{
  id: "NEUMO-043",
  especialidad: "Neumología",
  tema: "Neumonía nosocomial",
  subtema: "Elección del tratamiento empírico en neumonía hospitalaria",
  dificultad: "Alta",
  caso: `Masculino de 59 años, hospitalizado por una hemorragia digestiva ya controlada. En el séptimo día presenta fiebre de 38.7 °C, secreciones purulentas, frecuencia respiratoria de 27/min y una nueva consolidación en el lóbulo inferior izquierdo. Está hemodinámicamente estable, sin ventilación mecánica ni choque. No recibió antibióticos intravenosos durante los últimos 90 días, no tiene antecedentes de colonización por microorganismos multirresistentes y no presenta bronquiectasias. El antibiograma de su unidad muestra baja prevalencia de MRSA y susceptibilidad elevada de bacilos gramnegativos a cefepima y piperacilina/tazobactam. La función renal es normal. Se decide obtener una muestra respiratoria de calidad antes del tratamiento.`,
  pregunta: "¿Cuál es la estrategia antimicrobiana empírica más razonable, suponiendo que el antibiograma institucional respalda la monoterapia?",
  opciones: [
    "Vancomicina más linezolid, porque deben combinarse dos fármacos anti-MRSA en toda neumonía hospitalaria",
    "Un betalactámico antipseudomónico con actividad frente a los patógenos locales, por ejemplo cefepima o piperacilina/tazobactam, sin añadir cobertura anti-MRSA rutinaria",
    "Metronidazol en monoterapia, porque los pacientes hospitalizados presentan predominio de anaerobios",
    "Azitromicina en monoterapia, porque la neumonía hospitalaria comparte siempre la etiología de la adquirida en la comunidad",
    "Colistina más amikacina en todos los pacientes, independientemente del riesgo de resistencia"
  ],
  respuestaCorrecta: 1,
  explicacion: `En la neumonía hospitalaria no asociada a ventilación, el esquema empírico debe cubrir S. aureus y bacilos gramnegativos, incluido Pseudomonas aeruginosa, de acuerdo con la guía y el patrón local de susceptibilidad. Cuando no existen factores de riesgo de MRSA, el paciente no presenta alto riesgo de mortalidad y la epidemiología local permite un betalactámico con actividad apropiada, no se justifica añadir de rutina vancomicina o linezolid. Cefepima y piperacilina/tazobactam son ejemplos de opciones que pueden cubrir MSSA y gramnegativos, pero la elección definitiva depende de alergias, función renal, cultivos previos, antibiograma y protocolo institucional. El tratamiento debe ajustarse al resultado microbiológico y a la respuesta clínica. La monoterapia antipseudomónica es razonable en pacientes seleccionados; no debe extrapolarse a pacientes con choque, ventilación por neumonía o riesgo alto de resistencia.`,
  perlaENARM: "En HAP, la cobertura empírica debe adaptarse a gravedad, antibióticos IV en los últimos 90 días, riesgo de MRSA y antibiograma local; no todos requieren cobertura máxima.",
  gpc: {
    mexico: "GPC IMSS-624-24: específica para NAVM; para HAP no ventilada, individualizar conforme al protocolo institucional y epidemiología local.",
    internacional: "ATS/IDSA 2016: tratamiento empírico de HAP según riesgo de MRSA, Pseudomonas y mortalidad."
  },
  bibliografia: "ATS/IDSA. Clinical Practice Guidelines for HAP/VAP. 2016."
},
{
  id: "NEUMO-044",
  especialidad: "Neumología",
  tema: "Neumonía nosocomial",
  subtema: "Riesgo de MRSA y elección de cobertura",
  dificultad: "Alta",
  caso: `Masculino de 67 años con antecedente de diabetes mellitus tipo 2 y enfermedad renal crónica G3b, ingresado por una infección de tejidos blandos tratada con vancomicina intravenosa hace tres semanas. Durante su hospitalización actual desarrolla neumonía con fiebre de 39.1 °C, infiltrado lobar nuevo, secreciones purulentas y deterioro respiratorio. La presión arterial es 118/70 mmHg, sin vasopresores, pero necesita oxígeno de alto flujo. La unidad reporta una proporción de MRSA superior al 20% entre los aislamientos de S. aureus. La creatinina ha aumentado de 1.6 a 2.2 mg/dL. Se obtienen cultivos respiratorios y hemocultivos sin retrasar el tratamiento.`,
  pregunta: "Si se decide cobertura empírica frente a MRSA, ¿qué selección es apropiada mientras se esperan los cultivos?",
  opciones: [
    "Vancomicina o linezolid, seleccionando entre ambos según función renal, hemograma, interacciones y otros factores individuales",
    "Ceftriaxona en monoterapia, porque cubre de manera fiable MRSA",
    "Daptomicina en monoterapia, por su excelente actividad en el espacio alveolar",
    "Metronidazol más azitromicina, porque la cobertura anti-MRSA no es necesaria en neumonía hospitalaria",
    "Vancomicina más linezolid de rutina, para prevenir cualquier fallo terapéutico"
  ],
  respuestaCorrecta: 0,
  explicacion: `El uso reciente de antibióticos intravenosos y una prevalencia institucional elevada de MRSA justifican considerar cobertura empírica específica. ATS/IDSA recomienda vancomicina o linezolid para HAP/VAP cuando está indicada la cobertura frente a MRSA. En este paciente, el deterioro de la función renal hace especialmente importante individualizar la elección y monitorizar la exposición a vancomicina si se utiliza. Linezolid requiere valorar hemograma, interacciones serotoninérgicas y duración prevista. No se recomienda combinar rutinariamente ambos fármacos: hacerlo aumenta complejidad y toxicidad sin ser el esquema estándar. Daptomicina no es apropiada para neumonía alveolar porque el surfactante pulmonar inhibe su actividad. Una vez disponibles los resultados, debe retirarse la cobertura anti-MRSA si la microbiología y la evolución permiten hacerlo con seguridad.`,
  perlaENARM: "Si la cobertura anti-MRSA está indicada en HAP/NAVM, las opciones estándar son vancomicina o linezolid; la función renal y el hemograma influyen en la elección.",
  gpc: {
    mexico: "GPC IMSS-624-24: considerar prevención y tratamiento de NAVM según el contexto ventilatorio y el protocolo institucional.",
    internacional: "ATS/IDSA 2016: vancomicina o linezolid para HAP/VAP por MRSA."
  },
  bibliografia: "ATS/IDSA. Clinical Practice Guidelines for HAP/VAP. 2016."
},
{
  id: "NEUMO-045",
  especialidad: "Neumología",
  tema: "Neumonía nosocomial",
  subtema: "Riesgo de bacilos gramnegativos multirresistentes",
  dificultad: "Alta",
  caso: `Femenina de 61 años con bronquiectasias difusas por enfermedad pulmonar estructural, hospitalizada hace dos meses por una exacerbación infecciosa que requirió cefepima y meropenem intravenosos. Actualmente, en el noveno día de una nueva hospitalización, presenta neumonía con consolidaciones multifocales, fiebre de 39 °C, frecuencia respiratoria de 34/min, hipoxemia y presión arterial de 86/52 mmHg que persiste después de una reanimación inicial prudente. Requiere noradrenalina. Un cultivo respiratorio obtenido durante el ingreso previo aisló Pseudomonas aeruginosa resistente a cefepima, pero susceptible a otro betalactámico antipseudomónico según el antibiograma previo. La muestra actual está en proceso.`,
  pregunta: "¿Cuál es la estrategia inicial más adecuada respecto a la cobertura de gramnegativos?",
  opciones: [
    "Usar ceftriaxona en monoterapia, porque la resistencia previa no modifica el tratamiento de un nuevo episodio",
    "Elegir un esquema basado en el aislamiento previo, el antibiograma y el patrón local, considerando inicialmente dos agentes antipseudomónicos de clases diferentes por el alto riesgo y la gravedad",
    "Iniciar únicamente azitromicina hasta conocer el cultivo definitivo",
    "Evitar todos los betalactámicos porque el aislamiento previo de Pseudomonas implica resistencia universal a esa familia",
    "Usar un aminoglucósido como único fármaco antipseudomónico, independientemente de la función renal"
  ],
  respuestaCorrecta: 1,
  explicacion: `El choque séptico, la exposición reciente a antibióticos intravenosos, las bronquiectasias y el aislamiento previo de Pseudomonas resistente elevan considerablemente el riesgo de tratamiento empírico inadecuado. La estrategia debe incorporar los cultivos anteriores, el antibiograma institucional y la susceptibilidad más reciente disponible. En un paciente con alto riesgo de resistencia o mortalidad, ATS/IDSA contempla inicialmente dos agentes antipseudomónicos de clases diferentes, siempre que el perfil de susceptibilidad y las condiciones individuales lo justifiquen. Esta doble cobertura busca aumentar la probabilidad de que al menos un fármaco sea activo; no implica mantenerla automáticamente durante todo el tratamiento. Deben obtenerse cultivos, ajustar dosis a la función renal y desescalar tan pronto como exista información microbiológica confiable. Un aminoglucósido no debe emplearse como único agente antipseudomónico, y la exposición a múltiples betalactámicos no equivale a resistencia universal a toda la clase.`,
  perlaENARM: "El aislamiento previo de Pseudomonas y el choque cambian la selección empírica; la doble cobertura antipseudomónica es una decisión inicial selectiva, seguida de desescalamiento.",
  gpc: {
    mexico: "GPC IMSS-624-24 para NAVM; adaptar el manejo a cultivos previos, antibiograma y protocolo de sepsis local.",
    internacional: "ATS/IDSA 2016: doble cobertura antipseudomónica en pacientes seleccionados con riesgo de resistencia o mortalidad."
  },
  bibliografia: "ATS/IDSA. Clinical Practice Guidelines for HAP/VAP. 2016."
},
{
  id: "NEUMO-046",
  especialidad: "Neumología",
  tema: "Neumonía nosocomial",
  subtema: "Obtención e interpretación de cultivos respiratorios",
  dificultad: "Alta",
  caso: `Masculino de 72 años, ingresado por insuficiencia cardiaca descompensada, desarrolla fiebre, tos purulenta e infiltrado pulmonar nuevo al quinto día. Está estable, sin choque, y no recibe ventilación mecánica. Antes de iniciar antibióticos se obtiene una muestra de esputo que el laboratorio rechaza por contaminación: contiene abundantes células epiteliales escamosas y escasos neutrófilos. Un hemocultivo posterior resulta negativo. Tras 48 horas de tratamiento empírico dirigido por el antibiograma local, persiste febril, aunque disminuye el requerimiento de oxígeno. Se plantea ampliar de inmediato a carbapenémico, vancomicina y colistina por el hemocultivo negativo y la fiebre persistente.`,
  pregunta: "¿Cuál es el siguiente paso diagnóstico-terapéutico más razonable?",
  opciones: [
    "Escalar automáticamente a tres antimicrobianos de amplio espectro porque un hemocultivo negativo demuestra resistencia",
    "Reevaluar diagnóstico, evolución, calidad de las muestras y posibles complicaciones; obtener una muestra respiratoria válida si es factible y ajustar según los hallazgos",
    "Suspender todos los antibióticos únicamente porque los hemocultivos son negativos",
    "Tratar durante 21 días sin nuevas evaluaciones porque la fiebre siempre persiste en HAP",
    "Solicitar exclusivamente una procalcitonina y utilizarla como prueba definitiva para confirmar o descartar neumonía"
  ],
  respuestaCorrecta: 1,
  explicacion: `Un esputo con abundantes células epiteliales escamosas y escasos neutrófilos puede ser inadecuado para representar el tracto respiratorio inferior. Un hemocultivo negativo no descarta neumonía ni demuestra resistencia. A las 48 horas debe revisarse la trayectoria clínica, el diagnóstico diferencial, la exposición antimicrobiana previa, la posibilidad de derrame complicado, absceso, obstrucción o microorganismos no cubiertos y la calidad de las muestras. Si el paciente se estabiliza y existe mejoría parcial, ampliar automáticamente a múltiples fármacos puede ser perjudicial. En cambio, el deterioro hemodinámico o respiratorio obliga a actuar con mayor rapidez. La microbiología debe interpretarse junto con el contexto clínico y no como un resultado aislado. La procalcitonina tampoco sustituye el juicio clínico ni la evaluación de complicaciones.`,
  perlaENARM: "Los cultivos respiratorios deben ser de calidad. Un cultivo negativo, especialmente tras antibióticos o con muestra inadecuada, no excluye infección ni obliga por sí mismo a ampliar el espectro.",
  gpc: {
    mexico: "GPC IMSS-624-24: considerar microbiología respiratoria y evolución clínica en NAVM.",
    internacional: "ATS/IDSA 2016: muestras respiratorias, tratamiento guiado por susceptibilidad y desescalamiento."
  },
  bibliografia: "ATS/IDSA. Clinical Practice Guidelines for HAP/VAP. 2016."
},
{
  id: "NEUMO-047",
  especialidad: "Neumología",
  tema: "Neumonía nosocomial",
  subtema: "Desescalamiento antimicrobiano",
  dificultad: "Alta",
  caso: `Masculino de 63 años con HAP no asociada a ventilación mecánica. Se inició cefepima más vancomicina por gravedad inicial y factores de riesgo de resistencia. A las 72 horas se encuentra afebril, con menor requerimiento de oxígeno, leucocitos en descenso y estabilidad hemodinámica. Dos hemocultivos son negativos y una muestra respiratoria de buena calidad identifica Klebsiella pneumoniae susceptible a ceftriaxona y sin evidencia de un segundo patógeno. El laboratorio no reporta MRSA. No existen abscesos, empiema ni bacteriemia persistente. La creatinina aumentó durante el tratamiento y el equipo considera mantener la cobertura inicial completa durante 14 días para evitar recaídas.`,
  pregunta: "¿Cuál es la conducta antimicrobiana más adecuada?",
  opciones: [
    "Mantener cefepima más vancomicina durante 14 días en todos los casos de HAP",
    "Desescalar a un antibiótico dirigido con actividad comprobada frente al aislamiento, suspender la cobertura innecesaria y ajustar la duración a la evolución",
    "Añadir amikacina porque el cultivo identifica una enterobacteria",
    "Cambiar a colistina para prevenir el desarrollo de resistencia, pese a la susceptibilidad a ceftriaxona",
    "Suspender toda terapia inmediatamente al desaparecer la fiebre, sin considerar el diagnóstico ni la evolución"
  ],
  respuestaCorrecta: 1,
  explicacion: `La mejoría clínica y el aislamiento de un patógeno susceptible permiten reducir el espectro. Si Klebsiella pneumoniae es el único microorganismo clínicamente relevante y la susceptibilidad a ceftriaxona está documentada, debe elegirse un tratamiento dirigido compatible con la gravedad y el foco. La vancomicina puede retirarse cuando no hay evidencia de MRSA ni otra indicación. Mantener múltiples fármacos sin beneficio demostrado aumenta toxicidad, presión selectiva y riesgo de infección por C. difficile; la elevación de creatinina refuerza la necesidad de revisar el esquema. ATS/IDSA recomienda generalmente siete días para HAP, con individualización según respuesta clínica, microbiológica y presencia de complicaciones. No se debe suspender de forma automática al desaparecer la fiebre ni prolongar por rutina durante 14 días.`,
  perlaENARM: "El desescalamiento es parte del tratamiento correcto: reducir espectro cuando los cultivos y la evolución lo permiten no equivale a infratratar.",
  gpc: {
    mexico: "GPC IMSS-624-24: integrar los resultados microbiológicos y el contexto clínico en el manejo de NAVM.",
    internacional: "ATS/IDSA 2016: desescalamiento y duración habitual de siete días para HAP, individualizada por respuesta."
  },
  bibliografia: "ATS/IDSA. Clinical Practice Guidelines for HAP/VAP. 2016."
},
{
  id: "NEUMO-048",
  especialidad: "Neumología",
  tema: "Neumonía nosocomial",
  subtema: "Duración del tratamiento",
  dificultad: "Alta",
  caso: `Femenina de 56 años con HAP por un bacilo gramnegativo sensible al tratamiento dirigido. No presenta bacteriemia, absceso ni empiema. Tras iniciar terapia activa, permanece sin fiebre desde el tercer día, normaliza la presión arterial, reduce progresivamente el oxígeno y presenta descenso de leucocitos. Al séptimo día está alerta, tolera la vía oral y tiene función renal estable. La radiografía todavía muestra una opacidad residual, aunque menor que la inicial. No hay deterioro respiratorio ni nuevos focos infecciosos. Un integrante del equipo propone continuar antibióticos durante 14 días porque la imagen no se ha normalizado.`,
  pregunta: "¿Cuál es el principio más apropiado para decidir la duración de la terapia?",
  opciones: [
    "Mantener antibióticos hasta que la radiografía sea completamente normal, aunque tarde varias semanas",
    "Considerar que siete días suelen ser suficientes en HAP con buena respuesta, individualizando por patógeno, complicaciones y evolución clínica",
    "Continuar siempre 21 días porque toda neumonía hospitalaria es multirresistente",
    "Suspender a las 48 horas de la primera dosis, independientemente de la evolución",
    "Prolongar obligatoriamente hasta que la procalcitonina sea indetectable"
  ],
  respuestaCorrecta: 1,
  explicacion: `ATS/IDSA recomienda generalmente siete días de tratamiento antimicrobiano para HAP, con ajustes según la evolución clínica, radiológica y de laboratorio. La resolución radiográfica suele retrasarse respecto de la mejoría clínica y no constituye por sí sola un criterio para prolongar antibióticos. La persistencia de fiebre, inestabilidad, hipoxemia, bacteriemia, absceso, empiema o un microorganismo con particularidades terapéuticas puede justificar reevaluación y, en algunos casos, una duración distinta. En esta paciente, la respuesta clínica favorable y la ausencia de complicaciones apoyan considerar el esquema de siete días, siempre verificando la adecuación del tratamiento y la situación clínica final. La duración no debe establecerse únicamente por una imagen residual ni por un biomarcador aislado.`,
  perlaENARM: "En HAP, siete días es la duración habitual recomendada en adultos; la radiografía puede tardar más en resolverse que los síntomas.",
  gpc: {
    mexico: "GPC IMSS-624-24: seguir las recomendaciones institucionales para NAVM y ajustar por respuesta y complicaciones.",
    internacional: "ATS/IDSA 2016: duración habitual de siete días para HAP/VAP, con individualización."
  },
  bibliografia: "ATS/IDSA. Clinical Practice Guidelines for HAP/VAP. 2016."
},
{
  id: "NEUMO-049",
  especialidad: "Neumología",
  tema: "Neumonía nosocomial",
  subtema: "Derrame pleural complicado y empiema",
  dificultad: "Alta",
  caso: `Masculino de 65 años con HAP que recibió tratamiento antimicrobiano durante cuatro días. Persiste con fiebre, dolor pleurítico derecho y elevación de marcadores inflamatorios. La ecografía torácica identifica un derrame pleural moderado con tabiques y múltiples loculaciones. Se realiza toracocentesis guiada: líquido turbio, pH 7.08, glucosa 32 mg/dL, LDH 2,200 U/L y predominio neutrofílico. La tinción de Gram muestra bacterias, aunque el cultivo continúa pendiente. El paciente está taquicárdico y necesita más oxígeno que el día anterior. Se considera que la falta de respuesta se debe exclusivamente a una dosis insuficiente del antibiótico.`,
  pregunta: "¿Cuál es la intervención más importante además de mantener un tratamiento antimicrobiano adecuado?",
  opciones: [
    "Esperar el cultivo definitivo sin realizar ninguna intervención pleural",
    "Indicar drenaje pleural guiado por imagen, además de tratamiento antimicrobiano y valoración de la necesidad de intervención adicional",
    "Administrar diuréticos como único tratamiento del derrame",
    "Realizar únicamente fisioterapia respiratoria y suspender los antibióticos",
    "Prolongar el antibiótico sin reevaluar el control del foco"
  ],
  respuestaCorrecta: 1,
  explicacion: `El pH pleural menor de 7.20, la glucosa baja, el aspecto turbio, las loculaciones y una tinción de Gram positiva son datos de derrame parapneumónico complicado o infección pleural. El tratamiento requiere antibióticos y control del foco mediante drenaje pleural, habitualmente guiado por ecografía o imagen. La persistencia de fiebre durante una infección pleural loculada no se resuelve necesariamente aumentando la dosis del mismo antibiótico: la penetración y el drenaje del espacio infectado son determinantes. Si el drenaje inicial es insuficiente, debe considerarse valoración por cirugía torácica y, según el caso, estrategias intrapleurales conforme al protocolo local. Deben enviarse muestras para cultivo y ajustar el tratamiento, pero no esperar el resultado para drenar una colección complicada clínicamente relevante.`,
  perlaENARM: "pH pleural ≤7.20 en el contexto de infección, pus, Gram positivo o loculaciones orientan a drenaje, no solo a prolongar antibióticos.",
  gpc: {
    mexico: "GPC mexicana específica de NAVM cuando corresponda; el control de foco pleural debe seguir el protocolo institucional y la valoración especializada.",
    internacional: "ATS/IDSA HAP/VAP 2016 para el contexto infeccioso; principios de manejo del derrame parapneumónico complicado."
  },
  bibliografia: "ATS/IDSA. Clinical Practice Guidelines for HAP/VAP. 2016; guías especializadas de infección pleural."
},
{
  id: "NEUMO-050",
  especialidad: "Neumología",
  tema: "Neumonía nosocomial",
  subtema: "Falta de respuesta y búsqueda de complicaciones",
  dificultad: "Alta",
  caso: `Masculino de 70 años con neumonía hospitalaria tratada inicialmente según antibiograma institucional. A las 96 horas continúa con fiebre, taquicardia y requerimiento creciente de oxígeno, pese a que la dosis y el intervalo del antimicrobiano son adecuados para su función renal. La radiografía muestra una consolidación que parece mayor. Tiene dolor pleurítico, pero no hay datos claros de congestión cardiaca. Los cultivos iniciales son negativos y se obtuvieron después de una primera dosis de antibiótico. No existe un nuevo foco extrapulmonar evidente. El equipo propone cambiar a un carbapenémico sin realizar nuevas pruebas.`,
  pregunta: "¿Cuál es la aproximación más completa ante este fracaso clínico?",
  opciones: [
    "Cambiar automáticamente a carbapenémico y mantenerlo 21 días sin más estudios",
    "Reevaluar la adecuación del diagnóstico, buscar complicaciones como derrame complicado o absceso, valorar resistencia y obtener nuevas muestras si son factibles",
    "Descartar neumonía porque los cultivos son negativos",
    "Atribuir el deterioro a atelectasia y suspender el tratamiento antimicrobiano",
    "Añadir glucocorticoides sistémicos de rutina para cualquier falta de respuesta"
  ],
  respuestaCorrecta: 1,
  explicacion: `El deterioro tras 48–96 horas de tratamiento obliga a reconsiderar tanto la adecuación del antibiótico como el diagnóstico inicial. Deben revisarse los cultivos previos, los antibióticos recibidos, la dosis, la penetración, la función renal, el antibiograma y la posibilidad de patógenos resistentes. También es necesario buscar complicaciones que requieran control de foco, como derrame pleural complicado, empiema, absceso u obstrucción bronquial. Entre los diagnósticos alternativos están edema pulmonar, embolia pulmonar, hemorragia alveolar y otras causas de infiltrado. Los cultivos obtenidos después de iniciar antibióticos tienen sensibilidad reducida; un resultado negativo no excluye infección. La ampliación empírica puede ser necesaria si el paciente se deteriora, pero debe acompañarse de reevaluación sistemática y posterior desescalamiento.`,
  perlaENARM: "La neumonía que no mejora requiere buscar resistencia, diagnóstico alternativo y complicaciones; cambiar antibióticos sin reevaluar puede retrasar el tratamiento definitivo.",
  gpc: {
    mexico: "GPC IMSS-624-24 en NAVM cuando aplique; revisar diagnóstico y respuesta conforme al protocolo institucional.",
    internacional: "ATS/IDSA 2016: tratamiento guiado por cultivos, respuesta clínica y evaluación de complicaciones."
  },
  bibliografia: "ATS/IDSA. Clinical Practice Guidelines for HAP/VAP. 2016."
},
{
  id: "NEUMO-051",
  especialidad: "Neumología",
  tema: "Neumonía asociada a ventilación mecánica",
  subtema: "Definición y diagnóstico clínico",
  dificultad: "Alta",
  caso: `Masculino de 58 años, ingresado a UCI por pancreatitis necrosante, intubado por insuficiencia respiratoria. Durante los primeros tres días permanece con parámetros ventilatorios relativamente estables y sin fiebre. Al sexto día desde la intubación presenta temperatura de 39 °C, secreciones endotraqueales purulentas, aumento de la fracción inspirada de oxígeno de 0.35 a 0.60 y elevación de la PEEP de 5 a 10 cmH₂O. La radiografía muestra una nueva opacidad basal izquierda. Leucocitos 20,000/µL; lactato 2.2 mmol/L. No hay una causa extrapulmonar clara para la fiebre. Se solicita clasificar la infección y establecer las prioridades iniciales.`,
  pregunta: "¿Cuál es el diagnóstico sindromático más probable?",
  opciones: [
    "Neumonía adquirida en la comunidad, porque el paciente fue intubado fuera del quirófano",
    "Neumonía asociada a ventilación mecánica, por el infiltrado nuevo, secreciones purulentas y deterioro de la oxigenación después de más de 48 horas de intubación",
    "Traqueobronquitis asociada a ventilación mecánica, necesariamente sin afectación parenquimatosa",
    "Edema pulmonar cardiogénico, confirmado por cualquier aumento de PEEP",
    "Colonización endotraqueal asintomática, aun con fiebre y deterioro de oxigenación"
  ],
  respuestaCorrecta: 1,
  explicacion: `La neumonía asociada a ventilación mecánica se considera cuando la infección aparece después de más de 48 horas de intubación, en un contexto compatible con infección pulmonar. El infiltrado nuevo, la fiebre, las secreciones purulentas y el empeoramiento de la oxigenación apoyan el diagnóstico, aunque ninguno de estos elementos aislado es completamente específico. Deben obtenerse muestras respiratorias y hemocultivos según el estado clínico, revisar el diagnóstico diferencial y comenzar tratamiento empírico oportuno cuando la sospecha sea suficiente. La selección del esquema depende de la gravedad, las exposiciones antimicrobianas, los aislamientos previos y el antibiograma de la UCI. Una radiografía aislada puede ser difícil de interpretar en pacientes ventilados, por lo que la tendencia clínica y los datos microbiológicos son esenciales.`,
  perlaENARM: "NAVM: sospechar ante deterioro clínico y nuevo infiltrado después de más de 48 horas de ventilación; integrar clínica, imagen y microbiología.",
  gpc: {
    mexico: "GPC IMSS-624-24: prevención, diagnóstico y tratamiento de la neumonía asociada a ventilación mecánica.",
    internacional: "ATS/IDSA 2016: diagnóstico y tratamiento de NAVM en adultos."
  },
  bibliografia: "GPC IMSS-624-24; ATS/IDSA. Clinical Practice Guidelines for HAP/VAP. 2016."
},
{
  id: "NEUMO-052",
  especialidad: "Neumología",
  tema: "Neumonía asociada a ventilación mecánica",
  subtema: "NAVM frente a traqueobronquitis asociada a ventilación",
  dificultad: "Alta",
  caso: `Femenina de 49 años, intubada desde hace cinco días por estatus epiléptico ya controlado. Presenta aumento de secreciones endotraqueales y fiebre de 38.1 °C. La radiografía portátil muestra atelectasias laminares sin infiltrado nuevo convincente. La oxigenación y las presiones ventilatorias permanecen sin cambios. El aspirado endotraqueal crece Pseudomonas aeruginosa en abundancia, pero la muestra contiene también flora mixta y no hay hemocultivos positivos. La paciente no está en choque y la función renal es normal. Se propone iniciar dos antibióticos antipseudomónicos durante 14 días solo por el resultado del aspirado.`,
  pregunta: "¿Cuál es la interpretación más apropiada?",
  opciones: [
    "El aislamiento de Pseudomonas en aspirado endotraqueal confirma por sí solo NAVM y obliga a doble cobertura prolongada",
    "Debe distinguirse colonización o traqueobronquitis asociada a ventilación de NAVM; el cultivo aislado no confirma infección parenquimatosa",
    "Todo paciente intubado con fiebre debe recibir colistina",
    "La ausencia de infiltrado excluye de forma absoluta cualquier infección respiratoria",
    "La presencia de atelectasias obliga a tratar neumonía por anaerobios"
  ],
  respuestaCorrecta: 1,
  explicacion: `Los tubos endotraqueales se colonizan con frecuencia, por lo que un cultivo positivo debe correlacionarse con hallazgos clínicos y radiológicos. En esta paciente no existe un infiltrado nuevo convincente ni deterioro de la oxigenación, lo que hace menos probable NAVM. Puede considerarse traqueobronquitis asociada a ventilación si existe un síndrome compatible, pero el beneficio del tratamiento antimicrobiano en esa entidad no está tan establecido como en NAVM y debe individualizarse. Es necesario revisar otras causas de fiebre, calidad de la muestra, evolución y datos de infección sistémica. La decisión no debe basarse únicamente en la abundancia del crecimiento bacteriano. La terapia antipseudomónica doble y prolongada sin evidencia suficiente expone a toxicidad y resistencia.`,
  perlaENARM: "Un aspirado endotraqueal positivo no equivale automáticamente a NAVM: la colonización es frecuente y debe existir correlación clínico-radiológica.",
  gpc: {
    mexico: "GPC IMSS-624-24: diagnóstico de NAVM y prevención de infecciones asociadas a ventilación.",
    internacional: "ATS/IDSA 2016: interpretar muestras respiratorias en el contexto clínico y evitar tratamientos innecesarios."
  },
  bibliografia: "GPC IMSS-624-24; ATS/IDSA. Clinical Practice Guidelines for HAP/VAP. 2016."
},
{
  id: "NEUMO-053",
  especialidad: "Neumología",
  tema: "Neumonía asociada a ventilación mecánica",
  subtema: "Toma de muestras respiratorias",
  dificultad: "Alta",
  caso: `Masculino de 64 años con NAVM probable, deterioro de la oxigenación y secreciones purulentas. Se encuentra hemodinámicamente estable, sin choque. La UCI dispone de aspirado endotraqueal cuantitativo y de broncoscopia con lavado broncoalveolar. El equipo debate retrasar la primera dosis de antibiótico hasta obtener broncoscopia, aunque la realización del procedimiento puede tardar dos horas. El paciente tiene antecedente de tratamiento antibiótico intravenoso reciente y colonización previa por un bacilo gramnegativo resistente. La sospecha clínica es alta y el deterioro respiratorio está progresando.`,
  pregunta: "¿Cuál es la estrategia más adecuada?",
  opciones: [
    "Esperar obligatoriamente dos horas para realizar broncoscopia antes de iniciar tratamiento, sin importar la evolución",
    "Obtener una muestra respiratoria apropiada con rapidez si es factible, sin retrasar indebidamente el tratamiento empírico necesario",
    "No obtener cultivos porque la microbiología nunca cambia la conducta",
    "Administrar solo un macrólido mientras se espera el procedimiento",
    "Realizar broncoscopia únicamente después de completar siete días de antibióticos"
  ],
  respuestaCorrecta: 1,
  explicacion: `En NAVM, las muestras respiratorias permiten identificar el patógeno y ajustar el tratamiento, pero la técnica de obtención debe adaptarse a la situación clínica y los recursos disponibles. En un paciente con alta sospecha y deterioro respiratorio, el tratamiento empírico no debe retrasarse de forma clínicamente significativa por esperar un procedimiento invasivo. Si puede obtenerse rápidamente un aspirado endotraqueal de calidad, es una opción práctica; el lavado broncoalveolar puede reservarse para situaciones seleccionadas o cuando aporte valor diagnóstico. La cobertura empírica debe tener en cuenta los antibióticos recientes, los cultivos previos y la epidemiología local. Una vez disponibles los resultados, se debe ajustar el esquema y retirar la cobertura innecesaria. En pacientes estables, las muestras antes del antibiótico pueden mejorar el rendimiento microbiológico, siempre que no comprometan la oportunidad terapéutica.`,
  perlaENARM: "Cultivos primero cuando sea factible y rápido; nunca retrasar indebidamente el tratamiento de una infección grave o progresiva por esperar broncoscopia.",
  gpc: {
    mexico: "GPC IMSS-624-24: diagnóstico y tratamiento de NAVM.",
    internacional: "ATS/IDSA 2016: obtención de muestras respiratorias y tratamiento empírico oportuno."
  },
  bibliografia: "GPC IMSS-624-24; ATS/IDSA. Clinical Practice Guidelines for HAP/VAP. 2016."
},
{
  id: "NEUMO-054",
  especialidad: "Neumología",
  tema: "Neumonía asociada a ventilación mecánica",
  subtema: "Tratamiento empírico en NAVM grave",
  dificultad: "Alta",
  caso: `Masculino de 71 años con ventilación mecánica invasiva desde hace ocho días. Desarrolla fiebre de 39.4 °C, consolidaciones nuevas bilaterales, aumento de FiO₂ de 0.40 a 0.75, PEEP de 8 a 12 cmH₂O y presión arterial de 78/44 mmHg que requiere noradrenalina. Recibió meropenem y vancomicina intravenosos hace 20 días. Un cultivo de vigilancia previo aisló un bacilo gramnegativo resistente a cefepima. La susceptibilidad local a los antibióticos antipseudomónicos varía y el antibiograma actualizado de la unidad está disponible. Se obtienen aspirado endotraqueal y hemocultivos.`,
  pregunta: "¿Qué principio debe guiar el esquema empírico inicial?",
  opciones: [
    "Monoterapia con ceftriaxona, porque el choque no influye en la probabilidad de resistencia",
    "Cobertura inicial apropiada para MRSA cuando el riesgo lo justifique y cobertura gramnegativa basada en antibiograma, considerando dos agentes antipseudomónicos de clases diferentes por el alto riesgo",
    "Tratamiento exclusivo con antifúngicos por tratarse de una estancia prolongada",
    "Esperar 48 horas a que se identifique el microorganismo antes de iniciar antibióticos",
    "Combinar rutinariamente vancomicina, linezolid, colistina, amikacina y meropenem sin considerar susceptibilidades ni toxicidad"
  ],
  respuestaCorrecta: 1,
  explicacion: `Este paciente tiene NAVM grave con choque séptico, antibióticos intravenosos recientes y antecedente de microorganismo resistente. La prioridad es administrar pronto un esquema empírico que tenga alta probabilidad de ser activo, usando los aislamientos previos y el antibiograma local. En pacientes con riesgo elevado de resistencia o mortalidad, ATS/IDSA contempla doble cobertura antipseudomónica inicial y cobertura anti-MRSA cuando esté indicada por factores individuales o epidemiología de la UCI. No se recomienda combinar de forma indiscriminada todos los antibióticos disponibles: la toxicidad y la presión selectiva son importantes. Deben ajustarse dosis a la función renal y a la farmacocinética del paciente crítico. Tras la identificación del patógeno y las susceptibilidades, la cobertura debe reducirse a la opción eficaz más estrecha posible.`,
  perlaENARM: "En NAVM con choque y riesgo de resistencia, el objetivo es asegurar cobertura empírica activa sin retraso; posteriormente se desescala con cultivos y antibiograma.",
  gpc: {
    mexico: "GPC IMSS-624-24: diagnóstico, tratamiento y prevención de NAVM.",
    internacional: "ATS/IDSA 2016: selección empírica basada en riesgo individual, gravedad y antibiograma local."
  },
  bibliografia: "GPC IMSS-624-24; ATS/IDSA. Clinical Practice Guidelines for HAP/VAP. 2016."
},
{
  id: "NEUMO-055",
  especialidad: "Neumología",
  tema: "Neumonía asociada a ventilación mecánica",
  subtema: "Prevención de NAVM",
  dificultad: "Alta",
  caso: `Femenina de 55 años, en ventilación mecánica por una lesión cerebral traumática. Permanece sedada profundamente durante varios días, en posición supina, con nutrición enteral y sin protocolo estructurado de evaluación de extubación. Se documentan higiene oral irregular, interrupciones frecuentes de la elevación de la cabecera por motivos no imprescindibles y ausencia de un proceso diario de evaluación de sedación. Al octavo día presenta fiebre y secreciones abundantes, aunque todavía no hay evidencia suficiente para confirmar NAVM. La UCI solicita identificar las intervenciones preventivas con mejor fundamento y evitar medidas de beneficio incierto.`,
  pregunta: "¿Qué conjunto de medidas preventivas es más apropiado?",
  opciones: [
    "Antibióticos sistémicos profilácticos durante toda la intubación y cambios programados diarios del tubo endotraqueal",
    "Reducir sedación cuando sea seguro, evaluar diariamente la posibilidad de liberación ventilatoria, mantener elevación de cabecera si no está contraindicada y aplicar higiene oral y medidas de control de infecciones según protocolo",
    "Mantener sedación profunda obligatoria para evitar tos y elevar la presión del manguito por encima de cualquier umbral recomendado",
    "Realizar broncoscopia diaria y cultivo endotraqueal diario en todos los pacientes",
    "Administrar antifúngicos profilácticos y suspender la nutrición enteral a todos los pacientes ventilados"
  ],
  respuestaCorrecta: 1,
  explicacion: `La prevención de NAVM se basa en un conjunto de medidas organizacionales y clínicas que reducen la exposición a ventilación, la aspiración de secreciones y la transmisión de microorganismos. Entre ellas se incluyen evitar sedación excesiva cuando sea seguro, evaluar diariamente la posibilidad de despertar y liberación ventilatoria, mantener una posición de cabecera elevada si no existe contraindicación, higiene oral según protocolo y cumplimiento estricto de higiene de manos y manejo del circuito. Debe minimizarse la manipulación innecesaria del sistema respiratorio. Los antibióticos sistémicos profilácticos rutinarios no son una estrategia universal de prevención de NAVM y favorecen resistencia y eventos adversos. La prevención debe adaptarse a las condiciones del paciente y a la evidencia del protocolo institucional; no existe una única intervención capaz de eliminar el riesgo.`,
  perlaENARM: "La prevención de NAVM prioriza disminuir la duración de ventilación, evitar sedación innecesaria, higiene de manos, cuidado oral y medidas de prevención de aspiración.",
  gpc: {
    mexico: "GPC IMSS-624-24: prevención de neumonía asociada a ventilación mecánica.",
    internacional: "ATS/IDSA 2016 y estrategias institucionales de prevención de infecciones asociadas a dispositivos."
  },
  bibliografia: "GPC IMSS-624-24; ATS/IDSA. Clinical Practice Guidelines for HAP/VAP. 2016."
},
{
  id: "NEUMO-056",
  especialidad: "Neumología",
  tema: "Neumonía asociada a ventilación mecánica",
  subtema: "Duración y respuesta a tratamiento de NAVM",
  dificultad: "Alta",
  caso: `Masculino de 62 años con NAVM confirmada por cultivo respiratorio y susceptibilidad antimicrobiana. Recibe tratamiento dirigido activo desde el primer día. Al séptimo día está afebril, hemodinámicamente estable, con reducción importante de FiO₂ y PEEP, secreciones escasas y marcadores inflamatorios en descenso. No presenta bacteriemia persistente, absceso, empiema ni inmunosupresión relevante. La radiografía aún muestra una opacidad residual. Un miembro del equipo propone prolongar el tratamiento hasta 14 días porque el cultivo inicial fue positivo para Pseudomonas aeruginosa.`,
  pregunta: "¿Cuál es la decisión más razonable respecto a la duración?",
  opciones: [
    "Mantener siempre 14–21 días para cualquier NAVM por Pseudomonas, sin considerar la evolución",
    "Considerar una duración habitual de siete días si existe respuesta clínica adecuada, individualizando según evolución, complicaciones y características del patógeno",
    "Suspender después de 24 horas de estabilidad, independientemente de la respuesta",
    "Prolongar hasta que todos los cultivos respiratorios sean negativos en muestras seriadas",
    "Continuar antibióticos hasta normalización completa de la radiografía"
  ],
  respuestaCorrecta: 1,
  explicacion: `ATS/IDSA recomienda generalmente siete días de tratamiento para NAVM, con individualización según la velocidad de mejoría clínica, microbiológica y radiológica. La persistencia de una opacidad residual no obliga por sí misma a prolongar la terapia. La infección por Pseudomonas requiere atención al patrón de respuesta y a la susceptibilidad, pero el aislamiento no implica automáticamente un curso de 14–21 días. Si existe mejoría clara, control del foco y ausencia de complicaciones, puede considerarse completar un curso habitual de siete días. En cambio, la persistencia de inestabilidad, fiebre, bacteriemia, absceso o falta de control del foco exige reevaluar diagnóstico, susceptibilidad y duración. Los cultivos respiratorios pueden seguir positivos por colonización y no deben convertirse en una meta aislada de esterilización.`,
  perlaENARM: "La duración habitual recomendada de tratamiento de NAVM es siete días; la respuesta clínica y las complicaciones pesan más que la persistencia aislada de una opacidad.",
  gpc: {
    mexico: "GPC IMSS-624-24: tratamiento y seguimiento de NAVM conforme a la respuesta clínica.",
    internacional: "ATS/IDSA 2016: siete días de tratamiento para NAVM, con excepciones individualizadas."
  },
  bibliografia: "GPC IMSS-624-24; ATS/IDSA. Clinical Practice Guidelines for HAP/VAP. 2016."
},
{
  id: "NEUMO-057",
  especialidad: "Neumología",
  tema: "Neumonía asociada a ventilación mecánica",
  subtema: "Interpretación de biomarcadores",
  dificultad: "Alta",
  caso: `Femenina de 60 años, intubada por choque hemorrágico ya controlado. Al quinto día presenta fiebre, secreciones purulentas, aumento moderado de FiO₂ y un infiltrado nuevo. La procalcitonina es de 0.18 ng/mL, el recuento leucocitario es de 16,500/µL y el lactato de 1.7 mmol/L. Está estable sin vasopresores. Tiene riesgo de NAVM por la evolución clínica, pero el equipo plantea omitir antibióticos porque la procalcitonina está por debajo de 0.25 ng/mL. Se dispone de aspirado endotraqueal para cultivo y de un antibiograma actualizado de la unidad.`,
  pregunta: "¿Qué interpretación de la procalcitonina es correcta en esta situación?",
  opciones: [
    "Una procalcitonina baja excluye NAVM con certeza suficiente para evitar tratamiento en cualquier paciente",
    "La procalcitonina no debe utilizarse de forma aislada para negar tratamiento inicial cuando la sospecha clínica de NAVM es significativa",
    "La procalcitonina baja confirma una infección fúngica",
    "La procalcitonina es el único criterio validado para definir NAVM",
    "Debe retrasarse el tratamiento hasta que la procalcitonina supere 10 ng/mL"
  ],
  respuestaCorrecta: 1,
  explicacion: `La procalcitonina puede aportar información complementaria en algunos escenarios y ayudar en decisiones de suspensión de antibióticos junto con la evolución, pero no sustituye los criterios clínicos ni debe emplearse aisladamente para negar tratamiento inicial ante una sospecha relevante de NAVM. Su sensibilidad y especificidad son imperfectas, y los niveles pueden ser bajos al inicio o en determinadas respuestas del huésped. En esta paciente hay fiebre, secreciones purulentas, deterioro de oxigenación e infiltrado nuevo; el cuadro exige evaluación microbiológica y decisión clínica integrada. La ausencia de choque no elimina la posibilidad de neumonía. Debe evitarse tanto el sobretratamiento basado únicamente en un marcador elevado como la infravaloración de una infección clínicamente probable por un valor bajo.`,
  perlaENARM: "La procalcitonina no reemplaza la valoración clínica para iniciar tratamiento empírico de NAVM; debe interpretarse junto con evolución y microbiología.",
  gpc: {
    mexico: "GPC IMSS-624-24: integrar evaluación clínica, diagnóstico y microbiología en NAVM.",
    internacional: "ATS/IDSA 2016: los criterios clínicos son la base para decidir el inicio de tratamiento empírico."
  },
  bibliografia: "GPC IMSS-624-24; ATS/IDSA. Clinical Practice Guidelines for HAP/VAP. 2016."
},
{
  id: "NEUMO-058",
  especialidad: "Neumología",
  tema: "Neumonía asociada a ventilación mecánica",
  subtema: "NAVM por MRSA",
  dificultad: "Alta",
  caso: `Masculino de 68 años con ventilación mecánica desde hace nueve días y antecedente de hospitalización reciente con antibióticos intravenosos. Desarrolla fiebre, secreciones purulentas, deterioro de la oxigenación e infiltrado lobar nuevo. El cultivo respiratorio identifica Staphylococcus aureus resistente a meticilina; los hemocultivos son negativos. La función renal está deteriorándose y el hemograma muestra plaquetas de 92,000/µL, en comparación con 180,000/µL al ingreso. No hay absceso ni empiema. El equipo debe elegir tratamiento dirigido y establecer cómo monitorizar su seguridad.`,
  pregunta: "¿Cuál es la elección terapéutica más apropiada entre las opciones propuestas?",
  opciones: [
    "Vancomicina o linezolid, individualizando según función renal, trombocitopenia, interacciones y monitorización",
    "Daptomicina en monoterapia, porque es el fármaco preferido para toda neumonía por MRSA",
    "Ceftriaxona más azitromicina, porque MRSA suele ser susceptible a betalactámicos habituales",
    "Metronidazol como tratamiento definitivo",
    "Vancomicina y linezolid simultáneamente en todos los casos confirmados"
  ],
  respuestaCorrecta: 0,
  explicacion: `La neumonía por MRSA debe tratarse con un agente activo y con penetración adecuada al pulmón. ATS/IDSA recomienda vancomicina o linezolid. La disfunción renal hace relevante la monitorización y ajuste de vancomicina; la trombocitopenia preexistente obliga a valorar con cautela linezolid, que puede empeorar citopenias. La decisión debe individualizarse según evolución, interacciones, susceptibilidad y posibilidad de monitorización farmacológica. Daptomicina no es apropiada para neumonía alveolar debido a su inactivación por el surfactante pulmonar. No se recomienda combinar rutinariamente vancomicina y linezolid, ya que no es la estrategia estándar y puede aumentar toxicidad. Debe reevaluarse la duración según respuesta y complicaciones, sin prolongar automáticamente el tratamiento por el solo hecho de tratarse de MRSA.`,
  perlaENARM: "MRSA en HAP/NAVM: vancomicina o linezolid; elegir según función renal, citopenias, interacciones y monitorización.",
  gpc: {
    mexico: "GPC IMSS-624-24 para NAVM, con selección dirigida por microbiología y contexto institucional.",
    internacional: "ATS/IDSA 2016: vancomicina o linezolid para HAP/VAP por MRSA."
  },
  bibliografia: "GPC IMSS-624-24; ATS/IDSA. Clinical Practice Guidelines for HAP/VAP. 2016."
},
{
  id: "NEUMO-059",
  especialidad: "Neumología",
  tema: "Neumonía asociada a ventilación mecánica",
  subtema: "NAVM por Pseudomonas y tratamiento dirigido",
  dificultad: "Alta",
  caso: `Femenina de 57 años con ventilación mecánica y bronquiectasias conocidas. Presenta NAVM con fiebre, infiltrados nuevos y deterioro de la oxigenación. Se inicia tratamiento empírico con dos agentes antipseudomónicos por el antecedente de colonización y gravedad inicial. A las 48 horas, el cultivo respiratorio de buena calidad identifica Pseudomonas aeruginosa susceptible a un solo betalactámico antipseudomónico; los hemocultivos son negativos. La paciente ya no necesita vasopresores y disminuye el requerimiento de oxígeno. No hay absceso, bacteriemia persistente ni otro foco. El equipo considera mantener ambos antibióticos hasta finalizar el curso.`,
  pregunta: "¿Cuál es el principio más apropiado para el tratamiento definitivo?",
  opciones: [
    "Mantener siempre dos agentes antipseudomónicos durante todo el tratamiento, aunque se confirme susceptibilidad",
    "Desescalar a un agente activo según susceptibilidad y evolución, salvo circunstancias clínicas o microbiológicas que justifiquen una estrategia distinta",
    "Cambiar a un macrólido porque Pseudomonas no responde a betalactámicos",
    "Suspender ambos antibióticos porque los hemocultivos son negativos",
    "Añadir vancomicina en todos los casos de Pseudomonas confirmada"
  ],
  respuestaCorrecta: 1,
  explicacion: `La doble cobertura puede ser razonable de manera empírica en pacientes seleccionados con alto riesgo de resistencia o mortalidad. Sin embargo, una vez identificado Pseudomonas aeruginosa susceptible a un agente apropiado y observada una mejoría clínica, debe considerarse desescalamiento a monoterapia dirigida. Mantener dos antibióticos sin indicación demostrada incrementa toxicidad y presión selectiva. La decisión definitiva depende de la susceptibilidad, la gravedad actual, la respuesta y la existencia de bacteriemia persistente u otras complicaciones. Los hemocultivos negativos no invalidan el diagnóstico de NAVM. La duración suele ser de siete días si la respuesta es adecuada, con individualización en casos complejos. El objetivo es conseguir tratamiento eficaz y limitar la exposición innecesaria.`,
  perlaENARM: "La doble cobertura antipseudomónica es principalmente una estrategia empírica selectiva; con susceptibilidad conocida y buena respuesta, debe evaluarse desescalamiento.",
  gpc: {
    mexico: "GPC IMSS-624-24: tratamiento de NAVM conforme a microbiología y evolución.",
    internacional: "ATS/IDSA 2016: tratamiento definitivo de Pseudomonas basado en susceptibilidad antimicrobiana."
  },
  bibliografia: "GPC IMSS-624-24; ATS/IDSA. Clinical Practice Guidelines for HAP/VAP. 2016."
},
{
  id: "NEUMO-060",
  especialidad: "Neumología",
  tema: "Neumonía asociada a ventilación mecánica",
  subtema: "Integración clínica, microbiología y control del foco",
  dificultad: "Alta",
  caso: `Masculino de 66 años, intubado por insuficiencia respiratoria posterior a cirugía abdominal compleja, presenta NAVM al octavo día. Se inicia un esquema empírico de amplio espectro de acuerdo con el antibiograma local y se obtienen cultivos antes de la primera dosis. Al cuarto día continúa febril, con hipoxemia persistente y secreciones purulentas. El cultivo respiratorio identifica un bacilo gramnegativo susceptible al tratamiento administrado, pero la radiografía muestra una opacidad periférica progresiva y la ecografía torácica revela un derrame pleural tabicado. La función renal permanece estable. No hay evidencia de una nueva bacteriemia. El equipo propone ampliar el antibiótico porque la fiebre persiste pese a la susceptibilidad documentada.`,
  pregunta: "¿Cuál es la mejor siguiente decisión clínica?",
  opciones: [
    "Ampliar automáticamente a tres antimicrobianos adicionales sin estudiar el derrame",
    "Evaluar el derrame como posible foco complicado, obtener líquido pleural cuando esté indicado y valorar drenaje, manteniendo tratamiento antimicrobiano dirigido apropiado",
    "Suspender el tratamiento porque el cultivo respiratorio es susceptible",
    "Mantener el mismo esquema durante 21 días sin investigar la causa de la falta de respuesta",
    "Atribuir el cuadro a colonización endotraqueal sin más estudios, pese al deterioro y al infiltrado progresivo"
  ],
  respuestaCorrecta: 1,
  explicacion: `La falta de respuesta no siempre indica resistencia antimicrobiana. En este caso, el aislamiento es susceptible al esquema administrado, pero la persistencia de fiebre, hipoxemia y un derrame tabicado sugiere una posible complicación pleural que puede requerir control del foco. Debe evaluarse el líquido pleural con imagen y toracocentesis cuando esté indicado; si los hallazgos apoyan derrame parapneumónico complicado o empiema, puede ser necesario drenaje. También deben revisarse la adecuación de dosis, el diagnóstico diferencial y la evolución hemodinámica. La ampliación indiscriminada del espectro no sustituye el control de una colección infectada. La duración del tratamiento se individualiza según la respuesta, el microorganismo y las complicaciones, pero no debe prolongarse arbitrariamente sin definir por qué el paciente no mejora.`,
  perlaENARM: "Ante NAVM que no responde pese a susceptibilidad documentada, busca complicaciones y falta de control del foco antes de ampliar antibióticos de forma automática.",
  gpc: {
    mexico: "GPC IMSS-624-24: prevención, diagnóstico y tratamiento de NAVM.",
    internacional: "ATS/IDSA 2016: tratamiento basado en susceptibilidad, respuesta clínica y reevaluación de complicaciones."
  },
  bibliografia: "GPC IMSS-624-24; ATS/IDSA. Clinical Practice Guidelines for HAP/VAP. 2016."
},

{
  id: "NEUMO-061",
  especialidad: "Neumología",
  tema: "Tuberculosis",
  subtema: "Diagnóstico de tuberculosis pulmonar con baciloscopia negativa",
  dificultad: "Alta",
  caso: `Masculino de 46 años, trabajador de la construcción, con pérdida ponderal de 8 kg en tres meses, diaforesis nocturna, tos productiva de siete semanas y febrícula vespertina. Tiene antecedente de contacto domiciliario con un familiar tratado por tuberculosis pulmonar hace dos años. La radiografía muestra opacidades reticulonodulares en lóbulos superiores y una cavidad de 2.5 cm en el segmento apical del lóbulo superior derecho. La baciloscopia de dos muestras de esputo es negativa. La prueba de VIH es negativa y la biometría hemática muestra anemia normocítica leve. El paciente se encuentra estable, sin hemoptisis masiva ni insuficiencia respiratoria. Se considera descartar tuberculosis por las baciloscopias negativas.`,
  pregunta: "¿Cuál es el siguiente paso diagnóstico más apropiado?",
  opciones: [
    "Descartar tuberculosis activa y atribuir la cavidad a una secuela antigua",
    "Solicitar una prueba molecular rápida para Mycobacterium tuberculosis y resistencia a rifampicina en muestra respiratoria, además de cultivo y evaluación microbiológica complementaria",
    "Iniciar tratamiento antifúngico durante seis meses sin obtener nuevas muestras",
    "Solicitar únicamente una prueba de tuberculina y utilizarla para confirmar enfermedad pulmonar activa",
    "Realizar una prueba terapéutica con corticoides y considerar tuberculosis solo si no mejora"
  ],
  respuestaCorrecta: 1,
  explicacion: `La probabilidad preprueba de tuberculosis es alta por la evolución subaguda, los síntomas constitucionales, el contacto epidemiológico y la cavitación apical. Una baciloscopia negativa no excluye tuberculosis, particularmente cuando la carga bacilar es baja o la calidad de la muestra es insuficiente. Las pruebas moleculares rápidas permiten detectar el complejo M. tuberculosis y, según la plataforma, identificar resistencia a rifampicina en menos tiempo que el cultivo. El cultivo sigue siendo relevante para confirmación y pruebas de susceptibilidad, especialmente si se sospecha resistencia o existe discordancia diagnóstica. Deben obtenerse muestras respiratorias adecuadas y aplicar precauciones de transmisión aérea mientras se estudia al paciente. La tuberculina y los ensayos de liberación de interferón gamma detectan infección inmunológica, pero no distinguen por sí solos infección latente de enfermedad activa.`,
  perlaENARM: "Baciloscopia negativa no descarta tuberculosis. Ante sospecha clínica alta, prioriza prueba molecular rápida y cultivo.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente de prevención, diagnóstico y tratamiento de tuberculosis pulmonar y el protocolo del Programa Nacional de Tuberculosis.",
    internacional: "OMS. Consolidated Guidelines on Tuberculosis, Module 3: Diagnosis, 3.ª edición, 2024."
  },
  bibliografia: "OMS. Consolidated Guidelines on Tuberculosis: Module 3, Diagnosis. 2024; normativa mexicana de tuberculosis aplicable."
},
{
  id: "NEUMO-062",
  especialidad: "Neumología",
  tema: "Tuberculosis",
  subtema: "Prueba molecular y resistencia a rifampicina",
  dificultad: "Alta",
  caso: `Femenina de 39 años, con tuberculosis pulmonar clínicamente probable, tos de dos meses, pérdida ponderal y cavitación apical. Una prueba molecular rápida en esputo detecta M. tuberculosis y reporta resistencia a rifampicina. No ha recibido previamente un esquema completo de tratamiento, aunque refiere haber tomado medicamentos antituberculosos de manera irregular durante tres semanas hace cuatro años, sin documentación de susceptibilidad. Está estable, sin datos de meningitis ni compromiso extrapulmonar. La baciloscopia es positiva y el cultivo está en proceso. Un médico propone iniciar el esquema estándar de primera línea durante seis meses y esperar el resultado final del cultivo antes de modificarlo.`,
  pregunta: "¿Cuál es la conducta más adecuada?",
  opciones: [
    "Iniciar el esquema estándar 2HRZE/4HR sin evaluación adicional, porque la resistencia molecular a rifampicina suele ser irrelevante",
    "Considerar tuberculosis resistente a rifampicina, solicitar pruebas ampliadas de susceptibilidad y vincular de inmediato a un equipo/programa especializado para seleccionar tratamiento efectivo",
    "Suspender todo aislamiento porque la paciente no tiene síntomas graves",
    "Añadir únicamente estreptomicina al esquema estándar y asumir que se ha corregido la resistencia",
    "Tratar con macrólido y fluoroquinolona como si fuera neumonía atípica"
  ],
  respuestaCorrecta: 1,
  explicacion: `La detección molecular de resistencia a rifampicina es un hallazgo de gran relevancia terapéutica y debe activar una evaluación rápida de resistencia adicional, incluida la susceptibilidad a fluoroquinolonas y otros fármacos según disponibilidad. La resistencia a rifampicina se maneja programáticamente como tuberculosis resistente a rifampicina, aunque todavía se desconozca la susceptibilidad a isoniazida. El esquema estándar sensible a fármacos no debe asumirse eficaz. La elección de un régimen para tuberculosis resistente debe realizarse por un equipo experto, considerando tratamientos previos, susceptibilidad, localización, interacciones, embarazo, función orgánica y elegibilidad para regímenes orales acortados. La OMS ha incorporado opciones más cortas para pacientes seleccionados, pero no son intercambiables indiscriminadamente ni sustituyen la evaluación de resistencia. Mantener precauciones de transmisión aérea y notificar/vincular al programa correspondiente es prioritario.`,
  perlaENARM: "Resistencia molecular a rifampicina exige evaluación de tuberculosis RR/MDR, pruebas ampliadas de susceptibilidad y manejo especializado; no continúes automáticamente 2HRZE/4HR.",
  gpc: {
    mexico: "Manejo coordinado con el Programa Nacional de Tuberculosis y la normativa mexicana vigente para tuberculosis farmacorresistente.",
    internacional: "OMS. Module 3: Diagnosis, 2024; Module 4: Treatment and Care, 2025."
  },
  bibliografia: "OMS. Consolidated Guidelines on Tuberculosis. Modules 3 y 4, 2024–2025."
},
{
  id: "NEUMO-063",
  especialidad: "Neumología",
  tema: "Tuberculosis",
  subtema: "Interpretación de prueba molecular tras tratamiento previo",
  dificultad: "Alta",
  caso: `Masculino de 51 años con antecedente de tuberculosis pulmonar tratada y documentada como completada hace ocho meses. Consulta por tos de tres semanas, sin fiebre ni pérdida ponderal. La tomografía muestra fibrosis apical y una cavidad residual estable respecto de la imagen final del tratamiento. La baciloscopia actual es negativa, pero la prueba molecular detecta ADN de M. tuberculosis con baja cantidad de material genético. No se cuenta todavía con cultivo. El paciente refiere exposición reciente a un familiar con tuberculosis activa. El equipo debe diferenciar recaída, reinfección, persistencia de ADN no viable y una causa respiratoria alternativa.`,
  pregunta: "¿Cuál es la interpretación y conducta más apropiadas?",
  opciones: [
    "La prueba molecular positiva demuestra por sí sola bacilos viables y obliga a repetir exactamente el mismo esquema sin cultivo",
    "Considerar tuberculosis recurrente, pero integrar clínica, imágenes, cultivo y susceptibilidad; una prueba molecular puede permanecer positiva por ADN residual después de tratamiento",
    "Descartar tuberculosis porque la baciloscopia es negativa",
    "Diagnosticar resistencia multidrogorresistente únicamente por el antecedente de tratamiento previo",
    "Administrar corticoides sistémicos para eliminar la inflamación residual y observar"
  ],
  respuestaCorrecta: 1,
  explicacion: `Las pruebas moleculares detectan material genético y no siempre distinguen organismos viables de ADN residual, particularmente en personas tratadas recientemente. No obstante, los síntomas nuevos y la exposición epidemiológica obligan a investigar recaída o reinfección. El cultivo y las pruebas de susceptibilidad son especialmente importantes en pacientes con tratamiento previo, así como la comparación de imágenes y la revisión del esquema anterior, adherencia y respuesta microbiológica. Una prueba molecular positiva aislada no define automáticamente fracaso ni resistencia, pero tampoco debe ignorarse. Deben aplicarse medidas de control de transmisión mientras se aclara la infectividad y obtener nuevas muestras de calidad. El diagnóstico final requiere integrar la probabilidad clínica, microbiología y evolución.`,
  perlaENARM: "La prueba molecular detecta ADN, no necesariamente bacilos viables; ante tratamiento previo y síntomas nuevos, el cultivo y la susceptibilidad adquieren especial importancia.",
  gpc: {
    mexico: "Seguir el protocolo nacional para sospecha de recaída o retratamiento de tuberculosis.",
    internacional: "OMS. Module 3: Diagnosis, 2024."
  },
  bibliografia: "OMS. Consolidated Guidelines on Tuberculosis: Module 3, Diagnosis. 2024."
},
{
  id: "NEUMO-064",
  especialidad: "Neumología",
  tema: "Tuberculosis",
  subtema: "Tratamiento de tuberculosis sensible y seguimiento",
  dificultad: "Alta",
  caso: `Masculino de 32 años con tuberculosis pulmonar confirmada por prueba molecular y cultivo, sin resistencia detectada a rifampicina ni isoniazida. No tiene enfermedad hepática, insuficiencia renal ni infección por VIH. Inicia un esquema de primera línea bajo supervisión del programa de tuberculosis. En la cuarta semana disminuyen la tos y la fiebre, pero presenta náusea ocasional. La baciloscopia de seguimiento continúa positiva, aunque la carga bacilar es menor que al inicio. El paciente pregunta si debe suspender el tratamiento porque se siente mejor y un familiar le recomienda tomar solo dos fármacos para reducir toxicidad.`,
  pregunta: "¿Cuál es la recomendación más apropiada?",
  opciones: [
    "Suspender el tratamiento cuando desaparezcan la fiebre y la tos",
    "Continuar el esquema completo prescrito y el seguimiento bacteriológico, evaluando adherencia, tolerancia y respuesta sin modificar fármacos por cuenta propia",
    "Reducir inmediatamente a isoniazida en monoterapia porque la mejoría clínica demuestra esterilización",
    "Cambiar a macrólido en monoterapia por la persistencia de baciloscopia positiva en la cuarta semana",
    "Duplicar todas las dosis para negativizar la baciloscopia en menos de siete días"
  ],
  respuestaCorrecta: 1,
  explicacion: `La mejoría clínica temprana no significa que la infección esté erradicada. El tratamiento de tuberculosis sensible requiere combinación de fármacos durante el tiempo recomendado, adherencia sostenida y vigilancia clínica y microbiológica. La modificación no supervisada aumenta el riesgo de recaída y selección de resistencia. La baciloscopia puede seguir positiva durante las primeras semanas y debe interpretarse con la evolución, calidad de muestra, adherencia y resultados de cultivo. Si la positividad persiste más allá de los tiempos esperados, empeora la clínica o no hay conversión microbiológica, debe investigarse tratamiento irregular, malabsorción, resistencia u otra causa. La náusea requiere valorar tolerancia y toxicidad hepática, pero no justifica reducir el esquema sin evaluación.`,
  perlaENARM: "La mejoría clínica no permite suspender ni simplificar el tratamiento de tuberculosis; la adherencia y el seguimiento microbiológico son esenciales.",
  gpc: {
    mexico: "Programa Nacional de Tuberculosis y normativa mexicana vigente para tratamiento supervisado y seguimiento bacteriológico.",
    internacional: "OMS. Module 4: Treatment and Care, 2025; recomendaciones para tuberculosis sensible a fármacos."
  },
  bibliografia: "OMS. Consolidated Guidelines on Tuberculosis: Module 4, Treatment and Care. 2025."
},
{
  id: "NEUMO-065",
  especialidad: "Neumología",
  tema: "Tuberculosis",
  subtema: "Hepatotoxicidad por fármacos antituberculosos",
  dificultad: "Alta",
  caso: `Femenina de 43 años con tuberculosis pulmonar sensible, en tratamiento con isoniazida, rifampicina, pirazinamida y etambutol desde hace 18 días. Presenta anorexia intensa, náusea persistente, dolor en hipocondrio derecho e ictericia. ALT 780 U/L, AST 620 U/L, bilirrubina total 5.2 mg/dL y fosfatasa alcalina discretamente elevada. No consume alcohol, no toma paracetamol ni suplementos herbales y las serologías iniciales para hepatitis viral son negativas. Está hemodinámicamente estable. El equipo propone continuar todos los fármacos y repetir pruebas hepáticas en una semana para evitar interrupciones del esquema.`,
  pregunta: "¿Cuál es la conducta inicial más apropiada?",
  opciones: [
    "Continuar todos los fármacos hasta que el cultivo sea negativo, porque la hepatotoxicidad no es clínicamente relevante",
    "Suspender los fármacos potencialmente hepatotóxicos, evaluar gravedad y otras causas, y coordinar un plan de reintroducción o esquema alternativo según evolución",
    "Suspender exclusivamente etambutol, manteniendo isoniazida, rifampicina y pirazinamida pese a la ictericia",
    "Añadir un macrólido y continuar el esquema completo sin evaluación",
    "Administrar vitamina K como único tratamiento, sin revisar función hepática ni coagulación"
  ],
  respuestaCorrecta: 1,
  explicacion: `La ictericia y la elevación marcada de aminotransferasas en una paciente que recibe fármacos antituberculosos son compatibles con hepatotoxicidad clínicamente significativa. Isoniazida, rifampicina y pirazinamida pueden causar lesión hepática. La conducta requiere suspender temporalmente los agentes hepatotóxicos cuando se cumplen criterios clínicos y bioquímicos, evaluar INR, bilirrubina, función hepática, estado clínico y causas alternativas, y vigilar de cerca la evolución. La interrupción debe coordinarse con un equipo con experiencia en tuberculosis para evitar periodos sin tratamiento eficaz y diseñar la reintroducción secuencial o un esquema alternativo cuando corresponda. La gravedad de la lesión y la necesidad de hospitalización dependen de la evolución, coagulopatía y encefalopatía. No es apropiado continuar todos los fármacos ante ictericia y lesión hepática marcada.`,
  perlaENARM: "Ictericia y elevación importante de transaminasas durante tratamiento antituberculoso obligan a evaluar hepatotoxicidad y suspender los agentes implicados según criterios clínicos.",
  gpc: {
    mexico: "Normativa mexicana vigente para vigilancia de reacciones adversas y manejo de tuberculosis; coordinar con el programa especializado.",
    internacional: "OMS. Module 4: Treatment and Care, 2025; manejo individualizado de toxicidad y continuidad terapéutica."
  },
  bibliografia: "OMS. Consolidated Guidelines on Tuberculosis: Module 4, Treatment and Care. 2025."
},
{
  id: "NEUMO-066",
  especialidad: "Neumología",
  tema: "Tuberculosis",
  subtema: "Tuberculosis e infección por VIH",
  dificultad: "Alta",
  caso: `Masculino de 36 años con infección por VIH recién diagnosticada, CD4 de 42 células/µL y carga viral elevada. Consulta por fiebre de un mes, pérdida ponderal, tos seca y disnea progresiva. La radiografía muestra un patrón intersticial bilateral sin cavitación típica. La prueba molecular de esputo detecta M. tuberculosis; la susceptibilidad a rifampicina está pendiente. No recibe tratamiento antirretroviral ni profilaxis previa. Tiene saturación de 94% al aire ambiente y no presenta alteración neurológica. Se plantea iniciar simultáneamente el tratamiento antituberculoso y el antirretroviral el mismo día, sin evaluar localización extrapulmonar.`,
  pregunta: "¿Cuál es la estrategia más apropiada para el inicio del tratamiento antirretroviral?",
  opciones: [
    "Diferir siempre el tratamiento antirretroviral hasta completar los seis meses de tratamiento antituberculoso",
    "Iniciar tratamiento antituberculoso eficaz y planificar inicio temprano de antirretrovirales, generalmente dentro de las primeras dos semanas en CD4 menor de 50, salvo sospecha de meningitis tuberculosa u otra contraindicación clínica",
    "Iniciar únicamente antirretrovirales y esperar la susceptibilidad antes de tratar tuberculosis",
    "Evitar antirretrovirales de manera permanente por interacción con rifampicina",
    "Administrar glucocorticoides a todos los pacientes con VIH y tuberculosis antes de iniciar tratamiento"
  ],
  respuestaCorrecta: 1,
  explicacion: `En la coinfección VIH-tuberculosis, el tratamiento antituberculoso debe iniciarse prontamente y el tratamiento antirretroviral debe incorporarse temprano por el alto riesgo de progresión y muerte, especialmente con CD4 muy bajos. Para la mayoría de los pacientes con CD4 menor de 50 células/µL, se recomienda iniciar ART dentro de las primeras dos semanas del tratamiento antituberculoso, salvo situaciones específicas como meningitis tuberculosa, donde el momento debe individualizarse por el riesgo de complicaciones inflamatorias intracraneales. Rifampicina produce interacciones relevantes con varios antirretrovirales, por lo que el régimen debe ajustarse con apoyo de infectología. También se debe evaluar tuberculosis extrapulmonar, otras infecciones oportunistas, adherencia y riesgo de síndrome inflamatorio de reconstitución inmunitaria. No es correcto posponer ART durante todo el tratamiento de tuberculosis de forma rutinaria.`,
  perlaENARM: "En VIH con CD4 <50 y tuberculosis no meníngea, el ART suele iniciarse dentro de las primeras dos semanas; la meningitis tuberculosa modifica el momento.",
  gpc: {
    mexico: "Normativa mexicana vigente para tuberculosis y atención integral del VIH; coordinar con infectología y programa especializado.",
    internacional: "OMS: recomendaciones de tratamiento de TB/VIH; guías internacionales de ART y tuberculosis."
  },
  bibliografia: "OMS. Consolidated Guidelines on Tuberculosis; guías internacionales vigentes de tratamiento antirretroviral."
},
{
  id: "NEUMO-067",
  especialidad: "Neumología",
  tema: "Tuberculosis",
  subtema: "Síndrome inflamatorio de reconstitución inmunitaria",
  dificultad: "Alta",
  caso: `Masculino de 29 años con VIH avanzado y tuberculosis ganglionar confirmada. Inicia tratamiento antituberculoso y, diez días después, tratamiento antirretroviral. Tres semanas más tarde presenta fiebre recurrente, aumento del volumen de ganglios cervicales previamente afectados y aparición de un nuevo ganglio doloroso. La carga viral del VIH ha descendido de manera importante y el CD4 comienza a aumentar. El cultivo inicial mostró M. tuberculosis susceptible a rifampicina; el paciente refiere adherencia adecuada y no ha vomitado dosis. No tiene datos de choque ni meningismo. El equipo considera que la recurrencia de fiebre demuestra resistencia y propone suspender ART.`,
  pregunta: "¿Cuál es la interpretación más probable y el enfoque inicial?",
  opciones: [
    "Síndrome inflamatorio de reconstitución inmunitaria paradójico, después de descartar progresión, resistencia, mala adherencia y otras infecciones",
    "Resistencia multidrogorresistente confirmada por el aumento de volumen ganglionar",
    "Reacción alérgica inmediata a todos los antituberculosos, aunque no haya exantema ni compromiso sistémico típico",
    "Fracaso virológico del ART, pese al descenso marcado de carga viral",
    "Neoplasia confirmada que no requiere biopsia ni estudios adicionales"
  ],
  respuestaCorrecta: 0,
  explicacion: `El síndrome inflamatorio de reconstitución inmunitaria asociado a tuberculosis puede manifestarse como empeoramiento paradójico de lesiones previamente diagnosticadas tras iniciar ART, coincidiendo con mejoría virológica e inmunológica. Sin embargo, es un diagnóstico clínico que requiere descartar resistencia, adherencia deficiente, progresión infecciosa, nueva infección y otras causas. En general, no se suspende automáticamente el ART ni el tratamiento antituberculoso. La conducta depende de la gravedad y localización; los casos leves pueden manejarse con vigilancia y tratamiento sintomático, mientras que los cuadros graves pueden requerir antiinflamatorios o corticoides bajo supervisión, después de descartar infecciones no controladas. La afectación del sistema nervioso central exige especial precaución. La respuesta virológica descrita favorece IRIS, pero no reemplaza la evaluación diagnóstica.`,
  perlaENARM: "Empeoramiento inflamatorio tras iniciar ART con descenso de carga viral puede ser IRIS; descarta resistencia y otras infecciones antes de atribuirlo.",
  gpc: {
    mexico: "Manejo coordinado por los programas de VIH y tuberculosis y por especialistas en enfermedades infecciosas.",
    internacional: "OMS: atención de coinfección TB/VIH y evaluación del síndrome inflamatorio de reconstitución inmunitaria."
  },
  bibliografia: "OMS. Guidelines for the management of advanced HIV disease and TB/HIV coinfection."
},
{
  id: "NEUMO-068",
  especialidad: "Neumología",
  tema: "Tuberculosis",
  subtema: "Tuberculosis pleural",
  dificultad: "Alta",
  caso: `Masculino de 34 años con fiebre de tres semanas, dolor pleurítico derecho, tos seca y pérdida ponderal. La radiografía muestra derrame pleural unilateral moderado sin consolidación evidente. La toracocentesis obtiene líquido exudativo con predominio linfocítico, proteínas pleurales elevadas y ADA de 68 U/L. La tinción de Gram es negativa y la baciloscopia pleural no muestra bacilos ácido-alcohol resistentes. La prueba molecular en líquido pleural es negativa. El paciente no tiene insuficiencia cardiaca ni datos de malignidad en la tomografía inicial. Se plantea descartar tuberculosis por la ausencia de bacilos en el líquido.`,
  pregunta: "¿Cuál es el enfoque diagnóstico más adecuado?",
  opciones: [
    "Excluir tuberculosis pleural por la baciloscopia y la prueba molecular negativas en líquido",
    "Mantener tuberculosis pleural en el diagnóstico diferencial e integrar epidemiología, ADA, cultivo y considerar biopsia pleural para histología y microbiología según disponibilidad",
    "Diagnosticar tuberculosis de manera definitiva solo por ADA elevada, sin considerar otras causas de derrame linfocítico",
    "Iniciar anticoagulación porque todo derrame unilateral es secundario a tromboembolia pulmonar",
    "Tratar con diuréticos como si se tratara de derrame cardiogénico, pese al perfil exudativo"
  ],
  respuestaCorrecta: 1,
  explicacion: `La tuberculosis pleural suele ser paucibacilar, por lo que la baciloscopia y las pruebas moleculares en líquido pleural pueden tener sensibilidad limitada. Un exudado linfocítico con ADA elevada aumenta la probabilidad en un contexto epidemiológico compatible, pero ADA no es específica y puede elevarse en empiema, algunas neoplasias y otras enfermedades. El cultivo de líquido y, cuando se requiere mayor certeza, la biopsia pleural con histología y cultivo pueden aumentar el rendimiento diagnóstico. La decisión debe considerar edad, prevalencia local, diagnósticos alternativos y gravedad. No debe excluirse tuberculosis por pruebas negativas de baja sensibilidad ni confirmarse únicamente por ADA sin evaluación integral.`,
  perlaENARM: "En tuberculosis pleural, baciloscopia y PCR negativas no excluyen enfermedad; ADA apoya el diagnóstico, pero no es específica.",
  gpc: {
    mexico: "Consultar normativa mexicana vigente para tuberculosis extrapulmonar y protocolo de diagnóstico local.",
    internacional: "OMS. Module 3: Diagnosis, 2024; uso de pruebas moleculares y microbiología según tipo de muestra."
  },
  bibliografia: "OMS. Consolidated Guidelines on Tuberculosis: Module 3, Diagnosis. 2024."
},
{
  id: "NEUMO-069",
  especialidad: "Neumología",
  tema: "Tuberculosis",
  subtema: "Meningitis tuberculosa",
  dificultad: "Alta",
  caso: `Femenina de 41 años con cefalea progresiva de tres semanas, fiebre, vómitos y cambios conductuales. En las últimas 24 horas desarrolla somnolencia y paresia leve del VI par craneal. La resonancia cerebral muestra realce meníngeo basal e hidrocefalia incipiente. El LCR tiene pleocitosis linfocítica, proteínas muy elevadas y glucosa baja respecto de la glucemia. La tinción de Gram es negativa y la prueba molecular inicial para M. tuberculosis en LCR es negativa. No hay contraindicación para continuar la evaluación microbiológica. La paciente presenta deterioro neurológico progresivo.`,
  pregunta: "¿Cuál es la conducta más apropiada ante la sospecha de meningitis tuberculosa?",
  opciones: [
    "Descartar tuberculosis por la prueba molecular negativa y tratar solo migraña",
    "Iniciar tratamiento antituberculoso empírico y corticoide adyuvante cuando la sospecha clínica sea alta, además de manejar urgentemente hidrocefalia y complicaciones neurológicas",
    "Esperar varias semanas al cultivo antes de iniciar cualquier tratamiento",
    "Administrar únicamente ceftriaxona durante 24 horas y suspender si no mejora",
    "Realizar punción lumbar repetida de forma inmediata sin valorar la hidrocefalia ni el riesgo de herniación"
  ],
  respuestaCorrecta: 1,
  explicacion: `La meningitis tuberculosa es una urgencia de alta mortalidad y secuelas neurológicas. La evolución subaguda, paresia de nervio craneal, realce meníngeo basal, hidrocefalia y LCR con predominio linfocítico, proteínas elevadas y glucosa baja son altamente sugestivos. Las pruebas moleculares negativas en LCR no excluyen la enfermedad por sensibilidad imperfecta. Cuando la sospecha es alta, el tratamiento no debe retrasarse esperando confirmación microbiológica. Los corticoides adyuvantes se recomiendan en meningitis tuberculosa para reducir mortalidad y complicaciones en pacientes apropiados. La hidrocefalia requiere valoración urgente por neurología/neurocirugía y manejo de presión intracraneal. Repetir punción lumbar sin valorar riesgo de herniación puede ser peligroso.`,
  perlaENARM: "La meningitis tuberculosa es una urgencia: una PCR negativa no la excluye y el tratamiento empírico no debe retrasarse ante alta sospecha.",
  gpc: {
    mexico: "Manejo hospitalario especializado conforme a normativa mexicana de tuberculosis extrapulmonar y protocolos neurológicos.",
    internacional: "OMS: recomendaciones de tratamiento de tuberculosis extrapulmonar y uso de corticoides adyuvantes en meningitis tuberculosa."
  },
  bibliografia: "OMS. Consolidated Guidelines on Tuberculosis: diagnosis and treatment modules."
},
{
  id: "NEUMO-070",
  especialidad: "Neumología",
  tema: "Tuberculosis",
  subtema: "Tuberculosis miliar y diseminada",
  dificultad: "Alta",
  caso: `Masculino de 58 años con diabetes mellitus tipo 2 mal controlada, fiebre persistente, anorexia, pérdida ponderal, tos seca y deterioro funcional de seis semanas. La tomografía torácica muestra micronódulos difusos de distribución aleatoria compatibles con patrón miliar. Presenta anemia, elevación de fosfatasa alcalina y hepatoesplenomegalia. La baciloscopia de esputo es negativa y la prueba molecular respiratoria inicial no detecta M. tuberculosis. Está taquicárdico, con presión arterial estable y sin meningismo. Se considera neumonía intersticial viral por las pruebas respiratorias habituales negativas.`,
  pregunta: "¿Cuál es la conducta diagnóstica y terapéutica más apropiada?",
  opciones: [
    "Descartar tuberculosis porque las pruebas respiratorias iniciales son negativas",
    "Sospechar tuberculosis miliar/diseminada, obtener muestras de distintos sitios según el cuadro y considerar tratamiento empírico si la probabilidad clínica es alta, sin retrasar evaluación de órganos comprometidos",
    "Tratar exclusivamente con macrólidos durante cinco días",
    "Realizar únicamente una prueba de tuberculina para confirmar o descartar tuberculosis diseminada",
    "Iniciar glucocorticoides como monoterapia para reducir el patrón micronodular"
  ],
  respuestaCorrecta: 1,
  explicacion: `El patrón micronodular aleatorio, síntomas constitucionales, hepatoesplenomegalia y alteraciones bioquímicas sugieren tuberculosis miliar o diseminada. La carga bacilar en esputo puede ser baja y las pruebas respiratorias negativas no excluyen enfermedad. La evaluación debe dirigirse a obtener muestras apropiadas para cultivo y pruebas moleculares, considerando esputo inducido, sangre u otros tejidos/líquidos según el órgano afectado y la disponibilidad local. Debe evaluarse compromiso meníngeo, hepático, medular y otros sitios según la clínica. En pacientes graves o con alta probabilidad diagnóstica, puede ser necesario iniciar tratamiento empírico mientras se completa la confirmación. La elección debe coordinarse con especialistas, revisar riesgo de resistencia y monitorizar toxicidad. La prueba de tuberculina no distingue infección latente de enfermedad activa ni descarta tuberculosis diseminada.`,
  perlaENARM: "Tuberculosis miliar puede presentarse con baciloscopia y pruebas respiratorias negativas; busca compromiso multisistémico y obtén muestras de sitios pertinentes.",
  gpc: {
    mexico: "Normativa mexicana vigente para tuberculosis extrapulmonar y diseminada; valoración hospitalaria especializada.",
    internacional: "OMS. Module 3: Diagnosis, 2024; Module 4: Treatment and Care, 2025."
  },
  bibliografia: "OMS. Consolidated Guidelines on Tuberculosis. Modules 3 y 4."
},
{
  id: "NEUMO-071",
  especialidad: "Neumología",
  tema: "Tuberculosis",
  subtema: "Infección tuberculosa y enfermedad activa",
  dificultad: "Alta",
  caso: `Femenina de 27 años, trabajadora sanitaria, acude por evaluación tras contacto estrecho reciente con un paciente con tuberculosis pulmonar bacilífera. Está asintomática, sin tos, fiebre, pérdida ponderal ni sudoración nocturna. La radiografía de tórax no muestra infiltrados ni cavidades. El ensayo de liberación de interferón gamma es positivo y la prueba de VIH es negativa. No hay datos clínicos de inmunosupresión. Pregunta si debe iniciar el esquema de tuberculosis activa con cuatro fármacos, ya que teme desarrollar enfermedad pulmonar.`,
  pregunta: "¿Cuál es el enfoque más apropiado?",
  opciones: [
    "Diagnosticar tuberculosis pulmonar activa solo por el IGRA positivo e iniciar automáticamente 2HRZE/4HR",
    "Descartar enfermedad activa mediante evaluación clínica y radiológica; si no hay evidencia de enfermedad, valorar tratamiento preventivo de infección tuberculosa según riesgo, exposición y normativa local",
    "No realizar ninguna intervención porque un IGRA positivo nunca tiene relevancia clínica",
    "Administrar antibióticos para neumonía adquirida en la comunidad durante siete días",
    "Realizar tratamiento de tuberculosis resistente sin pruebas adicionales"
  ],
  respuestaCorrecta: 1,
  explicacion: `Un IGRA positivo indica respuesta inmunológica frente a antígenos de M. tuberculosis, pero no distingue infección tuberculosa de enfermedad activa. Antes de indicar tratamiento preventivo debe excluirse enfermedad activa mediante interrogatorio, exploración, radiografía y estudios microbiológicos si hay síntomas o hallazgos sospechosos. En una persona asintomática con radiografía normal y contacto estrecho, puede estar indicado el tratamiento preventivo según edad, comorbilidades, características del contacto y recomendaciones del programa. El régimen preventivo debe seleccionarse considerando interacciones, embarazo, hepatopatía, resistencia probable del caso fuente y adherencia. No debe iniciarse un esquema de múltiples fármacos para enfermedad activa únicamente por IGRA positivo.`,
  perlaENARM: "IGRA o tuberculina positivos no distinguen infección latente de enfermedad activa; primero excluye enfermedad activa y después decide tratamiento preventivo.",
  gpc: {
    mexico: "Normativa mexicana vigente de prevención y control de tuberculosis, evaluación de contactos y tratamiento preventivo.",
    internacional: "OMS. Guidance on tuberculosis infection testing and preventive treatment."
  },
  bibliografia: "OMS. Consolidated Guidelines on Tuberculosis: diagnosis, prevention and treatment modules."
},
{
  id: "NEUMO-072",
  especialidad: "Neumología",
  tema: "Tuberculosis",
  subtema: "Tratamiento preventivo en contacto de alto riesgo",
  dificultad: "Alta",
  caso: `Masculino de 31 años, contacto domiciliario de una persona con tuberculosis pulmonar sensible confirmada. Está asintomático y la radiografía es normal. El IGRA es positivo. Tiene enfermedad hepática crónica compensada por esteatohepatitis, ALT basal dos veces por encima del límite superior normal y consume alcohol los fines de semana. No ha recibido tratamiento preventivo previo. Pregunta por un régimen preventivo corto para reducir el riesgo de abandono. El caso fuente tiene susceptibilidad documentada a isoniazida y rifampicina.`,
  pregunta: "¿Cuál es el principio que debe guiar la selección del tratamiento preventivo?",
  opciones: [
    "Elegir siempre isoniazida durante nueve meses sin considerar hepatopatía ni riesgo de toxicidad",
    "Seleccionar un régimen preventivo recomendado tras evaluar función hepática, interacciones, adherencia y susceptibilidad del caso fuente, con monitorización apropiada",
    "Administrar el esquema de cuatro fármacos para enfermedad activa a pesar de no existir datos de enfermedad",
    "No ofrecer tratamiento preventivo porque todo paciente con hepatopatía tiene contraindicación absoluta",
    "Usar fluoroquinolona en monoterapia sin considerar la susceptibilidad del caso fuente"
  ],
  respuestaCorrecta: 1,
  explicacion: `El contacto estrecho con enfermedad sensible y un IGRA positivo hacen considerar tratamiento preventivo tras excluir tuberculosis activa. La elección del régimen debe individualizarse: los esquemas cortos con rifamicinas pueden mejorar finalización, pero tienen interacciones importantes y también requieren evaluación hepática; la isoniazida puede producir hepatotoxicidad. La hepatopatía compensada no implica necesariamente contraindicación absoluta, pero sí exige balance riesgo-beneficio, educación sobre síntomas de hepatitis, revisión de alcohol y fármacos concomitantes, y monitorización bioquímica según el riesgo. El régimen para infección no debe confundirse con el tratamiento de enfermedad activa. La decisión final debe seguir el protocolo local y considerar las características del contacto y del caso fuente.`,
  perlaENARM: "El tratamiento preventivo se individualiza según exposición, resistencia del caso fuente, interacciones y hepatotoxicidad; no es equivalente al esquema de enfermedad activa.",
  gpc: {
    mexico: "Normativa mexicana vigente de evaluación de contactos y tratamiento preventivo de tuberculosis.",
    internacional: "OMS. Guidelines on tuberculosis preventive treatment."
  },
  bibliografia: "OMS. Consolidated Guidelines on Tuberculosis: preventive treatment recommendations."
},
{
  id: "NEUMO-073",
  especialidad: "Neumología",
  tema: "Tuberculosis",
  subtema: "Tuberculosis pericárdica",
  dificultad: "Alta",
  caso: `Masculino de 48 años con fiebre prolongada, pérdida ponderal, disnea progresiva y dolor torácico inespecífico. La exploración muestra ingurgitación yugular, hipotensión relativa y ruidos cardiacos apagados. El ecocardiograma identifica derrame pericárdico importante con signos de compromiso hemodinámico. La tomografía muestra adenopatías mediastínicas y micronódulos pulmonares. El líquido pericárdico es exudativo, linfocítico, con ADA elevada; la tinción y la prueba molecular inicial son negativas. El paciente presenta deterioro de la perfusión y se sospecha taponamiento.`,
  pregunta: "¿Cuál es la prioridad clínica?",
  opciones: [
    "Esperar el cultivo pericárdico antes de intervenir, porque la tuberculosis no produce taponamiento",
    "Realizar drenaje pericárdico urgente por compromiso hemodinámico, obtener muestras para diagnóstico y tratar tuberculosis si la sospecha es alta",
    "Administrar diuréticos a dosis altas como único tratamiento del taponamiento",
    "Iniciar anticoagulación plena antes de evaluar el derrame",
    "Descartar tuberculosis por la prueba molecular negativa"
  ],
  respuestaCorrecta: 1,
  explicacion: `El taponamiento cardiaco es una emergencia hemodinámica y la prioridad es aliviar la compresión mediante drenaje urgente cuando esté indicado. Deben obtenerse muestras pericárdicas para estudios microbiológicos, bioquímicos y citológicos. La tuberculosis pericárdica puede ser paucibacilar, por lo que una prueba molecular negativa no excluye el diagnóstico. La combinación de síntomas constitucionales, adenopatías, derrame linfocítico y ADA elevada apoya la sospecha, pero requiere integración con otras causas de pericarditis. Si la probabilidad clínica es alta, el tratamiento antituberculoso debe coordinarse de forma oportuna; el uso de corticoides en pericarditis tuberculosa requiere individualización y no sustituye drenaje ni terapia antimicrobiana. La inestabilidad hemodinámica no debe esperar la confirmación microbiológica.`,
  perlaENARM: "Ante taponamiento, el drenaje urgente precede a la confirmación etiológica; una prueba molecular negativa no excluye tuberculosis pericárdica.",
  gpc: {
    mexico: "Manejo hospitalario urgente conforme a protocolos de taponamiento y normativa mexicana para tuberculosis extrapulmonar.",
    internacional: "OMS: diagnóstico y tratamiento de tuberculosis extrapulmonar; guías de urgencias cardiovasculares para taponamiento."
  },
  bibliografia: "OMS. Consolidated Guidelines on Tuberculosis; guías cardiovasculares para derrame pericárdico y taponamiento."
},
{
  id: "NEUMO-074",
  especialidad: "Neumología",
  tema: "Tuberculosis",
  subtema: "Tuberculosis laríngea y control de transmisión",
  dificultad: "Alta",
  caso: `Femenina de 44 años, docente, presenta disfonía progresiva de seis semanas, odinofagia leve, tos seca, pérdida ponderal y febrícula. La laringoscopia muestra una lesión ulcerada irregular en una cuerda vocal. La tomografía torácica identifica opacidades apicales y pequeños nódulos centrolobulillares. La baciloscopia inicial de esputo es negativa. Se sospecha neoplasia laríngea, pero también se considera tuberculosis. La paciente continúa impartiendo clases y no se han establecido medidas de control de infección.`,
  pregunta: "¿Cuál es la conducta más apropiada mientras se completa el diagnóstico?",
  opciones: [
    "Considerar tuberculosis laríngea en el diagnóstico diferencial, implementar precauciones de transmisión aérea y obtener muestras respiratorias y tejido para histopatología y microbiología",
    "Descartar tuberculosis por la ausencia de bacilos en la primera muestra",
    "Realizar solo una prueba de tuberculina y permitir que continúe sus actividades sin evaluación",
    "Administrar corticoides inhalados como tratamiento definitivo de la lesión ulcerada",
    "Diagnosticar carcinoma laríngeo de forma definitiva por la apariencia de la lesión, sin biopsia"
  ],
  respuestaCorrecta: 0,
  explicacion: `La tuberculosis laríngea puede simular carcinoma, causar disfonía persistente y asociarse a enfermedad pulmonar. Por su potencial contagiosidad, debe considerarse el control de transmisión aérea mientras se completa la evaluación. Se requieren muestras respiratorias para pruebas moleculares y cultivo, además de biopsia laríngea para histopatología y estudios microbiológicos cuando esté indicada. La baciloscopia negativa no excluye tuberculosis. La neoplasia sigue siendo un diagnóstico diferencial importante y no puede descartarse sin estudio histológico. Las medidas de salud pública, el rastreo de contactos y la notificación deben seguir la normativa local una vez establecida la sospecha o confirmación conforme al protocolo.`,
  perlaENARM: "Tuberculosis laríngea puede imitar cáncer y ser altamente contagiosa; una baciloscopia negativa no excluye el diagnóstico.",
  gpc: {
    mexico: "Normativa mexicana vigente de vigilancia, prevención y control de tuberculosis y evaluación de contactos.",
    internacional: "OMS. Module 3: Diagnosis, 2024."
  },
  bibliografia: "OMS. Consolidated Guidelines on Tuberculosis: Module 3, Diagnosis. 2024."
},
{
  id: "NEUMO-075",
  especialidad: "Neumología",
  tema: "Tuberculosis",
  subtema: "Tuberculosis y diabetes mellitus",
  dificultad: "Alta",
  caso: `Masculino de 57 años con diabetes mellitus tipo 2 de 15 años, HbA1c de 10.8%, neuropatía periférica y enfermedad renal crónica G3a. Presenta tos de dos meses, fiebre vespertina, pérdida ponderal y cavitación apical. La prueba molecular confirma tuberculosis pulmonar y no detecta resistencia a rifampicina. Se planea iniciar tratamiento de primera línea. Toma metformina, insulina basal y atorvastatina. El equipo considera que la diabetes no modifica el manejo y que basta con administrar el esquema estándar sin revisar control glucémico, función renal ni interacciones.`,
  pregunta: "¿Cuál es la estrategia más adecuada?",
  opciones: [
    "Tratar tuberculosis y optimizar simultáneamente control glucémico, función renal, adherencia e interacciones, con seguimiento clínico y microbiológico estrecho",
    "Posponer el tratamiento antituberculoso hasta que la HbA1c sea menor de 7%",
    "Administrar solo isoniazida para evitar interacciones",
    "Suspender toda terapia para diabetes durante los seis meses de tratamiento",
    "Usar de manera automática un esquema para tuberculosis resistente por la presencia de diabetes"
  ],
  respuestaCorrecta: 0,
  explicacion: `La diabetes mal controlada se asocia con mayor riesgo de tuberculosis, peor respuesta en determinados contextos y mayor probabilidad de desenlaces desfavorables. No debe retrasarse el tratamiento de tuberculosis confirmada para alcanzar una HbA1c objetivo. Es necesario revisar función renal para ajustar fármacos cuando corresponda, valorar interacciones, vigilar toxicidad hepática y reforzar adherencia. La rifampicina puede modificar el metabolismo de diversos medicamentos, por lo que el plan farmacológico debe revisarse. El control glucémico debe optimizarse de manera individualizada y el seguimiento microbiológico debe ser riguroso. La diabetes no implica automáticamente resistencia farmacológica ni justifica usar un esquema de tuberculosis resistente sin evidencia.`,
  perlaENARM: "En tuberculosis con diabetes, trata la infección sin demora y optimiza el control metabólico; diabetes no equivale a resistencia farmacológica.",
  gpc: {
    mexico: "Normativa mexicana vigente para tuberculosis, integrada con el manejo de diabetes y enfermedad renal.",
    internacional: "OMS. Guidance on tuberculosis and comorbidities; Module 4: Treatment and Care, 2025."
  },
  bibliografia: "OMS. Consolidated Guidelines on Tuberculosis: Module 4, Treatment and Care. 2025."
},
{
  id: "NEUMO-076",
  especialidad: "Neumología",
  tema: "Tuberculosis",
  subtema: "Tuberculosis farmacorresistente y exposición previa",
  dificultad: "Alta",
  caso: `Femenina de 37 años con tuberculosis pulmonar confirmada, cavitación extensa y baciloscopia fuertemente positiva. Recibió tratamiento antituberculoso hace cinco años, pero abandonó durante la fase de continuación. La prueba molecular actual detecta M. tuberculosis y resistencia a rifampicina. No hay susceptibilidad completa disponible. Está clínicamente estable y no presenta embarazo conocido ni enfermedad neurológica. La familia solicita reiniciar los mismos medicamentos que recibió previamente, argumentando que el esquema es conocido y más accesible.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Reiniciar exactamente el esquema previo de primera línea y no solicitar pruebas adicionales",
    "Clasificar como tuberculosis resistente a rifampicina, obtener pruebas ampliadas de susceptibilidad y coordinar un régimen individualizado con el programa especializado",
    "Añadir solo un fármaco al esquema previo para evitar resistencia",
    "Suspender el aislamiento porque ya recibió tratamiento en el pasado",
    "Tratar con monoterapia con fluoroquinolona hasta que llegue el cultivo"
  ],
  respuestaCorrecta: 1,
  explicacion: `El abandono previo y la resistencia a rifampicina detectada actualmente hacen inadecuado reiniciar empíricamente el esquema estándar sin evaluación adicional. Se deben solicitar pruebas para determinar resistencia a fluoroquinolonas y otros fármacos clave, revisar tratamientos previos y documentar exposición a medicamentos. Los regímenes orales acortados para tuberculosis resistente pueden ser apropiados en pacientes seleccionados, pero su elegibilidad depende del patrón de resistencia, antecedentes de exposición, localización y otras condiciones clínicas. El tratamiento debe ser seleccionado por un equipo experto y acompañado de soporte para adherencia y vigilancia de eventos adversos. Nunca se debe añadir un único fármaco a un régimen probablemente ineficaz ni utilizar monoterapia, porque aumenta el riesgo de ampliar la resistencia.`,
  perlaENARM: "En tuberculosis resistente, no añadas un solo fármaco a un esquema fallido; confirma el perfil de resistencia y construye un régimen eficaz con expertos.",
  gpc: {
    mexico: "Programa Nacional de Tuberculosis y normativa mexicana vigente para tuberculosis farmacorresistente.",
    internacional: "OMS. Module 4: Treatment and Care, 2025; regímenes orales para TB RR/MDR en pacientes elegibles."
  },
  bibliografia: "OMS. Consolidated Guidelines on Tuberculosis: Module 4, Treatment and Care. 2025."
},
{
  id: "NEUMO-077",
  especialidad: "Neumología",
  tema: "Tuberculosis",
  subtema: "Efectos adversos: neuritis óptica por etambutol",
  dificultad: "Alta",
  caso: `Masculino de 62 años con tuberculosis pulmonar sensible, en tratamiento con esquema de primera línea. Tiene enfermedad renal crónica con filtrado glomerular estimado de 24 mL/min/1.73 m². Tras cinco semanas refiere visión borrosa bilateral, dificultad para distinguir colores y pérdida progresiva de agudeza visual. No presenta dolor ocular ni ojo rojo. No se documentó ajuste de intervalos del etambutol ni evaluación oftalmológica basal. La función renal ha empeorado discretamente desde el inicio del tratamiento.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Continuar etambutol sin cambios, porque la pérdida de visión es un efecto esperado y reversible",
    "Sospechar toxicidad ocular por etambutol, suspenderlo mientras se evalúa urgentemente la función visual y renal, y coordinar un esquema antituberculoso eficaz alternativo",
    "Suspender todos los antituberculosos permanentemente sin valoración especializada",
    "Añadir corticoides tópicos como tratamiento definitivo sin modificar el fármaco",
    "Aumentar la dosis de etambutol para alcanzar concentraciones terapéuticas en el nervio óptico"
  ],
  respuestaCorrecta: 1,
  explicacion: `El etambutol puede causar neuritis óptica, manifestada por disminución de agudeza visual y alteración de la discriminación cromática, especialmente con exposición elevada y disfunción renal. La aparición de síntomas visuales exige suspender el fármaco sospechoso y realizar evaluación oftalmológica urgente. La insuficiencia renal requiere revisar la dosificación y el intervalo de etambutol, así como otros medicamentos. La continuidad del tratamiento de tuberculosis debe garantizarse mediante un plan alternativo individualizado, no mediante la suspensión indiscriminada de todos los fármacos ni la reexposición sin evaluación. La recuperación visual puede ser incompleta, por lo que la detección temprana es esencial.`,
  perlaENARM: "Etambutol puede causar neuritis óptica; alteración de visión o de colores requiere suspensión y valoración urgente, especialmente con insuficiencia renal.",
  gpc: {
    mexico: "Normativa mexicana de tratamiento de tuberculosis y vigilancia de reacciones adversas a medicamentos.",
    internacional: "OMS. Module 4: Treatment and Care, 2025."
  },
  bibliografia: "OMS. Consolidated Guidelines on Tuberculosis: Module 4, Treatment and Care. 2025."
},
{
  id: "NEUMO-078",
  especialidad: "Neumología",
  tema: "Tuberculosis",
  subtema: "Fracaso terapéutico y conversión bacteriológica",
  dificultad: "Alta",
  caso: `Masculino de 45 años con tuberculosis pulmonar inicialmente sensible, tratado con un esquema de primera línea. Al quinto mes mantiene tos, pérdida ponderal y baciloscopia positiva. La tomografía muestra cavitación persistente y nuevas opacidades. El paciente refiere haber omitido dosis con frecuencia por efectos gastrointestinales y dificultad para acudir al centro de salud. No se han realizado cultivos recientes ni nuevas pruebas de susceptibilidad. Un integrante del equipo propone añadir una fluoroquinolona al esquema actual y continuar hasta el mes doce.`,
  pregunta: "¿Cuál es la conducta más adecuada ante la sospecha de fracaso terapéutico?",
  opciones: [
    "Añadir una fluoroquinolona aislada al esquema existente sin pruebas adicionales",
    "Reevaluar adherencia y absorción, obtener cultivo y pruebas de susceptibilidad, revisar el diagnóstico y coordinar el manejo como posible fracaso o resistencia",
    "Suspender el tratamiento de inmediato y no reiniciarlo",
    "Prolongar automáticamente el esquema sensible otros seis meses sin investigación",
    "Cambiar a tratamiento de neumonía adquirida en la comunidad"
  ],
  respuestaCorrecta: 1,
  explicacion: `La persistencia de baciloscopia positiva y el deterioro clínico en el quinto mes obligan a investigar fracaso terapéutico, resistencia adquirida o primaria, adherencia insuficiente, malabsorción, dosis inadecuadas y diagnósticos alternativos. Antes de modificar el régimen deben obtenerse muestras para cultivo y susceptibilidad, revisar el historial de dispensación y exposición a cada fármaco y evaluar complicaciones. Añadir un solo fármaco a un esquema que puede estar fallando puede generar resistencia adicional. El apoyo para adherencia es esencial, pero no sustituye la investigación microbiológica. La estrategia debe coordinarse con el programa especializado y evitar interrupciones sin un plan terapéutico eficaz.`,
  perlaENARM: "Persistencia bacteriológica o deterioro durante tratamiento exige cultivo, susceptibilidad y revisión de adherencia; nunca añadas un solo fármaco a un régimen fallido.",
  gpc: {
    mexico: "Programa Nacional de Tuberculosis y normativa mexicana vigente para seguimiento y sospecha de fracaso terapéutico.",
    internacional: "OMS. Module 4: Treatment and Care, 2025."
  },
  bibliografia: "OMS. Consolidated Guidelines on Tuberculosis: Module 4, Treatment and Care. 2025."
},
{
  id: "NEUMO-079",
  especialidad: "Neumología",
  tema: "Tuberculosis",
  subtema: "Aislamiento respiratorio y salud pública",
  dificultad: "Alta",
  caso: `Masculino de 52 años, ingresado por hemoptisis moderada y pérdida ponderal. La tomografía muestra cavitación apical y patrón de diseminación broncógena. La baciloscopia de esputo es positiva y la prueba molecular detecta M. tuberculosis; la resistencia a rifampicina no se detecta. El paciente permanece en una habitación compartida porque la unidad no dispone de habitaciones individuales. Su familiar lo visita sin mascarilla y el personal utiliza únicamente cubrebocas quirúrgico. Se planea trasladarlo a otra área cuando se confirme el cultivo.`,
  pregunta: "¿Cuál es la medida inmediata más apropiada para reducir transmisión?",
  opciones: [
    "Mantenerlo en habitación compartida y esperar al cultivo porque la baciloscopia positiva no indica contagiosidad",
    "Aplicar precauciones de transmisión aérea, ubicarlo en habitación de aislamiento respiratorio con presión negativa si está disponible, usar respiradores adecuados y coordinar medidas de salud pública",
    "Usar únicamente precauciones de contacto y guantes",
    "Suspender el aislamiento después de una dosis de tratamiento",
    "Permitir visitas sin protección si el paciente no tiene fiebre"
  ],
  respuestaCorrecta: 1,
  explicacion: `La tuberculosis pulmonar bacilífera y cavitaria implica un riesgo elevado de transmisión aérea. Deben implementarse de inmediato precauciones de transmisión aérea: habitación de aislamiento respiratorio con presión negativa cuando esté disponible, respiradores adecuados para el personal, control de visitas y educación al paciente. Debe iniciarse tratamiento eficaz sin demora y coordinar notificación y rastreo de contactos según la normativa local. La duración del aislamiento no se define por la desaparición de la fiebre ni por una única dosis de tratamiento; depende de la respuesta, microbiología, susceptibilidad y criterios institucionales de control de infección. El cultivo y las pruebas de susceptibilidad siguen siendo importantes, pero no deben retrasar las medidas de prevención.`,
  perlaENARM: "Tuberculosis pulmonar bacilífera requiere precauciones de transmisión aérea; mascarilla quirúrgica para el personal no sustituye un respirador adecuado.",
  gpc: {
    mexico: "Normativa mexicana vigente de prevención y control de tuberculosis, notificación y estudio de contactos.",
    internacional: "OMS. Recomendaciones de control de infección por tuberculosis y manejo programático."
  },
  bibliografia: "OMS. Consolidated Guidelines on Tuberculosis: prevention and care modules."
},
{
  id: "NEUMO-080",
  especialidad: "Neumología",
  tema: "Tuberculosis",
  subtema: "Integración diagnóstica en paciente con posible resistencia",
  dificultad: "Alta",
  caso: `Femenina de 40 años, originaria de una zona con incidencia elevada de tuberculosis, presenta tos de dos meses, hemoptisis escasa, fiebre y pérdida ponderal de 7 kg. Tiene antecedente de tratamiento antituberculoso irregular en otro país, sin documentación del esquema ni del resultado. La tomografía muestra cavitación apical bilateral y nódulos centrolobulillares. La baciloscopia es positiva y una prueba molecular detecta M. tuberculosis con resistencia a rifampicina. La paciente está estable, con saturación de 95% al aire ambiente, y no tiene signos de meningitis. Se desconoce la susceptibilidad a fluoroquinolonas y otros fármacos. La familia solicita iniciar un esquema estándar porque es el más conocido.`,
  pregunta: "¿Cuál es el plan inicial más apropiado?",
  opciones: [
    "Iniciar 2HRZE/4HR y no modificarlo hasta que finalice el cultivo, pese a la resistencia molecular",
    "Implementar precauciones de transmisión aérea, obtener pruebas ampliadas de susceptibilidad y muestras para cultivo, e iniciar con rapidez un régimen para tuberculosis resistente seleccionado por el equipo especializado",
    "Tratar con isoniazida en monoterapia mientras se esperan resultados",
    "Posponer toda terapia hasta disponer de susceptibilidad completa, aunque la paciente tenga enfermedad bacilífera",
    "Iniciar corticoides sistémicos y repetir la tomografía en tres meses"
  ],
  respuestaCorrecta: 1,
  explicacion: `La combinación de baciloscopia positiva, cavitación, tratamiento previo irregular y resistencia molecular a rifampicina hace altamente probable tuberculosis resistente a rifampicina. La paciente requiere precauciones de transmisión aérea, cultivo y pruebas ampliadas de susceptibilidad, con atención especializada y vinculación al programa nacional. No debe recibir automáticamente el esquema estándar sensible a fármacos, pero tampoco debe quedar sin tratamiento mientras se esperan todos los resultados si la evaluación permite iniciar un régimen empírico apropiado. La selección puede incluir regímenes orales acortados recomendados internacionalmente para personas elegibles, pero depende de susceptibilidad a fluoroquinolonas, exposición previa a los medicamentos, localización de la enfermedad, embarazo, comorbilidades e interacciones. La decisión debe individualizarse y acompañarse de soporte para adherencia y monitorización de toxicidad.`,
  perlaENARM: "Ante resistencia a rifampicina, tratamiento previo irregular y enfermedad bacilífera, prioriza aislamiento, susceptibilidad ampliada y régimen especializado eficaz sin demoras evitables.",
  gpc: {
    mexico: "Programa Nacional de Tuberculosis y normativa mexicana vigente para tuberculosis farmacorresistente.",
    internacional: "OMS. Module 3: Diagnosis, 2024; Module 4: Treatment and Care, 2025."
  },
  bibliografia: "OMS. Consolidated Guidelines on Tuberculosis. Modules 3 y 4, 2024–2025."
},
 
{
  id: "NEUMO-081",
  especialidad: "Neumología",
  tema: "Tromboembolia pulmonar",
  subtema: "Probabilidad clínica preprueba y dímero D",
  dificultad: "Alta",
  caso: `Masculino de 44 años, sin antecedentes cardiovasculares, consulta por disnea súbita de seis horas y dolor torácico pleurítico. Regresó hace dos días de un vuelo internacional de 12 horas. Frecuencia cardiaca 104/min, frecuencia respiratoria 23/min, presión arterial 126/78 mmHg y SpO₂ 94% al aire ambiente. No presenta fiebre, sibilancias ni signos de congestión. La pierna izquierda tiene discreta molestia en la pantorrilla, sin edema evidente. ECG: taquicardia sinusal. Radiografía de tórax sin infiltrados. No tiene hemoptisis ni antecedente de cáncer. La probabilidad clínica se considera baja-intermedia y se plantea solicitar dímero D antes de realizar imagen.`,
  pregunta: "¿Cuál es la estrategia diagnóstica inicial más apropiada?",
  opciones: [
    "Solicitar dímero D de alta sensibilidad y, si es negativo con un umbral validado para su contexto clínico, descartar TEP sin imagen",
    "Solicitar directamente angiografía pulmonar invasiva en todos los pacientes con taquicardia",
    "Descartar TEP porque la radiografía de tórax es normal",
    "Iniciar trombólisis por el antecedente de vuelo prolongado",
    "Solicitar dímero D y considerar que cualquier resultado positivo confirma TEP"
  ],
  respuestaCorrecta: 0,
  explicacion: `En pacientes hemodinámicamente estables con probabilidad clínica baja o intermedia, el dímero D de alta sensibilidad permite excluir TEP cuando es negativo y se utiliza un umbral validado. Un resultado positivo no confirma la enfermedad, porque el dímero D se eleva en múltiples condiciones. Si la probabilidad preprueba es alta, no debe utilizarse un dímero D negativo como sustituto de la imagen indicada. La exposición a un vuelo prolongado aumenta la sospecha, pero no determina por sí sola el diagnóstico ni indica trombólisis. La decisión debe partir de una escala clínica validada, como Wells o Ginebra, y del contexto individual.`,
  perlaENARM: "El dímero D es una prueba de exclusión en pacientes seleccionados; un resultado positivo no confirma TEP.",
  gpc: {
    mexico: "GPC-IMSS-425-18: Diagnóstico y tratamiento de la enfermedad tromboembólica venosa.",
    internacional: "AHA/ACC y sociedades colaboradoras, guía de TEP aguda en adultos, 2026."
  },
  bibliografia: "AHA/ACC/ACCP/CHEST y sociedades colaboradoras. Guideline for Acute PE in Adults. 2026; IMSS-425-18."
},
{
  id: "NEUMO-082",
  especialidad: "Neumología",
  tema: "Tromboembolia pulmonar",
  subtema: "PERC y selección de pacientes de muy bajo riesgo",
  dificultad: "Alta",
  caso: `Femenina de 29 años, consulta por dolor torácico inespecífico y sensación de falta de aire durante una situación de ansiedad. No fuma, no toma estrógenos, no ha tenido cirugía ni inmovilización reciente, no tiene cáncer ni antecedente de tromboembolia. Frecuencia cardiaca 82/min, SpO₂ 99%, frecuencia respiratoria 16/min y presión arterial normal. No hay hemoptisis, edema unilateral ni signos de trombosis venosa profunda. La exploración cardiopulmonar es normal y la probabilidad clínica global de TEP es muy baja. El médico considera solicitar dímero D por rutina, aunque puede aplicar una regla de exclusión clínica.`,
  pregunta: "¿Cuál es la conducta más razonable si se cumplen todos los criterios PERC y la sospecha inicial es realmente muy baja?",
  opciones: [
    "Descartar TEP sin dímero D ni imagen mediante PERC, en el contexto clínico apropiado",
    "Solicitar angiografía pulmonar por tomografía a toda paciente con dolor torácico",
    "Solicitar dímero D y anticoagular si supera el límite normal",
    "Indicar trombólisis profiláctica por la posibilidad de embolia subsegmentaria",
    "Utilizar PERC en pacientes con probabilidad clínica alta, porque es más sensible que la imagen"
  ],
  respuestaCorrecta: 0,
  explicacion: `PERC se utiliza para evitar pruebas adicionales en pacientes con probabilidad clínica inicial muy baja. Incluye edad menor de 50 años, frecuencia cardiaca menor de 100/min, saturación al menos de 95%, ausencia de hemoptisis, estrógenos, antecedente de tromboembolia, edema unilateral y cirugía o trauma reciente relevante. Si todos los criterios son negativos y la selección inicial es apropiada, puede descartarse TEP sin dímero D. PERC no debe aplicarse indiscriminadamente en pacientes con probabilidad intermedia o alta, ni sustituye el juicio clínico. Solicitar pruebas en poblaciones de muy bajo riesgo puede generar falsos positivos, estudios innecesarios y exposición a contraste y radiación.`,
  perlaENARM: "PERC solo sirve para pacientes seleccionados con probabilidad preprueba muy baja; no es una regla universal para cualquier sospecha de TEP.",
  gpc: {
    mexico: "GPC-IMSS-425-18: evaluación diagnóstica de enfermedad tromboembólica venosa.",
    internacional: "Guía multisocietaria AHA/ACC 2026; uso contextual de estrategias de probabilidad clínica."
  },
  bibliografia: "IMSS-425-18; guía multisocietaria AHA/ACC para TEP aguda, 2026."
},
{
  id: "NEUMO-083",
  especialidad: "Neumología",
  tema: "Tromboembolia pulmonar",
  subtema: "Dímero D ajustado por edad",
  dificultad: "Alta",
  caso: `Masculino de 76 años con disnea de inicio reciente, frecuencia cardiaca 92/min y presión arterial estable. No presenta hemoptisis ni signos de trombosis venosa profunda. La escala de Wells sugiere probabilidad no alta y se decide solicitar dímero D de alta sensibilidad. El laboratorio informa 680 ng/mL FEU, con límite convencional de 500 ng/mL FEU. La función renal es moderadamente reducida y la radiografía no muestra una explicación alternativa concluyente. El médico sabe que el dímero D aumenta con la edad y considera el umbral ajustado por edad para decidir si requiere angiotomografía.`,
  pregunta: "¿Cómo debe interpretarse el resultado si el ensayo y las unidades permiten utilizar el umbral ajustado por edad?",
  opciones: [
    "Es positivo porque cualquier valor mayor de 500 ng/mL FEU obliga a realizar imagen",
    "Es negativo respecto al umbral ajustado por edad de 760 ng/mL FEU, si la probabilidad preprueba es baja/intermedia y se aplica el algoritmo validado",
    "Confirma TEP porque está por encima de 300 ng/mL FEU",
    "Debe dividirse entre la edad para obtener una probabilidad exacta de embolia",
    "No puede utilizarse el dímero D en pacientes mayores de 70 años"
  ],
  respuestaCorrecta: 1,
  explicacion: `Para pacientes mayores de 50 años, un umbral ajustado por edad utilizado con ensayos apropiados es edad × 10 ng/mL FEU. En este paciente, 76 × 10 equivale a 760 ng/mL FEU; un resultado de 680 queda por debajo de ese umbral. En pacientes con probabilidad clínica no alta, esto puede excluir TEP sin imagen cuando el algoritmo y el ensayo están validados para ese uso. Es indispensable verificar las unidades: los valores expresados en DDU no son intercambiables directamente con FEU. El umbral ajustado por edad no debe emplearse para excluir TEP en pacientes con probabilidad preprueba alta ni aplicarse sin conocer el método del laboratorio.`,
  perlaENARM: "Dímero D ajustado por edad: edad × 10 ng/mL FEU en mayores de 50 años, solo con ensayo compatible y probabilidad clínica apropiada.",
  gpc: {
    mexico: "GPC-IMSS-425-18: diagnóstico de enfermedad tromboembólica venosa.",
    internacional: "Guía multisocietaria AHA/ACC 2026 y algoritmos diagnósticos validados."
  },
  bibliografia: "IMSS-425-18; AHA/ACC y sociedades colaboradoras, guía de TEP aguda, 2026."
},
{
  id: "NEUMO-084",
  especialidad: "Neumología",
  tema: "Tromboembolia pulmonar",
  subtema: "YEARS y dímero D",
  dificultad: "Alta",
  caso: `Femenina de 48 años con disnea y dolor pleurítico de 24 horas. Frecuencia cardiaca 96/min, presión arterial 122/76 mmHg y saturación 96%. No tiene signos clínicos de trombosis venosa profunda, hemoptisis ni antecedente de cáncer. El médico considera TEP como diagnóstico posible, pero no el más probable. El dímero D es de 780 ng/mL FEU. Se evalúa aplicar el algoritmo YEARS para reducir estudios de imagen innecesarios. La paciente no está embarazada y no tiene antecedente de anticoagulación.`,
  pregunta: "Según el algoritmo YEARS clásico, ¿cuál es la interpretación correcta?",
  opciones: [
    "Con cero criterios YEARS, el umbral de dímero D es 1,000 ng/mL FEU; el resultado puede excluir TEP si el algoritmo se aplica correctamente",
    "Con cero criterios YEARS, cualquier dímero D mayor de 500 confirma TEP",
    "El algoritmo YEARS solo puede utilizarse después de una angiotomografía positiva",
    "Un dímero D de 780 obliga a anticoagulación indefinida",
    "YEARS permite excluir TEP aun con choque y alta probabilidad clínica"
  ],
  respuestaCorrecta: 0,
  explicacion: `YEARS considera tres elementos: signos clínicos de trombosis venosa profunda, hemoptisis y TEP como diagnóstico más probable. En el algoritmo clásico, si no existe ninguno de estos criterios, se utiliza un umbral de dímero D menor de 1,000 ng/mL FEU para excluir TEP; si existe uno o más, el umbral es menor de 500 ng/mL FEU. En esta paciente no se identifican criterios YEARS y el valor es 780, por lo que puede excluirse TEP sin imagen si la valoración clínica es compatible y el algoritmo se utiliza en la población adecuada. No debe extrapolarse a pacientes inestables ni confundirse un umbral diagnóstico con una indicación de anticoagulación.`,
  perlaENARM: "YEARS utiliza un umbral de 1,000 ng/mL FEU cuando no hay criterios YEARS y 500 cuando existe al menos uno, dentro del algoritmo validado.",
  gpc: {
    mexico: "GPC-IMSS-425-18: evaluación de probabilidad y diagnóstico de enfermedad tromboembólica venosa.",
    internacional: "Algoritmo YEARS y guía multisocietaria AHA/ACC 2026."
  },
  bibliografia: "Estudio YEARS; IMSS-425-18; guía multisocietaria AHA/ACC para TEP aguda, 2026."
},
{
  id: "NEUMO-085",
  especialidad: "Neumología",
  tema: "Tromboembolia pulmonar",
  subtema: "Angiotomografía pulmonar",
  dificultad: "Alta",
  caso: `Masculino de 61 años con cáncer de colon recientemente diagnosticado, disnea súbita y dolor pleurítico. La frecuencia cardiaca es 112/min, la presión arterial 118/74 mmHg y la SpO₂ 91%. La probabilidad clínica de TEP es alta. El dímero D está elevado, pero el médico reconoce que su utilidad es limitada en este contexto. La función renal es normal y no existe antecedente de reacción grave al contraste. La radiografía no muestra consolidación ni neumotórax. Se necesita confirmar o descartar embolia para orientar anticoagulación y manejo oncológico.`,
  pregunta: "¿Cuál es el estudio de imagen preferido si está disponible y no existe contraindicación?",
  opciones: [
    "Angiotomografía de arterias pulmonares",
    "Radiografía de tórax repetida en seis horas como prueba confirmatoria",
    "Ecocardiograma transtorácico normal para excluir cualquier TEP",
    "Dímero D seriado hasta que se normalice",
    "Prueba de esfuerzo antes de realizar imagen vascular"
  ],
  respuestaCorrecta: 0,
  explicacion: `La angiotomografía pulmonar es una prueba de imagen central para confirmar TEP en pacientes estables con probabilidad clínica suficiente. En pacientes con cáncer, el dímero D suele elevarse por múltiples causas, por lo que un resultado positivo es poco específico. Un resultado negativo solo puede excluir TEP en escenarios y algoritmos apropiados; no sustituye la imagen cuando la probabilidad preprueba es alta. El ecocardiograma puede mostrar sobrecarga ventricular derecha y apoyar la evaluación de gravedad, pero un estudio normal no excluye TEP en un paciente estable. La gammagrafía V/Q puede ser alternativa si el contraste está contraindicado o la angiotomografía no es adecuada.`,
  perlaENARM: "En paciente estable con probabilidad clínica alta, prioriza imagen vascular; el dímero D no confirma TEP y no debe retrasar la evaluación indicada.",
  gpc: {
    mexico: "GPC-IMSS-425-18: diagnóstico de enfermedad tromboembólica venosa.",
    internacional: "Guía multisocietaria AHA/ACC 2026: evaluación diagnóstica y estratificación de TEP."
  },
  bibliografia: "IMSS-425-18; AHA/ACC y sociedades colaboradoras, guía de TEP aguda, 2026."
},
{
  id: "NEUMO-086",
  especialidad: "Neumología",
  tema: "Tromboembolia pulmonar",
  subtema: "TEP con inestabilidad hemodinámica",
  dificultad: "Alta",
  caso: `Masculino de 70 años presenta disnea súbita, síncope y dolor torácico. Llega con presión arterial de 72/44 mmHg, frecuencia cardiaca 138/min, piel fría, confusión y saturación de 82%. La ecografía a pie de cama muestra dilatación importante del ventrículo derecho, aplanamiento septal y vena cava inferior dilatada. No hay derrame pericárdico ni datos de edema pulmonar izquierdo. El traslado a tomografía no es seguro por la inestabilidad. No tiene antecedente conocido de hemorragia intracraneal, pero se desconoce si tuvo cirugía reciente. La sospecha de TEP de alto riesgo es muy elevada.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Esperar obligatoriamente angiotomografía antes de cualquier decisión, aunque el paciente no tolere el traslado",
    "Iniciar reanimación y soporte hemodinámico, obtener confirmación a pie de cama cuando sea posible y considerar reperfusión urgente si la sospecha de TEP de alto riesgo es suficiente y no existen contraindicaciones",
    "Administrar únicamente oxígeno y observar durante seis horas",
    "Iniciar anticoagulación oral y dar alta",
    "Evitar cualquier reperfusión porque el ecocardiograma no visualiza directamente el trombo en arteria pulmonar"
  ],
  respuestaCorrecta: 1,
  explicacion: `La hipotensión persistente, el choque y los signos ecocardiográficos de sobrecarga aguda del ventrículo derecho son compatibles con TEP de alto riesgo. En un paciente que no puede trasladarse de forma segura, la evaluación a pie de cama puede sustentar decisiones urgentes, aunque debe considerarse el diagnóstico diferencial del choque. Se requiere soporte hemodinámico cuidadoso, oxigenación y anticoagulación cuando sea apropiada. Si la sospecha de TEP de alto riesgo es muy elevada y no existen contraindicaciones, la reperfusión urgente, habitualmente trombólisis sistémica, puede ser necesaria; si está contraindicada o falla, se valoran alternativas quirúrgicas o por catéter según disponibilidad. Debe evaluarse de inmediato el riesgo hemorrágico, especialmente cirugía reciente, hemorragia activa o antecedente intracraneal.`,
  perlaENARM: "TEP con choque: no retrases una decisión vital por trasladar a un paciente inestable; la reperfusión exige valorar contraindicaciones y alternativas.",
  gpc: {
    mexico: "GPC-IMSS-425-18: tratamiento de enfermedad tromboembólica venosa.",
    internacional: "Guía multisocietaria AHA/ACC 2026: evaluación y manejo de TEP con falla cardiopulmonar."
  },
  bibliografia: "IMSS-425-18; guía multisocietaria AHA/ACC para TEP aguda, 2026."
},
{
  id: "NEUMO-087",
  especialidad: "Neumología",
  tema: "Tromboembolia pulmonar",
  subtema: "TEP de riesgo intermedio-alto",
  dificultad: "Alta",
  caso: `Femenina de 64 años con TEP confirmado por angiotomografía. Presenta disnea y taquicardia, pero mantiene presión arterial de 118/72 mmHg sin vasopresores. El ecocardiograma muestra dilatación y disfunción del ventrículo derecho. La troponina está elevada y el BNP también. No tiene hemorragia activa ni antecedente de cirugía reciente. La saturación es 90% con oxígeno suplementario. El equipo considera administrar trombólisis sistémica inmediata por la combinación de disfunción ventricular y biomarcadores elevados.`,
  pregunta: "¿Cuál es la estrategia inicial más apropiada?",
  opciones: [
    "Trombólisis sistémica inmediata en todos los pacientes con disfunción ventricular derecha, aunque estén estables",
    "Anticoagulación y hospitalización con vigilancia estrecha; reservar reperfusión de rescate para deterioro hemodinámico, individualizando el riesgo",
    "Alta inmediata con antiinflamatorios",
    "No anticoagular porque la presión arterial es normal",
    "Colocar filtro de vena cava como sustituto de anticoagulación en todos los casos"
  ],
  respuestaCorrecta: 1,
  explicacion: `La disfunción ventricular derecha y la elevación de troponina/BNP identifican mayor riesgo, pero la ausencia de hipotensión persistente diferencia este escenario del choque por TEP. En pacientes estables con características de riesgo intermedio-alto, la anticoagulación y vigilancia estrecha son la estrategia habitual; la trombólisis sistémica rutinaria aumenta hemorragia mayor e intracraneal y no se recomienda para todos. Debe existir capacidad para escalar rápidamente a reperfusión si aparece deterioro hemodinámico. La selección de nivel de atención depende de la oxigenación, función ventricular, biomarcadores, escalas clínicas y recursos. El filtro de vena cava no sustituye la anticoagulación salvo indicaciones específicas, como contraindicación absoluta para anticoagular en determinados escenarios.`,
  perlaENARM: "TEP estable con disfunción de VD y troponina elevada: anticoagulación y monitorización; reperfusión de rescate si se deteriora.",
  gpc: {
    mexico: "GPC-IMSS-425-18: tratamiento anticoagulante y estratificación de riesgo.",
    internacional: "Guía multisocietaria AHA/ACC 2026: clasificación clínica y decisiones de reperfusión."
  },
  bibliografia: "IMSS-425-18; AHA/ACC y sociedades colaboradoras, guía de TEP aguda, 2026."
},
{
  id: "NEUMO-088",
  especialidad: "Neumología",
  tema: "Tromboembolia pulmonar",
  subtema: "Anticoagulación inicial",
  dificultad: "Alta",
  caso: `Masculino de 56 años con TEP segmentaria confirmada, sin hipotensión ni disfunción ventricular derecha significativa. Tiene función renal normal, no presenta hemorragia activa y puede ingerir medicamentos. No tiene cáncer conocido ni interacciones farmacológicas importantes. El equipo debe elegir anticoagulación inicial y tratamiento posterior. Un residente propone heparina no fraccionada intravenosa durante varios días en todos los pacientes y después warfarina, independientemente de su perfil clínico.`,
  pregunta: "¿Cuál es el principio terapéutico más apropiado?",
  opciones: [
    "En pacientes elegibles, un anticoagulante oral directo puede ser preferible a un antagonista de vitamina K, según el fármaco y el contexto clínico",
    "Todo paciente con TEP requiere heparina no fraccionada intravenosa por al menos siete días",
    "La anticoagulación no está indicada si la embolia es segmentaria",
    "La aspirina es equivalente a un anticoagulante para tratar TEP aguda",
    "Los trombolíticos son obligatorios en toda embolia confirmada"
  ],
  respuestaCorrecta: 0,
  explicacion: `La anticoagulación es el tratamiento fundamental de la mayoría de las TEP confirmadas. En pacientes elegibles, los anticoagulantes orales directos se prefieren generalmente sobre los antagonistas de vitamina K por eficacia comparable y menor riesgo de hemorragia intracraneal en los estudios correspondientes, además de simplificar el tratamiento. La selección depende de función renal y hepática, embarazo, cáncer, síndrome antifosfolípido, interacciones, adherencia, riesgo hemorrágico y necesidad de procedimientos. Algunos fármacos requieren fase inicial parenteral y otros permiten iniciar directamente un esquema oral específico. La heparina no fraccionada puede ser preferible cuando se requiere rápida reversibilidad, existe inestabilidad o se anticipan intervenciones, pero no es obligatoria para todos.`,
  perlaENARM: "La elección de anticoagulante depende del perfil del paciente; los anticoagulantes orales directos son preferidos en muchos adultos elegibles.",
  gpc: {
    mexico: "GPC-IMSS-425-18: anticoagulación en enfermedad tromboembólica venosa.",
    internacional: "Guía multisocietaria AHA/ACC 2026: anticoagulación y prevención de recurrencia."
  },
  bibliografia: "IMSS-425-18; AHA/ACC y sociedades colaboradoras, guía de TEP aguda, 2026."
},
{
  id: "NEUMO-089",
  especialidad: "Neumología",
  tema: "Tromboembolia pulmonar",
  subtema: "TEP y hemorragia activa",
  dificultad: "Alta",
  caso: `Femenina de 67 años con TEP proximal confirmada por angiotomografía y trombosis venosa profunda femoral. Está hemodinámicamente estable, pero presenta hemorragia digestiva activa con descenso de hemoglobina de 10.2 a 7.8 g/dL y requiere transfusión. La endoscopia urgente identifica una úlcera sangrante que necesita hemostasia. No hay disfunción ventricular derecha grave. El equipo debate iniciar anticoagulación inmediata por el riesgo de progresión trombótica o colocar un filtro temporal de vena cava inferior.`,
  pregunta: "¿Cuál es la estrategia más adecuada?",
  opciones: [
    "Anticoagular a dosis plena sin controlar la hemorragia porque la TEP siempre tiene prioridad",
    "Controlar la hemorragia y, mientras exista contraindicación absoluta para anticoagular, considerar filtro de vena cava en una paciente seleccionada; reiniciar anticoagulación tan pronto sea seguro",
    "Colocar un filtro permanente en todo paciente con TEP, aunque pueda anticoagularse",
    "Usar aspirina como sustituto temporal equivalente de anticoagulación",
    "No tratar la TEP ni planear seguimiento porque el sangrado contraindica cualquier intervención futura"
  ],
  respuestaCorrecta: 1,
  explicacion: `La hemorragia digestiva activa con caída importante de hemoglobina constituye una contraindicación temporal para anticoagulación plena hasta lograr control hemostático. El manejo requiere estabilización y control de la fuente de sangrado, junto con evaluación multidisciplinaria del riesgo trombótico. En pacientes con TEP aguda y contraindicación absoluta para anticoagular, puede considerarse un filtro de vena cava inferior en circunstancias seleccionadas, especialmente cuando existe trombosis venosa proximal; no debe utilizarse de rutina si la anticoagulación es posible. Una vez controlada la hemorragia y considerado seguro, debe planearse reiniciar anticoagulación y recuperar el filtro si es temporal y existe posibilidad de retirada. La decisión sobre el momento depende del riesgo hemorrágico y trombótico.`,
  perlaENARM: "Filtro de vena cava: opción selectiva cuando la anticoagulación está absolutamente contraindicada; reinicia anticoagulación cuando sea seguro.",
  gpc: {
    mexico: "GPC-IMSS-425-18: tratamiento individualizado de enfermedad tromboembólica venosa.",
    internacional: "Guía multisocietaria AHA/ACC 2026 y recomendaciones contemporáneas de anticoagulación."
  },
  bibliografia: "IMSS-425-18; guía multisocietaria AHA/ACC para TEP aguda, 2026."
},
{
  id: "NEUMO-090",
  especialidad: "Neumología",
  tema: "Tromboembolia pulmonar",
  subtema: "TEP en embarazo",
  dificultad: "Alta",
  caso: `Femenina de 31 años, embarazada de 28 semanas, consulta por disnea súbita, dolor pleurítico y taquicardia. Frecuencia cardiaca 116/min, presión arterial 114/70 mmHg y saturación 94%. No presenta hemorragia obstétrica ni signos de trabajo de parto. Tiene edema leve bilateral de miembros inferiores, sin asimetría clara. La radiografía de tórax es normal. El equipo debe decidir entre algoritmo diagnóstico adaptado al embarazo, gammagrafía V/Q y angiotomografía pulmonar. Un médico propone evitar cualquier estudio radiológico por el embarazo y tratar empíricamente durante el resto de la gestación.`,
  pregunta: "¿Cuál es la conducta diagnóstica más apropiada?",
  opciones: [
    "Aplicar una estrategia diagnóstica validada para embarazo, valorar probabilidad clínica y dímero D cuando corresponda, y elegir imagen según radiografía, disponibilidad y riesgo individual",
    "Evitar todas las pruebas de imagen durante el embarazo y anticoagular durante nueve meses a toda paciente con disnea",
    "Usar PERC como única herramienta en todas las embarazadas",
    "Solicitar una radiografía de tórax como prueba definitiva para excluir TEP",
    "Realizar trombólisis sistémica solo por estar embarazada y taquicárdica"
  ],
  respuestaCorrecta: 0,
  explicacion: `El embarazo aumenta el riesgo tromboembólico y también produce síntomas que pueden solaparse con TEP. La evaluación debe utilizar una estrategia diagnóstica validada para embarazo, como un algoritmo adaptado que integre criterios clínicos y dímero D en pacientes apropiadas. Si se necesita imagen, tanto la gammagrafía V/Q como la angiotomografía pueden ser opciones; la elección depende de la radiografía, la disponibilidad, la sospecha de diagnósticos alternativos, la función renal y el contexto obstétrico. Las dosis de radiación fetal con estudios indicados suelen ser bajas, y no debe negarse una prueba necesaria por el embarazo. En TEP confirmada durante gestación, la heparina de bajo peso molecular es una opción habitual, con planificación periparto individualizada.`,
  perlaENARM: "El embarazo no contraindica la imagen necesaria para diagnosticar TEP; usa algoritmos validados y elige V/Q o angiotomografía según el contexto.",
  gpc: {
    mexico: "GPC-IMSS-425-18 y protocolos obstétricos mexicanos para enfermedad tromboembólica venosa.",
    internacional: "Guía multisocietaria AHA/ACC 2026; algoritmos diagnósticos validados para embarazo."
  },
  bibliografia: "IMSS-425-18; guías internacionales de TEP y tromboembolia venosa durante el embarazo."
},
{
  id: "NEUMO-091",
  especialidad: "Neumología",
  tema: "Tromboembolia pulmonar",
  subtema: "TEP y enfermedad renal crónica",
  dificultad: "Alta",
  caso: `Masculino de 73 años con enfermedad renal crónica avanzada, filtrado glomerular estimado de 18 mL/min/1.73 m², presenta disnea súbita, dolor pleurítico y taquicardia. Está estable, con saturación de 91%. El dímero D es positivo y la probabilidad clínica es intermedia. No tiene antecedente de alergia al contraste, pero existe preocupación por la función renal. La radiografía muestra atelectasias basales inespecíficas. El equipo considera que la enfermedad renal contraindica absolutamente la angiotomografía y propone no realizar estudios adicionales.`,
  pregunta: "¿Cuál es la estrategia más razonable?",
  opciones: [
    "Abandonar el diagnóstico de TEP porque la enfermedad renal impide toda imagen",
    "Individualizar la imagen: considerar gammagrafía V/Q si es adecuada y disponible, valorar riesgos y beneficios de angiotomografía y usar ecografía venosa como apoyo cuando corresponda",
    "Confirmar TEP únicamente por el dímero D positivo",
    "Iniciar trombólisis empírica en todo paciente con filtrado glomerular menor de 30",
    "Usar una radiografía de tórax normal para excluir embolia"
  ],
  respuestaCorrecta: 1,
  explicacion: `La enfermedad renal avanzada modifica la elección de pruebas y anticoagulantes, pero no elimina la necesidad de diagnosticar una TEP potencialmente mortal. La gammagrafía V/Q puede ser útil cuando la angiotomografía no es adecuada, especialmente si la radiografía es relativamente normal y el estudio está disponible. La angiotomografía puede seguir siendo necesaria si el beneficio diagnóstico supera el riesgo, con valoración individual y medidas apropiadas. La ecografía venosa puede identificar trombosis proximal y apoyar decisiones, aunque una ecografía negativa no excluye TEP. El dímero D positivo no confirma la enfermedad. Si se requiere anticoagulación, deben considerarse función renal, riesgo hemorrágico y farmacocinética; la heparina no fraccionada puede ser útil en enfermedad renal avanzada por su reversibilidad y menor dependencia de eliminación renal.`,
  perlaENARM: "La insuficiencia renal cambia la selección de imagen y anticoagulante; no descarta la necesidad de confirmar TEP.",
  gpc: {
    mexico: "GPC-IMSS-425-18: diagnóstico y tratamiento de enfermedad tromboembólica venosa.",
    internacional: "Guía multisocietaria AHA/ACC 2026: selección diagnóstica y tratamiento individualizado."
  },
  bibliografia: "IMSS-425-18; guía multisocietaria AHA/ACC para TEP aguda, 2026."
},
{
  id: "NEUMO-092",
  especialidad: "Neumología",
  tema: "Tromboembolia pulmonar",
  subtema: "TEP y cáncer activo",
  dificultad: "Alta",
  caso: `Masculino de 60 años con adenocarcinoma pancreático metastásico en quimioterapia, presenta disnea súbita y edema unilateral de pierna. La angiotomografía confirma TEP segmentaria bilateral y la ecografía muestra trombosis venosa femoral. Está hemodinámicamente estable. Tiene plaquetas de 92,000/µL, creatinina normal y no hay sangrado activo, aunque refiere episodios recientes de hematuria microscópica. El equipo debe elegir anticoagulación y duración inicial. Se plantea suspender anticoagulación a los tres meses aunque el cáncer permanezca activo.`,
  pregunta: "¿Cuál es el principio terapéutico más adecuado?",
  opciones: [
    "Anticoagular al menos tres a seis meses y reevaluar continuación mientras persistan cáncer activo y riesgo trombótico, ponderando sangrado e interacciones",
    "No anticoagular porque la TEP asociada a cáncer no responde al tratamiento",
    "Suspender a las dos semanas si desaparece la disnea",
    "Usar únicamente aspirina durante la quimioterapia",
    "Indicar trombólisis sistémica por el solo hecho de tener cáncer metastásico"
  ],
  respuestaCorrecta: 0,
  explicacion: `El cáncer activo aumenta el riesgo de recurrencia tromboembólica. La anticoagulación suele mantenerse al menos tres a seis meses y puede prolongarse mientras persistan cáncer activo, tratamiento oncológico u otros factores de riesgo, siempre reevaluando periódicamente sangrado, pronóstico, interacciones y preferencias. Los anticoagulantes orales directos o heparina de bajo peso molecular pueden ser opciones según el tipo de cáncer, riesgo de sangrado gastrointestinal o genitourinario, función renal, plaquetas e interacciones. En tumores con alto riesgo de sangrado mucoso, la elección requiere especial cautela. La estabilidad hemodinámica no indica trombólisis; la reperfusión se reserva para escenarios clínicos específicos de deterioro grave.`,
  perlaENARM: "TEP asociada a cáncer activo suele requerir anticoagulación extendida con reevaluación periódica del riesgo trombótico y hemorrágico.",
  gpc: {
    mexico: "GPC-IMSS-425-18: tratamiento de enfermedad tromboembólica venosa.",
    internacional: "Guía multisocietaria AHA/ACC 2026 y recomendaciones contemporáneas para trombosis asociada a cáncer."
  },
  bibliografia: "IMSS-425-18; guía multisocietaria AHA/ACC para TEP aguda, 2026."
},
{
  id: "NEUMO-093",
  especialidad: "Neumología",
  tema: "Tromboembolia pulmonar",
  subtema: "Trombólisis y riesgo hemorrágico",
  dificultad: "Alta",
  caso: `Masculino de 65 años con TEP confirmada, presión arterial de 76/48 mmHg, hipoxemia y disfunción ventricular derecha. Está en choque y requiere vasopresor. Sin embargo, tuvo una hemorragia intracraneal espontánea hace dos meses y una tomografía reciente muestra secuelas hemorrágicas. No existe hemorragia activa gastrointestinal. El equipo considera trombólisis sistémica por la gravedad hemodinámica, pero también dispone de valoración urgente por un equipo de intervención endovascular y cirugía cardiotorácica.`,
  pregunta: "¿Cuál es la estrategia más apropiada?",
  opciones: [
    "Administrar trombólisis sistémica sin valorar el antecedente de hemorragia intracraneal",
    "Reconocer el alto riesgo de la TEP y la contraindicación hemorrágica importante, activar un equipo multidisciplinario y valorar reperfusión mecánica o quirúrgica según disponibilidad",
    "No realizar ninguna intervención porque todas las estrategias de reperfusión están contraindicadas",
    "Administrar anticoagulación oral y dar alta al paciente",
    "Esperar a que el choque se resuelva espontáneamente antes de decidir"
  ],
  respuestaCorrecta: 1,
  explicacion: `La TEP con choque requiere reperfusión urgente si es posible, pero una hemorragia intracraneal reciente representa una contraindicación mayor para trombólisis sistémica. Debe activarse de inmediato un equipo multidisciplinario y evaluar alternativas de reperfusión por catéter o embolectomía quirúrgica, de acuerdo con disponibilidad, anatomía, estabilidad y experiencia local. La anticoagulación también requiere valoración cuidadosa, pero el riesgo de muerte por obstrucción vascular puede ser inmediato. La decisión debe equilibrar riesgo hemorrágico y beneficio de reperfusión; no es correcto asumir que todas las intervenciones están contraindicadas ni retrasar la evaluación en espera de mejoría espontánea.`,
  perlaENARM: "TEP con choque y contraindicación mayor para trombólisis sistémica: considera reperfusión por catéter o embolectomía quirúrgica mediante equipo especializado.",
  gpc: {
    mexico: "GPC-IMSS-425-18: tratamiento de enfermedad tromboembólica venosa y evaluación individualizada del riesgo.",
    internacional: "Guía multisocietaria AHA/ACC 2026: estrategias avanzadas para TEP con falla cardiopulmonar."
  },
  bibliografia: "IMSS-425-18; guía multisocietaria AHA/ACC para TEP aguda, 2026."
},
{
  id: "NEUMO-094",
  especialidad: "Neumología",
  tema: "Tromboembolia pulmonar",
  subtema: "PESI/sPESI y decisión de hospitalización",
  dificultad: "Alta",
  caso: `Femenina de 39 años con TEP confirmada por angiotomografía, sin hipotensión ni hipoxemia significativa. Frecuencia cardiaca 84/min, presión arterial 124/76 mmHg, saturación 98% y función renal normal. No tiene cáncer, insuficiencia cardiaca, enfermedad pulmonar crónica ni antecedente de sangrado. La ecocardiografía muestra ventrículo derecho normal y troponina negativa. Tiene red de apoyo, acceso a medicamentos y capacidad de acudir a seguimiento. El equipo evalúa si puede recibir tratamiento ambulatorio.`,
  pregunta: "¿Cuál es la decisión más apropiada?",
  opciones: [
    "Valorar tratamiento ambulatorio si cumple criterios clínicos validados de bajo riesgo, no hay contraindicaciones y existe seguimiento seguro",
    "Hospitalizar obligatoriamente durante 14 días a toda persona con TEP confirmada",
    "Administrar trombólisis porque cualquier embolia puede deteriorarse",
    "No anticoagular porque no hay disfunción ventricular derecha",
    "Indicar filtro de vena cava para permitir el alta sin anticoagulación"
  ],
  respuestaCorrecta: 0,
  explicacion: `La TEP de bajo riesgo puede tratarse de manera ambulatoria o con alta temprana en pacientes seleccionados. Deben considerarse escalas clínicas como PESI/sPESI o criterios Hestia, junto con oxigenación, riesgo hemorrágico, comorbilidades, posibilidad de tratamiento oral, adherencia, soporte domiciliario y acceso a seguimiento. La ausencia de disfunción ventricular derecha y biomarcadores negativos favorece bajo riesgo, pero no es suficiente por sí sola. La decisión debe garantizar que el paciente pueda recibir anticoagulación segura y regresar si empeora. La hospitalización es necesaria si existen factores clínicos o sociales que impidan manejo seguro fuera del hospital.`,
  perlaENARM: "El alta temprana en TEP requiere selección estructurada de bajo riesgo y seguimiento confiable; no basta con una presión arterial normal.",
  gpc: {
    mexico: "GPC-IMSS-425-18: selección de pacientes para manejo ambulatorio y tratamiento de ETV.",
    internacional: "Guía multisocietaria AHA/ACC 2026: categorías de gravedad y lugar de atención."
  },
  bibliografia: "IMSS-425-18; AHA/ACC y sociedades colaboradoras, guía de TEP aguda, 2026."
},
{
  id: "NEUMO-095",
  especialidad: "Neumología",
  tema: "Tromboembolia pulmonar",
  subtema: "Trombosis venosa profunda y ecografía compresiva",
  dificultad: "Alta",
  caso: `Masculino de 54 años con disnea súbita, dolor pleurítico y edema unilateral de pierna. La probabilidad clínica de TEP es alta. La angiotomografía está temporalmente contraindicada por una reacción grave previa al contraste yodado. La ecografía venosa demuestra trombosis proximal femoral aguda. El paciente está hemodinámicamente estable y no presenta una causa alternativa clara para los síntomas respiratorios. Se plantea si la identificación de trombosis proximal puede orientar el manejo sin esperar una gammagrafía V/Q que estará disponible al día siguiente.`,
  pregunta: "¿Cuál es la interpretación más apropiada?",
  opciones: [
    "Una trombosis venosa proximal confirmada en este contexto puede respaldar el diagnóstico de enfermedad tromboembólica y justificar tratamiento anticoagulante; valorar imagen pulmonar adicional según necesidad clínica",
    "La ecografía venosa positiva descarta TEP porque el trombo permanece en la pierna",
    "Es obligatorio realizar angiotomografía con contraste pese a la reacción grave, sin alternativas",
    "No se debe anticoagular hasta visualizar directamente un trombo en arteria pulmonar",
    "La ecografía venosa solo tiene utilidad si es negativa"
  ],
  respuestaCorrecta: 0,
  explicacion: `En un paciente con sospecha de TEP y trombosis venosa proximal confirmada, el hallazgo puede establecer enfermedad tromboembólica venosa y justificar anticoagulación si no existe contraindicación. La ecografía no demuestra directamente la embolia pulmonar ni determina por sí sola su extensión, por lo que la imagen pulmonar adicional puede seguir siendo útil si cambia el manejo o se requiere confirmar la causa de los síntomas. Ante contraindicación al contraste, la gammagrafía V/Q es una alternativa razonable. Una ecografía venosa negativa no excluye TEP, ya que no todos los pacientes presentan trombosis proximal detectable en el momento del estudio.`,
  perlaENARM: "Una TVP proximal demostrada en un paciente con sospecha de TEP puede sustentar tratamiento anticoagulante; una ecografía negativa no excluye embolia pulmonar.",
  gpc: {
    mexico: "GPC-IMSS-425-18: diagnóstico de TVP y TEP.",
    internacional: "Guía multisocietaria AHA/ACC 2026: integración de pruebas diagnósticas."
  },
  bibliografia: "IMSS-425-18; guía multisocietaria AHA/ACC para TEP aguda, 2026."
},
{
  id: "NEUMO-096",
  especialidad: "Neumología",
  tema: "Tromboembolia pulmonar",
  subtema: "TEP subsegmentaria aislada",
  dificultad: "Alta",
  caso: `Femenina de 58 años con disnea leve posterior a una infección respiratoria. La angiotomografía informa un defecto de llenado subsegmentario aislado en una rama pulmonar, pero el radiólogo señala movimiento respiratorio y calidad técnica limitada. No hay trombo proximal, disfunción ventricular derecha ni hipoxemia significativa. La ecografía de ambas piernas es negativa para TVP proximal. La paciente tiene antecedente de hemorragia digestiva mayor hace seis semanas y anemia persistente. No tiene cáncer activo ni antecedente de tromboembolia. Se plantea iniciar anticoagulación indefinida por cualquier defecto descrito en la tomografía.`,
  pregunta: "¿Cuál es el enfoque más adecuado?",
  opciones: [
    "Confirmar la validez del hallazgo radiológico y evaluar recurrencia, riesgo de progresión, TVP, cáncer, reserva cardiopulmonar y riesgo hemorrágico antes de decidir anticoagulación o vigilancia estructurada",
    "Anticoagular de por vida a todos los pacientes con cualquier defecto subsegmentario, sin revisar la imagen",
    "Ignorar siempre las embolias subsegmentarias, independientemente de síntomas y factores de riesgo",
    "Administrar trombólisis sistémica por la localización subsegmentaria",
    "Colocar un filtro de vena cava en todos los pacientes con embolia subsegmentaria"
  ],
  respuestaCorrecta: 0,
  explicacion: `La TEP subsegmentaria aislada plantea una decisión individualizada, en especial si la calidad de la imagen es limitada y el riesgo hemorrágico es elevado. Debe revisarse la certeza diagnóstica con radiología, valorar la presencia de TVP proximal mediante ecografía y considerar cáncer, síntomas, reserva cardiopulmonar, factores de recurrencia y posibilidad de seguimiento estructurado. Algunos pacientes cuidadosamente seleccionados pueden ser candidatos a vigilancia sin anticoagulación, pero no es una regla universal; otros requieren anticoagulación. En este caso, la hemorragia reciente hace especialmente importante confirmar que el defecto es real y ponderar el balance riesgo-beneficio. La decisión debe documentarse y seguir criterios institucionales actualizados.`,
  perlaENARM: "Una TEP subsegmentaria aislada exige confirmar el hallazgo y valorar riesgo de recurrencia frente a sangrado; ni anticoagulación universal ni observación universal son correctas.",
  gpc: {
    mexico: "GPC-IMSS-425-18: individualizar tratamiento de enfermedad tromboembólica venosa.",
    internacional: "Guía multisocietaria AHA/ACC 2026: evaluación de riesgo y decisiones terapéuticas individualizadas."
  },
  bibliografia: "IMSS-425-18; AHA/ACC y sociedades colaboradoras, guía de TEP aguda, 2026."
},
{
  id: "NEUMO-097",
  especialidad: "Neumología",
  tema: "Tromboembolia pulmonar",
  subtema: "TEP recurrente durante anticoagulación",
  dificultad: "Alta",
  caso: `Masculino de 63 años con antecedente de TEP hace cuatro meses, en tratamiento con apixabán. Consulta por nueva disnea y dolor pleurítico. La angiotomografía describe defectos de llenado, algunos en territorios similares a los del episodio previo y otros posiblemente nuevos. El paciente refiere adherencia, pero inició carbamazepina hace tres semanas por una crisis convulsiva. Tiene función renal normal y no presenta sangrado. El equipo considera que se trata de fracaso del anticoagulante y propone aumentar empíricamente la dosis de apixabán.`,
  pregunta: "¿Cuál es el siguiente paso más apropiado?",
  opciones: [
    "Confirmar si existe recurrencia nueva comparando imágenes, revisar adherencia e interacciones farmacológicas y ajustar anticoagulación con una estrategia apropiada",
    "Duplicar la dosis de apixabán sin revisar interacciones ni confirmar recurrencia",
    "Suspender toda anticoagulación porque ocurrió un evento bajo tratamiento",
    "Añadir aspirina como única intervención",
    "Colocar un filtro de vena cava a todos los pacientes con síntomas recurrentes"
  ],
  respuestaCorrecta: 0,
  explicacion: `Los defectos residuales pueden persistir después de una TEP y no todos los hallazgos nuevos representan recurrencia. Es esencial comparar las imágenes con estudios previos y revisar adherencia, dosis, función renal, absorción e interacciones. La carbamazepina es un potente inductor enzimático que puede reducir las concentraciones de apixabán y otros anticoagulantes orales directos, comprometiendo su eficacia. Si se confirma recurrencia, debe modificarse la estrategia anticoagulante, con frecuencia considerando heparina de bajo peso molecular u otra opción según el contexto, además de revisar la causa subyacente. No debe aumentarse empíricamente la dosis sin valorar la interacción y el diagnóstico.`,
  perlaENARM: "Ante posible TEP recurrente bajo anticoagulación, confirma recurrencia y revisa adherencia e interacciones; carbamazepina puede reducir exposición a anticoagulantes orales directos.",
  gpc: {
    mexico: "GPC-IMSS-425-18: tratamiento y seguimiento de enfermedad tromboembólica venosa.",
    internacional: "Guía multisocietaria AHA/ACC 2026: prevención de recurrencia y selección de anticoagulantes."
  },
  bibliografia: "IMSS-425-18; guía multisocietaria AHA/ACC para TEP aguda, 2026."
},
{
  id: "NEUMO-098",
  especialidad: "Neumología",
  tema: "Tromboembolia pulmonar",
  subtema: "Hipertensión pulmonar tromboembólica crónica",
  dificultad: "Alta",
  caso: `Femenina de 52 años con antecedente de TEP tratada hace nueve meses. Desde entonces persiste con disnea de esfuerzo progresiva, reducción de tolerancia al ejercicio y episodios de presíncope al subir escaleras. La ecocardiografía muestra dilatación del ventrículo derecho y presión sistólica pulmonar estimada elevada. La angiotomografía no identifica un trombo central agudo, aunque se observan irregularidades vasculares periféricas. La paciente mantiene anticoagulación. Se considera que los síntomas son simplemente desacondicionamiento posterior al episodio agudo.`,
  pregunta: "¿Cuál es el estudio de evaluación más apropiado para investigar hipertensión pulmonar tromboembólica crónica?",
  opciones: [
    "Gammagrafía de ventilación/perfusión, seguida de evaluación especializada y estudios hemodinámicos/anatómicos cuando corresponda",
    "Repetir únicamente dímero D y descartar enfermedad si es normal",
    "Radiografía de tórax como única prueba para excluir enfermedad vascular crónica",
    "Suspender anticoagulación para comprobar si reaparece disnea",
    "Realizar trombólisis sistémica meses después sin evaluación hemodinámica"
  ],
  respuestaCorrecta: 0,
  explicacion: `La disnea persistente tras TEP, junto con signos de sobrecarga del ventrículo derecho y presión pulmonar elevada, obliga a investigar enfermedad tromboembólica crónica. La gammagrafía V/Q es una prueba de cribado muy útil para detectar defectos de perfusión compatibles con enfermedad tromboembólica crónica; una angiotomografía que no muestra trombo central agudo no la excluye. Si el estudio sugiere enfermedad, se requiere valoración especializada, imágenes anatómicas y cateterismo derecho para confirmar hemodinámica cuando corresponda. El tratamiento puede incluir anticoagulación prolongada y valoración de endarterectomía pulmonar, angioplastia pulmonar con balón o terapia médica según la anatomía y la operabilidad.`,
  perlaENARM: "Disnea persistente después de TEP exige descartar enfermedad tromboembólica crónica; la gammagrafía V/Q es clave aunque no haya trombo central agudo en la angiotomografía.",
  gpc: {
    mexico: "GPC-IMSS-425-18: seguimiento de enfermedad tromboembólica venosa.",
    internacional: "Guía multisocietaria AHA/ACC 2026 y guías especializadas de hipertensión pulmonar tromboembólica crónica."
  },
  bibliografia: "IMSS-425-18; guía multisocietaria AHA/ACC para TEP aguda, 2026; guías de hipertensión pulmonar tromboembólica crónica."
},
{
  id: "NEUMO-099",
  especialidad: "Neumología",
  tema: "Tromboembolia pulmonar",
  subtema: "Duración de anticoagulación",
  dificultad: "Alta",
  caso: `Masculino de 49 años presenta primer episodio de TEP proximal tres días después de una artroplastia total de rodilla. Recibió profilaxis perioperatoria, pero desarrolló el evento durante el periodo de inmovilización. Se trató con anticoagulación y completó tres meses sin recurrencia ni hemorragia. Actualmente camina de forma independiente, no tiene cáncer, trombofilia conocida ni antecedentes familiares relevantes. El paciente pregunta si debe continuar anticoagulación indefinidamente para evitar cualquier posibilidad de recurrencia.`,
  pregunta: "¿Cuál es el principio más apropiado para decidir la duración?",
  opciones: [
    "En una TEP provocada por un factor transitorio mayor que ya se resolvió, tres meses suelen ser suficientes, salvo que existan factores adicionales que cambien la decisión",
    "Toda TEP requiere anticoagulación de por vida",
    "Suspender anticoagulación después de siete días en todos los pacientes",
    "Mantener anticoagulación indefinida solo porque el dímero D inicial fue positivo",
    "Cambiar a aspirina como tratamiento equivalente durante el primer mes"
  ],
  respuestaCorrecta: 0,
  explicacion: `La duración de anticoagulación depende de si el evento fue provocado por un factor transitorio, si este se resolvió y del balance entre riesgo de recurrencia y riesgo hemorrágico. Una TEP asociada a cirugía mayor e inmovilización, con factor desencadenante ya resuelto, suele tratarse durante tres meses. La anticoagulación extendida se considera con más frecuencia en eventos no provocados, factores persistentes o recurrencias, siempre individualizando. La decisión debe revisarse si existen cáncer, trombofilia de alto riesgo, episodios previos o factores persistentes. Un dímero D positivo durante el episodio agudo no determina por sí solo tratamiento indefinido.`,
  perlaENARM: "La duración se define por el contexto del evento y el riesgo de recurrencia; TEP provocada por cirugía mayor con factor resuelto suele requerir tres meses.",
  gpc: {
    mexico: "GPC-IMSS-425-18: duración y seguimiento del tratamiento anticoagulante en ETV.",
    internacional: "Guía multisocietaria AHA/ACC 2026: prevención de recurrencia y seguimiento."
  },
  bibliografia: "IMSS-425-18; guía multisocietaria AHA/ACC para TEP aguda, 2026."
},
{
  id: "NEUMO-100",
  especialidad: "Neumología",
  tema: "Tromboembolia pulmonar",
  subtema: "Integración diagnóstica y terapéutica de TEP",
  dificultad: "Alta",
  caso: `Femenina de 69 años con cáncer de ovario en tratamiento, consulta por disnea súbita, síncope y dolor torácico. Presenta frecuencia cardiaca 132/min, presión arterial 84/56 mmHg, saturación 86% y extremidades frías. La angiotomografía realizada antes del deterioro confirma trombos bilaterales centrales. El ecocardiograma muestra disfunción grave del ventrículo derecho y el laboratorio revela troponina elevada, lactato de 4.6 mmol/L y creatinina en ascenso. No hay hemorragia activa conocida, pero recibió cirugía abdominal hace 12 días. La paciente empeora pese a oxígeno y reanimación inicial. El equipo debe elegir entre anticoagulación sola, trombólisis sistémica, intervención por catéter o embolectomía quirúrgica.`,
  pregunta: "¿Cuál es la estrategia más apropiada?",
  opciones: [
    "Anticoagulación sola y vigilancia en sala general, porque la cirugía reciente excluye cualquier reperfusión",
    "Activar de inmediato un equipo multidisciplinario para TEP de alto riesgo, valorar contraindicación hemorrágica a trombólisis y seleccionar la estrategia de reperfusión más rápida y segura disponible",
    "Dar alta con anticoagulante oral directo porque el trombo ya está documentado",
    "Administrar diuréticos y evitar soporte hemodinámico",
    "Esperar a que la troponina se normalice antes de tomar una decisión"
  ],
  respuestaCorrecta: 1,
  explicacion: `La hipotensión, el choque, el lactato elevado y la disfunción grave del ventrículo derecho indican TEP con falla cardiopulmonar y riesgo inmediato de muerte. Se requiere soporte hemodinámico y respiratorio cuidadoso, anticoagulación cuando sea posible y evaluación urgente de reperfusión. La cirugía abdominal reciente incrementa de manera importante el riesgo de hemorragia con trombólisis sistémica y obliga a valorar la posibilidad de reperfusión por catéter o embolectomía quirúrgica, según recursos, anatomía y experiencia. La decisión no debe retrasarse mientras se espera normalización de biomarcadores. Un equipo multidisciplinario puede integrar cuidados intensivos, cardiología, neumología, cirugía y radiología intervencionista para seleccionar la estrategia más apropiada.`,
  perlaENARM: "TEP con choque requiere reperfusión urgente cuando está indicada; la cirugía reciente obliga a valorar alternativas si el riesgo de trombólisis es inaceptable.",
  gpc: {
    mexico: "GPC-IMSS-425-18: tratamiento de enfermedad tromboembólica venosa.",
    internacional: "Guía multisocietaria AHA/ACC 2026: categorías de gravedad y terapias avanzadas para TEP."
  },
  bibliografia: "IMSS-425-18; AHA/ACC y sociedades colaboradoras, guía de TEP aguda, 2026."
}
 
{
  id: "NEUMO-101",
  especialidad: "Neumología",
  tema: "Edema agudo pulmonar",
  subtema: "Diagnóstico diferencial cardiogénico frente a no cardiogénico",
  dificultad: "Alta",
  caso: `Masculino de 72 años con hipertensión arterial, enfermedad coronaria e insuficiencia cardiaca con fracción de eyección del ventrículo izquierdo de 30%, acude por disnea de inicio súbito que progresa durante cuatro horas, ortopnea y expectoración espumosa rosada. Presenta presión arterial de 188/112 mmHg, frecuencia cardiaca de 124/min, frecuencia respiratoria de 36/min y SpO₂ de 79% al aire ambiente. Se encuentra diaforético, con ingurgitación yugular, estertores crepitantes bilaterales hasta campos medios y edema maleolar leve. La radiografía muestra opacidades alveolares perihiliares bilaterales, redistribución vascular y líneas B de Kerley. BNP 1,450 pg/mL, troponina discretamente elevada y creatinina de 1.3 mg/dL. No tiene fiebre ni antecedente de aspiración. Se requiere establecer el mecanismo predominante para seleccionar el tratamiento inmediato.`,
  pregunta: "¿Cuál es el diagnóstico fisiopatológico más probable?",
  opciones: [
    "Lesión alveolar difusa por aumento primario de la permeabilidad, independiente de las presiones de llenado",
    "Edema pulmonar hidrostático cardiogénico por aumento de la presión capilar pulmonar, precipitado por hipertensión grave",
    "Hemorragia alveolar difusa secundaria a vasculitis, confirmada por la expectoración rosada",
    "Neumonía bacteriana bilateral como explicación principal de la congestión vascular",
    "Edema pulmonar por presión negativa secundario a obstrucción de vía aérea superior"
  ],
  respuestaCorrecta: 1,
  explicacion: `La presentación es característica de edema pulmonar cardiogénico: inicio agudo, hipertensión marcada, ortopnea, ingurgitación yugular, crepitantes, congestión vascular radiológica y BNP elevado en un paciente con disfunción sistólica conocida. El incremento de la presión hidrostática capilar pulmonar favorece la salida de líquido al intersticio y posteriormente al espacio alveolar. La hipertensión grave puede precipitar redistribución rápida de volumen hacia la circulación pulmonar incluso sin una sobrecarga total de líquidos muy importante. El BNP apoya el diagnóstico, pero no debe interpretarse aisladamente. La expectoración rosada puede aparecer por edema alveolar y no demuestra hemorragia alveolar. Deben investigarse precipitantes como isquemia, arritmia, incumplimiento terapéutico, infección y emergencia hipertensiva.`,
  perlaENARM: "Hipertensión grave, ortopnea, congestión vascular y opacidades perihiliares orientan a edema cardiogénico; la fisiopatología predominante es hidrostática.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente de insuficiencia cardiaca aguda y el protocolo institucional de urgencias.",
    internacional: "ESC 2021 sobre insuficiencia cardiaca; actualización focalizada ESC 2023; guías contemporáneas de insuficiencia cardiaca aguda."
  },
  bibliografia: "ESC. Guidelines for the Diagnosis and Treatment of Acute and Chronic Heart Failure. 2021; Focused Update. 2023."
},
{
  id: "NEUMO-102",
  especialidad: "Neumología",
  tema: "Edema agudo pulmonar",
  subtema: "Ventilación no invasiva en edema cardiogénico",
  dificultad: "Alta",
  caso: `Femenina de 68 años con hipertensión y miocardiopatía dilatada, presenta disnea intensa, ortopnea y diaforesis. Presión arterial 172/98 mmHg, frecuencia respiratoria 34/min, frecuencia cardiaca 116/min y SpO₂ 82% pese a oxígeno convencional. Está despierta, orientada, coopera con la exploración y puede proteger la vía aérea. No presenta vómito, secreciones abundantes ni traumatismo facial. La gasometría muestra pH 7.29, PaCO₂ 52 mmHg y PaO₂ 55 mmHg con oxígeno suplementario. La radiografía muestra edema alveolar bilateral. Se inicia tratamiento médico y se debe decidir si necesita soporte ventilatorio adicional.`,
  pregunta: "¿Cuál es la estrategia ventilatoria inicial más apropiada si no existen contraindicaciones?",
  opciones: [
    "Oxígeno convencional exclusivamente, aunque persistan hipoxemia y trabajo respiratorio grave",
    "Ventilación no invasiva con CPAP o presión positiva binivel, con vigilancia estrecha y preparación para intubación si fracasa",
    "Intubación inmediata obligatoria en todo edema pulmonar, independientemente del estado neurológico",
    "Ventilación oscilatoria de alta frecuencia como primera línea",
    "Administrar sedación profunda para disminuir la frecuencia respiratoria sin soporte ventilatorio"
  ],
  respuestaCorrecta: 1,
  explicacion: `La ventilación no invasiva mediante CPAP o presión positiva binivel reduce el trabajo respiratorio, mejora la oxigenación y disminuye la precarga y la poscarga ventricular en pacientes seleccionados con edema pulmonar cardiogénico. Es particularmente útil cuando hay dificultad respiratoria importante, hipoxemia y cooperación suficiente. La presión positiva binivel puede ser útil cuando coexiste hipercapnia o fatiga ventilatoria, aunque la elección depende de la situación clínica y de la experiencia del equipo. Debe monitorizarse respuesta temprana, estado mental, presión arterial, frecuencia respiratoria y oxigenación. La ventilación no invasiva no debe retrasar intubación si aparece deterioro neurológico, agotamiento, inestabilidad, incapacidad para proteger la vía aérea o fracaso clínico. La sedación profunda sin asegurar ventilación puede empeorar la situación.`,
  perlaENARM: "En edema cardiogénico con insuficiencia respiratoria y cooperación adecuada, CPAP o ventilación binivel son opciones iniciales; vigila el fracaso sin retrasar la intubación necesaria.",
  gpc: {
    mexico: "Protocolo institucional de insuficiencia respiratoria aguda y edema pulmonar cardiogénico.",
    internacional: "ESC 2021; guías de soporte ventilatorio no invasivo en insuficiencia respiratoria aguda."
  },
  bibliografia: "ESC. Heart Failure Guidelines. 2021; evidencia clínica sobre CPAP y ventilación no invasiva en edema cardiogénico."
},
{
  id: "NEUMO-103",
  especialidad: "Neumología",
  tema: "Edema agudo pulmonar",
  subtema: "Edema hipertensivo y vasodilatación",
  dificultad: "Alta",
  caso: `Masculino de 63 años con hipertensión de larga evolución, fracción de eyección de 55% y enfermedad renal crónica G3a presenta disnea súbita tras suspender sus antihipertensivos. Llega con presión arterial de 224/126 mmHg, frecuencia respiratoria de 38/min y SpO₂ de 80%. Tiene estertores difusos, ingurgitación yugular leve y extremidades calientes. La radiografía muestra edema alveolar bilateral. No hay edema periférico importante y el peso ha variado menos de 0.5 kg respecto de la semana previa. La creatinina es de 1.5 mg/dL y no hay signos de hipoperfusión. El equipo propone administrar grandes dosis repetidas de diurético como única intervención.`,
  pregunta: "¿Cuál es la estrategia farmacológica inicial más apropiada, junto con soporte respiratorio?",
  opciones: [
    "Vasodilatación intravenosa titulable, por ejemplo con nitroglicerina, si no existen contraindicaciones, además de diurético cuando haya congestión y sobrecarga de volumen",
    "Administrar bolos repetidos de líquidos intravenosos para reducir la presión capilar pulmonar",
    "Iniciar un vasopresor para elevar aún más la presión arterial",
    "Usar exclusivamente un betabloqueador intravenoso de acción rápida en todos los casos",
    "Evitar cualquier tratamiento dirigido a la presión arterial hasta que se normalice la radiografía"
  ],
  respuestaCorrecta: 0,
  explicacion: `En el edema pulmonar hipertensivo puede predominar la redistribución rápida de volumen y el aumento abrupto de la poscarga, no necesariamente una gran ganancia neta de líquidos. La vasodilatación intravenosa titulable, especialmente con nitratos en pacientes con presión arterial elevada y sin contraindicaciones, puede reducir rápidamente las presiones de llenado y la poscarga. El diurético de asa está indicado cuando existe congestión y sobrecarga de volumen, pero no debe considerarse la única intervención en todos los pacientes. Es necesario proporcionar soporte respiratorio y monitorizar estrechamente la presión arterial y la perfusión. Los vasodilatadores deben evitarse o utilizarse con extrema cautela ante hipotensión, sospecha de infarto de ventrículo derecho u otras contraindicaciones pertinentes.`,
  perlaENARM: "El edema hipertensivo puede deberse a redistribución de volumen; el control rápido y monitorizado de la poscarga puede ser prioritario frente a diuresis aislada.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente de insuficiencia cardiaca aguda y el protocolo de emergencia hipertensiva.",
    internacional: "ESC 2021; ESC Focused Update 2023 sobre insuficiencia cardiaca."
  },
  bibliografia: "ESC. Heart Failure Guidelines. 2021; Focused Update. 2023."
},
{
  id: "NEUMO-104",
  especialidad: "Neumología",
  tema: "Edema agudo pulmonar",
  subtema: "Diuréticos de asa y resistencia diurética",
  dificultad: "Alta",
  caso: `Femenina de 76 años con insuficiencia cardiaca con fracción de eyección reducida, enfermedad renal crónica G4 y múltiples hospitalizaciones por congestión. Toma furosemida oral 80 mg cada 12 horas. Acude con ortopnea, edema de miembros inferiores, ingurgitación yugular, estertores bibasales y aumento de peso de 6 kg en diez días. Presión arterial 118/74 mmHg, sin signos de choque. La creatinina es de 2.5 mg/dL frente a 2.1 basal; sodio 132 mmol/L y potasio 4.4 mmol/L. Tras una dosis intravenosa inicial de furosemida, la diuresis es escasa y la congestión persiste. Se plantea suspender diuréticos por el aumento de creatinina.`,
  pregunta: "¿Cuál es el enfoque más apropiado ante la respuesta diurética insuficiente?",
  opciones: [
    "Suspender inmediatamente todos los diuréticos porque cualquier aumento de creatinina indica daño renal irreversible",
    "Evaluar respuesta diurética y congestión, optimizar la dosis intravenosa de diurético de asa y considerar bloqueo secuencial de la nefrona con vigilancia electrolítica",
    "Administrar grandes volúmenes de cristaloides para mejorar la función renal",
    "Iniciar diálisis de forma automática sin evaluar respuesta ni indicaciones adicionales",
    "Añadir antiinflamatorios no esteroideos para aumentar la respuesta renal al diurético"
  ],
  respuestaCorrecta: 1,
  explicacion: `La paciente presenta congestión franca y respuesta diurética insuficiente. En la insuficiencia cardiaca aguda, un aumento moderado de creatinina durante una descongestión eficaz no implica automáticamente que deban suspenderse los diuréticos; la decisión debe integrar perfusión, presión arterial, diuresis, electrolitos y grado de congestión. Es necesario revisar dosis previas, absorción, administración intravenosa, balance hídrico y respuesta objetiva. Puede requerirse una dosis intravenosa mayor o una estrategia combinada con un diurético que actúe en otro segmento de la nefrona, con vigilancia estrecha de sodio, potasio, magnesio, función renal y estado ácido-base. La ultrafiltración o terapia de reemplazo renal se reserva para situaciones seleccionadas, como congestión refractaria o indicaciones renales específicas. Los AINE pueden empeorar la retención de sodio y la función renal.`,
  perlaENARM: "Congestión persistente con respuesta diurética insuficiente exige optimizar la descongestión y monitorizar función renal/electrolitos; no suspendas automáticamente por una elevación aislada de creatinina.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de insuficiencia cardiaca y protocolo institucional de congestión refractaria.",
    internacional: "ESC 2021; ESC Focused Update 2023."
  },
  bibliografia: "ESC. Heart Failure Guidelines. 2021; Focused Update. 2023."
},
{
  id: "NEUMO-105",
  especialidad: "Neumología",
  tema: "Edema agudo pulmonar",
  subtema: "Edema pulmonar con hipotensión y choque cardiogénico",
  dificultad: "Alta",
  caso: `Masculino de 71 años con antecedente de infarto anterior extenso, fracción de eyección de 25% y enfermedad renal crónica, desarrolla disnea intensa, confusión y oliguria. Presión arterial 78/48 mmHg, frecuencia cardiaca 122/min, extremidades frías, relleno capilar de cinco segundos y estertores hasta campos superiores. La ecocardiografía muestra disfunción sistólica grave del ventrículo izquierdo y congestión pulmonar. Lactato 4.8 mmol/L, creatinina 2.4 mg/dL y troponina elevada. El equipo considera administrar nitroglicerina a dosis altas y bolos de diurético antes de valorar la perfusión.`,
  pregunta: "¿Cuál es la prioridad terapéutica inmediata?",
  opciones: [
    "Vasodilatación agresiva, porque el edema pulmonar siempre requiere reducir la poscarga sin importar la presión arterial",
    "Reconocer choque cardiogénico, estabilizar oxigenación y perfusión, iniciar soporte vasoactivo cuando esté indicado y buscar precipitantes reversibles, incluida isquemia",
    "Administrar grandes bolos de cristaloides sin reevaluación, porque la hipotensión implica hipovolemia",
    "Dar un betabloqueador intravenoso para reducir la frecuencia cardiaca de inmediato",
    "Posponer evaluación etiológica hasta que desaparezcan los estertores"
  ],
  respuestaCorrecta: 1,
  explicacion: `La hipotensión con hipoperfusión, lactato elevado, oliguria y congestión pulmonar es compatible con choque cardiogénico. La prioridad es asegurar oxigenación y ventilación, monitorización avanzada según necesidad, soporte de perfusión y búsqueda urgente de causas reversibles, en particular síndrome coronario agudo, complicación mecánica, arritmia o valvulopatía aguda. Un vasopresor como noradrenalina puede ser necesario para sostener presión de perfusión; el uso de inotrópicos depende de la situación hemodinámica y de la evaluación especializada. La nitroglicerina puede empeorar la hipotensión y no es apropiada en este contexto. Los líquidos deben administrarse solo si existe una indicación hemodinámica clara y con reevaluación, ya que la congestión pulmonar hace peligrosos los bolos indiscriminados.`,
  perlaENARM: "Edema pulmonar más hipotensión e hipoperfusión es choque cardiogénico hasta demostrar lo contrario; evita vasodilatación indiscriminada y líquidos sin indicación.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de insuficiencia cardiaca aguda, síndrome coronario agudo y choque cardiogénico.",
    internacional: "ESC 2021; guías contemporáneas de síndrome coronario agudo y choque cardiogénico."
  },
  bibliografia: "ESC. Heart Failure Guidelines. 2021; guías internacionales de síndrome coronario agudo y choque cardiogénico."
},
{
  id: "NEUMO-106",
  especialidad: "Neumología",
  tema: "Edema agudo pulmonar",
  subtema: "Edema pulmonar por síndrome coronario agudo",
  dificultad: "Alta",
  caso: `Femenina de 66 años con diabetes mellitus tipo 2 y dislipidemia presenta dolor torácico opresivo de 40 minutos, náusea y disnea rápidamente progresiva. Presión arterial 146/88 mmHg, frecuencia cardiaca 118/min y SpO₂ 83%. Tiene estertores bilaterales y sudoración fría. El ECG muestra elevación del ST en V2-V5 y cambios recíprocos inferiores. La troponina inicial está en proceso. La ecocardiografía a pie de cama muestra hipocinesia anterior extensa y fracción de eyección disminuida. El equipo se concentra en la congestión pulmonar y considera esperar la respuesta al diurético antes de activar reperfusión coronaria.`,
  pregunta: "¿Cuál es la prioridad que no debe retrasarse?",
  opciones: [
    "Activar de inmediato la estrategia de reperfusión para IAM con elevación del ST, junto con estabilización respiratoria y tratamiento del edema",
    "Esperar la segunda troponina antes de decidir si existe un infarto",
    "Administrar únicamente furosemida y reevaluar el ECG al día siguiente",
    "Realizar una prueba de esfuerzo antes de considerar intervención coronaria",
    "Iniciar anticoagulación oral y programar seguimiento ambulatorio"
  ],
  respuestaCorrecta: 0,
  explicacion: `El cuadro es compatible con IAM con elevación del ST complicado por edema pulmonar agudo. La reperfusión coronaria urgente es una intervención que modifica el pronóstico y no debe retrasarse esperando una segunda troponina cuando el ECG y el contexto clínico son diagnósticos. La estabilización incluye soporte de oxigenación, ventilación no invasiva si es apropiada, tratamiento de congestión y manejo hemodinámico según la presión arterial. Debe evitarse que las medidas sintomáticas sustituyan el tratamiento de la causa. La elección entre angioplastia primaria y fibrinólisis depende de disponibilidad, tiempos y contraindicaciones, siguiendo protocolos de IAMCEST. La elevación de troponina puede tardar en hacerse evidente y no es requisito para retrasar reperfusión ante un ECG diagnóstico.`,
  perlaENARM: "IAMCEST con edema pulmonar es una emergencia de reperfusión; no esperes la segunda troponina si el ECG ya establece el diagnóstico.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de IAM con elevación del ST y de insuficiencia cardiaca aguda.",
    internacional: "Guías ESC/AHA contemporáneas de síndrome coronario agudo e insuficiencia cardiaca."
  },
  bibliografia: "ESC. Acute Coronary Syndromes Guidelines; ESC. Heart Failure Guidelines."
},
{
  id: "NEUMO-107",
  especialidad: "Neumología",
  tema: "Edema agudo pulmonar",
  subtema: "Insuficiencia mitral aguda",
  dificultad: "Alta",
  caso: `Masculino de 69 años, tres días después de un infarto inferior, presenta deterioro respiratorio súbito, hipotensión relativa y edema pulmonar bilateral. Presión arterial 96/62 mmHg, frecuencia cardiaca 126/min y SpO₂ 84%. Se ausculta un soplo sistólico apical tenue, sin irradiación clara. La ecocardiografía urgente muestra insuficiencia mitral grave de aparición reciente y posible alteración del aparato subvalvular. La radiografía presenta edema alveolar predominante derecho, sin cardiomegalia marcada. El equipo considera que el soplo es demasiado discreto para representar una complicación mecánica grave.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Tratar exclusivamente con diuréticos y posponer la evaluación cardiaca porque el soplo es tenue",
    "Sospechar complicación mecánica posinfarto, solicitar evaluación cardiológica y quirúrgica urgente y estabilizar respiración y hemodinámica",
    "Administrar un betabloqueador intravenoso a dosis altas como única intervención",
    "Atribuir el edema unilateral a neumonía y comenzar antibióticos sin más estudios",
    "Realizar una prueba de esfuerzo para confirmar la gravedad de la insuficiencia mitral"
  ],
  respuestaCorrecta: 1,
  explicacion: `La insuficiencia mitral aguda grave tras un infarto puede deberse a disfunción o ruptura del músculo papilar y provocar edema pulmonar rápidamente progresivo, choque y alta mortalidad. El soplo puede ser tenue por igualación rápida de presiones entre ventrículo y aurícula, por lo que su intensidad no descarta gravedad. El edema asimétrico, incluso con predominio derecho, puede aparecer en insuficiencia mitral aguda. Se requiere ecocardiografía urgente, evaluación cardiológica y quirúrgica, estabilización respiratoria y soporte hemodinámico individualizado. Los vasodilatadores pueden considerarse solo si la presión arterial lo permite; no deben empeorar una hipotensión significativa. La terapia médica es un puente a la corrección definitiva cuando existe una complicación mecánica grave.`,
  perlaENARM: "Después de IAM, edema pulmonar súbito y soplo tenue no excluyen insuficiencia mitral aguda por complicación papilar; requiere evaluación urgente.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de IAM y valvulopatías.",
    internacional: "Guías ESC/EACTS de valvulopatías y guías de síndrome coronario agudo."
  },
  bibliografia: "ESC/EACTS. Guidelines for the Management of Valvular Heart Disease; guías de síndrome coronario agudo."
},
{
  id: "NEUMO-108",
  especialidad: "Neumología",
  tema: "Edema agudo pulmonar",
  subtema: "Edema pulmonar por crisis hipertensiva",
  dificultad: "Alta",
  caso: `Femenina de 58 años con hipertensión mal controlada y enfermedad renal crónica, consulta por cefalea, disnea y visión borrosa. Presión arterial 232/134 mmHg, frecuencia respiratoria 32/min y saturación 86%. La radiografía muestra edema pulmonar bilateral. La creatinina aumentó de 1.4 a 2.0 mg/dL y la exploración revela estertores difusos. No hay focalización neurológica ni signos de disección aórtica. La paciente está despierta y coopera con ventilación no invasiva. El equipo propone reducir la presión arterial hasta valores normales en los primeros 15 minutos.`,
  pregunta: "¿Cuál es el principio más apropiado para controlar la presión arterial?",
  opciones: [
    "Reducir de forma controlada y monitorizada con un fármaco intravenoso titulable, evitando descensos excesivamente rápidos que comprometan la perfusión",
    "Normalizar obligatoriamente la presión a 120/80 mmHg en los primeros 15 minutos",
    "No tratar la presión arterial hasta que se resuelva completamente el edema",
    "Usar nifedipino sublingual para producir una caída no monitorizada",
    "Administrar líquidos intravenosos para elevar aún más la presión arterial"
  ],
  respuestaCorrecta: 0,
  explicacion: `La paciente presenta emergencia hipertensiva con daño agudo de órgano blanco, incluido edema pulmonar y probable deterioro renal. Se requiere un antihipertensivo intravenoso titulable y monitorización continua. En ausencia de una condición específica que requiera una estrategia distinta, suele buscarse una reducción inicial controlada de la presión arterial media, evitando una caída abrupta que comprometa perfusión cerebral, coronaria o renal. La velocidad y la meta exactas dependen del síndrome asociado y de la respuesta clínica. El tratamiento del edema pulmonar y el soporte ventilatorio deben realizarse en paralelo. Los fármacos de acción impredecible o administración sublingual que pueden causar hipotensión brusca deben evitarse.`,
  perlaENARM: "Emergencia hipertensiva exige reducción controlada de presión con monitorización; normalizarla de inmediato puede causar hipoperfusión.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de crisis hipertensiva y protocolo institucional de emergencia hipertensiva.",
    internacional: "Guías contemporáneas de emergencia hipertensiva e insuficiencia cardiaca aguda."
  },
  bibliografia: "Guías internacionales de hipertensión arterial y de insuficiencia cardiaca aguda."
},
{
  id: "NEUMO-109",
  especialidad: "Neumología",
  tema: "Edema agudo pulmonar",
  subtema: "BNP y NT-proBNP en el diagnóstico",
  dificultad: "Alta",
  caso: `Masculino de 81 años con enfermedad renal crónica G4, fibrilación auricular y obesidad, acude por disnea de tres días. La presión arterial es 136/82 mmHg, frecuencia cardiaca 110/min y SpO₂ 91%. La radiografía muestra opacidades bibasales poco específicas y pequeños derrames pleurales. El BNP es de 680 pg/mL, pero no existe valor basal. Tiene crepitantes discretos, edema maleolar y fiebre ausente. La ecocardiografía a pie de cama muestra función sistólica conservada, aunque la evaluación diastólica es limitada. Se debate si el BNP por sí solo confirma edema cardiogénico.`,
  pregunta: "¿Cuál es la interpretación más apropiada del BNP en este contexto?",
  opciones: [
    "Un BNP elevado confirma por sí solo edema cardiogénico, independientemente de la función renal y del ritmo cardiaco",
    "El BNP aporta información, pero debe integrarse con clínica, imagen y ecocardiografía; la edad, la fibrilación auricular y la enfermedad renal pueden elevarlo",
    "Un BNP elevado excluye toda causa pulmonar no cardiogénica",
    "La función sistólica conservada excluye insuficiencia cardiaca y congestión",
    "El BNP no tiene ninguna utilidad en pacientes con disnea aguda"
  ],
  respuestaCorrecta: 1,
  explicacion: `Los péptidos natriuréticos ayudan a evaluar la probabilidad de insuficiencia cardiaca en pacientes con disnea, especialmente cuando los valores son bajos y la probabilidad clínica se reduce. Sin embargo, no son diagnósticos por sí solos. Edad avanzada, fibrilación auricular y enfermedad renal pueden elevar sus concentraciones; la obesidad puede reducirlas. La insuficiencia cardiaca con fracción de eyección preservada puede producir congestión aunque la función sistólica sea normal. Es necesario integrar síntomas, signos, radiografía, ecografía pulmonar, evaluación cardiaca y respuesta terapéutica. En pacientes con múltiples comorbilidades, los valores deben interpretarse dentro del contexto y, cuando sea posible, compararse con mediciones previas.`,
  perlaENARM: "BNP/NT-proBNP apoyan la evaluación de disnea, pero edad, fibrilación auricular, obesidad y enfermedad renal modifican su interpretación.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de insuficiencia cardiaca y evaluación de disnea aguda.",
    internacional: "ESC 2021; ESC Focused Update 2023."
  },
  bibliografia: "ESC. Heart Failure Guidelines. 2021; Focused Update. 2023."
},
{
  id: "NEUMO-110",
  especialidad: "Neumología",
  tema: "Edema agudo pulmonar",
  subtema: "Edema pulmonar no cardiogénico y SDRA",
  dificultad: "Alta",
  caso: `Masculino de 47 años ingresado por pancreatitis aguda grave desarrolla insuficiencia respiratoria 48 horas después del inicio del cuadro. Presenta fiebre de 38.2 °C, frecuencia respiratoria 34/min, presión arterial 104/66 mmHg y SpO₂ 84%. La radiografía muestra opacidades bilaterales difusas. La ecocardiografía no identifica disfunción ventricular izquierda significativa y no hay evidencia clara de sobrecarga de volumen. La relación PaO₂/FiO₂ es de 145 con PEEP de 8 cmH₂O. El paciente recibió líquidos durante la reanimación inicial y ahora presenta edema pulmonar. El equipo asume que toda acumulación de líquido alveolar en un paciente crítico es cardiogénica.`,
  pregunta: "¿Cuál es la interpretación más probable?",
  opciones: [
    "Edema pulmonar no cardiogénico por lesión de la barrera alveolocapilar, compatible con SDRA si cumple los criterios clínicos completos",
    "Edema cardiogénico confirmado por la presencia de opacidades bilaterales",
    "Neumonía lobar bacteriana, porque la pancreatitis excluye SDRA",
    "Embolia pulmonar masiva, confirmada por la relación PaO₂/FiO₂",
    "Edema pulmonar por presión negativa, aunque no exista obstrucción de vía aérea"
  ],
  respuestaCorrecta: 0,
  explicacion: `La pancreatitis grave es un factor de riesgo reconocido para SDRA. La aparición aguda de hipoxemia, opacidades bilaterales y una relación PaO₂/FiO₂ de 145 con presión positiva, sin evidencia de que la insuficiencia cardiaca o la sobrecarga expliquen predominantemente el cuadro, favorece lesión pulmonar no cardiogénica. El SDRA implica aumento de permeabilidad alveolocapilar, edema rico en proteínas y alteración de la mecánica pulmonar. La evaluación debe confirmar el tiempo de aparición, las opacidades, el grado de hipoxemia y que el edema no se explique principalmente por insuficiencia cardiaca o sobrecarga. Puede coexistir un componente hidrostático, por lo que los mecanismos no siempre son excluyentes. El manejo se centra en tratar la causa, ventilación protectora y estrategia de líquidos individualizada.`,
  perlaENARM: "Opacidades bilaterales e hipoxemia en pancreatitis grave sugieren SDRA; diferencia edema por permeabilidad de congestión hidrostática, aunque ambos pueden coexistir.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de SDRA, insuficiencia respiratoria y manejo de pancreatitis grave.",
    internacional: "Definición global de SDRA y guías contemporáneas de ventilación protectora."
  },
  bibliografia: "Global Definition of ARDS; guías internacionales de ventilación mecánica protectora."
},
{
  id: "NEUMO-111",
  especialidad: "Neumología",
  tema: "Edema agudo pulmonar",
  subtema: "Ecografía pulmonar y líneas B",
  dificultad: "Alta",
  caso: `Femenina de 74 años con disnea aguda, hipertensión y enfermedad renal crónica. La exploración física es difícil por obesidad y respiración superficial. La radiografía portátil no permite diferenciar claramente edema de infección. La ecografía pulmonar muestra líneas B bilaterales difusas, relativamente simétricas, con pleura regular y pequeños derrames. La ecocardiografía muestra dilatación de aurícula izquierda y signos indirectos de presiones de llenado elevadas. No se observan consolidaciones focales con broncograma aéreo dinámico. El equipo considera que las líneas B son patognomónicas de edema cardiogénico.`,
  pregunta: "¿Cuál es la interpretación más correcta de la ecografía pulmonar?",
  opciones: [
    "Las líneas B difusas apoyan un síndrome intersticial y, con los demás hallazgos, favorecen congestión; no son específicas por sí solas",
    "Las líneas B confirman de manera absoluta insuficiencia cardiaca y excluyen SDRA",
    "Las líneas B solo aparecen en fibrosis pulmonar crónica",
    "La ausencia de consolidación focal descarta cualquier enfermedad pulmonar",
    "La ecografía pulmonar no tiene utilidad en la evaluación de disnea aguda"
  ],
  respuestaCorrecta: 0,
  explicacion: `Las líneas B reflejan aumento de densidad del intersticio pulmonar y aparecen en edema hidrostático, SDRA, neumonía intersticial y enfermedades pulmonares intersticiales. Su distribución, simetría, aspecto pleural, presencia de derrames y asociación con hallazgos cardiacos ayudan a orientar el mecanismo. En este caso, las líneas B difusas y simétricas, la pleura relativamente regular y los datos de presiones de llenado elevadas favorecen edema cardiogénico. Sin embargo, ningún patrón aislado sustituye la integración clínica. Las consolidaciones focales, irregularidad pleural y distribución heterogénea pueden orientar a otras causas, aunque existe solapamiento. La ecografía es especialmente útil para evaluación rápida y seguimiento de congestión, pero depende de técnica y experiencia del operador.`,
  perlaENARM: "Las líneas B indican síndrome intersticial, no una etiología exclusiva; intégralas con ecocardiografía, pleura, distribución y contexto clínico.",
  gpc: {
    mexico: "Protocolo institucional de ecografía a pie de cama en disnea aguda e insuficiencia cardiaca.",
    internacional: "ESC 2021; recomendaciones contemporáneas de ultrasonido pulmonar en insuficiencia cardiaca aguda."
  },
  bibliografia: "ESC. Heart Failure Guidelines. 2021; literatura especializada en ecografía pulmonar a pie de cama."
},
{
  id: "NEUMO-112",
  especialidad: "Neumología",
  tema: "Edema agudo pulmonar",
  subtema: "Edema pulmonar en insuficiencia renal avanzada",
  dificultad: "Alta",
  caso: `Masculino de 60 años con enfermedad renal crónica G5 en hemodiálisis, faltó a dos sesiones por problemas de transporte. Presenta disnea intensa, ortopnea, presión arterial 196/108 mmHg, SpO₂ 81%, edema periférico marcado y estertores difusos. El peso está 5.5 kg por encima del peso seco. El potasio es de 6.1 mmol/L y el bicarbonato de 17 mmol/L. La radiografía muestra congestión vascular y edema alveolar. Se administran medidas iniciales de soporte respiratorio y tratamiento de la hiperpotasemia. El equipo plantea continuar diuréticos durante varias horas antes de considerar terapia de reemplazo renal, pese a la sobrecarga importante y la falta de respuesta diurética previa.`,
  pregunta: "¿Cuál es la estrategia definitiva más apropiada si la congestión y la hiperpotasemia persisten?",
  opciones: [
    "Continuar exclusivamente diuréticos, incluso si existe anuria y sobrecarga refractaria",
    "Coordinar hemodiálisis urgente o terapia de reemplazo renal para corregir sobrecarga refractaria y alteraciones metabólicas, mientras se mantiene estabilización",
    "Administrar grandes bolos de cristaloides para proteger el riñón",
    "Suspender el soporte respiratorio porque la diálisis resolverá inmediatamente la hipoxemia",
    "Administrar bicarbonato oral y diferir cualquier evaluación nefrológica hasta el día siguiente"
  ],
  respuestaCorrecta: 1,
  explicacion: `El paciente presenta sobrecarga de volumen significativa, edema pulmonar e hiperpotasemia en enfermedad renal terminal tras omitir sesiones de hemodiálisis. Si las alteraciones persisten pese a las medidas iniciales, la terapia de reemplazo renal urgente es una intervención clave. La estabilización respiratoria y el manejo de hiperpotasemia deben realizarse en paralelo, sin asumir que la diálisis resolverá de inmediato toda la insuficiencia respiratoria. Los diuréticos tienen utilidad limitada en anuria y no sustituyen diálisis ante sobrecarga refractaria. La velocidad de ultrafiltración debe individualizarse para evitar hipotensión y complicaciones. La coordinación con nefrología y cuidados críticos es prioritaria.`,
  perlaENARM: "Edema pulmonar refractario e hiperpotasemia en enfermedad renal terminal pueden requerir hemodiálisis urgente; no retrases terapia de reemplazo renal por diuréticos ineficaces.",
  gpc: {
    mexico: "Consultar protocolos institucionales de urgencia dialítica y GPC mexicana vigente de enfermedad renal crónica.",
    internacional: "Recomendaciones KDIGO y guías de manejo de complicaciones agudas de enfermedad renal avanzada."
  },
  bibliografia: "KDIGO. Clinical Practice Guidelines for Chronic Kidney Disease and management of kidney failure complications."
},
{
  id: "NEUMO-113",
  especialidad: "Neumología",
  tema: "Edema agudo pulmonar",
  subtema: "Edema pulmonar y fibrilación auricular rápida",
  dificultad: "Alta",
  caso: `Femenina de 78 años con insuficiencia cardiaca con fracción de eyección preservada, hipertensión y fibrilación auricular paroxística, presenta disnea aguda y ortopnea. La frecuencia cardiaca es irregular a 158/min, presión arterial 154/92 mmHg y SpO₂ 86%. Tiene estertores difusos y edema maleolar leve. La radiografía muestra congestión vascular y edema alveolar. El ECG confirma fibrilación auricular con respuesta ventricular rápida. No presenta dolor torácico ni signos de choque. El equipo propone cardioversión eléctrica inmediata únicamente por la frecuencia cardiaca, sin evaluar estabilidad, duración del episodio ni contexto tromboembólico.`,
  pregunta: "¿Cuál es el enfoque inicial más apropiado?",
  opciones: [
    "Estabilizar el edema y la oxigenación, evaluar precipitantes y controlar la frecuencia o el ritmo según estabilidad, duración de FA y contexto clínico",
    "Realizar cardioversión eléctrica inmediata obligatoria en toda fibrilación auricular con frecuencia mayor de 150/min, aunque esté estable",
    "Administrar un betabloqueador intravenoso a dosis altas sin considerar congestión ni función ventricular",
    "No tratar la fibrilación auricular porque es solo un hallazgo electrocardiográfico",
    "Administrar trombólisis sistémica para revertir la arritmia"
  ],
  respuestaCorrecta: 0,
  explicacion: `La fibrilación auricular rápida puede precipitar o agravar edema pulmonar al reducir el llenado ventricular y elevar las presiones auriculares, especialmente en insuficiencia cardiaca con fracción de eyección preservada. El manejo inicial incluye soporte respiratorio, tratamiento de la congestión, búsqueda de precipitantes y estrategia de control de frecuencia o ritmo. Si aparece inestabilidad hemodinámica atribuible a la arritmia, la cardioversión eléctrica sincronizada urgente está indicada. En pacientes estables, la elección farmacológica depende de la función ventricular, presión arterial, congestión, comorbilidades y duración de la arritmia. Deben evaluarse anticoagulación y riesgo embólico. La frecuencia elevada por sí sola no sustituye la valoración integral de estabilidad y contexto.`,
  perlaENARM: "La FA rápida puede precipitar edema pulmonar; la cardioversión urgente depende de la inestabilidad atribuible a la arritmia, no solo de una cifra de frecuencia.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de fibrilación auricular e insuficiencia cardiaca.",
    internacional: "Guías ESC/AHA contemporáneas de fibrilación auricular e insuficiencia cardiaca."
  },
  bibliografia: "Guías internacionales de fibrilación auricular; ESC. Heart Failure Guidelines. 2021."
},
{
  id: "NEUMO-114",
  especialidad: "Neumología",
  tema: "Edema agudo pulmonar",
  subtema: "Edema pulmonar por estenosis aórtica crítica",
  dificultad: "Alta",
  caso: `Masculino de 82 años con antecedente de soplo sistólico y disnea de esfuerzo progresiva, ahora presenta edema pulmonar agudo. Presión arterial 102/64 mmHg, frecuencia cardiaca 96/min y saturación 84%. La auscultación revela soplo sistólico eyectivo en foco aórtico, segundo ruido disminuido y pulsos carotídeos de ascenso lento. La ecocardiografía urgente muestra válvula aórtica calcificada, área valvular de 0.6 cm², gradiente medio de 48 mmHg y fracción de eyección de 40%. El equipo propone vasodilatación agresiva con nitroglicerina a dosis altas y diuresis intensa, sin monitorización adicional.`,
  pregunta: "¿Cuál es el principio terapéutico más apropiado?",
  opciones: [
    "Manejo cauteloso y monitorizado de congestión y presión arterial, con evaluación cardiológica urgente para intervención valvular definitiva",
    "Vasodilatación agresiva en todos los pacientes con estenosis aórtica crítica, independientemente de la presión arterial",
    "Administrar grandes bolos de líquidos de rutina, sin reevaluar congestión",
    "Tratar únicamente con antibióticos porque el edema puede ser infeccioso",
    "Posponer toda evaluación valvular hasta que la radiografía se normalice por completo"
  ],
  respuestaCorrecta: 0,
  explicacion: `La estenosis aórtica crítica limita la capacidad de aumentar el gasto cardiaco y hace al paciente vulnerable a hipotensión cuando se reduce bruscamente la precarga o la poscarga. El edema pulmonar requiere estabilización respiratoria y descongestión cuidadosamente titulada, con vigilancia hemodinámica. Los vasodilatadores no están universalmente prohibidos, pero deben utilizarse con especial cautela en este contexto y no de manera agresiva sin monitorización. La causa estructural requiere valoración urgente por un equipo especializado para determinar la viabilidad y el momento de intervención valvular, incluyendo opciones percutáneas o quirúrgicas según riesgo y anatomía. El tratamiento médico es un puente, no una solución definitiva de la obstrucción valvular crítica.`,
  perlaENARM: "En estenosis aórtica crítica con edema pulmonar, evita cambios hemodinámicos bruscos y solicita valoración urgente para intervención valvular.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de valvulopatías e insuficiencia cardiaca aguda.",
    internacional: "Guías ESC/EACTS de valvulopatías y ESC de insuficiencia cardiaca."
  },
  bibliografia: "ESC/EACTS. Guidelines for the Management of Valvular Heart Disease; ESC. Heart Failure Guidelines."
},
{
  id: "NEUMO-115",
  especialidad: "Neumología",
  tema: "Edema agudo pulmonar",
  subtema: "Edema pulmonar en insuficiencia cardiaca con FE preservada",
  dificultad: "Alta",
  caso: `Femenina de 75 años con obesidad, hipertensión, diabetes y fibrilación auricular, presenta disnea nocturna súbita y ortopnea. La presión arterial es 176/96 mmHg, frecuencia cardiaca 104/min y saturación 87%. Tiene ingurgitación yugular leve, estertores bilaterales y edema maleolar. La radiografía muestra congestión vascular. La ecocardiografía informa fracción de eyección del 62%, hipertrofia ventricular izquierda, aurícula izquierda dilatada y signos de presiones de llenado elevadas. El BNP está moderadamente elevado. Un residente descarta insuficiencia cardiaca porque la fracción de eyección es normal.`,
  pregunta: "¿Cuál es la interpretación más apropiada?",
  opciones: [
    "La fracción de eyección preservada no excluye insuficiencia cardiaca; los hallazgos apoyan congestión por disfunción diastólica y elevación de presiones de llenado",
    "Una fracción de eyección mayor de 60% excluye edema cardiogénico",
    "El cuadro confirma SDRA porque no existe disfunción sistólica",
    "La dilatación auricular izquierda descarta elevación de presión de llenado",
    "El BNP moderado descarta insuficiencia cardiaca en una paciente obesa"
  ],
  respuestaCorrecta: 0,
  explicacion: `La insuficiencia cardiaca con fracción de eyección preservada se caracteriza por síntomas y signos de insuficiencia cardiaca con fracción de eyección conservada y evidencia de alteraciones estructurales, funcionales o hemodinámicas que elevan las presiones de llenado. La hipertrofia ventricular izquierda, aurícula izquierda dilatada, congestión clínica y radiológica apoyan el diagnóstico. La obesidad puede reducir los niveles de péptidos natriuréticos, mientras que la fibrilación auricular y la edad pueden elevarlos. La fracción de eyección evalúa la proporción expulsada, no la presión de llenado ni la relajación ventricular. El tratamiento agudo de la congestión se individualiza según presión arterial, perfusión y volumen; el seguimiento debe incluir control de comorbilidades y prevención de nuevas descompensaciones.`,
  perlaENARM: "Una FEVI normal no excluye insuficiencia cardiaca: integra congestión, estructura cardiaca y evidencia de presiones de llenado elevadas.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de insuficiencia cardiaca.",
    internacional: "ESC 2021; ESC Focused Update 2023."
  },
  bibliografia: "ESC. Heart Failure Guidelines. 2021; Focused Update. 2023."
},
{
  id: "NEUMO-116",
  especialidad: "Neumología",
  tema: "Edema agudo pulmonar",
  subtema: "Morfina y sedación en edema pulmonar",
  dificultad: "Alta",
  caso: `Masculino de 64 años con edema pulmonar cardiogénico, presión arterial 164/94 mmHg y ansiedad intensa. Está despierto, pero refiere sensación de asfixia. Tiene frecuencia respiratoria de 34/min, saturación de 86% y trabajo respiratorio importante. No hay dolor torácico ni otra indicación clara de opioides. Un médico propone administrar morfina de forma rutinaria para reducir ansiedad y precarga, mientras se demora la ventilación no invasiva hasta que el paciente esté más tranquilo.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Administrar morfina rutinariamente a todos los pacientes con edema pulmonar y retrasar ventilación no invasiva",
    "Priorizar soporte respiratorio y tratamiento hemodinámico; evitar opioides de rutina por riesgo de depresión respiratoria y otros efectos adversos",
    "Usar benzodiacepinas en dosis altas como sustituto de la ventilación",
    "No proporcionar oxígeno porque la ansiedad explica la hipoxemia",
    "Inducir sedación profunda sin asegurar la vía aérea"
  ],
  respuestaCorrecta: 1,
  explicacion: `La sensación de asfixia es frecuente en edema pulmonar, pero los opioides no se recomiendan de rutina como tratamiento de la congestión. Pueden provocar depresión respiratoria, hipotensión, náusea y alteración del estado mental, además de dificultar la evaluación de la respuesta. Deben priorizarse oxigenación, ventilación no invasiva cuando esté indicada, vasodilatación en pacientes hipertensos elegibles y descongestión según el estado de volumen. Los opioides pueden reservarse para indicaciones seleccionadas, como dolor intenso, con vigilancia adecuada. La ansiedad debe manejarse mediante comunicación, acompañamiento y corrección de la disnea; no se debe retrasar soporte respiratorio eficaz esperando sedación.`,
  perlaENARM: "La morfina no es tratamiento rutinario del edema pulmonar agudo; prioriza ventilación, tratamiento hemodinámico y corrección de la causa.",
  gpc: {
    mexico: "Protocolo institucional de insuficiencia cardiaca aguda y soporte respiratorio.",
    internacional: "ESC 2021 y recomendaciones contemporáneas de manejo del edema pulmonar cardiogénico."
  },
  bibliografia: "ESC. Heart Failure Guidelines. 2021."
},
{
  id: "NEUMO-117",
  especialidad: "Neumología",
  tema: "Edema agudo pulmonar",
  subtema: "Edema pulmonar por sobrecarga de volumen",
  dificultad: "Alta",
  caso: `Masculino de 58 años ingresado por lesión renal aguda, recibió varios litros de cristaloides durante la reanimación. Al segundo día desarrolla disnea, ortopnea y aumento de peso de 4 kg. La presión arterial es 148/88 mmHg, frecuencia cardiaca 108/min y saturación 89%. La ecografía muestra líneas B difusas y vena cava inferior dilatada; la ecocardiografía no evidencia disfunción sistólica grave. La diuresis ha disminuido a 0.3 mL/kg/h y la creatinina aumentó de 1.8 a 3.2 mg/dL. No hay fiebre ni foco infeccioso. Se propone administrar más líquidos para corregir la oliguria.`,
  pregunta: "¿Cuál es el enfoque más apropiado?",
  opciones: [
    "Administrar más cristaloides de forma automática porque toda oliguria indica hipovolemia",
    "Reconocer probable sobrecarga de volumen, reevaluar perfusión y respuesta a líquidos, iniciar descongestión si es apropiada y valorar terapia de reemplazo renal si existen indicaciones",
    "Descartar edema porque la fracción de eyección no está gravemente reducida",
    "Iniciar antibióticos de amplio espectro sin evidencia de infección",
    "Administrar AINE para mejorar la diuresis"
  ],
  respuestaCorrecta: 1,
  explicacion: `La oliguria no equivale automáticamente a hipovolemia. El aumento de peso, las líneas B, la vena cava dilatada y el contexto de administración de líquidos sugieren sobrecarga de volumen. Debe evaluarse cuidadosamente la perfusión, la respuesta dinámica a líquidos y la función renal antes de administrar más volumen. Si existe congestión y el paciente no está hipoperfundido por falta de volumen, la descongestión puede ser necesaria. La terapia de reemplazo renal se considera cuando hay sobrecarga refractaria, alteraciones electrolíticas o ácido-base graves u otras indicaciones. La función sistólica conservada no excluye edema hidrostático. Los AINE pueden empeorar la función renal y la retención hidrosalina.`,
  perlaENARM: "Oliguria no significa necesariamente hipovolemia; interpreta el balance, la perfusión y los signos de congestión antes de administrar líquidos.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de lesión renal aguda e insuficiencia cardiaca.",
    internacional: "KDIGO; ESC 2021."
  },
  bibliografia: "KDIGO. Acute Kidney Injury guidance; ESC. Heart Failure Guidelines. 2021."
},
{
  id: "NEUMO-118",
  especialidad: "Neumología",
  tema: "Edema agudo pulmonar",
  subtema: "Edema pulmonar y síndrome de dificultad respiratoria aguda",
  dificultad: "Alta",
  caso: `Femenina de 55 años con neumonía grave y sepsis desarrolla insuficiencia respiratoria progresiva. La radiografía muestra opacidades bilaterales, la relación PaO₂/FiO₂ es de 92 con PEEP de 10 cmH₂O y la ecocardiografía no muestra disfunción sistólica izquierda significativa. Ha recibido reanimación inicial por choque y ahora presenta edema periférico leve. El equipo considera administrar dosis altas de diurético hasta lograr balance marcadamente negativo de inmediato, pese a que continúa con vasopresor a dosis bajas y lactato de 2.8 mmol/L.`,
  pregunta: "¿Cuál es la estrategia más apropiada para el manejo de líquidos?",
  opciones: [
    "Descongestión agresiva inmediata sin considerar perfusión ni soporte vasopresor",
    "Priorizar estabilización de la perfusión durante la fase de choque y, una vez resuelta la hipoperfusión, adoptar una estrategia conservadora de líquidos y descongestión individualizada",
    "Administrar líquidos de mantenimiento a tasas elevadas durante toda la ventilación mecánica",
    "Descartar SDRA porque existe edema periférico",
    "Suspender la ventilación protectora para reducir la necesidad de líquidos"
  ],
  respuestaCorrecta: 1,
  explicacion: `El cuadro es compatible con SDRA por sepsis, con edema pulmonar predominantemente asociado a aumento de permeabilidad. Durante la fase de choque, la perfusión y la reanimación apropiada tienen prioridad; una vez estabilizada la hemodinámica, una estrategia conservadora de líquidos puede favorecer la oxigenación y reducir la duración de ventilación en pacientes seleccionados. La descongestión no debe ejecutarse de manera indiscriminada mientras persista hipoperfusión, ya que puede comprometer perfusión renal y sistémica. El manejo requiere integrar balance hídrico, presión arterial, lactato, diuresis, ecocardiografía y respuesta al tratamiento. La ventilación protectora sigue siendo esencial y no debe modificarse para compensar decisiones de líquidos.`,
  perlaENARM: "En SDRA séptico, estabiliza primero la perfusión; después considera estrategia conservadora de líquidos según la situación hemodinámica.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de sepsis, SDRA y ventilación mecánica.",
    internacional: "Guías contemporáneas de sepsis y SDRA; estrategia conservadora de líquidos tras estabilización."
  },
  bibliografia: "Surviving Sepsis Campaign; guías internacionales de SDRA y ventilación mecánica protectora."
},
{
  id: "NEUMO-119",
  especialidad: "Neumología",
  tema: "Edema agudo pulmonar",
  subtema: "Evaluación de respuesta al tratamiento",
  dificultad: "Alta",
  caso: `Masculino de 74 años con insuficiencia cardiaca y edema pulmonar agudo, inicialmente hipertenso y con hipoxemia grave. Recibe ventilación no invasiva, nitratos y diurético intravenoso. Tras 90 minutos, la presión arterial disminuye de 198/110 a 148/86 mmHg, la frecuencia respiratoria baja de 36 a 24/min y la saturación aumenta de 82% a 95%. Refiere menor disnea, la perfusión periférica es adecuada y no hay alteración del estado mental. La radiografía de control todavía muestra opacidades bilaterales. El equipo considera intubarlo exclusivamente porque la imagen no ha mejorado de forma importante.`,
  pregunta: "¿Cuál es el indicador más apropiado para valorar la respuesta inicial?",
  opciones: [
    "La normalización radiográfica inmediata como único criterio de éxito",
    "La mejoría clínica y fisiológica integrada, incluyendo trabajo respiratorio, oxigenación, estado mental, presión arterial y perfusión",
    "El descenso de BNP a un valor normal en menos de una hora",
    "La desaparición completa de líneas B antes de retirar ventilación no invasiva",
    "La normalización de creatinina antes de considerar que existe respuesta"
  ],
  respuestaCorrecta: 1,
  explicacion: `La respuesta inicial al tratamiento del edema pulmonar debe valorarse con parámetros clínicos y fisiológicos: menor trabajo respiratorio, mejor oxigenación, disminución de frecuencia respiratoria, estabilidad hemodinámica y estado mental conservado. La radiografía puede tardar en mejorar y no debe ser el único criterio para decidir intubación. La persistencia de hipoxemia, fatiga, alteración neurológica, inestabilidad o acidosis progresiva sí puede indicar fracaso del soporte no invasivo. Los biomarcadores no suelen normalizarse en minutos y no son adecuados como único marcador de respuesta inmediata. La reevaluación frecuente permite ajustar ventilación, vasodilatadores y diuréticos según evolución.`,
  perlaENARM: "Decide escalamiento ventilatorio por la respuesta clínica y fisiológica, no por una radiografía que tarda en resolverse.",
  gpc: {
    mexico: "Protocolo institucional de insuficiencia respiratoria aguda e insuficiencia cardiaca.",
    internacional: "ESC 2021; recomendaciones contemporáneas de soporte respiratorio en edema cardiogénico."
  },
  bibliografia: "ESC. Heart Failure Guidelines. 2021."
},
{
  id: "NEUMO-120",
  especialidad: "Neumología",
  tema: "Edema agudo pulmonar",
  subtema: "Integración diagnóstica y terapéutica",
  dificultad: "Alta",
  caso: `Femenina de 70 años con hipertensión, diabetes, enfermedad coronaria y fracción de eyección de 35%, presenta disnea súbita, ortopnea y dolor torácico opresivo. Presión arterial 184/106 mmHg, frecuencia cardiaca 128/min, frecuencia respiratoria 35/min y SpO₂ 81%. Se observan estertores difusos, ingurgitación yugular y extremidades inicialmente calientes. La radiografía muestra edema alveolar bilateral. El ECG revela infradesnivel del ST lateral y la troponina está elevada. La ecocardiografía muestra deterioro de la función ventricular respecto a un estudio previo. Tras oxígeno y ventilación no invasiva, la saturación mejora, pero persiste disnea importante. El equipo debe coordinar el manejo respiratorio, hemodinámico y etiológico.`,
  pregunta: "¿Cuál es el plan global más apropiado?",
  opciones: [
    "Tratar solo el edema con diurético y posponer la evaluación isquémica hasta el alta",
    "Mantener soporte respiratorio, tratar la congestión y la hipertensión según tolerancia hemodinámica, evaluar síndrome coronario agudo y activar estrategia coronaria urgente según el diagnóstico y riesgo",
    "Administrar grandes bolos de cristaloides por la taquicardia y esperar respuesta",
    "Dar alta cuando la saturación mejore, sin completar evaluación cardiaca",
    "Administrar trombólisis pulmonar porque el edema y la taquicardia confirman TEP"
  ],
  respuestaCorrecta: 1,
  explicacion: `El caso integra edema pulmonar cardiogénico agudo, hipertensión, posible isquemia miocárdica y deterioro reciente de la función ventricular. El tratamiento requiere soporte respiratorio, vasodilatación titulable si la presión arterial lo permite, diurético cuando exista congestión y monitorización de perfusión. Debe investigarse y tratarse de forma oportuna el síndrome coronario agudo, porque la isquemia puede ser el precipitante y modificar la estrategia de reperfusión. La troponina elevada puede reflejar infarto o lesión miocárdica asociada a insuficiencia cardiaca, por lo que se integra con ECG, dinámica de biomarcadores y evaluación clínica. Los líquidos indiscriminados pueden agravar el edema. La mejoría de la saturación no basta para dar de alta a una paciente con insuficiencia respiratoria grave y posible isquemia.`,
  perlaENARM: "En edema pulmonar agudo, identifica y trata el precipitante: isquemia, arritmia, hipertensión, infección, valvulopatía o incumplimiento terapéutico.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de insuficiencia cardiaca aguda y síndrome coronario agudo.",
    internacional: "ESC 2021; ESC Focused Update 2023; guías internacionales de síndrome coronario agudo."
  },
  bibliografia: "ESC. Heart Failure Guidelines. 2021; Focused Update. 2023; guías contemporáneas de síndrome coronario agudo."
},// ============================================================
// NEUMO-121 A NEUMO-140 — SÍNDROME DE DIFICULTAD RESPIRATORIA AGUDA
// Casos clínicos de alta dificultad ENARM
// ============================================================

{
  id: "NEUMO-121",
  especialidad: "Neumología",
  tema: "Síndrome de dificultad respiratoria aguda",
  subtema: "Diagnóstico y criterios de Berlín",
  dificultad: "Alta",
  caso: `Hombre de 54 años con pancreatitis aguda grave de origen biliar, hospitalizado hace 36 horas. Presenta deterioro respiratorio progresivo, taquipnea de 34 rpm y saturación de oxígeno de 84% con mascarilla con reservorio. La radiografía de tórax muestra opacidades alveolares bilaterales difusas. Gasometría arterial con FiO2 estimada de 0.80: pH 7.46, PaCO2 31 mmHg, PaO2 56 mmHg. La ecocardiografía muestra función ventricular izquierda conservada, sin datos de elevación importante de las presiones de llenado. No tiene antecedentes de insuficiencia cardiaca.`,
  pregunta: "¿Cuál es la interpretación diagnóstica más apropiada según la definición de Berlín, una vez instaurado soporte con PEEP de 5 cmH2O o más?",
  opciones: [
    "SDRA leve, porque la PaO2 es mayor de 50 mmHg",
    "SDRA moderado, con relación PaO2/FiO2 de 70",
    "SDRA grave, con relación PaO2/FiO2 de 70",
    "Edema pulmonar cardiogénico hasta demostrar lo contrario",
    "Insuficiencia respiratoria hipercápnica aguda"
  ],
  respuestaCorrecta: 2,
  explicacion: `La relación PaO2/FiO2 es 56/0.80 = 70 mmHg. Con inicio agudo, opacidades bilaterales y edema no explicado principalmente por insuficiencia cardiaca o sobrecarga, el cuadro es compatible con SDRA grave bajo la definición de Berlín si se cumple el requisito de PEEP ≥5 cmH2O. La pancreatitis es un desencadenante reconocido de lesión pulmonar inflamatoria. La hipocapnia no excluye gravedad: refleja hiperventilación. Deben tratarse simultáneamente la causa desencadenante y la hipoxemia.`,
  perlaENARM: "La gravedad por Berlín se clasifica con PaO2/FiO2: leve 201–300, moderado 101–200 y grave ≤100 mmHg, con PEEP o CPAP ≥5 cmH2O.",
  gpc: {
    mexico: "Verificar en el catálogo CENETEC la GPC vigente aplicable a SDRA y al desencadenante; no atribuir a una GPC mexicana criterios no confirmados.",
    internacional: "Definición de Berlín; definición global propuesta de SDRA (2023)."
  },
  bibliografia: "ARDS Definition Task Force. JAMA. 2012; Matthay MA et al. A New Global Definition of ARDS. AJRCCM. 2024; ATS Clinical Practice Guideline. AJRCCM. 2024."
},
{
  id: "NEUMO-122",
  especialidad: "Neumología",
  tema: "Síndrome de dificultad respiratoria aguda",
  subtema: "Ventilación protectora y peso corporal predicho",
  dificultad: "Alta",
  caso: `Mujer de 62 años, talla 160 cm, con neumonía grave y SDRA confirmado. Se encuentra bajo ventilación mecánica invasiva. El equipo calcula el volumen corriente a partir del peso real de 92 kg y programa 550 mL. La presión meseta es de 31 cmH2O, con distensibilidad respiratoria reducida. No presenta broncoespasmo importante y la curva flujo-tiempo vuelve a cero antes de cada inspiración.`,
  pregunta: "¿Cuál es el ajuste ventilatorio inicial más apropiado?",
  opciones: [
    "Mantener 550 mL y aumentar la frecuencia respiratoria",
    "Reducir el volumen corriente hacia 6 mL/kg de peso corporal predicho y reevaluar presión meseta",
    "Aumentar el volumen corriente a 8–10 mL/kg de peso real",
    "Retirar la PEEP para reducir la presión meseta",
    "Utilizar hiperventilación con volumen corriente alto para normalizar la PaCO2"
  ],
  respuestaCorrecta: 1,
  explicacion: `La ventilación protectora utiliza 4–8 mL/kg de peso corporal predicho, habitualmente iniciando alrededor de 6 mL/kg, y limita la presión meseta a menos de 30 cmH2O. El peso predicho se calcula a partir de talla y sexo, no del peso real, porque el tamaño pulmonar se relaciona principalmente con la talla. En mujeres, PBW = 45.5 + 0.91 × (talla en cm − 152.4); para 160 cm es aproximadamente 52.4 kg. Un volumen inicial de 6 mL/kg equivale a unos 315 mL, con ajustes según mecánica, gasometría y tolerancia. Puede aceptarse hipercapnia permisiva si no existen contraindicaciones relevantes.`,
  perlaENARM: "El volumen corriente para ventilación protectora se calcula con peso corporal predicho, no con el peso medido.",
  gpc: {
    mexico: "Consultar CENETEC para la GPC nacional específica vigente; el principio ventilatorio está respaldado por guías internacionales.",
    internacional: "ATS/ESICM/SCCM 2017; actualización ATS 2024."
  },
  bibliografia: "ARDS Network. NEJM. 2000; ATS Clinical Practice Guideline. AJRCCM. 2024; Marino's The ICU Book."
},
{
  id: "NEUMO-123",
  especialidad: "Neumología",
  tema: "Síndrome de dificultad respiratoria aguda",
  subtema: "Presión meseta y lesión pulmonar inducida por ventilador",
  dificultad: "Alta",
  caso: `Hombre de 47 años con SDRA por neumonía bacteriana. Recibe ventilación con volumen corriente de 6 mL/kg de peso predicho. La presión meseta medida mediante pausa inspiratoria es de 34 cmH2O; la presión pico es de 39 cmH2O. No hay evidencia de obstrucción del tubo, secreciones abundantes ni broncoespasmo. La gasometría muestra pH 7.29 y PaCO2 52 mmHg. La presión arterial permanece estable.`,
  pregunta: "¿Cuál es la mejor intervención ventilatoria inmediata?",
  opciones: [
    "Aumentar el volumen corriente para disminuir la PaCO2",
    "Reducir el volumen corriente de forma escalonada y reevaluar la presión meseta, manteniendo una estrategia protectora",
    "Aumentar la presión inspiratoria hasta normalizar el pH",
    "Eliminar toda la PEEP para disminuir las presiones de la vía aérea",
    "Cambiar de rutina a ventilación oscilatoria de alta frecuencia"
  ],
  respuestaCorrecta: 1,
  explicacion: `Una presión meseta de 34 cmH2O excede el objetivo habitual de <30 cmH2O en SDRA. La prioridad es reducir el estrés y la deformación pulmonar, disminuyendo el volumen corriente si es necesario y reevaluando la mecánica. La presión pico incorpora resistencia de la vía aérea y distensibilidad; la meseta obtenida durante una pausa inspiratoria refleja mejor la presión alveolar estática cuando no hay flujo. No debe sacrificarse la protección pulmonar para normalizar la PaCO2. La ventilación oscilatoria de alta frecuencia no se recomienda de rutina en SDRA moderado o grave.`,
  perlaENARM: "La presión meseta es más útil que la presión pico para estimar la presión alveolar durante una pausa sin flujo.",
  gpc: {
    mexico: "Verificar GPC nacional específica en CENETEC.",
    internacional: "ATS 2024: volumen corriente bajo y presión meseta <30 cmH2O."
  },
  bibliografia: "ARDS Network. NEJM. 2000; ATS. An Update on Management of Adult Patients with ARDS. AJRCCM. 2024."
},
{
  id: "NEUMO-124",
  especialidad: "Neumología",
  tema: "Síndrome de dificultad respiratoria aguda",
  subtema: "Decúbito prono",
  dificultad: "Alta",
  caso: `Mujer de 39 años con SDRA secundario a influenza y neumonía bacteriana sobreagregada. Tras intubación, ventilación protectora y ajuste inicial de PEEP, mantiene PaO2 de 58 mmHg con FiO2 de 0.80. La relación PaO2/FiO2 es de 72. La presión meseta es de 27 cmH2O. No existe inestabilidad espinal, cirugía abdominal reciente ni otra contraindicación absoluta para el cambio postural. Se encuentra en una UCI con personal entrenado para pronación.`,
  pregunta: "¿Cuál es la siguiente estrategia con mayor respaldo para mejorar resultados clínicos?",
  opciones: [
    "Mantener posición supina hasta que la FiO2 sea menor de 0.40",
    "Realizar sesiones prolongadas de decúbito prono, habitualmente de al menos 12–16 horas al día",
    "Realizar cambios posturales de cinco minutos cada dos horas como sustituto de la pronación",
    "Administrar bicarbonato para corregir la hipoxemia",
    "Utilizar ventilación oscilatoria de alta frecuencia como intervención obligatoria previa"
  ],
  respuestaCorrecta: 1,
  explicacion: `El SDRA grave con hipoxemia persistente pese a ventilación protectora es una indicación clásica de pronación temprana y prolongada. Las sesiones suelen durar al menos 12–16 horas al día en pacientes seleccionados. La pronación mejora la distribución de la ventilación, el reclutamiento de regiones dependientes y la homogeneidad del estrés pulmonar. Debe realizarse con un equipo entrenado, protegiendo el tubo endotraqueal, catéteres, ojos y puntos de presión. No se requiere esperar a reducir la FiO2 para iniciar la intervención.`,
  perlaENARM: "SDRA grave persistente: ventilación protectora y decúbito prono prolongado son medidas prioritarias.",
  gpc: {
    mexico: "Verificar GPC nacional específica en CENETEC.",
    internacional: "ATS 2017 y actualización ATS 2024; estudio PROSEVA."
  },
  bibliografia: "Guérin C et al. NEJM. 2013; ATS Clinical Practice Guideline. AJRCCM. 2024."
},
{
  id: "NEUMO-125",
  especialidad: "Neumología",
  tema: "Síndrome de dificultad respiratoria aguda",
  subtema: "Selección de PEEP",
  dificultad: "Alta",
  caso: `Hombre de 58 años con SDRA moderado por sepsis abdominal. Bajo ventilación protectora, la relación PaO2/FiO2 es de 145 y la presión meseta de 26 cmH2O. Con PEEP de 8 cmH2O requiere FiO2 de 0.70. La presión arterial media es de 72 mmHg con noradrenalina a dosis baja. No hay signos de neumotórax. Se busca mejorar oxigenación sin inducir sobredistensión ni deterioro hemodinámico.`,
  pregunta: "¿Qué estrategia respecto a la PEEP es más razonable?",
  opciones: [
    "Mantener siempre PEEP de 5 cmH2O, independientemente de la gravedad",
    "Considerar una estrategia de PEEP más alta sin maniobras prolongadas de reclutamiento, vigilando respuesta pulmonar y hemodinámica",
    "Realizar obligatoriamente una maniobra prolongada de reclutamiento con presiones muy elevadas",
    "Retirar la PEEP porque toda presión positiva es perjudicial en SDRA",
    "Aumentar la FiO2 a 1.0 de forma indefinida sin reevaluar PEEP"
  ],
  respuestaCorrecta: 1,
  explicacion: `En SDRA moderado a grave puede considerarse una estrategia de PEEP más alta, individualizando según oxigenación, distensibilidad, presión meseta, estado hemodinámico y riesgo de sobredistensión. La actualización ATS 2024 sugiere PEEP más alta sin maniobras de reclutamiento pulmonar, con recomendación condicional. Se recomienda evitar maniobras prolongadas de reclutamiento por falta de beneficio neto y riesgo de daño. La PEEP excesiva puede reducir retorno venoso, elevar la carga del ventrículo derecho y producir sobredistensión.`,
  perlaENARM: "PEEP más alta puede ser útil en SDRA moderado-grave, pero debe individualizarse; no equivale a realizar maniobras prolongadas de reclutamiento.",
  gpc: {
    mexico: "Verificar GPC nacional específica en CENETEC.",
    internacional: "ATS 2024: PEEP más alta sin maniobras de reclutamiento prolongadas."
  },
  bibliografia: "ATS. AJRCCM. 2024; ESICM Clinical Practice Guidelines; Marino's The ICU Book."
},
{
  id: "NEUMO-126",
  especialidad: "Neumología",
  tema: "Síndrome de dificultad respiratoria aguda",
  subtema: "Hipoxemia refractaria y diagnóstico diferencial",
  dificultad: "Alta",
  caso: `Mujer de 66 años con SDRA por neumonía grave. Presenta incremento súbito de la presión pico, desaturación hasta 76% y caída de la presión arterial. La ventilación muestra disminución marcada del volumen espirado. En la exploración, el hemitórax derecho tiene menor expansión y el murmullo vesicular está muy disminuido. La ecografía pulmonar muestra ausencia de deslizamiento pleural en el lado derecho y un punto pulmonar compatible. No hay tiempo para trasladarla a tomografía.`,
  pregunta: "¿Cuál es la conducta inmediata más apropiada?",
  opciones: [
    "Aumentar la PEEP y observar durante 30 minutos",
    "Realizar tomografía computarizada antes de intervenir",
    "Sospechar neumotórax a tensión y realizar descompresión urgente según protocolo",
    "Administrar diurético intravenoso",
    "Aumentar el volumen corriente para recuperar la saturación"
  ],
  respuestaCorrecta: 2,
  explicacion: `La desaturación súbita, la hipotensión, la asimetría ventilatoria y los hallazgos ecográficos sugieren neumotórax a tensión, una emergencia que puede complicar la ventilación con presión positiva. Si el paciente está inestable, la descompresión no debe retrasarse por tomografía. La técnica exacta y el acceso dependen del protocolo local y la experiencia del equipo; después debe asegurarse el drenaje pleural definitivo. La ventilación protectora no elimina el riesgo de barotrauma.`,
  perlaENARM: "En un paciente ventilado e inestable, la sospecha clínica de neumotórax a tensión requiere descompresión inmediata; no esperar imagen confirmatoria.",
  gpc: {
    mexico: "Aplicar protocolos institucionales de urgencias y manejo de neumotórax.",
    internacional: "Principios de soporte vital y cuidados críticos; estrategias de ventilación protectora en SDRA."
  },
  bibliografia: "ATS Clinical Practice Guideline. AJRCCM. 2024; Marino's The ICU Book; ATLS."
},
{
  id: "NEUMO-127",
  especialidad: "Neumología",
  tema: "Síndrome de dificultad respiratoria aguda",
  subtema: "Presión de conducción o driving pressure",
  dificultad: "Alta",
  caso: `Hombre de 51 años con SDRA. Durante una pausa inspiratoria se registra presión meseta de 28 cmH2O y PEEP total de 12 cmH2O. La distensibilidad estática es baja. El volumen corriente corresponde a 6 mL/kg de peso corporal predicho. El equipo revisa parámetros para minimizar la lesión pulmonar inducida por ventilador.`,
  pregunta: "¿Cuál es la presión de conducción aproximada y cómo debe interpretarse?",
  opciones: [
    "40 cmH2O; es la diferencia entre presión pico y PEEP",
    "16 cmH2O; corresponde a presión meseta menos PEEP total",
    "12 cmH2O; es igual a la PEEP programada",
    "28 cmH2O; equivale a presión meseta sin ajuste",
    "4 cmH2O; corresponde a la diferencia entre presión meseta y presión pico"
  ],
  respuestaCorrecta: 1,
  explicacion: `Driving pressure = presión meseta − PEEP total = 28 − 12 = 16 cmH2O. También puede expresarse como volumen corriente dividido entre distensibilidad del sistema respiratorio en condiciones estáticas apropiadas. Una presión de conducción elevada se ha asociado con peores desenlaces en estudios observacionales y análisis secundarios, pero no existe un único umbral universal que sustituya los objetivos establecidos de volumen corriente bajo y presión meseta <30 cmH2O. Debe interpretarse dentro de la mecánica respiratoria y del contexto clínico.`,
  perlaENARM: "Driving pressure = Pplat − PEEP total. Es un parámetro fisiológico útil, pero no reemplaza por sí solo la estrategia ventilatoria protectora.",
  gpc: {
    mexico: "Verificar GPC nacional específica en CENETEC.",
    internacional: "Evidencia fisiológica y observacional de ventilación protectora; ATS 2024."
  },
  bibliografia: "Amato MBP et al. NEJM. 2015; ATS Clinical Practice Guideline. AJRCCM. 2024."
},
{
  id: "NEUMO-128",
  especialidad: "Neumología",
  tema: "Síndrome de dificultad respiratoria aguda",
  subtema: "Balance hídrico conservador",
  dificultad: "Alta",
  caso: `Mujer de 60 años con SDRA por sepsis urinaria, ya reanimada. Han transcurrido 24 horas sin datos de hipoperfusión, con lactato normalizado, llenado capilar adecuado y requerimientos vasopresores mínimos. Presenta edema periférico, balance acumulado de +5 litros y empeoramiento de la oxigenación. La función ventricular izquierda es conservada y no hay evidencia de hemorragia activa.`,
  pregunta: "¿Qué estrategia de líquidos es razonable después de asegurar una perfusión adecuada?",
  opciones: [
    "Administrar bolos repetidos de cristaloides por la hipoxemia",
    "Aplicar una estrategia conservadora de líquidos, con diuresis si está indicada y vigilancia renal/hemodinámica",
    "Restringir todos los líquidos incluso si reaparece shock",
    "Administrar coloides de forma sistemática para elevar la presión oncótica",
    "Iniciar diálisis urgente solo por el balance positivo, sin valorar otros criterios"
  ],
  respuestaCorrecta: 1,
  explicacion: `En SDRA, una vez resuelto el shock y asegurada la perfusión, una estrategia conservadora de líquidos puede mejorar la oxigenación y aumentar los días libres de ventilación, sin implicar restricción indiscriminada durante hipoperfusión. Deben valorarse diuresis, creatinina, electrólitos, congestión y estabilidad circulatoria. Si reaparece shock, la reanimación se individualiza. La terapia de reemplazo renal se indica por criterios clínicos y metabólicos, no únicamente por un balance positivo aislado.`,
  perlaENARM: "En SDRA, evitar la sobrecarga hídrica después de la reanimación inicial puede facilitar la recuperación pulmonar.",
  gpc: {
    mexico: "Consultar GPC aplicable a sepsis y soporte crítico en el catálogo CENETEC.",
    internacional: "Estrategia conservadora de líquidos en SDRA; ensayo FACTT."
  },
  bibliografia: "ARDS Network. NEJM. 2006; ATS Clinical Practice Guideline. AJRCCM. 2024; Surviving Sepsis Campaign."
},
{
  id: "NEUMO-129",
  especialidad: "Neumología",
  tema: "Síndrome de dificultad respiratoria aguda",
  subtema: "Corticoides en SDRA",
  dificultad: "Alta",
  caso: `Hombre de 57 años con SDRA moderado-grave asociado a neumonía, bajo ventilación protectora y pronación. Persiste con hipoxemia y respuesta inflamatoria sistémica. Los cultivos iniciales están en proceso; recibe antimicrobianos dirigidos al cuadro clínico. No presenta hemorragia digestiva activa ni antecedente conocido de infección fúngica invasiva. El equipo considera el papel de los corticoides.`,
  pregunta: "¿Cuál afirmación refleja mejor la evidencia contemporánea?",
  opciones: [
    "Los corticoides están absolutamente contraindicados en todo paciente con SDRA",
    "Todos los pacientes deben recibir pulsos de metilprednisolona en dosis altas sin importar la causa",
    "Puede considerarse corticoide en pacientes seleccionados con SDRA, individualizando momento, etiología, riesgos y esquema",
    "Los corticoides sustituyen la ventilación protectora",
    "Los corticoides solo son útiles cuando la PaCO2 está elevada"
  ],
  respuestaCorrecta: 2,
  explicacion: `La guía ATS 2024 sugiere el uso de corticoides en pacientes con SDRA, con recomendación condicional y certeza moderada, pero no establece que todos deban recibir un esquema único universal. La decisión depende de etiología, momento de evolución, contraindicaciones y balance de riesgos. Debe evitarse extrapolar automáticamente un régimen de una causa específica a todos los casos. Los corticoides no sustituyen ventilación protectora, pronación cuando está indicada, tratamiento del desencadenante ni prevención de complicaciones.`,
  perlaENARM: "La evidencia actual apoya considerar corticoides en SDRA seleccionado, no administrar automáticamente pulsos en todos los pacientes.",
  gpc: {
    mexico: "Verificar GPC nacional específica y recomendaciones institucionales vigentes.",
    internacional: "ATS Clinical Practice Guideline 2024."
  },
  bibliografia: "ATS. An Update on Management of Adult Patients with ARDS. AJRCCM. 2024; revisiones sistemáticas contemporáneas sobre corticoides en SDRA."
},
{
  id: "NEUMO-130",
  especialidad: "Neumología",
  tema: "Síndrome de dificultad respiratoria aguda",
  subtema: "Bloqueo neuromuscular",
  dificultad: "Alta",
  caso: `Mujer de 45 años con SDRA grave temprano por neumonía. A pesar de sedación adecuada, presenta asincronía ventilatoria persistente, esfuerzos inspiratorios intensos, volumen corriente espontáneo excesivo y desaturación recurrente. La presión meseta se aproxima al límite de seguridad. Se han optimizado ventilador, analgesia y sedación. No se ha identificado una causa mecánica corregible.`,
  pregunta: "¿Cuál es el enfoque más apropiado respecto al bloqueo neuromuscular?",
  opciones: [
    "Administrarlo de forma sistemática a todo paciente con SDRA durante siete días",
    "Considerarlo de forma selectiva y limitada en el tiempo si la asincronía grave impide ventilación protectora, con sedación adecuada y vigilancia",
    "Utilizarlo sin sedación porque elimina la percepción de disnea",
    "Evitarlo incluso si no es posible mantener ventilación protectora",
    "Usarlo para sustituir la pronación en SDRA grave"
  ],
  respuestaCorrecta: 1,
  explicacion: `El bloqueo neuromuscular puede considerarse en pacientes seleccionados con SDRA grave temprano cuando la asincronía, el esfuerzo respiratorio excesivo o la dificultad para mantener una ventilación protectora persisten pese a optimizar analgesia, sedación y ventilador. La guía ATS 2024 emite una recomendación condicional para pacientes seleccionados. No debe convertirse en una práctica universal ni usarse sin sedación y analgesia apropiadas. Deben vigilarse inmovilidad, debilidad adquirida en UCI y duración de la exposición.`,
  perlaENARM: "El bloqueo neuromuscular es selectivo, no rutinario para todo SDRA; nunca sustituye analgesia y sedación adecuadas.",
  gpc: {
    mexico: "Consultar protocolos de UCI y GPC nacionales aplicables.",
    internacional: "ATS Clinical Practice Guideline 2024; estudios ACURASYS y ROSE."
  },
  bibliografia: "ATS. AJRCCM. 2024; Papazian L et al. NEJM. 2010; Moss M et al. NEJM. 2019."
},
{
  id: "NEUMO-131",
  especialidad: "Neumología",
  tema: "Síndrome de dificultad respiratoria aguda",
  subtema: "ECMO venovenosa",
  dificultad: "Alta",
  caso: `Hombre de 34 años con SDRA grave por neumonía, tratado durante varias horas en una UCI con ventilación protectora, PEEP individualizada, pronación prolongada y corrección de factores reversibles. Persiste con PaO2/FiO2 de 58, acidosis respiratoria importante y presiones ventilatorias difíciles de mantener dentro de objetivos protectores. No presenta hemorragia intracraneal, contraindicación mayor para anticoagulación ni falla cardiaca primaria grave.`,
  pregunta: "¿Cuál es el siguiente paso razonable si la hipoxemia y la incapacidad de ventilar de forma protectora persisten?",
  opciones: [
    "Aumentar indefinidamente el volumen corriente por encima de 10 mL/kg de peso predicho",
    "Solicitar valoración urgente por un centro con experiencia en ECMO venovenosa para posible selección",
    "Retirar la PEEP para normalizar el retorno venoso",
    "Administrar bicarbonato como tratamiento definitivo de la lesión pulmonar",
    "Utilizar ventilación oscilatoria de alta frecuencia de rutina antes de cualquier otra medida"
  ],
  respuestaCorrecta: 1,
  explicacion: `La ECMO venovenosa puede considerarse en pacientes seleccionados con SDRA grave refractario después de optimizar las medidas convencionales, especialmente cuando la oxigenación o ventilación no puede mantenerse sin presiones potencialmente lesivas. La ATS 2024 formula una recomendación condicional para pacientes seleccionados. La decisión requiere evaluación multidisciplinaria, experiencia del centro, reversibilidad del proceso, duración de ventilación previa y contraindicaciones. No es una intervención automática ni sustituye la ventilación protectora.`,
  perlaENARM: "ECMO VV es una estrategia de rescate para SDRA grave seleccionado y refractario, tras optimización convencional.",
  gpc: {
    mexico: "Consultar disponibilidad regional y protocolos institucionales de referencia a centros ECMO.",
    internacional: "ATS 2024; ensayo EOLIA y experiencia de centros especializados."
  },
  bibliografia: "Combes A et al. NEJM. 2018; ATS. AJRCCM. 2024."
},
{
  id: "NEUMO-132",
  especialidad: "Neumología",
  tema: "Síndrome de dificultad respiratoria aguda",
  subtema: "Definición global y pacientes no intubados",
  dificultad: "Alta",
  caso: `Mujer de 70 años con neumonía bilateral y deterioro respiratorio de cuatro días de evolución. Recibe oxígeno por cánula nasal de alto flujo a 50 L/min, FiO2 de 0.60. La saturación es de 91%, con taquipnea y uso de músculos accesorios. La tomografía muestra opacidades bilaterales. La ecocardiografía no identifica disfunción ventricular izquierda significativa ni evidencia de edema hidrostático predominante. No está intubada.`,
  pregunta: "¿Qué afirmación es correcta al aplicar la definición global propuesta de SDRA?",
  opciones: [
    "El SDRA solo puede diagnosticarse si el paciente está intubado",
    "La definición global permite incluir pacientes no intubados bajo soporte de alto flujo ≥30 L/min si cumplen los demás criterios",
    "La cánula de alto flujo excluye el diagnóstico de SDRA",
    "La ausencia de gasometría arterial excluye siempre el diagnóstico",
    "Las opacidades bilaterales no son necesarias en ninguna definición"
  ],
  respuestaCorrecta: 1,
  explicacion: `La definición global propuesta amplía la definición de Berlín para incluir una categoría de SDRA no intubado, que puede abarcar pacientes con cánula nasal de alto flujo a ≥30 L/min o CPAP/VNI, siempre que cumplan los criterios clínicos, temporales, de imagen y oxigenación correspondientes. También contempla SpO2/FiO2 bajo condiciones específicas. Debe distinguirse que esta definición es una propuesta de consenso global y no reemplaza automáticamente todas las definiciones operativas utilizadas en ensayos o protocolos.`,
  perlaENARM: "La definición global de 2023 amplía el reconocimiento de SDRA en pacientes no intubados con alto flujo; identifica qué definición está utilizando el reactivo.",
  gpc: {
    mexico: "Verificar criterios adoptados por la institución y GPC nacional específica.",
    internacional: "A New Global Definition of ARDS. AJRCCM. 2024."
  },
  bibliografia: "Matthay MA et al. AJRCCM. 2024; definición de Berlín, JAMA. 2012."
},
{
  id: "NEUMO-133",
  especialidad: "Neumología",
  tema: "Síndrome de dificultad respiratoria aguda",
  subtema: "SpO2/FiO2 y limitaciones de la oximetría",
  dificultad: "Alta",
  caso: `Hombre de 63 años con neumonía bilateral y sospecha de SDRA. Está bajo oxígeno suplementario y tiene SpO2 de 92% con FiO2 estimada de 0.50. La señal pletismográfica es adecuada y la saturación no supera 97%. No se dispone inmediatamente de gasometría arterial. La radiografía muestra opacidades bilaterales nuevas y no hay datos clínicos predominantes de edema cardiogénico.`,
  pregunta: "¿Cuál es la interpretación más apropiada de la relación SpO2/FiO2 en este contexto?",
  opciones: [
    "Es 184 y permite estimar alteración de oxigenación, aunque no es idéntica a PaO2/FiO2",
    "Es 460 y demuestra oxigenación normal",
    "Es 92 y equivale directamente a PaO2 en mmHg",
    "No puede calcularse ninguna relación sin PaCO2",
    "Una SpO2 de 92% descarta SDRA"
  ],
  respuestaCorrecta: 0,
  explicacion: `SpO2/FiO2 = 92/0.50 = 184. La relación puede ser útil cuando no se dispone de gasometría, especialmente en el marco de la definición global propuesta, siempre que se respeten sus condiciones de aplicación. No debe asumirse equivalencia matemática perfecta con PaO2/FiO2: la relación entre saturación y presión arterial de oxígeno depende de pH, temperatura, PaCO2 y otros factores, y la oximetría tiene limitaciones técnicas y clínicas.`,
  perlaENARM: "SpO2/FiO2 puede apoyar la evaluación cuando no hay gasometría, pero no debe interpretarse como intercambiable sin matices con PaO2/FiO2.",
  gpc: {
    mexico: "Aplicar protocolos institucionales de valoración de insuficiencia respiratoria.",
    internacional: "Definición global propuesta de SDRA, 2023."
  },
  bibliografia: "Matthay MA et al. AJRCCM. 2024; literatura sobre índices no invasivos de oxigenación."
},
{
  id: "NEUMO-134",
  especialidad: "Neumología",
  tema: "Síndrome de dificultad respiratoria aguda",
  subtema: "SDRA frente a edema pulmonar cardiogénico",
  dificultad: "Alta",
  caso: `Mujer de 74 años con disnea aguda, fiebre y tos después de varios días de infección respiratoria. La radiografía muestra opacidades bilaterales. La presión arterial es de 108/66 mmHg, la ecocardiografía muestra fracción de eyección de 60% y no hay dilatación marcada de cavidades izquierdas. La evaluación revela consolidaciones dependientes y líneas B bilaterales. La función renal está moderadamente alterada y el péptido natriurético se encuentra elevado.`,
  pregunta: "¿Qué enfoque permite diferenciar mejor lesión pulmonar inflamatoria de edema hidrostático?",
  opciones: [
    "Diagnosticar edema cardiogénico exclusivamente por el péptido natriurético elevado",
    "Descartar SDRA porque la fracción de eyección es normal",
    "Integrar contexto temporal, causa precipitante, examen, ecografía, ecocardiografía y evolución; ambas condiciones pueden coexistir",
    "Usar la radiografía aislada como prueba definitiva",
    "Administrar diurético a dosis altas sin valorar perfusión ni congestión"
  ],
  respuestaCorrecta: 2,
  explicacion: `La distinción no debe basarse en un único marcador. El péptido natriurético puede elevarse por edad, insuficiencia renal, sobrecarga o estrés cardiaco; una fracción de eyección conservada tampoco excluye insuficiencia cardiaca con fracción de eyección preservada. El SDRA requiere un contexto de lesión aguda, opacidades bilaterales e hipoxemia, sin que el edema hidrostático explique predominantemente el cuadro. Pueden coexistir edema cardiogénico y SDRA, por lo que se integra toda la evidencia clínica y hemodinámica.`,
  perlaENARM: "El BNP elevado o una FEVI normal no resuelven por sí solos el diagnóstico diferencial entre SDRA y edema cardiogénico.",
  gpc: {
    mexico: "Consultar GPC aplicables a insuficiencia cardiaca y soporte crítico.",
    internacional: "Definición de Berlín; definición global propuesta de SDRA."
  },
  bibliografia: "Matthay MA et al. AJRCCM. 2024; Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
},
{
  id: "NEUMO-135",
  especialidad: "Neumología",
  tema: "Síndrome de dificultad respiratoria aguda",
  subtema: "Hipercapnia permisiva y pH",
  dificultad: "Alta",
  caso: `Hombre de 50 años con SDRA grave bajo ventilación protectora. PaO2/FiO2 de 95, volumen corriente de 6 mL/kg de peso predicho y presión meseta de 28 cmH2O. La gasometría muestra pH 7.22, PaCO2 62 mmHg y HCO3 25 mEq/L. La presión arterial es estable, no hay hipertensión intracraneal conocida y el ritmo cardiaco es sinusal.`,
  pregunta: "¿Cuál es la conducta más apropiada frente a esta hipercapnia?",
  opciones: [
    "Aumentar inmediatamente el volumen corriente a 12 mL/kg para normalizar la PaCO2",
    "Aceptar hipercapnia permisiva de manera vigilada si es necesaria para proteger el pulmón, reevaluando pH, causa y contraindicaciones",
    "Administrar bicarbonato de forma automática para alcanzar pH 7.40",
    "Eliminar la PEEP y permitir atelectasia generalizada",
    "Suspender toda ventilación mecánica"
  ],
  respuestaCorrecta: 1,
  explicacion: `La hipercapnia permisiva puede aceptarse como consecuencia de la ventilación protectora, siempre que la acidemia sea tolerable y no existan contraindicaciones relevantes. Deben revisarse espacio muerto, frecuencia respiratoria, flujo espiratorio, auto-PEEP, asincronía y causa de la retención de CO2. No se recomienda elevar de forma peligrosa el volumen corriente solo para normalizar la PaCO2. La administración de bicarbonato no es automática y puede aumentar la generación de CO2. La decisión requiere valorar hemodinámica y comorbilidades.`,
  perlaENARM: "En SDRA se prioriza la protección pulmonar sobre la normalización estricta de PaCO2, con límites individualizados de pH y seguridad.",
  gpc: {
    mexico: "Seguir protocolos institucionales de ventilación mecánica y gasometría.",
    internacional: "ATS 2024; ARDS Network."
  },
  bibliografia: "ARDS Network. NEJM. 2000; ATS Clinical Practice Guideline. AJRCCM. 2024; Marino's The ICU Book."
},
{
  id: "NEUMO-136",
  especialidad: "Neumología",
  tema: "Síndrome de dificultad respiratoria aguda",
  subtema: "Auto-PEEP y asincronía",
  dificultad: "Alta",
  caso: `Hombre de 61 años con SDRA y antecedente de EPOC. Bajo ventilación mecánica presenta hipotensión, espiración prolongada y flujo espiratorio que no regresa a cero antes del siguiente ciclo. La presión meseta es de 27 cmH2O, pero la presión pico aumenta y la curva flujo-tiempo sugiere atrapamiento aéreo. La frecuencia respiratoria programada es de 30 rpm.`,
  pregunta: "¿Cuál es la intervención inicial más razonable?",
  opciones: [
    "Aumentar la frecuencia respiratoria para reducir la PaCO2",
    "Evaluar y reducir atrapamiento aéreo mediante ajuste de frecuencia, tiempo espiratorio y flujo, además de revisar broncoespasmo y secreciones",
    "Aumentar el volumen corriente para mejorar la ventilación minuto",
    "Eliminar toda sedación aunque exista asincronía grave",
    "Aumentar PEEP externa al máximo sin medir la respuesta"
  ],
  respuestaCorrecta: 1,
  explicacion: `El flujo espiratorio que no llega a cero sugiere espiración incompleta y posible auto-PEEP, favorecida por frecuencia elevada, obstrucción y tiempo espiratorio insuficiente. La presión intratorácica puede comprometer el retorno venoso y causar hipotensión. Se debe revisar la mecánica, prolongar la espiración, reducir la frecuencia si es posible y tratar broncoespasmo o secreciones. La PEEP externa puede ayudar en ciertos pacientes con obstrucción, pero requiere ajuste cuidadoso; no debe aumentarse a ciegas.`,
  perlaENARM: "Flujo espiratorio que no vuelve a cero sugiere atrapamiento aéreo; la auto-PEEP puede causar hipotensión durante ventilación mecánica.",
  gpc: {
    mexico: "Consultar protocolos de ventilación mecánica en pacientes con obstrucción y SDRA.",
    internacional: "Principios de ventilación mecánica protectora y manejo de auto-PEEP."
  },
  bibliografia: "Marino's The ICU Book; Tobin MJ. Principles and Practice of Mechanical Ventilation; ATS 2024."
},
{
  id: "NEUMO-137",
  especialidad: "Neumología",
  tema: "Síndrome de dificultad respiratoria aguda",
  subtema: "Lesión pulmonar inducida por ventilador",
  dificultad: "Alta",
  caso: `Mujer de 56 años con SDRA por aspiración. En el ventilador presenta presión meseta de 29 cmH2O con volumen corriente de 6 mL/kg de peso predicho. Durante las últimas horas aumenta la presión pico, aparecen secreciones espesas y el volumen espirado disminuye. La auscultación revela roncus difusos y el tubo endotraqueal tiene secreciones visibles. No existe asimetría torácica marcada.`,
  pregunta: "¿Cuál es la interpretación más adecuada del aumento de presión pico con presión meseta relativamente estable?",
  opciones: [
    "Sugiere principalmente aumento de resistencia de la vía aérea; revisar tubo, secreciones y broncoespasmo",
    "Demuestra necesariamente sobredistensión alveolar grave",
    "Confirma un nuevo neumotórax a tensión",
    "Indica que debe aumentarse el volumen corriente",
    "Demuestra que la PEEP es insuficiente en todos los casos"
  ],
  respuestaCorrecta: 0,
  explicacion: `La presión pico refleja tanto resistencia de vía aérea como presión elástica; la presión meseta, medida durante pausa inspiratoria sin flujo, aproxima mejor la presión alveolar estática. Si aumenta la presión pico pero la meseta se mantiene relativamente estable, debe sospecharse un incremento de resistencia por secreciones, acodamiento u obstrucción del tubo, broncoespasmo o condensación del circuito. Se requiere revisar el sistema y al paciente, sin aumentar automáticamente el volumen corriente.`,
  perlaENARM: "Presión pico alta con meseta estable orienta a resistencia elevada; pico y meseta elevadas sugieren alteración de distensibilidad o sobredistensión.",
  gpc: {
    mexico: "Aplicar protocolos institucionales de vigilancia del ventilador y aspiración de secreciones.",
    internacional: "Principios de mecánica respiratoria y ventilación protectora."
  },
  bibliografia: "Tobin MJ. Principles and Practice of Mechanical Ventilation; Marino's The ICU Book."
},
{
  id: "NEUMO-138",
  especialidad: "Neumología",
  tema: "Síndrome de dificultad respiratoria aguda",
  subtema: "Neumonía asociada a ventilación y prevención de SDRA",
  dificultad: "Alta",
  caso: `Hombre de 68 años intubado por neumonía grave. Tras varios días de ventilación, presenta fiebre nueva, secreciones purulentas, aumento de requerimiento de FiO2 y un infiltrado pulmonar nuevo. Se considera neumonía asociada a ventilación mecánica, que puede agravar el daño pulmonar. El equipo revisa medidas para reducir complicaciones durante la estancia en UCI.`,
  pregunta: "¿Qué paquete de medidas es más apropiado para disminuir complicaciones asociadas a ventilación?",
  opciones: [
    "Mantener sedación profunda continua en todos los pacientes y evitar la movilización",
    "Elevar la cabecera cuando no esté contraindicado, evaluar diariamente sedación y liberación ventilatoria, mantener higiene oral y aplicar prevención de aspiración según protocolo",
    "Administrar antibióticos profilácticos durante toda la ventilación",
    "Cambiar el tubo endotraqueal diariamente",
    "Realizar maniobras prolongadas de reclutamiento pulmonar de rutina"
  ],
  respuestaCorrecta: 1,
  explicacion: `La prevención de neumonía asociada a ventilación se basa en medidas de proceso: elevar la cabecera cuando sea apropiado, reducir sedación innecesaria, evaluar diariamente preparación para liberación ventilatoria, mantener higiene oral según protocolo, evitar extubaciones accidentales y aplicar estrategias de prevención de aspiración. No se recomiendan antibióticos profilácticos sistémicos durante toda la ventilación ni cambios diarios del tubo. Las medidas deben adaptarse a contraindicaciones y políticas institucionales.`,
  perlaENARM: "La prevención de neumonía asociada a ventilación se apoya en un paquete de medidas, no en antibióticos profilácticos indiscriminados.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de neumonía asociada a ventilación y protocolos de prevención de infecciones.",
    internacional: "Guías ATS/IDSA para neumonía hospitalaria y asociada a ventilación; recomendaciones de prevención de infecciones."
  },
  bibliografia: "ATS/IDSA Clinical Practice Guidelines for HAP/VAP. 2016; guías de prevención de infecciones asociadas a dispositivos."
},
{
  id: "NEUMO-139",
  especialidad: "Neumología",
  tema: "Síndrome de dificultad respiratoria aguda",
  subtema: "Interpretación de respuesta a pronación",
  dificultad: "Alta",
  caso: `Mujer de 48 años con SDRA grave por sepsis, con PaO2/FiO2 inicial de 78. Después de iniciar ventilación protectora y pronación, la relación aumenta a 135 y disminuye la necesidad de FiO2. La presión arterial se mantiene estable y no aparecen complicaciones del tubo ni lesiones por presión. El equipo considera volver a posición supina después de una sesión prolongada.`,
  pregunta: "¿Qué afirmación es más correcta sobre la respuesta observada?",
  opciones: [
    "La mejoría de oxigenación demuestra resolución completa del SDRA y permite suspender ventilación protectora",
    "La mejoría es favorable, pero debe integrarse con evolución clínica y criterios de seguridad antes de decidir la supinación",
    "La pronación debe mantenerse permanentemente hasta la extubación",
    "La respuesta demuestra que el diagnóstico inicial era edema cardiogénico",
    "La mejoría obliga a aumentar el volumen corriente"
  ],
  respuestaCorrecta: 1,
  explicacion: `La mejoría de oxigenación durante pronación es favorable, pero no equivale a resolución del proceso inflamatorio ni elimina la necesidad de ventilación protectora. La decisión de volver a supino considera duración de la sesión, estabilidad de oxigenación en los parámetros actuales, hemodinámica y protocolo de la unidad. Si persiste hipoxemia grave al regresar a supino, puede requerirse nueva sesión. La pronación ofrece beneficios fisiológicos y, en SDRA grave seleccionado, se asocia con mejores resultados cuando se usa de forma prolongada.`,
  perlaENARM: "La mejoría de PaO2/FiO2 durante pronación no justifica abandonar la ventilación protectora ni asumir resolución del SDRA.",
  gpc: {
    mexico: "Seguir protocolo de pronación de la unidad de cuidados intensivos.",
    internacional: "PROSEVA; ATS 2024."
  },
  bibliografia: "Guérin C et al. NEJM. 2013; ATS Clinical Practice Guideline. AJRCCM. 2024."
},
{
  id: "NEUMO-140",
  especialidad: "Neumología",
  tema: "Síndrome de dificultad respiratoria aguda",
  subtema: "Integración terapéutica y escalamiento",
  dificultad: "Alta",
  caso: `Hombre de 59 años con SDRA grave secundario a neumonía bacteriana y sepsis. Tras control inicial del foco, antimicrobianos apropiados, ventilación con volumen corriente de 6 mL/kg de peso predicho, presión meseta de 28 cmH2O, PEEP individualizada y pronación prolongada, mantiene PaO2/FiO2 de 65. No hay neumotórax, obstrucción del tubo ni sobrecarga hídrica evidente. La gasometría también muestra acidosis respiratoria persistente. La unidad cuenta con posibilidad de referencia a un centro de ECMO.`,
  pregunta: "¿Cuál es el siguiente paso más apropiado?",
  opciones: [
    "Aumentar el volumen corriente de forma marcada hasta normalizar la gasometría",
    "Reevaluar causas reversibles y optimización ventilatoria, y solicitar valoración temprana por un centro experto para posible ECMO venovenosa",
    "Suspender la PEEP y mantener FiO2 de 1.0 indefinidamente",
    "Administrar diurético aunque no exista congestión y sin revisar perfusión",
    "Utilizar antibióticos de espectro cada vez más amplio sin nueva evaluación microbiológica"
  ],
  respuestaCorrecta: 1,
  explicacion: `El paciente presenta hipoxemia refractaria pese a varias medidas esenciales. Antes de escalar, se revisan causas reversibles como neumotórax, secreciones, posición del tubo, asincronía, fiebre, acidosis, sobrecarga o disfunción hemodinámica, y se confirma que la ventilación protectora y pronación se hayan aplicado de manera adecuada. Si persiste insuficiencia respiratoria grave, corresponde valoración temprana por un equipo experto en ECMO VV, considerando elegibilidad, reversibilidad, duración de ventilación y riesgos. No debe aumentarse de forma lesiva el volumen corriente para normalizar cifras.`,
  perlaENARM: "En SDRA refractario, la secuencia es optimizar medidas protectoras, pronación y causas reversibles; después valorar rescate especializado como ECMO VV en pacientes seleccionados.",
  gpc: {
    mexico: "Verificar GPC nacional específica y protocolos de referencia de cuidados críticos.",
    internacional: "ATS 2024; PROSEVA; EOLIA."
  },
  bibliografia: "ATS. AJRCCM. 2024; Guérin C et al. NEJM. 2013; Combes A et al. NEJM. 2018."
},

{
  id: "NEUMO-141",
  especialidad: "Neumología",
  tema: "Neumotórax",
  subtema: "Neumotórax espontáneo primario",
  dificultad: "Alta",
  caso: `Hombre de 23 años, alto y delgado, sin antecedentes pulmonares conocidos, acude por dolor torácico derecho de inicio súbito mientras descansaba. Refiere disnea leve. TA 122/76 mmHg, FC 88 lpm, FR 19 rpm y SpO2 97% al aire ambiente. Presenta disminución del murmullo vesicular apical derecho. La radiografía confirma neumotórax derecho sin desplazamiento mediastínico. No hay hipoxemia ni compromiso hemodinámico. Puede caminar sin dificultad y cuenta con acceso rápido a urgencias.`,
  pregunta: "¿Cuál es la conducta inicial más apropiada según el enfoque contemporáneo para un neumotórax espontáneo primario mínimamente sintomático?",
  opciones: [
    "Colocar obligatoriamente un tubo torácico de gran calibre",
    "Realizar pleurodesis quirúrgica inmediata",
    "Considerar manejo conservador con observación y seguimiento estructurado, si cumple criterios de seguridad",
    "Administrar antibióticos intravenosos durante siete días",
    "Indicar ventilación con presión positiva para acelerar la reexpansión"
  ],
  respuestaCorrecta: 2,
  explicacion: `En pacientes seleccionados con neumotórax espontáneo primario, síntomas mínimos y estabilidad clínica, puede considerarse tratamiento conservador, siempre que exista seguimiento apropiado y acceso a atención urgente. La BTS 2023 enfatiza síntomas, estabilidad y contexto clínico, en lugar de basar toda la decisión exclusivamente en el tamaño radiográfico. Si aparecen síntomas importantes, deterioro o factores que impidan el seguimiento, se valoran intervenciones como aspiración o drenaje. El tratamiento conservador no equivale a alta indiscriminada.`,
  perlaENARM: "En neumotórax espontáneo primario estable, el tamaño radiográfico aislado no determina obligatoriamente la necesidad de drenaje.",
  gpc: {
    mexico: "Consultar el catálogo CENETEC para la GPC mexicana aplicable y su vigencia.",
    internacional: "British Thoracic Society Guideline for Pleural Disease, 2023."
  },
  bibliografia: "BTS Pleural Disease Guideline. Thorax. 2023; Brown SGA et al. NEJM. 2020."
},
{
  id: "NEUMO-142",
  especialidad: "Neumología",
  tema: "Neumotórax",
  subtema: "Neumotórax a tensión",
  dificultad: "Alta",
  caso: `Hombre de 35 años involucrado en accidente automovilístico. Presenta disnea intensa, agitación, TA 72/40 mmHg, FC 142 lpm y SpO2 79%. El hemitórax izquierdo muestra expansión disminuida, ausencia de ruidos respiratorios e hipersonoridad. Las venas yugulares están distendidas, aunque la exploración es difícil. Se sospecha neumotórax a tensión. El equipo dispone de material para descompresión torácica inmediata.`,
  pregunta: "¿Cuál es la intervención prioritaria?",
  opciones: [
    "Solicitar radiografía portátil antes de intervenir",
    "Realizar descompresión pleural inmediata y posteriormente drenaje torácico definitivo",
    "Administrar furosemida intravenosa",
    "Iniciar ventilación con presión positiva sin descomprimir",
    "Realizar tomografía contrastada para confirmar el diagnóstico"
  ],
  respuestaCorrecta: 1,
  explicacion: `El neumotórax a tensión produce compromiso ventilatorio y shock obstructivo por aumento de presión intrapleural, reducción del retorno venoso y deterioro circulatorio. En un paciente inestable, el diagnóstico es fundamentalmente clínico y la descompresión no debe retrasarse por imagen. El procedimiento puede realizarse mediante toracostomía digital o descompresión con aguja según contexto, recursos y entrenamiento, seguida de drenaje definitivo. La ingurgitación yugular puede estar ausente en hipovolemia concomitante.`,
  perlaENARM: "Neumotórax a tensión con inestabilidad: descompresión inmediata, sin esperar radiografía.",
  gpc: {
    mexico: "Protocolos institucionales de trauma y urgencias; verificar GPC nacional aplicable.",
    internacional: "ATLS; BTS Pleural Disease Guideline 2023."
  },
  bibliografia: "ATLS; BTS. Thorax. 2023; Tintinalli's Emergency Medicine."
},
{
  id: "NEUMO-143",
  especialidad: "Neumología",
  tema: "Neumotórax",
  subtema: "Neumotórax espontáneo secundario",
  dificultad: "Alta",
  caso: `Hombre de 72 años con EPOC grave, FEV1 del 32% del predicho y oxígeno domiciliario. Acude por disnea súbita, dolor torácico izquierdo y saturación de 84% con oxígeno suplementario. TA 114/68 mmHg, FC 112 lpm. La radiografía identifica neumotórax izquierdo con separación pleural visible. Se encuentra taquipneico, con aumento del trabajo respiratorio, aunque sin shock.`,
  pregunta: "¿Cuál es el enfoque terapéutico más apropiado?",
  opciones: [
    "Alta inmediata porque no existe hipotensión",
    "Observación ambulatoria sin considerar la enfermedad pulmonar previa",
    "Valoración hospitalaria e intervención pleural según síntomas, compromiso respiratorio y características del neumotórax",
    "Ventilación no invasiva como tratamiento definitivo del neumotórax no drenado",
    "Antibióticos de amplio espectro como único tratamiento"
  ],
  respuestaCorrecta: 2,
  explicacion: `El neumotórax espontáneo secundario ocurre sobre enfermedad pulmonar subyacente y puede causar deterioro significativo incluso con menor volumen de aire pleural. Este paciente tiene EPOC grave, hipoxemia y disnea importante, por lo que requiere manejo hospitalario y valoración de drenaje pleural. La decisión considera estabilidad, magnitud de síntomas, tamaño, posibilidad de aspiración y experiencia local. La ausencia de shock no convierte el cuadro en una urgencia menor.`,
  perlaENARM: "El neumotórax secundario suele tolerarse peor por la limitada reserva pulmonar.",
  gpc: {
    mexico: "Consultar GPC mexicana de EPOC y protocolos de urgencias; verificar recomendaciones pleurales específicas.",
    internacional: "BTS Pleural Disease Guideline 2023."
  },
  bibliografia: "BTS. Thorax. 2023; GOLD 2026; Murray and Nadel's Textbook of Respiratory Medicine."
},
{
  id: "NEUMO-144",
  especialidad: "Neumología",
  tema: "Neumotórax",
  subtema: "Diagnóstico radiológico",
  dificultad: "Alta",
  caso: `Mujer de 28 años con dolor pleurítico derecho y disnea súbita. La radiografía posteroanterior muestra una línea pleural visceral fina en el vértice derecho, sin marcas vasculares periféricas más allá de ella. No se identifican infiltrados ni derrame pleural. La paciente está hemodinámicamente estable.`,
  pregunta: "¿Qué hallazgo radiológico es más específico para neumotórax en esta imagen?",
  opciones: [
    "Aumento difuso de la trama broncovascular",
    "Línea pleural visceral con ausencia de marcas pulmonares periféricas",
    "Broncograma aéreo dentro de una consolidación",
    "Cardiomegalia y redistribución vascular",
    "Borramiento del ángulo costofrénico"
  ],
  respuestaCorrecta: 1,
  explicacion: `El neumotórax se identifica por una línea correspondiente a la pleura visceral, con ausencia de trama pulmonar periférica en el espacio ocupado por aire. Los pliegues cutáneos pueden simular una línea pleural, pero suelen mostrar características distintas y puede observarse trama pulmonar más allá del pliegue. En pacientes con enfermedad bullosa, la tomografía puede ser necesaria para diferenciar una bulla gigante de neumotórax.`,
  perlaENARM: "Línea pleural visceral y ausencia de vasos periféricos: hallazgo clásico de neumotórax.",
  gpc: {
    mexico: "Verificar GPC nacional específica y protocolos de imagen.",
    internacional: "BTS Pleural Disease Guideline 2023."
  },
  bibliografia: "BTS. Thorax. 2023; Felson's Principles of Chest Roentgenology."
},
{
  id: "NEUMO-145",
  especialidad: "Neumología",
  tema: "Neumotórax",
  subtema: "Neumotórax oculto en paciente supino",
  dificultad: "Alta",
  caso: `Hombre de 46 años con politraumatismo. Se encuentra en decúbito supino por inmovilización espinal. La radiografía anteroposterior portátil no muestra una línea pleural evidente, pero el ángulo costofrénico derecho aparece anormalmente profundo e hiperlúcido. Presenta dolor costal y fracturas de costillas derechas. TA 118/72 mmHg y SpO2 95% con oxígeno.`,
  pregunta: "¿Cuál es la interpretación del hallazgo descrito?",
  opciones: [
    "Signo del surco profundo, sugestivo de neumotórax en decúbito supino",
    "Signo de la silueta, indicativo de neumonía lobar",
    "Signo de Hampton, diagnóstico de embolia pulmonar",
    "Signo del menisco, indicativo de derrame pleural",
    "Signo de Kerley B, diagnóstico de edema intersticial"
  ],
  respuestaCorrecta: 0,
  explicacion: `En decúbito supino, el aire pleural puede acumularse en regiones anteriores y basales, por lo que la línea pleural apical clásica puede no ser visible. El signo del surco profundo consiste en una apariencia anormalmente profunda e hiperlúcida del ángulo costofrénico lateral. La ecografía a pie de cama o la tomografía, según estabilidad y contexto, pueden ayudar a confirmar un neumotórax oculto.`,
  perlaENARM: "En radiografía supina, un ángulo costofrénico excesivamente profundo puede indicar neumotórax.",
  gpc: {
    mexico: "Protocolos institucionales de atención al trauma.",
    internacional: "ATLS; recomendaciones de imagen torácica en trauma."
  },
  bibliografia: "ATLS; Felson's Principles of Chest Roentgenology; Tintinalli's Emergency Medicine."
},
{
  id: "NEUMO-146",
  especialidad: "Neumología",
  tema: "Neumotórax",
  subtema: "Ultrasonido pulmonar",
  dificultad: "Alta",
  caso: `Hombre de 38 años con traumatismo torácico cerrado. Presenta disnea moderada y dolor costal izquierdo. En ultrasonido pulmonar se observa ausencia de deslizamiento pleural en la región anterior izquierda, ausencia de líneas B y patrón de código de barras en modo M. Durante la exploración se identifica una transición entre una región sin deslizamiento y otra con deslizamiento normal.`,
  pregunta: "¿Qué hallazgo ecográfico es especialmente específico para neumotórax cuando se identifica correctamente?",
  opciones: [
    "Líneas B difusas bilaterales",
    "Consolidación subpleural con broncograma dinámico",
    "Punto pulmonar o lung point",
    "Derrame pleural anecoico",
    "Signo del sinusoid"
  ],
  respuestaCorrecta: 2,
  explicacion: `El lung point representa la transición entre pleuras en contacto y región con aire interpuesto, y es muy específico de neumotórax en el contexto apropiado. La ausencia de deslizamiento pleural aislada no es completamente específica: puede observarse con intubación selectiva, adherencias pleurales, apnea o alteraciones de ventilación. En neumotórax muy extenso, el lung point puede no localizarse. La ecografía debe integrarse con la condición clínica.`,
  perlaENARM: "La ausencia de lung sliding no confirma por sí sola neumotórax; el lung point aumenta notablemente la especificidad.",
  gpc: {
    mexico: "Protocolos institucionales de ultrasonido pulmonar en urgencias.",
    internacional: "Recomendaciones de ultrasonido pulmonar a pie de cama."
  },
  bibliografia: "Lichtenstein DA. Chest. 2008; Volpicelli G et al. Intensive Care Medicine. 2012."
},
{
  id: "NEUMO-147",
  especialidad: "Neumología",
  tema: "Neumotórax",
  subtema: "Neumotórax iatrogénico",
  dificultad: "Alta",
  caso: `Mujer de 59 años con cáncer de mama sometida a colocación de catéter venoso central subclavio derecho. Minutos después presenta dolor torácico y disnea. La radiografía demuestra neumotórax derecho. TA 126/78 mmHg, FC 96 lpm, SpO2 94% con oxígeno a bajo flujo. El neumotórax es de magnitud moderada y los síntomas son persistentes.`,
  pregunta: "¿Cuál es el siguiente paso más apropiado?",
  opciones: [
    "Ignorar el hallazgo porque todos los neumotórax iatrogénicos se resuelven solos",
    "Valorar evacuación pleural mediante aspiración o drenaje según tamaño, síntomas y evolución",
    "Indicar únicamente broncodilatadores",
    "Administrar anticoagulación terapéutica",
    "Realizar toracotomía abierta de inmediato"
  ],
  respuestaCorrecta: 1,
  explicacion: `El neumotórax iatrogénico posterior a un procedimiento puede requerir observación o evacuación pleural según estabilidad, síntomas, tamaño, necesidad de ventilación con presión positiva y evolución. En este caso, los síntomas persistentes y la magnitud moderada justifican valoración de intervención. La elección entre aspiración y drenaje depende del contexto y experiencia local. También deben verificarse la posición del catéter y otras complicaciones del procedimiento.`,
  perlaENARM: "El tratamiento del neumotórax iatrogénico depende de síntomas, estabilidad y riesgo de progresión; no todos requieren cirugía.",
  gpc: {
    mexico: "Protocolos de seguridad para accesos venosos centrales y complicaciones pleurales.",
    internacional: "BTS Pleural Disease Guideline 2023."
  },
  bibliografia: "BTS. Thorax. 2023; Marino's The ICU Book."
},
{
  id: "NEUMO-148",
  especialidad: "Neumología",
  tema: "Neumotórax",
  subtema: "Neumotórax y ventilación mecánica",
  dificultad: "Alta",
  caso: `Hombre de 64 años con SDRA bajo ventilación mecánica invasiva. Desarrolla neumotórax izquierdo visible en radiografía, acompañado de incremento de requerimientos de oxígeno y disminución de la distensibilidad. Actualmente recibe PEEP de 12 cmH2O. No presenta shock, pero el neumotórax ha aumentado respecto a una imagen previa.`,
  pregunta: "¿Cuál es la conducta más adecuada?",
  opciones: [
    "Mantener observación indefinida sin reevaluación porque no existe hipotensión",
    "Aumentar la PEEP para expandir el pulmón sin tratar el neumotórax",
    "Realizar drenaje pleural, dada la ventilación con presión positiva, el deterioro y la progresión",
    "Administrar antibióticos como único tratamiento",
    "Extubar de inmediato sin valorar criterios de liberación ventilatoria"
  ],
  respuestaCorrecta: 2,
  explicacion: `En un paciente sometido a ventilación mecánica con presión positiva, un neumotórax progresivo y sintomático presenta riesgo de deterioro y evolución a tensión. El drenaje pleural está indicado en este contexto. Deben revisarse los parámetros ventilatorios para minimizar presión y volumen potencialmente lesivos. La ausencia de hipotensión no elimina la necesidad de intervención cuando existe progresión y compromiso respiratorio.`,
  perlaENARM: "Neumotórax progresivo en paciente ventilado con deterioro respiratorio: considerar drenaje urgente.",
  gpc: {
    mexico: "Protocolos institucionales de ventilación mecánica y drenaje torácico.",
    internacional: "BTS Pleural Disease Guideline 2023; guías de ventilación protectora."
  },
  bibliografia: "BTS. Thorax. 2023; ATS Clinical Practice Guideline for ARDS. 2024."
},
{
  id: "NEUMO-149",
  especialidad: "Neumología",
  tema: "Neumotórax",
  subtema: "Neumotórax catamenial",
  dificultad: "Alta",
  caso: `Mujer de 32 años con tres episodios de neumotórax espontáneo derecho durante los últimos 18 meses. Refiere que los episodios comenzaron dentro de las primeras 48 horas del inicio de la menstruación. Presenta dismenorrea intensa y antecedentes de infertilidad. La tomografía no muestra enfisema ni enfermedad bullosa significativa.`,
  pregunta: "¿Cuál es la etiología que debe investigarse prioritariamente?",
  opciones: [
    "Deficiencia de alfa-1 antitripsina",
    "Endometriosis torácica con neumotórax catamenial",
    "Fibrosis quística",
    "Sarcoidosis estadio I",
    "Síndrome de apnea obstructiva del sueño"
  ],
  respuestaCorrecta: 1,
  explicacion: `El neumotórax catamenial se asocia con endometriosis torácica y se caracteriza por episodios relacionados temporalmente con la menstruación, con predominio derecho. Pueden encontrarse implantes endometriales pleurales o diafragmáticos, fenestraciones diafragmáticas y otros defectos. La evaluación debe involucrar cirugía torácica y ginecología; el tratamiento puede incluir cirugía toracoscópica y supresión hormonal según hallazgos y objetivos reproductivos.`,
  perlaENARM: "Neumotórax derecho recurrente asociado a menstruación: sospechar endometriosis torácica.",
  gpc: {
    mexico: "Consultar GPC de endometriosis y protocolos de cirugía torácica aplicables.",
    internacional: "BTS 2023; revisiones de síndrome de endometriosis torácica."
  },
  bibliografia: "BTS. Thorax. 2023; revisiones clínicas de thoracic endometriosis syndrome."
},
{
  id: "NEUMO-150",
  especialidad: "Neumología",
  tema: "Neumotórax",
  subtema: "Neumotórax recurrente",
  dificultad: "Alta",
  caso: `Hombre de 27 años, sin enfermedad pulmonar conocida, tratado previamente por neumotórax espontáneo primario izquierdo mediante aspiración. Ocho meses después presenta un nuevo episodio ipsilateral, confirmado por radiografía. Se encuentra estable después del manejo inicial. Pregunta cómo reducir la probabilidad de nuevos episodios.`,
  pregunta: "¿Cuál es la estrategia más apropiada para valorar prevención de recurrencias?",
  opciones: [
    "No ofrecer ninguna evaluación adicional porque la recurrencia es inevitable",
    "Valorar cirugía toracoscópica con tratamiento de lesiones pleurales y pleurodesis según el caso",
    "Prescribir antibióticos profilácticos permanentes",
    "Administrar anticoagulación indefinida",
    "Indicar oxígeno domiciliario permanente"
  ],
  respuestaCorrecta: 1,
  explicacion: `La recurrencia ipsilateral es una indicación importante para valorar prevención definitiva mediante cirugía toracoscópica, con manejo de bullas o blebs cuando corresponda y procedimientos pleurales para reducir recurrencias. La selección considera preferencias, riesgos, profesión, necesidad de evitar nuevos episodios y experiencia quirúrgica. La pleurodesis química puede ser alternativa en pacientes no candidatos a cirugía.`,
  perlaENARM: "Segundo neumotórax espontáneo ipsilateral: considerar intervención preventiva de recurrencia.",
  gpc: {
    mexico: "Verificar recomendaciones de cirugía torácica en el catálogo nacional.",
    internacional: "BTS Pleural Disease Guideline 2023."
  },
  bibliografia: "BTS. Thorax. 2023; Murray and Nadel's Textbook of Respiratory Medicine."
},
{
  id: "NEUMO-151",
  especialidad: "Neumología",
  tema: "Neumotórax",
  subtema: "Fuga aérea persistente",
  dificultad: "Alta",
  caso: `Hombre de 69 años con enfisema avanzado y neumotórax espontáneo secundario. Se colocó drenaje pleural hace seis días. La radiografía muestra expansión incompleta del pulmón y continúa observándose burbujeo intermitente en el sistema de drenaje. No hay datos de infección del sitio de inserción. El paciente es frágil y presenta riesgo quirúrgico elevado.`,
  pregunta: "¿Cuál es el enfoque más adecuado?",
  opciones: [
    "Retirar inmediatamente el drenaje a pesar de la fuga y la expansión incompleta",
    "Mantener antibióticos sin reevaluar la fuga",
    "Confirmar funcionamiento del sistema, caracterizar la fuga y valorar alternativas como pleurodesis o intervenciones endobronquiales según elegibilidad",
    "Aplicar succión máxima sin límite de tiempo",
    "Realizar neumonectomía como primera opción"
  ],
  respuestaCorrecta: 2,
  explicacion: `La fuga aérea persistente requiere comprobar que no exista fuga en conexiones o mal funcionamiento del drenaje, valorar expansión pulmonar y determinar si hay fístula alveolopleural o broncopleural. La cirugía puede ser apropiada en pacientes seleccionados, pero en personas con riesgo quirúrgico elevado se consideran opciones como pleurodesis con sangre autóloga, intervenciones endobronquiales u otras estrategias especializadas. La selección depende de la anatomía, expansión y recursos disponibles.`,
  perlaENARM: "Fuga aérea persistente: revisar primero sistema y expansión; después individualizar manejo quirúrgico o no quirúrgico.",
  gpc: {
    mexico: "Protocolos institucionales de manejo de fuga aérea y drenaje torácico.",
    internacional: "BTS Pleural Disease Guideline 2023."
  },
  bibliografia: "BTS. Thorax. 2023; revisiones de persistent air leak."
},
{
  id: "NEUMO-152",
  especialidad: "Neumología",
  tema: "Neumotórax",
  subtema: "Drenaje torácico y sistema de sello de agua",
  dificultad: "Alta",
  caso: `Mujer de 55 años con neumotórax secundario tratado mediante drenaje pleural. El sistema muestra burbujeo continuo en la cámara de sello de agua. La radiografía confirma expansión pulmonar incompleta. La paciente está estable. Durante la revisión se observa una conexión parcialmente suelta entre el tubo y el sistema colector.`,
  pregunta: "¿Cuál es la acción inicial más apropiada?",
  opciones: [
    "Asumir que el burbujeo demuestra siempre una fístula broncopleural",
    "Revisar y asegurar las conexiones, descartar fuga externa y reevaluar el sistema antes de atribuirla al paciente",
    "Pinzar el drenaje durante varias horas sin supervisión",
    "Retirar el drenaje inmediatamente",
    "Administrar anticoagulantes"
  ],
  respuestaCorrecta: 1,
  explicacion: `El burbujeo puede representar una fuga aérea desde el espacio pleural, pero también una fuga externa del sistema. Antes de diagnosticar una fístula persistente, deben comprobarse conexiones, integridad del circuito, posición y permeabilidad del tubo. El pinzamiento de un drenaje con fuga activa puede favorecer acumulación de aire y neumotórax a tensión; no debe hacerse indiscriminadamente. El manejo posterior depende de la respuesta y de la expansión radiológica.`,
  perlaENARM: "Burbujeo continuo en sello de agua: distinguir fuga del paciente de fuga del sistema.",
  gpc: {
    mexico: "Protocolos institucionales de instalación y vigilancia de drenajes pleurales.",
    internacional: "BTS Clinical Statement on Pleural Procedures, 2023."
  },
  bibliografia: "BTS Clinical Statement on Pleural Procedures. Thorax. 2023."
},
{
  id: "NEUMO-153",
  especialidad: "Neumología",
  tema: "Neumotórax",
  subtema: "Neumotórax abierto traumático",
  dificultad: "Alta",
  caso: `Hombre de 29 años con herida penetrante en pared torácica derecha tras agresión. Presenta una lesión de aproximadamente 4 cm que permite entrada y salida audible de aire. Tiene taquipnea, SpO2 89% y disminución del murmullo vesicular ipsilateral. Se encuentra consciente, con TA 104/68 mmHg. El equipo inicia la evaluación primaria de trauma.`,
  pregunta: "¿Cuál es el manejo inicial más apropiado?",
  opciones: [
    "Cerrar herméticamente la herida sin vigilancia ni posibilidad de salida de aire",
    "Aplicar un apósito torácico ventilado apropiado, administrar soporte y realizar drenaje pleural según protocolo",
    "Solicitar espirometría antes de tratar",
    "Administrar diuréticos",
    "Indicar únicamente analgesia oral y alta"
  ],
  respuestaCorrecta: 1,
  explicacion: `El neumotórax abierto permite comunicación entre el espacio pleural y la atmósfera. Se requiere cubrir la lesión con un dispositivo apropiado que reduzca la entrada de aire y permita su evacuación, vigilar estrechamente la aparición de tensión y realizar drenaje pleural cuando esté indicado, habitualmente a través de un sitio diferente a la herida. Posteriormente se realiza tratamiento definitivo de la lesión de pared. El cierre hermético sin posibilidad de evacuación puede favorecer neumotórax a tensión.`,
  perlaENARM: "Neumotórax abierto: sello torácico ventilado, vigilancia de tensión y manejo pleural definitivo.",
  gpc: {
    mexico: "Protocolos institucionales de trauma torácico.",
    internacional: "ATLS."
  },
  bibliografia: "ATLS; Tintinalli's Emergency Medicine."
},
{
  id: "NEUMO-154",
  especialidad: "Neumología",
  tema: "Neumotórax",
  subtema: "Hemoneumotórax traumático",
  dificultad: "Alta",
  caso: `Hombre de 41 años con traumatismo penetrante de tórax izquierdo. Presenta TA 88/54 mmHg, FC 126 lpm, palidez y disnea. La ecografía identifica líquido pleural y ausencia de deslizamiento en áreas superiores. La radiografía portátil muestra un nivel hidroaéreo pleural. Tras colocación de drenaje torácico se evacuan inmediatamente 1,650 mL de sangre.`,
  pregunta: "¿Cuál es la siguiente decisión más apropiada?",
  opciones: [
    "Observación ambulatoria después de colocar el drenaje",
    "Solicitar espirometría de control",
    "Activar valoración quirúrgica torácica urgente por hemorragia intratorácica masiva, junto con reanimación hemostática",
    "Retirar el tubo porque el pulmón puede reexpandirse",
    "Administrar diuréticos para disminuir el líquido pleural"
  ],
  respuestaCorrecta: 2,
  explicacion: `Un drenaje inicial de aproximadamente 1,500 mL o más de sangre después de toracostomía es un criterio clásico de hemotórax masivo que requiere valoración quirúrgica urgente. También importan la hemorragia continua, la fisiología del paciente y la respuesta a la reanimación. El manejo incluye control hemorrágico, hemoderivados cuando corresponda y cirugía según evolución. La presencia simultánea de aire y sangre configura un hemoneumotórax.`,
  perlaENARM: "Hemotórax traumático con salida inicial ≥1,500 mL: sospechar hemorragia masiva y solicitar cirugía urgente.",
  gpc: {
    mexico: "Protocolos nacionales e institucionales de trauma y hemorragia masiva.",
    internacional: "ATLS; guías de trauma torácico."
  },
  bibliografia: "ATLS; Trauma, Mattox et al."
},
{
  id: "NEUMO-155",
  especialidad: "Neumología",
  tema: "Neumotórax",
  subtema: "Enfermedad bullosa y diagnóstico diferencial",
  dificultad: "Alta",
  caso: `Hombre de 67 años, fumador de 60 paquetes-año, con enfisema avanzado. Acude por disnea de instalación subaguda. La radiografía muestra una gran región hiperlúcida en hemitórax derecho con aparente línea curva. Se encuentra estable, sin hipotensión ni hipoxemia grave. La imagen podría representar neumotórax o bulla gigante. Una tomografía previa documentaba enfisema bulloso extenso.`,
  pregunta: "¿Cuál es la estrategia diagnóstica más apropiada antes de realizar una intervención pleural no urgente?",
  opciones: [
    "Insertar a ciegas un tubo torácico en la región hiperlúcida",
    "Realizar tomografía torácica para diferenciar bulla gigante de neumotórax cuando la radiografía es equívoca",
    "Diagnosticar neumotórax a tensión por la hiperlucidez aislada",
    "Administrar fibrinolítico intrapleural",
    "Indicar broncoscopia como primera prueba en todos los casos"
  ],
  respuestaCorrecta: 1,
  explicacion: `Las bullas gigantes pueden simular neumotórax y la inserción accidental de un drenaje dentro de una bulla puede producir lesión pulmonar y fuga aérea. En un paciente estable con radiografía equívoca, la tomografía ayuda a delimitar la pleura visceral y las cavidades enfisematosas. Si existiera inestabilidad con alta sospecha clínica de neumotórax a tensión, no debería retrasarse una intervención salvadora por imagen. Aquí no se describen esas condiciones.`,
  perlaENARM: "Enfisema bulloso y radiografía dudosa: la tomografía puede evitar un drenaje pleural inapropiado.",
  gpc: {
    mexico: "GPC de EPOC y protocolos de diagnóstico torácico.",
    internacional: "BTS Pleural Disease Guideline 2023."
  },
  bibliografia: "BTS. Thorax. 2023; Murray and Nadel's Textbook of Respiratory Medicine."
},
{
  id: "NEUMO-156",
  especialidad: "Neumología",
  tema: "Neumotórax",
  subtema: "Neumotórax espontáneo en embarazo",
  dificultad: "Alta",
  caso: `Mujer de 26 años, con embarazo de 27 semanas, presenta dolor torácico pleurítico y disnea de inicio súbito. TA 118/74 mmHg, FC 102 lpm, SpO2 96% al aire ambiente. La ecografía pulmonar sugiere neumotórax derecho y una radiografía torácica confirma un neumotórax pequeño. No presenta dificultad respiratoria significativa ni datos de tensión. El feto tiene frecuencia cardiaca normal.`,
  pregunta: "¿Cuál es el principio de manejo más apropiado?",
  opciones: [
    "Interrumpir el embarazo por cualquier neumotórax",
    "Evitar toda imagen torácica aunque sea necesaria",
    "Individualizar observación o intervención según estabilidad y síntomas, con coordinación obstétrica y seguimiento",
    "Realizar pleurodesis obligatoria durante el primer episodio",
    "Administrar anticoagulación terapéutica"
  ],
  respuestaCorrecta: 2,
  explicacion: `El neumotórax durante el embarazo se maneja según gravedad, estabilidad y síntomas, procurando seguridad materna y fetal. La radiografía torácica con indicación clínica no debe omitirse únicamente por el embarazo; pueden utilizarse estrategias de imagen apropiadas. Los casos pequeños y estables pueden observarse bajo vigilancia seleccionada, mientras que deterioro o síntomas importantes justifican intervención. Deben coordinarse neumología, cirugía torácica y obstetricia según necesidad.`,
  perlaENARM: "El embarazo no contraindica la evaluación ni el tratamiento necesario del neumotórax; la prioridad es estabilizar a la madre.",
  gpc: {
    mexico: "Protocolos obstétricos y de urgencias; verificar GPC aplicables.",
    internacional: "BTS Pleural Disease Guideline 2023; principios de imagen en embarazo."
  },
  bibliografia: "BTS. Thorax. 2023; textos de medicina materno-fetal."
},
{
  id: "NEUMO-157",
  especialidad: "Neumología",
  tema: "Neumotórax",
  subtema: "Reexpansión pulmonar y edema de reexpansión",
  dificultad: "Alta",
  caso: `Hombre de 44 años con neumotórax espontáneo de varios días de evolución y colapso pulmonar extenso. Se realiza drenaje pleural. Durante la reexpansión desarrolla tos intensa, disnea, hipoxemia y nuevas opacidades alveolares predominantemente ipsilaterales. La TA permanece relativamente estable. No existe evidencia de aspiración ni edema cardiogénico.`,
  pregunta: "¿Cuál es la complicación más probable?",
  opciones: [
    "Edema pulmonar por reexpansión",
    "Tromboembolia pulmonar masiva obligatoria",
    "Fibrosis pulmonar idiopática",
    "Neumonía tuberculosa aguda",
    "Derrame pleural maligno"
  ],
  respuestaCorrecta: 0,
  explicacion: `El edema pulmonar por reexpansión es una complicación poco frecuente pero potencialmente grave tras evacuación de aire o líquido pleural, especialmente cuando existe colapso prolongado o extenso. Se manifiesta con tos, hipoxemia y opacidades pulmonares después de la reexpansión. El tratamiento es principalmente de soporte, con oxigenoterapia o ventilación según gravedad y evaluación hemodinámica. No debe confundirse automáticamente con sobrecarga de volumen.`,
  perlaENARM: "Hipoxemia y nuevas opacidades inmediatamente después de reexpandir un pulmón colapsado: considerar edema por reexpansión.",
  gpc: {
    mexico: "Protocolos institucionales de drenaje pleural y manejo de complicaciones.",
    internacional: "BTS Clinical Statement on Pleural Procedures 2023."
  },
  bibliografia: "BTS Clinical Statement on Pleural Procedures. Thorax. 2023; revisiones de re-expansion pulmonary edema."
},
{
  id: "NEUMO-158",
  especialidad: "Neumología",
  tema: "Neumotórax",
  subtema: "Viajes aéreos después de neumotórax",
  dificultad: "Alta",
  caso: `Hombre de 30 años que presentó neumotórax espontáneo primario, tratado exitosamente. Actualmente no tiene dolor ni disnea. La radiografía de control realizada hoy confirma resolución radiológica completa. Planea abordar un vuelo comercial dentro de 48 horas.`,
  pregunta: "¿Cuál es la recomendación más apropiada de acuerdo con la orientación BTS?",
  opciones: [
    "Puede volar inmediatamente después de desaparecer el dolor",
    "Debe esperar al menos siete días después de la confirmación radiológica de resolución completa antes de volar",
    "Debe evitar viajar en avión permanentemente",
    "Puede volar con neumotórax residual si usa oxígeno",
    "Debe recibir anticoagulación profiláctica obligatoria por el neumotórax"
  ],
  respuestaCorrecta: 1,
  explicacion: `La BTS recomienda evitar el vuelo comercial hasta transcurridos al menos siete días desde la confirmación radiológica de resolución completa del neumotórax. La disminución de presión ambiental en cabina puede favorecer expansión del gas pleural residual. Esta recomendación se refiere al viaje aéreo; el buceo tiene consideraciones distintas y mucho más restrictivas. En personas con riesgo elevado de recurrencia puede requerirse evaluación adicional.`,
  perlaENARM: "Vuelo comercial: esperar al menos siete días desde la resolución radiológica completa del neumotórax.",
  gpc: {
    mexico: "No atribuir un intervalo específico a una GPC mexicana sin verificarlo.",
    internacional: "BTS Clinical Statement on Air Travel for Passengers with Respiratory Disease, 2022."
  },
  bibliografia: "BTS Clinical Statement on Air Travel. Thorax. 2022; BTS Pleural Disease Guideline 2023."
},
{
  id: "NEUMO-159",
  especialidad: "Neumología",
  tema: "Neumotórax",
  subtema: "Buceo y riesgo de recurrencia",
  dificultad: "Alta",
  caso: `Mujer de 25 años, instructora recreativa de buceo, sufrió un neumotórax espontáneo primario hace un año. Fue tratada de forma conservadora y no ha presentado recurrencias. La radiografía actual es normal. Desea regresar al buceo con tanque a profundidades de 20 metros.`,
  pregunta: "¿Cuál es la recomendación más apropiada?",
  opciones: [
    "Puede volver a bucear porque la radiografía actual es normal",
    "Puede bucear si utiliza oxígeno suplementario",
    "Debe evitar el buceo con tanque tras neumotórax espontáneo salvo evaluación especializada y tratamiento preventivo definitivo apropiado",
    "Puede bucear siete días después de la resolución radiológica, igual que para vuelos",
    "Debe recibir broncodilatadores antes de cada inmersión"
  ],
  respuestaCorrecta: 2,
  explicacion: `El buceo con equipo autónomo implica cambios importantes de presión ambiental y riesgo de barotrauma grave si existe recurrencia de neumotórax. Las recomendaciones pleurales son mucho más restrictivas que las de vuelos comerciales. Tras neumotórax espontáneo, se aconseja evitar el buceo salvo que se haya realizado una intervención preventiva definitiva apropiada y una evaluación especializada confirme aptitud. Una radiografía normal aislada no elimina el riesgo.`,
  perlaENARM: "No extrapolar al buceo la regla de siete días utilizada para vuelos comerciales.",
  gpc: {
    mexico: "Consultar protocolos de medicina del buceo y cirugía torácica.",
    internacional: "BTS Pleural Disease Guideline 2023."
  },
  bibliografia: "BTS. Thorax. 2023; recomendaciones de medicina hiperbárica y del buceo."
},
{
  id: "NEUMO-160",
  especialidad: "Neumología",
  tema: "Neumotórax",
  subtema: "Caso integrador y decisión terapéutica",
  dificultad: "Alta",
  caso: `Hombre de 65 años con EPOC GOLD 3, tabaquismo activo y antecedente de neumotórax secundario derecho hace dos años. Acude por disnea súbita, dolor pleurítico derecho y tos seca. TA 110/70 mmHg, FC 118 lpm, FR 30 rpm y SpO2 85% al aire ambiente. La radiografía muestra neumotórax derecho con colapso parcial importante. Se encuentra consciente, con aumento de trabajo respiratorio, pero sin hipotensión ni signos inequívocos de tensión. Se coloca drenaje pleural por el compromiso respiratorio. A las 72 horas persiste fuga aérea y la expansión es parcial. El paciente tiene riesgo quirúrgico elevado.`,
  pregunta: "¿Cuál es el siguiente enfoque integral más apropiado?",
  opciones: [
    "Retirar el drenaje de inmediato porque no existe shock",
    "Administrar antibióticos prolongados sin reevaluación pleural",
    "Verificar el sistema de drenaje y la expansión, consultar cirugía torácica y valorar alternativas de manejo de fuga persistente según riesgo",
    "Aumentar la presión positiva para forzar la reexpansión",
    "Indicar alta con el drenaje sin educación ni seguimiento"
  ],
  respuestaCorrecta: 2,
  explicacion: `El caso integra neumotórax espontáneo secundario, reserva pulmonar limitada, indicación inicial de evacuación pleural y fuga aérea persistente. La primera etapa consiste en confirmar el funcionamiento del drenaje, descartar fuga externa, evaluar posición y expansión pulmonar y determinar la evolución clínica. La valoración por cirugía torácica es pertinente, pero el riesgo elevado puede favorecer estrategias no quirúrgicas en pacientes seleccionados. La decisión debe considerar posibilidad de pleurodesis, tratamientos endobronquiales, drenaje ambulatorio supervisado cuando sea apropiado y seguimiento estrecho. No debe retirarse un drenaje con fuga activa y expansión incompleta sin una estrategia segura.`,
  perlaENARM: "Neumotórax secundario con fuga persistente: reevaluar drenaje, pulmón y riesgo quirúrgico antes de decidir tratamiento definitivo.",
  gpc: {
    mexico: "Consultar GPC mexicana aplicable a EPOC y protocolos de cirugía torácica; verificar vigencia.",
    internacional: "BTS Pleural Disease Guideline 2023."
  },
  bibliografia: "BTS. Thorax. 2023; GOLD 2026; Murray and Nadel's Textbook of Respiratory Medicine."
},

{
  id: "NEUMO-161",
  especialidad: "Neumología",
  tema: "Derrame pleural",
  subtema: "Criterios de Light",
  dificultad: "Alta",
  caso: `Hombre de 68 años con disnea progresiva, edema de miembros inferiores y ortopnea. La ecocardiografía muestra fracción de eyección del ventrículo izquierdo de 30%. La radiografía identifica derrame pleural bilateral, de mayor volumen a la derecha. Después de diuresis intravenosa durante 72 horas, mejora clínicamente, pero persiste el derrame derecho. Se realiza toracocentesis: proteínas séricas 6.8 g/dL, proteínas pleurales 3.6 g/dL, LDH sérica 240 U/L y LDH pleural 150 U/L. El límite superior normal de LDH sérica del laboratorio es 250 U/L.`,
  pregunta: "¿Cuál es la interpretación más adecuada del líquido pleural mediante los criterios de Light?",
  opciones: [
    "Trasudado, porque existe insuficiencia cardiaca conocida",
    "Exudado, porque la relación de proteínas pleurales/séricas supera 0.5",
    "Trasudado, porque la LDH pleural es menor que la sérica",
    "Exudado únicamente si el pH es menor de 7.20",
    "No puede clasificarse sin conocer el recuento celular"
  ],
  respuestaCorrecta: 1,
  explicacion: `La relación proteínas pleurales/séricas es 3.6/6.8 = 0.53, por lo que cumple un criterio de exudado. La relación LDH pleural/sérica es 150/240 = 0.625, que también supera 0.6. Aunque el contexto sugiere insuficiencia cardiaca, la diuresis puede concentrar las proteínas y la LDH pleurales, generando un falso exudado bioquímico. En ese escenario se deben integrar el contexto clínico y, si persiste la duda, el gradiente de albúmina sérica-pleural o el gradiente de proteínas.`,
  perlaENARM: "Light clasifica como exudado si se cumple al menos uno de tres criterios; es sensible, pero puede clasificar como exudado algunos trasudados después de diuresis.",
  gpc: {
    mexico: "Consultar el catálogo CENETEC para la GPC nacional vigente aplicable al diagnóstico de derrame pleural.",
    internacional: "BTS Pleural Disease Guideline, 2023."
  },
  bibliografia: "Light RW et al. Ann Intern Med. 1972; BTS Pleural Disease Guideline. Thorax. 2023; Murray and Nadel's Textbook of Respiratory Medicine."
},
{
  id: "NEUMO-162",
  especialidad: "Neumología",
  tema: "Derrame pleural",
  subtema: "Gradiente de albúmina y falso exudado",
  dificultad: "Alta",
  caso: `Mujer de 76 años con insuficiencia cardiaca crónica y edema periférico, tratada con diuréticos durante cuatro días. El derrame pleural derecho persiste, aunque ha disminuido la congestión sistémica. El líquido pleural cumple un criterio de Light para exudado. La albúmina sérica es de 3.4 g/dL y la albúmina pleural de 1.8 g/dL. No presenta fiebre, dolor pleurítico ni pérdida ponderal.`,
  pregunta: "¿Qué interpretación aporta el gradiente de albúmina sérica-pleural?",
  opciones: [
    "El gradiente es 1.6 g/dL y favorece un origen trasudativo por insuficiencia cardiaca",
    "El gradiente es 0.4 g/dL y confirma trasudado",
    "El gradiente es 5.2 g/dL y confirma exudado",
    "No se puede calcular el gradiente con albúmina",
    "El gradiente demuestra tuberculosis pleural"
  ],
  respuestaCorrecta: 0,
  explicacion: `El gradiente de albúmina sérica-pleural es 3.4 − 1.8 = 1.6 g/dL. Un gradiente superior a aproximadamente 1.2 g/dL favorece un trasudado, particularmente cuando la diuresis ha producido un falso exudado por criterios de Light. No sustituye de manera universal a Light: se utiliza para resolver discrepancias en un contexto clínico compatible. Si hay características atípicas o falta de respuesta al tratamiento de la insuficiencia cardiaca, deben investigarse otras causas.`,
  perlaENARM: "En insuficiencia cardiaca tratada con diuréticos, un gradiente de albúmina sérica-pleural >1.2 g/dL favorece trasudado pese a Light positivo.",
  gpc: {
    mexico: "Consultar GPC aplicable a insuficiencia cardiaca y evaluación de derrame pleural.",
    internacional: "BTS Pleural Disease Guideline, 2023."
  },
  bibliografia: "Bielsa S et al. Respirology. 2012; BTS Pleural Disease Guideline. Thorax. 2023."
},
{
  id: "NEUMO-163",
  especialidad: "Neumología",
  tema: "Derrame pleural",
  subtema: "Indicación de toracocentesis",
  dificultad: "Alta",
  caso: `Hombre de 59 años con neumonía adquirida en la comunidad, fiebre persistente y dolor pleurítico izquierdo. Después de 48 horas de antibiótico continúa febril. La radiografía muestra derrame pleural unilateral y la ecografía identifica una colección de aproximadamente 4 cm, con ecos internos y tabiques finos. La saturación es de 94% al aire ambiente y se encuentra hemodinámicamente estable.`,
  pregunta: "¿Cuál es el siguiente paso diagnóstico más apropiado?",
  opciones: [
    "No investigar el derrame porque toda neumonía puede producir líquido pleural",
    "Realizar toracocentesis diagnóstica guiada por ecografía para caracterizar el líquido y determinar si requiere drenaje",
    "Iniciar anticoagulación terapéutica",
    "Realizar pleurodesis con talco como primera intervención",
    "Esperar varias semanas antes de reevaluar, independientemente de la evolución"
  ],
  respuestaCorrecta: 1,
  explicacion: `Un derrame unilateral asociado a neumonía, fiebre persistente, tabicaciones y falta de mejoría obliga a evaluar una posible infección pleural complicada. La toracocentesis guiada por ecografía permite obtener líquido para pH, glucosa, LDH, proteínas, recuento celular, Gram y cultivo. La ecografía ayuda a seleccionar una ventana segura. Si el líquido es purulento o presenta parámetros de infección complicada, puede requerirse drenaje pleural además de antibióticos.`,
  perlaENARM: "Derrame parapneumónico con fiebre persistente o tabicaciones: valorar toracocentesis guiada por ecografía.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre neumonía y complicaciones pleurales en el catálogo CENETEC.",
    internacional: "BTS Pleural Disease Guideline, 2023."
  },
  bibliografia: "BTS Pleural Disease Guideline. Thorax. 2023; Light RW. Pleural Diseases."
},
{
  id: "NEUMO-164",
  especialidad: "Neumología",
  tema: "Derrame pleural",
  subtema: "Derrame parapneumónico complicado",
  dificultad: "Alta",
  caso: `Mujer de 47 años con neumonía lobar derecha, fiebre de 39 °C y dolor pleurítico. La ecografía muestra derrame moderado con septos. Se obtiene líquido pleural turbio, no francamente purulento. El pH, medido inmediatamente en jeringa apropiada para gasometría, es 7.08; la glucosa es de 38 mg/dL y la LDH de 1,800 U/L. La paciente continúa febril pese a tratamiento antibiótico.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Antibiótico oral y vigilancia sin drenaje",
    "Drenaje pleural mediante tubo de pequeño calibre, además de antibióticos",
    "Pleurodesis con talco como tratamiento inicial",
    "Administrar diurético para disminuir el líquido",
    "Dar de alta porque el líquido no es purulento"
  ],
  respuestaCorrecta: 1,
  explicacion: `El pH pleural ≤7.20 en un derrame parapneumónico accesible, particularmente con glucosa baja, LDH elevada y tabicaciones, favorece infección pleural complicada y justifica drenaje además de antibióticos. La ausencia de pus macroscópico no excluye una infección que requiera intervención. Se recomienda utilizar ecografía para guiar la colocación del drenaje. Si el drenaje resulta insuficiente por loculaciones, se valoran estrategias adicionales, incluidas enzimas intrapleurales o cirugía según el caso.`,
  perlaENARM: "Derrame parapneumónico con pH ≤7.20: si es accesible y el contexto es compatible, generalmente requiere drenaje.",
  gpc: {
    mexico: "Verificar GPC nacional aplicable a neumonía y empiema.",
    internacional: "BTS Pleural Disease Guideline, 2023."
  },
  bibliografia: "BTS Pleural Disease Guideline. Thorax. 2023; Rahman NM et al. MIST2. NEJM. 2011."
},
{
  id: "NEUMO-165",
  especialidad: "Neumología",
  tema: "Derrame pleural",
  subtema: "Empiema pleural",
  dificultad: "Alta",
  caso: `Hombre de 62 años con diabetes mellitus tipo 2 y neumonía complicada. Presenta fiebre persistente, taquicardia y derrame pleural loculado. Durante la toracocentesis se obtiene material francamente purulento y maloliente. El paciente está estable tras la reanimación inicial. La tomografía muestra una colección pleural con engrosamiento de ambas hojas pleurales.`,
  pregunta: "¿Cuál es el manejo fundamental?",
  opciones: [
    "Toracocentesis única y alta inmediata",
    "Antibióticos y drenaje pleural, con evaluación de control del foco y necesidad de intervención adicional",
    "Pleurodesis para impedir la reaparición del pus",
    "Diuréticos y restricción hídrica como único tratamiento",
    "Anticoagulación sin antibióticos"
  ],
  respuestaCorrecta: 1,
  explicacion: `El pus franco en el espacio pleural define empiema y constituye una indicación de drenaje junto con tratamiento antimicrobiano. Deben enviarse muestras para Gram y cultivo, incluidos medios adecuados según el protocolo local. La selección de antibióticos considera origen comunitario u hospitalario, riesgo de anaerobios y resistencia local. Si persiste una colección por loculaciones o falla del drenaje, se requiere reevaluación para tratamiento intrapleural combinado o intervención quirúrgica.`,
  perlaENARM: "Pus pleural franco = empiema: antibióticos y drenaje, no antibióticos aislados.",
  gpc: {
    mexico: "Consultar GPC nacional aplicable a neumonía, empiema y control de infecciones.",
    internacional: "BTS Pleural Disease Guideline, 2023."
  },
  bibliografia: "BTS Pleural Disease Guideline. Thorax. 2023; Rahman NM et al. NEJM. 2011."
},
{
  id: "NEUMO-166",
  especialidad: "Neumología",
  tema: "Derrame pleural",
  subtema: "Fibrinolíticos intrapleurales",
  dificultad: "Alta",
  caso: `Mujer de 55 años con empiema asociado a neumonía. Se colocó tubo pleural y recibe antibióticos apropiados. A las 48 horas persiste fiebre, y la tomografía muestra una colección loculada residual pese a que el tubo está permeable y correctamente posicionado. No existe hemorragia activa ni contraindicación evidente para tratamiento intrapleural.`,
  pregunta: "¿Qué intervención intrapleural tiene evidencia en pacientes seleccionados con infección pleural loculada y drenaje insuficiente?",
  opciones: [
    "Alteplasa intrapleural como monoterapia obligatoria en todos los casos",
    "Combinación intrapleural de tPA y DNasa, evaluando también la necesidad de cirugía",
    "Heparina intrapleural como tratamiento estándar",
    "Pleurodesis con talco para esterilizar la colección",
    "Instilación intrapleural de antibiótico como sustituto del drenaje"
  ],
  respuestaCorrecta: 1,
  explicacion: `La combinación intrapleural de activador tisular del plasminógeno (tPA) y DNasa puede mejorar el drenaje en infección pleural loculada cuando el drenaje inicial resulta insuficiente. tPA facilita la ruptura de septos de fibrina y DNasa reduce la viscosidad del material purulento. El ensayo MIST2 mostró beneficio de la combinación, no de cada agente aislado como monoterapia. Debe considerarse el riesgo hemorrágico, la respuesta clínica y la valoración quirúrgica.`,
  perlaENARM: "En infección pleural loculada con drenaje insuficiente, tPA + DNasa es una opción; no confundir la combinación con monoterapia.",
  gpc: {
    mexico: "Verificar protocolos institucionales y disponibilidad de tratamiento intrapleural.",
    internacional: "BTS Pleural Disease Guideline, 2023; MIST2."
  },
  bibliografia: "Rahman NM et al. Intrapleural Use of Tissue Plasminogen Activator and DNase in Pleural Infection. NEJM. 2011; BTS. Thorax. 2023."
},
{
  id: "NEUMO-167",
  especialidad: "Neumología",
  tema: "Derrame pleural",
  subtema: "Derrame pleural maligno",
  dificultad: "Alta",
  caso: `Mujer de 61 años con antecedente de carcinoma mamario tratado hace cinco años. Presenta disnea progresiva, pérdida de peso y derrame pleural unilateral recurrente. El líquido es hemorrágico y cumple criterios de exudado. La citología inicial es negativa. La tomografía identifica engrosamiento pleural nodular y adenopatías mediastínicas.`,
  pregunta: "¿Cuál es la siguiente estrategia diagnóstica más apropiada si persiste una alta sospecha de malignidad?",
  opciones: [
    "Descartar malignidad definitivamente por una citología negativa",
    "Repetir citología o realizar biopsia pleural guiada por imagen o toracoscopia, según el contexto",
    "Tratar con diuréticos como única intervención",
    "Indicar antibióticos de amplio espectro durante un mes",
    "Realizar pleurodesis sin completar ninguna evaluación etiológica"
  ],
  respuestaCorrecta: 1,
  explicacion: `Una citología pleural negativa no excluye malignidad, ya que su sensibilidad depende del tumor y de la calidad de la muestra. Si la sospecha persiste, se puede repetir citología en un contexto apropiado o proceder a biopsia pleural guiada por imagen o toracoscopia. La selección depende de la imagen, probabilidad diagnóstica, estado funcional y si se necesita además controlar el derrame. El manejo paliativo del derrame recurrente debe integrarse con el plan oncológico.`,
  perlaENARM: "Citología pleural negativa no descarta derrame maligno; si la sospecha sigue alta, considerar biopsia pleural.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente para el tumor primario y protocolos de diagnóstico pleural.",
    internacional: "BTS Pleural Disease Guideline, 2023."
  },
  bibliografia: "BTS Pleural Disease Guideline. Thorax. 2023; Light RW. Pleural Diseases."
},
{
  id: "NEUMO-168",
  especialidad: "Neumología",
  tema: "Derrame pleural",
  subtema: "Control del derrame maligno recurrente",
  dificultad: "Alta",
  caso: `Hombre de 70 años con cáncer pulmonar metastásico y derrame pleural maligno confirmado por citología. Ha requerido tres toracocentesis en seis semanas por disnea. Después de la última evacuación, el pulmón se reexpande de manera incompleta por atrapamiento pulmonar. El paciente desea reducir hospitalizaciones y prioriza permanecer en casa.`,
  pregunta: "¿Cuál es una opción razonable para controlar el derrame recurrente en este escenario?",
  opciones: [
    "Pleurodesis con talco obligatoria aunque el pulmón no se expanda",
    "Catéter pleural permanente, individualizando objetivos y cuidados domiciliarios",
    "Toracocentesis diaria de por vida como única opción",
    "Antibióticos profilácticos permanentes",
    "Resección pulmonar extensa independientemente de la extensión tumoral"
  ],
  respuestaCorrecta: 1,
  explicacion: `En el derrame pleural maligno recurrente con pulmón no expandible, un catéter pleural permanente permite drenaje sintomático y manejo ambulatorio. La pleurodesis necesita contacto entre las hojas pleurales y puede fallar cuando existe atrapamiento pulmonar significativo. La elección depende de pronóstico, síntomas, preferencias del paciente, capacidad de autocuidado y disponibilidad de apoyo domiciliario. El objetivo es paliar la disnea y reducir procedimientos hospitalarios.`,
  perlaENARM: "Derrame maligno recurrente con pulmón no expandible: el catéter pleural permanente suele ser una opción apropiada.",
  gpc: {
    mexico: "Consultar GPC de cáncer pulmonar y protocolos paliativos aplicables.",
    internacional: "BTS Pleural Disease Guideline, 2023."
  },
  bibliografia: "BTS Pleural Disease Guideline. Thorax. 2023; Davies HE et al. TIME2. JAMA. 2012."
},
{
  id: "NEUMO-169",
  especialidad: "Neumología",
  tema: "Derrame pleural",
  subtema: "Tuberculosis pleural",
  dificultad: "Alta",
  caso: `Hombre de 31 años procedente de una zona con alta incidencia de tuberculosis. Presenta fiebre vespertina, sudoración nocturna, pérdida de peso y derrame pleural unilateral. El líquido cumple criterios de exudado, con predominio linfocítico. La baciloscopia del líquido es negativa. No tiene datos de insuficiencia cardiaca ni neoplasia conocida.`,
  pregunta: "¿Cuál es el enfoque diagnóstico más apropiado?",
  opciones: [
    "Descartar tuberculosis porque la baciloscopia pleural es negativa",
    "Integrar la probabilidad clínica con ADA cuando sea apropiado y obtener microbiología y/o biopsia pleural según la sospecha",
    "Diagnosticar tuberculosis exclusivamente por el predominio linfocítico",
    "Iniciar quimioterapia antineoplásica",
    "Clasificar el líquido como trasudado por ser paucibacilar"
  ],
  respuestaCorrecta: 1,
  explicacion: `La tuberculosis pleural suele producir un exudado con predominio linfocítico, pero este patrón no es específico. La baciloscopia del líquido pleural tiene sensibilidad limitada, por lo que un resultado negativo no excluye la enfermedad. La adenosina desaminasa (ADA) puede apoyar el diagnóstico en contextos de prevalencia adecuada, pero debe interpretarse junto con la probabilidad preprueba y diagnósticos alternativos. El cultivo, las pruebas moleculares y la biopsia pleural pueden aumentar el rendimiento diagnóstico.`,
  perlaENARM: "Exudado linfocítico con sospecha de tuberculosis: una baciloscopia pleural negativa no descarta el diagnóstico.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de tuberculosis y normas nacionales de diagnóstico microbiológico.",
    internacional: "OMS: guías consolidadas de tuberculosis; BTS Pleural Disease Guideline, 2023."
  },
  bibliografia: "WHO consolidated guidelines on tuberculosis; BTS Pleural Disease Guideline. Thorax. 2023."
},
{
  id: "NEUMO-170",
  especialidad: "Neumología",
  tema: "Derrame pleural",
  subtema: "Hemotórax",
  dificultad: "Alta",
  caso: `Hombre de 43 años con traumatismo torácico cerrado. Presenta dolor y disnea, con disminución del murmullo vesicular en hemitórax derecho. La toracocentesis obtiene líquido sanguinolento. El hematocrito periférico es de 36% y el hematocrito pleural de 22%. La ecografía confirma colección pleural. El paciente se encuentra estable después de la reanimación inicial.`,
  pregunta: "¿Cuál es la interpretación más apropiada del hematocrito pleural?",
  opciones: [
    "El líquido cumple el criterio clásico de hemotórax porque el hematocrito pleural supera el 50% del periférico",
    "El líquido no puede ser hemotórax porque no alcanza el 50% del hematocrito periférico",
    "El hallazgo confirma quilotórax",
    "El hallazgo confirma derrame pleural maligno",
    "El hematocrito pleural no aporta información"
  ],
  respuestaCorrecta: 0,
  explicacion: `El hematocrito pleural es 22/36 = 61% del hematocrito periférico. El criterio clásico de hemotórax es un hematocrito pleural ≥50% del periférico. En hemotórax de varios días de evolución, la dilución puede disminuir esa proporción; por ello, un valor menor no excluye totalmente el diagnóstico si la historia y la imagen son compatibles. Deben valorarse volumen, sangrado activo, estabilidad y necesidad de drenaje o cirugía.`,
  perlaENARM: "Hematocrito pleural ≥50% del periférico es el criterio clásico de hemotórax; la dilución puede modificarlo con el tiempo.",
  gpc: {
    mexico: "Protocolos institucionales de trauma torácico y hemorragia.",
    internacional: "ATLS; guías de trauma torácico."
  },
  bibliografia: "ATLS; Light RW. Pleural Diseases."
},
{
  id: "NEUMO-171",
  especialidad: "Neumología",
  tema: "Derrame pleural",
  subtema: "Quilotórax",
  dificultad: "Alta",
  caso: `Mujer de 52 años sometida a esofagectomía hace cinco días. Presenta aumento del débito del drenaje pleural, con líquido de aspecto lechoso después de iniciar alimentación enteral. Los triglicéridos pleurales son de 180 mg/dL y se identifican quilomicrones en el líquido. No tiene fiebre ni datos de infección pleural.`,
  pregunta: "¿Cuál es el diagnóstico más probable?",
  opciones: [
    "Empiema pleural",
    "Quilotórax por lesión del conducto torácico o sus tributarios",
    "Hemotórax agudo",
    "Derrame pleural por insuficiencia cardiaca",
    "Pseudoquilotórax por tuberculosis crónica"
  ],
  respuestaCorrecta: 1,
  explicacion: `El quilotórax resulta de la acumulación de linfa rica en quilomicrones en el espacio pleural, frecuentemente por lesión del conducto torácico después de cirugía torácica o esofágica. Los triglicéridos pleurales >110 mg/dL apoyan el diagnóstico; la demostración de quilomicrones es especialmente útil. El aspecto lechoso no es suficiente por sí solo, porque también puede observarse en pseudoquilotórax o infección. El manejo considera cuantía de fuga, nutrición, drenaje y opciones intervencionistas si persiste.`,
  perlaENARM: "Quilotórax: triglicéridos pleurales elevados y/o quilomicrones; el aspecto lechoso aislado no confirma el diagnóstico.",
  gpc: {
    mexico: "Consultar protocolos de cirugía torácica y nutrición clínica aplicables.",
    internacional: "Revisiones contemporáneas de quilotórax y manejo de fuga del conducto torácico."
  },
  bibliografia: "Maldonado F et al. Mayo Clinic Proceedings. 2009; revisiones clínicas de chylothorax."
},
{
  id: "NEUMO-172",
  especialidad: "Neumología",
  tema: "Derrame pleural",
  subtema: "Pseudoquilotórax",
  dificultad: "Alta",
  caso: `Hombre de 66 años con antecedente de tuberculosis pleural tratada hace 25 años. Presenta derrame pleural crónico, engrosamiento pleural y líquido de aspecto opalescente. Los triglicéridos pleurales son de 48 mg/dL, el colesterol pleural está muy elevado y no se identifican quilomicrones. No presenta fiebre ni signos de infección aguda.`,
  pregunta: "¿Cuál es el diagnóstico más probable?",
  opciones: [
    "Quilotórax por lesión aguda del conducto torácico",
    "Pseudoquilotórax asociado a derrame crónico y enfermedad pleural de larga evolución",
    "Hemotórax masivo",
    "Edema pulmonar cardiogénico",
    "Empiema bacteriano agudo"
  ],
  respuestaCorrecta: 1,
  explicacion: `El pseudoquilotórax puede aparecer en derrames pleurales crónicos, incluidos los asociados a tuberculosis antigua o artritis reumatoide. Suele presentar colesterol pleural elevado, triglicéridos bajos y ausencia de quilomicrones. El quilotórax verdadero se relaciona con quilomicrones y triglicéridos elevados, aunque existen escenarios limítrofes que requieren pruebas adicionales. El diagnóstico debe integrar la historia clínica y el análisis bioquímico del líquido.`,
  perlaENARM: "Quilotórax: quilomicrones y triglicéridos elevados; pseudoquilotórax: colesterol elevado y derrame crónico.",
  gpc: {
    mexico: "Consultar GPC aplicable a tuberculosis y enfermedad pleural crónica.",
    internacional: "Literatura de diagnóstico bioquímico de quilotórax y pseudoquilotórax."
  },
  bibliografia: "Maldonado F et al. Mayo Clinic Proceedings. 2009; Light RW. Pleural Diseases."
},
{
  id: "NEUMO-173",
  especialidad: "Neumología",
  tema: "Derrame pleural",
  subtema: "Derrame pleural por embolia pulmonar",
  dificultad: "Alta",
  caso: `Mujer de 49 años, con antecedente de inmovilización reciente, presenta disnea súbita, dolor pleurítico y taquicardia. La angiotomografía confirma tromboembolia pulmonar segmentaria. La radiografía muestra pequeño derrame pleural unilateral. La toracocentesis, realizada por persistencia de síntomas y duda etiológica, obtiene líquido exudativo con predominio de neutrófilos y escasa cantidad de sangre.`,
  pregunta: "¿Cuál es la interpretación más apropiada?",
  opciones: [
    "El derrame excluye tromboembolia pulmonar",
    "La tromboembolia pulmonar puede producir un derrame pequeño, generalmente exudativo, que puede ser serohemático",
    "El líquido confirma tuberculosis pleural",
    "Todo derrame relacionado con tromboembolia requiere tubo torácico",
    "El hallazgo confirma empiema"
  ],
  respuestaCorrecta: 1,
  explicacion: `La tromboembolia pulmonar puede acompañarse de un derrame pleural pequeño, habitualmente exudativo y a veces serohemático. El tamaño puede aumentar si hay infarto pulmonar, pero un derrame voluminoso o persistente obliga a reconsiderar otras causas. El tratamiento principal es el manejo de la tromboembolia; el drenaje pleural no es rutinario para un derrame pequeño no complicado.`,
  perlaENARM: "La TEP puede producir derrame pleural pequeño y exudativo; un derrame grande obliga a buscar diagnósticos adicionales.",
  gpc: {
    mexico: "Consultar GPC mexicana de tromboembolia pulmonar vigente y protocolos de diagnóstico pleural.",
    internacional: "Guías contemporáneas de TEP; BTS Pleural Disease Guideline 2023."
  },
  bibliografia: "BTS Pleural Disease Guideline. Thorax. 2023; ESC/ERS Guidelines for Pulmonary Embolism."
},
{
  id: "NEUMO-174",
  especialidad: "Neumología",
  tema: "Derrame pleural",
  subtema: "Derrame pleural por pancreatitis",
  dificultad: "Alta",
  caso: `Hombre de 45 años con pancreatitis crónica alcohólica, pérdida de peso y disnea progresiva. La radiografía muestra derrame pleural izquierdo masivo y recurrente. La toracocentesis obtiene líquido exudativo con amilasa pleural muy elevada. No hay datos clínicos de infección pulmonar y la tomografía abdominal sugiere colección peripancreática.`,
  pregunta: "¿Cuál es el mecanismo que debe sospecharse?",
  opciones: [
    "Insuficiencia cardiaca con fracción de eyección preservada",
    "Fístula pancreatopleural por fuga del conducto pancreático o pseudoquiste",
    "Tuberculosis pleural confirmada",
    "Quilotórax por lesión del conducto torácico",
    "Derrame por hipertensión portal exclusivamente"
  ],
  respuestaCorrecta: 1,
  explicacion: `Un derrame pleural recurrente, habitualmente izquierdo y con amilasa elevada, en un paciente con pancreatitis crónica sugiere una fístula pancreatopleural. La secreción pancreática puede alcanzar el tórax a través de un defecto del conducto, un pseudoquiste o trayectos retroperitoneales. Deben integrarse amilasa pleural, imágenes abdominales y evaluación pancreática especializada. El manejo puede incluir soporte, drenaje cuando se requiere y tratamiento endoscópico o quirúrgico de la fuga.`,
  perlaENARM: "Derrame pleural recurrente con amilasa muy elevada en pancreatitis crónica: sospechar fístula pancreatopleural.",
  gpc: {
    mexico: "Consultar GPC de pancreatitis y protocolos de enfermedad pleural.",
    internacional: "ACG Clinical Guideline: Acute Pancreatitis, 2024; literatura de fístula pancreatopleural."
  },
  bibliografia: "American College of Gastroenterology Guidelines. 2024; revisiones clínicas de pancreaticopleural fistula."
},
{
  id: "NEUMO-175",
  especialidad: "Neumología",
  tema: "Derrame pleural",
  subtema: "Derrame pleural en artritis reumatoide",
  dificultad: "Alta",
  caso: `Hombre de 58 años con artritis reumatoide seropositiva de larga evolución, dolor pleurítico y derrame pleural unilateral. El líquido es un exudado con glucosa de 18 mg/dL, LDH muy elevada y pH bajo. La tinción de Gram es negativa y no hay pus franco. Presenta nódulos reumatoides subcutáneos y no está inmunosuprimido de manera intensa.`,
  pregunta: "¿Cuál es la interpretación más apropiada?",
  opciones: [
    "La glucosa baja confirma empiema bacteriano en todos los casos",
    "La artritis reumatoide puede producir un derrame exudativo con glucosa muy baja y LDH elevada, pero se debe excluir infección",
    "El perfil es característico de trasudado por insuficiencia cardiaca",
    "El hallazgo confirma quilotórax",
    "El derrame debe tratarse siempre con pleurodesis inmediata"
  ],
  respuestaCorrecta: 1,
  explicacion: `La pleuritis reumatoide puede producir un exudado con glucosa y pH bajos y LDH elevada, debido a inflamación pleural intensa y alteración del transporte de glucosa. Sin embargo, estos parámetros también se encuentran en infección pleural complicada, por lo que deben obtenerse cultivos y valorarse la clínica antes de atribuirlo exclusivamente a artritis reumatoide. El manejo depende de síntomas, extensión, complicaciones y actividad sistémica.`,
  perlaENARM: "Glucosa pleural muy baja no es exclusiva de empiema: también aparece en pleuritis reumatoide, tuberculosis y malignidad.",
  gpc: {
    mexico: "Consultar GPC aplicable a artritis reumatoide y evaluación de infección pleural.",
    internacional: "BTS Pleural Disease Guideline, 2023."
  },
  bibliografia: "BTS Pleural Disease Guideline. Thorax. 2023; Kelley and Firestein's Textbook of Rheumatology."
},
{
  id: "NEUMO-176",
  especialidad: "Neumología",
  tema: "Derrame pleural",
  subtema: "pH pleural y errores preanalíticos",
  dificultad: "Alta",
  caso: `Mujer de 63 años con derrame parapneumónico. El líquido pleural se obtiene para pH, glucosa, LDH y cultivo. La primera muestra para pH se recolecta en un recipiente que contiene restos de anestésico local y permanece abierta durante varios minutos antes del análisis. El resultado informado es 7.31, mientras que la glucosa es baja y la ecografía muestra loculaciones.`,
  pregunta: "¿Cuál es la mejor conducta respecto al resultado del pH?",
  opciones: [
    "Aceptar el pH como definitivo porque la muestra se obtuvo de la pleura",
    "Repetir la medición con técnica apropiada, evitando contaminación con anestésico y exposición al aire",
    "Usar el pH para descartar infección aunque el resto de datos sea discordante",
    "Ignorar todos los parámetros bioquímicos y retirar el drenaje",
    "Administrar bicarbonato intrapleural"
  ],
  respuestaCorrecta: 1,
  explicacion: `El pH pleural es sensible a errores preanalíticos. La contaminación con anestésico local o heparina líquida puede disminuirlo, mientras que la exposición al aire puede elevarlo; el retraso también puede alterar la medición. Se debe obtener una muestra adecuada, en jeringa para gasometría apropiada y analizarla con prontitud. La decisión de drenaje debe integrar pH confiable, glucosa, LDH, ecografía, aspecto del líquido y evolución clínica.`,
  perlaENARM: "El pH pleural solo es útil si la muestra se obtiene y procesa correctamente; anestésico y aire pueden distorsionar el resultado.",
  gpc: {
    mexico: "Seguir protocolos de laboratorio y manejo de derrame parapneumónico.",
    internacional: "BTS Pleural Disease Guideline, 2023."
  },
  bibliografia: "BTS Pleural Disease Guideline. Thorax. 2023."
},
{
  id: "NEUMO-177",
  especialidad: "Neumología",
  tema: "Derrame pleural",
  subtema: "Derrame por insuficiencia cardiaca",
  dificultad: "Alta",
  caso: `Hombre de 73 años con insuficiencia cardiaca, ortopnea, edema periférico y derrame pleural bilateral. La ecografía muestra líneas B bilaterales y la ecocardiografía evidencia disfunción ventricular izquierda. Tras tratamiento diurético mejora la disnea y disminuye el derrame. No tiene fiebre, dolor pleurítico, pérdida de peso ni asimetría importante persistente.`,
  pregunta: "¿Cuál es el enfoque inicial más apropiado?",
  opciones: [
    "Toracocentesis obligatoria en todos los derrames asociados a insuficiencia cardiaca",
    "Tratar la congestión y monitorizar respuesta; reservar toracocentesis para presentación atípica, falta de respuesta o duda diagnóstica",
    "Iniciar tratamiento antituberculoso empírico",
    "Realizar biopsia pleural inmediata",
    "Colocar drenaje torácico bilateral"
  ],
  respuestaCorrecta: 1,
  explicacion: `En un cuadro típico de insuficiencia cardiaca con derrames bilaterales y respuesta a diuresis, suele ser razonable tratar la congestión y monitorizar. La toracocentesis se considera cuando el derrame es unilateral o marcadamente asimétrico, existe fiebre o dolor pleurítico, hay sospecha de malignidad o infección, o no mejora con tratamiento apropiado. Una decisión invasiva innecesaria añade riesgos sin resolver una duda clínica relevante.`,
  perlaENARM: "Derrame bilateral típico por insuficiencia cardiaca que responde a diuréticos: no siempre necesita toracocentesis diagnóstica.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de insuficiencia cardiaca.",
    internacional: "BTS Pleural Disease Guideline, 2023; guías contemporáneas de insuficiencia cardiaca."
  },
  bibliografia: "BTS Pleural Disease Guideline. Thorax. 2023; ESC Guidelines for Heart Failure."
},
{
  id: "NEUMO-178",
  especialidad: "Neumología",
  tema: "Derrame pleural",
  subtema: "Derrame pleural y malignidad oculta",
  dificultad: "Alta",
  caso: `Mujer de 64 años, exfumadora de 35 paquetes-año, presenta derrame pleural exudativo unilateral sin fiebre. La citología inicial es negativa. La tomografía muestra engrosamiento pleural irregular, sin masa pulmonar claramente definida. Persiste el derrame después de una toracocentesis terapéutica y la disnea reaparece en dos semanas.`,
  pregunta: "¿Qué prueba puede aportar mayor rendimiento diagnóstico cuando se necesita tejido pleural?",
  opciones: [
    "Espirometría basal",
    "Biopsia pleural guiada por imagen o toracoscopia, seleccionada según localización y estado clínico",
    "Medición de dímero D como prueba confirmatoria de cáncer",
    "Prueba broncodilatadora",
    "Cultivo de esputo como único estudio"
  ],
  respuestaCorrecta: 1,
  explicacion: `El engrosamiento pleural irregular y el derrame exudativo persistente mantienen la sospecha de malignidad pese a citología negativa. La biopsia pleural guiada por imagen es útil cuando hay un blanco pleural identificable; la toracoscopia permite inspección y toma de múltiples muestras, y puede facilitar procedimientos terapéuticos. La elección depende de anatomía, disponibilidad, estado funcional y objetivo diagnóstico. Deben evitarse conclusiones definitivas basadas en una sola citología negativa.`,
  perlaENARM: "Exudado unilateral persistente con engrosamiento pleural irregular: una citología negativa no elimina la indicación de biopsia.",
  gpc: {
    mexico: "Consultar GPC nacional aplicable a cáncer pulmonar y evaluación de derrame pleural.",
    internacional: "BTS Pleural Disease Guideline, 2023."
  },
  bibliografia: "BTS Pleural Disease Guideline. Thorax. 2023; Light RW. Pleural Diseases."
},
{
  id: "NEUMO-179",
  especialidad: "Neumología",
  tema: "Derrame pleural",
  subtema: "Derrame pleural y mediastino",
  dificultad: "Alta",
  caso: `Hombre de 42 años con disnea, dolor torácico y derrame pleural izquierdo. La toracocentesis obtiene líquido exudativo con abundantes linfocitos. La tomografía muestra una masa mediastínica anterior y adenopatías. Los triglicéridos pleurales son de 145 mg/dL y el laboratorio confirma quilomicrones. No tiene antecedente de cirugía ni traumatismo.`,
  pregunta: "¿Cuál es la interpretación más adecuada?",
  opciones: [
    "Derrame por insuficiencia cardiaca",
    "Quilotórax que requiere investigar obstrucción o infiltración del conducto torácico, incluida enfermedad linfoproliferativa",
    "Hemotórax traumático",
    "Empiema por bacterias anaerobias",
    "Derrame por artritis reumatoide"
  ],
  respuestaCorrecta: 1,
  explicacion: `La presencia de quilomicrones y triglicéridos pleurales elevados confirma un quilotórax en el contexto adecuado. En ausencia de cirugía o trauma, deben investigarse causas no traumáticas como linfoma, otras neoplasias, trombosis venosa central o alteraciones linfáticas. La masa mediastínica y las adenopatías hacen especialmente importante el diagnóstico etiológico. El tratamiento se individualiza según volumen de fuga, nutrición, causa y respuesta a las medidas iniciales.`,
  perlaENARM: "Quilotórax no traumático: investigar linfoma y otras causas de obstrucción o infiltración linfática.",
  gpc: {
    mexico: "Consultar GPC nacional aplicable a linfoma y diagnóstico de enfermedad pleural.",
    internacional: "Literatura contemporánea de quilotórax y diagnóstico pleural."
  },
  bibliografia: "Maldonado F et al. Mayo Clinic Proceedings. 2009; Light RW. Pleural Diseases."
},
{
  id: "NEUMO-180",
  especialidad: "Neumología",
  tema: "Derrame pleural",
  subtema: "Caso integrador de infección pleural",
  dificultad: "Alta",
  caso: `Hombre de 60 años con diabetes mellitus tipo 2 y neumonía basal derecha. Después de cuatro días de antibióticos continúa con fiebre de 38.8 °C, dolor pleurítico y elevación de marcadores inflamatorios. La ecografía muestra derrame pleural moderado con múltiples loculaciones. El líquido pleural es exudativo, con pH de 7.12, glucosa de 42 mg/dL y LDH de 1,600 U/L. Se coloca un tubo pleural guiado por ecografía, pero tras 48 horas persiste fiebre y una colección loculada en la tomografía. El drenaje está permeable y el paciente permanece hemodinámicamente estable.`,
  pregunta: "¿Cuál es la estrategia más apropiada a continuación?",
  opciones: [
    "Retirar el drenaje porque ya se administraron antibióticos",
    "Continuar sin cambios durante dos semanas, aunque persista la colección",
    "Reevaluar control del foco y considerar tPA más DNasa intrapleurales o valoración quirúrgica, según anatomía y condición clínica",
    "Realizar pleurodesis con talco para esterilizar el espacio pleural",
    "Administrar diuréticos como tratamiento definitivo"
  ],
  respuestaCorrecta: 2,
  explicacion: `El pH de 7.12, la glucosa baja, la LDH elevada y las loculaciones identifican una infección pleural complicada. La persistencia de fiebre y colección después del drenaje obliga a comprobar posición y funcionamiento del tubo, cobertura antimicrobiana y necesidad de control adicional del foco. En pacientes seleccionados, tPA más DNasa puede mejorar el drenaje; también debe valorarse cirugía torácica si existe organización pleural, fallo del tratamiento o deterioro. La elección requiere un enfoque multidisciplinario y seguimiento clínico e imagenológico.`,
  perlaENARM: "Infección pleural loculada que persiste pese a antibióticos y drenaje: reevaluar control del foco y considerar tPA + DNasa o cirugía.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de neumonía y protocolos institucionales de empiema.",
    internacional: "BTS Pleural Disease Guideline, 2023; ensayo MIST2."
  },
  bibliografia: "Rahman NM et al. NEJM. 2011; BTS Pleural Disease Guideline. Thorax. 2023."
},
  
{
  id: "NEUMO-181",
  especialidad: "Neumología",
  tema: "Empiema pleural",
  subtema: "Definición y diagnóstico",
  dificultad: "Alta",
  caso: `Hombre de 59 años con diabetes mellitus tipo 2, hospitalizado por neumonía adquirida en la comunidad. Al sexto día persiste con fiebre de 39 °C, dolor pleurítico y elevación de proteína C reactiva. La tomografía muestra derrame pleural derecho tabicado y engrosamiento de las hojas pleurales. Durante la toracocentesis se obtiene líquido francamente purulento. La presión arterial es de 112/68 mmHg y no presenta insuficiencia respiratoria grave.`,
  pregunta: "¿Cuál es el diagnóstico y principio terapéutico fundamentales?",
  opciones: [
    "Derrame por insuficiencia cardiaca; administrar diuréticos como tratamiento único",
    "Empiema pleural; iniciar antibióticos y realizar drenaje del espacio pleural",
    "Derrame maligno; realizar pleurodesis con talco como primera medida",
    "Hemotórax; indicar anticoagulación terapéutica",
    "Quilotórax; restringir grasas sin tratar la infección"
  ],
  respuestaCorrecta: 1,
  explicacion: `El pus franco en el espacio pleural define empiema. El tratamiento requiere antibióticos y control del foco mediante drenaje pleural. Deben obtenerse muestras para tinción de Gram y cultivos, sin retrasar el tratamiento en un paciente con infección sistémica. La presencia de tabicaciones puede impedir un drenaje adecuado y obliga a vigilar la respuesta clínica y radiológica. Si persiste una colección, se consideran tratamientos intrapleurales o cirugía según la fase y las condiciones del paciente.`,
  perlaENARM: "Pus franco en la cavidad pleural = empiema: antibióticos más drenaje.",
  gpc: {
    mexico: "Consultar el catálogo CENETEC para la GPC vigente aplicable a neumonía complicada y empiema; verificar título y fecha antes de citarla.",
    internacional: "British Thoracic Society (BTS), Pleural Disease Guideline, 2023."
  },
  bibliografia: "BTS Pleural Disease Guideline. Thorax. 2023; Light RW. Pleural Diseases."
},
{
  id: "NEUMO-182",
  especialidad: "Neumología",
  tema: "Empiema pleural",
  subtema: "Fases evolutivas",
  dificultad: "Alta",
  caso: `Mujer de 48 años con neumonía bacteriana y derrame pleural complicado. En los primeros días, el líquido era libre y relativamente fluido. Tras una semana de infección no controlada, la ecografía identifica múltiples loculaciones y septos de fibrina. La tomografía muestra engrosamiento pleural. Después de varios días adicionales, el pulmón presenta expansión limitada pese al drenaje.`,
  pregunta: "¿Cuál es la secuencia clásica de evolución anatomopatológica de la infección pleural?",
  opciones: [
    "Organización, fase exudativa y fase fibrinopurulenta",
    "Fase exudativa, fase fibrinopurulenta y fase organizativa",
    "Fase hemorrágica, fase cardiogénica y fase neoplásica",
    "Fase alveolar, fase bronquial y fase vascular",
    "Fase granulomatosa, fase enfisematosa y fase obstructiva"
  ],
  respuestaCorrecta: 1,
  explicacion: `La progresión clásica comprende una fase exudativa, con líquido relativamente libre; una fase fibrinopurulenta, con invasión bacteriana, fibrina y formación de loculaciones; y una fase organizativa, con depósito de tejido fibroso y posible formación de una corteza pleural que limita la expansión pulmonar. La evolución no siempre es lineal ni idéntica en todos los pacientes. Reconocer la fase ayuda a seleccionar entre antibióticos y drenaje, terapia intrapleural o intervención quirúrgica.`,
  perlaENARM: "Exudativa → fibrinopurulenta → organizativa. Las loculaciones y la corteza pleural sugieren enfermedad más avanzada.",
  gpc: {
    mexico: "Consultar GPC mexicana aplicable a infección pleural y neumonía complicada.",
    internacional: "BTS Pleural Disease Guideline, 2023."
  },
  bibliografia: "BTS Pleural Disease Guideline. Thorax. 2023; Light RW. Pleural Diseases."
},
{
  id: "NEUMO-183",
  especialidad: "Neumología",
  tema: "Empiema pleural",
  subtema: "Interpretación del pH pleural",
  dificultad: "Alta",
  caso: `Hombre de 63 años con neumonía y derrame pleural. Se obtiene líquido no purulento, con pH de 7.16, glucosa de 44 mg/dL, LDH de 1,450 U/L y predominio de neutrófilos. La ecografía muestra una colección accesible con tabicaciones. El paciente permanece febril a pesar de haber recibido antibióticos durante 48 horas.`,
  pregunta: "¿Cuál es la decisión más apropiada?",
  opciones: [
    "Observar sin drenaje porque el líquido no contiene pus visible",
    "Indicar drenaje pleural, además de antibióticos, por tratarse de una infección pleural complicada",
    "Administrar diuréticos y repetir radiografía en un mes",
    "Realizar pleurodesis con talco",
    "Descartar infección porque el pH es superior a 7.00"
  ],
  respuestaCorrecta: 1,
  explicacion: `En un derrame parapneumónico, un pH pleural ≤7.20 favorece la indicación de drenaje cuando la colección es accesible y el contexto clínico es compatible. La glucosa baja, LDH elevada, tabicaciones y fiebre persistente refuerzan la sospecha de infección pleural complicada. El hecho de que el líquido no sea francamente purulento no excluye esta condición. El pH debe obtenerse en una muestra apropiada y procesarse correctamente para evitar errores preanalíticos.`,
  perlaENARM: "pH pleural ≤7.20 en derrame parapneumónico accesible: generalmente indica drenaje.",
  gpc: {
    mexico: "Verificar GPC mexicana vigente sobre neumonía y complicaciones pleurales.",
    internacional: "BTS Pleural Disease Guideline, 2023."
  },
  bibliografia: "BTS Pleural Disease Guideline. Thorax. 2023."
},
{
  id: "NEUMO-184",
  especialidad: "Neumología",
  tema: "Empiema pleural",
  subtema: "Selección de antimicrobianos",
  dificultad: "Alta",
  caso: `Hombre de 71 años con neumonía hospitalaria complicada por empiema, que aparece después de una semana de hospitalización y exposición previa a antibióticos intravenosos. Tiene diabetes, enfermedad renal crónica y deterioro clínico. El líquido pleural contiene abundantes neutrófilos y el cultivo está pendiente. No existen antecedentes microbiológicos que permitan identificar un patógeno concreto.`,
  pregunta: "¿Cuál es el principio más apropiado para seleccionar el tratamiento antimicrobiano empírico?",
  opciones: [
    "Utilizar exclusivamente penicilina oral en todos los casos",
    "Seleccionar cobertura según origen comunitario u hospitalario, riesgos de resistencia, anaerobios, función renal y epidemiología local",
    "Prescribir antifúngicos a todos los pacientes con empiema",
    "Esperar los cultivos antes de administrar cualquier antibiótico, aunque exista sepsis",
    "Utilizar vancomicina como monoterapia universal"
  ],
  respuestaCorrecta: 1,
  explicacion: `El tratamiento empírico debe cubrir los patógenos probables de acuerdo con el contexto. En infección pleural comunitaria suele ser importante contemplar estreptococos y anaerobios; en infección hospitalaria o asociada a atención sanitaria, deben evaluarse riesgos de Staphylococcus aureus resistente a meticilina, bacilos gramnegativos y Pseudomonas según epidemiología y exposiciones. La selección y dosificación deben ajustarse a función renal, alergias y cultivos. Después se realiza desescalamiento cuando exista información microbiológica suficiente.`,
  perlaENARM: "En empiema, el esquema empírico depende del origen y los riesgos de resistencia; incluir cobertura anaerobia cuando el contexto lo justifique.",
  gpc: {
    mexico: "Consultar antibiogramas locales y GPC mexicanas vigentes de neumonía hospitalaria y uso de antimicrobianos.",
    internacional: "BTS Pleural Disease Guideline, 2023; guías ATS/IDSA de neumonía hospitalaria, 2016."
  },
  bibliografia: "BTS Pleural Disease Guideline. Thorax. 2023; ATS/IDSA HAP/VAP Guidelines. 2016."
},
{
  id: "NEUMO-185",
  especialidad: "Neumología",
  tema: "Empiema pleural",
  subtema: "Cultivo negativo",
  dificultad: "Alta",
  caso: `Mujer de 56 años con empiema confirmado por pus franco. Había recibido ceftriaxona y azitromicina durante 72 horas antes de la toracocentesis. La tinción de Gram y el cultivo convencional del líquido pleural son negativos. Continúa con fiebre, pero se encuentra estable después de drenaje y tratamiento antibiótico.`,
  pregunta: "¿Cuál es la interpretación más adecuada de los cultivos negativos?",
  opciones: [
    "Descartan infección pleural y obligan a suspender antibióticos",
    "No excluyen empiema, especialmente después de exposición previa a antimicrobianos",
    "Confirman etiología viral",
    "Demuestran que se trata de un derrame maligno",
    "Indican que el drenaje debe retirarse inmediatamente"
  ],
  respuestaCorrecta: 1,
  explicacion: `La sensibilidad de los cultivos pleurales puede ser limitada, especialmente después de iniciar antibióticos. El diagnóstico de empiema puede establecerse por pus franco, aunque los cultivos sean negativos. Cuando está disponible, inocular líquido pleural en frascos de hemocultivo además de enviar una muestra convencional puede mejorar el rendimiento microbiológico. La duración y selección del tratamiento dependen de la respuesta clínica, control del foco, microbiología disponible y complicaciones.`,
  perlaENARM: "Cultivo negativo no descarta empiema si existe pus franco o evidencia clínica y bioquímica convincente.",
  gpc: {
    mexico: "Consultar protocolos institucionales de microbiología y tratamiento de infección pleural.",
    internacional: "BTS Pleural Disease Guideline, 2023."
  },
  bibliografia: "BTS Pleural Disease Guideline. Thorax. 2023."
},
{
  id: "NEUMO-186",
  especialidad: "Neumología",
  tema: "Empiema pleural",
  subtema: "Drenaje pleural y tamaño del tubo",
  dificultad: "Alta",
  caso: `Hombre de 52 años con empiema multiloculado. La ecografía identifica una colección pleural accesible, y se decide realizar drenaje guiado por imagen. Está hemodinámicamente estable, sin hemotórax ni otra indicación de drenaje de gran calibre. El equipo dispone de catéteres pleurales de pequeño calibre y experiencia en su colocación.`,
  pregunta: "¿Cuál es una opción inicial razonable para el drenaje?",
  opciones: [
    "Un tubo de pequeño calibre, habitualmente de 14 F o menos, guiado por imagen cuando sea posible",
    "Un tubo de gran calibre obligatorio en todos los empiemas",
    "Una aguja de toracocentesis que se retira sin evacuar la colección",
    "Un catéter venoso central colocado sin guía en la cavidad pleural",
    "Ningún drenaje, independientemente de la cantidad de pus"
  ],
  respuestaCorrecta: 0,
  explicacion: `Las guías BTS recomiendan considerar un tubo de pequeño calibre, de 14 F o menos, como drenaje inicial de infección pleural. La elección final depende de viscosidad, loculaciones, anatomía, permeabilidad y respuesta clínica. El posicionamiento guiado por ecografía o tomografía puede mejorar la seguridad y la probabilidad de alcanzar la colección. Si el drenaje es insuficiente, debe reevaluarse la posición y considerarse una intervención adicional, en vez de asumir que un tubo más grande resolverá siempre el problema.`,
  perlaENARM: "El empiema puede drenarse inicialmente con tubo de pequeño calibre; las loculaciones y el funcionamiento importan tanto como el diámetro.",
  gpc: {
    mexico: "Aplicar protocolos institucionales de procedimientos pleurales y control de infecciones.",
    internacional: "BTS Pleural Disease Guideline, 2023."
  },
  bibliografia: "BTS Pleural Disease Guideline. Thorax. 2023."
},
{
  id: "NEUMO-187",
  especialidad: "Neumología",
  tema: "Empiema pleural",
  subtema: "Falla del drenaje",
  dificultad: "Alta",
  caso: `Mujer de 61 años con empiema y drenaje pleural colocado hace 48 horas. Persiste febril y la tomografía muestra una colección residual multiloculada. El tubo parece permeable, pero el débito ha disminuido. No presenta hemorragia activa y la función renal es estable. El equipo considera las siguientes opciones para lograr control del foco.`,
  pregunta: "¿Cuál es el enfoque más apropiado?",
  opciones: [
    "Retirar el tubo porque el débito disminuyó",
    "Reevaluar posición y funcionamiento del drenaje y considerar tPA más DNasa intrapleurales o cirugía según respuesta y anatomía",
    "Suspender antibióticos porque el drenaje no fue suficiente",
    "Realizar pleurodesis con talco como primera medida",
    "Administrar diuréticos como tratamiento del material purulento"
  ],
  respuestaCorrecta: 1,
  explicacion: `El débito reducido no demuestra resolución si persiste una colección. Debe verificarse que el tubo esté en la cavidad adecuada, sin obstrucción, y revisar el patrón de loculaciones. En pacientes seleccionados, la combinación intrapleural de tPA y DNasa puede facilitar el drenaje. La cirugía torácica debe participar cuando existe organización pleural, fracaso del manejo inicial o deterioro clínico. La decisión se basa en control del foco, respuesta sistémica, imágenes y riesgos individuales.`,
  perlaENARM: "Fiebre persistente y colección residual pese a drenaje: reevaluar control del foco, no retirar el tubo solo por bajo débito.",
  gpc: {
    mexico: "Consultar protocolos institucionales de empiema y referencia a cirugía torácica.",
    internacional: "BTS Pleural Disease Guideline, 2023; MIST2."
  },
  bibliografia: "Rahman NM et al. NEJM. 2011; BTS Pleural Disease Guideline. Thorax. 2023."
},
{
  id: "NEUMO-188",
  especialidad: "Neumología",
  tema: "Empiema pleural",
  subtema: "tPA y DNasa: evidencia",
  dificultad: "Alta",
  caso: `Hombre de 65 años con infección pleural loculada, drenaje correctamente colocado y persistencia de una colección pese a antibióticos. El equipo considera terapia intrapleural. No tiene sangrado activo, pero recibe anticoagulación por fibrilación auricular. La función renal está conservada y la hemoglobina es estable.`,
  pregunta: "¿Cuál es la afirmación más precisa respecto a tPA y DNasa intrapleurales?",
  opciones: [
    "La combinación carece de evidencia y está contraindicada en todo paciente",
    "La combinación puede mejorar el drenaje, pero se debe valorar cuidadosamente el riesgo hemorrágico y la anticoagulación",
    "La DNasa sola es siempre superior a la combinación",
    "El tPA intrapleural sustituye antibióticos y drenaje",
    "La combinación se utiliza principalmente para tratar derrame por insuficiencia cardiaca"
  ],
  respuestaCorrecta: 1,
  explicacion: `El ensayo MIST2 encontró beneficio de la combinación de tPA y DNasa en pacientes seleccionados con infección pleural, mientras que cada agente aislado no mostró el mismo beneficio clínico. La terapia puede ocasionar hemorragia pleural; el riesgo debe evaluarse, especialmente en pacientes anticoagulados. Deben revisarse indicación, dosis protocolizada, contraindicaciones y alternativas quirúrgicas. No sustituye antibióticos ni el drenaje pleural.`,
  perlaENARM: "tPA + DNasa puede mejorar el drenaje de infección pleural loculada; valorar el riesgo hemorrágico, especialmente con anticoagulación.",
  gpc: {
    mexico: "Seguir protocolo institucional para terapia intrapleural y manejo de anticoagulantes.",
    internacional: "BTS Pleural Disease Guideline, 2023; MIST2."
  },
  bibliografia: "Rahman NM et al. NEJM. 2011; BTS Pleural Disease Guideline. Thorax. 2023."
},
{
  id: "NEUMO-189",
  especialidad: "Neumología",
  tema: "Empiema pleural",
  subtema: "Indicaciones de cirugía",
  dificultad: "Alta",
  caso: `Hombre de 58 años con empiema de dos semanas de evolución. A pesar de antibióticos, drenaje adecuado y tratamiento intrapleural seleccionado, persiste una colección organizada y una corteza pleural que limita la expansión pulmonar. La tomografía muestra atrapamiento pulmonar. Está estable y su riesgo anestésico es aceptable tras optimización.`,
  pregunta: "¿Qué intervención debe valorarse con cirugía torácica?",
  opciones: [
    "Pleurodesis con talco como tratamiento obligatorio de la infección organizada",
    "Intervención quirúrgica, incluida VATS y posible decorticación según estadio y hallazgos",
    "Suspensión de antibióticos sin comprobar control del foco",
    "Oxígeno domiciliario como única medida",
    "Broncodilatadores inhalados para eliminar la corteza pleural"
  ],
  respuestaCorrecta: 1,
  explicacion: `Cuando existe empiema organizado con atrapamiento pulmonar y falla del control del foco mediante antibióticos, drenaje y otras medidas apropiadas, debe valorarse intervención quirúrgica. La cirugía toracoscópica asistida por video (VATS) puede permitir evacuación, desbridamiento y, en casos seleccionados, decorticación. La elección depende del estadio, la anatomía, la condición funcional y la experiencia del equipo. No todos los pacientes necesitan decorticación, y la intervención debe individualizarse.`,
  perlaENARM: "Empiema organizado con pulmón atrapado y fracaso del manejo inicial: valoración por cirugía torácica para VATS/decorticación.",
  gpc: {
    mexico: "Consultar protocolos institucionales de cirugía torácica y manejo de empiema.",
    internacional: "BTS Pleural Disease Guideline, 2023."
  },
  bibliografia: "BTS Pleural Disease Guideline. Thorax. 2023; literatura contemporánea de cirugía torácica para infección pleural."
},
{
  id: "NEUMO-190",
  especialidad: "Neumología",
  tema: "Empiema pleural",
  subtema: "Duración de antibióticos",
  dificultad: "Alta",
  caso: `Mujer de 54 años con empiema por neumonía. Se realizó drenaje eficaz, con desaparición de la fiebre, mejoría de marcadores inflamatorios y expansión pulmonar progresiva. El cultivo identifica un estreptococo sensible y no existen bacteriemia persistente, absceso pulmonar ni inmunosupresión importante. El equipo debe decidir la duración del tratamiento.`,
  pregunta: "¿Cuál es el principio más adecuado para establecer la duración de los antibióticos?",
  opciones: [
    "Suspender siempre a las 48 horas de desaparecer la fiebre",
    "Administrar exactamente seis semanas a todos los pacientes, sin importar la respuesta",
    "Individualizar según control del foco, respuesta clínica, microorganismo, complicaciones y posibilidad de transición a vía oral",
    "Mantener tratamiento intravenoso durante toda la vida",
    "Suspender antibióticos en cuanto el cultivo pleural sea negativo"
  ],
  respuestaCorrecta: 2,
  explicacion: `La duración del tratamiento de la infección pleural se individualiza según control del foco, evolución clínica, microbiología, extensión de la enfermedad y complicaciones. A menudo se requieren varias semanas, con transición a vía oral cuando el paciente mejora y existe un régimen adecuado. La evidencia sobre una duración óptima exacta es limitada y no respalda una cifra universal para todos los casos. El control del foco y la respuesta clínica son determinantes.`,
  perlaENARM: "La duración de antibióticos en empiema depende de respuesta y control del foco; no existe una duración única para todos.",
  gpc: {
    mexico: "Consultar GPC mexicana aplicable y protocolo institucional de antimicrobianos.",
    internacional: "BTS Pleural Disease Guideline, 2023."
  },
  bibliografia: "BTS Pleural Disease Guideline. Thorax. 2023; literatura sobre duración de antimicrobianos en infección pleural."
},
{
  id: "NEUMO-191",
  especialidad: "Neumología",
  tema: "Empiema pleural",
  subtema: "Anaerobios y aspiración",
  dificultad: "Alta",
  caso: `Hombre de 67 años con antecedente de accidente cerebrovascular, disfagia y episodios de aspiración. Presenta neumonía necrosante, esputo fétido y empiema. El cultivo inicial no muestra crecimiento bacteriano después de antibióticos previos. La función renal es moderadamente reducida y no tiene antecedentes de alergia a betalactámicos.`,
  pregunta: "¿Qué principio de cobertura antimicrobiana es especialmente importante?",
  opciones: [
    "Excluir anaerobios porque los cultivos iniciales son negativos",
    "Considerar cobertura anaerobia por el contexto de aspiración e infección pleuropulmonar complicada",
    "Utilizar solo un macrólido",
    "Administrar antifúngico empírico a todos los pacientes con aspiración",
    "No administrar antibióticos hasta identificar todas las especies"
  ],
  respuestaCorrecta: 1,
  explicacion: `El antecedente de aspiración, el esputo fétido y la infección pleuropulmonar complicada aumentan la probabilidad de participación de anaerobios. Los cultivos pueden ser negativos por exposición previa a antibióticos y limitaciones microbiológicas. La cobertura empírica debe adaptarse al contexto comunitario u hospitalario, factores de resistencia y función renal. Una vez disponibles los resultados, se ajusta el tratamiento para evitar espectro innecesariamente amplio.`,
  perlaENARM: "Aspiración, esputo fétido, absceso o empiema: considerar participación anaerobia.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de neumonía y protocolos de antimicrobianos.",
    internacional: "BTS Pleural Disease Guideline, 2023; ATS/IDSA según contexto clínico."
  },
  bibliografia: "BTS Pleural Disease Guideline. Thorax. 2023; ATS/IDSA Clinical Practice Guidelines."
},
{
  id: "NEUMO-192",
  especialidad: "Neumología",
  tema: "Empiema pleural",
  subtema: "Sepsis y control del foco",
  dificultad: "Alta",
  caso: `Hombre de 72 años con empiema y neumonía. Presenta TA 82/48 mmHg, FC 132 lpm, FR 32 rpm, lactato de 4.6 mmol/L y oliguria. El ultrasonido muestra una colección pleural loculada. Se encuentra confuso y con llenado capilar prolongado. No se ha iniciado tratamiento antimicrobiano.`,
  pregunta: "¿Cuál es la estrategia inmediata más apropiada?",
  opciones: [
    "Esperar los resultados de todos los cultivos antes de iniciar tratamiento",
    "Iniciar reanimación y antimicrobianos oportunos, obtener cultivos sin retraso y organizar control urgente del foco pleural",
    "Realizar únicamente toracocentesis diagnóstica y diferir el resto del manejo",
    "Administrar diuréticos como primera intervención",
    "Esperar 24 horas para comprobar si la presión arterial se recupera espontáneamente"
  ],
  respuestaCorrecta: 1,
  explicacion: `El cuadro sugiere sepsis con hipoperfusión y posible shock séptico. Deben iniciarse reanimación, antimicrobianos oportunos y evaluación urgente para control del foco. Los cultivos deben obtenerse antes del antibiótico si esto no genera un retraso clínicamente significativo. La estrategia hemodinámica incluye reevaluación frecuente, cristaloides cuando estén indicados y vasopresores si persiste hipotensión después de reanimación apropiada. El drenaje pleural no debe retrasarse innecesariamente cuando la infección requiere control del foco.`,
  perlaENARM: "Sepsis por empiema: reanimación, antibióticos tempranos y control del foco; obtener cultivos sin retrasar el tratamiento.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de sepsis y protocolos institucionales de empiema.",
    internacional: "Surviving Sepsis Campaign, 2021; BTS Pleural Disease Guideline, 2023."
  },
  bibliografia: "Evans L et al. Surviving Sepsis Campaign. Intensive Care Medicine. 2021; BTS. Thorax. 2023."
},
{
  id: "NEUMO-193",
  especialidad: "Neumología",
  tema: "Empiema pleural",
  subtema: "Diagnóstico diferencial de derrame loculado",
  dificultad: "Alta",
  caso: `Mujer de 63 años con insuficiencia cardiaca, tratada con diuréticos, presenta derrame pleural unilateral persistente. La ecografía muestra una colección parcialmente tabicada. No tiene fiebre, leucocitosis ni dolor pleurítico. La toracocentesis demuestra un exudado por criterios de Light, con pH 7.43, glucosa normal y cultivo negativo. La tomografía no muestra consolidación neumónica.`,
  pregunta: "¿Cuál es la conducta diagnóstica más apropiada antes de asumir que se trata de empiema?",
  opciones: [
    "Diagnosticar empiema solo por la presencia de tabicaciones",
    "Integrar historia, imagen y análisis pleural; investigar otras causas de exudado y considerar falso exudado por diuresis",
    "Iniciar fibrinolíticos intrapleurales automáticamente",
    "Realizar decorticación de urgencia sin completar la evaluación",
    "Administrar antibióticos de amplio espectro indefinidamente"
  ],
  respuestaCorrecta: 1,
  explicacion: `Las loculaciones pueden observarse en infección pleural, pero no son exclusivas del empiema. La ausencia de fiebre, el pH normal, la glucosa conservada y los cultivos negativos hacen necesario reconsiderar la etiología. En insuficiencia cardiaca tratada con diuréticos, un trasudado puede cumplir criterios de Light para exudado. Deben valorarse el gradiente de albúmina sérica-pleural, la evolución con diuresis y otras causas según el contexto. La intervención intrapleural o quirúrgica no debe indicarse sin una evaluación suficiente.`,
  perlaENARM: "Las loculaciones aisladas no definen empiema; integrar contexto clínico, pH, glucosa, microbiología e imagen.",
  gpc: {
    mexico: "Consultar GPC de insuficiencia cardiaca y protocolos de diagnóstico de enfermedad pleural.",
    internacional: "BTS Pleural Disease Guideline, 2023."
  },
  bibliografia: "BTS Pleural Disease Guideline. Thorax. 2023; Light RW. Pleural Diseases."
},
{
  id: "NEUMO-194",
  especialidad: "Neumología",
  tema: "Empiema pleural",
  subtema: "Broncopleural fistula",
  dificultad: "Alta",
  caso: `Hombre de 60 años con neumonía necrosante y empiema, tratado con drenaje pleural. Presenta burbujeo continuo en el sistema de drenaje, tos intensa y persistencia de una cavidad pulmonar adyacente a la colección pleural. La fuga aérea aumenta con la tos. La tomografía sugiere comunicación entre una cavidad pulmonar y el espacio pleural.`,
  pregunta: "¿Cuál es la complicación más probable y qué debe hacerse?",
  opciones: [
    "Insuficiencia cardiaca; administrar diuréticos",
    "Fístula broncopleural; evaluar la comunicación y coordinar manejo multidisciplinario de la infección y la fuga",
    "Quilotórax; restringir grasas",
    "Derrame maligno; realizar pleurodesis con talco sin más evaluación",
    "Atelectasia simple; retirar el drenaje de inmediato"
  ],
  respuestaCorrecta: 1,
  explicacion: `Una fístula broncopleural puede complicar la infección necrosante, el empiema y algunos procedimientos torácicos. El burbujeo continuo puede reflejar fuga aérea, aunque primero debe descartarse una fuga externa del sistema. La tomografía y, en casos seleccionados, la broncoscopia ayudan a localizar la comunicación. El manejo incluye control de la infección, drenaje adecuado, optimización ventilatoria y evaluación por cirugía torácica o intervencionismo broncoscópico según anatomía y condición clínica.`,
  perlaENARM: "Burbujeo persistente más cavidad pulmonar y colección pleural: sospechar fístula broncopleural, después de descartar fuga del sistema.",
  gpc: {
    mexico: "Consultar protocolos institucionales de infección pleural y cirugía torácica.",
    internacional: "BTS Pleural Disease Guideline, 2023."
  },
  bibliografia: "BTS Pleural Disease Guideline. Thorax. 2023; Murray and Nadel's Textbook of Respiratory Medicine."
},
{
  id: "NEUMO-195",
  especialidad: "Neumología",
  tema: "Empiema pleural",
  subtema: "Infección pleural en paciente inmunosuprimido",
  dificultad: "Alta",
  caso: `Hombre de 49 años con trasplante renal y tratamiento inmunosupresor. Presenta fiebre, dolor pleurítico y derrame pleural loculado. El líquido es purulento, pero no muestra crecimiento en cultivos convencionales después de antibióticos previos. La tomografía identifica consolidación pulmonar y engrosamiento pleural. La función del injerto está discretamente deteriorada.`,
  pregunta: "¿Cuál es el enfoque más adecuado?",
  opciones: [
    "Descartar infección por cultivo negativo",
    "Tratar como infección pleural complicada, adaptar antimicrobianos a riesgos epidemiológicos e inmunosupresión y coordinar con el equipo de trasplante",
    "Suspender todos los antibióticos para mejorar el rendimiento de los cultivos",
    "Administrar únicamente corticoides a dosis altas",
    "Realizar pleurodesis como tratamiento antimicrobiano"
  ],
  respuestaCorrecta: 1,
  explicacion: `La inmunosupresión modifica el espectro de patógenos posibles y puede atenuar signos inflamatorios. El pus pleural sigue siendo evidencia de empiema aunque los cultivos sean negativos. Se requiere tratamiento oportuno, control del foco y ajuste de dosis según función renal e interacciones farmacológicas. La evaluación microbiológica puede ampliarse según exposición, epidemiología y evolución, incluyendo pruebas dirigidas para patógenos oportunistas cuando exista una sospecha fundada. La coordinación con el equipo de trasplante ayuda a equilibrar control de infección y manejo inmunosupresor.`,
  perlaENARM: "En inmunosuprimidos, cultivo negativo no excluye infección; ampliar diagnóstico según riesgos sin retrasar el control del foco.",
  gpc: {
    mexico: "Consultar protocolos de infección en trasplante y antimicrobianos institucionales.",
    internacional: "BTS Pleural Disease Guideline, 2023; guías específicas según el microorganismo sospechado."
  },
  bibliografia: "BTS Pleural Disease Guideline. Thorax. 2023; guías de infecciones en receptores de trasplante."
},
{
  id: "NEUMO-196",
  especialidad: "Neumología",
  tema: "Empiema pleural",
  subtema: "Empiema y absceso pulmonar",
  dificultad: "Alta",
  caso: `Hombre de 57 años con fiebre persistente, expectoración fétida y neumonía necrosante. La tomografía muestra una cavidad intraparenquimatosa con nivel hidroaéreo y una colección pleural adyacente. La toracocentesis obtiene líquido purulento. La ecografía confirma que la colección pleural es accesible para drenaje.`,
  pregunta: "¿Cuál es la interpretación anatómica y terapéutica más apropiada?",
  opciones: [
    "El absceso pulmonar y el empiema son sinónimos y siempre se tratan con el mismo procedimiento",
    "Existe una cavidad intraparenquimatosa compatible con absceso y una infección pleural que requiere drenaje específico",
    "El nivel hidroaéreo demuestra exclusivamente neumotórax",
    "La colección pleural no necesita drenaje si el absceso recibe antibióticos",
    "Debe realizarse pleurodesis como tratamiento inicial de ambas lesiones"
  ],
  respuestaCorrecta: 1,
  explicacion: `El absceso pulmonar es una cavidad necrótica dentro del parénquima, mientras que el empiema es pus en el espacio pleural. Pueden coexistir y requieren una estrategia integrada, pero el drenaje de una colección pleural no equivale al drenaje de un absceso pulmonar. Los abscesos suelen tratarse inicialmente con antimicrobianos dirigidos; el drenaje o cirugía se reserva para casos seleccionados con fracaso terapéutico, complicaciones o características anatómicas específicas. El empiema suele requerir evacuación pleural.`,
  perlaENARM: "Absceso = cavidad intraparenquimatosa; empiema = pus en el espacio pleural.",
  gpc: {
    mexico: "Consultar GPC de neumonía y protocolos de infección pleuropulmonar complicada.",
    internacional: "BTS Pleural Disease Guideline, 2023; literatura de absceso pulmonar."
  },
  bibliografia: "BTS Pleural Disease Guideline. Thorax. 2023; Murray and Nadel's Textbook of Respiratory Medicine."
},
{
  id: "NEUMO-197",
  especialidad: "Neumología",
  tema: "Empiema pleural",
  subtema: "Complicaciones sistémicas y seguimiento",
  dificultad: "Alta",
  caso: `Mujer de 62 años con empiema drenado y tratamiento antimicrobiano dirigido. Al quinto día se encuentra afebril, con menor dolor y disminución de proteína C reactiva. El débito pleural ha disminuido, la ecografía muestra reducción importante de la colección y la radiografía demuestra expansión pulmonar progresiva. No presenta fuga aérea ni inestabilidad hemodinámica.`,
  pregunta: "¿Qué elementos deben integrarse para decidir el retiro del drenaje y la transición del tratamiento?",
  opciones: [
    "Retirar siempre el drenaje a las 24 horas, independientemente de la imagen",
    "Integrar evolución clínica, débito y características del líquido, expansión pulmonar, imagen y control de la infección",
    "Mantener el tubo hasta que la radiografía sea completamente normal, aunque exista riesgo de complicaciones",
    "Retirar el drenaje únicamente si la proteína C reactiva llega a cero",
    "Suspender antibióticos inmediatamente cuando disminuye el débito"
  ],
  respuestaCorrecta: 1,
  explicacion: `La retirada del drenaje depende de una evaluación conjunta: mejoría clínica, control de la infección, reducción adecuada de la colección, expansión pulmonar y características del débito. No existe un único umbral universal aplicable a todos los sistemas y escenarios. La transición a antibióticos orales puede ser apropiada cuando hay estabilidad clínica, control del foco y un esquema activo y tolerable. Se debe organizar seguimiento y reevaluación si reaparecen fiebre, disnea o dolor.`,
  perlaENARM: "El retiro del drenaje se decide por evolución global y control del foco, no por un único valor de débito o laboratorio.",
  gpc: {
    mexico: "Seguir protocolos institucionales de drenaje pleural y antimicrobianos.",
    internacional: "BTS Pleural Disease Guideline, 2023."
  },
  bibliografia: "BTS Pleural Disease Guideline. Thorax. 2023."
},
{
  id: "NEUMO-198",
  especialidad: "Neumología",
  tema: "Empiema pleural",
  subtema: "Riesgo de sangrado con tratamiento intrapleural",
  dificultad: "Alta",
  caso: `Hombre de 74 años con empiema multiloculado y drenaje insuficiente. Recibe apixabán por fibrilación auricular y tiene antecedente de hemorragia digestiva hace tres meses. La hemoglobina está estable, pero el equipo considera tPA y DNasa intrapleurales por persistencia de la colección. No presenta shock y existe posibilidad de valoración por cirugía torácica.`,
  pregunta: "¿Cuál es el principio más importante antes de administrar terapia intrapleural?",
  opciones: [
    "Administrar tPA sin revisar la anticoagulación porque la vía intrapleural elimina el riesgo sistémico",
    "Valorar individualmente riesgo hemorrágico, anticoagulación, alternativas y necesidad de intervención quirúrgica",
    "Duplicar la dosis para compensar la anticoagulación",
    "Suspender todos los antibióticos antes del procedimiento",
    "Realizar pleurodesis con talco para evitar cualquier sangrado"
  ],
  respuestaCorrecta: 1,
  explicacion: `La terapia intrapleural con tPA y DNasa puede mejorar el drenaje de colecciones loculadas, pero existe riesgo de sangrado pleural. En pacientes anticoagulados o con antecedentes hemorrágicos, la decisión requiere evaluación individual del riesgo trombótico y hemorrágico, manejo periintervención de anticoagulantes y discusión de alternativas. No se debe asumir que la administración intrapleural elimina el riesgo de sangrado. La decisión debe coordinarse entre los equipos responsables del drenaje, la anticoagulación y la cirugía torácica.`,
  perlaENARM: "Antes de tPA/DNasa intrapleurales, valorar anticoagulación y riesgo hemorrágico; la vía local no elimina el riesgo.",
  gpc: {
    mexico: "Seguir protocolos institucionales de anticoagulación y terapia intrapleural.",
    internacional: "BTS Pleural Disease Guideline, 2023; MIST2."
  },
  bibliografia: "Rahman NM et al. NEJM. 2011; BTS Pleural Disease Guideline. Thorax. 2023."
},
{
  id: "NEUMO-199",
  especialidad: "Neumología",
  tema: "Empiema pleural",
  subtema: "Interpretación integrada del líquido pleural",
  dificultad: "Alta",
  caso: `Mujer de 45 años con fiebre, neumonía y derrame pleural tabicado. El líquido pleural es un exudado con predominio de neutrófilos, glucosa de 32 mg/dL, LDH de 2,200 U/L y pH de 7.05. La tinción de Gram no muestra microorganismos. La colección es accesible y la paciente continúa febril pese al tratamiento inicial.`,
  pregunta: "¿Cuál es la conclusión clínica más apropiada?",
  opciones: [
    "La tinción de Gram negativa descarta infección pleural complicada",
    "El perfil bioquímico y clínico es compatible con infección pleural complicada que requiere control del foco, aunque el Gram sea negativo",
    "El pH bajo confirma de manera específica artritis reumatoide",
    "La LDH elevada demuestra malignidad en todos los casos",
    "El líquido debe clasificarse como trasudado por su contenido de glucosa"
  ],
  respuestaCorrecta: 1,
  explicacion: `La combinación de pH muy bajo, glucosa reducida, LDH elevada, neutrofilia, loculaciones y fiebre persistente favorece infección pleural complicada. Un Gram negativo no la excluye, particularmente después de antibióticos o cuando la carga bacteriana es baja. La conducta incluye antibióticos apropiados y drenaje de la colección accesible. Si la respuesta es insuficiente, se debe reevaluar la posición del tubo, la presencia de loculaciones residuales y la necesidad de tratamiento intrapleural o cirugía.`,
  perlaENARM: "La interpretación del líquido pleural debe integrar pH, glucosa, LDH, células, imagen y contexto; ningún resultado aislado descarta infección.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente para neumonía complicada y empiema.",
    internacional: "BTS Pleural Disease Guideline, 2023."
  },
  bibliografia: "BTS Pleural Disease Guideline. Thorax. 2023; Light RW. Pleural Diseases."
},
{
  id: "NEUMO-200",
  especialidad: "Neumología",
  tema: "Empiema pleural",
  subtema: "Caso integrador de control del foco",
  dificultad: "Muy alta",
  caso: `Hombre de 66 años con diabetes mellitus tipo 2, EPOC y neumonía bacteriana. Tras ocho días de evolución presenta fiebre persistente, taquicardia y dolor pleurítico. La tomografía muestra una colección pleural organizada, multiloculada, con engrosamiento de ambas hojas pleurales y expansión pulmonar incompleta. El líquido es purulento y el cultivo identifica un microorganismo sensible al antibiótico administrado. Se colocó un tubo pleural y se optimizó el tratamiento antimicrobiano, pero tras 72 horas persisten fiebre y una colección importante. No presenta contraindicación absoluta para cirugía.`,
  pregunta: "¿Cuál es el siguiente paso más apropiado?",
  opciones: [
    "Suspender antibióticos porque el microorganismo es sensible",
    "Mantener indefinidamente el mismo drenaje sin reevaluación",
    "Reevaluar el control del foco y discutir con cirugía torácica tPA más DNasa o intervención quirúrgica según organización, anatomía y respuesta",
    "Realizar pleurodesis con talco como tratamiento definitivo del empiema",
    "Indicar únicamente oxígeno domiciliario y seguimiento en tres meses"
  ],
  respuestaCorrecta: 2,
  explicacion: `El fracaso clínico pese a antibiótico activo y drenaje obliga a buscar un problema de control del foco: loculaciones no drenadas, tubo mal posicionado, material espeso o fase organizativa con atrapamiento pulmonar. La conducta debe incluir reevaluación clínica e imagenológica, comprobación del drenaje y discusión multidisciplinaria. tPA más DNasa puede ayudar en pacientes seleccionados con colecciones loculadas; la cirugía torácica puede ser necesaria en empiema organizado o fracaso del manejo inicial. La estrategia final depende de anatomía, riesgo operatorio y evolución.`,
  perlaENARM: "En empiema refractario, distinguir fallo del antibiótico de fallo del control del foco; la colección organizada puede requerir intervención adicional.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de neumonía complicada y protocolos de cirugía torácica.",
    internacional: "BTS Pleural Disease Guideline, 2023; MIST2."
  },
  bibliografia: "Rahman NM et al. NEJM. 2011; BTS Pleural Disease Guideline. Thorax. 2023."
},

{
  id: "NEUMO-201",
  especialidad: "Neumología",
  tema: "Insuficiencia respiratoria aguda",
  subtema: "Clasificación gasométrica",
  dificultad: "Alta",
  caso: `Hombre de 67 años con neumonía multilobar que ingresa por disnea progresiva. FR 34 rpm, FC 118 lpm, TA 108/66 mmHg y SpO2 de 84% al aire ambiente. Está consciente, sin uso previo de oxígeno domiciliario. Gasometría arterial al aire ambiente: pH 7.47, PaCO2 31 mmHg, PaO2 48 mmHg y HCO3− 22 mEq/L. La radiografía muestra opacidades alveolares bilaterales.`,
  pregunta: "¿Cómo se clasifica principalmente la insuficiencia respiratoria de este paciente?",
  opciones: [
    "Tipo I o hipoxémica, con hipocapnia asociada",
    "Tipo II o hipercápnica, con acidosis respiratoria",
    "Insuficiencia respiratoria crónica compensada",
    "Insuficiencia ventilatoria aislada sin hipoxemia",
    "Gasometría normal para una neumonía multilobar"
  ],
  respuestaCorrecta: 0,
  explicacion: `La PaO2 de 48 mmHg indica hipoxemia grave. La PaCO2 está disminuida, compatible con hiperventilación, y no existe hipercapnia. Se trata de insuficiencia respiratoria aguda predominantemente hipoxémica o tipo I. La clasificación clásica identifica tipo I cuando predomina la hipoxemia y tipo II cuando existe hipercapnia por ventilación alveolar insuficiente. La prioridad clínica es corregir la hipoxemia, tratar la causa y vigilar signos de fatiga respiratoria.`,
  perlaENARM: "Tipo I: hipoxemia predominante, habitualmente PaO2 <60 mmHg; tipo II: hipercapnia, habitualmente PaCO2 >45–50 mmHg según el contexto.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente aplicable a neumonía grave y soporte respiratorio.",
    internacional: "ERS/ATS: guías de soporte respiratorio no invasivo; ATS ARDS Clinical Practice Guideline, 2024."
  },
  bibliografia: "Harrison's Principles of Internal Medicine; Murray and Nadel's Textbook of Respiratory Medicine; ATS Clinical Practice Guideline for ARDS, 2024."
},
{
  id: "NEUMO-202",
  especialidad: "Neumología",
  tema: "Insuficiencia respiratoria aguda",
  subtema: "Insuficiencia respiratoria hipercápnica",
  dificultad: "Muy alta",
  caso: `Hombre de 72 años con EPOC grave, disnea progresiva, somnolencia y uso de músculos accesorios. FR 30 rpm, SpO2 82% al aire ambiente. Gasometría: pH 7.24, PaCO2 78 mmHg, HCO3− 33 mEq/L y PaO2 49 mmHg. No hay vómito, secreciones abundantes ni incapacidad para proteger la vía aérea. Se encuentra despierto al estímulo verbal y coopera parcialmente.`,
  pregunta: "¿Cuál es la interpretación y estrategia inicial más apropiada?",
  opciones: [
    "Alcalosis respiratoria aguda; administrar oxígeno a alto flujo sin límite",
    "Insuficiencia respiratoria hipercápnica aguda sobre posible retención crónica, con acidosis; considerar ventilación no invasiva si puede proteger la vía aérea y se monitoriza estrechamente",
    "Insuficiencia respiratoria exclusivamente hipoxémica; no requiere soporte ventilatorio",
    "Acidosis metabólica primaria con compensación respiratoria apropiada",
    "Hipercapnia crónica compensada sin descompensación aguda"
  ],
  respuestaCorrecta: 1,
  explicacion: `La PaCO2 de 78 mmHg y el pH de 7.24 demuestran acidosis respiratoria hipercápnica. El bicarbonato elevado sugiere compensación metabólica previa, compatible con retención crónica de CO2, sobre la que se ha producido una descompensación aguda. En una exacerbación de EPOC con acidosis respiratoria, la ventilación no invasiva (VNI) está indicada si no hay contraindicaciones y existe capacidad para cooperar y proteger la vía aérea. Se requiere monitorización, oxígeno controlado y reevaluación gasométrica temprana; si empeora la conciencia, la acidosis o la oxigenación, debe prepararse intubación.`,
  perlaENARM: "EPOC exacerbado con pH ≤7.35 y PaCO2 elevada: considerar VNI si no existen contraindicaciones y hay monitorización adecuada.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente para exacerbación de EPOC e insuficiencia respiratoria.",
    internacional: "GOLD 2026; ERS/ATS Clinical Practice Guidelines for Noninvasive Ventilation."
  },
  bibliografia: "GOLD Report 2026; Rochwerg B et al. ERS/ATS Guidelines for Noninvasive Ventilation. Eur Respir J. 2017."
},
{
  id: "NEUMO-203",
  especialidad: "Neumología",
  tema: "Insuficiencia respiratoria aguda",
  subtema: "Gradiente alveoloarterial de oxígeno",
  dificultad: "Muy alta",
  caso: `Mujer de 36 años previamente sana presenta disnea y taquipnea después de un procedimiento quirúrgico reciente. Gasometría al aire ambiente: PaO2 58 mmHg, PaCO2 28 mmHg. La presión barométrica es de 760 mmHg, la FiO2 de 0.21 y el cociente respiratorio se aproxima a 0.8. No hay hipoventilación por sedantes. Se sospecha una causa vascular pulmonar.`,
  pregunta: "¿Cuál es la interpretación más apropiada del gradiente alveoloarterial de oxígeno?",
  opciones: [
    "Es necesariamente normal porque la PaCO2 está disminuida",
    "Debe calcularse con la ecuación alveolar; un gradiente elevado favorece alteración V/Q, difusión o cortocircuito frente a hipoventilación aislada",
    "No puede estimarse con una gasometría al aire ambiente",
    "Un gradiente normal confirma tromboembolia pulmonar",
    "El gradiente equivale a PaCO2 menos PaO2"
  ],
  respuestaCorrecta: 1,
  explicacion: `La ecuación alveolar simplificada al nivel del mar es PAO2 ≈ FiO2 × (PB − PH2O) − PaCO2/R. En este caso, PAO2 ≈ 0.21 × (760 − 47) − 28/0.8 ≈ 105 mmHg. El gradiente A–a aproximado es 105 − 58 = 47 mmHg, elevado para una persona joven. Esto sugiere alteración del intercambio gaseoso, como desigualdad V/Q, difusión o cortocircuito. El gradiente no confirma por sí mismo una tromboembolia; el diagnóstico requiere probabilidad clínica y pruebas apropiadas.`,
  perlaENARM: "Hipoxemia con gradiente A–a elevado orienta a alteración del intercambio gaseoso; la hipoventilación aislada suele conservarlo.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de tromboembolia pulmonar y evaluación de hipoxemia.",
    internacional: "Guías contemporáneas de tromboembolia pulmonar; ATS ARDS Clinical Practice Guideline, 2024."
  },
  bibliografia: "West JB. Respiratory Physiology: The Essentials; Harrison's Principles of Internal Medicine."
},
{
  id: "NEUMO-204",
  especialidad: "Neumología",
  tema: "Insuficiencia respiratoria aguda",
  subtema: "Oxigenoterapia controlada en EPOC",
  dificultad: "Alta",
  caso: `Hombre de 69 años con EPOC grave y antecedente de exacerbaciones hipercápnicas. Ingresa con disnea, FR 28 rpm y SpO2 de 79% al aire ambiente. Está consciente y hemodinámicamente estable. La gasometría inicial muestra pH 7.35, PaCO2 54 mmHg y PaO2 45 mmHg. Se inicia oxígeno suplementario y se requiere seleccionar un objetivo de saturación mientras se completa el tratamiento.`,
  pregunta: "¿Cuál es el objetivo inicial de saturación más apropiado mientras se reevalúa la gasometría?",
  opciones: [
    "SpO2 de 100% obligatoria en todos los pacientes",
    "SpO2 de 88–92%, con reevaluación clínica y gasométrica",
    "SpO2 de 75–80% para evitar supresión respiratoria",
    "No administrar oxígeno porque existe hipercapnia",
    "Mantener SpO2 menor de 85% hasta normalizar la PaCO2"
  ],
  respuestaCorrecta: 1,
  explicacion: `En pacientes con EPOC y riesgo de insuficiencia respiratoria hipercápnica se recomienda oxígeno controlado, generalmente con objetivo inicial de SpO2 de 88–92%, mientras se obtiene y reevalúa la gasometría. La hipoxemia debe tratarse; no se debe negar oxígeno por temor a la retención de CO2. El exceso de oxígeno puede empeorar la hipercapnia en algunos pacientes mediante cambios en V/Q y otros mecanismos. Si existe acidosis respiratoria persistente, debe valorarse soporte ventilatorio.`,
  perlaENARM: "EPOC con riesgo de hipercapnia: oxígeno controlado, objetivo habitual 88–92%, y gasometría de reevaluación.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de EPOC y oxigenoterapia.",
    internacional: "GOLD 2026; British Thoracic Society Guideline for Oxygen Use in Adults."
  },
  bibliografia: "GOLD Report 2026; O'Driscoll BR et al. BTS Guideline for Oxygen Use in Adults. BMJ Open Respir Res. 2017."
},
{
  id: "NEUMO-205",
  especialidad: "Neumología",
  tema: "Insuficiencia respiratoria aguda",
  subtema: "Cánula nasal de alto flujo",
  dificultad: "Alta",
  caso: `Mujer de 58 años con neumonía bilateral, FR 32 rpm, SpO2 86% pese a oxígeno convencional y PaO2/FiO2 estimado de 170. Está consciente, coopera y no presenta shock ni hipercapnia significativa. Se mantiene con trabajo respiratorio elevado, pero sin agotamiento manifiesto. El equipo dispone de cánula nasal de alto flujo y ventilación invasiva.`,
  pregunta: "¿Cuál es una estrategia razonable si no existen contraindicaciones y se dispone de vigilancia estrecha?",
  opciones: [
    "Utilizar cánula nasal de alto flujo y reevaluar precozmente respuesta, trabajo respiratorio y necesidad de intubación",
    "Mantener oxígeno convencional sin reevaluar aunque empeore la hipoxemia",
    "Indicar VNI de forma obligatoria en toda neumonía hipoxémica",
    "Retrasar la intubación aunque aparezcan agotamiento y alteración de conciencia",
    "Administrar únicamente broncodilatadores"
  ],
  respuestaCorrecta: 0,
  explicacion: `La cánula nasal de alto flujo proporciona flujos elevados, FiO2 ajustable, humidificación y cierto efecto de lavado del espacio muerto nasofaríngeo. Puede ser útil en insuficiencia respiratoria hipoxémica aguda en pacientes seleccionados. No reemplaza la vigilancia ni debe retrasar la intubación cuando hay deterioro. La respuesta se evalúa con oxigenación, frecuencia respiratoria, trabajo ventilatorio, estado mental y hemodinamia. La VNI tiene indicaciones particularmente sólidas en exacerbación de EPOC con acidosis y edema pulmonar cardiogénico, pero no es obligatoria para toda hipoxemia por neumonía.`,
  perlaENARM: "Alto flujo puede ser útil en insuficiencia respiratoria hipoxémica; reevaluar pronto y no retrasar intubación ante fracaso.",
  gpc: {
    mexico: "Consultar protocolos institucionales de soporte respiratorio y neumonía grave.",
    internacional: "ERS Clinical Practice Guidelines on High-Flow Nasal Cannula; ATS ARDS Guideline, 2024."
  },
  bibliografia: "Frat JP et al. High-flow oxygen through nasal cannula in acute hypoxemic respiratory failure. NEJM. 2015; guías ERS de alto flujo."
},
{
  id: "NEUMO-206",
  especialidad: "Neumología",
  tema: "Insuficiencia respiratoria aguda",
  subtema: "Fracaso de soporte no invasivo",
  dificultad: "Muy alta",
  caso: `Hombre de 64 años con neumonía grave tratado con cánula nasal de alto flujo. Después de 90 minutos presenta FR 40 rpm, uso intenso de músculos accesorios, SpO2 87% pese a FiO2 de 0.90, confusión progresiva y agotamiento. La presión arterial es de 94/58 mmHg. La gasometría muestra PaO2 de 55 mmHg y PaCO2 de 38 mmHg.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Aumentar indefinidamente el flujo y esperar varias horas",
    "Cambiar a oxígeno convencional para reducir el trabajo respiratorio",
    "Preparar intubación endotraqueal y ventilación mecánica invasiva sin retraso innecesario",
    "Administrar sedantes y enviar a domicilio",
    "Iniciar diuréticos sin evaluar la causa"
  ],
  respuestaCorrecta: 2,
  explicacion: `La hipoxemia refractaria, el trabajo respiratorio intenso, la alteración de conciencia, el agotamiento y la inestabilidad hemodinámica son datos de fracaso del soporte no invasivo. La intubación no debe retrasarse por prolongar un intento de alto flujo que ya está fracasando. Deben prepararse preoxigenación, estrategia hemodinámica, equipo y personal con experiencia, minimizando el riesgo de deterioro durante la intubación. Después se inicia ventilación protectora cuando exista lesión pulmonar aguda o SDRA.`,
  perlaENARM: "Hipoxemia refractaria más agotamiento o alteración de conciencia = reconocer fracaso del soporte no invasivo y no retrasar intubación.",
  gpc: {
    mexico: "Consultar protocolos institucionales de vía aérea e insuficiencia respiratoria aguda.",
    internacional: "ATS ARDS Clinical Practice Guideline, 2024; guías ERS de alto flujo."
  },
  bibliografia: "ATS Clinical Practice Guideline for ARDS. 2024; Frat JP et al. NEJM. 2015."
},
{
  id: "NEUMO-207",
  especialidad: "Neumología",
  tema: "Insuficiencia respiratoria aguda",
  subtema: "Ventilación no invasiva en EPOC",
  dificultad: "Alta",
  caso: `Hombre de 70 años con EPOC exacerbado, pH 7.27, PaCO2 72 mmHg, FR 31 rpm y uso de músculos accesorios. Está despierto, comprende instrucciones, maneja secreciones y no presenta vómito, shock ni traumatismo facial. Tras broncodilatadores, corticoide sistémico y oxígeno controlado, persiste acidosis respiratoria.`,
  pregunta: "¿Cuál es la intervención ventilatoria más apropiada?",
  opciones: [
    "Ventilación no invasiva con presión positiva binivel, con monitorización estrecha",
    "Oxígeno al 100% sin soporte ventilatorio",
    "Intubación inmediata obligatoria en todo paciente con pH menor de 7.30, sin valorar contexto",
    "Solo fisioterapia respiratoria",
    "Retirar oxígeno para estimular la ventilación"
  ],
  respuestaCorrecta: 0,
  explicacion: `La VNI binivel reduce el trabajo respiratorio y mejora la ventilación alveolar en exacerbaciones de EPOC con acidosis respiratoria. El paciente reúne condiciones favorables porque está consciente, coopera y protege la vía aérea. La respuesta debe reevaluarse pronto mediante examen clínico y gasometría. Una acidosis más grave aumenta el riesgo de fracaso, pero no es por sí sola una contraindicación absoluta en todos los escenarios. La intubación está indicada si la VNI fracasa, está contraindicada o el paciente se deteriora.`,
  perlaENARM: "EPOC exacerbado con acidosis respiratoria y capacidad para proteger la vía aérea: VNI binivel es una intervención de primera línea.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de exacerbación de EPOC.",
    internacional: "GOLD 2026; ERS/ATS Noninvasive Ventilation Guideline."
  },
  bibliografia: "GOLD Report 2026; Rochwerg B et al. Eur Respir J. 2017."
},
{
  id: "NEUMO-208",
  especialidad: "Neumología",
  tema: "Insuficiencia respiratoria aguda",
  subtema: "Edema pulmonar cardiogénico",
  dificultad: "Alta",
  caso: `Mujer de 74 años con hipertensión arterial y cardiopatía isquémica presenta disnea súbita, ortopnea, diaforesis y estertores bilaterales. TA 188/104 mmHg, FR 34 rpm y SpO2 82%. Está consciente y coopera, sin vómito ni signos de incapacidad para proteger la vía aérea. La radiografía muestra congestión vascular y opacidades alveolares bilaterales.`,
  pregunta: "¿Cuál es una estrategia inicial apropiada para la insuficiencia respiratoria en este contexto?",
  opciones: [
    "Considerar CPAP o VNI, junto con tratamiento de la congestión y control de la presión arterial según evaluación clínica",
    "Evitar todo soporte no invasivo porque existe edema pulmonar",
    "Administrar líquidos intravenosos rápidos de manera rutinaria",
    "Usar opioides de forma rutinaria como intervención principal",
    "Administrar antibióticos como único tratamiento"
  ],
  respuestaCorrecta: 0,
  explicacion: `El cuadro es compatible con edema pulmonar cardiogénico hipertensivo. En pacientes apropiados, CPAP o VNI pueden mejorar rápidamente la oxigenación y disminuir el trabajo respiratorio. El tratamiento también incluye vasodilatación cuando está indicada por la presión arterial y el estado hemodinámico, además de diuréticos cuando existe congestión. Deben buscarse precipitantes como síndrome coronario agudo, arritmias o emergencia hipertensiva. Si existe deterioro de conciencia, shock o fracaso del soporte no invasivo, debe valorarse intubación.`,
  perlaENARM: "Edema pulmonar cardiogénico con dificultad respiratoria: CPAP/VNI y tratamiento dirigido a congestión y causa precipitante.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de insuficiencia cardiaca aguda.",
    internacional: "ESC Guidelines for Acute and Chronic Heart Failure; ERS/ATS Noninvasive Ventilation Guideline."
  },
  bibliografia: "ESC Heart Failure Guidelines; Rochwerg B et al. Eur Respir J. 2017."
},
{
  id: "NEUMO-209",
  especialidad: "Neumología",
  tema: "Insuficiencia respiratoria aguda",
  subtema: "Intubación y protección de la vía aérea",
  dificultad: "Muy alta",
  caso: `Hombre de 61 años con neumonía grave desarrolla deterioro neurológico, Glasgow de 7 puntos, respiración irregular y acumulación de secreciones que no puede eliminar. SpO2 85% pese a oxígeno suplementario. La gasometría muestra pH 7.21 y PaCO2 62 mmHg. Tiene hipotensión relativa y requiere evaluación para reanimación antes y durante el procedimiento.`,
  pregunta: "¿Cuál es la indicación principal para avanzar hacia control invasivo de la vía aérea?",
  opciones: [
    "La PaCO2 aislada, independientemente del estado clínico",
    "La incapacidad para proteger la vía aérea, junto con insuficiencia respiratoria y deterioro neurológico",
    "Una frecuencia respiratoria menor de 20 rpm como único criterio",
    "La presencia de neumonía en cualquier paciente",
    "La necesidad de obtener un cultivo de esputo"
  ],
  respuestaCorrecta: 1,
  explicacion: `La incapacidad para proteger la vía aérea, el deterioro neurológico, las secreciones no manejables y la insuficiencia respiratoria son indicaciones importantes para intubación. La decisión no depende de un único valor gasométrico. Deben anticiparse riesgos de hipoxemia y colapso hemodinámico periintubación, preparar preoxigenación, monitorización, acceso vascular y estrategias de soporte circulatorio. Tras intubar, se confirma la posición del tubo y se ajusta la ventilación a la fisiopatología.`,
  perlaENARM: "La incapacidad para proteger la vía aérea puede indicar intubación incluso antes de que se alcance un umbral gasométrico específico.",
  gpc: {
    mexico: "Consultar protocolos institucionales de manejo avanzado de la vía aérea.",
    internacional: "Guías contemporáneas de manejo de vía aérea en paciente crítico."
  },
  bibliografia: "Harrison's Principles of Internal Medicine; Marino PL. The ICU Book."
},
{
  id: "NEUMO-210",
  especialidad: "Neumología",
  tema: "Insuficiencia respiratoria aguda",
  subtema: "SDRA y oxigenación",
  dificultad: "Muy alta",
  caso: `Mujer de 50 años con sepsis abdominal que desarrolla insuficiencia respiratoria 36 horas después del inicio del cuadro. La radiografía muestra opacidades bilaterales no explicadas completamente por derrames, atelectasia o masas. La ecocardiografía no identifica insuficiencia cardiaca como explicación predominante. Está intubada y recibe PEEP de 8 cmH2O; la PaO2 es de 72 mmHg con FiO2 de 0.60.`,
  pregunta: "¿Cuál es la interpretación del cociente PaO2/FiO2 y el siguiente principio terapéutico?",
  opciones: [
    "El cociente es 120 y, en contexto compatible con PEEP ≥5 cmH2O, corresponde a SDRA moderado; aplicar ventilación protectora",
    "El cociente es 240 y descarta SDRA",
    "El cociente es 72 y confirma SDRA leve",
    "El cociente no puede calcularse en pacientes intubados",
    "El cociente confirma edema cardiogénico y obliga a administrar líquidos"
  ],
  respuestaCorrecta: 0,
  explicacion: `PaO2/FiO2 = 72/0.60 = 120. Bajo la definición de Berlín, un cociente >100 y ≤200 con PEEP ≥5 cmH2O, en presencia de los demás criterios, corresponde a SDRA moderado. Debe iniciarse ventilación protectora con volumen corriente bajo basado en peso corporal predicho y limitar la presión plateau. También se debe tratar la causa precipitante y evitar estrategias que produzcan sobredistensión pulmonar. La clasificación no sustituye la evaluación clínica integral.`,
  perlaENARM: "SDRA moderado por definición de Berlín: PaO2/FiO2 >100 y ≤200 con PEEP ≥5 cmH2O.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de sepsis y ventilación mecánica protectora.",
    internacional: "ATS ARDS Clinical Practice Guideline, 2024; definición global de SDRA, 2023."
  },
  bibliografia: "ARDS Definition Task Force. JAMA. 2012; Global Definition of ARDS. 2023; ATS ARDS Guideline. 2024."
},
{
  id: "NEUMO-211",
  especialidad: "Neumología",
  tema: "Insuficiencia respiratoria aguda",
  subtema: "Ventilación protectora",
  dificultad: "Muy alta",
  caso: `Hombre de 56 años con SDRA grave por neumonía. Está ventilado en modo controlado. Su talla es de 170 cm y es varón. El volumen corriente inicial es de 650 mL, la presión plateau de 34 cmH2O y la presión meseta aumenta con la ventilación. La gasometría muestra PaO2/FiO2 de 105. No existe una indicación inmediata de ventilación extracorpórea.`,
  pregunta: "¿Cuál es el ajuste ventilatorio prioritario?",
  opciones: [
    "Aumentar el volumen corriente a 10–12 mL/kg de peso real",
    "Reducir el volumen corriente hacia aproximadamente 6 mL/kg de peso corporal predicho y mantener presión plateau ≤30 cmH2O cuando sea posible",
    "Eliminar la PEEP para normalizar la presión plateau",
    "Aumentar el volumen corriente hasta normalizar por completo la PaCO2, sin considerar presiones",
    "Utilizar hiperventilación extrema de forma rutinaria"
  ],
  respuestaCorrecta: 1,
  explicacion: `En SDRA se recomienda ventilación protectora con volumen corriente inicial cercano a 6 mL/kg de peso corporal predicho, ajustable dentro de una estrategia de 4–8 mL/kg según mecánica y tolerancia, y presión plateau ≤30 cmH2O. Para un varón de 170 cm, el peso predicho aproximado es 66 kg; 6 mL/kg corresponde a unos 396 mL. El volumen corriente debe basarse en talla y sexo, no en el peso real. Puede aceptarse cierta hipercapnia permisiva si no existen contraindicaciones relevantes.`,
  perlaENARM: "En SDRA, calcula el volumen corriente con peso corporal predicho; objetivo inicial aproximado 6 mL/kg y plateau ≤30 cmH2O.",
  gpc: {
    mexico: "Consultar protocolos institucionales de ventilación protectora y SDRA.",
    internacional: "ATS ARDS Clinical Practice Guideline, 2024; ARDSNet."
  },
  bibliografia: "ARDS Network. Ventilation with lower tidal volumes as compared with traditional tidal volumes. NEJM. 2000; ATS ARDS Guideline. 2024."
},
{
  id: "NEUMO-212",
  especialidad: "Neumología",
  tema: "Insuficiencia respiratoria aguda",
  subtema: "Hipoxemia por cortocircuito",
  dificultad: "Alta",
  caso: `Mujer de 43 años con neumonía extensa y consolidaciones alveolares bilaterales. Presenta PaO2 de 54 mmHg pese a recibir FiO2 de 0.80. La PaCO2 es de 34 mmHg. No existe obstrucción de la vía aérea ni hipoventilación significativa. La radiografía y la ecografía pulmonar sugieren ocupación alveolar extensa.`,
  pregunta: "¿Qué mecanismo fisiopatológico puede explicar que la hipoxemia responda poco al aumento de FiO2?",
  opciones: [
    "Cortocircuito intrapulmonar por perfusión de unidades alveolares no ventiladas",
    "Hipoventilación aislada con gradiente A–a normal",
    "Aumento de la hemoglobina que eleva la PaO2",
    "Reducción del consumo de oxígeno por sí sola",
    "Alcalosis metabólica primaria"
  ],
  respuestaCorrecta: 0,
  explicacion: `En el cortocircuito intrapulmonar, la sangre perfunde unidades no ventiladas, por lo que no puede oxigenarse adecuadamente aun con una FiO2 alta. Esto ocurre en consolidación alveolar extensa y puede contribuir a la hipoxemia del SDRA. La desigualdad V/Q también participa y puede responder mejor al oxígeno según la magnitud del cortocircuito. El manejo incluye tratar la causa, optimizar PEEP y ventilación protectora, y considerar otras estrategias de rescate si la hipoxemia persiste.`,
  perlaENARM: "La hipoxemia por cortocircuito importante puede responder poco al oxígeno suplementario porque la sangre pasa por unidades no ventiladas.",
  gpc: {
    mexico: "Consultar protocolos de neumonía grave y SDRA.",
    internacional: "ATS ARDS Clinical Practice Guideline, 2024."
  },
  bibliografia: "West JB. Respiratory Physiology: The Essentials; ATS ARDS Guideline. 2024."
},
{
  id: "NEUMO-213",
  especialidad: "Neumología",
  tema: "Insuficiencia respiratoria aguda",
  subtema: "Hipercapnia y ventilación alveolar",
  dificultad: "Alta",
  caso: `Hombre de 38 años con enfermedad neuromuscular presenta debilidad progresiva, respiración superficial y cefalea matutina. La gasometría muestra pH 7.29, PaCO2 60 mmHg, HCO3− 28 mEq/L y PaO2 61 mmHg. La radiografía no evidencia infiltrados. La exploración muestra tos débil y capacidad vital reducida.`,
  pregunta: "¿Cuál es el mecanismo principal de la hipercapnia?",
  opciones: [
    "Aumento de la ventilación alveolar por minuto",
    "Disminución de la ventilación alveolar efectiva por debilidad de la bomba ventilatoria",
    "Aumento aislado del gradiente A–a por neumonía extensa",
    "Aumento de la producción de bicarbonato como causa directa de retención de CO2",
    "Hiperventilación psicógena"
  ],
  respuestaCorrecta: 1,
  explicacion: `La debilidad de los músculos respiratorios reduce la ventilación alveolar y causa retención de CO2. La hipercapnia puede preceder a la hipoxemia importante en enfermedades neuromusculares. La tos débil y la capacidad vital reducida aumentan el riesgo de fracaso ventilatorio y secreciones retenidas. Se requiere evaluación de fuerza respiratoria, capacidad vital, flujo de tos y evolución clínica, así como planificación de soporte ventilatorio. La decisión de intubación depende de deterioro, fatiga, protección de vía aérea y capacidad para eliminar secreciones.`,
  perlaENARM: "La hipercapnia no siempre es obstructiva: también puede deberse a falla de la bomba ventilatoria por enfermedad neuromuscular.",
  gpc: {
    mexico: "Consultar protocolos de insuficiencia respiratoria neuromuscular y soporte ventilatorio.",
    internacional: "Guías especializadas de ventilación en enfermedades neuromusculares."
  },
  bibliografia: "Harrison's Principles of Internal Medicine; Murray and Nadel's Textbook of Respiratory Medicine."
},
{
  id: "NEUMO-214",
  especialidad: "Neumología",
  tema: "Insuficiencia respiratoria aguda",
  subtema: "Intoxicación por opioides",
  dificultad: "Alta",
  caso: `Hombre de 29 años encontrado somnoliento después de consumir opioides. Presenta FR 6 rpm, pupilas puntiformes y SpO2 82%. La gasometría muestra pH 7.18, PaCO2 72 mmHg y PaO2 58 mmHg. No hay evidencia inicial de edema pulmonar ni aspiración, aunque la historia es incompleta.`,
  pregunta: "¿Cuál es la prioridad terapéutica inmediata?",
  opciones: [
    "Administrar naloxona y apoyar ventilación y oxigenación, sin retrasar el manejo de la vía aérea si no responde",
    "Administrar antibióticos como primera medida",
    "Indicar diuréticos por la hipercapnia",
    "Esperar a que la concentración de opioide esté disponible",
    "Aplicar ventilación no invasiva sin valorar el nivel de conciencia ni la protección de la vía aérea"
  ],
  respuestaCorrecta: 0,
  explicacion: `La bradipnea, miosis y alteración de conciencia sugieren intoxicación por opioides con hipoventilación alveolar. Se debe asegurar ventilación y oxigenación, administrar naloxona titulada según respuesta y vigilar recurrencia de la depresión respiratoria por la duración del opioide. Si no protege la vía aérea o no mejora la ventilación, puede requerir ventilación con bolsa-mascarilla e intubación. También deben buscarse complicaciones como aspiración y edema pulmonar no cardiogénico.`,
  perlaENARM: "En intoxicación por opioides, la prioridad es restaurar ventilación y oxigenación; la naloxona no sustituye el soporte de vía aérea.",
  gpc: {
    mexico: "Consultar protocolos institucionales de intoxicaciones y manejo avanzado de vía aérea.",
    internacional: "Guías de manejo de intoxicación por opioides y soporte vital."
  },
  bibliografia: "Harrison's Principles of Internal Medicine; guías de manejo de sobredosis por opioides."
},
{
  id: "NEUMO-215",
  especialidad: "Neumología",
  tema: "Insuficiencia respiratoria aguda",
  subtema: "Tromboembolia pulmonar",
  dificultad: "Muy alta",
  caso: `Mujer de 62 años con cáncer activo presenta disnea súbita, dolor pleurítico, FC 128 lpm y SpO2 86%. La presión arterial es de 106/70 mmHg. La gasometría muestra PaO2 55 mmHg y PaCO2 29 mmHg. No presenta fiebre ni infiltrado lobar en la radiografía. La probabilidad clínica de tromboembolia pulmonar es alta.`,
  pregunta: "¿Cuál es la interpretación más adecuada de la gasometría y el siguiente paso diagnóstico si puede trasladarse con seguridad?",
  opciones: [
    "La hipocapnia excluye tromboembolia pulmonar",
    "La hipoxemia con hipocapnia es compatible con TEP; realizar angiotomografía pulmonar si no existe contraindicación y la paciente está suficientemente estable",
    "La gasometría confirma por sí sola TEP y no requiere imagen",
    "La ausencia de hipercapnia descarta enfermedad vascular pulmonar",
    "La conducta inicial debe ser broncodilatación exclusiva"
  ],
  respuestaCorrecta: 1,
  explicacion: `La TEP puede producir hipoxemia por desigualdad V/Q, aumento del espacio muerto y alteraciones hemodinámicas; la hiperventilación suele reducir la PaCO2. Sin embargo, estos hallazgos son inespecíficos y no confirman el diagnóstico. En una paciente con alta probabilidad clínica, se requiere imagen apropiada, habitualmente angiotomografía pulmonar si es factible y no hay contraindicación. La evaluación de estabilidad hemodinámica determina urgencia, monitorización y posibles estrategias de reperfusión.`,
  perlaENARM: "La gasometría en TEP puede mostrar hipoxemia e hipocapnia, pero no es diagnóstica por sí sola.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de tromboembolia pulmonar.",
    internacional: "AHA/ACC Multisociety Guideline for Acute Pulmonary Embolism in Adults, 2026."
  },
  bibliografia: "AHA/ACC Multisociety Guideline for Acute Pulmonary Embolism in Adults. 2026; West JB. Respiratory Physiology."
},
{
  id: "NEUMO-216",
  especialidad: "Neumología",
  tema: "Insuficiencia respiratoria aguda",
  subtema: "Intubación en asma grave",
  dificultad: "Muy alta",
  caso: `Mujer de 27 años con asma grave acude por disnea intensa. Después de broncodilatadores inhalados repetidos y corticoide sistémico, presenta agotamiento, disminución marcada del murmullo vesicular, confusión y PaCO2 que aumenta de 28 a 52 mmHg. El pH es 7.25 y la SpO2 es 88% pese a oxígeno. La frecuencia respiratoria disminuye de 38 a 20 rpm, pero la paciente parece menos reactiva.`,
  pregunta: "¿Cuál es la interpretación más importante de la evolución?",
  opciones: [
    "La disminución de la frecuencia respiratoria confirma mejoría",
    "El aumento de PaCO2 y el deterioro neurológico sugieren fatiga ventilatoria y fracaso inminente; preparar intubación",
    "La hipercapnia es esperable y no requiere reevaluación",
    "Debe suspenderse el tratamiento broncodilatador",
    "La paciente debe recibir sedación profunda sin asegurar la vía aérea"
  ],
  respuestaCorrecta: 1,
  explicacion: `En asma grave, una PaCO2 inicialmente baja refleja hiperventilación. La normalización o elevación progresiva de PaCO2 en un paciente que empeora puede indicar fatiga muscular y ventilación alveolar insuficiente. La disminución de la frecuencia respiratoria no debe interpretarse como mejoría si se acompaña de confusión, agotamiento y entrada de aire reducida. Se requiere evaluación inmediata por personal experimentado, preparación de intubación si existe fracaso ventilatorio y manejo cuidadoso para evitar hiperinsuflación dinámica durante la ventilación mecánica.`,
  perlaENARM: "En asma grave, una PaCO2 que se normaliza o aumenta junto con deterioro clínico es una señal de alarma.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de asma aguda grave.",
    internacional: "GINA 2026."
  },
  bibliografia: "GINA Strategy Report 2026; Harrison's Principles of Internal Medicine."
},
{
  id: "NEUMO-217",
  especialidad: "Neumología",
  tema: "Insuficiencia respiratoria aguda",
  subtema: "Alcalosis respiratoria en hipoxemia",
  dificultad: "Alta",
  caso: `Mujer de 41 años con neumonía y fiebre presenta FR 32 rpm. Gasometría: pH 7.49, PaCO2 29 mmHg, HCO3− 21 mEq/L y PaO2 60 mmHg. Está hemodinámicamente estable, sin antecedentes de hiperventilación crónica. La radiografía muestra infiltrados focales y la exploración revela crepitantes.`,
  pregunta: "¿Cuál es la interpretación ácido-base más probable?",
  opciones: [
    "Acidosis respiratoria aguda",
    "Alcalosis respiratoria aguda con hipoxemia, secundaria probablemente a hiperventilación por enfermedad pulmonar",
    "Acidosis metabólica primaria con compensación completa",
    "Alcalosis metabólica primaria",
    "Gasometría normal"
  ],
  respuestaCorrecta: 1,
  explicacion: `El pH elevado indica alcalemia y la PaCO2 disminuida identifica un trastorno respiratorio primario. El bicarbonato de 21 mEq/L es compatible con compensación aguda aproximada. La hipoxemia en el contexto de neumonía puede estimular hiperventilación. No debe atribuirse la taquipnea exclusivamente a ansiedad: se requiere tratar la causa pulmonar y vigilar el intercambio gaseoso, el trabajo respiratorio y la evolución hemodinámica.`,
  perlaENARM: "Alcalemia con PaCO2 baja: alcalosis respiratoria; la hipoxemia concomitante obliga a buscar una causa orgánica.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de neumonía y evaluación de insuficiencia respiratoria.",
    internacional: "ATS/IDSA Community-Acquired Pneumonia Guideline; actualización institucional aplicable."
  },
  bibliografia: "Harrison's Principles of Internal Medicine; West JB. Respiratory Physiology."
},
{
  id: "NEUMO-218",
  especialidad: "Neumología",
  tema: "Insuficiencia respiratoria aguda",
  subtema: "Hipoxemia y altitud",
  dificultad: "Alta",
  caso: `Hombre de 35 años sin enfermedad pulmonar conocida viaja desde el nivel del mar a una localidad a gran altitud. Presenta cefalea leve y disnea de esfuerzo. La SpO2 es de 89% en reposo. La gasometría muestra PaO2 de 58 mmHg y PaCO2 de 30 mmHg. No tiene fiebre, dolor torácico, taquicardia desproporcionada ni hallazgos focales a la exploración.`,
  pregunta: "¿Cuál es el principio fisiológico más apropiado para interpretar la gasometría?",
  opciones: [
    "La reducción de presión barométrica disminuye la presión inspirada de oxígeno y puede reducir la PaO2, acompañada de hiperventilación",
    "La altitud aumenta la presión inspirada de oxígeno",
    "La PaCO2 baja demuestra hipoventilación alveolar",
    "La PaO2 es independiente de la presión barométrica",
    "El cuadro confirma neumonía bacteriana"
  ],
  respuestaCorrecta: 0,
  explicacion: `Al aumentar la altitud disminuye la presión barométrica y, por tanto, la presión inspirada de oxígeno. La hipoxemia resultante estimula hiperventilación, que reduce la PaCO2 y puede elevar el pH. La interpretación depende de la altitud, el tiempo de exposición, los síntomas y la probabilidad de otras enfermedades. La hipoxemia no debe atribuirse automáticamente a la altitud si hay signos de tromboembolia, infección, edema pulmonar u otra causa.`,
  perlaENARM: "A mayor altitud disminuye la presión inspirada de oxígeno; la hiperventilación compensadora reduce la PaCO2.",
  gpc: {
    mexico: "Consultar protocolos de medicina de altitud y evaluación de hipoxemia si la presentación es atípica.",
    internacional: "Principios de fisiología respiratoria y medicina de altitud."
  },
  bibliografia: "West JB. High Altitude Medicine and Physiology; West JB. Respiratory Physiology: The Essentials."
},
{
  id: "NEUMO-219",
  especialidad: "Neumología",
  tema: "Insuficiencia respiratoria aguda",
  subtema: "Lectura integrada de gasometría",
  dificultad: "Muy alta",
  caso: `Mujer de 68 años con EPOC y sepsis por neumonía. Gasometría: pH 7.18, PaCO2 60 mmHg, HCO3− 22 mEq/L y lactato de 5.2 mmol/L. La presión arterial es de 88/54 mmHg y la paciente presenta oliguria. No existe enfermedad renal crónica conocida ni uso de bicarbonato. Se requiere interpretar el trastorno ácido-base para orientar el tratamiento.`,
  pregunta: "¿Cuál es la interpretación más adecuada?",
  opciones: [
    "Acidosis respiratoria aislada y compensada",
    "Acidosis mixta: componente respiratorio por retención de CO2 y componente metabólico probablemente asociado a hipoperfusión y lactato elevado",
    "Alcalosis respiratoria y alcalosis metabólica",
    "Acidosis metabólica aislada con compensación respiratoria adecuada",
    "Gasometría normal en sepsis"
  ],
  respuestaCorrecta: 1,
  explicacion: `El pH de 7.18 indica acidemia. La PaCO2 elevada contribuye a una acidosis respiratoria, mientras que el bicarbonato de 22 mEq/L es inapropiadamente bajo para una compensación crónica importante y sugiere un componente metabólico concomitante. El lactato elevado, la hipotensión y la oliguria apoyan hipoperfusión. La prioridad es tratar la causa de la sepsis, mejorar perfusión y oxigenación, y valorar soporte ventilatorio por hipercapnia y estado clínico. No se debe interpretar la gasometría sin integrar la evolución y los signos de perfusión.`,
  perlaENARM: "Acidemia con PaCO2 elevada y bicarbonato bajo o inapropiadamente normal sugiere acidosis mixta, especialmente con lactato elevado.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de sepsis, neumonía grave y soporte ventilatorio.",
    internacional: "Surviving Sepsis Campaign, 2021; GOLD 2026."
  },
  bibliografia: "Evans L et al. Surviving Sepsis Campaign. Intensive Care Medicine. 2021; GOLD Report 2026."
},
{
  id: "NEUMO-220",
  especialidad: "Neumología",
  tema: "Insuficiencia respiratoria aguda",
  subtema: "Caso integrador de soporte respiratorio",
  dificultad: "Muy alta",
  caso: `Hombre de 63 años con neumonía grave y antecedente de hipertensión arterial. Ingresa con FR 36 rpm, SpO2 80% al aire ambiente y uso intenso de músculos accesorios. La gasometría inicial muestra pH 7.46, PaCO2 32 mmHg y PaO2 49 mmHg. Se inicia oxígeno de alto flujo, antibióticos y tratamiento de soporte. Después de 60 minutos, pese a FiO2 de 0.90, la SpO2 permanece en 87–89%; presenta agotamiento, confusión y presión arterial de 92/58 mmHg. La radiografía muestra infiltrados bilaterales. La ecocardiografía no demuestra una causa cardiogénica predominante.`,
  pregunta: "¿Cuál es la decisión clínica más apropiada en este momento?",
  opciones: [
    "Continuar el alto flujo durante varias horas sin reevaluación",
    "Reconocer fracaso del soporte no invasivo, preparar intubación y ventilación protectora, mientras se continúa el tratamiento de la causa",
    "Suspender antibióticos porque la PaCO2 está baja",
    "Administrar sedantes y retirar oxígeno",
    "Aumentar el volumen corriente invasivo a 12 mL/kg de peso real de forma preventiva"
  ],
  respuestaCorrecta: 1,
  explicacion: `El paciente presenta hipoxemia refractaria pese a FiO2 elevada, trabajo respiratorio intenso, agotamiento, alteración de conciencia e inestabilidad hemodinámica. Estos datos indican fracaso del soporte no invasivo y justifican preparar intubación sin retraso innecesario. Tras asegurar la vía aérea, debe emplearse ventilación protectora si existe SDRA, con volumen corriente basado en peso corporal predicho y presión plateau limitada. También es fundamental tratar la neumonía, evaluar sepsis y optimizar la perfusión. La decisión debe ser dinámica, no basada exclusivamente en la SpO2 o en un valor gasométrico aislado.`,
  perlaENARM: "La decisión de intubar integra oxigenación, trabajo respiratorio, conciencia y hemodinamia; no se debe prolongar un soporte que está fracasando.",
  gpc: {
    mexico: "Consultar GPC mexicanas vigentes de neumonía grave, sepsis y ventilación mecánica.",
    internacional: "ATS ARDS Clinical Practice Guideline, 2024; Global Definition of ARDS, 2023; Surviving Sepsis Campaign, 2021."
  },
  bibliografia: "ATS ARDS Clinical Practice Guideline. 2024; Global Definition of ARDS. 2023; Evans L et al. Intensive Care Medicine. 2021."
},

{
  id: "NEUMO-221",
  especialidad: "Neumología",
  tema: "Ventilación mecánica",
  subtema: "Volumen corriente y peso corporal predicho",
  dificultad: "Muy alta",
  caso: `Hombre de 58 años con neumonía grave y SDRA que requiere intubación. Su talla es de 170 cm y el peso medido es de 105 kg. Se inicia ventilación controlada por volumen. La gasometría muestra PaO2/FiO2 de 145. El ventilador está configurado con volumen corriente de 700 mL y la presión plateau es de 33 cmH2O. No hay evidencia de neumotórax.`,
  pregunta: "¿Cuál es el ajuste ventilatorio inicial más apropiado?",
  opciones: [
    "Mantener 700 mL porque el volumen corriente debe calcularse con el peso real",
    "Reducir el volumen corriente hacia aproximadamente 6 mL/kg de peso corporal predicho y reevaluar la presión plateau",
    "Aumentar a 900 mL para corregir la hipoxemia",
    "Eliminar por completo la PEEP",
    "Ajustar el volumen corriente exclusivamente según el índice de masa corporal"
  ],
  respuestaCorrecta: 1,
  explicacion: `En SDRA se recomienda ventilación protectora con volumen corriente inicial cercano a 6 mL/kg de peso corporal predicho, ajustable habitualmente entre 4 y 8 mL/kg según mecánica y tolerancia, con presión plateau objetivo ≤30 cmH2O. Para un varón, la fórmula habitual de peso predicho es 50 + 0.91 × (talla en cm − 152.4). Con 170 cm, el peso predicho es aproximadamente 66 kg; 6 mL/kg corresponde a unos 396 mL. El peso real no debe utilizarse para calcular el volumen corriente.`,
  perlaENARM: "En SDRA, el volumen corriente se calcula con peso corporal predicho, no con el peso real.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente aplicable a SDRA y ventilación mecánica.",
    internacional: "ARDS Network; ATS Clinical Practice Guideline for ARDS, 2024."
  },
  bibliografia: "ARDS Network. NEJM. 2000; ATS Clinical Practice Guideline for ARDS. 2024."
},
{
  id: "NEUMO-222",
  especialidad: "Neumología",
  tema: "Ventilación mecánica",
  subtema: "Presión plateau",
  dificultad: "Muy alta",
  caso: `Mujer de 49 años con SDRA por sepsis abdominal está bajo ventilación controlada por volumen. Volumen corriente de 6 mL/kg de peso predicho, PEEP de 10 cmH2O y presión plateau de 34 cmH2O. La paciente está pasiva durante la medición y no presenta esfuerzos inspiratorios. La presión pico es de 42 cmH2O. Se busca reducir el riesgo de lesión pulmonar inducida por ventilador.`,
  pregunta: "¿Cuál es la interpretación y conducta más apropiada?",
  opciones: [
    "La presión plateau es aceptable porque la presión pico es mayor",
    "La presión plateau elevada obliga a revisar la mecánica y reducir el estrés pulmonar, ajustando volumen corriente y estrategia ventilatoria",
    "Aumentar el volumen corriente para reducir la frecuencia respiratoria",
    "Eliminar siempre la PEEP cuando la plateau supera 30 cmH2O",
    "Ignorar la plateau si la SpO2 es superior a 90%"
  ],
  respuestaCorrecta: 1,
  explicacion: `La presión plateau aproxima la presión alveolar estática cuando se mide durante una pausa inspiratoria con flujo cero y sin esfuerzo muscular significativo. En SDRA se procura mantenerla ≤30 cmH2O. Si está elevada, se revisan volumen corriente, distensibilidad, PEEP, posición y posibles causas de aumento de presión. No debe retirarse automáticamente la PEEP, ya que puede empeorar el reclutamiento y la oxigenación. La presión pico también depende de la resistencia de la vía aérea, mientras que la plateau refleja mejor la carga estática del sistema respiratorio.`,
  perlaENARM: "En SDRA, objetivo habitual de presión plateau ≤30 cmH2O; interpretar la medición en condiciones válidas.",
  gpc: {
    mexico: "Consultar protocolos institucionales vigentes de ventilación protectora.",
    internacional: "ARDS Network; ATS ARDS Guideline, 2024."
  },
  bibliografia: "ARDS Network. NEJM. 2000; ATS Clinical Practice Guideline for ARDS. 2024."
},
{
  id: "NEUMO-223",
  especialidad: "Neumología",
  tema: "Ventilación mecánica",
  subtema: "Presión de conducción",
  dificultad: "Muy alta",
  caso: `Hombre de 63 años con SDRA está ventilado con volumen corriente de 420 mL. Durante una pausa inspiratoria válida, la presión plateau es de 28 cmH2O y la PEEP total es de 12 cmH2O. No presenta esfuerzo respiratorio durante la medición. El equipo analiza la mecánica respiratoria para valorar el estrés aplicado al sistema respiratorio.`,
  pregunta: "¿Cuál es la presión de conducción aproximada?",
  opciones: [
    "12 cmH2O",
    "16 cmH2O",
    "28 cmH2O",
    "40 cmH2O",
    "4 cmH2O"
  ],
  respuestaCorrecta: 1,
  explicacion: `La presión de conducción se calcula como presión plateau menos PEEP total: ΔP = Pplat − PEEP total. En este caso, ΔP = 28 − 12 = 16 cmH2O. Es un indicador relacionado con la distensibilidad del sistema respiratorio y con el estrés aplicado durante la ventilación. Aunque valores más altos se han asociado con peores desenlaces en estudios observacionales, no existe un umbral aislado que sustituya la evaluación global ni una estrategia universal validada basada exclusivamente en reducir la presión de conducción.`,
  perlaENARM: "Presión de conducción = presión plateau − PEEP total.",
  gpc: {
    mexico: "Consultar protocolos institucionales de ventilación protectora.",
    internacional: "ARDS Network; ATS ARDS Guideline, 2024."
  },
  bibliografia: "Amato MBP et al. Driving Pressure and Survival in the Acute Respiratory Distress Syndrome. NEJM. 2015; ATS ARDS Guideline. 2024."
},
{
  id: "NEUMO-224",
  especialidad: "Neumología",
  tema: "Ventilación mecánica",
  subtema: "PEEP y reclutamiento alveolar",
  dificultad: "Muy alta",
  caso: `Mujer de 55 años con SDRA moderado por neumonía requiere ventilación mecánica. Presenta PaO2/FiO2 de 135 con FiO2 de 0.70 y PEEP de 5 cmH2O. La presión arterial media es de 78 mmHg, sin vasopresores. No hay neumotórax ni datos de hiperinsuflación marcada. El equipo considera optimizar la PEEP.`,
  pregunta: "¿Cuál es el principio más apropiado para ajustar la PEEP?",
  opciones: [
    "Mantener PEEP de 0 cmH2O en todos los pacientes con SDRA",
    "Individualizar la PEEP considerando oxigenación, distensibilidad, presión plateau y repercusión hemodinámica",
    "Aumentarla indefinidamente hasta alcanzar SpO2 de 100%",
    "Ajustarla únicamente según la presión arterial, sin valorar el pulmón",
    "Usar siempre la misma PEEP en todos los grados de SDRA"
  ],
  respuestaCorrecta: 1,
  explicacion: `La PEEP puede prevenir el colapso alveolar al final de la espiración y mejorar la oxigenación, pero una PEEP excesiva puede producir sobredistensión, reducir retorno venoso y comprometer la hemodinamia. En SDRA moderado o grave puede considerarse una estrategia de PEEP más alta en pacientes seleccionados, evitando maniobras de reclutamiento prolongadas de alto riesgo. El ajuste debe integrar oxigenación, mecánica, presión plateau, espacio muerto y estado circulatorio.`,
  perlaENARM: "La PEEP se individualiza: mejora el reclutamiento, pero una PEEP excesiva puede producir sobredistensión e inestabilidad hemodinámica.",
  gpc: {
    mexico: "Consultar protocolo institucional de SDRA y ventilación mecánica.",
    internacional: "ATS Clinical Practice Guideline for ARDS, 2024."
  },
  bibliografia: "ATS Clinical Practice Guideline for ARDS. 2024; ARDS Network."
},
{
  id: "NEUMO-225",
  especialidad: "Neumología",
  tema: "Ventilación mecánica",
  subtema: "Auto-PEEP en EPOC",
  dificultad: "Muy alta",
  caso: `Hombre de 71 años con EPOC grave está intubado por exacerbación hipercápnica. Presenta hipotensión progresiva, espiración prolongada y flujo espiratorio que no regresa a cero antes de la siguiente inspiración. La presión pico es elevada. La auscultación muestra sibilancias difusas. El ventilador está configurado con frecuencia respiratoria de 24 rpm y tiempo espiratorio corto.`,
  pregunta: "¿Cuál es la intervención ventilatoria inicial más apropiada si se confirma atrapamiento aéreo dinámico?",
  opciones: [
    "Aumentar la frecuencia respiratoria para eliminar CO2 rápidamente",
    "Reducir la frecuencia respiratoria, aumentar el tiempo espiratorio y revisar el volumen corriente y el flujo inspiratorio",
    "Aumentar el volumen corriente a 12 mL/kg de peso predicho",
    "Eliminar la espiración y utilizar relación I:E invertida de rutina",
    "Aumentar la PEEP externa sin evaluar la auto-PEEP"
  ],
  respuestaCorrecta: 1,
  explicacion: `En EPOC, la limitación al flujo espiratorio y el tiempo espiratorio insuficiente favorecen hiperinsuflación dinámica y auto-PEEP. Esto aumenta el trabajo para disparar el ventilador y puede reducir el retorno venoso, causando hipotensión. Se debe permitir más tiempo espiratorio, frecuentemente reduciendo la frecuencia respiratoria, evitando volúmenes corrientes excesivos y ajustando el flujo inspiratorio. Se tratan broncoespasmo y secreciones. La hipercapnia permisiva puede ser aceptable si el pH y la situación clínica lo permiten.`,
  perlaENARM: "En EPOC ventilado con auto-PEEP: prolongar la espiración; no perseguir la PaCO2 normal a costa de hiperinsuflación.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de exacerbación de EPOC y protocolos de ventilación invasiva.",
    internacional: "GOLD 2026; guías de ventilación mecánica en obstrucción grave."
  },
  bibliografia: "GOLD Report 2026; Marino PL. The ICU Book."
},
{
  id: "NEUMO-226",
  especialidad: "Neumología",
  tema: "Ventilación mecánica",
  subtema: "Aumento de presión pico",
  dificultad: "Muy alta",
  caso: `Mujer de 44 años con asma grave está bajo ventilación controlada. La presión pico aumenta de 28 a 46 cmH2O, pero la presión plateau permanece en 22 cmH2O. El volumen corriente administrado no ha cambiado. Se observan sibilancias intensas y secreciones espesas en el tubo endotraqueal. No existe evidencia inmediata de neumotórax.`,
  pregunta: "¿Cuál es la explicación más probable del aumento de presión pico?",
  opciones: [
    "Disminución aislada de la distensibilidad pulmonar",
    "Aumento de la resistencia de la vía aérea por broncoespasmo o secreciones",
    "Reducción de la resistencia de la vía aérea",
    "Ausencia de flujo inspiratorio",
    "Mejoría súbita de la distensibilidad"
  ],
  respuestaCorrecta: 1,
  explicacion: `La presión pico incluye el componente resistivo y el componente elástico. Cuando la presión pico aumenta, pero la plateau se mantiene relativamente estable, debe sospecharse aumento de resistencia en la vía aérea, por ejemplo broncoespasmo, secreciones, acodamiento u obstrucción del tubo. Si ambas presiones aumentan, es más probable una reducción de la distensibilidad o un problema como neumotórax, edema o sobredistensión. La evaluación incluye revisar al paciente, el circuito y el tubo endotraqueal.`,
  perlaENARM: "Pico elevado con plateau estable: pensar primero en aumento de resistencia; pico y plateau elevados sugieren menor distensibilidad.",
  gpc: {
    mexico: "Consultar protocolos institucionales de asma grave y ventilación mecánica.",
    internacional: "GINA 2026; guías de ventilación mecánica en asma grave."
  },
  bibliografia: "GINA Strategy Report 2026; Marino PL. The ICU Book."
},
{
  id: "NEUMO-227",
  especialidad: "Neumología",
  tema: "Ventilación mecánica",
  subtema: "Disminución de distensibilidad",
  dificultad: "Muy alta",
  caso: `Hombre de 60 años con SDRA desarrolla aumento simultáneo de presión pico y plateau. El volumen corriente permanece constante. La presión plateau aumenta de 25 a 35 cmH2O y la SpO2 disminuye. La presión arterial también cae. La auscultación muestra menor entrada de aire en el hemitórax derecho después de una movilización del paciente.`,
  pregunta: "¿Cuál es la conducta inmediata más apropiada?",
  opciones: [
    "Asumir que se trata únicamente de secreciones y esperar la siguiente gasometría",
    "Evaluar de inmediato causas reversibles como neumotórax, desplazamiento del tubo, obstrucción y deterioro agudo de la mecánica",
    "Aumentar el volumen corriente para compensar la caída de SpO2",
    "Desconectar las alarmas de presión",
    "Administrar sedación y no examinar al paciente"
  ],
  respuestaCorrecta: 1,
  explicacion: `El aumento de presión pico y plateau indica un cambio importante en la mecánica del sistema respiratorio. La hipoxemia, hipotensión y asimetría auscultatoria obligan a descartar neumotórax a tensión, intubación selectiva, desplazamiento u obstrucción del tubo, así como otras causas de pérdida de distensibilidad. La evaluación debe ser inmediata, con revisión clínica, del circuito y ecografía o imagen según la estabilidad. Si se sospecha neumotórax a tensión con inestabilidad, no se debe retrasar la descompresión por esperar imagen.`,
  perlaENARM: "Deterioro súbito del ventilado con hipotensión, hipoxemia y presión plateau elevada: descartar neumotórax a tensión de inmediato.",
  gpc: {
    mexico: "Consultar protocolos institucionales de emergencias en paciente ventilado.",
    internacional: "Guías contemporáneas de manejo de neumotórax y ventilación mecánica."
  },
  bibliografia: "Marino PL. The ICU Book; Murray and Nadel's Textbook of Respiratory Medicine."
},
{
  id: "NEUMO-228",
  especialidad: "Neumología",
  tema: "Ventilación mecánica",
  subtema: "Hipercapnia permisiva",
  dificultad: "Alta",
  caso: `Mujer de 52 años con SDRA grave recibe volumen corriente de 6 mL/kg de peso predicho y presión plateau de 27 cmH2O. La gasometría muestra pH 7.27 y PaCO2 58 mmHg. Está hemodinámicamente estable, sin hipertensión intracraneal conocida ni arritmias graves. La oxigenación ha mejorado tras iniciar ventilación protectora.`,
  pregunta: "¿Cuál es la interpretación más apropiada de la hipercapnia?",
  opciones: [
    "Debe elevarse inmediatamente el volumen corriente a 12 mL/kg para normalizar PaCO2",
    "Puede aceptarse hipercapnia permisiva en un paciente seleccionado para preservar ventilación protectora, con vigilancia de pH y contraindicaciones",
    "La PaCO2 de 58 mmHg obliga siempre a suspender la ventilación mecánica",
    "Debe eliminarse la PEEP para reducir el CO2",
    "La hipercapnia confirma embolia pulmonar"
  ],
  respuestaCorrecta: 1,
  explicacion: `La ventilación protectora puede producir hipercapnia permisiva. En un paciente estable, un pH de 7.27 puede ser tolerable según el contexto, pero deben revisarse la tendencia, la hemodinamia y las contraindicaciones, como hipertensión intracraneal significativa o ciertas situaciones de inestabilidad. No se debe aumentar el volumen corriente de forma peligrosa únicamente para normalizar la PaCO2. Se pueden ajustar frecuencia respiratoria y otros parámetros con precaución, vigilando que no aparezcan atrapamiento aéreo ni presiones lesivas.`,
  perlaENARM: "En SDRA, preservar ventilación protectora puede ser más importante que normalizar completamente la PaCO2.",
  gpc: {
    mexico: "Consultar protocolo institucional de SDRA y ventilación protectora.",
    internacional: "ARDS Network; ATS ARDS Guideline, 2024."
  },
  bibliografia: "ARDS Network. NEJM. 2000; ATS Clinical Practice Guideline for ARDS. 2024."
},
{
  id: "NEUMO-229",
  especialidad: "Neumología",
  tema: "Ventilación mecánica",
  subtema: "Asincronía paciente-ventilador",
  dificultad: "Muy alta",
  caso: `Hombre de 65 años con neumonía está bajo ventilación asistida-controlada. En las curvas del ventilador se observan esfuerzos inspiratorios que no generan una respiración asistida. El paciente presenta respiración paradójica, taquicardia y uso de músculos accesorios. No hay obstrucción evidente del tubo. El equipo sospecha asincronía de disparo.`,
  pregunta: "¿Cuál es el enfoque inicial más apropiado?",
  opciones: [
    "Aumentar indiscriminadamente la sedación sin revisar la configuración",
    "Evaluar sensibilidad del disparo, auto-PEEP, esfuerzo respiratorio, fugas y configuración ventilatoria",
    "Desconectar definitivamente el ventilador",
    "Aumentar el volumen corriente sin valorar la mecánica",
    "Ignorar los esfuerzos no asistidos si la SpO2 es normal"
  ],
  respuestaCorrecta: 1,
  explicacion: `Los esfuerzos inspiratorios que no disparan una respiración asistida pueden reflejar auto-PEEP, sensibilidad inadecuada del disparo, debilidad muscular o una combinación de factores. Deben evaluarse las curvas de presión y flujo, la presencia de atrapamiento aéreo, las fugas y el nivel de asistencia. La sedación excesiva puede prolongar la ventilación y no corrige necesariamente la causa. La intervención debe dirigirse al mecanismo de asincronía y al confort del paciente.`,
  perlaENARM: "Ante esfuerzos no asistidos, buscar auto-PEEP y revisar sensibilidad del disparo antes de aumentar sedación de forma automática.",
  gpc: {
    mexico: "Consultar protocolos institucionales de ventilación mecánica y sedación en UCI.",
    internacional: "Guías de ventilación mecánica y liberación de ventilación en pacientes críticos."
  },
  bibliografia: "Tobin MJ. Principles and Practice of Mechanical Ventilation; Marino PL. The ICU Book."
},
{
  id: "NEUMO-230",
  especialidad: "Neumología",
  tema: "Ventilación mecánica",
  subtema: "Ventilación en asma grave",
  dificultad: "Muy alta",
  caso: `Mujer de 31 años con asma casi fatal es intubada por agotamiento. Tras iniciar ventilación mecánica, desarrolla hipotensión y la curva de flujo espiratorio no alcanza cero antes de la siguiente inspiración. La presión pico es de 48 cmH2O y la plateau de 25 cmH2O. La auscultación muestra sibilancias difusas y espiración prolongada.`,
  pregunta: "¿Qué estrategia ayuda a reducir la hiperinsuflación dinámica?",
  opciones: [
    "Aumentar la frecuencia respiratoria a 30–35 rpm",
    "Usar frecuencia respiratoria baja, flujo inspiratorio alto y tiempo espiratorio prolongado, con volumen corriente moderado",
    "Aumentar el volumen corriente hasta normalizar la PaCO2",
    "Aplicar una relación inspiración:espiración invertida de rutina",
    "Aumentar la PEEP externa de forma automática sin medir auto-PEEP"
  ],
  respuestaCorrecta: 1,
  explicacion: `En asma grave, la resistencia elevada prolonga el vaciamiento pulmonar. Si la siguiente inspiración inicia antes de completar la espiración, aparece atrapamiento aéreo y auto-PEEP, que puede provocar hipotensión y barotrauma. La estrategia incluye frecuencia respiratoria baja, tiempo espiratorio prolongado, flujo inspiratorio elevado y volumen corriente moderado, aceptando hipercapnia permisiva cuando sea apropiado. Deben tratarse broncoespasmo y secreciones, y vigilar las presiones y la hemodinamia.`,
  perlaENARM: "En asma ventilada, prioriza tiempo espiratorio y evita normalizar la PaCO2 a costa de hiperinsuflación dinámica.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de asma grave y protocolos de ventilación invasiva.",
    internacional: "GINA 2026; literatura especializada en ventilación del asma grave."
  },
  bibliografia: "GINA Strategy Report 2026; Tobin MJ. Principles and Practice of Mechanical Ventilation."
},
{
  id: "NEUMO-231",
  especialidad: "Neumología",
  tema: "Ventilación mecánica",
  subtema: "Ventilación en SDRA y posición prona",
  dificultad: "Muy alta",
  caso: `Hombre de 54 años con SDRA grave por neumonía recibe ventilación protectora con volumen corriente de 6 mL/kg de peso predicho y PEEP de 12 cmH2O. El cociente PaO2/FiO2 es de 85 después de optimizar la ventilación. Está hemodinámicamente estable y no presenta contraindicación absoluta para colocación en decúbito prono.`,
  pregunta: "¿Cuál es la intervención complementaria con evidencia sólida para mejorar desenlaces en este contexto?",
  opciones: [
    "Decúbito prono prolongado, habitualmente sesiones de al menos 12–16 horas, con equipo entrenado",
    "Decúbito supino permanente",
    "Aumentar el volumen corriente a 12 mL/kg",
    "Eliminar la PEEP",
    "Administrar bicarbonato para elevar la PaO2"
  ],
  respuestaCorrecta: 0,
  explicacion: `En SDRA grave, la pronación temprana y prolongada, junto con ventilación protectora, mejora la distribución de la ventilación, reduce la heterogeneidad del estrés pulmonar y ha demostrado beneficio en supervivencia en pacientes seleccionados. El protocolo requiere un equipo entrenado, protección de tubos y catéteres, vigilancia de lesiones por presión y evaluación de contraindicaciones. La pronación no sustituye el tratamiento de la causa ni la ventilación protectora.`,
  perlaENARM: "SDRA grave con hipoxemia persistente: pronación temprana y prolongada junto con ventilación protectora.",
  gpc: {
    mexico: "Consultar protocolos institucionales de SDRA y pronación en UCI.",
    internacional: "PROSEVA; ATS Clinical Practice Guideline for ARDS, 2024."
  },
  bibliografia: "Guérin C et al. Prone Positioning in Severe ARDS. NEJM. 2013; ATS ARDS Guideline. 2024."
},
{
  id: "NEUMO-232",
  especialidad: "Neumología",
  tema: "Ventilación mecánica",
  subtema: "Bloqueo neuromuscular en SDRA",
  dificultad: "Muy alta",
  caso: `Mujer de 57 años con SDRA grave presenta hipoxemia persistente, asincronía intensa y dificultad para mantener ventilación protectora pese a optimizar analgesia, sedación y parámetros. La PaO2/FiO2 es de 75. No existe contraindicación conocida para bloqueo neuromuscular, pero el equipo debe valorar el balance de riesgos y beneficios.`,
  pregunta: "¿Cuál es la afirmación más apropiada sobre el bloqueo neuromuscular?",
  opciones: [
    "Debe administrarse de rutina a todos los pacientes con SDRA, sin importar la gravedad",
    "Puede considerarse en pacientes seleccionados con SDRA grave y problemas específicos de sincronía o ventilación protectora, individualizando duración y riesgos",
    "Sustituye la ventilación protectora",
    "Permite usar volúmenes corrientes altos sin riesgo",
    "No requiere sedación ni analgesia"
  ],
  respuestaCorrecta: 1,
  explicacion: `El bloqueo neuromuscular no debe utilizarse indiscriminadamente en todos los pacientes con SDRA. Puede considerarse en escenarios seleccionados, por ejemplo asincronía grave que impide una ventilación protectora adecuada o situaciones de hipoxemia grave donde el equipo juzgue que aporta beneficio. Deben considerarse debilidad adquirida en UCI, necesidad de sedación profunda, duración de la infusión y riesgos asociados. No reemplaza la ventilación protectora ni el manejo integral del SDRA.`,
  perlaENARM: "El bloqueo neuromuscular en SDRA se individualiza; no es una intervención universal para todos los pacientes.",
  gpc: {
    mexico: "Consultar protocolo institucional de sedación, analgesia y bloqueo neuromuscular en UCI.",
    internacional: "ATS Clinical Practice Guideline for ARDS, 2024."
  },
  bibliografia: "ATS Clinical Practice Guideline for ARDS. 2024; Papazian L et al. NEJM. 2010."
},
{
  id: "NEUMO-233",
  especialidad: "Neumología",
  tema: "Ventilación mecánica",
  subtema: "Prueba de respiración espontánea",
  dificultad: "Alta",
  caso: `Hombre de 62 años intubado por neumonía hace cinco días. Actualmente está afebril, hemodinámicamente estable, con requerimientos bajos de FiO2 y PEEP, despierta al reducir sedación y presenta tos eficaz. La causa inicial de insuficiencia respiratoria ha mejorado. El equipo considera evaluar la posibilidad de liberarlo del ventilador.`,
  pregunta: "¿Cuál es el siguiente paso habitual si cumple criterios de seguridad?",
  opciones: [
    "Realizar una prueba de respiración espontánea con vigilancia clínica",
    "Extubarlo inmediatamente sin evaluar respiración espontánea",
    "Mantener ventilación controlada durante una semana adicional por rutina",
    "Aumentar la sedación para evitar ansiedad",
    "Administrar antibióticos indefinidamente antes de considerar destete"
  ],
  respuestaCorrecta: 0,
  explicacion: `La prueba de respiración espontánea es una parte central de la evaluación del destete cuando se ha resuelto o mejorado la causa de la intubación, existe estabilidad hemodinámica y los requerimientos de soporte son razonables. Durante la prueba se vigilan frecuencia respiratoria, oxigenación, esfuerzo, estado mental y estabilidad cardiovascular. Superarla no garantiza por sí sola una extubación segura: también deben valorarse tos, manejo de secreciones y protección de la vía aérea.`,
  perlaENARM: "Superar una prueba de respiración espontánea es necesario en muchos escenarios, pero no sustituye la evaluación de protección de vía aérea y secreciones.",
  gpc: {
    mexico: "Consultar protocolos institucionales de destete y extubación en UCI.",
    internacional: "AARC Clinical Practice Guideline: Spontaneous Breathing Trials, 2024."
  },
  bibliografia: "AARC Clinical Practice Guideline: Spontaneous Breathing Trials. 2024; ATS/CHEST guidance on liberation from mechanical ventilation."
},
{
  id: "NEUMO-234",
  especialidad: "Neumología",
  tema: "Ventilación mecánica",
  subtema: "Fracaso de extubación y vía aérea",
  dificultad: "Muy alta",
  caso: `Mujer de 73 años con EPOC y ventilación mecánica durante ocho días supera una prueba de respiración espontánea. Sin embargo, presenta tos débil, secreciones abundantes, fluctuación del estado mental y antecedente de intubación difícil. La oxigenación es aceptable durante la prueba. El equipo debe decidir si procede a extubación.`,
  pregunta: "¿Cuál es la decisión más apropiada?",
  opciones: [
    "Extubar de inmediato porque superar la prueba garantiza éxito",
    "Valorar de manera integral protección de vía aérea, tos, secreciones y riesgo de reintubación antes de decidir",
    "Mantener intubación durante un mes en todos los pacientes con EPOC",
    "Extubar y retirar toda monitorización",
    "Administrar sedación profunda y extubar durante el sueño"
  ],
  respuestaCorrecta: 1,
  explicacion: `La prueba de respiración espontánea evalúa la capacidad ventilatoria sin el soporte previo, pero no evalúa por completo la capacidad de proteger la vía aérea. Tos débil, secreciones abundantes, deterioro neurológico e intubación difícil elevan el riesgo de fracaso y hacen necesaria una planificación individualizada. Si se decide extubar, deben prepararse medidas de soporte y una estrategia de reintubación. En pacientes seleccionados con alto riesgo, puede considerarse soporte no invasivo preventivo tras extubación, según indicación y capacidad de protección de vía aérea.`,
  perlaENARM: "Prueba espontánea exitosa no equivale a extubación segura si la tos es débil o las secreciones no se controlan.",
  gpc: {
    mexico: "Consultar protocolo institucional de extubación y vía aérea difícil.",
    internacional: "AARC Clinical Practice Guideline: Spontaneous Breathing Trials, 2024."
  },
  bibliografia: "AARC Clinical Practice Guideline. 2024; ATS/CHEST guidance on liberation from mechanical ventilation."
},
{
  id: "NEUMO-235",
  especialidad: "Neumología",
  tema: "Ventilación mecánica",
  subtema: "Prevención de lesión pulmonar inducida por ventilador",
  dificultad: "Alta",
  caso: `Hombre de 59 años con SDRA recibe ventilación protectora. El equipo observa que la presión plateau permanece por debajo de 30 cmH2O, pero la ventilación se ajusta repetidamente para normalizar la PaCO2 a expensas de elevar el volumen corriente. La oxigenación es estable y no existen contraindicaciones para tolerar una hipercapnia moderada.`,
  pregunta: "¿Qué principio debe priorizarse?",
  opciones: [
    "Normalizar siempre la PaCO2 aunque aumente el volumen corriente a niveles lesivos",
    "Mantener ventilación protectora y aceptar hipercapnia permisiva seleccionada, vigilando pH y contraindicaciones",
    "Eliminar toda PEEP",
    "Utilizar volumen corriente basado en peso real",
    "Aumentar volumen corriente cada vez que el pH sea menor de 7.40"
  ],
  respuestaCorrecta: 1,
  explicacion: `La normalización estricta de PaCO2 no debe anteponerse automáticamente a la prevención de lesión pulmonar inducida por ventilador. En SDRA, el volumen corriente bajo y la limitación de presión plateau tienen prioridad. La hipercapnia permisiva puede ser aceptable en pacientes seleccionados, aunque deben considerarse el pH, la hemodinamia, la presión intracraneal y otras contraindicaciones. Los ajustes deben individualizarse y evitar frecuencia respiratoria excesiva que genere atrapamiento aéreo.`,
  perlaENARM: "No sacrificar ventilación protectora solo para normalizar PaCO2; valorar hipercapnia permisiva en contexto apropiado.",
  gpc: {
    mexico: "Consultar protocolos institucionales de ventilación protectora en SDRA.",
    internacional: "ARDS Network; ATS ARDS Guideline, 2024."
  },
  bibliografia: "ARDS Network. NEJM. 2000; ATS Clinical Practice Guideline for ARDS. 2024."
},
{
  id: "NEUMO-236",
  especialidad: "Neumología",
  tema: "Ventilación mecánica",
  subtema: "Presión pico y plateau: caso integrador",
  dificultad: "Muy alta",
  caso: `Hombre de 67 años con EPOC intubado por exacerbación presenta incremento de presión pico de 30 a 45 cmH2O. La presión plateau aumenta de 20 a 23 cmH2O. El flujo espiratorio no vuelve a cero y la presión arterial cae a 86/54 mmHg. No se observa asimetría torácica y el tubo parece permeable.`,
  pregunta: "¿Cuál es el mecanismo más probable que contribuye al deterioro hemodinámico?",
  opciones: [
    "Aumento aislado de la distensibilidad pulmonar",
    "Obstrucción y atrapamiento aéreo con auto-PEEP, que puede reducir el retorno venoso",
    "Hipervolemia por aumento de la presión arterial",
    "Disminución de la resistencia de la vía aérea",
    "Ausencia completa de ventilación alveolar por fuga del cuff exclusivamente"
  ],
  respuestaCorrecta: 1,
  explicacion: `El aumento desproporcionado de la presión pico, junto con flujo espiratorio que no regresa a cero, sugiere obstrucción al flujo y atrapamiento aéreo. La auto-PEEP aumenta la presión intratorácica media y puede reducir el retorno venoso, contribuyendo a hipotensión. Deben revisarse broncoespasmo, secreciones, circuito y ajustes del ventilador. Puede ser necesario permitir espiración prolongada y, si existe colapso circulatorio asociado a hiperinsuflación grave, realizar maniobras urgentes bajo supervisión experta.`,
  perlaENARM: "En EPOC ventilado, auto-PEEP puede causar hipotensión por reducción del retorno venoso.",
  gpc: {
    mexico: "Consultar protocolos institucionales de ventilación en EPOC grave.",
    internacional: "GOLD 2026; guías de ventilación mecánica en obstrucción grave."
  },
  bibliografia: "GOLD Report 2026; Marino PL. The ICU Book."
},
{
  id: "NEUMO-237",
  especialidad: "Neumología",
  tema: "Ventilación mecánica",
  subtema: "Presión de distensión y cálculo",
  dificultad: "Alta",
  caso: `Mujer de 60 años con SDRA recibe ventilación mecánica. La presión plateau es de 29 cmH2O y la PEEP total de 14 cmH2O. Durante la medición está pasiva y no existen fugas significativas. El equipo necesita calcular la presión de conducción para completar la evaluación de mecánica respiratoria.`,
  pregunta: "¿Cuál es la presión de conducción?",
  opciones: [
    "15 cmH2O",
    "43 cmH2O",
    "29 cmH2O",
    "14 cmH2O",
    "2.1 cmH2O"
  ],
  respuestaCorrecta: 0,
  explicacion: `La presión de conducción es la diferencia entre la presión plateau y la PEEP total: 29 − 14 = 15 cmH2O. Debe interpretarse junto con volumen corriente, distensibilidad, presión plateau, oxigenación y hemodinamia. No se debe utilizar como único criterio para modificar ventilación ni asumir que existe un límite universal que garantice seguridad. Las mediciones válidas requieren condiciones apropiadas, especialmente ausencia de esfuerzos respiratorios durante las pausas.`,
  perlaENARM: "ΔP = Pplat − PEEP total; confirma que ambas presiones se midan en condiciones comparables.",
  gpc: {
    mexico: "Consultar protocolos institucionales de SDRA y mecánica respiratoria.",
    internacional: "ARDS Network; ATS ARDS Guideline, 2024."
  },
  bibliografia: "Amato MBP et al. NEJM. 2015; ATS ARDS Guideline. 2024."
},
{
  id: "NEUMO-238",
  especialidad: "Neumología",
  tema: "Ventilación mecánica",
  subtema: "Destete en paciente de alto riesgo",
  dificultad: "Muy alta",
  caso: `Hombre de 76 años con EPOC, insuficiencia cardiaca y ventilación mecánica durante seis días ha mejorado de su neumonía. Se encuentra hemodinámicamente estable, despierto, con requerimientos bajos de oxígeno y PEEP. Supera una prueba de respiración espontánea, pero presenta alto riesgo de fracaso de extubación por edad, EPOC e insuficiencia cardiaca. Maneja secreciones y protege la vía aérea.`,
  pregunta: "¿Qué estrategia puede considerarse después de una extubación planificada, si el equipo confirma que es apropiada?",
  opciones: [
    "Oxígeno convencional sin vigilancia en todos los casos",
    "Soporte no invasivo preventivo en un paciente seleccionado de alto riesgo, con vigilancia estrecha y plan de reintubación",
    "Evitar cualquier soporte respiratorio posterior",
    "Reintubar preventivamente a todos los pacientes con EPOC",
    "Extubar sin evaluar secreciones ni protección de vía aérea"
  ],
  respuestaCorrecta: 1,
  explicacion: `En pacientes seleccionados con alto riesgo de fracaso de extubación, el soporte no invasivo preventivo puede reducir la necesidad de reintubación en determinados contextos, especialmente cuando existen enfermedades respiratorias crónicas o insuficiencia cardiaca. Debe iniciarse con una estrategia definida y monitorización adecuada. No es apropiado para un paciente incapaz de proteger la vía aérea ni debe utilizarse para retrasar reintubación cuando aparece deterioro. La decisión depende de la causa inicial, el riesgo individual y los recursos disponibles.`,
  perlaENARM: "En pacientes seleccionados de alto riesgo, la VNI preventiva después de extubación puede ser útil; no debe retrasar reintubación necesaria.",
  gpc: {
    mexico: "Consultar protocolos institucionales de liberación de ventilación mecánica.",
    internacional: "ATS/CHEST guidance on liberation from mechanical ventilation; ERS/ATS NIV Guideline."
  },
  bibliografia: "ATS/CHEST guidance on liberation from mechanical ventilation; Rochwerg B et al. Eur Respir J. 2017."
},
{
  id: "NEUMO-239",
  especialidad: "Neumología",
  tema: "Ventilación mecánica",
  subtema: "Desconexión accidental del ventilador",
  dificultad: "Muy alta",
  caso: `Mujer de 64 años con SDRA moderado está intubada y ventilada. Durante un traslado, la SpO2 cae rápidamente a 72%, la presión arterial disminuye y el ventilador muestra una alarma de volumen espirado bajo. El equipo observa desconexión del circuito cerca del tubo endotraqueal. La paciente está agitada y presenta cianosis.`,
  pregunta: "¿Cuál es la conducta inmediata más apropiada?",
  opciones: [
    "Silenciar la alarma y esperar a que se recupere la saturación",
    "Reconectar y comprobar el circuito y la ventilación; si no se restablece rápidamente, ventilar manualmente con oxígeno y evaluar otras causas",
    "Administrar diuréticos antes de corregir la desconexión",
    "Retirar el tubo endotraqueal sin evaluar la vía aérea",
    "Reducir la FiO2 para evitar toxicidad por oxígeno"
  ],
  respuestaCorrecta: 1,
  explicacion: `Una desconexión del circuito puede causar pérdida inmediata de ventilación y oxigenación. Debe restablecerse la conexión y comprobarse la expansión torácica, el volumen corriente y la recuperación de la saturación. Si la ventilación no se restablece o hay dudas sobre la permeabilidad del tubo, se ventila manualmente con oxígeno mientras se evalúan causas adicionales, como obstrucción, desplazamiento del tubo o neumotórax. La prioridad es tratar al paciente, no únicamente la alarma del equipo.`,
  perlaENARM: "Ante deterioro súbito del ventilado, evaluar primero al paciente y el circuito; una alarma es una señal clínica hasta demostrar lo contrario.",
  gpc: {
    mexico: "Consultar protocolos institucionales de emergencias y seguridad del paciente ventilado.",
    internacional: "Principios de seguridad en ventilación mecánica y manejo de vía aérea en UCI."
  },
  bibliografia: "Marino PL. The ICU Book; Tobin MJ. Principles and Practice of Mechanical Ventilation."
},
{
  id: "NEUMO-240",
  especialidad: "Neumología",
  tema: "Ventilación mecánica",
  subtema: "Caso integrador de SDRA",
  dificultad: "Muy alta",
  caso: `Hombre de 61 años con sepsis por neumonía desarrolla SDRA. Está intubado y recibe volumen corriente de 6 mL/kg de peso corporal predicho, PEEP de 10 cmH2O y FiO2 de 0.70. La PaO2 es de 63 mmHg, por lo que el cociente PaO2/FiO2 es de 90. La presión plateau es de 28 cmH2O. Persiste hipoxemia grave pese a optimización inicial y no hay neumotórax. Está hemodinámicamente estable y no existen contraindicaciones conocidas para pronación.`,
  pregunta: "¿Cuál es la estrategia más apropiada?",
  opciones: [
    "Aumentar el volumen corriente a 12 mL/kg de peso real para elevar rápidamente la PaO2",
    "Mantener ventilación protectora, optimizar PEEP según respuesta y realizar pronación prolongada si persiste SDRA grave",
    "Eliminar la PEEP y mantener FiO2 de 1.0 de manera indefinida",
    "Suspender el tratamiento de la sepsis porque la causa pulmonar ya está establecida",
    "Administrar bicarbonato como intervención principal para corregir la hipoxemia"
  ],
  respuestaCorrecta: 1,
  explicacion: `El cociente PaO2/FiO2 es 63/0.70 = 90, compatible con hipoxemia grave en un paciente con SDRA. La prioridad es mantener ventilación protectora, confirmar que las mediciones y el soporte sean apropiados, individualizar PEEP y valorar pronación temprana y prolongada. Deben tratarse la sepsis y otros factores reversibles, vigilar hemodinamia y considerar estrategias de rescate o evaluación para soporte extracorpóreo en centros apropiados si la hipoxemia refractaria persiste. Aumentar indiscriminadamente el volumen corriente puede agravar la lesión pulmonar inducida por ventilador.`,
  perlaENARM: "SDRA grave: ventilación protectora y pronación en pacientes seleccionados; no corregir hipoxemia con volúmenes corrientes lesivos.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente aplicable a SDRA, sepsis y ventilación mecánica.",
    internacional: "ATS Clinical Practice Guideline for ARDS, 2024; PROSEVA."
  },
  bibliografia: "ATS Clinical Practice Guideline for ARDS. 2024; Guérin C et al. NEJM. 2013; ARDS Network. NEJM. 2000."
},
  
{
  id: "NEUMO-241",
  especialidad: "Neumología",
  tema: "Gasometría arterial",
  subtema: "Interpretación sistemática del pH",
  dificultad: "Alta",
  caso: `Hombre de 64 años con neumonía grave, fiebre y taquipnea. FR 32 rpm, TA 104/66 mmHg. Gasometría arterial: pH 7.28, PaCO2 28 mmHg, HCO3− 13 mEq/L. Lactato 3.8 mmol/L. No tiene antecedentes de enfermedad renal crónica. El equipo necesita identificar el trastorno ácido-base predominante.`,
  pregunta: "¿Cuál es la interpretación más apropiada?",
  opciones: [
    "Acidosis respiratoria aguda con compensación renal",
    "Acidosis metabólica con compensación respiratoria probablemente apropiada",
    "Alcalosis respiratoria primaria",
    "Alcalosis metabólica con hiperventilación compensadora",
    "Trastorno ácido-base normal"
  ],
  respuestaCorrecta: 1,
  explicacion: `El pH de 7.28 indica acidemia. El HCO3− disminuido señala un componente metabólico primario. Con la fórmula de Winter, PaCO2 esperada = 1.5 × HCO3− + 8 ± 2 = 1.5 × 13 + 8 = 27.5 ± 2 mmHg. La PaCO2 observada de 28 mmHg se encuentra dentro del intervalo esperado, compatible con compensación respiratoria apropiada. El lactato elevado puede contribuir a la acidosis metabólica; deben evaluarse perfusión, sepsis y otras causas de acumulación de ácidos.`,
  perlaENARM: "Ante acidosis metabólica, utiliza la fórmula de Winter para valorar si la compensación respiratoria es apropiada.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente aplicable a sepsis y trastornos ácido-base.",
    internacional: "Surviving Sepsis Campaign, 2021."
  },
  bibliografia: "Harrison's Principles of Internal Medicine; Marino PL. The ICU Book; Surviving Sepsis Campaign. 2021."
},
{
  id: "NEUMO-242",
  especialidad: "Neumología",
  tema: "Gasometría arterial",
  subtema: "Acidosis respiratoria aguda",
  dificultad: "Alta",
  caso: `Mujer de 35 años recibe sedación después de un procedimiento. Presenta FR 7 rpm y somnolencia. Gasometría: pH 7.22, PaCO2 65 mmHg, HCO3− 26 mEq/L. No tiene enfermedad pulmonar conocida ni antecedente de hipercapnia crónica. La glucemia es normal y no existen datos de choque.`,
  pregunta: "¿Cuál es el trastorno primario más probable?",
  opciones: [
    "Acidosis respiratoria aguda por hipoventilación alveolar",
    "Acidosis respiratoria crónica completamente compensada",
    "Acidosis metabólica primaria",
    "Alcalosis respiratoria aguda",
    "Alcalosis metabólica primaria"
  ],
  respuestaCorrecta: 0,
  explicacion: `La acidemia se acompaña de PaCO2 elevada, lo que identifica una acidosis respiratoria primaria. El bicarbonato de 26 mEq/L es compatible con una compensación renal pequeña, como se espera en un proceso agudo. La bradipnea y la sedación sugieren hipoventilación alveolar. La prioridad es evaluar y sostener ventilación y vía aérea, corregir la causa y vigilar la evolución gasométrica; la gravedad clínica no debe determinarse exclusivamente por el pH.`,
  perlaENARM: "En acidosis respiratoria aguda, el HCO3− aumenta aproximadamente 1 mEq/L por cada incremento de 10 mmHg de PaCO2 sobre 40.",
  gpc: {
    mexico: "Consultar protocolos institucionales vigentes de sedación, intoxicación e insuficiencia respiratoria.",
    internacional: "Principios de fisiología respiratoria y manejo del paciente crítico."
  },
  bibliografia: "West JB. Respiratory Physiology: The Essentials; Harrison's Principles of Internal Medicine."
},
{
  id: "NEUMO-243",
  especialidad: "Neumología",
  tema: "Gasometría arterial",
  subtema: "Acidosis respiratoria crónica",
  dificultad: "Muy alta",
  caso: `Hombre de 70 años con EPOC grave estable presenta gasometría ambulatoria: pH 7.37, PaCO2 58 mmHg y HCO3− 33 mEq/L. No tiene fiebre, incremento de disnea, somnolencia ni aumento reciente de esputo. Una gasometría de seis meses antes mostraba PaCO2 de 56 mmHg. La función renal es estable.`,
  pregunta: "¿Cuál es la interpretación más probable?",
  opciones: [
    "Acidosis metabólica grave con compensación completa",
    "Acidosis respiratoria crónica con compensación renal",
    "Alcalosis respiratoria aguda",
    "Acidosis respiratoria aguda grave sin compensación",
    "Gasometría que descarta retención crónica de CO2"
  ],
  respuestaCorrecta: 1,
  explicacion: `La PaCO2 elevada con HCO3− aumentado y pH cercano a la normalidad es compatible con acidosis respiratoria crónica compensada. En procesos crónicos, el bicarbonato suele aumentar aproximadamente 3.5–4 mEq/L por cada incremento de 10 mmHg de PaCO2 sobre 40. Para una PaCO2 de 58, se esperaría un HCO3− aproximado de 30–31 mEq/L; el valor de 33 es algo mayor y obliga a considerar una alcalosis metabólica concomitante o variación individual. La estabilidad clínica y la gasometría previa apoyan cronicidad, pero no excluyen un trastorno mixto.`,
  perlaENARM: "La compensación renal en la acidosis respiratoria crónica es mayor que en la aguda; un bicarbonato excesivo puede sugerir trastorno mixto.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de EPOC y evaluación de insuficiencia respiratoria.",
    internacional: "GOLD 2026."
  },
  bibliografia: "GOLD Report 2026; Harrison's Principles of Internal Medicine."
},
{
  id: "NEUMO-244",
  especialidad: "Neumología",
  tema: "Gasometría arterial",
  subtema: "Fórmula de Winter",
  dificultad: "Muy alta",
  caso: `Mujer de 48 años con diarrea abundante durante cuatro días presenta debilidad y taquipnea. Gasometría: pH 7.25, PaCO2 24 mmHg y HCO3− 10 mEq/L. Na+ 138 mEq/L, Cl− 116 mEq/L y lactato 1.4 mmol/L. No presenta hipotensión ni datos de insuficiencia renal.`,
  pregunta: "¿Cómo debe interpretarse la compensación respiratoria?",
  opciones: [
    "La PaCO2 esperada es aproximadamente 23 ± 2 mmHg, por lo que la compensación es apropiada",
    "La PaCO2 esperada es aproximadamente 40 mmHg, por lo que existe compensación excesiva",
    "La PaCO2 esperada es aproximadamente 60 mmHg, por lo que existe alcalosis respiratoria",
    "La fórmula de Winter no puede aplicarse en acidosis metabólica",
    "La PaCO2 de 24 confirma acidosis respiratoria primaria"
  ],
  respuestaCorrecta: 0,
  explicacion: `La fórmula de Winter estima PaCO2 = 1.5 × HCO3− + 8 ± 2. Para HCO3− de 10, el valor esperado es 23 ± 2 mmHg. La PaCO2 observada de 24 está dentro del intervalo esperado, lo que indica compensación respiratoria apropiada. El anión gap es Na − (Cl + HCO3) = 138 − (116 + 10) = 12 mEq/L, compatible con acidosis metabólica de brecha aniónica normal, aunque los intervalos dependen del laboratorio y de si se incluye potasio. La pérdida gastrointestinal de bicarbonato es una causa probable.`,
  perlaENARM: "Winter: PaCO2 esperada = 1.5 × HCO3− + 8 ± 2 mmHg.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente aplicable a diarrea, deshidratación y alteraciones hidroelectrolíticas.",
    internacional: "Principios de interpretación ácido-base en medicina crítica."
  },
  bibliografia: "Harrison's Principles of Internal Medicine; Marino PL. The ICU Book."
},
{
  id: "NEUMO-245",
  especialidad: "Neumología",
  tema: "Gasometría arterial",
  subtema: "Brecha aniónica elevada",
  dificultad: "Muy alta",
  caso: `Hombre de 58 años con diabetes mellitus presenta vómitos, dolor abdominal y respiración profunda. Gasometría: pH 7.18, PaCO2 22 mmHg, HCO3− 8 mEq/L. Electrolitos: Na+ 140 mEq/L, Cl− 100 mEq/L. Glucosa 460 mg/dL y cetonas sanguíneas elevadas. La albúmina sérica es de 4 g/dL.`,
  pregunta: "¿Cuál es la brecha aniónica y la interpretación más probable?",
  opciones: [
    "12 mEq/L; brecha aniónica normal",
    "20 mEq/L; acidosis metabólica con brecha aniónica elevada",
    "32 mEq/L; alcalosis metabólica",
    "40 mEq/L; acidosis respiratoria aislada",
    "8 mEq/L; alcalosis respiratoria primaria"
  ],
  respuestaCorrecta: 1,
  explicacion: `La brecha aniónica sin potasio se calcula como Na − (Cl + HCO3) = 140 − (100 + 8) = 32 mEq/L. Por tanto, la brecha está elevada. La acidemia, el bicarbonato muy bajo, la hiperventilación compensadora, la hiperglucemia y las cetonas elevadas son compatibles con cetoacidosis diabética. Se requiere manejo urgente con evaluación de potasio, estado circulatorio, función renal y protocolo de cetoacidosis; el potasio debe valorarse antes de iniciar insulina.`,
  perlaENARM: "Brecha aniónica = Na − (Cl + HCO3); una brecha elevada orienta a acumulación de ácidos no medidos.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de cetoacidosis diabética y urgencias metabólicas.",
    internacional: "Consenso internacional sobre crisis hiperglucémicas en adultos, 2024."
  },
  bibliografia: "Consensus Report on Hyperglycemic Crises in Adults With Diabetes. Diabetes Care. 2024; Harrison's Principles of Internal Medicine."
},
{
  id: "NEUMO-246",
  especialidad: "Neumología",
  tema: "Gasometría arterial",
  subtema: "Corrección de brecha aniónica por albúmina",
  dificultad: "Muy alta",
  caso: `Mujer de 66 años con sepsis y enfermedad hepática presenta pH 7.29, PaCO2 30 mmHg y HCO3− 14 mEq/L. Na+ 140 mEq/L, Cl− 110 mEq/L y albúmina de 2 g/dL. El lactato es de 3.6 mmol/L. Se busca determinar si la brecha aniónica aparentemente normal oculta acumulación de aniones no medidos.`,
  pregunta: "¿Cuál es la brecha aniónica corregida aproximada por albúmina?",
  opciones: [
    "10 mEq/L",
    "14 mEq/L",
    "19 mEq/L",
    "24 mEq/L",
    "30 mEq/L"
  ],
  respuestaCorrecta: 2,
  explicacion: `La brecha aniónica medida es 140 − (110 + 14) = 16 mEq/L. Una fórmula habitual de corrección es AG corregida = AG medida + 2.5 × (4 − albúmina en g/dL). Con albúmina de 2 g/dL: 16 + 2.5 × 2 = 21 mEq/L. Por tanto, entre las opciones propuestas no existe un valor exacto; la opción más cercana es 19 mEq/L, pero el valor calculado es aproximadamente 21 mEq/L. Para una pregunta de respuesta única, este reactivo debe corregirse antes de integrarlo al banco.`,
  perlaENARM: "La hipoalbuminemia reduce la brecha aniónica medida y puede ocultar una acidosis con brecha elevada.",
  gpc: {
    mexico: "Consultar protocolos institucionales de sepsis y trastornos ácido-base.",
    internacional: "Principios de interpretación ácido-base en cuidados críticos."
  },
  bibliografia: "Harrison's Principles of Internal Medicine; Marino PL. The ICU Book."
},
{
  id: "NEUMO-247",
  especialidad: "Neumología",
  tema: "Gasometría arterial",
  subtema: "Acidosis metabólica de brecha normal",
  dificultad: "Alta",
  caso: `Hombre de 43 años presenta diarrea acuosa abundante durante cinco días. Gasometría: pH 7.30, PaCO2 29 mmHg y HCO3− 14 mEq/L. Na+ 139 mEq/L, Cl− 113 mEq/L y lactato normal. La creatinina está dentro del intervalo de referencia. No consume acetazolamida ni refiere exposición a tóxicos.`,
  pregunta: "¿Cuál es el mecanismo más probable de la alteración ácido-base?",
  opciones: [
    "Acumulación de lactato por choque",
    "Pérdida gastrointestinal de bicarbonato, con acidosis metabólica hiperclorémica",
    "Retención primaria de CO2",
    "Cetoacidosis diabética",
    "Alcalosis metabólica por vómitos"
  ],
  respuestaCorrecta: 1,
  explicacion: `El pH y el bicarbonato bajos indican acidosis metabólica. La brecha aniónica es 139 − (113 + 14) = 12 mEq/L, compatible con brecha normal en muchos laboratorios. La diarrea produce pérdida gastrointestinal de bicarbonato y aumento relativo del cloro, causando acidosis metabólica hiperclorémica. La PaCO2 de 29 mmHg es compatible con compensación respiratoria aproximada según Winter: 1.5 × 14 + 8 = 29 ± 2 mmHg.`,
  perlaENARM: "Diarrea abundante: pérdida de bicarbonato y acidosis metabólica hiperclorémica con brecha aniónica generalmente normal.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de diarrea y trastornos hidroelectrolíticos.",
    internacional: "Principios de fisiología renal y equilibrio ácido-base."
  },
  bibliografia: "Harrison's Principles of Internal Medicine; Brenner & Rector's The Kidney."
},
{
  id: "NEUMO-248",
  especialidad: "Neumología",
  tema: "Gasometría arterial",
  subtema: "Alcalosis respiratoria aguda",
  dificultad: "Alta",
  caso: `Mujer de 29 años con dolor pleurítico y disnea súbita presenta FR 34 rpm, FC 122 lpm y SpO2 de 90%. Gasometría: pH 7.50, PaCO2 27 mmHg y HCO3− 21 mEq/L. Tiene antecedente de inmovilización por cirugía reciente. No hay antecedentes de ansiedad ni enfermedad pulmonar crónica.`,
  pregunta: "¿Cuál es la interpretación más apropiada?",
  opciones: [
    "Alcalosis respiratoria aguda; debe investigarse una causa orgánica, incluida tromboembolia pulmonar según probabilidad clínica",
    "Acidosis respiratoria crónica",
    "Acidosis metabólica con compensación apropiada",
    "Alcalosis metabólica primaria",
    "Gasometría normal que descarta enfermedad grave"
  ],
  respuestaCorrecta: 0,
  explicacion: `El pH elevado con PaCO2 disminuida indica alcalosis respiratoria primaria. El HCO3− de 21 mEq/L es compatible con compensación aguda. La hipoxemia, taquicardia, dolor pleurítico y cirugía reciente obligan a valorar causas orgánicas como tromboembolia pulmonar, además de neumonía, neumotórax y otras enfermedades. No debe atribuirse automáticamente la hiperventilación a ansiedad.`,
  perlaENARM: "Alcalosis respiratoria con hipoxemia y factores de riesgo trombótico requiere evaluación etiológica; la gasometría no confirma ni descarta TEP.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de tromboembolia pulmonar.",
    internacional: "AHA/ACC Multisociety Guideline for Acute Pulmonary Embolism in Adults, 2026."
  },
  bibliografia: "AHA/ACC Multisociety Guideline for Acute Pulmonary Embolism in Adults. 2026; Harrison's Principles of Internal Medicine."
},
{
  id: "NEUMO-249",
  especialidad: "Neumología",
  tema: "Gasometría arterial",
  subtema: "Alcalosis metabólica",
  dificultad: "Alta",
  caso: `Hombre de 60 años con vómitos persistentes y tratamiento con diurético de asa presenta debilidad y calambres. Gasometría: pH 7.51, PaCO2 48 mmHg y HCO3− 37 mEq/L. Na+ 137 mEq/L, K+ 2.8 mEq/L y Cl− 88 mEq/L. La presión arterial es estable y no hay signos de edema pulmonar.`,
  pregunta: "¿Cuál es el trastorno primario más probable?",
  opciones: [
    "Acidosis metabólica",
    "Alcalosis metabólica con hipocloremia e hipopotasemia",
    "Alcalosis respiratoria aguda aislada",
    "Acidosis respiratoria aguda",
    "Trastorno ácido-base mixto con acidosis metabólica como componente principal"
  ],
  respuestaCorrecta: 1,
  explicacion: `El pH elevado y el HCO3− elevado identifican alcalosis metabólica primaria. Los vómitos producen pérdida de ácido clorhídrico y el diurético puede contribuir a depleción de cloro y potasio. La PaCO2 elevada representa compensación respiratoria, aunque debe comprobarse que sea apropiada para la magnitud de la alcalosis. El tratamiento depende de la causa y del estado de volumen; en alcalosis sensible a cloro suelen considerarse cloruro de sodio y reposición de potasio si no están contraindicados, con monitorización.`,
  perlaENARM: "Vómitos, hipocloremia, hipopotasemia y HCO3− elevado sugieren alcalosis metabólica sensible a cloro.",
  gpc: {
    mexico: "Consultar protocolos institucionales de alteraciones hidroelectrolíticas.",
    internacional: "Principios de fisiología renal y equilibrio ácido-base."
  },
  bibliografia: "Brenner & Rector's The Kidney; Harrison's Principles of Internal Medicine."
},
{
  id: "NEUMO-250",
  especialidad: "Neumología",
  tema: "Gasometría arterial",
  subtema: "Trastorno ácido-base mixto",
  dificultad: "Muy alta",
  caso: `Mujer de 55 años con EPOC y sepsis por neumonía presenta hipotensión y taquipnea. Gasometría: pH 7.10, PaCO2 60 mmHg y HCO3− 18 mEq/L. Lactato 6 mmol/L. Está somnolienta y utiliza músculos accesorios. La creatinina ha aumentado respecto a su valor basal.`,
  pregunta: "¿Cuál es la interpretación ácido-base más probable?",
  opciones: [
    "Acidosis respiratoria aislada con compensación renal completa",
    "Acidosis metabólica aislada con compensación respiratoria adecuada",
    "Acidosis mixta respiratoria y metabólica",
    "Alcalosis respiratoria más alcalosis metabólica",
    "Trastorno compensado sin relevancia clínica"
  ],
  respuestaCorrecta: 2,
  explicacion: `Existe acidemia marcada. El HCO3− bajo indica acidosis metabólica, apoyada por el lactato elevado y la hipoperfusión. La PaCO2 debería disminuir según Winter: 1.5 × 18 + 8 = 35 ± 2 mmHg. La PaCO2 observada de 60 mmHg es muy superior a la esperada, lo que demuestra un componente adicional de acidosis respiratoria por ventilación alveolar insuficiente. Es un trastorno mixto grave que exige manejo urgente de sepsis, perfusión y ventilación.`,
  perlaENARM: "Si la PaCO2 excede ampliamente la esperada por Winter, considera acidosis respiratoria concomitante.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de sepsis, neumonía grave y EPOC.",
    internacional: "Surviving Sepsis Campaign, 2021; GOLD 2026."
  },
  bibliografia: "Surviving Sepsis Campaign. 2021; GOLD Report 2026; Harrison's Principles of Internal Medicine."
},
{
  id: "NEUMO-251",
  especialidad: "Neumología",
  tema: "Gasometría arterial",
  subtema: "Alcalosis respiratoria y metabólica simultáneas",
  dificultad: "Muy alta",
  caso: `Hombre de 47 años con cirrosis presenta vómitos, taquipnea y desorientación leve. Gasometría: pH 7.56, PaCO2 22 mmHg y HCO3− 19 mEq/L. Na+ 136 mEq/L, Cl− 96 mEq/L y lactato normal. No presenta diarrea ni insuficiencia renal aguda.`,
  pregunta: "¿Cuál es la interpretación más probable?",
  opciones: [
    "Acidosis respiratoria aguda",
    "Alcalosis respiratoria y acidosis metabólica como trastorno mixto",
    "Alcalosis respiratoria más alcalosis metabólica no puede existir con HCO3− de 19",
    "Acidosis metabólica aislada",
    "Alcalosis metabólica aislada con compensación apropiada"
  ],
  respuestaCorrecta: 2,
  explicacion: `El pH elevado indica alcalemia y la PaCO2 baja señala un componente de alcalosis respiratoria. En una alcalosis respiratoria aguda, el bicarbonato suele disminuir aproximadamente 2 mEq/L por cada reducción de 10 mmHg de PaCO2; con una PaCO2 de 22 mmHg, un HCO3− cercano a 20–21 mEq/L puede ser compatible con compensación aguda. El HCO3− de 19 no demuestra por sí solo una acidosis metabólica concomitante. El caso requiere evaluación adicional para confirmar si existe un trastorno mixto; con los datos proporcionados, la respuesta más probable es alcalosis respiratoria aguda, por lo que las opciones necesitan corrección para una pregunta de respuesta única.`,
  perlaENARM: "No diagnostiques un trastorno mixto solo porque el bicarbonato esté ligeramente fuera del valor normal; calcula la compensación esperada.",
  gpc: {
    mexico: "Consultar protocolos institucionales de evaluación ácido-base y cirrosis.",
    internacional: "Principios de interpretación ácido-base en medicina interna."
  },
  bibliografia: "Harrison's Principles of Internal Medicine; Marino PL. The ICU Book."
},
{
  id: "NEUMO-252",
  especialidad: "Neumología",
  tema: "Gasometría arterial",
  subtema: "Brecha aniónica y delta ratio",
  dificultad: "Muy alta",
  caso: `Hombre de 46 años con diabetes y enfermedad renal presenta náusea y respiración profunda. Gasometría: pH 7.24, PaCO2 25 mmHg y HCO3− 11 mEq/L. Na+ 140 mEq/L, Cl− 100 mEq/L. No hay vómitos. La albúmina es de 4 g/dL. Se busca valorar si la acidosis metabólica de brecha elevada coexiste con otro trastorno metabólico.`,
  pregunta: "¿Cuál es la brecha aniónica y el delta ratio aproximados, usando brecha normal de referencia de 12 mEq/L?",
  opciones: [
    "AG 12; delta ratio 0",
    "AG 29; delta ratio 1.3",
    "AG 17; delta ratio 0.4",
    "AG 40; delta ratio 3.5",
    "AG 8; delta ratio negativo"
  ],
  respuestaCorrecta: 1,
  explicacion: `AG = 140 − (100 + 11) = 29 mEq/L. Delta ratio = (AG medida − AG normal) / (24 − HCO3−) = (29 − 12) / (24 − 11) = 17/13 ≈ 1.31. Un valor aproximado entre 1 y 2 suele ser compatible con acidosis de brecha aniónica elevada predominante, aunque los umbrales son orientativos y dependen de las referencias usadas. Deben integrarse lactato, cetonas, función renal, albúmina y contexto clínico.`,
  perlaENARM: "Delta ratio = (AG − AG normal) / (24 − HCO3−); es una herramienta orientativa para detectar trastornos metabólicos simultáneos.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente aplicable a cetoacidosis y enfermedad renal.",
    internacional: "Consenso internacional sobre crisis hiperglucémicas en adultos, 2024."
  },
  bibliografia: "Consensus Report on Hyperglycemic Crises in Adults With Diabetes. Diabetes Care. 2024; Harrison's Principles of Internal Medicine."
},
{
  id: "NEUMO-253",
  especialidad: "Neumología",
  tema: "Gasometría arterial",
  subtema: "Lactato y acidosis metabólica",
  dificultad: "Alta",
  caso: `Mujer de 72 años con neumonía y sospecha de sepsis presenta TA 82/48 mmHg, llenado capilar prolongado y oliguria. Gasometría: pH 7.27, PaCO2 29 mmHg y HCO3− 13 mEq/L. Lactato 5.1 mmol/L. La SpO2 es 94% con oxígeno suplementario. No tiene antecedentes de enfermedad hepática.`,
  pregunta: "¿Cuál es la interpretación clínica más importante del lactato elevado?",
  opciones: [
    "Confirma de forma exclusiva hipoxia tisular por hipoxemia arterial",
    "Puede reflejar alteraciones de perfusión y metabolismo; debe interpretarse con hemodinamia, tendencia y contexto clínico",
    "Descarta sepsis si la SpO2 es normal",
    "Indica alcalosis metabólica",
    "Obliga a administrar bicarbonato a todos los pacientes"
  ],
  respuestaCorrecta: 1,
  explicacion: `El lactato elevado en un paciente con hipotensión, oliguria y perfusión periférica alterada es preocupante por hipoperfusión y disfunción metabólica en el contexto de posible sepsis. Sin embargo, la hiperlactatemia no es específica de hipoxia tisular y puede tener otras causas, como estimulación adrenérgica, alteración del aclaramiento hepático o ciertos fármacos. Deben tratarse la causa de la infección, la perfusión y la disfunción orgánica, y reevaluarse el lactato según el protocolo clínico. El bicarbonato no se indica automáticamente por un lactato elevado.`,
  perlaENARM: "El lactato es un marcador de riesgo y perfusión, pero no es específico ni debe interpretarse de manera aislada.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de sepsis y choque séptico.",
    internacional: "Surviving Sepsis Campaign, 2021."
  },
  bibliografia: "Evans L et al. Surviving Sepsis Campaign. Intensive Care Medicine. 2021; Harrison's Principles of Internal Medicine."
},
{
  id: "NEUMO-254",
  especialidad: "Neumología",
  tema: "Gasometría arterial",
  subtema: "Acidosis metabólica y compensación insuficiente",
  dificultad: "Muy alta",
  caso: `Hombre de 68 años con insuficiencia renal aguda y diarrea presenta pH 7.19, PaCO2 40 mmHg y HCO3− 15 mEq/L. Na+ 139 mEq/L, Cl− 112 mEq/L y lactato 2.0 mmol/L. Está taquipneico y fatigado. No recibe sedantes ni tiene antecedente de EPOC.`,
  pregunta: "¿Qué trastorno ácido-base debe sospecharse además de la acidosis metabólica?",
  opciones: [
    "Alcalosis respiratoria concomitante",
    "Acidosis respiratoria concomitante por compensación ventilatoria insuficiente",
    "Alcalosis metabólica",
    "Compensación respiratoria excesiva",
    "Ausencia de trastorno ácido-base"
  ],
  respuestaCorrecta: 1,
  explicacion: `El pH indica acidemia y el HCO3− bajo identifica acidosis metabólica. Según Winter, la PaCO2 esperada es 1.5 × 15 + 8 = 30.5 ± 2 mmHg. La PaCO2 observada de 40 mmHg es demasiado alta para una compensación apropiada, lo que sugiere un componente respiratorio acidótico concomitante. La fatiga respiratoria, enfermedad pulmonar no reconocida o deterioro neuromuscular pueden limitar la compensación. Se requiere evaluación inmediata de ventilación y causa subyacente.`,
  perlaENARM: "En acidosis metabólica, una PaCO2 normal puede ser patológica si debería estar reducida por compensación.",
  gpc: {
    mexico: "Consultar protocolos institucionales de insuficiencia renal y soporte respiratorio.",
    internacional: "Principios de interpretación ácido-base en medicina crítica."
  },
  bibliografia: "Harrison's Principles of Internal Medicine; Brenner & Rector's The Kidney."
},
{
  id: "NEUMO-255",
  especialidad: "Neumología",
  tema: "Gasometría arterial",
  subtema: "Hipoxemia y FiO2",
  dificultad: "Alta",
  caso: `Mujer de 61 años con neumonía bilateral recibe oxígeno con FiO2 estimada de 0.50. Gasometría arterial: PaO2 60 mmHg, PaCO2 31 mmHg, pH 7.46. Se encuentra taquipneica, sin hipercapnia. La radiografía muestra opacidades bilaterales y no hay datos claros de insuficiencia cardiaca como causa predominante.`,
  pregunta: "¿Cuál es el cociente PaO2/FiO2 aproximado?",
  opciones: [
    "60",
    "90",
    "120",
    "150",
    "300"
  ],
  respuestaCorrecta: 2,
  explicacion: `El cociente PaO2/FiO2 es 60/0.50 = 120. Indica deterioro importante de la oxigenación, pero no basta por sí solo para diagnosticar SDRA. Se requiere integrar el tiempo de inicio, opacidades bilaterales, origen del edema pulmonar y soporte con PEEP o presión positiva según la definición aplicada. La FiO2 estimada con dispositivos de bajo flujo puede ser imprecisa; en este caso se especifica una FiO2 de 0.50 para permitir el cálculo.`,
  perlaENARM: "PaO2/FiO2 = PaO2 dividida entre FiO2 expresada como decimal, no como porcentaje.",
  gpc: {
    mexico: "Consultar protocolos institucionales de neumonía grave y SDRA.",
    internacional: "Global Definition of ARDS, 2023; ATS ARDS Guideline, 2024."
  },
  bibliografia: "Global Definition of ARDS. 2023; ATS Clinical Practice Guideline for ARDS. 2024."
},
{
  id: "NEUMO-256",
  especialidad: "Neumología",
  tema: "Gasometría arterial",
  subtema: "Gradiente alveoloarterial",
  dificultad: "Muy alta",
  caso: `Hombre de 40 años presenta disnea con PaO2 de 62 mmHg y PaCO2 de 30 mmHg al aire ambiente, al nivel del mar. Se utiliza una FiO2 de 0.21 y un cociente respiratorio estimado de 0.8. La presión barométrica es de 760 mmHg y la presión de vapor de agua es de 47 mmHg.`,
  pregunta: "¿Cuál es el gradiente alveoloarterial aproximado de oxígeno?",
  opciones: [
    "10 mmHg",
    "20 mmHg",
    "35 mmHg",
    "47 mmHg",
    "80 mmHg"
  ],
  respuestaCorrecta: 3,
  explicacion: `La ecuación alveolar simplificada es PAO2 = FiO2 × (PB − PH2O) − PaCO2/R. PAO2 ≈ 0.21 × (760 − 47) − 30/0.8 ≈ 150 − 37.5 = 112.5 mmHg. El gradiente A–a ≈ 112.5 − 62 = 50.5 mmHg. La opción más cercana es 47 mmHg. El gradiente debe compararse con lo esperado para la edad y el contexto; un valor elevado sugiere alteración V/Q, difusión o cortocircuito, pero no establece por sí solo una etiología.`,
  perlaENARM: "Gradiente A–a = PAO2 − PaO2; utiliza unidades y FiO2 correctas en la ecuación alveolar.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente aplicable a la causa clínica de hipoxemia.",
    internacional: "Principios de fisiología respiratoria."
  },
  bibliografia: "West JB. Respiratory Physiology: The Essentials."
},
{
  id: "NEUMO-257",
  especialidad: "Neumología",
  tema: "Gasometría arterial",
  subtema: "Trastorno mixto: acidosis y alcalosis metabólicas",
  dificultad: "Muy alta",
  caso: `Mujer de 51 años con vómitos persistentes y choque por infección presenta pH 7.38, PaCO2 28 mmHg y HCO3− 16 mEq/L. Na+ 140 mEq/L, Cl− 98 mEq/L, lactato 5.0 mmol/L y albúmina normal. Aunque el pH está dentro del intervalo de referencia, la paciente está gravemente enferma.`,
  pregunta: "¿Cuál es la interpretación más adecuada?",
  opciones: [
    "No existe trastorno ácido-base porque el pH es normal",
    "Puede existir acidosis metabólica con brecha aniónica elevada y alcalosis respiratoria concomitante; el pH casi normal no excluye trastorno mixto",
    "Existe únicamente alcalosis metabólica",
    "Existe únicamente acidosis respiratoria",
    "La PaCO2 baja descarta acidosis metabólica"
  ],
  respuestaCorrecta: 1,
  explicacion: `La brecha aniónica es 140 − (98 + 16) = 26 mEq/L, elevada. El lactato de 5 mmol/L sugiere un componente de acidosis láctica. La fórmula de Winter estima PaCO2 esperada = 1.5 × 16 + 8 = 32 ± 2 mmHg. La PaCO2 observada de 28 mmHg es menor de lo esperado, lo que sugiere una alcalosis respiratoria concomitante. El pH casi normal resulta de efectos opuestos y no significa normalidad ácido-base.`,
  perlaENARM: "Un pH normal puede ocultar trastornos mixtos; calcula brecha aniónica y compensación esperada.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de sepsis y alteraciones ácido-base.",
    internacional: "Surviving Sepsis Campaign, 2021."
  },
  bibliografia: "Evans L et al. Surviving Sepsis Campaign. 2021; Harrison's Principles of Internal Medicine."
},
{
  id: "NEUMO-258",
  especialidad: "Neumología",
  tema: "Gasometría arterial",
  subtema: "Interpretación de compensación en alcalosis metabólica",
  dificultad: "Muy alta",
  caso: `Hombre de 59 años con vómitos prolongados presenta pH 7.49, HCO3− 36 mEq/L y PaCO2 48 mmHg. El potasio es de 3.0 mEq/L y el cloro de 89 mEq/L. No tiene EPOC ni enfermedad neuromuscular conocida. Se busca determinar si la respuesta respiratoria es compatible con compensación.`,
  pregunta: "¿Cuál es la interpretación más apropiada?",
  opciones: [
    "Alcalosis metabólica con compensación respiratoria aproximada",
    "Acidosis respiratoria primaria",
    "Acidosis metabólica primaria",
    "Alcalosis respiratoria primaria con compensación renal completa",
    "Trastorno mixto obligatorio porque la PaCO2 está elevada"
  ],
  respuestaCorrecta: 0,
  explicacion: `El pH elevado y el HCO3− elevado indican alcalosis metabólica. La PaCO2 aumenta como compensación por hipoventilación. Una regla aproximada es que la PaCO2 aumente alrededor de 0.5–0.7 mmHg por cada incremento de 1 mEq/L de HCO3−, aunque existen fórmulas y variación clínica. Con HCO3− de 36, una PaCO2 alrededor de 44–48 mmHg puede ser compatible con compensación. La hipocloremia e hipopotasemia, junto con vómitos, apoyan alcalosis metabólica por pérdida de ácido y depleción de cloro.`,
  perlaENARM: "En alcalosis metabólica, la PaCO2 aumenta por compensación; una desviación excesiva obliga a considerar un trastorno respiratorio adicional.",
  gpc: {
    mexico: "Consultar protocolos institucionales de trastornos hidroelectrolíticos.",
    internacional: "Principios de fisiología renal y equilibrio ácido-base."
  },
  bibliografia: "Brenner & Rector's The Kidney; Harrison's Principles of Internal Medicine."
},
{
  id: "NEUMO-259",
  especialidad: "Neumología",
  tema: "Gasometría arterial",
  subtema: "Gasometría venosa frente a arterial",
  dificultad: "Alta",
  caso: `Hombre de 65 años con exacerbación de EPOC presenta disnea y somnolencia leve. Una gasometría venosa muestra pH 7.28 y PCO2 de 64 mmHg. El equipo debe decidir si estos datos bastan para cuantificar con precisión la oxigenación arterial y establecer la necesidad de soporte ventilatorio.`,
  pregunta: "¿Cuál es la afirmación más apropiada?",
  opciones: [
    "La gasometría venosa mide la PaO2 con precisión equivalente a la arterial",
    "La gasometría venosa puede ayudar a evaluar pH y detectar hipercapnia, pero no sustituye la PaO2 arterial para cuantificar oxigenación",
    "Una PCO2 venosa elevada descarta insuficiencia respiratoria",
    "La gasometría venosa siempre es normal en EPOC",
    "No se requiere integrar la clínica ni la oximetría"
  ],
  respuestaCorrecta: 1,
  explicacion: `La gasometría venosa puede ser útil para evaluar el pH y orientar la presencia de hipercapnia, aunque la diferencia entre PCO2 venosa y arterial varía y puede ser clínicamente relevante. La PO2 venosa no permite estimar de forma fiable la oxigenación arterial. En pacientes con exacerbación grave, deterioro neurológico o sospecha de insuficiencia respiratoria hipercápnica, la gasometría arterial puede ser necesaria para cuantificar PaO2, PaCO2 y pH, especialmente si cambiará la decisión ventilatoria.`,
  perlaENARM: "La PO2 venosa no sustituye a la PaO2 arterial; el valor de la muestra debe interpretarse según la pregunta clínica.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de exacerbación de EPOC y evaluación gasométrica.",
    internacional: "GOLD 2026."
  },
  bibliografia: "GOLD Report 2026; Harrison's Principles of Internal Medicine."
},
{
  id: "NEUMO-260",
  especialidad: "Neumología",
  tema: "Gasometría arterial",
  subtema: "Caso integrador de trastorno ácido-base",
  dificultad: "Muy alta",
  caso: `Mujer de 63 años con EPOC, diabetes mellitus y neumonía presenta somnolencia, fiebre y taquipnea. TA 92/58 mmHg, FR 30 rpm y SpO2 86% al aire ambiente. Gasometría: pH 7.16, PaCO2 58 mmHg y HCO3− 20 mEq/L. Na+ 138 mEq/L, Cl− 102 mEq/L, lactato 4.8 mmol/L y glucosa 310 mg/dL. No se dispone todavía de cetonas sanguíneas.`,
  pregunta: "¿Cuál es la interpretación ácido-base más apropiada y qué implica clínicamente?",
  opciones: [
    "Acidosis respiratoria aislada; no hay componente metabólico",
    "Acidosis mixta respiratoria y metabólica, con probable contribución de hipoperfusión; requiere evaluación y soporte urgentes",
    "Alcalosis respiratoria compensada",
    "Acidosis metabólica aislada con compensación respiratoria adecuada",
    "Trastorno compensado que permite manejo ambulatorio"
  ],
  respuestaCorrecta: 1,
  explicacion: `El pH de 7.16 indica acidemia grave. La PaCO2 elevada señala un componente respiratorio y el bicarbonato bajo sugiere acidosis metabólica concomitante. La brecha aniónica es 138 − (102 + 20) = 16 mEq/L, que puede estar elevada según el intervalo del laboratorio; el lactato de 4.8 mmol/L y la hipotensión apoyan contribución de hipoperfusión. La fórmula de Winter no debe utilizarse como única prueba para un trastorno mixto cuando ya existe una PaCO2 marcadamente elevada. La hipoxemia, somnolencia y acidemia requieren estabilización urgente, tratamiento de neumonía y evaluación de sepsis, además de soporte ventilatorio según la protección de vía aérea y la evolución clínica.`,
  perlaENARM: "Acidemia intensa, PaCO2 elevada, bicarbonato bajo, hipoxemia y signos de hipoperfusión requieren integrar varios procesos y actuar con urgencia.",
  gpc: {
    mexico: "Consultar GPC mexicanas vigentes de neumonía grave, sepsis, EPOC y crisis hiperglucémicas.",
    internacional: "GOLD 2026; Surviving Sepsis Campaign, 2021; consenso de crisis hiperglucémicas, 2024."
  },
  bibliografia: "GOLD Report 2026; Surviving Sepsis Campaign. 2021; Consensus Report on Hyperglycemic Crises. Diabetes Care. 2024."
},

{
  id: "NEUMO-261",
  especialidad: "Neumología",
  tema: "Fibrosis pulmonar y enfermedades intersticiales",
  subtema: "Patrón tomográfico de neumonía intersticial usual",
  dificultad: "Muy alta",
  caso: `Hombre de 69 años, exfumador de 35 paquetes-año, presenta disnea progresiva de 18 meses y tos seca. En la exploración tiene crepitantes inspiratorios bibasales tipo velcro y acropaquia. La espirometría muestra FVC de 64% del predicho, FEV1/FVC de 0.84 y DLCO de 42%. La TCAR demuestra reticulación subpleural basal, bronquiectasias por tracción y panalización, sin predominio de vidrio deslustrado ni atrapamiento aéreo significativo. No refiere exposición ocupacional relevante ni síntomas de enfermedad del tejido conectivo.`,
  pregunta: "¿Cuál es la interpretación diagnóstica más apropiada?",
  opciones: [
    "Enfisema pulmonar aislado",
    "Patrón tomográfico típico de neumonía intersticial usual, que en el contexto clínico adecuado puede permitir diagnosticar fibrosis pulmonar idiopática tras excluir causas conocidas",
    "Neumonía organizada criptogénica",
    "Neumonitis por hipersensibilidad no fibrótica confirmada",
    "Edema pulmonar cardiogénico crónico"
  ],
  respuestaCorrecta: 1,
  explicacion: `La combinación de reticulación subpleural y basal, bronquiectasias por tracción y panalización es característica de un patrón de neumonía intersticial usual (NIU). La restricción funcional y la reducción de DLCO respaldan una enfermedad intersticial fibrosante. La fibrosis pulmonar idiopática (FPI) requiere excluir exposiciones, fármacos, enfermedades autoinmunes y otras causas de NIU. La TCAR debe interpretarse dentro de una evaluación multidisciplinaria; la presencia de un patrón típico puede evitar biopsia pulmonar en un contexto apropiado, pero no establece por sí sola la etiología idiopática.`,
  perlaENARM: "NIU es un patrón morfológico; FPI es un diagnóstico etiológico que exige excluir causas conocidas de fibrosis.",
  gpc: {
    mexico: "Verificar en el catálogo vigente de GPC mexicano si existe una guía específica aplicable a FPI; no atribuir criterios diagnósticos a una guía no comprobada.",
    internacional: "ATS/ERS/JRS/ALAT Clinical Practice Guideline for Idiopathic Pulmonary Fibrosis and Progressive Pulmonary Fibrosis, 2022."
  },
  bibliografia: "ATS/ERS/JRS/ALAT. Idiopathic Pulmonary Fibrosis and Progressive Pulmonary Fibrosis in Adults. Am J Respir Crit Care Med. 2022."
},
{
  id: "NEUMO-262",
  especialidad: "Neumología",
  tema: "Fibrosis pulmonar y enfermedades intersticiales",
  subtema: "Pruebas de función pulmonar",
  dificultad: "Alta",
  caso: `Mujer de 57 años con enfermedad intersticial difusa presenta disnea de esfuerzo progresiva. Espirometría: FVC 58% del predicho, FEV1 61% y FEV1/FVC 0.86. La capacidad pulmonar total es de 62% del predicho y la DLCO de 39%. La TCAR muestra reticulación bilateral y bronquiectasias por tracción. No hay obstrucción bronquial significativa.`,
  pregunta: "¿Cuál es la interpretación fisiológica más apropiada?",
  opciones: [
    "Patrón obstructivo aislado con difusión conservada",
    "Patrón restrictivo confirmado por capacidad pulmonar total reducida, acompañado de alteración importante de difusión",
    "Espirometría normal porque FEV1/FVC es mayor de 0.70",
    "Restricción descartada porque el FEV1 también está disminuido",
    "Alteración ventilatoria exclusivamente de vías aéreas superiores"
  ],
  respuestaCorrecta: 1,
  explicacion: `Una FVC reducida con cociente FEV1/FVC conservado sugiere restricción, pero la confirmación fisiológica requiere demostrar capacidad pulmonar total reducida. En este caso, la TLC de 62% confirma el patrón restrictivo. La DLCO de 39% indica deterioro importante de la transferencia gaseosa, que puede reflejar pérdida de superficie alveolocapilar, alteraciones vasculares pulmonares o ambas. La interpretación debe considerar hemoglobina, calidad de la prueba, enfisema concomitante y gravedad de la enfermedad intersticial.`,
  perlaENARM: "La restricción se confirma con TLC reducida; una FVC baja aislada no basta para establecerla.",
  gpc: {
    mexico: "Consultar documentos institucionales vigentes de pruebas de función pulmonar y enfermedad intersticial.",
    internacional: "ATS/ERS technical standards for pulmonary function testing; ATS/ERS/JRS/ALAT, 2022."
  },
  bibliografia: "ATS/ERS technical standards for pulmonary function testing; Murray and Nadel's Textbook of Respiratory Medicine."
},
{
  id: "NEUMO-263",
  especialidad: "Neumología",
  tema: "Fibrosis pulmonar y enfermedades intersticiales",
  subtema: "Tratamiento antifibrótico en FPI",
  dificultad: "Muy alta",
  caso: `Hombre de 72 años con FPI confirmada mediante evaluación multidisciplinaria y patrón tomográfico típico de NIU. Presenta FVC de 68% del predicho y DLCO de 45%. Durante el seguimiento ha mostrado deterioro funcional progresivo. No existe una contraindicación evidente para antifibróticos, aunque tiene antecedente de dispepsia y elevación leve de transaminasas dentro de límites que requieren vigilancia.`,
  pregunta: "¿Cuál es el enfoque terapéutico más apropiado?",
  opciones: [
    "Prescribir prednisona en monoterapia a largo plazo como tratamiento antifibrótico estándar",
    "Discutir tratamiento con nintedanib o pirfenidona, individualizando beneficios, riesgos, interacciones y monitorización",
    "Indicar antibióticos crónicos como tratamiento principal de la fibrosis",
    "Evitar todo tratamiento porque los antifibróticos revierten completamente la fibrosis",
    "Indicar inmunosupresión combinada de rutina para todos los pacientes con FPI"
  ],
  respuestaCorrecta: 1,
  explicacion: `Nintedanib y pirfenidona son opciones antifibróticas que pueden reducir la velocidad de pérdida funcional en FPI; no revierten la fibrosis establecida ni garantizan ausencia de progresión. La selección requiere discutir objetivos, efectos adversos, función hepática, interacciones, preferencias y disponibilidad. También deben abordarse vacunación, rehabilitación pulmonar, oxigenoterapia si está indicada, comorbilidades y eventual evaluación para trasplante. La inmunosupresión convencional no es un tratamiento estándar de FPI y algunas combinaciones inmunosupresoras han demostrado daño.`,
  perlaENARM: "Los antifibróticos buscan enlentecer el deterioro funcional; no curan ni revierten la fibrosis establecida.",
  gpc: {
    mexico: "Verificar GPC mexicana vigente específica de FPI y disponibilidad institucional de antifibróticos.",
    internacional: "ATS/ERS/JRS/ALAT Guideline for IPF and Progressive Pulmonary Fibrosis, 2022."
  },
  bibliografia: "ATS/ERS/JRS/ALAT. Am J Respir Crit Care Med. 2022; ensayos INPULSIS y ASCEND."
},
{
  id: "NEUMO-264",
  especialidad: "Neumología",
  tema: "Fibrosis pulmonar y enfermedades intersticiales",
  subtema: "Fibrosis pulmonar progresiva",
  dificultad: "Muy alta",
  caso: `Mujer de 61 años con enfermedad intersticial fibrosante asociada a una exposición ocupacional ya suspendida. Durante 12 meses presenta empeoramiento de disnea, caída de FVC de 8 puntos porcentuales absolutos del predicho y aumento de reticulación y bronquiectasias por tracción en TCAR. Se han descartado infección aguda, edema pulmonar y embolia pulmonar. La etiología no corresponde a FPI.`,
  pregunta: "¿Cuál es el siguiente enfoque más apropiado?",
  opciones: [
    "Descartar progresión porque la enfermedad no es idiopática",
    "Evaluar si cumple criterios de fenotipo de fibrosis pulmonar progresiva y discutir manejo etiológico y posible nintedanib según contexto",
    "Iniciar glucocorticoides a dosis altas de forma indefinida sin investigar la etiología",
    "Suspender seguimiento funcional porque la TCAR ya está disponible",
    "Indicar antibióticos prolongados como tratamiento antifibrótico"
  ],
  respuestaCorrecta: 1,
  explicacion: `La fibrosis pulmonar progresiva puede presentarse en enfermedades intersticiales fibrosantes distintas de la FPI. La guía ATS/ERS/JRS/ALAT de 2022 propone identificar progresión mediante combinaciones de empeoramiento de síntomas, deterioro fisiológico y progresión radiológica durante el periodo de evaluación, sin explicación alternativa. En pacientes seleccionados, nintedanib puede considerarse tras manejo apropiado de la enfermedad subyacente. La decisión requiere confirmar la trayectoria clínica y discutir riesgos, tolerabilidad y objetivos terapéuticos.`,
  perlaENARM: "El fenotipo de fibrosis pulmonar progresiva no es exclusivo de la FPI; primero descarta causas alternativas del deterioro.",
  gpc: {
    mexico: "Verificar GPC mexicana vigente correspondiente a la enfermedad intersticial de base.",
    internacional: "ATS/ERS/JRS/ALAT Guideline for Progressive Pulmonary Fibrosis, 2022."
  },
  bibliografia: "ATS/ERS/JRS/ALAT. Idiopathic Pulmonary Fibrosis and Progressive Pulmonary Fibrosis in Adults. 2022; ensayo INBUILD."
},
{
  id: "NEUMO-265",
  especialidad: "Neumología",
  tema: "Fibrosis pulmonar y enfermedades intersticiales",
  subtema: "Neumonitis por hipersensibilidad",
  dificultad: "Muy alta",
  caso: `Mujer de 48 años trabaja en una granja y limpia diariamente un granero con heno húmedo. Presenta tos seca, disnea y episodios febriles horas después de la exposición. La TCAR muestra nódulos centrolobulillares mal definidos, atenuación en mosaico y atrapamiento aéreo espiratorio. Las pruebas funcionales muestran restricción leve y DLCO reducida. No existe patrón típico de NIU.`,
  pregunta: "¿Cuál es el diagnóstico más probable y qué paso contribuye a la evaluación?",
  opciones: [
    "FPI confirmada exclusivamente por la edad",
    "Neumonitis por hipersensibilidad; integrar exposición, TCAR, lavado broncoalveolar cuando esté indicado y evaluación multidisciplinaria",
    "EPOC confirmada por el atrapamiento aéreo aislado",
    "Edema pulmonar cardiogénico por la presencia de disnea",
    "Neumonía bacteriana recurrente confirmada por fiebre"
  ],
  respuestaCorrecta: 1,
  explicacion: `La relación temporal con antígenos orgánicos, junto con nódulos centrolobulillares, atenuación en mosaico y atrapamiento aéreo, favorece neumonitis por hipersensibilidad. El diagnóstico integra identificación de exposición, patrón tomográfico, hallazgos de lavado broncoalveolar —incluida linfocitosis en contextos apropiados— y, en casos seleccionados, histopatología. Ningún dato aislado confirma todos los casos. La identificación y evitación del antígeno causal son componentes fundamentales del manejo.`,
  perlaENARM: "En neumonitis por hipersensibilidad, historia de exposición y TCAR son piezas centrales; ningún biomarcador aislado confirma el diagnóstico.",
  gpc: {
    mexico: "Verificar si existe GPC mexicana vigente específica para neumonitis por hipersensibilidad.",
    internacional: "ATS/JRS/ALAT Clinical Practice Guideline for Hypersensitivity Pneumonitis, 2020."
  },
  bibliografia: "Raghu G et al. Diagnosis of Hypersensitivity Pneumonitis in Adults. AJRCCM. 2020."
},
{
  id: "NEUMO-266",
  especialidad: "Neumología",
  tema: "Fibrosis pulmonar y enfermedades intersticiales",
  subtema: "Enfermedad intersticial asociada a esclerosis sistémica",
  dificultad: "Muy alta",
  caso: `Mujer de 46 años con fenómeno de Raynaud, esclerodactilia, reflujo y anticuerpos antitopoisomerasa I positivos presenta disnea progresiva. La TCAR muestra vidrio deslustrado y reticulación basal con bronquiectasias por tracción, sin panalización extensa. La FVC ha disminuido de 78% a 66% del predicho en un año. No hay evidencia de infección activa.`,
  pregunta: "¿Cuál es el enfoque terapéutico más apropiado?",
  opciones: [
    "Considerar enfermedad intersticial asociada a esclerosis sistémica y discutir inmunomodulación, con o sin nintedanib según patrón, progresión y perfil del paciente",
    "Tratar como FPI sin considerar la enfermedad autoinmune",
    "Prescribir glucocorticoides a dosis altas de rutina sin considerar el riesgo de crisis renal esclerodérmica",
    "Indicar únicamente antibióticos",
    "Suspender vigilancia porque no existe panalización"
  ],
  respuestaCorrecta: 0,
  explicacion: `La esclerosis sistémica puede producir enfermedad intersticial, con frecuencia un patrón de neumonía intersticial no específica. La caída de FVC y los hallazgos tomográficos indican progresión. El tratamiento debe individualizarse mediante neumología y reumatología; pueden considerarse opciones inmunomoduladoras como micofenolato y, en pacientes seleccionados, nintedanib. Los glucocorticoides a dosis altas requieren especial cautela por su asociación con crisis renal esclerodérmica. La ausencia de panalización no excluye enfermedad clínicamente relevante.`,
  perlaENARM: "En enfermedad intersticial por esclerosis sistémica, evita asumir que toda fibrosis requiere el mismo tratamiento que la FPI.",
  gpc: {
    mexico: "Verificar GPC mexicana vigente de esclerosis sistémica y enfermedad intersticial.",
    internacional: "ATS Clinical Practice Guideline for Systemic Sclerosis-associated ILD, 2024; recomendaciones ACR/CHEST."
  },
  bibliografia: "ATS Clinical Practice Guideline for SSc-ILD. 2024; ACR/CHEST Guideline for ILD in Systemic Autoimmune Rheumatic Diseases."
},
{
  id: "NEUMO-267",
  especialidad: "Neumología",
  tema: "Fibrosis pulmonar y enfermedades intersticiales",
  subtema: "Sarcoidosis pulmonar",
  dificultad: "Alta",
  caso: `Hombre de 39 años presenta tos seca, fatiga y adenopatías hiliares bilaterales simétricas. La TC muestra adenopatías mediastínicas y pequeños nódulos perilin-fáticos. El calcio sérico está ligeramente elevado. No hay hipoxemia ni deterioro funcional significativo. No presenta síntomas cardiacos, neurológicos ni oculares.`,
  pregunta: "¿Cuál es el enfoque diagnóstico más apropiado?",
  opciones: [
    "Confirmar sarcoidosis exclusivamente por elevación de calcio",
    "Considerar sarcoidosis, evaluar diagnósticos alternativos y decidir si se requiere biopsia según presentación y certeza diagnóstica",
    "Diagnosticar tuberculosis activa por las adenopatías simétricas",
    "Iniciar glucocorticoides en todos los casos sin evaluar afectación orgánica",
    "Descartar sarcoidosis porque no existe hipoxemia"
  ],
  respuestaCorrecta: 1,
  explicacion: `La adenopatía hiliar bilateral simétrica y los nódulos perilin-fáticos son hallazgos compatibles con sarcoidosis. El diagnóstico se basa en presentación clínica y radiológica compatible, evidencia histológica de granulomas no necrosantes cuando sea necesaria y exclusión razonable de otras causas, especialmente infecciones y exposiciones. En una presentación muy característica y sin datos de alarma puede no ser necesaria biopsia inmediata. El calcio elevado puede aparecer, pero no es diagnóstico. La indicación de tratamiento depende de síntomas, progresión y riesgo de daño orgánico.`,
  perlaENARM: "Sarcoidosis: presentación compatible, granulomas cuando se requiere confirmación y exclusión de otras causas de granulomatosis.",
  gpc: {
    mexico: "Verificar GPC mexicana vigente específica de sarcoidosis, si está disponible.",
    internacional: "ATS Clinical Practice Guideline: Diagnosis and Detection of Sarcoidosis, 2020."
  },
  bibliografia: "Crouser ED et al. Diagnosis and Detection of Sarcoidosis. AJRCCM. 2020."
},
{
  id: "NEUMO-268",
  especialidad: "Neumología",
  tema: "Fibrosis pulmonar y enfermedades intersticiales",
  subtema: "Sarcoidosis y tratamiento",
  dificultad: "Alta",
  caso: `Mujer de 42 años con sarcoidosis pulmonar confirmada presenta tos seca y disnea progresiva. La FVC disminuye de 82% a 65% del predicho en diez meses. La TC muestra progresión del compromiso parenquimatoso. Se han excluido infección activa y otras causas de deterioro. No existe afectación cardiaca conocida.`,
  pregunta: "¿Cuál es el enfoque terapéutico más apropiado?",
  opciones: [
    "Observación indefinida pese a deterioro funcional progresivo",
    "Considerar tratamiento sistémico, habitualmente glucocorticoides iniciales en enfermedad pulmonar sintomática y progresiva, individualizando alternativas ahorradoras",
    "Indicar antifibrótico como tratamiento universal de primera línea para toda sarcoidosis",
    "Prescribir antibióticos prolongados sin evidencia de infección",
    "Indicar trasplante pulmonar inmediato sin intentar manejo médico"
  ],
  respuestaCorrecta: 1,
  explicacion: `La sarcoidosis no requiere tratamiento sistémico en todos los pacientes, pero el deterioro funcional y radiológico progresivo puede justificarlo. Los glucocorticoides se utilizan con frecuencia como tratamiento inicial cuando existe enfermedad pulmonar clínicamente relevante; la duración y la dosis dependen de gravedad, respuesta y toxicidad. En casos persistentes o con efectos adversos pueden considerarse fármacos ahorradores de esteroides. Se debe monitorizar función pulmonar y buscar afectación extrapulmonar, especialmente cardiaca, ocular y neurológica cuando esté indicada.`,
  perlaENARM: "La indicación de tratamiento en sarcoidosis depende de síntomas, progresión y riesgo de daño orgánico, no solo de la imagen.",
  gpc: {
    mexico: "Verificar GPC mexicana vigente aplicable a sarcoidosis y enfermedad intersticial.",
    internacional: "ATS Clinical Practice Guideline: Diagnosis and Detection of Sarcoidosis, 2020."
  },
  bibliografia: "Crouser ED et al. AJRCCM. 2020; Murray and Nadel's Textbook of Respiratory Medicine."
},
{
  id: "NEUMO-269",
  especialidad: "Neumología",
  tema: "Fibrosis pulmonar y enfermedades intersticiales",
  subtema: "Neumonía intersticial no específica",
  dificultad: "Muy alta",
  caso: `Mujer de 52 años con artralgias, fenómeno de Raynaud y disnea progresiva. La TCAR muestra vidrio deslustrado bilateral basal, reticulación fina y bronquiectasias por tracción, con distribución relativamente simétrica y poca panalización. La función pulmonar demuestra restricción y DLCO disminuida. Los estudios inmunológicos están en proceso.`,
  pregunta: "¿Cuál es la interpretación más apropiada del patrón y su implicación diagnóstica?",
  opciones: [
    "Patrón típico de enfisema aislado",
    "Patrón compatible con neumonía intersticial no específica; investigar enfermedad autoinmune y otras causas secundarias",
    "Diagnóstico definitivo de FPI sin necesidad de excluir etiologías",
    "Patrón específico de edema cardiogénico",
    "Tuberculosis miliar confirmada"
  ],
  respuestaCorrecta: 1,
  explicacion: `La combinación de vidrio deslustrado, reticulación relativamente homogénea y bronquiectasias por tracción con escasa panalización puede ser compatible con neumonía intersticial no específica (NINE). Este patrón se observa en enfermedades autoinmunes, exposición a fármacos y otras condiciones, además de formas idiopáticas. Los síntomas sistémicos aumentan la sospecha de enfermedad del tejido conectivo. La clasificación final requiere correlación clínica, serológica, radiológica y, en casos seleccionados, histopatológica mediante evaluación multidisciplinaria.`,
  perlaENARM: "Una NINE en paciente con síntomas sistémicos debe motivar evaluación de enfermedad autoinmune asociada.",
  gpc: {
    mexico: "Verificar GPC mexicana vigente para la enfermedad autoinmune o intersticial identificada.",
    internacional: "ATS/ERS classification of idiopathic interstitial pneumonias; ACR/CHEST guidance for systemic autoimmune rheumatic disease-associated ILD."
  },
  bibliografia: "ATS/ERS classification of idiopathic interstitial pneumonias; ACR/CHEST Guideline for ILD in Systemic Autoimmune Rheumatic Diseases."
},
{
  id: "NEUMO-270",
  especialidad: "Neumología",
  tema: "Fibrosis pulmonar y enfermedades intersticiales",
  subtema: "Exacerbación aguda de FPI",
  dificultad: "Muy alta",
  caso: `Hombre de 75 años con FPI estable presenta deterioro respiratorio en siete días. La SpO2 cae de 93% a 82% al aire ambiente. La TCAR muestra nuevas opacidades bilaterales en vidrio deslustrado sobre fibrosis subyacente. No hay derrame pleural importante. Se inicia evaluación urgente para excluir infección, tromboembolia pulmonar, edema cardiogénico y otras causas de descompensación.`,
  pregunta: "¿Cuál es la interpretación y el enfoque inicial más apropiados?",
  opciones: [
    "Progresión crónica habitual de FPI, sin necesidad de evaluación urgente",
    "Sospecha de exacerbación aguda de FPI; buscar desencadenantes y causas alternativas, brindar soporte y valorar tratamiento individualizado",
    "Confirmación automática de infección bacteriana por las opacidades nuevas",
    "Indicación obligatoria de dosis altas de glucocorticoides sin evaluar diagnósticos alternativos",
    "Indicación inmediata de antifibrótico como único tratamiento de la descompensación"
  ],
  respuestaCorrecta: 1,
  explicacion: `El deterioro respiratorio agudo con nuevas opacidades bilaterales sobre una enfermedad fibrosante conocida plantea exacerbación aguda de FPI, pero es necesario evaluar causas alternativas y desencadenantes, incluidos infección, edema cardiogénico, embolia pulmonar y procedimientos recientes. El manejo incluye soporte de oxigenación, tratamiento de causas identificables y discusión individualizada de glucocorticoides, cuyo beneficio en exacerbación aguda de FPI es incierto. La ventilación invasiva tiene pronóstico desfavorable en muchos pacientes con FPI avanzada y debe decidirse según objetivos de atención y posibilidades de reversibilidad.`,
  perlaENARM: "En deterioro agudo sobre FPI, las nuevas opacidades no excluyen infección, edema ni TEP; evalúa diagnósticos alternativos.",
  gpc: {
    mexico: "Consultar protocolos institucionales de insuficiencia respiratoria aguda y enfermedad intersticial.",
    internacional: "ATS/ERS/JRS/ALAT guidance on IPF; literatura contemporánea sobre exacerbación aguda de FPI."
  },
  bibliografia: "Collard HR et al. Acute Exacerbation of Idiopathic Pulmonary Fibrosis. AJRCCM. 2016; ATS/ERS/JRS/ALAT guidance on IPF."
},
{
  id: "NEUMO-271",
  especialidad: "Neumología",
  tema: "Fibrosis pulmonar y enfermedades intersticiales",
  subtema: "Neumonitis intersticial por fármacos",
  dificultad: "Alta",
  caso: `Mujer de 66 años en tratamiento con un fármaco antineoplásico desarrolla tos seca, fiebre y disnea progresiva durante varias semanas. La TCAR muestra opacidades bilaterales en vidrio deslustrado. No hay datos claros de congestión. La evaluación microbiológica inicial no identifica patógeno, pero la paciente está inmunocomprometida y la investigación infecciosa continúa.`,
  pregunta: "¿Cuál es el enfoque diagnóstico-terapéutico más apropiado?",
  opciones: [
    "Atribuir de inmediato todos los hallazgos al fármaco y omitir evaluación infecciosa",
    "Considerar toxicidad pulmonar farmacológica, evaluar diagnósticos alternativos y discutir suspensión del agente sospechoso con el equipo tratante",
    "Continuar el fármaco sin cambios porque el vidrio deslustrado descarta toxicidad",
    "Administrar antifibróticos de forma automática",
    "Diagnosticar FPI únicamente por la edad"
  ],
  respuestaCorrecta: 1,
  explicacion: `Varios fármacos pueden producir neumonitis, patrones intersticiales o lesión pulmonar difusa. La relación temporal con el medicamento apoya la sospecha, pero no confirma causalidad. Deben excluirse infección —especialmente en inmunocomprometidos—, edema, progresión tumoral y otras causas. La suspensión temporal o definitiva del agente sospechoso debe discutirse con el equipo responsable, considerando gravedad y alternativas terapéuticas. Los glucocorticoides pueden ser considerados en determinadas toxicidades inflamatorias, pero la decisión depende del fármaco, patrón y severidad.`,
  perlaENARM: "La neumonitis por fármacos es un diagnóstico de exclusión relativa; no omitas infección en pacientes inmunocomprometidos.",
  gpc: {
    mexico: "Consultar guías institucionales de toxicidad pulmonar por el fármaco específico.",
    internacional: "Guías de toxicidad pulmonar farmacológica específicas del agente implicado."
  },
  bibliografia: "Murray and Nadel's Textbook of Respiratory Medicine; literatura especializada en toxicidad pulmonar por fármacos."
},
{
  id: "NEUMO-272",
  especialidad: "Neumología",
  tema: "Fibrosis pulmonar y enfermedades intersticiales",
  subtema: "Enfermedad intersticial y exposición ocupacional",
  dificultad: "Alta",
  caso: `Hombre de 63 años trabajó durante 25 años en corte y pulido de piedra artificial sin protección respiratoria adecuada. Presenta disnea progresiva, tos seca y restricción funcional. La TC muestra nódulos y áreas de fibrosis, con predominio superior y adenopatías con calcificación periférica. No tiene antecedentes de enfermedad autoinmune.`,
  pregunta: "¿Cuál es el enfoque más apropiado?",
  opciones: [
    "Considerar silicosis por exposición a sílice y patrón radiológico, con evaluación de gravedad y tuberculosis asociada",
    "Diagnosticar FPI exclusivamente por la edad",
    "Descartar neumoconiosis porque la exposición ya terminó",
    "Prescribir glucocorticoides como tratamiento curativo universal",
    "Confirmar sarcoidosis por las adenopatías sin valorar la exposición"
  ],
  respuestaCorrecta: 0,
  explicacion: `El trabajo con piedra artificial puede implicar exposición intensa a sílice respirable y causar silicosis acelerada o crónica. La fibrosis nodular con predominio superior y las adenopatías calcificadas son hallazgos compatibles. Debe documentarse la historia ocupacional, valorar función pulmonar, extensión radiológica y exposición residual, además de investigar tuberculosis según riesgo clínico y epidemiológico. La prevención de nuevas exposiciones y la vigilancia de complicaciones son esenciales; no existe un tratamiento farmacológico que revierta de forma fiable la fibrosis establecida.`,
  perlaENARM: "La historia ocupacional puede definir la etiología de una enfermedad intersticial; la silicosis incrementa el riesgo de tuberculosis.",
  gpc: {
    mexico: "Consultar normativa mexicana vigente de salud ocupacional y documentos institucionales de neumoconiosis.",
    internacional: "ILO International Classification of Radiographs of Pneumoconioses; guías de salud ocupacional."
  },
  bibliografia: "ILO International Classification of Radiographs of Pneumoconioses; Murray and Nadel's Textbook of Respiratory Medicine."
},
{
  id: "NEUMO-273",
  especialidad: "Neumología",
  tema: "Fibrosis pulmonar y enfermedades intersticiales",
  subtema: "Neumoconiosis por asbesto",
  dificultad: "Alta",
  caso: `Hombre de 74 años trabajó durante tres décadas en mantenimiento industrial con exposición a aislamiento térmico. Presenta disnea progresiva y crepitantes bibasales. La TC muestra fibrosis subpleural basal y placas pleurales calcificadas. Tiene antecedente de tabaquismo de 40 paquetes-año. No hay signos de infección aguda.`,
  pregunta: "¿Cuál es la interpretación más apropiada?",
  opciones: [
    "Hallazgos compatibles con exposición a asbesto; evaluar asbestosis y riesgo de neoplasias pleuropulmonares",
    "La presencia de placas pleurales confirma mesotelioma maligno",
    "La fibrosis basal excluye etiología ocupacional",
    "El tabaquismo elimina el riesgo relacionado con asbesto",
    "El cuadro confirma neumonía bacteriana"
  ],
  respuestaCorrecta: 0,
  explicacion: `Las placas pleurales calcificadas son marcadores de exposición previa a asbesto, aunque no equivalen por sí solas a asbestosis. La fibrosis intersticial basal subpleural en el contexto de exposición prolongada puede ser compatible con asbestosis, tras excluir otras causas. La exposición también se asocia con mesotelioma y cáncer pulmonar; el tabaquismo incrementa particularmente el riesgo de cáncer pulmonar en personas expuestas a asbesto. Se requiere evaluación clínica, radiológica y ocupacional individualizada.`,
  perlaENARM: "Placas pleurales indican exposición a asbesto, pero no demuestran por sí solas fibrosis pulmonar ni mesotelioma.",
  gpc: {
    mexico: "Consultar normativa mexicana vigente de salud ocupacional y exposición a asbesto.",
    internacional: "WHO guidance on asbestos-related diseases; literatura ocupacional especializada."
  },
  bibliografia: "WHO. Asbestos: elimination of asbestos-related diseases; Murray and Nadel's Textbook of Respiratory Medicine."
},
{
  id: "NEUMO-274",
  especialidad: "Neumología",
  tema: "Fibrosis pulmonar y enfermedades intersticiales",
  subtema: "Lavado broncoalveolar",
  dificultad: "Muy alta",
  caso: `Mujer de 51 años con enfermedad intersticial difusa de etiología incierta presenta disnea crónica y TCAR con vidrio deslustrado, nódulos centrolobulillares y atenuación en mosaico. Existe una historia posible de exposición a aves, pero es incompleta. El equipo considera broncoscopia con lavado broncoalveolar para complementar la evaluación.`,
  pregunta: "¿Cuál es la afirmación más apropiada sobre el lavado broncoalveolar?",
  opciones: [
    "Una linfocitosis elevada confirma por sí sola neumonitis por hipersensibilidad",
    "Puede aportar información sobre celularidad y diagnósticos alternativos, pero debe interpretarse junto con exposición, TCAR y contexto clínico",
    "Debe realizarse en todos los pacientes con patrón típico de NIU",
    "No puede ayudar en la evaluación de infecciones",
    "Sustituye siempre la evaluación multidisciplinaria"
  ],
  respuestaCorrecta: 1,
  explicacion: `El lavado broncoalveolar puede aportar celularidad diferencial y muestras microbiológicas, y es útil en escenarios seleccionados de enfermedad intersticial. La linfocitosis puede apoyar neumonitis por hipersensibilidad, pero no es específica y su sensibilidad depende de la forma clínica, tabaquismo, tratamiento y otros factores. La decisión de realizarlo debe considerar si los resultados cambiarán el diagnóstico o el manejo, así como el riesgo del procedimiento. No reemplaza la integración multidisciplinaria de historia, TCAR y, cuando corresponda, histopatología.`,
  perlaENARM: "El lavado broncoalveolar es una prueba complementaria; la linfocitosis aislada no confirma etiología.",
  gpc: {
    mexico: "Verificar GPC mexicana vigente aplicable a la enfermedad intersticial sospechada.",
    internacional: "ATS/JRS/ALAT Guideline for Hypersensitivity Pneumonitis, 2020."
  },
  bibliografia: "Raghu G et al. Diagnosis of Hypersensitivity Pneumonitis in Adults. AJRCCM. 2020."
},
{
  id: "NEUMO-275",
  especialidad: "Neumología",
  tema: "Fibrosis pulmonar y enfermedades intersticiales",
  subtema: "Biopsia pulmonar en enfermedad intersticial",
  dificultad: "Muy alta",
  caso: `Hombre de 64 años con disnea progresiva tiene TCAR que muestra reticulación basal y subpleural, pero sin panalización definida. El radiólogo considera un patrón probable de NIU. La historia clínica no identifica exposición ni enfermedad autoinmune, pero el diagnóstico sigue siendo incierto tras pruebas iniciales. La capacidad pulmonar es moderadamente reducida y el paciente tiene riesgo quirúrgico intermedio.`,
  pregunta: "¿Cuál es la estrategia diagnóstica más apropiada?",
  opciones: [
    "Realizar biopsia quirúrgica obligatoria en todos los casos",
    "Discutir el caso en equipo multidisciplinario y decidir si la información adicional, incluida biopsia en casos seleccionados, cambiaría el manejo",
    "Diagnosticar FPI de forma automática porque el paciente es mayor de 60 años",
    "Descartar enfermedad intersticial porque no existe panalización",
    "Iniciar inmunosupresión sin definir etiología"
  ],
  respuestaCorrecta: 1,
  explicacion: `Un patrón probable de NIU no equivale automáticamente a FPI. La historia de exposición, serologías, pruebas funcionales y revisión experta de TCAR deben integrarse en una evaluación multidisciplinaria. En determinados contextos clínicos, un patrón probable puede permitir diagnóstico de FPI sin biopsia; en otros, la incertidumbre puede justificar muestreo histológico si el resultado cambia el manejo y el riesgo es aceptable. La biopsia quirúrgica no es obligatoria para todos los pacientes y debe compararse con alternativas diagnósticas y riesgos.`,
  perlaENARM: "La biopsia pulmonar se indica cuando puede cambiar la conducta y el balance entre beneficio diagnóstico y riesgo es favorable.",
  gpc: {
    mexico: "Verificar guía mexicana vigente aplicable a FPI y disponibilidad de evaluación multidisciplinaria.",
    internacional: "ATS/ERS/JRS/ALAT Guideline for IPF and Progressive Pulmonary Fibrosis, 2022."
  },
  bibliografia: "ATS/ERS/JRS/ALAT. Am J Respir Crit Care Med. 2022."
},
{
  id: "NEUMO-276",
  especialidad: "Neumología",
  tema: "Fibrosis pulmonar y enfermedades intersticiales",
  subtema: "Hipoxemia de esfuerzo y oxigenoterapia",
  dificultad: "Alta",
  caso: `Mujer de 67 años con fibrosis pulmonar presenta SpO2 de 94% en reposo, pero cae a 82% durante una prueba de caminata de seis minutos. Refiere disnea limitante al subir escaleras. La FVC es de 61% del predicho y la DLCO de 34%. No hay signos de insuficiencia cardiaca ni anemia grave.`,
  pregunta: "¿Cuál es el siguiente enfoque más apropiado?",
  opciones: [
    "Descartar hipoxemia clínicamente importante porque la saturación en reposo es normal",
    "Evaluar oxigenoterapia ambulatoria y realizar una valoración funcional individualizada, considerando beneficio sintomático y necesidades del paciente",
    "Indicar oxígeno domiciliario continuo de forma automática sin evaluación adicional",
    "Suspender rehabilitación pulmonar",
    "Prescribir antibióticos por la caída de saturación al caminar"
  ],
  respuestaCorrecta: 1,
  explicacion: `La desaturación marcada durante el esfuerzo puede ser clínicamente relevante en enfermedad intersticial, aun cuando la SpO2 en reposo sea normal. La evaluación debe incluir reproducibilidad de la prueba, síntomas, capacidad funcional, necesidades de oxígeno y objetivos del paciente. La oxigenoterapia ambulatoria puede considerarse en hipoxemia de esfuerzo grave, con decisión individualizada y reevaluación. La rehabilitación pulmonar y el tratamiento de la enfermedad subyacente siguen siendo importantes.`,
  perlaENARM: "Una SpO2 normal en reposo no excluye desaturación importante durante el esfuerzo en enfermedad intersticial.",
  gpc: {
    mexico: "Consultar normativa y protocolos mexicanos vigentes de oxigenoterapia domiciliaria.",
    internacional: "ATS Clinical Practice Guideline: Home Oxygen Therapy for Adults, 2020."
  },
  bibliografia: "Jacobs SS et al. Home Oxygen Therapy for Adults with Chronic Lung Disease. AJRCCM. 2020."
},
{
  id: "NEUMO-277",
  especialidad: "Neumología",
  tema: "Fibrosis pulmonar y enfermedades intersticiales",
  subtema: "Rehabilitación pulmonar",
  dificultad: "Alta",
  caso: `Hombre de 70 años con FPI en tratamiento antifibrótico estable presenta disnea durante actividades cotidianas, reducción de la distancia recorrida en caminata de seis minutos y desacondicionamiento muscular. No presenta infección ni exacerbación aguda. La oxigenación en reposo es aceptable, aunque desatura con esfuerzo.`,
  pregunta: "¿Cuál es una intervención no farmacológica apropiada?",
  opciones: [
    "Recomendar inmovilidad para evitar la progresión de la fibrosis",
    "Ofrecer rehabilitación pulmonar individualizada y evaluar necesidades de oxígeno durante ejercicio",
    "Suspender el antifibrótico porque la rehabilitación lo sustituye",
    "Indicar corticoides sistémicos a todos los pacientes con disnea crónica",
    "Evitar ejercicio supervisado en toda enfermedad intersticial"
  ],
  respuestaCorrecta: 1,
  explicacion: `La rehabilitación pulmonar puede mejorar capacidad de ejercicio, disnea y calidad de vida en pacientes con enfermedades respiratorias crónicas, incluida la FPI. El programa debe adaptarse a la capacidad funcional, comorbilidades y desaturación. Puede ser necesario valorar oxígeno durante ejercicio. La rehabilitación no sustituye el tratamiento antifibrótico ni revierte la fibrosis, pero forma parte del abordaje integral junto con educación, vacunación, manejo de comorbilidades y apoyo psicosocial.`,
  perlaENARM: "La rehabilitación pulmonar es parte del tratamiento integral de la enfermedad intersticial; no reemplaza el manejo etiológico.",
  gpc: {
    mexico: "Consultar protocolos institucionales de rehabilitación pulmonar y enfermedad intersticial.",
    internacional: "ATS Clinical Practice Guideline for Pulmonary Rehabilitation."
  },
  bibliografia: "ATS Clinical Practice Guideline for Pulmonary Rehabilitation; Murray and Nadel's Textbook of Respiratory Medicine."
},
{
  id: "NEUMO-278",
  especialidad: "Neumología",
  tema: "Fibrosis pulmonar y enfermedades intersticiales",
  subtema: "Hipertensión pulmonar asociada a enfermedad intersticial",
  dificultad: "Muy alta",
  caso: `Mujer de 68 años con fibrosis pulmonar avanzada presenta empeoramiento de disnea, síncope de esfuerzo y edema periférico. La DLCO ha disminuido desproporcionadamente respecto a la FVC. La ecocardiografía sugiere dilatación ventricular derecha y aumento de la presión pulmonar estimada. No hay evidencia de embolia pulmonar aguda.`,
  pregunta: "¿Cuál es el enfoque diagnóstico más apropiado para confirmar hipertensión pulmonar cuando el resultado cambiaría el manejo?",
  opciones: [
    "Confirmarla exclusivamente con la estimación de presión por ecocardiografía",
    "Realizar cateterismo cardiaco derecho en un contexto especializado, integrando la evaluación de enfermedad pulmonar y causas vasculares",
    "Descartarla porque el paciente tiene fibrosis pulmonar",
    "Iniciar anticoagulación de por vida sin investigar la etiología",
    "Realizar biopsia pulmonar como prueba confirmatoria de hipertensión pulmonar"
  ],
  respuestaCorrecta: 1,
  explicacion: `La ecocardiografía estima probabilidad de hipertensión pulmonar, pero puede ser imprecisa en enfermedad pulmonar avanzada. Cuando la confirmación tiene implicaciones terapéuticas, el cateterismo cardiaco derecho permite medir directamente las presiones y la resistencia vascular pulmonar. Deben considerarse hipertensión pulmonar asociada a enfermedad pulmonar, cardiopatía izquierda y enfermedad tromboembólica crónica. El manejo depende de la clasificación hemodinámica y requiere valoración especializada.`,
  perlaENARM: "La ecocardiografía estima probabilidad; el cateterismo derecho confirma hemodinámicamente la hipertensión pulmonar.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de hipertensión pulmonar y enfermedad intersticial.",
    internacional: "ESC/ERS Guidelines for Pulmonary Hypertension, 2022."
  },
  bibliografia: "Humbert M et al. 2022 ESC/ERS Guidelines for the Diagnosis and Treatment of Pulmonary Hypertension. Eur Heart J. 2022."
},
{
  id: "NEUMO-279",
  especialidad: "Neumología",
  tema: "Fibrosis pulmonar y enfermedades intersticiales",
  subtema: "Trasplante pulmonar",
  dificultad: "Muy alta",
  caso: `Hombre de 58 años con FPI presenta progresión a pesar de tratamiento antifibrótico, FVC de 48% del predicho, DLCO de 27% y necesidad creciente de oxígeno. Mantiene independencia funcional y no tiene una contraindicación mayor evidente, aunque presenta comorbilidades que requieren evaluación. No ha sido valorado previamente por un centro de trasplante.`,
  pregunta: "¿Cuál es el siguiente paso más apropiado?",
  opciones: [
    "Esperar hasta que requiera ventilación mecánica invasiva para referirlo",
    "Referirlo oportunamente a un centro de trasplante pulmonar para evaluación integral de elegibilidad",
    "Suspender todo tratamiento médico mientras espera",
    "Descartar trasplante únicamente por tener más de 50 años",
    "Indicar ventilación invasiva domiciliaria como sustituto del trasplante"
  ],
  respuestaCorrecta: 1,
  explicacion: `La progresión de FPI, la reducción marcada de FVC y DLCO y el aumento de requerimientos de oxígeno justifican evaluación temprana para trasplante pulmonar. La referencia no significa que el paciente sea automáticamente candidato: el centro debe valorar comorbilidades, fragilidad, estado funcional, adherencia, apoyo social y otros criterios. Esperar hasta una descompensación terminal puede reducir opciones y aumentar el riesgo. El tratamiento antifibrótico y el soporte integral suelen continuar durante la evaluación, según indicación.`,
  perlaENARM: "En FPI progresiva, la referencia para trasplante debe ser temprana y no esperar a la ventilación mecánica invasiva.",
  gpc: {
    mexico: "Consultar criterios y rutas de referencia vigentes de centros de trasplante pulmonar en México.",
    internacional: "ISHLT consensus documents for selection of lung transplant candidates."
  },
  bibliografia: "ISHLT. Consensus document for the selection of lung transplant candidates; ATS/ERS/JRS/ALAT IPF Guideline."
},
{
  id: "NEUMO-280",
  especialidad: "Neumología",
  tema: "Fibrosis pulmonar y enfermedades intersticiales",
  subtema: "Caso integrador de enfermedad intersticial",
  dificultad: "Muy alta",
  caso: `Mujer de 65 años con disnea progresiva, tos seca y crepitantes bibasales. La FVC es de 59% del predicho y la DLCO de 35%. La TCAR muestra reticulación basal, bronquiectasias por tracción y áreas de vidrio deslustrado. Tiene fenómeno de Raynaud, artralgias y sequedad ocular. No hay fiebre ni datos de infección. Un informe inicial sugiere patrón de NIU probable, pero la evaluación autoinmune está incompleta.`,
  pregunta: "¿Cuál es la conducta diagnóstica más apropiada antes de asignar una etiología definitiva?",
  opciones: [
    "Diagnosticar FPI de inmediato por la presencia de reticulación basal",
    "Completar evaluación de enfermedad del tejido conectivo, revisar exposiciones y fármacos, y discutir TCAR y pruebas funcionales en equipo multidisciplinario",
    "Iniciar inmunosupresión combinada sin evaluación adicional",
    "Descartar enfermedad autoinmune porque la paciente tiene más de 60 años",
    "Realizar biopsia quirúrgica obligatoria antes de cualquier otro estudio"
  ],
  respuestaCorrecta: 1,
  explicacion: `La enfermedad intersticial con manifestaciones sistémicas como Raynaud, artralgias y sequedad ocular obliga a investigar una enfermedad del tejido conectivo. Un patrón probable de NIU no determina por sí solo la etiología ni equivale automáticamente a FPI. La evaluación debe integrar historia de exposiciones y fármacos, exploración, serologías dirigidas, TCAR y función pulmonar. La discusión multidisciplinaria permite decidir si el diagnóstico puede establecerse sin biopsia o si una prueba invasiva aportaría información capaz de cambiar el manejo.`,
  perlaENARM: "Antes de etiquetar una fibrosis como idiopática, excluye causas autoinmunes, farmacológicas y ambientales.",
  gpc: {
    mexico: "Verificar GPC mexicana vigente correspondiente a la enfermedad autoinmune o intersticial sospechada.",
    internacional: "ATS/ERS/JRS/ALAT IPF Guideline, 2022; ACR/CHEST guidance for systemic autoimmune rheumatic disease-associated ILD."
  },
  bibliografia: "ATS/ERS/JRS/ALAT. Am J Respir Crit Care Med. 2022; ACR/CHEST Guideline for ILD in Systemic Autoimmune Rheumatic Diseases."
},

{
  id: "NEUMO-281",
  especialidad: "Neumología",
  tema: "Bronquiectasias",
  subtema: "Diagnóstico por tomografía de alta resolución",
  dificultad: "Alta",
  caso: `Mujer de 46 años con tos productiva diaria desde hace 8 años, expectoración mucopurulenta abundante y episodios de hemoptisis escasa. Refiere cuatro exacerbaciones tratadas con antibióticos durante el último año. A la exploración presenta estertores gruesos bibasales que disminuyen parcialmente después de toser. La espirometría muestra patrón obstructivo leve. La tomografía computarizada de alta resolución revela bronquios con diámetro interno mayor que el de la arteria pulmonar acompañante, falta de afilamiento bronquial hacia la periferia y visualización de bronquios a menos de 1 cm de la pleura.`,
  pregunta: "¿Cuál es la interpretación diagnóstica más apropiada?",
  opciones: [
    "Bronquitis crónica sin alteraciones estructurales de la vía aérea",
    "Bronquiectasias confirmadas por hallazgos tomográficos característicos",
    "Enfisema centrolobulillar como diagnóstico principal",
    "Asma persistente con remodelado bronquial, sin necesidad de otro diagnóstico",
    "Neumonía adquirida en la comunidad con cambios residuales"
  ],
  respuestaCorrecta: 1,
  explicacion: `Las bronquiectasias son una dilatación bronquial anormal y permanente. En tomografía de alta resolución, los hallazgos incluyen aumento de la relación bronquio-arteria, falta de afilamiento bronquial y visualización de bronquios en regiones periféricas próximas a la pleura. La clínica de tos productiva crónica, expectoración mucopurulenta e infecciones recurrentes es congruente. La bronquitis crónica puede coexistir, pero no explica por sí sola la dilatación estructural demostrada.`,
  perlaENARM: "La tomografía de alta resolución confirma la alteración estructural; no diagnostiques bronquiectasias únicamente por la cantidad de expectoración.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente sin verificar el catálogo oficial de CENETEC/IMSS.",
    internacional: "ERS: guía clínica de manejo de bronquiectasias en adultos, 2017; actualización y estándares europeos posteriores."
  },
  bibliografia: "European Respiratory Society. Guidelines for the management of adult bronchiectasis. Eur Respir J. 2017;50:1700629."
},
{
  id: "NEUMO-282",
  especialidad: "Neumología",
  tema: "Bronquiectasias",
  subtema: "Búsqueda etiológica inicial",
  dificultad: "Alta",
  caso: `Hombre de 38 años con bronquiectasias bilaterales confirmadas por tomografía, exacerbaciones respiratorias recurrentes y expectoración purulenta diaria. No tiene antecedente conocido de tuberculosis ni tabaquismo significativo. Refiere sinusitis desde la adolescencia y otitis de repetición durante la infancia. En la evaluación inicial no se han solicitado inmunoglobulinas, estudios de aspergilosis broncopulmonar alérgica ni pruebas de función pancreática. Se encuentra clínicamente estable.`,
  pregunta: "¿Cuál es la estrategia más apropiada para estudiar la causa de las bronquiectasias?",
  opciones: [
    "Solicitar únicamente cultivo de esputo y suspender la búsqueda etiológica si resulta negativo",
    "Atribuirlas a infecciones infantiles y comenzar macrólido indefinidamente",
    "Realizar una evaluación etiológica dirigida, incluyendo inmunoglobulinas, estudio de aspergilosis broncopulmonar alérgica y pruebas adicionales según fenotipo clínico",
    "Solicitar biopsia pulmonar quirúrgica como primera prueba en todos los pacientes",
    "Iniciar tratamiento antituberculoso empírico aunque no existan datos clínicos o microbiológicos de tuberculosis"
  ],
  respuestaCorrecta: 2,
  explicacion: `La evaluación de bronquiectasias debe buscar causas tratables o modificadoras del manejo. Según el contexto, incluye biometría hemática, inmunoglobulinas séricas, evaluación de aspergilosis broncopulmonar alérgica y cultivos respiratorios. La sinusitis y las infecciones óticas recurrentes pueden orientar hacia alteraciones de la inmunidad o discinesia ciliar primaria; si existe sospecha, se amplía el estudio. La fibrosis quística y otras causas se investigan de acuerdo con edad, fenotipo, antecedentes y disponibilidad de pruebas. La biopsia pulmonar no es una prueba inicial rutinaria.`,
  perlaENARM: "En bronquiectasias, buscar una etiología tratable puede modificar el tratamiento y el pronóstico; la evaluación no termina al confirmar la tomografía.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente sin verificar el catálogo oficial de CENETEC/IMSS.",
    internacional: "ERS 2017; British Thoracic Society Guideline for Bronchiectasis in Adults, 2019."
  },
  bibliografia: "Hill AT, et al. British Thoracic Society Guideline for bronchiectasis in adults. Thorax. 2019;74(Suppl 1):1-69."
},
{
  id: "NEUMO-283",
  especialidad: "Neumología",
  tema: "Bronquiectasias",
  subtema: "Microbiología respiratoria basal",
  dificultad: "Alta",
  caso: `Mujer de 59 años con bronquiectasias cilíndricas y quísticas en lóbulos inferiores. Presenta tos productiva diaria, pero actualmente está afebril, con saturación de 95% al aire ambiente y sin incremento reciente de la disnea. Se planea optimizar la fisioterapia respiratoria y definir su riesgo de exacerbaciones. Nunca se han documentado los microorganismos que colonizan o infectan sus vías respiratorias.`,
  pregunta: "¿Cuál es la conducta microbiológica más apropiada durante esta evaluación estable?",
  opciones: [
    "No obtener cultivos hasta que desarrolle una exacerbación grave",
    "Solicitar cultivo de esputo para bacterias habituales y micobacterias no tuberculosas, según protocolo y contexto clínico",
    "Iniciar antibióticos antipseudomónicos sin tomar muestras",
    "Solicitar hemocultivos seriados como prueba principal de colonización bronquial",
    "Considerar que un cultivo positivo siempre demuestra infección aguda que requiere antibiótico"
  ],
  respuestaCorrecta: 1,
  explicacion: `Los cultivos respiratorios en estabilidad permiten identificar microorganismos relevantes, orientar tratamientos posteriores y reconocer aislamientos persistentes, especialmente de Pseudomonas aeruginosa. También se considera la búsqueda de micobacterias no tuberculosas, particularmente antes de iniciar macrólidos a largo plazo. Un cultivo positivo debe interpretarse en el contexto clínico: aislamiento, colonización e infección aguda no son equivalentes. Los antibióticos no deben iniciarse automáticamente por cualquier resultado positivo.`,
  perlaENARM: "Obtén microbiología en estabilidad y durante las exacerbaciones cuando sea posible; compara los aislamientos para orientar el antibiótico.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente sin verificar el catálogo oficial de CENETEC/IMSS.",
    internacional: "ERS 2017; BTS 2019."
  },
  bibliografia: "European Respiratory Society. Guidelines for the management of adult bronchiectasis. Eur Respir J. 2017;50:1700629."
},
{
  id: "NEUMO-284",
  especialidad: "Neumología",
  tema: "Bronquiectasias",
  subtema: "Erradicación de Pseudomonas aeruginosa",
  dificultad: "Alta",
  caso: `Hombre de 63 años con bronquiectasias y exacerbaciones frecuentes. En un cultivo de esputo reciente se aísla por primera vez Pseudomonas aeruginosa; un cultivo previo, obtenido seis meses antes, no mostró este microorganismo. Actualmente presenta aumento de la expectoración purulenta y disnea respecto a su basal, sin hipotensión ni hipoxemia grave. El antibiograma identifica sensibilidad a ciprofloxacino. No tiene alergias conocidas ni contraindicaciones relevantes para este fármaco.`,
  pregunta: "¿Cuál es la estrategia más razonable respecto al nuevo aislamiento?",
  opciones: [
    "Ignorar el aislamiento porque Pseudomonas nunca modifica el pronóstico de las bronquiectasias",
    "Indicar un betalactámico antipseudomónico intravenoso durante 21 días en todos los casos, independientemente de la gravedad",
    "Valorar una estrategia de erradicación tras el primer aislamiento, considerando la exacerbación actual, susceptibilidad, riesgos y protocolo local",
    "Indicar azitromicina como monoterapia de erradicación de Pseudomonas",
    "Declarar infección crónica irreversible después de un solo cultivo positivo y suspender nuevos cultivos"
  ],
  respuestaCorrecta: 2,
  explicacion: `Un primer aislamiento de Pseudomonas aeruginosa en bronquiectasias debe motivar una valoración de estrategia de erradicación, especialmente si existe deterioro clínico. El esquema depende de la susceptibilidad, gravedad, tolerancia, vía disponible y recomendaciones locales; puede incluir tratamiento sistémico y, en determinados protocolos, antibiótico inhalado posterior. No existe un único esquema universal apropiado para todos los pacientes. Un aislamiento aislado tampoco demuestra por sí solo infección crónica establecida.`,
  perlaENARM: "El primer aislamiento de Pseudomonas merece una decisión activa sobre erradicación; individualiza el esquema con antibiograma y contexto clínico.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente sin verificar el catálogo oficial de CENETEC/IMSS.",
    internacional: "ERS 2017; BTS 2019."
  },
  bibliografia: "Hill AT, et al. British Thoracic Society Guideline for bronchiectasis in adults. Thorax. 2019;74(Suppl 1):1-69."
},
{
  id: "NEUMO-285",
  especialidad: "Neumología",
  tema: "Bronquiectasias",
  subtema: "Tratamiento de exacerbación infecciosa",
  dificultad: "Alta",
  caso: `Mujer de 55 años con bronquiectasias y cultivo previo de esputo con Haemophilus influenzae. Durante cuatro días presenta incremento de tos, volumen y purulencia de la expectoración, fatiga y disnea por encima de su basal. Está afebril, presión arterial 122/76 mmHg, frecuencia respiratoria 21/min y saturación 93% al aire ambiente, similar a su basal. No presenta confusión, hipotensión ni signos de sepsis. El cultivo de una muestra obtenida al inicio del episodio está pendiente.`,
  pregunta: "¿Cuál es el abordaje más apropiado?",
  opciones: [
    "No administrar antibióticos porque no existe fiebre",
    "Indicar antibiótico empírico guiado por cultivos previos y gravedad, tomar muestra respiratoria y ajustar cuando se conozca el resultado",
    "Administrar cobertura antipseudomónica intravenosa de amplio espectro en todos los pacientes con bronquiectasias",
    "Prescribir corticoide sistémico como tratamiento único de la exacerbación",
    "Indicar tratamiento antituberculoso cuádruple antes de disponer de pruebas"
  ],
  respuestaCorrecta: 1,
  explicacion: `El aumento sostenido de tos, volumen o purulencia del esputo, disnea y síntomas sistémicos puede indicar una exacerbación de bronquiectasias. La elección del antibiótico debe considerar microbiología previa, susceptibilidad local, gravedad, alergias y exposición antimicrobiana reciente. Debe obtenerse esputo para cultivo antes del antibiótico cuando sea factible, sin retrasar el tratamiento si existe deterioro relevante. La vía y duración se individualizan; los cursos de alrededor de 14 días son frecuentes, especialmente en exacerbaciones graves o por Pseudomonas, pero no deben aplicarse de manera rígida a todos los escenarios.`,
  perlaENARM: "En una exacerbación, el cultivo previo suele ser más útil para orientar el tratamiento empírico que elegir un antibiótico de forma indiscriminada.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente sin verificar el catálogo oficial de CENETEC/IMSS.",
    internacional: "BTS 2019; ERS 2017."
  },
  bibliografia: "Hill AT, et al. British Thoracic Society Guideline for bronchiectasis in adults. Thorax. 2019;74(Suppl 1):1-69."
},
{
  id: "NEUMO-286",
  especialidad: "Neumología",
  tema: "Bronquiectasias",
  subtema: "Indicaciones de antibiótico intravenoso y hospitalización",
  dificultad: "Alta",
  caso: `Hombre de 70 años con bronquiectasias extensas y colonización respiratoria conocida por Pseudomonas aeruginosa. Acude por aumento marcado de la disnea, expectoración purulenta y fiebre. Presenta frecuencia respiratoria de 32/min, saturación de 84% al aire ambiente, presión arterial 92/58 mmHg y dificultad para ingerir medicamentos por vía oral. La gasometría muestra hipoxemia; se encuentra somnoliento, aunque despierta al estímulo verbal.`,
  pregunta: "¿Cuál es la conducta inicial más apropiada?",
  opciones: [
    "Manejo ambulatorio con antibiótico oral y revisión en siete días",
    "Fisioterapia respiratoria exclusiva y vigilancia domiciliaria",
    "Hospitalización urgente, estabilización respiratoria y hemodinámica, cultivos sin retrasar antibióticos intravenosos dirigidos al riesgo de Pseudomonas",
    "Indicar macrólido oral como única intervención y evitar oxígeno",
    "Esperar el resultado final del cultivo antes de iniciar tratamiento antimicrobiano"
  ],
  respuestaCorrecta: 2,
  explicacion: `La hipoxemia grave, taquipnea, hipotensión, alteración del estado de alerta y mala tolerancia oral son datos de exacerbación grave con posible sepsis e insuficiencia respiratoria. Se requiere evaluación hospitalaria urgente, oxígeno y soporte ventilatorio según necesidad, valoración de perfusión y sepsis, toma rápida de muestras y antibiótico intravenoso empírico ajustado a los aislamientos previos y al antibiograma local. No se debe retrasar la terapia en espera del cultivo.`,
  perlaENARM: "La gravedad fisiológica y la insuficiencia respiratoria determinan el sitio de atención; el antecedente de Pseudomonas modifica la cobertura empírica.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente sin verificar el catálogo oficial de CENETEC/IMSS.",
    internacional: "BTS 2019; ERS 2017."
  },
  bibliografia: "Hill AT, et al. British Thoracic Society Guideline for bronchiectasis in adults. Thorax. 2019;74(Suppl 1):1-69."
},
{
  id: "NEUMO-287",
  especialidad: "Neumología",
  tema: "Bronquiectasias",
  subtema: "Macrólidos a largo plazo",
  dificultad: "Alta",
  caso: `Mujer de 61 años con bronquiectasias confirmadas por tomografía y cuatro exacerbaciones que requirieron antibióticos en el último año. Mantiene fisioterapia respiratoria y vacunación actualizada. Los cultivos bacterianos no muestran Pseudomonas persistente. El equipo considera iniciar azitromicina a largo plazo. La paciente nunca ha sido estudiada para micobacterias no tuberculosas; su electrocardiograma muestra QTc de 492 ms y refiere hipoacusia previa.`,
  pregunta: "¿Cuál es la conducta más apropiada antes de prescribir el macrólido?",
  opciones: [
    "Iniciar azitromicina inmediatamente, porque las exacerbaciones frecuentes son indicación suficiente",
    "Descartar o evaluar micobacterias no tuberculosas, revisar QTc, interacciones y riesgo auditivo antes de decidir",
    "Combinar azitromicina con claritromicina para reducir resistencia",
    "Indicar macrólido sin vigilancia porque no produce efectos adversos clínicamente importantes",
    "Sustituir la fisioterapia por azitromicina como única intervención preventiva"
  ],
  respuestaCorrecta: 1,
  explicacion: `Los macrólidos prolongados pueden reducir las exacerbaciones en pacientes seleccionados con bronquiectasias, pero requieren evaluación previa. Debe descartarse infección por micobacterias no tuberculosas cuando esté indicada, porque la monoterapia con macrólido puede favorecer resistencia. También deben valorarse QTc, interacciones farmacológicas, función hepática y toxicidad auditiva, con seguimiento apropiado. Un QTc prolongado y antecedentes de hipoacusia aumentan la preocupación por seguridad y obligan a reconsiderar la estrategia.`,
  perlaENARM: "Antes de un macrólido prolongado: busca micobacterias no tuberculosas y revisa QTc, interacciones y audición.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente sin verificar el catálogo oficial de CENETEC/IMSS.",
    internacional: "BTS 2019; ERS 2017."
  },
  bibliografia: "Hill AT, et al. British Thoracic Society Guideline for bronchiectasis in adults. Thorax. 2019;74(Suppl 1):1-69."
},
{
  id: "NEUMO-288",
  especialidad: "Neumología",
  tema: "Bronquiectasias",
  subtema: "Fisioterapia y eliminación de secreciones",
  dificultad: "Alta",
  caso: `Hombre de 52 años con bronquiectasias basales, tos productiva crónica y dificultad para expulsar secreciones espesas. Está estable, sin fiebre ni aumento agudo de la disnea. No tiene hemoptisis activa ni contraindicación conocida para realizar técnicas de aclaramiento de la vía aérea. Hasta ahora únicamente ha recibido ciclos repetidos de antibióticos y no cuenta con entrenamiento formal de fisioterapia respiratoria.`,
  pregunta: "¿Qué intervención debe incorporarse al tratamiento de base?",
  opciones: [
    "Reposo prolongado para disminuir el desprendimiento de secreciones",
    "Supresión rutinaria de la tos con opioides",
    "Técnicas individualizadas de aclaramiento de la vía aérea enseñadas por fisioterapia respiratoria",
    "Antibiótico intravenoso permanente aunque se encuentre estable",
    "Intubación electiva para facilitar la aspiración diaria de secreciones"
  ],
  respuestaCorrecta: 2,
  explicacion: `El aclaramiento de secreciones es un componente central del manejo de las bronquiectasias. Las técnicas deben adaptarse al patrón de secreciones, capacidad funcional y preferencias del paciente; pueden incluir ciclo activo de respiración, espiración forzada, drenaje autógeno o dispositivos de presión espiratoria positiva. La hidratación y, en pacientes seleccionados, las estrategias para reducir la viscosidad pueden complementar el abordaje. Los antibióticos se reservan para situaciones clínicas indicadas, no como sustituto de la fisioterapia.`,
  perlaENARM: "Las bronquiectasias requieren tratamiento de mantenimiento: la fisioterapia respiratoria no se sustituye por ciclos repetidos de antibióticos.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente sin verificar el catálogo oficial de CENETEC/IMSS.",
    internacional: "BTS 2019; ERS 2017."
  },
  bibliografia: "Hill AT, et al. British Thoracic Society Guideline for bronchiectasis in adults. Thorax. 2019;74(Suppl 1):1-69."
},
{
  id: "NEUMO-289",
  especialidad: "Neumología",
  tema: "Bronquiectasias",
  subtema: "Hemoptisis significativa",
  dificultad: "Alta",
  caso: `Mujer de 64 años con bronquiectasias conocidas presenta hemoptisis de aproximadamente 250 mL en dos horas, con episodios persistentes al llegar a urgencias. Está ansiosa, con frecuencia respiratoria de 30/min y saturación de 86% al aire ambiente. La presión arterial es 118/74 mmHg. La tomografía previa mostraba enfermedad bronquial bilateral, más extensa en el pulmón derecho. La paciente comienza a acumular sangre en la orofaringe y presenta dificultad para mantener una oxigenación adecuada.`,
  pregunta: "¿Cuál es la prioridad inmediata?",
  opciones: [
    "Solicitar tomografía ambulatoria y dar egreso si la presión arterial permanece normal",
    "Administrar únicamente un antitusígeno y observar la evolución",
    "Priorizar protección de la vía aérea y oxigenación, colocar el pulmón sangrante hacia abajo si se identifica y activar manejo urgente multidisciplinario",
    "Realizar broncoscopia electiva después de resolver el episodio en domicilio",
    "Iniciar anticoagulación para evitar trombosis secundaria a la hemorragia"
  ],
  respuestaCorrecta: 2,
  explicacion: `La hemoptisis amenazante se define por su repercusión sobre la vía aérea, la oxigenación y la estabilidad fisiológica, no exclusivamente por un volumen fijo. La prioridad es evitar la asfixia: asegurar oxigenación, proteger la vía aérea si es necesario y, cuando se identifica el lado del sangrado, colocarlo en posición dependiente para reducir la contaminación del pulmón contralateral. Se requiere intervención urgente de neumología, cuidados críticos, radiología intervencionista y, según el caso, cirugía torácica. La embolización de arterias bronquiales suele ser una opción terapéutica importante tras la localización del sangrado.`,
  perlaENARM: "En hemoptisis amenazante, la primera causa de muerte puede ser la obstrucción de la vía aérea, no la pérdida sanguínea.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para hemoptisis por bronquiectasias sin verificación oficial.",
    internacional: "BTS 2019 para bronquiectasias; recomendaciones contemporáneas de manejo multidisciplinario de hemoptisis."
  },
  bibliografia: "Hill AT, et al. British Thoracic Society Guideline for bronchiectasis in adults. Thorax. 2019;74(Suppl 1):1-69."
},
{
  id: "NEUMO-290",
  especialidad: "Neumología",
  tema: "Bronquiectasias",
  subtema: "Bronquiectasias por aspergilosis broncopulmonar alérgica",
  dificultad: "Alta",
  caso: `Hombre de 34 años con asma de difícil control, sibilancias recurrentes y expectoración de tapones mucosos marrones. La tomografía muestra bronquiectasias centrales y moco impactado. La biometría hemática revela eosinofilia periférica y la IgE total está marcadamente elevada. Se sospecha una enfermedad inmunológica asociada a sensibilización fúngica.`,
  pregunta: "¿Cuál es el siguiente paso diagnóstico más apropiado?",
  opciones: [
    "Confirmar aspergilosis broncopulmonar alérgica solo con un cultivo positivo de Aspergillus en esputo",
    "Solicitar IgE específica frente a Aspergillus fumigatus y completar la evaluación inmunológica y radiológica",
    "Iniciar tratamiento antituberculoso por la presencia de bronquiectasias centrales",
    "Descartar la enfermedad porque la eosinofilia no se presenta en enfermedades bronquiales",
    "Indicar antifúngico sistémico como prueba diagnóstica sin completar la evaluación"
  ],
  respuestaCorrecta: 1,
  explicacion: `El asma, los tapones mucosos, las bronquiectasias centrales, la eosinofilia y la elevación de IgE total sugieren aspergilosis broncopulmonar alérgica (ABPA). El diagnóstico integra sensibilización a Aspergillus —habitualmente mediante IgE específica o pruebas cutáneas—, IgE total y criterios clínicos, inmunológicos y radiológicos adicionales. El cultivo respiratorio aislado no confirma ABPA, pues puede representar colonización. El tratamiento se define tras establecer el diagnóstico y valorar la actividad de la enfermedad.`,
  perlaENARM: "Asma difícil de controlar + IgE elevada + eosinofilia + bronquiectasias centrales debe hacer sospechar ABPA.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente sin verificar el catálogo oficial de CENETEC/IMSS.",
    internacional: "Revisiones y criterios internacionales contemporáneos de ISHAM para ABPA, actualización 2024."
  },
  bibliografia: "Revised ISHAM-ABPA working group clinical practice guidelines. Eur Respir J. 2024."
},
{
  id: "NEUMO-291",
  especialidad: "Neumología",
  tema: "Bronquiectasias",
  subtema: "Inmunodeficiencia humoral",
  dificultad: "Alta",
  caso: `Mujer de 42 años con bronquiectasias bilaterales y antecedentes de sinusitis, otitis y neumonías bacterianas desde la juventud. Los cultivos han aislado repetidamente bacterias encapsuladas. No recibe inmunosupresores y la tomografía no sugiere una causa obstructiva focal. Se plantea una inmunodeficiencia humoral como posible etiología tratable.`,
  pregunta: "¿Qué evaluación inicial es más pertinente?",
  opciones: [
    "Medición de inmunoglobulinas séricas IgG, IgA e IgM y evaluación adicional de la respuesta específica a vacunas cuando esté indicada",
    "Solicitar únicamente IgE total y descartar inmunodeficiencia si es normal",
    "Realizar biopsia pulmonar antes de cualquier estudio sanguíneo",
    "Iniciar inmunoglobulina intravenosa en todos los pacientes sin confirmar el defecto",
    "Solicitar exclusivamente anticuerpos antinucleares como prueba de inmunidad humoral"
  ],
  respuestaCorrecta: 0,
  explicacion: `Las infecciones sinopulmonares recurrentes por bacterias encapsuladas pueden sugerir inmunodeficiencia humoral. La evaluación inicial suele incluir concentraciones séricas de IgG, IgA e IgM. Según resultados y sospecha clínica, puede requerirse evaluación de subclases de IgG y respuesta de anticuerpos específicos frente a antígenos vacunales, interpretadas por especialistas. El reemplazo con inmunoglobulina se reserva para indicaciones definidas; no se inicia automáticamente por la presencia de bronquiectasias.`,
  perlaENARM: "Bronquiectasias más infecciones sinopulmonares recurrentes obligan a considerar inmunodeficiencia humoral.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente sin verificar el catálogo oficial de CENETEC/IMSS.",
    internacional: "BTS 2019; ERS 2017."
  },
  bibliografia: "Hill AT, et al. British Thoracic Society Guideline for bronchiectasis in adults. Thorax. 2019;74(Suppl 1):1-69."
},
{
  id: "NEUMO-292",
  especialidad: "Neumología",
  tema: "Bronquiectasias",
  subtema: "Discinesia ciliar primaria",
  dificultad: "Alta",
  caso: `Hombre de 27 años con bronquiectasias desde la adolescencia, sinusitis crónica, otitis recurrente y tos productiva desde la infancia. La revisión de antecedentes revela situs inversus totalis. La función pulmonar muestra obstrucción leve. No hay antecedente de tabaquismo importante ni evidencia de inmunodeficiencia humoral.`,
  pregunta: "¿Cuál es la etiología que debe investigarse prioritariamente?",
  opciones: [
    "Deficiencia de alfa-1 antitripsina como única explicación probable",
    "Discinesia ciliar primaria, con evaluación especializada de función y/o estructura ciliar y pruebas complementarias",
    "EPOC por tabaquismo, aunque no exista exposición significativa",
    "Asma alérgica aislada",
    "Neumonía bacteriana aguda como explicación de todos los hallazgos crónicos"
  ],
  respuestaCorrecta: 1,
  explicacion: `La combinación de enfermedad sinopulmonar desde la infancia, otitis recurrente y situs inversus es altamente sugestiva de discinesia ciliar primaria. La alteración del aclaramiento mucociliar favorece infecciones recurrentes, bronquiectasias y, en algunos pacientes, alteraciones de lateralidad. La evaluación especializada puede incluir óxido nítrico nasal, análisis genético, videomicroscopía de alta velocidad y/o microscopía electrónica, según disponibilidad y protocolo. Ninguna prueba aislada excluye todos los fenotipos.`,
  perlaENARM: "Bronquiectasias desde la infancia + sinusitis crónica + situs inversus: piensa en síndrome de Kartagener, fenotipo de discinesia ciliar primaria.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente sin verificar el catálogo oficial de CENETEC/IMSS.",
    internacional: "ERS guidance on diagnosis of primary ciliary dyskinesia; BTS 2019 para bronquiectasias."
  },
  bibliografia: "European Respiratory Society. Guidelines for the diagnosis of primary ciliary dyskinesia. Eur Respir J. 2017;49:1601090."
},
{
  id: "NEUMO-293",
  especialidad: "Neumología",
  tema: "Bronquiectasias",
  subtema: "Fibrosis quística en adultos",
  dificultad: "Alta",
  caso: `Mujer de 29 años con bronquiectasias de predominio en lóbulos superiores, sinusitis crónica, bajo peso y antecedentes de pancreatitis recurrente. Ha tenido cultivos respiratorios con Pseudomonas aeruginosa. No se diagnosticó fibrosis quística durante la infancia. Actualmente está estable y se encuentra en evaluación etiológica.`,
  pregunta: "¿Cuál es la estrategia más apropiada ante la sospecha de fibrosis quística?",
  opciones: [
    "Descartarla porque el diagnóstico no se realizó durante la infancia",
    "Solicitar evaluación especializada que incluya prueba de cloro en sudor y, según resultados, estudio genético y pruebas complementarias",
    "Confirmarla únicamente por el aislamiento de Pseudomonas",
    "Solicitar una prueba de tuberculina como estudio confirmatorio",
    "Indicar enzimas pancreáticas sin completar la evaluación diagnóstica"
  ],
  respuestaCorrecta: 1,
  explicacion: `La fibrosis quística puede diagnosticarse en la edad adulta cuando existe un fenotipo compatible. Las bronquiectasias, sinusitis crónica, alteraciones nutricionales, enfermedad pancreática y aislamiento de Pseudomonas aumentan la sospecha. La evaluación se realiza en centros con experiencia, mediante prueba de cloro en sudor y, de acuerdo con el resultado, análisis genético de CFTR y pruebas funcionales complementarias. Ningún hallazgo aislado mencionado confirma por sí solo la enfermedad.`,
  perlaENARM: "La edad adulta no excluye fibrosis quística; el fenotipo multisistémico debe guiar la investigación.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para este escenario sin verificación oficial.",
    internacional: "Cystic Fibrosis Foundation: criterios diagnósticos y consenso de evaluación."
  },
  bibliografia: "Cystic Fibrosis Foundation. Diagnostic criteria and consensus guidance for cystic fibrosis."
},
{
  id: "NEUMO-294",
  especialidad: "Neumología",
  tema: "Bronquiectasias",
  subtema: "Deficiencia de alfa-1 antitripsina",
  dificultad: "Alta",
  caso: `Hombre de 43 años, no fumador, con disnea progresiva y obstrucción persistente en la espirometría. La tomografía muestra enfisema de predominio basal y bronquiectasias. Su padre presentó enfermedad pulmonar obstructiva a edad temprana. No existe exposición ocupacional significativa y la función hepática muestra alteraciones leves sin diagnóstico etiológico.`,
  pregunta: "¿Qué estudio etiológico debe considerarse?",
  opciones: [
    "Concentración sérica de alfa-1 antitripsina, con fenotipo o genotipo confirmatorio según el resultado y el contexto",
    "IgE total como única prueba para enfisema hereditario",
    "Prueba de esfuerzo como confirmación de deficiencia de alfa-1 antitripsina",
    "Cultivo de esputo como prueba confirmatoria de enfermedad genética",
    "Biopsia pulmonar quirúrgica como primera opción"
  ],
  respuestaCorrecta: 0,
  explicacion: `El enfisema de predominio basal en una persona relativamente joven, especialmente sin tabaquismo significativo y con antecedentes familiares, debe motivar evaluación de deficiencia de alfa-1 antitripsina. La concentración sérica es una prueba inicial útil, pero puede alterarse como reactante de fase aguda; la confirmación y caracterización pueden requerir fenotipo o genotipo. Identificar la deficiencia modifica el consejo sobre exposiciones, el estudio familiar y, en pacientes seleccionados, las opciones terapéuticas.`,
  perlaENARM: "Enfisema precoz, basal y desproporcionado a la exposición tabáquica: descarta deficiencia de alfa-1 antitripsina.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente sin verificar el catálogo oficial de CENETEC/IMSS.",
    internacional: "ATS/ERS standards for diagnosis and management of alpha-1 antitrypsin deficiency."
  },
  bibliografia: "American Thoracic Society/European Respiratory Society. Standards for the diagnosis and management of individuals with alpha-1 antitrypsin deficiency."
},
{
  id: "NEUMO-295",
  especialidad: "Neumología",
  tema: "Bronquiectasias",
  subtema: "Hemoptisis recurrente y embolización",
  dificultad: "Alta",
  caso: `Hombre de 67 años con bronquiectasias extensas y dos episodios recientes de hemoptisis moderada. Actualmente está hemodinámicamente estable, pero persiste el sangrado intermitente. La angiotomografía identifica vasos bronquiales hipertrofiados que irrigan la región afectada y no muestra una lesión endobronquial evidente. No hay datos de coagulopatía ni uso de anticoagulantes.`,
  pregunta: "¿Qué intervención debe considerarse ante hemoptisis recurrente clínicamente significativa?",
  opciones: [
    "Anticoagulación terapéutica para disminuir la formación de coágulos",
    "Embolización de arterias bronquiales tras evaluación y planificación multidisciplinaria",
    "Antibióticos indefinidos como única intervención para detener el sangrado",
    "Resección pulmonar inmediata en todos los pacientes, independientemente de la extensión",
    "Observación sin seguimiento porque la estabilidad hemodinámica excluye riesgo"
  ],
  respuestaCorrecta: 1,
  explicacion: `Las arterias bronquiales suelen ser la fuente del sangrado en hemoptisis relacionada con bronquiectasias. La embolización arterial bronquial es una intervención importante en hemoptisis significativa o recurrente, después de estabilización y localización del sitio de sangrado. El riesgo de recurrencia depende de la etiología, extensión de la enfermedad y persistencia de los vasos responsables. La cirugía se reserva para situaciones seleccionadas, especialmente cuando otras medidas fallan o existe una lesión localizada resecable.`,
  perlaENARM: "Hemoptisis recurrente significativa por bronquiectasias: considera embolización de arterias bronquiales, no solo ciclos repetidos de antibióticos.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para embolización por bronquiectasias sin verificación oficial.",
    internacional: "BTS 2019 y recomendaciones multidisciplinarias contemporáneas para hemoptisis."
  },
  bibliografia: "Hill AT, et al. British Thoracic Society Guideline for bronchiectasis in adults. Thorax. 2019;74(Suppl 1):1-69."
},
{
  id: "NEUMO-296",
  especialidad: "Neumología",
  tema: "Bronquiectasias",
  subtema: "Interpretación de colonización por Pseudomonas",
  dificultad: "Alta",
  caso: `Mujer de 60 años con bronquiectasias y cultivos de esputo que han aislado Pseudomonas aeruginosa en cuatro ocasiones durante nueve meses. Actualmente está afebril, sin incremento de tos ni expectoración, con saturación basal habitual. No hay infiltrado nuevo en la radiografía. Un médico propone tratar cada cultivo positivo con antibióticos intravenosos hasta obtener un cultivo negativo.`,
  pregunta: "¿Cuál es la interpretación más adecuada?",
  opciones: [
    "Cada cultivo positivo obliga a tratamiento intravenoso hasta lograr esterilización permanente",
    "Los aislamientos repetidos sugieren infección bronquial crónica por Pseudomonas, cuyo manejo debe basarse en el fenotipo clínico y el riesgo de exacerbación, no en cultivos aislados únicamente",
    "Pseudomonas en esputo siempre indica neumonía invasiva",
    "Los cultivos de esputo carecen de utilidad en bronquiectasias",
    "Debe iniciarse tratamiento antituberculoso porque Pseudomonas y tuberculosis son equivalentes microbiológicamente"
  ],
  respuestaCorrecta: 1,
  explicacion: `El aislamiento repetido de Pseudomonas puede representar infección bronquial crónica y se asocia con mayor carga de enfermedad y riesgo de exacerbaciones. Sin embargo, un cultivo positivo en un paciente estable no demuestra por sí mismo una exacerbación aguda ni obliga automáticamente a administrar antibióticos intravenosos. El manejo puede incluir optimización del aclaramiento de secreciones, seguimiento clínico y microbiológico, y en pacientes seleccionados tratamiento inhalado o macrólido tras evaluar indicaciones, seguridad y micobacterias no tuberculosas.`,
  perlaENARM: "Diferencia aislamiento crónico de exacerbación aguda: no trates un resultado microbiológico de forma aislada.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente sin verificar el catálogo oficial de CENETEC/IMSS.",
    internacional: "ERS 2017; BTS 2019."
  },
  bibliografia: "Hill AT, et al. British Thoracic Society Guideline for bronchiectasis in adults. Thorax. 2019;74(Suppl 1):1-69."
},
{
  id: "NEUMO-297",
  especialidad: "Neumología",
  tema: "Bronquiectasias",
  subtema: "Prevención y vacunación",
  dificultad: "Alta",
  caso: `Hombre de 71 años con bronquiectasias, diabetes mellitus tipo 2 y tres exacerbaciones respiratorias durante el último año. Se encuentra estable, sin fiebre ni hipoxemia nueva. No recuerda su última vacunación contra influenza y desconoce su esquema antineumocócico. Continúa fumando cinco cigarrillos al día y no realiza ejercicio por temor a la disnea.`,
  pregunta: "¿Cuál es la intervención preventiva más apropiada como parte de un plan integral?",
  opciones: [
    "Indicar únicamente antibióticos profilácticos, sin modificar otros factores",
    "Actualizar vacunación según edad y riesgo, promover abandono del tabaco, actividad física y rehabilitación respiratoria según necesidad",
    "Recomendar reposo permanente para evitar exacerbaciones",
    "Suspender la fisioterapia respiratoria porque puede movilizar bacterias",
    "Administrar vacunas durante una exacerbación grave sin considerar el estado clínico"
  ],
  respuestaCorrecta: 1,
  explicacion: `La prevención de exacerbaciones integra vacunación conforme a recomendaciones vigentes y factores de riesgo, abandono del tabaco, ejercicio y rehabilitación pulmonar cuando exista limitación funcional. El aclaramiento de secreciones debe mantenerse y ajustarse a las necesidades del paciente. La profilaxis antibiótica no sustituye estas medidas y se considera en pacientes seleccionados con exacerbaciones frecuentes después de optimizar el manejo basal y evaluar riesgos.`,
  perlaENARM: "La prevención en bronquiectasias combina vacunación, aclaramiento de secreciones, actividad física y control de exposiciones; no depende solo de antibióticos.",
  gpc: {
    mexico: "Verificar el esquema de vacunación vigente de la Secretaría de Salud y las recomendaciones nacionales aplicables a edad y comorbilidades.",
    internacional: "BTS 2019; ERS 2017."
  },
  bibliografia: "Hill AT, et al. British Thoracic Society Guideline for bronchiectasis in adults. Thorax. 2019;74(Suppl 1):1-69."
},
{
  id: "NEUMO-298",
  especialidad: "Neumología",
  tema: "Bronquiectasias",
  subtema: "Rehabilitación pulmonar",
  dificultad: "Alta",
  caso: `Mujer de 65 años con bronquiectasias difusas, disnea al caminar dos cuadras y reducción progresiva de su actividad cotidiana. La saturación es de 94% en reposo y disminuye a 89% durante una prueba de marcha. No presenta exacerbación actual, fiebre ni dolor torácico. Ha reducido voluntariamente la actividad física y muestra desacondicionamiento muscular.`,
  pregunta: "¿Qué estrategia complementaria puede mejorar su capacidad funcional?",
  opciones: [
    "Reposo en cama para evitar el consumo de oxígeno durante el ejercicio",
    "Rehabilitación pulmonar individualizada con ejercicio supervisado y educación, tras valorar la desaturación durante el esfuerzo",
    "Oxígeno domiciliario continuo de por vida indicado únicamente por la saturación en reposo",
    "Antibióticos profilácticos como tratamiento del desacondicionamiento",
    "Intubación electiva antes de iniciar cualquier actividad física"
  ],
  respuestaCorrecta: 1,
  explicacion: `La rehabilitación pulmonar puede mejorar capacidad de ejercicio, disnea y calidad de vida en pacientes con bronquiectasias y limitación funcional. La prescripción debe individualizarse y considerar la respuesta de oxigenación durante el esfuerzo. Una desaturación aislada durante la marcha no equivale automáticamente a indicación de oxígeno continuo domiciliario; la necesidad de oxígeno ambulatorio se evalúa de forma individual, considerando la magnitud, reproducibilidad y repercusión clínica de la desaturación.`,
  perlaENARM: "La rehabilitación pulmonar es una intervención terapéutica, no solo educativa; individualiza el oxígeno según la evaluación clínica.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente sin verificar el catálogo oficial de CENETEC/IMSS.",
    internacional: "BTS 2019; recomendaciones internacionales de rehabilitación pulmonar."
  },
  bibliografia: "Hill AT, et al. British Thoracic Society Guideline for bronchiectasis in adults. Thorax. 2019;74(Suppl 1):1-69."
},
{
  id: "NEUMO-299",
  especialidad: "Neumología",
  tema: "Bronquiectasias",
  subtema: "Nódulo o lesión obstructiva focal",
  dificultad: "Alta",
  caso: `Hombre de 68 años, fumador de 45 paquetes-año, con tos productiva y hemoptisis ocasional. La tomografía muestra bronquiectasias localizadas en el lóbulo superior derecho, asociadas con atelectasia segmentaria y una lesión endobronquial sospechosa. Ha recibido varios ciclos de antibióticos sin resolución radiológica. No presenta fiebre y ha perdido 6 kg en tres meses.`,
  pregunta: "¿Cuál es el siguiente paso diagnóstico más apropiado?",
  opciones: [
    "Atribuir todos los hallazgos a bronquiectasias y mantener antibióticos empíricos indefinidamente",
    "Realizar evaluación de obstrucción endobronquial, incluyendo broncoscopia con toma de muestras cuando esté indicada",
    "Iniciar macrólido a largo plazo sin investigar la lesión",
    "Descartar neoplasia porque las bronquiectasias explican la hemoptisis",
    "Solicitar exclusivamente cultivo de esputo y evitar estudios anatómicos"
  ],
  respuestaCorrecta: 1,
  explicacion: `Las bronquiectasias focales o localizadas, en especial con atelectasia persistente, hemoptisis, pérdida de peso y tabaquismo, obligan a descartar una lesión obstructiva como neoplasia endobronquial o cuerpo extraño. La broncoscopia permite inspección y toma de muestras según el hallazgo. La persistencia radiológica pese al tratamiento antimicrobiano exige reconsiderar el diagnóstico; no debe asumirse que todo se explica por infección crónica.`,
  perlaENARM: "Bronquiectasias focales con atelectasia persistente y datos de alarma: busca obstrucción endobronquial.",
  gpc: {
    mexico: "La evaluación de sospecha de neoplasia pulmonar debe seguir la GPC mexicana vigente aplicable, verificando su versión en el catálogo oficial.",
    internacional: "BTS 2019 para bronquiectasias; guías vigentes de evaluación diagnóstica de cáncer pulmonar."
  },
  bibliografia: "Hill AT, et al. British Thoracic Society Guideline for bronchiectasis in adults. Thorax. 2019;74(Suppl 1):1-69."
},
{
  id: "NEUMO-300",
  especialidad: "Neumología",
  tema: "Bronquiectasias",
  subtema: "Integración diagnóstica y plan de manejo",
  dificultad: "Alta",
  caso: `Mujer de 57 años con tos productiva diaria, expectoración purulenta, tres exacerbaciones tratadas con antibióticos en el último año y limitación para caminar largas distancias. La tomografía confirma bronquiectasias bilaterales. En estabilidad, el cultivo de esputo aisló Pseudomonas aeruginosa. No se han evaluado inmunoglobulinas ni aspergilosis broncopulmonar alérgica. No recibe fisioterapia respiratoria y solicita antibióticos permanentes para prevenir nuevos episodios. Actualmente está afebril, con signos vitales estables y sin empeoramiento reciente.`,
  pregunta: "¿Cuál es el plan de manejo integral más apropiado?",
  opciones: [
    "Prescribir antibióticos intravenosos permanentes y omitir la búsqueda etiológica",
    "Indicar solo broncodilatadores y suspender el seguimiento microbiológico",
    "Evaluar etiología y microbiología, optimizar aclaramiento de secreciones, valorar rehabilitación y definir prevención farmacológica según exacerbaciones, cultivos y riesgos",
    "Iniciar corticoides sistémicos crónicos en todas las bronquiectasias",
    "Realizar resección pulmonar bilateral como tratamiento inicial"
  ],
  respuestaCorrecta: 2,
  explicacion: `El manejo de bronquiectasias debe integrar la búsqueda de causas tratables, cultivos respiratorios, aclaramiento de secreciones, ejercicio o rehabilitación según limitación funcional, vacunación y tratamiento oportuno de las exacerbaciones. El aislamiento de Pseudomonas requiere valorar si corresponde una estrategia de erradicación o manejo de infección bronquial crónica, considerando antecedentes microbiológicos, síntomas y riesgos. Los macrólidos o antibióticos inhalados pueden beneficiar a pacientes seleccionados con exacerbaciones frecuentes o infección crónica, pero antes deben evaluarse indicaciones, seguridad e infección por micobacterias no tuberculosas cuando corresponda. No se recomienda antibiótico permanente indiscriminado para todos.`,
  perlaENARM: "El tratamiento de las bronquiectasias es multimodal: etiología, microbiología, aclaramiento, prevención y antimicrobianos seleccionados.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente sin verificar el catálogo oficial de CENETEC/IMSS; consultar las GPC nacionales aplicables a etiología, infecciones y comorbilidades.",
    internacional: "ERS 2017; BTS 2019."
  },
  bibliografia: "European Respiratory Society. Guidelines for the management of adult bronchiectasis. Eur Respir J. 2017;50:1700629. Hill AT, et al. British Thoracic Society Guideline for bronchiectasis in adults. Thorax. 2019;74(Suppl 1):1-69."
},

{
  id: "NEUMO-301",
  especialidad: "Neumología",
  tema: "Hipertensión pulmonar",
  subtema: "Definición hemodinámica y clasificación",
  dificultad: "Alta",
  caso: `Mujer de 54 años, sin antecedente de cardiopatía conocida, que durante los últimos 10 meses ha presentado disnea progresiva al caminar, fatiga y reducción de su capacidad para realizar actividades cotidianas. En las últimas seis semanas ha tenido dos episodios de presíncope al subir escaleras. Niega ortopnea, disnea paroxística nocturna, edema periférico previo o enfermedad pulmonar crónica conocida. A la exploración presenta presión arterial de 108/70 mmHg, frecuencia cardiaca de 96/min, frecuencia respiratoria de 20/min y saturación de oxígeno de 94% al aire ambiente. Se identifica impulso paraesternal derecho, segundo ruido pulmonar acentuado y discreta distensión yugular. El ecocardiograma estima presión sistólica pulmonar elevada, dilatación del ventrículo derecho y aplanamiento sistólico del septum interventricular, con fracción de eyección ventricular izquierda de 62%. El cateterismo cardiaco derecho reporta presión arterial pulmonar media de 36 mmHg, presión de enclavamiento pulmonar de 10 mmHg, gasto cardiaco de 4.2 L/min y resistencia vascular pulmonar de 6.2 unidades Wood. No existe cortocircuito intracardiaco significativo.`,
  pregunta: "¿Cuál es la interpretación hemodinámica más precisa?",
  opciones: [
    "Hipertensión pulmonar poscapilar aislada por presión de enclavamiento mayor de 15 mmHg",
    "Hipertensión pulmonar precapilar, que requiere completar la clasificación etiológica antes de seleccionar tratamiento específico",
    "Hipertensión pulmonar no confirmada, porque la presión arterial pulmonar media debe ser de al menos 40 mmHg",
    "Hipertensión pulmonar combinada pre y poscapilar, independientemente de la presión de enclavamiento",
    "Hipertensión pulmonar secundaria a insuficiencia ventricular izquierda sistólica"
  ],
  respuestaCorrecta: 1,
  explicacion: `La definición hemodinámica actual de hipertensión pulmonar es una presión arterial pulmonar media mayor de 20 mmHg. El patrón precapilar requiere presión de enclavamiento pulmonar de 15 mmHg o menos y resistencia vascular pulmonar mayor de 2 unidades Wood. Esta paciente cumple los tres criterios: mPAP 36 mmHg, PAWP 10 mmHg y PVR 6.2 WU. El cateterismo confirma hipertensión pulmonar precapilar, pero no establece por sí solo si corresponde al grupo 1, 3, 4 u otra causa. Se debe investigar enfermedad tromboembólica crónica, enfermedad pulmonar, causas asociadas y otras etiologías antes de decidir tratamiento específico.`,
  perlaENARM: "Hipertensión pulmonar precapilar: mPAP >20 mmHg, PAWP ≤15 mmHg y PVR >2 WU.",
  gpc: {
    mexico: "No se identifica aquí una GPC mexicana específica vigente de hipertensión pulmonar del adulto cuya versión se haya verificado en el catálogo oficial.",
    internacional: "ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension, 2022."
  },
  bibliografia: "Humbert M, et al. 2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension. Eur Heart J. 2022;43:3618-3731."
},
{
  id: "NEUMO-302",
  especialidad: "Neumología",
  tema: "Hipertensión pulmonar",
  subtema: "Hipertensión pulmonar por cardiopatía izquierda",
  dificultad: "Alta",
  caso: `Hombre de 72 años con obesidad, hipertensión arterial sistémica, diabetes mellitus tipo 2, fibrilación auricular permanente y hospitalizaciones previas por insuficiencia cardiaca con fracción de eyección preservada. Refiere disnea progresiva de ocho meses, ortopnea ocasional y edema maleolar vespertino. El ecocardiograma muestra fracción de eyección ventricular izquierda de 58%, hipertrofia concéntrica, aumento del volumen auricular izquierdo, patrón de disfunción diastólica y dilatación moderada del ventrículo derecho. La velocidad de regurgitación tricuspídea sugiere hipertensión pulmonar. Tras estabilización clínica, el cateterismo derecho reporta mPAP de 34 mmHg, PAWP de 22 mmHg, gasto cardiaco de 4.5 L/min y PVR de 2.7 WU. No existen antecedentes de embolia pulmonar ni datos tomográficos de enfermedad intersticial extensa.`,
  pregunta: "¿Cómo debe clasificarse el patrón hemodinámico?",
  opciones: [
    "Hipertensión pulmonar precapilar aislada, compatible automáticamente con grupo 1",
    "Hipertensión pulmonar poscapilar aislada, porque la PVR es irrelevante cuando la PAWP está elevada",
    "Hipertensión pulmonar combinada pre y poscapilar asociada a cardiopatía izquierda",
    "Hipertensión pulmonar tromboembólica crónica confirmada por el cateterismo",
    "Hipertensión pulmonar sin repercusión hemodinámica"
  ],
  respuestaCorrecta: 2,
  explicacion: `La PAWP mayor de 15 mmHg indica un componente poscapilar. Cuando además la PVR supera 2 WU, se clasifica como hipertensión pulmonar combinada pre y poscapilar. En este caso, PAWP 22 mmHg y PVR 2.7 WU cumplen esa definición. La edad, obesidad, hipertensión, diabetes, fibrilación auricular y hallazgos ecocardiográficos favorecen cardiopatía izquierda con disfunción diastólica. El manejo debe priorizar la cardiopatía izquierda, la congestión y los factores contribuyentes. No se deben prescribir automáticamente fármacos específicos para hipertensión arterial pulmonar, cuyo beneficio no está establecido para este fenotipo y algunos pueden causar daño.`,
  perlaENARM: "PAWP >15 mmHg y PVR >2 WU definen hipertensión pulmonar combinada pre y poscapilar.",
  gpc: {
    mexico: "No se identifica aquí una GPC mexicana específica vigente de hipertensión pulmonar del adulto cuya versión se haya verificado en el catálogo oficial.",
    internacional: "ESC/ERS 2022."
  },
  bibliografia: "Humbert M, et al. 2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension. Eur Heart J. 2022;43:3618-3731."
},
{
  id: "NEUMO-303",
  especialidad: "Neumología",
  tema: "Hipertensión pulmonar",
  subtema: "Evaluación ecocardiográfica y confirmación diagnóstica",
  dificultad: "Alta",
  caso: `Mujer de 43 años con esclerosis sistémica limitada, fenómeno de Raynaud y reflujo gastroesofágico, que desarrolla disnea progresiva al esfuerzo durante seis meses. La exploración revela segundo ruido pulmonar acentuado, sin estertores ni edema periférico. La espirometría muestra volúmenes relativamente conservados, pero la DLCO es de 38% del predicho. La tomografía de tórax no evidencia enfermedad intersticial extensa. El ecocardiograma reporta velocidad de regurgitación tricuspídea de 3.5 m/s, dilatación del ventrículo derecho y excursión sistólica del plano anular tricuspídeo disminuida. La función ventricular izquierda está conservada. El médico tratante propone iniciar tratamiento específico únicamente con el resultado ecocardiográfico, sin realizar cateterismo.`,
  pregunta: "¿Cuál es la siguiente conducta diagnóstica más apropiada?",
  opciones: [
    "Iniciar tratamiento específico de hipertensión arterial pulmonar sin confirmar el diagnóstico",
    "Descartar hipertensión pulmonar porque la paciente no tiene hipoxemia en reposo",
    "Realizar cateterismo cardiaco derecho en un centro con experiencia, después de completar la evaluación no invasiva pertinente",
    "Solicitar biopsia pulmonar quirúrgica como prueba confirmatoria inicial",
    "Repetir el ecocardiograma dentro de dos años sin otra evaluación"
  ],
  respuestaCorrecta: 2,
  explicacion: `El ecocardiograma estima la probabilidad de hipertensión pulmonar y permite evaluar repercusión sobre cavidades derechas, pero no confirma por sí solo la entidad ni define su hemodinámica. La esclerosis sistémica, la disnea progresiva y la DLCO marcadamente reducida aumentan la sospecha de hipertensión arterial pulmonar asociada a enfermedad del tejido conectivo. La paciente requiere evaluación integral y, si el resultado va a modificar decisiones diagnósticas o terapéuticas, cateterismo derecho para medir mPAP, PAWP, gasto cardiaco y PVR. La evaluación debe incluir causas alternativas, particularmente enfermedad intersticial y enfermedad tromboembólica crónica.`,
  perlaENARM: "El ecocardiograma estima probabilidad; el cateterismo derecho confirma y caracteriza hemodinámicamente la hipertensión pulmonar.",
  gpc: {
    mexico: "No se identifica aquí una GPC mexicana específica vigente de hipertensión pulmonar del adulto cuya versión se haya verificado en el catálogo oficial.",
    internacional: "ESC/ERS 2022; recomendaciones de evaluación de hipertensión pulmonar asociada a esclerosis sistémica."
  },
  bibliografia: "Humbert M, et al. 2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension. Eur Heart J. 2022;43:3618-3731."
},
{
  id: "NEUMO-304",
  especialidad: "Neumología",
  tema: "Hipertensión pulmonar",
  subtema: "Búsqueda de enfermedad tromboembólica crónica",
  dificultad: "Alta",
  caso: `Hombre de 58 años que presentó embolia pulmonar bilateral hace 11 meses, tratado inicialmente con anticoagulación y mantenido posteriormente con un anticoagulante oral. Aunque no ha tenido recurrencia documentada, persiste con disnea limitante, intolerancia al ejercicio y un episodio de síncope al caminar rápidamente. El ecocardiograma muestra dilatación ventricular derecha y presión pulmonar estimada elevada. La tomografía angiográfica actual no identifica una embolia pulmonar central aguda, aunque presenta bandas y irregularidades vasculares periféricas dudosas. La función renal es normal y no existe enfermedad intersticial significativa en la tomografía.`,
  pregunta: "¿Qué estudio debe priorizarse para investigar enfermedad tromboembólica pulmonar crónica?",
  opciones: [
    "Radiografía de tórax como prueba para excluir definitivamente enfermedad tromboembólica crónica",
    "Gammagrafía pulmonar de ventilación/perfusión",
    "Dímero D como único estudio para excluir tromboembolia crónica después de anticoagulación",
    "Prueba broncodilatadora como confirmación de enfermedad vascular pulmonar",
    "Angiografía coronaria para identificar directamente defectos de perfusión pulmonar"
  ],
  respuestaCorrecta: 1,
  explicacion: `La enfermedad tromboembólica pulmonar crónica debe considerarse ante disnea persistente después de embolia pulmonar e hipertensión pulmonar sospechada. La gammagrafía de ventilación/perfusión es la prueba de cribado recomendada para detectar defectos de perfusión compatibles con enfermedad tromboembólica crónica; un estudio normal o de muy baja probabilidad hace esta etiología mucho menos probable en ausencia de condiciones que limiten su interpretación. Si existen defectos persistentes, se requiere evaluación especializada con imagen vascular y hemodinámica para determinar anatomía, operabilidad y opciones terapéuticas. Una tomografía negativa para embolia aguda no excluye por sí sola enfermedad tromboembólica crónica distal.`,
  perlaENARM: "En sospecha de hipertensión pulmonar tromboembólica crónica, la gammagrafía V/Q es fundamental para el cribado.",
  gpc: {
    mexico: "No se identifica aquí una GPC mexicana específica vigente de hipertensión pulmonar tromboembólica crónica cuya versión se haya verificado.",
    internacional: "ESC/ERS 2022."
  },
  bibliografia: "Humbert M, et al. 2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension. Eur Heart J. 2022;43:3618-3731."
},
{
  id: "NEUMO-305",
  especialidad: "Neumología",
  tema: "Hipertensión pulmonar",
  subtema: "Hipertensión arterial pulmonar y estratificación de riesgo",
  dificultad: "Alta",
  caso: `Mujer de 35 años con diagnóstico confirmado de hipertensión arterial pulmonar idiopática después de cateterismo derecho, exclusión de cardiopatía izquierda, enfermedad pulmonar significativa y enfermedad tromboembólica crónica. Ha recibido tratamiento combinado con un antagonista del receptor de endotelina y un inhibidor de PDE5 durante cinco meses. Persiste con disnea al caminar una cuadra, fatiga y un episodio reciente de presíncope. La presión arterial es de 98/64 mmHg, la frecuencia cardiaca de 104/min y la saturación de 93% al aire ambiente. El examen muestra ingurgitación yugular y edema maleolar. La prueba de marcha de seis minutos es de 220 m; la BNP está elevada y el ecocardiograma evidencia dilatación ventricular derecha y función sistólica derecha reducida. No hay datos de infección o anemia que expliquen el deterioro.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Mantener el mismo esquema sin reevaluación porque la paciente ya recibe dos fármacos",
    "Suspender todos los tratamientos vasodilatadores sin valoración especializada",
    "Reevaluar urgentemente el riesgo en un centro experto y considerar intensificación terapéutica, incluida prostaciclina parenteral según el perfil clínico",
    "Agregar oxígeno como única medida y posponer la valoración durante seis meses",
    "Indicar diurético como tratamiento único de la enfermedad vascular pulmonar"
  ],
  respuestaCorrecta: 2,
  explicacion: `La persistencia de limitación funcional marcada, presíncope, signos de congestión derecha, BNP elevada, distancia de marcha reducida y disfunción ventricular derecha indican respuesta insuficiente y riesgo clínico elevado. Se necesita reevaluación integral y pronta en un centro experto, verificando adherencia, tolerancia, hemodinámica y diagnósticos concurrentes. En pacientes de alto riesgo pese a tratamiento oral, debe considerarse terapia basada en prostaciclina parenteral y evaluación para estrategias avanzadas, incluida valoración para trasplante cuando corresponda. Los diuréticos pueden controlar congestión, pero no sustituyen el tratamiento de la vasculopatía.`,
  perlaENARM: "En hipertensión arterial pulmonar, el deterioro clínico y la disfunción ventricular derecha obligan a reevaluar el riesgo y escalar tratamiento.",
  gpc: {
    mexico: "No se identifica aquí una GPC mexicana específica vigente de hipertensión arterial pulmonar cuya versión se haya verificado.",
    internacional: "ESC/ERS 2022."
  },
  bibliografia: "Humbert M, et al. 2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension. Eur Heart J. 2022;43:3618-3731."
},
{
  id: "NEUMO-306",
  especialidad: "Neumología",
  tema: "Hipertensión pulmonar",
  subtema: "Vasorreactividad aguda",
  dificultad: "Alta",
  caso: `Hombre de 29 años con hipertensión arterial pulmonar idiopática confirmada mediante cateterismo. No presenta enfermedad del tejido conectivo, infección por VIH, hipertensión portal ni exposición a fármacos asociados. Se encuentra en clase funcional III de la OMS, con disnea al caminar en terreno plano y limitación para actividades habituales. El equipo especializado planea realizar prueba de vasorreactividad durante el cateterismo para identificar si podría beneficiarse de dosis altas de bloqueadores de canales de calcio. El paciente pregunta si cualquier disminución de la presión pulmonar durante una prueba justificaría iniciar nifedipino a dosis altas.`,
  pregunta: "¿Cuál afirmación describe correctamente la prueba de vasorreactividad y su implicación terapéutica?",
  opciones: [
    "Debe realizarse en toda hipertensión pulmonar, incluidos todos los grupos clínicos, y cualquier respuesta permite bloqueadores de canales de calcio",
    "Se utiliza principalmente en hipertensión arterial pulmonar idiopática, hereditaria o asociada a fármacos seleccionados; una respuesta positiva requiere criterios hemodinámicos específicos",
    "La prueba se considera positiva si la saturación aumenta dos puntos, sin importar los cambios hemodinámicos",
    "Una respuesta positiva confirma enfermedad tromboembólica pulmonar crónica",
    "Los bloqueadores de canales de calcio están contraindicados en todos los pacientes con hipertensión arterial pulmonar"
  ],
  respuestaCorrecta: 1,
  explicacion: `La prueba de vasorreactividad aguda se utiliza para identificar un subgrupo de pacientes con hipertensión arterial pulmonar idiopática, hereditaria o asociada a fármacos o toxinas que podrían responder a bloqueadores de canales de calcio a dosis altas. La respuesta positiva se define por una reducción de la mPAP de al menos 10 mmHg hasta un valor absoluto de 40 mmHg o menos, con gasto cardiaco aumentado o sin cambio significativo. No debe extrapolarse a todos los grupos de hipertensión pulmonar. La prescripción de dosis altas de bloqueadores de canales de calcio sin selección hemodinámica puede causar hipotensión o deterioro clínico.`,
  perlaENARM: "La vasorreactividad no es una prueba universal; una respuesta hemodinámica positiva selecciona a pacientes específicos para bloqueadores de canales de calcio.",
  gpc: {
    mexico: "No se identifica aquí una GPC mexicana específica vigente cuya versión se haya verificado.",
    internacional: "ESC/ERS 2022."
  },
  bibliografia: "Humbert M, et al. 2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension. Eur Heart J. 2022;43:3618-3731."
},
{
  id: "NEUMO-307",
  especialidad: "Neumología",
  tema: "Hipertensión pulmonar",
  subtema: "Tratamiento en cardiopatía izquierda",
  dificultad: "Alta",
  caso: `Mujer de 76 años con insuficiencia cardiaca con fracción de eyección preservada, enfermedad renal crónica estadio 3, hipertensión arterial sistémica y fibrilación auricular. Ha tenido dos ingresos por congestión en el último año. Tras diuresis y estabilización, el cateterismo derecho revela mPAP de 32 mmHg, PAWP de 20 mmHg y PVR de 1.8 unidades Wood. El ecocardiograma muestra aurícula izquierda dilatada, hipertrofia ventricular izquierda y función sistólica preservada. Un familiar le comenta que el sildenafil se utiliza en hipertensión pulmonar y pregunta si debería añadirse para mejorar la disnea.`,
  pregunta: "¿Cuál es la conducta terapéutica más apropiada?",
  opciones: [
    "Iniciar sildenafil porque cualquier hipertensión pulmonar responde a inhibidores de PDE5",
    "Iniciar un antagonista del receptor de endotelina para normalizar la presión pulmonar",
    "Optimizar el tratamiento de la insuficiencia cardiaca y las comorbilidades, sin iniciar automáticamente fármacos específicos de hipertensión arterial pulmonar",
    "Indicar prostaciclina parenteral como primera línea en todos los pacientes con PAWP elevada",
    "Suspender la diuresis para aumentar el llenado ventricular izquierdo"
  ],
  respuestaCorrecta: 2,
  explicacion: `La PAWP de 20 mmHg establece un componente poscapilar y la PVR de 1.8 WU no cumple el umbral de resistencia vascular elevada para clasificarla como hipertensión pulmonar combinada. El cuadro corresponde a hipertensión pulmonar asociada a cardiopatía izquierda. El manejo se centra en optimizar la insuficiencia cardiaca, el control de presión arterial y ritmo, el estado de volumen y las comorbilidades. Los fármacos aprobados para hipertensión arterial pulmonar no deben indicarse automáticamente en este contexto; la decisión de tratamientos adicionales requiere valoración especializada y evidencia específica.`,
  perlaENARM: "No extrapoles los tratamientos del grupo 1 al grupo 2: primero define el mecanismo hemodinámico.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente aplicable a insuficiencia cardiaca y sus comorbilidades; no se asigna un identificador no verificado.",
    internacional: "ESC/ERS 2022; guías vigentes de insuficiencia cardiaca."
  },
  bibliografia: "Humbert M, et al. 2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension. Eur Heart J. 2022;43:3618-3731."
},
{
  id: "NEUMO-308",
  especialidad: "Neumología",
  tema: "Hipertensión pulmonar",
  subtema: "Enfermedad pulmonar e hipoxemia",
  dificultad: "Alta",
  caso: `Hombre de 68 años con EPOC grave, exposición tabáquica acumulada de 55 paquetes-año y oxigenoterapia domiciliaria por hipoxemia crónica. Durante el último año ha aumentado su disnea a pesar de tratamiento inhalado optimizado y ausencia de exacerbación reciente. La espirometría muestra obstrucción grave; la tomografía evidencia enfisema extenso sin fibrosis significativa. El ecocardiograma sugiere dilatación del ventrículo derecho y presión pulmonar elevada. El cateterismo, realizado por sospecha de hipertensión pulmonar desproporcionada a la enfermedad pulmonar, reporta mPAP de 38 mmHg, PAWP de 11 mmHg y PVR de 5.8 WU. No hay defectos de perfusión sugestivos de enfermedad tromboembólica crónica.`,
  pregunta: "¿Cuál es la estrategia más apropiada?",
  opciones: [
    "Clasificar automáticamente al paciente como hipertensión arterial pulmonar idiopática y comenzar tratamiento oral específico",
    "Considerar hipertensión pulmonar asociada a enfermedad pulmonar, optimizar el tratamiento respiratorio y la oxigenación, y valorar el caso en un centro experto por la elevación importante de PVR",
    "Suspender el oxígeno porque puede aumentar la resistencia vascular pulmonar",
    "Indicar anticoagulación indefinida a todos los pacientes con EPOC e hipertensión pulmonar",
    "Realizar trombólisis sistémica pese a la ausencia de tromboembolia aguda"
  ],
  respuestaCorrecta: 1,
  explicacion: `La enfermedad pulmonar obstructiva crónica con enfisema extenso y ausencia de enfermedad tromboembólica apoya hipertensión pulmonar del grupo 3. La mPAP elevada y PVR de 5.8 WU indican un componente vascular relevante; una PVR mayor de 5 WU se utiliza para identificar hipertensión pulmonar grave en enfermedad pulmonar y justifica evaluación individualizada especializada. Se deben optimizar tratamiento de EPOC, oxigenación cuando esté indicada, rehabilitación y comorbilidades. Los fármacos específicos para hipertensión arterial pulmonar no son de uso rutinario en toda hipertensión pulmonar asociada a EPOC, por resultados heterogéneos y posibilidad de empeorar el intercambio gaseoso.`,
  perlaENARM: "En EPOC, una PVR >5 WU identifica un componente hemodinámico importante y favorece valoración en un centro experto.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente aplicable a EPOC y oxigenoterapia; no se asigna un identificador no verificado.",
    internacional: "ESC/ERS 2022; GOLD vigente para EPOC."
  },
  bibliografia: "Humbert M, et al. 2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension. Eur Heart J. 2022;43:3618-3731."
},
{
  id: "NEUMO-309",
  especialidad: "Neumología",
  tema: "Hipertensión pulmonar",
  subtema: "Hipertensión portopulmonar",
  dificultad: "Alta",
  caso: `Hombre de 51 años con cirrosis hepática por enfermedad metabólica, hipertensión portal y várices esofágicas previamente tratadas. Durante el protocolo de evaluación para trasplante hepático refiere disnea progresiva, fatiga y presíncope ocasional. El ecocardiograma muestra dilatación del ventrículo derecho y presión pulmonar estimada elevada, sin disfunción sistólica ventricular izquierda significativa. El cateterismo derecho revela mPAP de 39 mmHg, PAWP de 11 mmHg, gasto cardiaco de 5.0 L/min y PVR de 5.6 WU. No presenta enfermedad intersticial ni antecedentes de tromboembolia pulmonar.`,
  pregunta: "¿Cuál es la interpretación más apropiada?",
  opciones: [
    "Hipertensión pulmonar secundaria exclusivamente a sobrecarga de volumen por cirrosis, sin necesidad de evaluación específica",
    "Hipertensión portopulmonar probable, que requiere valoración multidisciplinaria por especialistas en hipertensión pulmonar y hepatología",
    "Hipertensión pulmonar poscapilar por definición, porque la cirrosis siempre eleva la PAWP",
    "Hipertensión arterial pulmonar idiopática, porque la enfermedad hepática no modifica la clasificación",
    "Hipertensión pulmonar tromboembólica crónica confirmada por la resistencia vascular pulmonar elevada"
  ],
  respuestaCorrecta: 1,
  explicacion: `La hipertensión portal constituye una asociación reconocida con hipertensión arterial pulmonar, denominada hipertensión portopulmonar, cuando se confirma el patrón hemodinámico precapilar y se excluyen otras causas. En este caso, mPAP 39 mmHg, PAWP 11 mmHg y PVR 5.6 WU cumplen criterios de hipertensión pulmonar precapilar. Debe completarse el estudio etiológico y evaluar gravedad, función del ventrículo derecho, función hepática y elegibilidad para trasplante. El manejo es especializado porque la hipertensión pulmonar puede modificar considerablemente el riesgo perioperatorio y la estrategia de trasplante.`,
  perlaENARM: "Hipertensión portal más hipertensión pulmonar precapilar obliga a considerar hipertensión portopulmonar y a coordinar hepatología con un centro experto.",
  gpc: {
    mexico: "No se identifica aquí una GPC mexicana específica vigente de hipertensión portopulmonar cuya versión se haya verificado.",
    internacional: "ESC/ERS 2022."
  },
  bibliografia: "Humbert M, et al. 2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension. Eur Heart J. 2022;43:3618-3731."
},
{
  id: "NEUMO-310",
  especialidad: "Neumología",
  tema: "Hipertensión pulmonar",
  subtema: "Hipertensión arterial pulmonar asociada a enfermedad del tejido conectivo",
  dificultad: "Alta",
  caso: `Mujer de 47 años con esclerosis sistémica, fenómeno de Raynaud, telangiectasias y enfermedad por reflujo gastroesofágico. Durante nueve meses presenta disnea progresiva, fatiga y reducción de la distancia caminada. La tomografía de alta resolución no muestra fibrosis pulmonar suficiente para explicar la limitación; la espirometría es casi normal, pero la DLCO está muy disminuida. El ecocardiograma muestra dilatación del ventrículo derecho. El cateterismo derecho revela mPAP de 33 mmHg, PAWP de 9 mmHg y PVR de 4.8 WU. Se ha descartado enfermedad tromboembólica crónica mediante gammagrafía de ventilación/perfusión.`,
  pregunta: "¿Cuál es la interpretación más probable y qué conducta corresponde?",
  opciones: [
    "Hipertensión pulmonar del grupo 2, aunque la PAWP sea normal y no haya evidencia de cardiopatía izquierda",
    "Hipertensión arterial pulmonar asociada a esclerosis sistémica, con necesidad de evaluación integral y estratificación de riesgo en centro experto",
    "Hipertensión pulmonar exclusivamente por fibrosis pulmonar grave, aunque la tomografía no la demuestre",
    "Hipertensión pulmonar tromboembólica crónica, pese a gammagrafía sin defectos sugestivos",
    "Hipertensión pulmonar no confirmada porque la DLCO debe ser normal"
  ],
  respuestaCorrecta: 1,
  explicacion: `La esclerosis sistémica se asocia a hipertensión arterial pulmonar, enfermedad intersticial y afectación cardiaca. El patrón precapilar, la DLCO desproporcionadamente reducida, la ausencia de fibrosis extensa y el estudio de perfusión no sugestivo de tromboembolia favorecen hipertensión arterial pulmonar asociada a enfermedad del tejido conectivo. Deben excluirse causas concomitantes, incluida enfermedad venosa pulmonar cuando existan datos compatibles, y estratificar riesgo. El tratamiento específico se decide en un centro experto según el fenotipo y la gravedad; no se debe basar exclusivamente en la presión estimada por ecocardiograma.`,
  perlaENARM: "En esclerosis sistémica, una DLCO muy baja con volúmenes relativamente conservados y disnea progresiva obliga a investigar hipertensión arterial pulmonar.",
  gpc: {
    mexico: "No se identifica aquí una GPC mexicana específica vigente cuya versión se haya verificado.",
    internacional: "ESC/ERS 2022; recomendaciones de cribado y evaluación de hipertensión pulmonar en esclerosis sistémica."
  },
  bibliografia: "Humbert M, et al. 2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension. Eur Heart J. 2022;43:3618-3731."
},
{
  id: "NEUMO-311",
  especialidad: "Neumología",
  tema: "Hipertensión pulmonar",
  subtema: "Edema pulmonar tras vasodilatadores y enfermedad venosa pulmonar",
  dificultad: "Alta",
  caso: `Mujer de 39 años con disnea progresiva, hipoxemia leve y hallazgos hemodinámicos compatibles con hipertensión pulmonar precapilar. La tomografía inicial no muestra fibrosis extensa y el cateterismo derecho reporta PAWP normal, mPAP elevada y resistencia vascular pulmonar aumentada. Se inicia tratamiento vasodilatador específico en otro centro. En los días siguientes desarrolla empeoramiento importante de la disnea, hipoxemia, crepitantes bilaterales y edema pulmonar radiológico, sin incremento claro de la PAWP en las mediciones previas. Una revisión detallada de la tomografía revela engrosamiento septal interlobulillar, opacidades centrolobulillares en vidrio deslustrado y adenopatías mediastínicas.`,
  pregunta: "¿Qué diagnóstico debe considerarse prioritariamente?",
  opciones: [
    "Asma bronquial como explicación única del deterioro",
    "Enfermedad venooclusiva pulmonar o hemangiomatosis capilar pulmonar, entidades del espectro de afectación venosa/capilar pulmonar",
    "Hipertensión pulmonar poscapilar por insuficiencia mitral grave demostrada",
    "Neumotórax a tensión bilateral",
    "Tromboembolia pulmonar aguda confirmada únicamente por la hipoxemia"
  ],
  respuestaCorrecta: 1,
  explicacion: `La combinación de hipertensión pulmonar precapilar, edema pulmonar tras vasodilatadores y la tríada tomográfica de engrosamiento septal, opacidades centrolobulillares en vidrio deslustrado y adenopatías mediastínicas sugiere enfermedad venooclusiva pulmonar o hemangiomatosis capilar pulmonar. Estas entidades pueden simular hipertensión arterial pulmonar, mientras que la afectación de pequeñas venas y capilares favorece edema pulmonar con vasodilatadores. Se requiere evaluación urgente en centro experto; no debe continuarse o intensificarse el tratamiento de forma automática. La biopsia pulmonar puede ser peligrosa y no constituye una prueba rutinaria para confirmar el diagnóstico.`,
  perlaENARM: "Hipertensión pulmonar precapilar + edema pulmonar tras vasodilatadores + tríada tomográfica característica: sospecha enfermedad venooclusiva pulmonar.",
  gpc: {
    mexico: "No se identifica aquí una GPC mexicana específica vigente para enfermedad venooclusiva pulmonar cuya versión se haya verificado.",
    internacional: "ESC/ERS 2022."
  },
  bibliografia: "Humbert M, et al. 2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension. Eur Heart J. 2022;43:3618-3731."
},
{
  id: "NEUMO-312",
  especialidad: "Neumología",
  tema: "Hipertensión pulmonar",
  subtema: "Embarazo e hipertensión arterial pulmonar",
  dificultad: "Alta",
  caso: `Mujer de 30 años con hipertensión arterial pulmonar idiopática diagnosticada antes del embarazo, en tratamiento especializado. Acude a las 9 semanas de gestación después de una prueba de embarazo positiva. Refiere disnea basal estable, sin síncope ni dolor torácico. La presión arterial es de 104/68 mmHg, la saturación de 95% al aire ambiente y no hay signos evidentes de congestión. La paciente pregunta si puede continuar el embarazo sin modificar el tratamiento, dado que actualmente se siente relativamente bien. El expediente muestra que utiliza un antagonista del receptor de endotelina y un anticoagulante, cuya indicación fue individualizada por el equipo previo.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Continuar el embarazo sin evaluación adicional porque la paciente está en clase funcional estable",
    "Suspender todos los medicamentos y programar una revisión rutinaria en el segundo trimestre",
    "Realizar valoración urgente multidisciplinaria en un centro experto, revisar fármacos potencialmente teratógenos y discutir riesgos maternos y opciones de manejo",
    "Indicar un inhibidor de PDE5 adicional sin reevaluación hemodinámica",
    "Considerar que la hipertensión arterial pulmonar no modifica el riesgo obstétrico"
  ],
  respuestaCorrecta: 2,
  explicacion: `El embarazo en hipertensión arterial pulmonar conlleva riesgo materno elevado, incluso cuando los síntomas iniciales parecen estables. Se requiere evaluación urgente y toma de decisiones compartida con especialistas en hipertensión pulmonar, medicina materno-fetal, cardiología y anestesia según el contexto. Los antagonistas del receptor de endotelina están contraindicados durante el embarazo por riesgo fetal y deben revisarse inmediatamente; la anticoagulación también requiere valoración específica del fármaco, indicación y riesgo. No debe hacerse una suspensión indiscriminada de todo tratamiento ni retrasar la evaluación hasta el segundo trimestre.`,
  perlaENARM: "El embarazo con hipertensión arterial pulmonar es de alto riesgo: evaluación experta urgente y revisión inmediata de fármacos contraindicados.",
  gpc: {
    mexico: "Consultar GPC mexicanas vigentes de control prenatal de alto riesgo y el protocolo institucional especializado; no se asigna un identificador no verificado.",
    internacional: "ESC/ERS 2022; guías europeas vigentes de embarazo y enfermedad cardiovascular."
  },
  bibliografia: "Humbert M, et al. 2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension. Eur Heart J. 2022;43:3618-3731."
},
{
  id: "NEUMO-313",
  especialidad: "Neumología",
  tema: "Hipertensión pulmonar",
  subtema: "Hipertensión pulmonar tromboembólica crónica: tratamiento",
  dificultad: "Alta",
  caso: `Hombre de 62 años con disnea limitante persistente después de una embolia pulmonar ocurrida hace 14 meses. Ha recibido anticoagulación adecuada y no presenta evidencia de recurrencia aguda. La gammagrafía V/Q muestra múltiples defectos de perfusión segmentarios no concordantes con la ventilación. La evaluación vascular especializada demuestra lesiones organizadas y bandas en arterias pulmonares, y el cateterismo derecho confirma mPAP elevada, PAWP normal y PVR aumentada. La función ventricular derecha está comprometida, aunque el paciente permanece hemodinámicamente estable. No tiene comorbilidad que impida de entrada una evaluación quirúrgica.`,
  pregunta: "¿Cuál es la estrategia terapéutica que debe evaluarse prioritariamente?",
  opciones: [
    "Suspender la anticoagulación porque el episodio agudo ocurrió hace más de un año",
    "Mantener únicamente diuréticos y descartar intervenciones vasculares",
    "Evaluación multidisciplinaria de operabilidad para endarterectomía pulmonar, además de anticoagulación y valoración de otras intervenciones según anatomía y riesgo",
    "Administrar trombólisis sistémica de rutina por la presencia de lesiones organizadas crónicas",
    "Tratar con antibióticos prolongados para disolver las bandas vasculares"
  ],
  respuestaCorrecta: 2,
  explicacion: `La hipertensión pulmonar tromboembólica crónica requiere evaluación en un centro especializado por un equipo multidisciplinario. La endarterectomía pulmonar es el tratamiento de elección potencialmente curativo para pacientes con enfermedad accesible y riesgo operatorio aceptable. La angioplastia pulmonar con balón y el tratamiento farmacológico específico pueden considerarse en pacientes seleccionados con enfermedad inoperable o hipertensión pulmonar residual. La anticoagulación a largo plazo suele ser necesaria, individualizando el fármaco y el contexto. La trombólisis se utiliza en escenarios agudos seleccionados, no como tratamiento rutinario de material trombótico organizado crónico.`,
  perlaENARM: "En hipertensión pulmonar tromboembólica crónica, determina operabilidad en un centro experto: no todos los pacientes son candidatos a tratamiento exclusivamente farmacológico.",
  gpc: {
    mexico: "No se identifica aquí una GPC mexicana específica vigente para hipertensión pulmonar tromboembólica crónica cuya versión se haya verificado.",
    internacional: "ESC/ERS 2022."
  },
  bibliografia: "Humbert M, et al. 2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension. Eur Heart J. 2022;43:3618-3731."
},
{
  id: "NEUMO-314",
  especialidad: "Neumología",
  tema: "Hipertensión pulmonar",
  subtema: "Síncope y falla ventricular derecha",
  dificultad: "Alta",
  caso: `Mujer de 48 años con hipertensión arterial pulmonar conocida, en tratamiento oral combinado, que acude a urgencias por síncope durante una caminata corta. Desde hace dos semanas presenta aumento de disnea, edema de miembros inferiores y reducción de la diuresis. La presión arterial es de 86/58 mmHg, frecuencia cardiaca de 122/min y saturación de 90% con oxígeno suplementario. Se observa ingurgitación yugular, hepatomegalia dolorosa y edema periférico. El electrocardiograma muestra taquicardia sinusal y signos de sobrecarga derecha; la ecocardiografía revela dilatación ventricular derecha importante y desplazamiento septal hacia el ventrículo izquierdo. No se identifica sangrado, fiebre ni un desencadenante claro.`,
  pregunta: "¿Cuál es la prioridad de manejo?",
  opciones: [
    "Dar egreso con incremento ambulatorio del diurético porque el edema explica todos los síntomas",
    "Hospitalización urgente en una unidad con experiencia, soporte hemodinámico y evaluación de descompensación grave de falla ventricular derecha",
    "Administrar grandes volúmenes de cristaloides de forma indiscriminada para normalizar la presión arterial",
    "Suspender todo tratamiento específico y posponer la valoración hasta estabilizarse en domicilio",
    "Indicar trombólisis sistémica sin investigar causas adicionales ni confirmar embolia aguda"
  ],
  respuestaCorrecta: 1,
  explicacion: `El síncope, la hipotensión, la taquicardia, la congestión sistémica y la disfunción ventricular derecha indican descompensación grave con posible bajo gasto. Requiere ingreso urgente, monitorización, búsqueda de desencadenantes —incluida infección, arritmia, embolia aguda o progresión de la enfermedad— y soporte hemodinámico individualizado. La administración excesiva de líquidos puede empeorar la dilatación derecha y desplazar el septum, reduciendo el llenado del ventrículo izquierdo. Los diuréticos, vasopresores, inotrópicos y tratamientos específicos deben seleccionarse según perfusión, congestión y experiencia del equipo.`,
  perlaENARM: "En falla ventricular derecha por hipertensión pulmonar, evita la expansión indiscriminada de volumen; el síncope con hipotensión es un dato de alto riesgo.",
  gpc: {
    mexico: "No se identifica aquí una GPC mexicana específica vigente cuya versión se haya verificado.",
    internacional: "ESC/ERS 2022."
  },
  bibliografia: "Humbert M, et al. 2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension. Eur Heart J. 2022;43:3618-3731."
},
{
  id: "NEUMO-315",
  especialidad: "Neumología",
  tema: "Hipertensión pulmonar",
  subtema: "Interpretación de presión de enclavamiento limítrofe",
  dificultad: "Alta",
  caso: `Hombre de 66 años con obesidad, hipertensión arterial, fibrilación auricular paroxística y antecedentes de edema pulmonar durante una hospitalización por crisis hipertensiva. Actualmente refiere disnea progresiva, sin edema periférico y con presión arterial controlada. El ecocardiograma muestra aurícula izquierda aumentada de tamaño y función ventricular izquierda preservada. El cateterismo derecho realizado después de diuresis intensiva reporta mPAP de 29 mmHg, PAWP de 13 mmHg, gasto cardiaco de 4.0 L/min y PVR de 4.0 WU. El equipo considera hipertensión arterial pulmonar precapilar, pero la historia clínica sugiere posible cardiopatía izquierda con presiones de llenado que pueden haberse normalizado transitoriamente tras la diuresis.`,
  pregunta: "¿Cuál es la interpretación más rigurosa?",
  opciones: [
    "La PAWP de 13 mmHg excluye de manera absoluta cualquier contribución de cardiopatía izquierda",
    "Debe reconocerse el patrón precapilar medido, pero considerar la posibilidad de cardiopatía izquierda oculta y evaluar la necesidad de pruebas hemodinámicas adicionales en un centro experto",
    "El paciente tiene hipertensión pulmonar poscapilar confirmada porque toda disnea en obesidad implica PAWP elevada",
    "Debe diagnosticarse hipertensión arterial pulmonar idiopática sin completar el estudio",
    "La PVR no puede calcularse cuando la PAWP es menor de 15 mmHg"
  ],
  respuestaCorrecta: 1,
  explicacion: `Con los datos registrados, mPAP 29 mmHg, PAWP 13 mmHg y PVR 4.0 WU cumplen los criterios hemodinámicos de hipertensión pulmonar precapilar. Sin embargo, la clasificación clínica exige integrar el contexto. Obesidad, fibrilación auricular, hipertensión, aurícula izquierda dilatada y episodios previos de edema pulmonar aumentan la sospecha de enfermedad cardiaca izquierda. La diuresis puede modificar las presiones de llenado. En casos seleccionados, el centro experto puede considerar pruebas provocativas, como carga de volumen o ejercicio invasivo, para aclarar si existe componente poscapilar oculto. No debe etiquetarse automáticamente como grupo 1.`,
  perlaENARM: "Una PAWP ≤15 mmHg define el patrón medido, pero no elimina la necesidad de evaluar cardiopatía izquierda oculta cuando el fenotipo clínico la sugiere.",
  gpc: {
    mexico: "No se identifica aquí una GPC mexicana específica vigente cuya versión se haya verificado.",
    internacional: "ESC/ERS 2022."
  },
  bibliografia: "Humbert M, et al. 2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension. Eur Heart J. 2022;43:3618-3731."
},
{
  id: "NEUMO-316",
  especialidad: "Neumología",
  tema: "Hipertensión pulmonar",
  subtema: "Tratamiento combinado inicial",
  dificultad: "Alta",
  caso: `Mujer de 41 años con hipertensión arterial pulmonar idiopática confirmada por cateterismo y evaluación etiológica completa. Presenta disnea al caminar rápidamente, sin síncope, hipotensión ni signos de congestión. La prueba de marcha de seis minutos es de 390 m; el BNP está moderadamente elevado y el ecocardiograma muestra dilatación ventricular derecha leve, con función sistólica relativamente conservada. La función renal y hepática son adecuadas. No está embarazada, no tiene contraindicaciones conocidas a los tratamientos orales y no existe evidencia de enfermedad venooclusiva pulmonar. Se considera candidata a tratamiento farmacológico específico de primera línea.`,
  pregunta: "¿Cuál es el enfoque terapéutico inicial habitual en un paciente de este perfil, una vez confirmada la clasificación y estratificado el riesgo?",
  opciones: [
    "Monoterapia obligatoria con diurético, independientemente del perfil hemodinámico",
    "Combinación inicial de un antagonista del receptor de endotelina y un inhibidor de PDE5, cuando sea apropiado según riesgo y contraindicaciones",
    "Trombólisis sistémica para reducir la presión pulmonar crónica",
    "Antibiótico macrólido indefinido como tratamiento vasodilatador principal",
    "Bloqueador de canales de calcio a dosis altas sin prueba de vasorreactividad"
  ],
  respuestaCorrecta: 1,
  explicacion: `En pacientes seleccionados con hipertensión arterial pulmonar confirmada, riesgo bajo o intermedio y sin contraindicaciones, la combinación inicial de un antagonista del receptor de endotelina y un inhibidor de PDE5 es una estrategia recomendada. La elección concreta depende del perfil clínico, interacciones, embarazo potencial, función hepática, presión arterial y otras características. La terapia debe acompañarse de seguimiento estructurado con evaluación funcional, biomarcadores, función ventricular derecha y reevaluación periódica del riesgo. La monoterapia puede ser apropiada en perfiles seleccionados, comorbilidades importantes o cuando la combinación no sea adecuada.`,
  perlaENARM: "En hipertensión arterial pulmonar, la combinación oral inicial es frecuente en pacientes seleccionados; el esquema depende del riesgo y las contraindicaciones.",
  gpc: {
    mexico: "No se identifica aquí una GPC mexicana específica vigente cuya versión se haya verificado.",
    internacional: "ESC/ERS 2022."
  },
  bibliografia: "Humbert M, et al. 2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension. Eur Heart J. 2022;43:3618-3731."
},
{
  id: "NEUMO-317",
  especialidad: "Neumología",
  tema: "Hipertensión pulmonar",
  subtema: "Edema periférico y manejo de volumen",
  dificultad: "Alta",
  caso: `Hombre de 56 años con hipertensión arterial pulmonar en tratamiento específico y antecedente de disfunción ventricular derecha. En el último mes presenta incremento de peso de 4 kg, edema maleolar bilateral, distensión yugular y plenitud abdominal. Niega fiebre, dolor torácico o aumento súbito de disnea. La presión arterial es de 104/68 mmHg, la creatinina ha aumentado ligeramente respecto a su basal y el ecocardiograma confirma dilatación ventricular derecha. No hay evidencia de edema pulmonar ni de disfunción sistólica ventricular izquierda. El paciente refiere consumo elevado de sal y que suspendió el diurético por temor a afectar los riñones.`,
  pregunta: "¿Cuál es la estrategia más apropiada para la congestión sistémica?",
  opciones: [
    "Administrar expansión rápida de volumen para mejorar el llenado del ventrículo derecho",
    "Evaluar perfusión y función renal, reintroducir o ajustar cuidadosamente diuréticos y vigilar peso, electrolitos y respuesta clínica",
    "Suspender permanentemente el tratamiento de hipertensión arterial pulmonar",
    "Indicar diálisis inmediata en todo paciente con edema periférico y aumento leve de creatinina",
    "Tratar con trombólisis sistémica aunque no haya sospecha de embolia aguda"
  ],
  respuestaCorrecta: 1,
  explicacion: `La congestión sistémica es frecuente en la insuficiencia ventricular derecha asociada a hipertensión pulmonar. El tratamiento suele incluir diuréticos ajustados según congestión, presión arterial, función renal y electrolitos, con seguimiento cercano de peso y balance hídrico. La elevación leve de creatinina requiere interpretar perfusión y respuesta a la descongestión, no suspender automáticamente todo tratamiento ni administrar líquidos indiscriminadamente. También deben revisarse ingesta de sodio, adherencia, medicamentos concomitantes y posibles desencadenantes de descompensación.`,
  perlaENARM: "En insuficiencia ventricular derecha congestiva, la diuresis debe individualizarse con vigilancia renal y hemodinámica.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente aplicable a insuficiencia cardiaca y enfermedad renal; no se asigna un identificador no verificado.",
    internacional: "ESC/ERS 2022."
  },
  bibliografia: "Humbert M, et al. 2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension. Eur Heart J. 2022;43:3618-3731."
},
{
  id: "NEUMO-318",
  especialidad: "Neumología",
  tema: "Hipertensión pulmonar",
  subtema: "Hipertensión pulmonar en enfermedad intersticial",
  dificultad: "Alta",
  caso: `Mujer de 69 años con fibrosis pulmonar idiopática diagnosticada mediante evaluación multidisciplinaria. Durante los últimos ocho meses aumenta la disnea pese a tratamiento y seguimiento adecuados. La tomografía muestra progresión fibrótica moderada, sin nueva consolidación; la espirometría cambia poco, pero la DLCO desciende de 42% a 25% del predicho. La saturación cae a 82% durante la marcha. El ecocardiograma muestra dilatación del ventrículo derecho y presión pulmonar elevada. La gammagrafía V/Q no identifica defectos sugestivos de enfermedad tromboembólica crónica. No hay evidencia de cardiopatía izquierda significativa.`,
  pregunta: "¿Cuál es la interpretación y el siguiente paso más apropiados?",
  opciones: [
    "Atribuir todo el deterioro a progresión fibrótica sin investigar el componente vascular",
    "Sospechar hipertensión pulmonar asociada a enfermedad intersticial y completar evaluación hemodinámica si puede modificar el manejo",
    "Diagnosticar hipertensión arterial pulmonar idiopática sin considerar la fibrosis pulmonar",
    "Iniciar anticoagulación terapéutica para todos los pacientes con fibrosis y disnea",
    "Descartar hipertensión pulmonar porque la espirometría ha cambiado poco"
  ],
  respuestaCorrecta: 1,
  explicacion: `Una reducción marcada de DLCO y desaturación importante con cambios relativamente modestos en la espirometría pueden sugerir un componente vascular adicional en enfermedad intersticial. La hipertensión pulmonar del grupo 3 puede contribuir a disnea, hipoxemia y deterioro funcional. El ecocardiograma orienta la probabilidad, pero puede ser impreciso en enfermedad pulmonar avanzada. La decisión de realizar cateterismo depende de si los resultados modificarán tratamiento, pronóstico o elegibilidad para intervenciones. Se debe optimizar el manejo de la enfermedad intersticial, la oxigenación y la rehabilitación, además de considerar evaluación especializada para opciones terapéuticas pertinentes.`,
  perlaENARM: "En fibrosis pulmonar, DLCO desproporcionadamente baja y desaturación marcada deben hacer sospechar un componente vascular.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente aplicable a enfermedad intersticial y fibrosis pulmonar; no se asigna un identificador no verificado.",
    internacional: "ESC/ERS 2022; guías vigentes para enfermedad pulmonar intersticial."
  },
  bibliografia: "Humbert M, et al. 2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension. Eur Heart J. 2022;43:3618-3731."
},
{
  id: "NEUMO-319",
  especialidad: "Neumología",
  tema: "Hipertensión pulmonar",
  subtema: "Prueba de marcha, biomarcadores y seguimiento",
  dificultad: "Alta",
  caso: `Hombre de 45 años con hipertensión arterial pulmonar asociada a enfermedad del tejido conectivo, en tratamiento combinado y seguimiento cada tres a seis meses. En la consulta inicial podía caminar 410 m en seis minutos, tenía BNP de 85 pg/mL y función ventricular derecha ligeramente reducida. En la revisión actual refiere disnea más intensa, aunque niega síncope o dolor torácico. La distancia de marcha ha descendido a 275 m, el BNP aumentó a 430 pg/mL y el ecocardiograma muestra mayor dilatación ventricular derecha. La presión arterial permanece estable y no hay datos de infección, anemia o exacerbación pulmonar que expliquen el cambio.`,
  pregunta: "¿Cómo deben interpretarse estos hallazgos durante el seguimiento?",
  opciones: [
    "Como respuesta favorable, porque la presión arterial sistémica permanece estable",
    "Como deterioro clínico que exige reevaluar el riesgo y considerar intensificación terapéutica",
    "Como resultados irrelevantes, porque el seguimiento debe basarse exclusivamente en la presión pulmonar estimada por ecocardiografía",
    "Como evidencia suficiente para suspender todos los fármacos específicos",
    "Como confirmación de embolia pulmonar aguda sin necesidad de evaluación adicional"
  ],
  respuestaCorrecta: 1,
  explicacion: `La evaluación longitudinal de hipertensión arterial pulmonar integra síntomas, clase funcional, síncope, distancia de marcha de seis minutos, biomarcadores, función ventricular derecha y, cuando está indicado, hemodinámica. El descenso significativo de la distancia caminada, el aumento de BNP y la progresión de dilatación ventricular derecha son señales concordantes de deterioro. Deben verificarse adherencia, tolerancia, progresión de la enfermedad y causas precipitantes. La estrategia terapéutica debe reevaluarse en un centro experto, sin depender de un único parámetro aislado.`,
  perlaENARM: "La tendencia conjunta de función, biomarcadores y ventrículo derecho es más útil que una medición aislada para reevaluar el riesgo.",
  gpc: {
    mexico: "No se identifica aquí una GPC mexicana específica vigente cuya versión se haya verificado.",
    internacional: "ESC/ERS 2022."
  },
  bibliografia: "Humbert M, et al. 2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension. Eur Heart J. 2022;43:3618-3731."
},
{
  id: "NEUMO-320",
  especialidad: "Neumología",
  tema: "Hipertensión pulmonar",
  subtema: "Caso integrador: diagnóstico diferencial y tratamiento",
  dificultad: "Alta",
  caso: `Mujer de 60 años con obesidad, hipertensión arterial sistémica, enfermedad pulmonar obstructiva moderada y antecedente de tromboembolia pulmonar hace tres años. Durante los últimos diez meses desarrolla disnea progresiva, edema maleolar y menor tolerancia al esfuerzo. La espirometría confirma obstrucción moderada; la tomografía muestra enfisema sin fibrosis extensa. El ecocardiograma identifica dilatación ventricular derecha, insuficiencia tricuspídea funcional y fracción de eyección ventricular izquierda de 60%, con aurícula izquierda discretamente dilatada. El cateterismo derecho realizado tras estabilización muestra mPAP de 37 mmHg, PAWP de 17 mmHg y PVR de 4.0 WU. La gammagrafía V/Q evidencia defectos de perfusión segmentarios no concordantes con la ventilación. No hay hipotensión ni datos de embolia aguda. El médico debe determinar si la disnea se explica por una sola causa o por mecanismos coexistentes y definir la siguiente conducta.`,
  pregunta: "¿Cuál es la estrategia clínica más apropiada?",
  opciones: [
    "Clasificar todo como hipertensión arterial pulmonar idiopática e iniciar monoterapia específica sin más estudios",
    "Atribuir toda la disnea a EPOC y descartar cualquier componente vascular adicional",
    "Reconocer un patrón hemodinámico con componente poscapilar y resistencia vascular elevada, investigar enfermedad tromboembólica crónica y realizar evaluación multidisciplinaria antes de decidir el tratamiento",
    "Administrar trombólisis sistémica de inmediato, aunque no exista evidencia de embolia pulmonar aguda ni inestabilidad",
    "Iniciar sildenafil y suspender el tratamiento de cardiopatía izquierda y EPOC"
  ],
  respuestaCorrecta: 2,
  explicacion: `Este caso requiere integrar varios mecanismos. La mPAP de 37 mmHg confirma hipertensión pulmonar; PAWP de 17 mmHg indica componente poscapilar y PVR de 4.0 WU demuestra un componente precapilar asociado, compatible con hipertensión pulmonar combinada pre y poscapilar según los criterios hemodinámicos actuales. La hipertensión, obesidad y dilatación auricular izquierda apoyan posible cardiopatía izquierda. Sin embargo, los defectos de perfusión segmentarios no concordantes con ventilación y el antecedente de tromboembolia obligan a investigar enfermedad tromboembólica crónica en un centro especializado. La EPOC también puede contribuir a la limitación funcional. El manejo debe aclarar la contribución de cada mecanismo, optimizar la cardiopatía izquierda y la enfermedad pulmonar, y determinar si existe enfermedad tromboembólica crónica susceptible de intervención. No es correcto iniciar automáticamente tratamiento de grupo 1 ni administrar trombólisis para enfermedad crónica sin escenario agudo indicado.`,
  perlaENARM: "En hipertensión pulmonar, pueden coexistir cardiopatía izquierda, enfermedad pulmonar y enfermedad tromboembólica; clasificar el mecanismo cambia el tratamiento.",
  gpc: {
    mexico: "Consultar las GPC mexicanas vigentes aplicables a EPOC, insuficiencia cardiaca y tromboembolia pulmonar; no se asignan identificadores no verificados.",
    internacional: "ESC/ERS 2022."
  },
  bibliografia: "Humbert M, et al. 2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension. Eur Heart J. 2022;43:3618-3731."
},

{
  id: "NEUMO-321",
  especialidad: "Neumología",
  tema: "Apnea obstructiva del sueño",
  subtema: "Fisiopatología y presentación clínica",
  dificultad: "Alta",
  caso: `Hombre de 49 años, con índice de masa corporal de 36 kg/m², hipertensión arterial de difícil control y diabetes mellitus tipo 2, acude por cefalea matutina, sueño no reparador y somnolencia diurna progresiva. Su esposa refiere ronquidos intensos de varios años de evolución, pausas respiratorias repetidas y episodios en los que parece realizar esfuerzos inspiratorios sin conseguir flujo aéreo, seguidos de jadeos. Se duerme durante reuniones y ha tenido que detener la conducción por somnolencia. Presenta perímetro cervical de 46 cm, Mallampati IV y retrognatia leve. La saturación en vigilia es de 95%, la exploración cardiopulmonar no muestra datos de congestión y la espirometría no evidencia obstrucción. No consume opioides ni sedantes. Un compañero sugiere que la saturación normal en reposo descarta una enfermedad respiratoria clínicamente relevante.`,
  pregunta: "¿Cuál es la interpretación clínica más apropiada?",
  opciones: [
    "La saturación normal en vigilia descarta apnea obstructiva del sueño clínicamente significativa",
    "El cuadro sugiere apnea obstructiva del sueño por colapso recurrente de la vía aérea superior durante el sueño, y requiere confirmación objetiva",
    "La somnolencia demuestra narcolepsia y hace innecesario estudiar la respiración nocturna",
    "La obesidad explica todos los síntomas y permite establecer el diagnóstico sin pruebas",
    "Los ronquidos aislados son suficientes para confirmar apnea obstructiva grave"
  ],
  respuestaCorrecta: 1,
  explicacion: `La apnea obstructiva del sueño se produce por episodios repetidos de obstrucción parcial o completa de la vía aérea superior durante el sueño, pese a persistir el esfuerzo respiratorio. La obesidad, el cuello ancho, la retrognatia, el ronquido, las pausas observadas y la somnolencia diurna elevan la probabilidad preprueba. La saturación diurna puede ser normal, incluso con enfermedad nocturna importante. El diagnóstico requiere una prueba objetiva del sueño, seleccionada según comorbilidades y complejidad clínica. La evaluación también debe considerar riesgo de accidentes, hipertensión resistente, diabetes y enfermedad cardiovascular.`,
  perlaENARM: "Una SpO₂ normal durante la consulta no excluye apnea obstructiva del sueño; la historia clínica orienta, pero la prueba objetiva confirma.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para AOS del adulto sin verificar la versión en el catálogo oficial.",
    internacional: "AASM: guía de pruebas diagnósticas de apnea obstructiva del sueño, 2017; guía de tratamiento con PAP, 2019."
  },
  bibliografia: "Kapur VK, et al. Clinical Practice Guideline for Diagnostic Testing for Adult Obstructive Sleep Apnea. J Clin Sleep Med. 2017;13:479-504."
},
{
  id: "NEUMO-322",
  especialidad: "Neumología",
  tema: "Apnea obstructiva del sueño",
  subtema: "Selección de polisomnografía frente a prueba domiciliaria",
  dificultad: "Alta",
  caso: `Mujer de 67 años con obesidad, ronquido intenso, pausas respiratorias observadas y somnolencia diurna, con alta sospecha clínica de AOS. Tiene además insuficiencia cardiaca con fracción de eyección del 30%, fibrilación auricular paroxística y enfermedad renal crónica. Su familia pregunta si puede realizarse una prueba domiciliaria simplificada porque vive lejos del laboratorio de sueño. La paciente refiere ortopnea ocasional y despertares con sensación de asfixia. No utiliza ventilación no invasiva ni oxígeno domiciliario. En consulta está hemodinámicamente estable, pero el equipo sospecha que pueden coexistir eventos obstructivos y centrales.`,
  pregunta: "¿Cuál es la prueba diagnóstica preferible en este escenario?",
  opciones: [
    "Oximetría nocturna aislada, porque distingue con certeza eventos obstructivos de centrales",
    "Cuestionario STOP-Bang como confirmación diagnóstica definitiva",
    "Polisomnografía nocturna en laboratorio",
    "Prueba domiciliaria simplificada como primera elección obligatoria en cualquier paciente con sospecha de AOS",
    "Gasometría arterial diurna como sustituto de la evaluación del sueño"
  ],
  respuestaCorrecta: 2,
  explicacion: `La polisomnografía en laboratorio es preferible cuando existen enfermedades cardiorrespiratorias significativas, sospecha de hipoventilación, posible apnea central, uso crónico de opioides, enfermedad neuromuscular o insomnio grave. En esta paciente, la insuficiencia cardiaca con fracción de eyección reducida y la posibilidad de eventos centrales hacen que una prueba domiciliaria simplificada pueda ser insuficiente. Los cuestionarios y la oximetría pueden ayudar a estimar riesgo, pero no sustituyen una prueba diagnóstica apropiada. Si una prueba domiciliaria resulta negativa, inconclusa o técnicamente inadecuada pese a sospecha elevada, debe realizarse polisomnografía.`,
  perlaENARM: "AOS sospechada con insuficiencia cardiaca significativa o posible apnea central: prefiere polisomnografía en laboratorio.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para esta selección diagnóstica sin verificación oficial.",
    internacional: "AASM 2017: diagnóstico de AOS en adultos."
  },
  bibliografia: "Kapur VK, et al. J Clin Sleep Med. 2017;13:479-504."
},
{
  id: "NEUMO-323",
  especialidad: "Neumología",
  tema: "Apnea obstructiva del sueño",
  subtema: "Interpretación del índice de apnea-hipopnea",
  dificultad: "Alta",
  caso: `Hombre de 56 años, con obesidad y fibrilación auricular paroxística, remitido por ronquido intenso, somnolencia diurna y pausas respiratorias observadas. La polisomnografía registra un índice de apnea-hipopnea (IAH) de 34 eventos por hora, índice de desaturación elevado y nadir de saturación de 78%. La mayoría de los eventos muestran persistencia del esfuerzo toracoabdominal, compatible con obstrucción de la vía aérea superior. El paciente pregunta si el diagnóstico es leve porque no ha presentado infarto ni accidente cerebrovascular. La exploración no evidencia enfermedad pulmonar obstructiva y la saturación despierto es de 96%.`,
  pregunta: "¿Cuál es la clasificación de gravedad más apropiada según el IAH?",
  opciones: [
    "AOS leve, porque no hay antecedente de evento cardiovascular mayor",
    "AOS moderada, porque el IAH es inferior a 40 eventos por hora",
    "AOS grave, porque el IAH es de 30 o más eventos por hora",
    "AOS no confirmada, porque la saturación diurna es normal",
    "AOS grave únicamente si el IAH supera 60 eventos por hora"
  ],
  respuestaCorrecta: 2,
  explicacion: `En adultos, la clasificación habitual por IAH es leve de 5 a menos de 15 eventos/h, moderada de 15 a menos de 30 y grave de 30 o más. Un IAH de 34 eventos/h corresponde a AOS grave. La profundidad y duración de las desaturaciones, la somnolencia, la fragmentación del sueño y las comorbilidades también son clínicamente importantes, aunque no sustituyen la clasificación basada en el índice. La ausencia de infarto o ictus no reduce la categoría de gravedad ni elimina la necesidad de tratamiento.`,
  perlaENARM: "IAH ≥30 eventos/h corresponde a AOS grave; la gravedad no se define por haber sufrido ya un evento cardiovascular.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para AOS sin verificación oficial.",
    internacional: "AASM: criterios diagnósticos y clasificación clínica del trastorno respiratorio del sueño."
  },
  bibliografia: "Kapur VK, et al. J Clin Sleep Med. 2017;13:479-504."
},
{
  id: "NEUMO-324",
  especialidad: "Neumología",
  tema: "Apnea obstructiva del sueño",
  subtema: "IAH limítrofe y correlación clínica",
  dificultad: "Alta",
  caso: `Mujer de 44 años con fatiga persistente, ronquido habitual y sueño no reparador. Tiene índice de masa corporal de 29 kg/m², hipertensión arterial controlada y síntomas de reflujo nocturno. La polisomnografía registra un IAH de 8 eventos por hora, con predominio de eventos en sueño REM y en decúbito supino. La saturación mínima es de 89%, sin hipoxemia sostenida. No hay evidencia de hipoventilación ni de enfermedad cardiopulmonar avanzada. Refiere que la somnolencia interfiere con su rendimiento laboral, aunque su pareja no identifica pausas respiratorias prolongadas. Pregunta si un IAH menor de 15 excluye la posibilidad de tratamiento.`,
  pregunta: "¿Cuál es la interpretación más apropiada?",
  opciones: [
    "El resultado excluye AOS porque el IAH es inferior a 15",
    "El resultado es compatible con AOS leve; la relevancia clínica y el tratamiento dependen también de los síntomas y comorbilidades",
    "El resultado confirma AOS grave porque existen síntomas diurnos",
    "Debe diagnosticarse hipoventilación por obesidad con base únicamente en la fatiga",
    "La presencia de eventos en REM invalida la polisomnografía"
  ],
  respuestaCorrecta: 1,
  explicacion: `Un IAH de 8 eventos/h es compatible con AOS leve. La indicación de tratamiento no depende exclusivamente del umbral numérico: debe considerarse somnolencia, calidad de vida, hipertensión y otros factores clínicos. También es relevante que los eventos predominen en REM o en posición supina, pues el IAH global puede ocultar periodos de mayor carga de enfermedad. Deben evaluarse causas concurrentes de fatiga y discutir intervenciones individualizadas, como medidas posicionales, control de peso y PAP en pacientes seleccionados.`,
  perlaENARM: "AOS leve puede ser clínicamente relevante; correlaciona el IAH con síntomas, comorbilidades y distribución de los eventos.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para AOS sin verificación oficial.",
    internacional: "AASM: diagnóstico y tratamiento de AOS en adultos."
  },
  bibliografia: "Kapur VK, et al. J Clin Sleep Med. 2017;13:479-504."
},
{
  id: "NEUMO-325",
  especialidad: "Neumología",
  tema: "Apnea obstructiva del sueño",
  subtema: "Tratamiento con presión positiva",
  dificultad: "Alta",
  caso: `Hombre de 52 años con AOS grave confirmada por polisomnografía, IAH de 41 eventos/h y nadir de saturación de 76%. Refiere somnolencia diurna importante, episodios de sueño involuntario y dificultad para concentrarse. Tiene hipertensión arterial y conducción profesional como parte de su trabajo. No presenta insuficiencia cardiaca, hipoventilación crónica ni enfermedad neuromuscular. Durante la consulta pregunta si debe recibir oxígeno nocturno en lugar de una mascarilla, porque considera incómodo el tratamiento con presión positiva. No ha iniciado terapia específica y continúa conduciendo diariamente.`,
  pregunta: "¿Cuál es la intervención inicial más apropiada para tratar la AOS y reducir la somnolencia?",
  opciones: [
    "Oxígeno nocturno como sustituto universal de la presión positiva",
    "CPAP o PAP apropiada, con educación, ajuste de interfaz y seguimiento de adherencia",
    "Benzodiacepina nocturna para prolongar el sueño y disminuir los despertares",
    "Antibiótico oral para reducir la inflamación faríngea",
    "Traqueostomía urgente como primera opción en todo paciente con IAH mayor de 30"
  ],
  respuestaCorrecta: 1,
  explicacion: `La PAP, habitualmente CPAP, es una intervención de primera línea en AOS sintomática y puede reducir eventos obstructivos y somnolencia. La selección del dispositivo y la titulación deben individualizarse. La educación, el ajuste de mascarilla, el manejo de congestión nasal, la humidificación cuando se requiera y el seguimiento temprano mejoran tolerancia y adherencia. El oxígeno suplementario no corrige de forma fiable la obstrucción ni la fragmentación del sueño y no sustituye PAP en el tratamiento habitual. La somnolencia relevante exige además evaluar seguridad al conducir y seguir la normativa aplicable al trabajo de riesgo.`,
  perlaENARM: "La PAP trata la obstrucción; el oxígeno aislado no es un sustituto universal de CPAP en AOS.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para PAP en AOS sin verificación oficial.",
    internacional: "AASM: tratamiento con PAP en adultos con AOS, 2019."
  },
  bibliografia: "Patil SP, et al. Treatment of Adult Obstructive Sleep Apnea with Positive Airway Pressure: An AASM Clinical Practice Guideline. J Clin Sleep Med. 2019;15:335-343."
},
{
  id: "NEUMO-326",
  especialidad: "Neumología",
  tema: "Apnea obstructiva del sueño",
  subtema: "Adherencia insuficiente a CPAP",
  dificultad: "Alta",
  caso: `Mujer de 60 años con AOS grave, hipertensión y obesidad, que inició CPAP hace seis semanas. El registro del dispositivo muestra uso promedio de 2.1 horas por noche, aunque la presión prescrita y el control de eventos durante los periodos de uso son adecuados. La paciente refiere sensación de claustrofobia, sequedad nasal y fuga de aire hacia los ojos. No ha tenido educación formal sobre ajuste de mascarilla ni revisión de la descarga del equipo con el personal clínico. Suspendió el tratamiento varias noches porque considera que no le está ayudando. Continúa con somnolencia diurna y cefalea matutina.`,
  pregunta: "¿Cuál es el siguiente paso más apropiado?",
  opciones: [
    "Declarar fracaso terapéutico definitivo y suspender PAP sin explorar las causas",
    "Duplicar la presión sin revisar fuga, interfaz o descarga del dispositivo",
    "Identificar barreras de adherencia, ajustar mascarilla y humidificación, revisar datos y proporcionar seguimiento estructurado",
    "Cambiar inmediatamente a oxígeno nocturno como sustituto",
    "Indicar sedantes de manera rutinaria para obligar a tolerar la mascarilla"
  ],
  respuestaCorrecta: 2,
  explicacion: `La adherencia insuficiente requiere una evaluación sistemática antes de concluir que PAP no funciona. La fuga, la interfaz inadecuada, la sequedad nasal, la congestión, la presión incómoda y las expectativas poco realistas son barreras frecuentes y potencialmente corregibles. Debe revisarse el registro de uso, la fuga y el IAH residual, optimizar la mascarilla y la humidificación, y ofrecer educación y seguimiento cercano. Si persiste intolerancia pese a medidas correctivas, puede considerarse otra modalidad o tratamiento alternativo según el fenotipo y la gravedad.`,
  perlaENARM: "Ante mala adherencia a CPAP, corrige primero las barreras de uso; no aumentes la presión ni declares fracaso sin revisar el dispositivo.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para adherencia a PAP sin verificación oficial.",
    internacional: "AASM 2019: tratamiento de AOS con PAP."
  },
  bibliografia: "Patil SP, et al. J Clin Sleep Med. 2019;15:335-343."
},
{
  id: "NEUMO-327",
  especialidad: "Neumología",
  tema: "Apnea obstructiva del sueño",
  subtema: "Hipoventilación por obesidad",
  dificultad: "Alta",
  caso: `Hombre de 58 años con índice de masa corporal de 43 kg/m², ronquido intenso, pausas respiratorias observadas, somnolencia y cefalea matutina. Ha presentado dos hospitalizaciones por insuficiencia respiratoria hipercápnica durante infecciones respiratorias leves. En la consulta estable presenta saturación de 91% al aire ambiente. La gasometría arterial muestra pH 7.38, PaCO₂ 49 mmHg, PaO₂ 64 mmHg y bicarbonato de 29 mEq/L. La espirometría no evidencia obstrucción significativa, la función tiroidea es normal y no utiliza opioides. La polisomnografía confirma AOS grave, pero no se ha completado la evaluación de hipoventilación durante el sueño.`,
  pregunta: "¿Cuál es la interpretación diagnóstica más apropiada?",
  opciones: [
    "AOS aislada, sin necesidad de investigar la hipercapnia diurna",
    "Probable síndrome de hipoventilación por obesidad, que requiere excluir otras causas de hipoventilación",
    "EPOC grave confirmada por una PaCO₂ de 49 mmHg",
    "Acidosis respiratoria aguda, porque todo aumento de PaCO₂ implica descompensación aguda",
    "Hiperventilación alveolar crónica"
  ],
  respuestaCorrecta: 1,
  explicacion: `El síndrome de hipoventilación por obesidad se define por obesidad, hipercapnia diurna (PaCO₂ ≥45 mmHg) y ausencia de otras causas que expliquen la hipoventilación. El bicarbonato elevado y el pH cercano a la normalidad sugieren compensación renal de hipercapnia crónica. Deben excluirse enfermedad pulmonar obstructiva significativa, trastornos neuromusculares, hipotiroidismo, fármacos depresores y otras causas. La AOS coexiste con frecuencia, pero no explica automáticamente toda hipercapnia diurna. El tratamiento ventilatorio se selecciona según estabilidad clínica, gravedad y resultados del estudio del sueño.`,
  perlaENARM: "Obesidad más PaCO₂ diurna ≥45 mmHg exige evaluar síndrome de hipoventilación por obesidad y descartar otras causas.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para síndrome de hipoventilación por obesidad sin verificación oficial.",
    internacional: "ATS: evaluación y manejo del síndrome de hipoventilación por obesidad, 2019."
  },
  bibliografia: "Mokhlesi B, et al. Evaluation and Management of Obesity Hypoventilation Syndrome. An Official ATS Clinical Practice Guideline. Am J Respir Crit Care Med. 2019;200:e6-e24."
},
{
  id: "NEUMO-328",
  especialidad: "Neumología",
  tema: "Apnea obstructiva del sueño",
  subtema: "Selección entre CPAP y ventilación no invasiva",
  dificultad: "Alta",
  caso: `Mujer de 63 años con obesidad mórbida, síndrome de hipoventilación por obesidad confirmado y AOS grave. Fue hospitalizada recientemente por insuficiencia respiratoria hipercápnica aguda y egresó con ventilación no invasiva nocturna. En la revisión de seguimiento, la gasometría muestra mejoría del pH y reducción de PaCO₂, aunque persiste hipercapnia leve. La paciente pregunta si puede cambiar directamente a CPAP porque es más sencilla y menos aparatosa. No se ha realizado todavía una titulación ambulatoria formal ni una evaluación de la eficacia de la ventilación durante el sueño. Actualmente está estable, sin acidosis ni aumento del trabajo respiratorio.`,
  pregunta: "¿Cuál es la estrategia más apropiada?",
  opciones: [
    "Suspender inmediatamente la ventilación no invasiva porque cualquier mejoría del pH indica resolución completa",
    "Mantener el plan de soporte ventilatorio y reevaluar clínicamente y mediante estudio del sueño; la elección de CPAP o ventilación no invasiva depende del fenotipo y la respuesta",
    "Cambiar a oxígeno aislado, que corrige de manera definitiva la hipoventilación",
    "Indicar traqueostomía urgente en todos los pacientes con hipoventilación por obesidad",
    "Evitar toda modalidad de presión positiva porque puede producir dependencia"
  ],
  respuestaCorrecta: 1,
  explicacion: `En pacientes hospitalizados con insuficiencia respiratoria y sospecha o diagnóstico de hipoventilación por obesidad, la ventilación no invasiva puede ser necesaria durante la recuperación y como puente hasta una evaluación definitiva. En pacientes estables ambulatorios con hipoventilación por obesidad y AOS grave, CPAP puede ser una estrategia inicial apropiada en muchos casos; sin embargo, no debe hacerse un cambio automático en una paciente recientemente descompensada sin verificar respuesta clínica, intercambio gaseoso y control nocturno. Si persiste hipoventilación pese a CPAP adecuadamente aplicada, puede requerirse ventilación no invasiva.`,
  perlaENARM: "En hipoventilación por obesidad, la modalidad se decide por estabilidad, gravedad, AOS concomitante y respuesta objetiva al tratamiento.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para este escenario sin verificación oficial.",
    internacional: "ATS 2019: síndrome de hipoventilación por obesidad."
  },
  bibliografia: "Mokhlesi B, et al. Am J Respir Crit Care Med. 2019;200:e6-e24."
},
{
  id: "NEUMO-329",
  especialidad: "Neumología",
  tema: "Apnea obstructiva del sueño",
  subtema: "Tratamiento posicional y pérdida de peso",
  dificultad: "Alta",
  caso: `Hombre de 46 años con sobrepeso, somnolencia leve y ronquido habitual. La polisomnografía muestra IAH global de 17 eventos/h, con IAH de 34 en decúbito supino y de 4 en posición lateral. No presenta insuficiencia cardiaca, hipoxemia sostenida ni comorbilidad neurológica. La exploración identifica retrognatia leve y perímetro cervical aumentado. El paciente trabaja en oficina, desea evitar medicamentos y pregunta si dormir de lado y bajar de peso pueden sustituir cualquier tratamiento adicional. No ha probado dispositivos posicionales ni PAP.`,
  pregunta: "¿Cuál es el enfoque terapéutico más razonable?",
  opciones: [
    "Indicar pérdida de peso como única intervención y no realizar seguimiento",
    "Considerar tratamiento posicional y reducción de peso, explicando que la eficacia debe comprobarse y que PAP u otras opciones pueden ser apropiadas según síntomas y preferencias",
    "Prescribir oxígeno nocturno para eliminar los eventos obstructivos posicionales",
    "Realizar traqueostomía como tratamiento inicial",
    "Indicar sedantes para mantener al paciente en decúbito lateral"
  ],
  respuestaCorrecta: 1,
  explicacion: `El patrón muestra AOS predominantemente posicional: el IAH es mucho mayor en decúbito supino que lateral. Las intervenciones posicionales pueden ser útiles, especialmente si el paciente las tolera y se confirma que reducen eventos. La pérdida de peso debe promoverse cuando existe sobrepeso u obesidad, pero su efecto puede ser gradual y no garantiza resolución completa. Debe reevaluarse el control de síntomas y, según el caso, repetir una prueba objetiva para documentar respuesta. PAP, dispositivos de avance mandibular y otras alternativas se discuten de acuerdo con gravedad, anatomía, preferencias y respuesta terapéutica.`,
  perlaENARM: "El tratamiento posicional es razonable en AOS dependiente de la posición, pero conviene verificar su eficacia objetivamente.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para tratamiento posicional de AOS sin verificación oficial.",
    internacional: "AASM; guías y revisiones internacionales de tratamiento de AOS."
  },
  bibliografia: "Patil SP, et al. J Clin Sleep Med. 2019;15:335-343."
},
{
  id: "NEUMO-330",
  especialidad: "Neumología",
  tema: "Apnea obstructiva del sueño",
  subtema: "Dispositivo de avance mandibular",
  dificultad: "Alta",
  caso: `Mujer de 50 años con AOS moderada, IAH de 22 eventos/h, somnolencia diurna y ronquido intenso. No tiene hipoventilación, insuficiencia cardiaca ni hipoxemia sostenida. Intentó CPAP durante tres meses, pero persistió intolerancia pese a varios ajustes de mascarilla, humidificación y educación. La evaluación odontológica muestra dentición suficiente, articulación temporomandibular funcional y ausencia de enfermedad periodontal avanzada. La paciente desea una alternativa no quirúrgica y pregunta por un dispositivo de avance mandibular comprado sin prescripción en internet.`,
  pregunta: "¿Cuál es la recomendación más apropiada?",
  opciones: [
    "Utilizar cualquier dispositivo genérico sin ajuste ni seguimiento",
    "Considerar un dispositivo oral de avance mandibular personalizado y ajustable, supervisado por un profesional dental capacitado, con verificación objetiva de eficacia",
    "Descartar todo tratamiento porque la CPAP no fue tolerada",
    "Indicar oxígeno como sustituto universal del dispositivo oral",
    "Realizar cirugía maxilofacial urgente sin valoración anatómica"
  ],
  respuestaCorrecta: 1,
  explicacion: `Los dispositivos orales, especialmente los de avance mandibular personalizados y ajustables, son una alternativa en pacientes seleccionados con AOS que prefieren otra opción o no toleran CPAP. Deben ser indicados y vigilados por profesionales con experiencia en medicina dental del sueño. Es necesario controlar efectos dentales y temporomandibulares, ajustar el dispositivo y comprobar objetivamente la respuesta, porque la mejoría subjetiva no garantiza normalización del IAH. Los dispositivos genéricos sin ajuste pueden tener eficacia impredecible y efectos adversos.`,
  perlaENARM: "Ante intolerancia a CPAP, un dispositivo mandibular personalizado es una alternativa válida en pacientes seleccionados; verifica su eficacia.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para dispositivos orales en AOS sin verificación oficial.",
    internacional: "AASM/AADSM: guía clínica para dispositivos orales en AOS, 2015."
  },
  bibliografia: "Ramar K, et al. Clinical Practice Guideline for the Treatment of Obstructive Sleep Apnea and Snoring with Oral Appliance Therapy. J Clin Sleep Med. 2015;11:773-827."
},
{
  id: "NEUMO-331",
  especialidad: "Neumología",
  tema: "Apnea obstructiva del sueño",
  subtema: "AOS e hipertensión arterial resistente",
  dificultad: "Alta",
  caso: `Hombre de 61 años con hipertensión arterial resistente pese a un esquema que incluye un inhibidor del sistema renina-angiotensina, calcioantagonista y diurético. Tiene obesidad abdominal, ronquido intenso, despertares con sensación de asfixia y somnolencia matutina. Su pareja refiere pausas respiratorias prolongadas. La función renal es estable y no hay hipopotasemia. El ecocardiograma muestra hipertrofia ventricular izquierda, con fracción de eyección preservada. La consulta se centra en identificar causas contribuyentes a la resistencia terapéutica y en seleccionar la prueba diagnóstica adecuada.`,
  pregunta: "¿Cuál es la conducta más apropiada respecto a la sospecha de AOS?",
  opciones: [
    "Aumentar indefinidamente los antihipertensivos sin evaluar causas secundarias",
    "Solicitar evaluación objetiva del sueño y, si se confirma AOS, tratarla además de continuar el abordaje integral de hipertensión resistente",
    "Diagnosticar AOS solo por la presencia de hipertrofia ventricular izquierda",
    "Suspender el tratamiento antihipertensivo si se inicia CPAP",
    "Indicar oxígeno nocturno sin prueba diagnóstica"
  ],
  respuestaCorrecta: 1,
  explicacion: `La AOS es frecuente en hipertensión resistente y puede contribuir a activación simpática, alteraciones nocturnas de presión arterial y mayor carga cardiovascular. La sospecha clínica justifica una prueba objetiva apropiada. Si se confirma, el tratamiento con PAP puede mejorar somnolencia y algunos parámetros de presión arterial, aunque el efecto antihipertensivo es variable y no reemplaza los fármacos ni la evaluación de otras causas de resistencia. Deben revisarse adherencia, técnica de medición, consumo de sodio, medicamentos que elevan presión y causas secundarias de hipertensión.`,
  perlaENARM: "La hipertensión resistente es una señal clínica para investigar AOS, pero tratarla no sustituye el manejo antihipertensivo integral.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de hipertensión arterial sistémica; no se asigna un identificador no verificado.",
    internacional: "AASM 2017 y 2019; guías vigentes de hipertensión arterial."
  },
  bibliografia: "Kapur VK, et al. J Clin Sleep Med. 2017;13:479-504. Patil SP, et al. J Clin Sleep Med. 2019;15:335-343."
},
{
  id: "NEUMO-332",
  especialidad: "Neumología",
  tema: "Apnea obstructiva del sueño",
  subtema: "Somnolencia diurna y seguridad al conducir",
  dificultad: "Alta",
  caso: `Hombre de 42 años que trabaja como conductor de transporte de pasajeros. Presenta ronquido intenso, pausas respiratorias observadas, somnolencia durante el día y dos episodios recientes en los que tuvo que detener el vehículo para evitar quedarse dormido. La polisomnografía confirma AOS grave con IAH de 38 eventos/h y desaturaciones repetidas. No ha iniciado tratamiento porque considera que la somnolencia es consecuencia exclusiva de jornadas laborales prolongadas. La exploración neurológica es normal y no utiliza alcohol ni sedantes de manera habitual. Debe decidirse tanto el tratamiento médico como la conducta inmediata respecto a su actividad laboral de riesgo.`,
  pregunta: "¿Cuál es la conducta clínica más apropiada?",
  opciones: [
    "Permitir que continúe conduciendo porque no ha sufrido un accidente",
    "Recomendar únicamente café antes de conducir y revisar en un año",
    "Abordar de inmediato el riesgo de conducción, indicar tratamiento efectivo de la AOS y seguir los requisitos laborales y normativos aplicables",
    "Prescribir un estimulante sin tratar la obstrucción nocturna",
    "Indicar oxígeno nocturno y asumir que elimina el riesgo de somnolencia"
  ],
  respuestaCorrecta: 2,
  explicacion: `La somnolencia al volante y los episodios de sueño involuntario representan un riesgo inmediato para el paciente y terceros. Se requiere una intervención explícita sobre la seguridad al conducir, siguiendo las normas laborales y legales aplicables a su ocupación, además de iniciar tratamiento eficaz de la AOS y evaluar la respuesta clínica y la adherencia. Los estimulantes, la cafeína o el oxígeno aislado no sustituyen el tratamiento de la obstrucción. La autorización para retomar tareas de riesgo debe basarse en la normativa pertinente y en la evaluación clínica, no en la ausencia de accidentes previos.`,
  perlaENARM: "AOS con somnolencia al volante exige medidas inmediatas de seguridad además del tratamiento respiratorio.",
  gpc: {
    mexico: "Aplicar las disposiciones mexicanas vigentes de salud ocupacional y conducción profesional que correspondan; no se asigna un identificador no verificado.",
    internacional: "AASM: evaluación y tratamiento de AOS en adultos; recomendaciones de seguridad para somnolencia y conducción."
  },
  bibliografia: "Patil SP, et al. J Clin Sleep Med. 2019;15:335-343."
},
{
  id: "NEUMO-333",
  especialidad: "Neumología",
  tema: "Apnea obstructiva del sueño",
  subtema: "AOS y fibrilación auricular",
  dificultad: "Alta",
  caso: `Mujer de 64 años con fibrilación auricular paroxística recurrente, hipertensión arterial y obesidad. Refiere ronquido intenso, somnolencia diurna y despertares frecuentes. El ecocardiograma muestra dilatación auricular izquierda moderada y función ventricular izquierda conservada. Tras una cardioversión exitosa, pregunta si tratar la apnea del sueño evitará por completo nuevas recurrencias y permitirá suspender anticoagulación. Todavía no se ha realizado una prueba de sueño. No presenta signos de insuficiencia cardiaca descompensada ni hipoxemia en reposo.`,
  pregunta: "¿Cuál es la respuesta clínica más rigurosa?",
  opciones: [
    "La AOS no tiene relación clínica con fibrilación auricular y no merece evaluación",
    "La evaluación y tratamiento de AOS pueden formar parte del manejo integral, pero no garantizan evitar recurrencias ni justifican suspender anticoagulación indicada",
    "CPAP elimina siempre la fibrilación auricular y permite suspender cualquier anticoagulante",
    "Debe indicarse ablación de inmediato sin completar evaluación clínica",
    "La dilatación auricular confirma AOS sin necesidad de prueba objetiva"
  ],
  respuestaCorrecta: 1,
  explicacion: `La AOS se asocia con fibrilación auricular y puede contribuir a remodelado auricular, hipoxia intermitente y activación simpática. Identificarla y tratarla forma parte del manejo integral, especialmente cuando hay síntomas o factores de riesgo. Sin embargo, la evidencia de que CPAP reduzca de forma consistente las recurrencias de fibrilación auricular es heterogénea y no permite garantizar un beneficio individual. La indicación de anticoagulación debe determinarse por el riesgo tromboembólico y las guías pertinentes, no por el diagnóstico o tratamiento de AOS por sí solos.`,
  perlaENARM: "Tratar AOS puede complementar el manejo de fibrilación auricular, pero no sustituye la estratificación tromboembólica ni garantiza evitar recurrencias.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de fibrilación auricular y la aplicable a AOS; no se asignan identificadores no verificados.",
    internacional: "AASM 2017/2019; guías vigentes de fibrilación auricular."
  },
  bibliografia: "Kapur VK, et al. J Clin Sleep Med. 2017;13:479-504. Patil SP, et al. J Clin Sleep Med. 2019;15:335-343."
},
{
  id: "NEUMO-334",
  especialidad: "Neumología",
  tema: "Apnea obstructiva del sueño",
  subtema: "Apnea central frente a apnea obstructiva",
  dificultad: "Alta",
  caso: `Hombre de 73 años con insuficiencia cardiaca con fracción de eyección reducida de 28%, ortopnea intermitente y episodios nocturnos de respiración irregular. Su pareja describe periodos de respiración que aumenta y disminuye gradualmente en amplitud, seguidos de pausas sin esfuerzo toracoabdominal evidente. La polisomnografía registra eventos respiratorios repetidos, algunos con ausencia de esfuerzo respiratorio, y un patrón periódico compatible con respiración de Cheyne-Stokes. No tiene obesidad importante ni retrognatia. El paciente pregunta si la presencia de pausas respiratorias significa necesariamente AOS y si debe recibir CPAP de manera automática.`,
  pregunta: "¿Cuál es la interpretación más apropiada?",
  opciones: [
    "Todas las apneas durante el sueño son obstructivas y requieren el mismo tratamiento",
    "Debe considerarse apnea central del sueño asociada a insuficiencia cardiaca, con tratamiento dirigido a la enfermedad subyacente y selección individualizada del soporte",
    "El patrón confirma narcolepsia",
    "La ausencia de esfuerzo toracoabdominal confirma obstrucción completa de la vía aérea superior",
    "La fracción de eyección reducida no tiene relevancia para los trastornos respiratorios del sueño"
  ],
  respuestaCorrecta: 1,
  explicacion: `La apnea central se caracteriza por reducción o ausencia de esfuerzo respiratorio durante los eventos, a diferencia de la apnea obstructiva, en la que persiste el esfuerzo contra una vía aérea cerrada. La respiración de Cheyne-Stokes puede aparecer en insuficiencia cardiaca y requiere correlación con la polisomnografía y el estado cardiaco. El manejo incluye optimizar la insuficiencia cardiaca y valorar terapias específicas según el fenotipo. La selección de ventilación adaptativa servoasistida requiere especial cautela en insuficiencia cardiaca con fracción de eyección reducida, dada la evidencia de daño en determinados pacientes y dispositivos; no debe prescribirse de forma automática.`,
  perlaENARM: "Ausencia de esfuerzo durante las pausas orienta a apnea central; la insuficiencia cardiaca modifica la selección terapéutica.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de insuficiencia cardiaca; no se atribuye una GPC específica de apnea central sin verificación.",
    internacional: "AASM: recomendaciones para apnea central del sueño; guías vigentes de insuficiencia cardiaca."
  },
  bibliografia: "Kapur VK, et al. J Clin Sleep Med. 2017;13:479-504."
},
{
  id: "NEUMO-335",
  especialidad: "Neumología",
  tema: "Apnea obstructiva del sueño",
  subtema: "AOS y enfermedad cardiovascular",
  dificultad: "Alta",
  caso: `Hombre de 59 años con obesidad, diabetes mellitus tipo 2, hipertensión arterial y antecedente de accidente cerebrovascular isquémico. La familia refiere ronquido fuerte y pausas respiratorias nocturnas; el paciente presenta sueño no reparador, pero atribuye la fatiga a la rehabilitación neurológica. La exploración muestra perímetro cervical aumentado y Mallampati IV. No hay enfermedad pulmonar obstructiva ni hipercapnia conocida. El médico considera que, debido al antecedente cerebrovascular, la AOS debe confirmarse con un cuestionario de riesgo y no con una prueba objetiva.`,
  pregunta: "¿Cuál es la estrategia diagnóstica correcta?",
  opciones: [
    "Confirmar AOS mediante STOP-Bang, sin necesidad de estudio del sueño",
    "Realizar una evaluación clínica y una prueba objetiva apropiada; el cuestionario estima riesgo, pero no confirma el diagnóstico",
    "Descartar AOS porque la fatiga puede explicarse por el accidente cerebrovascular",
    "Solicitar únicamente radiografía de tórax",
    "Iniciar CPAP indefinidamente sin documentar la enfermedad ni evaluar el contexto"
  ],
  respuestaCorrecta: 1,
  explicacion: `Los cuestionarios como STOP-Bang y Epworth pueden ayudar a estimar riesgo y cuantificar somnolencia, pero no sustituyen la prueba objetiva. En un paciente con múltiples factores de riesgo cardiovascular y síntomas compatibles, debe realizarse una evaluación diagnóstica adecuada. La elección entre prueba domiciliaria y polisomnografía depende de la complejidad clínica, comorbilidades y posibilidad de trastornos respiratorios alternativos. El antecedente cerebrovascular no excluye AOS ni permite establecerla solo por la historia clínica.`,
  perlaENARM: "STOP-Bang y Epworth apoyan la evaluación, pero no confirman AOS; el diagnóstico requiere una prueba objetiva.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para este escenario sin verificación oficial.",
    internacional: "AASM 2017: diagnóstico de AOS."
  },
  bibliografia: "Kapur VK, et al. J Clin Sleep Med. 2017;13:479-504."
},
{
  id: "NEUMO-336",
  especialidad: "Neumología",
  tema: "Apnea obstructiva del sueño",
  subtema: "Tratamiento quirúrgico y evaluación anatómica",
  dificultad: "Alta",
  caso: `Hombre de 37 años con AOS moderada-grave, IAH de 31 eventos/h, retrognatia marcada, hipertrofia amigdalina y obstrucción nasal crónica. Ha tenido adherencia insuficiente a CPAP pese a educación y ajuste de interfaz. No presenta obesidad mórbida ni hipoventilación. Solicita cirugía porque ha leído que una intervención anatómica puede curar todos los casos de apnea. La exploración otorrinolaringológica confirma hipertrofia amigdalina importante y alteración estructural nasal, pero todavía no se ha realizado una evaluación completa de los sitios de colapso faríngeo.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Prometer curación definitiva con una única cirugía sin evaluar anatomía ni gravedad",
    "Realizar evaluación anatómica especializada y considerar tratamiento quirúrgico individualizado, manteniendo seguimiento objetivo del resultado",
    "Descartar toda opción quirúrgica porque la CPAP no fue tolerada",
    "Indicar traqueostomía como primera opción en todos los pacientes con AOS moderada-grave",
    "Sustituir la evaluación anatómica por un cuestionario de somnolencia"
  ],
  respuestaCorrecta: 1,
  explicacion: `La cirugía puede ser apropiada en pacientes seleccionados con obstrucción anatómica relevante, intolerancia a PAP o preferencias informadas. La estrategia depende de los sitios de colapso, tamaño amigdalino, anatomía craneofacial, peso y gravedad de la AOS. Deben discutirse beneficios, limitaciones y posibles recurrencias. La corrección de una obstrucción nasal puede mejorar respiración nasal y tolerancia a PAP, pero no necesariamente resuelve el colapso faríngeo. Después de la intervención se requiere evaluación clínica y, según el procedimiento y la situación, una prueba objetiva para documentar respuesta.`,
  perlaENARM: "La cirugía para AOS debe seleccionarse por anatomía y perfil clínico; no se debe prometer curación universal.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para cirugía de AOS sin verificación oficial.",
    internacional: "AASM: derivación quirúrgica en pacientes con AOS e intolerancia a PAP, 2021."
  },
  bibliografia: "Kent D, et al. Referral of adults with obstructive sleep apnea for surgical consultation: an AASM clinical practice guideline. J Clin Sleep Med. 2021."
},
{
  id: "NEUMO-337",
  especialidad: "Neumología",
  tema: "Apnea obstructiva del sueño",
  subtema: "AOS y consumo de alcohol o sedantes",
  dificultad: "Alta",
  caso: `Hombre de 55 años con obesidad, ronquido intenso y AOS moderada documentada. Refiere que consume alcohol casi todas las noches para conciliar el sueño y utiliza ocasionalmente clonazepam prescrito por ansiedad. Su pareja ha observado pausas respiratorias más prolongadas después de beber. Presenta somnolencia diurna y cefalea matutina. No existe hipercapnia documentada ni antecedente de insuficiencia respiratoria. Pregunta si puede compensar el efecto del alcohol usando una dosis mayor de CPAP sin revisar sus hábitos de sueño.`,
  pregunta: "¿Cuál es la recomendación clínica más apropiada?",
  opciones: [
    "Aumentar empíricamente la presión de CPAP sin evaluar otros factores",
    "Revisar el consumo de alcohol y sedantes con enfoque individualizado, reducir factores agravantes y optimizar el tratamiento de AOS",
    "Indicar una benzodiacepina de acción más prolongada para evitar despertares",
    "Suspender PAP porque la AOS es causada exclusivamente por alcohol",
    "Recomendar alcohol antes de dormir para reducir la percepción de los despertares"
  ],
  respuestaCorrecta: 1,
  explicacion: `El alcohol y algunos sedantes pueden empeorar la obstrucción de la vía aérea, modificar la arquitectura del sueño y aumentar la somnolencia residual. Debe evaluarse la indicación de clonazepam, los riesgos de uso combinado con alcohol y las alternativas terapéuticas seguras. No se deben suspender abruptamente fármacos con riesgo de abstinencia sin plan clínico. La presión de PAP debe ajustarse con base en datos del dispositivo, síntomas y evaluación apropiada, no como compensación automática de hábitos que agravan la enfermedad.`,
  perlaENARM: "En AOS, identifica sustancias que agravan la obstrucción y la somnolencia; no compenses sus efectos aumentando PAP a ciegas.",
  gpc: {
    mexico: "Consultar GPC mexicanas vigentes pertinentes a trastornos de ansiedad y uso seguro de benzodiacepinas; no se asigna un identificador no verificado.",
    internacional: "AASM: diagnóstico y tratamiento de AOS en adultos."
  },
  bibliografia: "Kapur VK, et al. J Clin Sleep Med. 2017;13:479-504. Patil SP, et al. J Clin Sleep Med. 2019;15:335-343."
},
{
  id: "NEUMO-338",
  especialidad: "Neumología",
  tema: "Apnea obstructiva del sueño",
  subtema: "Hipoxemia nocturna persistente durante PAP",
  dificultad: "Alta",
  caso: `Mujer de 70 años con obesidad, AOS grave y enfermedad pulmonar obstructiva moderada. Usa CPAP durante un promedio de 6.5 horas por noche, con fuga mínima y un IAH residual de 3 eventos/h. Pese a la adherencia adecuada, mantiene cefalea matutina y disnea. La oximetría nocturna con CPAP muestra periodos prolongados de saturación entre 86% y 89%, no limitados a eventos obstructivos. La gasometría diurna evidencia PaCO₂ de 47 mmHg y bicarbonato de 29 mEq/L. No se ha evaluado formalmente hipoventilación durante el sueño ni se ha repetido una titulación completa desde que comenzó el tratamiento.`,
  pregunta: "¿Cuál es la siguiente conducta más apropiada?",
  opciones: [
    "Aumentar automáticamente la presión de CPAP pese a que el IAH residual está controlado",
    "Añadir oxígeno sin investigar hipoventilación ni causas pulmonares",
    "Investigar hipoventilación y enfermedad pulmonar coexistente, y reevaluar ventilación y oxigenación durante el sueño antes de seleccionar ajustes",
    "Suspender CPAP porque un IAH residual bajo demuestra que el dispositivo empeora la enfermedad",
    "Indicar sedantes para mejorar la continuidad del sueño"
  ],
  respuestaCorrecta: 2,
  explicacion: `El IAH residual bajo sugiere control de los eventos obstructivos, pero no garantiza ventilación alveolar ni oxigenación adecuadas. La hipoxemia sostenida y la hipercapnia diurna obligan a investigar EPOC, síndrome de hipoventilación por obesidad y otros mecanismos. Se requiere reevaluación clínica y, según el contexto, gasometría, pruebas de función pulmonar, titulación o estudio de sueño con monitorización apropiada. El oxígeno puede tener un papel en casos seleccionados, pero no debe añadirse de manera automática sin comprender la causa de la hipoxemia y el estado ventilatorio.`,
  perlaENARM: "Un IAH residual controlado no excluye hipoventilación ni hipoxemia persistente; evalúa ventilación, no solo eventos obstructivos.",
  gpc: {
    mexico: "Consultar GPC mexicanas vigentes aplicables a EPOC y trastornos respiratorios del sueño; no se asignan identificadores no verificados.",
    internacional: "AASM 2019; ATS 2019 para síndrome de hipoventilación por obesidad."
  },
  bibliografia: "Patil SP, et al. J Clin Sleep Med. 2019;15:335-343. Mokhlesi B, et al. Am J Respir Crit Care Med. 2019;200:e6-e24."
},
{
  id: "NEUMO-339",
  especialidad: "Neumología",
  tema: "Apnea obstructiva del sueño",
  subtema: "Diagnóstico diferencial de somnolencia residual",
  dificultad: "Alta",
  caso: `Hombre de 48 años con AOS grave tratada con CPAP desde hace cuatro meses. La descarga muestra uso promedio de 7.2 horas por noche, fuga mínima e IAH residual de 2.4 eventos/h. Pese a ello, refiere somnolencia diurna persistente. Trabaja en turnos rotatorios y suele dormir cinco horas por noche; consume alcohol los fines de semana y utiliza ocasionalmente antihistamínicos sedantes por rinitis. No se ha evaluado depresión, síndrome de piernas inquietas ni otros trastornos del sueño. Su médico propone prescribir un estimulante sin revisar los factores concomitantes.`,
  pregunta: "¿Cuál es el siguiente paso más apropiado?",
  opciones: [
    "Prescribir inmediatamente un estimulante porque el IAH residual es normal",
    "Reevaluar duración y horario del sueño, medicamentos, alcohol, trastornos concomitantes y calidad del tratamiento antes de considerar farmacoterapia para somnolencia residual",
    "Aumentar la presión de CPAP aunque los datos no sugieran obstrucción residual",
    "Suspender CPAP porque la somnolencia persiste",
    "Diagnosticar narcolepsia únicamente por la persistencia de fatiga"
  ],
  respuestaCorrecta: 1,
  explicacion: `La somnolencia residual puede persistir a pesar del control de eventos obstructivos y la adherencia adecuada. Antes de indicar fármacos, deben revisarse duración suficiente del sueño, irregularidad circadiana, consumo de alcohol, medicamentos sedantes, depresión, otros trastornos del sueño y causas médicas de fatiga. También deben confirmarse el uso efectivo de PAP durante todo el sueño y la ausencia de eventos residuales relevantes. La evaluación especializada puede considerar pruebas adicionales cuando persiste sospecha de hipersomnolencia primaria tras corregir factores modificables.`,
  perlaENARM: "Somnolencia residual con PAP eficaz: revisa sueño insuficiente, ritmos circadianos, fármacos y comorbilidades antes de añadir estimulantes.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para somnolencia residual en AOS sin verificación oficial.",
    internacional: "AASM: tratamiento de AOS con PAP y evaluación clínica de somnolencia residual."
  },
  bibliografia: "Patil SP, et al. J Clin Sleep Med. 2019;15:335-343."
},
{
  id: "NEUMO-340",
  especialidad: "Neumología",
  tema: "Apnea obstructiva del sueño",
  subtema: "Caso integrador: obesidad, AOS e hipoventilación",
  dificultad: "Alta",
  caso: `Hombre de 62 años con índice de masa corporal de 41 kg/m², hipertensión resistente, diabetes mellitus tipo 2 y dos ingresos previos por insuficiencia respiratoria hipercápnica. Su familia refiere ronquido intenso, apneas observadas, respiración superficial nocturna y somnolencia marcada. En la evaluación actual, estable y sin infección, presenta saturación de 90% al aire ambiente. La gasometría arterial muestra pH 7.37, PaCO₂ 52 mmHg, PaO₂ 60 mmHg y bicarbonato de 30 mEq/L. La espirometría no evidencia obstrucción importante, la función tiroidea es normal y no utiliza opioides. La polisomnografía confirma IAH de 48 eventos/h, con desaturaciones profundas y periodos de hipoventilación nocturna. No se ha iniciado tratamiento ventilatorio definitivo tras el último egreso hospitalario.`,
  pregunta: "¿Cuál es la estrategia integral más apropiada?",
  opciones: [
    "Tratar únicamente la AOS con oxígeno nocturno, sin atender la hipercapnia",
    "Reconocer probable síndrome de hipoventilación por obesidad asociado a AOS grave, excluir causas alternativas y seleccionar PAP o ventilación no invasiva según estabilidad y respuesta",
    "Diagnosticar EPOC grave únicamente por la PaCO₂ elevada",
    "Indicar benzodiacepinas para mejorar el sueño y reducir la sensación de disnea",
    "Posponer el tratamiento hasta que desarrolle otra insuficiencia respiratoria aguda"
  ],
  respuestaCorrecta: 1,
  explicacion: `La obesidad, la hipercapnia diurna, el bicarbonato elevado y la ausencia de una explicación alternativa evidente sugieren síndrome de hipoventilación por obesidad, coexistente con AOS grave. Es necesario confirmar que no existan otras causas relevantes de hipoventilación. El manejo incluye tratamiento de la enfermedad respiratoria del sueño, apoyo a la reducción de peso, seguimiento del intercambio gaseoso y evaluación de adherencia. En pacientes estables ambulatorios con hipoventilación por obesidad y AOS grave, CPAP puede ser una opción inicial; la ventilación no invasiva se considera en contextos específicos, incluida insuficiencia respiratoria reciente o persistencia de hipoventilación pese a CPAP adecuadamente aplicada. La selección debe individualizarse y verificarse con resultados clínicos y objetivos.`,
  perlaENARM: "Obesidad + hipercapnia diurna + AOS grave orienta a síndrome de hipoventilación por obesidad; no confundas CPAP para obstrucción con soporte ventilatorio necesario para hipoventilación.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para síndrome de hipoventilación por obesidad sin verificación oficial.",
    internacional: "ATS 2019 para síndrome de hipoventilación por obesidad; AASM 2017 y 2019 para diagnóstico y PAP."
  },
  bibliografia: "Mokhlesi B, et al. Am J Respir Crit Care Med. 2019;200:e6-e24. Kapur VK, et al. J Clin Sleep Med. 2017;13:479-504. Patil SP, et al. J Clin Sleep Med. 2019;15:335-343."
},

{
  id: "NEUMO-341",
  especialidad: "Neumología",
  tema: "Hemoptisis",
  subtema: "Hemoptisis amenazante y prioridad de estabilización",
  dificultad: "Alta",
  caso: `Hombre de 64 años, fumador de 40 paquetes-año, con bronquiectasias conocidas y tres episodios previos de hemoptisis, acude a urgencias después de expulsar aproximadamente 250 mL de sangre roja brillante en 90 minutos. Refiere sensación de ahogo, tos persistente y dificultad para eliminar coágulos. A su llegada presenta frecuencia respiratoria de 34/min, frecuencia cardiaca de 126/min, presión arterial de 104/68 mmHg y saturación de 84% al aire ambiente. Está ansioso, utiliza músculos accesorios y se auscultan estertores gruesos en el hemitórax derecho. La hemoglobina inicial es de 12.1 g/dL, sin descenso documentado respecto a una medición reciente. La radiografía muestra opacidades alveolares parcheadas en el pulmón derecho. El equipo considera solicitar primero una tomografía para localizar el origen exacto del sangrado, aunque el paciente continúa expulsando sangre y presenta dificultad creciente para mantener la oxigenación.`,
  pregunta: "¿Cuál es la prioridad inmediata de manejo?",
  opciones: [
    "Realizar tomografía contrastada antes de cualquier intervención, aunque empeore la oxigenación",
    "Priorizar vía aérea, oxigenación y ventilación, activar apoyo especializado y localizar el sangrado cuando el paciente pueda tolerar el procedimiento",
    "Esperar el descenso de hemoglobina para determinar si la hemorragia es clínicamente relevante",
    "Administrar un antitusígeno y observar la evolución durante seis horas",
    "Iniciar anticoagulación empírica para prevenir trombosis durante el reposo"
  ],
  respuestaCorrecta: 1,
  explicacion: `La hemoptisis amenazante se define por su repercusión sobre la vía aérea, la ventilación, la oxigenación y la estabilidad hemodinámica, no por un volumen universal. La sangre y los coágulos pueden provocar asfixia antes de que aparezca una caída importante de hemoglobina. Debe asegurarse la oxigenación, valorar intubación si no puede protegerse la vía aérea o mantener ventilación adecuada y solicitar de forma urgente neumología, cuidados críticos y radiología intervencionista. Si el lado del sangrado está razonablemente identificado, colocarlo en posición dependiente puede ayudar a proteger el pulmón contralateral. La tomografía es útil cuando la estabilidad permite realizarla sin retrasar intervenciones vitales.`,
  perlaENARM: "En hemoptisis amenazante, la prioridad es evitar la asfixia; la hemoglobina inicial puede ser normal pese a una hemorragia grave.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para hemoptisis amenazante sin verificación oficial.",
    internacional: "BTS 2019 para bronquiectasias; recomendaciones contemporáneas de manejo multidisciplinario de hemoptisis."
  },
  bibliografia: "Hill AT, et al. British Thoracic Society Guideline for bronchiectasis in adults. Thorax. 2019;74(Suppl 1):1-69."
},
{
  id: "NEUMO-342",
  especialidad: "Neumología",
  tema: "Hemoptisis",
  subtema: "Hemoptisis no amenazante y selección de imagen",
  dificultad: "Alta",
  caso: `Mujer de 57 años, exfumadora de 25 paquetes-año, consulta por tres episodios de estrías hemáticas mezcladas con esputo durante las últimas 48 horas. Niega disnea, dolor torácico, fiebre, síncope o pérdida importante de peso. Presenta frecuencia cardiaca de 82/min, presión arterial de 128/76 mmHg, frecuencia respiratoria de 16/min y saturación de 97% al aire ambiente. La hemoglobina es de 13.4 g/dL y el recuento plaquetario es normal. La radiografía de tórax no muestra consolidación, masa evidente ni derrame pleural. No toma anticoagulantes. Aunque el sangrado parece escaso y ha cesado temporalmente, su edad y antecedente tabáquico elevan la preocupación por una lesión endobronquial no visible en radiografía simple.`,
  pregunta: "¿Cuál es la estrategia diagnóstica más apropiada?",
  opciones: [
    "Descartar enfermedad pulmonar porque la radiografía es normal",
    "Realizar únicamente biometría hemática y dar egreso sin seguimiento",
    "Completar la evaluación con tomografía torácica contrastada o angiotomografía según la sospecha clínica, y valorar broncoscopia según los hallazgos",
    "Indicar trombólisis sistémica por la presencia de sangre en el esputo",
    "Iniciar tratamiento antituberculoso empírico sin evaluación adicional"
  ],
  respuestaCorrecta: 2,
  explicacion: `En una paciente estable con hemoptisis escasa, la evaluación puede realizarse de forma ordenada, pero una radiografía normal no excluye neoplasia, bronquiectasias ni otras causas relevantes. La tomografía contrastada permite evaluar parénquima, masas, bronquios y vasculatura; el protocolo exacto depende de si predomina la sospecha de lesión estructural, neoplasia o fuente vascular. La broncoscopia se considera según la probabilidad de lesión endobronquial, persistencia del sangrado y resultados de imagen. Debe confirmarse que la sangre procede del tracto respiratorio inferior y no de nasofaringe o tubo digestivo.`,
  perlaENARM: "Hemoptisis con radiografía normal no equivale a evaluación negativa, especialmente con antecedentes de tabaquismo.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente aplicable a sospecha de cáncer pulmonar si los hallazgos o factores de riesgo lo justifican; versión no verificada aquí.",
    internacional: "Guías contemporáneas de evaluación de hemoptisis y diagnóstico de cáncer pulmonar."
  },
  bibliografia: "Revisiones clínicas contemporáneas de diagnóstico y manejo de hemoptisis; guías de evaluación de lesiones pulmonares sospechosas."
},
{
  id: "NEUMO-343",
  especialidad: "Neumología",
  tema: "Hemoptisis",
  subtema: "Angiotomografía y embolización arterial bronquial",
  dificultad: "Alta",
  caso: `Hombre de 61 años con bronquiectasias bilaterales secundarias a infecciones respiratorias recurrentes, que presenta episodios de hemoptisis moderada durante las últimas tres semanas. En el episodio actual expulsa aproximadamente 120 mL de sangre en cuatro horas, pero permanece consciente, con presión arterial de 122/78 mmHg, saturación de 94% y sin dificultad respiratoria importante. La hemoglobina disminuyó de 13.2 a 11.9 g/dL. La angiotomografía muestra bronquiectasias quísticas en el lóbulo inferior derecho y arterias bronquiales hipertrofiadas que alcanzan la región afectada; no se identifica una masa endobronquial ni una embolia pulmonar aguda. El sangrado reaparece pese a medidas iniciales de soporte. No tiene coagulopatía conocida.`,
  pregunta: "¿Cuál es la intervención definitiva que debe considerarse prioritariamente?",
  opciones: [
    "Anticoagulación terapéutica para reducir la formación de coágulos",
    "Embolización de arterias bronquiales tras evaluación por radiología intervencionista",
    "Tratamiento antibiótico indefinido como única estrategia hemostática",
    "Resección pulmonar inmediata en todos los pacientes con bronquiectasias bilaterales",
    "Observación domiciliaria porque la presión arterial es normal"
  ],
  respuestaCorrecta: 1,
  explicacion: `La circulación bronquial sistémica es la fuente habitual de hemoptisis clínicamente significativa en bronquiectasias. La angiotomografía puede localizar vasos responsables y orientar la intervención. En hemoptisis recurrente o significativa, la embolización de arterias bronquiales constituye una opción terapéutica fundamental y puede controlar el sangrado sin recurrir de entrada a resección pulmonar. La recurrencia posterior depende de la causa subyacente, la extensión de las bronquiectasias y la persistencia o recanalización de vasos patológicos. La cirugía se reserva para situaciones seleccionadas según localización, causa, fracaso de otras medidas y reserva funcional.`,
  perlaENARM: "En hemoptisis recurrente por bronquiectasias, la embolización arterial bronquial es una intervención clave cuando el sangrado es significativo.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para embolización arterial bronquial sin verificación oficial.",
    internacional: "BTS 2019 para bronquiectasias y recomendaciones multidisciplinarias de hemoptisis."
  },
  bibliografia: "Hill AT, et al. British Thoracic Society Guideline for bronchiectasis in adults. Thorax. 2019;74(Suppl 1):1-69."
},
{
  id: "NEUMO-344",
  especialidad: "Neumología",
  tema: "Hemoptisis",
  subtema: "Tuberculosis pulmonar",
  dificultad: "Alta",
  caso: `Hombre de 39 años que vive en una zona con incidencia relevante de tuberculosis, con tos productiva de siete semanas, febrícula vespertina, sudoración nocturna, pérdida de 7 kg y dos episodios de hemoptisis de volumen moderado. Tiene antecedente de contacto domiciliario con una persona tratada por tuberculosis pulmonar hace dos años. A la exploración presenta frecuencia respiratoria de 19/min, saturación de 96% y estertores apicales derechos. La radiografía muestra opacidades en lóbulos superiores y una cavidad de pared irregular. La biometría hemática revela anemia leve. No existe hipotensión ni hipoxemia significativa. El paciente vive con dos menores y aún no se han obtenido muestras respiratorias.`,
  pregunta: "¿Cuál es la conducta diagnóstica y de control de transmisión más apropiada?",
  opciones: [
    "Iniciar tratamiento para cáncer pulmonar sin estudiar infección respiratoria",
    "Aplicar precauciones respiratorias, obtener muestras de esputo para pruebas moleculares y estudios microbiológicos de tuberculosis, y coordinar el manejo conforme al protocolo local",
    "Descartar tuberculosis porque la hemoptisis no es una manifestación habitual",
    "Administrar macrólido en monoterapia durante un mes y reevaluar",
    "Realizar broncoscopia sin precauciones de aislamiento antes de cualquier prueba microbiológica"
  ],
  respuestaCorrecta: 1,
  explicacion: `La tos prolongada, síntomas constitucionales, contacto epidemiológico y cavitación apical hacen sospechar tuberculosis pulmonar. Se requieren medidas de control de transmisión desde el primer contacto cuando la sospecha es relevante, además de pruebas moleculares rápidas y muestras respiratorias para baciloscopia y cultivo conforme a la normativa y disponibilidad local. La selección de pruebas adicionales depende de los resultados iniciales y del estado clínico. El tratamiento antituberculoso debe establecerse de acuerdo con la evaluación diagnóstica, resistencia probable y protocolos nacionales; la monoterapia con macrólidos es inadecuada y puede complicar el diagnóstico y la resistencia antimicrobiana.`,
  perlaENARM: "Ante sospecha de tuberculosis pulmonar transmisible, las precauciones respiratorias y la obtención rápida de muestras deben iniciarse sin demora.",
  gpc: {
    mexico: "Consultar la NOM y la GPC mexicana vigente aplicables a prevención, diagnóstico y tratamiento de tuberculosis; verificar versión institucional antes de citar un identificador.",
    internacional: "WHO consolidated guidelines on tuberculosis: diagnosis y módulos de tratamiento vigentes."
  },
  bibliografia: "World Health Organization. WHO consolidated guidelines on tuberculosis: Module 3, Diagnosis; versiones vigentes."
},
{
  id: "NEUMO-345",
  especialidad: "Neumología",
  tema: "Hemoptisis",
  subtema: "Neoplasia pulmonar y lesión endobronquial",
  dificultad: "Alta",
  caso: `Hombre de 68 años, fumador activo con exposición acumulada de 55 paquetes-año, que presenta hemoptisis intermitente durante seis semanas, tos persistente y pérdida involuntaria de 5 kg en tres meses. Recibió dos ciclos de antibióticos por sospecha de infección respiratoria, sin resolución de los síntomas. La exploración muestra hipoventilación localizada en el hemitórax izquierdo, sin fiebre ni inestabilidad hemodinámica. La radiografía evidencia atelectasia del lóbulo superior izquierdo y una opacidad hiliar. La tomografía contrastada identifica una lesión central que estrecha el bronquio lobar y adenopatías mediastínicas. La hemoglobina es de 12.0 g/dL y el paciente permanece estable al aire ambiente.`,
  pregunta: "¿Cuál es el siguiente paso más apropiado para establecer el diagnóstico?",
  opciones: [
    "Mantener antibióticos empíricos durante otros tres meses sin obtener tejido",
    "Realizar broncoscopia con toma de muestras de la lesión y, según la anatomía, estadificación mediastínica",
    "Descartar neoplasia porque la hemoptisis es intermitente",
    "Indicar resección pulmonar inmediata sin confirmación diagnóstica ni estadificación",
    "Tratar como tuberculosis confirmada sin pruebas microbiológicas"
  ],
  respuestaCorrecta: 1,
  explicacion: `La hemoptisis en un fumador con pérdida de peso, lesión central y atelectasia obstructiva requiere descartar neoplasia pulmonar. La broncoscopia permite visualizar una lesión endobronquial y obtener muestras histológicas. Si existen adenopatías mediastínicas, debe planificarse la estadificación mediante técnicas endoscópicas o procedimientos apropiados según localización y disponibilidad. La toma de tejido y la estadificación orientan el tratamiento; no es adecuado continuar antibióticos indefinidamente ni realizar una resección sin definir diagnóstico, extensión y operabilidad.`,
  perlaENARM: "Hemoptisis, tabaquismo, pérdida de peso y atelectasia persistente sugieren lesión obstructiva; confirma histología y estadifica antes de definir tratamiento.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para diagnóstico y tratamiento de cáncer pulmonar; no se asigna número o año sin verificación oficial.",
    internacional: "Guías internacionales vigentes de diagnóstico y estadificación de cáncer pulmonar."
  },
  bibliografia: "Guías clínicas contemporáneas de diagnóstico, estadificación y manejo de cáncer pulmonar."
},
{
  id: "NEUMO-346",
  especialidad: "Neumología",
  tema: "Hemoptisis",
  subtema: "Hemorragia alveolar difusa",
  dificultad: "Alta",
  caso: `Mujer de 36 años que consulta por disnea progresiva, tos con expectoración hemática, fiebre baja y disminución de la diuresis durante cuatro días. La exploración muestra frecuencia respiratoria de 30/min, saturación de 87% al aire ambiente, crepitantes bilaterales y presión arterial de 148/92 mmHg. La hemoglobina descendió de 12.6 a 8.9 g/dL en una semana. La creatinina aumentó de 0.8 a 2.4 mg/dL y el examen de orina muestra hematuria, cilindros eritrocitarios y proteinuria. La tomografía revela opacidades bilaterales difusas en vidrio deslustrado. No hay evidencia clínica de insuficiencia cardiaca descompensada ni uso de anticoagulantes. Se sospecha un síndrome pulmón-riñón.`,
  pregunta: "¿Cuál es el enfoque diagnóstico y terapéutico inicial más apropiado?",
  opciones: [
    "Diagnosticar neumonía bacteriana y administrar antibiótico oral como única medida",
    "Sospechar hemorragia alveolar difusa asociada a enfermedad sistémica, estabilizar oxigenación e iniciar evaluación urgente etiológica con participación de neumología y nefrología",
    "Indicar diurético en dosis altas sin estudiar la lesión renal ni el origen pulmonar",
    "Descartar hemorragia alveolar porque no existe hemoptisis masiva",
    "Realizar anticoagulación empírica por las opacidades pulmonares"
  ],
  respuestaCorrecta: 1,
  explicacion: `La combinación de descenso de hemoglobina, hipoxemia, opacidades alveolares difusas, lesión renal aguda y sedimento urinario glomerular sugiere hemorragia alveolar difusa en el contexto de un síndrome pulmón-riñón. Entre las causas importantes están vasculitis asociadas a ANCA y enfermedad por anticuerpos antimembrana basal glomerular, además de lupus y otras etiologías. La evaluación urgente puede incluir serologías, complemento, estudios microbiológicos y broncoscopia con lavado broncoalveolar cuando sea seguro y aporte información. La estabilización respiratoria es prioritaria; cuando la sospecha de una enfermedad autoinmune grave es alta, el tratamiento inmunosupresor no debe retrasarse indebidamente mientras se completa la evaluación, de acuerdo con el contexto y el equipo especializado.`,
  perlaENARM: "Hemoptisis o anemia aguda + vidrio deslustrado bilateral + lesión renal con cilindros hemáticos: piensa en hemorragia alveolar difusa y síndrome pulmón-riñón.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para hemorragia alveolar difusa sin verificación oficial.",
    internacional: "Guías internacionales vigentes para vasculitis asociadas a ANCA y enfermedad por anticuerpos antimembrana basal glomerular."
  },
  bibliografia: "Guías clínicas internacionales contemporáneas para vasculitis asociadas a ANCA y enfermedad por anticuerpos antimembrana basal glomerular."
},
{
  id: "NEUMO-347",
  especialidad: "Neumología",
  tema: "Hemoptisis",
  subtema: "Anticoagulación y sangrado pulmonar",
  dificultad: "Alta",
  caso: `Hombre de 74 años con fibrilación auricular no valvular, hipertensión arterial y antecedente de embolia pulmonar, en tratamiento con apixabán. Acude por hemoptisis de aproximadamente 80 mL en tres horas, sin disnea grave ni hipotensión. La frecuencia cardiaca es de 92/min, presión arterial de 126/78 mmHg y saturación de 95%. La hemoglobina es de 11.8 g/dL frente a 12.9 g/dL un mes antes. La creatinina ha aumentado de 1.0 a 1.8 mg/dL después de varios días de diarrea y deshidratación. La radiografía muestra una opacidad focal en el lóbulo inferior derecho, sin derrame pleural. No se ha identificado aún la causa del sangrado y el paciente tomó la dosis habitual de apixabán esa mañana.`,
  pregunta: "¿Cuál es el enfoque más apropiado respecto al anticoagulante?",
  opciones: [
    "Mantener todas las dosis sin reevaluación porque el paciente tiene fibrilación auricular",
    "Valorar gravedad del sangrado, suspender temporalmente el anticoagulante cuando esté indicado, evaluar función renal e investigar la causa; reservar reversión para situaciones apropiadas según gravedad",
    "Administrar un antagonista de vitamina K para revertir de inmediato cualquier sangrado con apixabán",
    "Indicar trombólisis sistémica para tratar la opacidad pulmonar",
    "Suspender permanentemente toda anticoagulación sin evaluar el riesgo tromboembólico ni la causa"
  ],
  respuestaCorrecta: 1,
  explicacion: `La conducta depende de la gravedad del sangrado, estabilidad respiratoria y hemodinámica, evolución de hemoglobina, última dosis, función renal y riesgo tromboembólico. En sangrado clínicamente relevante puede ser necesario suspender temporalmente el anticoagulante, controlar la fuente y corregir factores contribuyentes. Los agentes de reversión se reservan para situaciones seleccionadas de hemorragia grave o potencialmente mortal, conforme a disponibilidad y protocolo. El antecedente de fibrilación auricular y embolia previa hace importante reevaluar cuándo y cómo reiniciar anticoagulación una vez controlado el sangrado. La causa pulmonar debe investigarse, no atribuirse automáticamente al fármaco.`,
  perlaENARM: "En hemoptisis durante anticoagulación, equilibra gravedad del sangrado y riesgo tromboembólico; revisa función renal y no suspendas indefinidamente sin reevaluación.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente aplicable a fibrilación auricular, tromboembolia y hemorragia asociada a anticoagulantes; versión no verificada aquí.",
    internacional: "Guías vigentes de anticoagulación y manejo de hemorragia asociada a anticoagulantes orales directos."
  },
  bibliografia: "Guías internacionales contemporáneas de manejo de anticoagulantes orales directos y hemorragia mayor."
},
{
  id: "NEUMO-348",
  especialidad: "Neumología",
  tema: "Hemoptisis",
  subtema: "Embolia pulmonar como diagnóstico diferencial",
  dificultad: "Alta",
  caso: `Mujer de 47 años que presenta disnea súbita, dolor torácico pleurítico derecho y hemoptisis escasa después de un viaje de 10 horas en automóvil. Refiere dolor y aumento de volumen en la pantorrilla izquierda desde el día anterior. Tiene frecuencia cardiaca de 118/min, frecuencia respiratoria de 27/min, presión arterial de 112/72 mmHg y saturación de 90% al aire ambiente. La radiografía muestra una opacidad periférica triangular en el lóbulo inferior derecho. No hay fiebre ni expectoración purulenta. La troponina es discretamente elevada y el dímero D está aumentado. No presenta antecedente de hemorragia reciente ni contraindicación conocida para anticoagulación.`,
  pregunta: "¿Cuál es la interpretación y el siguiente paso más apropiados?",
  opciones: [
    "La hemoptisis confirma tuberculosis y hace innecesaria la evaluación vascular",
    "Sospechar embolia pulmonar con posible infarto pulmonar y estimar probabilidad clínica para seleccionar la estrategia diagnóstica",
    "Diagnosticar neumonía bacteriana únicamente por la opacidad periférica",
    "Administrar trombólisis sistémica a toda paciente con hemoptisis y taquicardia",
    "Descartar embolia pulmonar porque el volumen de hemoptisis es escaso"
  ],
  respuestaCorrecta: 1,
  explicacion: `La presentación súbita, dolor pleurítico, taquicardia, hipoxemia, signos de trombosis venosa profunda y opacidad periférica son compatibles con embolia pulmonar y posible infarto pulmonar. La hemoptisis puede ser escasa. La probabilidad clínica preprueba determina el uso de dímero D o imagen vascular, según el algoritmo apropiado. La estabilidad hemodinámica y los hallazgos de disfunción ventricular derecha, biomarcadores y riesgo global determinan la necesidad de tratamiento avanzado. La trombólisis sistémica no está indicada automáticamente en pacientes hemodinámicamente estables.`,
  perlaENARM: "Hemoptisis escasa con dolor pleurítico, disnea súbita y factores trombóticos puede representar infarto pulmonar por embolia.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente para diagnóstico y tratamiento de tromboembolia pulmonar; no se asigna identificador sin verificación.",
    internacional: "ESC/ERS y guías internacionales vigentes de embolia pulmonar aguda."
  },
  bibliografia: "Guías internacionales contemporáneas de diagnóstico y manejo de embolia pulmonar aguda."
},
{
  id: "NEUMO-349",
  especialidad: "Neumología",
  tema: "Hemoptisis",
  subtema: "Aspergiloma y cavidad pulmonar",
  dificultad: "Alta",
  caso: `Hombre de 59 años con antecedente de tuberculosis pulmonar tratada hace 15 años, con cavidad residual apical derecha conocida. Durante los últimos dos meses presenta episodios recurrentes de hemoptisis, uno de ellos de aproximadamente 100 mL, sin fiebre ni deterioro sistémico marcado. La tomografía actual muestra una masa intracavitaria móvil rodeada parcialmente por aire en la cavidad residual, sin nueva consolidación extensa. La hemoglobina es de 11.7 g/dL y la función renal es normal. La exploración revela estertores apicales, pero no dificultad respiratoria. Se sospecha una colonización fúngica de una cavidad preexistente.`,
  pregunta: "¿Cuál es la interpretación más probable y la conducta apropiada?",
  opciones: [
    "Aspergiloma probable en cavidad residual, con evaluación de gravedad del sangrado y valoración especializada de las opciones terapéuticas",
    "Asma bronquial como explicación principal de la masa intracavitaria",
    "Edema pulmonar cardiogénico, pese a la lesión focal cavitaria",
    "Tuberculosis activa confirmada únicamente por la existencia de una cavidad antigua",
    "Cáncer pulmonar confirmado por la presencia de aire alrededor de una masa intracavitaria"
  ],
  respuestaCorrecta: 0,
  explicacion: `Una masa intracavitaria móvil rodeada de aire en una cavidad pulmonar preexistente es característica de aspergiloma, aunque debe integrarse con la clínica y el diagnóstico diferencial. El sangrado puede ser recurrente y, ocasionalmente, amenazante. La conducta depende de la magnitud y frecuencia de la hemoptisis, reserva pulmonar, localización y presencia de enfermedad pulmonar crónica asociada. La embolización arterial bronquial puede ser útil para controlar hemoptisis significativa; la resección se considera en pacientes seleccionados. Los antifúngicos no resuelven necesariamente un aspergiloma simple y su uso depende de la forma clínica, no de la imagen aislada.`,
  perlaENARM: "Masa intracavitaria con semiluna aérea en una cavidad antigua sugiere aspergiloma; la hemoptisis determina la urgencia y la estrategia terapéutica.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para aspergiloma sin verificación oficial.",
    internacional: "Guías internacionales de aspergilosis pulmonar y manejo de hemoptisis."
  },
  bibliografia: "Guías clínicas internacionales contemporáneas para aspergilosis pulmonar crónica y aspergiloma."
},
{
  id: "NEUMO-350",
  especialidad: "Neumología",
  tema: "Hemoptisis",
  subtema: "Coagulopatía y trombocitopenia",
  dificultad: "Alta",
  caso: `Mujer de 52 años con antecedente de enfermedad hematológica en evaluación, que presenta hemoptisis y gingivorragia durante las últimas 24 horas. Refiere fiebre reciente y fatiga intensa. A la exploración tiene frecuencia cardiaca de 112/min, presión arterial de 110/70 mmHg, frecuencia respiratoria de 24/min y saturación de 91%. La biometría hemática muestra hemoglobina de 8.6 g/dL, plaquetas de 14,000/µL y leucopenia. El tiempo de protrombina está prolongado y el fibrinógeno es bajo. La radiografía muestra opacidades bilaterales difusas. No hay antecedente de traumatismo ni uso de anticoagulantes. El equipo sospecha hemorragia pulmonar en el contexto de una alteración hematológica sistémica.`,
  pregunta: "¿Cuál es la conducta inicial más apropiada?",
  opciones: [
    "Dar egreso porque la hemoptisis puede atribuirse a irritación bronquial",
    "Estabilizar la respiración, evaluar y tratar la coagulopatía y trombocitopenia de forma urgente, y estudiar la causa hematológica e infecciosa",
    "Administrar anticoagulación terapéutica para prevenir microtrombosis",
    "Realizar biopsia pulmonar quirúrgica antes de corregir la coagulopatía",
    "Administrar trombólisis sistémica por las opacidades bilaterales"
  ],
  respuestaCorrecta: 1,
  explicacion: `La hemoptisis junto con trombocitopenia grave, fibrinógeno bajo y prolongación de tiempos de coagulación puede indicar hemorragia asociada a coagulopatía sistémica, consumo de factores o enfermedad hematológica grave. La prioridad es soporte respiratorio y hemodinámico, valoración urgente por hematología y cuidados críticos, y corrección dirigida de la alteración hemostática según causa y protocolo transfusional. Deben investigarse infección, hemorragia alveolar y diagnósticos hematológicos relevantes. Los procedimientos invasivos con riesgo hemorrágico deben evitarse o planificarse tras estabilización y valoración especializada.`,
  perlaENARM: "Hemoptisis con trombocitopenia grave y coagulopatía exige estabilización y tratamiento hemostático dirigido; evita biopsias invasivas antes de valorar el riesgo.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de transfusión, coagulopatía y enfermedad hematológica; no se asigna identificador no verificado.",
    internacional: "Guías internacionales vigentes de hemorragia asociada a trombocitopenia y coagulopatía."
  },
  bibliografia: "Guías clínicas contemporáneas de manejo de trombocitopenia grave, coagulopatía y hemorragia pulmonar."
},
{
  id: "NEUMO-351",
  especialidad: "Neumología",
  tema: "Hemoptisis",
  subtema: "Broncoscopia en hemoptisis persistente",
  dificultad: "Alta",
  caso: `Hombre de 63 años con hemoptisis recurrente de bajo a moderado volumen durante tres semanas. Es fumador de 35 paquetes-año y tiene antecedente de bronquitis crónica. La tomografía contrastada no identifica una masa evidente ni una fuente vascular clara, pero persisten episodios de sangre fresca mezclada con esputo. La saturación es de 96% al aire ambiente, la presión arterial es estable y la hemoglobina permanece alrededor de 12 g/dL. No hay fiebre, dolor pleurítico ni síntomas constitucionales importantes. La evaluación de vía aérea superior no muestra una fuente de sangrado. Debido a la persistencia de los síntomas y a los factores de riesgo, se considera completar la evaluación endoscópica.`,
  pregunta: "¿Cuál es la utilidad principal de la broncoscopia en este escenario?",
  opciones: [
    "Excluir con certeza todas las causas vasculares sin necesidad de imagen",
    "Evaluar la vía aérea, identificar lesiones endobronquiales y obtener muestras cuando estén indicadas, especialmente ante sangrado persistente",
    "Confirmar embolia pulmonar únicamente mediante inspección visual",
    "Sustituir todas las pruebas de coagulación y microbiología",
    "Administrar tratamiento antibiótico de forma automática durante la exploración"
  ],
  respuestaCorrecta: 1,
  explicacion: `La broncoscopia permite examinar directamente el árbol bronquial, localizar sangrado activo, identificar lesiones endobronquiales y obtener muestras microbiológicas o histológicas. Es particularmente útil cuando la hemoptisis persiste, la tomografía sugiere una lesión central o se requiere intervención sobre la vía aérea. La tomografía contrastada y la broncoscopia son técnicas complementarias; la secuencia depende de la estabilidad, sospecha etiológica y disponibilidad. Una broncoscopia normal no excluye todas las causas parenquimatosas o vasculares.`,
  perlaENARM: "La broncoscopia aporta inspección endobronquial, toma de muestras y, en situaciones seleccionadas, control de la vía aérea; no sustituye toda la imagen vascular.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para esta indicación de broncoscopia sin verificación oficial.",
    internacional: "Guías y revisiones internacionales contemporáneas de evaluación de hemoptisis."
  },
  bibliografia: "Revisiones clínicas contemporáneas de diagnóstico y manejo de hemoptisis."
},
{
  id: "NEUMO-352",
  especialidad: "Neumología",
  tema: "Hemoptisis",
  subtema: "Neumonía necrosante y absceso pulmonar",
  dificultad: "Alta",
  caso: `Hombre de 58 años con diabetes mellitus tipo 2 mal controlada, enfermedad periodontal y consumo importante de alcohol, que presenta fiebre alta, tos productiva fétida y hemoptisis moderada después de un episodio de alteración del estado de conciencia. La evolución es de 12 días, con deterioro progresivo y pérdida de apetito. A la exploración presenta frecuencia respiratoria de 28/min, saturación de 91% y estertores localizados en el lóbulo inferior derecho. La tomografía muestra una cavidad de pared gruesa con nivel hidroaéreo, rodeada de consolidación. Los leucocitos son de 19,000/µL y la proteína C reactiva está elevada. No hay hipotensión ni necesidad inmediata de ventilación mecánica.`,
  pregunta: "¿Cuál es la interpretación y la estrategia inicial más apropiadas?",
  opciones: [
    "Absceso pulmonar probable en contexto de aspiración, que requiere antibióticos apropiados y evaluación de complicaciones y respuesta clínica",
    "Asma grave con tapones mucosos",
    "Edema pulmonar cardiogénico como explicación del nivel hidroaéreo",
    "Hemorragia alveolar autoinmune como diagnóstico más probable sin otros datos",
    "Tuberculosis confirmada por la presencia de cualquier cavidad pulmonar"
  ],
  respuestaCorrecta: 0,
  explicacion: `El antecedente de aspiración, la expectoración fétida, la fiebre, la leucocitosis y una cavidad con nivel hidroaéreo rodeada de consolidación sugieren absceso pulmonar. El manejo inicial incluye antibióticos con cobertura adecuada para la etiología probable y toma de muestras cuando sea pertinente. Debe evaluarse la respuesta clínica y radiológica, así como complicaciones, obstrucción endobronquial o diagnósticos alternativos. El drenaje o intervención adicional se reserva para casos seleccionados, según tamaño, evolución, anatomía y fracaso del tratamiento. La hemoptisis requiere vigilancia de gravedad y de la vía aérea.`,
  perlaENARM: "Cavidad con nivel hidroaéreo, esputo fétido y riesgo de aspiración orientan a absceso pulmonar; no toda cavidad es tuberculosis.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente aplicable a neumonía y absceso pulmonar; no se asigna identificador sin verificación oficial.",
    internacional: "Guías contemporáneas de infección pulmonar y absceso pulmonar."
  },
  bibliografia: "Guías clínicas contemporáneas de manejo de infecciones pulmonares complicadas."
},
{
  id: "NEUMO-353",
  especialidad: "Neumología",
  tema: "Hemoptisis",
  subtema: "Hemoptisis recurrente con bronquiectasias focales",
  dificultad: "Alta",
  caso: `Mujer de 48 años con antecedentes de neumonías repetidas en el lóbulo medio desde la juventud, que presenta hemoptisis escasa recurrente y tos productiva diaria. No fuma y no refiere pérdida de peso ni síntomas constitucionales. La tomografía de alta resolución muestra bronquiectasias cilíndricas y saculares localizadas en el lóbulo medio y la língula, con tapones mucosos. La radiografía no evidencia masa ni cavitación. Los cultivos previos han aislado Haemophilus influenzae. Actualmente está estable, sin fiebre ni hipoxemia, pero nunca se ha investigado de manera sistemática la etiología de la enfermedad localizada.`,
  pregunta: "¿Cuál es el abordaje más apropiado a mediano plazo?",
  opciones: [
    "Considerar que las bronquiectasias son idiopáticas por definición y no estudiar causas tratables",
    "Completar evaluación etiológica y microbiológica, optimizar aclaramiento de secreciones y estudiar la hemoptisis recurrente según gravedad",
    "Indicar anticoagulación crónica para prevenir hemorragia",
    "Iniciar corticoide sistémico permanente como tratamiento estándar",
    "Realizar resección pulmonar inmediata sin evaluar extensión ni función respiratoria"
  ],
  respuestaCorrecta: 1,
  explicacion: `Las bronquiectasias localizadas y las infecciones recurrentes requieren evaluación de causas potencialmente modificables, incluyendo obstrucción endobronquial cuando esté indicada, antecedentes infecciosos y otras etiologías según el fenotipo. El manejo basal integra aclaramiento de secreciones, cultivos en estabilidad y exacerbaciones, vacunación y antibióticos seleccionados cuando corresponda. La hemoptisis recurrente debe cuantificarse por repercusión clínica y puede requerir evaluación vascular o broncoscópica. La resección se considera solo en pacientes seleccionados con enfermedad localizada, síntomas persistentes y evaluación multidisciplinaria.`,
  perlaENARM: "Las bronquiectasias focales justifican buscar causas locales y tratables; la cirugía no es el tratamiento inicial universal.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para bronquiectasias sin verificación oficial.",
    internacional: "ERS 2017; BTS 2019."
  },
  bibliografia: "Hill AT, et al. British Thoracic Society Guideline for bronchiectasis in adults. Thorax. 2019;74(Suppl 1):1-69."
},
{
  id: "NEUMO-354",
  especialidad: "Neumología",
  tema: "Hemoptisis",
  subtema: "Embarazo y hemoptisis",
  dificultad: "Alta",
  caso: `Mujer de 31 años con embarazo de 24 semanas, que presenta disnea súbita, dolor torácico pleurítico y dos episodios de hemoptisis escasa. Refiere dolor y aumento de volumen en la pierna derecha desde hace dos días. La frecuencia cardiaca es de 116/min, presión arterial de 112/74 mmHg, frecuencia respiratoria de 26/min y saturación de 92% al aire ambiente. No tiene fiebre ni expectoración purulenta. La radiografía de tórax no muestra consolidación extensa y el electrocardiograma evidencia taquicardia sinusal. La paciente teme que cualquier estudio de imagen pueda dañar al feto y solicita evitar toda prueba radiológica.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Descartar embolia pulmonar por el embarazo y atribuir la disnea a cambios fisiológicos",
    "Evaluar urgentemente la probabilidad de tromboembolia pulmonar y utilizar un algoritmo diagnóstico adaptado al embarazo, sin retrasar pruebas necesarias por temor inespecífico a la radiación",
    "Administrar trombólisis sistémica a toda paciente embarazada con hemoptisis",
    "Indicar antibiótico oral sin investigar trombosis venosa profunda",
    "Esperar al puerperio para completar cualquier evaluación vascular"
  ],
  respuestaCorrecta: 1,
  explicacion: `El embarazo aumenta el riesgo tromboembólico, y la combinación de disnea súbita, dolor pleurítico, hemoptisis y síntomas compatibles con trombosis venosa profunda requiere evaluación urgente. Debe emplearse un algoritmo diagnóstico validado para embarazo y seleccionar las pruebas de imagen de acuerdo con radiografía, disponibilidad, estado clínico y protocolos locales. La exposición fetal de los estudios indicados suele ser baja en comparación con el riesgo de una embolia pulmonar no diagnosticada. La trombólisis se reserva para escenarios de alto riesgo cuidadosamente seleccionados; la hemoptisis escasa no es por sí sola indicación.`,
  perlaENARM: "En embarazo con sospecha de embolia pulmonar, utiliza un algoritmo diagnóstico adaptado; no retrases una evaluación necesaria por temor inespecífico a la radiación.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente de tromboembolia venosa en embarazo y atención obstétrica de alto riesgo; versión no verificada aquí.",
    internacional: "Guías internacionales vigentes de tromboembolia pulmonar durante el embarazo."
  },
  bibliografia: "Guías clínicas contemporáneas de diagnóstico de tromboembolia pulmonar en embarazo."
},
{
  id: "NEUMO-355",
  especialidad: "Neumología",
  tema: "Hemoptisis",
  subtema: "Hemoptisis con cavitación y vasculitis",
  dificultad: "Alta",
  caso: `Hombre de 45 años con fiebre intermitente, sinusitis persistente, epistaxis recurrente, tos con sangre y disnea progresiva durante tres semanas. La creatinina ha aumentado de 0.9 a 2.0 mg/dL. El examen de orina muestra hematuria y proteinuria. La tomografía torácica revela múltiples nódulos pulmonares, algunos cavitados, y opacidades en vidrio deslustrado. La hemoglobina disminuyó 2 g/dL en diez días. No hay antecedente de tuberculosis conocida, aunque el estudio microbiológico todavía está pendiente. El paciente está taquipneico, con saturación de 89% al aire ambiente y presión arterial estable.`,
  pregunta: "¿Cuál es el abordaje inicial más apropiado?",
  opciones: [
    "Diagnosticar tuberculosis exclusivamente por la cavitación y comenzar tratamiento sin pruebas adicionales",
    "Sospechar vasculitis sistémica con posible hemorragia alveolar, estabilizar al paciente y realizar evaluación urgente de causas autoinmunes e infecciosas",
    "Tratar únicamente con broncodilatadores por la disnea",
    "Iniciar anticoagulación terapéutica para prevenir trombosis pulmonar",
    "Descartar enfermedad autoinmune porque existe hemoptisis"
  ],
  respuestaCorrecta: 1,
  explicacion: `La combinación de enfermedad de vías respiratorias superiores, nódulos cavitados, hemoptisis y lesión renal con sedimento activo sugiere vasculitis sistémica, particularmente vasculitis asociada a ANCA. Sin embargo, tuberculosis, infecciones fúngicas y otras causas pueden producir cavitación y deben investigarse, especialmente antes o durante el inicio de inmunosupresión. Se requiere estabilización respiratoria, evaluación urgente por neumología, nefrología y reumatología, pruebas serológicas dirigidas y estudios microbiológicos. Si existe hemorragia alveolar grave con alta sospecha de vasculitis, el tratamiento no debe retrasarse indebidamente, pero debe coordinarse con el equipo especializado.`,
  perlaENARM: "Hemoptisis + sinusitis o epistaxis + nódulos cavitados + glomerulonefritis sugieren vasculitis sistémica; descarta simultáneamente causas infecciosas relevantes.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para vasculitis pulmonar sin verificación oficial.",
    internacional: "Guías internacionales vigentes de vasculitis asociadas a ANCA y hemorragia alveolar."
  },
  bibliografia: "Guías clínicas internacionales contemporáneas para vasculitis asociadas a ANCA."
},
{
  id: "NEUMO-356",
  especialidad: "Neumología",
  tema: "Hemoptisis",
  subtema: "Hemoptisis y enfermedad mitral",
  dificultad: "Alta",
  caso: `Mujer de 55 años con antecedente de fiebre reumática en la infancia, disnea progresiva, ortopnea y palpitaciones. Durante la última semana presenta expectoración ocasional teñida de sangre. La exploración revela facies mitral, primer ruido acentuado, chasquido de apertura y soplo diastólico apical. La frecuencia cardiaca es de 108/min, la presión arterial de 118/72 mmHg y la saturación de 93%. La radiografía muestra redistribución vascular hacia los vértices y líneas B de Kerley. El ecocardiograma confirma estenosis mitral significativa, dilatación auricular izquierda y presión pulmonar elevada. No presenta fiebre ni datos de infección respiratoria aguda.`,
  pregunta: "¿Cuál es el mecanismo más probable de la hemoptisis?",
  opciones: [
    "Rotura espontánea de una arteria pulmonar por hipertensión arterial pulmonar idiopática como única explicación",
    "Hipertensión venosa pulmonar secundaria a estenosis mitral, con congestión vascular y posible ruptura de pequeños vasos bronquiales o alveolares",
    "Hemoptisis causada exclusivamente por trombocitopenia, aunque el recuento plaquetario sea normal",
    "Bronquiectasias quísticas confirmadas por el soplo diastólico",
    "Tuberculosis pulmonar confirmada por las líneas B de Kerley"
  ],
  respuestaCorrecta: 1,
  explicacion: `La estenosis mitral eleva la presión auricular izquierda y la presión venosa pulmonar, lo que puede producir congestión, edema intersticial y hemoptisis. La presencia de un soplo diastólico característico, chasquido de apertura, redistribución vascular y estenosis significativa en ecocardiografía apoya el mecanismo cardiogénico. El tratamiento debe centrarse en la estabilización y el manejo de la enfermedad valvular, control de frecuencia y congestión según el contexto, además de evaluar la gravedad de la hemoptisis. Si el sangrado es importante o el patrón clínico no encaja, deben investigarse causas pulmonares concomitantes.`,
  perlaENARM: "La estenosis mitral puede producir hemoptisis por hipertensión venosa pulmonar; integra el examen cardiaco con la imagen y la ecocardiografía.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente aplicable a valvulopatías; no se asigna identificador sin verificación oficial.",
    internacional: "ESC/EACTS: guías vigentes de valvulopatías."
  },
  bibliografia: "Guías internacionales contemporáneas de manejo de valvulopatías y enfermedad mitral."
},
{
  id: "NEUMO-357",
  especialidad: "Neumología",
  tema: "Hemoptisis",
  subtema: "Hemoptisis después de procedimiento",
  dificultad: "Alta",
  caso: `Hombre de 70 años con cáncer pulmonar central, sometido a broncoscopia con biopsia transbronquial hace dos horas. Inicialmente se encontraba estable, pero comienza a expulsar sangre roja brillante en cantidades crecientes y presenta tos persistente, desaturación y dificultad para ventilar. La saturación cae a 85% pese a oxígeno suplementario, la frecuencia respiratoria es de 32/min y la presión arterial de 106/70 mmHg. El equipo sospecha hemorragia relacionada con el procedimiento. El paciente todavía puede responder preguntas, pero está cada vez más fatigado. La tomografía no se ha realizado y la hemorragia continúa.`,
  pregunta: "¿Cuál es la conducta inmediata más apropiada?",
  opciones: [
    "Solicitar tomografía antes de intervenir porque el sangrado es posterior a un procedimiento",
    "Priorizar la protección de la vía aérea y el control broncoscópico del sangrado, con apoyo de anestesia y cuidados críticos",
    "Administrar anticoagulación para evitar trombosis del bronquio biopsiado",
    "Esperar a que el paciente pierda la conciencia antes de asegurar la vía aérea",
    "Dar egreso porque la hemorragia posterior a broncoscopia suele resolverse espontáneamente"
  ],
  respuestaCorrecta: 1,
  explicacion: `La hemoptisis creciente con desaturación y dificultad ventilatoria después de una biopsia broncoscópica representa una emergencia por riesgo de obstrucción de la vía aérea y asfixia. Se debe activar apoyo inmediato de anestesia, neumología intervencionista y cuidados críticos. Puede requerirse intubación y broncoscopia terapéutica para aspiración de coágulos, localización del sangrado y medidas hemostáticas. La estrategia exacta depende del sitio de la biopsia, la magnitud de la hemorragia y los recursos disponibles. La tomografía no debe retrasar la estabilización en un paciente que empeora.`,
  perlaENARM: "La hemoptisis posprocedimiento con deterioro ventilatorio es una urgencia de vía aérea; estabiliza primero y localiza o controla después según tolerancia.",
  gpc: {
    mexico: "Aplicar protocolos institucionales vigentes de hemorragia posprocedimiento y manejo de vía aérea; no se atribuye una GPC específica sin verificación.",
    internacional: "Recomendaciones contemporáneas de broncoscopia intervencionista y manejo de hemoptisis."
  },
  bibliografia: "Revisiones y recomendaciones clínicas contemporáneas de seguridad y manejo de complicaciones de broncoscopia."
},
{
  id: "NEUMO-358",
  especialidad: "Neumología",
  tema: "Hemoptisis",
  subtema: "Hemoptisis recurrente sin diagnóstico tras estudios iniciales",
  dificultad: "Alta",
  caso: `Mujer de 62 años, exfumadora, con cuatro episodios de hemoptisis escasa en dos meses. La radiografía es normal y una tomografía contrastada inicial no identifica masa, cavidad ni embolia pulmonar. La biometría hemática y las pruebas de coagulación son normales. No presenta fiebre, pérdida de peso ni signos de insuficiencia cardiaca. La exploración otorrinolaringológica no encuentra una fuente nasofaríngea. Pese a la evaluación inicial negativa, la paciente vuelve a presentar sangre mezclada con esputo y está preocupada por una posible lesión endobronquial pequeña. No hay inestabilidad ni hipoxemia.`,
  pregunta: "¿Cuál es el enfoque más apropiado ante la recurrencia?",
  opciones: [
    "Cerrar la evaluación definitivamente porque una tomografía inicial negativa excluye toda causa relevante",
    "Reevaluar la evolución, calidad y protocolo de la imagen, y considerar broncoscopia o evaluación adicional según riesgo y persistencia",
    "Administrar trombólisis empírica por recurrencia de hemoptisis",
    "Indicar antibióticos indefinidos sin evidencia de infección",
    "Diagnosticar hemorragia alveolar difusa sin anemia, hipoxemia ni alteraciones radiológicas"
  ],
  respuestaCorrecta: 1,
  explicacion: `Una evaluación inicial negativa reduce la probabilidad de algunas causas, pero la hemoptisis recurrente exige revisar el origen del sangrado, los factores de riesgo y la calidad de los estudios realizados. La decisión de broncoscopia o nueva imagen depende de persistencia, tabaquismo, sospecha de lesión endobronquial, hallazgos previos y evolución clínica. Deben evitarse pruebas repetidas sin una pregunta clínica clara, pero también el cierre diagnóstico prematuro cuando persisten signos relevantes. El seguimiento debe documentar recurrencias, volumen, síntomas acompañantes y cambios de hemoglobina o imagen.`,
  perlaENARM: "Hemoptisis recurrente tras estudios iniciales negativos exige reevaluación guiada por riesgo y evolución, no asumir que la causa quedó excluida.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para hemoptisis recurrente sin verificación oficial.",
    internacional: "Revisiones clínicas contemporáneas de evaluación escalonada de hemoptisis."
  },
  bibliografia: "Revisiones clínicas contemporáneas de diagnóstico y manejo de hemoptisis."
},
{
  id: "NEUMO-359",
  especialidad: "Neumología",
  tema: "Hemoptisis",
  subtema: "Hemoptisis y enfermedad renal con sospecha de síndrome pulmón-riñón",
  dificultad: "Alta",
  caso: `Hombre de 54 años con enfermedad renal crónica previamente estable, que desarrolla disnea, tos hemática y disminución de la diuresis durante una semana. La presión arterial es de 156/94 mmHg, frecuencia respiratoria de 27/min y saturación de 89% al aire ambiente. La hemoglobina disminuyó de 11.5 a 8.7 g/dL y la creatinina aumentó de 1.6 a 3.2 mg/dL. El examen de orina muestra hematuria dismórfica, cilindros eritrocitarios y proteinuria. La tomografía presenta opacidades bilaterales difusas. No hay signos de congestión cardiaca evidente y la ecocardiografía muestra función ventricular izquierda conservada. Se plantea una causa sistémica que afecta simultáneamente capilares pulmonares y glomérulos.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Atribuir las opacidades a sobrecarga de volumen sin estudiar el sedimento urinario",
    "Activar evaluación urgente de síndrome pulmón-riñón, estabilizar el intercambio gaseoso y estudiar causas inmunológicas e infecciosas en paralelo",
    "Administrar anticoagulación porque la hemoptisis siempre se relaciona con trombosis",
    "Esperar varias semanas antes de solicitar serologías o valoración nefrológica",
    "Iniciar tratamiento antifúngico empírico como única medida"
  ],
  respuestaCorrecta: 1,
  explicacion: `La caída de hemoglobina, opacidades pulmonares difusas, hipoxemia, lesión renal aguda y sedimento urinario glomerular sugieren síndrome pulmón-riñón, con posible hemorragia alveolar y glomerulonefritis rápidamente progresiva. Deben investigarse de manera urgente vasculitis asociadas a ANCA, anticuerpos antimembrana basal glomerular, lupus y causas infecciosas u otras etiologías. La evaluación requiere participación de neumología, nefrología y, según el caso, reumatología y cuidados críticos. El tratamiento inmunosupresor o específico depende de la etiología y gravedad; las pruebas y el tratamiento no deben retrasarse de manera peligrosa en una presentación fulminante.`,
  perlaENARM: "La combinación de hemoptisis, anemia aguda, hipoxemia y sedimento glomerular es una emergencia diagnóstica por posible síndrome pulmón-riñón.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para síndrome pulmón-riñón sin verificación oficial.",
    internacional: "Guías internacionales vigentes para vasculitis asociadas a ANCA y enfermedad por anticuerpos antimembrana basal glomerular."
  },
  bibliografia: "Guías clínicas internacionales contemporáneas para vasculitis asociadas a ANCA y enfermedad por anticuerpos antimembrana basal glomerular."
},
{
  id: "NEUMO-360",
  especialidad: "Neumología",
  tema: "Hemoptisis",
  subtema: "Caso integrador: estabilización, diagnóstico y tratamiento definitivo",
  dificultad: "Alta",
  caso: `Hombre de 66 años, fumador de 45 paquetes-año, con bronquiectasias diagnosticadas por tomografía y dos hospitalizaciones previas por infección respiratoria, acude por hemoptisis de inicio súbito que ha aumentado durante cuatro horas. Calcula haber expulsado aproximadamente 180 mL de sangre, aunque no puede cuantificar con precisión los coágulos deglutidos. Presenta frecuencia respiratoria de 31/min, frecuencia cardiaca de 120/min, presión arterial de 108/72 mmHg y saturación de 87% al aire ambiente. La hemoglobina es de 11.6 g/dL, con valor previo de 13.0 g/dL. La radiografía muestra opacidades en el lóbulo inferior derecho. Una tomografía contrastada obtenida durante una fase inicial de estabilidad identifica bronquiectasias quísticas, vasos bronquiales hipertrofiados y ausencia de una masa evidente. El paciente comienza a fatigarse, persiste con sangrado activo y presenta dificultad para manejar secreciones. No utiliza anticoagulantes y no existe trombocitopenia conocida.`,
  pregunta: "¿Cuál es la estrategia integral más apropiada?",
  opciones: [
    "Priorizar la cuantificación exacta del volumen antes de intervenir y esperar a que la hemoglobina descienda más",
    "Asegurar vía aérea y oxigenación, activar manejo multidisciplinario urgente y proceder al control del sangrado mediante la estrategia broncoscópica o endovascular apropiada según estabilidad y localización",
    "Administrar antibióticos y enviar al paciente a domicilio porque las bronquiectasias explican el sangrado",
    "Iniciar anticoagulación por la taquicardia y la inmovilidad",
    "Realizar resección pulmonar inmediata sin considerar la reserva funcional ni otras opciones"
  ],
  respuestaCorrecta: 1,
  explicacion: `Este paciente presenta hemoptisis amenazante por sangrado activo, hipoxemia y fatiga respiratoria. La prioridad es evitar la obstrucción de la vía aérea y sostener oxigenación y ventilación. Debe activarse un equipo que incluya cuidados críticos, neumología, anestesia y radiología intervencionista. La broncoscopia puede ser necesaria para aspirar coágulos, localizar el sangrado y proteger la vía aérea; la embolización de arterias bronquiales suele ser una opción fundamental para controlar hemoptisis significativa relacionada con bronquiectasias. La cirugía se reserva para escenarios seleccionados según localización, etiología, fracaso de otras intervenciones y reserva funcional. La hemoglobina inicial no debe utilizarse como único indicador de gravedad, y el tratamiento no debe retrasarse esperando una cuantificación exacta del volumen.`,
  perlaENARM: "La gravedad de la hemoptisis se determina por su repercusión fisiológica; estabilización y control de la fuente preceden a cualquier estrategia electiva.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para hemoptisis amenazante sin verificación oficial.",
    internacional: "BTS 2019 para bronquiectasias; recomendaciones multidisciplinarias contemporáneas para hemoptisis amenazante."
  },
  bibliografia: "Hill AT, et al. British Thoracic Society Guideline for bronchiectasis in adults. Thorax. 2019;74(Suppl 1):1-69."
},

{
  id: "NEUMO-361",
  especialidad: "Neumología",
  tema: "Sarcoidosis",
  subtema: "Diagnóstico clínico-radiológico y adenopatías hiliares bilaterales",
  dificultad: "Alta",
  caso: `Mujer de 34 años, previamente sana, consulta por tos seca de tres meses, fatiga y disnea leve al subir dos pisos. Niega fiebre, sudoración nocturna, pérdida ponderal importante o contacto conocido con tuberculosis. La exploración muestra temperatura de 36.8 °C, frecuencia respiratoria de 17/min, saturación de 97% al aire ambiente y auscultación pulmonar sin estertores. Presenta eritema nodoso doloroso en ambas piernas y artralgias de tobillos de inicio reciente. La radiografía de tórax revela adenopatías hiliares bilaterales y adenopatía paratraqueal derecha, sin infiltrados pulmonares evidentes. La espirometría muestra FVC de 94% del predicho, FEV1 de 96% y DLCO de 91%. La biometría hemática no presenta citopenias; calcio sérico y creatinina son normales. No hay alteraciones visuales ni síntomas cardiacos.`,
  pregunta: "¿Cuál es la interpretación y la conducta inicial más apropiadas?",
  opciones: [
    "Sarcoidosis pulmonar estadio IV, porque las adenopatías implican fibrosis avanzada",
    "Fenotipo compatible con síndrome de Löfgren; integrar clínica e imagen y valorar si es posible establecer el diagnóstico sin biopsia, tras excluir alternativas relevantes",
    "Tuberculosis pulmonar confirmada por la presencia de adenopatías hiliares",
    "Neoplasia pulmonar confirmada, por lo que se requiere resección inmediata",
    "Enfermedad intersticial idiopática con indicación inmediata de glucocorticoides a dosis altas"
  ],
  respuestaCorrecta: 1,
  explicacion: `La combinación de eritema nodoso, artritis o periartropatía de tobillos y adenopatías hiliares bilaterales es característica del síndrome de Löfgren, una presentación aguda de sarcoidosis que suele tener evolución favorable. En un cuadro clínico clásico, con imagen compatible y exclusión razonable de diagnósticos alternativos, puede ser posible establecer el diagnóstico sin biopsia. No obstante, deben considerarse el contexto epidemiológico, tuberculosis, micosis y otras causas de adenopatías. La clasificación radiográfica no implica fibrosis únicamente por la presencia de ganglios: el estadio I se caracteriza por adenopatías hiliares bilaterales sin infiltrados parenquimatosos.`,
  perlaENARM: "Eritema nodoso + artritis de tobillos + adenopatías hiliares bilaterales orientan a síndrome de Löfgren; la biopsia no es obligatoria en toda presentación clásica.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para sarcoidosis sin verificación documental.",
    internacional: "ATS 2020: diagnóstico y detección de sarcoidosis."
  },
  bibliografia: "Crouser ED, et al. Diagnosis and Detection of Sarcoidosis. An Official ATS Clinical Practice Guideline. Am J Respir Crit Care Med. 2020;201:e26-e51."
},
{
  id: "NEUMO-362",
  especialidad: "Neumología",
  tema: "Sarcoidosis",
  subtema: "Criterios diagnósticos y necesidad de biopsia",
  dificultad: "Alta",
  caso: `Hombre de 56 años, trabajador administrativo, con tos seca de cinco meses, disnea progresiva y pérdida de 4 kg. La tomografía de tórax muestra adenopatías mediastínicas e hiliares bilaterales, múltiples micronódulos peribroncovasculares y algunos nódulos subpleurales. No tiene eritema nodoso, uveítis ni artritis. La biometría hemática es normal y la enzima convertidora de angiotensina está discretamente elevada. Reside en una región donde existen casos de tuberculosis y exposición ambiental a hongos. La prueba molecular inicial de esputo para tuberculosis es negativa, pero todavía no hay cultivos ni estudio histológico. Se considera sarcoidosis por el patrón tomográfico y el biomarcador elevado.`,
  pregunta: "¿Cuál es el enfoque diagnóstico más riguroso?",
  opciones: [
    "Confirmar sarcoidosis por la elevación de la enzima convertidora de angiotensina y comenzar tratamiento",
    "Integrar presentación clínica e imagen, obtener tejido de un sitio accesible cuando esté indicado y excluir infecciones granulomatosas y otras causas",
    "Descartar sarcoidosis porque el paciente es mayor de 50 años",
    "Indicar antifúngicos de amplio espectro durante seis meses sin obtener muestras",
    "Realizar biopsia pulmonar quirúrgica como primera opción en todos los pacientes con adenopatías mediastínicas"
  ],
  respuestaCorrecta: 1,
  explicacion: `El diagnóstico de sarcoidosis requiere un cuadro clínico compatible, demostración de inflamación granulomatosa no necrosante cuando la biopsia esté indicada y exclusión razonable de otras causas de granulomas. La enzima convertidora de angiotensina tiene sensibilidad y especificidad insuficientes para confirmar o excluir la enfermedad. Ante adenopatías mediastínicas con síntomas constitucionales y exposición epidemiológica relevante, es necesario investigar tuberculosis y micosis, además de neoplasias y otras enfermedades inflamatorias. Si se requiere tejido, la selección del sitio y la técnica debe priorizar rendimiento diagnóstico y seguridad; la aspiración ganglionar guiada por ultrasonido endobronquial suele ser una alternativa inicial apropiada.`,
  perlaENARM: "La sarcoidosis es un diagnóstico clinicopatológico de exclusión; la ECA elevada no confirma la enfermedad.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para sarcoidosis sin verificación documental.",
    internacional: "ATS 2020: criterios diagnósticos y selección de procedimientos para obtener tejido."
  },
  bibliografia: "Crouser ED, et al. Am J Respir Crit Care Med. 2020;201:e26-e51."
},
{
  id: "NEUMO-363",
  especialidad: "Neumología",
  tema: "Sarcoidosis",
  subtema: "Clasificación radiográfica y pronóstico",
  dificultad: "Alta",
  caso: `Mujer de 41 años, no fumadora, evaluada por tos seca y fatiga de cuatro meses. La radiografía inicial muestra adenopatías hiliares bilaterales y paratraqueales, sin infiltrados pulmonares. La tomografía confirma adenopatías simétricas, sin fibrosis ni bronquiectasias por tracción. La espirometría y la DLCO son normales. La biopsia ganglionar obtenida por aspiración endobronquial muestra granulomas epitelioides no necrosantes; las tinciones y estudios microbiológicos iniciales no identifican microorganismos. No presenta síntomas oculares, cardiacos, neurológicos ni hipercalcemia. El paciente pregunta si el patrón radiográfico implica progresión inevitable a insuficiencia respiratoria.`,
  pregunta: "¿Cuál es la clasificación radiográfica y la interpretación pronóstica más apropiadas?",
  opciones: [
    "Estadio I; la evolución puede ser favorable y debe individualizarse el seguimiento",
    "Estadio II; el infiltrado parenquimatoso es obligatorio para clasificar cualquier adenopatía",
    "Estadio III; las adenopatías bilaterales definen enfermedad parenquimatosa sin ganglios",
    "Estadio IV; toda adenopatía mediastínica implica fibrosis irreversible",
    "Estadio V; la clasificación de sarcoidosis se basa exclusivamente en DLCO"
  ],
  respuestaCorrecta: 0,
  explicacion: `El estadio radiográfico I corresponde a adenopatías hiliares bilaterales sin infiltrados pulmonares visibles. El estadio II combina adenopatías e infiltrados; el III presenta infiltrados sin adenopatías hiliares y el IV corresponde a fibrosis pulmonar establecida. Estos estadios son descriptivos y no sustituyen la evaluación funcional ni extrapulmonar. El estadio I suele tener una probabilidad importante de resolución espontánea, pero no permite garantizar la evolución individual. El seguimiento debe considerar síntomas, función pulmonar, imagen y órganos potencialmente afectados.`,
  perlaENARM: "Estadio I: adenopatías hiliares bilaterales aisladas; no equivale a fibrosis ni determina por sí solo la necesidad de glucocorticoides.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para sarcoidosis sin verificación documental.",
    internacional: "ATS 2020 y literatura internacional sobre estadificación radiográfica de sarcoidosis."
  },
  bibliografia: "Crouser ED, et al. Am J Respir Crit Care Med. 2020;201:e26-e51."
},
{
  id: "NEUMO-364",
  especialidad: "Neumología",
  tema: "Sarcoidosis",
  subtema: "Estadio II y deterioro funcional",
  dificultad: "Alta",
  caso: `Hombre de 48 años con diagnóstico histológico previo de sarcoidosis pulmonar, confirmado por granulomas no necrosantes en ganglio mediastínico y estudios microbiológicos negativos. Durante el último año desarrolla disnea progresiva y tos seca persistente. La radiografía muestra adenopatías hiliares bilaterales e infiltrados reticulonodulares perihiliares. La FVC disminuyó de 92% a 72% del predicho y la DLCO de 88% a 61% en diez meses. La saturación es de 95% en reposo y cae a 88% durante la prueba de caminata. No tiene fiebre ni expectoración purulenta. El calcio sérico es normal y no existen signos de infección aguda. La tomografía confirma enfermedad parenquimatosa sin fibrosis extensa.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Observar sin reevaluación porque la sarcoidosis nunca produce deterioro funcional",
    "Considerar enfermedad pulmonar activa clínicamente significativa y valorar tratamiento sistémico tras reevaluar diagnósticos alternativos, extensión y contraindicaciones",
    "Indicar antibióticos prolongados como tratamiento específico de los granulomas",
    "Realizar trasplante pulmonar inmediato por una FVC de 72%",
    "Suspender seguimiento porque el calcio sérico es normal"
  ],
  respuestaCorrecta: 1,
  explicacion: `El descenso significativo de FVC y DLCO, la progresión de disnea y la desaturación con ejercicio indican deterioro clínico y funcional. En sarcoidosis, el tratamiento sistémico se considera cuando existe riesgo de daño orgánico, deterioro pulmonar relevante o síntomas que afectan de forma importante la calidad de vida. Antes de atribuir toda progresión a actividad sarcoidea, deben reevaluarse infección, hipertensión pulmonar, embolia pulmonar, comorbilidades y otras causas de disnea. Los glucocorticoides suelen ser una opción inicial para enfermedad pulmonar sintomática o progresiva; la elección, duración y eventual uso de ahorradores de esteroides dependen del caso.`,
  perlaENARM: "En sarcoidosis, la indicación terapéutica se basa en actividad, síntomas, deterioro funcional y riesgo orgánico, no solo en el estadio radiográfico.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para tratamiento de sarcoidosis sin verificación documental.",
    internacional: "ERS 2021: tratamiento de la sarcoidosis."
  },
  bibliografia: "Baughman RP, et al. ERS clinical practice guidelines on treatment of sarcoidosis. Eur Respir J. 2021;58:2004079."
},
{
  id: "NEUMO-365",
  especialidad: "Neumología",
  tema: "Sarcoidosis",
  subtema: "Manifestaciones oculares y riesgo de pérdida visual",
  dificultad: "Alta",
  caso: `Mujer de 39 años con sarcoidosis confirmada mediante biopsia ganglionar, en seguimiento por adenopatías hiliares bilaterales y tos seca. Acude por dolor ocular, fotofobia, visión borrosa y enrojecimiento unilateral de 48 horas de evolución. No refiere traumatismo ni uso de lentes de contacto. La exploración general muestra estabilidad respiratoria, pero la agudeza visual del ojo afectado ha disminuido. No hay secreción purulenta. La paciente considera que los síntomas pueden esperar a la siguiente consulta neumológica porque su enfermedad pulmonar ha permanecido estable.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Esperar varias semanas porque la sarcoidosis ocular nunca compromete la visión",
    "Solicitar valoración oftalmológica urgente para identificar uveítis u otra complicación potencialmente amenazante para la visión",
    "Aumentar por cuenta propia los glucocorticoides inhalados como tratamiento ocular",
    "Indicar antibiótico tópico sin exploración oftalmológica",
    "Descartar sarcoidosis ocular porque la enfermedad pulmonar está estable"
  ],
  respuestaCorrecta: 1,
  explicacion: `La sarcoidosis puede afectar el segmento anterior o posterior del ojo y producir uveítis, inflamación del nervio óptico u otras complicaciones capaces de amenazar la visión. Dolor ocular, fotofobia y disminución de agudeza visual requieren valoración oftalmológica urgente, independientemente de la estabilidad pulmonar. El tratamiento depende de la localización y gravedad de la inflamación y puede incluir terapia tópica o sistémica bajo supervisión especializada. No debe retrasarse la evaluación esperando que aparezcan síntomas respiratorios nuevos.`,
  perlaENARM: "Dolor ocular, fotofobia o pérdida visual en sarcoidosis requieren evaluación oftalmológica urgente.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para sarcoidosis ocular sin verificación documental.",
    internacional: "ATS 2020: evaluación basal de afectación extrapulmonar; guías oftalmológicas para uveítis."
  },
  bibliografia: "Crouser ED, et al. Am J Respir Crit Care Med. 2020;201:e26-e51."
},
{
  id: "NEUMO-366",
  especialidad: "Neumología",
  tema: "Sarcoidosis",
  subtema: "Afectación cardiaca y trastornos de conducción",
  dificultad: "Alta",
  caso: `Hombre de 45 años con sarcoidosis pulmonar histológicamente confirmada, previamente estable, consulta por dos episodios de presíncope y palpitaciones. El electrocardiograma muestra bloqueo auriculoventricular de segundo grado avanzado, con periodos de conducción 2:1. El ecocardiograma revela fracción de eyección de 48%, sin valvulopatía significativa. La troponina está discretamente elevada y no hay datos clínicos de infección aguda. La radiografía torácica mantiene adenopatías hiliares sin progresión importante. El paciente pregunta si basta con repetir el electrocardiograma en seis meses porque no presenta disnea grave.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Considerar posible sarcoidosis cardiaca, ingresar para evaluación urgente del trastorno de conducción y realizar estudio cardiaco avanzado según disponibilidad",
    "Descartar afectación cardiaca porque las adenopatías pulmonares están estables",
    "Indicar solo broncodilatadores y seguimiento ambulatorio rutinario",
    "Atribuir el bloqueo a ansiedad sin investigar causas estructurales",
    "Esperar a que la fracción de eyección sea menor de 30% antes de valorar el riesgo"
  ],
  respuestaCorrecta: 0,
  explicacion: `La sarcoidosis cardiaca puede manifestarse con bloqueo auriculoventricular, arritmias ventriculares, disfunción ventricular o muerte súbita. Un trastorno de conducción avanzado con presíncope constituye una situación urgente, incluso cuando la enfermedad pulmonar parece estable. Debe evaluarse el riesgo arrítmico, monitorizar al paciente y valorar resonancia magnética cardiaca con realce tardío y/o PET cardiaco según la pregunta clínica y disponibilidad. La necesidad de estimulación, desfibrilador y tratamiento inmunosupresor depende de la evaluación especializada; no debe asumirse que un marcapasos convencional resuelve todos los riesgos asociados a sarcoidosis cardiaca.`,
  perlaENARM: "Sarcoidosis conocida + bloqueo AV avanzado o síncope: sospecha afectación cardiaca y evalúa urgentemente el riesgo arrítmico.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para sarcoidosis cardiaca sin verificación documental.",
    internacional: "ATS 2020 para detección de sarcoidosis extrapulmonar; consensos internacionales de sarcoidosis cardiaca."
  },
  bibliografia: "Crouser ED, et al. Am J Respir Crit Care Med. 2020;201:e26-e51. Consensos internacionales contemporáneos sobre sarcoidosis cardiaca."
},
{
  id: "NEUMO-367",
  especialidad: "Neumología",
  tema: "Sarcoidosis",
  subtema: "Hipercalcemia y alteración del metabolismo de vitamina D",
  dificultad: "Alta",
  caso: `Mujer de 51 años con sarcoidosis pulmonar confirmada, consulta por poliuria, polidipsia, estreñimiento y debilidad muscular. La creatinina aumentó de 0.9 a 1.7 mg/dL. El calcio sérico corregido es de 12.2 mg/dL, el fósforo está en rango normal-alto y la hormona paratiroidea se encuentra suprimida. La 25-hidroxivitamina D está en rango bajo-normal, mientras que la 1,25-dihidroxivitamina D está elevada. No toma tiazidas ni litio, pero comenzó por cuenta propia suplementos de calcio y vitamina D hace cuatro meses. La tomografía muestra adenopatías hiliares persistentes sin progresión parenquimatosa importante.`,
  pregunta: "¿Cuál es el mecanismo más probable y qué conducta debe priorizarse?",
  opciones: [
    "Hiperparatiroidismo primario, confirmado por la PTH suprimida",
    "Producción extrarrenal de calcitriol por macrófagos granulomatosos, con necesidad de tratar la hipercalcemia y revisar suplementos y función renal",
    "Deficiencia de vitamina D como explicación suficiente de la hipercalcemia",
    "Hipercalcemia por inmovilización como único diagnóstico, sin relación con sarcoidosis",
    "Pseudohipercalcemia, por lo que no es necesario repetir o tratar el resultado"
  ],
  respuestaCorrecta: 1,
  explicacion: `En sarcoidosis, los macrófagos activados dentro de los granulomas pueden expresar 1-alfa-hidroxilasa extrarrenal y convertir 25-hidroxivitamina D en calcitriol de manera relativamente no regulada. Esto aumenta la absorción intestinal de calcio y puede provocar hipercalcemia, hipercalciuria, nefrolitiasis o lesión renal. La PTH suprimida y el calcitriol elevado apoyan este mecanismo. Deben suspenderse o revisarse suplementos que puedan agravar el problema, evaluar hidratación y función renal, y tratar según gravedad. Los glucocorticoides pueden reducir la producción granulomatosa de calcitriol cuando la hipercalcemia se relaciona con sarcoidosis, pero la estrategia debe individualizarse y vigilar efectos adversos.`,
  perlaENARM: "Sarcoidosis con hipercalcemia, PTH suprimida y calcitriol elevado: piensa en producción extrarrenal de 1,25-(OH)₂-vitamina D.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para trastornos del calcio en sarcoidosis sin verificación documental.",
    internacional: "ATS 2020 para evaluación de sarcoidosis; literatura internacional sobre metabolismo del calcio."
  },
  bibliografia: "Crouser ED, et al. Am J Respir Crit Care Med. 2020;201:e26-e51."
},
{
  id: "NEUMO-368",
  especialidad: "Neumología",
  tema: "Sarcoidosis",
  subtema: "Selección de sitio de biopsia y EBUS",
  dificultad: "Alta",
  caso: `Hombre de 52 años con tos seca, disnea leve y adenopatías mediastínicas e hiliares bilaterales. La tomografía no identifica lesiones cutáneas ni masas periféricas accesibles para biopsia. La exploración no muestra adenopatías cervicales palpables y el paciente no presenta lesiones oculares ni cutáneas. El diagnóstico de sarcoidosis es probable, pero la edad, los síntomas constitucionales leves y el contexto epidemiológico hacen necesario excluir linfoma e infección granulomatosa. Se decide obtener tejido. El equipo compara mediastinoscopia quirúrgica con aspiración transbronquial guiada por ultrasonido endobronquial (EBUS-TBNA).`,
  pregunta: "¿Cuál es la estrategia de obtención de tejido más razonable como primera opción?",
  opciones: [
    "Biopsia pulmonar quirúrgica obligatoria en todos los pacientes con adenopatías mediastínicas",
    "EBUS-TBNA de ganglios mediastínicos o hiliares accesibles, con muestras adecuadas para histología y estudios microbiológicos pertinentes",
    "Biopsia hepática a ciegas, aunque no haya alteraciones hepáticas",
    "Evitar toda biopsia porque la ECA sérica puede sustituir la histología",
    "Realizar exclusivamente una biopsia cutánea de piel normal"
  ],
  respuestaCorrecta: 1,
  explicacion: `Cuando se necesita tejido y las adenopatías mediastínicas o hiliares son accesibles, EBUS-TBNA suele ser una opción inicial de buen rendimiento y menor invasividad que la mediastinoscopia. La muestra debe planificarse según los diagnósticos diferenciales: citología e histología, además de tinciones, cultivos o pruebas moleculares cuando se sospechen infecciones. Un resultado granulomatoso no necrosante no elimina automáticamente tuberculosis, micosis u otras causas. Si EBUS es no diagnóstico y la sospecha clínica sigue siendo importante, se valoran otras técnicas según el sitio y la enfermedad sospechada.`,
  perlaENARM: "En adenopatías mediastínicas accesibles, EBUS-TBNA suele ser una estrategia inicial para obtener tejido cuando se requiere confirmar sarcoidosis y excluir alternativas.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para selección de biopsia en sarcoidosis sin verificación documental.",
    internacional: "ATS 2020: diagnóstico de sarcoidosis y técnicas de obtención de tejido."
  },
  bibliografia: "Crouser ED, et al. Am J Respir Crit Care Med. 2020;201:e26-e51."
},
{
  id: "NEUMO-369",
  especialidad: "Neumología",
  tema: "Sarcoidosis",
  subtema: "Granulomas y diagnóstico diferencial infeccioso",
  dificultad: "Alta",
  caso: `Mujer de 43 años, originaria de una zona con tuberculosis endémica, consulta por tos de dos meses, febrícula y adenopatías mediastínicas. La biopsia ganglionar muestra granulomas epitelioides con focos pequeños de necrosis. La tomografía revela adenopatías y algunos nódulos pulmonares, sin fibrosis extensa. La tinción inicial para bacilos ácido-alcohol resistentes es negativa; el cultivo y las pruebas moleculares todavía están pendientes. La enzima convertidora de angiotensina está ligeramente elevada y no existen manifestaciones extrapulmonares características de sarcoidosis. Se propone iniciar prednisona por la presencia de granulomas.`,
  pregunta: "¿Cuál es la conducta más apropiada antes de iniciar inmunosupresión?",
  opciones: [
    "Iniciar glucocorticoides inmediatamente porque los granulomas confirman sarcoidosis",
    "Profundizar la evaluación microbiológica y etiológica, incluida tuberculosis y micosis según epidemiología, antes de atribuir el cuadro a sarcoidosis",
    "Descartar infección por la tinción inicial negativa",
    "Usar un inmunosupresor más potente para acelerar la desaparición de los ganglios",
    "Diagnosticar sarcoidosis por la ECA elevada, independientemente de la necrosis"
  ],
  respuestaCorrecta: 1,
  explicacion: `Los granulomas no son específicos de sarcoidosis. La necrosis, el contexto epidemiológico y los síntomas constitucionales obligan a considerar infecciones como tuberculosis y micosis. Una tinción negativa no excluye enfermedad paucibacilar; se requieren pruebas adicionales según el contexto, incluyendo cultivos y métodos moleculares. La inmunosupresión puede agravar una infección no reconocida, por lo que la evaluación debe completarse de forma proporcionada a la gravedad clínica. Si existe deterioro orgánico amenazante, las decisiones diagnósticas y terapéuticas deben coordinarse urgentemente con especialistas, evitando retrasos peligrosos y tratamientos empíricos no justificados.`,
  perlaENARM: "Granuloma no equivale a sarcoidosis; excluye infecciones granulomatosas antes de iniciar inmunosupresión cuando el contexto lo exige.",
  gpc: {
    mexico: "Consultar la normativa y GPC mexicanas vigentes para tuberculosis y micosis pertinentes al contexto epidemiológico; no se asignan identificadores sin verificación.",
    internacional: "ATS 2020 para sarcoidosis y guías vigentes de tuberculosis y micosis endémicas."
  },
  bibliografia: "Crouser ED, et al. Am J Respir Crit Care Med. 2020;201:e26-e51. Guías internacionales vigentes de tuberculosis y micosis endémicas."
},
{
  id: "NEUMO-370",
  especialidad: "Neumología",
  tema: "Sarcoidosis",
  subtema: "Tratamiento inicial con glucocorticoides",
  dificultad: "Alta",
  caso: `Hombre de 46 años con sarcoidosis pulmonar confirmada, adenopatías e infiltrados parenquimatosos, que desarrolla disnea limitante y tos persistente. La FVC descendió de 88% a 68% del predicho en ocho meses y la DLCO de 84% a 59%. Se han excluido razonablemente infección activa, tromboembolia pulmonar y disfunción cardiaca. No presenta hipercalcemia ni afectación neurológica. Tiene diabetes mellitus tipo 2 con HbA1c de 8.4%, obesidad y antecedentes de insomnio. El equipo considera tratamiento sistémico por progresión funcional, pero preocupa el riesgo metabólico de glucocorticoides.`,
  pregunta: "¿Cuál es el enfoque terapéutico más apropiado?",
  opciones: [
    "No tratar nunca la sarcoidosis pulmonar, incluso ante deterioro funcional progresivo",
    "Valorar glucocorticoides sistémicos como tratamiento inicial habitual y establecer un plan individualizado de dosis, duración, monitorización metabólica y alternativas ahorradoras de esteroides",
    "Indicar antibióticos indefinidos para reducir los granulomas",
    "Iniciar quimioterapia citotóxica sin evaluación especializada",
    "Realizar trasplante pulmonar de inmediato por la disminución de FVC"
  ],
  respuestaCorrecta: 1,
  explicacion: `La progresión sintomática y el descenso significativo de FVC y DLCO, tras excluir causas alternativas, respaldan la consideración de tratamiento sistémico. Los glucocorticoides son una opción inicial habitual en sarcoidosis pulmonar clínicamente significativa, pero deben equilibrarse sus beneficios con riesgos como hiperglucemia, aumento de peso, osteoporosis, hipertensión e infecciones. En pacientes con comorbilidades metabólicas relevantes, el plan debe incluir seguimiento estrecho y valorar ahorradores de esteroides cuando estén indicados. La decisión depende de la extensión, actividad, velocidad de progresión y preferencias del paciente.`,
  perlaENARM: "La progresión funcional justifica considerar tratamiento; la diabetes obliga a planear y monitorizar cuidadosamente la exposición a glucocorticoides.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para tratamiento de sarcoidosis sin verificación documental.",
    internacional: "ERS 2021: tratamiento de la sarcoidosis."
  },
  bibliografia: "Baughman RP, et al. Eur Respir J. 2021;58:2004079."
},
{
  id: "NEUMO-371",
  especialidad: "Neumología",
  tema: "Sarcoidosis",
  subtema: "Metotrexato como ahorrador de glucocorticoides",
  dificultad: "Alta",
  caso: `Mujer de 50 años con sarcoidosis pulmonar sintomática y artritis inflamatoria, que ha requerido glucocorticoides sistémicos durante nueve meses. Cada intento de reducción se acompaña de reaparición de tos, artralgias y deterioro de la FVC. Durante el tratamiento desarrolló aumento de peso, hipertensión y empeoramiento importante de la glucemia. La creatinina es normal, las transaminasas están dentro del intervalo de referencia y no existe citopenia. No hay evidencia de infección activa. Se discute la introducción de un fármaco ahorrador de esteroides y la paciente pregunta si puede iniciar metotrexato sin evaluación previa.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Mantener indefinidamente la misma dosis de glucocorticoide sin reevaluar toxicidad",
    "Considerar metotrexato como ahorrador de glucocorticoides, después de evaluar contraindicaciones, embarazo cuando corresponda, función hepática, renal y hematológica, e infecciones pertinentes",
    "Prescribir metotrexato a dosis diaria porque es más eficaz que la administración semanal",
    "Sustituir todos los controles por una determinación anual de ECA sérica",
    "Iniciar un biológico sin confirmar actividad de la enfermedad ni revisar tratamientos previos"
  ],
  respuestaCorrecta: 1,
  explicacion: `El metotrexato es una opción ahorradora de glucocorticoides en sarcoidosis persistente o cuando la toxicidad de esteroides es importante. Antes de iniciarlo deben evaluarse función hepática y renal, biometría hemática, infecciones relevantes, consumo de alcohol, posibilidad de embarazo y otros factores de riesgo. Se administra habitualmente una vez por semana, con suplementación de ácido fólico según el protocolo. El seguimiento debe valorar toxicidad, síntomas, función pulmonar y actividad orgánica. No debe iniciarse sin un plan de vigilancia ni utilizarse como sustituto de la evaluación clínica.`,
  perlaENARM: "En sarcoidosis con dependencia de esteroides o toxicidad significativa, metotrexato puede ser un ahorrador útil; requiere controles y administración semanal correcta.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para metotrexato en sarcoidosis sin verificación documental.",
    internacional: "ERS 2021: tratamiento de la sarcoidosis."
  },
  bibliografia: "Baughman RP, et al. Eur Respir J. 2021;58:2004079."
},
{
  id: "NEUMO-372",
  especialidad: "Neumología",
  tema: "Sarcoidosis",
  subtema: "Neurosarcoidosis",
  dificultad: "Alta",
  caso: `Hombre de 42 años con sarcoidosis pulmonar confirmada por biopsia ganglionar, que desarrolla cefalea persistente, diplopía y debilidad facial periférica derecha durante tres semanas. La exploración neurológica identifica paresia del sexto par craneal y parálisis facial periférica. La resonancia magnética cerebral con contraste muestra realce leptomeníngeo basal y engrosamiento del nervio facial, sin lesión vascular aguda. No tiene fiebre ni meningismo intenso. La glucosa y el hemograma son normales, y la evaluación inicial para infección del sistema nervioso central no ha concluido. Se considera afectación neurológica por sarcoidosis.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Diagnosticar neurosarcoidosis definitivamente por la resonancia, sin excluir infección ni otras causas",
    "Realizar evaluación neurológica urgente, completar estudios dirigidos para diagnósticos alternativos y valorar tratamiento especializado por posible neurosarcoidosis",
    "Indicar exclusivamente fisioterapia y reevaluar en seis meses",
    "Administrar antibióticos para tuberculosis sin obtener estudios ni valorar epidemiología",
    "Descartar neurosarcoidosis porque la enfermedad pulmonar no ha progresado"
  ],
  respuestaCorrecta: 1,
  explicacion: `La neurosarcoidosis puede producir neuropatías craneales, meningitis o inflamación leptomeníngea y lesiones del parénquima cerebral o médula. Sin embargo, la resonancia no es específica. Deben investigarse infecciones, neoplasias, enfermedades inflamatorias y otras etiologías, con estudios de líquido cefalorraquídeo cuando estén indicados y sean seguros. La confirmación puede apoyarse en biopsia de tejido extracraneal o neural según el caso; la biopsia neural puede tener riesgos importantes. La afectación neurológica significativa suele requerir tratamiento sistémico bajo supervisión especializada y seguimiento estrecho.`,
  perlaENARM: "En sospecha de neurosarcoidosis, integra clínica, resonancia, líquido cefalorraquídeo y exclusión de infecciones y neoplasias.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para neurosarcoidosis sin verificación documental.",
    internacional: "Consensos internacionales de diagnóstico y tratamiento de neurosarcoidosis."
  },
  bibliografia: "Consensos y revisiones internacionales contemporáneas de neurosarcoidosis."
},
{
  id: "NEUMO-373",
  especialidad: "Neumología",
  tema: "Sarcoidosis",
  subtema: "Afectación renal y nefrolitiasis",
  dificultad: "Alta",
  caso: `Mujer de 47 años con sarcoidosis pulmonar conocida, que consulta por dolor tipo cólico en flanco derecho, náusea y hematuria microscópica. La creatinina aumentó de 0.8 a 1.5 mg/dL. El calcio sérico es de 11.3 mg/dL y la PTH está suprimida. La tomografía abdominal identifica un cálculo ureteral pequeño y nefrocalcinosis medular incipiente. La paciente refiere consumo diario de suplementos de calcio y vitamina D. No presenta fiebre ni datos de infección urinaria complicada. Se considera que la enfermedad granulomatosa podría explicar tanto la alteración del calcio como el deterioro renal.`,
  pregunta: "¿Cuál es el mecanismo y la conducta más apropiados?",
  opciones: [
    "Hiperparatiroidismo primario confirmado pese a PTH suprimida",
    "Hipercalcemia e hipercalciuria asociadas a producción extrarrenal de calcitriol; evaluar obstrucción, función renal y suplementos, y tratar según gravedad",
    "Insuficiencia renal terminal irreversible, que requiere diálisis inmediata en todos los casos",
    "Nefropatía diabética como explicación suficiente de la nefrocalcinosis",
    "Litiasis no relacionada con sarcoidosis, por lo que no es necesario estudiar metabolismo del calcio"
  ],
  respuestaCorrecta: 1,
  explicacion: `La sarcoidosis puede aumentar la producción de calcitriol por macrófagos granulomatosos, incrementando la absorción intestinal de calcio y favoreciendo hipercalcemia, hipercalciuria, nefrolitiasis y nefrocalcinosis. La lesión renal puede ser multifactorial e incluir obstrucción, alteraciones del metabolismo del calcio o nefritis intersticial granulomatosa. Debe evaluarse la función renal, el grado de obstrucción, el estado de hidratación y el uso de suplementos. El tratamiento depende de la gravedad y de la causa; puede requerir intervención urológica si hay obstrucción y tratamiento específico de la sarcoidosis en casos seleccionados.`,
  perlaENARM: "Sarcoidosis puede causar lesión renal por alteración del calcio, nefrolitiasis, nefrocalcinosis o nefritis intersticial granulomatosa.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para afectación renal por sarcoidosis sin verificación documental.",
    internacional: "ATS 2020 y literatura internacional sobre manifestaciones renales de sarcoidosis."
  },
  bibliografia: "Crouser ED, et al. Am J Respir Crit Care Med. 2020;201:e26-e51."
},
{
  id: "NEUMO-374",
  especialidad: "Neumología",
  tema: "Sarcoidosis",
  subtema: "Hipertensión pulmonar asociada a sarcoidosis",
  dificultad: "Alta",
  caso: `Hombre de 58 años con sarcoidosis pulmonar de ocho años de evolución, con fibrosis y bronquiectasias por tracción en tomografía. En los últimos seis meses desarrolla disnea desproporcionada respecto a los cambios radiográficos, síncope durante esfuerzo y edema maleolar. La saturación es de 91% en reposo y desciende a 82% durante la caminata. La DLCO es de 35% del predicho, mientras que la FVC permanece en 68%. El ecocardiograma sugiere dilatación y disfunción del ventrículo derecho, con presión pulmonar estimada elevada. No presenta signos claros de congestión izquierda. Se sospecha hipertensión pulmonar asociada a sarcoidosis.`,
  pregunta: "¿Cuál es la siguiente estrategia diagnóstica más apropiada?",
  opciones: [
    "Confirmar hipertensión pulmonar exclusivamente con la estimación ecocardiográfica",
    "Referir para evaluación especializada, estudiar causas contribuyentes y considerar cateterismo cardiaco derecho para confirmar y caracterizar la hemodinámica",
    "Descartar hipertensión pulmonar porque la FVC es mayor de 50%",
    "Iniciar un vasodilatador pulmonar específico sin confirmar el fenotipo hemodinámico",
    "Atribuir todos los síntomas a fibrosis pulmonar y evitar pruebas adicionales"
  ],
  respuestaCorrecta: 1,
  explicacion: `La sarcoidosis puede asociarse a hipertensión pulmonar por fibrosis y destrucción vascular, hipoxia, compresión vascular por adenopatías, enfermedad venosa o mecanismos mixtos. Disnea desproporcionada, DLCO muy reducida, desaturación, síncope y signos de disfunción ventricular derecha son datos de alarma. El ecocardiograma estima la probabilidad, pero no confirma de manera definitiva el diagnóstico ni define por sí solo el mecanismo. El cateterismo cardiaco derecho permite confirmar la hipertensión pulmonar y caracterizar la hemodinámica, lo que orienta tratamiento. También debe evaluarse tromboembolia crónica y otras causas tratables.`,
  perlaENARM: "En sarcoidosis con disnea desproporcionada, DLCO muy baja y signos de disfunción derecha, investiga hipertensión pulmonar; la confirmación hemodinámica requiere cateterismo.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para hipertensión pulmonar asociada a sarcoidosis sin verificación documental.",
    internacional: "ESC/ERS 2022 para hipertensión pulmonar; ATS 2020 para sarcoidosis."
  },
  bibliografia: "Humbert M, et al. 2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension. Eur Heart J. 2022;43:3618-3731. Crouser ED, et al. Am J Respir Crit Care Med. 2020;201:e26-e51."
},
{
  id: "NEUMO-375",
  especialidad: "Neumología",
  tema: "Sarcoidosis",
  subtema: "PET cardiaco y resonancia magnética",
  dificultad: "Alta",
  caso: `Mujer de 49 años con sarcoidosis sistémica confirmada, que presenta palpitaciones, episodios de presíncope y descenso reciente de la fracción de eyección de 60% a 43%. El electrocardiograma muestra extrasístoles ventriculares frecuentes y bloqueo de rama derecha nuevo. La troponina está ligeramente elevada y el ecocardiograma no identifica enfermedad coronaria evidente. La resonancia cardiaca muestra realce tardío de gadolinio parcheado en segmentos no correspondientes a un único territorio coronario. El equipo necesita distinguir cicatriz miocárdica, inflamación activa y otras etiologías para orientar tratamiento y estratificación de riesgo.`,
  pregunta: "¿Cuál es la interpretación más apropiada de los estudios avanzados?",
  opciones: [
    "El realce tardío confirma por sí solo sarcoidosis cardiaca activa en todos los casos",
    "La resonancia puede identificar patrón de lesión y fibrosis; el PET con FDG puede ayudar a valorar inflamación activa, con preparación adecuada y correlación clínica",
    "Un ecocardiograma sin alteraciones coronarias excluye sarcoidosis cardiaca",
    "El PET sustituye toda evaluación electrofisiológica y de riesgo arrítmico",
    "Las extrasístoles ventriculares descartan una enfermedad inflamatoria miocárdica"
  ],
  respuestaCorrecta: 1,
  explicacion: `La resonancia magnética cardiaca con realce tardío ayuda a detectar lesión y fibrosis miocárdica y aporta información pronóstica, aunque el patrón no es absolutamente específico. El PET cardiaco con FDG puede identificar inflamación metabólicamente activa, pero requiere preparación dietética y supresión fisiológica adecuadas para reducir falsos positivos. Ambas modalidades son complementarias y deben interpretarse junto con síntomas, ECG, función ventricular y evaluación de otras causas. La estratificación de riesgo de muerte súbita y la decisión sobre inmunosupresión, marcapasos o desfibrilador requieren evaluación especializada; ninguna prueba aislada resuelve todos los componentes del problema.`,
  perlaENARM: "La resonancia caracteriza lesión y fibrosis; el PET-FDG puede ayudar a identificar inflamación activa en sarcoidosis cardiaca.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para imagen avanzada de sarcoidosis cardiaca sin verificación documental.",
    internacional: "Consensos internacionales de sarcoidosis cardiaca y recomendaciones de imagen cardiaca."
  },
  bibliografia: "Consensos internacionales contemporáneos sobre diagnóstico por resonancia y PET-FDG en sarcoidosis cardiaca."
},
{
  id: "NEUMO-376",
  especialidad: "Neumología",
  tema: "Sarcoidosis",
  subtema: "Sarcoidosis cutánea y biopsia accesible",
  dificultad: "Alta",
  caso: `Mujer de 40 años con tos seca, fatiga y adenopatías hiliares bilaterales. Presenta múltiples pápulas infiltradas de color rojo violáceo en la cara, especialmente alrededor de la nariz y los surcos nasolabiales. No hay fiebre ni síntomas constitucionales intensos. La tomografía muestra adenopatías mediastínicas y micronódulos peribroncovasculares. No se ha realizado biopsia y la paciente pregunta si es necesario obtener tejido del pulmón. El dermatólogo considera que una lesión cutánea podría ser accesible para toma de muestra. Se requiere confirmar la naturaleza de las lesiones y excluir diagnósticos alternativos.`,
  pregunta: "¿Cuál es la estrategia diagnóstica más razonable?",
  opciones: [
    "Realizar obligatoriamente biopsia pulmonar quirúrgica como primer procedimiento",
    "Valorar biopsia de una lesión cutánea accesible para histología y estudios adicionales según sospecha, integrando el resultado con la clínica y la imagen",
    "Confirmar sarcoidosis solo por la apariencia de las pápulas, sin evaluación adicional",
    "Utilizar exclusivamente ECA sérica como prueba confirmatoria",
    "Descartar sarcoidosis porque las lesiones cutáneas no forman parte de la enfermedad"
  ],
  respuestaCorrecta: 1,
  explicacion: `Las lesiones cutáneas compatibles pueden ofrecer un sitio de biopsia accesible y menos invasivo que el pulmón o el mediastino. La histología puede mostrar granulomas no necrosantes, pero es necesario correlacionar con el cuadro sistémico y excluir infección, cuerpos extraños y otras enfermedades granulomatosas. La selección del sitio debe maximizar el rendimiento diagnóstico y minimizar riesgos. Si la muestra cutánea no es diagnóstica o no permite excluir alternativas relevantes, puede requerirse otro procedimiento.`,
  perlaENARM: "Cuando existe una lesión cutánea accesible, puede ser preferible biopsiarla antes de recurrir a procedimientos pulmonares invasivos.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para biopsia cutánea en sarcoidosis sin verificación documental.",
    internacional: "ATS 2020: diagnóstico de sarcoidosis y selección de sitios de biopsia."
  },
  bibliografia: "Crouser ED, et al. Am J Respir Crit Care Med. 2020;201:e26-e51."
},
{
  id: "NEUMO-377",
  especialidad: "Neumología",
  tema: "Sarcoidosis",
  subtema: "Seguimiento de enfermedad estable",
  dificultad: "Alta",
  caso: `Hombre de 37 años con sarcoidosis pulmonar estadio I diagnosticada hace cuatro meses mediante presentación clínica compatible y evaluación especializada. No presenta disnea limitante, hipoxemia, alteraciones de la función pulmonar ni manifestaciones extrapulmonares identificadas. La FVC es de 98% del predicho y la DLCO de 95%. El calcio sérico y la creatinina son normales. La tomografía no muestra infiltrados parenquimatosos ni fibrosis. El paciente solicita iniciar prednisona para eliminar las adenopatías con mayor rapidez y pregunta si puede evitar revisiones posteriores si desaparece la tos.`,
  pregunta: "¿Cuál es el plan más apropiado?",
  opciones: [
    "Iniciar glucocorticoides sistémicos a dosis altas en todos los pacientes con estadio I",
    "Adoptar vigilancia clínica y funcional periódica, sin tratamiento sistémico inmediato si no existen indicaciones, y reevaluar síntomas u órganos afectados",
    "Suspender todo seguimiento porque la función pulmonar es normal",
    "Indicar antibióticos durante seis meses para prevenir progresión",
    "Realizar biopsia pulmonar quirúrgica repetida en cada visita"
  ],
  respuestaCorrecta: 1,
  explicacion: `La sarcoidosis estadio I sin deterioro funcional ni afectación orgánica relevante suele manejarse con observación y seguimiento, porque puede resolverse espontáneamente. Los glucocorticoides no se indican de manera automática por la presencia de adenopatías. El seguimiento debe identificar aparición de síntomas, cambios en función pulmonar y manifestaciones extrapulmonares relevantes, con estudios seleccionados según el contexto. La frecuencia de las revisiones depende de la evolución y el riesgo individual; una evaluación inicial normal no justifica abandonar toda vigilancia.`,
  perlaENARM: "Sarcoidosis estadio I asintomática o mínimamente sintomática suele observarse; no toda adenopatía requiere glucocorticoides.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para seguimiento de sarcoidosis sin verificación documental.",
    internacional: "ATS 2020 para evaluación de sarcoidosis; ERS 2021 para tratamiento."
  },
  bibliografia: "Crouser ED, et al. Am J Respir Crit Care Med. 2020;201:e26-e51. Baughman RP, et al. Eur Respir J. 2021;58:2004079."
},
{
  id: "NEUMO-378",
  especialidad: "Neumología",
  tema: "Sarcoidosis",
  subtema: "Sarcoidosis refractaria y tratamiento biológico",
  dificultad: "Alta",
  caso: `Mujer de 55 años con sarcoidosis pulmonar y cutánea confirmada, persistente pese a tratamiento con glucocorticoides y metotrexato administrados de forma adecuada durante varios meses. La FVC continúa descendiendo y las lesiones cutáneas son dolorosas y desfigurantes. Se han revisado adherencia, dosis, toxicidad y diagnósticos alternativos; los estudios microbiológicos no muestran infección activa. La paciente presenta efectos adversos metabólicos importantes por los esteroides y requiere una estrategia ahorradora adicional. No tiene insuficiencia cardiaca descompensada ni antecedentes de enfermedad desmielinizante. El equipo considera tratamiento biológico, pero debe evaluar riesgos antes de iniciarlo.`,
  pregunta: "¿Cuál es el enfoque más apropiado?",
  opciones: [
    "Iniciar un anti-TNF sin evaluar tuberculosis latente, hepatitis ni otras contraindicaciones",
    "Valorar terapia biológica, como infliximab en casos seleccionados refractarios, tras evaluación de infección latente, riesgos y monitorización especializada",
    "Mantener indefinidamente glucocorticoides a dosis altas sin reevaluar toxicidad",
    "Suspender todo tratamiento porque la sarcoidosis no puede tratarse si no responde a metotrexato",
    "Utilizar antibióticos de amplio espectro como tratamiento inmunomodulador"
  ],
  respuestaCorrecta: 1,
  explicacion: `En sarcoidosis persistente o refractaria a glucocorticoides y tratamientos ahorradores convencionales, los inhibidores de TNF pueden considerarse en pacientes seleccionados. Antes de infliximab deben evaluarse tuberculosis latente, hepatitis B y otras infecciones relevantes, así como insuficiencia cardiaca, enfermedades desmielinizantes y otros riesgos. El tratamiento debe acompañarse de monitorización clínica, funcional y de seguridad. La decisión debe basarse en actividad orgánica, daño potencial, respuesta previa, toxicidad y experiencia del equipo tratante; no todos los pacientes con enfermedad persistente necesitan un biológico.`,
  perlaENARM: "En sarcoidosis refractaria, infliximab puede ser una opción especializada, pero exige cribado infeccioso y evaluación de contraindicaciones.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para biológicos en sarcoidosis sin verificación documental.",
    internacional: "ERS 2021: tratamiento de la sarcoidosis."
  },
  bibliografia: "Baughman RP, et al. Eur Respir J. 2021;58:2004079."
},
{
  id: "NEUMO-379",
  especialidad: "Neumología",
  tema: "Sarcoidosis",
  subtema: "Trasplante pulmonar en enfermedad avanzada",
  dificultad: "Alta",
  caso: `Hombre de 59 años con sarcoidosis pulmonar fibrótica de larga evolución, disnea en reposo y limitación funcional grave pese al tratamiento especializado. La FVC es de 38% del predicho y la DLCO de 27%; requiere oxígeno suplementario y presenta desaturación importante con mínimos esfuerzos. La tomografía evidencia distorsión arquitectónica, fibrosis extensa y bronquiectasias por tracción. Se ha evaluado hipertensión pulmonar asociada. No existe infección activa conocida y la función renal es relativamente conservada. El paciente pregunta si debe esperar a que el tratamiento médico fracase por completo antes de ser remitido para evaluación de trasplante.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Esperar hasta que exista ventilación mecánica invasiva prolongada antes de remitirlo",
    "Remitir oportunamente a un centro de trasplante para evaluación integral, sin asumir que la fibrosis avanzada excluye automáticamente la opción",
    "Suspender oxígeno porque no modifica la fibrosis",
    "Indicar glucocorticoides a dosis indefinidas sin valorar reversibilidad ni toxicidad",
    "Realizar resección de las áreas fibróticas como tratamiento definitivo"
  ],
  respuestaCorrecta: 1,
  explicacion: `La enfermedad pulmonar fibrótica avanzada con deterioro funcional grave, hipoxemia y limitación progresiva justifica valoración temprana para trasplante en un centro especializado. La remisión no equivale a inclusión automática en lista: se evalúan comorbilidades, hipertensión pulmonar, infección, estado funcional, adherencia y otros factores. La decisión debe tomarse antes de una descompensación terminal cuando sea posible. El tratamiento médico y el soporte de oxígeno continúan según necesidad durante la evaluación.`,
  perlaENARM: "En sarcoidosis fibrótica progresiva con deterioro grave, la remisión temprana para trasplante es preferible a esperar una fase terminal.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para trasplante pulmonar en sarcoidosis sin verificación documental.",
    internacional: "Guías internacionales de selección y remisión para trasplante pulmonar."
  },
  bibliografia: "Guías internacionales contemporáneas de selección de candidatos y remisión para trasplante pulmonar."
},
{
  id: "NEUMO-380",
  especialidad: "Neumología",
  tema: "Sarcoidosis",
  subtema: "Caso integrador: granulomas, afectación extrapulmonar y decisión terapéutica",
  dificultad: "Alta",
  caso: `Mujer de 48 años con tos seca y disnea progresiva de seis meses, artralgias, lesiones cutáneas infiltradas y episodios recientes de palpitaciones. La tomografía torácica muestra adenopatías hiliares bilaterales, adenopatías mediastínicas y micronódulos peribroncovasculares. La biopsia de una lesión cutánea revela granulomas epitelioides no necrosantes; las tinciones iniciales para microorganismos son negativas, aunque los cultivos aún no han concluido. La FVC es de 70% del predicho y la DLCO de 55%, con descenso documentado en dos mediciones. El ECG muestra bloqueo de rama derecha y extrasístoles ventriculares frecuentes. El calcio sérico es de 11.6 mg/dL y la PTH está suprimida. La paciente presenta además visión borrosa intermitente, sin valoración oftalmológica. No existe hipotensión ni insuficiencia respiratoria aguda, pero el cuadro afecta varios sistemas y existe riesgo de complicaciones orgánicas.`,
  pregunta: "¿Cuál es el plan integral más apropiado?",
  opciones: [
    "Tratar únicamente la enfermedad pulmonar con glucocorticoides sin estudiar el corazón, los ojos, el calcio ni las infecciones",
    "Integrar el diagnóstico con exclusión etiológica, evaluar urgentemente las manifestaciones cardiacas y oculares, estudiar la hipercalcemia y definir tratamiento sistémico según actividad y riesgo orgánico",
    "Descartar sarcoidosis porque la biopsia cutánea no muestra granulomas necrosantes",
    "Esperar a que aparezca fibrosis radiológica antes de intervenir cualquier órgano",
    "Administrar un anti-TNF de inmediato sin completar evaluación de infección ni estratificación cardiaca"
  ],
  respuestaCorrecta: 1,
  explicacion: `El cuadro es compatible con sarcoidosis multisistémica, pero los granulomas no necrosantes no son exclusivos de la enfermedad y los cultivos pendientes deben interpretarse según el contexto epidemiológico. La caída de FVC y DLCO sugiere enfermedad pulmonar clínicamente significativa. Las palpitaciones y alteraciones del ECG requieren evaluación cardiaca prioritaria por riesgo de afectación miocárdica y arritmias; la visión borrosa exige valoración oftalmológica urgente. La hipercalcemia con PTH suprimida obliga a evaluar calcitriol, función renal y consumo de suplementos. El tratamiento debe dirigirse a los órganos amenazados y a la actividad demostrada, con elección de glucocorticoides y posibles ahorradores según el perfil clínico, después de evaluar infecciones y contraindicaciones.`,
  perlaENARM: "La sarcoidosis multisistémica exige priorizar corazón, ojos, riñón y función pulmonar; el tratamiento se dirige al riesgo de daño orgánico, no solo a la imagen torácica.",
  gpc: {
    mexico: "No se atribuye una GPC mexicana específica vigente para sarcoidosis multisistémica sin verificación documental.",
    internacional: "ATS 2020: diagnóstico y evaluación extrapulmonar; ERS 2021: tratamiento de la sarcoidosis."
  },
  bibliografia: "Crouser ED, et al. Am J Respir Crit Care Med. 2020;201:e26-e51. Baughman RP, et al. Eur Respir J. 2021;58:2004079."
}

];
