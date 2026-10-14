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
},
  
{
  id: "NEF-021",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Criterios de cronicidad y lesión renal superpuesta",
  dificultad: "Muy alta",
  caso: `Varón de 58 años con creatinina de 1.6 mg/dL documentada hace cinco meses y albuminuria persistente. Durante una gastroenteritis presenta creatinina de 3.2 mg/dL, hipotensión ortostática y oliguria. Después de la reposición de volumen, la creatinina disminuye a 2.0 mg/dL, sin regresar al valor previo.`,
  pregunta: "¿Qué interpretación distingue correctamente la enfermedad de base del episodio actual?",
  opciones: [
    "La reducción de creatinina después de hidratarlo excluye enfermedad renal crónica",
    "La persistencia de alteraciones renales durante más de tres meses establece cronicidad y el incremento agudo representa una lesión superpuesta",
    "La creatinina de 3.2 mg/dL debe considerarse el valor basal definitivo",
    "La enfermedad renal crónica solo puede diagnosticarse mediante biopsia",
    "La ausencia de anuria descarta lesión renal aguda"
  ],
  respuestaCorrecta: 1,
  explicacion: `La enfermedad renal crónica se define por alteraciones estructurales o funcionales renales con implicaciones para la salud durante al menos tres meses. La creatinina previamente elevada y la albuminuria persistente documentan cronicidad. El incremento agudo durante la hipovolemia, seguido de recuperación parcial, indica lesión renal aguda sobre enfermedad renal crónica. La función renal debe reevaluarse después del episodio para establecer el nuevo nivel basal y detectar daño residual.`,
  perlaENARM: "La cronicidad y la agudeza no son diagnósticos excluyentes: puede existir lesión renal aguda sobre enfermedad renal crónica.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre enfermedad renal crónica y lesión renal aguda.",
    internacional: "KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of CKD; KDIGO AKI."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., cap. 5.1, p. 38; KDIGO 2024 CKD Guideline."
},
{
  id: "NEF-022",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Clasificación CGA y riesgo de progresión",
  dificultad: "Muy alta",
  caso: `Mujer de 64 años con filtrado glomerular estimado por CKD-EPI de 42 mL/min/1.73 m², cociente albúmina/creatinina urinario de 480 mg/g y alteraciones persistentes durante ocho meses. La paciente está clínicamente estable y no presenta datos de lesión renal aguda.`,
  pregunta: "¿Qué clasificación CGA corresponde a esta paciente?",
  opciones: [
    "G3a A2, riesgo moderado",
    "G3b A3, riesgo muy alto",
    "G3b A2, riesgo alto",
    "G4 A3, riesgo muy alto",
    "G2 A3, riesgo alto"
  ],
  respuestaCorrecta: 1,
  explicacion: `El filtrado de 42 mL/min/1.73 m² corresponde a G3b, cuyo intervalo es 30–44. El cociente albúmina/creatinina de 480 mg/g corresponde a A3, albuminuria gravemente aumentada, definida por valores superiores a 300 mg/g. La clasificación CGA integra causa, categoría de filtrado y categoría de albuminuria. La combinación G3b-A3 se asocia con riesgo muy alto de progresión renal y eventos cardiovasculares.`,
  perlaENARM: "CGA significa causa, categoría de filtrado glomerular y albuminuria; no clasifiques la ERC únicamente por creatinina.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre clasificación y seguimiento de enfermedad renal crónica.",
    internacional: "KDIGO 2024 CKD Guideline."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., cap. 5.2, tabla 5.1, p. 38; KDIGO 2024."
},
{
  id: "NEF-023",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Albuminuria como marcador pronóstico independiente",
  dificultad: "Muy alta",
  caso: `Dos pacientes con diabetes tipo 2 presentan un filtrado glomerular estimado de 58 mL/min/1.73 m². El paciente A tiene un cociente albúmina/creatinina de 12 mg/g y el paciente B de 620 mg/g, ambos persistentes. Sus cifras de presión arterial y HbA1c son similares.`,
  pregunta: "¿Qué diferencia pronóstica aporta la medición urinaria que no revela el filtrado aislado?",
  opciones: [
    "La albuminuria no modifica el riesgo si ambos pacientes tienen el mismo filtrado",
    "El paciente B presenta mayor riesgo de progresión renal y eventos cardiovasculares por su albuminuria A3",
    "El paciente A tiene necesariamente una lesión glomerular más avanzada",
    "La albuminuria A3 demuestra por sí sola una glomerulonefritis primaria",
    "El filtrado de ambos excluye enfermedad renal crónica"
  ],
  respuestaCorrecta: 1,
  explicacion: `La albuminuria aporta información pronóstica independiente del filtrado glomerular. Un cociente de 620 mg/g corresponde a A3, mientras que 12 mg/g corresponde a A1. La albuminuria elevada refleja lesión de la barrera de filtración y se relaciona con mayor riesgo renal y cardiovascular. La etiología debe determinarse mediante historia clínica, sedimento, evolución y estudios dirigidos; A3 no identifica por sí sola una enfermedad glomerular específica.`,
  perlaENARM: "A igual filtrado, una categoría de albuminuria mayor implica un riesgo renal y cardiovascular superior.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre nefropatía diabética y enfermedad renal crónica.",
    internacional: "KDIGO 2024 CKD Guideline; KDIGO Diabetes Management in CKD."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., cap. 5.2, p. 38; KDIGO 2024."
},
{
  id: "NEF-024",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Discordancia entre creatinina y cistatina C",
  dificultad: "Muy alta",
  caso: `Varón de 76 años con sarcopenia marcada, pérdida ponderal y amputación transfemoral antigua. La creatinina sérica es de 0.8 mg/dL y el filtrado estimado por creatinina parece conservado, pero presenta albuminuria persistente y signos clínicos de enfermedad renal.`,
  pregunta: "¿Qué limitación metodológica es más relevante al interpretar el filtrado estimado por creatinina?",
  opciones: [
    "La creatinina siempre sobreestima el daño renal en pacientes con sarcopenia",
    "La baja generación de creatinina puede sobreestimar el filtrado; la cistatina C o una ecuación combinada pueden mejorar la estimación",
    "La cistatina C no depende de ninguna condición no renal",
    "La albuminuria invalida automáticamente cualquier ecuación de filtrado",
    "La amputación impide calcular el filtrado mediante cualquier biomarcador"
  ],
  respuestaCorrecta: 1,
  explicacion: `La creatinina deriva principalmente del metabolismo muscular. La sarcopenia, la amputación y la malnutrición reducen su generación y pueden producir una estimación artificialmente alta del filtrado. La cistatina C puede ser útil en esta situación, y una ecuación combinada creatinina-cistatina C suele mejorar la precisión cuando ambos marcadores están disponibles. La cistatina C también presenta determinantes no renales, como inflamación, alteraciones tiroideas y glucocorticoides, que deben considerarse.`,
  perlaENARM: "Una creatinina baja no garantiza filtrado conservado en pacientes con poca masa muscular.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre evaluación de función renal.",
    internacional: "KDIGO 2024 CKD Guideline."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., cap. 5, evaluación de función renal; KDIGO 2024."
},
{
  id: "NEF-025",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Variabilidad biológica del cociente albúmina/creatinina",
  dificultad: "Muy alta",
  caso: `Mujer de 46 años con diabetes presenta cociente albúmina/creatinina urinario de 95 mg/g durante una infección urinaria febril. Tres semanas después, tras resolver la infección, el valor es de 22 mg/g. No existen mediciones anteriores ni hematuria persistente.`,
  pregunta: "¿Qué aspecto impide clasificar definitivamente la albuminuria como persistente con estos datos?",
  opciones: [
    "La albuminuria solo puede cuantificarse en orina de 24 horas",
    "La infección y la fiebre pueden causar elevación transitoria; se requieren mediciones repetidas en condiciones estables",
    "Un único resultado elevado establece necesariamente nefropatía diabética",
    "El cociente albúmina/creatinina no puede utilizarse en pacientes con diabetes",
    "Un resultado normal posterior descarta cualquier riesgo renal futuro"
  ],
  respuestaCorrecta: 1,
  explicacion: `La albuminuria puede aumentar transitoriamente durante infección urinaria, fiebre, ejercicio intenso, hiperglucemia marcada o descompensación hemodinámica. Para clasificarla como persistente, deben repetirse las mediciones, idealmente en muestras de primera orina matutina y una vez resueltos los factores intercurrentes. La persistencia durante al menos tres meses, junto con el contexto clínico, permite definir su relevancia como marcador de enfermedad renal crónica.`,
  perlaENARM: "No diagnostiques albuminuria crónica a partir de una muestra obtenida durante fiebre, infección o ejercicio intenso.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre tamizaje de enfermedad renal diabética.",
    internacional: "KDIGO 2024 CKD Guideline; KDIGO Diabetes Management in CKD."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., cap. 5.1–5.2; KDIGO 2024."
},
{
  id: "NEF-026",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Hiperfiltración y progresión glomerular",
  dificultad: "Muy alta",
  caso: `Varón de 51 años con diabetes tipo 2, obesidad y albuminuria creciente. El filtrado glomerular estimado se mantiene inicialmente en 105 mL/min/1.73 m². En biopsias de pacientes con enfermedad renal diabética pueden observarse hipertrofia glomerular y aumento de presión intraglomerular antes de que disminuya el filtrado.`,
  pregunta: "¿Qué interpretación fisiopatológica explica que un filtrado inicialmente elevado no sea necesariamente tranquilizador?",
  opciones: [
    "La hiperfiltración siempre indica mayor número de nefronas funcionales sanas",
    "La presión intraglomerular elevada puede aumentar la tensión de la barrera de filtración y favorecer albuminuria y daño progresivo",
    "La hiperfiltración impide el desarrollo posterior de glomeruloesclerosis",
    "El filtrado elevado excluye la posibilidad de enfermedad renal diabética",
    "La albuminuria aparece exclusivamente después de alcanzar G5"
  ],
  respuestaCorrecta: 1,
  explicacion: `En la diabetes, cambios hemodinámicos y metabólicos pueden inducir hiperfiltración e incremento de presión intraglomerular. Esta adaptación puede contribuir a lesión podocitaria, albuminuria y esclerosis progresiva. Por ello, un filtrado inicialmente normal o elevado no excluye daño renal. Los bloqueantes del sistema renina-angiotensina y los inhibidores de SGLT2 pueden reducir la presión intraglomerular mediante mecanismos diferentes y retrasar la progresión en pacientes seleccionados.`,
  perlaENARM: "La hiperfiltración diabética puede ser una fase temprana de lesión, no una señal inequívoca de función renal saludable.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre enfermedad renal diabética.",
    internacional: "KDIGO Diabetes Management in CKD; KDIGO 2024 CKD Guideline."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., caps. 1.3 y 5.3; KDIGO Diabetes Management in CKD."
},
{
  id: "NEF-027",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Bloqueo del sistema renina-angiotensina y creatinina",
  dificultad: "Muy alta",
  caso: `Paciente de 62 años con ERC G3b A3 inicia un IECA. Dos semanas después, la creatinina aumenta de 1.8 a 2.1 mg/dL y el potasio de 4.4 a 4.8 mEq/L. La presión arterial ha mejorado y no hay hipotensión, deshidratación ni uso reciente de AINE.`,
  pregunta: "¿Qué mecanismo explica el cambio de creatinina y por qué no implica automáticamente nefrotoxicidad?",
  opciones: [
    "El IECA causa necrosis tubular directa en todos los pacientes",
    "La dilatación eferente reduce la presión intraglomerular y puede producir un aumento hemodinámico inicial de creatinina",
    "El IECA aumenta la presión intraglomerular mediante constricción eferente",
    "La creatinina disminuye siempre después de bloquear el sistema renina-angiotensina",
    "El efecto renal del IECA es independiente del tono arteriolar"
  ],
  respuestaCorrecta: 1,
  explicacion: `El bloqueo del sistema renina-angiotensina reduce el tono de la arteriola eferente y la presión intraglomerular. Puede ocurrir un aumento inicial de creatinina sin lesión tubular estructural. Un incremento de aproximadamente 17% como el descrito no supera el umbral de 30% que suele motivar reevaluación específica tras iniciar o aumentar un bloqueante del sistema renina-angiotensina. Deben monitorizarse creatinina y potasio y revisar hipovolemia, AINE, estenosis de arterias renales y otras causas si el incremento es excesivo o progresivo.`,
  perlaENARM: "El aumento hemodinámico inicial de creatinina con IECA/ARA-II no equivale automáticamente a lesión renal tóxica.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre ERC, hipertensión y albuminuria.",
    internacional: "KDIGO 2024 CKD Guideline."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., caps. 1.3 y 5.3; KDIGO 2024."
},
{
  id: "NEF-028",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Inhibidores de SGLT2 y descenso inicial del filtrado",
  dificultad: "Muy alta",
  caso: `Mujer de 60 años con diabetes tipo 2, ERC G3b y albuminuria de 520 mg/g inicia un inhibidor de SGLT2. A las dos semanas, el filtrado estimado disminuye de 39 a 34 mL/min/1.73 m². Está euvolémica, sin hipotensión, infección ni síntomas urinarios.`,
  pregunta: "¿Qué fenómeno fisiológico puede explicar este cambio inicial sin que represente necesariamente progresión estructural?",
  opciones: [
    "Aumento sostenido de la presión intraglomerular por activación de la retroalimentación tubuloglomerular",
    "Descenso hemodinámico inicial del filtrado relacionado con restauración de la retroalimentación tubuloglomerular y reducción de presión intraglomerular",
    "Necrosis tubular inevitable inducida por glucosuria",
    "Obstrucción ureteral bilateral causada por el fármaco",
    "Pérdida de nefronas por toxicidad directa demostrada"
  ],
  respuestaCorrecta: 1,
  explicacion: `La inhibición de SGLT2 reduce la reabsorción proximal de glucosa y sodio, incrementa la llegada de NaCl a la mácula densa y modifica la retroalimentación tubuloglomerular. Esto puede generar un descenso hemodinámico inicial del filtrado, mientras que el tratamiento a largo plazo reduce el riesgo de progresión renal y eventos cardiovasculares en poblaciones indicadas. Una caída pequeña y estable no exige suspender automáticamente el fármaco, pero deben evaluarse síntomas, volemia y magnitud de la variación.`,
  perlaENARM: "Distingue el descenso inicial hemodinámico del filtrado por iSGLT2 de una lesión renal aguda por hipovolemia u otra causa.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre diabetes y enfermedad renal crónica.",
    internacional: "KDIGO Diabetes Management in CKD; KDIGO 2024 CKD Guideline."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., cap. 5.3; KDIGO Diabetes Management in CKD."
},
{
  id: "NEF-029",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Acidosis metabólica y amoniogénesis renal",
  dificultad: "Muy alta",
  caso: `Varón de 66 años con ERC avanzada presenta bicarbonato sérico de 17 mEq/L, cloro de 112 mEq/L y anión gap normal. No tiene diarrea ni exposición a acetazolamida. La función renal ha disminuido progresivamente durante varios años.`,
  pregunta: "¿Qué alteración renal contribuye a la acidosis metabólica hiperclorémica en este contexto?",
  opciones: [
    "Aumento de la excreción neta de ácido y de la generación de amonio",
    "Disminución de la capacidad de excretar ácido neto, en particular por reducción de la amoniogénesis conforme se pierden nefronas funcionales",
    "Pérdida exclusiva de bicarbonato por diarrea como mecanismo demostrado",
    "Aumento de la reabsorción de bicarbonato sin ninguna modificación de la excreción ácida",
    "Retención obligatoria de lactato por hipoxia tisular aguda"
  ],
  respuestaCorrecta: 1,
  explicacion: `En la ERC, la pérdida de masa nefronal reduce la capacidad global de excretar ácido, incluida la producción y excreción de amonio. En fases tempranas puede mantenerse el equilibrio ácido-base por adaptación de las nefronas restantes, pero la reserva se reduce con la progresión. La acidosis puede contribuir a alteraciones óseas, catabolismo muscular y progresión renal. La interpretación debe considerar anión gap, potasio, medicamentos y causas extrarrenales concurrentes.`,
  perlaENARM: "La acidosis de la ERC refleja menor capacidad renal total para excretar ácido, aunque las nefronas remanentes mantengan cierta adaptación.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre complicaciones metabólicas de ERC.",
    internacional: "KDIGO 2024 CKD Guideline."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., caps. 2.2 y 5.4; KDIGO 2024."
},
{
  id: "NEF-030",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Anemia renal y respuesta inadecuada a eritropoyetina",
  dificultad: "Muy alta",
  caso: `Mujer de 68 años con ERC G4, hemoglobina de 8.9 g/dL, volumen corpuscular medio normal, ferritina de 35 ng/mL y saturación de transferrina de 12%. No presenta hemorragia evidente. Se considera iniciar un agente estimulante de la eritropoyesis.`,
  pregunta: "¿Qué factor debe corregirse antes de atribuir la anemia exclusivamente a déficit de eritropoyetina?",
  opciones: [
    "La ferritina baja demuestra sobrecarga de hierro",
    "La deficiencia de hierro puede limitar la eritropoyesis y debe abordarse antes o junto con decisiones individualizadas sobre agentes estimulantes",
    "La anemia renal siempre es macrocítica",
    "La eritropoyetina está elevada de forma compensatoria suficiente en todos los pacientes con ERC",
    "El tratamiento con hierro está contraindicado cuando el filtrado es menor de 30 mL/min/1.73 m²"
  ],
  respuestaCorrecta: 1,
  explicacion: `La anemia de la ERC es multifactorial e incluye producción inadecuada de eritropoyetina, deficiencia absoluta o funcional de hierro, inflamación y reducción de la supervivencia eritrocitaria. La ferritina de 35 ng/mL y la saturación de transferrina de 12% apoyan deficiencia de hierro. Deben evaluarse causas corregibles y reponerse hierro según la vía y el contexto clínico antes de concluir que la anemia se explica únicamente por insuficiencia renal. La decisión de usar agentes estimulantes debe individualizarse según síntomas, hemoglobina, riesgos y objetivos.`,
  perlaENARM: "Antes de atribuir toda anemia a ERC, evalúa hierro y otras causas reversibles; una ferritina normal tampoco excluye deficiencia funcional en inflamación.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre anemia en enfermedad renal crónica.",
    internacional: "KDIGO Clinical Practice Guideline for Anemia in CKD, versión vigente."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., cap. 5.4, anemia de la ERC."
},
{
  id: "NEF-031",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Metabolismo mineral y fosfaturia compensadora",
  dificultad: "Muy alta",
  caso: `Varón de 55 años con ERC G3b presenta fósforo sérico todavía normal, PTH discretamente elevada y FGF23 aumentado. La vitamina D activa empieza a disminuir, sin hipocalcemia importante.`,
  pregunta: "¿Qué mecanismo explica que las alteraciones hormonales aparezcan antes de una hiperfosfatemia manifiesta?",
  opciones: [
    "El aumento de FGF23 incrementa la reabsorción tubular de fosfato y suprime la excreción",
    "El aumento de FGF23 y PTH favorece la fosfaturia compensadora, mientras disminuye la síntesis renal de calcitriol",
    "La PTH bloquea la excreción de fosfato en el túbulo proximal",
    "La disminución de nefronas aumenta la masa renal total de forma compensadora",
    "La vitamina D activa se sintetiza exclusivamente en el hígado"
  ],
  respuestaCorrecta: 1,
  explicacion: `En etapas iniciales de ERC, el aumento de FGF23 y PTH favorece la excreción fraccional de fosfato en las nefronas remanentes, manteniendo temporalmente el fósforo sérico dentro del intervalo de referencia. FGF23 también reduce la síntesis de calcitriol, contribuyendo a menor absorción intestinal de calcio y a la elevación secundaria de PTH. Conforme progresa la enfermedad, la capacidad compensadora se vuelve insuficiente y puede aparecer hiperfosfatemia.`,
  perlaENARM: "Un fósforo normal no excluye alteraciones tempranas del metabolismo mineral de la ERC: FGF23 y PTH pueden aumentar antes.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre trastorno mineral óseo asociado a ERC.",
    internacional: "KDIGO CKD-MBD Guideline, actualización vigente."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., cap. 5.4, alteraciones del metabolismo mineral."
},
{
  id: "NEF-032",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Hiperparatiroidismo secundario y calcitriol",
  dificultad: "Muy alta",
  caso: `Paciente de 63 años con ERC G4 presenta PTH progresivamente elevada, calcio bajo-normal, fósforo elevado y concentración reducida de 1,25-dihidroxivitamina D. No tiene antecedentes de paratiroidectomía ni hipomagnesemia grave.`,
  pregunta: "¿Qué combinación de alteraciones fisiológicas favorece el hiperparatiroidismo secundario?",
  opciones: [
    "Aumento de calcitriol y absorción intestinal de calcio junto con supresión sostenida de PTH",
    "Retención de fosfato, reducción de calcitriol y menor disponibilidad de calcio, con estímulo crónico de la secreción de PTH",
    "Aumento de la eliminación renal de fosfato con hipercalcemia sostenida",
    "Autonomía paratiroidea primaria obligatoria desde las primeras etapas de ERC",
    "Aumento de la actividad de la 1-alfa-hidroxilasa renal pese a pérdida de masa nefronal"
  ],
  respuestaCorrecta: 1,
  explicacion: `La progresión de la ERC reduce la capacidad de excretar fosfato y de sintetizar calcitriol. La hiperfosfatemia, la menor absorción intestinal de calcio y otros cambios endocrinos estimulan la secreción de PTH. Inicialmente es una respuesta adaptativa, pero si persiste puede producir remodelado óseo anormal y, en enfermedad avanzada, hiperplasia paratiroidea. El manejo requiere valorar tendencias de calcio, fósforo y PTH, no una cifra aislada de PTH.`,
  perlaENARM: "En la ERC, el hiperparatiroidismo secundario suele relacionarse con retención de fosfato, descenso de calcitriol y alteraciones del calcio.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre trastorno mineral óseo asociado a ERC.",
    internacional: "KDIGO CKD-MBD Guideline, actualización vigente."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., cap. 5.4; KDIGO CKD-MBD."
},
{
  id: "NEF-033",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Potasio y reserva excretora renal",
  dificultad: "Muy alta",
  caso: `Varón de 72 años con ERC G4 y diabetes. Su potasio permanece en 4.8 mEq/L pese a una reducción importante de la masa nefronal. Posteriormente inicia trimetoprim-sulfametoxazol y presenta potasio de 6.1 mEq/L. No hay hemólisis en la muestra.`,
  pregunta: "¿Qué explicación integra la estabilidad previa del potasio y la descompensación posterior?",
  opciones: [
    "El riñón pierde toda capacidad de excretar potasio desde G3",
    "Las nefronas remanentes y la adaptación colónica pueden mantener el balance hasta que una carga farmacológica reduzca la secreción o la excreción efectiva",
    "El potasio sérico depende exclusivamente de la ingesta dietética",
    "La hiperpotasemia demuestra necesariamente destrucción celular masiva",
    "El trimetoprim aumenta la actividad del receptor mineralocorticoide"
  ],
  respuestaCorrecta: 1,
  explicacion: `En la ERC, las nefronas remanentes incrementan la excreción fraccional de potasio y el colon puede contribuir al balance. Sin embargo, la reserva excretora es limitada. El trimetoprim puede bloquear el canal epitelial de sodio del nefrón distal, reduciendo la secreción de potasio, de manera similar a un efecto ahorrador de potasio. La diabetes, el bloqueo del sistema renina-angiotensina y la acidosis pueden aumentar el riesgo.`,
  perlaENARM: "Una potasemia normal no significa reserva excretora normal; los fármacos pueden precipitar hiperpotasemia en ERC avanzada.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre hiperpotasemia y enfermedad renal crónica.",
    internacional: "KDIGO 2024 CKD Guideline; guías vigentes de hiperpotasemia."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., caps. 2.1 y 5.4."
},
{
  id: "NEF-034",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Hipertensión resistente y expansión de volumen",
  dificultad: "Muy alta",
  caso: `Mujer de 67 años con ERC G4 y presión arterial persistentemente elevada pese a tratamiento antihipertensivo con tres fármacos, incluido un bloqueante del sistema renina-angiotensina. Tiene edema maleolar, aumento reciente de peso y excreción urinaria de sodio reducida en el contexto de una dieta alta en sal.`,
  pregunta: "¿Qué mecanismo renal contribuye de forma importante a la hipertensión en la ERC avanzada?",
  opciones: [
    "Pérdida completa de la capacidad de retener sodio, con hipovolemia obligatoria",
    "Disminución de la capacidad de excretar sodio, expansión del volumen extracelular y aumento de la presión arterial",
    "Supresión permanente de toda actividad simpática",
    "Aumento de la filtración de sodio que impide cualquier retención hídrica",
    "Disminución del volumen extracelular por hiperaldosteronismo secundario en todos los casos"
  ],
  respuestaCorrecta: 1,
  explicacion: `La pérdida de masa nefronal reduce la capacidad de excretar una carga de sodio, por lo que una ingesta elevada puede favorecer expansión de volumen e hipertensión. También contribuyen la activación neurohormonal, la disfunción endotelial y la rigidez vascular. La hipertensión es causa y consecuencia de progresión renal. La evaluación de resistencia verdadera requiere confirmar mediciones, adherencia, dosis, interferencias farmacológicas y control de volumen.`,
  perlaENARM: "En la ERC avanzada, la retención de sodio y la expansión de volumen son mecanismos centrales de hipertensión, aunque no exclusivos.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre hipertensión arterial y ERC.",
    internacional: "KDIGO 2021 Blood Pressure in CKD; KDIGO 2024 CKD Guideline."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., cap. 13.2 y cap. 5.4."
},
{
  id: "NEF-035",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Nutrición, sarcopenia y obesidad sarcopénica",
  dificultad: "Muy alta",
  caso: `Varón de 70 años con ERC G4, índice de masa corporal de 29 kg/m², pérdida de fuerza de prensión y reducción progresiva de masa muscular. Presenta inflamación crónica y disminución de la ingesta por anorexia urémica. Su peso corporal se mantiene relativamente estable.`,
  pregunta: "¿Qué error de valoración nutricional puede ocultar el deterioro clínico?",
  opciones: [
    "Asumir que un IMC elevado excluye desnutrición o pérdida de masa muscular",
    "Considerar que la masa muscular no influye en el pronóstico de ERC",
    "Interpretar la albúmina sérica como marcador nutricional específico sin considerar inflamación",
    "Reconocer la posibilidad de coexistencia de masa grasa elevada y masa magra reducida",
    "Evaluar tendencia de peso, fuerza y consumo alimentario junto con parámetros bioquímicos"
  ],
  respuestaCorrecta: 0,
  explicacion: `En la ERC puede existir obesidad sarcopénica: la masa grasa se mantiene o aumenta mientras disminuye la masa magra. La inflamación, la anorexia, la acidosis y el catabolismo contribuyen al deterioro nutricional. Un IMC aparentemente alto no descarta pérdida muscular. La albúmina sérica también depende de inflamación, estado de volumen y pérdidas urinarias, por lo que debe interpretarse en conjunto con evaluación clínica, ingesta, fuerza y composición corporal cuando sea posible.`,
  perlaENARM: "El IMC aislado puede ocultar sarcopenia y malnutrición en pacientes con ERC.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre nutrición en enfermedad renal crónica.",
    internacional: "KDIGO 2024 CKD Guideline; recomendaciones nutricionales renales vigentes."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., cap. 5.4, alteraciones nutricionales."
},
{
  id: "NEF-036",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Prurito urémico y metabolismo mineral",
  dificultad: "Muy alta",
  caso: `Paciente de 69 años con ERC G5 en hemodiálisis presenta prurito generalizado persistente, alteraciones del sueño y lesiones por rascado. Tiene fósforo elevado y PTH aumentada, sin exantema primario ni datos de colestasis.`,
  pregunta: "¿Qué interpretación fisiopatológica es más sólida?",
  opciones: [
    "El prurito urémico depende exclusivamente de una concentración elevada de urea",
    "El prurito asociado a ERC es multifactorial e involucra vías urémicas, inflamatorias y neurosensoriales; el trastorno mineral puede contribuir",
    "La PTH elevada confirma por sí sola que todo el prurito tiene origen óseo",
    "El prurito excluye enfermedad renal avanzada",
    "La ausencia de exantema descarta una causa relacionada con ERC"
  ],
  respuestaCorrecta: 1,
  explicacion: `El prurito asociado a ERC, especialmente en pacientes en diálisis, tiene una fisiopatología multifactorial que incluye inflamación, toxinas urémicas, alteraciones inmunitarias y vías neurosensoriales. La hiperfosfatemia y el trastorno mineral óseo pueden coexistir, pero no explican todos los casos de manera exclusiva. Se deben descartar causas dermatológicas, hepáticas, hematológicas y farmacológicas. El tratamiento incluye medidas generales y opciones específicas según gravedad, disponibilidad y situación dialítica.`,
  perlaENARM: "El prurito urémico no se explica por una sola molécula; evita atribuirlo automáticamente a urea o PTH.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre síntomas y complicaciones de ERC avanzada.",
    internacional: "KDIGO CKD Guideline y recomendaciones vigentes sobre prurito asociado a enfermedad renal."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., cap. 5.4, manifestaciones cutáneas y metabolismo mineral."
},
{
  id: "NEF-037",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Síntomas urémicos y decisión de terapia de reemplazo renal",
  dificultad: "Muy alta",
  caso: `Mujer de 59 años con ERC G5, filtrado estimado de 7 mL/min/1.73 m², anorexia persistente, náuseas, prurito y pérdida de peso. La hiperpotasemia y la acidosis se controlan parcialmente con tratamiento médico, pero la calidad de vida continúa deteriorándose.`,
  pregunta: "¿Qué aspecto debe prevalecer al valorar el inicio de terapia de reemplazo renal?",
  opciones: [
    "El filtrado de 7 mL/min/1.73 m² obliga por sí solo a iniciar diálisis en todos los pacientes",
    "La integración de síntomas atribuibles a uremia, complicaciones refractarias, trayectoria clínica y preferencias informadas de la paciente",
    "La ausencia de edema excluye indicación de terapia de reemplazo renal",
    "La diálisis debe iniciarse únicamente después de una convulsión urémica",
    "La concentración de creatinina es el único criterio validado para iniciar tratamiento"
  ],
  respuestaCorrecta: 1,
  explicacion: `La decisión de iniciar terapia de reemplazo renal en ERC avanzada debe individualizarse. Son relevantes los síntomas urémicos atribuibles a la insuficiencia renal, la incapacidad para controlar volumen, presión arterial, electrolitos o acidosis, el deterioro nutricional y la calidad de vida. El filtrado ayuda a contextualizar, pero no es un umbral aislado suficiente. La planificación debe realizarse anticipadamente, con educación sobre modalidades y evaluación para trasplante cuando corresponda.`,
  perlaENARM: "La indicación de diálisis se basa en manifestaciones clínicas y complicaciones refractarias, no exclusivamente en un valor de filtrado.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre indicaciones de terapia de reemplazo renal.",
    internacional: "KDIGO 2024 CKD Guideline."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., cap. 5.5, terapia renal sustitutiva."
},
{
  id: "NEF-038",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Hemodiálisis, diálisis peritoneal y funciones renales",
  dificultad: "Muy alta",
  caso: `Varón de 61 años con ERC G5 inicia hemodiálisis por complicaciones urémicas. Después de estabilizarse, pregunta por qué debe continuar el tratamiento aun cuando las sesiones eliminan urea y corrigen parcialmente el potasio y la acidosis.`,
  pregunta: "¿Qué diferencia funcional distingue al trasplante renal de la diálisis crónica?",
  opciones: [
    "La hemodiálisis reproduce por completo todas las funciones endocrinas y metabólicas del riñón",
    "La diálisis sustituye parcialmente la depuración y el control de volumen, mientras que un injerto funcional también puede recuperar funciones endocrinas y metabólicas renales",
    "La diálisis peritoneal elimina todas las toxinas urémicas con independencia de la membrana",
    "El trasplante renal no modifica la producción de eritropoyetina",
    "La hemodiálisis elimina la necesidad de controlar el metabolismo óseo"
  ],
  respuestaCorrecta: 1,
  explicacion: `La hemodiálisis y la diálisis peritoneal sustituyen parte de la depuración de solutos y del control de líquidos y electrolitos, pero no reproducen de forma completa las funciones endocrinas y metabólicas renales. Un injerto renal funcional puede restablecer producción de eritropoyetina, activación de vitamina D y regulación más fisiológica de volumen y electrolitos, aunque también puede presentar complicaciones y no garantiza normalización completa.`,
  perlaENARM: "La terapia dialítica sustituye principalmente funciones de depuración; el trasplante puede recuperar además funciones endocrinas del riñón.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre modalidades de terapia de reemplazo renal y trasplante.",
    internacional: "KDIGO 2024 CKD Guideline; guías vigentes de evaluación del receptor de trasplante renal."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., caps. 1.1 y 5.5."
},
{
  id: "NEF-039",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Preparación anticipada para terapia de reemplazo renal",
  dificultad: "Muy alta",
  caso: `Paciente de 52 años con ERC G4 A3, progresión sostenida del filtrado durante el último año y probabilidad elevada de requerir terapia de reemplazo renal. Actualmente no presenta síntomas urémicos ni complicaciones refractarias. Nunca ha recibido educación sobre modalidades de tratamiento.`,
  pregunta: "¿Qué objetivo clínico se persigue al planificar la terapia de reemplazo antes de que aparezca una urgencia?",
  opciones: [
    "Iniciar hemodiálisis inmediata en todo paciente G4, independientemente de su evolución",
    "Permitir educación compartida, evaluación para trasplante y preparación del acceso o modalidad elegida antes de una descompensación",
    "Evitar la discusión del trasplante hasta después de iniciar diálisis",
    "Posponer toda planificación hasta que aparezca hiperpotasemia refractaria",
    "Elegir automáticamente hemodiálisis sin considerar preferencias ni comorbilidades"
  ],
  respuestaCorrecta: 1,
  explicacion: `La planificación anticipada permite discutir hemodiálisis, diálisis peritoneal, trasplante y tratamiento conservador integral cuando sea apropiado. También facilita la evaluación para trasplante preemptivo y la preparación del acceso vascular o peritoneal. La progresión debe estimarse mediante trayectoria del filtrado, albuminuria, etiología y herramientas de riesgo cuando estén disponibles. Planificar no significa iniciar diálisis inmediatamente.`,
  perlaENARM: "Preparar la modalidad y el acceso antes de una urgencia reduce la probabilidad de iniciar diálisis de forma no planificada.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre preparación y modalidades de terapia de reemplazo renal.",
    internacional: "KDIGO 2024 CKD Guideline; guías vigentes de acceso vascular y diálisis peritoneal."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., cap. 5.5, terapia renal sustitutiva."
},
{
  id: "NEF-040",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Progresión renal y riesgo cardiovascular integrado",
  dificultad: "Muy alta",
  caso: `Mujer de 63 años con ERC G3a A3, diabetes tipo 2, hipertensión y antecedente de enfermedad cardiovascular aterosclerótica. El filtrado ha disminuido de 59 a 48 mL/min/1.73 m² en un año y la albuminuria continúa elevada pese a mejoría parcial de la presión arterial.`,
  pregunta: "¿Qué interpretación del riesgo refleja mejor la clasificación moderna de la ERC?",
  opciones: [
    "El estadio G3a implica riesgo bajo independientemente de la albuminuria",
    "La categoría A3 y la trayectoria descendente del filtrado aumentan la preocupación por progresión renal y riesgo cardiovascular",
    "La albuminuria solo es relevante si el filtrado es menor de 15 mL/min/1.73 m²",
    "La estabilidad hemodinámica elimina el riesgo de progresión",
    "La clasificación por filtrado sustituye la evaluación de comorbilidades cardiovasculares"
  ],
  respuestaCorrecta: 1,
  explicacion: `La evaluación moderna de ERC integra causa, filtrado y albuminuria, junto con comorbilidades y trayectoria longitudinal. La categoría A3 identifica albuminuria gravemente aumentada, asociada con mayor riesgo renal y cardiovascular. Un descenso sostenido del filtrado obliga a revisar causas reversibles, adherencia, control tensional, exposición a nefrotóxicos y tratamiento nefroprotector indicado. La clasificación no reemplaza la valoración global de riesgo ni la prevención cardiovascular.`,
  perlaENARM: "La categoría CGA debe interpretarse junto con la pendiente del filtrado y las comorbilidades; una sola cifra no resume el pronóstico.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre estratificación y tratamiento de enfermedad renal crónica.",
    internacional: "KDIGO 2024 CKD Guideline; KDIGO Diabetes Management in CKD."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., cap. 5.2–5.3; KDIGO 2024."
},

{
  id: "NEF-041",
  especialidad: "Nefrología",
  tema: "Síndrome nefrítico",
  subtema: "Identificación del patrón glomerular",
  dificultad: "Media",
  caso: `Varón de 19 años consulta por edema palpebral, orina oscura y disminución de la diuresis. La presión arterial es de 155/95 mmHg. La creatinina aumentó de 0.8 a 1.6 mg/dL en cuatro días. El examen urinario muestra hematuria, proteinuria de 1.2 g/día y cilindros eritrocitarios.`,
  pregunta: "¿Qué combinación de hallazgos define mejor el síndrome clínico predominante?",
  opciones: [
    "Proteinuria nefrótica aislada con hipoalbuminemia grave",
    "Hematuria glomerular, deterioro del filtrado, oliguria e hipertensión",
    "Piuria estéril con glucosuria y aminoaciduria",
    "Hematuria macroscópica sin alteraciones de la función renal ni presión arterial",
    "Proteinuria tubular leve con pérdida renal de bicarbonato"
  ],
  respuestaCorrecta: 1,
  explicacion: `El síndrome nefrítico se caracteriza por inflamación glomerular que produce hematuria, con frecuencia dismórfica, cilindros eritrocitarios, reducción del filtrado y retención hidrosalina que puede manifestarse como edema e hipertensión. La proteinuria puede estar presente, pero no necesita alcanzar rango nefrótico. Los cilindros eritrocitarios apoyan firmemente un origen glomerular de la hematuria.`,
  perlaENARM: "Hematuria glomerular, cilindros eritrocitarios, hipertensión y deterioro renal forman el patrón clásico nefrítico.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre glomerulonefritis.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., capítulo de enfermedades glomerulares; KDIGO Glomerular Diseases."
},
{
  id: "NEF-042",
  especialidad: "Nefrología",
  tema: "Síndrome nefrótico",
  subtema: "Fisiopatología del edema",
  dificultad: "Media",
  caso: `Mujer de 32 años presenta edema progresivo de miembros inferiores y párpados. La proteinuria es de 6.8 g/24 h, la albúmina sérica de 1.9 g/dL y el colesterol total de 310 mg/dL. La creatinina es de 0.9 mg/dL.`,
  pregunta: "¿Qué mecanismo contribuye directamente al edema en esta paciente?",
  opciones: [
    "Aumento de la presión oncótica plasmática por retención de albúmina",
    "Disminución de la presión oncótica plasmática por pérdida urinaria de proteínas, junto con retención renal de sodio",
    "Obstrucción linfática como mecanismo universal del síndrome nefrótico",
    "Disminución de la permeabilidad glomerular a proteínas",
    "Pérdida aislada de eritrocitos por lesión de la membrana basal"
  ],
  respuestaCorrecta: 1,
  explicacion: `La proteinuria intensa reduce la concentración plasmática de albúmina y favorece el desplazamiento de líquido al intersticio. La retención renal de sodio también contribuye al aumento del volumen extracelular. Existen pacientes en quienes predomina la retención renal primaria de sodio, por lo que el modelo de disminución de volumen arterial efectivo no explica todos los casos. La función renal conservada no excluye un síndrome nefrótico importante.`,
  perlaENARM: "El edema nefrótico puede combinar hipoalbuminemia, disminución de presión oncótica y retención renal de sodio.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre síndrome nefrótico y enfermedades glomerulares.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., síndrome nefrótico; KDIGO Glomerular Diseases."
},
{
  id: "NEF-043",
  especialidad: "Nefrología",
  tema: "Glomerulonefritis",
  subtema: "Sedimento urinario y localización de la hematuria",
  dificultad: "Alta",
  caso: `Varón de 27 años presenta hematuria microscópica persistente y proteinuria de 1.5 g/día. La microscopía urinaria identifica eritrocitos dismórficos y cilindros eritrocitarios. No tiene disuria, fiebre ni dolor cólico. El urocultivo es negativo.`,
  pregunta: "¿Qué hallazgo aporta mayor evidencia de que el sangrado se origina en el glomérulo?",
  opciones: [
    "Eritrocitos isomórficos sin cilindros",
    "Cilindros eritrocitarios y eritrocitos dismórficos en el sedimento",
    "Leucocituria aislada",
    "Cristales de oxalato de calcio",
    "Bacteriuria sin síntomas urinarios"
  ],
  respuestaCorrecta: 1,
  explicacion: `La deformación eritrocitaria durante el tránsito por una barrera glomerular lesionada y los cilindros formados dentro de los túbulos apoyan hematuria de origen glomerular. Los cilindros eritrocitarios son particularmente útiles, aunque su ausencia no excluye glomerulonefritis. Los eritrocitos isomórficos pueden sugerir origen urológico, pero su morfología no es absoluta y depende de la técnica de observación.`,
  perlaENARM: "Los cilindros eritrocitarios localizan el proceso en el nefrón y, en el contexto adecuado, orientan a inflamación glomerular.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre hematuria y glomerulonefritis.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., diagnóstico de enfermedades glomerulares."
},
{
  id: "NEF-044",
  especialidad: "Nefrología",
  tema: "Glomerulonefritis postinfecciosa",
  subtema: "Cronología y complemento",
  dificultad: "Alta",
  caso: `Niño de 9 años desarrolla edema facial, hipertensión y orina color té. Hace tres semanas tuvo impétigo. Presenta hematuria glomerular, proteinuria subnefrótica, creatinina discretamente elevada y C3 disminuido con C4 conservado.`,
  pregunta: "¿Qué patrón inmunológico es más congruente con el diagnóstico sospechado?",
  opciones: [
    "Consumo predominante de C4 con C3 persistentemente normal",
    "Activación de la vía alternativa del complemento, con reducción de C3",
    "Ausencia de activación del complemento en todos los casos",
    "Deficiencia aislada de IgA sérica como criterio diagnóstico obligatorio",
    "Anticuerpos anti-membrana basal glomerular como hallazgo definitorio"
  ],
  respuestaCorrecta: 1,
  explicacion: `La glomerulonefritis postestreptocócica suele aparecer después de una latencia tras la infección faríngea o cutánea. Es característico el descenso de C3, relacionado con activación del complemento, mientras C4 puede permanecer relativamente conservado. El C3 suele normalizarse en unas 6–8 semanas; su persistencia baja obliga a reconsiderar el diagnóstico y evaluar otras glomerulopatías. La evidencia de infección previa apoya el diagnóstico, pero debe interpretarse junto con el cuadro clínico.`,
  perlaENARM: "Síndrome nefrítico después de una latencia infecciosa más C3 bajo orienta a glomerulonefritis postinfecciosa.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre glomerulonefritis postinfecciosa.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., glomerulonefritis postinfecciosa; KDIGO Glomerular Diseases."
},
{
  id: "NEF-045",
  especialidad: "Nefrología",
  tema: "Nefropatía por IgA",
  subtema: "Hematuria sincrónica con infección de vías respiratorias",
  dificultad: "Alta",
  caso: `Varón de 22 años presenta tres episodios de hematuria macroscópica que comienzan durante las primeras 24–48 horas de infecciones respiratorias altas. Entre episodios persiste microhematuria y proteinuria de 0.8 g/día. C3 y C4 son normales.`,
  pregunta: "¿Qué característica temporal ayuda a diferenciar este patrón de la glomerulonefritis postestreptocócica clásica?",
  opciones: [
    "La hematuria aparece únicamente seis meses después de la infección",
    "La hematuria coincide con la infección respiratoria o aparece muy poco después",
    "La nefropatía por IgA siempre se acompaña de C3 muy disminuido",
    "La nefropatía por IgA nunca produce proteinuria",
    "La presencia de hematuria durante una infección descarta un origen glomerular"
  ],
  respuestaCorrecta: 1,
  explicacion: `La nefropatía por IgA puede producir episodios de hematuria macroscópica sincrónicos con infecciones de mucosas, mientras que la glomerulonefritis postestreptocócica suele presentar un periodo de latencia. El complemento sérico suele ser normal en la nefropatía por IgA. La presentación clínica no confirma por sí sola la etiología: la biopsia renal puede ser necesaria según la magnitud de proteinuria, evolución y repercusión clínica.`,
  perlaENARM: "Hematuria macroscópica sincrónica con infección respiratoria y complemento normal sugiere nefropatía por IgA.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre nefropatía por IgA y hematuria glomerular.",
    internacional: "KDIGO Clinical Practice Guideline for IgA Nephropathy and IgA Vasculitis, versión vigente."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., nefropatía por IgA; KDIGO Glomerular Diseases."
},
{
  id: "NEF-046",
  especialidad: "Nefrología",
  tema: "Síndrome nefrótico",
  subtema: "Definición y cuantificación de proteinuria",
  dificultad: "Media",
  caso: `Mujer de 44 años presenta edema y albúmina sérica de 2.2 g/dL. En una recolección urinaria de 24 horas se cuantifican 4.7 g de proteínas. La tira reactiva muestra proteinuria intensa.`,
  pregunta: "¿Qué dato cumple el umbral cuantitativo clásico de proteinuria en rango nefrótico para un adulto?",
  opciones: [
    "Proteínas urinarias de 150 mg/día",
    "Proteínas urinarias de 500 mg/día",
    "Proteínas urinarias de 1 g/día",
    "Proteínas urinarias superiores a 3.5 g/día",
    "Proteínas urinarias de 2 g/semana"
  ],
  respuestaCorrecta: 3,
  explicacion: `En adultos, la proteinuria superior a 3.5 g/24 horas es el umbral clásico de rango nefrótico. El síndrome nefrótico suele acompañarse de hipoalbuminemia, edema y alteraciones lipídicas, aunque la expresión de cada componente puede variar. La cuantificación puede realizarse mediante recolección de 24 horas o cocientes urinarios validados, interpretados según el contexto clínico y la calidad de la muestra.`,
  perlaENARM: "El rango nefrótico clásico en adultos es proteinuria superior a 3.5 g/24 h; no equivale por sí solo a una etiología específica.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre síndrome nefrótico en adultos.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., síndrome nefrótico; KDIGO Glomerular Diseases."
},
{
  id: "NEF-047",
  especialidad: "Nefrología",
  tema: "Enfermedad de cambios mínimos",
  subtema: "Mecanismo de proteinuria selectiva",
  dificultad: "Alta",
  caso: `Niño de 5 años presenta edema generalizado, proteinuria de 5.2 g/24 h ajustada a superficie corporal, hipoalbuminemia e hiperlipidemia. La creatinina es normal, no hay hematuria significativa y el complemento es normal.`,
  pregunta: "¿Qué alteración estructural se asocia de manera característica con la enfermedad sospechada?",
  opciones: [
    "Depósitos subepiteliales extensos de inmunocomplejos con patrón en jorobas",
    "Borramiento difuso de los pedicelos podocitarios en microscopía electrónica",
    "Engrosamiento lineal de membrana basal por anticuerpos anti-MBG",
    "Semilunas celulares en la mayoría de los glomérulos",
    "Esclerosis nodular difusa como lesión definitoria"
  ],
  respuestaCorrecta: 1,
  explicacion: `La enfermedad de cambios mínimos es una causa frecuente de síndrome nefrótico en niños. La microscopía óptica puede ser normal o mostrar alteraciones mínimas; la inmunofluorescencia no suele demostrar depósitos específicos y la microscopía electrónica revela borramiento difuso de pedicelos. El diagnóstico se establece según edad, presentación y criterios clínicos; en niños con presentación típica puede no requerirse biopsia inicial, mientras que en presentaciones atípicas debe reconsiderarse el diagnóstico.`,
  perlaENARM: "Enfermedad de cambios mínimos: microscopía óptica casi normal y borramiento de pedicelos en microscopía electrónica.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre síndrome nefrótico pediátrico.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., síndrome nefrótico y enfermedad de cambios mínimos; KDIGO."
},
{
  id: "NEF-048",
  especialidad: "Nefrología",
  tema: "Glomeruloesclerosis focal y segmentaria",
  subtema: "Interpretación histopatológica",
  dificultad: "Alta",
  caso: `Varón de 38 años con obesidad grave, hipertensión y proteinuria persistente de 4.2 g/día. La biopsia muestra esclerosis que afecta segmentos de algunos glomérulos, con borramiento podocitario variable. La inmunofluorescencia no identifica depósitos inmunes específicos.`,
  pregunta: "¿Qué interpretación histopatológica corresponde a la descripción de la biopsia?",
  opciones: [
    "Esclerosis global de todos los glomérulos, definitoria de glomerulonefritis postinfecciosa",
    "Lesión focal porque afecta una proporción de glomérulos y segmentaria porque compromete solo parte del penacho",
    "Lesión difusa porque todos los glomérulos presentan la misma lesión",
    "Lesión exclusivamente mesangial por depósito de IgA",
    "Patrón lineal de inmunoglobulina característico de enfermedad anti-MBG"
  ],
  respuestaCorrecta: 1,
  explicacion: `En la glomeruloesclerosis focal y segmentaria, focal indica que solo una parte de los glomérulos está afectada y segmentaria que la esclerosis compromete una porción del penacho glomerular. Es un patrón histológico que puede tener causas primarias, genéticas o adaptativas, entre otras. La obesidad y la hiperfiltración pueden contribuir a formas adaptativas; no debe asumirse que toda lesión FSGS requiere inmunosupresión.`,
  perlaENARM: "Focal describe la proporción de glomérulos afectados; segmentaria describe la extensión de la lesión dentro de cada glomérulo.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre glomeruloesclerosis focal y segmentaria.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., glomeruloesclerosis focal y segmentaria; KDIGO Glomerular Diseases."
},
{
  id: "NEF-049",
  especialidad: "Nefrología",
  tema: "Nefropatía membranosa",
  subtema: "Autoanticuerpos y antígenos podocitarios",
  dificultad: "Muy alta",
  caso: `Varón de 56 años presenta síndrome nefrótico, filtrado glomerular relativamente conservado y ausencia de hematuria importante. Se detectan anticuerpos anti-PLA2R séricos en concentración elevada. No tiene datos clínicos evidentes de infección crónica ni de enfermedad sistémica.`,
  pregunta: "¿Qué significado diagnóstico aporta el resultado anti-PLA2R en este contexto?",
  opciones: [
    "Confirma enfermedad de cambios mínimos en todos los escenarios",
    "Apoya fuertemente nefropatía membranosa primaria en el contexto clínico apropiado, aunque no sustituye toda evaluación etiológica",
    "Demuestra una glomerulonefritis postestreptocócica",
    "Descarta por completo cualquier neoplasia concomitante",
    "Es un marcador exclusivo de nefritis intersticial aguda"
  ],
  respuestaCorrecta: 1,
  explicacion: `Los anticuerpos anti-PLA2R se asocian estrechamente con nefropatía membranosa primaria y pueden aportar valor diagnóstico y pronóstico. En pacientes con síndrome nefrótico y un contexto clínico compatible, pueden ayudar a establecer la probabilidad diagnóstica y seguir la actividad inmunológica. No eliminan la necesidad de evaluar causas secundarias de acuerdo con edad, síntomas y riesgos, ni garantizan que nunca exista otra enfermedad concomitante.`,
  perlaENARM: "Anti-PLA2R es un biomarcador relevante de nefropatía membranosa primaria; el resultado debe interpretarse dentro del contexto clínico.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre nefropatía membranosa.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., nefropatía membranosa; KDIGO Glomerular Diseases."
},
{
  id: "NEF-050",
  especialidad: "Nefrología",
  tema: "Síndrome nefrótico",
  subtema: "Trombosis venosa y pérdida urinaria de anticoagulantes naturales",
  dificultad: "Muy alta",
  caso: `Mujer de 41 años con síndrome nefrótico por nefropatía membranosa presenta dolor súbito en flanco, hematuria y deterioro de la función renal. La albúmina sérica es de 1.7 g/dL. La imagen vascular identifica trombosis de vena renal.`,
  pregunta: "¿Qué mecanismo contribuye de forma importante al estado protrombótico del síndrome nefrótico?",
  opciones: [
    "Pérdida urinaria exclusiva de fibrinógeno, que genera anticoagulación sistémica",
    "Pérdida urinaria de anticoagulantes naturales, junto con cambios hepáticos compensadores y activación plaquetaria",
    "Disminución universal de todos los factores de coagulación",
    "Trombocitopenia grave como mecanismo obligatorio",
    "Aumento de la fibrinólisis que impide la formación de trombos"
  ],
  respuestaCorrecta: 1,
  explicacion: `El síndrome nefrótico se asocia con hipercoagulabilidad por múltiples mecanismos: pérdida urinaria de proteínas anticoagulantes, aumento compensador de síntesis hepática de diversas proteínas, cambios en fibrinólisis y activación plaquetaria. La nefropatía membranosa se asocia con riesgo particularmente importante de tromboembolismo. La decisión de profilaxis anticoagulante debe individualizarse según riesgo trombótico, albúmina, etiología, riesgo hemorrágico y contexto clínico.`,
  perlaENARM: "La trombosis venosa renal es una complicación clásica del síndrome nefrótico, especialmente relevante en nefropatía membranosa.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre síndrome nefrótico y enfermedad tromboembólica.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., complicaciones del síndrome nefrótico; KDIGO Glomerular Diseases."
},
{
  id: "NEF-051",
  especialidad: "Nefrología",
  tema: "Glomerulonefritis rápidamente progresiva",
  subtema: "Clasificación por inmunofluorescencia",
  dificultad: "Muy alta",
  caso: `Mujer de 35 años presenta deterioro rápido de la función renal, hematuria glomerular y hemoptisis. La biopsia muestra semilunas en numerosos glomérulos. La inmunofluorescencia evidencia depósito lineal de IgG a lo largo de la membrana basal glomerular.`,
  pregunta: "¿Qué mecanismo inmunopatológico corresponde mejor al patrón observado?",
  opciones: [
    "Depósitos granulares de inmunocomplejos circulantes",
    "Autoanticuerpos dirigidos contra componentes de la membrana basal glomerular",
    "Depósito mesangial dominante de IgA",
    "Lesión podocitaria aislada sin mecanismo inmunitario",
    "Activación exclusiva del complemento por infección reciente"
  ],
  respuestaCorrecta: 1,
  explicacion: `La tinción lineal de IgG en la membrana basal glomerular, acompañada de glomerulonefritis rápidamente progresiva y posible hemorragia alveolar, sugiere enfermedad anti-membrana basal glomerular. Los anticuerpos se dirigen contra componentes de la membrana basal y producen daño inflamatorio intenso. La presentación constituye una urgencia diagnóstica y terapéutica; se requiere correlación serológica y evaluación especializada inmediata.`,
  perlaENARM: "Inmunofluorescencia lineal de IgG más síndrome pulmón-riñón orienta a enfermedad anti-MBG.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de glomerulonefritis rápidamente progresiva.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., glomerulonefritis rápidamente progresiva; KDIGO Glomerular Diseases."
},
{
  id: "NEF-052",
  especialidad: "Nefrología",
  tema: "Glomerulonefritis asociada a ANCA",
  subtema: "Patrón pauciinmune",
  dificultad: "Alta",
  caso: `Varón de 49 años con pérdida de peso, sinusitis persistente, hematuria, cilindros eritrocitarios y creatinina que aumenta rápidamente. La biopsia renal muestra glomerulonefritis necrosante con semilunas; la inmunofluorescencia presenta escasos o nulos depósitos inmunes.`,
  pregunta: "¿Cómo se denomina el patrón inmunopatológico descrito?",
  opciones: [
    "Glomerulonefritis por inmunocomplejos con depósitos granulares abundantes",
    "Glomerulonefritis pauciinmune, frecuentemente asociada a vasculitis relacionada con ANCA",
    "Nefropatía membranosa con depósitos subepiteliales",
    "Enfermedad de cambios mínimos",
    "Glomeruloesclerosis diabética nodular"
  ],
  respuestaCorrecta: 1,
  explicacion: `La glomerulonefritis necrosante con semilunas y pocos depósitos en inmunofluorescencia corresponde a un patrón pauciinmune. Con frecuencia se asocia a vasculitis relacionada con ANCA, aunque la serología negativa no excluye todos los casos. La combinación de deterioro rápido del filtrado y sedimento glomerular activo exige evaluación urgente, ya que la demora puede ocasionar pérdida irreversible de función renal.`,
  perlaENARM: "Semilunas y necrosis con inmunofluorescencia pauciinmune orientan a vasculitis asociada a ANCA.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre vasculitis sistémicas y glomerulonefritis.",
    internacional: "KDIGO Clinical Practice Guideline for ANCA-Associated Vasculitis; KDIGO Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., vasculitis renales; KDIGO ANCA-Associated Vasculitis."
},
{
  id: "NEF-053",
  especialidad: "Nefrología",
  tema: "Síndrome nefrótico",
  subtema: "Dislipidemia asociada a proteinuria intensa",
  dificultad: "Alta",
  caso: `Mujer de 47 años con proteinuria de 7 g/día, albúmina de 2.0 g/dL y edema. El colesterol LDL y los triglicéridos están elevados. La función hepática es normal y no hay antecedente de dislipidemia familiar.`,
  pregunta: "¿Qué mecanismo contribuye a la dislipidemia del síndrome nefrótico?",
  opciones: [
    "Disminución universal de la síntesis hepática de lipoproteínas",
    "Aumento compensador de síntesis de lipoproteínas y alteraciones en su catabolismo y eliminación",
    "Pérdida urinaria directa de todas las lipoproteínas plasmáticas",
    "Inhibición completa de la actividad de lipoproteinlipasa en todos los pacientes",
    "Aumento de la excreción renal de colesterol como mecanismo principal"
  ],
  respuestaCorrecta: 1,
  explicacion: `La dislipidemia del síndrome nefrótico se relaciona con cambios en la síntesis hepática y el catabolismo de lipoproteínas, además de alteraciones en enzimas y receptores involucrados en su metabolismo. Puede aumentar el colesterol total, LDL y, en algunos pacientes, triglicéridos. La magnitud varía según la intensidad y persistencia de la proteinuria y la hipoalbuminemia. El perfil lipídico debe interpretarse en el contexto de la enfermedad renal y del riesgo cardiovascular global.`,
  perlaENARM: "La hiperlipidemia nefrótica refleja alteraciones de síntesis y depuración de lipoproteínas, no simplemente pérdida urinaria de albúmina.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre síndrome nefrótico y dislipidemia.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases; KDIGO lipid management guidance."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., complicaciones metabólicas del síndrome nefrótico."
},
{
  id: "NEF-054",
  especialidad: "Nefrología",
  tema: "Glomerulonefritis por inmunocomplejos",
  subtema: "Interpretación del complemento",
  dificultad: "Muy alta",
  caso: `Varón de 31 años con síndrome nefrítico, creatinina en ascenso y C3 persistentemente disminuido cuatro meses después del inicio. C4 se mantiene normal. No existe evidencia de infección activa y la biopsia muestra depósitos dominantes de C3.`,
  pregunta: "¿Qué grupo de enfermedades merece especial consideración ante este patrón persistente?",
  opciones: [
    "Enfermedad de cambios mínimos",
    "Glomerulopatías mediadas por desregulación de la vía alternativa del complemento, incluida la glomerulopatía C3",
    "Nefropatía por IgA con complemento siempre consumido",
    "Nefritis intersticial inducida por medicamentos",
    "Glomerulonefritis postinfecciosa resuelta sin actividad persistente"
  ],
  respuestaCorrecta: 1,
  explicacion: `La persistencia de C3 bajo más allá del periodo esperado de recuperación tras una glomerulonefritis postinfecciosa obliga a considerar otras causas de activación persistente del complemento. La glomerulopatía C3 se caracteriza por depósitos dominantes de C3 y se relaciona con alteraciones de regulación de la vía alternativa. La interpretación requiere integrar histología, inmunofluorescencia, evolución clínica y estudios complementarios del sistema del complemento.`,
  perlaENARM: "C3 persistentemente bajo y depósitos dominantes de C3 obligan a reconsiderar una glomerulonefritis postinfecciosa simple.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre glomerulopatías mediadas por complemento.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., glomerulopatías por inmunocomplejos y complemento; KDIGO Glomerular Diseases."
},
{
  id: "NEF-055",
  especialidad: "Nefrología",
  tema: "Síndrome nefrótico",
  subtema: "Pérdida urinaria de inmunoglobulinas e infecciones",
  dificultad: "Alta",
  caso: `Niño de 7 años con síndrome nefrótico en recaída presenta edema intenso y albúmina de 1.8 g/dL. Durante los últimos meses ha tenido infecciones bacterianas recurrentes. No recibe inmunosupresores actualmente.`,
  pregunta: "¿Qué alteración asociada al síndrome nefrótico contribuye a la susceptibilidad infecciosa?",
  opciones: [
    "Aumento constante de inmunoglobulinas circulantes",
    "Pérdida urinaria de inmunoglobulinas y factores del complemento, junto con alteraciones inmunitarias adicionales",
    "Supresión permanente de la médula ósea como mecanismo obligatorio",
    "Ausencia completa de leucocitos en todos los pacientes",
    "Incremento de la presión oncótica plasmática"
  ],
  respuestaCorrecta: 1,
  explicacion: `El síndrome nefrótico puede favorecer infecciones por pérdida urinaria de inmunoglobulinas y factores del complemento, alteraciones de proteínas transportadoras y efectos de tratamientos inmunosupresores cuando se utilizan. La intensidad del riesgo depende de edad, etiología, gravedad de la proteinuria y exposición farmacológica. En niños, la valoración de vacunación y prevención de infecciones debe ajustarse a la enfermedad y al tratamiento recibido.`,
  perlaENARM: "La susceptibilidad infecciosa del síndrome nefrótico es multifactorial; no debe atribuirse únicamente a los glucocorticoides.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre síndrome nefrótico pediátrico y prevención de infecciones.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., complicaciones del síndrome nefrótico; KDIGO."
},
{
  id: "NEF-056",
  especialidad: "Nefrología",
  tema: "Nefropatía membranosa",
  subtema: "Evaluación de causas secundarias",
  dificultad: "Muy alta",
  caso: `Varón de 63 años con síndrome nefrótico de inicio reciente y biopsia compatible con nefropatía membranosa. Refiere pérdida involuntaria de peso y anemia ferropénica. No cuenta con evaluación reciente de cáncer ni con tamizajes acordes con su edad.`,
  pregunta: "¿Qué razonamiento etiológico es más importante para evitar un diagnóstico incompleto?",
  opciones: [
    "La histología membranosa excluye causas secundarias",
    "Debe evaluarse una causa secundaria, incluida neoplasia, de acuerdo con edad, síntomas y factores de riesgo",
    "La anemia ferropénica es una manifestación específica de nefropatía membranosa primaria",
    "La presencia de síndrome nefrótico descarta infección crónica",
    "La evaluación de causas secundarias solo se realiza en pacientes pediátricos"
  ],
  respuestaCorrecta: 1,
  explicacion: `La nefropatía membranosa puede ser primaria o secundaria a enfermedades autoinmunes, infecciones, fármacos y neoplasias. La pérdida de peso y la anemia ferropénica en un adulto mayor son señales que justifican una evaluación etiológica dirigida. La detección debe basarse en la historia, exploración, edad, factores de riesgo y pruebas apropiadas, evitando tanto omitir una enfermedad relevante como solicitar estudios indiscriminados sin indicación clínica.`,
  perlaENARM: "Una biopsia con patrón membranoso no termina la evaluación: siempre considera causas secundarias según el contexto.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre nefropatía membranosa y evaluación de neoplasias según riesgo.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., nefropatía membranosa; KDIGO Glomerular Diseases."
},
{
  id: "NEF-057",
  especialidad: "Nefrología",
  tema: "Glomerulonefritis rápidamente progresiva",
  subtema: "Semilunas y gravedad histológica",
  dificultad: "Muy alta",
  caso: `Paciente de 46 años con creatinina que aumenta rápidamente y sedimento activo. La biopsia revela semilunas celulares en 70% de los glomérulos, necrosis segmentaria y escasa fibrosis intersticial. La evaluación etiológica continúa en curso.`,
  pregunta: "¿Qué significado histopatológico tienen las semilunas celulares en este contexto?",
  opciones: [
    "Representan exclusivamente una lesión crónica cicatricial e irreversible",
    "Indican proliferación extracapilar asociada a lesión glomerular grave, con potencial de reversibilidad variable según actividad y fibrosis",
    "Son específicas de nefropatía diabética",
    "Demuestran enfermedad de cambios mínimos",
    "Descartan una glomerulonefritis mediada por anticuerpos"
  ],
  respuestaCorrecta: 1,
  explicacion: `Las semilunas se forman por proliferación de células epiteliales parietales y acumulación de células inflamatorias y fibrina en el espacio de Bowman, en respuesta a una lesión glomerular intensa. Las semilunas celulares reflejan actividad inflamatoria; las fibrocelulares y fibrosas suelen indicar mayor cronicidad. La proporción de glomérulos afectados es importante, pero el pronóstico también depende de función renal inicial, etiología, fibrosis intersticial y rapidez del tratamiento específico.`,
  perlaENARM: "Las semilunas celulares indican actividad; las fibrosas sugieren cronicidad y menor potencial de recuperación.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes sobre glomerulonefritis rápidamente progresiva.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., glomerulonefritis rápidamente progresiva; KDIGO Glomerular Diseases."
},
{
  id: "NEF-058",
  especialidad: "Nefrología",
  tema: "Síndrome nefrótico",
  subtema: "Proteinuria y riesgo de lesión renal aguda",
  dificultad: "Alta",
  caso: `Mujer de 58 años con síndrome nefrótico por enfermedad glomerular presenta vómitos y baja ingesta durante tres días. Desarrolla hipotensión ortostática y aumento de creatinina. La albúmina es de 1.6 g/dL y no hay evidencia de obstrucción urinaria.`,
  pregunta: "¿Qué interacción fisiopatológica aumenta la vulnerabilidad a lesión renal aguda en este escenario?",
  opciones: [
    "La hipoalbuminemia garantiza expansión intravascular suficiente",
    "La disminución del volumen circulante efectivo puede coexistir con edema intersticial y favorecer hipoperfusión renal",
    "El síndrome nefrótico excluye causas prerrenales de lesión renal",
    "La proteinuria impide que el filtrado glomerular disminuya",
    "El edema periférico demuestra que la perfusión renal es adecuada"
  ],
  respuestaCorrecta: 1,
  explicacion: `En algunos pacientes con síndrome nefrótico, la reducción de presión oncótica y las pérdidas de volumen pueden contribuir a un volumen arterial efectivo bajo, aunque exista edema periférico. Los vómitos y la baja ingesta agravan el riesgo de hipoperfusión. Otros pacientes presentan retención renal primaria de sodio y expansión intravascular, por lo que la valoración debe individualizarse. La reposición de volumen requiere cautela para evitar empeorar edema pulmonar o sobrecarga.`,
  perlaENARM: "Edema periférico no equivale a perfusión intravascular adecuada; evalúa el estado hemodinámico antes de interpretar la lesión renal.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre síndrome nefrótico y lesión renal aguda.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases; KDIGO AKI."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., síndrome nefrótico y lesión renal aguda."
},
{
  id: "NEF-059",
  especialidad: "Nefrología",
  tema: "Glomerulonefritis por lupus",
  subtema: "Complemento y actividad inmunológica",
  dificultad: "Muy alta",
  caso: `Mujer de 25 años con lupus eritematoso sistémico presenta edema, hipertensión, hematuria glomerular, proteinuria de 2.8 g/día, C3 y C4 bajos y anti-DNA de doble cadena en aumento. La creatinina ha aumentado en dos semanas.`,
  pregunta: "¿Qué interpretación relaciona mejor los hallazgos serológicos con la lesión renal sospechada?",
  opciones: [
    "El descenso de C3 y C4 excluye actividad inmunológica por lupus",
    "El consumo de complemento y el aumento de anti-DNA pueden apoyar actividad de lupus, pero la clase y gravedad renal requieren evaluación clinicopatológica",
    "El anti-DNA elevado confirma por sí solo la clase histológica de nefritis lúpica",
    "La proteinuria menor de 3.5 g/día descarta nefritis lúpica proliferativa",
    "El lupus renal siempre se presenta con complemento normal"
  ],
  respuestaCorrecta: 1,
  explicacion: `El descenso de C3 y C4 y el aumento de anti-DNA pueden acompañar actividad inmunológica del lupus, incluida nefritis lúpica. Sin embargo, estos marcadores no determinan por sí solos la clase histológica ni la magnitud de actividad y cronicidad renal. La proteinuria, el sedimento, la evolución del filtrado y la biopsia renal, cuando está indicada, permiten caracterizar mejor la lesión y orientar el tratamiento.`,
  perlaENARM: "Los marcadores serológicos apoyan actividad de lupus, pero no sustituyen la clasificación histológica de la nefritis lúpica.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre lupus eritematoso sistémico y nefritis lúpica.",
    internacional: "KDIGO Clinical Practice Guideline for Lupus Nephritis, versión vigente."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., nefritis lúpica; KDIGO Lupus Nephritis."
},
{
  id: "NEF-060",
  especialidad: "Nefrología",
  tema: "Síndrome nefrítico y síndrome nefrótico",
  subtema: "Patrones mixtos y correlación clinicopatológica",
  dificultad: "Alta",
  caso: `Varón de 36 años presenta edema generalizado, hipertensión, hematuria dismórfica, cilindros eritrocitarios y proteinuria de 5.4 g/día. La albúmina sérica es de 2.1 g/dL y la creatinina ha aumentado de 0.9 a 2.2 mg/dL en diez días.`,
  pregunta: "¿Qué interpretación clínica describe mejor la coexistencia de estos hallazgos?",
  opciones: [
    "Síndrome nefrótico puro, porque la proteinuria supera 3.5 g/día",
    "Síndrome nefrítico puro, porque existe hematuria",
    "Presentación mixta nefrítica-nefrótica, que sugiere lesión glomerular capaz de producir inflamación y aumento importante de permeabilidad a proteínas",
    "Lesión tubular aislada, porque la creatinina aumentó",
    "Hematuria urológica sin evidencia de enfermedad glomerular"
  ],
  respuestaCorrecta: 2,
  explicacion: `La proteinuria en rango nefrótico, la hipoalbuminemia y el edema identifican el componente nefrótico. La hematuria glomerular, los cilindros eritrocitarios, la hipertensión y el deterioro rápido de la función renal indican un componente nefrítico. La coexistencia obliga a considerar glomerulopatías proliferativas o por inmunocomplejos, entre otras etiologías. La evaluación debe integrar complemento, serologías, evolución y biopsia renal cuando esté indicada.`,
  perlaENARM: "La proteinuria nefrótica no excluye inflamación glomerular: los síndromes nefrítico y nefrótico pueden coexistir.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre síndromes glomerulares.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., síndromes glomerulares; KDIGO Glomerular Diseases."
},

{
  id: "NEF-061",
  especialidad: "Nefrología",
  tema: "Biopsia renal",
  subtema: "Indicaciones ante proteinuria y sedimento activo",
  dificultad: "Media",
  caso: `Mujer de 29 años presenta edema, hematuria glomerular persistente y proteinuria de 2.4 g/día. La creatinina aumentó de 0.8 a 1.5 mg/dL en tres semanas. El complemento es normal y no existe una causa sistémica establecida.`,
  pregunta: "¿Qué elemento del caso aporta mayor fundamento para considerar una biopsia renal?",
  opciones: [
    "La edad menor de 30 años, por sí sola",
    "La combinación de deterioro del filtrado, proteinuria significativa y sedimento glomerular activo",
    "La presencia aislada de edema palpebral",
    "El complemento normal, que descarta enfermedad glomerular",
    "La ausencia de antecedentes familiares de enfermedad renal"
  ],
  respuestaCorrecta: 1,
  explicacion: `La combinación de deterioro de función renal, proteinuria relevante y sedimento activo sugiere una glomerulopatía cuya clasificación histológica puede modificar el tratamiento y el pronóstico. La indicación concreta depende de la estabilidad clínica, los estudios serológicos, las contraindicaciones y la probabilidad de que la biopsia cambie la conducta. El complemento normal no excluye glomerulonefritis.`,
  perlaENARM: "La biopsia se considera cuando la caracterización histológica puede cambiar el diagnóstico, tratamiento o pronóstico.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre biopsia renal y enfermedades glomerulares.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., diagnóstico de enfermedades glomerulares; KDIGO Glomerular Diseases."
},
{
  id: "NEF-062",
  especialidad: "Nefrología",
  tema: "Biopsia renal",
  subtema: "Evaluación de riesgo hemorrágico",
  dificultad: "Alta",
  caso: `Varón de 54 años con síndrome nefrótico requiere valoración para biopsia renal. Presenta presión arterial de 188/112 mmHg, hemoglobina de 9.1 g/dL y plaquetas de 210,000/µL. No hay urgencia dialítica inmediata.`,
  pregunta: "¿Cuál de los hallazgos representa una condición modificable que debe abordarse antes de una biopsia renal percutánea electiva?",
  opciones: [
    "La presión arterial marcadamente elevada",
    "La concentración normal de plaquetas",
    "La presencia de proteinuria",
    "La edad mayor de 50 años, como contraindicación absoluta",
    "La ausencia de hematuria macroscópica"
  ],
  respuestaCorrecta: 0,
  explicacion: `La hipertensión arterial no controlada incrementa el riesgo de sangrado asociado a biopsia renal y debe corregirse antes de un procedimiento electivo. La anemia también requiere evaluación porque puede agravar las consecuencias de una hemorragia. La decisión final incorpora coagulación, medicación antitrombótica, anatomía renal, urgencia diagnóstica y experiencia del equipo. La edad o la proteinuria aisladas no son contraindicaciones absolutas.`,
  perlaENARM: "Antes de una biopsia renal percutánea, identifica y corrige hipertensión no controlada y alteraciones hemorrágicas cuando sea posible.",
  gpc: {
    mexico: "Consultar protocolo institucional y GPC mexicana vigente sobre biopsia renal percutánea.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., procedimientos diagnósticos en nefrología; KDIGO Glomerular Diseases."
},
{
  id: "NEF-063",
  especialidad: "Nefrología",
  tema: "Interpretación de biopsia renal",
  subtema: "Correlación entre microscopía óptica, inmunofluorescencia y electrónica",
  dificultad: "Alta",
  caso: `Una biopsia renal muestra hipercelularidad mesangial en microscopía óptica. La inmunofluorescencia identifica depósitos mesangiales dominantes de IgA y la microscopía electrónica confirma depósitos electrodensos mesangiales.`,
  pregunta: "¿Qué interpretación integra correctamente los tres componentes de la biopsia?",
  opciones: [
    "La microscopía óptica identifica por sí sola el antígeno responsable en todos los casos",
    "La inmunofluorescencia caracteriza los depósitos inmunes y la microscopía electrónica precisa su localización ultraestructural",
    "La microscopía electrónica sustituye siempre a la inmunofluorescencia",
    "Los depósitos mesangiales de IgA demuestran necesariamente infección estreptocócica reciente",
    "La hipercelularidad mesangial excluye cualquier glomerulopatía por inmunocomplejos"
  ],
  respuestaCorrecta: 1,
  explicacion: `La evaluación histológica glomerular integra microscopía óptica, inmunofluorescencia y, cuando está indicada, microscopía electrónica. La primera permite reconocer patrones de proliferación, esclerosis y lesión; la inmunofluorescencia caracteriza inmunoglobulinas y componentes del complemento; la electrónica localiza depósitos y evalúa estructuras como los pedicelos. La interpretación final exige correlación clínica y no depende de un único hallazgo aislado.`,
  perlaENARM: "La biopsia renal se interpreta integrando morfología, depósitos inmunes y ultraestructura.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre diagnóstico histopatológico de glomerulopatías.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., biopsia renal y glomerulopatías; KDIGO Glomerular Diseases."
},
{
  id: "NEF-064",
  especialidad: "Nefrología",
  tema: "Nefropatía por IgA",
  subtema: "Valoración pronóstica de la proteinuria",
  dificultad: "Alta",
  caso: `Mujer de 35 años con nefropatía por IgA confirmada por biopsia presenta proteinuria persistente de 1.8 g/día, presión arterial de 146/92 mmHg y filtrado glomerular estimado de 76 mL/min/1.73 m². La hematuria microscópica continúa.`,
  pregunta: "¿Qué variable modificable tiene especial relevancia para reducir el riesgo de progresión renal?",
  opciones: [
    "Eliminar toda actividad física independientemente de la condición clínica",
    "Optimizar el control de la presión arterial y reducir la proteinuria con tratamiento nefroprotector indicado",
    "Mantener la presión arterial elevada para preservar la filtración",
    "Iniciar glucocorticoides en todos los pacientes sin considerar riesgo ni tratamiento de soporte",
    "Suspender la cuantificación de proteinuria si la hematuria persiste"
  ],
  respuestaCorrecta: 1,
  explicacion: `La proteinuria persistente y la hipertensión son factores pronósticos importantes en la nefropatía por IgA. El tratamiento incluye control de presión arterial, medidas nefroprotectoras y valoración de terapias adicionales según el riesgo residual, la función renal, la tolerancia y las recomendaciones vigentes. La inmunosupresión no debe indicarse automáticamente sin evaluar riesgos, beneficios y opciones terapéuticas.`,
  perlaENARM: "En nefropatía por IgA, la proteinuria persistente y la presión arterial elevada señalan riesgo de progresión y requieren intervención.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre nefropatía por IgA y enfermedad renal crónica.",
    internacional: "KDIGO Clinical Practice Guideline for IgA Nephropathy and IgA Vasculitis, versión vigente."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., nefropatía por IgA; KDIGO IgA Nephropathy."
},
{
  id: "NEF-065",
  especialidad: "Nefrología",
  tema: "Enfermedad de cambios mínimos",
  subtema: "Respuesta terapéutica y resistencia a glucocorticoides",
  dificultad: "Alta",
  caso: `Niño de 6 años con síndrome nefrótico típico recibe glucocorticoides bajo supervisión pediátrica. Después de un periodo de tratamiento adecuado, persiste proteinuria en rango nefrótico. No presenta datos de infección activa ni incumplimiento terapéutico evidente.`,
  pregunta: "¿Qué consideración es más importante ante la persistencia de proteinuria pese al tratamiento inicial adecuado?",
  opciones: [
    "Asumir que la enfermedad de cambios mínimos está confirmada de manera irreversible",
    "Reevaluar el diagnóstico, la adherencia y la posibilidad de resistencia a glucocorticoides, considerando valoración especializada y biopsia según el protocolo",
    "Suspender toda vigilancia porque la creatinina puede permanecer normal",
    "Concluir que existe nefropatía membranosa sin realizar más estudios",
    "Indicar antibióticos como tratamiento específico de la lesión podocitaria"
  ],
  respuestaCorrecta: 1,
  explicacion: `La persistencia de proteinuria después de un esquema adecuado obliga a confirmar que se cumplieron dosis y duración, revisar adherencia, descartar causas intercurrentes y reconsiderar la etiología. En el síndrome nefrótico pediátrico, la falta de respuesta a glucocorticoides modifica la evaluación y puede justificar biopsia y estudio genético según la edad, el fenotipo y las recomendaciones pediátricas. La resistencia terapéutica no identifica por sí sola una lesión histológica única.`,
  perlaENARM: "La falta de respuesta a glucocorticoides en un síndrome nefrótico pediátrico típico obliga a revisar diagnóstico y adherencia.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre síndrome nefrótico idiopático pediátrico.",
    internacional: "KDIGO Clinical Practice Guideline for Nephrotic Syndrome in Children."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., síndrome nefrótico; KDIGO Nephrotic Syndrome in Children."
},
{
  id: "NEF-066",
  especialidad: "Nefrología",
  tema: "Glomeruloesclerosis focal y segmentaria",
  subtema: "Diferenciación entre formas primarias y adaptativas",
  dificultad: "Muy alta",
  caso: `Varón de 47 años con obesidad, apnea obstructiva del sueño y enfermedad renal crónica presenta proteinuria de 3.8 g/día, albúmina de 3.6 g/dL y edema mínimo. La biopsia identifica glomerulomegalia y lesiones segmentarias, sin depósitos inmunes específicos.`,
  pregunta: "¿Qué elemento favorece una forma adaptativa de glomeruloesclerosis focal y segmentaria frente a una forma primaria?",
  opciones: [
    "Proteinuria en rango nefrótico acompañada siempre de hipoalbuminemia profunda",
    "Glomerulomegalia, factores de hiperfiltración y proteinuria importante sin hipoalbuminemia marcada",
    "Depósitos lineales de IgG a lo largo de la membrana basal",
    "Complemento persistentemente muy bajo como hallazgo obligatorio",
    "Presencia exclusiva de hematuria macroscópica durante infecciones"
  ],
  respuestaCorrecta: 1,
  explicacion: `Las formas adaptativas de glomeruloesclerosis focal y segmentaria se asocian a hiperfiltración y aumento de estrés mecánico podocitario, por ejemplo en obesidad o reducción de masa nefronal. Pueden producir proteinuria importante sin el fenotipo completo de síndrome nefrótico, especialmente sin hipoalbuminemia profunda. La distinción entre formas primarias, adaptativas y genéticas requiere integrar clínica, histología, evolución y, cuando está indicado, pruebas genéticas.`,
  perlaENARM: "La magnitud de proteinuria no define por sí sola una FSGS primaria; el fenotipo clínico y el contexto de hiperfiltración son decisivos.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre glomeruloesclerosis focal y segmentaria.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., glomeruloesclerosis focal y segmentaria; KDIGO Glomerular Diseases."
},
{
  id: "NEF-067",
  especialidad: "Nefrología",
  tema: "Nefropatía membranosa",
  subtema: "Seguimiento de anticuerpos anti-PLA2R",
  dificultad: "Muy alta",
  caso: `Paciente con nefropatía membranosa primaria anti-PLA2R positiva inicia tratamiento dirigido por riesgo. A los seis meses, los títulos de anti-PLA2R disminuyen de forma marcada, pero la proteinuria continúa elevada. La albúmina comienza a mejorar lentamente y el filtrado se mantiene estable.`,
  pregunta: "¿Qué interpretación explica mejor la discordancia entre la mejoría serológica y la proteinuria persistente?",
  opciones: [
    "La persistencia de proteinuria demuestra siempre fracaso inmunológico inmediato",
    "La remisión inmunológica puede preceder a la remisión clínica porque la reparación de la barrera de filtración y la desaparición de la proteinuria son más lentas",
    "Los títulos de anti-PLA2R carecen de toda utilidad durante el seguimiento",
    "La disminución de anticuerpos descarta definitivamente cualquier daño renal residual",
    "La proteinuria debe desaparecer el mismo día en que disminuyen los anticuerpos"
  ],
  respuestaCorrecta: 1,
  explicacion: `En nefropatía membranosa, la reducción o desaparición de anti-PLA2R puede preceder a la mejoría de la proteinuria por un intervalo clínicamente relevante. La recuperación de la barrera de filtración y la eliminación del exceso de proteínas filtradas no son inmediatas. El seguimiento debe integrar evolución de anticuerpos, proteinuria, albúmina, filtrado y tratamiento recibido; la persistencia de proteinuria no debe interpretarse aisladamente como fracaso terapéutico temprano.`,
  perlaENARM: "En nefropatía membranosa, la remisión inmunológica puede preceder a la remisión clínica.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre seguimiento de nefropatía membranosa.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., nefropatía membranosa; KDIGO Glomerular Diseases."
},
{
  id: "NEF-068",
  especialidad: "Nefrología",
  tema: "Glomerulonefritis postinfecciosa",
  subtema: "Persistencia de hipocomplementemia",
  dificultad: "Alta",
  caso: `Niño de 10 años se recupera de un episodio de glomerulonefritis postinfecciosa. Ocho semanas después, la creatinina y la presión arterial han mejorado, pero el C3 continúa claramente disminuido y persiste proteinuria significativa.`,
  pregunta: "¿Qué aspecto de la evolución requiere reconsiderar el diagnóstico inicial?",
  opciones: [
    "La normalización de la presión arterial",
    "La persistencia de C3 bajo más allá del periodo habitual de recuperación",
    "La desaparición de los cilindros eritrocitarios",
    "La mejoría de la creatinina",
    "La resolución del edema"
  ],
  respuestaCorrecta: 1,
  explicacion: `En la glomerulonefritis postinfecciosa típica, el C3 suele recuperarse aproximadamente en 6–8 semanas. Si permanece bajo, especialmente junto con proteinuria relevante o alteraciones renales persistentes, deben reconsiderarse diagnósticos como glomerulopatía C3 u otras glomerulonefritis por inmunocomplejos. La evolución no se interpreta con un solo dato: deben evaluarse la función renal, el sedimento y la trayectoria de la proteinuria.`,
  perlaENARM: "C3 bajo persistente a las 8 semanas es una señal para reabrir el diagnóstico diferencial.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre glomerulonefritis postinfecciosa.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., glomerulonefritis postinfecciosa; KDIGO Glomerular Diseases."
},
{
  id: "NEF-069",
  especialidad: "Nefrología",
  tema: "Nefritis lúpica",
  subtema: "Indicación de biopsia renal",
  dificultad: "Alta",
  caso: `Mujer de 24 años con lupus eritematoso sistémico presenta proteinuria persistente de 1.1 g/día, hematuria microscópica y aumento reciente de creatinina. El anti-DNA de doble cadena está elevado y el C3 disminuido.`,
  pregunta: "¿Por qué la biopsia renal puede modificar de manera decisiva el manejo?",
  opciones: [
    "Porque los niveles de complemento identifican de forma inequívoca la clase histológica",
    "Porque permite determinar clase, actividad y cronicidad de la lesión, variables que orientan el tratamiento",
    "Porque elimina la necesidad de cuantificar proteinuria",
    "Porque todas las clases de nefritis lúpica reciben exactamente el mismo tratamiento",
    "Porque solo es útil cuando existe proteinuria superior a 10 g/día"
  ],
  respuestaCorrecta: 1,
  explicacion: `La nefritis lúpica presenta patrones histológicos con implicaciones terapéuticas y pronósticas distintas. La biopsia permite clasificar la lesión y estimar actividad inflamatoria y daño crónico, información que no puede obtenerse con certeza a partir de complemento, anti-DNA o proteinuria aislados. La indicación concreta debe considerar los umbrales de proteinuria, sedimento, función renal y recomendaciones vigentes.`,
  perlaENARM: "En nefritis lúpica, la biopsia caracteriza la clase y la actividad; la serología no sustituye la histología.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre nefritis lúpica.",
    internacional: "KDIGO Clinical Practice Guideline for Lupus Nephritis, versión vigente."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., nefritis lúpica; KDIGO Lupus Nephritis."
},
{
  id: "NEF-070",
  especialidad: "Nefrología",
  tema: "Enfermedad anti-membrana basal glomerular",
  subtema: "Interpretación de serología negativa",
  dificultad: "Muy alta",
  caso: `Varón de 42 años presenta glomerulonefritis rápidamente progresiva. La biopsia muestra necrosis y semilunas, con depósito lineal de IgG en la membrana basal glomerular. La primera determinación sérica de anticuerpos anti-MBG es negativa.`,
  pregunta: "¿Qué conclusión diagnóstica es la más rigurosa?",
  opciones: [
    "La enfermedad anti-MBG queda descartada de manera absoluta por una serología negativa",
    "Debe integrarse el patrón histológico con la serología y valorar limitaciones del ensayo o formas seronegativas",
    "El depósito lineal de IgG demuestra nefropatía por IgA",
    "La biopsia es irrelevante si la serología inicial es negativa",
    "El cuadro confirma automáticamente vasculitis ANCA sin necesidad de pruebas adicionales"
  ],
  respuestaCorrecta: 1,
  explicacion: `La serología anti-MBG es muy útil, pero un resultado negativo no debe interpretarse aislado cuando la histología muestra depósito lineal de IgG y existe un cuadro compatible. Deben revisarse el método analítico, la cronología, la posibilidad de resultados falsamente negativos y diagnósticos diferenciales. La correlación con ANCA y otros estudios inmunológicos puede ser necesaria, mientras que el deterioro renal rápidamente progresivo exige valoración urgente.`,
  perlaENARM: "Cuando histología y serología discrepan, revisa el conjunto de evidencia antes de excluir una enfermedad grave.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para glomerulonefritis rápidamente progresiva.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., enfermedad anti-MBG; KDIGO Glomerular Diseases."
},
{
  id: "NEF-071",
  especialidad: "Nefrología",
  tema: "Síndrome nefrótico",
  subtema: "Interpretación de la albúmina sérica",
  dificultad: "Media",
  caso: `Varón de 52 años presenta proteinuria de 4.1 g/día, edema leve y albúmina sérica de 3.4 g/dL. La función renal es estable y no hay datos de hepatopatía. El estudio urinario confirma proteinuria persistente.`,
  pregunta: "¿Cuál es la interpretación más precisa de estos resultados?",
  opciones: [
    "La albúmina relativamente conservada excluye una glomerulopatía",
    "Existe proteinuria en rango nefrótico, pero la expresión clínica y bioquímica debe interpretarse en conjunto y no todos los pacientes presentan hipoalbuminemia profunda",
    "La proteinuria superior a 3.5 g/día confirma por sí sola nefropatía membranosa",
    "El edema leve demuestra que la cuantificación urinaria es errónea",
    "Una creatinina estable descarta enfermedad glomerular significativa"
  ],
  respuestaCorrecta: 1,
  explicacion: `La proteinuria superior a 3.5 g/día corresponde al rango nefrótico clásico en adultos, pero la magnitud de hipoalbuminemia y edema varía. La expresión completa del síndrome nefrótico incluye la interpretación conjunta de proteinuria, albúmina, edema y alteraciones lipídicas. La etiología no puede deducirse únicamente por el umbral de proteínas, y una función renal estable no excluye lesión glomerular relevante.`,
  perlaENARM: "Rango nefrótico es un umbral cuantitativo; el síndrome nefrótico es un conjunto clínico-bioquímico.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre proteinuria y síndrome nefrótico en adultos.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., síndrome nefrótico; KDIGO Glomerular Diseases."
},
{
  id: "NEF-072",
  especialidad: "Nefrología",
  tema: "Nefropatía por IgA",
  subtema: "Clasificación histopatológica y pronóstico",
  dificultad: "Muy alta",
  caso: `Paciente de 40 años con nefropatía por IgA confirmada por biopsia mantiene proteinuria de 1.4 g/día y filtrado glomerular en descenso. El informe histológico describe proliferación mesangial, semilunas en una minoría de glomérulos y fibrosis intersticial.`,
  pregunta: "¿Qué enfoque permite aprovechar mejor los hallazgos histológicos para la estimación pronóstica?",
  opciones: [
    "Usar únicamente la presencia de depósitos de IgA, sin considerar lesiones adicionales",
    "Integrar la clasificación histológica con proteinuria, filtrado, presión arterial y evolución clínica",
    "Asumir que cualquier semiluna obliga a utilizar el mismo tratamiento en todos los pacientes",
    "Ignorar la fibrosis intersticial porque no se relaciona con el pronóstico",
    "Considerar que la hematuria determina por sí sola el riesgo de progresión"
  ],
  respuestaCorrecta: 1,
  explicacion: `La evaluación pronóstica de la nefropatía por IgA requiere integrar características histológicas, como proliferación, esclerosis y fibrosis, con variables clínicas longitudinales. La proteinuria persistente, la hipertensión y la disminución del filtrado aportan información pronóstica importante. Las semilunas deben interpretarse en contexto y no implican automáticamente una única estrategia terapéutica sin considerar actividad, gravedad y recomendaciones vigentes.`,
  perlaENARM: "La histología aporta información pronóstica, pero debe combinarse con datos clínicos y evolución renal.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre nefropatía por IgA.",
    internacional: "KDIGO Clinical Practice Guideline for IgA Nephropathy and IgA Vasculitis, versión vigente."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., nefropatía por IgA; KDIGO IgA Nephropathy."
},
{
  id: "NEF-073",
  especialidad: "Nefrología",
  tema: "Síndrome nefrótico",
  subtema: "Evaluación de proteinuria mediante cocientes urinarios",
  dificultad: "Media",
  caso: `Mujer de 67 años presenta edema y sospecha de síndrome nefrótico. Tiene dificultad para completar una recolección urinaria de 24 horas. Se obtiene una muestra aislada de orina para cuantificación de proteínas y creatinina.`,
  pregunta: "¿Qué ventaja ofrece el cociente proteína/creatinina urinaria en una muestra aislada?",
  opciones: [
    "Mide directamente la albúmina sérica",
    "Permite estimar la excreción de proteínas ajustándola parcialmente por la concentración urinaria, sin requerir recolección completa de 24 horas",
    "Elimina toda variabilidad biológica y analítica",
    "Identifica de manera específica la etiología histológica de la glomerulopatía",
    "Sustituye siempre cualquier repetición de la prueba, aun con resultados discordantes"
  ],
  respuestaCorrecta: 1,
  explicacion: `El cociente proteína/creatinina en una muestra aislada facilita la estimación de la excreción diaria de proteínas y reduce los problemas prácticos de una recolección incompleta de 24 horas. Sin embargo, puede existir variabilidad según hora, actividad, masa muscular y contexto clínico. Si el resultado no concuerda con el cuadro o va a determinar decisiones relevantes, puede ser necesario repetirlo o confirmar mediante otro método.`,
  perlaENARM: "El cociente proteína/creatinina facilita la cuantificación práctica, pero no elimina la variabilidad ni identifica la causa histológica.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre evaluación de proteinuria.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., evaluación de proteinuria; KDIGO Glomerular Diseases."
},
{
  id: "NEF-074",
  especialidad: "Nefrología",
  tema: "Glomerulonefritis asociada a infección",
  subtema: "Infección persistente y tratamiento etiológico",
  dificultad: "Alta",
  caso: `Varón de 58 años con diabetes presenta hematuria, proteinuria y deterioro de la función renal. Los hemocultivos son positivos para Staphylococcus aureus y el ecocardiograma identifica vegetación compatible con endocarditis. El complemento está disminuido.`,
  pregunta: "¿Qué aspecto etiológico debe priorizarse al interpretar el cuadro glomerular?",
  opciones: [
    "Considerar una glomerulonefritis asociada a infección activa y tratar la infección identificada junto con la evaluación renal",
    "Diagnosticar automáticamente nefropatía por IgA primaria por la presencia de hematuria",
    "Iniciar inmunosupresión intensa sin evaluar ni tratar la infección",
    "Descartar una relación entre infección y lesión glomerular porque el paciente es adulto",
    "Asumir que la hipocomplementemia confirma lupus eritematoso sistémico"
  ],
  respuestaCorrecta: 0,
  explicacion: `Las infecciones activas, incluida la endocarditis, pueden asociarse con glomerulonefritis por mecanismos inmunitarios y consumo de complemento. En este contexto, identificar y tratar la infección es central; la inmunosupresión no debe iniciarse de forma automática y requiere valoración individualizada. La biopsia puede ser útil cuando el diagnóstico es incierto, la evolución es atípica o los hallazgos histológicos cambiarían el manejo.`,
  perlaENARM: "Una infección activa puede ser la causa del síndrome glomerular; evita asumir una glomerulopatía primaria sin integrar el contexto.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre endocarditis infecciosa y glomerulonefritis asociada a infección.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., glomerulonefritis asociada a infección; KDIGO Glomerular Diseases."
},
{
  id: "NEF-075",
  especialidad: "Nefrología",
  tema: "Nefropatía diabética",
  subtema: "Datos atípicos que sugieren otra glomerulopatía",
  dificultad: "Alta",
  caso: `Mujer de 59 años con diabetes mellitus tipo 2 de tres años de evolución presenta proteinuria de 3.9 g/día, hematuria glomerular con cilindros eritrocitarios y aumento de creatinina en pocas semanas. No se dispone de una evaluación previa de albuminuria.`,
  pregunta: "¿Qué característica obliga a investigar una enfermedad renal no diabética o una lesión glomerular superpuesta?",
  opciones: [
    "La presencia de diabetes mellitus, que confirma por sí sola la etiología renal",
    "La evolución rápida, el sedimento glomerular activo y la duración relativamente corta de diabetes conocida",
    "La edad mayor de 50 años",
    "La proteinuria, que es imposible en la nefropatía diabética",
    "La ausencia de edema periférico"
  ],
  respuestaCorrecta: 1,
  explicacion: `La nefropatía diabética suele evolucionar de forma progresiva, aunque existen variaciones. Un deterioro acelerado del filtrado, hematuria glomerular con cilindros o un curso discordante con la historia de diabetes obligan a valorar otras causas o una lesión superpuesta. La duración conocida de diabetes no siempre coincide con la duración real de la hiperglucemia, por lo que debe integrarse con retinopatía, albuminuria previa, serologías y eventual biopsia.`,
  perlaENARM: "En una persona con diabetes, la evolución atípica o el sedimento activo hacen considerar enfermedad renal no diabética.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre enfermedad renal diabética y biopsia renal.",
    internacional: "KDIGO Clinical Practice Guideline for Diabetes Management in Chronic Kidney Disease."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., nefropatía diabética; KDIGO Diabetes Management in CKD."
},
{
  id: "NEF-076",
  especialidad: "Nefrología",
  tema: "Síndrome nefrótico",
  subtema: "Interpretación del riesgo tromboembólico",
  dificultad: "Muy alta",
  caso: `Paciente de 50 años con nefropatía membranosa, albúmina de 1.9 g/dL y proteinuria persistente de 8 g/día. No tiene antecedente de hemorragia mayor, pero utiliza antiinflamatorios de forma intermitente y presenta hipertensión no controlada.`,
  pregunta: "¿Qué principio debe guiar la decisión sobre profilaxis anticoagulante primaria?",
  opciones: [
    "Anticoagular a todos los pacientes con síndrome nefrótico sin evaluar riesgos",
    "Estimar individualmente el riesgo trombótico y hemorrágico, considerando etiología, albúmina, proteinuria, comorbilidades y medicamentos",
    "Descartar profilaxis porque la creatinina no está elevada",
    "Usar únicamente el colesterol para determinar el riesgo trombótico",
    "Indicar anticoagulación solo cuando exista trombocitopenia"
  ],
  respuestaCorrecta: 1,
  explicacion: `La nefropatía membranosa y la hipoalbuminemia importante se asocian con riesgo tromboembólico elevado. Sin embargo, la profilaxis anticoagulante primaria exige balancear ese riesgo con el de sangrado, incluyendo hipertensión no controlada, uso de antiinflamatorios y otras comorbilidades. La decisión debe individualizarse y seguir recomendaciones actualizadas; no es una indicación universal para todas las personas con síndrome nefrótico.`,
  perlaENARM: "La profilaxis anticoagulante en síndrome nefrótico depende del balance entre riesgo trombótico y hemorrágico.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre tromboembolismo y síndrome nefrótico.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., complicaciones tromboembólicas del síndrome nefrótico; KDIGO Glomerular Diseases."
},
{
  id: "NEF-077",
  especialidad: "Nefrología",
  tema: "Glomerulopatías",
  subtema: "Interpretación de depósitos inmunes granulares",
  dificultad: "Muy alta",
  caso: `Paciente de 33 años con síndrome nefrítico presenta biopsia renal con inmunofluorescencia granular para inmunoglobulinas y complemento. La microscopía electrónica identifica depósitos electrodensos. No se cuenta aún con serologías completas ni con historia infecciosa detallada.`,
  pregunta: "¿Cuál es la conclusión más apropiada a partir de los hallazgos disponibles?",
  opciones: [
    "El patrón granular confirma por sí solo una única etiología",
    "El patrón sugiere una glomerulopatía por inmunocomplejos, cuya causa debe definirse mediante correlación clínica, serológica y ultraestructural",
    "Los depósitos granulares excluyen cualquier participación del complemento",
    "La microscopía electrónica descarta glomerulonefritis proliferativa",
    "La inmunofluorescencia permite concluir que la lesión es exclusivamente tubular"
  ],
  respuestaCorrecta: 1,
  explicacion: `Los depósitos granulares de inmunoglobulinas y complemento suelen sugerir mecanismos mediados por inmunocomplejos, pero no identifican por sí solos una etiología única. La localización mesangial, subendotelial o subepitelial, el tipo de inmunoglobulina, el patrón de complemento y la morfología óptica ayudan a delimitar el diagnóstico. La evaluación clínica debe buscar infecciones, enfermedades autoinmunes y otras causas relevantes.`,
  perlaENARM: "La inmunofluorescencia define el patrón de depósitos; la etiología requiere integrar histología y contexto clínico.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre diagnóstico de glomerulopatías.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., interpretación de biopsia renal; KDIGO Glomerular Diseases."
},
{
  id: "NEF-078",
  especialidad: "Nefrología",
  tema: "Síndrome nefrítico",
  subtema: "Hipertensión y expansión del volumen extracelular",
  dificultad: "Media",
  caso: `Varón de 18 años con glomerulonefritis aguda presenta presión arterial de 170/100 mmHg, edema, oliguria y aumento de peso de 4 kg en cinco días. No tiene antecedentes de hipertensión crónica ni signos de choque.`,
  pregunta: "¿Qué mecanismo explica principalmente la hipertensión en este escenario?",
  opciones: [
    "Pérdida renal de sodio con contracción sostenida del volumen extracelular",
    "Reducción del filtrado glomerular con retención de sodio y agua, que expande el volumen extracelular",
    "Disminución de la resistencia vascular sistémica por vasodilatación generalizada",
    "Pérdida masiva de albúmina como único mecanismo en todos los síndromes nefríticos",
    "Aumento aislado de eritropoyetina"
  ],
  respuestaCorrecta: 1,
  explicacion: `La inflamación glomerular puede reducir el filtrado y limitar la excreción de sodio y agua, provocando expansión del volumen extracelular, edema e hipertensión. La gravedad debe evaluarse mediante presión arterial, estado respiratorio, diuresis y función renal. La hipertensión grave con síntomas neurológicos, insuficiencia cardiaca o edema pulmonar requiere atención urgente.`,
  perlaENARM: "En el síndrome nefrítico agudo, la retención de sodio y agua explica gran parte del edema y la hipertensión.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre glomerulonefritis aguda e hipertensión secundaria.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., síndrome nefrítico."
},
{
  id: "NEF-079",
  especialidad: "Nefrología",
  tema: "Glomerulopatías",
  subtema: "Proteinuria persistente y evaluación etiológica",
  dificultad: "Alta",
  caso: `Mujer de 42 años presenta proteinuria persistente de 1.2 g/día en dos mediciones separadas por tres meses. Tiene filtrado glomerular conservado, presión arterial normal y ausencia de síntomas sistémicos. El sedimento urinario no muestra cilindros.`,
  pregunta: "¿Qué estrategia inicial permite caracterizar mejor el riesgo y orientar el estudio etiológico?",
  opciones: [
    "Ignorar el hallazgo porque la creatinina es normal",
    "Confirmar y cuantificar la proteinuria, evaluar albuminuria, función renal, sedimento, presión arterial y contexto clínico",
    "Iniciar inmunosupresión antes de completar la evaluación",
    "Solicitar biopsia renal de forma automática en toda proteinuria persistente",
    "Diagnosticar nefropatía diabética sin conocer antecedentes metabólicos"
  ],
  respuestaCorrecta: 1,
  explicacion: `La proteinuria persistente requiere confirmar el hallazgo y caracterizar su magnitud, composición y evolución. Deben evaluarse albuminuria, filtrado glomerular, sedimento, presión arterial, diabetes, medicamentos y datos de enfermedad sistémica. La necesidad de serologías, imagen o biopsia depende del riesgo y de la probabilidad de que los resultados cambien el manejo. Un filtrado conservado no excluye enfermedad renal estructural.`,
  perlaENARM: "La proteinuria persistente es un marcador de daño renal aun cuando el filtrado glomerular sea normal.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre enfermedad renal crónica y evaluación de proteinuria.",
    internacional: "KDIGO Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., evaluación de proteinuria y enfermedad renal crónica; KDIGO CKD."
},
{
  id: "NEF-080",
  especialidad: "Nefrología",
  tema: "Síndrome nefrótico y síndrome nefrítico",
  subtema: "Selección de estudios complementarios según fenotipo",
  dificultad: "Muy alta",
  caso: `Varón de 39 años presenta edema, proteinuria de 5.8 g/día, hematuria glomerular, cilindros eritrocitarios y creatinina en ascenso. El C3 está bajo. No tiene diagnóstico previo de enfermedad autoinmune y refiere una infección cutánea varias semanas antes.`,
  pregunta: "¿Qué estrategia diagnóstica integra mejor el fenotipo mixto y evita atribuir la enfermedad a una sola causa sin evidencia suficiente?",
  opciones: [
    "Diagnosticar nefropatía membranosa únicamente por la proteinuria nefrótica",
    "Evaluar complemento y evidencia de infección, solicitar estudios inmunológicos dirigidos y valorar biopsia renal por el deterioro funcional y el sedimento activo",
    "Descartar glomerulonefritis postinfecciosa porque existe proteinuria en rango nefrótico",
    "Asumir nefropatía por IgA porque toda hematuria glomerular es sincrónica con infección",
    "Limitar el estudio a una tira reactiva urinaria y repetirla en un año"
  ],
  respuestaCorrecta: 1,
  explicacion: `La combinación de proteinuria en rango nefrótico con hematuria glomerular, cilindros eritrocitarios y deterioro renal representa un fenotipo mixto que requiere una evaluación etiológica estructurada. El C3 bajo y la infección previa apoyan una posible glomerulonefritis asociada a infección, pero no son diagnósticos definitivos. La evaluación integra cronología, cultivos o evidencia serológica de infección, complemento, pruebas inmunológicas dirigidas y biopsia cuando puede establecer el patrón y modificar el tratamiento.`,
  perlaENARM: "Ante un fenotipo glomerular mixto con deterioro renal, integra clínica, complemento, infección, serologías y biopsia; evita diagnosticar por un solo dato.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre glomerulonefritis postinfecciosa y síndrome glomerular mixto.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases."
  },
  bibliografia: "Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed., síndromes glomerulares; KDIGO Glomerular Diseases."
},
  
{
  id: "NEF-081",
  especialidad: "Nefrología",
  tema: "Nefritis tubulointersticial aguda",
  subtema: "Lesión renal inducida por medicamentos",
  dificultad: "Media",
  caso: `Mujer de 64 años inicia omeprazol y, varias semanas después, presenta aumento de creatinina de 0.9 a 2.4 mg/dL. El examen urinario muestra leucocituria, proteinuria leve y hematuria microscópica. No tiene obstrucción en la ecografía ni hipotensión documentada.`,
  pregunta: "¿Qué diagnóstico debe considerarse ante esta evolución temporal y el sedimento urinario?",
  opciones: [
    "Nefritis tubulointersticial aguda asociada a medicamentos",
    "Glomerulonefritis postestreptocócica como única posibilidad",
    "Necrosis cortical bilateral por choque",
    "Nefropatía membranosa primaria",
    "Enfermedad renal poliquística autosómica dominante"
  ],
  respuestaCorrecta: 0,
  explicacion: `Los inhibidores de la bomba de protones pueden asociarse a nefritis tubulointersticial aguda, que puede presentarse con lesión renal aguda y un sedimento con leucocituria, hematuria o proteinuria leve. La tríada clásica de fiebre, exantema y eosinofilia es infrecuente, por lo que su ausencia no descarta el diagnóstico. Deben evaluarse otras causas de lesión renal y suspender el agente sospechoso cuando la relación clínica sea convincente.`,
  perlaENARM: "La nefritis intersticial por fármacos puede carecer de fiebre, exantema y eosinofilia; el sedimento y la cronología orientan.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre lesión renal aguda y nefritis tubulointersticial.",
    internacional: "KDIGO Clinical Practice Guideline for Acute Kidney Injury; literatura nefrológica sobre nefritis intersticial inducida por fármacos."
  },
  bibliografia: "Harrison. Principios de Medicina Interna, 19.ª ed., lesión renal aguda y nefritis intersticial; Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed."
},
{
  id: "NEF-082",
  especialidad: "Nefrología",
  tema: "Nefritis tubulointersticial aguda",
  subtema: "Limitaciones de la eosinofiluria",
  dificultad: "Alta",
  caso: `Varón de 58 años presenta creatinina elevada después de recibir varios antibióticos. Se sospecha nefritis tubulointersticial aguda. La búsqueda de eosinófilos en orina es negativa y el hemograma no muestra eosinofilia periférica.`,
  pregunta: "¿Cuál es la interpretación más rigurosa de estos resultados negativos?",
  opciones: [
    "Excluyen definitivamente la nefritis tubulointersticial aguda",
    "Reducen la utilidad de algunos hallazgos de apoyo, pero no excluyen el diagnóstico",
    "Confirman necrosis tubular aguda por isquemia",
    "Demuestran que la lesión es exclusivamente glomerular",
    "Indican que la creatinina elevada no representa lesión renal"
  ],
  respuestaCorrecta: 1,
  explicacion: `La eosinofiluria tiene sensibilidad y especificidad insuficientes para confirmar o excluir nefritis tubulointersticial aguda. La ausencia de eosinofilia periférica tampoco descarta una reacción medicamentosa. La evaluación integra cronología, exposición farmacológica, sedimento, evolución después de retirar el posible agente y exclusión de otras causas; la biopsia puede ser útil si la incertidumbre persiste y el resultado modificaría el tratamiento.`,
  perlaENARM: "Una eosinofiluria negativa no descarta nefritis intersticial; no debe usarse como prueba definitiva.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre lesión renal aguda y nefritis intersticial.",
    internacional: "KDIGO Acute Kidney Injury; revisiones clínicas sobre nefritis intersticial aguda."
  },
  bibliografia: "Harrison. Principios de Medicina Interna, 19.ª ed., lesión renal aguda; Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed."
},
{
  id: "NEF-083",
  especialidad: "Nefrología",
  tema: "Acidosis tubular renal",
  subtema: "Acidosis tubular renal distal",
  dificultad: "Alta",
  caso: `Mujer de 35 años presenta debilidad muscular y nefrolitiasis recurrente. Los estudios muestran bicarbonato sérico de 14 mmol/L, cloro elevado, anión gap normal, potasio de 3.0 mmol/L y pH urinario de 6.2 durante la acidosis metabólica. No hay datos de infección urinaria por microorganismos productores de ureasa.`,
  pregunta: "¿Qué alteración fisiológica explica mejor este patrón?",
  opciones: [
    "Incapacidad distal para acidificar adecuadamente la orina",
    "Pérdida aislada de bicarbonato por diarrea, con respuesta renal normal",
    "Acidosis láctica por hipoperfusión",
    "Cetoacidosis diabética",
    "Retención de ácidos por insuficiencia renal avanzada como única causa"
  ],
  respuestaCorrecta: 0,
  explicacion: `La acidosis tubular renal distal, o tipo 1, se caracteriza por incapacidad para reducir apropiadamente el pH urinario durante una acidosis metabólica. Puede acompañarse de hipopotasemia, nefrolitiasis y nefrocalcinosis. En una persona con acidosis sistémica, un pH urinario persistentemente elevado apoya el diagnóstico, pero debe interpretarse junto con el contexto clínico y excluir infección urinaria y otras causas de alteración de la acidificación.`,
  perlaENARM: "Acidosis metabólica con anión gap normal, hipopotasemia y pH urinario inapropiadamente alto sugiere acidosis tubular renal distal.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre acidosis metabólica y trastornos tubulares renales.",
    internacional: "Harrison's Principles of Internal Medicine; revisiones nefrológicas sobre acidosis tubular renal."
  },
  bibliografia: "Clinical Physiology of Acid-Base and Electrolyte Disorders; Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed."
},
{
  id: "NEF-084",
  especialidad: "Nefrología",
  tema: "Acidosis tubular renal",
  subtema: "Acidosis tubular proximal",
  dificultad: "Alta",
  caso: `Varón de 42 años presenta debilidad y poliuria. Tiene bicarbonato sérico de 16 mmol/L, potasio de 3.1 mmol/L y anión gap normal. El análisis de orina identifica glucosuria con glucemia normal, fosfaturia y aminoaciduria. El pH urinario es de 5.1 después de que disminuye el bicarbonato plasmático.`,
  pregunta: "¿Qué mecanismo explica mejor el conjunto de alteraciones?",
  opciones: [
    "Defecto proximal de reabsorción de bicarbonato con disfunción tubular proximal más amplia",
    "Incapacidad distal absoluta para secretar hidrogeniones",
    "Exceso primario de producción de lactato",
    "Pérdida aislada de albúmina por lesión podocitaria",
    "Aumento de la producción renal de amonio que causa alcalosis metabólica"
  ],
  respuestaCorrecta: 0,
  explicacion: `La glucosuria normoglucémica, la fosfaturia y la aminoaciduria sugieren disfunción del túbulo proximal o síndrome de Fanconi. La pérdida proximal de bicarbonato produce acidosis tubular renal tipo 2. Una vez que la concentración plasmática de bicarbonato disminuye, el nefrón distal puede conservar la capacidad de acidificar la orina, por lo que el pH urinario puede ser menor de 5.5. La etiología requiere investigar medicamentos, tóxicos y enfermedades sistémicas.`,
  perlaENARM: "Glucosuria normoglucémica más fosfaturia y aminoaciduria orientan a disfunción tubular proximal.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre acidosis tubular renal y trastornos de reabsorción tubular.",
    internacional: "Harrison's Principles of Internal Medicine; literatura especializada en síndrome de Fanconi."
  },
  bibliografia: "Clinical Physiology of Acid-Base and Electrolyte Disorders; Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed."
},
{
  id: "NEF-085",
  especialidad: "Nefrología",
  tema: "Acidosis tubular renal",
  subtema: "Acidosis tubular tipo 4 e hiperpotasemia",
  dificultad: "Media",
  caso: `Varón de 68 años con diabetes mellitus tipo 2 y enfermedad renal crónica presenta potasio de 5.8 mmol/L, bicarbonato de 18 mmol/L y anión gap normal. No tiene diarrea ni recibe suplementos de potasio. La función renal está discretamente reducida.`,
  pregunta: "¿Qué mecanismo es más compatible con este patrón bioquímico?",
  opciones: [
    "Defecto de acción o disponibilidad de aldosterona con reducción de la excreción renal de potasio y amonio",
    "Exceso de aldosterona con pérdida renal intensa de potasio",
    "Pérdida digestiva aislada de bicarbonato con respuesta renal íntegra",
    "Cetoacidosis con anión gap elevado",
    "Acidosis láctica por choque"
  ],
  respuestaCorrecta: 0,
  explicacion: `La acidosis tubular renal tipo 4 suele asociarse con hiperpotasemia y acidosis metabólica con anión gap normal. Puede aparecer en diabetes por hipoaldosteronismo hiporreninémico o por alteraciones en la acción de aldosterona. La hiperpotasemia reduce la amoniogénesis renal, lo que contribuye a la retención de ácido. Deben revisarse medicamentos, función renal y otras causas de hiperpotasemia antes de establecer el diagnóstico definitivo.`,
  perlaENARM: "Hiperpotasemia más acidosis metabólica con anión gap normal en una persona con diabetes sugiere acidosis tubular tipo 4.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre hiperpotasemia y acidosis tubular renal.",
    internacional: "KDIGO guidance on potassium management; literatura nefrológica sobre acidosis tubular renal tipo 4."
  },
  bibliografia: "Clinical Physiology of Acid-Base and Electrolyte Disorders; Harrison. Principios de Medicina Interna, 19.ª ed."
},
{
  id: "NEF-086",
  especialidad: "Nefrología",
  tema: "Alteraciones del potasio",
  subtema: "Hipopotasemia por pérdidas renales",
  dificultad: "Media",
  caso: `Mujer de 30 años presenta debilidad muscular y potasio sérico de 2.7 mmol/L. Niega vómitos y diarrea. La presión arterial es normal y la concentración urinaria de potasio es inapropiadamente elevada durante la hipopotasemia.`,
  pregunta: "¿Qué interpretación aporta mayor valor al hallazgo urinario?",
  opciones: [
    "Existe evidencia de pérdida renal de potasio que requiere investigar su mecanismo",
    "La concentración urinaria elevada demuestra pérdida gastrointestinal",
    "La hipopotasemia se debe necesariamente a redistribución intracelular",
    "La excreción urinaria de potasio no aporta información en la hipopotasemia",
    "El resultado confirma por sí solo hiperaldosteronismo primario"
  ],
  respuestaCorrecta: 0,
  explicacion: `Durante la hipopotasemia, el riñón sano debe reducir la excreción de potasio. Una excreción urinaria inapropiadamente elevada apoya pérdidas renales y orienta a investigar diuréticos, alteraciones tubulares, exceso mineralocorticoide y otros mecanismos. La interpretación depende de la concentración urinaria, la ingesta reciente, el estado ácido-base y el uso de medicamentos; ningún valor aislado identifica por sí solo la causa.`,
  perlaENARM: "Ante hipopotasemia, una excreción urinaria de potasio inapropiadamente alta orienta a pérdida renal.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre trastornos hidroelectrolíticos.",
    internacional: "Harrison's Principles of Internal Medicine; Clinical Physiology of Acid-Base and Electrolyte Disorders."
  },
  bibliografia: "Clinical Physiology of Acid-Base and Electrolyte Disorders; Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed."
},
{
  id: "NEF-087",
  especialidad: "Nefrología",
  tema: "Alteraciones del sodio",
  subtema: "Hiponatremia hipotónica y SIADH",
  dificultad: "Alta",
  caso: `Mujer de 71 años con neumonía presenta sodio sérico de 121 mmol/L, osmolaridad plasmática baja, osmolaridad urinaria de 480 mOsm/kg y sodio urinario de 58 mmol/L. No tiene edema, hipotensión ni datos de deshidratación. La función tiroidea y la evaluación suprarrenal no muestran alteraciones relevantes.`,
  pregunta: "¿Qué mecanismo es más compatible con el patrón descrito?",
  opciones: [
    "Exceso de acción de vasopresina con incapacidad para excretar agua libre",
    "Supresión completa de vasopresina con producción de orina muy diluida",
    "Pseudohiponatremia por hipertrigliceridemia como explicación confirmada",
    "Diabetes insípida central no tratada",
    "Pérdida aislada de sodio por diarrea con hipovolemia manifiesta"
  ],
  respuestaCorrecta: 0,
  explicacion: `La hiponatremia hipotónica con orina inapropiadamente concentrada y sodio urinario elevado, en un paciente clínicamente euvolémico y tras excluir causas relevantes, es compatible con síndrome de secreción inadecuada de hormona antidiurética (SIADH). El diagnóstico exige excluir insuficiencia suprarrenal, hipotiroidismo significativo, insuficiencia renal relevante y otras causas de retención de agua. La gravedad neurológica y la rapidez de instauración determinan la urgencia y el tratamiento.`,
  perlaENARM: "SIADH: hiponatremia hipotónica, orina no diluida y ausencia de hipovolemia o edema, después de excluir diagnósticos alternativos.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre diagnóstico y tratamiento de hiponatremia.",
    internacional: "European Clinical Practice Guideline on Diagnosis and Treatment of Hyponatraemia; literatura nefrológica actualizada."
  },
  bibliografia: "Clinical Physiology of Acid-Base and Electrolyte Disorders; Harrison. Principios de Medicina Interna, 19.ª ed."
},
{
  id: "NEF-088",
  especialidad: "Nefrología",
  tema: "Alteraciones del sodio",
  subtema: "Corrección de hiponatremia crónica",
  dificultad: "Muy alta",
  caso: `Varón de 62 años con alcoholismo crónico, desnutrición e hiponatremia de duración probablemente superior a 48 horas presenta sodio de 108 mmol/L. Está somnoliento, pero no convulsiona. Se inicia tratamiento hospitalario con solución hipertónica bajo monitorización estrecha.`,
  pregunta: "¿Qué complicación debe prevenirse especialmente al corregir el sodio?",
  opciones: [
    "Desmielinización osmótica por corrección excesivamente rápida",
    "Hipercalcemia maligna por cualquier incremento del sodio",
    "Glomerulonefritis postinfecciosa",
    "Síndrome nefrótico agudo",
    "Nefrolitiasis por oxalato como complicación inmediata obligatoria"
  ],
  respuestaCorrecta: 0,
  explicacion: `La hiponatremia crónica grave puede provocar adaptación osmótica cerebral. Una elevación excesivamente rápida del sodio aumenta el riesgo de desmielinización osmótica, especialmente en personas con alcoholismo, desnutrición, hepatopatía avanzada o hipopotasemia. La corrección debe individualizarse según síntomas, duración y riesgo, con mediciones seriadas de sodio y vigilancia de la diuresis. En síntomas neurológicos graves, la solución hipertónica puede estar indicada inicialmente, sin perseguir una normalización inmediata.`,
  perlaENARM: "La hiponatremia crónica grave exige límites de corrección conservadores; alcoholismo y desnutrición aumentan el riesgo de desmielinización osmótica.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre hiponatremia grave.",
    internacional: "European Clinical Practice Guideline on Diagnosis and Treatment of Hyponatraemia; recomendaciones internacionales sobre desmielinización osmótica."
  },
  bibliografia: "Clinical Physiology of Acid-Base and Electrolyte Disorders; Harrison. Principios de Medicina Interna, 19.ª ed."
},
{
  id: "NEF-089",
  especialidad: "Nefrología",
  tema: "Alteraciones del calcio",
  subtema: "Hipercalcemia y lesión renal",
  dificultad: "Alta",
  caso: `Mujer de 66 años presenta confusión leve, poliuria, estreñimiento y creatinina elevada. El calcio corregido es de 13.4 mg/dL. Refiere sed intensa y disminución de la ingesta durante varios días.`,
  pregunta: "¿Qué mecanismo contribuye a la lesión renal en la hipercalcemia significativa?",
  opciones: [
    "Alteración de la capacidad de concentración urinaria, vasoconstricción renal y posible depleción de volumen",
    "Aumento obligatorio del filtrado glomerular sin cambios tubulares",
    "Pérdida selectiva de eritrocitos por la membrana basal",
    "Supresión completa de la excreción urinaria de calcio",
    "Disminución de la osmolaridad urinaria causada exclusivamente por SIADH"
  ],
  respuestaCorrecta: 0,
  explicacion: `La hipercalcemia puede disminuir la capacidad de concentración renal, favorecer poliuria y provocar depleción de volumen. También puede producir vasoconstricción renal y, en casos graves o prolongados, daño estructural. La evaluación debe confirmar la hipercalcemia, identificar su etiología y valorar gravedad, estado de volumen, electrocardiograma y función renal. La reposición de volumen y las terapias específicas dependen del contexto clínico y de las contraindicaciones.`,
  perlaENARM: "Hipercalcemia importante puede causar poliuria, deshidratación y lesión renal aguda.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre hipercalcemia y lesión renal aguda.",
    internacional: "Harrison's Principles of Internal Medicine; guías especializadas vigentes para hipercalcemia."
  },
  bibliografia: "Harrison. Principios de Medicina Interna, 19.ª ed.; Clinical Physiology of Acid-Base and Electrolyte Disorders."
},
{
  id: "NEF-090",
  especialidad: "Nefrología",
  tema: "Alteraciones del fósforo",
  subtema: "Hipofosfatemia por pérdida renal",
  dificultad: "Alta",
  caso: `Varón de 48 años presenta debilidad muscular, dolor óseo y fracturas por fragilidad. Tiene hipofosfatemia persistente, fosfaturia inapropiada y fosfatasa alcalina elevada. La glucemia es normal, pero existe glucosuria sin hiperglucemia.`,
  pregunta: "¿Qué proceso debe investigarse prioritariamente?",
  opciones: [
    "Disfunción tubular proximal con pérdida renal de fosfato, potencialmente parte de un síndrome de Fanconi",
    "Aumento aislado de la reabsorción tubular de fosfato",
    "Hiperfosfatemia por destrucción celular",
    "Acidosis respiratoria como causa única de fosfaturia",
    "Glomerulonefritis membranosa como explicación obligatoria de la glucosuria"
  ],
  respuestaCorrecta: 0,
  explicacion: `La hipofosfatemia persistente con fosfaturia inapropiada indica pérdida renal de fosfato. Si se acompaña de glucosuria normoglucémica, debe sospecharse disfunción proximal, como síndrome de Fanconi. La pérdida crónica de fosfato puede comprometer la mineralización ósea y causar osteomalacia. La evaluación incluye medicamentos, tóxicos, función tubular y, según el caso, mecanismos hormonales que regulan el fosfato.`,
  perlaENARM: "Hipofosfatemia con fosfaturia inapropiada y glucosuria normoglucémica orienta a disfunción tubular proximal.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre trastornos del metabolismo mineral y enfermedades tubulares.",
    internacional: "KDIGO CKD-MBD guidance; literatura especializada sobre síndrome de Fanconi y pérdida renal de fosfato."
  },
  bibliografia: "Brenner & Rector's The Kidney; Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed."
},
{
  id: "NEF-091",
  especialidad: "Nefrología",
  tema: "Nefrolitiasis",
  subtema: "Litiasis por estruvita",
  dificultad: "Media",
  caso: `Mujer de 57 años con infecciones urinarias recurrentes presenta dolor lumbar, fiebre y un cálculo coraliforme. El urocultivo identifica una bacteria productora de ureasa y el pH urinario es de 8.2.`,
  pregunta: "¿Qué composición del cálculo es más probable?",
  opciones: [
    "Estruvita, formada por fosfato amónico magnésico",
    "Cistina",
    "Ácido úrico puro",
    "Oxalato de calcio monohidratado exclusivamente",
    "Xantina por deficiencia de xantina oxidasa como diagnóstico más probable"
  ],
  respuestaCorrecta: 0,
  explicacion: `Las bacterias productoras de ureasa hidrolizan la urea y generan amonio, elevando el pH urinario. Este ambiente favorece la formación de cálculos de estruvita, compuestos de fosfato amónico magnésico, que pueden formar cálculos coraliformes. La presencia de fiebre, obstrucción y cálculo infectado requiere evaluación urgente, porque puede ser necesaria la descompresión además del tratamiento antimicrobiano.`,
  perlaENARM: "Orina alcalina, bacteria productora de ureasa y cálculo coraliforme sugieren estruvita.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre urolitiasis e infección urinaria complicada.",
    internacional: "European Association of Urology Guidelines on Urolithiasis, versión vigente."
  },
  bibliografia: "Harrison. Principios de Medicina Interna, 19.ª ed.; Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed.; EAU Urolithiasis Guidelines."
},
{
  id: "NEF-092",
  especialidad: "Nefrología",
  tema: "Nefrolitiasis",
  subtema: "Cálculos de ácido úrico",
  dificultad: "Alta",
  caso: `Varón de 59 años con obesidad, diabetes tipo 2 y antecedente de gota presenta nefrolitiasis recurrente. El cálculo es radiolúcido en radiografía simple y visible en tomografía sin contraste. El pH urinario de varias muestras es de 5.0.`,
  pregunta: "¿Qué alteración favorece de manera importante la formación de estos cálculos?",
  opciones: [
    "Orina persistentemente ácida, que reduce la solubilidad del ácido úrico",
    "Orina persistentemente alcalina con aumento de solubilidad del ácido úrico",
    "Hipercalciuria como requisito obligatorio",
    "Deficiencia de citrato como único mecanismo en todos los pacientes",
    "Infección por bacterias productoras de ureasa como causa necesaria"
  ],
  respuestaCorrecta: 0,
  explicacion: `El pH urinario bajo favorece la protonación del ácido úrico y disminuye su solubilidad, facilitando la precipitación. La resistencia a la insulina y otros factores metabólicos pueden contribuir a una menor excreción renal de amonio y a orina ácida. La prevención depende de la composición del cálculo y de la evaluación metabólica; la alcalinización urinaria suele ser una intervención central cuando está indicada y se monitoriza adecuadamente.`,
  perlaENARM: "En la litiasis por ácido úrico, el pH urinario bajo es un factor clave y puede ser más importante que la uricemia aislada.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre diagnóstico y prevención de urolitiasis.",
    internacional: "European Association of Urology Guidelines on Urolithiasis, versión vigente."
  },
  bibliografia: "Brenner & Rector's The Kidney; EAU Urolithiasis Guidelines; Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed."
},
{
  id: "NEF-093",
  especialidad: "Nefrología",
  tema: "Nefrolitiasis",
  subtema: "Hipercalciuria y estudio metabólico",
  dificultad: "Media",
  caso: `Mujer de 36 años presenta dos episodios de cálculos de oxalato de calcio. No tiene infección urinaria ni alteraciones anatómicas conocidas. Se encuentra en evaluación para prevenir recurrencias.`,
  pregunta: "¿Qué estrategia permite identificar factores metabólicos modificables asociados con la recurrencia?",
  opciones: [
    "Estudio metabólico dirigido, incluida evaluación urinaria de calcio, oxalato, citrato, ácido úrico y volumen según indicación",
    "Medición aislada de creatinina sérica como prueba suficiente",
    "Suspender todos los alimentos que contienen calcio sin conocer la composición del cálculo",
    "Indicar antibióticos profilácticos a todas las personas con litiasis cálcica",
    "Evitar la hidratación para disminuir la diuresis"
  ],
  respuestaCorrecta: 0,
  explicacion: `En pacientes con litiasis recurrente, el análisis del cálculo y una evaluación metabólica apropiada ayudan a identificar factores como hipercalciuria, hiperoxaluria, hipocitraturia, hiperuricosuria y bajo volumen urinario. La prevención debe individualizarse; una restricción indiscriminada de calcio dietético puede aumentar la absorción intestinal de oxalato y no es una recomendación universal. La ingesta de líquidos y las medidas dietéticas deben adaptarse al perfil metabólico y al estado clínico.`,
  perlaENARM: "En litiasis recurrente, identifica la composición del cálculo y los factores metabólicos antes de individualizar la prevención.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre prevención y tratamiento de urolitiasis.",
    internacional: "European Association of Urology Guidelines on Urolithiasis, versión vigente."
  },
  bibliografia: "Brenner & Rector's The Kidney; EAU Urolithiasis Guidelines; Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed."
},
{
  id: "NEF-094",
  especialidad: "Nefrología",
  tema: "Nefrolitiasis",
  subtema: "Litiasis de cistina",
  dificultad: "Alta",
  caso: `Varón de 21 años presenta episodios repetidos de cólico renal desde la adolescencia. El análisis del cálculo identifica cistina y la microscopía urinaria muestra cristales hexagonales. No tiene enfermedad renal crónica avanzada.`,
  pregunta: "¿Qué mecanismo fisiopatológico explica la formación de estos cálculos?",
  opciones: [
    "Defecto hereditario del transporte tubular proximal de aminoácidos dibásicos y cistina",
    "Exceso de ureasa bacteriana como causa necesaria",
    "Deficiencia de anhidrasa carbónica en eritrocitos",
    "Depósito de inmunocomplejos en el glomérulo",
    "Hiperproducción hepática de bilirrubina como mecanismo principal"
  ],
  respuestaCorrecta: 0,
  explicacion: `La cistinuria es un trastorno hereditario del transporte de cistina y aminoácidos dibásicos en túbulo proximal renal y tracto gastrointestinal. La cistina tiene baja solubilidad en orina ácida, por lo que puede cristalizar y producir litiasis recurrente desde edades tempranas. El manejo incluye hidratación abundante, alcalinización urinaria monitorizada y, en casos seleccionados, fármacos que aumentan la solubilidad de la cistina, junto con seguimiento especializado.`,
  perlaENARM: "Cristales hexagonales en orina son característicos de cistina y orientan a cistinuria hereditaria.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre litiasis renal recurrente y enfermedades hereditarias del túbulo.",
    internacional: "European Association of Urology Guidelines on Urolithiasis, versión vigente."
  },
  bibliografia: "Brenner & Rector's The Kidney; EAU Urolithiasis Guidelines; Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed."
},
{
  id: "NEF-095",
  especialidad: "Nefrología",
  tema: "Infección urinaria y obstrucción",
  subtema: "Uropatía obstructiva infectada",
  dificultad: "Muy alta",
  caso: `Mujer de 63 años presenta fiebre, escalofríos, dolor lumbar derecho e hipotensión. La tomografía identifica un cálculo ureteral con hidronefrosis proximal. El lactato está elevado y la creatinina aumentó respecto a su basal.`,
  pregunta: "¿Qué aspecto del manejo es esencial además de iniciar antimicrobianos apropiados?",
  opciones: [
    "Esperar varios días a que el antibiótico elimine la obstrucción",
    "Descomprimir urgentemente el sistema urinario obstruido mediante una técnica apropiada",
    "Indicar únicamente analgesia y seguimiento ambulatorio",
    "Realizar una restricción hídrica intensa en todos los casos",
    "Posponer la evaluación de sepsis hasta que se normalice la creatinina"
  ],
  respuestaCorrecta: 1,
  explicacion: `La obstrucción urinaria acompañada de infección sistémica constituye una urgencia urológica. El tratamiento requiere antimicrobianos y control del foco mediante descompresión urgente, habitualmente con catéter ureteral o nefrostomía según la anatomía y disponibilidad. La estabilización hemodinámica, los cultivos y la evaluación de disfunción orgánica deben realizarse en paralelo. La extracción definitiva del cálculo suele diferirse hasta controlar la infección.`,
  perlaENARM: "Sistema urinario obstruido e infectado: antibióticos más descompresión urgente; no basta con tratamiento médico aislado.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre urosepsis, urolitiasis obstructiva y control del foco.",
    internacional: "European Association of Urology Guidelines on Urolithiasis; Surviving Sepsis Campaign, versión vigente."
  },
  bibliografia: "Harrison. Principios de Medicina Interna, 19.ª ed.; EAU Urolithiasis Guidelines; Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed."
},
{
  id: "NEF-096",
  especialidad: "Nefrología",
  tema: "Trastornos tubulares hereditarios",
  subtema: "Síndrome de Bartter",
  dificultad: "Alta",
  caso: `Adolescente de 16 años presenta poliuria, debilidad y retraso ponderal. Tiene hipopotasemia, alcalosis metabólica, renina y aldosterona elevadas, presión arterial normal y pérdida urinaria de cloro. No recibe diuréticos.`,
  pregunta: "¿Qué mecanismo fisiológico es compatible con el cuadro?",
  opciones: [
    "Defecto de reabsorción de cloruro de sodio en el asa ascendente gruesa, con pérdida salina y activación secundaria del sistema renina-angiotensina-aldosterona",
    "Exceso primario de aldosterona con hipertensión obligatoria",
    "Defecto aislado de secreción distal de potasio sin pérdida salina",
    "Incapacidad proximal para reabsorber glucosa como alteración definitoria",
    "Disminución de renina por expansión persistente del volumen extracelular"
  ],
  respuestaCorrecta: 0,
  explicacion: `El síndrome de Bartter comprende defectos tubulares hereditarios que afectan la reabsorción de sal en el asa ascendente gruesa. La pérdida de sal activa renina y aldosterona, contribuyendo a hipopotasemia y alcalosis metabólica, habitualmente con presión arterial normal o baja. La presentación y la edad de inicio varían según el defecto molecular; la evaluación debe diferenciarlo de otras tubulopatías y del uso de diuréticos.`,
  perlaENARM: "Bartter produce pérdida salina, hipopotasemia y alcalosis metabólica con renina y aldosterona elevadas, generalmente sin hipertensión.",
  gpc: {
    mexico: "Consultar referencias mexicanas vigentes sobre tubulopatías hereditarias.",
    internacional: "Brenner & Rector's The Kidney; literatura especializada sobre síndromes de Bartter y Gitelman."
  },
  bibliografia: "Brenner & Rector's The Kidney; Clinical Physiology of Acid-Base and Electrolyte Disorders."
},
{
  id: "NEF-097",
  especialidad: "Nefrología",
  tema: "Trastornos tubulares hereditarios",
  subtema: "Síndrome de Gitelman",
  dificultad: "Alta",
  caso: `Mujer de 24 años presenta calambres y parestesias. El potasio sérico es de 2.9 mmol/L, el magnesio está disminuido y existe alcalosis metabólica. La presión arterial es normal y el calcio urinario es bajo. Niega uso de diuréticos.`,
  pregunta: "¿Qué tubulopatía hereditaria explica mejor el patrón bioquímico?",
  opciones: [
    "Síndrome de Gitelman por alteración del cotransportador Na-Cl sensible a tiazidas",
    "Síndrome de Liddle por activación del canal epitelial de sodio",
    "Acidosis tubular renal distal",
    "Síndrome de Fanconi con pérdida proximal generalizada",
    "Diabetes insípida central"
  ],
  respuestaCorrecta: 0,
  explicacion: `El síndrome de Gitelman se relaciona con alteraciones del cotransportador Na-Cl del túbulo contorneado distal. Produce pérdida renal de sal, hipopotasemia, alcalosis metabólica, hipomagnesemia e hipocalciuria, con presión arterial generalmente normal o baja. El diagnóstico diferencial incluye uso de diuréticos y síndrome de Bartter; la edad de presentación y el patrón de calcio y magnesio urinarios aportan información útil.`,
  perlaENARM: "Hipopotasemia más alcalosis metabólica, hipomagnesemia e hipocalciuria orientan a síndrome de Gitelman.",
  gpc: {
    mexico: "Consultar referencias mexicanas vigentes sobre tubulopatías hereditarias.",
    internacional: "Brenner & Rector's The Kidney; literatura especializada sobre síndrome de Gitelman."
  },
  bibliografia: "Brenner & Rector's The Kidney; Clinical Physiology of Acid-Base and Electrolyte Disorders."
},
{
  id: "NEF-098",
  especialidad: "Nefrología",
  tema: "Trastornos tubulares hereditarios",
  subtema: "Síndrome de Liddle",
  dificultad: "Muy alta",
  caso: `Varón de 19 años presenta hipertensión arterial grave desde la adolescencia, hipopotasemia y alcalosis metabólica. La renina y la aldosterona están suprimidas. No utiliza glucocorticoides ni mineralocorticoides.`,
  pregunta: "¿Qué mecanismo distingue al síndrome de Liddle de un hiperaldosteronismo primario?",
  opciones: [
    "Activación constitutiva del canal epitelial de sodio, independiente de aldosterona",
    "Producción excesiva de aldosterona con renina suprimida",
    "Deficiencia completa de vasopresina",
    "Pérdida renal de sodio por alteración del asa ascendente gruesa",
    "Defecto de reabsorción proximal de bicarbonato"
  ],
  respuestaCorrecta: 0,
  explicacion: `El síndrome de Liddle se debe a una alteración hereditaria que aumenta la actividad del canal epitelial de sodio en el nefrón distal. La reabsorción excesiva de sodio produce hipertensión, aumento de la secreción de potasio e hidrogeniones y supresión de renina y aldosterona. A diferencia del hiperaldosteronismo primario, la aldosterona está baja; el tratamiento específico suele dirigirse al canal epitelial de sodio y requiere seguimiento especializado.`,
  perlaENARM: "Hipertensión precoz, hipopotasemia y renina y aldosterona bajas sugieren Liddle, entre otras causas de exceso mineralocorticoide aparente.",
  gpc: {
    mexico: "Consultar referencias mexicanas vigentes sobre hipertensión secundaria y tubulopatías hereditarias.",
    internacional: "Brenner & Rector's The Kidney; literatura especializada sobre síndrome de Liddle."
  },
  bibliografia: "Brenner & Rector's The Kidney; Clinical Physiology of Acid-Base and Electrolyte Disorders."
},
{
  id: "NEF-099",
  especialidad: "Nefrología",
  tema: "Diabetes insípida",
  subtema: "Diferenciación entre formas central y nefrogénica",
  dificultad: "Muy alta",
  caso: `Varón de 51 años presenta poliuria de 7 litros diarios y polidipsia. El sodio sérico es de 151 mmol/L y la osmolaridad plasmática está elevada. La osmolaridad urinaria permanece baja pese a la hiperosmolaridad plasmática. Tras administrar desmopresina, la osmolaridad urinaria cambia mínimamente.`,
  pregunta: "¿Qué interpretación fisiológica es más probable?",
  opciones: [
    "Resistencia renal a la acción de vasopresina, compatible con diabetes insípida nefrogénica",
    "Deficiencia central completa de vasopresina con respuesta renal intacta",
    "SIADH con retención excesiva de agua",
    "Poliuria osmótica por glucosuria confirmada",
    "Acidosis tubular distal como causa directa obligatoria de la poliuria"
  ],
  respuestaCorrecta: 0,
  explicacion: `La diabetes insípida produce incapacidad para concentrar la orina, con poliuria y riesgo de hipernatremia cuando la ingesta de agua no compensa las pérdidas. Una respuesta mínima a desmopresina favorece resistencia renal a vasopresina, aunque la interpretación depende de la metodología, la función renal y el contexto clínico. Deben investigarse causas farmacológicas, alteraciones del calcio y potasio, enfermedades renales y formas hereditarias cuando corresponda.`,
  perlaENARM: "En la diabetes insípida, la ausencia de respuesta significativa a desmopresina orienta a una forma nefrogénica.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre diabetes insípida y trastornos del sodio.",
    internacional: "Harrison's Principles of Internal Medicine; literatura endocrinológica y nefrológica vigente sobre diabetes insípida."
  },
  bibliografia: "Harrison. Principios de Medicina Interna, 19.ª ed.; Clinical Physiology of Acid-Base and Electrolyte Disorders."
},
{
  id: "NEF-100",
  especialidad: "Nefrología",
  tema: "Trastornos ácido-base",
  subtema: "Compensación respiratoria en acidosis metabólica",
  dificultad: "Alta",
  caso: `Mujer de 45 años con diarrea intensa presenta pH arterial de 7.25, bicarbonato de 12 mmol/L y PaCO2 de 26 mmHg. El anión gap es normal. No hay datos de hipoxemia ni de fatiga respiratoria.`,
  pregunta: "Según la fórmula de Winter, ¿la compensación respiratoria es apropiada?",
  opciones: [
    "Sí; la PaCO2 esperada es aproximadamente 26 ± 2 mmHg",
    "No; la PaCO2 esperada es superior a 45 mmHg",
    "No; la PaCO2 esperada es exactamente 12 mmHg",
    "Sí; cualquier PaCO2 inferior a 40 mmHg demuestra compensación apropiada",
    "No es posible valorar compensación respiratoria en una acidosis metabólica"
  ],
  respuestaCorrecta: 0,
  explicacion: `La fórmula de Winter estima la PaCO2 esperada en acidosis metabólica: 1.5 × bicarbonato + 8 ± 2. Para un bicarbonato de 12 mmol/L, la PaCO2 esperada es 26 ± 2 mmHg. El valor medido de 26 mmHg es compatible con compensación respiratoria apropiada. Una PaCO2 por encima del intervalo sugeriría acidosis respiratoria concomitante; una inferior orientaría a alcalosis respiratoria agregada.`,
  perlaENARM: "Fórmula de Winter: PaCO2 esperada = 1.5 × HCO3− + 8 ± 2 mmHg.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre trastornos ácido-base y alteraciones electrolíticas.",
    internacional: "Clinical Physiology of Acid-Base and Electrolyte Disorders; Harrison's Principles of Internal Medicine."
  },
  bibliografia: "Clinical Physiology of Acid-Base and Electrolyte Disorders; Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed."
},

{
  id: "NEF-101",
  especialidad: "Nefrología",
  tema: "Trastornos ácido-base",
  subtema: "Acidosis metabólica con anión gap elevado",
  dificultad: "Media",
  caso: `Varón de 24 años con diabetes mellitus tipo 1 presenta vómitos, dolor abdominal y respiración profunda. La gasometría muestra pH 7.18, bicarbonato de 10 mmol/L y PaCO2 de 23 mmHg. El sodio es de 138 mmol/L, el cloro de 100 mmol/L y la glucosa de 420 mg/dL.`,
  pregunta: "¿Cuál es el anión gap sérico calculado sin incluir potasio?",
  opciones: [
    "10 mmol/L",
    "14 mmol/L",
    "18 mmol/L",
    "28 mmol/L",
    "38 mmol/L"
  ],
  respuestaCorrecta: 3,
  explicacion: `El anión gap se calcula como sodio − (cloro + bicarbonato): 138 − (100 + 10) = 28 mmol/L. Se encuentra elevado y, junto con hiperglucemia, acidosis metabólica y respiración profunda, es compatible con cetoacidosis diabética. La interpretación debe considerar la albúmina, ya que la hipoalbuminemia puede ocultar un anión gap elevado.`,
  perlaENARM: "Anión gap = Na − (Cl + HCO3). Un valor elevado orienta a acumulación de aniones no medidos.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre diagnóstico y tratamiento de cetoacidosis diabética.",
    internacional: "Harrison's Principles of Internal Medicine; consenso internacional vigente sobre crisis hiperglucémicas."
  },
  bibliografia: "Clinical Physiology of Acid-Base and Electrolyte Disorders; Harrison. Principios de Medicina Interna, 19.ª ed."
},
{
  id: "NEF-102",
  especialidad: "Nefrología",
  tema: "Trastornos ácido-base",
  subtema: "Acidosis metabólica mixta",
  dificultad: "Muy alta",
  caso: `Mujer de 67 años con sepsis presenta pH de 7.12, bicarbonato de 12 mmol/L y PaCO2 de 40 mmHg. El lactato está elevado y requiere soporte hemodinámico.`,
  pregunta: "¿Qué trastorno ácido-base adicional sugiere una PaCO2 de 40 mmHg en este contexto?",
  opciones: [
    "Compensación respiratoria apropiada",
    "Alcalosis respiratoria concomitante",
    "Acidosis respiratoria concomitante",
    "Alcalosis metabólica concomitante",
    "Ausencia de alteración ácido-base"
  ],
  respuestaCorrecta: 2,
  explicacion: `Con un bicarbonato de 12 mmol/L, la fórmula de Winter estima una PaCO2 esperada de 1.5 × 12 + 8 = 26 ± 2 mmHg. Una PaCO2 medida de 40 mmHg es muy superior a la esperada y sugiere acidosis respiratoria agregada, por ejemplo por fatiga ventilatoria o deterioro respiratorio. En pacientes críticos, reconocer trastornos mixtos puede cambiar la evaluación y la necesidad de soporte ventilatorio.`,
  perlaENARM: "Una PaCO2 superior a la esperada por la fórmula de Winter indica posible acidosis respiratoria concomitante.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre sepsis, insuficiencia respiratoria y trastornos ácido-base.",
    internacional: "Surviving Sepsis Campaign; literatura especializada sobre interpretación gasométrica."
  },
  bibliografia: "Clinical Physiology of Acid-Base and Electrolyte Disorders; Harrison. Principios de Medicina Interna, 19.ª ed."
},
{
  id: "NEF-103",
  especialidad: "Nefrología",
  tema: "Trastornos ácido-base",
  subtema: "Alcalosis metabólica sensible al cloro",
  dificultad: "Alta",
  caso: `Varón de 48 años presenta vómitos persistentes, debilidad y alcalosis metabólica. El potasio es de 2.8 mmol/L, el bicarbonato de 36 mmol/L y el cloro urinario de 8 mmol/L. Tiene hipotensión ortostática.`,
  pregunta: "¿Qué mecanismo explica mejor el patrón bioquímico?",
  opciones: [
    "Pérdida gástrica de ácido clorhídrico con contracción de volumen y mantenimiento renal de bicarbonato",
    "Exceso primario de mineralocorticoides con expansión del volumen extracelular",
    "Acidosis tubular renal distal",
    "Retención primaria de ácidos orgánicos",
    "Pérdida aislada de bicarbonato por diarrea"
  ],
  respuestaCorrecta: 0,
  explicacion: `Los vómitos provocan pérdida de ácido clorhídrico y cloro, favoreciendo alcalosis metabólica. La depleción de volumen y cloro limita la excreción renal de bicarbonato y mantiene el trastorno. Un cloro urinario bajo, típicamente menor de 20 mmol/L, apoya una alcalosis sensible al cloro. La corrección requiere tratar la causa y valorar reposición de cloro y potasio según el estado hemodinámico.`,
  perlaENARM: "En alcalosis metabólica, un cloro urinario bajo sugiere pérdida extrarrenal de cloro o depleción de volumen.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre trastornos hidroelectrolíticos.",
    internacional: "Clinical Physiology of Acid-Base and Electrolyte Disorders."
  },
  bibliografia: "Clinical Physiology of Acid-Base and Electrolyte Disorders; Harrison. Principios de Medicina Interna, 19.ª ed."
},
{
  id: "NEF-104",
  especialidad: "Nefrología",
  tema: "Alteraciones del potasio",
  subtema: "Hiperpotasemia y cambios electrocardiográficos",
  dificultad: "Alta",
  caso: `Mujer de 70 años con enfermedad renal crónica y tratamiento con espironolactona presenta debilidad. El potasio sérico es de 7.0 mmol/L y el electrocardiograma muestra ondas T picudas y ensanchamiento progresivo del QRS.`,
  pregunta: "¿Qué intervención debe priorizarse para reducir inmediatamente el riesgo de arritmia fatal?",
  opciones: [
    "Administrar calcio intravenoso para estabilizar la membrana miocárdica",
    "Administrar resina de intercambio como única intervención inmediata",
    "Indicar restricción dietética de potasio y reevaluar en 48 horas",
    "Administrar bicarbonato oral y dar seguimiento ambulatorio",
    "Suspender la espironolactona sin otra intervención"
  ],
  respuestaCorrecta: 0,
  explicacion: `La hiperpotasemia grave con cambios electrocardiográficos es una urgencia. El calcio intravenoso estabiliza la membrana miocárdica y reduce temporalmente el riesgo de arritmia, pero no disminuye el potasio sérico. Deben administrarse simultáneamente medidas para redistribuir el potasio al interior celular y eliminarlo del organismo, además de suspender factores contribuyentes. La necesidad de diálisis depende de la gravedad, la respuesta y la función renal.`,
  perlaENARM: "En hiperpotasemia con cambios electrocardiográficos, el calcio estabiliza el miocardio, pero no elimina potasio.",
  gpc: {
    mexico: "Consultar protocolo mexicano vigente de urgencias para hiperpotasemia grave.",
    internacional: "KDIGO Controversies Conference on Acute Hyperkalemia; guías vigentes de manejo de hiperpotasemia."
  },
  bibliografia: "Harrison. Principios de Medicina Interna, 19.ª ed.; Clinical Physiology of Acid-Base and Electrolyte Disorders."
},
{
  id: "NEF-105",
  especialidad: "Nefrología",
  tema: "Alteraciones del potasio",
  subtema: "Redistribución intracelular del potasio",
  dificultad: "Media",
  caso: `Varón de 28 años con cetoacidosis diabética presenta potasio sérico inicial de 5.5 mmol/L, pese a datos de depleción corporal total de potasio. Se inicia tratamiento hospitalario con insulina y líquidos.`,
  pregunta: "¿Qué explica que el potasio sérico pueda estar elevado al inicio a pesar de la depleción corporal total?",
  opciones: [
    "La acidosis y la deficiencia de insulina favorecen el desplazamiento extracelular de potasio, mientras persisten pérdidas corporales",
    "La cetoacidosis siempre aumenta las reservas corporales de potasio",
    "La insulina induce salida de potasio de las células",
    "La función renal nunca participa en la regulación del potasio durante una cetoacidosis",
    "La hiperglucemia impide toda pérdida urinaria de potasio"
  ],
  respuestaCorrecta: 0,
  explicacion: `En la cetoacidosis diabética, la deficiencia de insulina y los cambios osmóticos favorecen el desplazamiento de potasio al espacio extracelular. Al mismo tiempo, la diuresis osmótica y otras pérdidas pueden reducir marcadamente las reservas corporales. La insulina desplaza potasio al interior celular y puede precipitar hipopotasemia, por lo que el potasio debe medirse de forma seriada y corregirse según el protocolo clínico.`,
  perlaENARM: "Potasio sérico normal o elevado al ingreso no excluye déficit corporal total en cetoacidosis diabética.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre cetoacidosis diabética y reposición de potasio.",
    internacional: "Consenso internacional vigente sobre crisis hiperglucémicas en adultos."
  },
  bibliografia: "Harrison. Principios de Medicina Interna, 19.ª ed.; Clinical Physiology of Acid-Base and Electrolyte Disorders."
},
{
  id: "NEF-106",
  especialidad: "Nefrología",
  tema: "Alteraciones del magnesio",
  subtema: "Hipomagnesemia e hipopotasemia refractaria",
  dificultad: "Alta",
  caso: `Mujer de 52 años en tratamiento prolongado con diuréticos presenta potasio de 2.8 mmol/L y magnesio de 1.1 mg/dL. Se ha administrado potasio en varias ocasiones, pero la hipopotasemia reaparece. No hay pérdidas digestivas actuales.`,
  pregunta: "¿Qué explica mejor la dificultad para corregir de manera sostenida el potasio?",
  opciones: [
    "La hipomagnesemia favorece la pérdida renal de potasio y dificulta su corrección",
    "El magnesio bajo impide la filtración glomerular de potasio",
    "La hipomagnesemia causa siempre hiperpotasemia",
    "La reposición de magnesio aumenta obligatoriamente la pérdida digestiva de potasio",
    "El potasio sérico no se relaciona con la concentración de magnesio"
  ],
  respuestaCorrecta: 0,
  explicacion: `La hipomagnesemia favorece la secreción renal de potasio, en parte mediante cambios en canales de potasio del túbulo distal. Si solo se administra potasio, la pérdida puede persistir y la hipopotasemia resultar refractaria. Es importante identificar y corregir ambas alteraciones, además de revisar medicamentos y pérdidas activas. La velocidad y la vía de reposición dependen de la gravedad, síntomas, electrocardiograma y función renal.`,
  perlaENARM: "Ante hipopotasemia refractaria, busca y corrige hipomagnesemia concomitante.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre trastornos hidroelectrolíticos.",
    internacional: "Clinical Physiology of Acid-Base and Electrolyte Disorders."
  },
  bibliografia: "Clinical Physiology of Acid-Base and Electrolyte Disorders; Harrison. Principios de Medicina Interna, 19.ª ed."
},
{
  id: "NEF-107",
  especialidad: "Nefrología",
  tema: "Alteraciones del calcio",
  subtema: "Hipocalcemia y QT prolongado",
  dificultad: "Alta",
  caso: `Mujer de 43 años presenta parestesias periorales y espasmo carpopedal después de una cirugía cervical. El calcio ionizado está disminuido y el electrocardiograma muestra prolongación del intervalo QT.`,
  pregunta: "¿Qué mecanismo explica la prolongación del QT en esta paciente?",
  opciones: [
    "La hipocalcemia prolonga la fase de meseta del potencial de acción ventricular",
    "La hipocalcemia acorta de forma característica el potencial de acción ventricular",
    "La disminución del calcio produce exclusivamente bloqueo auriculoventricular completo",
    "El QT prolongado demuestra hiperpotasemia grave",
    "La hipocalcemia no tiene efectos sobre la repolarización cardíaca"
  ],
  respuestaCorrecta: 0,
  explicacion: `La hipocalcemia puede prolongar el intervalo QT, principalmente por prolongación de la fase de meseta del potencial de acción ventricular. Las manifestaciones neuromusculares incluyen parestesias, tetania y espasmo carpopedal. Después de cirugía cervical debe evaluarse hipoparatiroidismo, además de magnesio y otras causas. La presencia de síntomas importantes o alteraciones electrocardiográficas exige valoración urgente y tratamiento según gravedad.`,
  perlaENARM: "Hipocalcemia: tetania y QT prolongado; hiperpotasemia: ondas T picudas y, en casos graves, ensanchamiento del QRS.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre hipocalcemia y complicaciones de cirugía tiroidea.",
    internacional: "Harrison's Principles of Internal Medicine; guías vigentes de trastornos del calcio."
  },
  bibliografia: "Harrison. Principios de Medicina Interna, 19.ª ed.; Clinical Physiology of Acid-Base and Electrolyte Disorders."
},
{
  id: "NEF-108",
  especialidad: "Nefrología",
  tema: "Alteraciones del fósforo",
  subtema: "Hiperfosfatemia en enfermedad renal crónica",
  dificultad: "Media",
  caso: `Varón de 63 años con enfermedad renal crónica avanzada presenta fósforo sérico elevado, calcio bajo-normal y hormona paratiroidea elevada. No tiene síntomas agudos de hipocalcemia.`,
  pregunta: "¿Qué mecanismo contribuye al hiperparatiroidismo secundario en este contexto?",
  opciones: [
    "Retención de fósforo, menor disponibilidad de calcitriol y alteraciones del equilibrio calcio-fósforo",
    "Exceso sostenido de calcitriol como mecanismo universal",
    "Supresión permanente de la síntesis de PTH",
    "Aumento del filtrado glomerular y de la excreción de fósforo",
    "Pérdida urinaria masiva de calcio como causa única en todos los casos"
  ],
  respuestaCorrecta: 0,
  explicacion: `En la enfermedad renal crónica, la reducción de la excreción de fósforo y la disminución de la producción renal de calcitriol contribuyen a alteraciones del metabolismo mineral. Estas modificaciones, junto con los cambios en calcio y FGF23, favorecen hiperparatiroidismo secundario. La interpretación y el tratamiento deben basarse en tendencias seriadas de fósforo, calcio y PTH, además de la etapa de enfermedad renal y el contexto clínico.`,
  perlaENARM: "La enfermedad renal crónica altera el eje fósforo–FGF23–calcitriol–PTH y favorece hiperparatiroidismo secundario.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre trastorno mineral óseo asociado a enfermedad renal crónica.",
    internacional: "KDIGO CKD-MBD Guideline, actualización vigente."
  },
  bibliografia: "Brenner & Rector's The Kidney; KDIGO CKD-MBD; Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed."
},
{
  id: "NEF-109",
  especialidad: "Nefrología",
  tema: "Alteraciones del sodio",
  subtema: "Hipernatremia por pérdida de agua",
  dificultad: "Alta",
  caso: `Varón de 76 años con deterioro cognitivo presenta somnolencia, sodio de 160 mmol/L y mucosas secas. Tiene poliuria y una osmolaridad urinaria de 120 mOsm/kg. La glucosa no está suficientemente elevada para explicar la diuresis osmótica.`,
  pregunta: "¿Qué mecanismo debe investigarse de manera prioritaria?",
  opciones: [
    "Diabetes insípida u otro defecto de concentración urinaria",
    "SIADH con retención excesiva de agua",
    "Exceso aislado de ingesta de agua libre",
    "Pérdida digestiva de bicarbonato como explicación completa",
    "Glomerulonefritis membranosa"
  ],
  respuestaCorrecta: 0,
  explicacion: `La hipernatremia refleja un déficit relativo de agua respecto al sodio corporal. Una osmolaridad urinaria muy baja pese a hipernatremia e hiperosmolaridad plasmática indica una respuesta renal de concentración inadecuada y obliga a investigar diabetes insípida, además de otras causas de poliuria. La valoración inicial debe incluir estado hemodinámico, duración probable, pérdidas en curso y capacidad para acceder al agua. La corrección debe ser monitorizada y adaptada al contexto.`,
  perlaENARM: "Hipernatremia con orina inapropiadamente diluida sugiere alteración de la acción o secreción de vasopresina.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre hipernatremia y trastornos de la concentración urinaria.",
    internacional: "European Clinical Practice Guideline on Hyponatraemia; literatura especializada sobre hipernatremia y diabetes insípida."
  },
  bibliografia: "Clinical Physiology of Acid-Base and Electrolyte Disorders; Harrison. Principios de Medicina Interna, 19.ª ed."
},
{
  id: "NEF-110",
  especialidad: "Nefrología",
  tema: "Trastornos ácido-base",
  subtema: "Anión gap corregido por albúmina",
  dificultad: "Muy alta",
  caso: `Paciente de 70 años con sepsis presenta sodio de 140 mmol/L, cloro de 108 mmol/L, bicarbonato de 16 mmol/L y albúmina de 1.5 g/dL. El anión gap calculado sin potasio es de 16 mmol/L.`,
  pregunta: "¿Por qué puede subestimarse la acumulación de aniones no medidos en este paciente?",
  opciones: [
    "La hipoalbuminemia disminuye el anión gap basal y puede ocultar una elevación clínicamente relevante",
    "La albúmina no contribuye a la carga de aniones plasmáticos",
    "La hipoalbuminemia eleva siempre el anión gap medido",
    "El anión gap solo puede calcularse si se incluye potasio",
    "El bicarbonato bajo excluye la presencia de aniones no medidos"
  ],
  respuestaCorrecta: 0,
  explicacion: `La albúmina es uno de los principales aniones no medidos del plasma. Cuando está disminuida, el anión gap esperado también baja y una cifra aparentemente normal o discretamente elevada puede ocultar una acidosis con anión gap elevado. Una corrección aproximada utilizada es sumar cerca de 2.5 mmol/L al anión gap por cada descenso de 1 g/dL de albúmina respecto de 4 g/dL, considerando el método del laboratorio y el contexto clínico.`,
  perlaENARM: "En hipoalbuminemia, interpreta el anión gap corregido: la albúmina baja puede enmascarar acidosis por aniones no medidos.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre interpretación de gasometría en pacientes críticos.",
    internacional: "Clinical Physiology of Acid-Base and Electrolyte Disorders."
  },
  bibliografia: "Clinical Physiology of Acid-Base and Electrolyte Disorders; Harrison. Principios de Medicina Interna, 19.ª ed."
},
{
  id: "NEF-111",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda",
  subtema: "Interpretación de urea y creatinina",
  dificultad: "Media",
  caso: `Varón de 65 años con hemorragia digestiva alta presenta elevación de urea desproporcionada respecto a la creatinina. Está hemodinámicamente estable después de la reanimación inicial y no tiene antecedentes de enfermedad renal avanzada.`,
  pregunta: "¿Qué mecanismo puede contribuir a la elevación desproporcionada de urea?",
  opciones: [
    "Mayor generación de urea por digestión de sangre y aumento de reabsorción tubular en estados de bajo volumen efectivo",
    "Disminución obligatoria de la producción hepática de urea",
    "Ausencia completa de filtración glomerular",
    "Producción exclusiva de creatinina por el hígado",
    "Pérdida urinaria selectiva de urea como mecanismo principal"
  ],
  respuestaCorrecta: 0,
  explicacion: `La digestión de sangre en el tubo digestivo aumenta la carga nitrogenada y la generación de urea. Además, los estados de bajo volumen efectivo pueden incrementar la reabsorción tubular de urea. Por ello, una relación urea/creatinina elevada puede aparecer en hemorragia digestiva alta y en estados prerrenales, pero no es específica y debe interpretarse junto con la hemodinámica, el sedimento y la evolución de la función renal.`,
  perlaENARM: "Una urea desproporcionadamente elevada puede aparecer en hemorragia digestiva alta y azotemia prerrenal.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre hemorragia digestiva alta y lesión renal aguda.",
    internacional: "KDIGO Clinical Practice Guideline for Acute Kidney Injury; Harrison's Principles of Internal Medicine."
  },
  bibliografia: "Harrison. Principios de Medicina Interna, 19.ª ed.; Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed."
},
{
  id: "NEF-112",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda",
  subtema: "Limitaciones de la fracción excretada de sodio",
  dificultad: "Alta",
  caso: `Paciente hospitalizado con sepsis y lesión renal aguda presenta una fracción excretada de sodio de 0.5%. El sedimento muestra cilindros granulares y la creatinina continúa aumentando pese a la estabilización hemodinámica.`,
  pregunta: "¿Qué interpretación es más adecuada de la fracción excretada de sodio en este escenario?",
  opciones: [
    "Un valor menor de 1% demuestra siempre azotemia prerrenal sin lesión tubular",
    "La fracción excretada de sodio puede ser baja en ciertos contextos de lesión tubular o sepsis y no debe interpretarse aisladamente",
    "Los cilindros granulares excluyen cualquier lesión tubular",
    "La fracción excretada de sodio sustituye la evaluación del sedimento y la evolución clínica",
    "Una fracción excretada baja descarta lesión renal aguda"
  ],
  respuestaCorrecta: 1,
  explicacion: `La fracción excretada de sodio puede apoyar la diferenciación entre causas prerrenales y lesión tubular, pero tiene limitaciones importantes. En sepsis, uso reciente de diuréticos, enfermedad renal crónica y fases tempranas de lesión tubular, su rendimiento puede ser insuficiente. Los cilindros granulares y la evolución de creatinina aportan evidencia adicional, por lo que la clasificación debe integrar todos los datos clínicos y analíticos.`,
  perlaENARM: "La FENa no es una prueba definitiva: interpreta el resultado según sepsis, diuréticos, enfermedad renal crónica y sedimento.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre lesión renal aguda en el paciente hospitalizado.",
    internacional: "KDIGO Clinical Practice Guideline for Acute Kidney Injury."
  },
  bibliografia: "KDIGO Acute Kidney Injury; Harrison. Principios de Medicina Interna, 19.ª ed.; Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed."
},
{
  id: "NEF-113",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda",
  subtema: "Lesión tubular por pigmentos",
  dificultad: "Alta",
  caso: `Varón de 32 años presenta dolor muscular intenso y orina oscura después de ejercicio extenuante. La creatina cinasa está marcadamente elevada, la tira reactiva es positiva para sangre y la microscopía muestra escasos eritrocitos. La creatinina aumenta en las siguientes 24 horas.`,
  pregunta: "¿Qué mecanismo explica mejor el daño renal asociado a este cuadro?",
  opciones: [
    "Lesión tubular por mioglobina, con toxicidad oxidativa, vasoconstricción y formación de cilindros",
    "Obstrucción ureteral por cristales de cistina como causa obligatoria",
    "Depósito de complejos inmunes mesangiales",
    "Pérdida renal aislada de albúmina",
    "Hemólisis intravascular como única explicación de la creatina cinasa elevada"
  ],
  respuestaCorrecta: 0,
  explicacion: `La rabdomiólisis libera mioglobina, que puede contribuir a lesión renal por toxicidad tubular, vasoconstricción y formación de cilindros pigmentarios, especialmente en condiciones de hipovolemia o aciduria. Una tira reactiva positiva para sangre con pocos eritrocitos en la microscopía sugiere pigmento como mioglobina o hemoglobina. La evaluación incluye función renal, electrolitos, creatina cinasa y vigilancia de complicaciones metabólicas.`,
  perlaENARM: "Tira positiva para sangre con pocos eritrocitos y creatina cinasa elevada orienta a mioglobinuria por rabdomiólisis.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre rabdomiólisis y lesión renal aguda.",
    internacional: "KDIGO Clinical Practice Guideline for Acute Kidney Injury; revisiones actuales sobre rabdomiólisis."
  },
  bibliografia: "Harrison. Principios de Medicina Interna, 19.ª ed.; Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed."
},
{
  id: "NEF-114",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda",
  subtema: "Obstrucción urinaria y ecografía",
  dificultad: "Alta",
  caso: `Varón de 74 años con cáncer pélvico presenta oliguria y elevación de creatinina. La ecografía inicial no muestra hidronefrosis significativa, pero persiste la sospecha clínica de obstrucción bilateral por deterioro progresivo y síntomas urinarios.`,
  pregunta: "¿Qué afirmación sobre la ecografía es correcta?",
  opciones: [
    "Una ecografía sin hidronefrosis excluye siempre la obstrucción urinaria",
    "La obstrucción temprana o en determinadas condiciones puede no producir dilatación evidente, por lo que debe reevaluarse si la sospecha persiste",
    "La ecografía no aporta información sobre el tracto urinario",
    "La ausencia de hidronefrosis confirma lesión glomerular",
    "La obstrucción bilateral no puede causar lesión renal aguda"
  ],
  respuestaCorrecta: 1,
  explicacion: `La ecografía es una herramienta inicial útil para detectar dilatación del sistema colector, pero su sensibilidad no es absoluta. La obstrucción puede no generar hidronefrosis evidente en fases tempranas o en determinados contextos clínicos. Si la sospecha persiste, deben considerarse reevaluación por imagen y valoración urológica según el escenario, especialmente cuando existe deterioro progresivo o riesgo de obstrucción bilateral.`,
  perlaENARM: "Una ecografía sin hidronefrosis no descarta absolutamente obstrucción si la sospecha clínica continúa elevada.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre lesión renal aguda y uropatía obstructiva.",
    internacional: "KDIGO Clinical Practice Guideline for Acute Kidney Injury; literatura urológica sobre obstrucción urinaria."
  },
  bibliografia: "KDIGO Acute Kidney Injury; Harrison. Principios de Medicina Interna, 19.ª ed."
},
{
  id: "NEF-115",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Interpretación del filtrado glomerular estimado",
  dificultad: "Media",
  caso: `Mujer de 81 años, con baja masa muscular, presenta creatinina sérica de 0.8 mg/dL. El filtrado glomerular estimado por creatinina parece relativamente conservado, pero existe fragilidad importante y pérdida de peso.`,
  pregunta: "¿Qué limitación de la creatinina debe considerarse al estimar la función renal?",
  opciones: [
    "La creatinina puede sobreestimar el filtrado en personas con masa muscular reducida",
    "La creatinina siempre refleja con exactitud el filtrado glomerular, independientemente de la edad",
    "La creatinina no se elimina por vía renal",
    "La baja masa muscular eleva siempre la creatinina sérica",
    "La creatinina no puede utilizarse en ninguna ecuación de filtrado"
  ],
  respuestaCorrecta: 0,
  explicacion: `La creatinina deriva en gran medida del metabolismo muscular. En personas con sarcopenia, fragilidad o amputaciones, su producción puede estar reducida y el filtrado estimado basado en creatinina puede sobreestimar la función renal. Cuando la precisión es clínicamente importante, puede considerarse cistatina C o una ecuación combinada, interpretando posibles factores no renales que alteran cada biomarcador.`,
  perlaENARM: "La sarcopenia puede ocultar una reducción real del filtrado cuando se utiliza creatinina aislada.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre evaluación de función renal en adultos mayores.",
    internacional: "KDIGO Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease."
  },
  bibliografia: "KDIGO CKD; Harrison. Principios de Medicina Interna, 19.ª ed.; Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed."
},
{
  id: "NEF-116",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Cistatina C y estimación del filtrado",
  dificultad: "Alta",
  caso: `Varón de 69 años con amputación bilateral parcial de miembros inferiores tiene creatinina sérica de 0.9 mg/dL. El resultado es discordante con otros datos clínicos que sugieren enfermedad renal. No hay una medición previa confiable de su filtrado.`,
  pregunta: "¿Qué prueba puede mejorar la estimación de la función renal en este contexto?",
  opciones: [
    "Cistatina C, idealmente combinada con creatinina cuando sea apropiado",
    "Urea aislada como marcador exacto de filtrado",
    "Proteína C reactiva como sustituto universal del filtrado",
    "Albúmina sérica como medición directa de la filtración",
    "Sodio urinario aislado como equivalente del filtrado glomerular"
  ],
  respuestaCorrecta: 0,
  explicacion: `La producción de creatinina puede disminuir cuando existe pérdida importante de masa muscular, lo que limita la precisión de las ecuaciones basadas solo en creatinina. La cistatina C puede mejorar la estimación en determinados contextos y la ecuación combinada creatinina-cistatina C suele ofrecer mayor precisión que un solo marcador en muchas poblaciones. Sin embargo, la cistatina C también puede alterarse por factores no relacionados con el filtrado, como inflamación, trastornos tiroideos y glucocorticoides.`,
  perlaENARM: "Cuando la creatinina no es fiable por masa muscular atípica, considera cistatina C o ecuación combinada.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre evaluación de enfermedad renal crónica.",
    internacional: "KDIGO Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease."
  },
  bibliografia: "KDIGO CKD; Harrison. Principios de Medicina Interna, 19.ª ed."
},
{
  id: "NEF-117",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Albuminuria y riesgo renal",
  dificultad: "Alta",
  caso: `Mujer de 55 años con diabetes mellitus tipo 2 tiene filtrado glomerular estimado de 92 mL/min/1.73 m² y cociente albúmina/creatinina urinario persistentemente elevado en dos muestras separadas por varios meses. No presenta síntomas urinarios.`,
  pregunta: "¿Cuál es la interpretación correcta de estos resultados?",
  opciones: [
    "La albuminuria persistente puede indicar enfermedad renal crónica aun con filtrado conservado",
    "Un filtrado mayor de 90 excluye cualquier daño renal",
    "La albuminuria solo es relevante cuando existe hematuria macroscópica",
    "La ausencia de síntomas descarta enfermedad renal",
    "El cociente albúmina/creatinina no aporta información pronóstica"
  ],
  respuestaCorrecta: 0,
  explicacion: `La enfermedad renal crónica puede diagnosticarse por marcadores persistentes de daño renal, como albuminuria, aun cuando el filtrado glomerular sea normal o alto. El cociente albúmina/creatinina ayuda a cuantificar la albuminuria y aporta información pronóstica renal y cardiovascular. Deben considerarse causas transitorias de elevación, como ejercicio intenso, fiebre o infección urinaria, y confirmar persistencia en el contexto clínico apropiado.`,
  perlaENARM: "Un filtrado conservado no excluye ERC si existe albuminuria persistente durante al menos tres meses.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre enfermedad renal diabética y enfermedad renal crónica.",
    internacional: "KDIGO Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease."
  },
  bibliografia: "KDIGO CKD; Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed."
},
{
  id: "NEF-118",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Descenso inicial del filtrado con IECA o ARA-II",
  dificultad: "Alta",
  caso: `Varón de 60 años con diabetes, hipertensión y albuminuria inicia un inhibidor de la enzima convertidora de angiotensina. Dos semanas después, la creatinina aumenta 18% respecto al basal, el potasio permanece normal y la presión arterial mejora. No tiene hipotensión ni signos de depleción de volumen.`,
  pregunta: "¿Qué interpretación es más consistente con la respuesta hemodinámica esperada?",
  opciones: [
    "El aumento moderado de creatinina puede reflejar reducción de presión intraglomerular y no obliga por sí solo a suspender el fármaco",
    "Cualquier incremento de creatinina demuestra nefritis intersticial medicamentosa",
    "El fármaco siempre causa necrosis tubular aguda",
    "El incremento demuestra que la albuminuria inicial era un error",
    "La respuesta confirma obstrucción urinaria bilateral"
  ],
  respuestaCorrecta: 0,
  explicacion: `Los IECA y ARA-II dilatan la arteriola eferente y reducen la presión intraglomerular, lo que puede ocasionar un descenso inicial del filtrado y un aumento moderado de creatinina. La respuesta debe monitorizarse, incluyendo presión arterial, creatinina y potasio. Un aumento superior al umbral aceptado por la guía aplicable, o la presencia de hipotensión, hipovolemia, hiperpotasemia u otra causa de lesión renal, exige reevaluación y búsqueda de factores reversibles.`,
  perlaENARM: "Un aumento inicial moderado de creatinina tras bloqueo del sistema renina-angiotensina puede ser hemodinámico; evalúa magnitud y contexto.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre hipertensión, diabetes y enfermedad renal crónica.",
    internacional: "KDIGO Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease."
  },
  bibliografia: "KDIGO CKD; Harrison. Principios de Medicina Interna, 19.ª ed."
},
{
  id: "NEF-119",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Inhibidores de SGLT2 y respuesta hemodinámica inicial",
  dificultad: "Muy alta",
  caso: `Mujer de 63 años con diabetes mellitus tipo 2, filtrado glomerular de 48 mL/min/1.73 m² y albuminuria inicia un inhibidor de SGLT2. En las primeras semanas presenta un descenso moderado del filtrado estimado, sin hipotensión, deshidratación ni síntomas nuevos.`,
  pregunta: "¿Qué mecanismo puede explicar el descenso inicial del filtrado?",
  opciones: [
    "Restauración parcial de la retroalimentación tubuloglomerular con reducción de la presión intraglomerular",
    "Obstrucción bilateral de los uréteres inducida de forma directa por el fármaco",
    "Necrosis cortical renal obligatoria",
    "Pérdida irreversible de todos los podocitos en las primeras dosis",
    "Aumento sostenido de la presión intraglomerular como efecto principal"
  ],
  respuestaCorrecta: 0,
  explicacion: `Los inhibidores de SGLT2 reducen la reabsorción proximal de sodio y glucosa y modifican la señalización tubuloglomerular, lo que puede reducir la presión intraglomerular y producir un descenso hemodinámico inicial del filtrado. En pacientes apropiadamente seleccionados, este efecto puede coexistir con protección renal a largo plazo. Si el descenso es mayor de lo esperado o existen síntomas de hipovolemia, debe investigarse enfermedad intercurrente, uso de diuréticos y otros factores de lesión renal.`,
  perlaENARM: "El descenso inicial moderado del filtrado con iSGLT2 puede ser hemodinámico; no equivale automáticamente a lesión renal estructural.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre diabetes y enfermedad renal crónica.",
    internacional: "KDIGO Clinical Practice Guideline for Diabetes Management in Chronic Kidney Disease, actualización vigente."
  },
  bibliografia: "KDIGO Diabetes Management in CKD; literatura nefrológica sobre inhibidores de SGLT2 y protección renal."
},
{
  id: "NEF-120",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Criterios clínicos para inicio de terapia de reemplazo renal",
  dificultad: "Muy alta",
  caso: `Varón de 72 años con enfermedad renal crónica avanzada presenta filtrado glomerular de 8 mL/min/1.73 m². Tiene anorexia persistente, náuseas, pérdida de peso y prurito intenso pese al manejo médico. La hiperpotasemia está controlada, no hay edema pulmonar y la acidosis es leve.`,
  pregunta: "¿Qué principio debe guiar la decisión sobre iniciar terapia de reemplazo renal?",
  opciones: [
    "Esperar obligatoriamente a que el filtrado sea inferior a 5 mL/min/1.73 m²",
    "Integrar síntomas atribuibles a uremia, complicaciones, calidad de vida, preferencias y posibilidad de manejo conservador",
    "Iniciar diálisis automáticamente cuando la creatinina supera cualquier valor fijo",
    "Descartar diálisis porque no existe edema pulmonar",
    "Indicar diálisis únicamente si aparece hiperpotasemia refractaria"
  ],
  respuestaCorrecta: 1,
  explicacion: `El inicio de terapia de reemplazo renal no debe basarse exclusivamente en un valor aislado de filtrado glomerular. Se consideran síntomas urémicos, complicaciones metabólicas o de volumen refractarias, estado nutricional, evolución funcional, preferencias del paciente y alternativas de tratamiento. Los síntomas deben atribuirse razonablemente a la enfermedad renal y evaluarse causas reversibles. La planificación anticipada permite discutir modalidades y objetivos de atención antes de una urgencia.`,
  perlaENARM: "La diálisis se inicia por indicaciones clínicas y complicaciones, no por una cifra aislada de creatinina o filtrado.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre inicio de terapia de reemplazo renal en enfermedad renal crónica.",
    internacional: "KDIGO Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease."
  },
  bibliografia: "KDIGO CKD; Harrison. Principios de Medicina Interna, 19.ª ed.; Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed."
},

{
  id: "NEF-121",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Anemia por deficiencia relativa de eritropoyetina",
  dificultad: "Media",
  caso: `Varón de 64 años con enfermedad renal crónica G4 presenta fatiga y disnea de esfuerzo. La hemoglobina es de 9.4 g/dL, el volumen corpuscular medio es normal, la ferritina es de 180 ng/mL y la saturación de transferrina de 27%. No hay evidencia de hemorragia activa.`,
  pregunta: "¿Qué mecanismo contribuye de manera importante a la anemia en este paciente?",
  opciones: [
    "Deficiencia absoluta de vitamina B12 como mecanismo universal",
    "Producción renal insuficiente de eritropoyetina y alteraciones de la eritropoyesis",
    "Hemólisis intravascular obligatoria en toda enfermedad renal crónica",
    "Aumento sostenido de la vida media eritrocitaria",
    "Exceso de absorción intestinal de hierro"
  ],
  respuestaCorrecta: 1,
  explicacion: `La enfermedad renal crónica puede reducir la producción renal de eritropoyetina y producir un estado inflamatorio que altera la disponibilidad de hierro y la respuesta eritropoyética. La anemia suele ser normocítica, pero no debe atribuirse automáticamente a la ERC sin evaluar pérdidas sanguíneas, deficiencia de hierro, vitamina B12, folato y otras causas según el contexto. La ferritina debe interpretarse junto con la saturación de transferrina porque también es un reactante de fase aguda.`,
  perlaENARM: "La anemia de la ERC suele ser normocítica y multifactorial; la deficiencia relativa de eritropoyetina es un mecanismo central.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre anemia en enfermedad renal crónica.",
    internacional: "KDIGO Clinical Practice Guideline for Anemia in Chronic Kidney Disease, versión vigente."
  },
  bibliografia: "Brenner & Rector's The Kidney; KDIGO Anemia in CKD; Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed."
},
{
  id: "NEF-122",
  especialidad: "Nefrología",
  tema: "Anemia en enfermedad renal crónica",
  subtema: "Interpretación de ferritina y saturación de transferrina",
  dificultad: "Alta",
  caso: `Mujer de 70 años con ERC G4 presenta hemoglobina de 8.9 g/dL, ferritina de 95 ng/mL y saturación de transferrina de 14%. No tiene sangrado evidente y la proteína C reactiva está discretamente elevada.`,
  pregunta: "¿Qué interpretación de los estudios de hierro es la más adecuada?",
  opciones: [
    "La saturación de transferrina baja sugiere disponibilidad insuficiente de hierro para la eritropoyesis y amerita valorar reposición según el contexto",
    "La ferritina excluye cualquier deficiencia de hierro porque supera 50 ng/mL",
    "La proteína C reactiva elevada demuestra hemólisis",
    "La saturación de transferrina no tiene utilidad en ERC",
    "La hemoglobina baja confirma por sí sola indicación de transfusión"
  ],
  respuestaCorrecta: 0,
  explicacion: `En la ERC, la evaluación del hierro integra ferritina, saturación de transferrina, hemoglobina, inflamación y contexto clínico. Una saturación baja puede indicar hierro insuficientemente disponible para la eritropoyesis; la ferritina puede elevarse por inflamación y no siempre refleja adecuadamente las reservas utilizables. La decisión de hierro oral o intravenoso depende de los valores, la tolerancia, la respuesta previa, la modalidad de tratamiento y las recomendaciones vigentes.`,
  perlaENARM: "La ferritina puede aumentar por inflamación; interpreta siempre el estado del hierro junto con la saturación de transferrina.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre evaluación y tratamiento de anemia en ERC.",
    internacional: "KDIGO Anemia in CKD, versión vigente."
  },
  bibliografia: "KDIGO Anemia in CKD; Brenner & Rector's The Kidney."
},
{
  id: "NEF-123",
  especialidad: "Nefrología",
  tema: "Anemia en enfermedad renal crónica",
  subtema: "Tratamiento con agentes estimulantes de la eritropoyesis",
  dificultad: "Muy alta",
  caso: `Varón de 67 años con ERC G5, hemoglobina de 8.7 g/dL y síntomas de fatiga persistente. No tiene deficiencia de hierro identificada ni hemorragia activa. Presenta hipertensión arterial no controlada y antecedente de evento vascular cerebral.`,
  pregunta: "¿Qué consideración es fundamental antes de iniciar un agente estimulante de la eritropoyesis?",
  opciones: [
    "Iniciarlo sin valorar la presión arterial porque no modifica el riesgo cardiovascular",
    "Corregir o controlar factores reversibles y valorar cuidadosamente el balance entre beneficio hematológico y riesgo cardiovascular",
    "Elevar obligatoriamente la hemoglobina hasta valores normales de adultos sanos",
    "Suspender toda evaluación de hierro una vez iniciado el tratamiento",
    "Indicar transfusión crónica a todos los pacientes con ERC G5"
  ],
  respuestaCorrecta: 1,
  explicacion: `Los agentes estimulantes de la eritropoyesis pueden reducir la necesidad de transfusiones en pacientes seleccionados, pero se asocian con riesgos como hipertensión y eventos tromboembólicos o cardiovasculares, especialmente cuando se persiguen objetivos de hemoglobina demasiado elevados. Deben corregirse causas reversibles de anemia y valorar síntomas, riesgo cardiovascular, posibilidad de trasplante y preferencias del paciente. La hipertensión no controlada requiere atención antes de iniciar o intensificar este tratamiento.`,
  perlaENARM: "Los agentes estimulantes de la eritropoyesis no deben utilizarse para normalizar indiscriminadamente la hemoglobina.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre anemia en ERC y uso de agentes estimulantes de la eritropoyesis.",
    internacional: "KDIGO Anemia in CKD, versión vigente."
  },
  bibliografia: "KDIGO Anemia in CKD; Brenner & Rector's The Kidney."
},
{
  id: "NEF-124",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Trastorno mineral óseo y vitamina D activa",
  dificultad: "Alta",
  caso: `Mujer de 61 años con ERC G4 presenta PTH elevada de forma persistente, fósforo en límite alto y calcio normal-bajo. La concentración de calcitriol está disminuida. No tiene hipocalcemia sintomática.`,
  pregunta: "¿Qué mecanismo contribuye al aumento de PTH en este contexto?",
  opciones: [
    "Disminución de la producción renal de calcitriol, retención de fósforo y cambios en la regulación del calcio",
    "Aumento obligatorio de calcitriol en toda ERC avanzada",
    "Supresión completa de la síntesis de PTH por hiperfosfatemia",
    "Aumento del filtrado glomerular con eliminación excesiva de fósforo",
    "Ausencia de relación fisiológica entre vitamina D activa y PTH"
  ],
  respuestaCorrecta: 0,
  explicacion: `La disminución de masa renal funcional reduce la producción de calcitriol y dificulta la excreción de fósforo. Estos cambios, junto con las alteraciones del calcio y FGF23, favorecen hiperparatiroidismo secundario. El tratamiento debe considerar tendencias seriadas de calcio, fósforo y PTH, además de la etapa de ERC, la dieta y los medicamentos. No se recomienda asumir que toda elevación aislada de PTH requiere calcitriol inmediato.`,
  perlaENARM: "La reducción de calcitriol y la retención de fósforo contribuyen al hiperparatiroidismo secundario de la ERC.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre trastorno mineral óseo asociado a ERC.",
    internacional: "KDIGO CKD-MBD Guideline, versión vigente."
  },
  bibliografia: "Brenner & Rector's The Kidney; KDIGO CKD-MBD."
},
{
  id: "NEF-125",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Quelantes de fósforo",
  dificultad: "Media",
  caso: `Varón de 58 años en hemodiálisis presenta fósforo persistentemente elevado pese a educación dietética. Tiene calcio sérico en límite alto y antecedente de calcificación vascular.`,
  pregunta: "¿Qué consideración orienta la selección de un quelante de fósforo?",
  opciones: [
    "Seleccionarlo según calcio sérico, carga de calcio, tolerancia, interacciones y tendencia del fósforo",
    "Usar siempre un quelante cálcico independientemente del calcio sérico",
    "Suspender toda evaluación de fósforo una vez iniciado el quelante",
    "Elegir el fármaco exclusivamente por el nivel de PTH, sin revisar calcio",
    "Indicar suplementos de calcio a dosis altas como primera opción universal"
  ],
  respuestaCorrecta: 0,
  explicacion: `La selección de quelantes debe individualizarse. Los quelantes que contienen calcio pueden aumentar la carga de calcio y no son ideales para todos los pacientes, especialmente si existe hipercalcemia o calcificación vascular relevante. Los quelantes no cálcicos son alternativas según disponibilidad, tolerancia, coste y perfil clínico. El manejo debe integrar dieta, adecuación de diálisis y seguimiento seriado de fósforo, calcio y PTH.`,
  perlaENARM: "El quelante de fósforo se elige considerando calcio, calcificación vascular y perfil global, no solo el fósforo aislado.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre trastorno mineral óseo en ERC.",
    internacional: "KDIGO CKD-MBD Guideline, versión vigente."
  },
  bibliografia: "KDIGO CKD-MBD; Brenner & Rector's The Kidney."
},
{
  id: "NEF-126",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Acidosis metabólica crónica",
  dificultad: "Alta",
  caso: `Mujer de 64 años con ERC G4 presenta bicarbonato sérico persistentemente bajo en mediciones repetidas. No tiene diarrea ni cetoacidosis. La gasometría confirma acidosis metabólica con anión gap normal.`,
  pregunta: "¿Qué efecto puede tener la acidosis metabólica crónica sobre el organismo?",
  opciones: [
    "Contribuir a catabolismo muscular, alteraciones óseas y progresión de complicaciones de la ERC",
    "Proteger siempre la masa muscular y la mineralización ósea",
    "Eliminar la necesidad de monitorizar el potasio",
    "Aumentar de forma obligatoria la síntesis renal de eritropoyetina",
    "Impedir toda progresión de enfermedad renal"
  ],
  respuestaCorrecta: 0,
  explicacion: `La acidosis metabólica crónica en ERC puede contribuir a catabolismo proteico, alteraciones del metabolismo óseo y efectos adversos sobre el estado nutricional. Debe confirmarse que la disminución del bicarbonato sea persistente y evaluarse la causa, el potasio, el volumen y la presión arterial. La decisión de administrar bicarbonato u otra intervención depende de la gravedad, la tolerancia, las comorbilidades y las recomendaciones actuales; debe evitarse la sobrecarga de sodio en pacientes susceptibles.`,
  perlaENARM: "La acidosis metabólica crónica en ERC se asocia con efectos musculares y óseos; el tratamiento debe individualizarse.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre acidosis metabólica en ERC.",
    internacional: "KDIGO CKD Guideline, versión vigente; Clinical Physiology of Acid-Base and Electrolyte Disorders."
  },
  bibliografia: "Brenner & Rector's The Kidney; KDIGO CKD."
},
{
  id: "NEF-127",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Hiperpotasemia recurrente y tratamiento nefroprotector",
  dificultad: "Muy alta",
  caso: `Varón de 66 años con ERC G3b, insuficiencia cardiaca y albuminuria recibe un ARA-II. Presenta hiperpotasemia recurrente moderada sin cambios electrocardiográficos. No consume suplementos de potasio, pero utiliza un antiinflamatorio no esteroideo con frecuencia.`,
  pregunta: "¿Qué estrategia puede preservar el beneficio del bloqueo del sistema renina-angiotensina cuando sea clínicamente posible?",
  opciones: [
    "Suspender de forma permanente el ARA-II sin evaluar causas reversibles",
    "Revisar y retirar factores contribuyentes, optimizar dieta y diuréticos cuando estén indicados y considerar un quelante de potasio según el caso",
    "Ignorar la hiperpotasemia porque el ARA-II protege el riñón",
    "Añadir suplementos de potasio para estabilizar el potencial de membrana",
    "Sustituir todos los medicamentos por antiinflamatorios no esteroideos"
  ],
  respuestaCorrecta: 1,
  explicacion: `Los bloqueadores del sistema renina-angiotensina pueden aportar beneficios renales y cardiovasculares, pero aumentan el riesgo de hiperpotasemia. Antes de suspenderlos de forma definitiva, deben revisarse fármacos contribuyentes como los AINE, dieta, acidosis, estreñimiento y estado de volumen. Según la situación pueden utilizarse diuréticos o quelantes de potasio y realizar monitorización estrecha. La hiperpotasemia grave o con cambios electrocardiográficos requiere tratamiento urgente.`,
  perlaENARM: "En hiperpotasemia recurrente, busca causas reversibles y valora estrategias para conservar tratamientos nefroprotectores cuando sea seguro.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre hiperpotasemia, insuficiencia cardiaca y ERC.",
    internacional: "KDIGO CKD Guideline; KDIGO guidance on potassium management."
  },
  bibliografia: "KDIGO CKD; Clinical Physiology of Acid-Base and Electrolyte Disorders."
},
{
  id: "NEF-128",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Inhibidores de SGLT2 y seguridad clínica",
  dificultad: "Alta",
  caso: `Mujer de 59 años con diabetes tipo 2 y ERC recibe un inhibidor de SGLT2. Durante una enfermedad aguda presenta vómitos, ingesta mínima y deshidratación. La glucemia es de 170 mg/dL, pero refiere náuseas y dolor abdominal.`,
  pregunta: "¿Qué complicación debe considerarse aun cuando la glucemia no sea marcadamente elevada?",
  opciones: [
    "Cetoacidosis diabética euglucémica asociada al inhibidor de SGLT2",
    "Hipoglucemia grave confirmada por la glucemia disponible",
    "Glomerulonefritis postinfecciosa como efecto farmacológico específico",
    "Nefrolitiasis por cistina",
    "Síndrome nefrótico por depósito de IgA"
  ],
  respuestaCorrecta: 0,
  explicacion: `Los inhibidores de SGLT2 se asocian con riesgo infrecuente de cetoacidosis, que puede presentarse con glucemia normal o moderadamente elevada, especialmente durante enfermedad aguda, ayuno, deshidratación o reducción importante de insulina. Ante síntomas compatibles deben medirse cetonas y evaluarse el estado ácido-base. Durante enfermedades agudas con ingesta deficiente, suele ser necesario suspender temporalmente el fármaco siguiendo indicaciones clínicas y protocolos de seguridad.`,
  perlaENARM: "Con iSGLT2, una glucemia no muy elevada no excluye cetoacidosis; evalúa cetonas y acidosis si hay síntomas compatibles.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre diabetes, ERC y prevención de cetoacidosis.",
    internacional: "KDIGO Diabetes Management in CKD; consenso internacional sobre crisis hiperglucémicas."
  },
  bibliografia: "KDIGO Diabetes Management in CKD; literatura actual sobre seguridad de inhibidores de SGLT2."
},
{
  id: "NEF-129",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Prurito asociado a ERC",
  dificultad: "Media",
  caso: `Varón de 73 años en hemodiálisis refiere prurito generalizado persistente que afecta el sueño. No presenta lesiones cutáneas primarias importantes y no se identifican datos de escabiosis. El fósforo está elevado y la piel está seca.`,
  pregunta: "¿Qué enfoque inicial es más apropiado para caracterizar y abordar el prurito?",
  opciones: [
    "Evaluar causas dermatológicas y sistémicas, xerosis, adecuación de diálisis y control del trastorno mineral óseo",
    "Atribuir todo prurito en pacientes dializados exclusivamente a uremia sin explorar otras causas",
    "Iniciar antibióticos sistémicos de manera rutinaria",
    "Suspender definitivamente la hemodiálisis",
    "Indicar suplementos de fósforo para mejorar el prurito"
  ],
  respuestaCorrecta: 0,
  explicacion: `El prurito asociado a ERC puede ser multifactorial. Deben evaluarse xerosis, enfermedades dermatológicas, medicamentos, alteraciones metabólicas y adecuación de diálisis, además de la repercusión sobre sueño y calidad de vida. El manejo puede incluir cuidado de la piel, tratamiento de causas identificables y terapias específicas según gravedad y disponibilidad. El fósforo elevado debe abordarse como parte del manejo mineral, sin asumir que explica por sí solo todos los síntomas.`,
  perlaENARM: "El prurito en ERC requiere evaluación multifactorial y valoración de su impacto sobre sueño y calidad de vida.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre complicaciones de hemodiálisis y prurito asociado a ERC.",
    internacional: "KDIGO CKD-MBD; literatura especializada sobre prurito asociado a enfermedad renal crónica."
  },
  bibliografia: "Brenner & Rector's The Kidney; KDIGO CKD-MBD."
},
{
  id: "NEF-130",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Enfermedad mineral ósea y fracturas",
  dificultad: "Alta",
  caso: `Mujer de 72 años con ERC G5 presenta dolor óseo y fractura por fragilidad. Tiene PTH marcadamente elevada, fósforo elevado y calcio bajo-normal. No recibe tratamiento específico para el trastorno mineral óseo.`,
  pregunta: "¿Qué consideración es fundamental al evaluar el riesgo óseo en esta paciente?",
  opciones: [
    "Integrar tendencias de calcio, fósforo, PTH, fosfatasa alcalina, antecedentes de fractura y etapa de ERC",
    "Usar exclusivamente el calcio sérico para clasificar toda enfermedad ósea renal",
    "Asumir que cualquier PTH elevada indica necesariamente enfermedad ósea de alto recambio",
    "Descartar relación entre ERC y fracturas",
    "Iniciar suplementos de calcio a dosis altas sin evaluar fósforo ni PTH"
  ],
  respuestaCorrecta: 0,
  explicacion: `La enfermedad renal crónica puede alterar el remodelado óseo mediante hiperparatiroidismo secundario, alteraciones del metabolismo mineral y otros mecanismos. La evaluación integra calcio, fósforo, PTH, fosfatasa alcalina, historia de fracturas y contexto clínico. Ningún marcador aislado caracteriza con precisión todos los fenotipos óseos. Las decisiones sobre vitamina D activa, calcimiméticos, quelantes u otras intervenciones deben individualizarse y seguir recomendaciones actualizadas.`,
  perlaENARM: "En ERC avanzada, interpreta el trastorno mineral óseo con tendencias de varios marcadores y antecedentes clínicos, no con una cifra aislada.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre enfermedad mineral ósea asociada a ERC.",
    internacional: "KDIGO CKD-MBD Guideline, versión vigente."
  },
  bibliografia: "KDIGO CKD-MBD; Brenner & Rector's The Kidney."
},
{
  id: "NEF-131",
  especialidad: "Nefrología",
  tema: "Terapia de reemplazo renal",
  subtema: "Elección de modalidad de diálisis",
  dificultad: "Media",
  caso: `Varón de 46 años con ERC avanzada, estable y con apoyo familiar adecuado requiere iniciar terapia de reemplazo renal de manera programada. Desea mantener flexibilidad laboral y vive lejos del centro de hemodiálisis. No tiene contraindicaciones evidentes para diálisis peritoneal.`,
  pregunta: "¿Qué principio debe orientar la selección de la modalidad?",
  opciones: [
    "Elegir automáticamente hemodiálisis para todos los pacientes",
    "Realizar una decisión compartida que considere preferencias, condiciones médicas, apoyo, recursos y factibilidad de cada modalidad",
    "Seleccionar diálisis peritoneal exclusivamente por la edad",
    "Evitar informar sobre trasplante hasta después de varios años de diálisis",
    "Elegir la modalidad solo por el valor de creatinina"
  ],
  respuestaCorrecta: 1,
  explicacion: `La selección de terapia de reemplazo renal debe ser individualizada y basada en decisión compartida. Deben considerarse situación médica, anatomía, capacidad para realizar la técnica, entorno domiciliario, preferencias, acceso a servicios y objetivos de calidad de vida. La hemodiálisis, la diálisis peritoneal y el trasplante tienen ventajas, limitaciones y requisitos distintos; el manejo conservador integral también puede ser una opción para pacientes seleccionados tras una conversación informada.`,
  perlaENARM: "La modalidad de reemplazo renal se elige según el paciente y sus objetivos, no únicamente por el filtrado glomerular.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre modalidades de terapia de reemplazo renal.",
    internacional: "KDIGO CKD Guideline; guías internacionales vigentes sobre elección de modalidad de diálisis."
  },
  bibliografia: "KDIGO CKD; Brenner & Rector's The Kidney; Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed."
},
{
  id: "NEF-132",
  especialidad: "Nefrología",
  tema: "Hemodiálisis",
  subtema: "Hipotensión intradialítica",
  dificultad: "Alta",
  caso: `Mujer de 68 años en hemodiálisis presenta episodios repetidos de hipotensión, náuseas y calambres durante las últimas horas de tratamiento. En varias sesiones ha requerido interrupción temporal de la ultrafiltración. El aumento interdialítico de peso es elevado.`,
  pregunta: "¿Qué factor modificable debe revisarse para reducir estos episodios?",
  opciones: [
    "La tasa de ultrafiltración y la estimación del peso seco",
    "La concentración de hemoglobina como única causa posible",
    "La suspensión permanente de todas las sesiones de hemodiálisis",
    "La indicación rutinaria de suplementos de potasio sin medirlo",
    "La administración de líquidos ilimitados entre sesiones"
  ],
  respuestaCorrecta: 0,
  explicacion: `La hipotensión intradialítica puede relacionarse con una tasa de ultrafiltración elevada, estimación inadecuada del peso seco, disfunción autonómica, cardiopatía, temperatura del dializado y medicamentos. Debe revisarse el balance de volumen y la ganancia interdialítica, además de valorar estrategias individualizadas para mejorar la tolerancia. La evaluación debe descartar causas cardíacas u otras enfermedades intercurrentes cuando los episodios son nuevos o graves.`,
  perlaENARM: "La ultrafiltración excesiva y una estimación incorrecta del peso seco son causas importantes de hipotensión intradialítica.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre complicaciones de hemodiálisis.",
    internacional: "KDIGO Controversies Conference reports; guías vigentes de adecuación y seguridad de hemodiálisis."
  },
  bibliografia: "Brenner & Rector's The Kidney; literatura nefrológica especializada sobre hipotensión intradialítica."
},
{
  id: "NEF-133",
  especialidad: "Nefrología",
  tema: "Acceso vascular para hemodiálisis",
  subtema: "Fístula arteriovenosa",
  dificultad: "Alta",
  caso: `Varón de 55 años con ERC progresiva tiene alta probabilidad de requerir hemodiálisis en los próximos meses. Aún no tiene acceso vascular y presenta venas periféricas de calibre adecuado. No existe urgencia para iniciar diálisis.`,
  pregunta: "¿Qué ventaja ofrece planificar oportunamente un acceso vascular permanente?",
  opciones: [
    "Permite evaluar anatomía y maduración con anticipación y reducir la dependencia de catéteres venosos centrales",
    "Garantiza que nunca se produzca trombosis o infección",
    "Elimina la necesidad de evaluar progresión renal",
    "Hace innecesaria la educación sobre cuidado del acceso",
    "Impide cualquier complicación cardiovascular relacionada con la fístula"
  ],
  respuestaCorrecta: 0,
  explicacion: `La planificación anticipada del acceso vascular permite valorar anatomía, seleccionar el sitio y facilitar la maduración antes de que exista necesidad urgente de diálisis. Una fístula arteriovenosa puede ofrecer menor riesgo de infección que un catéter central cuando madura y funciona adecuadamente, pero no es la opción ideal para todos los pacientes. La decisión debe considerar pronóstico renal, anatomía vascular, preferencias, comorbilidades y plan de tratamiento.`,
  perlaENARM: "La planificación anticipada del acceso reduce la probabilidad de iniciar hemodiálisis de forma urgente con catéter central.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre acceso vascular para hemodiálisis.",
    internacional: "KDOQI Clinical Practice Guideline for Vascular Access; recomendaciones vigentes."
  },
  bibliografia: "KDOQI Vascular Access; Brenner & Rector's The Kidney."
},
{
  id: "NEF-134",
  especialidad: "Nefrología",
  tema: "Diálisis peritoneal",
  subtema: "Peritonitis asociada a diálisis peritoneal",
  dificultad: "Muy alta",
  caso: `Mujer de 49 años en diálisis peritoneal presenta dolor abdominal y efluente turbio. El recuento celular del líquido muestra 380 leucocitos/µL, con 78% de neutrófilos. El cuadro comenzó durante las últimas 24 horas.`,
  pregunta: "¿Qué interpretación debe darse al líquido peritoneal?",
  opciones: [
    "El recuento y predominio de neutrófilos son compatibles con peritonitis asociada a diálisis peritoneal",
    "El líquido turbio excluye infección si la paciente no tiene fiebre",
    "Un recuento superior a 100 leucocitos/µL demuestra siempre hemoperitoneo",
    "La peritonitis solo puede diagnosticarse mediante tomografía",
    "El predominio de neutrófilos descarta una infección peritoneal"
  ],
  respuestaCorrecta: 0,
  explicacion: `El diagnóstico de peritonitis asociada a diálisis peritoneal se basa en la combinación de manifestaciones clínicas, características del efluente, recuento celular y cultivo. Un recuento superior a 100 leucocitos/µL con más de 50% de polimorfonucleares después de un tiempo de permanencia adecuado apoya fuertemente el diagnóstico. Deben obtenerse muestras para cultivo e iniciar tratamiento oportuno según el protocolo, sin retrasarlo innecesariamente por estudios no esenciales.`,
  perlaENARM: "En diálisis peritoneal, dolor abdominal y efluente turbio obligan a evaluar peritonitis y obtener muestras de líquido para cultivo.",
  gpc: {
    mexico: "Consultar protocolo mexicano vigente sobre peritonitis asociada a diálisis peritoneal.",
    internacional: "ISPD Peritonitis Guideline, versión vigente."
  },
  bibliografia: "International Society for Peritoneal Dialysis (ISPD), recomendaciones vigentes sobre peritonitis; Brenner & Rector's The Kidney."
},
{
  id: "NEF-135",
  especialidad: "Nefrología",
  tema: "Diálisis peritoneal",
  subtema: "Transporte peritoneal y ultrafiltración",
  dificultad: "Muy alta",
  caso: `Varón de 62 años en diálisis peritoneal automatizada presenta sobrecarga de volumen progresiva pese a adherencia aparente. La prueba de equilibrio peritoneal demuestra transporte rápido de solutos y pérdida de ultrafiltración en intercambios prolongados.`,
  pregunta: "¿Qué mecanismo puede contribuir a la pérdida de ultrafiltración durante permanencias largas?",
  opciones: [
    "Disipación más rápida del gradiente osmótico de glucosa por absorción y transporte de solutos",
    "Aumento sostenido del gradiente osmótico durante toda la permanencia",
    "Ausencia de difusión de solutos a través de la membrana peritoneal",
    "Bloqueo completo de la absorción peritoneal de glucosa",
    "Aumento obligatorio de la producción de eritropoyetina"
  ],
  respuestaCorrecta: 0,
  explicacion: `En pacientes con transporte peritoneal rápido, la glucosa del dializado se absorbe con mayor rapidez, por lo que el gradiente osmótico disminuye pronto. Durante permanencias prolongadas puede reducirse la ultrafiltración y, en algunos casos, producirse reabsorción neta de líquido. La estrategia debe individualizarse según el perfil de transporte, la prescripción, el balance de volumen y las opciones disponibles, con valoración del equipo de diálisis peritoneal.`,
  perlaENARM: "El transporte peritoneal rápido puede disipar pronto el gradiente osmótico y dificultar la ultrafiltración en intercambios largos.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre adecuación y complicaciones de diálisis peritoneal.",
    internacional: "ISPD recommendations on peritoneal membrane function and prescription, versión vigente."
  },
  bibliografia: "Brenner & Rector's The Kidney; recomendaciones ISPD sobre función de membrana peritoneal."
},
{
  id: "NEF-136",
  especialidad: "Nefrología",
  tema: "Trasplante renal",
  subtema: "Evaluación pretrasplante",
  dificultad: "Media",
  caso: `Mujer de 44 años con ERC G5 desea evaluación para trasplante renal. Tiene diabetes controlada, no presenta infección activa y cuenta con apoyo familiar. Aún no inicia diálisis y pregunta si debe esperar a recibirla para comenzar el protocolo.`,
  pregunta: "¿Cuál es la estrategia más adecuada respecto a la evaluación para trasplante?",
  opciones: [
    "Iniciar la evaluación de manera anticipada cuando la progresión renal y el contexto clínico lo justifiquen",
    "Esperar obligatoriamente varios años después de iniciar hemodiálisis",
    "Descartar trasplante porque tiene diabetes",
    "Esperar hasta que presente una infección activa",
    "Realizar la evaluación solo después de una hospitalización por uremia"
  ],
  respuestaCorrecta: 0,
  explicacion: `La evaluación para trasplante debe comenzar con anticipación en pacientes apropiados con enfermedad renal avanzada, para identificar contraindicaciones, optimizar comorbilidades y valorar donante vivo cuando exista esa posibilidad. El trasplante anticipado puede evitar parte de la exposición a diálisis en candidatos seleccionados. La elegibilidad depende de una evaluación integral y de los criterios del programa de trasplante, no de una contraindicación automática por diabetes.`,
  perlaENARM: "La referencia anticipada a trasplante permite completar estudios antes de necesitar terapia de reemplazo renal urgente.",
  gpc: {
    mexico: "Consultar normativa y protocolos mexicanos vigentes para evaluación de candidatos a trasplante renal.",
    internacional: "KDIGO Clinical Practice Guideline on the Evaluation and Management of Candidates for Kidney Transplantation."
  },
  bibliografia: "KDIGO Transplant Candidate Guideline; Brenner & Rector's The Kidney."
},
{
  id: "NEF-137",
  especialidad: "Nefrología",
  tema: "Trasplante renal",
  subtema: "Rechazo mediado por anticuerpos",
  dificultad: "Muy alta",
  caso: `Paciente de 38 años con trasplante renal presenta elevación progresiva de creatinina y proteinuria nueva. Se detectan anticuerpos específicos contra el donante. La biopsia muestra lesión microvascular y hallazgos compatibles con daño endotelial.`,
  pregunta: "¿Qué principio es fundamental para establecer el diagnóstico de rechazo mediado por anticuerpos?",
  opciones: [
    "Integrar disfunción del injerto, evidencia histológica y datos de interacción de anticuerpos con el endotelio según criterios diagnósticos vigentes",
    "Diagnosticar rechazo únicamente por una creatinina elevada",
    "Descartar rechazo si el injerto produce orina",
    "Usar exclusivamente la concentración sérica de tacrolimus",
    "Asumir que todo anticuerpo anti-HLA causa rechazo clínico activo"
  ],
  respuestaCorrecta: 0,
  explicacion: `El rechazo mediado por anticuerpos requiere una interpretación integrada de la función del injerto, histología, anticuerpos específicos contra el donante y criterios de actividad endotelial establecidos en la clasificación vigente. La presencia de anticuerpos por sí sola no demuestra necesariamente rechazo activo, y la elevación de creatinina tiene múltiples diagnósticos diferenciales. La biopsia y los estudios inmunológicos deben interpretarse junto con infecciones, toxicidad farmacológica y otras causas de disfunción del injerto.`,
  perlaENARM: "En trasplante renal, los anticuerpos anti-donante deben interpretarse con histología y función del injerto; no son diagnósticos aislados.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de trasplante renal y rechazo del injerto.",
    internacional: "KDIGO transplant guidance; Banff Classification of Allograft Pathology, versión vigente."
  },
  bibliografia: "Banff Classification of Allograft Pathology; KDIGO transplant guidance; Brenner & Rector's The Kidney."
},
{
  id: "NEF-138",
  especialidad: "Nefrología",
  tema: "Trasplante renal",
  subtema: "Nefrotoxicidad por inhibidores de calcineurina",
  dificultad: "Alta",
  caso: `Varón de 51 años con trasplante renal estable presenta aumento de creatinina y presión arterial elevada. La concentración de tacrolimus está por encima del objetivo establecido por su equipo. No tiene fiebre ni síntomas urinarios y el ultrasonido no muestra obstrucción.`,
  pregunta: "¿Qué diagnóstico debe considerarse en la evaluación de la disfunción del injerto?",
  opciones: [
    "Nefrotoxicidad por inhibidor de calcineurina, sin excluir otras causas de disfunción del injerto",
    "Rechazo agudo confirmado exclusivamente por la concentración de tacrolimus",
    "Nefropatía por IgA confirmada por hipertensión",
    "Obstrucción ureteral demostrada por una ecografía normal",
    "Glomerulonefritis postinfecciosa obligatoria"
  ],
  respuestaCorrecta: 0,
  explicacion: `Los inhibidores de calcineurina, como tacrolimus, pueden producir vasoconstricción renal y otras formas de toxicidad, con elevación de creatinina e hipertensión. Una concentración supraterapéutica apoya la sospecha, pero no confirma por sí sola la causa. Deben revisarse interacciones farmacológicas, adherencia, niveles seriados, estado hemodinámico e indicaciones de biopsia si persiste la disfunción o el diagnóstico es incierto.`,
  perlaENARM: "En un injerto renal con creatinina ascendente, revisa niveles e interacciones de tacrolimus, pero no atribuyas todo deterioro a toxicidad sin evaluar otras causas.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de seguimiento del trasplante renal.",
    internacional: "KDIGO transplant guidance; Banff Classification of Allograft Pathology."
  },
  bibliografia: "KDIGO transplant guidance; Brenner & Rector's The Kidney."
},
{
  id: "NEF-139",
  especialidad: "Nefrología",
  tema: "Trasplante renal",
  subtema: "Infección por poliomavirus BK",
  dificultad: "Muy alta",
  caso: `Mujer de 46 años, ocho meses después de un trasplante renal, presenta aumento de creatinina sin fiebre ni dolor del injerto. La PCR plasmática para poliomavirus BK es positiva y la carga viral aumenta en mediciones seriadas.`,
  pregunta: "¿Qué complicación debe investigarse en este contexto?",
  opciones: [
    "Nefropatía asociada a poliomavirus BK del injerto",
    "Rechazo mediado por anticuerpos confirmado por la PCR de BK",
    "Nefrolitiasis por cistina",
    "Glomerulonefritis postestreptocócica como consecuencia obligatoria",
    "Diabetes insípida central"
  ],
  respuestaCorrecta: 0,
  explicacion: `La replicación de poliomavirus BK puede causar nefropatía del injerto y deterioro de la función renal. La vigilancia de la carga viral plasmática permite identificar replicación significativa y orientar la evaluación. La reducción cuidadosa de inmunosupresión suele ser un componente central del manejo, pero debe individualizarse para equilibrar el control viral con el riesgo de rechazo. La biopsia puede ser necesaria según la función del injerto, la carga viral y el diagnóstico diferencial.`,
  perlaENARM: "En un trasplantado renal con creatinina ascendente y PCR de BK persistente, considera nefropatía por BK y coordina el manejo de inmunosupresión.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de vigilancia de poliomavirus BK en trasplante renal.",
    internacional: "International consensus guidelines on BK polyomavirus in kidney transplantation, versión vigente."
  },
  bibliografia: "Consensos internacionales vigentes sobre poliomavirus BK en trasplante renal; Brenner & Rector's The Kidney."
},
{
  id: "NEF-140",
  especialidad: "Nefrología",
  tema: "Terapia de reemplazo renal",
  subtema: "Indicaciones urgentes de diálisis",
  dificultad: "Muy alta",
  caso: `Varón de 60 años con lesión renal aguda presenta potasio de 6.9 mmol/L, ensanchamiento del QRS y persistencia de hiperpotasemia pese a tratamiento médico inicial. Tiene oliguria y acidosis metabólica progresiva.`,
  pregunta: "¿Qué criterio justifica con mayor fuerza iniciar terapia de reemplazo renal urgente si las medidas temporizadoras no logran controlar la situación?",
  opciones: [
    "Hiperpotasemia grave refractaria con cambios electrocardiográficos y acidosis progresiva",
    "Creatinina elevada de forma aislada sin síntomas ni complicaciones",
    "Urea discretamente elevada sin manifestaciones clínicas",
    "Proteinuria subnefrótica sin deterioro del filtrado",
    "Hematuria microscópica aislada"
  ],
  respuestaCorrecta: 0,
  explicacion: `La hiperpotasemia grave refractaria, especialmente con alteraciones electrocardiográficas, es una indicación urgente de terapia de reemplazo renal cuando el tratamiento médico no controla el riesgo. La acidosis grave refractaria y la sobrecarga de volumen con compromiso respiratorio son otras indicaciones clásicas. La decisión debe considerar la respuesta a medidas iniciales, la disponibilidad de acceso y la situación clínica global; no depende exclusivamente de la concentración de creatinina o urea.`,
  perlaENARM: "Las indicaciones urgentes clásicas de diálisis incluyen alteraciones electrolíticas o ácido-base refractarias, sobrecarga de volumen grave y complicaciones urémicas.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre terapia de reemplazo renal urgente en lesión renal aguda.",
    internacional: "KDIGO Clinical Practice Guideline for Acute Kidney Injury."
  },
  bibliografia: "KDIGO Acute Kidney Injury; Harrison. Principios de Medicina Interna, 19.ª ed.; Manual CTO de Medicina y Cirugía, Nefrología, 14.ª ed."
},

{
  id: "NEF-141",
  especialidad: "Nefrología",
  tema: "Vasculitis renal",
  subtema: "Vasculitis asociada a ANCA: presentación clínica",
  dificultad: "Media",
  caso: `Varón de 62 años consulta por astenia, pérdida de peso, disnea progresiva y hemoptisis. La creatinina aumenta de 1.0 a 3.6 mg/dL en tres semanas. El examen de orina muestra hematuria dismórfica, cilindros eritrocitarios y proteinuria de 1.8 g/día. La tomografía revela opacidades alveolares bilaterales.`,
  pregunta: "¿Qué mecanismo explica mejor la combinación de lesión renal y hemorragia alveolar?",
  opciones: [
    "Vasculitis necrosante de pequeños vasos con glomerulonefritis y capilaritis pulmonar",
    "Nefropatía membranosa con edema pulmonar por hipoalbuminemia",
    "Nefritis intersticial medicamentosa con neumonitis eosinofílica obligatoria",
    "Trombosis aislada de las arterias renales con congestión pulmonar",
    "Nefroesclerosis hipertensiva con hemorragia alveolar secundaria"
  ],
  respuestaCorrecta: 0,
  explicacion: `La combinación de síndrome nefrítico rápidamente progresivo y hemorragia alveolar sugiere un síndrome pulmón-riñón. Las vasculitis asociadas a ANCA pueden producir glomerulonefritis necrosante y semilunas, además de capilaritis pulmonar. Deben solicitarse ANCA anti-PR3 y anti-MPO, anti-membrana basal glomerular, complemento y estudios para excluir infecciones; la biopsia renal suele aportar confirmación histológica. La hemorragia alveolar puede presentarse sin hemoptisis.`,
  perlaENARM: "Hematuria glomerular con cilindros eritrocitarios más hemorragia alveolar obliga a investigar vasculitis asociada a ANCA y enfermedad anti-MBG.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente aplicable a glomerulonefritis rápidamente progresiva y vasculitis sistémicas.",
    internacional: "KDIGO 2024 Clinical Practice Guideline for the Management of ANCA-Associated Vasculitis."
  },
  bibliografia: "KDIGO. ANCA-Associated Vasculitis Guideline, 2024; Harrison's Principles of Internal Medicine, 19.ª ed.; Jennette JC et al. Revised International Chapel Hill Consensus Conference Nomenclature of Vasculitides. Arthritis Rheumatol. 2013."
},
{
  id: "NEF-142",
  especialidad: "Nefrología",
  tema: "Vasculitis renal",
  subtema: "Granulomatosis con poliangeítis",
  dificultad: "Alta",
  caso: `Mujer de 48 años presenta sinusitis crónica, otitis recurrente, epistaxis, nódulos pulmonares cavitados y deterioro progresivo de la función renal. La biopsia renal muestra glomerulonefritis necrosante con semilunas y escasos depósitos inmunes. Se detectan anticuerpos anti-PR3.`,
  pregunta: "¿Qué diagnóstico integra mejor los hallazgos?",
  opciones: [
    "Poliangeítis microscópica",
    "Granulomatosis con poliangeítis",
    "Poliarteritis nudosa",
    "Enfermedad por depósitos de IgA",
    "Vasculitis crioglobulinémica"
  ],
  respuestaCorrecta: 1,
  explicacion: `La granulomatosis con poliangeítis se caracteriza por inflamación granulomatosa del tracto respiratorio, vasculitis de vasos pequeños y medianos y glomerulonefritis necrosante pauciinmune. La afectación otorrinolaringológica destructiva, los nódulos pulmonares cavitados y la positividad anti-PR3 son altamente sugestivos. La poliangeítis microscópica también puede causar glomerulonefritis y capilaritis, pero no suele producir inflamación granulomatosa del tracto respiratorio.`,
  perlaENARM: "Vía aérea superior destructiva + nódulos pulmonares cavitados + glomerulonefritis pauciinmune orientan a granulomatosis con poliangeítis.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre vasculitis sistémicas y enfermedad renal inflamatoria.",
    internacional: "KDIGO 2024 ANCA-Associated Vasculitis; ACR/Vasculitis Foundation Guideline for Management of ANCA-Associated Vasculitis, 2021."
  },
  bibliografia: "KDIGO 2024; Chung SA et al. 2021 ACR/Vasculitis Foundation Guideline for the Management of ANCA-Associated Vasculitis. Arthritis Rheumatol. 2021; Jennette JC et al. Arthritis Rheumatol. 2013."
},
{
  id: "NEF-143",
  especialidad: "Nefrología",
  tema: "Vasculitis renal",
  subtema: "Poliangeítis microscópica",
  dificultad: "Alta",
  caso: `Varón de 70 años presenta fiebre, púrpura palpable, neuropatía periférica y lesión renal aguda. El sedimento urinario muestra cilindros eritrocitarios. La biopsia revela glomerulonefritis necrosante pauciinmune. Es positivo para anti-MPO; no hay nódulos pulmonares ni enfermedad granulomatosa de vía aérea.`,
  pregunta: "¿Cuál es el diagnóstico más probable?",
  opciones: [
    "Granulomatosis con poliangeítis",
    "Poliangeítis microscópica",
    "Enfermedad anti-MBG",
    "Nefritis lúpica proliferativa",
    "Poliarteritis nudosa clásica"
  ],
  respuestaCorrecta: 1,
  explicacion: `La poliangeítis microscópica es una vasculitis necrosante de vasos pequeños asociada con frecuencia a anti-MPO. Puede producir glomerulonefritis pauciinmune, púrpura, neuropatía y capilaritis pulmonar. La ausencia de granulomas y de enfermedad granulomatosa de la vía aérea favorece este diagnóstico frente a granulomatosis con poliangeítis. La poliarteritis nudosa clásica afecta principalmente arterias medianas y típicamente no causa glomerulonefritis.`,
  perlaENARM: "Anti-MPO con glomerulonefritis pauciinmune y sin granulomas de vía respiratoria favorece poliangeítis microscópica.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre vasculitis sistémicas y glomerulonefritis rápidamente progresiva.",
    internacional: "KDIGO 2024 ANCA-Associated Vasculitis; ACR/Vasculitis Foundation 2021."
  },
  bibliografia: "KDIGO 2024; Jennette JC et al. Arthritis Rheumatol. 2013; Chung SA et al. Arthritis Rheumatol. 2021."
},
{
  id: "NEF-144",
  especialidad: "Nefrología",
  tema: "Vasculitis renal",
  subtema: "Interpretación de ANCA",
  dificultad: "Muy alta",
  caso: `Mujer de 58 años con hematuria microscópica persistente, creatinina estable y sin manifestaciones sistémicas presenta ANCA positivo a título bajo en una prueba indirecta. La prueba inmunoenzimática para anti-PR3 y anti-MPO es negativa.`,
  pregunta: "¿Cuál es la interpretación más apropiada de estos resultados?",
  opciones: [
    "Confirman vasculitis renal activa y justifican inducción inmediata",
    "Excluyen de manera absoluta cualquier vasculitis asociada a ANCA",
    "El resultado aislado no confirma vasculitis; debe integrarse con la clínica, la serología específica y, cuando corresponda, la biopsia",
    "Demuestran granulomatosis con poliangeítis limitada al riñón",
    "Indican iniciar plasmaféresis aun sin deterioro renal"
  ],
  respuestaCorrecta: 2,
  explicacion: `La positividad aislada de ANCA, especialmente a título bajo o sin confirmación de anti-PR3/anti-MPO, no establece el diagnóstico de vasculitis. Puede haber resultados positivos en infecciones, enfermedades autoinmunes y otros contextos. La probabilidad preprueba, la evolución renal, el sedimento y la histología son esenciales. La serología negativa tampoco excluye absolutamente una vasculitis pauciinmune si la sospecha clínica es alta.`,
  perlaENARM: "ANCA positivo no equivale automáticamente a vasculitis; un ANCA negativo tampoco la descarta por completo.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre diagnóstico de vasculitis sistémicas.",
    internacional: "KDIGO 2024 ANCA-Associated Vasculitis; recomendaciones internacionales para pruebas ANCA y correlación clinicopatológica."
  },
  bibliografia: "KDIGO 2024; Bossuyt X et al. Revised 2017 international consensus on testing of ANCAs in granulomatosis with polyangiitis and microscopic polyangiitis. Nat Rev Rheumatol. 2017."
},
{
  id: "NEF-145",
  especialidad: "Nefrología",
  tema: "Vasculitis renal",
  subtema: "Biopsia renal en glomerulonefritis pauciinmune",
  dificultad: "Alta",
  caso: `Varón de 55 años con creatinina que aumenta de 1.4 a 4.2 mg/dL en 12 días y sedimento nefrítico. La biopsia renal muestra necrosis fibrinoide segmentaria y semilunas celulares en varios glomérulos, con inmunofluorescencia negativa o con depósitos mínimos.`,
  pregunta: "¿Qué patrón histopatológico describe mejor esta lesión?",
  opciones: [
    "Glomerulonefritis membranosa con depósitos subepiteliales",
    "Glomerulonefritis necrosante pauciinmune con semilunas",
    "Glomerulonefritis membranoproliferativa por inmunocomplejos",
    "Nefropatía diabética nodular",
    "Glomeruloesclerosis focal y segmentaria primaria"
  ],
  respuestaCorrecta: 1,
  explicacion: `La necrosis fibrinoide y las semilunas celulares, con escasos o nulos depósitos inmunes en inmunofluorescencia, constituyen el patrón clásico de glomerulonefritis necrosante pauciinmune. Se asocia frecuentemente a vasculitis ANCA y puede progresar rápidamente a insuficiencia renal. La biopsia permite estimar actividad y cronicidad, identificar diagnósticos alternativos y orientar el pronóstico, pero no debe retrasar el tratamiento cuando existe enfermedad grave con alta probabilidad clínica.`,
  perlaENARM: "Semilunas y necrosis con inmunofluorescencia pauciinmune sugieren vasculitis asociada a ANCA; los depósitos lineales orientan a anti-MBG.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre glomerulonefritis rápidamente progresiva.",
    internacional: "KDIGO 2024 ANCA-Associated Vasculitis."
  },
  bibliografia: "KDIGO 2024; Jennette JC et al. Arthritis Rheumatol. 2013; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-146",
  especialidad: "Nefrología",
  tema: "Vasculitis renal",
  subtema: "Inducción de remisión en vasculitis ANCA grave",
  dificultad: "Alta",
  caso: `Paciente de 64 años con glomerulonefritis pauciinmune, creatinina de 5.1 mg/dL y anti-MPO positivo. No tiene infección activa identificada. Presenta deterioro renal rápido y lesiones histológicas activas.`,
  pregunta: "¿Qué estrategia farmacológica se utiliza habitualmente para inducir remisión en una vasculitis ANCA con compromiso renal grave?",
  opciones: [
    "Prednisona en monoterapia durante seis meses",
    "Glucocorticoides combinados con rituximab o ciclofosfamida",
    "Hidroxicloroquina como tratamiento único",
    "IECA y observación sin inmunosupresión",
    "Azatioprina como único fármaco de inducción en enfermedad grave"
  ],
  respuestaCorrecta: 1,
  explicacion: `La inducción de remisión en vasculitis ANCA con compromiso renal grave suele requerir glucocorticoides más rituximab o ciclofosfamida. La elección depende de la gravedad, función renal, recaídas, exposición previa, fertilidad, comorbilidades y experiencia clínica. Los esquemas con reducción de exposición a glucocorticoides pueden disminuir toxicidad. Se deben valorar profilaxis infecciosa, vacunación, cribado de hepatitis B y monitorización hematológica según el régimen utilizado.`,
  perlaENARM: "En vasculitis ANCA con glomerulonefritis grave, la inducción habitual combina glucocorticoides con rituximab o ciclofosfamida.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre tratamiento de vasculitis sistémicas.",
    internacional: "KDIGO 2024 ANCA-Associated Vasculitis; ACR/Vasculitis Foundation 2021."
  },
  bibliografia: "KDIGO 2024; Chung SA et al. Arthritis Rheumatol. 2021; Stone JH et al. Rituximab versus Cyclophosphamide for ANCA-Associated Vasculitis. N Engl J Med. 2010."
},
{
  id: "NEF-147",
  especialidad: "Nefrología",
  tema: "Vasculitis renal",
  subtema: "Rituximab frente a ciclofosfamida",
  dificultad: "Muy alta",
  caso: `Mujer de 36 años con granulomatosis con poliangeítis y glomerulonefritis activa desea preservar su fertilidad. Tiene enfermedad sistémica grave, sin contraindicación para rituximab y sin exposición previa a ciclofosfamida.`,
  pregunta: "¿Qué consideración terapéutica es especialmente relevante al seleccionar el tratamiento de inducción?",
  opciones: [
    "La ciclofosfamida no tiene toxicidad gonadal y es siempre preferible",
    "Rituximab es una alternativa de inducción que evita la exposición acumulada a ciclofosfamida y su riesgo gonadal",
    "La fertilidad obliga a utilizar azatioprina como monoterapia de inducción",
    "La gravedad renal contraindica rituximab en todos los pacientes",
    "Los glucocorticoides solos tienen eficacia equivalente en enfermedad grave"
  ],
  respuestaCorrecta: 1,
  explicacion: `Rituximab es una opción aceptada para inducción de remisión en vasculitis ANCA y resulta particularmente atractivo cuando se desea evitar toxicidad gonadal por ciclofosfamida. La elección no es automática: deben considerarse gravedad, función renal, recaídas, antecedentes terapéuticos y evidencia aplicable al fenotipo. La ciclofosfamida continúa siendo una alternativa válida, especialmente en determinados cuadros de enfermedad muy grave. Se requiere decisión individualizada y discusión de riesgos.`,
  perlaENARM: "La toxicidad gonadal acumulativa de ciclofosfamida es un factor clave al elegir inducción en pacientes que desean fertilidad futura.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre vasculitis sistémicas y uso de inmunosupresores.",
    internacional: "KDIGO 2024 ANCA-Associated Vasculitis; ACR/Vasculitis Foundation 2021."
  },
  bibliografia: "Stone JH et al. N Engl J Med. 2010; Jones RB et al. Rituximab versus cyclophosphamide in ANCA-associated renal vasculitis. N Engl J Med. 2010; KDIGO 2024."
},
{
  id: "NEF-148",
  especialidad: "Nefrología",
  tema: "Vasculitis renal",
  subtema: "Glucocorticoides y toxicidad del tratamiento",
  dificultad: "Alta",
  caso: `Varón de 67 años con vasculitis ANCA renal recibe glucocorticoides y rituximab. Tiene diabetes, obesidad y antecedente de infección respiratoria recurrente. La función renal comienza a mejorar tras la inducción.`,
  pregunta: "¿Qué principio terapéutico reduce la toxicidad sin abandonar el control de la enfermedad?",
  opciones: [
    "Mantener dosis altas de glucocorticoides indefinidamente para prevenir cualquier recaída",
    "Utilizar un esquema validado de reducción de glucocorticoides, con vigilancia estrecha de actividad y complicaciones",
    "Suspender todos los inmunosupresores al primer descenso de creatinina",
    "Añadir ciclofosfamida a rituximab en todos los pacientes",
    "Evitar la profilaxis infecciosa porque aumenta la resistencia bacteriana en todos los casos"
  ],
  respuestaCorrecta: 1,
  explicacion: `Los glucocorticoides a dosis elevadas se asocian a infecciones, hiperglucemia, osteoporosis y otros efectos adversos. Los esquemas de reducción de dosis respaldados por evidencia pueden limitar la exposición manteniendo eficacia en pacientes apropiados. La velocidad de descenso debe adaptarse a gravedad, respuesta, recaídas y comorbilidades. También se requiere prevención de osteoporosis, control metabólico, vacunación y profilaxis frente a Pneumocystis jirovecii cuando esté indicada por el régimen inmunosupresor.`,
  perlaENARM: "La estrategia moderna busca controlar la vasculitis con menor exposición acumulada a glucocorticoides y prevención activa de infecciones.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre tratamiento inmunosupresor y prevención de complicaciones.",
    internacional: "KDIGO 2024 ANCA-Associated Vasculitis; PEXIVAS Trial."
  },
  bibliografia: "Walsh M et al. Plasma Exchange and Glucocorticoids in Severe ANCA-Associated Vasculitis. N Engl J Med. 2020; KDIGO 2024."
},
{
  id: "NEF-149",
  especialidad: "Nefrología",
  tema: "Vasculitis renal",
  subtema: "Plasmaféresis en vasculitis ANCA",
  dificultad: "Muy alta",
  caso: `Paciente de 61 años con vasculitis ANCA, creatinina de 6.2 mg/dL y hemorragia alveolar con hipoxemia. Se inicia tratamiento de inducción. La prueba para anticuerpos anti-MBG es negativa.`,
  pregunta: "¿Cuál es la afirmación más precisa sobre el uso de recambio plasmático en este contexto?",
  opciones: [
    "Debe administrarse de forma rutinaria a toda vasculitis ANCA, independientemente de la gravedad",
    "Nunca debe considerarse, incluso ante insuficiencia renal extrema",
    "No es rutinario para todos; puede individualizarse en pacientes seleccionados con riesgo muy alto de progresión renal o situaciones específicas",
    "Sustituye por completo la inmunosupresión de inducción",
    "Está indicado únicamente cuando el ANCA anti-PR3 es positivo"
  ],
  respuestaCorrecta: 2,
  explicacion: `PEXIVAS no demostró una reducción significativa de muerte o enfermedad renal terminal con plasmaféresis rutinaria en el conjunto de pacientes con vasculitis ANCA grave. Las guías permiten considerar el recambio plasmático en escenarios seleccionados, como determinadas presentaciones con riesgo renal muy alto, y en enfermedad anti-MBG concomitante. En hemorragia alveolar, la decisión debe individualizarse, valorando gravedad, diagnóstico alternativo y balance entre beneficio potencial y riesgos infecciosos.`,
  perlaENARM: "La plasmaféresis no es obligatoria para toda vasculitis ANCA grave; la evidencia apoya seleccionar cuidadosamente a los pacientes.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre vasculitis ANCA grave y terapia extracorpórea.",
    internacional: "KDIGO 2024 ANCA-Associated Vasculitis; PEXIVAS."
  },
  bibliografia: "Walsh M et al. N Engl J Med. 2020; KDIGO 2024; ACR/Vasculitis Foundation 2021."
},
{
  id: "NEF-150",
  especialidad: "Nefrología",
  tema: "Vasculitis renal",
  subtema: "Mantenimiento de remisión",
  dificultad: "Alta",
  caso: `Varón de 59 años alcanza remisión clínica y renal después de inducción con rituximab y glucocorticoides por vasculitis ANCA. Se normalizan los reactantes de fase aguda y desaparecen los síntomas sistémicos.`,
  pregunta: "¿Qué estrategia se utiliza generalmente para reducir el riesgo de recaída después de la inducción?",
  opciones: [
    "Suspender toda terapia al normalizarse la creatinina",
    "Planificar mantenimiento con un régimen recomendado, por ejemplo rituximab o azatioprina, individualizado según riesgo y tratamiento previo",
    "Mantener ciclofosfamida diaria indefinidamente",
    "Utilizar antibióticos como sustituto de inmunosupresión",
    "Mantener glucocorticoides a dosis altas sin reducción"
  ],
  respuestaCorrecta: 1,
  explicacion: `La remisión inicial no elimina el riesgo de recaída. Después de inducirla se utiliza mantenimiento, frecuentemente con rituximab o azatioprina, de acuerdo con el fenotipo, riesgo de recaída, tratamiento de inducción, comorbilidades y preferencias. La duración se individualiza; la suspensión prematura puede incrementar recaídas, mientras que la inmunosupresión prolongada aumenta infecciones y otros riesgos. Los títulos de ANCA aislados no deben dirigir por sí solos todos los cambios terapéuticos.`,
  perlaENARM: "Inducción controla la enfermedad activa; mantenimiento reduce recaídas. No son fases terapéuticas intercambiables.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre tratamiento y seguimiento de vasculitis sistémicas.",
    internacional: "KDIGO 2024 ANCA-Associated Vasculitis; ACR/Vasculitis Foundation 2021."
  },
  bibliografia: "KDIGO 2024; Guillevin L et al. MAINRITSAN study of rituximab versus azathioprine for maintenance of remission in ANCA-associated vasculitis. N Engl J Med. 2014."
},
{
  id: "NEF-151",
  especialidad: "Nefrología",
  tema: "Vasculitis renal",
  subtema: "Enfermedad anti-membrana basal glomerular",
  dificultad: "Alta",
  caso: `Varón de 42 años presenta hemoptisis, hipoxemia y lesión renal aguda con cilindros eritrocitarios. La biopsia renal muestra glomerulonefritis necrosante con semilunas y depósitos lineales de IgG en la membrana basal glomerular. Se detectan anticuerpos circulantes anti-MBG.`,
  pregunta: "¿Qué característica distingue mejor esta enfermedad de la glomerulonefritis pauciinmune asociada a ANCA?",
  opciones: [
    "Depósitos lineales de IgG a lo largo de la membrana basal glomerular",
    "Ausencia completa de lesión glomerular",
    "Depósitos mesangiales dominantes de IgA",
    "Depósitos granulares subepiteliales de IgG4 como hallazgo definitorio",
    "Presencia obligatoria de granulomas necrosantes en vía aérea"
  ],
  respuestaCorrecta: 0,
  explicacion: `La enfermedad anti-MBG se caracteriza por autoanticuerpos contra componentes de la membrana basal glomerular y, en inmunofluorescencia, depósitos lineales de IgG. Puede causar síndrome pulmón-riñón con glomerulonefritis rápidamente progresiva y hemorragia alveolar. La vasculitis ANCA suele mostrar patrón pauciinmune. La coexistencia de ANCA y anti-MBG es posible y tiene implicaciones para el seguimiento y el riesgo de recaída.`,
  perlaENARM: "Inmunofluorescencia lineal de IgG orienta a anti-MBG; inmunofluorescencia pauciinmune orienta a vasculitis ANCA.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre glomerulonefritis rápidamente progresiva y enfermedad anti-MBG.",
    internacional: "KDIGO Clinical Practice Guideline for the Management of Glomerular Diseases, 2021; KDIGO ANCA 2024."
  },
  bibliografia: "KDIGO Glomerular Diseases Guideline, 2021; KDIGO ANCA-Associated Vasculitis, 2024; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-152",
  especialidad: "Nefrología",
  tema: "Vasculitis renal",
  subtema: "Vasculitis por inmunocomplejos y crioglobulinemia",
  dificultad: "Muy alta",
  caso: `Mujer de 56 años con púrpura palpable, artralgias, neuropatía periférica y lesión renal presenta proteinuria, hematuria y complemento C4 marcadamente disminuido. Tiene infección crónica por virus de hepatitis C y crioglobulinas séricas positivas.`,
  pregunta: "¿Qué mecanismo renal es más probable?",
  opciones: [
    "Glomerulonefritis pauciinmune típica de ANCA sin depósitos",
    "Glomerulonefritis por inmunocomplejos asociada a crioglobulinemia",
    "Nefropatía diabética aislada",
    "Enfermedad anti-MBG con depósito lineal de IgG",
    "Nefritis intersticial por hipersensibilidad sin lesión glomerular"
  ],
  respuestaCorrecta: 1,
  explicacion: `La crioglobulinemia mixta puede asociarse a hepatitis C, púrpura, artralgias, neuropatía y glomerulonefritis por inmunocomplejos, con frecuencia de patrón membranoproliferativo. El consumo de complemento, especialmente C4, apoya el diagnóstico. El manejo requiere evaluar la gravedad renal y sistémica, tratar la infección causal con antivirales de acción directa cuando corresponda y considerar inmunoterapia en enfermedad grave seleccionada.`,
  perlaENARM: "Púrpura + neuropatía + C4 bajo + crioglobulinas sugieren vasculitis crioglobulinémica, no una vasculitis pauciinmune típica.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre hepatitis C, crioglobulinemia y glomerulopatías por inmunocomplejos.",
    internacional: "KDIGO 2022 Clinical Practice Guideline for Hepatitis C in CKD; KDIGO Glomerular Diseases Guideline, 2021."
  },
  bibliografia: "KDIGO 2022 Hepatitis C in CKD; KDIGO 2021 Glomerular Diseases; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-153",
  especialidad: "Nefrología",
  tema: "Vasculitis renal",
  subtema: "Vasculitis por IgA en adultos",
  dificultad: "Alta",
  caso: `Varón de 28 años presenta púrpura palpable en extremidades inferiores, dolor abdominal, artralgias y hematuria macroscópica posterior a una infección respiratoria. La biopsia renal muestra depósitos mesangiales dominantes de IgA y proliferación glomerular.`,
  pregunta: "¿Qué diagnóstico explica mejor la afectación renal y extrarrenal?",
  opciones: [
    "Vasculitis por IgA",
    "Poliangeítis microscópica",
    "Enfermedad anti-MBG",
    "Nefropatía membranosa primaria",
    "Poliarteritis nudosa clásica"
  ],
  respuestaCorrecta: 0,
  explicacion: `La vasculitis por IgA produce púrpura palpable, artralgias y manifestaciones gastrointestinales, con posible glomerulonefritis por depósitos de IgA. La presentación renal se solapa histológicamente con la nefropatía por IgA, pero las manifestaciones sistémicas permiten reconocer el síndrome vasculítico. En adultos, el pronóstico renal depende de la función inicial, proteinuria, presión arterial y evolución; se requiere seguimiento prolongado.`,
  perlaENARM: "Púrpura palpable, dolor abdominal, artralgias y glomerulonefritis con IgA dominante conforman la asociación clásica de vasculitis por IgA.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre vasculitis por IgA y nefropatía por IgA.",
    internacional: "KDIGO Clinical Practice Guideline for the Management of IgA Nephropathy and IgA Vasculitis, 2025."
  },
  bibliografia: "KDIGO IgA Nephropathy and IgA Vasculitis Guideline, 2025; Jennette JC et al. Arthritis Rheumatol. 2013."
},
{
  id: "NEF-154",
  especialidad: "Nefrología",
  tema: "Vasculitis renal",
  subtema: "Poliarteritis nudosa",
  dificultad: "Media",
  caso: `Varón de 51 años presenta hipertensión de reciente inicio, dolor abdominal posprandial, livedo reticularis, mononeuritis múltiple y pérdida de peso. La angiografía muestra microaneurismas en arterias viscerales. El sedimento urinario no muestra cilindros eritrocitarios y los ANCA son negativos.`,
  pregunta: "¿Cuál es el diagnóstico más probable?",
  opciones: [
    "Poliarteritis nudosa",
    "Poliangeítis microscópica",
    "Granulomatosis con poliangeítis",
    "Glomerulonefritis por IgA",
    "Enfermedad anti-MBG"
  ],
  respuestaCorrecta: 0,
  explicacion: `La poliarteritis nudosa afecta arterias musculares medianas, puede causar microaneurismas viscerales, isquemia gastrointestinal, neuropatía e hipertensión por afectación renal vascular. A diferencia de las vasculitis de vasos pequeños, típicamente no produce glomerulonefritis necrosante ni capilaritis pulmonar. La angiografía puede mostrar estenosis y microaneurismas, y debe evaluarse la asociación con hepatitis B.`,
  perlaENARM: "Microaneurismas viscerales + mononeuritis múltiple + ausencia de glomerulonefritis sugieren poliarteritis nudosa.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre vasculitis sistémicas y hepatitis B.",
    internacional: "ACR/Vasculitis Foundation Guideline for Management of Polyarteritis Nodosa, 2021."
  },
  bibliografia: "Chung SA et al. Arthritis Rheumatol. 2021; Jennette JC et al. Arthritis Rheumatol. 2013; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-155",
  especialidad: "Nefrología",
  tema: "Vasculitis renal",
  subtema: "Diagnóstico diferencial de glomerulonefritis rápidamente progresiva",
  dificultad: "Muy alta",
  caso: `Paciente de 47 años presenta deterioro renal en días, hematuria glomerular y hemorragia alveolar. La inmunofluorescencia de la biopsia renal está pendiente. Se requiere distinguir vasculitis ANCA, enfermedad anti-MBG y glomerulonefritis por inmunocomplejos.`,
  pregunta: "¿Qué conjunto de estudios permite discriminar mejor los principales mecanismos etiológicos?",
  opciones: [
    "Solo creatinina y ultrasonido renal",
    "ANCA anti-PR3/anti-MPO, anticuerpos anti-MBG, complemento, serologías dirigidas y biopsia renal con microscopía e inmunofluorescencia",
    "Únicamente títulos de ANA, sin evaluación urinaria",
    "Solo concentración sérica de ácido úrico",
    "Radiografía de tórax y hemograma sin pruebas inmunológicas"
  ],
  respuestaCorrecta: 1,
  explicacion: `La glomerulonefritis rápidamente progresiva es un síndrome clínico que requiere identificar el mecanismo subyacente. ANCA anti-PR3/anti-MPO apoyan vasculitis pauciinmune; anti-MBG y depósitos lineales apoyan enfermedad anti-MBG; complemento y patrones de depósitos pueden orientar a glomerulonefritis por inmunocomplejos. Deben agregarse estudios dirigidos según la sospecha, como ANA, anti-dsDNA, crioglobulinas y serologías infecciosas. La biopsia es central cuando puede realizarse con seguridad.`,
  perlaENARM: "La clasificación de la glomerulonefritis rápidamente progresiva se apoya en serología y patrón de inmunofluorescencia: pauciinmune, lineal o granular.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre glomerulonefritis rápidamente progresiva y síndrome pulmón-riñón.",
    internacional: "KDIGO ANCA-Associated Vasculitis, 2024; KDIGO Glomerular Diseases, 2021."
  },
  bibliografia: "KDIGO 2024; KDIGO 2021; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-156",
  especialidad: "Nefrología",
  tema: "Vasculitis renal",
  subtema: "Actividad y cronicidad histológica",
  dificultad: "Muy alta",
  caso: `Mujer de 63 años con vasculitis ANCA presenta creatinina de 4.8 mg/dL. La biopsia muestra semilunas fibrosas, glomeruloesclerosis global extensa, atrofia tubular y fibrosis intersticial marcada, con pocos glomérulos que presentan necrosis activa.`,
  pregunta: "¿Qué implicación tiene este patrón para la interpretación del potencial de recuperación renal?",
  opciones: [
    "La fibrosis demuestra enfermedad totalmente reversible con glucocorticoides",
    "La cronicidad histológica marcada sugiere menor potencial de recuperación renal, aunque debe integrarse con actividad y contexto clínico",
    "La presencia de cualquier semiluna garantiza recuperación completa",
    "La biopsia no tiene valor pronóstico en vasculitis ANCA",
    "La fibrosis intersticial excluye por sí sola la posibilidad de actividad vasculítica extrarrenal"
  ],
  respuestaCorrecta: 1,
  explicacion: `La glomeruloesclerosis, las semilunas fibrosas y la fibrosis intersticial con atrofia tubular reflejan daño crónico y menor posibilidad de recuperación de nefronas. La actividad necrosante y las semilunas celulares pueden ser potencialmente tratables, pero la proporción entre lesiones activas y crónicas contribuye a la estimación pronóstica. No debe decidirse únicamente por una cifra de creatinina ni por un hallazgo histológico aislado.`,
  perlaENARM: "En biopsia renal, necrosis y semilunas celulares sugieren actividad; fibrosis, atrofia tubular y semilunas fibrosas indican cronicidad.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre biopsia renal y glomerulonefritis rápidamente progresiva.",
    internacional: "KDIGO 2024 ANCA-Associated Vasculitis."
  },
  bibliografia: "KDIGO 2024; Berden AE et al. Histopathologic classification of ANCA-associated glomerulonephritis. J Am Soc Nephrol. 2010."
},
{
  id: "NEF-157",
  especialidad: "Nefrología",
  tema: "Vasculitis renal",
  subtema: "Recaída de vasculitis ANCA",
  dificultad: "Alta",
  caso: `Paciente de 60 años con granulomatosis con poliangeítis en remisión presenta aumento del título anti-PR3 durante seguimiento, pero no tiene síntomas nuevos, la creatinina permanece estable y el sedimento urinario no muestra cambios.`,
  pregunta: "¿Qué conducta interpretativa es más apropiada?",
  opciones: [
    "Administrar ciclofosfamida de inmediato basándose solo en el título",
    "Considerar el resultado como prueba definitiva de recaída renal",
    "Realizar vigilancia clínica y renal estrecha; no basar por sí solo el cambio terapéutico en el título de ANCA",
    "Suspender definitivamente el mantenimiento",
    "Iniciar plasmaféresis por elevación aislada de ANCA"
  ],
  respuestaCorrecta: 2,
  explicacion: `Los cambios en títulos de ANCA pueden asociarse con actividad o riesgo de recaída, pero su valor predictivo individual es insuficiente para sustituir la evaluación clínica. La decisión de intensificar inmunosupresión debe considerar síntomas, función renal, sedimento, proteinuria y hallazgos de otros órganos. Tratar únicamente una elevación serológica puede exponer al paciente a toxicidad sin demostrar enfermedad activa.`,
  perlaENARM: "El título de ANCA no debe utilizarse de manera aislada para diagnosticar recaída ni para intensificar inmunosupresión.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre seguimiento de vasculitis sistémicas.",
    internacional: "KDIGO 2024 ANCA-Associated Vasculitis; ACR/Vasculitis Foundation 2021."
  },
  bibliografia: "KDIGO 2024; Chung SA et al. Arthritis Rheumatol. 2021."
},
{
  id: "NEF-158",
  especialidad: "Nefrología",
  tema: "Vasculitis renal",
  subtema: "Vasculitis ANCA con infección concomitante",
  dificultad: "Muy alta",
  caso: `Varón de 68 años con deterioro renal, hematuria y ANCA positivo presenta fiebre persistente, soplo cardíaco nuevo y hemocultivos positivos. La ecocardiografía identifica vegetación valvular. Se sospecha que la lesión renal puede relacionarse con endocarditis.`,
  pregunta: "¿Cuál es la principal precaución antes de atribuir el cuadro a vasculitis ANCA primaria e intensificar inmunosupresión?",
  opciones: [
    "La positividad de ANCA descarta endocarditis como causa renal",
    "Las infecciones no producen fenómenos inmunológicos renales",
    "La endocarditis puede asociarse a ANCA positivos y glomerulonefritis; debe establecerse el mecanismo antes de inmunosuprimir, salvo decisiones urgentes individualizadas",
    "Toda hematuria con fiebre requiere ciclofosfamida",
    "La vegetación valvular confirma granulomatosis con poliangeítis"
  ],
  respuestaCorrecta: 2,
  explicacion: `Las infecciones, incluida la endocarditis infecciosa, pueden producir glomerulonefritis por inmunocomplejos y ocasionalmente ANCA positivos. La inmunosupresión no indicada puede agravar una infección activa. Deben evaluarse cultivos, ecocardiografía, complemento, patrón histológico y respuesta al tratamiento antimicrobiano. En casos complejos, la biopsia renal y la valoración conjunta por nefrología, infectología y reumatología pueden ser decisivas.`,
  perlaENARM: "Antes de inmunosuprimir una supuesta vasculitis, descarta infecciones que puedan imitarla, especialmente endocarditis en el síndrome nefrítico febril.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre endocarditis infecciosa, glomerulonefritis y uso seguro de inmunosupresión.",
    internacional: "KDIGO Glomerular Diseases Guideline, 2021; guías internacionales vigentes sobre endocarditis infecciosa."
  },
  bibliografia: "KDIGO 2021 Glomerular Diseases; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-159",
  especialidad: "Nefrología",
  tema: "Vasculitis renal",
  subtema: "Pronóstico y seguimiento renal",
  dificultad: "Media",
  caso: `Paciente de 54 años con vasculitis ANCA inicia tratamiento de inducción. Tras cuatro semanas disminuyen la hematuria, la proteinuria y los síntomas sistémicos, pero la creatinina continúa elevada y estable en 3.2 mg/dL.`,
  pregunta: "¿Qué interpretación es más adecuada para el seguimiento?",
  opciones: [
    "La creatinina elevada demuestra fracaso terapéutico definitivo",
    "La persistencia de creatinina elevada puede reflejar recuperación lenta o daño crónico; deben valorarse tendencias, sedimento, proteinuria y actividad sistémica",
    "La mejoría clínica obliga a suspender todo tratamiento",
    "La hematuria inicial confirma recaída permanente",
    "Debe indicarse diálisis crónica únicamente por una creatinina de 3.2 mg/dL"
  ],
  respuestaCorrecta: 1,
  explicacion: `La recuperación de la función renal puede ser lenta y no siempre completa, en particular si existe daño crónico. La respuesta se evalúa de manera longitudinal con función renal, sedimento, proteinuria, actividad extrarrenal y complicaciones del tratamiento. La creatinina aislada no define fracaso ni constituye por sí misma una indicación de diálisis. La necesidad de terapia de reemplazo renal depende del contexto clínico y de indicaciones específicas.`,
  perlaENARM: "La respuesta renal se evalúa por tendencia y contexto; una creatinina persistentemente elevada no equivale automáticamente a vasculitis activa.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre seguimiento de glomerulonefritis rápidamente progresiva.",
    internacional: "KDIGO 2024 ANCA-Associated Vasculitis."
  },
  bibliografia: "KDIGO 2024; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-160",
  especialidad: "Nefrología",
  tema: "Vasculitis renal",
  subtema: "Integración diagnóstica y terapéutica",
  dificultad: "Muy alta",
  caso: `Mujer de 59 años presenta creatinina de 4.5 mg/dL, cilindros eritrocitarios, hemoptisis e hipoxemia. ANCA anti-MPO es positivo y anti-MBG negativo. La biopsia renal muestra glomerulonefritis necrosante pauciinmune con semilunas celulares. Los cultivos iniciales no identifican infección.`,
  pregunta: "¿Cuál es el enfoque inicial más consistente con una vasculitis ANCA grave confirmada?",
  opciones: [
    "Esperar varias semanas para observar si se normaliza la creatinina",
    "Iniciar inducción con glucocorticoides y rituximab o ciclofosfamida, con soporte y prevención de complicaciones, individualizando la posible indicación de plasmaféresis",
    "Administrar únicamente un IECA y repetir ANCA en seis meses",
    "Tratar como nefropatía membranosa con inhibidor de calcineurina en monoterapia",
    "Iniciar azatioprina como único tratamiento de inducción y evitar hospitalización pese a la hipoxemia"
  ],
  respuestaCorrecta: 1,
  explicacion: `La presentación es compatible con vasculitis ANCA grave con compromiso renal y pulmonar. Requiere valoración hospitalaria urgente, estabilización respiratoria y hemodinámica, inducción con glucocorticoides más rituximab o ciclofosfamida y vigilancia de infección, citopenias y otras toxicidades. La plasmaféresis no se indica de rutina a todos los pacientes; puede considerarse según gravedad renal, hemorragia alveolar y contexto específico. Deben planearse mantenimiento y profilaxis según el régimen utilizado.`,
  perlaENARM: "Síndrome pulmón-riñón con biopsia pauciinmune y anti-MPO positivo es una urgencia; la inducción no debe retrasarse cuando la probabilidad diagnóstica es alta.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre vasculitis sistémicas, síndrome pulmón-riñón y glomerulonefritis rápidamente progresiva.",
    internacional: "KDIGO 2024 ANCA-Associated Vasculitis; ACR/Vasculitis Foundation 2021; PEXIVAS."
  },
  bibliografia: "KDIGO 2024; Chung SA et al. Arthritis Rheumatol. 2021; Walsh M et al. N Engl J Med. 2020; Stone JH et al. N Engl J Med. 2010."
},
  
{
  id: "NEF-161",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda",
  subtema: "Criterios diagnósticos KDIGO",
  dificultad: "Baja",
  caso: `Varón de 68 años hospitalizado por neumonía. Su creatinina basal era de 0.9 mg/dL y aumenta a 1.3 mg/dL en las últimas 36 horas. La diuresis permanece conservada.`,
  pregunta: "¿Qué dato permite establecer lesión renal aguda según los criterios KDIGO?",
  opciones: [
    "Creatinina mayor de 1.0 mg/dL en cualquier paciente",
    "Aumento de creatinina de al menos 0.3 mg/dL en 48 horas",
    "Proteinuria mayor de 150 mg/día",
    "Filtrado glomerular menor de 90 mL/min/1.73 m² durante un día",
    "Urea sérica mayor de 40 mg/dL"
  ],
  respuestaCorrecta: 1,
  explicacion: `KDIGO define lesión renal aguda por aumento de creatinina sérica de al menos 0.3 mg/dL en 48 horas, aumento a 1.5 veces o más del basal en los siete días previos, o diuresis menor de 0.5 mL/kg/h durante al menos seis horas. Este paciente cumple el criterio de creatinina.`,
  perlaENARM: "Un aumento absoluto de creatinina de 0.3 mg/dL en 48 horas puede diagnosticar lesión renal aguda aunque la cifra final parezca cercana a la normalidad.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre prevención, diagnóstico y tratamiento de lesión renal aguda.",
    internacional: "KDIGO Clinical Practice Guideline for Acute Kidney Injury, 2012."
  },
  bibliografia: "KDIGO AKI Guideline, 2012; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-162",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda",
  subtema: "Lesión prerrenal",
  dificultad: "Baja",
  caso: `Mujer de 72 años con tres días de diarrea y vómitos presenta hipotensión ortostática, mucosas secas y creatinina de 2.0 mg/dL, previamente de 0.8 mg/dL. El sedimento urinario es poco activo.`,
  pregunta: "¿Cuál es el mecanismo más probable del deterioro renal?",
  opciones: [
    "Obstrucción bilateral de los uréteres",
    "Disminución de la perfusión renal por depleción del volumen circulante",
    "Glomerulonefritis proliferativa",
    "Necrosis cortical renal bilateral",
    "Enfermedad renal poliquística"
  ],
  respuestaCorrecta: 1,
  explicacion: `Las pérdidas gastrointestinales producen hipovolemia y disminución de la perfusión renal. Si no existe lesión estructural establecida, la función puede mejorar al restaurar cuidadosamente el volumen circulante. Deben reevaluarse presión arterial, diuresis, creatinina y signos de sobrecarga después de la reposición.`,
  perlaENARM: "Hipovolemia, sedimento poco activo y mejoría tras corregir la perfusión favorecen una causa prerrenal.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre lesión renal aguda y manejo de deshidratación.",
    internacional: "KDIGO AKI Guideline, 2012."
  },
  bibliografia: "KDIGO AKI Guideline, 2012; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-163",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda",
  subtema: "Obstrucción urinaria",
  dificultad: "Media",
  caso: `Varón de 76 años con hiperplasia prostática presenta anuria de 12 horas, dolor suprapúbico y creatinina en ascenso. La ecografía muestra vejiga distendida con abundante residuo posmiccional.`,
  pregunta: "¿Cuál es la intervención inicial más directamente dirigida a la causa?",
  opciones: [
    "Administrar glucocorticoides intravenosos",
    "Colocar una sonda vesical para descomprimir la vejiga, si no existe contraindicación",
    "Iniciar tratamiento inmunosupresor",
    "Administrar diurético de asa sin evaluar la obstrucción",
    "Indicar restricción hídrica estricta como único tratamiento"
  ],
  respuestaCorrecta: 1,
  explicacion: `La retención urinaria con vejiga distendida indica obstrucción de la salida vesical. La descompresión mediante cateterismo es la medida inicial habitual, seguida de vigilancia de diuresis, función renal, electrolitos y posible diuresis posobstructiva. Si no puede colocarse la sonda, se requiere valoración urológica urgente.`,
  perlaENARM: "Ante lesión renal aguda, siempre considera obstrucción; una vejiga distendida orienta a retención urinaria baja.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre hiperplasia prostática, retención urinaria y lesión renal aguda.",
    internacional: "KDIGO AKI Guideline, 2012."
  },
  bibliografia: "KDIGO AKI Guideline, 2012; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-164",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Definición de cronicidad",
  dificultad: "Baja",
  caso: `Mujer de 59 años presenta filtrado glomerular estimado de 52 mL/min/1.73 m² en dos determinaciones separadas por cuatro meses. No tiene datos clínicos de lesión renal aguda.`,
  pregunta: "¿Qué interpretación corresponde a estos resultados?",
  opciones: [
    "Función renal normal para cualquier edad",
    "Enfermedad renal crónica si la alteración persiste al menos tres meses",
    "Lesión renal aguda obligatoria",
    "Indicación inmediata de diálisis",
    "Síndrome nefrótico"
  ],
  respuestaCorrecta: 1,
  explicacion: `La enfermedad renal crónica se define por alteraciones estructurales o funcionales renales con implicaciones para la salud presentes durante al menos tres meses. Un filtrado glomerular menor de 60 mL/min/1.73 m² persistente cumple criterio diagnóstico, aun sin albuminuria demostrada. La clasificación completa requiere considerar categoría de filtrado, albuminuria y causa.`,
  perlaENARM: "La cronicidad de al menos tres meses diferencia ERC de una alteración renal aguda.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre diagnóstico y tratamiento de enfermedad renal crónica.",
    internacional: "KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of CKD."
  },
  bibliografia: "KDIGO CKD Guideline, 2024; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-165",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Albuminuria",
  dificultad: "Media",
  caso: `Varón de 55 años con diabetes tiene filtrado glomerular estimado de 82 mL/min/1.73 m² y cociente albúmina/creatinina urinario de 420 mg/g, persistente durante cuatro meses.`,
  pregunta: "¿Cómo se clasifica su categoría de albuminuria?",
  opciones: [
    "A1: normal o ligeramente aumentada",
    "A2: moderadamente aumentada",
    "A3: severamente aumentada",
    "No puede clasificarse con un cociente urinario",
    "La albuminuria excluye enfermedad renal crónica si el filtrado es mayor de 60"
  ],
  respuestaCorrecta: 2,
  explicacion: `KDIGO clasifica la albuminuria como A1 cuando el cociente albúmina/creatinina es menor de 30 mg/g, A2 entre 30 y 300 mg/g y A3 cuando supera 300 mg/g. La albuminuria persistente es un marcador de daño renal y riesgo cardiovascular incluso cuando el filtrado glomerular está relativamente conservado.`,
  perlaENARM: "Un cociente albúmina/creatinina mayor de 300 mg/g corresponde a A3 y señala riesgo renal y cardiovascular elevado.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre ERC y nefropatía diabética.",
    internacional: "KDIGO CKD Guideline, 2024."
  },
  bibliografia: "KDIGO CKD Guideline, 2024; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-166",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Complicaciones metabólicas",
  dificultad: "Baja",
  caso: `Paciente de 64 años con ERC avanzada presenta hemoglobina de 9.4 g/dL, volumen corpuscular medio normal, ferritina sin datos de deficiencia absoluta de hierro y ausencia de sangrado evidente.`,
  pregunta: "¿Qué mecanismo contribuye de forma importante a la anemia de la ERC?",
  opciones: [
    "Producción excesiva de eritropoyetina",
    "Disminución de la producción renal de eritropoyetina y alteraciones del metabolismo del hierro",
    "Hemólisis intravascular en todos los pacientes",
    "Aumento obligatorio de vitamina B12",
    "Pérdida exclusiva de plaquetas por orina"
  ],
  respuestaCorrecta: 1,
  explicacion: `La anemia de la ERC suele ser normocítica y normocrómica, y se relaciona principalmente con menor producción de eritropoyetina, inflamación, alteraciones de disponibilidad del hierro y menor supervivencia eritrocitaria. Antes de indicar agentes estimulantes de la eritropoyesis deben evaluarse hierro, pérdidas sanguíneas, deficiencias nutricionales y otras causas.`,
  perlaENARM: "La anemia en ERC es multifactorial; no debe atribuirse automáticamente a déficit de eritropoyetina sin evaluar hierro y otras causas.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre anemia asociada a enfermedad renal crónica.",
    internacional: "KDIGO guidance on anemia in CKD; consultar actualización vigente."
  },
  bibliografia: "KDIGO Anemia in CKD Guideline, 2012; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-167",
  especialidad: "Nefrología",
  tema: "Síndrome nefrítico",
  subtema: "Presentación clínica",
  dificultad: "Baja",
  caso: `Niño de 9 años presenta edema palpebral, orina color té, hipertensión y oliguria dos semanas después de una faringitis. El examen de orina muestra hematuria y cilindros eritrocitarios.`,
  pregunta: "¿Qué síndrome renal describe mejor esta presentación?",
  opciones: [
    "Síndrome nefrótico puro",
    "Síndrome nefrítico agudo",
    "Diabetes insípida",
    "Cistitis no complicada",
    "Acidosis tubular renal"
  ],
  respuestaCorrecta: 1,
  explicacion: `El síndrome nefrítico se caracteriza por hematuria glomerular, cilindros eritrocitarios, reducción variable del filtrado, oliguria, hipertensión y edema. El antecedente de infección faríngea puede orientar a glomerulonefritis postestreptocócica, aunque se requiere integrar el intervalo temporal, complemento y pruebas microbiológicas o serológicas.`,
  perlaENARM: "Hematuria glomerular, cilindros eritrocitarios, oliguria e hipertensión son hallazgos clásicos del síndrome nefrítico.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre glomerulonefritis postinfecciosa y síndrome nefrítico.",
    internacional: "KDIGO Clinical Practice Guideline for Glomerular Diseases, 2021."
  },
  bibliografia: "KDIGO Glomerular Diseases Guideline, 2021; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-168",
  especialidad: "Nefrología",
  tema: "Síndrome nefrótico",
  subtema: "Criterios clínicos",
  dificultad: "Baja",
  caso: `Mujer de 46 años presenta edema generalizado, albúmina sérica de 2.1 g/dL, proteinuria de 5.2 g/día e hipercolesterolemia. La creatinina es de 0.9 mg/dL.`,
  pregunta: "¿Qué hallazgo define mejor el componente central del síndrome nefrótico?",
  opciones: [
    "Proteinuria de rango nefrótico con hipoalbuminemia",
    "Hematuria microscópica aislada",
    "Hipernatremia con poliuria",
    "Leucocituria sin proteinuria",
    "Creatinina elevada en todos los casos"
  ],
  respuestaCorrecta: 0,
  explicacion: `El síndrome nefrótico se caracteriza por proteinuria intensa, hipoalbuminemia y, con frecuencia, edema e hiperlipidemia. La función renal puede estar conservada, por lo que una creatinina normal no excluye el síndrome. La evaluación posterior busca la causa primaria o secundaria y complicaciones como trombosis e infección.`,
  perlaENARM: "El síndrome nefrótico no requiere creatinina elevada; la proteinuria intensa e hipoalbuminemia son centrales.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre síndrome nefrótico en adultos.",
    internacional: "KDIGO Glomerular Diseases Guideline, 2021."
  },
  bibliografia: "KDIGO Glomerular Diseases Guideline, 2021; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-169",
  especialidad: "Nefrología",
  tema: "Glomerulonefritis rápidamente progresiva",
  subtema: "Definición clínica",
  dificultad: "Media",
  caso: `Varón de 43 años presenta creatinina que aumenta de 1.1 a 4.7 mg/dL en tres semanas, hematuria dismórfica, cilindros eritrocitarios y proteinuria. La ecografía muestra riñones de tamaño conservado.`,
  pregunta: "¿Qué diagnóstico sindromático debe considerarse con mayor urgencia?",
  opciones: [
    "Glomerulonefritis rápidamente progresiva",
    "Cistitis recurrente",
    "Nefrolitiasis asintomática",
    "Enfermedad renal crónica estable sin actividad",
    "Diabetes insípida central"
  ],
  respuestaCorrecta: 0,
  explicacion: `El deterioro rápido de la función renal acompañado de sedimento glomerular activo obliga a sospechar glomerulonefritis rápidamente progresiva. Requiere evaluación urgente con serologías dirigidas, complemento, exclusión de infección y biopsia renal cuando sea factible. La identificación temprana importa porque algunas causas requieren inmunosupresión rápida.`,
  perlaENARM: "Creatinina que aumenta rápidamente más cilindros eritrocitarios es una urgencia nefrológica.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre glomerulonefritis rápidamente progresiva.",
    internacional: "KDIGO Glomerular Diseases Guideline, 2021; KDIGO ANCA-Associated Vasculitis Guideline, 2024."
  },
  bibliografia: "KDIGO Glomerular Diseases, 2021; KDIGO ANCA-Associated Vasculitis, 2024."
},
{
  id: "NEF-170",
  especialidad: "Nefrología",
  tema: "Nefropatía diabética",
  subtema: "Detección temprana",
  dificultad: "Baja",
  caso: `Paciente de 52 años con diabetes tipo 2 de ocho años de evolución tiene creatinina normal y no refiere síntomas urinarios.`,
  pregunta: "¿Qué estrategia de detección renal debe realizarse de forma periódica?",
  opciones: [
    "Solo medir urea cuando aparezca edema",
    "Evaluar filtrado glomerular estimado y cociente albúmina/creatinina urinario",
    "Realizar biopsia renal anual a todos los pacientes",
    "Solicitar tomografía contrastada cada seis meses",
    "Medir exclusivamente glucosa en orina"
  ],
  respuestaCorrecta: 1,
  explicacion: `La detección de enfermedad renal en diabetes requiere evaluar tanto el filtrado glomerular estimado como la albuminuria, porque cualquiera de los dos puede alterarse de forma independiente. En diabetes tipo 2 se recomienda iniciar la evaluación desde el diagnóstico y repetirla periódicamente según los resultados y el riesgo clínico.`,
  perlaENARM: "En diabetes tipo 2, solicita eGFR y cociente albúmina/creatinina; la creatinina aislada no basta.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre diabetes mellitus y enfermedad renal diabética.",
    internacional: "KDIGO 2022 Diabetes Management in CKD; KDIGO CKD Guideline, 2024."
  },
  bibliografia: "KDIGO Diabetes Management in CKD, 2022; KDIGO CKD, 2024."
},
{
  id: "NEF-171",
  especialidad: "Nefrología",
  tema: "Hiponatremia",
  subtema: "Evaluación inicial",
  dificultad: "Baja",
  caso: `Mujer de 74 años tratada con tiazida presenta náusea y confusión leve. El sodio sérico es de 122 mmol/L y la glucosa de 100 mg/dL.`,
  pregunta: "¿Cuál es el primer paso para clasificar correctamente la hiponatremia?",
  opciones: [
    "Asumir que toda hiponatremia es por SIADH",
    "Confirmar la tonicidad sérica y valorar el estado de volumen y la gravedad de los síntomas",
    "Administrar solución salina hipertónica a todos los pacientes",
    "Restringir el agua sin investigar la causa",
    "Solicitar biopsia renal"
  ],
  respuestaCorrecta: 1,
  explicacion: `La evaluación inicial distingue hiponatremia hipotónica de estados con osmolalidad normal o elevada. Después se integran gravedad de síntomas, duración probable, estado de volumen, medicamentos y estudios urinarios. Las tiazidas son una causa frecuente y pueden provocar hiponatremia clínicamente significativa.`,
  perlaENARM: "Antes de tratar, confirma hiponatremia hipotónica y define gravedad, duración y estado de volumen.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre diagnóstico y tratamiento de hiponatremia.",
    internacional: "European Clinical Practice Guideline on Diagnosis and Treatment of Hyponatraemia, 2014."
  },
  bibliografia: "Spasovski G et al. Eur J Endocrinol. 2014;170:G1-G47; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-172",
  especialidad: "Nefrología",
  tema: "Hiponatremia",
  subtema: "Manifestaciones neurológicas graves",
  dificultad: "Media",
  caso: `Varón de 60 años presenta convulsiones generalizadas y sodio sérico de 112 mmol/L. Se sospecha hiponatremia hipotónica sintomática grave.`,
  pregunta: "¿Qué medida inicial está indicada para tratar los síntomas neurológicos graves?",
  opciones: [
    "Agua libre por vía oral",
    "Solución salina hipertónica al 3% con bolos protocolizados y vigilancia estrecha",
    "Restricción de sodio durante 48 horas",
    "Dextrosa al 5% a velocidad rápida",
    "Corrección completa del sodio a 140 mmol/L en pocas horas"
  ],
  respuestaCorrecta: 1,
  explicacion: `La hiponatremia con convulsiones es una emergencia. La solución salina hipertónica al 3% en bolos protocolizados busca aumentar inicialmente el sodio aproximadamente 4–6 mmol/L para reducir el edema cerebral y controlar los síntomas. Después se limita la velocidad de corrección para evitar desmielinización osmótica, con monitorización frecuente de sodio y diuresis.`,
  perlaENARM: "En hiponatremia con convulsiones, busca una corrección inicial pequeña para mejorar síntomas; evita normalizar el sodio rápidamente.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre hiponatremia sintomática grave.",
    internacional: "European Clinical Practice Guideline on Hyponatraemia, 2014; protocolos hospitalarios vigentes."
  },
  bibliografia: "Spasovski G et al. Eur J Endocrinol. 2014;170:G1-G47."
},
{
  id: "NEF-173",
  especialidad: "Nefrología",
  tema: "Hipernatremia",
  subtema: "Déficit de agua",
  dificultad: "Baja",
  caso: `Paciente de 80 años con acceso limitado a agua presenta letargo, mucosas secas y sodio sérico de 158 mmol/L. No tiene signos de edema pulmonar.`,
  pregunta: "¿Qué alteración explica habitualmente la hipernatremia en este escenario?",
  opciones: [
    "Exceso relativo de agua corporal",
    "Déficit de agua en relación con el sodio corporal",
    "Pérdida aislada de albúmina",
    "Aumento exclusivo de potasio intracelular",
    "Exceso de agua libre por SIADH"
  ],
  respuestaCorrecta: 1,
  explicacion: `La hipernatremia refleja un exceso relativo de sodio respecto al agua y suele deberse a déficit de agua libre, pérdidas insensibles o gastrointestinales, diuresis osmótica o incapacidad para acceder al agua. La reposición debe considerar duración, estado hemodinámico, causa y vigilancia del sodio para evitar cambios excesivamente rápidos.`,
  perlaENARM: "La hipernatremia generalmente indica déficit relativo de agua; la causa y la duración determinan la estrategia de corrección.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre trastornos hidroelectrolíticos.",
    internacional: "Guías clínicas internacionales sobre evaluación y manejo de hipernatremia."
  },
  bibliografia: "Harrison's Principles of Internal Medicine, 19.ª ed.; textos de fisiología y trastornos hidroelectrolíticos."
},
{
  id: "NEF-174",
  especialidad: "Nefrología",
  tema: "Hiperkalemia",
  subtema: "Cambios electrocardiográficos",
  dificultad: "Media",
  caso: `Varón de 67 años con ERC y tratamiento con losartán presenta debilidad muscular. El potasio sérico es de 6.8 mmol/L y el electrocardiograma muestra ondas T picudas y ensanchamiento del QRS.`,
  pregunta: "¿Cuál es la intervención inmediata que estabiliza la membrana miocárdica?",
  opciones: [
    "Gluconato de calcio intravenoso",
    "Furosemida oral como única medida",
    "Resina de intercambio como único tratamiento inmediato",
    "Restricción dietética de potasio durante una semana",
    "Bicarbonato oral sin otras intervenciones"
  ],
  respuestaCorrecta: 0,
  explicacion: `La hiperkalemia con alteraciones electrocardiográficas requiere calcio intravenoso para estabilizar la membrana cardíaca. El calcio no reduce el potasio sérico; deben añadirse medidas para desplazar potasio al interior celular, como insulina con glucosa y, según el contexto, beta-2 agonistas, además de estrategias para eliminarlo y tratar la causa.`,
  perlaENARM: "Calcio estabiliza el miocardio; insulina y beta-2 agonistas desplazan potasio al interior celular, pero no lo eliminan del organismo.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre diagnóstico y tratamiento de hiperkalemia.",
    internacional: "KDIGO conference reports and clinical guidance on acute hyperkalemia."
  },
  bibliografia: "KDIGO guidance on acute hyperkalemia; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-175",
  especialidad: "Nefrología",
  tema: "Hipokalemia",
  subtema: "Pérdidas renales de potasio",
  dificultad: "Media",
  caso: `Mujer de 45 años presenta debilidad, potasio de 2.7 mmol/L, bicarbonato de 32 mmol/L y presión arterial elevada. No refiere vómitos ni diarrea.`,
  pregunta: "¿Qué evaluación ayuda a distinguir pérdidas renales de potasio de pérdidas extrarrenales?",
  opciones: [
    "Medición de potasio urinario en el contexto clínico",
    "Determinación aislada de bilirrubina",
    "Radiografía de tórax",
    "Concentración sérica de albúmina exclusivamente",
    "Prueba de embarazo como único estudio"
  ],
  respuestaCorrecta: 0,
  explicacion: `El potasio urinario ayuda a identificar si el riñón está excretando potasio de manera inapropiada durante la hipokalemia. La alcalosis metabólica y la hipertensión orientan además a causas como exceso de mineralocorticoides, aunque deben interpretarse junto con medicamentos, estado de volumen y magnesio.`,
  perlaENARM: "En hipokalemia, la excreción urinaria de potasio ayuda a diferenciar pérdidas renales de extrarrenales.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre trastornos del potasio.",
    internacional: "Guías clínicas de evaluación de hipokalemia y trastornos electrolíticos."
  },
  bibliografia: "Harrison's Principles of Internal Medicine, 19.ª ed.; textos de fisiología renal y electrolitos."
},
{
  id: "NEF-176",
  especialidad: "Nefrología",
  tema: "Acidosis metabólica",
  subtema: "Brecha aniónica",
  dificultad: "Baja",
  caso: `Varón de 32 años con diabetes tipo 1 presenta náuseas, respiración profunda y glucosa de 420 mg/dL. Gasometría: pH 7.18, bicarbonato 10 mmol/L y PCO2 23 mmHg. El sodio es 138 mmol/L y el cloro 100 mmol/L.`,
  pregunta: "¿Cuál es la brecha aniónica calculada sin incluir potasio?",
  opciones: [
    "8 mmol/L",
    "12 mmol/L",
    "18 mmol/L",
    "28 mmol/L",
    "38 mmol/L"
  ],
  respuestaCorrecta: 3,
  explicacion: `La brecha aniónica es sodio menos la suma de cloro y bicarbonato: 138 − (100 + 10) = 28 mmol/L. Es una brecha elevada, compatible con acumulación de aniones no medidos, como los cuerpos cetónicos en cetoacidosis diabética. La interpretación completa debe considerar albúmina, lactato y contexto clínico.`,
  perlaENARM: "Brecha aniónica = Na − (Cl + HCO3); una brecha elevada sugiere aniones no medidos.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre cetoacidosis diabética y trastornos ácido-base.",
    internacional: "ADA consensus guidance on hyperglycemic crises; consultar actualización vigente."
  },
  bibliografia: "Harrison's Principles of Internal Medicine, 19.ª ed.; guías internacionales sobre crisis hiperglucémicas."
},
{
  id: "NEF-177",
  especialidad: "Nefrología",
  tema: "Alcalosis metabólica",
  subtema: "Respuesta al cloro",
  dificultad: "Media",
  caso: `Paciente de 49 años con vómitos durante cuatro días presenta pH de 7.50, bicarbonato de 36 mmol/L y cloro urinario bajo. Está hipotenso al ponerse de pie.`,
  pregunta: "¿Qué mecanismo explica mejor la persistencia de la alcalosis?",
  opciones: [
    "Pérdida de ácido gástrico y contracción del volumen con depleción de cloro",
    "Exceso de ácidos orgánicos por cetoacidosis",
    "Retención primaria de dióxido de carbono",
    "Pérdida aislada de bicarbonato por diarrea",
    "Exceso de agua libre sin pérdida de electrolitos"
  ],
  respuestaCorrecta: 0,
  explicacion: `Los vómitos producen pérdida de ácido clorhídrico, contracción del volumen extracelular y depleción de cloro y potasio. El cloro urinario bajo suele orientar a una alcalosis metabólica sensible al cloro, que habitualmente mejora al corregir el déficit de volumen y cloro cuando no existen contraindicaciones.`,
  perlaENARM: "Alcalosis metabólica con cloro urinario bajo y vómitos sugiere depleción de cloro y volumen.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre trastornos ácido-base y deshidratación.",
    internacional: "Guías clínicas internacionales sobre evaluación de alcalosis metabólica."
  },
  bibliografia: "Harrison's Principles of Internal Medicine, 19.ª ed.; Clinical Physiology of Acid-Base and Electrolyte Disorders."
},
{
  id: "NEF-178",
  especialidad: "Nefrología",
  tema: "Trastornos ácido-base",
  subtema: "Compensación respiratoria",
  dificultad: "Media",
  caso: `Mujer de 38 años con diarrea abundante presenta pH 7.25, bicarbonato 12 mmol/L y PCO2 26 mmHg.`,
  pregunta: "Según la fórmula de Winter, ¿cuál es la PCO2 esperada aproximadamente?",
  opciones: [
    "10 ± 2 mmHg",
    "18 ± 2 mmHg",
    "26 ± 2 mmHg",
    "40 ± 2 mmHg",
    "52 ± 2 mmHg"
  ],
  respuestaCorrecta: 2,
  explicacion: `La fórmula de Winter estima la PCO2 esperada en acidosis metabólica: 1.5 × bicarbonato + 8 ± 2. Para bicarbonato de 12 mmol/L, el resultado es 26 ± 2 mmHg. La PCO2 observada de 26 mmHg corresponde a compensación respiratoria apropiada; valores claramente superiores sugieren acidosis respiratoria agregada.`,
  perlaENARM: "Fórmula de Winter: PCO2 esperada = 1.5 × HCO3 + 8 ± 2.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre interpretación de gasometría y trastornos ácido-base.",
    internacional: "Guías clínicas internacionales de interpretación ácido-base."
  },
  bibliografia: "Harrison's Principles of Internal Medicine, 19.ª ed.; Clinical Physiology of Acid-Base and Electrolyte Disorders."
},
{
  id: "NEF-179",
  especialidad: "Nefrología",
  tema: "Indicaciones de diálisis",
  subtema: "Emergencias metabólicas",
  dificultad: "Media",
  caso: `Paciente con lesión renal aguda presenta potasio de 7.1 mmol/L, ensanchamiento del QRS y persistencia de hiperkalemia pese al tratamiento médico inicial. Tiene oliguria marcada.`,
  pregunta: "¿Qué indicación de terapia de reemplazo renal está presente?",
  opciones: [
    "Creatinina mayor de 2 mg/dL por sí sola",
    "Hiperkalemia grave refractaria con repercusión electrocardiográfica",
    "Proteinuria aislada",
    "Hematuria microscópica sin deterioro funcional",
    "Urea ligeramente elevada en paciente asintomático"
  ],
  respuestaCorrecta: 1,
  explicacion: `La hiperkalemia grave que no responde al tratamiento médico y produce alteraciones electrocardiográficas constituye una indicación urgente de terapia de reemplazo renal. También se consideran acidosis refractaria, sobrecarga de volumen con compromiso respiratorio y complicaciones urémicas. La decisión no depende de una cifra aislada de creatinina.`,
  perlaENARM: "La indicación de diálisis depende de complicaciones y contexto clínico, no de una cifra aislada de creatinina.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre indicaciones de terapia de reemplazo renal en lesión renal aguda.",
    internacional: "KDIGO AKI Guideline, 2012."
  },
  bibliografia: "KDIGO AKI Guideline, 2012; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-180",
  especialidad: "Nefrología",
  tema: "Nefritis intersticial",
  subtema: "Origen farmacológico",
  dificultad: "Media",
  caso: `Mujer de 57 años inicia un inhibidor de la bomba de protones y, tres semanas después, presenta aumento de creatinina, piuria estéril y proteinuria leve. No tiene obstrucción en la ecografía.`,
  pregunta: "¿Cuál es el diagnóstico que debe considerarse?",
  opciones: [
    "Nefritis intersticial aguda asociada a fármacos",
    "Síndrome nefrótico por cambios mínimos confirmado",
    "Glomerulonefritis anti-MBG",
    "Infarto renal bilateral obligatorio",
    "Enfermedad renal poliquística"
  ],
  respuestaCorrecta: 0,
  explicacion: `La nefritis intersticial aguda inducida por medicamentos puede manifestarse con lesión renal aguda, piuria estéril y proteinuria generalmente no nefrótica. La tríada clásica de fiebre, exantema y eosinofilia aparece solo en una parte de los casos. La sospecha clínica exige revisar fármacos y retirar el agente responsable cuando sea posible; la biopsia se reserva para situaciones en las que el diagnóstico sea incierto o cambie el tratamiento.`,
  perlaENARM: "La ausencia de fiebre, exantema o eosinofilia no descarta nefritis intersticial farmacológica.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre lesión renal aguda y nefritis intersticial.",
    internacional: "KDIGO AKI Guideline, 2012."
  },
  bibliografia: "KDIGO AKI Guideline, 2012; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-181",
  especialidad: "Nefrología",
  tema: "Necrosis tubular aguda",
  subtema: "Sedimento urinario",
  dificultad: "Baja",
  caso: `Paciente de 63 años presenta lesión renal aguda después de choque séptico. El sedimento urinario contiene cilindros granulares pigmentados y células epiteliales tubulares.`,
  pregunta: "¿Qué diagnóstico es más probable?",
  opciones: [
    "Necrosis tubular aguda",
    "Cistitis no complicada",
    "Nefropatía membranosa",
    "Diabetes insípida central",
    "Síndrome de Alport"
  ],
  respuestaCorrecta: 0,
  explicacion: `La lesión isquémica o tóxica de las células tubulares puede causar necrosis tubular aguda. Los cilindros granulares pigmentados, descritos clásicamente como lodosos, y las células epiteliales tubulares apoyan este diagnóstico. El manejo se centra en tratar la causa, optimizar la perfusión, evitar nefrotóxicos y vigilar complicaciones.`,
  perlaENARM: "Cilindros granulares lodosos en un paciente con lesión renal aguda sugieren necrosis tubular aguda.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre lesión renal aguda.",
    internacional: "KDIGO AKI Guideline, 2012."
  },
  bibliografia: "KDIGO AKI Guideline, 2012; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-182",
  especialidad: "Nefrología",
  tema: "Poliquistosis renal",
  subtema: "Manifestaciones clínicas",
  dificultad: "Baja",
  caso: `Varón de 45 años con hipertensión presenta dolor lumbar intermitente y antecedente familiar de enfermedad renal terminal. La ecografía muestra múltiples quistes en ambos riñones y aumento bilateral del tamaño renal.`,
  pregunta: "¿Qué enfermedad hereditaria debe sospecharse?",
  opciones: [
    "Poliquistosis renal autosómica dominante",
    "Síndrome nefrótico por cambios mínimos",
    "Nefritis intersticial aguda",
    "Enfermedad anti-MBG",
    "Acidosis tubular distal aislada"
  ],
  respuestaCorrecta: 0,
  explicacion: `La poliquistosis renal autosómica dominante suele manifestarse en adultos con quistes renales bilaterales, riñones aumentados de tamaño, hipertensión y antecedentes familiares. También puede asociarse con quistes hepáticos, hematuria y aneurismas intracraneales en pacientes seleccionados. La evaluación integra historia familiar e imagen; las pruebas genéticas se reservan para situaciones concretas.`,
  perlaENARM: "Quistes bilaterales, riñones aumentados de tamaño y antecedente familiar orientan a poliquistosis renal autosómica dominante.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre enfermedad renal hereditaria y poliquistosis renal.",
    internacional: "KDIGO 2025 Clinical Practice Guideline for ADPKD."
  },
  bibliografia: "KDIGO ADPKD Guideline, 2025; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-183",
  especialidad: "Nefrología",
  tema: "Nefrolitiasis",
  subtema: "Cólico renal",
  dificultad: "Baja",
  caso: `Varón de 34 años presenta dolor súbito en flanco derecho irradiado a la ingle, inquietud y hematuria microscópica. Está afebril y hemodinámicamente estable.`,
  pregunta: "¿Cuál es el diagnóstico clínico más probable?",
  opciones: [
    "Cólico ureteral por litiasis",
    "Glomerulonefritis rápidamente progresiva",
    "Síndrome nefrótico",
    "Pielonefritis enfisematosa confirmada",
    "Poliquistosis renal"
  ],
  respuestaCorrecta: 0,
  explicacion: `El dolor cólico en flanco con irradiación inguinal y hematuria es característico de litiasis ureteral. La imagen confirma localización, tamaño y posible obstrucción; la tomografía sin contraste es muy sensible en adultos, mientras que la ecografía puede preferirse en embarazo y otras circunstancias. Fiebre, sepsis, anuria o riñón único obstruido requieren evaluación urgente.`,
  perlaENARM: "Cólico renal con fiebre o datos de sepsis sugiere obstrucción infectada, una urgencia urológica.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre diagnóstico y tratamiento de urolitiasis.",
    internacional: "EAU Guidelines on Urolithiasis, edición vigente."
  },
  bibliografia: "European Association of Urology Guidelines on Urolithiasis; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-184",
  especialidad: "Nefrología",
  tema: "Nefrolitiasis",
  subtema: "Composición de cálculos",
  dificultad: "Media",
  caso: `Mujer de 42 años presenta cálculos recurrentes. El análisis del cálculo revela oxalato de calcio. La calcemia es normal y no hay infección urinaria.`,
  pregunta: "¿Qué medida general puede reducir el riesgo de recurrencia en la mayoría de los pacientes formadores de cálculos de calcio?",
  opciones: [
    "Reducir el consumo de agua para evitar diuresis",
    "Aumentar la ingesta de líquidos para lograr mayor volumen urinario y mantener calcio dietético normal",
    "Eliminar completamente el calcio de la dieta",
    "Consumir grandes cantidades de sodio",
    "Usar antibióticos de manera indefinida"
  ],
  respuestaCorrecta: 1,
  explicacion: `Una ingesta adecuada de líquidos para aumentar el volumen urinario es una de las medidas más importantes para prevenir recurrencias. También suele recomendarse mantener un consumo dietético normal de calcio, reducir el exceso de sodio y ajustar oxalato, proteína y otras medidas según la composición del cálculo y la evaluación metabólica. Restringir excesivamente el calcio puede aumentar la absorción intestinal de oxalato.`,
  perlaENARM: "Para prevenir cálculos de calcio: aumenta líquidos, evita exceso de sodio y no restrinjas indiscriminadamente el calcio dietético.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre prevención de recurrencia de urolitiasis.",
    internacional: "EAU Guidelines on Urolithiasis, edición vigente."
  },
  bibliografia: "European Association of Urology Guidelines on Urolithiasis; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-185",
  especialidad: "Nefrología",
  tema: "Síndrome hemolítico urémico",
  subtema: "Tríada clínica",
  dificultad: "Baja",
  caso: `Niño de 5 años desarrolla palidez, oliguria y equimosis después de varios días de diarrea sanguinolenta. La biometría muestra anemia, trombocitopenia y esquistocitos; la creatinina está elevada.`,
  pregunta: "¿Qué diagnóstico integra mejor los hallazgos?",
  opciones: [
    "Síndrome hemolítico urémico",
    "Púrpura trombocitopénica inmune aislada",
    "Hemofilia A",
    "Síndrome nefrótico puro",
    "Nefrolitiasis bilateral"
  ],
  respuestaCorrecta: 0,
  explicacion: `El síndrome hemolítico urémico se caracteriza por anemia hemolítica microangiopática, trombocitopenia y lesión renal aguda. En niños, una causa importante es la infección por bacterias productoras de toxina Shiga, asociada con diarrea sanguinolenta. El diagnóstico requiere confirmar hemólisis, evaluar función renal y plaquetas e investigar la etiología.`,
  perlaENARM: "Anemia hemolítica microangiopática + trombocitopenia + lesión renal aguda conforman la tríada del síndrome hemolítico urémico.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre síndrome hemolítico urémico pediátrico.",
    internacional: "KDIGO guidance on thrombotic microangiopathies; guías pediátricas vigentes."
  },
  bibliografia: "Harrison's Principles of Internal Medicine, 19.ª ed.; KDIGO guidance on thrombotic microangiopathies."
},
{
  id: "NEF-186",
  especialidad: "Nefrología",
  tema: "Microangiopatía trombótica",
  subtema: "Diagnóstico diferencial",
  dificultad: "Media",
  caso: `Mujer de 36 años presenta confusión, fiebre, trombocitopenia marcada, anemia hemolítica con esquistocitos y lesión renal moderada. El tiempo de protrombina y el TTPa no están prolongados.`,
  pregunta: "¿Qué diagnóstico debe considerarse urgentemente por su riesgo vital y tratamiento específico?",
  opciones: [
    "Púrpura trombótica trombocitopénica",
    "Anemia ferropénica aislada",
    "Nefropatía diabética",
    "Cistitis bacteriana",
    "Síndrome nefrótico por cambios mínimos"
  ],
  respuestaCorrecta: 0,
  explicacion: `La púrpura trombótica trombocitopénica es una microangiopatía trombótica asociada típicamente a deficiencia grave de ADAMTS13. La combinación de trombocitopenia, hemólisis microangiopática y manifestaciones neurológicas debe activar una evaluación urgente. Si la sospecha clínica es alta, el tratamiento específico no debe retrasarse esperando el resultado de ADAMTS13.`,
  perlaENARM: "Ante sospecha alta de PTT, solicita ADAMTS13 y activa tratamiento urgente sin esperar la confirmación definitiva.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre púrpura trombótica trombocitopénica y microangiopatías.",
    internacional: "International Society on Thrombosis and Haemostasis guidance on TTP."
  },
  bibliografia: "ISTH Guidelines for the Diagnosis and Treatment of Thrombotic Thrombocytopenic Purpura; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-187",
  especialidad: "Nefrología",
  tema: "Vasculitis renal",
  subtema: "Síndrome pulmón-riñón",
  dificultad: "Media",
  caso: `Varón de 60 años presenta hemoptisis, disnea, creatinina ascendente, hematuria dismórfica y cilindros eritrocitarios. La radiografía muestra opacidades alveolares bilaterales.`,
  pregunta: "¿Qué enfoque diagnóstico es prioritario?",
  opciones: [
    "Investigar de forma urgente causas de síndrome pulmón-riñón, incluyendo ANCA y anticuerpos anti-MBG",
    "Atribuir la hematuria a una infección urinaria sin más estudios",
    "Iniciar tratamiento para nefrolitiasis",
    "Descartar enfermedad glomerular porque existe hemoptisis",
    "Solicitar únicamente una prueba de función tiroidea"
  ],
  respuestaCorrecta: 0,
  explicacion: `La coexistencia de hemorragia alveolar y glomerulonefritis obliga a investigar vasculitis asociada a ANCA y enfermedad anti-MBG, además de causas infecciosas y otras enfermedades sistémicas. Se requiere evaluación urgente de oxigenación, función renal, serologías y, cuando sea factible, biopsia. El tratamiento depende de la etiología y gravedad, y no debe demorarse de manera injustificada cuando la sospecha es alta.`,
  perlaENARM: "Hemoptisis más sedimento glomerular activo constituye una señal de alarma para síndrome pulmón-riñón.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre vasculitis sistémicas y glomerulonefritis rápidamente progresiva.",
    internacional: "KDIGO ANCA-Associated Vasculitis Guideline, 2024; KDIGO Glomerular Diseases, 2021."
  },
  bibliografia: "KDIGO ANCA-Associated Vasculitis, 2024; KDIGO Glomerular Diseases, 2021."
},
{
  id: "NEF-188",
  especialidad: "Nefrología",
  tema: "Lesión renal aguda",
  subtema: "Fármacos nefrotóxicos",
  dificultad: "Media",
  caso: `Paciente de 70 años con ERC toma un AINE diariamente y comienza tratamiento con un IECA. Tras presentar diarrea y disminución de la ingesta, desarrolla aumento de creatinina.`,
  pregunta: "¿Qué mecanismo explica el mayor riesgo de lesión renal aguda?",
  opciones: [
    "Dilatación simultánea de ambas arteriolas glomerulares que aumenta siempre el filtrado",
    "Alteración de la autorregulación glomerular por inhibición de prostaglandinas y reducción del tono eferente",
    "Depósito obligatorio de inmunocomplejos en todos los glomérulos",
    "Obstrucción ureteral causada directamente por los dos fármacos",
    "Aumento de eritropoyetina con hiperviscosidad"
  ],
  respuestaCorrecta: 1,
  explicacion: `Los AINE reducen la síntesis de prostaglandinas y pueden favorecer vasoconstricción de la arteriola aferente, especialmente durante hipovolemia. Los IECA dilatan la arteriola eferente y pueden reducir la presión intraglomerular. La combinación, en presencia de depleción de volumen y factores adicionales, puede precipitar lesión renal aguda.`,
  perlaENARM: "AINE, bloqueo del sistema renina-angiotensina y diuréticos o hipovolemia pueden combinarse para comprometer la perfusión y el filtrado renal.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre prevención de lesión renal aguda y uso seguro de medicamentos.",
    internacional: "KDIGO AKI Guideline, 2012; KDIGO CKD Guideline, 2024."
  },
  bibliografia: "KDIGO AKI Guideline, 2012; KDIGO CKD Guideline, 2024."
},
{
  id: "NEF-189",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Progresión y nefroprotección",
  dificultad: "Media",
  caso: `Paciente de 58 años con diabetes, hipertensión, eGFR de 48 mL/min/1.73 m² y albuminuria persistente recibe tratamiento antihipertensivo. No tiene embarazo, hiperkalemia no controlada ni antecedente de angioedema.`,
  pregunta: "¿Qué grupo farmacológico suele ser prioritario cuando existe albuminuria y una indicación clínica apropiada?",
  opciones: [
    "IECA o ARA-II, con vigilancia de creatinina y potasio",
    "AINE de uso diario",
    "Combinación rutinaria de dos bloqueadores del sistema renina-angiotensina",
    "Antibiótico de amplio espectro indefinido",
    "Glucocorticoides sistémicos como nefroprotección"
  ],
  respuestaCorrecta: 0,
  explicacion: `Los IECA o ARA-II reducen la presión intraglomerular y la albuminuria en pacientes apropiados con ERC, particularmente con albuminuria significativa. Se debe vigilar creatinina y potasio después del inicio o ajuste. No se recomienda combinar rutinariamente IECA y ARA-II porque aumenta el riesgo de hiperkalemia, hipotensión y lesión renal aguda sin beneficio neto suficiente.`,
  perlaENARM: "IECA o ARA-II pueden ser nefroprotectores en ERC albuminúrica; monitoriza potasio y creatinina tras iniciar o ajustar.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre hipertensión, diabetes y ERC.",
    internacional: "KDIGO CKD Guideline, 2024; KDIGO Diabetes Management in CKD, 2022."
  },
  bibliografia: "KDIGO CKD Guideline, 2024; KDIGO Diabetes Management in CKD, 2022."
},
{
  id: "NEF-190",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Inhibidores SGLT2",
  dificultad: "Media",
  caso: `Varón de 63 años con diabetes tipo 2, ERC y albuminuria inicia un inhibidor SGLT2. Dos semanas después, el filtrado estimado disminuye ligeramente, sin hipotensión, deshidratación ni otros datos de lesión renal aguda.`,
  pregunta: "¿Cuál es la interpretación más adecuada de una disminución inicial pequeña y estable del filtrado?",
  opciones: [
    "Demuestra nefrotoxicidad irreversible y obliga siempre a suspenderlo",
    "Puede reflejar el efecto hemodinámico inicial esperado; requiere valorar magnitud, síntomas y otros datos clínicos",
    "Confirma una glomerulonefritis rápidamente progresiva",
    "Indica necesariamente obstrucción bilateral",
    "Es una indicación inmediata de diálisis"
  ],
  respuestaCorrecta: 1,
  explicacion: `Los inhibidores SGLT2 reducen la presión intraglomerular mediante mecanismos hemodinámicos y pueden producir una caída inicial modesta del eGFR. Este cambio no equivale por sí solo a lesión renal aguda ni obliga a suspender el tratamiento. Si el descenso es pronunciado o se acompaña de hipovolemia, hipotensión u otros hallazgos, debe investigarse una causa adicional.`,
  perlaENARM: "Una caída inicial modesta del eGFR con iSGLT2 puede ser hemodinámica; evalúa la magnitud y el contexto antes de suspender.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre diabetes mellitus y nefroprotección.",
    internacional: "KDIGO Diabetes Management in CKD, 2022; KDIGO CKD Guideline, 2024."
  },
  bibliografia: "KDIGO Diabetes Management in CKD, 2022; KDIGO CKD Guideline, 2024."
},
{
  id: "NEF-191",
  especialidad: "Nefrología",
  tema: "Síndrome nefrítico",
  subtema: "Complemento sérico",
  dificultad: "Media",
  caso: `Niño de 8 años presenta edema, hipertensión y hematuria dos semanas después de una infección faríngea. El C3 sérico está disminuido y el C4 se encuentra dentro del intervalo de referencia.`,
  pregunta: "¿Qué etiología es compatible con el contexto clínico y el patrón de complemento?",
  opciones: [
    "Glomerulonefritis postestreptocócica",
    "Nefropatía membranosa primaria como diagnóstico seguro",
    "Enfermedad de cambios mínimos aislada",
    "Síndrome de Alport",
    "Diabetes insípida nefrogénica"
  ],
  respuestaCorrecta: 0,
  explicacion: `La glomerulonefritis postestreptocócica puede aparecer después de una infección faríngea o cutánea y suele asociarse a consumo de C3. La evolución clínica y la recuperación del complemento ayudan a valorar el curso esperado; una hipocomplementemia persistente o un deterioro atípico obliga a reconsiderar el diagnóstico.`,
  perlaENARM: "Síndrome nefrítico posterior a infección, con C3 bajo, orienta a glomerulonefritis postinfecciosa.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre glomerulonefritis postinfecciosa.",
    internacional: "KDIGO Glomerular Diseases Guideline, 2021."
  },
  bibliografia: "KDIGO Glomerular Diseases Guideline, 2021; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-192",
  especialidad: "Nefrología",
  tema: "Síndrome nefrótico",
  subtema: "Complicaciones trombóticas",
  dificultad: "Media",
  caso: `Varón de 50 años con síndrome nefrótico por glomerulopatía presenta dolor súbito en flanco, hematuria y deterioro de la función renal. La albúmina sérica es de 1.8 g/dL.`,
  pregunta: "¿Qué complicación debe considerarse, especialmente ante un síndrome nefrótico intenso?",
  opciones: [
    "Trombosis de la vena renal",
    "Diabetes insípida central",
    "Cistitis simple como explicación obligatoria",
    "Hiperparatiroidismo primario",
    "Enfermedad de Parkinson"
  ],
  respuestaCorrecta: 0,
  explicacion: `El síndrome nefrótico aumenta el riesgo de tromboembolismo por pérdida urinaria de proteínas anticoagulantes, cambios en factores de coagulación y otros mecanismos. La trombosis de la vena renal puede manifestarse con dolor en flanco, hematuria y deterioro renal, aunque la presentación es variable. La evaluación por imagen y el tratamiento dependen de la estabilidad y del riesgo hemorrágico.`,
  perlaENARM: "La hipoalbuminemia intensa en síndrome nefrótico aumenta el riesgo trombótico; dolor en flanco y hematuria obligan a considerarlo.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre síndrome nefrótico y complicaciones tromboembólicas.",
    internacional: "KDIGO Glomerular Diseases Guideline, 2021."
  },
  bibliografia: "KDIGO Glomerular Diseases Guideline, 2021; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-193",
  especialidad: "Nefrología",
  tema: "Glomerulonefritis rápidamente progresiva",
  subtema: "Estudios inmunológicos iniciales",
  dificultad: "Media",
  caso: `Mujer de 47 años presenta creatinina en ascenso rápido, hematuria glomerular y proteinuria. La exploración no revela edema importante ni datos de obstrucción.`,
  pregunta: "¿Qué conjunto de estudios ayuda a identificar las causas inmunológicas principales?",
  opciones: [
    "ANCA, anticuerpos anti-MBG, complemento y pruebas dirigidas según la sospecha clínica",
    "Solo glucosa capilar",
    "Únicamente perfil tiroideo",
    "Prueba de sudor y espirometría",
    "Concentración de vitamina D como único estudio"
  ],
  respuestaCorrecta: 0,
  explicacion: `En una glomerulonefritis rápidamente progresiva, las pruebas iniciales suelen incluir ANCA, anti-MBG, C3 y C4, además de ANA, anti-dsDNA, serologías infecciosas y otros estudios de acuerdo con la presentación. La biopsia renal permite caracterizar el patrón y estimar actividad y cronicidad. La evaluación debe realizarse con urgencia.`,
  perlaENARM: "La serología orienta el mecanismo, pero no sustituye la integración clínica ni la biopsia cuando está indicada.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre glomerulonefritis rápidamente progresiva.",
    internacional: "KDIGO Glomerular Diseases, 2021; KDIGO ANCA-Associated Vasculitis, 2024."
  },
  bibliografia: "KDIGO Glomerular Diseases Guideline, 2021; KDIGO ANCA-Associated Vasculitis Guideline, 2024."
},
{
  id: "NEF-194",
  especialidad: "Nefrología",
  tema: "Nefropatía diabética",
  subtema: "Biopsia renal y diagnósticos alternativos",
  dificultad: "Media",
  caso: `Mujer de 51 años con diabetes de cuatro años presenta hematuria macroscópica, cilindros eritrocitarios y aumento de creatinina en pocas semanas. La albuminuria era mínima en el control previo.`,
  pregunta: "¿Qué aspecto hace necesario investigar una enfermedad renal adicional en lugar de atribuir todo a nefropatía diabética?",
  opciones: [
    "La evolución rápida y el sedimento glomerular activo",
    "La existencia de diabetes por sí sola",
    "Una glucosa normal en ayuno",
    "La ausencia de edema periférico",
    "La edad mayor de 50 años"
  ],
  respuestaCorrecta: 0,
  explicacion: `La nefropatía diabética suele evolucionar de manera progresiva, aunque su presentación varía. Un deterioro renal rápido, hematuria glomerular importante o sedimento activo son datos atípicos que obligan a considerar una glomerulopatía adicional y valorar estudios inmunológicos o biopsia renal según el contexto.`,
  perlaENARM: "No toda ERC en una persona con diabetes es nefropatía diabética; hematuria glomerular y progresión rápida son señales de alarma.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre enfermedad renal diabética y evaluación de hematuria.",
    internacional: "KDIGO Diabetes Management in CKD, 2022; KDIGO CKD Guideline, 2024."
  },
  bibliografia: "KDIGO Diabetes Management in CKD, 2022; KDIGO CKD Guideline, 2024."
},
{
  id: "NEF-195",
  especialidad: "Nefrología",
  tema: "Hiponatremia",
  subtema: "Síndrome de secreción inadecuada de ADH",
  dificultad: "Media",
  caso: `Varón de 67 años con neumonía presenta sodio de 126 mmol/L, osmolalidad plasmática baja, orina inapropiadamente concentrada y ausencia de edema o signos clínicos de hipovolemia.`,
  pregunta: "¿Qué diagnóstico debe considerarse después de excluir insuficiencia suprarrenal, hipotiroidismo y otras causas relevantes?",
  opciones: [
    "Síndrome de secreción inadecuada de hormona antidiurética",
    "Diabetes insípida central",
    "Hipernatremia por pérdida de agua",
    "Poliuria osmótica obligatoria",
    "Hiperaldosteronismo primario"
  ],
  respuestaCorrecta: 0,
  explicacion: `La hiponatremia hipotónica con orina inadecuadamente concentrada y aparente euvolemia es compatible con SIADH, pero es un diagnóstico de exclusión. Deben evaluarse función renal, adrenal y tiroidea, medicamentos y causas pulmonares o del sistema nervioso central. El tratamiento depende de la gravedad, la duración y la causa subyacente.`,
  perlaENARM: "SIADH requiere hiponatremia hipotónica, orina no diluida y exclusión de causas endocrinas, renales y farmacológicas.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre hiponatremia y SIADH.",
    internacional: "European Clinical Practice Guideline on Hyponatraemia, 2014."
  },
  bibliografia: "Spasovski G et al. Eur J Endocrinol. 2014;170:G1-G47."
},
{
  id: "NEF-196",
  especialidad: "Nefrología",
  tema: "Hiperkalemia",
  subtema: "Causas farmacológicas",
  dificultad: "Baja",
  caso: `Paciente de 69 años con ERC inicia espironolactona por insuficiencia cardiaca. Dos semanas después, el potasio sérico aumenta de 4.7 a 6.0 mmol/L.`,
  pregunta: "¿Qué mecanismo explica principalmente esta complicación?",
  opciones: [
    "Aumento de la excreción renal de potasio",
    "Bloqueo de la acción de aldosterona y reducción de la secreción distal de potasio",
    "Estimulación de la producción de insulina",
    "Pérdida intestinal de potasio",
    "Aumento de la filtración glomerular"
  ],
  respuestaCorrecta: 1,
  explicacion: `La espironolactona antagoniza el receptor mineralocorticoide y reduce la secreción distal de potasio. El riesgo aumenta en ERC y con otros fármacos que bloquean el sistema renina-angiotensina. Deben monitorizarse potasio y función renal, especialmente después del inicio y de los ajustes de dosis.`,
  perlaENARM: "Antagonistas de aldosterona pueden provocar hiperkalemia, sobre todo en ERC o combinados con otros bloqueadores del sistema renina-angiotensina.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre insuficiencia cardiaca, ERC e hiperkalemia.",
    internacional: "KDIGO CKD Guideline, 2024; guías vigentes de insuficiencia cardiaca."
  },
  bibliografia: "KDIGO CKD Guideline, 2024; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-197",
  especialidad: "Nefrología",
  tema: "Hipokalemia",
  subtema: "Manifestaciones clínicas",
  dificultad: "Baja",
  caso: `Mujer de 62 años en tratamiento con diurético presenta debilidad muscular y estreñimiento. El potasio sérico es de 2.6 mmol/L y el electrocardiograma muestra ondas U.`,
  pregunta: "¿Qué alteración electrolítica explica mejor el cuadro?",
  opciones: [
    "Hipokalemia",
    "Hipernatremia aislada",
    "Hiperfosfatemia",
    "Hipercalcemia",
    "Hipermagnesemia"
  ],
  respuestaCorrecta: 0,
  explicacion: `La hipokalemia puede causar debilidad, íleo o estreñimiento y alteraciones electrocardiográficas, incluidas ondas U y cambios en la repolarización. La gravedad, los síntomas y los cambios ECG orientan la urgencia de la reposición. También debe evaluarse magnesio, ya que su deficiencia puede dificultar la corrección del potasio.`,
  perlaENARM: "Hipokalemia con ondas U y debilidad muscular requiere corrección y evaluación de la causa, incluido el magnesio.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre trastornos del potasio.",
    internacional: "Guías clínicas vigentes sobre hipokalemia y alteraciones electrocardiográficas."
  },
  bibliografia: "Harrison's Principles of Internal Medicine, 19.ª ed.; Clinical Physiology of Acid-Base and Electrolyte Disorders."
},
{
  id: "NEF-198",
  especialidad: "Nefrología",
  tema: "Acidosis metabólica",
  subtema: "Acidosis con brecha aniónica normal",
  dificultad: "Media",
  caso: `Mujer de 33 años presenta diarrea acuosa abundante. El pH es de 7.29, bicarbonato de 15 mmol/L y la brecha aniónica está dentro del intervalo de referencia.`,
  pregunta: "¿Qué mecanismo explica mejor la alteración ácido-base?",
  opciones: [
    "Pérdida gastrointestinal de bicarbonato",
    "Acumulación de cuerpos cetónicos",
    "Intoxicación por metanol obligatoria",
    "Retención primaria de CO2",
    "Alcalosis metabólica por vómitos"
  ],
  respuestaCorrecta: 0,
  explicacion: `La diarrea puede causar pérdida de bicarbonato y producir acidosis metabólica con brecha aniónica normal, acompañada frecuentemente de hipercloremia. El diagnóstico diferencial incluye acidosis tubular renal y algunas cargas de cloro. La evaluación del potasio, la función renal y el contexto clínico ayuda a identificar el mecanismo.`,
  perlaENARM: "Diarrea con acidosis metabólica y brecha aniónica normal sugiere pérdida gastrointestinal de bicarbonato.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre diarrea, deshidratación y trastornos ácido-base.",
    internacional: "Guías clínicas de interpretación ácido-base y evaluación de acidosis metabólica."
  },
  bibliografia: "Harrison's Principles of Internal Medicine, 19.ª ed.; Clinical Physiology of Acid-Base and Electrolyte Disorders."
},
{
  id: "NEF-199",
  especialidad: "Nefrología",
  tema: "Alcalosis metabólica",
  subtema: "Diuréticos",
  dificultad: "Media",
  caso: `Varón de 70 años con insuficiencia cardiaca recibe diurético de asa y desarrolla potasio de 2.9 mmol/L, bicarbonato de 34 mmol/L y cloro urinario elevado mientras mantiene el efecto del fármaco.`,
  pregunta: "¿Qué mecanismo contribuye a la alcalosis metabólica?",
  opciones: [
    "Aumento de la reabsorción de bicarbonato por pérdida de cloro y volumen, junto con mayor secreción distal de potasio e hidrogeniones",
    "Pérdida intestinal aislada de bicarbonato",
    "Acumulación de lactato como único mecanismo",
    "Hipoventilación primaria sin alteración metabólica",
    "Exceso de agua libre sin cambios electrolíticos"
  ],
  respuestaCorrecta: 0,
  explicacion: `Los diuréticos de asa pueden provocar contracción del volumen, aumento de la entrega distal de sodio y activación del sistema renina-angiotensina-aldosterona. Esto favorece secreción de potasio e hidrogeniones y mantiene la alcalosis. El cloro urinario puede ser elevado durante el efecto activo del diurético, por lo que debe interpretarse según el momento de la toma y el contexto.`,
  perlaENARM: "Los diuréticos pueden generar alcalosis metabólica e hipokalemia; el cloro urinario depende de si persiste el efecto farmacológico.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre uso de diuréticos y trastornos electrolíticos.",
    internacional: "Guías clínicas de evaluación de alcalosis metabólica."
  },
  bibliografia: "Harrison's Principles of Internal Medicine, 19.ª ed.; Clinical Physiology of Acid-Base and Electrolyte Disorders."
},
{
  id: "NEF-200",
  especialidad: "Nefrología",
  tema: "Trastornos ácido-base",
  subtema: "Trastornos mixtos",
  dificultad: "Media",
  caso: `Paciente de 55 años con sepsis presenta pH 7.10, bicarbonato 12 mmol/L y PCO2 de 40 mmHg.`,
  pregunta: "¿Qué interpretación es más probable al comparar la PCO2 medida con la compensación esperada por la fórmula de Winter?",
  opciones: [
    "Acidosis metabólica con compensación respiratoria apropiada",
    "Acidosis metabólica asociada a acidosis respiratoria",
    "Alcalosis respiratoria aislada",
    "Alcalosis metabólica con compensación normal",
    "Gasometría completamente normal"
  ],
  respuestaCorrecta: 1,
  explicacion: `Con bicarbonato de 12 mmol/L, la PCO2 esperada por Winter es aproximadamente 26 ± 2 mmHg. Una PCO2 de 40 mmHg indica ventilación insuficiente respecto a la compensación esperada y sugiere acidosis respiratoria concomitante. Los trastornos mixtos son frecuentes en pacientes críticos y requieren identificar y tratar ambas causas.`,
  perlaENARM: "En acidosis metabólica, una PCO2 mayor que la esperada por Winter sugiere acidosis respiratoria agregada.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre interpretación de gasometría en pacientes críticos.",
    internacional: "Guías clínicas de interpretación de trastornos ácido-base."
  },
  bibliografia: "Harrison's Principles of Internal Medicine, 19.ª ed.; Clinical Physiology of Acid-Base and Electrolyte Disorders."
},
{
  id: "NEF-201",
  especialidad: "Nefrología",
  tema: "Indicaciones de diálisis",
  subtema: "Sobrecarga de volumen",
  dificultad: "Media",
  caso: `Paciente con ERC avanzada presenta edema pulmonar, hipoxemia y dificultad respiratoria a pesar del tratamiento diurético apropiado. La congestión persiste y compromete la oxigenación.`,
  pregunta: "¿Qué situación justifica valorar terapia de reemplazo renal urgente?",
  opciones: [
    "Sobrecarga de volumen refractaria con compromiso respiratorio",
    "Proteinuria leve sin otros síntomas",
    "Creatinina estable sin complicaciones",
    "Hipertensión controlada con un fármaco",
    "Hematuria microscópica aislada"
  ],
  respuestaCorrecta: 0,
  explicacion: `La sobrecarga de volumen que causa edema pulmonar y no responde al tratamiento médico puede requerir ultrafiltración o terapia de reemplazo renal. La decisión considera estabilidad hemodinámica, función renal, respuesta a diuréticos y otras complicaciones. No se debe esperar a que una cifra específica de creatinina alcance un umbral arbitrario.`,
  perlaENARM: "Edema pulmonar refractario es una indicación clínica importante de terapia de reemplazo renal.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre terapia de reemplazo renal en ERC y lesión renal aguda.",
    internacional: "KDIGO AKI Guideline, 2012; KDIGO CKD Guideline, 2024."
  },
  bibliografia: "KDIGO AKI Guideline, 2012; KDIGO CKD Guideline, 2024."
},
{
  id: "NEF-202",
  especialidad: "Nefrología",
  tema: "Nefritis intersticial",
  subtema: "Diagnóstico diferencial",
  dificultad: "Media",
  caso: `Varón de 49 años con lesión renal aguda presenta fiebre, exantema y eosinofilia tras iniciar un antibiótico. El sedimento muestra leucocitos y no se identifican bacterias en el urocultivo.`,
  pregunta: "¿Qué diagnóstico debe sospecharse?",
  opciones: [
    "Nefritis intersticial aguda por hipersensibilidad farmacológica",
    "Glomeruloesclerosis focal y segmentaria confirmada",
    "Nefropatía diabética",
    "Poliquistosis renal",
    "Trombosis de vena renal"
  ],
  respuestaCorrecta: 0,
  explicacion: `La asociación temporal con un fármaco, fiebre, exantema, eosinofilia y piuria estéril es compatible con nefritis intersticial aguda. La tríada clásica no está presente en todos los pacientes y la eosinofilia por sí sola no confirma el diagnóstico. La retirada del fármaco sospechoso es fundamental y la biopsia se considera cuando persiste incertidumbre diagnóstica o la evolución es desfavorable.`,
  perlaENARM: "Fármaco nuevo más lesión renal aguda y manifestaciones de hipersensibilidad orientan a nefritis intersticial, pero ningún hallazgo aislado es definitivo.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre nefritis intersticial y lesión renal aguda inducida por medicamentos.",
    internacional: "KDIGO AKI Guideline, 2012."
  },
  bibliografia: "KDIGO AKI Guideline, 2012; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-203",
  especialidad: "Nefrología",
  tema: "Necrosis tubular aguda",
  subtema: "Diferenciación de lesión prerrenal",
  dificultad: "Media",
  caso: `Paciente de 65 años presenta lesión renal aguda después de hipotensión prolongada. El sedimento muestra cilindros granulares y la creatinina no mejora inmediatamente después de restaurar la perfusión.`,
  pregunta: "¿Qué explicación es más probable?",
  opciones: [
    "Lesión tubular establecida por isquemia prolongada",
    "Lesión prerrenal pura que necesariamente se normaliza en una hora",
    "Síndrome nefrótico primario",
    "Obstrucción uretral sin evidencia clínica",
    "Diabetes insípida central"
  ],
  respuestaCorrecta: 0,
  explicacion: `La hipoperfusión sostenida puede provocar lesión tubular isquémica. A diferencia de una alteración prerrenal funcional, la recuperación no suele ser inmediata y el sedimento puede mostrar cilindros granulares y células tubulares. La evolución depende de la gravedad, la duración de la agresión y las complicaciones concomitantes.`,
  perlaENARM: "La falta de recuperación rápida tras corregir la perfusión, junto con sedimento tubular activo, sugiere lesión tubular establecida.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre lesión renal aguda.",
    internacional: "KDIGO AKI Guideline, 2012."
  },
  bibliografia: "KDIGO AKI Guideline, 2012; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-204",
  especialidad: "Nefrología",
  tema: "Poliquistosis renal",
  subtema: "Complicaciones extrarrenales",
  dificultad: "Media",
  caso: `Mujer de 39 años con poliquistosis renal autosómica dominante pregunta si necesita estudios para aneurismas intracraneales. No tiene antecedentes personales de hemorragia subaracnoidea ni historia familiar conocida de aneurisma.`,
  pregunta: "¿Cuál es la consideración general sobre el cribado?",
  opciones: [
    "Debe realizarse angiorresonancia anual a todas las personas con poliquistosis",
    "El cribado se individualiza según antecedentes familiares, historia personal y otros factores de riesgo",
    "Los aneurismas intracraneales nunca se asocian con poliquistosis",
    "La tomografía contrastada cerebral es obligatoria cada mes",
    "El cribado se realiza únicamente después de una hemorragia subaracnoidea"
  ],
  respuestaCorrecta: 1,
  explicacion: `La poliquistosis renal autosómica dominante se asocia a mayor riesgo de aneurismas intracraneales. El cribado no se plantea de manera idéntica para todos los pacientes; se considera especialmente en personas con antecedentes familiares de aneurisma o hemorragia subaracnoidea y otros escenarios clínicos relevantes. La decisión debe individualizarse tras discutir beneficios y limitaciones.`,
  perlaENARM: "En poliquistosis renal, el cribado de aneurismas intracraneales se individualiza; los antecedentes familiares son especialmente relevantes.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre poliquistosis renal autosómica dominante.",
    internacional: "KDIGO ADPKD Clinical Practice Guideline, 2025."
  },
  bibliografia: "KDIGO ADPKD Guideline, 2025; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-205",
  especialidad: "Nefrología",
  tema: "Nefrolitiasis",
  subtema: "Litiasis infectada",
  dificultad: "Media",
  caso: `Varón de 58 años con fiebre de 39 °C, escalofríos, dolor en flanco y presión arterial de 88/54 mmHg presenta cálculo ureteral obstructivo e hidronefrosis en la tomografía.`,
  pregunta: "¿Qué medida es prioritaria además del tratamiento antimicrobiano y la estabilización hemodinámica?",
  opciones: [
    "Descompresión urgente de la vía urinaria obstruida",
    "Esperar a que el cálculo se expulse espontáneamente",
    "Indicar solo analgésicos y alta domiciliaria",
    "Administrar citrato oral como tratamiento único",
    "Evitar la intervención urológica hasta que desaparezca la fiebre"
  ],
  respuestaCorrecta: 0,
  explicacion: `La obstrucción urinaria infectada con datos de sepsis es una urgencia. Requiere antibióticos, reanimación y drenaje urgente mediante catéter ureteral o nefrostomía según el caso. El tratamiento definitivo del cálculo suele diferirse hasta controlar la infección.`,
  perlaENARM: "Cálculo obstructivo más infección sistémica exige antibióticos y descompresión urgente; no basta con analgesia.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre urolitiasis obstructiva y sepsis urinaria.",
    internacional: "EAU Guidelines on Urolithiasis, edición vigente."
  },
  bibliografia: "European Association of Urology Guidelines on Urolithiasis; guías vigentes sobre urosepsis."
},
{
  id: "NEF-206",
  especialidad: "Nefrología",
  tema: "Síndrome hemolítico urémico",
  subtema: "Toxina Shiga",
  dificultad: "Media",
  caso: `Niño de 6 años presenta diarrea sanguinolenta seguida de palidez, oliguria y trombocitopenia. Se sospecha síndrome hemolítico urémico asociado a toxina Shiga.`,
  pregunta: "¿Qué enfoque general es apropiado mientras se confirma la etiología?",
  opciones: [
    "Soporte cuidadoso de volumen, control de electrolitos y vigilancia de complicaciones renales y hematológicas",
    "Administrar loperamida de rutina para detener la diarrea sanguinolenta",
    "Iniciar antibióticos indiscriminadamente sin valorar el patógeno",
    "Administrar anticoagulación plena a todos los pacientes",
    "Restringir toda vigilancia de la diuresis"
  ],
  respuestaCorrecta: 0,
  explicacion: `El manejo del síndrome hemolítico urémico asociado a toxina Shiga es principalmente de soporte, con monitorización de diuresis, función renal, electrolitos, hemólisis y plaquetas. La reposición de líquidos debe individualizarse según estado hemodinámico y función renal. Los antibióticos y antimotilidad no deben emplearse de manera indiscriminada ante sospecha de infección productora de toxina Shiga.`,
  perlaENARM: "En sospecha de síndrome hemolítico urémico por toxina Shiga, el soporte y la vigilancia renal son centrales; evita tratamientos empíricos indiscriminados.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre diarrea infecciosa y síndrome hemolítico urémico.",
    internacional: "Guías internacionales vigentes sobre STEC y síndrome hemolítico urémico."
  },
  bibliografia: "Harrison's Principles of Internal Medicine, 19.ª ed.; guías clínicas internacionales sobre STEC-HUS."
},
{
  id: "NEF-207",
  especialidad: "Nefrología",
  tema: "Microangiopatía trombótica",
  subtema: "Hemólisis microangiopática",
  dificultad: "Baja",
  caso: `Paciente de 44 años con trombocitopenia presenta anemia, elevación de LDH, haptoglobina baja y esquistocitos en frotis periférico.`,
  pregunta: "¿Qué proceso explica mejor la presencia de esquistocitos en este contexto?",
  opciones: [
    "Fragmentación mecánica de eritrocitos en la microcirculación",
    "Déficit aislado de hierro",
    "Aumento fisiológico de eritropoyetina",
    "Pérdida urinaria de albúmina",
    "Hemólisis exclusivamente extravascular por esplenomegalia"
  ],
  respuestaCorrecta: 0,
  explicacion: `Los esquistocitos son fragmentos eritrocitarios producidos por daño mecánico al atravesar la microcirculación afectada por microtrombos o lesión endotelial. Junto con LDH elevada, haptoglobina baja y trombocitopenia, orientan a una microangiopatía trombótica. Es fundamental buscar de inmediato la etiología, porque el tratamiento difiere entre PTT, síndrome hemolítico urémico y otras causas.`,
  perlaENARM: "Esquistocitos más trombocitopenia y hemólisis sugieren microangiopatía trombótica hasta demostrar otra causa.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre anemia hemolítica microangiopática y microangiopatías trombóticas.",
    internacional: "ISTH guidance on thrombotic thrombocytopenic purpura."
  },
  bibliografia: "ISTH Guidelines for the Diagnosis and Treatment of TTP; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-208",
  especialidad: "Nefrología",
  tema: "Vasculitis renal",
  subtema: "ANCA y biopsia renal",
  dificultad: "Media",
  caso: `Mujer de 61 años presenta creatinina en ascenso, hematuria glomerular y cilindros eritrocitarios. La prueba anti-MPO es positiva y la biopsia muestra necrosis glomerular con semilunas y depósitos inmunes mínimos.`,
  pregunta: "¿Qué patrón de glomerulonefritis describe mejor la biopsia?",
  opciones: [
    "Glomerulonefritis necrosante pauciinmune",
    "Glomerulonefritis membranosa con depósitos subepiteliales",
    "Nefropatía diabética nodular",
    "Enfermedad de cambios mínimos",
    "Glomerulonefritis por depósitos densos confirmada"
  ],
  respuestaCorrecta: 0,
  explicacion: `La necrosis y las semilunas con escasos depósitos en inmunofluorescencia constituyen el patrón pauciinmune, asociado con frecuencia a vasculitis ANCA. El tratamiento depende de la gravedad y puede requerir inducción inmunosupresora urgente. Deben excluirse infecciones y diagnósticos alternativos, además de evaluar extensión extrarrenal.`,
  perlaENARM: "Anti-MPO positivo más glomerulonefritis necrosante pauciinmune es compatible con vasculitis asociada a ANCA.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre vasculitis sistémicas y glomerulonefritis rápidamente progresiva.",
    internacional: "KDIGO ANCA-Associated Vasculitis Guideline, 2024."
  },
  bibliografia: "KDIGO ANCA-Associated Vasculitis Guideline, 2024; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-209",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Seguimiento y riesgo",
  dificultad: "Baja",
  caso: `Paciente de 60 años con ERC presenta eGFR de 42 mL/min/1.73 m² y albuminuria persistente. Se encuentra asintomático y mantiene presión arterial controlada.`,
  pregunta: "¿Qué estrategia es más adecuada para su seguimiento?",
  opciones: [
    "Suspender controles porque no presenta síntomas",
    "Monitorizar periódicamente filtrado, albuminuria, presión arterial, electrolitos y complicaciones de ERC",
    "Solicitar diálisis preventiva inmediata",
    "Medir únicamente creatinina cada cinco años",
    "Evitar evaluar riesgo cardiovascular"
  ],
  respuestaCorrecta: 1,
  explicacion: `La ERC requiere seguimiento según la categoría de filtrado, albuminuria, causa, velocidad de progresión y comorbilidades. Deben vigilarse presión arterial, electrolitos, anemia, trastorno mineral óseo y riesgo cardiovascular, además de revisar medicamentos y medidas nefroprotectoras. La frecuencia se individualiza según riesgo y evolución.`,
  perlaENARM: "La intensidad del seguimiento de ERC depende de filtrado y albuminuria; la ausencia de síntomas no significa ausencia de riesgo.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre seguimiento de enfermedad renal crónica.",
    internacional: "KDIGO CKD Clinical Practice Guideline, 2024."
  },
  bibliografia: "KDIGO CKD Guideline, 2024; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-210",
  especialidad: "Nefrología",
  tema: "Integración de nefrología",
  subtema: "Lesión renal aguda con sedimento activo",
  dificultad: "Media",
  caso: `Varón de 57 años presenta edema, hipertensión, creatinina que aumenta en una semana y hematuria con cilindros eritrocitarios. No tiene antecedentes de ERC conocidos.`,
  pregunta: "¿Cuál es el siguiente enfoque clínico más apropiado?",
  opciones: [
    "Considerar una lesión glomerular aguda, solicitar evaluación inmunológica dirigida y valorar biopsia renal urgente",
    "Diagnosticar nefroesclerosis crónica sin estudios adicionales",
    "Atribuir el cuadro a deshidratación aunque no haya datos de hipovolemia",
    "Indicar antibióticos para cistitis sin obtener urocultivo",
    "Esperar tres meses para confirmar si existe lesión renal"
  ],
  respuestaCorrecta: 0,
  explicacion: `El deterioro rápido de la función renal, la hipertensión y los cilindros eritrocitarios sugieren lesión glomerular activa. Se requiere evaluación pronta de complemento, serologías dirigidas, función renal, proteinuria y posibles causas infecciosas o sistémicas. La biopsia puede ser decisiva para distinguir glomerulonefritis por inmunocomplejos, vasculitis pauciinmune y enfermedad anti-MBG. No debe retrasarse el estudio esperando establecer cronicidad.`,
  perlaENARM: "Los cilindros eritrocitarios orientan a origen glomerular; la lesión renal aguda con sedimento activo exige evaluación nefrológica urgente.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre lesión renal aguda y glomerulonefritis rápidamente progresiva.",
    internacional: "KDIGO AKI Guideline, 2012; KDIGO Glomerular Diseases Guideline, 2021."
  },
  bibliografia: "KDIGO AKI Guideline, 2012; KDIGO Glomerular Diseases Guideline, 2021; Harrison's Principles of Internal Medicine, 19.ª ed."
},

{
  id: "NEF-211",
  especialidad: "Nefrología",
  tema: "Fisiología renal",
  subtema: "Autorregulación del filtrado glomerular",
  dificultad: "Baja",
  caso: `Un hombre sano presenta un aumento moderado de la presión arterial durante una situación de estrés. A pesar del cambio hemodinámico, su filtrado glomerular permanece relativamente estable dentro del intervalo de autorregulación renal.`,
  pregunta: "¿Qué mecanismo participa directamente en esta estabilidad del filtrado?",
  opciones: [
    "Respuesta miogénica de la arteriola aferente y retroalimentación tubuloglomerular",
    "Supresión completa de la filtración glomerular",
    "Cierre permanente de la arteriola eferente",
    "Aumento de la permeabilidad del túbulo colector a proteínas",
    "Inhibición total del transporte de sodio en el túbulo proximal"
  ],
  respuestaCorrecta: 0,
  explicacion: `La autorregulación renal mantiene relativamente constantes el flujo sanguíneo renal y el filtrado glomerular ante variaciones moderadas de presión arterial. Intervienen la respuesta miogénica de la arteriola aferente y la retroalimentación tubuloglomerular, mediada por la mácula densa y las células yuxtaglomerulares.`,
  perlaENARM: "La mácula densa detecta cambios en la llegada de NaCl y participa en la regulación del tono arteriolar y de la liberación de renina.",
  gpc: {
    mexico: "No aplica una GPC específica para fisiología renal básica.",
    internacional: "KDIGO CKD Guideline, 2024; textos de fisiología renal."
  },
  bibliografia: "Brenner & Rector's The Kidney; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-212",
  especialidad: "Nefrología",
  tema: "Fisiología renal",
  subtema: "Función de la mácula densa",
  dificultad: "Media",
  caso: `Un paciente presenta disminución de la perfusión renal efectiva. La llegada de cloruro de sodio a la mácula densa disminuye, lo que favorece la activación del sistema renina-angiotensina-aldosterona.`,
  pregunta: "¿Qué respuesta celular contribuye a aumentar la liberación de renina?",
  opciones: [
    "Señalización de la mácula densa que favorece la producción de prostaglandinas y la liberación de renina",
    "Inhibición absoluta de las células yuxtaglomerulares",
    "Liberación de insulina por las células mesangiales",
    "Aumento de la secreción tubular de albúmina",
    "Supresión completa de la actividad simpática renal"
  ],
  respuestaCorrecta: 0,
  explicacion: `La disminución de NaCl detectada por la mácula densa favorece señales paracrinas que estimulan la liberación de renina, entre ellas mecanismos relacionados con prostaglandinas. La activación del sistema renina-angiotensina ayuda a sostener la presión de perfusión y modifica la hemodinámica glomerular.`,
  perlaENARM: "La renina se libera desde las células granulares yuxtaglomerulares; la mácula densa regula su secreción según la llegada de NaCl.",
  gpc: {
    mexico: "No aplica una GPC específica para fisiología renal básica.",
    internacional: "KDIGO CKD Guideline, 2024."
  },
  bibliografia: "Brenner & Rector's The Kidney; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-213",
  especialidad: "Nefrología",
  tema: "Fisiología tubular",
  subtema: "Reabsorción proximal de glucosa",
  dificultad: "Baja",
  caso: `Una mujer sin diabetes presenta glucosuria persistente, glucemia normal y función renal relativamente conservada. No consume inhibidores del cotransportador sodio-glucosa.`,
  pregunta: "¿Qué estructura participa directamente en la reabsorción fisiológica de glucosa filtrada?",
  opciones: [
    "Túbulo proximal mediante cotransportadores sodio-glucosa",
    "Conducto colector mediante acuaporina 2",
    "Asa ascendente gruesa mediante NKCC2 exclusivamente",
    "Mácula densa mediante receptores de aldosterona",
    "Cápsula de Bowman mediante transporte activo de glucosa"
  ],
  respuestaCorrecta: 0,
  explicacion: `La mayor parte de la glucosa filtrada se reabsorbe en el túbulo proximal mediante cotransportadores sodio-glucosa, principalmente SGLT2 en el segmento proximal temprano y SGLT1 en segmentos más distales. La glucosuria con glucemia normal puede sugerir un defecto tubular o una alteración hereditaria del transporte.`,
  perlaENARM: "Glucosuria con glucemia normal obliga a considerar glucosuria renal y otras alteraciones tubulares.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre evaluación de alteraciones tubulares cuando exista sospecha clínica.",
    internacional: "KDIGO CKD Guideline, 2024."
  },
  bibliografia: "Brenner & Rector's The Kidney; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-214",
  especialidad: "Nefrología",
  tema: "Fisiología tubular",
  subtema: "Mecanismo multiplicador de contracorriente",
  dificultad: "Media",
  caso: `Un residente estudia por qué el riñón puede producir orina concentrada durante la deshidratación. Analiza el transporte de solutos en el asa de Henle y la permeabilidad al agua de sus segmentos.`,
  pregunta: "¿Qué propiedad de la rama ascendente gruesa contribuye a generar el gradiente osmótico medular?",
  opciones: [
    "Reabsorbe NaCl y es prácticamente impermeable al agua",
    "Reabsorbe agua libremente sin transportar solutos",
    "Secreta grandes cantidades de albúmina",
    "Es el sitio principal de filtración del plasma",
    "Carece de transporte activo de electrolitos"
  ],
  respuestaCorrecta: 0,
  explicacion: `La rama ascendente gruesa reabsorbe NaCl mediante el cotransportador NKCC2 y es poco permeable al agua. Esta separación entre transporte de solutos y movimiento de agua contribuye a generar el gradiente osmótico medular, indispensable para concentrar la orina cuando existe acción de hormona antidiurética.`,
  perlaENARM: "El asa ascendente gruesa diluye el líquido tubular y contribuye al gradiente medular; los diuréticos de asa inhiben NKCC2.",
  gpc: {
    mexico: "No aplica una GPC específica para fisiología tubular.",
    internacional: "Textos de fisiología renal y guías clínicas de trastornos hidroelectrolíticos."
  },
  bibliografia: "Brenner & Rector's The Kidney; Clinical Physiology of Acid-Base and Electrolyte Disorders."
},
{
  id: "NEF-215",
  especialidad: "Nefrología",
  tema: "Fisiología renal",
  subtema: "Acción de la hormona antidiurética",
  dificultad: "Baja",
  caso: `Después de varias horas sin ingerir agua, una persona sana produce un volumen urinario reducido y una orina concentrada. La respuesta hormonal conserva agua corporal.`,
  pregunta: "¿Qué cambio produce la vasopresina en las células principales del conducto colector?",
  opciones: [
    "Inserción de acuaporinas 2 en la membrana apical",
    "Bloqueo permanente de todos los canales de agua",
    "Inhibición completa de la reabsorción de urea",
    "Destrucción de las células principales",
    "Aumento obligatorio de la excreción de agua libre"
  ],
  respuestaCorrecta: 0,
  explicacion: `La vasopresina se une a receptores V2 en las células principales del conducto colector y activa una vía dependiente de AMPc y proteína cinasa A, que favorece la inserción de acuaporinas 2 en la membrana apical. Así aumenta la permeabilidad al agua y se reduce su excreción.`,
  perlaENARM: "La vasopresina actúa sobre receptores V2 y acuaporina 2 para conservar agua.",
  gpc: {
    mexico: "No aplica una GPC específica para fisiología renal básica.",
    internacional: "Textos de fisiología renal y guías vigentes de trastornos del agua."
  },
  bibliografia: "Brenner & Rector's The Kidney; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-216",
  especialidad: "Nefrología",
  tema: "Fisiología renal",
  subtema: "Síntesis de eritropoyetina",
  dificultad: "Baja",
  caso: `Una paciente con enfermedad renal crónica avanzada presenta anemia progresiva. No se identifican pérdidas sanguíneas y los estudios iniciales no muestran una deficiencia nutricional evidente.`,
  pregunta: "¿Qué células participan principalmente en la producción renal de eritropoyetina en respuesta a hipoxia?",
  opciones: [
    "Células intersticiales peritubulares de tipo fibroblástico",
    "Podocitos como única fuente de eritropoyetina",
    "Células principales del conducto colector",
    "Células del urotelio vesical",
    "Células de la mácula densa exclusivamente"
  ],
  respuestaCorrecta: 0,
  explicacion: `La eritropoyetina renal se produce principalmente en células intersticiales peritubulares especializadas, que responden a la disponibilidad de oxígeno mediante mecanismos regulados por factores inducibles por hipoxia. La fibrosis y la pérdida de tejido renal funcional pueden contribuir a una producción insuficiente de eritropoyetina en la ERC.`,
  perlaENARM: "La anemia de la ERC se relaciona, entre otros mecanismos, con la disminución de la producción renal de eritropoyetina.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre anemia asociada a ERC.",
    internacional: "KDIGO guidance on anemia in CKD; consultar actualización vigente."
  },
  bibliografia: "KDIGO Anemia in CKD Guideline, 2012; Brenner & Rector's The Kidney."
},
{
  id: "NEF-217",
  especialidad: "Nefrología",
  tema: "Fisiología renal",
  subtema: "Activación de vitamina D",
  dificultad: "Media",
  caso: `Un paciente con ERC avanzada presenta descenso de calcitriol y alteraciones del metabolismo mineral. El equipo revisa los sitios de activación de la vitamina D.`,
  pregunta: "¿Qué enzima renal cataliza la conversión de 25-hidroxivitamina D en calcitriol?",
  opciones: [
    "1-alfa-hidroxilasa",
    "Renina",
    "Anhidrasa carbónica II",
    "Aldosterona sintasa",
    "Ciclooxigenasa plaquetaria"
  ],
  respuestaCorrecta: 0,
  explicacion: `La 1-alfa-hidroxilasa, expresada principalmente en el túbulo proximal, convierte la 25-hidroxivitamina D en 1,25-dihidroxivitamina D o calcitriol. En la ERC avanzada puede disminuir esta activación y contribuir al hiperparatiroidismo secundario y al trastorno mineral óseo.`,
  perlaENARM: "El riñón participa en la activación final de vitamina D; la disminución de calcitriol favorece el hiperparatiroidismo secundario.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre trastorno mineral óseo asociado a ERC.",
    internacional: "KDIGO CKD-MBD Guideline, 2017."
  },
  bibliografia: "KDIGO CKD-MBD Guideline, 2017; Brenner & Rector's The Kidney."
},
{
  id: "NEF-218",
  especialidad: "Nefrología",
  tema: "Trastorno mineral óseo en ERC",
  subtema: "Retención de fósforo",
  dificultad: "Media",
  caso: `Un hombre con ERC avanzada presenta fósforo sérico elevado, PTH aumentada y calcitriol reducido. Se revisa la secuencia fisiopatológica que conecta la pérdida de nefronas con estas alteraciones.`,
  pregunta: "¿Qué hormona aumenta tempranamente como respuesta a la disminución de la capacidad renal para excretar fósforo?",
  opciones: [
    "FGF23",
    "Insulina",
    "Calcitonina como única respuesta inicial",
    "Eritropoyetina",
    "Hormona de crecimiento como regulador principal"
  ],
  respuestaCorrecta: 0,
  explicacion: `El factor de crecimiento fibroblástico 23 (FGF23), producido principalmente por osteocitos y osteoblastos, aumenta en respuesta a la carga de fósforo y contribuye a aumentar su excreción renal y disminuir la síntesis de calcitriol. En la ERC puede elevarse antes de que aparezca hiperfosfatemia franca.`,
  perlaENARM: "FGF23 puede elevarse tempranamente en ERC y contribuye a reducir el calcitriol.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre trastorno mineral óseo asociado a ERC.",
    internacional: "KDIGO CKD-MBD Guideline, 2017."
  },
  bibliografia: "KDIGO CKD-MBD Guideline, 2017; Brenner & Rector's The Kidney."
},
{
  id: "NEF-219",
  especialidad: "Nefrología",
  tema: "Análisis de orina",
  subtema: "Cilindros hialinos",
  dificultad: "Baja",
  caso: `Una mujer joven realiza una carrera de larga distancia. Después del ejercicio, el examen general de orina muestra algunos cilindros hialinos, sin hematuria significativa ni proteinuria persistente.`,
  pregunta: "¿Cómo debe interpretarse este hallazgo en ausencia de otros datos de enfermedad renal?",
  opciones: [
    "Puede ser transitorio y observarse en personas sanas después de ejercicio o deshidratación",
    "Confirma glomerulonefritis necrosante",
    "Demuestra siempre necrosis tubular aguda",
    "Es diagnóstico de síndrome nefrótico",
    "Confirma infección urinaria bacteriana"
  ],
  respuestaCorrecta: 0,
  explicacion: `Los cilindros hialinos están formados principalmente por uromodulina y pueden aparecer en pequeñas cantidades en personas sanas, especialmente después de ejercicio intenso o deshidratación. La interpretación depende de la cantidad, los síntomas, la función renal y los demás componentes del sedimento.`,
  perlaENARM: "No todos los cilindros urinarios indican lesión renal estructural; el tipo de cilindro y el contexto son esenciales.",
  gpc: {
    mexico: "No aplica una GPC específica para cilindros hialinos aislados.",
    internacional: "Textos de análisis de orina y evaluación de enfermedad renal."
  },
  bibliografia: "Harrison's Principles of Internal Medicine, 19.ª ed.; Brenner & Rector's The Kidney."
},
{
  id: "NEF-220",
  especialidad: "Nefrología",
  tema: "Análisis de orina",
  subtema: "Proteinuria ortostática",
  dificultad: "Media",
  caso: `Un adolescente de 15 años presenta proteinuria leve en una muestra de orina tomada al final del día. La primera orina de la mañana no muestra proteinuria significativa y la función renal es normal.`,
  pregunta: "¿Qué entidad puede explicar esta diferencia entre ambas muestras?",
  opciones: [
    "Proteinuria ortostática",
    "Glomerulonefritis rápidamente progresiva confirmada",
    "Síndrome nefrótico persistente",
    "Necrosis cortical bilateral",
    "Obstrucción ureteral completa"
  ],
  respuestaCorrecta: 0,
  explicacion: `La proteinuria ortostática aparece principalmente durante la posición erguida y disminuye o desaparece en la primera orina matutina obtenida después del decúbito nocturno. Es relativamente frecuente en adolescentes y suele tener evolución benigna cuando la función renal, la presión arterial y el resto de la evaluación son normales.`,
  perlaENARM: "En adolescentes con proteinuria aislada, la primera orina matutina ayuda a identificar proteinuria ortostática.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre evaluación de proteinuria en población pediátrica.",
    internacional: "KDIGO CKD Guideline, 2024."
  },
  bibliografia: "KDIGO CKD Guideline, 2024; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-221",
  especialidad: "Nefrología",
  tema: "Imagen renal",
  subtema: "Ecografía y diferenciación de obstrucción",
  dificultad: "Baja",
  caso: `Una mujer de 71 años presenta deterioro de la función renal. Se sospecha obstrucción urinaria y se solicita una ecografía renal y vesical.`,
  pregunta: "¿Qué hallazgo ecográfico apoya la presencia de obstrucción de la vía urinaria superior?",
  opciones: [
    "Dilatación del sistema pielocalicial",
    "Ausencia aislada de quistes corticales",
    "Tamaño vesical normal sin residuo",
    "Visualización de una corteza renal homogénea como único dato",
    "Presencia de flujo sanguíneo renal conservado"
  ],
  respuestaCorrecta: 0,
  explicacion: `La hidronefrosis consiste en la dilatación del sistema colector y puede apoyar el diagnóstico de obstrucción urinaria. Sin embargo, su ausencia no excluye por completo una obstrucción temprana, intermitente o en determinadas condiciones clínicas. La ecografía debe interpretarse junto con síntomas, diuresis y contexto anatómico.`,
  perlaENARM: "La ecografía es una herramienta inicial útil para buscar hidronefrosis, pero una ecografía sin dilatación no excluye todas las obstrucciones.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre evaluación de obstrucción urinaria y lesión renal aguda.",
    internacional: "KDIGO AKI Guideline, 2012."
  },
  bibliografia: "KDIGO AKI Guideline, 2012; Brenner & Rector's The Kidney."
},
{
  id: "NEF-222",
  especialidad: "Nefrología",
  tema: "Imagen renal",
  subtema: "Tamaño renal y cronicidad",
  dificultad: "Media",
  caso: `Un paciente con filtrado glomerular reducido de larga evolución tiene ecografía que muestra riñones pequeños y aumento de la ecogenicidad cortical. No existen datos de obstrucción.`,
  pregunta: "¿Qué interpretación aporta la combinación de estos hallazgos?",
  opciones: [
    "Sugiere enfermedad renal crónica avanzada, aunque el tamaño depende de la etiología",
    "Confirma una lesión renal aguda reversible en todos los casos",
    "Demuestra necesariamente poliquistosis renal",
    "Descarta fibrosis intersticial",
    "Establece por sí sola la causa histológica exacta"
  ],
  respuestaCorrecta: 0,
  explicacion: `Los riñones pequeños y ecogénicos pueden apoyar la presencia de enfermedad renal crónica avanzada, especialmente en procesos con pérdida de parénquima y fibrosis. Sin embargo, algunas enfermedades crónicas conservan o aumentan el tamaño renal, por lo que la ecografía no define por sí sola la etiología ni sustituye la integración clínica.`,
  perlaENARM: "La imagen puede apoyar cronicidad, pero el tamaño renal no identifica por sí solo la enfermedad causal.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre evaluación de enfermedad renal crónica.",
    internacional: "KDIGO CKD Guideline, 2024."
  },
  bibliografia: "KDIGO CKD Guideline, 2024; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-223",
  especialidad: "Nefrología",
  tema: "Evaluación de la función renal",
  subtema: "Limitaciones de la creatinina sérica",
  dificultad: "Media",
  caso: `Un hombre de 82 años con sarcopenia importante presenta creatinina sérica de 0.8 mg/dL. El equipo clínico sospecha que la estimación basada en creatinina podría sobrevalorar su función renal.`,
  pregunta: "¿Qué factor explica esta posible discordancia?",
  opciones: [
    "La baja producción de creatinina por disminución de la masa muscular",
    "La producción exclusiva de creatinina en el hígado",
    "La ausencia de filtración glomerular en adultos mayores",
    "La eliminación exclusiva de creatinina por vía pulmonar",
    "La incapacidad de la creatinina para filtrarse por el glomérulo"
  ],
  respuestaCorrecta: 0,
  explicacion: `La creatinina depende de la producción muscular y de su eliminación renal. En personas con sarcopenia, una creatinina aparentemente normal puede coexistir con filtrado glomerular reducido. Según la decisión clínica, puede ser útil complementar con cistatina C o una estimación combinada.`,
  perlaENARM: "En sarcopenia, la creatinina puede subestimar la gravedad de la disfunción renal.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre estimación del filtrado glomerular.",
    internacional: "KDIGO CKD Guideline, 2024."
  },
  bibliografia: "KDIGO CKD Guideline, 2024; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-224",
  especialidad: "Nefrología",
  tema: "Evaluación de la función renal",
  subtema: "Cistatina C",
  dificultad: "Media",
  caso: `Una paciente con masa muscular muy baja tiene creatinina sérica poco elevada, pero existen dudas sobre la precisión del filtrado glomerular estimado. La decisión clínica requiere una estimación más confiable.`,
  pregunta: "¿Qué marcador puede complementar la estimación basada en creatinina?",
  opciones: [
    "Cistatina C",
    "Bilirrubina indirecta",
    "Troponina I como marcador directo de filtración",
    "Amilasa sérica",
    "Fosfatasa alcalina exclusivamente"
  ],
  respuestaCorrecta: 0,
  explicacion: `La cistatina C es un marcador endógeno de filtración que puede mejorar la estimación del filtrado glomerular en determinadas circunstancias, particularmente cuando la creatinina es poco confiable. También tiene limitaciones, pues puede verse afectada por factores no relacionados directamente con la filtración; la ecuación combinada creatinina-cistatina C puede ser útil.`,
  perlaENARM: "Cuando la masa muscular altera la interpretación de creatinina, considera cistatina C o la ecuación combinada.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre evaluación de la función renal.",
    internacional: "KDIGO CKD Guideline, 2024."
  },
  bibliografia: "KDIGO CKD Guideline, 2024; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-225",
  especialidad: "Nefrología",
  tema: "Nefrología clínica",
  subtema: "Indicaciones de biopsia renal",
  dificultad: "Media",
  caso: `Una mujer de 35 años presenta proteinuria persistente, hematuria microscópica y descenso progresivo del filtrado glomerular. La evaluación inicial no identifica una causa clara y los resultados podrían modificar el tratamiento.`,
  pregunta: "¿Qué utilidad principal tiene la biopsia renal en este escenario?",
  opciones: [
    "Caracterizar la lesión histológica y orientar el pronóstico y el tratamiento",
    "Sustituir la medición de creatinina y albuminuria de forma permanente",
    "Determinar siempre el filtrado glomerular con exactitud absoluta",
    "Excluir cualquier enfermedad sistémica sin estudios adicionales",
    "Confirmar infección urinaria en todos los pacientes"
  ],
  respuestaCorrecta: 0,
  explicacion: `La biopsia renal puede establecer el patrón histológico, identificar actividad y cronicidad y orientar el tratamiento cuando existe sospecha de enfermedad glomerular o sistémica con afectación renal. Su indicación depende de la presentación clínica, el riesgo del procedimiento y la probabilidad de que el resultado modifique la conducta.`,
  perlaENARM: "La biopsia renal no se indica por una cifra aislada: se valora cuando la histología puede modificar el diagnóstico, el pronóstico o el tratamiento.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre evaluación de proteinuria y glomerulopatías.",
    internacional: "KDIGO Glomerular Diseases Guideline, 2021."
  },
  bibliografia: "KDIGO Glomerular Diseases Guideline, 2021; Brenner & Rector's The Kidney."
},
{
  id: "NEF-226",
  especialidad: "Nefrología",
  tema: "Diálisis peritoneal",
  subtema: "Principio de transporte",
  dificultad: "Baja",
  caso: `Un paciente recibe diálisis peritoneal ambulatoria. Durante cada intercambio, los solutos se desplazan entre la sangre de los capilares peritoneales y el líquido de diálisis.`,
  pregunta: "¿Qué proceso permite principalmente el intercambio de solutos pequeños a través de la membrana peritoneal?",
  opciones: [
    "Difusión siguiendo gradientes de concentración",
    "Filtración glomerular por los podocitos",
    "Fagocitosis de solutos por macrófagos como mecanismo principal",
    "Transporte exclusivo mediante eritrocitos",
    "Secreción hormonal de creatinina"
  ],
  respuestaCorrecta: 0,
  explicacion: `En diálisis peritoneal, los solutos pequeños se transfieren principalmente por difusión a través de la membrana peritoneal según sus gradientes de concentración. La ultrafiltración depende del gradiente osmótico generado habitualmente por la glucosa del dializado y de las características de transporte de la membrana.`,
  perlaENARM: "Difusión elimina solutos; ultrafiltración desplaza agua según gradientes osmóticos e hidrostáticos.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre modalidades de terapia de reemplazo renal.",
    internacional: "ISPD guidelines on peritoneal dialysis, edición vigente."
  },
  bibliografia: "International Society for Peritoneal Dialysis guidelines; Brenner & Rector's The Kidney."
},
{
  id: "NEF-227",
  especialidad: "Nefrología",
  tema: "Diálisis peritoneal",
  subtema: "Peritonitis asociada a diálisis",
  dificultad: "Media",
  caso: `Una mujer en diálisis peritoneal nota que el efluente se vuelve turbio y presenta dolor abdominal. No tiene hipotensión ni signos evidentes de infección en el sitio de salida del catéter.`,
  pregunta: "¿Qué estudio del efluente peritoneal debe obtenerse ante esta sospecha?",
  opciones: [
    "Recuento celular con diferencial, tinción según protocolo y cultivo",
    "Únicamente glucosa capilar",
    "Solo concentración sérica de albúmina",
    "Biopsia renal antes de analizar el efluente",
    "Prueba de esfuerzo cardiopulmonar"
  ],
  respuestaCorrecta: 0,
  explicacion: `La peritonitis asociada a diálisis peritoneal se sospecha ante dolor abdominal y efluente turbio. La evaluación incluye recuento de leucocitos con diferencial y cultivo del efluente, siguiendo el protocolo de toma de muestra. Debe iniciarse tratamiento oportuno tras obtener las muestras cuando la sospecha clínica lo justifique, sin demoras innecesarias.`,
  perlaENARM: "En diálisis peritoneal, efluente turbio debe considerarse peritonitis hasta completar la evaluación.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre diálisis peritoneal y sus complicaciones.",
    internacional: "ISPD peritonitis recommendations, edición vigente."
  },
  bibliografia: "International Society for Peritoneal Dialysis recommendations on peritonitis."
},
{
  id: "NEF-228",
  especialidad: "Nefrología",
  tema: "Hemodiálisis",
  subtema: "Acceso vascular",
  dificultad: "Baja",
  caso: `Un paciente con ERC avanzada será evaluado para hemodiálisis crónica. El equipo analiza el acceso vascular considerando durabilidad, riesgo de infección y preservación de vasos.`,
  pregunta: "¿Qué acceso suele preferirse cuando la anatomía vascular y las condiciones clínicas permiten una fístula arteriovenosa nativa funcional?",
  opciones: [
    "Fístula arteriovenosa nativa",
    "Catéter venoso central no tunelizado como acceso permanente ideal",
    "Catéter arterial periférico",
    "Sonda vesical",
    "Acceso intraóseo permanente"
  ],
  respuestaCorrecta: 0,
  explicacion: `La fístula arteriovenosa nativa suele ofrecer menor riesgo de infección y trombosis que los catéteres, aunque requiere tiempo para madurar y no todos los pacientes son candidatos. La elección del acceso debe individualizarse según anatomía vascular, urgencia de inicio, expectativa de vida, preferencias y plan de tratamiento renal.`,
  perlaENARM: "La fístula arteriovenosa puede ser preferible para hemodiálisis crónica, pero la decisión depende del paciente y de la posibilidad real de maduración.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre acceso vascular para hemodiálisis.",
    internacional: "KDOQI Clinical Practice Guideline for Vascular Access, 2019."
  },
  bibliografia: "KDOQI Vascular Access Guideline, 2019; Brenner & Rector's The Kidney."
},
{
  id: "NEF-229",
  especialidad: "Nefrología",
  tema: "Trasplante renal",
  subtema: "Inmunosupresión",
  dificultad: "Media",
  caso: `Un receptor de trasplante renal recibe tacrolimus y presenta temblor fino, hipertensión y aumento de creatinina. La evaluación debe diferenciar toxicidad farmacológica de rechazo, obstrucción e infección.`,
  pregunta: "¿Qué prueba permite evaluar directamente la exposición sistémica al tacrolimus durante el seguimiento habitual?",
  opciones: [
    "Concentración valle sanguínea de tacrolimus",
    "Concentración urinaria de glucosa como único dato",
    "Amilasa sérica",
    "Prueba cutánea de alergia",
    "Medición aislada de sodio urinario"
  ],
  respuestaCorrecta: 0,
  explicacion: `La monitorización de la concentración valle de tacrolimus ayuda a evaluar la exposición al fármaco y ajustar la dosis según el tiempo postrasplante, el riesgo inmunológico, las interacciones y el protocolo del centro. Una concentración elevada puede apoyar toxicidad, pero el aumento de creatinina requiere evaluación integral y no debe atribuirse automáticamente al medicamento.`,
  perlaENARM: "Tacrolimus puede causar nefrotoxicidad y temblor; una concentración valle ayuda a orientar el manejo, pero no excluye otras causas de disfunción del injerto.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre seguimiento del receptor de trasplante renal.",
    internacional: "KDIGO Clinical Practice Guideline for the Care of Kidney Transplant Recipients, 2009; protocolos vigentes del centro."
  },
  bibliografia: "KDIGO Kidney Transplant Recipient Guideline, 2009; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-230",
  especialidad: "Nefrología",
  tema: "Trasplante renal",
  subtema: "Disfunción del injerto",
  dificultad: "Media",
  caso: `Un receptor de trasplante renal presenta aumento de creatinina respecto a su valor basal. No tiene fiebre ni dolor sobre el injerto. La ecografía no muestra hidronefrosis y el nivel de tacrolimus está dentro del objetivo del centro.`,
  pregunta: "¿Qué procedimiento puede ser necesario si la evaluación inicial no identifica la causa y persiste la disfunción del injerto?",
  opciones: [
    "Biopsia del injerto renal para diferenciar rechazo y otras lesiones parenquimatosas",
    "Retirar permanentemente toda la inmunosupresión sin estudios",
    "Diagnosticar rechazo únicamente por el valor de creatinina",
    "Indicar antibióticos indefinidos sin investigar infección",
    "Realizar nefrectomía inmediata en todos los casos"
  ],
  respuestaCorrecta: 0,
  explicacion: `El aumento de creatinina en un trasplante renal puede deberse a rechazo, toxicidad farmacológica, infección, alteraciones hemodinámicas u otras causas. Tras revisar función, medicamentos, niveles farmacológicos, infección y obstrucción, la biopsia del injerto puede ser necesaria para establecer el diagnóstico histológico y dirigir el tratamiento.`,
  perlaENARM: "La creatinina elevada en un trasplante indica disfunción, no confirma rechazo; la biopsia puede definir la causa.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre disfunción del injerto y rechazo del trasplante renal.",
    internacional: "KDIGO Clinical Practice Guideline for the Care of Kidney Transplant Recipients, 2009; recomendaciones vigentes del centro."
  },
  bibliografia: "KDIGO Kidney Transplant Recipient Guideline, 2009; Harrison's Principles of Internal Medicine, 19.ª ed."
},

{
  id: "NEF-231",
  especialidad: "Nefrología",
  tema: "Nefropatías glomerulares",
  subtema: "Nefropatía por IgA",
  dificultad: "Baja",
  caso: `Varón de 19 años presenta hematuria macroscópica que comienza un día después de desarrollar odinofagia y congestión nasal. La creatinina permanece normal y no presenta edema importante.`,
  pregunta: "¿Qué característica temporal orienta hacia nefropatía por IgA frente a glomerulonefritis postestreptocócica?",
  opciones: [
    "Hematuria coincidente o muy próxima a la infección de vías respiratorias",
    "Hematuria que aparece exclusivamente seis meses después de la infección",
    "Ausencia obligatoria de inmunoglobulinas en el mesangio",
    "Proteinuria masiva en todos los episodios",
    "Presencia necesaria de insuficiencia renal terminal al inicio"
  ],
  respuestaCorrecta: 0,
  explicacion: `La nefropatía por IgA puede producir episodios de hematuria macroscópica durante o poco después de una infección de mucosas, fenómeno denominado hematuria sinfaríngica. En la glomerulonefritis postestreptocócica suele existir un periodo de latencia después de la infección. La confirmación de nefropatía por IgA requiere demostración de depósitos mesangiales predominantes de IgA en biopsia cuando está indicada.`,
  perlaENARM: "Hematuria sinfaríngica orienta a nefropatía por IgA; el intervalo de latencia ayuda al diagnóstico diferencial.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre glomerulopatías y hematuria.",
    internacional: "KDIGO Clinical Practice Guideline for IgA Nephropathy and IgA Vasculitis, actualización vigente."
  },
  bibliografia: "KDIGO Glomerular Diseases Guideline, 2021; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-232",
  especialidad: "Nefrología",
  tema: "Nefropatías glomerulares",
  subtema: "Enfermedad de cambios mínimos",
  dificultad: "Media",
  caso: `Niño de 6 años desarrolla edema periorbitario y de extremidades inferiores. Presenta proteinuria intensa, hipoalbuminemia, complemento normal y filtrado glomerular conservado. No hay hematuria macroscópica ni manifestaciones sistémicas.`,
  pregunta: "¿Qué patrón histológico se espera en la enfermedad de cambios mínimos?",
  opciones: [
    "Borramiento difuso de los pedicelos podocitarios en microscopía electrónica",
    "Depósitos lineales de IgG a lo largo de la membrana basal glomerular",
    "Semilunas celulares en prácticamente todos los glomérulos",
    "Depósitos mesangiales predominantes de IgA en inmunofluorescencia",
    "Nódulos de Kimmelstiel-Wilson como lesión característica"
  ],
  respuestaCorrecta: 0,
  explicacion: `La enfermedad de cambios mínimos es una causa frecuente de síndrome nefrótico en niños. La microscopía óptica puede ser prácticamente normal, mientras que la microscopía electrónica muestra borramiento difuso de los pedicelos. En un niño con presentación típica puede iniciarse tratamiento según las recomendaciones pediátricas sin biopsia inicial rutinaria; las características atípicas pueden modificar esta decisión.`,
  perlaENARM: "Síndrome nefrótico infantil con complemento normal y borramiento de pedicelos orienta a enfermedad de cambios mínimos.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre síndrome nefrótico idiopático pediátrico.",
    internacional: "KDIGO Clinical Practice Guideline for the Management of Glomerular Diseases, 2021."
  },
  bibliografia: "KDIGO Glomerular Diseases Guideline, 2021; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-233",
  especialidad: "Nefrología",
  tema: "Nefropatías glomerulares",
  subtema: "Glomeruloesclerosis focal y segmentaria",
  dificultad: "Media",
  caso: `Hombre de 42 años con obesidad importante y antecedente de reducción de masa renal presenta proteinuria persistente. La biopsia muestra esclerosis que afecta solo una parte de algunos glomérulos.`,
  pregunta: "¿Qué significa el término focal y segmentaria en la descripción histológica?",
  opciones: [
    "La lesión afecta algunos glomérulos y compromete solo una porción de los glomérulos afectados",
    "Todos los glomérulos están completamente esclerosados",
    "La lesión se limita exclusivamente al intersticio",
    "Existe necrosis de todos los túbulos renales",
    "La enfermedad afecta únicamente los vasos extrarrenales"
  ],
  respuestaCorrecta: 0,
  explicacion: `Focal indica que no todos los glomérulos están afectados, mientras que segmentaria significa que la esclerosis compromete solo una parte del penacho glomerular. Este patrón puede observarse en enfermedades primarias y secundarias, incluidas las relacionadas con hiperfiltración. La distinción etiológica es importante porque el tratamiento inmunosupresor no está indicado de manera indiscriminada en las formas secundarias.`,
  perlaENARM: "Focal describe cuántos glomérulos están afectados; segmentaria describe cuánto del penacho está lesionado.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre glomerulopatías y síndrome nefrótico.",
    internacional: "KDIGO Clinical Practice Guideline for the Management of Glomerular Diseases, 2021."
  },
  bibliografia: "KDIGO Glomerular Diseases Guideline, 2021; Brenner & Rector's The Kidney."
},
{
  id: "NEF-234",
  especialidad: "Nefrología",
  tema: "Nefropatías glomerulares",
  subtema: "Nefropatía membranosa",
  dificultad: "Media",
  caso: `Mujer de 48 años presenta edema progresivo y proteinuria de rango nefrótico. La biopsia revela engrosamiento de las paredes capilares glomerulares y depósitos inmunes subepiteliales. No tiene diabetes conocida.`,
  pregunta: "¿Qué autoanticuerpo sérico se asocia con frecuencia a la nefropatía membranosa primaria?",
  opciones: [
    "Anticuerpos contra el receptor de fosfolipasa A2 M, conocido como PLA2R",
    "Anticuerpos contra la desmogleína 1 como marcador renal específico",
    "Anticuerpos contra el receptor de TSH",
    "Anticuerpos antimúsculo liso como marcador específico de esta glomerulopatía",
    "Anticuerpos contra el factor intrínseco"
  ],
  respuestaCorrecta: 0,
  explicacion: `Los anticuerpos anti-PLA2R se asocian con una proporción importante de casos de nefropatía membranosa primaria y pueden ayudar al diagnóstico y seguimiento. Un resultado negativo no excluye la enfermedad. También debe evaluarse la posibilidad de causas secundarias, como enfermedades autoinmunes, infecciones, neoplasias y exposición a determinados fármacos.`,
  perlaENARM: "Anti-PLA2R apoya el diagnóstico de nefropatía membranosa primaria, pero no elimina la necesidad de valorar causas secundarias cuando corresponde.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre síndrome nefrótico y glomerulopatías.",
    internacional: "KDIGO Clinical Practice Guideline for the Management of Glomerular Diseases, 2021."
  },
  bibliografia: "KDIGO Glomerular Diseases Guideline, 2021; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-235",
  especialidad: "Nefrología",
  tema: "Nefropatías glomerulares",
  subtema: "Nefritis lúpica",
  dificultad: "Media",
  caso: `Mujer de 26 años con lupus eritematoso sistémico presenta proteinuria creciente, hematuria y descenso del filtrado glomerular. El complemento está disminuido y los anticuerpos anti-dsDNA han aumentado.`,
  pregunta: "¿Qué procedimiento permite clasificar la lesión renal y orientar la intensidad del tratamiento inmunosupresor?",
  opciones: [
    "Biopsia renal con evaluación por microscopía óptica, inmunofluorescencia y microscopía electrónica cuando esté disponible",
    "Radiografía simple de abdomen",
    "Medición aislada de ácido úrico",
    "Prueba de tolerancia oral a la glucosa",
    "Cultivo de orina como único estudio"
  ],
  respuestaCorrecta: 0,
  explicacion: `La biopsia renal permite clasificar la nefritis lúpica, valorar actividad y cronicidad y detectar lesiones que requieren tratamientos diferentes. La proteinuria, el sedimento urinario, la función renal y los marcadores inmunológicos ayudan a decidir cuándo realizarla, pero no sustituyen la caracterización histológica cuando está indicada.`,
  perlaENARM: "En lupus con sospecha de nefritis activa, la biopsia renal puede cambiar de forma sustancial el tratamiento y el pronóstico.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre lupus eritematoso sistémico y nefritis lúpica.",
    internacional: "KDIGO Clinical Practice Guideline for the Management of Lupus Nephritis, 2024."
  },
  bibliografia: "KDIGO Lupus Nephritis Guideline, 2024; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-236",
  especialidad: "Nefrología",
  tema: "Enfermedades renales hereditarias",
  subtema: "Síndrome de Alport",
  dificultad: "Baja",
  caso: `Adolescente de 16 años presenta hematuria microscópica persistente desde la infancia, hipoacusia neurosensorial y un familiar materno que desarrolló insuficiencia renal a edad temprana.`,
  pregunta: "¿Qué estructura está alterada principalmente en el síndrome de Alport?",
  opciones: [
    "Colágeno tipo IV de las membranas basales",
    "Colágeno tipo I de la matriz ósea exclusivamente",
    "Receptor de vasopresina V2",
    "Cotransportador NKCC2 del asa de Henle",
    "Canal epitelial de sodio del túbulo colector"
  ],
  respuestaCorrecta: 0,
  explicacion: `El síndrome de Alport se relaciona con variantes patogénicas en genes que codifican cadenas del colágeno tipo IV, componente esencial de membranas basales glomerulares, cocleares y oculares. La hematuria persistente, la pérdida auditiva y determinados hallazgos oculares orientan al diagnóstico. El patrón hereditario depende del gen implicado.`,
  perlaENARM: "Hematuria familiar más hipoacusia neurosensorial sugiere síndrome de Alport por alteración del colágeno tipo IV.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre hematuria persistente y enfermedades renales hereditarias.",
    internacional: "KDIGO guidance on genetic kidney diseases; recomendaciones vigentes."
  },
  bibliografia: "Brenner & Rector's The Kidney; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-237",
  especialidad: "Nefrología",
  tema: "Enfermedades renales hereditarias",
  subtema: "Enfermedad de Fabry",
  dificultad: "Media",
  caso: `Varón de 29 años presenta dolor urente en manos y pies desde la infancia, intolerancia al calor, angiokeratomas y proteinuria. Varios familiares maternos presentan manifestaciones compatibles.`,
  pregunta: "¿Qué alteración metabólica está asociada a esta enfermedad?",
  opciones: [
    "Deficiencia de alfa-galactosidasa A con acumulación de globotriaosilceramida",
    "Deficiencia de ADAMTS13 con formación de microtrombos",
    "Exceso de aldosterona por adenoma suprarrenal",
    "Deficiencia de colágeno tipo I exclusivamente",
    "Mutación aislada de acuaporina 2 en todos los pacientes"
  ],
  respuestaCorrecta: 0,
  explicacion: `La enfermedad de Fabry es un trastorno ligado al cromosoma X asociado a deficiencia de alfa-galactosidasa A y acumulación de glucoesfingolípidos en diversos tejidos. Puede producir neuropatía dolorosa, angiokeratomas, alteraciones cardíacas y enfermedad renal progresiva. En mujeres, la actividad enzimática puede ser normal o poco concluyente, por lo que el estudio genético es especialmente importante.`,
  perlaENARM: "Fabry combina manifestaciones neurológicas, cutáneas, cardíacas y renales; en mujeres, la genética puede ser necesaria para confirmar el diagnóstico.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre enfermedades por depósito lisosomal y enfermedad renal hereditaria.",
    internacional: "Guías internacionales vigentes sobre enfermedad de Fabry."
  },
  bibliografia: "Brenner & Rector's The Kidney; literatura clínica indexada sobre enfermedad de Fabry."
},
{
  id: "NEF-238",
  especialidad: "Nefrología",
  tema: "Enfermedades renales hereditarias",
  subtema: "Cistinuria",
  dificultad: "Baja",
  caso: `Un adolescente presenta episodios repetidos de cólico renal. El análisis de un cálculo identifica cistina y la cristaluria muestra cristales hexagonales.`,
  pregunta: "¿Qué defecto explica la formación de estos cálculos?",
  opciones: [
    "Alteración del transporte tubular de cistina y aminoácidos dibásicos",
    "Exceso aislado de producción de bilirrubina",
    "Deficiencia de eritropoyetina",
    "Depósito de inmunocomplejos mesangiales",
    "Deficiencia de vasopresina por lesión hipofisaria"
  ],
  respuestaCorrecta: 0,
  explicacion: `La cistinuria es un trastorno hereditario del transporte de cistina y aminoácidos dibásicos en el túbulo renal y el intestino. La baja solubilidad de la cistina favorece la formación de cálculos recurrentes. El manejo preventivo suele incluir hidratación abundante, reducción del sodio y, según la actividad de la enfermedad, alcalinización urinaria y tratamientos específicos.`,
  perlaENARM: "Los cristales hexagonales de cistina son característicos de cistinuria.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre urolitiasis recurrente y trastornos hereditarios del metabolismo.",
    internacional: "EAU Guidelines on Urolithiasis, edición vigente."
  },
  bibliografia: "European Association of Urology Guidelines on Urolithiasis; Brenner & Rector's The Kidney."
},
{
  id: "NEF-239",
  especialidad: "Nefrología",
  tema: "Tubulopatías hereditarias",
  subtema: "Síndrome de Fanconi",
  dificultad: "Media",
  caso: `Niño de 8 años presenta retraso del crecimiento, poliuria y debilidad. Los estudios muestran glucosuria con glucemia normal, fosfaturia, aminoaciduria y bicarbonato sérico disminuido.`,
  pregunta: "¿Qué segmento de la nefrona está afectado de forma predominante?",
  opciones: [
    "Túbulo proximal",
    "Conducto colector medular exclusivamente",
    "Arteriola aferente",
    "Cápsula de Bowman",
    "Asa descendente delgada como única estructura"
  ],
  respuestaCorrecta: 0,
  explicacion: `El síndrome de Fanconi consiste en disfunción generalizada del túbulo proximal, con pérdida urinaria de sustancias normalmente reabsorbidas, como glucosa, fosfato, bicarbonato, aminoácidos y ácido úrico. Puede ser hereditario o adquirido por fármacos, tóxicos y enfermedades sistémicas. La causa determina el tratamiento y el seguimiento.`,
  perlaENARM: "Glucosuria normoglucémica acompañada de fosfaturia y pérdida de bicarbonato orienta a disfunción tubular proximal.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre tubulopatías y alteraciones del crecimiento de origen renal.",
    internacional: "Literatura nefrológica vigente sobre síndrome de Fanconi."
  },
  bibliografia: "Brenner & Rector's The Kidney; Clinical Physiology of Acid-Base and Electrolyte Disorders."
},
{
  id: "NEF-240",
  especialidad: "Nefrología",
  tema: "Nefropatías tubulointersticiales",
  subtema: "Nefropatía por litio",
  dificultad: "Media",
  caso: `Mujer de 51 años con trastorno bipolar tratada con litio durante muchos años presenta poliuria persistente, nicturia y dificultad para concentrar la orina. La glucemia es normal y no tiene hipercalcemia.`,
  pregunta: "¿Qué complicación renal crónica se asocia al uso prolongado de litio?",
  opciones: [
    "Enfermedad tubulointersticial crónica y alteración de la capacidad de concentración urinaria",
    "Glomerulonefritis postestreptocócica obligatoria",
    "Nefropatía membranosa por depósitos de IgA",
    "Obstrucción ureteral bilateral en todos los casos",
    "Aumento permanente de la síntesis de eritropoyetina"
  ],
  respuestaCorrecta: 0,
  explicacion: `El litio puede causar diabetes insípida nefrogénica y, en algunos pacientes, lesión tubulointersticial crónica con deterioro progresivo de la función renal. La evaluación incluye duración y dosis de exposición, concentración del fármaco, función renal y capacidad de concentración urinaria. Cualquier cambio terapéutico debe coordinarse con el equipo tratante por el riesgo de recaída psiquiátrica.`,
  perlaENARM: "Litio a largo plazo puede producir defecto de concentración urinaria y enfermedad tubulointersticial; la poliuria requiere evaluación específica.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre seguimiento de pacientes tratados con litio y evaluación de poliuria.",
    internacional: "Guías clínicas vigentes sobre seguridad del litio y efectos renales."
  },
  bibliografia: "Brenner & Rector's The Kidney; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-241",
  especialidad: "Nefrología",
  tema: "Nefropatías tubulointersticiales",
  subtema: "Nefropatía por analgésicos",
  dificultad: "Media",
  caso: `Mujer de 64 años con uso crónico de combinaciones analgésicas consulta por deterioro progresivo de la función renal y episodios de hematuria. La imagen muestra alteraciones papilares renales.`,
  pregunta: "¿Qué lesión anatómica se asocia clásicamente con la nefropatía analgésica avanzada?",
  opciones: [
    "Necrosis papilar renal y lesión tubulointersticial crónica",
    "Depósitos lineales de IgG en la membrana basal glomerular",
    "Borramiento aislado de pedicelos podocitarios",
    "Aneurismas de la arteria renal como hallazgo constante",
    "Hipertrofia exclusiva de la cápsula de Bowman"
  ],
  respuestaCorrecta: 0,
  explicacion: `La exposición crónica a determinados analgésicos puede asociarse con nefropatía tubulointersticial y necrosis papilar. La presentación depende de los fármacos, la duración, la dosis y otros factores de riesgo. La evaluación requiere revisar detalladamente las exposiciones y descartar otras causas de enfermedad renal y hematuria.`,
  perlaENARM: "La necrosis papilar puede aparecer en nefropatía analgésica, diabetes, pielonefritis y enfermedad falciforme.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre uso seguro de analgésicos y enfermedad renal crónica.",
    internacional: "KDIGO CKD Guideline, 2024."
  },
  bibliografia: "KDIGO CKD Guideline, 2024; Brenner & Rector's The Kidney."
},
{
  id: "NEF-242",
  especialidad: "Nefrología",
  tema: "Nefropatías asociadas a enfermedades sistémicas",
  subtema: "Amiloidosis renal",
  dificultad: "Media",
  caso: `Varón de 63 años presenta edema, proteinuria de rango nefrótico, pérdida de peso y neuropatía periférica. La evaluación sistémica plantea una enfermedad por depósito proteico.`,
  pregunta: "¿Qué hallazgo histológico apoya la presencia de amiloide en tejido renal?",
  opciones: [
    "Material extracelular con birrefringencia verde manzana con rojo Congo bajo luz polarizada",
    "Cristales hexagonales de cistina exclusivamente",
    "Depósitos de calcio visibles solo en el túbulo colector",
    "Ausencia de material extracelular en todos los casos",
    "Esquistocitos dentro de los capilares glomerulares como hallazgo definitorio"
  ],
  respuestaCorrecta: 0,
  explicacion: `La amiloidosis se caracteriza por depósitos extracelulares de proteínas mal plegadas. La tinción con rojo Congo y la birrefringencia verde manzana bajo luz polarizada constituyen un hallazgo clásico. Es necesario tipificar el amiloide, ya que la conducta terapéutica depende de la proteína implicada y de la enfermedad subyacente.`,
  perlaENARM: "Rojo Congo con birrefringencia verde manzana orienta a amiloidosis; la tipificación del depósito determina el tratamiento.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre amiloidosis sistémica y afectación renal.",
    internacional: "Guías internacionales vigentes sobre amiloidosis sistémica."
  },
  bibliografia: "Harrison's Principles of Internal Medicine, 19.ª ed.; Brenner & Rector's The Kidney."
},
{
  id: "NEF-243",
  especialidad: "Nefrología",
  tema: "Nefropatías asociadas a neoplasias",
  subtema: "Nefropatía por cilindros de cadenas ligeras",
  dificultad: "Media",
  caso: `Hombre de 70 años presenta dolor óseo, anemia, creatinina elevada y proteinuria. La electroforesis e inmunofijación detectan una proteína monoclonal y se sospecha mieloma múltiple.`,
  pregunta: "¿Qué mecanismo puede producir lesión renal aguda en este contexto?",
  opciones: [
    "Formación de cilindros intratubulares por cadenas ligeras monoclonales",
    "Depósito obligatorio de IgA mesangial",
    "Deficiencia aislada de vasopresina",
    "Pérdida exclusiva de sodio por el túbulo distal",
    "Obstrucción ureteral por cristales de cistina en todos los pacientes"
  ],
  respuestaCorrecta: 0,
  explicacion: `En el mieloma múltiple, las cadenas ligeras filtradas pueden interactuar con proteínas tubulares y formar cilindros que obstruyen y lesionan los túbulos. La deshidratación, la hipercalcemia y algunos fármacos pueden agravar el daño. La evaluación debe identificar rápidamente la enfermedad hematológica y diferenciar esta lesión de amiloidosis o enfermedad por depósito de inmunoglobulinas.`,
  perlaENARM: "En mieloma con lesión renal, considera nefropatía por cilindros de cadenas ligeras y evita factores que agraven la lesión tubular.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre mieloma múltiple y complicaciones renales.",
    internacional: "International Myeloma Working Group recommendations on myeloma-related renal impairment."
  },
  bibliografia: "International Myeloma Working Group guidance; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-244",
  especialidad: "Nefrología",
  tema: "Nefropatías asociadas a neoplasias",
  subtema: "Enfermedad por depósito de cadenas ligeras",
  dificultad: "Media",
  caso: `Paciente con gammapatía monoclonal presenta hipertensión, proteinuria y deterioro renal progresivo. La biopsia muestra depósitos monoclonales no fibrilares a lo largo de membranas basales.`,
  pregunta: "¿Qué entidad debe distinguirse de la amiloidosis AL y de la nefropatía por cilindros?",
  opciones: [
    "Enfermedad por depósito de cadenas ligeras",
    "Glomerulonefritis postinfecciosa clásica",
    "Síndrome de Alport",
    "Enfermedad de cambios mínimos",
    "Diabetes insípida central"
  ],
  respuestaCorrecta: 0,
  explicacion: `La enfermedad por depósito de cadenas ligeras puede producir depósitos no fibrilares, frecuentemente lineales, en membranas basales glomerulares y tubulares. La amiloidosis AL presenta depósitos fibrilares y características histológicas diferentes, mientras que la nefropatía por cilindros afecta predominantemente los túbulos. La biopsia y la caracterización de la proteína monoclonal son fundamentales para diferenciarlas.`,
  perlaENARM: "Una gammapatía monoclonal puede causar varias lesiones renales distintas; el patrón histológico permite diferenciarlas.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre gammapatías monoclonales y enfermedad renal.",
    internacional: "International Myeloma Working Group recommendations on monoclonal gammopathy-related renal disease."
  },
  bibliografia: "International Myeloma Working Group guidance; Brenner & Rector's The Kidney."
},
{
  id: "NEF-245",
  especialidad: "Nefrología",
  tema: "Nefropatías metabólicas",
  subtema: "Nefropatía aguda por ácido úrico",
  dificultad: "Media",
  caso: `Paciente con linfoma de alto grado desarrolla hiperuricemia marcada, hiperfosfatemia y deterioro renal poco después de iniciar tratamiento citotóxico. La diuresis disminuye.`,
  pregunta: "¿Qué mecanismo contribuye a la lesión renal en el síndrome de lisis tumoral?",
  opciones: [
    "Precipitación de ácido úrico y otros solutos, junto con lesión tubular y alteraciones metabólicas",
    "Depósito exclusivo de IgA en el mesangio",
    "Deficiencia de colágeno tipo IV",
    "Aumento aislado de eritropoyetina",
    "Producción excesiva de acuaporina 2 como mecanismo único"
  ],
  respuestaCorrecta: 0,
  explicacion: `La lisis tumoral libera grandes cantidades de potasio, fosfato y ácidos nucleicos. El metabolismo de purinas genera ácido úrico, que puede contribuir a la precipitación intratubular; el fosfato también puede formar depósitos de fosfato cálcico. La prevención y el manejo requieren estratificación del riesgo, hidratación individualizada, monitorización estrecha y tratamiento específico según el contexto.`,
  perlaENARM: "En síndrome de lisis tumoral vigila potasio, fósforo, calcio, ácido úrico y función renal desde antes del tratamiento oncológico cuando el riesgo lo justifique.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre síndrome de lisis tumoral y complicaciones renales en oncología.",
    internacional: "Guías internacionales vigentes sobre prevención y manejo del síndrome de lisis tumoral."
  },
  bibliografia: "Harrison's Principles of Internal Medicine, 19.ª ed.; literatura oncohematológica indexada sobre síndrome de lisis tumoral."
},
{
  id: "NEF-246",
  especialidad: "Nefrología",
  tema: "Nefropatías vasculares",
  subtema: "Estenosis de arteria renal",
  dificultad: "Media",
  caso: `Mujer de 38 años sin antecedentes de hipertensión desarrolla cifras tensionales persistentemente elevadas. La imagen vascular revela estrechamientos alternados con dilataciones en segmentos de la arteria renal, sin predominio de placas ostiales ateroscleróticas.`,
  pregunta: "¿Qué enfermedad vascular puede producir este patrón angiográfico?",
  opciones: [
    "Displasia fibromuscular",
    "Nefropatía membranosa",
    "Glomerulonefritis por IgA",
    "Síndrome de Alport",
    "Amiloidosis renal"
  ],
  respuestaCorrecta: 0,
  explicacion: `La displasia fibromuscular es una enfermedad arterial no aterosclerótica ni inflamatoria que puede afectar las arterias renales y producir hipertensión secundaria. El patrón multifocal clásico se describe como cuentas de rosario por la alternancia de estenosis y dilataciones. La evaluación y el tratamiento dependen de la presentación clínica y de la repercusión hemodinámica.`,
  perlaENARM: "Hipertensión en una persona joven con patrón angiográfico en cuentas de rosario orienta a displasia fibromuscular.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre hipertensión arterial secundaria.",
    internacional: "Guías internacionales vigentes sobre displasia fibromuscular y enfermedad renovascular."
  },
  bibliografia: "Harrison's Principles of Internal Medicine, 19.ª ed.; literatura vascular y nefrológica indexada."
},
{
  id: "NEF-247",
  especialidad: "Nefrología",
  tema: "Nefropatías vasculares",
  subtema: "Enfermedad ateroembólica renal",
  dificultad: "Media",
  caso: `Hombre de 74 años con aterosclerosis extensa desarrolla deterioro renal progresivo y livedo reticularis varios días después de una angiografía arterial. Presenta eosinofilia y complemento discretamente disminuido.`,
  pregunta: "¿Qué proceso explica la combinación de lesión renal y manifestaciones cutáneas?",
  opciones: [
    "Embolización de cristales de colesterol desde placas ateroscleróticas",
    "Nefropatía por cambios mínimos",
    "Deficiencia hereditaria de alfa-galactosidasa A",
    "Obstrucción ureteral por un cálculo único",
    "Diabetes insípida nefrogénica"
  ],
  respuestaCorrecta: 0,
  explicacion: `La enfermedad ateroembólica renal ocurre cuando cristales de colesterol procedentes de placas ateroscleróticas obstruyen pequeñas arterias y arteriolas. Puede aparecer después de procedimientos vasculares o de manera espontánea. La evolución subaguda, el livedo reticularis, los dedos azules y la eosinofilia apoyan el diagnóstico, aunque la presentación es variable.`,
  perlaENARM: "Deterioro renal subagudo después de instrumentación vascular más livedo y eosinofilia sugiere embolización de colesterol.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre enfermedad renal vascular y complicaciones de procedimientos endovasculares.",
    internacional: "Literatura nefrológica y vascular vigente sobre ateroembolismo por colesterol."
  },
  bibliografia: "Harrison's Principles of Internal Medicine, 19.ª ed.; Brenner & Rector's The Kidney."
},
{
  id: "NEF-248",
  especialidad: "Nefrología",
  tema: "Hipertensión secundaria",
  subtema: "Hiperaldosteronismo primario",
  dificultad: "Media",
  caso: `Varón de 46 años presenta hipertensión resistente e hipokalemia espontánea. La evaluación bioquímica muestra renina suprimida y concentración de aldosterona inapropiadamente elevada.`,
  pregunta: "¿Qué alteración fisiológica caracteriza al hiperaldosteronismo primario?",
  opciones: [
    "Secreción autónoma o inapropiada de aldosterona con supresión de renina",
    "Aumento simultáneo y proporcional de renina y aldosterona en todos los casos",
    "Deficiencia absoluta de aldosterona",
    "Supresión de la reabsorción distal de sodio por completo",
    "Aumento aislado de hormona antidiurética"
  ],
  respuestaCorrecta: 0,
  explicacion: `El hiperaldosteronismo primario se caracteriza por producción de aldosterona relativamente autónoma, con expansión de volumen y supresión de renina. Puede manifestarse con hipertensión resistente y, aunque la hipokalemia es clásica, muchos pacientes presentan potasio normal. La interpretación de aldosterona y renina debe considerar fármacos, potasio y condiciones de muestreo.`,
  perlaENARM: "Hipertensión resistente con renina suprimida y aldosterona inapropiadamente elevada debe hacer sospechar hiperaldosteronismo primario.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre hipertensión secundaria y trastornos suprarrenales.",
    internacional: "Endocrine Society clinical practice guidance on primary aldosteronism, actualización vigente."
  },
  bibliografia: "Harrison's Principles of Internal Medicine, 19.ª ed.; guías internacionales sobre hiperaldosteronismo primario."
},
{
  id: "NEF-249",
  especialidad: "Nefrología",
  tema: "Nefropatías asociadas a enfermedades sistémicas",
  subtema: "Crioglobulinemia y glomerulonefritis",
  dificultad: "Media",
  caso: `Mujer de 55 años presenta púrpura palpable, artralgias, proteinuria y hematuria. El complemento C4 está disminuido y la evaluación detecta crioglobulinas circulantes.`,
  pregunta: "¿Qué patrón renal puede aparecer en la crioglobulinemia mixta?",
  opciones: [
    "Glomerulonefritis membranoproliferativa con depósitos de inmunoglobulinas y complemento",
    "Borramiento aislado de pedicelos sin depósitos inmunes en todos los casos",
    "Nefropatía diabética nodular como lesión obligatoria",
    "Necrosis papilar por analgésicos como hallazgo característico",
    "Esclerosis glomerular global sin inflamación como patrón exclusivo"
  ],
  respuestaCorrecta: 0,
  explicacion: `La crioglobulinemia mixta puede producir vasculitis de pequeños vasos y glomerulonefritis, con frecuencia de patrón membranoproliferativo. La púrpura palpable, las artralgias, la hipocomplementemia —en particular C4 bajo— y la presencia de crioglobulinas orientan al diagnóstico. Deben investigarse causas subyacentes, incluidas infecciones crónicas y enfermedades autoinmunes o hematológicas.`,
  perlaENARM: "Púrpura palpable, C4 bajo y crioglobulinas orientan a vasculitis crioglobulinémica con posible afectación renal.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre vasculitis sistémicas, hepatitis C y glomerulopatías.",
    internacional: "KDIGO guidance on hepatitis C in CKD and glomerular diseases, edición vigente."
  },
  bibliografia: "KDIGO guidance on HCV in CKD; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-250",
  especialidad: "Nefrología",
  tema: "Interpretación de biopsia renal",
  subtema: "Inmunofluorescencia glomerular",
  dificultad: "Media",
  caso: `Un paciente con hematuria, proteinuria y deterioro renal se somete a biopsia. La inmunofluorescencia muestra depósitos granulares de inmunoglobulinas y complemento distribuidos en los glomérulos.`,
  pregunta: "¿Qué principio permite interpretar este patrón de inmunofluorescencia?",
  opciones: [
    "Los depósitos granulares suelen reflejar acumulación de inmunocomplejos o proteínas inmunes en el tejido",
    "El patrón granular confirma por sí solo una enfermedad anti-MBG",
    "La inmunofluorescencia no aporta información sobre glomerulopatías",
    "Todos los depósitos granulares corresponden exclusivamente a nefropatía diabética",
    "El patrón granular excluye toda enfermedad mediada por inmunidad"
  ],
  respuestaCorrecta: 0,
  explicacion: `La inmunofluorescencia permite identificar la distribución y composición de depósitos inmunes. Un patrón granular puede observarse en distintas glomerulopatías por inmunocomplejos, mientras que el patrón lineal de IgG es característico de la enfermedad anti-MBG en el contexto adecuado. La interpretación exige correlacionar microscopía óptica, inmunofluorescencia, microscopía electrónica y presentación clínica.`,
  perlaENARM: "Granular orienta a depósitos inmunes; lineal de IgG sugiere enfermedad anti-MBG, siempre con correlación clinicopatológica.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre diagnóstico histopatológico de glomerulopatías.",
    internacional: "KDIGO Clinical Practice Guideline for the Management of Glomerular Diseases, 2021."
  },
  bibliografia: "KDIGO Glomerular Diseases Guideline, 2021; Brenner & Rector's The Kidney."
},

{
  id: "NEF-251",
  especialidad: "Nefrología",
  tema: "Nefrología clínica",
  subtema: "Hematuria de origen glomerular",
  dificultad: "Baja",
  caso: `Un hombre de 24 años consulta por orina color té. El examen microscópico identifica eritrocitos dismórficos y cilindros eritrocitarios. No presenta disuria ni dolor tipo cólico.`,
  pregunta: "¿Qué estructura explica el origen de la hematuria?",
  opciones: [
    "La barrera de filtración glomerular lesionada",
    "El urotelio vesical inflamado como única posibilidad",
    "La próstata aumentada de tamaño",
    "El uréter obstruido por un cálculo en todos los casos",
    "Los vasos superficiales de la uretra distal"
  ],
  respuestaCorrecta: 0,
  explicacion: `Los eritrocitos dismórficos y los cilindros eritrocitarios orientan a sangrado de origen glomerular. La lesión de la barrera de filtración permite el paso de eritrocitos al espacio urinario. Estos hallazgos deben integrarse con proteinuria, presión arterial, función renal y manifestaciones sistémicas.`,
  perlaENARM: "Cilindros eritrocitarios sugieren origen renal glomerular y no una hemorragia aislada de vías urinarias bajas.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre hematuria y glomerulopatías.",
    internacional: "KDIGO Glomerular Diseases Guideline, 2021."
  },
  bibliografia: "KDIGO Glomerular Diseases Guideline, 2021; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-252",
  especialidad: "Nefrología",
  tema: "Nefrología clínica",
  subtema: "Hematuria de origen urológico",
  dificultad: "Media",
  caso: `Un hombre de 67 años, fumador de larga evolución, presenta dos episodios de hematuria macroscópica indolora. La creatinina es normal y el sedimento no muestra cilindros eritrocitarios.`,
  pregunta: "¿Qué aspecto del caso obliga a investigar una lesión urológica, incluso con función renal conservada?",
  opciones: [
    "Hematuria macroscópica indolora en un paciente con riesgo de neoplasia urotelial",
    "Creatinina sérica dentro del intervalo de referencia",
    "Ausencia de edema en las extremidades",
    "Presión arterial normal durante la consulta",
    "Ausencia de antecedente familiar de enfermedad renal"
  ],
  respuestaCorrecta: 0,
  explicacion: `La hematuria macroscópica indolora, particularmente en personas mayores con exposición al tabaco, requiere evaluación urológica para descartar neoplasia. Una creatinina normal no excluye tumores vesicales o del tracto urinario superior. La evaluación puede incluir cistoscopia e imagen del tracto urinario según el riesgo y las características del paciente.`,
  perlaENARM: "La hematuria visible e indolora en un adulto mayor no debe atribuirse automáticamente a enfermedad renal médica.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre diagnóstico de hematuria y cáncer urológico.",
    internacional: "Guías internacionales vigentes sobre evaluación de hematuria."
  },
  bibliografia: "Harrison's Principles of Internal Medicine, 19.ª ed.; guías urológicas internacionales sobre hematuria."
},
{
  id: "NEF-253",
  especialidad: "Nefrología",
  tema: "Infecciones urinarias",
  subtema: "Bacteriuria asintomática",
  dificultad: "Baja",
  caso: `Mujer de 72 años sin disuria, urgencia urinaria, fiebre ni dolor lumbar presenta urocultivo positivo durante una evaluación rutinaria. No está embarazada y no tiene un procedimiento urológico invasivo programado.`,
  pregunta: "¿Cuál es el principio general de manejo de la bacteriuria asintomática en esta paciente?",
  opciones: [
    "No administrar antibióticos de rutina si no existen indicaciones específicas",
    "Iniciar antibióticos intravenosos durante 14 días en todos los casos",
    "Indicar tratamiento porque todo cultivo positivo representa infección sintomática",
    "Realizar hemodiálisis preventiva",
    "Solicitar biopsia renal antes de decidir cualquier seguimiento"
  ],
  respuestaCorrecta: 0,
  explicacion: `La bacteriuria asintomática generalmente no requiere tratamiento en adultos no embarazados. Las excepciones importantes incluyen el embarazo y determinados procedimientos urológicos que lesionan la mucosa. Tratarla sin indicación aumenta los efectos adversos y la selección de resistencia antimicrobiana.`,
  perlaENARM: "Urocultivo positivo sin síntomas no equivale automáticamente a infección urinaria que requiera antibióticos.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre infección de vías urinarias y bacteriuria asintomática.",
    internacional: "IDSA Clinical Practice Guideline for the Management of Asymptomatic Bacteriuria, 2019."
  },
  bibliografia: "IDSA Asymptomatic Bacteriuria Guideline, 2019; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-254",
  especialidad: "Nefrología",
  tema: "Infecciones urinarias",
  subtema: "Pielonefritis aguda",
  dificultad: "Baja",
  caso: `Una mujer de 29 años presenta fiebre, escalofríos, dolor en flanco derecho y puñopercusión lumbar positiva. El examen de orina muestra piuria y bacteriuria.`,
  pregunta: "¿Qué diagnóstico integra los hallazgos clínicos y urinarios?",
  opciones: [
    "Pielonefritis aguda",
    "Cistitis no complicada sin afectación sistémica",
    "Síndrome nefrótico primario",
    "Nefropatía membranosa",
    "Enfermedad de cambios mínimos"
  ],
  respuestaCorrecta: 0,
  explicacion: `La fiebre, el dolor en flanco y los datos urinarios inflamatorios son compatibles con pielonefritis aguda. El urocultivo ayuda a identificar el microorganismo y orientar el tratamiento. La presencia de sepsis, embarazo, obstrucción, inmunosupresión o deterioro renal modifica la evaluación y puede requerir hospitalización.`,
  perlaENARM: "Fiebre más dolor lumbar y piuria sugiere infección urinaria alta; busca factores de complicación.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre diagnóstico y tratamiento de pielonefritis.",
    internacional: "Guías internacionales vigentes sobre infección urinaria complicada."
  },
  bibliografia: "Harrison's Principles of Internal Medicine, 19.ª ed.; guías internacionales de infección urinaria."
},
{
  id: "NEF-255",
  especialidad: "Nefrología",
  tema: "Infecciones urinarias",
  subtema: "Pielonefritis enfisematosa",
  dificultad: "Media",
  caso: `Paciente de 61 años con diabetes mal controlada presenta fiebre, dolor lumbar e hipotensión. La tomografía muestra gas en el parénquima renal y en los tejidos adyacentes.`,
  pregunta: "¿Qué característica convierte este cuadro en una urgencia de alta gravedad?",
  opciones: [
    "Infección necrosante con formación de gas y riesgo elevado de sepsis",
    "Presencia aislada de glucosuria sin síntomas",
    "Proteinuria ortostática",
    "Hematuria microscópica sin alteraciones sistémicas",
    "Quiste renal simple incidental"
  ],
  respuestaCorrecta: 0,
  explicacion: `La pielonefritis enfisematosa es una infección necrosante grave asociada con frecuencia a diabetes y obstrucción urinaria. Requiere reanimación, antibióticos de amplio espectro ajustados a cultivos y valoración urgente para control del foco, que puede incluir drenaje o intervención quirúrgica según extensión, estabilidad y respuesta al tratamiento.`,
  perlaENARM: "Gas en el parénquima renal en un paciente séptico con diabetes debe hacer sospechar pielonefritis enfisematosa.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre infección urinaria complicada y sepsis.",
    internacional: "Guías internacionales vigentes sobre infección urinaria complicada y control del foco."
  },
  bibliografia: "Harrison's Principles of Internal Medicine, 19.ª ed.; literatura urológica indexada sobre pielonefritis enfisematosa."
},
{
  id: "NEF-256",
  especialidad: "Nefrología",
  tema: "Nefrolitiasis",
  subtema: "Cálculos de estruvita",
  dificultad: "Baja",
  caso: `Mujer de 58 años con infecciones urinarias recurrentes por bacterias productoras de ureasa presenta un cálculo coraliforme. El análisis urinario muestra pH alcalino.`,
  pregunta: "¿Qué composición es característica de los cálculos asociados a microorganismos productores de ureasa?",
  opciones: [
    "Estruvita, compuesta por fosfato amónico magnésico",
    "Cistina pura en todos los casos",
    "Ácido úrico exclusivamente",
    "Oxalato de calcio monohidratado en todos los casos",
    "Bilirrubina conjugada"
  ],
  respuestaCorrecta: 0,
  explicacion: `La ureasa bacteriana hidroliza urea y genera amonio, lo que alcaliniza la orina y favorece la precipitación de estruvita. Estos cálculos pueden crecer hasta formar estructuras coraliformes y asociarse con infección persistente. El manejo requiere controlar la infección y valorar la eliminación completa de la carga litiásica.`,
  perlaENARM: "Orina alcalina, infección por bacterias productoras de ureasa y cálculo coraliforme orientan a estruvita.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre urolitiasis e infección urinaria.",
    internacional: "European Association of Urology Guidelines on Urolithiasis, edición vigente."
  },
  bibliografia: "EAU Guidelines on Urolithiasis; Brenner & Rector's The Kidney."
},
{
  id: "NEF-257",
  especialidad: "Nefrología",
  tema: "Nefrolitiasis",
  subtema: "Cálculos de ácido úrico",
  dificultad: "Media",
  caso: `Hombre de 54 años con síndrome metabólico y gota presenta un cálculo urinario radiolúcido en radiografía simple. El pH urinario es persistentemente ácido.`,
  pregunta: "¿Qué característica favorece la formación de cálculos de ácido úrico en este paciente?",
  opciones: [
    "pH urinario bajo que disminuye la solubilidad del ácido úrico",
    "Orina alcalina persistente como mecanismo principal",
    "Deficiencia de colágeno tipo IV",
    "Aumento de eritropoyetina",
    "Depósitos de IgG lineales en la membrana basal"
  ],
  respuestaCorrecta: 0,
  explicacion: `La acidez urinaria es un factor central en la formación de cálculos de ácido úrico, incluso cuando la excreción de urato no está marcadamente elevada. La alcalinización urinaria puede favorecer su disolución y prevenir recurrencias, con seguimiento del pH y evaluación de otros factores metabólicos.`,
  perlaENARM: "Los cálculos de ácido úrico suelen ser radiolúcidos en radiografía simple y se asocian con pH urinario bajo.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre urolitiasis y trastornos metabólicos asociados.",
    internacional: "European Association of Urology Guidelines on Urolithiasis, edición vigente."
  },
  bibliografia: "EAU Guidelines on Urolithiasis; Brenner & Rector's The Kidney."
},
{
  id: "NEF-258",
  especialidad: "Nefrología",
  tema: "Nefrolitiasis",
  subtema: "Estudio metabólico de litiasis recurrente",
  dificultad: "Media",
  caso: `Un paciente de 31 años ha presentado tres episodios de litiasis renal en cuatro años. Se recuperó un cálculo y se encuentra asintomático en la consulta de seguimiento.`,
  pregunta: "¿Qué análisis permite conocer la composición mineral del cálculo recuperado?",
  opciones: [
    "Análisis del cálculo mediante espectroscopia infrarroja o difracción de rayos X",
    "Biometría hemática como prueba definitiva de composición",
    "Electrocardiograma de doce derivaciones",
    "Medición aislada de transaminasas",
    "Prueba de tuberculina"
  ],
  respuestaCorrecta: 0,
  explicacion: `El análisis del cálculo mediante técnicas como espectroscopia infrarroja o difracción de rayos X identifica su composición y ayuda a orientar la prevención. En litiasis recurrente también puede estar indicado un estudio metabólico, incluida la evaluación de orina de 24 horas, según el riesgo clínico.`,
  perlaENARM: "La composición del cálculo guía la prevención; la recurrencia justifica valorar factores metabólicos.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre diagnóstico y prevención de urolitiasis.",
    internacional: "European Association of Urology Guidelines on Urolithiasis, edición vigente."
  },
  bibliografia: "EAU Guidelines on Urolithiasis; Brenner & Rector's The Kidney."
},
{
  id: "NEF-259",
  especialidad: "Nefrología",
  tema: "Trastornos hereditarios",
  subtema: "Síndrome de Bartter",
  dificultad: "Media",
  caso: `Adolescente de 14 años presenta poliuria, debilidad muscular y retraso del crecimiento. Los estudios revelan hipokalemia, alcalosis metabólica, renina y aldosterona elevadas, con presión arterial normal.`,
  pregunta: "¿Qué mecanismo explica el perfil bioquímico del síndrome de Bartter?",
  opciones: [
    "Defecto del transporte de NaCl en la rama ascendente gruesa del asa de Henle",
    "Activación autónoma del receptor mineralocorticoide con renina suprimida",
    "Deficiencia completa de filtración glomerular",
    "Exceso de reabsorción de calcio en todos los segmentos",
    "Bloqueo del receptor V2 como lesión primaria"
  ],
  respuestaCorrecta: 0,
  explicacion: `El síndrome de Bartter agrupa tubulopatías hereditarias que alteran el transporte de sal en la rama ascendente gruesa o proteínas relacionadas. La pérdida renal de sal activa el sistema renina-angiotensina-aldosterona, favoreciendo hipokalemia y alcalosis metabólica sin hipertensión característica. El fenotipo depende de la variante genética.`,
  perlaENARM: "Bartter imita el efecto de un diurético de asa: pérdida de sal, hipokalemia y alcalosis metabólica.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre tubulopatías hereditarias y trastornos electrolíticos.",
    internacional: "Literatura nefrológica vigente sobre tubulopatías hereditarias."
  },
  bibliografia: "Brenner & Rector's The Kidney; Clinical Physiology of Acid-Base and Electrolyte Disorders."
},
{
  id: "NEF-260",
  especialidad: "Nefrología",
  tema: "Trastornos hereditarios",
  subtema: "Síndrome de Gitelman",
  dificultad: "Media",
  caso: `Mujer de 22 años presenta calambres recurrentes y fatiga. El laboratorio identifica hipokalemia, alcalosis metabólica, hipomagnesemia e hipocalciuria, con presión arterial normal.`,
  pregunta: "¿Qué transportador suele estar alterado en el síndrome de Gitelman?",
  opciones: [
    "Cotransportador NaCl sensible a tiazidas del túbulo contorneado distal",
    "Cotransportador NKCC2 de la rama ascendente gruesa como lesión típica",
    "Receptor V2 de vasopresina como causa obligatoria",
    "Canal ENaC activado por mutaciones de ganancia de función",
    "Transportador de glucosa SGLT2 exclusivamente"
  ],
  respuestaCorrecta: 0,
  explicacion: `El síndrome de Gitelman suele deberse a variantes patogénicas en SLC12A3, que codifica el cotransportador NaCl del túbulo contorneado distal. Produce pérdida renal de potasio y magnesio, alcalosis metabólica e hipocalciuria. La diferenciación frente a Bartter se apoya en el fenotipo y los estudios complementarios.`,
  perlaENARM: "Hipokalemia, alcalosis metabólica, hipomagnesemia e hipocalciuria sugieren Gitelman.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre trastornos hereditarios del transporte tubular.",
    internacional: "Literatura nefrológica vigente sobre síndrome de Gitelman."
  },
  bibliografia: "Brenner & Rector's The Kidney; Clinical Physiology of Acid-Base and Electrolyte Disorders."
},
{
  id: "NEF-261",
  especialidad: "Nefrología",
  tema: "Trastornos tubulares",
  subtema: "Acidosis tubular renal distal",
  dificultad: "Media",
  caso: `Mujer de 35 años con litiasis recurrente presenta bicarbonato sérico bajo, potasio disminuido y orina persistentemente alcalina durante un episodio de acidosis metabólica sistémica.`,
  pregunta: "¿Qué defecto fisiológico caracteriza a la acidosis tubular renal distal clásica?",
  opciones: [
    "Incapacidad para acidificar adecuadamente la orina por alteración de la secreción distal de hidrogeniones",
    "Pérdida exclusiva de glucosa por el túbulo proximal",
    "Exceso de producción renal de eritropoyetina",
    "Supresión de toda filtración glomerular",
    "Aumento aislado de la reabsorción de proteínas"
  ],
  respuestaCorrecta: 0,
  explicacion: `La acidosis tubular renal distal se debe a una alteración de la secreción de hidrogeniones o de los mecanismos que mantienen el gradiente de protones en la nefrona distal. Puede asociarse con hipokalemia, nefrolitiasis y nefrocalcinosis. La evaluación debe excluir causas de acidosis metabólica y considerar la situación clínica antes de interpretar el pH urinario.`,
  perlaENARM: "Acidosis metabólica hiperclorémica con incapacidad para acidificar la orina orienta a acidosis tubular renal distal.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre acidosis metabólica y tubulopatías.",
    internacional: "Literatura nefrológica vigente sobre acidosis tubular renal."
  },
  bibliografia: "Clinical Physiology of Acid-Base and Electrolyte Disorders; Brenner & Rector's The Kidney."
},
{
  id: "NEF-262",
  especialidad: "Nefrología",
  tema: "Trastornos tubulares",
  subtema: "Acidosis tubular renal proximal",
  dificultad: "Media",
  caso: `Paciente de 27 años presenta bicarbonato sérico bajo y acidosis metabólica hiperclorémica. Durante una fase inicial, la orina es relativamente alcalina, pero cuando el bicarbonato plasmático desciende, puede acidificarse.`,
  pregunta: "¿Qué alteración explica este comportamiento?",
  opciones: [
    "Disminución de la reabsorción proximal de bicarbonato",
    "Defecto exclusivo de secreción distal de hidrogeniones",
    "Producción excesiva de aldosterona como mecanismo único",
    "Aumento de la síntesis de calcitriol",
    "Obstrucción completa de ambos uréteres"
  ],
  respuestaCorrecta: 0,
  explicacion: `La acidosis tubular renal proximal se debe a una disminución de la capacidad del túbulo proximal para reabsorber bicarbonato filtrado. Cuando la concentración plasmática de bicarbonato cae por debajo del umbral tubular reducido, puede recuperarse la capacidad de acidificar la orina. Puede presentarse de forma aislada o como parte de un síndrome de Fanconi.`,
  perlaENARM: "En la acidosis tubular proximal, la pérdida de bicarbonato es el defecto primario; la acidificación urinaria puede conservarse después de reducirse el bicarbonato plasmático.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre acidosis metabólica y trastornos tubulares.",
    internacional: "Literatura nefrológica vigente sobre acidosis tubular renal."
  },
  bibliografia: "Clinical Physiology of Acid-Base and Electrolyte Disorders; Brenner & Rector's The Kidney."
},
{
  id: "NEF-263",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Preparación para terapia de reemplazo renal",
  dificultad: "Media",
  caso: `Paciente de 58 años con ERC avanzada presenta descenso progresivo del filtrado glomerular, pero no tiene edema refractario, síntomas urémicos ni alteraciones electrolíticas urgentes. Expresa interés en conocer sus opciones de tratamiento futuro.`,
  pregunta: "¿Qué intervención favorece una transición planificada si posteriormente necesita terapia de reemplazo renal?",
  opciones: [
    "Educación anticipada sobre modalidades, valoración de acceso y planificación compartida",
    "Esperar hasta que presente una emergencia para discutir todas las modalidades",
    "Iniciar hemodiálisis obligatoriamente por una cifra aislada de filtrado",
    "Evitar informar sobre trasplante hasta después de comenzar diálisis",
    "Suspender el seguimiento nefrológico mientras permanezca asintomático"
  ],
  respuestaCorrecta: 0,
  explicacion: `La planificación anticipada permite discutir hemodiálisis, diálisis peritoneal, trasplante y tratamiento conservador integral, según las preferencias y condiciones clínicas. También facilita preparar el acceso vascular o peritoneal y valorar trasplante anticipado cuando sea posible. El inicio de diálisis se basa en una evaluación global y no en un único umbral de filtrado glomerular.`,
  perlaENARM: "La preparación para terapia de reemplazo renal debe comenzar antes de una urgencia, con decisiones compartidas y planificación individualizada.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre ERC avanzada y modalidades de terapia de reemplazo renal.",
    internacional: "KDIGO CKD Guideline, 2024."
  },
  bibliografia: "KDIGO CKD Guideline, 2024; Brenner & Rector's The Kidney."
},
{
  id: "NEF-264",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Vacunación en ERC",
  dificultad: "Baja",
  caso: `Hombre de 63 años con ERC avanzada aún no dializado acude a revisión preventiva. No tiene contraindicaciones conocidas para vacunación y se encuentra clínicamente estable.`,
  pregunta: "¿Qué principio debe guiar la revisión de su esquema de vacunación?",
  opciones: [
    "Valorar las vacunas indicadas por edad, comorbilidades, riesgo infeccioso y posible futura terapia renal sustitutiva",
    "Evitar todas las vacunas por tener enfermedad renal",
    "Aplicar únicamente vacunas después del trasplante",
    "Suspender la prevención infecciosa cuando disminuye el filtrado glomerular",
    "Indicar vacunas vivas atenuadas de forma universal en inmunosupresión intensa"
  ],
  respuestaCorrecta: 0,
  explicacion: `La ERC aumenta el riesgo de complicaciones infecciosas y puede modificar la respuesta inmunitaria. La revisión preventiva debe incluir las vacunas recomendadas según edad, enfermedades concomitantes, exposición y plan terapéutico. En candidatos a trasplante o pacientes inmunosuprimidos, el momento y tipo de vacuna requieren una evaluación específica.`,
  perlaENARM: "La prevención infecciosa forma parte del manejo integral de la ERC; revisa el esquema antes de una posible inmunosupresión o trasplante.",
  gpc: {
    mexico: "Consultar esquema de vacunación vigente de la Secretaría de Salud y recomendaciones para ERC.",
    internacional: "CDC Adult Immunization Schedule, edición vigente; KDIGO CKD Guideline, 2024."
  },
  bibliografia: "KDIGO CKD Guideline, 2024; CDC Adult Immunization Schedule."
},
{
  id: "NEF-265",
  especialidad: "Nefrología",
  tema: "Trasplante renal",
  subtema: "Prevención de infección por citomegalovirus",
  dificultad: "Media",
  caso: `Receptor de trasplante renal con serología negativa para citomegalovirus recibe un órgano de donante seropositivo. El equipo de trasplante evalúa su riesgo infeccioso después de iniciar inmunosupresión.`,
  pregunta: "¿Qué característica define a esta combinación como un escenario de riesgo elevado para CMV?",
  opciones: [
    "Donante seropositivo y receptor seronegativo",
    "Donante y receptor seronegativos en ausencia de otras exposiciones",
    "Creatinina estable por sí sola",
    "Grupo sanguíneo idéntico",
    "Ausencia de hematuria microscópica"
  ],
  respuestaCorrecta: 0,
  explicacion: `La combinación D+/R− representa uno de los escenarios de mayor riesgo de infección por citomegalovirus después del trasplante. La prevención se organiza según el riesgo, el tipo de órgano y el protocolo del centro, mediante profilaxis antiviral o estrategias de monitorización y tratamiento anticipado.`,
  perlaENARM: "En trasplante, CMV D+/R− identifica un grupo de alto riesgo y condiciona la estrategia preventiva.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre infecciones en receptores de trasplante renal.",
    internacional: "International consensus guidelines on CMV management in solid organ transplantation, edición vigente."
  },
  bibliografia: "International Consensus Guidelines on CMV in Solid Organ Transplantation; KDIGO Kidney Transplant Recipient Guideline, 2009."
},
{
  id: "NEF-266",
  especialidad: "Nefrología",
  tema: "Trasplante renal",
  subtema: "Infección por virus BK",
  dificultad: "Media",
  caso: `Receptor de trasplante renal presenta elevación persistente de creatinina. La PCR plasmática detecta ADN del poliomavirus BK y no hay evidencia clínica de obstrucción urinaria.`,
  pregunta: "¿Qué mecanismo terapéutico suele considerarse ante replicación significativa de BK en el injerto?",
  opciones: [
    "Reducción cuidadosamente supervisada de la inmunosupresión",
    "Aumento automático de todos los inmunosupresores",
    "Suspensión permanente de toda vigilancia virológica",
    "Antibióticos betalactámicos como tratamiento antiviral específico",
    "Nefrectomía inmediata en todos los pacientes"
  ],
  respuestaCorrecta: 0,
  explicacion: `La replicación del virus BK puede causar nefropatía del injerto y deterioro funcional. La intervención principal suele consistir en reducir de forma individualizada la inmunosupresión, con monitorización de la carga viral y la función del injerto. Debe equilibrarse el control viral con el riesgo de rechazo; la biopsia puede ser necesaria según la presentación.`,
  perlaENARM: "BK positivo con disfunción del injerto requiere valorar carga viral, función renal e inmunosupresión; el ajuste debe ser supervisado por trasplante.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre infecciones virales en trasplante renal.",
    internacional: "International consensus guidance on BK polyomavirus in kidney transplantation, edición vigente."
  },
  bibliografia: "KDIGO Kidney Transplant Recipient Guideline, 2009; consenso internacional sobre poliomavirus BK."
},
{
  id: "NEF-267",
  especialidad: "Nefrología",
  tema: "Complicaciones renales en oncología",
  subtema: "Nefrotoxicidad por cisplatino",
  dificultad: "Media",
  caso: `Paciente con tumor sólido recibe quimioterapia basada en cisplatino. Días después desarrolla aumento de creatinina, hipomagnesemia y pérdida urinaria de electrolitos.`,
  pregunta: "¿Qué estructura renal es especialmente vulnerable a la toxicidad del cisplatino?",
  opciones: [
    "Túbulo proximal",
    "Glomérulo exclusivamente en todos los pacientes",
    "Urotelio vesical como única estructura renal afectada",
    "Cápsula de Bowman sin lesión tubular",
    "Arteria renal principal exclusivamente"
  ],
  respuestaCorrecta: 0,
  explicacion: `El cisplatino puede acumularse en células tubulares, especialmente del túbulo proximal, y causar lesión renal aguda y alteraciones electrolíticas como hipomagnesemia. La prevención depende del esquema oncológico y puede incluir hidratación protocolizada, monitorización de función renal y electrolitos, y ajuste o sustitución del tratamiento cuando corresponda.`,
  perlaENARM: "Cisplatino se asocia a lesión tubular proximal; vigila creatinina y magnesio durante el tratamiento.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre nefrotoxicidad por quimioterapia.",
    internacional: "Literatura oncológica y nefrológica vigente sobre prevención de nefrotoxicidad por cisplatino."
  },
  bibliografia: "Harrison's Principles of Internal Medicine, 19.ª ed.; literatura indexada sobre onconefrología."
},
{
  id: "NEF-268",
  especialidad: "Nefrología",
  tema: "Complicaciones renales en oncología",
  subtema: "Nefrotoxicidad por inhibidores de puntos de control inmunitario",
  dificultad: "Media",
  caso: `Mujer de 60 años con melanoma recibe inmunoterapia con un inhibidor de punto de control inmunitario. En el seguimiento aparece deterioro de la función renal sin hipotensión ni obstrucción evidente.`,
  pregunta: "¿Qué lesión renal se asocia con frecuencia a la toxicidad renal inmunomediada por estos fármacos?",
  opciones: [
    "Nefritis tubulointersticial aguda",
    "Síndrome de Alport de aparición súbita",
    "Cistinuria hereditaria",
    "Poliquistosis renal autosómica dominante",
    "Estenosis congénita bilateral de las arterias renales"
  ],
  respuestaCorrecta: 0,
  explicacion: `Los inhibidores de puntos de control inmunitario pueden desencadenar eventos adversos inmunomediados en distintos órganos. En el riñón, una presentación frecuente es la nefritis tubulointersticial aguda, aunque también se han descrito otras lesiones glomerulares. La evaluación debe descartar causas alternativas, revisar fármacos concomitantes y coordinarse con oncología; la biopsia puede ser útil en casos seleccionados.`,
  perlaENARM: "Deterioro renal durante inmunoterapia requiere considerar nefritis inmunomediada, pero primero deben evaluarse otras causas frecuentes de lesión renal.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre toxicidad renal por inmunoterapia oncológica.",
    internacional: "Guías internacionales vigentes de manejo de eventos adversos inmunomediados."
  },
  bibliografia: "Literatura indexada sobre onconefrología y eventos adversos renales por inhibidores de puntos de control inmunitario."
},
{
  id: "NEF-269",
  especialidad: "Nefrología",
  tema: "Embarazo y enfermedad renal",
  subtema: "Preeclampsia y afectación renal",
  dificultad: "Media",
  caso: `Mujer embarazada de 32 semanas, previamente normotensa, desarrolla hipertensión de novo y proteinuria. Presenta cefalea persistente y alteraciones visuales.`,
  pregunta: "¿Qué elemento del caso indica riesgo materno y requiere evaluación obstétrica urgente?",
  opciones: [
    "Hipertensión de novo acompañada de síntomas neurológicos de alarma",
    "Ausencia de antecedentes familiares de enfermedad renal",
    "Creatinina dentro del intervalo de referencia de adultos no embarazados como único dato",
    "Edad gestacional de 32 semanas sin otros hallazgos",
    "Ausencia de edema periférico"
  ],
  respuestaCorrecta: 0,
  explicacion: `La hipertensión de novo después de las 20 semanas junto con proteinuria puede corresponder a preeclampsia. La cefalea persistente y las alteraciones visuales son signos de alarma que requieren valoración obstétrica inmediata, evaluación de gravedad y vigilancia materno-fetal. La conducta depende de la edad gestacional y de la situación clínica.`,
  perlaENARM: "En embarazo, hipertensión de novo con síntomas neurológicos puede indicar preeclampsia con datos de gravedad, incluso si la creatinina no está muy elevada.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre diagnóstico y tratamiento de preeclampsia.",
    internacional: "ACOG Practice Bulletin on Gestational Hypertension and Preeclampsia, actualización vigente."
  },
  bibliografia: "ACOG guidance on gestational hypertension and preeclampsia; Harrison's Principles of Internal Medicine, 19.ª ed."
},
{
  id: "NEF-270",
  especialidad: "Nefrología",
  tema: "Embarazo y enfermedad renal",
  subtema: "Cambios fisiológicos del filtrado glomerular",
  dificultad: "Baja",
  caso: `Durante el segundo trimestre del embarazo, una mujer sin enfermedad renal previa presenta creatinina sérica menor que su valor pregestacional. No hay hipertensión ni proteinuria patológica.`,
  pregunta: "¿Qué cambio fisiológico explica principalmente el descenso de creatinina sérica durante un embarazo normal?",
  opciones: [
    "Aumento del flujo plasmático renal y del filtrado glomerular",
    "Supresión completa de la filtración glomerular",
    "Obstrucción fisiológica bilateral de las arterias renales",
    "Disminución universal de la masa renal funcional",
    "Aumento obligatorio de la producción muscular de creatinina"
  ],
  respuestaCorrecta: 0,
  explicacion: `Durante el embarazo normal aumenta el flujo plasmático renal y el filtrado glomerular, lo que reduce la concentración sérica de creatinina. Por ello, valores que parecen normales según los intervalos de referencia de personas no embarazadas pueden ser anormales en una gestante. Las ecuaciones habituales de estimación del filtrado glomerular no están bien validadas para el embarazo.`,
  perlaENARM: "La creatinina suele disminuir durante el embarazo; interpreta los resultados con referencias obstétricas y el contexto clínico.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre enfermedad renal y embarazo.",
    internacional: "Guías internacionales vigentes sobre enfermedad renal durante el embarazo."
  },
  bibliografia: "KDIGO CKD Guideline, 2024; literatura nefrológica y obstétrica sobre función renal en el embarazo."
},

{
  id: "NEF-271",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica",
  subtema: "Interpretación de edema por retención hidrosalina",
  dificultad: "Baja",
  caso: `Hombre de 68 años con enfermedad renal crónica avanzada, aumento de 4 kg en una semana, edema maleolar bilateral y presión arterial de 168/94 mmHg. La exploración revela ingurgitación yugular y estertores bibasales. La albúmina sérica es de 3.8 g/dL.`,
  pregunta: "¿Qué mecanismo explica mejor el edema en este paciente?",
  opciones: [
    "Disminución aislada de la presión oncótica por hipoalbuminemia",
    "Retención renal de sodio y agua con expansión del volumen extracelular",
    "Aumento de la permeabilidad capilar por vasculitis sistémica",
    "Obstrucción linfática bilateral de miembros inferiores",
    "Pérdida gastrointestinal de proteínas como mecanismo principal"
  ],
  respuestaCorrecta: 1,
  explicacion: `El aumento rápido de peso, la hipertensión, la ingurgitación yugular y los estertores sugieren sobrecarga de volumen. En la enfermedad renal crónica avanzada, la menor capacidad de excretar sodio y agua favorece la expansión del volumen extracelular. La albúmina conservada hace menos probable que la reducción de la presión oncótica sea el mecanismo predominante.`,
  perlaENARM: "Edema acompañado de ingurgitación yugular y congestión pulmonar orienta a expansión del volumen extracelular, no necesariamente a síndrome nefrótico.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre enfermedad renal crónica y manejo de sobrecarga de volumen.",
    internacional: "KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease."
  },
  bibliografia: "KDIGO CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney International. 2024."
},
{
  id: "NEF-272",
  especialidad: "Nefrología",
  tema: "Hipertensión arterial en enfermedad renal crónica",
  subtema: "Confirmación de hipertensión resistente",
  dificultad: "Media",
  caso: `Mujer de 61 años con enfermedad renal crónica G3b y cifras de presión arterial de 158/92 mmHg en consulta, pese a recibir tres antihipertensivos, incluido un diurético. Refiere que se pone muy nerviosa durante las consultas y no se ha medido la presión arterial en casa.`,
  pregunta: "¿Qué evaluación ayuda a distinguir hipertensión verdaderamente resistente de un efecto de bata blanca?",
  opciones: [
    "Medir la renina plasmática como única prueba",
    "Solicitar una tomografía de arterias renales a todos los pacientes",
    "Realizar monitorización ambulatoria de la presión arterial o mediciones domiciliarias estandarizadas",
    "Suspender todos los antihipertensivos durante una semana",
    "Diagnosticar hipertensión resistente únicamente por la cifra de consulta"
  ],
  respuestaCorrecta: 2,
  explicacion: `Antes de atribuir resistencia al tratamiento, deben verificarse la técnica de medición, la adherencia, las dosis y el uso de un esquema apropiado. La monitorización ambulatoria o las mediciones domiciliarias estandarizadas permiten identificar hipertensión de bata blanca y confirmar que la elevación persiste fuera de la consulta.`,
  perlaENARM: "La hipertensión resistente requiere excluir seudorresistencia: técnica incorrecta, falta de adherencia y efecto de bata blanca.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre diagnóstico y tratamiento de hipertensión arterial sistémica.",
    internacional: "KDIGO 2021 Clinical Practice Guideline for the Management of Blood Pressure in Chronic Kidney Disease."
  },
  bibliografia: "KDIGO Blood Pressure Work Group. KDIGO 2021 Clinical Practice Guideline for the Management of Blood Pressure in Chronic Kidney Disease. Kidney International. 2021."
},
{
  id: "NEF-273",
  especialidad: "Nefrología",
  tema: "Obstrucción urinaria",
  subtema: "Retención urinaria por hiperplasia prostática",
  dificultad: "Baja",
  caso: `Hombre de 74 años con chorro urinario débil, hesitación, nicturia y sensación persistente de vaciamiento incompleto. Presenta creatinina de 2.2 mg/dL, sin valor basal conocido. La ecografía muestra vejiga distendida después de la micción y próstata aumentada de tamaño.`,
  pregunta: "¿Qué medición permite cuantificar directamente la retención urinaria descrita?",
  opciones: [
    "Depuración fraccional de sodio",
    "Relación albúmina/creatinina urinaria",
    "Volumen residual posmiccional mediante ultrasonido o sondaje",
    "Concentración urinaria de ácido úrico",
    "Cistatina C aislada"
  ],
  respuestaCorrecta: 2,
  explicacion: `El volumen residual posmiccional estima la orina que permanece en la vejiga después de intentar vaciarla. En este contexto, un residuo elevado apoya retención urinaria y obliga a valorar obstrucción de la salida vesical y sus repercusiones sobre el tracto urinario superior.`,
  perlaENARM: "En un paciente con síntomas prostáticos y deterioro renal, busca retención y obstrucción; no atribuyas automáticamente la creatinina elevada a enfermedad renal intrínseca.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre hiperplasia prostática benigna y evaluación de síntomas urinarios bajos.",
    internacional: "European Association of Urology. EAU Guidelines on the Management of Non-neurogenic Male Lower Urinary Tract Symptoms."
  },
  bibliografia: "European Association of Urology. EAU Guidelines on the Management of Non-neurogenic Male Lower Urinary Tract Symptoms. Edición vigente."
},
{
  id: "NEF-274",
  especialidad: "Nefrología",
  tema: "Infección urinaria recurrente",
  subtema: "Prevención y evaluación inicial",
  dificultad: "Media",
  caso: `Mujer de 32 años con cuatro episodios de cistitis sintomática documentada mediante urocultivo durante los últimos diez meses. Los síntomas desaparecen después de cada tratamiento y no presenta fiebre, dolor lumbar ni embarazo.`,
  pregunta: "¿Qué estrategia inicial contribuye más a orientar la prevención de nuevos episodios?",
  opciones: [
    "Indicar antibióticos de amplio espectro de manera indefinida sin cultivos",
    "Documentar los episodios con urocultivos, revisar factores predisponentes y seleccionar la prevención según el patrón de recurrencia",
    "Realizar tomografía contrastada en todas las pacientes",
    "Tratar cada urocultivo positivo aunque no existan síntomas",
    "Indicar nefrectomía unilateral para reducir la recurrencia"
  ],
  respuestaCorrecta: 1,
  explicacion: `La infección urinaria recurrente requiere confirmar que los episodios corresponden a infecciones sintomáticas, revisar los cultivos y antibiogramas y evaluar factores modificables o anatómicos cuando existan indicaciones. Las estrategias preventivas se individualizan; no todas las pacientes necesitan imagen ni profilaxis antibiótica continua.`,
  perlaENARM: "La recurrencia se define habitualmente como al menos dos episodios en seis meses o tres en doce meses; el cultivo orienta el tratamiento y la prevención.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre diagnóstico y tratamiento de infección de vías urinarias.",
    internacional: "European Association of Urology. EAU Guidelines on Urological Infections."
  },
  bibliografia: "European Association of Urology. EAU Guidelines on Urological Infections. Edición vigente."
},
{
  id: "NEF-275",
  especialidad: "Nefrología",
  tema: "Nefropatía por oxalato",
  subtema: "Hiperoxaluria entérica posterior a cirugía bariátrica",
  dificultad: "Media",
  caso: `Mujer de 49 años con antecedente de bypass gástrico, diarrea grasa crónica y deterioro progresivo de la función renal. La biopsia renal muestra cristales birrefringentes de oxalato de calcio en túbulos, con lesión tubular e inflamación intersticial.`,
  pregunta: "¿Qué alteración intestinal favorece este patrón de lesión renal?",
  opciones: [
    "Mayor unión intestinal de oxalato al calcio y menor absorción",
    "Aumento de absorción intestinal de oxalato por malabsorción de grasas",
    "Disminución de la producción hepática de oxalato como causa directa",
    "Excreción urinaria excesiva de cistina por defecto de transporte tubular",
    "Depósito glomerular de inmunocomplejos por infección intestinal"
  ],
  respuestaCorrecta: 1,
  explicacion: `En la malabsorción de grasas, los ácidos grasos libres se unen al calcio intestinal y dejan más oxalato disponible para su absorción. El oxalato absorbido se elimina por vía renal y puede precipitar como oxalato de calcio, ocasionando nefropatía por cristales y pérdida de función renal.`,
  perlaENARM: "Bypass intestinal más malabsorción y cristales de oxalato en túbulos sugiere hiperoxaluria entérica, una causa potencialmente irreversible de lesión renal.",
  gpc: {
    mexico: "Consultar protocolos institucionales vigentes de nefrología para nefropatía por cristales y complicaciones renales de cirugía bariátrica.",
    internacional: "KDIGO 2024 CKD Guideline; literatura nefrológica revisada por pares sobre hiperoxaluria entérica."
  },
  bibliografia: "KDIGO CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. Kidney International. 2024; revisiones clínicas sobre oxalosis y nefropatía por oxalato."
},
{
  id: "NEF-276",
  especialidad: "Nefrología",
  tema: "Poliquistosis renal autosómica dominante",
  subtema: "Selección para detección de aneurisma intracraneal",
  dificultad: "Media",
  caso: `Hombre de 41 años con poliquistosis renal autosómica dominante confirmada. Su padre falleció por hemorragia subaracnoidea a los 48 años. El paciente está asintomático desde el punto de vista neurológico.`,
  pregunta: "¿Qué estrategia de evaluación debe considerarse por su antecedente familiar?",
  opciones: [
    "No realizar evaluación porque no presenta cefalea",
    "Solicitar electroencefalograma anual",
    "Ofrecer detección de aneurisma intracraneal mediante angiografía por resonancia magnética, tras discutir riesgos y beneficios",
    "Realizar angiografía cerebral invasiva anual como prueba de primera línea",
    "Indicar anticoagulación preventiva"
  ],
  respuestaCorrecta: 2,
  explicacion: `La poliquistosis renal autosómica dominante se asocia con mayor prevalencia de aneurismas intracraneales. Un antecedente familiar de aneurisma o hemorragia subaracnoidea constituye un factor importante para considerar cribado. La angiografía por resonancia magnética, habitualmente sin contraste, es una técnica de detección utilizada con frecuencia; la decisión debe individualizarse.`,
  perlaENARM: "En poliquistosis renal, el antecedente familiar de aneurisma intracraneal o hemorragia subaracnoidea cambia la valoración del cribado.",
  gpc: {
    mexico: "Consultar recomendaciones mexicanas institucionales vigentes para poliquistosis renal y evaluación de complicaciones extrarrenales.",
    internacional: "KDIGO 2025 Clinical Practice Guideline for the Evaluation, Management, and Treatment of ADPKD."
  },
  bibliografia: "KDIGO. 2025 Clinical Practice Guideline for the Evaluation, Management, and Treatment of Autosomal Dominant Polycystic Kidney Disease (ADPKD)."
},
{
  id: "NEF-277",
  especialidad: "Nefrología",
  tema: "Poliquistosis renal autosómica dominante",
  subtema: "Tolvaptán y progresión rápida",
  dificultad: "Media",
  caso: `Mujer de 35 años con poliquistosis renal autosómica dominante, aumento importante del volumen renal total y descenso documentado de la tasa de filtrado glomerular durante los últimos años. No tiene hepatopatía conocida.`,
  pregunta: "¿Qué condición debe documentarse antes de considerar tolvaptán para retrasar la progresión renal?",
  opciones: [
    "Presencia de cualquier quiste renal, sin importar el riesgo de progresión",
    "Evidencia de riesgo de progresión rápida y posibilidad de cumplir monitorización hepática",
    "Hipertensión arterial necesariamente resistente a cinco fármacos",
    "Hematuria macroscópica activa como requisito universal",
    "Tasa de filtrado glomerular normal como único criterio"
  ],
  respuestaCorrecta: 1,
  explicacion: `Tolvaptán puede retrasar la pérdida de función renal en pacientes seleccionados con poliquistosis renal autosómica dominante y riesgo de progresión rápida. La selección requiere valorar edad, función renal, trayectoria de filtrado, volumen renal y otros marcadores pronósticos. Es indispensable considerar el riesgo de lesión hepática y la monitorización de enzimas hepáticas.`,
  perlaENARM: "Tolvaptán no se indica automáticamente a toda persona con poliquistosis: se selecciona según riesgo de progresión y requiere vigilancia hepática.",
  gpc: {
    mexico: "Consultar protocolos institucionales vigentes para poliquistosis renal autosómica dominante y disponibilidad de tolvaptán.",
    internacional: "KDIGO 2025 Clinical Practice Guideline for ADPKD."
  },
  bibliografia: "KDIGO. 2025 Clinical Practice Guideline for the Evaluation, Management, and Treatment of ADPKD; Torres VE et al. Tolvaptan in patients with autosomal dominant polycystic kidney disease. N Engl J Med. 2012;367:2407-2418."
},
{
  id: "NEF-278",
  especialidad: "Nefrología",
  tema: "Nefrología y hematología",
  subtema: "Nefropatía asociada a drepanocitosis",
  dificultad: "Media",
  caso: `Hombre de 27 años con enfermedad de células falciformes presenta poliuria y nicturia. La densidad urinaria permanece baja incluso cuando refiere restricción de líquidos. La creatinina sérica es de 0.9 mg/dL.`,
  pregunta: "¿Qué alteración fisiológica explica mejor su dificultad para concentrar la orina?",
  opciones: [
    "Aumento de la presión oncótica medular renal",
    "Daño de la capacidad de concentración por hipoxia, hiperosmolaridad y microinfartos en la médula renal",
    "Exceso de aldosterona que impide la filtración glomerular",
    "Obstrucción ureteral bilateral completa",
    "Deficiencia primaria de eritropoyetina"
  ],
  respuestaCorrecta: 1,
  explicacion: `La médula renal tiene baja tensión de oxígeno y elevada osmolaridad, condiciones que favorecen la falciformación de eritrocitos. La lesión de los vasos rectos y del intersticio medular altera el gradiente osmótico y reduce la capacidad de concentración urinaria. Esta alteración puede preceder a una elevación de creatinina.`,
  perlaENARM: "En drepanocitosis, la hipostenuria puede aparecer antes de la reducción manifiesta del filtrado glomerular.",
  gpc: {
    mexico: "Consultar guías mexicanas vigentes de enfermedad de células falciformes y evaluación renal.",
    internacional: "ASH guidelines and peer-reviewed reviews on sickle cell disease and kidney complications."
  },
  bibliografia: "National Heart, Lung, and Blood Institute. Evidence-Based Management of Sickle Cell Disease; revisiones nefrológicas sobre nefropatía falciforme."
},
{
  id: "NEF-279",
  especialidad: "Nefrología",
  tema: "Síndrome cardiorrenal",
  subtema: "Congestión venosa y deterioro renal",
  dificultad: "Media",
  caso: `Hombre de 76 años con insuficiencia cardiaca descompensada, edema periférico, ingurgitación yugular y ascitis. La creatinina aumenta de 1.4 a 2.0 mg/dL durante la hospitalización, pese a mantener una presión arterial media adecuada.`,
  pregunta: "¿Qué mecanismo puede contribuir de manera importante al deterioro renal en este escenario?",
  opciones: [
    "Únicamente hipoperfusión arterial por hipotensión profunda",
    "Congestión venosa renal que eleva la presión intersticial y reduce el gradiente efectivo de filtración",
    "Destrucción glomerular por depósitos de oxalato",
    "Obstrucción de la arteria renal por un cálculo ureteral",
    "Pérdida aislada de presión oncótica por ausencia de albúmina"
  ],
  respuestaCorrecta: 1,
  explicacion: `En la insuficiencia cardiaca descompensada, la presión venosa elevada puede transmitirse a las venas renales, incrementar la presión intersticial y dificultar la filtración. La congestión puede contribuir al deterioro renal aun cuando no exista hipotensión sistémica marcada. La valoración debe integrar perfusión, congestión, respuesta diurética y evolución clínica.`,
  perlaENARM: "En insuficiencia cardiaca, el deterioro renal no siempre significa hipovolemia: la congestión venosa también reduce la función renal.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre insuficiencia cardiaca aguda y enfermedad renal crónica.",
    internacional: "AHA/ACC/HFSA Guideline for the Management of Heart Failure; KDIGO CKD Guideline."
  },
  bibliografia: "Heidenreich PA et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure. Circulation. 2022;145:e895-e1032; KDIGO 2024 CKD Guideline."
},
{
  id: "NEF-280",
  especialidad: "Nefrología",
  tema: "Síndrome hepatorrenal",
  subtema: "Fisiopatología de lesión renal en cirrosis",
  dificultad: "Media",
  caso: `Mujer de 58 años con cirrosis descompensada y ascitis presenta aumento progresivo de creatinina. No hay choque, exposición reciente a nefrotóxicos ni datos claros de obstrucción urinaria. La evaluación inicial no identifica una causa estructural evidente.`,
  pregunta: "¿Qué alteración hemodinámica caracteriza al síndrome hepatorrenal?",
  opciones: [
    "Vasodilatación renal intensa con aumento sostenido del flujo renal",
    "Vasoconstricción renal funcional secundaria a vasodilatación esplácnica y activación neurohumoral",
    "Obstrucción bilateral de los túbulos por cristales de cistina",
    "Depósito glomerular obligatorio de inmunocomplejos",
    "Pérdida renal primaria de bicarbonato como mecanismo central"
  ],
  respuestaCorrecta: 1,
  explicacion: `En la cirrosis avanzada, la vasodilatación esplácnica reduce el volumen arterial efectivo y activa sistemas vasoconstrictores, incluidos el sistema renina-angiotensina-aldosterona y el sistema simpático. La vasoconstricción renal resultante contribuye a la reducción del filtrado. El diagnóstico requiere excluir otras causas de lesión renal y aplicar criterios clínicos vigentes.`,
  perlaENARM: "El síndrome hepatorrenal es una forma de disfunción renal asociada a cirrosis avanzada; no debe diagnosticarse sin evaluar hipovolemia, infección, nefrotóxicos y lesión renal estructural.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes para cirrosis descompensada y lesión renal aguda.",
    internacional: "ADQI–ICA consensus recommendations on acute kidney injury and hepatorenal syndrome in cirrhosis."
  },
  bibliografia: "Nadim MK et al. Acute kidney injury in patients with cirrhosis: ADQI and International Club of Ascites consensus. J Hepatol. 2024."
},
{
  id: "NEF-281",
  especialidad: "Nefrología",
  tema: "Nefrotoxicidad farmacológica",
  subtema: "Lesión tubular por aminoglucósidos",
  dificultad: "Media",
  caso: `Hombre de 63 años hospitalizado por infección grave recibe gentamicina durante varios días. Tras una mejoría clínica, la creatinina comienza a aumentar y el sedimento urinario muestra cilindros granulares. No presenta hipotensión reciente.`,
  pregunta: "¿Qué patrón de lesión renal se relaciona clásicamente con la gentamicina?",
  opciones: [
    "Lesión tubular aguda por acumulación del fármaco en células tubulares proximales",
    "Glomerulonefritis por anticuerpos anti-membrana basal glomerular",
    "Obstrucción ureteral bilateral por cristales de gentamicina",
    "Vasculitis necrosante de arterias renales",
    "Nefropatía membranosa por depósito de inmunocomplejos"
  ],
  respuestaCorrecta: 0,
  explicacion: `Los aminoglucósidos se acumulan en las células tubulares proximales y pueden producir lesión tubular aguda. El riesgo aumenta con exposición prolongada, concentraciones elevadas, enfermedad renal previa y uso concomitante de otros nefrotóxicos. La vigilancia de función renal, la dosificación ajustada y la monitorización farmacocinética cuando corresponde reducen riesgos.`,
  perlaENARM: "Gentamicina y otros aminoglucósidos: nefrotoxicidad predominantemente tubular proximal; revisa dosis, duración y exposición acumulada.",
  gpc: {
    mexico: "Consultar protocolos institucionales vigentes de antimicrobianos, ajuste renal y monitorización de aminoglucósidos.",
    internacional: "KDIGO Clinical Practice Guideline for Acute Kidney Injury; recomendaciones farmacocinéticas institucionales para aminoglucósidos."
  },
  bibliografia: "KDIGO. Clinical Practice Guideline for Acute Kidney Injury. Kidney International Supplements. 2012;2:1-138; literatura farmacológica clínica sobre aminoglucósidos."
},
{
  id: "NEF-282",
  especialidad: "Nefrología",
  tema: "Dosificación de medicamentos en enfermedad renal",
  subtema: "Estimación de función renal para ajuste farmacológico",
  dificultad: "Media",
  caso: `Hombre de 82 años con sarcopenia marcada requiere iniciar un medicamento de eliminación renal. La creatinina sérica es de 0.7 mg/dL, pero la evolución clínica sugiere una reserva renal limitada.`,
  pregunta: "¿Cuál es la principal limitación de utilizar exclusivamente la creatinina sérica para estimar su función renal?",
  opciones: [
    "La creatinina aumenta siempre antes de cualquier cambio en el filtrado",
    "La baja masa muscular puede reducir la producción de creatinina y sobreestimar la función renal",
    "La creatinina no se elimina por vía renal",
    "La sarcopenia incrementa necesariamente la generación de creatinina",
    "La creatinina mide directamente la secreción tubular de todos los fármacos"
  ],
  respuestaCorrecta: 1,
  explicacion: `La creatinina depende en parte de la masa muscular y su producción puede disminuir en personas con sarcopenia, fragilidad o amputaciones. En esos escenarios, una creatinina aparentemente normal puede sobreestimar la función renal. Según el medicamento y el contexto, puede ser apropiado utilizar una ecuación validada, considerar cistatina C o una estimación combinada y revisar la ficha técnica para la dosificación.`,
  perlaENARM: "Creatinina baja no equivale necesariamente a filtrado normal: la sarcopenia puede ocultar una reducción relevante de función renal.",
  gpc: {
    mexico: "Consultar protocolos institucionales vigentes de ajuste de dosis por función renal y ficha técnica del medicamento.",
    internacional: "KDIGO 2024 Clinical Practice Guideline for CKD; NIDDK recommendations on drug dosing and kidney function estimation."
  },
  bibliografia: "KDIGO CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of CKD. Kidney International. 2024."
},
{
  id: "NEF-283",
  especialidad: "Nefrología",
  tema: "Hemodiálisis",
  subtema: "Interpretación del Kt/V",
  dificultad: "Media",
  caso: `Paciente con enfermedad renal terminal en hemodiálisis trisemanal tiene un Kt/V de urea por sesión de 0.9 en mediciones repetidas. El acceso vascular funciona, pero no se ha revisado la duración de las sesiones ni el flujo sanguíneo prescrito.`,
  pregunta: "¿Qué representa principalmente el Kt/V de urea?",
  opciones: [
    "La concentración de albúmina producida durante la sesión",
    "Una medida de adecuación dialítica basada en depuración de urea, tiempo y volumen de distribución",
    "El volumen de orina residual por kilogramo",
    "La cantidad de calcio eliminada por el dializador exclusivamente",
    "Una medida directa de la función endocrina renal"
  ],
  respuestaCorrecta: 1,
  explicacion: `Kt/V relaciona la depuración de urea del dializador (K), la duración del tratamiento (t) y el volumen de distribución de urea (V). Un valor persistentemente bajo obliga a verificar prescripción, tiempo efectivo de tratamiento, flujo sanguíneo, recirculación y funcionamiento del acceso. La interpretación depende del esquema de diálisis y del método de cálculo.`,
  perlaENARM: "Kt/V no mide toda la calidad de la diálisis, pero cuantifica la dosis de depuración de urea y ayuda a detectar tratamiento insuficiente.",
  gpc: {
    mexico: "Consultar protocolos institucionales vigentes para adecuación de hemodiálisis.",
    internacional: "KDOQI Clinical Practice Guideline for Hemodialysis Adequacy: 2015 Update."
  },
  bibliografia: "National Kidney Foundation. KDOQI Clinical Practice Guideline for Hemodialysis Adequacy: 2015 Update. Am J Kidney Dis. 2015;66:884-930."
},
{
  id: "NEF-284",
  especialidad: "Nefrología",
  tema: "Complicaciones de hemodiálisis",
  subtema: "Síndrome de desequilibrio dialítico",
  dificultad: "Media",
  caso: `Paciente con uremia intensa inicia su primera sesión de hemodiálisis. Durante las horas posteriores desarrolla cefalea, náusea, inquietud y confusión, sin hipoglucemia ni hipoxemia.`,
  pregunta: "¿Qué mecanismo explica mejor esta complicación?",
  opciones: [
    "Aumento rápido de la osmolaridad plasmática por retención de urea",
    "Descenso rápido de la urea plasmática que crea un gradiente osmótico transitorio entre sangre y cerebro",
    "Depósito de oxalato en la corteza cerebral",
    "Hipercalcemia por liberación ósea aguda",
    "Obstrucción mecánica del flujo sanguíneo cerebral por el catéter"
  ],
  respuestaCorrecta: 1,
  explicacion: `El síndrome de desequilibrio dialítico puede presentarse al iniciar hemodiálisis, especialmente en pacientes con uremia marcada. La eliminación rápida de urea desde el plasma puede producir un gradiente osmótico transitorio respecto al sistema nervioso central y favorecer edema cerebral. La prevención se basa en individualizar la prescripción inicial y evitar una reducción excesivamente rápida de la urea.`,
  perlaENARM: "Síntomas neurológicos durante o después de la primera hemodiálisis en un paciente muy urémico deben hacer sospechar síndrome de desequilibrio.",
  gpc: {
    mexico: "Consultar protocolos institucionales vigentes para inicio seguro de terapia de reemplazo renal.",
    internacional: "KDOQI Hemodialysis Adequacy guidance; revisiones nefrológicas sobre síndrome de desequilibrio dialítico."
  },
  bibliografia: "National Kidney Foundation. KDOQI Clinical Practice Guideline for Hemodialysis Adequacy: 2015 Update; revisiones clínicas sobre dialysis disequilibrium syndrome."
},
{
  id: "NEF-285",
  especialidad: "Nefrología",
  tema: "Enfermedad renal crónica mineral y ósea",
  subtema: "Calcifilaxis",
  dificultad: "Media",
  caso: `Mujer de 64 años en hemodiálisis de larga evolución presenta placas cutáneas muy dolorosas, violáceas y retiformes en muslos, que progresan a necrosis. Tiene obesidad y utiliza warfarina. El calcio y el fósforo actuales no están marcadamente elevados.`,
  pregunta: "¿Qué diagnóstico debe considerarse prioritariamente?",
  opciones: [
    "Dermatitis por estasis venosa no complicada",
    "Calcifilaxis asociada a enfermedad renal avanzada",
    "Celulitis superficial como explicación única",
    "Púrpura trombocitopénica inmunitaria",
    "Urticaria inducida por hemodiálisis"
  ],
  respuestaCorrecta: 1,
  explicacion: `La calcifilaxis produce isquemia cutánea por calcificación y trombosis de pequeños vasos, con lesiones dolorosas, livedo o placas retiformes y posible necrosis. Es una complicación grave asociada principalmente a enfermedad renal avanzada, aunque el calcio y el fósforo séricos no siempre están elevados al momento de la presentación. Requiere valoración urgente y abordaje multidisciplinario.`,
  perlaENARM: "En pacientes dializados, dolor cutáneo intenso y lesiones retiformes necróticas sugieren calcifilaxis incluso con calcio y fósforo séricos normales.",
  gpc: {
    mexico: "Consultar protocolos institucionales vigentes para calcifilaxis y trastorno mineral óseo en enfermedad renal crónica.",
    internacional: "KDIGO 2017 CKD-MBD Guideline; literatura clínica especializada sobre calcifilaxis."
  },
  bibliografia: "KDIGO CKD-MBD Update Work Group. KDIGO 2017 Clinical Practice Guideline Update for CKD-MBD. Kidney International Supplements. 2017;7:1-59."
},
{
  id: "NEF-286",
  especialidad: "Nefrología",
  tema: "Intoxicaciones y terapia de reemplazo renal",
  subtema: "Intoxicación por metanol",
  dificultad: "Media",
  caso: `Hombre de 38 años es llevado a urgencias por visión borrosa, taquipnea y confusión después de ingerir una bebida adulterada. Presenta acidosis metabólica con brecha aniónica elevada y alteraciones visuales progresivas.`,
  pregunta: "¿Qué intervención extracorpórea debe valorarse urgentemente en una intoxicación grave por metanol?",
  opciones: [
    "Hemodiálisis para acelerar la eliminación de metanol y metabolitos tóxicos",
    "Diálisis peritoneal como única opción por ser más rápida",
    "Ultrafiltración aislada sin depuración de solutos",
    "Hemofiltración exclusivamente para retirar potasio",
    "No utilizar terapia extracorpórea porque el metanol se elimina únicamente por pulmón"
  ],
  respuestaCorrecta: 0,
  explicacion: `El metanol se metaboliza a formaldehído y ácido fórmico; este último contribuye a la acidosis y a la toxicidad ocular y neurológica. En intoxicaciones graves, la hemodiálisis permite eliminar metanol y formiato y corregir alteraciones metabólicas. La indicación se integra con estado clínico, acidosis, alteraciones visuales, concentraciones disponibles y recomendaciones toxicológicas; el antídoto no debe retrasarse mientras se organiza la depuración.`,
  perlaENARM: "Metanol más alteraciones visuales y acidosis con brecha aniónica elevada es una emergencia toxicológica; considera fomepizol y hemodiálisis según gravedad.",
  gpc: {
    mexico: "Consultar protocolos mexicanos vigentes de toxicología clínica para alcoholes tóxicos.",
    internacional: "EXTRIP Workgroup recommendations for methanol poisoning."
  },
  bibliografia: "Roberts DM et al. Recommendations for the role of extracorporeal treatments in the management of acute methanol poisoning: EXTRIP Workgroup. Crit Care Med. 2015;43:461-472."
},
{
  id: "NEF-287",
  especialidad: "Nefrología",
  tema: "Intoxicaciones y terapia de reemplazo renal",
  subtema: "Intoxicación por litio",
  dificultad: "Media",
  caso: `Mujer de 57 años con tratamiento crónico con litio presenta temblor grueso, disartria, ataxia y confusión. La creatinina está elevada respecto a su basal y la concentración sérica de litio es marcadamente alta.`,
  pregunta: "¿Qué característica clínica favorece considerar hemodiálisis en esta intoxicación?",
  opciones: [
    "Temblor fino aislado sin cambios en función renal",
    "Toxicidad neurológica significativa acompañada de disminución de la eliminación renal",
    "Concentración de litio indetectable con exploración normal",
    "Hipertensión arterial leve sin síntomas",
    "Poliuria crónica estable sin elevación de litio"
  ],
  respuestaCorrecta: 1,
  explicacion: `El litio tiene un volumen de distribución relativamente bajo y no se une de manera importante a proteínas, por lo que puede eliminarse mediante hemodiálisis. La decisión depende de la gravedad neurológica, función renal, concentración y evolución del litio, así como de la posibilidad de rebote sérico después de la sesión. Deben seguirse criterios toxicológicos especializados.`,
  perlaENARM: "En intoxicación por litio, el estado neurológico y la capacidad de eliminación renal son esenciales; vigila el rebote después de hemodiálisis.",
  gpc: {
    mexico: "Consultar protocolos institucionales vigentes de toxicología clínica y depuración extracorpórea.",
    internacional: "EXTRIP Workgroup recommendations for lithium poisoning."
  },
  bibliografia: "Decker BS et al. Extracorporeal treatment for lithium poisoning: systematic review and recommendations from the EXTRIP Workgroup. Clin J Am Soc Nephrol. 2015;10:875-887."
},
{
  id: "NEF-288",
  especialidad: "Nefrología",
  tema: "Tumores renales",
  subtema: "Manifestaciones paraneoplásicas del carcinoma de células renales",
  dificultad: "Media",
  caso: `Hombre de 62 años presenta pérdida de peso, hematuria intermitente y masa renal sólida. Los estudios muestran hipercalcemia sin metástasis óseas identificadas.`,
  pregunta: "¿Qué mecanismo paraneoplásico puede explicar la hipercalcemia?",
  opciones: [
    "Producción tumoral de péptido relacionado con la hormona paratiroidea (PTHrP)",
    "Deficiencia absoluta de calcitonina por lesión renal",
    "Aumento de la excreción renal de calcio como causa de hipercalcemia",
    "Pérdida urinaria de fosfato como mecanismo único obligatorio",
    "Producción tumoral de eritropoyetina que eleva directamente el calcio"
  ],
  respuestaCorrecta: 0,
  explicacion: `El carcinoma de células renales puede asociarse con síndromes paraneoplásicos, incluida hipercalcemia mediada por PTHrP. La evaluación debe distinguir esta posibilidad de hiperparatiroidismo primario, enfermedad ósea metastásica y otras causas de hipercalcemia mediante el contexto clínico y las pruebas bioquímicas apropiadas.`,
  perlaENARM: "El carcinoma renal puede producir síndromes paraneoplásicos, entre ellos hipercalcemia, eritrocitosis y alteraciones hepáticas sin metástasis evidentes.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre diagnóstico y tratamiento del carcinoma de células renales.",
    internacional: "European Association of Urology. EAU Guidelines on Renal Cell Carcinoma."
  },
  bibliografia: "European Association of Urology. EAU Guidelines on Renal Cell Carcinoma. Edición vigente."
},
{
  id: "NEF-289",
  especialidad: "Nefrología",
  tema: "Donación renal de vivo",
  subtema: "Evaluación de seguridad del donante",
  dificultad: "Media",
  caso: `Mujer de 36 años desea donar un riñón a su hermano. Tiene presión arterial normal, pero en la evaluación inicial se detecta albuminuria persistente en dos muestras separadas. La tasa de filtrado glomerular estimada es normal.`,
  pregunta: "¿Cómo debe interpretarse este hallazgo durante la evaluación del donante?",
  opciones: [
    "La filtración normal descarta cualquier riesgo renal futuro",
    "La albuminuria persistente requiere confirmación y evaluación antes de aceptar la donación",
    "La albuminuria es irrelevante si la donante es joven",
    "Debe iniciarse inmunosupresión preventiva antes de la nefrectomía",
    "La donación debe realizarse de inmediato para evitar progresión de albuminuria"
  ],
  respuestaCorrecta: 1,
  explicacion: `La evaluación de un donante vivo busca minimizar el riesgo renal y cardiovascular de por vida. La albuminuria persistente puede indicar lesión renal incluso con filtrado conservado. Debe cuantificarse, confirmar su persistencia y valorar la causa junto con otros factores de riesgo antes de tomar una decisión individualizada sobre la elegibilidad.`,
  perlaENARM: "Un filtrado estimado normal no descarta daño renal; la albuminuria persistente es relevante para la seguridad de un donante vivo.",
  gpc: {
    mexico: "Consultar normativa y protocolos mexicanos vigentes para evaluación de donantes renales vivos.",
    internacional: "KDIGO Clinical Practice Guideline on the Evaluation and Care of Living Kidney Donors."
  },
  bibliografia: "Lentine KL et al. KDIGO Clinical Practice Guideline on the Evaluation and Care of Living Kidney Donors. Transplantation. 2017;101:S1-S109."
},
{
  id: "NEF-290",
  especialidad: "Nefrología",
  tema: "Reflujo vesicoureteral",
  subtema: "Cicatriz renal y daño parenquimatoso pediátrico",
  dificultad: "Media",
  caso: `Niña de 7 años con antecedentes de infecciones urinarias febriles recurrentes presenta hipertensión arterial y proteinuria leve. La gammagrafía renal muestra defectos corticales focales y asimetría funcional entre ambos riñones.`,
  pregunta: "¿Qué complicación renal crónica debe sospecharse en este contexto?",
  opciones: [
    "Nefropatía cicatricial asociada a reflujo vesicoureteral o infecciones febriles recurrentes",
    "Nefropatía por litio adquirida",
    "Nefropatía membranosa primaria",
    "Enfermedad de cambios mínimos como explicación obligatoria de las cicatrices",
    "Lesión tubular por aminoglucósidos como causa única"
  ],
  respuestaCorrecta: 0,
  explicacion: `Las infecciones urinarias febriles recurrentes, especialmente cuando se asocian con reflujo vesicoureteral, pueden producir cicatrices parenquimatosas. Con el tiempo, la pérdida focal de tejido renal puede contribuir a hipertensión y proteinuria. La evaluación debe identificar anomalías anatómicas o funcionales y prevenir nuevas infecciones según el riesgo individual.`,
  perlaENARM: "En pediatría, infecciones urinarias febriles recurrentes más defectos corticales e hipertensión sugieren nefropatía cicatricial.",
  gpc: {
    mexico: "Consultar GPC mexicana vigente sobre infección urinaria en población pediátrica y reflujo vesicoureteral.",
    internacional: "European Association of Urology. EAU Guidelines on Paediatric Urology."
  },
  bibliografia: "European Association of Urology. EAU Guidelines on Paediatric Urology. Edición vigente."
}
];
