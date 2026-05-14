// ============================================================
//  content-andres-ciencias.js
//  Ciencias — Andrés · Primer Grado
//  Escuela Ramón Barrantes Herrera
//  Maestra: Licda. Elizabeth Vargas Cruz
//
//  Notas: Solo preguntas de selección y completar simples.
//  Andrés tiene 6 años — sin respuestas escritas complejas.
//
//  Temas extraídos del cuaderno de Andrés (Abril–Mayo 2026):
//  Unidad 1: Hábitos de Higiene y Alimentación Saludable
//           (alineado con apuntes manuscritos del cuaderno)
//  Unidad 2: Los Sentidos
//  Unidad 3: Partes del Cuerpo
// ============================================================

CONTENT.andres.ciencias = {
  units: [

    // ══════════════════════════════════════════════════════
    //  UNIT 1 — Higiene y Alimentación
    // ══════════════════════════════════════════════════════
    {
      id: 'ciencias-u1',
      title: 'Unidad 1 — Higiene y Alimentación Saludable',
      theme: 'Hábitos saludables para cuidar el cuerpo',
      essentialQuestion: '¿Cómo cuidamos nuestro cuerpo?',
      status: 'active',
      topics: [

        // ── TOPIC 1: Hábitos de Higiene ──────────────────
        {
          id: 'habitos-higiene',
          title: 'Hábitos de Higiene',
          icon: '🪥',
          content: `
            <h3>Hábitos de Higiene 🪥</h3>
            <p>Los hábitos de higiene nos ayudan a estar aseados y prevenir enfermedades.</p>

            <div class="vocab-grid">
              <div class="vocab-item">🦷 <strong>Cepillarse los dientes</strong></div>
              <div class="vocab-item">🚿 <strong>Bañarse todos los días</strong></div>
              <div class="vocab-item">💧 <strong>Tomar agua</strong></div>
              <div class="vocab-item">👃 <strong>Limpiarse la nariz</strong></div>
              <div class="vocab-item">🥗 <strong>Lavar bien los alimentos</strong></div>
              <div class="vocab-item">🧼 <strong>Lavarse las manos</strong></div>
            </div>

            <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32;margin-top:10px">
              <p>La higiene ayuda a mantenernos sanos.</p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Qué debemos hacer para limpiar los dientes? 🦷', opts:['Dormir','Cepillarlos','Correr','Gritar'], ans:'Cepillarlos' },
            { type:'selection', skill:'selection', q:'¿Cada cuánto debemos bañarnos? 🚿', opts:['Una vez al mes','Todos los días','Nunca','Solo los domingos'], ans:'Todos los días' },
            { type:'selection', skill:'selection', q:'¿Qué debemos hacer antes de comer? 🧼', opts:['Ensuciarnos','Lavarnos las manos','Dormir','Brincar'], ans:'Lavarnos las manos' },
            { type:'selection', skill:'selection', q:'¿Qué bebida es saludable? 💧', opts:['Gaseosa','Agua','Café','Refresco'], ans:'Agua' },
            { type:'selection', skill:'selection', q:'¿Por qué lavamos los alimentos? 🥗', opts:['Para ensuciarlos','Para jugar','Para comer limpios','Para botarlos'], ans:'Para comer limpios' },
            { type:'selection', skill:'selection', q:'La higiene nos ayuda a prevenir ___.', opts:['Juegos','Enfermedades','Tareas','Canciones'], ans:'Enfermedades' },
            { type:'fill', skill:'math', q:'Si Andrés se cepilla los dientes 2 veces al día, en 3 días se los cepilla ___ veces.', ans:'6' },
            { type:'fill', skill:'math', q:'Si tomamos 1 vaso de agua en la mañana y 1 en la tarde, tomamos ___ vasos.', ans:'2' }
          ]
        },

        // ── TOPIC 2: Alimentación Saludable ──────────────
        {
          id: 'alimentacion-saludable',
          title: 'Alimentación Saludable',
          icon: '🍎',
          content: `
            <h3>Alimentación Saludable 🍎</h3>
            <p>Los alimentos saludables ayudan a nuestro cuerpo a crecer fuerte.</p>

            <div class="vocab-grid">
              <div class="vocab-item">🥛 <strong>Leche</strong></div>
              <div class="vocab-item">🍎 <strong>Frutas</strong></div>
              <div class="vocab-item">🥦 <strong>Verduras</strong></div>
              <div class="vocab-item">🍗 <strong>Pollo</strong></div>
              <div class="vocab-item">🐟 <strong>Pescado</strong></div>
              <div class="vocab-item">🥚 <strong>Huevos</strong></div>
              <div class="vocab-item">🧀 <strong>Queso</strong></div>
            </div>

            <div class="rule-box" style="background:#FFF3E0;border-left:4px solid #EF6C00;margin-top:10px">
              <p>Debemos comer menos comida chatarra, gaseosas y frituras.</p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Cuál alimento es saludable? 🍎', opts:['Papas fritas','Frutas','Gaseosas','Dulces'], ans:'Frutas' },
            { type:'selection', skill:'selection', q:'¿Qué bebida es mejor para el cuerpo? 🥛', opts:['Gaseosa','Leche','Refresco','Energética'], ans:'Leche' },
            { type:'selection', skill:'selection', q:'¿Cuál comida debemos comer menos?', opts:['Verduras','Frutas','Comida chatarra','Huevos'], ans:'Comida chatarra' },
            { type:'selection', skill:'selection', q:'¿Qué alimento viene del pescado? 🐟', opts:['Hamburguesa','Pescado','Chocolate','Helado'], ans:'Pescado' },
            { type:'selection', skill:'selection', q:'Las verduras ayudan a nuestro cuerpo a estar ___.', opts:['Débil','Fuerte','Sucio','Dormido'], ans:'Fuerte' },
            { type:'selection', skill:'selection', q:'¿Cuál alimento viene de la gallina? 🥚', opts:['Queso','Huevo','Pescado','Manzana'], ans:'Huevo' },
            { type:'selection', skill:'selection', q:'¿Cuál NO es un alimento saludable?', opts:['Pollo','Confites','Verduras','Leche'], ans:'Confites' },
            { type:'selection', skill:'selection', q:'¿Cuál NO debemos comer mucho?', opts:['Frutas','Pescado','Frituras','Huevos'], ans:'Frituras' },
            { type:'fill', skill:'math', q:'Si Andrés come 2 manzanas y luego 1 más, tiene ___ manzanas.', ans:'3' },
            { type:'fill', skill:'math', q:'Si hay 5 verduras y Andrés come 2, quedan ___ verduras.', ans:'3' }
          ]
        },

        // ── TOPIC 3: Accidentes y Enfermedades ───────────
        {
          id: 'accidentes-enfermedades',
          title: 'Accidentes y Enfermedades',
          icon: '⚠️',
          content: `
            <h3>Accidentes y Enfermedades ⚠️</h3>
            <p>Debemos cuidarnos para evitar accidentes y enfermedades.</p>

            <div class="vocab-grid">
              <div class="vocab-item">🔌 <strong>No tocar enchufes</strong></div>
              <div class="vocab-item">✂️ <strong>Usar bien las tijeras</strong></div>
              <div class="vocab-item">🪜 <strong>Caminar despacio en las gradas</strong></div>
              <div class="vocab-item">🏃 <strong>No jugar en lugares peligrosos</strong></div>
              <div class="vocab-item">💉 <strong>Vacunas</strong></div>
              <div class="vocab-item">🏥 <strong>Ir al médico</strong></div>
              <div class="vocab-item">🏃‍♂️ <strong>Hacer ejercicio</strong></div>
            </div>

            <div class="rule-box" style="background:#E3F2FD;border-left:4px solid #1565C0;margin-top:10px">
              <p>Las vacunas y la higiene ayudan a prevenir enfermedades.</p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Qué no debemos tocar? 🔌', opts:['Pelotas','Enchufes','Libros','Lápices'], ans:'Enchufes' },
            { type:'selection', skill:'selection', q:'¿Cómo debemos caminar en las gradas? 🪜', opts:['Corriendo','Saltando','Despacio','Jugando'], ans:'Despacio' },
            { type:'selection', skill:'selection', q:'¿Quién nos ayuda cuando estamos enfermos? 🏥', opts:['Panadero','Doctor','Piloto','Chef'], ans:'Doctor' },
            { type:'selection', skill:'selection', q:'¿Qué ayuda a prevenir enfermedades? 💉', opts:['Vacunas','Dulces','Videojuegos','Gaseosas'], ans:'Vacunas' },
            { type:'selection', skill:'selection', q:'¿Cómo debemos usar las tijeras? ✂️', opts:['Incorrectamente','Con cuidado','Jugando','Corriendo'], ans:'Con cuidado' },
            { type:'selection', skill:'selection', q:'¿Qué actividad ayuda a nuestro cuerpo? 🏃‍♂️', opts:['Dormir todo el día','Hacer ejercicio','Comer solo dulces','No moverse'], ans:'Hacer ejercicio' },
            { type:'fill', skill:'math', q:'Si Andrés tiene 4 vacunas y recibe 1 más, ahora tiene ___ vacunas.', ans:'5' },
            { type:'fill', skill:'math', q:'Si hay 6 escalones y Andrés baja 2, faltan ___ escalones.', ans:'4' }
          ]
        }

      ]
    },

    // ══════════════════════════════════════════════════════
    //  UNIT 2 — Los Sentidos
    // ══════════════════════════════════════════════════════
    {
      id: 'ciencias-u2',
      title: 'Unidad 2 — Los Sentidos',
      theme: 'Los órganos de los sentidos',
      essentialQuestion: '¿Cómo conocemos el mundo?',
      status: 'active',
      topics: [

        {
          id: 'los-sentidos',
          title: 'Los Sentidos',
          icon: '👀',
          content: `
            <h3>Los Sentidos 👀👂👃👅✋</h3>
            <p>Los sentidos nos ayudan a conocer el mundo.</p>

            <div class="vocab-grid">
              <div class="vocab-item">👀 <strong>Vista → ojos</strong></div>
              <div class="vocab-item">👃 <strong>Olfato → nariz</strong></div>
              <div class="vocab-item">✋ <strong>Tacto → piel</strong></div>
              <div class="vocab-item">👂 <strong>Oído → orejas</strong></div>
              <div class="vocab-item">👅 <strong>Gusto → lengua</strong></div>
            </div>

            <div class="rule-box" style="background:#E8F5E9;border-left:4px solid #2E7D32;margin-top:10px">
              <p>Debemos cuidar nuestros sentidos y mantenerlos limpios.</p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Con qué vemos? 👀', opts:['Nariz','Ojos','Orejas','Lengua'], ans:'Ojos' },
            { type:'selection', skill:'selection', q:'¿Con qué escuchamos sonidos? 👂', opts:['Orejas','Pies','Nariz','Manos'], ans:'Orejas' },
            { type:'selection', skill:'selection', q:'¿Con qué olemos las flores? 👃', opts:['Ojos','Piel','Nariz','Boca'], ans:'Nariz' },
            { type:'selection', skill:'selection', q:'¿Con qué sentimos frío y calor? ✋', opts:['Piel','Orejas','Lengua','Cabello'], ans:'Piel' },
            { type:'selection', skill:'selection', q:'¿Con qué probamos sabores? 👅', opts:['Lengua','Nariz','Ojos','Manos'], ans:'Lengua' },
            { type:'selection', skill:'selection', q:'¿Qué sentido usamos para escuchar música? 🎵', opts:['Vista','Oído','Gusto','Tacto'], ans:'Oído' },
            { type:'fill', skill:'math', q:'Tenemos ___ ojos.', ans:'2' },
            { type:'fill', skill:'math', q:'Tenemos ___ orejas.', ans:'2' }
          ]
        }

      ]
    },

    // ══════════════════════════════════════════════════════
    //  UNIT 3 — Partes del Cuerpo
    // ══════════════════════════════════════════════════════
    {
      id: 'ciencias-u3',
      title: 'Unidad 3 — Partes del Cuerpo',
      theme: 'La cabeza, el tronco y las extremidades',
      essentialQuestion: '¿Cuáles son las partes del cuerpo?',
      status: 'active',
      topics: [

        {
          id: 'partes-cuerpo',
          title: 'Partes del Cuerpo',
          icon: '🧍',
          content: `
            <h3>Partes del Cuerpo 🧍</h3>
            <p>El cuerpo humano tiene cabeza, tronco y extremidades.</p>

            <div class="vocab-grid">
              <div class="vocab-item">🙂 <strong>Cabeza</strong></div>
              <div class="vocab-item">🫁 <strong>Tronco</strong></div>
              <div class="vocab-item">💪 <strong>Brazos</strong></div>
              <div class="vocab-item">✋ <strong>Manos</strong></div>
              <div class="vocab-item">🦵 <strong>Piernas</strong></div>
              <div class="vocab-item">🦶 <strong>Pies</strong></div>
            </div>

            <div class="rule-box" style="background:#FFF9C4;border-left:4px solid #F9A825;margin-top:10px">
              <p>Debemos cuidar todas las partes del cuerpo.</p>
            </div>`,
          questions: [
            { type:'selection', skill:'selection', q:'¿Qué parte del cuerpo usamos para caminar? 🦶', opts:['Ojos','Piernas','Nariz','Orejas'], ans:'Piernas' },
            { type:'selection', skill:'selection', q:'¿Dónde están los ojos?', opts:['En los pies','En la cabeza','En las manos','En las piernas'], ans:'En la cabeza' },
            { type:'selection', skill:'selection', q:'¿Con qué agarramos objetos? ✋', opts:['Pies','Orejas','Manos','Rodillas'], ans:'Manos' },
            { type:'selection', skill:'selection', q:'¿Cuántos brazos tenemos?', opts:['1','2','3','4'], ans:'2' },
            { type:'selection', skill:'selection', q:'¿Qué parte une la cabeza con el cuerpo?', opts:['Cuello','Pie','Codo','Rodilla'], ans:'Cuello' },
            { type:'selection', skill:'selection', q:'¿Qué parte del cuerpo tiene dedos? ✋', opts:['Oreja','Mano','Nariz','Espalda'], ans:'Mano' },
            { type:'fill', skill:'math', q:'Si tienes 5 dedos en una mano y 5 en la otra, tienes ___ dedos.', ans:'10' },
            { type:'fill', skill:'math', q:'Tenemos ___ piernas.', ans:'2' }
          ]
        }

      ]
    }

  ]
};

