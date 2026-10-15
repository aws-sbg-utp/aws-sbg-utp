# AWS Student Builder Group at UTP

Landing oficial del **AWS Student Builder Group** de la **Universidad Tecnológica de Pereira (UTP)**.

## Stack

- **React 19 + TypeScript** — interfaz y lógica
- **Vite** — tooling y bundler de producción
- **Tailwind CSS v4** — diseño con tokens semánticos
- **Framer Motion** — animaciones e interactividad (con soporte para `prefers-reduced-motion`)
- **Lucide React** — iconos de interfaz
- **Oxlint** — linter de código

## Desarrollo local

```bash
npm install
npm run dev
```

El servidor corre por defecto en `http://localhost:5173`.

## Scripts disponibles

```bash
# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Verificación de tipos estricta con TypeScript
npm run typecheck

# Linter rápido con Oxlint
npm run lint

# Compilación de producción (genera dist/)
npm run build

# Previsualización local del build
npm run preview
```

## Estructura del proyecto

```
src/
├── components/
│   ├── ui/               # Componentes reutilizables del sistema de diseño
│   │   ├── SectionTag.tsx
│   │   └── CtaButton.tsx
│   ├── Navbar.tsx        # Navegación sticky con menú mobile
│   ├── Hero.tsx          # Sección principal y ficha comunitaria UTP
│   ├── About.tsx         # Sobre el grupo y sello institucional
│   ├── WhatWeDo.tsx      # Dinámica de actividades (Fundamentos · Práctica · Comunidad)
│   ├── LearningPath.tsx  # Primeros pasos (guía para nuevos integrantes)
│   ├── Community.tsx     # Encuentros en Meetup, WhatsApp y canales oficiales
│   ├── Team.tsx          # Integrantes del equipo coordinador
│   ├── FAQ.tsx           # Acordeón de preguntas frecuentes
│   ├── FinalCTA.tsx      # Llamado a la acción final
│   ├── Footer.tsx        # Pie de página con enlaces y atribución
│   └── AnimatedSection.tsx # Wrapper de animaciones con Framer Motion
├── data/
│   └── content.ts        # Contenido centralizado (textos, FAQs, equipo, links)
├── lib/
│   └── motion.ts         # Tokens y variantes de animación
├── App.tsx               # Componente raíz
├── main.tsx              # Entry point
└── index.css             # Sistema de diseño (Tailwind CSS v4 + tokens)

public/
├── robots.txt            # Directivas para motores de búsqueda
└── assets/
    ├── branding/         # Logos de AWS, SBG y UTP
    ├── icons/            # Iconos temáticos y vectoriales
    │   ├── social/       # Logos de plataformas sociales
    │   ├── bolt-icons/
    │   ├── key-icons/
    │   ├── ladder-icons/
    │   ├── speaker-icons/
    │   ├── team-icons/
    │   └── trophy-icons/
    └── photos/
        └── team/         # Fotografías de los integrantes del equipo
```

## Documentación del proyecto

Para profundizar en la arquitectura, sistema de diseño y directrices de desarrollo, consulta la documentación modular:

- [docs/PROJECT.md](docs/PROJECT.md) — Misión comunitaria, alcance del proyecto y canales oficiales.
- [docs/DESIGN.md](docs/DESIGN.md) — Sistema de diseño, tokens Tailwind CSS v4, accesibilidad (WCAG 2.2 AA) y pautas visuales.
- [docs/WORKFLOW.md](docs/WORKFLOW.md) — Flujo de trabajo, convenciones de commits semánticos y protocolo de verificación.
- [AGENTS.md](AGENTS.md) — Directrices operativas y reglas inmutables para agentes de IA.

## Despliegue en AWS Amplify Hosting

El proyecto incluye el archivo `amplify.yml` configurado para despliegue estático continuo (CI/CD):

1. Ir a [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Seleccionar **Create new app → Host web app**
3. Conectar el repositorio de GitHub (`aws-sbg-utp/aws-sbg-utp`, rama `main`)
4. Amplify detectará automáticamente las configuraciones de compilación de `amplify.yml`
5. Guardar y desplegar

Cualquier `push` a la rama `main` generará un despliegue automático.

## Canales oficiales

| Canal | Enlace |
|---|---|
| **Meetup** | [aws-sbg-at-technological-university-of-pereira](https://www.meetup.com/aws-sbg-at-technological-university-of-pereira/) |
| **WhatsApp** | [Chat de la comunidad](https://chat.whatsapp.com/Gfa9nvt3lcn64qkplNHimA) |
| **Instagram** | [@aws.sbg.utp](https://www.instagram.com/aws.sbg.utp) |
| **GitHub** | [aws-sbg-utp](https://github.com/aws-sbg-utp) |
| **YouTube** | [@aws-sbg-utp](https://www.youtube.com/@aws-sbg-utp) |
| **LinkedIn** | [AWS Student Builder Group UTP](https://www.linkedin.com/company/146555980/) |
| **Email** | [aws.utp.sbg@gmail.com](mailto:aws.utp.sbg@gmail.com) |

## Licencia

Este proyecto se encuentra bajo la licencia **MIT**. Para más detalles, consulta el archivo [LICENSE](LICENSE).

---

© 2026 AWS Student Builder Group at UTP
