---
name: cert-practice-quiz
description: Generates bilingual (English/Spanish) exam-style quizzes for Microsoft certifications from MS Learn content and writes them into the Azure Certifications Practice repo data files. Use when asked to add, extend or fix quizzes for a unit, module, learning path or full certification in this site.
---

# Certification practice quizzes for Azure Certifications Practice

This skill adapts the `microsoft-cert-quiz` approach to this repository. The goal is the same: questions that rehearse the real Microsoft exam, not reading checks. The differences are the output (data files instead of a chat widget), the richer item types, and that every quiz ships in English and Spanish.

## 1. Scope and size

Every level of the MS Learn tree can hold a quiz:

| Level | Where it lives | Default size |
|---|---|---|
| Unit | `quiz` on the unit, inside `data/<cert>/<module>.js` | about 10 questions (6 to 8 items) |
| Module | `quiz` on the module object | 15 to 20 questions (about 12 items) |
| Learning path | `data/<cert>/path-<path-id>.js` via `Catalog.pathQuiz` | about 25 questions (16 to 20 items) |
| Certification | `Catalog.certQuiz` | 40 questions, weighted by the study guide |

A Yes/No item counts as one question per statement, as the site displays it. Skip units with nothing to test (introduction, summary, module assessment).

## 2. Gather the content

Use the Microsoft Learn connector (`microsoft_docs_fetch`) for every content unit, one call per page; walk learning path and module index pages to collect unit URLs. Fetch the `es-es` version of the path and module index pages to get the official Spanish names for paths, modules and units. Never write questions from memory; if a unit can't be read, leave it out and say so.

For a full certification exam, fetch the study guide (`/credentials/certifications/resources/study-guides/<exam>`) and split questions by the midpoint of each skill area's percentage range.

## 3. Write the items

Item shapes are documented at the top of `assets/registry.js`:

- `single`: one correct option out of four.
- `multi`: "Which two...", five options, `answers` with two indexes. Each correct selection is one point.
- `yesno`: three statements with boolean answers. Mix Yes and No, sometimes all the same.
- `dropdown`: a sentence in `parts` with one to three blanks, three options each.
- `match`: `values` (two to four) dragged onto `targets`. Values may repeat across targets.

Per unit quiz, use roughly: one or two `match` or `dropdown` items, one `multi`, one `yesno`, and the rest `single` scenario questions. Vary the order and the position of correct answers.

Depth rules from the original skill still apply: two-constraint scenarios, "minimum/least" questions, indirect descriptions, cross-unit links in comprehensive quizzes, and distractors built from real, plausible confusions in the same product family. At most one or two pure definition questions per ten. No "all/none of the above". Keep options similar in length.

Comprehensive quizzes (module, path, cert) must not reuse unit questions verbatim, and every item needs a `topic` (every Yes/No statement in them needs its own `topic`) so the results screen can break scores down.

Every correct answer must be supported by the fetched content. If the content looks wrong or outdated, check it with `microsoft_docs_search` and don't build a question on a disputed point.

## 4. Spanish mirror

Each item gets an `es` object with the same shape as the English text fields, in the same order: `q`, `options`, `explain`, `hint`, `topic`, `statements[].s/explain/topic`, `parts` (strings and `{ options }`), `values`, `targets[].t`. Answer indexes are shared, so options must be translated in exactly the same order.

Spanish questions follow the neutral "usted" register of Microsoft's Spanish exams. Use Microsoft's Spanish terminology where it exists (Confianza cero, defensa en profundidad, nube híbrida, gasto de capital/operativo, inicio de sesión único).

Nodes (cert, path, module, unit) also need `es: { name }` with the official MS Learn Spanish title.

## 5. Wire it up and verify

1. New module: add its id to the path's `modules` list in `cert.js`, create the module file with `Catalog.module`, and add its `<script>` to `index.html` after the cert's `cert.js`.
2. Run `node tools/validate.js`. It must report "No problems found."
3. Open the site locally and take at least one quiz of each new level in both languages.

When reporting back, say how many quizzes and questions were added, which units were skipped and why, and any source content that looked doubtful, with a link to the official doc.
