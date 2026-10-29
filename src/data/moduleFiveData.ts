export interface DimensionItem {
  id: string;
  number: string;
  title: string;
  icon: string;
  guidingQuestion: string;
  description: string;
  ecuadorContext: string;
  checkpoints: string[];
}

export interface BuyerProfile {
  id: string;
  name: string;
  avatar: string;
  archetype: string;
  city: string;
  age: number;
  profession: string;
  income: string;
  device: string;
  channels: string[];
  paymentPreference: string;
  averageTicket: string;
  habits: string[];
  pains: string[];
  fears: string[];
  ecoMotivation: string;
  quote: string;
}

export interface EmpathyQuadrantDetail {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  guidingQuestion: string;
  valeriaExample: string[];
  pacariExample: string[];
  waykanaExample: string[];
}

export interface JourneyStage {
  id: number;
  name: string;
  mindset: string;
  color: string;
  description: string;
  clientActions: string[];
  customerExperience: string;
  touchpoints: string[];
  typicalFrictions: string[];
  aiAndEcoSolutions: string[];
}

export interface RealEcuadorianCase {
  id: string;
  brandName: string;
  legalEntity: string;
  founder: string;
  foundationYear: number;
  headquarters: string;
  webUrl: string;
  verifiedBadges: string[];
  shortDescription: string;
  sustainabilityCredentials: string[];
  eCommerceModel: string;
  packagingInnovation: string;
  buyerPersona: {
    name: string;
    age: number;
    location: string;
    jobTitle: string;
    archetype: string;
    socioEconomic: string;
    channelsAndMedia: string[];
    paymentMethod: string;
    coreProblem: string;
    informationHabitsScott: string;
    scottContentAngle: string;
  };
  empathyMap: {
    thinksAndFeels: string[];
    sees: string[];
    hears: string[];
    saysAndDoes: string[];
    pains: string[];
    gains: string[];
  };
  scottStrategy: {
    rule: string;
    contentFormat: string;
    exampleTitle: string;
    callToAction: string;
  };
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  category: 'persona' | 'journey' | 'sostenibilidad' | 'tecnologia';
}

export const HUBSPOT_MAKE_MY_PERSONA_URL =
  'https://www.hubspot.es/make-my-persona?hubs_content=blog.hubspot.es/marketing/que-son-buyer-personas&hubs_content-cta=crea-tu-buyer-persona&hubs_post=blog.hubspot.es/marketing/que-son-buyer-personas&hubs_post-cta=es-blog-author&_ga=2.259277066.1684641307.1793243649-1682194589.1793243649&_gl=1*bnux8l*_ga*MTY4MjE5NDU4OS4xNzkzMjQzNjQ5#/';

export const DIMENSIONS: DimensionItem[] = [
  {
    id: 'contexto',
    number: '01',
    title: 'Contexto Sociodemográfico',
    icon: 'UserCheck',
    guidingQuestion: '¿Quién es este cliente y en qué entorno cotidiano vive en Ecuador?',
    description:
      'No se limita a datos fríos: comprende el nivel educativo, entorno familiar, profesión y poder adquisitivo en el contexto económico ecuatoriano.',
    ecuadorContext:
      'En ciudades como Quito, Guayaquil o Cuenca, el estrato socioeconómico influye directamente en el acceso a tarjetas de crédito internacionales frente a pagos locales.',
    checkpoints: [
      'Rango de edad y etapa vital (estudiante, profesional joven, jefe de hogar)',
      'Ubicación urbana vs periurbana (afecta costos de courier como Servientrega o LaarCourier)',
      'Ingresos disponibles y presupuesto para productos sostenibles',
    ],
  },
  {
    id: 'canales-pagos',
    number: '02',
    title: 'Canales y Medios de Pago',
    icon: 'CreditCard',
    guidingQuestion: '¿Por dónde descubre información y cómo prefiere pagar?',
    description:
      'Mapea sus hábitos de navegación y las pasarelas de pago que le generan confianza versus fricción.',
    ecuadorContext:
      'En Ecuador, el 77% prefiere pagos digitales (BID). Deuna, transferencias directas de Banco Pichincha/Guayaquil y pasarelas como Kushki o Payphone dominan sobre el efectivo.',
    checkpoints: [
      'Redes de descubrimiento: TikTok (18.5M usuarios en EC) e Instagram',
      'Búsqueda orgánica en Google para validar reputación y certificaciones',
      'Métodos de pago preferidos: Deuna, transferencias bancarias con OCR o tarjeta',
    ],
  },
  {
    id: 'dolores-objeciones',
    number: '03',
    title: 'Puntos de Dolor y Objeciones',
    icon: 'AlertCircle',
    guidingQuestion: '¿Qué frustraciones sufre y qué le frena a concretar la compra?',
    description:
      'Identifica sus problemas no resueltos, el temor al greenwashing y las barreras de costo o confianza.',
    ecuadorContext:
      'Desconfianza en tiempos de entrega de couriers locales y sospecha de marcas que cobran el doble con el pretexto de "ser ecológicas".',
    checkpoints: [
      'Miedo a que el producto no funcione igual de bien que la opción tradicional',
      'Sospecha de greenwashing: falta de sellos auditables o trazabilidad',
      'Fricción de checkout: páginas lentas o formularios de envío interminables',
    ],
  },
  {
    id: 'sostenibilidad-ia',
    number: '04',
    title: 'Sostenibilidad e Inteligencia Artificial',
    icon: 'Leaf',
    guidingQuestion: '¿Qué valor ambiental exige y cómo la IA reduce sus fricciones?',
    description:
      'Determina la sensibilidad ecológica real del cliente y los puntos donde la IA acelera y personaliza su experiencia.',
    ecuadorContext:
      'Validación de empaques de caña de azúcar, opciones de refill y chatbots con RAG que responden al instante sobre ingredientes y envíos.',
    checkpoints: [
      'Preferencia por empaques compostables o reciclables certificados',
      'Asistentes IA que recomiendan la dosis o variante exacta según su necesidad',
      'Sistemas OCR para verificación instantánea de comprobantes de pago por transferencia',
    ],
  },
];

