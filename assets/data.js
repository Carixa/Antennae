const productsData = [
  {
    id: 1,
    name: 'Andromeda',
    bid: 299.99,
    user: 'HarryStiless',
    category: 'boreales',
    userImg: './assets/img/user.png',
    cardImg: './assets/img/products/andro-boreal.png',
  },
  {
    id: 2,
    name: 'Aries',
    bid: 547.79,
    user: 'FireFox',
    category: 'boreales',
    userImg: './assets/img/user.png',
    cardImg: './assets/img/products/aries-boreal.png',
  },
  {
    id: 3,
    name: 'Pisces',
    bid: 449.29,
    user: 'JulieTa',
    category: 'boreales',
    userImg: './assets/img/user.png',
    cardImg: './assets/img/products/pisces-boreal.png',
  },
  {
    id: 4,
    name: 'Cancer',
    bid: 254.35,
    user: 'Duki',
    category: 'primavera',
    userImg: './assets/img/user.png',
    cardImg: './assets/img/products/cancer-primavera.jpg',
  },
  {
    id: 5,
    name: 'Leo',
    bid: 414.52,
    user: 'ElianaF',
    category: 'primavera',
    userImg: './assets/img/user.png',
    cardImg: './assets/img/products/leo-primavera.jpg',
  },
  {
    id: 6,
    name: 'Virgo',
    bid: 721.44,
    user: 'WalterMar',
    category: 'primavera',
    userImg: './assets/img/user.png',
    cardImg: './assets/img/products/virgo-primavera.jpg',
  },
  {
    id: 7,
    name: 'Draco',
    bid: 468.20,
    user: 'ZainMalik',
    category: 'verano',
    userImg: './assets/img/user.png',
    cardImg: './assets/img/products/draco-verano.jpg',
  },
  {
    id: 8,
    name: 'Libra',
    bid: 128.15,
    user: 'ReallyIDK',
    category: 'verano',
    userImg: './assets/img/user.png',
    cardImg: './assets/img/products/libra-verano.jpg',
  },
  {
    id: 9,
    name: 'Scorpius',
    bid: 200.5,
    user: 'BadBoy',
    category: 'verano',
    userImg: './assets/img/user.png',
    cardImg: './assets/img/products/scorpius-verano.jpg',
  },
  {
    id: 10,
    name: 'Tucana',
    bid: 418.35,
    user: 'YankeeDad',
    category: 'otoño',
    userImg: './assets/img/user.png',
    cardImg: './assets/img/products/tucana-otoño.jpg',
  },
  {
    id: 11,
    name: 'Aquarius',
    bid: 382.75,
    user: 'DracoMalf',
    category: 'otoño',
    userImg: './assets/img/user.png',
    cardImg: './assets/img/products/aquarius-otoño.jpg',
  },
  {
    id: 12,
    name: 'Octans',
    bid: 264.51,
    user: 'Bennito',
    category: 'otoño',
    userImg: './assets/img/user.png',
    cardImg: './assets/img/products/octans-otoño.jpg',
  },
  {
    id: 13,
    name: 'Gemini',
    bid: 815.27,
    user: 'Carixa',
    category: 'invierno',
    userImg: './assets/img/user.png',
    cardImg: './assets/img/products/gemini-invierno.jpg',
  },
  {
    id: 14,
    name: 'Orion',
    bid: 500.55,
    user: 'StarsWarsLove',
    category: 'invierno',
    userImg: './assets/img/user.png',
    cardImg: './assets/img/products/orion-invierno.jpg',
  },
  {
    id: 15,
    name: 'Puppis',
    bid: 168.46,
    user: 'HoldPrus',
    category: 'invierno',
    userImg: './assets/img/user.png',
    cardImg: './assets/img/products/puppis-invierno.jpg',
  },
];

const splitProducts = size => {
  let dividedProducts = [];
  for (let i = 0; i < productsData.length; i += size) {
    dividedProducts.push(productsData.slice(i, i + size));
  }
  return dividedProducts;
};

const productsController = {
  dividedProducts: splitProducts(2),
  nextProductsIndex: 1,
  productsLimit: splitProducts(15).length,
};

