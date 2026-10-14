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
      'Espacios introductorios sobre computación en la nube y temas fundamentales de AWS para quienes inician o buscan profundizar en tecnología cloud.',
    iconSrc: '/assets/icons/ladder-icons/ladder-icon-blue.svg',
    iconAlt: 'Aprendizaje y crecimiento',
    accentColor: '#44b4ff',
    badgeBg: 'text-[#44b4ff] bg-[#44b4ff]/10 border-[#44b4ff]/20',
    borderColor: 'border-[#44b4ff]/25',
    hoverBorderColor: 'hover:border-[#44b4ff]/50',
    bullets: [
      'Fundamentos de nube',
      'Temas y conceptos de AWS',
    ],
  },
  {
    id: 'construye',
    step: '02',
    badge: 'EJE 02 // PRÁCTICA',
    title: 'Construye',
    description:
      'Actividades prácticas y laboratorios para experimentar con servicios de AWS y resolver problemas técnicos mediante la práctica.',
    iconSrc: '/assets/icons/bolt-icons/bolt-icon-blue.svg',
    iconAlt: 'Construcción y acción',
    accentColor: '#ff9900',
    badgeBg: 'text-[#ff9900] bg-[#ff9900]/10 border-[#ff9900]/20',
    borderColor: 'border-[#ff9900]/25',
    hoverBorderColor: 'hover:border-[#ff9900]/50',
    bullets: [
      'Laboratorios y práctica guiada',
      'Desarrollo de proyectos',
    ],
  },
  {
    id: 'conecta',
    step: '03',
    badge: 'EJE 03 // COMUNIDAD',
    title: 'Conecta',
    description:
      'Puntos de encuentro entre estudiantes de diferentes programas para compartir experiencias, resolver dudas y colaborar en tecnología.',
    iconSrc: '/assets/icons/team-icons/team-icon-blue.svg',
    iconAlt: 'Comunidad y networking',
    accentColor: '#03e582',
    badgeBg: 'text-[#03e582] bg-[#03e582]/10 border-[#03e582]/20',
    borderColor: 'border-[#03e582]/25',
    hoverBorderColor: 'hover:border-[#03e582]/50',
    bullets: [
      'Intercambio entre estudiantes',
      'Sesiones y charlas temáticas',
    ],
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
      'Participar en el grupo y asistir a sus actividades no tiene costo. Si decides crear una cuenta personal en AWS para practicar por tu cuenta, el uso de servicios específicos puede generar cobros según los precios de Amazon Web Services.',
  },
  {
    id: 'experiencia',
    question: '¿Necesito experiencia previa con AWS o computación en la nube?',
    answer:
      'No es obligatoria. La comunidad está abierta a personas con distintos niveles de conocimiento, incluyendo quienes están dando sus primeros pasos en computación en la nube.',
  },
  {
    id: 'carrera',
    question: '¿Tengo que estudiar Ingeniería de Sistemas o Computación?',
    answer:
      'No. La comunidad está abierta a estudiantes activos de la Universidad Tecnológica de Pereira de cualquier carrera, facultad y semestre.',
  },
  {
    id: 'tarjeta',
    question: '¿Necesito una tarjeta de crédito para aprender AWS?',
    answer:
      'Para asistir a las charlas o participar en las actividades teóricas de la comunidad no necesitas una cuenta de AWS ni tarjeta de crédito. Para crear una cuenta personal en AWS, la plataforma solicita registrar una tarjeta de crédito o débito válida como método de pago para verificación y facturación de servicios.',
  },
  {
    id: 'eventos',
    question: '¿Dónde puedo consultar los próximos eventos y cómo participo?',
    answer:
      'Publicamos los encuentros y convocatorias en nuestra página de Meetup. A través de esa plataforma puedes consultar las fechas disponibles y registrar tu asistencia.',
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
    description: 'Conoce la comunidad e infórmate sobre las próximas actividades.',
    iconSrc: '/assets/icons/team-icons/team-icon-white.svg',
    iconAlt: 'Comunidad',
  },
  {
    step: '02',
    label: 'Aprende',
    description: 'Acércate a los fundamentos de la nube y los servicios de AWS.',
    iconSrc: '/assets/icons/speaker-icons/speaker-icon-white.svg',
    iconAlt: 'Aprendizaje',
  },
  {
    step: '03',
    label: 'Practica',
    description: 'Aplica los conceptos mediante ejercicios y laboratorios.',
    iconSrc: '/assets/icons/key-icons/key-icon-white.svg',
    iconAlt: 'Práctica',
  },
  {
    step: '04',
    label: 'Construye',
    description: 'Desarrolla iniciativas propias o colabora con otros estudiantes.',
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
  links?: TeamMemberLink[]
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'juan-jose-jaramillo',
    name: 'Juan Jose Jaramillo Tamayo',
    role: 'Leader',
    photoSrc: '/assets/photos/team/juanjose.webp',
    photoAlt: 'Fotografía de Juan Jose Jaramillo Tamayo',
  },
  {
    id: 'isabella-fernandez',
    name: 'Isabella Fernández Colorado',
    role: 'Partnerships & Resources Lead',
    photoSrc: '/assets/photos/team/isabella.webp',
    photoAlt: 'Fotografía de Isabella Fernández Colorado',
  },
  {
    id: 'juan-manuel-rojas',
    name: 'Juan Manuel Rojas Muñoz',
    role: 'Director of Marketing',
    photoSrc: '/assets/photos/team/juanmanuel.webp',
    photoAlt: 'Fotografía de Juan Manuel Rojas Muñoz',
  },
  {
    id: 'nohora-camila-cardozo',
    name: 'Nohora Camila Cardozo Cardenas',
    role: 'Technical Lead',
    photoSrc: '/assets/photos/team/nohora.webp',
    photoAlt: 'Fotografía de Nohora Camila Cardozo Cardenas',
  },
  {
    id: 'miguel-angel-quintero',
    name: 'Miguel Ángel Quintero Rodríguez',
    role: 'General Coordinator',
    photoSrc: '/assets/photos/team/miguel.webp',
    photoAlt: 'Fotografía de Miguel Ángel Quintero Rodríguez',
  },
  {
    id: 'manuela-ruiz',
    name: 'Manuela Ruiz Hoyos',
    role: 'Director of Events and Logistics',
    photoSrc: '/assets/photos/team/manuela.webp',
    photoAlt: 'Fotografía de Manuela Ruiz Hoyos',
  },
]