export const BUYER_PROFILES: BuyerProfile[] = [
  {
    id: 'valeria',
    name: 'Valeria Paredes',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    archetype: 'La Creativa Consciente & Zero-Waste',
    city: 'Quito (Sector La Carolina / Guápulo)',
    age: 26,
    profession: 'Diseñadora Gráfica & Creadora de Contenido',
    income: '$900 - $1.400 USD mensuales',
    device: 'iPhone 14 · Uso intensivo móvil',
    channels: ['TikTok', 'Instagram', 'Pinterest', 'Spotify Podcasts'],
    paymentPreference: 'Deuna / Tarjeta de débito digital',
    averageTicket: '$25 - $40 USD por pedido',
    habits: [
      'Investiga ingredientes y opiniones de usuarios reales antes de comprar cosmética.',
      'Sigue cuentas de estilo de vida sostenible y huertos urbanos.',
      'Evita marcas que envían sus productos envueltos en plástico de burbujas.',
    ],
    pains: [
      'Ha comprado champús sólidos que le dejaron el cabello opaco o reseco.',
      'Siente que muchas marcas locales cobran un sobreprecio injustificado por llamarse "eco".',
      'Odia tener que enviar captura de transferencia por WhatsApp y esperar 3 horas a que verifiquen.',
    ],
    fears: [
      'Caer en greenwashing o apoyar marcas que solo hacen marketing superficial.',
      'Que el producto se dañe o derrita durante el transporte en días soleados.',
    ],
    ecoMotivation: 'Eliminar el plástico de un solo uso en su baño y apoyar productores locales.',
    quote: '«Quiero cuidar el planeta, pero necesito que el producto realmente funcione y no me complique la vida.»',
  },
  {
    id: 'carlos',
    name: 'Carlos Mendoza',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    archetype: 'El Profesional Pragmático & Eficiente',
    city: 'Guayaquil (Samborondón)',
    age: 38,
    profession: 'Gerente Comercial en Empresa de Logística',
    income: '$2.200 - $3.500 USD mensuales',
    device: 'Laptop ThinkPad + Samsung Galaxy S23',
    channels: ['LinkedIn', 'Google Search', 'YouTube Tech', 'Twitter / X'],
    paymentPreference: 'Tarjeta de crédito corporativa o personal (Kushki)',
    averageTicket: '$60 - $120 USD por pedido',
    habits: [
      'Compra todo por e-commerce para ahorrar tiempo en el tráfico.',
      'Valora la puntualidad de entrega por encima de pequeños descuentos.',
      'Prefiere productos de origen ecuatoriano de alta gama para regalos ejecutivos.',
    ],
    pains: [
      'Páginas web que no tienen stock en tiempo real y cancelan pedidos.',
      'Falta de factura electrónica inmediata con RUC desglosado.',
      'Atención al cliente lenta que no resuelve problemas de despacho.',
    ],
    fears: [
      'Pagar por adelantado y que el paquete llegue tarde a un compromiso de negocios.',
    ],
    ecoMotivation: 'Comprar marcas con certificaciones serias (B Corp, Fair Trade) sin complicaciones.',
    quote: '«Si la tienda es rápida, transparente y me entrega a tiempo con buena presentación, soy cliente fiel.»',
  },
  {
    id: 'elena',
    name: 'Elena Morales',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    archetype: 'La Madre Saludable & Bienestar Familiar',
    city: 'Cuenca (Sector Challuabamba)',
    age: 42,
    profession: 'Nutricionista & Docente Universitaria',
    income: '$1.500 - $2.400 USD mensuales',
    device: 'iPad + Celular',
    channels: ['Instagram', 'Grupos de WhatsApp de colegios', 'Blogs de salud', 'Google Académico'],
    paymentPreference: 'Transferencia bancaria directa (Banco Guayaquil / Pichincha)',
    averageTicket: '$45 - $80 USD por pedido',
    habits: [
      'Lee la tabla nutricional y las etiquetas de origen de cada producto que entra a su hogar.',
      'Compra en conjunto con familiares o amigas para amortizar el costo de envío.',
      'Prefiere envases de vidrio retornables o sistemas de recarga (refill).',
    ],
    pains: [
      'Falta de claridad en los ingredientes químicos o alérgenos.',
      'Cobros excesivos de flete hacia ciudades fuera de Quito y Guayaquil.',
      'Instrucciones confusas sobre cómo desechar o reciclar los envases.',
    ],
    fears: [
      'Comprar alimentos o cosméticos con conservantes tóxicos disfrazados de "naturales".',
    ],
    ecoMotivation: 'Proteger la salud de sus hijos y fomentar la economía circular en su comunidad.',
    quote: '«La salud de mi familia empieza por lo que consumimos y el ejemplo que dejamos al planeta.»',
  },
];

