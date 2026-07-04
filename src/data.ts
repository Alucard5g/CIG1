import { Service, BlogPost, Alliance } from './types';

const sophiaImg = '/sophia_holographics_1783112130005.jpg';
const opcImg = '/opc_infrastructure_1783112142211.jpg';
const ecoImg = '/ecochasqui_ia_1783112154336.jpg';
const mobilityImg = '/cig_mobility_1783112166551.jpg';
const capitalImg = '/cig_capital_trading_1783119103848.jpg';

export const SERVICES: Service[] = [
  {
    id: 'sophia-holographics',
    name: 'SophIA Holographics',
    subtitle: 'Inteligencia Artificial y Automatización',
    description: 'Desarrollo de interfaces visuales avanzadas, asistentes holográficos automatizados e interacción inteligente en tiempo real para revolucionar la atención al cliente.',
    techFeatures: [
      'Modelado holográfico en tiempo real',
      'Procesamiento de Lenguaje Natural (PLN)',
      'Integración omnicanal',
      'Análisis de sentimiento activo'
    ],
    basePrice: 1500,
    pricingUnit: 'mensual / licencia base',
    badgeColor: 'cyan',
    iconName: 'Sparkles',
    tags: ['IA', 'Hologramas', 'Automatización', 'Soporte'],
    imageUrl: sophiaImg
  },
  {
    id: 'opc-infrastructure',
    name: 'OPC (One Person Company)',
    subtitle: 'Eficiencia Extrema para Emprendimientos',
    description: 'Despliegue de infraestructura empresarial inteligente para automatizar la facturación, inventarios y administración. Permite controlar el 100% de la operación reduciendo costos fijos de nómina a un solo administrador.',
    techFeatures: [
      'ERP automatizado con IA',
      'Facturación electrónica auto-gestionada',
      'Control de inventario predictivo',
      'Dashboard unificado de rentabilidad'
    ],
    basePrice: 850,
    pricingUnit: 'instalación + soporte mensual',
    badgeColor: 'purple',
    iconName: 'Cpu',
    tags: ['OPC', 'Administración', 'Automatización', 'Fintech'],
    imageUrl: opcImg
  },
  {
    id: 'ecochasqui-ia',
    name: 'EcoChasqui IA',
    subtitle: 'Gestión Ambiental y Economía Circular',
    description: 'Software inteligente de reciclaje, clasificación automatizada y optimización de recursos para transformar residuos en activos financieros cumpliendo normativas ambientales, para desarrollar proyectos de alto impacto y ayuda social gracias a nuestra alianza corporativa con la fundación Guerreros de Luz.',
    techFeatures: [
      'Clasificación óptica por visión artificial',
      'Monitoreo de huella de carbono',
      'Tokenización de residuos',
      'Auditorías ambientales automáticas'
    ],
    basePrice: 1200,
    pricingUnit: 'suscripción corporativa',
    badgeColor: 'green',
    iconName: 'Leaf',
    tags: ['Ecología', 'Economía Circular', 'IA', 'Sustentabilidad'],
    imageUrl: ecoImg
  },
  {
    id: 'cig-mobility',
    name: 'CIG Mobility',
    subtitle: 'Logística Inteligente y Seguridad Preventiva con IA',
    description: 'Optimización de flotas con cámaras internas/externas administradas por IA. Detecta somnolencia o embriaguez, y cuenta con una computadora inteligente que toma el control autónomo del vehículo para prevenir accidentes.',
    techFeatures: [
      'Monitoreo biométrico de fatiga',
      'Prevención activa de colisiones (ADAS)',
      'Toma de control de vehículo automatizada',
      'Optimización de rutas por redes neuronales'
    ],
    basePrice: 2400,
    pricingUnit: 'por unidad de transporte',
    badgeColor: 'cyan',
    iconName: 'Shield',
    tags: ['Movilidad', 'Seguridad', 'Logística', 'Hardware Inteligente'],
    imageUrl: mobilityImg
  },
  {
    id: 'cig-capital',
    name: 'CIG Capital Markets',
    subtitle: 'Inversión y Finanzas Sostenibles',
    description: 'Gestión estratégica de excedentes de capital corporativo mediante modelos matemáticos y algoritmos de análisis predictivo avanzados en mercados globales.',
    techFeatures: [
      'Modelos predictivos cuánticos',
      'Optimización de portafolios ESG',
      'Análisis predictivo de volatilidad',
      'Ejecución algorítmica de cobertura'
    ],
    basePrice: 3500,
    pricingUnit: 'administración de excedentes / anual',
    badgeColor: 'purple',
    iconName: 'TrendingUp',
    tags: ['Finanzas', 'Algoritmos', 'Predicción', 'ESG'],
    imageUrl: capitalImg
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'success-opc-reduction',
    title: 'Caso de Éxito: Reducción del 90% en Costos Fijos con OPC',
    category: 'Casos de Éxito',
    snippet: 'Cómo una importadora regional migró toda su contabilidad, stock y facturación a nuestra suite de One Person Company para ser operada por un único director.',
    content: 'La implementación de la infraestructura empresarial inteligente OPC permitió a ImportGlow automatizar sus procesos administrativos clave. Mediante la integración de facturación instantánea, sincronización de stock asistida por IA y un módulo unificado de conciliación bancaria, el negocio ahora se gestiona de forma autónoma con un solo directivo, reduciendo la dependencia de roles administrativos tradicionales y mejorando los márgenes de ganancia un 380%.',
    date: 'Junio 28, 2026',
    readTime: '4 min de lectura',
    author: 'Dra. Elena Alvear, CIG Analytics',
    metrics: {
      label: 'Reducción de Costos Fijos',
      value: '90%'
    }
  },
  {
    id: 'success-mobility-prevention',
    title: 'CIG Mobility: Seguridad Activa y Cero Accidentes en la Flota Pesada de TransAndina',
    category: 'Casos de Éxito',
    snippet: 'La corporación logística TransAndina integró cámaras biométricas y piloto preventivo IA, evitando de manera autónoma 14 posibles colisiones viales graves.',
    content: 'Con más de 50 camiones de carga de larga distancia, TransAndina enfrentaba desafíos por cansancio de operarios en turnos nocturnos. El ecosistema CIG Mobility instaló computadoras de abordo integradas con visión computacional de alta frecuencia. En un lapso de 6 meses, el sistema detectó y alertó con éxito 47 eventos de micro-sueño y tomó el control correctivo autónomo en 14 incidentes, reduciendo la siniestralidad vial de la flota a exactamente cero.',
    date: 'Mayo 15, 2026',
    readTime: '5 min de lectura',
    author: 'Ing. Carlos Ruiz, CTO de CIG Mobility',
    metrics: {
      label: 'Siniestros Viales Evitados',
      value: '100%'
    }
  },
  {
    id: 'eco-chasqui-industrial',
    title: 'EcoChasqui IA: Transformando Residuos Sólidos en Activos Tokenizados',
    category: 'Casos de Éxito',
    snippet: 'Consorcio Metalúrgico del Pacífico optimizó su clasificación de metales y plásticos mediante visión artificial, recibiendo incentivos tributarios verdes.',
    content: 'EcoChasqui IA fue instalado directamente en las líneas de clasificación de residuos del consorcio. Mediante algoritmos de Deep Learning entrenados para diferenciar densidades y tipos de polímeros en microsegundos, se aceleró la separación un 310%. Los residuos clasificados de alta pureza se vendieron como materia prima reciclada certificada, generando un flujo de ingresos colateral de $42,000 mensuales y logrando la certificación carbono neutral.',
    date: 'Abril 02, 2026',
    readTime: '6 min de lectura',
    author: 'Lic. Sofia Jaramillo, Líder de Economía Circular',
    metrics: {
      label: 'Ingreso Extra Mensual',
      value: '+$42K'
    }
  }
];

