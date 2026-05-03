// ============================================================
//  app.js — Main application controller
//  Escuela Ramón Barrantes Herrera
// ============================================================

// ── State ────────────────────────────────────────────────────
let state = {
  student: null,      // STUDENTS entry
  subject: null,      // SUBJECTS entry
  unit: null,         // unit object from subject.units[]
  questions: [],      // shuffled questions for current quiz
  qIndex: 0,
  score: 0,
  answered: false,
  sessionResults: []  // { studentId, subjectId, unitId, correct, total, date }
};

// ── localStorage helpers ─────────────────────────────────────
const STORAGE_KEY = 'mis_estudios_history_v1';

function loadHistory() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
  catch { return []; }
}
function saveHistory(history) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}
function addSession(session) {
  const h = loadHistory();
  h.unshift(session);
  saveHistory(h.slice(0, 200)); // keep last 200 sessions
}
function clearHistory() {
  if (!confirm('¿Borrar todo el historial de progreso?')) return;
  localStorage.removeItem(STORAGE_KEY);
  renderTracker();
}

// ── Screen management ────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
}

// ── HOME ─────────────────────────────────────────────────────
function renderHome() {
  const grid = document.getElementById('home-student-grid');
  grid.innerHTML = STUDENTS.map(st => `
    <button class="student-card" onclick="selectStudent('${st.id}')"
      style="--accent:${st.color}">
      <span class="sc-avatar">${st.avatar}</span>
      <span class="sc-name">${st.name}</span>
      <span class="sc-grade">${st.grade}</span>
    </button>
  `).join('');
}

function selectStudent(id) {
  state.student = STUDENTS.find(s => s.id === id);
  renderSubjects();
  showScreen('subjects');
}

function goHome() {
  state.student = null;
  state.subject = null;
  state.unit = null;
  showScreen('home');
}

// ── SUBJECTS ─────────────────────────────────────────────────
function renderSubjects() {
  const st = state.student;
  document.getElementById('subj-avatar').textContent = st.avatar;
  document.getElementById('subj-name').textContent = st.name;
  document.getElementById('subj-grade').textContent = st.grade;

  const grid = document.getElementById('subj-grid');
  grid.innerHTML = st.subjects.map(sid => {
    const subj = SUBJECTS[sid];
    if (!subj) return '';
    return `
      <button class="subject-card" onclick="selectSubject('${sid}')"
        style="--accent:${subj.color};--accent-light:${subj.colorLight}">
        <span class="sj-emoji">${subj.label.split(' ')[0]}</span>
        <span class="sj-label">${subj.label.replace(/^\S+\s/, '')}</span>
        <span class="sj-desc">${subj.description}</span>
      </button>
    `;
  }).join('');
}

function selectSubject(sid) {
  state.subject = SUBJECTS[sid];
  renderTopics();
  showScreen('topics');
}

function goSubjects() {
  state.unit = null;
  renderSubjects();
  showScreen('subjects');
}

// ── TOPICS ───────────────────────────────────────────────────
function renderTopics() {
  const subj = state.subject;
  document.getElementById('topics-unit-title').textContent = subj.label;
  document.getElementById('topics-unit-theme').textContent = subj.description;
  document.getElementById('topics-unit-eq').textContent = '';

  const history = loadHistory();
  const list = document.getElementById('topic-list');

  if (!subj.units || subj.units.length === 0) {
    list.innerHTML = '<p style="color:var(--muted);text-align:center;padding:40px 0;">Próximamente — contenido en preparación.</p>';
    return;
  }

  list.innerHTML = subj.units.map(unit => {
    // Calculate best score for this unit
    const sessions = history.filter(s =>
      s.studentId === state.student.id &&
      s.subjectId === state.subject.id &&
      s.unitId === unit.id
    );
    const best = sessions.length
      ? Math.max(...sessions.map(s => Math.round(s.correct / s.total * 100)))
      : null;
    const badge = best !== null
      ? `<span class="topic-badge" style="background:${best >= 80 ? '#dcfce7' : best >= 50 ? '#fef9c3' : '#fee2e2'};color:${best >= 80 ? '#166534' : best >= 50 ? '#92400e' : '#991b1b'}">${best}%</span>`
      : `<span class="topic-badge" style="background:#f1f5f9;color:#64748b">Nuevo</span>`;

    return `
      <button class="topic-item" onclick="selectUnit('${unit.id}')"
        style="--accent:${unit.color};--accent-light:${unit.colorLight}">
        <span class="ti-emoji">${unit.emoji}</span>
        <div class="ti-info">
          <span class="ti-title">${unit.title}</span>
          <span class="ti-theme">${unit.theme}</span>
        </div>
        ${badge}
      </button>
    `;
  }).join('');
}

function selectUnit(uid) {
  state.unit = state.subject.units.find(u => u.id === uid);
  renderStudy();
  showScreen('study');
}

function goToTopics() {
  renderTopics();
  showScreen('topics');
}

// ── STUDY ────────────────────────────────────────────────────
function renderStudy() {
  const unit = state.unit;
  document.getElementById('study-title').textContent = `${unit.emoji} ${unit.title}`;
  document.getElementById('study-content').innerHTML = unit.studyNotes || '<p>Notas de estudio próximamente.</p>';
}

