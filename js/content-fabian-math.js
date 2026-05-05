// ============================================================
//  content-fabian-math.js
//  Matemáticas — Fabián · 3.° Grado
//  Escuela Ramón Barrantes Herrera · Sección 3-1
//
//  Topics extracted from Fabián's notebook (March–April 2026):
//  1. Unidad de Millar
//  2. Decena de Millar
//  3. Números de 4 y 5 cifras — Descomposición
//  4. Números en palabras
//  5. Comparación de números (<, >, =)
//  6. Series numéricas
//  7. Líneas: rectas y curvas
//  8. Ángulos
// ============================================================

CONTENT.fabian.math = {
  units: [
    // ══════════════════════════════════════════════════════
    //  UNIT 1 — Números hasta la Decena de Millar
    // ══════════════════════════════════════════════════════
    {
      id: 'math-u1',
      title: 'I Prueba — Matemáticas 3.° año',
      theme: 'Números hasta la Decena de Millar, Geometría',
      essentialQuestion: '¿Cómo leo, escribo y comparo números grandes?',
      status: 'active',
      topics: [

        // ── TOPIC 1: Unidad de Millar ─────────────────────
        {
          id: 'unidad-millar',
          title: 'Unidad de Millar',
          icon: '🧊',
          content: `
            <h3>Unidad de Millar 🧊</h3>
            <div class="rule-box" style="background:#E3F2FD;border-left:4px solid #1565C0">
              <p>La <strong>unidad de millar (UM)</strong> vale <strong>1.000</strong>.</p>
              <p>Un cubo grande = 1 millar = 1.000 unidades</p>
            </div>
            <div class="vocab-grid">
              <div class="vocab-item">🧊 <strong>1.000</strong> → un mil</div>
              <div class="vocab-item">🧊🧊 <strong>2.000</strong> → dos mil</div>
              <div class="vocab-item">🧊🧊🧊 <strong>3.000</strong> → tres mil</div>
              <div class="vocab-item">🧊×4 <strong>4.000</strong> → cuatro mil</div>
              <div class="vocab-item">🧊×5 <strong>5.000</strong> → cinco mil</div>
              <div class="vocab-item">🧊×6 <strong>6.000</strong> → seis mil</div>
              <div class="vocab-item">🧊×7 <strong>7.000</strong> → siete mil</div>
              <div class="vocab-item">🧊×8 <strong>8.000</strong> → ocho mil</div>
              <div class="vocab-item">🧊×9 <strong>9.000</strong> → nueve mil</div>
            </div>
            <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32;margin-top:10px">
              <p><strong>Recuerda:</strong> unidad = 1 | decena = 10 | centena = 100 | millar = 1.000</p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Cuánto vale la unidad de millar?', opts:['100','10.000','1.000','500'], ans:'1.000' },
            { type:'selection', skill:'selection', q:'¿Cómo se lee el número 3.000?', opts:['trescientos','treinta mil','tres mil','tres'], ans:'tres mil' },
            { type:'fill', skill:'speaking', q:'5.000 se lee: ___ mil.', ans:'cinco' },
            { type:'selection', skill:'selection', q:'¿Cuántos millares tiene el número 7.000?', opts:['70','700','7','7.000'], ans:'7' },
            { type:'selection', skill:'listening', q:'¿Qué número es "nueve mil"?', opts:['900','9.000','90.000','9.900'], ans:'9.000' },
            { type:'fill', skill:'speaking', q:'2.000 se lee: dos ___.', ans:'mil' },
            { type:'selection', skill:'selection', q:'Un cubo grande en los bloques representa:', opts:['una unidad','una decena','una centena','un millar'], ans:'un millar' },
            { type:'selection', skill:'selection', q:'¿Cuál es el número que sigue? 4.000, 5.000, ___', opts:['5.001','5.100','6.000','50.000'], ans:'6.000' },
            { type:'fill', skill:'speaking', q:'8.000 → ___ millares.', ans:'8' },
            { type:'selection', skill:'listening', q:'¿Cuánto es 1 millar + 1 millar + 1 millar?', opts:['300','30.000','3.000','3'], ans:'3.000' },
          ]
        },

        // ── TOPIC 2: Decena de Millar ─────────────────────
        {
          id: 'decena-millar',
          title: 'Decena de Millar',
          icon: '🔟',
          content: `
            <h3>Decena de Millar 🔟</h3>
            <div class="rule-box" style="background:#FCE4EC;border-left:4px solid #C62828">
              <p>La <strong>decena de millar (DM)</strong> vale <strong>10.000</strong>.</p>
              <p>10 millares = 1 decena de millar = 10.000</p>
            </div>
            <h3 style="margin-top:12px">Tabla de posición</h3>
            <div class="vocab-grid">
              <div class="vocab-item">DM = <strong>10.000</strong></div>
              <div class="vocab-item">UM = <strong>1.000</strong></div>
              <div class="vocab-item">C = <strong>100</strong></div>
              <div class="vocab-item">D = <strong>10</strong></div>
              <div class="vocab-item">U = <strong>1</strong></div>
            </div>
            <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32;margin-top:10px">
              <p><strong>Ejemplo:</strong> 57.930</p>
              <p>5 DM + 7 UM + 9 C + 3 D + 0 U</p>
              <p>= 50.000 + 7.000 + 900 + 30 + 0</p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Cuánto vale la decena de millar?', opts:['1.000','100.000','10.000','10'], ans:'10.000' },
            { type:'selection', skill:'selection', q:'¿Cuántos millares forman una decena de millar?', opts:['100','10','1.000','5'], ans:'10' },
            { type:'fill', skill:'speaking', q:'10 millares = 1 ___ de millar.', ans:'decena' },
            { type:'selection', skill:'selection', q:'En el número 57.930, ¿cuántas decenas de millar hay?', opts:['7','9','5','3'], ans:'5' },
            { type:'selection', skill:'listening', q:'¿En qué posición está el 7 en 57.930?', opts:['Centenas','Decenas de millar','Unidades de millar','Decenas'], ans:'Unidades de millar' },
            { type:'fill', skill:'speaking', q:'En 64.308, el dígito en la posición de DM es ___.', ans:'6' },
            { type:'selection', skill:'selection', q:'¿Cuál es la descomposición de 83.084?', opts:['80.000+3.000+80+4','8.000+3.000+84','80.000+300+84','80.000+3.000+0+80+4'], ans:'80.000+3.000+0+80+4' },
            { type:'selection', skill:'selection', q:'¿Cuánto vale el 6 en 64.308?', opts:['6','600','6.000','60.000'], ans:'60.000' },
            { type:'fill', skill:'speaking', q:'En 83.084: 8 DM + ___ UM + 0 C + 8 D + 4 U.', ans:'3' },
            { type:'selection', skill:'listening', q:'El número 30.000 + 5.000 + 700 + 2 es igual a:', opts:['35.720','35.072','35.702','350.702'], ans:'35.702' },
          ]
        },

        // ── TOPIC 3: Descomposición de Números ───────────
        {
          id: 'descomposicion',
          title: 'Descomposición de Números',
          icon: '🔢',
          content: `
            <h3>Descomposición de Números 🔢</h3>
            <p>Descomponer un número es separarlo en sus valores posicionales.</p>
            <div class="rule-box" style="background:#E3F2FD;border-left:4px solid #1565C0">
              <p><strong>Ejemplo 1:</strong> 1.343</p>
              <p>= 1.000 + 300 + 40 + 3</p>
              <p>= 1 UM + 3 C + 4 D + 3 U</p>
            </div>
            <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32">
              <p><strong>Ejemplo 2:</strong> 2.590</p>
              <p>= 2.000 + 500 + 90 + 0</p>
              <p>= 2 UM + 5 C + 9 D + 0 U</p>
            </div>
            <div class="rule-box" style="background:#FFF3E0;border-left:4px solid #E65100">
              <p><strong>Ejemplo 3:</strong> 15.470</p>
              <p>= 10.000 + 5.000 + 400 + 70 + 0</p>
              <p>= 1 DM + 5 UM + 4 C + 7 D + 0 U</p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Cuál es la descomposición de 1.343?', opts:['1.000+300+40+3','1.000+34+3','100+343','1.343+0'], ans:'1.000+300+40+3' },
            { type:'fill', skill:'speaking', q:'2.590 = 2.000 + 500 + ___ + 0', ans:'90' },
            { type:'selection', skill:'selection', q:'¿Qué número es 10.000 + 5.000 + 400 + 70?', opts:['15.047','15.470','150.470','1.547'], ans:'15.470' },
            { type:'selection', skill:'listening', q:'¿Cuántas unidades de millar tiene 13.317?', opts:['1','13','3','0'], ans:'3' },
            { type:'fill', skill:'speaking', q:'1.120 = 1.000 + ___ + 20', ans:'100' },
            { type:'selection', skill:'selection', q:'¿Cuál es la forma desarrollada de 40.372?', opts:['4.000+372','40.000+300+72','40.000+0+300+70+2','4.372'], ans:'40.000+0+300+70+2' },
            { type:'selection', skill:'selection', q:'En 31.894, ¿cuál es el valor del 8?', opts:['80.000','8.000','800','80'], ans:'800' },
            { type:'fill', skill:'speaking', q:'2.063 = 2.000 + 0 + ___ + 3', ans:'60' },
            { type:'selection', skill:'selection', q:'¿Qué número es 30.000 + 600 + 70 + 0 + 2?', opts:['36.702','30.672','306.702','30.000.672'], ans:'36.702' },
            { type:'selection', skill:'listening', q:'¿Cómo se descompone 1.004?', opts:['1.000+4','1.000+0+0+4','100+4','1.004+0'], ans:'1.000+0+0+4' },
          ]
        },

        // ── TOPIC 4: Números en Palabras ──────────────────
        {
          id: 'numeros-palabras',
          title: 'Números en Palabras',
          icon: '📝',
          content: `
            <h3>Números en Palabras 📝</h3>
            <p>Aprendemos a leer y escribir números grandes.</p>
            <div class="rule-box" style="background:#E3F2FD;border-left:4px solid #1565C0">
              <p>27.180 → <strong>veintisiete mil ciento ochenta</strong></p>
              <p>59.306 → <strong>cincuenta y nueve mil trescientos seis</strong></p>
              <p>75.049 → <strong>setenta y cinco mil cuarenta y nueve</strong></p>
              <p>80.387 → <strong>ochenta mil trescientos ochenta y siete</strong></p>
              <p>93.005 → <strong>noventa y tres mil cinco</strong></p>
            </div>
            <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32;margin-top:10px">
              <p>2.735 → dos mil setecientos treinta y cinco</p>
              <p>9.006 → nueve mil seis</p>
              <p>3.210 → tres mil doscientos diez</p>
              <p>5.293 → cinco mil doscientos noventa y tres</p>
              <p>7.825 → siete mil ochocientos veinticinco</p>
              <p>6.219 → seis mil doscientos diecinueve</p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Cómo se lee 27.180?', opts:['dos mil setecientos dieciocho','veintisiete mil ciento ochenta','veintisiete mil ochocientos','veintiuno mil ciento ochenta'], ans:'veintisiete mil ciento ochenta' },
            { type:'selection', skill:'selection', q:'¿Cómo se escribe "ochenta mil trescientos ochenta y siete"?', opts:['8.387','80.387','800.387','80.037'], ans:'80.387' },
            { type:'fill', skill:'speaking', q:'75.049 se lee: setenta y cinco mil ___ y nueve.', ans:'cuarenta' },
            { type:'selection', skill:'listening', q:'¿Cuál número es "noventa y tres mil cinco"?', opts:['93.500','93.050','93.005','9.305'], ans:'93.005' },
            { type:'selection', skill:'selection', q:'¿Cómo se lee 2.735?', opts:['dos mil setecientos treinta y cinco','dos setecientos treinta y cinco','veintisiete ciento treinta y cinco','dos mil setenta y tres cinco'], ans:'dos mil setecientos treinta y cinco' },
            { type:'fill', skill:'speaking', q:'9.006 se lee: nueve mil ___.', ans:'seis' },
            { type:'selection', skill:'selection', q:'"Veinticuatro mil doscientos quince" en cifras es:', opts:['24.025','24.215','42.215','24.250'], ans:'24.215' },
            { type:'selection', skill:'selection', q:'¿Cómo se lee 5.293?', opts:['cinco mil doscientos noventa y tres','cinco doscientos noventa y tres','cinco mil noventa y tres','cincuenta y dos noventa y tres'], ans:'cinco mil doscientos noventa y tres' },
            { type:'fill', skill:'speaking', q:'"Cuarenta y ocho mil doscientos dieciséis" → ___.216 (solo los miles)', ans:'48' },
            { type:'selection', skill:'listening', q:'¿Cómo se lee 7.825?', opts:['siete mil doscientos ochenta y cinco','siete ochocientos veinticinco','siete mil ochocientos veinticinco','setenta y ocho veinticinco'], ans:'siete mil ochocientos veinticinco' },
          ]
        },

        // ── TOPIC 5: Comparación de Números ──────────────
        {
          id: 'comparacion',
          title: 'Comparación de Números',
          icon: '⚖️',
          content: `
            <h3>Comparamos Números ⚖️</h3>
            <div class="rule-box" style="background:#E3F2FD;border-left:4px solid #1565C0">
              <p>Usamos los símbolos:</p>
              <p>➤ <strong>&lt;</strong> (menor que) &nbsp; ➤ <strong>&gt;</strong> (mayor que) &nbsp; ➤ <strong>=</strong> (igual)</p>
            </div>
            <h3 style="margin-top:12px">Pasos para comparar</h3>
            <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32">
              <p>1. Compara el dígito de mayor posición primero.</p>
              <p>2. Si son iguales, pasa al siguiente dígito.</p>
              <p>3. El número con el dígito mayor es el mayor.</p>
            </div>
            <div class="vocab-grid" style="margin-top:10px">
              <div class="vocab-item">5.452 <strong>&gt;</strong> 3.051 ✅</div>
              <div class="vocab-item">1.902 <strong>&lt;</strong> 6.890 ✅</div>
              <div class="vocab-item">7.231 <strong>&lt;</strong> 7.234 ✅</div>
              <div class="vocab-item">4.590 <strong>&lt;</strong> 5.801 ✅</div>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Cuál símbolo completa? 5.452 ___ 3.051', opts:['<','=','>','≈'], ans:'>' },
            { type:'selection', skill:'selection', q:'¿Cuál símbolo completa? 1.902 ___ 6.890', opts:['>','=','<','≈'], ans:'<' },
            { type:'fill', skill:'speaking', q:'7.231 ___ 7.234 (mayor, menor o igual)', ans:'<' },
            { type:'selection', skill:'listening', q:'¿Cuál es el número mayor entre 4.342 y 2.089?', opts:['2.089','4.342','Son iguales','No se puede saber'], ans:'4.342' },
            { type:'selection', skill:'selection', q:'¿Cuál es el número menor entre 7.902 y 7.985?', opts:['7.985','Son iguales','7.902','No se puede saber'], ans:'7.902' },
            { type:'fill', skill:'speaking', q:'802 ___ 987 (usa <, > o =)', ans:'<' },
            { type:'selection', skill:'selection', q:'Selecciona los números menores a 5.000:', opts:['5.012 y 9.085','4.590 y 802','5.801 y 987','6.401 y 2.350'], ans:'4.590 y 802' },
            { type:'selection', skill:'selection', q:'¿Cuál símbolo completa? 6.401 ___ 6.401', opts:['>','<','≈','='], ans:'=' },
            { type:'selection', skill:'listening', q:'Entre 8.435 y 8.400, ¿cuál es mayor?', opts:['8.400','Son iguales','8.435','No se puede comparar'], ans:'8.435' },
            { type:'fill', skill:'speaking', q:'3.340 ___ 2.994 (usa <, > o =)', ans:'>' },
          ]
        },

        // ── TOPIC 6: Series Numéricas ─────────────────────
        {
          id: 'series-numericas',
          title: 'Series Numéricas',
          icon: '🔗',
          content: `
            <h3>Series Numéricas 🔗</h3>
            <p>Una serie numérica es una secuencia de números con un patrón.</p>
            <div class="rule-box" style="background:#E3F2FD;border-left:4px solid #1565C0">
              <p><strong>Serie de +50:</strong> 1.500, 1.550, 1.600, 1.650...</p>
              <p><strong>Serie de +100:</strong> 1.600, 1.700, 1.800, 1.900...</p>
              <p><strong>Serie de -300:</strong> 1.700, 1.400, 1.100...</p>
              <p><strong>Serie de +20:</strong> 1.400, 1.420, 1.440...</p>
              <p><strong>Serie de +30:</strong> 1.420, 1.450, 1.480...</p>
            </div>
            <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32;margin-top:10px">
              <p><strong>Pasos:</strong></p>
              <p>1. Observa la diferencia entre dos números consecutivos.</p>
              <p>2. Aplica ese patrón para encontrar el número que falta.</p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Cuál sigue? 1.500, 1.550, 1.600, ___', opts:['1.650','1.700','1.560','1.605'], ans:'1.650' },
            { type:'selection', skill:'selection', q:'¿Cuál sigue? 1.600, 1.700, 1.800, ___', opts:['1.850','1.900','1.810','2.000'], ans:'1.900' },
            { type:'fill', skill:'speaking', q:'1.700, 1.400, 1.100, ___ (resta 300)', ans:'800' },
            { type:'selection', skill:'listening', q:'¿Qué patrón sigue la serie 1.400, 1.420, 1.440?', opts:['+10','+30','+20','+100'], ans:'+20' },
            { type:'selection', skill:'selection', q:'¿Cuál número falta? 22.592, ___, 21.034 (patrón -50)', opts:['22.542','22.052','21.584','22.500'], ans:'22.542' },
            { type:'fill', skill:'speaking', q:'Series de +30: 1.420, 1.450, ___', ans:'1.480' },
            { type:'selection', skill:'selection', q:'¿Cuál es el patrón? 3.000, 3.050, 3.100, 3.150', opts:['+100','+5','+50','+500'], ans:'+50' },
            { type:'selection', skill:'listening', q:'¿Qué número sigue? 51.878, ___ (patrón -10)', opts:['51.868','51.878','51.888','50.878'], ans:'51.868' },
            { type:'fill', skill:'speaking', q:'2.590, 2.640, 2.690, ___ (+50)', ans:'2.740' },
            { type:'selection', skill:'selection', q:'¿Cuál falta? 29.592, 29.034, ___ (patrón -558... ¿o -50?)', opts:['21.034','28.984','28.992','28.534'], ans:'28.984' },
          ]
        },

        // ── TOPIC 7: Líneas Rectas y Curvas ──────────────
        {
          id: 'lineas',
          title: 'Líneas: Rectas y Curvas',
          icon: '📐',
          content: `
            <h3>Líneas: Rectas y Curvas 📐</h3>
            <div class="vocab-grid">
              <div class="vocab-item">📏 <strong>Línea recta</strong><br>No tiene curvas. Va en una sola dirección.</div>
              <div class="vocab-item">🌊 <strong>Línea curva</strong><br>Tiene curvas. Cambia de dirección suavemente.</div>
            </div>
            <div class="rule-box" style="background:#E3F2FD;border-left:4px solid #1565C0;margin-top:10px">
              <p>Para formar una <strong>línea recta</strong>: une dos puntos con una línea sin curvas.</p>
              <p>Para formar una <strong>línea curva</strong>: une dos puntos con una línea doblada o arqueada.</p>
            </div>
            <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32;margin-top:8px">
              <p><strong>Tipos de líneas rectas:</strong></p>
              <p>➤ <strong>Horizontal</strong> — va de izquierda a derecha ——</p>
              <p>➤ <strong>Vertical</strong> — va de arriba a abajo |</p>
              <p>➤ <strong>Diagonal</strong> — va inclinada /</p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'Una línea que no tiene curvas se llama:', opts:['línea curva','línea diagonal','línea recta','línea ondulada'], ans:'línea recta' },
            { type:'selection', skill:'selection', q:'Una línea que cambia de dirección suavemente se llama:', opts:['línea recta','línea curva','línea horizontal','línea vertical'], ans:'línea curva' },
            { type:'fill', skill:'speaking', q:'Una línea que va de izquierda a derecha se llama línea ___.', ans:'horizontal' },
            { type:'selection', skill:'listening', q:'Si unes dos puntos con una línea arqueada, haces una:', opts:['línea vertical','línea recta','línea curva','línea horizontal'], ans:'línea curva' },
            { type:'selection', skill:'selection', q:'La línea que va de arriba a abajo es:', opts:['horizontal','diagonal','curva','vertical'], ans:'vertical' },
            { type:'fill', skill:'speaking', q:'Una línea inclinada se llama línea ___.', ans:'diagonal' },
            { type:'selection', skill:'selection', q:'¿Cuál de estos es un ejemplo de línea recta?', opts:['Una ola del mar','El borde de una regla','Una serpiente','Un caracol'], ans:'El borde de una regla' },
            { type:'selection', skill:'listening', q:'¿Qué tipo de línea forma un arcoíris?', opts:['Vertical','Recta','Horizontal','Curva'], ans:'Curva' },
          ]
        },

        // ── TOPIC 8: Ángulos ──────────────────────────────
        {
          id: 'angulos',
          title: 'Ángulos',
          icon: '📐',
          content: `
            <h3>Ángulos 📐</h3>
            <p>Un ángulo se forma cuando dos líneas se unen en un punto.</p>
            <div class="vocab-grid">
              <div class="vocab-item">🔺 <strong>Ángulo agudo</strong><br>Mide menos de 90°</div>
              <div class="vocab-item">📐 <strong>Ángulo recto</strong><br>Mide exactamente 90°</div>
              <div class="vocab-item">📏 <strong>Ángulo llano</strong><br>Mide exactamente 180°</div>
              <div class="vocab-item">🔄 <strong>Ángulo obtuso</strong><br>Mide entre 90° y 180°</div>
            </div>
            <div class="rule-box" style="background:#FCE4EC;border-left:4px solid #C62828;margin-top:10px">
              <p><strong>Ángulo llano:</strong> Es el ángulo que mide 180° exactos.</p>
              <p>Se ve como una línea recta: ——————</p>
              <p>Fabián escribió: "Ángulo llano — Es el ángulo que mide 180 grados exactos"</p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Cuántos grados mide un ángulo recto?', opts:['45°','180°','90°','360°'], ans:'90°' },
            { type:'selection', skill:'selection', q:'¿Cuántos grados mide un ángulo llano?', opts:['90°','45°','360°','180°'], ans:'180°' },
            { type:'fill', skill:'speaking', q:'El ángulo llano mide ___ grados exactos.', ans:'180' },
            { type:'selection', skill:'listening', q:'¿Cómo se ve un ángulo llano?', opts:['Como una esquina de un cuadrado','Como una línea recta completa','Como un triángulo','Como un círculo'], ans:'Como una línea recta completa' },
            { type:'selection', skill:'selection', q:'Un ángulo que mide menos de 90° se llama:', opts:['ángulo llano','ángulo recto','ángulo obtuso','ángulo agudo'], ans:'ángulo agudo' },
            { type:'selection', skill:'selection', q:'Un ángulo que mide entre 90° y 180° se llama:', opts:['ángulo agudo','ángulo recto','ángulo obtuso','ángulo llano'], ans:'ángulo obtuso' },
            { type:'fill', skill:'speaking', q:'El ángulo ___ mide exactamente 90°.', ans:'recto' },
            { type:'selection', skill:'listening', q:'¿Qué ángulo forma la esquina de un cuaderno?', opts:['Agudo','Obtuso','Llano','Recto'], ans:'Recto' },
            { type:'selection', skill:'selection', q:'¿Qué parecido tiene un ángulo llano con una línea?', opts:['No se parecen','Un ángulo llano parece exactamente una línea recta','Un ángulo llano es un círculo','Un ángulo llano es curvo'], ans:'Un ángulo llano parece exactamente una línea recta' },
            { type:'fill', skill:'speaking', q:'Un ángulo agudo mide ___ de 90°.', ans:'menos' },
          ]
        },

      ] // end topics
    }  // end unit
  ]    // end units
};     // end CONTENT.fabian.math
