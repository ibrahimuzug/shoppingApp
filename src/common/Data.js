const categories =
  [
    { id: 'car', name: 'Otomobil' },
    { id: 'home', name: 'Ev ve Yaşam' },
    { id: 'electronic', name: 'Elektronik' },
    { id: 'homeelectronic', name: 'Beyaz Eşya' },
    { id: 'clothes', name: 'Giyim' },
    { id: 'furniture', name: 'Mobilya' },
    { id: 'garden', name: 'Bahçe' },
    { id: 'construct', name: 'Yapı Market' },
    { id: 'carpet', name: 'Halı' },
    { id: 'office', name: 'Ofis Malzemeleri' },
    { id: 'sound', name: 'Tv-Ses' },
    { id: 'kitchen', name: 'Mutfak' },
    { id: 'zuccaciye', name: 'Züccaciye' },
    { id: 'bags', name: 'Çanta Ve Bavul' }
  ];

const allProducts = [
  { id: 1, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 8, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 9, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 10, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 11, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 12, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 13, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 14, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 15, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 16, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 17, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 18, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 19, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 20, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 21, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 22, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 23, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 24, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 25, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 26, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 27, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 28, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 29, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 30, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 31, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 32, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 33, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 34, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 35, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 36, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 37, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 38, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 39, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 40, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 41, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 42, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 43, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 44, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 45, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 46, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 47, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 48, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 49, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 50, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 51, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 52, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 53, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 54, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 55, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 56, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 57, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 58, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 59, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 60, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 61, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 62, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 63, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 64, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 65, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 66, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 67, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 68, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 69, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 70, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },

];

const bags = [
  { id: 1, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
];
const zuccaciye = [
  { id: 1, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
];
const kitchen = [
  { id: 1, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
];
const sound = [
  { id: 1, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
];
const office = [
  { id: 1, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
];
const carpet = [
  { id: 1, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
];

const construct = [
  { id: 1, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
];

const garden = [
  { id: 1, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },

];

const furniture = [
  { id: 1, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
];

const clothes = [
  { id: 1, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
];

const homeelectronic = [
  { id: 1, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },

];

const electronic = [
  { id: 1, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
];

const home = [
  { id: 1, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
];

const car = [

  { id: 1, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 2, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 3, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 4, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 5, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 6, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
  { id: 7, name: '16 Best Plants That Thrive In Your Bedroom', description: ' All Good Stuff Is In Our Stock Come And See', price: 199 },
];

export {
  categories,
  car,
  home,
  electronic,
  homeelectronic,
  clothes,
  furniture,
  garden,
  construct,
  carpet,
  office,
  sound,
  kitchen,
  zuccaciye,
  bags,
  allProducts

}