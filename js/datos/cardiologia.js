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
        }

];

window.BANCO_CARDIOLOGIA = BANCO_CARDIOLOGIA;
