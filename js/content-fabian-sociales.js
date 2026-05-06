// ============================================================
//  content-fabian-sociales.js
//  Estudios Sociales — Fabián · 3.° Grado · Sección 3-1
//  Escuela Ramón Barrantes Herrera
//  Maestra: Cinthya Ramírez Z.
//
//  I Prueba — Fecha: Jueves 7 de mayo de 2026
//
//  Temas:
//  1. El mapa — qué es y tipos
//  2. Elementos del mapa
//  3. Costa Rica y sus provincias
//  4. La Batalla de Rivas
//  5. Líneas imaginarias — Paralelos y Meridianos
//  6. Latitud y Longitud
// ============================================================

CONTENT.fabian.sociales = {
  units: [
    {
      id: 'sociales-u1',
      title: 'I Prueba — Estudios Sociales 3.° año',
      theme: 'El Mapa, Costa Rica, Batalla de Rivas y Líneas Imaginarias',
      essentialQuestion: '¿Cómo me ubico en el mundo usando mapas y coordenadas?',
      status: 'active',
      topics: [

        // ── TOPIC 1: El Mapa ──────────────────────────────
        {
          id: 'el-mapa',
          title: 'El Mapa — Qué es y Tipos',
          icon: '🗺️',
          content: `
            <h3>El Mapa 🗺️</h3>
            <div class="rule-box" style="background:#E3F2FD;border-left:4px solid #1565C0">
              <p>El <strong>mapa</strong> es la representación total o una parte de la Tierra por medio de una superficie plana.</p>
              <p>Los mapas sirven para <strong>guiarnos y ubicarnos</strong> en el espacio.</p>
            </div>
            <h3 style="margin-top:12px">Tipos de Mapas</h3>
            <div class="vocab-grid">
              <div class="vocab-item">🌍 <strong>Mapamundi</strong><br>Representa la totalidad de la Tierra</div>
              <div class="vocab-item">🌎 <strong>Mapa continental</strong><br>Representa continentes (ej: mapa de América)</div>
              <div class="vocab-item">🇨🇷 <strong>Mapa de un país</strong><br>Representa un país (ej: mapa de Costa Rica)</div>
              <div class="vocab-item">🏙️ <strong>Mapa de provincias</strong><br>Mapas más pequeños de regiones</div>
            </div>
            <h3 style="margin-top:12px">Tipos según su contenido</h3>
            <div class="vocab-grid">
              <div class="vocab-item">⛰️ <strong>Mapa Físico</strong><br>Muestra formas de relieve: cordilleras, llanuras, ríos, bosques</div>
              <div class="vocab-item">🏛️ <strong>Mapa Político</strong><br>Muestra la división administrativa: provincias, países</div>
              <div class="vocab-item">🌡️ <strong>Mapa Temático</strong><br>Ofrece información sobre un tema específico, como el clima</div>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Qué es un mapa?', opts:['Una foto de la Tierra','La representación total o una parte de la Tierra en superficie plana','Un dibujo de una ciudad','Un libro de geografía'], ans:'La representación total o una parte de la Tierra en superficie plana' },
            { type:'selection', skill:'selection', q:'¿Qué tipo de mapa representa TODA la Tierra?', opts:['Mapa de Costa Rica','Mapa continental','Mapamundi','Mapa de provincias'], ans:'Mapamundi' },
            { type:'fill', skill:'speaking', q:'El mapa que representa continentes como América se llama mapa ___.', ans:'continental' },
            { type:'selection', skill:'listening', q:'¿Qué tipo de mapa muestra cordilleras, ríos y llanuras?', opts:['Mapa político','Mapa temático','Mapa físico','Mapamundi'], ans:'Mapa físico' },
            { type:'selection', skill:'selection', q:'¿Para qué sirve un mapa político?', opts:['Mostrar el clima','Mostrar la división administrativa como provincias y países','Mostrar ríos y montañas','Mostrar la temperatura'], ans:'Mostrar la división administrativa como provincias y países' },
            { type:'selection', skill:'selection', q:'Un mapa que muestra información sobre el clima es un mapa:', opts:['físico','político','temático','continental'], ans:'temático' },
            { type:'fill', skill:'speaking', q:'Los mapas sirven para ___ y ubicarnos en el espacio.', ans:'guiarnos' },
            { type:'selection', skill:'listening', q:'¿Cuál de estos es un mapa más pequeño que el de un país?', opts:['Mapamundi','Mapa continental','Mapa de provincias','Mapa temático'], ans:'Mapa de provincias' },
            { type:'selection', skill:'selection', q:'¿Qué representa el mapa continental de América?', opts:['Solo Costa Rica','Todo el continente americano','El mundo entero','Solo las ciudades'], ans:'Todo el continente americano' },
            { type:'fill', skill:'speaking', q:'El mapa que muestra las formas del terreno como montañas y ríos se llama mapa ___.', ans:'físico' },
          ]
        },

        // ── TOPIC 2: Elementos del Mapa ───────────────────
        {
          id: 'elementos-mapa',
          title: 'Elementos del Mapa',
          icon: '🧭',
          content: `
            <h3>Elementos del Mapa 🧭</h3>
            <p>Los mapas tienen elementos que nos ayudan a leerlos correctamente.</p>
            <div class="vocab-grid">
              <div class="vocab-item">📋 <strong>Título</strong><br>Indica de qué se trata el mapa. También permite conocer al autor.</div>
              <div class="vocab-item">✍️ <strong>Autor / Fuente</strong><br>Quién hizo el mapa y de dónde viene la información.</div>
              <div class="vocab-item">🧭 <strong>Rosa de los Vientos</strong><br>Figura en forma de estrella que indica los puntos cardinales: N, S, E, O.</div>
              <div class="vocab-item">🔢 <strong>Escala numérica</strong><br>Relación entre distancias reales y en el mapa. Ej: 1:1.500.000</div>
              <div class="vocab-item">📏 <strong>Escala gráfica</strong><br>Barra con segmentos para medir distancias. Ej: 1 cm = 15 km</div>
              <div class="vocab-item">🎨 <strong>Escala cromática</strong><br>Serie de colores que identifican altitudes. Verde = tierras bajas, marrón = tierras altas.</div>
              <div class="vocab-item">🔣 <strong>Simbología convencional</strong><br>Dibujos y figuras que explican los elementos del mapa. Puede ser física o convencional.</div>
              <div class="vocab-item">🌐 <strong>Coordenadas geográficas</strong><br>Líneas imaginarias (verticales y horizontales) para localizar un lugar.</div>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Qué elemento del mapa nos dice de qué trata el mapa?', opts:['La escala','La simbología','El título','La rosa de los vientos'], ans:'El título' },
            { type:'selection', skill:'selection', q:'¿Para qué sirve la rosa de los vientos?', opts:['Medir distancias','Indicar los puntos cardinales','Identificar altitudes','Mostrar colores'], ans:'Indicar los puntos cardinales' },
            { type:'fill', skill:'speaking', q:'La escala ___ usa una barra con segmentos para medir distancias en el mapa.', ans:'gráfica' },
            { type:'selection', skill:'listening', q:'En el mapa de Costa Rica la escala es 1:1.500.000. ¿Qué significa?', opts:['1 metro en el mapa = 1.500.000 metros en la realidad','El mapa tiene 1.500.000 colores','Hay 1.500.000 ciudades','El mapa tiene 1.500.000 km'], ans:'1 metro en el mapa = 1.500.000 metros en la realidad' },
            { type:'selection', skill:'selection', q:'¿Qué color representa las tierras bajas en la escala cromática?', opts:['Marrón','Azul','Verde','Rojo'], ans:'Verde' },
            { type:'fill', skill:'speaking', q:'La ___ cromática usa colores para identificar diferentes altitudes en el mapa.', ans:'escala' },
            { type:'selection', skill:'selection', q:'La simbología convencional representa:', opts:['Solo montañas','Elementos creados por el hombre como carreteras','Solo ríos','Los colores del mapa'], ans:'Elementos creados por el hombre como carreteras' },
            { type:'selection', skill:'listening', q:'¿Qué elemento usa líneas imaginarias para localizar lugares?', opts:['La escala gráfica','La rosa de los vientos','Las coordenadas geográficas','La simbología'], ans:'Las coordenadas geográficas' },
            { type:'fill', skill:'speaking', q:'La escala ___ nos dice la relación entre las distancias reales y las del mapa con números como 1:500.000.', ans:'numérica' },
            { type:'selection', skill:'selection', q:'¿Quién es el autor de un mapa?', opts:['El país representado','La persona o institución que lo hizo','El estudiante que lo usa','El presidente'], ans:'La persona o institución que lo hizo' },
          ]
        },

        // ── TOPIC 3: Costa Rica y sus Provincias ──────────
        {
          id: 'costa-rica-provincias',
          title: 'Costa Rica y sus Provincias',
          icon: '🇨🇷',
          content: `
            <h3>Costa Rica 🇨🇷</h3>
            <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32">
              <p>Mi país se llama <strong>Costa Rica</strong>.</p>
              <p>Se ubica en <strong>América Central</strong>.</p>
            </div>
            <h3 style="margin-top:12px">Las 7 Provincias de Costa Rica</h3>
            <div class="vocab-grid">
              <div class="vocab-item">🏙️ <strong>San José</strong> — capital del país</div>
              <div class="vocab-item">🌺 <strong>Alajuela</strong></div>
              <div class="vocab-item">☕ <strong>Heredia</strong> — ¡provincia de Fabián!</div>
              <div class="vocab-item">⛪ <strong>Cartago</strong></div>
              <div class="vocab-item">🌊 <strong>Guanacaste</strong></div>
              <div class="vocab-item">🐬 <strong>Puntarenas</strong></div>
              <div class="vocab-item">🌴 <strong>Limón</strong></div>
            </div>
            <div class="rule-box" style="background:#FFF3E0;border-left:4px solid #E65100;margin-top:10px">
              <p>Costa Rica → América Central → Continente Americano → Mundo</p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿En qué parte del mundo se ubica Costa Rica?', opts:['América del Sur','América del Norte','América Central','Europa'], ans:'América Central' },
            { type:'selection', skill:'selection', q:'¿Cuántas provincias tiene Costa Rica?', opts:['5','6','7','8'], ans:'7' },
            { type:'fill', skill:'speaking', q:'La capital de Costa Rica es ___.', ans:'San José' },
            { type:'selection', skill:'listening', q:'¿Cuál es la provincia de Fabián?', opts:['San José','Cartago','Alajuela','Heredia'], ans:'Heredia' },
            { type:'selection', skill:'selection', q:'¿Cuál de estas NO es una provincia de Costa Rica?', opts:['Cartago','Limón','Panamá','Guanacaste'], ans:'Panamá' },
            { type:'fill', skill:'speaking', q:'Costa Rica se ubica en América ___.', ans:'Central' },
            { type:'selection', skill:'selection', q:'¿Cuál provincia de Costa Rica tiene salida al océano Atlántico?', opts:['Guanacaste','Heredia','Limón','Cartago'], ans:'Limón' },
            { type:'selection', skill:'listening', q:'¿Cuántas provincias tiene Costa Rica al oeste?', opts:['Guanacaste y Puntarenas','San José y Cartago','Heredia y Alajuela','Limón y Cartago'], ans:'Guanacaste y Puntarenas' },
            { type:'fill', skill:'speaking', q:'Costa Rica pertenece al continente ___.', ans:'americano' },
            { type:'selection', skill:'selection', q:'¿Cuál es el orden correcto de ubicación geográfica de Fabián?', opts:['Heredia → Costa Rica → América Central → Mundo','Mundo → Costa Rica → América Central → Heredia','Costa Rica → Heredia → Mundo → América Central','América → Heredia → San José → Mundo'], ans:'Heredia → Costa Rica → América Central → Mundo' },
          ]
        },

        // ── TOPIC 4: La Batalla de Rivas ──────────────────
        {
          id: 'batalla-rivas',
          title: 'La Batalla de Rivas',
          icon: '⚔️',
          content: `
            <h3>La Batalla de Rivas ⚔️</h3>
            <div class="rule-box" style="background:#FFEBEE;border-left:4px solid #C62828">
              <p><strong>Fecha:</strong> 11 de abril de 1856</p>
              <p><strong>Lugar:</strong> Rivas, Nicaragua</p>
              <p><strong>Resultado:</strong> Victoria de Costa Rica 🇨🇷</p>
            </div>
            <h3 style="margin-top:12px">Personajes Principales</h3>
            <div class="vocab-grid">
              <div class="vocab-item">🦸 <strong>Juan Mora Porras</strong><br>Presidente de Costa Rica. Organizó la defensa del país.</div>
              <div class="vocab-item">🌟 <strong>Juan Santamaría</strong><br>Principal héroe. Quemó el mesón donde se escondían los filibusteros.</div>
              <div class="vocab-item">⚔️ <strong>Las tropas costarricenses</strong><br>Soldados que defendieron la patria.</div>
              <div class="vocab-item">😈 <strong>William Walker</strong><br>Líder de los filibusteros. Quería apoderarse de Centroamérica.</div>
              <div class="vocab-item">🏴‍☠️ <strong>Los filibusteros</strong><br>Soldados mercenarios de William Walker.</div>
            </div>
            <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32;margin-top:10px">
              <p><strong>Valor:</strong> Trabajo en equipo por amor a la patria. Defendimos la libertad de Costa Rica.</p>
              <p><strong>El 11 de abril</strong> es feriado nacional en Costa Rica.</p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿En qué fecha ocurrió la Batalla de Rivas?', opts:['15 de septiembre de 1821','11 de abril de 1856','12 de octubre de 1492','19 de abril de 1856'], ans:'11 de abril de 1856' },
            { type:'selection', skill:'selection', q:'¿Quién era el presidente de Costa Rica durante la Batalla de Rivas?', opts:['Juan Santamaría','William Walker','Juan Mora Porras','Oscar Arias'], ans:'Juan Mora Porras' },
            { type:'fill', skill:'speaking', q:'El héroe principal de la Batalla de Rivas fue Juan ___.', ans:'Santamaría' },
            { type:'selection', skill:'listening', q:'¿Quién era William Walker?', opts:['Presidente de Costa Rica','Un héroe costarricense','El líder de los filibusteros','Un soldado tico'], ans:'El líder de los filibusteros' },
            { type:'selection', skill:'selection', q:'¿Qué hizo Juan Santamaría en la batalla?', opts:['Firmó la paz','Quemó el mesón donde se escondían los filibusteros','Organizó el ejército','Negoció con Walker'], ans:'Quemó el mesón donde se escondían los filibusteros' },
            { type:'fill', skill:'speaking', q:'Los soldados de William Walker se llamaban los ___.', ans:'filibusteros' },
            { type:'selection', skill:'selection', q:'¿Qué quería lograr William Walker?', opts:['Ayudar a Costa Rica','Apoderarse de Centroamérica','Construir escuelas','Comerciar con Costa Rica'], ans:'Apoderarse de Centroamérica' },
            { type:'selection', skill:'listening', q:'¿Qué defiende el 11 de abril como valor?', opts:['La educación','El trabajo en equipo por amor a la patria','La economía','El deporte'], ans:'El trabajo en equipo por amor a la patria' },
            { type:'fill', skill:'speaking', q:'La Batalla de Rivas ocurrió en el año ___.', ans:'1856' },
            { type:'selection', skill:'selection', q:'¿Dónde ocurrió la Batalla de Rivas?', opts:['San José, Costa Rica','Cartago, Costa Rica','Rivas, Nicaragua','Guanacaste, Costa Rica'], ans:'Rivas, Nicaragua' },
          ]
        },

        // ── TOPIC 5: Coordenadas Geográficas ─────────────
        {
          id: 'coordenadas-geograficas',
          title: 'Coordenadas Geográficas',
          icon: '🌐',
          content: `
            <h3>Coordenadas Geográficas 🌐</h3>
            <div class="rule-box" style="background:#E3F2FD;border-left:4px solid #1565C0">
              <p>Las <strong>coordenadas geográficas</strong> son líneas imaginarias, verticales u horizontales, que se dibujan en los mapas para facilitar la localización de un lugar.</p>
              <p>Las que van de <strong>este a oeste</strong> = <strong>Paralelos</strong> (también llamado Ecuador el principal)</p>
              <p>Las que van de <strong>norte a sur</strong> = <strong>Meridianos</strong> (también llamado Greenwich el principal)</p>
            </div>
            <h3 style="margin-top:12px">Los Hemisferios</h3>
            <div class="vocab-grid">
              <div class="vocab-item">⬆️ <strong>Hemisferio Norte</strong><br>Parte de arriba del Ecuador</div>
              <div class="vocab-item">⬇️ <strong>Hemisferio Sur</strong><br>Parte de abajo del Ecuador. Costa Rica está aquí... No, en el Norte.</div>
              <div class="vocab-item">➡️ <strong>Hemisferio Este</strong><br>A la derecha del Meridiano de Greenwich</div>
              <div class="vocab-item">⬅️ <strong>Hemisferio Oeste</strong><br>A la izquierda del Meridiano de Greenwich. Costa Rica está aquí.</div>
            </div>
            <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32;margin-top:10px">
              <p>Fabián escribió: "Son líneas que van de oeste a este (paralelos/Ecuador) y de norte a sur (meridianos/Greenwich)."</p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Qué son las coordenadas geográficas?', opts:['Tipos de mapas','Líneas imaginarias que ayudan a localizar un lugar','Los elementos del mapa','Los hemisferios del mundo'], ans:'Líneas imaginarias que ayudan a localizar un lugar' },
            { type:'selection', skill:'selection', q:'¿Cómo se llaman las líneas imaginarias que van de este a oeste?', opts:['Meridianos','Longitudes','Paralelos','Hemisferios'], ans:'Paralelos' },
            { type:'fill', skill:'speaking', q:'Las líneas que van de norte a sur se llaman ___.', ans:'meridianos' },
            { type:'selection', skill:'listening', q:'¿Cuál es el paralelo principal?', opts:['Meridiano de Greenwich','Trópico de Cáncer','El Ecuador','Círculo Polar Ártico'], ans:'El Ecuador' },
            { type:'selection', skill:'selection', q:'¿En qué divide el Ecuador al planeta?', opts:['Hemisferio este y oeste','Hemisferio norte y sur','Hemisferio polar y tropical','Hemisferio ártico y antártico'], ans:'Hemisferio norte y sur' },
            { type:'fill', skill:'speaking', q:'El meridiano principal se llama Meridiano de ___.', ans:'Greenwich' },
            { type:'selection', skill:'selection', q:'¿En qué divide el Meridiano de Greenwich al planeta?', opts:['Hemisferio norte y sur','Hemisferio polar y tropical','Hemisferio este y oeste','Hemisferio ártico y antártico'], ans:'Hemisferio este y oeste' },
            { type:'selection', skill:'listening', q:'¿En qué hemisferio se encuentra Costa Rica respecto al Ecuador?', opts:['Sur','Polar','Norte','Antártico'], ans:'Norte' },
            { type:'fill', skill:'speaking', q:'El Ecuador divide el planeta en hemisferio ___ y hemisferio sur.', ans:'norte' },
            { type:'selection', skill:'selection', q:'¿En qué hemisferio se encuentra Costa Rica respecto al Meridiano de Greenwich?', opts:['Este','Norte','Sur','Oeste'], ans:'Oeste' },
          ]
        },

        // ── TOPIC 6: Paralelos, Meridianos — Latitud y Longitud ──
        {
          id: 'latitud-longitud',
          title: 'Latitud y Longitud',
          icon: '📍',
          content: `
            <h3>Latitud y Longitud 📍</h3>
            <div class="vocab-grid">
              <div class="vocab-item">📏 <strong>Latitud</strong><br>Es la distancia que hay entre un lugar y la línea imaginaria del Ecuador. Indica si un lugar está en el hemisferio norte o sur. Costa Rica usa la latitud norte.</div>
              <div class="vocab-item">📐 <strong>Longitud</strong><br>Es la distancia que hay entre cualquier punto de la Tierra y el Meridiano de Greenwich. Costa Rica usa la longitud oeste, pues está en el hemisferio occidental.</div>
            </div>
            <h3 style="margin-top:12px">Paralelos importantes</h3>
            <div class="vocab-grid">
              <div class="vocab-item">🌍 <strong>Ecuador</strong> — paralelo principal, 0°</div>
              <div class="vocab-item">☀️ <strong>Trópico de Cáncer</strong> — hemisferio norte</div>
              <div class="vocab-item">🌊 <strong>Trópico de Capricornio</strong> — hemisferio sur</div>
              <div class="vocab-item">❄️ <strong>Círculo Polar Ártico</strong> — norte</div>
              <div class="vocab-item">🧊 <strong>Círculo Polar Antártico</strong> — sur</div>
            </div>
            <div class="rule-box" style="background:#E3F2FD;border-left:4px solid #1565C0;margin-top:10px">
              <p>Fabián escribió: <em>"Latitud: Es la distancia que hay entre un lugar y la línea imaginaria del Ecuador."</em></p>
              <p>Fabián escribió: <em>"Longitud: Distancia que hay entre un lugar en el hemisferio norte o sur y una línea imaginaria llamada meridiana que indica una dirección."</em></p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Qué mide la latitud?', opts:['La distancia entre un lugar y el Meridiano de Greenwich','La distancia entre un lugar y el Ecuador','La altura de las montañas','El tamaño del mapa'], ans:'La distancia entre un lugar y el Ecuador' },
            { type:'selection', skill:'selection', q:'¿Qué mide la longitud?', opts:['La distancia entre un lugar y el Ecuador','La altura del terreno','La distancia entre un lugar y el Meridiano de Greenwich','El tamaño de un país'], ans:'La distancia entre un lugar y el Meridiano de Greenwich' },
            { type:'fill', skill:'speaking', q:'Costa Rica usa la latitud ___ porque está al norte del Ecuador.', ans:'norte' },
            { type:'selection', skill:'listening', q:'¿Cuál es el paralelo principal (0°)?', opts:['Trópico de Cáncer','Meridiano de Greenwich','El Ecuador','Círculo Polar Ártico'], ans:'El Ecuador' },
            { type:'selection', skill:'selection', q:'¿Qué tipo de longitud usa Costa Rica?', opts:['Longitud este','Longitud norte','Longitud sur','Longitud oeste'], ans:'Longitud oeste' },
            { type:'fill', skill:'speaking', q:'El Trópico de ___ está en el hemisferio norte.', ans:'Cáncer' },
            { type:'selection', skill:'selection', q:'¿Cuál paralelo está en el hemisferio sur?', opts:['Trópico de Cáncer','Círculo Polar Ártico','Trópico de Capricornio','Ecuador'], ans:'Trópico de Capricornio' },
            { type:'selection', skill:'listening', q:'¿Por qué Costa Rica usa la longitud oeste?', opts:['Porque está al norte','Porque está en el hemisferio occidental','Porque es más fácil','Porque así lo decidió el gobierno'], ans:'Porque está en el hemisferio occidental' },
            { type:'fill', skill:'speaking', q:'El Círculo Polar ___ está en el extremo norte del planeta.', ans:'Ártico' },
            { type:'selection', skill:'selection', q:'¿Cuál es el meridiano principal?', opts:['El Ecuador','El Trópico de Cáncer','El Meridiano de Greenwich','El Círculo Polar'], ans:'El Meridiano de Greenwich' },
          ]
        },

        // ── TOPIC 7: Repaso General — Prueba ─────────────
        {
          id: 'repaso-prueba',
          title: '🎯 Repaso General — Prueba 7 mayo',
          icon: '🎯',
          content: `
            <h3>Repaso General para la Prueba 🎯</h3>
            <p><strong>Fecha de la prueba: Jueves 7 de mayo de 2026</strong></p>
            <div class="rule-box" style="background:#FCE4EC;border-left:4px solid #C62828">
              <p><strong>Todos los temas:</strong></p>
              <p>✅ El mapa — qué es y para qué sirve</p>
              <p>✅ Elementos del mapa (título, autor, rosa de los vientos, escalas, simbología, coordenadas)</p>
              <p>✅ Tipos de mapa (físico, político, temático)</p>
              <p>✅ Costa Rica — ubicación, 7 provincias</p>
              <p>✅ Batalla de Rivas — fecha, personajes, significado</p>
              <p>✅ Líneas imaginarias — paralelos y meridianos</p>
              <p>✅ Latitud y longitud — definición y aplicación</p>
              <p>✅ Hemisferios — norte/sur (Ecuador), este/oeste (Greenwich)</p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Cuál es el elemento del mapa que indica los puntos cardinales?', opts:['El título','La escala cromática','La rosa de los vientos','La simbología'], ans:'La rosa de los vientos' },
            { type:'selection', skill:'selection', q:'¿En qué año ocurrió la Batalla de Rivas?', opts:['1821','1821','1856','1948'], ans:'1856' },
            { type:'fill', skill:'speaking', q:'El paralelo principal que divide el mundo en norte y sur se llama ___.', ans:'Ecuador' },
            { type:'selection', skill:'listening', q:'¿Cuántas provincias tiene Costa Rica?', opts:['5','6','7','8'], ans:'7' },
            { type:'selection', skill:'selection', q:'¿Quién fue el héroe principal de la Batalla de Rivas?', opts:['Juan Mora Porras','William Walker','Juan Santamaría','Cinthya Ramírez'], ans:'Juan Santamaría' },
            { type:'selection', skill:'selection', q:'¿Qué mide la latitud?', opts:['Distancia desde Greenwich','Distancia desde el Ecuador','Altura del terreno','Tamaño del mapa'], ans:'Distancia desde el Ecuador' },
            { type:'fill', skill:'speaking', q:'Costa Rica se ubica en América ___.', ans:'Central' },
            { type:'selection', skill:'listening', q:'¿Cuál color representa las tierras altas en la escala cromática?', opts:['Verde','Azul','Amarillo','Marrón'], ans:'Marrón' },
            { type:'selection', skill:'selection', q:'El Meridiano de Greenwich divide el planeta en hemisferio:', opts:['Norte y sur','Este y oeste','Ártico y antártico','Tropical y polar'], ans:'Este y oeste' },
            { type:'fill', skill:'speaking', q:'Los meridianos son líneas que van de ___ a sur.', ans:'norte' },
          ]
        },

      ] // end topics
    }   // end unit
  ]     // end units
};      // end CONTENT.fabian.sociales
