import { Cake, Testimonial } from './types';
import cakeChocolate from './assets/images/cake_chocolate_1786293967405.jpg';
import cakeBerry from './assets/images/cake_berry_1786293984287.jpg';
import cakeAnniversary from './assets/images/cake_anniversary_1786293999829.jpg';
import cakeKids from './assets/images/cake_kids_1786294014450.jpg';

export const cakes: Cake[] = [
  {
    id: '1',
    name: 'Classic Truffle Indulgence',
    category: 'Birthday',
    description: 'Rich, moist chocolate cake layered with decadent dark chocolate ganache.',
    image: cakeChocolate,
  },
  {
    id: '2',
    name: 'Rustic Berry Delight',
    category: 'Celebration',
    description: 'A beautiful naked cake topped with fresh strawberries and raspberries.',
    image: cakeBerry,
  },
  {
    id: '3',
    name: 'Elegant Floral Vanilla',
    category: 'Anniversary',
    description: 'Two-tier vanilla bean cake decorated with delicate buttercream flowers.',
    image: cakeAnniversary,
  },
  {
    id: '4',
    name: 'Pastel Dreamscape',
    category: 'Kids',
    description: 'Fun and colorful funfetti cake with soft pastel buttercream and clouds.',
    image: cakeKids,
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
  cakeChocolate,
  cakeBerry,
  cakeAnniversary,
  cakeKids,
];
