// ============================================================
//  APP ENGINE — Navigation, Quiz, Tracker
// ============================================================

// ---- STATE ----
let state = {
  student: null,
  subject: null,
  unit: null,
  topic: null,
  questions: [],
  qIndex: 0,
  score: 0,
  answered: false,
  skillStats: {},
  trackerFilter: 'all',
};

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  mergeExtraContent();
  showScreen('screen-home');
  renderHome();
});

function mergeExtraContent() {
  if (!window.CONTENT_EXTRA) return;
  // Andrés English
  if (CONTENT_EXTRA.andres_english)
    CONTENT.andres.english = CONTENT_EXTRA.andres_english;
  // Fernando English
  if (CONTENT_EXTRA.fernando_english)
    CONTENT.fernando.english = CONTENT_EXTRA.fernando_english;
}

// ---- SCREEN ROUTER ----
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
}

// ============================================================
//  HOME — Student Picker
// ============================================================
function renderHome() {
  const grid = document.getElementById('home-student-grid');
  grid.innerHTML = STUDENTS.map(st => {
    const sessions = getSessions().filter(s => s.studentId === st.id);
    const avg = sessions.length
      ? Math.round(sessions.reduce((a,s) => a+s.pct, 0) / sessions.length)
      : null;
    return `
      <div class="student-card" data-student="${st.id}" onclick="selectStudent('${st.id}')">
        <span class="student-avatar">${st.avatar}</span>
        <div class="student-name">${st.name}</div>
        <div class="student-grade">${st.grade}</div>
        <div class="student-score-preview">
          ${avg !== null ? `⭐ Avg: ${avg}%` : '¡Empieza a jugar!'}
        </div>
      </div>`;
  }).join('');
}

// ============================================================
//  SUBJECT PICKER
// ============================================================
function selectStudent(studentId) {
  state.student = STUDENTS.find(s => s.id === studentId);
  document.getElementById('subj-avatar').textContent = state.student.avatar;
  document.getElementById('subj-name').textContent = state.student.name;
  document.getElementById('subj-grade').textContent = state.student.grade;
  renderSubjects();
  showScreen('screen-subjects');
}

function renderSubjects() {
  const st = state.student;
  const studentContent = CONTENT[st.id];
  const grid = document.getElementById('subj-grid');

  grid.innerHTML = SUBJECTS.map(subj => {
    const subjContent = studentContent[subj.id];
    const hasUnits = subjContent && subjContent.units && subjContent.units.length > 0;
    const hasActive = hasUnits && subjContent.units.some(u => u.status === 'active');

    // Get avg score for this subject
    const sessions = getSessions().filter(s => s.studentId === st.id && s.subjectId === subj.id);
    const avg = sessions.length
      ? Math.round(sessions.reduce((a,s) => a+s.pct,0)/sessions.length)
      : null;

    const statusLabel = hasActive ? `<span class="subj-status status-active">✅ Active</span>`
                                   : `<span class="subj-status status-coming">🔒 Coming soon</span>`;
    const locked = !hasActive ? 'locked' : '';
    const click = hasActive ? `onclick="selectSubject('${subj.id}')"` : '';

    return `
      <div class="subject-card ${locked}" ${click} style="border-top: 5px solid ${subj.color}">
        <span class="subj-icon">${subj.icon}</span>
        <div class="subj-name" style="color:${subj.color}">${subj.name}</div>
        ${statusLabel}
        ${avg !== null ? `<div style="font-size:12px;color:#5C6BC0;font-weight:700;margin-top:6px;">⭐ ${avg}%</div>` : ''}
      </div>`;
  }).join('');
}

// ============================================================
//  TOPIC LIST
// ============================================================
function selectSubject(subjectId) {
  state.subject = SUBJECTS.find(s => s.id === subjectId);
  const studentContent = CONTENT[state.student.id][subjectId];
  state.unit = studentContent.units[0]; // for now show first unit
  renderTopicList();
  showScreen('screen-topics');
}

