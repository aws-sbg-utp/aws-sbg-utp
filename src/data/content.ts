// Social links configuration
export const SOCIAL_LINKS = {
  whatsapp: 'https://chat.whatsapp.com/Gfa9nvt3lcn64qkplNHimA',
  meetup: 'https://www.meetup.com/aws-sbg-at-technological-university-of-pereira/',
  instagram: 'https://www.instagram.com/aws.sbg.utp',
  github: 'https://github.com/aws-sbg-utp',
  youtube: 'https://www.youtube.com/@aws-sbg-utp',
  linkedin: 'https://www.linkedin.com/company/146555980/',
  email: 'aws.utp.sbg@gmail.com',
} as const

// Nav items
export const NAV_ITEMS = [
  { label: '¿Qué es?', href: '#que-es' },
  { label: '¿Qué hacemos?', href: '#que-hacemos' },
  { label: 'Nuestro camino', href: '#nuestro-camino' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Comunidad', href: '#comunidad' },
  { label: 'Equipo', href: '#equipo' },
] as const

// What we do blocks
export interface WhatWeDoBlock {
  id: string
  step: string
  badge: string
  title: string
  description: string
  iconSrc: string
  iconAlt: string
  accentColor: string
  badgeBg: string
  borderColor: string
  hoverBorderColor: string
  bullets: string[]
}

export const WHAT_WE_DO_BLOCKS: WhatWeDoBlock[] = [
  {
    id: 'aprende',
    step: '01',
    badge: 'EJE 01 // FUNDAMENTOS',
    title: 'Aprende',
    description:
      'Talleres técnicos desde cero sobre conceptos fundamentales de nube y la iniciativa de formar grupos de estudio colaborativos para quienes tengan interés en profundizar hacia certificaciones como AWS Cloud Practitioner.',
    iconSrc: '/assets/icons/ladder-icons/ladder-icon-blue.svg',
    iconAlt: 'Aprendizaje y crecimiento',
    accentColor: '#44b4ff',
    badgeBg: 'text-[#44b4ff] bg-[#44b4ff]/10 border-[#44b4ff]/20',
    borderColor: 'border-[#44b4ff]/25',
    hoverBorderColor: 'hover:border-[#44b4ff]/50',
    bullets: [
      'Conceptos cloud fundamentales',
      'Grupos de estudio colaborativos',
    ],
  },
  {
    id: 'construye',
    step: '02',
    badge: 'EJE 02 // PRÁCTICA',
    title: 'Construye',
    description:
      'Laboratorios guiados en la consola de AWS, entendimiento de arquitecturas reales y retos prácticos para resolver problemas técnicos concretos.',
    iconSrc: '/assets/icons/bolt-icons/bolt-icon-blue.svg',
    iconAlt: 'Construcción y acción',
    accentColor: '#ff9900',
    badgeBg: 'text-[#ff9900] bg-[#ff9900]/10 border-[#ff9900]/20',
    borderColor: 'border-[#ff9900]/25',
    hoverBorderColor: 'hover:border-[#ff9900]/50',
    bullets: [
      'Laboratorios guiados en consola',
      'Retos técnicos y proyectos',
    ],
  },
  {
    id: 'conecta',
    step: '03',
    badge: 'EJE 03 // COMUNIDAD',
    title: 'Conecta',
    description:
      'Networking activo con estudiantes de distintas carreras de la UTP, intercambio técnico entre pares y puentes de conversación con el ecosistema cloud.',
    iconSrc: '/assets/icons/team-icons/team-icon-blue.svg',
    iconAlt: 'Comunidad y networking',
    accentColor: '#03e582',
    badgeBg: 'text-[#03e582] bg-[#03e582]/10 border-[#03e582]/20',
    borderColor: 'border-[#03e582]/25',
    hoverBorderColor: 'hover:border-[#03e582]/50',
    bullets: [
      'Equipos interdisciplinarios',
      'Charlas y experiencias tech',
    ],
  },
]

// Planned activity formats
export interface ActivityFormat {
  badge: string
  title: string
  description: string
}

export const ACTIVITY_FORMATS: ActivityFormat[] = [
  {
    badge: 'FORMATO 01',
    title: 'Hands-on Labs',
    description: 'Sesiones guiadas paso a paso con servicios de AWS directamente en la consola.',
  },
  {
    badge: 'FORMATO 02',
    title: 'Tech Talks',
    description: 'Charlas temáticas sobre arquitectura, desarrollo en la nube y experiencias reales.',
  },
  {
    badge: 'FORMATO 03',
    title: 'Grupos de Estudio',
    description: 'Espacios colaborativos entre pares para profundizar temas técnicos a tu ritmo.',
  },
  {
    badge: 'FORMATO 04',
    title: 'Retos Colaborativos',
    description: 'Dinámicas en equipo orientadas a resolver problemas prácticos con herramientas cloud.',
  },
]

// FAQ Items
export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'costo',
    question: '¿Participar en la comunidad tiene algún costo?',
    answer:
      'No. Formar parte del AWS Student Builder Group UTP, asistir a las reuniones y participar en los talleres es 100% gratuito. Somos una comunidad estudiantil abierta sin costo de inscripción ni membresías.',
  },
  {
    id: 'experiencia',
    question: '¿Necesito experiencia previa con AWS o computación en la nube?',
    answer:
      'Ninguna. Las actividades están diseñadas para que cualquier estudiante pueda empezar desde cero. Comenzamos explicando los fundamentos de infraestructura y conceptos esenciales antes de pasar a servicios específicos.',
  },
  {
    id: 'carrera',
    question: '¿Tengo que estudiar Ingeniería de Sistemas o Computación?',
    answer:
      'No. La comunidad está abierta a cualquier estudiante activo de la Universidad Tecnológica de Pereira (UTP), sin importar facultad, carrera o semestre. La tecnología cloud se aplica hoy en múltiples áreas e industrias.',
  },
  {
    id: 'tarjeta',
    question: '¿Necesito una tarjeta de crédito para aprender AWS?',
    answer:
      'Para asistir a nuestras charlas, talleres teóricos y sesiones guiadas no necesitas tarjeta de crédito. Para crear una cuenta personal en AWS, la plataforma solicita un método de pago para activar la Capa Gratuita (Free Tier). En la comunidad enseñamos a configurar alertas de presupuesto y límites de gasto para que practiques de forma segura y evites cobros no deseados.',
  },
  {
    id: 'eventos',
    question: '¿Dónde puedo consultar los próximos eventos y cómo participo?',
    answer:
      'Todas nuestras fechas, temarios y convocatorias se publican en nuestro grupo oficial de Meetup. Unirte a Meetup es gratuito y te permite recibir recordatorios automáticos de cada sesión. Además, en el grupo de WhatsApp compartimos anuncios y enlaces directos.',
  },
  {
    id: 'certificaciones',
    question: '¿El grupo entrega certificaciones oficiales de AWS?',
    answer:
      'El grupo no emite certificaciones directamente (los exámenes oficiales son gestionados exclusivamente por Amazon Web Services). Lo que impulsamos son grupos de estudio colaborativos e intercambio de dudas para apoyarnos mutuamente si decides prepararte para certificaciones como AWS Certified Cloud Practitioner.',
  },
]

