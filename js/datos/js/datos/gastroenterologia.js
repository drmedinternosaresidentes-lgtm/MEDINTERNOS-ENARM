
window.BANCO_GASTROENTEROLOGIA = [
{
  id: "GASTRO-001",
  especialidad: "Gastroenterología",
  tema: "Hemorragia gastrointestinal alta",
  subtema: "Estabilización inicial y choque hemorrágico",
  dificultad: "Muy alta",
  caso: `Varón de 64 años con antecedente de úlcera péptica y consumo frecuente de naproxeno consulta por hematemesis abundante y melena de seis horas de evolución. Está pálido, diaforético y confuso; TA 82/48 mmHg, FC 128 lpm, FR 26 rpm. La hemoglobina inicial es de 9.1 g/dL y el lactato de 4.2 mmol/L. ¿Cuál es la prioridad inmediata?`,
  pregunta: "¿Cuál es la conducta inicial más apropiada?",
  opciones: [
    "Realizar endoscopia antes de iniciar reanimación",
    "Estabilizar ABC, obtener accesos venosos de gran calibre e iniciar reanimación guiada por respuesta",
    "Administrar únicamente PPI oral y observar",
    "Esperar a que la hemoglobina descienda por debajo de 7 g/dL",
    "Administrar ácido tranexámico de rutina"
  ],
  respuestaCorrecta: 1,
  explicacion: `El paciente presenta datos de choque hemorrágico. La prioridad es estabilizar la vía aérea, respiración y circulación según la situación clínica, colocar accesos venosos de gran calibre, solicitar estudios y pruebas cruzadas, iniciar reanimación y preparar hemoderivados según la perfusión, el sangrado activo y la respuesta. Una hemoglobina inicial aparentemente aceptable no excluye una pérdida sanguínea grave. La endoscopia debe realizarse después de la reanimación inicial adecuada, sin retrasos innecesarios.`,
  perlaENARM: "En hemorragia digestiva alta con choque, la prioridad es la estabilización; no esperes a que la hemoglobina descienda.",
  gpc: {
    mexico: "Verificar la GPC mexicana aplicable y su vigencia en el catálogo CENETEC/IMSS.",
    internacional: "ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding, 2021."
  },
  bibliografia: "ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. Am J Gastroenterol. 2021."
},
{
  id: "GASTRO-002",
  especialidad: "Gastroenterología",
  tema: "Hemorragia gastrointestinal alta",
  subtema: "Glasgow-Blatchford",
  dificultad: "Muy alta",
  caso: `Mujer de 46 años acude por dos evacuaciones melénicas y mareo al ponerse de pie. TA 118/72 mmHg, FC 96 lpm, hemoglobina 12.2 g/dL y urea 32 mg/dL. No tiene insuficiencia cardiaca ni hepatopatía. El puntaje Glasgow-Blatchford calculado es de 1. Permanece estable y dispone de seguimiento confiable. ¿Cuál es la conducta razonable?`,
  pregunta: "¿Qué estrategia puede considerarse en esta paciente de muy bajo riesgo?",
  opciones: [
    "Hospitalización obligatoria en UCI",
    "Alta sin instrucciones ni seguimiento",
    "Manejo ambulatorio con seguimiento y endoscopia programada, si no existen otros motivos para ingreso",
    "Transfusión preventiva de concentrados eritrocitarios",
    "Cirugía exploratoria inmediata"
  ],
  respuestaCorrecta: 2,
  explicacion: `Un Glasgow-Blatchford de 0–1 identifica pacientes seleccionados con muy bajo riesgo de requerir intervención hospitalaria. Puede considerarse manejo ambulatorio con seguimiento y endoscopia programada. El puntaje no sustituye el juicio clínico: sangrado persistente, comorbilidades, inestabilidad o falta de seguimiento pueden justificar ingreso.`,
  perlaENARM: "Glasgow-Blatchford 0–1 puede apoyar manejo ambulatorio en pacientes seleccionados.",
  gpc: {
    mexico: "Verificar la guía mexicana aplicable y su vigencia.",
    internacional: "ACG 2021; ESGE guidance for nonvariceal upper gastrointestinal hemorrhage."
  },
  bibliografia: "ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. 2021."
},
{
  id: "GASTRO-003",
  especialidad: "Gastroenterología",
  tema: "Hemorragia gastrointestinal alta",
  subtema: "Transfusión restrictiva",
  dificultad: "Muy alta",
  caso: `Varón de 59 años hospitalizado por hematemesis, ya estabilizado tras reanimación inicial. No tiene cardiopatía isquémica conocida ni datos de hipoperfusión persistente. La hemoglobina seriada es de 6.8 g/dL y se planea endoscopia. ¿Cuál es la estrategia transfusional habitual?`,
  pregunta: "¿Cuál es la conducta más apropiada respecto a concentrados eritrocitarios?",
  opciones: [
    "Esperar a que la hemoglobina sea menor de 4 g/dL",
    "Considerar transfusión con una estrategia restrictiva, habitualmente con umbral cercano a 7 g/dL, individualizando el contexto",
    "Transfundir a todos hasta alcanzar 12 g/dL",
    "Transfundir solo si hay trombocitopenia",
    "Administrar plasma para corregir la anemia"
  ],
  respuestaCorrecta: 1,
  explicacion: `En la mayoría de los pacientes hospitalizados con hemorragia digestiva alta se recomienda una estrategia transfusional restrictiva con umbral cercano a 7 g/dL. Debe individualizarse en hemorragia masiva, inestabilidad persistente, isquemia miocárdica u otras situaciones particulares. La hemoglobina debe interpretarse junto con la perfusión y la evolución clínica.`,
  perlaENARM: "El umbral transfusional habitual en HDA es Hb cercana a 7 g/dL, con individualización clínica.",
  gpc: {
    mexico: "Verificar la recomendación nacional vigente antes de atribuir un umbral a una GPC específica.",
    internacional: "ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding, 2021."
  },
  bibliografia: "ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. 2021."
},
{
  id: "GASTRO-004",
  especialidad: "Gastroenterología",
  tema: "Hemorragia gastrointestinal alta",
  subtema: "Momento de la endoscopia",
  dificultad: "Muy alta",
  caso: `Mujer de 71 años con melena y hemoglobina de 8.4 g/dL recibe reanimación. Ahora tiene TA 112/68 mmHg, FC 92 lpm y estado mental normal, sin nuevos episodios de hematemesis. ¿Cuándo debe realizarse la endoscopia digestiva alta?`,
  pregunta: "Una vez lograda la estabilización inicial, ¿qué estrategia es la más apropiada?",
  opciones: [
    "Diferirla al menos siete días en todos los casos",
    "Realizarla dentro de las primeras 24 horas tras la reanimación adecuada",
    "Realizarla antes de iniciar cualquier reanimación",
    "Esperar a que desaparezca la melena",
    "Indicar laparotomía diagnóstica"
  ],
  respuestaCorrecta: 1,
  explicacion: `En HDA no variceal se recomienda endoscopia temprana, habitualmente dentro de las primeras 24 horas, después de la reanimación inicial. La endoscopia emergente antes de estabilizar al paciente no es la estrategia rutinaria. La persistencia de inestabilidad exige coordinación urgente y decisiones individualizadas.`,
  perlaENARM: "Primero reanimación inicial adecuada; después endoscopia temprana, habitualmente en menos de 24 horas.",
  gpc: {
    mexico: "Confirmar guía nacional aplicable en CENETEC/IMSS.",
    internacional: "ACG 2021; ESGE guidance for upper gastrointestinal hemorrhage."
  },
  bibliografia: "ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. 2021."
},
{
  id: "GASTRO-005",
  especialidad: "Gastroenterología",
  tema: "Hemorragia gastrointestinal alta",
  subtema: "Úlcera péptica Forrest Ia",
  dificultad: "Extrema",
  caso: `Varón de 62 años con consumo crónico de ibuprofeno presenta hematemesis. Tras estabilización, la endoscopia identifica una úlcera duodenal con sangrado arterial en chorro, Forrest Ia. Se dispone de clips, terapia térmica e inyección de adrenalina. ¿Cuál es la estrategia hemostática más apropiada?`,
  pregunta: "¿Qué tratamiento endoscópico debe utilizarse?",
  opciones: [
    "Adrenalina como monoterapia definitiva",
    "Adrenalina combinada con una segunda modalidad hemostática, como clip o terapia térmica",
    "Biopsia profunda del vaso antes del tratamiento",
    "Lavado endoscópico y observación únicamente",
    "Cirugía inmediata en todos los pacientes"
  ],
  respuestaCorrecta: 1,
  explicacion: `La úlcera Forrest Ia presenta sangrado activo en chorro y requiere hemostasia endoscópica. La adrenalina puede facilitar el control inicial, pero no debe utilizarse como monoterapia definitiva por el mayor riesgo de resangrado. Debe combinarse con una modalidad mecánica o térmica. Después se indica PPI a dosis altas según el riesgo endoscópico y el protocolo utilizado.`,
  perlaENARM: "Forrest Ia: hemostasia endoscópica; la adrenalina no debe ser la única modalidad definitiva.",
  gpc: {
    mexico: "Verificar la GPC mexicana aplicable a hemorragia por úlcera péptica.",
    internacional: "ACG 2021; ESGE guidance for peptic ulcer bleeding."
  },
  bibliografia: "ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. 2021."
},
  
{
  id: "GASTRO-006",
  especialidad: "Gastroenterología",
  tema: "Hemorragia gastrointestinal alta",
  subtema: "Úlcera péptica Forrest IIa",
  dificultad: "Extrema",
  caso: `Mujer de 68 años con antecedente de enfermedad renal crónica y consumo habitual de AINE consulta por melena y lipotimia. Tras estabilización, la endoscopia muestra una úlcera gástrica de 15 mm con un vaso visible no sangrante en su base, compatible con Forrest IIa. No existe sangrado activo durante la exploración. ¿Cuál es la conducta más adecuada?`,
  pregunta: "¿Cuál es la estrategia terapéutica indicada para esta lesión?",
  opciones: [
    "Observación exclusiva porque no existe sangrado activo",
    "Hemostasia endoscópica del vaso visible y posterior tratamiento con inhibidor de la bomba de protones",
    "Adrenalina intralesional como única terapia y alta inmediata",
    "Gastrectomía urgente en todos los casos",
    "Tratamiento con antiácidos exclusivamente"
  ],
  respuestaCorrecta: 1,
  explicacion: `Un vaso visible no sangrante corresponde a Forrest IIa y conserva un riesgo clínicamente relevante de resangrado. Está indicada la hemostasia endoscópica mediante una modalidad apropiada, como clip, terapia térmica o una técnica endoscópica validada. La ausencia de sangrado activo en el momento de la endoscopia no elimina la indicación terapéutica. Después de la hemostasia se administra PPI a dosis altas según el protocolo y el riesgo de resangrado.`,
  perlaENARM: "Forrest IIa: vaso visible no sangrante; requiere hemostasia endoscópica.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente aplicable a úlcera péptica hemorrágica.",
    internacional: "ACG 2021; ESGE guidance for peptic ulcer bleeding."
  },
  bibliografia: "ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. 2021."
},
{
  id: "GASTRO-007",
  especialidad: "Gastroenterología",
  tema: "Hemorragia gastrointestinal alta",
  subtema: "PPI después de hemostasia endoscópica",
  dificultad: "Muy alta",
  caso: `Varón de 57 años con hemorragia digestiva alta por úlcera duodenal Forrest Ib. Se realiza hemostasia endoscópica satisfactoria mediante clip y terapia térmica. Permanece estable, sin nuevo sangrado. ¿Cuál es la estrategia farmacológica posterior más apropiada para reducir el riesgo de resangrado?`,
  pregunta: "¿Qué esquema antisecretor se recomienda después de la hemostasia de una úlcera de alto riesgo?",
  opciones: [
    "Suspender toda terapia antisecretora después de la endoscopia",
    "PPI a dosis altas durante 72 horas, por vía intravenosa continua o mediante un esquema intermitente validado",
    "Ranitidina oral durante una sola dosis",
    "Sucralfato como única terapia durante seis horas",
    "PPI exclusivamente si reaparece la hematemesis"
  ],
  respuestaCorrecta: 1,
  explicacion: `Después de la hemostasia endoscópica de una úlcera con estigmas de alto riesgo, se recomienda PPI a dosis altas durante las primeras 72 horas. Puede emplearse infusión intravenosa continua o un régimen intermitente de dosis altas respaldado por evidencia y protocolos locales. Posteriormente suele continuarse PPI oral, con duración individualizada según la lesión y sus factores causales. También debe investigarse Helicobacter pylori y evitar AINE cuando sea posible.`,
  perlaENARM: "Tras hemostasia de una úlcera de alto riesgo: PPI a dosis altas durante 72 horas.",
  gpc: {
    mexico: "Confirmar la recomendación en la GPC nacional aplicable y su fecha de actualización.",
    internacional: "ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding, 2021."
  },
  bibliografia: "ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. 2021."
},
{
  id: "GASTRO-008",
  especialidad: "Gastroenterología",
  tema: "Hemorragia gastrointestinal alta",
  subtema: "Resangrado después de hemostasia endoscópica",
  dificultad: "Extrema",
  caso: `Varón de 73 años con cardiopatía isquémica y hemorragia digestiva alta por úlcera duodenal. Se realizó hemostasia endoscópica inicial y recibió PPI a dosis altas. Treinta horas después presenta nueva hematemesis, taquicardia e hipotensión. Tras iniciar nuevamente la reanimación, se considera resangrado de la lesión original. ¿Cuál es la siguiente estrategia habitual?`,
  pregunta: "Si el paciente puede someterse a una nueva intervención endoscópica, ¿cuál es el siguiente paso?",
  opciones: [
    "Repetir endoscopia e intentar una segunda hemostasia endoscópica",
    "Mantener únicamente PPI oral y observar durante 48 horas",
    "Indicar gastrectomía inmediata sin intentar una segunda endoscopia",
    "Suspender la reanimación porque ya recibió tratamiento",
    "Administrar ácido tranexámico como sustituto de la hemostasia"
  ],
  respuestaCorrecta: 0,
  explicacion: `Ante el resangrado después de una hemostasia endoscópica inicial, la estrategia habitual es una nueva endoscopia con intento de hemostasia. Si fracasa el control endoscópico, debe considerarse embolización arterial transcatéter cuando esté disponible; la cirugía se reserva para fracaso, indisponibilidad o circunstancias clínicas que la hagan necesaria. La reanimación y la valoración multidisciplinaria deben continuar durante el proceso.`,
  perlaENARM: "Resangrado ulceroso: repetir endoscopia; si fracasa, considerar embolización arterial transcatéter o cirugía.",
  gpc: {
    mexico: "Verificar disponibilidad local de radiología intervencionista y la guía nacional aplicable.",
    internacional: "ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding, 2021."
  },
  bibliografia: "ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. 2021."
},
{
  id: "GASTRO-009",
  especialidad: "Gastroenterología",
  tema: "Hemorragia gastrointestinal alta",
  subtema: "Aspirina para prevención cardiovascular secundaria",
  dificultad: "Extrema",
  caso: `Mujer de 66 años con antecedente de infarto agudo de miocardio y colocación de stent coronario hace tres años toma ácido acetilsalicílico a dosis bajas como prevención secundaria. Ingresa por hemorragia digestiva alta causada por una úlcera péptica; recibe tratamiento endoscópico satisfactorio y permanece estable. ¿Cuál es el principio más apropiado respecto a la aspirina?`,
  pregunta: "¿Qué conducta debe considerarse después de controlar la hemorragia?",
  opciones: [
    "Suspender la aspirina permanentemente en todos los pacientes",
    "Valorar la continuación o reanudación temprana de la aspirina para prevención secundaria una vez controlado el sangrado, considerando el riesgo cardiovascular y hemorrágico",
    "Sustituir siempre la aspirina por anticoagulación plena",
    "Duplicar la dosis de aspirina para prevenir trombosis",
    "Reanudarla únicamente después de un año sin sangrado"
  ],
  respuestaCorrecta: 1,
  explicacion: `La interrupción prolongada de aspirina utilizada para prevención cardiovascular secundaria puede incrementar el riesgo de eventos trombóticos. Después de una hemorragia ulcerosa controlada, debe valorarse la continuación o reanudación temprana según el escenario clínico, la estabilidad hemostática y las recomendaciones aplicables. La decisión debe coordinarse con el equipo tratante, especialmente si existe un stent coronario o tratamiento antitrombótico combinado. Esta recomendación no debe extrapolarse automáticamente a aspirina utilizada solo para prevención primaria.`,
  perlaENARM: "Distingue prevención primaria de secundaria: retirar aspirina en prevención secundaria puede aumentar el riesgo cardiovascular.",
  gpc: {
    mexico: "Revisar la guía nacional vigente sobre hemorragia digestiva y prevención cardiovascular secundaria.",
    internacional: "ACG-CAG Clinical Practice Guideline on Management of Anticoagulants and Antiplatelets During Acute Gastrointestinal Bleeding, 2022."
  },
  bibliografia: "ACG-CAG Clinical Practice Guideline: Management of Anticoagulants and Antiplatelets During Acute Gastrointestinal Bleeding. 2022."
},
{
  id: "GASTRO-010",
  especialidad: "Gastroenterología",
  tema: "Hemorragia gastrointestinal alta",
  subtema: "Hemorragia mayor asociada a warfarina",
  dificultad: "Extrema",
  caso: `Varón de 75 años con fibrilación auricular tratado con warfarina presenta hematemesis abundante y melena. Tiene TA 88/54 mmHg, FC 120 lpm, hemoglobina de 7.4 g/dL e INR de 5.8. La hemorragia es potencialmente mortal y requiere reversión urgente de la anticoagulación, además de reanimación y control de la fuente. ¿Qué estrategia de reversión es la más apropiada si está disponible?`,
  pregunta: "¿Qué tratamiento permite una reversión rápida de la anticoagulación por warfarina?",
  opciones: [
    "Vitamina K oral exclusivamente, sin otras medidas",
    "Complejo de concentrado de complejo protrombínico de cuatro factores más vitamina K intravenosa",
    "Protamina intravenosa como antídoto específico",
    "Continuar warfarina hasta conocer el resultado endoscópico",
    "Plasmaféresis como tratamiento inicial rutinario"
  ],
  respuestaCorrecta: 1,
  explicacion: `En una hemorragia potencialmente mortal asociada a warfarina, la reversión urgente suele realizarse con concentrado de complejo protrombínico de cuatro factores y vitamina K intravenosa. El concentrado corrige rápidamente los factores dependientes de vitamina K, mientras que la vitamina K permite una reversión más sostenida. Si el concentrado no está disponible, puede considerarse plasma según protocolos y situación clínica. La reversión no sustituye la reanimación ni el control endoscópico o intervencionista de la fuente.`,
  perlaENARM: "Warfarina más hemorragia potencialmente mortal: PCC de cuatro factores más vitamina K IV, si están disponibles.",
  gpc: {
    mexico: "Verificar protocolo institucional mexicano para reversión urgente de antagonistas de vitamina K.",
    internacional: "ACG-CAG 2022; recomendaciones internacionales para hemorragia mayor asociada a anticoagulantes."
  },
  bibliografia: "ACG-CAG Clinical Practice Guideline: Management of Anticoagulants and Antiplatelets During Acute Gastrointestinal Bleeding. 2022."
},

