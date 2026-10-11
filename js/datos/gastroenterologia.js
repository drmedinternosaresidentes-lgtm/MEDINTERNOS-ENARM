
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
  
{
  id: "GASTRO-011",
  especialidad: "Gastroenterología",
  tema: "Hemorragia gastrointestinal baja",
  subtema: "Hemorragia diverticular grave y angiotomografía",
  dificultad: "Extrema",
  caso: `Varón de 76 años con hipertensión arterial, enfermedad renal crónica G2 y fibrilación auricular en tratamiento con apixabán acude a Urgencias por seis evacuaciones de color rojo oscuro con coágulos en las últimas tres horas. Niega dolor abdominal, fiebre o diarrea. A la exploración presenta palidez, diaforesis, TA 84/52 mmHg, FC 124 lpm, FR 25 rpm y llenado capilar de cuatro segundos. La hemoglobina inicial es de 9.2 g/dL, lactato 4.1 mmol/L y creatinina 1.3 mg/dL. Tras iniciar reanimación persiste la hipotensión y continúa evacuando sangre. Se sospecha hemorragia diverticular activa. ¿Cuál es el siguiente estudio diagnóstico más apropiado para localizar el sangrado?`,
  pregunta: "¿Qué estudio debe priorizarse ante hemorragia activa con inestabilidad hemodinámica?",
  opciones: [
    "Colonoscopia urgente sin preparación intestinal",
    "Angiotomografía computarizada abdominopélvica con protocolo de hemorragia",
    "Cápsula endoscópica como primer estudio",
    "Colon por enema con contraste",
    "Prueba inmunoquímica fecal"
  ],
  respuestaCorrecta: 1,
  explicacion: `La hemorragia digestiva baja con sangrado persistente e inestabilidad hemodinámica requiere reanimación simultánea y localización rápida de la fuente. La angiotomografía computarizada puede identificar extravasación activa y orientar una embolización arterial selectiva. Si identifica un sitio de sangrado, debe coordinarse con radiología intervencionista para hemostasia cuando corresponda. La colonoscopia es fundamental en pacientes seleccionados, pero la colonoscopia urgente sin preparación no es la mejor primera estrategia en un paciente inestable con sangrado abundante. La cápsula endoscópica se reserva principalmente para determinados escenarios de sospecha de hemorragia del intestino delgado.`,
  perlaENARM: "Hemorragia baja abundante, persistente e inestabilidad hemodinámica: considera angiotomografía y tratamiento dirigido según el resultado.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente aplicable a hemorragia digestiva baja en el catálogo CENETEC/IMSS.",
    internacional: "ACG 2023; ESGE 2021."
  },
  bibliografia: "Sengupta N, et al. Management of Patients With Acute Lower Gastrointestinal Bleeding: An Updated ACG Guideline. Am J Gastroenterol. 2023;118:208-231. Triantafyllou K, et al. ESGE Guideline. Endoscopy. 2021;53:850-868."
},
{
  id: "GASTRO-012",
  especialidad: "Gastroenterología",
  tema: "Hemorragia gastrointestinal baja",
  subtema: "Transfusión y estrategia restrictiva",
  dificultad: "Muy alta",
  caso: `Mujer de 68 años con antecedente de diverticulosis colónica y hemorragia digestiva baja de cuatro horas de evolución. Presenta evacuaciones con sangre roja y coágulos, pero después de la reanimación inicial permanece alerta, con TA 112/68 mmHg, FC 88 lpm y sin signos de hipoperfusión. La hemoglobina seriada es de 6.7 g/dL. No tiene cardiopatía isquémica, insuficiencia cardiaca ni enfermedad pulmonar grave. Se programa evaluación endoscópica durante la hospitalización. ¿Cuál es la estrategia transfusional más apropiada?`,
  pregunta: "¿Qué conducta debe tomarse respecto a la transfusión de concentrados eritrocitarios?",
  opciones: [
    "No transfundir hasta que la hemoglobina sea menor de 5 g/dL",
    "Transfundir con estrategia restrictiva y reevaluar la respuesta clínica y hematológica",
    "Transfundir obligatoriamente hasta alcanzar hemoglobina de 12 g/dL",
    "Administrar plasma fresco congelado para corregir la anemia",
    "Administrar plaquetas aunque el recuento sea normal"
  ],
  respuestaCorrecta: 1,
  explicacion: `En pacientes hemodinámicamente estables con hemorragia digestiva baja aguda y sin enfermedad cardiovascular relevante, se recomienda generalmente una estrategia transfusional restrictiva, con un umbral de hemoglobina cercano a 7 g/dL. En este caso, una hemoglobina de 6.7 g/dL apoya la transfusión de concentrados eritrocitarios, acompañada de reevaluación clínica y búsqueda de la fuente. La decisión no debe basarse exclusivamente en una cifra cuando existe hemorragia masiva o inestabilidad. Los objetivos deben individualizarse si aparece isquemia miocárdica u otra condición que modifique la tolerancia a la anemia.`,
  perlaENARM: "En hemorragia baja estable sin enfermedad cardiovascular relevante, el umbral transfusional habitual es cercano a 7 g/dL.",
  gpc: {
    mexico: "Confirmar el protocolo nacional e institucional vigente de transfusión en hemorragia digestiva.",
    internacional: "ESGE 2021; ACG 2023."
  },
  bibliografia: "Triantafyllou K, et al. ESGE Guideline. Endoscopy. 2021;53:850-868. Sengupta N, et al. ACG Guideline. Am J Gastroenterol. 2023;118:208-231."
},
{
  id: "GASTRO-013",
  especialidad: "Gastroenterología",
  tema: "Hemorragia gastrointestinal baja",
  subtema: "Sangrado diverticular y diagnóstico diferencial",
  dificultad: "Muy alta",
  caso: `Varón de 72 años acude por inicio súbito de hematoquecia abundante, indolora, sin fiebre ni dolor abdominal. Presenta TA 126/74 mmHg, FC 92 lpm y hemoglobina de 10.1 g/dL. Refiere episodios autolimitados similares durante el último año. La exploración abdominal es normal y el tacto rectal confirma sangre roja oscura sin masa palpable. La colonoscopia, realizada tras preparación adecuada, identifica múltiples divertículos en colon sigmoide y ascendente. En uno de los divertículos del colon ascendente se observa un vaso visible con coágulo adherido y estigmas compatibles con sangrado reciente. ¿Cuál es la conducta endoscópica más apropiada?`,
  pregunta: "¿Qué intervención es la más adecuada para prevenir resangrado de la lesión identificada?",
  opciones: [
    "Biopsiar el vaso visible para determinar su etiología",
    "Realizar hemostasia endoscópica dirigida, mediante clips u otra técnica apropiada",
    "Indicar colectomía total inmediata por la presencia de divertículos múltiples",
    "Administrar únicamente un inhibidor de la bomba de protones",
    "Realizar ligadura de várices esofágicas"
  ],
  respuestaCorrecta: 1,
  explicacion: `La hemorragia diverticular suele presentarse como hematoquecia indolora y puede ser intermitente. Cuando se identifica estigma de hemorragia reciente con riesgo de resangrado, está indicada la hemostasia endoscópica dirigida, utilizando clips, ligadura u otra técnica validada según la anatomía y la experiencia disponible. La presencia de diverticulosis múltiple no justifica por sí sola una colectomía. La cirugía se reserva para situaciones seleccionadas, como sangrado persistente o recurrente grave que no puede controlarse mediante alternativas endoscópicas o radiológicas. Los inhibidores de la bomba de protones no constituyen hemostasia específica de un divertículo colónico.`,
  perlaENARM: "Hemorragia diverticular: busca estigmas de sangrado y aplica hemostasia dirigida; evita cirugía basada únicamente en la presencia de divertículos.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente sobre hemorragia digestiva baja y disponibilidad de tratamiento endoscópico.",
    internacional: "ACG 2023; ESGE 2021."
  },
  bibliografia: "Sengupta N, et al. Management of Patients With Acute Lower Gastrointestinal Bleeding: An Updated ACG Guideline. Am J Gastroenterol. 2023;118:208-231."
},
{
  id: "GASTRO-014",
  especialidad: "Gastroenterología",
  tema: "Hemorragia gastrointestinal baja",
  subtema: "Hematoquecia e identificación de hemorragia digestiva alta",
  dificultad: "Extrema",
  caso: `Mujer de 63 años con antecedente de cirrosis por enfermedad hepática metabólica y várices esofágicas conocidas consulta por evacuaciones negras seguidas de una evacuación con sangre roja abundante. Presenta TA 88/56 mmHg, FC 122 lpm, palidez y diaforesis. La hemoglobina es de 7.8 g/dL, urea 82 mg/dL y creatinina 1.0 mg/dL. Durante la valoración presenta un nuevo episodio de hematemesis. El equipo considera inicialmente una hemorragia digestiva baja por la hematoquecia. ¿Cuál es la interpretación y conducta más apropiada?`,
  pregunta: "¿Qué diagnóstico debe priorizarse y qué estudio permite localizar la fuente tras la estabilización inicial?",
  opciones: [
    "Hemorragia diverticular; colonoscopia inmediata sin estabilización",
    "Hemorragia digestiva alta, posiblemente variceal; iniciar manejo específico y realizar endoscopia digestiva alta urgente tras reanimación inicial",
    "Angiodisplasia de colon; administrar hierro oral y dar de alta",
    "Enfermedad inflamatoria intestinal; iniciar glucocorticoides antes de estudiar la fuente",
    "Cáncer colorrectal; programar colonoscopia electiva sin otras medidas"
  ],
  respuestaCorrecta: 1,
  explicacion: `La hematoquecia no excluye una fuente digestiva alta, especialmente cuando el sangrado es masivo y el tránsito intestinal está acelerado. La hematemesis, las melenas, la cirrosis y el antecedente de várices aumentan la sospecha de hemorragia alta, potencialmente variceal. La prioridad es la reanimación, la valoración de la vía aérea según el estado clínico, el acceso venoso y la preparación para endoscopia digestiva alta urgente después de la estabilización inicial. En sospecha de hemorragia variceal deben iniciarse oportunamente las medidas farmacológicas y antimicrobianas recomendadas por las guías aplicables, sin esperar a que la endoscopia confirme la fuente.`,
  perlaENARM: "Hematoquecia con choque o hematemesis puede proceder de una hemorragia digestiva alta; no asumas origen colónico por el color de las heces.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente de hemorragia variceal y cirrosis; confirmar recomendaciones específicas de profilaxis antibiótica y vasoactivos.",
    internacional: "ACG 2023 para hemorragia baja; guías internacionales vigentes para hemorragia variceal."
  },
  bibliografia: "Sengupta N, et al. ACG Guideline. Am J Gastroenterol. 2023;118:208-231. ESGE Guideline for acute lower gastrointestinal bleeding. Endoscopy. 2021;53:850-868."
},
{
  id: "GASTRO-015",
  especialidad: "Gastroenterología",
  tema: "Hemorragia gastrointestinal baja",
  subtema: "Hemorragia pospolipectomía",
  dificultad: "Extrema",
  caso: `Varón de 70 años con fibrilación auricular en tratamiento con apixabán se somete a colonoscopia electiva por antecedente familiar de cáncer colorrectal. Durante el procedimiento se reseca mediante técnica endoscópica una lesión sésil de 22 mm en colon ascendente. Cuarenta y ocho horas después presenta múltiples evacuaciones con sangre roja, mareo y debilidad. La TA es de 94/60 mmHg, FC 108 lpm y hemoglobina de 8.4 g/dL, comparada con 13.1 g/dL antes del procedimiento. El paciente refiere que reinició el anticoagulante la noche posterior a la colonoscopia. Tras iniciar reanimación, el sangrado persiste. ¿Cuál es la estrategia más apropiada?`,
  pregunta: "¿Cuál es el enfoque inicial y definitivo más adecuado ante sospecha de hemorragia pospolipectomía significativa?",
  opciones: [
    "Dar de alta porque el sangrado posterior a la polipectomía es siempre autolimitado",
    "Suspender temporalmente el anticoagulante, estabilizar al paciente y localizar y tratar la fuente mediante evaluación endoscópica o angiotomográfica según la estabilidad y persistencia del sangrado",
    "Administrar vitamina K como antídoto específico de apixabán",
    "Indicar colectomía total inmediata sin intentar localizar el sitio de sangrado",
    "Administrar ácido tranexámico de rutina como sustituto del control de la fuente"
  ],
  respuestaCorrecta: 1,
  explicacion: `La hemorragia pospolipectomía puede aparecer de forma inmediata o diferida, especialmente después de resección de lesiones grandes y en pacientes que reciben antitrombóticos. La conducta depende de la gravedad y de la persistencia del sangrado: estabilización hemodinámica, evaluación de hemograma y coagulación según el contexto, revisión del tratamiento antitrombótico y localización de la fuente. En un paciente estable puede realizarse colonoscopia terapéutica tras preparación adecuada; si hay sangrado activo importante con inestabilidad persistente, la angiotomografía puede facilitar la identificación de la fuente y el tratamiento radiológico. Apixabán no se revierte con vitamina K. La decisión sobre reversión específica y reanudación de anticoagulación debe individualizarse según gravedad, riesgo tromboembólico, función renal y disponibilidad de agentes de reversión.`,
  perlaENARM: "Hemorragia pospolipectomía significativa: estabilizar, considerar el estado hemodinámico para elegir el método de localización y controlar la fuente; vitamina K no revierte apixabán.",
  gpc: {
    mexico: "Verificar el protocolo nacional e institucional vigente para hemorragia posendoscópica y manejo de anticoagulantes.",
    internacional: "ACG 2023; guías ESGE/BSG sobre hemorragia digestiva y tratamiento antitrombótico."
  },
  bibliografia: "Sengupta N, et al. Management of Patients With Acute Lower Gastrointestinal Bleeding: An Updated ACG Guideline. Am J Gastroenterol. 2023;118:208-231. Veitch AM, et al. BSG/ESGE guideline update on antiplatelet and anticoagulant therapy. Endoscopy. 2021."
},

