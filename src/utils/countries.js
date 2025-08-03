const countries = [
  {
    name: 'Brazil',
    coordinates: [-51.9253, -14.235],
    tips: [
      'É o maior país da América do Sul.',
      'Famoso pelo futebol e pelo Carnaval.',
      'Abriga a maior parte da floresta amazônica.',
    ],
  },
  {
    name: 'United States',
    coordinates: [-95.7129, 37.0902],
    tips: ['Tem 50 estados.', 'Possui o maior PIB do mundo.', 'Nova York e Califórnia estão aqui.'],
  },
  {
    name: 'Canada',
    coordinates: [-106.3468, 56.1304],
    tips: [
      'Famoso por suas paisagens geladas.',
      'Tem a maior área do continente americano.',
      'Duas línguas oficiais: inglês e francês.',
    ],
  },
  {
    name: 'Mexico',
    coordinates: [-102.5528, 23.6345],
    tips: [
      'Famoso por tacos e mariachi.',
      'Faz fronteira com os EUA ao norte.',
      'Abriga as ruínas astecas e maias.',
    ],
  },
  {
    name: 'Argentina',
    coordinates: [-63.6167, -38.4161],
    tips: ['Famoso pelo tango.', 'A terra natal de Lionel Messi.', 'Tem a Patagônia no sul.'],
  },
  {
    name: 'Colombia',
    coordinates: [-74.2973, 4.5709],
    tips: [
      'Famoso pelo café.',
      'Cortado pela Cordilheira dos Andes.',
      'Tem costas no Pacífico e no Caribe.',
    ],
  },
  {
    name: 'Chile',
    coordinates: [-71.542969, -35.675147],
    tips: [
      'Tem formato muito estreito e comprido.',
      'Fica entre a Cordilheira dos Andes e o Pacífico.',
      'O deserto do Atacama está aqui.',
    ],
  },
  {
    name: 'Peru',
    coordinates: [-75.0152, -9.189967],
    tips: ['Lar de Machu Picchu.', 'Foi o centro do Império Inca.', 'A capital é Lima.'],
  },
  {
    name: 'United Kingdom',
    coordinates: [-3.435973, 55.378051],
    tips: [
      'Inclui Inglaterra, Escócia, País de Gales e Irlanda do Norte.',
      'A rainha já reinou aqui por décadas.',
      'Famoso por Londres e pelo chá.',
    ],
  },
  {
    name: 'France',
    coordinates: [2.2137, 46.2276],
    tips: [
      'Famosa pela Torre Eiffel.',
      'Paris é sua capital.',
      'É conhecida pela culinária e vinhos.',
    ],
  },
  {
    name: 'Germany',
    coordinates: [10.4515, 51.1657],
    tips: [
      'Famosa por carros como BMW e Mercedes.',
      'Berlim é sua capital.',
      'Foi dividida em dois países após a Segunda Guerra.',
    ],
  },
  {
    name: 'Italy',
    coordinates: [12.5674, 41.8719],
    tips: [
      'Tem o formato de uma bota.',
      'Berço do Império Romano.',
      'Famoso por massas, pizzas e Roma.',
    ],
  },
  {
    name: 'Spain',
    coordinates: [-3.7492, 40.4637],
    tips: [
      'Língua oficial é o espanhol.',
      'Tem regiões como Catalunha e Andaluzia.',
      'Famoso por touradas e flamenco.',
    ],
  },
  {
    name: 'Portugal',
    coordinates: [-8.2245, 39.3999],
    tips: [
      'País natal de grandes navegadores.',
      'Compartilha a Península Ibérica com a Espanha.',
      'A capital é Lisboa.',
    ],
  },
  {
    name: 'Russia',
    coordinates: [105.3188, 61.524],
    tips: [
      'É o maior país do mundo em extensão.',
      'Faz parte da Europa e da Ásia.',
      'Moscou é sua capital.',
    ],
  },
  {
    name: 'Switzerland',
    coordinates: [8.2275, 46.8182],
    tips: [
      'Famoso por chocolates e relógios.',
      'Tem neutralidade política tradicional.',
      'Genebra e Zurique são cidades importantes.',
    ],
  },
  {
    name: 'Netherlands',
    coordinates: [5.2913, 52.1326],
    tips: [
      'Famoso por moinhos, tulipas e bicicletas.',
      'Também conhecido como Holanda.',
      'Amsterdã é a capital.',
    ],
  },
  {
    name: 'Sweden',
    coordinates: [18.6435, 60.1282],
    tips: ['País escandinavo.', 'Sede de empresas como IKEA e Volvo.', 'A capital é Estocolmo.'],
  },
  {
    name: 'Norway',
    coordinates: [8.4689, 60.472],
    tips: ['Famoso pelos fiordes.', 'Tem uma das maiores rendas per capita.', 'A capital é Oslo.'],
  },
  {
    name: 'South Africa',
    coordinates: [22.9375, -30.5595],
    tips: [
      'Tem três capitais.',
      'Nelson Mandela foi um herói nacional aqui.',
      'Está no extremo sul do continente africano.',
    ],
  },
  {
    name: 'Egypt',
    coordinates: [30.8025, 26.8206],
    tips: [
      'Famoso pelas pirâmides e o rio Nilo.',
      'Antiga civilização faraônica.',
      'O deserto do Saara cobre boa parte do país.',
    ],
  },
  {
    name: 'Morocco',
    coordinates: [-7.0926, 31.7917],
    tips: [
      'Fica no norte da África, perto da Europa.',
      'Cidades como Marrakech e Casablanca.',
      'Famoso por mercados e desertos.',
    ],
  },
  {
    name: 'Nigeria',
    coordinates: [8.6753, 9.082],
    tips: [
      'País mais populoso da África.',
      'A capital é Abuja, mas Lagos é a maior cidade.',
      'Produz muito petróleo.',
    ],
  },
  {
    name: 'China',
    coordinates: [104.1954, 35.8617],
    tips: [
      'País mais populoso do mundo.',
      'A Grande Muralha está aqui.',
      'Tem cidades como Pequim e Xangai.',
    ],
  },
  {
    name: 'Japan',
    coordinates: [138.2529, 36.2048],
    tips: [
      'Arquipélago no Pacífico.',
      'Famoso por tecnologia e cultura milenar.',
      'A capital é Tóquio.',
    ],
  },
  {
    name: 'South Korea',
    coordinates: [127.7669, 35.9078],
    tips: [
      'Conhecido pelo K-pop e tecnologia.',
      'Faz fronteira com um país rival ao norte.',
      'Seul é sua capital.',
    ],
  },
  {
    name: 'India',
    coordinates: [78.9629, 20.5937],
    tips: [
      'Segundo país mais populoso do mundo.',
      'Famoso por Bollywood e pelo Taj Mahal.',
      'Tem uma grande diversidade cultural e religiosa.',
    ],
  },
  {
    name: 'Saudi Arabia',
    coordinates: [45.0792, 23.8859],
    tips: [
      'Lar das cidades sagradas do Islã.',
      'Exportador de petróleo.',
      'Grande parte do território é deserto.',
    ],
  },
  {
    name: 'Israel',
    coordinates: [34.8516, 31.0461],
    tips: [
      'Centro de três grandes religiões monoteístas.',
      'Jerusalém é uma cidade muito importante.',
      'Fica no Oriente Médio.',
    ],
  },
  {
    name: 'United Arab Emirates',
    coordinates: [53.8478, 23.4241],
    tips: [
      'Famoso pelos arranha-céus e luxo.',
      'Dubai e Abu Dhabi são cidades principais.',
      'Rico em petróleo.',
    ],
  },
  {
    name: 'Turkey',
    coordinates: [35.2433, 38.9637],
    tips: [
      'País euro-asiático.',
      'Istambul foi Constantinopla.',
      'Tem influência europeia e do Oriente Médio.',
    ],
  },
  {
    name: 'Australia',
    coordinates: [133.7751, -25.2744],
    tips: [
      'Tem cangurus e coalas.',
      'Sydney e Melbourne são cidades famosas.',
      'É também um continente.',
    ],
  },
  {
    name: 'New Zealand',
    coordinates: [174.8859, -40.9006],
    tips: [
      'Formada por duas ilhas principais.',
      'Famosa por paisagens usadas em “O Senhor dos Anéis”.',
      'A capital é Wellington.',
    ],
  },
]

export default countries
