// ============================================================
//  content-andres-espanol.js
//  Español — Andrés · Pre-Kinder
//  Escuela Ramón Barrantes Herrera
//  Maestra: Licda. Elizabeth Vargas Cruz
//
//  Unidades extraídas del cuaderno de Andrés (Marzo–Abril 2026):
//  Unidad 1: Sonidos y Entornos Visuales
//  Unidad 2: Conciencia Fonológica — Oraciones y Palabras
//  Unidad 3: Las Vocales (E-e, I-i, O-o)
// ============================================================

CONTENT.andres.espanol = {
  units: [

    // ══════════════════════════════════════════════════════
    //  UNIT 1 — Sonidos y Entornos Visuales
    // ══════════════════════════════════════════════════════
    {
      id: 'espanol-u1',
      title: 'Unidad 1 — Sonidos y Entornos Visuales',
      theme: 'Sonidos, señales y entornos de Costa Rica',
      essentialQuestion: '¿Qué sonidos e imágenes veo en mi entorno?',
      status: 'active',
      topics: [

        // ── TOPIC 1: Sonidos del Entorno ──────────────────
        {
          id: 'sonidos-entorno',
          title: 'Sonidos del Entorno',
          icon: '🔊',
          content: `
            <h3>Sonidos del Entorno 🔊</h3>
            <p>En Costa Rica escuchamos muchos sonidos a nuestro alrededor.</p>
            <div class="vocab-grid">
              <div class="vocab-item">🐄 <strong>La vaca</strong> hace: muuu</div>
              <div class="vocab-item">🌧️ <strong>La lluvia</strong> hace: ploc ploc</div>
              <div class="vocab-item">🥁 <strong>El tambor</strong> hace: pum pum</div>
              <div class="vocab-item">🚓 <strong>La policía</strong> hace: wiu wiu</div>
              <div class="vocab-item">🚑 <strong>La ambulancia</strong> hace: wiu wiu</div>
              <div class="vocab-item">🚂 <strong>El tren</strong> hace: chu chu</div>
              <div class="vocab-item">⛪ <strong>La iglesia</strong> hace: dong dong</div>
            </div>
            <div class="rule-box" style="background:#FFF9C4;border-left:4px solid #F9A825;margin-top:10px">
              <p>El toro Indalecio hace: <strong>muuu</strong></p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Qué sonido hace la vaca? 🐄', opts:['wiu wiu','pum pum','muuu','chu chu'], ans:'muuu' },
            { type:'selection', skill:'selection', q:'¿Qué sonido hace el tambor? 🥁', opts:['muuu','pum pum','ploc ploc','ding dong'], ans:'pum pum' },
            { type:'selection', skill:'speaking', q:'La lluvia hace el sonido: ___ ___.', opts:['muuu','pum pum','shhhhhh','ding dong'], ans:'shhhhhh' },
            { type:'selection', skill:'listening', q:'¿Qué vehículo hace el sonido "wiu wiu"?', opts:['El tren','La vaca','La ambulancia','El tambor'], ans:'La ambulancia' },
            { type:'selection', skill:'selection', q:'¿Qué sonido hace el tren? 🚂', opts:['muuu','dong dong','chu chu','pum pum'], ans:'chu chu' },
            { type:'selection', skill:'speaking', q:'La policía y la ambulancia hacen el sonido: ___ ___.', opts:['muuu','wiu wiu','chu chu','pum pum'], ans:'wiu wiu' },
            { type:'selection', skill:'selection', q:'¿Qué sonido hace la iglesia? ⛪', opts:['chu chu','ding ding','muuu','ploc ploc'], ans:'ding ding' },
            { type:'selection', skill:'listening', q:'¿Qué sonido hace el toro Indalecio?', opts:['oink oink','miau miau','guau guau','muuu'], ans:'muuu' },
          ]
        },

        // ── TOPIC 2: Señales y Entornos Visuales ──────────
        {
          id: 'senales-visuales',
          title: 'Señales y Entornos Visuales',
          icon: '🚦',
          content: `
            <h3>Señales y Entornos Visuales 🚦</h3>
            <p>Las señales nos dan información importante sin usar palabras.</p>
            <div class="vocab-grid">
              <div class="vocab-item">🛑 <strong>ALTO</strong> — debes parar</div>
              <div class="vocab-item">🚷 <strong>No mascotas</strong> — no se permiten perros</div>
              <div class="vocab-item">🚸 <strong>Zona escolar</strong> — hay niños cruzando</div>
              <div class="vocab-item">🚫 <strong>No hacer ruido</strong> — silencio</div>
              <div class="vocab-item">🚹🚺 <strong>Baños</strong> — hombres y mujeres</div>
              <div class="vocab-item">🍟 <strong>McDonald's</strong> — restaurante</div>
              <div class="vocab-item">🍔 <strong>Burger King</strong> — restaurante</div>
              <div class="vocab-item">🗼 <strong>Torre Eiffel</strong> — monumento</div>
            </div>
            <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32;margin-top:10px">
              <p>Las señales las encontramos en la calle, en restaurantes, hospitales y escuelas.</p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Qué significa la señal ALTO? 🛑', opts:['Sigue adelante','Debes parar','Dobla a la derecha','Corre rápido'], ans:'Debes parar' },
            { type:'selection', skill:'selection', q:'¿Dónde podemos encontrar señales?', opts:['Solo en el mar','Solo en casa','En la calle, restaurantes y escuelas','Solo en los parques'], ans:'En la calle, restaurantes y escuelas' },
            { type:'selection', skill:'speaking', q:'La señal con una "M" dorada es de ___.',opts:['Restaurante','Burger King','Mamá','McDonald\'s'], ans:'McDonald\'s' },
            { type:'selection', skill:'listening', q:'¿Qué nos indica la señal de zona escolar? 🚸', opts:['Hay un hospital','Hay niños cruzando','No se permite comer','Dobla aquí'], ans:'Hay niños cruzando' },
            { type:'selection', skill:'selection', q:'¿Para qué sirven las señales?', opts:['Para decorar','Para dar información importante','Para confundir a la gente','Solo para los adultos'], ans:'Para dar información importante' },
            { type:'selection', skill:'speaking', q:'La señal con un perro tachado significa: no se permiten ___.', opts:['adultos','niños','perros','mascotas'],  ans:'mascotas' },
            { type:'selection', skill:'selection', q:'¿Qué tipo de lugar tiene señales de hombres y mujeres? 🚹🚺', opts:['La cocina','Los baños','La sala','El garaje'], ans:'Los baños' },
            { type:'selection', skill:'listening', q:'¿Qué representa la Torre Eiffel?', opts:['Un restaurante','Un hospital','Un monumento','Una señal de tráfico'], ans:'Un monumento' },
          ]
        },

      ] // end unit 1 topics
    },

    // ══════════════════════════════════════════════════════
    //  UNIT 2 — Conciencia Fonológica
    // ══════════════════════════════════════════════════════
    {
      id: 'espanol-u2',
      title: 'Unidad 2 — Conciencia Fonológica',
      theme: 'Oraciones, palabras y sonidos',
      essentialQuestion: '¿Cuántas palabras tienen las oraciones?',
      status: 'active',
      topics: [

        // ── TOPIC 3: Oraciones y Palabras ─────────────────
        {
          id: 'oraciones-palabras',
          title: 'Oraciones y Palabras',
          icon: '📖',
          content: `
            <h3>Oraciones y Palabras 📖</h3>
            <p>Una <strong>oración</strong> es un grupo de palabras que tiene sentido.</p>
            <div class="rule-box" style="background:#E3F2FD;border-left:4px solid #1565C0">
              <p>Cada palabra en la oración se cuenta por separado.</p>
            </div>
            <div class="vocab-grid">
              <div class="vocab-item">🐝 <strong>"Ana la abeja"</strong> → 3 palabras</div>
              <div class="vocab-item">🐘 <strong>"Edi el elefante"</strong> → 3 palabras</div>
              <div class="vocab-item">🦎 <strong>"Isa la iguana"</strong> → 3 palabras</div>
              <div class="vocab-item">🐻 <strong>"Oto el oso"</strong> → 3 palabras</div>
              <div class="vocab-item">🐦 <strong>"Ursula la urraca"</strong> → 3 palabras</div>
            </div>
            <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32;margin-top:10px">
              <p><strong>Oraciones del libro:</strong></p>
              <p>• "Emilia recoge las manzanas." → 4 palabras</p>
              <p>• "Oscar come pan." → 3 palabras</p>
              <p>• "Isa y Luis bailan juntos." → 5 palabras</p>
              <p>• "Uriel duerme todo el día." → 5 palabras</p>
              <p>• "Adela toma jugo." → 3 palabras</p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Cuántas palabras tiene "Ana la abeja"?', opts:['2','4','3','5'], ans:'3' },
            { type:'selection', skill:'selection', q:'¿Cuántas palabras tiene "Emilia recoge las manzanas"?', opts:['3','5','4','2'], ans:'4' },
            { type:'fill', skill:'speaking', q:'"Oscar come pan" tiene ___ palabras.', ans:'3' },
            { type:'selection', skill:'listening', q:'¿Cuántas palabras tiene "Isa y Luis bailan juntos"?', opts:['3','4','6','5'], ans:'5' },
            { type:'selection', skill:'selection', q:'¿Cuántas palabras tiene "Oto el oso"?', opts:['2','3','4','1'], ans:'3' },
            { type:'fill', skill:'speaking', q:'"Ursula la urraca" tiene ___ palabras.', ans:'3' },
            { type:'selection', skill:'selection', q:'¿Cuántas palabras tiene "Adela toma jugo"?', opts:['4','2','3','5'], ans:'3' },
            { type:'selection', skill:'listening', q:'¿Cuántas palabras tiene "Uriel duerme todo el día"?', opts:['3','4','6','5'], ans:'5' },
          ]
        },

      ] // end unit 2 topics
    },

    // ══════════════════════════════════════════════════════
    //  UNIT 3 — Las Vocales
    // ══════════════════════════════════════════════════════
    {
      id: 'espanol-u3',
      title: 'Unidad 3 — Las Vocales',
      theme: 'Grafemas E-e, I-i, O-o: reconocimiento y escritura',
      essentialQuestion: '¿Cómo reconozco y escribo las vocales?',
      status: 'active',
      topics: [

        // ── TOPIC 4: Vocal E-e ────────────────────────────
        {
          id: 'vocal-e',
          title: 'La Vocal E-e',
          icon: '🌟',
          content: `
            <h3>La Vocal E - e 🌟</h3>
            <div class="rule-box" style="background:#FFEBEE;border-left:4px solid #C62828">
              <p>El grafema <strong>E - e</strong> tiene dos formas:</p>
              <p>➤ <strong>E</strong> — mayúscula (grande)</p>
              <p>➤ <strong>e</strong> — minúscula (pequeña)</p>
            </div>
            <h3 style="margin-top:12px">Palabras con E-e 📝</h3>
            <div class="vocab-grid">
              <div class="vocab-item">🏫 <strong>escuela</strong> — <em>E</em>scuela</div>
              <div class="vocab-item">👧 <strong>Emilia</strong> — <em>E</em>milia</div>
              <div class="vocab-item">🪞 <strong>espejo</strong> — <em>e</em>spejo</div>
              <div class="vocab-item">👩‍⚕️ <strong>enfermera</strong> — <em>e</em>nfermera</div>
              <div class="vocab-item">⭐ <strong>estrella</strong> — <em>e</em>strella</div>
              <div class="vocab-item">🐘 <strong>elefante</strong> — <em>e</em>lefante</div>
              <div class="vocab-item">🪜 <strong>escalera</strong> — <em>e</em>scalera</div>
              <div class="vocab-item">⚔️ <strong>espada</strong> — <em>e</em>spada</div>
            </div>
            <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32;margin-top:10px">
              <p>Todas estas palabras <strong>empiezan</strong> con la vocal E-e.</p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Cuál palabra empieza con la vocal E? 🌟', opts:['árbol','iguana','escuela','oso'], ans:'escuela' },
            { type:'selection', skill:'selection', q:'¿Cuál es la forma mayúscula de la vocal "e"?', opts:['A','I','E','O'], ans:'E' },
            { type:'fill', skill:'speaking', q:'El animal grande con trompa se llama ___.', ans:'elefante' },
            { type:'selection', skill:'listening', q:'¿Cuál de estas palabras NO empieza con E?', opts:['espejo','enfermera','iguana','estrella'], ans:'iguana' },
            { type:'selection', skill:'selection', q:'¿Cómo se llama la niña del libro que empieza con E?', opts:['Ana','Isa','Emilia','Ursula'], ans:'Emilia' },
            { type:'fill', skill:'speaking', q:'La ___ es donde los niños van a aprender. (empieza con E)', ans:'escuela' },
            { type:'selection', skill:'selection', q:'¿Cuál objeto brilla en el cielo y empieza con E? ⭐', opts:['espejo','espada','estrella','escalera'], ans:'estrella' },
            { type:'selection', skill:'listening', q:'¿Qué usamos para ver nuestro reflejo y empieza con E?', opts:['escalera','elefante','espejo','enfermera'], ans:'espejo' },
            { type:'fill', skill:'speaking', q:'La persona que cuida enfermos en el hospital: ___.', ans:'enfermera' },
            { type:'selection', skill:'selection', q:'¿Cuál tiene la E mayúscula al inicio?', opts:['espejo','enfermera','Emilia','escalera'], ans:'Emilia' },
          ]
        },

        // ── TOPIC 5: Vocal I-i ────────────────────────────
        {
          id: 'vocal-i',
          title: 'La Vocal I-i',
          icon: '🦎',
          content: `
            <h3>La Vocal I - i 🦎</h3>
            <div class="rule-box" style="background:#E8EAF6;border-left:4px solid #3949AB">
              <p>El grafema <strong>I - i</strong> tiene dos formas:</p>
              <p>➤ <strong>I</strong> — mayúscula (grande)</p>
              <p>➤ <strong>i</strong> — minúscula (pequeña, con punto arriba)</p>
            </div>
            <h3 style="margin-top:12px">Palabras con I-i 📝</h3>
            <div class="vocab-grid">
              <div class="vocab-item">🧑 <strong>Iván</strong> — <em>I</em>ván</div>
              <div class="vocab-item">🦎 <strong>iguana</strong> — <em>i</em>guana</div>
              <div class="vocab-item">🏠 <strong>iglú</strong> — <em>i</em>glú</div>
              <div class="vocab-item">🔥 <strong>incendio</strong> — <em>i</em>ncendio</div>
              <div class="vocab-item">🏝️ <strong>isla</strong> — <em>i</em>sla</div>
              <div class="vocab-item">⛪ <strong>iglesia</strong> — <em>i</em>glesia</div>
              <div class="vocab-item">🧲 <strong>imán</strong> — <em>i</em>mán</div>
              <div class="vocab-item">🎸 <strong>instrumentos</strong> — <em>i</em>nstrumentos</div>
            </div>
            <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32;margin-top:10px">
              <p>Las palabras de Andrés del cuaderno: <strong>Iglesia, Iguana, Isla, Iglú, Iván</strong></p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Cuál palabra empieza con la vocal I? 🦎', opts:['elefante','iguana','oso','árbol'], ans:'iguana' },
            { type:'selection', skill:'selection', q:'¿Cuál es la forma minúscula de la vocal "I"?', opts:['a','e','i','o'], ans:'i' },
            { type:'fill', skill:'speaking', q:'El lagarto verde grande de Costa Rica se llama ___.', ans:'iguana' },
            { type:'selection', skill:'listening', q:'¿Cuál de estas palabras NO empieza con I?', opts:['iglú','isla','incendio','elefante'], ans:'elefante' },
            { type:'selection', skill:'selection', q:'¿Qué es una isla?', opts:['Una casa de hielo','Tierra rodeada de agua','Un animal','Una señal'], ans:'Tierra rodeada de agua' },
            { type:'fill', skill:'speaking', q:'La casa de hielo que empieza con I se llama ___.', ans:'iglú' },
            { type:'selection', skill:'selection', q:'¿Qué se llama el lugar donde la gente reza y empieza con I?', opts:['isla','iguana','iglesia','imán'], ans:'iglesia' },
            { type:'selection', skill:'listening', q:'¿Cuál nombre de persona empieza con I?', opts:['Ana','Oscar','Iván','Emilia'], ans:'Iván' },
            { type:'fill', skill:'speaking', q:'El objeto que atrae el metal se llama ___.', ans:'imán' },
            { type:'selection', skill:'selection', q:'¿Cuál palabra con I significa fuego grande?', opts:['iglú','isla','imán','incendio'], ans:'incendio' },
          ]
        },

        // ── TOPIC 6: Vocal O-o ────────────────────────────
        {
          id: 'vocal-o',
          title: 'La Vocal O-o',
          icon: '🐻',
          content: `
            <h3>La Vocal O - o 🐻</h3>
            <div class="rule-box" style="background:#FFF3E0;border-left:4px solid #E65100">
              <p>El grafema <strong>O - o</strong> tiene dos formas:</p>
              <p>➤ <strong>O</strong> — mayúscula (grande)</p>
              <p>➤ <strong>o</strong> — minúscula (pequeña)</p>
            </div>
            <h3 style="margin-top:12px">Palabras con O-o 📝</h3>
            <div class="vocab-grid">
              <div class="vocab-item">👁️ <strong>ojo</strong> — <em>o</em>jo</div>
              <div class="vocab-item">🐛 <strong>oruga</strong> — <em>o</em>ruga</div>
              <div class="vocab-item">🥘 <strong>olla</strong> — <em>o</em>lla</div>
              <div class="vocab-item">8️⃣ <strong>ocho</strong> — <em>o</em>cho</div>
              <div class="vocab-item">🧑 <strong>Oscar</strong> — <em>O</em>scar</div>
              <div class="vocab-item">🦪 <strong>ostra</strong> — <em>o</em>stra</div>
              <div class="vocab-item">👂 <strong>oreja</strong> — <em>o</em>reja</div>
              <div class="vocab-item">🐻 <strong>oso</strong> — <em>o</em>so</div>
            </div>
            <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32;margin-top:10px">
              <p>Palabras del cuaderno de Andrés: <strong>oso, olla, ojos, ocho, ogro, oído</strong></p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Cuál palabra empieza con la vocal O? 🐻', opts:['iguana','elefante','oso','árbol'], ans:'oso' },
            { type:'selection', skill:'selection', q:'¿Cuál es la forma mayúscula de la vocal "o"?', opts:['A','E','I','O'], ans:'O' },
            { type:'fill', skill:'speaking', q:'Con lo que cocinamos la sopa se llama ___.', ans:'olla' },
            { type:'selection', skill:'listening', q:'¿Cuál de estas palabras NO empieza con O?', opts:['ojo','oruga','iglesia','ocho'], ans:'iglesia' },
            { type:'selection', skill:'selection', q:'¿Con qué órgano escuchamos? Empieza con O.', opts:['ojo','oreja','oso','ostra'], ans:'oreja' },
            { type:'fill', skill:'speaking', q:'El número 8 en español es ___.', ans:'ocho' },
            { type:'selection', skill:'selection', q:'¿Cuál animal grande come miel y empieza con O?', opts:['oruga','olla','oso','ostra'], ans:'oso' },
            { type:'selection', skill:'listening', q:'¿Con qué vemos? Empieza con O.', opts:['oreja','olla','ojo','ostra'], ans:'ojo' },
            { type:'fill', skill:'speaking', q:'El gusano que se convierte en mariposa se llama ___.', ans:'oruga' },
            { type:'selection', skill:'selection', q:'¿Cuál nombre de persona empieza con O?', opts:['Emilia','Iván','Ana','Oscar'], ans:'Oscar' },
          ]
        },

        // ── TOPIC 7: Repaso — Las 5 Vocales ──────────────
        {
          id: 'repaso-vocales',
          title: 'Repaso: Las 5 Vocales',
          icon: '🔤',
          content: `
            <h3>Repaso: Las 5 Vocales 🔤</h3>
            <div class="rule-box" style="background:#E3F2FD;border-left:4px solid #1565C0">
              <p>Las 5 vocales del español son:</p>
              <p style="font-size:1.2em;text-align:center"><strong>A — E — I — O — U</strong></p>
            </div>
            <div class="vocab-grid">
              <div class="vocab-item">🅰️ <strong>A-a:</strong> Ana, árbol, avión, Andrés</div>
              <div class="vocab-item">⭐ <strong>E-e:</strong> Emilia, escuela, elefante, espejo</div>
              <div class="vocab-item">🦎 <strong>I-i:</strong> Iván, iguana, iglú, isla</div>
              <div class="vocab-item">🐻 <strong>O-o:</strong> Oscar, oso, olla, ocho</div>
              <div class="vocab-item">☂️ <strong>U-u:</strong> Ursula, uva, uno, urraca</div>
            </div>
            <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32;margin-top:10px">
              <p><strong>Mayúsculas:</strong> A E I O U</p>
              <p><strong>Minúsculas:</strong> a e i o u</p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Cuántas vocales tiene el español?', opts:['3','4','5','6'], ans:'5' },
            { type:'selection', skill:'selection', q:'¿Cuáles son las 5 vocales?', opts:['A E I O U','A B C D E','A E I O Y','B C D F G'], ans:'A E I O U' },
            { type:'fill', skill:'speaking', q:'Las vocales son: A, ___, I, O, U.', ans:'E' },
            { type:'selection', skill:'listening', q:'¿Cuál de estas es una vocal?', opts:['B','C','D','I'], ans:'I' },
            { type:'selection', skill:'selection', q:'¿Con qué vocal empieza "iguana"?', opts:['A','E','I','O'], ans:'I' },
            { type:'selection', skill:'selection', q:'¿Con qué vocal empieza "elefante"?', opts:['A','E','I','O'], ans:'E' },
            { type:'fill', skill:'speaking', q:'La vocal que viene después de la O es la ___.', ans:'U' },
            { type:'selection', skill:'selection', q:'¿Con qué vocal empieza "oso"?', opts:['A','E','I','O'], ans:'O' },
            { type:'selection', skill:'listening', q:'¿Cuál es la primera vocal del abecedario?', opts:['E','I','U','A'], ans:'A' },
            { type:'fill', skill:'speaking', q:'"Ana" empieza con la vocal ___.', ans:'A' },
          ]
        },

      ] // end unit 3 topics
    },

  ] // end units
}; // end CONTENT.andres.espanol
