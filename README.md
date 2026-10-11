# AWS Student Builder Group — UTP

Landing oficial del **AWS Student Builder Group** de la **Universidad Tecnológica de Pereira (UTP)**.

## Stack

- **React + TypeScript** — interfaz
- **Vite** — tooling y build
- **Tailwind CSS v4** — estilos
- **Framer Motion** — animaciones
- **Lucide React** — iconos de interfaz

## Desarrollo local

```bash
npm install
npm run dev
```

El servidor corre en `http://localhost:5173`.

## Build de producción

```bash
npm run build
```

Los archivos de producción quedan en `dist/`.

## Lint

```bash
npm run lint
```

## Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.tsx        # Navegación sticky con menú mobile
│   ├── Hero.tsx          # Sección principal
│   ├── About.tsx         # ¿Qué es el AWS SBG?
│   ├── WhatWeDo.tsx      # Aprende · Construye · Conecta
│   ├── LearningPath.tsx  # Nuestro camino (4 pasos)
│   ├── Events.tsx        # Próximos eventos → Meetup
│   ├── Community.tsx     # Canales de la comunidad
│   ├── FinalCTA.tsx      # CTA final → WhatsApp
│   ├── Footer.tsx        # Footer con links y branding
│   └── AnimatedSection.tsx # Wrapper de animaciones scroll
├── data/
│   └── content.ts        # Datos centralizados (links, bloques, pasos)
├── App.tsx               # Componente raíz
├── main.tsx              # Entry point
└── index.css             # Diseño system (Tailwind v4 + tokens)

public/
└── assets/
    ├── branding/         # Logos de AWS y SBG
    ├── icons/            # Iconos pixelados del SBG
    │   ├── bolt-icons/
    │   ├── key-icons/
    │   ├── ladder-icons/
    │   ├── speaker-icons/
    │   ├── team-icons/
    │   └── trophy-icons/
    ├── graphics/         # (vacío — reservado para futuro)
    └── photos/
        ├── community/    # (vacío — reservado para futuro)
        ├── events/       # (vacío — reservado para futuro)
        └── team/         # (vacío — reservado para futuro)
```

## Deployment en AWS Amplify Hosting

El archivo `amplify.yml` ya está configurado. Para conectar el repositorio:

1. Ir a [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Seleccionar **New app → Host web app**
3. Conectar el repositorio de GitHub
4. Amplify detectará automáticamente el `amplify.yml`
5. Deployar

El dominio personalizado puede configurarse posteriormente desde la consola de Amplify.

## Links oficiales

| Canal | URL |
|-------|-----|
| WhatsApp | https://chat.whatsapp.com/Gfa9nvt3lcn64qkplNHimA |
| Meetup | https://www.meetup.com/aws-sbg-at-technological-university-of-pereira/ |
| Instagram | https://www.instagram.com/aws.sbg.utp |
| GitHub | https://github.com/aws-sbg-utp |
| YouTube | https://www.youtube.com/@aws-sbg-utp |
| LinkedIn | https://www.linkedin.com/company/146555980/ |
| Email | aws.utp.sbg@gmail.com |

---

© 2026 AWS Student Builder Group — UTP