// Learning path steps
export interface PathStep {
  step: string
  label: string
  description: string
  iconSrc: string
  iconAlt: string
}

export const PATH_STEPS: PathStep[] = [
  {
    step: '01',
    label: 'Comunidad',
    description: 'Únete y conócenos. No necesitas experiencia previa.',
    iconSrc: '/assets/icons/team-icons/team-icon-white.svg',
    iconAlt: 'Comunidad',
  },
  {
    step: '02',
    label: 'Aprende',
    description: 'Participa en talleres y grupos de estudio a tu ritmo.',
    iconSrc: '/assets/icons/speaker-icons/speaker-icon-white.svg',
    iconAlt: 'Aprendizaje',
  },
  {
    step: '03',
    label: 'Practica',
    description: 'Experimenta en laboratorios con servicios reales de AWS.',
    iconSrc: '/assets/icons/key-icons/key-icon-white.svg',
    iconAlt: 'Práctica',
  },
  {
    step: '04',
    label: 'Construye',
    description: 'Crea proyectos propios y resuelve retos del mundo real.',
    iconSrc: '/assets/icons/trophy-icons/trophy-icon-white.svg',
    iconAlt: 'Construcción',
  },
]

// Team members
export interface TeamMemberLink {
  label: string
  url: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  photoSrc: string
  photoAlt: string
  links: [TeamMemberLink, TeamMemberLink, TeamMemberLink]
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'juan-jose-jaramillo',
    name: 'Juan Jose Jaramillo Tamayo',
    role: 'Leader',
    photoSrc: '/assets/photos/team/juanjose.jpg',
    photoAlt: 'Fotografía de Juan Jose Jaramillo Tamayo',
    links: [
      { label: 'Enlace 1', url: '' },
      { label: 'Enlace 2', url: '' },
      { label: 'Enlace 3', url: '' },
    ],
  },
  {
    id: 'juan-manuel-rojas',
    name: 'Juan Manuel Rojas Muñoz',
    role: 'Director of Marketing',
    photoSrc: '/assets/photos/team/juanmanuel.jpeg',
    photoAlt: 'Fotografía de Juan Manuel Rojas Muñoz',
    links: [
      { label: 'Enlace 1', url: '' },
      { label: 'Enlace 2', url: '' },
      { label: 'Enlace 3', url: '' },
    ],
  },
  {
    id: 'miguel-angel-quintero',
    name: 'Miguel Ángel Quintero Rodríguez',
    role: 'General Coordinator',
    photoSrc: '/assets/photos/team/miguel.jpeg',
    photoAlt: 'Fotografía de Miguel Ángel Quintero Rodríguez',
    links: [
      { label: 'Enlace 1', url: '' },
      { label: 'Enlace 2', url: '' },
      { label: 'Enlace 3', url: '' },
    ],
  },
  {
    id: 'isabella-fernandez',
    name: 'Isabella Fernández Colorado',
    role: 'Partnerships & Resources Lead',
    photoSrc: '/assets/photos/team/isabella.jpeg',
    photoAlt: 'Fotografía de Isabella Fernández Colorado',
    links: [
      { label: 'Enlace 1', url: '' },
      { label: 'Enlace 2', url: '' },
      { label: 'Enlace 3', url: '' },
    ],
  },
  {
    id: 'nohora-camila-cardozo',
    name: 'Nohora Camila Cardozo Cardenas',
    role: 'Technical Lead',
    photoSrc: '/assets/photos/team/nohora.jpeg',
    photoAlt: 'Fotografía de Nohora Camila Cardozo Cardenas',
    links: [
      { label: 'Enlace 1', url: '' },
      { label: 'Enlace 2', url: '' },
      { label: 'Enlace 3', url: '' },
    ],
  },
  {
    id: 'manuela-ruiz',
    name: 'Manuela Ruiz Hoyos',
    role: 'Director of Events and Logistics',
    photoSrc: '/assets/photos/team/manuela.jpeg',
    photoAlt: 'Fotografía de Manuela Ruiz Hoyos',
    links: [
      { label: 'Enlace 1', url: '' },
      { label: 'Enlace 2', url: '' },
      { label: 'Enlace 3', url: '' },
    ],
  },
]
