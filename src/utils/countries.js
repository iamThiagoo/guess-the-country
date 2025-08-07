const countries = [
  {
    name: 'Brasil',
    name_en: 'Brazil',
    coordinates: [-51.9253, -14.235],
    tips: [
      'É o maior país da América do Sul.',
      'Famoso pelo futebol e pelo Carnaval.',
      'Abriga a maior parte da floresta amazônica.',
    ],
  },
  {
    name: 'Estados Unidos',
    name_en: 'United States',
    coordinates: [-95.7129, 37.0902],
    tips: ['Tem 50 estados.', 'Possui o maior PIB do mundo.', 'Nova York e Califórnia estão aqui.'],
  },
  {
    name: 'Canadá',
    name_en: 'Canada',
    coordinates: [-106.3468, 56.1304],
    tips: [
      'Famoso por suas paisagens geladas.',
      'Tem a maior área do continente americano.',
      'Duas línguas oficiais: inglês e francês.',
    ],
  },
  {
    name: 'México',
    name_en: 'Mexico',
    coordinates: [-102.5528, 23.6345],
    tips: [
      'Famoso por tacos e mariachi.',
      'Faz fronteira com os EUA ao norte.',
      'Abriga as ruínas astecas e maias.',
    ],
  },
  {
    name: 'Argentina',
    name_en: 'Argentina',
    coordinates: [-63.6167, -38.4161],
    tips: ['Famoso pelo tango.', 'A terra natal de Lionel Messi.', 'Tem a Patagônia no sul.'],
  },
  {
    name: 'Colômbia',
    name_en: 'Colombia',
    coordinates: [-74.2973, 4.5709],
    tips: [
      'Famoso pelo café.',
      'Cortado pela Cordilheira dos Andes.',
      'Tem costas no Pacífico e no Caribe.',
    ],
  },
  {
    name: 'Chile',
    name_en: 'Chile',
    coordinates: [-71.542969, -35.675147],
    tips: [
      'Tem formato muito estreito e comprido.',
      'Fica entre a Cordilheira dos Andes e o Pacífico.',
      'O deserto do Atacama está aqui.',
    ],
  },
  {
    name: 'Peru',
    name_en: 'Peru',
    coordinates: [-75.0152, -9.189967],
    tips: ['Lar de Machu Picchu.', 'Foi o centro do Império Inca.', 'A capital é Lima.'],
  },
  {
    name: 'Reino Unido',
    name_en: 'United Kingdom',
    coordinates: [-3.435973, 55.378051],
    tips: [
      'Inclui Inglaterra, Escócia, País de Gales e Irlanda do Norte.',
      'A rainha já reinou aqui por décadas.',
      'Famoso por Londres e pelo chá.',
    ],
  },
  {
    name: 'França',
    name_en: 'France',
    coordinates: [2.2137, 46.2276],
    tips: [
      'Famosa pela Torre Eiffel.',
      'Paris é sua capital.',
      'É conhecida pela culinária e vinhos.',
    ],
  },
  {
    name: 'Alemanha',
    name_en: 'Germany',
    coordinates: [10.4515, 51.1657],
    tips: [
      'Famosa por carros como BMW e Mercedes.',
      'Berlim é sua capital.',
      'Foi dividida em dois países após a Segunda Guerra.',
    ],
  },
  {
    name: 'Itália',
    name_en: 'Italy',
    coordinates: [12.5674, 41.8719],
    tips: [
      'Tem o formato de uma bota.',
      'Berço do Império Romano.',
      'Famoso por massas, pizzas e Roma.',
    ],
  },
  {
    name: 'Espanha',
    name_en: 'Spain',
    coordinates: [-3.7492, 40.4637],
    tips: [
      'Língua oficial é o espanhol.',
      'Tem regiões como Catalunha e Andaluzia.',
      'Famoso por touradas e flamenco.',
    ],
  },
  {
    name: 'Portugal',
    name_en: 'Portugal',
    coordinates: [-8.2245, 39.3999],
    tips: [
      'País natal de grandes navegadores.',
      'Compartilha a Península Ibérica com a Espanha.',
      'A capital é Lisboa.',
    ],
  },
  {
    name: 'Rússia',
    name_en: 'Russia',
    coordinates: [105.3188, 61.524],
    tips: [
      'É o maior país do mundo em extensão.',
      'Faz parte da Europa e da Ásia.',
      'Moscou é sua capital.',
    ],
  },
  {
    name: 'Suíça',
    name_en: 'Switzerland',
    coordinates: [8.2275, 46.8182],
    tips: [
      'Famoso por chocolates e relógios.',
      'Tem neutralidade política tradicional.',
      'Genebra e Zurique são cidades importantes.',
    ],
  },
  {
    name: 'Países Baixos',
    name_en: 'Netherlands',
    coordinates: [5.2913, 52.1326],
    tips: [
      'Famoso por moinhos, tulipas e bicicletas.',
      'Também conhecido como Holanda.',
      'Amsterdã é a capital.',
    ],
  },
  {
    name: 'Suécia',
    name_en: 'Sweden',
    coordinates: [18.6435, 60.1282],
    tips: ['País escandinavo.', 'Sede de empresas como IKEA e Volvo.', 'A capital é Estocolmo.'],
  },
  {
    name: 'Noruega',
    name_en: 'Norway',
    coordinates: [8.4689, 60.472],
    tips: ['Famoso pelos fiordes.', 'Tem uma das maiores rendas per capita.', 'A capital é Oslo.'],
  },
  {
    name: 'África do Sul',
    name_en: 'South Africa',
    coordinates: [22.9375, -30.5595],
    tips: [
      'Tem três capitais.',
      'Nelson Mandela foi um herói nacional aqui.',
      'Está no extremo sul do continente africano.',
    ],
  },
  {
    name: 'Egito',
    name_en: 'Egypt',
    coordinates: [30.8025, 26.8206],
    tips: [
      'Famoso pelas pirâmides e o rio Nilo.',
      'Antiga civilização faraônica.',
      'O deserto do Saara cobre boa parte do país.',
    ],
  },
  {
    name: 'Marrocos',
    name_en: 'Morocco',
    coordinates: [-7.0926, 31.7917],
    tips: [
      'Fica no norte da África, perto da Europa.',
      'Cidades como Marrakech e Casablanca.',
      'Famoso por mercados e desertos.',
    ],
  },
  {
    name: 'Nigéria',
    name_en: 'Nigeria',
    coordinates: [8.6753, 9.082],
    tips: [
      'País mais populoso da África.',
      'A capital é Abuja, mas Lagos é a maior cidade.',
      'Produz muito petróleo.',
    ],
  },
  {
    name: 'China',
    name_en: 'China',
    coordinates: [104.1954, 35.8617],
    tips: [
      'País mais populoso do mundo.',
      'A Grande Muralha está aqui.',
      'Tem cidades como Pequim e Xangai.',
    ],
  },
  {
    name: 'Japão',
    name_en: 'Japan',
    coordinates: [138.2529, 36.2048],
    tips: [
      'Arquipélago no Pacífico.',
      'Famoso por tecnologia e cultura milenar.',
      'A capital é Tóquio.',
    ],
  },
  {
    name: 'Coreia do Sul',
    name_en: 'South Korea',
    coordinates: [127.7669, 35.9078],
    tips: [
      'Conhecido pelo K-pop e tecnologia.',
      'Faz fronteira com um país rival ao norte.',
      'Seul é sua capital.',
    ],
  },
  {
    name: 'Índia',
    name_en: 'India',
    coordinates: [78.9629, 20.5937],
    tips: [
      'Segundo país mais populoso do mundo.',
      'Famoso por Bollywood e pelo Taj Mahal.',
      'Tem uma grande diversidade cultural e religiosa.',
    ],
  },
  {
    name: 'Arábia Saudita',
    name_en: 'Saudi Arabia',
    coordinates: [45.0792, 23.8859],
    tips: [
      'Lar das cidades sagradas do Islã.',
      'Exportador de petróleo.',
      'Grande parte do território é deserto.',
    ],
  },
  {
    name: 'Israel',
    name_en: 'Israel',
    coordinates: [34.8516, 31.0461],
    tips: [
      'Centro de três grandes religiões monoteístas.',
      'Jerusalém é uma cidade muito importante.',
      'Fica no Oriente Médio.',
    ],
  },
  {
    name: 'Emirados Árabes Unidos',
    name_en: 'United Arab Emirates',
    coordinates: [53.8478, 23.4241],
    tips: [
      'Famoso pelos arranha-céus e luxo.',
      'Dubai e Abu Dhabi são cidades principais.',
      'Rico em petróleo.',
    ],
  },
  {
    name: 'Turquia',
    name_en: 'Turkey',
    coordinates: [35.2433, 38.9637],
    tips: [
      'País euro-asiático.',
      'Istambul foi Constantinopla.',
      'Tem influência europeia e do Oriente Médio.',
    ],
  },
  {
    name: 'Austrália',
    name_en: 'Australia',
    coordinates: [133.7751, -25.2744],
    tips: [
      'Tem cangurus e coalas.',
      'Sydney e Melbourne são cidades famosas.',
      'É também um continente.',
    ],
  },
  {
    name: 'Nova Zelândia',
    name_en: 'New Zealand',
    coordinates: [174.8859, -40.9006],
    tips: [
      'Formada por duas ilhas principais.',
      'Famosa por paisagens usadas em “O Senhor dos Anéis”.',
      'A capital é Wellington.',
    ],
  },
  {
    name: 'Venezuela',
    name_en: 'Venezuela',
    coordinates: [-66.5897, 6.4238],
    tips: [
      'Possui as maiores reservas de petróleo do mundo.',
      "Tem as Cataratas do Angel, a mais alta queda d'água do mundo.",
      'A capital é Caracas.',
    ],
  },
  {
    name: 'Equador',
    name_en: 'Ecuador',
    coordinates: [-78.1834, -1.8312],
    tips: [
      'O nome vem da linha do Equador que corta o país.',
      'As Ilhas Galápagos pertencem ao país.',
      'Usa o dólar americano como moeda oficial.',
    ],
  },
  {
    name: 'Uruguai',
    name_en: 'Uruguay',
    coordinates: [-55.7658, -32.5228],
    tips: [
      'Tem uma das menores populações da América do Sul.',
      'Famoso por sua carne e pelo futebol.',
      'Montevidéu é considerada a cidade com melhor qualidade de vida da região.',
    ],
  },
  {
    name: 'Paraguai',
    name_en: 'Paraguay',
    coordinates: [-58.4438, -23.4425],
    tips: [
      'País sem saída para o mar.',
      'Línguas oficiais são espanhol e guarani.',
      'Conhecido pela Usina Hidrelétrica de Itaipu.',
    ],
  },
  {
    name: 'Bolívia',
    name_en: 'Bolivia',
    coordinates: [-63.5887, -16.2902],
    tips: [
      'La Paz é a capital mais alta do mundo.',
      'Tem o maior deserto de sal: Salar de Uyuni.',
      'País sem saída para o mar.',
    ],
  },
  {
    name: 'Costa Rica',
    name_en: 'Costa Rica',
    coordinates: [-83.7534, 9.7489],
    tips: [
      'Não tem exército desde 1949.',
      'Pioneira em ecoturismo.',
      'Tem mais de 25% de seu território como áreas protegidas.',
    ],
  },
  {
    name: 'Panamá',
    name_en: 'Panama',
    coordinates: [-80.7821, 8.538],
    tips: [
      'Canal do Panamá conecta os oceanos Atlântico e Pacífico.',
      'Usa o dólar americano como moeda oficial.',
      'A capital é a Cidade do Panamá.',
    ],
  },
  {
    name: 'Cuba',
    name_en: 'Cuba',
    coordinates: [-77.7812, 21.5218],
    tips: [
      'Maior ilha do Caribe.',
      'Famosa por seus charutos e rum.',
      'Último país comunista das Américas.',
    ],
  },
  {
    name: 'Ucrânia',
    name_en: 'Ukraine',
    coordinates: [31.1656, 48.3794],
    tips: [
      'Maior país totalmente na Europa.',
      'Terra fértil conhecida como "celeiro da Europa".',
      'A capital é Kiev.',
    ],
  },
  {
    name: 'Polônia',
    name_en: 'Poland',
    coordinates: [19.1451, 51.9194],
    tips: [
      'País com forte tradição católica.',
      'Varsóvia foi quase totalmente reconstruída após a Segunda Guerra.',
      'Terra natal do Papa João Paulo II.',
    ],
  },
  {
    name: 'Áustria',
    name_en: 'Austria',
    coordinates: [14.5501, 47.5162],
    tips: [
      'Terra de Mozart e Freud.',
      'Alpes ocupam grande parte do território.',
      'Viena foi capital do Império Austro-Húngaro.',
    ],
  },
  {
    name: 'Bélgica',
    name_en: 'Belgium',
    coordinates: [4.4699, 50.5039],
    tips: [
      'Sede da União Europeia e da NATO.',
      'Famosa por chocolates e cervejas.',
      'Tem três línguas oficiais: holandês, francês e alemão.',
    ],
  },
  {
    name: 'Grécia',
    name_en: 'Greece',
    coordinates: [21.8243, 39.0742],
    tips: [
      'Berço da civilização ocidental e da democracia.',
      'Tem milhares de ilhas no Mar Egeu.',
      'A Acrópole de Atenas é um símbolo mundial.',
    ],
  },
  {
    name: 'Dinamarca',
    name_en: 'Denmark',
    coordinates: [9.5018, 56.2639],
    tips: [
      'País mais feliz do mundo (segundo vários rankings).',
      'Inclui a Groenlândia e as Ilhas Faroé.',
      'Copenhague é conhecida por sua arquitetura e bicicletas.',
    ],
  },
  {
    name: 'Finlândia',
    name_en: 'Finland',
    coordinates: [25.7482, 61.9241],
    tips: [
      'Terra do Papai Noel (Lapônia).',
      'País com maior número de lagos em relação ao território.',
      'Inventou o sauna.',
    ],
  },
  {
    name: 'Irlanda',
    name_en: 'Ireland',
    coordinates: [-8.2439, 53.4129],
    tips: [
      'Conhecida como "Ilha Esmeralda".',
      'Terra de escritores como James Joyce.',
      'Famosa pelo Guinness e música tradicional.',
    ],
  },
  {
    name: 'Quênia',
    name_en: 'Kenya',
    coordinates: [37.9062, -0.0236],
    tips: [
      'Famoso pelos safaris e pela Grande Migração.',
      'Terra dos massais.',
      'Possui praias paradisíacas no Oceano Índico.',
    ],
  },
  {
    name: 'Etiópia',
    name_en: 'Ethiopia',
    coordinates: [40.4897, 9.145],
    tips: [
      'Único país africano nunca colonizado.',
      'Considerado o berço da humanidade (Lucy).',
      'Tem seu próprio calendário e horário.',
    ],
  },
  {
    name: 'Gana',
    name_en: 'Ghana',
    coordinates: [-1.0232, 7.9465],
    tips: [
      'Primeiro país africano a ganhar independência do colonialismo.',
      'Rico em ouro e cacau.',
      'Conhecido pelos fortes escravos na costa.',
    ],
  },
  {
    name: 'Tanzânia',
    name_en: 'Tanzania',
    coordinates: [34.8888, -6.369],
    tips: [
      'Lar do Monte Kilimanjaro.',
      'Parque Nacional do Serengeti é famoso mundialmente.',
      'Zanzibar tem praias paradisíacas.',
    ],
  },
  {
    name: 'Angola',
    name_en: 'Angola',
    coordinates: [17.8739, -11.2027],
    tips: [
      'Maior produtor de petróleo da África Subsaariana.',
      'Tem o português como língua oficial.',
      'Rica em diamantes.',
    ],
  },
  {
    name: 'Indonésia',
    name_en: 'Indonesia',
    coordinates: [113.9213, -0.7893],
    tips: [
      'Maior arquipélago do mundo com mais de 17.000 ilhas.',
      'Maior população muçulmana do mundo.',
      'Bali é um destino turístico famoso.',
    ],
  },
  {
    name: 'Tailândia',
    name_en: 'Thailand',
    coordinates: [100.9925, 15.87],
    tips: [
      'Único país do sudeste asiático nunca colonizado.',
      'Famoso por suas praias, templos e comida picante.',
      'Bangkok é uma das cidades mais visitadas do mundo.',
    ],
  },
  {
    name: 'Vietnã',
    name_en: 'Vietnam',
    coordinates: [108.2772, 14.0583],
    tips: [
      'Formato alongado como um "S".',
      'Cenário da Guerra do Vietnã.',
      'Famoso por sua culinária (pho, banh mi).',
    ],
  },
  {
    name: 'Malásia',
    name_en: 'Malaysia',
    coordinates: [101.9758, 4.2105],
    tips: [
      'Dividida em parte peninsular e insular (Bornéu).',
      'Petronas Towers foram os edifícios mais altos do mundo.',
      'Diversidade étnica e religiosa.',
    ],
  },
  {
    name: 'Filipinas',
    name_en: 'Philippines',
    coordinates: [121.774, 12.8797],
    tips: [
      'Arquipélago com mais de 7.000 ilhas.',
      'Terceiro maior país anglófono do mundo.',
      'Famoso por suas praias e festivais coloridos.',
    ],
  },
  {
    name: 'Paquistão',
    name_en: 'Pakistan',
    coordinates: [69.3451, 30.3753],
    tips: [
      'Terra da civilização do Vale do Indo.',
      'Possui armas nucleares.',
      'Faz fronteira com China, Índia, Afeganistão e Irã.',
    ],
  },
  {
    name: 'Bangladesh',
    name_en: 'Bangladesh',
    coordinates: [90.3563, 23.685],
    tips: [
      'Um dos países mais densamente povoados do mundo.',
      'Vulnerável a inundações e mudanças climáticas.',
      'Grande produtor de tecidos e roupas.',
    ],
  },
  {
    name: 'Irã',
    name_en: 'Iran',
    coordinates: [53.688, 32.4279],
    tips: [
      'Antiga Pérsia, com história milenar.',
      'Maior produtor de pistache do mundo.',
      'Tensas relações com países ocidentais.',
    ],
  },
  {
    name: 'Iraque',
    name_en: 'Iraq',
    coordinates: [43.6793, 33.2232],
    tips: ['Terra da antiga Mesopotâmia.', 'Rico em petróleo.', 'Cenário de conflitos recentes.'],
  },
  {
    name: 'Fiji',
    name_en: 'Fiji',
    coordinates: [178.065, -17.7134],
    tips: [
      'Arquipélago com mais de 300 ilhas.',
      'Destino turístico famoso por praias e mergulho.',
      'Grande população de origem indiana.',
    ],
  },
  {
    name: 'Papua-Nova Guiné',
    name_en: 'Papua New Guinea',
    coordinates: [143.9555, -6.3149],
    tips: [
      'Maior diversidade linguística do mundo (mais de 800 línguas).',
      'Parte da ilha é território da Indonésia.',
      'Florestas tropicais cobrem grande parte do país.',
    ],
  },
  {
    name: 'Guatemala',
    name_en: 'Guatemala',
    coordinates: [-90.2308, 15.7835],
    tips: [
      'Berço da civilização Maia.',
      'Tem vulcões ativos e ruínas antigas.',
      'A capital é a Cidade da Guatemala.',
    ],
  },
  {
    name: 'Honduras',
    name_en: 'Honduras',
    coordinates: [-86.2419, 15.199999],
    tips: [
      'Conhecida por seus recifes de coral.',
      'Tegucigalpa é sua capital.',
      'Local das Ruínas de Copán.',
    ],
  },
  {
    name: 'El Salvador',
    name_en: 'El Salvador',
    coordinates: [-88.8965, 13.7942],
    tips: [
      'O menor país da América Central.',
      'Usa o dólar americano como moeda.',
      'Conhecido por suas praias e vulcões.',
    ],
  },
  {
    name: 'Nicarágua',
    name_en: 'Nicaragua',
    coordinates: [-85.2072, 12.8654],
    tips: [
      'Tem o maior lago da América Central.',
      'Manágua é sua capital.',
      'Conhecida por sua biodiversidade.',
    ],
  },
  {
    name: 'República Dominicana',
    name_en: 'Dominican Republic',
    coordinates: [-70.1627, 18.7357],
    tips: [
      'Compartilha a ilha Hispaniola com o Haiti.',
      'Famosa por resorts turísticos.',
      'Berço do merengue e da bachata.',
    ],
  },
  {
    name: 'Haiti',
    name_en: 'Haiti',
    coordinates: [-72.2852, 18.9712],
    tips: [
      'Primeira república negra do mundo.',
      'Francês e crioulo são línguas oficiais.',
      'Sofreu um grande terremoto em 2010.',
    ],
  },
  {
    name: 'Jamaica',
    name_en: 'Jamaica',
    coordinates: [-77.2975, 18.1096],
    tips: [
      'Terra do reggae e Bob Marley.',
      'Famosa por suas praias e Blue Mountain Coffee.',
      'Kingston é sua capital.',
    ],
  },
  {
    name: 'República Tcheca',
    name_en: 'Czech Republic',
    coordinates: [15.4726, 49.8175],
    tips: [
      'Praga é uma das cidades mais bonitas da Europa.',
      'Famosa por sua cerveja Pilsner.',
      'Tem o maior castelo do mundo (Praga).',
    ],
  },
  {
    name: 'Hungria',
    name_en: 'Hungary',
    coordinates: [19.5033, 47.1625],
    tips: [
      'Budapeste é conhecida como "Paris do Leste".',
      'Invenção do Cubo Mágico (Rubik).',
      'Termas e banhos termais famosos.',
    ],
  },
  {
    name: 'Romênia',
    name_en: 'Roménia',
    coordinates: [24.9668, 45.9432],
    tips: [
      'Terra do Conde Drácula (Castelo de Bran).',
      'Tem a estrada mais bonita do mundo (Transfăgărășan).',
      'Bucareste é sua capital.',
    ],
  },
  {
    name: 'Bulgária',
    name_en: 'Bulgaria',
    coordinates: [25.4858, 42.7339],
    tips: [
      'Um dos países mais antigos da Europa.',
      'Inventou o alfabeto cirílico.',
      'Famosa por seu iogurte e rosas.',
    ],
  },
  {
    name: 'Sérvia',
    name_en: 'Serbia',
    coordinates: [21.0059, 44.0165],
    tips: [
      'Belgrado é uma das cidades mais antigas da Europa.',
      'Forte tradição em tênis (Djokovic).',
      'Cruzamento cultural entre Oriente e Ocidente.',
    ],
  },
  {
    name: 'Croácia',
    name_en: 'Croatia',
    coordinates: [15.2, 45.1],
    tips: [
      'Famosa por sua costa no Adriático.',
      'Dubrovnik foi cenário de Game of Thrones.',
      'Tem parques nacionais espetaculares.',
    ],
  },
  {
    name: 'Argélia',
    name_en: 'Algeria',
    coordinates: [1.6596, 28.0339],
    tips: [
      'Maior país da África em área.',
      'Grande parte é coberta pelo Saara.',
      'Línguas oficiais: árabe e berbere.',
    ],
  },
  {
    name: 'Líbia',
    name_en: 'Libya',
    coordinates: [17.2283, 26.3351],
    tips: [
      'Tem as maiores reservas de petróleo da África.',
      'Grande parte é deserto.',
      'Foi governada por Kadafi por 42 anos.',
    ],
  },
  {
    name: 'Tunísia',
    name_en: 'Tunisia',
    coordinates: [9.5375, 33.8869],
    tips: [
      'Berço da Primavera Árabe.',
      'Ruínas de Cartago são famosas.',
      'Local de filmagem de Star Wars (Tatooine).',
    ],
  },
  {
    name: 'Camarões',
    name_en: 'Cameroon',
    coordinates: [12.3547, 7.3697],
    tips: [
      'Conhecido como "África em miniatura" por sua diversidade.',
      'Fala inglês e francês.',
      'Boa seleção de futebol.',
    ],
  },
  {
    name: 'Costa do Marfim',
    name_en: 'Ivory Coast',
    coordinates: [-5.5471, 7.54],
    tips: [
      'Maior produtor mundial de cacau.',
      'Abidjan é a capital econômica.',
      'Forte influência francesa.',
    ],
  },
  {
    name: 'Senegal',
    name_en: 'Senegal',
    coordinates: [-14.4524, 14.4974],
    tips: [
      'Conhecido pela Ilha de Gorée (história da escravidão).',
      'Forte tradição musical.',
      'Dacar é a capital mais ocidental da África.',
    ],
  },
  {
    name: 'Cazaquistão',
    name_en: 'Kazakhstan',
    coordinates: [66.9237, 48.0196],
    tips: [
      'Maior país sem costa marítima do mundo.',
      'Antiga capital Almaty foi sede dos Jogos Asiáticos.',
      'Rico em petróleo e minerais.',
    ],
  },
  {
    name: 'Uzbequistão',
    name_en: 'Uzbekistan',
    coordinates: [64.5853, 41.3775],
    tips: [
      'Rota da Seda passava por aqui.',
      'Samarcanda e Bukhara são cidades históricas.',
      'Maior produtor de algodão da Ásia Central.',
    ],
  },
  {
    name: 'Nepal',
    name_en: 'Nepal',
    coordinates: [84.124, 28.3949],
    tips: [
      'Tem o Monte Everest, o mais alto do mundo.',
      'Única bandeira não retangular.',
      'Berço de Buda (Lumbini).',
    ],
  },
  {
    name: 'Sri Lanka',
    name_en: 'Sri Lanka',
    coordinates: [80.7718, 7.8731],
    tips: [
      'Antigo Ceilão, famoso por chá.',
      'Tem elefantes e leopardos.',
      'Civilização com mais de 3.000 anos.',
    ],
  },
  {
    name: 'Mianmar',
    name_en: 'Myanmar',
    coordinates: [95.9562, 21.9162],
    tips: [
      'Antiga Birmânia.',
      'Tem milhares de templos budistas.',
      'Aung San Suu Kyi é sua líder mais famosa.',
    ],
  },
  {
    name: 'Camboja',
    name_en: 'Cambodia',
    coordinates: [104.9909, 12.5657],
    tips: [
      'Lar de Angkor Wat, maior templo religioso do mundo.',
      'História marcada pelos Khmer Vermelhos.',
      'Faz fronteira com Tailândia, Vietnã e Laos.',
    ],
  },
  {
    name: 'Samoa',
    name_en: 'Samoa',
    coordinates: [-172.1046, -13.759],
    tips: [
      'Primeiro país a ver o nascer do sol.',
      "Tradição de tatuagens (pe'a).",
      'Rugby é o esporte nacional.',
    ],
  },
  {
    name: 'Tonga',
    name_en: 'Tonga',
    coordinates: [-175.1982, -21.179],
    tips: [
      'Único reino na Polinésia.',
      'Foi protetorado britânico.',
      'Primeiro país do Pacífico a ser colonizado.',
    ],
  },
  {
    name: 'Guiana',
    name_en: 'Guyana',
    coordinates: [-58.9302, 4.8604],
    tips: [
      'Único país da América do Sul com inglês como língua oficial.',
      'Kaieteur Falls é 5 vezes maior que as Cataratas do Niágara.',
      'Tem disputa territorial com a Venezuela.',
    ],
  },
  {
    name: 'Timor-Leste',
    name_en: 'Timor-Leste',
    coordinates: [125.7275, -8.8742],
    tips: [
      'Primeira nova nação do século XXI (2002).',
      'Língua oficial é o português.',
      'Sofreu ocupação indonésia por 24 anos.',
    ],
  },
  {
    name: 'Suriname',
    name_en: 'Suriname',
    coordinates: [-56.0278, 3.9193],
    tips: [
      'Único país de língua holandesa nas Américas.',
      'Maior percentual de floresta tropical intacta.',
      'Capital Paramaribo tem centro histórico colonial.',
    ],
  },
  {
    name: 'Bielorrússia',
    name_en: 'Belarus',
    coordinates: [27.9534, 53.7098],
    tips: [
      'Última ditadura da Europa.',
      'Conhecida como "os pulmões da Europa" por suas florestas.',
      'Minsk foi quase totalmente reconstruída após a Segunda Guerra.',
    ],
  },
  {
    name: 'Eslováquia',
    name_en: 'Slovakia',
    coordinates: [19.699, 48.669],
    tips: [
      'Separou-se da República Tcheca em 1993.',
      'Tem castelos medievais impressionantes.',
      'Bratislava fica às margens do Danúbio.',
    ],
  },
  {
    name: 'Eslovênia',
    name_en: 'Slovenia',
    coordinates: [14.9955, 46.1512],
    tips: [
      'Tem um litoral minúsculo no Adriático.',
      'Lago Bled é uma atração turística famosa.',
      'Um dos países mais verdes do mundo.',
    ],
  },
  {
    name: 'Lituânia',
    name_en: 'Lithuania',
    coordinates: [23.8813, 55.1694],
    tips: [
      'Maior país báltico.',
      'Vilnius tem um centro histórico barroco.',
      'Foi o último país europeu a se converter ao cristianismo.',
    ],
  },
  {
    name: 'Letônia',
    name_en: 'Latvia',
    coordinates: [24.6032, 56.8796],
    tips: [
      'Riga é conhecida por sua arquitetura Art Nouveau.',
      'Tem uma das mais longas praias da Europa.',
      'Língua letã é uma das mais antigas da Europa.',
    ],
  },
  {
    name: 'Estônia',
    name_en: 'Estonia',
    coordinates: [25.0136, 58.5953],
    tips: [
      'Líder em tecnologia digital (Skype foi criado aqui).',
      'Tem mais de 2.000 ilhas.',
      'Um dos países menos religiosos do mundo.',
    ],
  },
  {
    name: 'Afeganistão',
    name_en: 'Afghanistan',
    coordinates: [67.7099, 33.9391],
    tips: [
      'Conhecido como "cemitério de impérios".',
      'Rota crucial da antiga Rota da Seda.',
      'Tem uma das menores expectativas de vida do mundo.',
    ],
  },
  {
    name: 'Mongólia',
    name_en: 'Mongolia',
    coordinates: [103.8467, 46.8625],
    tips: [
      'Terra de Gengis Khan.',
      'Maior densidade de cavalos por pessoa no mundo.',
      'Um dos últimos lugares com pastores nômades.',
    ],
  },
  {
    name: 'Laos',
    name_en: 'Laos',
    coordinates: [102.4955, 19.8563],
    tips: [
      'Único país do sudeste asiático sem costa marítima.',
      'Mais de 4.000 ilhas no rio Mekong.',
      'Um dos últimos países comunistas do mundo.',
    ],
  },
  {
    name: 'Butão',
    name_en: 'Bhutan',
    coordinates: [90.4336, 27.5142],
    tips: [
      'Mede a Felicidade Interna Bruta em vez de PIB.',
      'Primeiro país com agricultura 100% orgânica.',
      'Tem mais monges do que soldados.',
    ],
  },
  {
    name: 'Maldivas',
    name_en: 'Maldives',
    coordinates: [73.2207, 3.2028],
    tips: [
      'País mais baixo do mundo (média de 1,5m acima do mar).',
      'Pode desaparecer com o aumento do nível do mar.',
      'Destino de luxo para lua de mel.',
    ],
  },
  {
    name: 'Brunei',
    name_en: 'Brunei',
    coordinates: [114.7277, 4.5353],
    tips: [
      'Um dos países mais ricos per capita.',
      'Governado por um sultão absolutista.',
      'Proíbe consumo público de álcool.',
    ],
  },
  {
    name: 'Moçambique',
    name_en: 'Mozambique',
    coordinates: [35.5296, -18.6657],
    tips: [
      'Tem praias paradisíacas no Índico.',
      'Língua oficial é o português.',
      'Rico em recursos naturais mas muito pobre.',
    ],
  },
  {
    name: 'Madagascar',
    name_en: 'Madagascar',
    coordinates: [46.8691, -18.7669],
    tips: [
      'Quarta maior ilha do mundo.',
      '80% da vida selvagem é endêmica (como os lêmures).',
      'Desflorestação ameaça ecossistemas únicos.',
    ],
  },
  {
    name: 'Zâmbia',
    name_en: 'Zambia',
    coordinates: [27.8493, -13.1339],
    tips: [
      'Lar das Cataratas Vitória.',
      'Um dos maiores produtores de cobre do mundo.',
      'Nome vem do rio Zambeze.',
    ],
  },
  {
    name: 'Zimbábue',
    name_en: 'Zimbabwe',
    coordinates: [29.1549, -19.0154],
    tips: [
      'Teve hiperinflação recorde em 2008.',
      'Ruínas do Grande Zimbábue são patrimônio mundial.',
      'Robert Mugabe governou por 37 anos.',
    ],
  },
  {
    name: 'Sudão',
    name_en: 'Sudan',
    coordinates: [30.2176, 12.8628],
    tips: [
      'Já foi o maior país da África (antes da divisão).',
      'Tem mais pirâmides que o Egito (mas menos conhecidas).',
      'Conflitos em Darfur duraram décadas.',
    ],
  },
  {
    name: 'Belize',
    name_en: 'Belize',
    coordinates: [-88.4976, 17.1899],
    tips: [
      'Único país da América Central com inglês como língua oficial.',
      'Tem a segunda maior barreira de corais do mundo.',
      'Ruínas maias de Caracol são impressionantes.',
    ],
  },
  {
    name: 'Bahamas',
    name_en: 'Bahamas',
    coordinates: [-77.3963, 25.0343],
    tips: [
      'Arquipélago com 700 ilhas.',
      'Paraíso fiscal e turístico.',
      'Cristóvão Colombo chegou primeiro aqui no Novo Mundo.',
    ],
  },
  {
    name: 'Barbados',
    name_en: 'Barbados',
    coordinates: [-59.5432, 13.1939],
    tips: [
      'Terra natal de Rihanna.',
      'Primeiro país caribenho a abolir a escravidão.',
      'Famoso pelo rum e pelas praias de areia rosa.',
    ],
  },
  {
    name: 'Omã',
    name_en: 'Oman',
    coordinates: [55.9233, 21.4735],
    tips: [
      'Único país governado por um sultão absoluto.',
      'Tradição naval histórica.',
      'Deserto e montanhas impressionantes.',
    ],
  },
  {
    name: 'Jordânia',
    name_en: 'Jordan',
    coordinates: [36.2384, 30.5852],
    tips: [
      'Petra é uma das 7 Maravilhas do Mundo Moderno.',
      'Um dos países mais secos do mundo.',
      'Abriga campos de refugiados palestinos e sírios.',
    ],
  },
  {
    name: 'Líbano',
    name_en: 'Lebanon',
    coordinates: [35.8623, 33.8547],
    tips: [
      'Conhecido como "a Suíça do Oriente Médio".',
      'Beirute foi destruída e reconstruída 7 vezes.',
      'Culinária famosa (como o homus).',
    ],
  },
]

export default countries