function startQuiz() {
  if (!state.unit || !state.unit.questions || state.unit.questions.length === 0) {
    alert('No hay preguntas disponibles para este tema.');
    return;
  }
  // Shuffle questions, take up to 10
  const shuffled = [...state.unit.questions].sort(() => Math.random() - 0.5).slice(0, 10);
  state.questions = shuffled;
  state.qIndex = 0;
  state.score = 0;
  state.answered = false;

  document.getElementById('quiz-topic-label').textContent = `${state.unit.emoji} ${state.unit.title}`;
  document.getElementById('quiz-score').textContent = '0';

  renderQuestion();
  showScreen('quiz');
}

// ── QUIZ ─────────────────────────────────────────────────────
function renderQuestion() {
  const q = state.questions[state.qIndex];
  const total = state.questions.length;
  state.answered = false;

  document.getElementById('quiz-qnum').textContent = `Pregunta ${state.qIndex + 1} de ${total}`;
  document.getElementById('quiz-progress').style.width = ((state.qIndex / total) * 100) + '%';
  document.getElementById('quiz-feedback').innerHTML = '';
  document.getElementById('quiz-feedback').className = 'feedback-bar';

  const next = document.getElementById('quiz-next');
  next.style.display = 'none';

  const card = document.getElementById('q-card');
  card.innerHTML = `
    <div class="q-text">${q.text}</div>
    ${renderQuizInput(q)}
  `;
}

function renderQuizInput(q) {
  if (q.type === 'mc') {
    return `<div class="quiz-options">${
      q.options.map((opt, i) => `
        <button class="quiz-opt" data-idx="${i}" onclick="handleMC(${i})">
          <span class="quiz-opt-letter">${String.fromCharCode(65+i)}</span>
          <span>${opt}</span>
        </button>
      `).join('')
    }</div>`;
  }
  if (q.type === 'tf') {
    return `<div class="quiz-tf-row">
      <button class="quiz-tf-btn" onclick="handleTF(true)">✅ Verdadero</button>
      <button class="quiz-tf-btn" onclick="handleTF(false)">❌ Falso</button>
    </div>`;
  }
  if (q.type === 'fill') {
    return `<div class="quiz-fill-row">
      <input class="quiz-fill-input" id="quiz-fill" type="text" placeholder="Escribe tu respuesta..."
        onkeydown="if(event.key==='Enter') handleFill()">
      <button class="quiz-check-btn" onclick="handleFill()">✔ Verificar</button>
    </div>`;
  }
  return '';
}

function handleMC(chosen) {
  if (state.answered) return;
  state.answered = true;
  const q = state.questions[state.qIndex];
  const correct = chosen === q.answer;
  if (correct) state.score++;

  // Style options
  document.querySelectorAll('.quiz-opt').forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add('correct');
    else if (i === chosen && !correct) btn.classList.add('wrong');
  });

  showQuizFeedback(correct, q.explanation);
  document.getElementById('quiz-score').textContent = state.score;
}

function handleTF(val) {
  if (state.answered) return;
  state.answered = true;
  const q = state.questions[state.qIndex];
  const correct = val === q.answer;
  if (correct) state.score++;

  document.querySelectorAll('.quiz-tf-btn').forEach(btn => {
    btn.disabled = true;
    const isTrue = btn.textContent.includes('Verdadero');
    if (isTrue === q.answer) btn.classList.add('correct');
    else if (isTrue === val && !correct) btn.classList.add('wrong');
  });

  showQuizFeedback(correct, q.explanation);
  document.getElementById('quiz-score').textContent = state.score;
}

function handleFill() {
  if (state.answered) return;
  const inp = document.getElementById('quiz-fill');
  if (!inp) return;
  const val = inp.value.trim().toLowerCase();
  if (!val) return;

  state.answered = true;
  const q = state.questions[state.qIndex];
  const correct = val === q.answer.toLowerCase() || val.includes(q.answer.toLowerCase());
  if (correct) state.score++;

  inp.disabled = true;
  inp.classList.add(correct ? 'correct' : 'wrong');
  document.querySelector('.quiz-check-btn').disabled = true;

  showQuizFeedback(correct, q.explanation);
  document.getElementById('quiz-score').textContent = state.score;
}

function showQuizFeedback(correct, explanation) {
  const fb = document.getElementById('quiz-feedback');
  fb.className = 'feedback-bar show ' + (correct ? 'ok' : 'fail');
  fb.innerHTML = (correct ? '✅ ' : '❌ ') + explanation;
  document.getElementById('quiz-next').style.display = 'block';
}

function nextQuestion() {
  state.qIndex++;
  if (state.qIndex >= state.questions.length) {
    finishQuiz();
  } else {
    renderQuestion();
  }
}

