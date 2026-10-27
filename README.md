# Azure Certifications Practice

Cuestionarios con formato de examen para certificaciones de Microsoft, en español e inglés. Están ordenados como en Microsoft Learn: certificación, learning path, módulo y unidad. Cada módulo y cada learning path tienen además un cuestionario integral.

Es un sitio estático sin build ni dependencias. Se sirve tal cual desde GitHub Pages.

## Contenido actual

| Certificación | Learning path | Cuestionarios |
|---|---|---|
| AZ-900 | Describe cloud concepts | 12 unidades, 3 integrales de módulo, 1 integral del learning path |
| SC-900 | Introduction to security, compliance, and identity concepts | 10 unidades, 2 integrales de módulo, 1 integral del learning path |

## Cómo funciona

- **Dos modos.** En Práctica se corrige cada pregunta al responderla. En Examen no hay correcciones hasta el final, y hay cronómetro, marcar para revisar y pantalla de revisión.
- **Formatos del examen real:** opción única, selección múltiple, bloques Sí/No, desplegables y arrastrar y soltar.
- **Puntaje por selección.** Cada selección correcta vale un punto, como en el examen.
- **Privacidad.** No se guardan respuestas. El navegador solo recuerda el idioma elegido y qué secciones quedaron abiertas.

## Publicar con GitHub Pages

1. En el repo, entrá a **Settings → Pages**.
2. En **Build and deployment**, elegí **Deploy from a branch**.
3. Seleccioná la rama `main` y la carpeta `/ (root)`, y guardá.

En uno o dos minutos el sitio queda en `https://<usuario>.github.io/azure-certifications-practice/`.

## Estructura

```
index.html                 Página y orden de carga de los datos
assets/styles.css          Estilos (temas claro y oscuro)
assets/registry.js         Helpers que arman el catálogo
assets/app.js              Interfaz: índice, cuestionarios, revisión y resultados
data/<cert>/cert.js        Certificación y sus learning paths
data/<cert>/<module>.js    Un módulo: unidades, cuestionarios por unidad e integral
data/<cert>/path-<id>.js   Integral del learning path
tools/validate.js          Validador del catálogo
skills/                    Instrucciones para generar cuestionarios nuevos con Claude
```

## Agregar cuestionarios

1. Si el módulo es nuevo, agregá su id a la lista `modules` del learning path en `data/<cert>/cert.js`.
2. Creá `data/<cert>/<module>.js` con `Catalog.module(...)`. Los formatos de cada tipo de pregunta están documentados al principio de `assets/registry.js` y en `skills/cert-practice-quiz/SKILL.md`.
3. Sumá el `<script>` del archivo nuevo en `index.html`, después del `cert.js` de su certificación.
4. Corré `node tools/validate.js` antes de hacer commit. Revisa la forma de los datos, los índices de las respuestas y que la versión en español tenga la misma estructura que la inglesa.

Para probar en local, alcanza con abrir `index.html` en el navegador o levantar un servidor estático, por ejemplo `python3 -m http.server`.

## Fuentes

Las preguntas se escriben a partir del contenido oficial de [Microsoft Learn](https://learn.microsoft.com/training/). No son preguntas reales del examen, y el examen real puede variar en formato y cantidad de preguntas.
