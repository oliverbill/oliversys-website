/**
 * Portuguese (PT-PT) locale strings — NON-TECHNICAL COPY VARIANT.
 * Branch: site/copy-variant-non-technical
 * Audience: lawyers, non-technical VCs, corporate buyers.
 * European register: "utilizador" (not "usuário"), "ecrã" (not "tela").
 * Tier 1, Tier 2, spot-check, Red Flag Scan, Full TDD são nomes de produto — não traduzidos.
 */
import type { Translations } from "./en";

export const pt: Translations = {
  meta: {
    title: "Oliversys | Due Diligence de Software para M&A e Capital de Risco",
    description:
      "Due Diligence de Software independente para investidores europeus e consultores jurídicos de M&A. Uma visão clara da tecnologia por detrás da operação — antes de comprometer.",
    ogTitle: "Oliversys | Conheça a tecnologia antes de assinar",
    ogDescription: "Due diligence técnica independente para investidores e advogados que precisam de uma resposta direta.",
  },

  nav: {
    approach: "Como funciona",
    forInvestors: "Para investidores",
    forCounsel: "Para jurídico",
    spotCheck: "Spot Check de 4h",
    redFlagScan: "Red Flag Scan",
    fullTDD: "Full TDD",
    about: "Sobre",
    blog: "Blog",
    services: "Serviços",
    requestReview: "Solicitar uma revisão",
    openReview: "Iniciar uma revisão confidencial",
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
    tagline: "Uma visão clara da tecnologia por detrás da sua operação — antes de comprometer.",
    scopeLabel: "Com quem trabalhamos",
    ventureInvestors: "Investidores de capital de risco",
    maCounsel: "Consultores jurídicos de M&A",
    diligenceApproach: "Como funciona",
    spotCheckFull: "Spot Check de 4h",
    redFlagScanFull: "Red Flag Scan (Tier 1)",
    fullTDDFull: "Full TDD (Tier 2)",
    copyright: "\u00a9 {year} Oliversys. Confidencial por predefinição.",
    tagline2: "Due diligence de software \u00b7 M\u0026A \u00b7 Capital de risco",
    contactLabel: "Contacto",
  },

  shared: {
    confidentialIntroEyebrow: "Introdução confidencial",
    callDefaultTitle: "Obtenha uma visão clara do alvo antes de assinar.",
    callDefaultCopy:
      "Envolva-nos antes que uma incógnita técnica se torne um problema na operação. Acordamos o âmbito, o que precisamos de ver e a velocidade de resposta.",
    callDefaultButton: "Iniciar uma revisão confidencial",
    confidentialNote: "Âmbito e calendário acordados em função da sua operação.",
  },

  home: {
    heroEyebrow: "Due Diligence de Software Independente",
    heroHeadline: "Conheça a tecnologia antes",
    heroHeadlineItalic: "de assinar.",
    heroLede:
      "A Oliversys é um inspetor de obras para software. Analisamos a tecnologia de uma empresa-alvo e damos aos investidores e advogados de M&A uma resposta direta sobre o que estão realmente a comprar.",
    heroCtaPrimary: "Agendar uma chamada confidencial",
    heroCtaSecondary: "Ver como trabalhamos",
    heroScrollCue: "Ver o que encontramos",
    dealFile: "DOSSIER / TÉCNICO",
    euConfidential: "EU \u00b7 CONFIDENCIAL",
    dossierEvidence: "Evidência",
    dossierEvidenceSub: "Software \u00b7 Sistemas \u00b7 Equipa",
    dossierConsequence: "Consequência",
    dossierConsequenceSub: "Risco \u00b7 Custo \u00b7 Impacto na operação",
    dossierDecision: "Decisão",
    dossierDecisionSub: "Avançar \u00b7 Negociar \u00b7 Proteger",
    exposureEyebrow: "O problema",
    exposureH2: "A questão tecnológica recai muitas vezes sobre a pessoa com menos condições de a responder.",
    exposureLead:
      "A maioria das equipas de investimento e jurídicas não tem um especialista em software na sala. A história tecnológica do fundador parece credível. Mas credível e verificado não são a mesma coisa.",
    exposureBody:
      "A Oliversys fornece uma visão independente suficientemente específica para a equipa de transação e suficientemente clara para o comité de investimento ou o consultor jurídico.",
    riskArchitecture: "O software consegue crescer?",
    riskArchitectureCopy: "O produto vai suportar a próxima fase do plano?",
    riskExecution: "A equipa consegue entregar?",
    riskExecutionCopy: "A dimensão e a capacidade da equipa correspondem ao que o roadmap pressupõe?",
    riskExposure: "O que é transferido com a operação?",
    riskExposureCopy: "Que risco, custo ou dependência oculta o comprador herda?",
    visualEyebrow: "O que a Oliversys muda",
    visualH2: "Não mais detalhe técnico. Uma decisão de investimento mais sólida.",
    figCaption: "FIG. 01 \u00b7 RISCO ESTRUTURAL OCULTO",
    outcome1: "Transformar conclusões técnicas em consequências claras para a operação",
    outcome2: "Separar problemas corrigíveis de riscos estruturais",
    outcome3: "Identificar pressupostos antes de se consolidarem na valorização",
    outcome4: "Dar a consultores e investidores uma visão defensável da tecnologia",
    examineApproach: "Ver como trabalhamos",
    audienceEyebrow: "Construído para a equipa de transação",
    audienceKicker: "02 / QUEM APOIAMOS",
    vcEyebrow: "Capital de risco",
    vcH3: "Para equipas de investimento a tomar decisões sem um especialista técnico na sala.",
    vcBody:
      "Obtenha uma visão independente da tecnologia em decisões de seed e Série A — sem criar uma função interna de due diligence.",
    vcLink: "Para investidores",
    legalEyebrow: "Parcerias jurídicas",
    legalH3: "Para advogados de M&A que precisam que a história tecnológica seja sólida.",
    legalBody:
      "Adicione um especialista que analisa o software, liga as conclusões ao risco da operação e as apresenta em linguagem clara para o cliente e o consultor.",
    legalLink: "Para consultores jurídicos",
    outputEyebrow: "O que recebe",
    outputH2: "Um relatório construído para a sala de decisão, não para a sala técnica.",
    outputBody:
      "Cada revisão é organizada em torno da decisão que tem à frente. As conclusões são ordenadas pelo impacto na operação — não estão enterradas numa lista de verificação genérica.",
    outputItem1: "Resumo de risco em linguagem clara",
    outputItem2: "Conclusões sustentadas por evidência",
    outputItem3: "Implicações para a operação",
    outputItem4: "O que fazer após o fecho",
    evidenceStamp: "PRONTO PARA DECISÃO / RASTREÁVEL / DIRETO",
    crossReviewLabel: "Mandato de revisão",
    crossReviewTitle: "Para investidores",
    crossPartnerLabel: "Mandato de parceria",
    crossPartnerTitle: "Para consultores de M\u0026A",
    callButton: "Obter uma visão do alvo",
    servicesEyebrow: "Os serviços",
    servicesKicker: "03 / TRÊS NÍVEIS",
    spotCheckLabel: "Spot Check de 4h",
    spotCheckDesc: "Uma leitura rápida de um repositório de software. Uma página. Um sinal de escalada em 4 horas — antes de se comprometer com uma revisão completa.",
    spotCheckLink: "Ver o Spot Check",
    tier1Label: "Red Flag Scan",
    tier1Desc: "Até 5 repositórios. Uma entrevista de 90 minutos com o fundador ou responsável técnico. Go\u202f/\u202fCaution\u202f/\u202fNo-Go assinado em 3\u20135 dias úteis.",
    tier1Link: "Ver o Red Flag Scan",
    tier2Label: "Full Technical Due Diligence",
    tier2Desc: "Âmbito completo de todos os repositórios. Revisão de arquitetura. Deck de apresentação ao Investment Committee. Entregue em 7\u201310 dias úteis.",
    tier2Link: "Ver o Full TDD",
  },

  investors: {
    introEyebrow: "Para investidores de capital de risco",
    introTitle: "Sustente a tese — sem os pontos",
    introItalic: "cegos tecnológicos.",
    introCopy:
      "Due diligence de software independente para decisões de seed e Série A quando a equipa de investimento não tem um especialista técnico a quem recorrer.",
    problemEyebrow: "O momento de exposição",
    problemH2: "Pode compreender o negócio e ainda assim não saber se o software o consegue sustentar.",
    risk1: "O produto parece credível na demonstração, mas os seus limites são difíceis de avaliar externamente.",
    risk2: "O roadmap apoia a tese, mas se a equipa consegue realmente construí-lo é um pressuposto.",
    risk3: "O fundador responde bem, mas ninguém verificou de forma independente o que existe por detrás das respostas.",
    mandateEyebrow: "O que a Oliversys faz",
    mandateH2: "Uma extensão da equipa de transação — sem criar uma função permanente.",
    mandateBody:
      "Analisamos a tecnologia por detrás do caso de investimento e damos-lhe uma visão pronta para decisão: o que é sólido, o que é um risco e o que deve fazer.",
    check1: "Uma verificação independente da história tecnológica do fundador",
    check2: "Uma distinção clara entre problemas corrigíveis e riscos estruturais",
    check3: "O que a tecnologia significa para o crescimento, o custo, o calendário e as dependências críticas",
    check4: "Um briefing direto para a equipa de transação e o comité de investimento",
    questionsEyebrow: "Perguntas que a revisão responde",
    questionsKicker: "CI / VISÃO TECNOLÓGICA",
    q1: "O produto consegue suportar a próxima fase do plano?",
    q2: "Que custo tecnológico está em falta no modelo financeiro?",
    q3: "Onde é que o negócio depende de uma única pessoa ou fornecedor?",
    q4: "O que deve mudar no preço, na proteção ou nos primeiros 100 dias?",
    seeEvidence: "Ver como a revisão funciona",
    callTitle: "Leve uma visão clara da tecnologia ao comité de investimento.",
    callCopy:
      "Partilhe a tese, a fase e onde reside a incerteza. A Oliversys acordará um âmbito de revisão proporcional à decisão.",
    callButton: "Desafiar a tese tecnológica",
  },

  counsel: {
    introEyebrow: "Para consultores jurídicos de M\u0026A",
    introTitle: "Um fluxo tecnológico que fortalece a",
    introItalic: "equipa de transação.",
    introCopy:
      "A Oliversys trabalha com escritórios de advocacia para identificar risco tecnológico, ligá-lo às consequências da operação e manter o fluxo de trabalho claro para consultores e clientes.",
    partnerEyebrow: "Um parceiro especializado",
    partnerH2: "Conclusões tecnológicas que complementam a due diligence jurídica.",
    partnerLead:
      "O software, os dados e a forma como a tecnologia de uma empresa está construída podem criar obrigações e exposição que não cabem numa lista de verificação jurídica.",
    dealAwareTitle: "Consciente da operação",
    dealAwareCopy:
      "Âmbito, reporte e escalonamento alinhados com o calendário transacional e o que é relevante para a operação.",
    traceableTitle: "Rastreável",
    traceableCopy:
      "Cada conclusão apresenta a evidência de suporte, o nível de confiança e a relevância prática para a operação.",
    clearTitle: "Fácil de gerir",
    clearCopy:
      "A comunicação é direta, discreta e estruturada para se integrar no processo de due diligence mais amplo.",
    partnershipEyebrow: "Como trabalhamos juntos",
    partnershipKicker: "CONSULTOR / CLIENTE / OLIVERSYS",
    alignTitle: "Alinhar",
    alignCopy:
      "Acordar o contexto transacional, as considerações de privilégio, as interfaces e as vias de escalonamento com o consultor antes de começar.",
    reviewTitle: "Rever",
    reviewCopy:
      "Executar o fluxo de trabalho tecnológico acordado com acesso controlado e atualizações de progresso concisas.",
    connectTitle: "Conectar",
    connectCopy:
      "Relacionar conclusões com os mecanismos da operação, garantias, remediação ou prioridades pós-fecho — em linguagem clara para o consultor trabalhar.",
    fitEyebrow: "Onde a Oliversys se encaixa",
    fitH2: "Envolva-nos onde a tecnologia do alvo é relevante para o valor ou a execução.",
    fit1: "Aquisições e investimentos com base em software",
    fit2: "Separações tecnológicas e planeamento de integração",
    fit3: "Questões sobre a plataforma, os dados, a segurança ou a capacidade de crescimento",
    fit4: "Negócios onde a tecnologia depende muito de uma ou duas pessoas",
    reviewMethod: "Ver como a revisão funciona",
    callTitle: "Adicione um parceiro tecnológico ao processo.",
    callCopy:
      "Comece com uma conversa de enquadramento confidencial. A Oliversys adaptará a revisão à transação, ao processo do consultor e à decisão do cliente.",
    callButton: "Abrir um fluxo tecnológico",
  },

  about: {
    introEyebrow: "Sobre a Oliversys",
    introTitle: "Independente por design. Responsável perante a",
    introItalic: "evidência.",
    introCopy:
      "A Oliversys é uma prática de due diligence de software com sede em Portugal e âmbito europeu, ao serviço de investidores de capital de risco e equipas de M&A.",
    artifactSpan: "OLIVERSYS / PORTUGAL \u00b7 EUROPA",
    whyEyebrow: "Porquê a Oliversys",
    whyH2: "Uma visão tecnológica clara, construída fora do momentum da operação.",
    whyLead:
      "A Oliversys é gerida por William Alves, um engenheiro de software sénior com base em Coimbra, Portugal, através de uma empresa portuguesa registada. A prática existe para preencher uma lacuna que as grandes firmas de due diligence não conseguem servir: a análise de um engenheiro sénior ao software de uma empresa-alvo, a um preço e velocidade adequados a operações de seed e Série A.",
    whyBody:
      "Analisamos o que sustenta a tese de investimento, o que a pode condicionar e o que a equipa de transação deve fazer com a evidência. O nosso trabalho é manter-nos independentes, claros e úteis.",
    pricingAnchor:
      "As grandes firmas de due diligence técnico cobram a partir de \u20ac25k por este tipo de análise. A Oliversys entrega um resultado comparável por uma fração desse valor.",
    principlesEyebrow: "Como trabalhamos",
    principlesKicker: "PRINCÍPIOS OPERACIONAIS",
    p1Title: "O que importa acima do que é exaustivo",
    p1Copy: "A profundidade segue a relevância para a decisão. Uma lista de verificação mais longa não é um melhor resultado.",
    p2Title: "Direto acima de dramático",
    p2Copy:
      "O risco tecnológico é exposto com clareza, proporção e contexto. Sem conclusões baseadas no medo. Sem falso conforto.",
    p3Title: "Evidência acima de instinto",
    p3Copy:
      "Cada visão é rastreável ao que foi examinado, discutido e testado — e explícita sobre o que permanece incerto.",
    p4Title: "Discreto por predefinição",
    p4Copy:
      "O acesso à informação, a comunicação e o reporte são tratados com o cuidado esperado numa transação em curso.",
    positionEyebrow: "O nosso posicionamento",
    positionQuote: "\u201cSaiba o que a tecnologia consegue suportar — antes de a operação ter de o fazer.\u201d",
    positionBody:
      "Evidência tecnológica independente para investidores a tomar decisões em fase inicial e consultores jurídicos a gerir transações lideradas por tecnologia em toda a Europa.",
    callTitle: "Comece pela decisão que tem à frente.",
    callButton: "Enquadrar a decisão",
  },

  approach: {
    introEyebrow: "Como funciona",
    introTitle: "Siga a evidência até à",
    introItalic: "decisão.",
    introCopy:
      "Uma revisão da Oliversys é delimitada pelo que é relevante para a operação. A profundidade técnica não é o objetivo; uma visão clara e defensável da tecnologia é.",
    phasesEyebrow: "Uma revisão orientada para a decisão",
    phasesKicker: "MANDATO / 04 PASSOS",
    phase1Title: "Acordar o que estamos a procurar",
    phase1Copy:
      "Começamos pela tese da operação, a fase e as questões específicas que mais importam. A revisão é moldada em torno da decisão — não de uma lista de verificação fixa.",
    phase1Meta: "Tese \u00b7 Âmbito \u00b7 O que importa",
    phase2Title: "Inspecionar o software e a equipa",
    phase2Copy:
      "Analisamos o produto, como o software está construído, segurança, dados, a equipa e o plano de crescimento — com a profundidade que a operação exige.",
    phase2Meta: "Documentos \u00b7 Sistemas \u00b7 Entrevistas",
    phase3Title: "Testar o plano contra a realidade",
    phase3Copy:
      "Verificamos se a tecnologia consegue realmente suportar o plano comercial. Identificamos custos ocultos, pontos únicos de falha e riscos de entrega que o modelo pode não contemplar.",
    phase3Meta: "Capacidade \u00b7 Custo \u00b7 Constrangimento",
    phase4Title: "Entregar uma resposta direta",
    phase4Copy:
      "Entregamos um resumo direto, as implicações para a operação e uma lista priorizada do que fazer após o fecho. Fazemos o briefing da equipa de transação para que nada fique como um pressuposto.",
    phase4Meta: "Conclusões \u00b7 Implicações \u00b7 Prioridades",
    scopeEyebrow: "O que analisamos",
    scopeH2: "Abrangente o suficiente para detetar o problema. Focado o suficiente para proteger o calendário.",
    figCaption: "FIG. 02 / CAMINHO DA EVIDÊNCIA",
    scope1: "O produto consegue fazer o que o plano diz?",
    scope2: "O software aguenta à medida que o negócio cresce?",
    scope3: "O código está em razoável estado de saúde?",
    scope4: "Existem riscos de segurança, dados ou resiliência?",
    scope5: "A equipa tem capacidade para entregar?",
    scope6: "Qual é o verdadeiro custo de entrega?",
    scope7: "De que depende o negócio de terceiros?",
    scope8: "O que precisa de acontecer após o fecho?",
    deliverableEyebrow: "O que recebe",
    deliverableH2: "Um relatório construído para ser utilizado, não arquivado.",
    del1Title: "Resumo da operação em linguagem clara",
    del1Copy: "Os factos mais consequentes, expostos diretamente.",
    del2Title: "Conclusões priorizadas",
    del2Copy: "Gravidade, evidência, confiança e o que significa para a operação.",
    del3Title: "Caminho de ação",
    del3Copy: "Questões para negociação, proteções a considerar e prioridades após o fecho.",
    seeInvestorMandate: "Ver o mandato para investidores",
    callButton: "Acordar o âmbito da revisão",
  },

  tier1: {
    heroEyebrow: "Tier 1 \u00b7 Due Diligence de Software",
    heroH1a: "Red Flag Scan \u2014 uma leitura tecnológica pré-operação,",
    heroH1em: "entregue em 3\u20135 dias úteis.",
    heroAside:
      "Até 5 repositórios de software. Uma entrevista com o fundador ou responsável técnico. Um relatório assinado de 10\u201315 páginas mais uma recomendação Go / Caution / No-Go. Construído para comités de investimento de seed e Série A onde uma red flag bloqueia o term sheet.",
    slaNote:
      "Aplicável a alvos dentro do seguinte âmbito: até 5 repositórios, até 200.000 linhas de código, até 20.000 entradas no histórico de versões, até 500 componentes de terceiros e até 3 linguagens de programação primárias. A compilação deve ser reproduzível numa máquina limpa em 15 minutos.",
    slaWarning: "Alvos fora destes limites são enquadrados e orçamentados separadamente após uma chamada.",
    whatEyebrow: "Em que consiste este compromisso",
    whatKicker: "ÂMBITO / DUAS FASES",
    whatH1: "Até 5 repositórios. Duas fases. Cada conclusão cita a sua fonte.",
    phase1Title: "Fase 1 \u2014 Revisão do software (dia 1\u20132)",
    phase1Copy:
      "Executamos uma revisão estruturada do software do alvo nas dimensões de segurança, exposição legal, saúde do código, equipa e crescimento. Cada conclusão cita a sua localização exata. As conclusões são classificadas por gravidade e ligadas à preocupação declarada pelo comprador.",
    phase2Title: "Fase 2 \u2014 Entrevista e relatório (dia 3\u20135)",
    phase2Copy:
      "Uma entrevista de 90 minutos com o fundador ou responsável técnico do alvo, com perguntas baseadas no que a revisão revelou. A entrevista é sintetizada numa narrativa escrita que identifica os riscos tecnológicos específicos face à tese da operação.",
    assessedEyebrow: "O que avaliamos",
    assessedKicker: "SEGURANÇA \u00b7 LEGAL \u00b7 CÓDIGO \u00b7 EQUIPA \u00b7 CRESCIMENTO",
    skillRepoForensics: "Histórico de desenvolvimento",
    skillRepoForensicsDetail:
      "Quantas pessoas estão realmente a construir o produto, se o conhecimento crítico está concentrado numa pessoa, o nível de atividade de desenvolvimento e onde estão as partes mais alteradas do código.",
    skillTestPosture: "Cobertura de testes",
    skillTestPostureDetail:
      "Que proporção do software tem testes automáticos a protegê-lo de falhas acidentais, e quão fiáveis são esses testes.",
    skillCodeQuality: "Qualidade do código",
    skillCodeQualityDetail:
      "Dimensão global e composição linguística do código, complexidade e quantidade de trabalho técnico adiado.",
    skillMaintainability: "Facilidade de alteração",
    skillMaintainabilityDetail:
      "Quão complicado é alterar partes individuais do código com segurança, quanto código está duplicado e onde estão as áreas de maior risco.",
    skillScalability: "Capacidade de crescimento",
    skillScalabilityDetail:
      "Se o software está construído para lidar com mais utilizadores e mais carga — ou se escalar exigirá reconstrução significativa.",
    skillAI: "Afirmações sobre inteligência artificial",
    skillAIDetail:
      "Se as funcionalidades de inteligência artificial do produto são genuínas e verificáveis, ou se a linguagem de marketing exagera o que o software realmente faz.",
    skillOps: "Prontidão operacional",
    skillOpsDetail:
      "Se o software está construído para funcionar de forma fiável em produção — monitorização, deployment e capacidade de diagnosticar problemas rapidamente.",
    skillDeps: "Risco de componentes de terceiros",
    skillDepsDetail:
      "Vulnerabilidades de segurança conhecidas nos componentes de terceiros de que o software depende, verificadas contra uma base de dados atualizada.",
    skillCreds: "Credenciais e segredos",
    skillCredsDetail:
      "Se alguma palavra-passe, chave de acesso ou outra credencial sensível foi acidentalmente incluída no repositório de software.",
    skillLicense: "Exposição legal de código aberto",
    skillLicenseDetail:
      "Um inventário completo de cada componente de terceiros de que o software depende, e se algum desses componentes tem termos de licença que restringem o uso comercial ou exigem a divulgação do código-fonte.",
    skillStatic: "Revisão de padrões de segurança",
    skillStaticDetail:
      "Uma revisão do código para padrões de segurança conhecidos como problemáticos — o tipo de erros que conduzem a vulnerabilidades comuns.",
    timelineEyebrow: "Cronograma estimado",
    timelineKicker: "3\u20135 DIAS ÚTEIS",
    tl0Day: "Dia 0",
    tl0Action:
      "Acesso ao repositório, um formulário de intake breve (tese de investimento, preocupação principal, data de decisão), versão específica do software fixada para revisão.",
    tl12Day: "Dia 1\u20132",
    tl12Action:
      "Revisão estruturada nas dimensões de segurança, exposição legal, saúde do código, equipa e crescimento, contra a versão fixada. Cada conclusão cita a sua fonte exata.",
    tl3Day: "Dia 3",
    tl3Action: "Entrevista de 90 minutos com o fundador ou responsável técnico do alvo.",
    tl4Day: "Dia 4",
    tl4Action:
      "Validação pelo analista: todas as conclusões de alta gravidade lidas e verificadas, amostra de conclusões de média gravidade revistas, áreas de maior risco do código examinadas.",
    tl5Day: "Dia 5",
    tl5Action: "Relatório concluído, assinado pelo analista, entregue ao fundo.",
    delivery:
      "Entrega: relatório assinado de 10\u201315 páginas mais evidência de suporte, entregue diretamente ao fundo.",
    interviewsEyebrow: "Entrevistas",
    interviewsKicker: "UMA SESSÃO DE 90 MINUTOS",
    interviewRole: "Obrigatório:",
    interviewRoleDetail:
      "o fundador ou responsável técnico do alvo — alguém que possa falar tanto sobre como o produto está construído como sobre o plano de crescimento da equipa.",
    interviewFormat: "Formato:",
    interviewFormatDetail: "videochamada, gravada com o consentimento do entrevistado para precisão.",
    interviewFormatNote: "A presença presencial pode ser negociada, com despesas acordadas previamente.",
    interviewDuration: "Duração:",
    interviewDurationDetail:
      "90 minutos, com perguntas baseadas nas conclusões da revisão — não numa lista de verificação genérica.",
    whatReachesEyebrow: "O que recebe",
    whatReachesH2: "Uma opinião assinada — não um resumo automático.",
    del1Title: "Recomendação Go / Caution / No-Go",
    del1Copy:
      "Baseada na visão completa de todas as dimensões da revisão, calibrada face à preocupação declarada pelo comprador. A recomendação é a opinião do analista, informada pela revisão — não é automatizada.",
    del2Title: "Conclusões rastreáveis",
    del2Copy:
      "Cada relatório identifica a versão exata do software revisto. Qualquer conclusão pode ser verificada de forma independente ao aceder a essa versão. Esta é a base para defender o relatório se for contestado.",
    tier1FitsEyebrow: "Quando o Tier 1 é adequado",
    tier1FitsH2: "Decisões de seed a Série A com uma tese tecnológica.",
    tier1FitsCopy:
      "O investimento é num produto de software, e o comprador precisa de saber se a tecnologia consegue concretizar o roadmap. O fundo não tem um parceiro técnico disponível para uma semana de revisão. O calendário é de 5 dias úteis ou mais antes da assinatura do term sheet.",
    tier2EyebrowWhen: "Quando considerar o Tier 2",
    tier2H2When: "Algumas operações exigem um âmbito mais alargado.",
    tier2CopyWhen:
      "O software do alvo está distribuído por mais de 5 repositórios. A operação depende de uma afirmação específica sobre inteligência artificial ser verificavelmente verdadeira. O fundo está a comprometer capital significativamente maior. A operação é uma aquisição corporativa em vez de uma ronda de growth equity.",
    seeTier2: "Ver Tier 2 \u2014 Full Technical Due Diligence",
    tier2SlaNote: "Sujeito a limites de âmbito. Ver nota na página do Tier 1.",
    spotCheckBackLink: "Ainda em dúvida? Comece com o Spot Check de 4h \u2192",
    callTitle: "Definir o âmbito de um Red Flag Scan.",
    callCopy:
      "Partilhe o alvo, a tese e a data de decisão. A Oliversys confirmará âmbito e prazo de entrega em um dia útil.",
    callButton: "Solicitar uma chamada de enquadramento",
  },

  tier2: {
    heroEyebrow: "Tier 2 \u00b7 Due Diligence de Software",
    heroH1: "Full Technical Due Diligence \u2014 âmbito completo,",
    heroH1em: "entregue em 7\u201310 dias úteis.",
    heroAside:
      "Todos os repositórios de software no âmbito. Verificação de afirmações sobre inteligência artificial. Revisão completa de como o sistema está construído. Análise de custo de crescimento. Verificação de viabilidade do roadmap face à capacidade da equipa. Um relatório assinado de 30\u201340 páginas mais um deck de 20 slides para o Investment Committee — pronto para uma reunião de decisão de 1 hora.",
    slaNote:
      "Aplicável a alvos dentro do seguinte âmbito: até 10 repositórios, até 500.000 linhas de código, até 100.000 entradas no histórico de versões, até 1.500 componentes de terceiros e até 5 linguagens de programação primárias. A compilação deve ser reproduzível numa máquina limpa em 30 minutos.",
    slaWarning: "Alvos fora destes limites são enquadrados e orçamentados separadamente após uma chamada.",
    whatEyebrow: "Em que consiste este compromisso",
    whatKicker: "ÂMBITO / TRÊS FASES",
    whatH1: "Âmbito completo. Todos os repositórios. Pronto para o Investment Committee.",
    whatBody:
      "O compromisso de Full Technical Due Diligence revisa todos os repositórios de software definidos no âmbito, fixados a uma versão específica. Duas a três entrevistas com a liderança técnica do alvo são sintetizadas numa secção nominativa do relatório. Uma revisão completa da arquitetura, verificação de afirmações sobre inteligência artificial e uma leitura de viabilidade do roadmap completam o quadro.",
    phase1Title: "Fase 1 \u2014 Revisão do software (dia 1\u20133)",
    phase1Copy:
      "Uma revisão estruturada nas dimensões de segurança, exposição legal, saúde do código, equipa e crescimento é executada contra todos os repositórios no âmbito, fixados a versões específicas. Cada conclusão cita a sua fonte exata.",
    phase2Title: "Fase 2 \u2014 Entrevistas (dia 4\u20136)",
    phase2Copy:
      "Duas a três entrevistas com a liderança técnica do alvo, moldadas pelo que a revisão revelou. Sintetizadas numa secção nominativa do relatório.",
    phase3Title: "Fase 3 \u2014 Síntese e apresentação ao CI (dia 7\u201310)",
    phase3Copy:
      "Revisão completa da arquitetura, verificação de afirmações sobre inteligência artificial, análise de custo de crescimento, leitura de viabilidade do roadmap e preparação do deck de apresentação ao Investment Committee. Relatório assinado e entregue.",
    assessedEyebrow: "O que avaliamos",
    assessedKicker: "TUDO DO TIER 1, MAIS",
    assessedIntro:
      "O Tier 2 cobre todas as dimensões de segurança, exposição legal, saúde do código, equipa e crescimento do Tier 1 Red Flag Scan, e acrescenta o seguinte:",
    add1Title: "Como o sistema está realmente construído",
    add1Detail:
      "O analista traça a arquitetura contra uma parte crítica do produto — o fluxo de faturação, o sistema de autenticação, ou a funcionalidade de que a tese da operação depende. Verificamos se a documentação corresponde à realidade e identificamos os riscos onde não corresponde. Isto não pode ser automatizado.",
    add2Title: "Verificação de afirmações sobre inteligência artificial",
    add2Detail:
      "Cada afirmação sobre inteligência artificial no pitch é cruzada com o que o software realmente faz. Distinguimos produtos de inteligência artificial genuínos de linguagem de marketing que exagera a tecnologia.",
    add3Title: "Análise de custo de crescimento",
    add3Detail:
      "O que custará crescer o produto 10x. Identificamos as partes específicas do sistema que precisarão de ser alteradas primeiro, e o custo dessas alterações em tempo de engenharia e despesas de infraestrutura.",
    add4Title: "Viabilidade do roadmap face à capacidade da equipa",
    add4Detail:
      "Lemos o roadmap declarado do alvo face à dimensão, senioridade e plano de contratação atual da equipa. Identificamos os itens do roadmap estruturalmente sub-dimensionados.",
    add5Title: "Síntese de entrevistas (2\u20133 sessões)",
    add5Detail:
      "Sintetizadas numa narrativa escrita que identifica quem gere o quê, quem é responsável pelo quê e onde estão os pontos de alavancagem — não citações diretas.",
    add6Title: "Deck de apresentação ao Investment Committee",
    add6Detail:
      "Um deck de 20 slides concebido para uma reunião do Investment Committee de 1 hora. Contém a recomendação, as 5 principais conclusões classificadas por relevância para a operação e um conjunto de próximos passos prontos para decisão.",
    seeFullList: "Para a lista completa de dimensões base, consulte a",
    seeTier1Link: "página do Tier 1 Red Flag Scan",
    timelineEyebrow: "Cronograma estimado",
    timelineKicker: "7\u201310 DIAS ÚTEIS",
    tl0Day: "Dia 0",
    tl0Action:
      "Acesso ao repositório para todos os repos no âmbito, formulário de intake breve, versões específicas fixadas para revisão.",
    tl13Day: "Dia 1\u20133",
    tl13Action:
      "Revisão estruturada nas dimensões de segurança, exposição legal, saúde do código, equipa e crescimento, contra todas as versões fixadas. Âmbito multi-repositório tratado de ponta a ponta; todas as conclusões consolidadas num único entregável.",
    tl4Day: "Dia 4",
    tl4Action:
      "Primeira entrevista: fundador ou responsável técnico do alvo (90 minutos — arquitetura + roadmap).",
    tl5Day: "Dia 5",
    tl5Action:
      "Segunda entrevista: responsável de engenharia ou responsável técnico sénior do alvo (60\u201390 minutos — entrega diária + contratação).",
    tl6Day: "Dia 6",
    tl6Action:
      "Terceira entrevista opcional: engenheiro sénior ou responsável de operações (60 minutos — como o produto é executado em produção).",
    tl79Day: "Dia 7\u20139",
    tl79Action:
      "Validação pelo analista: todas as conclusões de alta e média gravidade revistas, revisão completa da arquitetura, todas as transcrições de entrevistas, verificação cruzada de afirmações sobre inteligência artificial. Aproximadamente 8\u201312 horas de tempo de analista.",
    tl10Day: "Dia 10",
    tl10Action:
      "Relatório concluído, deck do Investment Committee preparado, assinado pelo analista, entregue ao fundo.",
    delivery:
      "Entrega: relatório assinado de 30\u201340 páginas + deck do Investment Committee (20 slides), entregue diretamente ao fundo.",
    interviewsEyebrow: "Entrevistas",
    interviewsKicker: "2\u20133 SESSÕES COM A LIDERANÇA TÉCNICA",
    roleRequired: "OBRIGATÓRIO",
    roleOptional: "OPCIONAL",
    interviewNote:
      "Todas as entrevistas são realizadas por videochamada, gravadas com o consentimento de cada entrevistado para precisão. A presença presencial pode ser negociada com despesas acordadas previamente.",
    whatReachesEyebrow: "O que recebe",
    whatReachesH2: "Relatório e deck do CI — ambos assinados pelo analista.",
    del1Title: "Recomendação Go / Caution / No-Go",
    del1Copy:
      "Baseada na visão completa de todas as dimensões, calibrada face à preocupação declarada pelo comprador e à leitura de viabilidade do roadmap. Apresentada como parte do deck do Investment Committee, pronta para a reunião de decisão do fundo.",
    del2Title: "Conclusões rastreáveis por repositório",
    del2Copy:
      "Cada relatório identifica a versão exata de cada repositório revisto. Os compromissos multi-repositório fixam cada repositório separadamente; todas as conclusões são consolidadas num único entregável.",
    tier2FitsEyebrow: "Quando o Tier 2 é adequado",
    tier2FitsH2: "Série B e posteriores — ou quando múltiplas afirmações tecnológicas têm de ser simultaneamente verdadeiras.",
    tier2FitsCopy:
      "Rondas de Série B e posteriores onde a tese de investimento depende de múltiplas afirmações tecnológicas serem simultaneamente verdadeiras. Fusões e aquisições corporativas onde uma má adequação é um evento lesivo para o fundo. Aquisições de search funds onde o comprador irá operar o software após o fecho. Operações onde o software abrange múltiplos repositórios ou uma afirmação sobre inteligência artificial tem de ser verificavelmente verdadeira. Comités de investimento que pretendem um deck de apresentação pronto para decisão entregue com o relatório.",
    lighterEyebrow: "Procura uma leitura de âmbito mais reduzido?",
    lighterH2: "O Tier 1 cobre até 5 repositórios em 3\u20135 dias úteis.",
    lighterCopy:
      "Para decisões de seed e Série A onde o alvo é uma base de código mais pequena e o calendário é apertado, o Red Flag Scan entrega um relatório assinado e recomendação Go / Caution / No-Go com menor custo e entrega mais rápida.",
    seeTier1: "Ver Tier 1 \u2014 Red Flag Scan",
    tier1SlaNote: "Sujeito a limites de âmbito. Ver nota na página do Tier 1.",
    interviewRole1: "Fundador ou responsável técnico",
    interviewFocus1: "Como o produto está construído, o roadmap e o plano de contratação.",
    interviewRole2: "Responsável de engenharia ou responsável técnico sénior",
    interviewFocus2: "Entrega diária, práticas de revisão de código, cultura de testes.",
    interviewRole3: "Engenheiro sénior ou responsável de operações",
    interviewFocus3: "Como o produto é implementado e operado, histórico de incidentes, fiabilidade.",
    callTitle: "Definir o âmbito de um Full Technical Due Diligence.",
    callCopy:
      "Partilhe o alvo, o número de repositórios, a tese da operação e a data de decisão. A Oliversys confirmará âmbito e prazo de entrega em um dia útil.",
    callButton: "Solicitar uma chamada de enquadramento",
  },

  spotCheck: {
    heroEyebrow: "Spot Check \u00b7 Triagem Rápida de Software",
    heroH1a: "4h Spot Check \u2014 uma leitura rápida de um repositório de software,",
    heroH1em: "entregue em 4 horas.",
    heroAside:
      "Um repositório de software. Sem entrevistas. Sem revisão de arquitetura. Um relatório de uma página \u2014 \u201cTechnical Evidence Readiness \u2014 Spot-Check\u201d \u2014 com um sinal de escalonamento e as principais questões a resolver. Preço: \u20ac500. Decida se deve encomendar um Red Flag Scan ou Full Technical Due Diligence antes de avançar para uma análise mais aprofundada.",
    boundaryEyebrow: "O que este relatório é — e o que não é",
    boundaryBody:
      "Esta é uma triagem rápida de um repositório de software. Identifica sinais imediatos no próprio código: vulnerabilidades de segurança em componentes de terceiros, credenciais acidentalmente expostas, exposição legal relacionada com licenças e padrões de segurança problemáticos conhecidos. Indica se as evidências do repositório são suficientes para avançar para uma revisão mais aprofundada.",
    boundaryNote:
      "Este relatório não conclui sobre: adequação do produto, o negócio ou a sua estratégia, como a equipa está organizada, afirmações sobre inteligência artificial ou produto, direitos de dados, capacidade de crescimento, fiabilidade operacional ou adequação geral ao investimento. O sinal na última página é uma recomendação de escalonamento — não uma recomendação de investimento.",
    whatEyebrow: "Em que consiste este compromisso",
    whatKicker: "ÂMBITO / UM REPOSITÓRIO",
    whatH1: "Um repositório. Uma passagem do analista. Um sinal de escalonamento.",
    step1Title: "Passo 1 \u2014 Revisão do repositório (horas 0\u20133)",
    step1Copy:
      "Uma revisão focada do repositório de software fixado a uma versão específica. Quatro áreas avaliadas: vulnerabilidades de segurança em componentes de terceiros, credenciais acidentalmente expostas, exposição de licenças de código aberto e problemas de padrões de segurança conhecidos. Cada conclusão cita a sua localização exata.",
    step2Title: "Passo 2 \u2014 Revisão do analista e relatório (horas 3\u20134)",
    step2Copy:
      "O analista lê todas as conclusões de alta gravidade, valida quais são genuínas e escreve o relatório de uma página \u201cTechnical Evidence Readiness \u2014 Spot-Check\u201d. O sinal de escalonamento é o julgamento do analista — não é automatizado.",
    inScopeEyebrow: "O que é avaliado",
    inScopeKicker: "QUATRO ÁREAS",
    inScope1Label: "Vulnerabilidades de segurança em componentes de terceiros",
    inScope1Detail:
      "Vulnerabilidades de segurança conhecidas no software de terceiros de que o produto depende, verificadas contra uma base de dados atualizada. Os problemas mais exploráveis são identificados.",
    inScope2Label: "Credenciais acidentalmente expostas",
    inScope2Detail:
      "Uma verificação de palavras-passe, chaves de acesso ou outras credenciais sensíveis que possam ter sido acidentalmente incluídas no repositório. Conclusões verificadas distinguidas de falsos positivos.",
    inScope3Label: "Exposição de licenças de código aberto",
    inScope3Detail:
      "Um inventário completo de cada componente de terceiros de que o software depende, classificado por se a licença permite uso comercial. Qualquer licença que possa restringir como o produto é vendido ou exigir a divulgação do código-fonte é identificada.",
    inScope4Label: "Problemas de padrões de segurança conhecidos",
    inScope4Detail:
      "Uma revisão do código para os tipos de erros de segurança mais frequentemente explorados: manuseamento inadequado de entrada, fraquezas de autenticação e uso incorreto de criptografia.",
    inScope5Label: "Indicadores de saúde do repositório",
    inScope5Detail:
      "Indicadores básicos do nível de atividade de desenvolvimento, em que linguagem o software está escrito e dimensão aproximada — contexto suficiente para o analista delimitar a confiança nas conclusões.",
    outScopeEyebrow: "O que não é coberto",
    outScopeKicker: "FORA DO ÂMBITO NESTE NÍVEL",
    outScope1: "Entrevistas com a equipa do alvo — sem entrevistas neste nível.",
    outScope2: "Como o sistema está arquitetado ou como o produto funciona.",
    outScope3: "Cobertura de testes ou facilidade de fazer alterações.",
    outScope4: "Afirmações sobre inteligência artificial ou produto.",
    outScope5: "Capacidade de crescimento, como o produto é operado ou viabilidade do roadmap.",
    outScopeNote:
      "Qualquer um dos itens acima requer um Tier 1 Red Flag Scan (3\u20135 dias) ou um Tier 2 Full Technical Due Diligence (7\u201310 dias).",
    timelineEyebrow: "Cronograma estimado",
    timelineKicker: "4 HORAS A PARTIR DO ACESSO AO REPOSITÓRIO",
    tl0Day: "Hora 0",
    tl0Action:
      "Acesso ao repositório fornecido. Opcional: a sua preocupação principal (ajuda a focar a revisão). Versão específica fixada.",
    tl1Day: "Horas 0\u20133",
    tl1Action:
      "Revisão automatizada: vulnerabilidades de segurança, credenciais expostas, exposição de licenças, padrões de segurança conhecidos. Cada conclusão cita a sua fonte exata.",
    tl2Day: "Hora 3",
    tl2Action:
      "O analista lê todas as conclusões. Conclusões de alta gravidade validadas. Sinal de escalonamento determinado.",
    tl3Day: "Hora 4",
    tl3Action:
      "Relatório escrito e entregue: \u201cTechnical Evidence Readiness \u2014 Spot-Check\u201d — uma página, assinado pelo analista, com as principais questões e o sinal de escalonamento.",
    delivery:
      "Entrega: relatório assinado de uma página entregue diretamente ao comprador em 4 horas após o acesso ao repositório.",
    delEyebrow: "O que recebe",
    delH2: "Uma página. Três sinais. Assinado pelo analista.",
    del1Title: "Relatório \u201cTechnical Evidence Readiness \u2014 Spot-Check\u201d",
    del1Copy:
      "Um relatório de uma página que cobre as quatro áreas avaliadas, as principais questões a resolver e o sinal de prontidão de evidências. O título do relatório torna o seu âmbito inequívoco — não pode ser confundido com uma due diligence completa.",
    del2Title: "Sinal de escalonamento",
    del2Copy:
      "Um de três resultados: \u201cSem problemas identificados\u201d / \u201cEsclarecimento necessário\u201d / \u201cProblemas encontrados \u2014 Revisão completa recomendada.\u201d Este é um sinal de escalonamento. Não recomenda a favor ou contra uma transação.",
    del3Title: "Principais questões a resolver",
    del3Copy:
      "As conclusões que o analista considera mais importantes, formuladas como perguntas para o comprador. Tornam-se o briefing inicial para um compromisso Tier 1 ou Tier 2, se for encomendado.",
    whenFitsEyebrow: "Quando o Spot Check é adequado",
    whenFitsH2: "Uma leitura rápida antes de se comprometer com uma revisão mais aprofundada.",
    whenFitsCopy:
      "Precisa de decidir em horas se um repositório justifica encomendar um Red Flag Scan ou Full Technical Due Diligence. O software do alvo está num único repositório. Quer uma visão independente antes de uma primeira reunião com o fundador. Precisa de algo rápido o suficiente para informar uma conversa sobre o term sheet.",
    escalateEyebrow: "Próximos passos se forem encontrados problemas",
    escalateH2: "O Spot Check é o início do processo de revisão, não o fim.",
    escalateCopy:
      "Se o sinal de escalonamento for \u201cEsclarecimento necessário\u201d ou \u201cProblemas encontrados \u2014 Revisão completa recomendada\u201d, a lista de principais questões torna-se o briefing para o próximo compromisso. O Red Flag Scan acrescenta entrevistas, uma revisão completa nas dimensões de segurança, exposição legal, saúde do código, equipa e crescimento, e uma recomendação Go / Caution / No-Go. O Full Technical Due Diligence acrescenta uma revisão completa da arquitetura, verificação de afirmações sobre inteligência artificial e uma apresentação ao Investment Committee.",
    seeRedFlagScan: "Ver Tier 1 \u2014 Red Flag Scan (3\u20135 dias)",
    seeFullTDD: "Ver Tier 2 \u2014 Full Technical Due Diligence (7\u201310 dias)",
    callTitle: "Marcar um Spot Check de 4h.",
    callCopy:
      "Partilhe o repositório e a sua preocupação principal (opcional). A Oliversys confirmará o acesso e entregará em 4 horas.",
    callButton: "Marcar Spot Check de 4h",
  },

  blog: {
    eyebrow: "Perspetivas",
    heading: "Artigos sobre due diligence de software.",
    readPost: "Ler",
    noPosts: "Ainda não há artigos.",
  },

  notFound: {
    eyebrow: "Página não encontrada / 404",
    h1: "Este rasto termina aqui.",
    body: "A página pode ter sido movida, mas o caminho de regresso a uma decisão tecnológica mais clara está intacto.",
    returnButton: "Voltar à Oliversys",
  },
};
