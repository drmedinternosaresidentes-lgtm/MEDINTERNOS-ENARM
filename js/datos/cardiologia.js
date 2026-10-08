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
  } 
];

window.BANCO_CARDIOLOGIA = BANCO_CARDIOLOGIA;