{
  id: "GASTRO-016",
  especialidad: "Gastroenterología",
  tema: "Úlcera péptica",
  subtema: "Hemorragia por úlcera duodenal y estratificación endoscópica",
  dificultad: "Extrema",
  caso: `Masculino de 68 años con antecedente de osteoartrosis, automedicación con naproxeno 500 mg cada 12 horas durante seis semanas y dispepsia intermitente. Acude por hematemesis abundante, melena, diaforesis y síncope. TA 86/54 mmHg, FC 124 lpm, FR 24 rpm, temperatura 36.1 °C, saturación 95%. Se encuentra pálido, con llenado capilar de 4 segundos y abdomen blando, sin irritación peritoneal. Hb 7.2 g/dL, plaquetas 240,000/µL, INR 1.1, urea 76 mg/dL, creatinina 1.3 mg/dL y lactato 4.1 mmol/L. Después de iniciar reanimación hemodinámica y obtener acceso venoso de gran calibre, se realiza endoscopia digestiva alta, que identifica una úlcera duodenal de 15 mm con sangrado arterial en chorro. Se logra hemostasia endoscópica mediante terapia combinada. No existe evidencia de perforación.`,
  pregunta: "¿Cuál es la conducta posterior más apropiada para reducir el riesgo de resangrado y prevenir recurrencias?",
  opciones: [
    "Administrar un inhibidor de bomba de protones por vía oral una vez al día desde el inicio, sin vigilancia hospitalaria si cesó el sangrado.",
    "Administrar inhibidor de bomba de protones a dosis altas durante 72 horas, continuar posteriormente dos veces al día durante las primeras dos semanas, investigar H. pylori y suspender el AINE.",
    "Indicar cirugía urgente de forma sistemática por tratarse de una úlcera duodenal con sangrado arterial.",
    "Mantener naproxeno a dosis reducida y agregar un antiácido, ya que la hemostasia endoscópica elimina el riesgo de recurrencia.",
    "Administrar ácido tranexámico durante siete días y omitir el tratamiento antisecretor si la hemoglobina se mantiene estable."
  ],
  respuestaCorrecta: 1,
  explicacion: `La úlcera con sangrado activo en chorro corresponde a una lesión de alto riesgo que requiere hemostasia endoscópica. Después de conseguirla, se recomienda un inhibidor de bomba de protones (IBP) a dosis altas durante 72 horas, en infusión continua o mediante un esquema intermitente de dosis altas. Posteriormente, en pacientes de alto riesgo tratados endoscópicamente, se recomienda IBP oral dos veces al día hasta completar las primeras dos semanas posteriores a la endoscopia. Debe buscarse H. pylori, tratarse si se confirma y documentarse su erradicación. El AINE debe suspenderse siempre que sea posible. Si resulta indispensable mantener un antiinflamatorio, se requiere reevaluar el riesgo gastrointestinal y cardiovascular y considerar estrategias de gastroprotección. La cirugía no es automática: se reserva para situaciones seleccionadas, como fracaso de las estrategias endoscópicas y radiológicas.`,
  perlaENARM: `Forrest Ia = sangrado en chorro; Forrest Ib = sangrado babeante; Forrest IIa = vaso visible no sangrante. Las lesiones Ia, Ib y IIa requieren hemostasia endoscópica. Tras hemostasia de una úlcera de alto riesgo, recuerda el esquema de IBP a dosis altas durante 72 horas.`,
  gpc: {
    mexico: "IMSS-169-09. Diagnóstico y tratamiento de úlcera péptica complicada aguda en el adulto. Actualización 2015; verificar vigencia institucional.",
    internacional: "ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. American Journal of Gastroenterology, 2021."
  },
  bibliografia: [
    "Laine L, et al. ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. Am J Gastroenterol. 2021;116:899-917. doi:10.14309/ajg.0000000000001245.",
    "IMSS. GPC IMSS-169-09. Diagnóstico y tratamiento de úlcera péptica complicada aguda en el adulto. Actualización 2015."
  ]
},
{
  id: "GASTRO-017",
  especialidad: "Gastroenterología",
  tema: "Úlcera péptica",
  subtema: "Erradicación de Helicobacter pylori y resistencia antimicrobiana",
  dificultad: "Extrema",
  caso: `Femenina de 43 años con dolor epigástrico recurrente, predominante en ayuno y ocasionalmente nocturno. La endoscopia muestra una úlcera duodenal de 9 mm sin estigmas de hemorragia reciente. La prueba de ureasa y la histología resultan positivas para Helicobacter pylori. La paciente recibió azitromicina en dos ocasiones durante los últimos tres años por infecciones respiratorias; nunca ha recibido tratamiento de erradicación. No tiene alergias medicamentosas, embarazo, insuficiencia renal ni hepatopatía. No se dispone de antibiograma ni de pruebas moleculares de susceptibilidad antimicrobiana. En su comunidad existe preocupación por la resistencia a claritromicina.`,
  pregunta: "¿Cuál es el esquema empírico inicial más apropiado de acuerdo con las recomendaciones internacionales actuales cuando se desconoce la susceptibilidad antibiótica?",
  opciones: [
    "Omeprazol, amoxicilina y claritromicina durante siete días, independientemente de la exposición previa a macrólidos.",
    "Omeprazol, metronidazol y claritromicina durante diez días, con extensión solo si persisten los síntomas.",
    "Terapia cuádruple optimizada con IBP dos veces al día, bismuto, tetraciclina 500 mg cuatro veces al día y metronidazol 500 mg tres o cuatro veces al día durante 14 días.",
    "Monoterapia con IBP durante ocho semanas y repetir la prueba de H. pylori únicamente si persiste el dolor.",
    "Levofloxacino, amoxicilina e IBP durante 14 días sin necesidad de conocer susceptibilidad ni antecedentes antibióticos."
  ],
  respuestaCorrecta: 2,
  explicacion: `La guía ACG 2024 recomienda terapia cuádruple optimizada con bismuto durante 14 días como opción preferida en pacientes sin tratamiento previo cuando la susceptibilidad de H. pylori es desconocida. El esquema incluye IBP dos veces al día, bismuto cuatro veces al día, tetraciclina 500 mg cuatro veces al día y metronidazol 500 mg tres o cuatro veces al día. La exposición previa a macrólidos aumenta la preocupación por resistencia y hace menos apropiado utilizar empíricamente claritromicina. Los esquemas con claritromicina o levofloxacino deben reservarse para cepas con susceptibilidad confirmada, de acuerdo con esta guía. Es necesario revisar contraindicaciones, disponibilidad local, adherencia y antecedentes de tratamientos previos.`,
  perlaENARM: `No elijas automáticamente triple terapia con claritromicina. Si la susceptibilidad es desconocida, la recomendación ACG 2024 favorece terapia cuádruple optimizada con bismuto durante 14 días. Después de cualquier esquema, debe confirmarse la erradicación.`,
  gpc: {
    mexico: "No se identificó en la búsqueda una GPC mexicana reciente que sustituya de forma inequívoca las recomendaciones internacionales actuales para todos los escenarios de erradicación; verificar el catálogo institucional vigente.",
    internacional: "ACG Clinical Guideline: Treatment of Helicobacter pylori Infection. American Journal of Gastroenterology, 2024."
  },
  bibliografia: [
    "Chey WD, et al. ACG Clinical Guideline: Treatment of Helicobacter pylori Infection. Am J Gastroenterol. 2024;119:1730-1753. doi:10.14309/ajg.0000000000002968."
  ]
},
{
  id: "GASTRO-018",
  especialidad: "Gastroenterología",
  tema: "Úlcera péptica",
  subtema: "Perforación de úlcera péptica y abdomen agudo",
  dificultad: "Extrema",
  caso: `Masculino de 57 años con tabaquismo activo y consumo frecuente de ibuprofeno por lumbalgia. Presenta dolor epigástrico súbito, intenso, que en menos de una hora se generaliza al abdomen. Refiere náuseas, pero no hematemesis. TA 98/62 mmHg, FC 118 lpm, FR 26 rpm, temperatura 38.0 °C. A la exploración hay rigidez involuntaria, dolor a la descompresión y ausencia de ruidos intestinales. Leucocitos 18,900/µL, creatinina 1.6 mg/dL y lactato 3.5 mmol/L. La tomografía abdominopélvica con contraste muestra neumoperitoneo y líquido libre, con probable sitio de perforación en la región prepilórica. No hay antecedentes de cirugía abdominal ni datos que sugieran una causa alternativa.`,
  pregunta: "¿Cuál es la conducta inicial más adecuada?",
  opciones: [
    "Iniciar tratamiento erradicador de H. pylori por vía oral y reevaluar en 24 horas.",
    "Solicitar endoscopia digestiva alta inmediata para cerrar la perforación con clips como primera medida rutinaria.",
    "Mantener ayuno, iniciar reanimación con cristaloides, antibióticos intravenosos de amplio espectro y tratamiento antisecretor, obtener valoración quirúrgica urgente y proceder al control de la perforación.",
    "Administrar únicamente un IBP intravenoso y observar, ya que el neumoperitoneo puede ser un hallazgo incidental.",
    "Realizar colonoscopia urgente para descartar perforación de colon antes de cualquier otra intervención."
  ],
  respuestaCorrecta: 2,
  explicacion: `El dolor súbito con signos de irritación peritoneal y neumoperitoneo indica perforación de una víscera hueca, con alta sospecha de úlcera péptica perforada. Requiere reanimación inmediata, ayuno, analgesia, IBP intravenoso, antibióticos con cobertura para flora gastrointestinal y valoración quirúrgica urgente para control del foco. Deben vigilarse sepsis, choque y disfunción orgánica. La reparación laparoscópica o abierta depende del estado fisiológico, el tamaño y la localización de la perforación, la experiencia del equipo y los recursos disponibles. El manejo no operatorio se reserva para pacientes muy seleccionados con perforación sellada, ausencia de peritonitis y estabilidad clínica, bajo vigilancia estrecha; no es apropiado para este paciente con peritonitis generalizada y datos de hipoperfusión.`,
  perlaENARM: `Úlcera perforada = dolor súbito, abdomen rígido y neumoperitoneo. No retrases antibióticos, reanimación ni valoración quirúrgica por completar estudios endoscópicos. La erradicación de H. pylori es importante después de controlar la urgencia, si se confirma infección.`,
  gpc: {
    mexico: "IMSS-169-09. Diagnóstico y tratamiento de úlcera péptica complicada aguda en el adulto. Actualización 2015; verificar vigencia institucional.",
    internacional: "WSES guidelines for perforated and bleeding peptic ulcer. World Journal of Emergency Surgery, 2020."
  },
  bibliografia: [
    "Tarasconi A, et al. Perforated and bleeding peptic ulcer: WSES guidelines. World J Emerg Surg. 2020;15:3.",
    "IMSS. GPC IMSS-169-09. Diagnóstico y tratamiento de úlcera péptica complicada aguda en el adulto. Actualización 2015."
  ]
},
{
  id: "GASTRO-019",
  especialidad: "Gastroenterología",
  tema: "Úlcera péptica",
  subtema: "Úlcera gástrica: biopsia, diagnóstico diferencial y seguimiento",
  dificultad: "Alta",
  caso: `Masculino de 62 años con pérdida involuntaria de 7 kg en cuatro meses, saciedad temprana y dolor epigástrico progresivo. La biometría hemática muestra Hb 10.1 g/dL, VCM 74 fL y ferritina disminuida. La endoscopia identifica una úlcera gástrica de 2.5 cm en la curvatura menor del antro, con bordes irregulares y pliegues convergentes incompletos. No hay sangrado activo. La primera biopsia informa inflamación crónica y cambios reactivos, sin células malignas en las muestras obtenidas; la calidad y profundidad de la muestra son limitadas. No se cuenta con una prueba reciente de H. pylori. El paciente pregunta si puede asumir que se trata de una lesión benigna y continuar únicamente con IBP.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Considerar descartada la malignidad por una biopsia inicial negativa y repetir endoscopia solo si aparece hematemesis.",
    "Indicar IBP y dar seguimiento exclusivamente clínico, porque las úlceras gástricas rara vez corresponden a neoplasia.",
    "Obtener una evaluación endoscópica adecuada con biopsias suficientes de la lesión para excluir malignidad, investigar H. pylori y planear seguimiento endoscópico según los hallazgos y la cicatrización.",
    "Realizar tratamiento empírico con claritromicina sin confirmar H. pylori y evitar nuevas biopsias para no provocar sangrado.",
    "Indicar gastrectomía total inmediata sin completar la caracterización histológica ni la estadificación."
  ],
  respuestaCorrecta: 2,
  explicacion: `La pérdida ponderal, la anemia ferropénica, la saciedad temprana y la morfología irregular son datos de alarma. Una biopsia limitada negativa no excluye de forma confiable cáncer gástrico cuando la sospecha clínica y endoscópica permanece elevada. Se requiere una evaluación endoscópica adecuada, toma de biopsias representativas y valoración especializada; si persiste la sospecha, debe repetirse la toma de muestras o completarse el estudio según el caso. También debe investigarse H. pylori y tratarse si se confirma. La necesidad y el momento de la endoscopia de control dependen de la sospecha de malignidad, la calidad de las biopsias, la etiología y la respuesta al tratamiento. No es correcto asumir benignidad ni indicar cirugía radical sin diagnóstico y estadificación.`,
  perlaENARM: `Úlcera gástrica con pérdida de peso, anemia o bordes irregulares: descarta malignidad con biopsias adecuadas. Una biopsia inicial negativa, sobre todo si es limitada, no cierra el diagnóstico cuando persiste una alta sospecha clínica.`,
  gpc: {
    mexico: "No se identificó en la búsqueda una GPC mexicana reciente y específica que resuelva todos los detalles de seguimiento endoscópico de la úlcera gástrica; individualizar según hallazgos y protocolo institucional.",
    internacional: "Evaluación endoscópica de úlcera gástrica y exclusión de malignidad conforme a práctica gastroenterológica especializada."
  },
  bibliografia: [
    "Laine L, et al. ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. Am J Gastroenterol. 2021;116:899-917.",
    "Guías y recomendaciones de práctica endoscópica para evaluación histológica de lesiones gástricas sospechosas."
  ]
},
{
  id: "GASTRO-020",
  especialidad: "Gastroenterología",
  tema: "Úlcera péptica",
  subtema: "Prevención de lesión ulcerosa por AINE en paciente de alto riesgo",
  dificultad: "Extrema",
  caso: `Femenina de 74 años con osteoartrosis grave, antecedente de hemorragia digestiva alta por úlcera péptica hace ocho meses y enfermedad cardiovascular estable con antecedente de infarto. Recibe ácido acetilsalicílico a dosis antiagregante como prevención secundaria y solicita un tratamiento más eficaz para el dolor. Se documentó erradicación de H. pylori tras un esquema apropiado. Actualmente no presenta melena ni dolor epigástrico. La función renal está discretamente reducida y la paciente no tiene alergias medicamentosas. Se plantea iniciar un AINE oral de forma crónica porque el paracetamol y las medidas no farmacológicas han ofrecido alivio insuficiente.`,
  pregunta: "Si después de valorar alternativas no farmacológicas y analgésicas se considera imprescindible un AINE oral, ¿qué estrategia reduce mejor el riesgo gastrointestinal, sin olvidar el riesgo cardiovascular?",
  opciones: [
    "Indicar ibuprofeno a dosis altas sin gastroprotección, porque la erradicación previa de H. pylori elimina el riesgo ulceroso.",
    "Indicar diclofenaco más antiácido solo cuando haya pirosis, sin reevaluar la necesidad de ácido acetilsalicílico.",
    "Valorar un COX-2 selectivo junto con IBP, a la menor dosis eficaz y durante el menor tiempo posible, individualizando el riesgo cardiovascular y renal y manteniendo el antiagregante si está indicado.",
    "Suspender permanentemente el ácido acetilsalicílico de prevención secundaria y prescribir cualquier AINE sin protección.",
    "Utilizar corticosteroide sistémico como analgésico crónico para evitar los efectos gastrointestinales de los AINE."
  ],
  respuestaCorrecta: 2,
  explicacion: `La paciente tiene riesgo gastrointestinal muy alto por edad, antecedente de hemorragia ulcerosa y uso concomitante de antiagregante. La erradicación de H. pylori reduce el riesgo asociado a la infección, pero no neutraliza el riesgo por AINE y antiagregantes. Si un AINE es realmente inevitable, puede considerarse un COX-2 selectivo junto con IBP, utilizando la menor dosis eficaz y por el menor tiempo posible. Sin embargo, la selección debe integrar el riesgo cardiovascular, renal y gastrointestinal; los COX-2 selectivos no son inocuos desde el punto de vista cardiovascular. Deben priorizarse alternativas no AINE cuando sean eficaces, revisar interacciones y no retirar por cuenta propia el ácido acetilsalicílico indicado para prevención secundaria. La estrategia requiere decisión individualizada y seguimiento clínico.`,
  perlaENARM: `Antecedente de úlcera hemorrágica + AINE + antiagregante = riesgo gastrointestinal muy alto. La erradicación de H. pylori no sustituye la gastroprotección. Si el AINE es inevitable, considera COX-2 selectivo más IBP, pero integra siempre el riesgo cardiovascular y renal.`,
  gpc: {
    mexico: "La GPC IMSS-169-09 aborda prevención de recurrencia en úlcera péptica complicada; verificar vigencia institucional y recomendaciones locales para gastroprotección.",
    internacional: "ACG Clinical Guideline: Treatment of Helicobacter pylori Infection, 2024; recomendaciones internacionales de prevención de lesión ulcerosa asociada a AINE."
  },
  bibliografia: [
    "Chey WD, et al. ACG Clinical Guideline: Treatment of Helicobacter pylori Infection. Am J Gastroenterol. 2024;119:1730-1753.",
    "IMSS. GPC IMSS-169-09. Diagnóstico y tratamiento de úlcera péptica complicada aguda en el adulto. Actualización 2015."
  ]
},

{
  id: "GASTRO-021",
  especialidad: "Gastroenterología",
  tema: "ERGE",
  subtema: "Diagnóstico clínico y prueba terapéutica con IBP",
  dificultad: "Alta",
  caso: `Masculino de 39 años, IMC de 31 kg/m², que consulta por pirosis retroesternal y regurgitación ácida cuatro días por semana desde hace seis meses. Los síntomas empeoran después de comidas abundantes, al agacharse y durante el decúbito nocturno. Niega disfagia, odinofagia, vómitos persistentes, pérdida ponderal, hematemesis y melena. La exploración física es normal. No tiene antecedentes cardiovasculares y la descripción de los síntomas no sugiere dolor torácico de origen cardiaco. Nunca ha recibido tratamiento antisecretor y no se han realizado estudios endoscópicos.`,
  pregunta: "¿Cuál es la estrategia inicial más apropiada?",
  opciones: [
    "Solicitar pH-impedanciometría esofágica antes de iniciar cualquier tratamiento.",
    "Iniciar un IBP una vez al día, 30–60 minutos antes de una comida, durante ocho semanas, acompañado de medidas conductuales individualizadas.",
    "Realizar endoscopia urgente a todos los pacientes con pirosis de más de tres meses de evolución.",
    "Indicar tratamiento indefinido con IBP dos veces al día sin evaluar la respuesta inicial.",
    "Solicitar una serie esofagogastroduodenal con bario para confirmar el diagnóstico antes del tratamiento."
  ],
  respuestaCorrecta: 1,
  explicacion: `El paciente presenta síntomas típicos de ERGE sin datos de alarma. La guía ACG recomienda una prueba terapéutica con IBP una vez al día durante ocho semanas, administrado antes de una comida. La pérdida de peso en personas con sobrepeso u obesidad, evitar comidas durante las 2–3 horas previas al sueño y elevar la cabecera en caso de síntomas nocturnos pueden ayudar. Si existe respuesta adecuada, debe intentarse retirar el IBP o utilizar la menor intensidad terapéutica eficaz, según recurrencia y presencia de complicaciones. Si no responde adecuadamente o los síntomas reaparecen al suspenderlo, debe reconsiderarse el diagnóstico y valorar endoscopia u otras pruebas. El esofagograma con bario no es una prueba diagnóstica suficiente para establecer ERGE.`,
  perlaENARM: `Síntomas típicos + ausencia de datos de alarma = prueba empírica con IBP durante ocho semanas. La respuesta terapéutica apoya la sospecha, pero no constituye por sí sola una confirmación objetiva definitiva.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica para ERGE del adulto que sustituya estas recomendaciones. Consultar el catálogo institucional vigente antes de atribuir una clave o año.",
    internacional: "ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease, 2022."
  },
  bibliografia: [
    "Katz PO, et al. ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease. Am J Gastroenterol. 2022;117:27-56. doi:10.14309/ajg.0000000000001538.",
    "Yadlapati R, et al. AGA Clinical Practice Update on the Personalized Approach to the Evaluation and Management of GERD. Clin Gastroenterol Hepatol. 2022;20:984-994.e1."
  ]
},
{
  id: "GASTRO-022",
  especialidad: "Gastroenterología",
  tema: "ERGE",
  subtema: "Datos de alarma y diagnóstico diferencial de disfagia",
  dificultad: "Extrema",
  caso: `Masculino de 61 años con antecedente de pirosis y regurgitación durante aproximadamente ocho años, automedicado intermitentemente con omeprazol. En los últimos cuatro meses presenta disfagia inicialmente para sólidos y posteriormente también para líquidos, pérdida involuntaria de 8 kg y anemia microcítica. Refiere que los alimentos parecen detenerse detrás del esternón y que ha reducido su ingesta por temor al dolor. No presenta hematemesis. A la exploración se observa palidez, sin adenopatías cervicales palpables. No se dispone todavía de endoscopia ni de estudios de imagen.`,
  pregunta: "¿Cuál es el siguiente paso diagnóstico prioritario?",
  opciones: [
    "Aumentar el omeprazol a dosis dobles durante 12 semanas y evaluar la respuesta antes de solicitar estudios.",
    "Solicitar una prueba terapéutica con procinético y considerar endoscopia únicamente si persiste la disfagia.",
    "Realizar endoscopia digestiva alta prioritaria para identificar estenosis, neoplasia, esofagitis u otra causa estructural y obtener biopsias cuando estén indicadas.",
    "Solicitar exclusivamente una pH-metría ambulatoria para cuantificar la exposición esofágica al ácido.",
    "Diagnosticar disfagia funcional y recomendar modificación de la consistencia de los alimentos sin más estudios."
  ],
  respuestaCorrecta: 2,
  explicacion: `La disfagia progresiva, la pérdida ponderal y la anemia son datos de alarma. La endoscopia digestiva alta es la prueba inicial prioritaria para evaluar causas estructurales y mucosas, incluyendo neoplasia esofagogástrica, estenosis péptica y esofagitis eosinofílica, entre otras posibilidades. La toma de biopsias depende de los hallazgos y de la sospecha clínica; puede ser necesaria incluso si la mucosa parece normal cuando se sospecha esofagitis eosinofílica. Si la endoscopia no explica la disfagia, pueden requerirse estudios adicionales, como manometría esofágica de alta resolución. No debe retrasarse la evaluación mediante una prueba empírica prolongada de IBP.`,
  perlaENARM: `Disfagia progresiva, anemia, sangrado digestivo, vómitos persistentes o pérdida ponderal son señales de alarma. En este contexto, la endoscopia tiene prioridad sobre la prueba empírica con IBP o la pH-metría.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica de ERGE del adulto aplicable a este escenario; seguir la ruta institucional para disfagia y sospecha de neoplasia.",
    internacional: "ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease, 2022."
  },
  bibliografia: [
    "Katz PO, et al. ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease. Am J Gastroenterol. 2022;117:27-56.",
    "Yadlapati R, et al. AGA Clinical Practice Update on the Personalized Approach to the Evaluation and Management of GERD. Clin Gastroenterol Hepatol. 2022;20:984-994.e1."
  ]
},
{
  id: "GASTRO-023",
  especialidad: "Gastroenterología",
  tema: "ERGE",
  subtema: "Esofagitis erosiva grave y tratamiento de mantenimiento",
  dificultad: "Extrema",
  caso: `Femenina de 54 años con obesidad, pirosis intensa y regurgitación nocturna de larga evolución. La endoscopia digestiva alta muestra erosiones confluentes que abarcan gran parte de la circunferencia esofágica, con pérdida de continuidad de la mucosa entre los pliegues y compromiso de aproximadamente el 80% de la circunferencia. No se identifica una masa ni una estenosis fija. Las biopsias no muestran displasia ni malignidad. Tras tratamiento antisecretor adecuado, los síntomas mejoran de forma importante, pero reaparecen al suspender el medicamento. No tiene antecedente de nefritis intersticial ni otra contraindicación documentada para IBP.`,
  pregunta: "¿Cuál es la estrategia de tratamiento de mantenimiento más apropiada?",
  opciones: [
    "Suspender permanentemente el IBP porque la resolución de los síntomas demuestra que la enfermedad quedó curada.",
    "Cambiar a antiácidos a demanda como única estrategia, independientemente de la gravedad endoscópica inicial.",
    "Mantener IBP a largo plazo con ajuste a la menor dosis eficaz que controle la enfermedad; considerar una estrategia antirreflujo en pacientes seleccionados con evaluación objetiva y funcional adecuada.",
    "Indicar antibióticos para erradicar una supuesta infección esofágica subclínica.",
    "Realizar dilatación esofágica profiláctica aunque no exista estenosis."
  ],
  respuestaCorrecta: 2,
  explicacion: `La descripción corresponde a esofagitis erosiva grave, compatible con grado C o D de Los Ángeles según la extensión exacta y la relación de las lesiones entre pliegues. En la esofagitis erosiva grave, el tratamiento de mantenimiento con IBP a largo plazo o una intervención antirreflujo apropiada está indicado debido al alto riesgo de recaída tras suspender la supresión ácida. Se debe utilizar la dosis mínima que mantenga la curación y el control clínico, sin retirar sistemáticamente el fármaco solo porque desaparezcan los síntomas. Si se plantea cirugía o intervención endoscópica, debe confirmarse el diagnóstico y evaluar la anatomía y la función esofágica, incluida la exclusión de acalasia cuando corresponda. La dilatación solo se considera si existe una estenosis clínicamente relevante.`,
  perlaENARM: `ERGE con esofagitis erosiva Los Ángeles C/D: requiere mantenimiento a largo plazo con IBP o una alternativa antirreflujo apropiada. La ausencia de síntomas no garantiza que la esofagitis grave no recurra al suspender el tratamiento.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica de ERGE del adulto que sustituya la recomendación internacional para esofagitis erosiva grave.",
    internacional: "ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease, 2022; AGA Clinical Practice Update, 2022."
  },
  bibliografia: [
    "Katz PO, et al. ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease. Am J Gastroenterol. 2022;117:27-56.",
    "Yadlapati R, et al. AGA Clinical Practice Update on the Personalized Approach to the Evaluation and Management of GERD. Clin Gastroenterol Hepatol. 2022;20:984-994.e1."
  ]
},
{
  id: "GASTRO-024",
  especialidad: "Gastroenterología",
  tema: "ERGE",
  subtema: "Síntomas persistentes durante tratamiento con IBP",
  dificultad: "Extrema",
  caso: `Masculino de 47 años con pirosis y regurgitación persistentes a pesar de referir que toma omeprazol 40 mg cada mañana desde hace tres meses. Lo ingiere junto con el desayuno. No se ha revisado la adherencia ni la relación entre la toma y las comidas. La endoscopia realizada durante el tratamiento no muestra esofagitis erosiva, estenosis ni esófago de Barrett. No existen estudios previos que documenten exposición patológica al ácido. El paciente solicita cirugía porque considera que el medicamento ya no funciona. No presenta disfagia, anemia, pérdida ponderal ni otros datos de alarma.`,
  pregunta: "¿Cuál es el siguiente paso más apropiado antes de etiquetar el cuadro como ERGE refractaria o indicar cirugía?",
  opciones: [
    "Indicar funduplicatura inmediata porque la persistencia de síntomas demuestra fracaso farmacológico.",
    "Optimizar primero el tratamiento con IBP, verificando adherencia y administración 30–60 minutos antes de la comida; si persisten síntomas, seleccionar pruebas objetivas según si la ERGE está demostrada o no.",
    "Añadir de forma rutinaria tres procinéticos y mantenerlos indefinidamente.",
    "Aumentar la dosis sin límite y evitar cualquier evaluación fisiológica del esófago.",
    "Suspender toda evaluación porque una endoscopia normal excluye de manera definitiva ERGE."
  ],
  respuestaCorrecta: 1,
  explicacion: `Antes de declarar ERGE refractaria debe verificarse que el tratamiento se utilice correctamente, incluyendo adherencia, dosis y administración antes de las comidas. Si persisten síntomas típicos, puede optimizarse el IBP, por ejemplo, mediante administración dos veces al día en los escenarios apropiados. En este paciente no existe evidencia objetiva previa que establezca ERGE. Si la endoscopia no muestra enfermedad erosiva concluyente y persiste incertidumbre diagnóstica, debe considerarse monitorización ambulatoria del reflujo fuera del tratamiento antisecretor para demostrar o descartar exposición patológica al ácido. En cambio, cuando la ERGE ya está demostrada y los síntomas persisten pese a IBP optimizado dos veces al día, la pH-impedanciometría durante el tratamiento puede ayudar a caracterizar el mecanismo de los síntomas persistentes. La cirugía no debe indicarse basándose únicamente en síntomas refractarios sin confirmación objetiva y evaluación funcional.`,
  perlaENARM: `ERGE no demostrada + endoscopia sin hallazgos concluyentes = monitorización del reflujo fuera de IBP. ERGE previamente demostrada con síntomas persistentes pese a IBP optimizado dos veces al día = considerar pH-impedanciometría durante el tratamiento.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica de ERGE refractaria del adulto que sustituya el algoritmo internacional.",
    internacional: "ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease, 2022; AGA Clinical Practice Update, 2022."
  },
  bibliografia: [
    "Katz PO, et al. ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease. Am J Gastroenterol. 2022;117:27-56.",
    "Yadlapati R, et al. AGA Clinical Practice Update on the Personalized Approach to the Evaluation and Management of GERD. Clin Gastroenterol Hepatol. 2022;20:984-994.e1."
  ]
},
{
  id: "GASTRO-025",
  especialidad: "Gastroenterología",
  tema: "ERGE",
  subtema: "Selección para cirugía antirreflujo y evaluación preoperatoria",
  dificultad: "Extrema",
  caso: `Femenina de 45 años con regurgitación posprandial importante y pirosis de cinco años de evolución. Presenta respuesta parcial a un IBP optimizado y desea evitar tratamiento farmacológico crónico. La endoscopia muestra una hernia hiatal de 3 cm, sin esofagitis erosiva grave ni Barrett. Una monitorización ambulatoria del reflujo fuera de tratamiento documenta exposición ácida patológica con asociación sintomática positiva. No se ha realizado manometría esofágica. No presenta disfagia progresiva ni pérdida ponderal. Se está considerando una intervención antirreflujo.`,
  pregunta: "¿Qué evaluación adicional es esencial antes de seleccionar una intervención antirreflujo invasiva?",
  opciones: [
    "Solicitar únicamente una prueba de aliento para Helicobacter pylori y proceder si es negativa.",
    "Confirmar la presencia de ERGE mediante otra endoscopia aunque ya exista monitorización patológica y omitir la evaluación motora.",
    "Realizar manometría esofágica de alta resolución para excluir acalasia y evaluar la peristalsis, integrando la anatomía y la evidencia objetiva de reflujo.",
    "Indicar funduplicatura sin evaluar la motilidad porque la hernia hiatal confirma por sí sola que todos los síntomas son causados por ERGE.",
    "Realizar colonoscopia y manometría anorrectal antes de decidir el procedimiento."
  ],
  respuestaCorrecta: 2,
  explicacion: `La exposición ácida patológica documentada proporciona evidencia objetiva de ERGE. Sin embargo, antes de una intervención invasiva debe evaluarse la función motora esofágica, habitualmente mediante manometría de alta resolución, para excluir trastornos como la acalasia y caracterizar la peristalsis. También deben revisarse la anatomía de la unión gastroesofágica, el tamaño de la hernia hiatal, el patrón de síntomas, las preferencias del paciente y la idoneidad de la técnica propuesta. La hernia hiatal aislada no demuestra que todos los síntomas se deban a reflujo ni sustituye la evaluación preoperatoria. La elección entre funduplicatura, aumento magnético del esfínter u otras opciones depende de la selección clínica, los hallazgos funcionales y la experiencia del centro.`,
  perlaENARM: `Antes de cirugía antirreflujo: evidencia objetiva de ERGE, exclusión de acalasia y evaluación de la peristalsis esofágica. No indicar una intervención invasiva solo por síntomas o por la presencia de una hernia hiatal.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica de evaluación preoperatoria para cirugía antirreflujo del adulto.",
    internacional: "AGA Clinical Practice Update on the Personalized Approach to the Evaluation and Management of GERD, 2022; ACG Clinical Guideline, 2022."
  },
  bibliografia: [
    "Yadlapati R, et al. AGA Clinical Practice Update on the Personalized Approach to the Evaluation and Management of GERD. Clin Gastroenterol Hepatol. 2022;20:984-994.e1.",
    "Katz PO, et al. ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease. Am J Gastroenterol. 2022;117:27-56."
  ]
},

