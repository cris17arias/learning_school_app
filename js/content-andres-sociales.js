// ============================================================
//  content-andres-estudios-sociales.js
//  Estudios Sociales y Educación Cívica — Andrés · 1.° Grado
//  Escuela Ramón Barrantes Herrera
//  Maestra: Licda. Elizabeth Vargas Cruz
//
//  Notas: Solo preguntas de selección y completar simples.
//  Andrés tiene 6 años — sin respuestas escritas complejas.
//
//  Temas extraídos del libro de Andrés (Abril–Mayo 2026):
//  Unidad 1: ¿Qué son los Estudios Sociales y la Educación Cívica?
//           - Definición y características de los Estudios Sociales
//           - Características de la Educación Cívica
//  Unidad 2: La Comunidad y su Entorno
//           - Historia, relieve, actividades, ubicación
//           - Mapa de Costa Rica
//  Unidad 3: Símbolos Nacionales y Patria
//           - Símbolos Nacionales
//           - Batalla de Santa Rosa (20 de marzo)
// ============================================================

CONTENT.andres.estudiosSociales = {
  units: [

    // ══════════════════════════════════════════════════════
    //  UNIT 1 — ¿Qué son los Estudios Sociales y la Cívica?
    // ══════════════════════════════════════════════════════
    {
      id: 'sociales-u1',
      title: 'Unidad 1 — Estudios Sociales y Educación Cívica',
      theme: 'Conocernos a nosotros mismos, a la familia y la comunidad',
      essentialQuestion: '¿Qué son los Estudios Sociales y la Educación Cívica?',
      status: 'active',
      topics: [

        // ── TOPIC 1: ¿Qué son los Estudios Sociales? ──────
        {
          id: 'que-son-estudios-sociales',
          title: '¿Qué son los Estudios Sociales?',
          icon: '📚',
          content: `
            <h3>¿Qué son los Estudios Sociales? 📚</h3>
            <div class="rule-box" style="background:#E3F2FD;border-left:4px solid #1565C0">
              <p>Los <strong>Estudios Sociales</strong> son una aventura que nos enseña a:</p>
              <p>👨‍👩‍👧 Conocernos a nosotros mismos, a nuestra familia y a nuestra comunidad.</p>
              <p>📜 Descubrir de dónde venimos a través de la historia.</p>
              <p>🏠 Cuidar el lugar donde vivimos: nuestra casa, escuela y país.</p>
              <p>🤝 Aprender a vivir juntos con respeto y alegría.</p>
              <p>🇨🇷 Ser mejores ciudadanos de Costa Rica.</p>
            </div>
            <h3 style="margin-top:12px">Características de los Estudios Sociales</h3>
            <div class="vocab-grid">
              <div class="vocab-item">🌳 <strong>Comprender nuestras raíces</strong><br>Cómo ha cambiado la ciudad con el tiempo</div>
              <div class="vocab-item">📖 <strong>Conectar eventos históricos</strong><br>Y las acciones de nuestros antepasados</div>
              <div class="vocab-item">🗳️ <strong>Participar activamente</strong><br>En la vida económica, política y cultural</div>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Qué nos enseñan los Estudios Sociales? 📚', opts:['Solo a contar','A conocernos, a nuestra familia y comunidad','Solo a dibujar','Solo a cantar'], ans:'A conocernos, a nuestra familia y comunidad' },
            { type:'selection', skill:'selection', q:'¿De qué país somos? 🇨🇷', opts:['México','Costa Rica','España','Argentina'], ans:'Costa Rica' },
            { type:'selection', skill:'selection', q:'Los Estudios Sociales nos ayudan a descubrir de dónde venimos a través de la ___.', opts:['música','historia','televisión','radio'], ans:'historia' },
            { type:'selection', skill:'selection', q:'¿Qué lugares debemos cuidar?', opts:['Solo la escuela','Solo la casa','La casa, la escuela y el país','Solo el parque' ], ans:'La casa, la escuela y el país' },
            { type:'selection', skill:'selection', q:'¿Cómo debemos vivir juntos?', opts:['Con peleas','Con respeto y alegría','Con tristeza','Sin hablar'], ans:'Con respeto y alegría' },
            { type:'selection', skill:'listening', q:'Los Estudios Sociales nos ayudan a ser mejores ___.', opts:['ciudadanos','dibujantes','cantantes','jugadores'], ans:'ciudadanos' },
            { type:'selection', skill:'selection', q:'¿Qué son las raíces en Estudios Sociales?', opts:['Las raíces de un árbol','De dónde venimos, nuestra historia','Solo las plantas','Solo los animales'], ans:'De dónde venimos, nuestra historia' },
            { type:'fill', skill:'speaking', q:'Somos ciudadanos de ___ Rica.', ans:'Costa' }
          ]
        },

        // ── TOPIC 2: Educación Cívica ─────────────────────
        {
          id: 'educacion-civica',
          title: 'Educación Cívica — Características',
          icon: '🤝',
          content: `
            <h3>Educación Cívica 🤝</h3>
            <p>La <strong>Educación Cívica</strong> nos enseña a ser buenos ciudadanos y a vivir en armonía con los demás.</p>

            <h3 style="margin-top:12px">Características de la Educación Cívica</h3>
            <div class="vocab-grid">
              <div class="vocab-item">🌎 <strong>Diversidad y tolerancia</strong><br>Enseña la importancia de aceptar las diferentes formas de ser y pensar</div>
              <div class="vocab-item">🙋 <strong>Respeto a las personas</strong><br>Sin importar si son adultos, mayores, jóvenes o niños</div>
              <div class="vocab-item">☮️ <strong>Resolver conflictos en paz</strong><br>Primero escuchando y luego expresando nuestras ideas</div>
              <div class="vocab-item">🇨🇷 <strong>Símbolos nacionales</strong><br>Conocer y respetar los símbolos de la patria</div>
              <div class="vocab-item">🗳️ <strong>Participación ciudadana</strong><br>Votar en elecciones, debatir y formar parte de organizaciones</div>
              <div class="vocab-item">🎭 <strong>Actividades culturales</strong><br>Participar en bailes, fiestas y tradiciones</div>
            </div>

            <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32;margin-top:10px">
              <p><strong>Ejemplos de Educación Cívica:</strong></p>
              <p>♻️ Reciclar la basura · 🦷 Cuidar nuestra higiene · 🚴 Respetar las normas al andar en bicicleta</p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Qué nos enseña la Educación Cívica? 🤝', opts:['A jugar fútbol','A ser buenos ciudadanos','A cocinar','A bailar solo'], ans:'A ser buenos ciudadanos' },
            { type:'selection', skill:'selection', q:'¿Cómo debemos resolver los conflictos? ☮️', opts:['Peleando','Gritando','Pacíficamente, escuchando','Llorando'], ans:'Pacíficamente, escuchando' },
            { type:'selection', skill:'selection', q:'¿A quién debemos respetar?', opts:['Solo a los niños','Solo a los adultos','A todas las personas','Solo a la familia'], ans:'A todas las personas' },
            { type:'selection', skill:'selection', q:'¿Qué es reciclar? ♻️', opts:['Tirar basura al suelo','Separar la basura para reusarla','Romper cosas','Esconder basura'], ans:'Separar la basura para reusarla' },
            { type:'selection', skill:'selection', q:'¿Qué hacemos en una elección? 🗳️', opts:['Comemos','Votamos','Dormimos','Cantamos'], ans:'Votamos' },
            { type:'selection', skill:'selection', q:'La Educación Cívica fomenta valores como la justicia y la ___.', opts:['pelea','igualdad','tristeza','envidia'], ans:'igualdad' },
            { type:'selection', skill:'selection', q:'¿Cuál es una actividad cultural? 🎭', opts:['Pegarle a alguien','Bailar en una fiesta tradicional','Romper juguetes','Gritar'], ans:'Bailar en una fiesta tradicional' },
            { type:'selection', skill:'listening', q:'Para resolver un problema con un amigo, primero debemos ___.', opts:['gritar','pelear','escuchar','correr'], ans:'escuchar' },
            { type:'fill', skill:'speaking', q:'Debemos respetar nuestros ___ nacionales (la bandera, el escudo, el himno).', ans:'símbolos' }
          ]
        }

      ]
    },

    // ══════════════════════════════════════════════════════
    //  UNIT 2 — La Comunidad y su Entorno
    // ══════════════════════════════════════════════════════
    {
      id: 'sociales-u2',
      title: 'Unidad 2 — La Comunidad y su Entorno',
      theme: 'La historia, el relieve y las actividades de la comunidad',
      essentialQuestion: '¿Cómo es nuestra comunidad y dónde vivimos?',
      status: 'active',
      topics: [

        // ── TOPIC 1: La Comunidad ─────────────────────────
        {
          id: 'la-comunidad',
          title: 'La Comunidad y su Historia',
          icon: '🏘️',
          content: `
            <h3>La Comunidad 🏘️</h3>
            <p>Una <strong>comunidad</strong> es el grupo de personas que viven cerca y comparten un mismo lugar.</p>

            <h3 style="margin-top:12px">Las comunidades tienen historia</h3>
            <div class="rule-box" style="background:#FFF3E0;border-left:4px solid #EF6C00">
              <p>🏚️ En el pasado, las casas y edificios eran diferentes.</p>
              <p>👷 Las ocupaciones (trabajos) de las personas han cambiado.</p>
              <p>📱 Antes no existía la tecnología que usamos hoy.</p>
            </div>

            <h3 style="margin-top:12px">El relieve varía en las comunidades</h3>
            <div class="vocab-grid">
              <div class="vocab-item">🏔️ <strong>Montañas</strong></div>
              <div class="vocab-item">🌊 <strong>Ríos</strong></div>
              <div class="vocab-item">🏖️ <strong>Costas</strong></div>
              <div class="vocab-item">🌋 <strong>Volcanes</strong></div>
            </div>

            <h3 style="margin-top:12px">Actividades de las personas</h3>
            <div class="vocab-grid">
              <div class="vocab-item">🌾 <strong>Agricultura</strong></div>
              <div class="vocab-item">🐄 <strong>Ganadería</strong></div>
              <div class="vocab-item">🎣 <strong>Pesca</strong></div>
              <div class="vocab-item">🧶 <strong>Artesanía</strong></div>
              <div class="vocab-item">🏪 <strong>Comercio</strong></div>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Qué es una comunidad? 🏘️', opts:['Un solo niño','Un grupo de personas que viven cerca','Un animal','Un libro'], ans:'Un grupo de personas que viven cerca' },
            { type:'selection', skill:'selection', q:'¿Cómo eran las casas en el pasado?', opts:['Iguales a las de hoy','Diferentes a las de hoy','No existían','Hechas de plástico'], ans:'Diferentes a las de hoy' },
            { type:'selection', skill:'selection', q:'¿Qué actividad usa la tierra para sembrar plantas? 🌾', opts:['Pesca','Agricultura','Comercio','Ganadería'], ans:'Agricultura' },
            { type:'selection', skill:'selection', q:'¿Qué actividad cría animales como vacas? 🐄', opts:['Agricultura','Pesca','Ganadería','Artesanía'], ans:'Ganadería' },
            { type:'selection', skill:'selection', q:'¿Qué actividad atrapa peces del mar o ríos? 🎣', opts:['Pesca','Ganadería','Comercio','Agricultura'], ans:'Pesca' },
            { type:'selection', skill:'selection', q:'¿Qué accidente geográfico tiene fuego y lava? 🌋', opts:['Río','Montaña','Volcán','Costa'], ans:'Volcán' },
            { type:'selection', skill:'selection', q:'¿Qué es el comercio? 🏪', opts:['Sembrar plantas','Comprar y vender cosas','Pescar','Cantar'], ans:'Comprar y vender cosas' },
            { type:'selection', skill:'listening', q:'Las montañas, ríos, costas y volcanes son parte del ___.', opts:['relieve','dibujo','baile','juego'], ans:'relieve' },
            { type:'fill', skill:'speaking', q:'La actividad que hace ropa o cosas a mano se llama ___.', ans:'artesanía' }
          ]
        },

        // ── TOPIC 2: Costa Rica ───────────────────────────
        {
          id: 'costa-rica',
          title: 'Costa Rica — Nuestro País',
          icon: '🇨🇷',
          content: `
            <h3>Costa Rica 🇨🇷</h3>
            <p>Costa Rica es nuestro país. Es importante saber dónde vivimos.</p>

            <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32">
              <p>📍 Costa Rica está en <strong>Centroamérica</strong>.</p>
              <p>🌎 Sus colores son el azul, blanco y rojo.</p>
              <p>🏔️ Tiene montañas, ríos, playas y volcanes.</p>
            </div>

            <h3 style="margin-top:12px">¿Dónde vivimos?</h3>
            <div class="vocab-grid">
              <div class="vocab-item">🏠 <strong>Mi casa</strong><br>Donde vive mi familia</div>
              <div class="vocab-item">🏘️ <strong>Mi comunidad</strong><br>Donde están mis vecinos</div>
              <div class="vocab-item">📍 <strong>Mi distrito</strong><br>Parte de la provincia</div>
              <div class="vocab-item">🗺️ <strong>Mi provincia</strong><br>Parte del país</div>
              <div class="vocab-item">🇨🇷 <strong>Mi país</strong><br>Costa Rica</div>
            </div>

            <div class="rule-box" style="background:#FFF9C4;border-left:4px solid #F9A825;margin-top:10px">
              <p>Las 7 provincias de Costa Rica son:</p>
              <p>San José · Alajuela · Cartago · Heredia · Guanacaste · Puntarenas · Limón</p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Cómo se llama nuestro país? 🇨🇷', opts:['México','Costa Rica','Panamá','España'], ans:'Costa Rica' },
            { type:'selection', skill:'selection', q:'¿En qué región está Costa Rica? 🌎', opts:['Europa','Asia','Centroamérica','África'], ans:'Centroamérica' },
            { type:'selection', skill:'selection', q:'¿Cuántas provincias tiene Costa Rica?', opts:['5','6','7','8'], ans:'7' },
            { type:'selection', skill:'selection', q:'¿Cuál NO es una provincia de Costa Rica?', opts:['San José','Madrid','Cartago','Limón'], ans:'Madrid' },
            { type:'selection', skill:'selection', q:'¿Dónde vive mi familia? 🏠', opts:['En la escuela','En mi casa','En el parque','En el supermercado'], ans:'En mi casa' },
            { type:'selection', skill:'selection', q:'¿Cómo se llama el lugar donde están mis vecinos? 🏘️', opts:['El país','La comunidad','La luna','El bosque'], ans:'La comunidad' },
            { type:'selection', skill:'listening', q:'Mi provincia es parte de mi ___.', opts:['casa','escuela','país','juguete'], ans:'país' },
            { type:'fill', skill:'speaking', q:'Yo vivo en el país de Costa ___.', ans:'Rica' }
          ]
        }

      ]
    },

    // ══════════════════════════════════════════════════════
    //  UNIT 3 — Símbolos Nacionales y Patria
    // ══════════════════════════════════════════════════════
    {
      id: 'sociales-u3',
      title: 'Unidad 3 — Símbolos Nacionales y Patria',
      theme: 'Amor por la patria y nuestros símbolos',
      essentialQuestion: '¿Cuáles son nuestros símbolos nacionales?',
      status: 'active',
      topics: [

        // ── TOPIC 1: Símbolos Nacionales ──────────────────
        {
          id: 'simbolos-nacionales',
          title: 'Símbolos Nacionales',
          icon: '🇨🇷',
          content: `
            <h3>Símbolos Nacionales 🇨🇷</h3>
            <p>Los <strong>símbolos nacionales</strong> representan a nuestro país y nos llenan de orgullo.</p>

            <div class="vocab-grid">
              <div class="vocab-item">🚩 <strong>La Bandera</strong><br>Azul, blanco y rojo</div>
              <div class="vocab-item">🛡️ <strong>El Escudo Nacional</strong><br>Con montañas y mares</div>
              <div class="vocab-item">🎵 <strong>El Himno Nacional</strong><br>Lo cantamos con respeto</div>
              <div class="vocab-item">🌳 <strong>El Guanacaste</strong><br>El árbol nacional</div>
              <div class="vocab-item">🌸 <strong>La Guaria Morada</strong><br>La flor nacional</div>
              <div class="vocab-item">🐂 <strong>El Boyero y la Carreta</strong><br>Tradición cultural</div>
              <div class="vocab-item">🦌 <strong>El Venado</strong><br>Animal nacional</div>
              <div class="vocab-item">🐦 <strong>El Yigüirro</strong><br>Ave nacional</div>
            </div>

            <div class="rule-box" style="background:#E3F2FD;border-left:4px solid #1565C0;margin-top:10px">
              <p>Debemos <strong>respetar</strong> nuestros símbolos nacionales porque representan a Costa Rica.</p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿De qué colores es la bandera de Costa Rica? 🚩', opts:['Verde, amarillo y rojo','Azul, blanco y rojo','Negro y blanco','Rosa y morado'], ans:'Azul, blanco y rojo' },
            { type:'selection', skill:'selection', q:'¿Cuál es el árbol nacional de Costa Rica? 🌳', opts:['Pino','Guanacaste','Manzano','Roble'], ans:'Guanacaste' },
            { type:'selection', skill:'selection', q:'¿Cuál es la flor nacional? 🌸', opts:['Rosa','Girasol','Guaria Morada','Margarita'], ans:'Guaria Morada' },
            { type:'selection', skill:'selection', q:'¿Cuál es el ave nacional? 🐦', opts:['Águila','Yigüirro','Loro','Paloma'], ans:'Yigüirro' },
            { type:'selection', skill:'selection', q:'¿Qué cantamos con respeto? 🎵', opts:['Una canción de cumpleaños','El Himno Nacional','Una canción de rock','Una ronda'], ans:'El Himno Nacional' },
            { type:'selection', skill:'selection', q:'¿Cómo debemos tratar los símbolos nacionales?', opts:['Con burla','Con respeto','Sin importancia','Con tristeza'], ans:'Con respeto' },
            { type:'selection', skill:'listening', q:'El escudo nacional tiene montañas y ___.', opts:['edificios','mares','carros','aviones'], ans:'mares' },
            { type:'fill', skill:'speaking', q:'La bandera, el escudo y el himno son símbolos ___.', ans:'nacionales' }
          ]
        },

        // ── TOPIC 2: Batalla de Santa Rosa ────────────────
        {
          id: 'batalla-santa-rosa',
          title: 'Batalla de Santa Rosa',
          icon: '⚔️',
          content: `
            <h3>Batalla de Santa Rosa ⚔️</h3>
            <div class="rule-box" style="background:#FCE4EC;border-left:4px solid #C62828">
              <p>La <strong>Batalla de Santa Rosa</strong> ocurrió el <strong>20 de marzo</strong>.</p>
              <p>Los costarricenses defendieron la patria con valor.</p>
            </div>

            <h3 style="margin-top:12px">Poema</h3>
            <div class="rule-box" style="background:#FFF9C4;border-left:4px solid #F9A825">
              <p><em>Fue un 20 de marzo</em><br>
              <em>en un bello lugar</em><br>
              <em>donde los costarricenses</em><br>
              <em>decidieron luchar.</em></p>
              <p><em>Con pala y machete y</em><br>
              <em>mucho valor</em><br>
              <em>defendieron la patria</em><br>
              <em>del invasor.</em></p>
              <p style="text-align:right">— Juanita Méndez</p>
            </div>

            <div class="vocab-grid" style="margin-top:10px">
              <div class="vocab-item">📅 <strong>20 de marzo</strong><br>Fecha de la batalla</div>
              <div class="vocab-item">🪖 <strong>Pala y machete</strong><br>Las armas que usaron</div>
              <div class="vocab-item">💪 <strong>Valor</strong><br>El coraje de los costarricenses</div>
              <div class="vocab-item">🇨🇷 <strong>Patria</strong><br>Costa Rica, nuestro país</div>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿En qué fecha fue la Batalla de Santa Rosa? 📅', opts:['20 de marzo','15 de septiembre','25 de diciembre','1 de enero'], ans:'20 de marzo' },
            { type:'selection', skill:'selection', q:'¿Quiénes defendieron la patria?', opts:['Los invasores','Los costarricenses','Los turistas','Los visitantes'], ans:'Los costarricenses' },
            { type:'selection', skill:'selection', q:'¿Con qué lucharon en la batalla? ⚔️', opts:['Pelotas','Pala y machete','Libros','Lápices'], ans:'Pala y machete' },
            { type:'selection', skill:'selection', q:'¿Qué defendieron los costarricenses?', opts:['Su escuela','La patria','Sus juguetes','Su comida'], ans:'La patria' },
            { type:'selection', skill:'selection', q:'¿Qué demostraron los costarricenses en la batalla?', opts:['Miedo','Valor','Tristeza','Aburrimiento'], ans:'Valor' },
            { type:'selection', skill:'selection', q:'¿Quién escribió el poema "Batalla de Santa Rosa"?', opts:['Andrés','Juanita Méndez','Juan Pérez','María López'], ans:'Juanita Méndez' },
            { type:'selection', skill:'listening', q:'La Batalla de Santa Rosa nos enseña a amar a nuestra ___.', opts:['casa','patria','escuela','calle'], ans:'patria' },
            { type:'fill', skill:'speaking', q:'La Batalla de Santa Rosa fue el 20 de ___.', ans:'marzo' }
          ]
        }

      ]
    }

  ]
};
