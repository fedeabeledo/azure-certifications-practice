const app = document.getElementById("app");
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const store = {
  get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};

/* ---------- Language ---------- */
let lang = store.get("quizhub-lang") === "en" ? "en" : "es";
document.documentElement.lang = lang;

// Deep-merges the Spanish mirror over the English base (arrays by index, objects by key)
function merge(base, over) {
  if (over === undefined || over === null) return base;
  if (Array.isArray(base)) return base.map((b, i) => merge(b, over[i]));
  if (base && typeof base === "object") { const out = { ...base }; for (const k in over) out[k] = merge(base[k], over[k]); return out; }
  return over;
}
const loc = n => (lang === "es" && n && n.es ? merge(n, n.es) : n);
const nameOf = n => loc(n).name;
const learnUrl = u => (u && lang === "es" ? u.replace("/en-us/", "/es-es/") : u);

const UI = {
  es: {
    brand: "Azure Certifications Practice", studyGroup: "Práctica para certificaciones", homeTitle: "Cuestionarios de certificaciones Microsoft",
    homeIntro: "Preguntas con el formato del examen, ordenadas como en MS Learn: certificación, learning path, módulo y unidad. Cada nivel tiene además su integral. Elegí el idioma arriba a la derecha; las preguntas cambian con él. No se guarda ninguna respuesta.",
    paths: n => `${n} ${n === 1 ? "learning path" : "learning paths"}`, quizzes: n => `${n} ${n === 1 ? "cuestionario" : "cuestionarios"}`, noQuizzes: "sin cuestionarios",
    questions: n => `${n} ${n === 1 ? "pregunta" : "preguntas"}`, points: n => `${n} ${n === 1 ? "punto" : "puntos"}`,
    certExam: "Simulacro del examen", fullExam: c => `${c} completo`, certReady: n => `${n} preguntas con la distribución de temas de la guía oficial.`,
    certSoon: "Se arma cuando estén cubiertos todos los learning paths, con la distribución de temas de la guía oficial.",
    startExam: "Empezar simulacro", start: "Empezar", pending: "Pendiente", pathIntegral: "Integral del learning path",
    pathReady: n => `${n} preguntas de todos sus módulos`, pathSoon: "Cubre todos los módulos de este learning path",
    noPathQuizzes: "Todavía no hay cuestionarios de este learning path.", integral: "Integral", integralPending: "Integral pendiente",
    noUnitQuizzes: "Sin cuestionarios por unidad todavía", pendingPill: "pendiente",
    footer: "Basado en el contenido oficial de Microsoft Learn. El examen real puede variar en formato y cantidad de preguntas.",
    kind: { unit: "Unidad", module: "Integral del módulo", path: "Integral del learning path", cert: "Simulacro del examen" },
    home: "Inicio", backIndex: "Índice", viewLearn: "Ver en MS Learn",
    forStudy: "Para estudiar", practice: "Práctica", practiceDesc: "Revisás cada pregunta cuando la respondés y ves la explicación antes de pasar a la siguiente.", startPractice: "Empezar práctica →",
    forMeasure: "Para medirte", exam: "Examen", examDesc: "Como el real: sin correcciones hasta el final, con cronómetro, marcar para revisar y pantalla de revisión antes de terminar.", startExamMode: "Empezar examen →",
    formats: "Formatos en este cuestionario:",
    fmt: { single: "Opción única", multi: "Selección múltiple", yesno: "Sí / No", dropdown: "Desplegables", match: "Arrastrar y soltar" },
    exit: "Salir", exitAsk: "¿Salir del cuestionario? Vas a perder las respuestas de este intento.", exitYes: "Salir", exitNo: "Seguir respondiendo",
    backToQ: n => `Volver a la pregunta ${n}`,
    // Exam content chrome
    question: n => `Pregunta ${n}`, pts: n => `${n} ${n === 1 ? "punto" : "puntos"}`, markedChip: "Marcada para revisión",
    hint: "Pista", statements: "Afirmaciones", yes: "Sí", no: "No", correctAns: v => `Respuesta correcta: ${v}`, correctShort: v => `Correcta: ${v}`,
    values: "Valores", answerArea: "Área de respuesta", valueSlot: "Valor", select: "Seleccionar…",
    matchHelp: "Tocá un valor y después un casillero, o arrastralo. Tocá un casillero lleno para vaciarlo.",
    correct: "Correcto.", notQuite: "Incorrecto.", partial: (a, b) => `Parcialmente correcto: ${a} de ${b} puntos.`,
    prev: "Anterior", next: "Siguiente", mark: "Marcar para revisión", reviewBtn: "Revisión", check: "Comprobar respuesta", seeResults: "Ver resultados",
    instr: {
      multi: "Cada respuesta correcta presenta una solución completa. NOTA: Cada selección correcta vale un punto.",
      yesno: "Para cada una de las siguientes afirmaciones, seleccione Sí si la afirmación es verdadera. De lo contrario, seleccione No. NOTA: Cada selección correcta vale un punto.",
      dropdown: "Para responder, seleccione las opciones adecuadas en el área de respuesta. NOTA: Cada selección correcta vale un punto.",
      match: "Para responder, arrastre el valor adecuado a la descripción correcta. Cada valor se puede usar una vez, más de una vez o ninguna. NOTA: Cada coincidencia correcta vale un punto."
    },
    // Review
    review: "Revisión", reviewIntro: "Elegí una pregunta para volver a ella. Las marcadas para revisión y las incompletas están resaltadas.",
    answered: "Respondida", marked: "Marcada para revisión", markedShort: "Marcada", incomplete: "Incompleta", unanswered: "Sin responder",
    finishExam: "Terminar examen", finishWarn: n => `${n ? `Tenés ${n} ${n === 1 ? "pregunta incompleta" : "preguntas incompletas"}. ` : ""}Después de terminar no vas a poder cambiar las respuestas.`,
    confirmFinish: "Confirmar y terminar", cancel: "Cancelar",
    // Results
    examResult: "Resultado del examen", practiceResult: "Resultado de la práctica", scoreLine: (a, b, p) => `${a} de ${b} puntos · ${p}%`,
    time: t => ` · tiempo ${t}`, good: "Buen resultado: revisá igual las explicaciones de lo que fallaste.", bad: "Repasá los temas con menos puntos y volvé a intentarlo.",
    scaled: "El puntaje del examen real es escalado, así que este porcentaje no se traduce directo a esa escala.",
    byTopic: "Por tema", retry: "Volver a intentar", reviewAnswers: "Revisión de respuestas", general: "General"
  },
  en: {
    brand: "Azure Certifications Practice", studyGroup: "Certification practice", homeTitle: "Microsoft certification quizzes",
    homeIntro: "Exam-style questions organized like MS Learn: certification, learning path, module and unit. Every level also has a comprehensive quiz. Pick the language at the top right; questions switch with it. No answers are stored.",
    paths: n => `${n} ${n === 1 ? "learning path" : "learning paths"}`, quizzes: n => `${n} ${n === 1 ? "quiz" : "quizzes"}`, noQuizzes: "no quizzes",
    questions: n => `${n} ${n === 1 ? "question" : "questions"}`, points: n => `${n} ${n === 1 ? "point" : "points"}`,
    certExam: "Practice exam", fullExam: c => `Full ${c}`, certReady: n => `${n} questions weighted like the official study guide.`,
    certSoon: "Built once every learning path is covered, weighted like the official study guide.",
    startExam: "Start practice exam", start: "Start", pending: "Pending", pathIntegral: "Learning path review",
    pathReady: n => `${n} questions across all its modules`, pathSoon: "Covers every module in this learning path",
    noPathQuizzes: "No quizzes for this learning path yet.", integral: "Review", integralPending: "Review pending",
    noUnitQuizzes: "No unit quizzes yet", pendingPill: "pending",
    footer: "Based on official Microsoft Learn content. The real exam may differ in format and number of questions.",
    kind: { unit: "Unit", module: "Module review", path: "Learning path review", cert: "Practice exam" },
    home: "Home", backIndex: "Index", viewLearn: "View on MS Learn",
    forStudy: "To study", practice: "Practice", practiceDesc: "Check each question as you answer it and read the explanation before moving on.", startPractice: "Start practice →",
    forMeasure: "To measure yourself", exam: "Exam", examDesc: "Like the real one: no feedback until the end, with a clock, mark for review and a review screen before you finish.", startExamMode: "Start exam →",
    formats: "Formats in this quiz:",
    fmt: { single: "Single choice", multi: "Multiple choice", yesno: "Yes / No", dropdown: "Drop-down", match: "Drag and drop" },
    exit: "Exit", exitAsk: "Exit the quiz? Your answers for this attempt will be lost.", exitYes: "Exit", exitNo: "Keep going",
    backToQ: n => `Back to question ${n}`,
    question: n => `Question ${n}`, pts: n => `${n} ${n === 1 ? "point" : "points"}`, markedChip: "Marked for review",
    hint: "Hint", statements: "Statements", yes: "Yes", no: "No", correctAns: v => `Correct answer: ${v}`, correctShort: v => `Correct: ${v}`,
    values: "Values", answerArea: "Answer area", valueSlot: "Value", select: "Select…",
    matchHelp: "Tap a value, then a box, or drag it. Tap a filled box to clear it.",
    correct: "Correct.", notQuite: "Not quite.", partial: (a, b) => `Partially correct: ${a} of ${b} points.`,
    prev: "Previous", next: "Next", mark: "Mark for review", reviewBtn: "Review", check: "Check answer", seeResults: "See results",
    instr: {
      multi: "Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.",
      yesno: "For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.",
      dropdown: "To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
      match: "To answer, drag the appropriate value to the correct description. Each value may be used once, more than once, or not at all. NOTE: Each correct match is worth one point."
    },
    review: "Review", reviewIntro: "Select a question to go back to it. Questions marked for review and incomplete questions are highlighted.",
    answered: "Answered", marked: "Marked for review", markedShort: "Marked", incomplete: "Incomplete", unanswered: "Unanswered",
    finishExam: "Finish exam", finishWarn: n => `${n ? `You have ${n} incomplete ${n === 1 ? "question" : "questions"}. ` : ""}You can't change your answers after you finish.`,
    confirmFinish: "Confirm and finish", cancel: "Cancel",
    examResult: "Exam result", practiceResult: "Practice result", scoreLine: (a, b, p) => `${a} of ${b} points · ${p}%`,
    time: t => ` · time ${t}`, good: "Good result: still read the explanations for what you missed.", bad: "Review the topics with the fewest points and try again.",
    scaled: "The real exam uses a scaled score, so this percentage doesn't map directly to it.",
    byTopic: "By topic", retry: "Try again", reviewAnswers: "Answer review", general: "General"
  }
};
const T = () => UI[lang];

