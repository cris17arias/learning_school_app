// ============================================================
//  CONTENT — Fabián, 3rd Grade, ESPAÑOL
//  Docente: Cinthya Ramírez Zamora — I Prueba, I Semestre 2026
//  Temas: textos literarios/no literarios, fábula, división
//  silábica, sustantivos, adjetivos calificativos,
//  concordancia género/número, artículos, comprensión lectora,
//  uso de mayúsculas y puntos.
// ============================================================

(function () {
  // Wait for CONTENT to be defined by data.js
  function register() {
    if (typeof CONTENT === 'undefined') {
      setTimeout(register, 50);
      return;
    }

    CONTENT.fabian.espanol = {
      units: [
        {
          id: 'espanol-u1',
          title: 'I Prueba — Español 3.° año',
          theme: 'Lecturas, Gramática y Textos',
          essentialQuestion: '¿Cómo leo, comprendo y escribo correctamente?',
          status: 'active',
          topics: [

            // ──────────────────────────────────────────────
            // 1. TEXTOS LITERARIOS Y NO LITERARIOS
            // ──────────────────────────────────────────────
            {
              id: 'textos-literarios',
              title: 'Textos Literarios y No Literarios',
              icon: '📚',
              content: `
                <h3>Textos Literarios y No Literarios</h3>

                <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32">
                  <p><strong>📖 Textos Literarios</strong></p>
                  <p>Expresan emotividad de la realidad. Tienen personajes e imaginación.</p>
                  <p>Ejemplos: <em>cuento, fábula, leyenda, novela, poesía, teatro, comic, carta, afiche</em></p>
                </div>

                <div class="rule-box" style="background:#FFF3E0;border-left:4px solid #E65100">
                  <p><strong>📰 Textos No Literarios</strong></p>
                  <p>Brindan información, pero NO brindan emotividad.</p>
                  <p>Ejemplos: <em>avisos publicitarios, periódicos, noticias, recetas de cocina, resúmenes, exposición, rimas</em></p>
                </div>

                <div class="rule-box" style="background:#EDE7F6;border-left:4px solid #7C4DFF">
                  <p><strong>¿Cómo diferenciarlos?</strong></p>
                  <p>Un texto <strong>literario</strong>: hay personajes, hay emociones, es un texto b que usa la imaginación.</p>
                  <p>Un texto <strong>no literario</strong>: cuando hay datos, recetas, noticias — no usa la imaginación de la misma forma.</p>
                </div>
              `,
              questions: [
                { type:'selection', skill:'selection', q:'¿Cuál de estos es un texto LITERARIO?', opts:['Una receta de cocina','Una fábula','Un aviso publicitario','Una noticia del periódico'], ans:'Una fábula' },
                { type:'selection', skill:'selection', q:'¿Cuál de estos es un texto NO LITERARIO?', opts:['Un cuento','Una leyenda','Una receta de cocina','Una poesía'], ans:'Una receta de cocina' },
                { type:'selection', skill:'selection', q:'Los textos literarios expresan...', opts:['solo información','emotividad e imaginación','recetas y datos','noticias del día'], ans:'emotividad e imaginación' },
                { type:'fill', skill:'speaking', q:'Una ___ es un texto literario con personajes animales que hablan y deja una enseñanza.', ans:'fábula' },
                { type:'selection', skill:'selection', q:'¿Cuál es un texto literario?', opts:['Periódico','Noticia','Comic','Resumen'], ans:'Comic' },
                { type:'selection', skill:'listening', q:'¿Cuál es un texto NO literario?', opts:['Cuento','Leyenda','Teatro','Aviso publicitario'], ans:'Aviso publicitario' },
                { type:'selection', skill:'selection', q:'Un texto que brinda información pero NO emotividad es...', opts:['literario','no literario','una fábula','un poema'], ans:'no literario' },
                { type:'fill', skill:'speaking', q:'El cuento, la fábula y la leyenda son ejemplos de textos ___.', ans:'literarios' },
                { type:'selection', skill:'selection', q:'¿Cuál NO es un texto literario?', opts:['Poesía','Fábula','Cuento','Receta'], ans:'Receta' },
                { type:'selection', skill:'selection', q:'Las noticias y los periódicos son textos...', opts:['literarios','con personajes','no literarios','de imaginación'], ans:'no literarios' },
              ]
            },

            // ──────────────────────────────────────────────
            // 2. LA FÁBULA
            // ──────────────────────────────────────────────
            {
              id: 'fabula',
              title: 'La Fábula',
              icon: '🦊',
              content: `
                <h3>La Fábula 🦊</h3>

                <div class="rule-box" style="background:#E3F2FD;border-left:4px solid #1565C0">
                  <p><strong>¿Qué es una fábula?</strong></p>
                  <p>Es un cuento corto que <strong>deja una enseñanza (moraleja)</strong>. Generalmente sus personajes son <strong>animales que hablan y actúan como personas</strong>.</p>
                </div>

                <h3>Partes importantes de la fábula:</h3>
                <div class="vocab-grid">
                  <div class="vocab-item">1️⃣ <strong>Título</strong> — nombre de la historia</div>
                  <div class="vocab-item">2️⃣ <strong>Personajes</strong> — quienes participan</div>
                  <div class="vocab-item">3️⃣ <strong>Inicio</strong> — presenta la situación</div>
                  <div class="vocab-item">4️⃣ <strong>Desarrollo</strong> — ocurre el problema o la acción</div>
                  <div class="vocab-item">5️⃣ <strong>Final</strong> — termina la historia</div>
                  <div class="vocab-item">6️⃣ <strong>Moraleja</strong> — enseñanza que deja</div>
                </div>

                <h3 style="margin-top:14px">Tipos de personajes:</h3>
                <div class="vocab-grid">
                  <div class="vocab-item">🐇 <strong>Animales</strong> — conejo, zorro</div>
                  <div class="vocab-item">👨‍🌾 <strong>Personas</strong> — campesinos, niños</div>
                  <div class="vocab-item">🪑 <strong>Objetos o plantas</strong> — mesa que habla</div>
                </div>

                <div class="rule-box" style="background:#FCE4EC;border-left:4px solid #C62828;margin-top:12px">
                  <p><strong>Ejemplo — "La lengua y los dientes":</strong></p>
                  <p>Trata de una lengua que no deja hablar a los demás. La situación: la lengua dijo una mentira. La enseñanza: que no debemos decir mentiras.</p>
                </div>
              `,
              questions: [
                { type:'selection', skill:'selection', q:'¿Qué es una fábula?', opts:['Un poema muy largo','Un cuento corto con moraleja','Una noticia del periódico','Un aviso publicitario'], ans:'Un cuento corto con moraleja' },
                { type:'selection', skill:'selection', q:'¿Qué es la MORALEJA de una fábula?', opts:['El título de la historia','Los personajes que participan','La enseñanza que deja','El inicio de la historia'], ans:'La enseñanza que deja' },
                { type:'fill', skill:'speaking', q:'En la fábula, el ___ presenta la situación al inicio.', ans:'inicio' },
                { type:'selection', skill:'selection', q:'¿Cuál parte de la fábula "ocurre el problema o la acción"?', opts:['Título','Inicio','Desarrollo','Final'], ans:'Desarrollo' },
                { type:'selection', skill:'listening', q:'Los personajes de las fábulas generalmente son...', opts:['solo personas','animales que hablan como personas','objetos sin vida','solo niños'], ans:'animales que hablan como personas' },
                { type:'selection', skill:'selection', q:'¿Cuántas partes importantes tiene la fábula?', opts:['3','4','5','6'], ans:'6' },
                { type:'fill', skill:'speaking', q:'El ___ es el nombre de la historia en una fábula.', ans:'título' },
                { type:'selection', skill:'selection', q:'¿Cuál parte de la fábula termina la historia?', opts:['Inicio','Moraleja','Desarrollo','Final'], ans:'Final' },
                { type:'selection', skill:'selection', q:'En "La lengua y los dientes", ¿qué aprendió la lengua?', opts:['Que debe hablar más','Que no debemos decir mentiras','Que los dientes son malos','Que debe ser más fuerte'], ans:'Que no debemos decir mentiras' },
                { type:'selection', skill:'selection', q:'Un zorro y un conejo en una fábula son ejemplos de...', opts:['objetos','personajes tipo animales','personas','plantas'], ans:'personajes tipo animales' },
              ]
            },

            // ──────────────────────────────────────────────
            // 3. DIVISIÓN SILÁBICA
            // ──────────────────────────────────────────────
            {
              id: 'silabas',
              title: 'División Silábica',
              icon: '🔡',
              content: `
                <h3>División Silábica 🔡</h3>

                <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32">
                  <p>Las palabras están formadas por <strong>sílabas</strong>. Para dividirlas, separamos cada "golpe de voz".</p>
                  <p>Ejemplo: <strong>ma - ta</strong> | <strong>ce - lu - lar</strong> | <strong>te - lé - fo - no</strong></p>
                </div>

                <h3>Clasificación por número de sílabas:</h3>
                <div class="vocab-grid">
                  <div class="vocab-item">1️⃣ <strong>Monosílaba</strong> — 1 sílaba<br><em>sal, fe</em></div>
                  <div class="vocab-item">2️⃣ <strong>Bisílaba</strong> — 2 sílabas<br><em>ca-ma, ca-sa</em></div>
                  <div class="vocab-item">3️⃣ <strong>Trisílaba</strong> — 3 sílabas<br><em>mer-ca-do</em></div>
                  <div class="vocab-item">4️⃣ <strong>Polisílaba</strong> — 4 o más sílabas<br><em>e-di-fi-cio</em></div>
                </div>

                <div class="rule-box" style="background:#EDE7F6;border-left:4px solid #7C4DFF;margin-top:12px">
                  <p><strong>Más ejemplos:</strong></p>
                  <p>sal → <strong>sal</strong> (monosílaba, 1)</p>
                  <p>mata → <strong>ma - ta</strong> (bisílaba, 2)</p>
                  <p>celular → <strong>ce - lu - lar</strong> (trisílaba, 3)</p>
                  <p>teléfono → <strong>te - lé - fo - no</strong> (polisílaba, 4)</p>
                </div>
              `,
              questions: [
                { type:'selection', skill:'selection', q:'¿Cuántas sílabas tiene "ca-sa"?', opts:['1','2','3','4'], ans:'2' },
                { type:'selection', skill:'selection', q:'"Mercado" se divide: mer-ca-do. ¿Cómo se clasifica?', opts:['Monosílaba','Bisílaba','Trisílaba','Polisílaba'], ans:'Trisílaba' },
                { type:'fill', skill:'speaking', q:'"Teléfono" tiene 4 sílabas. Es una palabra ___.', ans:'polisílaba' },
                { type:'selection', skill:'selection', q:'¿Cuál palabra es MONOSÍLABA?', opts:['casa','sal','celular','mercado'], ans:'sal' },
                { type:'selection', skill:'listening', q:'"E-di-fi-cio" tiene 4 sílabas. Es...', opts:['monosílaba','bisílaba','trisílaba','polisílaba'], ans:'polisílaba' },
                { type:'selection', skill:'selection', q:'¿Cómo se divide "mata"?', opts:['mat-a','ma-ta','m-ata','mata'], ans:'ma-ta' },
                { type:'fill', skill:'speaking', q:'"Cama" tiene 2 sílabas: ca - ma. Es una palabra ___.', ans:'bisílaba' },
                { type:'selection', skill:'selection', q:'Una palabra con UNA sílaba se llama...', opts:['bisílaba','trisílaba','monosílaba','polisílaba'], ans:'monosílaba' },
                { type:'selection', skill:'selection', q:'¿Cuántas sílabas tiene "ce-lu-lar"?', opts:['1','2','3','4'], ans:'3' },
                { type:'fill', skill:'speaking', q:'"Mercado" = mer-ca-do = 3 sílabas = trisílaba. "Edificio" = e-di-fi-cio = 4 sílabas = ___.', ans:'polisílaba' },
              ]
            },

            // ──────────────────────────────────────────────
            // 4. SUSTANTIVOS
            // ──────────────────────────────────────────────
            {
              id: 'sustantivos',
              title: 'Sustantivos',
              icon: '🏷️',
              content: `
                <h3>Sustantivos 🏷️</h3>

                <div class="rule-box" style="background:#E3F2FD;border-left:4px solid #1565C0">
                  <p><strong>¿Qué es un sustantivo?</strong></p>
                  <p>Palabra que sirve para <strong>nombrar</strong>: objetos, cosas, animales y lugares.</p>
                  <p>Ejemplo: <em>oso, libro, mesa, flor, casa</em></p>
                </div>

                <h3>Regla importante:</h3>
                <div class="rule-box" style="background:#FFF9C4;border-left:4px solid #F57F17">
                  <p>Los sustantivos <strong>inician con mayúscula</strong> cuando son nombres propios (nombres de personas, países, ciudades).</p>
                  <p>Ejemplo: <em>Costa Rica, Fabián, Heredia</em></p>
                  <p>Los sustantivos comunes van en minúscula: <em>árbol, niño, perro</em></p>
                </div>

                <h3>Inicio de oración:</h3>
                <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32">
                  <p>Toda oración inicia con <strong>mayúscula</strong> después de un punto.</p>
                  <p>Los <strong>nombres propios</strong> siempre llevan mayúscula.</p>
                  <p>Los <strong>países</strong> llevan mayúscula: <em>Costa Rica</em></p>
                </div>
              `,
              questions: [
                { type:'selection', skill:'selection', q:'¿Qué es un sustantivo?', opts:['Una palabra que describe','Una palabra que nombra personas, cosas, animales o lugares','Una palabra de acción','Una palabra que une ideas'], ans:'Una palabra que nombra personas, cosas, animales o lugares' },
                { type:'selection', skill:'selection', q:'¿Cuál de estas palabras es un SUSTANTIVO?', opts:['correr','grande','árbol','rápidamente'], ans:'árbol' },
                { type:'fill', skill:'speaking', q:'La palabra "flor" es un ___ porque nombra una cosa.', ans:'sustantivo' },
                { type:'selection', skill:'selection', q:'¿Cuál sustantivo debe ir con MAYÚSCULA?', opts:['árbol','perro','Fabián','casa'], ans:'Fabián' },
                { type:'selection', skill:'listening', q:'¿Cuál de estas palabras NO es un sustantivo?', opts:['mesa','libro','verde','oso'], ans:'verde' },
                { type:'selection', skill:'selection', q:'"Costa Rica" lleva mayúscula porque es...', opts:['un adjetivo','un sustantivo común','un nombre propio (país)','un artículo'], ans:'un nombre propio (país)' },
                { type:'fill', skill:'speaking', q:'"oso, libro, mesa" son ejemplos de ___.', ans:'sustantivos' },
                { type:'selection', skill:'selection', q:'¿Cuál grupo contiene SOLO sustantivos?', opts:['rojo, azul, verde','correr, saltar, jugar','oso, libro, mesa','grande, pequeño, bonito'], ans:'oso, libro, mesa' },
              ]
            },

            // ──────────────────────────────────────────────
            // 5. ADJETIVOS CALIFICATIVOS
            // ──────────────────────────────────────────────
            {
              id: 'adjetivos',
              title: 'Adjetivos Calificativos',
              icon: '🎨',
              content: `
                <h3>Adjetivos Calificativos 🎨</h3>

                <div class="rule-box" style="background:#FCE4EC;border-left:4px solid #C62828">
                  <p><strong>¿Qué es un adjetivo calificativo?</strong></p>
                  <p>Son palabras que <strong>describen como son las cosas</strong>. Dan características al sustantivo.</p>
                  <p>Ejemplos: <em>casa grande, flor roja, árbol verde, mariposas hermosas</em></p>
                </div>

                <div class="rule-box" style="background:#EDE7F6;border-left:4px solid #7C4DFF">
                  <p><strong>Recuerda dibujar un sustantivo y adjunto un adjetivo:</strong></p>
                  <p>🌺 flor → <strong>roja</strong> (adjetivo)</p>
                  <p>🌳 árbol → <strong>verde</strong> (adjetivo)</p>
                  <p>🦋 mariposa → <strong>hermosa</strong> (adjetivo)</p>
                </div>

                <h3>Del texto "Las hermosas mariposas":</h3>
                <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32">
                  <p>Texto: <em>"Las hermosas mariposas volaban cerca de la jirafa triste. De pronto, un árbol frondoso dejó caer unas ricas manzanas al suelo del bosque."</em></p>
                  <p>Artículos definidos: <strong>las, la, el</strong></p>
                  <p>Artículos indefinidos: <strong>un, unas</strong></p>
                  <p>Adjetivos: <strong>hermosas, triste, frondoso, ricas</strong></p>
                </div>
              `,
              questions: [
                { type:'selection', skill:'selection', q:'¿Qué hace un adjetivo calificativo?', opts:['Nombra personas o cosas','Describe cómo son las cosas','Une palabras en una oración','Indica acción'], ans:'Describe cómo son las cosas' },
                { type:'selection', skill:'selection', q:'En "flor roja", ¿cuál es el adjetivo?', opts:['flor','la','roja','una'], ans:'roja' },
                { type:'fill', skill:'speaking', q:'En "árbol frondoso", el adjetivo calificativo es ___.', ans:'frondoso' },
                { type:'selection', skill:'selection', q:'¿Cuál es el adjetivo en "mariposas hermosas"?', opts:['mariposas','las','hermosas','vuelan'], ans:'hermosas' },
                { type:'selection', skill:'listening', q:'¿Cuál de estas palabras es un ADJETIVO?', opts:['árbol','correr','grande','casa'], ans:'grande' },
                { type:'selection', skill:'selection', q:'En el texto, ¿cuál es el adjetivo de "jirafa ___"?', opts:['frondosa','hermosa','triste','ricas'], ans:'triste' },
                { type:'fill', skill:'speaking', q:'"Manzanas ricas" — el adjetivo calificativo es ___.', ans:'ricas' },
                { type:'selection', skill:'selection', q:'¿Cuál grupo tiene SOLO adjetivos calificativos?', opts:['árbol, flor, casa','correr, saltar, jugar','grande, hermoso, triste','el, la, los'], ans:'grande, hermoso, triste' },
              ]
            },

            // ──────────────────────────────────────────────
            // 6. ARTÍCULOS DEFINIDOS E INDEFINIDOS
            // ──────────────────────────────────────────────
            {
              id: 'articulos',
              title: 'Artículos Definidos e Indefinidos',
              icon: '📌',
              content: `
                <h3>Artículos Definidos e Indefinidos 📌</h3>

                <div class="rule-box" style="background:#E3F2FD;border-left:4px solid #1565C0">
                  <p><strong>Artículos DEFINIDOS</strong> — hablan de algo específico/conocido:</p>
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
                    <div style="background:#fff;border-radius:8px;padding:8px;text-align:center"><strong>el</strong> (masc. sing.)</div>
                    <div style="background:#fff;border-radius:8px;padding:8px;text-align:center"><strong>la</strong> (fem. sing.)</div>
                    <div style="background:#fff;border-radius:8px;padding:8px;text-align:center"><strong>los</strong> (masc. plur.)</div>
                    <div style="background:#fff;border-radius:8px;padding:8px;text-align:center"><strong>las</strong> (fem. plur.)</div>
                  </div>
                </div>

                <div class="rule-box" style="background:#FFF3E0;border-left:4px solid #E65100;margin-top:12px">
                  <p><strong>Artículos INDEFINIDOS</strong> — hablan de algo no específico:</p>
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
                    <div style="background:#fff;border-radius:8px;padding:8px;text-align:center"><strong>un</strong> (masc. sing.)</div>
                    <div style="background:#fff;border-radius:8px;padding:8px;text-align:center"><strong>una</strong> (fem. sing.)</div>
                    <div style="background:#fff;border-radius:8px;padding:8px;text-align:center"><strong>unos</strong> (masc. plur.)</div>
                    <div style="background:#fff;border-radius:8px;padding:8px;text-align:center"><strong>unas</strong> (fem. plur.)</div>
                  </div>
                </div>

                <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32;margin-top:12px">
                  <p><strong>Del texto:</strong> "Las hermosas mariposas... un árbol frondoso... unas ricas manzanas..."</p>
                  <p>Definidos: <strong>las</strong> mariposas, <strong>la</strong> jirafa, <strong>el</strong> bosque</p>
                  <p>Indefinidos: <strong>un</strong> árbol, <strong>unas</strong> manzanas</p>
                </div>
              `,
              questions: [
                { type:'selection', skill:'selection', q:'¿Cuál es un artículo DEFINIDO?', opts:['un','una','el','unos'], ans:'el' },
                { type:'selection', skill:'selection', q:'¿Cuál es un artículo INDEFINIDO?', opts:['el','la','los','un'], ans:'un' },
                { type:'fill', skill:'speaking', q:'"___ mariposas" — artículo definido femenino plural.', ans:'las' },
                { type:'selection', skill:'selection', q:'En "___ árbol frondoso", el artículo es indefinido porque...', opts:['es un árbol específico','es cualquier árbol, no uno conocido','es femenino','es plural'], ans:'es cualquier árbol, no uno conocido' },
                { type:'selection', skill:'selection', q:'¿Cuál artículo corresponde a "femenino plural indefinido"?', opts:['la','las','una','unas'], ans:'unas' },
                { type:'selection', skill:'listening', q:'¿Cuál artículo es DEFINIDO masculino singular?', opts:['un','una','el','los'], ans:'el' },
                { type:'fill', skill:'speaking', q:'"___ manzanas" — artículo indefinido femenino plural.', ans:'unas' },
                { type:'selection', skill:'selection', q:'Los artículos definidos son:', opts:['un, una, unos, unas','el, la, los, las','un, la, los, unas','el, una, los, unas'], ans:'el, la, los, las' },
                { type:'selection', skill:'selection', q:'¿Cuál artículo es INDEFINIDO masculino plural?', opts:['el','los','un','unos'], ans:'unos' },
                { type:'fill', skill:'speaking', q:'"___ niño" — artículo definido masculino singular.', ans:'el' },
              ]
            },

            // ──────────────────────────────────────────────
            // 7. CONCORDANCIA GÉNERO Y NÚMERO
            // ──────────────────────────────────────────────
            {
              id: 'concordancia',
              title: 'Concordancia: Género y Número',
              icon: '⚖️',
              content: `
                <h3>Concordancia: Género y Número ⚖️</h3>

                <div class="rule-box" style="background:#E3F2FD;border-left:4px solid #1565C0">
                  <p><strong>¿Qué es la concordancia?</strong></p>
                  <p>Es el trabajo en equipo de las palabras. El artículo, el adjetivo y el sustantivo deben concordar en <strong>género (femenino/masculino)</strong> y <strong>número (singular/plural)</strong>.</p>
                </div>

                <div class="rule-box" style="background:#EDE7F6;border-left:4px solid #7C4DFF">
                  <p><strong>Género:</strong></p>
                  <p>Femenino → generalmente termina en <strong>-a</strong>: la niña bonita</p>
                  <p>Masculino → generalmente termina en <strong>-o</strong>: el niño bonito</p>
                </div>

                <div class="rule-box" style="background:#FFF3E0;border-left:4px solid #E65100">
                  <p><strong>Número:</strong></p>
                  <p>Singular (1 objeto/persona): el árbol gigante</p>
                  <p>Plural (2 o más): los árboles gigantes</p>
                </div>

                <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32">
                  <p><strong>Ejemplos correctos:</strong></p>
                  <p>✅ <em>la ardilla chispeante</em> (fem. sing.)</p>
                  <p>✅ <em>las mariposas hermosas</em> (fem. plur.)</p>
                  <p>✅ <em>el árbol gigante</em> (masc. sing.)</p>
                  <p>✅ <em>los monos chistosos</em> (masc. plur.)</p>
                  <p>❌ <em>el ardilla chispeante</em> — incorrecto, ardilla es femenino</p>
                </div>
              `,
              questions: [
                { type:'selection', skill:'selection', q:'"___ ardilla chispeante" — ¿cuál artículo corresponde?', opts:['el','los','la','las'], ans:'la' },
                { type:'selection', skill:'selection', q:'"___ monos chistosos" — ¿cuál artículo corresponde?', opts:['el','la','los','las'], ans:'los' },
                { type:'fill', skill:'speaking', q:'"Las mariposas ___" — el adjetivo debe ser femenino plural de "hermoso".', ans:'hermosas' },
                { type:'selection', skill:'selection', q:'¿Cuál frase tiene concordancia CORRECTA?', opts:['el niña bonito','la niño bonita','el niño bonito','los niña bonito'], ans:'el niño bonito' },
                { type:'selection', skill:'listening', q:'"El árbol gigante" — ¿qué género y número tiene?', opts:['femenino plural','masculino singular','femenino singular','masculino plural'], ans:'masculino singular' },
                { type:'selection', skill:'selection', q:'¿Cuál frase tiene concordancia CORRECTA?', opts:['los mariposa bonitas','las mariposas bonitas','la mariposas bonita','los mariposas bonito'], ans:'las mariposas bonitas' },
                { type:'fill', skill:'speaking', q:'"Los monos ___" — el adjetivo de "chistoso" en masculino plural es ___.', ans:'chistosos' },
                { type:'selection', skill:'selection', q:'Para que haya concordancia, el artículo, sustantivo y adjetivo deben coincidir en...', opts:['color y tamaño','género y número','inicio y final','sílabas y letras'], ans:'género y número' },
              ]
            },

            // ──────────────────────────────────────────────
            // 8. USO DE MAYÚSCULAS Y PUNTOS
            // ──────────────────────────────────────────────
            {
              id: 'mayusculas-puntos',
              title: 'Mayúsculas y Puntos',
              icon: '✍️',
              content: `
                <h3>Uso de Mayúsculas y Puntos ✍️</h3>

                <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32">
                  <p><strong>Mayúscula se usa cuando:</strong></p>
                  <p>✅ Inicia una oración: <em>"El elefante es grande."</em></p>
                  <p>✅ Después de un punto: <em>"...come plantas. Los elefantes son..."</em></p>
                  <p>✅ Nombres propios: <em>Fabián, Costa Rica, Heredia</em></p>
                  <p>✅ Inicio de cada oración</p>
                </div>

                <div class="rule-box" style="background:#FFF3E0;border-left:4px solid #E65100">
                  <p><strong>Tipos de punto:</strong></p>
                  <p>📍 <strong>Punto seguido (.)</strong> — separa oraciones dentro de un párrafo. La siguiente oración sigue en la misma línea.</p>
                  <p>📍 <strong>Punto aparte (.)</strong> — termina un párrafo. La siguiente oración comienza en otra línea.</p>
                  <p>📍 <strong>Punto final (.)</strong> — termina el texto completo.</p>
                </div>

                <div class="rule-box" style="background:#EDE7F6;border-left:4px solid #7C4DFF">
                  <p><strong>El artículo:</strong> sirve para acompañar al sustantivo. Va antes del sustantivo y después de él va un punto, se inicia la oración con mayúscula.</p>
                  <p>Ejemplo: <em>"Mi nombre es Fabián. Tengo 8 años."</em></p>
                </div>
              `,
              questions: [
                { type:'selection', skill:'selection', q:'¿Cuándo se usa la mayúscula?', opts:['Solo en palabras largas','Al inicio de una oración y en nombres propios','Solo en los títulos','Nunca en medio de una oración'], ans:'Al inicio de una oración y en nombres propios' },
                { type:'selection', skill:'selection', q:'El punto que separa oraciones dentro del mismo párrafo se llama...', opts:['punto aparte','punto final','punto seguido','punto y coma'], ans:'punto seguido' },
                { type:'fill', skill:'speaking', q:'El punto que termina todo el texto se llama punto ___.', ans:'final' },
                { type:'selection', skill:'selection', q:'¿Cuál oración está CORRECTAMENTE escrita?', opts:['el perro es grande.','El perro es grande.','el Perro es grande.','El perro Es grande.'], ans:'El perro es grande.' },
                { type:'selection', skill:'listening', q:'¿Cuándo se pone mayúscula en el nombre "costa rica"?', opts:['Nunca','Siempre, porque es nombre propio','Solo al final','Solo cuando está en el título'], ans:'Siempre, porque es nombre propio' },
                { type:'selection', skill:'selection', q:'El punto que termina un párrafo y la siguiente idea comienza en otra línea es...', opts:['punto seguido','punto aparte','punto final','dos puntos'], ans:'punto aparte' },
                { type:'fill', skill:'speaking', q:'Después de un punto, la siguiente palabra debe iniciar con ___.', ans:'mayúscula' },
                { type:'selection', skill:'selection', q:'¿Cuál nombre propio está CORRECTAMENTE escrito?', opts:['costa rica','Costa rica','costa Rica','Costa Rica'], ans:'Costa Rica' },
              ]
            },

            // ──────────────────────────────────────────────
            // 9. COMPRENSIÓN LECTORA
            // ──────────────────────────────────────────────
            {
              id: 'comprension',
              title: 'Comprensión Lectora',
              icon: '🔍',
              content: `
                <h3>Comprensión Lectora 🔍</h3>

                <div class="rule-box" style="background:#E3F2FD;border-left:4px solid #1565C0">
                  <p><strong>¿Qué es la comprensión lectora?</strong></p>
                  <p>Es entender lo que lees. Se contestan preguntas sobre el texto usando la información del mismo.</p>
                </div>

                <h3>Lectura: "La Caza de las Ballenas"</h3>
                <div class="rule-box" style="background:#F3F4F6;border-left:4px solid #607D8B">
                  <p>Desde hace muchos años el hombre se ha dedicado a cazar ballenas para aprovechar su grasa. Antiguamente los balleneros se acercaban con sus embarcaciones y daban caza a estos enormes animales con sus arpones lanzados con fuerza. Hoy en día las ballenas se buscan con radar y los arpones son disparados con potentes cañones. Este tipo de caza ha supuesto casi la desaparición de las ballenas. Afortunadamente muchos países han firmado acuerdos para prohibir su caza.</p>
                </div>

                <h3>Lectura: "Mi visita al zoológico"</h3>
                <div class="rule-box" style="background:#F3F4F6;border-left:4px solid #607D8B">
                  <p>Un día fui al zoológico con mi familia. Caminé y observé muchos animales. Mi favorito fue el tigre. Aprendí que los animales necesitan cuidado y respeto. Al final del paseo, me sentí muy feliz.</p>
                </div>

                <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32">
                  <p><strong>Estrategia:</strong> Lee el texto completo primero. Luego busca la respuesta dentro del texto. ¡La respuesta siempre está ahí!</p>
                </div>
              `,
              questions: [
                { type:'selection', skill:'listening', q:'Según "La Caza de las Ballenas", ¿por qué se cazaban las ballenas?', opts:['Para usarlas como mascotas','Para aprovechar su grasa','Para estudiarlas','Para llevarlas al zoológico'], ans:'Para aprovechar su grasa' },
                { type:'selection', skill:'selection', q:'¿Cómo se cazaban las ballenas antiguamente?', opts:['Con radar y cañones','Con redes grandes','Con embarcaciones y arpones','Con helicópteros'], ans:'Con embarcaciones y arpones' },
                { type:'selection', skill:'selection', q:'¿Cómo se buscan las ballenas hoy en día?', opts:['Con arpones a mano','Con radar','Con embarcaciones pequeñas','Con redes'], ans:'Con radar' },
                { type:'fill', skill:'speaking', q:'Los cañones se utilizan porque alcanzan mayores ___.', ans:'distancias' },
                { type:'selection', skill:'selection', q:'En "Mi visita al zoológico", ¿a dónde fue la niña?', opts:['Al parque','Al cine','Al zoológico','Al museo'], ans:'Al zoológico' },
                { type:'selection', skill:'selection', q:'¿Cuál fue el animal favorito en la visita al zoológico?', opts:['El elefante','El tigre','El conejo','El oso'], ans:'El tigre' },
                { type:'selection', skill:'listening', q:'¿Cómo debemos tratar a los animales según la lectura del zoológico?', opts:['Con gritos y sin comida','Con cariño y respeto','Sin tocarlos nunca','Cazándolos'], ans:'Con cariño y respeto' },
                { type:'selection', skill:'selection', q:'Muchos países han firmado acuerdos para...', opts:['cazar más ballenas','vender las ballenas','prohibir la caza de ballenas','estudiar las ballenas'], ans:'prohibir la caza de ballenas' },
              ]
            },

          ] // end topics
        }
      ] // end units
    }; // end espanol

    console.log('✅ Español content for Fabián loaded.');
  }

  register();
})();