export const ALLIANCES: Alliance[] = [
  {
    id: 'banco-pichincha',
    name: 'Banco Pichincha',
    logoText: 'BP',
    description: 'Integración avanzada de pasarelas de pago digitales y custodia de activos financieros protegidos bajo estándares cuánticos de CIG Capital Markets.',
    sector: 'Servicios Financieros',
    status: 'En proceso de fase de concretar el acuerdo'
  },
  {
    id: 'corporacion-favorita',
    name: 'Corporación Favorita',
    logoText: 'CF',
    description: 'Alianza estratégica para optimizar la cadena de distribución masiva e implementar EcoChasqui IA en la separación inteligente de residuos reciclables.',
    sector: 'Consumo & Sostenibilidad',
    status: 'En proceso de fase de concretar el acuerdo'
  },
  {
    id: 'cnt-ep',
    name: 'CNT EP',
    logoText: 'CN',
    description: 'Estructuración de redes de telecomunicación descentralizada satelital para dar cobertura en tiempo real a los nodos de CIG Core.',
    sector: 'Telecomunicaciones del Estado',
    status: 'En proceso de fase de concretar el acuerdo'
  },
  {
    id: 'pacari-chocolate',
    name: 'Pacari Chocolate',
    logoText: 'PC',
    description: 'Socio de agricultura regenerativa y comercio justo. Desarrollo conjunto de sistemas de trazabilidad agro-tech y huella de carbono neutral.',
    sector: 'Agro-Tech Sostenible',
    status: 'En proceso de fase de concretar el acuerdo'
  },
  {
    id: 'cerveceria-nacional',
    name: 'Cervecería Nacional',
    logoText: 'CN',
    description: 'Optimización inteligente de flotas de distribución terrestre pesada utilizando la tecnología de prevención autónoma de accidentes de CIG Mobility.',
    sector: 'Logística de Distribución',
    status: 'En proceso de fase de concretar el acuerdo'
  },
  {
    id: 'tonicorp',
    name: 'Tonicorp',
    logoText: 'TC',
    description: 'Desarrollo de biotecnología láctea sustentable aplicada a la matriz de valor y conservación ecológica junto con EcoChasqui IA.',
    sector: 'Alimentos & Bio-Tecnología',
    status: 'En proceso de fase de concretar el acuerdo'
  }
];