{
  id: "GASTRO-026",
  especialidad: "Gastroenterología",
  tema: "Úlcera péptica",
  subtema: "Úlcera péptica refractaria y causas de falta de cicatrización",
  dificultad: "Extrema",
  caso: `Masculino de 51 años con antecedente de úlcera duodenal diagnosticada hace cuatro meses. Refiere dolor epigástrico persistente a pesar de recibir omeprazol 40 mg al día. Una endoscopia de control identifica una úlcera duodenal de 12 mm que no ha cicatrizado. El paciente afirma que toma el medicamento diariamente, pero lo ingiere después del desayuno. Niega consumo actual de AINE, tabaquismo y consumo excesivo de alcohol. La prueba inicial para Helicobacter pylori fue negativa, pero se realizó mientras tomaba IBP. No se han efectuado pruebas adicionales para H. pylori ni se han revisado otros medicamentos. No presenta pérdida ponderal ni datos de hemorragia o perforación.`,
  pregunta: "¿Cuál es la estrategia más apropiada para abordar esta úlcera que no ha cicatrizado?",
  opciones: [
    "Indicar gastrectomía parcial inmediata, porque toda úlcera persistente requiere tratamiento quirúrgico.",
    "Aumentar indefinidamente la dosis del IBP sin investigar adherencia, infección ni exposición a fármacos ulcerogénicos.",
    "Revisar adherencia y administración correcta del IBP, buscar exposición inadvertida a AINE y reevaluar H. pylori mediante una prueba apropiada fuera de IBP, además de reconsiderar diagnósticos alternativos.",
    "Descartar definitivamente H. pylori porque la primera prueba de ureasa fue negativa durante el tratamiento antisecretor.",
    "Suspender el IBP y administrar únicamente sucralfato durante dos semanas, sin repetir la evaluación."
  ],
  respuestaCorrecta: 2,
  explicacion: `Ante una úlcera que persiste, primero deben verificarse la adherencia, la dosis y el momento de administración del IBP. La administración habitual es 30–60 minutos antes de una comida. También debe investigarse el uso de AINE, ácido acetilsalicílico y otros medicamentos capaces de producir lesión gastroduodenal. Los IBP pueden reducir la sensibilidad de las pruebas para H. pylori; cuando sea clínicamente seguro, la prueba de aliento con urea o el antígeno fecal deben realizarse después de suspender el IBP durante aproximadamente dos semanas, evitando antibióticos y bismuto durante al menos cuatro semanas antes de la prueba. No debe suspenderse un tratamiento necesario sin valorar el riesgo clínico. Si la lesión continúa, se requiere reevaluar la etiología, la posibilidad de una enfermedad hipersecretora y la necesidad de nuevas biopsias o estudios especializados.`,
  perlaENARM: `Úlcera refractaria: antes de etiquetarla como fracaso terapéutico, verifica adherencia, horario del IBP, AINE ocultos y H. pylori falsamente negativo por supresión ácida.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica para el abordaje completo de úlcera péptica refractaria. Individualizar según protocolo institucional.",
    internacional: "ACG Clinical Guideline: Treatment of Helicobacter pylori Infection, 2024; ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding, 2021."
  },
  bibliografia: [
    "Chey WD, et al. ACG Clinical Guideline: Treatment of Helicobacter pylori Infection. Am J Gastroenterol. 2024;119:1730-1753.",
    "Laine L, et al. ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. Am J Gastroenterol. 2021;116:899-917."
  ]
},
{
  id: "GASTRO-027",
  especialidad: "Gastroenterología",
  tema: "Úlcera péptica",
  subtema: "Síndrome de Zollinger-Ellison e hipergastrinemia",
  dificultad: "Extrema",
  caso: `Masculino de 46 años con dolor epigástrico recurrente, diarrea acuosa crónica y pérdida de 5 kg en seis meses. Ha presentado varias úlceras duodenales, incluida una lesión distal al bulbo, y recurrencia a pesar del tratamiento antisecretor convencional. La endoscopia muestra pliegues gástricos prominentes y múltiples úlceras. No refiere consumo de AINE. La gastrina sérica en ayuno es de 780 pg/mL, pero la muestra se obtuvo mientras recibía omeprazol 40 mg cada 12 horas. La creatinina es normal. No se dispone de pH gástrico ni de estudios de localización tumoral.`,
  pregunta: "¿Cuál es la interpretación y el siguiente paso diagnóstico más apropiado?",
  opciones: [
    "La gastrina elevada confirma por sí sola un gastrinoma y justifica cirugía inmediata.",
    "Descartar Zollinger-Ellison porque la gastrina es menor de 1,000 pg/mL.",
    "Considerar hipergastrinemia secundaria al IBP, valorar gastrina en ayuno junto con pH gástrico bajo supervisión especializada y seleccionar pruebas confirmatorias según los resultados.",
    "Suspender bruscamente el IBP en casa y repetir la gastrina al día siguiente para confirmar el diagnóstico.",
    "Solicitar únicamente anticuerpos contra H. pylori, porque la diarrea crónica excluye un síndrome hipersecretor."
  ],
  respuestaCorrecta: 2,
  explicacion: `El síndrome de Zollinger-Ellison debe sospecharse ante úlceras múltiples, recurrentes o distales, diarrea y posible hipersecreción ácida. Sin embargo, los IBP pueden elevar la gastrina y dificultar su interpretación. Una gastrina en ayuno superior a diez veces el límite normal, acompañada de pH gástrico igual o inferior a 2, apoya fuertemente el diagnóstico en el contexto apropiado. Si la elevación es menor, pero existe hipersecreción ácida, pueden requerirse pruebas adicionales, como la prueba de secretina, según la evaluación especializada. No debe retirarse bruscamente el IBP sin supervisión, porque la hipersecreción ácida puede causar complicaciones graves. La localización mediante imagen se plantea después de establecer razonablemente el diagnóstico bioquímico.`,
  perlaENARM: `Úlceras múltiples o distales + diarrea = sospecha de Zollinger-Ellison. La gastrina aislada no basta: interpreta el resultado con el pH gástrico y el uso de IBP.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica para síndrome de Zollinger-Ellison.",
    internacional: "Recomendaciones especializadas para diagnóstico bioquímico y localización de gastrinomas."
  },
  bibliografia: [
    "Metz DC, et al. Diagnosis of Zollinger-Ellison syndrome in the era of proton pump inhibitors. Endocr Pract. Revisión especializada sobre interpretación de gastrina y secreción ácida.",
    "Harrison. Principles of Internal Medicine. Sección de tumores neuroendocrinos gastroenteropancreáticos y síndromes de hipersecreción."
  ]
},
{
  id: "GASTRO-028",
  especialidad: "Gastroenterología",
  tema: "Úlcera péptica",
  subtema: "Resangrado después de hemostasia endoscópica",
  dificultad: "Extrema",
  caso: `Masculino de 70 años hospitalizado por melena y choque hipovolémico. La endoscopia inicial identifica una úlcera gástrica con vaso visible no sangrante, tratada mediante clip y terapia térmica. Recibe IBP intravenoso a dosis altas. Treinta horas después presenta nueva hematemesis, TA 88/56 mmHg, FC 122 lpm y descenso de hemoglobina de 9.1 a 6.8 g/dL. Se inicia nuevamente reanimación y se obtiene acceso vascular. No hay signos de perforación.`,
  pregunta: "Tras estabilización inicial, ¿cuál es la estrategia preferida para controlar el resangrado?",
  opciones: [
    "Mantener únicamente IBP intravenoso durante otras 72 horas sin repetir la evaluación endoscópica.",
    "Realizar una segunda endoscopia terapéutica; si fracasa el control endoscópico, considerar embolización arterial transcatéter y cirugía si no se dispone de embolización o esta fracasa.",
    "Enviar directamente a gastrectomía total sin intentar una nueva intervención endoscópica.",
    "Suspender el IBP para evitar interferencia con la coagulación y observar la evolución.",
    "Administrar únicamente ácido tranexámico y repetir la endoscopia una semana después."
  ],
  respuestaCorrecta: 1,
  explicacion: `El resangrado tras una hemostasia inicial requiere reanimación y nueva endoscopia terapéutica, siempre que sea factible. La segunda intervención endoscópica puede conseguir hemostasia sin recurrir de inmediato a cirugía. Si el tratamiento endoscópico fracasa, la embolización arterial transcatéter es una alternativa recomendada cuando está disponible; la cirugía se considera si la embolización no está disponible o falla, o si la situación clínica exige control quirúrgico. La decisión debe individualizarse según estabilidad hemodinámica, localización de la úlcera, comorbilidades y recursos. El IBP a dosis altas continúa formando parte del manejo, pero no sustituye el control definitivo de una hemorragia recurrente.`,
  perlaENARM: `Resangrado ulceroso: reanimación → segunda endoscopia terapéutica → embolización arterial si fracasa la endoscopia → cirugía en casos seleccionados.`,
  gpc: {
    mexico: "IMSS-169-09, úlcera péptica complicada aguda en el adulto, actualización 2015; verificar vigencia institucional.",
    internacional: "ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding, 2021."
  },
  bibliografia: [
    "Laine L, et al. ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. Am J Gastroenterol. 2021;116:899-917."
  ]
},
{
  id: "GASTRO-029",
  especialidad: "Gastroenterología",
  tema: "Úlcera péptica",
  subtema: "Úlcera péptica y antiagregación secundaria tras infarto",
  dificultad: "Extrema",
  caso: `Masculino de 66 años con antecedente de infarto agudo de miocardio tratado mediante intervención coronaria percutánea hace dos años. Recibe ácido acetilsalicílico a dosis antiagregante y atorvastatina. Ingresa por melena; la endoscopia identifica una úlcera duodenal con estigmas de hemorragia reciente, tratada endoscópicamente. Se confirma infección por H. pylori y se inicia tratamiento de erradicación. No existe síndrome coronario agudo actual ni antecedente de alergia al ácido acetilsalicílico. Tras la hemostasia, el paciente pregunta si debe suspender definitivamente el antiagregante para evitar otro sangrado.`,
  pregunta: "¿Cuál es el principio de manejo más apropiado respecto al ácido acetilsalicílico?",
  opciones: [
    "Suspenderlo permanentemente en todos los pacientes con hemorragia ulcerosa, independientemente de la indicación cardiovascular.",
    "Mantenerlo suspendido durante seis meses y reiniciarlo solo si reaparece dolor torácico.",
    "Reanudarlo tempranamente tras lograr la hemostasia, coordinando la decisión con el equipo tratante, manteniendo gastroprotección y erradicando H. pylori.",
    "Sustituirlo automáticamente por un anticoagulante oral, porque todos ofrecen menor riesgo gastrointestinal.",
    "Duplicar la dosis de ácido acetilsalicílico para compensar los días que estuvo suspendido."
  ],
  respuestaCorrecta: 2,
  explicacion: `En pacientes que reciben ácido acetilsalicílico para prevención cardiovascular secundaria, la suspensión prolongada puede aumentar el riesgo de eventos cardiovasculares. Después de controlar la hemorragia, generalmente se favorece la reanudación temprana, individualizando el momento según la gravedad del sangrado y la situación cardiovascular, con coordinación entre gastroenterología y cardiología cuando sea necesario. Deben mantenerse las medidas para reducir recurrencia: IBP según indicación, erradicación de H. pylori si está presente y revisión de otros medicamentos que incrementen el riesgo hemorrágico. La prevención primaria constituye un escenario distinto y requiere reevaluar si el antiagregante está realmente indicado.`,
  perlaENARM: `Distingue prevención primaria de secundaria. Tras hemorragia ulcerosa, el ácido acetilsalicílico indicado para prevención secundaria no debe suspenderse indefinidamente de forma automática; se favorece la reanudación temprana tras controlar el sangrado.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente que resuelva todos los escenarios de reinicio de antiagregación tras hemorragia ulcerosa.",
    internacional: "ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding, 2021; recomendaciones de consenso sobre hemorragia gastrointestinal no variceal."
  },
  bibliografia: [
    "Laine L, et al. ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. Am J Gastroenterol. 2021;116:899-917.",
    "Recomendaciones internacionales de consenso para el manejo de antiagregantes en hemorragia gastrointestinal no variceal."
  ]
},
{
  id: "GASTRO-030",
  especialidad: "Gastroenterología",
  tema: "Úlcera péptica",
  subtema: "Confirmación de erradicación de Helicobacter pylori",
  dificultad: "Alta",
  caso: `Femenina de 35 años con úlcera duodenal asociada a H. pylori. Completa una terapia cuádruple con bismuto durante 14 días y presenta mejoría clínica. Dos semanas después de terminar los antibióticos, su médico solicita una prueba de aliento con urea. La paciente continúa tomando omeprazol diariamente y el resultado es negativo. No ha recibido antibióticos ni bismuto desde que concluyó el esquema. Desea saber si puede considerarse erradicada la infección.`,
  pregunta: "¿Cuál es la conducta más apropiada para confirmar la erradicación?",
  opciones: [
    "Considerar confirmada la erradicación porque la prueba de aliento negativa siempre descarta infección.",
    "Repetir inmediatamente la endoscopia con biopsias mientras continúa el IBP.",
    "Repetir una prueba de aliento con urea o antígeno fecal cuando hayan transcurrido al menos cuatro semanas desde antibióticos y se haya suspendido el IBP aproximadamente dos semanas, si es clínicamente seguro.",
    "Solicitar anticuerpos IgG séricos y considerar erradicación si disminuye el título.",
    "No realizar ninguna prueba de confirmación si desapareció el dolor."
  ],
  respuestaCorrecta: 2,
  explicacion: `La mejoría de los síntomas no confirma erradicación. Se recomienda una prueba de aliento con urea, antígeno fecal o una prueba basada en biopsia cuando esté indicada, realizada al menos cuatro semanas después de completar antibióticos y bismuto. Para reducir falsos negativos, los IBP deben suspenderse aproximadamente dos semanas antes de la prueba, si el estado clínico lo permite. Los anticuerpos serológicos no son apropiados para confirmar erradicación porque pueden permanecer positivos después de eliminar la infección. La prueba debe planificarse sin comprometer la seguridad del paciente si existe una indicación importante para continuar el IBP.`,
  perlaENARM: `Siempre confirma erradicación de H. pylori: prueba de aliento o antígeno fecal, al menos cuatro semanas después de antibióticos y con suspensión del IBP durante dos semanas, si es seguro.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica que sustituya las recomendaciones internacionales actuales para confirmación de erradicación.",
    internacional: "ACG Clinical Guideline: Treatment of Helicobacter pylori Infection, 2024."
  },
  bibliografia: [
    "Chey WD, et al. ACG Clinical Guideline: Treatment of Helicobacter pylori Infection. Am J Gastroenterol. 2024;119:1730-1753."
  ]
},
  
