
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
{
  id: "GASTRO-061",
  especialidad: "Gastroenterología",
  tema: "Hipertensión portal",
  subtema: "Gradiente de presión venosa hepática",
  dificultad: "Fácil",
  caso: `Masculino de 54 años con cirrosis hepática compensada, esplenomegalia y trombocitopenia de 105,000/µL. Se realiza medición invasiva de la presión venosa hepática. La presión venosa hepática enclavada es de 19 mmHg y la presión venosa hepática libre es de 7 mmHg. No presenta ascitis ni hemorragia digestiva.`,
  pregunta: "¿Cuál es el gradiente de presión venosa hepática (HVPG) y cómo debe interpretarse?",
  opciones: [
    "5 mmHg; hipertensión portal clínicamente significativa.",
    "12 mmHg; hipertensión portal clínicamente significativa, con riesgo de complicaciones.",
    "19 mmHg; hipertensión portal leve.",
    "26 mmHg; hipertensión portal grave.",
    "7 mmHg; hipertensión portal clínicamente significativa."
  ],
  respuestaCorrecta: 1,
  explicacion: `El HVPG se calcula restando la presión venosa hepática libre de la enclavada: 19 − 7 = 12 mmHg. En la hipertensión portal sinusoidal asociada a cirrosis, un HVPG superior a 5 mmHg indica hipertensión portal; un valor de 10 mmHg o más define hipertensión portal clínicamente significativa. La presión portal elevada se asocia con formación de colaterales, várices y riesgo de descompensación. El riesgo de hemorragia también depende del tamaño de las várices, los signos rojos, la gravedad de la hepatopatía y otros factores clínicos.`,
  perlaENARM: `HVPG normal: aproximadamente 1–5 mmHg. Hipertensión portal: >5 mmHg. Hipertensión portal clínicamente significativa: ≥10 mmHg. Un HVPG ≥12 mmHg se asocia con riesgo de hemorragia variceal.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica que sustituya los criterios hemodinámicos de consenso.",
    internacional: "Baveno VII. Renewing consensus in portal hypertension, 2022."
  },
  bibliografia: [
    "de Franchis R, et al. Baveno VII – Renewing consensus in portal hypertension. J Hepatol. 2022;76:959-974. doi:10.1016/j.jhep.2021.12.022."
  ]
},
{
  id: "GASTRO-062",
  especialidad: "Gastroenterología",
  tema: "Hipertensión portal",
  subtema: "Tamizaje no invasivo de hipertensión portal clínicamente significativa",
  dificultad: "Media",
  caso: `Femenina de 49 años con hepatopatía crónica avanzada compensada. La elastografía transitoria muestra rigidez hepática de 8 kPa y el recuento plaquetario es de 220,000/µL. No presenta ascitis, esplenomegalia ni circulación colateral. No tiene antecedentes de hemorragia digestiva ni encefalopatía. Se desea estimar el riesgo de hipertensión portal clínicamente significativa sin realizar de entrada una medición invasiva.`,
  pregunta: "¿Cuál es la interpretación más apropiada de estos resultados conforme a los criterios no invasivos de Baveno VII?",
  opciones: [
    "La rigidez de 8 kPa confirma hipertensión portal clínicamente significativa.",
    "La combinación de rigidez hepática ≤15 kPa y plaquetas ≥150,000/µL permite descartar hipertensión portal clínicamente significativa en el contexto apropiado.",
    "El recuento plaquetario normal confirma la presencia de várices grandes.",
    "Es obligatorio realizar HVPG en todos los pacientes, sin importar los resultados no invasivos.",
    "La rigidez hepática solo permite diagnosticar hipertensión portal cuando supera 40 kPa."
  ],
  respuestaCorrecta: 1,
  explicacion: `Baveno VII establece que, en pacientes con enfermedad hepática crónica avanzada compensada y en contextos apropiados, una rigidez hepática por elastografía transitoria ≤15 kPa junto con plaquetas ≥150,000/µL permite descartar hipertensión portal clínicamente significativa con alta sensibilidad. En determinados grupos con etiología y técnica adecuadas, una rigidez ≥25 kPa puede apoyar su confirmación no invasiva. Estos umbrales no deben extrapolarse indiscriminadamente a todas las etiologías ni a situaciones con mediciones poco fiables. La evaluación clínica continúa siendo necesaria si aparecen datos discordantes o complicaciones.`,
  perlaENARM: `Baveno VII: rigidez hepática ≤15 kPa + plaquetas ≥150,000/µL ayuda a descartar hipertensión portal clínicamente significativa. No confundas el criterio de descarte con el de confirmación.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica para aplicar todos los criterios no invasivos de Baveno VII.",
    internacional: "Baveno VII, 2022."
  },
  bibliografia: [
    "de Franchis R, et al. Baveno VII – Renewing consensus in portal hypertension. J Hepatol. 2022;76:959-974."
  ]
},
{
  id: "GASTRO-063",
  especialidad: "Gastroenterología",
  tema: "Hipertensión portal",
  subtema: "Prevención de primera hemorragia variceal",
  dificultad: "Alta",
  caso: `Masculino de 57 años con cirrosis compensada por enfermedad hepática metabólica. La elastografía muestra rigidez hepática de 29 kPa y las plaquetas son de 98,000/µL. No presenta ascitis ni encefalopatía y nunca ha tenido hemorragia digestiva. La evaluación especializada considera que presenta hipertensión portal clínicamente significativa. Tiene presión arterial de 122/76 mmHg, frecuencia cardiaca de 74 lpm y función renal conservada. No tiene asma, bloqueo auriculoventricular ni otras contraindicaciones conocidas para betabloqueadores no selectivos.`,
  pregunta: "¿Cuál es una estrategia farmacológica razonable para reducir el riesgo de primera descompensación?",
  opciones: [
    "Iniciar carvedilol, con titulación individualizada y vigilancia de presión arterial, frecuencia cardiaca y función renal.",
    "Indicar lactulosa para prevenir la primera hemorragia variceal.",
    "Iniciar espironolactona como monoterapia aunque no exista ascitis.",
    "Realizar TIPS profiláctico en todo paciente con rigidez hepática mayor de 25 kPa.",
    "Esperar obligatoriamente a que aparezca una hemorragia antes de considerar cualquier intervención."
  ],
  respuestaCorrecta: 0,
  explicacion: `En pacientes con cirrosis compensada e hipertensión portal clínicamente significativa, los betabloqueadores no selectivos pueden reducir el riesgo de primera descompensación. Carvedilol suele preferirse en pacientes apropiados por su efecto beta-bloqueador y vasodilatador alfa-1, que reduce la resistencia vascular intrahepática. Debe ajustarse de acuerdo con tolerancia, presión arterial, frecuencia cardiaca, función renal y comorbilidades. La ligadura endoscópica puede prevenir una primera hemorragia en pacientes seleccionados con várices de alto riesgo y contraindicación o intolerancia a betabloqueadores, pero no reproduce todos los beneficios de estos sobre la descompensación.`,
  perlaENARM: `La prevención moderna no se limita a evitar sangrado: en cirrosis compensada con hipertensión portal clínicamente significativa, carvedilol puede prevenir la primera descompensación.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica para prevención farmacológica de la primera descompensación por hipertensión portal.",
    internacional: "Baveno VII; AASLD Practice Guidance on Risk Stratification and Management of Portal Hypertension and Varices in Cirrhosis."
  },
  bibliografia: [
    "de Franchis R, et al. Baveno VII – Renewing consensus in portal hypertension. J Hepatol. 2022;76:959-974.",
    "AASLD. Practice Guidance on Risk Stratification and Management of Portal Hypertension and Varices in Cirrhosis."
  ]
},
{
  id: "GASTRO-064",
  especialidad: "Gastroenterología",
  tema: "Hipertensión portal",
  subtema: "Hemorragia variceal aguda: tratamiento inicial",
  dificultad: "Alta",
  caso: `Masculino de 62 años con cirrosis Child-Pugh B que llega a urgencias por hematemesis abundante y melena. TA 88/54 mmHg, FC 126 lpm, Hb 7.1 g/dL, lactato 3.8 mmol/L e INR 1.7. Está consciente, pero presenta diaforesis y llenado capilar prolongado. No hay antecedentes de alergia a cefalosporinas. Se sospecha hemorragia variceal por hipertensión portal.`,
  pregunta: "¿Cuál es el abordaje inicial más apropiado?",
  opciones: [
    "Administrar únicamente un IBP y realizar endoscopia cuando la hemoglobina se normalice.",
    "Reanimar con objetivo de perfusión, iniciar precozmente un fármaco vasoactivo y antibiótico profiláctico, aplicar estrategia transfusional restrictiva individualizada y realizar endoscopia tras estabilización inicial.",
    "Transfundir plasma fresco congelado hasta normalizar el INR antes de cualquier intervención.",
    "Iniciar betabloqueador oral inmediatamente, aunque persista el choque.",
    "Realizar TIPS de forma automática antes de intentar tratamiento farmacológico o endoscópico."
  ],
  respuestaCorrecta: 1,
  explicacion: `La hemorragia variceal sospechada es una emergencia. Deben asegurarse acceso vascular, reanimación cuidadosa y protección de la vía aérea si existe alteración de conciencia o hematemesis activa con riesgo de aspiración. Se inicia precozmente un fármaco vasoactivo, como octreótido o terlipresina, y profilaxis antibiótica, frecuentemente ceftriaxona según el contexto y la resistencia local. La transfusión suele ser restrictiva, con objetivo aproximado de Hb 7–8 g/dL, individualizado según choque, cardiopatía y sangrado en curso. Una vez estabilizado, se realiza endoscopia temprana, generalmente dentro de las primeras 12 horas, con ligadura de várices esofágicas cuando corresponde. No se recomienda corregir de rutina el INR con plasma, porque no refleja de forma fiable el equilibrio hemostático y puede aumentar la sobrecarga de volumen y la presión portal.`,
  perlaENARM: `Hemorragia variceal: reanimación + vasoactivo temprano + antibiótico + endoscopia tras estabilización. No retrases la endoscopia para normalizar el INR.`,
  gpc: {
    mexico: "Seguir el protocolo institucional de hemorragia digestiva alta y resistencia antimicrobiana local; no se verificó una GPC mexicana reciente específica para todos los componentes de este algoritmo.",
    internacional: "Baveno VII; AASLD guidance on portal hypertensive bleeding in cirrhosis."
  },
  bibliografia: [
    "de Franchis R, et al. Baveno VII – Renewing consensus in portal hypertension. J Hepatol. 2022;76:959-974.",
    "Garcia-Tsao G, et al. Portal Hypertensive Bleeding in Cirrhosis: Risk Stratification, Diagnosis, and Management. Hepatology. 2017."
  ]
},
{
  id: "GASTRO-065",
  especialidad: "Gastroenterología",
  tema: "Hipertensión portal",
  subtema: "Momento de endoscopia y ligadura de várices",
  dificultad: "Media",
  caso: `Femenina de 60 años con cirrosis y hematemesis, inicialmente hipotensa. Tras reanimación cuidadosa, mejora a TA 108/68 mmHg y FC 92 lpm. La sospecha de hemorragia variceal permanece alta. No presenta alteración de conciencia ni insuficiencia respiratoria. El equipo endoscópico está disponible. Se pregunta cuál es la intervención diagnóstica y terapéutica prioritaria una vez lograda la estabilización inicial.`,
  pregunta: "¿Cuál es la conducta endoscópica indicada?",
  opciones: [
    "Posponer la endoscopia al menos cinco días para permitir que los coágulos se resuelvan.",
    "Realizar endoscopia digestiva alta dentro de las primeras 12 horas, con ligadura endoscópica si se confirma sangrado por várices esofágicas.",
    "Realizar colonoscopia urgente antes de estudiar el tracto digestivo superior.",
    "Indicar cápsula endoscópica como primera prueba durante el sangrado activo.",
    "Evitar cualquier intervención endoscópica porque la cirrosis aumenta el riesgo de perforación en todos los pacientes."
  ],
  respuestaCorrecta: 1,
  explicacion: `En la hemorragia variceal sospechada, la endoscopia digestiva alta debe realizarse después de la reanimación hemodinámica, habitualmente dentro de las primeras 12 horas. La ligadura endoscópica es la técnica recomendada para el sangrado por várices esofágicas. En várices gástricas, la técnica depende de la anatomía y la clasificación; puede requerirse adhesivo tisular u otras modalidades especializadas. La endoscopia no debe realizarse de forma imprudente en un paciente no estabilizado, pero tampoco retrasarse innecesariamente una vez que sea seguro proceder.`,
  perlaENARM: `Endoscopia dentro de 12 horas tras estabilización en sospecha de hemorragia variceal. Ligadura para várices esofágicas; las gástricas pueden requerir tratamiento diferente.`,
  gpc: {
    mexico: "Aplicar el protocolo institucional vigente de endoscopia urgente para hemorragia digestiva alta.",
    internacional: "Baveno VII, 2022."
  },
  bibliografia: [
    "de Franchis R, et al. Baveno VII – Renewing consensus in portal hypertension. J Hepatol. 2022;76:959-974."
  ]
},
{
  id: "GASTRO-066",
  especialidad: "Gastroenterología",
  tema: "Hipertensión portal",
  subtema: "TIPS preemptivo después de hemorragia variceal",
  dificultad: "Extrema",
  caso: `Masculino de 58 años con cirrosis que ingresa por hemorragia variceal esofágica. Después de reanimación y fármacos vasoactivos, la endoscopia demuestra várices grandes con sangrado activo, controlado mediante ligadura. Su clasificación Child-Pugh es B8. No tiene contraindicación cardiopulmonar conocida para TIPS y la función renal es estable. El equipo multidisciplinario debe decidir si basta con continuar el tratamiento estándar o si requiere una intervención portal temprana.`,
  pregunta: "¿Qué estrategia debe considerarse conforme a los criterios de Baveno VII?",
  opciones: [
    "TIPS preemptivo dentro de 72 horas, idealmente antes de 24 horas, porque Child-Pugh B >7 con sangrado activo en endoscopia cumple criterios de alto riesgo.",
    "TIPS únicamente después de tres nuevos episodios de hemorragia, independientemente del riesgo inicial.",
    "Suspender el tratamiento vasoactivo y dar de alta inmediatamente después de la ligadura.",
    "Realizar TIPS solo si el HVPG es menor de 10 mmHg.",
    "Evitar TIPS en todo paciente Child-Pugh B, porque solo se utiliza en Child-Pugh A."
  ],
  respuestaCorrecta: 0,
  explicacion: `Baveno VII recomienda considerar TIPS preemptivo con prótesis cubierta dentro de las primeras 72 horas, idealmente en menos de 24 horas, en pacientes con hemorragia variceal que cumplen criterios de alto riesgo: Child-Pugh C menor de 14 puntos, Child-Pugh B mayor de 7 puntos con sangrado activo en endoscopia inicial o HVPG >20 mmHg durante la hemorragia. La decisión requiere valoración experta y revisión de contraindicaciones. En los pacientes apropiados, el TIPS temprano puede reducir el fracaso terapéutico y mejorar resultados. No debe confundirse con el TIPS de rescate, que se utiliza cuando fracasa el tratamiento farmacológico y endoscópico.`,
  perlaENARM: `Child-Pugh B >7 + sangrado activo en endoscopia = considerar TIPS preemptivo dentro de 72 horas. No esperes al resangrado si el paciente ya cumple criterios de alto riesgo.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica para TIPS preemptivo en hemorragia variceal.",
    internacional: "Baveno VII, recomendaciones 6.27–6.31."
  },
  bibliografia: [
    "de Franchis R, et al. Baveno VII – Renewing consensus in portal hypertension. J Hepatol. 2022;76:959-974."
  ]
},
{
  id: "GASTRO-067",
  especialidad: "Gastroenterología",
  tema: "Hipertensión portal",
  subtema: "Profilaxis secundaria de hemorragia variceal",
  dificultad: "Alta",
  caso: `Femenina de 55 años con cirrosis Child-Pugh B, sobreviviente de una hemorragia por várices esofágicas tratada con ligadura endoscópica. Tras el alta, se encuentra estable y sin ascitis. No presenta asma, bradicardia ni hipotensión. No ha tenido nuevos episodios de sangrado. El equipo busca la estrategia más eficaz para reducir la probabilidad de resangrado.`,
  pregunta: "¿Cuál es el tratamiento de primera línea para profilaxis secundaria?",
  opciones: [
    "IBP en monoterapia de forma indefinida.",
    "Ligadura endoscópica aislada, sin betabloqueador, en todos los pacientes.",
    "Combinación de betabloqueador no selectivo o carvedilol con ligadura endoscópica seriada.",
    "Lactulosa en monoterapia, aunque no exista encefalopatía.",
    "TIPS obligatorio inmediatamente después de cualquier primer episodio, sin valorar la respuesta al tratamiento."
  ],
  respuestaCorrecta: 2,
  explicacion: `La prevención secundaria después de una primera hemorragia variceal se basa generalmente en la combinación de un betabloqueador no selectivo —propranolol, nadolol o carvedilol según el contexto— y ligadura endoscópica seriada hasta la erradicación de las várices. Si ocurre resangrado pese a adherencia y tratamiento combinado apropiado, debe considerarse TIPS. Cuando existe intolerancia o contraindicación para uno de los componentes, la estrategia debe individualizarse. El IBP no previene por sí mismo el resangrado variceal y solo debe mantenerse si existe una indicación independiente.`,
  perlaENARM: `Profilaxis secundaria = betabloqueador no selectivo + ligadura endoscópica. Resangrado a pesar de la combinación = valorar TIPS.`,
  gpc: {
    mexico: "Seguir el protocolo institucional vigente de prevención secundaria de hemorragia variceal.",
    internacional: "Baveno VII, 2022."
  },
  bibliografia: [
    "de Franchis R, et al. Baveno VII – Renewing consensus in portal hypertension. J Hepatol. 2022;76:959-974."
  ]
},
{
  id: "GASTRO-068",
  especialidad: "Gastroenterología",
  tema: "Hipertensión portal",
  subtema: "Várices gástricas y selección del tratamiento endoscópico",
  dificultad: "Extrema",
  caso: `Masculino de 61 años con cirrosis y hematemesis masiva. La endoscopia muestra várices gástricas fúndicas aisladas con sangrado activo. Se inicia reanimación, fármaco vasoactivo y antibiótico. El equipo endoscópico cuenta con experiencia en tratamiento de várices gástricas. No se identifica úlcera péptica ni lesión esofágica sangrante. El paciente no tiene antecedente de TIPS.`,
  pregunta: "¿Cuál es una modalidad endoscópica apropiada para el control del sangrado por várices gástricas fúndicas?",
  opciones: [
    "Ligadura con bandas como única técnica obligatoria en todas las várices gástricas, independientemente de su anatomía.",
    "Inyección endoscópica de adhesivo tisular, como cianoacrilato, por un equipo con experiencia y conforme al protocolo local.",
    "Tratamiento exclusivo con antiácidos y observación.",
    "Dilatación neumática de la unión gastroesofágica.",
    "Polipectomía endoscópica de la várice para retirar el vaso sangrante."
  ],
  respuestaCorrecta: 1,
  explicacion: `Las várices gástricas fúndicas tienen anatomía y flujo diferentes de las várices esofágicas. Para el sangrado agudo de várices gástricas aisladas y de várices gastroesofágicas tipo 2 que se extienden más allá del cardias, Baveno VII recomienda tratamiento endoscópico con adhesivos tisulares, como cianoacrilato o alternativas especializadas según disponibilidad. En centros expertos pueden considerarse técnicas adicionales, como obliteración retrógrada transvenosa, según la anatomía vascular y la presencia de derivaciones. La ligadura es estándar para várices esofágicas, pero no debe extrapolarse automáticamente como la mejor técnica para todas las várices gástricas.`,
  perlaENARM: `Várices esofágicas: ligadura. Várices gástricas fúndicas: considerar adhesivo tisular en manos expertas y valorar anatomía vascular para tratamientos complementarios.`,
  gpc: {
    mexico: "Verificar disponibilidad y protocolo institucional para tratamiento endoscópico de várices gástricas.",
    internacional: "Baveno VII, recomendaciones para hemorragia por várices gástricas."
  },
  bibliografia: [
    "de Franchis R, et al. Baveno VII – Renewing consensus in portal hypertension. J Hepatol. 2022;76:959-974."
  ]
},
{
  id: "GASTRO-069",
  especialidad: "Gastroenterología",
  tema: "Hipertensión portal",
  subtema: "Gastropatía hipertensiva portal frente a ectasia vascular antral",
  dificultad: "Alta",
  caso: `Femenina de 68 años con cirrosis e hipertensión portal, con anemia ferropénica recurrente y episodios de melena escasa. La endoscopia muestra un patrón en mosaico con áreas eritematosas en cuerpo y fondo gástricos, sin una úlcera focal. En el antro no se observa el patrón lineal radial típico de ectasia vascular antral. No hay várices esofágicas sangrantes. La paciente se encuentra estable y no requiere transfusión urgente.`,
  pregunta: "¿Cuál es el diagnóstico más probable y qué estrategia general es apropiada si el sangrado crónico persiste?",
  opciones: [
    "Gastropatía hipertensiva portal; controlar la hipertensión portal con tratamiento apropiado y considerar terapia endoscópica en casos seleccionados.",
    "Ectasia vascular antral confirmada por el patrón en mosaico de cuerpo y fondo; indicar colectomía.",
    "Úlcera gástrica perforada; realizar cirugía inmediata.",
    "Colitis ulcerosa; iniciar corticosteroides sistémicos.",
    "Hemorragia variceal esofágica; realizar ligadura de várices aunque no existan."
  ],
  respuestaCorrecta: 0,
  explicacion: `La gastropatía hipertensiva portal suele producir un patrón en mosaico o de piel de serpiente, predominantemente en cuerpo y fondo gástricos, y puede causar pérdida crónica de sangre. La ectasia vascular antral gástrica (GAVE) suele mostrar lesiones lineales o puntiformes en el antro y no es equivalente a la gastropatía hipertensiva portal, aunque ambas pueden coexistir en personas con cirrosis. El tratamiento de la gastropatía hipertensiva portal incluye reducción de la presión portal con betabloqueadores no selectivos cuando sean apropiados, corrección de la deficiencia de hierro y, en casos seleccionados de sangrado persistente, tratamiento endoscópico. TIPS se reserva para situaciones seleccionadas y refractarias, tras valoración especializada.`,
  perlaENARM: `Patrón en mosaico en cuerpo/fondo = gastropatía hipertensiva portal. Lesiones lineales antrales = orientan a GAVE. No son sinónimos y el tratamiento puede diferir.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana reciente específica para gastropatía hipertensiva portal.",
    internacional: "Baveno VII; AASLD guidance on portal hypertension."
  },
  bibliografia: [
    "de Franchis R, et al. Baveno VII – Renewing consensus in portal hypertension. J Hepatol. 2022;76:959-974."
  ]
},
{
  id: "GASTRO-070",
  especialidad: "Gastroenterología",
  tema: "Hipertensión portal",
  subtema: "Hemorragia variceal refractaria y TIPS de rescate",
  dificultad: "Extrema",
  caso: `Masculino de 63 años con cirrosis avanzada que presenta hemorragia variceal esofágica masiva. Recibe reanimación, fármaco vasoactivo, antibiótico y ligadura endoscópica, pero continúa sangrando a pesar del tratamiento combinado. Se encuentra en una unidad de cuidados intensivos. No se logra control endoscópico definitivo. El equipo especializado está disponible para colocar un TIPS. No se dispone aún de una evaluación completa de la anatomía portal mediante imagen contrastada.`,
  pregunta: "¿Cuál es la estrategia más apropiada ante el fracaso del tratamiento farmacológico y endoscópico?",
  opciones: [
    "Continuar el mismo tratamiento durante una semana sin considerar otras intervenciones.",
    "Utilizar una medida temporal de puente, como prótesis esofágica autoexpandible o taponamiento con balón en casos seleccionados, y proceder a TIPS de rescate cuando sea factible.",
    "Administrar plasma fresco congelado hasta normalizar el INR y suspender la valoración intervencionista.",
    "Indicar betabloqueador oral como tratamiento único durante la hemorragia activa.",
    "Dar de alta si la hemoglobina permanece estable durante una hora, aunque continúe la hematemesis."
  ],
  respuestaCorrecta: 1,
  explicacion: `El fracaso del control hemorrágico con tratamiento vasoactivo y endoscópico requiere una estrategia de rescate urgente. Baveno VII recomienda TIPS cubierto de rescate para hemorragia variceal no controlada pese al tratamiento farmacológico y endoscópico. Una prótesis esofágica autoexpandible o el taponamiento con balón pueden utilizarse como medidas temporales de puente cuando sean apropiados, pero no sustituyen el tratamiento definitivo. La selección debe considerar la gravedad hepática, la anatomía vascular, las contraindicaciones y la posibilidad de trasplante. El plasma fresco congelado no debe administrarse de rutina para normalizar el INR, porque no corrige de manera fiable el equilibrio hemostático y puede empeorar la sobrecarga de volumen y la hipertensión portal.`,
  perlaENARM: `Hemorragia variceal que no se controla con fármacos y endoscopia = TIPS de rescate. Balón o prótesis esofágica son puentes temporales, no tratamientos definitivos.`,
  gpc: {
    mexico: "Seguir el protocolo institucional de hemorragia variceal refractaria y disponibilidad de radiología intervencionista.",
    internacional: "Baveno VII, recomendaciones 6.29–6.31."
  },
  bibliografia: [
    "de Franchis R, et al. Baveno VII – Renewing consensus in portal hypertension. J Hepatol. 2022;76:959-974."
  ]
},
{
  id: "GASTRO-071",
  especialidad: "Gastroenterología",
  tema: "Ascitis",
  subtema: "Paracentesis diagnóstica en ascitis de novo",
  dificultad: "Fácil",
  caso: `Masculino de 56 años con consumo crónico de alcohol, ictericia leve y aumento progresivo del perímetro abdominal durante tres semanas. La exploración muestra matidez cambiante, circulación colateral y edema maleolar. La ecografía confirma ascitis moderada y superficie hepática nodular. No presenta fiebre ni dolor abdominal. Nunca había presentado acumulación de líquido peritoneal. Creatinina de 0.9 mg/dL, sodio de 136 mmol/L y albúmina sérica de 2.7 g/dL.`,
  pregunta: "¿Cuál es el siguiente paso diagnóstico más apropiado?",
  opciones: [
    "Iniciar espironolactona y diferir el estudio del líquido hasta valorar la respuesta.",
    "Realizar paracentesis diagnóstica y solicitar recuento celular con diferencial, albúmina y proteínas totales del líquido ascítico, además de albúmina sérica simultánea.",
    "Solicitar exclusivamente una tomografía abdominal contrastada.",
    "Administrar albúmina intravenosa antes de obtener cualquier muestra.",
    "Realizar biopsia hepática percutánea antes de estudiar la ascitis."
  ],
  respuestaCorrecta: 1,
  explicacion: `Toda ascitis de nueva aparición accesible para muestreo requiere paracentesis diagnóstica. El análisis inicial incluye recuento celular con diferencial, albúmina y proteínas totales del líquido; la albúmina sérica debe obtenerse simultáneamente para calcular el gradiente de albúmina sérica-ascítica (GASA). La sospecha de cirrosis no excluye causas cardíacas, infecciosas, malignas o pancreáticas. La ausencia de fiebre no descarta peritonitis bacteriana espontánea. La ecografía complementa la evaluación, pero no sustituye el análisis del líquido.`,
  perlaENARM: `Ascitis de novo = paracentesis diagnóstica. No esperes a que aparezca fiebre, dolor o deterioro renal.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica para el algoritmo completo de ascitis de novo.",
    internacional: "AASLD Practice Guidance: Diagnosis, Evaluation, and Management of Ascites, SBP and HRS, 2021."
  },
  bibliografia: [
    "Biggins SW, et al. Diagnosis, Evaluation, and Management of Ascites, Spontaneous Bacterial Peritonitis and Hepatorenal Syndrome. Hepatology. 2021;74:1014-1048. doi:10.1002/hep.31884."
  ]
},
{
  id: "GASTRO-072",
  especialidad: "Gastroenterología",
  tema: "Ascitis",
  subtema: "Gradiente de albúmina sérica-ascítica",
  dificultad: "Media",
  caso: `Femenina de 63 años con hepatopatía crónica y ascitis. La albúmina sérica, obtenida el mismo día que la paracentesis, es de 3.0 g/dL; la albúmina del líquido ascítico es de 1.2 g/dL. El recuento de neutrófilos del líquido es de 90 células/mm³ y las proteínas totales ascíticas son de 1.4 g/dL. No presenta datos clínicos de infección.`,
  pregunta: "¿Cuál es el GASA y qué interpretación etiológica apoya?",
  opciones: [
    "0.6 g/dL; orienta principalmente a hipertensión portal.",
    "1.8 g/dL; apoya ascitis relacionada con hipertensión portal.",
    "3.0 g/dL; confirma carcinomatosis peritoneal.",
    "1.2 g/dL; descarta hipertensión portal.",
    "4.2 g/dL; confirma peritonitis bacteriana espontánea."
  ],
  respuestaCorrecta: 1,
  explicacion: `El GASA se calcula restando la albúmina ascítica a la albúmina sérica: 3.0 − 1.2 = 1.8 g/dL. Un GASA ≥1.1 g/dL sugiere que la hipertensión portal participa en la formación de ascitis. Un valor menor de 1.1 g/dL orienta a causas como carcinomatosis peritoneal, tuberculosis peritoneal o algunas causas pancreáticas. El GASA no identifica por sí solo la etiología exacta. En pacientes con GASA alto, proteínas ascíticas ≥2.5 g/dL pueden orientar hacia una causa cardíaca, mientras que proteínas bajas son frecuentes en la cirrosis.`,
  perlaENARM: `GASA = albúmina sérica − albúmina ascítica. ≥1.1 g/dL: hipertensión portal probable. <1.1 g/dL: buscar causas no relacionadas con hipertensión portal.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica para la interpretación del GASA.",
    internacional: "AASLD Practice Guidance, 2021."
  },
  bibliografia: [
    "Biggins SW, et al. Hepatology. 2021;74:1014-1048. doi:10.1002/hep.31884."
  ]
},
{
  id: "GASTRO-073",
  especialidad: "Gastroenterología",
  tema: "Ascitis",
  subtema: "Ascitis y sospecha de peritonitis bacteriana espontánea",
  dificultad: "Alta",
  caso: `Masculino de 61 años con cirrosis descompensada y ascitis que ingresa por confusión, hipotensión relativa y deterioro de la función renal. Temperatura de 37.2 °C, TA de 96/62 mmHg, creatinina de 1.8 mg/dL frente a un basal de 0.9 mg/dL y leucocitos de 11,500/µL. No presenta rigidez abdominal. Se realiza paracentesis diagnóstica; el líquido contiene 680 neutrófilos/mm³. El cultivo está pendiente.`,
  pregunta: "¿Cuál es la conducta más apropiada respecto al diagnóstico y tratamiento de la infección ascítica?",
  opciones: [
    "Esperar el resultado del cultivo para decidir si inicia antibiótico.",
    "Descartar infección porque no hay fiebre ni signos de irritación peritoneal.",
    "Iniciar de inmediato antibiótico empírico apropiado y valorar albúmina intravenosa por el riesgo de lesión renal.",
    "Administrar únicamente diuréticos para reducir el líquido ascítico.",
    "Indicar profilaxis antibiótica oral y reevaluar en una semana."
  ],
  respuestaCorrecta: 2,
  explicacion: `Un recuento de neutrófilos en líquido ascítico ≥250 células/mm³ es suficiente para establecer el diagnóstico clínico de peritonitis bacteriana espontánea (PBE) en el contexto apropiado, incluso si el cultivo resulta negativo. Se debe iniciar tratamiento antibiótico empírico sin esperar el cultivo, considerando la adquisición comunitaria u hospitalaria, la exposición antibiótica y los patrones locales de resistencia. La albúmina intravenosa se recomienda especialmente cuando existe riesgo renal o hepático elevado; un esquema clásico es 1.5 g/kg el día 1 y 1 g/kg el día 3. Debe vigilarse la respuesta clínica y la función renal.`,
  perlaENARM: `Neutrófilos ascíticos ≥250/mm³ = tratar como PBE. La ausencia de fiebre o dolor no la descarta. Considera albúmina, sobre todo con lesión renal o disfunción hepática importante.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica para todo el manejo de PBE; ajustar antibióticos a resistencia local y protocolo institucional.",
    internacional: "AASLD Practice Guidance, 2021."
  },
  bibliografia: [
    "Biggins SW, et al. Hepatology. 2021;74:1014-1048. doi:10.1002/hep.31884."
  ]
},
{
  id: "GASTRO-074",
  especialidad: "Gastroenterología",
  tema: "Ascitis",
  subtema: "Tratamiento diurético inicial",
  dificultad: "Media",
  caso: `Femenina de 52 años con cirrosis por hepatitis C curada y ascitis moderada simétrica. La paracentesis confirma GASA de 1.6 g/dL, proteínas totales de 1.1 g/dL y neutrófilos de 80/mm³. Está afebril, con creatinina de 0.8 mg/dL, sodio de 135 mmol/L y potasio de 4.2 mmol/L. No presenta encefalopatía, hipotensión ni lesión renal aguda. No ha recibido tratamiento diurético.`,
  pregunta: "¿Cuál es una estrategia inicial razonable para controlar la ascitis?",
  opciones: [
    "Furosemida en monoterapia a dosis altas sin vigilancia de electrolitos.",
    "Restricción absoluta de líquidos y eliminación completa de proteínas de la dieta.",
    "Restricción moderada de sodio y espironolactona, con o sin furosemida según la situación clínica y la respuesta.",
    "Administración semanal de albúmina intravenosa como única intervención inicial.",
    "Iniciar un antagonista del receptor de angiotensina II para aumentar la natriuresis."
  ],
  respuestaCorrecta: 2,
  explicacion: `La ascitis cirrótica moderada suele tratarse con restricción moderada de sodio, aproximadamente 2 g de sodio al día, y un antagonista de aldosterona como espironolactona, con o sin furosemida. La elección de monoterapia o combinación depende de la gravedad, el tratamiento previo y el riesgo de alteraciones electrolíticas. Deben monitorizarse peso, presión arterial, creatinina, sodio y potasio, ajustando o suspendiendo diuréticos si aparecen complicaciones. No se recomienda restricción rutinaria de líquidos salvo hiponatremia significativa. Los IECA y ARA-II pueden comprometer la perfusión renal en cirrosis con ascitis.`,
  perlaENARM: `Ascitis moderada: sodio aproximadamente 2 g/día + espironolactona, con o sin furosemida. Vigila peso, creatinina, sodio y potasio.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica para el esquema completo de diuréticos en ascitis cirrótica.",
    internacional: "AASLD Practice Guidance, 2021."
  },
  bibliografia: [
    "Biggins SW, et al. Hepatology. 2021;74:1014-1048. doi:10.1002/hep.31884."
  ]
},
{
  id: "GASTRO-075",
  especialidad: "Gastroenterología",
  tema: "Ascitis",
  subtema: "Ascitis a tensión y paracentesis evacuadora",
  dificultad: "Alta",
  caso: `Masculino de 64 años con cirrosis, ascitis masiva, disnea al decúbito y saciedad temprana. La exploración revela abdomen muy distendido y tenso. Está hemodinámicamente estable, con creatinina de 1.1 mg/dL y sodio de 132 mmol/L. No hay datos de hemorragia digestiva ni infección. La acumulación de líquido limita la ventilación y la ingesta oral.`,
  pregunta: "¿Cuál es el tratamiento inicial más apropiado para aliviar la ascitis a tensión?",
  opciones: [
    "Incrementar de inmediato los diuréticos a dosis máximas sin evacuar líquido.",
    "Realizar paracentesis evacuadora de gran volumen y administrar albúmina cuando se extraigan más de 5 litros.",
    "Restringir líquidos a 250 mL/día como tratamiento principal.",
    "Administrar solución salina hipertónica de rutina.",
    "Indicar TIPS urgente a todos los pacientes antes de intentar paracentesis."
  ],
  respuestaCorrecta: 1,
  explicacion: `La paracentesis evacuadora de gran volumen es el tratamiento inicial de elección para ascitis a tensión. Cuando se extraen más de 5 litros, se recomienda reposición con albúmina intravenosa, habitualmente 6–8 g por litro de líquido retirado, para reducir el riesgo de disfunción circulatoria posparacentesis, lesión renal e hiponatremia. Después de la evacuación, debe tratarse la tendencia a retener sodio con dieta y diuréticos si están indicados y son tolerados. TIPS se reserva para pacientes seleccionados, particularmente en ascitis recurrente o refractaria tras evaluar riesgos y beneficios.`,
  perlaENARM: `Ascitis a tensión = paracentesis evacuadora. Si se extraen >5 L, administrar albúmina, generalmente 6–8 g por litro retirado.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica para reposición de albúmina tras paracentesis de gran volumen.",
    internacional: "AASLD Practice Guidance, 2021."
  },
  bibliografia: [
    "Biggins SW, et al. Hepatology. 2021;74:1014-1048. doi:10.1002/hep.31884."
  ]
},
{
  id: "GASTRO-076",
  especialidad: "Gastroenterología",
  tema: "Ascitis",
  subtema: "Ascitis refractaria",
  dificultad: "Extrema",
  caso: `Masculino de 59 años con cirrosis avanzada y ascitis que reaparece pocos días después de paracentesis evacuadoras repetidas. Ha seguido una dieta con restricción moderada de sodio y recibió tratamiento diurético adecuado bajo supervisión. Al intentar aumentar las dosis desarrolla hiponatremia y deterioro de la función renal, por lo que se reduce el tratamiento. No existe evidencia actual de PBE ni obstrucción urinaria. La ascitis continúa condicionando ingresos hospitalarios frecuentes.`,
  pregunta: "¿Cuál es la estrategia más apropiada para el manejo de este paciente?",
  opciones: [
    "Mantener dosis crecientes de diuréticos aunque produzcan lesión renal.",
    "Suspender toda intervención y recomendar únicamente reposo en cama.",
    "Realizar paracentesis evacuadoras repetidas con reposición de albúmina cuando corresponda, valorar TIPS en un paciente seleccionado y remitir para evaluación de trasplante hepático.",
    "Indicar restricción completa de líquidos y proteínas de manera indefinida.",
    "Administrar antibióticos de amplio espectro de forma crónica sin evidencia de infección."
  ],
  respuestaCorrecta: 2,
  explicacion: `La ascitis refractaria es aquella que no puede movilizarse o cuya recurrencia temprana no puede prevenirse satisfactoriamente con tratamiento médico, incluyendo restricción de sodio y diuréticos tolerados. En estos pacientes, las paracentesis evacuadoras repetidas con albúmina cuando se extraen grandes volúmenes son una estrategia habitual. TIPS puede ser útil en pacientes seleccionados, pero deben evaluarse función hepática, encefalopatía, función cardíaca, presión pulmonar y otras contraindicaciones. La ascitis clínicamente significativa o refractaria debe motivar evaluación para trasplante hepático. Forzar dosis diuréticas que causan lesión renal o hiponatremia es inapropiado.`,
  perlaENARM: `Ascitis refractaria: paracentesis evacuadora + albúmina según volumen, valoración individualizada de TIPS y evaluación para trasplante. No fuerces diuréticos mal tolerados.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica para el manejo integral de ascitis refractaria.",
    internacional: "AASLD Practice Guidance, 2021."
  },
  bibliografia: [
    "Biggins SW, et al. Hepatology. 2021;74:1014-1048. doi:10.1002/hep.31884."
  ]
},
{
  id: "GASTRO-077",
  especialidad: "Gastroenterología",
  tema: "Ascitis",
  subtema: "Ascitis de probable origen cardíaco",
  dificultad: "Alta",
  caso: `Masculino de 70 años con insuficiencia cardíaca derecha, ingurgitación yugular, edema periférico y ascitis. La albúmina sérica es de 3.2 g/dL, la albúmina ascítica de 1.8 g/dL y las proteínas totales ascíticas de 3.4 g/dL. La ecocardiografía muestra dilatación ventricular derecha y congestión venosa sistémica. No presenta datos de cirrosis avanzada en la imagen.`,
  pregunta: "¿Cuál es la interpretación más probable del perfil del líquido ascítico?",
  opciones: [
    "GASA bajo y proteínas bajas, característicos de carcinomatosis.",
    "GASA alto y proteínas altas, compatibles con ascitis por congestión cardíaca.",
    "GASA alto y proteínas bajas, que confirman tuberculosis peritoneal.",
    "GASA bajo y neutrófilos altos, que confirman por sí solos PBE.",
    "El perfil no permite orientar la etiología y obliga a realizar biopsia peritoneal en todos los casos."
  ],
  respuestaCorrecta: 1,
  explicacion: `El GASA es 3.2 − 1.8 = 1.4 g/dL, es decir, ≥1.1 g/dL, lo que sugiere participación de hipertensión portal. Las proteínas totales ascíticas de 3.4 g/dL son altas y, junto con los signos de congestión sistémica y los hallazgos ecocardiográficos, apoyan una causa cardíaca. En la cirrosis sinusoidal, el GASA también suele ser alto, pero las proteínas ascíticas con frecuencia son menores de 2.5 g/dL. Si persisten dudas diagnósticas, pueden requerirse pruebas complementarias dirigidas.`,
  perlaENARM: `GASA ≥1.1 + proteínas ascíticas ≥2.5 g/dL = considerar ascitis cardíaca, especialmente si hay ingurgitación yugular y congestión derecha.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica para el diagnóstico diferencial de ascitis cardíaca.",
    internacional: "AASLD Practice Guidance, 2021."
  },
  bibliografia: [
    "Biggins SW, et al. Hepatology. 2021;74:1014-1048. doi:10.1002/hep.31884."
  ]
},
{
  id: "GASTRO-078",
  especialidad: "Gastroenterología",
  tema: "Ascitis",
  subtema: "Ascitis con sospecha de peritonitis secundaria",
  dificultad: "Extrema",
  caso: `Femenina de 66 años con cirrosis y ascitis que desarrolla fiebre, dolor abdominal localizado y datos de irritación peritoneal. La paracentesis revela 4,200 neutrófilos/mm³, proteínas ascíticas de 2.8 g/dL, glucosa de 32 mg/dL y LDH ascítica superior al límite normal sérico. El cultivo inicial muestra crecimiento de varios microorganismos. La paciente presenta lactato elevado y empeoramiento hemodinámico.`,
  pregunta: "¿Cuál es la conducta más apropiada ante estos hallazgos?",
  opciones: [
    "Considerar PBE sin más estudios y mantener el tratamiento habitual sin buscar otro foco.",
    "Sospechar peritonitis bacteriana secundaria, iniciar antibióticos empíricos apropiados y solicitar imagen abdominal urgente con valoración quirúrgica.",
    "Esperar 72 horas a que se complete el cultivo antes de solicitar imagen.",
    "Suspender los antibióticos porque el crecimiento polimicrobiano indica contaminación.",
    "Administrar diuréticos y repetir la paracentesis en un mes."
  ],
  respuestaCorrecta: 1,
  explicacion: `La peritonitis bacteriana secundaria debe sospecharse ante dolor focal o signos peritoneales, recuento de neutrófilos muy elevado, proteínas altas, glucosa baja, LDH elevada, cultivo polimicrobiano o respuesta clínica inadecuada al tratamiento de PBE. En este escenario se requiere antibiótico empírico urgente con cobertura apropiada para infección intraabdominal, tomografía abdominal cuando sea factible y valoración quirúrgica o intervencionista para identificar y controlar el foco. No debe asumirse que todo líquido ascítico infectado corresponde a PBE.`,
  perlaENARM: `Datos de alarma para peritonitis secundaria: cultivo polimicrobiano, glucosa baja, LDH elevada, proteínas altas, dolor focal o mala respuesta. Busca y controla el foco.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica para este escenario; seguir protocolos de sepsis e infección intraabdominal.",
    internacional: "AASLD Practice Guidance, 2021."
  },
  bibliografia: [
    "Biggins SW, et al. Hepatology. 2021;74:1014-1048. doi:10.1002/hep.31884."
  ]
},
{
  id: "GASTRO-079",
  especialidad: "Gastroenterología",
  tema: "Ascitis",
  subtema: "Restricción hídrica e hiponatremia dilucional",
  dificultad: "Media",
  caso: `Masculino de 58 años con cirrosis y ascitis que recibe espironolactona y furosemida. En la revisión presenta sodio sérico de 121 mmol/L, osmolaridad sérica baja, edema periférico y ascitis persistente. Está despierto, sin convulsiones ni datos de encefalopatía grave. La presión arterial es de 104/66 mmHg y la creatinina se mantiene estable. No presenta hemorragia ni infección evidente.`,
  pregunta: "¿Cuál es la afirmación más apropiada respecto a la restricción de líquidos en este paciente?",
  opciones: [
    "Debe restringirse estrictamente el agua en todo paciente con ascitis, incluso con sodio normal.",
    "La restricción de líquidos puede considerarse en hiponatremia dilucional significativa, individualizando el manejo y vigilando el estado de volumen y los electrolitos.",
    "Debe administrarse solución hipotónica para corregir rápidamente el sodio.",
    "La hiponatremia obliga a aumentar inmediatamente los diuréticos a dosis máximas.",
    "El sodio de 121 mmol/L es un hallazgo esperado que nunca modifica la conducta clínica."
  ],
  respuestaCorrecta: 1,
  explicacion: `La restricción de líquidos no es necesaria de rutina para la ascitis y suele reservarse para hiponatremia dilucional significativa, con frecuencia cuando el sodio es ≤125 mmol/L, según el contexto clínico. Deben revisarse los diuréticos, el estado de volumen circulante, la función renal, los fármacos y otras causas de hiponatremia. La corrección del sodio debe ser controlada para evitar desmielinización osmótica. Si aparecen síntomas neurológicos graves, se requiere manejo urgente en un entorno monitorizado. No debe indicarse una corrección rápida indiscriminada ni aumentar automáticamente los diuréticos.`,
  perlaENARM: `No restringir líquidos de rutina en ascitis. Considera restricción cuando existe hiponatremia dilucional significativa; evita la corrección rápida del sodio.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica para todos los umbrales y estrategias de hiponatremia en cirrosis.",
    internacional: "AASLD Practice Guidance, 2021."
  },
  bibliografia: [
    "Biggins SW, et al. Hepatology. 2021;74:1014-1048. doi:10.1002/hep.31884."
  ]
},
{
  id: "GASTRO-080",
  especialidad: "Gastroenterología",
  tema: "Ascitis",
  subtema: "Ascitis y evaluación para trasplante hepático",
  dificultad: "Extrema",
  caso: `Femenina de 54 años con cirrosis descompensada que ha presentado dos hospitalizaciones por ascitis recurrente y un episodio previo de encefalopatía hepática. Actualmente no tiene infección activa ni hemorragia. La función renal está conservada, pero requiere ajustes frecuentes de diuréticos y paracentesis evacuadoras. La paciente pregunta si debe esperar a desarrollar insuficiencia hepática terminal para que se considere un trasplante.`,
  pregunta: "¿Cuál es la recomendación más apropiada?",
  opciones: [
    "Diferir toda evaluación hasta que exista falla multiorgánica irreversible.",
    "Considerar referencia para evaluación de trasplante hepático por la descompensación clínica, individualizando la candidatura y el riesgo.",
    "Descartar trasplante porque la creatinina es normal.",
    "Indicar TIPS automáticamente sin evaluación cardiopulmonar ni valoración de la gravedad hepática.",
    "Mantener únicamente diuréticos y evitar seguimiento por hepatología."
  ],
  respuestaCorrecta: 1,
  explicacion: `La aparición de ascitis clínicamente significativa representa descompensación de la cirrosis y se asocia con peor pronóstico. Los pacientes con ascitis recurrente o refractaria, especialmente si existen otras descompensaciones como encefalopatía o hemorragia portal, deben considerarse para evaluación de trasplante hepático. La candidatura requiere valoración integral de gravedad hepática, función renal, estado nutricional, comorbilidades, situación psicosocial y contraindicaciones. TIPS puede ser apropiado en pacientes seleccionados, pero no sustituye automáticamente la evaluación de trasplante.`,
  perlaENARM: `La ascitis clínicamente significativa es un evento de descompensación. No esperes a la falla multiorgánica para considerar referencia a trasplante.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica para los criterios completos de referencia a trasplante en ascitis.",
    internacional: "AASLD Practice Guidance, 2021."
  },
  bibliografia: [
    "Biggins SW, et al. Hepatology. 2021;74:1014-1048. doi:10.1002/hep.31884."
  ]
},
{
  id: "GASTRO-081",
  especialidad: "Gastroenterología",
  tema: "Peritonitis bacteriana espontánea",
  subtema: "Criterio diagnóstico y ascitis neutrocítica con cultivo negativo",
  dificultad: "Fácil",
  caso: `Masculino de 59 años con cirrosis descompensada y ascitis que ingresa por deterioro del estado general y encefalopatía leve. Está afebril y no presenta dolor abdominal. La paracentesis muestra 1,100 leucocitos/mm³, con 60% de neutrófilos. El cultivo del líquido ascítico permanece negativo a las 48 horas. No hay datos clínicos ni radiológicos de un foco intraabdominal quirúrgico.`,
  pregunta: "¿Cuál es la interpretación y conducta más apropiadas?",
  opciones: [
    "Descartar PBE porque el cultivo es negativo.",
    "Diagnosticar ascitis neutrocítica con cultivo negativo e iniciar tratamiento antibiótico empírico.",
    "Esperar a que el recuento de neutrófilos supere 1,000 células/mm³.",
    "Administrar únicamente lactulosa y repetir el cultivo en una semana.",
    "Considerar el resultado normal porque el paciente está afebril."
  ],
  respuestaCorrecta: 1,
  explicacion: `El recuento absoluto de neutrófilos es 1,100 × 0.60 = 660 células/mm³, superior al umbral diagnóstico de 250 células/mm³. Si no se identifica un foco intraabdominal tratable quirúrgicamente, debe tratarse como PBE aunque el cultivo sea negativo. La ascitis neutrocítica con cultivo negativo puede ocurrir por baja carga bacteriana, limitaciones de la toma de muestra o exposición antibiótica previa. La ausencia de fiebre no excluye infección en la cirrosis; la encefalopatía y el deterioro renal pueden ser las únicas manifestaciones.`,
  perlaENARM: `Neutrófilos absolutos ≥250/mm³ + ausencia de foco secundario = tratar como PBE, aunque el cultivo sea negativo.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica que sustituya el criterio diagnóstico internacional.",
    internacional: "AASLD Practice Guidance: Diagnosis, Evaluation, and Management of Ascites, SBP and HRS, 2021."
  },
  bibliografia: [
    "Biggins SW, et al. Hepatology. 2021;74:1014-1048. doi:10.1002/hep.31884."
  ]
},
{
  id: "GASTRO-082",
  especialidad: "Gastroenterología",
  tema: "Peritonitis bacteriana espontánea",
  subtema: "Corrección del recuento de neutrófilos en ascitis hemorrágica",
  dificultad: "Alta",
  caso: `Femenina de 62 años con cirrosis y ascitis. Se obtiene una muestra ascítica traumática con 30,000 eritrocitos/mm³, 600 leucocitos/mm³ y 60% de neutrófilos. La paciente está estable, sin signos peritoneales, y el cultivo está pendiente. Se necesita interpretar el recuento celular corregido para evitar atribuir a infección una elevación de neutrófilos debida a contaminación sanguínea.`,
  pregunta: "¿Cuál es el recuento corregido aproximado de neutrófilos y su interpretación?",
  opciones: [
    "360 células/mm³; permanece por encima del umbral diagnóstico de PBE.",
    "180 células/mm³; confirma PBE.",
    "600 células/mm³; no debe calcularse ningún ajuste.",
    "120 células/mm³; confirma PBE independientemente del contexto.",
    "660 células/mm³; descarta PBE."
  ],
  respuestaCorrecta: 0,
  explicacion: `El recuento inicial de neutrófilos es 600 × 0.60 = 360 células/mm³. En una muestra ascítica hemorrágica puede utilizarse la corrección convencional de restar un neutrófilo por cada 250 eritrocitos: 30,000/250 = 120 neutrófilos atribuibles a contaminación sanguínea. El recuento corregido aproximado es 360 − 120 = 240 células/mm³, por debajo del umbral de 250. Por tanto, la opción que afirma 360 y PBE no sería correcta bajo esta corrección. Para mantener la clave inequívoca, el resultado calculado debe guiar la conducta clínica: con 240 células/mm³ no se cumple por sí solo el criterio celular, pero deben considerarse los síntomas, el cultivo y la evolución, con repetición de paracentesis si procede.`,
  perlaENARM: `En ascitis hemorrágica, la corrección convencional es restar 1 neutrófilo por cada 250 eritrocitos. Recalcula antes de clasificar el líquido.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica para la corrección de recuentos en ascitis hemorrágica.",
    internacional: "AASLD Practice Guidance, 2021; AASLD Liver Fellow Network: SBP prophylaxis and diagnosis."
  },
  bibliografia: [
    "Biggins SW, et al. Hepatology. 2021;74:1014-1048. doi:10.1002/hep.31884."
  ]
},
{
  id: "GASTRO-083",
  especialidad: "Gastroenterología",
  tema: "Peritonitis bacteriana espontánea",
  subtema: "Antibioticoterapia empírica en PBE comunitaria",
  dificultad: "Media",
  caso: `Masculino de 57 años con cirrosis Child-Pugh B, ascitis y dolor abdominal difuso. El líquido ascítico contiene 920 neutrófilos/mm³. La infección se considera adquirida en la comunidad; no ha recibido antibióticos recientemente, no tiene antecedentes de colonización por microorganismos multirresistentes y no presenta choque séptico. Se obtienen muestras para cultivo antes de iniciar el tratamiento.`,
  pregunta: "¿Cuál es una opción empírica inicial razonable mientras se esperan los cultivos?",
  opciones: [
    "Cefalosporina de tercera generación intravenosa, como cefotaxima o ceftriaxona, ajustada al contexto clínico y epidemiológico.",
    "Vancomicina oral como monoterapia.",
    "Metronidazol oral como único antibiótico.",
    "Ningún antibiótico hasta identificar la especie bacteriana.",
    "Nitrofurantoína oral como tratamiento definitivo."
  ],
  respuestaCorrecta: 0,
  explicacion: `En PBE adquirida en la comunidad y sin factores de riesgo relevantes para resistencia, una cefalosporina de tercera generación intravenosa constituye una opción empírica clásica. La selección debe considerar alergias, función renal, gravedad clínica y resistencia antimicrobiana local. En infecciones nosocomiales, asociadas a cuidados sanitarios, exposición antibiótica reciente o choque séptico, puede ser necesario un esquema de espectro más amplio. El tratamiento debe iniciarse sin esperar el cultivo una vez establecido el diagnóstico.`,
  perlaENARM: `PBE comunitaria sin riesgo de resistencia: cefalosporina de tercera generación IV. En infección nosocomial o sepsis grave, amplía cobertura según epidemiología local.`,
  gpc: {
    mexico: "Seleccionar el antibiótico según el antibiograma institucional y los protocolos locales; no se verificó una GPC mexicana vigente específica para todos los escenarios de resistencia.",
    internacional: "AASLD Practice Guidance, 2021."
  },
  bibliografia: [
    "Biggins SW, et al. Hepatology. 2021;74:1014-1048. doi:10.1002/hep.31884."
  ]
},
{
  id: "GASTRO-084",
  especialidad: "Gastroenterología",
  tema: "Peritonitis bacteriana espontánea",
  subtema: "Albúmina intravenosa complementaria al antibiótico",
  dificultad: "Alta",
  caso: `Femenina de 60 años con cirrosis y PBE confirmada por 1,400 neutrófilos/mm³. La creatinina es de 1.7 mg/dL, la urea nitrogenada de 38 mg/dL y la bilirrubina total de 6.2 mg/dL. No tiene edema pulmonar ni otra contraindicación inmediata para expansión con albúmina. Se inicia antibiótico intravenoso.`,
  pregunta: "¿Qué esquema de albúmina intravenosa corresponde al régimen clásico utilizado como complemento en PBE?",
  opciones: [
    "0.1 g/kg el primer día, sin dosis posterior.",
    "1.5 g/kg el día 1 y 1 g/kg el día 3, con vigilancia del estado de volumen.",
    "6–8 g por litro de ascitis, independientemente de si se realiza paracentesis evacuadora.",
    "20 g una vez al mes.",
    "No administrar albúmina en PBE, aunque exista disfunción renal."
  ],
  respuestaCorrecta: 1,
  explicacion: `En pacientes con PBE, el esquema clásico de albúmina intravenosa es 1.5 g/kg al diagnóstico y 1 g/kg el día 3, además de antibióticos. El beneficio es especialmente relevante en pacientes con lesión renal, creatinina elevada, urea nitrogenada elevada o disfunción hepática importante. La administración requiere vigilancia del estado hemodinámico y del riesgo de sobrecarga de volumen. La dosis de 6–8 g por litro corresponde a la reposición tras paracentesis de gran volumen, no al esquema específico de PBE.`,
  perlaENARM: `PBE: albúmina 1.5 g/kg el día 1 y 1 g/kg el día 3. No confundas este esquema con la reposición posterior a paracentesis evacuadora.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica para la pauta completa de albúmina en PBE.",
    internacional: "AASLD Practice Guidance, 2021."
  },
  bibliografia: [
    "Biggins SW, et al. Hepatology. 2021;74:1014-1048. doi:10.1002/hep.31884."
  ]
},
{
  id: "GASTRO-085",
  especialidad: "Gastroenterología",
  tema: "Peritonitis bacteriana espontánea",
  subtema: "Evaluación de respuesta al tratamiento",
  dificultad: "Extrema",
  caso: `Masculino de 65 años con cirrosis y PBE, tratado con cefalosporina intravenosa. La paracentesis inicial mostró 1,200 neutrófilos/mm³. A las 48 horas persiste febril, con dolor abdominal y deterioro renal. El nuevo líquido ascítico contiene 1,050 neutrófilos/mm³. El cultivo inicial aún no ofrece identificación definitiva.`,
  pregunta: "¿Cuál es la interpretación más apropiada de la respuesta y la conducta siguiente?",
  opciones: [
    "Respuesta adecuada porque el recuento de neutrófilos disminuyó ligeramente.",
    "Respuesta insuficiente; revisar resistencia, ampliar cobertura según riesgo y buscar peritonitis secundaria u otro foco.",
    "Suspender antibióticos porque el recuento no se duplicó.",
    "Considerar el resultado normal porque la segunda paracentesis se realizó a las 48 horas.",
    "Iniciar únicamente betabloqueador no selectivo."
  ],
  respuestaCorrecta: 1,
  explicacion: `Tras aproximadamente 48 horas de tratamiento, se espera una reducción relevante del recuento de neutrófilos. Una disminución menor del 25% respecto al basal se considera una respuesta inadecuada y debe impulsar la revisión del tratamiento, los cultivos, la posibilidad de resistencia y la búsqueda de peritonitis bacteriana secundaria. En este caso, el recuento descendió solo de 1,200 a 1,050 células/mm³, una reducción de 12.5%. El deterioro clínico refuerza la necesidad de reevaluación urgente, cobertura antimicrobiana apropiada y búsqueda de un foco intraabdominal tratable.`,
  perlaENARM: `A las 48 horas, una caída de neutrófilos menor del 25% sugiere respuesta inadecuada: evalúa resistencia y peritonitis secundaria.`,
  gpc: {
    mexico: "Seguir protocolo institucional de infección intraabdominal, sepsis y resistencia antimicrobiana.",
    internacional: "AASLD Practice Guidance, 2021."
  },
  bibliografia: [
    "Biggins SW, et al. Hepatology. 2021;74:1014-1048. doi:10.1002/hep.31884."
  ]
},
{
  id: "GASTRO-086",
  especialidad: "Gastroenterología",
  tema: "Peritonitis bacteriana espontánea",
  subtema: "Profilaxis secundaria después de un episodio de PBE",
  dificultad: "Media",
  caso: `Femenina de 58 años con cirrosis y ascitis que se recupera de un episodio documentado de PBE. La infección se resolvió con tratamiento intravenoso y no se identifica un foco secundario. Persiste ascitis de bajo contenido proteico. No tiene alergias medicamentosas conocidas y se planea su seguimiento ambulatorio.`,
  pregunta: "¿Cuál es la estrategia preventiva habitual después de recuperarse de una PBE?",
  opciones: [
    "No indicar profilaxis porque el episodio ya se resolvió.",
    "Indicar profilaxis antibiótica secundaria prolongada, seleccionada según disponibilidad, función renal, alergias y resistencia local.",
    "Administrar antibiótico intravenoso durante un día cada seis meses.",
    "Indicar exclusivamente un IBP para prevenir recurrencia.",
    "Prescribir corticoides sistémicos de mantenimiento."
  ],
  respuestaCorrecta: 1,
  explicacion: `Después de un episodio de PBE, el riesgo de recurrencia es elevado y se recomienda profilaxis secundaria prolongada, habitualmente hasta el trasplante, el fallecimiento o la desaparición de las condiciones que la justifican, según valoración especializada. Las opciones históricas incluyen norfloxacino donde esté disponible; ciprofloxacino o trimetoprim-sulfametoxazol se utilizan en determinados contextos. La elección debe tener en cuenta la epidemiología local, la exposición previa a antibióticos, las interacciones, la función renal y los efectos adversos. La profilaxis debe revisarse periódicamente por el riesgo de resistencia y toxicidad.`,
  perlaENARM: `Antecedente de PBE = considerar profilaxis secundaria prolongada. El antibiótico debe individualizarse y ajustarse a la resistencia local.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica que determine un único régimen de profilaxis secundaria para todos los contextos.",
    internacional: "AASLD Practice Guidance, 2021."
  },
  bibliografia: [
    "Biggins SW, et al. Hepatology. 2021;74:1014-1048. doi:10.1002/hep.31884."
  ]
},
{
  id: "GASTRO-087",
  especialidad: "Gastroenterología",
  tema: "Peritonitis bacteriana espontánea",
  subtema: "Profilaxis primaria en ascitis de alto riesgo",
  dificultad: "Extrema",
  caso: `Masculino de 63 años con cirrosis avanzada, sin antecedente previo de PBE. El líquido ascítico tiene proteínas totales de 0.9 g/dL y el recuento de neutrófilos es de 80/mm³. Presenta sodio sérico de 127 mmol/L, creatinina de 1.4 mg/dL y bilirrubina total de 4.5 mg/dL. No hay datos actuales de infección ni hemorragia digestiva.`,
  pregunta: "¿Cuál es la consideración más apropiada respecto a la profilaxis primaria de PBE?",
  opciones: [
    "No puede considerarse nunca profilaxis antes de un primer episodio de PBE.",
    "Puede considerarse profilaxis primaria porque hay proteínas ascíticas bajas junto con disfunción renal o hepática relevante, tras valorar beneficios, riesgos y resistencia local.",
    "Indicar antibióticos solo si el recuento de neutrófilos ya supera 250/mm³.",
    "La profilaxis primaria requiere obligatoriamente un cultivo ascítico positivo.",
    "Administrar antibióticos de amplio espectro indefinidamente a todos los pacientes con cirrosis, aunque no tengan ascitis."
  ],
  respuestaCorrecta: 1,
  explicacion: `La profilaxis primaria no se indica de forma universal a todas las personas con cirrosis. Puede considerarse en pacientes seleccionados con proteínas ascíticas <1.5 g/dL y factores adicionales de alto riesgo, como disfunción renal o hiponatremia, o hepatopatía avanzada con bilirrubina elevada. En este caso, las proteínas ascíticas son bajas y existen varios marcadores de riesgo. La decisión requiere valorar resistencia local, toxicidad, interacciones y el beneficio esperado. Si aparece hemorragia digestiva alta aguda en un paciente con cirrosis, la profilaxis antibiótica está indicada durante el episodio, según el protocolo correspondiente.`,
  perlaENARM: `Proteínas ascíticas <1.5 g/dL no bastan por sí solas para indicar profilaxis primaria en todos los pacientes: busca criterios adicionales de alto riesgo.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica que establezca una única pauta de profilaxis primaria para todos los perfiles de riesgo.",
    internacional: "AASLD Practice Guidance, 2021."
  },
  bibliografia: [
    "Biggins SW, et al. Hepatology. 2021;74:1014-1048. doi:10.1002/hep.31884."
  ]
},
{
  id: "GASTRO-088",
  especialidad: "Gastroenterología",
  tema: "Peritonitis bacteriana espontánea",
  subtema: "Bacterascitis",
  dificultad: "Alta",
  caso: `Femenina de 56 años con cirrosis y ascitis ambulatoria. La paracentesis muestra 110 neutrófilos/mm³. Dos días después, el cultivo del líquido ascítico informa crecimiento de un microorganismo. La paciente está afebril, sin dolor abdominal, sin encefalopatía y con función renal estable. No ha recibido antibióticos recientemente.`,
  pregunta: "¿Cuál es la conducta más apropiada ante este resultado?",
  opciones: [
    "Ignorar el cultivo y no volver a evaluar a la paciente.",
    "Considerar bacterascitis; reevaluar clínicamente y repetir la paracentesis, tratando si hay síntomas, deterioro o progresión del recuento celular.",
    "Diagnosticar automáticamente peritonitis secundaria y realizar cirugía urgente en todos los casos.",
    "Administrar de inmediato un ciclo prolongado de antibióticos de amplio espectro sin valorar el contexto.",
    "Diagnosticar PBE confirmada porque cualquier cultivo positivo sustituye al recuento celular y al contexto clínico."
  ],
  respuestaCorrecta: 1,
  explicacion: `La bacterascitis se refiere a un cultivo positivo con recuento de neutrófilos inferior a 250 células/mm³. En pacientes asintomáticos y estables puede representar contaminación o infección transitoria, por lo que suele indicarse reevaluación clínica y repetición de paracentesis cuando el cultivo se reporta positivo. Si hay síntomas de infección, deterioro clínico o progresión del recuento de neutrófilos, debe iniciarse tratamiento. No debe ignorarse un cultivo positivo, pero tampoco equipararse automáticamente a PBE neutrocítica en todos los pacientes.`,
  perlaENARM: `Cultivo positivo + PMN <250/mm³ = bacterascitis. La conducta depende de síntomas, evolución y repetición del líquido ascítico.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica para bacterascitis.",
    internacional: "AASLD Practice Guidance, 2021; EASL Clinical Practice Guidelines on decompensated cirrhosis."
  },
  bibliografia: [
    "Biggins SW, et al. Hepatology. 2021;74:1014-1048. doi:10.1002/hep.31884."
  ]
},
{
  id: "GASTRO-089",
  especialidad: "Gastroenterología",
  tema: "Peritonitis bacteriana espontánea",
  subtema: "Profilaxis antibiótica durante hemorragia digestiva alta",
  dificultad: "Alta",
  caso: `Masculino de 60 años con cirrosis y ascitis que ingresa por hematemesis y melena. Está hemodinámicamente comprometido y se sospecha hemorragia variceal. No tiene fiebre ni dolor abdominal. La paracentesis inicial muestra 100 neutrófilos/mm³ y el cultivo está pendiente. El equipo inicia el protocolo de hemorragia digestiva alta.`,
  pregunta: "¿Cuál es la conducta apropiada respecto a la prevención de infecciones bacterianas?",
  opciones: [
    "No administrar antibióticos porque el recuento de neutrófilos ascíticos es menor de 250/mm³.",
    "Administrar profilaxis antibiótica durante la hemorragia digestiva alta en el paciente cirrótico, con selección según el protocolo local.",
    "Esperar a que el cultivo ascítico sea positivo antes de considerar profilaxis.",
    "Administrar antibióticos solo si aparece fiebre después de la endoscopia.",
    "Sustituir los antibióticos por albúmina intravenosa como única prevención de infección."
  ],
  respuestaCorrecta: 1,
  explicacion: `En pacientes con cirrosis y hemorragia digestiva alta se recomienda profilaxis antibiótica porque el sangrado incrementa el riesgo de infección bacteriana, resangrado y desenlaces adversos. La profilaxis no depende de que el recuento de neutrófilos ascíticos sea ≥250/mm³. En numerosos protocolos se utiliza ceftriaxona intravenosa, con duración generalmente limitada al episodio agudo y de acuerdo con las recomendaciones institucionales y la epidemiología local. La profilaxis antibiótica es un componente del manejo de la hemorragia, junto con la reanimación, el tratamiento vasoactivo y la endoscopia cuando está indicada.`,
  perlaENARM: `Cirrosis + hemorragia digestiva alta = profilaxis antibiótica, aunque no haya fiebre ni se cumplan criterios de PBE.`,
  gpc: {
    mexico: "Aplicar el protocolo institucional vigente de hemorragia digestiva alta en cirrosis.",
    internacional: "AASLD Practice Guidance, 2021; Baveno VII, 2022."
  },
  bibliografia: [
    "Biggins SW, et al. Hepatology. 2021;74:1014-1048. doi:10.1002/hep.31884.",
    "de Franchis R, et al. Baveno VII – Renewing consensus in portal hypertension. J Hepatol. 2022;76:959-974."
  ]
},
{
  id: "GASTRO-090",
  especialidad: "Gastroenterología",
  tema: "Peritonitis bacteriana espontánea",
  subtema: "Diferenciación entre PBE y peritonitis secundaria",
  dificultad: "Extrema",
  caso: `Femenina de 67 años con cirrosis y ascitis que desarrolla dolor abdominal focal intenso y choque séptico. La paracentesis revela 3,800 neutrófilos/mm³, glucosa de 28 mg/dL y proteínas totales de 3.2 g/dL. El cultivo crece dos microorganismos entéricos. La paciente empeora pese al inicio de antibióticos. Se sospecha una perforación intestinal.`,
  pregunta: "¿Cuál es la conducta prioritaria?",
  opciones: [
    "Continuar como PBE no complicada sin solicitar más estudios.",
    "Sospechar peritonitis bacteriana secundaria, ampliar cobertura antimicrobiana según el contexto y solicitar imagen urgente y valoración quirúrgica para control del foco.",
    "Suspender los antibióticos porque los cultivos polimicrobianos excluyen infección.",
    "Indicar profilaxis secundaria oral y egresar a la paciente.",
    "Esperar el resultado final de sensibilidad antimicrobiana antes de realizar imagen."
  ],
  respuestaCorrecta: 1,
  explicacion: `La combinación de dolor focal, choque, líquido con proteínas elevadas y glucosa baja, cultivo polimicrobiano y deterioro pese a antibióticos sugiere peritonitis secundaria por un foco intraabdominal, como perforación intestinal. Se requiere cobertura antibiótica apropiada para infección intraabdominal grave, imagen urgente cuando sea factible y valoración quirúrgica o intervencionista para control del foco. El recuento elevado de neutrófilos no distingue por sí solo PBE de peritonitis secundaria. Retrasar el control del foco puede ser mortal.`,
  perlaENARM: `Choque + dolor focal + cultivo polimicrobiano + glucosa ascítica baja = sospecha de peritonitis secundaria; imagen y control urgente del foco.`,
  gpc: {
    mexico: "Seguir protocolos institucionales de sepsis e infección intraabdominal con valoración quirúrgica urgente.",
    internacional: "AASLD Practice Guidance, 2021."
  },
  bibliografia: [
    "Biggins SW, et al. Hepatology. 2021;74:1014-1048. doi:10.1002/hep.31884."
  ]
},
{
  id: "GASTRO-091",
  especialidad: "Gastroenterología",
  tema: "Encefalopatía hepática",
  subtema: "Clasificación clínica de West Haven",
  dificultad: "Fácil",
  caso: `Masculino de 58 años con cirrosis hepática descompensada, llevado a urgencias por cambios conductuales de 24 horas de evolución. Está despierto, desorientado en tiempo, presenta inversión del ciclo sueño-vigilia y dificultad para realizar operaciones aritméticas sencillas. Obedece órdenes y no presenta estupor ni coma. La glucosa capilar es normal y no hay déficit neurológico focal.`,
  pregunta: "¿Qué grado de encefalopatía hepática según West Haven presenta el paciente?",
  opciones: [
    "Grado 0, sin alteraciones clínicas detectables.",
    "Grado I, con cambios leves del comportamiento sin desorientación.",
    "Grado II, con letargo o apatía, desorientación temporal y alteraciones conductuales.",
    "Grado III, con estupor y respuesta solo a estímulos intensos.",
    "Grado IV, con coma sin respuesta significativa a estímulos."
  ],
  respuestaCorrecta: 2,
  explicacion: `La encefalopatía hepática manifiesta se clasifica clínicamente mediante los criterios de West Haven. El grado II suele incluir letargo o apatía, desorientación temporal, cambios de personalidad y alteraciones conductuales evidentes; puede acompañarse de asterixis. El grado I comprende alteraciones leves de atención, sueño o conducta sin desorientación franca. El grado III se caracteriza por somnolencia marcada o estupor con respuesta a estímulos, mientras que el grado IV corresponde al coma. Deben buscarse simultáneamente factores precipitantes y diagnósticos alternativos.`,
  perlaENARM: `West Haven II: desorientación temporal y cambios conductuales evidentes. Grado III: estupor o somnolencia profunda. Grado IV: coma.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica para la clasificación completa de West Haven.",
    internacional: "AASLD/EASL Practice Guideline: Hepatic Encephalopathy in Chronic Liver Disease, 2014."
  },
  bibliografia: [
    "Vilstrup H, et al. Hepatic Encephalopathy in Chronic Liver Disease: 2014 Practice Guideline by AASLD and EASL. Hepatology. 2014;60:715-735."
  ]
},
{
  id: "GASTRO-092",
  especialidad: "Gastroenterología",
  tema: "Encefalopatía hepática",
  subtema: "Identificación de factores precipitantes",
  dificultad: "Media",
  caso: `Femenina de 64 años con cirrosis por hepatitis C previamente tratada, que presenta somnolencia, desorientación temporal y asterixis. En los últimos cuatro días no ha evacuado debido a estreñimiento. La familia refiere que ha tomado menos líquidos y ha duplicado por cuenta propia la dosis de un diurético. La exploración muestra mucosas secas y presión arterial de 94/60 mmHg. No tiene fiebre ni hematemesis.`,
  pregunta: "¿Cuál es la estrategia inicial más apropiada?",
  opciones: [
    "Atribuir el cuadro exclusivamente al amonio y administrar tratamiento sin buscar otros factores.",
    "Buscar y corregir precipitantes, incluyendo estreñimiento, hipovolemia, alteraciones electrolíticas, infección y hemorragia digestiva, mientras se trata la encefalopatía.",
    "Suspender toda evaluación clínica si se confirma asterixis.",
    "Restringir de forma estricta las proteínas durante varias semanas.",
    "Administrar sedantes para normalizar el ciclo sueño-vigilia."
  ],
  respuestaCorrecta: 1,
  explicacion: `La encefalopatía hepática suele precipitarse por factores corregibles: infección, hemorragia digestiva, estreñimiento, deshidratación o hipovolemia, alteraciones de sodio o potasio, lesión renal, fármacos sedantes y falta de adherencia al tratamiento. En este caso destacan el estreñimiento, la probable hipovolemia y el uso inadecuado de diuréticos. El tratamiento exige corregir estos factores y administrar terapia dirigida a la encefalopatía. La búsqueda de precipitantes no debe limitarse a un solo factor ni retrasarse por solicitar amonio.`,
  perlaENARM: `Encefalopatía hepática = tratar el episodio y corregir el precipitante. Busca infección, sangrado, estreñimiento, hipovolemia, lesión renal, alteraciones electrolíticas y fármacos.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica para el abordaje integral de encefalopatía hepática.",
    internacional: "AASLD/EASL Practice Guideline, 2014."
  },
  bibliografia: [
    "Vilstrup H, et al. Hepatology. 2014;60:715-735."
  ]
},
{
  id: "GASTRO-093",
  especialidad: "Gastroenterología",
  tema: "Encefalopatía hepática",
  subtema: "Tratamiento inicial con lactulosa",
  dificultad: "Alta",
  caso: `Masculino de 61 años con cirrosis y encefalopatía hepática manifiesta grado II. Presenta desorientación temporal y asterixis, pero conserva la capacidad de deglutir y protege la vía aérea. La glucosa es normal, no hay déficit focal y se ha iniciado la búsqueda de infección, hemorragia y alteraciones metabólicas. No tiene datos de obstrucción intestinal.`,
  pregunta: "¿Cuál es el tratamiento farmacológico inicial más apropiado para la encefalopatía hepática manifiesta?",
  opciones: [
    "Lactulosa oral, titulada hasta conseguir aproximadamente 2–3 evacuaciones blandas al día, con vigilancia de hidratación y electrolitos.",
    "Rifaximina como monoterapia obligatoria en todo primer episodio, sin lactulosa.",
    "Neomicina intravenosa como tratamiento estándar de primera línea.",
    "Restricción absoluta de proteínas y ayuno durante 72 horas.",
    "Benzodiacepinas para reducir la agitación y mejorar la orientación."
  ],
  respuestaCorrecta: 0,
  explicacion: `La lactulosa es el tratamiento inicial habitual de la encefalopatía hepática manifiesta. Se administra por vía oral o enteral cuando la vía aérea es segura y se titula a aproximadamente 2–3 evacuaciones blandas al día. En pacientes que no pueden deglutir de forma segura, debe elegirse una vía enteral o rectal apropiada según la gravedad y el contexto clínico, protegiendo la vía aérea cuando sea necesario. La dosis excesiva puede producir diarrea, deshidratación, hipernatremia o hipopotasemia, que a su vez pueden empeorar la encefalopatía. También es indispensable corregir el precipitante.`,
  perlaENARM: `Lactulosa en encefalopatía manifiesta: titular a 2–3 evacuaciones blandas al día. Evita la diarrea excesiva y la deshidratación.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica para la dosificación integral de lactulosa en encefalopatía hepática.",
    internacional: "AASLD/EASL Practice Guideline, 2014."
  },
  bibliografia: [
    "Vilstrup H, et al. Hepatology. 2014;60:715-735."
  ]
},
{
  id: "GASTRO-094",
  especialidad: "Gastroenterología",
  tema: "Encefalopatía hepática",
  subtema: "Rifaximina en prevención de recurrencias",
  dificultad: "Alta",
  caso: `Femenina de 59 años con cirrosis que ha presentado tres episodios de encefalopatía hepática manifiesta en seis meses. Actualmente se encuentra orientada tras el tratamiento de un nuevo episodio con lactulosa. La familia confirma adherencia, aunque persiste riesgo de recurrencia. No hay infección activa ni hemorragia digestiva. La paciente tolera el tratamiento oral.`,
  pregunta: "¿Cuál es la estrategia farmacológica más apropiada para reducir nuevas recurrencias?",
  opciones: [
    "Suspender lactulosa al recuperar la orientación y no administrar prevención.",
    "Añadir rifaximina a la lactulosa para prevención secundaria de nuevos episodios.",
    "Mantener únicamente un antibiótico sistémico de amplio espectro de forma indefinida.",
    "Administrar benzodiacepinas nocturnas para prevenir episodios.",
    "Indicar restricción proteica crónica como intervención preventiva principal."
  ],
  respuestaCorrecta: 1,
  explicacion: `La lactulosa se utiliza para prevención secundaria después de un episodio de encefalopatía hepática manifiesta. Cuando existe recurrencia, rifaximina añadida a lactulosa reduce el riesgo de nuevos episodios y de hospitalización. La dosis habitual estudiada para rifaximina es 550 mg por vía oral cada 12 horas, considerando indicación, disponibilidad, tolerabilidad y evaluación clínica. Deben revisarse la adherencia, el tránsito intestinal y los precipitantes persistentes. Los episodios recurrentes también justifican reevaluar la gravedad de la hepatopatía y la posible necesidad de valoración para trasplante.`,
  perlaENARM: `Prevención secundaria: lactulosa. Si hay recurrencias, añadir rifaximina 550 mg cada 12 horas es una estrategia respaldada por evidencia.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica para todos los criterios de incorporación de rifaximina.",
    internacional: "AASLD/EASL Practice Guideline, 2014; Bass et al., NEJM, 2010."
  },
  bibliografia: [
    "Vilstrup H, et al. Hepatology. 2014;60:715-735.",
    "Bass NM, et al. Rifaximin Treatment in Hepatic Encephalopathy. N Engl J Med. 2010;362:1071-1081."
  ]
},
{
  id: "GASTRO-095",
  especialidad: "Gastroenterología",
  tema: "Encefalopatía hepática",
  subtema: "Interpretación de amonio plasmático",
  dificultad: "Extrema",
  caso: `Masculino de 55 años con cirrosis y cambios recientes del estado mental. Está somnoliento y presenta desorientación, pero no tiene asterixis. La concentración de amonio plasmático se reporta dentro del intervalo de referencia del laboratorio. La glucosa es de 102 mg/dL, la saturación de oxígeno es de 96% y no hay déficit neurológico focal evidente. La familia refiere consumo reciente de un sedante. No se ha realizado neuroimagen.`,
  pregunta: "¿Cuál es la interpretación más apropiada del resultado de amonio?",
  opciones: [
    "El resultado normal confirma encefalopatía hepática grave.",
    "El resultado normal hace menos probable la encefalopatía hepática y obliga a reconsiderar el diagnóstico y buscar otras causas de alteración mental.",
    "El amonio normal excluye toda enfermedad hepática.",
    "La concentración de amonio determina con precisión el grado de West Haven.",
    "Debe administrarse rifaximina de por vida sin evaluar otras causas."
  ],
  respuestaCorrecta: 1,
  explicacion: `La encefalopatía hepática es un diagnóstico clínico y de exclusión. Un amonio normal debe motivar una reevaluación diagnóstica, porque hace menos probable que la encefalopatía hepática explique por sí sola el cuadro. El amonio elevado no confirma el diagnóstico ni se correlaciona de manera fiable con el grado clínico en un paciente individual. Deben considerarse fármacos sedantes, hipoglucemia, alteraciones electrolíticas, infección, hipoxia, uremia, accidente cerebrovascular, hemorragia intracraneal y estado epiléptico, según el contexto. La obtención y el procesamiento de la muestra también pueden alterar el resultado.`,
  perlaENARM: `Amonio elevado no confirma ni gradúa la encefalopatía. Un resultado normal debe hacer reconsiderar el diagnóstico y buscar alternativas.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica para el uso diagnóstico del amonio.",
    internacional: "AASLD/EASL Practice Guideline, 2014."
  },
  bibliografia: [
    "Vilstrup H, et al. Hepatology. 2014;60:715-735."
  ]
},
{
  id: "GASTRO-096",
  especialidad: "Gastroenterología",
  tema: "Encefalopatía hepática",
  subtema: "Diagnóstico diferencial del deterioro neurológico",
  dificultad: "Extrema",
  caso: `Masculino de 67 años con cirrosis que llega a urgencias por disminución súbita del nivel de conciencia. La familia refiere que estaba hablando normalmente una hora antes. La exploración revela desviación de la mirada y debilidad del brazo derecho. Glucosa capilar de 110 mg/dL. No se cuenta con un diagnóstico previo de encefalopatía hepática. La presión arterial es de 156/92 mmHg y no hay hematemesis.`,
  pregunta: "¿Cuál es la conducta prioritaria?",
  opciones: [
    "Atribuir los hallazgos a encefalopatía hepática y administrar lactulosa como única intervención.",
    "Activar la evaluación urgente de evento vascular cerebral, incluyendo neuroimagen y valoración del tiempo de inicio, sin asumir que se trata de encefalopatía hepática.",
    "Solicitar exclusivamente amonio plasmático y esperar el resultado.",
    "Administrar rifaximina y reevaluar al día siguiente.",
    "Indicar restricción proteica y observar la evolución durante 24 horas."
  ],
  respuestaCorrecta: 1,
  explicacion: `La alteración súbita del estado mental acompañada de déficit neurológico focal debe considerarse un evento vascular cerebral u otra lesión intracraneal hasta demostrar lo contrario. Se requiere activar el protocolo de ictus, determinar la hora de última vez visto bien, evaluar glucosa y realizar neuroimagen urgente según el protocolo local. La cirrosis no protege contra el accidente cerebrovascular y no debe utilizarse para explicar automáticamente todo cambio neurológico. Si la encefalopatía hepática también es posible, su evaluación puede realizarse en paralelo, sin retrasar las intervenciones tiempo-dependientes.`,
  perlaENARM: `Déficit focal o inicio súbito = descartar ictus y hemorragia intracraneal de forma urgente. No ancles el diagnóstico en la cirrosis.`,
  gpc: {
    mexico: "Aplicar el protocolo institucional vigente de evento vascular cerebral agudo.",
    internacional: "AHA/ASA guidance for acute ischemic stroke; AASLD/EASL hepatic encephalopathy guideline."
  },
  bibliografia: [
    "Powers WJ, et al. Guidelines for the Early Management of Patients With Acute Ischemic Stroke. Stroke. 2019.",
    "Vilstrup H, et al. Hepatology. 2014;60:715-735."
  ]
},
{
  id: "GASTRO-097",
  especialidad: "Gastroenterología",
  tema: "Encefalopatía hepática",
  subtema: "Nutrición y metabolismo proteico",
  dificultad: "Alta",
  caso: `Femenina de 60 años con cirrosis y dos episodios previos de encefalopatía hepática. Está clínicamente estable y acude a consulta por pérdida de masa muscular y disminución de la ingesta. Su familia eliminó carne, huevo, lácteos y leguminosas por temor a que las proteínas precipiten nuevos episodios. Presenta sarcopenia y pérdida involuntaria de peso.`,
  pregunta: "¿Cuál es la recomendación nutricional más apropiada?",
  opciones: [
    "Mantener una dieta sin proteínas hasta normalizar permanentemente el amonio.",
    "Restablecer una ingesta proteica adecuada, con frecuencia alrededor de 1.2–1.5 g/kg/día en cirrosis, individualizada al estado nutricional y clínico.",
    "Indicar ayuno nocturno prolongado para disminuir la producción intestinal de amonio.",
    "Eliminar todas las proteínas de origen vegetal.",
    "Utilizar únicamente soluciones glucosadas como fuente de energía durante meses."
  ],
  respuestaCorrecta: 1,
  explicacion: `La restricción proteica prolongada no se recomienda en la cirrosis ni como prevención rutinaria de encefalopatía hepática, porque favorece sarcopenia y desnutrición. En general, se busca una ingesta proteica cercana a 1.2–1.5 g/kg/día, individualizada al peso de referencia, estado nutricional, función renal y situación clínica. Las fuentes vegetales y lácteas pueden ser bien toleradas y deben considerarse dentro de un plan nutricional. También se recomienda evitar ayunos prolongados y distribuir la ingesta durante el día, con una colación nocturna cuando sea apropiado.`,
  perlaENARM: `No restrinjas proteínas de rutina en encefalopatía hepática. La sarcopenia reduce la capacidad extrahepática de metabolizar amonio y empeora el pronóstico.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica para todos los requerimientos nutricionales en encefalopatía hepática.",
    internacional: "EASL Clinical Practice Guidelines on nutrition in chronic liver disease, 2019; AASLD/EASL HE guideline, 2014."
  },
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines on nutrition in chronic liver disease. J Hepatol. 2019;70:172-193.",
    "Vilstrup H, et al. Hepatology. 2014;60:715-735."
  ]
},
{
  id: "GASTRO-098",
  especialidad: "Gastroenterología",
  tema: "Encefalopatía hepática",
  subtema: "Encefalopatía hepática mínima o encubierta",
  dificultad: "Extrema",
  caso: `Masculino de 52 años con cirrosis compensada que continúa trabajando como conductor profesional. No presenta desorientación ni asterixis en la exploración, pero refiere errores de atención, lentitud para responder y dificultad para realizar tareas complejas. Su familia ha notado alteración del sueño y cambios sutiles en la conducta. La evaluación cognitiva general es casi normal, pero las pruebas psicométricas validadas para encefalopatía hepática muestran alteraciones.`,
  pregunta: "¿Cuál es la interpretación más apropiada?",
  opciones: [
    "No puede existir encefalopatía hepática si el paciente está orientado.",
    "Los hallazgos son compatibles con encefalopatía hepática encubierta, que requiere evaluación clínica y psicométrica apropiada.",
    "El diagnóstico queda confirmado únicamente por una concentración elevada de amonio.",
    "Se trata necesariamente de demencia irreversible y no requiere evaluación hepática.",
    "La presencia de síntomas sutiles obliga a clasificarlo como West Haven grado IV."
  ],
  respuestaCorrecta: 1,
  explicacion: `La encefalopatía hepática encubierta incluye formas mínimas o grado I, con alteraciones neurocognitivas que pueden pasar inadvertidas en una exploración convencional. Las pruebas psicométricas validadas, interpretadas considerando edad, escolaridad y contexto cultural, pueden detectar alteraciones de atención, velocidad psicomotora y función ejecutiva. Es importante valorar calidad de vida, adherencia, riesgo de accidentes y capacidad para actividades que exigen atención sostenida, como conducir. El diagnóstico no se establece exclusivamente mediante amonio ni por síntomas inespecíficos aislados.`,
  perlaENARM: `La orientación conservada no excluye encefalopatía hepática encubierta. Se requieren evaluación clínica y pruebas psicométricas apropiadas.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica para las pruebas psicométricas de encefalopatía encubierta.",
    internacional: "AASLD/EASL Practice Guideline, 2014."
  },
  bibliografia: [
    "Vilstrup H, et al. Hepatology. 2014;60:715-735."
  ]
},
{
  id: "GASTRO-099",
  especialidad: "Gastroenterología",
  tema: "Encefalopatía hepática",
  subtema: "Encefalopatía posterior a TIPS",
  dificultad: "Extrema",
  caso: `Masculino de 63 años con cirrosis que recibió TIPS por hemorragia variceal recurrente. Dos semanas después presenta desorientación y somnolencia. La glucosa es normal; no hay fiebre, hemorragia digestiva evidente ni focalización neurológica. La familia informa estreñimiento de cuatro días. El Doppler confirma permeabilidad del TIPS y no hay datos de trombosis portal.`,
  pregunta: "¿Cuál es el abordaje inicial más apropiado?",
  opciones: [
    "Ocluir inmediatamente el TIPS en todo paciente con cualquier grado de encefalopatía.",
    "Tratar la encefalopatía con lactulosa, buscar y corregir precipitantes, y valorar rifaximina si existe recurrencia o respuesta insuficiente.",
    "Suspender permanentemente toda alimentación oral.",
    "Administrar anticoagulación a dosis altas porque la encefalopatía demuestra trombosis del TIPS.",
    "Iniciar benzodiacepinas para controlar la somnolencia."
  ],
  respuestaCorrecta: 1,
  explicacion: `La encefalopatía hepática puede aparecer o empeorar después de TIPS debido al desvío de sangre portal hacia la circulación sistémica. El abordaje inicial incluye evaluar diagnósticos alternativos y precipitantes, corregir estreñimiento, infección, hemorragia, alteraciones metabólicas y fármacos, y tratar con lactulosa. Rifaximina puede añadirse en pacientes con episodios recurrentes según la evaluación clínica. Si la encefalopatía persiste o es refractaria pese al tratamiento óptimo, el equipo multidisciplinario puede considerar reducir el calibre o modificar el TIPS en pacientes seleccionados, ponderando el riesgo de recurrencia de hemorragia o ascitis.`,
  perlaENARM: `Encefalopatía posterior a TIPS: busca precipitantes y trata primero. La reducción del TIPS se reserva para casos persistentes o refractarios seleccionados.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica para encefalopatía posterior a TIPS.",
    internacional: "AASLD/EASL Practice Guideline, 2014; Baveno VII, 2022."
  },
  bibliografia: [
    "Vilstrup H, et al. Hepatology. 2014;60:715-735.",
    "de Franchis R, et al. Baveno VII – Renewing consensus in portal hypertension. J Hepatol. 2022;76:959-974."
  ]
},
{
  id: "GASTRO-100",
  especialidad: "Gastroenterología",
  tema: "Encefalopatía hepática",
  subtema: "Encefalopatía grave y protección de la vía aérea",
  dificultad: "Extrema",
  caso: `Femenina de 57 años con cirrosis avanzada, llevada a urgencias por deterioro progresivo del estado de conciencia. Está estuporosa, responde solo a estímulos intensos y presenta episodios de vómito. No protege adecuadamente la vía aérea y tiene abundantes secreciones orofaríngeas. La glucosa es normal. Se sospecha encefalopatía hepática grave, pero aún deben descartarse infección, hemorragia intracraneal, alteraciones metabólicas y otros diagnósticos.`,
  pregunta: "¿Cuál es la prioridad inmediata?",
  opciones: [
    "Administrar lactulosa oral sin modificar la posición ni evaluar la vía aérea.",
    "Proteger la vía aérea y estabilizar ABC, mientras se realiza evaluación urgente de causas precipitantes y diagnósticos alternativos.",
    "Esperar el resultado del amonio antes de iniciar cualquier medida.",
    "Administrar rifaximina oral como única intervención inmediata.",
    "Realizar pruebas psicométricas para confirmar la gravedad."
  ],
  respuestaCorrecta: 1,
  explicacion: `En encefalopatía grave con disminución importante del nivel de conciencia, vómito y pérdida de reflejos protectores, la prioridad es estabilizar la vía aérea, respiración y circulación. Puede requerirse intubación endotraqueal para prevenir aspiración. Paralelamente deben evaluarse glucosa, electrolitos, función renal, infección, hemorragia digestiva, fármacos, evento vascular cerebral y otras causas de coma. La terapia dirigida a encefalopatía debe administrarse por una vía segura una vez que se proteja la vía aérea. La confirmación mediante amonio no debe retrasar la estabilización.`,
  perlaENARM: `Encefalopatía grave con incapacidad para proteger la vía aérea = ABC e intubación si está indicada. La estabilización precede a la terapia enteral.`,
  gpc: {
    mexico: "Aplicar protocolos institucionales de urgencias, protección de vía aérea y manejo de alteración del estado de conciencia.",
    internacional: "AASLD/EASL Practice Guideline, 2014."
  },
  bibliografia: [
    "Vilstrup H, et al. Hepatology. 2014;60:715-735."
  ]
},
{
  id: "GASTRO-101",
  especialidad: "Gastroenterología",
  tema: "Síndrome hepatorrenal",
  subtema: "Criterios diagnósticos actuales de SHR-LRA",
  dificultad: "Fácil",
  caso: `Masculino de 58 años con cirrosis descompensada y ascitis. Su creatinina basal estable era de 0.9 mg/dL y aumenta a 1.3 mg/dL en 36 horas. No presenta hemorragia activa ni choque. Se suspenden los nefrotóxicos potenciales y se inicia la evaluación de infección, estado de volumen, sedimento urinario y otras causas de lesión renal. Tras corregir una posible hipovolemia, la función renal no mejora en las siguientes 24 horas. No se identifica una causa alternativa predominante.`,
  pregunta: "¿Cuál es la interpretación más apropiada de este cuadro?",
  opciones: [
    "No cumple criterios de lesión renal aguda porque la creatinina es menor de 2 mg/dL.",
    "Cumple criterio de lesión renal aguda y debe evaluarse para SHR-LRA en ausencia de una explicación alternativa predominante.",
    "El SHR solo puede diagnosticarse después de administrar albúmina durante 7 días.",
    "La presencia de ascitis descarta el síndrome hepatorrenal.",
    "La creatinina debe superar 4 mg/dL para considerar SHR-LRA."
  ],
  respuestaCorrecta: 1,
  explicacion: `El incremento de creatinina de 0.9 a 1.3 mg/dL representa un aumento de 0.4 mg/dL en 36 horas y cumple criterio de lesión renal aguda. Los criterios ADQI-ICA de 2024 para SHR-LRA incluyen cirrosis con ascitis, incremento de creatinina ≥0.3 mg/dL en 48 horas o ≥50% respecto al basal en los 7 días previos, o diuresis ≤0.5 mL/kg/h durante al menos 6 horas; ausencia de mejoría dentro de 24 horas después de una reanimación de volumen adecuada cuando está indicada, y ausencia de evidencia sólida de otra causa predominante. No es necesario esperar una prueba sistemática de albúmina durante 48 horas.`,
  perlaENARM: `SHR-LRA: cirrosis con ascitis + criterio de LRA + ausencia de mejoría tras reanimación adecuada cuando se necesita + ausencia de una causa alternativa predominante.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente que incorpore íntegramente los criterios ADQI-ICA de 2024.",
    internacional: "ADQI-ICA Joint Multidisciplinary Consensus, Journal of Hepatology, 2024."
  },
  bibliografia: [
    "Nadim MK, et al. Acute kidney injury in patients with cirrhosis: ADQI and ICA joint multidisciplinary consensus meeting. J Hepatol. 2024;81:163-183. doi:10.1016/j.jhep.2024.03.031."
  ]
},
{
  id: "GASTRO-102",
  especialidad: "Gastroenterología",
  tema: "Síndrome hepatorrenal",
  subtema: "Diagnóstico diferencial de lesión renal en cirrosis",
  dificultad: "Media",
  caso: `Femenina de 65 años con cirrosis y ascitis que presenta aumento de creatinina de 1.0 a 2.1 mg/dL en cuatro días. Refiere diarrea abundante y escasa ingesta durante las últimas 48 horas. La presión arterial es de 88/54 mmHg, las mucosas están secas y la diuresis ha disminuido. No presenta fiebre ni datos de hemorragia. El sedimento urinario no muestra cilindros granulosos abundantes ni hematuria significativa.`,
  pregunta: "¿Cuál es la conducta inicial más apropiada antes de atribuir la lesión renal a SHR-LRA?",
  opciones: [
    "Diagnosticar SHR-LRA de inmediato y administrar terlipresina sin corregir el estado de volumen.",
    "Evaluar y corregir la hipovolemia con reposición individualizada, suspender factores agravantes y reevaluar la función renal.",
    "Administrar diuréticos a dosis altas para aumentar la diuresis.",
    "Indicar contraste intravenoso para confirmar el diagnóstico de SHR.",
    "Iniciar hemodiálisis de forma obligatoria por cualquier incremento de creatinina."
  ],
  respuestaCorrecta: 1,
  explicacion: `La paciente presenta datos clínicos de hipovolemia por pérdidas gastrointestinales e ingesta insuficiente. Debe corregirse el déficit de volumen de forma individualizada, con cristaloides u otro fluido apropiado según la situación clínica, mientras se evalúan otras causas de LRA. La respuesta de la función renal ayuda a orientar el diagnóstico. El SHR-LRA no debe diagnosticarse si existe una explicación alternativa predominante que no se ha corregido. La reposición debe vigilarse estrechamente para evitar sobrecarga de volumen en una paciente con cirrosis.`,
  perlaENARM: `Antes de diagnosticar SHR-LRA, identifica hipovolemia, sepsis, hemorragia, nefrotóxicos y lesión renal estructural. La reposición de volumen se individualiza.`,
  gpc: {
    mexico: "Aplicar el protocolo institucional de LRA y cirrosis descompensada.",
    internacional: "ADQI-ICA Consensus, 2024."
  },
  bibliografia: [
    "Nadim MK, et al. J Hepatol. 2024;81:163-183."
  ]
},
{
  id: "GASTRO-103",
  especialidad: "Gastroenterología",
  tema: "Síndrome hepatorrenal",
  subtema: "Diferenciación entre SHR-LRA y lesión tubular aguda",
  dificultad: "Alta",
  caso: `Masculino de 62 años con cirrosis avanzada y ascitis que desarrolla LRA después de un episodio de choque séptico prolongado. La creatinina aumenta de 1.1 a 3.0 mg/dL. El sedimento urinario muestra abundantes cilindros granulosos pigmentados y células epiteliales tubulares. La evolución hemodinámica ha mejorado, pero la función renal continúa deteriorándose. No se ha documentado respuesta a la reposición de volumen.`,
  pregunta: "¿Cuál es la interpretación más probable de la lesión renal?",
  opciones: [
    "SHR-LRA puro confirmado por la presencia de ascitis.",
    "Lesión tubular aguda probable asociada con el episodio de choque; debe considerarse una causa estructural predominante.",
    "Enfermedad renal crónica confirmada exclusivamente por la creatinina actual.",
    "Glomerulonefritis confirmada por cualquier cilindro urinario.",
    "La cirrosis descarta que el choque pueda causar lesión tubular."
  ],
  respuestaCorrecta: 1,
  explicacion: `El antecedente de choque séptico prolongado y los cilindros granulosos pigmentados con células epiteliales tubulares favorecen lesión tubular aguda. La presencia de cirrosis no excluye lesión renal estructural ni otros fenotipos de LRA. El SHR-LRA requiere ausencia de evidencia sólida de una explicación alternativa predominante. Sin embargo, los fenotipos pueden coexistir: una persona con cirrosis puede presentar componentes hemodinámicos funcionales junto con lesión tubular. La evaluación debe integrar evolución clínica, sedimento, exposición a nefrotóxicos, proteinuria, hematuria y estudios adicionales según el contexto.`,
  perlaENARM: `Choque prolongado + cilindros granulosos y células tubulares = lesión tubular aguda probable. La cirrosis no convierte automáticamente toda LRA en SHR.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica para todos los fenotipos de LRA en cirrosis.",
    internacional: "ADQI-ICA Consensus, 2024."
  },
  bibliografia: [
    "Nadim MK, et al. J Hepatol. 2024;81:163-183."
  ]
},
{
  id: "GASTRO-104",
  especialidad: "Gastroenterología",
  tema: "Síndrome hepatorrenal",
  subtema: "Terlipresina y albúmina como tratamiento inicial",
  dificultad: "Alta",
  caso: `Femenina de 57 años con cirrosis, ascitis y SHR-LRA establecido tras evaluación clínica. La creatinina aumenta progresivamente y no mejora después de corregir una hipovolemia documentada. No hay evidencia de lesión tubular predominante ni de obstrucción urinaria. La paciente está hospitalizada y no presenta hipoxemia ni signos de isquemia activa. El equipo dispone de terlipresina y albúmina concentrada.`,
  pregunta: "¿Cuál es el tratamiento específico de primera línea recomendado para SHR-LRA?",
  opciones: [
    "Terlipresina combinada con albúmina al 20–25%, ajustando la albúmina diariamente según el estado de volumen.",
    "Albúmina al 5% a dosis fija durante 14 días, sin vasoconstrictor.",
    "Furosemida en monoterapia a dosis crecientes.",
    "Propranolol para aumentar la perfusión renal.",
    "Antibióticos de amplio espectro durante 14 días aunque no haya infección."
  ],
  respuestaCorrecta: 0,
  explicacion: `El consenso ADQI-ICA de 2024 recomienda iniciar terlipresina junto con albúmina al 20–25% tan pronto como se establece el diagnóstico de SHR-LRA. La albúmina debe ajustarse a la situación de volumen y suspenderse si aparece sobrecarga. La terlipresina requiere vigilancia estrecha por riesgo de isquemia y complicaciones respiratorias. Si está contraindicada, no disponible o no es apropiada, puede considerarse norepinefrina en un entorno monitorizado; la selección depende de recursos y condiciones clínicas.`,
  perlaENARM: `SHR-LRA establecido: terlipresina + albúmina concentrada, con vigilancia de oxigenación, isquemia y sobrecarga de volumen.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica para el esquema completo de terlipresina y albúmina según ADQI-ICA 2024.",
    internacional: "ADQI-ICA Consensus, 2024."
  },
  bibliografia: [
    "Nadim MK, et al. J Hepatol. 2024;81:163-183."
  ]
},
{
  id: "GASTRO-105",
  especialidad: "Gastroenterología",
  tema: "Síndrome hepatorrenal",
  subtema: "Seguridad de terlipresina",
  dificultad: "Extrema",
  caso: `Masculino de 66 años con cirrosis avanzada y SHR-LRA confirmado. Antes de iniciar tratamiento, presenta saturación de oxígeno de 88% al aire ambiente, disnea en reposo y estertores bibasales. La radiografía de tórax muestra congestión pulmonar. La presión arterial es de 98/60 mmHg. La creatinina es de 3.2 mg/dL y continúa en ascenso.`,
  pregunta: "¿Cuál es la conducta más apropiada antes de administrar terlipresina y albúmina?",
  opciones: [
    "Iniciar inmediatamente dosis altas de terlipresina y albúmina sin modificar el soporte respiratorio.",
    "Evaluar y tratar la hipoxemia y la sobrecarga de volumen; evitar iniciar terlipresina mientras exista hipoxia significativa y reevaluar la estrategia terapéutica.",
    "Administrar albúmina rápidamente hasta lograr una presión venosa central elevada.",
    "Ignorar la saturación de oxígeno porque no modifica la seguridad del vasoconstrictor.",
    "Administrar un betabloqueador no selectivo como sustituto equivalente de terlipresina."
  ],
  respuestaCorrecta: 1,
  explicacion: `La terlipresina se asocia con riesgo de insuficiencia respiratoria y eventos isquémicos. La hipoxemia significativa y la sobrecarga de volumen requieren atención inmediata y pueden contraindicar o impedir temporalmente el inicio seguro del fármaco. Deben evaluarse oxigenación, estado hemodinámico y congestión, ajustar o suspender la albúmina si hay sobrecarga y tratar las causas respiratorias. La decisión de iniciar un vasoconstrictor alternativo requiere valoración especializada. No debe administrarse albúmina automáticamente si el paciente está sobrecargado.`,
  perlaENARM: `Antes de terlipresina: evalúa oxigenación, congestión e isquemia. La sobrecarga de volumen puede empeorar el riesgo respiratorio.`,
  gpc: {
    mexico: "Seguir la ficha técnica autorizada del producto disponible y el protocolo institucional de seguridad.",
    internacional: "ADQI-ICA Consensus, 2024; información de prescripción de terlipresina."
  },
  bibliografia: [
    "Nadim MK, et al. J Hepatol. 2024;81:163-183."
  ]
},
{
  id: "GASTRO-106",
  especialidad: "Gastroenterología",
  tema: "Síndrome hepatorrenal",
  subtema: "Norepinefrina como alternativa vasoconstrictora",
  dificultad: "Alta",
  caso: `Femenina de 60 años con cirrosis y SHR-LRA confirmado. Terlipresina no está disponible en el hospital. La paciente se encuentra en una unidad de cuidados intensivos con monitorización continua y acceso venoso apropiado. No presenta arritmia activa ni isquemia miocárdica. La creatinina continúa aumentando pese a la corrección de factores precipitantes y al manejo de volumen.`,
  pregunta: "¿Cuál es una alternativa terapéutica razonable?",
  opciones: [
    "Norepinefrina en un entorno de cuidados intensivos, junto con albúmina individualizada y vigilancia estrecha.",
    "Nitroprusiato intravenoso para reducir la resistencia vascular sistémica.",
    "Dopamina a dosis bajas como tratamiento de eficacia demostrada para SHR-LRA.",
    "Furosemida en monoterapia para revertir el mecanismo hemodinámico.",
    "Suspender toda terapia y esperar a que la creatinina se normalice espontáneamente."
  ],
  respuestaCorrecta: 0,
  explicacion: `Cuando terlipresina no está disponible o no es apropiada, norepinefrina puede utilizarse como alternativa en un entorno monitorizado, habitualmente de cuidados intensivos, en combinación con albúmina si el estado de volumen lo permite. La dosis se titula según respuesta hemodinámica y protocolos locales. Se vigilan presión arterial, perfusión periférica, ritmo cardíaco y función renal. La dopamina a dosis bajas no se recomienda como tratamiento eficaz de SHR-LRA. La elección del vasoconstrictor debe integrarse con la gravedad de la hepatopatía y la evaluación para trasplante.`,
  perlaENARM: `Alternativa a terlipresina: norepinefrina con monitorización intensiva. No uses dopamina a dosis bajas como estrategia renoprotectora rutinaria.`,
  gpc: {
    mexico: "Aplicar el protocolo institucional de vasopresores en cuidados intensivos.",
    internacional: "ADQI-ICA Consensus, 2024."
  },
  bibliografia: [
    "Nadim MK, et al. J Hepatol. 2024;81:163-183."
  ]
},
{
  id: "GASTRO-107",
  especialidad: "Gastroenterología",
  tema: "Síndrome hepatorrenal",
  subtema: "Evaluación de respuesta al vasoconstrictor",
  dificultad: "Extrema",
  caso: `Masculino de 54 años con SHR-LRA en tratamiento con terlipresina y albúmina. La creatinina basal antes del episodio era de 1.0 mg/dL. Tras 48 horas de tratamiento, la creatinina permanece en 3.0 mg/dL y no muestra tendencia descendente. La presión arterial media ha aumentado poco, no hay mejoría de la diuresis y la paciente tolera la terapia sin efectos adversos graves. La dosis actual no es la máxima permitida por el protocolo utilizado.`,
  pregunta: "¿Cuál es la conducta más apropiada conforme a una estrategia de titulación protocolizada?",
  opciones: [
    "Mantener indefinidamente la misma dosis aunque no haya respuesta.",
    "Reevaluar precipitantes y estado de volumen y considerar aumentar la dosis de terlipresina según el protocolo y la tolerancia.",
    "Suspender toda vigilancia porque la creatinina no se modifica en 48 horas.",
    "Administrar grandes volúmenes de albúmina sin evaluar congestión.",
    "Añadir de forma rutinaria un AINE para mejorar la respuesta vascular."
  ],
  respuestaCorrecta: 1,
  explicacion: `La respuesta se monitoriza con creatinina, diuresis, hemodinámica y seguridad. El consenso ADQI-ICA recomienda considerar el aumento de dosis de terlipresina cada 24 horas si la creatinina no ha disminuido al menos 25% desde el inicio, siempre que la estrategia sea tolerada y se siga el protocolo correspondiente. Deben reevaluarse hipovolemia, infección, sangrado, lesión renal estructural, congestión y otros factores. El tratamiento se suspende si aparece una reacción adversa grave, si la función renal vuelve cerca del basal, si no hay respuesta después de 48 horas a dosis máximas toleradas, si se requiere terapia de reemplazo renal o al alcanzar 14 días de tratamiento.`,
  perlaENARM: `Monitoriza creatinina y seguridad diariamente. Sin descenso aproximado del 25%, considera titulación protocolizada; no prolongues indefinidamente una terapia ineficaz.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica para los criterios de titulación ADQI-ICA 2024.",
    internacional: "ADQI-ICA Consensus, 2024."
  },
  bibliografia: [
    "Nadim MK, et al. J Hepatol. 2024;81:163-183."
  ]
},
{
  id: "GASTRO-108",
  especialidad: "Gastroenterología",
  tema: "Síndrome hepatorrenal",
  subtema: "Indicaciones de terapia de reemplazo renal",
  dificultad: "Extrema",
  caso: `Femenina de 61 años con cirrosis avanzada y SHR-LRA que desarrolla hiperpotasemia persistente de 6.8 mmol/L con cambios electrocardiográficos, acidosis metabólica grave y edema pulmonar con hipoxemia. La terapia médica inicial no consigue corregir estas complicaciones. La paciente permanece bajo atención intensiva y el equipo evalúa opciones de soporte orgánico.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Esperar obligatoriamente a que la creatinina supere 10 mg/dL antes de iniciar diálisis.",
    "Iniciar valoración urgente para terapia de reemplazo renal por complicaciones potencialmente mortales refractarias al tratamiento médico.",
    "Suspender todo soporte renal porque el SHR siempre revierte con terlipresina.",
    "Administrar diuréticos en dosis crecientes como sustituto de la diálisis en cualquier circunstancia.",
    "Esperar a completar 14 días de terlipresina antes de tratar la hiperpotasemia."
  ],
  respuestaCorrecta: 1,
  explicacion: `La hiperpotasemia con cambios electrocardiográficos, la acidosis metabólica grave y el edema pulmonar refractario son indicaciones urgentes de evaluación para terapia de reemplazo renal. La decisión no depende de un valor aislado de creatinina ni debe retrasarse para completar un curso de vasoconstrictores. En pacientes con cirrosis avanzada, la diálisis puede servir como puente en casos seleccionados, especialmente durante evaluación para trasplante, pero el pronóstico global y los objetivos de atención deben discutirse de forma multidisciplinaria.`,
  perlaENARM: `Indica terapia de reemplazo renal por complicaciones refractarias —hiperpotasemia, acidosis, sobrecarga pulmonar o manifestaciones urémicas—, no por una cifra aislada de creatinina.`,
  gpc: {
    mexico: "Aplicar criterios de urgencia de terapia de reemplazo renal y protocolos de cuidados intensivos.",
    internacional: "ADQI-ICA Consensus, 2024."
  },
  bibliografia: [
    "Nadim MK, et al. J Hepatol. 2024;81:163-183."
  ]
},
{
  id: "GASTRO-109",
  especialidad: "Gastroenterología",
  tema: "Síndrome hepatorrenal",
  subtema: "Trasplante hepático como tratamiento definitivo",
  dificultad: "Alta",
  caso: `Masculino de 56 años con cirrosis descompensada, ascitis recurrente y SHR-LRA. Tras tratamiento con vasoconstrictor y albúmina, la creatinina mejora parcialmente, pero permanece por encima del basal. Presenta puntuación MELD elevada y episodios previos de encefalopatía. No existe una contraindicación definitiva conocida para trasplante, aunque requiere valoración cardiopulmonar y psicosocial.`,
  pregunta: "¿Cuál es la estrategia de mayor relevancia para el pronóstico a largo plazo?",
  opciones: [
    "Evitar la evaluación para trasplante porque la creatinina ya mejoró parcialmente.",
    "Iniciar evaluación multidisciplinaria para trasplante hepático, considerado el tratamiento definitivo del SHR en candidatos apropiados.",
    "Mantener terlipresina de forma indefinida en todos los pacientes.",
    "Indicar nefrectomía para reducir la producción de renina.",
    "Suspender el seguimiento especializado cuando se normalice la creatinina."
  ],
  respuestaCorrecta: 1,
  explicacion: `El trasplante hepático es el tratamiento definitivo para el síndrome hepatorrenal en pacientes elegibles, porque corrige la enfermedad hepática subyacente y la fisiopatología hemodinámica que contribuye a la disfunción renal. Los vasoconstrictores pueden mejorar la función renal y servir como puente al trasplante, pero no sustituyen la evaluación de candidaturas. La probabilidad de recuperación renal, la duración de la disfunción, la comorbilidad y los criterios de trasplante hepatorrenal combinado deben evaluarse por un equipo especializado.`,
  perlaENARM: `Los vasoconstrictores son un puente; el trasplante hepático es el tratamiento definitivo del SHR en candidatos adecuados.`,
  gpc: {
    mexico: "La referencia debe realizarse a un centro de trasplante hepático con evaluación multidisciplinaria.",
    internacional: "ADQI-ICA Consensus, 2024."
  },
  bibliografia: [
    "Nadim MK, et al. J Hepatol. 2024;81:163-183."
  ]
},
{
  id: "GASTRO-110",
  especialidad: "Gastroenterología",
  tema: "Síndrome hepatorrenal",
  subtema: "Diferenciación entre SHR-LRA y enfermedad renal crónica",
  dificultad: "Extrema",
  caso: `Femenina de 64 años con cirrosis y ascitis, además de diabetes mellitus tipo 2 e hipertensión arterial de larga evolución. Presenta creatinina de 2.0 mg/dL, con valores entre 1.7 y 1.9 mg/dL durante los últimos seis meses. La relación albúmina/creatinina urinaria está elevada y la ecografía muestra riñones de tamaño reducido con aumento de ecogenicidad cortical. No hay un incremento reciente de creatinina que cumpla criterios de LRA. Se solicita determinar si el cuadro debe clasificarse como SHR-LRA.`,
  pregunta: "¿Cuál es la interpretación más apropiada?",
  opciones: [
    "Diagnosticar SHR-LRA exclusivamente por la coexistencia de cirrosis y creatinina elevada.",
    "Considerar enfermedad renal crónica probable y evaluar su etiología; no cumple por los datos actuales criterios temporales de SHR-LRA.",
    "Descartar enfermedad renal crónica porque la paciente tiene ascitis.",
    "Iniciar terlipresina de forma automática en cualquier paciente cirrótico con creatinina mayor de 1.5 mg/dL.",
    "Diagnosticar lesión renal aguda por la ecogenicidad cortical, sin considerar la evolución temporal."
  ],
  respuestaCorrecta: 1,
  explicacion: `La estabilidad de la creatinina durante meses, la albuminuria y los cambios estructurales renales favorecen enfermedad renal crónica. El SHR-LRA requiere un cambio agudo de creatinina o de diuresis que cumpla criterios de LRA, además de los otros criterios diagnósticos. La enfermedad renal crónica preexistente no excluye que un paciente desarrolle SHR-LRA posteriormente, pero no debe asumirse este fenotipo sin evidencia de deterioro agudo y evaluación de causas alternativas. La coexistencia de cirrosis y disfunción renal exige una evaluación renal integral.`,
  perlaENARM: `La creatinina elevada aislada no diagnostica SHR-LRA. Define primero si existe LRA, enfermedad renal crónica o ambas, usando evolución temporal y estudios complementarios.`,
  gpc: {
    mexico: "No se verificó una GPC mexicana vigente específica para la clasificación ADQI-ICA completa en este escenario.",
    internacional: "ADQI-ICA Consensus, 2024."
  },
    bibliografia: [
    "Nadim MK, et al. J Hepatol. 2024;81:163-183."
  ]
},
  
{
  id: "GASTRO-111",
  especialidad: "Gastroenterología",
  tema: "Pancreatitis aguda",
  subtema: "Diagnóstico mediante criterios de Atlanta revisados",
  dificultad: "Media",
  caso: `Masculino de 46 años, sin antecedentes relevantes, acude por dolor epigástrico intenso de 10 horas de evolución, irradiado en cinturón hacia la espalda, acompañado de náuseas y vómitos. A la exploración presenta dolor a la palpación profunda en epigastrio, sin rigidez ni rebote. La lipasa sérica es de 1,260 U/L, con límite superior normal de 60 U/L. La amilasa es de 430 U/L. La ecografía abdominal no identifica cálculos en la vesícula ni dilatación de la vía biliar. Está hemodinámicamente estable y no presenta datos de falla orgánica.`,
  pregunta: "¿Cuál es la interpretación diagnóstica más apropiada?",
  opciones: [
    "No puede diagnosticarse pancreatitis aguda sin una tomografía contrastada que demuestre inflamación pancreática.",
    "Pancreatitis aguda, porque cumple dos criterios diagnósticos: dolor característico y lipasa superior a tres veces el límite normal.",
    "Pancreatitis crónica reagudizada, porque toda elevación de lipasa indica enfermedad crónica.",
    "Únicamente hiperamilasemia, ya que la lipasa no es específica para enfermedad pancreática.",
    "Obstrucción intestinal, porque el vómito y el dolor epigástrico son suficientes para establecer ese diagnóstico."
  ],
  respuestaCorrecta: 1,
  explicacion: `El diagnóstico de pancreatitis aguda requiere al menos dos de tres criterios: dolor abdominal característico; amilasa o lipasa al menos tres veces por encima del límite superior normal; y hallazgos característicos en imagen. Este paciente cumple los dos primeros, por lo que la tomografía no es necesaria para confirmar el diagnóstico en este momento. La ecografía se utiliza principalmente para investigar una etiología biliar. Deben evaluarse gravedad, estado hemodinámico, función renal, oxigenación, electrolitos y posibles causas metabólicas o tóxicas.`,
  perlaENARM: `Pancreatitis aguda: necesitas dos de tres criterios de Atlanta revisados. Si el dolor es típico y la lipasa supera tres veces el límite normal, no solicites tomografía rutinaria solo para confirmar el diagnóstico.`,
  gpc: {
    mexico: "Verificar el catálogo CENETEC/IMSS para identificar una GPC mexicana vigente y específica aplicable al escenario.",
    internacional: "American College of Gastroenterology Clinical Guideline: Management of Acute Pancreatitis, 2024."
  },
  bibliografia: [
    "Tenner S, et al. American College of Gastroenterology Guidelines: Management of Acute Pancreatitis. Am J Gastroenterol. 2024.",
    "Banks PA, et al. Classification of acute pancreatitis—2012: revision of the Atlanta classification and definitions by international consensus. Gut. 2013;62:102-111."
  ]
},
{
  id: "GASTRO-112",
  especialidad: "Gastroenterología",
  tema: "Pancreatitis aguda",
  subtema: "Etiología biliar y evaluación inicial",
  dificultad: "Alta",
  caso: `Femenina de 52 años con obesidad y episodios previos de cólico biliar acude por dolor epigástrico intenso irradiado a la espalda, vómitos y lipasa de 1,800 U/L. La alanina aminotransferasa es de 286 U/L, AST de 210 U/L, bilirrubina total de 2.1 mg/dL y fosfatasa alcalina discretamente elevada. La ecografía muestra múltiples cálculos vesiculares y colédoco de 5 mm, sin cálculo visible en la vía biliar. No presenta fiebre, ictericia progresiva ni hipotensión. ¿Cuál es la etiología más probable?`,
  pregunta: "¿Cuál es la causa más probable de la pancreatitis en esta paciente?",
  opciones: [
    "Pancreatitis autoinmunitaria tipo 1.",
    "Pancreatitis inducida por hipertrigliceridemia grave, aunque no se dispone de triglicéridos.",
    "Pancreatitis aguda de origen biliar por migración transitoria de un cálculo.",
    "Pancreatitis medicamentosa por un fármaco no documentado.",
    "Pancreatitis secundaria a hipercalcemia confirmada."
  ],
  respuestaCorrecta: 2,
  explicacion: `La presencia de colelitiasis, junto con una elevación importante de ALT y aminotransferasas, favorece una etiología biliar. Un cálculo puede atravesar transitoriamente la ampolla y dejar de ser visible cuando se realiza la ecografía. Una ALT superior a 150 U/L durante las primeras 48 horas aumenta la probabilidad de origen biliar, aunque no constituye por sí sola una prueba definitiva. Debe revisarse la evolución de bilirrubina y enzimas hepáticas. Si persiste la sospecha de coledocolitiasis sin evidencia concluyente, pueden utilizarse colangiorresonancia o ultrasonido endoscópico, según disponibilidad y contexto clínico.`,
  perlaENARM: `Pancreatitis más colelitiasis y elevación marcada de ALT: sospecha origen biliar, incluso si el colédoco no está dilatado y no se visualiza un cálculo.`,
  gpc: {
    mexico: "Verificar la GPC mexicana vigente sobre pancreatitis aguda y enfermedad litiásica biliar.",
    internacional: "ACG Clinical Guideline: Management of Acute Pancreatitis, 2024."
  },
  bibliografia: [
    "Tenner S, et al. ACG Clinical Guideline: Management of Acute Pancreatitis. Am J Gastroenterol. 2024.",
    "Banks PA, et al. Revised Atlanta classification. Gut. 2013;62:102-111."
  ]
},
{
  id: "GASTRO-113",
  especialidad: "Gastroenterología",
  tema: "Pancreatitis aguda",
  subtema: "Reanimación con líquidos y solución cristaloide",
  dificultad: "Alta",
  caso: `Masculino de 59 años con pancreatitis aguda de probable origen biliar. Presenta mucosas secas, frecuencia cardiaca de 112 lpm, TA de 104/68 mmHg, urea de 42 mg/dL y creatinina de 1.4 mg/dL, sin antecedentes de insuficiencia cardiaca ni enfermedad renal crónica. No tiene hipoxemia ni datos de choque establecido. Después de la valoración inicial se decide iniciar reposición intravenosa de líquidos. ¿Cuál es la estrategia más apropiada?`,
  pregunta: "¿Cuál es el enfoque recomendado para la fluidoterapia inicial?",
  opciones: [
    "Administrar solución salina hipertónica al 3% como líquido de elección.",
    "Evitar líquidos intravenosos para reducir el edema pancreático.",
    "Administrar solución cristaloide, preferentemente lactato de Ringer, con intensidad moderada y reevaluaciones frecuentes para ajustar la respuesta.",
    "Administrar automáticamente un bolo de 30 mL/kg cada hora durante las primeras 12 horas, independientemente de la respuesta.",
    "Utilizar coloides sintéticos como primera línea en todos los pacientes."
  ],
  respuestaCorrecta: 2,
  explicacion: `La reposición temprana de volumen es importante, pero debe individualizarse y reevaluarse con frecuencia. El lactato de Ringer suele preferirse sobre solución salina al 0.9% en pancreatitis aguda. Se consideran estado hemodinámico, diuresis, urea, creatinina, hematocrito, signos de sobrecarga y respuesta clínica. La estrategia moderada evita tanto la hipovolemia persistente como la administración excesiva, que puede contribuir a edema pulmonar y otras complicaciones. Los bolos se reservan para hipovolemia o compromiso hemodinámico que los justifique, con reevaluación inmediata.`,
  perlaENARM: `Pancreatitis aguda: lactato de Ringer y fluidoterapia moderada, individualizada y guiada por objetivos. Evita la reanimación agresiva sistemática sin reevaluación.`,
  gpc: {
    mexico: "Consultar el catálogo CENETEC/IMSS y el protocolo institucional vigente de manejo de pancreatitis aguda.",
    internacional: "ACG Clinical Guideline: Management of Acute Pancreatitis, 2024; WATERFALL trial."
  },
  bibliografia: [
    "Tenner S, et al. ACG Clinical Guideline: Management of Acute Pancreatitis. Am J Gastroenterol. 2024.",
    "de-Madaria E, et al. Aggressive or Moderate Fluid Resuscitation in Acute Pancreatitis. N Engl J Med. 2022;387:989-1000."
  ]
},
{
  id: "GASTRO-114",
  especialidad: "Gastroenterología",
  tema: "Pancreatitis aguda",
  subtema: "Indicación de tomografía contrastada",
  dificultad: "Media",
  caso: `Femenina de 43 años presenta dolor epigástrico típico irradiado a la espalda y vómitos. La lipasa es ocho veces el límite superior normal. La ecografía identifica colelitiasis sin dilatación del colédoco. La paciente permanece estable, sin hipoxemia, oliguria ni signos de irritación peritoneal. Han transcurrido seis horas desde el inicio de los síntomas y se plantea solicitar tomografía contrastada de inmediato para cuantificar la inflamación pancreática.`,
  pregunta: "¿Cuál es la conducta más apropiada respecto a la tomografía?",
  opciones: [
    "Realizar tomografía contrastada de forma obligatoria a todos los pacientes durante las primeras seis horas.",
    "Evitar cualquier estudio de imagen durante toda la hospitalización.",
    "No realizar tomografía rutinaria en este momento, porque el diagnóstico está establecido; reservarla para incertidumbre diagnóstica, deterioro o falta de mejoría clínica.",
    "Solicitar tomografía sin contraste como prueba obligatoria para confirmar la pancreatitis.",
    "Sustituir la evaluación clínica por una tomografía diaria durante la primera semana."
  ],
  respuestaCorrecta: 2,
  explicacion: `Cuando se cumplen los criterios clínicos y bioquímicos, la tomografía contrastada temprana no es necesaria de rutina para confirmar pancreatitis ni para determinar la gravedad inicial. La imagen se considera si el diagnóstico es incierto, existe sospecha de otro proceso abdominal o el paciente no mejora tras 48–72 horas de manejo, o presenta deterioro que obliga a investigar complicaciones. La necrosis pancreática puede no delimitarse adecuadamente en estudios demasiado tempranos. La ecografía conserva un papel importante para identificar colelitiasis y evaluar la vía biliar.`,
  perlaENARM: `No solicites tomografía temprana de rutina si el diagnóstico está claro y el paciente evoluciona favorablemente. Considera imagen ante incertidumbre, deterioro o falta de mejoría.`,
  gpc: {
    mexico: "Verificar la GPC mexicana vigente aplicable a pancreatitis aguda.",
    internacional: "ACG Clinical Guideline: Management of Acute Pancreatitis, 2024."
  },
  bibliografia: [
    "Tenner S, et al. ACG Clinical Guideline: Management of Acute Pancreatitis. Am J Gastroenterol. 2024.",
    "Banks PA, et al. Revised Atlanta classification. Gut. 2013;62:102-111."
  ]
},
{
  id: "GASTRO-115",
  especialidad: "Gastroenterología",
  tema: "Pancreatitis aguda",
  subtema: "Clasificación de gravedad de Atlanta revisada",
  dificultad: "Extrema",
  caso: `Masculino de 67 años con pancreatitis aguda necrosante desarrolla lesión renal aguda y requiere ventilación mecánica por insuficiencia respiratoria. A pesar del tratamiento intensivo, la disfunción respiratoria y renal persiste durante cuatro días. La tomografía muestra necrosis pancreática y colecciones peripancreáticas. ¿Cómo debe clasificarse la gravedad según Atlanta revisada?`,
  pregunta: "¿Cuál es la clasificación correcta de la pancreatitis?",
  opciones: [
    "Leve, porque las alteraciones de laboratorio pueden normalizarse posteriormente.",
    "Moderadamente grave, porque la necrosis pancreática siempre pertenece a esta categoría.",
    "Grave, porque existe falla orgánica persistente durante más de 48 horas.",
    "Leve, siempre que no exista infección documentada de la necrosis.",
    "Moderadamente grave, porque la clasificación depende exclusivamente de la presencia de colecciones."
  ],
  respuestaCorrecta: 2,
  explicacion: `La clasificación de Atlanta revisada distingue pancreatitis leve, moderadamente grave y grave. La leve no presenta falla orgánica ni complicaciones locales o sistémicas. La moderadamente grave se caracteriza por falla orgánica transitoria, que se resuelve en 48 horas o menos, y/o complicaciones locales o sistémicas sin falla orgánica persistente. La pancreatitis grave se define por falla orgánica persistente durante más de 48 horas, única o múltiple. En este caso, la insuficiencia respiratoria y la lesión renal con persistencia superior a 48 horas establecen la categoría grave. La necrosis aislada no basta por sí sola para clasificarla como grave.`,
  perlaENARM: `Atlanta revisada: falla orgánica persistente >48 horas = pancreatitis grave. La necrosis local no determina por sí sola la categoría de gravedad.`,
  gpc: {
    mexico: "Consultar protocolos institucionales vigentes para pancreatitis grave y manejo en cuidados intensivos.",
    internacional: "Revised Atlanta Classification, 2012; ACG Clinical Guideline, 2024."
  },
  bibliografia: [
    "Banks PA, et al. Classification of acute pancreatitis—2012: revision of the Atlanta classification. Gut. 2013;62:102-111.",
    "Tenner S, et al. ACG Clinical Guideline: Management of Acute Pancreatitis. Am J Gastroenterol. 2024."
  ]
},
{
  id: "GASTRO-116",
  especialidad: "Gastroenterología",
  tema: "Pancreatitis aguda",
  subtema: "Colangitis concomitante y CPRE",
  dificultad: "Extrema",
  caso: `Femenina de 70 años con dolor epigástrico irradiado a la espalda presenta lipasa de 1,400 U/L, fiebre de 39 °C, ictericia, dolor en hipocondrio derecho e hipotensión. La bilirrubina total es de 6.2 mg/dL y la ecografía muestra dilatación del colédoco con un probable cálculo distal. Tiene leucocitosis y lactato elevado. Se sospecha pancreatitis aguda biliar complicada con colangitis y se inicia reanimación, antibióticos y soporte hemodinámico.`,
  pregunta: "¿Cuál es la estrategia definitiva más apropiada para controlar el foco biliar?",
  opciones: [
    "Esperar cuatro semanas para realizar CPRE, aunque persista la sepsis biliar.",
    "Indicar colecistectomía aislada y omitir la descompresión de la vía biliar.",
    "Realizar CPRE urgente para drenaje y descompresión biliar, una vez iniciada la estabilización y con coordinación del equipo endoscópico.",
    "Administrar únicamente antibióticos hasta que se normalice la lipasa.",
    "Realizar pancreatografía diagnóstica sin intentar drenar la vía biliar."
  ],
  respuestaCorrecta: 2,
  explicacion: `La pancreatitis biliar acompañada de colangitis requiere antibióticos, reanimación y descompresión biliar urgente, habitualmente mediante CPRE terapéutica. La prioridad es controlar la infección y la obstrucción persistente; no debe esperarse a que se normalice la lipasa. En cambio, la CPRE temprana no se recomienda de rutina en pancreatitis biliar sin colangitis ni evidencia de obstrucción persistente, porque puede añadir riesgos sin beneficio suficiente. En pacientes inestables, la coordinación para drenaje debe realizarse en paralelo con la reanimación y el soporte de órganos.`,
  perlaENARM: `Pancreatitis biliar + colangitis = antibióticos y descompresión biliar urgente mediante CPRE, si está disponible. Sin colangitis ni obstrucción persistente, la CPRE urgente no es rutinaria.`,
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de pancreatitis aguda, colangitis y coledocolitiasis.",
    internacional: "ACG Clinical Guideline: Management of Acute Pancreatitis, 2024; Tokyo Guidelines para colangitis."
  },
  bibliografia: [
    "Tenner S, et al. ACG Clinical Guideline: Management of Acute Pancreatitis. Am J Gastroenterol. 2024.",
    "Kiriyama S, et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholangitis. J Hepatobiliary Pancreat Sci. 2018."
  ]
},
{
  id: "GASTRO-117",
  especialidad: "Gastroenterología",
  tema: "Pancreatitis aguda",
  subtema: "Colecistectomía en pancreatitis biliar leve",
  dificultad: "Alta",
  caso: `Femenina de 38 años ingresa por pancreatitis aguda biliar. Presentó dolor epigástrico y elevación de lipasa, pero no desarrolla falla orgánica ni complicaciones locales. A las 48 horas tolera alimentación oral, el dolor ha disminuido y las pruebas de función renal son normales. La ecografía confirma colelitiasis y no hay evidencia de coledocolitiasis residual. Se plantea el alta hospitalaria sin cirugía y programar colecistectomía dentro de tres meses.`,
  pregunta: "¿Cuál es la estrategia más apropiada para prevenir recurrencias?",
  opciones: [
    "Realizar colecistectomía durante el mismo ingreso, una vez que la paciente se encuentre clínicamente apta.",
    "Indicar colecistectomía únicamente si presenta un segundo episodio.",
    "Realizar necrosectomía pancreática profiláctica antes del alta.",
    "Indicar CPRE con esfinterotomía en todas las pacientes y omitir la colecistectomía.",
    "Mantener ayuno durante dos semanas para evitar recurrencia y después dar de alta sin cirugía."
  ],
  respuestaCorrecta: 0,
  explicacion: `En pancreatitis aguda biliar leve se recomienda realizar colecistectomía durante el mismo ingreso, una vez que la paciente se ha estabilizado y está clínicamente apta. Diferirla expone a nuevos episodios de pancreatitis y otros eventos biliares durante el intervalo. Esta recomendación no debe extrapolarse de forma automática a pancreatitis grave con necrosis o colecciones peripancreáticas significativas, en las que el momento de la cirugía requiere individualización. Si existe contraindicación quirúrgica, deben valorarse alternativas específicas de acuerdo con el riesgo y la anatomía biliar.`,
  perlaENARM: `Pancreatitis biliar leve: colecistectomía durante el mismo ingreso. En enfermedad grave con colecciones, el momento quirúrgico se individualiza.`,
  gpc: {
    mexico: "Verificar la GPC mexicana vigente para pancreatitis biliar y colecistectomía.",
    internacional: "ACG Clinical Guideline: Management of Acute Pancreatitis, 2024; evidencia sobre colecistectomía durante el ingreso."
  },
  bibliografia: [
    "Tenner S, et al. ACG Clinical Guideline: Management of Acute Pancreatitis. Am J Gastroenterol. 2024.",
    "da Costa DW, et al. Same-admission versus interval cholecystectomy for mild gallstone pancreatitis. Evidencia clínica sobre prevención de recurrencias."
  ]
},
{
  id: "GASTRO-118",
  especialidad: "Gastroenterología",
  tema: "Pancreatitis aguda",
  subtema: "Antibióticos y necrosis pancreática estéril",
  dificultad: "Extrema",
  caso: `Masculino de 55 años con pancreatitis aguda grave permanece hospitalizado en cuidados intensivos. La tomografía realizada por deterioro clínico muestra áreas de necrosis pancreática, sin gas dentro de las colecciones. Tiene fiebre intermitente y leucocitosis, pero los hemocultivos son negativos y no se ha identificado otro foco infeccioso. No presenta colangitis ni neumonía. Se propone iniciar meropenem durante 14 días exclusivamente porque la tomografía demuestra necrosis.`,
  pregunta: "¿Cuál es la conducta más apropiada respecto al uso de antibióticos?",
  opciones: [
    "Iniciar carbapenémico de amplio espectro de manera obligatoria en toda necrosis pancreática.",
    "Administrar profilaxis antibiótica durante cuatro semanas aunque no exista infección sospechada.",
    "No indicar antibióticos profilácticos por necrosis estéril; investigar causas de fiebre y administrar tratamiento antimicrobiano si surge evidencia o sospecha clínica fundada de infección.",
    "Utilizar antifúngicos de rutina para prevenir infección por Candida.",
    "Indicar antibióticos orales de baja absorción como tratamiento definitivo de la necrosis."
  ],
  respuestaCorrecta: 2,
  explicacion: `La necrosis pancreática estéril no constituye por sí misma una indicación de antibióticos profilácticos. La fiebre y la leucocitosis pueden reflejar inflamación sistémica estéril, aunque deben investigarse otras fuentes y reevaluarse la evolución. La sospecha de necrosis infectada aumenta con deterioro clínico, bacteriemia, gas dentro de la colección u otros hallazgos compatibles. Cuando se sospecha o confirma infección, se seleccionan antibióticos con penetración adecuada en tejido necrótico según el contexto y los patrones microbiológicos. La profilaxis rutinaria no ha demostrado un beneficio suficiente y favorece efectos adversos y resistencia antimicrobiana.`,
  perlaENARM: `Necrosis pancreática no equivale a necrosis infectada. No uses antibióticos profilácticos de rutina; reserva el tratamiento para infección sospechada o documentada.`,
  gpc: {
    mexico: "Consultar protocolos institucionales vigentes para pancreatitis necrosante e infección intraabdominal.",
    internacional: "ACG Clinical Guideline: Management of Acute Pancreatitis, 2024."
  },
  bibliografia: [
    "Tenner S, et al. ACG Clinical Guideline: Management of Acute Pancreatitis. Am J Gastroenterol. 2024.",
    "Leppäniemi A, et al. WSES guidelines for the management of severe acute pancreatitis. World J Emerg Surg. 2019."
  ]
},
{
  id: "GASTRO-119",
  especialidad: "Gastroenterología",
  tema: "Pancreatitis aguda",
  subtema: "Nutrición enteral y realimentación temprana",
  dificultad: "Alta",
  caso: `Femenina de 49 años ingresa por pancreatitis aguda intersticial edematosa sin falla orgánica. Después de 24 horas de analgesia y fluidoterapia, el dolor disminuye, no presenta vómitos y manifiesta apetito. La paciente pregunta si debe permanecer en ayuno absoluto durante cinco a siete días para evitar estimular la secreción pancreática. No existen signos de íleo, obstrucción intestinal ni intolerancia alimentaria.`,
  pregunta: "¿Cuál es la recomendación nutricional más apropiada?",
  opciones: [
    "Mantener ayuno absoluto durante al menos siete días en todos los pacientes.",
    "Iniciar nutrición parenteral total inmediatamente, aunque tolere la vía oral.",
    "Reiniciar alimentación oral temprana según tolerancia, preferentemente con dieta sólida baja en grasa cuando sea apropiado.",
    "Indicar exclusivamente agua y líquidos claros durante dos semanas antes de avanzar la dieta.",
    "Evitar toda nutrición hasta que la lipasa se normalice."
  ],
  respuestaCorrecta: 2,
  explicacion: `En pancreatitis aguda leve se recomienda iniciar alimentación oral temprana según tolerancia, sin esperar a la normalización de enzimas pancreáticas. Puede utilizarse una dieta sólida baja en grasa desde el inicio si el estado clínico lo permite. El ayuno prolongado no ofrece un beneficio sistemático y puede contribuir a desnutrición y pérdida de masa muscular. Si el paciente no tolera la vía oral o presenta enfermedad moderadamente grave o grave con imposibilidad de alimentación adecuada, se prefiere la nutrición enteral sobre la parenteral cuando sea factible.`,
  perlaENARM: `Pancreatitis leve: alimentación oral temprana según tolerancia; no esperes a normalizar la lipasa. Si no es posible la vía oral, prioriza nutrición enteral cuando esté indicada.`,
  gpc: {
    mexico: "Verificar la GPC mexicana vigente y el protocolo nutricional institucional aplicable.",
    internacional: "ACG Clinical Guideline: Management of Acute Pancreatitis, 2024."
  },
  bibliografia: [
    "Tenner S, et al. ACG Clinical Guideline: Management of Acute Pancreatitis. Am J Gastroenterol. 2024.",
    "ESPEN guideline on clinical nutrition in acute and chronic pancreatitis."
  ]
},
{
  id: "GASTRO-120",
  especialidad: "Gastroenterología",
  tema: "Pancreatitis aguda",
  subtema: "Necrosis pancreática infectada y estrategia escalonada",
  dificultad: "Extrema",
  caso: `Masculino de 61 años con pancreatitis aguda necrosante grave desarrolla deterioro clínico durante la tercera semana de hospitalización, con fiebre persistente, bacteriemia por bacilos gramnegativos y gas dentro de una colección necrótica encapsulada en la tomografía. Se inicia tratamiento antimicrobiano dirigido y soporte de órganos. El paciente se encuentra actualmente estable con vasopresores en descenso, pero la colección aún no está completamente organizada. Se solicita valoración para control definitivo del foco.`,
  pregunta: "En ausencia de una indicación inmediata de cirugía abierta, ¿cuál es el enfoque preferido para el manejo de la necrosis infectada?",
  opciones: [
    "Realizar necrosectomía abierta inmediata en todos los pacientes, sin importar la maduración de la colección.",
    "Mantener antibióticos indefinidamente y nunca intervenir la colección.",
    "Aplicar una estrategia escalonada: antibióticos, drenaje endoscópico o percutáneo según anatomía y experiencia, y necrosectomía mínimamente invasiva si persiste la necesidad; diferir la intervención cuando sea posible hasta que la colección esté organizada.",
    "Realizar CPRE de manera rutinaria para extraer tejido necrótico pancreático.",
    "Indicar resección total del páncreas como primera intervención."
  ],
  respuestaCorrecta: 2,
  explicacion: `La necrosis pancreática infectada requiere antibióticos y valoración multidisciplinaria. En pacientes estables, retrasar la intervención hasta que la colección esté mejor delimitada y encapsulada, con frecuencia alrededor de cuatro semanas desde el inicio, puede facilitar el procedimiento y reducir complicaciones. Cuando se requiere control del foco, se prefiere una estrategia escalonada: drenaje endoscópico o percutáneo según la localización, seguido de necrosectomía mínimamente invasiva si no hay respuesta suficiente. La cirugía abierta se reserva para escenarios seleccionados, como fracaso de alternativas menos invasivas o complicaciones que exijan intervención urgente. La urgencia y la técnica deben adaptarse a la evolución clínica y a la anatomía.`,
  perlaENARM: `Necrosis pancreática infectada: antibióticos y estrategia escalonada. Si el paciente lo permite, difiere el desbridamiento hasta que la colección esté organizada; no todos requieren cirugía abierta.`,
  gpc: {
    mexico: "Verificar la GPC mexicana vigente y el protocolo institucional para pancreatitis necrosante infectada.",
    internacional: "ACG Clinical Guideline: Management of Acute Pancreatitis, 2024; WSES guidelines for severe acute pancreatitis."
  },
  bibliografia: [
    "Tenner S, et al. ACG Clinical Guideline: Management of Acute Pancreatitis. Am J Gastroenterol. 2024.",
    "Leppäniemi A, et al. WSES guidelines for the management of severe acute pancreatitis. World J Emerg Surg. 2019.",
    "van Santvoort HC, et al. A step-up approach or open necrosectomy for necrotizing pancreatitis. N Engl J Med. 2010;362:1491-1502."
  ]
},

{
  id: "GASTRO-121",
  especialidad: "Gastroenterología",
  tema: "Colecistitis aguda",
  subtema: "Diagnóstico clínico y ultrasonográfico",
  dificultad: "Media",
  caso: `Femenina de 42 años con obesidad acude por dolor continuo en hipocondrio derecho de 18 horas de evolución, náuseas y fiebre de 38.2 °C. A la exploración presenta dolor localizado en hipocondrio derecho y signo de Murphy positivo. La biometría hemática muestra leucocitosis de 14,800/µL. El ultrasonido abdominal identifica cálculos vesiculares, engrosamiento de la pared de 5 mm y líquido perivesicular. No existe dilatación de la vía biliar.`,
  pregunta: "¿Cuál es el diagnóstico más probable?",
  opciones: [
    "Cólico biliar no complicado.",
    "Colecistitis aguda calculosa.",
    "Colangitis aguda.",
    "Pancreatitis aguda de origen biliar.",
    "Hepatitis aguda viral."
  ],
  respuestaCorrecta: 1,
  explicacion: `El dolor persistente en hipocondrio derecho, fiebre, signo de Murphy positivo y leucocitosis, junto con cálculos, engrosamiento de la pared vesicular y líquido perivesicular, sustentan el diagnóstico de colecistitis aguda calculosa. El cólico biliar suele producir dolor transitorio sin inflamación sistémica ni hallazgos inflamatorios persistentes en la pared vesicular. La ausencia de dilatación del colédoco y de datos de obstrucción biliar reduce la sospecha de coledocolitiasis, aunque no la excluye por completo.`,
  perlaENARM: `Colecistitis aguda: integrar signos locales de inflamación, respuesta inflamatoria sistémica e imagen compatible. El ultrasonido es el estudio inicial de elección en la mayoría de los pacientes.`,
  gpc: {
    mexico: "Verificar el catálogo CENETEC/IMSS para la GPC mexicana vigente sobre colecistitis y colelitiasis.",
    internacional: "Tokyo Guidelines 2018; guía WSES 2020 sobre colecistitis aguda calculosa."
  },
  bibliografia: [
    "Yokoe M, et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholecystitis. J Hepatobiliary Pancreat Sci. 2018.",
    "Pisano M, et al. 2020 World Society of Emergency Surgery updated guidelines for the diagnosis and treatment of acute calculus cholecystitis. World J Emerg Surg. 2020;15:61."
  ]
},
{
  id: "GASTRO-122",
  especialidad: "Gastroenterología",
  tema: "Colecistitis aguda",
  subtema: "Diagnóstico diferencial: cólico biliar",
  dificultad: "Fácil",
  caso: `Masculino de 35 años presenta dolor en hipocondrio derecho después de una comida abundante, con irradiación a la región escapular derecha. El episodio dura 90 minutos y desaparece espontáneamente. Está afebril, sin ictericia y con signo de Murphy negativo. La biometría hemática y las pruebas hepáticas son normales. El ultrasonido muestra cálculos vesiculares, sin engrosamiento de la pared, líquido perivesicular ni dilatación de la vía biliar.`,
  pregunta: "¿Cuál es el diagnóstico más probable?",
  opciones: [
    "Colecistitis aguda calculosa.",
    "Colangitis aguda.",
    "Cólico biliar no complicado.",
    "Absceso hepático.",
    "Pancreatitis aguda."
  ],
  respuestaCorrecta: 2,
  explicacion: `El dolor relacionado con comidas, de duración limitada y con resolución espontánea, en presencia de cálculos sin datos clínicos, analíticos o ultrasonográficos de inflamación, es compatible con cólico biliar. La persistencia del dolor, fiebre, Murphy positivo y cambios inflamatorios en el ultrasonido apoyarían colecistitis aguda. Debe indicarse valoración para tratamiento definitivo de la colelitiasis sintomática y explicar los signos de alarma que requieren atención urgente.`,
  perlaENARM: `Cólico biliar: dolor transitorio por obstrucción pasajera del conducto cístico, sin inflamación sistémica ni hallazgos de colecistitis.`,
  gpc: {
    mexico: "Verificar la GPC mexicana vigente sobre colelitiasis sintomática.",
    internacional: "WSES 2020; Tokyo Guidelines 2018."
  },
  bibliografia: [
    "Pisano M, et al. WSES guidelines for acute calculous cholecystitis. World J Emerg Surg. 2020;15:61.",
    "Yokoe M, et al. Tokyo Guidelines 2018. J Hepatobiliary Pancreat Sci. 2018."
  ]
},
{
  id: "GASTRO-123",
  especialidad: "Gastroenterología",
  tema: "Colecistitis aguda",
  subtema: "Tratamiento definitivo y momento de la cirugía",
  dificultad: "Alta",
  caso: `Femenina de 47 años con colecistitis aguda calculosa confirmada por ultrasonido. Tiene dolor persistente en hipocondrio derecho, fiebre de 38 °C y leucocitosis de 13,200/µL. Está hemodinámicamente estable, sin disfunción orgánica ni contraindicación anestésica. Se inicia analgesia, hidratación intravenosa y tratamiento antimicrobiano según la evaluación clínica.`,
  pregunta: "¿Cuál es el tratamiento definitivo preferido?",
  opciones: [
    "Antibióticos durante seis semanas sin considerar cirugía.",
    "Colecistectomía laparoscópica temprana durante el mismo ingreso, si existe experiencia quirúrgica y las condiciones clínicas lo permiten.",
    "Colecistostomía percutánea obligatoria en toda colecistitis aguda.",
    "CPRE urgente como tratamiento definitivo de la inflamación vesicular aislada.",
    "Colecistectomía electiva después de un año, independientemente de la evolución."
  ],
  respuestaCorrecta: 1,
  explicacion: `La colecistectomía laparoscópica temprana durante el mismo ingreso es el tratamiento definitivo preferido en pacientes aptos con colecistitis aguda calculosa. El tratamiento conservador puede mejorar temporalmente el cuadro, pero no elimina la vesícula ni el riesgo de recurrencia. La colecistostomía percutánea se reserva para pacientes seleccionados con riesgo quirúrgico elevado o que no pueden someterse a cirugía en ese momento. La CPRE está indicada ante determinadas situaciones de coledocolitiasis o colangitis, no como tratamiento rutinario de una colecistitis aislada.`,
  perlaENARM: `Colecistitis aguda calculosa en paciente operable: colecistectomía laparoscópica temprana. No confundir con la indicación de CPRE, que depende de enfermedad de la vía biliar.`,
  gpc: {
    mexico: "Verificar la GPC mexicana vigente sobre colecistitis aguda calculosa.",
    internacional: "WSES 2020 guidelines for acute calculous cholecystitis."
  },
  bibliografia: [
    "Pisano M, et al. 2020 WSES updated guidelines for acute calculous cholecystitis. World J Emerg Surg. 2020;15:61."
  ]
},
{
  id: "GASTRO-124",
  especialidad: "Gastroenterología",
  tema: "Colecistitis aguda",
  subtema: "Criterios de gravedad de Tokyo Guidelines",
  dificultad: "Extrema",
  caso: `Masculino de 76 años ingresa por colecistitis aguda calculosa. Presenta fiebre, dolor en hipocondrio derecho y leucocitosis. Durante la valoración se documenta creatinina de 2.4 mg/dL, con deterioro renal agudo respecto a su función basal. No existe antecedente conocido de enfermedad renal avanzada que explique el hallazgo. Se encuentra somnoliento, pero responde a estímulos y no presenta datos de encefalopatía hepática.`,
  pregunta: "Según los criterios de gravedad de Tokyo Guidelines, ¿qué categoría debe sospecharse por la disfunción renal?",
  opciones: [
    "Grado I, porque toda colecistitis sin perforación es leve.",
    "Grado II, porque la edad mayor de 70 años determina por sí sola esta categoría.",
    "Grado III, por disfunción orgánica renal.",
    "No puede clasificarse hasta disponer de histopatología.",
    "Grado I, porque la creatinina no se utiliza en la clasificación."
  ],
  respuestaCorrecta: 2,
  explicacion: `Tokyo Guidelines clasifica como grado III la colecistitis aguda que presenta disfunción de al menos un sistema orgánico. La disfunción renal incluye oliguria o creatinina sérica superior a 2.0 mg/dL. Deben evaluarse otras disfunciones, la estabilidad hemodinámica y el estado neurológico, además de buscar factores que contribuyan al deterioro renal. La clasificación de gravedad orienta la necesidad de soporte orgánico, la selección del momento y tipo de intervención y la valoración multidisciplinaria.`,
  perlaENARM: `Tokyo Guidelines: grado III implica disfunción orgánica. En la clasificación renal, creatinina >2.0 mg/dL u oliguria son criterios relevantes.`,
  gpc: {
    mexico: "Consultar el protocolo institucional vigente para colecistitis grave y manejo perioperatorio.",
    internacional: "Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholecystitis."
  },
  bibliografia: [
    "Yokoe M, et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholecystitis. J Hepatobiliary Pancreat Sci. 2018."
  ]
},
{
  id: "GASTRO-125",
  especialidad: "Gastroenterología",
  tema: "Colecistitis aguda",
  subtema: "Paciente con riesgo quirúrgico elevado",
  dificultad: "Alta",
  caso: `Masculino de 82 años con insuficiencia cardiaca descompensada y enfermedad pulmonar avanzada presenta colecistitis aguda calculosa. Persiste con fiebre y dolor a pesar del tratamiento inicial. El equipo considera que la cirugía inmediata tiene un riesgo prohibitivo debido a su estado cardiopulmonar actual. El ultrasonido confirma una vesícula distendida con cálculos y cambios inflamatorios.`,
  pregunta: "¿Cuál es una opción razonable para el control inicial del foco cuando el paciente no puede someterse a cirugía?",
  opciones: [
    "Mantener antibióticos indefinidamente sin reevaluar la respuesta.",
    "Considerar drenaje vesicular, por ejemplo colecistostomía percutánea, junto con tratamiento médico y reevaluación multidisciplinaria.",
    "Realizar colecistectomía laparoscópica inmediata sin valoración anestésica.",
    "Indicar CPRE aunque no exista evidencia de obstrucción del colédoco.",
    "Administrar únicamente analgésicos y dar de alta al paciente."
  ],
  respuestaCorrecta: 1,
  explicacion: `En pacientes seleccionados que no toleran cirugía debido a inestabilidad o riesgo elevado, el drenaje vesicular puede proporcionar control del foco. La colecistostomía percutánea es una opción habitual, aunque la decisión debe individualizarse de acuerdo con la anatomía, disponibilidad de experiencia, estado clínico y alternativas endoscópicas. No sustituye automáticamente a la colecistectomía definitiva en todos los pacientes: una vez que mejore el estado general, debe reevaluarse el riesgo quirúrgico y el plan a largo plazo.`,
  perlaENARM: `Paciente no operable con colecistitis persistente: valorar drenaje vesicular y manejo multidisciplinario. La colecistostomía no es obligatoria en todos los pacientes de edad avanzada; importa el riesgo real y el estado clínico.`,
  gpc: {
    mexico: "Verificar la GPC mexicana vigente y el protocolo local para drenaje vesicular en pacientes de alto riesgo.",
    internacional: "WSES 2020; Tokyo Guidelines 2018."
  },
  bibliografia: [
    "Pisano M, et al. WSES updated guidelines for acute calculous cholecystitis. World J Emerg Surg. 2020;15:61.",
    "Yokoe M, et al. Tokyo Guidelines 2018. J Hepatobiliary Pancreat Sci. 2018."
  ]
},
{
  id: "GASTRO-126",
  especialidad: "Gastroenterología",
  tema: "Colecistitis aguda",
  subtema: "Diagnóstico por imagen cuando el ultrasonido es equívoco",
  dificultad: "Alta",
  caso: `Femenina de 58 años con dolor persistente en hipocondrio derecho, fiebre y leucocitosis. El ultrasonido abdominal no es concluyente debido a obesidad y gas intestinal; muestra cálculos, pero no permite valorar adecuadamente la pared vesicular ni el líquido perivesicular. La sospecha clínica de colecistitis aguda continúa siendo alta y no se identifica dilatación de la vía biliar.`,
  pregunta: "Si persiste la incertidumbre diagnóstica y está disponible, ¿qué estudio puede ser especialmente útil para confirmar colecistitis aguda?",
  opciones: [
    "Radiografía simple de abdomen como prueba confirmatoria.",
    "Gammagrafía hepatobiliar con ácido iminodiacético (HIDA), según disponibilidad y contexto clínico.",
    "Colonoscopia urgente.",
    "Electroencefalograma.",
    "Densitometría ósea."
  ],
  respuestaCorrecta: 1,
  explicacion: `Cuando la sospecha de colecistitis aguda es alta y el ultrasonido resulta equívoco, la gammagrafía hepatobiliar puede ayudar a demostrar obstrucción del conducto cístico mediante la falta de visualización de la vesícula bajo condiciones técnicas adecuadas. La elección del estudio alternativo depende de la disponibilidad, el estado del paciente y los diagnósticos diferenciales. La tomografía puede ser útil para identificar complicaciones o diagnósticos alternativos, mientras que la colangiorresonancia se orienta especialmente a la evaluación de la vía biliar.`,
  perlaENARM: `Ultrasonido no concluyente con sospecha persistente de colecistitis: considera HIDA cuando esté disponible; TC o RM pueden aportar información según la pregunta clínica.`,
  gpc: {
    mexico: "Verificar el protocolo institucional vigente para imagen en sospecha de colecistitis aguda.",
    internacional: "Tokyo Guidelines 2018; criterios de imagen del American College of Radiology."
  },
  bibliografia: [
    "Yokoe M, et al. Tokyo Guidelines 2018. J Hepatobiliary Pancreat Sci. 2018.",
    "American College of Radiology. ACR Appropriateness Criteria: Right Upper Quadrant Pain."
  ]
},
{
  id: "GASTRO-127",
  especialidad: "Gastroenterología",
  tema: "Colecistitis aguda",
  subtema: "Antibióticos y control del foco",
  dificultad: "Alta",
  caso: `Femenina de 63 años con colecistitis aguda calculosa presenta fiebre, leucocitosis y dolor persistente en hipocondrio derecho. Se decide ingreso hospitalario y tratamiento antimicrobiano empírico mientras se organiza el control del foco. No presenta choque, alergias medicamentosas conocidas ni antecedentes de colonización por microorganismos multirresistentes. La selección del esquema debe considerar gravedad, función renal, exposición previa a antibióticos y epidemiología local.`,
  pregunta: "¿Cuál es el principio más apropiado para seleccionar el tratamiento antimicrobiano?",
  opciones: [
    "Utilizar carbapenémico en todos los casos, independientemente de gravedad y factores de resistencia.",
    "Seleccionar un esquema empírico acorde con gravedad, riesgo microbiológico y patrones locales, y ajustarlo según cultivos y evolución.",
    "Evitar antibióticos incluso si existe infección sistémica.",
    "Prolongar antibióticos durante meses en todos los pacientes después de una colecistectomía con control adecuado del foco.",
    "Elegir tratamiento exclusivamente por el resultado de la lipasa."
  ],
  respuestaCorrecta: 1,
  explicacion: `La selección antimicrobiana debe adaptarse a la gravedad clínica, el riesgo de microorganismos resistentes, la exposición antibiótica previa, la función renal, las alergias y la epidemiología local. El control oportuno del foco es esencial y no debe sustituirse por prolongación indiscriminada de antibióticos. Tras una colecistectomía por infección no complicada con control adecuado del foco, la continuación posoperatoria prolongada no suele aportar beneficio. En enfermedad complicada, bacteriemia o control incompleto, la duración se individualiza de acuerdo con la respuesta clínica y los cultivos.`,
  perlaENARM: `Colecistitis: antibiótico según gravedad y riesgo microbiológico, más control del foco. Evita esquemas de amplio espectro y duraciones prolongadas sin indicación.`,
  gpc: {
    mexico: "Verificar la GPC mexicana vigente sobre infección biliar y el antibiograma institucional.",
    internacional: "WSES 2020; Tokyo Guidelines para tratamiento antimicrobiano de infecciones biliares."
  },
  bibliografia: [
    "Pisano M, et al. WSES updated guidelines for acute calculous cholecystitis. World J Emerg Surg. 2020;15:61.",
    "Gomi H, et al. Tokyo Guidelines 2018: antimicrobial therapy for acute cholangitis and cholecystitis. J Hepatobiliary Pancreat Sci. 2018."
  ]
},
{
  id: "GASTRO-128",
  especialidad: "Gastroenterología",
  tema: "Colecistitis aguda",
  subtema: "Colecistitis enfisematosa",
  dificultad: "Extrema",
  caso: `Masculino de 69 años con diabetes mellitus tipo 2 mal controlada presenta dolor intenso en hipocondrio derecho, fiebre y deterioro general. La tomografía abdominal muestra gas en la pared de la vesícula biliar y en la luz, con cambios inflamatorios perivesiculares. No existe antecedente de instrumentación biliar reciente que explique el gas. El paciente presenta taquicardia y datos de respuesta inflamatoria sistémica.`,
  pregunta: "¿Cuál es la interpretación más apropiada y la conducta general?",
  opciones: [
    "Es un hallazgo normal en pacientes diabéticos y no requiere intervención.",
    "Sugiere colecistitis enfisematosa, una forma grave que requiere reanimación, antibióticos y control urgente del foco.",
    "Confirma colecistitis crónica sin riesgo de complicaciones.",
    "Indica exclusivamente pancreatitis aguda intersticial.",
    "Debe tratarse únicamente con analgésicos orales y seguimiento ambulatorio."
  ],
  respuestaCorrecta: 1,
  explicacion: `La presencia de gas en la pared vesicular, especialmente sin instrumentación previa, sugiere colecistitis enfisematosa, una infección grave asociada con mayor riesgo de necrosis y perforación. Se requiere evaluación urgente, reanimación, antibióticos intravenosos con cobertura apropiada y valoración quirúrgica inmediata. La elección entre colecistectomía y drenaje depende de estabilidad, riesgo operatorio, extensión de la enfermedad y recursos disponibles. No debe manejarse como cólico biliar simple.`,
  perlaENARM: `Gas en la pared vesicular + diabetes + síndrome infeccioso = sospecha de colecistitis enfisematosa. Es una urgencia con necesidad de control oportuno del foco.`,
  gpc: {
    mexico: "Consultar protocolo institucional de urgencias quirúrgicas e infección biliar grave.",
    internacional: "Tokyo Guidelines 2018; WSES 2020."
  },
  bibliografia: [
    "Yokoe M, et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholecystitis. J Hepatobiliary Pancreat Sci. 2018.",
    "Pisano M, et al. WSES guidelines for acute calculous cholecystitis. World J Emerg Surg. 2020;15:61."
  ]
},
{
  id: "GASTRO-129",
  especialidad: "Gastroenterología",
  tema: "Colecistitis aguda",
  subtema: "Colecistitis y sospecha de coledocolitiasis",
  dificultad: "Extrema",
  caso: `Femenina de 56 años con colecistitis aguda calculosa presenta bilirrubina total de 4.8 mg/dL, ictericia y elevación de fosfatasa alcalina. El ultrasonido identifica cálculos vesiculares y colédoco dilatado de 9 mm, pero no visualiza directamente un cálculo en la vía biliar. Está afebril y hemodinámicamente estable, sin datos clínicos de colangitis. Se debe definir si requiere intervención endoscópica antes de la cirugía.`,
  pregunta: "¿Cuál es el enfoque más apropiado ante la sospecha de coledocolitiasis?",
  opciones: [
    "Descartar coledocolitiasis porque no se observa directamente un cálculo en el ultrasonido.",
    "Realizar evaluación de probabilidad de coledocolitiasis; según criterios y contexto, utilizar CPRE terapéutica si el riesgo es alto o colangiorresonancia/ultrasonido endoscópico si persiste incertidumbre.",
    "Indicar CPRE diagnóstica en todos los pacientes con colecistitis, independientemente del riesgo.",
    "Administrar antibióticos y omitir toda evaluación de la vía biliar.",
    "Realizar colonoscopia antes de cualquier decisión quirúrgica."
  ],
  respuestaCorrecta: 1,
  explicacion: `La ictericia, la hiperbilirrubinemia y la dilatación del colédoco elevan la sospecha de coledocolitiasis. La estrategia depende de la probabilidad preprueba y de criterios de alto riesgo. Cuando la probabilidad es alta y existe indicación terapéutica, la CPRE puede permitir extracción del cálculo o drenaje. En pacientes con probabilidad intermedia, la colangiorresonancia o el ultrasonido endoscópico pueden confirmar o excluir cálculos y evitar una CPRE innecesaria, que conlleva riesgos como pancreatitis, hemorragia y perforación. La ausencia de fiebre no excluye coledocolitiasis.`,
  perlaENARM: `No uses CPRE solo como prueba diagnóstica si puedes aclarar una probabilidad intermedia con colangiorresonancia o ultrasonido endoscópico. La CPRE es principalmente terapéutica.`,
  gpc: {
    mexico: "Verificar la GPC mexicana vigente sobre coledocolitiasis y colecistitis aguda.",
    internacional: "ASGE guideline on the role of endoscopy in the evaluation and management of choledocholithiasis; WSES 2020."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. ASGE guideline on the role of endoscopy in the evaluation and management of choledocholithiasis. Gastrointest Endosc. 2019.",
    "Pisano M, et al. WSES guidelines for acute calculous cholecystitis. World J Emerg Surg. 2020;15:61."
  ]
},
{
  id: "GASTRO-130",
  especialidad: "Gastroenterología",
  tema: "Colecistitis aguda",
  subtema: "Complicación: perforación vesicular",
  dificultad: "Extrema",
  caso: `Masculino de 72 años con diabetes mellitus tipo 2 presenta cuatro días de dolor progresivo en hipocondrio derecho, fiebre persistente y deterioro clínico. A la exploración existe defensa localizada y dolor intenso. La tomografía contrastada identifica discontinuidad de la pared vesicular, líquido perivesicular complejo y una colección adyacente compatible con absceso. El paciente está taquicárdico y requiere valoración urgente por cirugía.`,
  pregunta: "¿Cuál es la complicación más probable y el principio prioritario de manejo?",
  opciones: [
    "Cólico biliar simple; alta con analgésicos.",
    "Perforación vesicular con absceso perivesicular; reanimación, antibióticos y control urgente del foco según estabilidad y hallazgos.",
    "Hepatitis viral aguda; aislamiento y observación.",
    "Síndrome de intestino irritable; tratamiento sintomático.",
    "Colelitiasis incidental sin relación con el cuadro."
  ],
  respuestaCorrecta: 1,
  explicacion: `La discontinuidad de la pared vesicular y la colección adyacente en un paciente con inflamación prolongada sugieren perforación vesicular y absceso perivesicular. Se requiere estabilización hemodinámica, antibióticos y valoración urgente para control del foco. La estrategia puede incluir colecistectomía, drenaje de colecciones o procedimientos alternativos según estabilidad, extensión de la infección, anatomía y experiencia disponible. La demora en controlar el foco puede aumentar el riesgo de sepsis y otras complicaciones.`,
  perlaENARM: `Colecistitis con discontinuidad de la pared y colección perivesicular: sospecha perforación. Prioriza estabilización, antibióticos y control urgente del foco.`,
  gpc: {
    mexico: "Consultar protocolo institucional vigente para colecistitis complicada, absceso y sepsis abdominal.",
    internacional: "Tokyo Guidelines 2018; WSES 2020."
  },
  bibliografia: [
    "Yokoe M, et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholecystitis. J Hepatobiliary Pancreat Sci. 2018.",
    "Pisano M, et al. WSES updated guidelines for acute calculous cholecystitis. World J Emerg Surg. 2020;15:61."
  ]
},

{
  id: "GASTRO-131",
  especialidad: "Gastroenterología",
  tema: "Colangitis aguda",
  subtema: "Diagnóstico clínico y tríada de Charcot",
  dificultad: "Media",
  caso: `Masculino de 67 años acude a urgencias por fiebre de 39 °C con escalofríos, dolor intenso en hipocondrio derecho e ictericia de 24 horas de evolución. Presenta leucocitos de 17,200/µL, bilirrubina total de 5.6 mg/dL y fosfatasa alcalina elevada. El ultrasonido abdominal muestra dilatación del colédoco de 11 mm y un cálculo distal probable. La presión arterial es de 118/72 mmHg y se encuentra consciente.`,
  pregunta: "¿Cuál es el diagnóstico más probable?",
  opciones: [
    "Colecistitis aguda aislada.",
    "Hepatitis viral aguda.",
    "Colangitis aguda secundaria a obstrucción biliar.",
    "Pancreatitis aguda sin compromiso biliar.",
    "Cólico biliar no complicado."
  ],
  respuestaCorrecta: 2,
  explicacion: `La combinación de fiebre, dolor en hipocondrio derecho e ictericia corresponde a la tríada de Charcot, clásica de colangitis aguda. La inflamación sistémica, la colestasis bioquímica y la dilatación de la vía biliar con probable cálculo sustentan el diagnóstico. Se deben obtener cultivos cuando sea posible sin retrasar el tratamiento, iniciar antibióticos y valorar el drenaje biliar temprano. La tríada de Charcot es útil, pero su ausencia no excluye colangitis.`,
  perlaENARM: `Tríada de Charcot: fiebre, dolor en hipocondrio derecho e ictericia. En presencia de obstrucción biliar, sospecha colangitis y evalúa la necesidad de drenaje.`,
  gpc: {
    mexico: "Verificar la GPC mexicana vigente sobre colangitis y coledocolitiasis en el catálogo CENETEC/IMSS.",
    internacional: "Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholangitis."
  },
  bibliografia: [
    "Kiriyama S, et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholangitis. J Hepatobiliary Pancreat Sci. 2018.",
    "Buxbaum JL, et al. ASGE guideline on the management of cholangitis. Gastrointest Endosc. 2021."
  ]
},
{
  id: "GASTRO-132",
  especialidad: "Gastroenterología",
  tema: "Colangitis aguda",
  subtema: "Criterios diagnósticos de Tokyo Guidelines",
  dificultad: "Alta",
  caso: `Femenina de 73 años con antecedente de colelitiasis presenta fiebre de 38.5 °C, escalofríos y malestar general, sin dolor abdominal intenso ni ictericia evidente. Los estudios muestran leucocitos de 15,000/µL, proteína C reactiva elevada, bilirrubina total de 3.1 mg/dL y fosfatasa alcalina elevada. El ultrasonido revela dilatación del colédoco de 10 mm y sospecha de coledocolitiasis. La paciente permanece hemodinámicamente estable.`,
  pregunta: "Según los criterios diagnósticos de Tokyo Guidelines, ¿cuál es la interpretación más apropiada?",
  opciones: [
    "No puede diagnosticarse colangitis porque falta la tríada completa de Charcot.",
    "Existe sospecha clínica de colangitis, sustentada por inflamación sistémica y colestasis; la imagen compatible permite establecer un diagnóstico definitivo.",
    "La dilatación del colédoco descarta colangitis.",
    "El diagnóstico exige hemocultivos positivos en todos los casos.",
    "La bilirrubina debe ser superior a 10 mg/dL para considerar colangitis."
  ],
  respuestaCorrecta: 1,
  explicacion: `Tokyo Guidelines integra tres dominios: inflamación sistémica, colestasis y hallazgos de imagen compatibles con dilatación biliar o una causa identificable de obstrucción. La sospecha diagnóstica se establece con inflamación sistémica más colestasis o imagen compatible; el diagnóstico definitivo requiere elementos de los tres dominios. No es obligatorio presentar la tríada de Charcot ni tener hemocultivos positivos. La identificación temprana es importante porque la infección puede progresar a sepsis.`,
  perlaENARM: `Tokyo Guidelines: inflamación sistémica + colestasis + imagen compatible sustentan el diagnóstico definitivo de colangitis. No esperes la tríada de Charcot completa.`,
  gpc: {
    mexico: "Verificar la GPC mexicana vigente sobre colangitis aguda.",
    internacional: "Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholangitis."
  },
  bibliografia: [
    "Kiriyama S, et al. Tokyo Guidelines 2018. J Hepatobiliary Pancreat Sci. 2018.",
    "Buxbaum JL, et al. ASGE guideline on the management of cholangitis. Gastrointest Endosc. 2021."
  ]
},
{
  id: "GASTRO-133",
  especialidad: "Gastroenterología",
  tema: "Colangitis aguda",
  subtema: "Gravedad y disfunción orgánica",
  dificultad: "Extrema",
  caso: `Masculino de 78 años con colangitis aguda por coledocolitiasis presenta fiebre, ictericia e hipotensión persistente pese a la reanimación inicial. La presión arterial media permanece en 58 mmHg y requiere noradrenalina. Está confuso y presenta oliguria. La creatinina es de 2.6 mg/dL. El ultrasonido confirma dilatación de la vía biliar con un cálculo distal.`,
  pregunta: "¿Cómo debe clasificarse la colangitis según Tokyo Guidelines 2018?",
  opciones: [
    "Grado I, porque la fiebre es el único parámetro relevante.",
    "Grado II, porque la edad avanzada excluye la categoría grave.",
    "Grado III, por disfunción cardiovascular, neurológica y renal.",
    "No puede clasificarse hasta recibir los resultados de los hemocultivos.",
    "Grado I, porque todavía no se ha realizado CPRE."
  ],
  respuestaCorrecta: 2,
  explicacion: `Tokyo Guidelines 2018 define colangitis grado III por disfunción de al menos un sistema orgánico. La necesidad de vasopresores, la alteración del estado de conciencia y la lesión renal aguda indican enfermedad grave. Se requiere soporte hemodinámico y de órganos, antibióticos intravenosos y descompresión biliar urgente, habitualmente mediante CPRE si es factible. El tratamiento de la obstrucción no debe retrasarse hasta disponer de cultivos definitivos.`,
  perlaENARM: `Colangitis grado III = disfunción orgánica. Hipotensión que requiere vasopresores, alteración de conciencia o deterioro renal son datos de gravedad.`,
  gpc: {
    mexico: "Consultar protocolos institucionales vigentes para colangitis grave, sepsis y drenaje biliar urgente.",
    internacional: "Tokyo Guidelines 2018; ASGE guideline on the management of cholangitis, 2021."
  },
  bibliografia: [
    "Kiriyama S, et al. Tokyo Guidelines 2018. J Hepatobiliary Pancreat Sci. 2018.",
    "Buxbaum JL, et al. ASGE guideline on the management of cholangitis. Gastrointest Endosc. 2021."
  ]
},
{
  id: "GASTRO-134",
  especialidad: "Gastroenterología",
  tema: "Colangitis aguda",
  subtema: "Tratamiento antimicrobiano inicial",
  dificultad: "Alta",
  caso: `Femenina de 64 años con fiebre, dolor en hipocondrio derecho, ictericia, leucocitosis y dilatación del colédoco por probable cálculo. Se encuentra estable, sin choque ni disfunción orgánica. Se establece el diagnóstico de colangitis aguda y se decide hospitalización. No tiene alergias conocidas ni antecedentes de colonización por microorganismos multirresistentes. Se dispone de cultivos y antibiograma institucional.`,
  pregunta: "¿Cuál es el principio más apropiado para iniciar el tratamiento antimicrobiano?",
  opciones: [
    "Esperar el resultado de los hemocultivos antes de administrar cualquier antibiótico.",
    "Iniciar antibióticos empíricos con cobertura apropiada para infección biliar, considerando gravedad, exposición previa, función renal y epidemiología local, y ajustar posteriormente.",
    "Administrar antifúngicos de amplio espectro a todos los pacientes.",
    "Utilizar siempre el mismo carbapenémico, independientemente del riesgo microbiológico.",
    "Indicar exclusivamente antibióticos orales y dar de alta de inmediato."
  ],
  respuestaCorrecta: 1,
  explicacion: `El tratamiento inicial incluye antimicrobianos oportunos y evaluación del control de la obstrucción. La selección debe considerar gravedad, microorganismos probables, riesgo de resistencia, exposición previa a antibióticos, función renal y patrones locales. Se obtienen hemocultivos y, cuando se realiza drenaje, cultivos biliares si están indicados, pero la toma de muestras no debe retrasar el tratamiento en pacientes graves. El esquema se ajusta a los resultados microbiológicos y a la evolución clínica.`,
  perlaENARM: `En colangitis, inicia antibióticos oportunos y planifica el control del foco. El espectro y la duración dependen de la gravedad, resistencia local, cultivos y respuesta clínica.`,
  gpc: {
    mexico: "Verificar la GPC mexicana vigente y el antibiograma institucional para infecciones biliares.",
    internacional: "Tokyo Guidelines 2018: antimicrobial therapy for acute cholangitis and cholecystitis."
  },
  bibliografia: [
    "Gomi H, et al. Tokyo Guidelines 2018: antimicrobial therapy for acute cholangitis and cholecystitis. J Hepatobiliary Pancreat Sci. 2018.",
    "Buxbaum JL, et al. ASGE guideline on the management of cholangitis. Gastrointest Endosc. 2021."
  ]
},
{
  id: "GASTRO-135",
  especialidad: "Gastroenterología",
  tema: "Colangitis aguda",
  subtema: "Drenaje biliar mediante CPRE",
  dificultad: "Extrema",
  caso: `Masculino de 69 años con colangitis aguda por coledocolitiasis presenta fiebre persistente, ictericia progresiva y leucocitosis. Se inicia reanimación y antibióticos intravenosos. El ultrasonido demuestra un cálculo obstructivo en el colédoco distal. No existe contraindicación para tratamiento endoscópico y el servicio de endoscopia terapéutica está disponible.`,
  pregunta: "¿Cuál es la intervención preferida para lograr el control de la obstrucción biliar?",
  opciones: [
    "Repetir ultrasonidos diariamente y esperar la resolución espontánea sin reevaluación.",
    "Realizar CPRE terapéutica para descomprimir la vía biliar y tratar la obstrucción según las condiciones clínicas.",
    "Indicar colecistectomía aislada como única intervención, aunque persista la obstrucción del colédoco.",
    "Administrar ácido ursodesoxicólico como única medida urgente.",
    "Realizar colonoscopia para identificar el origen de la infección."
  ],
  respuestaCorrecta: 1,
  explicacion: `La CPRE permite drenaje biliar y, cuando es factible y seguro, extracción del cálculo obstructivo. La prioridad es la descompresión oportuna, especialmente en enfermedad grave o con respuesta insuficiente al tratamiento inicial. Si el paciente está inestable o la extracción completa no es segura, puede realizarse drenaje temporal mediante prótesis o stent y completar el tratamiento en otro momento. La cirugía vesicular no sustituye el drenaje de una vía biliar infectada y obstruida.`,
  perlaENARM: `Colangitis obstructiva: antibióticos y drenaje biliar. La CPRE suele ser la vía preferida cuando está disponible; adapta la intervención a la estabilidad del paciente.`,
  gpc: {
    mexico: "Verificar la GPC mexicana vigente sobre coledocolitiasis y colangitis aguda.",
    internacional: "ASGE guideline on the management of cholangitis, 2021; Tokyo Guidelines 2018."
  },
  bibliografia: [
    "Buxbaum JL, et al. ASGE guideline on the management of cholangitis. Gastrointest Endosc. 2021.",
    "Kiriyama S, et al. Tokyo Guidelines 2018. J Hepatobiliary Pancreat Sci. 2018."
  ]
},
{
  id: "GASTRO-136",
  especialidad: "Gastroenterología",
  tema: "Colangitis aguda",
  subtema: "Momento del drenaje en enfermedad grave",
  dificultad: "Extrema",
  caso: `Femenina de 74 años con colangitis aguda presenta hipotensión, lactato elevado y deterioro renal. Se administran líquidos con reevaluación, antibióticos intravenosos y vasopresores por choque séptico. El ultrasonido muestra dilatación importante del colédoco y un cálculo distal. La paciente permanece en cuidados intensivos mientras se coordina la intervención endoscópica.`,
  pregunta: "¿Cuál es la prioridad respecto al control de la obstrucción biliar?",
  opciones: [
    "Esperar hasta que todas las pruebas hepáticas se normalicen antes de intervenir.",
    "Diferir el drenaje por una semana para observar si los antibióticos resuelven la obstrucción.",
    "Organizar drenaje biliar urgente tras iniciar la estabilización, sin retrasarlo innecesariamente por esperar una normalización completa.",
    "Realizar únicamente colecistectomía electiva después del alta.",
    "Suspender los antibióticos antes del procedimiento para mejorar el rendimiento de los cultivos."
  ],
  respuestaCorrecta: 2,
  explicacion: `La colangitis grave con choque séptico requiere soporte hemodinámico, antimicrobianos y control urgente del foco obstructivo. La estabilización inicial debe realizarse en paralelo con la organización del drenaje. No es necesario esperar a la normalización de la bilirrubina, creatinina o marcadores inflamatorios. La técnica y el momento exactos dependen de la estabilidad, los recursos y la posibilidad de acceso endoscópico; si la CPRE no es posible, deben valorarse alternativas de drenaje percutáneo o quirúrgico.`,
  perlaENARM: `En colangitis con choque, el drenaje biliar es parte del control urgente del foco. Reanimación y preparación para drenaje deben avanzar en paralelo.`,
  gpc: {
    mexico: "Consultar protocolos institucionales de sepsis y drenaje biliar urgente.",
    internacional: "ASGE guideline on the management of cholangitis, 2021; Tokyo Guidelines 2018."
  },
  bibliografia: [
    "Buxbaum JL, et al. ASGE guideline on the management of cholangitis. Gastrointest Endosc. 2021.",
    "Kiriyama S, et al. Tokyo Guidelines 2018. J Hepatobiliary Pancreat Sci. 2018."
  ]
},
{
  id: "GASTRO-137",
  especialidad: "Gastroenterología",
  tema: "Colangitis aguda",
  subtema: "Colangitis por obstrucción maligna",
  dificultad: "Alta",
  caso: `Masculino de 71 años presenta ictericia progresiva, prurito, pérdida de peso de 8 kg en tres meses y fiebre de 38.7 °C. La bilirrubina directa está elevada y la fosfatasa alcalina es cuatro veces el límite superior normal. La tomografía muestra dilatación de la vía biliar intrahepática y extrahepática, con estrechamiento distal del colédoco y una lesión sospechosa en la cabeza pancreática. Se diagnostica colangitis en el contexto de obstrucción posiblemente maligna.`,
  pregunta: "¿Cuál es el principio prioritario de manejo?",
  opciones: [
    "Esperar la confirmación histológica del cáncer antes de tratar la infección biliar.",
    "Administrar únicamente tratamiento antipruriginoso y observar.",
    "Iniciar antibióticos y valorar drenaje biliar para controlar la infección y la obstrucción, seguido de estudio etiológico y planificación oncológica.",
    "Realizar resección pancreática inmediata sin completar la estabilización ni evaluar la extensión tumoral.",
    "Evitar el drenaje porque las obstrucciones malignas no producen infección."
  ],
  respuestaCorrecta: 2,
  explicacion: `La obstrucción maligna puede causar colangitis, que requiere tratamiento de la infección y control de la obstrucción de acuerdo con la gravedad. El drenaje puede realizarse mediante prótesis endoscópica u otra técnica según la anatomía, la resecabilidad, los objetivos terapéuticos y los recursos disponibles. Una vez controlada la urgencia, se completa el estudio de la lesión y se coordina el manejo con gastroenterología, endoscopia, cirugía y oncología. La confirmación histológica y la planificación oncológica no deben retrasar el control urgente de una infección obstructiva.`,
  perlaENARM: `La colangitis puede deberse a cálculos o a obstrucción maligna. Controla primero la infección y la obstrucción; después completa la estadificación y el plan oncológico.`,
  gpc: {
    mexico: "Verificar protocolos mexicanos vigentes para colangitis y obstrucción biliar maligna.",
    internacional: "ASGE guideline on the management of cholangitis, 2021; guías vigentes sobre obstrucción biliar maligna."
  },
  bibliografia: [
    "Buxbaum JL, et al. ASGE guideline on the management of cholangitis. Gastrointest Endosc. 2021.",
    "Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholangitis. J Hepatobiliary Pancreat Sci. 2018."
  ]
},
{
  id: "GASTRO-138",
  especialidad: "Gastroenterología",
  tema: "Colangitis aguda",
  subtema: "Cultivos y ajuste del tratamiento",
  dificultad: "Alta",
  caso: `Femenina de 66 años con colangitis aguda recibe antibióticos intravenosos y drenaje biliar endoscópico con extracción de un cálculo. Antes del tratamiento se obtienen hemocultivos; durante la CPRE se envía una muestra de bilis. A las 48 horas se identifica un bacilo gramnegativo sensible a un antibiótico de espectro más estrecho que el esquema inicial. La paciente está afebril, hemodinámicamente estable y con mejoría de las pruebas de función hepática.`,
  pregunta: "¿Cuál es la conducta antimicrobiana más apropiada?",
  opciones: [
    "Mantener siempre el esquema más amplio disponible, aunque el cultivo permita reducir el espectro.",
    "Suspender de inmediato todo antibiótico al desaparecer la fiebre, sin considerar el control del foco ni los cultivos.",
    "Ajustar el tratamiento a los resultados microbiológicos, la respuesta clínica y la suficiencia del drenaje, utilizando un esquema dirigido cuando sea apropiado.",
    "Cambiar a un antifúngico sin evidencia de infección fúngica.",
    "Prolongar el tratamiento durante seis semanas en todos los casos, independientemente de la evolución."
  ],
  respuestaCorrecta: 2,
  explicacion: `Después del drenaje y de recibir resultados microbiológicos, debe reevaluarse el tratamiento y reducir el espectro cuando sea seguro y apropiado. La duración depende de la gravedad inicial, la bacteriemia, el microorganismo, la respuesta clínica y el control del foco. En colangitis con drenaje adecuado y evolución favorable, suelen emplearse cursos relativamente cortos, individualizados según las guías aplicables y los hallazgos microbiológicos. No se justifica prolongar antibióticos de amplio espectro sin una indicación específica.`,
  perlaENARM: `Tras el drenaje biliar, reevalúa antibióticos con los cultivos: tratamiento dirigido y duración individualizada según gravedad, microorganismo y control del foco.`,
  gpc: {
    mexico: "Consultar protocolo institucional de optimización de antimicrobianos y antibiograma local.",
    internacional: "Tokyo Guidelines 2018: antimicrobial therapy for acute cholangitis and cholecystitis."
  },
  bibliografia: [
    "Gomi H, et al. Tokyo Guidelines 2018: antimicrobial therapy for acute cholangitis and cholecystitis. J Hepatobiliary Pancreat Sci. 2018.",
    "Buxbaum JL, et al. ASGE guideline on the management of cholangitis. Gastrointest Endosc. 2021."
  ]
},
{
  id: "GASTRO-139",
  especialidad: "Gastroenterología",
  tema: "Colangitis aguda",
  subtema: "Colangitis asociada a pancreatitis biliar",
  dificultad: "Extrema",
  caso: `Masculino de 58 años presenta dolor epigástrico irradiado a la espalda, lipasa ocho veces el límite superior normal, fiebre de 39 °C e ictericia. La bilirrubina total es de 6.8 mg/dL y la ecografía muestra colédoco dilatado con cálculo distal. Tiene leucocitosis y elevación de marcadores inflamatorios. Se diagnostica pancreatitis aguda biliar con colangitis concomitante.`,
  pregunta: "¿Cuál es la conducta prioritaria respecto a la obstrucción biliar?",
  opciones: [
    "Evitar toda intervención biliar porque la pancreatitis contraindica la CPRE en cualquier circunstancia.",
    "Indicar CPRE terapéutica urgente para drenaje de la vía biliar por la colangitis concomitante, junto con tratamiento de la pancreatitis.",
    "Esperar cuatro semanas para valorar el drenaje después de que se resuelva la pancreatitis.",
    "Realizar colecistectomía aislada como único tratamiento de la colangitis activa.",
    "Administrar únicamente enzimas pancreáticas por vía oral."
  ],
  respuestaCorrecta: 1,
  explicacion: `La pancreatitis biliar sin colangitis ni obstrucción persistente no requiere CPRE urgente de rutina. Sin embargo, la presencia concomitante de colangitis y obstrucción biliar cambia la conducta: se requieren antibióticos, soporte clínico y drenaje biliar urgente, habitualmente mediante CPRE. Después de controlar la infección y estabilizar al paciente, se planifica la prevención de recurrencias biliares, incluido el momento de la colecistectomía según la gravedad de la pancreatitis y la presencia de colecciones.`,
  perlaENARM: `Pancreatitis biliar aislada no equivale a indicación de CPRE urgente. Pancreatitis biliar + colangitis sí requiere drenaje biliar oportuno.`,
  gpc: {
    mexico: "Verificar las GPC mexicanas vigentes para pancreatitis aguda biliar y colangitis.",
    internacional: "ACG Clinical Guideline: Management of Acute Pancreatitis, 2024; ASGE guideline on cholangitis, 2021."
  },
  bibliografia: [
    "Tenner S, et al. ACG Clinical Guideline: Management of Acute Pancreatitis. Am J Gastroenterol. 2024.",
    "Buxbaum JL, et al. ASGE guideline on the management of cholangitis. Gastrointest Endosc. 2021."
  ]
},
{
  id: "GASTRO-140",
  especialidad: "Gastroenterología",
  tema: "Colangitis aguda",
  subtema: "Grado II y factores de gravedad",
  dificultad: "Extrema",
  caso: `Femenina de 79 años ingresa por colangitis aguda con fiebre de 39.2 °C, leucocitos de 18,500/µL, bilirrubina total de 6.1 mg/dL y dilatación del colédoco por probable coledocolitiasis. La presión arterial es de 126/74 mmHg, está orientada, mantiene diuresis adecuada y la creatinina es de 0.9 mg/dL. No presenta disfunción orgánica, pero reúne varios factores asociados con mayor gravedad.`,
  pregunta: "Según Tokyo Guidelines 2018, ¿cuál es la clasificación de gravedad más probable?",
  opciones: [
    "Grado I, porque no existe disfunción orgánica.",
    "Grado II, porque reúne múltiples criterios de gravedad moderada sin disfunción orgánica grado III.",
    "Grado III, porque cualquier paciente mayor de 75 años presenta disfunción orgánica.",
    "No puede clasificarse sin un hemocultivo positivo.",
    "Grado I, porque la presión arterial es normal."
  ],
  respuestaCorrecta: 1,
  explicacion: `Tokyo Guidelines 2018 clasifica como grado II la colangitis que presenta al menos dos criterios específicos, entre ellos leucocitos mayores de 12,000/µL o menores de 4,000/µL, temperatura de 39 °C o más, edad de 75 años o más, bilirrubina total de 5 mg/dL o más, o hipoalbuminemia definida según el criterio correspondiente. Esta paciente cumple varios criterios. La ausencia de disfunción orgánica impide clasificarla como grado III por los datos proporcionados. La enfermedad grado II requiere tratamiento oportuno y consideración de drenaje biliar temprano según la evolución clínica.`,
  perlaENARM: `Tokyo Guidelines: grado II requiere al menos dos criterios de gravedad moderada. La edad ≥75 años, fiebre ≥39 °C, leucocitos anormales y bilirrubina ≥5 mg/dL son criterios relevantes.`,
  gpc: {
    mexico: "Verificar la GPC mexicana vigente sobre colangitis aguda y coledocolitiasis.",
    internacional: "Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholangitis."
  },
  bibliografia: [
    "Kiriyama S, et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholangitis. J Hepatobiliary Pancreat Sci. 2018.",
    "Buxbaum JL, et al. ASGE guideline on the management of cholangitis. Gastrointest Endosc. 2021."
  ]
},
{
  id: "GASTRO-141",
  especialidad: "Gastroenterología",
  tema: "Colangitis aguda",
  subtema: "Diagnóstico según Tokyo Guidelines",
  dificultad: "Media",
  caso: "Masculino de 68 años con fiebre, dolor en hipocondrio derecho e ictericia. La biometría hemática muestra leucocitosis y las pruebas hepáticas patrón colestásico.",
  pregunta: "¿Qué combinación integra los dominios diagnósticos de colangitis aguda según Tokyo Guidelines?",
  opciones: [
    "Inflamación sistémica, colestasis e imagen compatible con obstrucción biliar",
    "Fiebre, elevación aislada de transaminasas y lipasa elevada",
    "Ictericia, hipoalbuminemia y ascitis",
    "Dolor abdominal, hematuria y elevación de creatinina",
    "Leucocitosis, amilasa elevada y dilatación pancreática"
  ],
  respuestaCorrecta: 0,
  explicacion: "Tokyo Guidelines integra evidencia de inflamación sistémica, colestasis y hallazgos de imagen compatibles con dilatación u otra causa de obstrucción biliar. La combinación de los tres dominios establece el diagnóstico definitivo.",
  perlaENARM: "ENARM: recuerda los tres dominios: inflamación sistémica + colestasis + imagen. La tríada de Charcot es clásica, pero su ausencia no descarta colangitis.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente aplicable a colangitis aguda y coledocolitiasis.",
    internacional: "Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholangitis."
  },
  bibliografia: [
    "Kiriyama S, et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholangitis. J Hepatobiliary Pancreat Sci. 2018.",
    "Buxbaum JL, et al. ASGE guideline on the management of cholangitis. Gastrointest Endosc. 2021."
  ]
},
{
  id: "GASTRO-142",
  especialidad: "Gastroenterología",
  tema: "Colangitis aguda",
  subtema: "Microbiología y hemocultivos",
  dificultad: "Media",
  caso: "Mujer de 72 años con fiebre, ictericia e hipotensión. Se sospecha colangitis aguda secundaria a coledocolitiasis.",
  pregunta: "¿Cuál es la conducta microbiológica inicial más apropiada, siempre que no retrase el tratamiento urgente?",
  opciones: [
    "Obtener hemocultivos antes de iniciar antibióticos",
    "Esperar el resultado del cultivo de bilis antes de tratar",
    "Solicitar únicamente coproparasitoscópico",
    "Evitar cultivos porque no modifican el manejo",
    "Iniciar antibióticos y obtener hemocultivos varios días después"
  ],
  respuestaCorrecta: 0,
  explicacion: "Se recomienda obtener hemocultivos antes de los antibióticos si esto no retrasa su administración. Cuando se realiza drenaje biliar, el cultivo de bilis también puede orientar el ajuste antimicrobiano.",
  perlaENARM: "ENARM: en sepsis, los cultivos deben obtenerse antes del antibiótico cuando sea factible, sin retrasar la terapia antimicrobiana.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre sepsis y colangitis aguda.",
    internacional: "Tokyo Guidelines 2018; Surviving Sepsis Campaign 2021."
  },
  bibliografia: [
    "Evans L, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Intensive Care Med. 2021.",
    "Gomi H, et al. Tokyo Guidelines 2018: antimicrobial therapy for acute cholangitis and cholecystitis. J Hepatobiliary Pancreat Sci. 2018."
  ]
},
{
  id: "GASTRO-143",
  especialidad: "Gastroenterología",
  tema: "Colangitis aguda",
  subtema: "Tratamiento antimicrobiano empírico",
  dificultad: "Alta",
  caso: "Hombre de 64 años con colangitis aguda grave, hipotensión y datos de disfunción orgánica. No tiene alergias medicamentosas conocidas.",
  pregunta: "¿Cuál es el principio que debe guiar la selección del tratamiento antimicrobiano empírico?",
  opciones: [
    "Elegir cobertura según gravedad, adquisición comunitaria u hospitalaria, riesgo de resistencia y antibiograma local",
    "Administrar siempre un macrólido como monoterapia",
    "Evitar antibióticos hasta disponer del cultivo definitivo",
    "Usar antifúngicos de rutina en todos los pacientes",
    "Elegir exclusivamente un fármaco contra anaerobios"
  ],
  respuestaCorrecta: 0,
  explicacion: "El tratamiento empírico debe cubrir los patógenos probables y ajustarse a la gravedad, exposición sanitaria, factores de resistencia y epidemiología local. Posteriormente se desescala según cultivos y respuesta clínica.",
  perlaENARM: "ENARM: la colangitis grave requiere antibióticos tempranos y control de la fuente; el esquema exacto depende de resistencias locales y factores individuales.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente y el antibiograma institucional.",
    internacional: "Tokyo Guidelines 2018: antimicrobial therapy; Surviving Sepsis Campaign 2021."
  },
  bibliografia: [
    "Gomi H, et al. Tokyo Guidelines 2018: antimicrobial therapy for acute cholangitis and cholecystitis. J Hepatobiliary Pancreat Sci. 2018.",
    "Evans L, et al. Surviving Sepsis Campaign 2021. Intensive Care Med. 2021."
  ]
},
{
  id: "GASTRO-144",
  especialidad: "Gastroenterología",
  tema: "Colangitis aguda",
  subtema: "Drenaje biliar urgente",
  dificultad: "Alta",
  caso: "Paciente de 76 años con colangitis por coledocolitiasis, hipotensión persistente y lactato elevado a pesar de reanimación inicial y antibióticos.",
  pregunta: "¿Cuál es la intervención de control de foco preferida cuando está disponible y es técnicamente factible?",
  opciones: [
    "CPRE urgente para descompresión y drenaje biliar",
    "Colecistectomía electiva en seis semanas como única medida",
    "Observación durante 72 horas antes de intervenir",
    "Colangiografía diagnóstica sin intención terapéutica",
    "Suspender antibióticos y repetir pruebas hepáticas al día siguiente"
  ],
  respuestaCorrecta: 0,
  explicacion: "La colangitis grave con obstrucción requiere reanimación, antimicrobianos y drenaje biliar oportuno. La CPRE permite descomprimir la vía biliar y tratar la causa cuando es factible.",
  perlaENARM: "ENARM: en colangitis grave, no basta con antibióticos; el drenaje biliar es control del foco y no debe demorarse innecesariamente.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre colangitis y coledocolitiasis.",
    internacional: "ASGE guideline on the management of cholangitis, 2021."
  },
  bibliografia: [
    "Buxbaum JL, et al. ASGE guideline on the management of cholangitis. Gastrointest Endosc. 2021.",
    "Miura F, et al. Tokyo Guidelines 2018: initial management of acute biliary infection and flowchart for acute cholangitis. J Hepatobiliary Pancreat Sci. 2018."
  ]
},
{
  id: "GASTRO-145",
  especialidad: "Gastroenterología",
  tema: "Colangitis aguda",
  subtema: "Clasificación de gravedad",
  dificultad: "Alta",
  caso: "Mujer de 81 años con colangitis aguda, creatinina de 2.4 mg/dL, oliguria y necesidad de soporte hemodinámico.",
  pregunta: "¿Cómo se clasifica la colangitis cuando presenta disfunción renal y cardiovascular?",
  opciones: [
    "Grado I, leve",
    "Grado II, moderada por edad únicamente",
    "Grado III, grave por disfunción orgánica",
    "No puede clasificarse hasta obtener el cultivo biliar",
    "Grado I si la bilirrubina es menor de 10 mg/dL"
  ],
  respuestaCorrecta: 2,
  explicacion: "Tokyo Guidelines clasifica como grado III la colangitis con disfunción de al menos un sistema orgánico, incluyendo disfunción cardiovascular o renal.",
  perlaENARM: "ENARM: la disfunción orgánica determina grado III; no es necesario esperar los cultivos para reconocer la gravedad.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre colangitis aguda.",
    internacional: "Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholangitis."
  },
  bibliografia: [
    "Kiriyama S, et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholangitis. J Hepatobiliary Pancreat Sci. 2018."
  ]
},
{
  id: "GASTRO-146",
  especialidad: "Gastroenterología",
  tema: "Colangitis aguda",
  subtema: "Colangitis moderada y factores de gravedad",
  dificultad: "Alta",
  caso: "Hombre de 78 años con colangitis aguda, fiebre de 39.4 °C y leucocitos de 17,000/µL, sin disfunción orgánica documentada.",
  pregunta: "¿Cuál es la interpretación más apropiada de la gravedad según Tokyo Guidelines 2018?",
  opciones: [
    "La edad mayor de 75 años, por sí sola, establece grado III",
    "Dos criterios de gravedad moderada pueden clasificarla como grado II",
    "La ausencia de choque descarta colangitis",
    "La fiebre elevada siempre equivale a grado III",
    "La leucocitosis no participa en la clasificación"
  ],
  respuestaCorrecta: 1,
  explicacion: "La colangitis grado II requiere al menos dos criterios de gravedad moderada. Entre ellos están leucocitos mayores de 12,000 o menores de 4,000/µL, temperatura de al menos 39 °C, edad de 75 años o más, bilirrubina total de al menos 5 mg/dL e hipoalbuminemia significativa.",
  perlaENARM: "ENARM: distingue grado II por acumulación de criterios moderados de grado III por disfunción orgánica.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre colangitis aguda.",
    internacional: "Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholangitis."
  },
  bibliografia: [
    "Kiriyama S, et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholangitis. J Hepatobiliary Pancreat Sci. 2018."
  ]
},
{
  id: "GASTRO-147",
  especialidad: "Gastroenterología",
  tema: "Colangitis aguda",
  subtema: "Imagen inicial",
  dificultad: "Media",
  caso: "Paciente de 59 años con dolor en hipocondrio derecho, fiebre e ictericia. Se sospecha obstrucción de la vía biliar por cálculo.",
  pregunta: "¿Cuál es una prueba de imagen inicial útil para buscar dilatación biliar y datos de obstrucción?",
  opciones: [
    "Ultrasonido abdominal",
    "Radiografía simple de cráneo",
    "Colonoscopia",
    "Densitometría ósea",
    "Electroencefalograma"
  ],
  respuestaCorrecta: 0,
  explicacion: "El ultrasonido abdominal suele ser una prueba inicial por disponibilidad y capacidad para identificar dilatación de la vía biliar y algunos cálculos. Un estudio negativo no excluye coledocolitiasis si la sospecha clínica persiste.",
  perlaENARM: "ENARM: ultrasonido como imagen inicial; si persiste la sospecha con resultados no concluyentes, considerar colangiorresonancia o ultrasonido endoscópico según el contexto.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre diagnóstico de coledocolitiasis.",
    internacional: "ASGE guideline on the role of endoscopy in the evaluation and management of choledocholithiasis, 2019."
  },
  bibliografia: [
    "Buxbaum JL, et al. ASGE guideline on the role of endoscopy in the evaluation and management of choledocholithiasis. Gastrointest Endosc. 2019."
  ]
},
{
  id: "GASTRO-148",
  especialidad: "Gastroenterología",
  tema: "Colangitis aguda",
  subtema: "CPRE y estrategia endoscópica",
  dificultad: "Alta",
  caso: "Paciente con colangitis aguda por cálculo distal del colédoco y obstrucción persistente. Se decide realizar CPRE.",
  pregunta: "¿Cuál es el objetivo terapéutico principal de la CPRE en este escenario?",
  opciones: [
    "Descomprimir la vía biliar y, cuando sea apropiado, extraer el cálculo",
    "Confirmar exclusivamente la presencia de esteatosis hepática",
    "Realizar biopsia hepática percutánea",
    "Tratar la infección sin necesidad de antibióticos",
    "Sustituir toda reanimación hemodinámica"
  ],
  respuestaCorrecta: 0,
  explicacion: "La CPRE es una intervención terapéutica para lograr drenaje biliar y tratar la obstrucción. La extensión de la extracción depende de la estabilidad del paciente, anatomía, recursos y complejidad del cálculo.",
  perlaENARM: "ENARM: la CPRE en colangitis es principalmente terapéutica; el drenaje puede ser prioritario si el paciente está inestable.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre coledocolitiasis y colangitis.",
    internacional: "ASGE guideline on the management of cholangitis, 2021."
  },
  bibliografia: [
    "Buxbaum JL, et al. ASGE guideline on the management of cholangitis. Gastrointest Endosc. 2021."
  ]
},
{
  id: "GASTRO-149",
  especialidad: "Gastroenterología",
  tema: "Colangitis aguda",
  subtema: "Diagnóstico diferencial con colecistitis",
  dificultad: "Media",
  caso: "Mujer de 52 años con fiebre y dolor en hipocondrio derecho. Presenta Murphy positivo, pero no tiene ictericia ni elevación de bilirrubina; el ultrasonido muestra engrosamiento de pared vesicular y líquido perivesicular.",
  pregunta: "¿Cuál es el diagnóstico más probable?",
  opciones: [
    "Colecistitis aguda",
    "Colangitis aguda confirmada",
    "Hepatitis autoinmune",
    "Colitis ulcerosa",
    "Pancreatitis crónica"
  ],
  respuestaCorrecta: 0,
  explicacion: "Murphy positivo y hallazgos inflamatorios vesiculares favorecen colecistitis aguda. La colangitis se relaciona con infección de la vía biliar, con evidencia de inflamación sistémica, colestasis y hallazgos compatibles en imagen.",
  perlaENARM: "ENARM: Murphy y cambios inflamatorios vesiculares orientan a colecistitis; fiebre, colestasis y obstrucción biliar orientan a colangitis.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre colecistitis y colangitis.",
    internacional: "Tokyo Guidelines 2018: diagnostic criteria for acute cholecystitis and acute cholangitis."
  },
  bibliografia: [
    "Yokoe M, et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholecystitis. J Hepatobiliary Pancreat Sci. 2018.",
    "Kiriyama S, et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholangitis. J Hepatobiliary Pancreat Sci. 2018."
  ]
},
{
  id: "GASTRO-150",
  especialidad: "Gastroenterología",
  tema: "Colangitis aguda",
  subtema: "Tratamiento posterior y prevención de recurrencia",
  dificultad: "Alta",
  caso: "Paciente con colangitis por coledocolitiasis que mejora tras antibióticos y drenaje endoscópico. La vesícula conserva múltiples cálculos y no hay contraindicación quirúrgica.",
  pregunta: "¿Cuál es la estrategia definitiva habitual para reducir la recurrencia de eventos biliares?",
  opciones: [
    "Valorar colecistectomía durante el mismo ingreso o de forma temprana según evolución y riesgo quirúrgico",
    "Mantener antibióticos indefinidamente",
    "Realizar CPRE mensual de manera preventiva",
    "Indicar ayuno permanente",
    "No ofrecer tratamiento adicional si desaparece la fiebre"
  ],
  respuestaCorrecta: 0,
  explicacion: "Tras resolver la obstrucción y controlar la infección, la colecistectomía temprana suele indicarse en pacientes aptos con cálculos vesiculares para reducir recurrencia. El momento se individualiza según estabilidad y contexto clínico.",
  perlaENARM: "ENARM: resolver la colangitis no elimina el origen litiásico vesicular; planifica tratamiento definitivo para prevenir nuevos eventos.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre colelitiasis y coledocolitiasis.",
    internacional: "ASGE guideline on the management of choledocholithiasis, 2019."
  },
  bibliografia: [
    "Buxbaum JL, et al. ASGE guideline on the role of endoscopy in the evaluation and management of choledocholithiasis. Gastrointest Endosc. 2019."
  ]
},
{
  id: "GASTRO-151",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Rendimiento diagnóstico del ultrasonido abdominal",
  dificultad: "Media",
  caso: `Femenina de 48 años con episodios de dolor en hipocondrio derecho, ictericia transitoria y coluria. La bilirrubina total es de 3.2 mg/dL, con predominio directo; la fosfatasa alcalina y la GGT están elevadas. El ultrasonido muestra colelitiasis y colédoco de 8 mm, pero no identifica cálculos intraductales. Está afebril y hemodinámicamente estable.`,
  pregunta: "¿Cuál es la interpretación más apropiada del ultrasonido?",
  opciones: [
    "Descarta definitivamente la coledocolitiasis.",
    "Confirma hepatitis viral aguda.",
    "No excluye coledocolitiasis; debe integrarse con la probabilidad clínica y considerarse colangiorresonancia o ultrasonido endoscópico.",
    "Demuestra que la paciente necesita CPRE inmediata sin evaluación adicional.",
    "Descarta toda obstrucción biliar porque no hay fiebre."
  ],
  respuestaCorrecta: 2,
  explicacion: `El ultrasonido es útil para identificar dilatación biliar y colelitiasis, pero puede no visualizar cálculos pequeños o situados en el colédoco distal. Ante un patrón colestásico y sospecha persistente, se estratifica la probabilidad de coledocolitiasis. En riesgo intermedio, la colangiorresonancia o el ultrasonido endoscópico permiten confirmar el diagnóstico y evitar una CPRE innecesaria. La decisión depende de la evolución clínica y de los hallazgos disponibles.`,
  perlaENARM: `Un ultrasonido sin cálculo visible no excluye coledocolitiasis. La dilatación del colédoco y el patrón colestásico deben interpretarse en conjunto.`,
  gpc: {
    mexico: "Verificar la GPC mexicana vigente sobre coledocolitiasis en el catálogo CENETEC/IMSS.",
    internacional: "ASGE guideline on the role of endoscopy in the evaluation and management of choledocholithiasis, 2019."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. ASGE guideline on choledocholithiasis. Gastrointest Endosc. 2019;89:1075-1105.e15."
  ]
},
{
  id: "GASTRO-152",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Interpretación de bilirrubina y obstrucción transitoria",
  dificultad: "Alta",
  caso: `Masculino de 56 años presenta dolor en hipocondrio derecho e ictericia de inicio súbito. La bilirrubina total inicial es de 4.1 mg/dL y la fosfatasa alcalina está elevada. Veinticuatro horas después, el dolor desaparece y la bilirrubina desciende a 1.8 mg/dL. El ultrasonido muestra colelitiasis, sin cálculo visible en el colédoco ni dilatación importante de la vía biliar. No presenta fiebre ni datos de pancreatitis.`,
  pregunta: "¿Cuál es la explicación más probable de la evolución bioquímica?",
  opciones: [
    "La caída de bilirrubina demuestra necesariamente insuficiencia hepática aguda.",
    "Es compatible con resolución de una obstrucción biliar transitoria, aunque debe reevaluarse la posibilidad de cálculo residual según el riesgo clínico.",
    "Descarta que el dolor haya tenido origen biliar.",
    "Confirma colangitis grave.",
    "Demuestra que existe una neoplasia pancreática."
  ],
  respuestaCorrecta: 1,
  explicacion: `Un cálculo puede obstruir transitoriamente el colédoco y migrar espontáneamente al duodeno, con mejoría del dolor y descenso de bilirrubina. Sin embargo, la mejoría bioquímica no garantiza por sí sola que no exista un cálculo residual. La necesidad de estudios adicionales depende de la evolución, el patrón hepático, el diámetro del colédoco y la probabilidad clínica. Si persiste una probabilidad intermedia, puede utilizarse colangiorresonancia o ultrasonido endoscópico.`,
  perlaENARM: `La mejoría de la bilirrubina sugiere resolución de la obstrucción, pero no excluye completamente coledocolitiasis residual.`,
  gpc: {
    mexico: "Verificar la GPC mexicana vigente sobre coledocolitiasis.",
    internacional: "ASGE guideline on choledocholithiasis, 2019."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. Gastrointest Endosc. 2019;89:1075-1105.e15."
  ]
},
{
  id: "GASTRO-153",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Ultrasonido endoscópico frente a colangiorresonancia",
  dificultad: "Alta",
  caso: `Femenina de 62 años presenta colestasis bioquímica persistente y dolor biliar. El ultrasonido transabdominal no identifica cálculos en el colédoco, pero la sospecha clínica permanece en rango intermedio. No tiene contraindicación para resonancia magnética y se dispone de ultrasonido endoscópico en el hospital.`,
  pregunta: "¿Cuál afirmación compara correctamente la colangiorresonancia con el ultrasonido endoscópico?",
  opciones: [
    "Ambos estudios tienen utilidad limitada y siempre deben sustituirse por CPRE diagnóstica.",
    "La colangiorresonancia es un estudio invasivo que requiere canulación papilar.",
    "Ambos pueden evaluar la vía biliar sin los riesgos terapéuticos de una CPRE; el ultrasonido endoscópico puede ser especialmente útil para cálculos pequeños.",
    "El ultrasonido endoscópico no permite detectar cálculos del colédoco.",
    "La colangiorresonancia permite extraer cálculos durante el mismo procedimiento."
  ],
  respuestaCorrecta: 2,
  explicacion: `La colangiorresonancia es una técnica no invasiva que representa la anatomía de la vía biliar. El ultrasonido endoscópico ofrece alta resolución y puede ser especialmente útil para cálculos pequeños o distales. Ninguno permite la extracción directa del cálculo; si se confirma una obstrucción que requiere tratamiento, se planifica CPRE u otra estrategia terapéutica. La selección depende de disponibilidad, contraindicaciones, experiencia y probabilidad clínica.`,
  perlaENARM: `Colangiorresonancia y ultrasonido endoscópico son alternativas diagnósticas en riesgo intermedio; la CPRE se reserva principalmente para tratamiento.`,
  gpc: {
    mexico: "Verificar la GPC mexicana vigente sobre diagnóstico de coledocolitiasis.",
    internacional: "ASGE guideline on choledocholithiasis, 2019."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. Gastrointest Endosc. 2019;89:1075-1105.e15."
  ]
},
{
  id: "GASTRO-154",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "CPRE y pancreatitis posprocedimiento",
  dificultad: "Extrema",
  caso: `Femenina de 43 años es sometida a CPRE por coledocolitiasis confirmada. El procedimiento requiere canulación difícil y múltiples intentos en la papila. Después de la intervención presenta dolor epigástrico persistente irradiado a la espalda y elevación de lipasa a más de tres veces el límite superior normal. No se documenta perforación ni hemorragia.`,
  pregunta: "¿Cuál es la complicación más probable?",
  opciones: [
    "Pancreatitis aguda pos-CPRE.",
    "Hepatitis viral adquirida durante el procedimiento.",
    "Colecistitis crónica no complicada.",
    "Síndrome de intestino irritable.",
    "Hemólisis intravascular como explicación principal."
  ],
  respuestaCorrecta: 0,
  explicacion: `El dolor abdominal compatible y la elevación significativa de enzimas pancreáticas después de una CPRE sugieren pancreatitis posprocedimiento. Los intentos repetidos de canulación y la instrumentación pancreática son factores de riesgo. El diagnóstico requiere integrar síntomas, enzimas y evolución clínica, ya que una elevación aislada de lipasa después de la CPRE no siempre equivale a pancreatitis clínica. La prevención incluye selección adecuada de pacientes, técnica endoscópica cuidadosa y medidas profilácticas recomendadas según el riesgo y las contraindicaciones.`,
  perlaENARM: `Dolor epigástrico después de CPRE + elevación de lipasa: sospecha pancreatitis pos-CPRE. La canulación difícil aumenta el riesgo.`,
  gpc: {
    mexico: "Consultar protocolos institucionales vigentes para prevención y manejo de pancreatitis pos-CPRE.",
    internacional: "ASGE guideline on post-ERCP pancreatitis prevention strategies."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. ASGE guideline on post-ERCP pancreatitis prevention strategies. Gastrointest Endosc. Consultar versión vigente."
  ]
},
{
  id: "GASTRO-155",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Prevención de pancreatitis pos-CPRE",
  dificultad: "Extrema",
  caso: `Masculino de 39 años requiere CPRE terapéutica por coledocolitiasis. Durante la evaluación preprocedimiento se identifica riesgo elevado de pancreatitis pos-CPRE por antecedente de pancreatitis asociada a un procedimiento previo. La función renal es normal y no presenta úlcera péptica activa ni alergia conocida a antiinflamatorios no esteroideos.`,
  pregunta: "¿Qué medida farmacológica preventiva está recomendada en pacientes apropiados?",
  opciones: [
    "Indometacina o diclofenaco por vía rectal, salvo contraindicación.",
    "Antibióticos profilácticos durante un mes en todos los pacientes.",
    "Corticoides intravenosos de rutina como única profilaxis.",
    "Loperamida antes del procedimiento.",
    "Inhibidores de la bomba de protones como única medida específica."
  ],
  respuestaCorrecta: 0,
  explicacion: `Los antiinflamatorios no esteroideos por vía rectal, como indometacina o diclofenaco, se recomiendan para prevenir pancreatitis pos-CPRE en pacientes apropiados, especialmente en aquellos con riesgo elevado. Deben revisarse las contraindicaciones y las medidas técnicas adicionales, como el uso selectivo de stent pancreático en pacientes de alto riesgo cuando corresponda. La prevención debe seguir las recomendaciones actualizadas y el protocolo institucional.`,
  perlaENARM: `Profilaxis de pancreatitis pos-CPRE: AINE rectal en pacientes apropiados; considera otras medidas técnicas según el riesgo y la experiencia endoscópica.`,
  gpc: {
    mexico: "Verificar el protocolo institucional de prevención de pancreatitis pos-CPRE.",
    internacional: "ASGE guideline on post-ERCP pancreatitis prevention strategies."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. ASGE guideline on post-ERCP pancreatitis prevention strategies. Gastrointest Endosc. Consultar versión vigente."
  ]
},
{
  id: "GASTRO-156",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Colangitis y cálculo obstructivo",
  dificultad: "Extrema",
  caso: `Femenina de 72 años con coledocolitiasis confirmada desarrolla fiebre, escalofríos, ictericia progresiva y presión arterial de 88/54 mmHg. Presenta leucocitosis, bilirrubina total de 6.9 mg/dL y lactato elevado. El ultrasonido muestra dilatación del colédoco con cálculo distal. Se inicia tratamiento de sepsis y se solicita intervención urgente.`,
  pregunta: "¿Cuál es el objetivo prioritario del procedimiento endoscópico?",
  opciones: [
    "Obtener una biopsia gástrica.",
    "Drenar la vía biliar infectada y aliviar la obstrucción, con extracción del cálculo si resulta segura y factible.",
    "Realizar exclusivamente una colangiografía diagnóstica y finalizar el procedimiento sin drenaje.",
    "Esperar a que se normalice la bilirrubina antes de intervenir.",
    "Realizar una colonoscopia terapéutica."
  ],
  respuestaCorrecta: 1,
  explicacion: `La obstrucción biliar acompañada de infección sistémica requiere control del foco. La CPRE permite descomprimir la vía biliar mediante extracción del cálculo o drenaje con prótesis si no es seguro completar la extracción. El soporte hemodinámico y los antibióticos deben iniciarse de inmediato y coordinarse con el drenaje. La elección técnica depende de la estabilidad del paciente, la anatomía y la experiencia disponible.`,
  perlaENARM: `Coledocolitiasis con colangitis y choque: no basta con antibióticos; se necesita control urgente de la obstrucción biliar.`,
  gpc: {
    mexico: "Consultar protocolos institucionales de colangitis grave y sepsis.",
    internacional: "ASGE guideline on the management of cholangitis, 2021; Tokyo Guidelines 2018."
  },
  bibliografia: [
    "Buxbaum JL, et al. ASGE guideline on the management of cholangitis. Gastrointest Endosc. 2021.",
    "Kiriyama S, et al. Tokyo Guidelines 2018. J Hepatobiliary Pancreat Sci. 2018."
  ]
},
{
  id: "GASTRO-157",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Cálculos grandes y técnicas de extracción",
  dificultad: "Alta",
  caso: `Masculino de 65 años presenta coledocolitiasis con un cálculo de 17 mm en el colédoco distal. Durante la CPRE se identifica una vía biliar dilatada y no hay estenosis distal. El cálculo no puede extraerse con balón convencional tras la esfinterotomía inicial. El paciente está estable y se dispone de experiencia en técnicas endoscópicas avanzadas.`,
  pregunta: "¿Cuál es una opción apropiada para completar el tratamiento?",
  opciones: [
    "Abandonar la extracción de forma definitiva y retirar todo drenaje.",
    "Considerar dilatación papilar con balón grande y/o técnicas de litotricia, según anatomía y experiencia.",
    "Administrar únicamente ácido ursodesoxicólico y asumir que el cálculo desaparecerá de inmediato.",
    "Realizar gastrectomía total.",
    "Indicar antibióticos como método de disolución del cálculo."
  ],
  respuestaCorrecta: 1,
  explicacion: `Los cálculos grandes o difíciles pueden requerir técnicas avanzadas, como dilatación papilar con balón de gran diámetro después de una esfinterotomía apropiada, litotricia mecánica o litotricia guiada por colangioscopia. La elección depende del tamaño, la forma del cálculo, el diámetro y la anatomía del colédoco, así como de la experiencia del equipo. Si no se logra extracción completa, puede colocarse una prótesis temporal para asegurar drenaje y planificar una intervención posterior.`,
  perlaENARM: `Cálculo grande que no sale con balón convencional: considera técnicas endoscópicas avanzadas y asegura drenaje adecuado si la extracción queda incompleta.`,
  gpc: {
    mexico: "Verificar protocolos institucionales para coledocolitiasis difícil y endoscopia terapéutica avanzada.",
    internacional: "ASGE guideline on choledocholithiasis, 2019."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. ASGE guideline on the role of endoscopy in the evaluation and management of choledocholithiasis. Gastrointest Endosc. 2019."
  ]
},
{
  id: "GASTRO-158",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Prótesis biliar temporal",
  dificultad: "Alta",
  caso: `Femenina de 68 años con coledocolitiasis difícil es sometida a CPRE. No se consigue extraer completamente el cálculo, pero se coloca una prótesis biliar plástica que permite buen drenaje. La paciente mejora y es dada de alta con seguimiento programado. Durante la consulta posterior pregunta si la prótesis puede permanecer indefinidamente sin controles.`,
  pregunta: "¿Cuál es la recomendación más apropiada?",
  opciones: [
    "Dejar la prótesis plástica permanentemente sin vigilancia.",
    "Planificar el retiro o recambio de la prótesis y la resolución definitiva de la coledocolitiasis.",
    "Retirar la prótesis de inmediato sin valorar la obstrucción residual.",
    "Suspender el seguimiento porque el drenaje inicial fue adecuado.",
    "Indicar antibióticos de por vida para evitar la obstrucción de la prótesis."
  ],
  respuestaCorrecta: 1,
  explicacion: `Una prótesis plástica temporal puede mantener el drenaje cuando no se logra extracción completa, pero tiene riesgo de obstrucción, migración e infección si no se retira o recambia oportunamente. Debe existir un plan explícito de seguimiento y tratamiento definitivo, con una fecha de reevaluación adecuada al procedimiento y al contexto clínico. La ausencia de síntomas no garantiza que la prótesis continúe permeable.`,
  perlaENARM: `Toda prótesis biliar temporal necesita seguimiento para retiro o recambio. No des por resuelta una coledocolitiasis solo porque el drenaje inicial fue exitoso.`,
  gpc: {
    mexico: "Consultar el protocolo local de seguimiento de prótesis biliares.",
    internacional: "ASGE guideline on choledocholithiasis, 2019."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. Gastrointest Endosc. 2019;89:1075-1105.e15."
  ]
},
{
  id: "GASTRO-159",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Diagnóstico diferencial de dilatación biliar posoperatoria",
  dificultad: "Extrema",
  caso: `Masculino de 61 años con antecedente de colecistectomía hace dos años presenta ictericia progresiva y prurito. La bilirrubina directa y la fosfatasa alcalina están elevadas. El ultrasonido muestra dilatación del colédoco, sin cálculo visible. La colangiorresonancia identifica un estrechamiento focal del conducto biliar extrahepático sin defecto de llenado compatible con cálculo.`,
  pregunta: "¿Cuál es el diagnóstico diferencial que debe considerarse especialmente?",
  opciones: [
    "Estenosis biliar benigna posquirúrgica, sin excluir otras causas de obstrucción.",
    "Síndrome de intestino irritable.",
    "Gastroenteritis aguda.",
    "Colelitiasis vesicular, aunque la vesícula ya fue extirpada.",
    "Apendicitis aguda."
  ],
  respuestaCorrecta: 0,
  explicacion: `Una estenosis biliar puede presentarse después de una intervención quirúrgica y ocasionar colestasis e ictericia. La ausencia de un defecto de llenado típico de cálculo hace necesario evaluar estrechez benigna, lesión biliar posoperatoria y causas malignas. El estudio adicional y el tratamiento dependen de la localización, longitud, sospecha etiológica y repercusión clínica. La CPRE puede permitir toma de muestras y tratamiento en casos seleccionados, mientras que otros escenarios requieren imagen adicional o valoración hepatobiliar especializada.`,
  perlaENARM: `Ictericia obstructiva después de colecistectomía: considera cálculo residual, estenosis biliar y lesión maligna. No atribuyas toda dilatación a coledocolitiasis.`,
  gpc: {
    mexico: "Consultar protocolos institucionales vigentes para estenosis y lesiones de la vía biliar.",
    internacional: "Guías vigentes sobre diagnóstico y manejo de estenosis biliares."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. ASGE guideline on choledocholithiasis. Gastrointest Endosc. 2019."
  ]
},
{
  id: "GASTRO-160",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Integración diagnóstica y elección del procedimiento",
  dificultad: "Extrema",
  caso: `Femenina de 58 años presenta ictericia, coluria y elevación de bilirrubina directa. El ultrasonido muestra colelitiasis y un colédoco de 8 mm, sin cálculo visible. No tiene fiebre, hipotensión ni dolor persistente. La bilirrubina total es de 2.6 mg/dL y las aminotransferasas están discretamente elevadas. La paciente está estable y no existen datos de pancreatitis.`,
  pregunta: "¿Cuál es el enfoque más apropiado si la evaluación inicial la sitúa en probabilidad intermedia de coledocolitiasis?",
  opciones: [
    "Realizar CPRE de rutina como primera prueba en todo paciente con ictericia.",
    "Utilizar colangiorresonancia o ultrasonido endoscópico para confirmar el cálculo antes de una intervención terapéutica.",
    "Descartar coledocolitiasis por la ausencia de fiebre.",
    "Indicar antibióticos de amplio espectro sin investigar la obstrucción.",
    "Realizar colecistectomía sin considerar la posibilidad de un cálculo en el colédoco."
  ],
  respuestaCorrecta: 1,
  explicacion: `La probabilidad intermedia requiere una estrategia que confirme la coledocolitiasis antes de exponer al paciente a una CPRE innecesaria. La colangiorresonancia o el ultrasonido endoscópico son opciones adecuadas. La ausencia de fiebre reduce la sospecha de colangitis, pero no excluye obstrucción biliar. Si se confirma el cálculo, se planifica la extracción o el drenaje; si no se confirma, deben buscarse otras causas de colestasis y reevaluarse la evolución clínica.`,
  perlaENARM: `La estratificación de riesgo determina el siguiente paso: alto riesgo suele conducir a CPRE terapéutica; riesgo intermedio, a colangiorresonancia o ultrasonido endoscópico.`,
  gpc: {
    mexico: "Verificar la GPC mexicana vigente sobre diagnóstico de coledocolitiasis.",
    internacional: "ASGE guideline on choledocholithiasis, 2019."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. ASGE guideline on the role of endoscopy in the evaluation and management of choledocholithiasis. Gastrointest Endosc. 2019;89:1075-1105.e15."
  ]
},

{
  id: "GASTRO-161",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Criterios de alto riesgo ASGE",
  dificultad: "Extrema",
  caso: `Masculino de 64 años con dolor biliar e ictericia presenta bilirrubina total de 4.8 mg/dL. El ultrasonido demuestra colédoco de 11 mm, pero no visualiza un cálculo. Está afebril, sin hipotensión y sin alteración del estado mental. No hay evidencia clínica de pancreatitis.`,
  pregunta: "Según los criterios ASGE 2019, ¿cómo debe interpretarse la combinación de bilirrubina superior a 4 mg/dL y colédoco dilatado?",
  opciones: [
    "Corresponde a bajo riesgo y no requiere más evaluación.",
    "Constituye un criterio de alto riesgo que puede justificar CPRE terapéutica en el contexto clínico apropiado.",
    "Confirma hepatitis autoinmunitaria.",
    "Excluye coledocolitiasis porque el cálculo no se visualizó.",
    "Obliga a realizar colecistectomía sin valorar la vía biliar."
  ],
  respuestaCorrecta: 1,
  explicacion: `Los criterios ASGE 2019 incluyen como alto riesgo la combinación de bilirrubina total superior a 4 mg/dL y dilatación del colédoco, así como la visualización de un cálculo o la presencia de colangitis ascendente. Esta estratificación permite seleccionar pacientes para CPRE terapéutica. Debe considerarse el contexto clínico y la posibilidad de diagnósticos alternativos, así como los riesgos del procedimiento.`,
  perlaENARM: `ASGE 2019: bilirrubina >4 mg/dL más colédoco dilatado constituye un criterio de alto riesgo de coledocolitiasis.`,
  gpc: {
    mexico: "Verificar la GPC mexicana vigente sobre coledocolitiasis.",
    internacional: "ASGE guideline on choledocholithiasis, 2019."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. Gastrointest Endosc. 2019;89:1075-1105.e15."
  ]
},
{
  id: "GASTRO-162",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Falsos positivos y probabilidad preprueba",
  dificultad: "Alta",
  caso: `Femenina de 74 años presenta elevación aislada y leve de fosfatasa alcalina en un control de rutina. No tiene dolor biliar, ictericia ni coluria. La bilirrubina es normal y el ultrasonido muestra colédoco de 7 mm, sin cálculo ni dilatación intrahepática. No se dispone de estudios previos para comparar el diámetro de la vía biliar.`,
  pregunta: "¿Cuál es el enfoque más apropiado?",
  opciones: [
    "Realizar CPRE inmediata únicamente por el diámetro del colédoco.",
    "Integrar edad, antecedentes quirúrgicos, pruebas hepáticas y síntomas antes de atribuir el hallazgo a coledocolitiasis.",
    "Diagnosticar colangitis grave.",
    "Indicar antibióticos intravenosos.",
    "Asumir obstrucción maligna confirmada."
  ],
  respuestaCorrecta: 1,
  explicacion: `El diámetro del colédoco debe interpretarse según edad, antecedentes de colecistectomía, técnica de imagen y contexto clínico. Una dilatación discreta aislada, sin síntomas ni hiperbilirrubinemia, no demuestra coledocolitiasis y no justifica por sí sola una CPRE. Debe confirmarse si la fosfatasa alcalina tiene origen hepatobiliar y repetirse o ampliar la evaluación según la evolución y el resto de las pruebas hepáticas.`,
  perlaENARM: `No interpretes el diámetro del colédoco de forma aislada. Integra síntomas, bilirrubina, antecedentes y otros hallazgos de imagen.`,
  gpc: {
    mexico: "Verificar protocolos vigentes para evaluación de pruebas hepáticas anormales.",
    internacional: "ASGE guideline on choledocholithiasis, 2019."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. Gastrointest Endosc. 2019;89:1075-1105.e15."
  ]
},
{
  id: "GASTRO-163",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Coledocolitiasis y anticoagulación",
  dificultad: "Extrema",
  caso: `Masculino de 71 años con fibrilación auricular toma anticoagulante oral. Presenta coledocolitiasis confirmada por imagen y requiere intervención endoscópica. Está hemodinámicamente estable y no tiene colangitis ni choque. Se anticipa que la extracción podría requerir esfinterotomía, procedimiento con riesgo hemorrágico significativo.`,
  pregunta: "¿Cuál es el principio más apropiado para planificar el procedimiento?",
  opciones: [
    "Ignorar la anticoagulación porque la CPRE nunca produce hemorragia.",
    "Suspender el anticoagulante por tiempo indefinido sin valorar riesgo tromboembólico.",
    "Planificar la intervención con valoración del riesgo hemorrágico y tromboembólico, ajustando el anticoagulante según fármaco, función renal y urgencia.",
    "Administrar vitamina K a todos los pacientes, independientemente del anticoagulante utilizado.",
    "Realizar esfinterotomía inmediata en todos los casos sin modificar ni valorar el tratamiento antitrombótico."
  ],
  respuestaCorrecta: 2,
  explicacion: `La esfinterotomía endoscópica implica riesgo de hemorragia, mientras que interrumpir anticoagulación puede aumentar el riesgo tromboembólico. La conducta debe individualizarse según el anticoagulante, la función renal, el riesgo de sangrado, el riesgo de embolia y la urgencia del drenaje. Si se necesita drenaje urgente, puede ser posible realizar una estrategia de descompresión temporal sin esfinterotomía y completar la extracción después, según el escenario y la experiencia disponible. La reversión o interrupción farmacológica debe seguir protocolos específicos.`,
  perlaENARM: `Antes de CPRE con esfinterotomía, evalúa riesgo hemorrágico y tromboembólico. En urgencias puede requerirse una estrategia de drenaje adaptada al tratamiento antitrombótico.`,
  gpc: {
    mexico: "Consultar protocolo institucional vigente de endoscopia y manejo perioperatorio de anticoagulantes.",
    internacional: "Guías vigentes de endoscopia gastrointestinal en pacientes que reciben antitrombóticos."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. ASGE guideline on choledocholithiasis. Gastrointest Endosc. 2019.",
    "Guías de sociedades de endoscopia gastrointestinal sobre manejo de antitrombóticos en procedimientos endoscópicos."
  ]
},
{
  id: "GASTRO-164",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Coledocolitiasis durante el embarazo",
  dificultad: "Extrema",
  caso: `Femenina de 29 años con embarazo de 24 semanas presenta dolor en hipocondrio derecho, ictericia y patrón bioquímico colestásico. El ultrasonido sugiere un cálculo en el colédoco. Está afebril y hemodinámicamente estable, sin pancreatitis ni datos de colangitis. Se requiere confirmar la obstrucción y planificar el tratamiento evitando exposición innecesaria.`,
  pregunta: "¿Cuál es el enfoque más apropiado?",
  opciones: [
    "Evitar toda evaluación de la vía biliar hasta después del parto, independientemente de la evolución.",
    "Utilizar ultrasonido y, si se necesita mayor confirmación, considerar colangiorresonancia sin gadolinio; reservar CPRE terapéutica para indicaciones clínicas apropiadas con medidas para minimizar riesgos.",
    "Realizar tomografía contrastada en todos los casos como primera elección.",
    "Indicar CPRE diagnóstica rutinaria sin confirmar la sospecha.",
    "Administrar antibióticos profilácticos durante todo el embarazo."
  ],
  respuestaCorrecta: 1,
  explicacion: `Durante el embarazo se priorizan modalidades de imagen que no utilizan radiación ionizante cuando son suficientes. El ultrasonido es el estudio inicial y la colangiorresonancia sin gadolinio puede ayudar a evaluar la vía biliar. La CPRE puede realizarse cuando existe una indicación terapéutica clara, con participación multidisciplinaria y técnicas que reduzcan la exposición fetal a radiación. La urgencia depende de la presencia de obstrucción persistente, colangitis o pancreatitis; no debe retrasarse un tratamiento necesario solo por el embarazo.`,
  perlaENARM: `Embarazo con sospecha de coledocolitiasis: ultrasonido primero; considera colangiorresonancia sin gadolinio. CPRE si hay indicación terapéutica clara y medidas de protección apropiadas.`,
  gpc: {
    mexico: "Consultar protocolos obstétricos y hepatobiliares institucionales vigentes.",
    internacional: "Guías vigentes de manejo endoscópico de enfermedad biliar durante el embarazo."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. ASGE guideline on choledocholithiasis. Gastrointest Endosc. 2019.",
    "Guías vigentes sobre endoscopia gastrointestinal durante el embarazo."
  ]
},
{
  id: "GASTRO-165",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Coledocolitiasis y enfermedad hepática crónica",
  dificultad: "Alta",
  caso: `Masculino de 63 años con cirrosis compensada presenta dolor biliar e ictericia. La bilirrubina directa está elevada y la colangiorresonancia identifica un cálculo en el colédoco distal. No hay ascitis significativa, encefalopatía ni hemorragia digestiva activa. Se considera tratamiento endoscópico.`,
  pregunta: "¿Cuál es el principio más apropiado para planificar el manejo?",
  opciones: [
    "La cirrosis contraindica absolutamente cualquier intervención endoscópica.",
    "Evaluar gravedad de la cirrosis, coagulación, plaquetas, función renal y riesgo anestésico, y planificar el tratamiento con un equipo experimentado.",
    "Administrar antibióticos durante seis meses antes de cualquier procedimiento.",
    "Realizar cirugía abierta urgente en todos los pacientes cirróticos.",
    "Ignorar el riesgo de sangrado porque la CPRE no tiene complicaciones."
  ],
  respuestaCorrecta: 1,
  explicacion: `La cirrosis puede aumentar los riesgos de sangrado, infección, descompensación y complicaciones anestésicas, pero no constituye una contraindicación absoluta para tratar una obstrucción biliar. Debe evaluarse la reserva hepática, la presencia de hipertensión portal, la función renal, las plaquetas y la coagulación, además de la urgencia del tratamiento. La estrategia se individualiza y puede favorecer tratamiento endoscópico cuando la extracción o el drenaje sean necesarios.`,
  perlaENARM: `En cirrosis, individualiza el riesgo antes de una intervención biliar. Una obstrucción significativa debe tratarse, pero el procedimiento requiere planificación cuidadosa.`,
  gpc: {
    mexico: "Consultar protocolos institucionales de endoscopia en pacientes con hepatopatía crónica.",
    internacional: "ASGE guideline on choledocholithiasis, 2019."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. Gastrointest Endosc. 2019;89:1075-1105.e15."
  ]
},
{
  id: "GASTRO-166",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Litiasis recurrente del colédoco",
  dificultad: "Alta",
  caso: `Masculino de 70 años presenta un segundo episodio de coledocolitiasis dos años después de una CPRE con extracción completa. La vesícula fue retirada previamente. El ultrasonido muestra colédoco dilatado y la colangiorresonancia confirma un nuevo cálculo. No tiene fiebre ni datos de colangitis.`,
  pregunta: "¿Cuál es el enfoque más apropiado?",
  opciones: [
    "Asumir que es imposible que haya recurrencia después de una CPRE.",
    "Tratar el cálculo actual y evaluar factores predisponentes, como dilatación biliar, estenosis o alteraciones anatómicas.",
    "Indicar colecistectomía, aunque ya no tenga vesícula.",
    "Administrar únicamente analgésicos y omitir la evaluación de la vía biliar.",
    "Realizar hepatectomía como tratamiento rutinario."
  ],
  respuestaCorrecta: 1,
  explicacion: `La recurrencia de coledocolitiasis puede ocurrir incluso después de una extracción completa y una colecistectomía. Debe tratarse la obstrucción actual y valorar factores predisponentes, como dilatación del colédoco, estenosis, divertículo periampular, alteraciones anatómicas o litiasis intrahepática. La selección de la intervención depende de la anatomía, el tamaño del cálculo y los hallazgos clínicos. La recurrencia no implica por sí sola que el procedimiento previo haya sido incorrecto.`,
  perlaENARM: `La coledocolitiasis puede recurrir tras CPRE y colecistectomía. Trata el episodio y busca factores anatómicos predisponentes.`,
  gpc: {
    mexico: "Consultar protocolos institucionales para coledocolitiasis recurrente.",
    internacional: "ASGE guideline on choledocholithiasis, 2019."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. Gastrointest Endosc. 2019;89:1075-1105.e15."
  ]
},
{
  id: "GASTRO-167",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Colestasis persistente sin cálculo demostrado",
  dificultad: "Extrema",
  caso: `Femenina de 66 años presenta prurito e ictericia persistentes. La bilirrubina directa y la fosfatasa alcalina están elevadas. El ultrasonido y la colangiorresonancia no muestran cálculos, pero identifican un estrechamiento distal del colédoco. No tiene fiebre ni hipotensión. Se requiere diferenciar estenosis benigna de una causa maligna.`,
  pregunta: "¿Cuál es el siguiente paso más apropiado?",
  opciones: [
    "Asumir coledocolitiasis oculta y repetir CPRE de manera indefinida.",
    "Completar la evaluación de la estenosis con imagen y, según el contexto, muestreo endoscópico y valoración especializada.",
    "Descartar toda obstrucción porque no hay cálculo.",
    "Indicar antibióticos de amplio espectro durante seis semanas sin más estudios.",
    "Diagnosticar síndrome de intestino irritable."
  ],
  respuestaCorrecta: 1,
  explicacion: `La colestasis persistente con estrechamiento biliar y ausencia de cálculos requiere estudiar una estenosis. Las causas incluyen lesiones posquirúrgicas, inflamación crónica y neoplasias. La evaluación puede incluir imagen complementaria, CPRE con toma de muestras y/o ultrasonido endoscópico, de acuerdo con la localización y la sospecha clínica. La ausencia de cálculo no excluye una obstrucción mecánica que requiera tratamiento.`,
  perlaENARM: `Colestasis persistente + estenosis biliar sin cálculo: investiga estenosis benigna y malignidad antes de atribuir el cuadro a litiasis.`,
  gpc: {
    mexico: "Consultar protocolos institucionales vigentes para estenosis biliar y sospecha de malignidad.",
    internacional: "Guías vigentes sobre diagnóstico de estenosis biliares."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. ASGE guideline on choledocholithiasis. Gastrointest Endosc. 2019."
  ]
},
{
  id: "GASTRO-168",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Hemorragia posterior a esfinterotomía",
  dificultad: "Extrema",
  caso: `Masculino de 59 años se somete a CPRE con esfinterotomía para extracción de un cálculo del colédoco. Horas después presenta hematemesis y melena, taquicardia y descenso de hemoglobina. Se sospecha hemorragia posterior a esfinterotomía. No existe evidencia de perforación.`,
  pregunta: "¿Cuál es la conducta inicial más apropiada?",
  opciones: [
    "Dar de alta si el paciente está consciente.",
    "Estabilizar hemodinámicamente, evaluar gravedad y coordinar manejo endoscópico hemostático según el estado clínico.",
    "Administrar únicamente antiácidos orales.",
    "Indicar colonoscopia electiva dentro de seis meses.",
    "Reiniciar de inmediato toda anticoagulación sin evaluar el sangrado."
  ],
  respuestaCorrecta: 1,
  explicacion: `La hemorragia posterior a esfinterotomía es una complicación relevante de la CPRE. El manejo inicial incluye valoración hemodinámica, acceso venoso, estudios de laboratorio y reanimación según necesidad. Si el sangrado es significativo o persistente, puede requerir hemostasia endoscópica mediante técnicas apropiadas. La corrección de coagulopatías y la decisión sobre antitrombóticos deben individualizarse. El seguimiento depende de la estabilidad y de la respuesta al tratamiento.`,
  perlaENARM: `Hematemesis o melena después de esfinterotomía: sospecha hemorragia pos-CPRE. Prioriza estabilización y control hemostático cuando esté indicado.`,
  gpc: {
    mexico: "Consultar protocolo institucional para hemorragia digestiva y complicaciones de CPRE.",
    internacional: "Guías vigentes de manejo de eventos adversos relacionados con CPRE."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. Guías de manejo de complicaciones de CPRE; consultar versión vigente."
  ]
},
{
  id: "GASTRO-169",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Perforación relacionada con CPRE",
  dificultad: "Extrema",
  caso: `Femenina de 62 años presenta dolor abdominal intenso y persistente después de una CPRE terapéutica. Tiene taquicardia, fiebre y dolor a la palpación abdominal. La radiografía y la tomografía sugieren aire extraluminal y líquido retroperitoneal. Se sospecha perforación relacionada con el procedimiento.`,
  pregunta: "¿Cuál es el principio de manejo más apropiado?",
  opciones: [
    "Dar de alta porque el dolor después de CPRE siempre es benigno.",
    "Realizar valoración urgente, estabilización, imagen y manejo multidisciplinario; definir tratamiento conservador, endoscópico o quirúrgico según tipo de perforación y estabilidad.",
    "Administrar únicamente antiespasmódicos.",
    "Esperar varios días sin monitorización.",
    "Indicar alimentación libre y seguimiento telefónico."
  ],
  respuestaCorrecta: 1,
  explicacion: `La sospecha de perforación después de CPRE requiere evaluación urgente. El manejo depende de la localización, el tamaño, el grado de contaminación, el estado hemodinámico y la presencia de sepsis. Algunos casos seleccionados pueden tratarse de manera conservadora con ayuno, antibióticos, soporte y vigilancia estrecha; otros requieren cierre endoscópico, drenaje o cirugía. El deterioro clínico, la peritonitis o el fracaso del tratamiento conservador obligan a escalar el manejo.`,
  perlaENARM: `Dolor intenso persistente, fiebre o signos peritoneales después de CPRE: descarta perforación y solicita evaluación urgente.`,
  gpc: {
    mexico: "Consultar protocolo institucional de complicaciones de CPRE y urgencias quirúrgicas.",
    internacional: "Guías vigentes de manejo de perforación relacionada con endoscopia gastrointestinal."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. Guías de eventos adversos relacionados con CPRE; consultar versión vigente."
  ]
},
{
  id: "GASTRO-170",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Integración de riesgo y selección terapéutica",
  dificultad: "Extrema",
  caso: `Masculino de 57 años presenta dolor biliar, bilirrubina total de 2.1 mg/dL y fosfatasa alcalina elevada. El ultrasonido muestra colédoco de 8 mm, sin cálculo visible. Está afebril, sin hipotensión y sin datos de pancreatitis. Se considera una probabilidad intermedia de coledocolitiasis.`,
  pregunta: "¿Cuál es la estrategia diagnóstica más apropiada?",
  opciones: [
    "CPRE inmediata en todos los casos de riesgo intermedio.",
    "Colangiorresonancia o ultrasonido endoscópico, reservando CPRE para confirmación o una indicación terapéutica clara.",
    "No realizar más estudios porque no existe fiebre.",
    "Administrar antibióticos durante un mes.",
    "Indicar cirugía pancreática."
  ],
  respuestaCorrecta: 1,
  explicacion: `La probabilidad intermedia requiere confirmación con una prueba de imagen adecuada, como colangiorresonancia o ultrasonido endoscópico. La CPRE conlleva riesgos y debe reservarse principalmente para el tratamiento de una obstrucción confirmada o para escenarios en los que la indicación terapéutica sea clara. La estratificación de riesgo evita procedimientos invasivos innecesarios y permite organizar el tratamiento definitivo.`,
  perlaENARM: `Riesgo intermedio de coledocolitiasis: confirma con colangiorresonancia o ultrasonido endoscópico antes de CPRE, salvo que el contexto cambie la urgencia.`,
  gpc: {
    mexico: "Verificar la GPC mexicana vigente sobre coledocolitiasis.",
    internacional: "ASGE guideline on choledocholithiasis, 2019."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. Gastrointest Endosc. 2019;89:1075-1105.e15."
  ]
},

{
  id: "GASTRO-171",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Cálculo pequeño y obstrucción transitoria",
  dificultad: "Alta",
  caso: `Femenina de 50 años presenta dolor en hipocondrio derecho e ictericia transitoria. La bilirrubina total desciende de 3.6 a 1.4 mg/dL en 36 horas. La ecografía no identifica cálculos en el colédoco, pero muestra colelitiasis. No presenta fiebre ni datos de pancreatitis. El equipo considera que un cálculo pequeño pudo haber migrado espontáneamente.`,
  pregunta: "¿Qué dato debe guiar la decisión de continuar estudiando la vía biliar?",
  opciones: [
    "Únicamente la edad de la paciente.",
    "La evolución clínica y bioquímica integrada con la probabilidad de cálculo residual y los hallazgos de imagen.",
    "La normalización de la bilirrubina excluye absolutamente todo cálculo residual.",
    "La presencia de colelitiasis obliga a CPRE urgente en todos los casos.",
    "La ausencia de fiebre confirma que no hubo obstrucción."
  ],
  respuestaCorrecta: 1,
  explicacion: `La mejoría espontánea puede corresponder a migración de un cálculo, pero la decisión de realizar más estudios depende de la probabilidad residual de obstrucción. Si la evolución clínica y bioquímica es favorable y el riesgo es bajo, puede ser razonable evitar procedimientos invasivos. Si persiste un patrón colestásico, existe dilatación biliar o la sospecha continúa siendo intermedia, se considera colangiorresonancia o ultrasonido endoscópico. La normalización de un parámetro aislado no sustituye la valoración integral.`,
  perlaENARM: `La migración espontánea es posible, pero el seguimiento debe basarse en síntomas, pruebas hepáticas y riesgo residual de obstrucción.`,
  gpc: {
    mexico: "Verificar la GPC mexicana vigente sobre coledocolitiasis.",
    internacional: "ASGE guideline on choledocholithiasis, 2019."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. Gastrointest Endosc. 2019;89:1075-1105.e15."
  ]
},
{
  id: "GASTRO-172",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Diferenciación entre coledocolitiasis y colangitis",
  dificultad: "Alta",
  caso: `Masculino de 59 años presenta ictericia, coluria y dolor biliar. Tiene bilirrubina directa elevada y dilatación del colédoco con cálculo distal en el ultrasonido. Está afebril, sin escalofríos, con leucocitos normales y hemodinámicamente estable.`,
  pregunta: "¿Cuál es la interpretación más apropiada?",
  opciones: [
    "Coledocolitiasis probable sin evidencia clínica actual suficiente de colangitis.",
    "Colangitis grave confirmada por la ictericia aislada.",
    "Pancreatitis aguda confirmada.",
    "Hepatitis viral confirmada.",
    "Cólico biliar no complicado, porque nunca existe obstrucción con ictericia."
  ],
  respuestaCorrecta: 0,
  explicacion: `El cálculo visualizado en el colédoco establece coledocolitiasis. Sin embargo, la ausencia de inflamación sistémica y de otros datos infecciosos no sustenta por sí sola colangitis. Debe tratarse la obstrucción según la indicación clínica, habitualmente mediante CPRE terapéutica si es apropiada, y vigilar la aparición de fiebre, escalofríos, hipotensión o deterioro. Coledocolitiasis y colangitis están relacionadas, pero no son sinónimos.`,
  perlaENARM: `Coledocolitiasis es la presencia de cálculo en el colédoco; colangitis implica infección/inflamación asociada a obstrucción y requiere valorar urgencia del drenaje.`,
  gpc: {
    mexico: "Verificar la GPC mexicana vigente sobre coledocolitiasis y colangitis.",
    internacional: "ASGE guideline on choledocholithiasis, 2019; Tokyo Guidelines 2018."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. Gastrointest Endosc. 2019;89:1075-1105.e15.",
    "Kiriyama S, et al. Tokyo Guidelines 2018. J Hepatobiliary Pancreat Sci. 2018."
  ]
},
{
  id: "GASTRO-173",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Colangitis con drenaje incompleto",
  dificultad: "Extrema",
  caso: `Femenina de 70 años con colangitis por coledocolitiasis es sometida a CPRE. Debido a un cálculo impactado de gran tamaño, no se logra extracción completa. Se coloca una prótesis para descompresión y la paciente mejora clínicamente. Se encuentra afebril y con descenso de bilirrubina, pero persiste un defecto de llenado en el colédoco.`,
  pregunta: "¿Cuál es la estrategia de seguimiento más apropiada?",
  opciones: [
    "Considerar resuelta definitivamente la coledocolitiasis y omitir seguimiento.",
    "Planificar nueva intervención para extracción definitiva y establecer seguimiento de la prótesis temporal.",
    "Dejar la prótesis indefinidamente sin control.",
    "Retirar la prótesis de inmediato sin valorar la permeabilidad de la vía biliar.",
    "Indicar antibióticos permanentes como sustituto de la extracción."
  ],
  respuestaCorrecta: 1,
  explicacion: `La mejoría clínica después del drenaje no significa que se haya eliminado el cálculo. Es necesario planificar el tratamiento definitivo, que puede incluir técnicas avanzadas de extracción, y programar el retiro o recambio de la prótesis temporal. La vigilancia debe contemplar recurrencia de fiebre, ictericia, dolor u otros datos de obstrucción. La estrategia depende del tamaño del cálculo, la anatomía y la experiencia disponible.`,
  perlaENARM: `Drenaje exitoso no equivale a extracción completa. Todo cálculo residual y prótesis temporal necesitan un plan de resolución y seguimiento.`,
  gpc: {
    mexico: "Consultar protocolo institucional para coledocolitiasis difícil y seguimiento de prótesis biliares.",
    internacional: "ASGE guideline on choledocholithiasis, 2019."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. Gastrointest Endosc. 2019;89:1075-1105.e15."
  ]
},
{
  id: "GASTRO-174",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Evaluación de la vía biliar antes de colecistectomía",
  dificultad: "Alta",
  caso: `Masculino de 45 años programado para colecistectomía por colelitiasis sintomática presenta bilirrubina total de 2.0 mg/dL y elevación leve de fosfatasa alcalina. El ultrasonido muestra colédoco de 7 mm, sin cálculo visible. No presenta fiebre, ictericia clínica ni pancreatitis. Se sospecha riesgo intermedio de coledocolitiasis.`,
  pregunta: "¿Qué estrategia puede ayudar a evitar una CPRE innecesaria antes de la cirugía?",
  opciones: [
    "Ignorar la alteración de pruebas hepáticas.",
    "Realizar colangiorresonancia, ultrasonido endoscópico o una estrategia intraoperatoria apropiada, según disponibilidad y experiencia.",
    "Realizar CPRE diagnóstica obligatoria en todos los pacientes.",
    "Administrar antibióticos durante dos semanas y repetir el ultrasonido sin reevaluar.",
    "Cancelar de forma definitiva la colecistectomía."
  ],
  respuestaCorrecta: 1,
  explicacion: `En probabilidad intermedia, la vía biliar puede evaluarse mediante colangiorresonancia, ultrasonido endoscópico o estrategias intraoperatorias, como colangiografía, según la experiencia local. La selección depende de recursos, anatomía y planificación quirúrgica. Esta estrategia evita someter a todos los pacientes a CPRE, que es invasiva y puede causar complicaciones. Si se confirma un cálculo, se define el momento y la técnica de extracción.`,
  perlaENARM: `Antes de colecistectomía, la probabilidad intermedia de coledocolitiasis puede resolverse con imagen adicional o evaluación intraoperatoria; no exige CPRE diagnóstica automática.`,
  gpc: {
    mexico: "Verificar la GPC mexicana vigente sobre colelitiasis y coledocolitiasis.",
    internacional: "ASGE guideline on choledocholithiasis, 2019."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. Gastrointest Endosc. 2019;89:1075-1105.e15."
  ]
},
{
  id: "GASTRO-175",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Coledocolitiasis y lesión renal aguda",
  dificultad: "Extrema",
  caso: `Masculino de 77 años con coledocolitiasis presenta vómitos, deshidratación y creatinina de 2.2 mg/dL. Está afebril, sin hipotensión ni datos de colangitis. La bilirrubina total es de 5.2 mg/dL y el ultrasonido muestra cálculo distal en el colédoco con dilatación proximal. Se planea tratamiento endoscópico.`,
  pregunta: "¿Qué aspecto adicional debe considerarse en la preparación para la intervención?",
  opciones: [
    "La lesión renal no modifica ninguna decisión clínica.",
    "Evaluar estado de volumen, función renal, electrolitos y ajuste de medicamentos, además de coordinar el tratamiento de la obstrucción.",
    "Administrar contraste intravenoso repetido sin evaluar función renal.",
    "Evitar toda intervención biliar hasta que la creatinina se normalice por completo, aunque la obstrucción persista.",
    "Indicar antibióticos nefrotóxicos sin ajuste."
  ],
  respuestaCorrecta: 1,
  explicacion: `La lesión renal aguda requiere evaluación de volumen, diuresis, electrolitos, medicamentos y causas precipitantes. La obstrucción biliar debe tratarse según su gravedad y no necesariamente esperar a la normalización completa de la función renal. La planificación de CPRE debe considerar el estado hemodinámico y los riesgos del procedimiento, así como ajustar fármacos cuando corresponda. Si hay infección o deterioro, el control de la obstrucción puede ser urgente.`,
  perlaENARM: `En coledocolitiasis con lesión renal aguda, optimiza volumen y función renal sin retrasar injustificadamente el control de una obstrucción que requiere intervención.`,
  gpc: {
    mexico: "Consultar protocolos institucionales para lesión renal aguda y procedimientos endoscópicos.",
    internacional: "ASGE guideline on choledocholithiasis, 2019."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. Gastrointest Endosc. 2019;89:1075-1105.e15."
  ]
},
{
  id: "GASTRO-176",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Coledocolitiasis con anatomía alterada",
  dificultad: "Extrema",
  caso: `Femenina de 60 años con antecedente de gastrectomía y reconstrucción en Y de Roux presenta ictericia y coledocolitiasis confirmada por colangiorresonancia. No tiene colangitis ni inestabilidad hemodinámica. La anatomía quirúrgica dificulta el acceso endoscópico convencional a la papila.`,
  pregunta: "¿Cuál es el principio más apropiado para elegir el tratamiento?",
  opciones: [
    "La coledocolitiasis es intratable en pacientes con anatomía alterada.",
    "Planificar una estrategia individualizada con un equipo experimentado, considerando técnicas endoscópicas avanzadas, acceso asistido, abordaje percutáneo o cirugía según recursos.",
    "Realizar siempre CPRE convencional sin considerar la reconstrucción.",
    "Administrar únicamente analgésicos y omitir el tratamiento.",
    "Indicar antibióticos como método de extracción del cálculo."
  ],
  respuestaCorrecta: 1,
  explicacion: `La anatomía alterada puede impedir la CPRE convencional, pero existen estrategias especializadas: enteroscopia asistida, técnicas endoscópicas guiadas por ultrasonido en escenarios seleccionados, acceso percutáneo o exploración quirúrgica. La elección depende de la reconstrucción, el tamaño y la localización del cálculo, la urgencia, la experiencia y los recursos. La ausencia de colangitis permite planificar con cuidado, pero no elimina la necesidad de resolver la obstrucción sintomática.`,
  perlaENARM: `Coledocolitiasis con anatomía alterada: requiere estrategia individualizada y experiencia avanzada; la CPRE convencional puede no ser factible.`,
  gpc: {
    mexico: "Consultar protocolo de endoscopia avanzada y cirugía hepatobiliar institucional.",
    internacional: "Guías y consensos vigentes de tratamiento de coledocolitiasis en anatomía gastrointestinal alterada."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. ASGE guideline on choledocholithiasis. Gastrointest Endosc. 2019."
  ]
},
{
  id: "GASTRO-177",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Cálculo impactado en la papila",
  dificultad: "Extrema",
  caso: `Masculino de 58 años presenta dolor epigástrico intenso, ictericia y vómitos. La bilirrubina total es de 6.1 mg/dL, la lipasa está elevada y el ultrasonido muestra dilatación del colédoco. La colangiorresonancia identifica un cálculo distal impactado en la región ampular. El paciente tiene fiebre y leucocitosis, por lo que se sospecha obstrucción con infección concomitante.`,
  pregunta: "¿Cuál es el enfoque prioritario?",
  opciones: [
    "Esperar a que el cálculo se disuelva espontáneamente sin monitorización.",
    "Iniciar tratamiento de la infección y organizar descompresión biliar urgente; la técnica definitiva dependerá de la anatomía y estabilidad.",
    "Realizar colonoscopia como tratamiento inicial.",
    "Administrar enzimas pancreáticas como único tratamiento.",
    "Posponer toda intervención durante varias semanas aunque exista colangitis."
  ],
  respuestaCorrecta: 1,
  explicacion: `Un cálculo impactado con infección biliar constituye una urgencia de control del foco. Se requieren antibióticos y drenaje biliar oportuno, habitualmente mediante CPRE cuando es posible. La extracción puede realizarse durante el mismo procedimiento si es segura; si no, se prioriza el drenaje y se planifica tratamiento definitivo posterior. La presencia de pancreatitis concomitante no elimina la indicación de drenaje cuando existe colangitis.`,
  perlaENARM: `Cálculo impactado + colangitis: controla la infección y descomprime la vía biliar. Si la extracción completa no es segura, prioriza drenaje.`,
  gpc: {
    mexico: "Consultar protocolos institucionales de colangitis, pancreatitis biliar y coledocolitiasis.",
    internacional: "ASGE guideline on cholangitis, 2021; ACG guideline on acute pancreatitis, 2024."
  },
  bibliografia: [
    "Buxbaum JL, et al. ASGE guideline on the management of cholangitis. Gastrointest Endosc. 2021.",
    "Tenner S, et al. ACG Clinical Guideline: Management of Acute Pancreatitis. Am J Gastroenterol. 2024."
  ]
},
{
  id: "GASTRO-178",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Cálculos múltiples y limpieza de la vía biliar",
  dificultad: "Alta",
  caso: `Femenina de 57 años se somete a CPRE por coledocolitiasis. Durante el procedimiento se extraen tres cálculos con balón. La colangiografía final muestra ausencia de defectos de llenado y drenaje adecuado. La paciente evoluciona estable y no presenta dolor significativo ni fiebre.`,
  pregunta: "¿Qué dato apoya que la extracción fue satisfactoria?",
  opciones: [
    "La persistencia de defectos de llenado en la colangiografía final.",
    "La ausencia de defectos de llenado residuales y el drenaje adecuado de la vía biliar, integrados con la evolución clínica.",
    "La elevación progresiva de bilirrubina después del procedimiento.",
    "La aparición de fiebre y escalofríos.",
    "La imposibilidad de visualizar la vía biliar durante el procedimiento."
  ],
  respuestaCorrecta: 1,
  explicacion: `La ausencia de defectos de llenado residuales y el drenaje adecuado en la colangiografía final apoyan una extracción completa. No obstante, la evaluación debe integrarse con la evolución clínica y bioquímica. La persistencia de ictericia, dolor, fiebre o alteraciones colestásicas puede sugerir cálculo residual, edema papilar u otra complicación. Después de resolver la coledocolitiasis, debe evaluarse el tratamiento de la fuente de cálculos cuando la vesícula permanece presente.`,
  perlaENARM: `Después de CPRE, confirma limpieza de la vía biliar y drenaje adecuado; vigila síntomas y pruebas hepáticas si persiste sospecha de obstrucción.`,
  gpc: {
    mexico: "Consultar protocolo institucional de seguimiento después de CPRE.",
    internacional: "ASGE guideline on choledocholithiasis, 2019."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. Gastrointest Endosc. 2019;89:1075-1105.e15."
  ]
},
{
  id: "GASTRO-179",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Persistencia de ictericia después de CPRE",
  dificultad: "Extrema",
  caso: `Masculino de 64 años es sometido a CPRE con extracción de un cálculo del colédoco. Cuarenta y ocho horas después persiste ictérico y la bilirrubina no disminuye como se esperaba. Presenta dolor leve, sin fiebre ni hipotensión. La nota del procedimiento describe extracción aparentemente completa, pero no documenta claramente una colangiografía final sin defectos de llenado.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Considerar siempre la ictericia persistente como un hallazgo normal y no investigar.",
    "Reevaluar obstrucción residual, edema papilar, complicaciones del procedimiento y otras causas; elegir estudios adicionales según evolución y hallazgos.",
    "Administrar antibióticos de por vida sin reevaluación.",
    "Realizar hepatectomía inmediata.",
    "Dar de alta sin seguimiento porque ya se realizó CPRE."
  ],
  respuestaCorrecta: 1,
  explicacion: `La bilirrubina puede tardar en disminuir después de resolver una obstrucción, pero la persistencia o progresión de ictericia obliga a reevaluar el caso. Deben considerarse cálculo residual, drenaje insuficiente, edema papilar, lesión biliar y otras causas de colestasis. La evaluación depende de la tendencia bioquímica, síntomas, hallazgos del procedimiento y estudios de imagen. Si hay fiebre, hipotensión o deterioro, se requiere valoración urgente por posible infección u obstrucción persistente.`,
  perlaENARM: `La ictericia no siempre desaparece inmediatamente tras CPRE, pero si persiste o empeora debe descartarse obstrucción residual o complicación.`,
  gpc: {
    mexico: "Consultar protocolo institucional para evaluación de ictericia persistente después de CPRE.",
    internacional: "ASGE guideline on choledocholithiasis, 2019."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. Gastrointest Endosc. 2019;89:1075-1105.e15."
  ]
},
{
  id: "GASTRO-180",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Integración de tratamiento endoscópico y quirúrgico",
  dificultad: "Extrema",
  caso: `Femenina de 52 años con colelitiasis sintomática y coledocolitiasis confirmada está estable, sin colangitis ni pancreatitis. El hospital dispone de CPRE terapéutica y de cirugía laparoscópica con experiencia en exploración de la vía biliar. El equipo debe elegir una estrategia que resuelva los cálculos y reduzca procedimientos innecesarios.`,
  pregunta: "¿Cuál es la afirmación más apropiada sobre las opciones de tratamiento?",
  opciones: [
    "La CPRE es siempre superior a cualquier estrategia quirúrgica, independientemente de la experiencia local.",
    "La exploración laparoscópica de la vía biliar nunca es una opción válida.",
    "La estrategia puede ser secuencial o quirúrgica en un solo tiempo, según experiencia, recursos, anatomía y situación clínica.",
    "La coledocolitiasis debe tratarse exclusivamente con antibióticos.",
    "La presencia de cálculos vesiculares contraindica resolver el cálculo del colédoco."
  ],
  respuestaCorrecta: 2,
  explicacion: `La coledocolitiasis puede manejarse con CPRE antes o después de la colecistectomía, o mediante exploración laparoscópica de la vía biliar durante la cirugía en centros con experiencia. La elección depende de la anatomía, la disponibilidad de endoscopia terapéutica, la experiencia quirúrgica, el riesgo del paciente y la logística. Cuando la vesícula permanece presente y hay colelitiasis sintomática, debe planificarse también su tratamiento para reducir recurrencias. No existe una estrategia universalmente superior en todos los entornos.`,
  perlaENARM: `El tratamiento de coledocolitiasis puede ser endoscópico o quirúrgico. La mejor estrategia depende del paciente, la anatomía y la experiencia del centro.`,
  gpc: {
    mexico: "Verificar la GPC mexicana vigente sobre coledocolitiasis y colelitiasis.",
    internacional: "ASGE guideline on choledocholithiasis, 2019; WSES guidelines for acute calculous cholecystitis, 2020."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. Gastrointest Endosc. 2019;89:1075-1105.e15.",
    "Pisano M, et al. WSES updated guidelines for acute calculous cholecystitis. World J Emerg Surg. 2020;15:61."
  ]
},
{
  id: "GASTRO-181",
  especialidad: "Gastroenterología",
  tema: "Abdomen agudo",
  subtema: "Evaluación inicial y datos de alarma",
  dificultad: "media",
  caso: `Masculino de 67 años, con antecedente de fibrilación auricular sin anticoagulación, que acude por dolor abdominal de inicio súbito, intenso y difuso, de 90 minutos de evolución. Refiere náuseas y una evacuación diarreica. A la exploración presenta abdomen blando, dolor difuso de intensidad moderada y ausencia de rigidez involuntaria. Frecuencia cardiaca de 112 lpm y presión arterial de 105/68 mmHg. El dolor referido por el paciente es mucho mayor que los hallazgos encontrados durante la exploración física.`,
  pregunta: "¿Cuál es el diagnóstico que debe sospecharse prioritariamente?",
  opciones: [
    "Pancreatitis aguda",
    "Isquemia mesentérica aguda",
    "Diverticulitis aguda",
    "Colecistitis aguda",
    "Gastroenteritis infecciosa"
  ],
  respuestaCorrecta: 1,
  explicacion: "La isquemia mesentérica aguda debe sospecharse ante dolor abdominal intenso desproporcionado respecto de los hallazgos iniciales de la exploración, especialmente en pacientes con fibrilación auricular, por el riesgo de embolia arterial. La ausencia inicial de irritación peritoneal no excluye una lesión intestinal grave. Se requiere valoración quirúrgica y vascular urgente, reanimación y angiotomografía abdominal con contraste si el estado clínico permite realizarla sin retrasos peligrosos.",
  perlaENARM: "Dolor abdominal desproporcionado a la exploración física más fibrilación auricular: sospecha isquemia mesentérica aguda.",
  gpc: {
    mexico: "Consultar las recomendaciones mexicanas vigentes sobre abdomen agudo e isquemia mesentérica; verificar disponibilidad en el catálogo institucional de GPC.",
    internacional: "World Society of Emergency Surgery (WSES). Acute mesenteric ischemia: updated guidelines."
  },
  bibliografia: [
    "Bala M, et al. Acute mesenteric ischemia: updated guidelines of the World Society of Emergency Surgery. World Journal of Emergency Surgery. 2022.",
    "Tintinalli's Emergency Medicine: A Comprehensive Study Guide. Abdominal pain and mesenteric ischemia."
  ]
},
{
  id: "GASTRO-182",
  especialidad: "Gastroenterología",
  tema: "Abdomen agudo",
  subtema: "Irritación peritoneal",
  dificultad: "media",
  caso: `Femenina de 54 años que consulta por dolor abdominal de 18 horas de evolución, inicialmente epigástrico y posteriormente generalizado. Presenta fiebre de 38.7 °C, taquicardia y vómitos. A la exploración, el abdomen está rígido, con defensa involuntaria y dolor intenso a la descompresión. La paciente permanece inmóvil porque los movimientos incrementan el dolor.`,
  pregunta: "¿Cuál es la conducta inicial más apropiada?",
  opciones: [
    "Administrar un laxante y reevaluar en seis horas",
    "Solicitar endoscopia digestiva alta antes de iniciar tratamiento",
    "Iniciar reanimación, analgesia, antibióticos cuando estén indicados y valoración quirúrgica urgente",
    "Indicar tratamiento ambulatorio con antiespasmódicos",
    "Esperar el resultado de todos los estudios de laboratorio antes de intervenir"
  ],
  respuestaCorrecta: 2,
  explicacion: "La rigidez abdominal, la defensa involuntaria y el dolor a la descompresión sugieren irritación peritoneal. Se requiere estabilización hemodinámica, acceso intravenoso, evaluación de laboratorio e imagen cuando no retrase una intervención necesaria, analgesia y valoración quirúrgica urgente. Si se sospecha perforación o infección intraabdominal complicada, deben iniciarse antibióticos empíricos apropiados de manera oportuna.",
  perlaENARM: "La presencia de peritonismo obliga a descartar una causa quirúrgica urgente; la analgesia no debe retrasarse por temor a enmascarar el diagnóstico.",
  gpc: {
    mexico: "Consultar GPC mexicanas vigentes sobre abdomen agudo, peritonitis y sepsis de origen abdominal.",
    internacional: "World Society of Emergency Surgery. Guidelines on intra-abdominal infections."
  },
  bibliografia: [
    "Sartelli M, et al. WSES guidelines for management of intra-abdominal infections.",
    "Schwartz's Principles of Surgery. Acute abdomen and peritonitis."
  ]
},
{
  id: "GASTRO-183",
  especialidad: "Gastroenterología",
  tema: "Abdomen agudo",
  subtema: "Perforación de víscera hueca",
  dificultad: "alta",
  caso: `Masculino de 61 años con antecedente de consumo frecuente de antiinflamatorios no esteroideos. Presenta dolor epigástrico súbito, descrito como una puñalada, que posteriormente se generaliza. Tiene taquicardia, abdomen rígido y ausencia de ruidos intestinales. La radiografía de tórax en bipedestación muestra aire libre debajo de ambos hemidiafragmas.`,
  pregunta: "¿Cuál es el diagnóstico más probable?",
  opciones: [
    "Pancreatitis aguda edematosa",
    "Obstrucción intestinal por adherencias",
    "Colecistitis aguda alitiásica",
    "Perforación de úlcera péptica",
    "Gastritis erosiva sin complicaciones"
  ],
  respuestaCorrecta: 3,
  explicacion: "El dolor súbito con signos de peritonitis y neumoperitoneo sugiere perforación de una víscera hueca. En este contexto, el antecedente de AINE aumenta la probabilidad de úlcera péptica perforada. Se requiere reanimación, ayuno, antibióticos intravenosos, inhibición de la secreción ácida y valoración quirúrgica inmediata. La estrategia definitiva depende de la estabilidad del paciente, la extensión de la contaminación y los hallazgos clínicos e imagenológicos.",
  perlaENARM: "Dolor epigástrico súbito, abdomen rígido y aire subdiafragmático: piensa en úlcera péptica perforada.",
  gpc: {
    mexico: "Consultar recomendaciones mexicanas vigentes para úlcera péptica complicada y perforación de víscera hueca.",
    internacional: "World Society of Emergency Surgery. Perforated and bleeding peptic ulcer: WSES guidelines."
  },
  bibliografia: [
    "Tarasconi A, et al. Perforated and bleeding peptic ulcer: WSES guidelines. World Journal of Emergency Surgery. 2020.",
    "Sleisenger and Fordtran's Gastrointestinal and Liver Disease. Peptic ulcer disease."
  ]
},
{
  id: "GASTRO-184",
  especialidad: "Gastroenterología",
  tema: "Abdomen agudo",
  subtema: "Obstrucción intestinal",
  dificultad: "media",
  caso: `Femenina de 48 años con antecedente de histerectomía hace ocho años. Presenta dolor abdominal tipo cólico, distensión progresiva, vómitos biliosos y ausencia de evacuaciones y flatos durante 24 horas. A la exploración tiene distensión abdominal y ruidos intestinales aumentados de tono. La tomografía muestra dilatación de asas de intestino delgado con un punto de transición y sin datos iniciales de isquemia.`,
  pregunta: "Si permanece hemodinámicamente estable y no presenta datos de peritonitis, ¿cuál es el manejo inicial habitual?",
  opciones: [
    "Administrar antidiarreicos y continuar la alimentación",
    "Realizar colonoscopia urgente en todos los casos",
    "Iniciar reanimación con líquidos intravenosos, reposo intestinal, descompresión nasogástrica si está indicada y vigilancia estrecha",
    "Administrar laxantes estimulantes para resolver la obstrucción",
    "Indicar cirugía inmediata independientemente de la etiología y de los hallazgos"
  ],
  respuestaCorrecta: 2,
  explicacion: "El cuadro es compatible con obstrucción del intestino delgado, posiblemente por adherencias posquirúrgicas. En pacientes seleccionados sin peritonitis, estrangulación, isquemia ni perforación, puede intentarse tratamiento conservador con ayuno, líquidos intravenosos, corrección de alteraciones hidroelectrolíticas, descompresión nasogástrica según el caso y exploraciones seriadas. La aparición de deterioro clínico o datos de complicación obliga a intervención urgente.",
  perlaENARM: "La obstrucción intestinal con peritonitis, estrangulación, isquemia o perforación requiere valoración quirúrgica urgente.",
  gpc: {
    mexico: "Consultar GPC mexicanas vigentes sobre obstrucción intestinal y abdomen agudo.",
    internacional: "World Society of Emergency Surgery. Bologna guidelines for adhesive small bowel obstruction."
  },
  bibliografia: [
    "ten Broek RPG, et al. Bologna guidelines for diagnosis and management of adhesive small bowel obstruction: 2017 update. World Journal of Emergency Surgery. 2018.",
    "Schwartz's Principles of Surgery. Small bowel obstruction."
  ]
},
{
  id: "GASTRO-185",
  especialidad: "Gastroenterología",
  tema: "Abdomen agudo",
  subtema: "Aneurisma de aorta abdominal roto",
  dificultad: "extrema",
  caso: `Masculino de 76 años, fumador y con hipertensión arterial, presenta dolor abdominal y lumbar súbito, diaforesis y síncope. A su llegada tiene presión arterial de 78/46 mmHg, frecuencia cardiaca de 128 lpm y palidez. Se palpa una masa abdominal pulsátil. El equipo médico sospecha una emergencia vascular con hemorragia retroperitoneal.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Solicitar tomografía contrastada antes de contactar al equipo quirúrgico, sin importar la inestabilidad",
    "Administrar grandes volúmenes de cristaloides hasta normalizar la presión arterial y después estudiar",
    "Realizar colonoscopia urgente para descartar hemorragia digestiva",
    "Iniciar manejo ambulatorio con analgésicos y seguimiento vascular",
    "Activar inmediatamente al equipo vascular y quirúrgico, iniciar reanimación hemostática y proceder al control urgente de la hemorragia"
  ],
  respuestaCorrecta: 4,
  explicacion: "El cuadro sugiere aneurisma de aorta abdominal roto, una emergencia con elevada mortalidad. La prioridad es activar al equipo vascular y quirúrgico, obtener acceso vascular, administrar hemoderivados según necesidad y aplicar una estrategia de reanimación que evite retrasar el control de la hemorragia. En pacientes inestables, la imagen no debe retrasar una intervención que ya esté indicada; la ecografía a pie de cama puede apoyar rápidamente el diagnóstico si está disponible.",
  perlaENARM: "Adulto mayor con dolor abdominal o lumbar súbito, choque y masa pulsátil: sospecha aneurisma de aorta abdominal roto.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para aneurisma aórtico abdominal roto y choque hemorrágico.",
    internacional: "European Society for Vascular Surgery. Clinical practice guidelines on the management of abdominal aorto-iliac aneurysms."
  },
  bibliografia: [
    "Wanhainen A, et al. European Society for Vascular Surgery clinical practice guidelines on the management of abdominal aorto-iliac artery aneurysms. European Journal of Vascular and Endovascular Surgery. 2024.",
    "Tintinalli's Emergency Medicine: A Comprehensive Study Guide. Abdominal aortic aneurysm."
  ]
},
{
  id: "GASTRO-186",
  especialidad: "Gastroenterología",
  tema: "Abdomen agudo",
  subtema: "Embarazo ectópico roto",
  dificultad: "alta",
  caso: `Femenina de 29 años con retraso menstrual de siete semanas, dolor pélvico intenso de predominio derecho y sangrado transvaginal escaso. Presenta mareo, palidez, taquicardia e hipotensión. La prueba de embarazo es positiva. La ecografía transvaginal muestra líquido libre abundante en la pelvis y no identifica un embarazo intrauterino.`,
  pregunta: "¿Cuál es la conducta inmediata más adecuada?",
  opciones: [
    "Administrar metotrexato y dar seguimiento ambulatorio",
    "Solicitar una nueva prueba de embarazo en 48 horas antes de actuar",
    "Iniciar reanimación y solicitar valoración ginecoquirúrgica urgente por probable embarazo ectópico roto",
    "Realizar legrado uterino como primera medida en todos los casos",
    "Indicar reposo domiciliario y repetir ultrasonido en una semana"
  ],
  respuestaCorrecta: 2,
  explicacion: "La combinación de embarazo positivo, dolor pélvico, ausencia de embarazo intrauterino, líquido libre abundante e inestabilidad hemodinámica sugiere embarazo ectópico roto con hemorragia interna. Se requiere estabilización inmediata y valoración ginecoquirúrgica urgente. El metotrexato se reserva para pacientes cuidadosamente seleccionadas que estén estables y cumplan criterios de tratamiento médico; no es apropiado ante sospecha de ruptura e inestabilidad.",
  perlaENARM: "Embarazo positivo más dolor pélvico y choque debe hacer sospechar embarazo ectópico roto hasta demostrar lo contrario.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para diagnóstico y tratamiento del embarazo ectópico.",
    internacional: "American College of Obstetricians and Gynecologists. Practice Bulletin: Tubal Ectopic Pregnancy."
  },
  bibliografia: [
    "ACOG Practice Bulletin No. 193. Tubal Ectopic Pregnancy. Obstetrics & Gynecology. 2018.",
    "Williams Obstetrics. Ectopic pregnancy."
  ]
},
{
  id: "GASTRO-187",
  especialidad: "Gastroenterología",
  tema: "Abdomen agudo",
  subtema: "Isquemia intestinal y estrangulación",
  dificultad: "extrema",
  caso: `Masculino de 63 años con antecedente de hernia inguinal conocida, que presenta dolor abdominal intenso, vómitos y distensión. A la exploración se identifica una masa inguinal dolorosa, irreductible y con cambios de coloración de la piel. Tiene fiebre, taquicardia y defensa abdominal. Los estudios muestran leucocitosis y elevación del lactato.`,
  pregunta: "¿Cuál es la conducta más adecuada?",
  opciones: [
    "Intentar reducción manual repetida enérgica y enviar a domicilio si disminuye el dolor",
    "Administrar laxantes y observar la evolución",
    "Solicitar colonoscopia para descartar obstrucción tumoral",
    "Realizar valoración quirúrgica urgente por probable hernia estrangulada, con reanimación y preparación para intervención",
    "Indicar una faja abdominal y programar cirugía electiva en un mes"
  ],
  respuestaCorrecta: 3,
  explicacion: "La hernia dolorosa e irreductible, con cambios cutáneos, datos sistémicos y signos de irritación peritoneal, sugiere estrangulación con compromiso vascular intestinal. Se requiere valoración quirúrgica inmediata, reanimación, corrección de alteraciones metabólicas y antibióticos si se sospecha isquemia intestinal complicada o perforación. No debe retrasarse la intervención intentando reducciones forzadas.",
  perlaENARM: "Hernia irreductible dolorosa con datos sistémicos o peritonismo: sospecha estrangulación y requiere cirugía urgente.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de hernia complicada y abdomen agudo quirúrgico.",
    internacional: "World Society of Emergency Surgery. Guidelines for emergency repair of complicated abdominal wall hernias."
  },
  bibliografia: [
    "Birindelli A, et al. 2017 update of the WSES guidelines for emergency repair of complicated abdominal wall hernias. World Journal of Emergency Surgery. 2017.",
    "Sabiston Textbook of Surgery. Hernias and intestinal obstruction."
  ]
},
{
  id: "GASTRO-188",
  especialidad: "Gastroenterología",
  tema: "Abdomen agudo",
  subtema: "Diverticulitis complicada",
  dificultad: "alta",
  caso: `Masculino de 59 años con dolor en fosa iliaca izquierda, fiebre y cambios recientes en el hábito intestinal. Presenta leucocitosis y elevación de proteína C reactiva. La tomografía abdominal con contraste muestra divertículos sigmoideos, engrosamiento de la pared colónica, inflamación de la grasa pericólica y una colección de 5.5 cm adyacente al colon, sin neumoperitoneo difuso.`,
  pregunta: "¿Cuál es el manejo más apropiado en este paciente estable?",
  opciones: [
    "Indicar únicamente fibra dietética y egreso inmediato",
    "Iniciar antibióticos y valorar drenaje percutáneo de la colección, con vigilancia clínica y valoración quirúrgica",
    "Realizar colonoscopia durante la fase aguda para drenar el absceso",
    "Administrar antidiarreicos y evitar los antibióticos en todos los casos",
    "Realizar colectomía urgente obligatoria en todos los pacientes con cualquier absceso"
  ],
  respuestaCorrecta: 1,
  explicacion: "Los hallazgos son compatibles con diverticulitis aguda complicada por absceso. En una colección de este tamaño, si es técnicamente accesible, suele considerarse drenaje percutáneo acompañado de antibióticos y vigilancia. La conducta depende de la estabilidad clínica, la accesibilidad de la colección y la respuesta al tratamiento. El deterioro, la peritonitis generalizada o el fracaso del manejo inicial pueden requerir cirugía.",
  perlaENARM: "En diverticulitis con absceso, el tamaño, la accesibilidad, la estabilidad y la respuesta clínica orientan la decisión de drenaje y cirugía.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre diagnóstico y tratamiento de diverticulitis aguda.",
    internacional: "American Society of Colon and Rectal Surgeons. Clinical Practice Guidelines for the Treatment of Left-Sided Colonic Diverticulitis."
  },
  bibliografia: [
    "Hall J, et al. The American Society of Colon and Rectal Surgeons Clinical Practice Guidelines for the Treatment of Left-Sided Colonic Diverticulitis. Diseases of the Colon & Rectum. 2020.",
    "Sleisenger and Fordtran's Gastrointestinal and Liver Disease. Diverticular disease."
  ]
},
{
  id: "GASTRO-189",
  especialidad: "Gastroenterología",
  tema: "Abdomen agudo",
  subtema: "Pancreatitis aguda y gravedad",
  dificultad: "media",
  caso: `Masculino de 45 años con dolor epigástrico intenso irradiado a la espalda, acompañado de vómitos. La lipasa sérica es seis veces superior al límite normal. Se encuentra hemodinámicamente estable, sin hipoxemia ni alteración del estado mental. No presenta signos de irritación peritoneal. La sospecha clínica de pancreatitis aguda es elevada.`,
  pregunta: "¿Cuál de las siguientes conductas es más apropiada durante la evaluación inicial?",
  opciones: [
    "Solicitar tomografía contrastada inmediatamente en todos los casos, antes de iniciar tratamiento",
    "Indicar ayuno absoluto prolongado durante varios días independientemente de la evolución",
    "Iniciar hidratación intravenosa individualizada, analgesia, vigilancia clínica y alimentación oral temprana según tolerancia",
    "Administrar antibióticos profilácticos a todos los pacientes",
    "Realizar colecistectomía inmediata en todos los pacientes, independientemente de la etiología"
  ],
  respuestaCorrecta: 2,
  explicacion: "El dolor característico y la elevación de lipasa mayor de tres veces el límite superior normal permiten establecer el diagnóstico de pancreatitis aguda cuando el cuadro clínico es compatible. El manejo inicial incluye hidratación intravenosa individualizada, analgesia, evaluación de la etiología y vigilancia de disfunción orgánica. En pacientes con enfermedad leve que toleran la vía oral, se recomienda alimentación temprana; no se indican antibióticos profilácticos de rutina. La tomografía no es obligatoria de inmediato si el diagnóstico es claro y la evolución inicial es favorable.",
  perlaENARM: "Para diagnosticar pancreatitis aguda se requieren dos de tres criterios: dolor típico, enzimas pancreáticas mayores de tres veces el límite normal e imagen compatible.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre diagnóstico y tratamiento de pancreatitis aguda.",
    internacional: "American College of Gastroenterology. Management of Acute Pancreatitis."
  },
  bibliografia: [
    "Tenner S, et al. American College of Gastroenterology Guidelines: Management of Acute Pancreatitis. American Journal of Gastroenterology. 2024.",
    "Sleisenger and Fordtran's Gastrointestinal and Liver Disease. Acute pancreatitis."
  ]
},
{
  id: "GASTRO-190",
  especialidad: "Gastroenterología",
  tema: "Abdomen agudo",
  subtema: "Elección de imagen diagnóstica",
  dificultad: "alta",
  caso: `Femenina de 52 años, no embarazada, consulta por dolor abdominal de 24 horas de evolución, inicialmente difuso y ahora localizado en el cuadrante inferior derecho. Presenta fiebre de 38.2 °C, náuseas, leucocitosis y dolor focal con defensa localizada. Está hemodinámicamente estable, sin peritonitis generalizada. La exploración clínica sugiere una causa inflamatoria intraabdominal, pero el diagnóstico no es completamente claro.`,
  pregunta: "¿Cuál es el estudio de imagen que generalmente ofrece mayor rendimiento diagnóstico en una adulta no embarazada con dolor abdominal agudo no diferenciado y sospecha de patología intraabdominal?",
  opciones: [
    "Radiografía simple de abdomen como único estudio en todos los casos",
    "Tomografía computarizada de abdomen y pelvis con contraste intravenoso, si no existe contraindicación y está clínicamente indicada",
    "Resonancia magnética cerebral",
    "Colonoscopia urgente antes de realizar estudios de imagen",
    "Gammagrafía tiroidea"
  ],
  respuestaCorrecta: 1,
  explicacion: "En adultos no embarazados con dolor abdominal agudo no diferenciado y sospecha de patología intraabdominal, la tomografía de abdomen y pelvis con contraste intravenoso suele tener un alto rendimiento diagnóstico. La selección debe individualizarse según la localización del dolor, el diagnóstico sospechado, la función renal, las alergias, la disponibilidad y el estado clínico. La ecografía es preferible como estudio inicial en diversas situaciones, como sospecha biliar o ginecológica, y durante el embarazo se priorizan métodos sin radiación ionizante cuando son apropiados.",
  perlaENARM: "La imagen se elige según el diagnóstico sospechado y el contexto clínico; la tomografía con contraste es muy útil en el dolor abdominal agudo no diferenciado del adulto no embarazado.",
  gpc: {
    mexico: "Consultar las GPC mexicanas vigentes específicas según la sospecha diagnóstica y los protocolos institucionales de imagen en urgencias.",
    internacional: "American College of Radiology. ACR Appropriateness Criteria: Acute Nonlocalized Abdominal Pain."
  },
  bibliografia: [
    "American College of Radiology. ACR Appropriateness Criteria: Acute Nonlocalized Abdominal Pain.",
    "Tintinalli's Emergency Medicine: A Comprehensive Study Guide. Evaluation of acute abdominal pain."
  ]
},
  {
  id: "GASTRO-191",
  especialidad: "Gastroenterología",
  tema: "Apendicitis",
  subtema: "Presentación clínica clásica",
  dificultad: "fácil",
  caso: `Masculino de 21 años, previamente sano, presenta dolor abdominal de 12 horas de evolución que inició en región periumbilical y posteriormente migró a la fosa iliaca derecha. Se acompaña de anorexia, náuseas y febrícula. A la exploración presenta dolor localizado en el punto de McBurney y leucocitosis con neutrofilia.`,
  pregunta: "¿Cuál es el diagnóstico más probable?",
  opciones: [
    "Gastroenteritis aguda",
    "Apendicitis aguda",
    "Colecistitis aguda",
    "Diverticulitis sigmoidea",
    "Pancreatitis aguda"
  ],
  respuestaCorrecta: 1,
  explicacion: "La migración del dolor periumbilical hacia la fosa iliaca derecha, acompañada de anorexia, náuseas, dolor localizado y leucocitosis, es característica de apendicitis aguda. La presentación puede variar según la posición anatómica del apéndice y la etapa evolutiva.",
  perlaENARM: "La migración del dolor hacia la fosa iliaca derecha es un dato clásico de apendicitis aguda.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para diagnóstico y tratamiento de apendicitis aguda.",
    internacional: "World Society of Emergency Surgery (WSES). Jerusalem guidelines for acute appendicitis."
  },
  bibliografia: [
    "Di Saverio S, et al. Diagnosis and treatment of acute appendicitis: 2020 update of the WSES Jerusalem guidelines. World Journal of Emergency Surgery. 2020.",
    "Schwartz's Principles of Surgery. Acute appendicitis."
  ]
},
{
  id: "GASTRO-192",
  especialidad: "Gastroenterología",
  tema: "Apendicitis",
  subtema: "Evaluación clínica y escalas diagnósticas",
  dificultad: "media",
  caso: `Femenina de 24 años con dolor abdominal de 10 horas de evolución, actualmente localizado en fosa iliaca derecha. Presenta anorexia, náuseas, temperatura de 38 °C, dolor en el cuadrante inferior derecho y leucocitosis. No tiene datos de choque ni irritación peritoneal generalizada.`,
  pregunta: "¿Cuál es la utilidad principal de una escala clínica como la de Alvarado en esta paciente?",
  opciones: [
    "Confirmar por sí sola el diagnóstico y sustituir cualquier valoración adicional",
    "Determinar con certeza si existe perforación apendicular",
    "Estimar la probabilidad clínica de apendicitis y orientar la necesidad de observación o estudios de imagen",
    "Identificar directamente el microorganismo responsable",
    "Determinar la duración exacta del tratamiento antibiótico"
  ],
  respuestaCorrecta: 2,
  explicacion: "La escala de Alvarado integra síntomas, signos y hallazgos de laboratorio para estratificar la probabilidad de apendicitis. Una puntuación baja puede ayudar a identificar pacientes de menor riesgo, mientras que las puntuaciones intermedias suelen requerir reevaluación y, según el contexto, imagen. Una puntuación elevada aumenta la sospecha, pero no confirma por sí sola el diagnóstico ni reemplaza el juicio clínico.",
  perlaENARM: "Las escalas clínicas apoyan la estratificación del riesgo; no sustituyen la evaluación clínica ni la imagen cuando esta se encuentra indicada.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre diagnóstico de apendicitis aguda.",
    internacional: "WSES Jerusalem guidelines for acute appendicitis, 2020."
  },
  bibliografia: [
    "Di Saverio S, et al. WSES Jerusalem guidelines. World Journal of Emergency Surgery. 2020.",
    "Alvarado A. A practical score for the early diagnosis of acute appendicitis. Annals of Emergency Medicine. 1986."
  ]
},
{
  id: "GASTRO-193",
  especialidad: "Gastroenterología",
  tema: "Apendicitis",
  subtema: "Diagnóstico por imagen en adultos",
  dificultad: "media",
  caso: `Masculino de 35 años con dolor persistente en fosa iliaca derecha, fiebre de 38.1 °C y leucocitosis. La exploración sugiere apendicitis, pero el diagnóstico no es concluyente. No tiene antecedente de alergia al contraste ni contraindicación conocida para su administración.`,
  pregunta: "¿Qué estudio de imagen suele ser de mayor utilidad para confirmar el diagnóstico en este adulto cuando persiste la incertidumbre clínica?",
  opciones: [
    "Radiografía simple de tórax",
    "Tomografía computarizada de abdomen y pelvis, habitualmente con contraste intravenoso si está indicada",
    "Endoscopia digestiva alta",
    "Gammagrafía tiroidea",
    "Colonoscopia como estudio inicial rutinario"
  ],
  respuestaCorrecta: 1,
  explicacion: "La tomografía computarizada tiene alta precisión diagnóstica para apendicitis en adultos y permite identificar diagnósticos alternativos y complicaciones. La ecografía puede utilizarse como estudio inicial, especialmente cuando se busca evitar radiación, y la selección de imagen debe considerar disponibilidad, características del paciente y protocolos locales.",
  perlaENARM: "En adultos con sospecha de apendicitis y diagnóstico incierto, la tomografía es una herramienta diagnóstica de alto rendimiento.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para diagnóstico por imagen de apendicitis aguda.",
    internacional: "American College of Radiology. ACR Appropriateness Criteria: Right Lower Quadrant Pain."
  },
  bibliografia: [
    "American College of Radiology. ACR Appropriateness Criteria: Right Lower Quadrant Pain.",
    "Di Saverio S, et al. WSES Jerusalem guidelines. World Journal of Emergency Surgery. 2020."
  ]
},
{
  id: "GASTRO-194",
  especialidad: "Gastroenterología",
  tema: "Apendicitis",
  subtema: "Apendicitis en el embarazo",
  dificultad: "alta",
  caso: `Femenina de 27 años, con embarazo de 18 semanas, presenta dolor abdominal progresivo, náuseas y fiebre de 38 °C. La exploración revela dolor en el hemiabdomen derecho. El ultrasonido no logra visualizar el apéndice y no identifica una causa alternativa del dolor. La sospecha clínica de apendicitis persiste.`,
  pregunta: "¿Cuál es el siguiente estudio de imagen más apropiado si está disponible y no existe contraindicación?",
  opciones: [
    "Tomografía con contraste como primera opción obligatoria en todas las embarazadas",
    "Radiografía abdominal seriada",
    "Resonancia magnética abdominal sin gadolinio",
    "Colonoscopia urgente",
    "Gammagrafía con radionúclidos como estudio rutinario"
  ],
  respuestaCorrecta: 2,
  explicacion: "Cuando la ecografía no es diagnóstica y persiste la sospecha de apendicitis durante el embarazo, la resonancia magnética sin gadolinio es una opción preferida por su rendimiento diagnóstico y ausencia de radiación ionizante. Si no está disponible y la situación clínica lo requiere, la selección de otros estudios debe individualizarse para evitar retrasos diagnósticos peligrosos.",
  perlaENARM: "Embarazo con sospecha de apendicitis y ultrasonido no concluyente: considera resonancia magnética sin gadolinio.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre apendicitis en el embarazo y evaluación de dolor abdominal durante la gestación.",
    internacional: "American College of Radiology. ACR Appropriateness Criteria: Right Lower Quadrant Pain."
  },
  bibliografia: [
    "American College of Radiology. ACR Appropriateness Criteria: Right Lower Quadrant Pain.",
    "ACOG. Guidelines for Diagnostic Imaging During Pregnancy and Lactation."
  ]
},
{
  id: "GASTRO-195",
  especialidad: "Gastroenterología",
  tema: "Apendicitis",
  subtema: "Tratamiento quirúrgico",
  dificultad: "media",
  caso: `Masculino de 29 años con dolor migratorio hacia fosa iliaca derecha, fiebre de 38 °C y leucocitosis. La tomografía confirma apendicitis aguda sin absceso, perforación ni plastrón. Se encuentra hemodinámicamente estable y no presenta contraindicaciones para cirugía.`,
  pregunta: "¿Cuál es el tratamiento definitivo habitual?",
  opciones: [
    "Apendicectomía laparoscópica, cuando se dispone de experiencia y recursos",
    "Colectomía total de urgencia",
    "Tratamiento exclusivo con inhibidores de la bomba de protones",
    "Drenaje percutáneo de rutina sin colección",
    "Observación ambulatoria sin seguimiento ni tratamiento"
  ],
  respuestaCorrecta: 0,
  explicacion: "La apendicectomía laparoscópica es el tratamiento quirúrgico habitual de la apendicitis aguda y ofrece ventajas como menor dolor posoperatorio y recuperación más rápida en muchos pacientes. En casos seleccionados de apendicitis no complicada puede discutirse tratamiento antibiótico inicial, explicando el riesgo de fracaso o recurrencia y tomando una decisión compartida.",
  perlaENARM: "La apendicectomía laparoscópica es una opción estándar para la apendicitis aguda cuando hay recursos y experiencia disponibles.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para tratamiento quirúrgico de apendicitis aguda.",
    internacional: "WSES Jerusalem guidelines for acute appendicitis, 2020."
  },
  bibliografia: [
    "Di Saverio S, et al. WSES Jerusalem guidelines. World Journal of Emergency Surgery. 2020.",
    "Schwartz's Principles of Surgery. Acute appendicitis."
  ]
},
{
  id: "GASTRO-196",
  especialidad: "Gastroenterología",
  tema: "Apendicitis",
  subtema: "Tratamiento antibiótico en casos seleccionados",
  dificultad: "alta",
  caso: `Masculino de 32 años con dolor localizado en fosa iliaca derecha. La tomografía muestra inflamación apendicular sin perforación, absceso, apendicolito ni datos de obstrucción intestinal. Está estable, tolera líquidos y no presenta peritonitis. El paciente pregunta si puede evitar la cirugía y comprende que podría presentar recurrencia.`,
  pregunta: "¿Cuál es la respuesta más adecuada respecto al tratamiento?",
  opciones: [
    "Los antibióticos están absolutamente contraindicados en la apendicitis",
    "El tratamiento antibiótico puede considerarse en pacientes seleccionados con apendicitis no complicada, mediante decisión compartida y seguimiento",
    "Los antibióticos garantizan la curación definitiva sin riesgo de recurrencia",
    "La única alternativa a la cirugía es la colectomía",
    "Debe recibir antibióticos exclusivamente tópicos"
  ],
  respuestaCorrecta: 1,
  explicacion: "El tratamiento antibiótico sin apendicectomía puede ser una alternativa en pacientes seleccionados con apendicitis no complicada, particularmente si no hay apendicolito y existe posibilidad de seguimiento. Deben explicarse el fracaso terapéutico, la necesidad eventual de cirugía y la recurrencia. La apendicectomía sigue siendo una opción definitiva ampliamente utilizada.",
  perlaENARM: "La estrategia no operatoria es posible en casos seleccionados de apendicitis no complicada, pero no elimina el riesgo de fracaso o recurrencia.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre alternativas terapéuticas para apendicitis no complicada.",
    internacional: "WSES Jerusalem guidelines for acute appendicitis, 2020."
  },
  bibliografia: [
    "Di Saverio S, et al. WSES Jerusalem guidelines. World Journal of Emergency Surgery. 2020.",
    "CODA Collaborative. A Randomized Trial Comparing Antibiotics with Appendectomy for Appendicitis. New England Journal of Medicine. 2020."
  ]
},
{
  id: "GASTRO-197",
  especialidad: "Gastroenterología",
  tema: "Apendicitis",
  subtema: "Apendicitis perforada con absceso",
  dificultad: "alta",
  caso: `Femenina de 42 años con seis días de dolor en fosa iliaca derecha, fiebre y anorexia. La tomografía muestra apéndice perforado con una colección periapendicular de 4.5 cm. La paciente está hemodinámicamente estable, sin peritonitis generalizada, y la colección es accesible por vía percutánea.`,
  pregunta: "¿Cuál es una estrategia terapéutica razonable?",
  opciones: [
    "Dar de alta sin tratamiento porque el dolor lleva varios días",
    "Realizar colonoscopia inmediata para extraer el apéndice",
    "Administrar únicamente analgésicos",
    "Iniciar antibióticos y valorar drenaje percutáneo, con vigilancia y evaluación quirúrgica",
    "Indicar laxantes y dieta rica en fibra como tratamiento del absceso"
  ],
  respuestaCorrecta: 3,
  explicacion: "En pacientes estables con absceso periapendicular bien delimitado y accesible, puede considerarse manejo inicial con antibióticos y drenaje percutáneo. La cirugía temprana también puede ser apropiada en determinados escenarios según experiencia, anatomía y evolución. La peritonitis generalizada, el deterioro hemodinámico o el fracaso del manejo inicial requieren reevaluación urgente.",
  perlaENARM: "Un absceso apendicular localizado en un paciente estable puede manejarse con antibióticos y drenaje percutáneo cuando es factible.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para apendicitis complicada y absceso intraabdominal.",
    internacional: "WSES Jerusalem guidelines for acute appendicitis, 2020."
  },
  bibliografia: [
    "Di Saverio S, et al. WSES Jerusalem guidelines. World Journal of Emergency Surgery. 2020.",
    "Schwartz's Principles of Surgery. Complicated appendicitis."
  ]
},
{
  id: "GASTRO-198",
  especialidad: "Gastroenterología",
  tema: "Apendicitis",
  subtema: "Apendicitis en el adulto mayor",
  dificultad: "alta",
  caso: `Masculino de 78 años con diabetes mellitus tipo 2 que consulta por dolor abdominal poco intenso, anorexia y malestar general de 36 horas de evolución. Tiene temperatura de 37.7 °C, leucocitosis discreta y dolor en fosa iliaca derecha sin rigidez evidente. La familia refiere que ha disminuido su movilidad y su ingesta de alimentos.`,
  pregunta: "¿Cuál es la consideración clínica más importante?",
  opciones: [
    "La ausencia de fiebre alta excluye apendicitis",
    "En adultos mayores, la apendicitis puede tener manifestaciones atípicas y mayor riesgo de diagnóstico tardío y complicaciones",
    "La diabetes descarta la posibilidad de apendicitis",
    "El dolor leve permite descartar una urgencia quirúrgica",
    "La observación domiciliaria es obligatoria en todos los adultos mayores"
  ],
  respuestaCorrecta: 1,
  explicacion: "Los adultos mayores pueden presentar dolor menos intenso, fiebre discreta y respuesta inflamatoria menos evidente, lo que aumenta el riesgo de retraso diagnóstico y perforación. Se necesita una evaluación cuidadosa, estudios de laboratorio e imagen según la sospecha clínica y valoración quirúrgica oportuna.",
  perlaENARM: "En adultos mayores, la ausencia de signos clásicos no excluye apendicitis ni otras urgencias abdominales.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para diagnóstico de apendicitis y evaluación de abdomen agudo en adultos mayores.",
    internacional: "WSES Jerusalem guidelines for acute appendicitis, 2020."
  },
  bibliografia: [
    "Di Saverio S, et al. WSES Jerusalem guidelines. World Journal of Emergency Surgery. 2020.",
    "Tintinalli's Emergency Medicine: A Comprehensive Study Guide. Acute abdominal pain in older adults."
  ]
},
{
  id: "GASTRO-199",
  especialidad: "Gastroenterología",
  tema: "Apendicitis",
  subtema: "Complicaciones posoperatorias",
  dificultad: "alta",
  caso: `Masculino de 36 años operado de apendicitis perforada hace cinco días. Consulta por fiebre persistente, dolor abdominal que ha aumentado y malestar general. Presenta taquicardia y dolor a la palpación profunda en pelvis. Los leucocitos están elevados y la tomografía identifica una colección pélvica organizada.`,
  pregunta: "¿Cuál es la complicación más probable y qué conducta debe considerarse?",
  opciones: [
    "Síndrome de intestino irritable; iniciar antiespasmódicos",
    "Reflujo gastroesofágico; iniciar inhibidor de la bomba de protones",
    "Absceso intraabdominal posoperatorio; iniciar antibióticos y valorar control del foco mediante drenaje",
    "Hemorroides; indicar tratamiento tópico",
    "Estreñimiento funcional; administrar laxantes sin más evaluación"
  ],
  respuestaCorrecta: 2,
  explicacion: "La fiebre persistente, la taquicardia y una colección organizada después de apendicitis perforada sugieren absceso intraabdominal. El manejo incluye evaluación de la gravedad, antibióticos dirigidos a la infección intraabdominal y valoración del control del foco, por ejemplo mediante drenaje percutáneo cuando sea técnicamente viable. Si existe deterioro, peritonitis o falla del tratamiento, puede requerirse intervención quirúrgica.",
  perlaENARM: "Fiebre persistente y dolor focal tras apendicitis perforada obligan a descartar absceso intraabdominal.",
  gpc: {
    mexico: "Consultar protocolos institucionales y GPC mexicanas vigentes sobre infección intraabdominal posoperatoria.",
    internacional: "World Society of Emergency Surgery. Guidelines for intra-abdominal infections."
  },
  bibliografia: [
    "Sartelli M, et al. WSES guidelines for management of intra-abdominal infections.",
    "Schwartz's Principles of Surgery. Surgical infections and intra-abdominal abscess."
  ]
},
{
  id: "GASTRO-200",
  especialidad: "Gastroenterología",
  tema: "Apendicitis",
  subtema: "Diagnóstico diferencial en mujeres en edad reproductiva",
  dificultad: "extrema",
  caso: `Femenina de 26 años con dolor en fosa iliaca derecha, náuseas y febrícula. La prueba de embarazo es positiva. La ecografía transvaginal muestra un embarazo intrauterino de localización confirmada; sin embargo, el dolor focal persiste y la exploración abdominal es compatible con irritación localizada. La ecografía abdominal no logra visualizar el apéndice.`,
  pregunta: "¿Cuál es el siguiente paso más apropiado ante la persistencia de sospecha de apendicitis?",
  opciones: [
    "Descartar apendicitis porque se confirmó un embarazo intrauterino",
    "Indicar alta inmediata sin vigilancia",
    "Realizar colonoscopia urgente",
    "Administrar metotrexato para tratar una apendicitis",
    "Continuar la evaluación con resonancia magnética sin gadolinio si está disponible y solicitar valoración quirúrgica según los hallazgos"
  ],
  respuestaCorrecta: 4,
  explicacion: "La confirmación de un embarazo intrauterino no excluye apendicitis ni otras causas de dolor abdominal. Cuando el ultrasonido no identifica el apéndice y persiste la sospecha, la resonancia magnética sin gadolinio es una opción apropiada durante el embarazo. Se requiere seguimiento clínico y valoración quirúrgica oportuna; no debe retrasarse la atención si aparecen signos de complicación.",
  perlaENARM: "Un embarazo intrauterino confirmado no descarta una causa quirúrgica extrauterina del dolor abdominal.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre apendicitis durante el embarazo y diagnóstico diferencial de dolor abdominal gestacional.",
    internacional: "American College of Radiology. ACR Appropriateness Criteria: Right Lower Quadrant Pain."
  },
  bibliografia: [
    "American College of Radiology. ACR Appropriateness Criteria: Right Lower Quadrant Pain.",
    "ACOG. Guidelines for Diagnostic Imaging During Pregnancy and Lactation.",
    "Di Saverio S, et al. WSES Jerusalem guidelines. World Journal of Emergency Surgery. 2020."
  ]
},
  {
  id: "GASTRO-201",
  especialidad: "Gastroenterología",
  tema: "Diverticulitis",
  subtema: "Presentación clínica y diagnóstico",
  dificultad: "fácil",
  caso: `Masculino de 58 años acude por dolor abdominal de 36 horas de evolución, localizado en fosa iliaca izquierda, acompañado de fiebre de 38 °C, náuseas y cambios recientes en el hábito intestinal. A la exploración presenta dolor localizado en el cuadrante inferior izquierdo, sin rigidez ni datos de irritación peritoneal generalizada. La biometría hemática muestra leucocitosis.`,
  pregunta: "¿Cuál es el diagnóstico más probable?",
  opciones: [
    "Apendicitis aguda",
    "Diverticulitis aguda",
    "Colecistitis aguda",
    "Pancreatitis aguda",
    "Úlcera péptica perforada"
  ],
  respuestaCorrecta: 1,
  explicacion: "El dolor en fosa iliaca izquierda acompañado de fiebre y respuesta inflamatoria es una presentación frecuente de diverticulitis sigmoidea. Sin embargo, los síntomas no son específicos; la tomografía computarizada permite confirmar el diagnóstico y valorar complicaciones cuando está indicada.",
  perlaENARM: "Dolor en fosa iliaca izquierda, fiebre y leucocitosis sugieren diverticulitis, pero debe considerarse la confirmación por imagen según el contexto clínico.",
  gpc: {
    mexico: "Consultar el catálogo vigente de GPC mexicanas para recomendaciones específicas sobre diverticulitis aguda.",
    internacional: "American Society of Colon and Rectal Surgeons (ASCRS). Clinical Practice Guidelines for the Treatment of Left-Sided Colonic Diverticulitis."
  },
  bibliografia: [
    "Hall J, et al. The American Society of Colon and Rectal Surgeons Clinical Practice Guidelines for the Treatment of Left-Sided Colonic Diverticulitis. Diseases of the Colon & Rectum. 2020.",
    "Sleisenger and Fordtran's Gastrointestinal and Liver Disease. Diverticular disease."
  ]
},
{
  id: "GASTRO-202",
  especialidad: "Gastroenterología",
  tema: "Diverticulitis",
  subtema: "Estudio de imagen",
  dificultad: "media",
  caso: `Femenina de 63 años, sin episodios previos documentados, presenta dolor en fosa iliaca izquierda, fiebre y leucocitosis. La exploración muestra dolor localizado sin inestabilidad hemodinámica. Se sospecha diverticulitis aguda, pero es necesario distinguir enfermedad no complicada de una posible colección o perforación contenida.`,
  pregunta: "¿Cuál es el estudio de imagen más útil en esta paciente cuando no existen contraindicaciones?",
  opciones: [
    "Radiografía simple de cráneo",
    "Colonoscopia durante la fase inflamatoria aguda",
    "Tomografía computarizada de abdomen y pelvis con contraste intravenoso, si está indicada",
    "Gammagrafía tiroidea",
    "Endoscopia digestiva alta"
  ],
  respuestaCorrecta: 2,
  explicacion: "La tomografía computarizada permite identificar divertículos inflamados, engrosamiento de la pared, inflamación pericólica y complicaciones como absceso, perforación u obstrucción. La elección del contraste y el protocolo deben individualizarse. La colonoscopia generalmente se evita durante el episodio agudo por el riesgo de perforación y se considera posteriormente según la evolución y los antecedentes.",
  perlaENARM: "La tomografía abdominal es el estudio de elección habitual para confirmar diverticulitis y determinar si está complicada.",
  gpc: {
    mexico: "Consultar recomendaciones mexicanas vigentes sobre diagnóstico por imagen de diverticulitis aguda.",
    internacional: "American College of Radiology. ACR Appropriateness Criteria: Left Lower Quadrant Pain."
  },
  bibliografia: [
    "American College of Radiology. ACR Appropriateness Criteria: Left Lower Quadrant Pain.",
    "Hall J, et al. ASCRS Clinical Practice Guidelines for Left-Sided Colonic Diverticulitis. 2020."
  ]
},
{
  id: "GASTRO-203",
  especialidad: "Gastroenterología",
  tema: "Diverticulitis",
  subtema: "Tratamiento ambulatorio",
  dificultad: "media",
  caso: `Masculino de 47 años con dolor en fosa iliaca izquierda de intensidad leve a moderada y febrícula. La tomografía confirma diverticulitis sigmoidea no complicada. Se encuentra hemodinámicamente estable, tolera líquidos, no presenta vómitos persistentes, inmunosupresión ni comorbilidades descompensadas, y dispone de seguimiento médico confiable.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Hospitalización obligatoria durante dos semanas",
    "Colectomía urgente en todos los casos",
    "Colonoscopia inmediata",
    "Manejo ambulatorio con analgesia, hidratación, indicaciones de alarma y seguimiento; individualizar la necesidad de antibióticos",
    "Administración rutinaria de antibióticos intravenosos durante 14 días"
  ],
  respuestaCorrecta: 3,
  explicacion: "Los pacientes seleccionados con diverticulitis no complicada, clínicamente estables y capaces de tolerar la vía oral pueden tratarse de forma ambulatoria. En pacientes inmunocompetentes con enfermedad leve, los antibióticos pueden omitirse de manera selectiva bajo supervisión clínica; se indican cuando existen factores de riesgo, enfermedad sistémica o características clínicas que aumentan el riesgo de complicaciones. Es esencial proporcionar instrucciones claras para regresar ante deterioro.",
  perlaENARM: "La diverticulitis no complicada no siempre requiere antibióticos; la selección depende del riesgo clínico y de las características del paciente.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre tratamiento de diverticulitis aguda no complicada.",
    internacional: "ASCRS Clinical Practice Guidelines for Left-Sided Colonic Diverticulitis. 2020."
  },
  bibliografia: [
    "Hall J, et al. Diseases of the Colon & Rectum. 2020.",
    "American Gastroenterological Association. Clinical Practice Update on Medical Management of Colonic Diverticulitis. Gastroenterology. 2021."
  ]
},
{
  id: "GASTRO-204",
  especialidad: "Gastroenterología",
  tema: "Diverticulitis",
  subtema: "Absceso pericólico",
  dificultad: "alta",
  caso: `Masculino de 60 años con fiebre, dolor persistente en fosa iliaca izquierda y leucocitosis. La tomografía muestra diverticulitis sigmoidea con una colección pericólica de 4.8 cm, sin aire libre difuso. El paciente está estable y la colección es accesible para drenaje percutáneo.`,
  pregunta: "¿Cuál es la estrategia terapéutica más razonable?",
  opciones: [
    "Indicar únicamente fibra dietética",
    "Iniciar antibióticos y valorar drenaje percutáneo, con vigilancia y evaluación quirúrgica",
    "Realizar colonoscopia inmediata para drenar la colección",
    "Dar de alta sin tratamiento porque no hay perforación libre",
    "Administrar antidiarreicos como tratamiento definitivo"
  ],
  respuestaCorrecta: 1,
  explicacion: "Un absceso diverticular de este tamaño suele justificar antibióticos y valoración para drenaje percutáneo si es técnicamente accesible. El tamaño de corte utilizado para considerar drenaje varía entre guías y centros, por lo que la decisión debe integrar anatomía, estado clínico y respuesta al tratamiento. El deterioro o la falta de control del foco puede requerir cirugía.",
  perlaENARM: "La diverticulitis con absceso requiere antibióticos; en colecciones grandes y accesibles debe valorarse drenaje percutáneo.",
  gpc: {
    mexico: "Consultar las recomendaciones mexicanas vigentes para diverticulitis complicada y absceso intraabdominal.",
    internacional: "ASCRS Clinical Practice Guidelines for Left-Sided Colonic Diverticulitis. 2020."
  },
  bibliografia: [
    "Hall J, et al. Diseases of the Colon & Rectum. 2020.",
    "Sartelli M, et al. WSES guidelines for management of intra-abdominal infections."
  ]
},
{
  id: "GASTRO-205",
  especialidad: "Gastroenterología",
  tema: "Diverticulitis",
  subtema: "Peritonitis generalizada",
  dificultad: "extrema",
  caso: `Femenina de 69 años con antecedente de diverticulitis sigmoidea. Acude por dolor abdominal súbito que se generalizó en pocas horas, fiebre, taquicardia e hipotensión. La exploración muestra rigidez abdominal y defensa involuntaria difusa. La tomografía evidencia perforación colónica con neumoperitoneo abundante y líquido libre.`,
  pregunta: "¿Cuál es la conducta prioritaria?",
  opciones: [
    "Manejo ambulatorio con dieta líquida",
    "Colonoscopia urgente para localizar el divertículo",
    "Administrar laxantes y reevaluar al día siguiente",
    "Iniciar reanimación, antibióticos intravenosos y control quirúrgico urgente del foco",
    "Tratar únicamente con analgésicos"
  ],
  respuestaCorrecta: 3,
  explicacion: "El cuadro es compatible con perforación intestinal y peritonitis generalizada, con probable sepsis y choque. Requiere reanimación inmediata, antibióticos intravenosos de amplio espectro ajustados al contexto y control urgente del foco. La técnica quirúrgica depende de la estabilidad, contaminación, comorbilidades y experiencia del equipo. La colonoscopia está contraindicada durante esta emergencia.",
  perlaENARM: "Peritonitis generalizada por perforación diverticular: reanimación, antibióticos y control urgente del foco.",
  gpc: {
    mexico: "Consultar protocolos institucionales mexicanos vigentes para sepsis abdominal y diverticulitis perforada.",
    internacional: "WSES guidelines for acute left-sided colonic diverticulitis and intra-abdominal infection management."
  },
  bibliografia: [
    "Sartelli M, et al. WSES guidelines for management of intra-abdominal infections.",
    "Hall J, et al. ASCRS Clinical Practice Guidelines for Left-Sided Colonic Diverticulitis. 2020."
  ]
},
{
  id: "GASTRO-206",
  especialidad: "Gastroenterología",
  tema: "Diverticulitis",
  subtema: "Colonoscopia posterior al episodio agudo",
  dificultad: "alta",
  caso: `Masculino de 57 años presentó su primer episodio de diverticulitis complicada con absceso, tratado con antibióticos y drenaje percutáneo. Actualmente se encuentra asintomático y la inflamación ha remitido. No cuenta con colonoscopia reciente ni con un estudio colorrectal equivalente de calidad adecuada.`,
  pregunta: "¿Cuál es la conducta más apropiada respecto a la evaluación del colon?",
  opciones: [
    "Realizar colonoscopia durante la inflamación aguda sin importar los hallazgos",
    "No realizar nunca estudios posteriores porque la tomografía confirmó diverticulitis",
    "Considerar colonoscopia después de la resolución del episodio, habitualmente tras unas 6–8 semanas o cuando los síntomas hayan desaparecido, según evolución y riesgo",
    "Indicar colectomía total preventiva en todos los pacientes",
    "Repetir una tomografía cada semana de forma indefinida"
  ],
  respuestaCorrecta: 2,
  explicacion: "Después de diverticulitis complicada suele recomendarse evaluación endoscópica del colon si no existe una colonoscopia reciente y adecuada, para excluir neoplasia u otras enfermedades que pueden simular diverticulitis. Habitualmente se espera alrededor de 6–8 semanas o hasta la resolución completa de los síntomas, individualizando según evolución y riesgo. No debe realizarse rutinariamente durante la fase aguda.",
  perlaENARM: "Tras diverticulitis complicada, considera colonoscopia diferida si no existe un estudio reciente adecuado.",
  gpc: {
    mexico: "Consultar las recomendaciones mexicanas vigentes para seguimiento y evaluación colorrectal después de diverticulitis.",
    internacional: "American Gastroenterological Association. Clinical Practice Update on Medical Management of Colonic Diverticulitis. 2021."
  },
  bibliografia: [
    "Peery AF, et al. AGA Clinical Practice Update on Medical Management of Colonic Diverticulitis. Gastroenterology. 2021.",
    "Hall J, et al. ASCRS Clinical Practice Guidelines for Left-Sided Colonic Diverticulitis. 2020."
  ]
},
{
  id: "GASTRO-207",
  especialidad: "Gastroenterología",
  tema: "Diverticulitis",
  subtema: "Fístula colovesical",
  dificultad: "extrema",
  caso: `Masculino de 66 años con episodios recurrentes de diverticulitis. Consulta por disuria y cuadros repetidos de infección urinaria por enterobacterias. Refiere salida ocasional de gas durante la micción. La tomografía muestra engrosamiento del sigmoides adherido a la vejiga y aire intravesical, sin instrumentación urinaria reciente.`,
  pregunta: "¿Cuál es la complicación más probable?",
  opciones: [
    "Fístula colovesical secundaria a enfermedad diverticular",
    "Apendicitis aguda no complicada",
    "Colecistitis enfisematosa",
    "Pancreatitis crónica",
    "Hernia hiatal"
  ],
  respuestaCorrecta: 0,
  explicacion: "La neumaturia, las infecciones urinarias recurrentes y el contacto inflamatorio entre sigmoides y vejiga son sugestivos de fístula colovesical, una complicación de la enfermedad diverticular. La evaluación incluye estudios de imagen y valoración especializada. En pacientes aptos, el tratamiento definitivo suele ser quirúrgico, una vez controlada la infección y optimizado el estado general.",
  perlaENARM: "Neumaturia e infecciones urinarias recurrentes en un paciente con diverticulitis sugieren fístula colovesical.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para fístulas colónicas y complicaciones de enfermedad diverticular.",
    internacional: "ASCRS Clinical Practice Guidelines for Left-Sided Colonic Diverticulitis. 2020."
  },
  bibliografia: [
    "Hall J, et al. Diseases of the Colon & Rectum. 2020.",
    "Sleisenger and Fordtran's Gastrointestinal and Liver Disease. Diverticular disease."
  ]
},
{
  id: "GASTRO-208",
  especialidad: "Gastroenterología",
  tema: "Diverticulitis",
  subtema: "Obstrucción asociada a enfermedad diverticular",
  dificultad: "alta",
  caso: `Femenina de 71 años con varios episodios previos de diverticulitis. Presenta distensión abdominal progresiva, dolor tipo cólico, vómitos y ausencia de evacuaciones. La tomografía identifica estenosis del sigmoides con dilatación proximal del colon. No se observa perforación libre, pero no puede excluirse por completo una neoplasia.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Indicar laxantes estimulantes en dosis altas",
    "Realizar colonoscopia con preparación intestinal inmediata pese a la obstrucción",
    "Dar de alta con dieta rica en fibra",
    "Tratar únicamente con antiácidos",
    "Hospitalizar, estabilizar, evaluar la obstrucción y solicitar valoración quirúrgica, considerando también descartar neoplasia"
  ],
  respuestaCorrecta: 4,
  explicacion: "La estenosis diverticular puede causar obstrucción colónica, pero es necesario descartar cáncer colorrectal. El manejo inicial incluye hospitalización, reposo intestinal, líquidos intravenosos, corrección de alteraciones hidroelectrolíticas y evaluación quirúrgica. La urgencia y la estrategia definitiva dependen del grado de obstrucción, la estabilidad, la presencia de isquemia o perforación y la posibilidad de una etiología maligna.",
  perlaENARM: "Una estenosis colónica en el contexto de diverticulitis puede ser inflamatoria, pero debe descartarse neoplasia.",
  gpc: {
    mexico: "Consultar GPC mexicanas vigentes sobre obstrucción intestinal y cáncer colorrectal.",
    internacional: "ASCRS Clinical Practice Guidelines for Left-Sided Colonic Diverticulitis. 2020."
  },
  bibliografia: [
    "Hall J, et al. ASCRS Clinical Practice Guidelines for Left-Sided Colonic Diverticulitis. 2020.",
    "Schwartz's Principles of Surgery. Colonic obstruction."
  ]
},
{
  id: "GASTRO-209",
  especialidad: "Gastroenterología",
  tema: "Diverticulitis",
  subtema: "Recurrencia y decisión quirúrgica",
  dificultad: "extrema",
  caso: `Masculino de 54 años con tres episodios de diverticulitis no complicada en los últimos dos años, todos resueltos con tratamiento médico. Actualmente está asintomático, sin estenosis, fístula, absceso ni inmunosupresión. Pregunta si debe someterse obligatoriamente a colectomía por haber presentado varios episodios.`,
  pregunta: "¿Cuál es la recomendación más apropiada?",
  opciones: [
    "La colectomía es obligatoria después del segundo episodio en todos los pacientes",
    "La decisión quirúrgica debe individualizarse considerando gravedad, calidad de vida, riesgos, preferencias y complicaciones, no solo el número de episodios",
    "Toda recurrencia requiere colectomía total",
    "La cirugía está absolutamente contraindicada en pacientes con recurrencias",
    "Debe recibir antibióticos de por vida independientemente de los síntomas"
  ],
  respuestaCorrecta: 1,
  explicacion: "La cirugía electiva después de diverticulitis recurrente no se indica únicamente por alcanzar un número fijo de episodios. La decisión debe individualizarse según síntomas persistentes, impacto en la calidad de vida, gravedad y complicaciones, estado inmunológico, riesgos quirúrgicos y preferencias del paciente. La recurrencia por sí sola no obliga a una colectomía.",
  perlaENARM: "La indicación de cirugía electiva en diverticulitis recurrente debe individualizarse; no existe un número universal de episodios que la haga obligatoria.",
  gpc: {
    mexico: "Consultar recomendaciones mexicanas vigentes para manejo quirúrgico electivo de enfermedad diverticular.",
    internacional: "ASCRS Clinical Practice Guidelines for Left-Sided Colonic Diverticulitis. 2020."
  },
  bibliografia: [
    "Hall J, et al. Diseases of the Colon & Rectum. 2020.",
    "Peery AF, et al. AGA Clinical Practice Update on Medical Management of Colonic Diverticulitis. Gastroenterology. 2021."
  ]
},
{
  id: "GASTRO-210",
  especialidad: "Gastroenterología",
  tema: "Diverticulitis",
  subtema: "Diagnóstico diferencial con cáncer colorrectal",
  dificultad: "extrema",
  caso: `Masculino de 64 años con dolor intermitente en fosa iliaca izquierda y cambios progresivos en el hábito intestinal durante cuatro meses. Ha perdido 7 kg sin proponérselo y presenta anemia ferropénica. Una tomografía muestra engrosamiento segmentario del sigmoides con cambios inflamatorios y divertículos en el segmento afectado. No presenta fiebre ni signos de infección sistémica.`,
  pregunta: "¿Cuál es la conducta diagnóstica más apropiada después de estabilizar y evaluar al paciente?",
  opciones: [
    "Atribuir todos los hallazgos a diverticulitis y no realizar más estudios",
    "Indicar antibióticos indefinidamente sin confirmar la etiología",
    "Realizar colonoscopia tras descartar una fase inflamatoria aguda activa, con biopsia de lesiones sospechosas",
    "Realizar únicamente una prueba de sangre oculta en heces y descartar cáncer si es negativa",
    "Indicar laxantes y reevaluar dentro de un año"
  ],
  respuestaCorrecta: 2,
  explicacion: "La pérdida ponderal involuntaria, la anemia ferropénica y el cambio persistente del hábito intestinal son datos de alarma para cáncer colorrectal. La enfermedad diverticular puede coexistir con neoplasia y los hallazgos tomográficos pueden superponerse. Una vez evaluada la posibilidad de inflamación aguda activa y la seguridad del procedimiento, debe realizarse colonoscopia con biopsia cuando corresponda. Si existe obstrucción significativa, la estrategia diagnóstica debe coordinarse con el equipo especializado.",
  perlaENARM: "Anemia ferropénica, pérdida de peso y cambio persistente del hábito intestinal son señales de alarma para neoplasia colorrectal.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para diagnóstico de cáncer colorrectal y evaluación de signos de alarma.",
    internacional: "American Gastroenterological Association. Clinical Practice Update on Medical Management of Colonic Diverticulitis. 2021."
  },
  bibliografia: [
    "Peery AF, et al. AGA Clinical Practice Update on Medical Management of Colonic Diverticulitis. Gastroenterology. 2021.",
    "American Society of Colon and Rectal Surgeons. Clinical Practice Guidelines for the Management of Colon Cancer."
  ]
},
  
{
  id: "GASTRO-211",
  especialidad: "Gastroenterología",
  tema: "Obstrucción intestinal",
  subtema: "Obstrucción mecánica por adherencias",
  dificultad: "alta",
  caso: `Masculino de 64 años con antecedente de laparotomía por apendicitis complicada hace 15 años. Acude por dolor abdominal tipo cólico, vómitos biliosos, distensión y ausencia de evacuaciones y canalización de gases durante 24 horas. TA 118/76 mmHg, FC 96 lpm, temperatura 37.2 °C. El abdomen está distendido, con ruidos intestinales aumentados y dolor difuso sin defensa ni rebote. La tomografía contrastada muestra asas de intestino delgado dilatadas, un punto de transición y colon distal colapsado, sin neumatosis, líquido libre significativo ni signos de isquemia.`,
  pregunta: "¿Cuál es la conducta inicial más apropiada?",
  opciones: [
    "Realizar laparotomía inmediata en todo paciente con obstrucción por adherencias",
    "Administrar laxantes estimulantes y permitir la alimentación oral",
    "Hospitalizar, mantener ayuno, administrar líquidos intravenosos, corregir alteraciones electrolíticas y realizar descompresión nasogástrica según la presentación, con vigilancia estrecha",
    "Administrar loperamida para disminuir el dolor cólico",
    "Realizar colonoscopia urgente para localizar el punto de transición"
  ],
  respuestaCorrecta: 2,
  explicacion: "El cuadro es compatible con obstrucción mecánica del intestino delgado probablemente secundaria a adherencias posquirúrgicas. En ausencia de peritonitis, estrangulación o isquemia, puede intentarse manejo no operatorio hospitalario con ayuno, reposición hidroelectrolítica, descompresión nasogástrica cuando esté indicada y exploraciones seriadas. La tomografía y, en pacientes seleccionados, un protocolo con contraste hidrosoluble ayudan a valorar la evolución. El deterioro clínico, la sospecha de isquemia o la falta de resolución requieren reevaluación quirúrgica.",
  perlaENARM: "Ante obstrucción del intestino delgado por adherencias sin datos de complicación, el tratamiento inicial suele ser conservador, bajo vigilancia hospitalaria.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente y los protocolos institucionales para diagnóstico y tratamiento de obstrucción intestinal mecánica.",
    internacional: "World Society of Emergency Surgery (WSES). Bologna guidelines for diagnosis and management of adhesive small bowel obstruction."
  },
  bibliografia: [
    "ten Broek RPG, et al. Bologna guidelines for diagnosis and management of adhesive small bowel obstruction: 2017 update. World Journal of Emergency Surgery. 2018;13:24.",
    "Schwartz's Principles of Surgery. Small Intestinal Obstruction."
  ]
},
{
  id: "GASTRO-212",
  especialidad: "Gastroenterología",
  tema: "Obstrucción intestinal",
  subtema: "Estrangulación e isquemia intestinal",
  dificultad: "extrema",
  caso: `Femenina de 72 años con antecedente de cirugía abdominal presenta 18 horas de dolor abdominal inicialmente intermitente, ahora continuo e intenso, vómitos y distensión. FC 122 lpm, TA 92/58 mmHg y temperatura 38.1 °C. El abdomen muestra dolor intenso con defensa involuntaria. Leucocitos 19,000/µL, lactato 4.8 mmol/L y acidosis metabólica. La tomografía identifica obstrucción en asa cerrada, edema mesentérico y disminución del realce de la pared intestinal.`,
  pregunta: "¿Cuál es la conducta prioritaria?",
  opciones: [
    "Observar durante 48 horas para determinar si se resuelve espontáneamente",
    "Administrar contraste hidrosoluble por vía oral y esperar su progresión",
    "Realizar colonoscopia para descomprimir el intestino delgado",
    "Iniciar reanimación inmediata, antibióticos intravenosos cuando estén indicados y exploración quirúrgica urgente para controlar la obstrucción y valorar la viabilidad intestinal",
    "Administrar antiespasmódicos y repetir lactato al día siguiente"
  ],
  respuestaCorrecta: 3,
  explicacion: "El dolor continuo, la defensa, el choque, la acidosis, la elevación del lactato y los hallazgos tomográficos sugieren estrangulación con isquemia intestinal. Se requiere reanimación simultánea y cirugía urgente. Durante la exploración se libera la obstrucción y se evalúa la viabilidad; el intestino claramente necrótico requiere resección. No debe retrasarse el control quirúrgico para observar la respuesta al tratamiento conservador.",
  perlaENARM: "Obstrucción en asa cerrada más datos de isquemia, peritonitis o choque constituye una urgencia quirúrgica.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de urgencias quirúrgicas, abdomen agudo, sepsis e isquemia intestinal.",
    internacional: "World Society of Emergency Surgery. Bologna guidelines for adhesive small bowel obstruction; WSES guidelines on acute mesenteric ischemia."
  },
  bibliografia: [
    "ten Broek RPG, et al. World Journal of Emergency Surgery. 2018;13:24.",
    "Bala M, et al. Acute mesenteric ischemia: updated guidelines of the World Society of Emergency Surgery. World Journal of Emergency Surgery. 2022."
  ]
},
{
  id: "GASTRO-213",
  especialidad: "Gastroenterología",
  tema: "Obstrucción intestinal",
  subtema: "Hernia incarcerada y estrangulada",
  dificultad: "extrema",
  caso: `Masculino de 68 años con hernia inguinal derecha de larga evolución presenta dolor súbito en la región inguinal, vómitos y ausencia de canalización de gases. La hernia está aumentada de tamaño, es muy dolorosa, tensa e irreductible. FC 116 lpm, temperatura 38 °C y leucocitosis. La piel suprayacente presenta eritema. No hay mejoría tras analgesia inicial.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Intentar reducción manual repetida y enérgica antes de solicitar valoración quirúrgica",
    "Indicar una faja abdominal y seguimiento ambulatorio",
    "Administrar laxantes y líquidos por vía oral",
    "Programar reparación electiva en seis meses",
    "Iniciar reanimación, analgesia, valoración quirúrgica urgente y reparación de la hernia, con evaluación de la viabilidad intestinal"
  ],
  respuestaCorrecta: 4,
  explicacion: "La hernia dolorosa e irreductible asociada a obstrucción, eritema y respuesta inflamatoria hace sospechar estrangulación. Se requiere evaluación quirúrgica urgente, reanimación y preparación para exploración. La reducción manual no debe intentarse de forma enérgica cuando se sospecha estrangulación, ya que puede retrasar el tratamiento y ocasionar reducción de intestino comprometido sin resolver la lesión. La resección se considera si existe necrosis.",
  perlaENARM: "Una hernia irreductible con dolor intenso y datos sistémicos de alarma debe considerarse estrangulada hasta demostrar lo contrario.",
  gpc: {
    mexico: "Consultar protocolos institucionales mexicanos vigentes para hernia complicada, obstrucción intestinal y abdomen agudo.",
    internacional: "World Society of Emergency Surgery. Guidelines for emergency repair of complicated abdominal wall hernias."
  },
  bibliografia: [
    "Birindelli A, et al. 2017 update of the WSES guidelines for emergency repair of complicated abdominal wall hernias. World Journal of Emergency Surgery. 2017;12:37.",
    "Schwartz's Principles of Surgery. Abdominal Wall Hernias."
  ]
},
{
  id: "GASTRO-214",
  especialidad: "Gastroenterología",
  tema: "Obstrucción intestinal",
  subtema: "Vólvulo de sigmoides",
  dificultad: "alta",
  caso: `Masculino de 79 años, institucionalizado y con estreñimiento crónico, presenta distensión abdominal progresiva, dolor y ausencia de evacuaciones durante tres días. La tomografía muestra una marcada dilatación del sigmoides con configuración en remolino del mesocolon y convergencia de asas hacia un punto de torsión. No presenta peritonitis, choque ni signos tomográficos de perforación.`,
  pregunta: "¿Cuál es el tratamiento inicial de elección si no existen datos de isquemia o perforación?",
  opciones: [
    "Descompresión endoscópica mediante sigmoidoscopia flexible o colonoscopia, con colocación de sonda rectal según el caso y posterior valoración de cirugía definitiva",
    "Colectomía total inmediata en todos los pacientes",
    "Administrar fibra y laxantes por vía oral",
    "Realizar CPRE para descomprimir el colon",
    "Indicar únicamente antibióticos durante siete días"
  ],
  respuestaCorrecta: 0,
  explicacion: "En el vólvulo sigmoideo sin peritonitis, perforación ni sospecha de intestino no viable, la descompresión endoscópica es la intervención inicial habitual. Debido al elevado riesgo de recurrencia, debe valorarse sigmoidectomía durante el mismo ingreso una vez estabilizado el paciente. Si existe isquemia, perforación o peritonitis, se requiere intervención quirúrgica urgente.",
  perlaENARM: "Vólvulo de sigmoides sin complicaciones: descompresión endoscópica inicial y valoración de resección definitiva por recurrencia.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para obstrucción colónica y vólvulo de sigmoides.",
    internacional: "American Society of Colon and Rectal Surgeons. Clinical Practice Guidelines for the Management of Colonic Volvulus and Acute Colonic Pseudo-Obstruction."
  },
  bibliografia: [
    "Alavi K, et al. The American Society of Colon and Rectal Surgeons Clinical Practice Guidelines for the Management of Colonic Volvulus and Acute Colonic Pseudo-Obstruction. Diseases of the Colon & Rectum. 2021.",
    "Schwartz's Principles of Surgery. Colonic Volvulus."
  ]
},
{
  id: "GASTRO-215",
  especialidad: "Gastroenterología",
  tema: "Obstrucción intestinal",
  subtema: "Vólvulo de ciego",
  dificultad: "extrema",
  caso: `Femenina de 61 años presenta dolor abdominal intenso, distensión, vómitos biliosos y ausencia de evacuaciones. La tomografía muestra el ciego marcadamente dilatado y desplazado hacia el cuadrante superior izquierdo, con torsión del pedículo ileocólico y obstrucción del colon proximal. No se observa neumoperitoneo, pero existe dolor persistente y edema mesentérico.`,
  pregunta: "¿Cuál es el manejo definitivo más apropiado?",
  opciones: [
    "Descompresión endoscópica como primera opción por su alta eficacia en el vólvulo cecal",
    "Tratamiento ambulatorio con laxantes osmóticos",
    "Valoración quirúrgica urgente y resección del segmento afectado según viabilidad y estado clínico",
    "Administración de anticolinérgicos para detener la peristalsis",
    "Observación durante 72 horas antes de decidir tratamiento"
  ],
  respuestaCorrecta: 2,
  explicacion: "El vólvulo cecal suele requerir tratamiento quirúrgico, debido a la menor eficacia de la descompresión endoscópica y al riesgo de isquemia y perforación. La hemicolectomía derecha suele ser el tratamiento definitivo preferido en pacientes aptos; la estrategia se individualiza según viabilidad intestinal, estabilidad hemodinámica y condiciones del paciente.",
  perlaENARM: "A diferencia del vólvulo sigmoideo no complicado, el vólvulo cecal generalmente requiere cirugía.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de obstrucción colónica y cirugía de urgencia.",
    internacional: "American Society of Colon and Rectal Surgeons. Clinical Practice Guidelines for Colonic Volvulus and Acute Colonic Pseudo-Obstruction."
  },
  bibliografia: [
    "Alavi K, et al. Diseases of the Colon & Rectum. 2021.",
    "Schwartz's Principles of Surgery. Colonic Volvulus."
  ]
},
{
  id: "GASTRO-216",
  especialidad: "Gastroenterología",
  tema: "Obstrucción intestinal",
  subtema: "Obstrucción colónica por neoplasia",
  dificultad: "alta",
  caso: `Masculino de 70 años con pérdida ponderal de 8 kg, anemia ferropénica y cambio progresivo del hábito intestinal presenta distensión, vómitos y ausencia de evacuaciones. La tomografía muestra una lesión estenosante del colon sigmoides con dilatación proximal y colon distal colapsado. No hay perforación libre ni datos concluyentes de metástasis.`,
  pregunta: "¿Cuál es la conducta inicial más adecuada?",
  opciones: [
    "Indicar colonoscopia completa con preparación oral inmediata pese a la obstrucción",
    "Administrar laxantes estimulantes para superar la estenosis",
    "Dar de alta con dieta rica en fibra y hierro oral",
    "Hospitalizar, estabilizar, valorar gravedad y resecabilidad con el equipo quirúrgico, y definir descompresión o intervención según el contexto",
    "Iniciar quimioterapia antes de confirmar la naturaleza de la lesión"
  ],
  respuestaCorrecta: 3,
  explicacion: "La presentación sugiere obstrucción colónica por posible cáncer colorrectal. La prioridad es estabilizar al paciente, valorar isquemia, perforación y gravedad de la obstrucción, y planificar control del problema con cirugía y endoscopia cuando proceda. En pacientes seleccionados pueden considerarse stents como puente a cirugía o para paliación en centros experimentados. La confirmación histológica y la estadificación deben integrarse en la estrategia, sin retrasar el tratamiento de una emergencia.",
  perlaENARM: "La obstrucción colónica por probable cáncer requiere estabilización y planificación multidisciplinaria; la estrategia depende de estabilidad, localización y posibilidad de resección.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente para diagnóstico y tratamiento de cáncer colorrectal y los protocolos de obstrucción intestinal.",
    internacional: "American Society of Colon and Rectal Surgeons. Clinical Practice Guidelines for the Management of Colon Cancer."
  },
  bibliografia: [
    "American Society of Colon and Rectal Surgeons. Clinical Practice Guidelines for the Management of Colon Cancer.",
    "Schwartz's Principles of Surgery. Colonic Obstruction."
  ]
},
{
  id: "GASTRO-217",
  especialidad: "Gastroenterología",
  tema: "Obstrucción intestinal",
  subtema: "Íleo paralítico posoperatorio",
  dificultad: "alta",
  caso: `Masculino de 59 años en el segundo día posterior a colectomía presenta distensión abdominal difusa, náuseas, intolerancia a la vía oral y ausencia de evacuaciones. Los ruidos intestinales son hipoactivos. Está afebril, hemodinámicamente estable y sin defensa abdominal. La tomografía muestra dilatación difusa de intestino delgado y colon, sin punto de transición ni signos de perforación.`,
  pregunta: "¿Cuál es el manejo inicial más apropiado?",
  opciones: [
    "Realizar laparotomía exploradora inmediata en todos los casos",
    "Revisar y corregir factores precipitantes, optimizar analgesia evitando opioides en exceso, movilizar tempranamente y ajustar líquidos y electrolitos; utilizar descompresión si está indicada",
    "Administrar dosis altas de opioides para restablecer el tránsito",
    "Indicar laxantes estimulantes de rutina pese a la intolerancia oral",
    "Realizar colonoscopia urgente para descartar tumor"
  ],
  respuestaCorrecta: 1,
  explicacion: "La dilatación difusa sin punto de transición en el contexto posoperatorio sugiere íleo paralítico. El manejo incluye corrección de hipopotasemia y otros trastornos, revisión de fármacos, reducción de opioides cuando sea posible, movilización temprana y avance de dieta según tolerancia y evolución. La sonda nasogástrica se reserva para vómitos importantes o distensión sintomática. Debe reevaluarse ante dolor creciente, fiebre, peritonismo o evolución atípica para descartar obstrucción mecánica u otra complicación.",
  perlaENARM: "El íleo posoperatorio suele producir dilatación difusa sin punto de transición; primero se corrigen factores reversibles y se vigila la evolución.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de recuperación posoperatoria, íleo y prevención de complicaciones quirúrgicas.",
    internacional: "Enhanced Recovery After Surgery (ERAS) Society. Recommendations for perioperative care in colorectal surgery."
  },
  bibliografia: [
    "Gustafsson UO, et al. Guidelines for perioperative care in elective colorectal surgery: Enhanced Recovery After Surgery (ERAS) Society recommendations.",
    "Schwartz's Principles of Surgery. Postoperative Ileus."
  ]
},
{
  id: "GASTRO-218",
  especialidad: "Gastroenterología",
  tema: "Obstrucción intestinal",
  subtema: "Pseudoobstrucción colónica aguda",
  dificultad: "extrema",
  caso: `Masculino de 76 años hospitalizado por neumonía y movilidad reducida desarrolla distensión abdominal progresiva. La tomografía muestra dilatación marcada del colon, especialmente del ciego, sin lesión obstructiva mecánica ni punto de transición claro. Está hemodinámicamente estable, sin peritonitis ni neumatosis. El diámetro cecal es de 11.5 cm.`,
  pregunta: "Si no mejora con medidas conservadoras iniciales y no existen contraindicaciones, ¿cuál es una opción terapéutica apropiada?",
  opciones: [
    "Administrar laxantes formadores de masa en dosis altas",
    "Realizar colectomía total inmediata en todos los pacientes",
    "Administrar opioides para reducir la distensión",
    "Indicar colonoscopia con preparación oral intensiva como primera medida",
    "Administrar neostigmina intravenosa monitorizada, si es apropiada, o realizar descompresión colonoscópica según contraindicaciones y disponibilidad"
  ],
  respuestaCorrecta: 4,
  explicacion: "La pseudoobstrucción colónica aguda o síndrome de Ogilvie produce dilatación colónica sin una obstrucción mecánica demostrable. El manejo inicial incluye corregir electrolitos, suspender fármacos precipitantes, movilización y descompresión cuando se requiera. Si fracasan las medidas conservadoras y no existen contraindicaciones, puede utilizarse neostigmina intravenosa bajo monitorización por riesgo de bradicardia; la descompresión colonoscópica es una alternativa. Isquemia, perforación o deterioro requieren valoración quirúrgica urgente.",
  perlaENARM: "Antes de tratar un colon muy dilatado como pseudoobstrucción, debe excluirse obstrucción mecánica; la neostigmina requiere monitorización.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para pseudoobstrucción colónica aguda y urgencias quirúrgicas.",
    internacional: "American Society of Colon and Rectal Surgeons. Clinical Practice Guidelines for the Management of Colonic Volvulus and Acute Colonic Pseudo-Obstruction."
  },
  bibliografia: [
    "Alavi K, et al. The American Society of Colon and Rectal Surgeons Clinical Practice Guidelines for the Management of Colonic Volvulus and Acute Colonic Pseudo-Obstruction. Diseases of the Colon & Rectum. 2021.",
    "Schwartz's Principles of Surgery. Acute Colonic Pseudo-Obstruction."
  ]
},
{
  id: "GASTRO-219",
  especialidad: "Gastroenterología",
  tema: "Obstrucción intestinal",
  subtema: "Obstrucción por íleo biliar",
  dificultad: "extrema",
  caso: `Femenina de 81 años con antecedentes de colelitiasis y episodios de dolor biliar presenta vómitos, distensión y ausencia de evacuaciones. La tomografía muestra obstrucción del intestino delgado distal, neumobilia y un cálculo ectópico de 3.2 cm en el íleon. Se encuentra deshidratada, pero sin peritonitis ni choque.`,
  pregunta: "¿Cuál es el tratamiento más apropiado en este contexto?",
  opciones: [
    "Reposición de volumen y electrolitos, valoración quirúrgica y extracción del cálculo obstructivo, individualizando la reparación de la fístula según el estado clínico",
    "Administrar ácido ursodesoxicólico como tratamiento inmediato de la obstrucción",
    "Indicar únicamente antibióticos y observar indefinidamente",
    "Realizar CPRE como tratamiento definitivo del cálculo impactado en el íleon",
    "Administrar laxantes osmóticos para fragmentar el cálculo"
  ],
  respuestaCorrecta: 0,
  explicacion: "El íleo biliar es una obstrucción mecánica causada por un cálculo que alcanza el tubo digestivo a través de una fístula biliodigestiva. La combinación de obstrucción, neumobilia y cálculo ectópico es característica. El manejo requiere estabilización y, habitualmente, enterolitotomía u otra estrategia quirúrgica para resolver la obstrucción. La reparación simultánea de la fístula y la cirugía biliar se individualizan, especialmente en pacientes mayores o de alto riesgo.",
  perlaENARM: "La tríada de obstrucción intestinal, neumobilia y cálculo ectópico sugiere íleo biliar; la prioridad es resolver la obstrucción.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de obstrucción intestinal y cirugía biliar en pacientes de alto riesgo.",
    internacional: "Schwartz's Principles of Surgery. Gallstone Ileus."
  },
  bibliografia: [
    "Schwartz's Principles of Surgery. Gallstone Ileus and Biliary Disease.",
    "Sleisenger and Fordtran's Gastrointestinal and Liver Disease. Gallstone ileus."
  ]
},
{
  id: "GASTRO-220",
  especialidad: "Gastroenterología",
  tema: "Obstrucción intestinal",
  subtema: "Obstrucción por enfermedad de Crohn",
  dificultad: "extrema",
  caso: `Masculino de 35 años con enfermedad de Crohn ileal de ocho años de evolución presenta dolor posprandial tipo cólico, distensión y vómitos intermitentes. La enterorresonancia muestra una estenosis ileal de 6 cm con engrosamiento mural, hiperrealce y edema, además de dilatación preestenótica. No hay absceso, fístula ni perforación. La proteína C reactiva está elevada.`,
  pregunta: "¿Cuál es el principio terapéutico más apropiado?",
  opciones: [
    "Indicar colectomía total como tratamiento de primera línea",
    "Administrar loperamida a dosis altas y mantener la alimentación habitual",
    "Hospitalizar si la obstrucción es clínicamente significativa, corregir líquidos y electrolitos y determinar el componente inflamatorio frente al fibrótico para seleccionar tratamiento médico, dilatación endoscópica o cirugía",
    "Realizar dilatación endoscópica sin valorar longitud, localización ni complicaciones",
    "Suspender todo tratamiento de Crohn de forma permanente"
  ],
  respuestaCorrecta: 2,
  explicacion: "La obstrucción por Crohn puede deberse a inflamación activa, fibrosis o ambas. La estabilización y la exclusión de absceso, perforación e isquemia son prioritarias en cuadros agudos. En estenosis predominantemente inflamatorias puede optimizarse tratamiento médico; las estenosis cortas y accesibles pueden ser candidatas a dilatación endoscópica en pacientes seleccionados. La enfermedad fibrótica sintomática, las estenosis largas, la recurrencia o las complicaciones pueden requerir intervención quirúrgica. La decisión debe individualizarse con gastroenterología y cirugía.",
  perlaENARM: "En la estenosis por Crohn, distinguir inflamación reversible de fibrosis es esencial porque la fibrosis establecida no suele resolverse solo con fármacos.",
  gpc: {
    mexico: "Consultar las GPC mexicanas vigentes sobre enfermedad de Crohn, enfermedad inflamatoria intestinal y obstrucción intestinal.",
    internacional: "European Crohn's and Colitis Organisation (ECCO). Guidelines on Therapeutics in Crohn's Disease: Surgical Treatment."
  },
  bibliografia: [
    "European Crohn's and Colitis Organisation. Guidelines on Therapeutics in Crohn's Disease: Surgical Treatment.",
    "Sleisenger and Fordtran's Gastrointestinal and Liver Disease. Crohn's Disease and Intestinal Strictures."
  ]
},
 
{
  id: "GASTRO-221",
  especialidad: "Gastroenterología",
  tema: "Enfermedad inflamatoria intestinal",
  subtema: "Diferenciación entre colitis ulcerosa y enfermedad de Crohn",
  dificultad: "Baja",
  caso: `Femenina de 26 años presenta diarrea sanguinolenta, urgencia defecatoria, tenesmo y dolor abdominal bajo durante ocho semanas. La colonoscopia muestra inflamación continua desde el recto hasta el colon descendente, con friabilidad y pérdida del patrón vascular. El íleon terminal no presenta lesiones y las biopsias muestran colitis crónica activa.`,
  pregunta: "¿Cuál es el diagnóstico más probable?",
  opciones: [
    "Enfermedad de Crohn ileocolónica",
    "Colitis ulcerosa",
    "Síndrome de intestino irritable",
    "Colitis isquémica",
    "Enfermedad celíaca"
  ],
  respuestaCorrecta: 1,
  explicacion: "La colitis ulcerosa se caracteriza típicamente por inflamación continua que inicia en el recto y se extiende proximalmente en el colon. La diarrea sanguinolenta, el tenesmo y la urgencia defecatoria son manifestaciones frecuentes. El diagnóstico se integra con clínica, endoscopia, histología y exclusión de infecciones. Ningún hallazgo aislado es absolutamente específico.",
  perlaENARM: "Inflamación continua desde el recto y diarrea sanguinolenta orientan a colitis ulcerosa.",
  gpc: {
    mexico: "Consultar el catálogo CENETEC/IMSS para localizar la GPC mexicana vigente aplicable a enfermedad inflamatoria intestinal.",
    internacional: "American College of Gastroenterology (ACG). Clinical Guideline: Ulcerative Colitis in Adults."
  },
  bibliografia: [
    "Rubin DT, et al. ACG Clinical Guideline: Ulcerative Colitis in Adults.",
    "Sleisenger and Fordtran's Gastrointestinal and Liver Disease. Inflammatory Bowel Disease."
  ]
},
{
  id: "GASTRO-222",
  especialidad: "Gastroenterología",
  tema: "Enfermedad inflamatoria intestinal",
  subtema: "Enfermedad de Crohn y patrón transmural",
  dificultad: "Media",
  caso: `Masculino de 24 años presenta dolor recurrente en fosa iliaca derecha, pérdida ponderal, diarrea crónica y febrícula. La colonoscopia identifica lesiones salteadas en íleon terminal y colon derecho, con úlceras profundas y mucosa normal entre segmentos afectados. La biopsia muestra inflamación crónica compatible con enfermedad inflamatoria intestinal.`,
  pregunta: "¿Qué característica distingue mejor a la enfermedad de Crohn de la colitis ulcerosa?",
  opciones: [
    "La afectación exclusiva de la mucosa rectal",
    "La inflamación continua limitada al colon",
    "La posibilidad de afectar cualquier segmento del tubo digestivo y producir inflamación transmural",
    "La ausencia de estenosis y fístulas durante toda su evolución",
    "La afectación obligatoria y exclusiva del intestino grueso"
  ],
  respuestaCorrecta: 2,
  explicacion: "La enfermedad de Crohn puede afectar cualquier segmento del tubo digestivo, desde la boca hasta la región perianal, y presenta distribución segmentaria. Su carácter transmural favorece complicaciones como estenosis, abscesos y fístulas. La colitis ulcerosa afecta el colon y suele presentar inflamación mucosa continua que inicia en el recto.",
  perlaENARM: "Crohn: lesiones salteadas, posible afectación ileal y complicaciones transmuralmente mediadas, como fístulas y estenosis.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente aplicable a enfermedad de Crohn.",
    internacional: "American College of Gastroenterology. Clinical Guideline: Management of Crohn's Disease in Adults."
  },
  bibliografia: [
    "Lichtenstein GR, et al. ACG Clinical Guideline: Management of Crohn's Disease in Adults.",
    "Sleisenger and Fordtran's Gastrointestinal and Liver Disease. Crohn's Disease."
  ]
},
{
  id: "GASTRO-223",
  especialidad: "Gastroenterología",
  tema: "Enfermedad inflamatoria intestinal",
  subtema: "Evaluación inicial de diarrea inflamatoria",
  dificultad: "Alta",
  caso: `Femenina de 31 años presenta diarrea de seis semanas, dolor abdominal, evacuaciones nocturnas y pérdida de 5 kg. La biometría muestra anemia y trombocitosis. La proteína C reactiva está elevada. La calprotectina fecal también está elevada, pero todavía no se han realizado estudios microbiológicos ni endoscopia.`,
  pregunta: "¿Cuál es el siguiente enfoque diagnóstico más apropiado?",
  opciones: [
    "Diagnosticar enfermedad de Crohn exclusivamente por la calprotectina elevada",
    "Diagnosticar síndrome de intestino irritable y evitar estudios adicionales",
    "Iniciar corticoesteroides sistémicos sin descartar infección",
    "Investigar causas infecciosas según antecedentes, completar evaluación clínica y realizar ileocolonoscopia con biopsias cuando sea apropiado",
    "Solicitar únicamente una prueba de sangre oculta en heces"
  ],
  respuestaCorrecta: 3,
  explicacion: "La diarrea nocturna, la pérdida ponderal, la anemia y los marcadores inflamatorios sugieren enfermedad orgánica. La calprotectina fecal ayuda a distinguir inflamación intestinal de trastornos funcionales, pero no confirma por sí sola enfermedad inflamatoria intestinal. Es necesario considerar infecciones y otras causas, y establecer el diagnóstico mediante integración clínica, endoscópica e histológica. La imagen del intestino delgado puede complementar el estudio si se sospecha Crohn.",
  perlaENARM: "La calprotectina fecal es un marcador de inflamación intestinal, no una prueba etiológica definitiva.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente aplicable al abordaje de diarrea crónica y enfermedad inflamatoria intestinal.",
    internacional: "European Crohn's and Colitis Organisation (ECCO). Guidelines on Diagnostics in Inflammatory Bowel Disease."
  },
  bibliografia: [
    "Maaser C, et al. ECCO-ESGAR Guideline for Diagnostic Assessment in Inflammatory Bowel Disease.",
    "Sleisenger and Fordtran's Gastrointestinal and Liver Disease. Diagnostic Evaluation of IBD."
  ]
},
{
  id: "GASTRO-224",
  especialidad: "Gastroenterología",
  tema: "Enfermedad inflamatoria intestinal",
  subtema: "Colitis ulcerosa aguda grave",
  dificultad: "Muy alta",
  caso: `Masculino de 35 años con colitis ulcerosa conocida presenta nueve evacuaciones sanguinolentas en 24 horas, temperatura de 38.2 °C, FC 112 lpm, hemoglobina de 9.8 g/dL y elevación de reactantes de fase aguda. La radiografía no muestra dilatación colónica importante. Se encuentra hospitalizado y se ha descartado infección por Clostridioides difficile.`,
  pregunta: "¿Cuál es el tratamiento inicial más apropiado?",
  opciones: [
    "Loperamida y egreso con seguimiento ambulatorio",
    "Corticoesteroides intravenosos, evaluación de complicaciones, profilaxis tromboembólica cuando esté indicada y valoración diaria de respuesta",
    "Mesalazina rectal como único tratamiento, independientemente de la gravedad",
    "Colectomía inmediata en todos los pacientes antes de intentar tratamiento médico",
    "Antibióticos de amplio espectro como monoterapia"
  ],
  respuestaCorrecta: 1,
  explicacion: "El cuadro es compatible con colitis ulcerosa aguda grave y requiere hospitalización. El tratamiento inicial habitual incluye corticoesteroides intravenosos, evaluación de infección y complicaciones, soporte hidroelectrolítico y profilaxis de tromboembolismo venoso si no está contraindicada. La respuesta se evalúa tempranamente. Si fracasa el tratamiento médico, se consideran terapias de rescate y valoración quirúrgica sin demoras injustificadas.",
  perlaENARM: "La colitis ulcerosa aguda grave requiere hospitalización y corticoesteroides intravenosos; debe evaluarse tempranamente la respuesta.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente y los protocolos institucionales para colitis ulcerosa grave.",
    internacional: "American College of Gastroenterology. Clinical Guideline: Ulcerative Colitis in Adults."
  },
  bibliografia: [
    "Rubin DT, et al. ACG Clinical Guideline: Ulcerative Colitis in Adults.",
    "Sleisenger and Fordtran's Gastrointestinal and Liver Disease. Severe Ulcerative Colitis."
  ]
},
{
  id: "GASTRO-225",
  especialidad: "Gastroenterología",
  tema: "Enfermedad inflamatoria intestinal",
  subtema: "Absceso y fístula perianal en Crohn",
  dificultad: "Extrema",
  caso: `Masculino de 32 años con enfermedad de Crohn presenta fiebre, dolor perianal intenso y secreción purulenta. La resonancia pélvica identifica una fístula compleja y un absceso perianal de 3.5 cm. El paciente no presenta choque, pero tiene elevación de leucocitos y proteína C reactiva.`,
  pregunta: "¿Cuál es la estrategia terapéutica prioritaria?",
  opciones: [
    "Iniciar infliximab inmediatamente como única intervención",
    "Administrar corticoesteroides sistémicos a dosis altas sin controlar la infección",
    "Drenar el absceso y controlar la sepsis; después planificar tratamiento médico y quirúrgico combinado para la enfermedad fistulizante",
    "Indicar únicamente baños de asiento y observación",
    "Realizar colectomía total de forma sistemática"
  ],
  respuestaCorrecta: 2,
  explicacion: "Un absceso perianal asociado a Crohn requiere control del foco infeccioso, generalmente mediante drenaje, y valoración por cirugía colorrectal. En fístulas complejas puede utilizarse un setón para mantener el drenaje. Una vez controlada la sepsis, se valora terapia biológica, frecuentemente anti-TNF en pacientes seleccionados, junto con manejo quirúrgico. La inmunosupresión aislada no sustituye el drenaje del absceso.",
  perlaENARM: "En Crohn fistulizante con absceso, primero se controla el foco séptico; después se coordina la terapia biológica con cirugía.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre enfermedad de Crohn y los protocolos institucionales para absceso perianal.",
    internacional: "American College of Gastroenterology. Clinical Guideline: Management of Crohn's Disease in Adults."
  },
  bibliografia: [
    "Lichtenstein GR, et al. ACG Clinical Guideline: Management of Crohn's Disease in Adults.",
    "Sleisenger and Fordtran's Gastrointestinal and Liver Disease. Perianal Crohn's Disease."
  ]
},
{
  id: "GASTRO-226",
  especialidad: "Gastroenterología",
  tema: "Enfermedad inflamatoria intestinal",
  subtema: "Tratamiento de colitis ulcerosa leve a moderada",
  dificultad: "Baja",
  caso: `Femenina de 28 años con colitis ulcerosa confirmada presenta cuatro evacuaciones al día, sangre escasa y urgencia defecatoria. No tiene fiebre, taquicardia, anemia significativa ni elevación marcada de reactantes de fase aguda. La enfermedad se limita al recto y colon distal.`,
  pregunta: "¿Cuál es una opción terapéutica inicial apropiada para enfermedad distal leve a moderada?",
  opciones: [
    "Colectomía total inmediata",
    "Antibióticos intravenosos de amplio espectro como monoterapia",
    "Corticoesteroides sistémicos indefinidos para todos los pacientes",
    "Mesalazina rectal; puede combinarse con mesalazina oral según extensión y respuesta",
    "Iniciar inmunosupresión intensiva sin tratamiento convencional previo"
  ],
  respuestaCorrecta: 3,
  explicacion: "En colitis ulcerosa distal leve a moderada, la mesalazina rectal es una opción inicial fundamental. En proctosigmoiditis o enfermedad más extensa puede utilizarse tratamiento combinado oral y rectal. La elección depende de la extensión, gravedad, tolerancia, adherencia y respuesta. La falta de respuesta obliga a reevaluar diagnóstico, adherencia y necesidad de escalar tratamiento.",
  perlaENARM: "En colitis ulcerosa distal leve a moderada, la mesalazina rectal es una opción de primera línea.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente aplicable al tratamiento de colitis ulcerosa.",
    internacional: "American College of Gastroenterology. Clinical Guideline: Ulcerative Colitis in Adults."
  },
  bibliografia: [
    "Rubin DT, et al. ACG Clinical Guideline: Ulcerative Colitis in Adults.",
    "Sleisenger and Fordtran's Gastrointestinal and Liver Disease. Ulcerative Colitis."
  ]
},
{
  id: "GASTRO-227",
  especialidad: "Gastroenterología",
  tema: "Enfermedad inflamatoria intestinal",
  subtema: "Megacolon tóxico",
  dificultad: "Muy alta",
  caso: `Femenina de 42 años con colitis ulcerosa presenta fiebre de 39 °C, FC 128 lpm, dolor y distensión abdominal, hipotensión relativa y numerosas evacuaciones sanguinolentas. La radiografía muestra dilatación colónica transversal de 6.5 cm. Se sospecha megacolon tóxico.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Administrar loperamida y continuar manejo ambulatorio",
    "Realizar colonoscopia completa con insuflación intensa para determinar la extensión",
    "Iniciar laxantes y preparar al colon para colonoscopia",
    "Indicar únicamente mesalazina oral y reevaluar en una semana",
    "Hospitalizar de urgencia, proporcionar soporte y tratamiento médico especializado, evitar fármacos que reduzcan la motilidad y solicitar valoración quirúrgica temprana"
  ],
  respuestaCorrecta: 4,
  explicacion: "El megacolon tóxico es una complicación potencialmente mortal caracterizada por dilatación colónica no obstructiva en el contexto de colitis grave y toxicidad sistémica. Requiere hospitalización, corrección hidroelectrolítica, evaluación de infección, tratamiento de la colitis y vigilancia estrecha. Deben evitarse antidiarreicos, opioides innecesarios y procedimientos endoscópicos que aumenten el riesgo de perforación. La perforación, el deterioro o la falta de respuesta pueden requerir colectomía urgente.",
  perlaENARM: "Dilatación colónica más toxicidad sistémica en colitis grave: sospechar megacolon tóxico y valorar cirugía tempranamente.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para colitis grave, megacolon tóxico y cirugía de urgencia.",
    internacional: "American College of Gastroenterology. Clinical Guideline: Ulcerative Colitis in Adults."
  },
  bibliografia: [
    "Rubin DT, et al. ACG Clinical Guideline: Ulcerative Colitis in Adults.",
    "Schwartz's Principles of Surgery. Toxic Megacolon."
  ]
},
{
  id: "GASTRO-228",
  especialidad: "Gastroenterología",
  tema: "Enfermedad inflamatoria intestinal",
  subtema: "Estenosis ileal por Crohn",
  dificultad: "Alta",
  caso: `Masculino de 39 años con enfermedad de Crohn ileal presenta episodios recurrentes de dolor posprandial, distensión y vómitos. La enterorresonancia identifica una estenosis ileal de 4 cm con dilatación preestenótica, sin absceso ni perforación. Se observan edema mural e hiperrealce, compatibles con un componente inflamatorio activo.`,
  pregunta: "¿Cuál es el principio más importante para seleccionar el tratamiento?",
  opciones: [
    "Distinguir el componente inflamatorio del fibrótico y valorar longitud, accesibilidad, complicaciones y respuesta al tratamiento",
    "Indicar colectomía total en todos los pacientes con Crohn ileal",
    "Administrar loperamida como tratamiento definitivo",
    "Asumir que toda estenosis se resolverá con corticoesteroides",
    "Realizar dilatación endoscópica sin evaluar la anatomía ni el riesgo"
  ],
  respuestaCorrecta: 0,
  explicacion: "Las estenosis por Crohn pueden contener componentes inflamatorios y fibróticos. El componente inflamatorio puede responder a tratamiento médico, mientras que la fibrosis establecida suele requerir dilatación endoscópica en estenosis cortas y apropiadas o cirugía. La elección depende de longitud, localización, accesibilidad, síntomas, complicaciones y antecedentes quirúrgicos. La presencia de absceso, perforación o isquemia cambia la urgencia.",
  perlaENARM: "La distinción entre inflamación y fibrosis orienta el manejo de las estenosis por Crohn; no todas responden a fármacos.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre enfermedad de Crohn y protocolos para estenosis intestinal.",
    internacional: "European Crohn's and Colitis Organisation (ECCO). Guidelines on Therapeutics in Crohn's Disease: Surgical Treatment."
  },
  bibliografia: [
    "ECCO. Guidelines on Therapeutics in Crohn's Disease: Surgical Treatment.",
    "Sleisenger and Fordtran's Gastrointestinal and Liver Disease. Crohn's Disease and Intestinal Strictures."
  ]
},
{
  id: "GASTRO-229",
  especialidad: "Gastroenterología",
  tema: "Enfermedad inflamatoria intestinal",
  subtema: "Manifestaciones extraintestinales",
  dificultad: "Media",
  caso: `Masculino de 30 años con colitis ulcerosa presenta dolor ocular intenso, fotofobia, enrojecimiento y disminución de la agudeza visual. No refiere traumatismo ocular. La exploración inicial sugiere inflamación del segmento anterior del ojo.`,
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Atribuir los síntomas a fatiga visual y observar durante varias semanas",
    "Indicar únicamente lágrimas artificiales y continuar sin evaluación",
    "Reconocer una posible uveítis asociada a enfermedad inflamatoria intestinal y solicitar valoración oftalmológica urgente",
    "Suspender toda terapia para colitis ulcerosa sin evaluación clínica",
    "Administrar antibióticos tópicos como tratamiento definitivo sin confirmar etiología"
  ],
  respuestaCorrecta: 2,
  explicacion: "La uveítis es una manifestación extraintestinal posible de la enfermedad inflamatoria intestinal. El dolor ocular, la fotofobia y la disminución visual son datos de alarma que requieren valoración oftalmológica urgente para prevenir complicaciones visuales. El tratamiento depende del tipo de inflamación ocular y debe coordinarse con oftalmología y gastroenterología.",
  perlaENARM: "En enfermedad inflamatoria intestinal, dolor ocular, fotofobia y visión disminuida requieren valoración urgente por posible uveítis.",
  gpc: {
    mexico: "Consultar recomendaciones mexicanas vigentes sobre manifestaciones extraintestinales de enfermedad inflamatoria intestinal.",
    internacional: "European Crohn's and Colitis Organisation. Guidelines on Extraintestinal Manifestations in Inflammatory Bowel Disease."
  },
  bibliografia: [
    "ECCO. Guidelines on Extraintestinal Manifestations in Inflammatory Bowel Disease.",
    "Sleisenger and Fordtran's Gastrointestinal and Liver Disease. Extraintestinal Manifestations of IBD."
  ]
},
{
  id: "GASTRO-230",
  especialidad: "Gastroenterología",
  tema: "Enfermedad inflamatoria intestinal",
  subtema: "Falta de respuesta a corticoesteroides en colitis ulcerosa grave",
  dificultad: "Extrema",
  caso: `Masculino de 41 años con colitis ulcerosa aguda grave recibe corticoesteroides intravenosos durante tres días, junto con soporte hospitalario y profilaxis tromboembólica. Continúa con numerosas evacuaciones sanguinolentas, taquicardia y elevación de proteína C reactiva. La evaluación no muestra perforación ni megacolon tóxico, y las pruebas iniciales no identifican infección activa.`,
  pregunta: "¿Cuál es la conducta más apropiada ante la falta de respuesta al tratamiento inicial?",
  opciones: [
    "Mantener los mismos corticoesteroides durante varias semanas sin reevaluar",
    "Dar de alta con corticoesteroides orales y seguimiento diferido",
    "Agregar loperamida para disminuir las evacuaciones y evitar la cirugía",
    "Valorar tratamiento de rescate, como infliximab o ciclosporina en pacientes seleccionados, y mantener participación temprana del equipo quirúrgico",
    "Indicar antibióticos como única terapia y suspender la evaluación especializada"
  ],
  respuestaCorrecta: 3,
  explicacion: "La falta de respuesta a corticoesteroides intravenosos después de una evaluación temprana obliga a considerar tratamiento de rescate, habitualmente infliximab o ciclosporina en pacientes seleccionados, según contraindicaciones, experiencia y características clínicas. La valoración quirúrgica debe mantenerse activa, porque retrasar la colectomía cuando existe fracaso médico o deterioro puede aumentar el riesgo. La aparición de perforación, hemorragia incontrolable o megacolon tóxico requiere reevaluación urgente.",
  perlaENARM: "En colitis ulcerosa aguda grave refractaria a corticoesteroides, decide oportunamente entre rescate médico y cirugía; no prolongues un tratamiento ineficaz.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente y los protocolos institucionales de colitis ulcerosa aguda grave refractaria.",
    internacional: "American College of Gastroenterology. Clinical Guideline: Ulcerative Colitis in Adults."
  },
  bibliografia: [
    "Rubin DT, et al. ACG Clinical Guideline: Ulcerative Colitis in Adults.",
    "Sleisenger and Fordtran's Gastrointestinal and Liver Disease. Acute Severe Ulcerative Colitis."
  ]
},
 {
  id: "GASTRO-231",
  especialidad: "Gastroenterología",
  tema: "Síndrome de intestino irritable",
  subtema: "Criterios diagnósticos de Roma IV",
  dificultad: "Baja",
  caso: "Mujer de 26 años acude por dolor abdominal recurrente, asociado con cambios en la frecuencia y consistencia de las evacuaciones. Refiere que los síntomas comenzaron hace 8 meses y se presentan aproximadamente 2 días por semana durante los últimos 4 meses. El dolor se relaciona con la defecación. No presenta pérdida de peso, sangrado gastrointestinal ni fiebre.",
  pregunta: "¿Cuál es el diagnóstico más probable de acuerdo con los criterios de Roma IV?",
  opciones: [
    "Enfermedad inflamatoria intestinal",
    "Síndrome de intestino irritable",
    "Dispepsia funcional",
    "Enfermedad celíaca",
    "Colitis infecciosa crónica"
  ],
  respuestaCorrecta: 1,
  explicacion: "Los criterios de Roma IV para el síndrome de intestino irritable requieren dolor abdominal recurrente, en promedio al menos 1 día por semana durante los últimos 3 meses, asociado con al menos 2 de los siguientes: relación con la defecación, cambio en la frecuencia de las evacuaciones y cambio en la forma de las heces. El inicio de los síntomas debe haber ocurrido al menos 6 meses antes del diagnóstico. La paciente cumple estos criterios. El diagnóstico es clínico y debe complementarse con estudios dirigidos cuando estén indicados por los síntomas o los hallazgos clínicos.",
  perlaENARM: "Roma IV: dolor abdominal ≥1 día/semana durante los últimos 3 meses, asociado con ≥2 características intestinales; inicio ≥6 meses antes del diagnóstico.",
  gpc: "No se asigna clave de GPC mexicana: no se ha verificado una guía mexicana específica y vigente que sustente este reactivo. Referencia complementaria: criterios de Roma IV.",
  bibliografia: [
    "Lacy BE, et al. Bowel Disorders. Gastroenterology. 2016;150(6):1393-1407.e5. doi:10.1053/j.gastro.2016.02.031.",
    "Drossman DA, Hasler WL. Rome IV—Functional GI Disorders: Disorders of Gut-Brain Interaction. Gastroenterology. 2016;150(6):1257-1261."
  ]
},
{
  id: "GASTRO-232",
  especialidad: "Gastroenterología",
  tema: "Síndrome de intestino irritable",
  subtema: "Fisiopatología y trastornos de la interacción intestino-cerebro",
  dificultad: "Media",
  caso: "Hombre de 32 años presenta dolor abdominal recurrente, distensión y alternancia entre diarrea y estreñimiento. Los síntomas empeoran durante periodos de estrés laboral. La exploración física no muestra alteraciones relevantes y los estudios iniciales no identifican enfermedad orgánica.",
  pregunta: "¿Cuál de los siguientes mecanismos fisiopatológicos explica mejor el cuadro clínico?",
  opciones: [
    "Destrucción autoinmunitaria progresiva de las células epiteliales intestinales",
    "Obstrucción mecánica intermitente del intestino delgado",
    "Alteraciones de la interacción intestino-cerebro, con cambios en la sensibilidad visceral y la motilidad intestinal",
    "Insuficiencia pancreática exocrina con maldigestión primaria de grasas",
    "Vasculitis de los vasos mesentéricos con isquemia intestinal recurrente"
  ],
  respuestaCorrecta: 2,
  explicacion: "El síndrome de intestino irritable es un trastorno de la interacción intestino-cerebro. Su fisiopatología es multifactorial e incluye hipersensibilidad visceral, alteraciones de la motilidad y de la regulación del sistema nervioso entérico, procesamiento central del dolor, factores psicosociales y, en determinados pacientes, cambios en la microbiota o antecedentes de gastroenteritis. El estrés puede modular los síntomas mediante vías neuroendocrinas y autonómicas, sin que esto implique que el trastorno sea imaginario o exclusivamente psicológico.",
  perlaENARM: "La hipersensibilidad visceral y la alteración de la interacción intestino-cerebro explican el dolor y la asociación de los síntomas con el estrés. No existe un biomarcador único que confirme el diagnóstico.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia complementaria: literatura científica sobre trastornos de la interacción intestino-cerebro.",
  bibliografia: [
    "Drossman DA, Hasler WL. Rome IV—Functional GI Disorders: Disorders of Gut-Brain Interaction. Gastroenterology. 2016;150(6):1257-1261.",
    "Lacy BE, et al. ACG Clinical Guideline: Management of Irritable Bowel Syndrome. Am J Gastroenterol. 2021;116(1):17-44. doi:10.14309/ajg.0000000000001036."
  ]
},
{
  id: "GASTRO-233",
  especialidad: "Gastroenterología",
  tema: "Síndrome de intestino irritable",
  subtema: "Abordaje diagnóstico y pruebas complementarias",
  dificultad: "Media",
  caso: "Mujer de 29 años presenta dolor abdominal recurrente, distensión y evacuaciones diarreicas intermitentes desde hace 10 meses. Cumple los criterios clínicos de Roma IV. No tiene fiebre, pérdida de peso, anemia conocida ni antecedentes familiares de cáncer colorrectal. No se ha realizado evaluación de enfermedad celíaca.",
  pregunta: "¿Cuál es la estrategia diagnóstica más apropiada en esta paciente con síntomas predominantes de diarrea?",
  opciones: [
    "Solicitar colonoscopia, tomografía abdominal y cápsula endoscópica de manera rutinaria",
    "Establecer el diagnóstico exclusivamente mediante coprocultivo",
    "Solicitar serología para enfermedad celíaca y proteína C reactiva o calprotectina fecal según el contexto clínico",
    "Solicitar anticuerpos antinucleares y factor reumatoide para confirmar el diagnóstico",
    "Realizar biopsia intestinal antes de considerar cualquier diagnóstico funcional"
  ],
  respuestaCorrecta: 2,
  explicacion: "En pacientes con sospecha de síndrome de intestino irritable y diarrea, se recomienda una estrategia diagnóstica positiva basada en los síntomas, con estudios limitados y dirigidos. La serología para enfermedad celíaca permite detectar una enfermedad que puede simular este cuadro. La proteína C reactiva y la calprotectina fecal pueden ayudar a identificar pacientes con mayor probabilidad de enfermedad inflamatoria intestinal. La selección de estudios depende de la presentación clínica y de los factores de riesgo. La colonoscopia no es necesaria de forma rutinaria en pacientes jóvenes sin signos de alarma.",
  perlaENARM: "SII con diarrea: considerar serología celíaca y calprotectina fecal o PCR para evaluar diagnósticos alternativos. Una estrategia positiva evita estudios invasivos innecesarios.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia complementaria: guía clínica ACG sobre síndrome de intestino irritable.",
  bibliografia: [
    "Lacy BE, et al. ACG Clinical Guideline: Management of Irritable Bowel Syndrome. Am J Gastroenterol. 2021;116(1):17-44.",
    "Arasaradnam RP, et al. Guidelines for the investigation of chronic diarrhoea in adults: British Society of Gastroenterology, 3rd edition. Gut. 2018;67:1380-1399."
  ]
},
{
  id: "GASTRO-234",
  especialidad: "Gastroenterología",
  tema: "Síndrome de intestino irritable",
  subtema: "Signos de alarma y diagnóstico diferencial",
  dificultad: "Alta",
  caso: "Hombre de 58 años refiere dolor abdominal recurrente y cambios recientes en el hábito intestinal. Durante los últimos 4 meses ha perdido 7 kg sin proponérselo. En los estudios iniciales se identifica anemia ferropénica. No se ha realizado colonoscopia.",
  pregunta: "¿Cuál es la conducta más apropiada ante esta presentación clínica?",
  opciones: [
    "Diagnosticar síndrome de intestino irritable y comenzar fibra soluble",
    "Iniciar tratamiento empírico con antiespasmódicos y reevaluar en 6 meses",
    "Indicar una dieta baja en FODMAP sin realizar estudios adicionales",
    "Investigar enfermedad orgánica mediante evaluación prioritaria, incluida colonoscopia según el contexto clínico",
    "Solicitar exclusivamente una prueba de aliento para sobrecrecimiento bacteriano"
  ],
  respuestaCorrecta: 3,
  explicacion: "La pérdida de peso involuntaria, la anemia ferropénica y el cambio reciente del hábito intestinal en una persona mayor son signos de alarma que obligan a investigar enfermedad orgánica, incluido cáncer colorrectal y enfermedad inflamatoria intestinal. No debe atribuirse este cuadro a síndrome de intestino irritable sin una evaluación apropiada. La colonoscopia con toma de biopsias cuando corresponda es una herramienta importante para establecer el diagnóstico diferencial.",
  perlaENARM: "Signos de alarma: hemorragia digestiva, anemia ferropénica, pérdida de peso involuntaria, masa abdominal, antecedentes familiares relevantes y síntomas de inicio reciente a mayor edad. Su presencia modifica la estrategia diagnóstica.",
  gpc: "No se asigna clave de GPC mexicana no verificada. La indicación de estudios se fundamenta en signos de alarma y en la evaluación de diagnósticos alternativos.",
  bibliografia: [
    "Lacy BE, et al. ACG Clinical Guideline: Management of Irritable Bowel Syndrome. Am J Gastroenterol. 2021;116(1):17-44.",
    "Arasaradnam RP, et al. Guidelines for the investigation of chronic diarrhoea in adults: British Society of Gastroenterology, 3rd edition. Gut. 2018;67:1380-1399."
  ]
},
{
  id: "GASTRO-235",
  especialidad: "Gastroenterología",
  tema: "Síndrome de intestino irritable",
  subtema: "Clasificación por patrón evacuatorio",
  dificultad: "Alta",
  caso: "Mujer de 35 años cumple los criterios de Roma IV para síndrome de intestino irritable. Durante un diario de evacuaciones de 2 semanas, el 40% de las deposiciones corresponden a los tipos 1 y 2 de la escala de Bristol, el 15% a los tipos 6 y 7 y el resto a los tipos 3, 4 y 5. No utiliza laxantes ni antidiarreicos.",
  pregunta: "¿Cómo debe clasificarse su síndrome de intestino irritable según la escala de Bristol?",
  opciones: [
    "SII con estreñimiento (SII-E)",
    "SII con diarrea (SII-D)",
    "SII mixto (SII-M)",
    "SII no clasificable (SII-NC)",
    "Estreñimiento funcional"
  ],
  respuestaCorrecta: 0,
  explicacion: "La clasificación de Roma IV utiliza la forma de las heces en los días con deposiciones anormales. El SII con estreñimiento presenta más del 25% de heces tipo 1-2 y menos del 25% tipo 6-7. El SII con diarrea presenta más del 25% tipo 6-7 y menos del 25% tipo 1-2. El SII mixto requiere más del 25% de heces tipo 1-2 y más del 25% tipo 6-7. En este caso, el 40% corresponde a heces tipo 1-2 y el 15% a tipos 6-7, por lo que corresponde a SII-E.",
  perlaENARM: "Corrección importante: con los porcentajes del caso, la respuesta correcta es **SII con estreñimiento (SII-E)**, opción 0. El SII mixto exige superar el 25% tanto para heces tipo 1-2 como para tipos 6-7.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Clasificación basada en los criterios de Roma IV.",
  bibliografia: [
    "Lacy BE, et al. Bowel Disorders. Gastroenterology. 2016;150(6):1393-1407.e5.",
    "Lacy BE, et al. ACG Clinical Guideline: Management of Irritable Bowel Syndrome. Am J Gastroenterol. 2021;116(1):17-44."
  ]
},
{
  id: "GASTRO-236",
  especialidad: "Gastroenterología",
  tema: "Síndrome de intestino irritable",
  subtema: "Tratamiento no farmacológico y dieta baja en FODMAP",
  dificultad: "Muy alta",
  caso: "Hombre de 30 años presenta síndrome de intestino irritable con diarrea, distensión y dolor abdominal que interfieren con sus actividades cotidianas. No presenta signos de alarma y la evaluación dirigida no sugiere enfermedad celíaca ni inflamatoria intestinal. Desea comenzar una intervención dietética.",
  pregunta: "¿Cuál de las siguientes estrategias dietéticas tiene evidencia clínica para mejorar los síntomas globales del síndrome de intestino irritable?",
  opciones: [
    "Eliminar de manera permanente todos los carbohidratos de la dieta",
    "Implementar una dieta baja en FODMAP por tiempo limitado, seguida de reintroducción y personalización",
    "Suspender de manera indefinida todos los productos lácteos, cereales y frutas",
    "Mantener una dieta exclusivamente líquida durante 4 semanas",
    "Aumentar indiscriminadamente el consumo de fibra insoluble para reducir la diarrea"
  ],
  respuestaCorrecta: 1,
  explicacion: "Una dieta baja en FODMAP puede mejorar el dolor abdominal, la distensión y los síntomas globales en algunos pacientes con síndrome de intestino irritable. La intervención debe ser temporal y estructurada: restricción inicial, reintroducción progresiva y personalización para identificar desencadenantes individuales. Se recomienda, cuando sea posible, la supervisión de un profesional de nutrición con experiencia en trastornos gastrointestinales. La restricción prolongada e indiscriminada puede comprometer la calidad nutricional y la diversidad de la microbiota.",
  perlaENARM: "Dieta baja en FODMAP: restricción temporal, reintroducción y personalización. No debe convertirse automáticamente en una dieta de exclusión permanente.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia complementaria: guía ACG sobre manejo del síndrome de intestino irritable.",
  bibliografia: [
    "Lacy BE, et al. ACG Clinical Guideline: Management of Irritable Bowel Syndrome. Am J Gastroenterol. 2021;116(1):17-44.",
    "Black CJ, et al. Efficacy of a low FODMAP diet in irritable bowel syndrome: systematic review and network meta-analysis. Gut. 2022;71:1117-1126."
  ]
},
{
  id: "GASTRO-237",
  especialidad: "Gastroenterología",
  tema: "Síndrome de intestino irritable",
  subtema: "Fibra soluble y tratamiento del estreñimiento",
  dificultad: "Muy alta",
  caso: "Mujer de 42 años con síndrome de intestino irritable con estreñimiento presenta dolor abdominal, distensión y evacuaciones duras. No tiene signos de alarma. Solicita una intervención inicial que mejore la consistencia de las heces sin incrementar excesivamente la distensión.",
  pregunta: "¿Cuál es la opción de suplementación con fibra más apropiada como parte del tratamiento inicial?",
  opciones: [
    "Salvado de trigo en dosis altas desde el primer día",
    "Psyllium, con incremento gradual de la dosis y adecuada hidratación",
    "Suspender toda fuente de fibra dietética",
    "Utilizar únicamente fibra insoluble y evitar la fibra soluble",
    "Administrar laxantes estimulantes de forma indefinida como primera intervención"
  ],
  respuestaCorrecta: 1,
  explicacion: "La fibra soluble, particularmente el psyllium, puede mejorar los síntomas globales del síndrome de intestino irritable. Se recomienda comenzar con una dosis baja y aumentarla gradualmente según tolerancia para reducir la distensión y la flatulencia. La fibra insoluble, como el salvado de trigo, puede exacerbar síntomas en algunos pacientes. Si persisten el estreñimiento o el dolor, debe individualizarse el tratamiento farmacológico de acuerdo con el subtipo y la respuesta clínica.",
  perlaENARM: "En SII, preferir fibra soluble como psyllium frente a salvado de trigo. La titulación gradual mejora la tolerancia gastrointestinal.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia complementaria: guía clínica ACG.",
  bibliografia: [
    "Lacy BE, et al. ACG Clinical Guideline: Management of Irritable Bowel Syndrome. Am J Gastroenterol. 2021;116(1):17-44.",
    "Ford AC, et al. Effect of fibre, antispasmodics, and peppermint oil in the treatment of irritable bowel syndrome: systematic review and meta-analysis. BMJ. 2008;337:a2313."
  ]
},
{
  id: "GASTRO-238",
  especialidad: "Gastroenterología",
  tema: "Síndrome de intestino irritable",
  subtema: "Tratamiento farmacológico del SII con diarrea",
  dificultad: "Alta",
  caso: "Hombre de 38 años con síndrome de intestino irritable con diarrea presenta evacuaciones frecuentes y urgencia defecatoria que afectan su vida laboral. No tiene fiebre, sangre en heces ni datos de deshidratación. La evaluación inicial no sugiere enfermedad inflamatoria intestinal ni infección activa.",
  pregunta: "¿Cuál de las siguientes afirmaciones sobre el tratamiento farmacológico es correcta?",
  opciones: [
    "Los antibióticos sistémicos de amplio espectro son el tratamiento inicial obligatorio",
    "La loperamida puede mejorar la frecuencia y consistencia de las evacuaciones, aunque no necesariamente el dolor global del SII",
    "Los corticoesteroides sistémicos son el tratamiento de primera línea",
    "Los opioides potentes son el tratamiento preferido a largo plazo para el dolor abdominal",
    "Los inhibidores de la bomba de protones controlan de forma específica la diarrea funcional"
  ],
  respuestaCorrecta: 1,
  explicacion: "La loperamida puede reducir la frecuencia de las deposiciones y mejorar su consistencia en el SII con diarrea, pero su efecto sobre el dolor abdominal global y el conjunto de síntomas es limitado. El tratamiento debe individualizarse y puede incluir intervenciones dietéticas, manejo de síntomas específicos y fármacos dirigidos al SII con diarrea cuando estén indicados. La rifaximina es una opción para determinados pacientes con SII-D; no debe confundirse con el uso indiscriminado de antibióticos sistémicos.",
  perlaENARM: "Loperamida: mejora diarrea y frecuencia evacuatoria, pero no necesariamente el dolor global del SII. Evitar opioides como estrategia crónica para el dolor por sus riesgos y complicaciones.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia complementaria: guía ACG sobre tratamiento del SII.",
  bibliografia: [
    "Lacy BE, et al. ACG Clinical Guideline: Management of Irritable Bowel Syndrome. Am J Gastroenterol. 2021;116(1):17-44.",
    "Vasant DH, et al. British Society of Gastroenterology guidelines on the management of irritable bowel syndrome. Gut. 2021;70:1214-1240."
  ]
},
{
  id: "GASTRO-239",
  especialidad: "Gastroenterología",
  tema: "Síndrome de intestino irritable",
  subtema: "Tratamiento del dolor abdominal refractario",
  dificultad: "Extrema",
  caso: "Mujer de 36 años con síndrome de intestino irritable presenta dolor abdominal persistente y distensión que afectan significativamente su calidad de vida, a pesar de medidas dietéticas individualizadas, fibra soluble y tratamiento sintomático. No presenta signos de alarma y la evaluación diagnóstica es compatible con un trastorno de la interacción intestino-cerebro. Refiere ansiedad relacionada con sus síntomas y temor a comer por la posibilidad de presentar dolor.",
  pregunta: "¿Cuál de las siguientes estrategias puede considerarse para el manejo integral de los síntomas persistentes?",
  opciones: [
    "Indicar opioides potentes de manera crónica y suspender las intervenciones no farmacológicas",
    "Repetir colonoscopias de manera periódica aunque no existan nuevas indicaciones clínicas",
    "Considerar un neuromodulador, como un antidepresivo tricíclico a dosis bajas, junto con intervenciones psicológicas dirigidas al intestino-cerebro",
    "Prescribir corticoesteroides sistémicos durante varios meses",
    "Indicar antibióticos de amplio espectro de manera indefinida"
  ],
  respuestaCorrecta: 2,
  explicacion: "En pacientes con SII persistente, especialmente cuando predomina el dolor abdominal, los antidepresivos tricíclicos a dosis bajas pueden utilizarse como neuromoduladores del dolor visceral. La terapia cognitivo-conductual y la hipnoterapia dirigida al intestino pueden mejorar los síntomas globales en pacientes seleccionados. El abordaje debe ser multidimensional y considerar el subtipo del SII, las comorbilidades, las preferencias del paciente y los efectos adversos. Los opioides crónicos pueden causar dependencia y síndrome de intestino narcótico; los corticoesteroides no están indicados para el SII no complicado.",
  perlaENARM: "Dolor persistente en SII: considerar neuromodulación y terapias psicológicas dirigidas al intestino-cerebro. Los antidepresivos tricíclicos pueden ser útiles incluso sin depresión mayor.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia complementaria: guías ACG y BSG sobre manejo integral del SII.",
  bibliografia: [
    "Lacy BE, et al. ACG Clinical Guideline: Management of Irritable Bowel Syndrome. Am J Gastroenterol. 2021;116(1):17-44.",
    "Vasant DH, et al. British Society of Gastroenterology guidelines on the management of irritable bowel syndrome. Gut. 2021;70:1214-1240."
  ]
},
{
  id: "GASTRO-240",
  especialidad: "Gastroenterología",
  tema: "Síndrome de intestino irritable",
  subtema: "Diagnóstico diferencial de diarrea acuosa crónica",
  dificultad: "Extrema",
  caso: "Mujer de 63 años presenta diarrea acuosa crónica de 7 meses de evolución, con evacuaciones nocturnas y urgencia defecatoria. Los síntomas comenzaron después de los 60 años. No refiere sangre visible en heces. Tiene antecedente de uso frecuente de antiinflamatorios no esteroideos. Una colonoscopia previa mostró mucosa macroscópicamente normal, pero no se tomaron biopsias.",
  pregunta: "¿Cuál es el diagnóstico alternativo que debe investigarse de manera prioritaria?",
  opciones: [
    "Síndrome de intestino irritable con diarrea, sin necesidad de estudios adicionales",
    "Colitis microscópica",
    "Dispepsia funcional",
    "Enfermedad por reflujo gastroesofágico",
    "Estreñimiento funcional con diarrea por rebosamiento como única posibilidad"
  ],
  respuestaCorrecta: 1,
  explicacion: "La colitis microscópica es una causa importante de diarrea acuosa crónica, particularmente en adultos mayores y mujeres, y puede asociarse con determinados fármacos, incluidos algunos antiinflamatorios no esteroideos. La mucosa colónica puede tener una apariencia normal durante la colonoscopia, por lo que el diagnóstico requiere biopsias colónicas. La diarrea nocturna y el inicio a edad avanzada hacen necesario investigar una causa orgánica en lugar de atribuir automáticamente los síntomas a SII.",
  perlaENARM: "Diarrea acuosa crónica con colonoscopia macroscópicamente normal no excluye colitis microscópica: se requieren biopsias. Edad avanzada, diarrea nocturna y fármacos asociados aumentan la sospecha.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia complementaria: guías de investigación de diarrea crónica y literatura sobre colitis microscópica.",
  bibliografia: [
    "Arasaradnam RP, et al. Guidelines for the investigation of chronic diarrhoea in adults: British Society of Gastroenterology, 3rd edition. Gut. 2018;67:1380-1399.",
    "Miehlke S, et al. European guidelines on microscopic colitis: United European Gastroenterology and European Microscopic Colitis Group statements and recommendations. United European Gastroenterol J. 2021;9(1):13-37."
  ]
},
  {
  id: "GASTRO-241",
  especialidad: "Gastroenterología",
  tema: "Hepatitis autoinmune",
  subtema: "Presentación clínica y sospecha diagnóstica",
  dificultad: "Baja",
  caso: "Mujer de 34 años acude por fatiga, náuseas, artralgias y malestar general de 3 meses de evolución. Presenta ictericia leve y hepatomegalia discreta. Los estudios muestran ALT de 680 U/L, AST de 540 U/L, bilirrubina total de 3.2 mg/dL y fosfatasa alcalina discretamente elevada. Niega consumo significativo de alcohol y uso reciente de medicamentos hepatotóxicos.",
  pregunta: "¿Cuál es el siguiente enfoque diagnóstico más apropiado ante la sospecha de hepatitis autoinmune?",
  opciones: [
    "Diagnosticar hepatitis autoinmune exclusivamente por la elevación de aminotransferasas",
    "Solicitar inmunoglobulina G, autoanticuerpos relevantes y estudios para excluir otras causas de lesión hepática",
    "Solicitar únicamente una determinación de alfafetoproteína",
    "Iniciar tratamiento con azatioprina sin completar la evaluación etiológica",
    "Considerar hepatitis autoinmune descartada por la ausencia de antecedentes familiares"
  ],
  respuestaCorrecta: 1,
  explicacion: "La hepatitis autoinmune puede presentarse con síntomas inespecíficos, hepatitis aguda o enfermedad crónica. El diagnóstico requiere integrar el patrón bioquímico, la concentración de IgG, los autoanticuerpos, la histología hepática cuando esté indicada y la exclusión cuidadosa de otras etiologías, particularmente hepatitis virales y lesión hepática inducida por fármacos. Ningún hallazgo aislado confirma la enfermedad.",
  perlaENARM: "Ante una hepatitis de predominio hepatocelular sin causa evidente, considerar hepatitis autoinmune e investigar IgG, ANA, anticuerpos antimúsculo liso y diagnósticos alternativos.",
  gpc: "No se asigna clave de GPC mexicana porque no se ha verificado una guía nacional específica y vigente para este reactivo. Referencia internacional: EASL Clinical Practice Guidelines on the management of autoimmune hepatitis, 2025.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines on the management of autoimmune hepatitis. J Hepatol. 2025;83(2):453-501. doi:10.1016/j.jhep.2025.03.017.",
    "Mack CL, et al. Diagnosis and Management of Autoimmune Hepatitis in Adults and Children: 2019 Practice Guidance and Guidelines From the AASLD. Hepatology. 2020;72(2):671-722."
  ]
},
{
  id: "GASTRO-242",
  especialidad: "Gastroenterología",
  tema: "Hepatitis autoinmune",
  subtema: "Autoanticuerpos y clasificación serológica",
  dificultad: "Media",
  caso: "Mujer de 27 años presenta elevación persistente de aminotransferasas. La concentración de IgG está elevada y se detectan anticuerpos antinucleares y anticuerpos antimúsculo liso. Los estudios para hepatitis A, B y C no identifican infección activa. La biopsia hepática muestra hepatitis de interfase con infiltrado linfoplasmocitario.",
  pregunta: "¿Cuál es la interpretación más apropiada de estos hallazgos?",
  opciones: [
    "Los anticuerpos antinucleares excluyen hepatitis autoinmune",
    "La presencia de anticuerpos antimúsculo liso demuestra por sí sola cirrosis biliar primaria",
    "La combinación de hipergammaglobulinemia, autoanticuerpos e histología compatible apoya el diagnóstico de hepatitis autoinmune",
    "La hepatitis de interfase es patognomónica de hepatitis viral por virus de la hepatitis C",
    "La elevación de IgG descarta una enfermedad hepática inmunomediada"
  ],
  respuestaCorrecta: 2,
  explicacion: "La hepatitis autoinmune se sustenta en la combinación de hallazgos clínicos, bioquímicos, inmunológicos e histológicos. Los ANA y los anticuerpos antimúsculo liso son marcadores frecuentes en la presentación clásica del adulto. Sin embargo, no son específicos y deben interpretarse en conjunto con la IgG, la biopsia y la exclusión de diagnósticos alternativos. La clasificación serológica tradicional puede orientar, pero las guías EASL de 2025 no recomiendan utilizar los perfiles de autoanticuerpos como subtipos clínicos que determinen estrategias terapéuticas diferentes.",
  perlaENARM: "ANA y antimúsculo liso son marcadores clásicos de hepatitis autoinmune; su presencia aislada no confirma el diagnóstico. Integrar IgG, histología y exclusión de otras causas.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional: EASL 2025 y AASLD 2019.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines on the management of autoimmune hepatitis. J Hepatol. 2025;83(2):453-501. doi:10.1016/j.jhep.2025.03.017.",
    "Mack CL, et al. Hepatology. 2020;72(2):671-722."
  ]
},
{
  id: "GASTRO-243",
  especialidad: "Gastroenterología",
  tema: "Hepatitis autoinmune",
  subtema: "Diagnóstico histopatológico",
  dificultad: "Media",
  caso: "Hombre de 41 años presenta fatiga crónica y elevación persistente de aminotransferasas. La IgG está elevada y los ANA son positivos. Después de excluir causas virales, metabólicas y farmacológicas relevantes, se realiza biopsia hepática que muestra inflamación portal con abundantes células plasmáticas, hepatitis de interfase y actividad necroinflamatoria lobulillar.",
  pregunta: "¿Qué hallazgo histopatológico apoya de manera más característica el diagnóstico de hepatitis autoinmune?",
  opciones: [
    "Depósito predominante de hierro en hepatocitos sin inflamación",
    "Esteatosis macrovesicular aislada sin actividad inflamatoria",
    "Hepatitis de interfase con infiltrado inflamatorio linfoplasmocitario",
    "Granulomas caseificantes con necrosis central",
    "Fibrosis perisinusoidal aislada sin hepatitis"
  ],
  respuestaCorrecta: 2,
  explicacion: "La hepatitis de interfase, acompañada con frecuencia de infiltrado linfoplasmocitario y células plasmáticas, es un patrón histológico característico de hepatitis autoinmune. No es patognomónico y debe interpretarse en el contexto clínico y serológico. La biopsia también permite evaluar actividad inflamatoria, fibrosis y diagnósticos alternativos o coexistentes.",
  perlaENARM: "Hepatitis de interfase e infiltrado linfoplasmocitario son hallazgos clásicos. Ningún patrón histológico debe interpretarse de forma aislada.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional: EASL Clinical Practice Guidelines, 2025.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines on the management of autoimmune hepatitis. J Hepatol. 2025;83(2):453-501.",
    "Mack CL, et al. Hepatology. 2020;72(2):671-722."
  ]
},
{
  id: "GASTRO-244",
  especialidad: "Gastroenterología",
  tema: "Hepatitis autoinmune",
  subtema: "Criterios diagnósticos simplificados",
  dificultad: "Alta",
  caso: "Mujer de 39 años presenta hepatitis persistente. La evaluación muestra ANA positivos en título significativo, IgG por encima del límite superior normal y biopsia compatible con hepatitis autoinmune. Se han excluido razonablemente hepatitis virales. El equipo médico desea integrar los criterios diagnósticos simplificados del International Autoimmune Hepatitis Group.",
  pregunta: "¿Cuál de los siguientes componentes forma parte de los criterios simplificados para hepatitis autoinmune?",
  opciones: [
    "Concentración sérica de alfafetoproteína como criterio inmunológico principal",
    "Presencia de autoanticuerpos, concentración de IgG, histología hepática y exclusión de hepatitis viral",
    "Presencia obligatoria de cirrosis en la biopsia",
    "Elevación aislada de fosfatasa alcalina como criterio confirmatorio",
    "Antecedente familiar de hepatitis autoinmune como requisito indispensable"
  ],
  respuestaCorrecta: 1,
  explicacion: "Los criterios simplificados consideran cuatro dominios: autoanticuerpos, concentración de IgG, histología hepática y ausencia de hepatitis viral. La puntuación asignada a cada dominio permite clasificar la probabilidad diagnóstica. Una puntuación de al menos 6 puntos indica hepatitis autoinmune probable y una de al menos 7 indica hepatitis autoinmune definitiva. Estos criterios apoyan el juicio clínico, pero no sustituyen la evaluación integral ni deben utilizarse sin considerar presentaciones atípicas.",
  perlaENARM: "Criterios simplificados: autoanticuerpos + IgG + histología + exclusión de hepatitis viral. Umbrales clásicos: ≥6 probable y ≥7 definitiva.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional: criterios simplificados del IAIHG y guía EASL 2025.",
  bibliografia: [
    "Hennes EM, et al. Simplified criteria for the diagnosis of autoimmune hepatitis. Hepatology. 2008;48(1):169-176. doi:10.1002/hep.22322.",
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines on the management of autoimmune hepatitis. J Hepatol. 2025;83(2):453-501."
  ]
},
{
  id: "GASTRO-245",
  especialidad: "Gastroenterología",
  tema: "Hepatitis autoinmune",
  subtema: "Diagnóstico diferencial y hepatitis inducida por fármacos",
  dificultad: "Alta",
  caso: "Mujer de 52 años inicia tratamiento con un medicamento asociado a lesión hepática inmunomediada. Seis meses después desarrolla ictericia y elevación marcada de aminotransferasas. La IgG está elevada, los ANA son positivos y la biopsia muestra inflamación compatible con hepatitis autoinmune. No tenía alteraciones hepáticas documentadas antes de iniciar el fármaco.",
  pregunta: "¿Cuál es la consideración diagnóstica más importante antes de establecer una hepatitis autoinmune idiopática?",
  opciones: [
    "La positividad de ANA confirma que el medicamento no participa en la lesión",
    "La presencia de hipergammaglobulinemia excluye lesión hepática inducida por fármacos",
    "Debe considerarse una lesión hepática inducida por fármacos con fenotipo autoinmune y evaluar la evolución tras retirar el agente",
    "Toda hepatitis relacionada temporalmente con un fármaco es hepatitis viral aguda",
    "La biopsia compatible elimina la necesidad de revisar la exposición farmacológica"
  ],
  respuestaCorrecta: 2,
  explicacion: "Algunos medicamentos pueden producir lesión hepática con autoanticuerpos, aumento de IgG y hallazgos histológicos semejantes a los de la hepatitis autoinmune idiopática. La evaluación debe incluir una cronología farmacológica detallada y la exclusión de otras causas. La mejoría tras retirar el agente, con o sin un curso limitado de corticoesteroides, y la ausencia de recaída a largo plazo pueden favorecer una lesión inducida por fármacos con fenotipo autoinmune. La distinción puede requerir seguimiento prolongado.",
  perlaENARM: "La lesión hepática inducida por fármacos puede imitar la hepatitis autoinmune. Revisar cronología, medicamentos y evolución después de retirar el agente.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional: EASL 2025 y recomendaciones sobre lesión hepática inducida por fármacos.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines on the management of autoimmune hepatitis. J Hepatol. 2025;83(2):453-501.",
    "Mack CL, et al. Hepatology. 2020;72(2):671-722."
  ]
},
{
  id: "GASTRO-246",
  especialidad: "Gastroenterología",
  tema: "Hepatitis autoinmune",
  subtema: "Tratamiento de inducción y mantenimiento",
  dificultad: "Muy alta",
  caso: "Mujer de 31 años presenta hepatitis autoinmune activa confirmada mediante evaluación clínica, serológica e histológica. Tiene elevación persistente de aminotransferasas e IgG, sin insuficiencia hepática aguda ni contraindicaciones identificadas para inmunosupresión. Se encuentra en valoración por hepatología para iniciar tratamiento.",
  pregunta: "¿Cuál es una estrategia farmacológica de primera línea respaldada por las recomendaciones internacionales actuales?",
  opciones: [
    "Prednisolona o prednisona combinada con azatioprina, tras evaluar las condiciones clínicas y las contraindicaciones",
    "Ribavirina como monoterapia durante 12 semanas",
    "Ursodesoxicólico como tratamiento inmunosupresor único",
    "Antibióticos de amplio espectro durante 6 meses",
    "Suspender toda intervención farmacológica hasta que se desarrolle cirrosis"
  ],
  respuestaCorrecta: 0,
  explicacion: "La inmunosupresión reduce la actividad inflamatoria y mejora el pronóstico de la hepatitis autoinmune activa. La combinación de un glucocorticoide con azatioprina constituye un esquema clásico de primera línea. La guía EASL de 2025 también reconoce al micofenolato mofetilo como alternativa de primera línea en adultos seleccionados, con especial atención a su teratogenicidad. La elección del régimen requiere individualizar la gravedad, las comorbilidades, el embarazo potencial y las contraindicaciones, además de monitorizar la respuesta bioquímica y la toxicidad.",
  perlaENARM: "Tratamiento clásico: glucocorticoide + azatioprina. EASL 2025 incluye micofenolato mofetilo como alternativa de primera línea en adultos seleccionados; es teratógeno.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional actualizada: EASL Clinical Practice Guidelines, 2025.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines on the management of autoimmune hepatitis. J Hepatol. 2025;83(2):453-501.",
    "Mack CL, et al. Hepatology. 2020;72(2):671-722."
  ]
},
{
  id: "GASTRO-247",
  especialidad: "Gastroenterología",
  tema: "Hepatitis autoinmune",
  subtema: "Monitorización de respuesta terapéutica",
  dificultad: "Muy alta",
  caso: "Mujer de 44 años con hepatitis autoinmune recibe tratamiento inmunosupresor. Después de varios meses, las aminotransferasas disminuyen de manera importante, pero continúan por encima del límite normal y la IgG permanece elevada. La paciente refiere buena adherencia y no presenta síntomas nuevos.",
  pregunta: "¿Cuál es el objetivo bioquímico principal del tratamiento y seguimiento?",
  opciones: [
    "Normalizar exclusivamente la bilirrubina, independientemente de las aminotransferasas",
    "Conseguir normalización de AST, ALT e IgG, además de evaluar la evolución clínica y la fibrosis",
    "Mantener las aminotransferasas hasta cinco veces por encima del límite normal para evitar efectos adversos",
    "Suspender inmediatamente la inmunosupresión al observar cualquier descenso de AST",
    "Utilizar únicamente la concentración de autoanticuerpos para decidir si existe remisión"
  ],
  respuestaCorrecta: 1,
  explicacion: "El objetivo terapéutico es lograr una respuesta bioquímica completa, definida principalmente por la normalización de aminotransferasas e IgG, junto con la remisión clínica y, cuando se evalúa, histológica. Una reducción parcial no equivale a remisión completa. La respuesta debe interpretarse considerando adherencia, dosis, toxicidad, diagnóstico alternativo y tiempo de tratamiento. La guía EASL de 2025 contempla un intervalo de 6 a 12 meses para evaluar la respuesta bioquímica completa o una respuesta insuficiente en el marco clínico apropiado.",
  perlaENARM: "Remisión bioquímica: normalización de AST, ALT e IgG. La mejoría parcial no equivale a control completo de la hepatitis autoinmune.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional: EASL 2025.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines on the management of autoimmune hepatitis. J Hepatol. 2025;83(2):453-501.",
    "Mack CL, et al. Hepatology. 2020;72(2):671-722."
  ]
},
{
  id: "GASTRO-248",
  especialidad: "Gastroenterología",
  tema: "Hepatitis autoinmune",
  subtema: "Hepatitis autoinmune aguda grave e insuficiencia hepática",
  dificultad: "Extrema",
  caso: "Mujer de 46 años ingresa por ictericia progresiva, vómitos y deterioro del estado general. Los estudios muestran aminotransferasas marcadamente elevadas, bilirrubina total de 12 mg/dL e INR de 2.1. En las últimas horas desarrolla desorientación y asterixis. La evaluación inicial plantea hepatitis autoinmune aguda grave.",
  pregunta: "¿Cuál es la conducta prioritaria ante la sospecha de insuficiencia hepática aguda?",
  opciones: [
    "Manejo ambulatorio con prednisona oral y control en 4 semanas",
    "Esperar el resultado de todos los autoanticuerpos antes de solicitar atención especializada",
    "Hospitalización urgente, manejo de insuficiencia hepática aguda y valoración inmediata por un centro con capacidad de trasplante hepático",
    "Administrar azatioprina como única medida urgente y dar de alta",
    "Realizar únicamente ultrasonido abdominal y diferir la evaluación de la coagulación"
  ],
  respuestaCorrecta: 2,
  explicacion: "La coagulopatía asociada a encefalopatía en una paciente sin cirrosis previa conocida sugiere insuficiencia hepática aguda, una emergencia con riesgo de mortalidad elevado. Se requiere hospitalización, vigilancia intensiva, evaluación etiológica urgente y contacto temprano con un centro de trasplante hepático. La inmunosupresión puede considerarse en pacientes seleccionados con sospecha de hepatitis autoinmune, pero no debe retrasar la referencia ni el manejo de las complicaciones. La decisión debe individualizarse por hepatología y cuidados intensivos.",
  perlaENARM: "Hepatitis aguda + INR ≥1.5 + encefalopatía, sin hepatopatía crónica conocida: sospechar insuficiencia hepática aguda. La referencia temprana a un centro de trasplante es prioritaria.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional: EASL 2025 y recomendaciones especializadas sobre insuficiencia hepática aguda.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines on the management of autoimmune hepatitis. J Hepatol. 2025;83(2):453-501.",
    "European Association for the Study of the Liver. EASL Clinical Practical Guidelines on the management of acute (fulminant) liver failure. J Hepatol. 2017;66(5):1047-1081."
  ]
},
{
  id: "GASTRO-249",
  especialidad: "Gastroenterología",
  tema: "Hepatitis autoinmune",
  subtema: "Embarazo y selección de inmunosupresores",
  dificultad: "Extrema",
  caso: "Mujer de 29 años con hepatitis autoinmune activa desea embarazarse. Su tratamiento actual incluye prednisona y azatioprina, con respuesta bioquímica favorable. Durante la consulta pregunta si debe cambiar automáticamente a micofenolato mofetilo para mejorar el control de la enfermedad.",
  pregunta: "¿Cuál es la recomendación más apropiada respecto a la selección del tratamiento en el contexto reproductivo?",
  opciones: [
    "Cambiar a micofenolato mofetilo porque es el fármaco preferido durante el embarazo",
    "Suspender toda inmunosupresión de forma inmediata antes de intentar concebir",
    "Planificar el embarazo con hepatología y obstetricia; evitar micofenolato mofetilo por su teratogenicidad y valorar la continuidad de un esquema compatible con el embarazo",
    "Sustituir azatioprina por ribavirina para prevenir recaídas",
    "Mantener exclusivamente micofenolato mofetilo durante todo el embarazo sin evaluación especializada"
  ],
  respuestaCorrecta: 2,
  explicacion: "El embarazo en pacientes con hepatitis autoinmune requiere planificación y coordinación entre hepatología y obstetricia. El micofenolato mofetilo está contraindicado durante el embarazo por su riesgo teratógeno y debe evitarse en quienes planean concebir, siguiendo los periodos de suspensión recomendados por las autoridades y guías aplicables. La azatioprina y los glucocorticoides suelen poder mantenerse cuando están clínicamente indicados, con vigilancia individualizada. La actividad no controlada de la enfermedad también implica riesgos maternos y fetales.",
  perlaENARM: "Micofenolato mofetilo: teratógeno y no compatible con el embarazo. No retirar automáticamente todo tratamiento inmunosupresor; planificar la concepción con especialistas.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional: EASL 2025 y recomendaciones de seguridad reproductiva de inmunosupresores.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines on the management of autoimmune hepatitis. J Hepatol. 2025;83(2):453-501.",
    "Mack CL, et al. Hepatology. 2020;72(2):671-722."
  ]
},
{
  id: "GASTRO-250",
  especialidad: "Gastroenterología",
  tema: "Hepatitis autoinmune",
  subtema: "Cirrosis, complicaciones y seguimiento",
  dificultad: "Extrema",
  caso: "Hombre de 55 años con hepatitis autoinmune de larga evolución presenta cirrosis confirmada por estudios clínicos e histológicos. Actualmente recibe inmunosupresión y sus aminotransferasas se han normalizado. La evaluación muestra datos de hipertensión portal, sin hemorragia digestiva previa. El paciente pregunta si la normalización de las enzimas elimina la necesidad de seguimiento.",
  pregunta: "¿Cuál es la estrategia de seguimiento más apropiada?",
  opciones: [
    "Suspender la vigilancia porque las aminotransferasas normales descartan complicaciones de cirrosis",
    "Realizar únicamente determinaciones anuales de ANA y suspender la vigilancia de hipertensión portal",
    "Mantener seguimiento de la actividad de la hepatitis y de las complicaciones de la cirrosis, incluida la vigilancia de carcinoma hepatocelular según las recomendaciones aplicables",
    "Realizar colonoscopia anual como única estrategia para detectar complicaciones hepáticas",
    "Suspender permanentemente la inmunosupresión tras una sola determinación normal de ALT"
  ],
  respuestaCorrecta: 2,
  explicacion: "La normalización de aminotransferasas e IgG es un objetivo importante, pero no elimina el riesgo de complicaciones derivadas de una cirrosis establecida. Se requiere seguimiento de la actividad de la enfermedad, evaluación de la tolerancia al tratamiento, vigilancia de hipertensión portal y detección de carcinoma hepatocelular conforme a las recomendaciones para pacientes con cirrosis. La retirada de inmunosupresión debe considerarse solo en pacientes seleccionados, tras remisión sostenida y evaluación especializada, porque las recaídas son frecuentes.",
  perlaENARM: "La cirrosis por hepatitis autoinmune requiere vigilancia de sus complicaciones aunque exista remisión bioquímica. No suspender inmunosupresión solo por una determinación normal de aminotransferasas.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional: EASL Clinical Practice Guidelines on the management of autoimmune hepatitis, 2025.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines on the management of autoimmune hepatitis. J Hepatol. 2025;83(2):453-501.",
    "Mack CL, et al. Hepatology. 2020;72(2):671-722."
  ]
},
 {
  id: "GASTRO-251",
  especialidad: "Gastroenterología",
  tema: "Hemocromatosis",
  subtema: "Fisiopatología y presentación clínica",
  dificultad: "Baja",
  caso: "Hombre de 48 años acude por fatiga, disminución de la libido y dolor articular crónico en las manos. Refiere que su padre falleció por cirrosis hepática sin antecedente conocido de alcoholismo. A la exploración presenta hiperpigmentación cutánea y hepatomegalia leve. Los estudios muestran elevación de aminotransferasas y glucosa en ayuno de 168 mg/dL.",
  pregunta: "¿Cuál es el diagnóstico que mejor integra los hallazgos clínicos?",
  opciones: [
    "Enfermedad de Wilson",
    "Hemocromatosis hereditaria",
    "Hepatitis autoinmune",
    "Enfermedad de Gilbert",
    "Colangitis biliar primaria"
  ],
  respuestaCorrecta: 1,
  explicacion: "La hemocromatosis hereditaria es un trastorno de sobrecarga de hierro que puede producir lesión hepática, diabetes mellitus, hipogonadismo, artropatía y pigmentación cutánea. La forma clásica se asocia con variantes patogénicas del gen HFE, especialmente la homocigosis C282Y. La acumulación progresiva de hierro favorece estrés oxidativo, lesión celular, fibrosis y cirrosis. La presentación clínica puede ser inespecífica y no todos los pacientes desarrollan la tríada clásica de hiperpigmentación, diabetes y cirrosis.",
  perlaENARM: "Hemocromatosis: sobrecarga de hierro + hepatopatía + diabetes + hipogonadismo + artropatía. La ausencia de la tríada clásica no excluye la enfermedad.",
  gpc: "No se asigna clave de GPC mexicana: no se ha verificado una guía nacional específica y vigente para este reactivo. Referencia complementaria: EASL Clinical Practice Guidelines on haemochromatosis, 2022.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines on haemochromatosis. J Hepatol. 2022;77(2):479-502. doi:10.1016/j.jhep.2022.03.033.",
    "Pietrangelo A. Hereditary Hemochromatosis: Pathogenesis, Diagnosis, and Treatment. Gastroenterology. 2010;139(2):393-408."
  ]
},
{
  id: "GASTRO-252",
  especialidad: "Gastroenterología",
  tema: "Hemocromatosis",
  subtema: "Metabolismo del hierro y gen HFE",
  dificultad: "Media",
  caso: "Hombre de 39 años presenta elevación persistente de ferritina y saturación de transferrina. La evaluación genética identifica homocigosis para una variante patogénica del gen HFE. No tiene antecedentes de transfusiones repetidas ni de anemia crónica. Se solicita explicar el mecanismo responsable de la acumulación de hierro.",
  pregunta: "¿Qué alteración fisiopatológica explica mejor la sobrecarga de hierro en la hemocromatosis hereditaria clásica?",
  opciones: [
    "Disminución de la absorción intestinal de hierro por aumento de hepcidina",
    "Aumento sostenido de hepcidina con bloqueo completo de la ferroportina",
    "Disminución inapropiada de hepcidina, que permite una mayor absorción intestinal de hierro y liberación de hierro desde los macrófagos",
    "Deficiencia primaria de transferrina que impide el transporte plasmático de hierro",
    "Aumento de la excreción renal de hierro con deficiencia secundaria de ferritina"
  ],
  respuestaCorrecta: 2,
  explicacion: "La hepcidina, producida principalmente por los hepatocitos, regula la disponibilidad sistémica de hierro al inducir la internalización y degradación de la ferroportina. En la hemocromatosis relacionada con HFE, la producción de hepcidina es inadecuadamente baja para la cantidad de hierro corporal. Esto incrementa la absorción intestinal y la liberación de hierro desde los macrófagos, favoreciendo su acumulación progresiva en el hígado y otros órganos.",
  perlaENARM: "Hepcidina baja o inapropiadamente normal → ferroportina activa → mayor disponibilidad sistémica de hierro. La alteración reguladora es central en la hemocromatosis hereditaria.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional: EASL 2022.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines on haemochromatosis. J Hepatol. 2022;77(2):479-502.",
    "Ganz T, Nemeth E. Hepcidin and iron homeostasis. Biochim Biophys Acta. 2012;1823(9):1434-1443."
  ]
},
{
  id: "GASTRO-253",
  especialidad: "Gastroenterología",
  tema: "Hemocromatosis",
  subtema: "Interpretación de estudios de hierro",
  dificultad: "Media",
  caso: "Hombre de 46 años presenta fatiga y elevación persistente de aminotransferasas. Los estudios muestran ferritina de 980 ng/mL, hierro sérico elevado y saturación de transferrina de 78%. No tiene antecedentes de transfusiones ni de suplementos de hierro. Se sospecha hemocromatosis hereditaria.",
  pregunta: "¿Cuál es el siguiente paso más apropiado para investigar la causa de la sobrecarga de hierro?",
  opciones: [
    "Descartar hemocromatosis porque la ferritina no supera 1,500 ng/mL",
    "Solicitar únicamente una biopsia hepática sin evaluación genética",
    "Realizar evaluación genética de HFE, especialmente para la variante C282Y, e integrar los resultados con el contexto clínico",
    "Solicitar anticuerpos antinucleares como prueba confirmatoria de sobrecarga de hierro",
    "Iniciar quelación de hierro antes de completar la evaluación etiológica"
  ],
  respuestaCorrecta: 2,
  explicacion: "Una saturación de transferrina persistentemente elevada es una señal importante de sobrecarga de hierro y orienta hacia hemocromatosis hereditaria. La ferritina refleja las reservas de hierro, pero también aumenta por inflamación, enfermedad hepática, consumo de alcohol y alteraciones metabólicas. En personas con sospecha clínica y parámetros de hierro compatibles, el estudio genético de HFE ayuda a establecer el diagnóstico. La necesidad de resonancia magnética hepática, biopsia u otros estudios depende del genotipo, los resultados bioquímicos y la sospecha de daño orgánico.",
  perlaENARM: "Saturación de transferrina elevada: dato clave para sospechar hemocromatosis. Ferritina elevada aislada no demuestra sobrecarga de hierro, porque es un reactante de fase aguda.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional: EASL 2022.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines on haemochromatosis. J Hepatol. 2022;77(2):479-502.",
    "Adams PC, et al. Hemochromatosis. Lancet. 2007;370(9602):1855-1860."
  ]
},
{
  id: "GASTRO-254",
  especialidad: "Gastroenterología",
  tema: "Hemocromatosis",
  subtema: "Criterios bioquímicos y genéticos",
  dificultad: "Alta",
  caso: "Hombre de 43 años, asintomático, es estudiado por antecedente familiar de hemocromatosis. La saturación de transferrina es de 72% y la ferritina de 620 ng/mL. El estudio genético demuestra homocigosis para HFE C282Y. No presenta elevación importante de aminotransferasas ni datos clínicos de descompensación hepática.",
  pregunta: "¿Cuál es la interpretación diagnóstica más apropiada según las recomendaciones europeas para adultos homocigotos C282Y?",
  opciones: [
    "El diagnóstico requiere obligatoriamente cirrosis demostrada por biopsia",
    "La combinación de homocigosis C282Y y parámetros de hierro elevados permite establecer el diagnóstico de hemocromatosis",
    "La saturación de transferrina elevada carece de valor si el paciente está asintomático",
    "El diagnóstico solo puede establecerse si existe diabetes mellitus",
    "La homocigosis C282Y excluye la posibilidad de sobrecarga de hierro"
  ],
  respuestaCorrecta: 1,
  explicacion: "De acuerdo con EASL, en hombres y mujeres posmenopáusicas homocigotos C282Y, la saturación de transferrina y la ferritina por encima de los umbrales correspondientes permiten establecer el diagnóstico de hemocromatosis. Los umbrales orientativos son saturación de transferrina superior al 50% y ferritina superior a 300 µg/L en hombres, y saturación superior al 45% y ferritina superior a 200 µg/L en mujeres. En otros genotipos, la demostración de sobrecarga hepática mediante resonancia magnética o biopsia, según el caso, puede ser necesaria.",
  perlaENARM: "Homocigosis HFE C282Y + saturación de transferrina y ferritina elevadas puede establecer el diagnóstico sin exigir biopsia hepática. Los umbrales deben interpretarse según sexo, estado menopáusico y guía utilizada.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional: EASL 2022.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines on haemochromatosis. J Hepatol. 2022;77(2):479-502.",
    "European Association for the Study of the Liver. Clinical Practice Guidelines on haemochromatosis. J Hepatol. 2010;53(1):3-22."
  ]
},
{
  id: "GASTRO-255",
  especialidad: "Gastroenterología",
  tema: "Hemocromatosis",
  subtema: "Diagnóstico diferencial de hiperferritinemia",
  dificultad: "Alta",
  caso: "Hombre de 57 años con obesidad, diabetes mellitus tipo 2 y consumo habitual de alcohol presenta ferritina de 1,050 ng/mL. La saturación de transferrina es de 29%, la proteína C reactiva está elevada y la ecografía muestra esteatosis hepática. No tiene antecedentes familiares de hemocromatosis.",
  pregunta: "¿Cuál es la interpretación más apropiada de los resultados?",
  opciones: [
    "La ferritina elevada confirma por sí sola hemocromatosis hereditaria",
    "El cuadro obliga a diagnosticar enfermedad de Wilson",
    "La hiperferritinemia puede relacionarse con inflamación, consumo de alcohol o enfermedad hepática metabólica; debe evaluarse el contexto antes de atribuirla a sobrecarga de hierro hereditaria",
    "La saturación de transferrina normal confirma cirrosis descompensada",
    "La ferritina elevada demuestra una hemocromatosis juvenil"
  ],
  respuestaCorrecta: 2,
  explicacion: "La ferritina es un marcador de reservas de hierro, pero también aumenta durante la inflamación y en enfermedades hepáticas metabólicas o asociadas al alcohol. Una saturación de transferrina normal o no elevada hace menos probable la hemocromatosis HFE clásica, aunque no excluye todas las causas de sobrecarga de hierro. La evaluación debe considerar la persistencia de los hallazgos, el contexto clínico y otros estudios cuando estén indicados.",
  perlaENARM: "Hiperferritinemia no equivale automáticamente a hemocromatosis. Interpretar ferritina junto con saturación de transferrina, inflamación, alcohol y enfermedad hepática metabólica.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional: EASL 2022.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines on haemochromatosis. J Hepatol. 2022;77(2):479-502.",
    "Kowdley KV, et al. ACG Clinical Guideline: Hereditary Hemochromatosis. Am J Gastroenterol. 2019;114(8):1202-1218."
  ]
},
{
  id: "GASTRO-256",
  especialidad: "Gastroenterología",
  tema: "Hemocromatosis",
  subtema: "Tratamiento mediante flebotomía",
  dificultad: "Alta",
  caso: "Hombre de 51 años con hemocromatosis HFE confirmada presenta saturación de transferrina de 76% y ferritina de 870 ng/mL. No tiene anemia, inestabilidad hemodinámica ni contraindicaciones para extracción sanguínea. La evaluación inicial no muestra insuficiencia hepática descompensada.",
  pregunta: "¿Cuál es el tratamiento de primera línea para reducir la sobrecarga de hierro en este paciente?",
  opciones: [
    "Suplementación oral con hierro para inducir regulación intestinal",
    "Flebotomías terapéuticas periódicas, con monitorización de hemoglobina y ferritina",
    "Transfusiones programadas de concentrados eritrocitarios",
    "Glucocorticoides sistémicos como monoterapia",
    "Quelación con deferoxamina como primera elección en todos los pacientes"
  ],
  respuestaCorrecta: 1,
  explicacion: "La flebotomía terapéutica es el tratamiento de primera línea en la mayoría de los pacientes con hemocromatosis hereditaria que pueden tolerarla. Se realizan extracciones periódicas, habitualmente de alrededor de 400-500 mL según el peso y la situación clínica, con control de hemoglobina y ferritina. Durante la fase de inducción se busca reducir la ferritina aproximadamente a 50 µg/L; posteriormente, en mantenimiento, se suele mantener entre 50 y 100 µg/L, individualizando la frecuencia y evitando anemia o depleción excesiva.",
  perlaENARM: "Tratamiento de elección: flebotomía terapéutica. Objetivo habitual de ferritina: alrededor de 50 µg/L en inducción y 50-100 µg/L en mantenimiento.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional: EASL 2022.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines on haemochromatosis. J Hepatol. 2022;77(2):479-502.",
    "Kowdley KV, et al. ACG Clinical Guideline: Hereditary Hemochromatosis. Am J Gastroenterol. 2019;114(8):1202-1218."
  ]
},
{
  id: "GASTRO-257",
  especialidad: "Gastroenterología",
  tema: "Hemocromatosis",
  subtema: "Evaluación de fibrosis y riesgo hepático",
  dificultad: "Muy alta",
  caso: "Hombre de 55 años con hemocromatosis hereditaria confirmada presenta ferritina de 1,180 ng/mL y elevación persistente de aminotransferasas. La elastografía hepática sugiere fibrosis avanzada. No tiene ascitis ni encefalopatía.",
  pregunta: "¿Cuál es la conducta más apropiada para determinar la gravedad de la enfermedad hepática?",
  opciones: [
    "Considerar que la ferritina elevada demuestra por sí sola carcinoma hepatocelular",
    "Evaluar fibrosis y daño hepático con métodos no invasivos y considerar biopsia si persiste incertidumbre o si el resultado modifica la conducta",
    "Descartar fibrosis avanzada porque no presenta ascitis",
    "Solicitar únicamente anticuerpos antimúsculo liso para estadificar la hemocromatosis",
    "Suspender la evaluación hepática una vez confirmada la variante genética"
  ],
  respuestaCorrecta: 1,
  explicacion: "La evaluación de fibrosis es fundamental porque determina el pronóstico y la necesidad de vigilancia de complicaciones. Deben integrarse la ferritina, las pruebas hepáticas, los índices no invasivos y la elastografía cuando esté disponible. La biopsia no es necesaria de forma rutinaria en todos los pacientes, pero puede considerarse cuando existe incertidumbre diagnóstica o sobre el estadio. Una ferritina superior a 1,000 µg/L se asocia con mayor probabilidad de fibrosis avanzada en determinadas poblaciones, pero no demuestra por sí sola cirrosis ni carcinoma hepatocelular.",
  perlaENARM: "Ferritina >1,000 µg/L aumenta la preocupación por fibrosis avanzada, pero no confirma cirrosis. La estadificación hepática orienta el pronóstico y la vigilancia posterior.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional: EASL 2022.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines on haemochromatosis. J Hepatol. 2022;77(2):479-502.",
    "Kowdley KV, et al. ACG Clinical Guideline: Hereditary Hemochromatosis. Am J Gastroenterol. 2019;114(8):1202-1218."
  ]
},
{
  id: "GASTRO-258",
  especialidad: "Gastroenterología",
  tema: "Hemocromatosis",
  subtema: "Hemocromatosis secundaria",
  dificultad: "Muy alta",
  caso: "Hombre de 36 años con anemia dependiente de transfusiones por una enfermedad hematológica presenta ferritina de 2,200 ng/mL y evidencia de acumulación hepática de hierro en resonancia magnética. La saturación de transferrina está elevada. No se identifican datos que sugieran hemocromatosis HFE clásica.",
  pregunta: "¿Cuál es el mecanismo más probable de la sobrecarga de hierro en este caso?",
  opciones: [
    "Aumento de la absorción intestinal por homocigosis HFE C282Y como única explicación posible",
    "Sobrecarga transfusional acumulativa de hierro",
    "Deficiencia de hierro secundaria a hemorragia crónica",
    "Disminución de la absorción intestinal por enfermedad celíaca",
    "Aumento de la excreción renal de hierro inducido por anemia"
  ],
  respuestaCorrecta: 1,
  explicacion: "Las transfusiones repetidas aportan hierro que el organismo no puede eliminar de manera regulada. Con el tiempo, puede desarrollarse sobrecarga de hierro secundaria con depósito hepático y lesión en otros órganos. La causa, la intensidad de la sobrecarga, la expectativa de vida y la posibilidad de reducir la carga transfusional influyen en la decisión de utilizar quelación. La flebotomía generalmente no es apropiada en pacientes con anemia dependiente de transfusiones.",
  perlaENARM: "Sobrecarga transfusional: considerar quelación según la enfermedad de base, la carga de hierro y la función orgánica. No confundir con hemocromatosis HFE clásica.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia complementaria: guías de hemocromatosis y manejo de sobrecarga transfusional de hierro.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines on haemochromatosis. J Hepatol. 2022;77(2):479-502.",
    "Kowdley KV, et al. ACG Clinical Guideline: Hereditary Hemochromatosis. Am J Gastroenterol. 2019;114(8):1202-1218."
  ]
},
{
  id: "GASTRO-259",
  especialidad: "Gastroenterología",
  tema: "Hemocromatosis",
  subtema: "Hemocromatosis y carcinoma hepatocelular",
  dificultad: "Extrema",
  caso: "Hombre de 62 años con hemocromatosis hereditaria presenta cirrosis hepática confirmada. Recibe flebotomías y mantiene ferritina dentro del objetivo terapéutico. Actualmente está asintomático y sus aminotransferasas son normales.",
  pregunta: "¿Qué estrategia debe mantenerse debido al riesgo de complicaciones hepáticas?",
  opciones: [
    "Suspender toda vigilancia oncológica porque la ferritina está controlada",
    "Realizar determinaciones de ferritina cada 10 años como única medida preventiva",
    "Mantener vigilancia de carcinoma hepatocelular conforme a las recomendaciones para cirrosis, habitualmente con ultrasonido hepático cada 6 meses, con o sin alfafetoproteína según la guía aplicada",
    "Solicitar tomografía con contraste semanal de forma indefinida",
    "Realizar biopsia hepática anual obligatoria en todos los pacientes"
  ],
  respuestaCorrecta: 2,
  explicacion: "La cirrosis por hemocromatosis mantiene un riesgo de carcinoma hepatocelular incluso después de reducir las reservas de hierro y normalizar las pruebas bioquímicas. Los pacientes con cirrosis deben continuar la vigilancia oncológica según las recomendaciones vigentes, habitualmente con ultrasonido hepático cada 6 meses y uso de alfafetoproteína de acuerdo con la guía aplicada. La necesidad de vigilancia en pacientes con fibrosis avanzada sin cirrosis debe individualizarse.",
  perlaENARM: "La depleción de hierro no elimina el riesgo de carcinoma hepatocelular en pacientes con cirrosis establecida. Mantener vigilancia semestral en la población con cirrosis elegible.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia complementaria: EASL 2022 y guías internacionales de vigilancia de carcinoma hepatocelular.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines on haemochromatosis. J Hepatol. 2022;77(2):479-502.",
    "Singal AG, et al. AASLD Practice Guidance on prevention, diagnosis, and treatment of hepatocellular carcinoma. Hepatology. 2023;78(6):1922-1965."
  ]
},
{
  id: "GASTRO-260",
  especialidad: "Gastroenterología",
  tema: "Hemocromatosis",
  subtema: "Hemocromatosis juvenil y daño multiorgánico",
  dificultad: "Extrema",
  caso: "Hombre de 23 años presenta insuficiencia cardiaca, diabetes mellitus de reciente diagnóstico, hipogonadismo y elevación importante de ferritina y saturación de transferrina. La resonancia magnética demuestra sobrecarga de hierro hepática y cardiaca. No tiene antecedentes de transfusiones repetidas.",
  pregunta: "¿Cuál es la consideración diagnóstica y terapéutica más apropiada?",
  opciones: [
    "Hemocromatosis juvenil; requiere evaluación genética especializada y tratamiento urgente e individualizado de la sobrecarga de hierro y del daño cardiaco",
    "Hemocromatosis HFE clásica confirmada exclusivamente por la edad, sin necesidad de más estudios",
    "Enfermedad de Gilbert con manifestaciones extrahepáticas",
    "Hepatitis autoinmune aislada, porque la sobrecarga de hierro cardiaca no se relaciona con hemocromatosis",
    "Enfermedad celíaca con malabsorción de hierro como causa más probable"
  ],
  respuestaCorrecta: 0,
  explicacion: "La hemocromatosis juvenil es una forma infrecuente de sobrecarga hereditaria de hierro que suele manifestarse antes de los 30 años y puede producir afectación cardiaca y endocrina grave. Puede asociarse con variantes patogénicas de HJV o HAMP, que alteran la regulación de hepcidina. La evaluación requiere confirmación de la sobrecarga, investigación genética dirigida y valoración multidisciplinaria. La insuficiencia cardiaca asociada al hierro exige atención especializada urgente; la elección entre flebotomía y quelación depende de la estabilidad hemodinámica, la anemia y el contexto clínico.",
  perlaENARM: "Sobrecarga de hierro de inicio temprano con cardiomiopatía e hipogonadismo: sospechar hemocromatosis juvenil y considerar HJV/HAMP. La afectación cardiaca puede condicionar urgencia y selección terapéutica.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional: EASL 2022 y literatura especializada en hemocromatosis no relacionada con HFE.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines on haemochromatosis. J Hepatol. 2022;77(2):479-502.",
    "Pietrangelo A. Hereditary Hemochromatosis: Pathogenesis, Diagnosis, and Treatment. Gastroenterology. 2010;139(2):393-408."
  ]
},
  {
  id: "GASTRO-261",
  especialidad: "Gastroenterología",
  tema: "Enfermedad de Wilson",
  subtema: "Presentación clínica y sospecha diagnóstica",
  dificultad: "Baja",
  caso: "Hombre de 19 años acude por fatiga, ictericia leve y elevación persistente de aminotransferasas. Refiere cambios recientes en su escritura y temblor fino de las manos. Su madre comenta que ha presentado irritabilidad y disminución del rendimiento escolar. No tiene antecedentes de consumo significativo de alcohol ni de exposición a hepatotóxicos.",
  pregunta: "¿Cuál es el diagnóstico que mejor integra las manifestaciones hepáticas, neurológicas y psiquiátricas?",
  opciones: [
    "Hemocromatosis hereditaria",
    "Enfermedad de Wilson",
    "Hepatitis autoinmune como única posibilidad",
    "Síndrome de Gilbert",
    "Colangitis biliar primaria"
  ],
  respuestaCorrecta: 1,
  explicacion: "La enfermedad de Wilson es un trastorno autosómico recesivo del metabolismo del cobre causado por variantes patogénicas en ATP7B. Produce acumulación de cobre, principalmente en hígado y sistema nervioso central, y puede manifestarse con hepatitis, cirrosis, alteraciones del movimiento, cambios conductuales y síntomas psiquiátricos. Debe considerarse en personas jóvenes con hepatopatía inexplicada, especialmente cuando existen manifestaciones neurológicas o psiquiátricas concomitantes.",
  perlaENARM: "Paciente joven con hepatopatía inexplicada más temblor, alteraciones conductuales o síntomas extrapiramidales: investigar enfermedad de Wilson.",
  gpc: "No se asigna clave de GPC mexicana porque no se ha verificado una guía nacional específica y vigente para este reactivo. Referencia internacional: guía práctica de AASLD sobre enfermedad de Wilson, 2022.",
  bibliografia: [
    "Schilsky ML, et al. A multidisciplinary approach to the diagnosis and management of Wilson disease: 2022 Practice Guidance on Wilson disease from the American Association for the Study of Liver Diseases. Hepatology. 2023;77(4):1428-1455.",
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines: Wilson's disease. J Hepatol. 2012;56(3):671-685."
  ]
},
{
  id: "GASTRO-262",
  especialidad: "Gastroenterología",
  tema: "Enfermedad de Wilson",
  subtema: "Fisiopatología y metabolismo del cobre",
  dificultad: "Media",
  caso: "Mujer de 22 años presenta hepatitis crónica y alteraciones del movimiento. Los estudios sugieren acumulación de cobre en el hígado. La evaluación genética identifica variantes patogénicas bialélicas en ATP7B.",
  pregunta: "¿Qué alteración fisiopatológica explica principalmente la acumulación de cobre en esta enfermedad?",
  opciones: [
    "Aumento de la absorción intestinal de hierro por alteración de HFE",
    "Defecto en la incorporación de cobre a la ceruloplasmina y en la excreción biliar del cobre",
    "Deficiencia de la síntesis de albúmina como alteración primaria del metabolismo del cobre",
    "Aumento de la excreción renal de cobre con deficiencia tisular progresiva",
    "Defecto de la absorción intestinal de cobre causado por mutaciones en ATP7A"
  ],
  respuestaCorrecta: 1,
  explicacion: "ATP7B codifica una ATPasa transportadora de cobre que participa en la incorporación de cobre a la apoceruloplasmina y en la excreción biliar del exceso de cobre. Su disfunción reduce la eliminación hepatobiliar y favorece la acumulación hepática, seguida de liberación de cobre hacia la circulación y depósito extrahepático. ATP7A, en cambio, está relacionado con la enfermedad de Menkes, que produce alteraciones en la distribución y disponibilidad del cobre.",
  perlaENARM: "Wilson = ATP7B, herencia autosómica recesiva, disminución de la excreción biliar de cobre. Menkes = ATP7A.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencias internacionales: AASLD 2022 y EASL 2012.",
  bibliografia: [
    "Schilsky ML, et al. AASLD Practice Guidance on Wilson disease. Hepatology. 2023;77(4):1428-1455.",
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines: Wilson's disease. J Hepatol. 2012;56(3):671-685."
  ]
},
{
  id: "GASTRO-263",
  especialidad: "Gastroenterología",
  tema: "Enfermedad de Wilson",
  subtema: "Ceruloplasmina y estudios iniciales",
  dificultad: "Media",
  caso: "Hombre de 20 años con elevación persistente de aminotransferasas presenta ceruloplasmina sérica de 12 mg/dL. No tiene manifestaciones neurológicas evidentes. La exploración física muestra hepatomegalia leve y no hay datos clínicos de insuficiencia hepática.",
  pregunta: "¿Cuál es la interpretación más apropiada de la concentración de ceruloplasmina?",
  opciones: [
    "Una concentración menor de 20 mg/dL confirma por sí sola la enfermedad de Wilson",
    "El resultado apoya la sospecha, pero debe integrarse con otros estudios porque la ceruloplasmina tiene limitaciones diagnósticas",
    "Una ceruloplasmina baja descarta una enfermedad del metabolismo del cobre",
    "La ceruloplasmina solo es útil para diagnosticar hemocromatosis",
    "La concentración no tiene utilidad en la evaluación de una hepatopatía inexplicada"
  ],
  respuestaCorrecta: 1,
  explicacion: "La ceruloplasmina sérica suele estar disminuida en la enfermedad de Wilson, y una concentración inferior a 20 mg/dL es un hallazgo sugestivo en el contexto apropiado. Sin embargo, no es específica: también puede disminuir en otras hepatopatías avanzadas, pérdidas proteicas y estados de deficiencia de cobre. Además, puede ser normal o elevarse por inflamación, embarazo o tratamiento con estrógenos. Por ello, debe interpretarse junto con cobre urinario de 24 horas, exploración oftalmológica, evaluación hepática y, cuando corresponda, estudio genético.",
  perlaENARM: "Ceruloplasmina baja orienta, pero no confirma Wilson por sí sola. Una concentración normal tampoco excluye completamente la enfermedad.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional: AASLD 2022.",
  bibliografia: [
    "Schilsky ML, et al. AASLD Practice Guidance on Wilson disease. Hepatology. 2023;77(4):1428-1455.",
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines: Wilson's disease. J Hepatol. 2012;56(3):671-685."
  ]
},
{
  id: "GASTRO-264",
  especialidad: "Gastroenterología",
  tema: "Enfermedad de Wilson",
  subtema: "Cobre urinario de 24 horas",
  dificultad: "Alta",
  caso: "Mujer de 24 años con hepatitis de etiología no aclarada presenta ceruloplasmina disminuida y elevación persistente de aminotransferasas. La cuantificación de cobre urinario en una recolección de 24 horas muestra 180 µg/24 h. No ha recibido tratamiento quelante antes de la recolección.",
  pregunta: "¿Cuál es la interpretación más apropiada del resultado urinario?",
  opciones: [
    "Es un resultado normal que excluye enfermedad de Wilson",
    "Es compatible con aumento de la excreción urinaria de cobre y apoya la sospecha de enfermedad de Wilson",
    "Confirma hemocromatosis hereditaria",
    "Demuestra deficiencia corporal de cobre",
    "Solo tiene valor diagnóstico cuando la ceruloplasmina está elevada"
  ],
  respuestaCorrecta: 1,
  explicacion: "El cobre urinario de 24 horas suele estar elevado en la enfermedad de Wilson sintomática. Una excreción superior a 100 µg/24 h es un hallazgo fuertemente sugestivo en pacientes con presentación compatible, aunque debe integrarse con los demás datos. Valores menores también pueden ser relevantes, especialmente en pacientes pediátricos o en determinadas presentaciones. La calidad de la recolección y otros trastornos hepáticos pueden influir en la interpretación.",
  perlaENARM: "Cobre urinario de 24 horas >100 µg/24 h en un paciente sintomático apoya fuertemente Wilson, pero no sustituye la integración diagnóstica.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional: AASLD 2022.",
  bibliografia: [
    "Schilsky ML, et al. AASLD Practice Guidance on Wilson disease. Hepatology. 2023;77(4):1428-1455.",
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines: Wilson's disease. J Hepatol. 2012;56(3):671-685."
  ]
},
{
  id: "GASTRO-265",
  especialidad: "Gastroenterología",
  tema: "Enfermedad de Wilson",
  subtema: "Anillos de Kayser-Fleischer",
  dificultad: "Alta",
  caso: "Hombre de 25 años presenta disartria, temblor de intención y alteraciones conductuales progresivas. La exploración oftalmológica con lámpara de hendidura identifica un anillo pigmentado marrón-dorado en la periferia de la córnea. Los estudios hepáticos muestran alteraciones bioquímicas crónicas.",
  pregunta: "¿Qué estructura explica el hallazgo ocular característico de esta enfermedad?",
  opciones: [
    "Depósito de hierro en la cápsula anterior del cristalino",
    "Depósito de cobre en la membrana de Descemet de la córnea",
    "Depósito de bilirrubina en la retina",
    "Acumulación de calcio en la conjuntiva bulbar",
    "Depósito de melanina en el humor vítreo"
  ],
  respuestaCorrecta: 1,
  explicacion: "Los anillos de Kayser-Fleischer se deben al depósito de cobre en la membrana de Descemet, en la periferia corneal. Son especialmente frecuentes en pacientes con manifestaciones neurológicas, pero pueden faltar en pacientes con enfermedad hepática aislada. Su identificación apoya de manera importante el diagnóstico, aunque el hallazgo requiere correlación clínica y bioquímica.",
  perlaENARM: "Anillo de Kayser-Fleischer = depósito corneal de cobre en la membrana de Descemet. Es más frecuente en la presentación neurológica que en la hepática aislada.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional: AASLD 2022.",
  bibliografia: [
    "Schilsky ML, et al. AASLD Practice Guidance on Wilson disease. Hepatology. 2023;77(4):1428-1455.",
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines: Wilson's disease. J Hepatol. 2012;56(3):671-685."
  ]
},
{
  id: "GASTRO-266",
  especialidad: "Gastroenterología",
  tema: "Enfermedad de Wilson",
  subtema: "Puntuación diagnóstica de Leipzig",
  dificultad: "Muy alta",
  caso: "Hombre de 21 años presenta temblor, disartria y elevación de aminotransferasas. La evaluación oftalmológica confirma anillos de Kayser-Fleischer. La ceruloplasmina sérica es de 8 mg/dL y el cobre urinario de 24 horas está claramente elevado. Se sospecha enfermedad de Wilson y se decide integrar una puntuación diagnóstica validada.",
  pregunta: "¿Cuál es la utilidad principal del sistema de puntuación de Leipzig en este contexto?",
  opciones: [
    "Establecer el estadio histológico de fibrosis hepática sin biopsia",
    "Determinar la gravedad de la encefalopatía hepática mediante criterios neurológicos",
    "Integrar datos clínicos, oftalmológicos, bioquímicos, histológicos y genéticos para apoyar o establecer el diagnóstico de Wilson",
    "Diferenciar exclusivamente hepatitis A de hepatitis E",
    "Calcular el riesgo cardiovascular a diez años"
  ],
  respuestaCorrecta: 2,
  explicacion: "La puntuación de Leipzig integra diferentes dominios: anillos de Kayser-Fleischer, manifestaciones neurológicas, concentración de ceruloplasmina, excreción urinaria de cobre, contenido hepático de cobre y hallazgos genéticos. Una puntuación de 4 o más apoya el diagnóstico de enfermedad de Wilson. El sistema facilita la integración de resultados, pero no reemplaza el juicio clínico ni la interpretación de cada prueba según el contexto.",
  perlaENARM: "Leipzig ≥4 puntos: diagnóstico de Wilson muy probable o establecido en el contexto apropiado. Integra hallazgos clínicos, bioquímicos, oculares, hepáticos y genéticos.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional: AASLD 2022.",
  bibliografia: [
    "Schilsky ML, et al. AASLD Practice Guidance on Wilson disease. Hepatology. 2023;77(4):1428-1455.",
    "Ferenci P, et al. Diagnosis and phenotypic classification of Wilson disease. Liver International. 2003;23(3):139-142."
  ]
},
{
  id: "GASTRO-267",
  especialidad: "Gastroenterología",
  tema: "Enfermedad de Wilson",
  subtema: "Tratamiento farmacológico de la enfermedad sintomática",
  dificultad: "Muy alta",
  caso: "Mujer de 27 años presenta enfermedad de Wilson confirmada, con hepatitis crónica y manifestaciones neurológicas leves. No tiene insuficiencia hepática aguda ni contraindicación conocida para el tratamiento farmacológico. Se planea iniciar tratamiento para reducir la carga corporal de cobre.",
  pregunta: "¿Cuál de las siguientes estrategias farmacológicas se utiliza para tratar la enfermedad de Wilson sintomática?",
  opciones: [
    "Quelación con penicilamina o trientina, individualizando la elección y la vigilancia de efectos adversos",
    "Administración de hierro oral para competir con la absorción intestinal de cobre",
    "Tratamiento exclusivo con ácido ursodesoxicólico",
    "Glucocorticoides como monoterapia para eliminar el cobre tisular",
    "Ribavirina como tratamiento etiológico específico"
  ],
  respuestaCorrecta: 0,
  explicacion: "La penicilamina y la trientina son agentes quelantes que favorecen la eliminación de cobre y se utilizan en el tratamiento de pacientes sintomáticos. La elección depende de la presentación clínica, la tolerabilidad, la disponibilidad y la experiencia del equipo tratante. La penicilamina puede causar reacciones de hipersensibilidad, citopenias, proteinuria y otros efectos adversos; la trientina también requiere vigilancia clínica y bioquímica. El zinc reduce la absorción intestinal de cobre y puede utilizarse en situaciones seleccionadas, especialmente en determinados pacientes presintomáticos o como parte de estrategias individualizadas.",
  perlaENARM: "Wilson sintomática: penicilamina o trientina como quelantes. El zinc reduce la absorción intestinal de cobre; no sustituye automáticamente a la quelación en toda presentación sintomática.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional: AASLD 2022.",
  bibliografia: [
    "Schilsky ML, et al. AASLD Practice Guidance on Wilson disease. Hepatology. 2023;77(4):1428-1455.",
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines: Wilson's disease. J Hepatol. 2012;56(3):671-685."
  ]
},
{
  id: "GASTRO-268",
  especialidad: "Gastroenterología",
  tema: "Enfermedad de Wilson",
  subtema: "Tratamiento de mantenimiento y adherencia",
  dificultad: "Alta",
  caso: "Hombre de 30 años con enfermedad de Wilson ha mantenido estabilidad clínica durante 3 años con tratamiento y seguimiento especializado. Debido a dificultades económicas, suspende su medicamento durante varias semanas. Posteriormente presenta incremento de aminotransferasas y deterioro clínico.",
  pregunta: "¿Cuál es la explicación y conducta más apropiadas?",
  opciones: [
    "La interrupción no tiene consecuencias porque el cobre se elimina espontáneamente",
    "La enfermedad de Wilson se cura cuando se normaliza la ceruloplasmina",
    "La suspensión del tratamiento puede favorecer acumulación de cobre y descompensación; requiere reevaluación especializada y restablecimiento de una estrategia terapéutica apropiada",
    "Debe recibir hierro intravenoso como tratamiento de rescate",
    "La elevación de aminotransferasas demuestra obligatoriamente hepatitis viral aguda"
  ],
  respuestaCorrecta: 2,
  explicacion: "La enfermedad de Wilson es un trastorno genético crónico que requiere tratamiento sostenido. La interrupción del tratamiento puede provocar acumulación de cobre, deterioro hepático y, en casos graves, descompensación potencialmente mortal. Ante un empeoramiento clínico debe evaluarse la gravedad de la lesión hepática, la adherencia, la tolerabilidad, la dosis y otras causas concomitantes. El restablecimiento o ajuste del tratamiento debe realizarse bajo supervisión especializada.",
  perlaENARM: "La enfermedad de Wilson requiere tratamiento de por vida. La falta de adherencia puede precipitar deterioro hepático grave.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional: AASLD 2022.",
  bibliografia: [
    "Schilsky ML, et al. AASLD Practice Guidance on Wilson disease. Hepatology. 2023;77(4):1428-1455.",
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines: Wilson's disease. J Hepatol. 2012;56(3):671-685."
  ]
},
{
  id: "GASTRO-269",
  especialidad: "Gastroenterología",
  tema: "Enfermedad de Wilson",
  subtema: "Insuficiencia hepática aguda y trasplante",
  dificultad: "Extrema",
  caso: "Mujer de 18 años ingresa por ictericia intensa, hemólisis Coombs negativa, coagulopatía y encefalopatía de progresión rápida. Presenta lesión hepática grave y alteraciones bioquímicas compatibles con enfermedad de Wilson. La evaluación clínica sugiere insuficiencia hepática aguda.",
  pregunta: "¿Cuál es la conducta prioritaria ante esta presentación?",
  opciones: [
    "Manejo ambulatorio con zinc oral y revisión en 3 meses",
    "Esperar la confirmación genética antes de iniciar cualquier intervención",
    "Hospitalización urgente en un centro especializado, soporte intensivo y evaluación inmediata para trasplante hepático",
    "Iniciar únicamente azatioprina por sospecha de hepatitis autoinmune",
    "Realizar flebotomías terapéuticas para retirar el cobre circulante"
  ],
  respuestaCorrecta: 2,
  explicacion: "La enfermedad de Wilson puede causar insuficiencia hepática aguda, acompañada en ocasiones de hemólisis Coombs negativa y deterioro multiorgánico. Es una emergencia médica que requiere cuidados intensivos, evaluación urgente por hepatología y valoración temprana para trasplante hepático. La confirmación diagnóstica debe acelerarse, pero no debe retrasar las intervenciones críticas ni la referencia al centro de trasplante. El tratamiento médico aislado puede ser insuficiente en la insuficiencia hepática aguda asociada a Wilson.",
  perlaENARM: "Wilson + insuficiencia hepática aguda: referencia inmediata a centro de trasplante. La hemólisis Coombs negativa es una pista clínica importante.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional: AASLD 2022 y guías especializadas en insuficiencia hepática aguda.",
  bibliografia: [
    "Schilsky ML, et al. AASLD Practice Guidance on Wilson disease. Hepatology. 2023;77(4):1428-1455.",
    "European Association for the Study of the Liver. EASL Clinical Practical Guidelines on the management of acute (fulminant) liver failure. J Hepatol. 2017;66(5):1047-1081."
  ]
},
{
  id: "GASTRO-270",
  especialidad: "Gastroenterología",
  tema: "Enfermedad de Wilson",
  subtema: "Diagnóstico diferencial de hepatopatía y manifestaciones neurológicas",
  dificultad: "Extrema",
  caso: "Hombre de 28 años presenta cirrosis, temblor y alteraciones de la conducta. La ceruloplasmina está disminuida y el cobre urinario elevado. La resonancia magnética cerebral muestra alteraciones en ganglios basales. Se detecta una variante patogénica de ATP7B en una sola copia, pero el estudio genético inicial no identifica una segunda variante.",
  pregunta: "¿Cuál es la interpretación más apropiada de estos resultados?",
  opciones: [
    "La enfermedad de Wilson queda descartada porque solo se identificó una variante en ATP7B",
    "La combinación de hallazgos bioquímicos, clínicos y de imagen obliga a continuar la evaluación especializada; el estudio genético inicial puede no detectar todas las variantes relevantes",
    "El cuadro confirma enfermedad de Alzheimer de inicio temprano",
    "La ceruloplasmina baja demuestra por sí sola enfermedad de Menkes",
    "La resonancia magnética de ganglios basales confirma exclusivamente intoxicación por manganeso"
  ],
  respuestaCorrecta: 1,
  explicacion: "La enfermedad de Wilson suele requerir variantes patogénicas bialélicas de ATP7B, pero un estudio genético inicial puede identificar solo una variante por limitaciones técnicas o por la naturaleza de la segunda alteración. La sospecha clínica no debe descartarse automáticamente cuando existen datos bioquímicos, neurológicos y hepáticos compatibles. Deben revisarse la metodología genética utilizada y la posibilidad de estudios complementarios, además de integrar los resultados con cobre urinario, ceruloplasmina, examen oftalmológico y otros componentes de la evaluación diagnóstica.",
  perlaENARM: "Un estudio genético incompleto o con una sola variante detectada no siempre excluye Wilson. Integrar fenotipo, metabolismo del cobre y alcance técnico del análisis molecular.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional: AASLD 2022.",
  bibliografia: [
    "Schilsky ML, et al. AASLD Practice Guidance on Wilson disease. Hepatology. 2023;77(4):1428-1455.",
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines: Wilson's disease. J Hepatol. 2012;56(3):671-685."
  ]
},
{
  id: "GASTRO-271",
  especialidad: "Gastroenterología",
  tema: "Colangitis biliar primaria",
  subtema: "Presentación clínica y patrón bioquímico",
  dificultad: "Baja",
  caso: "Mujer de 48 años acude por prurito generalizado y fatiga de 8 meses de evolución. Niega fiebre, dolor abdominal intenso y consumo significativo de alcohol. Los estudios muestran fosfatasa alcalina de 420 U/L, GGT de 310 U/L, ALT de 65 U/L y bilirrubina total normal. La ecografía hepatobiliar no identifica dilatación de la vía biliar.",
  pregunta: "¿Cuál es el diagnóstico que debe sospecharse principalmente?",
  opciones: [
    "Hepatitis autoinmune",
    "Colangitis biliar primaria",
    "Hepatitis alcohólica aguda",
    "Hemocromatosis hereditaria",
    "Pancreatitis crónica"
  ],
  respuestaCorrecta: 1,
  explicacion: "La colangitis biliar primaria es una enfermedad hepática autoinmunitaria crónica caracterizada por lesión progresiva de los conductos biliares intrahepáticos pequeños. Predomina en mujeres de mediana edad y puede manifestarse con fatiga, prurito y un patrón bioquímico colestásico, con elevación de fosfatasa alcalina y GGT. La bilirrubina puede permanecer normal durante las etapas iniciales. La ausencia de dilatación biliar ayuda a orientar hacia una causa intrahepática, aunque deben excluirse otras etiologías.",
  perlaENARM: "Mujer de mediana edad + prurito + fosfatasa alcalina elevada + vía biliar no dilatada: sospechar colangitis biliar primaria.",
  gpc: "No se asigna clave de GPC mexicana porque no se ha verificado una guía nacional específica y vigente para este reactivo. Referencias internacionales: EASL 2017 y AASLD 2018, con actualización focal de AASLD en 2021.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines: The diagnosis and management of patients with primary biliary cholangitis. J Hepatol. 2017;67(1):145-172.",
    "Lindor KD, et al. Primary biliary cholangitis: 2021 practice guidance update from the American Association for the Study of Liver Diseases. Hepatology. 2022;75(4):1012-1013. doi:10.1002/hep.32117."
  ]
},
{
  id: "GASTRO-272",
  especialidad: "Gastroenterología",
  tema: "Colangitis biliar primaria",
  subtema: "Anticuerpos antimitocondriales",
  dificultad: "Media",
  caso: "Mujer de 52 años presenta prurito persistente y elevación de fosfatasa alcalina durante 6 meses. La ecografía hepatobiliar no muestra obstrucción extrahepática. Los anticuerpos antimitocondriales son positivos en título significativo.",
  pregunta: "¿Cuál es la interpretación más apropiada de este resultado?",
  opciones: [
    "Los anticuerpos antimitocondriales son característicos de la colangitis biliar primaria y, en el contexto adecuado, apoyan fuertemente el diagnóstico",
    "Los anticuerpos antimitocondriales confirman hepatitis viral B",
    "El resultado demuestra obstrucción mecánica del colédoco",
    "Los anticuerpos antimitocondriales son específicos de la enfermedad de Wilson",
    "El resultado descarta una enfermedad hepática autoinmunitaria"
  ],
  respuestaCorrecta: 0,
  explicacion: "Los anticuerpos antimitocondriales (AMA), especialmente los dirigidos contra el complejo piruvato deshidrogenasa, son altamente característicos de la colangitis biliar primaria. En presencia de colestasis bioquímica y exclusión de obstrucción extrahepática, su detección permite establecer el diagnóstico sin biopsia en muchos pacientes. Un resultado positivo aislado, sin alteraciones bioquímicas compatibles, requiere interpretación clínica y seguimiento apropiado.",
  perlaENARM: "Colestasis intrahepática + AMA positivos: combinación clásica para el diagnóstico de colangitis biliar primaria.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencias internacionales: EASL 2017 y AASLD 2018/actualización focal de 2021.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines. J Hepatol. 2017;67(1):145-172.",
    "Lindor KD, et al. Primary biliary cholangitis: 2021 practice guidance update. Hepatology. 2022;75(4):1012-1013."
  ]
},
{
  id: "GASTRO-273",
  especialidad: "Gastroenterología",
  tema: "Colangitis biliar primaria",
  subtema: "Criterios diagnósticos",
  dificultad: "Media",
  caso: "Mujer de 45 años presenta fosfatasa alcalina persistentemente elevada, GGT aumentada y anticuerpos antimitocondriales positivos. La ecografía abdominal descarta dilatación de la vía biliar y no identifica lesiones focales hepáticas. No tiene manifestaciones clínicas de cirrosis.",
  pregunta: "¿Cuál es la conducta diagnóstica más apropiada?",
  opciones: [
    "Realizar biopsia hepática obligatoria en todos los casos antes de establecer el diagnóstico",
    "Solicitar únicamente alfafetoproteína para confirmar la enfermedad",
    "Establecer el diagnóstico mediante la integración de colestasis bioquímica y AMA positivos, tras excluir causas alternativas",
    "Descartar colangitis biliar primaria porque la paciente no tiene cirrosis",
    "Solicitar colangiopancreatografía retrógrada endoscópica como prueba confirmatoria obligatoria"
  ],
  respuestaCorrecta: 2,
  explicacion: "El diagnóstico de colangitis biliar primaria se establece habitualmente cuando se cumplen al menos dos de tres criterios: colestasis bioquímica con elevación de fosfatasa alcalina, presencia de AMA u otros autoanticuerpos específicos como anti-gp210 o anti-sp100, y hallazgos histológicos característicos de colangitis destructiva no supurativa. La biopsia no es necesaria cuando los hallazgos bioquímicos y serológicos son concordantes y se han excluido otras causas. Puede ser útil si los anticuerpos son negativos, existen hallazgos atípicos o se sospecha una enfermedad hepática concomitante.",
  perlaENARM: "Diagnóstico: cumplir 2 de 3 criterios — colestasis bioquímica, autoanticuerpos específicos e histología compatible. La biopsia no es rutinaria en el cuadro clásico.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencias internacionales: EASL 2017 y AASLD 2018/actualización focal de 2021.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines. J Hepatol. 2017;67(1):145-172.",
    "Lindor KD, et al. Primary biliary cholangitis: 2018 practice guidance from the American Association for the Study of Liver Diseases. Hepatology. 2019;69:394-419."
  ]
},
{
  id: "GASTRO-274",
  especialidad: "Gastroenterología",
  tema: "Colangitis biliar primaria",
  subtema: "Autoanticuerpos específicos en enfermedad AMA negativa",
  dificultad: "Alta",
  caso: "Mujer de 50 años presenta prurito y elevación persistente de fosfatasa alcalina. La ecografía no muestra obstrucción biliar. Los anticuerpos antimitocondriales son negativos, pero la sospecha de enfermedad colestásica autoinmunitaria permanece elevada.",
  pregunta: "¿Qué estrategia puede ayudar a establecer el diagnóstico de colangitis biliar primaria en esta paciente?",
  opciones: [
    "Solicitar anticuerpos anti-gp210 y anti-sp100, junto con la evaluación clínica y bioquímica",
    "Descartar definitivamente la enfermedad porque los AMA son negativos",
    "Solicitar exclusivamente anticuerpos anti-transglutaminasa IgA",
    "Realizar prueba de aliento para Helicobacter pylori",
    "Solicitar anticuerpos contra el receptor de TSH como prueba confirmatoria"
  ],
  respuestaCorrecta: 0,
  explicacion: "Una minoría de pacientes con colangitis biliar primaria no presenta AMA detectables. En este contexto, los anticuerpos específicos anti-gp210 y anti-sp100 pueden apoyar el diagnóstico. Si persiste la colestasis sin explicación y la serología es negativa o no concluyente, puede considerarse biopsia hepática después de completar la evaluación por imagen y excluir otras causas intrahepáticas y extrahepáticas.",
  perlaENARM: "AMA negativos no excluyen CBP. Considerar anti-gp210, anti-sp100 y, cuando esté indicado, biopsia hepática.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional: EASL 2017.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines. J Hepatol. 2017;67(1):145-172.",
    "Lindor KD, et al. Primary biliary cholangitis: 2018 practice guidance from the American Association for the Study of Liver Diseases. Hepatology. 2019;69:394-419."
  ]
},
{
  id: "GASTRO-275",
  especialidad: "Gastroenterología",
  tema: "Colangitis biliar primaria",
  subtema: "Tratamiento de primera línea",
  dificultad: "Alta",
  caso: "Mujer de 49 años tiene diagnóstico confirmado de colangitis biliar primaria mediante colestasis bioquímica y AMA positivos. La bilirrubina es normal y no presenta datos de descompensación hepática. Se encuentra en valoración para iniciar tratamiento modificador de la enfermedad.",
  pregunta: "¿Cuál es el tratamiento farmacológico de primera línea recomendado?",
  opciones: [
    "Prednisona en monoterapia para todas las pacientes",
    "Ácido ursodesoxicólico a dosis de 13-15 mg/kg/día por vía oral",
    "Azatioprina como tratamiento universal de primera línea",
    "Rifampicina como tratamiento modificador de la enfermedad",
    "Colestiramina como única terapia para prevenir progresión hepática"
  ],
  respuestaCorrecta: 1,
  explicacion: "El ácido ursodesoxicólico (AUDC) es el tratamiento de primera línea recomendado para la colangitis biliar primaria, a una dosis de 13-15 mg/kg/día por vía oral. Habitualmente se mantiene a largo plazo y se evalúa la respuesta bioquímica, especialmente mediante fosfatasa alcalina y bilirrubina. La colestiramina puede ayudar a controlar el prurito, pero no sustituye al tratamiento modificador de la enfermedad.",
  perlaENARM: "CBP: AUDC 13-15 mg/kg/día como primera línea. Evaluar respuesta bioquímica tras aproximadamente 12 meses.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencias internacionales: EASL 2017 y AASLD 2018/actualización focal de 2021.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines. J Hepatol. 2017;67(1):145-172.",
    "Lindor KD, et al. Primary biliary cholangitis: 2021 practice guidance update. Hepatology. 2022;75(4):1012-1013."
  ]
},
{
  id: "GASTRO-276",
  especialidad: "Gastroenterología",
  tema: "Colangitis biliar primaria",
  subtema: "Prurito colestásico",
  dificultad: "Alta",
  caso: "Mujer de 54 años con colangitis biliar primaria confirmada presenta prurito intenso, predominante en palmas y plantas, que empeora por la noche. No tiene lesiones cutáneas primarias ni datos de infección. El síntoma interfiere con el sueño y la calidad de vida.",
  pregunta: "¿Cuál es una opción farmacológica inicial habitual para el control sintomático del prurito colestásico?",
  opciones: [
    "Colestiramina, administrada con separación adecuada respecto a otros medicamentos",
    "Prednisona en dosis altas como tratamiento universal del prurito",
    "Antibióticos de amplio espectro durante 14 días",
    "Suspender el ácido ursodesoxicólico en todos los casos",
    "Hierro oral a dosis altas"
  ],
  respuestaCorrecta: 0,
  explicacion: "La colestiramina es una opción inicial habitual para el prurito colestásico. Debe administrarse separada de otros medicamentos para reducir la interferencia con su absorción, siguiendo las recomendaciones de administración del producto. Si el prurito persiste, se requiere reevaluación de la adherencia, la intensidad del síntoma y las alternativas terapéuticas, que pueden incluir rifampicina, naltrexona o sertralina en pacientes seleccionados, con atención a contraindicaciones e interacciones. El control del prurito debe abordarse de manera individualizada.",
  perlaENARM: "Prurito colestásico: colestiramina como opción inicial; separar su administración de otros fármacos. Si persiste, valorar alternativas y vigilar toxicidad e interacciones.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional: EASL 2017.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines. J Hepatol. 2017;67(1):145-172.",
    "Lindor KD, et al. Primary biliary cholangitis: 2018 practice guidance from the American Association for the Study of Liver Diseases. Hepatology. 2019;69:394-419."
  ]
},
{
  id: "GASTRO-277",
  especialidad: "Gastroenterología",
  tema: "Colangitis biliar primaria",
  subtema: "Evaluación de respuesta al ácido ursodesoxicólico",
  dificultad: "Muy alta",
  caso: "Mujer de 57 años con colangitis biliar primaria recibe ácido ursodesoxicólico a dosis adecuada desde hace 12 meses. La fosfatasa alcalina permanece en 2.4 veces el límite superior normal y la bilirrubina ha aumentado ligeramente, aunque sigue dentro del intervalo normal. La adherencia al tratamiento está documentada.",
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Suspender el ácido ursodesoxicólico porque no existe ninguna utilidad después de un año",
    "Considerar una respuesta bioquímica insuficiente, reevaluar el riesgo y valorar opciones terapéuticas adicionales con hepatología",
    "Diagnosticar automáticamente una obstrucción completa del colédoco",
    "Añadir prednisona de forma obligatoria sin evaluar otras posibilidades",
    "Indicar trasplante hepático inmediato independientemente del estadio clínico"
  ],
  respuestaCorrecta: 1,
  explicacion: "La respuesta al AUDC debe evaluarse aproximadamente después de 12 meses, utilizando parámetros bioquímicos y herramientas de estratificación de riesgo. Una fosfatasa alcalina persistentemente elevada puede indicar mayor riesgo de progresión. Deben revisarse dosis, adherencia, diagnósticos concomitantes y estadio de fibrosis, además de discutir con hepatología opciones de segunda línea apropiadas y disponibles. La selección terapéutica depende del perfil de riesgo, las comorbilidades, la situación regulatoria de los fármacos y la presencia de enfermedad avanzada.",
  perlaENARM: "Evaluar respuesta al AUDC a los 12 meses. La persistencia de colestasis obliga a estratificar riesgo y valorar tratamiento adicional, no a suspender automáticamente el AUDC.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencias internacionales: EASL 2017 y AASLD 2018/actualización focal de 2021. Verificar recomendaciones regulatorias y terapias disponibles al momento de prescribir.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines. J Hepatol. 2017;67(1):145-172.",
    "Lindor KD, et al. Primary biliary cholangitis: 2021 practice guidance update. Hepatology. 2022;75(4):1012-1013."
  ]
},
{
  id: "GASTRO-278",
  especialidad: "Gastroenterología",
  tema: "Colangitis biliar primaria",
  subtema: "Asociación con hepatitis autoinmune",
  dificultad: "Muy alta",
  caso: "Mujer de 43 años con colangitis biliar primaria presenta elevación desproporcionada de ALT, que alcanza 8 veces el límite superior normal, e IgG elevada. Los AMA son positivos y la ecografía no muestra obstrucción extrahepática. El equipo médico considera una posible enfermedad hepática autoinmunitaria concomitante.",
  pregunta: "¿Cuál es la conducta diagnóstica más apropiada?",
  opciones: [
    "Asumir que toda elevación de ALT forma parte de la colangitis biliar primaria y no investigar más",
    "Realizar biopsia hepática para evaluar hepatitis de interfase y considerar características de solapamiento con hepatitis autoinmune",
    "Suspender toda evaluación porque los AMA ya establecieron el diagnóstico",
    "Solicitar exclusivamente una determinación de ferritina",
    "Diagnosticar hepatitis viral A sin estudios adicionales"
  ],
  respuestaCorrecta: 1,
  explicacion: "Una elevación desproporcionada de aminotransferasas o IgG en una paciente con CBP debe hacer considerar hepatitis autoinmune concomitante u otra causa de lesión hepática. La biopsia hepática permite valorar hepatitis de interfase y otros hallazgos que apoyen una entidad superpuesta. Si se confirma hepatitis autoinmune clínicamente significativa, puede requerirse inmunosupresión además del tratamiento con AUDC. La decisión debe basarse en una evaluación especializada, porque no toda elevación de transaminasas representa un síndrome de solapamiento.",
  perlaENARM: "CBP + ALT marcadamente elevada o IgG alta: investigar hepatitis autoinmune concomitante; la biopsia puede ser fundamental.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional: EASL 2017 y guía AASLD para CBP.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines. J Hepatol. 2017;67(1):145-172.",
    "Lindor KD, et al. Primary biliary cholangitis: 2018 practice guidance from the American Association for the Study of Liver Diseases. Hepatology. 2019;69:394-419."
  ]
},
{
  id: "GASTRO-279",
  especialidad: "Gastroenterología",
  tema: "Colangitis biliar primaria",
  subtema: "Complicaciones extrahepáticas y enfermedad ósea",
  dificultad: "Alta",
  caso: "Mujer de 61 años con colangitis biliar primaria de 7 años de evolución refiere dolor óseo y ha presentado una fractura después de una caída desde su propia altura. No tiene antecedentes de uso crónico de glucocorticoides. La evaluación de laboratorio muestra deficiencia de vitamina D.",
  pregunta: "¿Qué complicación debe investigarse de manera prioritaria en esta paciente?",
  opciones: [
    "Osteoporosis y enfermedad metabólica ósea asociadas a la hepatopatía colestásica",
    "Hemocromatosis como causa obligatoria de toda fractura",
    "Enfermedad de Wilson de inicio tardío",
    "Pancreatitis aguda recurrente",
    "Carcinoma pancreático como causa más probable de fragilidad ósea"
  ],
  respuestaCorrecta: 0,
  explicacion: "La colangitis biliar primaria se asocia con un mayor riesgo de osteopenia, osteoporosis y fracturas por fragilidad. La enfermedad colestásica crónica, la edad, la menopausia, la deficiencia de vitamina D y otros factores pueden contribuir al deterioro de la salud ósea. La evaluación incluye valoración de factores de riesgo, densitometría ósea cuando esté indicada y corrección de deficiencias nutricionales. La prevención y el tratamiento deben individualizarse según el riesgo de fractura y las recomendaciones para osteoporosis.",
  perlaENARM: "CBP: no olvidar osteoporosis y riesgo de fractura. Evaluar salud ósea, vitamina D y factores de riesgo de manera periódica.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencia internacional: EASL 2017.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines. J Hepatol. 2017;67(1):145-172.",
    "Lindor KD, et al. Primary biliary cholangitis: 2018 practice guidance from the American Association for the Study of Liver Diseases. Hepatology. 2019;69:394-419."
  ]
},
{
  id: "GASTRO-280",
  especialidad: "Gastroenterología",
  tema: "Colangitis biliar primaria",
  subtema: "Cirrosis avanzada y valoración para trasplante",
  dificultad: "Extrema",
  caso: "Mujer de 59 años con colangitis biliar primaria presenta cirrosis descompensada, ascitis recurrente y un episodio reciente de hemorragia por várices esofágicas. A pesar del tratamiento, la bilirrubina total aumenta progresivamente y su estado funcional se deteriora.",
  pregunta: "¿Cuál es la conducta más apropiada ante esta evolución?",
  opciones: [
    "Continuar únicamente el tratamiento sintomático sin modificar el seguimiento",
    "Suspender toda vigilancia porque la enfermedad ya alcanzó una etapa avanzada",
    "Referir oportunamente a un centro especializado para evaluación de trasplante hepático y manejo de complicaciones de cirrosis",
    "Iniciar suplementos de hierro como tratamiento modificador de la enfermedad",
    "Indicar colestiramina como única intervención para prevenir mortalidad"
  ],
  respuestaCorrecta: 2,
  explicacion: "La ascitis recurrente, la hemorragia variceal y el deterioro progresivo de la función hepática indican cirrosis descompensada. En pacientes con CBP y descompensación hepática debe considerarse valoración por un centro de trasplante, en paralelo con el tratamiento de las complicaciones y la optimización del estado clínico. La decisión no debe basarse únicamente en la bilirrubina o en una cifra aislada, sino en la evolución clínica global y los criterios de evaluación para trasplante.",
  perlaENARM: "CBP con ascitis, hemorragia variceal o encefalopatía: cirrosis descompensada. Considerar referencia temprana para valoración de trasplante hepático.",
  gpc: "No se asigna clave de GPC mexicana no verificada. Referencias internacionales: EASL 2017 y AASLD 2018/actualización focal de 2021.",
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines. J Hepatol. 2017;67(1):145-172.",
    "Lindor KD, et al. Primary biliary cholangitis: 2021 practice guidance update. Hepatology. 2022;75(4):1012-1013."
  ]
},
  {
  id: "GASTRO-281",
  especialidad: "Gastroenterología",
  tema: "Colangitis esclerosante primaria",
  subtema: "Definición y asociaciones epidemiológicas",
  dificultad: "Baja",
  caso: "Hombre de 34 años con antecedente de colitis ulcerosa diagnosticada hace 6 años acude por fatiga y prurito. Presenta elevación persistente de fosfatasa alcalina y GGT, con bilirrubina discretamente elevada. Las aminotransferasas muestran elevación leve.",
  pregunta: "¿Cuál de las siguientes enfermedades se asocia clásicamente con la colangitis esclerosante primaria?",
  opciones: [
    "Colitis ulcerosa",
    "Enfermedad celíaca",
    "Enfermedad de Crohn exclusivamente ileal",
    "Pancreatitis crónica alcohólica",
    "Hepatitis viral aguda"
  ],
  respuestaCorrecta: 0,
  explicacion: "La colangitis esclerosante primaria (CEP) es una enfermedad colestásica crónica caracterizada por inflamación y fibrosis de los conductos biliares intrahepáticos, extrahepáticos o ambos. Existe una asociación estrecha con la enfermedad inflamatoria intestinal, especialmente con la colitis ulcerosa. La enfermedad intestinal puede ser clínicamente poco activa pese a la presencia de CEP.",
  perlaENARM: "CEP + colitis ulcerosa es una asociación clásica. La actividad clínica intestinal no necesariamente refleja la actividad hepatobiliar.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencia internacional: AASLD Practice Guidance on Primary Sclerosing Cholangitis and Cholangiocarcinoma.",
  bibliografia: [
    "Bowlus CL, et al. AASLD Practice Guidance on Primary Sclerosing Cholangitis and Cholangiocarcinoma. Hepatology. 2023;77(2):659-702.",
    "Chapman R, et al. British Society of Gastroenterology and UK-PSC guidelines for the diagnosis and management of primary sclerosing cholangitis. Gut. 2019;68:1356-1378."
  ]
},
{
  id: "GASTRO-282",
  especialidad: "Gastroenterología",
  tema: "Colangitis esclerosante primaria",
  subtema: "Patrón bioquímico y evaluación inicial",
  dificultad: "Media",
  caso: "Mujer de 39 años con prurito, fatiga y colitis ulcerosa. En los estudios presenta fosfatasa alcalina cuatro veces por encima del límite superior normal, GGT elevada, ALT dos veces por encima del límite normal y bilirrubina normal.",
  pregunta: "¿Cuál es el patrón bioquímico predominante que orienta hacia una colangiopatía esclerosante?",
  opciones: [
    "Patrón hepatocelular con ALT mayor de diez veces el límite superior normal",
    "Patrón colestásico con elevación predominante de fosfatasa alcalina y GGT",
    "Hiperbilirrubinemia indirecta aislada",
    "Elevación aislada de creatina cinasa",
    "Hiperalbuminemia con transaminasas normales"
  ],
  respuestaCorrecta: 1,
  explicacion: "La CEP suele manifestarse bioquímicamente con un patrón colestásico, caracterizado por elevación de fosfatasa alcalina y GGT. Las aminotransferasas pueden elevarse de manera leve o moderada, mientras que la bilirrubina puede ser normal durante etapas iniciales. Los resultados bioquímicos por sí solos no establecen el diagnóstico.",
  perlaENARM: "Prurito + fosfatasa alcalina elevada + enfermedad inflamatoria intestinal obliga a investigar una colangiopatía; una bilirrubina normal no excluye CEP.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencia internacional: AASLD Practice Guidance on Primary Sclerosing Cholangitis and Cholangiocarcinoma.",
  bibliografia: [
    "Bowlus CL, et al. Hepatology. 2023;77(2):659-702.",
    "Chapman R, et al. Gut. 2019;68:1356-1378."
  ]
},
{
  id: "GASTRO-283",
  especialidad: "Gastroenterología",
  tema: "Colangitis esclerosante primaria",
  subtema: "Estudio de imagen de elección",
  dificultad: "Media",
  caso: "Hombre de 42 años con colitis ulcerosa y colestasis persistente. La ecografía abdominal no muestra dilatación importante de la vía biliar ni cálculos. Se sospecha CEP.",
  pregunta: "¿Cuál es el estudio de imagen no invasivo de elección para evaluar la vía biliar y apoyar el diagnóstico?",
  opciones: [
    "Radiografía simple de abdomen",
    "Tomografía simple sin contraste como prueba confirmatoria única",
    "Colangiopancreatografía retrógrada endoscópica en todos los pacientes como primera prueba",
    "Colangiorresonancia magnética",
    "Gammagrafía ósea"
  ],
  respuestaCorrecta: 3,
  explicacion: "La colangiorresonancia magnética (CPRM) es el estudio no invasivo de elección para evaluar la morfología de la vía biliar ante sospecha de CEP. Permite identificar estenosis multifocales y segmentos de dilatación alternante. La ecografía es útil para la evaluación inicial, pero puede ser normal o inespecífica. La CPRE se reserva para situaciones seleccionadas en las que se requiere intervención, obtención de muestras o evaluación adicional de una estenosis relevante.",
  perlaENARM: "Ante sospecha de CEP, la colangiorresonancia suele preceder a la CPRE. Evita una intervención invasiva meramente diagnóstica cuando la imagen no invasiva es suficiente.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencia internacional: AASLD Practice Guidance on Primary Sclerosing Cholangitis and Cholangiocarcinoma.",
  bibliografia: [
    "Bowlus CL, et al. Hepatology. 2023;77(2):659-702.",
    "Chapman R, et al. Gut. 2019;68:1356-1378."
  ]
},
{
  id: "GASTRO-284",
  especialidad: "Gastroenterología",
  tema: "Colangitis esclerosante primaria",
  subtema: "Hallazgos colangiográficos característicos",
  dificultad: "Baja",
  caso: "Hombre de 37 años con colitis ulcerosa y perfil bioquímico colestásico. La colangiorresonancia muestra múltiples estenosis cortas distribuidas en conductos biliares intrahepáticos y extrahepáticos, alternando con segmentos de calibre normal o dilatado.",
  pregunta: "¿Cuál es la interpretación más característica de este hallazgo?",
  opciones: [
    "Coledocolitiasis única no complicada",
    "Colangitis esclerosante primaria",
    "Colecistitis aguda litiásica",
    "Hepatitis alcohólica aislada",
    "Trombosis de la vena porta como explicación específica"
  ],
  respuestaCorrecta: 1,
  explicacion: "La CEP típicamente produce estenosis multifocales con dilataciones interpuestas, descritas como un aspecto arrosariado. Puede afectar la vía biliar intrahepática, extrahepática o ambas. El diagnóstico debe integrar el contexto clínico, el patrón bioquímico y los hallazgos de imagen, además de excluir causas secundarias de colangitis esclerosante.",
  perlaENARM: "El patrón arrosariado de la vía biliar es una imagen clásica de CEP, pero no sustituye la exclusión de causas secundarias.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencia internacional: AASLD Practice Guidance on Primary Sclerosing Cholangitis and Cholangiocarcinoma.",
  bibliografia: [
    "Bowlus CL, et al. Hepatology. 2023;77(2):659-702.",
    "Chapman R, et al. Gut. 2019;68:1356-1378."
  ]
},
{
  id: "GASTRO-285",
  especialidad: "Gastroenterología",
  tema: "Colangitis esclerosante primaria",
  subtema: "Diagnóstico diferencial: enfermedad relacionada con IgG4",
  dificultad: "Alta",
  caso: "Hombre de 61 años presenta ictericia obstructiva, pérdida de peso y estenosis de la vía biliar. La imagen muestra engrosamiento de la pared del colédoco y una lesión pancreática compatible con pancreatitis autoinmune. Se considera el diagnóstico diferencial con CEP.",
  pregunta: "¿Qué entidad debe investigarse especialmente porque puede simular una colangitis esclerosante y tiene tratamiento específico?",
  opciones: [
    "Enfermedad relacionada con IgG4",
    "Síndrome de Gilbert",
    "Hemocromatosis hereditaria sin afectación biliar",
    "Enfermedad de Wilson exclusivamente neurológica",
    "Hiperplasia nodular focal"
  ],
  respuestaCorrecta: 0,
  explicacion: "La colangitis relacionada con IgG4 puede producir estenosis biliares e imitar una CEP o una neoplasia pancreatobiliar. La afectación pancreática compatible con pancreatitis autoinmune aumenta la sospecha. La evaluación puede incluir IgG4 sérica, imagen, histología cuando esté indicada y búsqueda de afectación de otros órganos. Una concentración sérica elevada de IgG4 aislada no confirma por sí sola el diagnóstico.",
  perlaENARM: "Estenosis biliar + pancreatitis autoinmune obliga a considerar enfermedad relacionada con IgG4. No iniciar glucocorticoides empíricamente sin una evaluación diagnóstica adecuada, especialmente si debe excluirse malignidad.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencia internacional: AASLD Practice Guidance on Primary Sclerosing Cholangitis and Cholangiocarcinoma.",
  bibliografia: [
    "Bowlus CL, et al. Hepatology. 2023;77(2):659-702.",
    "Chapman R, et al. Gut. 2019;68:1356-1378."
  ]
},
{
  id: "GASTRO-286",
  especialidad: "Gastroenterología",
  tema: "Colangitis esclerosante primaria",
  subtema: "Riesgo de colangiocarcinoma y señales de alarma",
  dificultad: "Alta",
  caso: "Hombre de 49 años con CEP conocida presenta empeoramiento reciente del prurito, pérdida involuntaria de peso, incremento progresivo de bilirrubina y una estenosis biliar nueva en la colangiorresonancia.",
  pregunta: "¿Cuál es la conducta más apropiada ante esta evolución?",
  opciones: [
    "Atribuir todos los hallazgos a la progresión habitual de CEP y no investigar",
    "Iniciar ácido ursodesoxicólico en dosis altas como única intervención",
    "Investigar una estenosis clínicamente relevante y descartar colangiocarcinoma mediante evaluación especializada",
    "Indicar colecistectomía urgente en todos los casos",
    "Suspender el seguimiento hepatológico si la fosfatasa alcalina disminuye posteriormente"
  ],
  respuestaCorrecta: 2,
  explicacion: "La CEP se asocia con mayor riesgo de colangiocarcinoma. Una estenosis nueva o progresiva, ictericia creciente, pérdida de peso o deterioro clínico requieren evaluación dirigida. Según el contexto, puede indicarse CPRE con toma de muestras citológicas y/o biopsia, pruebas complementarias y discusión multidisciplinaria. Ningún marcador tumoral aislado confirma o descarta por sí mismo la neoplasia.",
  perlaENARM: "En CEP, ictericia nueva o progresiva, pérdida de peso y una estenosis relevante son señales de alarma para colangiocarcinoma.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencia internacional: AASLD Practice Guidance on Primary Sclerosing Cholangitis and Cholangiocarcinoma.",
  bibliografia: [
    "Bowlus CL, et al. Hepatology. 2023;77(2):659-702.",
    "Chapman R, et al. Gut. 2019;68:1356-1378."
  ]
},
{
  id: "GASTRO-287",
  especialidad: "Gastroenterología",
  tema: "Colangitis esclerosante primaria",
  subtema: "CEP asociada con enfermedad inflamatoria intestinal: vigilancia colorrectal",
  dificultad: "Alta",
  caso: "Mujer de 45 años con colitis ulcerosa y CEP confirmada mediante colangiorresonancia se encuentra sin síntomas intestinales. Pregunta sobre la vigilancia del cáncer colorrectal.",
  pregunta: "¿Cuál de las siguientes estrategias es la más apropiada?",
  opciones: [
    "Realizar colonoscopia únicamente si aparece rectorragia",
    "Suspender la vigilancia colorrectal porque la colitis está clínicamente inactiva",
    "Realizar vigilancia colorrectal intensificada mediante colonoscopia, de acuerdo con las recomendaciones para CEP asociada con enfermedad inflamatoria intestinal",
    "Solicitar únicamente sangre oculta en heces cada cinco años",
    "Realizar colectomía profiláctica sistemática a todos los pacientes con CEP"
  ],
  respuestaCorrecta: 2,
  explicacion: "La asociación de CEP con enfermedad inflamatoria intestinal, especialmente colitis ulcerosa, aumenta el riesgo de neoplasia colorrectal. Se recomienda vigilancia colonoscópica intensificada según las guías aplicables, aunque la enfermedad intestinal esté clínicamente inactiva. La frecuencia concreta debe ajustarse al contexto clínico y a la recomendación de la guía vigente.",
  perlaENARM: "CEP + colitis ulcerosa implica mayor riesgo colorrectal; la ausencia de síntomas intestinales no elimina la necesidad de vigilancia.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencia internacional: AASLD Practice Guidance on Primary Sclerosing Cholangitis and Cholangiocarcinoma; guías de vigilancia en enfermedad inflamatoria intestinal.",
  bibliografia: [
    "Bowlus CL, et al. Hepatology. 2023;77(2):659-702.",
    "Chapman R, et al. Gut. 2019;68:1356-1378."
  ]
},
{
  id: "GASTRO-288",
  especialidad: "Gastroenterología",
  tema: "Colangitis esclerosante primaria",
  subtema: "Tratamiento farmacológico y ácido ursodesoxicólico",
  dificultad: "Muy alta",
  caso: "Hombre de 46 años con CEP confirmada presenta elevación persistente de fosfatasa alcalina, sin colangitis bacteriana ni obstrucción biliar que requiera intervención. Pregunta si existe un fármaco que detenga de manera comprobada la progresión de la enfermedad.",
  pregunta: "¿Cuál afirmación sobre el ácido ursodesoxicólico (AUDC) es la más adecuada?",
  opciones: [
    "Las dosis altas han demostrado reducir de manera concluyente la mortalidad y deben indicarse a todos los pacientes",
    "El AUDC no debe confundirse con un tratamiento curativo; su uso debe individualizarse y deben evitarse dosis altas por la falta de beneficio clínico demostrado y el potencial de daño",
    "El AUDC elimina el riesgo de colangiocarcinoma",
    "El AUDC sustituye la vigilancia de estenosis biliares",
    "El AUDC está indicado únicamente cuando existe cirrosis descompensada"
  ],
  respuestaCorrecta: 1,
  explicacion: "No se ha establecido un tratamiento farmacológico que cure la CEP o que detenga de manera concluyente su historia natural en todos los pacientes. El AUDC puede mejorar parámetros bioquímicos en algunos casos, pero la mejoría bioquímica no demuestra por sí sola beneficio en desenlaces clínicos. Las dosis altas se han asociado con resultados desfavorables y no deben utilizarse de manera rutinaria. El manejo requiere vigilancia de complicaciones, evaluación de estenosis relevantes y atención especializada.",
  perlaENARM: "En CEP, normalizar o reducir la fosfatasa alcalina no equivale automáticamente a mejorar supervivencia. Evita el AUDC en dosis altas como estrategia rutinaria.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencia internacional: AASLD Practice Guidance on Primary Sclerosing Cholangitis and Cholangiocarcinoma.",
  bibliografia: [
    "Bowlus CL, et al. Hepatology. 2023;77(2):659-702.",
    "Chapman R, et al. Gut. 2019;68:1356-1378."
  ]
},
{
  id: "GASTRO-289",
  especialidad: "Gastroenterología",
  tema: "Colangitis esclerosante primaria",
  subtema: "Estenosis clínicamente relevante y manejo endoscópico",
  dificultad: "Muy alta",
  caso: "Hombre de 52 años con CEP presenta fiebre, dolor en hipocondrio derecho e ictericia. Los estudios sugieren colangitis bacteriana y una estenosis relevante del colédoco con obstrucción del drenaje biliar.",
  pregunta: "Además del tratamiento inicial de la infección, ¿qué intervención puede ser necesaria para resolver la obstrucción?",
  opciones: [
    "CPRE con evaluación de la estenosis y drenaje biliar cuando esté indicado",
    "Colonoscopia urgente como método de descompresión biliar",
    "Biopsia hepática percutánea como tratamiento de la obstrucción",
    "Administración de AUDC como sustituto del drenaje",
    "Observación sin tratamiento a pesar de la infección y la obstrucción"
  ],
  respuestaCorrecta: 0,
  explicacion: "La colangitis bacteriana con obstrucción biliar requiere antibióticos y evaluación urgente para drenaje según la gravedad y la respuesta clínica. La CPRE permite evaluar la estenosis, obtener muestras cuando esté indicado y realizar dilatación o drenaje. La colocación de prótesis se individualiza debido a sus posibles complicaciones, incluida la oclusión y la infección. El manejo debe realizarse por un equipo con experiencia en enfermedad hepatobiliar.",
  perlaENARM: "CEP con fiebre, ictericia y obstrucción sugiere colangitis bacteriana: antibióticos y valoración del drenaje biliar, sin retrasar la atención en pacientes graves.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencia internacional: AASLD Practice Guidance on Primary Sclerosing Cholangitis and Cholangiocarcinoma.",
  bibliografia: [
    "Bowlus CL, et al. Hepatology. 2023;77(2):659-702.",
    "Chapman R, et al. Gut. 2019;68:1356-1378."
  ]
},
{
  id: "GASTRO-290",
  especialidad: "Gastroenterología",
  tema: "Colangitis esclerosante primaria",
  subtema: "Pronóstico y trasplante hepático",
  dificultad: "Extrema",
  caso: "Mujer de 51 años con CEP avanzada presenta cirrosis descompensada, ascitis recurrente, episodios repetidos de colangitis bacteriana y deterioro progresivo de la función hepática pese al manejo especializado.",
  pregunta: "¿Cuál es la estrategia más apropiada para su manejo a largo plazo?",
  opciones: [
    "Mantener exclusivamente tratamiento sintomático indefinido, sin valoración especializada",
    "Indicar AUDC en dosis altas como alternativa al trasplante",
    "Referir para evaluación de trasplante hepático, considerando la descompensación y las complicaciones recurrentes",
    "Realizar colecistectomía como tratamiento definitivo de la CEP",
    "Suspender la vigilancia de neoplasias tras el primer episodio de descompensación"
  ],
  respuestaCorrecta: 2,
  explicacion: "El trasplante hepático es una opción establecida para pacientes seleccionados con CEP que desarrollan enfermedad hepática avanzada, descompensación o complicaciones recurrentes que afectan de forma importante su calidad de vida. La indicación y el momento dependen de la gravedad, las complicaciones, la evaluación integral y los criterios del centro de trasplante. La CEP puede recurrir después del trasplante y el riesgo de neoplasias debe evaluarse según el contexto clínico.",
  perlaENARM: "La CEP avanzada con descompensación hepática o colangitis recurrente requiere valoración por un centro de trasplante. El trasplante no elimina la necesidad de seguimiento posterior.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencia internacional: AASLD Practice Guidance on Primary Sclerosing Cholangitis and Cholangiocarcinoma.",
  bibliografia: [
    "Bowlus CL, et al. Hepatology. 2023;77(2):659-702.",
    "Chapman R, et al. Gut. 2019;68:1356-1378."
  ]
},
 {
  id: "GASTRO-291",
  especialidad: "Gastroenterología",
  tema: "Cáncer colorrectal",
  subtema: "Factores de riesgo y epidemiología",
  dificultad: "Baja",
  caso: "Hombre de 62 años acude a consulta por fatiga progresiva. Refiere que nunca se ha realizado una colonoscopia. Su padre fue diagnosticado con cáncer colorrectal a los 52 años. La biometría hemática muestra hemoglobina de 10.4 g/dL, VCM de 72 fL y ferritina disminuida.",
  pregunta: "¿Cuál es la conducta diagnóstica más apropiada?",
  opciones: [
    "Iniciar hierro oral y diferir el estudio gastrointestinal hasta normalizar la hemoglobina",
    "Solicitar únicamente sangre oculta en heces y realizar colonoscopia solo si es positiva",
    "Realizar colonoscopia diagnóstica prioritaria para investigar neoplasia colorrectal",
    "Solicitar únicamente tomografía simple de abdomen",
    "Atribuir la anemia a la edad y repetir biometría hemática en un año"
  ],
  respuestaCorrecta: 2,
  explicacion: "La anemia ferropénica en un hombre adulto requiere investigar pérdidas gastrointestinales y descartar neoplasia. El antecedente de cáncer colorrectal en un familiar de primer grado, particularmente a edad relativamente temprana, incrementa el riesgo. La colonoscopia permite examinar la mucosa, identificar lesiones y obtener biopsias. En presencia de síntomas o anemia ferropénica, se trata de una evaluación diagnóstica, no de un simple tamizaje.",
  perlaENARM: "Hombre adulto + anemia ferropénica sin causa evidente = investigar pérdida gastrointestinal. No confundir tamizaje con evaluación diagnóstica.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencias internacionales: USPSTF colorectal cancer screening recommendation; guías de evaluación diagnóstica de anemia ferropénica y cáncer colorrectal.",
  bibliografia: [
    "US Preventive Services Task Force. Screening for Colorectal Cancer: Recommendation Statement. JAMA. 2021;325:1965-1977.",
    "American College of Gastroenterology. Clinical Guidelines: Colorectal Cancer Screening."
  ]
},
{
  id: "GASTRO-292",
  especialidad: "Gastroenterología",
  tema: "Cáncer colorrectal",
  subtema: "Tamizaje en población de riesgo promedio",
  dificultad: "Media",
  caso: "Hombre de 47 años, asintomático, sin antecedentes familiares de cáncer colorrectal ni enfermedad inflamatoria intestinal, solicita orientación sobre prevención. No presenta anemia, pérdida de peso ni cambios del hábito intestinal.",
  pregunta: "De acuerdo con las recomendaciones estadounidenses de tamizaje para riesgo promedio, ¿a qué edad debe iniciarse el tamizaje rutinario?",
  opciones: [
    "A los 30 años",
    "A los 35 años",
    "A los 40 años",
    "A los 45 años",
    "A los 60 años"
  ],
  respuestaCorrecta: 3,
  explicacion: "La USPSTF recomienda iniciar el tamizaje del cáncer colorrectal en adultos de riesgo promedio a los 45 años y mantenerlo hasta los 75 años. Entre los 76 y 85 años, la decisión se individualiza según el estado general, antecedentes de tamizaje y preferencias. Las modalidades incluyen pruebas fecales y estudios estructurales como colonoscopia, de acuerdo con el contexto y los intervalos recomendados. Las recomendaciones pueden variar según la guía y el país.",
  perlaENARM: "Dato preguntable: la USPSTF recomienda iniciar tamizaje de riesgo promedio a los 45 años. Síntomas de alarma requieren evaluación diagnóstica independientemente de la edad.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencia internacional: USPSTF 2021.",
  bibliografia: [
    "US Preventive Services Task Force. Screening for Colorectal Cancer: Recommendation Statement. JAMA. 2021;325:1965-1977.",
    "Davidson KW, et al. Screening for Colorectal Cancer: US Preventive Services Task Force Recommendation Statement. JAMA. 2021;325:1965-1977."
  ]
},
{
  id: "GASTRO-293",
  especialidad: "Gastroenterología",
  tema: "Cáncer colorrectal",
  subtema: "Secuencia adenoma-carcinoma y prevención",
  dificultad: "Media",
  caso: "Durante una colonoscopia de tamizaje se identifica un adenoma tubular de 12 mm con displasia de bajo grado. La lesión se reseca completamente y se envía a histopatología.",
  pregunta: "¿Qué mecanismo explica la progresión de una proporción de adenomas colorrectales a carcinoma?",
  opciones: [
    "Transformación maligna obligatoria de todo pólipo hiperplásico diminuto",
    "Acumulación progresiva de alteraciones moleculares que favorecen proliferación, displasia e invasión",
    "Infección bacteriana aguda que transforma directamente el epitelio normal en carcinoma",
    "Metaplasia escamosa como único mecanismo universal",
    "Obstrucción vascular aguda como causa necesaria de todos los cánceres colorrectales"
  ],
  respuestaCorrecta: 1,
  explicacion: "La vía convencional adenoma-carcinoma implica la acumulación de alteraciones genéticas y epigenéticas que afectan el control de la proliferación, la diferenciación y la estabilidad genómica. Entre las alteraciones clásicamente descritas se encuentran APC, KRAS y TP53, aunque la secuencia y las alteraciones varían entre tumores. La resección de lesiones precursoras reduce el riesgo de cáncer, pero el seguimiento posterior depende del número, tamaño, histología y calidad de la colonoscopia.",
  perlaENARM: "La secuencia adenoma-carcinoma es un modelo clásico de carcinogénesis colorrectal. No todos los cánceres siguen exactamente la misma vía molecular.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencias internacionales: guías de tamizaje y vigilancia pospolipectomía.",
  bibliografia: [
    "Fearon ER, Vogelstein B. A genetic model for colorectal tumorigenesis. Cell. 1990;61:759-767.",
    "Guías de vigilancia pospolipectomía de la US Multi-Society Task Force."
  ]
},
{
  id: "GASTRO-294",
  especialidad: "Gastroenterología",
  tema: "Cáncer colorrectal",
  subtema: "Síndrome de Lynch",
  dificultad: "Alta",
  caso: "Mujer de 39 años con cáncer de colon derecho. Su madre presentó cáncer endometrial a los 46 años y un tío materno tuvo cáncer colorrectal antes de los 50 años. El análisis tumoral muestra pérdida de expresión de proteínas reparadoras de errores de apareamiento del ADN.",
  pregunta: "¿Cuál es el síndrome hereditario que debe sospecharse prioritariamente?",
  opciones: [
    "Síndrome de Peutz-Jeghers",
    "Poliposis adenomatosa familiar clásica",
    "Síndrome de Lynch",
    "Síndrome de Li-Fraumeni como única posibilidad",
    "Poliposis juvenil aislada"
  ],
  respuestaCorrecta: 2,
  explicacion: "El síndrome de Lynch es causado por variantes patogénicas germinales en genes de reparación de errores de apareamiento del ADN, como MLH1, MSH2, MSH6 y PMS2, o alteraciones relacionadas con EPCAM. Se asocia con cáncer colorrectal, endometrial y otros tumores. La pérdida de proteínas reparadoras en inmunohistoquímica o la inestabilidad microsatelital en el tumor orientan el estudio, pero requieren interpretación para determinar si existe una causa hereditaria o esporádica.",
  perlaENARM: "Cáncer colorrectal a edad temprana + cáncer endometrial familiar = sospechar Lynch. La inmunohistoquímica tumoral orienta, pero no sustituye la confirmación genética germinal.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencias internacionales: recomendaciones de evaluación genética y guías de cáncer colorrectal hereditario.",
  bibliografia: [
    "NCCN Clinical Practice Guidelines in Oncology. Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric.",
    "Umar A, et al. Revised Bethesda Guidelines for hereditary nonpolyposis colorectal cancer (Lynch syndrome) and microsatellite instability. J Natl Cancer Inst. 2004;96:261-268."
  ]
},
{
  id: "GASTRO-295",
  especialidad: "Gastroenterología",
  tema: "Cáncer colorrectal",
  subtema: "Poliposis adenomatosa familiar",
  dificultad: "Alta",
  caso: "Hombre de 22 años presenta cientos de pólipos adenomatosos en colon durante una colonoscopia. Su padre fue sometido a colectomía por poliposis a los 28 años. Se identifica una variante patogénica germinal en APC.",
  pregunta: "¿Cuál es la principal implicación clínica de este diagnóstico?",
  opciones: [
    "El riesgo de cáncer colorrectal es similar al de la población general",
    "La enfermedad se resuelve espontáneamente en la edad adulta",
    "Existe un riesgo extremadamente alto de cáncer colorrectal sin manejo preventivo adecuado",
    "La vigilancia debe comenzar únicamente después de los 50 años",
    "La presencia de pólipos excluye neoplasias extracolónicas"
  ],
  respuestaCorrecta: 2,
  explicacion: "La poliposis adenomatosa familiar clásica se asocia con variantes germinales de APC y el desarrollo de numerosos adenomas colorrectales. Sin una estrategia preventiva adecuada, el riesgo de cáncer colorrectal es extremadamente alto. El manejo requiere vigilancia endoscópica temprana, asesoramiento genético y planificación quirúrgica individualizada. También deben considerarse manifestaciones extracolónicas, como tumores desmoides y neoplasias duodenales.",
  perlaENARM: "Cientos de adenomas en un paciente joven sugieren poliposis adenomatosa familiar. APC es el gen clásico y la prevención colorrectal debe planificarse desde edades tempranas.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencias internacionales: guías de cáncer colorrectal hereditario y poliposis adenomatosa familiar.",
  bibliografia: [
    "NCCN Clinical Practice Guidelines in Oncology. Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric.",
    "Monahan KJ, et al. Guidelines for the management of hereditary colorectal cancer from the BSG/ACPGBI/UKCGG. Gut. 2020;69:411-444."
  ]
},
{
  id: "GASTRO-296",
  especialidad: "Gastroenterología",
  tema: "Cáncer colorrectal",
  subtema: "Presentación clínica y localización tumoral",
  dificultad: "Media",
  caso: "Hombre de 68 años consulta por fatiga, disnea de esfuerzo y pérdida de peso. Presenta palidez, hemoglobina de 8.9 g/dL, VCM de 69 fL y prueba inmunoquímica fecal positiva. No refiere obstrucción intestinal.",
  pregunta: "¿Qué localización tumoral se asocia clásicamente con anemia ferropénica oculta y síntomas constitucionales?",
  opciones: [
    "Colon derecho",
    "Recto exclusivamente",
    "Conducto anal exclusivamente",
    "Esófago distal",
    "Apéndice normal"
  ],
  respuestaCorrecta: 0,
  explicacion: "Los tumores del colon derecho pueden manifestarse con pérdida crónica de sangre, anemia ferropénica y síntomas inespecíficos, debido a que el contenido intestinal es más líquido y el lumen es relativamente amplio. Los tumores del colon izquierdo pueden causar con mayor frecuencia cambios del hábito intestinal, disminución del calibre de las heces y síntomas obstructivos. Estas asociaciones son orientativas y no permiten localizar el tumor con certeza sin estudios diagnósticos.",
  perlaENARM: "Colon derecho: anemia ferropénica y sangrado oculto. Colon izquierdo: cambios del hábito intestinal y posible obstrucción.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencias internacionales: guías de evaluación diagnóstica de cáncer colorrectal.",
  bibliografia: [
    "Harrison's Principles of Internal Medicine. Sección de neoplasias gastrointestinales.",
    "NCCN Clinical Practice Guidelines in Oncology. Colon Cancer."
  ]
},
{
  id: "GASTRO-297",
  especialidad: "Gastroenterología",
  tema: "Cáncer colorrectal",
  subtema: "Diagnóstico y estadificación",
  dificultad: "Alta",
  caso: "Mujer de 63 años presenta rectorragia y pérdida de peso. La colonoscopia identifica una masa ulcerada en colon sigmoide y la biopsia confirma adenocarcinoma invasor.",
  pregunta: "¿Cuál es el siguiente abordaje más apropiado para completar la evaluación inicial de extensión?",
  opciones: [
    "Solicitar únicamente una radiografía simple de abdomen",
    "Realizar estadificación con tomografía contrastada de tórax, abdomen y pelvis, además de solicitar CEA basal",
    "Solicitar PET-CT en todos los pacientes como único estudio inicial",
    "Iniciar quimioterapia sin conocer la extensión de la enfermedad",
    "Repetir la biopsia cada semana hasta que el CEA sea normal"
  ],
  respuestaCorrecta: 1,
  explicacion: "Después de confirmar histológicamente un adenocarcinoma de colon, la estadificación habitual incluye tomografía contrastada de tórax, abdomen y pelvis, evaluación de la extensión local y a distancia, y determinación basal de antígeno carcinoembrionario (CEA). El CEA no sirve por sí solo para establecer el diagnóstico ni excluir cáncer cuando es normal, pero es útil como referencia para el seguimiento. El plan definitivo depende del estadio y de la valoración multidisciplinaria.",
  perlaENARM: "Diagnóstico histológico + estadificación anatómica + CEA basal antes del tratamiento. Un CEA normal no descarta cáncer colorrectal.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencia internacional: NCCN Clinical Practice Guidelines in Oncology: Colon Cancer.",
  bibliografia: [
    "NCCN Clinical Practice Guidelines in Oncology. Colon Cancer.",
    "American Society of Clinical Oncology. Recomendaciones para el uso de marcadores tumorales en cáncer colorrectal."
  ]
},
{
  id: "GASTRO-298",
  especialidad: "Gastroenterología",
  tema: "Cáncer colorrectal",
  subtema: "Tratamiento del cáncer de colon localizado",
  dificultad: "Muy alta",
  caso: "Hombre de 59 años es sometido a resección oncológica de colon por adenocarcinoma. La histopatología informa tumor que invade la muscular propia, metástasis en cuatro de 18 ganglios regionales y ausencia de metástasis a distancia en los estudios de imagen.",
  pregunta: "¿Cuál es la clasificación y la implicación terapéutica más probable?",
  opciones: [
    "Estadio I; vigilancia sin valorar tratamiento adyuvante",
    "Estadio II; nunca requiere tratamiento sistémico",
    "Estadio III por afectación ganglionar regional; valorar quimioterapia adyuvante",
    "Estadio IV por definición, debido a cualquier ganglio positivo",
    "Enfermedad benigna porque el tumor fue resecado"
  ],
  respuestaCorrecta: 2,
  explicacion: "La presencia de metástasis en ganglios regionales, sin enfermedad metastásica distante, corresponde a estadio III. Después de una resección con intención curativa, suele recomendarse quimioterapia adyuvante en pacientes aptos, con esquemas basados en fluoropirimidina y oxaliplatino según el riesgo, el estadio patológico, las comorbilidades y las preferencias. La duración se individualiza considerando el riesgo de recurrencia y la toxicidad, en particular la neuropatía asociada con oxaliplatino.",
  perlaENARM: "Cáncer de colon con ganglios regionales positivos y sin metástasis distante = estadio III; suele indicarse quimioterapia adyuvante tras resección.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencia internacional: NCCN Clinical Practice Guidelines in Oncology: Colon Cancer.",
  bibliografia: [
    "NCCN Clinical Practice Guidelines in Oncology. Colon Cancer.",
    "Labianca R, et al. Early colon cancer: ESMO Clinical Practice Guidelines for diagnosis, treatment and follow-up."
  ]
},
{
  id: "GASTRO-299",
  especialidad: "Gastroenterología",
  tema: "Cáncer colorrectal",
  subtema: "Cáncer rectal: evaluación local",
  dificultad: "Muy alta",
  caso: "Mujer de 56 años presenta rectorragia y tenesmo. La colonoscopia confirma adenocarcinoma rectal a 6 cm del margen anal. La tomografía no muestra metástasis a distancia.",
  pregunta: "¿Qué estudio es especialmente importante para evaluar la extensión local y planificar el tratamiento del cáncer rectal?",
  opciones: [
    "Radiografía simple de pelvis",
    "Resonancia magnética de pelvis con protocolo para cáncer rectal",
    "Ultrasonido tiroideo",
    "Gammagrafía renal",
    "Colonoscopia diaria durante una semana"
  ],
  respuestaCorrecta: 1,
  explicacion: "La resonancia magnética pélvica con protocolo de cáncer rectal permite valorar la profundidad de invasión, los ganglios regionales, la fascia mesorrectal y la posible invasión vascular extramural. Estos datos influyen en la selección de cirugía, radioterapia y tratamiento sistémico neoadyuvante. La estrategia depende del estadio, la localización, las características de riesgo y la discusión multidisciplinaria.",
  perlaENARM: "Cáncer rectal: la resonancia magnética pélvica es clave para la estadificación local y la planeación terapéutica.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencias internacionales: NCCN Rectal Cancer y guías ESMO.",
  bibliografia: [
    "NCCN Clinical Practice Guidelines in Oncology. Rectal Cancer.",
    "European Society for Medical Oncology. Clinical Practice Guidelines for rectal cancer."
  ]
},
{
  id: "GASTRO-300",
  especialidad: "Gastroenterología",
  tema: "Cáncer colorrectal",
  subtema: "Cáncer colorrectal metastásico y biomarcadores",
  dificultad: "Extrema",
  caso: "Hombre de 58 años con adenocarcinoma de colon y metástasis hepáticas múltiples no resecables. El paciente conserva buen estado funcional. El análisis molecular identifica una variante patogénica activadora de KRAS.",
  pregunta: "¿Cuál es la implicación terapéutica más relevante de encontrar una mutación activadora de KRAS?",
  opciones: [
    "Indica que el tumor responderá obligatoriamente a cetuximab en monoterapia",
    "Permite omitir toda evaluación molecular adicional",
    "Predice sensibilidad universal a los inhibidores de BRAF",
    "La terapia anti-EGFR con cetuximab o panitumumab no se recomienda en tumores con mutaciones activadoras de RAS",
    "Confirma que el tumor es de origen hereditario"
  ],
  respuestaCorrecta: 3,
  explicacion: "Las mutaciones activadoras de KRAS o NRAS predicen falta de beneficio de los anticuerpos anti-EGFR cetuximab y panitumumab, por lo que estos fármacos no se indican como terapia dirigida en tumores con RAS mutado. En enfermedad metastásica se deben evaluar biomarcadores relevantes, incluidos RAS, BRAF, inestabilidad microsatelital o deficiencia de reparación de errores de apareamiento y, según el contexto, otras alteraciones accionables. La elección terapéutica depende del perfil molecular, la localización primaria, el estado funcional y los objetivos del tratamiento.",
  perlaENARM: "Cáncer colorrectal metastásico: RAS mutado predice resistencia a anti-EGFR. Determinar MSI/dMMR también es esencial porque puede modificar la elección de inmunoterapia.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencia internacional: NCCN Clinical Practice Guidelines in Oncology: Colon Cancer.",
  bibliografia: [
    "NCCN Clinical Practice Guidelines in Oncology. Colon Cancer.",
    "ASCO Guidelines. Treatment of Metastatic Colorectal Cancer."
  ]
}, 
  {
  id: "GASTRO-301",
  especialidad: "Gastroenterología",
  tema: "Cáncer hepatocelular",
  subtema: "Factores de riesgo y epidemiología",
  dificultad: "Baja",
  caso: "Hombre de 59 años con cirrosis hepática secundaria a hepatitis C crónica acude a seguimiento. Durante la consulta pregunta cuál es su principal riesgo oncológico asociado con la enfermedad hepática avanzada.",
  pregunta: "¿Cuál es la neoplasia primaria del hígado más frecuentemente asociada con cirrosis?",
  opciones: [
    "Colangiocarcinoma intrahepático",
    "Hepatocarcinoma",
    "Angiosarcoma hepático",
    "Hepatoblastoma",
    "Linfoma hepático primario"
  ],
  respuestaCorrecta: 1,
  explicacion: "El carcinoma hepatocelular o hepatocarcinoma es la neoplasia primaria maligna más frecuente del hígado. La cirrosis de cualquier etiología constituye uno de sus principales factores de riesgo, especialmente cuando se asocia con hepatitis B o C, consumo perjudicial de alcohol o enfermedad hepática esteatósica metabólica. La infección crónica por hepatitis B también puede ocasionar hepatocarcinoma sin cirrosis establecida.",
  perlaENARM: "Cirrosis de cualquier etiología = principal población de riesgo para hepatocarcinoma. La hepatitis B puede producirlo incluso sin cirrosis.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencias internacionales: AASLD Practice Guidance on Prevention, Diagnosis, and Treatment of Hepatocellular Carcinoma; EASL Clinical Practice Guidelines.",
  bibliografia: [
    "Singal AG, et al. AASLD Practice Guidance on Prevention, Diagnosis, and Treatment of Hepatocellular Carcinoma. Hepatology. 2023;78(6):1922-1965.",
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines on the management of hepatocellular carcinoma. J Hepatol. 2018;69:182-236."
  ]
},
{
  id: "GASTRO-302",
  especialidad: "Gastroenterología",
  tema: "Cáncer hepatocelular",
  subtema: "Vigilancia en pacientes de alto riesgo",
  dificultad: "Media",
  caso: "Hombre de 63 años con cirrosis compensada por alcohol, sin lesiones focales conocidas y con función hepática estable. Acude para seguimiento y no presenta pérdida de peso, dolor abdominal ni ictericia.",
  pregunta: "¿Cuál es la estrategia habitual de vigilancia para detectar hepatocarcinoma en pacientes con cirrosis que son candidatos a tratamiento?",
  opciones: [
    "Tomografía contrastada anual en todos los pacientes",
    "Ultrasonido hepático cada 6 meses, con o sin alfafetoproteína según la guía aplicada",
    "Alfafetoproteína aislada cada 3 años",
    "Biopsia hepática anual",
    "Ultrasonido únicamente cuando aparezca ictericia"
  ],
  respuestaCorrecta: 1,
  explicacion: "La vigilancia semestral mediante ultrasonido hepático es una estrategia estándar en pacientes con cirrosis que podrían beneficiarse de un tratamiento si se detecta un tumor. La AASLD recomienda realizar ultrasonido junto con alfafetoproteína cada 6 meses. La vigilancia debe individualizarse en pacientes que no serían candidatos a tratamiento por enfermedad hepática terminal u otras comorbilidades importantes.",
  perlaENARM: "Cirrosis con posibilidad de tratamiento curativo: ultrasonido hepático cada 6 meses. La alfafetoproteína es complementaria y no sustituye por sí sola la imagen.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencia internacional: AASLD Practice Guidance on Hepatocellular Carcinoma.",
  bibliografia: [
    "Singal AG, et al. Hepatology. 2023;78(6):1922-1965.",
    "Marrero JA, et al. Diagnosis, Staging, and Management of Hepatocellular Carcinoma: 2018 Practice Guidance by the AASLD. Hepatology. 2018;68:723-750."
  ]
},
{
  id: "GASTRO-303",
  especialidad: "Gastroenterología",
  tema: "Cáncer hepatocelular",
  subtema: "Diagnóstico por imagen en pacientes con cirrosis",
  dificultad: "Alta",
  caso: "Mujer de 66 años con cirrosis por hepatitis C presenta una lesión hepática de 2.4 cm identificada durante vigilancia. La resonancia magnética contrastada muestra hiperrealce arterial no periférico y lavado en fases portal o tardía, con cápsula compatible con hepatocarcinoma.",
  pregunta: "¿Cuál es la interpretación diagnóstica más apropiada?",
  opciones: [
    "La lesión requiere biopsia obligatoria en todos los casos antes de establecer el diagnóstico",
    "Los hallazgos son compatibles con hepatocarcinoma y pueden establecer el diagnóstico no invasivo si cumplen criterios radiológicos validados",
    "El hiperrealce arterial excluye hepatocarcinoma",
    "La lesión debe considerarse metástasis hasta demostrar lo contrario, independientemente del contexto",
    "La resonancia contrastada no tiene utilidad para caracterizar lesiones hepáticas"
  ],
  respuestaCorrecta: 1,
  explicacion: "En pacientes de alto riesgo, especialmente con cirrosis, una lesión focal puede diagnosticarse como hepatocarcinoma mediante criterios radiológicos validados en tomografía o resonancia multifásica. El hiperrealce arterial no periférico y el lavado no periférico son hallazgos característicos, interpretados según el tamaño y otros criterios del sistema utilizado. Si la imagen es indeterminada o el paciente no pertenece a una población en la que los criterios no invasivos están validados, puede requerirse evaluación adicional o biopsia.",
  perlaENARM: "En pacientes con cirrosis, el diagnóstico de hepatocarcinoma puede ser no invasivo mediante imagen multifásica característica. No extrapolar estos criterios a cualquier paciente sin factores de riesgo.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencia internacional: AASLD Practice Guidance on Hepatocellular Carcinoma; sistema LI-RADS.",
  bibliografia: [
    "Singal AG, et al. Hepatology. 2023;78(6):1922-1965.",
    "American College of Radiology. Liver Imaging Reporting and Data System (LI-RADS)."
  ]
},
{
  id: "GASTRO-304",
  especialidad: "Gastroenterología",
  tema: "Cáncer hepatocelular",
  subtema: "Alfafetoproteína y limitaciones diagnósticas",
  dificultad: "Media",
  caso: "Hombre de 57 años con cirrosis por hepatitis B presenta alfafetoproteína de 18 ng/mL. El ultrasonido de vigilancia no identifica una lesión focal y el paciente permanece asintomático.",
  pregunta: "¿Cuál es la afirmación más correcta respecto a la alfafetoproteína?",
  opciones: [
    "Una alfafetoproteína normal excluye de manera definitiva el hepatocarcinoma",
    "Una elevación aislada confirma hepatocarcinoma y elimina la necesidad de imagen",
    "La alfafetoproteína puede contribuir a la vigilancia, pero no confirma ni excluye por sí sola el diagnóstico",
    "La alfafetoproteína solo aumenta en tumores benignos",
    "La alfafetoproteína sustituye al ultrasonido en todas las guías"
  ],
  respuestaCorrecta: 2,
  explicacion: "La alfafetoproteína tiene sensibilidad y especificidad limitadas. Puede elevarse en hepatocarcinoma, pero también en otras condiciones hepáticas y durante la regeneración hepatocelular; además, algunos tumores no producen elevaciones significativas. Por ello debe interpretarse junto con la imagen y el riesgo clínico. En vigilancia, una elevación relevante o progresiva puede motivar evaluación diagnóstica adicional según el protocolo aplicado.",
  perlaENARM: "AFP normal no descarta hepatocarcinoma y AFP elevada no lo confirma de forma aislada. La imagen multifásica es fundamental.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencia internacional: AASLD Practice Guidance on Hepatocellular Carcinoma.",
  bibliografia: [
    "Singal AG, et al. Hepatology. 2023;78(6):1922-1965.",
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines on the management of hepatocellular carcinoma. J Hepatol. 2018;69:182-236."
  ]
},
{
  id: "GASTRO-305",
  especialidad: "Gastroenterología",
  tema: "Cáncer hepatocelular",
  subtema: "Estadificación y sistema BCLC",
  dificultad: "Alta",
  caso: "Hombre de 64 años con hepatocarcinoma confirmado presenta una lesión única de 3 cm, sin invasión vascular ni metástasis. Tiene cirrosis compensada, ECOG 0 y función hepática conservada.",
  pregunta: "¿Qué sistema de estadificación integra carga tumoral, función hepática y estado funcional para orientar el tratamiento del hepatocarcinoma?",
  opciones: [
    "Child-Pugh exclusivamente",
    "MELD-Na exclusivamente",
    "TNM exclusivamente",
    "Barcelona Clinic Liver Cancer (BCLC)",
    "Clasificación de Hinchey"
  ],
  respuestaCorrecta: 3,
  explicacion: "El sistema BCLC integra extensión tumoral, estado funcional y reserva hepática para orientar el pronóstico y las opciones terapéuticas. Child-Pugh y MELD aportan información sobre función hepática, mientras que TNM describe principalmente extensión anatómica del tumor. La decisión definitiva requiere considerar hipertensión portal, comorbilidades, anatomía tumoral, elegibilidad para trasplante y recursos disponibles.",
  perlaENARM: "BCLC es el sistema que integra tumor, función hepática y estado funcional para guiar el tratamiento del hepatocarcinoma.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencias internacionales: AASLD y EASL para hepatocarcinoma.",
  bibliografia: [
    "Singal AG, et al. Hepatology. 2023;78(6):1922-1965.",
    "Reig M, et al. BCLC strategy for prognosis prediction and treatment recommendation: The 2022 update. J Hepatol. 2022;76:681-693."
  ]
},
{
  id: "GASTRO-306",
  especialidad: "Gastroenterología",
  tema: "Cáncer hepatocelular",
  subtema: "Tratamiento curativo: resección hepática",
  dificultad: "Muy alta",
  caso: "Hombre de 58 años con hepatocarcinoma solitario de 2.8 cm, sin invasión vascular ni metástasis. Presenta función hepática conservada, ausencia de hipertensión portal clínicamente significativa y volumen hepático residual adecuado según la evaluación preoperatoria.",
  pregunta: "¿Cuál de las siguientes opciones puede ofrecer intención curativa en este escenario?",
  opciones: [
    "Quimioterapia citotóxica sistémica como única intervención",
    "Resección hepática en un paciente seleccionado tras evaluación multidisciplinaria",
    "Antibióticos durante 6 semanas",
    "Observación indefinida sin vigilancia",
    "Drenaje biliar como tratamiento oncológico definitivo"
  ],
  respuestaCorrecta: 1,
  explicacion: "La resección hepática puede ser curativa en pacientes seleccionados con tumor localizado, reserva hepática adecuada, volumen residual suficiente y ausencia de hipertensión portal clínicamente significativa relevante. En cirrosis, la selección debe ser cuidadosa debido al riesgo de insuficiencia hepática posoperatoria y recurrencia. La ablación y el trasplante también pueden ser opciones curativas según las características tumorales y del paciente.",
  perlaENARM: "La resección se considera en hepatocarcinoma localizado cuando la reserva hepática y la anatomía permiten una cirugía segura; no todos los pacientes con cirrosis son candidatos.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencia internacional: AASLD Practice Guidance on Hepatocellular Carcinoma.",
  bibliografia: [
    "Singal AG, et al. Hepatology. 2023;78(6):1922-1965.",
    "Reig M, et al. J Hepatol. 2022;76:681-693."
  ]
},
{
  id: "GASTRO-307",
  especialidad: "Gastroenterología",
  tema: "Cáncer hepatocelular",
  subtema: "Criterios de Milán y trasplante hepático",
  dificultad: "Muy alta",
  caso: "Mujer de 55 años con cirrosis descompensada y hepatocarcinoma presenta tres nódulos de 2.0, 2.5 y 2.8 cm, sin invasión vascular macroscópica ni metástasis extrahepáticas. La evaluación multidisciplinaria considera trasplante hepático.",
  pregunta: "¿Cuál de las siguientes descripciones corresponde a los criterios de Milán clásicos para selección de pacientes con hepatocarcinoma para trasplante?",
  opciones: [
    "Cualquier número de tumores si la alfafetoproteína es normal",
    "Una lesión de hasta 10 cm sin invasión vascular",
    "Una lesión única de hasta 5 cm o hasta tres lesiones, cada una de hasta 3 cm, sin invasión vascular macroscópica ni metástasis extrahepáticas",
    "Tres lesiones de hasta 5 cm cada una, independientemente de la invasión vascular",
    "Una lesión única de hasta 8 cm, incluso con metástasis extrahepáticas"
  ],
  respuestaCorrecta: 2,
  explicacion: "Los criterios de Milán clásicos incluyen una lesión única de hasta 5 cm o hasta tres lesiones, ninguna mayor de 3 cm, sin invasión vascular macroscópica ni metástasis extrahepáticas. Estos criterios ayudan a seleccionar pacientes con resultados aceptables después del trasplante. Algunos programas utilizan criterios expandidos o estrategias de downstaging, pero su aplicación depende de protocolos específicos y de la evaluación del equipo de trasplante.",
  perlaENARM: "Milán: tumor único ≤5 cm o hasta 3 tumores, cada uno ≤3 cm, sin invasión vascular macroscópica ni metástasis extrahepáticas.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencias internacionales: AASLD Practice Guidance on Hepatocellular Carcinoma y protocolos de trasplante hepático.",
  bibliografia: [
    "Mazzaferro V, et al. Liver transplantation for the treatment of small hepatocellular carcinomas in patients with cirrhosis. N Engl J Med. 1996;334:693-699.",
    "Singal AG, et al. Hepatology. 2023;78(6):1922-1965."
  ]
},
{
  id: "GASTRO-308",
  especialidad: "Gastroenterología",
  tema: "Cáncer hepatocelular",
  subtema: "Ablación locorregional",
  dificultad: "Alta",
  caso: "Hombre de 69 años con cirrosis compensada presenta hepatocarcinoma único de 2 cm. No es candidato a resección por comorbilidades cardiopulmonares, pero conserva función hepática adecuada y no tiene enfermedad extrahepática.",
  pregunta: "¿Qué opción puede ofrecer intención curativa en pacientes seleccionados con tumores pequeños cuando la cirugía no es adecuada?",
  opciones: [
    "Ablación térmica percutánea, como radiofrecuencia o microondas",
    "Antibióticos como monoterapia",
    "Corticoides sistémicos",
    "Quimioterapia citotóxica convencional como única opción curativa",
    "Colectomía subtotal"
  ],
  respuestaCorrecta: 0,
  explicacion: "La ablación térmica, mediante radiofrecuencia o microondas, puede ofrecer intención curativa en pacientes seleccionados con hepatocarcinoma pequeño, especialmente cuando la resección no es apropiada. Su eficacia depende del tamaño, localización, proximidad a estructuras críticas y posibilidad de obtener un margen de ablación adecuado. En determinados casos pueden considerarse otras técnicas locorregionales o trasplante.",
  perlaENARM: "Hepatocarcinoma pequeño y paciente no candidato a resección: valorar ablación térmica si la localización y las condiciones clínicas lo permiten.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencia internacional: AASLD Practice Guidance on Hepatocellular Carcinoma.",
  bibliografia: [
    "Singal AG, et al. Hepatology. 2023;78(6):1922-1965.",
    "Reig M, et al. J Hepatol. 2022;76:681-693."
  ]
},
{
  id: "GASTRO-309",
  especialidad: "Gastroenterología",
  tema: "Cáncer hepatocelular",
  subtema: "Tratamiento sistémico de enfermedad avanzada",
  dificultad: "Extrema",
  caso: "Hombre de 62 años con hepatocarcinoma avanzado, invasión vascular, ausencia de contraindicaciones mayores para tratamiento sistémico y función hepática Child-Pugh A. Mantiene buen estado funcional y no es candidato a tratamiento curativo ni a terapia locorregional eficaz.",
  pregunta: "¿Cuál es una opción de primera línea respaldada por evidencia para pacientes seleccionados con hepatocarcinoma irresecable avanzado?",
  opciones: [
    "Atezolizumab más bevacizumab, tras evaluar contraindicaciones y riesgo hemorrágico",
    "Prednisona en monoterapia",
    "Amoxicilina más ácido clavulánico durante 14 días",
    "Ácido ursodesoxicólico como tratamiento antitumoral",
    "Lactulosa como monoterapia antineoplásica"
  ],
  respuestaCorrecta: 0,
  explicacion: "Atezolizumab más bevacizumab es una opción de primera línea para pacientes seleccionados con hepatocarcinoma irresecable avanzado y función hepática y estado funcional adecuados. Antes de bevacizumab es importante evaluar el riesgo de hemorragia, especialmente en pacientes con cirrosis e hipertensión portal, y tratar o valorar várices gastroesofágicas según el contexto. Otras combinaciones inmunoterapéuticas o terapias dirigidas pueden ser alternativas de acuerdo con guías vigentes, comorbilidades, disponibilidad y contraindicaciones.",
  perlaENARM: "Hepatocarcinoma avanzado con función hepática conservada: considerar inmunoterapia combinada. Antes de bevacizumab, valorar cuidadosamente el riesgo de sangrado por hipertensión portal y várices.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencias internacionales: AASLD Practice Guidance on Hepatocellular Carcinoma y guías de tratamiento sistémico.",
  bibliografia: [
    "Finn RS, et al. Atezolizumab plus Bevacizumab in Unresectable Hepatocellular Carcinoma. N Engl J Med. 2020;382:1894-1905.",
    "Singal AG, et al. Hepatology. 2023;78(6):1922-1965."
  ]
},
{
  id: "GASTRO-310",
  especialidad: "Gastroenterología",
  tema: "Cáncer hepatocelular",
  subtema: "Prevención y reducción del riesgo",
  dificultad: "Alta",
  caso: "Hombre de 52 años con hepatitis B crónica, carga viral detectable y fibrosis avanzada. Pregunta qué medida puede reducir el riesgo de progresión hepática y contribuir a disminuir el riesgo de hepatocarcinoma.",
  pregunta: "¿Cuál de las siguientes intervenciones forma parte de una estrategia preventiva basada en evidencia?",
  opciones: [
    "Suspender el seguimiento una vez que las aminotransferasas se normalicen",
    "Indicar antivirales apropiados cuando estén indicados, controlar factores metabólicos y alcohol, y mantener vigilancia según el riesgo",
    "Utilizar alfafetoproteína como única prueba de vigilancia en todos los pacientes",
    "Administrar quimioterapia preventiva a todos los pacientes con hepatitis B",
    "Indicar corticoides sistémicos de manera crónica para prevenir el cáncer"
  ],
  respuestaCorrecta: 1,
  explicacion: "El control de la hepatitis B con tratamiento antiviral cuando está indicado reduce la progresión de la enfermedad hepática y el riesgo de hepatocarcinoma, aunque no lo elimina por completo. También son relevantes el tratamiento de hepatitis C, la abstinencia de alcohol cuando corresponde, el control de factores metabólicos y la vigilancia de los pacientes que cumplen criterios de riesgo. Los pacientes con riesgo persistente pueden requerir vigilancia incluso después del control virológico.",
  perlaENARM: "El tratamiento antiviral reduce el riesgo de hepatocarcinoma, pero no lo elimina en pacientes con riesgo residual. La vigilancia debe mantenerse cuando está indicada.",
  gpc: "No se asigna una clave de GPC mexicana específica sin verificación documental. Referencias internacionales: AASLD Practice Guidance on Hepatocellular Carcinoma y guías de hepatitis B.",
  bibliografia: [
    "Singal AG, et al. Hepatology. 2023;78(6):1922-1965.",
    "Terrault NA, et al. Update on prevention, diagnosis, and treatment of chronic hepatitis B: AASLD guidance."
  ]
},
  
{
  id: "GASTRO-311",
  especialidad: "Gastroenterología",
  tema: "Cáncer gástrico",
  subtema: "Factores de riesgo y carcinogénesis",
  dificultad: "Media",
  caso: "Hombre de 63 años, originario de una región con alta incidencia de cáncer gástrico, con infección por Helicobacter pylori documentada años atrás. La endoscopia realizada por dispepsia persistente muestra gastritis atrófica y metaplasia intestinal.",
  pregunta: "¿Cuál de los siguientes mecanismos explica mejor la progresión hacia el adenocarcinoma gástrico de tipo intestinal?",
  opciones: [
    "Infección crónica por H. pylori con inflamación, atrofia glandular, metaplasia intestinal y displasia",
    "Hipersecreción aislada de ácido clorhídrico con ulceración aguda",
    "Infección por rotavirus con destrucción de las criptas gástricas",
    "Obstrucción pilórica con aumento de la presión intragástrica",
    "Producción pancreática de enzimas proteolíticas con autodigestión de la mucosa"
  ],
  respuestaCorrecta: 0,
  explicacion: "La infección crónica por H. pylori puede inducir gastritis crónica activa y progresar a atrofia, metaplasia intestinal, displasia y adenocarcinoma. Esta secuencia se conoce como cascada de Correa. La progresión no es inevitable y depende también de factores del huésped y ambientales.",
  perlaENARM: "H. pylori, gastritis atrófica y metaplasia intestinal son asociaciones clave del adenocarcinoma gástrico de tipo intestinal. La erradicación de H. pylori reduce el riesgo, pero no elimina por completo el riesgo cuando ya existen lesiones precursoras.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente aplicable a diagnóstico y tratamiento del cáncer gástrico y las recomendaciones nacionales sobre infección por H. pylori.",
    internacional: "NCI. Gastric Cancer Treatment PDQ; NCI. Genetics of Gastric Cancer PDQ."
  },
  bibliografia: [
    "National Cancer Institute. Gastric Cancer Treatment (PDQ), Health Professional Version.",
    "National Cancer Institute. Genetics of Gastric Cancer (PDQ), Health Professional Version."
  ]
},
{
  id: "GASTRO-312",
  especialidad: "Gastroenterología",
  tema: "Cáncer gástrico",
  subtema: "Clasificación histológica de Lauren",
  dificultad: "Media",
  caso: "Hombre de 68 años con pérdida ponderal progresiva, saciedad temprana y anemia ferropénica. La biopsia gástrica reporta adenocarcinoma con formación de glándulas, células cohesivas y patrón infiltrativo predominantemente antral.",
  pregunta: "¿Qué subtipo histológico de adenocarcinoma gástrico es más compatible con estos hallazgos?",
  opciones: [
    "Tipo difuso de Lauren",
    "Tipo intestinal de Lauren",
    "Linfoma gástrico MALT",
    "Tumor del estroma gastrointestinal",
    "Carcinoma neuroendocrino de células pequeñas"
  ],
  respuestaCorrecta: 1,
  explicacion: "El tipo intestinal suele formar estructuras glandulares o tubulares y se relaciona con la secuencia de gastritis crónica, atrofia, metaplasia y displasia. El tipo difuso se caracteriza por células poco cohesivas, con frecuencia en anillo de sello, y puede infiltrar ampliamente la pared gástrica.",
  perlaENARM: "Intestinal = formación glandular; difuso = células poco cohesivas y posible linitis plástica. La histología debe interpretarse junto con la clínica y la extensión tumoral.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre cáncer gástrico para clasificación histopatológica y abordaje diagnóstico.",
    internacional: "NCI. Gastric Cancer Treatment PDQ; NCCN Clinical Practice Guidelines in Oncology: Gastric Cancer, versión 2.2025."
  },
  bibliografia: [
    "National Cancer Institute. Gastric Cancer Treatment (PDQ), Health Professional Version.",
    "Ajani JA, et al. Gastric Cancer, Version 2.2025. J Natl Compr Canc Netw. 2025;23(5):169-191."
  ]
},
{
  id: "GASTRO-313",
  especialidad: "Gastroenterología",
  tema: "Cáncer gástrico",
  subtema: "Linitis plástica y carcinoma difuso",
  dificultad: "Alta",
  caso: "Mujer de 46 años con saciedad temprana intensa, vómitos posprandiales y pérdida de 12 kg. La endoscopia muestra pliegues engrosados y rigidez difusa del estómago; la distensión con insuflación es limitada. La biopsia identifica células en anillo de sello.",
  pregunta: "¿Cuál es el diagnóstico más probable?",
  opciones: [
    "Adenocarcinoma intestinal superficial",
    "Linfoma gástrico MALT localizado",
    "Adenocarcinoma gástrico difuso con linitis plástica",
    "Úlcera péptica benigna con fibrosis localizada",
    "Tumor del estroma gastrointestinal exofítico"
  ],
  respuestaCorrecta: 2,
  explicacion: "La infiltración difusa de la pared gástrica por células poco cohesivas puede causar engrosamiento, rigidez y pérdida de distensibilidad, hallazgos característicos de linitis plástica. Las células en anillo de sello apoyan el patrón difuso, aunque la interpretación definitiva requiere correlación anatomopatológica.",
  perlaENARM: "Estómago rígido, poco distensible y con infiltración difusa: sospecha linitis plástica. Una biopsia superficial negativa no excluye la enfermedad si persiste una alta sospecha clínica; pueden requerirse biopsias profundas o técnicas complementarias.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre cáncer gástrico para diagnóstico histopatológico y manejo de lesiones infiltrativas.",
    internacional: "NCI. Gastric Cancer Treatment PDQ; NCCN Gastric Cancer, versión 2.2025."
  },
  bibliografia: [
    "National Cancer Institute. Gastric Cancer Treatment (PDQ), Health Professional Version.",
    "Ajani JA, et al. Gastric Cancer, Version 2.2025. J Natl Compr Canc Netw. 2025;23(5):169-191."
  ]
},
{
  id: "GASTRO-314",
  especialidad: "Gastroenterología",
  tema: "Cáncer gástrico",
  subtema: "Diagnóstico definitivo",
  dificultad: "Media",
  caso: "Hombre de 59 años con pérdida ponderal, anemia microcítica y saciedad temprana. La endoscopia digestiva alta identifica una lesión ulcerada irregular en el antro gástrico, con bordes elevados y friables.",
  pregunta: "¿Cuál es el siguiente paso indispensable para establecer el diagnóstico definitivo?",
  opciones: [
    "Solicitar únicamente antígeno carcinoembrionario sérico",
    "Realizar ultrasonido abdominal como prueba confirmatoria",
    "Iniciar quimioterapia con base en la apariencia endoscópica",
    "Obtener biopsias endoscópicas de la lesión para estudio histopatológico",
    "Solicitar una prueba de aliento para H. pylori como confirmación del cáncer"
  ],
  respuestaCorrecta: 3,
  explicacion: "La endoscopia permite visualizar la lesión y obtener tejido. El diagnóstico definitivo del adenocarcinoma gástrico requiere confirmación histopatológica. Los marcadores séricos y los estudios de imagen no sustituyen la biopsia.",
  perlaENARM: "Lesión gástrica sospechosa = endoscopia con biopsia. Los marcadores tumorales no son pruebas de tamizaje ni confirman por sí solos el cáncer gástrico.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre diagnóstico y tratamiento del cáncer gástrico.",
    internacional: "ESMO Clinical Practice Guideline: Gastric Cancer; NCI. Gastric Cancer Treatment PDQ."
  },
  bibliografia: [
    "Lordick F, et al. Gastric cancer: ESMO Clinical Practice Guideline for diagnosis, treatment and follow-up. Ann Oncol. 2022;33(10):1005-1020.",
    "National Cancer Institute. Gastric Cancer Treatment (PDQ), Health Professional Version."
  ]
},
{
  id: "GASTRO-315",
  especialidad: "Gastroenterología",
  tema: "Cáncer gástrico",
  subtema: "Estadificación locorregional y metástasis",
  dificultad: "Alta",
  caso: "Paciente de 62 años con adenocarcinoma gástrico confirmado por biopsia. La tomografía contrastada muestra engrosamiento de la pared gástrica y ganglios regionales aumentados, sin lesiones hepáticas evidentes. Se considera candidato potencial a tratamiento con intención curativa.",
  pregunta: "¿Qué estudio es especialmente útil para evaluar la profundidad de invasión de la pared gástrica y la afectación de ganglios locorregionales en casos seleccionados?",
  opciones: [
    "Radiografía simple de abdomen",
    "Ultrasonido endoscópico",
    "Prueba de aliento con urea",
    "Serie esófago-gastroduodenal como único estudio de estadificación",
    "Determinación aislada de CA 19-9"
  ],
  respuestaCorrecta: 1,
  explicacion: "El ultrasonido endoscópico puede ayudar a definir la profundidad de invasión tumoral y valorar ganglios regionales, especialmente cuando esa información modifica la conducta. La tomografía contrastada de tórax, abdomen y pelvis forma parte de la evaluación habitual de extensión; en pacientes seleccionados puede indicarse laparoscopia de estadificación para buscar enfermedad peritoneal oculta.",
  perlaENARM: "El ultrasonido endoscópico ayuda a valorar T y N locorregionales. La tomografía busca enfermedad a distancia; ninguna modalidad sustituye la integración multidisciplinaria de la estadificación.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre estadificación del cáncer gástrico.",
    internacional: "ESMO Clinical Practice Guideline: Gastric Cancer; NCCN Gastric Cancer, versión 2.2025."
  },
  bibliografia: [
    "Lordick F, et al. Ann Oncol. 2022;33(10):1005-1020.",
    "Ajani JA, et al. J Natl Compr Canc Netw. 2025;23(5):169-191."
  ]
},
{
  id: "GASTRO-316",
  especialidad: "Gastroenterología",
  tema: "Cáncer gástrico",
  subtema: "Ganglio de Virchow y metástasis",
  dificultad: "Media",
  caso: "Hombre de 67 años con pérdida de peso, anemia y una masa epigástrica. A la exploración se identifica un ganglio supraclavicular izquierdo duro, no doloroso y fijo. La endoscopia posterior confirma adenocarcinoma gástrico.",
  pregunta: "¿Qué representa el ganglio supraclavicular izquierdo descrito?",
  opciones: [
    "Ganglio de Virchow, hallazgo sugestivo de diseminación metastásica",
    "Ganglio de Troisier, característico exclusivamente de infección viral",
    "Ganglio centinela que confirma enfermedad limitada a la mucosa",
    "Adenopatía reactiva que descarta enfermedad a distancia",
    "Ganglio de la cadena cervical posterior sin relevancia oncológica"
  ],
  respuestaCorrecta: 0,
  explicacion: "El ganglio de Virchow es una adenopatía supraclavicular izquierda asociada clásicamente a metástasis de tumores abdominales, incluido el cáncer gástrico. Su presencia obliga a evaluar enfermedad avanzada y a confirmar la naturaleza de la lesión cuando sea necesario.",
  perlaENARM: "Ganglio supraclavicular izquierdo duro en un adulto con síntomas constitucionales = sospecha de neoplasia abdominal metastásica. No debe interpretarse como prueba histológica aislada.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre evaluación de enfermedad metastásica en cáncer gástrico.",
    internacional: "NCI. Gastric Cancer Treatment PDQ; ESMO Clinical Practice Guideline: Gastric Cancer."
  },
  bibliografia: [
    "National Cancer Institute. Gastric Cancer Treatment (PDQ), Health Professional Version.",
    "Lordick F, et al. Ann Oncol. 2022;33(10):1005-1020."
  ]
},
{
  id: "GASTRO-317",
  especialidad: "Gastroenterología",
  tema: "Cáncer gástrico",
  subtema: "Síndrome de cáncer gástrico difuso hereditario",
  dificultad: "Alta",
  caso: "Mujer de 34 años, asintomática, cuya madre y hermana fueron diagnosticadas con cáncer gástrico difuso a edades tempranas. Los informes anatomopatológicos describen carcinoma de células en anillo de sello.",
  pregunta: "¿Qué gen se asocia clásicamente con el síndrome de cáncer gástrico difuso hereditario?",
  opciones: [
    "APC",
    "RET",
    "CDH1",
    "VHL",
    "RB1"
  ],
  respuestaCorrecta: 2,
  explicacion: "Las variantes germinales patogénicas de CDH1, que codifica E-cadherina, se asocian con el síndrome de cáncer gástrico difuso hereditario. CTNNA1 también puede estar implicado. La historia familiar descrita justifica asesoramiento genético y evaluación especializada.",
  perlaENARM: "Cáncer gástrico difuso a edad temprana y varios familiares afectados: sospecha síndrome hereditario asociado a CDH1. No se recomienda tomar decisiones quirúrgicas preventivas sin evaluación genética y multidisciplinaria.",
  gpc: {
    mexico: "Consultar los criterios nacionales vigentes de referencia a genética clínica y la GPC aplicable a cáncer gástrico hereditario.",
    internacional: "NCI. Genetics of Gastric Cancer PDQ; NCCN Gastric Cancer, versión 2.2025."
  },
  bibliografia: [
    "National Cancer Institute. Genetics of Gastric Cancer (PDQ), Health Professional Version.",
    "Ajani JA, et al. Gastric Cancer, Version 2.2025. J Natl Compr Canc Netw. 2025;23(5):169-191."
  ]
},
{
  id: "GASTRO-318",
  especialidad: "Gastroenterología",
  tema: "Cáncer gástrico",
  subtema: "Tratamiento del cáncer gástrico temprano",
  dificultad: "Alta",
  caso: "Paciente de 70 años con adenocarcinoma gástrico bien diferenciado, limitado a la mucosa según la evaluación inicial, sin datos de enfermedad metastásica. La lesión es pequeña y presenta características endoscópicas potencialmente compatibles con resección curativa.",
  pregunta: "¿Cuál es la conducta más apropiada para determinar si puede tratarse mediante resección endoscópica con intención curativa?",
  opciones: [
    "Indicar quimioterapia sistémica como tratamiento único",
    "Realizar resección endoscópica sin evaluar profundidad ni criterios histológicos",
    "Indicar gastrectomía total obligatoria en todos los tumores limitados a la mucosa",
    "Evaluar tamaño, diferenciación, profundidad, ulceración y criterios de riesgo ganglionar en un equipo experto",
    "Mantener vigilancia anual sin obtener resección ni confirmación histológica"
  ],
  respuestaCorrecta: 3,
  explicacion: "Algunos cánceres gástricos tempranos pueden tratarse con resección endoscópica, pero la selección depende de criterios estrictos que consideran tamaño, tipo histológico, profundidad, ulceración y riesgo de metástasis ganglionares. Si la lesión no cumple criterios o la resección revela factores de alto riesgo, puede ser necesaria cirugía adicional.",
  perlaENARM: "Cáncer gástrico temprano no significa resección endoscópica automática. La decisión depende de criterios de curabilidad y del riesgo de afectación ganglionar.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente y los criterios endoscópicos especializados aplicables a cáncer gástrico temprano.",
    internacional: "NCI. Gastric Cancer Treatment PDQ; ESMO Clinical Practice Guideline: Gastric Cancer."
  },
  bibliografia: [
    "National Cancer Institute. Gastric Cancer Treatment (PDQ), Health Professional Version.",
    "Lordick F, et al. Ann Oncol. 2022;33(10):1005-1020."
  ]
},
{
  id: "GASTRO-319",
  especialidad: "Gastroenterología",
  tema: "Cáncer gástrico",
  subtema: "Tratamiento perioperatorio del cáncer resecable",
  dificultad: "Alta",
  caso: "Hombre de 58 años con adenocarcinoma gástrico confirmado, enfermedad localmente avanzada resecable y sin metástasis identificadas tras la estadificación. Presenta buen estado funcional y es candidato a tratamiento multimodal.",
  pregunta: "¿Cuál es el enfoque terapéutico general que debe discutirse en un comité multidisciplinario para muchos pacientes con enfermedad resecable localmente avanzada?",
  opciones: [
    "Tratamiento exclusivamente con inhibidores de la bomba de protones",
    "Cirugía sin discutir tratamiento sistémico en ningún caso",
    "Antibióticos como tratamiento antineoplásico definitivo",
    "Radioterapia aislada como estándar universal",
    "Tratamiento perioperatorio sistémico y gastrectomía oncológica con linfadenectomía cuando corresponda"
  ],
  respuestaCorrecta: 4,
  explicacion: "En muchos pacientes con cáncer gástrico resecable localmente avanzado se considera tratamiento sistémico perioperatorio y cirugía oncológica con linfadenectomía. La estrategia concreta depende del estadio, localización, estado funcional, histología, biomarcadores cuando sean pertinentes y guías vigentes. No todos los pacientes siguen el mismo esquema.",
  perlaENARM: "La cirugía es el pilar del tratamiento curativo, pero en enfermedad localmente avanzada suele requerirse una estrategia multidisciplinaria. La selección de quimioterapia perioperatoria o tratamiento adyuvante depende del contexto clínico y regional.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre tratamiento multimodal del cáncer gástrico resecable.",
    internacional: "NCCN Gastric Cancer, versión 2.2025; ESMO Clinical Practice Guideline: Gastric Cancer."
  },
  bibliografia: [
    "Ajani JA, et al. Gastric Cancer, Version 2.2025. J Natl Compr Canc Netw. 2025;23(5):169-191.",
    "Lordick F, et al. Ann Oncol. 2022;33(10):1005-1020."
  ]
},
{
  id: "GASTRO-320",
  especialidad: "Gastroenterología",
  tema: "Cáncer gástrico",
  subtema: "Biomarcadores en enfermedad avanzada",
  dificultad: "Alta",
  caso: "Mujer de 64 años con adenocarcinoma gástrico metastásico confirmado. Se planea tratamiento sistémico de primera línea. La muestra tumoral está disponible y el estado funcional permite tratamiento oncológico.",
  pregunta: "¿Cuál de las siguientes estrategias de evaluación molecular es apropiada para orientar opciones terapéuticas en enfermedad avanzada?",
  opciones: [
    "Solicitar únicamente CA 19-9 y elegir tratamiento según su concentración",
    "Evaluar biomarcadores relevantes como HER2, PD-L1 y MSI/MMR; considerar CLDN18.2 según disponibilidad y opciones terapéuticas",
    "Determinar únicamente el grupo sanguíneo ABO",
    "Solicitar mutación de BCR::ABL1 en todos los adenocarcinomas gástricos",
    "Evitar las pruebas tumorales porque no modifican ninguna decisión terapéutica"
  ],
  respuestaCorrecta: 1,
  explicacion: "En cáncer gástrico avanzado, biomarcadores como HER2, PD-L1 y deficiencia del sistema de reparación de errores de apareamiento o inestabilidad microsatelital pueden orientar tratamientos dirigidos o inmunoterapia. CLDN18.2 también puede ser relevante para seleccionar opciones terapéuticas en pacientes elegibles, según disponibilidad y aprobación regulatoria local.",
  perlaENARM: "En cáncer gástrico metastásico, el perfil molecular puede cambiar la primera línea. Los biomarcadores deben solicitarse e interpretarse según las guías vigentes, la disponibilidad local y las características del paciente.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente y las aprobaciones regulatorias nacionales para tratamiento sistémico del cáncer gástrico avanzado.",
    internacional: "NCCN Gastric Cancer, versión 2.2025; NCI. Gastric Cancer Treatment PDQ."
  },
  bibliografia: [
    "Ajani JA, et al. Gastric Cancer, Version 2.2025. J Natl Compr Canc Netw. 2025;23(5):169-191.",
    "National Cancer Institute. Gastric Cancer Treatment (PDQ), Health Professional Version."
  ]
},
  
{
  id: "GASTRO-321",
  especialidad: "Gastroenterología",
  tema: "ERGE complicada",
  subtema: "Esofagitis erosiva grave",
  dificultad: "Intermedia",
  caso: "Hombre de 58 años con pirosis y regurgitación crónicas. La endoscopia muestra erosiones confluentes que comprometen gran parte de la mucosa esofágica distal y afectan más del 75% de la circunferencia esofágica.",
  pregunta: "¿Qué grado de esofagitis erosiva corresponde a la clasificación de Los Ángeles?",
  opciones: [
    "Grado A",
    "Grado B",
    "Grado C",
    "Grado D",
    "No puede clasificarse endoscópicamente"
  ],
  respuestaCorrecta: 3,
  explicacion: "La esofagitis grado D de Los Ángeles presenta lesiones mucosas que afectan al menos el 75% de la circunferencia esofágica. El grado C comprende lesiones que se extienden entre los pliegues mucosos y afectan menos del 75% de la circunferencia. La clasificación endoscópica permite estimar la gravedad del daño mucoso.",
  perlaENARM: "Los Ángeles D: lesiones que afectan ≥75% de la circunferencia esofágica. En esofagitis erosiva grave se recomienda tratamiento con inhibidor de la bomba de protones (IBP) y mantenimiento prolongado según evolución.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente aplicable a ERGE y esofagitis erosiva; no se asigna una clave no corroborada.",
    internacional: "ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease, 2022."
  },
  bibliografia: [
    "Katz PO, et al. ACG Clinical Guideline: Guidelines for the Diagnosis and Management of Gastroesophageal Reflux Disease. Am J Gastroenterol. 2022;117:27-56."
  ]
},
{
  id: "GASTRO-322",
  especialidad: "Gastroenterología",
  tema: "ERGE complicada",
  subtema: "Estenosis péptica",
  dificultad: "Intermedia",
  caso: "Mujer de 64 años con antecedente de ERGE de larga evolución presenta disfagia progresiva inicialmente para sólidos. La endoscopia identifica una estenosis distal concéntrica y corta, sin masa evidente. Se obtienen biopsias para descartar malignidad.",
  pregunta: "Una vez descartada una causa maligna, ¿cuál es el tratamiento endoscópico de elección para la estenosis péptica sintomática?",
  opciones: [
    "Dilatación endoscópica con balón o bujías, asociada a tratamiento antisecretor",
    "Tratamiento exclusivo con antiácidos a demanda",
    "Esofagectomía inmediata en todos los casos",
    "Tratamiento antibiótico empírico durante 14 días",
    "Ligadura endoscópica de la estenosis"
  ],
  respuestaCorrecta: 0,
  explicacion: "La dilatación endoscópica es el tratamiento habitual de la estenosis péptica benigna sintomática. Debe acompañarse de supresión ácida, generalmente con IBP, para reducir la recurrencia. La disfagia obliga a excluir neoplasia y otras causas estructurales antes de asumir que la estenosis es benigna.",
  perlaENARM: "Disfagia progresiva es un dato de alarma: requiere endoscopia y evaluación de la lesión. La dilatación trata la obstrucción, mientras que el IBP controla el mecanismo lesivo y reduce recurrencias.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente sobre ERGE y disfagia; confirmar la aplicabilidad local de las recomendaciones endoscópicas.",
    internacional: "ACG Clinical Guideline for GERD, 2022; recomendaciones endoscópicas para estenosis benignas."
  },
  bibliografia: [
    "Katz PO, et al. Am J Gastroenterol. 2022;117:27-56."
  ]
},
{
  id: "GASTRO-323",
  especialidad: "Gastroenterología",
  tema: "ERGE complicada",
  subtema: "Esófago de Barrett: definición y diagnóstico",
  dificultad: "Intermedia",
  caso: "Hombre de 61 años con ERGE de 15 años de evolución se somete a endoscopia. Se observa mucosa columnar que se extiende 3 cm por encima de la unión gastroesofágica. Las biopsias muestran metaplasia intestinal con células caliciformes.",
  pregunta: "¿Cuál es la interpretación diagnóstica más apropiada?",
  opciones: [
    "Esófago de Barrett, por metaplasia intestinal en el esófago tubular",
    "Acalasia en fase inicial",
    "Esofagitis infecciosa por Candida",
    "Úlcera péptica gástrica",
    "Adenocarcinoma invasor confirmado"
  ],
  respuestaCorrecta: 0,
  explicacion: "El esófago de Barrett consiste en sustitución del epitelio escamoso distal por epitelio columnar metaplásico; en la definición utilizada por las guías estadounidenses, se requiere metaplasia intestinal en el esófago tubular. El diagnóstico se integra con los hallazgos endoscópicos y la histología. La metaplasia intestinal no equivale por sí misma a cáncer.",
  perlaENARM: "Barrett es una lesión precursora del adenocarcinoma esofágico. Metaplasia intestinal, displasia y carcinoma son categorías histopatológicas distintas.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente sobre ERGE y lesiones premalignas esofágicas.",
    internacional: "ACG Guideline for the Diagnosis and Management of GERD, 2022; ASGE Guideline on Screening and Surveillance of Barrett's Esophagus."
  },
  bibliografia: [
    "Katz PO, et al. Am J Gastroenterol. 2022;117:27-56.",
    "ASGE Standards of Practice Committee. Gastrointest Endosc. 2019;90:335-359.e2."
  ]
},
{
  id: "GASTRO-324",
  especialidad: "Gastroenterología",
  tema: "ERGE complicada",
  subtema: "Vigilancia del esófago de Barrett sin displasia",
  dificultad: "Avanzada",
  caso: "Hombre de 55 años con esófago de Barrett confirmado mediante endoscopia y biopsias protocolizadas. La longitud del segmento es de 2 cm y no se identifica displasia después de revisión histopatológica adecuada.",
  pregunta: "¿Cuál es la estrategia general más apropiada?",
  opciones: [
    "Ablación endoscópica inmediata en todos los pacientes",
    "Esofagectomía profiláctica",
    "Vigilancia endoscópica según longitud del segmento y guía aplicable, además de manejo de la ERGE",
    "Quimioterapia preventiva",
    "Suspender todo seguimiento porque no existe riesgo de progresión"
  ],
  respuestaCorrecta: 2,
  explicacion: "En Barrett sin displasia, la conducta habitual es vigilancia endoscópica según la longitud del segmento y la guía utilizada, además del manejo de la ERGE. La ablación no se recomienda de forma rutinaria para todos los pacientes sin displasia. La vigilancia debe realizarse con inspección cuidadosa y biopsias protocolizadas.",
  perlaENARM: "Barrett sin displasia no significa cáncer ni indicación automática de ablación. Los intervalos de vigilancia dependen de la guía y de la longitud del segmento; evita memorizar un intervalo único sin especificar el contexto.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente y el protocolo institucional de vigilancia de Barrett.",
    internacional: "ASGE Guideline on Screening and Surveillance of Barrett's Esophagus; ACG Clinical Guideline for GERD."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. Gastrointest Endosc. 2019;90:335-359.e2.",
    "Katz PO, et al. Am J Gastroenterol. 2022;117:27-56."
  ]
},
{
  id: "GASTRO-325",
  especialidad: "Gastroenterología",
  tema: "ERGE complicada",
  subtema: "Barrett con displasia de alto grado",
  dificultad: "Avanzada",
  caso: "Mujer de 67 años con esófago de Barrett presenta displasia de alto grado confirmada por un patólogo gastrointestinal experto. La endoscopia de alta definición no muestra invasión evidente ni metástasis conocidas.",
  pregunta: "En un paciente apropiadamente seleccionado, ¿qué estrategia se prefiere para tratar la displasia de alto grado asociada a Barrett sin carcinoma invasor?",
  opciones: [
    "Observación sin vigilancia",
    "Terapia endoscópica de erradicación, con resección de lesiones visibles y ablación del epitelio residual cuando esté indicada",
    "Tratamiento exclusivo con antiácidos",
    "Antibióticos para erradicar Helicobacter pylori",
    "Quimioterapia sistémica como primera elección"
  ],
  respuestaCorrecta: 1,
  explicacion: "La terapia endoscópica de erradicación es una opción preferida para Barrett con displasia de alto grado y para determinados casos de neoplasia intramucosa. Las lesiones visibles deben evaluarse y, por lo general, resecarse endoscópicamente para definir la profundidad y la histología antes de tratar el epitelio residual. La invasión más profunda puede cambiar la estrategia hacia tratamiento quirúrgico u oncológico.",
  perlaENARM: "Displasia de alto grado en Barrett: confirmar histología y valorar terapia endoscópica de erradicación en un centro experto. Las lesiones visibles suelen requerir resección antes de la ablación.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente y la disponibilidad de terapia endoscópica avanzada en el centro de referencia.",
    internacional: "ASGE Guideline on Endoscopic Eradication Therapy for Barrett's Esophagus-Associated Dysplasia and Intramucosal Cancer."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. Endoscopic eradication therapy for patients with Barrett's esophagus-associated dysplasia and intramucosal cancer. Gastrointest Endosc. 2018;87:907-931.e9."
  ]
},
{
  id: "GASTRO-326",
  especialidad: "Gastroenterología",
  tema: "ERGE complicada",
  subtema: "Adenocarcinoma esofágico asociado a Barrett",
  dificultad: "Avanzada",
  caso: "Hombre de 69 años con obesidad y ERGE crónica consulta por disfagia progresiva, pérdida ponderal y anemia. La endoscopia muestra una lesión ulcerada en el esófago distal; las biopsias confirman adenocarcinoma.",
  pregunta: "¿Cuál es el siguiente paso para definir la estrategia terapéutica?",
  opciones: [
    "Indicar tratamiento empírico con IBP y diferir la estadificación",
    "Iniciar ablación del segmento de Barrett sin estudiar el tumor",
    "Realizar estadificación oncológica con imagen y evaluación locorregional según el caso, para decidir tratamiento multidisciplinario",
    "Indicar vigilancia endoscópica anual como si fuera Barrett sin displasia",
    "Tratar únicamente con antiácidos"
  ],
  respuestaCorrecta: 2,
  explicacion: "Una vez confirmado el adenocarcinoma, la conducta depende de la extensión locorregional y de la presencia de enfermedad metastásica. La estadificación puede incluir tomografía, PET-TC en casos seleccionados y ultrasonido endoscópico cuando aporte información útil. La decisión terapéutica debe ser multidisciplinaria y distinguir enfermedad superficial, localmente avanzada y metastásica.",
  perlaENARM: "Disfagia progresiva, pérdida de peso y anemia son datos de alarma. Ante cáncer confirmado, primero se estadifica; la terapia depende de la profundidad de invasión y de la extensión tumoral.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de cáncer de esófago y el protocolo oncológico institucional.",
    internacional: "Guías oncológicas internacionales vigentes para adenocarcinoma esofágico; ACG Guideline for GERD."
  },
  bibliografia: [
    "Katz PO, et al. Am J Gastroenterol. 2022;117:27-56.",
    "Consultar la versión vigente de la guía oncológica institucional para estadificación y tratamiento."
  ]
},
{
  id: "GASTRO-327",
  especialidad: "Gastroenterología",
  tema: "ERGE complicada",
  subtema: "ERGE refractaria al tratamiento",
  dificultad: "Avanzada",
  caso: "Hombre de 46 años con pirosis persistente pese a referir uso diario de omeprazol. No se ha corroborado el horario de administración ni la adherencia. No presenta pérdida de peso, disfagia ni hemorragia digestiva.",
  pregunta: "¿Cuál es el primer paso antes de etiquetar el cuadro como ERGE refractaria?",
  opciones: [
    "Indicar cirugía antirreflujo de inmediato",
    "Verificar adherencia, administración correcta del IBP antes de los alimentos y optimizar el tratamiento",
    "Solicitar manometría como único estudio inicial en todos los casos",
    "Iniciar tratamiento oncológico empírico",
    "Suspender el IBP y asumir un trastorno funcional"
  ],
  respuestaCorrecta: 1,
  explicacion: "La persistencia de síntomas no demuestra por sí sola reflujo patológico refractario. Primero se revisan adherencia, horario de administración y optimización del IBP. Si persisten los síntomas, se reevalúa el diagnóstico y se seleccionan estudios objetivos —monitorización de reflujo y, según la indicación, endoscopia o manometría— para distinguir reflujo persistente de pirosis funcional u otros trastornos.",
  perlaENARM: "Antes de escalar el tratamiento de una ERGE aparentemente refractaria, confirma que el IBP se toma correctamente, habitualmente 30–60 minutos antes de una comida.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de ERGE para el abordaje de síntomas persistentes.",
    internacional: "ACG Clinical Guideline for the Diagnosis and Management of GERD, 2022."
  },
  bibliografia: [
    "Katz PO, et al. Am J Gastroenterol. 2022;117:27-56."
  ]
},
{
  id: "GASTRO-328",
  especialidad: "Gastroenterología",
  tema: "ERGE complicada",
  subtema: "Estudio de ERGE persistente con diagnóstico no demostrado",
  dificultad: "Avanzada",
  caso: "Mujer de 39 años con pirosis persistente a pesar de un ensayo terapéutico correctamente optimizado. Nunca ha tenido evidencia endoscópica concluyente de ERGE y no presenta esofagitis erosiva grave ni Barrett conocido.",
  pregunta: "¿Qué estudio permite establecer objetivamente la presencia de reflujo patológico cuando el diagnóstico de ERGE aún no está demostrado?",
  opciones: [
    "Manometría esofágica aislada como prueba confirmatoria de ERGE",
    "Monitorización ambulatoria de reflujo sin tratamiento antisecretor, según disponibilidad y contexto clínico",
    "Radiografía simple de tórax",
    "Prueba terapéutica indefinida con IBP sin reevaluación",
    "Biopsia gástrica para Helicobacter pylori como prueba confirmatoria"
  ],
  respuestaCorrecta: 1,
  explicacion: "Cuando la ERGE no está demostrada objetivamente, la monitorización ambulatoria del reflujo fuera de tratamiento antisecretor puede confirmar o excluir exposición ácida patológica. En pacientes con ERGE ya demostrada y síntomas persistentes pese a tratamiento optimizado, puede indicarse monitorización con impedancia-pH durante tratamiento, de acuerdo con la pregunta clínica. La manometría evalúa motilidad y ayuda en situaciones específicas, pero no confirma por sí sola ERGE.",
  perlaENARM: "ERGE no demostrada: monitorización de reflujo fuera de IBP. ERGE previamente demostrada con síntomas persistentes bajo tratamiento optimizado: considerar impedancia-pH bajo tratamiento.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente y la disponibilidad local de monitorización ambulatoria de reflujo.",
    internacional: "ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease, 2022."
  },
  bibliografia: [
    "Katz PO, et al. Am J Gastroenterol. 2022;117:27-56."
  ]
},
{
  id: "GASTRO-329",
  especialidad: "Gastroenterología",
  tema: "ERGE complicada",
  subtema: "Indicaciones de cirugía antirreflujo",
  dificultad: "Avanzada",
  caso: "Hombre de 52 años con regurgitación persistente, hernia hiatal y exposición ácida patológica documentada. La evaluación preoperatoria no identifica una contraindicación mayor y se considera una intervención antirreflujo.",
  pregunta: "¿Cuál es el principio fundamental antes de indicar cirugía antirreflujo?",
  opciones: [
    "La presencia aislada de pirosis siempre es suficiente",
    "La cirugía se indica sin comprobar el diagnóstico ni estudiar la motilidad",
    "Debe existir una indicación clínica apropiada, evidencia objetiva de ERGE y evaluación preoperatoria pertinente, incluida la motilidad esofágica",
    "La cirugía elimina la necesidad de cualquier seguimiento",
    "La cirugía está contraindicada en todos los pacientes con hernia hiatal"
  ],
  respuestaCorrecta: 2,
  explicacion: "La cirugía antirreflujo puede beneficiar a pacientes seleccionados con ERGE objetivamente demostrada, particularmente cuando hay regurgitación persistente, hernia hiatal relevante o preferencia por una alternativa al tratamiento médico prolongado. La evaluación preoperatoria debe descartar diagnósticos alternativos y valorar la motilidad esofágica; la manometría ayuda a excluir trastornos importantes que modificarían el procedimiento o su conveniencia.",
  perlaENARM: "No indicar funduplicatura únicamente por síntomas. Se requiere selección adecuada, evidencia objetiva de ERGE y evaluación preoperatoria; la manometría es importante antes de la cirugía.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente y los criterios del equipo de cirugía esofagogástrica.",
    internacional: "ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease, 2022."
  },
  bibliografia: [
    "Katz PO, et al. Am J Gastroenterol. 2022;117:27-56."
  ]
},
{
  id: "GASTRO-330",
  especialidad: "Gastroenterología",
  tema: "ERGE complicada",
  subtema: "Datos de alarma y endoscopia",
  dificultad: "Intermedia",
  caso: "Mujer de 63 años con pirosis de varios años de evolución presenta ahora disfagia progresiva, pérdida involuntaria de 7 kg y anemia ferropénica. No ha recibido una endoscopia previa.",
  pregunta: "¿Cuál es la conducta diagnóstica inicial más apropiada?",
  opciones: [
    "Aumentar el IBP y reevaluar en seis meses sin estudios",
    "Indicar únicamente cambios dietéticos",
    "Realizar endoscopia digestiva alta de forma prioritaria para investigar una lesión estructural o neoplasia",
    "Diagnosticar ERGE no complicada por los antecedentes de pirosis",
    "Solicitar exclusivamente una prueba de aliento para Helicobacter pylori"
  ],
  respuestaCorrecta: 2,
  explicacion: "La disfagia, la pérdida ponderal involuntaria y la anemia son datos de alarma que requieren evaluación endoscópica para identificar estenosis, esofagitis grave, úlcera o neoplasia. Aunque la ERGE puede coexistir, no debe atribuirse automáticamente a ella la aparición de síntomas nuevos o progresivos.",
  perlaENARM: "Disfagia, sangrado digestivo, anemia, pérdida de peso y vómitos persistentes son datos de alarma. No retrases la endoscopia con ensayos empíricos prolongados cuando existen estos hallazgos.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de ERGE y los criterios institucionales de endoscopia prioritaria.",
    internacional: "ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease, 2022."
  },
  bibliografia: [
    "Katz PO, et al. Am J Gastroenterol. 2022;117:27-56."
  ]
},

{
  id: "GASTRO-331",
  especialidad: "Gastroenterología",
  tema: "Hemorragia gastrointestinal alta",
  subtema: "Presentación clínica",
  dificultad: "Baja",
  caso: "Hombre de 58 años presenta vómito con sangre roja y mareo después de varios días de dolor epigástrico.",
  pregunta: "¿Cómo se denomina la expulsión de sangre mediante el vómito?",
  opciones: [
    "Hematoquecia",
    "Hematemesis",
    "Esteatorrea",
    "Disfagia",
    "Tenesmo rectal"
  ],
  respuestaCorrecta: 1,
  explicacion: "La hematemesis es la expulsión de sangre mediante el vómito y orienta a una hemorragia gastrointestinal alta. La evaluación inicial debe priorizar el estado hemodinámico y la estabilización del paciente.",
  perlaENARM: "Hematemesis y melena son manifestaciones clásicas de hemorragia digestiva alta.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de hemorragia gastrointestinal alta.",
    internacional: "ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding, 2021."
  },
  bibliografia: [
    "Laine L, et al. ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. Am J Gastroenterol. 2021;116:899-917."
  ]
},
{
  id: "GASTRO-332",
  especialidad: "Gastroenterología",
  tema: "Hemorragia gastrointestinal baja",
  subtema: "Hematoquecia",
  dificultad: "Baja",
  caso: "Hombre de 70 años presenta evacuaciones con sangre roja brillante, sin vómito con sangre.",
  pregunta: "¿Cómo se denomina la expulsión de sangre roja por el recto?",
  opciones: [
    "Hematemesis",
    "Melena",
    "Hematoquecia",
    "Acolia",
    "Coluria"
  ],
  respuestaCorrecta: 2,
  explicacion: "La hematoquecia consiste en la expulsión de sangre roja o rojo oscuro por el recto. Suele relacionarse con hemorragia gastrointestinal baja, aunque una hemorragia alta abundante también puede producirla.",
  perlaENARM: "La hematoquecia suele sugerir sangrado bajo, pero si existe inestabilidad hemodinámica debe considerarse también una fuente alta.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de hemorragia gastrointestinal baja.",
    internacional: "ACG Clinical Guideline: Management of Patients With Acute Lower Gastrointestinal Bleeding, 2023."
  },
  bibliografia: [
    "Sengupta N, et al. Management of Patients With Acute Lower Gastrointestinal Bleeding. Am J Gastroenterol. 2023."
  ]
},
{
  id: "GASTRO-333",
  especialidad: "Gastroenterología",
  tema: "Úlcera péptica",
  subtema: "Etiología",
  dificultad: "Baja",
  caso: "Mujer de 45 años presenta dolor epigástrico y una endoscopia compatible con úlcera péptica. No utiliza antiinflamatorios de manera habitual.",
  pregunta: "¿Qué microorganismo se asocia clásicamente con la enfermedad ulcerosa péptica?",
  opciones: [
    "Escherichia coli",
    "Helicobacter pylori",
    "Clostridioides difficile",
    "Salmonella Typhi",
    "Candida albicans"
  ],
  respuestaCorrecta: 1,
  explicacion: "Helicobacter pylori es una causa importante de úlcera péptica. Los antiinflamatorios no esteroideos también son una causa relevante. Identificar la etiología permite seleccionar el tratamiento y prevenir recurrencias.",
  perlaENARM: "Ante una úlcera péptica, investigar H. pylori y el uso de AINE.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente para infección por H. pylori y enfermedad ulcerosa péptica.",
    internacional: "ACG Clinical Guideline: Treatment of Helicobacter pylori Infection, 2024."
  },
  bibliografia: [
    "Chey WD, et al. ACG Clinical Guideline: Treatment of Helicobacter pylori Infection. Am J Gastroenterol. 2024."
  ]
},
{
  id: "GASTRO-334",
  especialidad: "Gastroenterología",
  tema: "ERGE",
  subtema: "Manifestación clínica típica",
  dificultad: "Baja",
  caso: "Hombre de 35 años presenta ardor retroesternal después de comer, que empeora al acostarse. En ocasiones percibe que el contenido gástrico regresa a la boca.",
  pregunta: "¿Cuál es el síntoma típico de la enfermedad por reflujo gastroesofágico?",
  opciones: [
    "Pirosis",
    "Hemoptisis",
    "Disuria",
    "Ictericia",
    "Artritis"
  ],
  respuestaCorrecta: 0,
  explicacion: "La pirosis es una sensación de ardor retroesternal y constituye una manifestación típica de ERGE. La regurgitación también es característica.",
  perlaENARM: "Pirosis y regurgitación son los síntomas típicos de ERGE.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de ERGE.",
    internacional: "ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease, 2022."
  },
  bibliografia: [
    "Katz PO, et al. ACG Clinical Guideline for the Diagnosis and Management of Gastroesophageal Reflux Disease. Am J Gastroenterol. 2022;117:27-56."
  ]
},
{
  id: "GASTRO-335",
  especialidad: "Gastroenterología",
  tema: "Gastritis",
  subtema: "Lesión por antiinflamatorios",
  dificultad: "Baja",
  caso: "Mujer de 50 años presenta dispepsia y dolor epigástrico. Refiere consumo frecuente de ibuprofeno por dolor articular.",
  pregunta: "¿Qué mecanismo explica el daño de la mucosa gástrica asociado con los AINE?",
  opciones: [
    "Aumento de la producción de moco protector",
    "Inhibición de la síntesis de prostaglandinas protectoras",
    "Aumento de la absorción intestinal de hierro",
    "Estimulación de la secreción de insulina",
    "Disminución de la motilidad del esófago como único mecanismo"
  ],
  respuestaCorrecta: 1,
  explicacion: "Los AINE inhiben la ciclooxigenasa y disminuyen la síntesis de prostaglandinas que contribuyen a proteger la mucosa gástrica. Esto favorece erosiones, úlceras y hemorragia gastrointestinal.",
  perlaENARM: "H. pylori y AINE son causas importantes de úlcera péptica.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de dispepsia y enfermedad ulcerosa péptica.",
    internacional: "ACG Clinical Guideline: Treatment of Helicobacter pylori Infection, 2024."
  },
  bibliografia: [
    "Chey WD, et al. ACG Clinical Guideline: Treatment of Helicobacter pylori Infection. Am J Gastroenterol. 2024."
  ]
},
{
  id: "GASTRO-336",
  especialidad: "Gastroenterología",
  tema: "Hepatitis viral",
  subtema: "Hepatitis A",
  dificultad: "Baja",
  caso: "Niño de 9 años presenta malestar general, náuseas e ictericia después de consumir agua posiblemente contaminada.",
  pregunta: "¿Cuál es la vía típica de transmisión de la hepatitis A?",
  opciones: [
    "Picadura de mosquito",
    "Vía fecal-oral",
    "Transmisión exclusivamente genética",
    "Inhalación de polvo",
    "Contacto con polen"
  ],
  respuestaCorrecta: 1,
  explicacion: "El virus de la hepatitis A se transmite principalmente por vía fecal-oral, mediante agua o alimentos contaminados y contacto estrecho. La infección no produce hepatitis crónica.",
  perlaENARM: "Hepatitis A: transmisión fecal-oral y ausencia de infección crónica.",
  gpc: {
    mexico: "Verificar los lineamientos mexicanos vigentes de hepatitis viral y vacunación.",
    internacional: "Centers for Disease Control and Prevention. Clinical Overview of Hepatitis A."
  },
  bibliografia: [
    "Centers for Disease Control and Prevention. Hepatitis A."
  ]
},
{
  id: "GASTRO-337",
  especialidad: "Gastroenterología",
  tema: "Cirrosis",
  subtema: "Definición",
  dificultad: "Baja",
  caso: "Hombre de 60 años con hepatopatía crónica presenta hígado nodular y alteración de la arquitectura hepática.",
  pregunta: "¿Qué característica define fundamentalmente la cirrosis?",
  opciones: [
    "Inflamación gástrica aislada",
    "Fibrosis hepática difusa con nódulos regenerativos y distorsión arquitectónica",
    "Inflamación exclusiva del colon",
    "Obstrucción del apéndice",
    "Cálculos limitados a la vesícula"
  ],
  respuestaCorrecta: 1,
  explicacion: "La cirrosis es una etapa avanzada de enfermedad hepática crónica caracterizada por fibrosis y nódulos regenerativos que alteran la arquitectura normal del hígado.",
  perlaENARM: "La cirrosis puede complicarse con hipertensión portal, ascitis, hemorragia variceal y encefalopatía hepática.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de cirrosis hepática.",
    internacional: "EASL Clinical Practice Guidelines on decompensated cirrhosis."
  },
  bibliografia: [
    "European Association for the Study of the Liver. Clinical Practice Guidelines on decompensated cirrhosis."
  ]
},
{
  id: "GASTRO-338",
  especialidad: "Gastroenterología",
  tema: "Hipertensión portal",
  subtema: "Formación de várices esofágicas",
  dificultad: "Baja",
  caso: "Paciente con cirrosis presenta hematemesis abundante. La endoscopia identifica várices esofágicas sangrantes.",
  pregunta: "¿Qué alteración fisiopatológica favorece la formación de várices esofágicas en la cirrosis?",
  opciones: [
    "Hipertensión portal",
    "Hipoglucemia aislada",
    "Hipertensión arterial sistémica como único mecanismo",
    "Hipotiroidismo",
    "Obstrucción del colon"
  ],
  respuestaCorrecta: 0,
  explicacion: "El aumento de la resistencia al flujo portal favorece la formación de circulación colateral portosistémica, incluidas las várices esofágicas. Su ruptura puede producir hemorragia potencialmente mortal.",
  perlaENARM: "Cirrosis más hematemesis: sospechar hemorragia variceal y estabilizar al paciente de inmediato.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de hipertensión portal y hemorragia variceal.",
    internacional: "Baveno VII Consensus, 2022."
  },
  bibliografia: [
    "de Franchis R, et al. Baveno VII – Renewing consensus in portal hypertension. J Hepatol. 2022;76:959-974."
  ]
},
{
  id: "GASTRO-339",
  especialidad: "Gastroenterología",
  tema: "Ascitis",
  subtema: "Manifestaciones clínicas",
  dificultad: "Baja",
  caso: "Hombre con cirrosis presenta aumento progresivo del perímetro abdominal y matidez cambiante a la percusión.",
  pregunta: "¿Qué complicación explica mejor estos hallazgos?",
  opciones: [
    "Ascitis",
    "Apendicitis",
    "Hernia hiatal",
    "Disfagia",
    "Pancreatitis crónica exclusivamente"
  ],
  respuestaCorrecta: 0,
  explicacion: "La ascitis es la acumulación de líquido en la cavidad peritoneal. En pacientes con cirrosis suele relacionarse con hipertensión portal y retención renal de sodio y agua.",
  perlaENARM: "La ascitis de nueva aparición requiere evaluación etiológica y suele ameritar paracentesis diagnóstica.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de cirrosis y ascitis.",
    internacional: "AASLD Practice Guidance on ascites, spontaneous bacterial peritonitis and hepatorenal syndrome."
  },
  bibliografia: [
    "AASLD. Practice Guidance on ascites, spontaneous bacterial peritonitis and hepatorenal syndrome."
  ]
},
{
  id: "GASTRO-340",
  especialidad: "Gastroenterología",
  tema: "Peritonitis bacteriana espontánea",
  subtema: "Criterio diagnóstico",
  dificultad: "Baja",
  caso: "Paciente con cirrosis y ascitis ingresa por fiebre y dolor abdominal. Se realiza paracentesis diagnóstica.",
  pregunta: "¿Qué recuento de polimorfonucleares en líquido ascítico apoya el diagnóstico de peritonitis bacteriana espontánea?",
  opciones: [
    "≥250 células/mm³",
    "≥10 células/mm³",
    "≥25 células/mm³",
    "≥50 células/mm³",
    "Solo un cultivo positivo, sin considerar el recuento celular"
  ],
  respuestaCorrecta: 0,
  explicacion: "Un recuento de polimorfonucleares de al menos 250 células/mm³ en líquido ascítico establece el criterio diagnóstico habitual, incluso cuando el cultivo es negativo.",
  perlaENARM: "Ascitis más PMN ≥250 células/mm³: tratar como peritonitis bacteriana espontánea.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de infección del líquido ascítico.",
    internacional: "AASLD Practice Guidance on ascites and spontaneous bacterial peritonitis."
  },
  bibliografia: [
    "AASLD. Practice Guidance on ascites, spontaneous bacterial peritonitis and hepatorenal syndrome."
  ]
},
{
  id: "GASTRO-341",
  especialidad: "Gastroenterología",
  tema: "Encefalopatía hepática",
  subtema: "Manifestaciones clínicas",
  dificultad: "Baja",
  caso: "Hombre con cirrosis presenta desorientación, inversión del ciclo sueño-vigilia y asterixis.",
  pregunta: "¿Qué complicación debe sospecharse?",
  opciones: [
    "Encefalopatía hepática",
    "Colecistitis aguda",
    "ERGE no complicada",
    "Hernia inguinal",
    "Síndrome de intestino irritable"
  ],
  respuestaCorrecta: 0,
  explicacion: "La encefalopatía hepática produce alteraciones neuropsiquiátricas en el contexto de insuficiencia hepática o derivación portosistémica. El diagnóstico es clínico y requiere buscar factores precipitantes.",
  perlaENARM: "En cirrosis con confusión, buscar infección, hemorragia digestiva, estreñimiento y alteraciones electrolíticas.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de encefalopatía hepática.",
    internacional: "AASLD/EASL Practice Guideline on Hepatic Encephalopathy."
  },
  bibliografia: [
    "Vilstrup H, et al. Hepatic Encephalopathy in Chronic Liver Disease: 2014 Practice Guideline by AASLD and EASL. Hepatology. 2014."
  ]
},
{
  id: "GASTRO-342",
  especialidad: "Gastroenterología",
  tema: "Síndrome hepatorrenal",
  subtema: "Concepto",
  dificultad: "Baja",
  caso: "Paciente con cirrosis avanzada y ascitis desarrolla deterioro de la función renal sin una causa alternativa evidente.",
  pregunta: "¿Qué describe mejor el síndrome hepatorrenal?",
  opciones: [
    "Disfunción renal asociada con enfermedad hepática avanzada y alteraciones circulatorias",
    "Infección aislada de la vejiga",
    "Obstrucción del esófago",
    "Inflamación exclusiva de la vesícula",
    "Hipersecreción de ácido gástrico"
  ],
  respuestaCorrecta: 0,
  explicacion: "El síndrome hepatorrenal es una forma de disfunción renal asociada con enfermedad hepática avanzada y alteraciones hemodinámicas. Su diagnóstico requiere evaluar otras causas de lesión renal.",
  perlaENARM: "Cirrosis descompensada con deterioro renal requiere buscar hipovolemia, infección, fármacos nefrotóxicos y otras causas.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de cirrosis y lesión renal aguda.",
    internacional: "AASLD Practice Guidance on ascites and hepatorenal syndrome."
  },
  bibliografia: [
    "AASLD. Practice Guidance on ascites, spontaneous bacterial peritonitis and hepatorenal syndrome."
  ]
},
{
  id: "GASTRO-343",
  especialidad: "Gastroenterología",
  tema: "Pancreatitis aguda",
  subtema: "Criterios diagnósticos",
  dificultad: "Baja",
  caso: "Mujer de 42 años presenta dolor epigástrico intenso irradiado a la espalda y lipasa sérica cuatro veces por encima del límite superior normal.",
  pregunta: "¿Cuál es el diagnóstico más probable?",
  opciones: [
    "Pancreatitis aguda",
    "Apendicitis crónica",
    "ERGE no complicada",
    "Colitis ulcerosa",
    "Gastritis superficial"
  ],
  respuestaCorrecta: 0,
  explicacion: "El diagnóstico de pancreatitis aguda se establece generalmente con dos de tres criterios: dolor característico, lipasa o amilasa al menos tres veces por encima del límite superior normal e imagen compatible.",
  perlaENARM: "Se requieren dos de tres criterios diagnósticos; no todos los pacientes necesitan tomografía para confirmar el cuadro.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de pancreatitis aguda.",
    internacional: "ACG Clinical Guideline: Management of Acute Pancreatitis, 2024."
  },
  bibliografia: [
    "Tenner S, et al. American College of Gastroenterology Guidelines: Management of Acute Pancreatitis. Am J Gastroenterol. 2024."
  ]
},
{
  id: "GASTRO-344",
  especialidad: "Gastroenterología",
  tema: "Colecistitis aguda",
  subtema: "Presentación clínica",
  dificultad: "Baja",
  caso: "Mujer de 38 años presenta dolor persistente en hipocondrio derecho, fiebre y signo de Murphy positivo.",
  pregunta: "¿Cuál es el diagnóstico más probable?",
  opciones: [
    "Colecistitis aguda",
    "Gastritis crónica",
    "Síndrome de intestino irritable",
    "Hepatitis A necesariamente",
    "Enfermedad hemorroidal"
  ],
  respuestaCorrecta: 0,
  explicacion: "El dolor en hipocondrio derecho, la fiebre y el signo de Murphy orientan a colecistitis aguda. El ultrasonido abdominal suele ser el estudio inicial de imagen.",
  perlaENARM: "Dolor en hipocondrio derecho más Murphy positivo: sospechar colecistitis.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de colecistitis aguda.",
    internacional: "Tokyo Guidelines 2018."
  },
  bibliografia: [
    "Yokoe M, et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholecystitis. J Hepatobiliary Pancreat Sci. 2018."
  ]
},
{
  id: "GASTRO-345",
  especialidad: "Gastroenterología",
  tema: "Colangitis",
  subtema: "Tríada de Charcot",
  dificultad: "Baja",
  caso: "Hombre de 67 años presenta fiebre, ictericia y dolor en hipocondrio derecho. La imagen sugiere obstrucción de la vía biliar.",
  pregunta: "¿Qué síndrome clínico describe esta combinación?",
  opciones: [
    "Tríada de Charcot",
    "Tríada de Beck",
    "Síndrome nefrótico",
    "Tríada de Virchow",
    "Síndrome de Mallory-Weiss"
  ],
  respuestaCorrecta: 0,
  explicacion: "La tríada de Charcot consiste en fiebre, dolor en hipocondrio derecho e ictericia. Es característica de colangitis aguda, que puede evolucionar a sepsis.",
  perlaENARM: "Colangitis: antibióticos, soporte y valoración oportuna del drenaje biliar.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de colangitis aguda.",
    internacional: "Tokyo Guidelines 2018."
  },
  bibliografia: [
    "Kiriyama S, et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholangitis. J Hepatobiliary Pancreat Sci. 2018."
  ]
},
{
  id: "GASTRO-346",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Manifestaciones clínicas",
  dificultad: "Baja",
  caso: "Paciente con cólico biliar presenta ictericia y elevación de bilirrubina directa. El ultrasonido sugiere dilatación de la vía biliar.",
  pregunta: "¿Qué diagnóstico debe considerarse?",
  opciones: [
    "Coledocolitiasis",
    "Hemorroides",
    "ERGE",
    "Apendicitis",
    "Enfermedad celíaca"
  ],
  respuestaCorrecta: 0,
  explicacion: "La coledocolitiasis consiste en cálculos dentro del colédoco y puede producir obstrucción biliar, ictericia y alteraciones del perfil hepático.",
  perlaENARM: "Ictericia obstructiva y dilatación de la vía biliar orientan a obstrucción; la probabilidad clínica determina los estudios siguientes.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de coledocolitiasis.",
    internacional: "ASGE Guideline on the Role of Endoscopy in the Evaluation and Management of Choledocholithiasis."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. Guideline on the role of endoscopy in the evaluation and management of choledocholithiasis. Gastrointest Endosc. 2019."
  ]
},
{
  id: "GASTRO-347",
  especialidad: "Gastroenterología",
  tema: "Abdomen agudo",
  subtema: "Irritación peritoneal",
  dificultad: "Baja",
  caso: "Hombre de 45 años presenta dolor abdominal intenso, defensa involuntaria y dolor al retirar bruscamente la mano después de palpar el abdomen.",
  pregunta: "¿Qué sugieren estos hallazgos?",
  opciones: [
    "Irritación peritoneal",
    "Dispepsia funcional sin complicaciones",
    "Estreñimiento simple necesariamente",
    "ERGE",
    "Intolerancia a la lactosa"
  ],
  respuestaCorrecta: 0,
  explicacion: "La defensa involuntaria y el dolor de rebote sugieren irritación peritoneal. El paciente requiere evaluación urgente para identificar causas que pueden necesitar tratamiento quirúrgico.",
  perlaENARM: "Dolor abdominal intenso con signos peritoneales es una urgencia hasta demostrar lo contrario.",
  gpc: {
    mexico: "Verificar protocolos mexicanos vigentes de urgencias y abdomen agudo.",
    internacional: "World Society of Emergency Surgery. Guidelines for emergency abdominal conditions."
  },
  bibliografia: [
    "World Society of Emergency Surgery. Guidelines for emergency abdominal conditions."
  ]
},
{
  id: "GASTRO-348",
  especialidad: "Gastroenterología",
  tema: "Apendicitis",
  subtema: "Migración del dolor",
  dificultad: "Baja",
  caso: "Joven de 19 años presenta dolor periumbilical que, después de varias horas, se localiza en la fosa iliaca derecha y se acompaña de náuseas.",
  pregunta: "¿Cuál es el diagnóstico más probable?",
  opciones: [
    "Apendicitis aguda",
    "Colecistitis aguda",
    "ERGE",
    "Hepatitis crónica",
    "Hernia hiatal"
  ],
  respuestaCorrecta: 0,
  explicacion: "La migración del dolor desde la región periumbilical hacia la fosa iliaca derecha es una presentación clásica de apendicitis aguda.",
  perlaENARM: "La migración del dolor a la fosa iliaca derecha es un dato clásico de apendicitis.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de apendicitis aguda.",
    internacional: "WSES Jerusalem Guidelines for Acute Appendicitis."
  },
  bibliografia: [
    "Di Saverio S, et al. Diagnosis and treatment of acute appendicitis: 2020 update of the WSES Jerusalem guidelines. World J Emerg Surg. 2020;15:27."
  ]
},
{
  id: "GASTRO-349",
  especialidad: "Gastroenterología",
  tema: "Diverticulitis",
  subtema: "Localización típica",
  dificultad: "Baja",
  caso: "Hombre de 62 años presenta dolor en cuadrante inferior izquierdo, fiebre y sensibilidad localizada a la palpación.",
  pregunta: "¿Qué diagnóstico es compatible con este cuadro?",
  opciones: [
    "Diverticulitis aguda",
    "Apendicitis típica",
    "Hepatitis viral aguda",
    "ERGE",
    "Colangitis"
  ],
  respuestaCorrecta: 0,
  explicacion: "La diverticulitis suele presentarse con dolor en cuadrante inferior izquierdo, fiebre y cambios en el hábito intestinal. La tomografía puede confirmar el diagnóstico y evaluar complicaciones cuando está indicada.",
  perlaENARM: "Dolor en fosa iliaca izquierda y fiebre en un adulto: considerar diverticulitis.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de diverticulitis.",
    internacional: "AGA Clinical Practice Update on Medical Management of Colonic Diverticulitis, 2021."
  },
  bibliografia: [
    "Peery AF, et al. AGA Clinical Practice Update on Medical Management of Colonic Diverticulitis. Gastroenterology. 2021."
  ]
},
{
  id: "GASTRO-350",
  especialidad: "Gastroenterología",
  tema: "Obstrucción intestinal",
  subtema: "Manifestaciones clínicas",
  dificultad: "Baja",
  caso: "Paciente con antecedente de cirugía abdominal presenta distensión, vómitos, dolor tipo cólico y ausencia de evacuaciones y gases.",
  pregunta: "¿Qué diagnóstico debe sospecharse?",
  opciones: [
    "Obstrucción intestinal",
    "ERGE no complicada",
    "Hepatitis A",
    "Gastritis superficial",
    "Hemorroides"
  ],
  respuestaCorrecta: 0,
  explicacion: "La distensión, los vómitos, el dolor cólico y la obstipación son manifestaciones típicas de obstrucción intestinal. Las adherencias son una causa frecuente después de cirugía abdominal.",
  perlaENARM: "Obstrucción intestinal con dolor continuo, fiebre o signos peritoneales obliga a descartar isquemia o perforación.",
  gpc: {
    mexico: "Verificar protocolos mexicanos vigentes de urgencias quirúrgicas y obstrucción intestinal.",
    internacional: "World Society of Emergency Surgery. Guidelines on small bowel obstruction."
  },
  bibliografia: [
    "World Society of Emergency Surgery. Guidelines on small bowel obstruction."
  ]
},
{
  id: "GASTRO-351",
  especialidad: "Gastroenterología",
  tema: "Enfermedad inflamatoria intestinal",
  subtema: "Colitis ulcerosa",
  dificultad: "Baja",
  caso: "Mujer de 27 años presenta diarrea sanguinolenta recurrente, urgencia evacuatoria y tenesmo.",
  pregunta: "¿Qué enfermedad inflamatoria intestinal se caracteriza típicamente por afectación continua de la mucosa del colon desde el recto?",
  opciones: [
    "Colitis ulcerosa",
    "Enfermedad de Wilson",
    "Hepatitis autoinmune",
    "Pancreatitis aguda",
    "Coledocolitiasis"
  ],
  respuestaCorrecta: 0,
  explicacion: "La colitis ulcerosa afecta el colon de forma continua, habitualmente comenzando en el recto, y compromete principalmente la mucosa.",
  perlaENARM: "Colitis ulcerosa: afectación continua del colon y comienzo habitual en el recto.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de enfermedad inflamatoria intestinal.",
    internacional: "ECCO Guidelines on Ulcerative Colitis."
  },
  bibliografia: [
    "European Crohn's and Colitis Organisation. Guidelines on Ulcerative Colitis."
  ]
},
{
  id: "GASTRO-352",
  especialidad: "Gastroenterología",
  tema: "Enfermedad inflamatoria intestinal",
  subtema: "Enfermedad de Crohn",
  dificultad: "Baja",
  caso: "Hombre de 24 años presenta diarrea crónica, dolor abdominal y pérdida de peso. La evaluación identifica inflamación segmentaria que afecta todo el espesor de la pared intestinal.",
  pregunta: "¿Qué característica es típica de la enfermedad de Crohn?",
  opciones: [
    "Inflamación transmural y lesiones discontinuas",
    "Inflamación exclusiva de la mucosa rectal en todos los casos",
    "Afectación únicamente del estómago",
    "Ausencia de inflamación intestinal",
    "Obstrucción exclusiva del colédoco"
  ],
  respuestaCorrecta: 0,
  explicacion: "La enfermedad de Crohn puede afectar cualquier segmento del tubo digestivo y se caracteriza por lesiones discontinuas e inflamación transmural, que favorece fístulas y estenosis.",
  perlaENARM: "Crohn: lesiones salteadas y compromiso transmural; puede afectar desde la boca hasta el ano.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de enfermedad de Crohn.",
    internacional: "ECCO Guidelines on Crohn's Disease."
  },
  bibliografia: [
    "European Crohn's and Colitis Organisation. Guidelines on Crohn's Disease."
  ]
},
{
  id: "GASTRO-353",
  especialidad: "Gastroenterología",
  tema: "Síndrome de intestino irritable",
  subtema: "Características clínicas",
  dificultad: "Baja",
  caso: "Mujer de 30 años presenta dolor abdominal recurrente relacionado con la defecación y cambios en la frecuencia y consistencia de las evacuaciones. No tiene datos de alarma.",
  pregunta: "¿Cuál es el diagnóstico funcional más probable?",
  opciones: [
    "Síndrome de intestino irritable",
    "Cáncer gástrico confirmado",
    "Peritonitis bacteriana espontánea",
    "Colangitis aguda",
    "Pancreatitis necrosante"
  ],
  respuestaCorrecta: 0,
  explicacion: "El síndrome de intestino irritable se caracteriza por dolor abdominal recurrente asociado con la defecación y cambios en el hábito intestinal. El diagnóstico se basa en criterios clínicos y una evaluación apropiada.",
  perlaENARM: "Dolor abdominal recurrente relacionado con la defecación y cambios del hábito intestinal orienta a intestino irritable.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de síndrome de intestino irritable.",
    internacional: "ACG Clinical Guideline: Management of Irritable Bowel Syndrome, 2021."
  },
  bibliografia: [
    "Lacy BE, et al. ACG Clinical Guideline: Management of Irritable Bowel Syndrome. Am J Gastroenterol. 2021;116:17-44."
  ]
},
{
  id: "GASTRO-354",
  especialidad: "Gastroenterología",
  tema: "Hepatitis autoinmune",
  subtema: "Hallazgos de laboratorio",
  dificultad: "Baja",
  caso: "Mujer de 35 años presenta elevación persistente de aminotransferasas, hipergammaglobulinemia y autoanticuerpos compatibles con hepatitis autoinmune.",
  pregunta: "¿Qué alteración inmunológica es frecuente en esta enfermedad?",
  opciones: [
    "Elevación de IgG",
    "Ausencia obligatoria de inmunoglobulinas",
    "Disminución aislada de troponina",
    "Elevación exclusiva de amilasa",
    "Deficiencia de vitamina C como criterio diagnóstico"
  ],
  respuestaCorrecta: 0,
  explicacion: "La hepatitis autoinmune suele asociarse con elevación de aminotransferasas, aumento de IgG y autoanticuerpos. El diagnóstico integra la clínica, la serología, la exclusión de otras causas y, habitualmente, la histología.",
  perlaENARM: "Hepatitis autoinmune: aminotransferasas elevadas, IgG alta y autoanticuerpos compatibles.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de hepatitis autoinmune.",
    internacional: "EASL Clinical Practice Guidelines on Autoimmune Hepatitis."
  },
  bibliografia: [
    "European Association for the Study of the Liver. Clinical Practice Guidelines on Autoimmune Hepatitis."
  ]
},
{
  id: "GASTRO-355",
  especialidad: "Gastroenterología",
  tema: "Hemocromatosis",
  subtema: "Sobrecarga de hierro",
  dificultad: "Baja",
  caso: "Hombre de 52 años presenta hepatopatía crónica, diabetes y pigmentación cutánea. Los estudios muestran saturación de transferrina elevada.",
  pregunta: "¿Qué alteración caracteriza la hemocromatosis hereditaria?",
  opciones: [
    "Acumulación excesiva de hierro",
    "Deficiencia absoluta de hierro",
    "Acumulación exclusiva de calcio",
    "Déficit aislado de vitamina B12",
    "Pérdida renal de glucosa"
  ],
  respuestaCorrecta: 0,
  explicacion: "La hemocromatosis hereditaria produce absorción excesiva de hierro y depósito progresivo en órganos, especialmente hígado, páncreas y corazón.",
  perlaENARM: "Sobrecarga de hierro más hepatopatía y diabetes sugiere hemocromatosis.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente para sobrecarga de hierro.",
    internacional: "EASL Clinical Practice Guidelines on Haemochromatosis, 2022."
  },
  bibliografia: [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines on Haemochromatosis. J Hepatol. 2022."
  ]
},
{
  id: "GASTRO-356",
  especialidad: "Gastroenterología",
  tema: "Enfermedad de Wilson",
  subtema: "Metabolismo del cobre",
  dificultad: "Baja",
  caso: "Joven de 19 años presenta alteraciones hepáticas y cambios conductuales. La evaluación revela sospecha de acumulación de cobre.",
  pregunta: "¿Qué trastorno metabólico produce la enfermedad de Wilson?",
  opciones: [
    "Acumulación de cobre",
    "Acumulación de hierro por deficiencia de hepcidina en todos los casos",
    "Déficit de sodio",
    "Exceso de vitamina C",
    "Acumulación de bilirrubina exclusivamente por obstrucción"
  ],
  respuestaCorrecta: 0,
  explicacion: "La enfermedad de Wilson es un trastorno hereditario del metabolismo del cobre que puede afectar el hígado y el sistema nervioso central. La evaluación puede incluir ceruloplasmina, cobre urinario y otras pruebas.",
  perlaENARM: "Paciente joven con enfermedad hepática y síntomas neuropsiquiátricos: considerar enfermedad de Wilson.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de enfermedad de Wilson.",
    internacional: "EASL-ERN Clinical Practice Guidelines on Wilson's Disease."
  },
  bibliografia: [
    "European Association for the Study of the Liver. EASL-ERN Clinical Practice Guidelines on Wilson's Disease."
  ]
},
{
  id: "GASTRO-357",
  especialidad: "Gastroenterología",
  tema: "Colangitis biliar primaria",
  subtema: "Perfil bioquímico",
  dificultad: "Baja",
  caso: "Mujer de 54 años presenta prurito crónico y elevación persistente de fosfatasa alcalina. Se detectan anticuerpos antimitocondriales.",
  pregunta: "¿Cuál es el diagnóstico más probable?",
  opciones: [
    "Colangitis biliar primaria",
    "Apendicitis aguda",
    "ERGE",
    "Pancreatitis aguda",
    "Síndrome de intestino irritable"
  ],
  respuestaCorrecta: 0,
  explicacion: "La colangitis biliar primaria es una enfermedad autoinmune de los pequeños conductos biliares intrahepáticos, asociada frecuentemente con colestasis y anticuerpos antimitocondriales.",
  perlaENARM: "Prurito, patrón bioquímico colestásico y anticuerpos antimitocondriales sugieren colangitis biliar primaria.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de colangitis biliar primaria.",
    internacional: "EASL Clinical Practice Guidelines on Primary Biliary Cholangitis."
  },
  bibliografia: [
    "European Association for the Study of the Liver. Clinical Practice Guidelines on Primary Biliary Cholangitis."
  ]
},
{
  id: "GASTRO-358",
  especialidad: "Gastroenterología",
  tema: "Colangitis esclerosante primaria",
  subtema: "Asociación con enfermedad inflamatoria intestinal",
  dificultad: "Baja",
  caso: "Hombre de 37 años con colitis ulcerosa presenta elevación de fosfatasa alcalina y estudios de imagen con estrechamientos y dilataciones multifocales de los conductos biliares.",
  pregunta: "¿Qué diagnóstico debe sospecharse?",
  opciones: [
    "Colangitis esclerosante primaria",
    "Gastritis por AINE",
    "Apendicitis",
    "Hepatitis A exclusivamente",
    "Úlcera duodenal"
  ],
  respuestaCorrecta: 0,
  explicacion: "La colangitis esclerosante primaria produce inflamación y fibrosis de los conductos biliares. Se asocia frecuentemente con enfermedad inflamatoria intestinal, especialmente colitis ulcerosa.",
  perlaENARM: "Colangitis esclerosante primaria y colitis ulcerosa constituyen una asociación clásica.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de colangiopatías.",
    internacional: "EASL Clinical Practice Guidelines on sclerosing cholangitis."
  },
  bibliografia: [
    "European Association for the Study of the Liver. Clinical Practice Guidelines on sclerosing cholangitis."
  ]
},
{
  id: "GASTRO-359",
  especialidad: "Gastroenterología",
  tema: "Cáncer colorrectal",
  subtema: "Datos de alarma",
  dificultad: "Baja",
  caso: "Hombre de 62 años presenta anemia ferropénica, cambio reciente del hábito intestinal y pérdida de peso.",
  pregunta: "¿Qué enfermedad debe descartarse prioritariamente?",
  opciones: [
    "Cáncer colorrectal",
    "ERGE no complicada",
    "Intolerancia a la lactosa exclusivamente",
    "Hemorroides sin evaluación adicional",
    "Gastroenteritis viral autolimitada"
  ],
  respuestaCorrecta: 0,
  explicacion: "La anemia ferropénica y el cambio reciente del hábito intestinal en un adulto mayor son datos de alarma que justifican evaluar una posible neoplasia colorrectal.",
  perlaENARM: "Anemia ferropénica sin explicación en un adulto: investigar pérdida digestiva y neoplasia según el contexto.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de diagnóstico y tratamiento del cáncer colorrectal.",
    internacional: "NCCN Clinical Practice Guidelines in Oncology: Colon Cancer."
  },
  bibliografia: [
    "National Comprehensive Cancer Network. NCCN Clinical Practice Guidelines in Oncology: Colon Cancer."
  ]
},
{
  id: "GASTRO-360",
  especialidad: "Gastroenterología",
  tema: "Cáncer hepatocelular",
  subtema: "Vigilancia en cirrosis",
  dificultad: "Baja",
  caso: "Hombre de 60 años con cirrosis compensada acude a seguimiento sin síntomas nuevos.",
  pregunta: "¿Qué estrategia se utiliza habitualmente para la vigilancia del carcinoma hepatocelular en pacientes con cirrosis que son candidatos a tratamiento?",
  opciones: [
    "Ultrasonido hepático aproximadamente cada seis meses, con o sin alfafetoproteína según la guía",
    "Radiografía de tórax cada semana",
    "Colonoscopia mensual",
    "Amilasa sérica diaria",
    "Endoscopia esofágica diaria"
  ],
  respuestaCorrecta: 0,
  explicacion: "En muchos pacientes con cirrosis que podrían beneficiarse de tratamiento se recomienda vigilancia semestral mediante ultrasonido hepático; algunas guías incorporan alfafetoproteína.",
  perlaENARM: "En pacientes apropiados con cirrosis, recordar vigilancia de carcinoma hepatocelular cada seis meses.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de carcinoma hepatocelular.",
    internacional: "AASLD Practice Guidance on prevention, diagnosis, and treatment of hepatocellular carcinoma."
  },
  bibliografia: [
    "Singal AG, et al. AASLD Practice Guidance on prevention, diagnosis, and treatment of hepatocellular carcinoma. Hepatology."
  ]
},
{
  id: "GASTRO-361",
  especialidad: "Gastroenterología",
  tema: "Cáncer gástrico",
  subtema: "Factor de riesgo",
  dificultad: "Baja",
  caso: "Hombre de 65 años con infección crónica por Helicobacter pylori presenta pérdida de peso y saciedad temprana.",
  pregunta: "¿Cuál es un factor de riesgo reconocido para adenocarcinoma gástrico?",
  opciones: [
    "Infección por Helicobacter pylori",
    "Actividad física regular",
    "Consumo adecuado de frutas",
    "Vacunación contra hepatitis A",
    "Hidratación adecuada"
  ],
  respuestaCorrecta: 0,
  explicacion: "La infección crónica por H. pylori se asocia con gastritis crónica atrófica, metaplasia intestinal y mayor riesgo de cáncer gástrico.",
  perlaENARM: "H. pylori participa en la secuencia de Correa que puede conducir al adenocarcinoma gástrico.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de cáncer gástrico e infección por H. pylori.",
    internacional: "NCI Gastric Cancer Treatment PDQ; NCCN Gastric Cancer."
  },
  bibliografia: [
    "National Cancer Institute. Gastric Cancer Treatment PDQ."
  ]
},
{
  id: "GASTRO-362",
  especialidad: "Gastroenterología",
  tema: "ERGE complicada",
  subtema: "Datos de alarma",
  dificultad: "Baja",
  caso: "Mujer de 59 años con pirosis de larga evolución desarrolla disfagia progresiva y pérdida de peso.",
  pregunta: "¿Cuál es la conducta inicial más apropiada?",
  opciones: [
    "Endoscopia digestiva alta prioritaria",
    "Continuar automedicación sin estudios",
    "Indicar únicamente antiácidos a demanda",
    "Diagnosticar intestino irritable",
    "Solicitar solo una prueba de aliento para H. pylori"
  ],
  respuestaCorrecta: 0,
  explicacion: "La disfagia y la pérdida de peso son datos de alarma. La endoscopia permite investigar estenosis, esofagitis grave y neoplasias.",
  perlaENARM: "ERGE con disfagia o pérdida de peso requiere investigar complicaciones.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de ERGE y disfagia.",
    internacional: "ACG Clinical Guideline for the Diagnosis and Management of GERD, 2022."
  },
  bibliografia: [
    "Katz PO, et al. Am J Gastroenterol. 2022;117:27-56."
  ]
},
{
  id: "GASTRO-363",
  especialidad: "Gastroenterología",
  tema: "Hemorragia gastrointestinal alta",
  subtema: "Melena",
  dificultad: "Baja",
  caso: "Paciente presenta evacuaciones negras, brillantes, pegajosas y de olor intenso.",
  pregunta: "¿Cómo se denomina este hallazgo?",
  opciones: [
    "Melena",
    "Hematoquecia",
    "Acolia",
    "Esteatorrea",
    "Disentería exclusivamente"
  ],
  respuestaCorrecta: 0,
  explicacion: "La melena es la evacuación de heces negras por sangre digerida y suele sugerir una fuente gastrointestinal alta, aunque existen excepciones.",
  perlaENARM: "La melena orienta a sangrado digestivo alto; hierro y bismuto también pueden oscurecer las heces.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de hemorragia digestiva.",
    internacional: "ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding, 2021."
  },
  bibliografia: [
    "Laine L, et al. Am J Gastroenterol. 2021;116:899-917."
  ]
},
{
  id: "GASTRO-364",
  especialidad: "Gastroenterología",
  tema: "Úlcera péptica",
  subtema: "Perforación",
  dificultad: "Baja",
  caso: "Hombre con antecedente de úlcera péptica presenta dolor abdominal súbito, intenso y generalizado, con abdomen rígido.",
  pregunta: "¿Qué complicación debe sospecharse?",
  opciones: [
    "Perforación de úlcera péptica",
    "ERGE no complicada",
    "Síndrome de intestino irritable",
    "Estreñimiento funcional",
    "Hemorroides"
  ],
  respuestaCorrecta: 0,
  explicacion: "El dolor súbito intenso con rigidez abdominal puede indicar perforación de una úlcera y peritonitis. Requiere evaluación y tratamiento de urgencia.",
  perlaENARM: "Dolor súbito más abdomen rígido en paciente con úlcera: sospechar perforación.",
  gpc: {
    mexico: "Verificar protocolos mexicanos vigentes de urgencias quirúrgicas.",
    internacional: "World Society of Emergency Surgery guidelines for perforated and bleeding peptic ulcer."
  },
  bibliografia: [
    "World Society of Emergency Surgery. Guidelines for perforated and bleeding peptic ulcer."
  ]
},
{
  id: "GASTRO-365",
  especialidad: "Gastroenterología",
  tema: "Hepatitis viral",
  subtema: "Prevención de hepatitis B",
  dificultad: "Baja",
  caso: "Paciente pregunta qué medida previene eficazmente la infección por hepatitis B en personas susceptibles.",
  pregunta: "¿Cuál es la principal medida preventiva frente a hepatitis B?",
  opciones: [
    "Vacunación",
    "Evitar todos los lácteos",
    "Consumir antibióticos diariamente",
    "Tomar inhibidores de bomba de protones",
    "Realizar colonoscopia anual"
  ],
  respuestaCorrecta: 0,
  explicacion: "La vacunación es una estrategia fundamental para prevenir la infección por el virus de hepatitis B. También son importantes las medidas para evitar exposición a sangre y fluidos potencialmente infecciosos.",
  perlaENARM: "Hepatitis B: existe vacuna; la hepatitis C no dispone de una vacuna aprobada para uso rutinario.",
  gpc: {
    mexico: "Verificar los esquemas y lineamientos mexicanos vigentes de vacunación contra hepatitis B.",
    internacional: "WHO. Hepatitis B fact sheet and immunization guidance."
  },
  bibliografia: [
    "World Health Organization. Hepatitis B."
  ]
},
{
  id: "GASTRO-366",
  especialidad: "Gastroenterología",
  tema: "Cirrosis",
  subtema: "Datos de descompensación",
  dificultad: "Baja",
  caso: "Hombre con consumo crónico elevado de alcohol presenta arañas vasculares, ascitis y esplenomegalia.",
  pregunta: "¿Qué enfermedad explica mejor el conjunto de hallazgos?",
  opciones: [
    "Cirrosis hepática descompensada",
    "Gastritis aislada",
    "ERGE no complicada",
    "Apendicitis",
    "Enfermedad hemorroidal"
  ],
  respuestaCorrecta: 0,
  explicacion: "Las arañas vasculares, la ascitis y la esplenomegalia pueden aparecer en enfermedad hepática crónica avanzada con hipertensión portal. La ascitis es una manifestación de descompensación.",
  perlaENARM: "La aparición de ascitis en un paciente con cirrosis indica descompensación clínica.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de cirrosis hepática.",
    internacional: "EASL Clinical Practice Guidelines on decompensated cirrhosis."
  },
  bibliografia: [
    "European Association for the Study of the Liver. Clinical Practice Guidelines on decompensated cirrhosis."
  ]
},
{
  id: "GASTRO-367",
  especialidad: "Gastroenterología",
  tema: "Ascitis",
  subtema: "Paracentesis diagnóstica",
  dificultad: "Baja",
  caso: "Paciente hospitalizado con cirrosis presenta ascitis de nueva aparición.",
  pregunta: "¿Qué procedimiento permite analizar directamente el líquido ascítico y buscar infección?",
  opciones: [
    "Paracentesis diagnóstica",
    "Colonoscopia",
    "Broncoscopia",
    "Prueba de esfuerzo",
    "Electroencefalograma"
  ],
  respuestaCorrecta: 0,
  explicacion: "La paracentesis permite medir el recuento celular, cultivar el líquido y calcular el gradiente de albúmina suero-ascitis, entre otros estudios según la indicación.",
  perlaENARM: "Ascitis nueva o ingreso hospitalario por cirrosis con ascitis: considerar paracentesis diagnóstica.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de ascitis.",
    internacional: "AASLD Practice Guidance on ascites."
  },
  bibliografia: [
    "AASLD. Practice Guidance on ascites, spontaneous bacterial peritonitis and hepatorenal syndrome."
  ]
},
{
  id: "GASTRO-368",
  especialidad: "Gastroenterología",
  tema: "Encefalopatía hepática",
  subtema: "Tratamiento inicial",
  dificultad: "Baja",
  caso: "Paciente con cirrosis presenta encefalopatía hepática manifiesta después de un episodio de estreñimiento.",
  pregunta: "¿Qué fármaco se utiliza habitualmente como tratamiento inicial de la encefalopatía hepática manifiesta?",
  opciones: [
    "Lactulosa",
    "Loperamida",
    "Omeprazol como monoterapia",
    "Loperamida más opioides",
    "Ácido acetilsalicílico"
  ],
  respuestaCorrecta: 0,
  explicacion: "La lactulosa es el tratamiento inicial habitual para la encefalopatía hepática manifiesta. También es esencial buscar y corregir factores precipitantes, como estreñimiento, infección o hemorragia digestiva.",
  perlaENARM: "Encefalopatía hepática: lactulosa y corrección del desencadenante.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de encefalopatía hepática.",
    internacional: "AASLD/EASL Practice Guideline on Hepatic Encephalopathy."
  },
  bibliografia: [
    "Vilstrup H, et al. Hepatic Encephalopathy in Chronic Liver Disease. Hepatology. 2014."
  ]
},
{
  id: "GASTRO-369",
  especialidad: "Gastroenterología",
  tema: "Pancreatitis aguda",
  subtema: "Etiología frecuente",
  dificultad: "Baja",
  caso: "Mujer de 48 años con pancreatitis aguda presenta cálculos en la vesícula en el ultrasonido.",
  pregunta: "¿Cuál es una de las causas más frecuentes de pancreatitis aguda?",
  opciones: [
    "Litiasis biliar",
    "Hemorroides",
    "ERGE",
    "Apendicitis crónica",
    "Enfermedad celíaca exclusivamente"
  ],
  respuestaCorrecta: 0,
  explicacion: "La litiasis biliar y el consumo de alcohol son causas frecuentes de pancreatitis aguda. La evaluación inicial debe buscar la etiología y valorar la gravedad.",
  perlaENARM: "Ante pancreatitis aguda, buscar litiasis biliar y evaluar el consumo de alcohol.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de pancreatitis aguda.",
    internacional: "ACG Clinical Guideline: Management of Acute Pancreatitis, 2024."
  },
  bibliografia: [
    "Tenner S, et al. American College of Gastroenterology Guidelines: Management of Acute Pancreatitis. Am J Gastroenterol. 2024."
  ]
},
{
  id: "GASTRO-370",
  especialidad: "Gastroenterología",
  tema: "Colecistitis aguda",
  subtema: "Estudio de imagen inicial",
  dificultad: "Baja",
  caso: "Paciente con fiebre y dolor en hipocondrio derecho presenta sospecha de colecistitis.",
  pregunta: "¿Cuál suele ser el estudio de imagen inicial?",
  opciones: [
    "Ultrasonido abdominal",
    "Radiografía de cráneo",
    "Colonoscopia",
    "Electroencefalograma",
    "Densitometría ósea"
  ],
  respuestaCorrecta: 0,
  explicacion: "El ultrasonido abdominal permite detectar cálculos, engrosamiento de la pared vesicular y otros signos compatibles con colecistitis.",
  perlaENARM: "Ante sospecha de enfermedad vesicular, el ultrasonido suele ser el estudio inicial.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de colecistitis aguda.",
    internacional: "Tokyo Guidelines 2018."
  },
  bibliografia: [
    "Yokoe M, et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholecystitis. J Hepatobiliary Pancreat Sci. 2018."
  ]
},
{
  id: "GASTRO-371",
  especialidad: "Gastroenterología",
  tema: "Colangitis",
  subtema: "Control de la obstrucción biliar",
  dificultad: "Baja",
  caso: "Hombre con fiebre, ictericia e hipotensión presenta colangitis aguda por obstrucción de la vía biliar.",
  pregunta: "Además del soporte hemodinámico y los antibióticos, ¿qué intervención puede ser necesaria para controlar la fuente de infección?",
  opciones: [
    "Drenaje de la vía biliar",
    "Ablación del colon",
    "Funduplicatura inmediata",
    "Ligadura hemorroidal",
    "Apendicectomía en todos los casos"
  ],
  respuestaCorrecta: 0,
  explicacion: "La colangitis obstructiva puede requerir drenaje biliar, frecuentemente mediante CPRE, según la gravedad y la situación clínica. En casos graves, el control de la obstrucción es prioritario.",
  perlaENARM: "Colangitis grave: reanimación, antibióticos y descompresión biliar oportuna.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de colangitis aguda.",
    internacional: "Tokyo Guidelines 2018."
  },
  bibliografia: [
    "Kiriyama S, et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholangitis. J Hepatobiliary Pancreat Sci. 2018."
  ]
},
{
  id: "GASTRO-372",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Tratamiento endoscópico",
  dificultad: "Baja",
  caso: "Paciente con coledocolitiasis confirmada requiere extracción endoscópica del cálculo.",
  pregunta: "¿Qué procedimiento se utiliza habitualmente para tratar cálculos del colédoco cuando está indicado el abordaje endoscópico?",
  opciones: [
    "CPRE",
    "Colonoscopia",
    "Cistoscopia",
    "Broncoscopia",
    "Artroscopia"
  ],
  respuestaCorrecta: 0,
  explicacion: "La colangiopancreatografía retrógrada endoscópica permite tratar la obstrucción biliar mediante esfinterotomía y extracción de cálculos en pacientes seleccionados.",
  perlaENARM: "La CPRE es principalmente terapéutica cuando existe una indicación biliar apropiada.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de coledocolitiasis.",
    internacional: "ASGE guideline on choledocholithiasis."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. Guideline on the role of endoscopy in the evaluation and management of choledocholithiasis. Gastrointest Endosc. 2019."
  ]
},
{
  id: "GASTRO-373",
  especialidad: "Gastroenterología",
  tema: "Abdomen agudo",
  subtema: "Estabilización inicial",
  dificultad: "Baja",
  caso: "Paciente de 68 años llega a urgencias con dolor abdominal súbito, presión arterial baja y piel fría.",
  pregunta: "¿Cuál es la prioridad inicial?",
  opciones: [
    "Evaluar y estabilizar vía aérea, respiración y circulación, además del estado hemodinámico",
    "Realizar colonoscopia electiva",
    "Indicar alta inmediata",
    "Administrar laxantes y esperar",
    "Solicitar únicamente pruebas cutáneas"
  ],
  respuestaCorrecta: 0,
  explicacion: "El dolor abdominal con hipotensión puede representar una emergencia con choque. Se priorizan la evaluación inicial, la reanimación y la búsqueda urgente de la causa.",
  perlaENARM: "En urgencias, primero estabiliza al paciente; no retrases el soporte vital necesario.",
  gpc: {
    mexico: "Verificar los protocolos mexicanos vigentes de atención inicial y choque.",
    internacional: "Harrison's Principles of Internal Medicine, evaluación del paciente con abdomen agudo."
  },
  bibliografia: [
    "Harrison's Principles of Internal Medicine. 21st ed. McGraw Hill."
  ]
},
{
  id: "GASTRO-374",
  especialidad: "Gastroenterología",
  tema: "Apendicitis",
  subtema: "Imagen durante el embarazo",
  dificultad: "Baja",
  caso: "Mujer embarazada con dolor en fosa iliaca derecha presenta sospecha de apendicitis y una ecografía no concluyente.",
  pregunta: "¿Qué estudio puede ser útil para continuar la evaluación cuando está disponible?",
  opciones: [
    "Resonancia magnética sin gadolinio",
    "Radiografía de cráneo",
    "Densitometría ósea",
    "Colonoscopia inmediata en todos los casos",
    "Gammagrafía tiroidea"
  ],
  respuestaCorrecta: 0,
  explicacion: "En el embarazo suele preferirse ultrasonido como estudio inicial. Si no es concluyente, la resonancia magnética sin gadolinio puede ayudar a evaluar apendicitis.",
  perlaENARM: "Embarazo con sospecha de apendicitis: ultrasonido inicial y considerar resonancia si persiste la duda.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de apendicitis y diagnóstico por imagen durante el embarazo.",
    internacional: "WSES Jerusalem Guidelines for Acute Appendicitis."
  },
  bibliografia: [
    "Di Saverio S, et al. Diagnosis and treatment of acute appendicitis: 2020 update of the WSES Jerusalem guidelines. World J Emerg Surg. 2020;15:27."
  ]
},
{
  id: "GASTRO-375",
  especialidad: "Gastroenterología",
  tema: "Diverticulitis",
  subtema: "Estudio confirmatorio",
  dificultad: "Baja",
  caso: "Hombre de 59 años presenta dolor en cuadrante inferior izquierdo y fiebre. Se sospecha diverticulitis aguda.",
  pregunta: "¿Qué estudio es útil para confirmar el diagnóstico y evaluar complicaciones en muchos adultos?",
  opciones: [
    "Tomografía computarizada abdominopélvica",
    "Electrocardiograma como único estudio",
    "Radiografía de mano",
    "Endoscopia nasal",
    "Audiometría"
  ],
  respuestaCorrecta: 0,
  explicacion: "La tomografía abdominopélvica permite identificar inflamación diverticular, abscesos y otras complicaciones cuando está indicada.",
  perlaENARM: "La tomografía ayuda a confirmar diverticulitis y definir si existen complicaciones.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de diverticulitis.",
    internacional: "AGA Clinical Practice Update on Medical Management of Colonic Diverticulitis, 2021."
  },
  bibliografia: [
    "Peery AF, et al. AGA Clinical Practice Update on Medical Management of Colonic Diverticulitis. Gastroenterology. 2021."
  ]
},
{
  id: "GASTRO-376",
  especialidad: "Gastroenterología",
  tema: "Obstrucción intestinal",
  subtema: "Etiología frecuente",
  dificultad: "Baja",
  caso: "Mujer de 66 años con antecedente de cirugía abdominal presenta distensión y vómitos. La imagen confirma obstrucción del intestino delgado.",
  pregunta: "¿Cuál es una causa frecuente de obstrucción del intestino delgado en pacientes operados previamente?",
  opciones: [
    "Adherencias posquirúrgicas",
    "ERGE",
    "Hepatitis A",
    "Gastritis superficial",
    "Colangitis biliar primaria"
  ],
  respuestaCorrecta: 0,
  explicacion: "Las adherencias posquirúrgicas son una causa importante de obstrucción del intestino delgado. Deben evaluarse signos de estrangulación, isquemia o perforación.",
  perlaENARM: "Antecedente de cirugía abdominal más obstrucción del intestino delgado: pensar en adherencias.",
  gpc: {
    mexico: "Verificar los protocolos mexicanos vigentes de obstrucción intestinal.",
    internacional: "World Society of Emergency Surgery guidelines on small bowel obstruction."
  },
  bibliografia: [
    "World Society of Emergency Surgery. Guidelines on small bowel obstruction."
  ]
},
{
  id: "GASTRO-377",
  especialidad: "Gastroenterología",
  tema: "Enfermedad inflamatoria intestinal",
  subtema: "Manifestaciones extraintestinales",
  dificultad: "Baja",
  caso: "Paciente con enfermedad de Crohn presenta dolor y enrojecimiento ocular de aparición reciente.",
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Valorar oportunamente una posible manifestación extraintestinal ocular",
    "Ignorar el síntoma porque nunca se relaciona con Crohn",
    "Suspender toda evaluación médica",
    "Indicar antibióticos siempre sin valoración",
    "Diagnosticar hemorroides"
  ],
  respuestaCorrecta: 0,
  explicacion: "Las enfermedades inflamatorias intestinales pueden acompañarse de manifestaciones extraintestinales, incluidas uveítis y episcleritis. El dolor ocular, la fotofobia o la disminución visual requieren valoración urgente.",
  perlaENARM: "En enfermedad inflamatoria intestinal, el ojo rojo doloroso o con alteración visual no debe ignorarse.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de enfermedad inflamatoria intestinal y los criterios de referencia oftalmológica.",
    internacional: "ECCO Guidelines on Extraintestinal Manifestations in Inflammatory Bowel Disease."
  },
  bibliografia: [
    "European Crohn's and Colitis Organisation. Guidelines on Extraintestinal Manifestations in Inflammatory Bowel Disease."
  ]
},
{
  id: "GASTRO-378",
  especialidad: "Gastroenterología",
  tema: "Síndrome de intestino irritable",
  subtema: "Datos de alarma",
  dificultad: "Baja",
  caso: "Hombre de 57 años con dolor abdominal y diarrea refiere pérdida involuntaria de peso y sangre visible en las heces.",
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Investigar causas orgánicas y datos de alarma antes de atribuir los síntomas a intestino irritable",
    "Confirmar intestino irritable sin evaluación",
    "Indicar exclusivamente antiespasmódicos de por vida",
    "Ignorar el sangrado",
    "Diagnosticar ERGE"
  ],
  respuestaCorrecta: 0,
  explicacion: "El sangrado digestivo y la pérdida de peso son datos de alarma que obligan a investigar enfermedad orgánica. No deben atribuirse automáticamente al síndrome de intestino irritable.",
  perlaENARM: "Sangrado, anemia o pérdida de peso requieren reconsiderar un diagnóstico funcional.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de síndrome de intestino irritable.",
    internacional: "ACG Clinical Guideline: Management of Irritable Bowel Syndrome, 2021."
  },
  bibliografia: [
    "Lacy BE, et al. ACG Clinical Guideline: Management of Irritable Bowel Syndrome. Am J Gastroenterol. 2021;116:17-44."
  ]
},
{
  id: "GASTRO-379",
  especialidad: "Gastroenterología",
  tema: "Cáncer colorrectal",
  subtema: "Detección en personas de riesgo promedio",
  dificultad: "Baja",
  caso: "Hombre de 46 años sin síntomas ni antecedentes familiares relevantes pregunta cuándo debe comenzar a discutir la detección de cáncer colorrectal.",
  pregunta: "¿Qué edad de inicio recomienda la USPSTF estadounidense para la detección en adultos con riesgo promedio?",
  opciones: [
    "45 años",
    "60 años",
    "70 años",
    "75 años en todos los casos",
    "Únicamente después de presentar síntomas"
  ],
  respuestaCorrecta: 0,
  explicacion: "La USPSTF recomienda ofrecer detección de cáncer colorrectal a adultos de riesgo promedio desde los 45 hasta los 75 años. La modalidad y las recomendaciones pueden variar según el país y el riesgo individual.",
  perlaENARM: "La edad de inicio del tamizaje depende de la guía aplicable; los síntomas requieren evaluación diagnóstica y no solo tamizaje.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de detección oportuna de cáncer colorrectal.",
    internacional: "US Preventive Services Task Force. Colorectal Cancer Screening, 2021."
  },
  bibliografia: [
    "US Preventive Services Task Force. Screening for Colorectal Cancer. JAMA. 2021;325:1965-1977."
  ]
},
{
  id: "GASTRO-380",
  especialidad: "Gastroenterología",
  tema: "Cáncer gástrico",
  subtema: "Confirmación histológica",
  dificultad: "Baja",
  caso: "Hombre de 63 años presenta saciedad temprana y pérdida de peso. La endoscopia identifica una lesión gástrica sospechosa.",
  pregunta: "¿Qué procedimiento permite confirmar histológicamente el diagnóstico?",
  opciones: [
    "Biopsia endoscópica de la lesión",
    "Prueba de esfuerzo",
    "Espirometría",
    "Radiografía de extremidades",
    "Examen general de orina"
  ],
  respuestaCorrecta: 0,
  explicacion: "La confirmación de cáncer gástrico requiere estudio histopatológico, habitualmente mediante biopsias obtenidas durante endoscopia digestiva alta.",
  perlaENARM: "Lesión gástrica sospechosa: endoscopia con biopsia para confirmación histológica.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de cáncer gástrico.",
    internacional: "NCI Gastric Cancer Treatment PDQ; NCCN Gastric Cancer."
  },
  bibliografia: [
    "National Cancer Institute. Gastric Cancer Treatment PDQ."
  ]
},

{
  id: "GASTRO-381",
  especialidad: "Gastroenterología",
  tema: "Hemorragia gastrointestinal alta",
  subtema: "Estratificación inicial",
  dificultad: "Media",
  caso: "Hombre de 67 años acude por melena y mareo. Tiene presión arterial de 105/68 mmHg, frecuencia cardiaca de 102 lpm, hemoglobina de 10 g/dL y urea elevada. No presenta hematemesis activa.",
  pregunta: "¿Qué herramienta clínica permite estimar el riesgo antes de la endoscopia en un paciente con hemorragia digestiva alta?",
  opciones: [
    "Escala de Glasgow-Blatchford",
    "Criterios de Roma IV",
    "Escala de Child-Pugh exclusivamente",
    "Índice de Wells",
    "Criterios de Light"
  ],
  respuestaCorrecta: 0,
  explicacion: "La escala de Glasgow-Blatchford utiliza variables clínicas y de laboratorio, como presión arterial, frecuencia cardiaca, hemoglobina, urea, melena y síncope, para estimar la necesidad de intervención. Complementa, pero no sustituye, la valoración hemodinámica.",
  perlaENARM: "Hemorragia digestiva alta: Glasgow-Blatchford ayuda a identificar pacientes de bajo riesgo y a orientar la disposición inicial.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de hemorragia gastrointestinal alta.",
    internacional: "ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding, 2021."
  },
  bibliografia: [
    "Laine L, et al. ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. Am J Gastroenterol. 2021;116:899-917."
  ]
},
{
  id: "GASTRO-382",
  especialidad: "Gastroenterología",
  tema: "Hemorragia gastrointestinal baja",
  subtema: "Estudio diagnóstico",
  dificultad: "Media",
  caso: "Hombre de 72 años presenta hematoquecia abundante, taquicardia e hipotensión. Después de iniciar la reanimación, continúa con sangrado activo hemodinámicamente significativo.",
  pregunta: "¿Qué estudio puede localizar rápidamente el sitio de sangrado activo en este contexto?",
  opciones: [
    "Colonoscopia electiva sin preparación",
    "Angiotomografía computarizada con contraste",
    "Prueba de aliento para Helicobacter pylori",
    "Manometría anorrectal",
    "Radiografía simple de abdomen como único estudio"
  ],
  respuestaCorrecta: 1,
  explicacion: "En pacientes seleccionados con hemorragia digestiva baja activa y hemodinámicamente significativa, la angiotomografía puede localizar el sitio de sangrado y facilitar la planificación de una intervención. La reanimación y la evaluación de una posible fuente alta siguen siendo esenciales según la presentación.",
  perlaENARM: "Hematoquecia con inestabilidad: reanimación inmediata y selección del estudio según la actividad del sangrado y el contexto clínico.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de hemorragia gastrointestinal baja.",
    internacional: "ACG Clinical Guideline: Management of Patients With Acute Lower Gastrointestinal Bleeding, 2023."
  },
  bibliografia: [
    "Sengupta N, et al. Management of Patients With Acute Lower Gastrointestinal Bleeding. Am J Gastroenterol. 2023."
  ]
},
{
  id: "GASTRO-383",
  especialidad: "Gastroenterología",
  tema: "Úlcera péptica",
  subtema: "Erradicación de Helicobacter pylori",
  dificultad: "Media",
  caso: "Hombre de 48 años con úlcera duodenal tiene prueba positiva para Helicobacter pylori. No tiene alergia conocida a medicamentos y se desconoce la sensibilidad antibiótica local.",
  pregunta: "¿Qué estrategia terapéutica empírica se prefiere habitualmente cuando la susceptibilidad antibiótica es desconocida, de acuerdo con la guía ACG 2024?",
  opciones: [
    "Omeprazol como monoterapia durante siete días",
    "Amoxicilina como monoterapia",
    "Terapia cuádruple con bismuto durante 14 días, si no existen contraindicaciones",
    "Metronidazol como monoterapia",
    "No tratar porque la infección suele desaparecer espontáneamente"
  ],
  respuestaCorrecta: 2,
  explicacion: "La guía ACG 2024 recomienda como esquema empírico preferido en muchos pacientes sin susceptibilidad conocida la terapia cuádruple optimizada con bismuto durante 14 días. La selección debe considerar alergias, tratamientos previos y disponibilidad. Es necesario confirmar la erradicación posteriormente.",
  perlaENARM: "H. pylori: no basta con prescribir el esquema; se debe comprobar la erradicación.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente para infección por H. pylori y enfermedad ulcerosa péptica.",
    internacional: "ACG Clinical Guideline: Treatment of Helicobacter pylori Infection, 2024."
  },
  bibliografia: [
    "Chey WD, et al. ACG Clinical Guideline: Treatment of Helicobacter pylori Infection. Am J Gastroenterol. 2024."
  ]
},
{
  id: "GASTRO-384",
  especialidad: "Gastroenterología",
  tema: "Úlcera péptica",
  subtema: "Confirmación de erradicación",
  dificultad: "Media",
  caso: "Mujer de 43 años completó tratamiento para H. pylori hace seis semanas. Se encuentra asintomática y desea confirmar que la infección fue erradicada.",
  pregunta: "¿Cuál es una estrategia apropiada para comprobar la erradicación?",
  opciones: [
    "Medir anticuerpos IgG séricos como única prueba de control",
    "Realizar prueba de aliento con urea o antígeno fecal, respetando los periodos de suspensión farmacológica",
    "Solicitar hemograma exclusivamente",
    "Repetir el tratamiento sin realizar ninguna prueba",
    "Usar la mejoría de los síntomas como confirmación definitiva"
  ],
  respuestaCorrecta: 1,
  explicacion: "La erradicación puede confirmarse mediante prueba de aliento con urea, antígeno fecal u otra prueba apropiada. Habitualmente se espera al menos cuatro semanas después de terminar los antibióticos y se suspende el IBP aproximadamente dos semanas antes, si clínicamente es posible, para reducir falsos negativos.",
  perlaENARM: "La serología no es adecuada para confirmar erradicación porque los anticuerpos pueden persistir después del tratamiento.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente para H. pylori.",
    internacional: "ACG Clinical Guideline: Treatment of Helicobacter pylori Infection, 2024."
  },
  bibliografia: [
    "Chey WD, et al. Am J Gastroenterol. 2024."
  ]
},
{
  id: "GASTRO-385",
  especialidad: "Gastroenterología",
  tema: "ERGE",
  subtema: "Esofagitis erosiva grave",
  dificultad: "Media",
  caso: "Hombre de 60 años con ERGE presenta esofagitis erosiva grado C de Los Ángeles. Mejora después de ocho semanas de tratamiento con un inhibidor de la bomba de protones.",
  pregunta: "¿Cuál es la estrategia de mantenimiento más apropiada?",
  opciones: [
    "Suspender permanentemente el IBP en todos los casos",
    "Utilizar únicamente antiácidos a demanda",
    "Mantener tratamiento antisecretor a largo plazo o valorar una alternativa intervencionista apropiada",
    "Indicar antibióticos de manera indefinida",
    "Realizar gastrectomía como tratamiento habitual"
  ],
  respuestaCorrecta: 2,
  explicacion: "En la esofagitis erosiva grave, especialmente grados C y D, se recomienda mantenimiento con IBP o considerar cirugía antirreflujo en pacientes adecuadamente seleccionados. La suspensión suele asociarse con recurrencia de la esofagitis.",
  perlaENARM: "Esofagitis erosiva grados C-D: generalmente requiere mantenimiento prolongado con IBP o una alternativa apropiada.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de ERGE.",
    internacional: "ACG Clinical Guideline for the Diagnosis and Management of GERD, 2022."
  },
  bibliografia: [
    "Katz PO, et al. Am J Gastroenterol. 2022;117:27-56."
  ]
},
{
  id: "GASTRO-386",
  especialidad: "Gastroenterología",
  tema: "ERGE complicada",
  subtema: "Estenosis péptica",
  dificultad: "Media",
  caso: "Hombre de 65 años con pirosis de larga evolución desarrolla disfagia progresiva para sólidos. La endoscopia identifica una estenosis distal corta; se obtienen biopsias para excluir neoplasia.",
  pregunta: "Una vez establecida la benignidad de la estenosis, ¿qué tratamiento suele ser apropiado?",
  opciones: [
    "Dilatación endoscópica y tratamiento con IBP",
    "Antibióticos como monoterapia",
    "Suspender toda alimentación de manera permanente",
    "Quimioterapia empírica",
    "Tratamiento exclusivo con antidiarreicos"
  ],
  respuestaCorrecta: 0,
  explicacion: "La dilatación endoscópica alivia la obstrucción producida por una estenosis péptica benigna. El tratamiento antisecretor disminuye la lesión por reflujo y ayuda a reducir recurrencias. La evaluación debe excluir malignidad antes de asumir una causa benigna.",
  perlaENARM: "Disfagia progresiva: endoscopia y biopsias según los hallazgos; no atribuirla automáticamente a ERGE.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de ERGE y disfagia.",
    internacional: "ACG Clinical Guideline for GERD, 2022."
  },
  bibliografia: [
    "Katz PO, et al. Am J Gastroenterol. 2022;117:27-56."
  ]
},
{
  id: "GASTRO-387",
  especialidad: "Gastroenterología",
  tema: "Esófago de Barrett",
  subtema: "Displasia",
  dificultad: "Media",
  caso: "Hombre de 62 años con esófago de Barrett presenta una biopsia informada como displasia de bajo grado. La muestra es revisada por un patólogo gastrointestinal experto y el diagnóstico se confirma.",
  pregunta: "¿Cuál es una opción de manejo aceptada para este paciente?",
  opciones: [
    "Esofagectomía obligatoria en todos los casos",
    "Terapia endoscópica de erradicación o vigilancia endoscópica estrecha tras discutir riesgos y beneficios",
    "Quimioterapia sistémica inmediata",
    "Ningún seguimiento porque la displasia no progresa",
    "Antibióticos de amplio espectro durante seis meses"
  ],
  respuestaCorrecta: 1,
  explicacion: "En Barrett con displasia de bajo grado confirmada, puede ofrecerse terapia endoscópica de erradicación o vigilancia endoscópica estrecha según las características del paciente, su preferencia y la experiencia del centro. La confirmación histopatológica por un experto es importante porque existe variabilidad diagnóstica.",
  perlaENARM: "Barrett con displasia de bajo grado: confirmar la histología y discutir ablación frente a vigilancia.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de Barrett y lesiones premalignas esofágicas.",
    internacional: "ACG Clinical Guideline: Diagnosis and Management of Barrett's Esophagus."
  },
  bibliografia: [
    "Shaheen NJ, et al. Diagnosis and Management of Barrett's Esophagus: An Updated ACG Guideline. Am J Gastroenterol. 2022."
  ]
},
{
  id: "GASTRO-388",
  especialidad: "Gastroenterología",
  tema: "Gastritis",
  subtema: "Anemia por gastritis autoinmune",
  dificultad: "Media",
  caso: "Mujer de 58 años presenta fatiga, glositis y anemia macrocítica. La evaluación identifica vitamina B12 baja y anticuerpos contra el factor intrínseco.",
  pregunta: "¿Qué mecanismo explica mejor la deficiencia de vitamina B12?",
  opciones: [
    "Pérdida excesiva de hierro por vía renal",
    "Disminución de la absorción de vitamina B12 por alteración del factor intrínseco",
    "Aumento de la síntesis de hemoglobina",
    "Deficiencia aislada de vitamina C",
    "Exceso de absorción de calcio"
  ],
  respuestaCorrecta: 1,
  explicacion: "La gastritis autoinmune puede destruir las células parietales y reducir el factor intrínseco, indispensable para la absorción de vitamina B12 en el íleon terminal. La deficiencia prolongada puede producir anemia megaloblástica y alteraciones neurológicas.",
  perlaENARM: "Anemia macrocítica, vitamina B12 baja y anticuerpos contra factor intrínseco sugieren anemia perniciosa.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de anemia por deficiencia de vitamina B12 y gastritis autoinmune.",
    internacional: "Harrison's Principles of Internal Medicine, evaluación de anemia megaloblástica."
  },
  bibliografia: [
    "Harrison's Principles of Internal Medicine. 21st ed. McGraw Hill."
  ]
},
{
  id: "GASTRO-389",
  especialidad: "Gastroenterología",
  tema: "Hepatitis viral",
  subtema: "Interpretación serológica de hepatitis B",
  dificultad: "Media",
  caso: "Paciente asintomático presenta HBsAg negativo, anti-HBc total negativo y anti-HBs positivo después de completar el esquema de vacunación contra hepatitis B.",
  pregunta: "¿Cuál es la interpretación más probable?",
  opciones: [
    "Infección crónica por hepatitis B",
    "Infección aguda por hepatitis B",
    "Inmunidad por vacunación",
    "Hepatitis C activa",
    "Infección por hepatitis A crónica"
  ],
  respuestaCorrecta: 2,
  explicacion: "El anti-HBs positivo con HBsAg y anti-HBc negativos es compatible con inmunidad inducida por vacunación. La infección natural previa suele producir anti-HBc positivo.",
  perlaENARM: "Vacunación contra hepatitis B: anti-HBs positivo sin anti-HBc.",
  gpc: {
    mexico: "Verificar los lineamientos mexicanos vigentes para interpretación serológica de hepatitis B.",
    internacional: "CDC. Screening and Testing for Hepatitis B Virus Infection."
  },
  bibliografia: [
    "Centers for Disease Control and Prevention. Screening and Testing for Hepatitis B Virus Infection."
  ]
},
{
  id: "GASTRO-390",
  especialidad: "Gastroenterología",
  tema: "Hepatitis viral",
  subtema: "Hepatitis C",
  dificultad: "Media",
  caso: "Hombre de 49 años presenta anticuerpos contra el virus de hepatitis C positivos en una prueba de tamizaje. No tiene estudios moleculares previos.",
  pregunta: "¿Qué prueba permite determinar si existe infección activa por el virus de hepatitis C?",
  opciones: [
    "Repetir únicamente los anticuerpos anti-VHC",
    "ARN del virus de hepatitis C mediante prueba molecular",
    "Anticuerpos antinucleares exclusivamente",
    "Alfafetoproteína como prueba confirmatoria",
    "Bilirrubina indirecta aislada"
  ],
  respuestaCorrecta: 1,
  explicacion: "Los anticuerpos anti-VHC indican exposición, pero no distinguen infección activa de infección resuelta. La detección de ARN viral confirma infección activa y permite planificar el tratamiento.",
  perlaENARM: "Anti-VHC positivo no equivale a infección activa: confirmar con ARN viral.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de diagnóstico y tratamiento de hepatitis C.",
    internacional: "AASLD-IDSA HCV Guidance."
  },
  bibliografia: [
    "AASLD-IDSA. HCV Guidance: Recommendations for Testing, Managing, and Treating Hepatitis C."
  ]
},
{
  id: "GASTRO-391",
  especialidad: "Gastroenterología",
  tema: "Cirrosis",
  subtema: "Clasificación pronóstica",
  dificultad: "Media",
  caso: "Paciente con cirrosis tiene bilirrubina de 3.2 mg/dL, albúmina de 2.7 g/dL, INR de 1.8, ascitis moderada y encefalopatía grado I.",
  pregunta: "¿Qué escala integra estos parámetros para clasificar la gravedad clínica de la cirrosis?",
  opciones: [
    "Child-Pugh",
    "Glasgow-Blatchford",
    "Alvarado",
    "Ranson exclusivamente",
    "Wells"
  ],
  respuestaCorrecta: 0,
  explicacion: "Child-Pugh incorpora bilirrubina, albúmina, INR o tiempo de protrombina, ascitis y encefalopatía. Se utiliza para clasificar la gravedad y estimar el pronóstico, aunque otras herramientas, como MELD-Na o MELD 3.0 según el contexto, también son relevantes.",
  perlaENARM: "Child-Pugh: bilirrubina, albúmina, coagulación, ascitis y encefalopatía.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de cirrosis y evaluación pronóstica.",
    internacional: "EASL Clinical Practice Guidelines on decompensated cirrhosis."
  },
  bibliografia: [
    "European Association for the Study of the Liver. Clinical Practice Guidelines on decompensated cirrhosis."
  ]
},
{
  id: "GASTRO-392",
  especialidad: "Gastroenterología",
  tema: "Hipertensión portal",
  subtema: "Profilaxis primaria de hemorragia variceal",
  dificultad: "Media",
  caso: "Hombre de 59 años con cirrosis compensada presenta várices esofágicas de riesgo elevado sin hemorragia previa. No tiene contraindicaciones para betabloqueadores no selectivos.",
  pregunta: "¿Qué estrategia farmacológica puede utilizarse para reducir el riesgo de primera hemorragia variceal?",
  opciones: [
    "Betabloqueador no selectivo apropiado, como carvedilol, según el contexto clínico",
    "Anticoagulación en todos los pacientes",
    "AINE diariamente",
    "Loperamida como profilaxis",
    "Suspender todo seguimiento endoscópico y clínico"
  ],
  respuestaCorrecta: 0,
  explicacion: "Los betabloqueadores no selectivos reducen la presión portal y pueden prevenir la primera descompensación en pacientes seleccionados con hipertensión portal clínicamente significativa. En várices de alto riesgo también debe valorarse la estrategia endoscópica según las características del paciente y las guías aplicables.",
  perlaENARM: "La profilaxis primaria busca prevenir la primera hemorragia; la elección depende del riesgo variceal y la tolerancia al tratamiento.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de hipertensión portal y profilaxis variceal.",
    internacional: "Baveno VII Consensus, 2022."
  },
  bibliografia: [
    "de Franchis R, et al. Baveno VII – Renewing consensus in portal hypertension. J Hepatol. 2022;76:959-974."
  ]
},
{
  id: "GASTRO-393",
  especialidad: "Gastroenterología",
  tema: "Ascitis",
  subtema: "Gradiente de albúmina suero-ascitis",
  dificultad: "Media",
  caso: "Paciente con ascitis presenta albúmina sérica de 3.0 g/dL y albúmina en líquido ascítico de 1.0 g/dL.",
  pregunta: "¿Cómo se interpreta el gradiente de albúmina suero-ascitis calculado con estos resultados?",
  opciones: [
    "Es de 2.0 g/dL y favorece hipertensión portal como mecanismo de la ascitis",
    "Es de 0.5 g/dL y confirma tuberculosis peritoneal",
    "Es de 4.0 g/dL y confirma carcinomatosis",
    "No puede calcularse con albúmina sérica y ascítica",
    "Confirma peritonitis bacteriana espontánea por sí solo"
  ],
  respuestaCorrecta: 0,
  explicacion: "El gradiente de albúmina suero-ascitis se calcula restando la albúmina ascítica de la sérica: 3.0 − 1.0 = 2.0 g/dL. Un valor de al menos 1.1 g/dL favorece hipertensión portal como mecanismo de la ascitis, aunque no establece por sí solo la etiología completa.",
  perlaENARM: "Gradiente ≥1.1 g/dL: orienta a ascitis relacionada con hipertensión portal.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de diagnóstico de ascitis.",
    internacional: "AASLD Practice Guidance on ascites."
  },
  bibliografia: [
    "AASLD. Practice Guidance on ascites, spontaneous bacterial peritonitis and hepatorenal syndrome."
  ]
},
{
  id: "GASTRO-394",
  especialidad: "Gastroenterología",
  tema: "Peritonitis bacteriana espontánea",
  subtema: "Tratamiento inicial",
  dificultad: "Media",
  caso: "Paciente con cirrosis y ascitis presenta fiebre y dolor abdominal. El líquido ascítico contiene 680 polimorfonucleares/mm³ y no se identifica una fuente quirúrgica evidente.",
  pregunta: "¿Cuál es la conducta inicial más apropiada?",
  opciones: [
    "Esperar el resultado del cultivo antes de iniciar tratamiento",
    "Iniciar antibiótico empírico apropiado y valorar albúmina según función renal, bilirrubina y riesgo clínico",
    "Administrar únicamente diuréticos",
    "Indicar laxantes como tratamiento definitivo",
    "Realizar colonoscopia antes de tratar"
  ],
  respuestaCorrecta: 1,
  explicacion: "Un recuento de PMN de al menos 250 células/mm³ apoya el diagnóstico de peritonitis bacteriana espontánea y requiere tratamiento antibiótico oportuno. La elección depende de la gravedad, exposición sanitaria y resistencia local. La albúmina intravenosa está indicada en pacientes seleccionados para reducir el riesgo de deterioro renal y mortalidad.",
  perlaENARM: "No retrasar antibióticos cuando la sospecha y el líquido ascítico apoyan peritonitis bacteriana espontánea.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de peritonitis bacteriana espontánea.",
    internacional: "AASLD Practice Guidance on ascites and spontaneous bacterial peritonitis."
  },
  bibliografia: [
    "AASLD. Practice Guidance on ascites, spontaneous bacterial peritonitis and hepatorenal syndrome."
  ]
},
{
  id: "GASTRO-395",
  especialidad: "Gastroenterología",
  tema: "Encefalopatía hepática",
  subtema: "Factores precipitantes",
  dificultad: "Media",
  caso: "Paciente con cirrosis presenta confusión y asterixis después de varios días de estreñimiento. No hay focalización neurológica evidente.",
  pregunta: "Además de tratar la encefalopatía, ¿qué medida es fundamental?",
  opciones: [
    "Buscar y corregir factores precipitantes, incluido el estreñimiento",
    "Restringir indefinidamente todas las proteínas",
    "Administrar benzodiacepinas rutinariamente",
    "Indicar opioides para mejorar el estado mental",
    "Evitar evaluar infecciones"
  ],
  respuestaCorrecta: 0,
  explicacion: "La encefalopatía hepática puede precipitarse por estreñimiento, infección, hemorragia digestiva, deshidratación, alteraciones electrolíticas o fármacos. Corregir el desencadenante es parte esencial del tratamiento.",
  perlaENARM: "Encefalopatía hepática: trata el episodio y busca activamente el precipitante.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de encefalopatía hepática.",
    internacional: "AASLD/EASL Practice Guideline on Hepatic Encephalopathy."
  },
  bibliografia: [
    "Vilstrup H, et al. Hepatic Encephalopathy in Chronic Liver Disease. Hepatology. 2014."
  ]
},
{
  id: "GASTRO-396",
  especialidad: "Gastroenterología",
  tema: "Síndrome hepatorrenal",
  subtema: "Evaluación de lesión renal",
  dificultad: "Media",
  caso: "Paciente con cirrosis descompensada presenta aumento de creatinina después de diarrea y tratamiento diurético. Tiene ascitis y presión arterial baja.",
  pregunta: "¿Cuál es el paso inicial más importante antes de atribuir el deterioro renal exclusivamente a síndrome hepatorrenal?",
  opciones: [
    "Evaluar volemia, infección, fármacos y otras causas de lesión renal",
    "Asumir síndrome hepatorrenal sin estudios",
    "Administrar AINE para mejorar la perfusión renal",
    "Aumentar siempre los diuréticos",
    "Indicar contraste intravenoso de manera rutinaria"
  ],
  respuestaCorrecta: 0,
  explicacion: "El deterioro renal en la cirrosis puede deberse a hipovolemia, infección, fármacos nefrotóxicos, lesión tubular u otras causas. La evaluación clínica y la corrección de factores reversibles son esenciales antes de establecer el fenotipo de síndrome hepatorrenal.",
  perlaENARM: "En cirrosis con lesión renal aguda, evita asumir síndrome hepatorrenal sin evaluar otras causas.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de cirrosis y lesión renal aguda.",
    internacional: "AASLD Practice Guidance on ascites and hepatorenal syndrome."
  },
  bibliografia: [
    "AASLD. Practice Guidance on ascites, spontaneous bacterial peritonitis and hepatorenal syndrome."
  ]
},
{
  id: "GASTRO-397",
  especialidad: "Gastroenterología",
  tema: "Pancreatitis aguda",
  subtema: "Indicación de tomografía",
  dificultad: "Media",
  caso: "Hombre de 46 años presenta dolor epigástrico típico y lipasa seis veces por encima del límite superior normal. Está hemodinámicamente estable y no hay dudas diagnósticas.",
  pregunta: "¿Cuál es la conducta más apropiada respecto a la tomografía contrastada durante las primeras horas?",
  opciones: [
    "Realizarla obligatoriamente en todos los casos al ingreso",
    "Evitar la tomografía rutinaria inmediata si el diagnóstico está claro y no hay indicación específica",
    "Sustituir la evaluación clínica por tomografías diarias",
    "Solicitar tomografía de cráneo",
    "Realizar CPRE de urgencia en toda pancreatitis"
  ],
  respuestaCorrecta: 1,
  explicacion: "En pancreatitis aguda con diagnóstico clínico y bioquímico claro, la tomografía temprana no es necesaria de rutina. Se reserva para incertidumbre diagnóstica, falta de mejoría o sospecha de complicaciones, según el momento y la situación clínica.",
  perlaENARM: "Pancreatitis típica con enzimas diagnósticas: no necesita tomografía inmediata de rutina.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de pancreatitis aguda.",
    internacional: "ACG Clinical Guideline: Management of Acute Pancreatitis, 2024."
  },
  bibliografia: [
    "Tenner S, et al. Am J Gastroenterol. 2024."
  ]
},
{
  id: "GASTRO-398",
  especialidad: "Gastroenterología",
  tema: "Pancreatitis aguda",
  subtema: "Pancreatitis biliar",
  dificultad: "Media",
  caso: "Mujer de 52 años ingresa por pancreatitis aguda biliar. Presenta fiebre, ictericia, bilirrubina elevada y dilatación de la vía biliar, con sospecha clínica de colangitis.",
  pregunta: "¿Qué intervención debe considerarse de manera urgente?",
  opciones: [
    "CPRE temprana para drenaje biliar, según la evaluación clínica",
    "Colecistectomía electiva meses después sin tratar la colangitis",
    "Colonoscopia inmediata",
    "Tratamiento exclusivo con antiácidos",
    "Administrar antidiarreicos"
  ],
  respuestaCorrecta: 0,
  explicacion: "La pancreatitis biliar acompañada de colangitis requiere evaluación urgente para descompresión de la vía biliar, habitualmente mediante CPRE. En pancreatitis biliar sin colangitis ni obstrucción persistente, la CPRE urgente no se indica de rutina.",
  perlaENARM: "Pancreatitis biliar más colangitis: considerar CPRE urgente; no confundir con pancreatitis biliar no complicada.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de pancreatitis biliar y colangitis.",
    internacional: "ACG Clinical Guideline: Management of Acute Pancreatitis, 2024."
  },
  bibliografia: [
    "Tenner S, et al. Am J Gastroenterol. 2024."
  ]
},
{
  id: "GASTRO-399",
  especialidad: "Gastroenterología",
  tema: "Colecistitis aguda",
  subtema: "Tratamiento definitivo",
  dificultad: "Media",
  caso: "Mujer de 41 años presenta dolor en hipocondrio derecho, fiebre y ultrasonido compatible con colecistitis aguda calculosa. Se encuentra estable y es candidata a cirugía.",
  pregunta: "¿Cuál es el tratamiento definitivo habitual?",
  opciones: [
    "Colecistectomía laparoscópica temprana, cuando sea clínicamente apropiada",
    "Antibióticos de por vida sin reevaluación",
    "Colectomía total",
    "Funduplicatura",
    "Observación indefinida sin tratamiento"
  ],
  respuestaCorrecta: 0,
  explicacion: "En pacientes apropiadamente seleccionados, la colecistectomía laparoscópica temprana es el tratamiento definitivo de la colecistitis aguda calculosa. La decisión depende de la gravedad, las comorbilidades y la disponibilidad de recursos.",
  perlaENARM: "Colecistitis aguda calculosa: la colecistectomía temprana suele ser el tratamiento definitivo en pacientes aptos.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de colecistitis aguda.",
    internacional: "Tokyo Guidelines 2018."
  },
  bibliografia: [
    "Yokoe M, et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholecystitis. J Hepatobiliary Pancreat Sci. 2018."
  ]
},
{
  id: "GASTRO-400",
  especialidad: "Gastroenterología",
  tema: "Coledocolitiasis",
  subtema: "Probabilidad de obstrucción biliar",
  dificultad: "Media",
  caso: "Hombre de 55 años presenta dolor biliar e ictericia. El ultrasonido muestra dilatación del colédoco, pero no visualiza directamente el cálculo. No tiene colangitis.",
  pregunta: "Si la probabilidad de coledocolitiasis es intermedia y el paciente está estable, ¿qué estrategia puede ayudar a confirmar el diagnóstico antes de una CPRE?",
  opciones: [
    "Colangiorresonancia o ultrasonido endoscópico",
    "CPRE diagnóstica en todos los casos sin valorar riesgos",
    "Radiografía simple de abdomen como única prueba",
    "Manometría esofágica",
    "Prueba de aliento para H. pylori"
  ],
  respuestaCorrecta: 0,
  explicacion: "En pacientes con probabilidad intermedia de coledocolitiasis, la colangiorresonancia o el ultrasonido endoscópico pueden confirmar la presencia de cálculos y evitar CPRE innecesarias. La CPRE tiene riesgos y debe reservarse principalmente para indicaciones terapéuticas apropiadas.",
  perlaENARM: "Probabilidad intermedia de coledocolitiasis: confirmar con colangiorresonancia o ultrasonido endoscópico según disponibilidad.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de coledocolitiasis.",
    internacional: "ASGE Guideline on Choledocholithiasis, 2019."
  },
  bibliografia: [
    "ASGE Standards of Practice Committee. Guideline on the role of endoscopy in the evaluation and management of choledocholithiasis. Gastrointest Endosc. 2019."
  ]
},
{
  id: "GASTRO-401",
  especialidad: "Gastroenterología",
  tema: "Colangitis",
  subtema: "Gravedad clínica",
  dificultad: "Media",
  caso: "Hombre de 74 años con colangitis presenta fiebre, ictericia, hipotensión y confusión. La bilirrubina está elevada y se sospecha obstrucción biliar.",
  pregunta: "¿Qué aspecto del tratamiento no debe retrasarse mientras se inicia la reanimación y los antibióticos?",
  opciones: [
    "La evaluación urgente para drenaje de la vía biliar",
    "La colonoscopia de vigilancia",
    "La prueba de aliento para H. pylori",
    "La endoscopia de Barrett electiva",
    "El estudio de motilidad esofágica"
  ],
  respuestaCorrecta: 0,
  explicacion: "La hipotensión y la alteración del estado mental indican enfermedad grave y posible sepsis. Además del soporte hemodinámico y los antibióticos, el control de la obstrucción mediante drenaje biliar es fundamental y debe realizarse con la urgencia que determine la gravedad.",
  perlaENARM: "Colangitis con choque o disfunción orgánica: reanimación, antibióticos y control urgente de la fuente.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de colangitis aguda y sepsis.",
    internacional: "Tokyo Guidelines 2018."
  },
  bibliografia: [
    "Kiriyama S, et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholangitis. J Hepatobiliary Pancreat Sci. 2018."
  ]
},
{
  id: "GASTRO-402",
  especialidad: "Gastroenterología",
  tema: "Apendicitis",
  subtema: "Diagnóstico por imagen",
  dificultad: "Media",
  caso: "Hombre de 28 años presenta dolor en fosa iliaca derecha, fiebre y leucocitosis. La exploración sugiere apendicitis, pero el diagnóstico no es concluyente.",
  pregunta: "¿Qué estudio de imagen suele tener alta utilidad diagnóstica en adultos cuando se requiere confirmar apendicitis?",
  opciones: [
    "Tomografía computarizada abdominopélvica",
    "Radiografía de cráneo",
    "Colonoscopia urgente en todos los pacientes",
    "Manometría anorrectal",
    "Ultrasonido tiroideo"
  ],
  respuestaCorrecta: 0,
  explicacion: "La tomografía abdominopélvica tiene alta precisión diagnóstica en adultos con sospecha de apendicitis y permite identificar diagnósticos alternativos y complicaciones. El ultrasonido puede ser preferible en determinados pacientes, como niños y embarazadas.",
  perlaENARM: "La elección de imagen depende de edad, embarazo, disponibilidad y probabilidad clínica.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de apendicitis aguda.",
    internacional: "WSES Jerusalem Guidelines for Acute Appendicitis."
  },
  bibliografia: [
    "Di Saverio S, et al. World J Emerg Surg. 2020;15:27."
  ]
},
{
  id: "GASTRO-403",
  especialidad: "Gastroenterología",
  tema: "Diverticulitis",
  subtema: "Antibióticos en enfermedad no complicada",
  dificultad: "Media",
  caso: "Mujer inmunocompetente de 48 años presenta diverticulitis no complicada confirmada por tomografía. Está estable, tolera líquidos y no presenta sepsis ni comorbilidades importantes.",
  pregunta: "¿Cuál es una conducta aceptada en pacientes seleccionados con estas características?",
  opciones: [
    "Administrar antibióticos de manera obligatoria a todos los pacientes",
    "Considerar manejo ambulatorio sin antibióticos, con seguimiento y criterios de alarma claros",
    "Realizar colectomía urgente en todos los casos",
    "Indicar quimioterapia",
    "Realizar colonoscopia durante la fase aguda en todos los pacientes"
  ],
  respuestaCorrecta: 1,
  explicacion: "En pacientes inmunocompetentes seleccionados con diverticulitis no complicada y sin datos de gravedad, los antibióticos pueden utilizarse de manera selectiva y no son obligatorios en todos los casos. El manejo depende de la situación clínica, los factores de riesgo y la evolución.",
  perlaENARM: "Diverticulitis no complicada en paciente estable: los antibióticos pueden omitirse en casos seleccionados.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de diverticulitis.",
    internacional: "AGA Clinical Practice Update on Medical Management of Colonic Diverticulitis, 2021."
  },
  bibliografia: [
    "Peery AF, et al. Gastroenterology. 2021."
  ]
},
{
  id: "GASTRO-404",
  especialidad: "Gastroenterología",
  tema: "Obstrucción intestinal",
  subtema: "Datos de isquemia",
  dificultad: "Media",
  caso: "Hombre de 69 años con obstrucción intestinal presenta dolor que se vuelve continuo, fiebre, taquicardia y defensa abdominal.",
  pregunta: "¿Qué complicación debe sospecharse y evaluarse de manera urgente?",
  opciones: [
    "Isquemia o estrangulación intestinal",
    "ERGE no complicada",
    "Síndrome de intestino irritable",
    "Gastritis superficial",
    "Intolerancia a la lactosa"
  ],
  respuestaCorrecta: 0,
  explicacion: "El dolor continuo, la fiebre, la taquicardia y los signos peritoneales en una obstrucción intestinal sugieren isquemia, estrangulación o perforación. Se requiere evaluación quirúrgica urgente.",
  perlaENARM: "Obstrucción con dolor continuo o peritonismo: descartar isquemia intestinal sin demora.",
  gpc: {
    mexico: "Verificar los protocolos mexicanos vigentes de obstrucción intestinal y urgencias quirúrgicas.",
    internacional: "World Society of Emergency Surgery guidelines on small bowel obstruction."
  },
  bibliografia: [
    "World Society of Emergency Surgery. Guidelines on small bowel obstruction."
  ]
},
{
  id: "GASTRO-405",
  especialidad: "Gastroenterología",
  tema: "Enfermedad inflamatoria intestinal",
  subtema: "Colitis ulcerosa aguda grave",
  dificultad: "Media",
  caso: "Mujer de 31 años con colitis ulcerosa presenta numerosas evacuaciones sanguinolentas al día, taquicardia, fiebre y anemia. Se sospecha un brote grave.",
  pregunta: "¿Cuál es la conducta inicial más apropiada?",
  opciones: [
    "Hospitalización para evaluación, soporte y tratamiento especializado",
    "Alta inmediata sin seguimiento",
    "Loperamida como único tratamiento",
    "Suspender toda evaluación infecciosa",
    "Indicar antibióticos sin investigar la gravedad"
  ],
  respuestaCorrecta: 0,
  explicacion: "La colitis ulcerosa aguda grave puede complicarse con hemorragia, perforación y megacolon tóxico. Requiere hospitalización, evaluación de gravedad, exclusión de infección relevante y tratamiento especializado oportuno.",
  perlaENARM: "Brote grave de colitis ulcerosa: hospitalización y vigilancia estrecha de complicaciones.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de colitis ulcerosa.",
    internacional: "ECCO Guidelines on Therapeutics in Ulcerative Colitis."
  },
  bibliografia: [
    "European Crohn's and Colitis Organisation. Guidelines on Ulcerative Colitis."
  ]
},
{
  id: "GASTRO-406",
  especialidad: "Gastroenterología",
  tema: "Enfermedad de Crohn",
  subtema: "Complicaciones fistulizantes",
  dificultad: "Media",
  caso: "Hombre de 29 años con enfermedad de Crohn presenta dolor perianal, fiebre y salida de material purulento por una abertura cercana al ano.",
  pregunta: "¿Qué complicación debe sospecharse?",
  opciones: [
    "Fístula perianal con posible absceso",
    "ERGE",
    "Hepatitis A",
    "Úlcera gástrica no complicada",
    "Colangitis biliar primaria"
  ],
  respuestaCorrecta: 0,
  explicacion: "La enfermedad de Crohn puede producir enfermedad perianal fistulizante y abscesos. Es importante valorar sepsis local y realizar evaluación quirúrgica e imagen pélvica según el contexto.",
  perlaENARM: "Crohn perianal con fiebre y supuración: descartar absceso y controlar la infección antes de intensificar inmunosupresión.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de enfermedad de Crohn y enfermedad perianal.",
    internacional: "ECCO Guidelines on Crohn's Disease."
  },
  bibliografia: [
    "European Crohn's and Colitis Organisation. Guidelines on Crohn's Disease."
  ]
},
{
  id: "GASTRO-407",
  especialidad: "Gastroenterología",
  tema: "Síndrome de intestino irritable",
  subtema: "Criterios clínicos",
  dificultad: "Media",
  caso: "Mujer de 33 años presenta dolor abdominal recurrente durante varios meses, relacionado con la defecación y acompañado de cambios en la frecuencia y forma de las heces. No tiene datos de alarma.",
  pregunta: "¿Cuál es el principio diagnóstico más apropiado?",
  opciones: [
    "Establecer el diagnóstico mediante criterios clínicos validados y estudios selectivos según los síntomas",
    "Realizar cirugía exploratoria en todos los pacientes",
    "Diagnosticar cáncer colorrectal por la presencia de dolor",
    "Solicitar tomografía diaria",
    "Indicar antibióticos prolongados a todos los pacientes"
  ],
  respuestaCorrecta: 0,
  explicacion: "El síndrome de intestino irritable puede diagnosticarse mediante criterios clínicos, como Roma IV, cuando la presentación es compatible y no existen datos de alarma. Los estudios se seleccionan según el subtipo y las características clínicas.",
  perlaENARM: "El diagnóstico de intestino irritable es clínico, pero requiere valorar signos de alarma y diagnósticos alternativos.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de síndrome de intestino irritable.",
    internacional: "ACG Clinical Guideline: Management of Irritable Bowel Syndrome, 2021."
  },
  bibliografia: [
    "Lacy BE, et al. Am J Gastroenterol. 2021;116:17-44."
  ]
},
{
  id: "GASTRO-408",
  especialidad: "Gastroenterología",
  tema: "Enfermedad celíaca",
  subtema: "Prueba serológica inicial",
  dificultad: "Media",
  caso: "Mujer de 27 años presenta diarrea crónica, pérdida de peso y ferropenia. Consume gluten habitualmente y se sospecha enfermedad celíaca.",
  pregunta: "¿Qué prueba serológica suele solicitarse inicialmente en un paciente que consume gluten?",
  opciones: [
    "Anticuerpos antitransglutaminasa tisular IgA junto con IgA total",
    "Anticuerpos antimitocondriales exclusivamente",
    "Anticuerpos anti-VHC",
    "Alfafetoproteína",
    "Antígeno prostático específico"
  ],
  respuestaCorrecta: 0,
  explicacion: "La prueba inicial habitual es anti-transglutaminasa tisular IgA, acompañada de IgA total para detectar deficiencia de IgA. En pacientes con deficiencia de IgA se utilizan pruebas basadas en IgG. No debe retirarse el gluten antes de completar la evaluación diagnóstica.",
  perlaENARM: "Sospecha de celiaquía: anti-transglutaminasa IgA más IgA total mientras el paciente consume gluten.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de enfermedad celíaca.",
    internacional: "ACG Clinical Guideline: Diagnosis and Management of Celiac Disease."
  },
  bibliografia: [
    "Rubio-Tapia A, et al. ACG Clinical Guideline: Diagnosis and Management of Celiac Disease. Am J Gastroenterol. 2023."
  ]
},
{
  id: "GASTRO-409",
  especialidad: "Gastroenterología",
  tema: "Cáncer colorrectal",
  subtema: "Síndrome de Lynch",
  dificultad: "Media",
  caso: "Hombre de 39 años presenta cáncer de colon. Su madre tuvo cáncer endometrial a los 44 años y un hermano fue diagnosticado con cáncer colorrectal antes de los 45 años.",
  pregunta: "¿Qué síndrome hereditario debe sospecharse?",
  opciones: [
    "Síndrome de Lynch",
    "Enfermedad de Wilson",
    "Síndrome de intestino irritable",
    "Colangitis biliar primaria",
    "Síndrome de Gilbert"
  ],
  respuestaCorrecta: 0,
  explicacion: "El cáncer colorrectal a edad temprana y la agregación familiar de cáncer colorrectal y endometrial sugieren síndrome de Lynch, asociado con alteraciones de genes de reparación de errores de apareamiento del ADN.",
  perlaENARM: "Cáncer colorrectal temprano más cáncer endometrial familiar: pensar en síndrome de Lynch.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de cáncer colorrectal hereditario.",
    internacional: "NCCN Clinical Practice Guidelines in Oncology: Genetic/Familial High-Risk Assessment."
  },
  bibliografia: [
    "NCCN. Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric."
  ]
},
{
  id: "GASTRO-410",
  especialidad: "Gastroenterología",
  tema: "Cáncer colorrectal",
  subtema: "Síndrome de poliposis adenomatosa familiar",
  dificultad: "Media",
  caso: "Hombre de 24 años tiene cientos de pólipos adenomatosos en el colon y un padre sometido a colectomía por poliposis a edad temprana.",
  pregunta: "¿Qué alteración genética se asocia clásicamente con la poliposis adenomatosa familiar?",
  opciones: [
    "Mutación germinal del gen APC",
    "Mutación del gen ATP7B",
    "Mutación exclusiva del gen HFE",
    "Infección por virus de hepatitis A",
    "Deficiencia aislada de lactasa"
  ],
  respuestaCorrecta: 0,
  explicacion: "La poliposis adenomatosa familiar clásica se asocia con mutaciones germinales del gen APC y un riesgo muy elevado de cáncer colorrectal si no se interviene. Requiere asesoramiento genético y manejo especializado.",
  perlaENARM: "Cientos de adenomas en un paciente joven: sospechar poliposis adenomatosa familiar por APC.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de síndromes hereditarios de cáncer colorrectal.",
    internacional: "NCCN Clinical Practice Guidelines in Oncology: Genetic/Familial High-Risk Assessment."
  },
  bibliografia: [
    "NCCN. Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric."
  ]
},
{
  id: "GASTRO-411",
  especialidad: "Gastroenterología",
  tema: "Cáncer gástrico",
  subtema: "Diagnóstico y estadificación",
  dificultad: "Media",
  caso: "Hombre de 64 años presenta pérdida de peso, saciedad temprana y una lesión gástrica cuya biopsia confirma adenocarcinoma.",
  pregunta: "¿Cuál es el siguiente principio de manejo antes de definir el tratamiento oncológico?",
  opciones: [
    "Completar la estadificación y evaluar la resecabilidad",
    "Indicar solo antiácidos",
    "Iniciar tratamiento sin conocer la extensión tumoral",
    "Realizar colonoscopia diaria",
    "Suspender toda evaluación después de la biopsia"
  ],
  respuestaCorrecta: 0,
  explicacion: "Después de confirmar adenocarcinoma gástrico, la estadificación determina la extensión local y a distancia, ayuda a valorar la resecabilidad y orienta la elección entre tratamiento endoscópico, cirugía, tratamiento perioperatorio o terapia sistémica.",
  perlaENARM: "Cáncer gástrico confirmado: histología, estadificación y discusión multidisciplinaria antes de elegir tratamiento.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de cáncer gástrico.",
    internacional: "NCCN Clinical Practice Guidelines in Oncology: Gastric Cancer."
  },
  bibliografia: [
    "National Comprehensive Cancer Network. NCCN Guidelines: Gastric Cancer."
  ]
},
{
  id: "GASTRO-412",
  especialidad: "Gastroenterología",
  tema: "Cáncer hepatocelular",
  subtema: "Diagnóstico por imagen",
  dificultad: "Media",
  caso: "Hombre de 61 años con cirrosis presenta una lesión hepática de 2.4 cm en ultrasonido de vigilancia.",
  pregunta: "¿Qué estudio permite caracterizar la lesión y evaluar patrones radiológicos compatibles con carcinoma hepatocelular?",
  opciones: [
    "TC multifásica con contraste o resonancia magnética hepática con protocolo dinámico",
    "Radiografía simple de abdomen",
    "Colonoscopia",
    "Manometría esofágica",
    "Prueba de aliento para H. pylori"
  ],
  respuestaCorrecta: 0,
  explicacion: "En pacientes de riesgo, la TC multifásica o la resonancia dinámica pueden identificar patrones radiológicos característicos de carcinoma hepatocelular. La interpretación depende del tamaño de la lesión, la calidad del estudio y los criterios diagnósticos validados.",
  perlaENARM: "En cirrosis, una lesión focal debe caracterizarse con imagen dinámica; la alfafetoproteína aislada no confirma el diagnóstico.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de carcinoma hepatocelular.",
    internacional: "AASLD Practice Guidance on hepatocellular carcinoma."
  },
  bibliografia: [
    "Singal AG, et al. AASLD Practice Guidance on prevention, diagnosis, and treatment of hepatocellular carcinoma. Hepatology."
  ]
},
{
  id: "GASTRO-413",
  especialidad: "Gastroenterología",
  tema: "Hemocromatosis",
  subtema: "Interpretación de estudios de hierro",
  dificultad: "Media",
  caso: "Hombre de 50 años presenta elevación persistente de ferritina y saturación de transferrina del 72%. No tiene antecedente reciente de transfusiones.",
  pregunta: "¿Cuál es la interpretación más apropiada de estos hallazgos?",
  opciones: [
    "La saturación de transferrina elevada sugiere sobrecarga de hierro y justifica evaluación etiológica",
    "La ferritina elevada confirma por sí sola hemocromatosis hereditaria",
    "Los resultados excluyen cualquier enfermedad hepática",
    "El diagnóstico es deficiencia absoluta de hierro",
    "La saturación de transferrina no tiene utilidad clínica"
  ],
  respuestaCorrecta: 0,
  explicacion: "La saturación de transferrina elevada orienta a sobrecarga de hierro y debe interpretarse junto con ferritina, antecedentes, función hepática y posibles causas secundarias. La ferritina también puede elevarse por inflamación, hepatopatía y otras condiciones.",
  perlaENARM: "Ferritina alta no equivale siempre a hemocromatosis; interpretar la saturación de transferrina y el contexto.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de sobrecarga de hierro.",
    internacional: "EASL Clinical Practice Guidelines on Haemochromatosis, 2022."
  },
  bibliografia: [
    "EASL Clinical Practice Guidelines on Haemochromatosis. J Hepatol. 2022."
  ]
},
{
  id: "GASTRO-414",
  especialidad: "Gastroenterología",
  tema: "Enfermedad de Wilson",
  subtema: "Evaluación diagnóstica",
  dificultad: "Media",
  caso: "Joven de 20 años con alteraciones hepáticas y síntomas neurológicos presenta sospecha de enfermedad de Wilson.",
  pregunta: "¿Cuál es una estrategia apropiada para evaluar esta enfermedad?",
  opciones: [
    "Integrar ceruloplasmina, cobre urinario de 24 horas, evaluación oftalmológica y otros hallazgos clínicos",
    "Usar únicamente la concentración sérica de sodio",
    "Confirmar con una prueba de aliento para H. pylori",
    "Utilizar exclusivamente la concentración de lipasa",
    "Descartar Wilson si las aminotransferasas son normales en una medición"
  ],
  respuestaCorrecta: 0,
  explicacion: "El diagnóstico de Wilson requiere integrar datos clínicos, bioquímicos y, cuando corresponda, genéticos o histológicos. La ceruloplasmina aislada no es suficiente para excluir o confirmar todos los casos.",
  perlaENARM: "Joven con hepatopatía y síntomas neurológicos: evaluar metabolismo del cobre con un abordaje integrado.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de enfermedad de Wilson.",
    internacional: "EASL-ERN Clinical Practice Guidelines on Wilson's Disease."
  },
  bibliografia: [
    "European Association for the Study of the Liver. EASL-ERN Clinical Practice Guidelines on Wilson's Disease."
  ]
},
{
  id: "GASTRO-415",
  especialidad: "Gastroenterología",
  tema: "Hepatitis autoinmune",
  subtema: "Diagnóstico diferencial",
  dificultad: "Media",
  caso: "Mujer de 38 años presenta aminotransferasas elevadas, IgG alta y anticuerpos antinucleares positivos. Antes de iniciar inmunosupresión se evalúan otras causas de hepatitis.",
  pregunta: "¿Cuál es un principio esencial para establecer el diagnóstico de hepatitis autoinmune?",
  opciones: [
    "Integrar serología, IgG, exclusión de causas alternativas y evaluación histológica cuando corresponda",
    "Diagnosticarla exclusivamente por ANA positivo",
    "Excluirla siempre que exista cualquier otra enfermedad autoinmune",
    "Usar la lipasa como criterio principal",
    "Confirmarla mediante colonoscopia"
  ],
  respuestaCorrecta: 0,
  explicacion: "Los autoanticuerpos pueden encontrarse en otras enfermedades y no son diagnósticos por sí solos. La evaluación integra patrón bioquímico, IgG, autoanticuerpos, exclusión de otras causas y, habitualmente, biopsia hepática.",
  perlaENARM: "ANA positivo no confirma hepatitis autoinmune; se necesita integración clínica, bioquímica y, generalmente, histológica.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de hepatitis autoinmune.",
    internacional: "EASL Clinical Practice Guidelines on Autoimmune Hepatitis."
  },
  bibliografia: [
    "European Association for the Study of the Liver. Clinical Practice Guidelines on Autoimmune Hepatitis."
  ]
},
{
  id: "GASTRO-416",
  especialidad: "Gastroenterología",
  tema: "Colangitis biliar primaria",
  subtema: "Tratamiento inicial",
  dificultad: "Media",
  caso: "Mujer de 56 años presenta colestasis persistente y anticuerpos antimitocondriales positivos, compatibles con colangitis biliar primaria.",
  pregunta: "¿Cuál es el tratamiento farmacológico de primera línea habitual?",
  opciones: [
    "Ácido ursodesoxicólico",
    "Loperamida como tratamiento de la enfermedad hepática",
    "Corticoides a dosis altas en todos los pacientes",
    "Antibióticos indefinidos",
    "AINE como monoterapia"
  ],
  respuestaCorrecta: 0,
  explicacion: "El ácido ursodesoxicólico es el tratamiento de primera línea habitual en colangitis biliar primaria. La respuesta bioquímica debe evaluarse posteriormente para identificar a quienes requieren valoración terapéutica adicional.",
  perlaENARM: "Colangitis biliar primaria: ácido ursodesoxicólico y seguimiento de la respuesta bioquímica.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de colangitis biliar primaria.",
    internacional: "EASL Clinical Practice Guidelines on Primary Biliary Cholangitis."
  },
  bibliografia: [
    "European Association for the Study of the Liver. Clinical Practice Guidelines on Primary Biliary Cholangitis."
  ]
},
{
  id: "GASTRO-417",
  especialidad: "Gastroenterología",
  tema: "Colangitis esclerosante primaria",
  subtema: "Evaluación de estenosis dominante",
  dificultad: "Media",
  caso: "Hombre de 43 años con colangitis esclerosante primaria presenta empeoramiento del prurito, ictericia y aumento reciente de bilirrubina.",
  pregunta: "¿Cuál es la conducta más apropiada?",
  opciones: [
    "Evaluar una posible estenosis biliar relevante y descartar colangiocarcinoma",
    "Atribuir todos los síntomas a intestino irritable",
    "Suspender el seguimiento hepatobiliar",
    "Iniciar tratamiento para H. pylori sin estudios",
    "Realizar exclusivamente una radiografía de tórax"
  ],
  respuestaCorrecta: 0,
  explicacion: "El empeoramiento clínico o bioquímico en colangitis esclerosante primaria requiere evaluar obstrucción biliar, estenosis clínicamente relevantes e infección, además de considerar colangiocarcinoma según el contexto.",
  perlaENARM: "Colangitis esclerosante primaria con ictericia nueva o progresiva: descartar obstrucción y malignidad.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de colangiopatías.",
    internacional: "EASL Clinical Practice Guidelines on sclerosing cholangitis."
  },
  bibliografia: [
    "European Association for the Study of the Liver. Clinical Practice Guidelines on sclerosing cholangitis."
  ]
},
{
  id: "GASTRO-418",
  especialidad: "Gastroenterología",
  tema: "Enfermedad inflamatoria intestinal",
  subtema: "Cribado de infección antes de biológicos",
  dificultad: "Media",
  caso: "Paciente con enfermedad de Crohn moderada a grave será tratado con un agente biológico inmunomodulador.",
  pregunta: "¿Qué evaluación infecciosa es importante realizar antes de iniciar determinados tratamientos biológicos?",
  opciones: [
    "Evaluar tuberculosis latente y hepatitis B, entre otras infecciones según el fármaco y el riesgo",
    "Realizar únicamente una prueba de embarazo en todos los pacientes como única evaluación",
    "Descartar infección exclusivamente mediante radiografía de mano",
    "Evitar toda evaluación infecciosa",
    "Administrar antibióticos de amplio espectro a todos los pacientes"
  ],
  respuestaCorrecta: 0,
  explicacion: "Antes de determinadas terapias biológicas es importante evaluar tuberculosis latente y hepatitis B, además de actualizar vacunación y valorar otras infecciones según el medicamento y los antecedentes. El cribado reduce el riesgo de reactivación infecciosa.",
  perlaENARM: "Antes de anti-TNF: recordar tuberculosis y hepatitis B, además de revisar vacunación y riesgos individuales.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de enfermedad inflamatoria intestinal y terapia biológica.",
    internacional: "ECCO Guidelines on prevention, diagnosis, and management of infections in inflammatory bowel disease."
  },
  bibliografia: [
    "European Crohn's and Colitis Organisation. Guidelines on infections in inflammatory bowel disease."
  ]
},
{
  id: "GASTRO-419",
  especialidad: "Gastroenterología",
  tema: "Enfermedad inflamatoria intestinal",
  subtema: "Megacolon tóxico",
  dificultad: "Media",
  caso: "Paciente con colitis ulcerosa grave presenta distensión abdominal marcada, fiebre, taquicardia y deterioro del estado general. La radiografía muestra dilatación colónica importante.",
  pregunta: "¿Qué complicación debe sospecharse?",
  opciones: [
    "Megacolon tóxico",
    "ERGE",
    "Hernia hiatal",
    "Síndrome de Gilbert",
    "Colelitiasis asintomática"
  ],
  respuestaCorrecta: 0,
  explicacion: "El megacolon tóxico es una complicación grave caracterizada por dilatación colónica no obstructiva acompañada de toxicidad sistémica. Requiere hospitalización, soporte, tratamiento de la causa y valoración multidisciplinaria urgente.",
  perlaENARM: "Colitis grave más dilatación colónica y toxicidad sistémica: sospechar megacolon tóxico.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de colitis ulcerosa grave y megacolon tóxico.",
    internacional: "ECCO Guidelines on Ulcerative Colitis."
  },
  bibliografia: [
    "European Crohn's and Colitis Organisation. Guidelines on Ulcerative Colitis."
  ]
},
{
  id: "GASTRO-420",
  especialidad: "Gastroenterología",
  tema: "Enfermedad inflamatoria intestinal",
  subtema: "Diarrea por Clostridioides difficile",
  dificultad: "Media",
  caso: "Mujer de 35 años con colitis ulcerosa en tratamiento inmunosupresor presenta aumento reciente de diarrea sanguinolenta después de recibir antibióticos.",
  pregunta: "¿Qué causa infecciosa debe investigarse porque puede imitar o agravar un brote de enfermedad inflamatoria intestinal?",
  opciones: [
    "Infección por Clostridioides difficile",
    "Hepatitis A crónica",
    "Enfermedad de Wilson",
    "Hemocromatosis",
    "Colangitis biliar primaria"
  ],
  respuestaCorrecta: 0,
  explicacion: "La infección por C. difficile puede producir diarrea y agravar la evolución de la enfermedad inflamatoria intestinal. Ante un cambio clínico relevante, especialmente después de antibióticos, es importante realizar pruebas apropiadas para descartar infección.",
  perlaENARM: "Antes de atribuir toda diarrea nueva a un brote de EII, investigar infección según el contexto.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de EII e infección por C. difficile.",
    internacional: "ACG Clinical Guidelines on Clostridioides difficile Infection."
  },
  bibliografia: [
    "American College of Gastroenterology. Clinical Guidelines on Clostridioides difficile Infection."
  ]
},
{
  id: "GASTRO-421",
  especialidad: "Gastroenterología",
  tema: "Síndrome de intestino irritable",
  subtema: "Estudios selectivos en diarrea crónica",
  dificultad: "Media",
  caso: "Mujer de 29 años presenta diarrea crónica sin sangrado ni pérdida de peso. El médico sospecha intestino irritable con predominio de diarrea.",
  pregunta: "¿Qué prueba puede ayudar a descartar enfermedad celíaca en una evaluación selectiva?",
  opciones: [
    "Anticuerpos antitransglutaminasa tisular IgA junto con IgA total",
    "Alfafetoproteína",
    "Anticuerpos anti-VHC como única prueba",
    "Troponina",
    "Antígeno prostático específico"
  ],
  respuestaCorrecta: 0,
  explicacion: "En pacientes con síntomas compatibles con intestino irritable y diarrea, puede considerarse serología para enfermedad celíaca. La selección de otras pruebas depende de los síntomas, los factores de riesgo y los hallazgos de alarma.",
  perlaENARM: "Diarrea crónica: no asumir intestino irritable sin valorar causas orgánicas relevantes.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de síndrome de intestino irritable y enfermedad celíaca.",
    internacional: "ACG Clinical Guideline: Management of Irritable Bowel Syndrome, 2021."
  },
  bibliografia: [
    "Lacy BE, et al. Am J Gastroenterol. 2021;116:17-44."
  ]
},
{
  id: "GASTRO-422",
  especialidad: "Gastroenterología",
  tema: "Cáncer colorrectal",
  subtema: "Anemia ferropénica",
  dificultad: "Media",
  caso: "Hombre de 61 años presenta anemia ferropénica sin sangrado visible, sin explicación nutricional y sin evaluación digestiva previa.",
  pregunta: "¿Cuál es una estrategia diagnóstica apropiada en un hombre adulto con anemia ferropénica inexplicada?",
  opciones: [
    "Evaluación gastrointestinal, habitualmente con endoscopia alta y colonoscopia según el contexto",
    "Administrar hierro indefinidamente sin investigar la causa",
    "Realizar solo radiografía de tórax",
    "Descartar enfermedad digestiva porque no hay hematoquecia",
    "Solicitar únicamente amilasa"
  ],
  respuestaCorrecta: 0,
  explicacion: "La anemia ferropénica inexplicada en hombres adultos puede reflejar pérdida digestiva crónica, incluida una neoplasia. La evaluación endoscópica del tubo digestivo se considera habitualmente, ajustada al estado clínico y a las circunstancias individuales.",
  perlaENARM: "Anemia ferropénica inexplicada en un adulto: investigar pérdida digestiva, aunque no haya sangre visible.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de anemia ferropénica y cáncer colorrectal.",
    internacional: "AGA Clinical Practice Guidelines on Gastrointestinal Evaluation of Iron Deficiency Anemia."
  },
  bibliografia: [
    "Ko CW, et al. AGA Clinical Practice Guidelines on the Gastrointestinal Evaluation of Iron Deficiency Anemia. Gastroenterology. 2020."
  ]
},
{
  id: "GASTRO-423",
  especialidad: "Gastroenterología",
  tema: "Cáncer colorrectal",
  subtema: "Pólipos adenomatosos",
  dificultad: "Media",
  caso: "Mujer de 58 años se somete a colonoscopia de tamizaje y se reseca un adenoma tubular de 8 mm. La resección es completa y no existen otros hallazgos de alto riesgo.",
  pregunta: "¿Qué factor es importante para determinar el intervalo de vigilancia posterior?",
  opciones: [
    "Número, tamaño, histología y calidad de la colonoscopia y resección",
    "El grupo sanguíneo exclusivamente",
    "La talla del paciente",
    "La presencia de ERGE como único dato",
    "El nivel de sodio sérico"
  ],
  respuestaCorrecta: 0,
  explicacion: "El intervalo de vigilancia tras polipectomía depende del número, tamaño e histología de las lesiones, la calidad de la preparación, la integridad de la resección y la guía aplicable.",
  perlaENARM: "La vigilancia tras polipectomía se individualiza según hallazgos histológicos y calidad del estudio.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de vigilancia posterior a polipectomía.",
    internacional: "US Multi-Society Task Force on Colorectal Cancer: Recommendations for Follow-Up After Colonoscopy and Polypectomy."
  },
  bibliografia: [
    "Gupta S, et al. Recommendations for Follow-Up After Colonoscopy and Polypectomy. Gastroenterology. 2020."
  ]
},
{
  id: "GASTRO-424",
  especialidad: "Gastroenterología",
  tema: "Cáncer gástrico",
  subtema: "Biomarcadores en enfermedad avanzada",
  dificultad: "Media",
  caso: "Hombre de 67 años tiene adenocarcinoma gástrico metastásico confirmado por biopsia. Se considera tratamiento sistémico de primera línea.",
  pregunta: "¿Cuál es el principio más apropiado para orientar el tratamiento sistémico?",
  opciones: [
    "Evaluar biomarcadores relevantes, como HER2, PD-L1, MSI/MMR y CLDN18.2 cuando corresponda",
    "Seleccionar tratamiento solo por la edad",
    "Evitar cualquier estudio molecular en enfermedad avanzada",
    "Usar siempre el mismo esquema independientemente de los resultados",
    "Indicar únicamente tratamiento para H. pylori"
  ],
  respuestaCorrecta: 0,
  explicacion: "En adenocarcinoma gástrico avanzado, los biomarcadores pueden orientar tratamientos dirigidos o inmunoterapia en pacientes seleccionados. La disponibilidad, indicaciones regulatorias y criterios de cada fármaco deben verificarse en la guía vigente.",
  perlaENARM: "Cáncer gástrico avanzado: la caracterización molecular puede cambiar la elección terapéutica.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de cáncer gástrico y disponibilidad local de biomarcadores.",
    internacional: "NCCN Clinical Practice Guidelines in Oncology: Gastric Cancer."
  },
  bibliografia: [
    "National Comprehensive Cancer Network. NCCN Guidelines: Gastric Cancer."
  ]
},
{
  id: "GASTRO-425",
  especialidad: "Gastroenterología",
  tema: "Cáncer hepatocelular",
  subtema: "Interpretación de alfafetoproteína",
  dificultad: "Media",
  caso: "Hombre de 58 años con cirrosis presenta una alfafetoproteína normal, pero el ultrasonido identifica una lesión hepática sospechosa.",
  pregunta: "¿Cuál es la interpretación más apropiada?",
  opciones: [
    "La alfafetoproteína normal no excluye carcinoma hepatocelular y debe caracterizarse la lesión",
    "El resultado descarta definitivamente cáncer hepatocelular",
    "La alfafetoproteína normal confirma metástasis",
    "No se requiere seguimiento de la lesión",
    "El resultado confirma enfermedad de Wilson"
  ],
  respuestaCorrecta: 0,
  explicacion: "La alfafetoproteína tiene sensibilidad limitada y puede ser normal en carcinoma hepatocelular. Una lesión sospechosa en una persona de riesgo requiere evaluación por imagen dinámica y seguimiento diagnóstico apropiado.",
  perlaENARM: "Alfafetoproteína normal no descarta carcinoma hepatocelular.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de carcinoma hepatocelular.",
    internacional: "AASLD Practice Guidance on hepatocellular carcinoma."
  },
  bibliografia: [
    "Singal AG, et al. AASLD Practice Guidance on prevention, diagnosis, and treatment of hepatocellular carcinoma. Hepatology."
  ]
},
{
  id: "GASTRO-426",
  especialidad: "Gastroenterología",
  tema: "ERGE",
  subtema: "ERGE refractaria",
  dificultad: "Media",
  caso: "Mujer de 44 años presenta pirosis persistente pese a tratamiento con IBP. Refiere que toma el medicamento después del desayuno y omite dosis varios días por semana.",
  pregunta: "¿Cuál es el siguiente paso más apropiado?",
  opciones: [
    "Revisar adherencia y optimizar el horario del IBP antes de clasificarla como refractaria",
    "Indicar cirugía antirreflujo inmediata sin evaluación",
    "Diagnosticar cáncer esofágico sin endoscopia",
    "Suspender toda intervención terapéutica",
    "Iniciar antibióticos de amplio espectro"
  ],
  respuestaCorrecta: 0,
  explicacion: "Antes de considerar ERGE refractaria deben revisarse la adherencia y la administración correcta del IBP, generalmente 30-60 minutos antes de una comida. Si persisten los síntomas pese a tratamiento optimizado, se evalúa la necesidad de estudios objetivos.",
  perlaENARM: "Síntomas persistentes no significan necesariamente ERGE refractaria: verifica primero adherencia y horario del IBP.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de ERGE.",
    internacional: "ACG Clinical Guideline for the Diagnosis and Management of GERD, 2022."
  },
  bibliografia: [
    "Katz PO, et al. Am J Gastroenterol. 2022;117:27-56."
  ]
},
{
  id: "GASTRO-427",
  especialidad: "Gastroenterología",
  tema: "Enfermedad celíaca",
  subtema: "Tratamiento",
  dificultad: "Media",
  caso: "Mujer de 25 años tiene enfermedad celíaca confirmada mediante evaluación clínica, serológica e histológica.",
  pregunta: "¿Cuál es el tratamiento nutricional fundamental?",
  opciones: [
    "Dieta estricta sin gluten de manera permanente",
    "Eliminar exclusivamente los lácteos en todos los pacientes",
    "Consumir más trigo para inducir tolerancia",
    "Utilizar antibióticos de forma indefinida",
    "Suspender toda ingesta de fibra"
  ],
  respuestaCorrecta: 0,
  explicacion: "La dieta estricta sin gluten es el tratamiento fundamental de la enfermedad celíaca. Se recomienda educación nutricional y seguimiento para valorar respuesta clínica, estado nutricional y adherencia.",
  perlaENARM: "Celiaquía confirmada: dieta sin gluten de forma permanente y seguimiento nutricional.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de enfermedad celíaca.",
    internacional: "ACG Clinical Guideline: Diagnosis and Management of Celiac Disease, 2023."
  },
  bibliografia: [
    "Rubio-Tapia A, et al. ACG Clinical Guideline: Diagnosis and Management of Celiac Disease. Am J Gastroenterol. 2023."
  ]
},
{
  id: "GASTRO-428",
  especialidad: "Gastroenterología",
  tema: "Pancreatitis crónica",
  subtema: "Insuficiencia pancreática exocrina",
  dificultad: "Media",
  caso: "Hombre de 55 años con pancreatitis crónica presenta pérdida de peso y evacuaciones voluminosas, grasosas y difíciles de eliminar. Se sospecha maldigestión de grasas.",
  pregunta: "¿Qué tratamiento está indicado cuando se confirma insuficiencia pancreática exocrina sintomática?",
  opciones: [
    "Terapia de reemplazo con enzimas pancreáticas junto con soporte nutricional",
    "Antibióticos de amplio espectro indefinidos",
    "Restricción absoluta de toda grasa sin valoración nutricional",
    "Lactulosa como tratamiento único",
    "Anticoagulación de por vida en todos los casos"
  ],
  respuestaCorrecta: 0,
  explicacion: "La insuficiencia pancreática exocrina puede causar esteatorrea, pérdida ponderal y deficiencias nutricionales. El reemplazo enzimático con las comidas y la evaluación nutricional son componentes centrales del manejo.",
  perlaENARM: "Pancreatitis crónica con esteatorrea y pérdida de peso: considerar insuficiencia pancreática exocrina.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de pancreatitis crónica e insuficiencia pancreática exocrina.",
    internacional: "AGA Clinical Practice Update on the Epidemiology, Evaluation, and Management of Exocrine Pancreatic Insufficiency."
  },
  bibliografia: [
    "Whitcomb DC, et al. AGA Clinical Practice Update on Exocrine Pancreatic Insufficiency."
  ]
},
{
  id: "GASTRO-429",
  especialidad: "Gastroenterología",
  tema: "Cáncer colorrectal",
  subtema: "Síndrome obstructivo",
  dificultad: "Media",
  caso: "Hombre de 70 años presenta distensión abdominal progresiva, vómitos, obstipación y pérdida de peso. La tomografía identifica una lesión estenosante del colon izquierdo con dilatación proximal.",
  pregunta: "¿Cuál es la prioridad inicial?",
  opciones: [
    "Evaluar y estabilizar al paciente, valorar la obstrucción y solicitar manejo quirúrgico especializado urgente",
    "Indicar laxantes y dar de alta",
    "Realizar tamizaje anual sin atender la obstrucción",
    "Iniciar dieta rica en fibra sin evaluación",
    "Tratar exclusivamente con IBP"
  ],
  respuestaCorrecta: 0,
  explicacion: "Una neoplasia colorrectal puede producir obstrucción intestinal. Se requiere estabilización, evaluación de complicaciones y planificación multidisciplinaria urgente, considerando la necesidad de descompresión o cirugía según el caso.",
  perlaENARM: "Cáncer colorrectal con obstrucción: primero estabilizar y resolver la urgencia; después completar la estrategia oncológica.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de cáncer colorrectal y obstrucción intestinal.",
    internacional: "NCCN Clinical Practice Guidelines in Oncology: Colon Cancer."
  },
  bibliografia: [
    "National Comprehensive Cancer Network. NCCN Guidelines: Colon Cancer."
  ]
},
{
  id: "GASTRO-430",
  especialidad: "Gastroenterología",
  tema: "Hemorragia gastrointestinal alta",
  subtema: "Sospecha de hemorragia variceal",
  dificultad: "Media",
  caso: "Hombre de 60 años con cirrosis presenta hematemesis abundante e hipotensión. Se sospecha ruptura de várices esofágicas.",
  pregunta: "Además de la reanimación hemodinámica, ¿qué combinación farmacológica debe iniciarse tempranamente ante la sospecha de hemorragia variceal?",
  opciones: [
    "Fármaco vasoactivo, como octreótido o terlipresina según disponibilidad, y antibiótico profiláctico",
    "AINE y anticoagulante",
    "Loperamida y antiespasmódico",
    "IBP como único tratamiento específico de la hemorragia variceal",
    "Corticoides sistémicos como monoterapia"
  ],
  respuestaCorrecta: 0,
  explicacion: "En la hemorragia variceal sospechada se inicia tempranamente un fármaco vasoactivo y profilaxis antibiótica, junto con reanimación y endoscopia terapéutica una vez que el paciente está suficientemente estabilizado. El manejo debe adaptarse a la gravedad y a las contraindicaciones.",
  perlaENARM: "Hemorragia variceal: reanimación, vasoactivo, antibiótico y ligadura endoscópica cuando corresponda.",
  gpc: {
    mexico: "Verificar la GPC mexicana vigente de hemorragia variceal en cirrosis.",
    internacional: "Baveno VII Consensus, 2022."
  },
  bibliografia: [
    "de Franchis R, et al. Baveno VII – Renewing consensus in portal hypertension. J Hepatol. 2022;76:959-974."
  ]
}
];