/* ---------- Catalog index ---------- */
// Hash ids: unit "<cert>-<unit>", module "<cert>-m-<module>", path "<cert>-p-<path>", cert "<cert>-full"
const idFor = {
  unit: (c, n) => `${c.id}-${n.id}`,
  module: (c, n) => `${c.id}-m-${n.id}`,
  path: (c, n) => `${c.id}-p-${n.id}`,
  cert: c => `${c.id}-full`
};
// Element ids on the home page, used by clickable breadcrumbs
const anchorFor = { cert: c => `c-${c.id}`, path: (c, p) => `p-${c.id}-${p.id}`, module: (c, m) => `m-${c.id}-${m.id}` };
const index = new Map();
for (const cert of window.CATALOG) {
  if (cert.quiz) index.set(idFor.cert(cert), { kind: "cert", node: cert, cert });
  for (const path of cert.paths) {
    if (path.quiz) index.set(idFor.path(cert, path), { kind: "path", node: path, cert, path });
    for (const mod of path.modules || []) {
      if (mod.quiz) index.set(idFor.module(cert, mod), { kind: "module", node: mod, cert, path, mod });
      for (const unit of mod.units || []) {
        if (unit.quiz) index.set(idFor.unit(cert, unit), { kind: "unit", node: unit, cert, path, mod, unit });
      }
    }
  }
}
// Questions as the exam counts them: each Yes/No statement is one question
const qCount = quiz => quiz.items.reduce((s, it) => s + (it.type === "yesno" ? it.statements.length : 1), 0);
const quizCount = node => (node.quiz ? 1 : 0) + (node.paths || node.modules || node.units || []).reduce((s, k) => s + quizCount(k), 0);

