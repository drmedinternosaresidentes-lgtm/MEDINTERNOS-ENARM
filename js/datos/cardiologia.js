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
    },
    {
    id: "CARD-051",
    especialidad: "Cardiología",
    tema: "Hipertensión arterial",
    subtema: "Hipertensión resistente",
    dificultad: "Muy alta",
    caso: "Mujer de 58 años con hipertensión arterial presenta cifras persistentes de 158/94 mmHg pese a recibir losartán, amlodipino y clortalidona a dosis adecuadas. Refiere adherencia adecuada. La función renal es estable y el potasio es de 4.1 mEq/L.",
    pregunta: "Antes de etiquetar definitivamente el cuadro como hipertensión resistente, ¿qué debe descartarse de manera prioritaria?",
    opciones: [
        "Hipertensión de bata blanca y pseudorresistencia",
        "Pericarditis aguda",
        "Miocardiopatía hipertrófica",
        "Estenosis aórtica",
        "Síndrome de Brugada"
    ],
    respuestaCorrecta: 0,
    explicacion: "La hipertensión resistente requiere confirmar que las cifras elevadas sean reales y que exista adherencia, técnica correcta de medición y ausencia de efecto de bata blanca. Posteriormente deben buscarse causas secundarias.",
    perlaENARM: "Antes de llamar resistente a una HAS: confirmar medición, adherencia y descartar bata blanca.",
    gpc: {
        mexico: "GPC-SS-155-20, Diagnóstico y Tratamiento de las Crisis Hipertensivas en el Adulto.",
        internacional: "2024 ESC Guidelines for the Management of Elevated Blood Pressure and Hypertension."
    },
    bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
},
{
    id: "CARD-052",
    especialidad: "Cardiología",
    tema: "Hipertensión arterial",
    subtema: "Hipertensión secundaria",
    dificultad: "Muy alta",
    caso: "Varón de 39 años presenta hipertensión de difícil control, hipopotasemia de 2.8 mEq/L y alcalosis metabólica. No utiliza diuréticos.",
    pregunta: "¿Cuál es la etiología secundaria que debe sospecharse prioritariamente?",
    opciones: [
        "Hiperaldosteronismo primario",
        "Pericarditis constrictiva",
        "Coartación adquirida de la aorta",
        "Miocardiopatía dilatada",
        "Endocarditis infecciosa"
    ],
    respuestaCorrecta: 0,
    explicacion: "La combinación de hipertensión, hipopotasemia y alcalosis metabólica sin uso de diuréticos es altamente sugestiva de exceso mineralocorticoide, particularmente hiperaldosteronismo primario.",
    perlaENARM: "HAS + hipopotasemia espontánea = buscar hiperaldosteronismo primario.",
    gpc: {
        mexico: "GPC-SS-155-20, Diagnóstico y Tratamiento de las Crisis Hipertensivas en el Adulto.",
        internacional: "2024 ESC Guidelines for the Management of Elevated Blood Pressure and Hypertension."
    },
    bibliografia: "Harrison's Principles of Internal Medicine."
},
{
    id: "CARD-053",
    especialidad: "Cardiología",
    tema: "Hipertensión arterial",
    subtema: "Emergencia hipertensiva",
    dificultad: "Muy alta",
    caso: "Paciente con presión arterial de 224/126 mmHg presenta disnea intensa, hipoxemia y edema agudo pulmonar. No existen datos de disección aórtica.",
    pregunta: "¿Cuál es el principio terapéutico más apropiado?",
    opciones: [
        "Reducir la presión arterial de forma controlada con fármacos intravenosos y tratar la congestión",
        "Normalizar la presión arterial en los primeros cinco minutos",
        "Administrar únicamente un antihipertensivo oral",
        "No tratar la presión arterial hasta disponer de una resonancia",
        "Administrar expansión agresiva de volumen"
    ],
    respuestaCorrecta: 0,
    explicacion: "Existe una emergencia hipertensiva porque hay daño agudo de órgano blanco. En edema pulmonar hipertensivo se requiere tratamiento intravenoso y manejo simultáneo de la congestión, evitando descensos bruscos e indiscriminados.",
    perlaENARM: "La emergencia hipertensiva se define por daño agudo de órgano blanco, no solamente por una cifra elevada.",
    gpc: {
        mexico: "GPC-SS-155-20, Diagnóstico y Tratamiento de las Crisis Hipertensivas en el Adulto.",
        internacional: "2024 ESC Guidelines for the Management of Elevated Blood Pressure and Hypertension."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-054",
    especialidad: "Cardiología",
    tema: "Hipertensión arterial",
    subtema: "Disección aórtica e hipertensión",
    dificultad: "Muy alta",
    caso: "Varón de 62 años con dolor torácico súbito irradiado a espalda presenta presión arterial de 210/118 mmHg. La angiotomografía confirma disección aguda de aorta ascendente.",
    pregunta: "¿Cuál es el objetivo inicial del tratamiento farmacológico?",
    opciones: [
        "Disminuir rápidamente la fuerza de eyección y la presión arterial mediante betabloqueo intravenoso",
        "Administrar fibrinólisis",
        "Administrar nitroglicerina como único tratamiento",
        "Aumentar la frecuencia cardiaca",
        "Administrar diurético como intervención principal"
    ],
    respuestaCorrecta: 0,
    explicacion: "En el síndrome aórtico agudo se busca reducir el estrés parietal. El betabloqueador intravenoso disminuye frecuencia, contractilidad y dP/dt; posteriormente puede añadirse vasodilatador si es necesario.",
    perlaENARM: "Disección aórtica: primero control de impulso con betabloqueador; después vasodilatador si persiste hipertensión.",
    gpc: {
        mexico: "IMSS-414-10, Diagnóstico y Tratamiento de la Disección Aguda de Aorta Torácica Descendente.",
        internacional: "2024 ESC Guidelines for the Management of Peripheral Arterial and Aortic Diseases."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-055",
    especialidad: "Cardiología",
    tema: "Hipertensión arterial",
    subtema: "Daño de órgano blanco",
    dificultad: "Alta",
    caso: "Paciente con hipertensión de larga evolución presenta hipertrofia ventricular izquierda en ecocardiograma y aumento de la relación albúmina/creatinina urinaria.",
    pregunta: "¿Cómo debe interpretarse este hallazgo?",
    opciones: [
        "Existe daño de órgano mediado por hipertensión",
        "La hipertensión está descartada",
        "La hipertrofia ventricular es siempre fisiológica",
        "La albuminuria excluye enfermedad cardiovascular",
        "No existe implicación pronóstica"
    ],
    respuestaCorrecta: 0,
    explicacion: "La hipertrofia ventricular izquierda y la albuminuria son manifestaciones de daño de órgano asociado a hipertensión y se relacionan con mayor riesgo cardiovascular.",
    perlaENARM: "HAS no es solo una cifra: busca HVI, albuminuria, enfermedad renal, retinopatía y enfermedad vascular.",
    gpc: {
        mexico: "GPC-SS-155-20, Diagnóstico y Tratamiento de las Crisis Hipertensivas en el Adulto.",
        internacional: "2024 ESC Guidelines for the Management of Elevated Blood Pressure and Hypertension."
    },
    bibliografia: "Harrison's Principles of Internal Medicine."
},
{
    id: "CARD-056",
    especialidad: "Cardiología",
    tema: "Fibrilación auricular",
    subtema: "Control de frecuencia",
    dificultad: "Alta",
    caso: "Varón de 73 años con fibrilación auricular permanente, FEVI de 55% y síntomas leves presenta frecuencia ventricular persistente de 125 lpm en reposo.",
    pregunta: "¿Cuál es una estrategia razonable para el control de frecuencia?",
    opciones: [
        "Betabloqueador",
        "Flecainida como monoterapia para control de frecuencia",
        "Adenosina crónica",
        "Procainamida oral",
        "Desfibrilación diaria"
    ],
    respuestaCorrecta: 0,
    explicacion: "Los betabloqueadores son una de las opciones principales para control de frecuencia en fibrilación auricular, individualizando según función ventricular, comorbilidades y síntomas.",
    perlaENARM: "Control de frecuencia ≠ control de ritmo: los betabloqueadores son fármacos fundamentales para disminuir respuesta ventricular.",
    gpc: {
        mexico: "IMSS-014-08, Diagnóstico y Tratamiento de la Fibrilación Auricular.",
        internacional: "2024 ESC Guidelines for the Management of Atrial Fibrillation."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-057",
    especialidad: "Cardiología",
    tema: "Fibrilación auricular",
    subtema: "Cardioversión eléctrica",
    dificultad: "Muy alta",
    caso: "Paciente con fibrilación auricular de duración desconocida presenta inestabilidad hemodinámica con hipotensión y edema pulmonar.",
    pregunta: "¿Cuál es la conducta inmediata?",
    opciones: [
        "Cardioversión eléctrica sincronizada urgente",
        "Esperar tres semanas de anticoagulación antes de intervenir",
        "Realizar prueba de esfuerzo",
        "Administrar flecainida oral y dar de alta",
        "Esperar resolución espontánea"
    ],
    respuestaCorrecta: 0,
    explicacion: "La fibrilación auricular que produce inestabilidad hemodinámica requiere cardioversión eléctrica sincronizada inmediata. La anticoagulación debe manejarse posteriormente según el contexto.",
    perlaENARM: "FA + inestabilidad hemodinámica = cardioversión eléctrica sincronizada urgente.",
    gpc: {
        mexico: "IMSS-014-08, Diagnóstico y Tratamiento de la Fibrilación Auricular.",
        internacional: "2024 ESC Guidelines for the Management of Atrial Fibrillation."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-058",
    especialidad: "Cardiología",
    tema: "Fibrilación auricular",
    subtema: "Cardioversión en FA estable",
    dificultad: "Muy alta",
    caso: "Mujer de 64 años presenta fibrilación auricular persistente de aproximadamente 72 horas. Está estable y no recibe anticoagulación.",
    pregunta: "¿Cuál es un principio correcto antes de una cardioversión electiva?",
    opciones: [
        "Considerar anticoagulación previa adecuada o estrategia guiada por ecocardiografía transesofágica según duración y contexto",
        "Cardioversión inmediata sin considerar riesgo tromboembólico",
        "Suspender cualquier anticoagulación",
        "Realizar prueba de esfuerzo",
        "Administrar fibrinólisis"
    ],
    respuestaCorrecta: 0,
    explicacion: "En FA de duración prolongada o incierta, debe evaluarse el riesgo tromboembólico y utilizar una estrategia apropiada de anticoagulación y/o imagen para excluir trombo auricular antes de cardioversión electiva.",
    perlaENARM: "Antes de cardioversión electiva, la duración de la FA y el riesgo tromboembólico determinan la estrategia anticoagulante.",
    gpc: {
        mexico: "IMSS-014-08, Diagnóstico y Tratamiento de la Fibrilación Auricular.",
        internacional: "2024 ESC Guidelines for the Management of Atrial Fibrillation."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-059",
    especialidad: "Cardiología",
    tema: "Fibrilación auricular",
    subtema: "Anticoagulación",
    dificultad: "Muy alta",
    caso: "Varón de 78 años con FA no valvular tiene antecedente de hipertensión y diabetes mellitus. No presenta contraindicaciones para anticoagulación.",
    pregunta: "¿Cuál es el objetivo principal de la anticoagulación?",
    opciones: [
        "Reducir el riesgo de embolia sistémica y accidente cerebrovascular",
        "Convertir siempre la FA a ritmo sinusal",
        "Disminuir la frecuencia ventricular",
        "Prevenir exclusivamente insuficiencia cardiaca",
        "Reducir la presión arterial"
    ],
    respuestaCorrecta: 0,
    explicacion: "La anticoagulación en FA se utiliza para prevenir eventos tromboembólicos. La decisión se basa en la evaluación sistemática del riesgo tromboembólico y hemorrágico.",
    perlaENARM: "Anticoagular en FA previene tromboembolia; no es un tratamiento de control de frecuencia ni de ritmo.",
    gpc: {
        mexico: "IMSS-014-08, Diagnóstico y Tratamiento de la Fibrilación Auricular.",
        internacional: "2024 ESC Guidelines for the Management of Atrial Fibrillation."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-060",
    especialidad: "Cardiología",
    tema: "Fibrilación auricular",
    subtema: "FA y enfermedad renal",
    dificultad: "Muy alta",
    caso: "Mujer de 76 años con FA no valvular y enfermedad renal crónica avanzada requiere anticoagulación. Se considera utilizar un anticoagulante oral directo.",
    pregunta: "¿Cuál es el principio fundamental?",
    opciones: [
        "La selección y dosis deben ajustarse a función renal y características del paciente",
        "Todos los DOAC tienen la misma eliminación renal",
        "La función renal no influye en la dosis",
        "Los DOAC siempre están contraindicados en enfermedad renal",
        "Debe duplicarse la dosis cuando disminuye la TFGe"
    ],
    respuestaCorrecta: 0,
    explicacion: "La función renal es relevante para la selección y dosificación de los anticoagulantes orales directos. Debe utilizarse la ficha técnica y la guía correspondiente.",
    perlaENARM: "FA + ERC = revisar función renal antes de elegir y dosificar anticoagulante.",
    gpc: {
        mexico: "IMSS-014-08, Diagnóstico y Tratamiento de la Fibrilación Auricular.",
        internacional: "2024 ESC Guidelines for the Management of Atrial Fibrillation."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-061",
    especialidad: "Cardiología",
    tema: "Fibrilación auricular",
    subtema: "FA y síndrome coronario agudo",
    dificultad: "Muy alta",
    caso: "Paciente con FA anticoagulada presenta síndrome coronario agudo tratado con intervención coronaria percutánea y colocación de stent.",
    pregunta: "¿Cuál es el principal problema terapéutico que debe individualizarse?",
    opciones: [
        "Equilibrio entre prevención de tromboembolia, trombosis del stent y sangrado",
        "Suspender definitivamente todo tratamiento antitrombótico",
        "Utilizar únicamente aspirina durante varios años sin reevaluación",
        "Utilizar triple terapia indefinidamente en todos los pacientes",
        "Evitar cualquier intervención coronaria"
    ],
    respuestaCorrecta: 0,
    explicacion: "La coexistencia de FA y PCI requiere balancear anticoagulación para prevención de embolia y terapia antiplaquetaria para prevenir trombosis del stent, minimizando el tiempo de triple terapia cuando corresponda.",
    perlaENARM: "FA + PCI = individualizar anticoagulante + antiagregación; evitar triple terapia prolongada innecesaria.",
    gpc: {
        mexico: "IMSS-014-08, Diagnóstico y Tratamiento de la Fibrilación Auricular; GPC mexicana relacionada con SCA.",
        internacional: "2024 ESC Guidelines for Atrial Fibrillation; 2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for ACS."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-062",
    especialidad: "Cardiología",
    tema: "Fibrilación auricular",
    subtema: "FA y preexcitación",
    dificultad: "Muy alta",
    caso: "Varón de 29 años con síndrome de Wolff-Parkinson-White presenta fibrilación auricular con respuesta ventricular muy rápida y complejos QRS anchos e irregulares.",
    pregunta: "¿Cuál de las siguientes opciones debe evitarse para el control agudo de la respuesta ventricular?",
    opciones: [
        "Adenosina, verapamilo, diltiazem, digoxina y betabloqueadores",
        "Procainamida intravenosa en un paciente estable",
        "Cardioversión eléctrica si existe inestabilidad",
        "Manejo especializado de la vía accesoria",
        "Monitorización continua"
    ],
    respuestaCorrecta: 0,
    explicacion: "En FA preexcitada, los bloqueadores del nodo AV pueden favorecer la conducción por la vía accesoria y precipitar fibrilación ventricular. En pacientes estables pueden considerarse fármacos apropiados como procainamida según el contexto; la cardioversión es prioritaria si existe inestabilidad.",
    perlaENARM: "FA + WPW: NO bloquear el nodo AV.",
    gpc: {
        mexico: "IMSS-014-08, Diagnóstico y Tratamiento de la Fibrilación Auricular.",
        internacional: "2024 ESC Guidelines for the Management of Atrial Fibrillation."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-063",
    especialidad: "Cardiología",
    tema: "Fibrilación auricular",
    subtema: "Ablación con catéter",
    dificultad: "Alta",
    caso: "Mujer de 55 años con FA paroxística sintomática continúa con episodios frecuentes pese a tratamiento médico y desea una estrategia definitiva para reducir recurrencias.",
    pregunta: "¿Qué opción puede considerarse?",
    opciones: [
        "Ablación con catéter",
        "Marcapasos como tratamiento primario",
        "Fibrinólisis sistémica",
        "Anticoagulación como sustituto del control del ritmo",
        "Pericardiocentesis"
    ],
    respuestaCorrecta: 0,
    explicacion: "La ablación con catéter, habitualmente dirigida al aislamiento de venas pulmonares, es una estrategia establecida para pacientes seleccionados con FA sintomática.",
    perlaENARM: "La ablación es una estrategia de control del ritmo; la necesidad de anticoagulación se determina por riesgo tromboembólico, no por éxito aparente de la ablación.",
    gpc: {
        mexico: "IMSS-014-08, Diagnóstico y Tratamiento de la Fibrilación Auricular.",
        internacional: "2024 ESC Guidelines for the Management of Atrial Fibrillation."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-064",
    especialidad: "Cardiología",
    tema: "Fibrilación auricular",
    subtema: "Síndrome taquicardia-bradicardia",
    dificultad: "Muy alta",
    caso: "Mujer de 74 años presenta episodios de FA rápida alternados con pausas sinusales prolongadas después de terminarlas. Ha presentado síncope.",
    pregunta: "¿Qué trastorno debe sospecharse?",
    opciones: [
        "Síndrome de disfunción del nodo sinusal con patrón taquicardia-bradicardia",
        "Síndrome de Wolff-Parkinson-White",
        "Bloqueo de rama aislado",
        "Pericarditis",
        "Estenosis aórtica"
    ],
    respuestaCorrecta: 0,
    explicacion: "La alternancia de taquiarritmias auriculares y pausas sinusales significativas es característica del síndrome taquicardia-bradicardia dentro de la disfunción del nodo sinusal.",
    perlaENARM: "FA que termina y deja pausas prolongadas + síncope = pensar en disfunción del nodo sinusal.",
    gpc: {
        mexico: "IMSS-014-08, Diagnóstico y Tratamiento de la Fibrilación Auricular.",
        internacional: "2024 ESC Guidelines for Atrial Fibrillation."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-065",
    especialidad: "Cardiología",
    tema: "Fibrilación auricular",
    subtema: "FA y obesidad",
    dificultad: "Alta",
    caso: "Varón de 52 años con FA sintomática presenta obesidad grado III, apnea obstructiva del sueño, hipertensión mal controlada y sedentarismo.",
    pregunta: "¿Cuál es una intervención integral con potencial para mejorar el control de la FA?",
    opciones: [
        "Manejo de factores de riesgo incluyendo pérdida de peso, ejercicio y tratamiento de comorbilidades",
        "Anticoagulación como única intervención",
        "Suspender tratamiento antihipertensivo",
        "Evitar ejercicio indefinidamente",
        "Usar digoxina en todos los pacientes"
    ],
    respuestaCorrecta: 0,
    explicacion: "El enfoque contemporáneo de FA incluye modificación intensiva de factores de riesgo y comorbilidades, además del manejo de tromboembolia y síntomas.",
    perlaENARM: "AF-CARE comienza por comorbilidades y factores de riesgo; no todo se resuelve con antiarrítmicos.",
    gpc: {
        mexico: "IMSS-014-08, Diagnóstico y Tratamiento de la Fibrilación Auricular.",
        internacional: "2024 ESC Guidelines for the Management of Atrial Fibrillation."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-066",
    especialidad: "Cardiología",
    tema: "Arritmias",
    subtema: "Taquicardia supraventricular regular",
    dificultad: "Alta",
    caso: "Mujer de 28 años presenta palpitaciones súbitas. ECG: taquicardia regular de QRS estrecho a 190 lpm. Está estable. Las maniobras vagales no terminan la taquicardia.",
    pregunta: "¿Cuál es el siguiente tratamiento agudo apropiado?",
    opciones: [
        "Adenosina intravenosa en bolo rápido",
        "Digoxina oral",
        "Amiodarona oral crónica como primera medida",
        "Fibrinólisis",
        "Warfarina"
    ],
    respuestaCorrecta: 0,
    explicacion: "En una taquicardia supraventricular regular de QRS estrecho y estable que no responde a maniobras vagales, la adenosina intravenosa es una intervención aguda de primera línea en el contexto apropiado.",
    perlaENARM: "TSV regular estrecha estable: vagales → adenosina.",
    gpc: {
        mexico: "IMSS-535-12, Diagnóstico y Tratamiento de las Taquicardias Supraventriculares.",
        internacional: "Contemporary international guidance for supraventricular tachycardia."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-067",
    especialidad: "Cardiología",
    tema: "Arritmias",
    subtema: "Taquicardia supraventricular e inestabilidad",
    dificultad: "Muy alta",
    caso: "Varón de 43 años presenta taquicardia regular de QRS estrecho a 210 lpm con hipotensión, alteración del estado mental y dolor torácico.",
    pregunta: "¿Cuál es la conducta inmediata?",
    opciones: [
        "Cardioversión eléctrica sincronizada",
        "Adenosina oral",
        "Prueba de esfuerzo",
        "Digoxina ambulatoria",
        "Observación"
    ],
    respuestaCorrecta: 0,
    explicacion: "La taquicardia que causa inestabilidad hemodinámica requiere cardioversión eléctrica sincronizada inmediata.",
    perlaENARM: "La estabilidad hemodinámica determina la prioridad: inestable = cardioversión sincronizada.",
    gpc: {
        mexico: "IMSS-535-12, Diagnóstico y Tratamiento de las Taquicardias Supraventriculares.",
        internacional: "Contemporary international guidance for supraventricular tachycardia."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-068",
    especialidad: "Cardiología",
    tema: "Arritmias",
    subtema: "Taquicardia ventricular monomórfica",
    dificultad: "Muy alta",
    caso: "Paciente con antecedente de infarto presenta taquicardia regular de QRS ancho a 170 lpm. Se observan ondas P independientes y latidos de captura.",
    pregunta: "¿Cuál es el diagnóstico más probable?",
    opciones: [
        "Taquicardia ventricular monomórfica",
        "Taquicardia sinusal",
        "FA con aberrancia",
        "Flutter auricular con conducción variable",
        "Taquicardia auricular multifocal"
    ],
    respuestaCorrecta: 0,
    explicacion: "En un paciente con cardiopatía estructural, una taquicardia de QRS ancho regular debe considerarse TV hasta demostrar lo contrario. La disociación AV y los latidos de captura son hallazgos muy sugestivos.",
    perlaENARM: "QRS ancho regular + cardiopatía estructural = TV hasta demostrar lo contrario.",
    gpc: {
        mexico: "GPC mexicana relacionada con arritmias; complementar con catálogo IMSS.",
        internacional: "2022 ESC Guidelines for Ventricular Arrhythmias and Prevention of Sudden Cardiac Death."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-069",
    especialidad: "Cardiología",
    tema: "Arritmias",
    subtema: "Taquicardia ventricular sin pulso",
    dificultad: "Alta",
    caso: "Paciente monitorizado desarrolla taquicardia ventricular polimórfica y pierde el pulso.",
    pregunta: "¿Cuál es la intervención inmediata?",
    opciones: [
        "Desfibrilación no sincronizada y RCP",
        "Cardioversión sincronizada ambulatoria",
        "Adenosina oral",
        "Betabloqueador oral",
        "Esperar resolución espontánea"
    ],
    respuestaCorrecta: 0,
    explicacion: "La TV sin pulso es un ritmo desfibrilable. Se requiere RCP de alta calidad y desfibrilación no sincronizada lo antes posible.",
    perlaENARM: "TV sin pulso = paro desfibrilable.",
    gpc: {
        mexico: "GPC mexicana de reanimación cardiovascular aplicable.",
        internacional: "Contemporary ACLS/AHA recommendations for cardiac arrest."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-070",
    especialidad: "Cardiología",
    tema: "Arritmias",
    subtema: "Torsades de pointes",
    dificultad: "Muy alta",
    caso: "Mujer de 61 años recibe varios fármacos que prolongan el QT. Presenta síncope y episodios de taquicardia ventricular polimórfica con apariencia de torsión de las puntas. QTc de 560 ms.",
    pregunta: "¿Cuál es el tratamiento farmacológico inmediato más apropiado?",
    opciones: [
        "Sulfato de magnesio intravenoso",
        "Flecainida",
        "Verapamilo",
        "Digoxina",
        "Adenosina"
    ],
    respuestaCorrecta: 0,
    explicacion: "La torsades de pointes asociada a QT prolongado se trata con magnesio intravenoso, además de retirar fármacos causales y corregir alteraciones electrolíticas.",
    perlaENARM: "Torsades = magnesio IV aunque el magnesio sérico sea normal.",
    gpc: {
        mexico: "GPC mexicana relacionada con arritmias; complementar con catálogo IMSS.",
        internacional: "2022 ESC Guidelines for Ventricular Arrhythmias and Prevention of Sudden Cardiac Death."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-071",
    especialidad: "Cardiología",
    tema: "Arritmias",
    subtema: "Bradicardia sintomática",
    dificultad: "Alta",
    caso: "Paciente de 70 años presenta mareo, hipotensión y frecuencia cardiaca de 32 lpm. ECG: bloqueo AV de segundo grado con compromiso hemodinámico.",
    pregunta: "¿Cuál es la medida inicial farmacológica?",
    opciones: [
        "Atropina intravenosa mientras se prepara estimulación si es necesaria",
        "Verapamilo",
        "Adenosina",
        "Digoxina",
        "Flecainida"
    ],
    respuestaCorrecta: 0,
    explicacion: "La bradicardia sintomática con compromiso hemodinámico puede tratarse inicialmente con atropina en escenarios apropiados, pero los bloqueos de alto grado pueden requerir estimulación transcutánea o transvenosa.",
    perlaENARM: "Bradicardia inestable: atropina cuando corresponde y preparar pacing si la respuesta es insuficiente o el bloqueo es avanzado.",
    gpc: {
        mexico: "GPC mexicana relacionada con trastornos de conducción.",
        internacional: "Contemporary AHA/ACC guidance for bradycardia and conduction disorders."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-072",
    especialidad: "Cardiología",
    tema: "Arritmias",
    subtema: "Bloqueo AV Mobitz II",
    dificultad: "Muy alta",
    caso: "Varón de 68 años presenta síncope. ECG muestra ondas P regulares con QRS ocasionalmente bloqueados sin prolongación progresiva del PR. El patrón es recurrente.",
    pregunta: "¿Cuál es la interpretación más probable?",
    opciones: [
        "Bloqueo AV de segundo grado Mobitz II",
        "Wenckebach",
        "Bloqueo AV de primer grado",
        "FA",
        "Flutter auricular"
    ],
    respuestaCorrecta: 0,
    explicacion: "Mobitz II se caracteriza por ondas P no conducidas sin alargamiento progresivo del PR. Tiene mayor riesgo de progresar a bloqueo AV completo y suele requerir marcapasos en el contexto apropiado.",
    perlaENARM: "Mobitz II = PR constante antes de la P bloqueada + alto riesgo de bloqueo completo.",
    gpc: {
        mexico: "GPC mexicana relacionada con trastornos de conducción.",
        internacional: "Contemporary AHA/ACC guidance for bradycardia and conduction disorders."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-073",
    especialidad: "Cardiología",
    tema: "Insuficiencia cardiaca",
    subtema: "Perfil hemodinámico",
    dificultad: "Muy alta",
    caso: "Paciente con insuficiencia cardiaca aguda presenta presión arterial de 88/54 mmHg, extremidades frías, oliguria y congestión pulmonar importante.",
    pregunta: "¿Qué perfil hemodinámico describe mejor el cuadro?",
    opciones: [
        "Frío y húmedo",
        "Caliente y seco",
        "Caliente y húmedo",
        "Frío y seco",
        "Normotenso y seco"
    ],
    respuestaCorrecta: 0,
    explicacion: "La combinación de signos de hipoperfusión con congestión corresponde al perfil frío-húmedo, asociado con mayor gravedad y necesidad de manejo hemodinámico cuidadoso.",
    perlaENARM: "IC aguda: siempre valorar dos ejes: congestión y perfusión.",
    gpc: {
        mexico: "GPC-SS-219-24, Diagnóstico y tratamiento de la insuficiencia cardiaca aguda.",
        internacional: "2023 ESC Focused Update of the 2021 ESC Heart Failure Guidelines."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-074",
    especialidad: "Cardiología",
    tema: "Insuficiencia cardiaca",
    subtema: "Choque cardiogénico",
    dificultad: "Muy alta",
    caso: "Paciente con IAM extenso presenta hipotensión persistente, piel fría, oliguria, lactato elevado y signos de congestión pulmonar pese a tratamiento inicial.",
    pregunta: "¿Cuál es el diagnóstico sindromático más probable?",
    opciones: [
        "Choque cardiogénico",
        "Choque distributivo puro",
        "Choque hipovolémico",
        "Crisis vasovagal",
        "Pericarditis simple"
    ],
    respuestaCorrecta: 0,
    explicacion: "La hipotensión con hipoperfusión sistémica y evidencia de disfunción cardiaca posterior a un IAM es característica de choque cardiogénico.",
    perlaENARM: "Choque cardiogénico = hipotensión + hipoperfusión por falla primaria del corazón.",
    gpc: {
        mexico: "GPC-SS-219-24, Insuficiencia cardiaca aguda.",
        internacional: "2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for Acute Coronary Syndromes."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-075",
    especialidad: "Cardiología",
    tema: "Insuficiencia cardiaca",
    subtema: "Inotrópicos",
    dificultad: "Muy alta",
    caso: "Paciente con insuficiencia cardiaca aguda presenta choque cardiogénico con hipoperfusión persistente a pesar de medidas iniciales. Se encuentra en una unidad de cuidados intensivos.",
    pregunta: "¿Cuál es el principio para utilizar un inotrópico intravenoso?",
    opciones: [
        "Reservarlo para pacientes seleccionados con hipoperfusión grave y bajo gasto",
        "Administrarlo rutinariamente a toda insuficiencia cardiaca aguda",
        "Utilizarlo como sustituto permanente de tratamiento modificador",
        "Administrarlo a todo paciente hipertenso",
        "Usarlo para tratar edema leve"
    ],
    respuestaCorrecta: 0,
    explicacion: "Los inotrópicos intravenosos no se utilizan rutinariamente en insuficiencia cardiaca aguda debido a riesgos potenciales. Se reservan para situaciones seleccionadas de bajo gasto e hipoperfusión.",
    perlaENARM: "Inotrópicos = pacientes seleccionados con hipoperfusión; no tratamiento rutinario de IC aguda.",
    gpc: {
        mexico: "GPC-SS-219-24, Diagnóstico y tratamiento de la insuficiencia cardiaca aguda.",
        internacional: "2023 ESC Focused Update of the 2021 ESC Heart Failure Guidelines."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-076",
    especialidad: "Cardiología",
    tema: "Insuficiencia cardiaca",
    subtema: "Descompensación por AINE",
    dificultad: "Alta",
    caso: "Paciente con HFrEF estable desarrolla edema y aumento de peso después de iniciar un AINE por dolor musculoesquelético.",
    pregunta: "¿Cuál es la explicación más probable?",
    opciones: [
        "Retención de sodio y agua asociada con AINE",
        "Conversión inmediata a miocardiopatía hipertrófica",
        "Reducción de volumen intravascular",
        "Aumento del aclaramiento de diuréticos",
        "Efecto protector renal"
    ],
    respuestaCorrecta: 0,
    explicacion: "Los AINE pueden favorecer retención de sodio y agua, deterioro renal y disminución del efecto de diuréticos, precipitando descompensación de la insuficiencia cardiaca.",
    perlaENARM: "En IC, AINE = potencial retención hidrosalina + deterioro renal + resistencia diurética.",
    gpc: {
        mexico: "GPC-SS-219-24, Insuficiencia cardiaca aguda.",
        internacional: "2023 ESC Focused Update of the 2021 ESC Heart Failure Guidelines."
    },
    bibliografia: "Harrison's Principles of Internal Medicine."
},
{
    id: "CARD-077",
    especialidad: "Cardiología",
    tema: "Insuficiencia cardiaca",
    subtema: "Deficiencia de hierro",
    dificultad: "Alta",
    caso: "Mujer de 67 años con HFrEF presenta ferritina baja y saturación de transferrina disminuida, además de fatiga y limitación funcional.",
    pregunta: "¿Cuál es la estrategia que puede mejorar síntomas y reducir hospitalizaciones en pacientes seleccionados?",
    opciones: [
        "Hierro intravenoso",
        "Hierro oral como única opción obligatoria",
        "Fibrinólisis",
        "Digoxina en todos los pacientes",
        "Anticoagulación por la anemia"
    ],
    respuestaCorrecta: 0,
    explicacion: "La deficiencia de hierro es frecuente en insuficiencia cardiaca y el hierro intravenoso puede mejorar síntomas y capacidad funcional y, en determinados escenarios, reducir hospitalizaciones.",
    perlaENARM: "En IC, buscar y tratar deficiencia de hierro; el hierro IV tiene un papel establecido en pacientes seleccionados.",
    gpc: {
        mexico: "GPC-SS-219-24, Insuficiencia cardiaca aguda.",
        internacional: "2023 ESC Focused Update of the 2021 ESC Heart Failure Guidelines."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-078",
    especialidad: "Cardiología",
    tema: "Insuficiencia cardiaca",
    subtema: "Dispositivo de resincronización",
    dificultad: "Muy alta",
    caso: "Varón de 67 años con HFrEF presenta FEVI de 28%, ritmo sinusal, bloqueo completo de rama izquierda y QRS de 164 ms. Continúa sintomático pese a tratamiento médico óptimo.",
    pregunta: "¿Qué terapia puede estar indicada en un paciente seleccionado?",
    opciones: [
        "Terapia de resincronización cardiaca",
        "Verapamilo",
        "Flecainida",
        "Adenosina crónica",
        "Marcapasos auricular aislado"
    ],
    respuestaCorrecta: 0,
    explicacion: "La combinación de HFrEF sintomática, FEVI reducida, ritmo sinusal y QRS ampliamente prolongado con BRI es un escenario clásico para considerar CRT en pacientes apropiados.",
    perlaENARM: "HFrEF + FEVI reducida + BRI + QRS ≥150 ms = pensar en CRT.",
    gpc: {
        mexico: "GPC-SS-219-24, Insuficiencia cardiaca aguda.",
        internacional: "2023 ESC Focused Update of the 2021 ESC Heart Failure Guidelines."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-079",
    especialidad: "Cardiología",
    tema: "Insuficiencia cardiaca",
    subtema: "Desfibrilador implantable",
    dificultad: "Muy alta",
    caso: "Varón de 63 años con cardiomiopatía isquémica tiene FEVI de 28% seis meses después de un IAM, pese a tratamiento médico óptimo. No presenta causas reversibles y tiene expectativa de supervivencia significativa.",
    pregunta: "¿Qué estrategia debe evaluarse?",
    opciones: [
        "Desfibrilador automático implantable para prevención primaria de muerte súbita en el paciente apropiado",
        "Digoxina como sustituto del desfibrilador",
        "Marcapasos temporal permanente",
        "Fibrinólisis",
        "Pericardiocentesis"
    ],
    respuestaCorrecta: 0,
    explicacion: "En pacientes seleccionados con cardiomiopatía isquémica, FEVI persistentemente reducida pese a tratamiento óptimo y tiempo suficiente después del IAM/revascularización, el ICD puede reducir muerte súbita.",
    perlaENARM: "ICD primario requiere FEVI persistentemente reducida, tratamiento óptimo y tiempo adecuado después del evento agudo.",
    gpc: {
        mexico: "GPC-SS-219-24, Insuficiencia cardiaca aguda.",
        internacional: "2022 ESC Guidelines for Ventricular Arrhythmias and Prevention of Sudden Cardiac Death."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-080",
    especialidad: "Cardiología",
    tema: "Insuficiencia cardiaca",
    subtema: "Trasplante cardiaco",
    dificultad: "Muy alta",
    caso: "Paciente de 49 años con HFrEF avanzada presenta múltiples hospitalizaciones, intolerancia a tratamiento dirigido por hipotensión, deterioro renal progresivo y síntomas en reposo pese a tratamiento especializado.",
    pregunta: "¿Cuál es el siguiente paso conceptual más apropiado?",
    opciones: [
        "Evaluación en centro avanzado de insuficiencia cardiaca para terapias avanzadas",
        "Suspender todos los tratamientos",
        "Realizar prueba de esfuerzo máxima sin supervisión",
        "Iniciar verapamilo",
        "Administrar AINE"
    ],
    respuestaCorrecta: 0,
    explicacion: "Los pacientes con insuficiencia cardiaca avanzada deben ser evaluados en centros especializados para considerar trasplante, asistencia ventricular u otras terapias avanzadas según perfil clínico.",
    perlaENARM: "IC avanzada = referir a centro especializado antes de que el paciente llegue a una situación irreversible.",
    gpc: {
        mexico: "GPC-SS-219-24, Diagnóstico y tratamiento de la insuficiencia cardiaca aguda.",
        internacional: "2023 ESC Focused Update of the 2021 ESC Heart Failure Guidelines."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-081",
    especialidad: "Cardiología",
    tema: "Valvulopatías",
    subtema: "Estenosis mitral",
    dificultad: "Alta",
    caso: "Mujer de 42 años con antecedente de fiebre reumática presenta disnea progresiva. Ecocardiograma: área mitral de 1.0 cm², anatomía favorable y sin trombo auricular izquierdo.",
    pregunta: "¿Qué intervención puede ser apropiada si permanece sintomática?",
    opciones: [
        "Comisurotomía mitral percutánea con balón",
        "TAVI",
        "Reemplazo de válvula aórtica",
        "Pericardiocentesis",
        "Fibrinólisis"
    ],
    respuestaCorrecta: 0,
    explicacion: "En estenosis mitral reumática grave sintomática con anatomía favorable y ausencia de trombo auricular izquierdo o contraindicaciones relevantes, la comisurotomía mitral percutánea es una opción establecida.",
    perlaENARM: "Estenosis mitral reumática + anatomía favorable + sin trombo AI = pensar en valvuloplastia mitral percutánea.",
    gpc: {
        mexico: "IMSS-235-09, Diagnóstico y Tratamiento de la Patología de la Válvula Mitral.",
        internacional: "2025 ESC/EACTS Guidelines for the Management of Valvular Heart Disease."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-082",
    especialidad: "Cardiología",
    tema: "Valvulopatías",
    subtema: "Estenosis mitral y fibrilación auricular",
    dificultad: "Muy alta",
    caso: "Paciente con estenosis mitral reumática moderada-grave desarrolla fibrilación auricular. Presenta una aurícula izquierda muy dilatada.",
    pregunta: "¿Qué principio anticoagulante es especialmente relevante?",
    opciones: [
        "La estenosis mitral reumática significativa con FA requiere antagonista de vitamina K en lugar de DOAC",
        "Los DOAC son siempre superiores a warfarina",
        "No requiere anticoagulación",
        "La aspirina siempre sustituye a anticoagulación",
        "Solo debe anticoagularse si tiene insuficiencia cardiaca"
    ],
    respuestaCorrecta: 0,
    explicacion: "La FA asociada con estenosis mitral reumática significativa constituye un escenario en el que los antagonistas de vitamina K continúan siendo la estrategia anticoagulante recomendada; los DOAC no son equivalentes en este contexto.",
    perlaENARM: "FA + estenosis mitral reumática significativa = pensar en antagonista de vitamina K.",
    gpc: {
        mexico: "IMSS-014-08, Diagnóstico y Tratamiento de la Fibrilación Auricular; IMSS-235-09, Patología de la Válvula Mitral.",
        internacional: "2024 ESC Guidelines for Atrial Fibrillation; 2025 ESC/EACTS Valvular Heart Disease."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-083",
    especialidad: "Cardiología",
    tema: "Valvulopatías",
    subtema: "Insuficiencia mitral primaria",
    dificultad: "Muy alta",
    caso: "Varón de 61 años presenta insuficiencia mitral primaria grave por prolapso. Está asintomático, pero el ecocardiograma demuestra deterioro progresivo de la función ventricular izquierda.",
    pregunta: "¿Cuál es el principio de manejo?",
    opciones: [
        "Considerar intervención antes de que ocurra daño ventricular irreversible",
        "Esperar necesariamente hasta que aparezca edema pulmonar",
        "Anticoagular como tratamiento definitivo",
        "No realizar seguimiento ecocardiográfico",
        "Administrar fibrinólisis"
    ],
    respuestaCorrecta: 0,
    explicacion: "La insuficiencia mitral primaria grave requiere seguimiento estrecho y la intervención debe plantearse según síntomas, función ventricular, dimensiones ventriculares y otros criterios de gravedad.",
    perlaENARM: "En IM primaria grave, no esperar a la disfunción ventricular avanzada para intervenir.",
    gpc: {
        mexico: "IMSS-235-09, Diagnóstico y Tratamiento de la Patología de la Válvula Mitral.",
        internacional: "2025 ESC/EACTS Guidelines for the Management of Valvular Heart Disease."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-084",
    especialidad: "Cardiología",
    tema: "Valvulopatías",
    subtema: "Estenosis aórtica",
    dificultad: "Alta",
    caso: "Mujer de 76 años presenta disnea de esfuerzo. Ecocardiograma: área valvular aórtica 0.7 cm², velocidad máxima 4.3 m/s y gradiente medio 48 mmHg.",
    pregunta: "¿Cómo debe clasificarse la lesión?",
    opciones: [
        "Estenosis aórtica grave de alto gradiente",
        "Estenosis leve",
        "Estenosis moderada",
        "Insuficiencia aórtica aislada",
        "Estenosis mitral"
    ],
    respuestaCorrecta: 0,
    explicacion: "Una velocidad máxima >4 m/s y gradiente medio ≥40 mmHg, junto con área valvular ≤1 cm², son criterios clásicos de estenosis aórtica grave en el contexto apropiado.",
    perlaENARM: "EA grave de alto gradiente: Vmax ≥4 m/s y/o gradiente medio ≥40 mmHg con AVA ≤1 cm².",
    gpc: {
        mexico: "GPC mexicana relacionada con valvulopatía aórtica; complementar con catálogo IMSS/CENETEC.",
        internacional: "2025 ESC/EACTS Guidelines for the Management of Valvular Heart Disease."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-085",
    especialidad: "Cardiología",
    tema: "Valvulopatías",
    subtema: "Insuficiencia aórtica aguda",
    dificultad: "Muy alta",
    caso: "Varón de 58 años desarrolla edema pulmonar súbito. El ecocardiograma muestra insuficiencia aórtica aguda grave asociada con endocarditis infecciosa.",
    pregunta: "¿Cuál es el principio terapéutico?",
    opciones: [
        "Evaluación quirúrgica urgente",
        "Tratamiento exclusivo con diurético durante meses",
        "Anticoagulación como tratamiento de la insuficiencia",
        "Observación ambulatoria",
        "Prueba de esfuerzo"
    ],
    respuestaCorrecta: 0,
    explicacion: "La insuficiencia aórtica aguda grave puede provocar deterioro hemodinámico rápido y, particularmente cuando se asocia con endocarditis, requiere evaluación quirúrgica urgente.",
    perlaENARM: "IAo aguda grave + edema pulmonar = emergencia estructural; el tratamiento médico no sustituye la corrección definitiva.",
    gpc: {
        mexico: "GPC mexicana relacionada con valvulopatía aórtica; complementar con CENETEC/IMSS.",
        internacional: "2025 ESC/EACTS Guidelines for Valvular Heart Disease."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-086",
    especialidad: "Cardiología",
    tema: "Valvulopatías",
    subtema: "Estenosis aórtica y síncope",
    dificultad: "Alta",
    caso: "Varón de 69 años con estenosis aórtica grave presenta síncope de esfuerzo y disnea progresiva.",
    pregunta: "¿Qué implica la aparición de síntomas en este contexto?",
    opciones: [
        "Indica una enfermedad con peor pronóstico y obliga a valorar intervención valvular",
        "Es un hallazgo benigno",
        "Descarta estenosis grave",
        "Indica pericarditis",
        "Obliga únicamente a iniciar anticoagulación"
    ],
    respuestaCorrecta: 0,
    explicacion: "La estenosis aórtica grave sintomática tiene un pronóstico desfavorable con manejo conservador y debe valorarse intervención valvular.",
    perlaENARM: "EA grave sintomática = no basta tratamiento médico; valorar intervención.",
    gpc: {
        mexico: "GPC mexicana relacionada con valvulopatía aórtica; complementar con CENETEC/IMSS.",
        internacional: "2025 ESC/EACTS Guidelines for the Management of Valvular Heart Disease."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-087",
    especialidad: "Cardiología",
    tema: "Valvulopatías",
    subtema: "Prolapso mitral",
    dificultad: "Alta",
    caso: "Mujer de 39 años presenta palpitaciones y síncope. El ecocardiograma muestra prolapso de la válvula mitral y arritmias ventriculares frecuentes.",
    pregunta: "¿Cuál es el aspecto que debe evaluarse cuidadosamente?",
    opciones: [
        "Riesgo arrítmico y presencia de fibrosis o características de prolapso mitral arritmogénico",
        "Solo el tamaño de la aurícula derecha",
        "Presencia de hipertensión portal",
        "Únicamente la función tiroidea",
        "Descartar siempre tuberculosis"
    ],
    respuestaCorrecta: 0,
    explicacion: "Aunque la mayoría de los pacientes con prolapso mitral tienen buen pronóstico, determinados fenotipos se asocian con arritmias ventriculares y muerte súbita. El síncope y las arritmias requieren evaluación especializada.",
    perlaENARM: "Prolapso mitral + síncope + arritmias ventriculares = evaluar fenotipo arrítmico.",
    gpc: {
        mexico: "IMSS-235-09, Diagnóstico y Tratamiento de la Patología de la Válvula Mitral.",
        internacional: "2025 ESC/EACTS Guidelines for Valvular Heart Disease."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-088",
    especialidad: "Cardiología",
    tema: "Valvulopatías",
    subtema: "Hipertensión pulmonar secundaria a valvulopatía",
    dificultad: "Muy alta",
    caso: "Paciente con estenosis mitral grave presenta disnea progresiva y presión sistólica pulmonar elevada.",
    pregunta: "¿Cuál es el mecanismo fisiopatológico predominante?",
    opciones: [
        "Aumento crónico de la presión auricular izquierda con transmisión retrógrada a la circulación pulmonar",
        "Disminución primaria del retorno venoso",
        "Obstrucción de la arteria pulmonar por trombo en todos los casos",
        "Hipovolemia crónica",
        "Disfunción aislada del nodo sinusal"
    ],
    respuestaCorrecta: 0,
    explicacion: "La estenosis mitral eleva la presión auricular izquierda, que se transmite hacia las venas y capilares pulmonares, generando hipertensión pulmonar poscapilar y, con el tiempo, cambios vasculares pulmonares.",
    perlaENARM: "Valvulopatía izquierda → presión AI elevada → hipertensión pulmonar poscapilar.",
    gpc: {
        mexico: "IMSS-235-09, Diagnóstico y Tratamiento de la Patología de la Válvula Mitral.",
        internacional: "2025 ESC/EACTS Guidelines for Valvular Heart Disease."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-089",
    especialidad: "Cardiología",
    tema: "Endocarditis infecciosa",
    subtema: "Hemocultivos",
    dificultad: "Alta",
    caso: "Paciente con fiebre persistente, nuevo soplo y sospecha clínica elevada de endocarditis infecciosa se encuentra hemodinámicamente estable y no ha recibido antibióticos.",
    pregunta: "¿Qué debe realizarse antes de iniciar antibióticos siempre que sea posible?",
    opciones: [
        "Obtener múltiples juegos de hemocultivos",
        "Administrar antibióticos y después obtener un único cultivo",
        "Realizar prueba de esfuerzo",
        "Realizar fibrinólisis",
        "Solicitar únicamente EGO"
    ],
    respuestaCorrecta: 0,
    explicacion: "En la sospecha de endocarditis, los hemocultivos deben obtenerse antes de antibióticos siempre que el estado clínico permita esperar la toma de muestras.",
    perlaENARM: "Endocarditis sospechada: cultivos antes de antibióticos, salvo necesidad inmediata por inestabilidad.",
    gpc: {
        mexico: "GPC mexicana relacionada con endocarditis infecciosa; complementar con catálogo IMSS/CENETEC.",
        internacional: "2023 ESC Guidelines for the Management of Endocarditis."
    },
    bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
},
{
    id: "CARD-090",
    especialidad: "Cardiología",
    tema: "Endocarditis infecciosa",
    subtema: "Ecocardiografía",
    dificultad: "Muy alta",
    caso: "Varón de 54 años con bacteriemia por Staphylococcus aureus tiene fiebre persistente. El ecocardiograma transtorácico inicial no demuestra vegetaciones, pero la sospecha clínica continúa siendo elevada.",
    pregunta: "¿Cuál es el siguiente estudio más apropiado?",
    opciones: [
        "Ecocardiograma transesofágico",
        "Prueba de esfuerzo",
        "Holter",
        "Radiografía simple como único estudio",
        "Angiotomografía coronaria"
    ],
    respuestaCorrecta: 0,
    explicacion: "El ecocardiograma transesofágico tiene mayor sensibilidad que el transtorácico para detectar vegetaciones, abscesos y complicaciones perivalvulares, especialmente cuando la sospecha clínica es alta.",
    perlaENARM: "ETT negativo no excluye endocarditis; si la sospecha permanece alta, considerar ETE.",
    gpc: {
        mexico: "GPC mexicana relacionada con endocarditis infecciosa; complementar con catálogo IMSS/CENETEC.",
        internacional: "2023 ESC Guidelines for the Management of Endocarditis."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-091",
    especialidad: "Cardiología",
    tema: "Endocarditis infecciosa",
    subtema: "Indicación quirúrgica",
    dificultad: "Muy alta",
    caso: "Paciente con endocarditis infecciosa de válvula mitral presenta edema pulmonar agudo debido a insuficiencia mitral grave.",
    pregunta: "¿Cuál es el principio de manejo?",
    opciones: [
        "Evaluación quirúrgica urgente por insuficiencia valvular que causa insuficiencia cardiaca",
        "Esperar seis semanas después de terminar antibióticos en todos los casos",
        "Suspender antibióticos",
        "Realizar prueba de esfuerzo",
        "Tratar únicamente con anticoagulación"
    ],
    respuestaCorrecta: 0,
    explicacion: "La insuficiencia cardiaca causada por disfunción valvular aguda en endocarditis constituye una de las principales indicaciones para cirugía urgente o emergente según la gravedad y anatomía.",
    perlaENARM: "Endocarditis + insuficiencia cardiaca por lesión valvular = pensar en cirugía temprana.",
    gpc: {
        mexico: "GPC mexicana relacionada con endocarditis infecciosa; complementar con catálogo IMSS/CENETEC.",
        internacional: "2023 ESC Guidelines for the Management of Endocarditis."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-092",
    especialidad: "Cardiología",
    tema: "Endocarditis infecciosa",
    subtema: "Embolización",
    dificultad: "Muy alta",
    caso: "Paciente con endocarditis de válvula mitral presenta un evento cerebrovascular embólico. El ecocardiograma muestra vegetación grande y móvil.",
    pregunta: "¿Qué factor incrementa especialmente la preocupación por embolización?",
    opciones: [
        "Vegetación grande y móvil, especialmente en válvula mitral",
        "Vegetación pequeña y estable exclusivamente",
        "Ausencia completa de bacteriemia",
        "Hipertensión arterial aislada",
        "Hipotiroidismo"
    ],
    respuestaCorrecta: 0,
    explicacion: "El tamaño y movilidad de la vegetación, su localización mitral y la presencia de embolización previa son factores asociados con mayor riesgo embólico.",
    perlaENARM: "Vegetación grande + móvil + mitral + embolización previa = alto riesgo embólico.",
    gpc: {
        mexico: "GPC mexicana relacionada con endocarditis infecciosa; complementar con catálogo IMSS/CENETEC.",
        internacional: "2023 ESC Guidelines for the Management of Endocarditis."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-093",
    especialidad: "Cardiología",
    tema: "Endocarditis infecciosa",
    subtema: "Prótesis valvular",
    dificultad: "Muy alta",
    caso: "Paciente con prótesis valvular presenta fiebre, bacteriemia y sospecha de endocarditis. El ecocardiograma transtorácico no es concluyente.",
    pregunta: "¿Qué modalidad tiene especial importancia?",
    opciones: [
        "Ecocardiografía transesofágica",
        "Prueba de esfuerzo",
        "Holter",
        "Espirometría",
        "Radiografía de abdomen"
    ],
    respuestaCorrecta: 0,
    explicacion: "La endocarditis de prótesis valvular puede ser difícil de diagnosticar mediante ETT. El ETE tiene mayor utilidad para evaluar vegetaciones y complicaciones periprotésicas.",
    perlaENARM: "Prótesis valvular + sospecha de endocarditis = ETE tiene papel central.",
    gpc: {
        mexico: "GPC mexicana relacionada con endocarditis infecciosa; complementar con catálogo IMSS/CENETEC.",
        internacional: "2023 ESC Guidelines for the Management of Endocarditis."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-094",
    especialidad: "Cardiología",
    tema: "Endocarditis infecciosa",
    subtema: "Profilaxis antibiótica",
    dificultad: "Muy alta",
    caso: "Paciente con antecedente de endocarditis infecciosa requiere un procedimiento odontológico que implica manipulación gingival.",
    pregunta: "¿Qué principio debe considerarse?",
    opciones: [
        "Los pacientes de alto riesgo de endocarditis pueden ser candidatos a profilaxis antibiótica para determinados procedimientos odontológicos",
        "Todo paciente debe recibir profilaxis antes de cualquier procedimiento dental",
        "La profilaxis solo está indicada en hipertensión",
        "La profilaxis sustituye a la higiene oral",
        "La profilaxis es obligatoria para toda radiografía dental"
    ],
    respuestaCorrecta: 0,
    explicacion: "Las guías reservan la profilaxis antibiótica para determinados procedimientos y pacientes con alto riesgo de endocarditis, incluyendo antecedentes de endocarditis previa.",
    perlaENARM: "Profilaxis de endocarditis no es universal: se reserva para pacientes de alto riesgo y procedimientos seleccionados.",
    gpc: {
        mexico: "GPC mexicana relacionada con prevención de endocarditis infecciosa; complementar con CENETEC/IMSS.",
        internacional: "2023 ESC Guidelines for the Management of Endocarditis."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-095",
    especialidad: "Cardiología",
    tema: "Enfermedad aórtica",
    subtema: "Síndrome aórtico agudo",
    dificultad: "Muy alta",
    caso: "Varón de 65 años presenta dolor torácico súbito de máxima intensidad desde el inicio. Tiene diferencia de presión arterial entre ambos brazos y déficit neurológico transitorio.",
    pregunta: "¿Qué diagnóstico debe priorizarse?",
    opciones: [
        "Síndrome aórtico agudo",
        "Angina estable",
        "Pericarditis viral no complicada",
        "Reflujo gastroesofágico",
        "Taquicardia sinusal"
    ],
    respuestaCorrecta: 0,
    explicacion: "El dolor de inicio súbito máximo desde el comienzo, la asimetría de pulsos o presión y los déficits neurológicos son señales de alarma para síndrome aórtico agudo.",
    perlaENARM: "Dolor máximo desde el inicio + asimetría de pulsos/presión = descartar disección.",
    gpc: {
        mexico: "IMSS-414-10, Diagnóstico y Tratamiento de la Disección Aguda de Aorta Torácica Descendente.",
        internacional: "2024 ESC Guidelines for the Management of Peripheral Arterial and Aortic Diseases."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-096",
    especialidad: "Cardiología",
    tema: "Enfermedad aórtica",
    subtema: "Aneurisma de aorta abdominal",
    dificultad: "Alta",
    caso: "Varón de 73 años, fumador, presenta aneurisma de aorta abdominal conocido que ha aumentado de tamaño en controles sucesivos.",
    pregunta: "¿Qué factor es fundamental para determinar la necesidad de reparación?",
    opciones: [
        "Diámetro, crecimiento, síntomas y anatomía del aneurisma",
        "Solo la edad del paciente",
        "Únicamente la presión arterial de ese día",
        "Nivel de troponina",
        "Intervalo PR"
    ],
    respuestaCorrecta: 0,
    explicacion: "La decisión de reparación de un aneurisma de aorta abdominal depende de tamaño, velocidad de crecimiento, síntomas, anatomía y riesgo quirúrgico/endovascular.",
    perlaENARM: "AAA: no decidir por diámetro aislado; integrar tamaño, crecimiento, síntomas y anatomía.",
    gpc: {
        mexico: "GPC mexicana relacionada con aneurisma de aorta abdominal; complementar con catálogo CENETEC/IMSS.",
        internacional: "2024 ESC Guidelines for the Management of Peripheral Arterial and Aortic Diseases."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-097",
    especialidad: "Cardiología",
    tema: "Enfermedad aórtica",
    subtema: "Síndrome de Marfan",
    dificultad: "Muy alta",
    caso: "Paciente de 27 años con fenotipo compatible con síndrome de Marfan presenta dilatación progresiva de la raíz aórtica.",
    pregunta: "¿Cuál es una complicación cardiovascular especialmente importante que debe vigilarse?",
    opciones: [
        "Aneurisma y disección de la raíz aórtica",
        "Estenosis mitral reumática",
        "Pericarditis purulenta",
        "Trombosis de prótesis mecánica",
        "Estenosis pulmonar adquirida"
    ],
    respuestaCorrecta: 0,
    explicacion: "Las enfermedades hereditarias del tejido conectivo como Marfan se asocian con dilatación de la raíz aórtica y riesgo de disección.",
    perlaENARM: "Marfan + dilatación de raíz aórtica = seguimiento especializado y prevención de disección.",
    gpc: {
        mexico: "GPC mexicana relacionada con enfermedad aórtica; complementar con CENETEC/IMSS.",
        internacional: "2024 ESC Guidelines for the Management of Peripheral Arterial and Aortic Diseases."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-098",
    especialidad: "Cardiología",
    tema: "Enfermedad aórtica",
    subtema: "Hematoma intramural",
    dificultad: "Muy alta",
    caso: "Paciente de 71 años con dolor torácico súbito presenta angiotomografía que demuestra engrosamiento crescentiforme de la pared aórtica sin visualizar una falsa luz típica.",
    pregunta: "¿Qué entidad debe considerarse?",
    opciones: [
        "Hematoma intramural aórtico",
        "Pericarditis simple",
        "Estenosis aórtica",
        "Miocardiopatía hipertrófica",
        "Trombosis auricular"
    ],
    respuestaCorrecta: 0,
    explicacion: "El hematoma intramural forma parte del síndrome aórtico agudo y se caracteriza por sangrado dentro de la pared aórtica sin una falsa luz clásica visible.",
    perlaENARM: "Síndrome aórtico agudo incluye disección, hematoma intramural y úlcera aterosclerótica penetrante.",
    gpc: {
        mexico: "IMSS-414-10, Diagnóstico y Tratamiento de la Disección Aguda de Aorta Torácica Descendente.",
        internacional: "2024 ESC Guidelines for the Management of Peripheral Arterial and Aortic Diseases."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-099",
    especialidad: "Cardiología",
    tema: "Enfermedad aórtica",
    subtema: "Aneurisma de aorta torácica",
    dificultad: "Muy alta",
    caso: "Mujer de 66 años presenta aneurisma de aorta torácica descendente con crecimiento progresivo. Se encuentra asintomática y tiene anatomía favorable para tratamiento endovascular.",
    pregunta: "¿Qué opción puede considerarse en pacientes seleccionados?",
    opciones: [
        "Reparación endovascular torácica",
        "Fibrinólisis",
        "Anticoagulación como tratamiento definitivo",
        "Pericardiocentesis",
        "Prueba de esfuerzo"
    ],
    respuestaCorrecta: 0,
    explicacion: "La reparación endovascular torácica puede ser una estrategia apropiada en pacientes seleccionados con enfermedad de aorta torácica descendente, dependiendo de anatomía, tamaño, crecimiento y riesgo.",
    perlaENARM: "TEVAR es una opción fundamental para determinadas enfermedades de la aorta torácica descendente.",
    gpc: {
        mexico: "IMSS-414-10, Diagnóstico y Tratamiento de la Disección Aguda de Aorta Torácica Descendente.",
        internacional: "2024 ESC Guidelines for the Management of Peripheral Arterial and Aortic Diseases."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-100",
    especialidad: "Cardiología",
    tema: "Cardiología integrativa",
    subtema: "Prevención cardiovascular secundaria",
    dificultad: "Muy alta",
    caso: "Varón de 62 años con antecedente de IAM y revascularización coronaria continúa fumando. Recibe estatina de alta intensidad, pero LDL-C permanece por encima del objetivo recomendado para prevención secundaria de muy alto riesgo.",
    pregunta: "¿Cuál es la estrategia integral más apropiada?",
    opciones: [
        "Intensificar tratamiento hipolipemiante y realizar intervención intensiva sobre tabaquismo y factores de riesgo",
        "Suspender la estatina porque ya tuvo el IAM",
        "Utilizar únicamente aspirina y no tratar el LDL",
        "Esperar a que aparezca otro evento cardiovascular",
        "Indicar fibrinólisis preventiva"
    ],
    respuestaCorrecta: 0,
    explicacion: "La prevención secundaria después de un IAM requiere tratamiento intensivo de LDL-C, abandono del tabaco, control de presión arterial y diabetes, actividad física, adherencia farmacológica y rehabilitación cardiaca cuando corresponda. Si el LDL permanece por encima del objetivo pese a estatina máxima tolerada, deben añadirse terapias no estatínicas según el riesgo y la guía aplicable.",
    perlaENARM: "Después de un IAM, prevención secundaria es un paquete integral: LDL + tabaco + PA + diabetes + ejercicio + adherencia + rehabilitación.",
    gpc: {
        mexico: "GPC mexicana relacionada con cardiopatía isquémica y prevención cardiovascular secundaria; complementar con catálogo IMSS/CENETEC.",
        internacional: "2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for Acute Coronary Syndromes; 2024 ESC Guidelines for Chronic Coronary Syndromes."
    },
    bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
},
{
    id: "CARD-101",
    especialidad: "Cardiología",
    tema: "Electrocardiografía",
    subtema: "IAM posterior",
    dificultad: "Muy alta",
    caso: "Varón de 59 años con dolor torácico intenso y diaforesis. El ECG muestra infradesnivel de ST de 1.5 mm en V1-V3 con ondas R altas y ondas T positivas. En las derivaciones posteriores V7-V9 se observa elevación del ST de 1 mm.",
    pregunta: "¿Cuál es la interpretación más apropiada del electrocardiograma?",
    opciones: [
        "Isquemia subendocárdica anterior aislada",
        "Infarto agudo de miocardio posterior",
        "Pericarditis aguda",
        "Síndrome de Wellens",
        "Hipertrofia ventricular derecha"
    ],
    respuestaCorrecta: 1,
    explicacion: "El IAM posterior puede manifestarse en las derivaciones anteriores como infradesnivel del ST, ondas R prominentes y ondas T positivas. La elevación del ST en V7-V9 confirma el compromiso posterior.",
    perlaENARM: "Infradesnivel ST en V1-V3 + R altas debe hacer buscar un IAM posterior con V7-V9.",
    gpc: {
        mexico: "GPC-IMSS-191-18, Diagnóstico y Tratamiento del Síndrome Coronario Agudo sin Elevación del Segmento ST.",
        internacional: "2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for Acute Coronary Syndromes."
    },
    bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
},
{
    id: "CARD-102",
    especialidad: "Cardiología",
    tema: "Electrocardiografía",
    subtema: "Síndrome de Wellens",
    dificultad: "Muy alta",
    caso: "Mujer de 48 años con episodios recurrentes de dolor torácico. Actualmente está asintomática. El ECG muestra inversión profunda y simétrica de las ondas T en V2-V4, con enzimas cardiacas normales.",
    pregunta: "¿Cuál es la conducta más apropiada?",
    opciones: [
        "Prueba de esfuerzo ambulatoria antes de cualquier intervención",
        "Alta con tratamiento antianginoso exclusivamente",
        "Evaluación coronaria invasiva por sospecha de lesión crítica proximal de la DA",
        "Administrar fibrinólisis inmediatamente",
        "Diagnosticar pericarditis"
    ],
    respuestaCorrecta: 2,
    explicacion: "El patrón de Wellens identifica una población con alto riesgo de estenosis crítica de la arteria descendente anterior. Una prueba de esfuerzo puede ser peligrosa y no sustituye la evaluación coronaria apropiada.",
    perlaENARM: "Wellens = paciente frecuentemente asintomático + cambios de T en V2-V4 + alto riesgo de lesión proximal de DA.",
    gpc: {
        mexico: "GPC-IMSS-191-18, Diagnóstico y Tratamiento del Síndrome Coronario Agudo sin Elevación del Segmento ST.",
        internacional: "2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for Acute Coronary Syndromes."
    },
    bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
},
{
    id: "CARD-103",
    especialidad: "Cardiología",
    tema: "Electrocardiografía",
    subtema: "Patrón de De Winter",
    dificultad: "Muy alta",
    caso: "Varón de 55 años con dolor torácico persistente. El ECG muestra infradesnivel ascendente del ST en V2-V6 que continúa con ondas T altas y simétricas, sin elevación convencional del ST.",
    pregunta: "¿Cuál es la interpretación más apropiada?",
    opciones: [
        "Patrón benigno de repolarización precoz",
        "Patrón de De Winter asociado con oclusión coronaria aguda",
        "Pericarditis",
        "Hipopotasemia",
        "Bloqueo de rama derecha"
    ],
    respuestaCorrecta: 1,
    explicacion: "El patrón de De Winter es un patrón electrocardiográfico de alto riesgo asociado a oclusión de la arteria descendente anterior y debe tratarse como una emergencia de reperfusión.",
    perlaENARM: "De Winter puede ser un equivalente de oclusión coronaria aun sin elevación clásica del ST.",
    gpc: {
        mexico: "GPC-IMSS-191-18, Síndrome Coronario Agudo sin Elevación del ST.",
        internacional: "2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for Acute Coronary Syndromes."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-104",
    especialidad: "Cardiología",
    tema: "Electrocardiografía",
    subtema: "Síndrome de Brugada",
    dificultad: "Muy alta",
    caso: "Varón de 34 años con síncope nocturno. El ECG muestra elevación del ST de morfología tipo 1 en V1-V2 colocadas en posiciones altas, con patrón de bloqueo de rama derecha aparente.",
    pregunta: "¿Cuál es el diagnóstico electrocardiográfico más probable?",
    opciones: [
        "Síndrome de Brugada",
        "Síndrome de QT largo",
        "Displasia arritmogénica del ventrículo derecho",
        "Síndrome de Wolff-Parkinson-White",
        "Pericarditis aguda"
    ],
    respuestaCorrecta: 0,
    explicacion: "La elevación cóncava o convexa del ST con morfología tipo 1 en las derivaciones derechas precordiales altas es característica del patrón tipo 1 de Brugada en el contexto clínico apropiado.",
    perlaENARM: "Brugada: patrón tipo 1 en V1-V2, especialmente con colocación alta, + síncope o arritmia ventricular debe generar evaluación especializada.",
    gpc: {
        mexico: "No se identificó una GPC mexicana específica para síndrome de Brugada en el catálogo IMSS consultado.",
        internacional: "2022 ESC Guidelines for Ventricular Arrhythmias and Prevention of Sudden Cardiac Death."
    },
    bibliografia: "Braunwald's Heart Disease; ESC Guidelines for Ventricular Arrhythmias."
},
{
    id: "CARD-105",
    especialidad: "Cardiología",
    tema: "Electrocardiografía",
    subtema: "Hipercalemia",
    dificultad: "Alta",
    caso: "Paciente con enfermedad renal avanzada presenta debilidad muscular. Potasio sérico de 7.2 mEq/L. ECG: ondas T altas y picudas, posteriormente ensanchamiento progresivo del QRS.",
    pregunta: "¿Cuál es la intervención inmediata prioritaria?",
    opciones: [
        "Furosemida oral",
        "Gluconato de calcio intravenoso",
        "Resina de intercambio como única medida",
        "Bicarbonato oral",
        "Restricción de potasio y observación"
    ],
    respuestaCorrecta: 1,
    explicacion: "Ante hipercalemia grave con alteraciones electrocardiográficas, el calcio intravenoso estabiliza la membrana miocárdica y debe administrarse de inmediato mientras se instauran medidas para desplazar y eliminar potasio.",
    perlaENARM: "En hipercalemia con cambios ECG, primero estabiliza membrana con calcio; después desplaza/elimina K.",
    gpc: {
        mexico: "No se identificó una GPC mexicana específica de hipercalemia cardiotóxica en el catálogo cardiológico consultado.",
        internacional: "ESC/European and contemporary emergency management recommendations for acute hyperkalaemia."
    },
    bibliografia: "Harrison's Principles of Internal Medicine; Braunwald's Heart Disease."
},
{
    id: "CARD-106",
    especialidad: "Cardiología",
    tema: "Electrocardiografía",
    subtema: "Hipopotasemia",
    dificultad: "Alta",
    caso: "Mujer de 72 años en tratamiento con diurético presenta debilidad. Potasio 2.5 mEq/L. ECG con ondas U prominentes, aplanamiento de la onda T y prolongación aparente del intervalo QT.",
    pregunta: "¿Qué alteración explica mejor el ECG?",
    opciones: [
        "Hipercalemia",
        "Hipopotasemia",
        "Hipercalcemia",
        "Hipomagnesemia aislada",
        "Hiponatremia"
    ],
    respuestaCorrecta: 1,
    explicacion: "La hipopotasemia produce aplanamiento de T, ondas U prominentes y aumento de la repolarización aparente, favoreciendo arritmias.",
    perlaENARM: "Onda U prominente + T aplanada en paciente con diurético = hipopotasemia hasta demostrar lo contrario.",
    gpc: {
        mexico: "No se identificó una GPC mexicana específica para alteraciones electrocardiográficas por hipopotasemia.",
        internacional: "ESC Guidelines on cardiovascular emergencies and contemporary electrolyte management."
    },
    bibliografia: "Harrison's Principles of Internal Medicine."
},
{
    id: "CARD-107",
    especialidad: "Cardiología",
    tema: "Pericardio",
    subtema: "Pericarditis versus IAM",
    dificultad: "Alta",
    caso: "Varón de 28 años con dolor torácico pleurítico que mejora al sentarse e inclinarse hacia delante. ECG con elevación difusa del ST y depresión del PR, sin cambios recíprocos focales.",
    pregunta: "¿Cuál es el diagnóstico más probable?",
    opciones: [
        "IAMCEST anterior",
        "Pericarditis aguda",
        "Angina vasoespástica",
        "Embolia pulmonar",
        "Miocarditis fulminante aislada"
    ],
    respuestaCorrecta: 1,
    explicacion: "El dolor pleurítico y posicional, junto con elevación difusa del ST y depresión del PR, es característico de pericarditis aguda.",
    perlaENARM: "Pericarditis: dolor pleurítico/posicional + ST difuso + PR descendido.",
    gpc: {
        mexico: "IMSS-463-11, Diagnóstico y Tratamiento de Pericarditis en el Adulto.",
        internacional: "2025 ESC Guidelines for Myocarditis and Pericarditis."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-108",
    especialidad: "Cardiología",
    tema: "Pericardio",
    subtema: "Taponamiento cardiaco",
    dificultad: "Muy alta",
    caso: "Paciente con cáncer metastásico presenta hipotensión, ingurgitación yugular y ruidos cardiacos velados. El ecocardiograma muestra derrame pericárdico con colapso diastólico de cavidades derechas.",
    pregunta: "¿Cuál es la intervención definitiva inmediata si existe inestabilidad hemodinámica?",
    opciones: [
        "Diuresis intensiva",
        "Pericardiocentesis urgente",
        "Betabloqueador intravenoso",
        "Trombólisis sistémica",
        "Vasodilatador intravenoso"
    ],
    respuestaCorrecta: 1,
    explicacion: "El taponamiento cardiaco con compromiso hemodinámico requiere drenaje urgente del espacio pericárdico, habitualmente mediante pericardiocentesis guiada por imagen cuando es apropiado.",
    perlaENARM: "Taponamiento + choque = drenaje pericárdico urgente.",
    gpc: {
        mexico: "IMSS-463-11, Diagnóstico y Tratamiento de Pericarditis en el Adulto.",
        internacional: "2025 ESC Guidelines for Myocarditis and Pericarditis."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-109",
    especialidad: "Cardiología",
    tema: "Pericardio",
    subtema: "Pericarditis constrictiva",
    dificultad: "Muy alta",
    caso: "Varón de 63 años con antecedente de tuberculosis tratada presenta edema, ascitis, hepatomegalia e ingurgitación yugular. El ecocardiograma muestra signos de interdependencia ventricular y la RM evidencia engrosamiento pericárdico.",
    pregunta: "¿Cuál es el diagnóstico más probable?",
    opciones: [
        "Miocardiopatía dilatada",
        "Pericarditis constrictiva",
        "Insuficiencia mitral grave",
        "Taponamiento cardiaco agudo",
        "IAM inferior"
    ],
    respuestaCorrecta: 1,
    explicacion: "La insuficiencia cardiaca predominantemente derecha, la interdependencia ventricular y el engrosamiento pericárdico en el contexto adecuado son compatibles con pericarditis constrictiva.",
    perlaENARM: "Constrictiva: falla derecha, interdependencia ventricular y fisiología de llenado ventricular disociada de la respiración.",
    gpc: {
        mexico: "IMSS-463-11, Diagnóstico y Tratamiento de Pericarditis en el Adulto.",
        internacional: "2025 ESC Guidelines for Myocarditis and Pericarditis."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-110",
    especialidad: "Cardiología",
    tema: "Complicaciones del IAM",
    subtema: "Insuficiencia mitral aguda",
    dificultad: "Muy alta",
    caso: "Tres días después de un IAM inferior, un paciente desarrolla edema agudo pulmonar y un nuevo soplo holosistólico apical. El ecocardiograma muestra insuficiencia mitral aguda grave.",
    pregunta: "¿Cuál es la complicación mecánica más probable?",
    opciones: [
        "Rotura del músculo papilar",
        "Rotura de la pared libre",
        "Comunicación interventricular",
        "Aneurisma ventricular crónico",
        "Pericarditis tardía"
    ],
    respuestaCorrecta: 0,
    explicacion: "La rotura del músculo papilar puede producir insuficiencia mitral aguda grave, edema pulmonar y choque. Es una emergencia quirúrgica.",
    perlaENARM: "IAM inferior + nuevo soplo holosistólico + edema pulmonar = pensar en rotura de músculo papilar.",
    gpc: {
        mexico: "GPC-IMSS-191-18, Síndrome Coronario Agudo sin Elevación del ST.",
        internacional: "2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for Acute Coronary Syndromes."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-111",
    especialidad: "Cardiología",
    tema: "Complicaciones del IAM",
    subtema: "Comunicación interventricular postinfarto",
    dificultad: "Muy alta",
    caso: "Cinco días después de un IAM extenso, una mujer presenta deterioro súbito, choque y un nuevo soplo holosistólico intenso en borde esternal izquierdo. El ecocardiograma muestra cortocircuito izquierda-derecha a través del tabique interventricular.",
    pregunta: "¿Cuál es la complicación?",
    opciones: [
        "Rotura de músculo papilar",
        "Comunicación interventricular postinfarto",
        "Rotura de pared libre",
        "Pericarditis",
        "Aneurisma ventricular"
    ],
    respuestaCorrecta: 1,
    explicacion: "La rotura septal postinfarto produce una comunicación interventricular aguda, aumento súbito de la carga del ventrículo derecho y choque.",
    perlaENARM: "Nuevo soplo holosistólico tras IAM + choque = buscar rotura septal o músculo papilar mediante ecocardiografía.",
    gpc: {
        mexico: "GPC-IMSS-191-18, Síndrome Coronario Agudo sin Elevación del ST.",
        internacional: "2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for Acute Coronary Syndromes."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-112",
    especialidad: "Cardiología",
    tema: "Complicaciones del IAM",
    subtema: "Rotura de pared libre",
    dificultad: "Muy alta",
    caso: "Paciente de 74 años con IAM transmural desarrolla colapso cardiovascular súbito al sexto día. Presenta actividad eléctrica sin pulso y derrame pericárdico con signos de taponamiento.",
    pregunta: "¿Cuál es la causa más probable?",
    opciones: [
        "Rotura de pared libre ventricular",
        "Embolia pulmonar",
        "Rotura de músculo papilar",
        "Pericarditis recurrente",
        "Taquicardia supraventricular"
    ],
    respuestaCorrecta: 0,
    explicacion: "La rotura de la pared libre ventricular después de un IAM puede producir hemopericardio, taponamiento y actividad eléctrica sin pulso.",
    perlaENARM: "IAM transmural + colapso súbito + PEA + hemopericardio = rotura de pared libre.",
    gpc: {
        mexico: "GPC-IMSS-191-18, Síndrome Coronario Agudo sin Elevación del ST.",
        internacional: "2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for Acute Coronary Syndromes."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-113",
    especialidad: "Cardiología",
    tema: "Síndrome coronario agudo",
    subtema: "Infarto del ventrículo derecho",
    dificultad: "Muy alta",
    caso: "Varón de 66 años con IAM inferior presenta hipotensión, ingurgitación yugular y pulmones claros. El ECG muestra elevación del ST en V4R.",
    pregunta: "¿Cuál es el manejo inicial más apropiado si no existen datos de congestión pulmonar?",
    opciones: [
        "Nitrato intravenoso",
        "Diurético de asa a dosis altas",
        "Expansión cuidadosa con solución intravenosa",
        "Betabloqueador intravenoso",
        "Vasodilatador arterial"
    ],
    respuestaCorrecta: 2,
    explicacion: "El infarto del ventrículo derecho produce dependencia de la precarga. En ausencia de congestión pulmonar, la optimización cuidadosa de la precarga puede mejorar el gasto cardiaco.",
    perlaENARM: "IAM inferior + hipotensión + yugulares + pulmones limpios = pensar en VD y evitar nitratos.",
    gpc: {
        mexico: "GPC-IMSS-191-18, Síndrome Coronario Agudo sin Elevación del ST.",
        internacional: "2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for Acute Coronary Syndromes."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-114",
    especialidad: "Cardiología",
    tema: "Síndrome coronario agudo",
    subtema: "Complicaciones mecánicas",
    dificultad: "Muy alta",
    caso: "Paciente con IAM presenta deterioro hemodinámico súbito varios días después del evento. Se detecta un nuevo soplo y edema pulmonar.",
    pregunta: "¿Cuál es el estudio inicial de elección para identificar una complicación mecánica?",
    opciones: [
        "Radiografía de tórax",
        "Ecocardiograma transtorácico urgente",
        "Prueba de esfuerzo",
        "Holter",
        "Angiotomografía coronaria ambulatoria"
    ],
    respuestaCorrecta: 1,
    explicacion: "El ecocardiograma permite identificar insuficiencia mitral aguda, comunicación interventricular, derrame/taponamiento y alteraciones de la función ventricular de manera rápida.",
    perlaENARM: "Deterioro súbito post-IAM + nuevo soplo = ecocardiograma urgente.",
    gpc: {
        mexico: "GPC-IMSS-191-18, Síndrome Coronario Agudo sin Elevación del ST.",
        internacional: "2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for Acute Coronary Syndromes."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-115",
    especialidad: "Cardiología",
    tema: "Síndrome coronario agudo",
    subtema: "Infarto del ventrículo derecho y reperfusión",
    dificultad: "Alta",
    caso: "Paciente con IAM inferior y compromiso del ventrículo derecho presenta hipotensión persistente pese a optimización de la precarga. La angiografía muestra oclusión proximal de la coronaria derecha.",
    pregunta: "¿Cuál es la estrategia definitiva más apropiada?",
    opciones: [
        "Continuar únicamente con líquidos",
        "Reperfusión urgente de la arteria culpable",
        "Evitar cualquier procedimiento invasivo",
        "Prueba de esfuerzo",
        "Solo tratamiento con diuréticos"
    ],
    respuestaCorrecta: 1,
    explicacion: "La reperfusión de la arteria culpable es fundamental en el infarto agudo, incluido el compromiso del ventrículo derecho.",
    perlaENARM: "Los líquidos son una medida de soporte, no sustituyen la reperfusión del vaso culpable.",
    gpc: {
        mexico: "GPC-IMSS-191-18, Síndrome Coronario Agudo sin Elevación del ST.",
        internacional: "2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for Acute Coronary Syndromes."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-116",
    especialidad: "Cardiología",
    tema: "Síndrome coronario agudo",
    subtema: "MINOCA y SCAD",
    dificultad: "Muy alta",
    caso: "Mujer de 39 años presenta IAM con elevación de troponina. La coronariografía no muestra obstrucciones coronarias significativas. Se observa una imagen compatible con disección espontánea de la arteria coronaria.",
    pregunta: "¿Cuál es el diagnóstico más probable?",
    opciones: [
        "Miocarditis exclusivamente",
        "Disección espontánea de arteria coronaria",
        "Pericarditis",
        "Angina estable",
        "Takotsubo confirmado"
    ],
    respuestaCorrecta: 1,
    explicacion: "La SCAD es una causa importante de MINOCA, especialmente en mujeres relativamente jóvenes, y puede identificarse por hallazgos angiográficos característicos.",
    perlaENARM: "MINOCA no es un diagnóstico final: hay que determinar el mecanismo, incluyendo SCAD, vasoespasmo, embolia y miocarditis.",
    gpc: {
        mexico: "GPC-IMSS-345-08, Cardiopatía Isquémica.",
        internacional: "2024 ESC Guidelines for Chronic Coronary Syndromes; contemporary ACS guidance."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-117",
    especialidad: "Cardiología",
    tema: "Síndrome coronario crónico",
    subtema: "Angina vasoespástica",
    dificultad: "Alta",
    caso: "Varón de 46 años presenta episodios de dolor torácico intenso predominantemente en reposo durante la madrugada. Durante el episodio se documenta elevación transitoria del ST que desaparece espontáneamente.",
    pregunta: "¿Cuál es el tratamiento preventivo más apropiado?",
    opciones: [
        "Calcioantagonista",
        "Betabloqueador no selectivo como monoterapia",
        "Digoxina",
        "Warfarina",
        "Ivabradina como tratamiento de primera línea"
    ],
    respuestaCorrecta: 0,
    explicacion: "La angina vasoespástica se trata principalmente con vasodilatadores coronarios, especialmente calcioantagonistas y nitratos.",
    perlaENARM: "Angina nocturna en reposo + elevación transitoria del ST = vasoespasmo coronario.",
    gpc: {
        mexico: "GPC-IMSS-345-08, Cardiopatía Isquémica.",
        internacional: "2024 ESC Guidelines for Chronic Coronary Syndromes."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-118",
    especialidad: "Cardiología",
    tema: "Síndrome coronario crónico",
    subtema: "Angina microvascular",
    dificultad: "Muy alta",
    caso: "Mujer de 58 años presenta angina de esfuerzo persistente. La angiotomografía coronaria no muestra enfermedad obstructiva. Los síntomas continúan pese a tratamiento médico inicial.",
    pregunta: "¿Cuál es el siguiente enfoque más apropiado si se sospecha ANOCA/INOCA?",
    opciones: [
        "Descartar definitivamente origen cardiaco",
        "Evaluación funcional coronaria para identificar disfunción microvascular o vasoespasmo",
        "Fibrinólisis",
        "Anticoagulación indefinida",
        "Implantación de marcapasos"
    ],
    respuestaCorrecta: 1,
    explicacion: "La ausencia de enfermedad coronaria obstructiva no excluye isquemia. En pacientes seleccionados con síntomas persistentes, la evaluación funcional puede identificar alteraciones microvasculares o vasoespásticas.",
    perlaENARM: "ANOCA/INOCA requiere buscar el mecanismo; una coronariografía sin obstrucciones no significa ausencia de enfermedad coronaria funcional.",
    gpc: {
        mexico: "GPC-IMSS-345-08, Cardiopatía Isquémica.",
        internacional: "2024 ESC Guidelines for Chronic Coronary Syndromes."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-119",
    especialidad: "Cardiología",
    tema: "Cardiología intervencionista",
    subtema: "FFR",
    dificultad: "Muy alta",
    caso: "Paciente con angina estable tiene una estenosis coronaria intermedia del 60% en angiografía. La lesión no parece claramente responsable de los síntomas.",
    pregunta: "¿Qué herramienta invasiva permite determinar si la lesión produce isquemia fisiológicamente significativa?",
    opciones: [
        "Presión arterial central",
        "Fracción de reserva de flujo coronario",
        "Holter",
        "Ecocardiograma convencional",
        "Índice tobillo-brazo"
    ],
    respuestaCorrecta: 1,
    explicacion: "La FFR evalúa la repercusión fisiológica de una estenosis coronaria durante hiperemia. iFR es otra herramienta fisiológica que no requiere hiperemia farmacológica.",
    perlaENARM: "Una estenosis angiográfica intermedia no equivale necesariamente a una lesión funcionalmente significativa.",
    gpc: {
        mexico: "GPC-IMSS-345-08, Cardiopatía Isquémica.",
        internacional: "2024 ESC Guidelines for Chronic Coronary Syndromes."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-120",
    especialidad: "Cardiología",
    tema: "Síndrome coronario crónico",
    subtema: "Angiotomografía coronaria",
    dificultad: "Alta",
    caso: "Mujer de 52 años con dolor torácico estable tiene probabilidad clínica baja-intermedia de enfermedad coronaria obstructiva y un ECG basal interpretable.",
    pregunta: "¿Cuál de las siguientes pruebas puede ser particularmente útil para excluir enfermedad coronaria obstructiva?",
    opciones: [
        "Angiotomografía coronaria",
        "Holter de 24 horas",
        "Radiografía de tórax",
        "Cateterismo derecho",
        "Prueba de caminata de seis minutos"
    ],
    respuestaCorrecta: 0,
    explicacion: "La CCTA es una herramienta anatómica de primera línea en muchos pacientes con sospecha de síndrome coronario crónico y probabilidad clínica baja o intermedia.",
    perlaENARM: "En sospecha de enfermedad coronaria estable, la CCTA tiene un papel central en la evaluación anatómica no invasiva.",
    gpc: {
        mexico: "GPC-IMSS-345-08, Cardiopatía Isquémica.",
        internacional: "2024 ESC Guidelines for Chronic Coronary Syndromes."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-121",
    especialidad: "Cardiología",
    tema: "Insuficiencia cardiaca",
    subtema: "ARNI",
    dificultad: "Alta",
    caso: "Varón de 64 años con insuficiencia cardiaca con FEVI de 30% continúa sintomático pese a tratamiento con inhibidor de la ECA y betabloqueador a dosis adecuadas. No tiene hipotensión significativa.",
    pregunta: "¿Cuál es una estrategia farmacológica basada en evidencia para optimizar el tratamiento?",
    opciones: [
        "Cambiar IECA por sacubitrilo/valsartán",
        "Suspender todo tratamiento neurohormonal",
        "Añadir verapamilo",
        "Cambiar a digoxina como único tratamiento",
        "Suspender betabloqueador"
    ],
    respuestaCorrecta: 0,
    explicacion: "En HFrEF sintomática, el reemplazo de IECA/ARA-II por sacubitrilo/valsartán puede mejorar desenlaces cardiovasculares en pacientes apropiados.",
    perlaENARM: "En HFrEF, ARNI forma parte del tratamiento modificador de pronóstico junto con betabloqueador, MRA e inhibidor SGLT2.",
    gpc: {
        mexico: "GPC-SS-219-24, Diagnóstico y tratamiento de la insuficiencia cardiaca aguda en población mayor de 18 años.",
        internacional: "2023 ESC Focused Update of the 2021 ESC Heart Failure Guidelines."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-122",
    especialidad: "Cardiología",
    tema: "Insuficiencia cardiaca",
    subtema: "Antagonistas mineralocorticoides",
    dificultad: "Alta",
    caso: "Paciente con HFrEF presenta FEVI de 32%, síntomas NYHA II, creatinina estable y potasio de 4.4 mEq/L.",
    pregunta: "¿Cuál de las siguientes intervenciones modifica el pronóstico y debe considerarse si no existe contraindicación?",
    opciones: [
        "Espironolactona",
        "Diltiazem",
        "Nifedipino de acción corta",
        "AINE crónico",
        "Digoxina como sustituto de terapia modificadora"
    ],
    respuestaCorrecta: 0,
    explicacion: "Los antagonistas de mineralocorticoides reducen morbimortalidad en HFrEF sintomática cuando la función renal y el potasio permiten su uso seguro.",
    perlaENARM: "Antes y después de iniciar MRA: vigilar potasio y función renal.",
    gpc: {
        mexico: "GPC-SS-219-24, Diagnóstico y tratamiento de la insuficiencia cardiaca aguda.",
        internacional: "2023 ESC Focused Update of the 2021 ESC Heart Failure Guidelines."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-123",
    especialidad: "Cardiología",
    tema: "Insuficiencia cardiaca",
    subtema: "Betabloqueadores",
    dificultad: "Alta",
    caso: "Paciente con HFrEF estable, euvolémico y sin congestión aguda recibe tratamiento con IECA y diurético. Se desea iniciar tratamiento con betabloqueador.",
    pregunta: "¿Cuál es el momento más apropiado para iniciar o titular el betabloqueador?",
    opciones: [
        "Durante el edema pulmonar agudo",
        "Cuando el paciente esté clínicamente estable y euvolémico",
        "Solo después de trasplante",
        "Durante choque cardiogénico",
        "Únicamente si existe fibrilación auricular"
    ],
    respuestaCorrecta: 1,
    explicacion: "Los betabloqueadores modificadores de pronóstico deben iniciarse en pacientes estables, sin congestión significativa ni necesidad de soporte inotrópico.",
    perlaENARM: "Betabloqueador sí en HFrEF estable; no iniciar o aumentar agresivamente durante descompensación hemodinámica.",
    gpc: {
        mexico: "GPC-SS-219-24, Insuficiencia cardiaca aguda.",
        internacional: "2023 ESC Focused Update of the 2021 ESC Heart Failure Guidelines."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-124",
    especialidad: "Cardiología",
    tema: "Insuficiencia cardiaca",
    subtema: "Ivabradina",
    dificultad: "Muy alta",
    caso: "Varón de 58 años con HFrEF, ritmo sinusal, FEVI 30% y frecuencia cardiaca persistente de 78 lpm pese a betabloqueador a dosis máxima tolerada. Continúa sintomático.",
    pregunta: "¿Qué opción puede considerarse en un paciente seleccionado con estas características?",
    opciones: [
        "Ivabradina",
        "Verapamilo",
        "Diltiazem",
        "Flecainida",
        "Adenosina crónica"
    ],
    respuestaCorrecta: 0,
    explicacion: "Ivabradina puede considerarse en pacientes con HFrEF sintomática, ritmo sinusal y frecuencia cardiaca elevada pese a tratamiento con betabloqueador a dosis tolerada, según criterios establecidos.",
    perlaENARM: "Ivabradina actúa sobre la corriente If del nodo sinusal y requiere ritmo sinusal.",
    gpc: {
        mexico: "GPC-SS-219-24, Insuficiencia cardiaca aguda.",
        internacional: "2023 ESC Focused Update of the 2021 ESC Heart Failure Guidelines."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-125",
    especialidad: "Cardiología",
    tema: "Insuficiencia cardiaca",
    subtema: "Vericiguat",
    dificultad: "Muy alta",
    caso: "Paciente con HFrEF de alto riesgo ha tenido una hospitalización reciente por descompensación pese a tratamiento dirigido por guías y continúa con alto riesgo de nuevos eventos.",
    pregunta: "¿Cuál de los siguientes fármacos puede considerarse en pacientes seleccionados después de un empeoramiento reciente de la insuficiencia cardiaca?",
    opciones: [
        "Vericiguat",
        "Verapamilo",
        "Flecainida",
        "Propafenona",
        "Nifedipino de liberación inmediata"
    ],
    respuestaCorrecta: 0,
    explicacion: "Vericiguat, estimulador soluble de la guanilato ciclasa, puede considerarse en determinados pacientes con HFrEF de alto riesgo después de un empeoramiento reciente pese al tratamiento estándar.",
    perlaENARM: "Vericiguat es una estrategia adicional en HFrEF seleccionada; no sustituye las cuatro terapias fundamentales.",
    gpc: {
        mexico: "GPC-SS-219-24, Insuficiencia cardiaca aguda.",
        internacional: "2023 ESC Focused Update of the 2021 ESC Heart Failure Guidelines."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-126",
    especialidad: "Cardiología",
    tema: "Insuficiencia cardiaca",
    subtema: "Digoxina",
    dificultad: "Alta",
    caso: "Paciente con HFrEF y fibrilación auricular presenta frecuencia ventricular persistentemente elevada pese a tratamiento convencional. Tiene presión arterial baja que limita la titulación de otros fármacos.",
    pregunta: "¿Cuál es una posible utilidad de la digoxina en este escenario?",
    opciones: [
        "Reducir la frecuencia ventricular en pacientes seleccionados",
        "Revertir siempre la fibrilación auricular a ritmo sinusal",
        "Sustituir el tratamiento anticoagulante",
        "Prevenir todos los eventos tromboembólicos",
        "Aumentar la fracción de eyección de manera universal"
    ],
    respuestaCorrecta: 0,
    explicacion: "La digoxina puede utilizarse para control de frecuencia en pacientes seleccionados con FA, especialmente cuando existen limitaciones para otros fármacos. No sustituye la anticoagulación cuando esta está indicada.",
    perlaENARM: "Digoxina controla frecuencia; no es un anticoagulante ni garantiza conversión a ritmo sinusal.",
    gpc: {
        mexico: "IMSS-014-08, Diagnóstico y Tratamiento de la Fibrilación Auricular.",
        internacional: "2024 ESC Guidelines for the Management of Atrial Fibrillation."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-127",
    especialidad: "Cardiología",
    tema: "Insuficiencia cardiaca",
    subtema: "Resistencia diurética",
    dificultad: "Muy alta",
    caso: "Paciente hospitalizado con insuficiencia cardiaca aguda presenta edema pulmonar y periférico. Tras diurético de asa intravenoso en dosis adecuada persiste congestión con respuesta urinaria insuficiente.",
    pregunta: "¿Cuál es una estrategia razonable ante resistencia diurética?",
    opciones: [
        "Suspender todo diurético",
        "Bloqueo secuencial de la nefrona",
        "Administrar AINE",
        "Iniciar verapamilo",
        "Restringir completamente líquidos sin evaluar perfusión"
    ],
    respuestaCorrecta: 1,
    explicacion: "La resistencia diurética puede requerir intensificación de la dosis del diurético de asa y bloqueo secuencial de la nefrona con un diurético de otro sitio de acción, además de corregir factores precipitantes.",
    perlaENARM: "Congestión persistente pese a asa = optimizar dosis, valorar respuesta y considerar bloqueo secuencial.",
    gpc: {
        mexico: "GPC-SS-219-24, Diagnóstico y tratamiento de la insuficiencia cardiaca aguda.",
        internacional: "2023 ESC Focused Update of the 2021 ESC Heart Failure Guidelines."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-128",
    especialidad: "Cardiología",
    tema: "Insuficiencia cardiaca",
    subtema: "Síndrome cardiorrenal",
    dificultad: "Muy alta",
    caso: "Paciente con insuficiencia cardiaca aguda congestiva presenta aumento de creatinina durante la descongestión. Continúa con edema, presión venosa elevada y congestión pulmonar.",
    pregunta: "¿Cuál es la interpretación más apropiada?",
    opciones: [
        "Todo aumento de creatinina obliga a suspender inmediatamente la descongestión",
        "La persistencia de congestión puede ser más relevante que un aumento moderado y transitorio de creatinina",
        "La insuficiencia renal descarta insuficiencia cardiaca",
        "Debe administrarse AINE para proteger el riñón",
        "Debe suspenderse todo diurético independientemente del estado de volumen"
    ],
    respuestaCorrecta: 1,
    explicacion: "Durante la descongestión puede observarse deterioro transitorio de función renal. Si persiste la congestión, suspender prematuramente la descongestión puede empeorar el pronóstico.",
    perlaENARM: "En IC aguda, interpretar creatinina siempre junto con el estado de congestión y perfusión.",
    gpc: {
        mexico: "GPC-SS-219-24, Diagnóstico y tratamiento de la insuficiencia cardiaca aguda.",
        internacional: "2023 ESC Focused Update of the 2021 ESC Heart Failure Guidelines."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-129",
    especialidad: "Cardiología",
    tema: "Insuficiencia cardiaca",
    subtema: "Hiperpotasemia por tratamiento neurohormonal",
    dificultad: "Muy alta",
    caso: "Paciente con HFrEF recibe IECA y antagonista mineralocorticoide. Durante el seguimiento desarrolla potasio de 6.1 mEq/L.",
    pregunta: "¿Cuál es el problema principal que debe reconocerse?",
    opciones: [
        "Hiponatremia por congestión",
        "Hiperpotasemia asociada al bloqueo del sistema renina-angiotensina-aldosterona",
        "Hipocalcemia",
        "Hipomagnesemia",
        "Hipofosfatemia"
    ],
    respuestaCorrecta: 1,
    explicacion: "IECA, ARA-II, ARNI y MRA pueden aumentar el potasio, especialmente en pacientes con enfermedad renal. Se requiere monitorización y manejo de la hiperpotasemia para mantener, cuando sea posible, las terapias modificadoras de pronóstico.",
    perlaENARM: "No abandones automáticamente el tratamiento neurohormonal por un cambio aislado de potasio; evalúa gravedad, función renal y estrategias para mantener terapia segura.",
    gpc: {
        mexico: "GPC-SS-219-24, Insuficiencia cardiaca aguda.",
        internacional: "2023 ESC Focused Update of the 2021 ESC Heart Failure Guidelines."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-130",
    especialidad: "Cardiología",
    tema: "Insuficiencia cardiaca",
    subtema: "Inhibidores SGLT2",
    dificultad: "Alta",
    caso: "Mujer de 71 años con HFrEF y diabetes mellitus tipo 2 está clínicamente estable. Ya recibe ARNI, betabloqueador y MRA.",
    pregunta: "¿Cuál de las siguientes opciones completa una de las cuatro clases farmacológicas fundamentales para HFrEF?",
    opciones: [
        "Inhibidor SGLT2",
        "Verapamilo",
        "Flecainida",
        "Nifedipino de acción corta",
        "Digoxina obligatoria"
    ],
    respuestaCorrecta: 0,
    explicacion: "Los inhibidores SGLT2 forman parte del tratamiento fundamental de HFrEF, con beneficios cardiovasculares independientemente de la presencia de diabetes.",
    perlaENARM: "Las cuatro columnas actuales de HFrEF: ARNI/IECA/ARA-II, betabloqueador basado en evidencia, MRA e inhibidor SGLT2.",
    gpc: {
        mexico: "GPC-SS-219-24, Insuficiencia cardiaca aguda.",
        internacional: "2023 ESC Focused Update of the 2021 ESC Heart Failure Guidelines."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-131",
    especialidad: "Cardiología",
    tema: "Insuficiencia cardiaca",
    subtema: "HFpEF y comorbilidades",
    dificultad: "Alta",
    caso: "Mujer de 76 años con FEVI de 62%, obesidad, diabetes, hipertensión y múltiples hospitalizaciones por insuficiencia cardiaca presenta congestión recurrente.",
    pregunta: "¿Cuál es una estrategia farmacológica con evidencia para reducir hospitalizaciones en HFpEF?",
    opciones: [
        "Inhibidor SGLT2",
        "Flecainida",
        "Diltiazem como modificador de pronóstico universal",
        "Nifedipino de acción corta",
        "Amiodarona en todos los pacientes"
    ],
    respuestaCorrecta: 0,
    explicacion: "Los inhibidores SGLT2 han demostrado beneficio clínico en pacientes con insuficiencia cardiaca con FE preservada o levemente reducida.",
    perlaENARM: "HFpEF no significa ausencia de tratamiento modificador; SGLT2 es una de las terapias con evidencia más consistente.",
    gpc: {
        mexico: "GPC-SS-219-24, Insuficiencia cardiaca aguda.",
        internacional: "2023 ESC Focused Update of the 2021 ESC Heart Failure Guidelines."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-132",
    especialidad: "Cardiología",
    tema: "Cardiomiopatías",
    subtema: "Amiloidosis cardiaca",
    dificultad: "Muy alta",
    caso: "Varón de 74 años presenta insuficiencia cardiaca con FEVI preservada, paredes ventriculares engrosadas, bajo voltaje relativo en ECG y antecedente de síndrome del túnel carpiano bilateral.",
    pregunta: "¿Qué diagnóstico debe considerarse especialmente?",
    opciones: [
        "Amiloidosis cardiaca",
        "Pericarditis constrictiva exclusivamente",
        "Miocardiopatía dilatada",
        "IAM agudo",
        "Taquicardia ventricular idiopática"
    ],
    respuestaCorrecta: 0,
    explicacion: "El fenotipo de engrosamiento ventricular con bajo voltaje relativo y manifestaciones extracardiacas como túnel carpiano debe despertar sospecha de amiloidosis cardiaca.",
    perlaENARM: "Paredes gruesas + bajo voltaje + HFpEF + pistas extracardiacas = pensar en amiloidosis.",
    gpc: {
        mexico: "No se identificó una GPC mexicana específica para amiloidosis cardiaca en el catálogo consultado.",
        internacional: "2023 ESC Guidelines for the Management of Cardiomyopathies."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-133",
    especialidad: "Cardiología",
    tema: "Cardiomiopatías",
    subtema: "Enfermedad de Fabry",
    dificultad: "Muy alta",
    caso: "Varón de 41 años presenta hipertrofia ventricular izquierda inexplicada, enfermedad renal progresiva, acroparestesias y antecedentes familiares de eventos cardiovasculares prematuros.",
    pregunta: "¿Qué diagnóstico etiológico debe considerarse?",
    opciones: [
        "Enfermedad de Fabry",
        "Cardiopatía hipertensiva obligatoriamente",
        "Pericarditis constrictiva",
        "Miocarditis viral aguda",
        "Síndrome de Brugada"
    ],
    respuestaCorrecta: 0,
    explicacion: "La combinación de hipertrofia ventricular, enfermedad renal y manifestaciones sistémicas como acroparestesias puede indicar enfermedad de Fabry.",
    perlaENARM: "En hipertrofia ventricular inexplicada, buscar fenocopias antes de etiquetar como HCM sarcomérica.",
    gpc: {
        mexico: "No se identificó una GPC mexicana específica para cardiopatía de Fabry.",
        internacional: "2023 ESC Guidelines for the Management of Cardiomyopathies."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-134",
    especialidad: "Cardiología",
    tema: "Cardiomiopatías",
    subtema: "Miocardiopatía arritmogénica",
    dificultad: "Muy alta",
    caso: "Varón de 29 años presenta síncope durante ejercicio. Tiene antecedentes familiares de muerte súbita. La resonancia cardiaca muestra alteraciones estructurales y fibrosis predominantemente del ventrículo derecho.",
    pregunta: "¿Qué diagnóstico debe considerarse?",
    opciones: [
        "Miocardiopatía arritmogénica",
        "Pericarditis aguda",
        "Estenosis aórtica",
        "IAM inferior",
        "Comunicación interauricular aislada"
    ],
    respuestaCorrecta: 0,
    explicacion: "La miocardiopatía arritmogénica puede presentarse con arritmias ventriculares, síncope, muerte súbita y alteraciones estructurales/fibróticas del ventrículo derecho o de ambos ventrículos.",
    perlaENARM: "Síncope relacionado con ejercicio + antecedentes de muerte súbita + alteraciones del VD = evaluar miocardiopatía arritmogénica.",
    gpc: {
        mexico: "No se identificó una GPC mexicana específica para miocardiopatía arritmogénica.",
        internacional: "2023 ESC Guidelines for the Management of Cardiomyopathies."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-135",
    especialidad: "Cardiología",
    tema: "Cardiomiopatías",
    subtema: "Miocardiopatía dilatada genética",
    dificultad: "Muy alta",
    caso: "Mujer de 37 años presenta miocardiopatía dilatada sin causa evidente. Su hermano falleció súbitamente a los 42 años y varios familiares tienen insuficiencia cardiaca.",
    pregunta: "¿Cuál es el enfoque más apropiado?",
    opciones: [
        "Considerar etiología genética y evaluación familiar",
        "Asumir que es exclusivamente idiopática y no estudiar familiares",
        "Indicar antibiótico crónico",
        "Diagnosticar pericarditis",
        "Realizar prueba de esfuerzo como único estudio"
    ],
    respuestaCorrecta: 0,
    explicacion: "La historia familiar de miocardiopatía y muerte súbita aumenta la probabilidad de una etiología genética y justifica evaluación especializada, incluyendo estudio familiar y genético cuando esté indicado.",
    perlaENARM: "La historia familiar es parte integral del diagnóstico de las cardiomiopatías.",
    gpc: {
        mexico: "No se identificó una GPC mexicana específica para miocardiopatía dilatada genética.",
        internacional: "2023 ESC Guidelines for the Management of Cardiomyopathies."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-136",
    especialidad: "Cardiología",
    tema: "Miocarditis",
    subtema: "Biopsia endomiocárdica",
    dificultad: "Muy alta",
    caso: "Paciente de 39 años desarrolla insuficiencia cardiaca rápidamente progresiva, arritmias ventriculares y choque cardiogénico después de un cuadro viral. La resonancia cardiaca es compatible con miocarditis.",
    pregunta: "¿En qué escenario puede estar especialmente indicada la biopsia endomiocárdica?",
    opciones: [
        "Todo paciente con dolor torácico leve",
        "Presentaciones graves o rápidamente progresivas en las que el resultado pueda modificar el tratamiento",
        "Todo paciente con troponina normal",
        "Todo paciente con pericarditis simple",
        "Nunca está indicada"
    ],
    respuestaCorrecta: 1,
    explicacion: "La biopsia endomiocárdica no se realiza rutinariamente en toda miocarditis. Puede ser importante en presentaciones graves, fulminantes o específicas donde la identificación etiológica/histológica modifique el tratamiento.",
    perlaENARM: "La biopsia en miocarditis es selectiva, no rutinaria; su mayor valor está en fenotipos graves o etiologías tratables específicas.",
    gpc: {
        mexico: "IMSS-367-11, Diagnóstico y Tratamiento de Miocarditis Aguda.",
        internacional: "2025 ESC Guidelines for Myocarditis and Pericarditis."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-137",
    especialidad: "Cardiología",
    tema: "Miocarditis",
    subtema: "Ejercicio",
    dificultad: "Alta",
    caso: "Atleta de 24 años con miocarditis aguda confirmada pregunta cuándo puede regresar a entrenamiento competitivo.",
    pregunta: "¿Cuál es la recomendación general?",
    opciones: [
        "Regresar inmediatamente si desaparece el dolor",
        "Evitar ejercicio intenso durante la fase de recuperación y realizar reevaluación antes del retorno",
        "Entrenar más intensamente para recuperar capacidad",
        "Regresar únicamente cuando la troponina aumente",
        "No requiere seguimiento cardiológico"
    ],
    respuestaCorrecta: 1,
    explicacion: "El ejercicio intenso durante la fase activa de miocarditis puede aumentar el riesgo de arritmias. El retorno debe individualizarse y realizarse después de la recuperación clínica y evaluación apropiada.",
    perlaENARM: "Miocarditis + atleta = restricción temporal del ejercicio y reevaluación antes de volver al deporte competitivo.",
    gpc: {
        mexico: "IMSS-367-11, Diagnóstico y Tratamiento de Miocarditis Aguda.",
        internacional: "2025 ESC Guidelines for Myocarditis and Pericarditis."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-138",
    especialidad: "Cardiología",
    tema: "Pericarditis",
    subtema: "Tratamiento inicial",
    dificultad: "Alta",
    caso: "Varón de 32 años con pericarditis aguda idiopática, sin derrame significativo, sin elevación marcada de troponina y sin contraindicación para AINE.",
    pregunta: "¿Cuál es el tratamiento de primera línea más apropiado?",
    opciones: [
        "AINE o aspirina más colchicina",
        "Anticoagulación indefinida",
        "Betabloqueador como monoterapia",
        "Fibrinólisis",
        "Digoxina"
    ],
    respuestaCorrecta: 0,
    explicacion: "En pericarditis aguda no complicada, el tratamiento antiinflamatorio combinado con colchicina reduce síntomas y recurrencias.",
    perlaENARM: "Pericarditis aguda no complicada: antiinflamatorio + colchicina es la base terapéutica.",
    gpc: {
        mexico: "IMSS-463-11, Diagnóstico y Tratamiento de Pericarditis en el Adulto.",
        internacional: "2025 ESC Guidelines for Myocarditis and Pericarditis."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-139",
    especialidad: "Cardiología",
    tema: "Pericarditis",
    subtema: "Pericarditis recurrente",
    dificultad: "Muy alta",
    caso: "Mujer de 41 años presenta su tercer episodio de pericarditis después de suspender tratamiento. No existen datos de infección bacteriana ni compromiso hemodinámico.",
    pregunta: "¿Qué fármaco tiene un papel importante para reducir recurrencias?",
    opciones: [
        "Colchicina",
        "Flecainida",
        "Digoxina",
        "Verapamilo",
        "Warfarina"
    ],
    respuestaCorrecta: 0,
    explicacion: "La colchicina reduce el riesgo de recurrencia en pericarditis y es un componente fundamental del tratamiento cuando no existen contraindicaciones.",
    perlaENARM: "La colchicina no solo controla síntomas; disminuye recurrencias.",
    gpc: {
        mexico: "IMSS-463-11, Diagnóstico y Tratamiento de Pericarditis en el Adulto.",
        internacional: "2025 ESC Guidelines for Myocarditis and Pericarditis."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-140",
    especialidad: "Cardiología",
    tema: "Pericardio",
    subtema: "Taponamiento y pulsus paradoxus",
    dificultad: "Alta",
    caso: "Paciente con derrame pericárdico importante presenta disnea, hipotensión e ingurgitación yugular. Se documenta disminución marcada de la presión arterial sistólica durante la inspiración.",
    pregunta: "¿Qué hallazgo clínico se describe?",
    opciones: [
        "Pulso paradójico",
        "Pulso alternante",
        "Pulso bisferiens",
        "Pulso de Corrigan",
        "Pulso magnus"
    ],
    respuestaCorrecta: 0,
    explicacion: "El pulso paradójico corresponde a una disminución exagerada de la presión arterial sistólica durante la inspiración y puede observarse en taponamiento cardiaco.",
    perlaENARM: "Pulso paradójico + yugulares + hipotensión en derrame = pensar en taponamiento.",
    gpc: {
        mexico: "IMSS-463-11, Diagnóstico y Tratamiento de Pericarditis en el Adulto.",
        internacional: "2025 ESC Guidelines for Myocarditis and Pericarditis."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-141",
    especialidad: "Cardiología",
    tema: "Valvulopatías",
    subtema: "Estenosis aórtica y TAVI",
    dificultad: "Muy alta",
    caso: "Mujer de 79 años con estenosis aórtica grave sintomática tiene anatomía favorable para intervención transcatéter y riesgo quirúrgico elevado.",
    pregunta: "¿Qué estrategia debe evaluarse prioritariamente por el Heart Team?",
    opciones: [
        "TAVI",
        "Tratamiento exclusivo con diurético",
        "Anticoagulación como tratamiento definitivo",
        "Ninguna intervención porque tiene más de 75 años",
        "Valvuloplastia con balón como tratamiento permanente"
    ],
    respuestaCorrecta: 0,
    explicacion: "En pacientes con estenosis aórtica grave sintomática, la elección entre intervención quirúrgica y transcatéter debe individualizarse por el Heart Team. En pacientes de edad avanzada con anatomía favorable, TAVI puede ser una opción apropiada.",
    perlaENARM: "La edad, anatomía, expectativa de vida, riesgo quirúrgico y acceso deben integrarse; la decisión corresponde al Heart Team.",
    gpc: {
        mexico: "GPC mexicana relacionada con valvulopatía aórtica; complementar con el catálogo CENETEC/IMSS.",
        internacional: "2025 ESC/EACTS Guidelines for the Management of Valvular Heart Disease."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-142",
    especialidad: "Cardiología",
    tema: "Valvulopatías",
    subtema: "Estenosis aórtica de bajo flujo y bajo gradiente",
    dificultad: "Muy alta",
    caso: "Varón de 72 años presenta FEVI de 30%, área valvular aórtica de 0.8 cm² y gradiente medio de 25 mmHg. Existe duda sobre si la estenosis es verdaderamente grave.",
    pregunta: "¿Qué estudio puede ayudar a diferenciar estenosis aórtica verdaderamente grave de pseudoestenosis en este contexto?",
    opciones: [
        "Ecocardiograma de estrés con dobutamina",
        "Holter",
        "Prueba de caminata",
        "Radiografía de tórax",
        "Cateterismo derecho exclusivamente"
    ],
    respuestaCorrecta: 0,
    explicacion: "En estenosis aórtica de bajo flujo y bajo gradiente con FEVI reducida, la ecocardiografía con dobutamina puede evaluar la respuesta del flujo y ayudar a definir la severidad real.",
    perlaENARM: "Área pequeña + gradiente bajo + FEVI reducida = evaluar flujo y severidad verdadera con dobutamina.",
    gpc: {
        mexico: "GPC mexicana relacionada con valvulopatía aórtica; complementar con CENETEC/IMSS.",
        internacional: "2025 ESC/EACTS Guidelines for Valvular Heart Disease."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-143",
    especialidad: "Cardiología",
    tema: "Valvulopatías",
    subtema: "Insuficiencia aórtica",
    dificultad: "Muy alta",
    caso: "Varón de 58 años con insuficiencia aórtica grave presenta dilatación progresiva del ventrículo izquierdo y reducción de la función sistólica.",
    pregunta: "¿Cuál es el principio general de manejo?",
    opciones: [
        "Esperar hasta que aparezca choque cardiogénico",
        "Evaluar intervención valvular antes de daño ventricular irreversible",
        "Indicar anticoagulación como tratamiento definitivo",
        "Utilizar betabloqueador como sustituto de cirugía",
        "No intervenir si el paciente está asintomático"
    ],
    respuestaCorrecta: 1,
    explicacion: "En insuficiencia aórtica grave, la aparición de síntomas, dilatación ventricular significativa o deterioro de la función ventricular son elementos fundamentales para definir el momento de intervención.",
    perlaENARM: "En insuficiencia aórtica crónica, el objetivo es intervenir antes del daño ventricular irreversible.",
    gpc: {
        mexico: "GPC mexicana relacionada con valvulopatía aórtica; complementar con CENETEC/IMSS.",
        internacional: "2025 ESC/EACTS Guidelines for Valvular Heart Disease."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-144",
    especialidad: "Cardiología",
    tema: "Valvulopatías",
    subtema: "Insuficiencia mitral secundaria",
    dificultad: "Muy alta",
    caso: "Paciente con HFrEF y miocardiopatía isquémica presenta insuficiencia mitral secundaria grave. Continúa sintomático pese a tratamiento médico dirigido por guías y tiene anatomía favorable para intervención transcatéter.",
    pregunta: "¿Qué estrategia debe considerarse?",
    opciones: [
        "Evaluación por Heart Team para intervención transcatéter en paciente seleccionado",
        "Anticoagulación como tratamiento de la insuficiencia mitral",
        "Suspender tratamiento de insuficiencia cardiaca",
        "Cirugía urgente en todos los pacientes",
        "No intervenir nunca en insuficiencia mitral secundaria"
    ],
    respuestaCorrecta: 0,
    explicacion: "La insuficiencia mitral secundaria requiere optimización del tratamiento de la enfermedad ventricular. En pacientes seleccionados con persistencia de síntomas y anatomía favorable puede considerarse intervención transcatéter.",
    perlaENARM: "Primero optimizar HFrEF; después seleccionar pacientes con IM secundaria grave para intervención mediante Heart Team.",
    gpc: {
        mexico: "IMSS-235-09, Diagnóstico y Tratamiento de la Patología de la Válvula Mitral.",
        internacional: "2025 ESC/EACTS Guidelines for Valvular Heart Disease."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-145",
    especialidad: "Cardiología",
    tema: "Valvulopatías",
    subtema: "Insuficiencia tricuspídea",
    dificultad: "Muy alta",
    caso: "Mujer de 68 años presenta insuficiencia tricuspídea grave, edema periférico, ascitis y dilatación progresiva del ventrículo derecho. La insuficiencia tricuspídea es funcional y existe enfermedad valvular izquierda tratable.",
    pregunta: "¿Cuál es el principio terapéutico más apropiado?",
    opciones: [
        "Evaluar integralmente la causa y considerar intervención dentro de un Heart Team",
        "Anticoagular a todos los pacientes como tratamiento definitivo",
        "Ignorar la enfermedad ventricular derecha",
        "Administrar fibrinólisis",
        "Realizar pericardiocentesis"
    ],
    respuestaCorrecta: 0,
    explicacion: "La insuficiencia tricuspídea grave debe evaluarse considerando etiología, función ventricular derecha, presión pulmonar y enfermedad valvular izquierda. Las decisiones intervencionistas deben realizarse en centros especializados.",
    perlaENARM: "La insuficiencia tricuspídea grave no debe evaluarse de forma aislada: función VD, presión pulmonar y válvulas izquierdas son determinantes.",
    gpc: {
        mexico: "IMSS-242-09, Enfermedad de la Válvula Tricúspide.",
        internacional: "2025 ESC/EACTS Guidelines for Valvular Heart Disease."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-146",
    especialidad: "Cardiología",
    tema: "Valvulopatías",
    subtema: "Prótesis mecánica",
    dificultad: "Muy alta",
    caso: "Varón de 56 años con prótesis valvular mecánica consulta porque desea suspender la anticoagulación para evitar controles de INR.",
    pregunta: "¿Cuál es la afirmación correcta?",
    opciones: [
        "La anticoagulación puede suspenderse definitivamente en toda prótesis mecánica",
        "Las prótesis mecánicas requieren anticoagulación con antagonista de vitamina K según el tipo de prótesis y factores de riesgo",
        "Los DOAC son siempre equivalentes a warfarina en prótesis mecánicas",
        "La aspirina sola siempre es suficiente",
        "La prótesis mecánica no aumenta riesgo trombótico"
    ],
    respuestaCorrecta: 1,
    explicacion: "Las prótesis mecánicas tienen riesgo trombótico elevado y requieren anticoagulación con antagonistas de vitamina K con objetivos de INR individualizados según prótesis y factores de riesgo.",
    perlaENARM: "DOAC no sustituyen a los antagonistas de vitamina K en prótesis mecánicas.",
    gpc: {
        mexico: "GPC mexicana relacionada con valvulopatías; complementar con IMSS-235-09 y catálogo CENETEC.",
        internacional: "2025 ESC/EACTS Guidelines for Valvular Heart Disease."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-147",
    especialidad: "Cardiología",
    tema: "Valvulopatías",
    subtema: "Trombosis de prótesis",
    dificultad: "Muy alta",
    caso: "Paciente con prótesis mecánica presenta disnea súbita y disminución del clic protésico. El ecocardiograma muestra aumento marcado del gradiente transvalvular.",
    pregunta: "¿Cuál es la complicación que debe sospecharse?",
    opciones: [
        "Trombosis obstructiva de la prótesis",
        "Pericarditis idiopática",
        "Angina estable",
        "Miocarditis viral",
        "Hipertensión pulmonar primaria"
    ],
    respuestaCorrecta: 0,
    explicacion: "La disminución del clic, síntomas súbitos y aumento del gradiente protésico sugieren obstrucción de una prótesis mecánica, frecuentemente por trombosis.",
    perlaENARM: "Prótesis mecánica + disnea súbita + nuevo aumento del gradiente = descartar trombosis protésica.",
    gpc: {
        mexico: "GPC mexicana relacionada con valvulopatías; complementar con catálogo CENETEC/IMSS.",
        internacional: "2025 ESC/EACTS Guidelines for Valvular Heart Disease."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-148",
    especialidad: "Cardiología",
    tema: "Valvulopatías",
    subtema: "Estenosis aórtica y embarazo",
    dificultad: "Muy alta",
    caso: "Mujer de 30 años con estenosis aórtica grave sintomática desea embarazo. Presenta gradiente elevado y síncope de esfuerzo.",
    pregunta: "¿Cuál es el enfoque más apropiado?",
    opciones: [
        "Evaluación especializada antes del embarazo por equipo multidisciplinario",
        "Aconsejar embarazo inmediato sin evaluación",
        "Anticoagulación como tratamiento de la estenosis",
        "Ningún seguimiento durante el embarazo",
        "Realizar prueba de esfuerzo máxima durante el tercer trimestre"
    ],
    respuestaCorrecta: 0,
    explicacion: "La estenosis aórtica grave sintomática puede implicar un riesgo materno significativo. La planificación preconcepcional por un equipo especializado permite definir la necesidad de intervención antes del embarazo.",
    perlaENARM: "Valvulopatía grave + embarazo = planificación preconcepcional y Heart Team/cardio-obstetricia.",
    gpc: {
        mexico: "GPC mexicana relacionada con valvulopatías; complementar con CENETEC/IMSS.",
        internacional: "2025 ESC/EACTS Guidelines for Valvular Heart Disease."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-149",
    especialidad: "Cardiología",
    tema: "Aorta",
    subtema: "Disección aórtica tipo A",
    dificultad: "Muy alta",
    caso: "Varón de 61 años presenta dolor torácico súbito, máximo desde el inicio, irradiado a espalda. La angiotomografía muestra disección de aorta ascendente con extensión al arco.",
    pregunta: "¿Cuál es el tratamiento definitivo?",
    opciones: [
        "Cirugía urgente",
        "Tratamiento ambulatorio con antihipertensivos",
        "Fibrinólisis",
        "Anticoagulación aislada",
        "Prueba de esfuerzo"
    ],
    respuestaCorrecta: 0,
    explicacion: "La disección aguda de aorta tipo A, que involucra la aorta ascendente, constituye una emergencia quirúrgica por el riesgo de rotura, taponamiento, insuficiencia aórtica y compromiso coronario.",
    perlaENARM: "Tipo A = aorta ascendente = cirugía urgente salvo circunstancias excepcionales.",
    gpc: {
        mexico: "IMSS-414-10, Diagnóstico y Tratamiento de la Disección Aguda de Aorta Torácica Descendente.",
        internacional: "2024 ESC Guidelines for the Management of Peripheral Arterial and Aortic Diseases."
    },
    bibliografia: "Braunwald's Heart Disease."
},
{
    id: "CARD-150",
    especialidad: "Cardiología",
    tema: "Cardiomiopatías",
    subtema: "Síndrome de Takotsubo",
    dificultad: "Muy alta",
    caso: "Mujer de 67 años presenta dolor torácico después de un estrés emocional intenso. El ECG muestra cambios isquémicos y la troponina está elevada. La coronariografía no muestra obstrucción coronaria significativa. El ventriculograma muestra hipocinesia apical con hipercontractilidad basal.",
    pregunta: "¿Cuál es el diagnóstico más probable?",
    opciones: [
        "Síndrome de Takotsubo",
        "IAM por oclusión proximal de la DA",
        "Pericarditis bacteriana",
        "Miocardiopatía hipertrófica obstructiva",
        "Estenosis aórtica grave"
    ],
    respuestaCorrecta: 0,
    explicacion: "El síndrome de Takotsubo puede simular un síndrome coronario agudo, especialmente en mujeres posmenopáusicas, y se caracteriza por una alteración transitoria de la contractilidad que no corresponde necesariamente a un territorio coronario único.",
    perlaENARM: "Takotsubo: desencadenante físico/emocional + cuadro similar a SCA + coronarias sin obstrucción culpable + alteración ventricular característica.",
    gpc: {
        mexico: "No se identificó una GPC mexicana específica para síndrome de Takotsubo en el catálogo cardiológico consultado.",
        internacional: "2023 ESC Guidelines for the Management of Cardiomyopathies; contemporary international consensus on Takotsubo syndrome."
    },
    bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
},
      {
    id: "CARD-151",
    especialidad: "Cardiología",
    tema: "Fibrilación auricular",
    subtema: "FA + síndrome coronario agudo + intervención coronaria",
    dificultad: "Muy alta",
    caso: "Varón de 72 años con fibrilación auricular no valvular anticoagulado con apixabán presenta síndrome coronario agudo sin elevación del ST y es llevado a intervención coronaria percutánea con colocación de stent farmacoactivo. Tiene alto riesgo tromboembólico y antecedente de hemorragia digestiva hace 18 meses. Se busca el esquema antitrombótico que minimice el riesgo hemorrágico sin aumentar innecesariamente el riesgo de trombosis del stent.",
    pregunta: "¿Cuál es la estrategia antitrombótica más apropiada?",
    opciones: [
      "Mantener triple terapia con anticoagulante oral, aspirina y clopidogrel durante 12 meses",
      "Suspender inmediatamente el anticoagulante y mantener aspirina más clopidogrel durante 12 meses",
      "Utilizar anticoagulante oral más inhibidor P2Y12, limitando la duración de la triple terapia con aspirina al periodo mínimo necesario",
      "Utilizar anticoagulante oral más aspirina sin inhibidor P2Y12",
      "Mantener únicamente anticoagulación oral desde el primer día"
    ],
    respuestaCorrecta: 2,
    explicacion: "En pacientes con FA que requieren anticoagulación y presentan SCA con PCI, debe equilibrarse el riesgo tromboembólico, la trombosis del stent y el sangrado. La tendencia contemporánea es minimizar la duración de la triple terapia y continuar posteriormente con anticoagulante oral más un inhibidor P2Y12, habitualmente clopidogrel, antes de pasar a anticoagulación sola según el contexto clínico.",
    perlaENARM: "FA + PCI no significa triple terapia prolongada. El principio es: anticoagulación necesaria + antiagregación necesaria durante el menor tiempo posible.",
    gpc: {
      mexico: "GPC IMSS-014-08, diagnóstico y tratamiento de fibrilación auricular; GPC mexicana relacionada con síndrome coronario agudo según contexto clínico.",
      internacional: "ESC 2024 Guidelines for the Management of Atrial Fibrillation; recomendaciones contemporáneas para pacientes con FA y SCA/PCI."
    },
    bibliografia: "Braunwald's Heart Disease, 12th ed.; Harrison's Principles of Internal Medicine, 21st ed.; ESC 2024 AF Guidelines."
  },

  {
    id: "CARD-152",
    especialidad: "Cardiología",
    tema: "Fibrilación auricular",
    subtema: "FA subclínica detectada por dispositivo",
    dificultad: "Muy alta",
    caso: "Mujer de 76 años con hipertensión y diabetes mellitus tipo 2 tiene un marcapasos bicameral. Durante la interrogación se detecta un episodio de frecuencia auricular rápida compatible con fibrilación auricular subclínica de 26 horas de duración. No presenta síntomas. Su riesgo tromboembólico es elevado y no tiene contraindicación para anticoagulación.",
    pregunta: "¿Cuál es la conducta más apropiada?",
    opciones: [
      "Ignorar el episodio porque no produjo síntomas",
      "Indicar aspirina como sustituto de anticoagulación",
      "Considerar anticoagulación oral después de confirmar el episodio y valorar riesgo tromboembólico y hemorrágico",
      "Indicar cardioversión eléctrica inmediata",
      "Implantar un segundo dispositivo para confirmar el diagnóstico"
    ],
    respuestaCorrecta: 2,
    explicacion: "La fibrilación auricular detectada por dispositivos plantea una decisión basada en duración de los episodios y riesgo tromboembólico. Un episodio prolongado, como uno de más de 24 horas, en un paciente con alto riesgo tromboembólico constituye un escenario en el que la anticoagulación puede estar indicada tras confirmar que el episodio corresponde realmente a FA y valorar el riesgo hemorrágico.",
    perlaENARM: "La FA subclínica no debe considerarse irrelevante por ser asintomática. Duración del episodio + riesgo tromboembólico son determinantes.",
    gpc: {
      mexico: "No se identifica una GPC mexicana específica y vigente que establezca por sí sola el manejo de FA subclínica detectada por dispositivos.",
      internacional: "ESC 2024 Guidelines for the Management of Atrial Fibrillation; recomendaciones sobre fibrilación auricular detectada por dispositivos."
    },
    bibliografia: "ESC 2024 AF Guidelines; Braunwald's Heart Disease, 12th ed.; Harrison's Principles of Internal Medicine, 21st ed."
  },

  {
    id: "CARD-153",
    especialidad: "Cardiología",
    tema: "Fibrilación auricular",
    subtema: "FA durante enfermedad aguda",
    dificultad: "Alta",
    caso: "Varón de 68 años sin antecedente conocido de FA ingresa por neumonía grave y choque séptico. Durante la hospitalización desarrolla FA con respuesta ventricular de 145 lpm. Después de controlar la sepsis y mejorar la oxigenación recupera ritmo sinusal espontáneamente. Su CHA₂DS₂-VASc es elevado.",
    pregunta: "¿Cuál es la afirmación más adecuada respecto a este episodio?",
    opciones: [
      "La FA debe considerarse siempre transitoria y nunca requiere seguimiento",
      "Al desaparecer con la sepsis, queda excluido el riesgo tromboembólico futuro",
      "Debe tratarse el desencadenante, documentar el episodio y reevaluar posteriormente recurrencia y riesgo tromboembólico",
      "Debe realizarse ablación durante el episodio séptico",
      "La presencia de sepsis contraindica permanentemente la anticoagulación"
    ],
    respuestaCorrecta: 2,
    explicacion: "La FA asociada a enfermedad aguda puede reaparecer y no debe etiquetarse automáticamente como un fenómeno completamente reversible. La prioridad inicial es tratar el desencadenante y estabilizar al paciente. Posteriormente debe reevaluarse la posibilidad de recurrencia, el riesgo tromboembólico y la necesidad de estrategias de prevención de evento vascular.",
    perlaENARM: "FA durante enfermedad aguda ≠ FA sin importancia. El episodio puede revelar un sustrato auricular previo.",
    gpc: {
      mexico: "GPC IMSS-014-08 relacionada con fibrilación auricular.",
      internacional: "ESC 2024 Guidelines for the Management of Atrial Fibrillation."
    },
    bibliografia: "ESC 2024 AF Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-154",
    especialidad: "Cardiología",
    tema: "Arritmias supraventriculares",
    subtema: "Flutter auricular típico",
    dificultad: "Alta",
    caso: "Varón de 59 años presenta palpitaciones recurrentes. El ECG muestra taquicardia auricular regular de aproximadamente 150 lpm con ondas F negativas en II, III y aVF y positivas en V1, compatibles con flutter auricular típico dependiente del istmo cavotricuspídeo. Los episodios persisten a pesar de tratamiento farmacológico.",
    pregunta: "¿Cuál es la estrategia definitiva más apropiada?",
    opciones: [
      "Ablación del istmo cavotricuspídeo",
      "Implantación de marcapasos definitivo",
      "Ablación del nodo AV como primera opción",
      "Cardioversión farmacológica repetida indefinidamente",
      "Digoxina como tratamiento curativo"
    ],
    respuestaCorrecta: 0,
    explicacion: "El flutter auricular típico dependiente del istmo cavotricuspídeo tiene un circuito anatómico bien definido y la ablación del istmo presenta una elevada eficacia. La necesidad de anticoagulación debe evaluarse de acuerdo con el riesgo tromboembólico, ya que el flutter comparte riesgo de tromboembolismo con la FA.",
    perlaENARM: "Flutter típico + recurrencia sintomática = pensar en ablación del istmo cavotricuspídeo.",
    gpc: {
      mexico: "GPC IMSS-014-08 relacionada con fibrilación auricular y arritmias auriculares.",
      internacional: "ESC 2024 Guidelines for the Management of Atrial Fibrillation; manejo contemporáneo de flutter auricular."
    },
    bibliografia: "Braunwald's Heart Disease, 12th ed.; ESC 2024 AF Guidelines."
  },

  {
    id: "CARD-155",
    especialidad: "Cardiología",
    tema: "Valvulopatías",
    subtema: "Estenosis mitral reumática y fibrilación auricular",
    dificultad: "Muy alta",
    caso: "Mujer de 54 años con antecedente de fiebre reumática presenta estenosis mitral reumática significativa y fibrilación auricular persistente. Su ecocardiograma muestra anatomía valvular favorable para intervención percutánea y no existe trombo auricular izquierdo.",
    pregunta: "¿Cuál es el anticoagulante de elección para prevención tromboembólica?",
    opciones: [
      "Apixabán",
      "Rivaroxabán",
      "Dabigatrán",
      "Warfarina",
      "Aspirina"
    ],
    respuestaCorrecta: 3,
    explicacion: "En fibrilación auricular asociada con estenosis mitral reumática significativa, los antagonistas de vitamina K continúan siendo el tratamiento anticoagulante de referencia. Los DOAC no sustituyen a la warfarina en este escenario.",
    perlaENARM: "FA + estenosis mitral reumática significativa = VKA. No extrapolar automáticamente los DOAC a este grupo.",
    gpc: {
      mexico: "GPC IMSS-235-09, diagnóstico y tratamiento de la enfermedad de la válvula mitral; GPC IMSS-014-08 relacionada con FA.",
      internacional: "ESC/EACTS 2025 Guidelines for the Management of Valvular Heart Disease; ESC 2024 AF Guidelines."
    },
    bibliografia: "ESC/EACTS 2025 Valvular Heart Disease Guidelines; ESC 2024 AF Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-156",
    especialidad: "Cardiología",
    tema: "Electrocardiografía",
    subtema: "Taquicardia de QRS ancho",
    dificultad: "Muy alta",
    caso: "Varón de 67 años con antecedente de infarto inferior presenta palpitaciones y taquicardia regular de QRS ancho a 180 lpm. El ECG muestra disociación AV y latidos de captura. Se encuentra hemodinámicamente estable.",
    pregunta: "¿Cuál es el diagnóstico más probable?",
    opciones: [
      "Taquicardia supraventricular con aberrancia",
      "Fibrilación auricular con aberrancia",
      "Taquicardia ventricular monomórfica",
      "Taquicardia auricular multifocal",
      "Taquicardia por reentrada nodal"
    ],
    respuestaCorrecta: 2,
    explicacion: "En una taquicardia regular de QRS ancho, la presencia de disociación auriculoventricular y latidos de captura constituye evidencia fuerte de origen ventricular. El antecedente de infarto aumenta todavía más la probabilidad de taquicardia ventricular por sustrato cicatricial.",
    perlaENARM: "Disociación AV + latidos de captura en taquicardia de QRS ancho = TV hasta demostrar lo contrario.",
    gpc: {
      mexico: "No se identifica una GPC mexicana específica vigente para algoritmos avanzados de diferenciación de taquicardia de QRS ancho.",
      internacional: "ESC 2022 Guidelines for Ventricular Arrhythmias and Prevention of Sudden Cardiac Death."
    },
    bibliografia: "Braunwald's Heart Disease, 12th ed.; ESC 2022 Ventricular Arrhythmias Guidelines; Harrison's 21st ed."
  },

  {
    id: "CARD-157",
    especialidad: "Cardiología",
    tema: "Arritmias ventriculares",
    subtema: "Taquicardia ventricular fascicular idiopática",
    dificultad: "Muy alta",
    caso: "Varón de 28 años sin cardiopatía estructural presenta episodios de taquicardia regular de QRS relativamente estrecho. El ECG durante la taquicardia muestra morfología de bloqueo de rama derecha con desviación marcada del eje. Los episodios responden previamente a verapamilo.",
    pregunta: "¿Cuál es el diagnóstico más probable?",
    opciones: [
      "Taquicardia ventricular fascicular sensible a verapamilo",
      "Taquicardia ventricular por cicatriz de infarto",
      "Taquicardia auricular multifocal",
      "Fibrilación auricular preexcitada",
      "Torsades de pointes"
    ],
    respuestaCorrecta: 0,
    explicacion: "La taquicardia ventricular fascicular idiopática suele presentarse en pacientes jóvenes sin cardiopatía estructural. La variedad posterior, la más frecuente, suele mostrar patrón de bloqueo de rama derecha con desviación izquierda del eje y es característica por su sensibilidad al verapamilo.",
    perlaENARM: "Paciente joven + TV relativamente estrecha + patrón fascicular + respuesta a verapamilo = TV fascicular.",
    gpc: {
      mexico: "No se identifica una GPC mexicana específica vigente para TV fascicular idiopática.",
      internacional: "ESC 2022 Guidelines for Ventricular Arrhythmias and Prevention of Sudden Cardiac Death."
    },
    bibliografia: "Braunwald's Heart Disease, 12th ed.; ESC 2022 Ventricular Arrhythmias Guidelines."
  },

  {
    id: "CARD-158",
    especialidad: "Cardiología",
    tema: "Arritmias ventriculares",
    subtema: "Taquicardia ventricular polimórfica con QT normal",
    dificultad: "Muy alta",
    caso: "Mujer de 63 años con dolor torácico intenso presenta taquicardia ventricular polimórfica. El QT corregido antes del episodio era normal. La presión arterial es 78/45 mmHg y existe elevación dinámica del segmento ST en derivaciones anteriores.",
    pregunta: "¿Cuál es la prioridad terapéutica?",
    opciones: [
      "Administrar sulfato de magnesio como tratamiento definitivo",
      "Realizar cardioversión sincronizada",
      "Realizar desfibrilación no sincronizada y tratar inmediatamente la isquemia subyacente",
      "Administrar verapamilo",
      "Iniciar únicamente betabloqueador oral"
    ],
    respuestaCorrecta: 2,
    explicacion: "La taquicardia ventricular polimórfica asociada con isquemia aguda y QT normal no corresponde a torsades de pointes. En un paciente inestable se requiere desfibrilación no sincronizada. Paralelamente debe identificarse y tratarse la isquemia coronaria responsable.",
    perlaENARM: "TV polimórfica + QT normal + isquemia = pensar primero en isquemia aguda, no en torsades.",
    gpc: {
      mexico: "GPC mexicana relacionada con síndrome coronario agudo según el contexto clínico.",
      internacional: "ESC 2022 Guidelines for Ventricular Arrhythmias and Prevention of Sudden Cardiac Death; guías contemporáneas de síndrome coronario agudo."
    },
    bibliografia: "Braunwald's Heart Disease, 12th ed.; ESC 2022 Ventricular Arrhythmias Guidelines."
  },

  {
    id: "CARD-159",
    especialidad: "Cardiología",
    tema: "Arritmias ventriculares",
    subtema: "Síndrome de Brugada y fiebre",
    dificultad: "Muy alta",
    caso: "Varón de 35 años presenta síncope durante un episodio febril. El ECG muestra elevación del ST ≥2 mm con morfología tipo 1 en V1-V2 colocadas en posición alta. No presenta alteraciones estructurales en el ecocardiograma.",
    pregunta: "¿Cuál es la interpretación más adecuada?",
    opciones: [
      "Es un hallazgo compatible únicamente con pericarditis",
      "El patrón tipo 1 en contexto clínico compatible sugiere síndrome de Brugada y la fiebre debe tratarse agresivamente",
      "El hallazgo confirma infarto anterior",
      "El patrón descarta riesgo de muerte súbita porque el ecocardiograma es normal",
      "Debe administrarse verapamilo como tratamiento definitivo"
    ],
    respuestaCorrecta: 1,
    explicacion: "El patrón electrocardiográfico tipo 1 en V1-V2, especialmente cuando aparece durante fiebre, es característico del síndrome de Brugada. La fiebre puede precipitar arritmias ventriculares y debe tratarse de manera temprana. En un paciente con síncope probablemente arrítmico se requiere valoración especializada para estratificación de riesgo.",
    perlaENARM: "Brugada + fiebre = tratar la fiebre rápidamente y evaluar riesgo arrítmico.",
    gpc: {
      mexico: "No se identifica una GPC mexicana específica vigente para síndrome de Brugada.",
      internacional: "ESC 2022 Guidelines for Ventricular Arrhythmias and Prevention of Sudden Cardiac Death."
    },
    bibliografia: "ESC 2022 Ventricular Arrhythmias Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-160",
    especialidad: "Cardiología",
    tema: "Electrocardiografía",
    subtema: "Síndrome de QT largo adquirido",
    dificultad: "Alta",
    caso: "Mujer de 71 años recibe un antibiótico que prolonga el QT. Presenta hipopotasemia de 2.7 mEq/L y desarrolla síncope. El ECG muestra QTc de 560 ms y episodios de taquicardia ventricular polimórfica con torsión de las puntas.",
    pregunta: "¿Cuál es el tratamiento inmediato más apropiado?",
    opciones: [
      "Amiodarona intravenosa",
      "Sulfato de magnesio intravenoso y corrección rápida de factores reversibles",
      "Verapamilo intravenoso",
      "Digoxina intravenosa",
      "Adenosina intravenosa"
    ],
    respuestaCorrecta: 1,
    explicacion: "La torsades de pointes asociada con QT prolongado requiere sulfato de magnesio intravenoso incluso cuando el magnesio sérico sea normal. Además deben suspenderse los fármacos que prolongan QT y corregirse rápidamente la hipopotasemia. En recurrencia con bradicardia puede considerarse aumento de la frecuencia cardiaca mediante estimulación.",
    perlaENARM: "Torsades = magnesio IV + retirar causa + corregir K/Mg; evitar fármacos que prolonguen más el QT.",
    gpc: {
      mexico: "No se identifica una GPC mexicana específica vigente para torsades de pointes.",
      internacional: "ESC 2022 Guidelines for Ventricular Arrhythmias and Prevention of Sudden Cardiac Death."
    },
    bibliografia: "ESC 2022 Ventricular Arrhythmias Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-161",
    especialidad: "Cardiología",
    tema: "Cardiomiopatías",
    subtema: "Miocardiopatía arritmogénica",
    dificultad: "Muy alta",
    caso: "Varón de 32 años con antecedente familiar de muerte súbita presenta síncope durante ejercicio. El ECG muestra inversión de ondas T en V1-V4 y extrasístoles ventriculares frecuentes con morfología compatible con origen del ventrículo derecho. La resonancia magnética demuestra dilatación regional del ventrículo derecho con alteraciones de la motilidad y fibrosis.",
    pregunta: "¿Cuál es el diagnóstico que debe considerarse prioritariamente?",
    opciones: [
      "Miocardiopatía arritmogénica",
      "Miocardiopatía hipertrófica obstructiva",
      "Miocarditis aguda aislada",
      "Pericarditis constrictiva",
      "Síndrome de Wolff-Parkinson-White"
    ],
    respuestaCorrecta: 0,
    explicacion: "La combinación de antecedente familiar de muerte súbita, arritmias ventriculares, alteraciones electrocardiográficas derechas y anomalías estructurales del ventrículo derecho en resonancia es altamente sugestiva de miocardiopatía arritmogénica. La evaluación debe ser multimodal e incluir historia familiar y, cuando esté indicado, estudio genético.",
    perlaENARM: "Arritmias ventriculares + alteraciones estructurales regionales del VD + antecedente familiar = pensar en miocardiopatía arritmogénica.",
    gpc: {
      mexico: "No se identifica una GPC mexicana específica vigente para miocardiopatía arritmogénica.",
      internacional: "ESC 2023 Guidelines for the Management of Cardiomyopathies."
    },
    bibliografia: "ESC 2023 Cardiomyopathies Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-162",
    especialidad: "Cardiología",
    tema: "Cardiomiopatías",
    subtema: "Miocardiopatía dilatada y genética",
    dificultad: "Muy alta",
    caso: "Mujer de 34 años presenta miocardiopatía dilatada con FEVI de 32%. Su padre falleció súbitamente a los 42 años y un hermano tiene miocardiopatía dilatada. No existen datos de cardiopatía isquémica ni exposición tóxica relevante.",
    pregunta: "¿Cuál es el siguiente paso etiológico más apropiado?",
    opciones: [
      "Concluir que se trata de miocardiopatía idiopática sin más estudios",
      "Realizar evaluación familiar y considerar estudio genético",
      "Suspender el tratamiento de insuficiencia cardiaca hasta obtener genética",
      "Realizar únicamente prueba de esfuerzo",
      "Indicar anticoagulación independientemente de la presencia de FA o trombo"
    ],
    respuestaCorrecta: 1,
    explicacion: "La presencia de múltiples familiares afectados y muerte súbita a edad temprana sugiere una miocardiopatía familiar. Las guías actuales promueven una evaluación sistemática del fenotipo, historia familiar y estudio genético cuando esté indicado, ya que determinados genotipos también modifican la estratificación de riesgo arrítmico.",
    perlaENARM: "Miocardiopatía + historia familiar de muerte súbita = no asumir idiopática; pensar en etiología genética.",
    gpc: {
      mexico: "No se identifica una GPC mexicana específica vigente para miocardiopatía dilatada genética.",
      internacional: "ESC 2023 Guidelines for the Management of Cardiomyopathies."
    },
    bibliografia: "ESC 2023 Cardiomyopathies Guidelines; Braunwald's Heart Disease, 12th ed.; Harrison's 21st ed."
  },

  {
    id: "CARD-163",
    especialidad: "Cardiología",
    tema: "Miocarditis",
    subtema: "Miocarditis fulminante",
    dificultad: "Muy alta",
    caso: "Varón de 29 años presenta infección viral reciente, dolor torácico y rápidamente desarrolla hipotensión, oliguria, lactato elevado y FEVI de 20%. La coronariografía no muestra enfermedad coronaria obstructiva. La resonancia cardiaca es compatible con inflamación miocárdica difusa. Requiere vasopresores e inotrópicos.",
    pregunta: "¿Cuál es la conducta más apropiada?",
    opciones: [
      "Dar de alta con AINE y seguimiento ambulatorio",
      "Considerar el cuadro una pericarditis aislada",
      "Manejo en centro especializado con soporte hemodinámico y consideración de biopsia endomiocárdica en el contexto apropiado",
      "Iniciar únicamente colchicina",
      "Realizar prueba de esfuerzo antes de iniciar tratamiento"
    ],
    respuestaCorrecta: 2,
    explicacion: "La miocarditis fulminante con choque cardiogénico constituye una presentación de alto riesgo que requiere atención en un centro con capacidad de soporte circulatorio avanzado. La biopsia endomiocárdica no se realiza rutinariamente en toda miocarditis, pero puede ser considerada en presentaciones graves seleccionadas cuando el resultado pueda modificar el tratamiento.",
    perlaENARM: "Miocarditis + choque cardiogénico = escenario de alto riesgo; soporte avanzado y etiología específica pueden modificar el manejo.",
    gpc: {
      mexico: "No se identifica una GPC mexicana específica vigente para miocarditis fulminante.",
      internacional: "ESC 2025 Guidelines for the Management of Myocarditis and Pericarditis."
    },
    bibliografia: "ESC 2025 Myocarditis and Pericarditis Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-164",
    especialidad: "Cardiología",
    tema: "Miocarditis",
    subtema: "Miocarditis con arritmias ventriculares",
    dificultad: "Muy alta",
    caso: "Mujer de 41 años presenta miocarditis confirmada por resonancia cardiaca. Durante la hospitalización desarrolla múltiples episodios de taquicardia ventricular sostenida. La FEVI es de 38%. Tras estabilización persiste fibrosis miocárdica extensa.",
    pregunta: "¿Cuál es el aspecto que adquiere especial importancia en el seguimiento?",
    opciones: [
      "Ignorar las arritmias porque la miocarditis siempre es reversible",
      "Estratificar cuidadosamente el riesgo de muerte súbita y recurrencia de arritmias ventriculares",
      "Indicar ejercicio intenso para valorar tolerancia",
      "Administrar únicamente AINE",
      "Suspender toda terapia de insuficiencia cardiaca"
    ],
    respuestaCorrecta: 1,
    explicacion: "La presencia de arritmias ventriculares sostenidas durante miocarditis y la persistencia de fibrosis miocárdica identificada por CMR son marcadores de mayor riesgo. El seguimiento debe integrar recuperación ventricular, carga arrítmica, extensión de fibrosis, etiología y riesgo de muerte súbita.",
    perlaENARM: "En miocarditis, la fibrosis residual no es un hallazgo meramente anatómico: puede tener implicaciones pronósticas y arrítmicas.",
    gpc: {
      mexico: "No se identifica una GPC mexicana específica vigente para miocarditis con arritmias ventriculares.",
      internacional: "ESC 2025 Guidelines for Myocarditis and Pericarditis; ESC 2022 Ventricular Arrhythmias Guidelines."
    },
    bibliografia: "ESC 2025 Myocarditis and Pericarditis Guidelines; ESC 2022 Ventricular Arrhythmias Guidelines."
  },

  {
    id: "CARD-165",
    especialidad: "Cardiología",
    tema: "Pericarditis",
    subtema: "Pericarditis recurrente",
    dificultad: "Alta",
    caso: "Mujer de 38 años presenta su tercer episodio de pericarditis en 18 meses. Ha recibido AINE y colchicina durante episodios previos, pero presenta nuevas recurrencias después de suspender el tratamiento. Actualmente persiste dolor pleurítico y elevación de proteína C reactiva.",
    pregunta: "¿Cuál es el enfoque terapéutico más apropiado en una recurrencia inflamatoria documentada?",
    opciones: [
      "Utilizar exclusivamente opioides",
      "Repetir únicamente antibióticos de amplio espectro",
      "Optimizar tratamiento antiinflamatorio y colchicina, y considerar terapias dirigidas a IL-1 en enfermedad recurrente seleccionada",
      "Indicar anticoagulación como tratamiento principal",
      "Realizar pericardiectomía inmediatamente"
    ],
    respuestaCorrecta: 2,
    explicacion: "La pericarditis recurrente inflamatoria requiere control adecuado de la inflamación y uso de colchicina cuando esté indicada. En pacientes con recurrencias pese a tratamiento convencional, especialmente con fenotipo inflamatorio persistente, pueden considerarse terapias dirigidas contra IL-1 en centros con experiencia.",
    perlaENARM: "Pericarditis recurrente inflamatoria refractaria = pensar en bloqueo de IL-1 en pacientes seleccionados.",
    gpc: {
      mexico: "No se identifica una GPC mexicana específica vigente para pericarditis recurrente.",
      internacional: "ESC 2025 Guidelines for the Management of Myocarditis and Pericarditis."
    },
    bibliografia: "ESC 2025 Myocarditis and Pericarditis Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-166",
    especialidad: "Cardiología",
    tema: "Pericardio",
    subtema: "Taponamiento cardiaco",
    dificultad: "Muy alta",
    caso: "Varón de 65 años presenta disnea progresiva, taquicardia, hipotensión y distensión yugular. El ecocardiograma muestra derrame pericárdico circunferencial con colapso de aurícula derecha y ventrículo derecho durante diástole, vena cava inferior dilatada y variación respiratoria marcada del flujo mitral.",
    pregunta: "¿Cuál es la intervención prioritaria si existe compromiso hemodinámico?",
    opciones: [
      "Diuresis agresiva",
      "Pericardiocentesis urgente o drenaje quirúrgico según contexto",
      "Betabloqueador intravenoso",
      "AINE y vigilancia ambulatoria",
      "Prueba de esfuerzo"
    ],
    respuestaCorrecta: 1,
    explicacion: "Los hallazgos clínicos y ecocardiográficos son compatibles con taponamiento cardiaco con compromiso hemodinámico. El tratamiento definitivo es el drenaje pericárdico urgente, mediante pericardiocentesis o abordaje quirúrgico dependiendo de la etiología, estabilidad y contexto anatómico.",
    perlaENARM: "Taponamiento con compromiso hemodinámico = drenaje. Los diuréticos pueden empeorar el llenado en este contexto.",
    gpc: {
      mexico: "No se identifica una GPC mexicana específica vigente para taponamiento cardiaco.",
      internacional: "ESC 2025 Guidelines for the Management of Myocarditis and Pericarditis."
    },
    bibliografia: "ESC 2025 Myocarditis and Pericarditis Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-167",
    especialidad: "Cardiología",
    tema: "Pericardio",
    subtema: "Pericarditis constrictiva",
    dificultad: "Muy alta",
    caso: "Varón de 57 años con antecedente de tuberculosis tratada presenta edema periférico, ascitis y disnea de esfuerzo. El ecocardiograma muestra engrosamiento pericárdico, movimiento septal paradójico y marcada variación respiratoria de los flujos mitral y tricuspídeo. La presión venosa yugular aumenta durante la inspiración.",
    pregunta: "¿Cuál es el diagnóstico más probable?",
    opciones: [
      "Insuficiencia cardiaca exclusivamente por disfunción sistólica del VI",
      "Pericarditis constrictiva",
      "Taponamiento cardiaco agudo",
      "Miocardiopatía hipertrófica",
      "Estenosis mitral grave"
    ],
    respuestaCorrecta: 1,
    explicacion: "La elevación de las presiones de llenado con interdependencia ventricular, variación respiratoria de los flujos y signo de Kussmaul favorecen constricción pericárdica. La tuberculosis es una etiología clásica de enfermedad pericárdica constrictiva.",
    perlaENARM: "Signo de Kussmaul + interdependencia ventricular + antecedente de enfermedad pericárdica = pensar en constricción.",
    gpc: {
      mexico: "No se identifica una GPC mexicana específica vigente para pericarditis constrictiva.",
      internacional: "ESC 2025 Guidelines for the Management of Myocarditis and Pericarditis."
    },
    bibliografia: "ESC 2025 Myocarditis and Pericarditis Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-168",
    especialidad: "Cardiología",
    tema: "Insuficiencia cardiaca",
    subtema: "HFpEF y fenotipo cardiometabólico",
    dificultad: "Muy alta",
    caso: "Mujer de 67 años con obesidad, hipertensión, diabetes tipo 2 y enfermedad renal crónica presenta disnea de esfuerzo y edema. La FEVI es de 62%. El ecocardiograma muestra hipertrofia ventricular izquierda y aumento de la presión de llenado. Los péptidos natriuréticos son solo discretamente elevados.",
    pregunta: "¿Cuál es la interpretación más apropiada?",
    opciones: [
      "La FEVI preservada descarta insuficiencia cardiaca",
      "El diagnóstico de HFpEF requiere integrar clínica, ecocardiografía, péptidos natriuréticos y contexto; la obesidad puede reducir los niveles de péptidos natriuréticos",
      "Los péptidos natriuréticos normales excluyen HFpEF en todos los pacientes",
      "La hipertrofia ventricular izquierda descarta HFpEF",
      "El tratamiento debe limitarse a diuréticos de asa"
    ],
    respuestaCorrecta: 1,
    explicacion: "HFpEF es un síndrome clínico que no se diagnostica por FEVI aislada. Se requiere integrar signos y síntomas, evidencia de presiones de llenado elevadas y pruebas complementarias. La obesidad puede disminuir los niveles de péptidos natriuréticos y dificultar el diagnóstico, por lo que un valor discretamente elevado o incluso menor de lo esperado no excluye HFpEF.",
    perlaENARM: "HFpEF no significa 'FEVI normal y ya'. La integración clínica y hemodinámica es fundamental.",
    gpc: {
      mexico: "GPC mexicana relacionada con insuficiencia cardiaca crónica según disponibilidad institucional.",
      internacional: "2026 ACC Expert Consensus Decision Pathway for Management of HFpEF."
    },
    bibliografia: "2026 ACC HFpEF Expert Consensus Decision Pathway; Braunwald's Heart Disease, 12th ed.; Harrison's 21st ed."
  },

  {
    id: "CARD-169",
    especialidad: "Cardiología",
    tema: "Insuficiencia cardiaca",
    subtema: "HFpEF + fibrilación auricular + obesidad + ERC",
    dificultad: "Muy alta",
    caso: "Varón de 71 años con HFpEF, fibrilación auricular, obesidad grado II, hipertensión y ERC presenta tres hospitalizaciones en el último año por congestión. Actualmente está euvolémico. Tiene diabetes tipo 2 y no existen contraindicaciones para inhibidores SGLT2.",
    pregunta: "¿Cuál representa el enfoque contemporáneo más apropiado?",
    opciones: [
      "Tratar exclusivamente la presión arterial",
      "Utilizar únicamente digoxina por la presencia de FA",
      "Realizar manejo integral de HFpEF incluyendo control de congestión, comorbilidades y tratamiento basado en evidencia como un inhibidor SGLT2 cuando sea apropiado",
      "Evitar ejercicio por tener HFpEF",
      "Suspender todo tratamiento una vez que desaparezca el edema"
    ],
    respuestaCorrecta: 2,
    explicacion: "El manejo moderno de HFpEF es multidimensional. Deben tratarse la congestión, hipertensión, FA, obesidad, diabetes, ERC y otras comorbilidades. Los inhibidores SGLT2 forman parte del tratamiento basado en evidencia de HFpEF y deben considerarse cuando no existan contraindicaciones.",
    perlaENARM: "HFpEF es un síndrome multisistémico: tratar solo la congestión es insuficiente.",
    gpc: {
      mexico: "GPC mexicana relacionada con insuficiencia cardiaca y comorbilidades según disponibilidad institucional.",
      internacional: "2026 ACC Expert Consensus Decision Pathway for Management of HFpEF."
    },
    bibliografia: "2026 ACC HFpEF Expert Consensus Decision Pathway; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-170",
    especialidad: "Cardiología",
    tema: "Cardiomiopatías",
    subtema: "Amiloidosis cardiaca",
    dificultad: "Muy alta",
    caso: "Varón de 76 años presenta insuficiencia cardiaca con FEVI de 48%, hipertrofia ventricular izquierda aparentemente inexplicada, aumento marcado de las presiones de llenado, síndrome del túnel carpiano bilateral y neuropatía periférica. El ECG muestra bajo voltaje relativo a la magnitud del engrosamiento ventricular.",
    pregunta: "¿Cuál es el siguiente paso diagnóstico más apropiado?",
    opciones: [
      "Concluir que se trata de hipertensión arterial de larga evolución",
      "Buscar una enfermedad infiltrativa y realizar estudio dirigido a amiloidosis, incluyendo evaluación de cadenas ligeras y, si procede, gammagrafía con trazador óseo",
      "Realizar únicamente prueba de esfuerzo",
      "Indicar anticoagulación independientemente del ritmo",
      "Descartar amiloidosis porque la FEVI no está gravemente reducida"
    ],
    respuestaCorrecta: 1,
    explicacion: "La combinación de hipertrofia ventricular aparentemente inexplicada, bajo voltaje relativo, insuficiencia cardiaca, neuropatía y síndrome del túnel carpiano debe hacer sospechar amiloidosis cardiaca. La evaluación diagnóstica requiere primero excluir una discrasia de células plasmáticas mediante estudios de cadenas ligeras y, cuando corresponde, utilizar gammagrafía con trazadores óseos para establecer ATTR en el contexto adecuado.",
    perlaENARM: "Hipertrofia ventricular + bajo voltaje + datos extracardiacos de infiltración = pensar en amiloidosis.",
    gpc: {
      mexico: "No se identifica una GPC mexicana específica vigente para diagnóstico de amiloidosis cardiaca.",
      internacional: "ESC 2023 Guidelines for Cardiomyopathies; ACC 2025 guidance on transthyretin cardiac amyloidosis."
    },
    bibliografia: "ESC 2023 Cardiomyopathies Guidelines; ACC 2025 Transthyretin Cardiac Amyloidosis guidance; Braunwald's Heart Disease, 12th ed."
  },
   {
    id: "CARD-171",
    especialidad: "Cardiología",
    tema: "Síndromes coronarios crónicos",
    subtema: "Diagnóstico de enfermedad coronaria",
    dificultad: "Muy alta",
    caso: "Mujer de 61 años con diabetes mellitus tipo 2, hipertensión y dislipidemia presenta disnea de esfuerzo y opresión torácica atípica al caminar rápidamente. No tiene cambios isquémicos en el ECG basal. Su probabilidad clínica de enfermedad coronaria obstructiva es intermedia. Se desea establecer inicialmente la presencia o ausencia de enfermedad coronaria anatómica.",
    pregunta: "¿Cuál es el estudio no invasivo más apropiado como estrategia inicial?",
    opciones: [
      "Prueba de esfuerzo exclusivamente con ECG",
      "Angiotomografía coronaria",
      "Coronariografía invasiva inmediata",
      "Holter de 24 horas",
      "Radiografía de tórax"
    ],
    respuestaCorrecta: 1,
    explicacion: "En pacientes con sospecha de síndrome coronario crónico y probabilidad clínica intermedia, la angiotomografía coronaria puede proporcionar información anatómica de alta calidad y tiene especial utilidad para descartar enfermedad coronaria obstructiva cuando la calidad de imagen es adecuada. La estrategia debe individualizarse según probabilidad clínica, disponibilidad y características del paciente.",
    perlaENARM: "En sospecha de enfermedad coronaria estable, no todo paciente requiere coronariografía invasiva de entrada.",
    gpc: {
      mexico: "GPC mexicana relacionada con diagnóstico y tratamiento de cardiopatía isquémica.",
      internacional: "ESC 2024 Guidelines for the Management of Chronic Coronary Syndromes."
    },
    bibliografia: "ESC 2024 Chronic Coronary Syndromes Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-172",
    especialidad: "Cardiología",
    tema: "Síndromes coronarios crónicos",
    subtema: "Angina vasoespástica",
    dificultad: "Muy alta",
    caso: "Varón de 48 años presenta episodios recurrentes de dolor torácico intenso que aparecen predominantemente durante la madrugada y desaparecen espontáneamente. Durante un episodio se documenta elevación transitoria del segmento ST que desaparece posteriormente. La coronariografía no demuestra lesiones obstructivas significativas.",
    pregunta: "¿Cuál es el tratamiento farmacológico de elección?",
    opciones: [
      "Betabloqueador como monoterapia",
      "Calcioantagonista",
      "Digoxina",
      "Ivabradina como tratamiento principal",
      "Fibrato"
    ],
    respuestaCorrecta: 1,
    explicacion: "El cuadro es característico de angina vasoespástica. Los calcioantagonistas son el tratamiento farmacológico fundamental porque reducen el vasoespasmo coronario. Los nitratos pueden utilizarse como tratamiento adicional. Los betabloqueadores no constituyen el tratamiento de elección y algunos pueden empeorar el vasoespasmo.",
    perlaENARM: "Dolor nocturno + elevación transitoria del ST + coronarias sin obstrucción significativa = vasoespasmo coronario.",
    gpc: {
      mexico: "GPC mexicana relacionada con cardiopatía isquémica.",
      internacional: "ESC 2024 Guidelines for Chronic Coronary Syndromes."
    },
    bibliografia: "ESC 2024 Chronic Coronary Syndromes Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-173",
    especialidad: "Cardiología",
    tema: "Síndromes coronarios crónicos",
    subtema: "Angina microvascular",
    dificultad: "Muy alta",
    caso: "Mujer de 56 años presenta dolor torácico de esfuerzo recurrente. La angiotomografía coronaria muestra ausencia de enfermedad coronaria obstructiva. Sin embargo, persisten síntomas importantes y una prueba funcional demuestra isquemia. La evaluación invasiva demuestra alteración de la reserva de flujo coronario sin evidencia de vasoespasmo epicárdico.",
    pregunta: "¿Cuál es el diagnóstico más probable?",
    opciones: [
      "MINOCA",
      "Angina microvascular por disfunción coronaria microvascular",
      "Pericarditis aguda",
      "Disección coronaria espontánea obligatoria",
      "Miocardiopatía hipertrófica"
    ],
    respuestaCorrecta: 1,
    explicacion: "La presencia de síntomas e isquemia sin enfermedad coronaria obstructiva, acompañada de alteración de la función microvascular, es compatible con angina microvascular dentro del espectro ANOCA/INOCA. El diagnóstico requiere integrar síntomas, evidencia objetiva de isquemia y evaluación de la función coronaria.",
    perlaENARM: "Coronarias no obstructivas no significa ausencia de enfermedad coronaria funcional.",
    gpc: {
      mexico: "No se identifica una GPC mexicana específica y vigente dedicada exclusivamente a ANOCA/INOCA.",
      internacional: "ESC 2024 Guidelines for Chronic Coronary Syndromes."
    },
    bibliografia: "ESC 2024 Chronic Coronary Syndromes Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-174",
    especialidad: "Cardiología",
    tema: "Síndromes coronarios agudos",
    subtema: "SCA con elevación transitoria del ST",
    dificultad: "Muy alta",
    caso: "Varón de 58 años consulta por dolor torácico intenso. El ECG inicial muestra elevación de ST en II, III y aVF. Diez minutos después el dolor desaparece y el ST se normaliza casi por completo. La troponina posteriormente se eleva. La coronariografía demuestra una lesión coronaria significativa.",
    pregunta: "¿Cuál es la interpretación más adecuada?",
    opciones: [
      "El cuadro no corresponde a síndrome coronario porque el ST se normalizó",
      "La normalización del ST elimina la necesidad de reperfusión",
      "La resolución espontánea del ST no elimina el diagnóstico de SCA y requiere estrategia invasiva apropiada",
      "El cuadro corresponde obligatoriamente a pericarditis",
      "La troponina no tiene utilidad después de la normalización del ST"
    ],
    respuestaCorrecta: 2,
    explicacion: "La resolución espontánea de la elevación del ST puede ocurrir por reperfusión espontánea, pero no elimina el diagnóstico de síndrome coronario agudo ni el riesgo de reoclusión. El paciente debe continuar siendo evaluado y tratado como un SCA de alto riesgo según el contexto clínico, electrocardiográfico y angiográfico.",
    perlaENARM: "ST que desaparece ≠ SCA resuelto. La reperfusión espontánea no elimina el riesgo de reoclusión.",
    gpc: {
      mexico: "GPC mexicana relacionada con síndrome coronario agudo e infarto agudo de miocardio.",
      internacional: "2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for the Management of Patients With Acute Coronary Syndromes."
    },
    bibliografia: "2025 ACC/AHA/ACEP/NAEMSP/SCAI ACS Guideline; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-175",
    especialidad: "Cardiología",
    tema: "Infarto agudo de miocardio",
    subtema: "Comunicación interventricular postinfarto",
    dificultad: "Muy alta",
    caso: "Mujer de 74 años desarrolla hipotensión y edema pulmonar cuatro días después de un infarto extenso. Presenta un nuevo soplo holosistólico intenso en el borde esternal inferior, acompañado de frémito. El ecocardiograma muestra un defecto interventricular con cortocircuito izquierda-derecha.",
    pregunta: "¿Cuál es la complicación mecánica más probable?",
    opciones: [
      "Ruptura de músculo papilar",
      "Comunicación interventricular postinfarto",
      "Ruptura de pared libre",
      "Aneurisma ventricular crónico",
      "Pericarditis de Dressler"
    ],
    respuestaCorrecta: 1,
    explicacion: "La comunicación interventricular postinfarto produce un nuevo soplo holosistólico, generalmente con frémito, y puede ocasionar deterioro hemodinámico y edema pulmonar. Es una emergencia mecánica que requiere valoración urgente por un equipo especializado para cierre quirúrgico o percutáneo según anatomía y condición clínica.",
    perlaENARM: "IAM + nuevo soplo holosistólico + choque = buscar comunicación interventricular o insuficiencia mitral aguda.",
    gpc: {
      mexico: "GPC mexicana relacionada con infarto agudo de miocardio y sus complicaciones.",
      internacional: "2025 ACC/AHA/ACEP/NAEMSP/SCAI ACS Guideline; ESC/EACTS 2025 Valvular Heart Disease Guidelines."
    },
    bibliografia: "Braunwald's Heart Disease, 12th ed.; 2025 ACC/AHA ACS Guideline."
  },

  {
    id: "CARD-176",
    especialidad: "Cardiología",
    tema: "Infarto agudo de miocardio",
    subtema: "Ruptura de músculo papilar",
    dificultad: "Muy alta",
    caso: "Varón de 69 años presenta infarto inferior y, 72 horas después, desarrolla disnea súbita, edema pulmonar y un nuevo soplo holosistólico apical. El ecocardiograma muestra insuficiencia mitral aguda grave y un músculo papilar con ruptura parcial.",
    pregunta: "¿Cuál es el mecanismo responsable de la insuficiencia cardiaca aguda?",
    opciones: [
      "Aumento crónico de la poscarga",
      "Ruptura de músculo papilar con insuficiencia mitral aguda",
      "Disfunción aislada del ventrículo derecho",
      "Pericarditis fibrinosa",
      "Comunicación interauricular"
    ],
    respuestaCorrecta: 1,
    explicacion: "La ruptura del músculo papilar es una complicación mecánica grave del IAM y produce insuficiencia mitral aguda. El paciente puede desarrollar edema pulmonar y choque cardiogénico rápidamente. Requiere estabilización hemodinámica y evaluación quirúrgica urgente.",
    perlaENARM: "IAM inferior + edema pulmonar súbito + nuevo soplo apical = ruptura del músculo papilar hasta demostrar lo contrario.",
    gpc: {
      mexico: "GPC mexicana relacionada con infarto agudo de miocardio y complicaciones mecánicas.",
      internacional: "2025 ACC/AHA/ACEP/NAEMSP/SCAI ACS Guideline; ESC/EACTS 2025 Valvular Heart Disease Guidelines."
    },
    bibliografia: "Braunwald's Heart Disease, 12th ed.; ESC/EACTS 2025 Valvular Heart Disease Guidelines."
  },

  {
    id: "CARD-177",
    especialidad: "Cardiología",
    tema: "Infarto agudo de miocardio",
    subtema: "Ruptura de pared libre",
    dificultad: "Muy alta",
    caso: "Mujer de 77 años presenta infarto transmural extenso. Al sexto día desarrolla dolor torácico súbito, pérdida de conciencia, hipotensión extrema y actividad eléctrica sin pulso. El ecocardiograma realizado inmediatamente antes del paro había mostrado un pequeño derrame pericárdico nuevo.",
    pregunta: "¿Cuál es la complicación más probable?",
    opciones: [
      "Ruptura de músculo papilar",
      "Comunicación interventricular",
      "Ruptura de pared libre ventricular con hemopericardio",
      "Pericarditis recurrente",
      "Aneurisma ventricular crónico"
    ],
    respuestaCorrecta: 2,
    explicacion: "La ruptura de la pared libre ventricular suele ocurrir varios días después de un IAM transmural y puede producir hemopericardio, taponamiento y muerte súbita con actividad eléctrica sin pulso. El derrame pericárdico nuevo antes del deterioro es una señal de alarma.",
    perlaENARM: "IAM transmural + deterioro súbito + PEA + derrame pericárdico = ruptura de pared libre.",
    gpc: {
      mexico: "GPC mexicana relacionada con infarto agudo de miocardio y complicaciones mecánicas.",
      internacional: "2025 ACC/AHA/ACEP/NAEMSP/SCAI ACS Guideline."
    },
    bibliografia: "Braunwald's Heart Disease, 12th ed.; Harrison's Principles of Internal Medicine, 21st ed."
  },

  {
    id: "CARD-178",
    especialidad: "Cardiología",
    tema: "Choque cardiogénico",
    subtema: "Revascularización en choque cardiogénico",
    dificultad: "Muy alta",
    caso: "Varón de 64 años con IAM con elevación del ST desarrolla choque cardiogénico. La coronariografía muestra enfermedad multivaso con una lesión culpable claramente identificada. Existe hipotensión persistente y datos de hipoperfusión.",
    pregunta: "¿Cuál es la estrategia de revascularización inicial generalmente preferida?",
    opciones: [
      "PCI inmediata de todos los vasos con lesiones angiográficamente significativas",
      "PCI de la arteria culpable con estrategia inicial de vaso culpable",
      "Tratamiento exclusivamente médico",
      "Cirugía de revascularización siempre antes de cualquier PCI",
      "No realizar revascularización hasta que desaparezca el choque"
    ],
    respuestaCorrecta: 1,
    explicacion: "En el choque cardiogénico asociado con IAM y enfermedad multivaso, la estrategia inicial de revascularización de la arteria culpable ha demostrado ser preferible a realizar PCI rutinaria inmediata de todas las lesiones no culpables. La revascularización de otros vasos puede considerarse posteriormente según evolución y anatomía.",
    perlaENARM: "IAM + choque cardiogénico + multivaso: primero vaso culpable, no PCI rutinaria inmediata de todos los vasos.",
    gpc: {
      mexico: "GPC mexicana relacionada con IAM con elevación del ST y choque cardiogénico.",
      internacional: "2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for Acute Coronary Syndromes."
    },
    bibliografia: "2025 ACC/AHA/ACEP/NAEMSP/SCAI ACS Guideline; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-179",
    especialidad: "Cardiología",
    tema: "Choque cardiogénico",
    subtema: "Fenotipo hemodinámico",
    dificultad: "Muy alta",
    caso: "Paciente de 68 años con IAM extenso presenta presión arterial de 82/50 mmHg, piel fría y húmeda, confusión, oliguria, lactato elevado y congestión pulmonar. El ecocardiograma muestra FEVI de 20%.",
    pregunta: "¿Cuál es la clasificación clínica más apropiada?",
    opciones: [
      "Caliente y seco",
      "Caliente y húmedo",
      "Frío y seco",
      "Frío y húmedo",
      "Choque distributivo sin congestión"
    ],
    respuestaCorrecta: 3,
    explicacion: "La combinación de hipoperfusión clínica —piel fría, alteración del estado mental, oliguria y lactato elevado— con congestión pulmonar corresponde al fenotipo frío y húmedo. En este escenario deben abordarse simultáneamente la causa, la perfusión y la congestión.",
    perlaENARM: "Frío = hipoperfusión; húmedo = congestión. Frío + húmedo = choque cardiogénico con congestión.",
    gpc: {
      mexico: "GPC mexicana relacionada con insuficiencia cardiaca aguda y choque cardiogénico.",
      internacional: "ACC/AHA contemporary heart failure and cardiogenic shock guidance."
    },
    bibliografia: "Braunwald's Heart Disease, 12th ed.; Harrison's Principles of Internal Medicine, 21st ed."
  },

  {
    id: "CARD-180",
    especialidad: "Cardiología",
    tema: "Choque cardiogénico",
    subtema: "Soporte circulatorio mecánico",
    dificultad: "Muy alta",
    caso: "Varón de 59 años con IAM y choque cardiogénico continúa con hipoperfusión grave a pesar de revascularización, vasopresor e inotrópico. Presenta lactato persistentemente elevado y deterioro renal. Se encuentra en un centro con programa de soporte circulatorio mecánico avanzado.",
    pregunta: "¿Cuál es el objetivo principal de considerar soporte circulatorio mecánico temporal en este contexto?",
    opciones: [
      "Sustituir indefinidamente el tratamiento de la enfermedad coronaria",
      "Proporcionar soporte hemodinámico temporal en pacientes seleccionados con choque refractario",
      "Eliminar la necesidad de revascularización",
      "Prevenir cualquier tipo de arritmia",
      "Utilizarlo rutinariamente en todo IAM"
    ],
    respuestaCorrecta: 1,
    explicacion: "El soporte circulatorio mecánico temporal puede considerarse en pacientes cuidadosamente seleccionados con choque cardiogénico refractario y deterioro persistente de la perfusión. No es una intervención rutinaria para todos los pacientes con IAM y debe individualizarse según fenotipo hemodinámico, etiología, anatomía, complicaciones y objetivos de recuperación o puente terapéutico.",
    perlaENARM: "Soporte mecánico temporal = terapia de rescate seleccionada, no sustituto universal de revascularización ni tratamiento rutinario.",
    gpc: {
      mexico: "GPC mexicana relacionada con choque cardiogénico e infarto agudo de miocardio.",
      internacional: "Contemporary ACC/AHA guidance for cardiogenic shock and acute coronary syndromes."
    },
    bibliografia: "Braunwald's Heart Disease, 12th ed.; ACC/AHA contemporary cardiogenic shock guidance."
  },

  {
    id: "CARD-181",
    especialidad: "Cardiología",
    tema: "Aorta",
    subtema: "Disección aórtica tipo A",
    dificultad: "Muy alta",
    caso: "Varón de 63 años presenta dolor torácico súbito de máxima intensidad desde el inicio. Tiene déficit neurológico transitorio y una diferencia de presión arterial de 35 mmHg entre ambos brazos. La angiotomografía demuestra una disección que compromete la aorta ascendente.",
    pregunta: "¿Cuál es la conducta definitiva?",
    opciones: [
      "Tratamiento médico exclusivo",
      "Anticoagulación plena inmediata",
      "Cirugía urgente",
      "Trombólisis intravenosa",
      "Alta con control ambulatorio"
    ],
    respuestaCorrecta: 2,
    explicacion: "La disección que compromete la aorta ascendente corresponde a síndrome aórtico agudo tipo A y constituye una emergencia quirúrgica. El tratamiento médico con control de frecuencia y presión arterial es fundamental como estabilización inicial, pero no sustituye la reparación quirúrgica urgente.",
    perlaENARM: "Disección tipo A = cirugía urgente. El tratamiento médico es puente, no tratamiento definitivo.",
    gpc: {
      mexico: "GPC IMSS-414-10, diagnóstico y tratamiento de disección aguda de aorta torácica descendente; para tipo A se requiere integración con recomendaciones cardiovasculares especializadas.",
      internacional: "ESC 2024 Guidelines for Peripheral Arterial and Aortic Diseases."
    },
    bibliografia: "ESC 2024 Peripheral Arterial and Aortic Diseases Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-182",
    especialidad: "Cardiología",
    tema: "Aorta",
    subtema: "Síndrome aórtico agudo y tratamiento inicial",
    dificultad: "Muy alta",
    caso: "Paciente con sospecha de disección aórtica presenta presión arterial de 205/115 mmHg y frecuencia cardiaca de 118 lpm. Está consciente y perfundido. La angiotomografía aún no se ha realizado.",
    pregunta: "¿Cuál es la estrategia farmacológica inicial más apropiada mientras se completa la evaluación?",
    opciones: [
      "Nifedipino sublingual como primera medida",
      "Betabloqueador intravenoso para reducir frecuencia y estrés parietal, seguido de vasodilatador si es necesario",
      "Diurético intravenoso como único tratamiento",
      "Aspirina y clopidogrel",
      "Trombólisis sistémica"
    ],
    respuestaCorrecta: 1,
    explicacion: "En el síndrome aórtico agudo, la reducción de la fuerza de eyección y del estrés parietal es fundamental. Los betabloqueadores intravenosos se utilizan inicialmente para controlar la frecuencia y la contractilidad. Si la presión continúa elevada, puede añadirse un vasodilatador después del control beta-adrenérgico.",
    perlaENARM: "Disección: primero disminuir el impulso ventricular con betabloqueador; después controlar la presión con vasodilatador si es necesario.",
    gpc: {
      mexico: "GPC IMSS-414-10 relacionada con disección aguda de aorta torácica.",
      internacional: "ESC 2024 Guidelines for Peripheral Arterial and Aortic Diseases."
    },
    bibliografia: "ESC 2024 Peripheral Arterial and Aortic Diseases Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-183",
    especialidad: "Cardiología",
    tema: "Aorta",
    subtema: "Hematoma intramural",
    dificultad: "Muy alta",
    caso: "Mujer de 72 años con hipertensión de larga evolución presenta dolor torácico súbito. La angiotomografía muestra engrosamiento creciente de la pared aórtica con imagen semilunar hiperdensa que no presenta un colgajo intimal evidente ni luz falsa claramente identificable.",
    pregunta: "¿Cuál es el diagnóstico más probable?",
    opciones: [
      "Aneurisma micótico",
      "Hematoma intramural aórtico",
      "Coartación de aorta",
      "Aneurisma ventricular",
      "Pericarditis aguda"
    ],
    respuestaCorrecta: 1,
    explicacion: "El hematoma intramural forma parte de los síndromes aórticos agudos y se caracteriza por hemorragia dentro de la media sin un colgajo intimal clásico de disección. En la imagen puede observarse engrosamiento semilunar o circular de la pared aórtica.",
    perlaENARM: "Síndrome aórtico agudo no siempre significa encontrar un flap: hematoma intramural es una entidad clave.",
    gpc: {
      mexico: "GPC IMSS-414-10 relacionada con síndrome aórtico agudo.",
      internacional: "ESC 2024 Guidelines for Peripheral Arterial and Aortic Diseases."
    },
    bibliografia: "ESC 2024 Peripheral Arterial and Aortic Diseases Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-184",
    especialidad: "Cardiología",
    tema: "Aorta",
    subtema: "Aneurisma de aorta abdominal",
    dificultad: "Alta",
    caso: "Varón de 72 años, fumador activo, presenta aneurisma de aorta abdominal infrarrenal de 6.2 cm de diámetro, descubierto durante un estudio realizado por otra causa. Se encuentra asintomático y hemodinámicamente estable.",
    pregunta: "¿Cuál es la conducta general más apropiada?",
    opciones: [
      "No requiere seguimiento porque es asintomático",
      "Tratamiento farmacológico exclusivo sin valoración anatómica",
      "Valoración para reparación electiva por el tamaño del aneurisma",
      "Trombólisis profiláctica",
      "Anticoagulación obligatoria"
    ],
    respuestaCorrecta: 2,
    explicacion: "Un aneurisma de aorta abdominal de este tamaño presenta un riesgo de ruptura suficientemente elevado para justificar valoración para reparación electiva, considerando diámetro, crecimiento, síntomas, anatomía y riesgo quirúrgico. La estrategia puede ser cirugía abierta o reparación endovascular según anatomía y características del paciente.",
    perlaENARM: "AAA grande no se maneja solo con vigilancia: valorar reparación electiva según diámetro, crecimiento, síntomas y anatomía.",
    gpc: {
      mexico: "No se identifica una GPC mexicana específica y vigente que sustituya la valoración especializada contemporánea de AAA.",
      internacional: "ESC 2024 Guidelines for Peripheral Arterial and Aortic Diseases."
    },
    bibliografia: "ESC 2024 Peripheral Arterial and Aortic Diseases Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-185",
    especialidad: "Cardiología",
    tema: "Hipertensión pulmonar",
    subtema: "Clasificación hemodinámica",
    dificultad: "Muy alta",
    caso: "Mujer de 55 años con disnea progresiva presenta presión arterial pulmonar media elevada en cateterismo derecho. La presión de enclavamiento pulmonar es de 10 mmHg y la resistencia vascular pulmonar está elevada.",
    pregunta: "¿Qué patrón hemodinámico corresponde a hipertensión pulmonar precapilar?",
    opciones: [
      "mPAP elevada con PAWP >18 mmHg y RVP normal",
      "mPAP elevada, PAWP ≤15 mmHg y RVP >2 WU",
      "mPAP normal con PAWP elevada",
      "PAWP elevada con RVP normal y mPAP normal",
      "Solo presión sistólica pulmonar elevada en ecocardiograma"
    ],
    respuestaCorrecta: 1,
    explicacion: "La hipertensión pulmonar precapilar se caracteriza hemodinámicamente por presión arterial pulmonar media >20 mmHg, presión de enclavamiento ≤15 mmHg y resistencia vascular pulmonar >2 unidades Wood. El cateterismo derecho es el estándar para establecer la clasificación hemodinámica.",
    perlaENARM: "Para clasificar hipertensión pulmonar no basta el ecocardiograma: el cateterismo derecho define la hemodinámica.",
    gpc: {
      mexico: "GPC IMSS-433-11 relacionada con hipertensión arterial pulmonar primaria.",
      internacional: "ESC/ERS 2022 Guidelines for the Diagnosis and Treatment of Pulmonary Hypertension."
    },
    bibliografia: "ESC/ERS 2022 Pulmonary Hypertension Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-186",
    especialidad: "Cardiología",
    tema: "Hipertensión pulmonar",
    subtema: "Hipertensión pulmonar por enfermedad izquierda",
    dificultad: "Muy alta",
    caso: "Varón de 70 años con insuficiencia cardiaca con FEVI preservada presenta disnea progresiva. El cateterismo derecho muestra presión arterial pulmonar media de 38 mmHg, presión de enclavamiento pulmonar de 22 mmHg y resistencia vascular pulmonar de 1.8 WU.",
    pregunta: "¿Cuál es la clasificación hemodinámica más apropiada?",
    opciones: [
      "Hipertensión pulmonar precapilar",
      "Hipertensión pulmonar poscapilar aislada",
      "Hipertensión pulmonar tromboembólica crónica",
      "Hipertensión arterial pulmonar idiopática",
      "Hipertensión pulmonar por hipoxia exclusivamente"
    ],
    respuestaCorrecta: 1,
    explicacion: "La presión de enclavamiento >15 mmHg indica un componente poscapilar relacionado con enfermedad del corazón izquierdo. Al no existir elevación de la resistencia vascular pulmonar por encima del umbral contemporáneo, corresponde a hipertensión pulmonar poscapilar aislada.",
    perlaENARM: "PAWP >15 mmHg orienta a componente poscapilar; la RVP determina si existe además componente precapilar.",
    gpc: {
      mexico: "GPC mexicana relacionada con insuficiencia cardiaca e hipertensión pulmonar.",
      internacional: "ESC/ERS 2022 Guidelines for Pulmonary Hypertension."
    },
    bibliografia: "ESC/ERS 2022 Pulmonary Hypertension Guidelines; 2026 ACC HFpEF Expert Consensus."
  },

  {
    id: "CARD-187",
    especialidad: "Cardiología",
    tema: "Hipertensión pulmonar",
    subtema: "Hipertensión pulmonar tromboembólica crónica",
    dificultad: "Muy alta",
    caso: "Mujer de 52 años presenta disnea persistente ocho meses después de un episodio de embolia pulmonar tratado adecuadamente. La ecocardiografía muestra dilatación del ventrículo derecho y presión pulmonar elevada. La gammagrafía V/Q demuestra múltiples defectos de perfusión segmentarios persistentes.",
    pregunta: "¿Cuál es el diagnóstico que debe sospecharse?",
    opciones: [
      "Hipertensión arterial pulmonar idiopática",
      "Hipertensión pulmonar tromboembólica crónica",
      "Insuficiencia cardiaca izquierda aislada",
      "Pericarditis constrictiva",
      "EPOC como explicación obligatoria"
    ],
    respuestaCorrecta: 1,
    explicacion: "La disnea persistente después de una embolia pulmonar, acompañada de hipertensión pulmonar y defectos de perfusión persistentes, obliga a considerar hipertensión pulmonar tromboembólica crónica. La gammagrafía V/Q tiene un papel fundamental en su detección y el paciente debe ser referido a un centro especializado.",
    perlaENARM: "Disnea persistente post-TEP + defectos perfusorios persistentes = buscar CTEPH.",
    gpc: {
      mexico: "No se identifica una GPC mexicana específica y vigente para CTEPH.",
      internacional: "ESC/ERS 2022 Guidelines for Pulmonary Hypertension."
    },
    bibliografia: "ESC/ERS 2022 Pulmonary Hypertension Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-188",
    especialidad: "Cardiología",
    tema: "Hipertensión pulmonar",
    subtema: "Embolia pulmonar crónica e intervención",
    dificultad: "Muy alta",
    caso: "Varón de 49 años presenta hipertensión pulmonar tromboembólica crónica sintomática. Los estudios de imagen muestran trombos organizados predominantemente en arterias pulmonares proximales y se considera técnicamente candidato a cirugía.",
    pregunta: "¿Cuál es el tratamiento potencialmente curativo que debe evaluarse?",
    opciones: [
      "Endarterectomía pulmonar",
      "Ablación del nodo AV",
      "Valvuloplastia mitral",
      "TAVI",
      "Implante de desfibrilador como tratamiento etiológico"
    ],
    respuestaCorrecta: 0,
    explicacion: "En pacientes con hipertensión pulmonar tromboembólica crónica operable, la endarterectomía pulmonar es un tratamiento potencialmente curativo y debe realizarse en centros expertos. La operabilidad depende de la distribución anatómica, correlación entre lesiones y hemodinámica y experiencia del centro.",
    perlaENARM: "CTEPH operable = pensar en endarterectomía pulmonar, no solamente en vasodilatadores pulmonares.",
    gpc: {
      mexico: "No se identifica una GPC mexicana específica y vigente para CTEPH operable.",
      internacional: "ESC/ERS 2022 Guidelines for Pulmonary Hypertension."
    },
    bibliografia: "ESC/ERS 2022 Pulmonary Hypertension Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-189",
    especialidad: "Cardiología",
    tema: "Cor pulmonale",
    subtema: "Descompensación del ventrículo derecho",
    dificultad: "Muy alta",
    caso: "Paciente con hipertensión pulmonar avanzada presenta hipotensión, distensión yugular, edema periférico, hepatomegalia y extremidades frías. El ecocardiograma muestra dilatación severa del ventrículo derecho con deterioro de su función y un ventrículo izquierdo pequeño por interdependencia ventricular.",
    pregunta: "¿Cuál es el mecanismo fisiopatológico que explica mejor la hipotensión?",
    opciones: [
      "Aumento del llenado del ventrículo izquierdo por dilatación del VD",
      "Desplazamiento septal e interdependencia ventricular con reducción del llenado del VI",
      "Aumento aislado de la contractilidad del VI",
      "Disminución de la resistencia vascular pulmonar",
      "Aumento del retorno venoso efectivo al VI"
    ],
    respuestaCorrecta: 1,
    explicacion: "La sobrecarga grave del ventrículo derecho puede desplazar el septum interventricular hacia la izquierda, reducir el llenado del ventrículo izquierdo y disminuir el gasto cardiaco. Este fenómeno de interdependencia ventricular es especialmente relevante en la insuficiencia ventricular derecha avanzada.",
    perlaENARM: "VD dilatado severamente → septum hacia VI → menor llenado del VI → disminución del gasto cardiaco.",
    gpc: {
      mexico: "GPC IMSS-036-08 relacionada con cor pulmonale.",
      internacional: "ESC/ERS 2022 Guidelines for Pulmonary Hypertension."
    },
    bibliografia: "ESC/ERS 2022 Pulmonary Hypertension Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-190",
    especialidad: "Cardiología",
    tema: "Cardiología integrativa",
    subtema: "Disnea multifactorial y diagnóstico diferencial",
    dificultad: "Muy alta",
    caso: "Mujer de 69 años con obesidad, hipertensión, fibrilación auricular y antecedente de embolia pulmonar consulta por disnea progresiva. Tiene FEVI de 60%, presión de enclavamiento pulmonar de 21 mmHg, presión arterial pulmonar media de 34 mmHg y resistencia vascular pulmonar de 3.1 WU. La angiotomografía no muestra embolia pulmonar aguda.",
    pregunta: "¿Cuál es la interpretación hemodinámica más apropiada?",
    opciones: [
      "Hipertensión pulmonar exclusivamente precapilar",
      "Hipertensión pulmonar exclusivamente poscapilar",
      "Hipertensión pulmonar combinada poscapilar y precapilar",
      "Presiones pulmonares normales",
      "Hipertensión pulmonar exclusivamente por embolia pulmonar aguda"
    ],
    respuestaCorrecta: 2,
    explicacion: "La presión de enclavamiento >15 mmHg demuestra un componente poscapilar, mientras que una resistencia vascular pulmonar >2 WU indica un componente precapilar adicional. Por lo tanto, el patrón corresponde a hipertensión pulmonar combinada poscapilar y precapilar. En este contexto deben investigarse enfermedad cardiaca izquierda, remodelado vascular pulmonar y otras causas contribuyentes.",
    perlaENARM: "PAWP >15 + RVP >2 WU = hipertensión pulmonar combinada poscapilar y precapilar.",
    gpc: {
      mexico: "GPC mexicana relacionada con insuficiencia cardiaca e hipertensión pulmonar.",
      internacional: "ESC/ERS 2022 Guidelines for Pulmonary Hypertension; 2026 ACC HFpEF Expert Consensus."
    },
    bibliografia: "ESC/ERS 2022 Pulmonary Hypertension Guidelines; 2026 ACC HFpEF Expert Consensus; Braunwald's Heart Disease, 12th ed."
  },
     {
    id: "CARD-191",
    especialidad: "Cardiología",
    tema: "Prevención cardiovascular",
    subtema: "Dislipidemia y riesgo cardiovascular",
    dificultad: "Muy alta",
    caso: "Varón de 43 años, sin enfermedad cardiovascular conocida, presenta LDL-C de 198 mg/dL confirmado en dos determinaciones. Su presión arterial es de 128/76 mmHg, no fuma y no tiene diabetes. Su padre presentó un infarto a los 48 años.",
    pregunta: "¿Cuál es la conducta más apropiada?",
    opciones: [
      "Calcular únicamente el riesgo cardiovascular a 10 años y decidir según el resultado",
      "Indicar estatina de alta intensidad independientemente del cálculo convencional de riesgo",
      "Indicar únicamente cambios en el estilo de vida durante un año",
      "Solicitar primero una prueba de esfuerzo",
      "Solicitar únicamente calcio coronario antes de iniciar cualquier tratamiento"
    ],
    respuestaCorrecta: 1,
    explicacion: "Un LDL-C ≥190 mg/dL representa hipercolesterolemia primaria grave y constituye una indicación para tratamiento farmacológico intensivo sin necesidad de utilizar el riesgo cardiovascular a 10 años para decidir si iniciar estatina. Además, el antecedente familiar de enfermedad cardiovascular prematura aumenta la sospecha de hipercolesterolemia familiar.",
    perlaENARM: "LDL-C ≥190 mg/dL = tratar intensivamente; no esperar al cálculo de riesgo a 10 años.",
    gpc: {
      mexico: "GPC mexicana relacionada con prevención y riesgo cardiovascular; debe integrarse con criterios actuales de dislipidemia.",
      internacional: "2026 ACC/AHA/AACVPR/ABC/ACPM/ADA/AGS/APhA/ASPC/NLA/PCNA Guideline on the Management of Dyslipidemia."
    },
    bibliografia: "2026 ACC/AHA Dyslipidemia Guideline; Braunwald's Heart Disease, 12th ed.; Harrison's Principles of Internal Medicine, 21st ed."
  },

  {
    id: "CARD-192",
    especialidad: "Cardiología",
    tema: "Prevención cardiovascular",
    subtema: "Lipoproteína(a)",
    dificultad: "Muy alta",
    caso: "Mujer de 52 años con LDL-C de 116 mg/dL presenta antecedente familiar de infarto prematuro en su hermano a los 44 años. Su riesgo cardiovascular calculado es intermedio. No se conocen determinaciones previas de lipoproteína(a).",
    pregunta: "¿Cuál es el estudio adicional particularmente útil para refinar la evaluación de riesgo?",
    opciones: [
      "Troponina ultrasensible seriada",
      "Lipoproteína(a)",
      "CK-MB basal",
      "Dímero D",
      "NT-proBNP exclusivamente"
    ],
    respuestaCorrecta: 1,
    explicacion: "La lipoproteína(a) es un factor de riesgo causal para enfermedad cardiovascular aterosclerótica y presenta una fuerte determinación genética. La guía ACC/AHA 2026 recomienda medirla al menos una vez en todos los adultos, con especial utilidad cuando existe antecedente familiar de enfermedad cardiovascular prematura o incertidumbre en la estratificación del riesgo.",
    perlaENARM: "Lp(a) elevada puede reclasificar el riesgo; la recomendación contemporánea es medirla al menos una vez en la vida adulta.",
    gpc: {
      mexico: "No se identifica una GPC mexicana específica vigente dedicada a Lp(a).",
      internacional: "2026 ACC/AHA Multisociety Guideline on the Management of Dyslipidemia."
    },
    bibliografia: "2026 ACC/AHA Dyslipidemia Guideline; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-193",
    especialidad: "Cardiología",
    tema: "Prevención cardiovascular",
    subtema: "Calcio coronario",
    dificultad: "Muy alta",
    caso: "Varón de 56 años sin ASCVD conocida presenta riesgo cardiovascular en una categoría donde existe incertidumbre sobre iniciar tratamiento hipolipemiante. Después de una conversación sobre riesgos y beneficios persiste indecisión. No tiene diabetes ni LDL-C ≥190 mg/dL.",
    pregunta: "¿Qué estudio puede ayudar a reclasificar el riesgo en este escenario?",
    opciones: [
      "Calcio coronario mediante CT",
      "Prueba de esfuerzo obligatoria",
      "Coronariografía invasiva",
      "Ecocardiograma transesofágico",
      "Holter de 24 horas"
    ],
    respuestaCorrecta: 0,
    explicacion: "La puntuación de calcio arterial coronario puede utilizarse en pacientes seleccionados de prevención primaria cuando persiste incertidumbre sobre la indicación de estatina. La presencia y magnitud de calcificación coronaria ayudan a reclasificar el riesgo aterosclerótico y deben interpretarse dentro del contexto clínico global.",
    perlaENARM: "CAC es una herramienta de reclasificación de riesgo; no es un estudio de rutina para todos los pacientes.",
    gpc: {
      mexico: "GPC mexicana relacionada con evaluación del riesgo cardiovascular.",
      internacional: "2026 ACC/AHA Multisociety Guideline on the Management of Dyslipidemia."
    },
    bibliografia: "2026 ACC/AHA Dyslipidemia Guideline; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-194",
    especialidad: "Cardiología",
    tema: "Prevención cardiovascular",
    subtema: "Prevención secundaria y objetivos de LDL",
    dificultad: "Muy alta",
    caso: "Mujer de 63 años con antecedente de infarto agudo de miocardio presenta LDL-C de 72 mg/dL mientras recibe una estatina de alta intensidad. No presenta intolerancia farmacológica.",
    pregunta: "¿Cuál es la conducta más apropiada en una paciente con enfermedad aterosclerótica de muy alto riesgo?",
    opciones: [
      "Considerar que LDL 72 mg/dL es suficientemente bajo y no modificar el tratamiento",
      "Intensificar el tratamiento hipolipemiante para alcanzar objetivos más bajos",
      "Suspender la estatina por haber sufrido un IAM",
      "Cambiar estatina por fibrato como monoterapia",
      "Utilizar únicamente niacina"
    ],
    respuestaCorrecta: 1,
    explicacion: "En prevención secundaria, los pacientes con riesgo aterosclerótico muy alto requieren objetivos de LDL-C más bajos. La guía ACC/AHA 2026 refuerza la utilización de objetivos lipídicos y recomienda intensificar el tratamiento con terapias no estatínicas cuando la estatina máxima tolerada no permite alcanzar el objetivo.",
    perlaENARM: "En prevención secundaria de muy alto riesgo, LDL 72 mg/dL no necesariamente significa 'objetivo alcanzado'.",
    gpc: {
      mexico: "GPC mexicana relacionada con prevención secundaria y cardiopatía isquémica.",
      internacional: "2026 ACC/AHA Multisociety Guideline on the Management of Dyslipidemia."
    },
    bibliografia: "2026 ACC/AHA Dyslipidemia Guideline; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-195",
    especialidad: "Cardiología",
    tema: "Prevención cardiovascular",
    subtema: "Hipertrigliceridemia grave",
    dificultad: "Muy alta",
    caso: "Varón de 48 años con diabetes mellitus tipo 2 presenta triglicéridos de 1,050 mg/dL. Consume alcohol diariamente y tiene mal control glucémico. No presenta dolor abdominal actualmente.",
    pregunta: "¿Cuál es la prioridad inicial?",
    opciones: [
      "Ignorar los triglicéridos porque el paciente está asintomático",
      "Abordar inmediatamente causas secundarias y medidas para reducir el riesgo de pancreatitis",
      "Suspender todo tratamiento hipolipemiante",
      "Indicar exclusivamente ezetimiba",
      "Realizar prueba de esfuerzo antes de intervenir"
    ],
    respuestaCorrecta: 1,
    explicacion: "La hipertrigliceridemia grave se asocia con riesgo de pancreatitis, por lo que requiere intervención activa. Deben identificarse y corregirse causas secundarias como diabetes descontrolada y consumo de alcohol, además de intervención dietética y tratamiento farmacológico cuando esté indicado.",
    perlaENARM: "TG ≥500 mg/dL cambia la prioridad: además del riesgo cardiovascular aparece el riesgo de pancreatitis.",
    gpc: {
      mexico: "GPC mexicana relacionada con dislipidemia y prevención cardiovascular.",
      internacional: "2026 ACC/AHA Multisociety Guideline on the Management of Dyslipidemia."
    },
    bibliografia: "2026 ACC/AHA Dyslipidemia Guideline; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-196",
    especialidad: "Cardiología",
    tema: "Prevención cardiovascular",
    subtema: "Intolerancia a estatinas",
    dificultad: "Muy alta",
    caso: "Mujer de 59 años con ASCVD establecida presenta mialgias durante tratamiento con una estatina. Los síntomas desaparecen al suspenderla y reaparecen al reiniciarla. No presenta elevación marcada de CK ni datos de rabdomiólisis.",
    pregunta: "¿Cuál es la estrategia más apropiada?",
    opciones: [
      "Suspender definitivamente toda terapia hipolipemiante",
      "Intentar identificar la dosis y estatina máximamente tolerables y añadir terapias no estatínicas cuando sea necesario",
      "Indicar únicamente suplementos vitamínicos",
      "Cambiar automáticamente a fibrato como tratamiento equivalente",
      "No tratar el LDL-C mientras existan síntomas"
    ],
    respuestaCorrecta: 1,
    explicacion: "La intolerancia a estatinas requiere diferenciar síntomas musculares asociados a estatinas de cuadros graves y buscar la dosis o estatina que el paciente pueda tolerar. En pacientes con ASCVD, si la reducción alcanzada es insuficiente, pueden añadirse terapias no estatínicas como ezetimiba, inhibidores PCSK9, ácido bempedoico u otras opciones según el riesgo y el contexto.",
    perlaENARM: "Intolerancia a una estatina no equivale a intolerancia absoluta a todas las estatinas ni obliga a abandonar la reducción de LDL.",
    gpc: {
      mexico: "GPC mexicana relacionada con prevención secundaria y dislipidemia.",
      internacional: "2026 ACC/AHA Multisociety Guideline on the Management of Dyslipidemia."
    },
    bibliografia: "2026 ACC/AHA Dyslipidemia Guideline; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-197",
    especialidad: "Cardiología",
    tema: "Prevención cardiovascular",
    subtema: "Diabetes y riesgo cardiovascular",
    dificultad: "Muy alta",
    caso: "Varón de 57 años con diabetes mellitus tipo 2 y enfermedad renal crónica presenta LDL-C de 92 mg/dL. No tiene antecedente de infarto ni enfermedad arterial periférica. Recibe tratamiento dietético pero no hipolipemiante.",
    pregunta: "¿Cuál es el principio general más apropiado?",
    opciones: [
      "La ausencia de ASCVD obliga a no utilizar estatinas",
      "La diabetes y la ERC constituyen condiciones que aumentan sustancialmente el riesgo cardiovascular y favorecen tratamiento hipolipemiante según el riesgo global",
      "Solo se debe tratar si LDL-C supera 190 mg/dL",
      "Debe utilizarse fibrato como primera elección en todos los pacientes diabéticos",
      "El tratamiento debe esperar hasta realizar coronariografía"
    ],
    respuestaCorrecta: 1,
    explicacion: "Diabetes y enfermedad renal crónica incrementan de manera importante el riesgo cardiovascular. Las recomendaciones contemporáneas incorporan estos grupos dentro de escenarios donde puede estar indicada terapia hipolipemiante sin depender exclusivamente de un cálculo tradicional de riesgo.",
    perlaENARM: "Diabetes + ERC no es un paciente de riesgo cardiovascular promedio.",
    gpc: {
      mexico: "GPC mexicana relacionada con diabetes mellitus, enfermedad renal crónica y riesgo cardiovascular.",
      internacional: "2026 ACC/AHA Multisociety Guideline on the Management of Dyslipidemia."
    },
    bibliografia: "2026 ACC/AHA Dyslipidemia Guideline; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-198",
    especialidad: "Cardiología",
    tema: "Prevención cardiovascular",
    subtema: "Apolipoproteína B",
    dificultad: "Muy alta",
    caso: "Paciente con obesidad, diabetes y triglicéridos de 280 mg/dL presenta LDL-C aparentemente aceptable, pero existe discordancia entre LDL-C y el riesgo cardiometabólico global. Se busca una medida adicional de carga aterogénica.",
    pregunta: "¿Cuál de las siguientes determinaciones puede ser especialmente útil?",
    opciones: [
      "Apolipoproteína B",
      "CK-MB",
      "Dímero D",
      "Mioglobina",
      "Troponina T seriada"
    ],
    respuestaCorrecta: 0,
    explicacion: "La apolipoproteína B refleja el número de partículas aterogénicas y puede aportar información adicional cuando existe discordancia entre LDL-C y otros parámetros lipídicos, particularmente en hipertrigliceridemia, diabetes, obesidad y síndrome cardiometabólico.",
    perlaENARM: "LDL-C mide colesterol dentro de partículas; apoB ayuda a estimar el número de partículas aterogénicas.",
    gpc: {
      mexico: "GPC mexicana relacionada con dislipidemia y riesgo cardiovascular.",
      internacional: "2026 ACC/AHA Multisociety Guideline on the Management of Dyslipidemia."
    },
    bibliografia: "2026 ACC/AHA Dyslipidemia Guideline; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-199",
    especialidad: "Cardiología",
    tema: "Rehabilitación cardiaca",
    subtema: "Indicación después de síndrome coronario agudo",
    dificultad: "Alta",
    caso: "Varón de 62 años fue tratado mediante PCI por un IAM con elevación del ST. Actualmente se encuentra estable, con FEVI de 48%, sin angina y con tratamiento médico óptimo.",
    pregunta: "¿Cuál es una intervención integral que debe ofrecerse durante la recuperación?",
    opciones: [
      "Reposo absoluto durante seis meses",
      "Programa estructurado de rehabilitación cardiaca",
      "Suspender actividad física indefinidamente",
      "Solo tratamiento farmacológico sin intervención educativa",
      "Evitar entrenamiento físico por tener antecedente de IAM"
    ],
    respuestaCorrecta: 1,
    explicacion: "La rehabilitación cardiaca forma parte de la atención integral posterior al síndrome coronario agudo y revascularización. Incluye ejercicio prescrito, educación, modificación de factores de riesgo, adherencia terapéutica y apoyo psicosocial.",
    perlaENARM: "Después de un IAM, la rehabilitación cardiaca es parte del tratamiento, no un complemento opcional sin impacto clínico.",
    gpc: {
      mexico: "GPC IMSS-429-10, rehabilitación cardiaca.",
      internacional: "Guías contemporáneas de prevención cardiovascular y rehabilitación cardiaca."
    },
    bibliografia: "Braunwald's Heart Disease, 12th ed.; GPC IMSS-429-10."
  },

  {
    id: "CARD-200",
    especialidad: "Cardiología",
    tema: "Rehabilitación cardiaca",
    subtema: "Ejercicio y enfermedad cardiovascular",
    dificultad: "Muy alta",
    caso: "Mujer de 68 años con insuficiencia cardiaca estable y FEVI de 35% desea iniciar ejercicio. Se encuentra euvolémica, sin angina, sin arritmias inestables y con tratamiento médico optimizado.",
    pregunta: "¿Cuál es la recomendación general más apropiada?",
    opciones: [
      "Evitar cualquier actividad física",
      "Iniciar un programa individualizado de ejercicio y rehabilitación cardiaca después de valoración clínica",
      "Realizar únicamente ejercicios isométricos intensos",
      "Esperar hasta recuperar una FEVI normal",
      "Indicar ejercicio máximo desde el primer día"
    ],
    respuestaCorrecta: 1,
    explicacion: "En pacientes con insuficiencia cardiaca estable, el ejercicio prescrito y la rehabilitación cardiaca pueden mejorar capacidad funcional y calidad de vida. La intensidad y modalidad deben individualizarse de acuerdo con la condición clínica, capacidad funcional y estabilidad hemodinámica.",
    perlaENARM: "FEVI reducida estable no significa contraindicación absoluta para ejercicio; significa que debe prescribirse de manera estructurada.",
    gpc: {
      mexico: "GPC IMSS-429-10, rehabilitación cardiaca; GPC mexicana relacionada con insuficiencia cardiaca.",
      internacional: "Guías contemporáneas de insuficiencia cardiaca y rehabilitación cardiovascular."
    },
    bibliografia: "Braunwald's Heart Disease, 12th ed.; GPC IMSS-429-10."
  },

  {
    id: "CARD-201",
    especialidad: "Cardiología",
    tema: "Cardiopatía congénita del adulto",
    subtema: "Tetralogía de Fallot reparada",
    dificultad: "Muy alta",
    caso: "Varón de 31 años con tetralogía de Fallot reparada durante la infancia presenta intolerancia al ejercicio y palpitaciones. La resonancia cardiaca muestra dilatación significativa del ventrículo derecho y regurgitación pulmonar importante.",
    pregunta: "¿Cuál es el principal aspecto que debe evaluarse en su seguimiento especializado?",
    opciones: [
      "Solo la presión arterial sistémica",
      "Función y volumen del ventrículo derecho, lesión pulmonar residual y riesgo de arritmias",
      "Únicamente el tamaño de la aurícula izquierda",
      "Descartar toda posibilidad de complicaciones porque fue reparado",
      "Suspender seguimiento cardiológico si está asintomático"
    ],
    respuestaCorrecta: 1,
    explicacion: "Los adultos con tetralogía de Fallot reparada pueden desarrollar lesiones residuales, especialmente insuficiencia pulmonar, dilatación y disfunción del ventrículo derecho y arritmias. El seguimiento debe realizarse en el contexto de cardiopatía congénita del adulto y utilizar imagen avanzada cuando sea necesario.",
    perlaENARM: "Tetralogía reparada no significa cardiopatía resuelta: VD + válvula pulmonar + arritmias son puntos críticos.",
    gpc: {
      mexico: "GPC IMSS-054-08, cardiopatías congénitas.",
      internacional: "2025 ACC/AHA/HRS/ISACHD/SCAI Guideline for Adults With Congenital Heart Disease."
    },
    bibliografia: "2025 ACC/AHA Adult Congenital Heart Disease Guideline; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-202",
    especialidad: "Cardiología",
    tema: "Cardiopatía congénita del adulto",
    subtema: "Coartación de aorta",
    dificultad: "Muy alta",
    caso: "Mujer de 29 años con antecedente de reparación de coartación de aorta durante la infancia presenta hipertensión persistente. La presión arterial en brazos es 158/92 mmHg y en piernas 128/78 mmHg. La resonancia muestra estrechamiento residual en el sitio de reparación.",
    pregunta: "¿Cuál es la interpretación más apropiada?",
    opciones: [
      "La hipertensión no tiene relación con la coartación reparada",
      "Debe evaluarse recurrencia o lesión residual y realizar vigilancia cardiovascular de por vida",
      "La reparación infantil elimina la necesidad de seguimiento",
      "Solo requiere diurético",
      "La diferencia de presión entre extremidades carece de significado"
    ],
    respuestaCorrecta: 1,
    explicacion: "Los pacientes con coartación reparada mantienen riesgo de hipertensión, recoartación, aneurismas y enfermedad cardiovascular. La vigilancia de por vida incluye presión arterial en diferentes extremidades y evaluación anatómica periódica mediante imagen.",
    perlaENARM: "Coartación reparada = seguimiento de por vida; hipertensión persistente obliga a buscar lesión residual y otros mecanismos.",
    gpc: {
      mexico: "GPC IMSS-524-11, coartación de aorta en el adulto.",
      internacional: "2025 ACC/AHA Adult Congenital Heart Disease Guideline."
    },
    bibliografia: "2025 ACC/AHA Adult Congenital Heart Disease Guideline; GPC IMSS-524-11; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-203",
    especialidad: "Cardiología",
    tema: "Cardiopatía congénita del adulto",
    subtema: "Síndrome de Eisenmenger",
    dificultad: "Muy alta",
    caso: "Mujer de 34 años con comunicación interventricular grande no reparada presenta cianosis, disnea y saturación basal de 84%. El ecocardiograma demuestra hipertensión pulmonar grave y cortocircuito bidireccional.",
    pregunta: "¿Cuál de las siguientes conductas debe evitarse?",
    opciones: [
      "Seguimiento en un centro especializado",
      "Evaluación multidisciplinaria de hipertensión pulmonar",
      "Embarazo",
      "Vacunación y prevención de infecciones",
      "Vigilancia de complicaciones hematológicas"
    ],
    respuestaCorrecta: 2,
    explicacion: "El síndrome de Eisenmenger implica hipertensión pulmonar avanzada y un riesgo materno extremadamente elevado durante el embarazo. Estos pacientes requieren seguimiento especializado y manejo de hipertensión pulmonar asociada a cardiopatía congénita.",
    perlaENARM: "Eisenmenger + embarazo = escenario de riesgo materno extremadamente alto.",
    gpc: {
      mexico: "GPC IMSS-431-11, síndrome de Eisenmenger.",
      internacional: "2025 ACC/AHA Adult Congenital Heart Disease Guideline."
    },
    bibliografia: "2025 ACC/AHA Adult Congenital Heart Disease Guideline; GPC IMSS-431-11."
  },

  {
    id: "CARD-204",
    especialidad: "Cardiología",
    tema: "Cardiopatía congénita del adulto",
    subtema: "Seguimiento especializado",
    dificultad: "Alta",
    caso: "Varón de 27 años con cardiopatía congénita compleja reparada durante la infancia continúa siendo atendido exclusivamente en medicina general. Presenta nuevas palpitaciones y disminución progresiva de la tolerancia al ejercicio.",
    pregunta: "¿Cuál es el enfoque más apropiado?",
    opciones: [
      "Suspender el seguimiento porque la cardiopatía fue reparada",
      "Referir a un centro o especialista con experiencia en cardiopatía congénita del adulto",
      "Tratar únicamente con diuréticos",
      "Realizar solo una radiografía de tórax",
      "Considerar que las palpitaciones son necesariamente benignas"
    ],
    respuestaCorrecta: 1,
    explicacion: "La nueva guía ACC/AHA 2025 enfatiza el acceso continuo a atención especializada para adultos con cardiopatía congénita. Las complicaciones pueden aparecer décadas después de la reparación, incluyendo arritmias, disfunción ventricular, lesiones residuales y problemas de grandes vasos.",
    perlaENARM: "El paciente con cardiopatía congénita reparada debe transitar de atención pediátrica a un programa de ACHD, no desaparecer del seguimiento.",
    gpc: {
      mexico: "GPC IMSS-054-08, cardiopatías congénitas.",
      internacional: "2025 ACC/AHA Adult Congenital Heart Disease Guideline."
    },
    bibliografia: "2025 ACC/AHA Adult Congenital Heart Disease Guideline; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-205",
    especialidad: "Cardiología",
    tema: "Cardiología perioperatoria",
    subtema: "Evaluación preoperatoria",
    dificultad: "Muy alta",
    caso: "Mujer de 72 años con hipertensión controlada y enfermedad coronaria estable será sometida a cirugía abdominal de riesgo intermedio. Puede subir dos pisos de escaleras sin disnea ni dolor torácico. No presenta síntomas cardiovasculares nuevos.",
    pregunta: "¿Cuál es la conducta más apropiada respecto a prueba de estrés preoperatoria?",
    opciones: [
      "Realizar prueba de estrés obligatoriamente",
      "Realizar coronariografía invasiva antes de la cirugía",
      "No realizar prueba de estrés rutinaria debido a su buena capacidad funcional y ausencia de síntomas de alto riesgo",
      "Cancelar definitivamente la cirugía",
      "Realizar prueba de esfuerzo únicamente porque tiene más de 70 años"
    ],
    respuestaCorrecta: 2,
    explicacion: "La guía perioperatoria AHA/ACC recomienda un enfoque escalonado. La prueba de estrés no debe realizarse rutinariamente en pacientes con buena capacidad funcional, bajo riesgo o procedimientos de bajo riesgo. Debe reservarse para pacientes seleccionados en quienes el resultado pueda cambiar la conducta.",
    perlaENARM: "Buena capacidad funcional + estabilidad clínica = generalmente no pedir prueba de estrés solo por la edad o por antecedente cardiovascular.",
    gpc: {
      mexico: "No se identifica una GPC mexicana específica vigente que sustituya la evaluación perioperatoria cardiovascular contemporánea.",
      internacional: "2024 AHA/ACC/ACS/ASNC/HRS/SCA/SCCT/SCMR/SVM Guideline for Perioperative Cardiovascular Management for Noncardiac Surgery; reaffirmed 2026."
    },
    bibliografia: "2024 AHA/ACC Perioperative Cardiovascular Management Guideline; reaffirmed 2026."
  },

  {
    id: "CARD-206",
    especialidad: "Cardiología",
    tema: "Cardiología perioperatoria",
    subtema: "Inhibidores SGLT2",
    dificultad: "Alta",
    caso: "Varón de 66 años con diabetes mellitus tipo 2 e insuficiencia cardiaca con FEVI reducida recibe dapagliflozina. Está programado para cirugía abdominal electiva dentro de cuatro días.",
    pregunta: "¿Cuál es la conducta perioperatoria recomendada respecto al inhibidor SGLT2?",
    opciones: [
      "Continuarlo hasta la mañana de la cirugía",
      "Suspenderlo aproximadamente 3-4 días antes de la cirugía programada",
      "Duplicar la dosis el día previo",
      "Cambiarlo obligatoriamente por un fibrato",
      "Suspenderlo solo después de la cirugía"
    ],
    respuestaCorrecta: 1,
    explicacion: "Los inhibidores SGLT2 deben suspenderse antes de cirugía programada debido al riesgo de cetoacidosis metabólica/euglucémica en el contexto perioperatorio. La guía AHA/ACC recomienda suspenderlos 3-4 días antes de una cirugía electiva.",
    perlaENARM: "SGLT2 + cirugía = suspender 3-4 días antes.",
    gpc: {
      mexico: "GPC mexicana relacionada con diabetes mellitus e insuficiencia cardiaca.",
      internacional: "2024 AHA/ACC Perioperative Cardiovascular Management Guideline; reaffirmed 2026."
    },
    bibliografia: "2024 AHA/ACC Perioperative Cardiovascular Management Guideline; reaffirmed 2026."
  },

  {
    id: "CARD-207",
    especialidad: "Cardiología",
    tema: "Cardiología perioperatoria",
    subtema: "Fibrilación auricular perioperatoria",
    dificultad: "Muy alta",
    caso: "Mujer de 75 años desarrolla fibrilación auricular con respuesta ventricular rápida después de una cirugía abdominal. Presenta anemia significativa, fiebre y datos de infección. No tiene hipotensión ni isquemia activa.",
    pregunta: "¿Cuál es una de las primeras medidas terapéuticas apropiadas?",
    opciones: [
      "Ignorar la anemia y la infección porque la FA es primaria",
      "Identificar y tratar los desencadenantes como anemia, infección, alteraciones electrolíticas e hipoxia",
      "Realizar ablación inmediata",
      "Implantar un marcapasos",
      "Administrar trombólisis sistémica"
    ],
    respuestaCorrecta: 1,
    explicacion: "La FA perioperatoria puede precipitarse por factores reversibles como infección, anemia, alteraciones metabólicas, hipoxia y estrés fisiológico. El tratamiento debe abordar estos desencadenantes además del control de frecuencia o ritmo cuando esté indicado. La FA de nueva aparición requiere seguimiento posterior para valorar recurrencia y riesgo tromboembólico.",
    perlaENARM: "FA postoperatoria: primero buscar y corregir precipitantes; no asumir que es una arritmia aislada sin contexto.",
    gpc: {
      mexico: "GPC mexicana relacionada con fibrilación auricular.",
      internacional: "2024 AHA/ACC Perioperative Cardiovascular Management Guideline; reaffirmed 2026; ESC 2024 AF Guideline."
    },
    bibliografia: "2024 AHA/ACC Perioperative Cardiovascular Management Guideline; reaffirmed 2026; ESC 2024 AF Guidelines."
  },

  {
    id: "CARD-208",
    especialidad: "Cardiología",
    tema: "Cardiología perioperatoria",
    subtema: "Lesión miocárdica después de cirugía no cardiaca",
    dificultad: "Muy alta",
    caso: "Varón de 78 años con enfermedad vascular conocida presenta elevación de troponina durante las primeras 48 horas posteriores a cirugía vascular mayor. No refiere dolor torácico debido a analgesia y no hay elevación persistente del ST. Se considera que la lesión puede estar relacionada con el estrés perioperatorio.",
    pregunta: "¿Cuál es el concepto que debe considerarse?",
    opciones: [
      "Miocarditis viral obligatoria",
      "Lesión miocárdica después de cirugía no cardiaca (MINS)",
      "Pericarditis constrictiva",
      "Síndrome de Brugada",
      "Endocarditis infecciosa"
    ],
    respuestaCorrecta: 1,
    explicacion: "MINS describe lesión miocárdica detectada después de cirugía no cardiaca, generalmente identificada mediante elevación de troponina atribuible a isquemia. Puede ocurrir sin síntomas clásicos y se asocia con incremento del riesgo de mortalidad. Su detección debe conducir a evaluación cardiovascular y seguimiento apropiado.",
    perlaENARM: "Después de cirugía, una elevación de troponina puede representar MINS aunque el paciente nunca refiera dolor torácico.",
    gpc: {
      mexico: "No se identifica una GPC mexicana específica vigente para MINS.",
      internacional: "2024 AHA/ACC Perioperative Cardiovascular Management Guideline; reaffirmed 2026."
    },
    bibliografia: "2024 AHA/ACC Perioperative Cardiovascular Management Guideline; reaffirmed 2026; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-209",
    especialidad: "Cardiología",
    tema: "Cardiología perioperatoria",
    subtema: "Anticoagulación y puente perioperatorio",
    dificultad: "Muy alta",
    caso: "Varón de 68 años con fibrilación auricular no valvular tratado con apixabán será sometido a cirugía electiva con riesgo hemorrágico elevado. No presenta ictus reciente, válvula mecánica ni trombo intracardiaco conocido.",
    pregunta: "¿Cuál es el enfoque general más apropiado?",
    opciones: [
      "Mantener apixabán hasta la mañana de la cirugía",
      "Suspender adecuadamente el anticoagulante antes del procedimiento según función renal y riesgo hemorrágico, sin puente rutinario con heparina",
      "Sustituir siempre apixabán por heparina IV",
      "Suspender anticoagulación para siempre",
      "Administrar aspirina como puente obligatorio"
    ],
    respuestaCorrecta: 1,
    explicacion: "En la mayoría de los pacientes tratados con anticoagulantes orales directos, el tratamiento se interrumpe antes de una cirugía según el fármaco, función renal y riesgo hemorrágico. El puente rutinario con heparina generalmente aumenta el riesgo de sangrado y no es necesario. Existen excepciones de riesgo trombótico muy alto.",
    perlaENARM: "DOAC + cirugía: interrupción programada, no puente rutinario.",
    gpc: {
      mexico: "GPC mexicana relacionada con fibrilación auricular y anticoagulación.",
      internacional: "2024 AHA/ACC Perioperative Cardiovascular Management Guideline; reaffirmed 2026."
    },
    bibliografia: "2024 AHA/ACC Perioperative Cardiovascular Management Guideline; reaffirmed 2026; ESC 2024 AF Guidelines."
  },

  {
    id: "CARD-210",
    especialidad: "Cardiología",
    tema: "Cardiología perioperatoria",
    subtema: "Estratificación cardiovascular integrada",
    dificultad: "Muy alta",
    caso: "Mujer de 70 años con diabetes, ERC, enfermedad coronaria estable y capacidad funcional limitada será sometida a cirugía abdominal mayor. No presenta angina ni insuficiencia cardiaca descompensada. El equipo quirúrgico solicita una valoración cardiovascular preoperatoria.",
    pregunta: "¿Cuál es el enfoque contemporáneo más apropiado?",
    opciones: [
      "Realizar automáticamente coronariografía invasiva",
      "Utilizar un enfoque escalonado que integre riesgo quirúrgico, comorbilidades, capacidad funcional, herramientas de riesgo y estudios adicionales solo si pueden cambiar la conducta",
      "Solicitar pruebas cardiacas indiscriminadamente",
      "Cancelar toda cirugía no cardiaca en pacientes con enfermedad coronaria",
      "Realizar prueba de esfuerzo independientemente de la capacidad funcional"
    ],
    respuestaCorrecta: 1,
    explicacion: "La evaluación cardiovascular perioperatoria contemporánea debe ser escalonada y centrada en la toma de decisiones. Se integran tipo de cirugía, riesgo clínico, capacidad funcional, estabilidad de la enfermedad cardiovascular y herramientas de predicción como RCRI o NSQIP. Los estudios adicionales deben solicitarse únicamente cuando su resultado pueda modificar la estrategia perioperatoria.",
    perlaENARM: "La valoración preoperatoria moderna no busca 'pedir todos los estudios'; busca identificar qué información cambiará la conducta.",
    gpc: {
      mexico: "No se identifica una GPC mexicana específica vigente que sustituya el algoritmo perioperatorio AHA/ACC contemporáneo.",
      internacional: "2024 AHA/ACC/ACS/ASNC/HRS/SCA/SCCT/SCMR/SVM Guideline for Perioperative Cardiovascular Management for Noncardiac Surgery; reaffirmed 2026."
    },
    bibliografia: "2024 AHA/ACC Perioperative Cardiovascular Management Guideline; reaffirmed 2026; Braunwald's Heart Disease, 12th ed."
  },
      {
    id: "CARD-211",
    especialidad: "Cardiología",
    tema: "Valvulopatías",
    subtema: "Estenosis aórtica de bajo flujo y bajo gradiente",
    dificultad: "Muy alta",
    caso: "Varón de 78 años con disnea progresiva presenta FEVI de 30%. El ecocardiograma muestra área valvular aórtica de 0.7 cm², velocidad máxima de 3.1 m/s y gradiente medio de 28 mmHg. El volumen sistólico indexado está reducido.",
    pregunta: "¿Cuál es el siguiente estudio más útil para diferenciar estenosis aórtica verdaderamente grave de una pseudoestenosis?",
    opciones: [
      "Holter de 24 horas",
      "Ecocardiograma con dobutamina a dosis bajas",
      "Prueba de esfuerzo convencional",
      "Coronariografía como único estudio",
      "Ecocardiograma transesofágico exclusivamente"
    ],
    respuestaCorrecta: 1,
    explicacion: "En la estenosis aórtica de bajo flujo y bajo gradiente con FEVI reducida, el ecocardiograma con dobutamina a dosis bajas permite evaluar la reserva contráctil y determinar si el aumento del flujo produce incremento del gradiente con persistencia de un área valvular pequeña, lo que favorece estenosis verdaderamente grave.",
    perlaENARM: "AVA pequeña + gradiente bajo + FEVI reducida = pensar en bajo flujo/bajo gradiente y utilizar dobutamina para aclarar la gravedad.",
    gpc: {
      mexico: "GPC mexicana relacionada con enfermedad de la válvula aórtica.",
      internacional: "ESC/EACTS 2025 Guidelines for the Management of Valvular Heart Disease."
    },
    bibliografia: "ESC/EACTS 2025 Valvular Heart Disease Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-212",
    especialidad: "Cardiología",
    tema: "Valvulopatías",
    subtema: "Estenosis aórtica paradójica",
    dificultad: "Muy alta",
    caso: "Mujer de 82 años presenta disnea y síncope de esfuerzo. Tiene FEVI de 58%, área valvular aórtica de 0.75 cm², gradiente medio de 31 mmHg y volumen sistólico indexado de 28 mL/m². La presión arterial durante el estudio está controlada.",
    pregunta: "¿Qué fenómeno debe sospecharse?",
    opciones: [
      "Estenosis aórtica de alto flujo",
      "Estenosis aórtica paradójica de bajo flujo y bajo gradiente con FEVI preservada",
      "Insuficiencia aórtica aislada",
      "Miocardiopatía dilatada",
      "Estenosis mitral grave"
    ],
    respuestaCorrecta: 1,
    explicacion: "La estenosis aórtica paradójica de bajo flujo y bajo gradiente puede presentarse con FEVI preservada. La clave es identificar bajo volumen sistólico indexado pese a una FEVI aparentemente normal, acompañado de un área valvular compatible con estenosis grave y gradiente relativamente bajo.",
    perlaENARM: "FEVI preservada no excluye bajo flujo. El volumen sistólico indexado es fundamental.",
    gpc: {
      mexico: "GPC mexicana relacionada con enfermedad valvular aórtica.",
      internacional: "ESC/EACTS 2025 Guidelines for Valvular Heart Disease."
    },
    bibliografia: "ESC/EACTS 2025 Valvular Heart Disease Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-213",
    especialidad: "Cardiología",
    tema: "Valvulopatías",
    subtema: "TAVI versus cirugía",
    dificultad: "Muy alta",
    caso: "Varón de 76 años con estenosis aórtica grave sintomática tiene anatomía favorable para reemplazo transcatéter. Presenta alto riesgo de complicaciones relacionadas con esternotomía y recuperación quirúrgica prolongada, pero no tiene una indicación anatómica obligatoria para cirugía abierta.",
    pregunta: "¿Qué debe realizarse antes de seleccionar la modalidad de reemplazo?",
    opciones: [
      "Elegir siempre cirugía porque es menor de 80 años",
      "Elegir siempre TAVI independientemente de la anatomía",
      "Evaluación por Heart Team integrando edad, expectativa de vida, anatomía, riesgo quirúrgico y preferencias",
      "Decidir exclusivamente por el gradiente transvalvular",
      "Utilizar únicamente la puntuación de riesgo quirúrgico"
    ],
    respuestaCorrecta: 2,
    explicacion: "La elección entre TAVI y cirugía debe individualizarse mediante un Heart Team. La edad, expectativa de vida, anatomía valvular y vascular, riesgo quirúrgico, posibilidad de futuras intervenciones, durabilidad y preferencias del paciente forman parte de la decisión.",
    perlaENARM: "TAVI vs cirugía no es una decisión basada únicamente en edad o STS: es una decisión del Heart Team.",
    gpc: {
      mexico: "GPC mexicana relacionada con enfermedad de la válvula aórtica.",
      internacional: "ESC/EACTS 2025 Guidelines for the Management of Valvular Heart Disease."
    },
    bibliografia: "ESC/EACTS 2025 Valvular Heart Disease Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-214",
    especialidad: "Cardiología",
    tema: "Valvulopatías",
    subtema: "Insuficiencia aórtica crónica",
    dificultad: "Muy alta",
    caso: "Varón de 59 años con insuficiencia aórtica primaria grave permanece asintomático. El ecocardiograma muestra FEVI de 52% y dilatación progresiva del ventrículo izquierdo en estudios seriados.",
    pregunta: "¿Cuál es el principio que debe guiar la decisión de intervención?",
    opciones: [
      "Esperar obligatoriamente a que aparezcan síntomas graves",
      "Ignorar el tamaño ventricular mientras la FEVI sea mayor de 40%",
      "Considerar intervención antes de que ocurra disfunción ventricular irreversible",
      "Indicar únicamente diurético",
      "Realizar reemplazo valvular solo si aparece fibrilación auricular"
    ],
    respuestaCorrecta: 2,
    explicacion: "En la insuficiencia aórtica grave crónica, la sobrecarga de volumen puede producir remodelado y disfunción ventricular progresiva. La decisión de intervención no debe esperar necesariamente a la aparición de síntomas avanzados o deterioro irreversible del ventrículo izquierdo.",
    perlaENARM: "En insuficiencia aórtica grave, el objetivo es intervenir antes del daño ventricular irreversible.",
    gpc: {
      mexico: "GPC mexicana relacionada con enfermedad de la válvula aórtica.",
      internacional: "ESC/EACTS 2025 Guidelines for Valvular Heart Disease."
    },
    bibliografia: "ESC/EACTS 2025 Valvular Heart Disease Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-215",
    especialidad: "Cardiología",
    tema: "Valvulopatías",
    subtema: "Insuficiencia mitral secundaria",
    dificultad: "Muy alta",
    caso: "Mujer de 67 años con insuficiencia cardiaca con FEVI de 32% presenta insuficiencia mitral secundaria grave a pesar de tratamiento médico optimizado, incluyendo terapia dirigida a las cuatro vías fundamentales de HFrEF y terapia de resincronización cuando estaba indicada. Continúa sintomática.",
    pregunta: "¿Cuál es el siguiente paso apropiado?",
    opciones: [
      "Ignorar la insuficiencia mitral porque es secundaria",
      "Evaluación por Heart Team para determinar si es candidata a intervención transcatéter o quirúrgica",
      "Suspender el tratamiento de insuficiencia cardiaca",
      "Indicar exclusivamente digoxina",
      "Realizar reemplazo mitral sin evaluación anatómica"
    ],
    respuestaCorrecta: 1,
    explicacion: "La insuficiencia mitral secundaria grave debe evaluarse después de optimizar el tratamiento de la enfermedad ventricular subyacente. En pacientes seleccionados que permanecen sintomáticos, la intervención transcatéter borde a borde u otras estrategias pueden mejorar resultados dependiendo de anatomía, función ventricular y contexto.",
    perlaENARM: "MR secundaria: primero optimizar el ventrículo; después valorar intervención en pacientes seleccionados.",
    gpc: {
      mexico: "GPC mexicana relacionada con patología de la válvula mitral e insuficiencia cardiaca.",
      internacional: "ESC/EACTS 2025 Guidelines for Valvular Heart Disease."
    },
    bibliografia: "ESC/EACTS 2025 Valvular Heart Disease Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-216",
    especialidad: "Cardiología",
    tema: "Valvulopatías",
    subtema: "Insuficiencia tricuspídea secundaria",
    dificultad: "Muy alta",
    caso: "Mujer de 74 años con fibrilación auricular permanente presenta insuficiencia tricuspídea grave, dilatación del anillo tricuspídeo y dilatación de la aurícula derecha. Tiene edema periférico y deterioro progresivo de la capacidad funcional.",
    pregunta: "¿Cuál es el mecanismo más probable?",
    opciones: [
      "Ruptura traumática de la válvula tricúspide",
      "Remodelado auricular y dilatación anular asociado a FA, produciendo insuficiencia tricuspídea funcional",
      "Endocarditis obligatoria",
      "Estenosis aórtica como causa directa",
      "Comunicación interventricular"
    ],
    respuestaCorrecta: 1,
    explicacion: "La fibrilación auricular persistente puede producir remodelado auricular derecho y dilatación del anillo tricuspídeo, dando lugar a insuficiencia tricuspídea funcional de mecanismo auricular. El tratamiento debe abordar la causa y valorar la gravedad y repercusión de la insuficiencia tricuspídea.",
    perlaENARM: "FA persistente + AD dilatada + anillo tricuspídeo dilatado = fenotipo de insuficiencia tricuspídea funcional auricular.",
    gpc: {
      mexico: "GPC IMSS-242-09 relacionada con enfermedad de la válvula tricúspide.",
      internacional: "ESC/EACTS 2025 Guidelines for Valvular Heart Disease."
    },
    bibliografia: "ESC/EACTS 2025 Valvular Heart Disease Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-217",
    especialidad: "Cardiología",
    tema: "Endocarditis infecciosa",
    subtema: "Hemocultivos y antibióticos",
    dificultad: "Alta",
    caso: "Varón de 58 años con fiebre persistente, soplo nuevo y lesiones embólicas periféricas se encuentra hemodinámicamente estable y no ha recibido antibióticos. Existe alta sospecha de endocarditis infecciosa.",
    pregunta: "¿Qué debe realizarse antes de iniciar antibióticos, siempre que la situación clínica lo permita?",
    opciones: [
      "Un único hemocultivo",
      "Tres juegos de hemocultivos de sitios distintos",
      "Solo urocultivo",
      "Solo cultivo de esputo",
      "Esperar al resultado de la ecocardiografía antes de tomar hemocultivos"
    ],
    respuestaCorrecta: 1,
    explicacion: "En un paciente estable con sospecha de endocarditis infecciosa, deben obtenerse múltiples juegos de hemocultivos antes de iniciar antibióticos para maximizar el rendimiento microbiológico y permitir una terapia dirigida.",
    perlaENARM: "IE estable = hemocultivos primero, antibióticos después.",
    gpc: {
      mexico: "GPC mexicana relacionada con endocarditis infecciosa.",
      internacional: "ESC 2023 Guidelines for the Management of Endocarditis."
    },
    bibliografia: "ESC 2023 Endocarditis Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-218",
    especialidad: "Cardiología",
    tema: "Endocarditis infecciosa",
    subtema: "Ecocardiografía transesofágica",
    dificultad: "Muy alta",
    caso: "Mujer de 63 años presenta bacteriemia por Staphylococcus aureus. El ecocardiograma transtorácico no muestra vegetaciones, pero existe una prótesis valvular mitral y persiste bacteriemia.",
    pregunta: "¿Cuál es el siguiente estudio de imagen más apropiado?",
    opciones: [
      "Radiografía de tórax",
      "Ecocardiograma transesofágico",
      "Prueba de esfuerzo",
      "Holter",
      "PET cerebral como primer estudio"
    ],
    respuestaCorrecta: 1,
    explicacion: "En presencia de prótesis valvular y bacteriemia por S. aureus con alta sospecha de endocarditis, el ecocardiograma transesofágico tiene mayor sensibilidad que el transtorácico para detectar vegetaciones, abscesos y complicaciones periprotésicas.",
    perlaENARM: "Prótesis valvular + bacteriemia por S. aureus + TTE negativo ≠ descartar IE; hacer TEE.",
    gpc: {
      mexico: "GPC mexicana relacionada con endocarditis infecciosa.",
      internacional: "ESC 2023 Guidelines for the Management of Endocarditis."
    },
    bibliografia: "ESC 2023 Endocarditis Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-219",
    especialidad: "Cardiología",
    tema: "Endocarditis infecciosa",
    subtema: "Indicaciones de cirugía",
    dificultad: "Muy alta",
    caso: "Varón de 61 años con endocarditis infecciosa de la válvula mitral presenta vegetación móvil de 18 mm y ha sufrido dos episodios embólicos cerebrales pese a tratamiento antibiótico adecuado. Permanece con insuficiencia mitral grave.",
    pregunta: "¿Cuál es la conducta más apropiada?",
    opciones: [
      "Continuar antibióticos exclusivamente durante un año",
      "Evaluación urgente por Endocarditis Team para cirugía precoz",
      "Esperar obligatoriamente a completar seis semanas de antibióticos",
      "Anticoagular a dosis terapéuticas como tratamiento de la vegetación",
      "Realizar trombólisis intravenosa"
    ],
    respuestaCorrecta: 1,
    explicacion: "Vegetación grande y móvil, embolización recurrente pese a tratamiento adecuado y disfunción valvular grave constituyen criterios de alto riesgo que pueden justificar cirugía precoz. La decisión debe realizarse por un equipo multidisciplinario especializado.",
    perlaENARM: "IE + embolización recurrente + vegetación grande + disfunción valvular = pensar en cirugía precoz.",
    gpc: {
      mexico: "GPC mexicana relacionada con endocarditis infecciosa.",
      internacional: "ESC 2023 Guidelines for the Management of Endocarditis."
    },
    bibliografia: "ESC 2023 Endocarditis Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-220",
    especialidad: "Cardiología",
    tema: "Endocarditis infecciosa",
    subtema: "Profilaxis antibiótica",
    dificultad: "Alta",
    caso: "Mujer de 46 años con antecedente de endocarditis infecciosa requiere extracción dental con manipulación del tejido gingival. No presenta alergia conocida a penicilina.",
    pregunta: "¿Cuál es el principio correcto respecto a profilaxis?",
    opciones: [
      "Toda persona sometida a procedimiento dental requiere profilaxis",
      "La profilaxis está indicada en pacientes de alto riesgo de endocarditis sometidos a determinados procedimientos dentales",
      "La profilaxis se indica únicamente si existe fiebre",
      "La profilaxis sustituye la higiene oral",
      "La profilaxis debe mantenerse durante un mes después del procedimiento"
    ],
    respuestaCorrecta: 1,
    explicacion: "La profilaxis antibiótica no se recomienda de manera universal para todos los pacientes. Se reserva para pacientes con condiciones cardiacas de alto riesgo, como antecedente de endocarditis, cuando se realizan determinados procedimientos dentales con manipulación gingival o de la región periapical.",
    perlaENARM: "Antecedente de endocarditis = grupo de alto riesgo para profilaxis dental en procedimientos seleccionados.",
    gpc: {
      mexico: "GPC mexicana relacionada con endocarditis infecciosa.",
      internacional: "ESC 2023 Guidelines for the Management of Endocarditis."
    },
    bibliografia: "ESC 2023 Endocarditis Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-221",
    especialidad: "Cardiología",
    tema: "Imagen cardiovascular",
    subtema: "Resonancia cardiaca en miocarditis",
    dificultad: "Muy alta",
    caso: "Varón de 37 años presenta dolor torácico, elevación de troponina y cambios inespecíficos del ST. La coronariografía no muestra enfermedad coronaria obstructiva. La resonancia cardiaca demuestra edema miocárdico y realce tardío subepicárdico inferolateral.",
    pregunta: "¿Cuál es la interpretación más probable?",
    opciones: [
      "Infarto transmural por oclusión coronaria",
      "Miocarditis aguda",
      "Pericarditis aislada sin compromiso miocárdico",
      "Estenosis aórtica",
      "Miocardiopatía hipertrófica obstructiva"
    ],
    respuestaCorrecta: 1,
    explicacion: "La combinación de lesión miocárdica, coronarias no obstructivas y un patrón de edema y realce tardío no isquémico, especialmente subepicárdico inferolateral, es característica de miocarditis. La CMR permite caracterizar edema, necrosis/fibrosis y distribución del daño.",
    perlaENARM: "CMR: patrón subepicárdico o mesomiocárdico favorece etiología no isquémica; patrón subendocárdico/transmural sigue un territorio coronario.",
    gpc: {
      mexico: "No se identifica una GPC mexicana específica vigente dedicada al uso de CMR en miocarditis.",
      internacional: "ESC 2025 Guidelines for Myocarditis and Pericarditis."
    },
    bibliografia: "ESC 2025 Myocarditis and Pericarditis Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-222",
    especialidad: "Cardiología",
    tema: "Imagen cardiovascular",
    subtema: "Realce tardío y etiología isquémica",
    dificultad: "Muy alta",
    caso: "Mujer de 64 años con FEVI de 35% presenta CMR. Se observa realce tardío subendocárdico que se extiende hacia todo el espesor de la pared en distribución correspondiente a la arteria descendente anterior.",
    pregunta: "¿Qué etiología es más probable?",
    opciones: [
      "Miocarditis viral",
      "Sarcoidosis",
      "Enfermedad cardiaca isquémica con fibrosis por infarto previo",
      "Amiloidosis exclusivamente",
      "Pericarditis constrictiva"
    ],
    respuestaCorrecta: 2,
    explicacion: "El patrón isquémico clásico de realce tardío comienza en el subendocardio y puede extenderse transmuralmente siguiendo un territorio coronario. Esto contrasta con los patrones no isquémicos, que suelen presentar distribución mesomiocárdica, subepicárdica o parcheada no correspondiente a un territorio vascular.",
    perlaENARM: "LGE subendocárdico/transmural + distribución coronaria = cicatriz isquémica.",
    gpc: {
      mexico: "GPC mexicana relacionada con cardiopatía isquémica.",
      internacional: "ESC 2024 Guidelines for Chronic Coronary Syndromes; ESC 2023 Cardiomyopathies Guidelines."
    },
    bibliografia: "Braunwald's Heart Disease, 12th ed.; ESC 2024 Chronic Coronary Syndromes Guidelines."
  },

  {
    id: "CARD-223",
    especialidad: "Cardiología",
    tema: "Imagen cardiovascular",
    subtema: "Ecocardiografía de estrés",
    dificultad: "Alta",
    caso: "Varón de 58 años con dolor torácico de esfuerzo tiene ECG basal con bloqueo completo de rama izquierda. La prueba de esfuerzo convencional resulta difícil de interpretar para detectar isquemia.",
    pregunta: "¿Cuál es una alternativa diagnóstica razonable?",
    opciones: [
      "Prueba de esfuerzo únicamente con ECG como estudio definitivo",
      "Imagen funcional de estrés o angiotomografía coronaria según el contexto clínico",
      "Holter como prueba de isquemia",
      "Radiografía de tórax",
      "Electromiografía"
    ],
    respuestaCorrecta: 1,
    explicacion: "Cuando el ECG basal limita la interpretación de cambios isquémicos, debe utilizarse una modalidad anatómica o funcional con imagen. La selección entre CCTA, ecocardiografía de estrés, resonancia de estrés o imagen nuclear depende de probabilidad clínica, características del paciente y disponibilidad.",
    perlaENARM: "ECG basal no interpretable para isquemia → utilizar imagen anatómica o funcional.",
    gpc: {
      mexico: "GPC mexicana relacionada con cardiopatía isquémica.",
      internacional: "ESC 2024 Guidelines for Chronic Coronary Syndromes."
    },
    bibliografia: "ESC 2024 Chronic Coronary Syndromes Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-224",
    especialidad: "Cardiología",
    tema: "Imagen cardiovascular",
    subtema: "Angiotomografía coronaria",
    dificultad: "Muy alta",
    caso: "Mujer de 51 años con sospecha de síndrome coronario crónico presenta probabilidad clínica baja-intermedia. Tiene ECG interpretable y no existen contraindicaciones para contraste yodado. Se desea descartar enfermedad coronaria obstructiva.",
    pregunta: "¿Cuál es una ventaja importante de la CCTA?",
    opciones: [
      "Permite visualizar directamente la anatomía coronaria y tiene alto valor para descartar enfermedad obstructiva",
      "Mide directamente las presiones intracardiacas",
      "Sustituye siempre al cateterismo",
      "No requiere exposición a radiación en ninguna circunstancia",
      "Permite medir directamente la reserva fraccional de flujo sin ninguna técnica adicional"
    ],
    respuestaCorrecta: 0,
    explicacion: "La angiotomografía coronaria ofrece evaluación anatómica no invasiva de las arterias coronarias y posee un elevado valor para descartar enfermedad coronaria obstructiva en pacientes apropiadamente seleccionados. No sustituye al cateterismo en todos los escenarios y puede complementarse con técnicas funcionales cuando existen lesiones de significado incierto.",
    perlaENARM: "CCTA es especialmente potente para excluir enfermedad coronaria obstructiva en pacientes seleccionados.",
    gpc: {
      mexico: "GPC mexicana relacionada con cardiopatía isquémica.",
      internacional: "ESC 2024 Guidelines for Chronic Coronary Syndromes."
    },
    bibliografia: "ESC 2024 Chronic Coronary Syndromes Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-225",
    especialidad: "Cardiología",
    tema: "Farmacología cardiovascular",
    subtema: "ARNI e insuficiencia cardiaca",
    dificultad: "Alta",
    caso: "Varón de 64 años con HFrEF sintomática recibe enalapril y continúa con síntomas pese a tratamiento adecuado. Tiene presión arterial tolerable y función renal estable. No ha presentado angioedema.",
    pregunta: "¿Cuál es una estrategia farmacológica apropiada?",
    opciones: [
      "Cambiar de forma apropiada de IECA a sacubitril/valsartán",
      "Agregar otro IECA al tratamiento",
      "Suspender todo tratamiento neurohormonal",
      "Sustituir el IECA por un AINE",
      "Utilizar únicamente digoxina"
    ],
    respuestaCorrecta: 0,
    explicacion: "En pacientes seleccionados con HFrEF, sacubitril/valsartán puede sustituir al IECA como parte del tratamiento dirigido a mejorar resultados cardiovasculares. Debe respetarse el intervalo de lavado necesario entre IECA y ARNI para reducir el riesgo de angioedema.",
    perlaENARM: "IECA → ARNI requiere periodo de lavado; no deben administrarse simultáneamente.",
    gpc: {
      mexico: "GPC-SS-219-24 relacionada con insuficiencia cardiaca.",
      internacional: "ESC Guidelines for Heart Failure; ACC/AHA/HFSA heart failure guidance."
    },
    bibliografia: "GPC-SS-219-24; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-226",
    especialidad: "Cardiología",
    tema: "Farmacología cardiovascular",
    subtema: "Antagonistas de mineralocorticoides",
    dificultad: "Muy alta",
    caso: "Mujer de 66 años con HFrEF y FEVI de 30% está recibiendo IECA, betabloqueador y diurético. Tiene creatinina de 1.2 mg/dL y potasio de 4.4 mEq/L. No existen antecedentes de hiperpotasemia.",
    pregunta: "¿Cuál es el siguiente tratamiento dirigido a mejorar el pronóstico que debe considerarse?",
    opciones: [
      "Espironolactona",
      "Verapamilo",
      "Diltiazem",
      "AINE",
      "Nifedipino de liberación inmediata"
    ],
    respuestaCorrecta: 0,
    explicacion: "Los antagonistas del receptor mineralocorticoide forman parte de la terapia fundamental de HFrEF en pacientes apropiadamente seleccionados. Antes y durante el tratamiento deben vigilarse función renal y potasio debido al riesgo de hiperpotasemia y deterioro renal.",
    perlaENARM: "HFrEF + función renal y K adecuados = pensar en MRA como uno de los pilares terapéuticos.",
    gpc: {
      mexico: "GPC-SS-219-24 relacionada con insuficiencia cardiaca.",
      internacional: "ACC/AHA/HFSA and ESC heart failure guidance."
    },
    bibliografia: "GPC-SS-219-24; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-227",
    especialidad: "Cardiología",
    tema: "Farmacología cardiovascular",
    subtema: "Ivabradina",
    dificultad: "Muy alta",
    caso: "Varón de 58 años con HFrEF crónica presenta FEVI de 28%, ritmo sinusal, frecuencia cardiaca de 82 lpm pese a betabloqueador a dosis máxima tolerada y continúa sintomático. La presión arterial limita mayor intensificación del betabloqueador.",
    pregunta: "¿Cuál es el escenario en el que ivabradina puede ser considerada?",
    opciones: [
      "Cualquier paciente con FA y frecuencia de 60 lpm",
      "Paciente seleccionado con HFrEF, ritmo sinusal y frecuencia cardiaca elevada pese a tratamiento betabloqueador apropiado",
      "Paciente con bradicardia sintomática",
      "Paciente con insuficiencia aórtica grave como tratamiento valvular",
      "Paciente con taquicardia ventricular sostenida"
    ],
    respuestaCorrecta: 1,
    explicacion: "Ivabradina reduce la frecuencia cardiaca mediante inhibición de la corriente If del nodo sinusal y puede considerarse en pacientes seleccionados con HFrEF que permanecen en ritmo sinusal con frecuencia elevada pese a tratamiento médico apropiado. No es útil para controlar la frecuencia en fibrilación auricular.",
    perlaENARM: "Ivabradina actúa sobre el nodo sinusal: no es fármaco para control de frecuencia en FA.",
    gpc: {
      mexico: "GPC-SS-219-24 relacionada con insuficiencia cardiaca.",
      internacional: "ACC/AHA/HFSA and ESC heart failure guidance."
    },
    bibliografia: "GPC-SS-219-24; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-228",
    especialidad: "Cardiología",
    tema: "Farmacología cardiovascular",
    subtema: "Digoxina e insuficiencia cardiaca",
    dificultad: "Muy alta",
    caso: "Mujer de 78 años con HFrEF y fibrilación auricular persiste con síntomas a pesar de tratamiento dirigido por guías. Tiene enfermedad renal crónica y se decide utilizar digoxina como tratamiento complementario. Después de algunas semanas presenta náusea, confusión y alteraciones visuales.",
    pregunta: "¿Cuál es la sospecha más importante?",
    opciones: [
      "Toxicidad por digoxina",
      "Síndrome serotoninérgico",
      "Toxicidad por nitratos",
      "Reacción alérgica a betabloqueador",
      "Pericarditis aguda"
    ],
    respuestaCorrecta: 0,
    explicacion: "La digoxina tiene margen terapéutico estrecho y su eliminación depende en gran medida de la función renal. Náusea, síntomas neurológicos y alteraciones visuales pueden aparecer en toxicidad. Las arritmias, incluyendo bloqueos y taquiarritmias, pueden ser manifestaciones graves.",
    perlaENARM: "Digoxina + ERC + síntomas gastrointestinales/visuales = sospechar toxicidad.",
    gpc: {
      mexico: "GPC-SS-219-24 relacionada con insuficiencia cardiaca.",
      internacional: "Contemporary heart failure guidance."
    },
    bibliografia: "GPC-SS-219-24; Braunwald's Heart Disease, 12th ed.; Harrison's 21st ed."
  },

  {
    id: "CARD-229",
    especialidad: "Cardiología",
    tema: "Farmacología cardiovascular",
    subtema: "Vericiguat",
    dificultad: "Muy alta",
    caso: "Varón de 69 años con HFrEF crónica presenta una hospitalización reciente por descompensación pese a tratamiento médico basado en guías. Se encuentra actualmente estable y euvolémico. Continúa con alto riesgo de nuevos eventos.",
    pregunta: "¿En qué contexto puede considerarse vericiguat?",
    opciones: [
      "Como sustituto inmediato de todos los pilares de HFrEF",
      "En pacientes seleccionados de alto riesgo con HFrEF recientemente descompensada pese a tratamiento basado en guías",
      "Como tratamiento agudo de edema pulmonar",
      "Como anticoagulante en FA",
      "Como tratamiento de primera línea para hipertensión arterial"
    ],
    respuestaCorrecta: 1,
    explicacion: "Vericiguat es un estimulador soluble de la guanilato ciclasa y puede considerarse en pacientes seleccionados con HFrEF de alto riesgo y reciente empeoramiento clínico pese a tratamiento médico basado en guías. No sustituye los pilares fundamentales del tratamiento.",
    perlaENARM: "Vericiguat es terapia adicional seleccionada en HFrEF de alto riesgo, no sustituto de los cuatro pilares.",
    gpc: {
      mexico: "GPC-SS-219-24 relacionada con insuficiencia cardiaca.",
      internacional: "Contemporary ACC/AHA/HFSA and ESC heart failure guidance."
    },
    bibliografia: "GPC-SS-219-24; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-230",
    especialidad: "Cardiología",
    tema: "Farmacología cardiovascular",
    subtema: "Hidralazina y dinitrato de isosorbida",
    dificultad: "Muy alta",
    caso: "Varón de 65 años con HFrEF continúa sintomático. Tiene intolerancia documentada a IECA/ARNI por angioedema y no es candidato a estos fármacos. La función renal es estable y no existe hipotensión significativa.",
    pregunta: "¿Qué combinación puede considerarse como alternativa terapéutica?",
    opciones: [
      "Hidralazina más dinitrato de isosorbida",
      "Verapamilo más diltiazem",
      "AINE más digoxina",
      "Nifedipino sublingual más clonidina",
      "Flecainida más propafenona"
    ],
    respuestaCorrecta: 0,
    explicacion: "La combinación hidralazina-dinitrato de isosorbida puede considerarse en determinados pacientes con HFrEF que no pueden recibir inhibición del sistema renina-angiotensina por intolerancia o contraindicación. No debe confundirse con una estrategia equivalente en todos los pacientes a ARNI/IECA/ARA-II.",
    perlaENARM: "Angioedema con IECA/ARNI y HFrEF: hidralazina + nitrato puede ser una alternativa seleccionada.",
    gpc: {
      mexico: "GPC-SS-219-24 relacionada con insuficiencia cardiaca.",
      internacional: "ACC/AHA/HFSA and ESC heart failure guidance."
    },
    bibliografia: "GPC-SS-219-24; Braunwald's Heart Disease, 12th ed."
  },
      {
    id: "CARD-231",
    especialidad: "Cardiología",
    tema: "Electrocardiografía",
    subtema: "Bloqueo bifascicular",
    dificultad: "Muy alta",
    caso: "Varón de 72 años con hipertensión y enfermedad coronaria presenta síncope súbito sin pródromos. El ECG muestra bloqueo completo de rama derecha y hemibloqueo anterior izquierdo. No se documenta bloqueo AV de segundo o tercer grado durante la valoración inicial.",
    pregunta: "¿Cuál es el siguiente paso diagnóstico más apropiado si el síncope permanece inexplicado?",
    opciones: [
      "Dar de alta sin seguimiento porque el ECG no muestra bloqueo AV completo",
      "Realizar estudio electrofisiológico para valorar enfermedad del sistema His-Purkinje",
      "Indicar exclusivamente prueba de esfuerzo",
      "Administrar atropina de forma crónica",
      "Implantar automáticamente un desfibrilador"
    ],
    respuestaCorrecta: 1,
    explicacion: "El bloqueo bifascicular en un paciente con síncope inexplicado aumenta la sospecha de enfermedad avanzada del sistema His-Purkinje. Cuando la evaluación no identifica otra causa, el estudio electrofisiológico puede demostrar enfermedad infranodal y ayudar a decidir la necesidad de estimulación.",
    perlaENARM: "Síncope inexplicado + bloqueo bifascicular = pensar en bloqueo AV paroxístico y valorar estudio electrofisiológico.",
    gpc: {
      mexico: "GPC mexicana relacionada con trastornos de conducción y bloqueo AV.",
      internacional: "ESC 2021 Guidelines on Cardiac Pacing and Cardiac Resynchronization Therapy."
    },
    bibliografia: "ESC 2021 Pacing and CRT Guidelines; ACC/AHA/HRS 2018 Bradycardia and Conduction Delay Guideline."
  },

  {
    id: "CARD-232",
    especialidad: "Cardiología",
    tema: "Trastornos de conducción",
    subtema: "Bloqueo AV de segundo grado Mobitz II",
    dificultad: "Muy alta",
    caso: "Mujer de 70 años presenta episodios de presíncope. El ECG muestra ritmo sinusal con intervalos PR constantes y, de forma súbita, algunas ondas P no son seguidas por complejos QRS. El QRS es ancho.",
    pregunta: "¿Cuál es la interpretación más apropiada?",
    opciones: [
      "Bloqueo AV Mobitz I benigno",
      "Bloqueo AV Mobitz II con riesgo elevado de progresión a bloqueo completo",
      "Bloqueo sinoauricular",
      "Fibrilación auricular lenta",
      "Taquicardia auricular con bloqueo variable"
    ],
    respuestaCorrecta: 1,
    explicacion: "En Mobitz II existe conducción AV constante antes de la onda P bloqueada, sin prolongación progresiva del PR. Suele reflejar enfermedad infranodal, especialmente cuando existe QRS ancho, y tiene riesgo significativo de progresión a bloqueo AV completo.",
    perlaENARM: "PR constante + P no conducida súbitamente = Mobitz II; no esperar a que aparezca bloqueo completo para valorar estimulación.",
    gpc: {
      mexico: "GPC IMSS-352-09, diagnóstico y tratamiento del bloqueo auriculoventricular.",
      internacional: "ESC 2021 Pacing and CRT Guidelines; ACC/AHA/HRS 2018 Bradycardia Guideline."
    },
    bibliografia: "GPC IMSS-352-09; ESC 2021 Pacing and CRT Guidelines; ACC/AHA/HRS 2018."
  },

  {
    id: "CARD-233",
    especialidad: "Cardiología",
    tema: "Trastornos de conducción",
    subtema: "Bloqueo AV completo",
    dificultad: "Muy alta",
    caso: "Varón de 76 años presenta síncope. El ECG muestra ondas P regulares a 90 lpm y complejos QRS regulares a 34 lpm sin relación fija entre ambas actividades. El QRS es ancho.",
    pregunta: "¿Cuál es el diagnóstico?",
    opciones: [
      "Bloqueo AV de primer grado",
      "Mobitz I",
      "Mobitz II",
      "Bloqueo AV completo",
      "Bloqueo sinoauricular"
    ],
    respuestaCorrecta: 3,
    explicacion: "La ausencia de relación entre la actividad auricular y ventricular, con frecuencias auricular y ventricular independientes, demuestra disociación AV completa. El QRS ancho y la frecuencia ventricular lenta sugieren un ritmo de escape infranodal.",
    perlaENARM: "Ondas P y QRS independientes = bloqueo AV completo.",
    gpc: {
      mexico: "GPC IMSS-352-09, diagnóstico y tratamiento del bloqueo auriculoventricular.",
      internacional: "ESC 2021 Pacing and CRT Guidelines; ACC/AHA/HRS 2018 Bradycardia Guideline."
    },
    bibliografia: "GPC IMSS-352-09; ESC 2021 Pacing and CRT Guidelines."
  },

  {
    id: "CARD-234",
    especialidad: "Cardiología",
    tema: "Trastornos de conducción",
    subtema: "Disfunción del nodo sinusal",
    dificultad: "Muy alta",
    caso: "Mujer de 69 años presenta episodios recurrentes de síncope. El monitor ambulatorio demuestra pausas sinusales de 5 segundos que coinciden temporalmente con los episodios. No recibe medicamentos cronotrópicos negativos y no existe causa metabólica reversible.",
    pregunta: "¿Cuál es el tratamiento definitivo más apropiado?",
    opciones: [
      "No realizar tratamiento porque no existe una frecuencia cardiaca mínima específica para indicar marcapasos",
      "Implantar marcapasos permanente",
      "Administrar adenosina",
      "Administrar verapamilo",
      "Realizar desfibrilación preventiva"
    ],
    respuestaCorrecta: 1,
    explicacion: "En disfunción del nodo sinusal, la decisión de estimulación depende fundamentalmente de la correlación entre síntomas y bradiarritmia. En esta paciente existe una correlación temporal clara entre pausas sinusales y síncope, sin causa reversible identificable.",
    perlaENARM: "En disfunción sinusal no existe una cifra universal de FC o duración de pausa que por sí sola indique marcapasos: importa la correlación clínica.",
    gpc: {
      mexico: "GPC IMSS-569-12, síndrome de seno enfermo.",
      internacional: "ESC 2021 Pacing and CRT Guidelines; ACC/AHA/HRS 2018 Bradycardia Guideline."
    },
    bibliografia: "GPC IMSS-569-12; ESC 2021 Pacing and CRT Guidelines; ACC/AHA/HRS 2018."
  },

  {
    id: "CARD-235",
    especialidad: "Cardiología",
    tema: "Trastornos de conducción",
    subtema: "Bradicardia nocturna y apnea obstructiva",
    dificultad: "Alta",
    caso: "Varón de 52 años presenta bradicardia nocturna y pausas sinusales durante el sueño. Su esposa refiere ronquidos intensos y episodios de apnea. Durante el día mantiene frecuencia cardiaca normal y no presenta síncope.",
    pregunta: "¿Cuál es el siguiente paso más apropiado?",
    opciones: [
      "Implantar inmediatamente un marcapasos permanente",
      "Evaluar apnea obstructiva del sueño y tratarla si está presente",
      "Administrar atropina nocturna",
      "Implantar un desfibrilador",
      "Realizar ablación del nodo AV"
    ],
    respuestaCorrecta: 1,
    explicacion: "Las bradiarritmias nocturnas pueden estar asociadas con apnea obstructiva del sueño. En ausencia de síntomas atribuibles a bradicardia durante la vigilia o enfermedad de conducción avanzada, debe investigarse y tratarse la apnea antes de indicar un dispositivo.",
    perlaENARM: "Bradicardia nocturna + ronquidos/apneas = buscar apnea obstructiva antes de implantar marcapasos.",
    gpc: {
      mexico: "GPC mexicana relacionada con trastornos de conducción.",
      internacional: "ESC 2021 Pacing and CRT Guidelines."
    },
    bibliografia: "ESC 2021 Pacing and CRT Guidelines; ACC/AHA/HRS 2018 Bradycardia Guideline."
  },

  {
    id: "CARD-236",
    especialidad: "Cardiología",
    tema: "Síncope",
    subtema: "Síncope reflejo",
    dificultad: "Alta",
    caso: "Mujer de 24 años presenta síncope mientras permanece de pie durante 40 minutos en un lugar caluroso. Antes de perder la conciencia presenta náusea, diaforesis y sensación de calor. Recupera completamente la conciencia al colocarse en decúbito.",
    pregunta: "¿Cuál es el diagnóstico más probable?",
    opciones: [
      "Síncope reflejo vasovagal",
      "Taquicardia ventricular",
      "Bloqueo AV completo",
      "Estenosis aórtica grave",
      "Embolia pulmonar masiva"
    ],
    respuestaCorrecta: 0,
    explicacion: "La situación desencadenante, el pródromo autonómico y la recuperación rápida son característicos de síncope vasovagal. El diagnóstico es fundamentalmente clínico cuando la historia es típica.",
    perlaENARM: "Pródromo autonómico + bipedestación prolongada + calor = síncope vasovagal.",
    gpc: {
      mexico: "No se identifica una GPC mexicana específica vigente dedicada exclusivamente a síncope reflejo.",
      internacional: "ESC 2018 Guidelines for the Diagnosis and Management of Syncope; ESC 2021 Pacing and CRT Guidelines."
    },
    bibliografia: "ESC Syncope Guidelines; ESC 2021 Pacing and CRT Guidelines."
  },

  {
    id: "CARD-237",
    especialidad: "Cardiología",
    tema: "Síncope",
    subtema: "Síncope cardiogénico",
    dificultad: "Muy alta",
    caso: "Varón de 68 años con antecedente de infarto presenta síncope súbito durante el ejercicio, sin pródromo. El ECG basal muestra cicatriz de infarto y extrasístoles ventriculares frecuentes.",
    pregunta: "¿Cuál de las siguientes características aumenta más la sospecha de origen cardiaco?",
    opciones: [
      "Síncope después de estar mucho tiempo de pie",
      "Pródromo prolongado de náusea y calor",
      "Síncope durante el ejercicio sin pródromo",
      "Síncope inmediatamente después de una extracción sanguínea",
      "Historia de miedo intenso antes del episodio"
    ],
    respuestaCorrecta: 2,
    explicacion: "El síncope durante el ejercicio, particularmente sin pródromo y en presencia de cardiopatía estructural, es una bandera roja para una causa cardiaca potencialmente arrítmica. Requiere evaluación cardiovascular dirigida.",
    perlaENARM: "Síncope de esfuerzo sin pródromo = pensar primero en causa cardiaca.",
    gpc: {
      mexico: "GPC mexicana relacionada con síncope y trastornos de conducción.",
      internacional: "ESC Guidelines for Syncope; ESC 2022 Ventricular Arrhythmias Guidelines."
    },
    bibliografia: "ESC Syncope Guidelines; ESC 2022 Ventricular Arrhythmias Guidelines."
  },

  {
    id: "CARD-238",
    especialidad: "Cardiología",
    tema: "Síncope",
    subtema: "Monitorización prolongada",
    dificultad: "Muy alta",
    caso: "Mujer de 58 años presenta episodios de síncope impredecibles aproximadamente cada cuatro meses. ECG, ecocardiograma, prueba ortostática y monitorización Holter de 24 horas no identifican la causa. La sospecha de origen arrítmico permanece elevada.",
    pregunta: "¿Cuál es el método de monitorización más apropiado?",
    opciones: [
      "Repetir Holter de 24 horas cada semana",
      "Implantar un registrador de eventos implantable de larga duración",
      "Realizar únicamente ECG anual",
      "Realizar prueba de esfuerzo diariamente",
      "Solicitar radiografía de tórax"
    ],
    respuestaCorrecta: 1,
    explicacion: "Cuando los episodios son infrecuentes y permanece una sospecha arrítmica después de una evaluación convencional negativa, la monitorización prolongada mediante un implantable loop recorder puede aumentar considerablemente la probabilidad de correlacionar el episodio con el ritmo cardiaco.",
    perlaENARM: "Síncope infrecuente + estudio inicial negativo + sospecha arrítmica = ILR.",
    gpc: {
      mexico: "GPC mexicana relacionada con síncope y trastornos de conducción.",
      internacional: "ESC 2021 Pacing and CRT Guidelines; ESC Syncope Guidelines."
    },
    bibliografia: "ESC 2021 Pacing and CRT Guidelines; ESC Syncope Guidelines."
  },

  {
    id: "CARD-239",
    especialidad: "Cardiología",
    tema: "Electrocardiografía",
    subtema: "Alternancia de bloqueo de rama",
    dificultad: "Muy alta",
    caso: "Varón de 75 años presenta episodios de presíncope. En diferentes ECG realizados durante la hospitalización se observa bloqueo completo de rama derecha en algunos trazos y bloqueo completo de rama izquierda en otros, sin un patrón estable.",
    pregunta: "¿Qué implica este hallazgo?",
    opciones: [
      "Variante normal del ECG",
      "Enfermedad significativa de ambos fascículos y alto riesgo de bloqueo AV completo",
      "Bloqueo AV de primer grado aislado",
      "Síndrome de Wolff-Parkinson-White",
      "Pericarditis aguda"
    ],
    respuestaCorrecta: 1,
    explicacion: "El bloqueo alternante de rama demuestra enfermedad significativa de ambos sistemas de conducción intraventricular. Se considera un marcador de enfermedad infranodal avanzada y existe alto riesgo de progresión a bloqueo AV completo, por lo que requiere valoración para estimulación.",
    perlaENARM: "Alternancia BRD ↔ BRI = enfermedad grave del sistema His-Purkinje.",
    gpc: {
      mexico: "GPC mexicana relacionada con trastornos de conducción.",
      internacional: "ACC/AHA/HRS 2018 Bradycardia and Conduction Delay Guideline."
    },
    bibliografia: "ACC/AHA/HRS 2018 Bradycardia and Conduction Delay Guideline; ESC 2021 Pacing and CRT Guidelines."
  },

  {
    id: "CARD-240",
    especialidad: "Cardiología",
    tema: "Marcapasos",
    subtema: "Bloqueo AV y estimulación permanente",
    dificultad: "Muy alta",
    caso: "Mujer de 73 años presenta bloqueo AV completo no relacionado con fármacos, alteraciones electrolíticas ni isquemia aguda. Permanece hemodinámicamente estable gracias a un ritmo de escape ventricular.",
    pregunta: "¿Cuál es la conducta definitiva?",
    opciones: [
      "Observación indefinida mientras permanezca estable",
      "Marcapasos permanente",
      "Ablación del nodo AV",
      "Desfibrilador implantable obligatorio en todos los casos",
      "Solo tratamiento con atropina oral"
    ],
    respuestaCorrecta: 1,
    explicacion: "El bloqueo AV completo adquirido no atribuible a una causa reversible constituye una indicación de estimulación permanente, incluso cuando el paciente se encuentra temporalmente estable debido a un ritmo de escape.",
    perlaENARM: "Bloqueo AV completo no reversible = marcapasos permanente, aunque el paciente esté temporalmente estable.",
    gpc: {
      mexico: "GPC IMSS-352-09, bloqueo auriculoventricular.",
      internacional: "ESC 2021 Pacing and CRT Guidelines; ACC/AHA/HRS 2018 Bradycardia Guideline."
    },
    bibliografia: "GPC IMSS-352-09; ESC 2021 Pacing and CRT Guidelines."
  },

  {
    id: "CARD-241",
    especialidad: "Cardiología",
    tema: "Marcapasos",
    subtema: "Síndrome taquicardia-bradicardia",
    dificultad: "Muy alta",
    caso: "Mujer de 71 años con fibrilación auricular paroxística presenta pausas sinusales de 6 segundos después de terminación espontánea de la FA, acompañadas de síncope. Requiere tratamiento farmacológico para prevenir recurrencias de FA.",
    pregunta: "¿Cuál es una estrategia apropiada?",
    opciones: [
      "Evitar todo tratamiento de FA por las pausas",
      "Considerar marcapasos permanente para tratar la bradiarritmia y permitir el manejo de la taquiarritmia",
      "Implantar únicamente un desfibrilador por la presencia de FA",
      "Administrar adenosina de manera preventiva",
      "Realizar trombólisis"
    ],
    respuestaCorrecta: 1,
    explicacion: "El síndrome taquicardia-bradicardia es una forma de disfunción del nodo sinusal. Cuando las pausas son sintomáticas y se requiere tratamiento de la taquiarritmia que puede empeorar la bradicardia, la estimulación permanente puede permitir un manejo seguro.",
    perlaENARM: "Taquiarritmia + pausas sintomáticas = síndrome taquicardia-bradicardia; el marcapasos puede permitir tratar la taquiarritmia.",
    gpc: {
      mexico: "GPC IMSS-569-12, síndrome de seno enfermo; GPC IMSS-014-08, fibrilación auricular.",
      internacional: "ESC 2021 Pacing and CRT Guidelines; ESC 2024 AF Guidelines."
    },
    bibliografia: "GPC IMSS-569-12; ESC 2021 Pacing and CRT Guidelines; ESC 2024 AF Guidelines."
  },

  {
    id: "CARD-242",
    especialidad: "Cardiología",
    tema: "Desfibrilador automático implantable",
    subtema: "Prevención secundaria de muerte súbita",
    dificultad: "Muy alta",
    caso: "Varón de 61 años con cardiopatía isquémica y FEVI de 38% presenta taquicardia ventricular sostenida documentada que causa síncope. No existe alteración reversible como hipopotasemia o isquemia aguda en el momento del evento.",
    pregunta: "¿Cuál es la estrategia de prevención de muerte súbita más apropiada?",
    opciones: [
      "Solo betabloqueador",
      "Desfibrilador automático implantable para prevención secundaria, tras excluir causas reversibles",
      "Marcapasos simple sin capacidad de desfibrilación",
      "Aspirina como tratamiento antiarrítmico",
      "Ningún tratamiento porque la FEVI es mayor de 35%"
    ],
    respuestaCorrecta: 1,
    explicacion: "Una TV sostenida hemodinámicamente significativa en un paciente con cardiopatía estructural, sin causa reversible, constituye un escenario clásico de prevención secundaria con ICD. La FEVI aislada no debe utilizarse para negar esta indicación.",
    perlaENARM: "TV sostenida no reversible + cardiopatía estructural = pensar en ICD de prevención secundaria.",
    gpc: {
      mexico: "GPC mexicana relacionada con arritmias ventriculares y cardiopatía isquémica.",
      internacional: "ESC 2022 Guidelines for Ventricular Arrhythmias and Prevention of Sudden Cardiac Death."
    },
    bibliografia: "ESC 2022 Ventricular Arrhythmias Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-243",
    especialidad: "Cardiología",
    tema: "Desfibrilador automático implantable",
    subtema: "Prevención primaria en cardiopatía isquémica",
    dificultad: "Muy alta",
    caso: "Varón de 66 años sufrió un IAM hace ocho meses. Tras revascularización y tratamiento médico óptimo mantiene FEVI de 28%. Permanece en ritmo sinusal y presenta clase funcional NYHA II.",
    pregunta: "¿Qué estrategia debe considerarse para prevención primaria de muerte súbita?",
    opciones: [
      "No realizar ninguna valoración porque el IAM ocurrió hace meses",
      "Considerar ICD si cumple criterios de prevención primaria después de tratamiento médico óptimo y periodo apropiado posterior al IAM/revascularización",
      "Implantar únicamente marcapasos",
      "Realizar ablación del nodo AV",
      "Administrar verapamilo como prevención de muerte súbita"
    ],
    respuestaCorrecta: 1,
    explicacion: "Los pacientes con cardiopatía isquémica y FEVI persistentemente reducida pese a tratamiento médico óptimo pueden ser candidatos a ICD para prevención primaria. La decisión debe realizarse después del periodo apropiado posterior al IAM y revascularización, evitando implantarlo demasiado pronto cuando aún existe posibilidad de recuperación ventricular.",
    perlaENARM: "ICD primario post-IAM no se decide inmediatamente: esperar el periodo apropiado y optimizar tratamiento/revascularización.",
    gpc: {
      mexico: "GPC mexicana relacionada con insuficiencia cardiaca y cardiopatía isquémica.",
      internacional: "ESC 2022 Ventricular Arrhythmias and SCD Guidelines."
    },
    bibliografia: "ESC 2022 Ventricular Arrhythmias Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-244",
    especialidad: "Cardiología",
    tema: "Resincronización cardiaca",
    subtema: "CRT en bloqueo de rama izquierda",
    dificultad: "Muy alta",
    caso: "Mujer de 67 años con HFrEF sintomática pese a tratamiento médico óptimo presenta FEVI de 28%, ritmo sinusal, bloqueo completo de rama izquierda y QRS de 168 ms.",
    pregunta: "¿Cuál es la terapia con dispositivos que ofrece mayor beneficio potencial?",
    opciones: [
      "Marcapasos ventricular derecho convencional",
      "CRT",
      "Holter implantable exclusivamente",
      "Desfibrilador subcutáneo sin resincronización",
      "Ablación del nodo AV como primera opción"
    ],
    respuestaCorrecta: 1,
    explicacion: "La combinación de HFrEF, FEVI ≤35%, ritmo sinusal, BRI y QRS ≥150 ms representa uno de los escenarios con mayor evidencia de beneficio de resincronización cardiaca. La CRT puede mejorar síntomas, remodelado ventricular y resultados cardiovasculares en pacientes adecuadamente seleccionados.",
    perlaENARM: "HFrEF + BRI + QRS ≥150 ms + ritmo sinusal = escenario clásico de alto beneficio para CRT.",
    gpc: {
      mexico: "GPC-SS-219-24 relacionada con insuficiencia cardiaca.",
      internacional: "ESC 2021 Guidelines on Cardiac Pacing and CRT."
    },
    bibliografia: "ESC 2021 Pacing and CRT Guidelines; GPC-SS-219-24; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-245",
    especialidad: "Cardiología",
    tema: "Resincronización cardiaca",
    subtema: "FA y captura biventricular",
    dificultad: "Muy alta",
    caso: "Varón de 74 años con HFrEF, FEVI de 25% y fibrilación auricular permanente recibe CRT. La interrogación del dispositivo demuestra solo 82% de estimulación biventricular efectiva debido a conducción AV intrínseca rápida.",
    pregunta: "¿Cuál es una estrategia apropiada para mejorar la eficacia de la CRT?",
    opciones: [
      "Aceptar 82% de captura porque cualquier porcentaje es suficiente",
      "Considerar control más estricto de la frecuencia y, en casos seleccionados, ablación de la unión AV para asegurar alta captura biventricular",
      "Suspender CRT",
      "Cambiar automáticamente a marcapasos ventricular derecho",
      "Administrar adenosina crónicamente"
    ],
    respuestaCorrecta: 1,
    explicacion: "La CRT en pacientes con FA requiere una proporción muy alta de estimulación biventricular efectiva. Cuando la conducción AV impide alcanzar una captura adecuada pese al control farmacológico, puede considerarse ablación de la unión AV para asegurar la estimulación biventricular.",
    perlaENARM: "CRT + FA: si no se consigue captura biventricular suficiente, considerar ablación AV en pacientes seleccionados.",
    gpc: {
      mexico: "GPC-SS-219-24 relacionada con insuficiencia cardiaca.",
      internacional: "ESC 2021 Guidelines on Cardiac Pacing and CRT."
    },
    bibliografia: "ESC 2021 Pacing and CRT Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-246",
    especialidad: "Cardiología",
    tema: "Dispositivos cardiacos",
    subtema: "Desfibrilador subcutáneo",
    dificultad: "Muy alta",
    caso: "Varón de 29 años con miocardiopatía arritmogénica presenta indicación de ICD para prevención de muerte súbita. No tiene indicación de estimulación permanente ni necesidad de resincronización y presenta acceso venoso difícil.",
    pregunta: "¿Qué tipo de dispositivo puede ser particularmente atractivo?",
    opciones: [
      "Marcapasos unicameral transvenoso",
      "ICD subcutáneo",
      "CRT-P",
      "Holter implantable",
      "Marcapasos temporal"
    ],
    respuestaCorrecta: 1,
    explicacion: "El ICD subcutáneo puede ser una alternativa cuando se requiere desfibrilación pero no existe necesidad de estimulación antibradicardia, resincronización o estimulación antitaquicardia ventricular. Además evita la colocación de electrodos intravasculares.",
    perlaENARM: "ICD necesario + sin necesidad de pacing/CRT = considerar sistema subcutáneo en pacientes seleccionados.",
    gpc: {
      mexico: "No se identifica una GPC mexicana específica vigente sobre selección de ICD subcutáneo.",
      internacional: "ESC 2022 Guidelines for Ventricular Arrhythmias and Prevention of Sudden Cardiac Death."
    },
    bibliografia: "ESC 2022 Ventricular Arrhythmias Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-247",
    especialidad: "Cardiología",
    tema: "Muerte súbita",
    subtema: "Tormenta eléctrica",
    dificultad: "Muy alta",
    caso: "Varón de 65 años con cardiopatía isquémica y ICD implantado presenta cuatro episodios de TV monomórfica sostenida en seis horas, todos tratados mediante terapias del dispositivo. Está ansioso, con hiperactividad simpática y permanece hemodinámicamente estable entre episodios.",
    pregunta: "¿Cuál es el concepto que describe mejor el cuadro?",
    opciones: [
      "Síndrome de QT largo congénito",
      "Tormenta eléctrica",
      "FA permanente",
      "Bloqueo AV completo",
      "Síndrome vasovagal"
    ],
    respuestaCorrecta: 1,
    explicacion: "La tormenta eléctrica se caracteriza por múltiples episodios de arritmia ventricular sostenida en un periodo corto, clásicamente tres o más episodios en 24 horas que requieren intervención. Es una emergencia arrítmica que requiere identificar precipitantes, optimizar tratamiento, controlar el tono simpático y considerar ablación en casos apropiados.",
    perlaENARM: "≥3 episodios de TV/FV sostenida en 24 h = tormenta eléctrica.",
    gpc: {
      mexico: "No se identifica una GPC mexicana específica vigente para tormenta eléctrica.",
      internacional: "ESC 2022 Guidelines for Ventricular Arrhythmias and Prevention of Sudden Cardiac Death."
    },
    bibliografia: "ESC 2022 Ventricular Arrhythmias Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-248",
    especialidad: "Cardiología",
    tema: "Muerte súbita",
    subtema: "Síndrome de Wolff-Parkinson-White y muerte súbita",
    dificultad: "Muy alta",
    caso: "Varón de 25 años presenta síncope durante el ejercicio. El ECG muestra PR corto, onda delta y QRS ensanchado. Tiene antecedente familiar de muerte súbita inexplicada.",
    pregunta: "¿Cuál es la conducta más apropiada?",
    opciones: [
      "Considerar el hallazgo benigno y no realizar seguimiento",
      "Evaluación especializada para estratificación de riesgo de la vía accesoria y considerar ablación",
      "Administrar digoxina de manera preventiva",
      "Administrar verapamilo crónicamente como prevención de muerte súbita",
      "Indicar anticoagulación como tratamiento definitivo"
    ],
    respuestaCorrecta: 1,
    explicacion: "El patrón de preexcitación asociado con síncope y antecedente familiar de muerte súbita requiere evaluación especializada. La estratificación de la vía accesoria y la ablación pueden ser apropiadas dependiendo del riesgo y las características de la vía.",
    perlaENARM: "WPW + síncope + antecedente familiar de muerte súbita = no asumir que la preexcitación es incidental.",
    gpc: {
      mexico: "GPC IMSS-406-10, síndrome de Wolff-Parkinson-White.",
      internacional: "ESC guidance on supraventricular tachycardia and contemporary ventricular arrhythmia guidance."
    },
    bibliografia: "GPC IMSS-406-10; Braunwald's Heart Disease, 12th ed.; ESC arrhythmia guidance."
  },

  {
    id: "CARD-249",
    especialidad: "Cardiología",
    tema: "Muerte súbita",
    subtema: "Miocardiopatía hipertrófica y muerte súbita",
    dificultad: "Muy alta",
    caso: "Varón de 36 años con miocardiopatía hipertrófica presenta síncope inexplicado. La resonancia cardiaca demuestra fibrosis miocárdica extensa y el Holter registra episodios de taquicardia ventricular no sostenida.",
    pregunta: "¿Cuál es la prioridad clínica?",
    opciones: [
      "Considerar que el síncope es probablemente vasovagal",
      "Realizar estratificación integral del riesgo de muerte súbita y valorar indicación de ICD",
      "Indicar únicamente diurético",
      "Suspender toda actividad cardiológica",
      "Realizar anticoagulación independientemente del ritmo"
    ],
    respuestaCorrecta: 1,
    explicacion: "En la miocardiopatía hipertrófica, síncope inexplicado, taquicardia ventricular no sostenida y fibrosis extensa son elementos relevantes para la estratificación de riesgo de muerte súbita. La decisión de ICD requiere integrar múltiples factores y debe realizarse en un centro con experiencia.",
    perlaENARM: "HCM + síncope inexplicado + NSVT + fibrosis extensa = alto interés para estratificación de muerte súbita.",
    gpc: {
      mexico: "No se identifica una GPC mexicana específica y vigente dedicada a estratificación avanzada de muerte súbita en HCM.",
      internacional: "ESC 2023 Cardiomyopathies Guidelines; ESC 2022 Ventricular Arrhythmias Guidelines."
    },
    bibliografia: "ESC 2023 Cardiomyopathies Guidelines; ESC 2022 Ventricular Arrhythmias Guidelines; Braunwald's Heart Disease, 12th ed."
  },

  {
    id: "CARD-250",
    especialidad: "Cardiología",
    tema: "Electrocardiografía avanzada",
    subtema: "Síncope y bloqueo AV paroxístico",
    dificultad: "Muy alta",
    caso: "Mujer de 67 años presenta episodios de síncope impredecibles. Tiene bloqueo de rama derecha y hemibloqueo anterior izquierdo. El estudio inicial no demuestra arritmia. Un registrador implantable posteriormente documenta una pausa ventricular de 8 segundos debido a bloqueo AV paroxístico durante uno de los episodios.",
    pregunta: "¿Cuál es la conducta definitiva más apropiada?",
    opciones: [
      "No realizar intervención porque el episodio fue espontáneo",
      "Implantar marcapasos permanente",
      "Implantar únicamente un ICD subcutáneo",
      "Administrar betabloqueador",
      "Indicar únicamente hidratación"
    ],
    respuestaCorrecta: 1,
    explicacion: "El registro directo de un bloqueo AV paroxístico prolongado coincidente con síncope establece una relación causal entre la alteración de conducción y el episodio. En este contexto está indicada la estimulación permanente.",
    perlaENARM: "Cuando el monitor captura bloqueo AV durante el síncope, se establece el mecanismo y la indicación de pacing deja de ser especulativa.",
    gpc: {
      mexico: "GPC IMSS-352-09, bloqueo auriculoventricular.",
      internacional: "ESC 2021 Pacing and CRT Guidelines; ACC/AHA/HRS 2018 Bradycardia and Conduction Delay Guideline."
    },
    bibliografia: "GPC IMSS-352-09; ESC 2021 Pacing and CRT Guidelines; ACC/AHA/HRS 2018."
  },
        {
        id: "CARD-251",
        especialidad: "Cardiología",
        tema: "Fisiología coronaria",
        subtema: "FFR e iFR",
        dificultad: "Muy alta",
        caso: "Varón de 64 años con angina de esfuerzo. La angiografía muestra una estenosis de 60% en la arteria descendente anterior media. No existe lesión crítica adicional. Se realiza evaluación fisiológica invasiva.",
        pregunta: "¿Cuál de los siguientes resultados apoyaría que la lesión es hemodinámicamente significativa y podría justificar revascularización en el contexto clínico adecuado?",
        opciones: [
            "FFR de 0.92",
            "FFR de 0.86",
            "FFR de 0.81",
            "FFR de 0.74",
            "iFR de 0.94"
        ],
        respuestaCorrecta: 3,
        explicacion: "Un FFR ≤0.80 indica una lesión con relevancia fisiológica en el contexto apropiado. Un valor de 0.74 apoya isquemia inducible relacionada con la estenosis.",
        perlaENARM: "Una estenosis angiográficamente intermedia no debe juzgarse exclusivamente por porcentaje de estrechamiento cuando puede realizarse evaluación fisiológica.",
        gpc: {
            mexico: "GPC mexicanas de cardiopatía isquémica/SCA aplicables según contexto clínico.",
            internacional: "ESC 2024 Chronic Coronary Syndromes; ACC/AHA 2025 ACS cuando corresponda."
        },
        bibliografia: "ESC 2024 Chronic Coronary Syndromes; Braunwald's Heart Disease."
    },

    {
        id: "CARD-252",
        especialidad: "Cardiología",
        tema: "Fisiología coronaria",
        subtema: "iFR",
        dificultad: "Muy alta",
        caso: "Mujer de 59 años con angina estable. La angiografía identifica una lesión intermedia de la coronaria derecha. Se realiza iFR, obteniéndose un valor de 0.84.",
        pregunta: "¿Cuál es la interpretación más adecuada?",
        opciones: [
            "La lesión es claramente no significativa",
            "El resultado demuestra enfermedad microvascular aislada",
            "El resultado apoya relevancia fisiológica de la lesión",
            "El resultado confirma vasoespasmo coronario",
            "El resultado es diagnóstico de MINOCA"
        ],
        respuestaCorrecta: 2,
        explicacion: "Un iFR ≤0.89 se considera compatible con una lesión fisiológicamente significativa en el contexto de la evaluación de una estenosis intermedia.",
        perlaENARM: "FFR e iFR evalúan la repercusión fisiológica de una estenosis; no sustituyen la valoración clínica integral.",
        gpc: {
            mexico: "GPC mexicanas de cardiopatía isquémica aplicables al contexto.",
            internacional: "ESC 2024 Chronic Coronary Syndromes."
        },
        bibliografia: "ESC 2024 Chronic Coronary Syndromes; Braunwald's Heart Disease."
    },

    {
        id: "CARD-253",
        especialidad: "Cardiología",
        tema: "Fisiología coronaria",
        subtema: "Discordancia anatómica-fisiológica",
        dificultad: "Muy alta",
        caso: "Varón de 67 años con angina. Se observa una lesión angiográfica de 70% en una arteria coronaria. La evaluación fisiológica muestra FFR de 0.84. No hay datos de síndrome coronario agudo.",
        pregunta: "¿Cuál es la conducta más apropiada respecto a esa lesión aislada?",
        opciones: [
            "Realizar PCI obligatoriamente por ser una estenosis ≥70%",
            "Realizar CABG independientemente de la anatomía restante",
            "Considerar que la lesión no demuestra relevancia fisiológica y correlacionar con el contexto clínico",
            "Administrar fibrinolítico",
            "Diagnosticar MINOCA"
        ],
        respuestaCorrecta: 2,
        explicacion: "Una estenosis anatómicamente importante puede no producir una caída fisiológica significativa. Un FFR de 0.84 está por encima del umbral de 0.80.",
        perlaENARM: "En lesiones intermedias o discordantes, la fisiología puede evitar revascularización innecesaria.",
        gpc: {
            mexico: "GPC mexicanas de cardiopatía isquémica aplicables.",
            internacional: "ESC 2024 Chronic Coronary Syndromes."
        },
        bibliografia: "ESC 2024 Chronic Coronary Syndromes; Braunwald's Heart Disease."
    },

    {
        id: "CARD-254",
        especialidad: "Cardiología",
        tema: "Imagen intravascular",
        subtema: "IVUS/OCT",
        dificultad: "Muy alta",
        caso: "Paciente de 61 años con SCA sometido a PCI. Después de implantar un stent persiste una duda acerca de expansión y aposición adecuada. La angiografía no permite determinar con precisión la causa.",
        pregunta: "¿Qué estrategia ofrece mayor información para evaluar directamente la expansión y aposición del stent?",
        opciones: [
            "Radiografía de tórax",
            "IVUS u OCT intracoronaria",
            "Gammagrafía miocárdica",
            "Prueba de esfuerzo",
            "Ecocardiograma transtorácico únicamente"
        ],
        respuestaCorrecta: 1,
        explicacion: "IVUS y OCT permiten valorar la anatomía intracoronaria y el resultado del implante del stent, incluyendo expansión, aposición y complicaciones relacionadas.",
        perlaENARM: "La imagen intravascular es especialmente útil cuando la angiografía no explica adecuadamente un resultado subóptimo.",
        gpc: {
            mexico: "GPC mexicanas de cardiopatía isquémica aplicables.",
            internacional: "ACC/AHA/ACEP/NAEMSP/SCAI 2025 ACS Guideline."
        },
        bibliografia: "ACC/AHA 2025 ACS Guideline; Braunwald's Heart Disease."
    },

    {
        id: "CARD-255",
        especialidad: "Cardiología",
        tema: "Intervencionismo coronario",
        subtema: "Complicaciones de PCI",
        dificultad: "Muy alta",
        caso: "Durante una PCI de la descendente anterior aparece dolor torácico súbito, hipotensión y deterioro inmediato del flujo coronario. La angiografía muestra extravasación de contraste desde la arteria tratada.",
        pregunta: "¿Cuál es la complicación más probable?",
        opciones: [
            "No-reflow por microembolización exclusivamente",
            "Perforación coronaria",
            "Espasmo esofágico",
            "Disección aórtica crónica",
            "Pericarditis viral"
        ],
        respuestaCorrecta: 1,
        explicacion: "La extravasación de contraste durante PCI es característica de perforación coronaria. Puede producir hemopericardio y taponamiento cardiaco.",
        perlaENARM: "Tras PCI, hipotensión súbita + extravasación coronaria = pensar inmediatamente en perforación y buscar taponamiento.",
        gpc: {
            mexico: "GPC mexicanas de cardiopatía isquémica aplicables.",
            internacional: "ACC/AHA 2025 ACS Guideline."
        },
        bibliografia: "ACC/AHA 2025 ACS Guideline; Braunwald's Heart Disease."
    },

    {
        id: "CARD-256",
        especialidad: "Cardiología",
        tema: "Intervencionismo coronario",
        subtema: "No-reflow",
        dificultad: "Muy alta",
        caso: "Paciente con IAMCEST es sometido a PCI primaria. Después de abrir la arteria epicárdica responsable, el flujo distal permanece marcadamente reducido pese a que no existe una obstrucción mecánica evidente del vaso epicárdico.",
        pregunta: "¿Cuál es el fenómeno más probable?",
        opciones: [
            "No-reflow",
            "Síndrome de Brugada",
            "Disección tipo A",
            "Pericarditis constrictiva",
            "Trombosis venosa profunda"
        ],
        respuestaCorrecta: 0,
        explicacion: "El fenómeno de no-reflow corresponde a alteración de la perfusión microvascular pese a restauración del flujo epicárdico, frecuente en el contexto de reperfusión de un IAM.",
        perlaENARM: "Abrir la arteria epicárdica no garantiza la reperfusión microvascular efectiva.",
        gpc: {
            mexico: "GPC mexicanas de IAM aplicables.",
            internacional: "ACC/AHA 2025 ACS Guideline."
        },
        bibliografia: "ACC/AHA 2025 ACS Guideline; Braunwald's Heart Disease."
    },

    {
        id: "CARD-257",
        especialidad: "Cardiología",
        tema: "MINOCA",
        subtema: "Diagnóstico diferencial",
        dificultad: "Muy alta",
        caso: "Mujer de 48 años presenta dolor torácico, elevación dinámica de troponina y cambios isquémicos en el ECG. La angiografía no muestra una estenosis coronaria obstructiva. El ecocardiograma demuestra alteración segmentaria de la movilidad.",
        pregunta: "¿Cuál es el siguiente estudio con mayor utilidad para esclarecer la etiología del cuadro cuando persiste la sospecha de MINOCA?",
        opciones: [
            "Colonoscopia",
            "Resonancia magnética cardiaca",
            "Radiografía de manos",
            "Espirometría",
            "Holter de 24 horas como único estudio"
        ],
        respuestaCorrecta: 1,
        explicacion: "La resonancia magnética cardiaca permite diferenciar infarto, miocarditis, Takotsubo y otras causas de lesión miocárdica en pacientes con sospecha de MINOCA.",
        perlaENARM: "MINOCA es un diagnóstico de trabajo, no una etiología final: hay que identificar el mecanismo.",
        gpc: {
            mexico: "GPC mexicanas de SCA aplicables.",
            internacional: "ESC 2023 ACS Guideline; ACC/AHA 2025 ACS Guideline."
        },
        bibliografia: "ESC 2023 ACS; ACC/AHA 2025 ACS; Braunwald's Heart Disease."
    },

    {
        id: "CARD-258",
        especialidad: "Cardiología",
        tema: "MINOCA",
        subtema: "Miocarditis vs infarto",
        dificultad: "Muy alta",
        caso: "Paciente con troponina elevada y angiografía sin lesiones obstructivas. La resonancia cardiaca muestra realce tardío subepicárdico e inferolateral, asociado a edema miocárdico.",
        pregunta: "¿Qué diagnóstico explica mejor este patrón?",
        opciones: [
            "Infarto subendocárdico por aterotrombosis",
            "Miocarditis",
            "Amiloidosis cardiaca exclusivamente",
            "Estenosis aórtica",
            "Pericarditis constrictiva"
        ],
        respuestaCorrecta: 1,
        explicacion: "El realce subepicárdico o mesomiocárdico con edema favorece un patrón inflamatorio no isquémico, típico de miocarditis.",
        perlaENARM: "Patrón isquémico: subendocárdico/transmural siguiendo un territorio vascular. Patrón no isquémico: subepicárdico o mesomiocárdico.",
        gpc: {
            mexico: "GPC mexicanas aplicables según etiología.",
            internacional: "ESC 2025 Myocarditis and Pericarditis."
        },
        bibliografia: "ESC 2025 Myocarditis and Pericarditis; Braunwald's Heart Disease."
    },

    {
        id: "CARD-259",
        especialidad: "Cardiología",
        tema: "MINOCA",
        subtema: "Takotsubo",
        dificultad: "Muy alta",
        caso: "Mujer de 67 años desarrolla dolor torácico después de un evento emocional intenso. Presenta elevación moderada de troponina y cambios electrocardiográficos. La angiografía no muestra obstrucción coronaria significativa. El ecocardiograma demuestra acinesia apical con hipercontractilidad basal.",
        pregunta: "¿Cuál es el diagnóstico más probable?",
        opciones: [
            "Takotsubo",
            "IAM inferior por oclusión de coronaria derecha",
            "Miocarditis bacteriana",
            "Pericarditis constrictiva",
            "Estenosis mitral crítica"
        ],
        respuestaCorrecta: 0,
        explicacion: "La disfunción ventricular apical característica, ausencia de enfermedad coronaria obstructiva y desencadenante emocional favorecen síndrome de Takotsubo.",
        perlaENARM: "Takotsubo puede simular un SCA y formar parte del diagnóstico diferencial de MINOCA.",
        gpc: {
            mexico: "GPC mexicanas de SCA aplicables al abordaje inicial.",
            internacional: "ESC 2023 ACS; literatura contemporánea sobre Takotsubo."
        },
        bibliografia: "ESC 2023 ACS; Braunwald's Heart Disease."
    },

    {
        id: "CARD-260",
        especialidad: "Cardiología",
        tema: "Disección coronaria espontánea",
        subtema: "SCAD",
        dificultad: "Muy alta",
        caso: "Mujer de 36 años, sin factores de riesgo cardiovascular importantes, presenta SCA. La angiografía muestra una lesión larga y estrechamiento difuso de una arteria coronaria, sin una placa aterosclerótica típica.",
        pregunta: "¿Qué diagnóstico debe considerarse especialmente?",
        opciones: [
            "Disección coronaria espontánea",
            "Estenosis aórtica",
            "Endocarditis tricuspídea",
            "Miocardiopatía hipertrófica obstructiva",
            "Taponamiento cardiaco"
        ],
        respuestaCorrecta: 0,
        explicacion: "SCAD debe considerarse en mujeres jóvenes con SCA, especialmente cuando la angiografía muestra estrechamientos largos, difusos o patrones angiográficos atípicos para aterosclerosis.",
        perlaENARM: "En SCAD, la intervención coronaria no debe realizarse automáticamente; la estrategia depende de estabilidad, flujo coronario y anatomía.",
        gpc: {
            mexico: "GPC mexicanas de SCA aplicables al diagnóstico inicial.",
            internacional: "ACC/AHA 2025 ACS Guideline y literatura especializada sobre SCAD."
        },
        bibliografia: "ACC/AHA 2025 ACS Guideline; Braunwald's Heart Disease."
    },

    {
        id: "CARD-261",
        especialidad: "Cardiología",
        tema: "Disección coronaria espontánea",
        subtema: "SCAD y tratamiento",
        dificultad: "Muy alta",
        caso: "Mujer de 42 años con SCAD confirmado presenta flujo coronario conservado, estabilidad hemodinámica, dolor en resolución y ausencia de isquemia persistente. No existe una lesión proximal de alto riesgo.",
        pregunta: "¿Cuál es la estrategia generalmente preferida?",
        opciones: [
            "PCI inmediata de toda la disección",
            "CABG urgente en todos los casos",
            "Manejo conservador con vigilancia estrecha",
            "Fibrinólisis obligatoria",
            "Ablación por radiofrecuencia"
        ],
        respuestaCorrecta: 2,
        explicacion: "En pacientes estables con SCAD y flujo coronario conservado, el manejo conservador suele preferirse debido a la posibilidad de cicatrización espontánea y a las dificultades técnicas de la PCI.",
        perlaENARM: "SCAD estable no equivale automáticamente a indicación de PCI.",
        gpc: {
            mexico: "GPC mexicanas de SCA aplicables al contexto.",
            internacional: "Literatura contemporánea sobre SCAD; ACC/AHA 2025 ACS Guideline."
        },
        bibliografia: "ACC/AHA 2025 ACS; Braunwald's Heart Disease."
    },

    {
        id: "CARD-262",
        especialidad: "Cardiología",
        tema: "Cateterismo cardiaco",
        subtema: "Hemodinámica",
        dificultad: "Muy alta",
        caso: "Paciente con disnea progresiva presenta cateterismo derecho con presión arterial pulmonar media de 32 mmHg, presión de enclavamiento pulmonar de 10 mmHg y resistencia vascular pulmonar de 4.5 UW.",
        pregunta: "¿Cómo se clasifica hemodinámicamente este patrón?",
        opciones: [
            "Hipertensión pulmonar exclusivamente poscapilar",
            "Hipertensión pulmonar precapilar",
            "Hipertensión pulmonar aislada por volumen",
            "Hipertensión venosa pulmonar sin aumento de RVP",
            "Hemodinámica normal"
        ],
        respuestaCorrecta: 1,
        explicacion: "La hipertensión pulmonar precapilar se caracteriza por mPAP >20 mmHg, PAWP ≤15 mmHg y PVR >2 UW.",
        perlaENARM: "PAWP separa, de forma fundamental, los fenotipos precapilar y poscapilar.",
        gpc: {
            mexico: "GPC mexicanas de hipertensión pulmonar aplicables.",
            internacional: "ESC/ERS 2022 Pulmonary Hypertension."
        },
        bibliografia: "ESC/ERS 2022 Pulmonary Hypertension; Braunwald's Heart Disease."
    },

    {
        id: "CARD-263",
        especialidad: "Cardiología",
        tema: "Cateterismo cardiaco",
        subtema: "Hipertensión pulmonar poscapilar",
        dificultad: "Muy alta",
        caso: "Mujer de 74 años con HFpEF presenta disnea. Cateterismo derecho: mPAP 34 mmHg, PAWP 22 mmHg y PVR 1.7 UW.",
        pregunta: "¿Cuál es la interpretación más adecuada?",
        opciones: [
            "Hipertensión pulmonar precapilar",
            "Hipertensión pulmonar aislada poscapilar",
            "Hipertensión arterial pulmonar idiopática",
            "Hipertensión pulmonar tromboembólica crónica confirmada",
            "Hemodinámica normal"
        ],
        respuestaCorrecta: 1,
        explicacion: "La PAWP elevada indica transmisión retrógrada de las presiones izquierdas. Con PVR ≤2 UW, el patrón corresponde a hipertensión pulmonar aislada poscapilar.",
        perlaENARM: "HFpEF es una causa frecuente de hipertensión pulmonar poscapilar.",
        gpc: {
            mexico: "GPC mexicanas de insuficiencia cardiaca/hipertensión pulmonar aplicables.",
            internacional: "ESC/ERS 2022 Pulmonary Hypertension."
        },
        bibliografia: "ESC/ERS 2022 Pulmonary Hypertension; Braunwald's Heart Disease."
    },

    {
        id: "CARD-264",
        especialidad: "Cardiología",
        tema: "Cateterismo cardiaco",
        subtema: "Shunts intracardiacos",
        dificultad: "Muy alta",
        caso: "Paciente adulto con disnea y sospecha de comunicación interauricular es sometido a cateterismo. Se detecta un aumento significativo de la saturación de oxígeno al pasar de vena cava a aurícula derecha.",
        pregunta: "¿Qué hallazgo representa principalmente?",
        opciones: [
            "Shunt de derecha a izquierda",
            "Shunt de izquierda a derecha a nivel auricular",
            "Hipoxemia por enfermedad pulmonar exclusivamente",
            "Cortocircuito intrapulmonar",
            "Regurgitación aórtica"
        ],
        respuestaCorrecta: 1,
        explicacion: "Un salto de saturación de oxígeno entre las venas cavas y la aurícula derecha sugiere paso de sangre oxigenada hacia las cavidades derechas, compatible con un shunt de izquierda a derecha a nivel auricular.",
        perlaENARM: "Los 'oxygen saturation step-ups' ayudan a localizar cortocircuitos intracardiacos.",
        gpc: {
            mexico: "GPC mexicanas de cardiopatías congénitas.",
            internacional: "Guías internacionales de cardiopatía congénita del adulto."
        },
        bibliografia: "Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },

    {
        id: "CARD-265",
        especialidad: "Cardiología",
        tema: "Síndrome coronario agudo",
        subtema: "Trombosis de stent",
        dificultad: "Muy alta",
        caso: "Varón de 58 años con antecedente de PCI con stent hace 10 días presenta dolor torácico intenso, elevación del ST y colapso hemodinámico. La angiografía demuestra oclusión trombótica del stent previamente implantado.",
        pregunta: "¿Cuál es el diagnóstico?",
        opciones: [
            "Trombosis aguda del stent",
            "Reestenosis intrastent tardía",
            "Miocarditis",
            "Pericarditis",
            "Takotsubo"
        ],
        respuestaCorrecta: 0,
        explicacion: "La trombosis de stent puede presentarse como SCA, incluso con IAMCEST. La proximidad temporal al implante y la demostración angiográfica confirman el diagnóstico.",
        perlaENARM: "La suspensión prematura de antiagregantes es un factor de riesgo importante para trombosis del stent.",
        gpc: {
            mexico: "GPC mexicanas de SCA/PCI aplicables.",
            internacional: "ACC/AHA 2025 ACS Guideline."
        },
        bibliografia: "ACC/AHA 2025 ACS Guideline; Braunwald's Heart Disease."
    },

    {
        id: "CARD-266",
        especialidad: "Cardiología",
        tema: "Intervencionismo coronario",
        subtema: "Disección coronaria iatrogénica",
        dificultad: "Muy alta",
        caso: "Durante un cateterismo coronario se observa una nueva imagen lineal radiolúcida que se extiende desde el sitio de manipulación del catéter hacia el tronco coronario izquierdo, acompañada de deterioro del flujo.",
        pregunta: "¿Cuál es la complicación más probable?",
        opciones: [
            "Disección coronaria iatrogénica",
            "Miocarditis",
            "Endocarditis",
            "Embolia pulmonar",
            "Takotsubo"
        ],
        respuestaCorrecta: 0,
        explicacion: "La instrumentación coronaria puede producir disección iatrogénica, especialmente en ostios y segmentos proximales, con riesgo de compromiso del flujo y extensión.",
        perlaENARM: "Una nueva alteración angiográfica inmediatamente después de la manipulación del catéter debe hacer pensar en complicación iatrogénica.",
        gpc: {
            mexico: "GPC mexicanas de cardiopatía isquémica aplicables.",
            internacional: "ACC/AHA 2025 ACS Guideline."
        },
        bibliografia: "ACC/AHA 2025 ACS Guideline; Braunwald's Heart Disease."
    },

    {
        id: "CARD-267",
        especialidad: "Cardiología",
        tema: "Síndrome coronario agudo",
        subtema: "Acceso radial",
        dificultad: "Alta",
        caso: "Paciente con IAMCEST requiere PCI primaria. No existen contraindicaciones para el acceso radial.",
        pregunta: "¿Cuál es el acceso vascular preferido actualmente para PCI en SCA cuando es técnicamente factible?",
        opciones: [
            "Radial",
            "Femoral siempre",
            "Carótida",
            "Subclavio exclusivamente",
            "Yugular interna"
        ],
        respuestaCorrecta: 0,
        explicacion: "La vía radial es preferida frente a la femoral en PCI por SCA cuando es factible, debido a menor sangrado y menor incidencia de complicaciones vasculares.",
        perlaENARM: "En SCA sometido a PCI, radial es la estrategia de acceso preferida si no existe contraindicación.",
        gpc: {
            mexico: "GPC mexicanas de SCA aplicables.",
            internacional: "ACC/AHA/ACEP/NAEMSP/SCAI 2025 ACS Guideline."
        },
        bibliografia: "ACC/AHA 2025 ACS Guideline; Braunwald's Heart Disease."
    },

    {
        id: "CARD-268",
        especialidad: "Cardiología",
        tema: "Síndrome coronario agudo",
        subtema: "Revascularización completa",
        dificultad: "Muy alta",
        caso: "Paciente con IAMCEST es sometido a PCI primaria de la arteria responsable. Se identifican posteriormente otras lesiones coronarias significativas. El paciente está hemodinámicamente estable y sin choque cardiogénico.",
        pregunta: "¿Cuál es el principio contemporáneo respecto a la enfermedad multivaso?",
        opciones: [
            "Nunca debe tratarse una lesión no culpable",
            "La revascularización completa puede estar indicada según anatomía y contexto clínico",
            "Siempre debe realizarse CABG inmediatamente",
            "Debe administrarse fibrinólisis adicional",
            "Las lesiones no culpables no tienen relevancia pronóstica"
        ],
        respuestaCorrecta: 1,
        explicacion: "La estrategia contemporánea favorece la revascularización completa en pacientes seleccionados con SCA y enfermedad multivaso, individualizando el momento y la modalidad según anatomía y estabilidad.",
        perlaENARM: "En choque cardiogénico asociado a IAM, la estrategia inicial sobre lesiones no culpables es diferente y suele favorecer tratar inicialmente la arteria culpable.",
        gpc: {
            mexico: "GPC mexicanas de IAM aplicables.",
            internacional: "ACC/AHA 2025 ACS Guideline."
        },
        bibliografia: "ACC/AHA 2025 ACS Guideline; Braunwald's Heart Disease."
    },

    {
        id: "CARD-269",
        especialidad: "Cardiología",
        tema: "Cardiopatía isquémica",
        subtema: "ANOCA/INOCA",
        dificultad: "Muy alta",
        caso: "Mujer de 55 años presenta angina recurrente. La angiografía muestra arterias coronarias sin obstrucciones significativas. Persiste una fuerte sospecha de enfermedad coronaria funcional.",
        pregunta: "¿Qué estrategia diagnóstica puede establecer el mecanismo de ANOCA/INOCA cuando los síntomas persisten?",
        opciones: [
            "No realizar ninguna evaluación adicional",
            "Pruebas de función coronaria invasiva",
            "Biopsia hepática",
            "Electroencefalograma",
            "Colonoscopia"
        ],
        respuestaCorrecta: 1,
        explicacion: "La evaluación funcional coronaria invasiva puede identificar vasoespasmo epicárdico o disfunción microvascular en pacientes seleccionados con ANOCA/INOCA.",
        perlaENARM: "Una coronariografía no obstructiva no significa ausencia de enfermedad coronaria funcional.",
        gpc: {
            mexico: "GPC mexicanas de cardiopatía isquémica aplicables.",
            internacional: "ESC 2024 Chronic Coronary Syndromes."
        },
        bibliografia: "ESC 2024 Chronic Coronary Syndromes; Braunwald's Heart Disease."
    },

    {
        id: "CARD-270",
        especialidad: "Cardiología",
        tema: "Cardiología integrativa",
        subtema: "Caso ENARM de alta dificultad",
        dificultad: "Extrema",
        caso: "Varón de 63 años con diabetes y dislipidemia presenta angina de esfuerzo progresiva. La CCTA muestra una lesión de 60% en la descendente anterior. Se realiza angiografía invasiva por persistencia de síntomas. La lesión continúa estimándose en 60%. El FFR es 0.78. No existen otras lesiones relevantes y el paciente tiene tratamiento médico óptimo.",
        pregunta: "¿Cuál es la interpretación y conducta más adecuada?",
        opciones: [
            "La lesión debe ignorarse porque angiográficamente es menor de 70%",
            "El FFR demuestra relevancia fisiológica; debe discutirse revascularización junto con tratamiento médico óptimo",
            "El FFR de 0.78 demuestra exclusivamente enfermedad microvascular",
            "Debe realizarse fibrinólisis",
            "Debe diagnosticarse MINOCA"
        ],
        respuestaCorrecta: 1,
        explicacion: "Una lesión angiográficamente intermedia con FFR de 0.78 presenta evidencia de relevancia fisiológica. En un paciente sintomático pese a tratamiento médico óptimo, la decisión de revascularización debe discutirse integrando anatomía, síntomas, isquemia, preferencias y Heart Team cuando corresponda.",
        perlaENARM: "El porcentaje angiográfico y la repercusión fisiológica no siempre coinciden. En lesiones intermedias, FFR/iFR puede cambiar la decisión de revascularización.",
        gpc: {
            mexico: "GPC mexicanas de cardiopatía isquémica aplicables.",
            internacional: "ESC 2024 Chronic Coronary Syndromes."
        },
        bibliografia: "ESC 2024 Chronic Coronary Syndromes; Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },
        {
        id: "CARD-271",
        especialidad: "Cardiología",
        tema: "Imagen cardiovascular",
        subtema: "Estenosis aórtica de bajo flujo y bajo gradiente",
        dificultad: "Extrema",
        caso: "Varón de 78 años con antecedente de hipertensión arterial, enfermedad coronaria estable y disnea progresiva de 8 meses. Refiere dos episodios recientes de presíncope al caminar. En la exploración presenta pulso carotídeo de ascenso lento, segundo ruido disminuido y soplo mesosistólico áspero en foco aórtico con irradiación a carótidas. TA 108/64 mmHg, FC 72 lpm. El ecocardiograma muestra FEVI de 32%, volumen sistólico indexado de 28 mL/m², área valvular aórtica de 0.72 cm², velocidad máxima transvalvular de 3.1 m/s y gradiente medio de 24 mmHg. La insuficiencia aórtica es trivial. La duda clínica es si realmente existe una estenosis aórtica severa o si la reducción del flujo está produciendo una aparente disminución del gradiente.",
        pregunta: "¿Cuál es el siguiente estudio ecocardiográfico más apropiado para resolver la discordancia entre el área valvular y el gradiente?",
        opciones: [
            "Ecocardiograma transesofágico exclusivamente para medir la presión pulmonar",
            "Ecocardiograma con dobutamina a dosis bajas para evaluar reserva contráctil y respuesta del gradiente/área",
            "Ecocardiograma con solución salina para aumentar artificialmente el gradiente",
            "Ecocardiograma 3D exclusivamente de la aurícula izquierda",
            "Ecocardiograma de estrés con ejercicio máximo independientemente de la FEVI"
        ],
        respuestaCorrecta: 1,
        explicacion: "El paciente presenta una discordancia clásica: área valvular ≤1 cm², gradiente medio <40 mmHg, FEVI reducida y flujo sistólico bajo. En este contexto debe diferenciarse una estenosis aórtica verdaderamente severa de una pseudoestenosis relacionada con bajo flujo. El ecocardiograma con dobutamina a dosis bajas permite aumentar el flujo y observar la respuesta del gradiente y del área valvular. Si el gradiente aumenta de manera marcada manteniéndose un área muy reducida, se favorece estenosis verdaderamente severa. Si el área aumenta sustancialmente con el incremento del flujo sin una elevación proporcional del gradiente, puede tratarse de pseudoestenosis.",
        perlaENARM: "Área ≤1 cm² + gradiente <40 mmHg NO equivale automáticamente a estenosis aórtica moderada. Primero hay que definir flujo, FEVI y contexto hemodinámico.",
        gpc: {
            mexico: "GPC mexicanas de valvulopatías aplicables al diagnóstico ecocardiográfico de estenosis aórtica.",
            internacional: "ESC/EACTS 2025 Guidelines for the management of valvular heart disease."
        },
        bibliografia: "ESC/EACTS 2025 Valvular Heart Disease; Braunwald's Heart Disease."
    },

    {
        id: "CARD-272",
        especialidad: "Cardiología",
        tema: "Imagen cardiovascular",
        subtema: "Estenosis aórtica paradójica de bajo flujo",
        dificultad: "Extrema",
        caso: "Mujer de 82 años con hipertensión, fibrilación auricular permanente y disnea de esfuerzo. Ecocardiograma: FEVI 61%, área valvular aórtica 0.78 cm², gradiente medio 29 mmHg, velocidad máxima 3.4 m/s y volumen sistólico indexado 27 mL/m². El ventrículo izquierdo presenta hipertrofia concéntrica importante, cavidad pequeña y alteración del llenado. La presión arterial durante el estudio es 150/82 mmHg.",
        pregunta: "¿Cuál es la interpretación más adecuada de estos hallazgos?",
        opciones: [
            "Estenosis aórtica moderada inequívoca porque la FEVI es normal",
            "Estenosis aórtica severa de alto gradiente",
            "Posible estenosis aórtica severa paradójica de bajo flujo y bajo gradiente con FEVI preservada, que requiere confirmación multimodal",
            "Pseudoestenosis aórtica secundaria exclusivamente a fibrilación auricular",
            "Insuficiencia aórtica severa"
        ],
        respuestaCorrecta: 2,
        explicacion: "La paciente tiene FEVI preservada, pero bajo volumen sistólico indexado, área valvular ≤1 cm² y gradiente medio <40 mmHg. Esto corresponde al fenotipo de bajo flujo y bajo gradiente con FEVI preservada, denominado paradójico. La hipertrofia concéntrica, cavidad ventricular pequeña y alteraciones del llenado favorecen este escenario. Antes de intervenir debe confirmarse la severidad mediante integración multiparamétrica, incluyendo revisión de mediciones, condiciones de carga y, cuando corresponda, cuantificación anatómica mediante CT.",
        perlaENARM: "Una FEVI normal no garantiza flujo normal. En la estenosis aórtica paradójica el problema es el volumen sistólico reducido pese a FEVI preservada.",
        gpc: {
            mexico: "GPC mexicanas de valvulopatía aórtica aplicables.",
            internacional: "ESC/EACTS 2025 Guidelines for the management of valvular heart disease."
        },
        bibliografia: "ESC/EACTS 2025 Valvular Heart Disease; Braunwald's Heart Disease."
    },

    {
        id: "CARD-273",
        especialidad: "Cardiología",
        tema: "Ecocardiografía",
        subtema: "Función diastólica y HFpEF",
        dificultad: "Extrema",
        caso: "Mujer de 69 años con obesidad, hipertensión y diabetes presenta disnea progresiva. La FEVI es 63%. El ecocardiograma muestra hipertrofia ventricular izquierda leve, volumen auricular izquierdo indexado de 44 mL/m² y velocidad e' septal de 5 cm/s. La velocidad E mitral es 105 cm/s. La velocidad máxima de insuficiencia tricuspídea es 3.1 m/s. La paciente está en ritmo sinusal. BNP discretamente elevado. No existe enfermedad pulmonar significativa.",
        pregunta: "¿Cuál es la interpretación fisiopatológica más adecuada?",
        opciones: [
            "La FEVI normal excluye insuficiencia cardiaca",
            "Los hallazgos son compatibles con aumento de las presiones de llenado del VI y apoyan un fenotipo de HFpEF",
            "La única explicación posible es insuficiencia tricuspídea primaria",
            "La hipertrofia ventricular demuestra cardiomiopatía hipertrófica obstructiva",
            "El BNP normalizaría completamente el diagnóstico"
        ],
        respuestaCorrecta: 1,
        explicacion: "La paciente presenta un fenotipo típico de HFpEF: factores de riesgo cardiometabólicos, FEVI preservada, hipertrofia, dilatación auricular izquierda y alteraciones de relajación con datos indirectos de elevación de las presiones de llenado. La evaluación de función diastólica moderna es multiparamétrica y debe integrar e', E/e', velocidad de regurgitación tricuspídea, volumen auricular y contexto clínico, evitando interpretar una sola variable de forma aislada.",
        perlaENARM: "HFpEF no significa 'corazón normal con FEVI normal'. La FEVI es un descriptor de función sistólica, no una medición directa de las presiones de llenado.",
        gpc: {
            mexico: "GPC mexicanas de insuficiencia cardiaca aplicables al diagnóstico ecocardiográfico.",
            internacional: "ASE 2025 Recommendations for LV Diastolic Function and HFpEF Diagnosis; ESC guidelines for heart failure."
        },
        bibliografia: "ASE 2025 Diastolic Function Guideline; Braunwald's Heart Disease."
    },

    {
        id: "CARD-274",
        especialidad: "Cardiología",
        tema: "Ecocardiografía",
        subtema: "Strain longitudinal global",
        dificultad: "Muy alta",
        caso: "Varón de 63 años con hipertensión y antecedente de quimioterapia por linfoma hace 18 meses. FEVI actual 56%, previamente 62%. Se realiza ecocardiografía con strain longitudinal global (GLS), que muestra -14.8%. No presenta síntomas de insuficiencia cardiaca. El estudio convencional no muestra alteraciones segmentarias importantes.",
        pregunta: "¿Cuál es la interpretación más apropiada del hallazgo?",
        opciones: [
            "La FEVI normal descarta cualquier alteración de función ventricular",
            "El GLS puede detectar disfunción miocárdica subclínica antes de una reducción franca de la FEVI",
            "El GLS solamente tiene utilidad en estenosis aórtica",
            "El GLS sustituye por completo a la FEVI",
            "El resultado confirma miocarditis"
        ],
        respuestaCorrecta: 1,
        explicacion: "El strain longitudinal global puede identificar alteraciones subclínicas de la función ventricular antes de que la FEVI disminuya de forma significativa. En pacientes expuestos a cardiotoxicidad, la evaluación longitudinal del cambio respecto al valor basal es particularmente importante. Un valor aislado debe interpretarse considerando técnica, equipo, software, carga hemodinámica y valores previos.",
        perlaENARM: "La FEVI puede permanecer preservada mientras ya existe daño miocárdico detectable mediante deformación miocárdica.",
        gpc: {
            mexico: "GPC mexicanas aplicables al seguimiento cardiovascular del paciente oncológico.",
            internacional: "ASE/EACVI 2025 Clinical Applications of Strain Echocardiography."
        },
        bibliografia: "ASE/EACVI 2025 Clinical Applications of Strain Echocardiography; Braunwald's Heart Disease."
    },

    {
        id: "CARD-275",
        especialidad: "Cardiología",
        tema: "Ecocardiografía",
        subtema: "Insuficiencia mitral primaria",
        dificultad: "Extrema",
        caso: "Mujer de 67 años presenta disnea de esfuerzo progresiva. El ecocardiograma transtorácico muestra prolapso importante del segmento P2 con jet excéntrico de insuficiencia mitral. La vena contracta es difícil de medir por la dirección del jet. La FEVI es 58%, diámetro telesistólico del VI 41 mm y volumen auricular izquierdo indexado 56 mL/m². Existe fibrilación auricular. El médico solicita cuantificación precisa antes de discutir intervención.",
        pregunta: "¿Cuál es la mejor estrategia para definir la anatomía y severidad cuando el estudio transtorácico presenta limitaciones?",
        opciones: [
            "Descartar insuficiencia mitral severa porque el jet es excéntrico",
            "Realizar únicamente una radiografía de tórax",
            "Realizar ecocardiografía transesofágica, idealmente con evaluación 3D cuando sea pertinente",
            "Utilizar exclusivamente BNP",
            "Repetir el mismo estudio transtorácico sin modificar la estrategia de imagen"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los jets excéntricos pueden producir subestimación mediante algunas técnicas Doppler. La ecocardiografía transesofágica proporciona una mejor caracterización anatómica de la válvula y el mecanismo de la lesión, y la modalidad 3D puede ser particularmente útil para definir segmentos y anatomía quirúrgica o intervencionista. La cuantificación de la insuficiencia debe ser multiparamétrica y correlacionarse con remodelado ventricular y auricular.",
        perlaENARM: "En insuficiencia mitral no existe una sola medición que deba interpretarse de manera aislada; los jets excéntricos son una fuente clásica de error.",
        gpc: {
            mexico: "GPC IMSS de diagnóstico y tratamiento de patología de la válvula mitral.",
            internacional: "ESC/EACTS 2025 Valvular Heart Disease."
        },
        bibliografia: "ESC/EACTS 2025 Valvular Heart Disease; GPC IMSS de patología mitral; Braunwald's Heart Disease."
    },

    {
        id: "CARD-276",
        especialidad: "Cardiología",
        tema: "Ecocardiografía",
        subtema: "Insuficiencia tricuspídea",
        dificultad: "Extrema",
        caso: "Mujer de 74 años con fibrilación auricular permanente presenta edema periférico, hepatomegalia pulsátil y ascitis. Ecocardiograma: insuficiencia tricuspídea masiva, dilatación importante del anillo tricuspídeo, aurícula derecha severamente dilatada y ventrículo derecho dilatado. La FEVI es 61%. La presión sistólica pulmonar estimada no es marcadamente elevada.",
        pregunta: "¿Cuál es el mecanismo más probable de la insuficiencia tricuspídea en este caso?",
        opciones: [
            "Endocarditis tricuspídea como explicación obligatoria",
            "Insuficiencia tricuspídea funcional asociada a remodelado auricular y anular en el contexto de fibrilación auricular",
            "Rotura aguda de músculo papilar del VI",
            "Estenosis aórtica crítica",
            "Miocarditis fulminante"
        ],
        respuestaCorrecta: 1,
        explicacion: "La fibrilación auricular crónica puede producir remodelado de la aurícula derecha y dilatación del anillo tricuspídeo, generando insuficiencia tricuspídea funcional aun sin hipertensión pulmonar severa. El fenotipo debe diferenciarse de la insuficiencia secundaria predominantemente ventricular, en la cual predomina el remodelado del VD.",
        perlaENARM: "No toda insuficiencia tricuspídea funcional es consecuencia de hipertensión pulmonar. Existe un fenotipo asociado a fibrilación auricular y dilatación auricular/anular.",
        gpc: {
            mexico: "GPC mexicanas de valvulopatía tricuspídea aplicables.",
            internacional: "ESC/EACTS 2025 Valvular Heart Disease."
        },
        bibliografia: "ESC/EACTS 2025 Valvular Heart Disease; Braunwald's Heart Disease."
    },

    {
        id: "CARD-277",
        especialidad: "Cardiología",
        tema: "Ecocardiografía",
        subtema: "Endocarditis infecciosa",
        dificultad: "Extrema",
        caso: "Varón de 58 años con fiebre persistente y bacteriemia por Staphylococcus aureus. Tiene prótesis valvular aórtica. El ecocardiograma transtorácico no demuestra vegetaciones y la función ventricular es normal. Continúa con fiebre y hemocultivos positivos. Existe un nuevo soplo diastólico.",
        pregunta: "¿Cuál es el estudio de imagen más apropiado en este momento?",
        opciones: [
            "Repetir exclusivamente la radiografía de tórax",
            "Ecocardiograma transesofágico",
            "Prueba de esfuerzo",
            "Gammagrafía ósea",
            "Holter de 24 horas"
        ],
        respuestaCorrecta: 1,
        explicacion: "La prótesis valvular y la alta sospecha clínica aumentan la probabilidad de endocarditis protésica y complicaciones perivalvulares. El ecocardiograma transtorácico puede ser limitado por artefactos de la prótesis. El ecocardiograma transesofágico ofrece mejor resolución para identificar vegetaciones, dehiscencia, abscesos y otras complicaciones. En casos seleccionados puede requerirse imagen multimodal adicional.",
        perlaENARM: "TTE negativo NO excluye endocarditis protésica cuando la sospecha clínica es alta.",
        gpc: {
            mexico: "GPC mexicanas de endocarditis infecciosa aplicables.",
            internacional: "ESC 2023 Endocarditis Guidelines."
        },
        bibliografia: "ESC 2023 Endocarditis; Braunwald's Heart Disease."
    },

    {
        id: "CARD-278",
        especialidad: "Cardiología",
        tema: "Ecocardiografía",
        subtema: "Shock cardiogénico",
        dificultad: "Extrema",
        caso: "Varón de 69 años ingresa por IAMCEST anterior. Después de la reperfusión persiste hipotensión de 76/48 mmHg, piel fría, oliguria y alteración del estado mental. Presenta ingurgitación yugular y estertores. Se realiza ecocardiograma a pie de cama: FEVI 20%, ventrículo derecho de tamaño normal, ausencia de derrame pericárdico y ausencia de insuficiencia mitral aguda evidente.",
        pregunta: "¿Cuál de los siguientes hallazgos ecocardiográficos sería más útil para identificar un componente mecánico potencialmente reversible que explicara el deterioro hemodinámico?",
        opciones: [
            "Buscar comunicación interventricular postinfarto o insuficiencia mitral aguda mediante Doppler",
            "Medir exclusivamente el diámetro de la aurícula izquierda",
            "Buscar únicamente hipertrofia ventricular derecha",
            "Realizar únicamente strain de la aurícula izquierda",
            "Medir el grosor del septum interauricular como prueba definitiva"
        ],
        respuestaCorrecta: 0,
        explicacion: "En el shock posterior al infarto es fundamental descartar complicaciones mecánicas, especialmente comunicación interventricular y ruptura del músculo papilar con insuficiencia mitral aguda. Estas entidades pueden producir deterioro hemodinámico abrupto y requieren tratamiento urgente. El ecocardiograma transtorácico es una herramienta inicial esencial y, si la calidad es insuficiente o persiste la sospecha, el transesofágico puede ser necesario.",
        perlaENARM: "Shock + IAM + deterioro desproporcionado = buscar complicación mecánica antes de asumir simplemente 'fallo ventricular severo'.",
        gpc: {
            mexico: "GPC IMSS de síndrome coronario agudo; GPC mexicanas aplicables a complicaciones mecánicas.",
            internacional: "ACC/AHA 2025 ACS Guideline."
        },
        bibliografia: "ACC/AHA 2025 ACS; Braunwald's Heart Disease."
    },

    {
        id: "CARD-279",
        especialidad: "Cardiología",
        tema: "Resonancia magnética cardiaca",
        subtema: "Miocarditis",
        dificultad: "Extrema",
        caso: "Mujer de 31 años presenta dolor torácico, troponina elevada y alteraciones inespecíficas de repolarización. La angiografía coronaria no muestra enfermedad obstructiva. La resonancia magnética cardiaca demuestra edema miocárdico y realce tardío predominantemente subepicárdico en la pared inferolateral, sin distribución correspondiente a un territorio coronario único.",
        pregunta: "¿Cuál es la interpretación más probable?",
        opciones: [
            "Infarto transmural por oclusión de la coronaria derecha",
            "Miocarditis con patrón de lesión no isquémica",
            "Isquemia por enfermedad de tres vasos",
            "Estenosis mitral",
            "Hipertensión pulmonar primaria"
        ],
        respuestaCorrecta: 1,
        explicacion: "El edema acompañado de realce tardío subepicárdico y distribución no territorial favorece lesión inflamatoria miocárdica. El patrón típico de infarto sigue un territorio vascular y afecta inicialmente el subendocardio, pudiendo extenderse de manera transmural. La CMR es particularmente útil para diferenciar miocarditis de infarto y otras causas de lesión miocárdica.",
        perlaENARM: "CMR: realce subendocárdico/transmural siguiendo un territorio vascular = patrón isquémico; realce subepicárdico/mesomiocárdico no territorial = patrón no isquémico.",
        gpc: {
            mexico: "GPC mexicanas aplicables a lesión miocárdica/SCA.",
            internacional: "ESC 2025 Guidelines for Myocarditis and Pericarditis."
        },
        bibliografia: "ESC 2025 Myocarditis and Pericarditis; Braunwald's Heart Disease."
    },

    {
        id: "CARD-280",
        especialidad: "Cardiología",
        tema: "Imagen cardiovascular",
        subtema: "Integración multimodal",
        dificultad: "Extrema",
        caso: "Varón de 76 años con disnea progresiva y síncope de esfuerzo. El ecocardiograma muestra FEVI 48%, área valvular aórtica 0.68 cm² y gradiente medio 31 mmHg. El volumen sistólico indexado es 30 mL/m². La velocidad máxima es 3.5 m/s. Existe calcificación importante de la válvula. La calidad del tracto de salida del VI es limitada y existe incertidumbre respecto al diámetro utilizado para calcular el área. El paciente tiene enfermedad renal crónica moderada y no puede realizar una prueba de esfuerzo por los síntomas.",
        pregunta: "¿Cuál es la estrategia más apropiada para resolver la incertidumbre diagnóstica antes de tomar una decisión definitiva sobre intervención?",
        opciones: [
            "Considerar automáticamente que se trata de estenosis aórtica moderada y dar de alta",
            "Repetir la evaluación ecocardiográfica de forma rigurosa e integrar imagen multimodal, incluyendo cuantificación anatómica mediante CT cuando sea apropiada",
            "Indicar fibrinólisis",
            "Realizar exclusivamente Holter de 24 horas",
            "Determinar únicamente BNP y basar la indicación de intervención en su resultado"
        ],
        respuestaCorrecta: 1,
        explicacion: "El caso presenta discordancia entre área, gradiente y flujo. Antes de una intervención debe verificarse la calidad de las mediciones ecocardiográficas, especialmente el diámetro del tracto de salida del VI, Doppler y condiciones de carga. Cuando persiste incertidumbre, la evaluación multimodal puede aportar información anatómica y cuantitativa adicional. En la estenosis aórtica de bajo flujo/bajo gradiente, la decisión no debe basarse en un único parámetro.",
        perlaENARM: "En valvulopatías complejas, el error más peligroso es tratar un número aislado. Primero verifica la medición; después integra fisiología, anatomía, síntomas y daño ventricular.",
        gpc: {
            mexico: "GPC mexicanas de valvulopatía aórtica aplicables.",
            internacional: "ESC/EACTS 2025 Guidelines for the management of valvular heart disease."
        },
        bibliografia: "ESC/EACTS 2025 Valvular Heart Disease; Braunwald's Heart Disease."
    },
        {
        id: "CARD-281",
        especialidad: "Cardiología",
        tema: "Cardiomiopatías",
        subtema: "Miocardiopatía hipertrófica vs fenocopias",
        dificultad: "Extrema",
        caso: "Varón de 29 años, futbolista amateur, consulta por disnea y dos episodios de presíncope durante ejercicio intenso. Su padre falleció súbitamente a los 47 años. El ECG muestra voltajes elevados, ondas T negativas profundas en derivaciones laterales y ondas Q estrechas en cara inferior. El ecocardiograma demuestra hipertrofia ventricular izquierda máxima de 22 mm, predominante en el septum, con movimiento sistólico anterior de la válvula mitral y gradiente dinámico del tracto de salida de 55 mmHg durante Valsalva. La presión arterial es normal. La resonancia cardiaca muestra hipertrofia asimétrica y realce tardío parcheado en segmentos hipertrofiados. No presenta enfermedad renal ni hipertensión.",
        pregunta: "¿Cuál es la interpretación diagnóstica más adecuada?",
        opciones: [
            "Corazón de atleta porque realiza ejercicio regularmente",
            "Hipertensión arterial como causa primaria de la hipertrofia",
            "Miocardiopatía hipertrófica obstructiva con fenotipo de riesgo que requiere evaluación especializada",
            "Estenosis aórtica subclínica",
            "Miocardiopatía dilatada incipiente"
        ],
        respuestaCorrecta: 2,
        explicacion: "La combinación de hipertrofia ventricular izquierda inexplicada, distribución septal asimétrica, obstrucción dinámica del tracto de salida, antecedentes familiares de muerte súbita, alteraciones electrocardiográficas y realce tardío no isquémico es altamente compatible con miocardiopatía hipertrófica. El antecedente de ejercicio no convierte automáticamente la hipertrofia en corazón de atleta. En este paciente deben integrarse historia familiar de tres generaciones, CMR, evaluación de arritmias, riesgo de muerte súbita y valoración genética. La presencia de obstrucción provocable también tiene implicaciones terapéuticas.",
        perlaENARM: "Hipertrofia inexplicada + historia familiar de muerte súbita + realce tardío + gradiente dinámico = HCM hasta demostrar lo contrario.",
        gpc: {
            mexico: "GPC mexicanas aplicables a miocardiopatía hipertrófica y prevención de muerte súbita.",
            internacional: "AHA/ACC/AMSSM/HRS/PACES/SCMR 2024 HCM Guideline; ESC 2023 Cardiomyopathies."
        },
        bibliografia: "AHA/ACC 2024 HCM Guideline; ESC 2023 Cardiomyopathies; Braunwald's Heart Disease."
    },

    {
        id: "CARD-282",
        especialidad: "Cardiología",
        tema: "Cardiomiopatías",
        subtema: "Miocardiopatía hipertrófica obstructiva",
        dificultad: "Extrema",
        caso: "Mujer de 58 años con miocardiopatía hipertrófica obstructiva presenta disnea NYHA III pese a tratamiento con beta-bloqueador. El ecocardiograma muestra hipertrofia septal, movimiento sistólico anterior de la válvula mitral y gradiente del tracto de salida de 85 mmHg durante ejercicio. FEVI 72%. No presenta hipotensión. Tiene fibrilación auricular paroxística y no existe enfermedad coronaria obstructiva. Refiere síntomas importantes que limitan sus actividades cotidianas.",
        pregunta: "¿Cuál es la estrategia terapéutica que debe considerarse después de optimizar el tratamiento médico?",
        opciones: [
            "Reducir deliberadamente la precarga con dosis altas de diuréticos independientemente de la congestión",
            "Añadir un fármaco inotrópico positivo para aumentar la contractilidad",
            "Valoración en un centro especializado para terapia dirigida a la obstrucción, incluyendo inhibidor de miosina o reducción septal según características",
            "Suspender el beta-bloqueador y comenzar digoxina como primera estrategia",
            "Realizar fibrinólisis sistémica"
        ],
        respuestaCorrecta: 2,
        explicacion: "La paciente tiene HCM obstructiva sintomática con gradiente importante pese a tratamiento médico. La estrategia debe individualizarse en un centro con experiencia. Las opciones actuales incluyen tratamiento farmacológico dirigido, particularmente inhibidores de miosina en pacientes adultos seleccionados, y terapias de reducción septal cuando persisten síntomas significativos y existe obstrucción relevante. No debe utilizarse de manera indiscriminada una estrategia que reduzca excesivamente la precarga o aumente la contractilidad, porque puede empeorar la obstrucción dinámica.",
        perlaENARM: "En HCM obstructiva, el objetivo no es 'aumentar la fuerza de contracción'; es reducir la obstrucción y mejorar el llenado sin agravar la fisiología dinámica.",
        gpc: {
            mexico: "GPC mexicanas aplicables a miocardiopatía hipertrófica.",
            internacional: "AHA/ACC/AMSSM/HRS/PACES/SCMR 2024 HCM Guideline; ESC 2023 Cardiomyopathies."
        },
        bibliografia: "AHA/ACC 2024 HCM Guideline; ESC 2023 Cardiomyopathies; Braunwald's Heart Disease."
    },

    {
        id: "CARD-283",
        especialidad: "Cardiología",
        tema: "Cardiomiopatías",
        subtema: "Miocardiopatía dilatada y genética",
        dificultad: "Extrema",
        caso: "Varón de 41 años consulta por insuficiencia cardiaca de reciente diagnóstico. Ecocardiograma: VI dilatado, FEVI 28%, hipocinesia global y ausencia de alteraciones segmentarias predominantes. Coronariografía sin enfermedad obstructiva. No consume alcohol y no utiliza cardiotóxicos. Su madre presentó insuficiencia cardiaca a los 52 años y un hermano tiene un desfibrilador implantable por taquicardia ventricular. La CMR muestra realce tardío mesomiocárdico septal. El paciente presenta extrasístoles ventriculares frecuentes y episodios de taquicardia ventricular no sostenida.",
        pregunta: "¿Qué característica del caso aumenta especialmente la sospecha de una miocardiopatía dilatada de origen genético con implicaciones arrítmicas?",
        opciones: [
            "Ausencia de enfermedad coronaria por sí sola",
            "Historia familiar de cardiomiopatía y arritmias ventriculares junto con fibrosis miocárdica no isquémica",
            "La presencia aislada de FEVI de 28%",
            "La edad mayor de 40 años como único dato",
            "La ausencia de hipertensión arterial"
        ],
        respuestaCorrecta: 1,
        explicacion: "La combinación de historia familiar de insuficiencia cardiaca, un familiar con arritmias ventriculares, patrón de fibrosis no isquémica en CMR y arritmias ventriculares propias del paciente aumenta fuertemente la sospecha de una cardiomiopatía genética. Algunas variantes, como las relacionadas con LMNA, FLNC y otras proteínas estructurales, pueden asociarse con una carga arrítmica desproporcionada respecto a la magnitud de la disfunción ventricular. Esto puede modificar la valoración del riesgo y las decisiones sobre dispositivos y seguimiento familiar.",
        perlaENARM: "En DCM genética, la arritmia puede ser una manifestación central de la enfermedad y no simplemente una consecuencia tardía de la FEVI baja.",
        gpc: {
            mexico: "GPC mexicanas aplicables a insuficiencia cardiaca y miocardiopatías.",
            internacional: "ESC 2023 Cardiomyopathies; ESC Council on Cardiovascular Genomics consensus."
        },
        bibliografia: "ESC 2023 Cardiomyopathies; Braunwald's Heart Disease."
    },

    {
        id: "CARD-284",
        especialidad: "Cardiología",
        tema: "Cardiomiopatías",
        subtema: "Miocardiopatía no dilatada del ventrículo izquierdo",
        dificultad: "Extrema",
        caso: "Mujer de 34 años con síncope inexplicado presenta ECG con extrasístoles ventriculares frecuentes y ondas T negativas en derivaciones inferolaterales. Ecocardiograma: FEVI 58%, dimensiones ventriculares normales y ausencia de hipertrofia significativa. La CMR muestra una zona extensa de fibrosis mesomiocárdica en el septum y pared inferolateral. Su hermana presentó muerte súbita a los 39 años. No existen lesiones coronarias.",
        pregunta: "¿Cuál es el concepto que mejor integra el fenotipo?",
        opciones: [
            "El estudio es normal porque la FEVI está preservada",
            "Miocardiopatía no dilatada del VI con evidencia de enfermedad miocárdica estructural y eléctrica",
            "Cardiopatía isquémica estable",
            "Corazón de atleta fisiológico",
            "Pericarditis crónica"
        ],
        respuestaCorrecta: 1,
        explicacion: "La clasificación contemporánea reconoce la miocardiopatía no dilatada del VI como un fenotipo en el que existe enfermedad miocárdica estructural o eléctrica —por ejemplo fibrosis, alteraciones regionales o arritmias— sin cumplir necesariamente los criterios clásicos de dilatación ventricular y disfunción sistólica. En este caso, la fibrosis extensa, arritmias, síncope y antecedente familiar son datos de enfermedad miocárdica con potencial riesgo arrítmico pese a una FEVI conservada.",
        perlaENARM: "FEVI preservada ≠ ausencia de cardiomiopatía. La fibrosis miocárdica puede preceder a la dilatación y a la disfunción sistólica.",
        gpc: {
            mexico: "GPC mexicanas aplicables según presentación clínica.",
            internacional: "ESC 2023 Cardiomyopathies."
        },
        bibliografia: "ESC 2023 Cardiomyopathies; Braunwald's Heart Disease."
    },

    {
        id: "CARD-285",
        especialidad: "Cardiología",
        tema: "Cardiomiopatías",
        subtema: "Miocardiopatía arritmogénica",
        dificultad: "Extrema",
        caso: "Varón de 27 años, ciclista de alto rendimiento, presenta síncope durante ejercicio. ECG: ondas T negativas en V1-V4 y ondas épsilon sospechosas. Holter: múltiples extrasístoles ventriculares con morfología de bloqueo de rama izquierda y eje superior, además de episodios de taquicardia ventricular no sostenida. Ecocardiograma: ventrículo derecho discretamente dilatado con reducción regional de la contractilidad. CMR: alteraciones regionales del VD y fibrosis con patrón compatible con enfermedad arritmogénica. Un tío materno murió súbitamente a los 35 años.",
        pregunta: "¿Cuál es el diagnóstico que mejor integra el cuadro?",
        opciones: [
            "Corazón de atleta sin enfermedad estructural",
            "Miocardiopatía arritmogénica",
            "Síndrome de Wolff-Parkinson-White aislado",
            "Miocardiopatía hipertrófica obstructiva",
            "Pericarditis aguda"
        ],
        respuestaCorrecta: 1,
        explicacion: "La combinación de síncope relacionado con ejercicio, carga ventricular elevada, TV con morfología compatible con origen ventricular derecho, alteraciones electrocardiográficas, anomalías estructurales regionales del VD, fibrosis en CMR y antecedente familiar es altamente sugestiva de miocardiopatía arritmogénica. El ejercicio intenso puede favorecer penetrancia y progresión fenotípica en individuos susceptibles. El diagnóstico debe realizarse mediante integración de criterios clínicos, electrocardiográficos, de imagen, arrítmicos y genéticos cuando corresponda.",
        perlaENARM: "En la miocardiopatía arritmogénica, la arritmia puede preceder a una disfunción ventricular evidente.",
        gpc: {
            mexico: "GPC mexicanas aplicables a arritmias y cardiomiopatías.",
            internacional: "ESC 2023 Cardiomyopathies."
        },
        bibliografia: "ESC 2023 Cardiomyopathies; Braunwald's Heart Disease."
    },

    {
        id: "CARD-286",
        especialidad: "Cardiología",
        tema: "Cardiomiopatías",
        subtema: "Miocardiopatía restrictiva",
        dificultad: "Extrema",
        caso: "Mujer de 63 años presenta disnea, edema periférico y ascitis progresiva. Ecocardiograma: ambos ventrículos de tamaño relativamente pequeño, FEVI 58%, marcada dilatación auricular bilateral y patrón de llenado restrictivo. La presión pulmonar está elevada. En el ECG existe bajo voltaje generalizado. CMR muestra engrosamiento aparente de las paredes ventriculares con alteración difusa del realce miocárdico. No existe antecedente de hipertensión significativa.",
        pregunta: "¿Cuál es el diagnóstico etiológico que debe investigarse prioritariamente?",
        opciones: [
            "Hipertensión arterial sistémica crónica como causa suficiente",
            "Enfermedad infiltrativa, particularmente amiloidosis cardiaca",
            "Miocardiopatía hipertrófica sarcomérica obligatoriamente",
            "Cardiopatía isquémica de un solo vaso",
            "Pericarditis viral aguda"
        ],
        respuestaCorrecta: 1,
        explicacion: "La fisiología restrictiva con dilatación auricular marcada, paredes aparentemente engrosadas, bajo voltaje en ECG y ausencia de hipertensión significativa debe hacer sospechar una cardiomiopatía infiltrativa. La amiloidosis cardiaca es una causa particularmente importante. La evaluación debe incluir estudios dirigidos a descartar cadenas ligeras monoclonales y, cuando corresponda, gammagrafía con trazadores óseos para evaluar ATTR, además de CMR y valoración sistémica.",
        perlaENARM: "Pared ventricular gruesa + ECG de bajo voltaje + fisiología restrictiva = pensar en infiltración antes que asumir HCM.",
        gpc: {
            mexico: "GPC mexicanas aplicables a insuficiencia cardiaca y cardiomiopatías infiltrativas.",
            internacional: "ESC 2023 Cardiomyopathies."
        },
        bibliografia: "ESC 2023 Cardiomyopathies; Braunwald's Heart Disease."
    },

    {
        id: "CARD-287",
        especialidad: "Cardiología",
        tema: "Cardiomiopatías",
        subtema: "Amiloidosis cardiaca ATTR",
        dificultad: "Extrema",
        caso: "Varón de 76 años con insuficiencia cardiaca con FEVI 52%, síndrome del túnel del carpo bilateral y estenosis lumbar previa. Ecocardiograma: hipertrofia ventricular concéntrica, dilatación auricular y strain longitudinal global reducido con preservación relativa del ápex. CMR muestra expansión del volumen extracelular y patrón difuso de realce. Las cadenas ligeras séricas y urinarias, así como inmunofijación, no muestran evidencia de discrasia monoclonal. La gammagrafía con trazador óseo muestra captación miocárdica intensa grado 3.",
        pregunta: "¿Cuál es el diagnóstico más probable y cuál es el siguiente principio diagnóstico correcto?",
        opciones: [
            "Amiloidosis AL confirmada; iniciar quimioterapia sin estudios adicionales",
            "Amiloidosis ATTR cardiaca; en ausencia de evidencia de proteína monoclonal, la gammagrafía ósea altamente positiva puede establecer el diagnóstico no invasivo",
            "HCM sarcomérica; la gammagrafía carece de utilidad",
            "Pericarditis constrictiva",
            "Miocarditis crónica"
        ],
        respuestaCorrecta: 1,
        explicacion: "El fenotipo clínico y de imagen es altamente sugestivo de amiloidosis ATTR. La ausencia de evidencia de una proteína monoclonal es fundamental porque una gammagrafía positiva en presencia de una discrasia monoclonal no permite asumir ATTR sin una evaluación adicional. En pacientes con sospecha de ATTR cardiaca, gammagrafía ósea fuertemente positiva junto con evaluación negativa para componente monoclonal puede permitir diagnóstico no invasivo.",
        perlaENARM: "Antes de interpretar una gammagrafía positiva como ATTR, siempre hay que excluir proteína monoclonal para evitar pasar por alto amiloidosis AL.",
        gpc: {
            mexico: "GPC mexicanas aplicables a insuficiencia cardiaca y enfermedades infiltrativas.",
            internacional: "ESC 2023 Cardiomyopathies."
        },
        bibliografia: "ESC 2023 Cardiomyopathies; Braunwald's Heart Disease."
    },

    {
        id: "CARD-288",
        especialidad: "Cardiología",
        tema: "Cardiomiopatías",
        subtema: "Enfermedad de Anderson-Fabry",
        dificultad: "Extrema",
        caso: "Varón de 39 años presenta hipertrofia ventricular izquierda progresiva, proteinuria leve y episodios recurrentes de dolor urente en manos y pies desde la adolescencia. Refiere hipohidrosis y varios familiares maternos con enfermedad renal. ECG con PR relativamente corto y signos de hipertrofia. CMR muestra hipertrofia concéntrica y fibrosis localizada predominantemente en la pared inferolateral basal. No tiene hipertensión significativa.",
        pregunta: "¿Qué diagnóstico debe considerarse especialmente?",
        opciones: [
            "Miocardiopatía hipertrófica sarcomérica exclusivamente",
            "Enfermedad de Anderson-Fabry",
            "Cardiopatía hipertensiva",
            "Pericarditis constrictiva",
            "Estenosis aórtica crítica"
        ],
        respuestaCorrecta: 1,
        explicacion: "La combinación de hipertrofia ventricular, síntomas extracardiacos desde edad temprana, proteinuria, hipohidrosis, dolor neuropático distal y agregación familiar materna sugiere enfermedad de Anderson-Fabry. En varones, la actividad de alfa-galactosidasa A y posteriormente el estudio genético son componentes fundamentales del diagnóstico. Reconocer una fenocopia es importante porque existe tratamiento específico y porque el abordaje familiar cambia.",
        perlaENARM: "HVI + manifestaciones extracardiacas + patrón familiar ligado al X = buscar una fenocopia como Fabry antes de etiquetar HCM sarcomérica.",
        gpc: {
            mexico: "GPC mexicanas aplicables a cardiomiopatías y enfermedad renal hereditaria.",
            internacional: "ESC 2023 Cardiomyopathies."
        },
        bibliografia: "ESC 2023 Cardiomyopathies; Braunwald's Heart Disease."
    },

    {
        id: "CARD-289",
        especialidad: "Cardiología",
        tema: "Cardiomiopatías",
        subtema: "Genética y familiares",
        dificultad: "Extrema",
        caso: "Una mujer de 45 años con miocardiopatía dilatada presenta una variante genética patogénica claramente establecida asociada a su enfermedad. Tiene dos hijos adultos asintomáticos. Uno de ellos solicita directamente una prueba genética comercial y recibe un resultado negativo para la variante familiar. No se ha realizado evaluación cardiológica formal.",
        pregunta: "¿Cuál es la estrategia más apropiada para el hijo con resultado negativo conocido para la variante familiar patogénica?",
        opciones: [
            "Declararlo definitivamente libre de riesgo sin valoración clínica",
            "Repetir indefinidamente pruebas comerciales de panel amplio",
            "Interpretar el resultado dentro del contexto del estudio familiar y establecer el seguimiento cardiológico/genético apropiado",
            "Indicar un desfibrilador profiláctico independientemente del fenotipo",
            "Indicar tratamiento de insuficiencia cardiaca a dosis máximas aunque sea asintomático"
        ],
        respuestaCorrecta: 2,
        explicacion: "En cardiomiopatías hereditarias, la prueba genética debe realizarse dentro de un proceso de asesoramiento y con una variante familiar bien caracterizada. Un resultado negativo para la variante patogénica familiar puede modificar sustancialmente el riesgo genético respecto al familiar afectado, pero no debe interpretarse de forma aislada ni a partir de pruebas comerciales no validadas. La evaluación debe considerar la calidad del estudio, el fenotipo familiar y las recomendaciones del equipo especializado. Las variantes de significado incierto tampoco deben utilizarse de forma automática para diagnosticar o excluir enfermedad.",
        perlaENARM: "La genética clínica no es simplemente 'pedir un panel': primero se define el fenotipo y la variante familiar, después se realiza estudio dirigido y asesoramiento.",
        gpc: {
            mexico: "GPC mexicanas aplicables a cardiomiopatías hereditarias y valoración familiar.",
            internacional: "ESC 2023 Cardiomyopathies; ESC Council on Cardiovascular Genomics consensus 2024."
        },
        bibliografia: "ESC 2023 Cardiomyopathies; ESC Cardiovascular Genomics Consensus 2024."
    },

    {
        id: "CARD-290",
        especialidad: "Cardiología",
        tema: "Cardiomiopatías",
        subtema: "Integración de riesgo de muerte súbita",
        dificultad: "Extrema",
        caso: "Varón de 36 años con miocardiopatía dilatada no isquémica recibe tratamiento médico óptimo durante más de 6 meses. La FEVI permanece en 31%. Presenta fibrosis extensa en CMR con patrón no isquémico, episodios repetidos de taquicardia ventricular no sostenida y antecedente familiar de muerte súbita. Un estudio genético identifica una variante patogénica en un gen asociado con cardiomiopatía y arritmias ventriculares. Se encuentra en ritmo sinusal y tiene síntomas NYHA II.",
        pregunta: "¿Cuál es el principio más importante al valorar la prevención de muerte súbita en este paciente?",
        opciones: [
            "La FEVI es el único factor que determina el riesgo arrítmico",
            "La presencia de fibrosis, arritmias ventriculares, historia familiar y etiología genética debe integrarse con la FEVI para estratificación individualizada",
            "Una FEVI >30% excluye indicación de cualquier estrategia preventiva",
            "El resultado genético no tiene utilidad clínica en cardiomiopatías",
            "Debe realizarse ablación de todas las extrasístoles antes de considerar cualquier dispositivo"
        ],
        respuestaCorrecta: 1,
        explicacion: "La evaluación contemporánea del riesgo arrítmico en cardiomiopatías no debe depender exclusivamente de la FEVI. La etiología genética, el patrón y extensión de fibrosis en CMR, la presencia de TV no sostenida, antecedentes familiares y el fenotipo clínico pueden aportar información pronóstica relevante. En determinadas formas genéticas, el riesgo arrítmico puede ser desproporcionado respecto a la magnitud de la disfunción ventricular. La decisión sobre ICD debe individualizarse mediante una evaluación especializada y considerando las recomendaciones específicas del fenotipo y genotipo.",
        perlaENARM: "En cardiomiopatías, la FEVI es importante, pero no es sinónimo de riesgo arrítmico. Genotipo + fibrosis + arritmias + familia pueden cambiar la estratificación.",
        gpc: {
            mexico: "GPC mexicanas aplicables a insuficiencia cardiaca, arritmias y prevención de muerte súbita.",
            internacional: "ESC 2023 Cardiomyopathies; ESC 2022 Ventricular Arrhythmias/SCD."
        },
        bibliografia: "ESC 2023 Cardiomyopathies; ESC 2022 Ventricular Arrhythmias; Braunwald's Heart Disease."
    },
        {
        id: "CARD-291",
        especialidad: "Cardiología",
        tema: "Cardiomiopatías",
        subtema: "LMNA y riesgo arrítmico",
        dificultad: "Extrema",
        caso: "Varón de 39 años consulta por palpitaciones, presíncope y deterioro progresivo de la tolerancia al ejercicio. ECG: PR de 240 ms, bloqueo de rama derecha y hemibloqueo anterior izquierdo. Holter de 48 horas: múltiples extrasístoles ventriculares y dos episodios de taquicardia ventricular no sostenida. Ecocardiograma: FEVI 44%, dilatación ventricular izquierda leve. No existe enfermedad coronaria. Su madre falleció súbitamente a los 48 años y un hermano recibió un marcapasos a los 42 años por trastorno progresivo de conducción. El estudio genético identifica una variante patogénica en LMNA.",
        pregunta: "¿Cuál es la implicación clínica más importante de este hallazgo?",
        opciones: [
            "El genotipo LMNA prácticamente descarta el riesgo de muerte súbita",
            "El trastorno de conducción es incidental y debe manejarse de manera independiente",
            "La combinación de enfermedad por LMNA, trastornos de conducción y arritmias ventriculares identifica un fenotipo con riesgo arrítmico elevado y puede justificar una estrategia temprana de dispositivo",
            "El paciente debe recibir únicamente anticoagulación",
            "El diagnóstico definitivo es síndrome de Wolff-Parkinson-White"
        ],
        respuestaCorrecta: 2,
        explicacion: "Las cardiomiopatías asociadas a LMNA tienen una característica particularmente importante: pueden desarrollar trastornos de conducción, bradiarritmias y arritmias ventriculares antes de que exista una disfunción ventricular severa. En este paciente coinciden enfermedad de conducción progresiva, TV no sostenida, antecedente familiar de muerte súbita, FEVI reducida y variante patogénica. Por ello, el riesgo arrítmico no debe valorarse utilizando exclusivamente el umbral convencional de FEVI. La estrategia de dispositivo debe discutirse tempranamente en un centro especializado, considerando que un ICD puede ofrecer protección frente a muerte súbita además de permitir estimulación cuando existe enfermedad de conducción.",
        perlaENARM: "LMNA + trastorno de conducción + TV no sostenida + historia familiar de muerte súbita = riesgo arrítmico desproporcionado respecto a la FEVI.",
        gpc: {
            mexico: "GPC mexicanas aplicables a miocardiopatía dilatada, trastornos de conducción y prevención de muerte súbita.",
            internacional: "ESC 2023 Cardiomyopathies; ESC 2022 Ventricular Arrhythmias and Sudden Cardiac Death."
        },
        bibliografia: "ESC 2023 Cardiomyopathies; ESC 2022 Ventricular Arrhythmias; Braunwald's Heart Disease."
    },

    {
        id: "CARD-292",
        especialidad: "Cardiología",
        tema: "Cardiomiopatías",
        subtema: "FLNC y fibrosis miocárdica",
        dificultad: "Extrema",
        caso: "Mujer de 45 años con insuficiencia cardiaca no isquémica presenta FEVI de 38%. La CMR muestra fibrosis miocárdica extensa con patrón subepicárdico y mesomiocárdico. El Holter documenta múltiples episodios de TV no sostenida. Su padre murió súbitamente a los 51 años. Una hermana tiene FEVI de 40%. El estudio genético identifica una variante truncante patogénica en FLNC.",
        pregunta: "¿Qué aspecto debe modificar de manera importante la valoración pronóstica?",
        opciones: [
            "La ausencia de enfermedad coronaria hace que el riesgo sea bajo",
            "La presencia de una variante FLNC asociada a fenotipo arrítmico, fibrosis extensa y TV no sostenida incrementa la preocupación por muerte súbita",
            "La FEVI superior a 35% elimina el riesgo de muerte súbita",
            "La fibrosis no isquémica carece de valor pronóstico",
            "La historia familiar solo es relevante si existe HCM"
        ],
        respuestaCorrecta: 1,
        explicacion: "Algunas variantes patogénicas de FLNC se asocian con fenotipos de miocardiopatía dilatada/no dilatada caracterizados por fibrosis miocárdica y una carga arrítmica importante. En este caso convergen genotipo de riesgo, fibrosis extensa, TV no sostenida y antecedente familiar de muerte súbita. La FEVI no debe utilizarse como único marcador de riesgo. La decisión sobre ICD requiere valoración especializada e integración del fenotipo completo.",
        perlaENARM: "En ciertas cardiomiopatías genéticas, la fibrosis y el fenotipo arrítmico pueden adquirir importancia incluso con FEVI >35%.",
        gpc: {
            mexico: "GPC mexicanas aplicables a cardiomiopatía dilatada y prevención de muerte súbita.",
            internacional: "ESC 2023 Cardiomyopathies."
        },
        bibliografia: "ESC 2023 Cardiomyopathies; Braunwald's Heart Disease."
    },

    {
        id: "CARD-293",
        especialidad: "Cardiología",
        tema: "Cardiomiopatías",
        subtema: "DSP y cardiomiopatía arritmogénica",
        dificultad: "Extrema",
        caso: "Varón de 32 años presenta episodios recurrentes de dolor torácico, troponina elevada y cambios transitorios del ST. La coronariografía es normal. La CMR muestra múltiples áreas de fibrosis subepicárdica inferolateral. Posteriormente desarrolla extrasístoles ventriculares frecuentes y TV no sostenida. Ecocardiograma inicial con FEVI 54%, pero en el seguimiento aparece disminución progresiva de la función ventricular izquierda. Su hermana presenta un fenotipo similar. El estudio genético identifica una variante patogénica en DSP.",
        pregunta: "¿Cuál es la interpretación más apropiada?",
        opciones: [
            "Los episodios de troponina elevada excluyen una cardiomiopatía genética",
            "El cuadro es compatible con un fenotipo de cardiomiopatía arritmogénica asociado a DSP, que puede presentar predominantemente afectación del VI",
            "El diagnóstico debe ser enfermedad coronaria microvascular obligatoriamente",
            "La FEVI inicialmente preservada descarta cardiomiopatía",
            "La única explicación es pericarditis recurrente"
        ],
        respuestaCorrecta: 1,
        explicacion: "Las cardiomiopatías relacionadas con DSP pueden presentar un fenotipo predominantemente izquierdo, fibrosis subepicárdica, episodios semejantes a miocarditis con elevación de troponina y posteriormente disfunción ventricular y arritmias. Este patrón es particularmente importante porque puede no cumplir inicialmente con el fenotipo clásico de enfermedad arritmogénica predominantemente del VD. El genotipo y la CMR ayudan a reconocer el proceso.",
        perlaENARM: "Troponina recurrentemente elevada + fibrosis subepicárdica + arritmias + historia familiar = considerar cardiomiopatía genética, especialmente cuando las coronarias son normales.",
        gpc: {
            mexico: "GPC mexicanas aplicables a miocarditis, arritmias y cardiomiopatías.",
            internacional: "ESC 2023 Cardiomyopathies."
        },
        bibliografia: "ESC 2023 Cardiomyopathies; Braunwald's Heart Disease."
    },

    {
        id: "CARD-294",
        especialidad: "Cardiología",
        tema: "Cardiomiopatías",
        subtema: "Fibrosis en CMR y muerte súbita",
        dificultad: "Extrema",
        caso: "Varón de 51 años con HCM presenta disnea NYHA II. FEVI 64%. No ha presentado síncope y no tiene antecedente familiar conocido de muerte súbita. Holter de 48 horas sin TV no sostenida. El ecocardiograma muestra hipertrofia máxima de 19 mm. Sin embargo, la CMR demuestra una carga extensa de realce tardío, cercana al 18% de la masa ventricular izquierda.",
        pregunta: "¿Cuál es la interpretación más adecuada del resultado de CMR?",
        opciones: [
            "La fibrosis carece de utilidad porque la FEVI está preservada",
            "El realce tardío extenso constituye un marcador adicional relevante para estratificación de riesgo, pero no debe utilizarse de manera aislada para indicar ICD",
            "La presencia de fibrosis confirma amiloidosis AL",
            "El resultado indica enfermedad coronaria obstructiva",
            "La fibrosis excluye el diagnóstico de HCM"
        ],
        respuestaCorrecta: 1,
        explicacion: "La fibrosis miocárdica cuantificada mediante LGE en CMR se asocia con mayor riesgo de arritmias ventriculares y muerte súbita en HCM. Sin embargo, el riesgo debe interpretarse en conjunto con antecedentes de síncope, historia familiar, grosor máximo, presencia de aneurisma apical, TV no sostenida, función ventricular y otros modificadores. No debe utilizarse un porcentaje de fibrosis como sustituto de la valoración clínica integral.",
        perlaENARM: "LGE extensa aumenta el riesgo, pero la indicación de ICD en HCM no debe reducirse a 'LGE alto = ICD'.",
        gpc: {
            mexico: "GPC mexicanas aplicables a HCM y prevención de muerte súbita.",
            internacional: "AHA/ACC 2024 HCM Guideline; ESC 2023 Cardiomyopathies."
        },
        bibliografia: "AHA/ACC 2024 HCM Guideline; ESC 2023 Cardiomyopathies."
    },

    {
        id: "CARD-295",
        especialidad: "Cardiología",
        tema: "Cardiomiopatías",
        subtema: "HCM y aneurisma apical",
        dificultad: "Extrema",
        caso: "Mujer de 61 años con HCM apical consulta por palpitaciones. Ecocardiograma: hipertrofia apical importante y FEVI 51%. La CMR demuestra un aneurisma apical verdadero con adelgazamiento regional, acinesia y fibrosis extensa. Holter: TV no sostenida de 8 latidos a 180 lpm. No ha presentado paro cardiaco previo.",
        pregunta: "¿Qué elemento del caso es particularmente relevante para la estratificación de muerte súbita?",
        opciones: [
            "La presencia del aneurisma apical y la carga arrítmica deben incorporarse a la evaluación del riesgo",
            "El aneurisma apical reduce el riesgo porque limita la contractilidad",
            "La FEVI >50% elimina cualquier riesgo arrítmico",
            "La TV no sostenida carece de importancia en HCM",
            "La HCM apical nunca se asocia a muerte súbita"
        ],
        respuestaCorrecta: 0,
        explicacion: "El aneurisma apical es un marcador fenotípico relevante en HCM y puede asociarse con fibrosis, arritmias ventriculares y riesgo tromboembólico. En este paciente además existe TV no sostenida y reducción de la FEVI, por lo que se requiere una valoración especializada del riesgo de muerte súbita y de las complicaciones del aneurisma. La CMR es especialmente útil para definir su anatomía y carga de fibrosis.",
        perlaENARM: "HCM apical no significa automáticamente bajo riesgo. El aneurisma apical cambia la evaluación pronóstica.",
        gpc: {
            mexico: "GPC mexicanas aplicables a HCM y arritmias ventriculares.",
            internacional: "AHA/ACC 2024 HCM Guideline; ESC 2023 Cardiomyopathies."
        },
        bibliografia: "AHA/ACC 2024 HCM Guideline; ESC 2023 Cardiomyopathies."
    },

    {
        id: "CARD-296",
        especialidad: "Cardiología",
        tema: "Cardiomiopatías",
        subtema: "Genotipo positivo fenotipo negativo",
        dificultad: "Extrema",
        caso: "Una mujer de 24 años es hija de un paciente con HCM sarcomérica y variante patogénica en MYBPC3. Ella presenta ECG normal, ecocardiograma sin hipertrofia y FEVI 65%. La prueba genética dirigida demuestra que es portadora de la misma variante familiar. No tiene síncope ni arritmias.",
        pregunta: "¿Cuál es la conducta más apropiada?",
        opciones: [
            "Implantar un ICD como prevención primaria exclusivamente por ser genotipo positivo",
            "Declararla definitivamente libre de enfermedad",
            "Mantener vigilancia clínica e imagenológica periódica; el genotipo positivo no equivale por sí solo a HCM fenotípica ni constituye indicación de ICD",
            "Iniciar beta-bloqueador a dosis máxima de forma obligatoria",
            "Restringir toda actividad física independientemente del contexto"
        ],
        respuestaCorrecta: 2,
        explicacion: "La paciente es genotipo positiva pero fenotipo negativa. Debe recibir seguimiento periódico porque la penetrancia es dependiente de edad y otros factores. Sin embargo, la presencia aislada de una variante patogénica no constituye por sí misma diagnóstico fenotípico de HCM ni indicación de ICD para prevención primaria. La guía AHA/ACC 2024 contempla seguimiento de familiares y enfatiza la toma de decisiones compartida respecto a actividad física.",
        perlaENARM: "Genotipo positivo ≠ fenotipo positivo. No se implanta un ICD solamente por portar una variante patogénica de HCM.",
        gpc: {
            mexico: "GPC mexicanas aplicables al seguimiento familiar de cardiomiopatías.",
            internacional: "AHA/ACC 2024 HCM Guideline; ESC 2023 Cardiomyopathies."
        },
        bibliografia: "AHA/ACC 2024 HCM Guideline; ESC 2023 Cardiomyopathies."
    },

    {
        id: "CARD-297",
        especialidad: "Cardiología",
        tema: "Cardiomiopatías",
        subtema: "Ejercicio y cardiomiopatía arritmogénica",
        dificultad: "Extrema",
        caso: "Varón de 25 años, portador de una variante patogénica desmosomal asociada a cardiomiopatía arritmogénica, permanece actualmente sin disfunción ventricular. Realiza entrenamiento de resistencia de alta intensidad 6 días por semana. Su padre desarrolló insuficiencia ventricular derecha y múltiples arritmias a los 40 años. El paciente pregunta si puede continuar con entrenamiento competitivo mientras permanezca asintomático.",
        pregunta: "¿Cuál es la consideración más importante?",
        opciones: [
            "El ejercicio intenso es protector porque aumenta la capacidad funcional",
            "El genotipo no tiene relevancia mientras la FEVI sea normal",
            "El ejercicio de alta intensidad puede favorecer penetrancia/progresión y carga arrítmica en cardiomiopatías arritmogénicas, por lo que requiere modificación individualizada",
            "Debe implantarse un ICD únicamente para permitir que continúe entrenando",
            "El entrenamiento competitivo está contraindicado únicamente cuando aparece insuficiencia cardiaca"
        ],
        respuestaCorrecta: 2,
        explicacion: "En las cardiomiopatías arritmogénicas, particularmente las relacionadas con variantes desmosomales, existe evidencia observacional de que el ejercicio intenso puede favorecer penetrancia de la enfermedad, progresión estructural y arritmias ventriculares. La recomendación debe individualizarse en un centro especializado, pero no debe considerarse que la ausencia actual de disfunción ventricular elimina el riesgo asociado al ejercicio de alta intensidad.",
        perlaENARM: "En cardiomiopatía arritmogénica, 'asintomático y FEVI normal' no equivale a 'sin riesgo por ejercicio intenso'.",
        gpc: {
            mexico: "GPC mexicanas aplicables a cardiomiopatías y actividad física.",
            internacional: "ESC 2023 Cardiomyopathies; recomendaciones internacionales sobre ejercicio en cardiomiopatías."
        },
        bibliografia: "ESC 2023 Cardiomyopathies; Braunwald's Heart Disease."
    },

    {
        id: "CARD-298",
        especialidad: "Cardiología",
        tema: "Cardiomiopatías",
        subtema: "Genética y familia",
        dificultad: "Extrema",
        caso: "Una familia presenta múltiples casos de insuficiencia cardiaca y muerte súbita. El probando tiene una variante genética clasificada actualmente como variante de significado incierto (VUS). Dos familiares de primer grado presentan alteraciones electrocardiográficas leves pero ningún fenotipo estructural claro. Los familiares solicitan que se utilice la VUS para decidir quién requiere ICD.",
        pregunta: "¿Cuál es la conducta genética más adecuada?",
        opciones: [
            "Tratar la VUS como una variante patogénica y realizar ICD a todos los portadores",
            "Descartar completamente la enfermedad porque la variante no es patogénica demostrada",
            "No utilizar una VUS aislada para decisiones clínicas mayores; debe integrarse el fenotipo y reevaluarse periódicamente la clasificación genética",
            "Realizar ICD a todos los familiares de primer grado",
            "Utilizar la VUS como prueba diagnóstica definitiva de HCM"
        ],
        respuestaCorrecta: 2,
        explicacion: "Una VUS no debe utilizarse como si fuera una variante patogénica para tomar decisiones clínicas de alto impacto. La interpretación genética depende de evidencia clínica, poblacional, funcional y de segregación, y puede cambiar con el tiempo. En paralelo, los familiares deben recibir una evaluación clínica apropiada basada en el fenotipo y antecedentes familiares. La reevaluación periódica de la clasificación de la variante puede ser necesaria.",
        perlaENARM: "VUS ≠ mutación patogénica. Una VUS no debe ser la base única para implantar un ICD o realizar decisiones familiares irreversibles.",
        gpc: {
            mexico: "GPC mexicanas aplicables a cardiomiopatías hereditarias y valoración familiar.",
            internacional: "ESC 2023 Cardiomyopathies; recomendaciones contemporáneas de genética cardiovascular."
        },
        bibliografia: "ESC 2023 Cardiomyopathies; Braunwald's Heart Disease."
    },

    {
        id: "CARD-299",
        especialidad: "Cardiología",
        tema: "Cardiomiopatías",
        subtema: "HCM y muerte súbita",
        dificultad: "Extrema",
        caso: "Varón de 22 años con HCM presenta síncope abrupto sin pródromos mientras estaba sentado. Su padre murió súbitamente a los 38 años. Ecocardiograma: hipertrofia máxima de 31 mm. Holter: varios episodios de TV no sostenida, el más largo de 12 segundos. CMR: fibrosis extensa. FEVI 67%. No existe obstrucción significativa del tracto de salida. El paciente pregunta si la ausencia de obstrucción lo hace de bajo riesgo.",
        pregunta: "¿Cuál es la respuesta más adecuada?",
        opciones: [
            "Sí, la ausencia de obstrucción elimina prácticamente el riesgo de muerte súbita",
            "La FEVI normal hace que el riesgo sea bajo",
            "La presencia de síncope probablemente arrítmico, antecedente familiar de muerte súbita, hipertrofia masiva y TV no sostenida obliga a una estratificación formal de alto riesgo independientemente del grado de obstrucción",
            "La única indicación sería realizar ablación de la vía de salida",
            "Debe realizarse únicamente una prueba de esfuerzo"
        ],
        respuestaCorrecta: 2,
        explicacion: "La obstrucción del tracto de salida no es requisito para que exista riesgo de muerte súbita en HCM. Este paciente presenta múltiples marcadores relevantes: síncope potencialmente arrítmico, antecedente familiar de muerte súbita, hipertrofia masiva, TV no sostenida y fibrosis extensa. Debe realizarse valoración especializada y discusión de ICD mediante un proceso de decisión compartida basado en las recomendaciones contemporáneas.",
        perlaENARM: "HCM obstructiva y riesgo de muerte súbita son conceptos relacionados pero no equivalentes.",
        gpc: {
            mexico: "GPC mexicanas aplicables a HCM y prevención de muerte súbita.",
            internacional: "AHA/ACC 2024 HCM Guideline; ESC 2023 Cardiomyopathies."
        },
        bibliografia: "AHA/ACC 2024 HCM Guideline; ESC 2023 Cardiomyopathies."
    },

    {
        id: "CARD-300",
        especialidad: "Cardiología",
        tema: "Cardiomiopatías",
        subtema: "Caso integrativo genético y muerte súbita",
        dificultad: "Extrema",
        caso: "Varón de 43 años consulta por palpitaciones, síncope y deterioro de la capacidad funcional. Tiene FEVI 42%. El ECG muestra PR prolongado, bloqueo de rama y extrasístoles ventriculares frecuentes. Holter: TV no sostenida. CMR: fibrosis extensa de distribución mesomiocárdica. Su padre murió súbitamente a los 49 años y una hermana presenta insuficiencia cardiaca con FEVI 38%. El estudio genético identifica una variante patogénica asociada con cardiomiopatía de alto riesgo arrítmico. No existe enfermedad coronaria, valvular ni hipertensión suficiente para explicar el fenotipo.",
        pregunta: "¿Cuál es el principio de manejo que mejor integra el caso?",
        opciones: [
            "Esperar a que la FEVI sea ≤35% antes de considerar cualquier estrategia de prevención de muerte súbita",
            "Considerar que la fibrosis es un hallazgo inespecífico sin utilidad clínica",
            "Reconocer una cardiomiopatía genética con fenotipo eléctrico y estructural de alto riesgo, valorar tempranamente terapia con dispositivo y realizar estudio en cascada de familiares",
            "Tratar exclusivamente la insuficiencia cardiaca y evitar estudiar a la familia",
            "Realizar exclusivamente ablación de las extrasístoles y dar por terminado el seguimiento"
        ],
        respuestaCorrecta: 2,
        explicacion: "Este es un fenotipo de cardiomiopatía genética con varios modificadores de alto riesgo: trastorno de conducción, TV no sostenida, síncope, fibrosis extensa, disfunción ventricular y antecedente familiar de muerte súbita. En determinadas cardiomiopatías genéticas, especialmente aquellas asociadas a genes de alto riesgo arrítmico, la prevención de muerte súbita puede requerir consideración de ICD antes de alcanzar los umbrales convencionales utilizados en cardiomiopatía dilatada no genética. Además, la identificación de una variante patogénica permite un programa estructurado de asesoramiento y estudio en cascada de familiares de primer grado. La estrategia debe realizarse en un equipo especializado.",
        perlaENARM: "En cardiomiopatía genética de alto riesgo, no esperes necesariamente a que la FEVI cruce 35%: el genotipo y el fenotipo arrítmico pueden modificar el umbral de intervención.",
        gpc: {
            mexico: "GPC mexicanas aplicables a insuficiencia cardiaca, arritmias y prevención de muerte súbita.",
            internacional: "ESC 2023 Cardiomyopathies; ESC 2022 Ventricular Arrhythmias and Sudden Cardiac Death."
        },
        bibliografia: "ESC 2023 Cardiomyopathies; ESC 2022 Ventricular Arrhythmias; Braunwald's Heart Disease."
    },
        {
        id: "CARD-301",
        especialidad: "Cardiología",
        tema: "Valvulopatías",
        subtema: "Estenosis aórtica y TAVI",
        dificultad: "Extrema",
        caso: "Mujer de 78 años con hipertensión, ERC estadio 3 y fragilidad moderada consulta por disnea NYHA III y síncope de esfuerzo. Ecocardiograma: válvula aórtica tricúspide intensamente calcificada, Vmax 4.5 m/s, gradiente medio 52 mmHg, área valvular 0.65 cm² y FEVI 55%. La angio-TC demuestra anatomía favorable para acceso transfemoral y no identifica enfermedad coronaria que requiera cirugía. El Heart Team estima riesgo quirúrgico bajo-intermedio. La paciente desea una recuperación rápida y rechaza esternotomía después de discutir las alternativas.",
        pregunta: "¿Cuál es la estrategia de tratamiento más apropiada?",
        opciones: [
            "Manejo conservador porque la FEVI está preservada",
            "Fibrinólisis de la válvula aórtica",
            "Evaluación para TAVI dentro de un Heart Team considerando edad, anatomía, expectativa de vida, acceso y trayectoria de intervenciones futuras",
            "Reemplazo quirúrgico obligatorio independientemente de edad y anatomía",
            "Valvuloplastia con balón como tratamiento definitivo"
        ],
        respuestaCorrecta: 2,
        explicacion: "La paciente tiene estenosis aórtica severa sintomática de alto gradiente y, por tanto, existe indicación de intervención. La decisión entre cirugía y TAVI no debe basarse exclusivamente en el riesgo quirúrgico. La guía ESC/EACTS 2025 incorpora edad, expectativa de vida, anatomía valvular, acceso vascular, comorbilidades, preferencias y la trayectoria de posibles intervenciones futuras. En pacientes de 70 años o más con válvula aórtica tricúspide y anatomía adecuada, TAVI tiene un papel ampliado independientemente del riesgo quirúrgico estimado.",
        perlaENARM: "En 2025, la pregunta ya no es simplemente '¿riesgo quirúrgico alto o bajo?'. La selección TAVI vs cirugía es una decisión del Heart Team basada en anatomía, edad, expectativa de vida y estrategia de por vida.",
        gpc: {
            mexico: "GPC mexicanas de estenosis aórtica aplicables al diagnóstico y tratamiento.",
            internacional: "ESC/EACTS 2025 Guidelines for the management of valvular heart disease."
        },
        bibliografia: "ESC/EACTS 2025 Valvular Heart Disease; Braunwald's Heart Disease."
    },

    {
        id: "CARD-302",
        especialidad: "Cardiología",
        tema: "Valvulopatías",
        subtema: "Estenosis aórtica asintomática",
        dificultad: "Extrema",
        caso: "Varón de 67 años con estenosis aórtica severa permanece aparentemente asintomático. Ecocardiograma: Vmax 4.3 m/s, gradiente medio 47 mmHg, área 0.72 cm² y FEVI 64%. La prueba de ejercicio demuestra disminución anormal de la presión arterial y aparición de disnea que el paciente inicialmente no había reconocido. No existen otras causas de limitación funcional.",
        pregunta: "¿Cuál es la interpretación más adecuada?",
        opciones: [
            "La enfermedad debe observarse indefinidamente porque la FEVI es normal",
            "El paciente debe considerarse realmente asintomático porque niega síntomas en reposo",
            "La prueba de ejercicio desenmascara síntomas y modifica la valoración de la indicación de intervención",
            "La estenosis es moderada porque la FEVI está preservada",
            "Debe realizarse únicamente Holter"
        ],
        respuestaCorrecta: 2,
        explicacion: "La evaluación de síntomas es fundamental en la estenosis aórtica. Los pacientes sedentarios pueden subestimar o adaptar sus actividades y considerarse asintomáticos. La prueba de ejercicio puede desenmascarar síntomas o una respuesta tensional anormal. En la guía ESC/EACTS 2025 se ha reforzado además la posibilidad de intervención temprana en determinados pacientes con estenosis aórtica severa de alto gradiente aun cuando inicialmente sean considerados asintomáticos.",
        perlaENARM: "En estenosis aórtica, 'asintomático' debe comprobarse cuando la historia clínica no concuerda con la gravedad ecocardiográfica.",
        gpc: {
            mexico: "GPC mexicanas de estenosis aórtica.",
            internacional: "ESC/EACTS 2025 Valvular Heart Disease."
        },
        bibliografia: "ESC/EACTS 2025 Valvular Heart Disease; Braunwald's Heart Disease."
    },

    {
        id: "CARD-303",
        especialidad: "Cardiología",
        tema: "Valvulopatías",
        subtema: "Insuficiencia mitral primaria",
        dificultad: "Extrema",
        caso: "Mujer de 64 años con prolapso degenerativo de P2 presenta disnea leve durante actividades habituales. Ecocardiograma: insuficiencia mitral severa, FEVI 64%, diámetro telesistólico del VI 39 mm, volumen auricular izquierdo elevado y presión pulmonar normal. No presenta fibrilación auricular. En un centro con experiencia existe alta probabilidad de reparación mitral duradera con baja mortalidad quirúrgica.",
        pregunta: "¿Cuál es el enfoque contemporáneo más apropiado?",
        opciones: [
            "Esperar obligatoriamente hasta que la FEVI sea <50%",
            "Realizar reemplazo valvular sin considerar reparación",
            "Discutir reparación quirúrgica temprana en un Heart Valve Centre considerando síntomas, probabilidad de reparación duradera y riesgo de progresión",
            "Indicar TAVI",
            "No intervenir hasta que aparezca hipertensión pulmonar severa"
        ],
        respuestaCorrecta: 2,
        explicacion: "La insuficiencia mitral primaria degenerativa severa debe evaluarse tempranamente en centros con experiencia. La guía ESC/EACTS 2025 reforzó la estrategia de reparación temprana, incluyendo una recomendación de clase I para reparación quirúrgica temprana en pacientes asintomáticos seleccionados con alta probabilidad de reparación duradera. En esta paciente además ya existen síntomas, lo que fortalece la indicación de intervención.",
        perlaENARM: "En MR primaria degenerativa, esperar a que aparezca disfunción ventricular irreversible puede significar intervenir demasiado tarde.",
        gpc: {
            mexico: "GPC IMSS de patología de la válvula mitral.",
            internacional: "ESC/EACTS 2025 Valvular Heart Disease."
        },
        bibliografia: "ESC/EACTS 2025 Valvular Heart Disease; Braunwald's Heart Disease."
    },

    {
        id: "CARD-304",
        especialidad: "Cardiología",
        tema: "Valvulopatías",
        subtema: "Insuficiencia mitral secundaria",
        dificultad: "Extrema",
        caso: "Varón de 68 años con HFrEF de etiología isquémica presenta FEVI 32%, QRS 158 ms con BRI y tratamiento médico dirigido a guías a dosis máximamente toleradas. Se realizó CRT hace 8 meses con adecuada respuesta eléctrica, pero continúa con disnea NYHA III. Ecocardiograma: insuficiencia mitral secundaria severa, VI dilatado y ausencia de enfermedad mitral primaria. No presenta hipotensión ni disfunción grave del VD. La anatomía es favorable para TEER.",
        pregunta: "¿Cuál es la estrategia más apropiada?",
        opciones: [
            "Realizar cirugía mitral obligatoria independientemente del riesgo",
            "Suspender el tratamiento de insuficiencia cardiaca porque la MR es secundaria",
            "Considerar TEER en un Heart Team después de confirmar tratamiento médico optimizado y criterios anatómicos y clínicos apropiados",
            "Realizar TAVI",
            "No tratar porque toda MR secundaria es irreversible"
        ],
        respuestaCorrecta: 2,
        explicacion: "En la MR secundaria ventricular, el primer paso es optimizar la terapia de insuficiencia cardiaca y, cuando está indicada, la resincronización. Si persiste MR severa sintomática pese a tratamiento óptimo y el paciente cumple criterios anatómicos y clínicos, TEER puede reducir hospitalizaciones por insuficiencia cardiaca y mejorar calidad de vida. La guía ESC/EACTS 2025 elevó a clase I la recomendación de TEER en pacientes seleccionados con insuficiencia cardiaca y MR ventricular secundaria severa sintomática con FEVI <50%.",
        perlaENARM: "MR secundaria: primero tratar el ventrículo; después valorar la válvula.",
        gpc: {
            mexico: "GPC mexicanas de insuficiencia cardiaca y valvulopatía mitral aplicables.",
            internacional: "ESC/EACTS 2025 Valvular Heart Disease."
        },
        bibliografia: "ESC/EACTS 2025 Valvular Heart Disease; Braunwald's Heart Disease."
    },

    {
        id: "CARD-305",
        especialidad: "Cardiología",
        tema: "Valvulopatías",
        subtema: "Insuficiencia tricuspídea severa",
        dificultad: "Extrema",
        caso: "Mujer de 71 años con fibrilación auricular permanente presenta edema, ascitis y congestión hepática. Ecocardiograma: insuficiencia tricuspídea severa, dilatación del anillo, VD moderadamente dilatado con función aún conservada y ausencia de hipertensión pulmonar precapilar. Tiene síntomas NYHA III pese a tratamiento diurético. El riesgo quirúrgico se considera alto debido a edad, fragilidad y comorbilidades.",
        pregunta: "¿Cuál es la estrategia más adecuada?",
        opciones: [
            "No intervenir porque la insuficiencia tricuspídea tiene siempre pronóstico benigno",
            "Realizar cirugía abierta obligatoria",
            "Valoración en Heart Valve Centre para tratamiento transcatéter de la tricúspide, si la anatomía es adecuada",
            "Indicar fibrinólisis",
            "Implantar un TAVI"
        ],
        respuestaCorrecta: 2,
        explicacion: "La TR severa sintomática puede producir remodelado progresivo del VD y daño de órganos abdominales. En pacientes con alto riesgo quirúrgico y sin disfunción grave del VD o hipertensión pulmonar precapilar, la guía ESC/EACTS 2025 contempla intervención transcatéter, incluyendo TEER o reemplazo transcatéter en anatomías seleccionadas, principalmente para mejorar calidad de vida y favorecer remodelado del VD.",
        perlaENARM: "En TR severa no debe esperarse hasta que aparezca disfunción irreversible del VD o daño orgánico avanzado.",
        gpc: {
            mexico: "GPC IMSS de enfermedad de la válvula tricúspide.",
            internacional: "ESC/EACTS 2025 Valvular Heart Disease."
        },
        bibliografia: "ESC/EACTS 2025 Valvular Heart Disease; Braunwald's Heart Disease."
    },

    {
        id: "CARD-306",
        especialidad: "Cardiología",
        tema: "Valvulopatías",
        subtema: "Enfermedad multivalvular",
        dificultad: "Extrema",
        caso: "Varón de 74 años presenta disnea progresiva. Ecocardiograma: estenosis aórtica severa, insuficiencia mitral moderada-severa y TR moderada. La FEVI es 48%. Existe hipertensión pulmonar. La cuantificación de cada lesión por separado presenta incertidumbre debido a la interacción hemodinámica entre las válvulas. La angiografía coronaria muestra enfermedad de dos vasos que podría requerir revascularización.",
        pregunta: "¿Cuál es el principio fundamental para decidir la estrategia terapéutica?",
        opciones: [
            "Tratar únicamente la lesión con el gradiente más alto",
            "Sumar mecánicamente los grados de cada valvulopatía",
            "Realizar evaluación multimodal integrada y discutir la secuencia de intervención en un Heart Team considerando las interacciones hemodinámicas",
            "Ignorar las lesiones secundarias",
            "Decidir exclusivamente mediante el diámetro auricular izquierdo"
        ],
        respuestaCorrecta: 2,
        explicacion: "La enfermedad multivalvular no puede resolverse sumando grados de severidad obtenidos de forma independiente. Una lesión puede modificar el flujo transvalvular y alterar la estimación de la gravedad de otra. La guía 2025 incorpora un enfoque específico para enfermedad multivalvular y enfatiza imagen multimodal y decisión por Heart Team. También deben integrarse anatomía coronaria, función ventricular, presión pulmonar y secuencia de intervenciones.",
        perlaENARM: "Dos valvulopatías simultáneas pueden distorsionar la cuantificación de ambas. En enfermedad multivalvular, la fisiología importa tanto como el número.",
        gpc: {
            mexico: "GPC mexicanas aplicables a valvulopatías y cardiopatía isquémica.",
            internacional: "ESC/EACTS 2025 Valvular Heart Disease."
        },
        bibliografia: "ESC/EACTS 2025 Valvular Heart Disease; Braunwald's Heart Disease."
    },

    {
        id: "CARD-307",
        especialidad: "Cardiología",
        tema: "Prótesis valvulares",
        subtema: "Prótesis mecánica y anticoagulación",
        dificultad: "Extrema",
        caso: "Mujer de 54 años con prótesis mecánica mitral implantada hace 4 años consulta porque desea suspender warfarina para evitar controles frecuentes. Se encuentra asintomática, sin sangrado y con INR terapéutico estable. Tiene fibrilación auricular. Pregunta si puede cambiar a apixabán.",
        pregunta: "¿Cuál es la recomendación más apropiada?",
        opciones: [
            "Cambiar inmediatamente a apixabán",
            "Cambiar a rivaroxabán",
            "Mantener anticoagulación con antagonista de vitamina K porque las prótesis mecánicas requieren anticoagulación con VKA",
            "Suspender anticoagulación porque la prótesis tiene más de tres años",
            "Usar únicamente aspirina"
        ],
        respuestaCorrecta: 2,
        explicacion: "Los pacientes con prótesis mecánicas requieren anticoagulación con antagonistas de vitamina K para prevenir trombosis protésica y eventos tromboembólicos. Los DOAC no son una alternativa equivalente para prótesis mecánicas. La presencia concomitante de FA aumenta aún más la necesidad de anticoagulación, pero no cambia el principio fundamental: la prótesis mecánica requiere VKA.",
        perlaENARM: "Prótesis mecánica = VKA. No sustituir rutinariamente por DOAC.",
        gpc: {
            mexico: "GPC mexicanas aplicables a prótesis valvulares y anticoagulación.",
            internacional: "ESC/EACTS 2025 Valvular Heart Disease."
        },
        bibliografia: "ESC/EACTS 2025 Valvular Heart Disease; Braunwald's Heart Disease."
    },

    {
        id: "CARD-308",
        especialidad: "Cardiología",
        tema: "Prótesis valvulares",
        subtema: "Trombosis protésica",
        dificultad: "Extrema",
        caso: "Varón de 63 años con prótesis mecánica mitral presenta disnea súbita y edema pulmonar. INR actual 1.4. Ecocardiograma transtorácico muestra aumento marcado del gradiente transmitral respecto a estudios previos y movilidad reducida de uno de los discos. El ecocardiograma transesofágico demuestra una masa compatible con trombo obstructivo.",
        pregunta: "¿Cuál es la interpretación más probable?",
        opciones: [
            "Degeneración estructural de una prótesis biológica",
            "Trombosis obstructiva de prótesis mecánica",
            "Endocarditis descartada por el INR bajo",
            "Insuficiencia mitral funcional aislada",
            "Miocardiopatía restrictiva"
        ],
        respuestaCorrecta: 1,
        explicacion: "La combinación de anticoagulación subterapéutica, deterioro hemodinámico agudo, aumento del gradiente, reducción de movilidad y trombo visualizado es altamente sugestiva de trombosis obstructiva de prótesis mecánica. La ecocardiografía transesofágica es fundamental para caracterizar la prótesis y diferenciar trombo de pannus, vegetación u otras causas de obstrucción. La conducta terapéutica depende de tamaño y localización del trombo, síntomas, riesgo embólico/hemorrágico y disponibilidad de cirugía o tratamiento fibrinolítico.",
        perlaENARM: "Prótesis mecánica + INR bajo + aumento súbito del gradiente + masa = pensar primero en trombosis protésica.",
        gpc: {
            mexico: "GPC mexicanas aplicables a prótesis valvulares.",
            internacional: "ESC/EACTS 2025 Valvular Heart Disease."
        },
        bibliografia: "ESC/EACTS 2025 Valvular Heart Disease; Braunwald's Heart Disease."
    },

    {
        id: "CARD-309",
        especialidad: "Cardiología",
        tema: "Prótesis valvulares",
        subtema: "Degeneración de bioprótesis",
        dificultad: "Extrema",
        caso: "Mujer de 76 años con bioprótesis aórtica implantada quirúrgicamente hace 11 años presenta disnea progresiva. Ecocardiograma: aumento progresivo del gradiente transvalvular respecto a estudios anteriores, engrosamiento y calcificación de los velos protésicos y regurgitación central moderada. No presenta fiebre ni bacteriemia. El riesgo de una nueva cirugía se considera elevado.",
        pregunta: "¿Cuál es la estrategia que debe evaluarse en un centro especializado?",
        opciones: [
            "Ignorar el deterioro porque toda bioprótesis tiene una vida útil indefinida",
            "Valorar una estrategia valve-in-valve transcatéter si la anatomía es adecuada",
            "Cambiar obligatoriamente a una prótesis mecánica mediante cirugía",
            "Administrar antibióticos durante seis meses",
            "Realizar fibrinólisis sistémica"
        ],
        respuestaCorrecta: 1,
        explicacion: "La paciente presenta probable deterioro estructural de una bioprótesis. En pacientes con disfunción significativa de una bioprótesis y riesgo quirúrgico intermedio o alto, la estrategia transcatéter valve-in-valve puede ser considerada cuando la anatomía es adecuada. La guía ESC/EACTS 2025 amplió esta recomendación a una clase IIa en pacientes seleccionados, incluyendo posiciones mitral y tricuspídea en escenarios apropiados.",
        perlaENARM: "Bioprótesis fallida no significa automáticamente reoperación: primero hay que valorar anatomía y posibilidad de valve-in-valve.",
        gpc: {
            mexico: "GPC mexicanas aplicables a prótesis valvulares.",
            internacional: "ESC/EACTS 2025 Valvular Heart Disease."
        },
        bibliografia: "ESC/EACTS 2025 Valvular Heart Disease; Braunwald's Heart Disease."
    },

    {
        id: "CARD-310",
        especialidad: "Cardiología",
        tema: "Valvulopatías",
        subtema: "Caso integrativo de prótesis y Heart Team",
        dificultad: "Extrema",
        caso: "Varón de 72 años con antecedente de reemplazo mitral biológico hace 9 años consulta por disnea NYHA III. Ecocardiograma transesofágico: deterioro estructural severo de la bioprótesis, insuficiencia mitral severa y gradiente medio elevado. FEVI 47%. Presenta ERC, EPOC y fragilidad. El riesgo quirúrgico es elevado. La angio-TC demuestra anatomía potencialmente favorable para valve-in-valve transcatéter. No hay endocarditis activa ni trombo intracardiaco.",
        pregunta: "¿Cuál es el enfoque que mejor refleja la toma de decisiones contemporánea?",
        opciones: [
            "Realizar cirugía de reemplazo obligatoriamente porque la prótesis ya tiene nueve años",
            "Decidir exclusivamente según el gradiente transvalvular",
            "Discutir una estrategia transcatéter valve-in-valve en Heart Valve Centre, integrando anatomía, riesgo quirúrgico, expectativa de vida, comorbilidades y objetivos del paciente",
            "Administrar anticoagulación y reevaluar en cinco años",
            "Realizar TAVI porque cualquier procedimiento transcatéter es equivalente"
        ],
        respuestaCorrecta: 2,
        explicacion: "El paciente tiene una bioprótesis mitral con deterioro estructural severo, síntomas importantes y elevado riesgo quirúrgico. La anatomía potencialmente favorable para valve-in-valve hace razonable discutir una estrategia transcatéter en un Heart Valve Centre. Sin embargo, la decisión no debe reducirse a la edad de la prótesis ni al gradiente: debe integrar mecanismo de disfunción, anatomía, riesgo de obstrucción del tracto de salida, acceso, función ventricular, comorbilidades, expectativa de vida y preferencias. La guía ESC/EACTS 2025 otorga mayor protagonismo a estrategias transcatéter en pacientes seleccionados con disfunción de prótesis biológicas.",
        perlaENARM: "La decisión valvular moderna es una estrategia de por vida: no solo importa qué procedimiento puede hacerse hoy, sino qué opciones quedarán disponibles después.",
        gpc: {
            mexico: "GPC mexicanas aplicables a prótesis valvulares y valvulopatía mitral.",
            internacional: "ESC/EACTS 2025 Valvular Heart Disease."
        },
        bibliografia: "ESC/EACTS 2025 Valvular Heart Disease; Braunwald's Heart Disease."
    },
        {
        id: "CARD-311",
        especialidad: "Cardiología",
        tema: "Hipertensión pulmonar",
        subtema: "Hipertensión pulmonar precapilar",
        dificultad: "Extrema",
        caso: "Mujer de 42 años con esclerodermia limitada presenta disnea progresiva de 10 meses y disminución de su capacidad funcional. No fuma y las pruebas de función pulmonar muestran una alteración restrictiva leve que no explica la intensidad de los síntomas. Ecocardiograma: dilatación del ventrículo derecho, aplanamiento septal y velocidad máxima de insuficiencia tricuspídea de 3.5 m/s. No existe enfermedad valvular izquierda significativa. El cateterismo derecho demuestra presión arterial pulmonar 82/31 mmHg, presión arterial pulmonar media de 49 mmHg, presión de enclavamiento pulmonar de 9 mmHg, gasto cardiaco de 4.1 L/min y resistencia vascular pulmonar de 9.8 WU.",
        pregunta: "¿Cuál es la interpretación hemodinámica más apropiada?",
        opciones: [
            "Hipertensión pulmonar aislada poscapilar por cardiopatía izquierda",
            "Hipertensión pulmonar combinada poscapilar y precapilar",
            "Hipertensión pulmonar precapilar compatible con hipertensión arterial pulmonar asociada a enfermedad del tejido conectivo",
            "Hipertensión pulmonar secundaria exclusivamente a insuficiencia mitral",
            "Hemodinámica pulmonar normal"
        ],
        respuestaCorrecta: 2,
        explicacion: "La paciente cumple criterios hemodinámicos de hipertensión pulmonar precapilar: mPAP >20 mmHg, PAWP ≤15 mmHg y PVR >2 WU. En el contexto de esclerodermia, ausencia de una causa alternativa predominante y datos compatibles con enfermedad vascular pulmonar, el fenotipo es compatible con hipertensión arterial pulmonar asociada a enfermedad del tejido conectivo. La clasificación etiológica no debe basarse únicamente en la presión pulmonar, sino en la integración del contexto clínico, función pulmonar, imagen y cateterismo.",
        perlaENARM: "mPAP >20 + PAWP ≤15 + PVR >2 = patrón precapilar. Después hay que determinar la causa; no toda HP precapilar es HAP idiopática.",
        gpc: {
            mexico: "GPC mexicanas aplicables a hipertensión arterial pulmonar y enfermedades del tejido conectivo.",
            internacional: "ESC/ERS 2022 Guidelines for Pulmonary Hypertension."
        },
        bibliografia: "ESC/ERS 2022 Pulmonary Hypertension; Braunwald's Heart Disease."
    },

    {
        id: "CARD-312",
        especialidad: "Cardiología",
        tema: "Hipertensión pulmonar",
        subtema: "Hipertensión pulmonar por cardiopatía izquierda",
        dificultad: "Extrema",
        caso: "Varón de 77 años con obesidad, hipertensión, fibrilación auricular permanente y HFpEF presenta disnea progresiva. Ecocardiograma: FEVI 61%, hipertrofia ventricular izquierda, dilatación auricular izquierda y presión pulmonar elevada. El cateterismo derecho demuestra mPAP 39 mmHg, PAWP 24 mmHg, gasto cardiaco 4.8 L/min y PVR 1.9 WU. No existen datos de enfermedad pulmonar significativa ni antecedentes de tromboembolia.",
        pregunta: "¿Cuál es la clasificación hemodinámica más adecuada?",
        opciones: [
            "Hipertensión arterial pulmonar idiopática",
            "Hipertensión pulmonar precapilar",
            "Hipertensión pulmonar aislada poscapilar asociada a cardiopatía izquierda",
            "Hipertensión pulmonar combinada poscapilar y precapilar",
            "CTEPH"
        ],
        respuestaCorrecta: 2,
        explicacion: "El paciente presenta mPAP >20 mmHg y PAWP >15 mmHg, demostrando un componente poscapilar. La PVR es ≤2 WU, por lo que no existe un componente precapilar hemodinámicamente significativo bajo la definición actual. El contexto clínico —HFpEF, hipertensión, obesidad, FA y dilatación auricular izquierda— favorece enfermedad cardiaca izquierda como mecanismo predominante.",
        perlaENARM: "En HP poscapilar, la PAWP es la clave: PAWP >15 mmHg. PVR ≤2 WU = aislada poscapilar; PVR >2 WU = combinada.",
        gpc: {
            mexico: "GPC mexicanas de insuficiencia cardiaca e hipertensión pulmonar aplicables.",
            internacional: "ESC/ERS 2022 Pulmonary Hypertension."
        },
        bibliografia: "ESC/ERS 2022 Pulmonary Hypertension; Braunwald's Heart Disease."
    },

    {
        id: "CARD-313",
        especialidad: "Cardiología",
        tema: "Hipertensión pulmonar",
        subtema: "Hipertensión pulmonar combinada",
        dificultad: "Extrema",
        caso: "Mujer de 70 años con HFpEF presenta disnea progresiva desproporcionada a su congestión izquierda. Ecocardiograma: dilatación importante del VD y disfunción sistólica moderada. Cateterismo derecho: mPAP 45 mmHg, PAWP 20 mmHg, gasto cardiaco 3.5 L/min y PVR 7.1 WU. La tomografía no demuestra tromboembolia crónica y las pruebas pulmonares no muestran enfermedad parenquimatosa suficiente para explicar el cuadro.",
        pregunta: "¿Cuál es el diagnóstico hemodinámico?",
        opciones: [
            "Hipertensión pulmonar aislada poscapilar",
            "Hipertensión pulmonar combinada poscapilar y precapilar",
            "Hipertensión arterial pulmonar idiopática pura",
            "Hipertensión pulmonar exclusivamente por hipoxia",
            "Hemodinámica normal"
        ],
        respuestaCorrecta: 1,
        explicacion: "Existe hipertensión pulmonar poscapilar porque la PAWP es >15 mmHg, pero la PVR de 7.1 WU demuestra un componente precapilar significativo. Por tanto, se trata de hipertensión pulmonar combinada poscapilar y precapilar. Este fenotipo puede aparecer en pacientes con cardiopatía izquierda avanzada y remodelado vascular pulmonar.",
        perlaENARM: "PAWP elevada + PVR >2 WU = CpcPH. No etiquetes automáticamente como HAP a un paciente con enfermedad izquierda.",
        gpc: {
            mexico: "GPC mexicanas de insuficiencia cardiaca/hipertensión pulmonar.",
            internacional: "ESC/ERS 2022 Pulmonary Hypertension."
        },
        bibliografia: "ESC/ERS 2022 Pulmonary Hypertension; Braunwald's Heart Disease."
    },

    {
        id: "CARD-314",
        especialidad: "Cardiología",
        tema: "Hipertensión pulmonar",
        subtema: "Diagnóstico de CTEPH",
        dificultad: "Extrema",
        caso: "Varón de 56 años presentó TEP hace 11 meses y recibió anticoagulación adecuada. Actualmente persiste con disnea al subir un piso de escaleras. Ecocardiograma: dilatación moderada del VD y presión pulmonar elevada. La angio-TC actual muestra defectos vasculares periféricos poco concluyentes. El paciente no tiene enfermedad pulmonar significativa. La saturación en reposo es 94%.",
        pregunta: "¿Cuál es el estudio de imagen más apropiado para buscar enfermedad tromboembólica crónica cuando existe sospecha de CTEPH?",
        opciones: [
            "Radiografía de tórax como único estudio",
            "Gammagrafía pulmonar de ventilación/perfusión",
            "Resonancia cerebral",
            "Prueba de esfuerzo sin imagen",
            "Ecocardiograma transesofágico"
        ],
        respuestaCorrecta: 1,
        explicacion: "La gammagrafía V/Q tiene un papel central en el cribado de CTEPH y es particularmente sensible para identificar defectos de perfusión segmentarios o mayores. Una gammagrafía normal prácticamente excluye CTEPH en ausencia de circunstancias excepcionales. Cuando existen defectos de perfusión mismatched, el paciente debe continuar el estudio en un centro especializado con imagen anatómica y evaluación hemodinámica.",
        perlaENARM: "TEP previo + disnea persistente + HP = pensar en CTEPH. La V/Q es una prueba clave de cribado.",
        gpc: {
            mexico: "GPC mexicanas aplicables a tromboembolia pulmonar e hipertensión pulmonar.",
            internacional: "ESC/ERS 2022 Pulmonary Hypertension."
        },
        bibliografia: "ESC/ERS 2022 Pulmonary Hypertension; Braunwald's Heart Disease."
    },

    {
        id: "CARD-315",
        especialidad: "Cardiología",
        tema: "CTEPH",
        subtema: "Endarterectomía pulmonar",
        dificultad: "Extrema",
        caso: "Mujer de 52 años con disnea progresiva presenta gammagrafía V/Q con múltiples defectos de perfusión segmentarios mismatched. La angio-TC demuestra membranas, webs y oclusiones crónicas organizadas en arterias pulmonares lobares y segmentarias proximales. Cateterismo derecho: mPAP 43 mmHg, PAWP 9 mmHg y PVR 6.2 WU. No presenta enfermedad pulmonar significativa. El equipo especializado considera que las lesiones son técnicamente accesibles.",
        pregunta: "¿Cuál es el tratamiento potencialmente definitivo que debe evaluarse?",
        opciones: [
            "Anticoagulación aislada de por vida sin valoración adicional",
            "Endarterectomía pulmonar en un centro especializado",
            "TAVI",
            "Ablación del nodo AV",
            "Fibrinólisis sistémica crónica"
        ],
        respuestaCorrecta: 1,
        explicacion: "El cuadro es compatible con CTEPH y las lesiones son anatómicamente accesibles para cirugía. La endarterectomía pulmonar es el tratamiento de elección potencialmente curativo en pacientes operables con enfermedad tromboembólica crónica organizada accesible quirúrgicamente. La evaluación debe realizarse en centros expertos porque la operabilidad depende de distribución anatómica, correlación hemodinámica y experiencia del equipo.",
        perlaENARM: "CTEPH operable = pensar primero en endarterectomía pulmonar, no simplemente en aumentar fármacos para HAP.",
        gpc: {
            mexico: "GPC mexicanas aplicables a tromboembolia pulmonar crónica/hipertensión pulmonar.",
            internacional: "ESC/ERS 2022 Pulmonary Hypertension."
        },
        bibliografia: "ESC/ERS 2022 Pulmonary Hypertension; Braunwald's Heart Disease."
    },

    {
        id: "CARD-316",
        especialidad: "Cardiología",
        tema: "CTEPH",
        subtema: "Angioplastia pulmonar con balón",
        dificultad: "Extrema",
        caso: "Varón de 68 años con CTEPH presenta disnea NYHA III. La evaluación multidisciplinaria concluye que la enfermedad es inoperable debido a distribución predominantemente distal de las lesiones y comorbilidades importantes. Permanece sintomático pese a anticoagulación y tratamiento médico dirigido. La anatomía vascular es susceptible de intervención percutánea.",
        pregunta: "¿Cuál es una estrategia intervencionista apropiada en un centro experto?",
        opciones: [
            "Angioplastia pulmonar con balón",
            "Angioplastia coronaria",
            "TAVI",
            "Fibrinólisis repetida mensual",
            "Ablación pulmonar por radiofrecuencia"
        ],
        respuestaCorrecta: 0,
        explicacion: "La angioplastia pulmonar con balón (BPA) es una alternativa establecida para pacientes seleccionados con CTEPH técnicamente inoperable o con enfermedad residual/persistente en escenarios determinados. Requiere centros con experiencia debido al riesgo de lesión vascular y edema pulmonar de reperfusión. La estrategia se integra con anticoagulación y tratamiento médico específico cuando corresponde.",
        perlaENARM: "CTEPH no operable no significa 'sin opciones': BPA es una intervención especializada con papel establecido.",
        gpc: {
            mexico: "GPC mexicanas aplicables a tromboembolia pulmonar crónica.",
            internacional: "ESC/ERS 2022 Pulmonary Hypertension."
        },
        bibliografia: "ESC/ERS 2022 Pulmonary Hypertension; Braunwald's Heart Disease."
    },

    {
        id: "CARD-317",
        especialidad: "Cardiología",
        tema: "Tromboembolia pulmonar",
        subtema: "TEP de alto riesgo",
        dificultad: "Extrema",
        caso: "Varón de 63 años consulta por disnea súbita y síncope. TA 74/46 mmHg, FC 128 lpm, SatO2 84% y piel fría. ECG: taquicardia sinusal con patrón de sobrecarga de VD. Ecocardiograma: dilatación aguda del VD con desplazamiento septal. La angio-TC demuestra tromboembolismo pulmonar bilateral extenso. No existe hemorragia activa ni antecedente reciente de cirugía. El deterioro hemodinámico persiste pese a soporte inicial.",
        pregunta: "¿Cuál es la estrategia de reperfusión que debe considerarse prioritariamente si no existen contraindicaciones?",
        opciones: [
            "Solo anticoagulación y observación",
            "Terapia de reperfusión urgente, típicamente fibrinólisis sistémica en el contexto apropiado",
            "TAVI urgente",
            "Diuréticos como tratamiento definitivo",
            "Aspirina como monoterapia"
        ],
        respuestaCorrecta: 1,
        explicacion: "El paciente presenta TEP de alto riesgo definido por inestabilidad hemodinámica. En ausencia de contraindicaciones mayores, la reperfusión urgente mediante fibrinólisis sistémica es una estrategia establecida. Si la fibrinólisis está contraindicada o fracasa, pueden considerarse alternativas de reperfusión quirúrgica o mediante catéter en centros apropiados.",
        perlaENARM: "TEP + shock/hipotensión persistente = alto riesgo. La pregunta deja de ser '¿anticoagular?' y pasa a ser '¿cómo reperfundir?'.",
        gpc: {
            mexico: "GPC mexicanas de diagnóstico y tratamiento de tromboembolia pulmonar.",
            internacional: "ESC Guidelines for acute pulmonary embolism; ESC/ERS framework for PH."
        },
        bibliografia: "ESC Acute Pulmonary Embolism Guidelines; Braunwald's Heart Disease."
    },

    {
        id: "CARD-318",
        especialidad: "Cardiología",
        tema: "Tromboembolia pulmonar",
        subtema: "TEP intermedio-alto",
        dificultad: "Extrema",
        caso: "Mujer de 71 años con cáncer activo presenta disnea y dolor torácico. TA 118/72 mmHg, FC 112 lpm y SatO2 89%. La angio-TC muestra TEP bilateral. Ecocardiograma: VD dilatado con TAPSE reducida. Troponina elevada y BNP significativamente aumentado. Permanece normotensa y sin datos de shock.",
        pregunta: "¿Cuál es la clasificación clínica más apropiada y cuál es el principio de tratamiento?",
        opciones: [
            "TEP de alto riesgo con fibrinólisis inmediata obligatoria",
            "TEP de riesgo intermedio-alto; anticoagulación y vigilancia estrecha, reservando reperfusión de rescate para deterioro hemodinámico",
            "TEP de bajo riesgo; manejo ambulatorio obligatorio",
            "TEP crónico confirmado",
            "TEP descartado porque la presión arterial es normal"
        ],
        respuestaCorrecta: 1,
        explicacion: "La paciente está normotensa, por lo que no pertenece al grupo de alto riesgo por inestabilidad hemodinámica. Sin embargo, presenta disfunción del VD y biomarcadores positivos, características de un grupo de mayor riesgo dentro de los pacientes normotensos. El principio es anticoagulación y vigilancia estrecha, sin fibrinólisis sistémica rutinaria en pacientes estables, reservando reperfusión de rescate para deterioro hemodinámico.",
        perlaENARM: "TEP normotenso + disfunción VD + troponina positiva = no es automáticamente 'fibrinólisis'; requiere estratificación y vigilancia.",
        gpc: {
            mexico: "GPC mexicanas de tromboembolia pulmonar.",
            internacional: "ESC Guidelines for acute pulmonary embolism."
        },
        bibliografia: "ESC Acute Pulmonary Embolism Guidelines; Braunwald's Heart Disease."
    },

    {
        id: "CARD-319",
        especialidad: "Cardiología",
        tema: "Cor pulmonale",
        subtema: "Insuficiencia ventricular derecha por enfermedad pulmonar",
        dificultad: "Extrema",
        caso: "Varón de 66 años con EPOC grave y antecedente de tabaquismo de 45 paquetes-año presenta edema periférico progresivo y distensión abdominal. Ecocardiograma: VD dilatado, hipertrofia del VD, insuficiencia tricuspídea funcional y presión pulmonar elevada. FEVI 62%. No existe enfermedad valvular izquierda significativa. Gasometría: hipoxemia crónica con hipercapnia compensada. Presenta signos de congestión sistémica sin datos de choque.",
        pregunta: "¿Cuál es la fisiopatología que mejor explica el cuadro?",
        opciones: [
            "Fallo primario del VI que produce edema periférico",
            "Cor pulmonale secundario a enfermedad pulmonar crónica e hipertensión pulmonar",
            "Taponamiento cardiaco",
            "Miocardiopatía hipertrófica obstructiva",
            "Estenosis mitral crítica"
        ],
        respuestaCorrecta: 1,
        explicacion: "El cor pulmonale corresponde a alteración estructural y/o funcional del VD secundaria a enfermedad pulmonar y/o hipoxia que genera aumento de la resistencia vascular pulmonar. En EPOC avanzado, hipoxia alveolar, vasoconstricción pulmonar, remodelado vascular y destrucción del lecho capilar pueden aumentar la poscarga del VD y producir hipertrofia, dilatación e insuficiencia derecha.",
        perlaENARM: "Cor pulmonale = problema del VD secundario a enfermedad pulmonar/hipoxia y aumento de la poscarga pulmonar; no es simplemente 'insuficiencia cardiaca derecha'.",
        gpc: {
            mexico: "GPC mexicanas de EPOC e hipertensión pulmonar aplicables.",
            internacional: "ESC/ERS 2022 Pulmonary Hypertension."
        },
        bibliografia: "ESC/ERS 2022 Pulmonary Hypertension; Braunwald's Heart Disease; GOLD."
    },

    {
        id: "CARD-320",
        especialidad: "Cardiología",
        tema: "Hipertensión pulmonar",
        subtema: "Caso integrativo ENARM",
        dificultad: "Extrema",
        caso: "Mujer de 59 años con disnea progresiva, síncope de esfuerzo y edema periférico. Tiene antecedente de TEP tratado hace 18 meses. Ecocardiograma: VD severamente dilatado, TAPSE reducida y presión pulmonar elevada. La FEVI es 62%. La gammagrafía V/Q muestra múltiples defectos segmentarios mismatched. La angio-TC demuestra webs, bandas y estenosis organizadas en ramas pulmonares bilaterales. Cateterismo: mPAP 48 mmHg, PAWP 8 mmHg, gasto cardiaco 3.7 L/min y PVR 10.8 WU. La evaluación anatómica demuestra enfermedad proximal técnicamente accesible para cirugía.",
        pregunta: "¿Cuál es la estrategia terapéutica que mejor integra todos los datos?",
        opciones: [
            "Tratar como HAP idiopática con monoterapia vasodilatadora y no intervenir sobre las arterias pulmonares",
            "Diagnosticar CTEPH y referir a un centro especializado para valorar endarterectomía pulmonar como tratamiento potencialmente definitivo",
            "Suspender anticoagulación porque el evento tromboembólico ocurrió hace más de un año",
            "Realizar TAVI por la presencia de hipertensión pulmonar",
            "Realizar fibrinólisis sistémica crónica"
        ],
        respuestaCorrecta: 1,
        explicacion: "El caso integra antecedente de TEP, síntomas persistentes, defectos mismatched en V/Q, lesiones organizadas crónicas en angio-TC y hemodinámica de hipertensión pulmonar precapilar. La distribución proximal técnicamente accesible hace que la endarterectomía pulmonar sea la estrategia que debe evaluarse prioritariamente en un centro experto. La CTEPH tiene un tratamiento multimodal que puede incluir cirugía, BPA y tratamiento médico según operabilidad, anatomía y persistencia de enfermedad.",
        perlaENARM: "CTEPH se sospecha clínicamente, se demuestra con imagen de defectos crónicos y se confirma hemodinámicamente; la operabilidad determina la estrategia definitiva.",
        gpc: {
            mexico: "GPC mexicanas aplicables a tromboembolia pulmonar e hipertensión pulmonar.",
            internacional: "ESC/ERS 2022 Pulmonary Hypertension."
        },
        bibliografia: "ESC/ERS 2022 Pulmonary Hypertension; Braunwald's Heart Disease."
    },
        {
        id: "CARD-321",
        especialidad: "Cardiología",
        tema: "Cardiopatías congénitas del adulto",
        subtema: "Tetralogía de Fallot reparada",
        dificultad: "Extrema",
        caso: "Mujer de 31 años con antecedente de Tetralogía de Fallot reparada mediante corrección completa a los 18 meses de edad. Durante los últimos dos años presenta disminución progresiva de su tolerancia al ejercicio y episodios de palpitaciones. Exploración: soplo diastólico II/VI en foco pulmonar y segundo ruido desdoblado. ECG: bloqueo completo de rama derecha con QRS de 178 ms. Resonancia cardiaca: volumen telediastólico del VD 178 mL/m², volumen telesistólico 102 mL/m², FEVD 43%, insuficiencia pulmonar moderada-severa y cicatriz en el tracto de salida del VD. Holter: episodios de taquicardia ventricular no sostenida.",
        pregunta: "¿Cuál es la alteración que más probablemente explica el deterioro progresivo y que debe dirigir la estrategia de seguimiento/intervención?",
        opciones: [
            "Únicamente la presencia de bloqueo de rama derecha, sin necesidad de evaluar el VD",
            "Insuficiencia pulmonar significativa con dilatación/disfunción del VD y sustrato arrítmico posquirúrgico",
            "Estenosis mitral adquirida",
            "Miocardiopatía hipertrófica familiar",
            "Hipertensión arterial pulmonar idiopática"
        ],
        respuestaCorrecta: 1,
        explicacion: "La Tetralogía de Fallot reparada requiere vigilancia durante toda la vida. La insuficiencia pulmonar crónica puede producir sobrecarga de volumen, dilatación progresiva del VD, deterioro de la función ventricular y favorecer arritmias ventriculares. El QRS muy prolongado, la dilatación del VD, la disfunción ventricular y la TV no sostenida indican un fenotipo de mayor riesgo. La resonancia cardiaca es particularmente importante para cuantificar volúmenes ventriculares y regurgitación pulmonar. La decisión sobre intervención de la válvula pulmonar debe integrar síntomas, tamaño y función del VD, anatomía del tracto de salida, arritmias y características individuales.",
        perlaENARM: "En Fallot reparado, no basta con preguntar si existe insuficiencia pulmonar: hay que valorar su repercusión sobre volumen/función del VD y el riesgo arrítmico.",
        gpc: {
            mexico: "GPC mexicanas de cardiopatías congénitas y seguimiento de cardiopatía congénita; considerar las recomendaciones específicas disponibles para cardiopatía congénita.",
            internacional: "2025 ACC/AHA/HRS/ISACHD/SCAI Guideline for Adults With Congenital Heart Disease; 2020 ESC Guidelines for Adult Congenital Heart Disease."
        },
        bibliografia: "2025 ACC/AHA/HRS/ISACHD/SCAI ACHD Guideline; 2020 ESC ACHD Guideline; Braunwald's Heart Disease."
    },

    {
        id: "CARD-322",
        especialidad: "Cardiología",
        tema: "Cardiopatías congénitas del adulto",
        subtema: "Coartación de la aorta",
        dificultad: "Extrema",
        caso: "Varón de 29 años, operado de coartación de la aorta durante la infancia, consulta por cefalea y disminución de tolerancia al ejercicio. TA en brazo derecho 168/94 mmHg y en pierna 118/72 mmHg. Pulsos femorales disminuidos y retrasados. La angio-RM demuestra estrechamiento residual de la aorta descendente con circulación colateral prominente. El paciente refiere que su presión arterial en consulta primaria suele ser normal.",
        pregunta: "¿Cuál es la interpretación más adecuada?",
        opciones: [
            "La presión arterial es normal porque la medición aislada en consulta no supera 180 mmHg",
            "La diferencia brazo-pierna y la anatomía son compatibles con recoartación o lesión residual clínicamente relevante y requieren evaluación especializada",
            "El hallazgo corresponde a insuficiencia aórtica aislada",
            "La ausencia de síntomas graves excluye complicaciones tardías",
            "El tratamiento debe limitarse a observar la presión arterial braquial"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los adultos con coartación reparada permanecen en riesgo de hipertensión residual/recurrente, recoartación, enfermedad aórtica y complicaciones cardiovasculares. Una diferencia significativa de presión entre extremidades, pulsos femorales retrasados y evidencia anatómica de estrechamiento apoyan enfermedad residual. La evaluación debe integrar presión arterial en extremidades superiores e inferiores, monitorización ambulatoria cuando corresponda y evaluación anatómica mediante RM o TC. El manejo debe realizarse con experiencia en cardiopatía congénita del adulto.",
        perlaENARM: "Coartación reparada no significa curación definitiva. La hipertensión puede persistir incluso con gradientes aparentemente modestos.",
        gpc: {
            mexico: "GPC mexicana IMSS para coartación de aorta en adulto, aplicable al seguimiento de esta cardiopatía.",
            internacional: "2025 ACC/AHA/HRS/ISACHD/SCAI ACHD Guideline; 2020 ESC ACHD Guideline."
        },
        bibliografia: "2025 ACC/AHA/HRS/ISACHD/SCAI ACHD Guideline; 2020 ESC ACHD Guideline; Braunwald's Heart Disease."
    },

    {
        id: "CARD-323",
        especialidad: "Cardiología",
        tema: "Cardiopatías congénitas del adulto",
        subtema: "Comunicación interauricular",
        dificultad: "Extrema",
        caso: "Mujer de 42 años con disnea de esfuerzo y palpitaciones. Ecocardiograma: CIA tipo ostium secundum de 19 mm, cortocircuito izquierda-derecha, dilatación marcada de aurícula y VD, insuficiencia tricuspídea moderada y presión pulmonar discretamente elevada. La saturación arterial es 97%. Cateterismo: Qp/Qs 2.3, PAWP 10 mmHg, PVR 1.6 WU. No existe fibrilación auricular permanente ni enfermedad pulmonar significativa.",
        pregunta: "¿Cuál es la conducta que mejor corresponde a este perfil?",
        opciones: [
            "No cerrar la CIA porque todo cortocircuito congénito debe permanecer abierto en el adulto",
            "Considerar cierre del defecto porque existe cortocircuito significativo con sobrecarga de cavidades derechas y resistencia vascular pulmonar favorable",
            "Realizar cierre únicamente si aparece cianosis",
            "Iniciar tratamiento específico para hipertensión arterial pulmonar antes de cualquier evaluación anatómica",
            "Indicar anticoagulación de por vida como sustituto del cierre"
        ],
        respuestaCorrecta: 1,
        explicacion: "La paciente tiene un cortocircuito izquierda-derecha significativo, dilatación de las cavidades derechas y PVR baja. El objetivo del cierre es eliminar la sobrecarga crónica de volumen. Antes del cierre deben descartarse hipertensión pulmonar avanzada, enfermedad vascular pulmonar irreversible, drenaje venoso pulmonar anómalo y otras alteraciones anatómicas relevantes. La modalidad de cierre —percutánea o quirúrgica— depende de anatomía, bordes, tamaño y lesiones asociadas.",
        perlaENARM: "En CIA del adulto, la pregunta no es solo '¿hay CIA?', sino '¿existe repercusión hemodinámica y es seguro cerrar el cortocircuito?'",
        gpc: {
            mexico: "GPC mexicana de cardiopatías congénitas aplicable a defectos septales.",
            internacional: "2025 ACC/AHA/HRS/ISACHD/SCAI ACHD Guideline; 2020 ESC ACHD Guideline."
        },
        bibliografia: "2025 ACC/AHA/HRS/ISACHD/SCAI ACHD Guideline; 2020 ESC ACHD Guideline; Braunwald's Heart Disease."
    },

    {
        id: "CARD-324",
        especialidad: "Cardiología",
        tema: "Cardiopatías congénitas del adulto",
        subtema: "Eisenmenger y cierre de cortocircuitos",
        dificultad: "Extrema",
        caso: "Varón de 36 años con antecedente de comunicación interventricular no corregida presenta cianosis progresiva, disnea y síncope de esfuerzo. Saturación basal 82%. Exploración: acropaquia, segundo ruido pulmonar intenso y soplo holosistólico previamente documentado que actualmente es menos intenso. Cateterismo: mPAP 67 mmHg, PAWP 8 mmHg y PVR 11 WU. Existe inversión bidireccional del cortocircuito con flujo derecha-izquierda.",
        pregunta: "¿Cuál es la conducta más importante respecto al defecto congénito?",
        opciones: [
            "Cerrar inmediatamente la comunicación interventricular para eliminar la hipoxemia",
            "Cerrar el defecto después de administrar diuréticos",
            "No realizar cierre convencional del defecto debido a enfermedad vascular pulmonar avanzada con fisiología de Eisenmenger",
            "Realizar cierre percutáneo independientemente de la PVR",
            "Realizar cierre únicamente durante un episodio de descompensación"
        ],
        respuestaCorrecta: 2,
        explicacion: "El paciente presenta fisiología de Eisenmenger: cortocircuito congénito de larga evolución, hipertensión pulmonar severa, resistencia vascular pulmonar marcadamente elevada e inversión del flujo. En este contexto, cerrar el defecto puede eliminar una vía de descarga del VD y precipitar deterioro hemodinámico catastrófico. El manejo debe realizarse en un centro especializado en cardiopatías congénitas e hipertensión pulmonar, con tratamiento dirigido a la fisiología y prevención de complicaciones.",
        perlaENARM: "Eisenmenger cambia completamente la lógica del cierre: una comunicación que inicialmente era patológica puede convertirse en una vía de descarga indispensable.",
        gpc: {
            mexico: "GPC mexicana aplicable a síndrome de Eisenmenger/cardiopatía congénita.",
            internacional: "2025 ACC/AHA/HRS/ISACHD/SCAI ACHD Guideline; 2020 ESC ACHD Guideline; ESC/ERS 2022 Pulmonary Hypertension."
        },
        bibliografia: "2025 ACC/AHA/HRS/ISACHD/SCAI ACHD Guideline; 2020 ESC ACHD Guideline; ESC/ERS 2022 Pulmonary Hypertension."
    },

    {
        id: "CARD-325",
        especialidad: "Cardiología",
        tema: "Cardiopatías congénitas del adulto",
        subtema: "Anomalía de Ebstein",
        dificultad: "Extrema",
        caso: "Mujer de 28 años con anomalía de Ebstein diagnosticada desde la infancia presenta palpitaciones, intolerancia al ejercicio y episodios de taquicardia regular de inicio súbito. Ecocardiograma: desplazamiento apical marcado de las valvas tricuspídeas, aurícula derecha gigante, VD funcional reducido y regurgitación tricuspídea severa. ECG en ritmo sinusal: onda delta y PR corto. Durante la hospitalización presenta taquicardia regular de QRS estrecho a 220 lpm.",
        pregunta: "¿Cuál es la asociación electrofisiológica más relevante en esta paciente?",
        opciones: [
            "Bloqueo AV completo congénito",
            "Vía accesoria con síndrome de preexcitación, particularmente asociada a Ebstein",
            "Síndrome de Brugada",
            "Taquicardia ventricular catecolaminérgica",
            "Bloqueo sinoauricular aislado"
        ],
        respuestaCorrecta: 1,
        explicacion: "La anomalía de Ebstein se asocia con una mayor prevalencia de vías accesorias y síndrome de Wolff-Parkinson-White. La combinación de PR corto, onda delta y taquicardia regular de QRS estrecho es altamente sugestiva de una taquicardia por reentrada auriculoventricular. El manejo debe integrar la anatomía de Ebstein, la severidad de la insuficiencia tricuspídea, función ventricular y evaluación electrofisiológica.",
        perlaENARM: "Ebstein + WPW es una asociación clásica de cardiopatía congénita del adulto. No olvides buscar vías accesorias ante palpitaciones.",
        gpc: {
            mexico: "GPC mexicana de cardiopatías congénitas aplicable a anomalías congénitas complejas.",
            internacional: "2025 ACC/AHA/HRS/ISACHD/SCAI ACHD Guideline; 2020 ESC ACHD Guideline."
        },
        bibliografia: "2025 ACC/AHA/HRS/ISACHD/SCAI ACHD Guideline; 2020 ESC ACHD Guideline; Braunwald's Heart Disease."
    },

    {
        id: "CARD-326",
        especialidad: "Cardiología",
        tema: "Cardiopatías congénitas del adulto",
        subtema: "Fontan",
        dificultad: "Extrema",
        caso: "Varón de 34 años con circulación de Fontan por ventrículo único presenta fatiga progresiva, edema periférico y disminución de la tolerancia al ejercicio. Ecocardiograma: función sistólica ventricular relativamente conservada. Saturación 91%. Laboratorio: albúmina 2.8 g/dL. Presenta diarrea crónica y pérdida de peso. No hay infección activa. La evaluación hemodinámica muestra presión venosa central elevada y flujo pulmonar limitado.",
        pregunta: "¿Cuál es una complicación característica que debe sospecharse?",
        opciones: [
            "Síndrome de pérdida de proteínas asociado a Fontan",
            "Síndrome nefrótico primario obligatorio",
            "Miocardiopatía hipertrófica obstructiva",
            "Endocarditis como diagnóstico más probable",
            "Estenosis aórtica degenerativa"
        ],
        respuestaCorrecta: 0,
        explicacion: "La enteropatía perdedora de proteínas es una complicación reconocida de la circulación de Fontan y se manifiesta con hipoalbuminemia, edema, diarrea y pérdida de proteínas. Su fisiopatología es compleja e incluye elevación crónica de la presión venosa sistémica, alteración linfática y disfunción intestinal. El paciente Fontan requiere vigilancia multidisciplinaria por insuficiencia cardiaca, arritmias, enfermedad hepática asociada a Fontan, trombosis, alteraciones linfáticas y otras complicaciones multisistémicas.",
        perlaENARM: "Fontan no es simplemente 'un corazón con una cirugía previa': es una circulación hemodinámicamente particular con complicaciones cardíacas y extracardíacas.",
        gpc: {
            mexico: "GPC mexicana de cardiopatías congénitas aplicable a cardiopatías complejas.",
            internacional: "2025 ACC/AHA/HRS/ISACHD/SCAI ACHD Guideline; 2020 ESC ACHD Guideline."
        },
        bibliografia: "2025 ACC/AHA/HRS/ISACHD/SCAI ACHD Guideline; 2020 ESC ACHD Guideline; Braunwald's Heart Disease."
    },

    {
        id: "CARD-327",
        especialidad: "Cardiología",
        tema: "Cardiopatías congénitas del adulto",
        subtema: "Transposición de grandes arterias corregida y ventrículo derecho sistémico",
        dificultad: "Extrema",
        caso: "Varón de 40 años con antecedente de transposición de grandes arterias corregida mediante switch auricular en la infancia consulta por disnea y palpitaciones. Ecocardiograma: VD sistémico dilatado, FEVD 35%, insuficiencia tricuspídea moderada-severa y aurícula derecha dilatada. ECG: bloqueo AV de primer grado. Holter: episodios de taquicardia auricular.",
        pregunta: "¿Cuál es el principal mecanismo de deterioro ventricular que debe reconocerse?",
        opciones: [
            "El VD fue diseñado para manejar la circulación pulmonar y puede fallar cuando funciona crónicamente como ventrículo sistémico",
            "La presencia de cualquier taquicardia auricular implica exclusivamente enfermedad del nodo AV",
            "El VD sistémico nunca desarrolla insuficiencia ventricular",
            "La insuficiencia tricuspídea no tiene relevancia pronóstica",
            "El problema es necesariamente una cardiomiopatía infiltrativa"
        ],
        respuestaCorrecta: 0,
        explicacion: "Después del switch auricular, el VD continúa funcionando como ventrículo sistémico. A largo plazo puede aparecer remodelado, disfunción sistólica, insuficiencia tricuspídea sistémica y arritmias auriculares o trastornos de conducción. El manejo requiere seguimiento especializado de ACHD y evaluación integral del VD sistémico, válvula tricúspide, ritmo, capacidad funcional y eventual insuficiencia cardiaca.",
        perlaENARM: "En cardiopatías con VD sistémico, la anatomía ventricular importa: el VD sometido a poscarga sistémica durante décadas puede desarrollar insuficiencia.",
        gpc: {
            mexico: "GPC mexicana de cardiopatías congénitas aplicable a cardiopatía congénita compleja.",
            internacional: "2025 ACC/AHA/HRS/ISACHD/SCAI ACHD Guideline; 2020 ESC ACHD Guideline."
        },
        bibliografia: "2025 ACC/AHA/HRS/ISACHD/SCAI ACHD Guideline; 2020 ESC ACHD Guideline; Braunwald's Heart Disease."
    },

    {
        id: "CARD-328",
        especialidad: "Cardiología",
        tema: "Cardiopatías congénitas del adulto",
        subtema: "Embarazo y cardiopatía congénita",
        dificultad: "Extrema",
        caso: "Mujer de 27 años con antecedente de Tetralogía de Fallot reparada desea embarazo. Está asintomática en reposo. RM cardiaca: FEVD 48%, insuficiencia pulmonar moderada, dilatación moderada del VD y capacidad funcional reducida en prueba cardiopulmonar. No presenta arritmias documentadas. Consulta para decidir si puede embarazarse.",
        pregunta: "¿Cuál es el abordaje más apropiado?",
        opciones: [
            "Prohibir el embarazo automáticamente por cualquier antecedente de cardiopatía congénita",
            "Permitir embarazo sin evaluación adicional porque la paciente está asintomática",
            "Realizar asesoramiento preconcepcional multidisciplinario con estratificación materna, evaluación ventricular, riesgo arrítmico, anatomía residual y planificación obstétrica",
            "Indicar anticoagulación durante todo el embarazo antes de valorar el riesgo",
            "Realizar cesárea electiva independientemente de la situación hemodinámica"
        ],
        respuestaCorrecta: 2,
        explicacion: "La cardiopatía congénita no constituye por sí misma una contraindicación universal para el embarazo. El riesgo depende de la anatomía, función ventricular, presencia de hipertensión pulmonar, arritmias, obstrucciones, cianosis y otros factores. La guía 2025 enfatiza el asesoramiento preconcepcional con participación del equipo especializado en ACHD y planificación individualizada del embarazo y parto.",
        perlaENARM: "Antes del embarazo en ACHD: definir anatomía residual, función ventricular, arritmias, hipertensión pulmonar y riesgo materno-fetal; no basta con preguntar si la paciente 'se siente bien'.",
        gpc: {
            mexico: "GPC mexicanas aplicables a embarazo y cardiopatía congénita cuando corresponda.",
            internacional: "2025 ACC/AHA/HRS/ISACHD/SCAI ACHD Guideline; 2020 ESC ACHD Guideline."
        },
        bibliografia: "2025 ACC/AHA/HRS/ISACHD/SCAI ACHD Guideline; 2020 ESC ACHD Guideline."
    },

    {
        id: "CARD-329",
        especialidad: "Cardiología",
        tema: "Cardiopatías congénitas del adulto",
        subtema: "Arritmias y Tetralogía de Fallot",
        dificultad: "Extrema",
        caso: "Varón de 37 años con Tetralogía de Fallot reparada presenta síncope durante ejercicio. ECG basal: QRS de 192 ms con bloqueo completo de rama derecha. RM cardiaca: dilatación importante del VD, insuficiencia pulmonar severa y fibrosis extensa en el tracto de salida. Holter documenta TV monomórfica sostenida de 230 lpm con morfología compatible con circuito de reentrada alrededor de cicatrices quirúrgicas. La TV termina espontáneamente antes de llegar al hospital.",
        pregunta: "¿Cuál es la interpretación más importante respecto al riesgo?",
        opciones: [
            "El episodio no tiene importancia porque terminó espontáneamente",
            "La presencia de TV sostenida en Fallot reparado identifica un sustrato de alto riesgo y requiere evaluación especializada para estrategia de prevención de muerte súbita",
            "El QRS ancho excluye TV porque existe bloqueo de rama derecha",
            "La única intervención indicada es aumentar la dosis de diurético",
            "El paciente debe recibir únicamente anticoagulación"
        ],
        respuestaCorrecta: 1,
        explicacion: "La TV sostenida en un paciente con Fallot reparado, especialmente acompañada de dilatación/disfunción del VD, fibrosis y QRS muy prolongado, es un marcador mayor de riesgo arrítmico. La fisiopatología frecuentemente involucra circuitos de reentrada alrededor de cicatrices quirúrgicas. La evaluación debe realizarse en un centro especializado, integrando reparación de lesiones residuales, estudio electrofisiológico/ablación cuando corresponda y valoración de indicación de desfibrilador implantable según el riesgo global.",
        perlaENARM: "Fallot reparado + TV sostenida = no es una 'arritmia incidental'. Busca cicatriz, dilatación/disfunción del VD, lesión pulmonar residual y riesgo de muerte súbita.",
        gpc: {
            mexico: "GPC mexicana aplicable a cardiopatías congénitas y arritmias.",
            internacional: "2025 ACC/AHA/HRS/ISACHD/SCAI ACHD Guideline; 2020 ESC ACHD Guideline; guías contemporáneas de arritmias ventriculares."
        },
        bibliografia: "2025 ACC/AHA/HRS/ISACHD/SCAI ACHD Guideline; 2020 ESC ACHD Guideline; Braunwald's Heart Disease."
    },

    {
        id: "CARD-330",
        especialidad: "Cardiología",
        tema: "Cardiopatías congénitas del adulto",
        subtema: "Caso integrativo: cardiopatía congénita, hipertensión pulmonar y cierre de shunt",
        dificultad: "Extrema",
        caso: "Mujer de 45 años con disnea progresiva presenta una comunicación interauricular tipo ostium secundum de 25 mm. Ecocardiograma: VD muy dilatado, insuficiencia tricuspídea moderada y presión pulmonar elevada. Saturación basal 93%. Cateterismo derecho: mPAP 42 mmHg, PAWP 9 mmHg, gasto cardiaco 4.5 L/min y PVR 5.8 WU. Qp/Qs es 1.3. La paciente fue enviada para cierre percutáneo inmediato del defecto, pero antes del procedimiento un especialista en ACHD solicita reevaluación multidisciplinaria.",
        pregunta: "¿Cuál es la razón principal para NO realizar un cierre automático de la CIA?",
        opciones: [
            "El tamaño de la CIA es menor de 30 mm y por eso nunca debe cerrarse",
            "La PVR está elevada y el Qp/Qs es solo modestamente aumentado, por lo que debe determinarse si existe enfermedad vascular pulmonar avanzada antes de eliminar el cortocircuito",
            "Todo adulto con CIA debe recibir anticoagulación antes del cierre",
            "La presencia de insuficiencia tricuspídea contraindica cualquier estudio hemodinámico",
            "La saturación de 93% demuestra necesariamente Eisenmenger"
        ],
        respuestaCorrecta: 1,
        explicacion: "Este es un escenario deliberadamente difícil: existe un defecto anatómico cerrable, pero la fisiología puede haber evolucionado hacia enfermedad vascular pulmonar significativa. La PVR de 5.8 WU y el Qp/Qs relativamente modesto obligan a evaluar cuidadosamente la relación entre el defecto y la hipertensión pulmonar antes de cerrar. En pacientes con hipertensión pulmonar asociada a cortocircuitos, el cierre indiscriminado puede ser perjudicial. La decisión requiere un equipo especializado en ACHD y hipertensión pulmonar, con evaluación hemodinámica completa y, cuando corresponda, estrategia individualizada respecto al tratamiento dirigido y posibilidad de cierre.",
        perlaENARM: "En una CIA con HP, el número decisivo no es solamente el tamaño del defecto: PVR, Qp/Qs, dirección del flujo, función ventricular y contexto clínico determinan si cerrar es seguro.",
        gpc: {
            mexico: "GPC mexicanas de cardiopatías congénitas e hipertensión pulmonar aplicables al caso.",
            internacional: "2025 ACC/AHA/HRS/ISACHD/SCAI ACHD Guideline; 2020 ESC ACHD Guideline; ESC/ERS 2022 Pulmonary Hypertension."
        },
        bibliografia: "2025 ACC/AHA/HRS/ISACHD/SCAI ACHD Guideline; 2020 ESC ACHD Guideline; ESC/ERS 2022 Pulmonary Hypertension; Braunwald's Heart Disease."
    },
        {
        id: "CARD-331",
        especialidad: "Cardiología",
        tema: "Cardio-oncología",
        subtema: "Cardiotoxicidad por antraciclinas",
        dificultad: "Extrema",
        caso: "Mujer de 54 años con linfoma difuso de células B grandes recibe tratamiento con doxorrubicina. Antes de iniciar quimioterapia presenta FEVI 63%, GLS -21%, troponina ultrasensible normal y NT-proBNP normal. Tiene hipertensión arterial bien controlada y diabetes mellitus tipo 2. Después de completar cuatro ciclos, la FEVI permanece en 57%, pero el GLS disminuye a -16.8%. La paciente se encuentra asintomática y los biomarcadores muestran elevación discreta de troponina respecto al basal.",
        pregunta: "¿Cuál es la interpretación más apropiada de estos hallazgos?",
        opciones: [
            "No existe ninguna alteración porque la FEVI continúa por encima de 50%",
            "El cambio del GLS y la elevación de biomarcadores pueden representar disfunción cardiaca relacionada con el tratamiento antes de una caída franca de la FEVI",
            "Debe suspenderse definitivamente toda quimioterapia independientemente del riesgo oncológico",
            "La disminución del GLS es diagnóstica de miocarditis por inmunoterapia",
            "La FEVI debe disminuir por debajo de 35% antes de iniciar cualquier tratamiento cardiovascular"
        ],
        respuestaCorrecta: 1,
        explicacion: "La cardiotoxicidad puede manifestarse inicialmente mediante alteraciones subclínicas de la función miocárdica. Una reducción relativa del GLS superior al 15% respecto al basal es un hallazgo relevante en la vigilancia de cardiotoxicidad, especialmente cuando se acompaña de cambios en biomarcadores. La FEVI puede permanecer preservada durante las primeras fases. El objetivo del seguimiento es identificar la lesión antes de que aparezca una disfunción ventricular clínicamente manifiesta. La decisión de continuar o modificar la terapia oncológica debe realizarse mediante coordinación cardio-oncológica, valorando el riesgo cardiovascular y la importancia del tratamiento antineoplásico.",
        perlaENARM: "En cardio-oncología, una FEVI normal no excluye cardiotoxicidad. El GLS puede detectar deterioro subclínico antes que la FEVI.",
        gpc: {
            mexico: "No se identificó una GPC mexicana específica de cardio-oncología en el catálogo cardiológico del IMSS; pueden existir GPC oncológicas específicas del tumor y del esquema utilizado.",
            internacional: "2022 ESC Guidelines on Cardio-Oncology; IC-OS consensus definitions."
        },
        bibliografia: "2022 ESC Guidelines on Cardio-Oncology; Braunwald's Heart Disease; International Cardio-Oncology Society consensus."
    },

    {
        id: "CARD-332",
        especialidad: "Cardiología",
        tema: "Cardio-oncología",
        subtema: "Trastuzumab y disfunción ventricular",
        dificultad: "Extrema",
        caso: "Mujer de 48 años con cáncer de mama HER2 positivo recibe trastuzumab después de tratamiento previo con antraciclina. Su FEVI basal era 62%. Después de tres meses presenta disnea de medianos esfuerzos. FEVI actual 43%, GLS disminuido y NT-proBNP elevado. No tiene dolor torácico ni datos de infección. Ecocardiograma: hipocinesia global sin alteraciones segmentarias.",
        pregunta: "¿Cuál es el mecanismo y la conducta que mejor corresponden al caso?",
        opciones: [
            "Es una cardiomiopatía isquémica obligatoria y debe realizarse angioplastia coronaria inmediatamente",
            "Es compatible con disfunción cardiaca relacionada con terapia anti-HER2; requiere valoración cardio-oncológica e inicio de tratamiento cardiovascular mientras se decide la estrategia oncológica",
            "Debe continuarse trastuzumab sin ninguna modificación porque la toxicidad es irreversible",
            "Es una pericarditis aguda por trastuzumab",
            "La caída de FEVI no tiene importancia mientras la paciente permanezca sin edema"
        ],
        respuestaCorrecta: 1,
        explicacion: "Trastuzumab puede producir disfunción ventricular izquierda, particularmente después de exposición a antraciclinas. A diferencia de la cardiotoxicidad clásica dependiente de dosis acumulada de antraciclinas, la disfunción asociada a HER2 puede aparecer durante el tratamiento y puede ser reversible si se identifica y maneja oportunamente. La paciente tiene una caída significativa de FEVI, síntomas y biomarcadores elevados, por lo que requiere evaluación especializada e inicio de tratamiento basado en guías para insuficiencia cardiaca con FEVI reducida o ligeramente reducida según el fenotipo. La decisión de interrupción temporal o continuación del tratamiento oncológico debe individualizarse con oncología.",
        perlaENARM: "Antraciclina previa + trastuzumab = riesgo aumentado de disfunción ventricular. La toxicidad anti-HER2 puede ser potencialmente reversible.",
        gpc: {
            mexico: "No se identificó GPC mexicana específica de cardiotoxicidad por trastuzumab en el catálogo IMSS consultado.",
            internacional: "2022 ESC Guidelines on Cardio-Oncology."
        },
        bibliografia: "2022 ESC Guidelines on Cardio-Oncology; 2026 ACC Expert Consensus on HFpEF/HF management where applicable; Braunwald's Heart Disease."
    },

    {
        id: "CARD-333",
        especialidad: "Cardiología",
        tema: "Cardio-oncología",
        subtema: "Inhibidores de puntos de control inmunitario y miocarditis",
        dificultad: "Extrema",
        caso: "Varón de 67 años con melanoma metastásico inició nivolumab más ipilimumab hace cuatro semanas. Consulta por fatiga, disnea y episodios de mareo. Troponina I marcadamente elevada. ECG: PR de 280 ms y bloqueo de rama derecha nuevo. FEVI 52%. CPK elevada y refiere debilidad muscular proximal. No presenta fiebre ni dolor torácico. La coronariografía no muestra lesiones obstructivas significativas.",
        pregunta: "¿Cuál es el diagnóstico que debe considerarse prioritariamente?",
        opciones: [
            "Miocarditis asociada a inhibidores de puntos de control inmunitario con posible afectación del sistema de conducción y síndrome de solapamiento neuromuscular",
            "Infarto tipo 1 por ruptura de placa coronaria",
            "Pericarditis viral aislada",
            "Cardiomiopatía de Takotsubo como diagnóstico definitivo",
            "Endocarditis infecciosa"
        ],
        respuestaCorrecta: 0,
        explicacion: "La combinación de exposición reciente a inhibidores de puntos de control inmunitario, troponina marcadamente elevada, trastorno nuevo de conducción y síntomas musculares debe hacer sospechar miocarditis relacionada con ICI. Esta entidad es infrecuente pero potencialmente fulminante. La presencia de bloqueo AV, arritmias, disfunción ventricular o elevación importante de biomarcadores aumenta la gravedad. Puede coexistir miositis y miastenia gravis, por lo que debe buscarse debilidad, disfagia, ptosis, diplopía y alteraciones de enzimas musculares. El manejo requiere suspensión temporal del ICI y evaluación urgente; los casos sospechosos de miocarditis clínicamente significativa requieren tratamiento inmunosupresor precoz según protocolos especializados.",
        perlaENARM: "ICI + troponina elevada + nuevo trastorno de conducción = pensar en miocarditis por ICI aunque la FEVI sea casi normal.",
        gpc: {
            mexico: "No se identificó GPC mexicana específica para miocarditis por inhibidores de puntos de control inmunitario.",
            internacional: "2022 ESC Guidelines on Cardio-Oncology; IC-OS consensus."
        },
        bibliografia: "2022 ESC Guidelines on Cardio-Oncology; IC-OS consensus on immune checkpoint inhibitor myocarditis; Braunwald's Heart Disease."
    },

    {
        id: "CARD-334",
        especialidad: "Cardiología",
        tema: "Cardio-oncología",
        subtema: "Hipertensión inducida por VEGF-TKI",
        dificultad: "Muy alta",
        caso: "Mujer de 63 años con carcinoma renal metastásico inicia un inhibidor de tirosina cinasa dirigido contra VEGF. Antes del tratamiento su TA era 128/76 mmHg. Tres semanas después presenta TA persistente de 188/108 mmHg en domicilio y cefalea. No tiene déficit neurológico, dolor torácico ni edema pulmonar. Creatinina permanece estable y no hay datos de disección aórtica.",
        pregunta: "¿Cuál es el principio de manejo cardiovascular más apropiado?",
        opciones: [
            "La hipertensión es esperable y nunca debe tratarse durante un VEGF-TKI",
            "Debe confirmarse y tratarse activamente la hipertensión, con coordinación estrecha con oncología debido al riesgo cardiovascular del tratamiento",
            "Debe suspenderse definitivamente el tratamiento oncológico en todos los casos",
            "La hipertensión demuestra feocromocitoma hasta demostrar lo contrario",
            "Debe administrarse fibrinólisis por el riesgo trombótico"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los inhibidores de VEGF pueden provocar hipertensión de novo o empeorar una hipertensión preexistente. La monitorización de presión arterial desde el inicio y durante el tratamiento es fundamental. Una elevación marcada y persistente requiere tratamiento antihipertensivo y evaluación de daño de órgano blanco. El manejo oncológico debe individualizarse: no toda hipertensión obliga a suspender el tratamiento, pero una hipertensión severa no controlada puede requerir modificación temporal de la terapia según el fármaco, gravedad y contexto clínico.",
        perlaENARM: "VEGF-TKI → hipertensión es una toxicidad cardiovascular clásica. La presión arterial debe vigilarse desde el inicio del tratamiento.",
        gpc: {
            mexico: "No se identificó GPC mexicana específica de hipertensión inducida por VEGF-TKI; utilizar GPC mexicana de hipertensión y protocolos oncológicos correspondientes.",
            internacional: "2022 ESC Guidelines on Cardio-Oncology."
        },
        bibliografia: "2022 ESC Guidelines on Cardio-Oncology; Braunwald's Heart Disease."
    },

    {
        id: "CARD-335",
        especialidad: "Cardiología",
        tema: "Cardio-oncología",
        subtema: "Radioterapia y enfermedad cardiovascular",
        dificultad: "Extrema",
        caso: "Varón de 58 años recibió radioterapia mediastínica por linfoma de Hodgkin a los 25 años. Tres décadas después presenta disnea de esfuerzo, síncope al ejercicio y un soplo sistólico que aumenta progresivamente. Ecocardiograma: válvula aórtica engrosada con estenosis severa y calcificación de la raíz aórtica. Las arterias coronarias muestran enfermedad aterosclerótica moderada. También presenta calcificación pericárdica focal.",
        pregunta: "¿Cuál es la explicación más completa del fenotipo cardiovascular?",
        opciones: [
            "La radioterapia mediastínica solo puede causar pericarditis aguda y no produce enfermedad tardía",
            "El paciente puede presentar enfermedad cardiovascular tardía relacionada con radiación, incluyendo valvulopatía, enfermedad coronaria y enfermedad pericárdica",
            "La estenosis aórtica solo puede ser degenerativa por edad",
            "La enfermedad coronaria descarta cualquier relación con radioterapia",
            "La radioterapia protege contra la aterosclerosis"
        ],
        respuestaCorrecta: 1,
        explicacion: "La radioterapia torácica puede producir enfermedad cardiovascular tardía años o décadas después de la exposición. El espectro incluye enfermedad coronaria acelerada, valvulopatía, enfermedad pericárdica, disfunción miocárdica, enfermedad de grandes vasos y alteraciones estructurales. La combinación de múltiples lesiones cardiovasculares en un sobreviviente de radioterapia mediastínica debe hacer sospechar toxicidad tardía relacionada con radiación.",
        perlaENARM: "Radioterapia mediastínica puede producir enfermedad cardiovascular décadas después. En un sobreviviente joven con valvulopatía y enfermedad coronaria, piensa en radiación.",
        gpc: {
            mexico: "No se identificó una GPC mexicana específica de enfermedad cardiovascular tardía por radioterapia.",
            internacional: "2022 ESC Guidelines on Cardio-Oncology."
        },
        bibliografia: "2022 ESC Guidelines on Cardio-Oncology; Braunwald's Heart Disease."
    },

    {
        id: "CARD-336",
        especialidad: "Cardiología",
        tema: "Cardio-oncología",
        subtema: "Antraciclinas y prevención de cardiotoxicidad",
        dificultad: "Extrema",
        caso: "Mujer de 39 años con sarcoma de partes blandas requiere tratamiento con dosis acumuladas elevadas de doxorrubicina. Tiene antecedentes de hipertensión y FEVI basal de 55%, GLS limítrofe y NT-proBNP discretamente elevado. El oncólogo pregunta cuál debe ser la estrategia cardiovascular antes de iniciar tratamiento.",
        pregunta: "¿Cuál es el enfoque más apropiado?",
        opciones: [
            "No realizar ninguna evaluación cardiovascular porque el cáncer tiene prioridad",
            "Estratificar el riesgo cardiovascular basal, optimizar factores modificables y establecer vigilancia con biomarcadores e imagen durante el tratamiento",
            "Esperar a que aparezca insuficiencia cardiaca para iniciar tratamiento",
            "Realizar cateterismo cardiaco invasivo de rutina",
            "Indicar desfibrilador implantable profiláctico"
        ],
        respuestaCorrecta: 1,
        explicacion: "La prevención comienza antes de la exposición al tratamiento cardiotóxico. La paciente presenta múltiples factores que incrementan el riesgo de toxicidad: dosis potencialmente elevada de antraciclina, hipertensión, FEVI no óptima y biomarcadores/GLS preocupantes. La estrategia incluye evaluación cardiovascular basal, control estricto de factores de riesgo y planificación de vigilancia con ecocardiografía y biomarcadores. En pacientes seleccionados de alto riesgo pueden considerarse estrategias cardioprotectoras farmacológicas y medidas relacionadas con el esquema oncológico.",
        perlaENARM: "La cardio-oncología empieza antes de la primera dosis de quimioterapia: riesgo basal → prevención → vigilancia → intervención temprana.",
        gpc: {
            mexico: "No se identificó GPC mexicana específica de prevención de cardiotoxicidad por antraciclinas; pueden utilizarse GPC de la neoplasia y GPC mexicanas cardiovasculares para control de factores de riesgo.",
            internacional: "2022 ESC Guidelines on Cardio-Oncology."
        },
        bibliografia: "2022 ESC Guidelines on Cardio-Oncology; HFA-ICOS baseline cardiovascular toxicity risk stratification; Braunwald's Heart Disease."
    },

    {
        id: "CARD-337",
        especialidad: "Cardiología",
        tema: "Cardio-oncología",
        subtema: "Disfunción ventricular relacionada con cáncer: continuidad del tratamiento",
        dificultad: "Extrema",
        caso: "Varón de 61 años con leucemia inicia tratamiento antineoplásico potencialmente cardiotóxico. Después de varios ciclos desarrolla FEVI de 38% y disnea NYHA II. No presenta hipotensión, congestión grave ni arritmias inestables. El tratamiento oncológico es considerado esencial para controlar una enfermedad potencialmente mortal. El equipo de oncología solicita valoración cardiológica.",
        pregunta: "¿Cuál es el principio terapéutico más apropiado?",
        opciones: [
            "Suspender definitivamente cualquier terapia oncológica cardiotóxica independientemente de la gravedad del cáncer",
            "Iniciar tratamiento de insuficiencia cardiaca basado en guías y realizar una decisión multidisciplinaria sobre continuar, pausar o modificar el tratamiento oncológico",
            "No tratar la insuficiencia cardiaca hasta terminar la quimioterapia",
            "Colocar un desfibrilador inmediatamente antes de cualquier tratamiento farmacológico",
            "Administrar únicamente diurético y evitar inhibidores neurohormonales"
        ],
        respuestaCorrecta: 1,
        explicacion: "La decisión en cardio-oncología no consiste simplemente en suspender el tratamiento oncológico. Debe equilibrarse el riesgo cardiovascular con el beneficio oncológico. En pacientes con disfunción ventricular se recomienda iniciar tratamiento cardiovascular apropiado según el fenotipo y gravedad, mientras el equipo cardio-oncológico y oncología determina si la terapia antineoplásica puede continuarse, pausarse o modificarse. La estrategia debe individualizarse y considerar la reversibilidad potencial de la toxicidad.",
        perlaENARM: "Cardiotoxicidad no equivale automáticamente a abandonar el tratamiento contra el cáncer. La decisión es riesgo cardiovascular vs beneficio oncológico.",
        gpc: {
            mexico: "No se identificó GPC mexicana específica para la decisión cardio-oncológica de continuidad de tratamiento.",
            internacional: "2022 ESC Guidelines on Cardio-Oncology."
        },
        bibliografia: "2022 ESC Guidelines on Cardio-Oncology; Braunwald's Heart Disease; contemporary heart failure guidelines."
    },

    {
        id: "CARD-338",
        especialidad: "Cardiología",
        tema: "Cardio-oncología",
        subtema: "Trombosis y cáncer",
        dificultad: "Extrema",
        caso: "Mujer de 69 años con adenocarcinoma pancreático metastásico presenta disnea súbita. Angio-TC: TEP segmentario bilateral. No tiene sangrado activo, pero presenta trombocitopenia moderada relacionada con quimioterapia y metástasis hepáticas. Plaquetas: 68,000/µL. Creatinina normal. Se requiere seleccionar tratamiento anticoagulante.",
        pregunta: "¿Cuál es el principio que debe guiar la decisión?",
        opciones: [
            "Todo paciente con cáncer debe recibir warfarina independientemente del riesgo hemorrágico",
            "Debe individualizarse el anticoagulante considerando cáncer activo, localización tumoral, plaquetas, riesgo de sangrado, interacciones y función renal",
            "La trombocitopenia contraindica siempre cualquier anticoagulación",
            "La aspirina es equivalente a anticoagulación para tratar TEP",
            "La anticoagulación nunca debe utilizarse en pacientes con metástasis hepáticas"
        ],
        respuestaCorrecta: 1,
        explicacion: "El cáncer activo aumenta significativamente el riesgo trombótico, pero también puede aumentar el riesgo hemorrágico. La selección del anticoagulante debe considerar tipo y localización del cáncer, trombocitopenia, función renal, interacciones con tratamiento oncológico y riesgo de sangrado. En trombocitopenia significativa la estrategia debe individualizarse y puede requerir ajustes según el recuento plaquetario y gravedad del evento trombótico. Los anticoagulantes orales directos tienen ventajas en determinados escenarios, pero no son universalmente preferibles en todos los tumores o situaciones de sangrado.",
        perlaENARM: "En cáncer + TEP, no basta con identificar el trombo: hay que balancear trombosis vs hemorragia y revisar interacciones farmacológicas.",
        gpc: {
            mexico: "GPC mexicanas oncológicas y de tromboembolia aplicables según neoplasia y contexto clínico.",
            internacional: "2022 ESC Cardio-Oncology Guideline y recomendaciones contemporáneas de tromboembolia asociada a cáncer."
        },
        bibliografia: "2022 ESC Guidelines on Cardio-Oncology; Braunwald's Heart Disease; contemporary cancer-associated thrombosis guidance."
    },

    {
        id: "CARD-339",
        especialidad: "Cardiología",
        tema: "Cardio-oncología",
        subtema: "Sobreviviente de cáncer y seguimiento cardiovascular",
        dificultad: "Extrema",
        caso: "Mujer de 46 años fue tratada por cáncer de mama a los 31 años con antraciclina y trastuzumab. Recibió además radioterapia torácica. Actualmente está asintomática, realiza ejercicio y presenta FEVI 60%. Consulta porque nunca ha tenido seguimiento cardiológico desde que terminó el tratamiento hace 14 años. Tiene hipertensión recientemente diagnosticada y LDL de 156 mg/dL.",
        pregunta: "¿Cuál es el enfoque más apropiado?",
        opciones: [
            "No requiere seguimiento porque han pasado más de 10 años y la FEVI es normal",
            "Debe realizarse una evaluación cardiovascular tardía basada en su exposición previa y factores de riesgo, con estrategia de seguimiento individualizada",
            "Solo necesita una radiografía de tórax",
            "La hipertensión no tiene importancia porque es posterior a la quimioterapia",
            "La ausencia de síntomas excluye toxicidad tardía"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los sobrevivientes de cáncer pueden desarrollar toxicidad cardiovascular tardía años después de completar el tratamiento. El riesgo depende de la exposición acumulada, radioterapia, factores cardiovasculares y alteraciones encontradas durante o después del tratamiento. En esta paciente existen múltiples exposiciones relevantes y factores de riesgo actuales. La evaluación debe incluir historia terapéutica, examen cardiovascular, factores de riesgo y estudios dirigidos según el riesgo, incluyendo imagen cardiaca y biomarcadores cuando estén indicados.",
        perlaENARM: "El riesgo cardio-oncológico no termina cuando termina la quimioterapia. Puede persistir durante décadas.",
        gpc: {
            mexico: "No se identificó GPC mexicana específica para vigilancia cardiovascular de sobrevivientes de cáncer.",
            internacional: "2022 ESC Guidelines on Cardio-Oncology."
        },
        bibliografia: "2022 ESC Guidelines on Cardio-Oncology; Braunwald's Heart Disease."
    },

    {
        id: "CARD-340",
        especialidad: "Cardiología",
        tema: "Cardio-oncología",
        subtema: "Caso integrativo de toxicidad cardiovascular",
        dificultad: "Extrema",
        caso: "Varón de 72 años con carcinoma renal metastásico presenta hipertensión arterial severa y posteriormente disnea. Inició terapia combinada con un inhibidor de VEGF y un inhibidor de punto de control inmunitario. Antes del tratamiento tenía FEVI 64%, GLS -20%, NT-proBNP normal y TA 132/78 mmHg. Después de ocho semanas presenta TA 194/112 mmHg, troponina elevada y FEVI 45% con GLS -14%. ECG muestra extrasístoles ventriculares frecuentes. No hay lesiones coronarias obstructivas. CPK está elevada y presenta debilidad muscular proximal.",
        pregunta: "¿Cuál es la interpretación más completa?",
        opciones: [
            "Una única cardiomiopatía isquémica explica obligatoriamente todos los hallazgos",
            "Puede existir toxicidad cardiovascular multifactorial relacionada con el tratamiento, incluyendo hipertensión por VEGF, disfunción ventricular y posible miocarditis/miositis relacionada con ICI",
            "Los hallazgos son normales durante inmunoterapia",
            "La elevación de troponina demuestra exclusivamente síndrome coronario agudo tipo 1",
            "La FEVI de 45% descarta miocarditis"
        ],
        respuestaCorrecta: 1,
        explicacion: "Este es un escenario de alta complejidad cardio-oncológica. El VEGF-TKI explica de forma plausible la hipertensión severa, mientras que la combinación de ICI, elevación de troponina, caída de FEVI/GLS, extrasístoles y debilidad muscular obliga a considerar miocarditis asociada a ICI con posible síndrome de solapamiento miocarditis-miositis. La ausencia de enfermedad coronaria obstructiva no elimina el diagnóstico. Se requiere evaluación urgente y multidisciplinaria, incluyendo ECG seriados, troponina, biomarcadores, ecocardiografía, consideración de CMR y evaluación de afectación muscular; la sospecha de miocarditis por ICI no debe retrasar el tratamiento especializado cuando la probabilidad clínica es alta.",
        perlaENARM: "En pacientes oncológicos pueden coexistir varias toxicidades simultáneamente. Identifica el fármaco responsable de cada fenotipo en lugar de buscar una única explicación.",
        gpc: {
            mexico: "No se identificó GPC mexicana específica de cardio-oncología; utilizar GPC mexicanas correspondientes a hipertensión, insuficiencia cardiaca y la neoplasia tratada.",
            internacional: "2022 ESC Guidelines on Cardio-Oncology; IC-OS consensus statements."
        },
        bibliografia: "2022 ESC Guidelines on Cardio-Oncology; IC-OS consensus; Braunwald's Heart Disease."
    },
        {
        id: "CARD-341",
        especialidad: "Cardiología",
        tema: "Miocarditis",
        subtema: "Miocarditis aguda y resonancia cardiaca",
        dificultad: "Extrema",
        caso: "Varón de 27 años, previamente sano, consulta por dolor torácico de 36 horas de evolución. Cinco días antes presentó un cuadro viral con fiebre de hasta 38.5 °C, mialgias y odinofagia que cedió espontáneamente. El dolor comenzó posteriormente, es retroesternal, aumenta con la inspiración profunda y disminuye parcialmente al sentarse e inclinarse hacia adelante. En urgencias presenta TA 118/72 mmHg, FC 104 lpm, SatO2 98% y temperatura 37.4 °C. ECG: elevación difusa del ST de concavidad superior con depresión del PR en múltiples derivaciones. Troponina I ultrasensible 1,850 ng/L, previamente desconocida. Ecocardiograma: FEVI 53%, sin alteraciones regionales importantes y pequeño derrame pericárdico. Coronariografía sin enfermedad coronaria obstructiva. La resonancia cardiaca demuestra edema miocárdico y realce tardío subepicárdico/mesomiocárdico predominante en segmentos inferolaterales, sin distribución territorial coronaria.",
        pregunta: "¿Cuál es el diagnóstico que mejor integra la presentación clínica, ECG, biomarcadores, ecocardiograma y resonancia?",
        opciones: [
            "Síndrome coronario agudo por ruptura de placa ateroesclerótica",
            "Pericarditis aguda aislada sin afectación miocárdica",
            "Síndrome inflamatorio miopericárdico compatible con miopericarditis aguda",
            "Miocardiopatía dilatada idiopática",
            "Takotsubo clásico"
        ],
        respuestaCorrecta: 2,
        explicacion: "El cuadro integra inflamación pericárdica —dolor pleurítico y posicional, elevación difusa del ST y depresión del PR— con lesión miocárdica demostrada por elevación de troponina y hallazgos de CMR compatibles con inflamación miocárdica. La distribución no isquémica del realce tardío y el edema apoyan fuertemente un proceso inflamatorio. La nueva ESC 2025 utiliza el concepto paraguas de síndrome inflamatorio miopericárdico (IMPS) para reconocer el espectro clínico antes de establecer el fenotipo específico. En este paciente, al existir elevación de biomarcadores de lesión miocárdica sin una disfunción ventricular importante, el término clínico de miopericarditis es especialmente apropiado. La coronariografía negativa no diagnostica por sí sola miocarditis, pero excluye una causa coronaria importante en este contexto.",
        perlaENARM: "Dolor pericárdico + cambios difusos de ST/PR + troponina elevada + CMR con patrón no isquémico = piensa en miopericarditis, no en IAM automáticamente.",
        gpc: {
            mexico: "IMSS-367-11, Diagnóstico y tratamiento de miocarditis aguda; IMSS-463-11, Diagnóstico y tratamiento de pericarditis en el adulto.",
            internacional: "2025 ESC Guidelines for the Management of Myocarditis and Pericarditis."
        },
        bibliografia: "2025 ESC Guidelines for Myocarditis and Pericarditis; Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },

    {
        id: "CARD-342",
        especialidad: "Cardiología",
        tema: "Miocarditis",
        subtema: "Miocarditis fulminante",
        dificultad: "Extrema",
        caso: "Mujer de 34 años, previamente sana, presenta fiebre, mialgias y diarrea durante cuatro días. Al sexto día desarrolla disnea rápidamente progresiva, ortopnea y palpitaciones. Ingresa con TA 82/54 mmHg, FC 128 lpm, extremidades frías, oliguria y alteración del estado mental. ECG: taquicardia sinusal, bloqueo AV de segundo grado avanzado y extrasístoles ventriculares frecuentes. Troponina I 18,000 ng/L, NT-proBNP marcadamente elevado y lactato 5.4 mmol/L. Ecocardiograma: FEVI 20%, hipocinesia global y VD con función deprimida. Coronariografía sin enfermedad obstructiva. La resonancia cardiaca no puede realizarse inicialmente por inestabilidad. A pesar de vasopresor e inotrópico persiste hipoperfusión.",
        pregunta: "¿Cuál es la clasificación y estrategia inicial que mejor corresponden al cuadro?",
        opciones: [
            "Miocarditis leve ambulatoria porque la etiología probablemente es viral",
            "Miocarditis fulminante con insuficiencia cardiaca y choque, que requiere manejo intensivo y consideración temprana de soporte circulatorio avanzado",
            "Pericarditis aguda aislada tratable únicamente con AINE",
            "Takotsubo estable sin necesidad de vigilancia intensiva",
            "Síndrome coronario crónico"
        ],
        respuestaCorrecta: 1,
        explicacion: "La paciente presenta una forma fulminante de miocarditis: deterioro hemodinámico grave, disfunción ventricular marcada, hipoperfusión, arritmias y trastorno avanzado de conducción. El tratamiento inicial es el soporte de la insuficiencia cardiaca y del choque en una unidad especializada, con evaluación temprana para soporte circulatorio mecánico si no responde al tratamiento convencional. En casos de alto riesgo, la biopsia endomiocárdica puede ser considerada cuando el resultado tenga implicaciones terapéuticas, particularmente ante sospecha de etiologías específicas susceptibles de tratamiento dirigido. La ausencia de CMR inicial por inestabilidad no debe retrasar el soporte vital.",
        perlaENARM: "En miocarditis fulminante, primero estabiliza al paciente. La CMR es importante, pero no debe retrasar soporte circulatorio ni las decisiones de una situación crítica.",
        gpc: {
            mexico: "IMSS-367-11, Diagnóstico y tratamiento de miocarditis aguda.",
            internacional: "2025 ESC Guidelines for the Management of Myocarditis and Pericarditis."
        },
        bibliografia: "2025 ESC Guidelines for Myocarditis and Pericarditis; Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },

    {
        id: "CARD-343",
        especialidad: "Cardiología",
        tema: "Miocarditis",
        subtema: "Miocarditis de células gigantes",
        dificultad: "Extrema",
        caso: "Varón de 47 años, previamente sano, presenta seis semanas de insuficiencia cardiaca progresiva. Inicialmente tenía FEVI 45%, pero dos semanas después disminuye a 25%. Presenta episodios recurrentes de taquicardia ventricular y posteriormente bloqueo AV avanzado. Troponina persistentemente elevada. Coronariografía sin enfermedad obstructiva. La CMR demuestra edema difuso y realce no isquémico, pero el deterioro continúa a pesar del tratamiento convencional de insuficiencia cardiaca. No existe antecedente claro de infección viral reciente. Por la progresión rápida y la combinación de arritmias ventriculares y trastornos de conducción, se decide realizar biopsia endomiocárdica.",
        pregunta: "¿Cuál de las siguientes etiologías debe considerarse especialmente ante este patrón y por qué la biopsia puede ser decisiva?",
        opciones: [
            "Miocarditis de células gigantes, porque es una etiología grave en la que el diagnóstico histológico puede modificar de forma inmediata el tratamiento inmunosupresor",
            "Pericarditis viral aislada, porque explica el bloqueo AV avanzado",
            "Cardiopatía isquémica estable, aunque las coronarias sean normales",
            "Estenosis aórtica crítica",
            "Miocardiopatía alcohólica como única explicación"
        ],
        respuestaCorrecta: 0,
        explicacion: "La combinación de deterioro rápidamente progresivo, insuficiencia cardiaca severa, taquicardia ventricular y bloqueo AV avanzado constituye un fenotipo de alto riesgo. La miocarditis de células gigantes es una etiología rara pero particularmente grave y potencialmente tratable con inmunosupresión. En escenarios de alto riesgo donde el diagnóstico etiológico puede modificar de manera importante el tratamiento, la biopsia endomiocárdica puede estar indicada. La CMR demuestra inflamación, pero no siempre determina la etiología histológica específica.",
        perlaENARM: "Miocarditis + TV + bloqueo AV avanzado + deterioro rápidamente progresivo = busca etiologías específicas graves; la biopsia puede cambiar el tratamiento.",
        gpc: {
            mexico: "IMSS-367-11, Miocarditis aguda.",
            internacional: "2025 ESC Guidelines for Myocarditis and Pericarditis."
        },
        bibliografia: "2025 ESC Guidelines for Myocarditis and Pericarditis; Braunwald's Heart Disease."
    },

    {
        id: "CARD-344",
        especialidad: "Cardiología",
        tema: "Miocarditis",
        subtema: "Miocarditis asociada a inhibidores de checkpoint",
        dificultad: "Extrema",
        caso: "Mujer de 69 años con carcinoma pulmonar metastásico inició pembrolizumab seis semanas antes. Consulta por fatiga intensa, disnea, diplopía y debilidad proximal de cuatro días de evolución. TA 110/68 mmHg, FC 92 lpm. ECG: nuevo bloqueo AV de primer grado que progresa durante la observación a bloqueo AV de segundo grado. Troponina T ultrasensible 1,600 ng/L y CPK 3,800 U/L. Ecocardiograma: FEVI 51%. Coronariografía sin enfermedad obstructiva. Presenta además ptosis bilateral y dificultad para elevar los brazos. No hay fiebre ni hipotensión.",
        pregunta: "¿Cuál es la interpretación clínica más importante?",
        opciones: [
            "La FEVI casi normal descarta una complicación cardiaca grave",
            "El cuadro sugiere miocarditis asociada a ICI con probable miositis y posible miastenia gravis concomitante, situación de alto riesgo",
            "Se trata exclusivamente de una miopatía por estatinas",
            "El bloqueo AV es incidental y no requiere vigilancia",
            "El cuadro es compatible únicamente con progresión metastásica"
        ],
        respuestaCorrecta: 1,
        explicacion: "La combinación de inhibidor de checkpoint, elevación importante de troponina, trastorno nuevo de conducción y manifestaciones musculares/neuromusculares es altamente sugestiva de toxicidad inmunomediada con afectación miocárdica y muscular. La miocarditis por ICI puede presentarse con FEVI preservada o discretamente reducida y aun así ser potencialmente mortal. La coexistencia de miositis y miastenia gravis es particularmente relevante porque puede producir compromiso respiratorio y neuromuscular grave. El paciente requiere evaluación urgente multidisciplinaria, suspensión temporal de la inmunoterapia y tratamiento inmunosupresor cuando la sospecha clínica sea alta.",
        perlaENARM: "En miocarditis por ICI, la gravedad no se determina solamente por la FEVI. Troponina + trastorno de conducción + miositis/miastenia es una combinación de alto riesgo.",
        gpc: {
            mexico: "No existe una GPC mexicana específica identificada para miocarditis por ICI; aplicar GPC mexicana de miocarditis y protocolos oncológicos.",
            internacional: "2025 ESC Guidelines for Myocarditis and Pericarditis; 2022 ESC Cardio-Oncology Guideline; consensos IC-OS."
        },
        bibliografia: "2025 ESC Guidelines for Myocarditis and Pericarditis; 2022 ESC Cardio-Oncology; IC-OS consensus statements."
    },

    {
        id: "CARD-345",
        especialidad: "Cardiología",
        tema: "Pericarditis",
        subtema: "Pericarditis aguda y estratificación de riesgo",
        dificultad: "Extrema",
        caso: "Varón de 38 años presenta dolor torácico intenso de 48 horas. El dolor empeora al acostarse y respirar profundamente y mejora al inclinarse hacia adelante. TA 124/78 mmHg, FC 104 lpm y temperatura 37.8 °C. ECG: elevación difusa del ST con depresión del PR. PCR elevada y troponina normal. Ecocardiograma: derrame pericárdico circumferencial de 12 mm sin colapso de cavidades derechas. No tiene inmunosupresión, trauma, anticoagulación ni antecedente de tuberculosis. No existe insuficiencia renal ni enfermedad autoinmune conocida.",
        pregunta: "¿Cuál es la estrategia inicial más apropiada?",
        opciones: [
            "Pericardiocentesis urgente independientemente del tamaño del derrame",
            "Tratamiento antiinflamatorio con AINE/aspirina más colchicina y seguimiento clínico, al no existir datos de alto riesgo o taponamiento",
            "Anticoagulación terapéutica inmediata",
            "Cirugía pericárdica urgente",
            "Antibiótico de amplio espectro sin evaluación adicional"
        ],
        respuestaCorrecta: 1,
        explicacion: "El cuadro es compatible con pericarditis aguda no complicada. Existen criterios clínicos clásicos de inflamación pericárdica y no hay datos de taponamiento. Un derrame moderado sin compromiso hemodinámico no constituye por sí mismo una indicación automática de pericardiocentesis. En la pericarditis aguda no complicada, el tratamiento antiinflamatorio combinado con colchicina reduce síntomas y recurrencias. La búsqueda etiológica debe intensificarse cuando existen características de alto riesgo o sospecha de una etiología específica.",
        perlaENARM: "Derrame pericárdico ≠ taponamiento. La conducta depende de tamaño, repercusión hemodinámica y sospecha etiológica.",
        gpc: {
            mexico: "IMSS-463-11, Diagnóstico y tratamiento de pericarditis en el adulto.",
            internacional: "2025 ESC Guidelines for the Management of Myocarditis and Pericarditis."
        },
        bibliografia: "2025 ESC Guidelines for Myocarditis and Pericarditis; Braunwald's Heart Disease."
    },

    {
        id: "CARD-346",
        especialidad: "Cardiología",
        tema: "Pericarditis",
        subtema: "Pericarditis recurrente",
        dificultad: "Extrema",
        caso: "Mujer de 32 años tuvo un primer episodio de pericarditis hace ocho meses, tratado con ibuprofeno y colchicina. Mejoró completamente y normalizó la PCR. Cuatro meses después presentó una nueva crisis y recibió nuevamente antiinflamatorio. Ahora consulta por un tercer episodio: dolor pleurítico y posicional, febrícula y PCR 56 mg/L. ECG muestra nuevamente cambios difusos compatibles con inflamación pericárdica. No presenta derrame significativo ni datos de infección bacteriana. Ha presentado dificultades para mantener tratamientos antiinflamatorios prolongados por efectos gastrointestinales.",
        pregunta: "¿Cuál es la estrategia farmacológica que debe considerarse en una paciente con pericarditis recurrente?",
        opciones: [
            "Suspender todos los antiinflamatorios porque las recurrencias son inevitables",
            "Colchicina como componente fundamental del tratamiento y, en recurrencias seleccionadas, considerar estrategias de segunda línea dirigidas a la inflamación cuando existe dependencia o resistencia al tratamiento convencional",
            "Anticoagulación como tratamiento antiinflamatorio",
            "Antibióticos de amplio espectro durante seis meses",
            "Digoxina como tratamiento principal"
        ],
        respuestaCorrecta: 1,
        explicacion: "La pericarditis recurrente requiere controlar el episodio inflamatorio y reducir la probabilidad de nuevos episodios. La colchicina tiene un papel central en la prevención de recurrencias y suele utilizarse junto con tratamiento antiinflamatorio convencional. Cuando existe enfermedad recurrente refractaria, corticodependiente o resistente a las estrategias convencionales, las terapias dirigidas contra vías inflamatorias específicas pueden considerarse en pacientes seleccionados, particularmente después de confirmar actividad inflamatoria. La nueva ESC 2025 actualiza el abordaje de la pericarditis recurrente y enfatiza estrategias personalizadas según fenotipo inflamatorio.",
        perlaENARM: "Pericarditis recurrente no significa simplemente repetir AINE indefinidamente. Determina si existe inflamación activa y considera terapia dirigida en enfermedad refractaria.",
        gpc: {
            mexico: "IMSS-463-11, Diagnóstico y tratamiento de pericarditis en el adulto.",
            internacional: "2025 ESC Guidelines for the Management of Myocarditis and Pericarditis."
        },
        bibliografia: "2025 ESC Guidelines for Myocarditis and Pericarditis; Braunwald's Heart Disease."
    },

    {
        id: "CARD-347",
        especialidad: "Cardiología",
        tema: "Pericarditis",
        subtema: "Taponamiento cardiaco",
        dificultad: "Extrema",
        caso: "Varón de 64 años con antecedente de cáncer pulmonar presenta disnea, debilidad y sensación de opresión torácica. TA 86/58 mmHg, FC 122 lpm, yugulares ingurgitadas y ruidos cardiacos hipofonéticos. Pulsus paradoxus de 18 mmHg. Ecocardiograma: derrame pericárdico circumferencial de 28 mm, colapso diastólico de aurícula derecha y VD, vena cava inferior dilatada sin colapso respiratorio y variación respiratoria marcada de los flujos transmitral y transtricuspídeo. El paciente desarrolla deterioro progresivo del estado mental.",
        pregunta: "¿Cuál es la intervención prioritaria?",
        opciones: [
            "Administrar únicamente diuréticos y reevaluar en 24 horas",
            "Pericardiocentesis urgente o drenaje quirúrgico según anatomía y disponibilidad, debido a taponamiento cardiaco con compromiso hemodinámico",
            "Anticoagulación plena",
            "Betabloqueador intravenoso",
            "Prueba de esfuerzo"
        ],
        respuestaCorrecta: 1,
        explicacion: "El paciente presenta taponamiento cardiaco con compromiso hemodinámico: hipotensión, taquicardia, ingurgitación yugular, pulsus paradoxus y signos ecocardiográficos de compromiso de cavidades derechas y variación respiratoria significativa. En este escenario el tratamiento es el drenaje urgente del espacio pericárdico. Los diuréticos pueden empeorar el llenado ventricular y no corrigen la causa mecánica. En un paciente oncológico debe considerarse la posibilidad de derrame maligno y planificar el drenaje y estudio etiológico.",
        perlaENARM: "Taponamiento = diagnóstico clínico-hemodinámico apoyado por ecocardiografía. La prioridad es liberar la presión pericárdica, no diuresis.",
        gpc: {
            mexico: "IMSS-463-11, Diagnóstico y tratamiento de pericarditis en el adulto.",
            internacional: "2025 ESC Guidelines for the Management of Myocarditis and Pericarditis."
        },
        bibliografia: "2025 ESC Guidelines for Myocarditis and Pericarditis; Braunwald's Heart Disease."
    },

    {
        id: "CARD-348",
        especialidad: "Cardiología",
        tema: "Pericarditis",
        subtema: "Pericarditis constrictiva",
        dificultad: "Extrema",
        caso: "Mujer de 58 años con antecedente de tuberculosis tratada hace 20 años presenta cinco años de edema progresivo, ascitis y fatiga. Ha recibido dosis crecientes de diuréticos con respuesta incompleta. FEVI 60%. Ecocardiograma: engrosamiento pericárdico, movimiento septal paradójico y variación respiratoria marcada de los flujos ventriculares. Doppler tisular muestra e' medial relativamente preservada y e' lateral reducida. TC: calcificación pericárdica extensa. Cateterismo: igualación de las presiones diastólicas y patrón de dip-and-plateau.",
        pregunta: "¿Cuál es el diagnóstico que mejor integra los hallazgos?",
        opciones: [
            "Insuficiencia cardiaca exclusivamente por HFpEF",
            "Pericarditis constrictiva crónica",
            "Miocardiopatía dilatada",
            "Taponamiento cardiaco agudo",
            "Estenosis mitral crítica"
        ],
        respuestaCorrecta: 1,
        explicacion: "El cuadro es característico de fisiología constrictiva: insuficiencia cardiaca predominantemente derecha, ascitis, engrosamiento/calcificación pericárdica, interdependencia ventricular y variación respiratoria de los flujos. La preservación relativa de e' medial respecto a e' lateral puede apoyar constricción frente a HFpEF. El cateterismo con igualación de presiones diastólicas y patrón dip-and-plateau aporta evidencia hemodinámica adicional. La TC demuestra anatomía pericárdica, pero la ausencia de calcificación tampoco excluiría constricción. En pacientes con constricción crónica sintomática y anatomía apropiada debe valorarse tratamiento quirúrgico en centros expertos.",
        perlaENARM: "Constrictiva: piensa en interdependencia ventricular y discordancia respiratoria de presiones/flujo; no confundas automáticamente ascitis + FEVI normal con HFpEF.",
        gpc: {
            mexico: "IMSS-463-11, Diagnóstico y tratamiento de pericarditis en el adulto.",
            internacional: "2025 ESC Guidelines for the Management of Myocarditis and Pericarditis."
        },
        bibliografia: "2025 ESC Guidelines for Myocarditis and Pericarditis; Braunwald's Heart Disease."
    },

    {
        id: "CARD-349",
        especialidad: "Cardiología",
        tema: "Miocarditis",
        subtema: "Arritmias ventriculares y riesgo de muerte súbita",
        dificultad: "Extrema",
        caso: "Varón de 29 años, atleta recreativo, presentó miocarditis confirmada por CMR seis meses antes. La FEVI actual es 58% y se encuentra asintomático. Sin embargo, Holter de 72 horas demuestra 2,400 extrasístoles ventriculares, varios episodios de TV no sostenida y una racha de TV de 14 latidos a 190 lpm. La CMR de control muestra persistencia de realce tardío subepicárdico inferolateral, aunque el edema ha disminuido. Prueba de esfuerzo reproduce ectopia ventricular compleja. No existen antecedentes familiares conocidos de muerte súbita.",
        pregunta: "¿Cuál es el aspecto que más modifica su estratificación de riesgo y manejo?",
        opciones: [
            "La FEVI normal elimina prácticamente cualquier riesgo arrítmico",
            "La presencia de arritmias ventriculares y fibrosis residual por CMR después de miocarditis requiere reevaluación especializada del riesgo arrítmico antes de asumir que el paciente está completamente recuperado",
            "El paciente puede regresar inmediatamente a ejercicio competitivo porque ya pasaron seis meses",
            "El realce tardío carece de importancia cuando la FEVI es normal",
            "La ausencia de síncope hace imposible una arritmia ventricular relevante"
        ],
        respuestaCorrecta: 1,
        explicacion: "La recuperación de la FEVI no equivale necesariamente a recuperación completa del sustrato arrítmico. La fibrosis residual identificada por CMR y la presencia de TV no sostenida/ectopia compleja son marcadores relevantes de riesgo. El nuevo consenso internacional de 2026 sobre trastornos del ritmo en miocarditis enfatiza la evaluación específica de arritmias, incluyendo ECG, monitorización, imagen y estratificación individualizada. La reincorporación al ejercicio debe realizarse después de demostrar resolución de la inflamación activa y una evaluación apropiada del riesgo arrítmico.",
        perlaENARM: "Después de miocarditis: FEVI normal ≠ riesgo arrítmico cero. Fibrosis residual + TV/ectopia compleja obliga a reevaluación.",
        gpc: {
            mexico: "IMSS-367-11, Miocarditis aguda.",
            internacional: "2025 ESC Guidelines for Myocarditis and Pericarditis; 2026 EHRA/HFA/HRS/AP-HRS/LAHRS consensus on arrhythmias in myocarditis."
        },
        bibliografia: "2025 ESC Guidelines for Myocarditis and Pericarditis; 2026 international rhythm consensus; Braunwald's Heart Disease."
    },

    {
        id: "CARD-350",
        especialidad: "Cardiología",
        tema: "Miocarditis y pericarditis",
        subtema: "Caso integrativo de síndrome inflamatorio miopericárdico",
        dificultad: "Extrema",
        caso: "Mujer de 45 años, previamente sana, consulta por cuatro días de fiebre, dolor torácico y disnea progresiva. El dolor inicialmente era posicional y pleurítico, pero en las últimas 24 horas se volvió constante. TA 96/62 mmHg, FC 118 lpm, SatO2 94%. ECG: elevación difusa del ST con depresión del PR, además de extrasístoles ventriculares frecuentes. Troponina I ultrasensible 7,400 ng/L, NT-proBNP 8,600 pg/mL y PCR 14 mg/dL. Ecocardiograma: FEVI 35%, hipocinesia global, VD discretamente deprimido y derrame pericárdico moderado sin colapso franco. Coronariografía sin enfermedad obstructiva. La CMR muestra edema miocárdico difuso y realce tardío subepicárdico/mesomiocárdico, pero la paciente comienza a desarrollar hipotensión progresiva, oliguria y taquicardia ventricular no sostenida.",
        pregunta: "¿Cuál es la interpretación y prioridad terapéutica más apropiada?",
        opciones: [
            "Pericarditis aguda no complicada; manejo ambulatorio con AINE",
            "Miopericarditis leve; la FEVI reducida no modifica la conducta",
            "Miocarditis inflamatoria de alto riesgo con compromiso ventricular, eléctrico y hemodinámico, que requiere hospitalización especializada, tratamiento de insuficiencia cardiaca/choque y vigilancia intensiva de arritmias",
            "Infarto con elevación del ST por enfermedad coronaria obstructiva pese a coronarias normales",
            "Pericarditis constrictiva crónica"
        ],
        respuestaCorrecta: 2,
        explicacion: "Este caso representa un síndrome inflamatorio miopericárdico con afectación miocárdica significativa. La paciente presenta troponina muy elevada, disfunción ventricular, edema y realce no isquémico en CMR, arritmias ventriculares y evolución hacia inestabilidad hemodinámica. La prioridad deja de ser el tratamiento de una pericarditis no complicada y pasa a ser la prevención de progresión a choque cardiogénico y muerte súbita. Requiere ingreso en un entorno especializado, monitorización continua, tratamiento de insuficiencia cardiaca y del choque según el perfil hemodinámico y evaluación temprana de soporte circulatorio si existe deterioro refractario. La nueva ESC 2025 enfatiza una estrategia basada en el fenotipo de presentación, multimodalidad de imagen y escalamiento diagnóstico/terapéutico según gravedad. La presencia de arritmias y trastornos de conducción es especialmente relevante para la estratificación de riesgo.",
        perlaENARM: "El caso cambia de categoría cuando aparecen FEVI reducida, arritmias e inestabilidad hemodinámica. No trates una miopericarditis de alto riesgo como una pericarditis ambulatoria.",
        gpc: {
            mexico: "IMSS-367-11, Miocarditis aguda; IMSS-463-11, Pericarditis del adulto.",
            internacional: "2025 ESC Guidelines for the Management of Myocarditis and Pericarditis; 2026 EHRA/HFA/HRS/AP-HRS/LAHRS consensus on arrhythmias in myocarditis."
        },
        bibliografia: "2025 ESC Guidelines for Myocarditis and Pericarditis; 2026 international rhythm consensus; Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },
        {
        id: "CARD-351",
        especialidad: "Cardiología",
        tema: "Insuficiencia cardiaca",
        subtema: "HFrEF y tratamiento farmacológico integral",
        dificultad: "Extrema",
        caso: "Varón de 59 años con antecedente de infarto anterior hace 14 meses, hipertensión arterial, diabetes mellitus tipo 2 y enfermedad renal crónica G3a consulta por disnea progresiva, ortopnea y edema de miembros inferiores. Después del infarto presentó FEVI de 32%, pero abandonó el seguimiento por sentirse mejor. Actualmente toma carvedilol 6.25 mg cada 12 horas, losartán 50 mg cada 12 horas, furosemida 40 mg/día y dapagliflozina 10 mg/día. No recibe antagonista mineralocorticoide ni ARNI. TA 108/68 mmHg, FC 72 lpm, SatO2 95% y peso 86 kg, con incremento de 4 kg respecto a su peso habitual. Presenta presión venosa yugular elevada, tercer ruido, estertores bibasales y edema hasta ambas rodillas. Creatinina 1.5 mg/dL, TFGe 53 mL/min/1.73 m², K 4.4 mEq/L, Na 137 mEq/L. NT-proBNP 4,900 pg/mL. Ecocardiograma: FEVI 29%, volumen telesistólico elevado, insuficiencia mitral funcional moderada y VD con función ligeramente reducida. No existe hipotensión sintomática ni hiperpotasemia.",
        pregunta: "Una vez controlada la congestión y considerando que permanece hemodinámicamente estable, ¿cuál es la estrategia que ofrece la mejor oportunidad de modificar el pronóstico a largo plazo?",
        opciones: [
            "Aumentar exclusivamente la dosis de furosemida hasta normalizar el NT-proBNP",
            "Mantener losartán y carvedilol sin modificaciones porque ya recibe tratamiento basado en evidencia",
            "Optimizar de forma temprana el tratamiento modificador de enfermedad con ARNI, betabloqueador basado en evidencia, antagonista mineralocorticoide y SGLT2i, titulando según tolerancia",
            "Suspender dapagliflozina porque la insuficiencia cardiaca es predominantemente sistólica",
            "Iniciar digoxina como sustituto del ARNI y del antagonista mineralocorticoide"
        ],
        respuestaCorrecta: 2,
        explicacion: "El paciente presenta HFrEF con FEVI 29%, congestión clínica y múltiples oportunidades de optimización terapéutica. Los diuréticos son fundamentales para controlar la congestión, pero no constituyen por sí solos el tratamiento modificador del pronóstico. El tratamiento contemporáneo de HFrEF se basa en cuatro pilares: inhibición del sistema renina-angiotensina mediante ARNI cuando sea posible, betabloqueador con evidencia, antagonista mineralocorticoide y SGLT2i. La estrategia moderna favorece iniciar y titular precozmente los tratamientos, en lugar de esperar meses entre cada fármaco. La presión arterial es relativamente baja pero no existe hipotensión sintomática, por lo que debe utilizarse una estrategia de dosis toleradas y monitorizar función renal, potasio y volumen. El paciente también debe ser reevaluado posteriormente para determinar persistencia de FEVI reducida, indicación de dispositivos y necesidad de tratamiento de la insuficiencia mitral funcional.",
        perlaENARM: "En HFrEF, el objetivo no es solamente quitar edema: hay que instaurar rápidamente los cuatro pilares modificadores de pronóstico.",
        gpc: {
            mexico: "GPC-SS-219-24, Diagnóstico y tratamiento de la insuficiencia cardiaca crónica en el adulto, como referencia mexicana aplicable.",
            internacional: "2026 ESC Guidelines for the Management of Heart Failure; 2024 ACC Expert Consensus Decision Pathway for HFrEF."
        },
        bibliografia: "2026 ESC Guidelines for Heart Failure; 2024 ACC Expert Consensus for HFrEF; Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },

    {
        id: "CARD-352",
        especialidad: "Cardiología",
        tema: "Insuficiencia cardiaca",
        subtema: "HFpEF y diagnóstico en obesidad",
        dificultad: "Extrema",
        caso: "Mujer de 67 años con IMC de 39 kg/m², hipertensión de larga evolución, diabetes mellitus tipo 2, fibrilación auricular paroxística y enfermedad renal crónica G2 consulta por disnea de esfuerzo que ha progresado durante 18 meses. Refiere que puede caminar solamente 150 metros antes de detenerse por falta de aire, pero niega dolor torácico. TA 142/78 mmHg, FC 84 lpm en ritmo sinusal. No presenta edema actualmente. NT-proBNP es de 240 pg/mL. Ecocardiograma: FEVI 63%, hipertrofia ventricular izquierda concéntrica, volumen auricular izquierdo indexado 44 mL/m², E/e' promedio 15, velocidad de regurgitación tricuspídea 3.0 m/s y e' septal reducida. Prueba de esfuerzo convencional reproduce disnea importante sin cambios isquémicos. Debido a la discordancia entre la intensidad de los síntomas y los biomarcadores, se realiza prueba hemodinámica durante ejercicio: PAWP en reposo 13 mmHg y durante ejercicio 28 mmHg.",
        pregunta: "¿Cuál es la interpretación más apropiada?",
        opciones: [
            "La NT-proBNP baja excluye HFpEF",
            "La FEVI preservada demuestra que la disnea no puede ser de origen cardiaco",
            "El conjunto clínico, ecocardiográfico y hemodinámico es compatible con HFpEF, y la obesidad puede reducir la concentración de péptidos natriuréticos",
            "La paciente tiene obligatoriamente HFrEF oculta",
            "El aumento de PAWP durante ejercicio demuestra exclusivamente enfermedad pulmonar"
        ],
        respuestaCorrecta: 2,
        explicacion: "La paciente presenta un fenotipo clásico de HFpEF: edad avanzada, obesidad, hipertensión, diabetes, FA, remodelado ventricular concéntrico, dilatación auricular izquierda y evidencia de aumento de las presiones de llenado durante ejercicio. El punto crítico es que los péptidos natriuréticos pueden ser relativamente bajos en pacientes con obesidad, por lo que una concentración no muy elevada no excluye HFpEF. La evaluación estructurada puede utilizar H2FPEF y HFA-PEFF, pero en casos indeterminados la evaluación hemodinámica durante ejercicio puede demostrar la elevación anormal de PAWP que no está presente en reposo. La actualización ACC 2026 enfatiza precisamente la necesidad de reconocer estas limitaciones diagnósticas y utilizar un enfoque multimodal.",
        perlaENARM: "En obesidad, un BNP/NT-proBNP relativamente bajo NO descarta HFpEF. Si la sospecha es alta, busca evidencia objetiva de aumento de presiones de llenado.",
        gpc: {
            mexico: "GPC-SS-219-24, insuficiencia cardiaca, como referencia mexicana aplicable.",
            internacional: "2026 ESC Guidelines for Heart Failure; 2026 ACC Expert Consensus Decision Pathway for HFpEF."
        },
        bibliografia: "2026 ESC Heart Failure Guideline; 2026 ACC HFpEF ECDP; Braunwald's Heart Disease."
    },

    {
        id: "CARD-353",
        especialidad: "Cardiología",
        tema: "Insuficiencia cardiaca",
        subtema: "HFpEF y tratamiento cardiometabólico",
        dificultad: "Extrema",
        caso: "Varón de 71 años con obesidad central, diabetes mellitus tipo 2, hipertensión, fibrilación auricular permanente y enfermedad renal crónica G3b presenta tres hospitalizaciones por insuficiencia cardiaca durante los últimos 12 meses. FEVI 58%. Actualmente está euvolémico después de una hospitalización reciente. Toma furosemida, losartán, espironolactona a dosis bajas y anticoagulación por FA. HbA1c 8.2%, IMC 36 kg/m², TFGe 42 mL/min/1.73 m² y K 4.6 mEq/L. NT-proBNP permanece elevado. No presenta hipotensión ni hipovolemia. El paciente pregunta qué tratamiento podría disminuir de forma más consistente el riesgo de nuevas hospitalizaciones por insuficiencia cardiaca independientemente de que tenga diabetes.",
        pregunta: "¿Cuál es la intervención farmacológica que debe incorporarse prioritariamente si no existe contraindicación?",
        opciones: [
            "Suspender el diurético y utilizar nitratos de acción prolongada",
            "Iniciar un inhibidor SGLT2",
            "Iniciar digoxina como tratamiento pronóstico de HFpEF",
            "Sustituir el tratamiento por un calcioantagonista no dihidropiridínico",
            "Iniciar únicamente ivabradina"
        ],
        respuestaCorrecta: 1,
        explicacion: "Los SGLT2i tienen un papel fundamental en el tratamiento contemporáneo de HFpEF y reducen el riesgo de eventos relacionados con insuficiencia cardiaca, con beneficio que no depende exclusivamente de la presencia de diabetes. La actualización ACC 2026 incorpora evidencia adicional y mantiene a los SGLT2i como una intervención central. En este paciente deben tratarse simultáneamente la hipertensión, obesidad, diabetes, FA, enfermedad renal y congestión. Los MRA pueden beneficiar a subgrupos seleccionados con monitorización de potasio y función renal. Las terapias dirigidas al peso también tienen creciente importancia en determinados fenotipos cardiometabólicos.",
        perlaENARM: "HFpEF no significa 'sin tratamiento modificador'. SGLT2i son un pilar contemporáneo, además del control agresivo de comorbilidades y congestión.",
        gpc: {
            mexico: "GPC-SS-219-24, insuficiencia cardiaca.",
            internacional: "2026 ESC Guidelines for Heart Failure; 2026 ACC HFpEF Expert Consensus Decision Pathway."
        },
        bibliografia: "2026 ESC Heart Failure Guideline; 2026 ACC HFpEF ECDP; Braunwald's Heart Disease."
    },

    {
        id: "CARD-354",
        especialidad: "Cardiología",
        tema: "Insuficiencia cardiaca",
        subtema: "Insuficiencia cardiaca con FEVI recuperada",
        dificultad: "Extrema",
        caso: `Mujer de 52 años tuvo miocardiopatía dilatada no isquémica hace cuatro años con FEVI de 25%, dilatación ventricular y múltiples hospitalizaciones por insuficiencia cardiaca. Después de iniciar sacubitrilo/valsartán, carvedilol, espironolactona y dapagliflozina presentó recuperación progresiva de la función ventricular. Actualmente está asintomática, realiza actividad física normal y su ecocardiograma muestra FEVI 57%, volumen ventricular casi normal y NT-proBNP dentro de límites normales. La paciente pregunta si puede suspender el tratamiento porque "su corazón ya se curó".`,
        pregunta: "¿Cuál es la recomendación más apropiada?",
        opciones: [
            "Suspender todos los medicamentos porque la FEVI ya es normal",
            "Suspender solamente el ARNI y mantener el betabloqueador",
            "Mantener el tratamiento modificador de enfermedad debido al riesgo de recaída de la disfunción ventricular tras la retirada",
            "Mantener exclusivamente el diurético",
            "Cambiar todo el tratamiento por calcioantagonistas"
        ],
        respuestaCorrecta: 2,
        explicacion: "La recuperación de la FEVI representa una respuesta terapéutica favorable, pero no necesariamente la desaparición del sustrato de la enfermedad. Los pacientes con recuperación de la función ventricular pueden presentar recaída si se retira el tratamiento. La conducta contemporánea es mantener la terapia modificadora de enfermedad, salvo situaciones particulares en las que exista una razón clínica para modificarla. El concepto de remisión funcional debe distinguirse de curación definitiva. El seguimiento debe incluir evaluación clínica, biomarcadores e imagen según el contexto etiológico.",
        perlaENARM: "FEVI normalizada después de HFrEF no equivale a curación. La retirada de GDMT puede precipitar recaída.",
        gpc: {
            mexico: "GPC-SS-219-24, insuficiencia cardiaca.",
            internacional: "2026 ESC Guidelines for Heart Failure; contemporary universal HF definition and HFrEF consensus."
        },
        bibliografia: "2026 ESC Guidelines for Heart Failure; TRED-HF evidence; Braunwald's Heart Disease."
    },

    {
        id: "CARD-355",
        especialidad: "Cardiología",
        tema: "Insuficiencia cardiaca aguda",
        subtema: "Descongestión y resistencia diurética",
        dificultad: "Extrema",
        caso: "Varón de 74 años con HFrEF de etiología isquémica y FEVI 25% ingresa por ortopnea intensa. TA 128/76 mmHg, FC 106 lpm, SatO2 89% y presión venosa yugular elevada hasta el ángulo mandibular. Presenta estertores y edema con fóvea hasta ambos muslos. Creatinina basal 1.4 mg/dL y actual 1.8 mg/dL. Después de administrar furosemida intravenosa a una dosis equivalente a aproximadamente 2.5 veces su dosis oral diaria, la diuresis durante las primeras seis horas es mínima y persiste congestión clínica. Na urinario a las dos horas es bajo. No hay hipotensión ni datos de choque. Se descarta obstrucción urinaria.",
        pregunta: "¿Cuál es la conducta más apropiada?",
        opciones: [
            "Suspender diuréticos inmediatamente porque la creatinina aumentó",
            "Continuar una estrategia activa de descongestión y escalar la terapia diurética, considerando bloqueo secuencial del nefrón según respuesta y monitorización",
            "Administrar solución salina intravenosa en grandes cantidades",
            "Iniciar betabloqueador a dosis máxima inmediatamente para aumentar la diuresis",
            "Realizar diálisis obligatoria por cualquier incremento de creatinina"
        ],
        respuestaCorrecta: 1,
        explicacion: "El paciente presenta congestión marcada y respuesta diurética insuficiente, compatible con resistencia diurética. En insuficiencia cardiaca aguda, la congestión residual es un determinante pronóstico importante. Un incremento moderado de creatinina durante una descongestión efectiva no debe interpretarse automáticamente como lesión renal que obliga a suspender el tratamiento. Debe valorarse la respuesta objetiva mediante diuresis, sodio urinario, peso, balance, exploración clínica y parámetros hemodinámicos. Si la respuesta a diurético de asa es insuficiente, puede intensificarse la dosis y añadirse bloqueo secuencial del nefrón con monitorización estrecha de electrolitos y función renal.",
        perlaENARM: "En IC aguda congestionada, una creatinina que sube ligeramente no necesariamente significa fracaso renal por diurético. La pregunta clave es: ¿el paciente está realmente descongestionándose?",
        gpc: {
            mexico: "GPC-SS-219-24, insuficiencia cardiaca.",
            internacional: "2026 ESC Guidelines for Heart Failure."
        },
        bibliografia: "2026 ESC Heart Failure Guideline; Braunwald's Heart Disease."
    },

    {
        id: "CARD-356",
        especialidad: "Cardiología",
        tema: "Insuficiencia cardiaca aguda",
        subtema: "Inicio de tratamiento durante hospitalización",
        dificultad: "Extrema",
        caso: "Mujer de 63 años con HFrEF de reciente diagnóstico, FEVI 28%, ingresa por congestión pulmonar. TA inicial 96/60 mmHg, pero después de tratamiento diurético intravenoso presenta TA 112/68 mmHg, extremidades calientes, diuresis adecuada y desaparición de los estertores. Creatinina 1.3 mg/dL, K 4.2 mEq/L. No requiere vasopresores ni inotrópicos. Antes del ingreso no recibía tratamiento modificador de enfermedad. El equipo plantea iniciar los cuatro pilares solamente después de cuatro semanas para evitar hipotensión.",
        pregunta: "¿Cuál es el enfoque contemporáneo más apropiado?",
        opciones: [
            "Esperar obligatoriamente cuatro semanas antes de iniciar cualquier tratamiento modificador",
            "Aprovechar la estabilidad clínica antes del alta para iniciar de manera temprana tratamientos modificadores de enfermedad a dosis toleradas y establecer un plan de titulación y seguimiento estrecho",
            "Iniciar únicamente digoxina durante la hospitalización",
            "Evitar SGLT2i hasta que la FEVI sea reevaluada a los seis meses",
            "Iniciar solamente diurético y suspenderlo al alta"
        ],
        respuestaCorrecta: 1,
        explicacion: "La evidencia contemporánea favorece el inicio temprano de tratamiento modificador de enfermedad durante o poco después de la hospitalización, una vez alcanzada estabilidad hemodinámica. Esperar semanas sin una razón clínica expone al paciente a un periodo de alto riesgo sin tratamiento protector. La implementación debe ser individualizada según presión arterial, función renal, potasio, frecuencia cardiaca y estado de volumen. El objetivo es que el paciente salga del hospital con una estrategia terapéutica activa y un plan de titulación cercano.",
        perlaENARM: "En HFrEF hospitalizada, la estabilización clínica abre una ventana terapéutica; no existe una regla de 'esperar cuatro semanas' para iniciar GDMT.",
        gpc: {
            mexico: "GPC-SS-219-24, insuficiencia cardiaca.",
            internacional: "2026 ESC Guidelines for Heart Failure; 2024 ACC Expert Consensus for HFrEF."
        },
        bibliografia: "2026 ESC Heart Failure Guideline; 2024 ACC HFrEF ECDP; Braunwald's Heart Disease."
    },

    {
        id: "CARD-357",
        especialidad: "Cardiología",
        tema: "Insuficiencia cardiaca",
        subtema: "Deficiencia de hierro en insuficiencia cardiaca",
        dificultad: "Extrema",
        caso: "Varón de 68 años con HFrEF de origen isquémico, FEVI 31%, presenta disnea NYHA III pese a tratamiento médico optimizado. No está congestionado y no ha tenido una hospitalización reciente. Hemoglobina 12.4 g/dL, ferritina 82 ng/mL y saturación de transferrina 16%. No existe evidencia de sangrado activo. Creatinina 1.6 mg/dL y TFGe 47 mL/min/1.73 m². La dieta es adecuada y no hay datos clínicos de infección. Pregunta si la ausencia de anemia significa que el metabolismo del hierro no tiene importancia.",
        pregunta: "¿Cuál es la interpretación correcta?",
        opciones: [
            "No existe deficiencia de hierro porque la hemoglobina está dentro de un rango casi normal",
            "Los valores son compatibles con deficiencia de hierro relevante en insuficiencia cardiaca, aun sin anemia franca, y debe considerarse reposición de hierro según el contexto clínico y la evidencia disponible",
            "Debe administrarse transfusión de concentrados eritrocitarios",
            "El único tratamiento es hierro oral en todos los pacientes",
            "La ferritina debe ser cero para considerar deficiencia de hierro"
        ],
        respuestaCorrecta: 1,
        explicacion: "En insuficiencia cardiaca, la deficiencia de hierro puede existir con o sin anemia y se asocia con peor capacidad funcional y pronóstico. El fenotipo clásico utilizado en ensayos y guías se identifica mediante ferritina baja o ferritina intermedia con saturación de transferrina reducida. La corrección del déficit puede mejorar síntomas y capacidad funcional y, en determinados pacientes, reducir eventos relacionados con insuficiencia cardiaca. La estrategia de reposición y la vía de administración dependen del fenotipo, gravedad, contexto hospitalario y evidencia vigente.",
        perlaENARM: "En IC busca deficiencia de hierro aunque la Hb sea normal. Anemia y deficiencia de hierro no son sinónimos.",
        gpc: {
            mexico: "GPC-SS-219-24, insuficiencia cardiaca.",
            internacional: "2026 ESC Guidelines for Heart Failure."
        },
        bibliografia: "2026 ESC Heart Failure Guideline; Braunwald's Heart Disease."
    },

    {
        id: "CARD-358",
        especialidad: "Cardiología",
        tema: "Insuficiencia cardiaca avanzada",
        subtema: "Referencia a unidad de insuficiencia cardiaca avanzada",
        dificultad: "Extrema",
        caso: "Mujer de 56 años con miocardiopatía dilatada no isquémica presenta FEVI 20% a pesar de tratamiento farmacológico en dosis máximamente toleradas. Durante los últimos ocho meses ha requerido tres hospitalizaciones por insuficiencia cardiaca. Actualmente tiene TA 92/60 mmHg, FC 96 lpm, Na 132 mEq/L, creatinina 2.0 mg/dL y NT-proBNP 8,700 pg/mL. Presenta intolerancia a dosis mayores de GDMT por hipotensión. Camina menos de 150 metros y refiere episodios de mareo. En la prueba cardiopulmonar, VO2 pico es 10.8 mL/kg/min. No existe una causa reversible identificada. No tiene contraindicaciones mayores para trasplante.",
        pregunta: "¿Cuál es la decisión que no debe retrasarse?",
        opciones: [
            "Continuar aumentando los medicamentos indefinidamente sin valoración especializada",
            "Referir a un centro de insuficiencia cardiaca avanzada para evaluación de trasplante, asistencia ventricular y otras estrategias avanzadas",
            "Suspender todos los medicamentos cardiovasculares",
            "Realizar únicamente una nueva prueba de esfuerzo dentro de un año",
            "Indicar TAVI como tratamiento de la miocardiopatía"
        ],
        respuestaCorrecta: 1,
        explicacion: "La paciente presenta múltiples marcadores de insuficiencia cardiaca avanzada: FEVI severamente reducida, hospitalizaciones recurrentes, hipotensión que limita GDMT, disfunción renal, hiponatremia, elevación marcada de NT-proBNP, deterioro funcional importante y VO2 pico muy reducido. En este contexto no debe esperarse hasta el deterioro terminal para referirla. La evaluación en una unidad especializada permite determinar candidaturía para trasplante, soporte circulatorio mecánico y estrategias paliativas cuando corresponda. La referencia temprana es fundamental porque las opciones avanzadas requieren evaluación integral y planificación.",
        perlaENARM: "Tres hospitalizaciones, hipotensión limitante de GDMT, disfunción orgánica y VO2 pico bajo = piensa en IC avanzada y referencia temprana.",
        gpc: {
            mexico: "GPC-SS-219-24, insuficiencia cardiaca.",
            internacional: "2026 ESC Guidelines for Heart Failure."
        },
        bibliografia: "2026 ESC Heart Failure Guideline; Braunwald's Heart Disease; Harrison's Principles of Internal Medicine."
    },

    {
        id: "CARD-359",
        especialidad: "Cardiología",
        tema: "Insuficiencia cardiaca",
        subtema: "Insuficiencia cardiaca derecha y disfunción del VD",
        dificultad: "Extrema",
        caso: "Varón de 61 años con antecedente de infarto inferior hace cinco años presenta edema masivo, ascitis y deterioro de la tolerancia al ejercicio. FEVI 52%. Ecocardiograma: VD severamente dilatado, TAPSE 12 mm, FAC 25%, insuficiencia tricuspídea severa y presión pulmonar elevada. La aurícula derecha está marcadamente dilatada. Cateterismo: presión auricular derecha 18 mmHg, mPAP 36 mmHg, PAWP 14 mmHg y gasto cardiaco 3.1 L/min. No existe estenosis pulmonar ni evidencia de TEP crónico en V/Q. La paciente recibe diuréticos pero persiste con congestión sistémica y bajo gasto.",
        pregunta: "¿Cuál es la interpretación fisiopatológica más apropiada?",
        opciones: [
            "La FEVI preservada excluye insuficiencia cardiaca clínicamente significativa",
            "Existe insuficiencia cardiaca predominantemente derecha con disfunción significativa del VD y aumento de la poscarga, que requiere identificar y tratar simultáneamente la causa de la hipertensión pulmonar y la congestión",
            "La ascitis demuestra cirrosis como diagnóstico primario",
            "La insuficiencia tricuspídea es un hallazgo incidental sin repercusión hemodinámica",
            "La presión auricular derecha elevada demuestra exclusivamente taponamiento cardiaco"
        ],
        respuestaCorrecta: 1,
        explicacion: "La FEVI preservada no excluye una insuficiencia cardiaca dominada por el VD. La paciente presenta disfunción sistólica importante del VD, insuficiencia tricuspídea severa, presión auricular derecha elevada y bajo gasto. La poscarga pulmonar aumentada puede perpetuar el círculo de dilatación del VD, mayor insuficiencia tricuspídea y congestión sistémica. El manejo requiere identificar la etiología de la hipertensión pulmonar, optimizar volumen, tratar la causa subyacente y valorar la insuficiencia tricuspídea y las opciones intervencionistas cuando corresponda.",
        perlaENARM: "Una FEVI de 52% no descarta IC. En pacientes con predominio derecho, el VD, presión auricular derecha, gasto y congestión sistémica pueden determinar el pronóstico.",
        gpc: {
            mexico: "GPC-SS-219-24, insuficiencia cardiaca; GPC mexicanas aplicables a hipertensión pulmonar cuando corresponda.",
            internacional: "2026 ESC Guidelines for Heart Failure; ESC/ERS 2022 Pulmonary Hypertension; ESC/EACTS 2025 Valvular Heart Disease."
        },
        bibliografia: "2026 ESC Heart Failure Guideline; ESC/ERS 2022 PH Guideline; ESC/EACTS 2025 VHD Guideline; Braunwald's Heart Disease."
    },

    {
        id: "CARD-360",
        especialidad: "Cardiología",
        tema: "Insuficiencia cardiaca",
        subtema: "Caso integrativo: fenotipo y nueva clasificación de insuficiencia cardiaca",
        dificultad: "Extrema",
        caso: "Mujer de 74 años con hipertensión de 25 años de evolución, diabetes mellitus tipo 2, obesidad, fibrilación auricular y enfermedad renal crónica consulta por disnea progresiva, ortopnea y dos hospitalizaciones por congestión durante el último año. TA 138/76 mmHg, FC 78 lpm con FA, SatO2 95%. Presenta ingurgitación yugular, tercer ruido, edema bilateral y hepatomegalia congestiva. NT-proBNP 3,800 pg/mL. Ecocardiograma: FEVI 47%, hipertrofia ventricular izquierda, volumen auricular izquierdo 51 mL/m², E/e' 19, insuficiencia tricuspídea moderada y presión pulmonar elevada. Después de optimizar la volemia, la FEVI vuelve a medirse y es de 48%. CMR no demuestra infarto ni fibrosis extensa. No existe valvulopatía primaria severa. La paciente recibe únicamente diurético y losartán. El equipo discute si debe considerarse un fenotipo 'intermedio' que permita esperar antes de iniciar tratamiento específico.",
        pregunta: "A la luz de la clasificación contemporánea de insuficiencia cardiaca, ¿cuál es la interpretación y estrategia más apropiada?",
        opciones: [
            "La FEVI de 47% constituye una categoría independiente que no comparte tratamiento con HFrEF",
            "La paciente debe considerarse sin insuficiencia cardiaca porque la FEVI es mayor de 40%",
            "La paciente tiene un síndrome de insuficiencia cardiaca con FEVI <50% y debe recibir una estrategia terapéutica basada en evidencia para HFrEF, individualizada según tolerancia y fenotipo clínico",
            "La presencia de FA explica todos los síntomas y excluye insuficiencia cardiaca",
            "Debe evitarse SGLT2i porque la FEVI no es menor de 40%"
        ],
        respuestaCorrecta: 2,
        explicacion: "Este caso incorpora una modificación conceptual importante de la ESC 2026. La guía abandona HFmrEF como fenotipo independiente y utiliza un punto de corte de 50%: HFrEF con FEVI <50% y HFpEF con FEVI ≥50%. Por tanto, una FEVI de 47% se integra dentro del espectro de HFrEF bajo la nueva clasificación ESC. Esto no significa que todos los pacientes con FEVI 47% sean idénticos a los de FEVI 20%, sino que comparten suficiente fisiopatología y evidencia terapéutica para justificar una estrategia basada en tratamientos modificadores de enfermedad, adaptada al fenotipo y tolerancia. La paciente además presenta evidencia estructural y clínica contundente de insuficiencia cardiaca: hipertrofia, dilatación auricular, presiones de llenado elevadas, congestión y hospitalizaciones. La FA y la obesidad son comorbilidades importantes, pero no explican por sí solas todo el síndrome.",
        perlaENARM: "Cambio clave 2026: la ESC elimina HFmrEF como categoría independiente y utiliza FEVI <50% para HFrEF y ≥50% para HFpEF. Memoriza el cambio para ENARM futuro.",
        gpc: {
            mexico: "GPC-SS-219-24, insuficiencia cardiaca.",
            internacional: "2026 ESC Guidelines for Heart Failure; 2026 Second Universal Definition of Heart Failure; 2026 ACC HFpEF ECDP cuando el fenotipo sea HFpEF."
        },
        bibliografia: "2026 ESC Guidelines for Heart Failure; 2026 Second Universal Definition of Heart Failure; 2026 ACC HFpEF ECDP; Braunwald's Heart Disease."
    }
];

window.BANCO_CARDIOLOGIA = BANCO_CARDIOLOGIA;
