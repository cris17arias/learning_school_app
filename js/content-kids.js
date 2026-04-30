// ============================================================
//  CONTENT — Andrés (1st Grade) & Fernando (Pre-Kinder)
//  Picture-based, minimal reading, big visuals
// ============================================================

// Add to CONTENT object after data.js loads
window.CONTENT_EXTRA = {

  // ----------------------------------------------------------
  //  ANDRÉS — 1st Grade English (from notebook images)
  // ----------------------------------------------------------
  andres_english: {
    units: [
      {
        id: 'unit1',
        title: 'Unit 1 — All About Me',
        theme: 'Saying Hello! Saying Goodbye!',
        essentialQuestion: 'How do I say hello and goodbye?',
        status: 'active',
        topics: [
          {
            id: 'greetings',
            title: 'Greetings',
            icon: '👋',
            mode: 'picture', // triggers picture quiz
            content: `
              <h3>Greetings! 👋</h3>
              <div class="vocab-grid">
                <div class="vocab-item" style="text-align:center;font-size:18px">👋 <strong>Hi!</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:18px">👋 <strong>Hello!</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:18px">☀️ <strong>Good morning</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:18px">🌤️ <strong>Good afternoon</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:18px">🌙 <strong>Good evening</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:18px">😊 <strong>I'm good!</strong></div>
              </div>
            `,
            questions: [
              { type:'picture', skill:'selection', q:'It is morning! ☀️ What do you say?', opts:[{e:'☀️',l:'Good morning'},{e:'🌙',l:'Good evening'},{e:'🌤️',l:'Good afternoon'},{e:'👋',l:'Goodbye'}], ans:'Good morning' },
              { type:'picture', skill:'selection', q:'You see your friend! 😊 Say:', opts:[{e:'👋',l:'Hi!'},{e:'🌙',l:'Good night'},{e:'😢',l:'I\'m sad'},{e:'👋',l:'Goodbye'}], ans:'Hi!' },
              { type:'picture', skill:'selection', q:'The moon is out! 🌙 You say:', opts:[{e:'☀️',l:'Good morning'},{e:'🌙',l:'Good evening'},{e:'🌤️',l:'Good afternoon'},{e:'👋',l:'Hello'}], ans:'Good evening' },
              { type:'picture', skill:'selection', q:'Your teacher asks "How are you?" You say:', opts:[{e:'😊',l:"I'm good!"},{e:'😢',l:"I'm sad"},{e:'👋',l:'Goodbye'},{e:'🌙',l:'Good night'}], ans:"I'm good!" },
              { type:'picture', skill:'selection', q:'It is afternoon ☀️🌤️. You say:', opts:[{e:'🌙',l:'Good evening'},{e:'☀️',l:'Good morning'},{e:'🌤️',l:'Good afternoon'},{e:'👋',l:'Hi'}], ans:'Good afternoon' },
            ]
          },
          {
            id: 'leavetakings',
            title: 'Leave-Takings',
            icon: '👋🏾',
            mode: 'picture',
            content: `
              <h3>Say Goodbye! 👋🏾</h3>
              <div class="vocab-grid">
                <div class="vocab-item" style="text-align:center;font-size:18px">👋 <strong>Bye!</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:18px">🚌 <strong>Goodbye!</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:18px">🔜 <strong>See you!</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:18px">⏰ <strong>See you later!</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:18px">🌟 <strong>Have a nice day!</strong></div>
              </div>
            `,
            questions: [
              { type:'picture', skill:'selection', q:'School is over! 🚌 You say:', opts:[{e:'🚌',l:'Goodbye!'},{e:'☀️',l:'Good morning'},{e:'👋',l:'Hello'},{e:'😊',l:"I'm good"}], ans:'Goodbye!' },
              { type:'picture', skill:'selection', q:'You will see your friend tomorrow. Say:', opts:[{e:'🌙',l:'Good night'},{e:'🔜',l:'See you later!'},{e:'☀️',l:'Good morning'},{e:'👋',l:'Hi!'}], ans:'See you later!' },
              { type:'picture', skill:'selection', q:'Your teacher says — 🌟:', opts:[{e:'🌟',l:'Have a nice day!'},{e:'👋',l:'Hi!'},{e:'😢',l:"I'm sad"},{e:'🌙',l:'Good evening'}], ans:'Have a nice day!' },
              { type:'picture', skill:'selection', q:'Which one means goodbye?', opts:[{e:'☀️',l:'Good morning'},{e:'👋',l:'Bye!'},{e:'😊',l:"I'm good"},{e:'🌤️',l:'Good afternoon'}], ans:'Bye!' },
            ]
          },
          {
            id: 'aboutme',
            title: 'All About Me',
            icon: '🙋',
            mode: 'picture',
            content: `
              <h3>All About Me! 🙋</h3>
              <div class="vocab-grid">
                <div class="vocab-item" style="font-size:16px">📛 <strong>My name is Andrés</strong></div>
                <div class="vocab-item" style="font-size:16px">🎂 <strong>I'm 6 years old</strong></div>
                <div class="vocab-item" style="font-size:16px">🎒 <strong>Yes, I am a student</strong></div>
                <div class="vocab-item" style="font-size:16px">✏️ <strong>I'm in first grade</strong></div>
                <div class="vocab-item" style="font-size:16px">😊 <strong>I'm good</strong></div>
              </div>
            `,
            questions: [
              { type:'picture', skill:'selection', q:'"How old are you?" 🎂 You say:', opts:[{e:'6️⃣',l:'I\'m 6 years old'},{e:'1️⃣',l:'I\'m 1 year old'},{e:'🔟',l:'I\'m 10 years old'},{e:'8️⃣',l:'I\'m 8 years old'}], ans:"I'm 6 years old" },
              { type:'picture', skill:'selection', q:'"Are you a student?" 🎒 You say:', opts:[{e:'✅',l:'Yes, I am'},{e:'❌',l:'No, I\'m not'},{e:'🤷',l:'I don\'t know'},{e:'😴',l:'I\'m tired'}], ans:'Yes, I am' },
              { type:'picture', skill:'selection', q:'"What is your name?" You say:', opts:[{e:'📛',l:'My name is Andrés'},{e:'🌍',l:"I'm from Costa Rica"},{e:'😊',l:"I'm good"},{e:'🎒',l:'Yes, I am'}], ans:'My name is Andrés' },
              { type:'picture', skill:'selection', q:'"How are you?" You answer:', opts:[{e:'😊',l:"I'm good"},{e:'🚌',l:'Goodbye'},{e:'☀️',l:'Good morning'},{e:'📛',l:'My name is Andrés'}], ans:"I'm good" },
            ]
          },
          {
            id: 'politeness',
            title: 'Expressions of Politeness',
            icon: '🤝',
            mode: 'picture',
            content: `
              <h3>Be Polite! 🤝</h3>
              <div class="vocab-grid">
                <div class="vocab-item" style="text-align:center;font-size:16px">🙏 <strong>Thank you!</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:16px">😊 <strong>You're welcome!</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:16px">🙇 <strong>Excuse me!</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:16px">🙏 <strong>Pardon me!</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:16px">🤝 <strong>Nice to meet you!</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:16px">😊 <strong>Nice to meet you, too!</strong></div>
              </div>
            `,
            questions: [
              { type:'picture', skill:'selection', q:'Someone gives you a gift 🎁. You say:', opts:[{e:'🙏',l:'Thank you!'},{e:'👋',l:'Bye!'},{e:'😢',l:"I'm sad"},{e:'🌙',l:'Good evening'}], ans:'Thank you!' },
              { type:'picture', skill:'selection', q:'You bump into someone. You say:', opts:[{e:'🙏',l:'Excuse me!'},{e:'🎉',l:'Good morning'},{e:'😊',l:"I'm good"},{e:'👋',l:'Hello'}], ans:'Excuse me!' },
              { type:'picture', skill:'selection', q:'Someone says "Thank you!" You reply:', opts:[{e:'😊',l:"You're welcome!"},{e:'🚌',l:'Goodbye'},{e:'👋',l:'Hi'},{e:'😢',l:"I'm sad"}], ans:"You're welcome!" },
              { type:'picture', skill:'selection', q:'You meet a new friend 🤝. You say:', opts:[{e:'🤝',l:'Nice to meet you!'},{e:'☀️',l:'Good morning'},{e:'👋',l:'Bye!'},{e:'🙏',l:'Pardon me'}], ans:'Nice to meet you!' },
            ]
          },
          {
            id: 'numbers',
            title: 'Numbers 1–10',
            icon: '🔢',
            mode: 'picture',
            content: `
              <h3>Numbers! 🔢</h3>
              <div class="vocab-grid">
                <div class="vocab-item" style="text-align:center;font-size:20px">1️⃣ <strong>one</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:20px">2️⃣ <strong>two</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:20px">3️⃣ <strong>three</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:20px">4️⃣ <strong>four</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:20px">5️⃣ <strong>five</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:20px">6️⃣ <strong>six</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:20px">7️⃣ <strong>seven</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:20px">8️⃣ <strong>eight</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:20px">9️⃣ <strong>nine</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:20px">🔟 <strong>ten</strong></div>
              </div>
            `,
            questions: [
              { type:'picture', skill:'selection', q:'🍎🍎🍎 How many apples?', opts:[{e:'2️⃣',l:'two'},{e:'3️⃣',l:'three'},{e:'4️⃣',l:'four'},{e:'1️⃣',l:'one'}], ans:'three' },
              { type:'picture', skill:'selection', q:'⭐⭐⭐⭐⭐ How many stars?', opts:[{e:'4️⃣',l:'four'},{e:'6️⃣',l:'six'},{e:'5️⃣',l:'five'},{e:'3️⃣',l:'three'}], ans:'five' },
              { type:'picture', skill:'selection', q:'🐸🐸 How many frogs?', opts:[{e:'1️⃣',l:'one'},{e:'2️⃣',l:'two'},{e:'3️⃣',l:'three'},{e:'4️⃣',l:'four'}], ans:'two' },
              { type:'picture', skill:'selection', q:'🎈🎈🎈🎈🎈🎈🎈 How many balloons?', opts:[{e:'5️⃣',l:'five'},{e:'6️⃣',l:'six'},{e:'7️⃣',l:'seven'},{e:'8️⃣',l:'eight'}], ans:'seven' },
              { type:'picture', skill:'selection', q:'🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 How many?', opts:[{e:'8️⃣',l:'eight'},{e:'9️⃣',l:'nine'},{e:'🔟',l:'ten'},{e:'7️⃣',l:'seven'}], ans:'ten' },
              { type:'picture', skill:'selection', q:'Which number is 8️⃣?', opts:[{e:'8️⃣',l:'eight'},{e:'6️⃣',l:'six'},{e:'9️⃣',l:'nine'},{e:'7️⃣',l:'seven'}], ans:'eight' },
            ]
          },
          {
            id: 'feelings',
            title: 'My Feelings',
            icon: '😊',
            mode: 'picture',
            content: `
              <h3>How do you feel? 😊</h3>
              <div class="vocab-grid">
                <div class="vocab-item" style="text-align:center;font-size:20px">😢 <strong>sad</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:20px">😨 <strong>scared</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:20px">😪 <strong>tired</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:20px">😠 <strong>angry</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:20px">😊 <strong>good / happy</strong></div>
              </div>
            `,
            questions: [
              { type:'picture', skill:'selection', q:'You are crying 😢. You feel:', opts:[{e:'😢',l:'sad'},{e:'😠',l:'angry'},{e:'😊',l:'good'},{e:'😪',l:'tired'}], ans:'sad' },
              { type:'picture', skill:'selection', q:'There is a monster! 👻 You feel:', opts:[{e:'😊',l:'good'},{e:'😢',l:'sad'},{e:'😨',l:'scared'},{e:'😠',l:'angry'}], ans:'scared' },
              { type:'picture', skill:'selection', q:'You didn\'t sleep. 😪 You feel:', opts:[{e:'😠',l:'angry'},{e:'😪',l:'tired'},{e:'😊',l:'good'},{e:'😢',l:'sad'}], ans:'tired' },
              { type:'picture', skill:'selection', q:'Someone broke your toy! You feel:', opts:[{e:'😊',l:'good'},{e:'😨',l:'scared'},{e:'😪',l:'tired'},{e:'😠',l:'angry'}], ans:'angry' },
              { type:'picture', skill:'selection', q:'You got a gold star ⭐. You feel:', opts:[{e:'😢',l:'sad'},{e:'😊',l:'good'},{e:'😨',l:'scared'},{e:'😠',l:'angry'}], ans:'good' },
            ]
          },
          {
            id: 'letters',
            title: 'Letters A, L, S, T',
            icon: '🔤',
            mode: 'picture',
            content: `
              <h3>Letters & Sounds! 🔤</h3>
              <div class="vocab-grid">
                <div class="vocab-item" style="text-align:center;font-size:18px">🅰️ <strong>A</strong> — 🐊 alligator, 🐜 ant</div>
                <div class="vocab-item" style="text-align:center;font-size:18px">🦁 <strong>L</strong> — 🍋 lemon, 🦁 lion</div>
                <div class="vocab-item" style="text-align:center;font-size:18px">🐍 <strong>S</strong> — 🐍 snake, 6️⃣ six</div>
                <div class="vocab-item" style="text-align:center;font-size:18px">🪑 <strong>T</strong> — 🪑 table, 🔟 ten</div>
              </div>
            `,
            questions: [
              { type:'picture', skill:'selection', q:'🐊 Alligator starts with:', opts:[{e:'🅰️',l:'A'},{e:'🦁',l:'L'},{e:'🐍',l:'S'},{e:'🪑',l:'T'}], ans:'A' },
              { type:'picture', skill:'selection', q:'🦁 Lion starts with:', opts:[{e:'🅰️',l:'A'},{e:'🦁',l:'L'},{e:'🐍',l:'S'},{e:'🪑',l:'T'}], ans:'L' },
              { type:'picture', skill:'selection', q:'🐍 Snake starts with:', opts:[{e:'🅰️',l:'A'},{e:'🦁',l:'L'},{e:'🐍',l:'S'},{e:'🪑',l:'T'}], ans:'S' },
              { type:'picture', skill:'selection', q:'🪑 Table starts with:', opts:[{e:'🅰️',l:'A'},{e:'🦁',l:'L'},{e:'🐍',l:'S'},{e:'🪑',l:'T'}], ans:'T' },
              { type:'picture', skill:'selection', q:'🐜 Ant starts with:', opts:[{e:'🅰️',l:'A'},{e:'🦁',l:'L'},{e:'🐍',l:'S'},{e:'🪑',l:'T'}], ans:'A' },
              { type:'picture', skill:'selection', q:'🍋 Lemon starts with:', opts:[{e:'🅰️',l:'A'},{e:'🦁',l:'L'},{e:'🐍',l:'S'},{e:'🪑',l:'T'}], ans:'L' },
            ]
          },
        ]
      }
    ]
  },

  // ----------------------------------------------------------
  //  FERNANDO — Pre-Kinder English
  //  Pure picture tap + big emoji — zero reading required
  // ----------------------------------------------------------
  fernando_english: {
    units: [
      {
        id: 'unit1',
        title: 'Unit 1 — My World',
        theme: 'Colors, Animals & Numbers',
        essentialQuestion: 'What do I see around me?',
        status: 'active',
        topics: [
          {
            id: 'colors',
            title: 'Colors 🎨',
            icon: '🎨',
            mode: 'tap', // tap-the-picture mode
            content: `
              <h3 style="text-align:center">Colors! 🎨</h3>
              <div class="vocab-grid">
                <div class="vocab-item" style="text-align:center;font-size:28px">🔴 <br><strong>red</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:28px">🔵 <br><strong>blue</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:28px">🟡 <br><strong>yellow</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:28px">🟢 <br><strong>green</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:28px">🟠 <br><strong>orange</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:28px">🟣 <br><strong>purple</strong></div>
              </div>
            `,
            questions: [
              { type:'tap', skill:'selection', q:'Tap RED! 🔴', opts:[{e:'🔴',l:'red'},{e:'🔵',l:'blue'},{e:'🟡',l:'yellow'}], ans:'red' },
              { type:'tap', skill:'selection', q:'Tap BLUE! 🔵', opts:[{e:'🟢',l:'green'},{e:'🔵',l:'blue'},{e:'🟠',l:'orange'}], ans:'blue' },
              { type:'tap', skill:'selection', q:'Tap YELLOW! 🌟', opts:[{e:'🟣',l:'purple'},{e:'🔴',l:'red'},{e:'🟡',l:'yellow'}], ans:'yellow' },
              { type:'tap', skill:'selection', q:'Tap GREEN! 🌿', opts:[{e:'🟢',l:'green'},{e:'🔵',l:'blue'},{e:'🟠',l:'orange'}], ans:'green' },
              { type:'tap', skill:'selection', q:'Tap ORANGE! 🍊', opts:[{e:'🔴',l:'red'},{e:'🟡',l:'yellow'},{e:'🟠',l:'orange'}], ans:'orange' },
              { type:'tap', skill:'selection', q:'Tap PURPLE! 🍇', opts:[{e:'🟣',l:'purple'},{e:'🟢',l:'green'},{e:'🔵',l:'blue'}], ans:'purple' },
            ]
          },
          {
            id: 'animals',
            title: 'Animals 🐾',
            icon: '🐾',
            mode: 'tap',
            content: `
              <h3 style="text-align:center">Animals! 🐾</h3>
              <div class="vocab-grid">
                <div class="vocab-item" style="text-align:center;font-size:28px">🐶<br><strong>dog</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:28px">🐱<br><strong>cat</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:28px">🐸<br><strong>frog</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:28px">🐦<br><strong>bird</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:28px">🐠<br><strong>fish</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:28px">🦁<br><strong>lion</strong></div>
              </div>
            `,
            questions: [
              { type:'tap', skill:'selection', q:'Tap the DOG! 🐶', opts:[{e:'🐱',l:'cat'},{e:'🐶',l:'dog'},{e:'🐸',l:'frog'}], ans:'dog' },
              { type:'tap', skill:'selection', q:'Tap the CAT! 🐱', opts:[{e:'🐶',l:'dog'},{e:'🐱',l:'cat'},{e:'🦁',l:'lion'}], ans:'cat' },
              { type:'tap', skill:'selection', q:'Tap the FROG! 🐸', opts:[{e:'🐠',l:'fish'},{e:'🐦',l:'bird'},{e:'🐸',l:'frog'}], ans:'frog' },
              { type:'tap', skill:'selection', q:'Tap the BIRD! 🐦', opts:[{e:'🐦',l:'bird'},{e:'🐶',l:'dog'},{e:'🐱',l:'cat'}], ans:'bird' },
              { type:'tap', skill:'selection', q:'Tap the FISH! 🐠', opts:[{e:'🦁',l:'lion'},{e:'🐠',l:'fish'},{e:'🐸',l:'frog'}], ans:'fish' },
              { type:'tap', skill:'selection', q:'Tap the LION! 🦁', opts:[{e:'🐱',l:'cat'},{e:'🐦',l:'bird'},{e:'🦁',l:'lion'}], ans:'lion' },
            ]
          },
          {
            id: 'numbers-pk',
            title: 'Numbers 1–5 🔢',
            icon: '🔢',
            mode: 'tap',
            content: `
              <h3 style="text-align:center">Numbers 1 to 5! 🔢</h3>
              <div class="vocab-grid">
                <div class="vocab-item" style="text-align:center;font-size:32px">1️⃣<br><strong>one</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:32px">2️⃣<br><strong>two</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:32px">3️⃣<br><strong>three</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:32px">4️⃣<br><strong>four</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:32px">5️⃣<br><strong>five</strong></div>
              </div>
            `,
            questions: [
              { type:'tap', skill:'selection', q:'🍎 ONE apple! Tap 1:', opts:[{e:'1️⃣',l:'one'},{e:'2️⃣',l:'two'},{e:'3️⃣',l:'three'}], ans:'one' },
              { type:'tap', skill:'selection', q:'🐶🐶 TWO dogs! Tap 2:', opts:[{e:'3️⃣',l:'three'},{e:'1️⃣',l:'one'},{e:'2️⃣',l:'two'}], ans:'two' },
              { type:'tap', skill:'selection', q:'⭐⭐⭐ THREE stars! Tap 3:', opts:[{e:'4️⃣',l:'four'},{e:'3️⃣',l:'three'},{e:'5️⃣',l:'five'}], ans:'three' },
              { type:'tap', skill:'selection', q:'🎈🎈🎈🎈 FOUR balloons! Tap 4:', opts:[{e:'2️⃣',l:'two'},{e:'4️⃣',l:'four'},{e:'5️⃣',l:'five'}], ans:'four' },
              { type:'tap', skill:'selection', q:'🌸🌸🌸🌸🌸 FIVE flowers! Tap 5:', opts:[{e:'4️⃣',l:'four'},{e:'3️⃣',l:'three'},{e:'5️⃣',l:'five'}], ans:'five' },
            ]
          },
          {
            id: 'shapes',
            title: 'Shapes 🔷',
            icon: '🔷',
            mode: 'tap',
            content: `
              <h3 style="text-align:center">Shapes! 🔷</h3>
              <div class="vocab-grid">
                <div class="vocab-item" style="text-align:center;font-size:28px">🔴<br><strong>circle</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:28px">🔷<br><strong>square</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:28px">🔺<br><strong>triangle</strong></div>
                <div class="vocab-item" style="text-align:center;font-size:28px">🟥<br><strong>rectangle</strong></div>
              </div>
            `,
            questions: [
              { type:'tap', skill:'selection', q:'Tap the CIRCLE! ⚪', opts:[{e:'🔺',l:'triangle'},{e:'⚪',l:'circle'},{e:'🟦',l:'square'}], ans:'circle' },
              { type:'tap', skill:'selection', q:'Tap the TRIANGLE! 🔺', opts:[{e:'🔺',l:'triangle'},{e:'⚪',l:'circle'},{e:'🟥',l:'rectangle'}], ans:'triangle' },
              { type:'tap', skill:'selection', q:'Tap the SQUARE! 🟦', opts:[{e:'⚪',l:'circle'},{e:'🟦',l:'square'},{e:'🔺',l:'triangle'}], ans:'square' },
              { type:'tap', skill:'selection', q:'Tap the RECTANGLE! 🟥', opts:[{e:'🟦',l:'square'},{e:'⚪',l:'circle'},{e:'🟥',l:'rectangle'}], ans:'rectangle' },
            ]
          },
        ]
      }
    ]
  }
};
