// Catalog registry: data files call these helpers to build window.CATALOG.
//
//   Catalog.cert({...})                  -> a certification and its learning paths; each path lists module ids in order
//   Catalog.module(certId, {...})        -> a module (units, unit quizzes and the module quiz) that fills one of those ids
//   Catalog.pathQuiz(certId, pathId, q)  -> the comprehensive quiz of a learning path
//   Catalog.certQuiz(certId, q)          -> the full practice exam of a certification
//
// Load order in index.html: this file, then each cert.js, then its module and path files, then app.js.
window.CATALOG = window.CATALOG || [];
window.Catalog = {
  cert(def) {
    // Module ids become placeholders until their module file registers
    def.paths.forEach(p => { p.modules = (p.modules || []).map(id => (typeof id === "string" ? { id, units: [], missing: true } : id)); });
    window.CATALOG.push(def);
  },
  module(certId, def) {
    const cert = this._cert(certId);
    for (const path of cert.paths) {
      const i = path.modules.findIndex(m => m.id === def.id);
      if (i !== -1) { path.modules[i] = def; return; }
    }
    throw new Error(`Module "${def.id}" is not listed in any path of ${certId}`);
  },
  pathQuiz(certId, pathId, quiz) {
    const path = this._cert(certId).paths.find(p => p.id === pathId);
    if (!path) throw new Error(`Path "${pathId}" not found in ${certId}`);
    path.quiz = quiz;
  },
  certQuiz(certId, quiz) { this._cert(certId).quiz = quiz; },
  _cert(id) {
    const c = window.CATALOG.find(x => x.id === id);
    if (!c) throw new Error(`Certification "${id}" is not registered`);
    return c;
  }
};
