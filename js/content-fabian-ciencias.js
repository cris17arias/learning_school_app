// ============================================================
//  content-fabian-ciencias.js
//  Ciencias 3° – Práctica de Fabián
//  Escuela Ramón Barrantes Herrera · Sección 3-1
// ============================================================

const CIENCIAS_CONTENT = {

  // ----------------------------------------------------------
  //  SISTEMA ÓSEO
  // ----------------------------------------------------------
  ciencias_oseo: {
    title: 'Sistema Óseo',
    emoji: '🦴',
    studyNotes: `
      <h3>🦴 El Sistema Óseo</h3>
      <p>El cuerpo humano tiene <strong>206 huesos</strong> que se clasifican según su forma:</p>
      <ul>
        <li><strong>Largos:</strong> Fémur, húmero, tibia, peroné, cúbito, radio</li>
        <li><strong>Cortos:</strong> Falanges, tarsos</li>
        <li><strong>Planos:</strong> Omoplato (escápula), pelvis</li>
        <li><strong>Curvos:</strong> Costillas, cráneo</li>
      </ul>
      <h3>🔗 Articulaciones</h3>
      <ul>
        <li><strong>Fijas:</strong> No permiten movimiento (cráneo)</li>
        <li><strong>Semimóviles:</strong> Movimiento limitado (pelvis)</li>
        <li><strong>Móviles:</strong> Gran rango de movimiento (hombro, codo, muñeca)</li>
      </ul>
      <h3>⚠️ Enfermedades y Lesiones</h3>
      <ul>
        <li><strong>Osteoporosis:</strong> Debilitamiento por falta de calcio</li>
        <li><strong>Fractura:</strong> Ruptura del hueso</li>
        <li><strong>Luxación:</strong> Articulación fuera de lugar + ligamentos rotos</li>
        <li><strong>Artritis:</strong> Inflamación de articulaciones</li>
      </ul>
      <h3>✅ Cuidados</h3>
      <ul>
        <li>Tomar al menos 15 minutos de sol diarios (vitamina D)</li>
        <li>Consumir alimentos ricos en calcio</li>
        <li>Hacer ejercicio regularmente</li>
      </ul>
    `,
    questions: [
      {
        id: 'oseo_1', type: 'mc',
        text: '¿Cuántos huesos tiene el cuerpo humano?',
        options: ['150 huesos', '206 huesos', '300 huesos', '186 huesos'],
        answer: 1,
        explanation: 'El cuerpo humano tiene 206 huesos que se clasifican según su forma y tamaño.'
      },
      {
        id: 'oseo_2', type: 'mc',
        text: '¿Cuál es un ejemplo de hueso largo?',
        options: ['Cráneo', 'Costillas', 'Fémur', 'Falanges'],
        answer: 2,
        explanation: 'El fémur es un hueso largo. También son largos: húmero, tibia, peroné, cúbito y radio.'
      },
      {
        id: 'oseo_3', type: 'mc',
        text: '¿Qué tipo de articulación es el cráneo?',
        options: ['Articulación móvil', 'Articulación semimóvil', 'Articulación fija', 'Articulación libre'],
        answer: 2,
        explanation: 'Las articulaciones fijas no permiten movimiento, como las del cráneo.'
      },
      {
        id: 'oseo_4', type: 'tf',
        text: 'Las costillas son un ejemplo de hueso curvo.',
        answer: true,
        explanation: '¡Verdad! Los huesos curvos incluyen las costillas y los huesos del cráneo.'
      },
      {
        id: 'oseo_5', type: 'mc',
        text: '¿Qué enfermedad es el debilitamiento de los huesos por falta de calcio?',
        options: ['Artritis', 'Fractura', 'Osteoporosis', 'Luxación'],
        answer: 2,
        explanation: 'La osteoporosis es el debilitamiento de los huesos por falta de calcio.'
      },
      {
        id: 'oseo_6', type: 'mc',
        text: '¿Cuál es una medida para cuidar los huesos?',
        options: ['Tomar al menos 15 minutos de sol al día', 'Comer mucha azúcar', 'Dormir todo el día', 'Evitar el ejercicio'],
        answer: 0,
        explanation: 'Tomar al menos 15 minutos de sol diarios ayuda al cuerpo a producir vitamina D, esencial para los huesos.'
      },
      {
        id: 'oseo_7', type: 'mc',
        text: '¿Qué es una luxación?',
        options: ['El hueso se rompe', 'La articulación se sale de su lugar y ligamentos se rompen', 'Inflamación de articulaciones', 'Debilitamiento óseo'],
        answer: 1,
        explanation: 'La luxación ocurre cuando la articulación se sale de su lugar y además ligamentos y tendones se rompen.'
      },
      {
        id: 'oseo_8', type: 'tf',
        text: 'Las falanges son huesos cortos.',
        answer: true,
        explanation: '¡Correcto! Las falanges y los tarsos son ejemplos de huesos cortos.'
      },
      {
        id: 'oseo_9', type: 'fill',
        text: 'El omoplato es un ejemplo de hueso ______.',
        answer: 'plano',
        explanation: 'El omoplato (escápula) es un hueso plano. También lo son los que forman la pelvis.'
      },
      {
        id: 'oseo_10', type: 'mc',
        text: '¿Cuál es una articulación móvil?',
        options: ['Cráneo', 'Pelvis', 'Hombro', 'Columna'],
        answer: 2,
        explanation: 'El hombro, el codo y la muñeca son articulaciones móviles — permiten gran rango de movimiento.'
      }
    ]
  },

  // ----------------------------------------------------------
  //  SISTEMA MUSCULAR
  // ----------------------------------------------------------
  ciencias_muscular: {
    title: 'Sistema Muscular',
    emoji: '💪',
    studyNotes: `
      <h3>💪 El Sistema Muscular</h3>
      <p>El cuerpo humano tiene <strong>más de 600 músculos</strong>.</p>
      <h3>Tipos de movimiento</h3>
      <ul>
        <li><strong>Voluntario:</strong> Lo decidimos conscientemente (mover la mano)</li>
        <li><strong>Involuntario:</strong> Funcionan solos (corazón, estómago, intestinos)</li>
      </ul>
      <h3>Músculos por zona</h3>
      <ul>
        <li><strong>Cara:</strong> Más de 30 músculos</li>
        <li><strong>Superiores:</strong> Pectorales, bíceps, abdominales</li>
        <li><strong>Inferiores:</strong> Femoral, glúteos</li>
      </ul>
      <h3>⚠️ Lesiones Musculares</h3>
      <ul>
        <li><strong>Esguince:</strong> Articulación se tuerce sin dislocarse, puede romper el músculo</li>
        <li><strong>Desgarro:</strong> Pequeña ruptura muscular con hemorragia</li>
        <li><strong>Atrofia:</strong> Pérdida de masa muscular por falta de ejercicio</li>
      </ul>
      <h3>✅ Cuidados</h3>
      <ul>
        <li>Calentar antes de hacer ejercicio</li>
        <li>Hidratarse correctamente</li>
        <li>Hacer ejercicio regularmente</li>
      </ul>
    `,
    questions: [
      {
        id: 'musc_1', type: 'mc',
        text: '¿Cuántos músculos hay en el cuerpo humano?',
        options: ['Más de 300', 'Más de 600', 'Exactamente 206', 'Más de 1000'],
        answer: 1,
        explanation: 'En el cuerpo humano hay más de 600 músculos.'
      },
      {
        id: 'musc_2', type: 'tf',
        text: 'El corazón es un músculo involuntario.',
        answer: true,
        explanation: '¡Correcto! El corazón, el estómago y los intestinos son músculos involuntarios — funcionan sin que lo decidamos.'
      },
      {
        id: 'musc_3', type: 'mc',
        text: '¿Qué es un esguince?',
        options: ['Ruptura total del músculo', 'La articulación se tuerce sin dislocarse, puede romper el músculo', 'Pérdida de masa muscular', 'Inflamación de los huesos'],
        answer: 1,
        explanation: 'El esguince ocurre cuando una articulación se tuerce o dobla sin dislocarse, pudiendo resultar en ruptura del músculo.'
      },
      {
        id: 'musc_4', type: 'mc',
        text: '¿Cuál es la función principal del sistema muscular?',
        options: ['Proteger los órganos internos', 'Permitir el movimiento y mantener la postura', 'Producir sangre', 'Filtrar toxinas'],
        answer: 1,
        explanation: 'Los músculos permiten el movimiento, mantienen la postura y trabajan junto con los huesos.'
      },
      {
        id: 'musc_5', type: 'mc',
        text: '¿Qué es la atrofia muscular?',
        options: ['Ruptura de un músculo con hemorragia', 'Inflamación de un músculo', 'Desgaste o pérdida de masa muscular por falta de ejercicio', 'Luxación de una articulación'],
        answer: 2,
        explanation: 'La atrofia muscular es el desgaste o pérdida de masa muscular, a menudo por falta de ejercicio, enfermedades o nutrición deficiente.'
      },
      {
        id: 'musc_6', type: 'fill',
        text: 'Para proteger los músculos, debemos _______ antes de hacer ejercicio.',
        answer: 'calentar',
        explanation: 'Calentar antes de cualquier actividad deportiva previene lesiones musculares.'
      },
      {
        id: 'musc_7', type: 'mc',
        text: '¿Cuál es un ejemplo de movimiento voluntario?',
        options: ['El corazón late', 'El estómago digiere', 'Mover la mano', 'Parpadear mientras duermes'],
        answer: 2,
        explanation: 'Mover la mano es voluntario porque lo decidimos conscientemente. Los movimientos del corazón son involuntarios.'
      },
      {
        id: 'musc_8', type: 'tf',
        text: 'El desgarro implica una pequeña ruptura muscular acompañada de hemorragia.',
        answer: true,
        explanation: '¡Correcto! El desgarro implica una pequeña ruptura muscular con hemorragia y puede ser causado por golpes o falta de calentamiento.'
      },
      {
        id: 'musc_9', type: 'mc',
        text: '¿Qué músculos están en las extremidades superiores?',
        options: ['Femoral y glúteos', 'Pectorales, bíceps y abdominales', 'Solo el bíceps', 'Trapecio y dorsal'],
        answer: 1,
        explanation: 'Los pectorales, bíceps y abdominales se encuentran en la parte superior del cuerpo.'
      },
      {
        id: 'musc_10', type: 'mc',
        text: '¿En la cara cuántos músculos aproximadamente tenemos?',
        options: ['Más de 10', 'Más de 30', 'Exactamente 20', 'Más de 100'],
        answer: 1,
        explanation: 'En la cara tenemos más de 30 músculos que nos ayudan a sonreír, hablar y hacer gestos.'
      }
    ]
  },

  // ----------------------------------------------------------
  //  SISTEMA DIGESTIVO
  // ----------------------------------------------------------
  ciencias_digestivo: {
    title: 'Sistema Digestivo',
    emoji: '🫁',
    studyNotes: `
      <h3>🫁 El Sistema Digestivo</h3>
      <p>Convierte los alimentos en nutrientes que el cuerpo puede usar.</p>
      <h3>Órganos y funciones</h3>
      <ul>
        <li><strong>Boca:</strong> Tritura con los dientes y humedece con saliva</li>
        <li><strong>Glándulas salivales:</strong> Producen saliva para humedecer y comenzar la digestión</li>
        <li><strong>Esófago:</strong> Tubo que lleva la comida al estómago</li>
        <li><strong>Estómago:</strong> Mezcla la comida con jugos digestivos y la convierte en masa</li>
        <li><strong>Intestino delgado:</strong> Absorbe los nutrientes hacia la sangre</li>
        <li><strong>Intestino grueso:</strong> Absorbe el agua, forma las heces</li>
        <li><strong>Hígado:</strong> Produce bilis para digerir las grasas</li>
      </ul>
      <h3>⚠️ Enfermedades Digestivas</h3>
      <ul>
        <li><strong>Cólera:</strong> Bacteria en agua y alimentos contaminados; diarrea y fiebre</li>
        <li><strong>Gastritis:</strong> Inflamación del estómago; puede causar úlceras</li>
        <li><strong>Estreñimiento:</strong> Dificultad para ir al baño (menos de 3 veces/semana)</li>
        <li><strong>Caries:</strong> Bacterias dañan los dientes</li>
      </ul>
      <h3>✅ Cuidados</h3>
      <ul>
        <li>Cepillarse los dientes y la lengua regularmente</li>
        <li>Tomar suficiente agua y fibra</li>
        <li>Consumir agua y alimentos limpios</li>
      </ul>
    `,
    questions: [
      {
        id: 'dig_1', type: 'mc',
        text: '¿Cuál es la función de la boca en la digestión?',
        options: ['Absorber nutrientes', 'Triturar los alimentos con los dientes y humedecerlos con saliva', 'Mezclar con jugos gástricos', 'Llevar la comida al estómago'],
        answer: 1,
        explanation: 'En la boca, los dientes trituran los alimentos y la saliva los humedece para facilitar el tragado.'
      },
      {
        id: 'dig_2', type: 'mc',
        text: '¿Qué hace el esófago?',
        options: ['Produce jugos digestivos', 'Es donde se absorben los nutrientes', 'Es el tubo que lleva la comida al estómago', 'Almacena la comida'],
        answer: 2,
        explanation: 'El esófago es el tubo que transporta la comida desde la boca hasta el estómago.'
      },
      {
        id: 'dig_3', type: 'fill',
        text: 'El _______ mezcla la comida con los jugos digestivos y la convierte en una masa.',
        answer: 'estómago',
        explanation: 'El estómago mezcla la comida con los jugos digestivos y la convierte en una masa lista para continuar la digestión.'
      },
      {
        id: 'dig_4', type: 'mc',
        text: '¿Qué enfermedad digestiva es causada por una bacteria en agua y alimentos contaminados?',
        options: ['Gastritis', 'Caries', 'Cólera', 'Estreñimiento'],
        answer: 2,
        explanation: 'El cólera es causado por una bacteria en agua y alimentos contaminados. Provoca diarrea intensa y fiebre.'
      },
      {
        id: 'dig_5', type: 'tf',
        text: 'El estreñimiento es cuando es difícil ir al baño menos de tres veces a la semana.',
        answer: true,
        explanation: '¡Correcto! El estreñimiento causa dolor y heces duras y secas. Tomar agua y fibra ayuda a prevenirlo.'
      },
      {
        id: 'dig_6', type: 'mc',
        text: '¿Cuál es la función de las glándulas salivales?',
        options: ['Absorber nutrientes', 'Producir saliva para humedecer y comenzar la digestión', 'Producir jugos gástricos', 'Transportar alimentos'],
        answer: 1,
        explanation: 'Las glándulas salivales producen saliva que humedece los alimentos y comienza la digestión en la boca.'
      },
      {
        id: 'dig_7', type: 'mc',
        text: '¿Para qué sirve el hígado en la digestión?',
        options: ['Lleva comida al estómago', 'Almacena las heces', 'Produce bilis que ayuda a digerir las grasas', 'Absorbe el agua'],
        answer: 2,
        explanation: 'El hígado produce bilis, que se almacena en la vesícula biliar y ayuda a digerir las grasas.'
      },
      {
        id: 'dig_8', type: 'tf',
        text: 'La gastritis puede causar úlceras si no se trata.',
        answer: true,
        explanation: '¡Correcto! La gastritis es la inflamación del estómago y puede provocar úlceras si no recibe tratamiento.'
      },
      {
        id: 'dig_9', type: 'mc',
        text: '¿Dónde se absorben los nutrientes principalmente?',
        options: ['Estómago', 'Intestino grueso', 'Intestino delgado', 'Boca'],
        answer: 2,
        explanation: 'El intestino delgado es donde se absorbe la mayor parte de los nutrientes hacia la sangre.'
      },
      {
        id: 'dig_10', type: 'mc',
        text: '¿Cómo se previenen las caries?',
        options: ['Tomando mucha agua', 'Cepillándonos los dientes y la lengua regularmente y comiendo menos dulces', 'Comiendo fruta', 'Haciendo ejercicio'],
        answer: 1,
        explanation: 'Las caries ocurren cuando las bacterias dañan los dientes. El cepillado regular y comer menos dulces las previene.'
      }
    ]
  },

  // ----------------------------------------------------------
  //  NUTRICIÓN
  // ----------------------------------------------------------
  ciencias_nutricion: {
    title: 'Nutrición',
    emoji: '🥦',
    studyNotes: `
      <h3>🥦 Nutrición</h3>
      <p>Los nutrientes son sustancias que el cuerpo necesita para funcionar bien.</p>
      <h3>Tipos de Nutrientes</h3>
      <ul>
        <li><strong>Carbohidratos:</strong> Principal fuente de energía. Fuentes: miel, frutas, papas, yuca, pan.</li>
        <li><strong>Proteínas:</strong> Crecimiento y protección del cuerpo. Fuentes: leche, vegetales, frijoles, lentejas.</li>
        <li><strong>Lípidos (grasas):</strong> Almacenan energía cuando faltan carbohidratos. Fuentes: mayonesa, aguacate.</li>
        <li><strong>Vitaminas:</strong> Crecimiento y formación de tejidos. Fuentes: frutas, verduras, carnes.</li>
        <li><strong>Minerales:</strong> Desarrollo del sistema óseo y nervioso. Fuentes: legumbres, leche, frutos secos.</li>
      </ul>
    `,
    questions: [
      {
        id: 'nut_1', type: 'mc',
        text: '¿Cuál es la función principal de los carbohidratos?',
        options: ['Construir músculos', 'Ser fuente de energía', 'Proteger los huesos', 'Regular la temperatura'],
        answer: 1,
        explanation: 'Los carbohidratos son la principal fuente de energía del cuerpo. Se encuentran en miel, frutas, papas, yuca y pan.'
      },
      {
        id: 'nut_2', type: 'mc',
        text: '¿Qué alimentos son ricos en proteínas?',
        options: ['Miel, frutas y pan', 'Mayonesa y aguacate', 'Leche, vegetales, frijoles y lentejas', 'Solo la carne roja'],
        answer: 2,
        explanation: 'Las proteínas se encuentran en leche, vegetales, frijoles y lentejas. Ayudan al crecimiento y protección del cuerpo.'
      },
      {
        id: 'nut_3', type: 'tf',
        text: 'Los lípidos almacenan energía cuando faltan carbohidratos.',
        answer: true,
        explanation: '¡Correcto! Los lípidos almacenan energía y el cuerpo los usa cuando no hay suficientes carbohidratos. Mayonesa y aguacate son fuentes de lípidos.'
      },
      {
        id: 'nut_4', type: 'mc',
        text: '¿Para qué sirven los minerales en el cuerpo?',
        options: ['Son fuente de energía inmediata', 'Ayudan al desarrollo del sistema óseo y nervioso', 'Forman los músculos', 'Solo hidratan el cuerpo'],
        answer: 1,
        explanation: 'Los minerales ayudan al desarrollo del sistema óseo y nervioso. Se encuentran en legumbres, leche y frutos secos.'
      },
      {
        id: 'nut_5', type: 'mc',
        text: '¿Qué nutriente es esencial para el crecimiento y formación de tejidos?',
        options: ['Carbohidratos', 'Lípidos', 'Vitaminas', 'Minerales'],
        answer: 2,
        explanation: 'Las vitaminas son esenciales para el crecimiento y formación de tejidos. Destacan en frutas, verduras y carnes.'
      },
      {
        id: 'nut_6', type: 'fill',
        text: 'La miel, las frutas, las papas, la yuca y el pan son fuentes de _______.',
        answer: 'carbohidratos',
        explanation: 'Estos alimentos son ricos en carbohidratos, la principal fuente de energía del cuerpo.'
      },
      {
        id: 'nut_7', type: 'tf',
        text: 'Las proteínas ayudan al crecimiento y protección del cuerpo.',
        answer: true,
        explanation: '¡Correcto! Las proteínas son fundamentales para el crecimiento y la protección del cuerpo.'
      },
      {
        id: 'nut_8', type: 'mc',
        text: '¿En qué alimentos se encuentran principalmente las vitaminas?',
        options: ['Pan, yuca y papas', 'Frutas, verduras y carnes', 'Mayonesa y aguacate', 'Leche y frutos secos'],
        answer: 1,
        explanation: 'Las vitaminas se encuentran principalmente en frutas, verduras y carnes.'
      }
    ]
  }
};

// Register content into SUBJECTS
(function() {
  const ciencias = SUBJECTS.ciencias;
  ciencias.units.forEach(unit => {
    const content = CIENCIAS_CONTENT[unit.contentKey];
    if (content) {
      unit.studyNotes = content.studyNotes;
      unit.questions = content.questions;
    }
  });
})();
