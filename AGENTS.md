# Directrices para Agentes de IA — AWS Student Builder Group UTP

Este documento es la fuente de verdad operativa para cualquier agente de IA (Antigravity, OpenCode, Claude, Gemini, Cursor, etc.) que trabaje en este repositorio.

---

## 1. Contexto Técnico del Proyecto

- **Tipo**: Landing page estática institucional y comunitaria.
- **Stack principal**: React 19, TypeScript (~6.0, modo estricto), Vite 8, Tailwind CSS v4 (`@tailwindcss/vite`), Framer Motion 14, Lucide React, Oxlint.
- **Despliegue**: AWS Amplify Hosting continuo desde la rama `main`.
- **Arquitectura**: SPA estática sin enrutador de cliente, sin backend, sin base de datos ni CMS. Todo el contenido editorial está centralizado en `src/data/content.ts`.

---

## 2. Reglas Inmutables

1. **Cero invenciones de datos**: No inventes eventos, fechas, perfiles, enlaces, miembros, estadísticas ni testimonios. Toda la información debe provenir de `src/data/content.ts` o confirmación del usuario.
2. **Preservación de activos reales**: No reemplaces fotografías reales del campus o de los miembros del equipo por imágenes genéricas de stock o generadas por IA. No elimines activos de `public/assets/` sin verificar su propósito en el kit de marca.
3. **Calidad y tipado estricto**: Mantén `"strict": true` en TypeScript. No utilices tipos `any` inseguros ni ignores errores de tipado con `@ts-ignore`.
4. **Accesibilidad web (WCAG 2.2 AA)**:
   - Todo elemento interactivo debe ser operable por teclado.
   - Todo enlace o botón debe tener un nombre accesible claro (`aria-label` descriptivo si es solo icono).
   - Ratios mínimos de contraste: 4.5:1 para texto normal, 3:1 para texto grande e indicadores de foco (`:focus-visible`).
   - Respeta siempre la preferencia del usuario por movimiento reducido (`prefers-reduced-motion`).
5. **No introducir dependencias sin justificación**: No agregues librerías adicionales ni frameworks de estado global si puede resolverse con el stack existente.
6. **No romper la arquitectura estática**: La aplicación se sirve como bundle estático desde `dist/`. No asumas la existencia de funciones serverless o APIs internas a menos que el usuario lo solicite explícitamente.

---

## 3. Comandos de Validación Local

Antes de dar por completada cualquier tarea o proponer un pull request/commit, ejecuta siempre:

```bash
# Linter rápido
npm run lint

# Verificación de tipos estricta
npm run typecheck

# Compilación de producción
npm run build
```

---

## 4. Estructura de Documentación de Referencia

Para más detalles, consulta la documentación modular en `docs/`:
- [`docs/PROJECT.md`](docs/PROJECT.md): Misión comunitaria, alcance del proyecto y canales oficiales confirmados.
- [`docs/DESIGN.md`](docs/DESIGN.md): Sistema de diseño, tokens Tailwind CSS v4, directrices de accesibilidad y pautas para el futuro rediseño visual.
- [`docs/WORKFLOW.md`](docs/WORKFLOW.md): Flujo de trabajo, convenciones de commits semánticos y protocolo de verificación.
