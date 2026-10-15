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
  { label: 'Sobre el grupo', href: '#sobre-el-grupo' },
  { label: 'Dinámica', href: '#dinamica' },
  { label: 'Cómo participar', href: '#como-participar' },
  { label: 'Encuentros', href: '#encuentros' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Preguntas', href: '#faq' },
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
    id: 'fundamentos',
    step: '01',
    badge: 'Conceptos',
    title: 'Sesiones de conceptos y fundamentos',
    description:
      'Revisamos los principios esenciales de computación en la nube: arquitectura básica, servicios de almacenamiento, redes, cómputo y seguridad en AWS.',
    iconSrc: '/assets/icons/ladder-icons/ladder-icon-blue.svg',
    iconAlt: 'Fundamentos cloud',
    accentColor: '#44b4ff',
    badgeBg: 'text-brand-blue bg-brand-blue/10 border-brand-blue/20',
    borderColor: 'border-brand-blue/25',
    hoverBorderColor: 'hover:border-brand-blue/50',
    bullets: [
      'Explicaciones paso a paso orientadas a principiantes',
      'Revisión de casos de uso y ejemplos de arquitectura',
    ],
  },
  {
    id: 'practica',
    step: '02',
    badge: 'Laboratorios',
    title: 'Laboratorios y práctica guiada',
    description:
      'Desarrollamos ejercicios prácticos para interactuar con la consola y las herramientas de AWS, comprendiendo cómo desplegar y configurar servicios.',
    iconSrc: '/assets/icons/bolt-icons/bolt-icon-blue.svg',
    iconAlt: 'Práctica guiada',
    accentColor: '#ff9900',
    badgeBg: 'text-brand-orange bg-brand-orange/10 border-brand-orange/20',
    borderColor: 'border-brand-orange/25',
    hoverBorderColor: 'hover:border-brand-orange/50',
    bullets: [
      'Práctica directa con servicios fundamentales',
      'Enfoque en resolución de problemas técnicos',
    ],
  },
  {
    id: 'comunidad',
    step: '03',
    badge: 'Comunidad',
    title: 'Espacios de comunidad y encuentro',
    description:
      'Compartimos experiencias académicas, resolvemos dudas técnicas entre compañeros y conversamos sobre tecnologías cloud y desarrollo profesional.',
    iconSrc: '/assets/icons/team-icons/team-icon-blue.svg',
    iconAlt: 'Espacios de encuentro',
    accentColor: '#03e582',
    badgeBg: 'text-brand-green bg-brand-green/10 border-brand-green/20',
    borderColor: 'border-brand-green/25',
    hoverBorderColor: 'hover:border-brand-green/50',
    bullets: [
      'Aprendizaje colaborativo entre pares',
      'Conexión entre estudiantes de distintas carreras',
    ],
  },
]

// How to join steps (replaces old abstract learning path)
export interface PathStep {
  step: string
  label: string
  description: string
  iconSrc: string
  iconAlt: string
  actionLabel?: string
  actionHref?: string
}

export const HOW_TO_JOIN_STEPS: PathStep[] = [
  {
    step: '01',
    label: 'Entra al chat de WhatsApp',
    description:
      'Es nuestro canal principal de contacto diario. Preséntate, conoce a otros integrantes y recibe avisos sobre las próximas convocatorias.',
    iconSrc: '/assets/icons/team-icons/team-icon-white.svg',
    iconAlt: 'WhatsApp comunidad',
    actionLabel: 'Ir al chat de WhatsApp',
    actionHref: SOCIAL_LINKS.whatsapp,
  },
  {
    step: '02',
    label: 'Sigue la página de Meetup',
    description:
      'Allí publicamos la agenda oficial de cada actividad, con los detalles de formato (presencial o virtual) y la confirmación de asistencia.',
    iconSrc: '/assets/icons/speaker-icons/speaker-icon-white.svg',
    iconAlt: 'Meetup oficial',
    actionLabel: 'Ver grupo en Meetup',
    actionHref: SOCIAL_LINKS.meetup,
  },
  {
    step: '03',
    label: 'Asiste a tu primera sesión',
    description:
      'Ven a compartir con el grupo en el campus o conéctate a las sesiones remotas. Solo necesitas interés por aprender y curiosidad tecnológica.',
    iconSrc: '/assets/icons/trophy-icons/trophy-icon-white.svg',
    iconAlt: 'Primera sesión',
    actionLabel: 'Abierto a estudiantes UTP',
  },
]

// Backward compatibility alias for transition
export const PATH_STEPS = HOW_TO_JOIN_STEPS

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
      'Asistir a las actividades, talleres y encuentros organizados por el AWS Student Builder Group UTP no tiene ningún costo. La participación es completamente libre para los estudiantes.',
  },
  {
    id: 'cobros-aws',
    question: '¿Se generan cobros al usar Amazon Web Services?',
    answer:
      'Para participar en las explicaciones y actividades guiadas no necesitas una cuenta de AWS ni registrar medios de pago. Si de manera voluntaria decides abrir una cuenta personal de AWS para experimentar por tu cuenta, ten en cuenta que ciertos servicios pueden generar facturación directa de Amazon Web Services si superas los límites de la capa gratuita (AWS Free Tier).',
  },
  {
    id: 'experiencia',
    question: '¿Necesito experiencia previa en computación en la nube?',
    answer:
      'No. La comunidad está pensada como un punto de partida. Gran parte de nuestras actividades cubren fundamentos desde cero, por lo que no es necesario haber utilizado AWS antes.',
  },
  {
    id: 'carrera',
    question: '¿Debo pertenecer al programa de Ingeniería de Sistemas y Computación?',
    answer:
      'No es un requisito. La comunidad está abierta a cualquier estudiante activo de la Universidad Tecnológica de Pereira, sin importar la carrera, facultad o semestre que esté cursando.',
  },
  {
    id: 'eventos',
    question: '¿Dónde se anuncian las fechas y lugares de los encuentros?',
    answer:
      'Publicamos la programación oficial a través de nuestra página en Meetup y compartimos los recordatorios en el grupo de WhatsApp. Las actividades se realizan en modalidades presenciales en el campus de la UTP o en sesiones virtuales.',
  },
]

// Team members (Official English titles preserved)
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