function finishQuiz() {
  const total = state.questions.length;
  const correct = state.score;
  const pct = Math.round(correct / total * 100);

  // Save to history
  const session = {
    studentId: state.student.id,
    studentName: state.student.name,
    subjectId: state.subject.id,
    subjectLabel: state.subject.label,
    unitId: state.unit.id,
    unitTitle: state.unit.title,
    correct,
    total,
    pct,
    date: new Date().toISOString()
  };
  addSession(session);

  // Results screen
  const emoji = pct >= 90 ? '🏆' : pct >= 70 ? '🎉' : pct >= 50 ? '😊' : '💪';
  const msg = pct >= 90 ? '¡Excelente! ¡Estás listo para el examen!'
    : pct >= 70 ? '¡Muy bien! Sigue practicando para perfeccionar.'
    : pct >= 50 ? 'Buen intento. Repasa los temas y vuelve a intentarlo.'
    : '¡No te rindas! Estudia las notas y vuelve a intentarlo.';

  document.getElementById('res-emoji').textContent = emoji;
  document.getElementById('res-score').textContent = `${correct} / ${total}`;
  document.getElementById('res-msg').textContent = msg;
  document.getElementById('sk-listening').textContent = '—';
  document.getElementById('sk-speaking').textContent = '—';
  document.getElementById('sk-selection').textContent = `${pct}%`;

  document.getElementById('quiz-progress').style.width = '100%';
  showScreen('results');
}

function retryQuiz() {
  startQuiz();
}

// ── TRACKER ──────────────────────────────────────────────────
let trackerFilter = 'all';

function showTracker() {
  renderTracker();
  showScreen('tracker');
}

function renderTracker() {
  const history = loadHistory();
  const filtered = trackerFilter === 'all'
    ? history
    : history.filter(s => s.studentId === trackerFilter);

  // Summary
  const sessions = filtered.length;
  const best = sessions ? Math.max(...filtered.map(s => s.pct)) + '%' : '—';
  const avg = sessions ? Math.round(filtered.reduce((a, s) => a + s.pct, 0) / sessions) + '%' : '—';

  // Weak topics
  const unitMap = {};
  filtered.forEach(s => {
    const key = s.unitId;
    if (!unitMap[key]) unitMap[key] = { title: s.unitTitle, total: 0, pct: 0 };
    unitMap[key].total++;
    unitMap[key].pct += s.pct;
  });
  const weakUnit = Object.values(unitMap)
    .map(u => ({ ...u, avg: Math.round(u.pct / u.total) }))
    .filter(u => u.avg < 70)
    .sort((a, b) => a.avg - b.avg)[0];

  document.getElementById('t-sessions').textContent = sessions;
  document.getElementById('t-best').textContent = best;
  document.getElementById('t-avg').textContent = avg;
  document.getElementById('t-weak').textContent = weakUnit ? weakUnit.title : '—';

  // Filter buttons
  const filterWrap = document.getElementById('tracker-filters');
  filterWrap.innerHTML = `
    <button class="filter-btn ${trackerFilter === 'all' ? 'active' : ''}" onclick="setTrackerFilter('all')">Todos</button>
    ${STUDENTS.map(st => `
      <button class="filter-btn ${trackerFilter === st.id ? 'active' : ''}" onclick="setTrackerFilter('${st.id}')">
        ${st.avatar} ${st.name}
      </button>
    `).join('')}
  `;

  // Performance bars
  const perfWrap = document.getElementById('tracker-performance');
  if (Object.keys(unitMap).length === 0) {
    perfWrap.innerHTML = '<p style="color:var(--muted);text-align:center;padding:20px 0;">Sin datos aún.</p>';
  } else {
    perfWrap.innerHTML = Object.values(unitMap).map(u => {
      const avg = Math.round(u.pct / u.total);
      const color = avg >= 80 ? '#22c55e' : avg >= 50 ? '#eab308' : '#ef4444';
      return `
        <div class="perf-row">
          <span class="perf-label">${u.title}</span>
          <div class="perf-bg">
            <div class="perf-fill" style="width:${avg}%;background:${color}"></div>
          </div>
          <span class="perf-pct" style="color:${color}">${avg}%</span>
        </div>
      `;
    }).join('');
  }

  // Session table
  const tbody = document.getElementById('tracker-tbody');
  if (filtered.length === 0) {
    tbody.innerHTML = '<tr><td colspan="8" style="text-align:center;padding:20px;color:var(--muted)">Sin sesiones.</td></tr>';
    return;
  }
  tbody.innerHTML = filtered.map(s => {
    const d = new Date(s.date);
    const dateStr = d.toLocaleDateString('es-CR', { month: 'short', day: 'numeric' });
    const status = s.pct >= 80 ? '✅' : s.pct >= 50 ? '⚠️' : '❌';
    return `
      <tr>
        <td>${dateStr}</td>
        <td>${s.studentName}</td>
        <td>${s.unitTitle}</td>
        <td><strong>${s.correct}/${s.total}</strong></td>
        <td>—</td>
        <td>—</td>
        <td>${s.pct}%</td>
        <td>${status}</td>
      </tr>
    `;
  }).join('');
}

function setTrackerFilter(id) {
  trackerFilter = id;
  renderTracker();
}

// ── INIT ─────────────────────────────────────────────────────
(function init() {
  renderHome();
  showScreen('home');
})();
