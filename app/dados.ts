/**
 * Conteúdo do Diocesano Hotel.
 *
 * Tudo aqui foi levantado do site atual, em setembro de 2026. Está
 * num arquivo separado de propósito: é exatamente o que o hotel
 * precisaria revisar antes de publicar, e ninguém revisa conteúdo
 * lendo JSX.
 *
 * Os preços são o ponto mais frágil. No site atual eles vivem dentro
 * de um JPEG — o Google não lê, leitor de tela não lê, e mudar um
 * valor exige editor de imagem. Aqui são texto, e essa é metade da
 * proposta.
 */

export const hotel = {
  nome: 'Diocesano Hotel',
  cidade: 'Iguatu — Ceará',
  lema: 'Sufficit tibi gratia',
  lemaTraduzido: 'Basta-te a Graça',

  endereco: 'Rua Dr. Vicente Bezerra da Costa, 192 — Planalto',
  cep: 'CEP 63500-825',
  telefone: '(88) 3581-2874',
  celular: '(88) 99707-4000',
  // Sem o 9 e sem pontuação, como o WhatsApp precisa.
  whatsapp: '5588997074000',
  email: 'diocesanohotel2@hotmail.com',
  instagram: 'https://www.instagram.com/diocesanoiguatu',
  facebook: 'https://www.facebook.com/diocesano.hotel.iguatu',
  siteAtual: 'https://www.diocesanohotel.com.br',
};

export const quartos = [
  {
    slug: 'luxo',
    nome: 'Luxo',
    individual: 160,
    duplo: 210,
    resumo: 'O mais completo, com mesa de trabalho e TV por satélite.',
    itens: [
      'Ar-condicionado',
      'TV LED 32" por satélite',
      'Mesa de trabalho',
      'Frigobar',
      'Wi-Fi',
      'Telefone',
    ],
    destaque: true,
  },
  {
    slug: 'semi-luxo',
    nome: 'Semi-Luxo',
    individual: 140,
    duplo: 190,
    resumo: 'Conforto completo, num formato mais enxuto.',
    itens: ['Ar-condicionado', 'TV LED', 'Frigobar', 'Wi-Fi', 'Telefone'],
  },
  {
    slug: 'standard-com-tv',
    nome: 'Standard com TV',
    individual: 105,
    duplo: 160,
    resumo: 'O essencial bem feito, com televisão.',
    itens: ['Ar-condicionado', 'TV LED', 'Wi-Fi'],
  },
  {
    slug: 'standard-sem-tv',
    nome: 'Standard sem TV',
    individual: 79,
    duplo: 139,
    resumo: 'Para quem chega tarde e sai cedo.',
    itens: ['Ar-condicionado', 'Wi-Fi'],
  },
];

export const espacos = [
  {
    nome: 'Auditório Ressurreição',
    capacidade: 'até 450 pessoas',
    preco: 'R$ 200 por hora',
    texto:
      'Sistema de áudio, climatizado e com internet. Espaço para coffee break e coquetel, ' +
      'interno e ao ar livre.',
  },
  {
    nome: 'Auditório Anunciação',
    capacidade: 'grupos médios',
    preco: 'sob consulta',
    texto: 'Para formações, cursos e encontros que não pedem o auditório maior.',
  },
  {
    nome: 'Sala de reuniões',
    capacidade: 'grupos pequenos',
    preco: 'sob consulta',
    texto: 'Reunião fechada, treinamento de equipe e entrevista.',
  },
];

export const instalacoes = [
  { nome: 'Capela', texto: 'Aberta aos hóspedes. É o que nenhum outro hotel da cidade tem.' },
  {
    nome: 'Restaurante',
    texto:
      'Almoço de terça a domingo, 11h às 14h. Jantar de terça a sábado, 18h às 22h. ' +
      'Serviço terceirizado, pago no próprio ambiente.',
  },
  { nome: 'Piscinas', texto: 'Uso exclusivo dos hóspedes, das 7h às 22h.' },
  { nome: 'Jardins', texto: 'Áreas abertas para caminhar, esperar e respirar.' },
  { nome: 'Estacionamento', texto: 'No próprio complexo.' },
  { nome: 'Wi-Fi', texto: 'Em todo o hotel, inclusive nos quartos.' },
];

export const historia = [
  {
    ano: '1962',
    titulo: 'A construção começa',
    texto:
      'O 1º Bispo Diocesano inicia a obra do Centro de Treinamento Diocesano, para atender ' +
      'às atividades pastorais e à formação.',
  },
  {
    ano: '1965',
    titulo: 'Inauguração',
    texto: 'Dom Mauro inaugura o Centro em dezembro.',
  },
  {
    ano: '2012',
    titulo: 'Reforma e ampliação',
    texto:
      'Dom João Costa conclui a reforma feita como gesto do jubileu de 50 anos da Diocese. ' +
      'O complexo ganha auditório para 450 pessoas, refeitório, salas, capela e jardins — ' +
      'e parte dele passa a funcionar como hotel.',
  },
  {
    ano: '2015',
    titulo: 'Dom Edson',
    texto:
      'Dom Edson de Castro Homem é nomeado 4º Bispo Diocesano de Iguatu pelo Papa Francisco.',
  },
];

/**
 * O regulamento interno.
 *
 * Hoje ele é a PRIMEIRA coisa que aparece no site. Aqui ele continua
 * existindo — hóspede precisa dele, e some o "não achei" na recepção
 * — mas fica no fim, atrás de um clique, que é o lugar de uma regra
 * numa página que está tentando conquistar alguém.
 */
export const regulamento = [
  'A diária começa e termina às 12h. Prolongar depende de disponibilidade e tem cobrança à parte.',
  'Café da manhã incluso, das 6h às 9h30, no restaurante.',
  'Visitas nas áreas comuns. Subir ao apartamento só com autorização da recepção.',
  'Silêncio nos apartamentos depois das 22h.',
  'Apartamento quádruplo e criança de 5 a 10 anos: adicional de R$ 40 por diária.',
  'Pet: R$ 25 por diária.',
  'Voltagem 220V.',
  'Objetos esquecidos ficam guardados por 90 dias.',
];
