import type { Destaque } from './_pecas/Galeria';
import type { Grupo } from './_pecas/Regulamento';
import type { Quarto } from './_pecas/Reserva';
import type { Espaco } from './_pecas/Orcamento';
import type { Linha } from './_pecas/ComoChegar';
import type { DadosRodape } from './_pecas/Rodape';
import type { NomeIcone } from './_pecas/Icones';
import type { Foto, Tema } from './_pecas/tipos';

/**
 * Conteúdo do Diocesano Hotel.
 *
 * Levantado do site deles em setembro de 2026 e conferido, item por
 * item, com a cópia do Arquivo da Internet de 2026 — em 1º de outubro
 * o site passou o dia suspenso pela hospedagem, e voltou no dia 2. O que não
 * estava publicado não está aqui: nem a capacidade do Auditório
 * Anunciação, nem estacionamento, nem forma de pagamento.
 *
 * Está num arquivo separado de propósito: é exatamente o que o hotel
 * precisaria revisar antes de publicar, e ninguém revisa conteúdo
 * lendo JSX.
 */

export const hotel = {
  nome: 'Diocesano Hotel',
  /** Inaugurado em dezembro de 1965 — é daqui que sai a idade da casa. */
  inauguracao: { ano: 1965, mes: 12 },
  // A frase é deles: era a chamada da página inicial.
  chamada: 'Sinta o conforto de estar em casa',
  lema: 'Sufficit tibi gratia',
  lemaTraduzido: 'Basta-te a Graça',

  endereco: ['Rua Dr. Vicente Bezerra da Costa, 192', 'Planalto — Iguatu, CE', 'CEP 63500-825'],
  consultaMapa: 'Diocesano Hotel, Rua Dr. Vicente Bezerra da Costa, 192, Planalto, Iguatu - CE',
  telefone: '(88) 3581-2874',
  telefoneHref: 'tel:+558835812874',
  celular: '(88) 99707-4000',
  // Com o 55 e o DDD, sem pontuação, como o WhatsApp precisa.
  whatsapp: '5588997074000',
  email: 'diocesanohotel2@hotmail.com',
  instagram: 'https://www.instagram.com/diocesanoiguatu',
  instagramArroba: '@diocesanoiguatu',
  facebook: 'https://www.facebook.com/diocesano.hotel.iguatu',
};

export const tema: Tema = {
  marca: '#7B1E2B',
  marcaEscura: '#3F1820',
  sobreMarca: '#FFFFFF',
  destaque: '#E8C9A0',
  fundo: '#FBF8F4',
  papel: '#FFFFFF',
  areia: '#F4EDE4',
  borda: '#E8DDD0',
  tinta: '#2A211C',
  tintaMedia: '#6B5A4E',
  tintaFraca: '#9A8878',
};

/**
 * Os quatro quartos, com o que cada página do site antigo dizia
 * que ele tem — todos com ar central, Wi-Fi e café da manhã.
 */
export const quartos: (Quarto & {
  resumo: string;
  itens: { icone: NomeIcone; texto: string }[];
  destaque?: boolean;
})[] = [
  {
    slug: 'luxo',
    nome: 'Luxo',
    individual: 160,
    duplo: 210,
    resumo: 'O mais completo: TV por satélite, mesa de trabalho e telefone.',
    itens: [
      { icone: 'neve', texto: 'Ar central' },
      { icone: 'tv', texto: 'TV LED 32" por satélite' },
      { icone: 'mesa', texto: 'Mesa de trabalho' },
      { icone: 'frigobar', texto: 'Frigobar' },
      { icone: 'wifi', texto: 'Wi-Fi' },
      { icone: 'telefone', texto: 'Telefone' },
      { icone: 'chuveiro', texto: 'Chuveiro elétrico' },
    ],
    destaque: true,
  },
  {
    slug: 'semi-luxo',
    nome: 'Semi-Luxo',
    individual: 140,
    duplo: 190,
    resumo: 'TV por satélite, frigobar e mesa de trabalho.',
    itens: [
      { icone: 'neve', texto: 'Ar central' },
      { icone: 'tv', texto: 'TV LED 32" por satélite' },
      { icone: 'mesa', texto: 'Mesa de trabalho' },
      { icone: 'frigobar', texto: 'Frigobar' },
      { icone: 'wifi', texto: 'Wi-Fi' },
    ],
  },
  {
    slug: 'standard-com-tv',
    nome: 'Standard com TV',
    individual: 105,
    duplo: 160,
    resumo: 'O essencial, com televisão.',
    itens: [
      { icone: 'neve', texto: 'Ar central' },
      { icone: 'tv', texto: 'TV' },
      { icone: 'wifi', texto: 'Wi-Fi' },
    ],
  },
  {
    slug: 'standard-sem-tv',
    nome: 'Standard sem TV',
    individual: 79,
    duplo: 139,
    resumo: 'O essencial, pela menor diária da casa.',
    itens: [
      { icone: 'neve', texto: 'Ar central' },
      { icone: 'wifi', texto: 'Wi-Fi' },
    ],
  },
];