/* ---------- Item model ---------- */
const blanks = it => it.parts.filter(p => typeof p !== "string");
const maxPoints = it => ({ single: 1, multi: it.answers?.length, yesno: it.statements?.length, dropdown: it.parts && blanks(it).length, match: it.targets?.length })[it.type];
const emptyResp = it => it.type === "single" ? null : it.type === "multi" ? [] :
  (it.type === "yesno" ? it.statements : it.type === "dropdown" ? blanks(it) : it.targets).map(() => null);
// One boolean per point slot
function grade(it, r) {
  switch (it.type) {
    case "single": return [r === it.answer];
    case "multi": { const hits = r.filter(x => it.answers.includes(x)).length; return it.answers.map((_, i) => i < hits); }
    case "yesno": return it.statements.map((s, i) => r[i] === s.answer);
    case "dropdown": return blanks(it).map((b, i) => r[i] === b.answer);
    case "match": return it.targets.map((t, i) => r[i] === t.answer);
  }
}
// Topic of each point slot, used for the breakdown
const slotTopics = (it, fallback) => it.type === "yesno"
  ? it.statements.map(s => s.topic || it.topic || fallback)
  : Array(maxPoints(it)).fill(it.topic || fallback);
const isComplete = (it, r) => it.type === "single" ? r !== null : it.type === "multi" ? r.length === it.answers.length : r.every(x => x !== null);
const isStarted = (it, r) => it.type === "single" ? r !== null : it.type === "multi" ? r.length > 0 : r.some(x => x !== null);

