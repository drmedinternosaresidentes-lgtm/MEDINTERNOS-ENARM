window.BANCO_NEFROLOGIA = [

{
  id: "NEF-001",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda",
  subtema: "Criterios KDIGO y limitaciones de la creatinina",
  dificultad: "Muy alta",
  caso: `Varón de 67 años ingresado por choque séptico. Su creatinina basal era de 0.72 mg/dL y, 36 horas después, alcanza 1.04 mg/dL. La diuresis permanece en 0.65 mL/kg/h. El equipo considera que no existe lesión renal aguda porque la creatinina continúa dentro del intervalo de referencia del laboratorio.`,
  pregunta: "¿Qué error conceptual invalida la interpretación del equipo?",
  opciones: [
    "La lesión renal aguda solo se diagnostica cuando la creatinina supera 2 mg/dL",
    "El aumento absoluto de 0.32 mg/dL en 48 horas cumple un criterio KDIGO independientemente del intervalo de referencia poblacional",
    "La diuresis conservada descarta lesión renal aguda por definición",
    "El diagnóstico requiere demostrar cilindros granulosos en el sedimento",
    "La creatinina debe aumentar al menos tres veces para establecer cualquier estadio"
  ],
  respuestaCorrecta: 1,
  explicacion: `KDIGO define lesión renal aguda por un aumento de creatinina ≥0.3 mg/dL en 48 horas, un incremento ≥1.5 veces respecto al basal en los siete días previos o diuresis <0.5 mL/kg/h durante al menos seis horas. El aumento de 0.72 a 1.04 mg/dL cumple el criterio absoluto. La creatinina es un marcador tardío y su valor aislado depende de masa muscular, generación y volumen de distribución. En sepsis, una elevación aparentemente pequeña puede representar una caída clínicamente importante del filtrado.`,
  perlaENARM: "El cambio respecto al basal importa más que el límite superior normal del laboratorio para reconocer una lesión renal aguda temprana.",
  gpc: {
    mexico: "Consultar la GPC mexicana vigente sobre prevención, diagnóstico y tratamiento de lesión renal aguda.",
    internacional: "KDIGO Clinical Practice Guideline for Acute Kidney Injury, criterios diagnósticos y estadificación."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., capítulo de lesión renal aguda; KDIGO, Acute Kidney Injury."
},
{
  id: "NEF-002",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda",
  subtema: "Estadificación por diuresis",
  dificultad: "Muy alta",
  caso: `Paciente de 80 kg hospitalizado por pancreatitis aguda. Durante las últimas 14 horas mantiene una diuresis de 220 mL. La creatinina pasó de 1.0 a 1.4 mg/dL y todavía no cumple criterios de estadio 2 por creatinina. No recibe diuréticos y la sonda vesical está permeable.`,
  pregunta: "¿Qué estadio KDIGO corresponde por el criterio de diuresis?",
  opciones: [
    "Estadio 1, porque la creatinina aumentó menos de 1.5 veces",
    "Estadio 2, porque la diuresis es inferior a 0.5 mL/kg/h durante más de 12 horas",
    "Estadio 3, porque cualquier oliguria mayor de seis horas equivale a anuria",
    "No puede estadificarse por diuresis si la creatinina no alcanza el umbral correspondiente",
    "Estadio 3, porque el volumen urinario acumulado es menor de 500 mL"
  ],
  respuestaCorrecta: 1,
  explicacion: `La diuresis promedio es de 220 mL/14 h = 15.7 mL/h, equivalente a aproximadamente 0.20 mL/kg/h. KDIGO clasifica como estadio 2 la diuresis <0.5 mL/kg/h durante ≥12 horas. El estadio 3 por diuresis incluye <0.3 mL/kg/h durante ≥24 horas o anuria durante ≥12 horas. La clasificación final corresponde al estadio más grave alcanzado por creatinina o diuresis.`,
  perlaENARM: "La diuresis puede determinar un estadio más grave que la creatinina; calcula siempre el volumen por kilogramo y por hora.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre lesión renal aguda.",
    internacional: "KDIGO Clinical Practice Guideline for Acute Kidney Injury."
  },
  bibliografia: "KDIGO, Acute Kidney Injury, criterios de estadificación; Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed."
},
{
  id: "NEF-003",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda",
  subtema: "Fisiología de la lesión prerrenal",
  dificultad: "Muy alta",
  caso: `Varón de 56 años con hemorragia gastrointestinal, hipotensión y oliguria. La creatinina aumenta de 0.9 a 2.0 mg/dL. El sedimento es prácticamente normal, la osmolaridad urinaria es de 590 mOsm/kg y el sodio urinario es de 9 mEq/L. Tras la reposición de volumen, mejora la diuresis y desciende la creatinina.`,
  pregunta: "¿Qué respuesta fisiológica explica mejor la capacidad de concentración urinaria conservada?",
  opciones: [
    "Pérdida de la integridad tubular con incapacidad para reabsorber sodio",
    "Activación simpática y del sistema renina-angiotensina-aldosterona, junto con liberación de vasopresina",
    "Supresión de la reabsorción proximal de sodio y urea",
    "Aumento primario del flujo sanguíneo renal por vasodilatación aferente sostenida",
    "Necrosis extensa del epitelio tubular con formación de cilindros granulosos"
  ],
  respuestaCorrecta: 1,
  explicacion: `La disminución del volumen circulante efectivo activa mecanismos neurohormonales que conservan sodio y agua. Si el epitelio tubular permanece funcional, el riñón mantiene la capacidad de concentrar la orina y reduce la excreción de sodio. La recuperación tras corregir la hipovolemia respalda un componente hemodinámico reversible. No obstante, estos índices no son absolutos: enfermedad renal previa, diuréticos y otros factores pueden modificar la respuesta urinaria.`,
  perlaENARM: "La respuesta a la restauración de perfusión y el contexto clínico complementan los índices urinarios; ninguno de estos sustituye la valoración integral.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre lesión renal aguda y reposición de volumen.",
    internacional: "KDIGO, Acute Kidney Injury."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., fisiopatología y diagnóstico diferencial de lesión renal aguda."
},
{
  id: "NEF-004",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda",
  subtema: "Fracción excretada de sodio en enfermedad renal y tratamiento diurético",
  dificultad: "Muy alta",
  caso: `Mujer de 74 años con insuficiencia cardiaca, enfermedad renal crónica y deterioro agudo de la función renal. Recibió furosemida intravenosa dos horas antes de la toma de muestra. La fracción excretada de sodio es de 2.4%, el sedimento presenta pocos elementos y la ecografía no muestra obstrucción.`,
  pregunta: "¿Cuál de las siguientes conclusiones excede lo que permiten afirmar los datos?",
  opciones: [
    "La furosemida puede elevar la excreción urinaria de sodio",
    "La enfermedad renal crónica puede modificar la interpretación de índices urinarios",
    "Una fracción excretada de sodio superior al 2% demuestra por sí sola necrosis tubular aguda",
    "La congestión venosa puede contribuir al deterioro renal en insuficiencia cardiaca",
    "Es necesario integrar hemodinámica, sedimento y evolución de la función renal"
  ],
  respuestaCorrecta: 2,
  explicacion: `La fracción excretada de sodio puede ayudar a diferenciar patrones de lesión renal, pero pierde especificidad tras diuréticos y en diversos escenarios de enfermedad renal crónica, sepsis o lesión renal mixta. En insuficiencia cardiaca puede existir congestión venosa renal incluso con reducción del filtrado. Por tanto, una FENa elevada no demuestra de forma aislada lesión tubular estructural. La interpretación requiere contexto clínico y evolución.`,
  perlaENARM: "La FENa es una herramienta fisiológica, no una prueba confirmatoria universal de necrosis tubular aguda.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre lesión renal aguda e insuficiencia cardiaca.",
    internacional: "KDIGO, Acute Kidney Injury."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., diagnóstico diferencial de lesión renal aguda; KDIGO."
},
{
  id: "NEF-005",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda intrínseca",
  subtema: "Sedimento urinario y lesión tubular aguda",
  dificultad: "Muy alta",
  caso: `Paciente de 63 años con choque séptico que requirió vasopresores. Tras recuperar una presión arterial media estable, la creatinina continúa aumentando durante las siguientes 48 horas. El sedimento muestra células epiteliales tubulares y cilindros granulosos pigmentados. La ecografía descarta hidronefrosis.`,
  pregunta: "¿Qué mecanismo explica mejor la persistencia del deterioro después de corregir la hipotensión?",
  opciones: [
    "La perfusión adecuada excluye cualquier daño renal persistente",
    "El daño estructural tubular puede mantener disfunción renal después de recuperar la hemodinámica sistémica",
    "La creatinina continúa aumentando únicamente por secreción tubular de creatinina",
    "La lesión tubular solo ocurre cuando hay obstrucción urinaria",
    "Los cilindros granulosos indican exclusivamente glomerulonefritis proliferativa"
  ],
  respuestaCorrecta: 1,
  explicacion: `La lesión renal asociada a sepsis puede incluir alteraciones microcirculatorias, inflamación y daño tubular. Cuando existe lesión estructural, la normalización de la presión arterial no produce recuperación inmediata del filtrado. Las células tubulares y los cilindros granulosos apoyan lesión tubular aguda, aunque ningún hallazgo aislado determina su gravedad ni excluye mecanismos coexistentes. El manejo incluye tratar la causa, evitar nuevas agresiones y vigilar las complicaciones.`,
  perlaENARM: "La persistencia de disfunción tras corregir la perfusión sugiere que el componente hemodinámico puede haber evolucionado a lesión renal estructural.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre lesión renal aguda en pacientes críticos.",
    internacional: "KDIGO, Acute Kidney Injury."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., lesión tubular aguda y lesión renal asociada a sepsis."
},
{
  id: "NEF-006",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda",
  subtema: "Autorregulación glomerular y medicamentos",
  dificultad: "Muy alta",
  caso: `Varón de 70 años con hipertensión y enfermedad renal crónica, tratado con losartán y naproxeno. Tras varios días de vómitos presenta hipotensión relativa y elevación de creatinina. El sedimento no muestra cilindros patológicos y la ecografía es normal.`,
  pregunta: "¿Qué combinación de alteraciones hemodinámicas favorece la caída del filtrado glomerular?",
  opciones: [
    "Dilatación aferente por prostaglandinas y constricción eferente por angiotensina II conservadas",
    "Pérdida de vasodilatación aferente mediada por prostaglandinas y reducción del tono eferente mediado por angiotensina II",
    "Constricción aferente por angiotensina II y constricción eferente por losartán",
    "Aumento simultáneo de la resistencia aferente y disminución de la resistencia eferente por naproxeno exclusivamente",
    "Estimulación de la síntesis de prostaglandinas por inhibición de ciclooxigenasa"
  ],
  respuestaCorrecta: 1,
  explicacion: `Los AINE inhiben la síntesis de prostaglandinas, reduciendo la vasodilatación aferente compensadora durante la hipovolemia. Los ARA-II bloquean la acción de angiotensina II y reducen la constricción eferente que contribuye a mantener la presión intraglomerular. La combinación puede producir una caída hemodinámica del filtrado, especialmente en pacientes con enfermedad renal crónica y depleción de volumen.`,
  perlaENARM: "La autorregulación glomerular depende de mecanismos aferentes y eferentes; la combinación de hipovolemia, AINE y bloqueo del sistema renina-angiotensina aumenta el riesgo de lesión renal.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre lesión renal aguda y seguridad farmacológica.",
    internacional: "KDIGO, Acute Kidney Injury; KDIGO, Chronic Kidney Disease."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., fisiología renal y lesión renal aguda hemodinámica."
},
{
  id: "NEF-007",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda",
  subtema: "Rabdomiólisis y nefropatía por pigmentos",
  dificultad: "Muy alta",
  caso: `Varón de 29 años encontrado inconsciente tras consumo de sustancias y compresión prolongada de una extremidad. Presenta CPK de 32,000 U/L, potasio de 6.0 mEq/L, creatinina en ascenso y tira urinaria intensamente positiva para sangre con solo 0–2 eritrocitos por campo.`,
  pregunta: "¿Qué asociación fisiopatológica explica mejor el riesgo renal y la alteración urinaria?",
  opciones: [
    "Hematuria glomerular por proliferación mesangial y pérdida de eritrocitos en el sedimento",
    "Mioglobinuria por lesión muscular, con toxicidad tubular, vasoconstricción y formación de cilindros pigmentados",
    "Proteinuria selectiva por alteración exclusiva de podocitos",
    "Bilirrubinuria secundaria a hemólisis como única explicación del resultado",
    "Obstrucción ureteral bilateral causada por cristales de ácido úrico como mecanismo obligatorio"
  ],
  respuestaCorrecta: 1,
  explicacion: `La lesión muscular libera mioglobina, que puede producir una reacción positiva para hemo en la tira reactiva aunque existan pocos eritrocitos en microscopía. La mioglobina contribuye a lesión renal mediante toxicidad oxidativa, vasoconstricción y formación de cilindros, con mayor riesgo en hipovolemia y orina ácida. La hiperpotasemia es una complicación potencialmente mortal de la destrucción muscular y exige vigilancia electrocardiográfica y tratamiento según gravedad.`,
  perlaENARM: "Tira positiva para hemo con escasos eritrocitos y CPK muy elevada es un patrón clásico de mioglobinuria.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de rabdomiólisis y lesión renal aguda.",
    internacional: "KDIGO, Acute Kidney Injury; literatura especializada en rabdomiólisis."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., lesión tubular por pigmentos."
},
{
  id: "NEF-008",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda intrínseca",
  subtema: "Nefritis intersticial aguda y pruebas poco sensibles",
  dificultad: "Muy alta",
  caso: `Mujer de 51 años con creatinina basal de 0.8 mg/dL que aumenta a 2.6 mg/dL tras seis semanas de tratamiento con omeprazol. El sedimento muestra piuria estéril y proteinuria leve. No hay fiebre, exantema ni eosinofilia periférica.`,
  pregunta: "¿Qué dato sería incorrecto utilizar como criterio de exclusión de nefritis intersticial aguda?",
  opciones: [
    "Ausencia de la tríada clásica de fiebre, exantema y eosinofilia",
    "Cronología compatible con exposición farmacológica",
    "Piuria estéril en un contexto compatible",
    "Deterioro renal de aparición subaguda",
    "Necesidad de considerar diagnósticos alternativos y evolución clínica"
  ],
  respuestaCorrecta: 0,
  explicacion: `La tríada clásica aparece en una minoría de pacientes con nefritis intersticial aguda. La enfermedad puede manifestarse únicamente con deterioro de la función renal, piuria, hematuria o proteinuria generalmente no nefrótica. La eosinofiluria y la eosinofilia periférica tienen rendimiento diagnóstico limitado. La biopsia renal puede ser necesaria cuando persiste incertidumbre o el resultado cambia el tratamiento, en especial si no existe recuperación tras retirar el agente sospechoso.`,
  perlaENARM: "La ausencia de fiebre, exantema y eosinofilia no excluye nefritis intersticial aguda inducida por medicamentos.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre lesión renal aguda y reacciones adversas farmacológicas.",
    internacional: "KDIGO y literatura nefrológica especializada sobre nefritis intersticial aguda."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., capítulo de nefritis tubulointersticial."
},
{
  id: "NEF-009",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda postrenal",
  subtema: "Retención urinaria y lesión renal",
  dificultad: "Muy alta",
  caso: `Varón de 77 años con hiperplasia prostática conocida, oliguria y creatinina de 3.4 mg/dL. La ecografía a pie de cama muestra vejiga muy distendida, sin hidronefrosis evidente. Tras colocar una sonda se evacúan 1,600 mL de orina y la diuresis permanece elevada durante las horas siguientes.`,
  pregunta: "¿Qué fenómeno requiere vigilancia estrecha después de la descompresión?",
  opciones: [
    "Supresión irreversible de la secreción de vasopresina en todos los pacientes",
    "Diuresis posobstructiva con posibles pérdidas de agua y electrolitos",
    "Glomerulonefritis proliferativa inducida directamente por el sondaje",
    "Hipercalcemia obligatoria por liberación de calcio óseo",
    "Pérdida permanente de toda capacidad de concentración urinaria"
  ],
  respuestaCorrecta: 1,
  explicacion: `La descompresión de una obstrucción urinaria puede producir diuresis posobstructiva por eliminación del exceso de volumen y por alteraciones transitorias de la capacidad de concentración y reabsorción tubular. Deben vigilarse el balance, la presión arterial, el sodio, el potasio y otros electrolitos. La intensidad de la reposición de líquidos se individualiza según pérdidas y estado hemodinámico, evitando tanto hipovolemia como sobrecarga.`,
  perlaENARM: "La recuperación del flujo urinario tras desobstrucción puede generar pérdidas importantes; el alivio de la obstrucción no termina la vigilancia.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre retención urinaria y uropatía obstructiva.",
    internacional: "KDIGO, Acute Kidney Injury; guías urológicas vigentes."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., lesión renal aguda postrenal."
},
{
  id: "NEF-010",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda postrenal",
  subtema: "Limitaciones de la ecografía en obstrucción temprana",
  dificultad: "Muy alta",
  caso: `Mujer de 64 años con neoplasia pélvica, anuria de reciente inicio y creatinina en ascenso. La vejiga está vacía y la primera ecografía renal no muestra dilatación pielocalicial. Persiste dolor lumbar y existe alta sospecha clínica de obstrucción ureteral bilateral.`,
  pregunta: "¿Qué limitación de la imagen inicial debe tenerse presente?",
  opciones: [
    "La ecografía identifica todas las obstrucciones ureterales con sensibilidad del 100%",
    "La obstrucción temprana o determinados contextos clínicos pueden no producir hidronefrosis evidente",
    "La ausencia de hidronefrosis confirma lesión glomerular",
    "La ecografía solo detecta obstrucción si la creatinina supera 5 mg/dL",
    "La vejiga vacía descarta toda causa postrenal"
  ],
  respuestaCorrecta: 1,
  explicacion: `La ecografía es una herramienta inicial importante, pero una obstrucción reciente puede preceder a la dilatación visible. También pueden existir falsos negativos en determinados escenarios, como deshidratación intensa o alteraciones anatómicas. Si la sospecha de obstrucción con repercusión renal es alta, se requiere reevaluación y selección de imagen o intervención adicional según el contexto, sin descartar una causa postrenal solo por una ecografía inicial negativa.`,
  perlaENARM: "Una ecografía sin hidronefrosis reduce la probabilidad de obstrucción, pero no la elimina cuando la sospecha clínica es alta.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre lesión renal aguda y uropatía obstructiva.",
    internacional: "KDIGO, Acute Kidney Injury; guías urológicas vigentes."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., diagnóstico de lesión renal aguda postrenal."
},
{
  id: "NEF-011",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda",
  subtema: "Diagnóstico diferencial de anuria y enfermedad vascular renal",
  dificultad: "Muy alta",
  caso: `Varón de 58 años con fibrilación auricular sin anticoagulación, dolor lumbar súbito y anuria de diez horas. La vejiga está vacía, no hay hidronefrosis y la creatinina aumentó rápidamente. Presenta elevación marcada de LDH y hematuria microscópica.`,
  pregunta: "¿Qué mecanismo debe incorporarse de forma prioritaria al diagnóstico diferencial?",
  opciones: [
    "Nefropatía diabética crónica como causa suficiente de anuria súbita",
    "Evento vascular renal agudo, incluida una posible embolia arterial renal",
    "Nefritis intersticial por inhibidores de bomba de protones como única explicación",
    "Hipercalcemia crónica sin repercusión hemodinámica",
    "Glomeruloesclerosis diabética incipiente"
  ],
  respuestaCorrecta: 1,
  explicacion: `La aparición abrupta de dolor lumbar, hematuria y elevación de LDH en un paciente con riesgo embólico obliga a considerar infarto renal o enfermedad vascular renal aguda. La anuria también exige descartar obstrucción bilateral, lesión renal intrínseca grave y otras causas de reducción extrema de la perfusión. La selección de imagen vascular depende de la estabilidad, la función renal y la urgencia diagnóstica, dado que el resultado puede modificar el tratamiento.`,
  perlaENARM: "Dolor lumbar súbito, LDH elevada y riesgo embólico son pistas de infarto renal; una anuria brusca exige excluir causas vasculares y obstructivas.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de urgencias nefrológicas y enfermedad tromboembólica.",
    internacional: "Literatura especializada sobre infarto renal y KDIGO, Acute Kidney Injury."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., lesión renal aguda y enfermedades vasculares renales."
},
{
  id: "NEF-012",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda sobre enfermedad renal crónica",
  subtema: "Estimación de cronicidad y reversibilidad",
  dificultad: "Muy alta",
  caso: `Mujer de 69 años con creatinina actual de 3.0 mg/dL y sin valores previos disponibles. La ecografía muestra riñones pequeños y ecogénicos; presenta anemia normocítica y alteraciones del metabolismo mineral. Tras tratar una infección y corregir hipovolemia, la creatinina desciende a 2.1 mg/dL.`,
  pregunta: "¿Qué interpretación integra mejor la evolución y los hallazgos estructurales?",
  opciones: [
    "La mejoría excluye enfermedad renal crónica",
    "Los hallazgos sugieren enfermedad renal crónica con un componente agudo potencialmente reversible",
    "La anemia demuestra que toda la disfunción es aguda",
    "Los riñones pequeños confirman una obstrucción bilateral reciente",
    "La ausencia de creatinina basal impide formular cualquier hipótesis sobre cronicidad"
  ],
  respuestaCorrecta: 1,
  explicacion: `Los riñones pequeños y ecogénicos, junto con anemia y alteraciones minerales, favorecen enfermedad renal crónica. La mejoría parcial después de corregir factores reversibles sugiere una lesión aguda superpuesta. Sin valores previos ni seguimiento suficiente, no puede definirse con precisión cuánto corresponde a daño crónico o agudo. La evolución posterior y la documentación de alteraciones persistentes durante al menos tres meses ayudan a establecer la clasificación de enfermedad renal crónica.`,
  perlaENARM: "En ausencia de valores basales, combina historia, imagen y evolución; la recuperación parcial no excluye enfermedad renal crónica.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre enfermedad renal crónica y lesión renal aguda.",
    internacional: "KDIGO, Acute Kidney Injury; KDIGO, Chronic Kidney Disease."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., lesión renal aguda y enfermedad renal crónica."
},
{
  id: "NEF-013",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda",
  subtema: "Urea, catabolismo y hemorragia digestiva",
  dificultad: "Muy alta",
  caso: `Varón de 62 años con melena, hipotensión y aumento de creatinina de 1.0 a 1.8 mg/dL. La urea está desproporcionadamente elevada respecto a la creatinina. No hay antecedentes de cirrosis ni datos de obstrucción.`,
  pregunta: "¿Por qué el cociente urea/creatinina puede aumentar en este escenario sin constituir una prueba específica de lesión prerrenal?",
  opciones: [
    "La digestión de sangre aumenta la carga nitrogenada y la hipoperfusión favorece la reabsorción de urea",
    "La hemorragia gastrointestinal inhibe por completo la producción de urea",
    "La urea no se filtra en el glomérulo",
    "La creatinina se reabsorbe en mayor proporción que la urea durante la hipovolemia",
    "El cociente solo depende de la masa muscular y nunca del estado hemodinámico"
  ],
  respuestaCorrecta: 0,
  explicacion: `La digestión de sangre incrementa la carga proteica absorbida y la producción de urea. Simultáneamente, la hipoperfusión y el flujo tubular reducido pueden aumentar su reabsorción. Estos mecanismos elevan la urea de manera desproporcionada, pero el cociente también está influido por catabolismo, ingesta proteica, función hepática y masa muscular. Por ello, debe interpretarse como un dato contextual y no como criterio diagnóstico aislado.`,
  perlaENARM: "La urea desproporcionadamente elevada puede reflejar tanto hipoperfusión como carga nitrogenada por hemorragia digestiva.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre lesión renal aguda y hemorragia digestiva.",
    internacional: "KDIGO, Acute Kidney Injury."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., evaluación bioquímica de lesión renal aguda."
},
{
  id: "NEF-014",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda",
  subtema: "Deterioro renal después de contraste intravascular",
  dificultad: "Muy alta",
  caso: `Varón de 75 años con enfermedad renal crónica sometido a angiografía coronaria. A las 48 horas presenta incremento de creatinina. Durante el procedimiento tuvo hipotensión transitoria y recibió diuréticos; no se documentaron valores de creatinina durante las primeras horas.`,
  pregunta: "¿Qué limitación causal impide atribuir con certeza el deterioro al contraste?",
  opciones: [
    "La creatinina no puede aumentar después de un procedimiento radiológico",
    "La temporalidad no separa por sí sola el efecto del contraste de la hipoperfusión y otros factores perioperatorios",
    "La hipotensión protege contra lesión tubular",
    "La enfermedad renal crónica excluye cualquier asociación con contraste",
    "El deterioro solo puede ser causado por una obstrucción ureteral"
  ],
  respuestaCorrecta: 1,
  explicacion: `El deterioro renal posterior a contraste debe analizarse considerando la exposición, la cronología, la función renal basal, el estado hemodinámico y las agresiones concurrentes. Una asociación temporal no demuestra causalidad individual. La prevención se centra en identificar pacientes de riesgo, evitar exposiciones innecesarias, utilizar la menor cantidad apropiada de contraste y aplicar medidas de hidratación individualizadas cuando estén indicadas, sin provocar sobrecarga de volumen.`,
  perlaENARM: "La lesión renal posterior a contraste es una asociación temporal; la atribución causal exige evaluar los factores concurrentes.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de prevención de lesión renal asociada a contraste.",
    internacional: "KDIGO y guías radiológicas vigentes sobre medios de contraste y función renal."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., agentes nefrotóxicos y lesión renal aguda."
},
{
  id: "NEF-015",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda",
  subtema: "Indicaciones urgentes de terapia de reemplazo renal",
  dificultad: "Muy alta",
  caso: `Paciente de 61 años con lesión renal aguda oligoanúrica. Presenta potasio de 6.8 mEq/L con ondas T picudas y ensanchamiento progresivo del QRS pese a medidas iniciales de estabilización y desplazamiento intracelular. Tiene edema pulmonar con hipoxemia que no responde al manejo médico.`,
  pregunta: "¿Qué característica del cuadro hace que la decisión de terapia de reemplazo renal no deba esperar un umbral específico de creatinina?",
  opciones: [
    "La elevación de creatinina por sí sola demuestra necesidad inmediata de diálisis",
    "Existen complicaciones potencialmente mortales refractarias al tratamiento médico",
    "La oliguria de cualquier duración constituye siempre una indicación absoluta",
    "La terapia de reemplazo renal se inicia exclusivamente con urea mayor de 200 mg/dL",
    "La diálisis debe posponerse hasta que aparezca encefalopatía urémica"
  ],
  respuestaCorrecta: 1,
  explicacion: `La hiperpotasemia con alteraciones electrocardiográficas persistentes y el edema pulmonar con hipoxemia refractaria son indicaciones urgentes de terapia de reemplazo renal. La decisión se basa en complicaciones, estado clínico y posibilidad de control médico, no en un valor aislado de creatinina o urea. La estabilización cardiaca y las medidas temporizadoras deben iniciarse mientras se organiza el tratamiento definitivo.`,
  perlaENARM: "Las indicaciones urgentes de diálisis dependen de complicaciones refractarias, no de alcanzar una cifra fija de creatinina.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre terapia de reemplazo renal en lesión renal aguda.",
    internacional: "KDIGO, Acute Kidney Injury."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., indicaciones de diálisis y lesión renal aguda."
},
{
  id: "NEF-016",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda",
  subtema: "Sobrecarga de volumen y resistencia a diuréticos",
  dificultad: "Muy alta",
  caso: `Paciente de 68 años en terapia intensiva con lesión renal aguda, balance acumulado positivo de 7 litros, edema pulmonar y aumento de requerimientos de oxígeno. Se administró furosemida en dosis crecientes, sin respuesta diurética significativa. La presión arterial es estable.`,
  pregunta: "¿Qué interpretación evita confundir el objetivo de los diuréticos con el tratamiento de la lesión renal?",
  opciones: [
    "La falta de respuesta a furosemida confirma necrosis cortical irreversible",
    "Los diuréticos pueden tratar la sobrecarga, pero no han demostrado revertir por sí mismos la lesión renal aguda",
    "Debe continuarse aumentando indefinidamente la dosis hasta normalizar la creatinina",
    "La ausencia de diuresis demuestra que no existe sobrecarga de volumen",
    "La terapia de reemplazo renal está contraindicada mientras exista edema pulmonar"
  ],
  respuestaCorrecta: 1,
  explicacion: `Los diuréticos de asa se utilizan para controlar sobrecarga de volumen en pacientes seleccionados, pero no constituyen un tratamiento específico de reparación tubular. La falta de respuesta, junto con edema pulmonar e hipoxemia, obliga a reevaluar la estrategia y considerar terapia de reemplazo renal si la sobrecarga es refractaria. La elección depende de gravedad, estabilidad hemodinámica, electrolitos y capacidad de controlar el volumen con medidas médicas.`,
  perlaENARM: "La respuesta diurética no define por sí sola la reversibilidad de la lesión; la sobrecarga refractaria puede requerir terapia de reemplazo renal.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre lesión renal aguda en pacientes críticos.",
    internacional: "KDIGO, Acute Kidney Injury."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., tratamiento de lesión renal aguda y terapia de reemplazo renal."
},
{
  id: "NEF-017",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda",
  subtema: "Sedimento glomerular y glomerulonefritis rápidamente progresiva",
  dificultad: "Muy alta",
  caso: `Mujer de 34 años con creatinina que aumenta de 0.8 a 3.5 mg/dL en nueve días. El sedimento muestra eritrocitos dismórficos y cilindros eritrocitarios; presenta hemoptisis y descenso de hemoglobina. La radiografía de tórax revela opacidades alveolares bilaterales.`,
  pregunta: "¿Qué asociación sindromática explica mejor la combinación renal y pulmonar?",
  opciones: [
    "Síndrome nefrótico aislado con derrames pleurales",
    "Síndrome pulmón-riñón por enfermedad glomerular inflamatoria y hemorragia alveolar",
    "Lesión prerrenal por deshidratación sin afectación pulmonar",
    "Nefritis intersticial por fármacos sin compromiso glomerular",
    "Obstrucción urinaria bilateral con edema pulmonar como manifestación directa obligatoria"
  ],
  respuestaCorrecta: 1,
  explicacion: `El deterioro renal rápidamente progresivo con hematuria glomerular y cilindros eritrocitarios indica lesión glomerular inflamatoria. La hemoptisis, la caída de hemoglobina y las opacidades alveolares hacen sospechar hemorragia alveolar, constituyendo un síndrome pulmón-riñón. Deben investigarse con urgencia vasculitis asociadas a ANCA, enfermedad anti-membrana basal glomerular y enfermedades por inmunocomplejos. La confirmación etiológica requiere pruebas serológicas y, cuando sea apropiado, biopsia renal.`,
  perlaENARM: "Cilindros eritrocitarios más hemorragia alveolar es una combinación de alarma que obliga a descartar síndrome pulmón-riñón.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de glomerulonefritis rápidamente progresiva y vasculitis sistémicas.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., glomerulonefritis rápidamente progresiva y vasculitis renales."
},
{
  id: "NEF-018",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda",
  subtema: "Microangiopatía trombótica y lesión renal",
  dificultad: "Muy alta",
  caso: `Varón de 42 años con creatinina de 4.1 mg/dL, anemia, trombocitopenia y esquistocitos. La LDH está elevada, la haptoglobina es indetectable y la bilirrubina indirecta está aumentada. No presenta diarrea previa ni hemorragia activa.`,
  pregunta: "¿Qué dato de laboratorio debe obtenerse con urgencia porque puede modificar el tratamiento específico inicial?",
  opciones: [
    "Concentración sérica de vitamina B12 como única prueba etiológica",
    "Actividad de ADAMTS13 para evaluar púrpura trombótica trombocitopénica, sin retrasar el tratamiento cuando la sospecha clínica sea alta",
    "Anticuerpos antitiroideos como confirmación de microangiopatía",
    "Calcio urinario de 24 horas",
    "Fracción excretada de sodio para confirmar hemólisis"
  ],
  respuestaCorrecta: 1,
  explicacion: `La anemia hemolítica microangiopática con trombocitopenia y lesión renal obliga a considerar microangiopatía trombótica. La actividad de ADAMTS13 es esencial para evaluar púrpura trombótica trombocitopénica, pero su resultado no debe retrasar el tratamiento urgente si la probabilidad clínica es alta. En paralelo, se investigan otras causas, como síndrome hemolítico urémico, hipertensión grave, fármacos, embarazo y enfermedades sistémicas.`,
  perlaENARM: "Esquistocitos, trombocitopenia y lesión renal requieren evaluación urgente de microangiopatía; la sospecha de PTT es tiempo-dependiente.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de microangiopatía trombótica y urgencias hematológicas.",
    internacional: "Guías internacionales de diagnóstico y tratamiento de púrpura trombótica trombocitopénica y síndrome hemolítico urémico."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., microangiopatías trombóticas."
},
{
  id: "NEF-019",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda",
  subtema: "Cinética de creatinina y recuperación del filtrado",
  dificultad: "Muy alta",
  caso: `Varón de 60 años con choque séptico ya controlado. Durante dos días, la creatinina permanece en 2.5 mg/dL pese a mejoría de la presión arterial, lactato y diuresis. No hay nuevas exposiciones nefrotóxicas y el balance de líquidos es estable.`,
  pregunta: "¿Qué propiedad de la creatinina explica por qué su concentración puede tardar en reflejar la recuperación funcional?",
  opciones: [
    "La creatinina se elimina exclusivamente por metabolismo hepático",
    "La concentración sérica cambia con retraso respecto al cambio del filtrado por su distribución corporal y cinética de acumulación y eliminación",
    "La creatinina aumenta únicamente cuando existe obstrucción urinaria",
    "La creatinina deja de filtrarse durante cualquier episodio de sepsis",
    "La diuresis y la creatinina deben normalizarse simultáneamente en toda lesión renal aguda"
  ],
  respuestaCorrecta: 1,
  explicacion: `La creatinina no es un marcador instantáneo del filtrado glomerular. Después de una caída aguda del filtrado necesita tiempo para acumularse; de forma similar, durante la recuperación puede tardar en alcanzar un nuevo equilibrio. Además, la generación de creatinina, la masa muscular y el volumen de distribución modifican su concentración. La mejoría clínica y de diuresis es alentadora, pero no sustituye la vigilancia seriada de la función renal y sus complicaciones.`,
  perlaENARM: "La creatinina sérica está en equilibrio dinámico; durante cambios rápidos de función renal puede retrasarse respecto a la situación fisiológica real.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre seguimiento de lesión renal aguda.",
    internacional: "KDIGO, Acute Kidney Injury."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., fisiología de creatinina y evaluación de lesión renal aguda."
},
{
  id: "NEF-020",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda",
  subtema: "Lesión renal aguda sobre enfermedad renal crónica y seguimiento",
  dificultad: "Muy alta",
  caso: `Mujer de 71 años con enfermedad renal crónica conocida, creatinina basal de 1.8 mg/dL y albuminuria persistente. Durante una infección con hipotensión, la creatinina aumenta a 3.4 mg/dL. Tras corregir la hipovolemia desciende a 2.2 mg/dL al alta. Dos semanas después se encuentra clínicamente estable, pero la creatinina no ha regresado al basal.`,
  pregunta: "¿Qué interpretación debe conservarse en el expediente y comprobarse durante el seguimiento?",
  opciones: [
    "La ausencia de normalización inmediata demuestra enfermedad renal terminal irreversible",
    "Hubo lesión renal aguda sobre enfermedad renal crónica y la recuperación puede ser incompleta o prolongada",
    "La mejoría parcial invalida retrospectivamente el diagnóstico de lesión renal aguda",
    "La creatinina del alta debe considerarse automáticamente el nuevo basal definitivo",
    "La albuminuria previa deja de ser relevante después de cualquier episodio agudo"
  ],
  respuestaCorrecta: 1,
  explicacion: `El aumento desde 1.8 hasta 3.4 mg/dL cumple criterios de lesión renal aguda sobre enfermedad renal crónica. La mejoría parcial sugiere recuperación, pero no garantiza que se haya alcanzado el basal. La función renal debe reevaluarse después del alta, revisando creatinina, electrolitos, presión arterial, medicamentos y albuminuria cuando sea apropiado. La persistencia de alteraciones durante al menos tres meses debe valorarse para caracterizar la evolución de la enfermedad renal crónica y el riesgo posterior.`,
  perlaENARM: "La recuperación tras una lesión renal aguda puede ser incompleta; documenta el basal previo y programa reevaluación después del alta.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre seguimiento de lesión renal aguda y enfermedad renal crónica.",
    internacional: "KDIGO, Acute Kidney Injury; KDIGO, Chronic Kidney Disease."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., lesión renal aguda y enfermedad renal crónica; KDIGO."
}
];
