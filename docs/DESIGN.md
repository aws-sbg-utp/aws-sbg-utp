# Sistema de Diseño y Guía de Rediseño: AWS SBG — UTP

Este documento detalla la identidad visual oficial, los tokens de Tailwind CSS v4, los requisitos de accesibilidad y las directrices para el futuro rediseño visual de la landing page.

---

## 1. Identidad de Marca: Elementos Inmutables vs Modificables

### Inmutables (No alterar)
- **Azul principal de marca**: `#44b4ff` (AWS Cloud Builder Blue).
- **Naranja de acento AWS**: `#ff9900` (AWS Orange).
- **Fondo oscuro de referencia**: `#161d26` (Navy Dark principal).
- **Logos oficiales**:
  - Logo/Icono SBG: `sbg-icon-blue.svg` y `sbg-logo-simple.png`.
  - Isotipo oficial AWS: `aws-logo-normal.svg` y `aws-logo-white.svg`.
  - Sello conjunto UTP + SBG: `sbg-logo-utp.jpeg`.

### Modificables en el Futuro Rediseño Visual
- **Composición y jerarquía**: La distribución de secciones, el orden de lectura y la transición entre fondos oscuros y claros (actualmente existe una alternancia abrupta tipo cebra que puede suavizarse).
- **Tipografía y pesos**: Actualmente se utilizan Inter y JetBrains Mono. Se pueden ajustar los contrastes de escala, tracking e interlineado para dotar a la interfaz de mayor dinamismo y personalidad editorial.
- **Densidad de componentes**: Distribución de tarjetas, bordes, sombras y radios de curvatura (`rounded-xl`, `rounded-2xl`).
- **Ritmo de animación**: Transiciones y efectos de scroll con Framer Motion, priorizando sutileza y fluidez.

---

## 2. Tokens de Diseño (Tailwind CSS v4)

Definidos en `src/index.css` bajo la directiva `@theme`:

| Token | Variable CSS | Valor | Propósito |
|---|---|---|---|
| `brand-blue` | `--color-brand-blue` | `#44b4ff` | Color primario de marca y acentos en modo oscuro |
| `brand-blue-hover` | `--color-brand-blue-hover` | `#7fcfff` | Hover de botones y enlaces principales |
| `brand-blue-dark` | `--color-brand-blue-dark` | `#1a6fa0` | Acentos en fondo claro (contraste AA > 5:1) |
| `brand-orange` | `--color-brand-orange` | `#ff9900` | Detalles y acentos oficiales de AWS |
| `brand-green` | `--color-brand-green` | `#03e582` | Estado activo y badges positivos |
| `navy` | `--color-navy` | `#161d26` | Superficie principal de secciones oscuras |
| `navy-card` | `--color-navy-card` | `#1e2736` | Fondo de tarjetas y bloques interactivos oscuros |
| `navy-card-light` | `--color-navy-card-light` | `#243044` | Bordes y tarjetas elevadas |
| `navy-darker` | `--color-navy-darker` | `#0f1520` | Fondo de sección de cierre FinalCTA |
| `surface-subtle` | `--color-surface-subtle` | `#f8fafc` | Fondo de tarjetas en secciones claras |
| `muted-dark` | `--color-muted-dark` | `#9aa3b0` | Texto secundario sobre fondo oscuro (contraste 6.2:1) |
| `muted-light` | `--color-muted-light` | `#526071` | Texto secundario sobre fondo blanco (contraste > 5:1) |
| `font-sans` | `--font-sans` | `"Inter", ...` | Tipografía principal de lectura |
| `font-mono` | `--font-mono` | `"JetBrains Mono", ...` | Código, badges técnicos y números de fase |

---

## 3. Pautas de Accesibilidad Web (WCAG 2.2 AA)

1. **Ratios de Contraste**:
   - Todo texto de cuerpo o secundario debe alcanzar como mínimo **4.5:1** contra su fondo de apoyo.
   - En fondos claros usar `text-muted-light` (`#526071`); en fondos oscuros usar `text-muted-dark` (`#9aa3b0`).
   - Evitar grises apagados de bajo contraste como `#4a5568` o `#656871` sobre fondos oscuros.
2. **Indicadores de Foco**:
   - Todo elemento que reciba foco mediante tabulación debe tener un anillo visible con un ratio ≥ **3:1** respecto al fondo circundante.
   - En fondos claros se usa `--color-brand-blue-dark` (`#1a6fa0`, ratio 5.1:1). En fondos oscuros se usa `--color-brand-blue` (`#44b4ff`, ratio 7.4:1).
3. **Movimiento Reducido**:
   - Cada componente animado con Framer Motion debe consultar `useReducedMotion()`. Si es verdadero, se omiten desplazamientos verticales (`y: 0`) o se simplifican a cambios sutiles de opacidad.

---

## 4. Recomendaciones para el Futuro Rediseño Visual

Para evitar que la interfaz se sienta genérica o como una plantilla generada por IA sin dirección:
- Sustituir los fondos planos con sutiles texturas o gradientes direccionales inspirados en la infraestructura en la nube.
- Enfatizar las historias y proyectos reales construidos por los estudiantes.
- Diseñar pensando en mobile-first: simplificar los grids densos en pantallas pequeñas.
- Evitar el exceso de bordes con opacidad `border-white/10` que crean un patrón visual repetitivo.
