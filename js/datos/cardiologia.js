const BANCO_CARDIOLOGIA = [

    {
        id: "CARD-001",
        especialidad: "Cardiología",
        tema: "Síndrome coronario agudo",
        subtema: "IAMSEST - estrategia invasiva",
        dificultad: "Alta",

        caso: "Varón de 68 años con diabetes mellitus tipo 2, hipertensión y enfermedad renal crónica presenta dolor retroesternal de 90 minutos. ECG: depresión horizontal de ST de 2 mm en V4-V6. Troponina I elevada y con ascenso dinámico. Está hemodinámicamente estable, sin datos de choque ni insuficiencia cardiaca. GRACE: 158.",

        pregunta: "¿Cuál es la estrategia de manejo más apropiada?",

        opciones: [
            "Manejo conservador y prueba de esfuerzo antes del alta",
            "Angiografía coronaria durante el mismo ingreso, con estrategia invasiva temprana",
            "Fibrinólisis intravenosa inmediata",
            "Angiografía coronaria únicamente si persiste el dolor durante 48 horas",
            "Alta con doble antiagregación y seguimiento ambulatorio"
        ],

        respuestaCorrecta: 1,

        explicacion: "El cuadro corresponde a un SCA sin elevación del ST de alto riesgo: troponina positiva con dinámica y GRACE mayor de 140. En este contexto está indicada una estrategia invasiva durante el mismo ingreso y, cuando corresponde por el perfil de riesgo y los recursos disponibles, de forma temprana. La fibrinólisis no está indicada en el IAMSEST.",

        perlaENARM: "IAMSEST + troponina dinámica + GRACE mayor de 140 = pensar en estrategia invasiva temprana.",

        gpc: {
            mexico: "GPC mexicana relacionada con síndrome coronario agudo sin elevación del ST.",
            internacional: "ESC 2023 para Síndromes Coronarios Agudos; ACC/AHA 2025 para Síndromes Coronarios Agudos."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },


    {
        id: "CARD-002",
        especialidad: "Cardiología",
        tema: "Síndrome coronario agudo",
        subtema: "IAMCEST - reperfusión",
        dificultad: "Alta",

        caso: "Mujer de 59 años consulta 70 minutos después del inicio de dolor torácico intenso. ECG: elevación del ST de 3 mm en V2-V5. El hospital cuenta con sala de hemodinamia, pero el tiempo estimado desde el diagnóstico hasta el cruce de la guía es de 150 minutos. No existen contraindicaciones para fibrinólisis.",

        pregunta: "¿Cuál es la conducta de reperfusión más apropiada?",

        opciones: [
            "Esperar angioplastia primaria aunque se retrase varias horas",
            "No realizar reperfusión porque han pasado más de 60 minutos",
            "Administrar fibrinólisis, seguida de estrategia farmacoinvasiva",
            "Administrar únicamente heparina y trasladar posteriormente",
            "Realizar prueba de esfuerzo para confirmar el diagnóstico"
        ],

        respuestaCorrecta: 2,

        explicacion: "En un IAMCEST con indicación de reperfusión, si la angioplastia primaria no puede realizarse oportunamente dentro del intervalo recomendado, la fibrinólisis es una alternativa cuando no existen contraindicaciones y el paciente se encuentra dentro de la ventana temporal apropiada. Después debe realizarse una estrategia farmacoinvasiva con traslado a un centro con intervencionismo.",

        perlaENARM: "IAMCEST: la decisión no es angioplastia siempre; depende del tiempo hasta la reperfusión y de la disponibilidad real.",

        gpc: {
            mexico: "GPC mexicana relacionada con cardiopatía isquémica e IAM.",
            internacional: "ESC 2023 para Síndromes Coronarios Agudos; ACC/AHA 2025 para Síndromes Coronarios Agudos."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },


    {
        id: "CARD-003",
        especialidad: "Cardiología",
        tema: "Síndrome coronario agudo",
        subtema: "Choque cardiogénico",
        dificultad: "Alta",

        caso: "Varón de 64 años con IAMCEST anterior desarrolla hipotensión de 78/48 mmHg, piel fría, oliguria y lactato de 5.1 mmol/L. Ecocardiograma: FEVI 25%, sin comunicación interventricular ni insuficiencia mitral aguda. La coronariografía muestra una lesión culpable en la descendente anterior.",

        pregunta: "¿Cuál es la intervención con mayor prioridad?",

        opciones: [
            "Intervención coronaria percutánea de la arteria culpable",
            "Intervención coronaria percutánea rutinaria de todas las lesiones no culpables en el mismo procedimiento",
            "Trombólisis intravenosa a pesar de contar con hemodinamia",
            "Betabloqueador intravenoso para disminuir el consumo de oxígeno",
            "Diurético a dosis altas como única estrategia inicial"
        ],

        respuestaCorrecta: 0,

        explicacion: "El cuadro es compatible con choque cardiogénico por IAM. La prioridad es la revascularización urgente de la arteria culpable mediante intervención coronaria percutánea cuando la anatomía lo permite. La intervención rutinaria inmediata de lesiones no culpables no es la estrategia inicial preferida en el choque cardiogénico.",

        perlaENARM: "Choque cardiogénico por IAM: revascularizar primero la lesión culpable.",

        gpc: {
            mexico: "GPC mexicana relacionada con síndrome coronario agudo.",
            internacional: "ACC/AHA 2025 para Síndromes Coronarios Agudos; ESC 2023 para Síndromes Coronarios Agudos."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },


    {
        id: "CARD-004",
        especialidad: "Cardiología",
        tema: "Insuficiencia cardiaca",
        subtema: "HFrEF - tratamiento modificador de pronóstico",
        dificultad: "Alta",

        caso: "Hombre de 57 años con insuficiencia cardiaca sintomática presenta FEVI de 30%, ritmo sinusal, presión arterial 112/70 mmHg y función renal estable. Ya recibe dosis adecuadas de betabloqueador y antagonista de mineralocorticoides. No presenta congestión significativa.",

        pregunta: "¿Qué grupo farmacológico debe considerarse como parte de la terapia fundamental modificadora de pronóstico?",

        opciones: [
            "Digoxina como tratamiento de primera línea",
            "Ivabradina en todos los pacientes independientemente de la frecuencia cardiaca",
            "Inhibidor SGLT2",
            "Nitrato sublingual como tratamiento crónico principal",
            "AINE para disminuir la activación inflamatoria"
        ],

        respuestaCorrecta: 2,

        explicacion: "Los inhibidores SGLT2 forman parte de la terapia fundamental de la insuficiencia cardiaca con fracción de eyección reducida y han demostrado reducción de hospitalizaciones por insuficiencia cardiaca y eventos cardiovasculares, independientemente de la presencia de diabetes. El esquema moderno de HFrEF integra cuatro pilares farmacológicos: inhibición del sistema renina-angiotensina/ARNI, betabloqueador basado en evidencia, antagonista mineralocorticoide e inhibidor SGLT2.",

        perlaENARM: "SGLT2 no es solo para diabéticos: es terapia modificadora de pronóstico en insuficiencia cardiaca.",

        gpc: {
            mexico: "Se verificará la GPC mexicana específica aplicable antes de cerrar la versión definitiva del banco.",
            internacional: "ESC 2023 Focused Update de Insuficiencia Cardiaca."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },


    {
        id: "CARD-005",
        especialidad: "Cardiología",
        tema: "Insuficiencia cardiaca",
        subtema: "Insuficiencia cardiaca aguda - perfil hemodinámico",
        dificultad: "Alta",

        caso: "Mujer de 72 años con insuficiencia cardiaca conocida llega con disnea intensa, ortopnea, estertores bibasales, edema periférico y presión arterial de 168/96 mmHg. Está fría, pero no presenta hipotensión ni datos de hipoperfusión. Radiografía: edema pulmonar.",

        pregunta: "¿Cuál es el tratamiento inicial más apropiado?",

        opciones: [
            "Expansión agresiva con solución salina",
            "Diurético de asa intravenoso y vasodilatación cuando la presión arterial lo permite",
            "Dobutamina intravenosa como primera medida obligatoria",
            "Betabloqueador intravenoso a dosis altas",
            "Suspender toda terapia y observar evolución espontánea"
        ],

        respuestaCorrecta: 1,

        explicacion: "El perfil corresponde a insuficiencia cardiaca aguda hipertensiva con congestión pulmonar. La prioridad es descongestionar con diurético de asa intravenoso y, si la presión arterial lo permite, utilizar vasodilatadores para reducir precarga y poscarga. Los inotrópicos se reservan para estados con hipoperfusión o choque y no deben administrarse de rutina.",

        perlaENARM: "IC aguda hipertensiva + congestión = diuresis + vasodilatación si la presión lo permite.",

        gpc: {
            mexico: "Se verificará la GPC mexicana específica aplicable antes de cerrar la versión definitiva del banco.",
            internacional: "ESC 2023 Focused Update de Insuficiencia Cardiaca."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },
    {
        id: "CARD-006",
        especialidad: "Cardiología",
        tema: "Fibrilación auricular",
        subtema: "FA con inestabilidad hemodinámica",
        dificultad: "Alta",

        caso: "Paciente de 69 años presenta palpitaciones súbitas, dolor torácico y disnea. ECG: fibrilación auricular con respuesta ventricular de 170 lpm. PA 76/44 mmHg, confusión y datos de hipoperfusión.",

        pregunta: "¿Cuál es la intervención inmediata?",

        opciones: [
            "Digoxina oral",
            "Metoprolol oral y reevaluación en una hora",
            "Cardioversión eléctrica sincronizada inmediata",
            "Esperar anticoagulación durante tres semanas antes de intervenir",
            "Amiodarona oral como única intervención"
        ],

        respuestaCorrecta: 2,

        explicacion: "La fibrilación auricular con inestabilidad hemodinámica requiere cardioversión eléctrica sincronizada inmediata. La necesidad de cardioversión urgente por inestabilidad no debe retrasarse para completar un periodo convencional de anticoagulación.",

        perlaENARM: "FA + hipotensión, choque, isquemia aguda o edema pulmonar = cardioversión eléctrica sincronizada.",

        gpc: {
            mexico: "GPC mexicana relacionada con diagnóstico y tratamiento de fibrilación auricular.",
            internacional: "ESC 2024 Guidelines for the Management of Atrial Fibrillation."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },


    {
        id: "CARD-007",
        especialidad: "Cardiología",
        tema: "Fibrilación auricular",
        subtema: "Prevención de tromboembolismo",
        dificultad: "Alta",

        caso: "Mujer de 76 años con fibrilación auricular no valvular tiene antecedente de hipertensión, diabetes mellitus y evento vascular cerebral isquémico previo. No presenta sangrado activo ni contraindicación para anticoagulación.",

        pregunta: "¿Cuál es la conducta antitrombótica más apropiada?",

        opciones: [
            "No anticoagular porque la edad aumenta el riesgo de sangrado",
            "Aspirina como única estrategia",
            "Anticoagulación oral para prevención de tromboembolismo",
            "Clopidogrel como sustituto de anticoagulación",
            "Anticoagulación solamente si desarrolla una nueva embolia"
        ],

        respuestaCorrecta: 2,

        explicacion: "La paciente presenta múltiples factores de riesgo tromboembólico y antecedente de EVC. El beneficio de la anticoagulación oral para prevenir EVC y embolia sistémica es claro, salvo que exista una contraindicación o una situación clínica que modifique la decisión. La edad por sí sola no constituye una contraindicación.",

        perlaENARM: "En FA, el antecedente de EVC es un factor mayor para la decisión de prevención tromboembólica.",

        gpc: {
            mexico: "GPC mexicana relacionada con diagnóstico y tratamiento de fibrilación auricular.",
            internacional: "ESC 2024 Guidelines for the Management of Atrial Fibrillation; enfoque AF-CARE."
        },

        bibliografia: "Braunwald's Heart Disease; ESC 2024 Guidelines for the Management of Atrial Fibrillation."
    },


    {
        id: "CARD-008",
        especialidad: "Cardiología",
        tema: "Electrocardiografía",
        subtema: "Taquicardia de QRS ancho",
        dificultad: "Alta",

        caso: "Hombre de 62 años con antecedente de infarto de miocardio presenta palpitaciones y síncope. ECG: taquicardia regular de QRS ancho a 190 lpm. Se documenta disociación AV y latidos de captura.",

        pregunta: "¿Cuál es el diagnóstico más probable?",

        opciones: [
            "Fibrilación auricular con aberrancia",
            "Taquicardia sinusal con bloqueo de rama",
            "Taquicardia ventricular monomórfica",
            "Taquicardia auricular multifocal",
            "Taquicardia por reentrada nodal AV"
        ],

        respuestaCorrecta: 2,

        explicacion: "Una taquicardia regular de QRS ancho en un paciente con cardiopatía estructural debe considerarse taquicardia ventricular hasta demostrar lo contrario. La disociación AV y los latidos de captura son datos altamente sugestivos de origen ventricular.",

        perlaENARM: "QRS ancho + cardiopatía estructural + disociación AV o latidos de captura = TV.",

        gpc: {
            mexico: "GPC mexicana relacionada con arritmias ventriculares.",
            internacional: "ESC 2022 Guidelines for Ventricular Arrhythmias and Sudden Cardiac Death."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },


    {
        id: "CARD-009",
        especialidad: "Cardiología",
        tema: "Electrocardiografía",
        subtema: "Bloqueo auriculoventricular completo",
        dificultad: "Alta",

        caso: "Paciente de 73 años presenta síncope. ECG: ondas P regulares a 85 lpm y complejos QRS regulares a 32 lpm, sin relación fija entre ambos. QRS ancho.",

        pregunta: "¿Cuál es el diagnóstico?",

        opciones: [
            "Bloqueo AV de primer grado",
            "Bloqueo AV Mobitz I",
            "Bloqueo AV Mobitz II",
            "Bloqueo AV completo",
            "Disociación AV por taquicardia ventricular"
        ],

        respuestaCorrecta: 3,

        explicacion: "Existe disociación completa entre la actividad auricular y ventricular: las ondas P marchan independientemente de los QRS y el ritmo ventricular es lento, compatible con bloqueo auriculoventricular de tercer grado. La presencia de síncope y un escape ventricular lento obliga a valoración urgente para estimulación cardiaca.",

        perlaENARM: "BAV completo: las ondas P y los QRS son independientes; la frecuencia auricular suele ser mayor que la ventricular.",

        gpc: {
            mexico: "GPC mexicana relacionada con diagnóstico y tratamiento del bloqueo auriculoventricular.",
            internacional: "ESC 2021 Guidelines on Cardiac Pacing and Cardiac Resynchronization Therapy."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },


    {
        id: "CARD-010",
        especialidad: "Cardiología",
        tema: "Valvulopatías",
        subtema: "Estenosis aórtica",
        dificultad: "Alta",

        caso: "Varón de 78 años presenta disnea de esfuerzo y síncope. Ecocardiograma: área valvular aórtica de 0.7 cm², velocidad máxima transvalvular de 4.3 m/s y gradiente medio de 48 mmHg. FEVI 55%.",

        pregunta: "¿Cuál es la interpretación más adecuada?",

        opciones: [
            "Estenosis aórtica leve",
            "Estenosis aórtica moderada",
            "Estenosis aórtica grave de alto gradiente",
            "Insuficiencia aórtica grave",
            "Estenosis mitral grave"
        ],

        respuestaCorrecta: 2,

        explicacion: "Un área valvular menor o igual a 1.0 cm², velocidad máxima mayor o igual a 4.0 m/s y gradiente medio mayor o igual a 40 mmHg son criterios clásicos de estenosis aórtica grave de alto gradiente. En un paciente sintomático, estos hallazgos tienen implicaciones directas para la intervención valvular.",

        perlaENARM: "Estenosis aórtica grave: AVA ≤1.0 cm², Vmax ≥4 m/s o gradiente medio ≥40 mmHg; siempre integrar flujo y contexto clínico.",

        gpc: {
            mexico: "GPC mexicana relacionada con enfermedad valvular cardiaca.",
            internacional: "Guías ESC/EACTS de enfermedad valvular; verificar actualización internacional vigente al cerrar la versión definitiva."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },
    {
        id: "CARD-011",
        especialidad: "Cardiología",
        tema: "Valvulopatías",
        subtema: "Estenosis mitral",
        dificultad: "Alta",

        caso: "Mujer de 42 años con antecedente de fiebre reumática presenta disnea progresiva. Ecocardiograma: estenosis mitral significativa, fusión comisural y aparato subvalvular favorable. No hay trombo auricular izquierdo.",

        pregunta: "¿Qué característica favorece especialmente una valvuloplastia mitral percutánea?",

        opciones: [
            "Calcificación valvular masiva",
            "Trombo en aurícula izquierda",
            "Regurgitación mitral grave concomitante",
            "Morfología favorable con fusión comisural y ausencia de trombo auricular",
            "Endocarditis activa"
        ],

        respuestaCorrecta: 3,

        explicacion: "La valvuloplastia mitral percutánea con balón es especialmente apropiada en estenosis mitral reumática significativa con anatomía favorable, ausencia de trombo auricular izquierdo y sin regurgitación mitral grave. La selección anatómica es fundamental.",

        perlaENARM: "Estenosis mitral reumática + anatomía favorable + sin trombo AI + sin IM grave = considerar valvuloplastia percutánea.",

        gpc: {
            mexico: "GPC mexicana relacionada con patología de la válvula mitral.",
            internacional: "ESC/EACTS Guidelines for the Management of Valvular Heart Disease."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },


    {
        id: "CARD-012",
        especialidad: "Cardiología",
        tema: "Endocarditis infecciosa",
        subtema: "Diagnóstico microbiológico",
        dificultad: "Alta",

        caso: "Paciente con fiebre persistente, soplo nuevo y fenómenos embólicos periféricos. Se sospecha endocarditis infecciosa y el paciente está hemodinámicamente estable. No ha recibido antibióticos previamente.",

        pregunta: "¿Cuál es la conducta microbiológica inicial correcta antes de iniciar antibióticos, si no existe una urgencia que obligue a tratarlos inmediatamente?",

        opciones: [
            "Obtener una sola muestra de sangre",
            "Obtener hemocultivos adecuados de diferentes sitios antes de iniciar antibióticos",
            "Esperar al resultado de procalcitonina",
            "Realizar urocultivo y tratar según el resultado",
            "Iniciar antibiótico y posteriormente obtener hemocultivos"
        ],

        respuestaCorrecta: 1,

        explicacion: "En la sospecha de endocarditis infecciosa, los hemocultivos son fundamentales para identificar el microorganismo y dirigir el tratamiento. En un paciente estable deben obtenerse múltiples muestras adecuadas antes de iniciar antibióticos.",

        perlaENARM: "Endocarditis sospechada y paciente estable: hemocultivos antes del antibiótico.",

        gpc: {
            mexico: "GPC mexicana relacionada con endocarditis infecciosa.",
            internacional: "ESC 2023 Guidelines for the Management of Endocarditis."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },


    {
        id: "CARD-013",
        especialidad: "Cardiología",
        tema: "Endocarditis infecciosa",
        subtema: "Indicación quirúrgica",
        dificultad: "Alta",

        caso: "Paciente con endocarditis de válvula mitral por Staphylococcus aureus presenta insuficiencia mitral grave y edema agudo pulmonar pese a tratamiento médico.",

        pregunta: "¿Cuál es la conducta más apropiada?",

        opciones: [
            "Completar seis semanas de antibióticos antes de considerar cirugía",
            "Suspender antibióticos y realizar anticoagulación",
            "Evaluación quirúrgica urgente por insuficiencia cardiaca secundaria a disfunción valvular grave",
            "Dar únicamente tratamiento diurético crónico",
            "Esperar a que desaparezca la bacteriemia durante varias semanas"
        ],

        respuestaCorrecta: 2,

        explicacion: "La insuficiencia cardiaca causada por disfunción valvular aguda grave es una de las principales indicaciones para cirugía temprana o urgente en endocarditis. La cirugía no debe retrasarse simplemente para completar un curso prolongado de antibióticos cuando existe una indicación quirúrgica urgente.",

        perlaENARM: "Endocarditis + insuficiencia cardiaca por lesión valvular grave = pensar en cirugía urgente.",

        gpc: {
            mexico: "GPC mexicana relacionada con endocarditis infecciosa.",
            internacional: "ESC 2023 Guidelines for the Management of Endocarditis."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },


    {
        id: "CARD-014",
        especialidad: "Cardiología",
        tema: "Pericarditis",
        subtema: "Diagnóstico",
        dificultad: "Alta",

        caso: "Mujer de 31 años presenta dolor torácico que empeora en decúbito y mejora al sentarse e inclinarse hacia delante. ECG: elevación difusa del ST con depresión del PR. Troponina discretamente elevada, sin alteraciones segmentarias en ecocardiograma.",

        pregunta: "¿Cuál es el diagnóstico más probable?",

        opciones: [
            "IAMCEST anterior",
            "Pericarditis aguda",
            "Disección aórtica",
            "Embolia pulmonar masiva",
            "Estenosis aórtica crítica"
        ],

        respuestaCorrecta: 1,

        explicacion: "El dolor pleurítico y posicional, la elevación difusa del ST y la depresión del PR son hallazgos clásicos de pericarditis aguda. Una elevación discreta de troponina puede aparecer por afectación miocárdica asociada; cuando existe compromiso miocárdico debe considerarse el espectro de miopericarditis o perimiocarditis según el contexto clínico.",

        perlaENARM: "Pericarditis: dolor posicional + ST difuso + PR deprimido.",

        gpc: {
            mexico: "GPC mexicana relacionada con diagnóstico y tratamiento de pericarditis.",
            internacional: "ESC 2025 Guidelines for Myocarditis and Pericarditis."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },


    {
        id: "CARD-015",
        especialidad: "Cardiología",
        tema: "Miocardiopatías",
        subtema: "Miocardiopatía hipertrófica",
        dificultad: "Alta",

        caso: "Varón de 24 años con síncope durante ejercicio tiene hipertrofia septal asimétrica en ecocardiograma y antecedente familiar de muerte súbita a los 35 años. No presenta enfermedad coronaria ni hipertensión significativa.",

        pregunta: "¿Qué diagnóstico debe considerarse prioritariamente?",

        opciones: [
            "Miocardiopatía hipertrófica",
            "Miocardiopatía dilatada",
            "Cor pulmonale",
            "Miocardiopatía periparto",
            "Miocardiopatía por alcohol"
        ],

        respuestaCorrecta: 0,

        explicacion: "La hipertrofia ventricular izquierda no explicada por hipertensión u otra condición de carga, especialmente con patrón septal asimétrico, síncope de esfuerzo y antecedente familiar de muerte súbita, obliga a considerar miocardiopatía hipertrófica.",

        perlaENARM: "Hipertrofia inexplicada + síncope o muerte súbita familiar = pensar en miocardiopatía hipertrófica.",

        gpc: {
            mexico: "No se identificó una GPC mexicana contemporánea específica para miocardiopatía hipertrófica en el catálogo consultado.",
            internacional: "ESC 2023 Guidelines for the Management of Cardiomyopathies."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },
    {
        id: "CARD-016",
        especialidad: "Cardiología",
        tema: "Hipertensión arterial",
        subtema: "Emergencia hipertensiva",
        dificultad: "Alta",

        caso: "Paciente con hipertensión crónica presenta presión arterial de 228/132 mmHg, cefalea intensa, confusión y déficit neurológico focal. La tomografía muestra hemorragia intracerebral.",

        pregunta: "¿Cuál es el principio general de manejo?",

        opciones: [
            "Disminuir la presión arterial a valores normales en los primeros 10 minutos",
            "No tratar la presión arterial porque el paciente tiene hipertensión crónica",
            "Realizar descenso controlado de la presión con fármaco intravenoso titulable, considerando el contexto neurológico",
            "Administrar nifedipino sublingual para lograr descenso rápido",
            "Administrar únicamente diurético oral"
        ],

        respuestaCorrecta: 2,

        explicacion: "La presencia de daño agudo de órgano blanco convierte la situación en una emergencia hipertensiva. El descenso debe ser controlado, individualizado y realizado con fármacos intravenosos titulables, evitando reducciones bruscas que puedan comprometer la perfusión cerebral. En la hemorragia intracerebral deben seguirse los objetivos específicos del protocolo neurológico correspondiente.",

        perlaENARM: "Presión arterial muy elevada + daño agudo de órgano blanco = emergencia hipertensiva.",

        gpc: {
            mexico: "GPC mexicana relacionada con diagnóstico y tratamiento de hipertensión arterial y sus situaciones especiales.",
            internacional: "ESC 2024 Guidelines for the Management of Elevated Blood Pressure and Hypertension."
        },

        bibliografia: "Harrison's Principles of Internal Medicine; Braunwald's Heart Disease."
    },


    {
        id: "CARD-017",
        especialidad: "Cardiología",
        tema: "Síndrome aórtico agudo",
        subtema: "Disección aórtica",
        dificultad: "Alta",

        caso: "Varón de 58 años presenta dolor torácico súbito, máximo desde el inicio, irradiado a espalda. Presión arterial de 198/112 mmHg. Existe diferencia de presión entre ambos brazos. ECG sin cambios isquémicos agudos.",

        pregunta: "¿Cuál es el estudio de imagen de elección en un paciente estable con alta sospecha de disección aórtica?",

        opciones: [
            "Prueba de esfuerzo",
            "Radiografía simple como estudio definitivo",
            "Angiotomografía de aorta",
            "Holter de 24 horas",
            "Gammagrafía de perfusión miocárdica"
        ],

        respuestaCorrecta: 2,

        explicacion: "En un paciente hemodinámicamente estable con sospecha de síndrome aórtico agudo, la angiotomografía con protocolo vascular permite confirmar el diagnóstico y definir la extensión. El manejo inicial incluye control de la frecuencia cardiaca y de la presión arterial, además de valoración urgente por el equipo correspondiente según el tipo de disección.",

        perlaENARM: "Dolor máximo desde el inicio + irradiación dorsal + déficit de pulsos o diferencia de presión = síndrome aórtico agudo hasta demostrar lo contrario.",

        gpc: {
            mexico: "No se identificó una GPC mexicana contemporánea específica equivalente en el catálogo consultado.",
            internacional: "ESC 2024 Guidelines for the Management of Peripheral Arterial and Aortic Diseases."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },


    {
        id: "CARD-018",
        especialidad: "Cardiología",
        tema: "Embolia pulmonar",
        subtema: "Estratificación de riesgo",
        dificultad: "Alta",

        caso: "Mujer de 67 años presenta disnea súbita. La angio-TC confirma embolia pulmonar bilateral. Presión arterial de 118/72 mmHg, troponina elevada y ecocardiograma con dilatación y disfunción del ventrículo derecho. No hay choque.",

        pregunta: "¿Cuál es la clasificación clínica más adecuada?",

        opciones: [
            "Embolia pulmonar de alto riesgo por choque",
            "Embolia pulmonar de riesgo intermedio por disfunción de VD y biomarcadores positivos, en ausencia de inestabilidad",
            "Embolia pulmonar de bajo riesgo porque la presión arterial es normal",
            "Embolia pulmonar masiva obligatoriamente",
            "No puede estratificarse sin coronariografía"
        ],

        respuestaCorrecta: 1,

        explicacion: "La ausencia de inestabilidad hemodinámica excluye la categoría de alto riesgo. La presencia de disfunción del ventrículo derecho y biomarcadores cardiacos elevados identifica un grupo de mayor riesgo dentro de la embolia pulmonar normotensa. La estratificación debe integrarse con escalas clínicas como PESI o sPESI y con la evaluación del ventrículo derecho y biomarcadores.",

        perlaENARM: "Embolia pulmonar normotensa no significa automáticamente bajo riesgo: evaluar VD, biomarcadores y PESI/sPESI.",

        gpc: {
            mexico: "GPC mexicana relacionada con diagnóstico y tratamiento de enfermedad tromboembólica venosa.",
            internacional: "ESC Guidelines for Acute Pulmonary Embolism."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },


    {
        id: "CARD-019",
        especialidad: "Cardiología",
        tema: "Prevención cardiovascular",
        subtema: "Síndrome coronario crónico y LDL-C",
        dificultad: "Alta",

        caso: "Varón de 55 años con enfermedad coronaria aterosclerótica documentada tuvo un infarto de miocardio hace 2 años. Actualmente está asintomático y recibe tratamiento farmacológico. LDL-C actual: 96 mg/dL.",

        pregunta: "¿Cuál es el principio terapéutico más importante respecto al LDL-C?",

        opciones: [
            "No tratar porque está asintomático",
            "Suspender la estatina y utilizar únicamente dieta",
            "Intensificar la reducción de LDL-C con terapia hipolipemiante de alta intensidad y añadir otros agentes si no se alcanza el objetivo",
            "Usar fibrato como monoterapia independientemente del LDL-C",
            "Utilizar únicamente niacina"
        ],

        respuestaCorrecta: 2,

        explicacion: "La enfermedad aterosclerótica cardiovascular establecida constituye prevención secundaria y requiere una estrategia intensiva de reducción de LDL-C. Si con estatina de alta intensidad no se alcanza el objetivo individual, pueden añadirse fármacos no estatínicos con evidencia de reducción de eventos, según el riesgo y las características del paciente.",

        perlaENARM: "Prevención secundaria = reducción intensiva de LDL-C; no basta con que el valor esté dentro del intervalo de referencia del laboratorio.",

        gpc: {
            mexico: "GPC mexicana relacionada con riesgo cardiovascular y dislipidemias.",
            internacional: "ESC Guidelines for Chronic Coronary Syndromes y guías contemporáneas de dislipidemia."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },


    {
        id: "CARD-020",
        especialidad: "Cardiología",
        tema: "Electrocardiografía",
        subtema: "Fibrilación auricular preexcitada",
        dificultad: "Alta",

        caso: "Hombre de 29 años con síndrome de Wolff-Parkinson-White conocido presenta palpitaciones. ECG: taquicardia irregular de QRS ancho a 240 lpm, con morfología variable de los complejos. Está consciente y hemodinámicamente estable.",

        pregunta: "¿Cuál de los siguientes fármacos debe evitarse en este escenario?",

        opciones: [
            "Procainamida intravenosa",
            "Ibutilida intravenosa",
            "Adenosina intravenosa",
            "Cardioversión eléctrica si desarrolla inestabilidad",
            "Valoración electrofisiológica posterior"
        ],

        respuestaCorrecta: 2,

        explicacion: "La taquicardia irregular de QRS ancho en un paciente con WPW debe hacer sospechar fibrilación auricular preexcitada. Los bloqueadores del nodo AV, incluida la adenosina, pueden favorecer la conducción por la vía accesoria y acelerar peligrosamente la respuesta ventricular. En pacientes estables deben considerarse las alternativas farmacológicas apropiadas según el protocolo disponible; si aparece inestabilidad, está indicada la cardioversión eléctrica.",

        perlaENARM: "FA + WPW = evitar bloqueadores del nodo AV.",

        gpc: {
            mexico: "GPC mexicana relacionada con síndrome de Wolff-Parkinson-White.",
            internacional: "Guías ESC contemporáneas para manejo de arritmias y preexcitación."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
        },

    // AQUÍ VAN CARD-021 A CARD-050
    {
        id: "CARD-021",
        especialidad: "Cardiología",
        tema: "Síndrome coronario agudo sin elevación del ST",
        subtema: "Estratificación invasiva",
        dificultad: "Alta",

        caso: "Varón de 68 años con diabetes mellitus tipo 2, enfermedad renal crónica con TFGe de 48 mL/min/1.73 m² y antecedente de angioplastia coronaria. Consulta por dolor retroesternal de 40 minutos. ECG sin elevación persistente del ST, con infradesnivel de ST de 1.5 mm en V4-V6. Troponina de alta sensibilidad elevada con ascenso significativo en una segunda determinación. Está hemodinámicamente estable. GRACE: 168 puntos.",

        pregunta: "¿Cuál es la estrategia más apropiada para este paciente?",

        opciones: [
            "Alta con seguimiento ambulatorio y prueba de esfuerzo",
            "Estrategia invasiva durante la hospitalización, priorizando una evaluación temprana",
            "Fibrinólisis intravenosa inmediata",
            "Solo tratamiento antianginoso sin estrategia invasiva",
            "Coronariografía únicamente si reaparece el dolor"
        ],

        respuestaCorrecta: 1,

        explicacion: "El paciente tiene un SCA sin elevación del ST de alto riesgo por cambios dinámicos del ST, troponina positiva y GRACE >140. Estos elementos justifican una estrategia invasiva durante la hospitalización y favorecen una evaluación temprana. La fibrinólisis no está indicada en NSTE-ACS.",

        perlaENARM: "NSTE-ACS + GRACE >140 = estrategia invasiva durante la hospitalización; el riesgo determina la prioridad.",

        gpc: {
            mexico: "GPC-IMSS-191-18, Diagnóstico y Tratamiento del Síndrome Coronario Agudo sin Elevación del Segmento ST.",
            internacional: "2023 ESC Guidelines for the management of acute coronary syndromes; 2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for ACS."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },

    {
        id: "CARD-022",
        especialidad: "Cardiología",
        tema: "Síndrome coronario agudo",
        subtema: "Shock cardiogénico y revascularización",
        dificultad: "Alta",

        caso: "Mujer de 72 años con IAM con elevación del ST anterior de 2 horas de evolución. Presenta presión arterial de 78/48 mmHg, piel fría, oliguria y lactato de 5.2 mmol/L. La coronariografía demuestra oclusión de la descendente anterior y lesiones significativas en la coronaria derecha y circunfleja.",

        pregunta: "Durante la intervención coronaria inicial, ¿cuál es la estrategia de revascularización preferible?",

        opciones: [
            "Intervenir de forma rutinaria todas las lesiones no culpables en el mismo procedimiento",
            "Realizar únicamente tratamiento médico y diferir toda revascularización",
            "Realizar revascularización de la arteria culpable y diferir la estrategia de las lesiones no culpables",
            "Realizar fibrinólisis después de la angioplastia",
            "Realizar únicamente angioplastia de la lesión no culpable más grave"
        ],

        respuestaCorrecta: 2,

        explicacion: "En el IAM complicado con shock cardiogénico, la estrategia inicial debe centrarse en la revascularización de la arteria culpable. La intervención rutinaria inmediata de las lesiones no culpables no es la estrategia preferida durante el procedimiento índice en este contexto.",

        perlaENARM: "IAM + shock cardiogénico = primero revascularizar la arteria culpable; no hacer PCI rutinaria multivaso inmediata.",

        gpc: {
            mexico: "GPC mexicana relacionada con infarto agudo de miocardio y atención del síndrome coronario agudo.",
            internacional: "2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for ACS; 2023 ESC Guidelines for ACS."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },

    {
        id: "CARD-023",
        especialidad: "Cardiología",
        tema: "Síndrome coronario agudo",
        subtema: "Tratamiento antitrombótico",
        dificultad: "Alta",

        caso: "Hombre de 59 años con NSTEMI sometido a intervención coronaria percutánea con implante de stent farmacológico. No presenta alto riesgo hemorrágico, no requiere anticoagulación crónica y no existen contraindicaciones para antiagregantes.",

        pregunta: "¿Cuál es el concepto general que debe guiar la duración del tratamiento antiagregante dual después de un SCA?",

        opciones: [
            "Suspender siempre el inhibidor P2Y12 al alta",
            "Mantener siempre aspirina de por vida y ningún P2Y12",
            "Utilizar una estrategia antitrombótica individualizada, con 12 meses como estrategia por defecto en muchos pacientes con ACS, ajustando según riesgo isquémico y hemorrágico",
            "Mantener triple terapia durante 24 meses en todos los pacientes",
            "Utilizar exclusivamente anticoagulación oral"
        ],

        respuestaCorrecta: 2,

        explicacion: "Después de un SCA, la estrategia antitrombótica debe individualizarse de acuerdo con el riesgo isquémico, hemorrágico, características del procedimiento y comorbilidades. En ausencia de circunstancias que obliguen a modificarla, 12 meses de tratamiento antiagregante dual constituye una estrategia de referencia frecuente, pero no debe aplicarse de manera rígida a todos los pacientes.",

        perlaENARM: "DAPT después de ACS: 12 meses es un punto de partida frecuente, no una regla inmodificable.",

        gpc: {
            mexico: "GPC-IMSS-191-18 para SCA sin elevación del ST; GPC mexicanas relacionadas con antiagregación en cardiopatía isquémica.",
            internacional: "2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for ACS; 2023 ESC Guidelines for ACS."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },

    {
        id: "CARD-024",
        especialidad: "Cardiología",
        tema: "Infarto agudo de miocardio",
        subtema: "Lesión miocárdica versus infarto tipo 2",
        dificultad: "Alta",

        caso: "Paciente de 76 años con sepsis grave presenta taquicardia sostenida, anemia y fiebre. La troponina de alta sensibilidad está elevada y presenta variaciones seriadas, pero no tiene dolor torácico ni nuevos cambios isquémicos en el ECG. El ecocardiograma no muestra una nueva alteración regional de la contractilidad.",

        pregunta: "¿Cuál es la interpretación más apropiada?",

        opciones: [
            "NSTEMI tipo 1 confirmado únicamente por la troponina",
            "Elevación de troponina que necesariamente representa miocarditis",
            "Lesión miocárdica aguda; el diagnóstico de infarto requiere evidencia de isquemia",
            "STEMI oculto",
            "MINOCA"
        ],

        respuestaCorrecta: 2,

        explicacion: "Una elevación dinámica de troponina indica lesión miocárdica aguda, pero el diagnóstico de infarto de miocardio requiere además evidencia de isquemia. Sepsis, taquicardia y anemia pueden producir lesión miocárdica o contribuir a un infarto tipo 2 si existe evidencia clínica, electrocardiográfica o de imagen de isquemia.",

        perlaENARM: "Troponina elevada ≠ infarto automáticamente. Infarto = lesión miocárdica + evidencia de isquemia.",

        gpc: {
            mexico: "GPC-IMSS-191-18 para SCA sin elevación del ST; considerar diagnóstico diferencial de elevación de troponinas.",
            internacional: "2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for ACS; Fourth Universal Definition of MI."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },

    {
        id: "CARD-025",
        especialidad: "Cardiología",
        tema: "MINOCA",
        subtema: "Resonancia magnética cardiaca",
        dificultad: "Alta",

        caso: "Mujer de 46 años presenta dolor torácico, cambios isquémicos en el ECG y elevación de troponina. La angiografía muestra arterias coronarias sin obstrucciones significativas. El ecocardiograma evidencia hipocinesia regional.",

        pregunta: "¿Cuál es una herramienta clave para determinar la etiología del cuadro cuando se sospecha MINOCA?",

        opciones: [
            "Holter de 24 horas como único estudio",
            "Resonancia magnética cardiaca con caracterización tisular",
            "Prueba de esfuerzo como estudio inicial obligatorio",
            "Radiografía de tórax",
            "Espirometría"
        ],

        respuestaCorrecta: 1,

        explicacion: "MINOCA es un diagnóstico de trabajo que requiere identificar el mecanismo subyacente. La resonancia magnética cardiaca es especialmente útil para diferenciar infarto verdadero, miocarditis, síndrome de Takotsubo y otras causas de lesión miocárdica mediante edema y patrones de realce tardío.",

        perlaENARM: "MINOCA no es el diagnóstico final: hay que buscar el mecanismo, y la RMC tiene un papel central.",

        gpc: {
            mexico: "No se localizó una GPC mexicana reciente específica para MINOCA en el catálogo consultado.",
            internacional: "2023 ESC Guidelines for ACS; 2024 ESC Guidelines for chronic coronary syndromes."
        },

        bibliografia: "Braunwald's Heart Disease; European Heart Journal, contemporary MINOCA literature."
    },

    {
        id: "CARD-026",
        especialidad: "Cardiología",
        tema: "Cardiopatía isquémica crónica",
        subtema: "ANOCA/INOCA",
        dificultad: "Alta",

        caso: "Mujer de 57 años presenta episodios recurrentes de angina de esfuerzo. La angiografía coronaria muestra ausencia de estenosis obstructivas. Tiene pruebas funcionales sugestivas de isquemia y persiste sintomática pese a tratamiento médico óptimo.",

        pregunta: "¿Cuál es el siguiente enfoque diagnóstico más apropiado si se sospecha ANOCA/INOCA persistente?",

        opciones: [
            "Descartar definitivamente origen cardiaco por tener coronarias no obstructivas",
            "Repetir únicamente radiografía de tórax",
            "Considerar pruebas coronarias funcionales invasivas para identificar el endotipo de disfunción coronaria",
            "Indicar fibrinólisis",
            "Implantar marcapasos"
        ],

        respuestaCorrecta: 2,

        explicacion: "Las coronarias no obstructivas no excluyen enfermedad coronaria funcional. En pacientes persistentemente sintomáticos con sospecha de ANOCA/INOCA que no responden al tratamiento médico óptimo, las pruebas funcionales coronarias invasivas pueden ayudar a identificar vasoespasmo, disfunción microvascular u otros endotipos y dirigir el tratamiento.",

        perlaENARM: "Angina + coronarias no obstructivas ≠ ausencia de enfermedad coronaria.",

        gpc: {
            mexico: "No se localizó una GPC mexicana específica y reciente para ANOCA/INOCA.",
            internacional: "2024 ESC Guidelines for the management of chronic coronary syndromes."
        },

        bibliografia: "Braunwald's Heart Disease; 2024 ESC Chronic Coronary Syndromes."
    },

    {
        id: "CARD-027",
        especialidad: "Cardiología",
        tema: "Cardiopatía isquémica crónica",
        subtema: "Probabilidad clínica de enfermedad coronaria",
        dificultad: "Alta",

        caso: "Varón de 51 años con hipertensión y dislipidemia presenta dolor torácico atípico. El ECG basal es normal y no existen datos de insuficiencia cardiaca. Se desea decidir si requiere una prueba diagnóstica para enfermedad coronaria obstructiva.",

        pregunta: "¿Qué concepto diagnóstico se enfatiza en las guías contemporáneas para estimar la probabilidad de enfermedad coronaria obstructiva?",

        opciones: [
            "Utilizar exclusivamente edad y sexo sin considerar características clínicas",
            "Utilizar un modelo de probabilidad clínica que incorpore factores de riesgo además de edad, sexo y síntomas",
            "Indicar coronariografía invasiva a todos los pacientes",
            "Utilizar únicamente el colesterol LDL",
            "Utilizar exclusivamente el resultado del ECG de reposo"
        ],

        respuestaCorrecta: 1,

        explicacion: "Las guías ESC 2024 de síndrome coronario crónico incorporan modelos de probabilidad clínica ponderados por factores de riesgo, además de edad, sexo y características de los síntomas. Esto mejora la selección de pacientes que requieren pruebas diagnósticas.",

        perlaENARM: "En CCS, la probabilidad clínica moderna integra síntomas + edad/sexo + factores de riesgo.",

        gpc: {
            mexico: "GPC-IMSS-345-08, Diagnóstico y Tratamiento de la Cardiopatía Isquémica Crónica.",
            internacional: "2024 ESC Guidelines for the management of chronic coronary syndromes."
        },

        bibliografia: "Braunwald's Heart Disease; 2024 ESC Chronic Coronary Syndromes."
    },

    {
        id: "CARD-028",
        especialidad: "Cardiología",
        tema: "Insuficiencia cardiaca",
        subtema: "Terapia fundacional en HFrEF",
        dificultad: "Alta",

        caso: "Hombre de 63 años con insuficiencia cardiaca sintomática y FEVI de 28%. Está euvolémico después de la hospitalización. Recibe un IECA y carvedilol. Creatinina 1.1 mg/dL y potasio 4.4 mEq/L. No tiene contraindicaciones para terapia adicional.",

        pregunta: "¿Cuál es el enfoque farmacológico que más contribuye a completar la terapia modificadora de pronóstico?",

        opciones: [
            "Agregar solamente digoxina",
            "Agregar un antagonista mineralocorticoide y un inhibidor SGLT2, valorando además la transición a ARNI según el contexto",
            "Suspender el betabloqueador",
            "Agregar exclusivamente un calcioantagonista no dihidropiridínico",
            "Mantener solo diurético de asa"
        ],

        respuestaCorrecta: 1,

        explicacion: "La HFrEF requiere terapia dirigida a los cuatro pilares contemporáneos: inhibición del sistema renina-angiotensina/ARNI, betabloqueador basado en evidencia, antagonista mineralocorticoide e inhibidor SGLT2. Los diuréticos son fundamentales para la congestión, pero no constituyen por sí mismos terapia modificadora de pronóstico.",

        perlaENARM: "HFrEF: piensa en los cuatro pilares, no solo en diuréticos y IECA.",

        gpc: {
            mexico: "GPC mexicana relacionada con insuficiencia cardiaca; verificar versión institucional disponible.",
            internacional: "2023 Focused Update of the 2021 ESC Guidelines for heart failure."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },

    {
        id: "CARD-029",
        especialidad: "Cardiología",
        tema: "Insuficiencia cardiaca",
        subtema: "FEVI mejorada",
        dificultad: "Alta",

        caso: "Paciente con HFrEF previa y FEVI inicial de 25% alcanza una FEVI de 52% después de tratamiento farmacológico óptimo. Se encuentra asintomático y desea suspender los medicamentos porque considera que su corazón ya está normal.",

        pregunta: "¿Cuál es la conducta más apropiada?",

        opciones: [
            "Suspender todos los fármacos inmediatamente",
            "Suspender solo el betabloqueador",
            "Continuar la terapia dirigida a insuficiencia cardiaca para reducir el riesgo de recaída",
            "Cambiar todos los fármacos por digoxina",
            "Mantener exclusivamente diurético"
        ],

        respuestaCorrecta: 2,

        explicacion: "La recuperación de la FEVI no implica necesariamente curación permanente del sustrato de insuficiencia cardiaca. La suspensión de tratamiento puede producir recaída. Los pacientes con FEVI mejorada deben continuar la terapia dirigida a insuficiencia cardiaca salvo circunstancias individualizadas que obliguen a modificarla.",

        perlaENARM: "FEVI mejorada = recuperación fenotípica, no necesariamente curación; mantener GDMT.",

        gpc: {
            mexico: "GPC mexicana relacionada con insuficiencia cardiaca.",
            internacional: "2023 ESC Focused Update of the 2021 Heart Failure Guidelines."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },

    {
        id: "CARD-030",
        especialidad: "Cardiología",
        tema: "Insuficiencia cardiaca",
        subtema: "Deficiencia de hierro",
        dificultad: "Alta",

        caso: "Mujer de 70 años con HFrEF sintomática presenta hemoglobina de 11.4 g/dL, ferritina de 55 ng/mL y saturación de transferrina de 17%. Continúa con fatiga y disnea pese a tratamiento cardiológico óptimo.",

        pregunta: "¿Qué intervención debe considerarse específicamente por la alteración hematológica-metabólica identificada?",

        opciones: [
            "Transfusión de eritrocitos obligatoria",
            "Hierro intravenoso en el contexto apropiado",
            "Suspender el betabloqueador",
            "Eritropoyetina para todos los pacientes",
            "No tratar porque la hemoglobina no es menor de 8 g/dL"
        ],

        respuestaCorrecta: 1,

        explicacion: "La deficiencia de hierro es frecuente en insuficiencia cardiaca y puede existir con o sin anemia. En pacientes sintomáticos con insuficiencia cardiaca y deficiencia de hierro, las guías contemporáneas contemplan hierro intravenoso en situaciones apropiadas para mejorar síntomas y, en determinados grupos, reducir hospitalizaciones.",

        perlaENARM: "En HF, no busques solo anemia: evalúa ferritina y saturación de transferrina.",

        gpc: {
            mexico: "No se localizó una GPC mexicana reciente específica para deficiencia de hierro en insuficiencia cardiaca.",
            internacional: "2023 ESC Focused Update of the 2021 Heart Failure Guidelines."
        },

        bibliografia: "Braunwald's Heart Disease; ESC Heart Failure Guidelines."
    },

    {
        id: "CARD-031",
        especialidad: "Cardiología",
        tema: "Insuficiencia cardiaca aguda",
        subtema: "Perfil hipertensivo y congestión",
        dificultad: "Alta",

        caso: "Hombre de 65 años con disnea intensa, ortopnea, estertores bilaterales, presión arterial 190/110 mmHg y saturación de 84%. No presenta hipotensión ni datos de shock. La radiografía muestra edema pulmonar.",

        pregunta: "¿Cuál es el enfoque inicial más apropiado?",

        opciones: [
            "Carga rápida de solución salina",
            "Vasodilatación intravenosa cuando esté indicada, junto con tratamiento de la congestión y soporte respiratorio",
            "Administrar betabloqueador intravenoso a dosis altas",
            "Suspender todo tratamiento hasta obtener cateterismo derecho",
            "Administrar fibrinólisis"
        ],

        respuestaCorrecta: 1,

        explicacion: "El cuadro corresponde a insuficiencia cardiaca aguda con edema pulmonar y presión arterial elevada. El tratamiento debe dirigirse a disminuir la congestión y las presiones de llenado; en pacientes hipertensos sin hipotensión, los vasodilatadores intravenosos pueden ser útiles, además del soporte ventilatorio cuando esté indicado.",

        perlaENARM: "Edema pulmonar hipertensivo: congestión + presión alta = pensar en vasodilatación y descongestión, no en líquidos.",

        gpc: {
            mexico: "GPC mexicana relacionada con insuficiencia cardiaca aguda.",
            internacional: "2023 ESC Focused Update of the 2021 Heart Failure Guidelines."
        },

        bibliografia: "Braunwald's Heart Disease; ESC Heart Failure Guidelines."
    },

    {
        id: "CARD-032",
        especialidad: "Cardiología",
        tema: "Fibrilación auricular",
        subtema: "Riesgo tromboembólico",
        dificultad: "Alta",

        caso: "Varón de 67 años con fibrilación auricular no valvular. Tiene hipertensión arterial, pero no antecedentes de ictus, insuficiencia cardiaca, diabetes ni enfermedad vascular.",

        pregunta: "Según el enfoque contemporáneo de la ESC 2024, ¿cómo debe interpretarse su riesgo tromboembólico?",

        opciones: [
            "No tiene ningún factor clínico relevante",
            "Tiene CHA2DS2-VA de 2 y la anticoagulación está recomendada en ausencia de contraindicaciones",
            "Tiene CHA2DS2-VA de 4",
            "La edad no se considera en la evaluación",
            "Solo debe anticoagularse si desarrolla insuficiencia cardiaca"
        ],

        respuestaCorrecta: 1,

        explicacion: "En el esquema CHA2DS2-VA utilizado en el enfoque ESC 2024, la edad de 65-74 años aporta un punto y la hipertensión otro, por lo que el paciente tiene un puntaje de 2. Esto favorece la indicación de anticoagulación oral en ausencia de contraindicaciones. La formulación de la pregunta busca reconocer que el sexo femenino ya no forma parte del puntaje CHA2DS2-VA.",

        perlaENARM: "ESC 2024: el enfoque CHA2DS2-VA elimina el componente de sexo del puntaje.",

        gpc: {
            mexico: "IMSS-014-08, Diagnóstico y Tratamiento de la Fibrilación Auricular.",
            internacional: "2024 ESC Guidelines for the management of atrial fibrillation."
        },

        bibliografia: "Braunwald's Heart Disease; 2024 ESC Atrial Fibrillation Guidelines."
    },

    {
        id: "CARD-033",
        especialidad: "Cardiología",
        tema: "Fibrilación auricular",
        subtema: "Control del ritmo",
        dificultad: "Alta",

        caso: "Mujer de 49 años con fibrilación auricular paroxística sintomática, sin cardiopatía estructural importante, con episodios frecuentes que limitan sus actividades. Tiene un riesgo tromboembólico bajo.",

        pregunta: "Además de la evaluación del riesgo tromboembólico, ¿qué estrategia debe considerarse de manera temprana para reducir la carga sintomática de FA?",

        opciones: [
            "Solo digoxina de forma indefinida",
            "Ignorar los episodios porque son paroxísticos",
            "Una estrategia de control del ritmo, incluida la posibilidad de ablación en pacientes apropiados",
            "Anticoagulación como único tratamiento sintomático",
            "Marcapasos permanente"
        ],

        respuestaCorrecta: 2,

        explicacion: "La estrategia contemporánea de FA no se limita al control de frecuencia. En pacientes sintomáticos, particularmente con FA paroxística y sin cardiopatía estructural avanzada, el control del ritmo y la ablación con catéter pueden considerarse para reducir síntomas y carga de FA en pacientes seleccionados.",

        perlaENARM: "FA sintomática: no confundir prevención de embolia con control de síntomas; son objetivos distintos.",

        gpc: {
            mexico: "IMSS-014-08, Diagnóstico y Tratamiento de la Fibrilación Auricular.",
            internacional: "2024 ESC Guidelines for the management of atrial fibrillation."
        },

        bibliografia: "Braunwald's Heart Disease; 2024 ESC Atrial Fibrillation Guidelines."
    },

    {
        id: "CARD-034",
        especialidad: "Cardiología",
        tema: "Fibrilación auricular",
        subtema: "Control de frecuencia en HFrEF",
        dificultad: "Alta",

        caso: "Hombre de 74 años con fibrilación auricular persistente y FEVI de 30%. Presenta frecuencia ventricular de 140 lpm y signos de congestión. No tiene preexcitación.",

        pregunta: "¿Qué fármaco debe evitarse como estrategia habitual de control de frecuencia por su efecto inotrópico negativo?",

        opciones: [
            "Betabloqueador cuidadosamente titulado según estabilidad",
            "Digoxina en el contexto apropiado",
            "Diltiazem",
            "Anticoagulante oral cuando esté indicado",
            "Diurético de asa para congestión"
        ],

        respuestaCorrecta: 2,

        explicacion: "Los calcioantagonistas no dihidropiridínicos, como diltiazem y verapamilo, pueden empeorar la función sistólica por su efecto inotrópico negativo y no son apropiados para el control crónico de frecuencia en HFrEF con FEVI reducida. El contexto hemodinámico determina la selección y el momento de los fármacos.",

        perlaENARM: "FA + FEVI reducida: evitar diltiazem/verapamilo como estrategia habitual de control de frecuencia.",

        gpc: {
            mexico: "IMSS-014-08, Diagnóstico y Tratamiento de la Fibrilación Auricular.",
            internacional: "2024 ESC Guidelines for the management of atrial fibrillation."
        },

        bibliografia: "Braunwald's Heart Disease; 2024 ESC Atrial Fibrillation Guidelines."
    },

    {
        id: "CARD-035",
        especialidad: "Cardiología",
        tema: "Taquicardia ventricular",
        subtema: "Prevención secundaria de muerte súbita",
        dificultad: "Alta",

        caso: "Hombre de 64 años con cardiopatía isquémica y cicatriz miocárdica presenta taquicardia ventricular monomórfica sostenida documentada, que requirió cardioversión eléctrica. Tras corregir isquemia y alteraciones electrolíticas, persiste una FEVI de 30%.",

        pregunta: "¿Qué estrategia tiene un papel central en la prevención secundaria de muerte súbita en este paciente?",

        opciones: [
            "Solo aspirina",
            "Marcapasos sin función de desfibrilación",
            "Desfibrilador automático implantable en el contexto apropiado",
            "Solo calcioantagonista",
            "Suspender tratamiento de cardiopatía isquémica"
        ],

        respuestaCorrecta: 2,

        explicacion: "La TV sostenida en un paciente con cardiopatía estructural constituye un evento de alto riesgo de muerte súbita. Después de descartar causas reversibles y valorar el contexto clínico, el ICD tiene un papel central en prevención secundaria.",

        perlaENARM: "TV sostenida en cardiopatía estructural = pensar en ICD para prevención secundaria después de evaluar causas reversibles.",

        gpc: {
            mexico: "GPC mexicana relacionada con arritmias ventriculares y cardiopatía isquémica.",
            internacional: "2022 ESC Guidelines for ventricular arrhythmias and prevention of sudden cardiac death."
        },

        bibliografia: "Braunwald's Heart Disease; 2022 ESC Ventricular Arrhythmia Guidelines."
    },

    {
        id: "CARD-036",
        especialidad: "Cardiología",
        tema: "Taquicardia ventricular",
        subtema: "Electrocardiografía",
        dificultad: "Alta",

        caso: "Paciente con antecedente de infarto presenta taquicardia regular de QRS ancho a 180 lpm. En el ECG se observan disociación AV y latidos de captura.",

        pregunta: "¿Cuál es el diagnóstico más probable?",

        opciones: [
            "Taquicardia sinusal con aberrancia",
            "Fibrilación auricular con aberrancia",
            "Taquicardia ventricular monomórfica",
            "Taquicardia auricular multifocal",
            "Flutter auricular con bloqueo AV"
        ],

        respuestaCorrecta: 2,

        explicacion: "La disociación AV y los latidos de captura son hallazgos clásicos que favorecen taquicardia ventricular. En un paciente con antecedente de infarto y cardiopatía estructural, una taquicardia regular de QRS ancho debe considerarse TV hasta demostrar lo contrario.",

        perlaENARM: "QRS ancho + cardiopatía estructural + disociación AV = TV hasta demostrar lo contrario.",

        gpc: {
            mexico: "GPC mexicana relacionada con arritmias cardiacas.",
            internacional: "2022 ESC Guidelines for ventricular arrhythmias and prevention of sudden cardiac death."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },

    {
        id: "CARD-037",
        especialidad: "Cardiología",
        tema: "Bradiarritmias",
        subtema: "Bloqueo auriculoventricular",
        dificultad: "Alta",

        caso: "Mujer de 76 años presenta síncope recurrente. El ECG muestra ondas P a 80 lpm y complejos QRS a 32 lpm sin relación fija entre ambos. El ritmo de escape es ventricular.",

        pregunta: "¿Cuál es la interpretación electrocardiográfica?",

        opciones: [
            "Bloqueo AV de primer grado",
            "Bloqueo AV Mobitz I",
            "Bloqueo AV Mobitz II",
            "Bloqueo AV completo",
            "Bloqueo sinoauricular"
        ],

        respuestaCorrecta: 3,

        explicacion: "La ausencia de relación entre ondas P y complejos QRS, con actividad auricular y ventricular independientes, caracteriza el bloqueo AV completo. La presencia de un escape ventricular lento explica la bradicardia y el síncope.",

        perlaENARM: "Disociación AV completa = bloqueo AV de tercer grado.",

        gpc: {
            mexico: "GPC mexicana relacionada con trastornos de conducción cardiaca.",
            internacional: "ESC guidance on cardiac pacing and conduction disorders."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },

    {
        id: "CARD-038",
        especialidad: "Cardiología",
        tema: "Síndrome de QT largo",
        subtema: "Prevención de muerte súbita",
        dificultad: "Alta",

        caso: "Mujer de 25 años presenta síncope durante ejercicio. El ECG muestra QTc prolongado de forma persistente. Su hermana murió súbitamente a los 22 años. No consume fármacos conocidos por prolongar el QT.",

        pregunta: "¿Qué intervención farmacológica tiene un papel fundamental en el síndrome de QT largo congénito?",

        opciones: [
            "Propranolol o nadolol en pacientes apropiados",
            "Verapamilo",
            "Adenosina crónica",
            "Digoxina",
            "Nitrato sublingual"
        ],

        respuestaCorrecta: 0,

        explicacion: "Los betabloqueadores, particularmente nadolol o propranolol en los contextos apropiados, son pilares del tratamiento del síndrome de QT largo congénito porque reducen eventos arrítmicos mediados por catecolaminas. La estratificación individual determina si además se requiere ICD u otras intervenciones.",

        perlaENARM: "QT largo congénito + eventos relacionados con catecolaminas = betabloqueador.",

        gpc: {
            mexico: "No se localizó una GPC mexicana reciente específica para síndrome de QT largo congénito.",
            internacional: "2022 ESC Guidelines for ventricular arrhythmias and prevention of sudden cardiac death."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },

    {
        id: "CARD-039",
        especialidad: "Cardiología",
        tema: "Estenosis aórtica",
        subtema: "Bajo flujo y bajo gradiente",
        dificultad: "Alta",

        caso: "Hombre de 78 años con disnea progresiva presenta FEVI de 32%. El ecocardiograma muestra área valvular aórtica de 0.75 cm², gradiente medio de 28 mmHg y volumen sistólico indexado reducido.",

        pregunta: "¿Qué estudio puede ayudar a diferenciar estenosis aórtica verdaderamente grave de una pseudoestenosis en este contexto?",

        opciones: [
            "Prueba de esfuerzo convencional como único estudio",
            "Ecocardiograma con dobutamina a dosis bajas",
            "Holter de 24 horas",
            "Radiografía de tórax",
            "Prueba de caminata como estudio confirmatorio"
        ],

        respuestaCorrecta: 1,

        explicacion: "En la estenosis aórtica con bajo flujo, bajo gradiente y FEVI reducida, el ecocardiograma con dobutamina puede evaluar la respuesta del volumen sistólico y del gradiente, ayudando a distinguir estenosis verdaderamente grave de pseudoestenosis cuando el estudio es técnicamente apropiado.",

        perlaENARM: "AVA pequeña + gradiente bajo + FEVI reducida = piensa en AS de bajo flujo/bajo gradiente y dobutamina.",

        gpc: {
            mexico: "GPC mexicana relacionada con valvulopatía aórtica.",
            internacional: "2025 ESC/EACTS Guidelines for the management of valvular heart disease."
        },

        bibliografia: "Braunwald's Heart Disease; 2025 ESC/EACTS Valvular Heart Disease Guidelines."
    },

    {
        id: "CARD-040",
        especialidad: "Cardiología",
        tema: "Insuficiencia mitral",
        subtema: "Indicaciones de intervención",
        dificultad: "Alta",

        caso: "Paciente de 67 años con insuficiencia mitral primaria grave degenerativa presenta disnea progresiva. El ecocardiograma demuestra dilatación ventricular izquierda y deterioro progresivo de la función sistólica.",

        pregunta: "¿Cuál es el principio fundamental para decidir la intervención?",

        opciones: [
            "Esperar siempre hasta que aparezca edema pulmonar",
            "Intervenir únicamente cuando la FEVI sea menor de 20%",
            "Evaluar de forma integral síntomas, severidad, respuesta ventricular y posibilidad de reparación en un Heart Valve Centre",
            "Indicar tratamiento antibiótico prolongado",
            "Evitar cualquier intervención hasta que aparezca fibrilación auricular"
        ],

        respuestaCorrecta: 2,

        explicacion: "La insuficiencia mitral primaria grave requiere evaluación temprana porque la intervención antes del daño ventricular irreversible puede mejorar resultados. Las guías contemporáneas enfatizan Heart Team, centros especializados, cuantificación ecocardiográfica y factibilidad de reparación.",

        perlaENARM: "Valvulopatía grave: no esperes a la descompensación irreversible; decide mediante Heart Team.",

        gpc: {
            mexico: "IMSS-235-09, Patología de Válvula Mitral.",
            internacional: "2025 ESC/EACTS Guidelines for the management of valvular heart disease."
        },

        bibliografia: "Braunwald's Heart Disease; 2025 ESC/EACTS Valvular Heart Disease Guidelines."
    },

    {
        id: "CARD-041",
        especialidad: "Cardiología",
        tema: "Estenosis mitral",
        subtema: "Valvuloplastia mitral percutánea",
        dificultad: "Alta",

        caso: "Mujer de 39 años con antecedente de fiebre reumática presenta disnea de esfuerzo. Ecocardiograma: estenosis mitral grave, válvula con anatomía favorable, sin trombo en aurícula izquierda y con insuficiencia mitral mínima.",

        pregunta: "¿Cuál es una opción intervencionista apropiada en una paciente seleccionada con estas características?",

        opciones: [
            "Valvuloplastia mitral percutánea con balón",
            "TAVI",
            "Implante de stent coronario",
            "Ablación del nodo AV",
            "Cierre percutáneo de comunicación interauricular"
        ],

        respuestaCorrecta: 0,

        explicacion: "En la estenosis mitral reumática grave sintomática con anatomía favorable, sin trombo auricular izquierdo y sin insuficiencia mitral significativa, la valvuloplastia mitral percutánea puede ser una estrategia apropiada.",

        perlaENARM: "Estenosis mitral reumática grave + anatomía favorable + sin trombo AI = pensar en valvuloplastia mitral percutánea.",

        gpc: {
            mexico: "IMSS-235-09, Patología de Válvula Mitral.",
            internacional: "2025 ESC/EACTS Guidelines for the management of valvular heart disease."
        },

        bibliografia: "Braunwald's Heart Disease; 2025 ESC/EACTS Valvular Heart Disease Guidelines."
    },

    {
        id: "CARD-042",
        especialidad: "Cardiología",
        tema: "Endocarditis infecciosa",
        subtema: "Diagnóstico microbiológico",
        dificultad: "Alta",

        caso: "Hombre de 58 años con fiebre de tres semanas, pérdida de peso y nuevo soplo de insuficiencia mitral. No ha recibido antibióticos previamente y se encuentra hemodinámicamente estable.",

        pregunta: "Antes de iniciar antibióticos empíricos, ¿qué procedimiento microbiológico es prioritario?",

        opciones: [
            "Una sola muestra de sangre",
            "Tres series de hemocultivos obtenidos adecuadamente antes del antibiótico",
            "Cultivo de orina exclusivamente",
            "Serología para todos los virus respiratorios",
            "No tomar cultivos porque el ecocardiograma es suficiente"
        ],

        respuestaCorrecta: 1,

        explicacion: "Cuando la sospecha de endocarditis infecciosa es alta y el paciente está estable, deben obtenerse múltiples muestras de sangre para hemocultivo antes de iniciar antibióticos, con el objetivo de aumentar el rendimiento microbiológico y orientar el tratamiento.",

        perlaENARM: "Sospecha de endocarditis + paciente estable = hemocultivos antes del antibiótico.",

        gpc: {
            mexico: "GPC mexicana relacionada con endocarditis infecciosa.",
            internacional: "2023 ESC Guidelines for the management of endocarditis."
        },

        bibliografia: "Braunwald's Heart Disease; 2023 ESC Endocarditis Guidelines."
    },

    {
        id: "CARD-043",
        especialidad: "Cardiología",
        tema: "Endocarditis infecciosa",
        subtema: "Indicación de cirugía",
        dificultad: "Alta",

        caso: "Mujer de 61 años con endocarditis infecciosa de válvula mitral presenta insuficiencia mitral grave, edema pulmonar y dificultad para estabilizarse pese a antibióticos adecuados. El ecocardiograma muestra vegetación móvil de gran tamaño.",

        pregunta: "¿Cuál es la conducta general más apropiada?",

        opciones: [
            "Continuar antibióticos durante varios meses antes de considerar cirugía",
            "Esperar a que desaparezca completamente la vegetación",
            "Evaluación urgente por un equipo de endocarditis para cirugía temprana",
            "Suspender antibióticos",
            "Dar anticoagulación como tratamiento principal"
        ],

        respuestaCorrecta: 2,

        explicacion: "La insuficiencia valvular grave con insuficiencia cardiaca constituye una de las principales razones para cirugía urgente en endocarditis. El equipo multidisciplinario de endocarditis debe valorar de inmediato el momento y tipo de intervención.",

        perlaENARM: "Endocarditis + insuficiencia cardiaca por destrucción valvular = cirugía urgente, no esperar a completar antibióticos.",

        gpc: {
            mexico: "GPC mexicana relacionada con endocarditis infecciosa.",
            internacional: "2023 ESC Guidelines for the management of endocarditis."
        },

        bibliografia: "Braunwald's Heart Disease; 2023 ESC Endocarditis Guidelines."
    },

    {
        id: "CARD-044",
        especialidad: "Cardiología",
        tema: "Miocarditis",
        subtema: "Resonancia magnética",
        dificultad: "Alta",

        caso: "Varón de 29 años desarrolla dolor torácico y elevación de troponina cinco días después de un cuadro viral. El ECG muestra cambios inespecíficos y la angiografía coronaria no evidencia enfermedad obstructiva.",

        pregunta: "¿Qué estudio tiene especial utilidad para caracterizar el proceso inflamatorio miocárdico?",

        opciones: [
            "Resonancia magnética cardiaca con protocolos de caracterización tisular",
            "Radiografía simple de tórax",
            "Holter como único estudio",
            "Espirometría",
            "Ultrasonido abdominal"
        ],

        respuestaCorrecta: 0,

        explicacion: "La resonancia magnética cardiaca permite valorar edema, necrosis/fibrosis y patrones de realce que ayudan a establecer el fenotipo inflamatorio y a diferenciar miocarditis de otras causas de lesión miocárdica.",

        perlaENARM: "Dolor + troponina + coronarias no obstructivas: RMC ayuda a separar miocarditis, infarto y Takotsubo.",

        gpc: {
            mexico: "No se localizó una GPC mexicana reciente específica de miocarditis en el catálogo consultado.",
            internacional: "2025 ESC Guidelines for the management of myocarditis and pericarditis."
        },

        bibliografia: "Braunwald's Heart Disease; 2025 ESC Myocarditis and Pericarditis Guidelines."
    },

    {
        id: "CARD-045",
        especialidad: "Cardiología",
        tema: "Pericarditis aguda",
        subtema: "Diagnóstico diferencial con STEMI",
        dificultad: "Alta",

        caso: "Hombre de 31 años presenta dolor torácico pleurítico que mejora al sentarse e inclinarse hacia adelante. ECG con elevación difusa del ST y depresión del PR en múltiples derivaciones, sin cambios recíprocos localizados.",

        pregunta: "¿Cuál es el diagnóstico más probable?",

        opciones: [
            "STEMI anterior",
            "Pericarditis aguda",
            "Disección aórtica",
            "Embolia pulmonar masiva",
            "Taquicardia ventricular"
        ],

        respuestaCorrecta: 1,

        explicacion: "El dolor pleurítico y posicional, la elevación difusa del ST y la depresión del PR favorecen pericarditis aguda. A diferencia del STEMI regional, los cambios electrocardiográficos son generalmente difusos y no siguen un territorio coronario único.",

        perlaENARM: "Pericarditis: dolor pleurítico/posicional + ST difuso + PR descendido.",

        gpc: {
            mexico: "No se localizó una GPC mexicana reciente específica para pericarditis aguda.",
            internacional: "2025 ESC Guidelines for the management of myocarditis and pericarditis."
        },

        bibliografia: "Braunwald's Heart Disease; 2025 ESC Myocarditis and Pericarditis Guidelines."
    },

    {
        id: "CARD-046",
        especialidad: "Cardiología",
        tema: "Miocardiopatía hipertrófica",
        subtema: "Obstrucción del tracto de salida",
        dificultad: "Alta",

        caso: "Mujer de 42 años con miocardiopatía hipertrófica obstructiva presenta disnea de esfuerzo. El ecocardiograma demuestra hipertrofia septal y gradiente dinámico del tracto de salida del ventrículo izquierdo que aumenta durante maniobras fisiológicas.",

        pregunta: "¿Qué principio farmacológico es apropiado para reducir el gradiente dinámico y los síntomas en una paciente estable?",

        opciones: [
            "Aumentar la contractilidad con dobutamina",
            "Utilizar un betabloqueador para reducir frecuencia y contractilidad",
            "Administrar nitratos de forma rutinaria",
            "Utilizar digoxina como primera línea",
            "Administrar vasodilatadores potentes para disminuir la precarga"
        ],

        respuestaCorrecta: 1,

        explicacion: "En la miocardiopatía hipertrófica obstructiva sintomática, los betabloqueadores pueden reducir la frecuencia cardiaca y la contractilidad, prolongando el llenado diastólico y disminuyendo el gradiente dinámico. Los fármacos que reducen marcadamente la precarga o aumentan la contractilidad pueden empeorar la obstrucción.",

        perlaENARM: "HCM obstructiva: evita aumentar contractilidad y reducir excesivamente precarga.",

        gpc: {
            mexico: "No se localizó una GPC mexicana reciente específica para miocardiopatía hipertrófica.",
            internacional: "2023 ESC Guidelines for the management of cardiomyopathies."
        },

        bibliografia: "Braunwald's Heart Disease; 2023 ESC Cardiomyopathy Guidelines."
    },

    {
        id: "CARD-047",
        especialidad: "Cardiología",
        tema: "Miocardiopatía hipertrófica",
        subtema: "Muerte súbita",
        dificultad: "Alta",

        caso: "Hombre de 35 años con miocardiopatía hipertrófica tiene antecedente familiar de muerte súbita, síncope inexplicado y episodios documentados de taquicardia ventricular no sostenida durante monitorización ambulatoria.",

        pregunta: "¿Qué aspecto debe recibir especial atención?",

        opciones: [
            "Riesgo de muerte súbita y estratificación para desfibrilador implantable",
            "Indicar anticoagulación a todos los pacientes independientemente del ritmo",
            "Suspender seguimiento cardiológico",
            "Indicar fibrinólisis preventiva",
            "Considerar que la enfermedad solo afecta al ventrículo izquierdo"
        ],

        respuestaCorrecta: 0,

        explicacion: "La miocardiopatía hipertrófica requiere evaluación estructurada del riesgo de muerte súbita. Antecedente familiar, síncope inexplicado, TV no sostenida, hipertrofia marcada y otros marcadores contribuyen a la estratificación y a la decisión sobre ICD.",

        perlaENARM: "HCM + síncope inexplicado + antecedente familiar + TVNS = evaluación especializada del riesgo de muerte súbita.",

        gpc: {
            mexico: "No se localizó una GPC mexicana reciente específica para miocardiopatía hipertrófica.",
            internacional: "2023 ESC Guidelines for the management of cardiomyopathies."
        },

        bibliografia: "Braunwald's Heart Disease; 2023 ESC Cardiomyopathy Guidelines."
    },

    {
        id: "CARD-048",
        especialidad: "Cardiología",
        tema: "Crisis hipertensiva",
        subtema: "Emergencia hipertensiva",
        dificultad: "Alta",

        caso: "Hombre de 58 años presenta presión arterial de 230/130 mmHg, dolor torácico intenso y déficit neurológico transitorio. La angiotomografía confirma disección aguda de aorta ascendente.",

        pregunta: "¿Cuál es el principio terapéutico inmediato más apropiado?",

        opciones: [
            "Administrar solo un vasodilatador arterial",
            "Reducir la presión lentamente durante varios días",
            "Controlar rápidamente la fuerza de eyección mediante betabloqueo intravenoso y después ajustar la presión arterial",
            "Administrar grandes cantidades de solución salina",
            "Dar nifedipino sublingual"
        ],

        respuestaCorrecta: 2,

        explicacion: "La disección aórtica aguda requiere reducción inmediata del estrés parietal. El betabloqueador intravenoso se utiliza para disminuir frecuencia cardiaca y contractilidad; posteriormente puede añadirse un vasodilatador si persiste hipertensión. La reducción debe ser rápida y controlada.",

        perlaENARM: "Disección aórtica: primero controlar dP/dt con betabloqueo; después vasodilatar si es necesario.",

        gpc: {
            mexico: "GPC-SS-155-20, Diagnóstico y tratamiento de las crisis hipertensivas en adultos en los tres niveles de atención.",
            internacional: "2024 ESC Guidelines for peripheral arterial and aortic diseases."
        },

        bibliografia: "Braunwald's Heart Disease; 2024 ESC Aortic Disease Guidelines."
    },

    {
        id: "CARD-049",
        especialidad: "Cardiología",
        tema: "Síndrome aórtico agudo",
        subtema: "Disección de aorta",
        dificultad: "Alta",

        caso: "Mujer de 67 años con hipertensión presenta dolor torácico súbito, máximo desde el inicio, irradiado a espalda. Existe diferencia de presión arterial entre ambos brazos y un nuevo soplo diastólico. Se encuentra hemodinámicamente estable.",

        pregunta: "¿Cuál es el estudio de imagen inicial más apropiado para confirmar el diagnóstico en este paciente estable?",

        opciones: [
            "Radiografía de tórax como estudio definitivo",
            "Angiotomografía de aorta",
            "Prueba de esfuerzo",
            "Holter",
            "Gammagrafía pulmonar de ventilación/perfusión"
        ],

        respuestaCorrecta: 1,

        explicacion: "En un paciente hemodinámicamente estable con alta sospecha de síndrome aórtico agudo, la angiotomografía es una herramienta diagnóstica de primera línea ampliamente disponible y permite definir la extensión de la disección. La elección puede variar según estabilidad, disponibilidad y experiencia local.",

        perlaENARM: "Dolor súbito máximo al inicio + déficit de pulso/nuevo soplo = síndrome aórtico agudo hasta demostrar lo contrario.",

        gpc: {
            mexico: "IMSS-414-10, Diagnóstico y Tratamiento de la Disección Aguda de Aorta Torácica Descendente.",
            internacional: "2024 ESC Guidelines for peripheral arterial and aortic diseases."
        },

        bibliografia: "Braunwald's Heart Disease; 2024 ESC Aortic Disease Guidelines."
    },

    {
        id: "CARD-050",
        especialidad: "Cardiología",
        tema: "Prevención cardiovascular",
        subtema: "Dislipidemia después de síndrome coronario agudo",
        dificultad: "Alta",

        caso: "Hombre de 61 años egresa después de un infarto agudo de miocardio. Se prescribe estatina de alta intensidad. A las semanas, el LDL-C continúa por encima del objetivo establecido para un paciente de muy alto riesgo a pesar de adherencia adecuada.",

        pregunta: "¿Cuál es el principio terapéutico más apropiado?",

        opciones: [
            "Suspender la estatina",
            "Mantener únicamente modificaciones del estilo de vida",
            "Intensificar la terapia hipolipemiante combinada, incorporando un fármaco adicional como ezetimiba y posteriormente otros agentes según el objetivo y la respuesta",
            "Cambiar a una estatina de menor intensidad",
            "No volver a medir LDL-C"
        ],

        respuestaCorrecta: 2,

        explicacion: "Después de un evento aterosclerótico mayor, el paciente pertenece a un grupo de riesgo cardiovascular muy alto. Si el LDL-C permanece por encima del objetivo pese a estatina de alta intensidad y adherencia adecuada, se recomienda intensificar el tratamiento con terapia combinada, inicialmente con ezetimiba y posteriormente con otros agentes hipolipemiantes cuando sea necesario para alcanzar el objetivo individual.",

        perlaENARM: "Prevención secundaria: si LDL sigue alto pese a estatina máxima tolerada, combina; no abandones la estatina.",

        gpc: {
            mexico: "GPC mexicana relacionada con prevención secundaria y dislipidemias en cardiopatía isquémica.",
            internacional: "2024 ESC Guidelines for chronic coronary syndromes; contemporary ACC/AHA recommendations for secondary prevention."
        },

        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    }
];

window.BANCO_CARDIOLOGIA = BANCO_CARDIOLOGIA;
