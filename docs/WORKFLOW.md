# Flujo de Trabajo y Estándares de Ingeniería: AWS SBG — UTP

Este documento define las directrices de desarrollo, ramas, commits y pruebas para mantener la salud técnica del repositorio.

---

## 1. Estrategia de Ramas

El repositorio utiliza un modelo de dos ramas principales:

- **`main`**: Rama estable de producción conectada al despliegue continuo en AWS Amplify Hosting. Solo recibe cambios mediante fusiones (`merge`) verificadas desde `dev`.
- **`dev`**: Rama activa de desarrollo donde se realizan las implementaciones, pruebas y ajustes. Todo nuevo trabajo se inicia y confirma aquí.

---

## 2. Ciclo de Vida de una Tarea

1. **Investigación previa**: Leer el código activo antes de hacer supuestos. Verificar tipos, rutas de archivos y dependencias reales.
2. **Planificación atómica**: Dividir la tarea en pasos pequeños, reversibles e independientes.
3. **Implementación**: Modificar únicamente los archivos necesarios para resolver el objetivo.
4. **Validación automática**:
   ```bash
   npm run lint
   npm run typecheck
   npm run build
   ```
5. **Verificación visual y funcional**: Probar en navegador (desktop y mobile), navegación por teclado y lector de pantalla si aplica.
6. **Commit semántico**: Registrar cambios pequeños y claros.

---

## 3. Convenciones de Commits (Conventional Commits)

Cada mensaje de commit debe seguir la convención:
`<tipo>(<ámbito opcional>): <descripción clara en minúsculas y modo imperativo>`

- `fix`: Corrección de un defecto o bug observable (e.g. `fix(a11y): correct community links semantics`).
- `refactor`: Cambio interno de código sin alterar comportamiento externo (e.g. `refactor(styles): consolidate tailwind theme tokens`).
- `perf`: Mejora comprobable de rendimiento o tamaño de bundle (e.g. `perf(assets): optimize team photos to webp`).
- `docs`: Modificación o adición de documentación (e.g. `docs: add agent-first documentation suite`).
- `chore`: Mantenimiento de herramientas, scripts o configuración de CI (e.g. `chore(ci): add github actions workflow`).

---

## 4. Criterios de Calidad para Pull Requests y Fusiones

- [ ] Cero advertencias y errores en `oxlint`.
- [ ] Cero errores en `tsc -b` bajo modo estricto.
- [ ] Compilación exitosa en Vite (`npm run build`).
- [ ] Sin archivos temporales, logs ni dependencias huérfanas en el árbol de trabajo.
- [ ] Sin regresiones visuales ni de accesibilidad.