function renderTopicList() {
  const st = state.student;
  const unit = state.unit;
  const subj = state.subject;

  document.getElementById('topics-unit-title').textContent = unit.title;
  document.getElementById('topics-unit-theme').textContent = '📌 ' + unit.theme;
  document.getElementById('topics-unit-eq').textContent = '❓ ' + unit.essentialQuestion;

  const list = document.getElementById('topic-list');
  list.innerHTML = unit.topics.map(topic => {
    const best = getTopicBest(st.id, subj.id, topic.id);
    let badge = '';
    if (best === null) badge = `<span class="t-badge badge-new">⭐ New</span>`;
    else if (best >= 80) badge = `<span class="t-badge badge-good">🏆 ${best}%</span>`;
    else if (best >= 60) badge = `<span class="t-badge badge-ok">👍 ${best}%</span>`;
    else badge = `<span class="t-badge badge-retry">🔄 ${best}%</span>`;

    const qCount = topic.questions ? topic.questions.length : 0;
    return `
      <div class="topic-row" onclick="selectTopic('${topic.id}')">
        <span class="t-icon">${topic.icon}</span>
        <div class="t-info">
          <div class="t-title">${topic.title}</div>
          <div class="t-subtitle">${qCount} questions</div>
        </div>
        ${badge}
        <span class="topic-arrow">›</span>
      </div>`;
  }).join('');
}

// ============================================================
//  STUDY VIEW
// ============================================================
function selectTopic(topicId) {
  state.topic = state.unit.topics.find(t => t.id === topicId);
  document.getElementById('study-title').textContent = state.topic.icon + ' ' + state.topic.title;
  document.getElementById('study-content').innerHTML = state.topic.content;
  showScreen('screen-study');
}

// ============================================================
//  QUIZ ENGINE
// ============================================================
function startQuiz() {
  const topic = state.topic;
  state.questions = shuffle([...topic.questions]);
  state.qIndex = 0;
  state.score = 0;
  state.answered = false;
  state.skillStats = { listening:{c:0,t:0}, speaking:{c:0,t:0}, selection:{c:0,t:0} };
  showScreen('screen-quiz');
  renderQuestion();
}

function renderQuestion() {
  const q = state.questions[state.qIndex];
  const total = state.questions.length;

  document.getElementById('quiz-score').textContent = state.score;
  document.getElementById('quiz-progress').style.width = (state.qIndex/total*100) + '%';
  document.getElementById('quiz-qnum').textContent = `Question ${state.qIndex+1} of ${total}`;
  document.getElementById('quiz-topic-label').textContent = state.topic.icon + ' ' + state.topic.title;

  const fb = document.getElementById('quiz-feedback');
  fb.className = 'feedback-bar';
  document.getElementById('quiz-next').className = 'next-btn';
  state.answered = false;

  const skillMap = { listening:'👂 Listening', speaking:'🗣️ Speaking', selection:'👆 Selection' };
  const tagClass = { listening:'tag-listening', speaking:'tag-speaking', selection:'tag-selection' };

  let inner = `
    <span class="skill-tag ${tagClass[q.skill]}">${skillMap[q.skill]}</span>
  `;

  if (q.type === 'picture') {
    // Big picture options for 1st grade
    inner += `<div class="q-text-big">${q.q}</div>
      <div class="pic-opts-grid">
        ${shuffle([...q.opts]).map(opt => `
          <button class="pic-opt" onclick="checkPicture('${escapeSingle(opt.l)}')" data-val="${escapeSingle(opt.l)}">
            <span class="po-emoji">${opt.e}</span>
            <span class="po-label">${opt.l}</span>
          </button>`).join('')}
      </div>`;

  } else if (q.type === 'tap') {
    // Tap the picture — pre-kinder
    inner += `<div class="q-text-big">${q.q}</div>
      <div class="tap-grid">
        ${shuffle([...q.opts]).map(opt => `
          <button class="tap-card" onclick="checkTap('${escapeSingle(opt.l)}')" data-val="${escapeSingle(opt.l)}">
            <span class="tc-emoji">${opt.e}</span>
            <span class="tc-label">${opt.l}</span>
          </button>`).join('')}
      </div>`;

  } else if (q.type === 'selection') {
    // Standard 4-option
    inner += `<div class="q-text">${q.q}</div>
      <div class="opts-grid">
        ${shuffle([...q.opts]).map(opt => `
          <button class="opt-btn" onclick="checkAnswer('${escapeSingle(opt)}')">${opt}</button>`).join('')}
      </div>`;

  } else if (q.type === 'fill') {
    inner += `<div class="q-text">${q.q}</div>
      ${q.skill === 'speaking' ? '<div class="speak-hint" style="background:#E8F5E9;border-radius:10px;padding:10px 14px;font-size:13px;font-weight:700;color:#2E7D32;margin-bottom:12px;">🗣️ Say your answer first, then type it!</div>' : ''}
      <div class="fill-row">
        <input class="fill-input" id="fill-input" type="text" placeholder="Type here..." autocomplete="off" />
        <button class="check-btn" onclick="checkFill()">✓</button>
      </div>`;
  }

  document.getElementById('q-card').innerHTML = inner;

  if (q.type === 'fill') {
    const inp = document.getElementById('fill-input');
    inp.addEventListener('keydown', e => { if(e.key==='Enter') checkFill(); });
    setTimeout(() => inp.focus(), 100);
  }
}

