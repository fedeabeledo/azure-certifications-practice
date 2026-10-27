// Validates the quiz catalog: data shape, answer indexes and Spanish mirrors.
// Usage: node tools/validate.js   (exits with code 1 when problems are found)
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
// Load every catalog script in the order index.html lists them, except the app itself
const scripts = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => m[1]).filter(s => !s.endsWith("app.js"));
const ctx = { window: {} };
vm.createContext(ctx);
for (const s of scripts) {
  vm.runInContext(fs.readFileSync(path.join(root, s), "utf8"), ctx, { filename: s });
  if (ctx.window.Catalog && !ctx.Catalog) ctx.Catalog = ctx.window.Catalog;
}

const problems = [];
const fail = (where, msg) => problems.push(`${where}: ${msg}`);
const isIdx = (i, arr) => Number.isInteger(i) && i >= 0 && i < arr.length;

// Checks one item's own fields
function checkItem(it, where) {
  const need = (k) => { if (it[k] === undefined) fail(where, `missing "${k}"`); };
  switch (it.type) {
    case "single":
      need("q"); need("options"); need("explain");
      if (!isIdx(it.answer, it.options || [])) fail(where, "answer out of range");
      break;
    case "multi":
      need("q"); need("options"); need("explain");
      if (!Array.isArray(it.answers) || it.answers.length < 2) fail(where, "multi needs at least two answers");
      else if (new Set(it.answers).size !== it.answers.length || !it.answers.every(a => isIdx(a, it.options))) fail(where, "bad multi answers");
      break;
    case "yesno":
      if (!Array.isArray(it.statements) || !it.statements.length) fail(where, "no statements");
      else it.statements.forEach((s, i) => { if (typeof s.answer !== "boolean" || !s.s || !s.explain) fail(`${where} stmt ${i}`, "needs s, boolean answer, explain"); });
      break;
    case "dropdown":
      need("q"); need("parts"); need("explain");
      (it.parts || []).filter(p => typeof p !== "string").forEach((b, i) => { if (!isIdx(b.answer, b.options || [])) fail(`${where} blank ${i}`, "answer out of range"); });
      break;
    case "match":
      need("q"); need("values"); need("targets"); need("explain");
      (it.targets || []).forEach((t, i) => { if (!t.t || !isIdx(t.answer, it.values || [])) fail(`${where} target ${i}`, "bad target"); });
      break;
    default:
      fail(where, `unknown type "${it.type}"`);
  }
}

// Checks that the Spanish mirror has the same shape as the English base
function sameShape(a, b, where) {
  if (b === undefined) return;
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) return fail(where, "es length differs");
    a.forEach((x, i) => sameShape(x, b[i], `${where}[${i}]`));
  } else if (a && typeof a === "object") {
    for (const k in b) {
      if (!(k in a) && k !== "topic") fail(where, `es has extra key "${k}"`);
      else sameShape(a[k], b[k], `${where}.${k}`);
    }
  } else if (typeof a !== typeof b) fail(where, "es type differs");
}

// Fields that must be translated when present on an item
const textKeys = { single: ["q", "options", "explain"], multi: ["q", "options", "explain"], yesno: ["statements"], dropdown: ["q", "parts", "explain"], match: ["q", "values", "targets", "explain"] };

function checkQuiz(quiz, where, { comprehensive }) {
  if (!quiz.items || !quiz.items.length) return fail(where, "empty quiz");
  quiz.items.forEach((it, i) => {
    const w = `${where} #${i + 1}`;
    checkItem(it, w);
    if (!it.es) return fail(w, "missing es");
    for (const k of textKeys[it.type] || []) if (it[k] !== undefined && it.es[k] === undefined) fail(w, `es missing "${k}"`);
    if (it.topic && !it.es.topic) fail(w, "es missing topic");
    if (it.type === "yesno") it.statements.forEach((s, j) => { if (s.topic && !(it.es.statements?.[j]?.topic)) fail(`${w} stmt ${j}`, "es missing topic"); });
    if (comprehensive && it.type !== "yesno" && !it.topic) fail(w, "comprehensive quiz item needs a topic");
    if (comprehensive && it.type === "yesno" && it.statements.some(s => !s.topic)) fail(w, "comprehensive yes/no statements need topics");
    sameShape(it, it.es, w);
  });
}

let quizzes = 0, questions = 0;
const count = q => { quizzes++; questions += q.items.reduce((s, it) => s + (it.type === "yesno" ? it.statements.length : 1), 0); };
const ids = new Set();
for (const cert of ctx.window.CATALOG) {
  if (!cert.es?.name) fail(cert.id, "missing es name");
  if (cert.quiz) { checkQuiz(cert.quiz, `${cert.id} exam`, { comprehensive: true }); count(cert.quiz); }
  for (const p of cert.paths) {
    if (!p.es?.name) fail(`${cert.id}/${p.id}`, "missing es name");
    if (p.quiz) { checkQuiz(p.quiz, `${cert.id}/${p.id}`, { comprehensive: true }); count(p.quiz); }
    for (const m of p.modules) {
      if (m.missing) { fail(`${cert.id}/${p.id}/${m.id}`, "module listed but not loaded"); continue; }
      if (!m.es?.name) fail(`${cert.id}/${m.id}`, "missing es name");
      if (m.quiz) { checkQuiz(m.quiz, `${cert.id}/${m.id}`, { comprehensive: true }); count(m.quiz); }
      for (const u of m.units) {
        const key = `${cert.id}-${u.id}`;
        if (ids.has(key)) fail(key, "duplicate unit id within cert");
        ids.add(key);
        if (!u.es?.name) fail(`${cert.id}/${u.id}`, "missing es name");
        if (u.quiz) { checkQuiz(u.quiz, `${cert.id}/${m.id}/${u.id}`, { comprehensive: false }); count(u.quiz); }
      }
    }
  }
}

console.log(`${quizzes} quizzes, ${questions} questions`);
if (problems.length) { console.log(problems.join("\n")); process.exit(1); }
console.log("No problems found.");
