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
  { label: 'Qué hacemos', href: '#que-hacemos' },
  { label: 'Cómo unirte', href: '#como-unirte' },
  { label: 'Canales', href: '#canales' },
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
    id: 'conceptos',
    step: '01',
    badge: 'Conceptos',
    title: 'Conceptos y bases desde cero',
    description:
      'Explicamos los fundamentos de la nube de forma clara: cómo funciona la infraestructura, servidores, almacenamiento, redes y seguridad en AWS.',
    iconSrc: '/assets/icons/ladder-icons/ladder-icon-blue.svg',
    iconAlt: 'Fundamentos cloud',
    accentColor: '#44b4ff',
    badgeBg: 'text-brand-blue bg-brand-blue/10 border-brand-blue/20',
    borderColor: 'border-brand-blue/25',
    hoverBorderColor: 'hover:border-brand-blue/50',
    bullets: [
      'Explicaciones paso a paso pensadas para quienes están empezando',
      'Ejemplos reales de cómo se usan estos servicios en las aplicaciones actuales',
    ],
  },
  {
    id: 'laboratorios',
    step: '02',
    badge: 'Laboratorios',
    title: 'Talleres y demos en vivo',
    description:
      'Hacemos ejercicios prácticos guiados directamente en la consola de AWS para aprender a configurar, conectar y desplegar servicios paso a paso.',
    iconSrc: '/assets/icons/bolt-icons/bolt-icon-blue.svg',
    iconAlt: 'Práctica guiada',
    accentColor: '#ff9900',
    badgeBg: 'text-brand-orange bg-brand-orange/10 border-brand-orange/20',
    borderColor: 'border-brand-orange/25',
    hoverBorderColor: 'hover:border-brand-orange/50',
    bullets: [
      'Práctica directa con los servicios más usados de AWS',
      'Enfoque en crear proyectos funcionales desde cero',
    ],
  },
  {
    id: 'comunidad',
    step: '03',
    badge: 'Comunidad',
    title: 'Comunidad y estudio',
    description:
      'Un espacio para resolver dudas sin complicaciones, compartir material de estudio, prepararnos para certificaciones oficiales y conocer compañeros de otras carreras.',
    iconSrc: '/assets/icons/team-icons/team-icon-blue.svg',
    iconAlt: 'Comunidad y crecimiento',
    accentColor: '#03e582',
    badgeBg: 'text-brand-green bg-brand-green/10 border-brand-green/20',
    borderColor: 'border-brand-green/25',
    hoverBorderColor: 'hover:border-brand-green/50',
    bullets: [
      'Apoyo entre compañeros para estudiar y resolver dudas técnicas',
      'Guías para aprovechar plataformas oficiales gratuitas como AWS Builder Center y AWS Skill Builder',
    ],
  },
]

// How to join steps (Guía de nuevos integrantes)
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
    label: 'Entra al grupo de WhatsApp',
    description:
      'Es nuestro canal principal del día a día. Ahí avisamos de los próximos talleres, compartimos recursos y resolvemos dudas rápidas.',
    iconSrc: '/assets/icons/team-icons/team-icon-white.svg',
    iconAlt: 'WhatsApp comunidad',
    actionLabel: 'Ir al grupo de WhatsApp →',
    actionHref: SOCIAL_LINKS.whatsapp,
  },
  {
    step: '02',
    label: 'Únete a la página de Meetup',
    description:
      'Allí publicamos el calendario oficial de cada charla o taller (virtual o presencial) para que confirmes tu asistencia y recibas recordatorios.',
    iconSrc: '/assets/icons/speaker-icons/speaker-icon-white.svg',
    iconAlt: 'Meetup oficial',
    actionLabel: 'Ver grupo en Meetup →',
    actionHref: SOCIAL_LINKS.meetup,
  },
  {
    step: '03',
    label: 'Conéctate a tu primera sesión',
    description:
      'Conéctate a las sesiones virtuales o acompáñanos cuando hagamos actividades presenciales en el campus de la UTP.',
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
      'No, ninguna actividad tiene costo. Todas las charlas, talleres y espacios de estudio que organizamos en el grupo son 100% gratuitos.',
  },
  {
    id: 'cobros-aws',
    question: '¿Se generan cobros al usar Amazon Web Services?',
    answer:
      'Para asistir a las sesiones y seguir nuestras demos no necesitas tener una cuenta de AWS ni registrar tarjeta de crédito; además, te enseñaremos a usar recursos gratuitos para estudiantes como AWS Builder Center y AWS Skill Builder. Si decides abrir una cuenta personal para practicar por tu lado, te explicamos cómo mantenerte dentro de los límites de la capa gratuita (AWS Free Tier) para evitar cobros.',
  },
  {
    id: 'experiencia',
    question: '¿Necesito experiencia previa en computación en la nube?',
    answer:
      'No. El grupo está pensado justamente para aprender desde cero. En las sesiones explicamos los conceptos básicos paso a paso, así que no importa si nunca has usado AWS.',
  },
  {
    id: 'carrera',
    question: '¿Debo ser estudiante de Ingeniería de Sistemas y Computación?',
    answer:
      'No es requisito. Aunque la iniciativa nació en Sistemas, la comunidad está abierta a estudiantes de cualquier carrera, facultad o semestre de la UTP que quieran aprender sobre nube, datos o inteligencia artificial.',
  },
  {
    id: 'eventos',
    question: '¿Dónde se anuncian las fechas y enlaces de los encuentros?',
    answer:
      'Publicamos toda la programación oficial en nuestra página de Meetup y enviamos los avisos por el grupo de WhatsApp e Instagram. Hacemos sesiones virtuales y, más adelante, también tendremos talleres presenciales en el campus.',
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
