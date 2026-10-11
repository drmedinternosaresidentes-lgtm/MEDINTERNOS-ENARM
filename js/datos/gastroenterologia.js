
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
}

];
