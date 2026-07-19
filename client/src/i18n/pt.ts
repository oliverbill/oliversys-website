/**
 * Portuguese (PT-PT) locale strings — European register.
 * Tier 1, Tier 2, spot-check, Red Flag Scan, Full TDD are product names — não traduzidos.
 * "utilizador" (not "usuário"), "ecrã" (not "tela"), "gestão" (not "gerência").
 */
import type { Translations } from "./en";

export const pt: Translations = {
  meta: {
    title: "Oliversys | Due Diligence Técnica para M&A e Capital de Risco",
    description:
      "Due Diligence de Software independente para investidores europeus e consultores jurídicos de M&A. Transforme evidências técnicas numa visão clara da operação.",
    ogTitle: "Oliversys | Convicção técnica antes da exposição transacional",
    ogDescription: "Evidência técnica independente para decisões de investimento de peso.",
  },

  nav: {
    approach: "Abordagem",
    forInvestors: "Para investidores",
    forCounsel: "Para jurídico",
    spotCheck: "Spot Check de 4h",
    redFlagScan: "Red Flag Scan",
    fullTDD: "Full TDD",
    about: "Sobre",
    blog: "Blog",
    services: "Serviços",
    requestReview: "Solicitar revisão técnica",
    openReview: "Abrir uma revisão confidencial",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    primaryNav: "Navegação principal",
    mobileNav: "Navegação móvel",
  },

  langSwitcher: {
    label: "Idioma",
    en: "EN",
    pt: "PT",
    es: "ES",
  },

  contact: {
    triggerDefault: "Agendar uma chamada confidencial",
    dialogTitle: "Falar com o fundador",
    dialogDescription: "Escolha o canal que lhe é mais conveniente — ambos chegam diretamente à Oliversys.",
    emailButton: "Enviar e-mail",
    whatsappButton: "WhatsApp",
    namePlaceholder: "O seu nome",
    nameLabel: "O seu nome",
    companyPlaceholder: "Nome da empresa",
    companyLabel: "Nome da empresa",
    emailPlaceholder: "O seu e-mail",
    emailLabel: "O seu e-mail",
    messagePlaceholder: "Contexto breve (opcional)",
    messageLabel: "Mensagem (opcional)",
    backButton: "Voltar",
    sendButton: "Enviar",
    sendingButton: "A enviar\u2026",
    successMessage: "Obrigado — entraremos em contacto brevemente.",
    closeButton: "Fechar",
    errorInvalidEmail: "Por favor, introduza um endereço de e-mail válido.",
    errorSendFailed: "Não foi possível enviar — tente novamente ou utilize o WhatsApp.",
    gdprNote: "Os seus dados são utilizados apenas para responder à sua solicitação. Consulte a nossa",
    gdprLinkText: "política de privacidade",
  },

  footer: {
    tagline: "Evidência técnica independente para decisões de investimento de peso.",
    scopeLabel: "Âmbito",
    ventureInvestors: "Investidores de capital de risco",
    maCounsel: "Consultores jurídicos de M&A",
    diligenceApproach: "Abordagem de due diligence",
    spotCheckFull: "Spot Check de 4h",
    redFlagScanFull: "Red Flag Scan (Tier 1)",
    fullTDDFull: "Full TDD (Tier 2)",
    copyright: "\u00a9 {year} Oliversys. Confidencial por predefinição.",
    tagline2: "Due diligence técnica \u00b7 M\u0026A \u00b7 Capital de risco",
    contactLabel: "Contacto",
  },

  shared: {
    confidentialIntroEyebrow: "Introdução confidencial",
    callDefaultTitle: "Coloque o alvo sob revisão.",
    callDefaultCopy:
      "Envolva-nos antes que a incerteza técnica se converta em exposição transacional. Definiremos o âmbito da decisão, as evidências necessárias e o nível adequado de revisão.",
    callDefaultButton: "Abrir uma revisão confidencial",
    confidentialNote: "Âmbito e calendário acordados em função da sua operação.",
  },

  home: {
    heroEyebrow: "Due Diligence de Software Independente",
    heroHeadline: "Convicção técnica antes da",
    heroHeadlineItalic: "exposição transacional.",
    heroLede:
      "A Oliversys transforma evidências complexas de produto, engenharia e arquitetura numa visão clara da operação — para investidores europeus e consultores jurídicos de M&A.",
    heroCtaPrimary: "Agendar uma chamada confidencial",
    heroCtaSecondary: "Ver como fazemos as revisões",
    heroScrollCue: "Acompanhar a evidência",
    dealFile: "DOSSIER / TÉCNICO",
    euConfidential: "EU \u00b7 CONFIDENCIAL",
    dossierEvidence: "Evidência",
    dossierEvidenceSub: "Arquitetura \u00b7 Produto \u00b7 Equipa",
    dossierConsequence: "Consequência",
    dossierConsequenceSub: "Risco \u00b7 Custo \u00b7 Impacto na operação",
    dossierDecision: "Decisão",
    dossierDecisionSub: "Avançar \u00b7 Negociar \u00b7 Proteger",
    exposureEyebrow: "A exposição",
    exposureH2: "A responsabilidade técnica recai muitas vezes sobre quem tem menos condições de a absorver.",
    exposureLead:
      "Quando um fundo não dispõe de capacidade técnica interna, a due diligence de produto e engenharia pode tornar-se um fluxo de trabalho adicional para a equipa de transação. As perguntas são especializadas. As consequências não.",
    exposureBody:
      "A Oliversys fornece uma visão independente suficientemente específica para operadores e suficientemente clara para um comité de investimento ou equipa jurídica.",
    riskArchitecture: "Arquitetura",
    riskArchitectureCopy: "O sistema consegue suportar a próxima fase de crescimento?",
    riskExecution: "Execução",
    riskExecutionCopy: "Esta equipa consegue entregar o que o plano pressupõe?",
    riskExposure: "Exposição",
    riskExposureCopy: "Que risco, custo ou dependência é transferido com a operação?",
    visualEyebrow: "O que a Oliversys muda",
    visualH2: "Não mais detalhe técnico. Uma decisão de investimento mais sólida.",
    figCaption: "FIG. 01 \u00b7 RISCO ESTRUTURAL OCULTO",
    outcome1: "Traduzir conclusões em consequências transacionais",
    outcome2: "Separar dívida técnica gerível de risco estrutural",
    outcome3: "Expor pressupostos antes de se consolidarem na valorização",
    outcome4: "Dar a consultores e investidores uma visão técnica defensável",
    examineApproach: "Examinar a abordagem",
    audienceEyebrow: "Construído em torno da equipa de transação",
    audienceKicker: "02 / QUEM APOIAMOS",
    vcEyebrow: "Capital de risco",
    vcH3: "Para diretores de investimento e responsáveis pela decisão técnica.",
    vcBody:
      "Integre uma visão técnica independente nas decisões de seed e Série A sem criar uma função interna de due diligence.",
    vcLink: "Para investidores",
    legalEyebrow: "Parcerias jurídicas",
    legalH3: "Para advogados de M&A que precisam de evidência técnica ao serviço do parecer jurídico.",
    legalBody:
      "Adicione um fluxo técnico especializado que complementa a due diligence jurídica e mantém as conclusões ligadas ao risco transacional.",
    legalLink: "Para consultores jurídicos",
    outputEyebrow: "O resultado",
    outputH2: "Evidência que percorre o caminho da sala técnica à sala de decisão.",
    outputBody:
      "Cada revisão é organizada em torno da decisão que tem à frente. As conclusões são priorizadas por gravidade, confiança e relevância para a operação — não estão enterradas numa lista de verificação genérica.",
    outputItem1: "Mapa de risco executivo",
    outputItem2: "Conclusões sustentadas por evidência",
    outputItem3: "Implicações transacionais",
    outputItem4: "Prioridades pós-fecho",
    evidenceStamp: "PRONTO PARA DECISÃO / RASTREÁVEL / DIRETO",
    crossReviewLabel: "Mandato de revisão",
    crossReviewTitle: "Para investidores",
    crossPartnerLabel: "Mandato de parceria",
    crossPartnerTitle: "Para consultores de M\u0026A",
    callButton: "Colocar o alvo sob revisão",
    servicesEyebrow: "Os serviços",
    servicesKicker: "03 / TRÊS NÍVEIS",
    spotCheckLabel: "Spot Check de 4h",
    spotCheckDesc: "Triagem apenas do repositório. Uma página. Sinal de escalada em 4 horas \u2014 antes de se comprometer com uma análise mais aprofundada.",
    spotCheckLink: "Ver o Spot Check",
    tier1Label: "Red Flag Scan",
    tier1Desc: "Até 5 repositórios. Pipeline de 13 competências. Go\u202f/\u202fCaution\u202f/\u202fNo-Go assinado em 3\u20135 dias úteis.",
    tier1Link: "Ver o Red Flag Scan",
    tier2Label: "Full Technical Due Diligence",
    tier2Desc: "Multi-repositório. Rastreio de arquitetura. Apresentação ao Investment Committee. Entregue em 7\u201310 dias úteis.",
    tier2Link: "Ver o Full TDD",
  },

  investors: {
    introEyebrow: "Para investidores de capital de risco",
    introTitle: "Sustente a tese\u2014sem os pontos",
    introItalic: "cegos técnicos.",
    introCopy:
      "Due diligence técnica independente para decisões de seed e Série A quando a equipa de investimento não dispõe de capacidade técnica dedicada.",
    problemEyebrow: "O momento de exposição",
    problemH2: "Pode compreender a empresa e ainda assim precisar de uma visão especializada do que a sustenta.",
    risk1: "A arquitetura parece credível, mas os seus limites são difíceis de testar externamente.",
    risk2: "O roadmap apoia a tese, mas a capacidade de entrega e o custo técnico continuam a ser pressupostos.",
    risk3: "A equipa responde bem, mas a evidência ainda não foi ligada de forma independente às consequências da operação.",
    mandateEyebrow: "O mandato Oliversys",
    mandateH2: "Uma extensão da equipa de transação\u2014sem criar uma função permanente.",
    mandateBody:
      "Interrogamos os pressupostos técnicos subjacentes ao caso de investimento e transformamos o resultado numa visão pronta para decisão.",
    check1: "Desafio independente à narrativa técnica da gestão",
    check2: "Distinção clara entre dívida técnica corrigível e risco estrutural",
    check3: "Implicações para crescimento, custo, prazo e dependências críticas",
    check4: "Briefing direto para a equipa de transação e o comité de investimento",
    questionsEyebrow: "Perguntas que a revisão deve resolver",
    questionsKicker: "CI / VISÃO TÉCNICA",
    q1: "A plataforma atual consegue suportar a próxima fase do plano?",
    q2: "Que custo técnico está em falta no modelo financeiro?",
    q3: "Onde é que a execução depende de uma única pessoa ou fornecedor?",
    q4: "O que deve mudar no preço, na proteção ou nos primeiros 100 dias?",
    seeEvidence: "Ver como a evidência é construída",
    callTitle: "Leve convicção técnica ao comité de investimento.",
    callCopy:
      "Partilhe a tese, a fase e onde reside a incerteza. A Oliversys definirá um âmbito de due diligence proporcional à decisão.",
    callButton: "Desafiar a tese técnica",
  },

  counsel: {
    introEyebrow: "Para consultores jurídicos de M\u0026A",
    introTitle: "Um fluxo técnico que fortalece a",
    introItalic: "equipa de transação.",
    introCopy:
      "A Oliversys trabalha com escritórios de advocacia para identificar risco técnico, ligá-lo às consequências transacionais e manter o fluxo de trabalho claro para consultores e clientes.",
    partnerEyebrow: "Um parceiro especializado",
    partnerH2: "Evidência técnica que complementa a due diligence jurídica.",
    partnerLead:
      "Software, infraestrutura, dados e práticas de engenharia podem criar obrigações e exposição que não cabem numa lista de verificação jurídica.",
    dealAwareTitle: "Consciente da operação",
    dealAwareCopy:
      "Âmbito, reporte e escalonamento alinham-se com o calendário transacional e o limiar de materialidade.",
    traceableTitle: "Rastreável",
    traceableCopy:
      "As conclusões apresentam a evidência de suporte, o nível de confiança e a relevância prática para a transação.",
    clearTitle: "Fácil de gerir",
    clearCopy:
      "A comunicação é direta, discreta e estruturada para se integrar no processo de due diligence mais amplo.",
    partnershipEyebrow: "Modelo de parceria",
    partnershipKicker: "CONSULTOR / CLIENTE / OLIVERSYS",
    alignTitle: "Alinhar",
    alignCopy:
      "Confirmar o contexto transacional, considerações de privilégio, interfaces e vias de escalonamento com o consultor.",
    reviewTitle: "Rever",
    reviewCopy:
      "Executar o fluxo técnico acordado com acesso controlado e comunicação de progresso concisa.",
    connectTitle: "Conectar",
    connectCopy:
      "Relacionar conclusões com mecanismos da operação, garantias, remediação ou prioridades pós-fecho para avaliação pelo consultor.",
    fitEyebrow: "Onde a Oliversys se encaixa",
    fitH2: "Envolva-nos onde a tecnologia do alvo é material para o valor ou a execução.",
    fit1: "Aquisições e investimentos liderados por software",
    fit2: "Separações tecnológicas e planeamento de integração",
    fit3: "Preocupações com plataforma, dados, segurança ou escalabilidade",
    fit4: "Organizações de engenharia dependentes do fundador",
    reviewMethod: "Rever o método de due diligence",
    callTitle: "Adicione um parceiro técnico ao processo.",
    callCopy:
      "Comece com uma conversa de enquadramento confidencial. A Oliversys adaptará a revisão técnica à transação, ao processo do consultor e à decisão do cliente.",
    callButton: "Abrir um fluxo técnico",
  },

  about: {
    introEyebrow: "Sobre a Oliversys",
    introTitle: "Independente por design. Responsável perante a",
    introItalic: "evidência.",
    introCopy:
      "A Oliversys é uma prática de Due Diligence de Software focada em Portugal e abrangente a toda a Europa, ao serviço de investidores de capital de risco e equipas de M&A.",
    artifactSpan: "OLIVERSYS / PORTUGAL \u00b7 EUROPA",
    whyEyebrow: "Porquê a Oliversys",
    whyH2: "Uma visão técnica clara, construída fora do momentum da operação.",
    whyLead:
      "A Oliversys é uma prática solo de due diligence técnica para capital de risco ibérico e M&A em fase inicial, gerida por William Alves a partir de Coimbra, Portugal, através de uma Sociedade Unipessoal por Quotas. Existe para preencher uma lacuna de mercado que as firmas de TDD tradicionais não conseguem precificar: uma análise de engenheiro sénior ao repositório de uma empresa-alvo, abaixo de \u20ac10k e entregue em horas a dias, para os tickets de seed e Série A (\u20ac500k\u2013\u20ac3M) onde o modelo incumbente de cinco pessoas, três a quatro semanas e \u20ac25\u2013\u20ac80k não cabe na matemática da ronda.",
    whyBody:
      "A Oliversys existe para manter esse trabalho independente. Examinamos o que sustenta a tese, o que pode condicioná-la e o que a equipa de transação deve fazer com a evidência.",
    principlesEyebrow: "Princípios operacionais",
    principlesKicker: "COMO TRABALHAMOS",
    p1Title: "Material acima de exaustivo",
    p1Copy:
      "A profundidade segue a relevância para a decisão. Não confundimos uma lista de verificação mais longa com um melhor resultado de due diligence.",
    p2Title: "Direto acima de dramático",
    p2Copy:
      "O risco técnico é exposto com clareza, proporção e contexto. Sem conclusões baseadas no medo. Sem falso conforto.",
    p3Title: "Evidência acima de instinto",
    p3Copy:
      "As visões são rastreáveis ao que foi inspecionado, discutido e testado\u2014e explícitas quanto à incerteza remanescente.",
    p4Title: "Discreto por predefinição",
    p4Copy:
      "O acesso à informação, a comunicação e o reporte são tratados com o cuidado esperado numa transação em curso.",
    positionEyebrow: "O nosso posicionamento",
    positionQuote: "\u201cSaiba o que a tecnologia consegue suportar\u2014antes de a operação ter de o fazer.\u201d",
    positionBody:
      "Evidência técnica independente para investidores a tomar decisões em fase inicial e consultores jurídicos a gerir transações lideradas por tecnologia em toda a Europa.",
    callTitle: "Comece pela decisão que tem à frente.",
    callButton: "Enquadrar a decisão",
  },

  approach: {
    introEyebrow: "Abordagem de due diligence",
    introTitle: "Siga a evidência até à",
    introItalic: "decisão.",
    introCopy:
      "Uma revisão Oliversys é delimitada pela materialidade. A profundidade técnica não é o objetivo final; uma visão transacional defensável é.",
    phasesEyebrow: "Uma revisão orientada para a decisão",
    phasesKicker: "MANDATO / 04 FASES",
    phase1Title: "Enquadrar a decisão",
    phase1Copy:
      "Alinhar o âmbito com a tese transacional, a fase, os pressupostos materiais e o calendário de decisão. A revisão começa pelo que poderia mudar a operação\u2014não por uma lista de verificação fixa.",
    phase1Meta: "Tese \u00b7 Âmbito \u00b7 Materialidade",
    phase2Title: "Inspecionar a evidência",
    phase2Copy:
      "Rever o produto, a arquitetura, o repositório, as práticas de engenharia, a postura de segurança, as dependências de dados, a equipa e o roadmap com a profundidade que o mandato exige.",
    phase2Meta: "Documentos \u00b7 Sistemas \u00b7 Entrevistas",
    phase3Title: "Questionar o plano",
    phase3Copy:
      "Testar se a realidade técnica atual consegue suportar o plano comercial. Identificar dependências ocultas, constrangimentos de entrega e custos que possam estar fora do modelo.",
    phase3Meta: "Capacidade \u00b7 Custo \u00b7 Constrangimento",
    phase4Title: "Resolver a visão da operação",
    phase4Copy:
      "Entregar conclusões diretas, implicações transacionais e uma visão pós-fecho priorizada. Fazer o briefing da equipa de transação para que a incerteza seja explícita e as decisões permaneçam responsáveis.",
    phase4Meta: "Conclusões \u00b7 Implicações \u00b7 Prioridades",
    scopeEyebrow: "Superfície de revisão",
    scopeH2: "Abrangente o suficiente para detetar a dependência. Focada o suficiente para proteger o calendário.",
    figCaption: "FIG. 02 / CAMINHO DA EVIDÊNCIA",
    scope1: "Realismo do produto e roadmap",
    scope2: "Arquitetura e escalabilidade",
    scope3: "Saúde do repositório e engenharia",
    scope4: "Segurança, dados e resiliência",
    scope5: "Capacidade da equipa e risco de pessoa-chave",
    scope6: "Modelo de entrega e custo técnico",
    scope7: "Dependência de terceiros e plataforma",
    scope8: "Integração e prioridades pós-fecho",
    deliverableEyebrow: "O que chega à sala",
    deliverableH2: "Um relatório construído para ser utilizado, não arquivado.",
    del1Title: "Visão executiva da operação",
    del1Copy: "Os factos técnicos mais consequentes, expostos diretamente.",
    del2Title: "Conclusões priorizadas",
    del2Copy: "Gravidade, evidência, confiança e implicação prática.",
    del3Title: "Caminho de ação",
    del3Copy: "Perguntas para a operação, proteções a considerar e prioridades pós-fecho.",
    seeInvestorMandate: "Ver o mandato para investidores",
    callButton: "Definir o âmbito da revisão",
  },

  tier1: {
    heroEyebrow: "Tier 1 \u00b7 Due Diligence Técnica",
    heroH1a: "Red Flag Scan \u2014 uma leitura técnica pré-transacional,",
    heroH1em: "entregue em 3\u20135 dias úteis.",
    heroAside:
      "Até 5 repositórios, análise com uma entrevista. Um relatório assinado de 10\u201315 páginas mais uma recomendação Avançar / Cautela / Não Avançar. Concebido para comités de investimento de seed e Série A onde uma red flag bloqueia o term sheet.",
    slaNote:
      "Aplicável a um agregado de até 5 repositórios com até 200.000 linhas de código (excluindo comentários), 20.000 commits no histórico Git, 500 dependências agregadas (diretas + transitivas) e 3 linguagens primárias, com build reproduzível em máquina limpa em até 15 minutos.",
    slaWarning: "Alvos que excedam qualquer um destes limites são orçamentados separadamente após uma scoping call.",
    whatEyebrow: "O que é este compromisso",
    whatKicker: "ÂMBITO / DUAS FASES",
    whatH1: "Até 5 repositórios. Duas fases. Cada conclusão cita ficheiro e linha.",
    phase1Title: "Fase 1 \u2014 Execução do pipeline (dia 1\u20132)",
    phase1Copy:
      "Um pipeline de análise com 13 competências corre contra os repositórios-alvo fixados num commit hash específico. Cada conclusão cita ficheiro e linha. As conclusões são classificadas por gravidade e ligadas à preocupação declarada pelo comprador.",
    phase2Title: "Fase 2 \u2014 Entrevista e síntese (dia 3\u20135)",
    phase2Copy:
      "Uma entrevista de 90 minutos com o Fundador ou Diretor Técnico do alvo, com perguntas calibradas de acordo com o que o pipeline revelou. A transcrição da entrevista é sintetizada numa narrativa escrita que identifica os riscos técnicos específicos face à tese da operação.",
    assessedEyebrow: "O que é avaliado",
    assessedKicker: "PIPELINE DE 13 COMPETÊNCIAS",
    skillRepoForensics: "Forense do repositório",
    skillRepoForensicsDetail:
      "Bus factor, quota do principal contribuidor, tendência de velocidade, classificação de dormência, análise de hotspots por ficheiro.",
    skillTestPosture: "Postura de testes",
    skillTestPostureDetail:
      "Execução real de cobertura (não heurística), densidade de asserções, deteção de framework de testes, configuração de integração contínua.",
    skillCodeQuality: "Qualidade do código",
    skillCodeQualityDetail:
      "Total de linhas de código por linguagem, complexidade agregada, densidade de TODO / FIXME.",
    skillMaintainability: "Manutenibilidade",
    skillMaintainabilityDetail:
      "Complexidade ciclomática por função, rácio de duplicação de código (via PMD Copy/Paste Detector), rácio sintético de dívida técnica, top de funções hotspot com ficheiro e linha.",
    skillScalability: "Postura de escalabilidade",
    skillScalabilityDetail:
      "Presença de padrões assíncronos, caching distribuído, sistemas de filas, rate limiting, configuração de autoscaling, artefactos de load testing.",
    skillAI: "Superfície de inteligência artificial",
    skillAIDetail:
      "Bibliotecas de cliente de fornecedores, call sites de modelos, vector stores, ativos de prompts, presença de harness de avaliação \u2014 o sinal mais forte que separa produtos de machine learning reais de AI-washing.",
    skillOps: "Prontidão operacional",
    skillOpsDetail:
      "Especificações de API, declarações de deployment, infraestrutura como código, integração de monitorização, endpoints de health-check, runbooks.",
    skillDeps: "Risco de dependências",
    skillDepsDetail:
      "Vulnerabilidades conhecidas via Trivy contra uma base de dados atualizada nas últimas 48 horas, más configurações, itens mais exploráveis.",
    skillCreds: "Credenciais",
    skillCredsDetail:
      "Análise de padrões via Gitleaks + verificação em tempo real via Trufflehog \u2014 positivos verificados distinguidos de exemplos de documentação e tokens expirados.",
    skillLicense: "Exposição de licenças",
    skillLicenseDetail:
      "Software Bill of Materials completo via Syft, classificação em categorias permissiva / copyleft fraco / copyleft forte / comercialmente restrita, landmines de licenças virais identificadas.",
    skillStatic: "Análise estática",
    skillStaticDetail:
      "Semgrep contra um conjunto de regras adequado à linguagem, mais pacotes de regras regionais personalizados.",
    timelineEyebrow: "Cronograma estimado",
    timelineKicker: "3\u20135 DIAS ÚTEIS",
    tl0Day: "Dia 0",
    tl0Action:
      "Acesso ao repositório, formulário de intake com três campos (tese de investimento, preocupação principal, data de decisão), commit hash fixado.",
    tl12Day: "Dia 1\u20132",
    tl12Action:
      "Execução completa do pipeline de 13 competências contra o commit fixado. Cada conclusão cita ficheiro, linha e commit hash.",
    tl3Day: "Dia 3",
    tl3Action: "Entrevista de 90 minutos com o Fundador ou Diretor Técnico do alvo.",
    tl4Day: "Dia 4",
    tl4Action:
      "Validação pelo analista: leitura de todas as conclusões de alta gravidade, amostragem de 20\u2009% das de média gravidade, leitura dos top 10 ficheiros hotspot por frequência de alteração.",
    tl5Day: "Dia 5",
    tl5Action: "Finalização do relatório, assinatura do analista, entrega ao fundo.",
    delivery:
      "Entrega: relatório PDF assinado de 10\u201315 páginas mais artefactos de suporte, entregues diretamente ao fundo.",
    interviewsEyebrow: "Entrevistas",
    interviewsKicker: "UMA SESSÃO DE 90 MINUTOS",
    interviewRole: "Papel obrigatório:",
    interviewRoleDetail:
      "Fundador ou Diretor Técnico do alvo \u2014 alguém que consiga falar tanto sobre decisões de arquitetura como sobre planos de contratação.",
    interviewFormat: "Formato:",
    interviewFormatDetail:
      "videochamada, gravada com o consentimento do entrevistado para precisão das notas.",
    interviewFormatNote:
      "A presença presencial pode ser negociada com despesas a cargo do cliente.",
    interviewDuration: "Duração:",
    interviewDurationDetail:
      "90 minutos, com perguntas geradas a partir das conclusões do pipeline \u2014 não uma lista de verificação genérica.",
    whatReachesEyebrow: "O que chega ao fundo",
    whatReachesH2: "Uma opinião assinada \u2014 não um resumo gerado automaticamente.",
    del1Title: "Recomendação Avançar / Cautela / Não Avançar",
    del1Copy:
      "Destilada do quadro de risco agregado de todas as secções do pipeline, calibrada face à preocupação declarada pelo comprador. A recomendação é a opinião do analista, informada pelo pipeline \u2014 não é automatizada.",
    del2Title: "Conclusões reproduzíveis",
    del2Copy:
      "Cada relatório cita a versão exata do rubric, o commit hash e o commit do alvo fixado. Qualquer conclusão pode ser regenerada seis meses depois ao fazer checkout da tag do compromisso e re-executando o pipeline. Base para defender o relatório perante uma contestação.",
    tier1FitsEyebrow: "Quando o Tier 1 é adequado",
    tier1FitsH2: "Decisões de seed a Série A com uma tese técnica.",
    tier1FitsCopy:
      "A tese de investimento é técnica \u2014 o product-market fit está compreendido, mas o comprador precisa de saber se o código consegue concretizar o roadmap. O fundo não dispõe de um parceiro técnico capaz de passar uma semana no repositório do alvo. O calendário é de 5 dias úteis ou mais antes da assinatura do term sheet.",
    tier2EyebrowWhen: "Quando considerar o Tier 2",
    tier2H2When: "Algumas situações exigem um âmbito mais alargado.",
    tier2CopyWhen:
      "O alvo tem mais de 5 repositórios. A tese da operação depende de uma afirmação específica sobre IA ser verificavelmente verdadeira. O fundo está a comprometer capital significativamente maior. A operação é uma aquisição corporativa em vez de uma ronda de growth equity.",
    seeTier2: "Ver Tier 2 \u2014 Full Technical Due Diligence",
    tier2SlaNote: "Sujeito a limites de repositório. Ver nota na página do Tier 1.",
    spotCheckBackLink: "Ainda em dúvida? Comece com o Spot Check de 4h \u2192",
    callTitle: "Definir o âmbito de um Red Flag Scan.",
    callCopy:
      "Partilhe o alvo, a tese e a data de decisão. A Oliversys confirmará âmbito, intake e prazo de entrega em um dia útil.",
    callButton: "Solicitar uma scoping call",
  },

  tier2: {
    heroEyebrow: "Tier 2 \u00b7 Due Diligence Técnica",
    heroH1: "Full Technical Due Diligence \u2014 âmbito completo,",
    heroH1em: "entregue em 7\u201310 dias úteis.",
    heroAside:
      "Âmbito multi-repositório. Verificação de afirmações sobre IA. Rastreamento completo de arquitetura. Análise de escalabilidade e custo de infraestrutura. Viabilidade do roadmap face à capacidade da equipa. Um relatório assinado de 30\u201340 páginas mais um deck de 20 slides para o Comité de Investimento \u2014 pronto para uma reunião de decisão de 1 hora.",
    slaNote:
      "Aplicável a um agregado de até 10 repositórios, 500.000 linhas de código (excluindo comentários), 100.000 commits no histórico Git, 1.500 dependências agregadas e 5 linguagens primárias, com build reproduzível em máquina limpa em até 30 minutos.",
    slaWarning: "Alvos que excedam qualquer um destes limites são orçamentados separadamente após uma scoping call.",
    whatEyebrow: "O que é este compromisso",
    whatKicker: "ÂMBITO / TRÊS FASES",
    whatH1: "Âmbito completo. Multi-repositório. Pronto para o Comité de Investimento.",
    whatBody:
      "O compromisso de Full Technical Due Diligence executa o pipeline de 13 competências em todos os repositórios definidos no âmbito, fixados em commit hashes específicos. Duas a três entrevistas com a liderança de engenharia do alvo são destiladas numa secção de narrativa nominativa do relatório. Um rastreamento completo de arquitetura, verificação de afirmações sobre IA e leitura de viabilidade do roadmap completam o quadro.",
    phase1Title: "Fase 1 \u2014 Execução do pipeline (dia 1\u20133)",
    phase1Copy:
      "O pipeline de análise de 13 competências corre contra todos os repositórios definidos no âmbito, fixados em commit hashes específicos. Cada conclusão cita ficheiro, linha e repositório.",
    phase2Title: "Fase 2 \u2014 Entrevistas (dia 4\u20136)",
    phase2Copy:
      "Duas a três entrevistas com a liderança de engenharia do alvo, calibradas de acordo com o que o pipeline revelou. Transcrições sintetizadas numa secção de narrativa nominativa do relatório.",
    phase3Title: "Fase 3 \u2014 Síntese e readout do CI (dia 7\u201310)",
    phase3Copy:
      "Rastreamento completo de arquitetura, cruzamento de afirmações sobre IA, análise de custo de escalabilidade, leitura de viabilidade do roadmap e preparação do deck de readout para o Comité de Investimento. Relatório assinado e entregue.",
    assessedEyebrow: "O que é avaliado",
    assessedKicker: "TUDO DO TIER 1, MAIS",
    assessedIntro:
      "O Tier 2 cobre o pipeline completo de 13 competências que corre num Red Flag Scan Tier 1, e acrescenta as seguintes dimensões:",
    add1Title: "Rastreamento completo de arquitetura",
    add1Detail:
      "O analista lê o diagrama de arquitetura contra um caminho crítico específico no código \u2014 faturação, autenticação ou a funcionalidade load-bearing da tese da operação \u2014 verifica se o diagrama corresponde à realidade e identifica os riscos introduzidos pelo delta. Escrito como secção do relatório; não automatizável.",
    add2Title: "Verificação de afirmações sobre inteligência artificial",
    add2Detail:
      "Cada afirmação no pitch sobre o comportamento do modelo é cruzada com os call sites reais do modelo no código, harnesses de avaliação se presentes, e respostas das entrevistas. Distingue produtos de IA genuínos de AI-washing.",
    add3Title: "Análise de escalabilidade + custo de infraestrutura",
    add3Detail:
      "Custo projetado por unidade de crescimento dada a arquitetura atual. Identifica os componentes específicos que terão de mudar primeiro quando o tráfego crescer 10x, e o custo dessas mudanças em horas de engenheiro e despesas de cloud.",
    add4Title: "Viabilidade do roadmap face à capacidade da equipa",
    add4Detail:
      "Lê o roadmap declarado do alvo face ao headcount atual da equipa, mix de senioridade e plano de contratação. Identifica os itens do roadmap que estão estruturalmente sub-dimensionados.",
    add5Title: "Síntese de entrevistas (2\u20133 sessões)",
    add5Detail:
      "Destilada numa narrativa escrita que identifica quem gere o quê, quem é responsável pelo quê, e onde se situam os pontos de alavancagem \u2014 não citações brutas.",
    add6Title: "Apêndice de readout para o Comité de Investimento",
    add6Detail:
      "Um deck de 20 slides concebido para uma chamada de Comité de Investimento de 1 hora. Contém a recomendação, as top 5 conclusões classificadas por relevância transacional e um conjunto de próximos passos prontos para decisão.",
    seeFullList: "Para a lista completa de competências base do pipeline, consulte a",
    seeTier1Link: "página do Tier 1 Red Flag Scan",
    timelineEyebrow: "Cronograma estimado",
    timelineKicker: "7\u201310 DIAS ÚTEIS",
    tl0Day: "Dia 0",
    tl0Action:
      "Acesso ao repositório para todos os repos no âmbito, formulário de intake com três campos, commit hashes fixados.",
    tl13Day: "Dia 1\u20133",
    tl13Action:
      "Execução completa do pipeline de 13 competências contra todos os commits fixados. Âmbito multi-repo tratado ao nível do orquestrador; manifestos por repositório consolidados num único entregável.",
    tl4Day: "Dia 4",
    tl4Action:
      "Primeira entrevista: Fundador ou Diretor Técnico do alvo (90 minutos \u2014 arquitetura + roadmap).",
    tl5Day: "Dia 5",
    tl5Action:
      "Segunda entrevista: Head de Engenharia ou Tech Lead do alvo (60\u201390 minutos \u2014 execução diária + contratação).",
    tl6Day: "Dia 6",
    tl6Action:
      "Terceira entrevista opcional: engenheiro sénior ou Head de Operações (60 minutos \u2014 deployment + fiabilidade + postura de on-call).",
    tl79Day: "Dia 7\u20139",
    tl79Action:
      "Validação pelo analista: leitura de todas as conclusões de alta e média gravidade, rastreamento completo de arquitetura, todas as transcrições de entrevistas, cruzamento de afirmações sobre IA. Estimativa de 8\u201312 horas de tempo de analista.",
    tl10Day: "Dia 10",
    tl10Action:
      "Finalização do relatório, preparação do deck de readout para o Comité de Investimento, assinatura do analista, entrega ao fundo.",
    delivery:
      "Entrega: relatório PDF assinado de 30\u201340 páginas + deck de readout para o Comité de Investimento (20 slides), entregues diretamente ao fundo.",
    interviewsEyebrow: "Entrevistas",
    interviewsKicker: "2\u20133 SESSÕES COM A LIDERANÇA DE ENGENHARIA",
    roleRequired: "OBRIGATÓRIO",
    roleOptional: "OPCIONAL",
    interviewNote:
      "Todas as entrevistas são realizadas por videochamada, gravadas com o consentimento de cada entrevistado para precisão das notas. A presença presencial pode ser negociada com despesas a cargo do cliente.",
    whatReachesEyebrow: "O que chega ao fundo",
    whatReachesH2: "Relatório e deck do CI \u2014 ambos assinados pelo analista.",
    del1Title: "Recomendação Avançar / Cautela / Não Avançar",
    del1Copy:
      "Destilada do quadro de risco agregado em todas as dimensões, calibrada face à preocupação declarada pelo comprador e à leitura de viabilidade do roadmap. Apresentada como parte do apêndice de readout do Comité de Investimento, pronta para a reunião de decisão do fundo.",
    del2Title: "Conclusões reproduzíveis por repositório",
    del2Copy:
      "Cada relatório cita a versão do rubric, o commit hash e o commit do alvo fixado. Os compromissos multi-repo fixam cada repositório separadamente; o orquestrador consolida os manifestos por repo num único entregável.",
    tier2FitsEyebrow: "Quando o Tier 2 é adequado",
    tier2FitsH2: "Série B e posteriores \u2014 ou quando múltiplas afirmações técnicas têm de ser simultaneamente verdadeiras.",
    tier2FitsCopy:
      "Rondas de Série B e posteriores onde a tese de investimento depende de múltiplas afirmações técnicas serem simultaneamente verdadeiras. Fusões e aquisições corporativas onde um alvo inadequado é um evento danoso para o fundo. Aquisições de search funds onde o adquirente irá operar o código após o fecho. Operações com âmbito polyrepo ou uma afirmação sobre IA que tem de ser verificavelmente verdadeira. Comités de investimento que pretendem um deck de readout pronto para decisão entregue com o relatório.",
    lighterEyebrow: "Procura uma análise de âmbito mais reduzido?",
    lighterH2: "O Tier 1 cobre um repositório único em 3\u20135 dias úteis.",
    lighterCopy:
      "Para decisões de seed e Série A onde o alvo é um repositório único e o calendário é apertado, o Red Flag Scan entrega um relatório assinado e recomendação Avançar / Cautela / Não Avançar com menor custo e entrega mais rápida.",
    seeTier1: "Ver Tier 1 \u2014 Red Flag Scan",
    tier1SlaNote: "Sujeito a limites de repositório. Ver nota na página do Tier 1.",
    interviewRole1: "Fundador ou Diretor Técnico",
    interviewFocus1: "Decisões de arquitetura, roadmap do produto, plano de contratação.",
    interviewRole2: "Head de Engenharia ou Tech Lead",
    interviewFocus2: "Execução diária, postura de code review, cultura de testes.",
    interviewRole3: "Engenheiro sénior ou Head de Operações",
    interviewFocus3: "Deployment, on-call, histórico de incidentes, postura de fiabilidade.",
    callTitle: "Definir o âmbito de um Full Technical Due Diligence.",
    callCopy:
      "Partilhe o alvo, o número de repositórios, a tese da operação e a data de decisão. A Oliversys confirmará âmbito, intake e prazo de entrega em um dia útil.",
    callButton: "Solicitar uma scoping call",
  },

  spotCheck: {
    heroEyebrow: "Spot Check \u00b7 Triagem de Repositório",
    heroH1a: "4h Spot Check \u2014 triagem exclusiva de repositório,",
    heroH1em: "entregue em 4 horas.",
    heroAside:
      "Repositório único. Sem entrevistas. Sem avaliação de arquitetura. Um relatório de uma página \u2014 \u201cTechnical Evidence Readiness \u2014 Spot-Check\u201d \u2014 com um sinal de escalonamento e as principais questões a resolver. Preço: \u20ac500. Decida se deve encomendar um Red Flag Scan ou Full Technical Due Diligence antes de avançar para um compromisso mais aprofundado.",
    boundaryEyebrow: "O que este relatório é \u2014 e o que não é",
    boundaryBody:
      "Este é um spot-check exclusivo de repositório. Identifica sinais imediatos a partir de evidências estáticas no repositório-alvo: vulnerabilidades de dependências, credenciais no repositório, exposição de categorias de licenças e padrões de segurança ao nível do código. Indica se as evidências do repositório são suficientes para uma revisão mais aprofundada.",
    boundaryNote:
      "Este relatório não conclui sobre: product-market fit, arquitetura de negócio, organização da equipa, afirmações sobre inteligência artificial ou modelos, direitos sobre dados, escalabilidade, fiabilidade operacional ou adequação geral ao investimento. O sinal na última página é uma recomendação de escalonamento \u2014 não uma recomendação transacional.",
    whatEyebrow: "O que é este compromisso",
    whatKicker: "\u00c2MBITO / REPOSITÓRIO ÚNICO",
    whatH1: "Um repositório. Uma passagem do analista. Um sinal de escalonamento.",
    step1Title: "Passo 1 \u2014 Análise do repositório (horas 0\u20133)",
    step1Copy:
      "Um subconjunto focado do pipeline de análise de 13 competências corre contra o repositório-alvo fixado num commit hash específico. Categorias avaliadas: vulnerabilidades de dependências, credenciais, exposição de licenças e padrões de segurança estáticos. Cada conclusão cita ficheiro e linha.",
    step2Title: "Passo 2 \u2014 Passagem do analista e relatório (horas 3\u20134)",
    step2Copy:
      "O analista lê todas as conclusões de alta gravidade, valida positivos e elabora o relatório de uma página \u201cTechnical Evidence Readiness \u2014 Spot-Check\u201d. O sinal de escalonamento é o julgamento do analista \u2014 não é automatizado.",
    inScopeEyebrow: "O que é avaliado",
    inScopeKicker: "CATEGORIAS INCLUÍDAS",
    inScope1Label: "Vulnerabilidades de dependências",
    inScope1Detail:
      "Vulnerabilidades conhecidas via Trivy contra uma base de dados atualizada nas últimas 48 horas. Más configurações e itens mais exploráveis assinalados.",
    inScope2Label: "Credenciais e segredos",
    inScope2Detail:
      "Análise de padrões via Gitleaks \u2014 positivos verificados distinguidos de exemplos de documentação e tokens expirados.",
    inScope3Label: "Exposição de licenças",
    inScope3Detail:
      "Software Bill of Materials via Syft. Classificação em categorias permissiva / copyleft fraco / copyleft forte / comercialmente restrita. Landmines de licenças virais identificadas.",
    inScope4Label: "Padrões de segurança estáticos",
    inScope4Detail:
      "Semgrep contra um conjunto de regras adequado à linguagem. Classes comuns de injeção, anti-padrões de autenticação e uso incorreto de criptografia.",
    inScope5Label: "Indicadores de saúde do repositório",
    inScope5Detail:
      "Atividade de commits, mix de linguagens dominante, linhas de código aproximadas e indicadores estruturais de topo \u2014 contexto suficiente para o analista delimitar a confiança.",
    outScopeEyebrow: "O que não é coberto",
    outScopeKicker: "FORA DO \u00c2MBITO NESTE TIER",
    outScope1: "Entrevistas com a equipa do alvo \u2014 sem entrevistas neste tier.",
    outScope2: "Rastreamento de arquitetura ou avaliação de produto.",
    outScope3: "Execução de cobertura de testes ou análise aprofundada de manutenibilidade.",
    outScope4: "Verificação de afirmações sobre inteligência artificial.",
    outScope5: "Escalabilidade, prontidão operacional ou viabilidade do roadmap.",
    outScopeNote:
      "Qualquer um dos itens acima requer um Tier 1 Red Flag Scan (3\u20135 dias) ou um Tier 2 Full Technical Due Diligence (7\u201310 dias).",
    timelineEyebrow: "Cronograma estimado",
    timelineKicker: "4 HORAS A PARTIR DO ACESSO AO REPOSITÓRIO",
    tl0Day: "Hora 0",
    tl0Action:
      "Acesso ao repositório fornecido. Intake de campo único: preocupação principal (opcional, mas melhora o foco). Commit hash fixado.",
    tl1Day: "Horas 0\u20133",
    tl1Action:
      "Execução do pipeline de análise: vulnerabilidades de dependências, credenciais, exposição de licenças, padrões de segurança estáticos. Cada conclusão cita ficheiro, linha e commit hash.",
    tl2Day: "Hora 3",
    tl2Action:
      "O analista lê todas as conclusões. Positivos de alta gravidade validados. Sinal de escalonamento determinado.",
    tl3Day: "Hora 4",
    tl3Action:
      "Relatório elaborado e entregue: \u201cTechnical Evidence Readiness \u2014 Spot-Check\u201d \u2014 uma página, assinado pelo analista, com as principais questões e o sinal de escalonamento.",
    delivery:
      "Entrega: relatório PDF assinado de uma página, entregue diretamente ao comprador dentro de 4 horas após o acesso ao repositório.",
    delEyebrow: "O que chega ao comprador",
    delH2: "Uma página. Três sinais. Assinado pelo analista.",
    del1Title: "Relatório \u201cTechnical Evidence Readiness \u2014 Spot-Check\u201d",
    del1Copy:
      "Um relatório de uma página em Markdown e PDF cobrindo as categorias avaliadas, as principais questões a resolver e o bloco de prontidão de evidências. O título do relatório torna o seu âmbito inequívoco \u2014 os compradores não o podem confundir com uma due diligence completa.",
    del2Title: "Sinal de escalonamento",
    del2Copy:
      "Um de três resultados: \u201cSem problemas identificados\u201d / \u201cEsclarecimento necessário\u201d / \u201cProblemas encontrados \u2014 Revisão completa recomendada.\u201d Este é um sinal de escalonamento. Não recomenda a favor ou contra uma transação.",
    del3Title: "Principais questões a resolver",
    del3Copy:
      "As conclusões que o analista considera mais consequentes, formuladas como perguntas para o comprador. Tornam-se o briefing inicial para um compromisso Tier 1 ou Tier 2, caso seja encomendado.",
    whenFitsEyebrow: "Quando o Spot Check é adequado",
    whenFitsH2: "Uma leitura rápida antes de comprometer-se com um compromisso mais aprofundado.",
    whenFitsCopy:
      "Precisa de decidir em horas se um repositório justifica encomendar um Red Flag Scan ou Full Technical Due Diligence. O alvo é um repositório único. Quer uma visão independente antes de uma entrevista com o fundador ou Diretor Técnico. Precisa de algo rápido o suficiente para informar uma primeira reunião ou uma conversa sobre o term sheet.",
    escalateEyebrow: "Próximos passos se forem encontrados problemas",
    escalateH2: "O Spot Check é o início da escada, não o topo.",
    escalateCopy:
      "Se o sinal de escalonamento for \u201cEsclarecimento necessário\u201d ou \u201cProblemas encontrados \u2014 Revisão completa recomendada\u201d, a lista de principais questões do Spot Check torna-se o briefing para o próximo compromisso. O Red Flag Scan adiciona entrevistas, profundidade completa do pipeline nas 13 competências e uma recomendação Avançar / Cautela / Não Avançar. O Full Technical Due Diligence adiciona rastreamento de arquitetura, verificação de afirmações sobre inteligência artificial e um readout para o Comité de Investimento.",
    seeRedFlagScan: "Ver Tier 1 \u2014 Red Flag Scan (3\u20135 dias)",
    seeFullTDD: "Ver Tier 2 \u2014 Full Technical Due Diligence (7\u201310 dias)",
    callTitle: "Marcar um Spot Check de 4h.",
    callCopy:
      "Partilhe o repositório, o commit que pretende rever e a sua preocupação principal (opcional). A Oliversys confirmará o acesso e entregará dentro de 4 horas.",
    callButton: "Marcar spot check de 4h",
  },

  blog: {
    eyebrow: "Perspetivas",
    heading: "Artigos sobre due diligence técnica.",
    readPost: "Ler",
    noPosts: "Ainda não há artigos.",
  },

  notFound: {
    eyebrow: "Ficheiro não encontrado / 404",
    h1: "Este rasto de evidência termina aqui.",
    body: "A página pode ter sido movida, mas o caminho de regresso a uma decisão técnica mais clara está intacto.",
    returnButton: "Voltar à Oliversys",
  },
};