function checkAnswer(chosen) {
  if (state.answered) return;
  state.answered = true;
  const q = state.questions[state.qIndex];
  state.skillStats[q.skill].t++;
  const correct = chosen.toLowerCase().trim() === q.ans.toLowerCase().trim();
  document.querySelectorAll('.opt-btn').forEach(b => {
    b.disabled = true;
    if (b.textContent.toLowerCase().trim() === q.ans.toLowerCase().trim()) b.classList.add('correct');
  });
  if (!correct) {
    [...document.querySelectorAll('.opt-btn')].find(b => b.textContent.toLowerCase().trim() === chosen.toLowerCase().trim())?.classList.add('wrong');
  } else {
    state.score++;
    state.skillStats[q.skill].c++;
    spawnStars();
  }
  showFeedback(correct, q.ans);
}

function checkPicture(chosen) {
  if (state.answered) return;
  state.answered = true;
  const q = state.questions[state.qIndex];
  state.skillStats[q.skill].t++;
  const correct = chosen.toLowerCase().trim() === q.ans.toLowerCase().trim();
  document.querySelectorAll('.pic-opt').forEach(b => {
    b.disabled = true;
    if (b.dataset.val.toLowerCase().trim() === q.ans.toLowerCase().trim()) b.classList.add('correct');
  });
  if (!correct) {
    [...document.querySelectorAll('.pic-opt')].find(b => b.dataset.val.toLowerCase().trim() === chosen.toLowerCase().trim())?.classList.add('wrong');
  } else {
    state.score++;
    state.skillStats[q.skill].c++;
    spawnStars();
  }
  showFeedback(correct, q.ans);
}

function checkTap(chosen) {
  if (state.answered) return;
  state.answered = true;
  const q = state.questions[state.qIndex];
  state.skillStats[q.skill].t++;
  const correct = chosen.toLowerCase().trim() === q.ans.toLowerCase().trim();
  document.querySelectorAll('.tap-card').forEach(b => {
    b.disabled = true;
    if (b.dataset.val.toLowerCase().trim() === q.ans.toLowerCase().trim()) b.classList.add('correct');
  });
  if (!correct) {
    [...document.querySelectorAll('.tap-card')].find(b => b.dataset.val.toLowerCase().trim() === chosen.toLowerCase().trim())?.classList.add('wrong');
  } else {
    state.score++;
    state.skillStats[q.skill].c++;
    spawnStars(8);
  }
  showFeedback(correct, q.ans);
}

function checkFill() {
  const inp = document.getElementById('fill-input');
  if (!inp || state.answered) return;
  const val = inp.value.trim();
  if (!val) return;
  state.answered = true;
  const q = state.questions[state.qIndex];
  state.skillStats[q.skill].t++;
  const correct = val.toLowerCase() === q.ans.toLowerCase();
  inp.disabled = true;
  inp.style.borderColor = correct ? '#43A047' : '#E53935';
  inp.style.background = correct ? '#C8E6C9' : '#FFCDD2';
  if (correct) { state.score++; state.skillStats[q.skill].c++; spawnStars(); }
  showFeedback(correct, q.ans);
}