/** Por diária. Estavam na tabela de diárias e no regulamento. */
export const adicionais = { criancaOuQuadruplo: 40, pet: 25 };

export const destaques: Destaque[] = [
  { icone: 'cafe', titulo: 'Café da manhã', texto: 'Buffet incluso na diária, das 6h às 9h30.' },
  { icone: 'piscina', titulo: 'Piscinas', texto: 'Só para hóspedes, das 7h às 22h.' },
  { icone: 'capela', titulo: 'Capela São José', texto: 'Dentro do complexo.' },
  { icone: 'wifi', titulo: 'Ar central e Wi-Fi', texto: 'Em todos os quartos.' },
  { icone: 'microfone', titulo: 'Auditório para 450', texto: 'Para congresso, curso e encontro.' },
];

/** As fotos são as DELES, da galeria do site — a primeira abre o mosaico. */
export const galeria: Foto[] = [
  { src: '/jardim.jpg', alt: 'Esculturas no jardim florido do Centro Diocesano', titulo: 'Os jardins' },
  {
    src: '/passagem.jpg',
    alt: 'Passagem coberta com piso em zigue-zague e jardim dos dois lados',
    titulo: 'A passagem coberta',
  },
  { src: '/alameda.jpg', alt: 'Alameda com palmeira ao lado do prédio do hotel', titulo: 'A alameda interna' },
  {
    src: '/fachada.jpg',
    alt: 'Fachada do Diocesano Hotel',
    titulo: 'A entrada',
    detalhe: 'Rua Dr. Vicente Bezerra da Costa, 192',
  },
  {
    src: '/apartamento.jpg',
    alt: 'Quarto com duas camas de solteiro, TV, frigobar e mesa de trabalho',
    titulo: 'Um dos quartos',
  },
];

export const instalacoes: Destaque[] = [
  { icone: 'capela', titulo: 'Capela São José', texto: 'Um espaço de oração dentro do Centro Diocesano.' },
  {
    icone: 'prato',
    titulo: 'Restaurante',
    texto:
      'Climatizado, para 60 pessoas. Almoço de terça a domingo, das 11h às 14h; jantar de terça a ' +
      'sábado, das 18h às 22h. É terceirizado: o consumo é pago lá mesmo.',
  },
  {
    icone: 'cafe',
    titulo: 'Café da manhã',
    texto: 'Buffet brasileiro, das 6h às 9h30, incluso na diária. O ticket sai na recepção.',
  },
  {
    icone: 'piscina',
    titulo: 'Piscinas',
    texto: 'Exclusivas dos hóspedes, das 7h às 22h, com a pulseira de acesso da recepção.',
  },
  { icone: 'arvore', titulo: 'Jardins', texto: 'Entre os prédios, com a alameda, a passagem coberta e as esculturas.' },
  { icone: 'raio', titulo: '220 volts', texto: 'Em todo o hotel — vale conferir o carregador antes de ligar.' },
];

export const espacos: (Espaco & { texto: string; itens: { icone: NomeIcone; texto: string }[] })[] = [
  {
    slug: 'ressurreicao',
    nome: 'Auditório Ressurreição',
    capacidade: 450,
    porHora: 200,
    texto: 'O auditório de 450 lugares que veio com a reforma de 2012.',
    itens: [
      { icone: 'microfone', texto: 'Sistema de áudio' },
      { icone: 'neve', texto: 'Climatizado' },
      { icone: 'wifi', texto: 'Internet' },
      { icone: 'cafe', texto: 'Espaço para coffee break e coquetel, interno e ao ar livre' },
    ],
  },
  {
    slug: 'anunciacao',
    nome: 'Auditório Anunciação',
    texto: 'O segundo auditório do Centro.',
    itens: [{ icone: 'pessoas', texto: 'Capacidade sob consulta' }],
  },
  {
    slug: 'sala',
    nome: 'Sala de reuniões',
    texto: 'Para reunião fechada e treinamento de equipe.',
    itens: [{ icone: 'pessoas', texto: 'Capacidade sob consulta' }],
  },
];

/** O que o próprio site dizia que o Centro recebe. */
export const tiposDeEvento = ['Encontro', 'Congresso', 'Curso ou formação', 'Palestra', 'Reunião'];