export const EMPATHY_QUADRANTS: EmpathyQuadrantDetail[] = [
  {
    id: 'piensa-siente',
    title: '¿Qué piensa y siente?',
    subtitle: 'Lo que realmente le importa, sus aspiraciones y temores íntimos',
    icon: 'Brain',
    color: 'from-amber-500/20 to-orange-500/20 text-amber-700 dark:text-amber-300 border-amber-300',
    guidingQuestion: '¿Cuáles son sus emociones profundas al contemplar la compra?',
    valeriaExample: [
      '«Tengo miedo de gastar $12 en un champú sólido que me reseque el cabello rizado.»',
      '«Me da satisfacción no generar basura plástica cada mes.»',
      '«Dudo si esta marca ecuatoriana realmente hace compostaje o solo usa cartón reciclado.»',
    ],
    pacariExample: [
      '«Quiero regalar un chocolate que demuestre el orgullo y riqueza de mi país.»',
      '«Me emociona saber que cada barra apoya directamente a agricultores en Napo y Vinces.»',
      '«¿El sabor será demasiado amargo o tendrá el balance perfecto para quien lo reciba?»',
    ],
    waykanaExample: [
      '«Necesito energía limpia para rendir en el trabajo y crossfit sin la taquicardia del café o energizantes.»',
      '«Me fascina la conexión ancestral de la guayusa de las comunidades amazónicas.»',
      '«Quiero saber si las bolsitas de té son 100% biodegradables y no liberan microplásticos.»',
    ],
  },
  {
    id: 've',
    title: '¿Qué ve?',
    subtitle: 'Su entorno cotidiano, lo que observa en el mercado y en redes',
    icon: 'Eye',
    color: 'from-blue-500/20 to-cyan-500/20 text-blue-700 dark:text-blue-300 border-blue-300',
    guidingQuestion: '¿Qué estímulos visuales y ofertas de la competencia observa a diario?',
    valeriaExample: [
      'Tiendas en Instagram con fotos súper estéticas de baños minimalistas.',
      'Supermercados tradicionales llenos de botellas de champú de plástico barato a $4.',
      'TikTokers ecuatorianas recomendando productos ecológicos importados caros.',
    ],
    pacariExample: [
      'Góndolas de aeropuertos y supermercados con chocolates industriales suizos o masivos.',
      'Boutiques de chocolate con catas visuales y elegantes empaques de caña de azúcar.',
      'Premios internacionales ganados por Pacari en Londres y Nueva York.',
    ],
    waykanaExample: [
      'Latas de Red Bull y Monster con colores fluorescentes y listas eternas de químicos.',
      'Influencers fitness en Guayaquil compartiendo termos de agua fría con guayusa natural.',
      'Empaques minimalistas de Waykana en perchas de Supermaxi y tiendas saludables.',
    ],
  },
  {
    id: 'oye',
    title: '¿Qué oye?',
    subtitle: 'Lo que dicen sus amistades, familiares, colegas e influencers',
    icon: 'Ear',
    color: 'from-emerald-500/20 to-teal-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-300',
    guidingQuestion: '¿Qué opiniones y comentarios influyen en su percepción?',
    valeriaExample: [
      'Amigas que dicen: «Ese champú en barra no hace espuma, te va a costar acostumbrarte».',
      'Influencers de ecología denunciando el greenwashing de grandes transnacionales.',
      'Su mamá diciendo: «¿Por qué pagas tanto por un jabón cuando el normal cuesta un dólar?».',
    ],
    pacariExample: [
      'Chefs y amantes de la gastronomía diciendo: «El cacao fino de aroma de Ecuador es el mejor del mundo».',
      'Extranjeros recomendando Pacari como el mejor souvenir para llevar desde Quito.',
      'Colegas hablando sobre el modelo de sostenibilidad y certificación B de Pacari.',
    ],
    waykanaExample: [
      'Compañeros de entrenamiento: «La guayusa me da energía sostenida durante 6 horas sin temblor».',
      'Médicos advirtiendo sobre el exceso de azúcar y taurina en bebidas comerciales.',
      'Comuneros amazónicos explicando en videos cómo la guayusa preserva la selva primaria.',
    ],
  },
  {
    id: 'dice-hace',
    title: '¿Qué dice y hace?',
    subtitle: 'Su comportamiento público, lenguaje y acciones cotidianas',
    icon: 'MessageSquare',
    color: 'from-purple-500/20 to-pink-500/20 text-purple-700 dark:text-purple-300 border-purple-300',
    guidingQuestion: '¿Cómo actúa públicamente frente a los demás y qué decisiones toma?',
    valeriaExample: [
      'Lleva siempre su bolsa de tela y termo de agua de acero inoxidable.',
      'Publica fotos de sus productos favoritos en historias de Instagram etiquetando marcas locales.',
      'Pregunta en el WhatsApp de las tiendas: «¿Cómo envían el paquete? ¿Usan plástico?».',
    ],
    pacariExample: [
      'Compra barras de sal de Maras o maracuyá para llevar a cenas familiares o eventos de amigos.',
      'Explica a sus invitados la diferencia entre chocolate con cacao fino y golosinas azucaradas.',
      'Elige cajas de colección con papel de caña de azúcar para regalos de fin de año.',
    ],
    waykanaExample: [
      'Toma guayusa helada durante sus videollamadas matutinas y jornadas de trabajo remoto.',
      'Recomienda a sus amigos reemplazar los refrescos sintéticos por infusiones amazónicas.',
      'Pide por la web o WhatsApp pagando directamente con Deuna para tener su stock mensual.',
    ],
  },
  {
    id: 'dolores-esfuerzos',
    title: 'Esfuerzos y Dolores (Pains)',
    subtitle: 'Miedos, frustraciones, obstáculos y riesgos percibidos',
    icon: 'AlertTriangle',
    color: 'from-rose-500/20 to-red-500/20 text-rose-700 dark:text-rose-300 border-rose-300',
    guidingQuestion: '¿Qué le genera incertidumbre, gasto indeseado o molestia?',
    valeriaExample: [
      'Tiempos de entrega imprecisos en couriers («llega entre lunes y jueves»).',
      'Tener que pagar $4 de flete por un producto de $10.',
      'Productos que se deshacen en la jabonera por falta de instructivo de conservación.',
    ],
    pacariExample: [
      'Riesgo de que las barras de chocolate se derritan si el repartidor las deja al sol en la moto.',
      'Duda al elegir entre más de 40 variedades distintas sin poder probarlas antes.',
      'Costos de envío internacional o demoras en fechas pico navideñas.',
    ],
    waykanaExample: [
      'Desconocer cómo preparar correctamente la guayusa para obtener el mejor sabor.',
      'Quedarse sin producto antes de tiempo porque no hay sistema de suscripción recurrente.',
      'Desconfianza de si la cafeína natural interferirá con su descanso nocturno.',
    ],
  },
  {
    id: 'ganancias-resultados',
    title: 'Resultados y Beneficios (Gains)',
    subtitle: 'Deseos de éxito, medidas de satisfacción y necesidades cumplidas',
    icon: 'CheckCircle2',
    color: 'from-emerald-500/20 to-green-500/20 text-emerald-800 dark:text-emerald-200 border-emerald-300',
    guidingQuestion: '¿Qué beneficios concretos la hacen sentir satisfecha y orgullosa?',
    valeriaExample: [
      'Cabello suave, brillante y cuero cabelludo sano sin químicos agresivos.',
      'Unboxing ecológico: caja de caña de azúcar y etiqueta plantable con semillas de manzanilla.',
      'Confirmación instantánea de pedido con código de rastreo en tiempo real por WhatsApp.',
    ],
    pacariExample: [
      'El halago sincero de quien recibe la caja de regalo: «¡Es el mejor chocolate que he probado!».',
      'Saber que su compra generó ingresos justos directos a agricultores de Napo.',
      'Empaque 100% compostable que puede desechar en su compostera casera sin culpa.',
    ],
    waykanaExample: [
      'Claridad mental y energía constante para rendir en su jornada laboral y deportiva.',
      'Apoyar la preservación de la selva amazónica mediante la recolección agroforestal sostenible.',
      'Facilidad de recompra en un clic con factura electrónica automática en su buzón.',
    ],
  },
];

