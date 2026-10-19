// Contenido literal del PDF "ANTICONCEPTIVOS".
export const img = (n) => `${import.meta.env.BASE_URL}img/${n}.webp`

export const content = {
  titulo: '¡Un pequeño implante, una gran decisión!',
  subtitulo: 'IntrodImplante subdérmico: cuidá tu presente, elegí tu futuro',
  queEs: 'El implante subdérmico es un método anticonceptivo hormonal de larga duración que consiste en una pequeña varilla flexible que se coloca debajo de la piel del brazo. Libera una hormona llamada progestágeno, que ayuda a prevenir el embarazo.',
  funciona: [
    { t: 'Inhibe la ovulación', d: 'evita que el ovario libere un óvulo, disminuyendo la posibilidad de embarazo.', i: 'ovulacion', alt: 'Calendario con la palabra ovulación y una lupa sobre un óvulo' },
    { t: 'Espesa el moco cervical', d: 'dificultando el paso de los espermatozoides.', i: 'moco', alt: 'Dedo estirando un moco transparente y elástico' },
    { t: 'Ofrece protección anticonceptiva continua', d: 'durante varios años, según el tipo de implante.', i: 'puzzle', alt: 'Ilustración de un blíster de pastillas y preservativos como piezas de un rompecabezas' },
  ],
  efectos: ['Menstruación irregular, más prolongada o más escasa.', 'Ausencia de menstruación.', 'Dolor de cabeza.', 'Acné o sensibilidad mamaria.', 'Cambios de humor en algunas personas.'],
  efectosNota: 'Estos efectos varían de una persona a otra. Si son intensos o preocupantes, se recomienda consultar con un profesional de salud.',
  colocacion: [
    'Un profesional capacitado lo coloca debajo de la piel del brazo mediante un procedimiento breve, con anestesia local.',
    'Su duración depende del producto utilizado. Algunos implantes protegen durante 3 años y otros pueden durar más tiempo, según la autorización vigente. Es importante consultar la fecha de recambio indicada para cada implante.',
  ],
  dato: 'El implante no te protege de una enfermedad de transmisión sexual.',
  mitos: [
    { m: 'El implante produce infertilidad', r: 'La fertilidad suele recuperarse rápidamente después de retirarlo.' },
    { m: 'Hay que tomar descansos del implante', r: 'No se necesitan descansos programados; el recambio depende del tipo de implante y de las indicaciones profesionales.' },
    { m: 'Es un método 100 % eficaz', r: 'Es muy eficaz, pero ningún método anticonceptivo es infalible.' },
  ],
  masInfo: 'Si necesitás más información sobre métodos anticonceptivos, accedé a este link',
  url: 'https://centro-de-ayuda.onrender.com',
}