function showFeedback(correct, ans) {
  const fb = document.getElementById('quiz-feedback');
  if (correct) {
    fb.className = 'feedback-bar show ok';
    const msgs = ['✅ Amazing! 🌟', '✅ Fantastic! 🎉', '✅ Perfect! ⭐', '✅ Great job! 🏆'];
    fb.innerHTML = msgs[Math.floor(Math.random()*msgs.length)];
  } else {
    fb.className = 'feedback-bar show bad';
    fb.innerHTML = `❌ Not quite! The answer is: <strong>${ans}</strong>`;
  }
  document.getElementById('quiz-next').className = 'next-btn show';
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
  const pct = Math.round(state.score / total * 100);
  const st = state.student;
  const subj = state.subject;
  const topic = state.topic;

  // Save best
  setTopicBest(st.id, subj.id, topic.id, pct);

  // Record session
  const now = new Date();
  recordSession({
    date: now.toLocaleDateString('es-CR') + ' ' + now.toLocaleTimeString('es-CR',{hour:'2-digit',minute:'2-digit'}),
    studentId: st.id, studentName: st.name,
    subjectId: subj.id, subjectName: subj.name,
    topicId: topic.id, topicName: topic.title,
    score: state.score, total, pct,
    listening: {...state.skillStats.listening},
    speaking: {...state.skillStats.speaking},
    selection: {...state.skillStats.selection},
  });

  // Render results
  const emoji = pct >= 80 ? '🎉' : pct >= 60 ? '😊' : '💪';
  const msg = pct >= 80 ? '¡Excelente! You are a superstar! 🌟'
             : pct >= 60 ? 'Good job! Keep practicing! 📚'
             : 'Keep trying! You can do it! 💪';

  document.getElementById('res-emoji').textContent = emoji;
  document.getElementById('res-score').textContent = `${state.score} / ${total} (${pct}%)`;
  document.getElementById('res-msg').textContent = msg;

  const fmt = sk => {
    const s = state.skillStats[sk];
    return s.t > 0 ? `${s.c}/${s.t}` : '—';
  };
  document.getElementById('sk-listening').textContent = fmt('listening');
  document.getElementById('sk-speaking').textContent = fmt('speaking');
  document.getElementById('sk-selection').textContent = fmt('selection');

  if (pct >= 70) spawnStars(14);
  showScreen('screen-results');
}

function retryQuiz() { startQuiz(); }
function goToTopics() {
  renderTopicList();
  showScreen('screen-topics');
}

// ============================================================
//  TRACKER
// ============================================================
function showTracker() {
  state.trackerFilter = 'all';
  renderTracker();
  showScreen('screen-tracker');
}

