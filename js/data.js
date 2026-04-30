// ============================================================
//  APP DATA — students, subjects, content, questions
// ============================================================

const STUDENTS = [
  { id: 'andres',  name: 'Andrés',  grade: '1st Grade',   gradeNum: 1, avatar: '🦁', color: '#FF8A65' },
  { id: 'fabian',  name: 'Fabián',  grade: '3rd Grade',   gradeNum: 3, avatar: '🐯', color: '#7C4DFF' },
  { id: 'fernando',name: 'Fernando',grade: 'Pre-Kinder',  gradeNum: 0, avatar: '🐸', color: '#26A69A' },
];

const SUBJECTS = [
  { id: 'english',  name: 'English',          icon: '🇺🇸', color: '#1565C0' },
  { id: 'espanol',  name: 'Español',          icon: '📖', color: '#C62828' },
  { id: 'math',     name: 'Matemáticas',      icon: '🔢', color: '#2E7D32' },
  { id: 'sociales', name: 'Estudios Sociales',icon: '🌎', color: '#E65100' },
  { id: 'ciencias', name: 'Ciencias',         icon: '🔬', color: '#6A1B9A' },
];

// ============================================================
//  CONTENT — Fabian, 3rd Grade, English, Unit 1
// ============================================================

const CONTENT = {
  fabian: {
    english: {
      units: [
        {
          id: 'unit1',
          title: 'Unit 1 — My Family To-Do List',
          theme: 'Family Chores',
          essentialQuestion: 'How do you help your family every day?',
          status: 'active',
          topics: [
            {
              id: 'chores-vocab',
              title: 'Household Chores Vocabulary',
              icon: '🏠',
              content: `
                <h3>Household Chores</h3>
                <p>Learn the words for chores we do at home:</p>
                <div class="vocab-grid">
                  <div class="vocab-item">🛏️ <strong>Make the bed</strong></div>
                  <div class="vocab-item">🧹 <strong>Sweep</strong> — sweep the floor</div>
                  <div class="vocab-item">🪣 <strong>Mop</strong> — mop the floor</div>
                  <div class="vocab-item">🍽️ <strong>Wash</strong> — wash the dishes</div>
                  <div class="vocab-item">👔 <strong>Iron</strong> — iron the clothes</div>
                  <div class="vocab-item">🍳 <strong>Cook</strong> — cook dinner</div>
                  <div class="vocab-item">🧺 <strong>Do the laundry</strong></div>
                  <div class="vocab-item">🧹 <strong>Tidy up</strong></div>
                  <div class="vocab-item">🪟 <strong>Clean</strong> — clean the windows</div>
                  <div class="vocab-item">📦 <strong>Pick up</strong> — pick up the toys</div>
                  <div class="vocab-item">🌫️ <strong>Dust</strong> — dust the furniture</div>
                </div>
              `,
              questions: [
                { type:'selection', skill:'selection', q:'Which chore uses a broom? 🧹', opts:['Wash the dishes','Sweep the floor','Cook dinner','Do the laundry'], ans:'Sweep the floor' },
                { type:'selection', skill:'selection', q:'You use water and soap on the plates. You ___:', opts:['iron','cook','wash the dishes','sweep'], ans:'wash the dishes' },
                { type:'fill', skill:'speaking', q:'You fix the sheets on your bed. You ___ the bed.', ans:'make' },
                { type:'selection', skill:'selection', q:'Which chore uses a mop? 🪣', opts:['Cook','Iron','Mop the floor','Tidy up'], ans:'Mop the floor' },
                { type:'selection', skill:'selection', q:'You put your toys away. You ___:', opts:['sweep','pick up the toys','cook','iron'], ans:'pick up the toys' },
                { type:'fill', skill:'speaking', q:'You heat the stove and prepare food. You ___ dinner.', ans:'cook' },
                { type:'selection', skill:'listening', q:'Which chore involves clothes and a hot tool?', opts:['Wash the dishes','Iron the clothes','Sweep the floor','Do the laundry'], ans:'Iron the clothes' },
                { type:'selection', skill:'selection', q:'You put clothes in the washing machine. You ___:', opts:['cook','tidy up','do the laundry','dust'], ans:'do the laundry' },
              ]
            },
            {
              id: 'parts-house',
              title: 'Parts of the House',
              icon: '🏡',
              content: `
                <h3>Parts of the House</h3>
                <p>Every room has a name. Learn them all!</p>
                <div class="vocab-grid">
                  <div class="vocab-item">🛏️ <strong>Bedroom</strong> — where you sleep</div>
                  <div class="vocab-item">🚿 <strong>Bathroom</strong> — where you shower</div>
                  <div class="vocab-item">🍳 <strong>Kitchen</strong> — where you cook</div>
                  <div class="vocab-item">🛋️ <strong>Living room</strong> — where you relax</div>
                  <div class="vocab-item">🍽️ <strong>Dining room</strong> — where you eat</div>
                  <div class="vocab-item">🚗 <strong>Garage</strong> — where the car stays</div>
                  <div class="vocab-item">👕 <strong>Laundry room</strong> — where you wash clothes</div>
                </div>
              `,
              questions: [
                { type:'selection', skill:'selection', q:'Where do you sleep? 🛏️', opts:['Kitchen','Bathroom','Bedroom','Garage'], ans:'Bedroom' },
                { type:'selection', skill:'selection', q:'Where do you cook? 🍳', opts:['Bedroom','Kitchen','Living room','Garage'], ans:'Kitchen' },
                { type:'fill', skill:'speaking', q:'You watch TV on the sofa. This is the ___ room.', ans:'living' },
                { type:'selection', skill:'listening', q:'Where does the car usually go?', opts:['Bedroom','Dining room','Bathroom','Garage'], ans:'Garage' },
                { type:'selection', skill:'selection', q:'Where do you eat dinner with your family? 🍽️', opts:['Laundry room','Dining room','Bedroom','Garage'], ans:'Dining room' },
                { type:'fill', skill:'speaking', q:'You take a shower in the ___.', ans:'bathroom' },
              ]
            },
            {
              id: 'household-items',
              title: 'Household Items',
              icon: '🪑',
              content: `
                <h3>Household Items</h3>
                <p>Things we find around the house:</p>
                <div class="vocab-grid">
                  <div class="vocab-item">🪑 <strong>Chair</strong></div>
                  <div class="vocab-item">📺 <strong>Television</strong></div>
                  <div class="vocab-item">🛋️ <strong>Sofa</strong></div>
                  <div class="vocab-item">🪞 <strong>Mirror</strong></div>
                  <div class="vocab-item">💡 <strong>Lamp / Lights</strong></div>
                  <div class="vocab-item">🛁 <strong>Bathtub</strong></div>
                  <div class="vocab-item">❄️ <strong>Refrigerator</strong></div>
                  <div class="vocab-item">🔲 <strong>Window</strong></div>
                  <div class="vocab-item">📚 <strong>Bookcase</strong></div>
                  <div class="vocab-item">🛏️ <strong>Bed</strong></div>
                  <div class="vocab-item">🍳 <strong>Stove</strong></div>
                  <div class="vocab-item">📡 <strong>Microwave oven</strong></div>
                </div>
              `,
              questions: [
                { type:'selection', skill:'selection', q:'You keep food cold in the ___:', opts:['Stove','Refrigerator','Sofa','Lamp'], ans:'Refrigerator' },
                { type:'selection', skill:'selection', q:'You sit on the ___ to watch TV:', opts:['Bed','Bookcase','Sofa','Mirror'], ans:'Sofa' },
                { type:'fill', skill:'speaking', q:'You look at your face in a ___.', ans:'mirror' },
                { type:'selection', skill:'listening', q:'Where do you put your books? 📚', opts:['Bathtub','Bookcase','Window','Stove'], ans:'Bookcase' },
                { type:'selection', skill:'selection', q:'You heat food quickly in the ___:', opts:['Refrigerator','Bathtub','Microwave oven','Lamp'], ans:'Microwave oven' },
                { type:'fill', skill:'speaking', q:'You sleep in a ___.', ans:'bed' },
              ]
            },
            {
              id: 'question-words',
              title: 'Question Words',
              icon: '❓',
              content: `
                <h3>Question Words</h3>
                <p>Use these words to ask questions:</p>
                <div class="vocab-grid">
                  <div class="vocab-item">👤 <strong>Who</strong> — asks about a person<br><em>"Who is your grandmother?"</em></div>
                  <div class="vocab-item">📦 <strong>What</strong> — asks about a thing<br><em>"What is the time?"</em></div>
                  <div class="vocab-item">📍 <strong>Where</strong> — asks about a place<br><em>"Where is my watch?"</em></div>
                  <div class="vocab-item">⏰ <strong>When</strong> — asks about time<br><em>"When is your birthday?"</em></div>
                  <div class="vocab-item">❓ <strong>Why</strong> — asks for a reason<br><em>"Why is the room messed up?"</em></div>
                  <div class="vocab-item">🔢 <strong>How</strong> — asks about manner/state<br><em>"How is Bingo the dog?"</em></div>
                </div>
              `,
              questions: [
                { type:'selection', skill:'selection', q:'"___ is your grandmother?" (asking about a person)', opts:['What','Where','Who','When'], ans:'Who' },
                { type:'selection', skill:'selection', q:'"___ is the time of the meeting?" (asking about a thing)', opts:['Who','Where','When','What'], ans:'What' },
                { type:'selection', skill:'selection', q:'"___ is my watch?" (asking about a place)', opts:['Why','When','Where','How'], ans:'Where' },
                { type:'selection', skill:'listening', q:'"___ is your birthday?" (asking about time)', opts:['Who','Where','What','When'], ans:'When' },
                { type:'selection', skill:'selection', q:'"___ is the room messed up?" (asking for reason)', opts:['When','How','Why','What'], ans:'Why' },
                { type:'fill', skill:'speaking', q:'"___ is Bingo the dog?" — asking about his state.', ans:'how' },
                { type:'selection', skill:'selection', q:'"___ mops the floor?" — Felipe mops the floor.', opts:['What','When','Who','Where'], ans:'Who' },
              ]
            },
            {
              id: 'sentences-chores',
              title: 'Sentences with Chores',
              icon: '✏️',
              content: `
                <h3>Sentences with Family Chores</h3>
                <p><strong>Third person (he/she/my mom...):</strong> add -s or -es to the verb</p>
                <div class="rule-box">
                  <p>✅ My father <strong>washes</strong> the dishes.</p>
                  <p>✅ He <strong>makes</strong> the bed.</p>
                  <p>✅ My brother <strong>sweeps</strong> the floor.</p>
                  <p>✅ My mother <strong>mops</strong> the floor.</p>
                  <p>✅ My grandma <strong>cooks</strong> dinner.</p>
                </div>
                <p><strong>First person (I):</strong> use the base verb (no -s)</p>
                <div class="rule-box">
                  <p>✅ I <strong>wash</strong> the dishes.</p>
                  <p>✅ I <strong>make</strong> my bed.</p>
                  <p>✅ I <strong>sweep</strong> the floor.</p>
                </div>
              `,
              questions: [
                { type:'selection', skill:'selection', q:'My father ___ the dishes.', opts:['wash','washes','washe','washing'], ans:'washes' },
                { type:'selection', skill:'selection', q:'I ___ my bed every morning.', opts:['makes','make','making','maked'], ans:'make' },
                { type:'fill', skill:'speaking', q:'My brother ___ the floor. (sweep)', ans:'sweeps' },
                { type:'selection', skill:'selection', q:'My mother ___ the floor.', opts:['mop','mops','mopping','mopped'], ans:'mops' },
                { type:'selection', skill:'selection', q:'I ___ the dishes.', opts:['washes','washe','wash','washed'], ans:'wash' },
                { type:'fill', skill:'speaking', q:'My grandma ___ dinner. (cook)', ans:'cooks' },
                { type:'selection', skill:'listening', q:'Which sentence is correct?', opts:['He sweep the floor.','He sweeps the floor.','He sweeping the floor.','He sweeep the floor.'], ans:'He sweeps the floor.' },
                { type:'selection', skill:'selection', q:'I ___ the floor. (mop)', opts:['mops','mopping','mop','mopped'], ans:'mop' },
              ]
            },
            {
              id: 'likes-dislikes',
              title: 'Likes, Dislikes & "but"',
              icon: '👍',
              content: `
                <h3>Household Chores and Preferences</h3>
                <p>How to say what you like and don't like:</p>
                <div class="rule-box">
                  <p>✅ I <strong>like</strong> to sweep the floor.</p>
                  <p>✅ I <strong>don't like</strong> to mop.</p>
                  <p>✅ My mom <strong>likes</strong> to sweep the floor.</p>
                  <p>✅ My father <strong>doesn't like</strong> to mop.</p>
                </div>
                <p><strong>Discourse Marker: "but"</strong> — joins two opposite ideas</p>
                <div class="rule-box">
                  <p>✅ I like to sweep <strong>but</strong> I don't like to mop.</p>
                  <p>✅ My mother likes to sweep <strong>but</strong> she doesn't like to mop.</p>
                </div>
              `,
              questions: [
                { type:'selection', skill:'selection', q:'I ___ to cook. (I enjoy it!)', opts:["don't like","doesn't like","like","likes"], ans:'like' },
                { type:'selection', skill:'selection', q:'My mom ___ to mop. (she enjoys it)', opts:["like","don't like","doesn't like","likes"], ans:'likes' },
                { type:'fill', skill:'speaking', q:'I like to sweep ___ I don\'t like to mop.', ans:'but' },
                { type:'selection', skill:'selection', q:'My father ___ like to iron. (he hates it)', opts:["like","doesn't","don't","likes"], ans:"doesn't" },
                { type:'selection', skill:'listening', q:'Which sentence uses "but" correctly?', opts:['I like cook but mop.','I like to cook but I don\'t like to mop.','I like cooking but mop not.','I likes to cook but I doesn\'t like mop.'], ans:"I like to cook but I don't like to mop." },
                { type:'selection', skill:'selection', q:'She ___ to do the laundry. (she loves it)', opts:["don't like","doesn't like","like","likes"], ans:'likes' },
                { type:'fill', skill:'speaking', q:'My brother ___ like to sweep. (he hates it, he = doesn\'t)', ans:"doesn't" },
              ]
            },
            {
              id: 'frequency-adverbs',
              title: 'Frequency Adverbs',
              icon: '🔄',
              content: `
                <h3>Frequency Adverbs</h3>
                <p>These words tell us <em>how often</em> someone does something:</p>
                <div class="rule-box">
                  <p>✅ <strong>Always</strong> — 100% of the time<br><em>I always pick up the toys.</em></p>
                  <p>✅ <strong>Sometimes</strong> — some of the time<br><em>My brother sometimes cleans the windows.</em></p>
                  <p>✅ <strong>Never</strong> — 0% of the time<br><em>My brother never cooks the dinner.</em></p>
                </div>
                <p><strong>Oral Exam tip:</strong> Use always, sometimes, never with chores!</p>
                <div class="rule-box">
                  <p>Emma <strong>always</strong> cleans her bedroom.</p>
                  <p>Emma's dad <strong>never</strong> mops the floor.</p>
                  <p>Emma's brother <strong>sometimes</strong> cleans the windows.</p>
                </div>
              `,
              questions: [
                { type:'selection', skill:'selection', q:'Emma ___ cleans her bedroom. (every day, 100%)', opts:['never','sometimes','always','usually'], ans:'always' },
                { type:'selection', skill:'selection', q:'Emma\'s dad ___ mops the floor. (0% — he hates it)', opts:['always','sometimes','never','usually'], ans:'never' },
                { type:'fill', skill:'speaking', q:'Emma\'s brother ___ cleans the windows. (not always, not never)', ans:'sometimes' },
                { type:'selection', skill:'listening', q:'Which sentence uses a frequency adverb correctly?', opts:['I always to sweep.','I sweep always.','I always sweep the floor.','Always I sweep.'], ans:'I always sweep the floor.' },
                { type:'selection', skill:'selection', q:'My father ___ washes the dishes every day.', opts:['never','sometimes','always','not'], ans:'always' },
                { type:'fill', skill:'speaking', q:'My brother ___ cooks dinner. (he never does it)', ans:'never' },
                { type:'selection', skill:'selection', q:'"___ I iron my clothes for school." (Emma does this every Sunday)', opts:['Never','Sometimes','Always','Usually'], ans:'Always' },
              ]
            },
            {
              id: 'oral-exam-prep',
              title: '🎤 Oral Exam Preparation',
              icon: '🎤',
              content: `
                <h3>Oral Exam — What You Must Do</h3>
                <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #43A047">
                  <p><strong>Part 1:</strong> 3 sentences — what 3 family members do</p>
                  <p><em>My mom mops the floor. My dad sweeps the floor. I wash the dishes.</em></p>
                </div>
                <div class="rule-box" style="background:#E3F2FD;border-left:4px solid #1565C0">
                  <p><strong>Part 2:</strong> 3 preference sentences with "but"</p>
                  <p><em>I like to cook but I don't like to mop.</em></p>
                  <p><em>My mom likes to sweep but she doesn't like to iron.</em></p>
                </div>
                <div class="rule-box" style="background:#FFF3E0;border-left:4px solid #E65100">
                  <p><strong>Part 3:</strong> 3 sentences with always / sometimes / never</p>
                  <p><em>I always pick up the toys.</em></p>
                  <p><em>My father always washes the dishes.</em></p>
                  <p><em>My brother never cooks dinner.</em></p>
                </div>
                <p>📌 You may bring a poster with <strong>pictures only</strong> — no written words!</p>
                <p>📌 You must use <strong>11 household chores</strong> total.</p>
              `,
              questions: [
                { type:'selection', skill:'selection', q:'Part 1: Which sentence is correct for the oral exam?', opts:['My mom always like to mop.','My mom mops the floor.','My mom mopping the floor.','My mom mop the floor.'], ans:'My mom mops the floor.' },
                { type:'selection', skill:'selection', q:'Part 2: Which preference sentence uses "but" correctly?', opts:['I like cook but not mop.','I like to cook but I don\'t like to mop.','I likes to cook but doesn\'t like mop.','I like cooking but mop no.'], ans:"I like to cook but I don't like to mop." },
                { type:'fill', skill:'speaking', q:'Part 3: I ___ pick up the toys. (always — fill in)', ans:'always' },
                { type:'selection', skill:'listening', q:'Your sister does the laundry every single day. Say:', opts:['My sister sometimes does the laundry.','My sister never does the laundry.','My sister always does the laundry.','My sister do the laundry always.'], ans:'My sister always does the laundry.' },
                { type:'selection', skill:'selection', q:'In the oral exam, can you write words on your poster?', opts:['Yes, anything','Yes, only chore names','No, pictures only','Yes, one word each'], ans:'No, pictures only' },
                { type:'fill', skill:'speaking', q:'My brother ___ cooks the dinner. (never)', ans:'never' },
                { type:'selection', skill:'selection', q:'How many chores must you use in the oral exam?', opts:['5','8','10','11'], ans:'11' },
              ]
            },
            {
              id: 'word-families',
              title: 'Word Family: -an',
              icon: '🔤',
              content: `
                <h3>Meet the -an Family</h3>
                <p>Words that rhyme with <strong>-an</strong>:</p>
                <div class="vocab-grid">
                  <div class="vocab-item">🧑 <strong>man</strong> — h + an</div>
                  <div class="vocab-item">🚐 <strong>van</strong> — v + an</div>
                  <div class="vocab-item">🌬️ <strong>fan</strong> — f + an</div>
                  <div class="vocab-item">🍳 <strong>pan</strong> — p + an</div>
                  <div class="vocab-item">🥫 <strong>can</strong> — c + an</div>
                  <div class="vocab-item">🏃 <strong>ran</strong> — r + an</div>
                </div>
                <p>They all end in <strong>-an</strong> and rhyme!</p>
              `,
              questions: [
                { type:'selection', skill:'selection', q:'You cook eggs in a ___:', opts:['can','van','pan','fan'], ans:'pan' },
                { type:'selection', skill:'selection', q:'A vehicle like a bus but smaller is a ___:', opts:['man','fan','can','van'], ans:'van' },
                { type:'fill', skill:'speaking', q:'It blows air to cool you down. It\'s a ___.', ans:'fan' },
                { type:'selection', skill:'listening', q:'Which word belongs to the -an family?', opts:['bin','sun','man','pen'], ans:'man' },
                { type:'selection', skill:'selection', q:'You open a ___ to eat beans:', opts:['van','pan','ran','can'], ans:'can' },
                { type:'fill', skill:'speaking', q:'He ___ very fast in the race. (run, past)', ans:'ran' },
              ]
            },
          ]
        }
      ]
    },
    espanol:   { units: [] },
    math:      { units: [] },
    sociales:  { units: [] },
    ciencias:  { units: [] },
  },
  andres: {
    english:  { units: [] },
    espanol:  { units: [] },
    math:     { units: [] },
    sociales: { units: [] },
    ciencias: { units: [] },
  },
  fernando: {
    english:  { units: [] },
    espanol:  { units: [] },
    math:     { units: [] },
    sociales: { units: [] },
    ciencias: { units: [] },
  },
};

// ============================================================
//  PROGRESS — saved in localStorage
// ============================================================

function getProgress() {
  try { return JSON.parse(localStorage.getItem('school_progress') || '{}'); } catch { return {}; }
}
function saveProgress(p) {
  localStorage.setItem('school_progress', JSON.stringify(p));
}
function getSessions() {
  try { return JSON.parse(localStorage.getItem('school_sessions') || '[]'); } catch { return []; }
}
function saveSessions(s) {
  localStorage.setItem('school_sessions', JSON.stringify(s));
}
function recordSession(session) {
  const sessions = getSessions();
  sessions.unshift(session);
  if (sessions.length > 200) sessions.pop();
  saveSessions(sessions);
}
function getTopicBest(studentId, subjectId, topicId) {
  const p = getProgress();
  return p?.[studentId]?.[subjectId]?.[topicId] ?? null;
}
function setTopicBest(studentId, subjectId, topicId, pct) {
  const p = getProgress();
  if (!p[studentId]) p[studentId] = {};
  if (!p[studentId][subjectId]) p[studentId][subjectId] = {};
  const current = p[studentId][subjectId][topicId] ?? 0;
  p[studentId][subjectId][topicId] = Math.max(current, pct);
  saveProgress(p);
}
