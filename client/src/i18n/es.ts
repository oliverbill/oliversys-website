/**
 * Spanish (Castilian / ES) locale strings.
 * Register: "usted" on formal CTAs and service descriptions; "tú" only in informal microcopy.
 * Tier 1, Tier 2, spot-check, Red Flag Scan, Full TDD son nombres de producto — no se traducen.
 */
import type { Translations } from "./en";

export const es: Translations = {
  meta: {
    title: "Oliversys | Due Diligence Técnica para M&A y Capital Riesgo",
    description:
      "Due Diligence de Software independiente para inversores europeos y asesores jurídicos de M&A. Convierta evidencia técnica en una visión clara de la operación.",
    ogTitle: "Oliversys | Convicción técnica antes de la exposición transaccional",
    ogDescription: "Evidencia técnica independiente para decisiones de inversión de peso.",
  },

  nav: {
    approach: "Enfoque",
    forInvestors: "Para inversores",
    forCounsel: "Para asesoría",
    spotCheck: "Spot Check de 4h",
    redFlagScan: "Red Flag Scan",
    fullTDD: "Full TDD",
    about: "Acerca de",
    blog: "Blog",
    services: "Servicios",
    requestReview: "Solicitar revisión técnica",
    openReview: "Abrir una revisión confidencial",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    primaryNav: "Navegación principal",
    mobileNav: "Navegación móvil",
  },

  langSwitcher: {
    label: "Idioma",
    en: "EN",
    pt: "PT",
    es: "ES",
  },

  contact: {
    triggerDefault: "Reservar una llamada confidencial",
    dialogTitle: "Contactar con el fundador",
    dialogDescription:
      "Elija el canal que más le convenga — ambos llegan directamente a Oliversys.",
    emailButton: "Enviar e-mail",
    whatsappButton: "WhatsApp",
    namePlaceholder: "Su nombre",
    nameLabel: "Su nombre",
    companyPlaceholder: "Nombre de la empresa",
    companyLabel: "Nombre de la empresa",
    emailPlaceholder: "Su e-mail",
    emailLabel: "Su e-mail",
    messagePlaceholder: "Contexto breve (opcional)",
    messageLabel: "Mensaje (opcional)",
    backButton: "Volver",
    sendButton: "Enviar",
    sendingButton: "Enviando\u2026",
    successMessage: "Gracias — nos pondremos en contacto brevemente.",
    closeButton: "Cerrar",
    errorInvalidEmail: "Por favor, introduzca una dirección de e-mail válida.",
    errorSendFailed: "No se pudo enviar — inténtelo de nuevo o use WhatsApp.",
    gdprNote: "Sus datos se utilizan únicamente para responder a su consulta. Consulte nuestra",
    gdprLinkText: "política de privacidad",
  },

  footer: {
    tagline: "Evidencia técnica independiente para decisiones de inversión de peso.",
    scopeLabel: "Alcance",
    ventureInvestors: "Inversores de capital riesgo",
    maCounsel: "Asesores jurídicos de M&A",
    diligenceApproach: "Enfoque de due diligence",
    spotCheckFull: "Spot Check de 4h",
    redFlagScanFull: "Red Flag Scan (Tier 1)",
    fullTDDFull: "Full TDD (Tier 2)",
    copyright: "\u00a9 {year} Oliversys. Confidencial por defecto.",
    tagline2: "Due diligence técnica \u00b7 M\u0026A \u00b7 Capital riesgo",
    contactLabel: "Contacto",
  },

  shared: {
    confidentialIntroEyebrow: "Introducción confidencial",
    callDefaultTitle: "Ponga el objetivo bajo revisión.",
    callDefaultCopy:
      "Involúcrenos antes de que la incertidumbre técnica se convierta en exposición transaccional. Definiremos el alcance de la decisión, la evidencia necesaria y el nivel adecuado de revisión.",
    callDefaultButton: "Abrir una revisión confidencial",
    confidentialNote: "Alcance y calendario acordados en función de su operación.",
  },

  home: {
    heroEyebrow: "Due Diligence de Software Independiente",
    heroHeadline: "Convicción técnica antes de la",
    heroHeadlineItalic: "exposición transaccional.",
    heroLede:
      "Oliversys transforma evidencia compleja de producto, ingeniería y arquitectura en una visión clara de la operación — para inversores europeos y asesores jurídicos de M&A.",
    heroCtaPrimary: "Reservar una llamada confidencial",
    heroCtaSecondary: "Ver cómo realizamos las revisiones",
    heroScrollCue: "Seguir la evidencia",
    dealFile: "EXPEDIENTE / TÉCNICO",
    euConfidential: "EU \u00b7 CONFIDENCIAL",
    dossierEvidence: "Evidencia",
    dossierEvidenceSub: "Arquitectura \u00b7 Producto \u00b7 Equipo",
    dossierConsequence: "Consecuencia",
    dossierConsequenceSub: "Riesgo \u00b7 Coste \u00b7 Impacto en la operación",
    dossierDecision: "Decisión",
    dossierDecisionSub: "Avanzar \u00b7 Negociar \u00b7 Proteger",
    exposureEyebrow: "La exposición",
    exposureH2: "La responsabilidad técnica recae a menudo sobre quien menos puede absorber un error.",
    exposureLead:
      "Cuando un fondo no dispone de capacidad técnica interna, la due diligence de producto e ingeniería puede convertirse en un flujo de trabajo adicional para el equipo de transacción. Las preguntas son especializadas. Las consecuencias, no.",
    exposureBody:
      "Oliversys aporta una visión independiente suficientemente específica para los operadores y suficientemente clara para un comité de inversión o un equipo jurídico.",
    riskArchitecture: "Arquitectura",
    riskArchitectureCopy: "¿Puede el sistema soportar la siguiente fase de crecimiento?",
    riskExecution: "Ejecución",
    riskExecutionCopy: "¿Puede este equipo entregar lo que el plan asume?",
    riskExposure: "Exposición",
    riskExposureCopy: "¿Qué riesgo, coste o dependencia se transfiere con la operación?",
    visualEyebrow: "Lo que cambia Oliversys",
    visualH2: "No más detalle técnico. Una mejor decisión de inversión.",
    figCaption: "FIG. 01 \u00b7 RIESGO ESTRUCTURAL OCULTO",
    outcome1: "Traducir hallazgos en consecuencias transaccionales",
    outcome2: "Separar deuda técnica manejable de riesgo estructural",
    outcome3: "Exponer supuestos antes de que se consoliden en la valoración",
    outcome4: "Dar a asesores e inversores una visión técnica defendible",
    examineApproach: "Examinar el enfoque",
    audienceEyebrow: "Construido en torno al equipo de transacción",
    audienceKicker: "02 / A QUIÉN APOYAMOS",
    vcEyebrow: "Capital riesgo",
    vcH3: "Para directores de inversión y responsables de la decisión técnica.",
    vcBody:
      "Integre una visión técnica independiente en las decisiones de seed y Serie A sin crear una función interna de due diligence.",
    vcLink: "Para inversores",
    legalEyebrow: "Colaboraciones jurídicas",
    legalH3: "Para abogados de M&A que necesitan evidencia técnica al servicio del asesoramiento.",
    legalBody:
      "Añada un flujo técnico especializado que complemente la due diligence jurídica y mantenga los hallazgos vinculados al riesgo transaccional.",
    legalLink: "Para asesores jurídicos",
    outputEyebrow: "El resultado",
    outputH2: "Evidencia que recorre el camino de la sala técnica a la sala de decisión.",
    outputBody:
      "Cada revisión se organiza en torno a la decisión que tiene delante. Los hallazgos se priorizan por gravedad, confianza y relevancia para la operación — no están enterrados en una lista de verificación genérica.",
    outputItem1: "Mapa de riesgo ejecutivo",
    outputItem2: "Hallazgos respaldados por evidencia",
    outputItem3: "Implicaciones transaccionales",
    outputItem4: "Prioridades post-cierre",
    evidenceStamp: "LISTO PARA DECISIÓN / TRAZABLE / DIRECTO",
    crossReviewLabel: "Mandato de revisión",
    crossReviewTitle: "Para inversores",
    crossPartnerLabel: "Mandato de asociación",
    crossPartnerTitle: "Para asesores de M\u0026A",
    callButton: "Poner el objetivo bajo revisión",
  },

  investors: {
    introEyebrow: "Para inversores de capital riesgo",
    introTitle: "Sostenga la tesis\u2014sin los puntos",
    introItalic: "ciegos técnicos.",
    introCopy:
      "Due diligence técnica independiente para decisiones de seed y Serie A cuando el equipo de inversión no dispone de capacidad técnica dedicada.",
    problemEyebrow: "El momento de exposición",
    problemH2: "Puede entender la empresa y aun así necesitar una visión especializada de lo que la sostiene.",
    risk1: "La arquitectura parece creíble, pero sus límites son difíciles de evaluar desde fuera.",
    risk2: "El roadmap apoya la tesis, pero la capacidad de entrega y el coste técnico siguen siendo supuestos.",
    risk3: "El equipo responde bien, pero la evidencia no se ha conectado de forma independiente a las consecuencias de la operación.",
    mandateEyebrow: "El mandato Oliversys",
    mandateH2: "Una extensión del equipo de transacción\u2014sin añadir una función permanente.",
    mandateBody:
      "Interrogamos los supuestos técnicos que subyacen al caso de inversión y transformamos el resultado en una visión lista para la decisión.",
    check1: "Desafío independiente a la narrativa técnica de la dirección",
    check2: "Distinción clara entre deuda técnica subsanable y riesgo estructural",
    check3: "Implicaciones para el crecimiento, el coste, el calendario y las dependencias clave",
    check4: "Briefing directo para el equipo de transacción y el comité de inversión",
    questionsEyebrow: "Preguntas que la revisión debe resolver",
    questionsKicker: "CI / VISIÓN TÉCNICA",
    q1: "¿Puede la plataforma actual soportar la siguiente fase del plan?",
    q2: "¿Qué coste técnico falta en el modelo financiero?",
    q3: "¿Dónde depende la ejecución de una sola persona o proveedor?",
    q4: "¿Qué debería cambiar en el precio, la protección o los primeros 100 días?",
    seeEvidence: "Ver cómo se construye la evidencia",
    callTitle: "Lleve convicción técnica al comité de inversión.",
    callCopy:
      "Comparta la tesis, la fase y dónde reside la incertidumbre. Oliversys definirá un alcance de due diligence proporcional a la decisión.",
    callButton: "Desafiar la tesis técnica",
  },

  counsel: {
    introEyebrow: "Para asesores jurídicos de M\u0026A",
    introTitle: "Un flujo técnico que fortalece al",
    introItalic: "equipo de transacción.",
    introCopy:
      "Oliversys colabora con despachos de abogados para identificar riesgo técnico, conectarlo a las consecuencias transaccionales y mantener el flujo de trabajo claro para asesores y clientes.",
    partnerEyebrow: "Un socio especializado",
    partnerH2: "Evidencia técnica que complementa la due diligence jurídica.",
    partnerLead:
      "El software, la infraestructura, los datos y las prácticas de ingeniería pueden crear obligaciones y exposición que no caben en una lista de verificación jurídica.",
    dealAwareTitle: "Consciente de la operación",
    dealAwareCopy:
      "El alcance, los informes y el escalado se alinean con el calendario transaccional y el umbral de materialidad.",
    traceableTitle: "Trazable",
    traceableCopy:
      "Los hallazgos muestran la evidencia de apoyo, el nivel de confianza y la relevancia práctica para la transacción.",
    clearTitle: "Fácil de gestionar",
    clearCopy:
      "La comunicación es directa, discreta y estructurada para encajar en el proceso de due diligence más amplio.",
    partnershipEyebrow: "Modelo de colaboración",
    partnershipKicker: "ASESOR / CLIENTE / OLIVERSYS",
    alignTitle: "Alinear",
    alignCopy:
      "Confirmar el contexto transaccional, las consideraciones de privilegio, las interfaces y las vías de escalado con el asesor.",
    reviewTitle: "Revisar",
    reviewCopy:
      "Ejecutar el flujo técnico acordado con acceso controlado y comunicación de progreso concisa.",
    connectTitle: "Conectar",
    connectCopy:
      "Relacionar los hallazgos con los mecanismos de la operación, garantías, remediación o prioridades post-cierre para que el asesor las evalúe.",
    fitEyebrow: "Dónde encaja Oliversys",
    fitH2: "Involúcrenos donde la tecnología del objetivo es material para el valor o la ejecución.",
    fit1: "Adquisiciones e inversiones lideradas por software",
    fit2: "Segregaciones tecnológicas y planificación de integración",
    fit3: "Preocupaciones sobre plataforma, datos, seguridad o escalabilidad",
    fit4: "Organizaciones de ingeniería dependientes del fundador",
    reviewMethod: "Revisar el método de due diligence",
    callTitle: "Añada un socio técnico al expediente.",
    callCopy:
      "Comience con una conversación de alcance confidencial. Oliversys adaptará la revisión técnica a la transacción, el proceso del asesor y la decisión del cliente.",
    callButton: "Abrir un flujo técnico",
  },

  about: {
    introEyebrow: "Acerca de Oliversys",
    introTitle: "Independiente por diseño. Responsable ante la",
    introItalic: "evidencia.",
    introCopy:
      "Oliversys es una práctica de Due Diligence de Software con foco en Portugal y alcance europeo, al servicio de inversores de capital riesgo y equipos de M&A.",
    artifactSpan: "OLIVERSYS / PORTUGAL \u00b7 EUROPA",
    whyEyebrow: "Por qué Oliversys",
    whyH2: "Una visión técnica clara, construida fuera del impulso de la operación.",
    whyLead:
      "Oliversys es una práctica unipersonal de due diligence técnica para capital riesgo ibérico y M&A en fase temprana, gestionada por William Alves desde Coimbra, Portugal, a través de una Sociedade Unipessoal por Quotas portuguesa. Existe para llenar un vacío de mercado que las firmas de TDD tradicionales no pueden cubrir: una lectura de ingeniero sénior sobre el repositorio de una empresa objetivo, por debajo de \u20ac10k y entregada en horas o días, para los tickets de seed y Serie A (\u20ac500k\u2013\u20ac3M) donde el modelo incumbente de cinco personas, tres a cuatro semanas y \u20ac25\u2013\u20ac80k no encaja en la matemática de la ronda.",
    whyBody:
      "Oliversys existe para mantener ese trabajo independiente. Examinamos lo que sustenta la tesis, lo que puede condicionarla y lo que el equipo de transacción debe hacer con la evidencia.",
    principlesEyebrow: "Principios operativos",
    principlesKicker: "CÓMO TRABAJAMOS",
    p1Title: "Material sobre exhaustivo",
    p1Copy:
      "La profundidad sigue la relevancia para la decisión. No confundimos una lista de verificación más larga con un mejor resultado de due diligence.",
    p2Title: "Directo sobre dramático",
    p2Copy:
      "El riesgo técnico se expone con claridad, proporción y contexto. Sin hallazgos basados en el miedo. Sin falso consuelo.",
    p3Title: "Evidencia sobre instinto",
    p3Copy:
      "Las opiniones son trazables a lo que se inspeccionó, discutió y probó\u2014y son explícitas sobre la incertidumbre restante.",
    p4Title: "Discreto por defecto",
    p4Copy:
      "El acceso a la información, la comunicación y los informes se tratan con el cuidado esperado en una transacción en curso.",
    positionEyebrow: "Nuestra posición",
    positionQuote: "\u201cConozca lo que la tecnología puede soportar\u2014antes de que la operación tenga que hacerlo.\u201d",
    positionBody:
      "Evidencia técnica independiente para inversores que toman decisiones en fase temprana y asesores jurídicos que gestionan transacciones lideradas por tecnología en toda Europa.",
    callTitle: "Empiece por la decisión que tiene delante.",
    callButton: "Enmarcar la decisión",
  },

  approach: {
    introEyebrow: "Enfoque de due diligence",
    introTitle: "Siga la evidencia hasta la",
    introItalic: "decisión.",
    introCopy:
      "Una revisión Oliversys se delimita por la materialidad. La profundidad técnica no es el objetivo final; una visión transaccional defendible sí lo es.",
    phasesEyebrow: "Una revisión orientada a la decisión",
    phasesKicker: "MANDATO / 04 FASES",
    phase1Title: "Enmarcar la decisión",
    phase1Copy:
      "Alinear el alcance con la tesis transaccional, la fase, los supuestos materiales y el calendario de decisión. La revisión comienza por lo que podría cambiar la operación\u2014no por una lista de verificación fija.",
    phase1Meta: "Tesis \u00b7 Alcance \u00b7 Materialidad",
    phase2Title: "Inspeccionar la evidencia",
    phase2Copy:
      "Revisar el producto, la arquitectura, el repositorio, las prácticas de ingeniería, la postura de seguridad, las dependencias de datos, el equipo y el roadmap con la profundidad que el mandato requiere.",
    phase2Meta: "Documentos \u00b7 Sistemas \u00b7 Entrevistas",
    phase3Title: "Cuestionar el plan",
    phase3Copy:
      "Verificar si la realidad técnica actual puede soportar el plan comercial. Identificar dependencias ocultas, restricciones de entrega y costes que puedan estar fuera del modelo.",
    phase3Meta: "Capacidad \u00b7 Coste \u00b7 Restricción",
    phase4Title: "Resolver la visión de la operación",
    phase4Copy:
      "Entregar hallazgos directos, implicaciones transaccionales y una visión post-cierre priorizada. Informar al equipo de transacción para que la incertidumbre sea explícita y las decisiones sigan siendo responsables.",
    phase4Meta: "Hallazgos \u00b7 Implicaciones \u00b7 Prioridades",
    scopeEyebrow: "Superficie de revisión",
    scopeH2: "Amplia para detectar la dependencia. Enfocada para proteger el calendario.",
    figCaption: "FIG. 02 / CAMINO DE LA EVIDENCIA",
    scope1: "Realismo del producto y roadmap",
    scope2: "Arquitectura y escalabilidad",
    scope3: "Salud del repositorio e ingeniería",
    scope4: "Seguridad, datos y resiliencia",
    scope5: "Capacidad del equipo y riesgo de persona clave",
    scope6: "Modelo de entrega y coste técnico",
    scope7: "Dependencia de terceros y plataforma",
    scope8: "Integración y prioridades post-cierre",
    deliverableEyebrow: "Lo que llega a la sala",
    deliverableH2: "Un informe construido para ser utilizado, no archivado.",
    del1Title: "Visión ejecutiva de la operación",
    del1Copy: "Los hechos técnicos más relevantes, expuestos directamente.",
    del2Title: "Hallazgos priorizados",
    del2Copy: "Gravedad, evidencia, confianza e implicación práctica.",
    del3Title: "Ruta de acción",
    del3Copy: "Preguntas para la operación, protecciones a considerar y prioridades post-cierre.",
    seeInvestorMandate: "Ver el mandato para inversores",
    callButton: "Definir el alcance de la revisión",
  },

  tier1: {
    heroEyebrow: "Tier 1 \u00b7 Due Diligence Técnica",
    heroH1a: "Red Flag Scan \u2014 una lectura técnica pre-transaccional,",
    heroH1em: "entregada en 3\u20135 días hábiles.",
    heroAside:
      "Hasta 5 repositorios, análisis con una entrevista. Un informe firmado de 10\u201315 páginas más una recomendación Avanzar / Precaución / No Avanzar. Diseñado para comités de inversión de seed y Serie A donde una red flag bloquea el term sheet.",
    slaNote:
      "Aplicable a un agregado de hasta 5 repositorios con hasta 200.000 líneas de código (excluyendo comentarios), 20.000 commits en el historial de Git, 500 dependencias agregadas (directas + transitivas) y 3 lenguajes primarios, con build reproducible en máquina limpia en hasta 15 minutos.",
    slaWarning:
      "Los objetivos que superen cualquiera de estos umbrales se presupuestan por separado tras una scoping call.",
    whatEyebrow: "En qué consiste este compromiso",
    whatKicker: "ALCANCE / DOS FASES",
    whatH1: "Hasta 5 repositorios. Dos fases. Cada hallazgo cita archivo y línea.",
    phase1Title: "Fase 1 \u2014 Ejecución del pipeline (día 1\u20132)",
    phase1Copy:
      "Un pipeline de análisis con 13 competencias se ejecuta contra los repositorios objetivo fijados en un commit hash específico. Cada hallazgo cita archivo y línea. Los hallazgos se clasifican por gravedad y se vinculan a la preocupación declarada por el comprador.",
    phase2Title: "Fase 2 \u2014 Entrevista y síntesis (día 3\u20135)",
    phase2Copy:
      "Una entrevista de 90 minutos con el Fundador o Director Técnico del objetivo, con preguntas calibradas según lo que el pipeline reveló. La transcripción se sintetiza en una narrativa escrita que identifica los riesgos técnicos específicos frente a la tesis de la operación.",
    assessedEyebrow: "Qué se evalúa",
    assessedKicker: "PIPELINE DE 13 COMPETENCIAS",
    skillRepoForensics: "Forense del repositorio",
    skillRepoForensicsDetail:
      "Bus factor, cuota del principal contribuidor, tendencia de velocidad, clasificación de dormancia, análisis de hotspots por archivo.",
    skillTestPosture: "Postura de pruebas",
    skillTestPostureDetail:
      "Ejecución real de cobertura (no heurística), densidad de aserciones, detección de framework de pruebas, configuración de integración continua.",
    skillCodeQuality: "Calidad del código",
    skillCodeQualityDetail:
      "Total de líneas de código por lenguaje, complejidad agregada, densidad de TODO / FIXME.",
    skillMaintainability: "Mantenibilidad",
    skillMaintainabilityDetail:
      "Complejidad ciclomática por función, ratio de duplicación de código (vía PMD Copy/Paste Detector), ratio sintético de deuda técnica, top de funciones hotspot con archivo y línea.",
    skillScalability: "Postura de escalabilidad",
    skillScalabilityDetail:
      "Presencia de patrones asíncronos, caché distribuida, sistemas de colas, rate limiting, configuración de autoescalado, artefactos de load testing.",
    skillAI: "Superficie de inteligencia artificial",
    skillAIDetail:
      "Bibliotecas cliente de proveedores, call sites de modelos, vector stores, activos de prompts, presencia de harness de evaluación \u2014 la señal más fuerte que separa los productos de machine learning reales del AI-washing.",
    skillOps: "Preparación operacional",
    skillOpsDetail:
      "Especificaciones de API, declaraciones de despliegue, infraestructura como código, integración de monitorización, endpoints de health-check, runbooks.",
    skillDeps: "Riesgo de dependencias",
    skillDepsDetail:
      "Vulnerabilidades conocidas vía Trivy contra una base de datos actualizada en las últimas 48 horas, configuraciones incorrectas, elementos más explotables.",
    skillCreds: "Credenciales",
    skillCredsDetail:
      "Análisis de patrones vía Gitleaks + verificación en tiempo real vía Trufflehog \u2014 positivos verificados distinguidos de ejemplos de documentación y tokens caducados.",
    skillLicense: "Exposición de licencias",
    skillLicenseDetail:
      "Software Bill of Materials completo vía Syft, clasificación en categorías permisiva / copyleft débil / copyleft fuerte / comercialmente restringida, minas de licencias virales identificadas.",
    skillStatic: "Análisis estático",
    skillStaticDetail:
      "Semgrep contra un conjunto de reglas apropiado para el lenguaje, más paquetes de reglas regionales personalizados.",
    timelineEyebrow: "Cronograma estimado",
    timelineKicker: "3\u20135 DÍAS HÁBILES",
    tl0Day: "Día 0",
    tl0Action:
      "Acceso al repositorio, formulario de intake con tres campos (tesis de inversión, preocupación principal, fecha de decisión), commit hash fijado.",
    tl12Day: "Día 1\u20132",
    tl12Action:
      "Ejecución completa del pipeline de 13 competencias contra el commit fijado. Cada hallazgo cita archivo, línea y commit hash.",
    tl3Day: "Día 3",
    tl3Action: "Entrevista de 90 minutos con el Fundador o Director Técnico del objetivo.",
    tl4Day: "Día 4",
    tl4Action:
      "Validación por el analista: lectura de todos los hallazgos de alta gravedad, muestra del 20\u2009% de los de media gravedad, lectura de los top 10 archivos hotspot por frecuencia de cambio.",
    tl5Day: "Día 5",
    tl5Action: "Finalización del informe, firma del analista, entrega al fondo.",
    delivery:
      "Entrega: informe PDF firmado de 10\u201315 páginas más artefactos de apoyo, entregados directamente al fondo.",
    interviewsEyebrow: "Entrevistas",
    interviewsKicker: "UNA SESIÓN DE 90 MINUTOS",
    interviewRole: "Rol requerido:",
    interviewRoleDetail:
      "Fundador o Director Técnico del objetivo \u2014 alguien que pueda hablar tanto de decisiones de arquitectura como de planes de contratación.",
    interviewFormat: "Formato:",
    interviewFormatDetail:
      "videollamada, grabada con el consentimiento del entrevistado para precisión de las notas.",
    interviewFormatNote:
      "La presencia presencial puede negociarse con gastos a cargo del cliente.",
    interviewDuration: "Duración:",
    interviewDurationDetail:
      "90 minutos, con preguntas generadas a partir de los hallazgos del pipeline \u2014 no una lista de verificación genérica.",
    whatReachesEyebrow: "Qué llega al fondo",
    whatReachesH2: "Una opinión firmada \u2014 no un resumen generado automáticamente.",
    del1Title: "Recomendación Avanzar / Precaución / No Avanzar",
    del1Copy:
      "Destilada del cuadro de riesgo agregado de todas las secciones del pipeline, calibrada frente a la preocupación declarada por el comprador. La recomendación es la opinión del analista, informada por el pipeline \u2014 no está automatizada.",
    del2Title: "Hallazgos reproducibles",
    del2Copy:
      "Cada informe cita la versión exacta del rubric, el commit hash y el commit del objetivo fijado. Cualquier hallazgo puede regenerarse seis meses después haciendo checkout de la etiqueta del compromiso y volviendo a ejecutar el pipeline. Base para defender el informe ante una impugnación.",
    tier1FitsEyebrow: "Cuándo es adecuado el Tier 1",
    tier1FitsH2: "Decisiones de seed a Serie A con una tesis técnica.",
    tier1FitsCopy:
      "La tesis de inversión es técnica \u2014 el product-market fit está comprendido, pero el comprador necesita saber si el código puede cumplir con el roadmap. El fondo no dispone de un socio técnico capaz de pasar una semana en el repositorio del objetivo. El calendario es de 5 días hábiles o más antes de la firma del term sheet.",
    tier2EyebrowWhen: "Cuándo considerar el Tier 2",
    tier2H2When: "Algunas situaciones requieren un alcance más amplio.",
    tier2CopyWhen:
      "El objetivo tiene más de 5 repositorios. La tesis de la operación depende de que una afirmación específica sobre IA sea verificablemente cierta. El fondo está comprometiendo capital significativamente mayor. La operación es una adquisición corporativa en lugar de una ronda de growth equity.",
    seeTier2: "Ver Tier 2 \u2014 Full Technical Due Diligence",
    tier2SlaNote: "Sujeto a límites de repositorio. Ver nota en la página del Tier 1.",
    spotCheckBackLink: "\u00bfTodav\u00eda no est\u00e1 seguro? Empiece con el Spot Check de 4h \u2192",
    callTitle: "Definir el alcance de un Red Flag Scan.",
    callCopy:
      "Comparta el objetivo, la tesis y la fecha de decisión. Oliversys confirmará alcance, intake y plazo de entrega en un día hábil.",
    callButton: "Solicitar una scoping call",
  },

  tier2: {
    heroEyebrow: "Tier 2 \u00b7 Due Diligence Técnica",
    heroH1: "Full Technical Due Diligence \u2014 alcance completo,",
    heroH1em: "entregada en 7\u201310 días hábiles.",
    heroAside:
      "Alcance multi-repositorio. Verificación de afirmaciones sobre IA. Rastreo completo de arquitectura. Análisis de escalabilidad y coste de infraestructura. Viabilidad del roadmap frente a la capacidad del equipo. Un informe firmado de 30\u201340 páginas más un deck de 20 diapositivas para el Comité de Inversión \u2014 listo para una reunión de decisión de 1 hora.",
    slaNote:
      "Aplicable a un agregado de hasta 10 repositorios, 500.000 líneas de código (excluyendo comentarios), 100.000 commits en el historial de Git, 1.500 dependencias agregadas y 5 lenguajes primarios, con build reproducible en máquina limpia en hasta 30 minutos.",
    slaWarning:
      "Los objetivos que superen cualquiera de estos umbrales se presupuestan por separado tras una scoping call.",
    whatEyebrow: "En qué consiste este compromiso",
    whatKicker: "ALCANCE / TRES FASES",
    whatH1: "Alcance completo. Multi-repositorio. Listo para el Comité de Inversión.",
    whatBody:
      "El compromiso de Full Technical Due Diligence ejecuta el pipeline de 13 competencias en todos los repositorios definidos en el alcance, fijados en commit hashes específicos. Dos a tres entrevistas con el liderazgo de ingeniería del objetivo se destilan en una sección de narrativa nominativa del informe. Un rastreo completo de arquitectura, verificación de afirmaciones sobre IA y lectura de viabilidad del roadmap completan el cuadro.",
    phase1Title: "Fase 1 \u2014 Ejecución del pipeline (día 1\u20133)",
    phase1Copy:
      "El pipeline de análisis de 13 competencias se ejecuta contra todos los repositorios definidos en el alcance, fijados en commit hashes específicos. Cada hallazgo cita archivo, línea y repositorio.",
    phase2Title: "Fase 2 \u2014 Entrevistas (día 4\u20136)",
    phase2Copy:
      "Dos a tres entrevistas con el liderazgo de ingeniería del objetivo, calibradas según lo que el pipeline reveló. Transcripciones sintetizadas en una sección de narrativa nominativa del informe.",
    phase3Title: "Fase 3 \u2014 Síntesis y readout del CI (día 7\u201310)",
    phase3Copy:
      "Rastreo completo de arquitectura, cotejo de afirmaciones sobre IA, análisis de coste de escalabilidad, lectura de viabilidad del roadmap y preparación del deck de readout para el Comité de Inversión. Informe firmado y entregado.",
    assessedEyebrow: "Qué se evalúa",
    assessedKicker: "TODO LO DEL TIER 1, MÁS",
    assessedIntro:
      "El Tier 2 cubre el pipeline completo de 13 competencias que se ejecuta en un Red Flag Scan Tier 1, y añade las siguientes dimensiones:",
    add1Title: "Rastreo completo de arquitectura",
    add1Detail:
      "El analista lee el diagrama de arquitectura frente a una ruta crítica específica en el código \u2014 facturación, autenticación o la funcionalidad load-bearing de la tesis de la operación \u2014 verifica que el diagrama coincide con la realidad e identifica los riesgos introducidos por el delta. Escrito como sección del informe; no automatizable.",
    add2Title: "Verificación de afirmaciones sobre inteligencia artificial",
    add2Detail:
      "Cada afirmación del pitch sobre el comportamiento del modelo se cruza con los call sites reales del modelo en el código, harnesses de evaluación si los hay, y respuestas de las entrevistas. Distingue productos de IA genuinos del AI-washing.",
    add3Title: "Análisis de escalabilidad + coste de infraestructura",
    add3Detail:
      "Coste proyectado por unidad de crecimiento dada la arquitectura actual. Identifica los componentes específicos que deberán cambiar primero cuando el tráfico crezca 10x, y el coste de esos cambios en horas de ingeniero y gasto en cloud.",
    add4Title: "Viabilidad del roadmap frente a la capacidad del equipo",
    add4Detail:
      "Lee el roadmap declarado del objetivo frente al headcount actual del equipo, la mezcla de seniority y el plan de contratación. Identifica los elementos del roadmap que están estructuralmente infradotados.",
    add5Title: "Síntesis de entrevistas (2\u20133 sesiones)",
    add5Detail:
      "Destilada en una narrativa escrita que identifica quién gestiona qué, quién es responsable de qué y dónde se sitúan los puntos de apalancamiento \u2014 no citas directas.",
    add6Title: "Apéndice de readout para el Comité de Inversión",
    add6Detail:
      "Un deck de 20 diapositivas diseñado para una llamada del Comité de Inversión de 1 hora. Contiene la recomendación, los top 5 hallazgos clasificados por relevancia transaccional y un conjunto de próximos pasos listos para la decisión.",
    seeFullList: "Para la lista completa de competencias base del pipeline, consulte la",
    seeTier1Link: "página del Tier 1 Red Flag Scan",
    timelineEyebrow: "Cronograma estimado",
    timelineKicker: "7\u201310 DÍAS HÁBILES",
    tl0Day: "Día 0",
    tl0Action:
      "Acceso al repositorio para todos los repos en el alcance, formulario de intake con tres campos, commit hashes fijados.",
    tl13Day: "Día 1\u20133",
    tl13Action:
      "Ejecución completa del pipeline de 13 competencias contra todos los commits fijados. El alcance multi-repo se gestiona a nivel del orquestador; los manifiestos por repositorio se consolidan en un único entregable.",
    tl4Day: "Día 4",
    tl4Action:
      "Primera entrevista: Fundador o Director Técnico del objetivo (90 minutos \u2014 arquitectura + roadmap).",
    tl5Day: "Día 5",
    tl5Action:
      "Segunda entrevista: Head de Ingeniería o Tech Lead del objetivo (60\u201390 minutos \u2014 ejecución diaria + contratación).",
    tl6Day: "Día 6",
    tl6Action:
      "Tercera entrevista opcional: ingeniero sénior o Head de Operaciones (60 minutos \u2014 despliegue + fiabilidad + postura de on-call).",
    tl79Day: "Día 7\u20139",
    tl79Action:
      "Validación por el analista: lectura de todos los hallazgos de alta y media gravedad, rastreo completo de arquitectura, todas las transcripciones de entrevistas, cotejo de afirmaciones sobre IA. Estimación de 8\u201312 horas de tiempo de analista.",
    tl10Day: "Día 10",
    tl10Action:
      "Finalización del informe, preparación del deck de readout para el Comité de Inversión, firma del analista, entrega al fondo.",
    delivery:
      "Entrega: informe PDF firmado de 30\u201340 páginas + deck de readout para el Comité de Inversión (20 diapositivas), entregados directamente al fondo.",
    interviewsEyebrow: "Entrevistas",
    interviewsKicker: "2\u20133 SESIONES CON EL LIDERAZGO DE INGENIERÍA",
    roleRequired: "REQUERIDO",
    roleOptional: "OPCIONAL",
    interviewNote:
      "Todas las entrevistas se realizan por videollamada, grabadas con el consentimiento de cada entrevistado para precisión de las notas. La presencia presencial puede negociarse con gastos a cargo del cliente.",
    whatReachesEyebrow: "Qué llega al fondo",
    whatReachesH2: "Informe y deck del CI \u2014 ambos firmados por el analista.",
    del1Title: "Recomendación Avanzar / Precaución / No Avanzar",
    del1Copy:
      "Destilada del cuadro de riesgo agregado en todas las dimensiones, calibrada frente a la preocupación declarada por el comprador y la lectura de viabilidad del roadmap. Presentada como parte del apéndice de readout del Comité de Inversión, lista para la reunión de decisión del fondo.",
    del2Title: "Hallazgos reproducibles por repositorio",
    del2Copy:
      "Cada informe cita la versión del rubric, el commit hash y el commit del objetivo fijado. Los compromisos multi-repo fijan cada repositorio por separado; el orquestador consolida los manifiestos por repo en un único entregable.",
    tier2FitsEyebrow: "Cuándo es adecuado el Tier 2",
    tier2FitsH2: "Serie B y posteriores \u2014 o cuando múltiples afirmaciones técnicas deben ser simultáneamente ciertas.",
    tier2FitsCopy:
      "Rondas de Serie B y posteriores donde la tesis de inversión depende de que múltiples afirmaciones técnicas sean simultáneamente ciertas. Fusiones y adquisiciones corporativas donde un objetivo inadecuado es un evento dañino para el fondo. Adquisiciones de search funds donde el adquirente operará el código tras el cierre. Operaciones con alcance polyrepo o una afirmación sobre IA que debe ser verificablemente cierta. Comités de inversión que desean un deck de readout listo para la decisión entregado con el informe.",
    lighterEyebrow: "¿Busca una lectura de menor alcance?",
    lighterH2: "El Tier 1 cubre un repositorio único en 3\u20135 días hábiles.",
    lighterCopy:
      "Para decisiones de seed y Serie A donde el objetivo es un repositorio único y el calendario es ajustado, el Red Flag Scan entrega un informe firmado y recomendación Avanzar / Precaución / No Avanzar a menor coste y con entrega más rápida.",
    seeTier1: "Ver Tier 1 \u2014 Red Flag Scan",
    tier1SlaNote: "Sujeto a límites de repositorio. Ver nota en la página del Tier 1.",
    interviewRole1: "Fundador o Director Técnico",
    interviewFocus1: "Decisiones de arquitectura, roadmap del producto, plan de contratación.",
    interviewRole2: "Head de Ingeniería o Tech Lead",
    interviewFocus2: "Ejecución diaria, postura de code review, cultura de pruebas.",
    interviewRole3: "Ingeniero sénior o Head de Operaciones",
    interviewFocus3: "Despliegue, on-call, historial de incidentes, postura de fiabilidad.",
    callTitle: "Definir el alcance de un Full Technical Due Diligence.",
    callCopy:
      "Comparta el objetivo, el número de repositorios, la tesis de la operación y la fecha de decisión. Oliversys confirmará alcance, intake y plazo de entrega en un día hábil.",
    callButton: "Solicitar una scoping call",
  },

  spotCheck: {
    heroEyebrow: "Spot Check \u00b7 Triaje de Repositorio",
    heroH1a: "4h Spot Check \u2014 triaje exclusivo de repositorio,",
    heroH1em: "entregado en 4 horas.",
    heroAside:
      "Repositorio único. Sin entrevistas. Sin evaluación de arquitectura. Un informe de una página \u2014 \u201cTechnical Evidence Readiness \u2014 Spot-Check\u201d \u2014 con una señal de escalado y las principales preguntas a resolver. Precio: \u20ac500. Decida si debe encargar un Red Flag Scan o Full Technical Due Diligence antes de comprometerse con un trabajo más profundo.",
    boundaryEyebrow: "Qué es este informe \u2014 y qué no es",
    boundaryBody:
      "Este es un spot-check exclusivo de repositorio. Identifica señales inmediatas a partir de evidencia estática en el repositorio objetivo: vulnerabilidades de dependencias, credenciales en el repositorio, exposición de categorías de licencias y patrones de seguridad a nivel de código. Indica si la evidencia del repositorio es suficiente para una revisión más profunda.",
    boundaryNote:
      "Este informe no concluye sobre: product-market fit, arquitectura de negocio, organización del equipo, afirmaciones sobre inteligencia artificial o modelos, derechos sobre datos, escalabilidad, fiabilidad operacional o idoneidad general para la inversión. La señal en la última página es una recomendación de escalado \u2014 no una recomendación transaccional.",
    whatEyebrow: "En qué consiste este compromiso",
    whatKicker: "ALCANCE / REPOSITORIO \u00danico",
    whatH1: "Un repositorio. Un análisis del analista. Una señal de escalado.",
    step1Title: "Paso 1 \u2014 An\u00e1lisis del repositorio (horas 0\u20133)",
    step1Copy:
      "Un subconjunto específico del pipeline de análisis de 13 competencias se ejecuta contra el repositorio objetivo fijado en un commit hash específico. Categorías evaluadas: vulnerabilidades de dependencias, credenciales, exposición de licencias y patrones de seguridad estáticos. Cada hallazgo cita archivo y línea.",
    step2Title: "Paso 2 \u2014 An\u00e1lisis del analista e informe (horas 3\u20134)",
    step2Copy:
      "El analista lee todos los hallazgos de alta gravedad, valida positivos y redacta el informe de una página \u201cTechnical Evidence Readiness \u2014 Spot-Check\u201d. La señal de escalado es el juicio del analista \u2014 no está automatizada.",
    inScopeEyebrow: "Qué se evalúa",
    inScopeKicker: "CATEGORÍAS INCLUIDAS",
    inScope1Label: "Vulnerabilidades de dependencias",
    inScope1Detail:
      "Vulnerabilidades conocidas vía Trivy contra una base de datos actualizada en las últimas 48 horas. Configuraciones incorrectas y elementos más explotables señalados.",
    inScope2Label: "Credenciales y secretos",
    inScope2Detail:
      "Análisis de patrones vía Gitleaks \u2014 positivos verificados distinguidos de ejemplos de documentación y tokens caducados.",
    inScope3Label: "Exposición de licencias",
    inScope3Detail:
      "Software Bill of Materials vía Syft. Clasificación en categorías permisiva / copyleft débil / copyleft fuerte / comercialmente restringida. Minas de licencias virales identificadas.",
    inScope4Label: "Patrones de seguridad estáticos",
    inScope4Detail:
      "Semgrep contra un conjunto de reglas apropiado para el lenguaje. Clases comunes de inyección, antipatrones de autenticación y uso incorrecto de criptografía.",
    inScope5Label: "Indicadores de salud del repositorio",
    inScope5Detail:
      "Actividad de commits, combinación de lenguajes dominante, líneas de código aproximadas e indicadores estructurales de alto nivel \u2014 contexto suficiente para que el analista acote la confianza.",
    outScopeEyebrow: "Qué no se cubre",
    outScopeKicker: "FUERA DEL ALCANCE EN ESTE NIVEL",
    outScope1: "Entrevistas con el equipo del objetivo \u2014 sin entrevistas en este nivel.",
    outScope2: "Rastreo de arquitectura o evaluación de producto.",
    outScope3: "Ejecución de cobertura de pruebas o análisis profundo de mantenibilidad.",
    outScope4: "Verificación de afirmaciones sobre inteligencia artificial.",
    outScope5: "Escalabilidad, preparación operacional o viabilidad del roadmap.",
    outScopeNote:
      "Cualquiera de los anteriores requiere un Tier 1 Red Flag Scan (3\u20135 días) o un Tier 2 Full Technical Due Diligence (7\u201310 días).",
    timelineEyebrow: "Cronograma estimado",
    timelineKicker: "4 HORAS DESDE EL ACCESO AL REPOSITORIO",
    tl0Day: "Hora 0",
    tl0Action:
      "Acceso al repositorio proporcionado. Intake de campo único: preocupación principal (opcional, pero mejora el enfoque). Commit hash fijado.",
    tl1Day: "Horas 0\u20133",
    tl1Action:
      "Ejecución del pipeline de análisis: vulnerabilidades de dependencias, credenciales, exposición de licencias, patrones de seguridad estáticos. Cada hallazgo cita archivo, línea y commit hash.",
    tl2Day: "Hora 3",
    tl2Action:
      "El analista lee todos los hallazgos. Positivos de alta gravedad validados. Señal de escalado determinada.",
    tl3Day: "Hora 4",
    tl3Action:
      "Informe redactado y entregado: \u201cTechnical Evidence Readiness \u2014 Spot-Check\u201d \u2014 una página, firmado por el analista, con las principales preguntas y la señal de escalado.",
    delivery:
      "Entrega: informe PDF firmado de una página, entregado directamente al comprador en 4 horas tras el acceso al repositorio.",
    delEyebrow: "Qué llega al comprador",
    delH2: "Una página. Tres señales. Firmado por el analista.",
    del1Title: "Informe \u201cTechnical Evidence Readiness \u2014 Spot-Check\u201d",
    del1Copy:
      "Un informe de una página en Markdown y PDF que cubre las categorías evaluadas, las principales preguntas a resolver y el bloque de preparación de evidencia. El título del informe hace inequívoco su alcance \u2014 los compradores no pueden confundirlo con una due diligence completa.",
    del2Title: "Señal de escalado",
    del2Copy:
      "Uno de tres resultados: \u201cSin problemas encontrados\u201d / \u201cAclaración requerida\u201d / \u201cProblemas encontrados \u2014 Revisión completa recomendada.\u201d Es una señal de escalado. No recomienda a favor ni en contra de una transacción.",
    del3Title: "Principales preguntas a resolver",
    del3Copy:
      "Los hallazgos que el analista considera más relevantes, formulados como preguntas para el comprador. Se convierten en el briefing inicial para un compromiso Tier 1 o Tier 2, si se encarga.",
    whenFitsEyebrow: "Cuándo es adecuado el Spot Check",
    whenFitsH2: "Una lectura rápida antes de comprometerse con un trabajo más profundo.",
    whenFitsCopy:
      "Necesita decidir en horas si un repositorio justifica encargar un Red Flag Scan o Full Technical Due Diligence. El objetivo es un repositorio único. Quiere una visión independiente antes de una entrevista con el fundador o Director Técnico. Necesita algo lo suficientemente rápido para informar una primera reunión o una conversación sobre el term sheet.",
    escalateEyebrow: "Próximos pasos si se encuentran problemas",
    escalateH2: "El Spot Check es el inicio de la escalera, no la cima.",
    escalateCopy:
      "Si la señal de escalado es \u201cAclaración requerida\u201d o \u201cProblemas encontrados \u2014 Revisión completa recomendada\u201d, la lista de principales preguntas del Spot Check se convierte en el briefing para el siguiente compromiso. El Red Flag Scan añade entrevistas, profundidad completa del pipeline en las 13 competencias y una recomendación Avanzar / Precaución / No Avanzar. El Full Technical Due Diligence añade rastreo de arquitectura, verificación de afirmaciones sobre inteligencia artificial y un readout para el Comité de Inversión.",
    seeRedFlagScan: "Ver Tier 1 \u2014 Red Flag Scan (3\u20135 días)",
    seeFullTDD: "Ver Tier 2 \u2014 Full Technical Due Diligence (7\u201310 días)",
    callTitle: "Reservar un Spot Check de 4h.",
    callCopy:
      "Comparta el repositorio, el commit que desea revisar y su preocupación principal (opcional). Oliversys confirmará el acceso y entregará en 4 horas.",
    callButton: "Reservar spot check de 4h",
  },

  blog: {
    eyebrow: "Perspectivas",
    heading: "Artículos sobre due diligence técnica.",
    readPost: "Leer",
    noPosts: "Todavía no hay artículos.",
  },

  notFound: {
    eyebrow: "Archivo no encontrado / 404",
    h1: "Este rastro de evidencia termina aquí.",
    body: "La página puede haberse movido, pero el camino de regreso a una decisión técnica más clara está intacto.",
    returnButton: "Volver a Oliversys",
  },
};