{
  id: "GASTRO-031",
  especialidad: "Gastroenterología",
  tema: "ERGE",
  subtema: "Esófago de Barrett: diagnóstico y vigilancia",
  dificultad: "Extrema",
  caso: `Masculino de 59 años, con obesidad central, tabaquismo previo y pirosis durante más de 15 años. Se realiza endoscopia por síntomas persistentes. Se identifica una lengüeta de mucosa columnar que se extiende 4 cm por encima de la unión gastroesofágica. Las biopsias protocolizadas muestran metaplasia intestinal especializada sin displasia. No hay nódulos, úlceras ni lesiones sospechosas. El paciente pregunta si necesita resección endoscópica inmediata por el riesgo de adenocarcinoma.`,
  pregunta: "¿Cuál es la estrategia más apropiada?",
  opciones: [
    "Realizar ablación endoscópica inmediata en todo paciente con metaplasia intestinal, aunque no exista displasia.",
    "Indicar esofagectomía profiláctica por el riesgo acumulado de cáncer.",
    "Mantener tratamiento antisecretor según indicación y establecer vigilancia endoscópica según longitud del segmento y ausencia de displasia, con biopsias protocolizadas.",
    "Suspender todo tratamiento antisecretor porque la metaplasia intestinal no se relaciona con ERGE.",
    "Repetir endoscopia cada tres meses de forma indefinida, independientemente de los hallazgos."
  ],
  respuestaCorrecta: 2,
  explicacion: `El esófago de Barrett sin displasia no requiere de forma rutinaria ablación endoscópica ni esofagectomía profiláctica. Se recomienda manejo de la ERGE, control de factores de riesgo y vigilancia endoscópica con alta definición, inspección cuidadosa y biopsias protocolizadas. Las guías ACG proponen intervalos de vigilancia que consideran la longitud del segmento; en pacientes sin displasia con segmento de 3 cm o más, habitualmente se utiliza un intervalo de tres años, siempre que la evaluación inicial sea adecuada. Si se identifica displasia, debe confirmarse mediante revisión por un patólogo experto y modificar la estrategia según el grado. Las lesiones visibles requieren evaluación dirigida y, en su caso, resección endoscópica.`,
  perlaENARM: `Barrett sin displasia: no equivale a cáncer ni implica ablación sistemática. La longitud del segmento modifica el intervalo de vigilancia; la displasia debe confirmarse por un patólogo experto.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica para vigilancia de esófago de Barrett que sustituya las recomendaciones internacionales.",
    internacional: "ACG Clinical Guideline: Diagnosis and Management of Barrett's Esophagus, 2022."
  },
  bibliografia: [
    "Shaheen NJ, et al. Diagnosis and Management of Barrett's Esophagus: An Updated ACG Guideline. Am J Gastroenterol. 2022;117:559-587."
  ]
},
{
  id: "GASTRO-032",
  especialidad: "Gastroenterología",
  tema: "ERGE",
  subtema: "Esofagitis eosinofílica como diagnóstico diferencial de ERGE",
  dificultad: "Extrema",
  caso: `Masculino de 28 años con antecedente de asma y rinitis alérgica. Refiere episodios recurrentes de impactación alimentaria y disfagia para sólidos, especialmente carne y pan. Durante una comida presenta obstrucción esofágica completa y no puede deglutir saliva. La endoscopia urgente identifica un bolo alimenticio impactado en el esófago. Tras resolver la obstrucción, se observan anillos concéntricos y surcos longitudinales. No existe una masa evidente. El paciente refiere pirosis ocasional y ha utilizado IBP de forma intermitente.`,
  pregunta: "¿Cuál es el diagnóstico que debe investigarse prioritariamente y cómo se confirma?",
  opciones: [
    "ERGE no complicada, confirmada exclusivamente por la respuesta al IBP.",
    "Acalasia, confirmada mediante una prueba de aliento con urea.",
    "Esofagitis eosinofílica, mediante biopsias esofágicas de diferentes niveles y correlación clínica e histológica.",
    "Úlcera péptica, mediante biopsia de la mucosa gástrica únicamente.",
    "Síndrome de intestino irritable, mediante criterios clínicos y sin estudios esofágicos."
  ],
  respuestaCorrecta: 2,
  explicacion: `La disfagia para sólidos, las impactaciones alimentarias y los anillos o surcos esofágicos sugieren esofagitis eosinofílica, especialmente en una persona con antecedentes atópicos. El diagnóstico requiere síntomas de disfunción esofágica y biopsias que demuestren inflamación eosinofílica compatible; el umbral histológico utilizado habitualmente es al menos 15 eosinófilos por campo de gran aumento, interpretado en contexto clínico. Se recomienda tomar múltiples biopsias de al menos dos niveles esofágicos, porque la enfermedad puede ser parcheada. La impactación con incapacidad para manejar secreciones es una urgencia endoscópica. Una vez resuelta, debe completarse la evaluación y planificarse tratamiento antiinflamatorio esofágico, dietético o farmacológico según el caso. La respuesta a IBP ya no se exige como requisito diagnóstico excluyente.`,
  perlaENARM: `Adulto joven con atopia + disfagia para sólidos + impactación alimentaria = sospecha de esofagitis eosinofílica. Confirma con biopsias esofágicas; la apariencia endoscópica aislada no basta.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica para esofagitis eosinofílica del adulto.",
    internacional: "ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease, 2022; consensos internacionales específicos de esofagitis eosinofílica."
  },
  bibliografia: [
    "Dellon ES, et al. ACG Clinical Guideline: Diagnosis and Management of Eosinophilic Esophagitis. Am J Gastroenterol. 2025.",
    "Katz PO, et al. ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease. Am J Gastroenterol. 2022;117:27-56."
  ]
},
{
  id: "GASTRO-033",
  especialidad: "Gastroenterología",
  tema: "ERGE",
  subtema: "Dolor torácico no cardiaco y evaluación de reflujo",
  dificultad: "Extrema",
  caso: `Femenina de 52 años con episodios de dolor retroesternal urente, a veces posterior a las comidas y otras veces en reposo. Refiere regurgitación ácida ocasional, pero el dolor torácico es el síntoma que más le preocupa. Tiene hipertensión, dislipidemia y antecedente familiar de enfermedad coronaria prematura. En una valoración previa se realizó electrocardiograma y troponinas, sin evidencia de lesión miocárdica en ese episodio. No se ha completado una evaluación cardiovascular integral. La paciente solicita un IBP como sustituto de futuras evaluaciones de urgencia.`,
  pregunta: "¿Cuál es el principio de abordaje más adecuado?",
  opciones: [
    "Diagnosticar ERGE de forma definitiva por el carácter urente del dolor y evitar nuevas evaluaciones cardiacas.",
    "Considerar que toda respuesta al IBP excluye enfermedad coronaria.",
    "Asegurar primero una evaluación cardiovascular apropiada según el riesgo y, una vez excluida una causa cardiaca relevante, estudiar ERGE mediante tratamiento empírico o pruebas objetivas según la presentación.",
    "Indicar cirugía antirreflujo de inmediato porque el dolor torácico es intenso.",
    "Solicitar únicamente una radiografía de tórax, que permite descartar de forma definitiva isquemia miocárdica y ERGE."
  ],
  respuestaCorrecta: 2,
  explicacion: `El dolor torácico puede deberse a enfermedad cardiovascular, ERGE, trastornos motores esofágicos y otras causas. La presencia de pirosis no excluye un origen cardiaco, y una evaluación negativa durante un episodio previo no descarta todos los episodios posteriores ni sustituye la estratificación adecuada. En pacientes con dolor torácico sin pirosis típica y después de una evaluación suficiente para excluir enfermedad cardiaca, las guías recomiendan pruebas objetivas para investigar ERGE, como endoscopia y/o monitorización del reflujo, según el contexto. La respuesta al IBP no debe utilizarse para omitir la evaluación de síntomas potencialmente cardiacos.`,
  perlaENARM: `Dolor torácico: primero descarta una causa cardiaca de forma apropiada. No atribuyas el dolor a ERGE únicamente por su carácter urente o por respuesta parcial al IBP.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica para dolor torácico atribuido a ERGE. Seguir protocolos de dolor torácico y evaluación cardiovascular vigentes.",
    internacional: "ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease, 2022."
  },
  bibliografia: [
    "Katz PO, et al. ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease. Am J Gastroenterol. 2022;117:27-56."
  ]
},
{
  id: "GASTRO-034",
  especialidad: "Gastroenterología",
  tema: "ERGE",
  subtema: "Síntomas extraesofágicos: tos crónica y disfonía",
  dificultad: "Alta",
  caso: `Masculino de 48 años con tos seca de ocho meses, carraspera y disfonía matutina. Refiere pirosis ocasional, pero la tos no tiene una relación consistente con las comidas. No fuma actualmente. La radiografía de tórax es normal y no presenta fiebre, hemoptisis ni pérdida ponderal. La laringoscopia muestra eritema inespecífico, sin lesión focal. Nunca ha recibido una evaluación sistemática de asma, rinitis, exposición ambiental ni otras causas de tos crónica. Solicita tratamiento prolongado con IBP porque le informaron que el eritema laríngeo confirma reflujo.`,
  pregunta: "¿Cuál es el enfoque más apropiado?",
  opciones: [
    "Confirmar ERGE por el eritema laríngeo y prescribir IBP indefinidamente sin estudiar otras causas.",
    "Atribuir todos los síntomas a ERGE y considerar innecesaria la evaluación respiratoria.",
    "Evaluar causas alternativas de tos y disfonía; si la ERGE no está demostrada, considerar pruebas objetivas de reflujo según el contexto en lugar de asumir causalidad por la laringoscopia.",
    "Indicar cirugía antirreflujo sin pruebas adicionales, porque la disfonía es específica de reflujo laringofaríngeo.",
    "Solicitar únicamente una prueba de anticuerpos contra H. pylori para confirmar el origen laríngeo."
  ],
  respuestaCorrecta: 2,
  explicacion: `La tos crónica, la disfonía y el eritema laríngeo son hallazgos inespecíficos y no permiten establecer por sí solos que el reflujo sea la causa. Deben considerarse asma, síndrome de tos de vías aéreas superiores, medicamentos como inhibidores de la enzima convertidora de angiotensina, tabaquismo, causas infecciosas y otras patologías laríngeas o pulmonares. Si el paciente presenta síntomas típicos de ERGE y extraesofágicos, puede considerarse una prueba terapéutica con IBP en escenarios seleccionados. Si predominan síntomas extraesofágicos sin pirosis ni regurgitación y no existe diagnóstico objetivo de ERGE, se favorece la evaluación mediante pruebas de reflujo antes de mantener tratamiento prolongado. La laringoscopia aislada no demuestra reflujo laringofaríngeo.`,
  perlaENARM: `Tos y disfonía no equivalen a ERGE. El eritema laríngeo es inespecífico; investiga diagnósticos alternativos y utiliza pruebas objetivas cuando la sospecha de reflujo no está establecida.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica para ERGE extraesofágica del adulto.",
    internacional: "ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease, 2022."
  },
  bibliografia: [
    "Katz PO, et al. ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease. Am J Gastroenterol. 2022;117:27-56."
  ]
},
{
  id: "GASTRO-035",
  especialidad: "Gastroenterología",
  tema: "ERGE",
  subtema: "Regurgitación refractaria: reflujo frente a rumiación",
  dificultad: "Extrema",
  caso: `Femenina de 36 años con episodios de retorno de alimentos a la boca entre 10 y 20 minutos después de comer. Los episodios son repetitivos, no suelen acompañarse de náusea ni arcadas y con frecuencia el material regurgitado no tiene sabor ácido. Ocurren principalmente en posición sentada y disminuyen cuando deja de comer. Ha recibido dos IBP distintos a dosis optimizadas, sin mejoría. La endoscopia no muestra esofagitis ni estenosis. Una monitorización previa de reflujo no demuestra exposición ácida patológica. No presenta disfagia progresiva, pérdida ponderal ni alteraciones neurológicas.`,
  pregunta: "¿Cuál es el diagnóstico alternativo más probable y qué estrategia debe considerarse?",
  opciones: [
    "ERGE ácida grave, por lo que debe duplicarse indefinidamente el IBP sin reconsiderar el diagnóstico.",
    "Síndrome de rumiación, que requiere evaluación clínica dirigida y puede beneficiarse de respiración diafragmática y terapia conductual.",
    "Acalasia confirmada por la ausencia de respuesta a IBP, sin necesidad de manometría.",
    "Úlcera duodenal, que explica de forma característica la regurgitación inmediata de alimentos sin náusea.",
    "Gastroparesia confirmada por los síntomas, sin necesidad de valorar otros mecanismos."
  ],
  respuestaCorrecta: 1,
  explicacion: `El retorno repetitivo de alimentos poco después de comer, sin náusea ni arcadas y con escasa respuesta a IBP, orienta a síndrome de rumiación. Se trata de un trastorno de la interacción intestino-cerebro caracterizado por regurgitación posprandial, a menudo relacionada con contracción de la pared abdominal y aumento de la presión intragástrica. El diagnóstico suele ser clínico tras evaluar los datos pertinentes; en casos seleccionados, la manometría de alta resolución con impedancia durante una comida puede ayudar a distinguirlo de otros trastornos. La respiración diafragmática y las intervenciones conductuales constituyen tratamientos de primera línea. No debe escalarse automáticamente la supresión ácida cuando la evidencia objetiva no apoya ERGE.`,
  perlaENARM: `Regurgitación posprandial inmediata, repetitiva, sin náusea ni arcadas y resistente a IBP: considera rumiación. No todo retorno de alimento es reflujo gastroesofágico.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica para síndrome de rumiación en adultos.",
    internacional: "ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease, 2022; literatura especializada en trastornos de la interacción intestino-cerebro."
  },
  bibliografia: [
    "Katz PO, et al. ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease. Am J Gastroenterol. 2022;117:27-56.",
    "Literatura especializada en diagnóstico y tratamiento conductual del síndrome de rumiación."
  ]
},

{
  id: "GASTRO-036",
  especialidad: "Gastroenterología",
  tema: "Gastritis",
  subtema: "Gastritis asociada a Helicobacter pylori",
  dificultad: "Fácil",
  caso: `Masculino de 34 años con dolor epigástrico recurrente, sensación de plenitud posprandial y náuseas ocasionales de cuatro meses de evolución. Niega pérdida ponderal, disfagia, hematemesis y melena. No consume AINE y no tiene antecedentes de úlcera péptica. Se encuentra hemodinámicamente estable y la exploración abdominal no muestra datos de irritación peritoneal. Una prueba de aliento con urea resulta positiva para Helicobacter pylori. No ha recibido previamente tratamiento de erradicación y no se dispone de pruebas de susceptibilidad antimicrobiana.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Prescribir antiácidos exclusivamente, porque la infección suele desaparecer espontáneamente.",
    "Indicar erradicación de H. pylori con un esquema recomendado según las guías actuales y confirmar posteriormente la eliminación de la infección.",
    "Indicar únicamente omeprazol durante ocho semanas y asumir que la infección quedará erradicada.",
    "Prescribir claritromicina como monoterapia durante siete días.",
    "Solicitar gastrectomía parcial por el riesgo futuro de cáncer gástrico."
  ],
  respuestaCorrecta: 1,
  explicacion: `Una prueba de aliento positiva identifica infección activa por H. pylori en el contexto clínico apropiado. La infección debe tratarse porque se relaciona con gastritis crónica activa, enfermedad ulcerosa péptica y mayor riesgo de neoplasia gástrica. De acuerdo con la guía ACG 2024, cuando se desconoce la susceptibilidad antibiótica, la terapia cuádruple optimizada con bismuto durante 14 días es una opción empírica preferida. El esquema concreto debe ajustarse a alergias, disponibilidad y antecedentes de antibióticos. El IBP aislado no erradica la bacteria. Después del tratamiento debe confirmarse la erradicación mediante una prueba no serológica, respetando los periodos de suspensión de IBP, antibióticos y bismuto.`,
  perlaENARM: `H. pylori positivo = tratar y confirmar erradicación. La desaparición de la dispepsia no demuestra que la bacteria haya sido eliminada.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica que sustituya las recomendaciones actuales de erradicación de H. pylori. Consultar el catálogo institucional vigente.",
    internacional: "ACG Clinical Guideline: Treatment of Helicobacter pylori Infection, 2024."
  },
  bibliografia: [
    "Chey WD, et al. ACG Clinical Guideline: Treatment of Helicobacter pylori Infection. Am J Gastroenterol. 2024;119:1730-1753. doi:10.14309/ajg.0000000000002968."
  ]
},
{
  id: "GASTRO-037",
  especialidad: "Gastroenterología",
  tema: "Gastritis",
  subtema: "Gastropatía erosiva asociada a AINE",
  dificultad: "Media",
  caso: `Femenina de 58 años con osteoartrosis que consume naproxeno 500 mg cada 12 horas desde hace tres semanas. Consulta por dolor epigástrico, náuseas y sensación de ardor después de comer. Niega hematemesis, melena, síncope y pérdida ponderal. La TA es de 124/78 mmHg y la FC de 82 lpm. La hemoglobina es de 13.1 g/dL. La endoscopia, realizada por persistencia de los síntomas, muestra eritema difuso y múltiples erosiones superficiales en el antro, sin úlcera profunda ni sangrado activo. No existe otra indicación obligatoria para continuar el AINE.`,
  pregunta: "¿Cuál es el manejo inicial más apropiado?",
  opciones: [
    "Continuar el naproxeno sin modificaciones y añadir un antibiótico contra H. pylori sin realizar pruebas.",
    "Suspender el AINE si es posible, indicar un IBP durante un periodo terapéutico apropiado y reevaluar la necesidad de analgesia alternativa.",
    "Indicar cirugía gástrica para resecar las erosiones.",
    "Administrar corticoides sistémicos para acelerar la regeneración de la mucosa.",
    "Indicar exclusivamente hierro oral, porque las erosiones siempre producen anemia ferropénica."
  ],
  respuestaCorrecta: 1,
  explicacion: `El uso reciente de naproxeno, junto con las erosiones endoscópicas, favorece una gastropatía erosiva asociada a AINE. La inhibición de la ciclooxigenasa reduce la síntesis de prostaglandinas protectoras, altera la barrera mucosa y favorece el daño gastrointestinal. La primera medida consiste en retirar el agente causal cuando sea posible y administrar supresión ácida con un IBP según la gravedad y la evolución. Si el AINE resulta imprescindible, debe reevaluarse el riesgo gastrointestinal y cardiovascular y considerar gastroprotección. La infección por H. pylori debe investigarse cuando esté indicada, pero no se debe prescribir erradicación empírica sin evidencia de infección.`,
  perlaENARM: `AINE + erosiones gástricas = retirar el agente causal cuando sea posible y proporcionar tratamiento antisecretor. No toda gastropatía erosiva equivale a úlcera péptica.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica para gastropatía erosiva por AINE en adultos.",
    internacional: "NICE CG184: Gastro-oesophageal reflux disease and dyspepsia in adults; recomendaciones de gastroprotección asociada a AINE."
  },
  bibliografia: [
    "NICE. Gastro-oesophageal reflux disease and dyspepsia in adults: investigation and management. Clinical guideline CG184.",
    "Recomendaciones internacionales sobre prevención y tratamiento de lesión gastroduodenal asociada a AINE."
  ]
},
{
  id: "GASTRO-038",
  especialidad: "Gastroenterología",
  tema: "Gastritis",
  subtema: "Gastritis autoinmune y anemia perniciosa",
  dificultad: "Alta",
  caso: `Femenina de 63 años con fatiga progresiva, parestesias distales y sensación de ardor lingual. La biometría hemática muestra hemoglobina de 8.9 g/dL, VCM de 116 fL y neutrófilos hipersegmentados. La vitamina B12 está disminuida y el ácido metilmalónico elevado. Los anticuerpos contra el factor intrínseco son positivos. La endoscopia muestra mucosa pálida y adelgazada en el cuerpo y fondo gástricos, con conservación relativa del antro. La biopsia identifica pérdida de glándulas oxínticas e infiltrado inflamatorio crónico. La paciente no consume alcohol en exceso ni recibe medicamentos que expliquen el cuadro.`,
  pregunta: "¿Cuál es la interpretación fisiopatológica más adecuada y qué evaluación adicional es importante?",
  opciones: [
    "Gastritis antral por H. pylori con exceso de ácido gástrico; debe buscarse exclusivamente hipercalcemia.",
    "Gastritis autoinmune del cuerpo y fondo con pérdida de células parietales, disminución del factor intrínseco y riesgo de deficiencia de vitamina B12; debe evaluarse también hierro y riesgo de neoplasia gástrica.",
    "Gastropatía química por reflujo biliar, que explica directamente la positividad de los anticuerpos contra el factor intrínseco.",
    "Enfermedad celíaca confirmada por macrocitosis, sin necesidad de investigar la mucosa gástrica.",
    "Gastritis aguda infecciosa autolimitada, que no requiere reposición de vitamina B12."
  ],
  respuestaCorrecta: 1,
  explicacion: `La distribución corporal y fúndica de la atrofia, la positividad de anticuerpos contra el factor intrínseco y la deficiencia de vitamina B12 apoyan el diagnóstico de gastritis autoinmune con anemia perniciosa. La destrucción de células parietales disminuye el ácido clorhídrico y la producción de factor intrínseco, lo que altera la absorción de vitamina B12. Puede coexistir deficiencia de hierro, incluso antes de que aparezca anemia macrocítica. Debe iniciarse reposición de vitamina B12, considerando la gravedad y las manifestaciones neurológicas. Se recomienda evaluar la extensión de la atrofia mediante biopsias topográficas, investigar otras enfermedades autoinmunes, especialmente tiroideas, y valorar el riesgo de adenocarcinoma gástrico y tumores neuroendocrinos gástricos tipo 1.`,
  perlaENARM: `Gastritis autoinmune: atrofia de cuerpo y fondo, hipoclorhidria, déficit de factor intrínseco, vitamina B12 baja y anemia perniciosa. No olvides las deficiencias de hierro y el riesgo de neoplasia gástrica.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica para gastritis autoinmune y anemia perniciosa.",
    internacional: "AGA Clinical Practice Update on the Diagnosis and Management of Atrophic Gastritis, 2021."
  },
  bibliografia: [
    "Shah SC, et al. AGA Clinical Practice Update on the Diagnosis and Management of Atrophic Gastritis: Expert Review. Gastroenterology. 2021;161:1325-1332.e7. doi:10.1053/j.gastro.2021.06.078."
  ]
},
{
  id: "GASTRO-039",
  especialidad: "Gastroenterología",
  tema: "Gastritis",
  subtema: "Gastritis atrófica, metaplasia intestinal y estratificación del riesgo de cáncer",
  dificultad: "Extrema",
  caso: `Masculino de 67 años, originario de una región con alta incidencia de cáncer gástrico, con antecedente de infección por H. pylori tratada varios años atrás. Consulta por dispepsia leve y no presenta sangrado, pérdida ponderal ni anemia. La endoscopia con imagen mejorada muestra palidez difusa, pérdida de pliegues y áreas de mucosa irregular en antro y cuerpo. Se obtienen biopsias topográficas separadas. La histología confirma gastritis atrófica extensa con metaplasia intestinal en antro y cuerpo, sin displasia ni malignidad. No se ha documentado si H. pylori fue erradicado y el informe inicial no especifica un estadio histológico de riesgo.`,
  pregunta: "¿Cuál es el siguiente enfoque más apropiado?",
  opciones: [
    "Indicar gastrectomía total profiláctica, porque toda metaplasia intestinal progresa inevitablemente a cáncer.",
    "Ignorar el hallazgo porque la ausencia de displasia elimina el riesgo de adenocarcinoma gástrico.",
    "Confirmar el estado de H. pylori y erradicarlo si persiste, revisar la extensión y gravedad histológica, y establecer vigilancia endoscópica individualizada según el riesgo.",
    "Repetir únicamente una serología para H. pylori y omitir la revisión histológica porque la endoscopia ya fue realizada.",
    "Indicar quimioterapia preventiva debido a la presencia de metaplasia intestinal extensa."
  ],
  respuestaCorrecta: 2,
  explicacion: `La atrofia extensa con metaplasia intestinal en antro y cuerpo constituye una condición precancerosa que aumenta el riesgo de adenocarcinoma gástrico, pero no equivale a cáncer ni justifica gastrectomía profiláctica rutinaria. La extensión anatómica y la gravedad histológica deben documentarse para estratificar el riesgo; los sistemas OLGA y OLGIM pueden ayudar cuando se dispone de una evaluación histopatológica apropiada. Debe investigarse infección activa por H. pylori y tratarla si está presente, confirmando la erradicación con pruebas no serológicas. En pacientes con atrofia avanzada puede considerarse vigilancia endoscópica aproximadamente cada tres años, aunque el intervalo debe individualizarse según el riesgo, los antecedentes familiares, la calidad de la endoscopia y las recomendaciones locales. La ausencia de displasia reduce la urgencia de una intervención oncológica, pero no elimina el riesgo futuro.`,
  perlaENARM: `Atrofia extensa y metaplasia intestinal = estratificar riesgo, confirmar erradicación de H. pylori y valorar vigilancia. La metaplasia intestinal es una lesión precancerosa, no un diagnóstico de cáncer.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica que defina un intervalo uniforme de vigilancia para todos los pacientes con gastritis atrófica y metaplasia intestinal.",
    internacional: "AGA Clinical Practice Update on the Diagnosis and Management of Atrophic Gastritis, 2021."
  },
  bibliografia: [
    "Shah SC, et al. AGA Clinical Practice Update on the Diagnosis and Management of Atrophic Gastritis: Expert Review. Gastroenterology. 2021;161:1325-1332.e7.",
    "Chey WD, et al. ACG Clinical Guideline: Treatment of Helicobacter pylori Infection. Am J Gastroenterol. 2024;119:1730-1753."
  ]
},
{
  id: "GASTRO-040",
  especialidad: "Gastroenterología",
  tema: "Gastritis",
  subtema: "Gastritis crónica con pruebas negativas para H. pylori durante uso de IBP",
  dificultad: "Alta",
  caso: `Femenina de 49 años con dispepsia persistente. Una endoscopia muestra eritema y friabilidad leve de la mucosa antral, sin úlceras. La histología informa gastritis crónica activa con escasos microorganismos no identificados. La prueba rápida de ureasa y el antígeno fecal para H. pylori resultan negativos. Sin embargo, la paciente había tomado esomeprazol 40 mg diarios durante seis semanas, incluyendo los días previos a la endoscopia. No ha recibido antibióticos recientemente. No tiene hemorragia, pérdida ponderal ni otros datos de alarma.`,
  pregunta: "¿Cuál es la mejor interpretación de las pruebas y la siguiente conducta?",
  opciones: [
    "Descartar definitivamente H. pylori porque dos pruebas negativas siempre excluyen infección activa.",
    "Diagnosticar gastritis autoinmune sin solicitar pruebas adicionales, ya que la prueba rápida de ureasa fue negativa.",
    "Reconocer que el IBP puede reducir la sensibilidad diagnóstica y considerar repetir una prueba de infección activa tras suspenderlo aproximadamente dos semanas, si es seguro, y evitando antibióticos o bismuto durante al menos cuatro semanas.",
    "Prescribir terapia cuádruple con antibióticos de manera indefinida pese a no tener confirmación de infección.",
    "Solicitar anticuerpos séricos como única prueba para confirmar erradicación de una infección activa."
  ],
  respuestaCorrecta: 2,
  explicacion: `Los IBP pueden disminuir la densidad bacteriana y generar resultados falsamente negativos en pruebas de aliento, antígeno fecal, ureasa rápida y algunas evaluaciones histológicas. Cuando existe sospecha clínica y el resultado se obtuvo bajo supresión ácida, debe considerarse repetir una prueba apropiada de infección activa después de suspender el IBP aproximadamente dos semanas, siempre que sea clínicamente seguro. Los antibióticos y el bismuto deben evitarse durante al menos cuatro semanas antes de la prueba. La serología puede indicar exposición previa, pero no distingue con fiabilidad infección activa de infección pasada ni sirve para confirmar erradicación. Si las pruebas adecuadamente realizadas continúan negativas, deben investigarse otras etiologías de gastritis según el patrón histológico y el contexto clínico.`,
  perlaENARM: `IBP antes de prueba de H. pylori = riesgo de falso negativo. Repite una prueba de infección activa con el periodo de suspensión apropiado; no prescribas antibióticos de forma automática sin sustento diagnóstico.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica para esta situación diagnóstica.",
    internacional: "ACG Clinical Guideline: Treatment of Helicobacter pylori Infection, 2024."
  },
  bibliografia: [
    "Chey WD, et al. ACG Clinical Guideline: Treatment of Helicobacter pylori Infection. Am J Gastroenterol. 2024;119:1730-1753.",
    "Shah SC, et al. AGA Clinical Practice Update on the Diagnosis and Management of Atrophic Gastritis: Expert Review. Gastroenterology. 2021;161:1325-1332.e7."
  ]
},

{
  id: "GASTRO-041",
  especialidad: "Gastroenterología",
  tema: "Hepatitis viral",
  subtema: "Hepatitis A aguda: diagnóstico y tratamiento",
  dificultad: "Fácil",
  caso: `Masculino de 22 años, previamente sano, presenta astenia, anorexia, náuseas, dolor en hipocondrio derecho y coluria de cinco días de evolución. Refiere que varios compañeros de vivienda desarrollaron un cuadro gastrointestinal después de consumir agua de una fuente no tratada. A la exploración presenta ictericia escleral y hepatomegalia dolorosa leve, sin ascitis ni encefalopatía. ALT 1,850 U/L, AST 1,320 U/L, bilirrubina total 6.4 mg/dL, INR 1.1 y glucosa 94 mg/dL. La IgM anti-VHA es positiva. No tiene antecedentes de hepatopatía ni consumo de hepatotóxicos.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Iniciar tenofovir durante 12 semanas para erradicar el virus.",
    "Indicar ribavirina y aislamiento hospitalario durante seis meses.",
    "Proporcionar tratamiento de soporte, hidratación, vigilancia clínica y educación para evitar la transmisión fecal-oral.",
    "Iniciar corticosteroides sistémicos para evitar progresión a cirrosis.",
    "Indicar interferón pegilado porque la infección suele evolucionar a hepatitis crónica."
  ],
  respuestaCorrecta: 2,
  explicacion: `La IgM anti-VHA positiva en un cuadro clínico compatible confirma hepatitis A aguda. La infección se transmite principalmente por vía fecal-oral y no evoluciona a infección crónica. En ausencia de insuficiencia hepática aguda, el tratamiento es de soporte, con hidratación, nutrición adecuada y vigilancia de la función hepática y de la coagulación según la gravedad. Deben evitarse alcohol y medicamentos potencialmente hepatotóxicos innecesarios. La hospitalización está indicada si aparecen deterioro clínico, coagulopatía importante, encefalopatía, incapacidad para mantener hidratación o sospecha de insuficiencia hepática aguda. También se deben reforzar medidas higiénicas y valorar la profilaxis posexposición de contactos susceptibles cuando corresponda.`,
  perlaENARM: `IgM anti-VHA positiva = infección aguda. La hepatitis A no se cronifica y no dispone de tratamiento antiviral específico de uso rutinario.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica que sustituya las recomendaciones actuales de manejo de hepatitis A aguda.",
    internacional: "CDC. Clinical Care of Hepatitis A, actualización 2025; OMS, información técnica sobre hepatitis A."
  },
  bibliografia: [
    "CDC. Clinical Care of Hepatitis A. Actualización 31 de enero de 2025.",
    "Organización Mundial de la Salud. Hepatitis A: ficha informativa."
  ]
},
{
  id: "GASTRO-042",
  especialidad: "Gastroenterología",
  tema: "Hepatitis viral",
  subtema: "Interpretación de serología para hepatitis B",
  dificultad: "Media",
  caso: `Femenina de 31 años, asintomática, solicita valoración porque su pareja fue diagnosticada con infección crónica por virus de hepatitis B. Los resultados son: HBsAg negativo, anti-HBc total negativo, anti-HBs 4 mUI/mL. ALT, AST y bilirrubina son normales. No presenta documentación de vacunación completa ni antecedente conocido de infección. No ha recibido inmunoglobulina contra hepatitis B recientemente.`,
  pregunta: "¿Cuál es la interpretación más apropiada y la conducta preventiva indicada?",
  opciones: [
    "Infección crónica por hepatitis B; iniciar tenofovir inmediatamente.",
    "Infección pasada resuelta; no requiere vacunación ni asesoramiento.",
    "Susceptibilidad a hepatitis B; iniciar o completar vacunación y evaluar la exposición reciente según el tiempo transcurrido.",
    "Inmunidad por vacunación demostrada, porque cualquier concentración detectable de anti-HBs es protectora.",
    "Hepatitis B aguda en periodo de ventana; administrar corticosteroides."
  ],
  respuestaCorrecta: 2,
  explicacion: `La ausencia de HBsAg y anti-HBc total indica que no existe evidencia serológica de infección actual o pasada. El anti-HBs de 4 mUI/mL está por debajo del umbral de 10 mUI/mL utilizado para documentar respuesta protectora después de una serie de vacunación. Sin documentación de vacunación completa, debe considerarse susceptible y ofrecer vacunación. Si la exposición sexual fue reciente, se debe evaluar el tiempo transcurrido, el estado de la fuente y la necesidad de profilaxis posexposición con vacuna y/o inmunoglobulina específica conforme al protocolo aplicable. La serología aislada no sustituye esa valoración urgente cuando existe una exposición significativa reciente.`,
  perlaENARM: `HBsAg negativo + anti-HBc negativo + anti-HBs negativo o bajo = susceptible si no existe vacunación completa documentada. Anti-HBs ≥10 mUI/mL es el correlato serológico de protección tras una serie completa.`,
  gpc: {
    mexico: "Verificar el esquema nacional de vacunación y el protocolo institucional vigente de profilaxis posexposición para hepatitis B.",
    internacional: "CDC. Clinical Testing and Diagnosis for Hepatitis B; recomendaciones de tamizaje de 2023."
  },
  bibliografia: [
    "CDC. Clinical Testing and Diagnosis for Hepatitis B.",
    "CDC. Screening and Testing for Hepatitis B Virus Infection: Recommendations, 2023."
  ]
},
{
  id: "GASTRO-043",
  especialidad: "Gastroenterología",
  tema: "Hepatitis viral",
  subtema: "Hepatitis B aguda y periodo de ventana",
  dificultad: "Alta",
  caso: `Masculino de 27 años consulta por ictericia, astenia intensa, náuseas y dolor en hipocondrio derecho. Refiere una exposición sexual sin protección aproximadamente siete semanas antes. ALT 2,300 U/L, AST 1,700 U/L, bilirrubina total 8.2 mg/dL e INR 1.2. La serología muestra HBsAg negativo, anti-HBc total positivo, IgM anti-HBc positivo y anti-HBs negativo. No presenta encefalopatía ni ascitis. La función renal es normal.`,
  pregunta: "¿Cuál es la interpretación más probable de esta combinación serológica?",
  opciones: [
    "Inmunidad exclusiva por vacunación contra hepatitis B.",
    "Hepatitis B crónica inactiva, confirmada por la ausencia de HBsAg.",
    "Periodo de ventana de una infección aguda por hepatitis B, en el que la IgM anti-HBc constituye un marcador clave.",
    "Infección resuelta con inmunidad completa, sin posibilidad de infección reciente.",
    "Infección por hepatitis D aislada, sin relación con el virus B."
  ],
  respuestaCorrecta: 2,
  explicacion: `Durante el periodo de ventana de hepatitis B, el HBsAg puede haber desaparecido antes de que aparezca el anti-HBs. En ese intervalo, la IgM anti-HBc es un marcador fundamental de infección aguda o reciente. La combinación de exposición reciente, hepatitis aguda y esta serología apoya el diagnóstico. Debe monitorizarse la función sintética hepática, la bilirrubina y el estado neurológico. La mayoría de las infecciones agudas en adultos inmunocompetentes se manejan con soporte, pero la hepatitis grave o la insuficiencia hepática aguda requieren atención especializada y pueden justificar tratamiento antiviral. La IgM anti-HBc también puede aparecer durante exacerbaciones graves de infección crónica, por lo que siempre debe interpretarse en el contexto clínico.`,
  perlaENARM: `Periodo de ventana de hepatitis B: HBsAg negativo, anti-HBs negativo e IgM anti-HBc positivo. No confundas este patrón con inmunidad por vacunación.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica para interpretación de todas las combinaciones serológicas de hepatitis B.",
    internacional: "CDC. Clinical Testing and Diagnosis for Hepatitis B; EASL Clinical Practice Guidelines on HBV Infection, 2025."
  },
  bibliografia: [
    "CDC. Clinical Testing and Diagnosis for Hepatitis B.",
    "EASL Clinical Practice Guidelines on the management of hepatitis B virus infection. J Hepatol. 2025;83:502-583. doi:10.1016/j.jhep.2025.03.018."
  ]
},
{
  id: "GASTRO-044",
  especialidad: "Gastroenterología",
  tema: "Hepatitis viral",
  subtema: "Hepatitis C: anticuerpos positivos y confirmación de infección activa",
  dificultad: "Media",
  caso: `Femenina de 46 años, asintomática, con antecedente de transfusión sanguínea realizada en la década de 1980. En un tamizaje de rutina se detectan anticuerpos anti-VHC positivos. ALT 48 U/L, AST 41 U/L, bilirrubina normal y plaquetas 230,000/µL. No tiene diagnóstico previo de hepatitis C ni tratamiento antiviral. El resultado de ARN del VHC todavía no se ha solicitado.`,
  pregunta: "¿Cuál es el siguiente paso diagnóstico prioritario?",
  opciones: [
    "Diagnosticar hepatitis C crónica exclusivamente por los anticuerpos positivos e iniciar tratamiento sin más pruebas.",
    "Solicitar ARN del VHC mediante una prueba molecular para determinar si existe infección activa.",
    "Solicitar IgM anti-VHC para diferenciar infección aguda de crónica.",
    "Descartar infección porque las transaminasas están casi normales.",
    "Realizar biopsia hepática antes de solicitar cualquier prueba molecular."
  ],
  respuestaCorrecta: 1,
  explicacion: `Los anticuerpos anti-VHC indican exposición al virus, pero no distinguen entre infección activa, infección previamente resuelta y, ocasionalmente, un resultado falso positivo. La prueba de ARN del VHC determina si existe viremia activa y debe realizarse de manera refleja cuando los anticuerpos son positivos, si el sistema de laboratorio lo permite. Las transaminasas normales o discretamente elevadas no excluyen infección activa ni fibrosis significativa. Si el ARN es detectable, se debe evaluar la fibrosis, la función hepática, las posibles interacciones farmacológicas, la función renal y las coinfecciones relevantes, y ofrecer tratamiento antiviral de acción directa salvo contraindicación clínica específica.`,
  perlaENARM: `Anti-VHC positivo no equivale a infección activa. Confirma con ARN del VHC; las transaminasas normales no descartan hepatitis C.`,
  gpc: {
    mexico: "Verificar el protocolo institucional vigente de tamizaje, confirmación molecular y referencia para hepatitis C.",
    internacional: "AASLD/IDSA. HCV Guidance: recomendaciones de prueba, manejo y tratamiento."
  },
  bibliografia: [
    "AASLD/IDSA. HCV Guidance: Recommendations for Testing, Managing, and Treating Hepatitis C.",
    "OMS. Guidelines for the care and treatment of persons diagnosed with chronic hepatitis C virus infection."
  ]
},
{
  id: "GASTRO-045",
  especialidad: "Gastroenterología",
  tema: "Hepatitis viral",
  subtema: "Tratamiento simplificado de hepatitis C crónica",
  dificultad: "Alta",
  caso: `Masculino de 42 años con ARN del VHC detectable, sin tratamiento antiviral previo. La evaluación confirma fibrosis avanzada no cirrótica, sin datos de descompensación, ascitis ni encefalopatía. La bilirrubina, albúmina e INR están conservados y la función renal es adecuada. No existe coinfección por VIH ni evidencia de hepatitis B activa. El paciente desea iniciar tratamiento con la menor complejidad posible y puede acudir a seguimiento ambulatorio. Todavía no se han revisado sus medicamentos concomitantes ni se ha calculado formalmente la puntuación de fibrosis.`,
  pregunta: "¿Cuál es el principio correcto para planificar el tratamiento?",
  opciones: [
    "Posponer cualquier tratamiento hasta que aparezca cirrosis, porque los antivirales no benefician a pacientes sin cirrosis.",
    "Indicar interferón pegilado más ribavirina durante 48 semanas a todos los pacientes, sin importar el genotipo.",
    "Completar la evaluación pretratamiento, incluyendo estadio de fibrosis, interacciones farmacológicas y pruebas relevantes, y seleccionar un esquema pangenotípico de acción directa recomendado para su situación.",
    "Administrar corticosteroides como tratamiento antiviral de primera línea.",
    "Usar únicamente un anticuerpo anti-VHC para monitorizar la respuesta terapéutica."
  ],
  respuestaCorrecta: 2,
  explicacion: `Las recomendaciones AASLD/IDSA favorecen el tratamiento antiviral de acción directa para prácticamente todas las personas con infección activa por VHC, salvo circunstancias clínicas excepcionales. En pacientes elegibles para un algoritmo simplificado pueden utilizarse esquemas pangenotípicos, como glecaprevir/pibrentasvir o sofosbuvir/velpatasvir, seleccionados de acuerdo con cirrosis, función renal, interacciones, tratamientos previos y otras condiciones. Antes de iniciar, debe documentarse la viremia, evaluar fibrosis y función hepática, revisar fármacos concomitantes y buscar coinfecciones, incluida hepatitis B, por el riesgo de reactivación durante el tratamiento. La respuesta virológica sostenida se confirma con ARN del VHC indetectable al menos 12 semanas después de finalizar el tratamiento.`,
  perlaENARM: `La hepatitis C activa es tratable y generalmente curable con antivirales de acción directa. Anti-VHC no sirve para confirmar curación; se utiliza ARN del VHC para documentar respuesta virológica sostenida.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente que sustituya los algoritmos internacionales actuales de tratamiento simplificado; confirmar disponibilidad y protocolo institucional.",
    internacional: "AASLD/IDSA HCV Guidance; recomendaciones de tratamiento simplificado para adultos sin tratamiento previo."
  },
  bibliografia: [
    "AASLD/IDSA. HCV Guidance: Simplified HCV Treatment for Treatment-Naive Adults.",
    "OMS. Guidelines for the care and treatment of persons diagnosed with chronic hepatitis C virus infection."
  ]
},
{
  id: "GASTRO-046",
  especialidad: "Gastroenterología",
  tema: "Hepatitis viral",
  subtema: "Hepatitis D: dependencia del virus B",
  dificultad: "Extrema",
  caso: `Masculino de 38 años con infección crónica por hepatitis B conocida desde hace cinco años. En los últimos tres meses presenta astenia intensa y elevación progresiva de ALT hasta 760 U/L, con AST 610 U/L. La bilirrubina total es de 3.8 mg/dL, el INR de 1.3 y las plaquetas de 118,000/µL. El HBsAg continúa positivo. El ADN del VHB es bajo, pero la inflamación hepática es desproporcionada respecto a la replicación viral detectada. No consume alcohol y niega fármacos nuevos. Se sospecha coinfección o sobreinfección por virus de hepatitis D.`,
  pregunta: "¿Cuál es la prueba más apropiada para investigar esta sospecha?",
  opciones: [
    "Solicitar únicamente anti-HBs, porque un resultado positivo confirma hepatitis D.",
    "Solicitar anti-VHD y, si resulta positivo, confirmar infección activa mediante ARN del VHD.",
    "Solicitar IgM anti-VHA como prueba confirmatoria específica de hepatitis D.",
    "Solicitar anticuerpos anti-VHC y asumir coinfección por virus D si son positivos.",
    "Descartar hepatitis D porque el ADN del VHB es bajo."
  ],
  respuestaCorrecta: 1,
  explicacion: `El virus de la hepatitis D requiere la presencia del HBsAg para completar su ciclo. En una persona con hepatitis B, un aumento desproporcionado de la actividad inflamatoria, progresión rápida de fibrosis o descompensación puede sugerir hepatitis D. La evaluación incluye anticuerpos anti-VHD y confirmación de infección activa mediante ARN del VHD cuando sea positivo y esté disponible. Debe distinguirse una coinfección aguda por VHB/VHD de una sobreinfección por VHD en una persona con VHB crónico, porque la sobreinfección tiene mayor probabilidad de evolucionar a enfermedad crónica grave. La valoración especializada debe considerar el estadio de fibrosis, la función hepática y las opciones terapéuticas disponibles localmente.`,
  perlaENARM: `El VHD depende del HBsAg. En hepatitis B con actividad inflamatoria desproporcionada, busca anti-VHD y confirma replicación mediante ARN del VHD.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica para diagnóstico y tratamiento de hepatitis D.",
    internacional: "EASL Clinical Practice Guidelines on the management of hepatitis B virus infection, 2025; recomendaciones especializadas para hepatitis D."
  },
  bibliografia: [
    "EASL Clinical Practice Guidelines on the management of hepatitis B virus infection. J Hepatol. 2025;83:502-583.",
    "OMS. Hepatitis D: información técnica y recomendaciones de diagnóstico."
  ]
},
{
  id: "GASTRO-047",
  especialidad: "Gastroenterología",
  tema: "Hepatitis viral",
  subtema: "Hepatitis E durante el embarazo",
  dificultad: "Extrema",
  caso: `Femenina de 29 años con embarazo de 31 semanas, que desarrolla ictericia, vómitos, malestar general y dolor en hipocondrio derecho después de una estancia en una región con brote de hepatitis transmitida por agua contaminada. ALT 2,100 U/L, AST 1,700 U/L, bilirrubina total 7.8 mg/dL e INR 1.6. La IgM anti-VHE es positiva. Se encuentra consciente, sin encefalopatía al momento de la valoración. La presión arterial es normal y no presenta proteinuria. La paciente pregunta si puede manejarse ambulatoriamente con hidratación oral.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Dar de alta con tratamiento sintomático, porque la hepatitis E nunca produce enfermedad grave durante el embarazo.",
    "Iniciar ribavirina de forma rutinaria, ya que es el tratamiento de elección durante la gestación.",
    "Hospitalizar para vigilancia materno-fetal y monitorización estrecha de la función hepática y coagulación, con manejo multidisciplinario.",
    "Indicar parto inmediato en todos los casos, independientemente de la condición materna y fetal.",
    "Administrar tenofovir para eliminar el virus de hepatitis E."
  ],
  respuestaCorrecta: 2,
  explicacion: `La hepatitis E puede ser especialmente grave durante el embarazo, en particular en el segundo y tercer trimestres en determinadas regiones y contextos epidemiológicos. La paciente presenta lesión hepática importante y coagulopatía, por lo que requiere hospitalización y vigilancia estrecha, con valoración por hepatología, obstetricia y cuidados críticos según la evolución. Deben monitorizarse INR, glucosa, bilirrubina, función renal y estado neurológico, además del bienestar fetal. No existe un antiviral específico de uso rutinario para la hepatitis E aguda y la ribavirina no debe utilizarse durante el embarazo por su riesgo teratógeno. El momento del parto depende de la condición materno-fetal y no debe decidirse de forma automática únicamente por la positividad de IgM anti-VHE.`,
  perlaENARM: `Hepatitis E en el embarazo, especialmente en el tercer trimestre, puede evolucionar a hepatitis fulminante. La coagulopatía exige hospitalización; evita ribavirina durante la gestación.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica para hepatitis E durante el embarazo.",
    internacional: "OMS. Hepatitis E: recomendaciones clínicas y prevención; guías obstétricas y hepatológicas para insuficiencia hepática aguda."
  },
  bibliografia: [
    "OMS. Hepatitis E. Ficha informativa, actualización 2026.",
    "Literatura especializada sobre hepatitis E y embarazo, insuficiencia hepática aguda y vigilancia materno-fetal."
  ]
},
{
  id: "GASTRO-048",
  especialidad: "Gastroenterología",
  tema: "Hepatitis viral",
  subtema: "Hepatitis B crónica y criterios de tratamiento",
  dificultad: "Extrema",
  caso: `Masculino de 45 años con HBsAg positivo documentado en dos determinaciones separadas por ocho meses. Presenta ALT persistentemente elevada, ADN del VHB de 180,000 UI/mL y elastografía compatible con fibrosis significativa. HBeAg negativo y anti-HBe positivo. La bilirrubina es normal, la albúmina de 4.1 g/dL y el INR de 1.0. No tiene ascitis ni encefalopatía. La función renal está conservada. No consume alcohol en exceso y no se identifican otras causas evidentes de lesión hepática.`,
  pregunta: "¿Cuál es la estrategia más apropiada?",
  opciones: [
    "No tratar, porque HBeAg negativo significa que el virus no se replica.",
    "Indicar exclusivamente vacunación contra hepatitis B para eliminar la infección existente.",
    "Evaluar e iniciar tratamiento antiviral de primera línea, como tenofovir o entecavir según las características del paciente, además de establecer seguimiento de fibrosis y riesgo de carcinoma hepatocelular.",
    "Prescribir corticosteroides para suprimir la respuesta inmunitaria contra el hígado.",
    "Esperar hasta que aparezca ascitis o encefalopatía para considerar tratamiento antiviral."
  ],
  respuestaCorrecta: 2,
  explicacion: `La persistencia de HBsAg durante al menos seis meses indica infección crónica. La combinación de ADN del VHB elevado, ALT persistentemente elevada y fibrosis significativa apoya la indicación de tratamiento antiviral. La negatividad de HBeAg no excluye replicación viral ni enfermedad activa, ya que existen variantes precore y del promotor basal del core. Tenofovir o entecavir son opciones de alta barrera genética a la resistencia, seleccionadas según función renal, salud ósea, tratamientos previos y otras condiciones. El seguimiento debe incluir respuesta virológica y bioquímica, evaluación de fibrosis y vigilancia de carcinoma hepatocelular cuando corresponda. El tratamiento suele suprimir la replicación, pero no garantiza erradicación completa del virus.`,
  perlaENARM: `HBeAg negativo no equivale a hepatitis B inactiva. Decide tratamiento con integración de ADN viral, ALT, fibrosis, comorbilidades y guías vigentes.`,
  gpc: {
    mexico: "Verificar la GPC mexicana vigente y el protocolo institucional de tratamiento de hepatitis B crónica.",
    internacional: "EASL Clinical Practice Guidelines on the management of hepatitis B virus infection, 2025."
  },
  bibliografia: [
    "EASL Clinical Practice Guidelines on the management of hepatitis B virus infection. J Hepatol. 2025;83:502-583.",
    "CDC. Clinical Testing and Diagnosis for Hepatitis B."
  ]
},
{
  id: "GASTRO-049",
  especialidad: "Gastroenterología",
  tema: "Hepatitis viral",
  subtema: "Insuficiencia hepática aguda asociada a hepatitis viral",
  dificultad: "Extrema",
  caso: `Masculino de 32 años, previamente sano, acude por ictericia progresiva, vómitos y confusión de 24 horas de evolución. Presenta ALT 3,400 U/L, AST 2,900 U/L, bilirrubina total 11 mg/dL, INR 2.4, glucosa 58 mg/dL y creatinina 1.8 mg/dL. Está desorientado en tiempo y espacio, sin antecedente conocido de cirrosis. La serología sugiere hepatitis viral aguda. No existe historia confirmada de ingestión de paracetamol. Se encuentra en un hospital general sin programa de trasplante hepático.`,
  pregunta: "¿Cuál es la conducta prioritaria?",
  opciones: [
    "Manejo ambulatorio con controles diarios de transaminasas, porque la elevación de ALT indica buena regeneración.",
    "Administrar únicamente vitamina K y dar de alta cuando mejore el INR.",
    "Ingreso urgente en cuidados intensivos o unidad de alta vigilancia, estabilización de glucosa y funciones orgánicas, evaluación etiológica inmediata y contacto precoz con un centro de trasplante hepático.",
    "Iniciar corticosteroides en todos los casos de hepatitis viral con INR elevado.",
    "Esperar a que aparezca ascitis para establecer el diagnóstico de insuficiencia hepática aguda."
  ],
  respuestaCorrecta: 2,
  explicacion: `La insuficiencia hepática aguda se caracteriza por lesión hepática aguda con coagulopatía —habitualmente INR ≥1.5— y encefalopatía en ausencia de cirrosis preexistente. Es una emergencia con riesgo de edema cerebral, hipoglucemia, lesión renal, infección y deterioro multiorgánico. Se requiere estabilización inmediata, monitorización neurológica y hemodinámica, corrección de hipoglucemia, investigación rápida de la etiología y tratamiento específico cuando exista. Debe contactarse tempranamente un centro de trasplante, sin esperar a que se cumplan criterios tardíos de deterioro. La magnitud de las transaminasas por sí sola no predice el pronóstico; la evolución del INR, la bilirrubina, el lactato, la función renal y el estado neurológico son esenciales.`,
  perlaENARM: `INR ≥1.5 + encefalopatía en lesión hepática aguda sin cirrosis previa = insuficiencia hepática aguda. Contacta precozmente a un centro de trasplante; no esperes al deterioro irreversible.`,
  gpc: {
    mexico: "Seguir protocolo institucional de insuficiencia hepática aguda y referencia urgente a centro especializado; no se verificó una GPC mexicana reciente específica para todos los escenarios virales.",
    internacional: "Recomendaciones internacionales de manejo de insuficiencia hepática aguda y evaluación para trasplante."
  },
  bibliografia: [
    "Literatura especializada de hepatología sobre acute liver failure, evaluación etiológica y criterios de referencia para trasplante.",
    "Harrison. Principles of Internal Medicine. Sección de insuficiencia hepática aguda y hepatitis viral."
  ]
},
{
  id: "GASTRO-050",
  especialidad: "Gastroenterología",
  tema: "Hepatitis viral",
  subtema: "Prevención de transmisión perinatal de hepatitis B",
  dificultad: "Alta",
  caso: `Mujer de 30 años con embarazo de 34 semanas. El tamizaje prenatal muestra HBsAg positivo; el ADN del VHB es de 1,200,000 UI/mL. HBeAg es positivo y la ALT está discretamente elevada, sin datos de cirrosis descompensada. La paciente no ha recibido tratamiento antiviral. El embarazo evoluciona sin otras complicaciones. Solicita información sobre las medidas necesarias para reducir la transmisión al recién nacido.`,
  pregunta: "¿Cuál es la estrategia preventiva más apropiada?",
  opciones: [
    "Esperar a conocer la serología del recién nacido y vacunar solo si desarrolla síntomas.",
    "Indicar cesárea obligatoria y evitar lactancia en todos los casos, sin necesidad de profilaxis neonatal.",
    "Valorar tenofovir durante el tercer trimestre por la elevada carga viral y asegurar vacuna contra hepatitis B más inmunoglobulina específica al recién nacido lo antes posible, idealmente dentro de las primeras 12 horas.",
    "Administrar inmunoglobulina a la madre y omitir la vacuna neonatal.",
    "Iniciar interferón pegilado durante el embarazo y posponer toda intervención neonatal."
  ],
  respuestaCorrecta: 2,
  explicacion: `La carga viral materna superior a 200,000 UI/mL se asocia con mayor riesgo de transmisión perinatal, por lo que debe valorarse tenofovir durante el tercer trimestre conforme a la guía y al protocolo local. Independientemente de la decisión antiviral materna, el recién nacido de una madre HBsAg positiva debe recibir vacuna contra hepatitis B e inmunoglobulina específica en sitios anatómicos distintos, lo antes posible y preferentemente dentro de las primeras 12 horas. Debe completarse el esquema de vacunación y realizarse la evaluación serológica posvacunal en el momento recomendado. La vía del parto se determina por indicaciones obstétricas; la cesárea no sustituye la inmunoprofilaxis neonatal. La lactancia generalmente puede realizarse después de que el recién nacido recibe la profilaxis recomendada.`,
  perlaENARM: `HBsAg materno positivo: vacuna + inmunoglobulina específica al recién nacido dentro de las primeras 12 horas. Con ADN del VHB >200,000 UI/mL, valora tenofovir materno para reducir transmisión.`,
  gpc: {
    mexico: "Verificar el protocolo mexicano vigente de prevención de transmisión perinatal y vacunación neonatal contra hepatitis B.",
    internacional: "EASL Clinical Practice Guidelines on HBV Infection, 2025; CDC, recomendaciones de prevención perinatal de hepatitis B."
  },
  bibliografia: [
    "EASL Clinical Practice Guidelines on the management of hepatitis B virus infection. J Hepatol. 2025;83:502-583.",
    "CDC. Clinical Testing and Diagnosis for Hepatitis B; recomendaciones de prevención perinatal."
  ]
},

