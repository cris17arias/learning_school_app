// ============================================================
//  content-fabian-ciencias.js
//  Ciencias 3.° — Fabián
//  Escuela Ramón Barrantes Herrera · Sección 3-1
//  I Prueba, I Semestre 2026
//  Temas: Sistema Óseo, Muscular, Digestivo, Nutrición
// ============================================================

(function () {
  function register() {
    if (typeof CONTENT === 'undefined') {
      setTimeout(register, 50);
      return;
    }

    CONTENT.fabian.ciencias = {
      units: [
        {
          id: 'ciencias-u1',
          title: 'I Prueba — Ciencias 3.° año',
          theme: 'Sistemas del Cuerpo Humano y Nutrición',
          essentialQuestion: '¿Cómo funciona y cómo cuido mi cuerpo?',
          status: 'active',
          topics: [

            // ──────────────────────────────────────────────
            // 1. SISTEMA ÓSEO
            // ──────────────────────────────────────────────
            {
              id: 'oseo',
              title: 'Sistema Óseo',
              icon: '🦴',
              content: `
                <h3>El Sistema Óseo 🦴</h3>
                <div class="rule-box" style="background:#E3F2FD;border-left:4px solid #1565C0">
                  <p>El cuerpo humano tiene <strong>206 huesos</strong> clasificados según su forma:</p>
                </div>
                <div class="vocab-grid">
                  <div class="vocab-item">📏 <strong>Largos:</strong> Fémur, húmero, tibia, peroné, cúbito, radio</div>
                  <div class="vocab-item">🔲 <strong>Cortos:</strong> Falanges, tarsos</div>
                  <div class="vocab-item">🪟 <strong>Planos:</strong> Omoplato (escápula), pelvis</div>
                  <div class="vocab-item">🌙 <strong>Curvos:</strong> Costillas, cráneo</div>
                </div>
                <h3 style="margin-top:14px">Articulaciones</h3>
                <div class="vocab-grid">
                  <div class="vocab-item">🔒 <strong>Fijas:</strong> No permiten movimiento (cráneo)</div>
                  <div class="vocab-item">↔️ <strong>Semimóviles:</strong> Movimiento limitado (columna)</div>
                  <div class="vocab-item">🔄 <strong>Móviles:</strong> Gran rango de movimiento (hombro, codo, muñeca)</div>
                </div>
                <h3 style="margin-top:14px">⚠️ Enfermedades y Lesiones</h3>
                <div class="vocab-grid">
                  <div class="vocab-item">🦴 <strong>Osteoporosis:</strong> Debilitamiento por falta de calcio</div>
                  <div class="vocab-item">💥 <strong>Fractura:</strong> Ruptura del hueso</div>
                  <div class="vocab-item">🔀 <strong>Luxación:</strong> Articulación fuera de lugar + ligamentos rotos</div>
                  <div class="vocab-item">🔥 <strong>Artritis:</strong> Inflamación de articulaciones</div>
                </div>
                <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32;margin-top:12px">
                  <p><strong>✅ Cuidados:</strong> Tomar 15 min de sol diarios (vitamina D) · Consumir calcio · Hacer ejercicio</p>
                </div>
              `,
              questions: [
                { type:'selection', skill:'selection', q:'¿Cuántos huesos tiene el cuerpo humano?', opts:['150 huesos','206 huesos','300 huesos','186 huesos'], ans:'206 huesos' },
                { type:'selection', skill:'selection', q:'¿Cuál es un ejemplo de hueso LARGO?', opts:['Cráneo','Costillas','Fémur','Falanges'], ans:'Fémur' },
                { type:'selection', skill:'selection', q:'¿Qué tipo de articulación es el CRÁNEO?', opts:['Móvil','Semimóvil','Fija','Libre'], ans:'Fija' },
                { type:'selection', skill:'listening', q:'¿Qué enfermedad es el debilitamiento de los huesos por falta de calcio?', opts:['Artritis','Fractura','Osteoporosis','Luxación'], ans:'Osteoporosis' },
                { type:'selection', skill:'selection', q:'¿Cuál es una medida para cuidar los huesos?', opts:['Tomar 15 min de sol al día','Comer mucha azúcar','Dormir todo el día','Evitar el ejercicio'], ans:'Tomar 15 min de sol al día' },
                { type:'selection', skill:'selection', q:'¿Qué es una LUXACIÓN?', opts:['El hueso se rompe','La articulación se sale de su lugar y ligamentos se rompen','Inflamación de articulaciones','Debilitamiento óseo'], ans:'La articulación se sale de su lugar y ligamentos se rompen' },
                { type:'fill', skill:'speaking', q:'El omoplato es un ejemplo de hueso ___.', ans:'plano' },
                { type:'selection', skill:'selection', q:'Las costillas son un ejemplo de hueso...', opts:['largo','corto','plano','curvo'], ans:'curvo' },
                { type:'selection', skill:'selection', q:'¿Cuál es una articulación MÓVIL?', opts:['Cráneo','Pelvis','Hombro','Vértebras'], ans:'Hombro' },
                { type:'fill', skill:'speaking', q:'Las falanges y los tarsos son ejemplos de huesos ___.', ans:'cortos' },
              ]
            },

            // ──────────────────────────────────────────────
            // 2. SISTEMA MUSCULAR
            // ──────────────────────────────────────────────
            {
              id: 'muscular',
              title: 'Sistema Muscular',
              icon: '💪',
              content: `
                <h3>El Sistema Muscular 💪</h3>
                <div class="rule-box" style="background:#FCE4EC;border-left:4px solid #C62828">
                  <p>El cuerpo humano tiene <strong>más de 600 músculos</strong>.</p>
                </div>
                <h3 style="margin-top:12px">Tipos de movimiento</h3>
                <div class="vocab-grid">
                  <div class="vocab-item">✋ <strong>Voluntario:</strong> Lo decidimos conscientemente (mover la mano)</div>
                  <div class="vocab-item">❤️ <strong>Involuntario:</strong> Funcionan solos (corazón, estómago, intestinos)</div>
                </div>
                <h3 style="margin-top:12px">Músculos por zona</h3>
                <div class="vocab-grid">
                  <div class="vocab-item">😊 <strong>Cara:</strong> Más de 30 músculos</div>
                  <div class="vocab-item">💪 <strong>Parte superior:</strong> Pectorales, bíceps, abdominales</div>
                  <div class="vocab-item">🦵 <strong>Parte inferior:</strong> Femoral, glúteos</div>
                </div>
                <h3 style="margin-top:12px">⚠️ Lesiones Musculares</h3>
                <div class="vocab-grid">
                  <div class="vocab-item">🌀 <strong>Esguince:</strong> Articulación se tuerce sin dislocarse</div>
                  <div class="vocab-item">🩸 <strong>Desgarro:</strong> Pequeña ruptura muscular con hemorragia</div>
                  <div class="vocab-item">📉 <strong>Atrofia:</strong> Pérdida de masa muscular por falta de ejercicio</div>
                </div>
                <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32;margin-top:12px">
                  <p><strong>✅ Cuidados:</strong> Calentar antes del ejercicio · Hidratarse · Ejercicio regular</p>
                </div>
              `,
              questions: [
                { type:'selection', skill:'selection', q:'¿Cuántos músculos hay en el cuerpo humano?', opts:['Más de 300','Más de 600','Exactamente 206','Más de 1000'], ans:'Más de 600' },
                { type:'selection', skill:'listening', q:'¿El corazón es un músculo voluntario o involuntario?', opts:['Voluntario','Involuntario','Los dos','Ninguno'], ans:'Involuntario' },
                { type:'selection', skill:'selection', q:'¿Qué es un ESGUINCE?', opts:['Ruptura total del músculo','La articulación se tuerce sin dislocarse','Pérdida de masa muscular','Inflamación de los huesos'], ans:'La articulación se tuerce sin dislocarse' },
                { type:'selection', skill:'selection', q:'¿Cuál es la función principal del sistema muscular?', opts:['Proteger los órganos internos','Permitir el movimiento y mantener la postura','Producir sangre','Filtrar toxinas'], ans:'Permitir el movimiento y mantener la postura' },
                { type:'selection', skill:'selection', q:'¿Qué es la ATROFIA muscular?', opts:['Ruptura con hemorragia','Inflamación muscular','Pérdida de masa muscular por falta de ejercicio','Luxación'], ans:'Pérdida de masa muscular por falta de ejercicio' },
                { type:'fill', skill:'speaking', q:'Para proteger los músculos, debemos ___ antes de hacer ejercicio.', ans:'calentar' },
                { type:'selection', skill:'selection', q:'¿Cuál es un ejemplo de movimiento VOLUNTARIO?', opts:['El corazón late','El estómago digiere','Mover la mano','El intestino trabaja'], ans:'Mover la mano' },
                { type:'selection', skill:'listening', q:'¿El DESGARRO implica una ruptura muscular con hemorragia?', opts:['Sí, es correcto','No, es solo un esguince','No, es atrofia','Solo en atletas'], ans:'Sí, es correcto' },
                { type:'selection', skill:'selection', q:'¿En la cara cuántos músculos aproximadamente tenemos?', opts:['Más de 10','Más de 30','Exactamente 20','Más de 100'], ans:'Más de 30' },
                { type:'fill', skill:'speaking', q:'El desgarro implica una pequeña ruptura muscular acompañada de ___.', ans:'hemorragia' },
              ]
            },

            // ──────────────────────────────────────────────
            // 3. SISTEMA DIGESTIVO
            // ──────────────────────────────────────────────
            {
              id: 'digestivo',
              title: 'Sistema Digestivo',
              icon: '🫁',
              content: `
                <h3>El Sistema Digestivo 🫁</h3>
                <p style="margin-bottom:12px">Convierte los alimentos en nutrientes que el cuerpo puede usar.</p>
                <div class="vocab-grid">
                  <div class="vocab-item">👄 <strong>Boca:</strong> Tritura con los dientes y humedece con saliva</div>
                  <div class="vocab-item">💧 <strong>Glándulas salivales:</strong> Producen saliva para comenzar la digestión</div>
                  <div class="vocab-item">〰️ <strong>Esófago:</strong> Tubo que lleva la comida al estómago</div>
                  <div class="vocab-item">🫙 <strong>Estómago:</strong> Mezcla la comida con jugos digestivos</div>
                  <div class="vocab-item">🟡 <strong>Intestino delgado:</strong> Absorbe los nutrientes hacia la sangre</div>
                  <div class="vocab-item">🟤 <strong>Intestino grueso:</strong> Absorbe el agua, forma las heces</div>
                  <div class="vocab-item">🟠 <strong>Hígado:</strong> Produce bilis para digerir las grasas</div>
                </div>
                <h3 style="margin-top:14px">⚠️ Enfermedades Digestivas</h3>
                <div class="vocab-grid">
                  <div class="vocab-item">🦠 <strong>Cólera:</strong> Bacteria en agua contaminada; diarrea y fiebre</div>
                  <div class="vocab-item">🔥 <strong>Gastritis:</strong> Inflamación del estómago; puede causar úlceras</div>
                  <div class="vocab-item">😣 <strong>Estreñimiento:</strong> Difícil ir al baño menos de 3 veces/semana</div>
                  <div class="vocab-item">🦷 <strong>Caries:</strong> Bacterias dañan los dientes</div>
                </div>
                <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32;margin-top:12px">
                  <p><strong>✅ Cuidados:</strong> Cepillarse dientes regularmente · Tomar agua y fibra · Consumir alimentos limpios</p>
                </div>
              `,
              questions: [
                { type:'selection', skill:'selection', q:'¿Cuál es la función de la boca en la digestión?', opts:['Absorber nutrientes','Triturar los alimentos y humedecerlos con saliva','Mezclar con jugos gástricos','Llevar la comida al estómago'], ans:'Triturar los alimentos y humedecerlos con saliva' },
                { type:'selection', skill:'selection', q:'¿Qué hace el ESÓFAGO?', opts:['Produce jugos digestivos','Absorbe los nutrientes','Es el tubo que lleva la comida al estómago','Almacena la comida'], ans:'Es el tubo que lleva la comida al estómago' },
                { type:'fill', skill:'speaking', q:'El ___ mezcla la comida con los jugos digestivos y la convierte en una masa.', ans:'estómago' },
                { type:'selection', skill:'selection', q:'¿Qué enfermedad es causada por una bacteria en agua contaminada?', opts:['Gastritis','Caries','Cólera','Estreñimiento'], ans:'Cólera' },
                { type:'selection', skill:'listening', q:'¿La gastritis puede causar úlceras si no se trata?', opts:['Sí, es correcto','No, nunca','Solo en adultos','Solo si hay cólera'], ans:'Sí, es correcto' },
                { type:'selection', skill:'selection', q:'¿Para qué sirve el HÍGADO en la digestión?', opts:['Lleva comida al estómago','Almacena las heces','Produce bilis que ayuda a digerir las grasas','Absorbe el agua'], ans:'Produce bilis que ayuda a digerir las grasas' },
                { type:'selection', skill:'selection', q:'¿Dónde se absorben los nutrientes principalmente?', opts:['Estómago','Intestino grueso','Intestino delgado','Boca'], ans:'Intestino delgado' },
                { type:'selection', skill:'selection', q:'¿Cómo se previenen las CARIES?', opts:['Tomando mucha agua','Cepillándonos dientes regularmente y comiendo menos dulces','Comiendo fruta','Haciendo ejercicio'], ans:'Cepillándonos dientes regularmente y comiendo menos dulces' },
                { type:'fill', skill:'speaking', q:'Las glándulas salivales producen ___ para humedecer los alimentos.', ans:'saliva' },
                { type:'selection', skill:'listening', q:'El estreñimiento ocurre cuando es difícil ir al baño menos de...', opts:['una vez al día','dos veces a la semana','tres veces a la semana','cinco veces a la semana'], ans:'tres veces a la semana' },
              ]
            },

            // ──────────────────────────────────────────────
            // 4. NUTRICIÓN
            // ──────────────────────────────────────────────
            {
              id: 'nutricion',
              title: 'Nutrición',
              icon: '🥦',
              content: `
                <h3>Nutrición 🥦</h3>
                <p style="margin-bottom:12px">Los nutrientes son sustancias que el cuerpo necesita para funcionar bien.</p>
                <div class="vocab-grid">
                  <div class="vocab-item">⚡ <strong>Carbohidratos:</strong> Principal fuente de energía.<br><em>Miel, frutas, papas, yuca, pan</em></div>
                  <div class="vocab-item">💪 <strong>Proteínas:</strong> Crecimiento y protección del cuerpo.<br><em>Leche, vegetales, frijoles, lentejas</em></div>
                  <div class="vocab-item">🥑 <strong>Lípidos (grasas):</strong> Almacenan energía.<br><em>Mayonesa, aguacate</em></div>
                  <div class="vocab-item">🍊 <strong>Vitaminas:</strong> Crecimiento y formación de tejidos.<br><em>Frutas, verduras, carnes</em></div>
                  <div class="vocab-item">🥛 <strong>Minerales:</strong> Desarrollo óseo y nervioso.<br><em>Legumbres, leche, frutos secos</em></div>
                </div>
              `,
              questions: [
                { type:'selection', skill:'selection', q:'¿Cuál es la función principal de los CARBOHIDRATOS?', opts:['Construir músculos','Ser fuente de energía','Proteger los huesos','Regular la temperatura'], ans:'Ser fuente de energía' },
                { type:'selection', skill:'selection', q:'¿Qué alimentos son ricos en PROTEÍNAS?', opts:['Miel, frutas y pan','Mayonesa y aguacate','Leche, vegetales, frijoles y lentejas','Solo la carne roja'], ans:'Leche, vegetales, frijoles y lentejas' },
                { type:'selection', skill:'listening', q:'¿Los lípidos almacenan energía cuando faltan carbohidratos?', opts:['Sí, es correcto','No, eso lo hacen las vitaminas','No, son solo para el corazón','No tienen función energética'], ans:'Sí, es correcto' },
                { type:'selection', skill:'selection', q:'¿Para qué sirven los MINERALES en el cuerpo?', opts:['Son fuente de energía inmediata','Ayudan al desarrollo del sistema óseo y nervioso','Forman los músculos','Solo hidratan el cuerpo'], ans:'Ayudan al desarrollo del sistema óseo y nervioso' },
                { type:'selection', skill:'selection', q:'¿Qué nutriente es esencial para el crecimiento y formación de tejidos?', opts:['Carbohidratos','Lípidos','Vitaminas','Minerales'], ans:'Vitaminas' },
                { type:'fill', skill:'speaking', q:'La miel, las frutas, las papas, la yuca y el pan son fuentes de ___.', ans:'carbohidratos' },
                { type:'selection', skill:'selection', q:'¿Las proteínas ayudan al crecimiento y protección del cuerpo?', opts:['Sí','No','Solo en adultos','Solo los minerales hacen eso'], ans:'Sí' },
                { type:'selection', skill:'selection', q:'¿En qué alimentos se encuentran principalmente las VITAMINAS?', opts:['Pan, yuca y papas','Frutas, verduras y carnes','Mayonesa y aguacate','Solo en leche'], ans:'Frutas, verduras y carnes' },
                { type:'fill', skill:'speaking', q:'La mayonesa y el aguacate son fuentes de ___ (grasas).', ans:'lípidos' },
                { type:'selection', skill:'listening', q:'¿Cuál nutriente se encuentra en legumbres, leche y frutos secos?', opts:['Carbohidratos','Proteínas','Vitaminas','Minerales'], ans:'Minerales' },
              ]
            },

          ] // end topics
        }
      ] // end units
    }; // end ciencias

    console.log('✅ Ciencias content para Fabián cargado.');
  }

  register();
})();