function renderTracker() {
  const sessions = getSessions();
  const filter = state.trackerFilter;
  const filtered = filter === 'all' ? sessions : sessions.filter(s => s.studentId === filter);

  // Summary
  document.getElementById('t-sessions').textContent = filtered.length;
  const scores = filtered.map(s => s.pct);
  document.getElementById('t-best').textContent = scores.length ? Math.max(...scores) + '%' : '—';
  document.getElementById('t-avg').textContent = scores.length ? Math.round(scores.reduce((a,b)=>a+b,0)/scores.length) + '%' : '—';

  // Weak skill
  const wc = {listening:0, speaking:0, selection:0};
  filtered.forEach(s => {
    ['listening','speaking','selection'].forEach(sk => {
      if (s[sk] && s[sk].t > 0 && s[sk].c/s[sk].t < 0.6) wc[sk]++;
    });
  });
  const topWeak = Object.entries(wc).sort((a,b)=>b[1]-a[1]).filter(e=>e[1]>0).map(e=>e[0]);
  document.getElementById('t-weak').textContent = topWeak.length ? topWeak.slice(0,2).map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(', ') : 'None 🎉';

  // Filter buttons
  document.getElementById('tracker-filters').innerHTML = [
    {id:'all', label:'👨‍👩‍👦 All'},
    ...STUDENTS.map(s => ({id:s.id, label: s.avatar+' '+s.name}))
  ].map(f => `<button class="filter-btn ${filter===f.id?'active':''}" onclick="setFilter('${f.id}')">${f.label}</button>`).join('');

  // Per-student performance bars
  const perfWrap = document.getElementById('tracker-performance');
  const studentPerf = STUDENTS.map(st => {
    const sts = filtered.filter(s => s.studentId === st.id);
    if (sts.length === 0) return null;
    const avg = Math.round(sts.reduce((a,s)=>a+s.pct,0)/sts.length);
    return { st, avg };
  }).filter(Boolean);

  perfWrap.innerHTML = studentPerf.length === 0
    ? `<div class="empty-msg">No sessions yet for this filter.</div>`
    : studentPerf.map(({st, avg}) => {
        const color = avg>=70?'#43A047':avg>=50?'#F9A825':'#E53935';
        return `
          <div class="perf-bar-row">
            <span class="pbr-label">${st.avatar} ${st.name}</span>
            <div class="pbr-wrap"><div class="pbr-fill" style="width:${avg}%;background:${color}"></div></div>
            <span class="pbr-pct" style="color:${color}">${avg}%</span>
          </div>`;
      }).join('');

  // Session table
  const tbody = document.getElementById('tracker-tbody');
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="empty-msg">No sessions yet! Play some quizzes first 🎮</td></tr>`;
    return;
  }
  tbody.innerHTML = filtered.map(s => {
    const lPct = s.listening?.t > 0 ? Math.round(s.listening.c/s.listening.t*100)+'%' : '—';
    const spPct = s.speaking?.t > 0 ? Math.round(s.speaking.c/s.speaking.t*100)+'%' : '—';
    const sePct = s.selection?.t > 0 ? Math.round(s.selection.c/s.selection.t*100)+'%' : '—';
    const tag = s.pct >= 70 ? `<span class="tag-strong">✅ Strong</span>`
              : s.pct >= 50 ? `<span class="tag-ok">👍 OK</span>`
              : `<span class="tag-weak">⚠️ Review</span>`;
    const st = STUDENTS.find(st => st.id === s.studentId);
    return `<tr>
      <td>${s.date}</td>
      <td>${st?.avatar || ''} ${s.studentName}</td>
      <td>${s.subjectName}</td>
      <td><strong>${s.score}/${s.total} (${s.pct}%)</strong></td>
      <td>${lPct}</td><td>${spPct}</td><td>${sePct}</td>
      <td>${tag}</td>
    </tr>`;
  }).join('');
}

function setFilter(id) {
  state.trackerFilter = id;
  renderTracker();
}

function clearHistory() {
  if (!confirm('¿Borrar todo el progreso? This cannot be undone.')) return;
  localStorage.removeItem('school_progress');
  localStorage.removeItem('school_sessions');
  renderTracker();
  renderHome();
}

// ============================================================
//  NAV HELPERS
// ============================================================
function goHome() {
  renderHome();
  showScreen('screen-home');
}
function goSubjects() {
  renderSubjects();
  showScreen('screen-subjects');
}

// ============================================================
//  UTILITIES
// ============================================================
function shuffle(arr) {
  let a = [...arr];
  for (let i = a.length-1; i>0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function escapeSingle(s) {
  return String(s).replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

function spawnStars(count=5) {
  const burst = document.createElement('div');
  burst.className = 'star-burst';
  burst.style.cssText = `left:${Math.random()*70+10}%;top:${Math.random()*50+15}%;`;
  const emojis = ['⭐','🌟','✨','🎉','🏆'];
  for (let i=0; i<count; i++) {
    const s = document.createElement('span');
    s.className = 'star';
    s.textContent = emojis[Math.floor(Math.random()*emojis.length)];
    s.style.cssText = `left:${Math.random()*80-40}px;top:0;animation-delay:${i*0.08}s;`;
    burst.appendChild(s);
  }
  document.body.appendChild(burst);
  setTimeout(() => burst.remove(), 1600);
}
