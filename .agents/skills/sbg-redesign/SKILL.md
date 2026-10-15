---
name: sbg-redesign
description: Directrices de diseño editorial y reglas anti-slop adaptadas para AWS Student Builder Group UTP.
---

# Directrices de Rediseño: AWS SBG UTP

Este documento rige el rediseño editorial y visual de la landing page de la comunidad estudiantil de AWS en la Universidad Tecnológica de Pereira (UTP).

---

## 1. Principio de Autenticidad Estudiantil
- **Cero invenciones de datos**: No inventes fechas, métricas de asistentes, salas concretas, periodicidades fijas ni promesas no verificables.
- **Identidad universitaria real**: Refleja la voz y vida de una comunidad de estudiantes de la UTP, no una consultora empresarial B2B ni una startup de inteligencia artificial.
- **Preservación de recursos reales**: Las fotografías del equipo en el campus (`public/assets/photos/team/*.webp`) y los sellos oficiales de la UTP y AWS son el eje de credibilidad. No emplees imágenes de stock ni retratos ficticios.

---

## 2. Restricciones Anti-Slop (Taste Framework Adaptado)
- **Prohibidas las falsas consolas de comandos**: No construyas ventanas de terminal con botones estilo macOS ni prompts simulados de bash (`$ ./join.sh`) sin funcionalidad real.
- **Prohibido el lenguaje consola / depuración**: Elimina el uso decorativo de barras dobles (`//`) y prefijos numéricos (`01 // SOBRE NOSOTROS`, `02 // LO QUE HACEMOS`). Usa subtítulos directos y en lenguaje humano.
- **Prohibidos los scroll cues decorativos**: No incluyas botones de "scroll" con flechas animadas saltando en el hero.
- **Prohibidos los falsos indicadores de estado**: No agregues luces verdes de "ACTIVE" o "LIVE" si no representan el estado dinámico real de un servicio.
- **Prohibidos los gradientes de texto cliché**: Evita gradientes violeta/cian de estilo IA generativa en textos destacados. Usa tipografía de peso contundente y alto contraste.
- **Composición deliberada en lugar de tarjetas clónicas**: Evita filas de 3 tarjetas idénticas si la información requiere jerarquía diferenciada.

---

## 3. Arquitectura y Reglas Técnicas
- **Stack inmutable**: React 19, TypeScript strict mode, Vite 8, Tailwind CSS v4, Framer Motion 14.
- **Prohibido introducir librerías de animación externas**: Todo el movimiento debe resolverse con Framer Motion y transiciones CSS nativas.
- **Accesibilidad estricta (WCAG 2.2 AA)**:
  - Ratio de contraste mínimo de 4.5:1 para texto normal y 3:1 para textos grandes y bordes activos.
  - Indicadores de foco visibles en todos los elementos interactivos (`:focus-visible`).
  - Respeto riguroso de `prefers-reduced-motion` mediante `useReducedMotion()`.
- **Transiciones narrativas entre claro y oscuro**:
  - Evitar el patrón cebra alternado automáticamente. Las superficies responden a la jerarquía de la información (inmersión en Hero y Equipo; claridad pedagógica en Sobre nosotros, Dinámica y FAQ).