/* ---------- Session and view state ---------- */
let S = null;            // current quiz attempt
let view = null;         // re-renders the current screen (used by the language switch)
let pendingFocus = null; // home section to open and scroll to after a breadcrumb click
let clockTimer = null;
const stopClock = () => { clearInterval(clockTimer); clockTimer = null; };
const elapsed = () => { const s = Math.floor(((S.end || Date.now()) - S.start) / 1000); return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`; };
const anyStarted = () => S && S.items.some((it, i) => isStarted(it, S.resp[i]));

/* ---------- Shared chrome ---------- */
const langSwitch = () => `<div class="lang" role="group" aria-label="Language"><button type="button" data-lang="es" aria-pressed="${lang === "es"}">ES</button><button type="button" data-lang="en" aria-pressed="${lang === "en"}">EN</button></div>`;
function topbar(left, extra = "", tight = false) {
  return `<div class="topbar ${tight ? "tight" : ""}"><div class="grow">${left}</div>${extra}${langSwitch()}</div>`;
}
const backBtn = (id, label) => `<button class="back" type="button" id="${id}"><span aria-hidden="true">←</span> ${esc(label)}</button>`;
const backLink = label => `<a class="back" href="#"><span aria-hidden="true">←</span> ${esc(label)}</a>`;

// Breadcrumb items are buttons that open the matching section on the home page
function crumbsFor(e) {
  const c = [{ label: T().home, anchor: null }];
  if (e.kind !== "cert") c.push({ label: e.cert.code, anchor: anchorFor.cert(e.cert) });
  if (e.kind === "module" || e.kind === "unit") c.push({ label: nameOf(e.path), anchor: anchorFor.path(e.cert, e.path), open: `${e.cert.id}/${e.path.id}` });
  if (e.kind === "unit") c.push({ label: nameOf(e.mod), anchor: anchorFor.module(e.cert, e.mod), open: `${e.cert.id}/${e.path.id}` });
  return `<nav class="crumbs" aria-label="Breadcrumb">${c.map((x, i) =>
    `${i ? `<span class="sep">/</span>` : ""}<button type="button" data-anchor="${x.anchor || ""}" data-open="${x.open || ""}">${esc(x.label)}</button>`).join("")}</nav>`;
}
const titleFor = e => e.kind === "cert" ? `${e.cert.code}: ${nameOf(e.cert)}` : nameOf(e.node);

// Delegated handlers for chrome present on several screens
app.addEventListener("click", e => {
  const l = e.target.closest(".lang button");
  if (l && l.dataset.lang !== lang) {
    lang = l.dataset.lang; store.set("quizhub-lang", lang); document.documentElement.lang = lang;
    if (view) view();
    return;
  }
  const cr = e.target.closest(".crumbs button");
  if (cr) {
    pendingFocus = { anchor: cr.dataset.anchor, open: cr.dataset.open };
    if (location.hash) location.hash = ""; else renderHome();
  }
});

/* ---------- Home ---------- */
function renderHome() {
  stopClock(); S = null; view = renderHome;
  const t = T();
  const remembered = store.get("quizhub-open") || [];
  if (pendingFocus && pendingFocus.open && !remembered.includes(pendingFocus.open)) remembered.push(pendingFocus.open);
  const hasMemory = store.get("quizhub-open") !== null || (pendingFocus && pendingFocus.open);
  let h = topbar(`<span class="brand">${t.brand}</span>`);
  h += `<header class="intro"><span class="eyebrow">${t.studyGroup}</span><h1>${t.homeTitle}</h1><p>${t.homeIntro}</p></header>`;
  for (const cert of window.CATALOG) {
    h += `<section class="cert" id="${anchorFor.cert(cert)}"><div class="cert-top"><span class="code">${esc(cert.code)}</span><h2>${esc(nameOf(cert))}</h2>
      <span class="meta">${t.paths(cert.paths.length)} · ${t.quizzes(quizCount(cert))}</span></div>`;
    h += cert.quiz
      ? `<div class="exam-band"><div class="txt"><span class="eyebrow">${t.certExam}</span><h3>${t.fullExam(esc(cert.code))}</h3><p>${t.certReady(qCount(cert.quiz))}</p></div><a class="btn primary" href="#${idFor.cert(cert)}">${t.startExam}</a></div>`
      : `<div class="exam-band soon"><div class="txt"><span class="eyebrow">${t.certExam}</span><h3>${t.fullExam(esc(cert.code))}</h3><p>${t.certSoon}</p></div><span class="btn pending">${t.pending}</span></div>`;
    h += `<div class="paths">`;
    cert.paths.forEach((path, pi) => {
      const n = quizCount(path), pid = `${cert.id}/${path.id}`;
      const open = hasMemory ? remembered.includes(pid) : n > 0;
      h += `<details class="path" id="${anchorFor.path(cert, path)}" data-pid="${pid}" ${open ? "open" : ""}><summary><span class="chev"></span><span class="lp">LP${pi + 1}</span><span class="pname">${esc(nameOf(path))}</span><span class="count">${n ? t.quizzes(n) : t.noQuizzes}</span></summary><div class="path-body">`;
      h += path.quiz
        ? `<div class="path-strip"><div class="txt"><strong>${t.pathIntegral}</strong><span class="sub">${t.pathReady(qCount(path.quiz))}</span></div><a class="btn primary" href="#${idFor.path(cert, path)}">${t.start}</a></div>`
        : `<div class="path-strip"><div class="txt"><strong>${t.pathIntegral}</strong><span class="sub">${t.pathSoon}</span></div><span class="btn pending">${t.pending}</span></div>`;
      if (!path.modules.length) h += `<p class="empty-note">${t.noPathQuizzes}</p>`;
      path.modules.forEach((mod, mi) => {
        if (mod.missing) return; // listed in cert.js but its module file isn't loaded
        h += `<div class="module" id="${anchorFor.module(cert, mod)}"><div class="module-head"><span class="mn">M${mi + 1}</span><h3>${esc(nameOf(mod))}</h3>
          ${mod.quiz ? `<a class="btn primary" href="#${idFor.module(cert, mod)}">${t.integral} · ${qCount(mod.quiz)}</a>` : `<span class="btn pending">${t.integralPending}</span>`}</div><ul class="units">`;
        if (!mod.units.length) h += `<li><div class="unit empty"><span class="uname">${t.noUnitQuizzes}</span></div></li>`;
        for (const unit of mod.units) {
          h += unit.quiz
            ? `<li><a class="unit" href="#${idFor.unit(cert, unit)}"><span class="uname">${esc(nameOf(unit))}</span><span class="pill ready">${t.questions(qCount(unit.quiz))}</span></a></li>`
            : `<li><div class="unit empty"><span class="uname">${esc(nameOf(unit))}</span><span class="pill soon">${t.pendingPill}</span></div></li>`;
        }
        h += `</ul></div>`;
      });
      h += `</div></details>`;
    });
    h += `</div></section>`;
  }
  h += `<footer>${t.footer}</footer>`;
  app.innerHTML = h;
  app.querySelectorAll("details.path").forEach(d => d.addEventListener("toggle", () =>
    store.set("quizhub-open", [...app.querySelectorAll("details.path[open]")].map(x => x.dataset.pid))));
  if (pendingFocus) {
    const el = pendingFocus.anchor && document.getElementById(pendingFocus.anchor);
    pendingFocus = null;
    if (el) { el.scrollIntoView({ block: "start" }); window.scrollBy(0, -70); return; }
  }
  window.scrollTo(0, 0);
}

/* ---------- Start screen ---------- */
function renderStart(entry) {
  stopClock(); S = null; view = () => renderStart(entry);
  const t = T(), items = entry.node.quiz.items;
  const pts = items.reduce((s, it) => s + maxPoints(it), 0);
  const fmts = [...new Set(items.map(it => it.type))];
  const learn = learnUrl(entry.node.url || entry.node.studyGuide);
  app.innerHTML = `${topbar(backLink(t.backIndex))}${crumbsFor(entry)}<div class="start">
    <header class="start-head"><span class="eyebrow">${t.kind[entry.kind]}</span><h1>${esc(titleFor(entry))}</h1>
      <div class="start-meta"><span>${t.questions(qCount(entry.node.quiz))}</span><span>${t.points(pts)}</span>${learn ? `<a href="${esc(learn)}" target="_blank" rel="noopener">${t.viewLearn}</a>` : ""}</div></header>
    <div class="modes">
      <button class="mode" type="button" data-mode="practice"><span class="eyebrow">${t.forStudy}</span><h2>${t.practice}</h2><p>${t.practiceDesc}</p><span class="go">${t.startPractice}</span></button>
      <button class="mode" type="button" data-mode="exam"><span class="eyebrow">${t.forMeasure}</span><h2>${t.exam}</h2><p>${t.examDesc}</p><span class="go">${t.startExamMode}</span></button>
    </div>
    <div class="formats"><span>${t.formats}</span>${fmts.map(f => `<span class="fmt">${t.fmt[f]}</span>`).join("")}</div>
  </div>`;
  app.querySelectorAll(".mode").forEach(b => b.addEventListener("click", () => {
    S = { entry, items, mode: b.dataset.mode, idx: 0, resp: items.map(emptyResp), marked: new Set(), checked: new Set(), start: Date.now(), end: null, pick: null };
    if (S.mode === "exam") clockTimer = setInterval(() => { const c = document.getElementById("clock"); if (c) c.textContent = elapsed(); }, 1000);
    renderItemView();
  }));
  window.scrollTo(0, 0);
}

/* ---------- Item rendering ---------- */
// Renders the answer area of a localized item; `locked` shows correctness and disables input
function itemBody(it, r, locked) {
  const t = T(), L = locked;
  switch (it.type) {
    case "single":
    case "multi": {
      const multi = it.type === "multi";
      const full = multi && r.length >= it.answers.length;
      return `<fieldset class="choices">${it.options.map((o, oi) => {
        const on = multi ? r.includes(oi) : r === oi;
        const correct = multi ? it.answers.includes(oi) : it.answer === oi;
        const cls = L ? (correct ? "right" : on ? "wrong" : "") : on ? "sel" : "";
        return `<label class="choice ${cls}"><input type="${multi ? "checkbox" : "radio"}" name="opt" value="${oi}" ${on ? "checked" : ""} ${L || (multi && full && !on) ? "disabled" : ""}><span>${esc(o)}</span></label>`;
      }).join("")}</fieldset>`;
    }
    case "yesno":
      return `<div class="tablewrap"><table class="yn"><thead><tr><th>${t.statements}</th><th class="c">${t.yes}</th><th class="c">${t.no}</th></tr></thead><tbody>${it.statements.map((s, si) => {
        const cls = L ? (r[si] === s.answer ? "right" : "wrong") : "";
        const fix = L && r[si] !== s.answer ? `<span class="fix">${t.correctAns(s.answer ? t.yes : t.no)}</span>` : "";
        return `<tr class="${cls}"><td>${esc(s.s)}${fix}</td>
          <td class="c"><input type="radio" name="yn${si}" data-s="${si}" value="1" aria-label="${t.yes}" ${r[si] === true ? "checked" : ""} ${L ? "disabled" : ""}></td>
          <td class="c"><input type="radio" name="yn${si}" data-s="${si}" value="0" aria-label="${t.no}" ${r[si] === false ? "checked" : ""} ${L ? "disabled" : ""}></td></tr>`;
      }).join("")}</tbody></table></div>`;
    case "dropdown": {
      let bi = 0;
      return `<div class="sentence">${it.parts.map(p => {
        if (typeof p === "string") return esc(p);
        const i = bi++, v = r[i];
        const cls = L ? (v === p.answer ? "right" : "wrong") : "";
        const fix = L && v !== p.answer ? `<span class="fix">→ ${esc(p.options[p.answer])}</span>` : "";
        return `<select data-b="${i}" class="${cls}" aria-label="${i + 1}" ${L ? "disabled" : ""}><option value="">${t.select}</option>${p.options.map((o, oi) => `<option value="${oi}" ${v === oi ? "selected" : ""}>${esc(o)}</option>`).join("")}</select>${fix}`;
      }).join("")}</div>`;
    }
    case "match": {
      const pool = L ? "" : `<div class="pool"><span class="col-label">${t.values}</span><div class="chips">${it.values.map((v, vi) =>
        `<button type="button" class="chip ${S && S.pick === vi ? "picked" : ""}" draggable="true" data-v="${vi}">${esc(v)}</button>`).join("")}</div></div>`;
      const rows = it.targets.map((tg, ti) => {
        const v = r[ti];
        const cls = L ? (v === tg.answer ? "right" : "wrong") : v !== null ? "filled" : "";
        const fix = L && v !== tg.answer ? `<span class="fix">${t.correctShort(esc(it.values[tg.answer]))}</span>` : "";
        return `<div class="mrow"><button type="button" class="slot ${cls}" data-t="${ti}" ${L ? "disabled" : ""}>${v !== null ? esc(it.values[v]) : t.valueSlot}</button><span class="mdesc">${esc(tg.t)}${fix}</span></div>`;
      }).join("");
      return `<div class="match">${L ? "" : `<p class="helper">${t.matchHelp}</p>`}${pool}<div class="area"><span class="col-label">${t.answerArea}</span>${rows}</div></div>`;
    }
  }
}

function feedbackHtml(it, r) {
  const t = T(), g = grade(it, r), got = g.filter(Boolean).length, max = g.length;
  const verdict = got === max ? `<span class="verdict ok">${t.correct}</span>` : `<span class="verdict no">${got ? t.partial(got, max) : t.notQuite}</span>`;
  const tag = it.topic ? `<span class="topic">${esc(it.topic)}</span> ` : "";
  const body = it.type === "yesno"
    ? `<ul>${it.statements.map(s => `<li>${s.topic ? `<span class="topic">${esc(s.topic)}</span> ` : ""}${esc(s.explain)}</li>`).join("")}</ul>`
    : `<p>${tag}${esc(it.explain)}</p>`;
  return `<div class="feedback">${verdict}${body}</div>`;
}

function itemHtml(it, r, n, locked, opts = {}) {
  const t = T(), pts = maxPoints(it);
  return `<article class="item ${locked ? "locked" : ""}" data-n="${n}">
    <div class="item-tags"><span>${t.question(n + 1)}</span><span class="pts">${t.pts(pts)}</span>${opts.flag ? `<span class="flag-chip">${t.markedChip}</span>` : ""}${opts.got || ""}</div>
    ${it.type === "yesno" ? "" : `<p class="qtext">${esc(it.q)}</p>`}
    ${t.instr[it.type] ? `<p class="instr">${t.instr[it.type]}</p>` : ""}
    ${it.hint && !locked ? `<details class="hint"><summary>${t.hint}</summary><p>${esc(it.hint)}</p></details>` : ""}
    <div data-role="body">${itemBody(it, r, locked)}</div>
    ${locked ? feedbackHtml(it, r) : ""}
  </article>`;
}

/* ---------- Item view (one question per screen) ---------- */
function examTopbar(left) {
  const t = T();
  const info = `<span class="code">${esc(S.entry.cert.code)}</span><span class="etitle">${esc(titleFor(S.entry))}</span>`;
  const extra = `${S.mode === "exam" ? `<span class="clock" id="clock">${elapsed()}</span>` : ""}${left === "exit" ? `<span class="pos">${S.idx + 1} / ${S.items.length}</span>` : ""}`;
  const leftHtml = left === "exit" ? backBtn("exit", t.exit) : backBtn("backq", t.backToQ(S.idx + 1));
  return topbar(`${leftHtml}${info}`, extra, true);
}

// Inline confirmation before leaving an attempt that has answers (the viewer blocks confirm dialogs)
function bindExit() {
  const b = document.getElementById("exit");
  if (!b) return;
  b.onclick = () => {
    if (!anyStarted()) { location.hash = ""; return; }
    if (document.getElementById("exitbox")) return;
    const t = T();
    const box = document.createElement("div");
    box.className = "confirm-strip"; box.id = "exitbox";
    box.innerHTML = `<p>${t.exitAsk}</p><button class="btn primary" type="button" id="exityes">${t.exitYes}</button><button class="btn secondary" type="button" id="exitno">${t.exitNo}</button>`;
    app.querySelector(".topbar").after(box);
    document.getElementById("exityes").onclick = () => { stopClock(); S = null; location.hash = ""; };
    document.getElementById("exitno").onclick = () => box.remove();
    document.getElementById("exitno").focus();
  };
}

function renderItemView() {
  view = renderItemView;
  const t = T(), { items, idx, mode } = S, raw = items[idx], it = loc(raw), r = S.resp[idx];
  const locked = mode === "practice" && S.checked.has(idx);
  const last = idx === items.length - 1;
  const track = items.map((x, i) => `<i class="${S.marked.has(i) ? "flag" : isComplete(x, S.resp[i]) ? "done" : ""} ${i === idx ? "cur" : ""}"></i>`).join("");
  let primary;
  if (mode === "practice") {
    primary = !locked
      ? `<button class="btn primary" id="check" type="button" ${isStarted(it, r) ? "" : "disabled"}>${t.check}</button>`
      : `<button class="btn primary" id="next" type="button">${last ? t.seeResults : t.next}</button>`;
  } else {
    primary = `<button class="btn primary" id="next" type="button">${last ? t.reviewBtn : t.next}</button>`;
  }
  app.innerHTML = `${examTopbar("exit")}
    <div class="track">${track}</div>
    ${itemHtml(it, r, idx, locked, { flag: S.marked.has(idx) })}
    <div class="exam-nav">
      <button class="btn secondary" id="prev" type="button" ${idx === 0 ? "disabled" : ""}><span aria-hidden="true">←</span> ${t.prev}</button>
      ${mode === "exam" ? `<label class="markbox"><input type="checkbox" id="mark" ${S.marked.has(idx) ? "checked" : ""}>${t.mark}</label>` : ""}
      <span class="spacer"></span>
      ${mode === "exam" ? `<button class="btn secondary" id="toreview" type="button">${t.reviewBtn}</button>` : ""}
      ${primary}
    </div>`;
  bindExit();
  bindItem(it, idx);
  document.getElementById("prev").onclick = () => { S.idx--; S.pick = null; renderItemView(); window.scrollTo(0, 0); };
  const next = document.getElementById("next");
  if (next) next.onclick = () => {
    S.pick = null;
    if (!last) { S.idx++; renderItemView(); window.scrollTo(0, 0); }
    else if (mode === "exam") renderReview();
    else finish();
  };
  const check = document.getElementById("check");
  if (check) check.onclick = () => { S.checked.add(idx); renderItemView(); };
  const mark = document.getElementById("mark");
  if (mark) mark.onchange = () => { mark.checked ? S.marked.add(idx) : S.marked.delete(idx); renderItemView(); };
  const tr = document.getElementById("toreview");
  if (tr) tr.onclick = renderReview;
}

// Wires the answer area to S.resp without re-rendering inputs the user is operating
function bindItem(it, idx) {
  const root = app.querySelector(".item:not(.locked)");
  if (!root) return;
  const body = root.querySelector('[data-role="body"]');
  const refresh = () => {
    const check = document.getElementById("check");
    if (check) check.disabled = !isStarted(it, S.resp[idx]);
    const cur = app.querySelectorAll(".track i")[idx];
    if (cur) cur.className = `${S.marked.has(idx) ? "flag" : isComplete(it, S.resp[idx]) ? "done" : ""} cur`;
  };
  const rerender = () => { body.innerHTML = itemBody(it, S.resp[idx], false); refresh(); };

  body.addEventListener("change", e => {
    const el = e.target;
    if (it.type === "single") { S.resp[idx] = +el.value; body.querySelectorAll(".choice").forEach(c => c.classList.toggle("sel", c.querySelector("input").checked)); }
    else if (it.type === "multi") {
      const v = +el.value, r = S.resp[idx];
      S.resp[idx] = el.checked ? [...r, v] : r.filter(x => x !== v);
      const full = S.resp[idx].length >= it.answers.length;
      body.querySelectorAll(".choice").forEach(c => { const i = c.querySelector("input"); i.disabled = full && !i.checked; c.classList.toggle("sel", i.checked); });
    }
    else if (it.type === "yesno") S.resp[idx][+el.dataset.s] = el.value === "1";
    else if (it.type === "dropdown") S.resp[idx][+el.dataset.b] = el.value === "" ? null : +el.value;
    refresh();
  });

  if (it.type === "match") {
    body.addEventListener("click", e => {
      const chip = e.target.closest(".chip"), slot = e.target.closest(".slot");
      if (chip) { const v = +chip.dataset.v; S.pick = S.pick === v ? null : v; rerender(); }
      else if (slot) {
        const ti = +slot.dataset.t;
        if (S.pick !== null) { S.resp[idx][ti] = S.pick; S.pick = null; }
        else if (S.resp[idx][ti] !== null) S.resp[idx][ti] = null;
        rerender();
      }
    });
    body.addEventListener("dragstart", e => { const c = e.target.closest(".chip"); if (c) e.dataTransfer.setData("text/plain", c.dataset.v); });
    body.addEventListener("dragover", e => { const s = e.target.closest(".slot"); if (s) { e.preventDefault(); s.classList.add("over"); } });
    body.addEventListener("dragleave", e => { const s = e.target.closest(".slot"); if (s) s.classList.remove("over"); });
    body.addEventListener("drop", e => {
      const s = e.target.closest(".slot"); if (!s) return;
      e.preventDefault();
      const v = e.dataTransfer.getData("text/plain");
      if (v !== "") { S.resp[idx][+s.dataset.t] = +v; S.pick = null; rerender(); }
    });
  }
}

/* ---------- Review screen (exam mode) ---------- */
function renderReview() {
  view = renderReview;
  const t = T(), { items } = S;
  const pending = items.filter((it, i) => !isComplete(it, S.resp[i])).length;
  app.innerHTML = `${examTopbar("back")}
    <div class="review" style="margin-top:28px">
      <h1>${t.review}</h1>
      <p class="instr">${t.reviewIntro}</p>
      <div class="legend"><span class="l-done">${t.answered}</span><span class="l-flag">${t.marked}</span><span>${t.incomplete}</span></div>
      <div class="tiles">${items.map((it, i) => {
        const r = S.resp[i], st = isComplete(it, r) ? "done" : isStarted(it, r) ? "part" : "todo";
        const label = st === "done" ? t.answered : st === "part" ? t.incomplete : t.unanswered;
        return `<button class="tile ${st} ${S.marked.has(i) ? "flag" : ""}" type="button" data-i="${i}"><b>${t.question(i + 1)}</b><span>${label}${S.marked.has(i) ? ` · ${t.markedShort}` : ""}</span></button>`;
      }).join("")}</div>
      <div class="finish" id="finishbox"><button class="btn primary" id="finish" type="button">${t.finishExam}</button></div>
    </div>`;
  app.querySelectorAll(".tile").forEach(b => b.onclick = () => { S.idx = +b.dataset.i; renderItemView(); window.scrollTo(0, 0); });
  document.getElementById("backq").onclick = () => renderItemView();
  // Two-step confirmation built into the page (the viewer blocks confirm dialogs)
  document.getElementById("finish").onclick = () => {
    document.getElementById("finishbox").innerHTML = `<span class="warn">${t.finishWarn(pending)}</span>
      <button class="btn primary" id="confirm" type="button">${t.confirmFinish}</button><button class="btn secondary" id="cancel" type="button">${t.cancel}</button>`;
    document.getElementById("confirm").onclick = finish;
    document.getElementById("cancel").onclick = renderReview;
  };
  window.scrollTo(0, 0);
}

/* ---------- Results ---------- */
function finish() {
  S.end = S.end || Date.now(); stopClock();
  view = finish;
  const t = T(), { items, entry } = S;
  const fallback = entry.kind === "unit" ? nameOf(entry.node) : t.general;
  let got = 0, max = 0; const topics = new Map();
  const locItems = items.map(loc);
  const perItem = locItems.map((it, i) => {
    const g = grade(it, S.resp[i]), tps = slotTopics(it, fallback);
    g.forEach((ok, k) => { const v = topics.get(tps[k]) || [0, 0]; v[0] += ok ? 1 : 0; v[1]++; topics.set(tps[k], v); });
    const gi = g.filter(Boolean).length; got += gi; max += g.length;
    return [gi, g.length];
  });
  const pct = Math.round((got / max) * 100);
  const breakdown = topics.size > 1 ? `<section class="breakdown"><span class="eyebrow">${t.byTopic}</span>${[...topics].map(([tp, [a, b]]) =>
    `<div class="brow"><span>${esc(tp)}</span><span class="bar"><i style="width:${(a / b) * 100}%"></i></span><span class="n">${a}/${b}</span></div>`).join("")}</section>` : "";
  app.innerHTML = `${topbar(backLink(t.backIndex))}${crumbsFor(entry)}<div class="results">
    <header class="score-head"><span class="eyebrow">${S.mode === "exam" ? t.examResult : t.practiceResult}</span>
      <h1>${t.scoreLine(got, max, pct)}</h1>
      <p>${esc(titleFor(entry))}${S.mode === "exam" ? t.time(elapsed()) : ""}. ${pct >= 80 ? t.good : t.bad} ${t.scaled}</p></header>
    ${breakdown}
    <div class="actions"><button class="btn primary" id="retry" type="button">${t.retry}</button><a class="btn secondary" href="#">${t.backIndex}</a></div>
    <section class="rev-list"><span class="eyebrow">${t.reviewAnswers}</span>
      ${locItems.map((it, i) => {
        const [a, b] = perItem[i], cls = a === b ? "full" : a ? "part" : "zero";
        return `<div class="rev-item">${itemHtml(it, S.resp[i], i, true, { got: `<span class="got ${cls}">${a}/${b}</span>` })}</div>`;
      }).join("")}
    </section></div>`;
  document.getElementById("retry").onclick = () => renderStart(entry);
  window.scrollTo(0, 0);
}

/* ---------- Routing ---------- */
function route() {
  const entry = index.get(location.hash.slice(1));
  if (entry) renderStart(entry); else renderHome();
}
window.addEventListener("hashchange", route);
route();
