import { Cake, Testimonial } from './types';
import chocolateTruffle from './assets/images/chocolate_truffle.jpeg';
import babyWelcome from './assets/images/baby_welcome.jpeg';
import chocolateCreme from './assets/images/chocolate_cream.jpeg';
import vanillaCreme from './assets/images/vanilla_creme.jpeg';
import BelgiumDoubleTruffleGanache from './assets/images/Belgium_Double_Truffle_Ganache.jpeg';
import vanillaChocolateCupcake from './assets/images/vanilla_chocolate_cupcake.jpeg';
import BiscoffVanillaCreme from './assets/images/Biscoff_Vanilla_Creme.jpeg';
import kidsChocolateTruffle from './assets/images/kids_chocolate_truffle.jpeg';
import unicornThemeCake from './assets/images/unicorn_theme_cake.jpeg';
import vanillaFlavourTruffle from './assets/images/vanilla_flavour_truffle.jpeg';

export const cakes: Cake[] = [
  {
    id: '1',
    name: 'Chocolate Truffle',
    price: '1250/-',
    weight: '1/2 kg',
    category: 'Birthday',
    description: 'Rich, moist chocolate cake layered with decadent dark chocolate ganache.',
    image: chocolateTruffle,
  },
  {
    id: '2',
    name: 'Double Truffle Flavour',
    price: '1100/-',
    weight: '1/2 kg',
    category: 'Celebration',
    description: 'Double truffle baby boy welcome cake featuring a blue bear, pram, feeding bottle, and booties.',
    image: babyWelcome,
  },
  {
    id: '3',
    name: 'Chai theme Chocolate cream cake',
    price: '850/-',
    weight: '1/2 kg',
    category: 'Birthday',
    description: 'Chocolate creme cake featuring a "Chai is Life" topper, teacup, books, stationery, and blackboard',
    image: chocolateCreme,
  },
  {
    id: '4',
    name: 'Vanilla Creme Flavours',
    price: '750/-',
    weight: '1/2 kg',
    category: 'Birthday',
    description: 'Vanilla creme cake featuring a personalized photo and blue balloon toppers.',
    image: vanillaCreme,
  },
  {
    id: '5',
    name: 'Belgium Double Truffle Ganache',
    price: '950/-',
    weight: '1/2 kg',
    category: 'Birthday',
    description: 'Belgium double truffle ganache birthday cake adorned with gold butterflies, gold spheres, and a "Happy Birthday" topper.',
    image: BelgiumDoubleTruffleGanache,
  },
  {
    id: '6',
    name: 'vanilla/chocolate Cupcakes',
    price: '50/pc',
    weight: '1 pc',
    category: 'CupCake',
    description: 'Delicious vanilla and chocolate cupcakes perfect for any celebration.',
    image: vanillaChocolateCupcake,
  },
  {
    id: '7',
    name: 'Biscoff Vanilla Creme',
    price: '800/-',
    weight: '1/2 kg',
    category: 'Birthday',
    description: 'Biscoff vanilla cream birthday cake decorated with white frosting and black ribbon bows.',
    image: BiscoffVanillaCreme,
  },
  {
    id: '8',
    name: 'Chocolate Truffle',
    price: '750/-',
    weight: '1/2 kg',
    category: 'Kids',
    description: 'Biscoff vanilla cream birthday cake decorated with white frosting and black ribbon bows.',
    image: kidsChocolateTruffle,
  },
  {
    id: '9',
    name: 'Unicorn Theme Truffle Cake',
    price: '1500/-',
    weight: '1 kg',
    category: 'Kids',
    description: 'Biscoff vanilla cream birthday cake decorated with white frosting and black ribbon bows.',
    image: unicornThemeCake,
  },
  {
    id: '10',
    name: 'Vanilla Truffle Cake',
    price: '1400/-',
    weight: '1 kg',
    category: 'Kids',
    description: 'Biscoff vanilla cream birthday cake decorated with white frosting and black ribbon bows.',
    image: vanillaFlavourTruffle,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya M.',
    text: 'Amazing quality and great service! The chocolate truffle cake was an absolute hit at our party. You can really taste the freshness.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Rahul S.',
    text: 'Truly amazing ordering experience. The team was so responsive and the custom anniversary cake looked even better than the reference photo.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Neha D.',
    text: 'Delicious, fresh and flavourful cake! My kids loved the design. Highly recommend CakeStudioSurat for homemade goodness.',
    rating: 5,
  }
];

export const galleryImages = [
  chocolateTruffle,
  babyWelcome,
  vanillaCreme,
  chocolateCreme,
  BelgiumDoubleTruffleGanache,
  vanillaChocolateCupcake,
  BiscoffVanillaCreme,
  kidsChocolateTruffle,
  unicornThemeCake,
  vanillaFlavourTruffle
];