export const ECUADORIAN_CASES: RealEcuadorianCase[] = [
  {
    id: 'pacari',
    brandName: 'Pacari® Chocolates',
    legalEntity: 'SKS Farm Cía. Ltda. (Ecuador)',
    founder: 'Santiago Peralta y Carla Barboto',
    foundationYear: 2002,
    headquarters: 'Quito, Pichincha, Ecuador',
    webUrl: 'https://www.pacari.com',
    verifiedBadges: [
      'Empresa B Certificada (B Corp)',
      '100% Orgánico USDA & Demeter Biodinámico',
      'Más de 400 Premios International Chocolate Awards',
      'Comercio Directo con +4.000 Familias Agricultoras',
    ],
    shortDescription:
      'Pionera mundial en chocolate orgánico fino de aroma desde el árbol a la barra (Tree-to-Bar), producido enteramente en Ecuador con empaques biodegradables.',
    sustainabilityCredentials: [
      'Empaques elaborados a base de celulosa vegetal y residuos de caña de azúcar (biodegradables en 180 días).',
      'Pago a agricultores de hasta el doble del precio convencional del mercado bursátil de cacao.',
      'Modelo biodinámico que no utiliza pesticidas ni químicos en la cuenca del Amazonas y la Costa ecuatoriana.',
    ],
    eCommerceModel:
      'Tienda digital oficial nacional (pacari.com/ec) e internacional, envíos a domicilio mediante couriers locales en Quito, Guayaquil, Cuenca y todo el Ecuador, cajas de regalo corporativas y suscripciones.',
    packagingInnovation:
      'Cajas impresas con tintas vegetales sobre cartón de bagazo de caña de azúcar de San Carlos y bolsas interiores compostables que reemplazan el plástico de polipropileno.',
    buyerPersona: {
      name: 'Sebastián Arteaga',
      age: 34,
      location: 'Cumbayá, Quito, Ecuador',
      jobTitle: 'Arquitecto bioclimático & Consultor LEED',
      archetype: 'El Consumidor Consciente y Gourmet Urbano',
      socioEconomic: 'Nivel medio-alto ($2.000 - $3.200 USD)',
      channelsAndMedia: ['Instagram (@pacari_chocolate)', 'Google Search', 'LinkedIn', 'Food & Wine'],
      paymentMethod: 'Tarjeta de crédito / Deuna',
      coreProblem:
        'Busca obsequios gastronómicos de clase mundial que transmitan valores de sostenibilidad real para clientes y familiares, sin recurrir a marcas importadas ni empaques contaminantes.',
      informationHabitsScott:
        'Lee sobre el origen de los ingredientes y las certificaciones B-Corp antes de confiar. No le atraen las promociones ruidosas de 2x1; prefiere conocer la historia humana de la comunidad de Vinces o Santa Rita detrás de la barra.',
      scottContentAngle:
        'Guía interactiva de maridaje de chocolate biodinámico con café de Loja y vinos, y un documental de 90 segundos que muestra a don Segundo cosechando cacao fino de aroma en Esmeraldas.',
    },
    empathyMap: {
      thinksAndFeels: [
        '«Quiero regalar algo que dé orgullo del Ecuador y que tenga coherencia ecológica.»',
        '«Me preocupa que el chocolate sufra con el calor si el courier tarda en la entrega.»',
        '«Siento satisfacción genuina al saber que el valor se queda en las comunidades campesinas y no en intermediarios europeos.»',
      ],
      sees: [
        'Estantes llenos de barras industriales cargadas de azúcar y aceite de palma.',
        'Publicaciones en redes sociales donde Pacari muestra a los agricultores recibiendo capacitaciones.',
        'Empaque impecable en tiendas gourmet que destaca el porcentaje de cacao (70%, 85%, 100%).',
      ],
      hears: [
        'A chefs internacionales elogiando la textura y notas florales del chocolate ecuatoriano.',
        'A colegas corporativos recomendando las cajas de regalo de Pacari para clientes importantes.',
        'Comentarios de que el chocolate negro orgánico es una fuente extraordinaria de antioxidantes.',
      ],
      saysAndDoes: [
        'Visita pacari.com directamente desde su teléfono para armar un pack personalizado de 6 barras.',
        'Prefiere pagar en línea con tarjeta para recibir factura electrónica con RUC automáticamente.',
        'Comparte fotos en Instagram del empaque compostable mencionando el compromiso ambiental.',
      ],
      pains: [
        'Tener que pagar un flete alto si solo necesita comprar 2 o 3 barras para consumo personal.',
        'La duda de si los empaques de regalo resistirán un trayecto en carretera sin abollarse.',
      ],
      gains: [
        'Presentación impecable lista para regalar con tarjeta personalizada.',
        'La certeza de consumir un producto libre de químicos y con huella de carbono reducida.',
      ],
    },
    scottStrategy: {
      rule: 'David Meerman Scott: Crear contenido educativo y de valor que responda preguntas específicas del comprador en lugar de enviar spam publicitario.',
      contentFormat: 'Masterclass en video corto y Guía descargable de cata de cacao fino en casa.',
      exampleTitle: '«Cómo reconocer un chocolate 100% orgánico libre de pesticidas y por qué el empaque de caña de azúcar protege el aroma.»',
      callToAction: 'Descubre el lote de origen y arma tu caja personalizada con despacho sustentable.',
    },
  },
  {
    id: 'waykana',
    brandName: 'Waykana® Guayusa Amazónica',
    legalEntity: 'Waykana Amazonian Herbs Cía. Ltda.',
    founder: 'Demetrio Santander y Juan David Gómez',
    foundationYear: 2015,
    headquarters: 'Tena (Napo) y Quito, Ecuador',
    webUrl: 'https://www.waykana.com',
    verifiedBadges: [
      'Empresa B Certificada (B Corp)',
      'Cultivo Agroforestal Sostenible (Chakras Kichwa)',
      'Certificación Orgánica USDA / Kiwa BCS Öko-Garantie',
      'Exportación a más de 12 países',
    ],
    shortDescription:
      'Empresa ecuatoriana nacida en la Amazonía para revalorizar la hoja sagrada de guayusa, creando bebidas energéticas 100% naturales en lata y hojas deshidratadas para infusión.',
    sustainabilityCredentials: [
      'Cultivo ancestral bajo sombra en chakras amazónicas sin deforestación de bosque nativo.',
      'Alianza directa con cientos de familias indígenas Kichwa de Napo, pagando precios justos y estables.',
      'Bebidas libres de azúcar refinada, sin colorantes artificiales y en latas de aluminio 100% reciclables.',
    ],
    eCommerceModel:
      'Tienda en línea oficial (waykana.com) con packs de guayusa en hoja, pirámides biodegradables y latas frías; pedidos rápidos por WhatsApp Business y distribución en supermercados del Ecuador.',
    packagingInnovation:
      'Bolsitas de infusión piramidales hechas de almidón de maíz biodegradable (PLA) sin blanqueadores químicos ni microplásticos.',
    buyerPersona: {
      name: 'Lucía Santamaría',
      age: 29,
      location: 'Samborondón / Guayaquil, Ecuador',
      jobTitle: 'Líder de Producto Digital en Fintech & Atleta amateur',
      archetype: 'La Profesional Dinámica & Saludable',
      socioEconomic: 'Nivel medio-alto ($1.600 - $2.500 USD)',
      channelsAndMedia: ['Instagram (@waykana)', 'TikTok', 'WhatsApp', 'Strava'],
      paymentMethod: 'Deuna / Transferencia bancaria directa / Tarjeta',
      coreProblem:
        'Necesita energía sostenida y concentración mental para sus jornadas de 9 horas de trabajo más sus entrenamientos, pero el café le genera acidez y las bebidas energizantes le dan temblor y ansiedad.',
      informationHabitsScott:
        'Busca en Google y TikTok estudios sobre nootrópicos naturales, cafeína de liberación lenta y recetas de bebidas frías energéticas. Confía en testimonios reales de deportistas ecuatorianos.',
      scottContentAngle:
        'Comparativa gráfica entre los efectos de la L-teanina + cafeína de la guayusa vs el "crash" del café tradicional, acompañada del ritual ancestral amazónico de las 4 AM.',
    },
    empathyMap: {
      thinksAndFeels: [
        '«Necesito rendir al máximo sin perjudicar mi corazón ni mi estómago.»',
        '«Me enorgullece consumir algo endémico de la Amazonía de mi país.»',
        '«¿La infusión fría sabrá rica o será demasiado amarga?»',
      ],
      sees: [
        'Bebidas energéticas en el gimnasio con advertencias de exceso de azúcar y taurina.',
        'Compañeros de trabajo tomando 4 tazas de café al día con reflujo y estrés.',
        'La lata y el frasco de Waykana con diseño moderno, elegante y limpio.',
      ],
      hears: [
        'A su entrenador decir que la guayusa tiene el doble de antioxidantes que el té verde.',
        'A amigos en Guayaquil recomendando Waykana fría con limón y jengibre para el calor.',
        'Noticias sobre la preservación de la selva amazónica gracias a la bioeconomía.',
      ],
      saysAndDoes: [
        'Pide un six-pack de latas Waykana y un paquete de hojas a granel desde la web.',
        'Paga con Deuna en 10 segundos escaneando el código QR.',
        'Lleva su termo de guayusa fría a la oficina y convida a sus compañeros.',
      ],
      pains: [
        'Que la tienda online no tenga envío express para el mismo día cuando se le acaba el stock.',
        'Falta de tiendas físicas cercanas en Guayaquil con todas las variedades de sabores.',
      ],
      gains: [
        'Energía limpia y enfoque sostenido durante toda la tarde.',
        'Cero bajón de energía al finalizar el día, permitiéndole dormir profundamente.',
      ],
    },
    scottStrategy: {
      rule: 'David Meerman Scott: Resolver el dolor del usuario con contenido educativo en el momento exacto en que busca una alternativa más saludable.',
      contentFormat: 'Calculadora interactiva de cafeína y energía limpia en video vertical para TikTok e Instagram.',
      exampleTitle: '«Guía práctica: Cómo reemplazar 3 tazas de café por Guayusa Amazónica y eliminar el insomnio sin perder productividad.»',
      callToAction: 'Pide tu kit de inicio Waykana con envío gratis en tu primera compra.',
    },
  },
  {
    id: 'sweetandcoffee',
    brandName: 'Sweet & Coffee®',
    legalEntity: 'Sweet & Coffee S.A.',
    founder: 'Richard Peet y Soledad Hanna',
    foundationYear: 1997,
    headquarters: 'Guayaquil, Guayas, Ecuador',
    webUrl: 'https://www.sweetandcoffee.com.ec',
    verifiedBadges: [
      'Más de 125 locales en Guayaquil, Quito y vía a la Costa',
      'Pionera en café ecuatoriano de altura (Loja y Zamora)',
      'App móvil Sweet & Coffee Club con más de 500k descargas',
      'Cadena de cafeterías más valorada del Ecuador',
    ],
    shortDescription:
      'La cadena de cafeterías ecuatoriana insignia, reconocida por promover el café de especialidad de origen lojano, postres tradicionales y una sólida experiencia omnicanal y de fidelización digital.',
    sustainabilityCredentials: [
      'Alianza con cooperativas de caficultores de altura en Loja y Zamora, promoviendo cosechas responsables.',
      'Iniciativas de reciclaje de borra de café para abono y reducción de plásticos de un solo uso en sus vasos.',
      'Universidad Sweet & Coffee para capacitar a jóvenes baristas ecuatorianos en empleo digno.',
    ],
    eCommerceModel:
      'App móvil propia Sweet & Coffee Club con geolocalización, pedidos anticipados para retiro en tienda, acumulación de estrellas (cashback digital), delivery propio y alianza con Rappi/PedidosYa.',
    packagingInnovation:
      'Vasos de cartón biodegradable con tapas reciclables y empaques de papel kraft para panadería y tortas.',
    buyerPersona: {
      name: 'Mateo Vásconez',
      age: 27,
      location: 'Quito (Sector La Mariscal / Av. República de El Salvador)',
      jobTitle: 'Consultor de Estrategia Digital & Nomad Worker',
      archetype: 'El Profesional Joven Urbano & Digital',
      socioEconomic: 'Nivel medio ($1.100 - $1.800 USD)',
      channelsAndMedia: ['Instagram', 'App Sweet & Coffee Club', 'LinkedIn', 'Spotify'],
      paymentMethod: 'App Sweet & Coffee Club (Tarjeta asociada) / Deuna',
      coreProblem:
        'Necesita un espacio cálido y confiable para trabajar con buen internet y café de calidad, o pedir anticipadamente su desayuno sin hacer filas de 15 minutos en horas pico.',
      informationHabitsScott:
        'Consulta notificaciones de la app con promociones matutinas, busca en Google Maps locales cercanos con parqueo o mesas amplias y revisa historias de nuevos postres de temporada.',
      scottContentAngle:
        'Tutoriales de preparación de café de prensa francesa con grano lojano en casa y playlists de Spotify curadas para concentrarse mientras tomas un capuchino.',
    },
    empathyMap: {
      thinksAndFeels: [
        '«Un buen café me cambia el humor para encarar una jornada pesada.»',
        '«Valoro que sea una marca 100% nacida en Guayaquil que compite con gigantes extranjeros.»',
        '«Me encanta premiar mi esfuerzo semanal con una porción de Torta Mojada de Chocolate.»',
      ],
      sees: [
        'Locales iluminados con ambiente acogedor, madera y aroma a café tostado.',
        'Vitrinas llenas de postres frescos, sándwiches artesanales y galletas recién horneadas.',
        'La fila de personas pidiendo en caja mientras él retira su pedido directo con la app.',
      ],
      hears: [
        'Música instrumental suave de fondo y el sonido característico del vaporizador de leche.',
        'Amigos diciendo: «Nos vemos en el Sweet & Coffee de la República para conversar».',
        'El barista saludándolo cordialmente por su nombre al escanear la app.',
      ],
      saysAndDoes: [
        'Abre la app 10 minutos antes de llegar para pedir su americano grande con leche deslactosada.',
        'Muestra el código QR de su teléfono para acumular estrellas en su perfil.',
        'Se sienta en una mesa junto a un enchufe, conecta su laptop y trabaja un par de horas.',
      ],
      pains: [
        'Llegar y encontrar todas las mesas ocupadas en horas de la tarde.',
        'Que el internet del local tenga intermitencia durante una reunión importante de Zoom.',
      ],
      gains: [
        'Ahorro de tiempo gracias al pedido anticipado en la app.',
        'Bebidas gratis canjeadas periódicamente con sus estrellas acumuladas.',
      ],
    },
    scottStrategy: {
      rule: 'David Meerman Scott: Usar la tecnología para resolver fricciones cotidianas de tiempo del cliente y crear conexiones emocionales de marca.',
      contentFormat: 'Campaña omnicanal móvil con gamificación y contenido sobre el cultivo del café en Loja.',
      exampleTitle: '«Del cafetal de Loja a tu taza en 3 minutos: cómo pedir sin filas con tu app Sweet & Coffee Club.»',
      callToAction: 'Descarga la app, acumula tus primeras estrellas y pide tu café favorito.',
    },
  },
];

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    id: 1,
    name: 'Descubrimiento',
    mindset: 'Curioso',
    color: 'from-blue-600 to-indigo-600',
    description:
      'El cliente detecta una necesidad o inquietud latente (ej. reducir el plástico o buscar energía natural) y navega en redes o buscadores.',
    clientActions: [
      'Ve un video en TikTok sobre cosmética sólida o guayusa amazónica.',
      'Busca en Google «shampoo en barra sin sal Ecuador» o «chocolate orgánico Quito».',
      'Lee comentarios en publicaciones de Instagram para ver si la marca es confiable.',
    ],
    customerExperience:
      'Fascinación ante una propuesta estética y sostenible, mezclada con escepticismo inicial.',
    touchpoints: ['TikTok Ads y orgánico', 'Reels de Instagram', 'Búsqueda orgánica en Google', 'Boca a boca de amigos'],
    typicalFrictions: [
      'Desconocimiento de la marca o sospecha de greenwashing.',
      'Contenido publicitario genérico que no responde preguntas reales.',
    ],
    aiAndEcoSolutions: [
      'Contenido educativo inbound (Scott): videos transparentes que muestran la fábrica o finca real.',
      'IA generativa para crear copys ultra-específicos para cada buyer persona.',
    ],
  },
  {
    id: 2,
    name: 'Consideración',
    mindset: 'Exigente',
    color: 'from-amber-600 to-orange-600',
    description:
      'El usuario compara alternativas, evalúa precios, revisa la lista de ingredientes y analiza costos y tiempos de despacho en Ecuador.',
    clientActions: [
      'Entra a la tienda online y revisa la ficha técnica y sellos (B Corp, orgánico).',
      'Calcula si el costo de envío a su ciudad (Quito, Guayaquil, Cuenca, etc.) encarece el producto.',
      'Escribe al chat web o WhatsApp para preguntar por stock o método de uso.',
    ],
    customerExperience:
      'Duda reflexiva: busca garantías de que no tirará su dinero a la basura.',
    touchpoints: ['Página de producto (PDP)', 'Preguntas frecuentes (FAQ)', 'Chatbot web / WhatsApp', 'Reseñas de compradores'],
    typicalFrictions: [
      'Falta de información sobre ingredientes o políticas de devolución.',
      'Chatbot básico que da respuestas automáticas inútiles («un asesor te responderá pronto»).',
    ],
    aiAndEcoSolutions: [
      'Chatbot con tecnología RAG (Retrieval-Augmented Generation) conectado a los documentos oficiales de la empresa para responder dudas técnicas al instante.',
      'Calculadora de huella de carbono y ahorro de plástico en la ficha de producto.',
    ],
  },
  {
    id: 3,
    name: 'Compra y Pago',
    mindset: 'Confiado',
    color: 'from-emerald-600 to-teal-600',
    description:
      'El cliente toma la decisión y realiza la transacción comercial. Momento crítico donde una mala pasarela arruina la conversión.',
    clientActions: [
      'Añade productos al carrito y selecciona su método de entrega.',
      'Elige pagar con Deuna, transferencia bancaria directa o tarjeta.',
      'Sube el comprobante de transferencia o completa el formulario de pago.',
    ],
    customerExperience:
      'Alivio al completar el pedido de forma ágil y recibir confirmación inmediata.',
    touchpoints: ['Carrito de compra', 'Pasarela de pagos (Kushki / Payphone / Deuna)', 'Comprobante de depósito', 'Correo de confirmación'],
    typicalFrictions: [
      'Formularios kilométricos que exigen crear cuenta con contraseña obligatoria.',
      'Tener que esperar horas para que un humano valide el comprobante bancario por WhatsApp.',
    ],
    aiAndEcoSolutions: [
      'Checkout en un solo clic con autocompletado y compra como invitado.',
      'OCR inteligente que lee el comprobante bancario (Pichincha, Guayaquil, Deuna) y aprueba el pedido en 3 segundos sin intervención humana.',
    ],
  },
  {
    id: 4,
    name: 'Entrega y Desempaque',
    mindset: 'Emocionado',
    color: 'from-purple-600 to-pink-600',
    description:
      'El cliente recibe el paquete en su casa u oficina y vive la experiencia física del producto y su embalaje.',
    clientActions: [
      'Rastrea el paquete con la guía de Servientrega, LaarCourier o mensajería propia.',
      'Abre la caja y graba un unboxing para sus redes o amigos.',
      'Revisa la etiqueta con instrucciones de uso y cuidado del producto.',
    ],
    customerExperience:
      'Alegría sensorial ante un empaque limpio, aromático y coherente con la promesa ecológica.',
    touchpoints: ['Repartidor / Courier', 'Caja de bagazo de caña de azúcar', 'Tarjeta de papel semilla plantable', 'Instructivo digital'],
    typicalFrictions: [
      'El paquete llega golpeado o el producto derretido por mala logística.',
      'Encontrar plástico de burbujas en un pedido que prometía ser 100% ecológico.',
    ],
    aiAndEcoSolutions: [
      'Empaques compostables de caña de azúcar y viruta de madera reciclada.',
      'Rastreo predictivo por IA que avisa al cliente la hora estimada de llegada con margen de 30 minutos.',
    ],
  },
  {
    id: 5,
    name: 'Fidelización',
    mindset: 'Orgulloso',
    color: 'from-rose-600 to-red-600',
    description:
      'El cliente experimenta los beneficios continuos del producto, lo recompra fácilmente y se convierte en promotor de la marca.',
    clientActions: [
      'Recomienda el producto a sus amigos y familiares en persona y redes.',
      'Aprovecha un sistema de recarga (refill) o acumula estrellas en la app.',
      'Participa en la comunidad de la marca (talleres, reciclaje, eventos sostenibles).',
    ],
    customerExperience:
      'Sentimiento de pertenencia a una comunidad que genera un impacto positivo real.',
    touchpoints: ['Boletín educativo por correo', 'Programa de lealtad / App', 'Logística inversa para retorno de envases', 'Comunidad en WhatsApp'],
    typicalFrictions: [
      'Bombardeo de correos promocionales genéricos que saturan su buzón.',
      'Dificultad para recargar el envase o falta de incentivos por recomprar.',
    ],
    aiAndEcoSolutions: [
      'Suscripción inteligente que predice cuándo se le va a terminar el producto y sugiere la recompra con descuento en el momento exacto.',
      'Logística inversa automatizada donde el mensajero retira el envase vacío al entregar el nuevo pedido.',
    ],
  },
];

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: 'Buyer Persona',
    definition:
      'Perfil detallado de un comprador representativo basado en datos reales y observación empírica, no en suposiciones.',
    category: 'persona',
  },
  {
    term: 'Mapa de Empatía',
    definition:
      'Herramienta de Design Thinking que mapea el estado psicológico y emocional del cliente en una situación concreta.',
    category: 'persona',
  },
  {
    term: 'Customer Journey',
    definition:
      'Recorrido integral que realiza una persona antes, durante y después de comprar un producto o servicio.',
    category: 'journey',
  },
  {
    term: 'Punto de Contacto (Touchpoint)',
    definition:
      'Cualquier canal o momento de interacción directa o indirecta entre el cliente y la empresa (web, chat, caja, repartidor).',
    category: 'journey',
  },
  {
    term: 'Fricción',
    definition:
      'Cualquier traba, demora, desconfianza o dificultad que entorpece o detiene el avance del cliente en su viaje de compra.',
    category: 'journey',
  },
  {
    term: 'Greenwashing',
    definition:
      'Práctica engañosa de comunicar atributos ecológicos o sostenibles falsos, exagerados o imposibles de auditar.',
    category: 'sostenibilidad',
  },
  {
    term: 'Economía Circular',
    definition:
      'Modelo económico restaurativo que busca eliminar residuos mediante el rediseño, reutilización, compostaje y reciclaje continuo.',
    category: 'sostenibilidad',
  },
  {
    term: 'Logística Inversa',
    definition:
      'Cadena de suministro diseñada para recoger envases, botellas o productos usados desde el cliente hacia el fabricante para su recarga o reciclaje.',
    category: 'sostenibilidad',
  },
  {
    term: 'Upcycling (Suprarreciclaje)',
    definition:
      'Transformar residuos o subproductos en nuevos materiales u objetos de mayor valor ambiental o funcional.',
    category: 'sostenibilidad',
  },
  {
    term: 'Refill (Recarga)',
    definition:
      'Sistema de venta donde el consumidor conserva el envase principal y solo compra la recarga del contenido.',
    category: 'sostenibilidad',
  },
  {
    term: 'RAG (Retrieval-Augmented Generation)',
    definition:
      'Técnica de IA que combina un modelo de lenguaje con la base de conocimiento y fichas técnicas privadas de la empresa para dar respuestas precisas y sin alucinaciones.',
    category: 'tecnologia',
  },
  {
    term: 'OCR (Reconocimiento Óptico de Caracteres)',
    definition:
      'Tecnología que lee y extrae datos de comprobantes de transferencia bancaria para validar pedidos de inmediato.',
    category: 'tecnologia',
  },
  {
    term: 'Omnicanalidad',
    definition:
      'Estrategia donde los canales digitales (web, app, WhatsApp) y físicos (tiendas, cafeterías) comparten la misma base de datos e inventario.',
    category: 'tecnologia',
  },
  {
    term: 'David Meerman Scott',
    definition:
      'Estratega de marketing que popularizó el concepto de buyer persona orientado a contenidos y resolución de problemas en su obra "The New Rules of Marketing and PR".',
    category: 'persona',
  },
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'Según David Meerman Scott en «The New Rules of Marketing and PR», ¿cuál es el propósito central de un buyer persona?',
    options: [
      'Crear un cliente imaginario con un promedio estadístico para lanzar anuncios masivos por televisión y radio.',
      'Entender los problemas específicos, metas y hábitos de consumo de información para crear contenidos que resuelvan sus necesidades particulares.',
      'Definir únicamente el salario y la edad de los usuarios sin considerar sus hábitos de búsqueda ni objeciones.',
      'Sustituir a los equipos de ventas por folletos impresos distribuidos en eventos comerciales.',
    ],
    correctIndex: 1,
    explanation:
      'Exacto. David Meerman Scott enseñó que las organizaciones deben abandonar los mensajes masivos genéricos y enfocarse en comprender los dolores y hábitos de consumo de información del comprador para proveer contenidos útiles que atraigan al cliente.',
  },
  {
    id: 2,
    question: '¿Cuál es la diferencia fundamental entre el Buyer Persona y el Mapa de Empatía?',
    options: [
      'El Buyer Persona sirve solo para empresas multinacionales y el Mapa de Empatía solo para microemprendimientos.',
      'El Buyer Persona define QUIÉN es el cliente (edad, profesión, canales, intereses amplios), mientras que el Mapa de Empatía define CÓMO SE SIENTE en situaciones específicas de su vida o entorno (su estado psicológico y emocional).',
      'El Mapa de Empatía se hace únicamente después de que el cliente cancela una compra, y el Buyer Persona antes de inaugurar el negocio.',
      'No existe ninguna diferencia; son dos nombres comerciales para la misma plantilla de Excel.',
    ],
    correctIndex: 1,
    explanation:
      '¡Correcto! El Buyer Persona establece la identidad estructural (quién es, qué canales usa, qué metas persigue), mientras que el Mapa de Empatía profundiza en su estado psicológico y emocional ante una situación concreta de compra o evaluación.',
  },
  {
    id: 3,
    question: '¿Por qué empresas ecuatorianas reales como Pacari® y Waykana® son ejemplos verificables de e-commerce sostenible?',
    options: [
      'Porque importan productos asiáticos y les colocan etiquetas verdes sin auditoría.',
      'Porque cuentan con certificaciones verificadas (B Corp, orgánico), comercio directo con miles de familias agricultoras en Napo y la Costa, y empaques compostables de caña de azúcar o almidón de maíz.',
      'Porque regalan cupones de descuento en redes sin cambiar sus prácticas de empaque ni producción.',
      'Porque operan exclusivamente en efectivo sin usar plataformas digitales.',
    ],
    correctIndex: 1,
    explanation:
      '¡Muy bien! Tanto Pacari como Waykana son empresas reales legalmente constituidas en Ecuador con impacto social comprobado, tiendas online activas y modelos transparentes libres de greenwashing.',
  },
  {
    id: 4,
    question: 'En el e-commerce ecuatoriano, ¿qué solución de Inteligencia Artificial reduce drásticamente la fricción en el pago por transferencia bancaria?',
    options: [
      'Un generador de memes automáticos en redes sociales.',
      'Un sistema OCR que lee el comprobante de transferencia (Banco Pichincha, Guayaquil, Deuna) y aprueba el pedido en segundos sin esperar verificación manual.',
      'Un bloqueador de llamadas comerciales que apaga el celular del cliente.',
      'Un algoritmo que obliga al comprador a responder un cuestionario de 20 preguntas antes de pagar.',
    ],
    correctIndex: 1,
    explanation:
      'Excelente. El OCR inteligente extrae el número de referencia, monto y fecha del comprobante bancario, permitiendo conciliar el pago de inmediato en lugar de hacer esperar al comprador varias horas en WhatsApp.',
  },
  {
    id: 5,
    question: '¿Qué herramienta oficial gratuita ofrece HubSpot para guiar la construcción paso a paso de un buyer persona?',
    options: [
      'HubSpot Make My Persona.',
      'Photoshop Persona Master.',
      'Google Sheets Demographics AI.',
      'Canva Logo Maker.',
    ],
    correctIndex: 0,
    explanation:
      'Correcto. HubSpot desarrolló Make My Persona (disponible en español), un asistente interactivo que estructura el perfil en preguntas clave de perfil, necesidades y soluciones de contenido.',
  },
];
