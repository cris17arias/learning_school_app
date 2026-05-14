// ============================================================
//  content-andres-math.js
//  Matemáticas — Andrés · 1.° Grado
//  Escuela Ramón Barrantes Herrera
//  Maestra: Licda. Elizabeth Vargas Cruz
//
//  Nota: Solo preguntas de selección y completar con números.
//  Andrés tiene 6 años — sin respuestas escritas complejas.
//
//  Temas (Marzo–Abril–Mayo 2026):
//  1. Números en el entorno — para qué sirven los números
//  2. Comparación de objetos — posición relativa
//  3. Contar y cardinalidad — números del 1 al 20
//  4. Números ordinales — primero al décimo (énfasis actual:
//     ejercicios de relacionar animales en fila y colorear
//     elementos en posición 5°, 7°, 10°)
//  5. Agrupamientos — de 1 en 1, 2 en 2, 3 en 3, 5 en 5
//  6. Representaciones de números — literal, numérica, gráfica
//  7. Unidades y Decenas — decenas del 10 al 20
//  8. Comparación de números — mayor, menor, igual
// ============================================================

CONTENT.andres.math = {
  units: [
    {
      id: 'math-u1',
      title: 'I Prueba — Matemáticas 1.° año',
      theme: 'Números, Conteo, Agrupamientos y Comparación',
      essentialQuestion: '¿Para qué sirven los números y cómo los usamos?',
      status: 'active',
      topics: [

        // ── TOPIC 1: Números en el Entorno ────────────────
        {
          id: 'numeros-entorno',
          title: 'Los Números — Para qué sirven',
          icon: '🔢',
          content: `
            <h3>Los Números 🔢</h3>
            <div class="rule-box" style="background:#FCE4EC;border-left:4px solid #C62828">
              <p>Un <strong>número</strong> es un símbolo o palabra que representa una cantidad, una posición en un orden o una medida.</p>
            </div>
            <h3 style="margin-top:12px">¿Para qué usamos los números?</h3>
            <div class="vocab-grid">
              <div class="vocab-item">🔢 <strong>Contar</strong><br>Saber cuántos hay en un conjunto</div>
              <div class="vocab-item">📏 <strong>Medir</strong><br>Expresar longitudes, pesos, tiempo, temperatura</div>
              <div class="vocab-item">➕ <strong>Operar</strong><br>Sumar, restar, multiplicar y dividir</div>
              <div class="vocab-item">💰 <strong>Vida diaria</strong><br>Dinero, horas, teléfonos, códigos, direcciones</div>
            </div>
            <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32;margin-top:10px">
              <p><strong>Conteo y cardinalidad:</strong><br>
              Contar = decir los números uno por uno tocando cada objeto.<br>
              El <strong>último número</strong> que decimos indica cuántos objetos hay. Ese número se llama <strong>cardinalidad</strong>.</p>
              <p>Ejemplo: 🐞🐞🐞🐞🐞 → 1, 2, 3, 4, 5 → ¡Hay 5 mariquitas!</p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Para qué sirve un número?', opts:['Solo para dibujar','Representar una cantidad, posición o medida','Solo para contar dinero','Solo para el reloj'], ans:'Representar una cantidad, posición o medida' },
            { type:'selection', skill:'selection', q:'Cuento: 🐞🐞🐞 → ¿Cuántas mariquitas hay?', opts:['2','4','3','5'], ans:'3' },
            { type:'selection', skill:'selection', q:'Cuento: 🎂🎂🎂🎂 → ¿Cuántos pasteles hay?', opts:['3','5','4','6'], ans:'4' },
            { type:'selection', skill:'listening', q:'¿Cómo se llama el último número que decimos al contar?', opts:['El primero','La suma','La cardinalidad','El orden'], ans:'La cardinalidad' },
            { type:'selection', skill:'selection', q:'¿Qué usamos para saber la hora?', opts:['Una regla','Un número en el reloj','Un mapa','Un libro'], ans:'Un número en el reloj' },
            { type:'selection', skill:'selection', q:'Cuento: ☕☕☕☕☕☕ → ¿Cuántas tazas hay?', opts:['5','7','6','4'], ans:'6' },
            { type:'selection', skill:'selection', q:'¿Cuál es el número que muestra cuántos hay en total?', opts:['El primer número','El número del medio','El último número al contar','Cualquier número'], ans:'El último número al contar' },
            { type:'fill', skill:'speaking', q:'Cuento las manzanas: 🍎🍎🍎 → Hay ___ manzanas.', ans:'3' },
          ]
        },

        // ── TOPIC 2: Comparación de Objetos ──────────────
        {
          id: 'comparacion-objetos',
          title: 'Comparación de Objetos — Posición',
          icon: '📍',
          content: `
            <h3>Posición Relativa de Objetos 📍</h3>
            <div class="rule-box" style="background:#E3F2FD;border-left:4px solid #1565C0">
              <p>La <strong>posición relativa</strong> es la ubicación de un objeto en relación con otro.</p>
            </div>
            <h3 style="margin-top:12px">Palabras de posición</h3>
            <div class="vocab-grid">
              <div class="vocab-item">⬆️ <strong>encima</strong><br>El perro está encima de la mesa.</div>
              <div class="vocab-item">⬇️ <strong>debajo</strong><br>La bola está debajo de la mesa.</div>
              <div class="vocab-item">↔️ <strong>al lado</strong><br>La planta está al lado de la mesa.</div>
              <div class="vocab-item">🚪 <strong>al frente</strong><br>La almohada está al frente de la mesa.</div>
              <div class="vocab-item">📏 <strong>cerca</strong><br>La ventana está cerca de la flor.</div>
              <div class="vocab-item">🏔️ <strong>lejos</strong><br>La lámpara está lejos del armario.</div>
              <div class="vocab-item">🐱 <strong>junto a</strong><br>El gato está junto al árbol.</div>
              <div class="vocab-item">🦋 <strong>encima de</strong><br>La mariposa está encima del niño.</div>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'La bola está ___ de la mesa.', opts:['encima','al lado','debajo','al frente'], ans:'debajo' },
            { type:'selection', skill:'selection', q:'El perro está ___ de la mesa.', opts:['debajo','encima','lejos','al frente'], ans:'encima' },
            { type:'selection', skill:'selection', q:'La cama está ___ de la lámpara como de la flor.', opts:['tan lejos','más lejos','tan cerca','sola'], ans:'tan cerca' },
            { type:'selection', skill:'listening', q:'La ventana está ___ de la flor.', opts:['lejos','en medio','cerca','encima'], ans:'cerca' },
            { type:'selection', skill:'selection', q:'La lámpara está ___ del armario.', opts:['cerca','encima','en medio','lejos'], ans:'lejos' },
            { type:'selection', skill:'selection', q:'La flor está ___ del armario.', opts:['lejos','en medio','cerca','debajo'], ans:'cerca' },
            { type:'selection', skill:'selection', q:'El gato está ___ al árbol.', opts:['encima','debajo','junto','lejos'], ans:'junto' },
            { type:'selection', skill:'listening', q:'La mariposa está ___ del niño.', opts:['debajo','al lado','lejos','encima'], ans:'encima' },
            { type:'selection', skill:'selection', q:'La pelota está ___ del árbol.', opts:['encima','junto','debajo','lejos'], ans:'junto' },
            { type:'selection', skill:'selection', q:'¿Qué palabra describe cuando algo está muy cerca?', opts:['lejos','encima','cerca','detrás'], ans:'cerca' },
          ]
        },

        // ── TOPIC 3: Números del 1 al 20 ─────────────────
        {
          id: 'numeros-1-20',
          title: 'Números del 1 al 20',
          icon: '🔟',
          content: `
            <h3>Números del 1 al 20 🔟</h3>
            <div class="vocab-grid">
              <div class="vocab-item">1 = <strong>uno</strong></div>
              <div class="vocab-item">2 = <strong>dos</strong></div>
              <div class="vocab-item">3 = <strong>tres</strong></div>
              <div class="vocab-item">4 = <strong>cuatro</strong></div>
              <div class="vocab-item">5 = <strong>cinco</strong></div>
              <div class="vocab-item">6 = <strong>seis</strong></div>
              <div class="vocab-item">7 = <strong>siete</strong></div>
              <div class="vocab-item">8 = <strong>ocho</strong></div>
              <div class="vocab-item">9 = <strong>nueve</strong></div>
              <div class="vocab-item">10 = <strong>diez</strong></div>
              <div class="vocab-item">11 = <strong>once</strong></div>
              <div class="vocab-item">12 = <strong>doce</strong></div>
              <div class="vocab-item">13 = <strong>trece</strong></div>
              <div class="vocab-item">14 = <strong>catorce</strong></div>
              <div class="vocab-item">15 = <strong>quince</strong></div>
              <div class="vocab-item">16 = <strong>dieciséis</strong></div>
              <div class="vocab-item">17 = <strong>diecisiete</strong></div>
              <div class="vocab-item">18 = <strong>dieciocho</strong></div>
              <div class="vocab-item">19 = <strong>diecinueve</strong></div>
              <div class="vocab-item">20 = <strong>veinte</strong></div>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Cómo se escribe el número 5?', opts:['tres','ocho','cinco','siete'], ans:'cinco' },
            { type:'selection', skill:'selection', q:'¿Cuánto es "doce"?', opts:['11','13','14','12'], ans:'12' },
            { type:'selection', skill:'selection', q:'¿Cómo se escribe el número 8?', opts:['seis','nueve','siete','ocho'], ans:'ocho' },
            { type:'selection', skill:'listening', q:'¿Cuánto es "quince"?', opts:['13','16','14','15'], ans:'15' },
            { type:'fill', skill:'speaking', q:'El número que viene después del 9 es el ___.', ans:'10' },
            { type:'selection', skill:'selection', q:'¿Cómo se escribe el número 20?', opts:['diecinueve','veintiuno','veinte','dieciocho'], ans:'veinte' },
            { type:'selection', skill:'selection', q:'¿Cuánto es "trece"?', opts:['12','14','13','11'], ans:'13' },
            { type:'selection', skill:'selection', q:'¿Cómo se escribe el número 16?', opts:['diecisiete','quince','dieciséis','catorce'], ans:'dieciséis' },
            { type:'fill', skill:'speaking', q:'El número que viene antes del 20 es el ___.', ans:'19' },
            { type:'selection', skill:'listening', q:'¿Cuánto es "diecinueve"?', opts:['17','20','18','19'], ans:'19' },
          ]
        },

        // ── TOPIC 4: Números Ordinales ────────────────────
        {
          id: 'ordinales',
          title: 'Números Ordinales',
          icon: '🏆',
          content: `
            <h3>Números Ordinales 🏆</h3>
            <div class="rule-box" style="background:#E8EAF6;border-left:4px solid #3949AB">
              <p>Los números ordinales indican el <strong>orden</strong> o <strong>posición</strong> de un elemento.</p>
            </div>
            <div class="vocab-grid">
              <div class="vocab-item">1° = <strong>primero</strong></div>
              <div class="vocab-item">2° = <strong>segundo</strong></div>
              <div class="vocab-item">3° = <strong>tercero</strong></div>
              <div class="vocab-item">4° = <strong>cuarto</strong></div>
              <div class="vocab-item">5° = <strong>quinto</strong></div>
              <div class="vocab-item">6° = <strong>sexto</strong></div>
              <div class="vocab-item">7° = <strong>séptimo</strong></div>
              <div class="vocab-item">8° = <strong>octavo</strong></div>
              <div class="vocab-item">9° = <strong>noveno</strong></div>
              <div class="vocab-item">10° = <strong>décimo</strong></div>
            </div>
            <div class="rule-box" style="background:#FFF9C4;border-left:4px solid #F9A825;margin-top:10px">
              <p>En una fila de niños: 👦👧👦👧</p>
              <p>→ 1° primero, 2° segundo, 3° tercero, 4° cuarto</p>
            </div>
            <div class="rule-box" style="background:#F3E5F5;border-left:4px solid #7B1FA2;margin-top:8px">
              <p>🐹🐷🐥🐰🐝🐳 <strong>Animalitos en fila</strong></p>
              <p>1° hámster · 2° cerdito · 3° pollito · 4° conejo · 5° abeja · 6° ballena</p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Cómo se dice el número ordinal 1°?', opts:['segundo','tercero','cuarto','primero'], ans:'primero' },
            { type:'selection', skill:'selection', q:'¿Cómo se dice el número ordinal 2°?', opts:['primero','tercero','segundo','cuarto'], ans:'segundo' },
            { type:'selection', skill:'selection', q:'¿Cómo se dice el número ordinal 3°?', opts:['segundo','cuarto','tercero','quinto'], ans:'tercero' },
            { type:'selection', skill:'selection', q:'¿Cómo se dice el número ordinal 4°?', opts:['quinto','cuarto','tercero','sexto'], ans:'cuarto' },
            { type:'selection', skill:'selection', q:'¿Cómo se dice el número ordinal 5°?', opts:['cuarto','sexto','quinto','séptimo'], ans:'quinto' },
            { type:'selection', skill:'selection', q:'¿Cómo se dice el número ordinal 6°?', opts:['quinto','séptimo','sexto','octavo'], ans:'sexto' },
            { type:'selection', skill:'selection', q:'El cerdito está de ___ lugar. 🐷 (2°)', opts:['primer','cuarto','tercer','segundo'], ans:'segundo' },
            { type:'selection', skill:'listening', q:'El conejo está de ___ lugar. 🐰 (4°)', opts:['tercero','quinto','cuarto','sexto'], ans:'cuarto' },
            { type:'selection', skill:'selection', q:'La ballena está de ___ lugar. 🐳 (6°)', opts:['quinto','séptimo','cuarto','sexto'], ans:'sexto' },
            { type:'selection', skill:'selection', q:'El pollito está de ___ lugar. 🐥 (3°)', opts:['primero','cuarto','segundo','tercero'], ans:'tercero' },
            { type:'selection', skill:'selection', q:'El hámster está de ___ lugar. 🐹 (1°)', opts:['segundo','primer','tercer','cuarto'], ans:'primer' },
            { type:'selection', skill:'selection', q:'La abeja está de ___ lugar. 🐝 (5°)', opts:['cuarto','sexto','tercer','quinto'], ans:'quinto' },
            { type:'selection', skill:'selection', q:'Colorea la 5° cámara 📷📷📷📷📸📷📷📷. ¿Cuál pintaste?', opts:['La cuarta','La quinta','La sexta','La tercera'], ans:'La quinta' },
            { type:'selection', skill:'selection', q:'Colorea la 7° flor 🌸🌸🌸🌸🌸🌸🌷🌸. ¿Cuál pintaste?', opts:['La sexta','La octava','La séptima','La quinta'], ans:'La séptima' },
            { type:'selection', skill:'selection', q:'Colorea el 10° lápiz ✏️✏️✏️✏️✏️✏️✏️✏️✏️🖍️. ¿Cuál pintaste?', opts:['El noveno','El octavo','El décimo','El séptimo'], ans:'El décimo' },
            { type:'fill', skill:'speaking', q:'El 5° lugar se dice: ___.', ans:'quinto' },
            { type:'fill', skill:'speaking', q:'El 7° lugar se dice: ___.', ans:'septimo' },
            { type:'fill', skill:'speaking', q:'El 10° lugar se dice: ___.', ans:'decimo' },
            { type:'selection', skill:'selection', q:'¿Cuál es el número ordinal de "décimo"?', opts:['8°','9°','10°','7°'], ans:'10°' },
            { type:'selection', skill:'listening', q:'Si coloreas el 7° elemento, ¿cuál número ordinal es?', opts:['quinto','octavo','sexto','séptimo'], ans:'séptimo' },
            { type:'selection', skill:'selection', q:'En una fila: 4° Cuarto, 3° Tercero, 2° Segundo, 1° Primero. ¿Quién va al frente?', opts:['El cuarto','El segundo','El primero','El tercero'], ans:'El primero' },
            { type:'selection', skill:'selection', q:'¿Qué número viene después del 8°?', opts:['7°','10°','9°','6°'], ans:'9°' },
          ]
        },

        // ── TOPIC 5: Agrupamientos ────────────────────────
        {
          id: 'agrupamientos',
          title: 'Agrupamientos',
          icon: '🐝',
          content: `
            <h3>Agrupamientos 🐝</h3>
            <div class="rule-box" style="background:#FCE4EC;border-left:4px solid #C62828">
              <p>Un <strong>agrupamiento</strong> es organizar objetos en grupos del mismo número.</p>
              <p>Para agrupar usamos el <strong>conteo</strong>.</p>
            </div>
            <h3 style="margin-top:12px">Tipos de agrupamientos</h3>
            <div class="vocab-grid">
              <div class="vocab-item">🐝🐝🐝 <strong>1 en 1</strong><br>Grupos de un solo elemento: 🐝 | 🐝 | 🐝</div>
              <div class="vocab-item">🐞🐞 <strong>2 en 2</strong><br>Grupos de dos: 🐞🐞 | 🐞🐞 | 🐞🐞</div>
              <div class="vocab-item">🌸🌸🌸 <strong>3 en 3</strong><br>Grupos de tres: 🌸🌸🌸 | 🌸🌸🌸</div>
              <div class="vocab-item">🍎🍎🍎🍎🍎 <strong>5 en 5</strong><br>Grupos de cinco: 🍎🍎🍎🍎🍎 | 🍎🍎🍎🍎🍎</div>
            </div>
            <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32;margin-top:10px">
              <p>Ejemplo: 10 pajaritos agrupados de 2 en 2 → forman <strong>5 grupos</strong>. ¿Sobra alguno? <strong>No.</strong></p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Qué es un agrupamiento?', opts:['Dibujar objetos','Organizar objetos en grupos del mismo número','Colorear objetos','Contar solo hasta 5'], ans:'Organizar objetos en grupos del mismo número' },
            { type:'selection', skill:'selection', q:'Si agrupo 6 mariquitas de 2 en 2, ¿cuántos grupos se forman?', opts:['2','4','3','5'], ans:'3' },
            { type:'selection', skill:'selection', q:'Si agrupo 12 pájaros de 3 en 3, ¿cuántos grupos se forman?', opts:['3','5','4','6'], ans:'4' },
            { type:'selection', skill:'listening', q:'Si agrupo 10 pájaros de 2 en 2, ¿sobra alguno?', opts:['Sí, sobra 1','Sí, sobran 2','No sobra ninguno','Sí, sobran 3'], ans:'No sobra ninguno' },
            { type:'selection', skill:'selection', q:'Agrupo 6 megáfonos de 2 en 2. ¿Cuántos grupos se forman?', opts:['4','2','5','3'], ans:'3' },
            { type:'selection', skill:'selection', q:'¿Cómo se llama el agrupamiento donde cada grupo tiene 5 elementos?', opts:['de 2 en 2','de 1 en 1','de 3 en 3','de 5 en 5'], ans:'de 5 en 5' },
            { type:'fill', skill:'speaking', q:'Si agrupa 9 flores de 3 en 3, se forman ___ grupos.', ans:'3' },
            { type:'selection', skill:'listening', q:'¿Cuántos elementos tiene cada grupo en el agrupamiento "de 3 en 3"?', opts:['1','2','3','5'], ans:'3' },
            { type:'selection', skill:'selection', q:'10 manzanas agrupadas de 5 en 5 forman:', opts:['5 grupos','3 grupos','4 grupos','2 grupos'], ans:'2 grupos' },
            { type:'fill', skill:'speaking', q:'En el agrupamiento de 2 en 2, cada grupo tiene ___ elementos.', ans:'2' },
          ]
        },

        // ── TOPIC 6: Representaciones de Números ──────────
        {
          id: 'representaciones',
          title: 'Representaciones de Números',
          icon: '🎯',
          content: `
            <h3>Representaciones de Números 🎯</h3>
            <p>Los números se pueden representar de <strong>3 formas</strong>:</p>
            <div class="vocab-grid">
              <div class="vocab-item">📝 <strong>Literal</strong><br>Con palabras: OCHO, TRECE, VEINTE</div>
              <div class="vocab-item">🔢 <strong>Numérica</strong><br>Con cifras: 8, 13, 20</div>
              <div class="vocab-item">🖐️ <strong>Gráfica</strong><br>Con dibujos: 🖐️🖐️ = 10</div>
            </div>
            <div class="rule-box" style="background:#E3F2FD;border-left:4px solid #1565C0;margin-top:10px">
              <p><strong>Ejemplo:</strong></p>
              <p>📝 Literal: OCHO</p>
              <p>🔢 Numérica: 8</p>
              <p>🖐️ Gráfica: 🤚🖖 (8 dedos)</p>
            </div>
            <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32;margin-top:8px">
              <p>🍪 Andrea quiere comprar 14 galletas de fresa.</p>
              <p>La tienda vende bolsas de 10. Necesita: <strong>1 bolsa de 10</strong> + <strong>4 galletas sueltas</strong> = 14</p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Cómo se representa "ocho" de forma numérica?', opts:['10','6','8','9'], ans:'8' },
            { type:'selection', skill:'selection', q:'¿Cómo se representa el número 4 de forma literal?', opts:['tres','cinco','cuatro','seis'], ans:'cuatro' },
            { type:'selection', skill:'selection', q:'¿Cuántas representaciones tienen los números?', opts:['1','4','2','3'], ans:'3' },
            { type:'selection', skill:'listening', q:'🎮🎮 ¿Cuántos controles hay? (representación gráfica)', opts:['3','4','1','2'], ans:'2' },
            { type:'selection', skill:'selection', q:'📷📷📷📷 ¿Cuántas cámaras hay?', opts:['3','5','4','6'], ans:'4' },
            { type:'selection', skill:'selection', q:'Andrea quiere 14 galletas. La tienda vende bolsas de 10. ¿Cuántas bolsas de 10 necesita?', opts:['4','3','2','1'], ans:'1' },
            { type:'fill', skill:'speaking', q:'Andrea quiere 14 galletas. Necesita 1 bolsa de 10 y ___ galletas sueltas.', ans:'4' },
            { type:'selection', skill:'listening', q:'¿Cuál es la representación LITERAL del número 13?', opts:['doce','quince','trece','catorce'], ans:'trece' },
            { type:'selection', skill:'selection', q:'¿Cuál es la representación NUMÉRICA de "dieciséis"?', opts:['15','17','19','16'], ans:'16' },
            { type:'selection', skill:'selection', q:'La representación con dibujos o imágenes se llama:', opts:['numérica','literal','escrita','gráfica'], ans:'gráfica' },
          ]
        },

        // ── TOPIC 7: Unidades y Decenas ───────────────────
        {
          id: 'unidades-decenas',
          title: 'Unidades y Decenas',
          icon: '🧱',
          content: `
            <h3>Unidades y Decenas 🧱</h3>
            <div class="vocab-grid">
              <div class="vocab-item">1️⃣ <strong>Unidad</strong><br>Es la pieza más pequeña. Va del 0 al 9.<br>Ejemplo: en el 47, el 7 está en unidades → 7 × 1 = 7</div>
              <div class="vocab-item">🔟 <strong>Decena</strong><br>Es un grupo de 10 unidades.<br>Ejemplo: en el 47, el 4 está en decenas → 4 × 10 = 40</div>
            </div>
            <div class="rule-box" style="background:#E3F2FD;border-left:4px solid #1565C0;margin-top:10px">
              <p><strong>Ejemplo: El número 14</strong></p>
              <p>→ 1 decena (un grupo de 10) + 4 unidades</p>
              <p>→ Se lee: <strong>catorce</strong></p>
            </div>
            <div class="vocab-grid" style="margin-top:10px">
              <div class="vocab-item">26 = <strong>2 D + 6 U</strong></div>
              <div class="vocab-item">13 = <strong>1 D + 3 U</strong></div>
              <div class="vocab-item">31 = <strong>3 D + 1 U</strong></div>
              <div class="vocab-item">22 = <strong>2 D + 2 U</strong></div>
              <div class="vocab-item">35 = <strong>3 D + 5 U</strong></div>
              <div class="vocab-item">44 = <strong>4 D + 4 U</strong></div>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Cuántas unidades tiene una decena?', opts:['5','20','100','10'], ans:'10' },
            { type:'selection', skill:'selection', q:'¿Cuántas decenas tiene el número 26?', opts:['6','3','2','4'], ans:'2' },
            { type:'selection', skill:'selection', q:'¿Cuántas unidades tiene el número 26?', opts:['2','8','5','6'], ans:'6' },
            { type:'fill', skill:'speaking', q:'El número 13 tiene 1 decena y ___ unidades.', ans:'3' },
            { type:'selection', skill:'listening', q:'¿Cuántas decenas tiene el número 35?', opts:['5','2','4','3'], ans:'3' },
            { type:'selection', skill:'selection', q:'¿Cuántas unidades tiene el número 44?', opts:['6','3','5','4'], ans:'4' },
            { type:'fill', skill:'speaking', q:'El número 22 tiene ___ decenas y 2 unidades.', ans:'2' },
            { type:'selection', skill:'selection', q:'Gabriel tiene 15 pelotas. ¿Cuántas decenas tiene el 15?', opts:['5','2','3','1'], ans:'1' },
            { type:'fill', skill:'speaking', q:'Gabriel tiene 15 pelotas: 1 decena y ___ unidades.', ans:'5' },
            { type:'selection', skill:'listening', q:'¿Cuántas decenas tiene el número 60?', opts:['0','10','6','3'], ans:'6' },
          ]
        },

        // ── TOPIC 8: Comparación de Números ───────────────
        {
          id: 'comparacion-numeros',
          title: 'Comparación de Números',
          icon: '⚖️',
          content: `
            <h3>Comparación de Números ⚖️</h3>
            <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32">
              <p>Usamos las <strong>relaciones de orden</strong> para comparar:</p>
              <p>➤ <strong>&gt;</strong> mayor que &nbsp; ➤ <strong>&lt;</strong> menor que &nbsp; ➤ <strong>=</strong> igual</p>
            </div>
            <div class="rule-box" style="background:#E3F2FD;border-left:4px solid #1565C0;margin-top:10px">
              <p><strong>¿Cómo comparamos?</strong></p>
              <p>✅ El número con <strong>más cifras</strong> es mayor: 12 &gt; 7</p>
              <p>✅ Si tienen la misma cantidad de cifras, revisamos <strong>cifra por cifra</strong> de izquierda a derecha.</p>
              <p>Ejemplo: 11 y 13 → los primeros dígitos son iguales (1=1) → comparamos el segundo: 1 &lt; 3 → entonces 11 &lt; 13</p>
            </div>
            <div class="vocab-grid" style="margin-top:10px">
              <div class="vocab-item">🏈×9 <strong>&gt;</strong> ⚽×1<br>9 mayor que 1</div>
              <div class="vocab-item">🐟×3 <strong>&gt;</strong> 🍎×1<br>3 mayor que 1</div>
              <div class="vocab-item">⚽⚽⚽⚽⚽⚽⚽⚽⚽ <strong>&gt;</strong> 🍃×7<br>9 &gt; 7</div>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Cuál número es MAYOR? 5 o 3', opts:['3','Son iguales','5','No se puede saber'], ans:'5' },
            { type:'selection', skill:'selection', q:'¿Cuál símbolo va aquí? 12 ___ 7', opts:['<','=','>','≈'], ans:'>' },
            { type:'selection', skill:'selection', q:'¿Cuál número es MENOR? 11 o 13', opts:['13','Son iguales','11','No se puede saber'], ans:'11' },
            { type:'selection', skill:'listening', q:'3 pececitos y 1 manzana — ¿cuál conjunto tiene MÁS?', opts:['La manzana','Son iguales','Los pececitos','No se puede saber'], ans:'Los pececitos' },
            { type:'selection', skill:'selection', q:'¿Cuál símbolo va aquí? 11 ___ 13', opts:['>','=','≈','<'], ans:'<' },
            { type:'selection', skill:'selection', q:'¿Cuál conjunto tiene MÁS? ⚽×9 o 🍃×7', opts:['Las hojas','Son iguales','Los balones','No se puede saber'], ans:'Los balones' },
            { type:'fill', skill:'speaking', q:'9 es ___ que 7. (mayor o menor)', ans:'mayor' },
            { type:'selection', skill:'listening', q:'¿Cuál número es mayor: 28 o 63?', opts:['28','Son iguales','63','No se puede saber'], ans:'63' },
            { type:'selection', skill:'selection', q:'¿Cuál símbolo va aquí? 44 ___ 73', opts:['>','=','≈','<'], ans:'<' },
            { type:'fill', skill:'speaking', q:'5 es ___ que 3. (mayor o menor)', ans:'mayor' },
          ]
        },

      ] // end topics
    }   // end unit
  ]     // end units
};      // end CONTENT.andres.math