{
  id: "GASTRO-051",
  especialidad: "Gastroenterología",
  tema: "Cirrosis hepática",
  subtema: "Diagnóstico clínico y evaluación inicial",
  dificultad: "Fácil",
  caso: `Masculino de 56 años con antecedente de consumo de alcohol durante más de 20 años y obesidad central. Consulta por fatiga y aumento progresivo del perímetro abdominal. A la exploración presenta arañas vasculares, eritema palmar, esplenomegalia y circulación venosa abdominal visible. La biometría hemática muestra plaquetas de 92,000/µL; albúmina 3.0 g/dL, bilirrubina total 2.1 mg/dL e INR 1.4. El ultrasonido informa hígado de contorno nodular, esplenomegalia y ascitis leve. No presenta encefalopatía.`,
  pregunta: "¿Cuál es la interpretación diagnóstica más apropiada?",
  opciones: [
    "Hepatitis aguda aislada, sin evidencia de enfermedad hepática crónica.",
    "Cirrosis hepática probable con hipertensión portal y datos de disfunción sintética.",
    "Esteatosis hepática simple, sin fibrosis avanzada.",
    "Colangitis aguda, aunque no existan fiebre ni dilatación de la vía biliar.",
    "Síndrome nefrótico como explicación única de la ascitis y la hipoalbuminemia."
  ],
  respuestaCorrecta: 1,
  explicacion: `El contorno hepático nodular, la esplenomegalia, la trombocitopenia, la circulación colateral y la ascitis apoyan cirrosis con hipertensión portal. La albúmina disminuida y el INR prolongado sugieren alteración de la función sintética. Debe investigarse la etiología, que puede ser multifactorial: alcohol, enfermedad hepática esteatósica asociada a disfunción metabólica, hepatitis virales y otras causas. La evaluación inicial incluye función hepática y renal, sodio, biometría hemática, ultrasonido Doppler cuando esté indicado y valoración de complicaciones. La biopsia no siempre es necesaria cuando los datos clínicos, de imagen y pruebas no invasivas son concordantes.`,
  perlaENARM: `Cirrosis probable: nodularidad hepática + datos de hipertensión portal + alteración de la función sintética. La trombocitopenia puede ser una manifestación temprana de hipertensión portal.`,
  gpc: {
    mexico: "Verificar GPC y protocolos institucionales vigentes de diagnóstico de cirrosis y enfermedad hepática crónica.",
    internacional: "Baveno VII. Renewing consensus in portal hypertension, 2022."
  },
  bibliografia: [
    "de Franchis R, et al. Baveno VII – Renewing consensus in portal hypertension. J Hepatol. 2022;76:959-974."
  ]
},
{
  id: "GASTRO-052",
  especialidad: "Gastroenterología",
  tema: "Cirrosis hepática",
  subtema: "Clasificación Child-Pugh",
  dificultad: "Media",
  caso: `Femenina de 59 años con cirrosis por hepatitis C previamente tratada. Presenta ascitis leve controlada con diuréticos y no tiene encefalopatía clínica. Los resultados actuales son: bilirrubina total 2.4 mg/dL, albúmina 2.9 g/dL, INR 1.8, ascitis leve y ausencia de encefalopatía. Se encuentra estable y sin hemorragia digestiva. El equipo solicita clasificar la gravedad funcional mediante Child-Pugh.`,
  pregunta: "¿Cuál es la clasificación Child-Pugh más probable?",
  opciones: [
    "Clase A, 5 puntos.",
    "Clase A, 6 puntos.",
    "Clase B, 9 puntos.",
    "Clase C, 12 puntos.",
    "No puede calcularse sin conocer el gradiente de presión venosa hepática."
  ],
  respuestaCorrecta: 2,
  explicacion: `Child-Pugh utiliza cinco variables: bilirrubina, albúmina, INR o tiempo de protrombina, ascitis y encefalopatía. En este caso, la bilirrubina de 2.4 mg/dL corresponde a 2 puntos; albúmina de 2.9 g/dL, 2 puntos; INR de 1.8, 2 puntos; ascitis leve, habitualmente 2 puntos; y ausencia de encefalopatía, 1 punto. El total es 9 puntos, correspondiente a clase B. La puntuación ayuda a estimar pronóstico y riesgo de procedimientos, pero no reemplaza la valoración clínica integral ni MELD-Na o MELD 3.0 cuando se necesita estratificación pronóstica o evaluación para trasplante.`,
  perlaENARM: `Child-Pugh: A = 5–6 puntos; B = 7–9; C = 10–15. Recuerda sumar las cinco variables y especificar cómo se interpreta la ascitis.`,
  gpc: {
    mexico: "Utilizar el protocolo institucional vigente para evaluación pronóstica y referencia para trasplante hepático.",
    internacional: "AASLD. Outpatient Management of Cirrhosis, 2024."
  },
  bibliografia: [
    "AASLD. Back to Basics: Outpatient Management of Cirrhosis. Liver Fellow Network, 2024."
  ]
},
{
  id: "GASTRO-053",
  especialidad: "Gastroenterología",
  tema: "Cirrosis hepática",
  subtema: "Hipertensión portal clínicamente significativa y prevención de descompensación",
  dificultad: "Alta",
  caso: `Masculino de 52 años con cirrosis compensada asociada a alcohol y enfermedad hepática metabólica. Niega ascitis, hemorragia digestiva y encefalopatía previas. La elastografía transitoria muestra rigidez hepática de 27 kPa; las plaquetas son de 108,000/µL. El Doppler muestra esplenomegalia, sin trombosis portal. La presión arterial es de 124/76 mmHg y la frecuencia cardiaca de 78 lpm. No tiene asma, bloqueo auriculoventricular ni insuficiencia renal. La evaluación especializada considera altamente probable hipertensión portal clínicamente significativa.`,
  pregunta: "¿Qué estrategia farmacológica puede reducir el riesgo de primera descompensación en este paciente?",
  opciones: [
    "Iniciar furosemida y espironolactona aunque no exista ascitis.",
    "Considerar carvedilol, si no hay contraindicaciones y tras valorar presión arterial, función renal y tolerancia.",
    "Prescribir lactulosa de manera profiláctica para evitar ascitis y hemorragia variceal.",
    "Indicar rifaximina para prevenir cualquier complicación de la hipertensión portal.",
    "Realizar TIPS de forma preventiva en todo paciente con rigidez hepática mayor de 25 kPa."
  ],
  respuestaCorrecta: 1,
  explicacion: `En cirrosis compensada con hipertensión portal clínicamente significativa, los betabloqueadores no selectivos, particularmente carvedilol en pacientes apropiados, pueden reducir el riesgo de primera descompensación. Baveno VII reconoce la utilidad de herramientas no invasivas para estratificar el riesgo y recomienda tratamiento en pacientes seleccionados con hipertensión portal clínicamente significativa. Antes de iniciarlo se deben revisar presión arterial, frecuencia cardiaca, función renal, sodio y contraindicaciones. La endoscopia no debe utilizarse como sustituto de la valoración integral cuando la decisión terapéutica ya está definida por criterios apropiados. Diuréticos, lactulosa y rifaximina no previenen de forma rutinaria la primera descompensación en pacientes sin las indicaciones específicas correspondientes.`,
  perlaENARM: `En cirrosis compensada con hipertensión portal clínicamente significativa, carvedilol puede prevenir la primera descompensación. No prescribas diuréticos sin ascitis ni lactulosa sin una indicación clínica.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica para prevención farmacológica de primera descompensación por hipertensión portal.",
    internacional: "Baveno VII. Renewing consensus in portal hypertension, 2022."
  },
  bibliografia: [
    "de Franchis R, et al. Baveno VII – Renewing consensus in portal hypertension. J Hepatol. 2022;76:959-974."
  ]
},
{
  id: "GASTRO-054",
  especialidad: "Gastroenterología",
  tema: "Cirrosis hepática",
  subtema: "Ascitis de novo y paracentesis diagnóstica",
  dificultad: "Alta",
  caso: `Femenina de 63 años con cirrosis conocida que presenta distensión abdominal progresiva, edema de miembros inferiores y saciedad temprana. Es su primer episodio de ascitis clínicamente evidente. Se encuentra afebril, con TA 112/70 mmHg y FC 88 lpm. No presenta dolor abdominal intenso ni encefalopatía. El ultrasonido confirma líquido libre abundante. La creatinina es de 1.0 mg/dL, sodio 132 mmol/L y albúmina sérica 2.7 g/dL. No se ha realizado análisis del líquido ascítico.`,
  pregunta: "¿Cuál es el siguiente paso más apropiado?",
  opciones: [
    "Iniciar diuréticos sin analizar el líquido, porque la ascitis en una persona con cirrosis siempre tiene origen portal.",
    "Realizar paracentesis diagnóstica y solicitar recuento celular con diferencial, albúmina y proteínas totales del líquido, además de estudios adicionales según el contexto.",
    "Administrar antibióticos profilácticos a todos los pacientes con ascitis de novo sin obtener muestras.",
    "Indicar restricción absoluta de líquidos y sodio sin evaluar la etiología.",
    "Realizar biopsia hepática urgente antes de analizar el líquido ascítico."
  ],
  respuestaCorrecta: 1,
  explicacion: `La ascitis de novo en un paciente con cirrosis requiere paracentesis diagnóstica para caracterizar el líquido y descartar infección u otras etiologías. Deben solicitarse recuento celular y diferencial, albúmina y proteínas totales, junto con albúmina sérica obtenida de forma cercana para calcular el gradiente de albúmina suero-ascitis (SAAG). Un SAAG ≥1.1 g/dL apoya hipertensión portal. El cultivo debe obtenerse cuando exista sospecha de infección y, en pacientes hospitalizados con cirrosis y ascitis, la paracentesis diagnóstica temprana es especialmente importante. El tratamiento diurético se decide después de valorar la situación hemodinámica, renal, electrolítica y la causa de la ascitis.`,
  perlaENARM: `Ascitis de novo en cirrosis = paracentesis diagnóstica. SAAG ≥1.1 g/dL sugiere hipertensión portal; PMN ≥250 células/mm³ en líquido ascítico es el umbral diagnóstico de peritonitis bacteriana espontánea.`,
  gpc: {
    mexico: "Verificar el protocolo institucional vigente de ascitis y peritonitis bacteriana espontánea en cirrosis.",
    internacional: "AASLD Practice Guidance: Diagnosis, Evaluation and Management of Ascites, Spontaneous Bacterial Peritonitis and Hepatorenal Syndrome, 2021."
  },
  bibliografia: [
    "Biggins SW, et al. Diagnosis, Evaluation, and Management of Ascites, Spontaneous Bacterial Peritonitis and Hepatorenal Syndrome. Hepatology. 2021."
  ]
},
{
  id: "GASTRO-055",
  especialidad: "Gastroenterología",
  tema: "Cirrosis hepática",
  subtema: "Peritonitis bacteriana espontánea",
  dificultad: "Extrema",
  caso: `Masculino de 61 años con cirrosis descompensada y ascitis, hospitalizado por fiebre de 38.2 °C, dolor abdominal difuso leve y deterioro de la función renal. La paracentesis diagnóstica muestra 1,100 leucocitos/mm³, con 68% de neutrófilos. El cultivo del líquido está pendiente. La creatinina aumentó de 0.9 a 1.8 mg/dL en cuatro días. La bilirrubina total es de 4.6 mg/dL. No hay datos de perforación intestinal en la evaluación inicial.`,
  pregunta: "¿Cuál es la conducta inicial más apropiada?",
  opciones: [
    "Esperar el resultado del cultivo antes de iniciar antibióticos.",
    "Iniciar antibióticos empíricos apropiados de inmediato y administrar albúmina intravenosa según el riesgo renal y hepático, con ajuste posterior al cultivo y al contexto epidemiológico.",
    "Administrar únicamente diuréticos para eliminar la ascitis infectada.",
    "Realizar TIPS urgente como tratamiento inicial de la infección.",
    "Indicar corticosteroides a dosis altas para controlar la inflamación peritoneal."
  ],
  respuestaCorrecta: 1,
  explicacion: `El recuento absoluto de PMN es aproximadamente 748 células/mm³ (1,100 × 0.68), superior al umbral de 250 células/mm³, por lo que debe tratarse como peritonitis bacteriana espontánea. No se debe esperar al cultivo para iniciar antibióticos. La selección empírica depende de adquisición comunitaria o nosocomial, gravedad, exposición antibiótica previa y resistencia local. La albúmina intravenosa reduce el riesgo de deterioro renal y mortalidad en pacientes seleccionados, especialmente con creatinina elevada o en ascenso, BUN elevado o bilirrubina importante. Debe suspenderse temporalmente la medicación que empeore la perfusión renal cuando esté indicado y vigilar la respuesta clínica y bioquímica. Si no hay respuesta, se debe reconsiderar resistencia bacteriana o peritonitis secundaria.`,
  perlaENARM: `PBE: PMN ≥250/mm³. Inicia antibióticos sin esperar cultivo; considera albúmina especialmente con lesión renal o disfunción hepática importante.`,
  gpc: {
    mexico: "Verificar protocolo institucional vigente de peritonitis bacteriana espontánea y antibiograma local.",
    internacional: "AASLD Practice Guidance: Ascites, Spontaneous Bacterial Peritonitis and Hepatorenal Syndrome, 2021."
  },
  bibliografia: [
    "Biggins SW, et al. Diagnosis, Evaluation, and Management of Ascites, Spontaneous Bacterial Peritonitis and Hepatorenal Syndrome. Hepatology. 2021."
  ]
},
{
  id: "GASTRO-056",
  especialidad: "Gastroenterología",
  tema: "Cirrosis hepática",
  subtema: "Encefalopatía hepática manifiesta",
  dificultad: "Alta",
  caso: `Masculino de 58 años con cirrosis descompensada, llevado a urgencias por desorientación, inversión del ciclo sueño-vigilia y asterixis. La familia refiere estreñimiento de cuatro días y disminución de la ingesta. La glucosa es de 104 mg/dL, sodio 134 mmol/L y creatinina 1.2 mg/dL. No presenta focalización neurológica. No se documentan hematemesis ni melena, pero aún no se ha descartado infección. No recibe lactulosa ni rifaximina en casa.`,
  pregunta: "¿Cuál es el enfoque inicial más apropiado?",
  opciones: [
    "Solicitar amonio y no tratar hasta que el resultado sea superior a un umbral específico.",
    "Iniciar lactulosa titulada para lograr dos a tres evacuaciones blandas al día, evaluar y corregir desencadenantes, y añadir rifaximina si está indicada por recurrencia o respuesta clínica.",
    "Restringir proteínas de manera permanente para evitar la producción intestinal de amonio.",
    "Administrar benzodiacepinas para corregir la inversión del ciclo sueño-vigilia.",
    "Indicar TIPS como primera intervención para todos los pacientes con encefalopatía manifiesta."
  ],
  respuestaCorrecta: 1,
  explicacion: `La desorientación y la asterixis en un paciente con cirrosis son compatibles con encefalopatía hepática manifiesta. El diagnóstico es clínico y requiere descartar otras causas de alteración del estado mental. Deben buscarse precipitantes como estreñimiento, infección, hemorragia digestiva, deshidratación, alteraciones electrolíticas, insuficiencia renal y fármacos sedantes. La lactulosa se utiliza como tratamiento inicial y se titula para conseguir dos a tres evacuaciones blandas al día, evitando diarrea excesiva y deshidratación. La rifaximina se añade principalmente para prevenir recurrencias, en particular después de episodios repetidos. No se recomienda restricción proteica prolongada, porque empeora la sarcopenia y el estado nutricional.`,
  perlaENARM: `Encefalopatía hepática: lactulosa + búsqueda del precipitante. El amonio no confirma ni excluye por sí solo el diagnóstico y no debe retrasar el tratamiento clínico.`,
  gpc: {
    mexico: "Verificar el protocolo institucional vigente de encefalopatía hepática en cirrosis.",
    internacional: "AASLD. Practice Guidance on Hepatic Encephalopathy; manejo ambulatorio de cirrosis, 2024."
  },
  bibliografia: [
    "AASLD. Back to Basics: Outpatient Management of Cirrhosis. Liver Fellow Network, 2024.",
    "AASLD/EASL. Recomendaciones de diagnóstico y manejo de encefalopatía hepática."
  ]
},
{
  id: "GASTRO-057",
  especialidad: "Gastroenterología",
  tema: "Cirrosis hepática",
  subtema: "Síndrome hepatorrenal-AKI: diagnóstico diferencial",
  dificultad: "Extrema",
  caso: `Femenina de 64 años con cirrosis avanzada y ascitis, hospitalizada por peritonitis bacteriana espontánea ya en tratamiento. En las últimas 48 horas, la creatinina aumenta de 0.8 a 2.1 mg/dL. La presión arterial media es de 68 mmHg. No hay hemorragia activa. La diuresis disminuyó y el sodio urinario es bajo. El sedimento urinario no muestra cilindros granulares significativos ni hematuria importante. La ecografía renal no muestra obstrucción. Recibió diuréticos hasta el ingreso y tiene signos de infección sistémica.`,
  pregunta: "¿Cuál es el enfoque más apropiado para evaluar una posible lesión renal aguda asociada a cirrosis?",
  opciones: [
    "Diagnosticar síndrome hepatorrenal exclusivamente por el sodio urinario bajo e iniciar vasoconstrictores sin reevaluación.",
    "Asumir necrosis tubular aguda y descartar síndrome hepatorrenal porque la creatinina aumentó rápidamente.",
    "Buscar y tratar precipitantes, suspender factores nefrotóxicos y ajustar diuréticos, evaluar volumen y perfusión, descartar causas estructurales y considerar síndrome hepatorrenal-AKI si persiste la lesión sin una explicación alternativa suficiente.",
    "Administrar grandes volúmenes de solución salina a todos los pacientes con cirrosis y lesión renal, sin vigilar congestión.",
    "Iniciar hemodiálisis de inmediato en todo paciente cuya creatinina supere 2 mg/dL."
  ],
  respuestaCorrecta: 2,
  explicacion: `La lesión renal aguda en cirrosis puede deberse a hipovolemia, infección, nefrotoxicidad, lesión tubular, obstrucción o síndrome hepatorrenal-AKI. El sodio urinario bajo no es específico y no establece el diagnóstico. Se requiere identificar y tratar infección, evaluar estado hemodinámico y volumen circulante, suspender nefrotóxicos y ajustar fármacos que puedan agravar la lesión. Deben valorarse sedimento, análisis de orina e imagen renal según el contexto. Si la lesión persiste pese a una reanimación adecuada cuando esté indicada, y no hay evidencia suficiente de otra causa primaria, se considera HRS-AKI. En pacientes que cumplen criterios, el tratamiento incluye albúmina y un vasoconstrictor apropiado, como terlipresina cuando está disponible y es segura, con vigilancia de sobrecarga de volumen e isquemia. La diálisis se reserva para indicaciones clínicas específicas.`,
  perlaENARM: `HRS-AKI es un diagnóstico clínico tras evaluar causas alternativas. El sodio urinario bajo no es suficiente para diagnosticarlo; identifica infección, hipovolemia, nefrotóxicos y lesión tubular.`,
  gpc: {
    mexico: "Verificar protocolo institucional vigente de lesión renal aguda en cirrosis y disponibilidad de terlipresina.",
    internacional: "AASLD Practice Guidance: Ascites, Spontaneous Bacterial Peritonitis and Hepatorenal Syndrome, 2021."
  },
  bibliografia: [
    "Biggins SW, et al. Diagnosis, Evaluation, and Management of Ascites, Spontaneous Bacterial Peritonitis and Hepatorenal Syndrome. Hepatology. 2021."
  ]
},
{
  id: "GASTRO-058",
  especialidad: "Gastroenterología",
  tema: "Cirrosis hepática",
  subtema: "Tamizaje de carcinoma hepatocelular",
  dificultad: "Media",
  caso: `Masculino de 60 años con cirrosis compensada secundaria a hepatitis C, con respuesta virológica sostenida después de tratamiento antiviral. No tiene ascitis, hemorragia variceal ni encefalopatía. El último ultrasonido hepático fue realizado hace ocho meses y no mostró lesiones focales. La alfa-fetoproteína fue normal. El paciente pregunta si, al haberse curado la hepatitis C, puede suspender la vigilancia para carcinoma hepatocelular.`,
  pregunta: "¿Cuál es la recomendación más apropiada?",
  opciones: [
    "Suspender toda vigilancia porque la respuesta virológica sostenida elimina completamente el riesgo de carcinoma hepatocelular.",
    "Realizar tomografía contrastada cada mes, independientemente de los hallazgos ecográficos.",
    "Mantener vigilancia de carcinoma hepatocelular aproximadamente cada seis meses con ultrasonido, con o sin alfa-fetoproteína según la guía y el contexto clínico.",
    "Solicitar únicamente alfa-fetoproteína anual, porque el ultrasonido no tiene utilidad en cirrosis.",
    "Realizar biopsia hepática cada seis meses para detectar transformación maligna."
  ],
  respuestaCorrecta: 2,
  explicacion: `La respuesta virológica sostenida reduce el riesgo de carcinoma hepatocelular, pero no lo elimina en pacientes que ya tienen cirrosis. Se recomienda mantener vigilancia semestral, habitualmente mediante ultrasonido hepático con o sin alfa-fetoproteína según la guía aplicada. Si el ultrasonido es inadecuado por obesidad, nodularidad marcada u otras limitaciones, puede considerarse una estrategia alternativa de imagen según el riesgo y el protocolo especializado. Una lesión sospechosa requiere caracterización diagnóstica con imagen multifásica y evaluación especializada. La alfa-fetoproteína aislada no sustituye adecuadamente el programa de vigilancia.`,
  perlaENARM: `Cirrosis por VHC: la respuesta virológica sostenida no elimina la necesidad de vigilancia de carcinoma hepatocelular. Recuerda el intervalo de seis meses.`,
  gpc: {
    mexico: "Verificar el protocolo institucional mexicano vigente de vigilancia y diagnóstico de carcinoma hepatocelular.",
    internacional: "AASLD. Practice Guidance on prevention, diagnosis and treatment of hepatocellular carcinoma."
  },
  bibliografia: [
    "AASLD. Practice Guidance on prevention, diagnosis, and treatment of hepatocellular carcinoma.",
    "AASLD. Back to Basics: Outpatient Management of Cirrhosis, 2024."
  ]
},
{
  id: "GASTRO-059",
  especialidad: "Gastroenterología",
  tema: "Cirrosis hepática",
  subtema: "Nutrición, sarcopenia y restricción proteica",
  dificultad: "Alta",
  caso: `Masculino de 67 años con cirrosis descompensada, pérdida de 8 kg en seis meses y disminución evidente de masa muscular. Ha reducido la ingesta proteica por recomendación informal de un familiar, quien le explicó que la proteína incrementa el amonio y precipita encefalopatía. Actualmente come dos veces al día y permanece muchas horas en ayuno nocturno. No presenta encefalopatía manifiesta en la valoración actual. La función renal está estable y no tiene una contraindicación específica para la ingesta de proteínas.`,
  pregunta: "¿Cuál es la recomendación nutricional más apropiada?",
  opciones: [
    "Mantener una dieta estrictamente hipoproteica para evitar encefalopatía en todos los pacientes con cirrosis.",
    "Favorecer aporte proteico y energético suficiente, comidas fraccionadas y una colación nocturna, con ajuste individual según estado nutricional y comorbilidades.",
    "Indicar ayuno prolongado para reducir la producción intestinal de amonio.",
    "Restringir simultáneamente proteínas, calorías y sodio de manera extrema para reducir el trabajo hepático.",
    "Utilizar únicamente suplementos de aminoácidos y suspender la alimentación habitual."
  ],
  respuestaCorrecta: 1,
  explicacion: `La malnutrición y la sarcopenia son frecuentes en la cirrosis y se asocian con peores resultados clínicos. La restricción proteica prolongada no se recomienda de rutina, incluso en pacientes con antecedente de encefalopatía, porque puede agravar el catabolismo y disminuir la masa muscular implicada en el metabolismo del amonio. Se favorece una ingesta energética y proteica adecuada, con comidas frecuentes y una colación nocturna para reducir el ayuno prolongado. En general, muchas guías utilizan objetivos proteicos alrededor de 1.2–1.5 g/kg/día, calculados según peso apropiado y situación clínica, con intervención de nutrición especializada. Deben individualizarse las restricciones de sodio si existe ascitis y evitar dietas excesivamente restrictivas que empeoren la ingesta global.`,
  perlaENARM: `Cirrosis + sarcopenia: no restrinjas proteínas de forma rutinaria. Prioriza nutrición suficiente, comidas fraccionadas y reducción del ayuno nocturno.`,
  gpc: {
    mexico: "Verificar protocolo institucional vigente de soporte nutricional en cirrosis.",
    internacional: "AASLD. Malnutrition, Frailty, and Sarcopenia in Patients with Cirrhosis; manejo ambulatorio de cirrosis, 2024."
  },
  bibliografia: [
    "AASLD. Back to Basics: Outpatient Management of Cirrhosis. Liver Fellow Network, 2024.",
    "AASLD. Malnutrition, Frailty, and Sarcopenia in Patients with Cirrhosis."
  ]
},
{
  id: "GASTRO-060",
  especialidad: "Gastroenterología",
  tema: "Cirrosis hepática",
  subtema: "Descompensación y evaluación para trasplante hepático",
  dificultad: "Extrema",
  caso: `Femenina de 55 años con cirrosis por alcohol y enfermedad hepática metabólica, con abstinencia alcohólica documentada durante ocho meses. Ha requerido tres paracentesis de gran volumen en los últimos diez meses pese a tratamiento diurético ajustado. Presenta dos hospitalizaciones por encefalopatía hepática y un episodio de peritonitis bacteriana espontánea. Actualmente no tiene infección activa, pero mantiene ascitis recurrente y albúmina de 2.5 g/dL. La bilirrubina total es de 3.8 mg/dL, INR 1.7, creatinina 1.4 mg/dL y sodio 130 mmol/L. No se identifica contraindicación evidente para trasplante en la evaluación inicial.`,
  pregunta: "¿Cuál es el siguiente paso de manejo más apropiado?",
  opciones: [
    "Mantener exclusivamente tratamiento ambulatorio hasta que aparezca insuficiencia hepática irreversible.",
    "Indicar suspensión de diuréticos y dar de alta sin seguimiento, porque la abstinencia alcohólica ya normalizó el riesgo.",
    "Referir para evaluación formal de trasplante hepático, optimizar el manejo de complicaciones y valorar intervenciones como TIPS en función de la selección clínica.",
    "Indicar hepatectomía parcial para corregir la hipertensión portal.",
    "Excluir trasplante de manera definitiva porque una historia de consumo de alcohol contraindica cualquier evaluación."
  ],
  respuestaCorrecta: 2,
  explicacion: `La ascitis recurrente que requiere paracentesis repetidas, la encefalopatía recurrente y la peritonitis bacteriana espontánea indican cirrosis descompensada avanzada y alto riesgo de mortalidad. Debe considerarse evaluación para trasplante hepático, junto con optimización de tratamiento, prevención secundaria de infecciones y hemorragia, soporte nutricional y manejo multidisciplinario. La abstinencia alcohólica sostenida es un factor favorable, no una razón para excluir evaluación. TIPS puede considerarse en pacientes seleccionados con ascitis recurrente o refractaria, pero el riesgo de encefalopatía, la función cardiaca, la función hepática y otras contraindicaciones deben evaluarse cuidadosamente. La decisión de trasplante depende de valoración integral, adherencia, comorbilidades, apoyo social y criterios del centro especializado.`,
  perlaENARM: `Cirrosis con ascitis recurrente, encefalopatía repetida o PBE: evalúa trasplante hepático. No esperes a que aparezca falla multiorgánica para referir a un centro especializado.`,
  gpc: {
    mexico: "Verificar criterios y ruta institucional vigente de referencia a centro de trasplante hepático.",
    internacional: "Baveno VII; AASLD guidance on ascites, spontaneous bacterial peritonitis and hepatorenal syndrome."
  },
  bibliografia: [
    "de Franchis R, et al. Baveno VII – Renewing consensus in portal hypertension. J Hepatol. 2022;76:959-974.",
    "Biggins SW, et al. Diagnosis, Evaluation, and Management of Ascites, Spontaneous Bacterial Peritonitis and Hepatorenal Syndrome. Hepatology. 2021."
  ]
},
  
];