export const historia = [
  {
    ano: 1962,
    titulo: 'A obra começa',
    texto:
      'O 1º Bispo Diocesano inicia o Centro de Treinamento Diocesano, para as atividades ' +
      'pastorais e a formação da Diocese.',
  },
  { ano: 1965, titulo: 'Inauguração', texto: 'Dom Mauro inaugura o Centro em dezembro.' },
  {
    ano: 2012,
    titulo: 'Reforma, ampliação e hotel',
    texto:
      'Dom João Costa, 3º Bispo Diocesano, conclui a reforma feita como gesto do jubileu de 50 ' +
      'anos da Diocese. O complexo ganha o auditório para 450 pessoas, refeitório, quartos, salas ' +
      'de reunião, capela e jardins — e parte dele passa a ser hotel.',
  },
  {
    ano: 2015,
    titulo: 'Dom Edson',
    texto:
      'Em 6 de maio, o Papa Francisco nomeia Dom Edson de Castro Homem 4º Bispo Diocesano de ' +
      'Iguatu. Antes, ele era Bispo Auxiliar do Rio de Janeiro.',
  },
];

export const horariosDaCasa: Linha[] = [
  { icone: 'cama', rotulo: 'Diária', valor: 'do meio-dia ao meio-dia' },
  { icone: 'cafe', rotulo: 'Café da manhã', valor: '6h às 9h30' },
  { icone: 'piscina', rotulo: 'Piscinas', valor: '7h às 22h' },
  { icone: 'prato', rotulo: 'Restaurante', valor: 'almoço ter–dom, 11h–14h · jantar ter–sáb, 18h–22h' },
];

export const contatos: Linha[] = [
  { icone: 'whatsapp', rotulo: 'WhatsApp', valor: hotel.celular, href: `https://wa.me/${hotel.whatsapp}` },
  { icone: 'telefone', rotulo: 'Telefone', valor: hotel.telefone, href: hotel.telefoneHref },
  { icone: 'email', rotulo: 'E-mail', valor: hotel.email, href: `mailto:${hotel.email}` },
  { icone: 'instagram', rotulo: 'Instagram', valor: hotel.instagramArroba, href: hotel.instagram },
  { icone: 'facebook', rotulo: 'Facebook', valor: 'diocesano.hotel.iguatu', href: hotel.facebook },
];

/**
 * O regulamento, como estava na página inicial do site — reescrito em
 * tom de quem recebe, e agrupado pelo que o hóspede procura.
 */
export const regulamento: Grupo[] = [
  {
    icone: 'cama',
    titulo: 'Diária e saída',
    itens: [
      'A diária começa ao meio-dia e termina ao meio-dia seguinte. Ficar além disso depende de vaga e tem cobrança adicional — combine com a recepção.',
      'Ao sair, feche a torneira e o chuveiro e entregue a chave na recepção.',
    ],
  },
  {
    icone: 'cafe',
    titulo: 'Café e restaurante',
    itens: [
      'Café da manhã incluso, das 6h às 9h30, no restaurante. O ticket sai na recepção.',
      'O restaurante é terceirizado: o que for consumido lá é pago lá mesmo.',
    ],
  },
  {
    icone: 'pessoas',
    titulo: 'Visitas e silêncio',
    itens: [
      'Visitas são recebidas nas áreas comuns — lobby e restaurante. Subir ao quarto só com autorização e registro na recepção, com taxa extra.',
      'Depois das 22h, silêncio nos quartos e TV em volume moderado.',
    ],
  },
  {
    icone: 'piscina',
    titulo: 'Piscinas',
    itens: [
      'Exclusivas dos hóspedes, das 7h às 22h, com a pulseira de acesso da recepção.',
      'Antes de entrar, chuveiro e lava-pés, sempre em traje de banho. Fora da piscina, nada de traje de banho pelo hotel.',
      'Menores de 10 anos só acompanhados dos pais ou responsáveis.',
    ],
  },
  {
    icone: 'frigobar',
    titulo: 'No quarto',
    itens: [
      'Lavar e passar roupa é com a recepção, não no quarto.',
      'Para abastecer o frigobar, fale com a recepção ou ligue no ramal 200.',
      'Limpeza: use a placa na porta ou avise a recepção.',
      'A senha do Wi-Fi está nas placas do hotel e dos quartos, ou com a recepção.',
      'Dano ou extravio de objetos do hotel é cobrado na conta do hóspede.',
    ],
  },
  {
    icone: 'brilho',
    titulo: 'Bom saber',
    itens: [
      'Voltagem 220V.',
      'Quarto quádruplo e criança de 5 a 10 anos: R$ 40 adicionais por diária.',
      'Pet: R$ 25 por diária.',
      'Roupas e objetos esquecidos ficam guardados por 90 dias.',
    ],
  },
];

export const rodape: DadosRodape = {
  nome: hotel.nome,
  logo: { src: '/logo.png', largura: 307, altura: 58 },
  lema: `${hotel.chamada}.`,
  instituicao: 'Centro de Treinamento Diocesano · Diocese de Iguatu',
  endereco: hotel.endereco,
  observacoes: ['Diárias do meio-dia ao meio-dia, com café da manhã.'],
  contatos,
  atalhos: [
    ['#quartos', 'Quartos e diárias'],
    ['#reservas', 'Reservas'],
    ['#eventos', 'Eventos e auditórios'],
    ['#historia', 'História'],
    ['#regulamento', 'Regulamento'],
  ],
};
