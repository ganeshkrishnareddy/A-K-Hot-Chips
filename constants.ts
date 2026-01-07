import { Product } from './types';

export const WHATSAPP_NUMBER = "919502701115";

// Image mapping for consistency
const IMAGES = {
  bananaChips: 'https://images.unsplash.com/photo-1621953494796-028029b39b34?auto=format&fit=crop&w=800&q=80',
  spicyChips: 'https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&w=800&q=80',
  plainChips: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=800&q=80',
  murukku: 'https://images.unsplash.com/photo-1605638294459-3d18641b0722?auto=format&fit=crop&w=800&q=80', // Represents Chakodi, Chakkaralu
  mixture: 'https://images.unsplash.com/photo-1613242699965-c3f25c276a66?auto=format&fit=crop&w=800&q=80', // Represents Mixture, Sev, Bundhi
  peanuts: 'https://images.unsplash.com/photo-1606132415170-b1d5bdc6ce56?auto=format&fit=crop&w=800&q=80', // Represents Palli Pakodi, Masala Peanuts
  peas: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80', // Fried peas / South Indian Mix
  laddu: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&w=800&q=80', // Sweets
  dryFruitLaddu: 'https://images.unsplash.com/photo-1605197787394-6c1a7b87c0c2?auto=format&fit=crop&w=800&q=80', // Dry fruit laddu
  arisalu: 'https://images.unsplash.com/photo-1597714026720-8f74c62310ba?auto=format&fit=crop&w=800&q=80', // Rice snacks
  cookies: 'https://images.unsplash.com/photo-1605256406930-6b64b1899148?auto=format&fit=crop&w=800&q=80', // Biscuits/Gulabhi
  sweetShells: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcf8?auto=format&fit=crop&w=800&q=80', // Sweet snacks
  nippattu: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80', // Flat fried snacks
  floorCleaner: '/partners/360clean-floor-cleaner.png',
  dishWash: '/partners/360clean-dish-wash.png',
  detergent: '/partners/360clean-detergent.png',
};

export const PRODUCTS: Product[] = [
  // Chips
  { id: '1', name: 'Banana Chips', price: 400, unit: 'kg', category: 'Chips', description: 'Crispy Kerala style banana chips fried in fresh oil.', image: IMAGES.bananaChips, popular: true },
  { id: '2', name: 'Chili Chips', price: 360, unit: 'kg', category: 'Chips', description: 'Spicy potato chips dusted with our special red chili masala.', image: IMAGES.spicyChips, popular: true },
  { id: '3', name: 'Chips (Plain)', price: 360, unit: 'kg', category: 'Chips', description: 'Classic salted potato chips, thin and crunchy.', image: IMAGES.plainChips },
  { id: '4', name: 'Lays Style Chips', price: 360, unit: 'kg', category: 'Chips', description: 'Thin sliced, ridged chips with a savory tomato tang.', image: IMAGES.plainChips },

  // Snacks/Namkeen
  { id: '5', name: 'Chakodi', price: 240, unit: 'kg', category: 'Snacks', description: 'Traditional ring-shaped crunchy snack made from rice flour.', image: IMAGES.murukku, popular: true },
  { id: '6', name: 'Nuvvulu Chakodi', price: 240, unit: 'kg', category: 'Snacks', description: 'Crunchy chakodi enriched with sesame seeds.', image: IMAGES.murukku },
  { id: '7', name: 'Papu Chakodi', price: 240, unit: 'kg', category: 'Snacks', description: 'Dal-based chakodi for an extra protein crunch.', image: IMAGES.murukku },
  { id: '8', name: 'Bundhi', price: 240, unit: 'kg', category: 'Snacks', description: 'Spicy gram flour droplets, perfect for mixing or snacking.', image: IMAGES.mixture },
  { id: '9', name: 'Dhallmudi', price: 240, unit: 'kg', category: 'Snacks', description: 'A savory mixture of fried lentils and spices.', image: IMAGES.mixture },
  { id: '10', name: 'Ballem Gavalu', price: 240, unit: 'kg', category: 'Snacks', description: 'Shell-shaped flour snacks, crispy and savory.', image: IMAGES.sweetShells },
  { id: '11', name: 'Godhuma Gavalu', price: 240, unit: 'kg', category: 'Snacks', description: 'Wheat flour shell snacks, a healthier crispy option.', image: IMAGES.sweetShells },
  { id: '12', name: 'Garlic Mixture', price: 240, unit: 'kg', category: 'Snacks', description: 'Spicy mixture with a strong punch of fried garlic.', image: IMAGES.mixture, popular: true },
  { id: '13', name: 'Palli Pakodi', price: 240, unit: 'kg', category: 'Snacks', description: 'Crunchy peanut fritters coated in chickpea flour.', image: IMAGES.peanuts },
  { id: '14', name: 'Batani', price: 200, unit: 'kg', category: 'Snacks', description: 'Fried green peas salted and spiced.', image: IMAGES.peas },
  { id: '15', name: 'Chitti Chakkaralu', price: 200, unit: 'kg', category: 'Snacks', description: 'Tiny spiral murukku, easy to munch on.', image: IMAGES.murukku },
  { id: '24', name: 'Arisalu', price: 250, unit: 'kg', category: 'Snacks', description: 'Traditional rice flour snack, crispy and delicious. Also available at ₹10 per piece.', image: IMAGES.arisalu, popular: true },

  // Packets/Small Items
  { id: '16', name: 'Bundhi Chakka', price: 50, unit: 'packet', category: 'Special', description: 'Crispy disks with boondi mix.', image: IMAGES.nippattu },
  { id: '17', name: 'Papu Chakka', price: 50, unit: 'packet', category: 'Special', description: 'Rice crackers with lentils.', image: IMAGES.nippattu },
  { id: '18', name: 'Nuvvullu Packet', price: 50, unit: 'packet', category: 'Special', description: 'Sesame seed snack packet.', image: IMAGES.laddu },
  { id: '19', name: 'Chakala Packet', price: 50, unit: 'packet', category: 'Special', description: 'Traditional savory snack packet.', image: IMAGES.murukku },
  { id: '20', name: 'Gulabhi Packet', price: 50, unit: 'packet', category: 'Sweets', description: 'Rose cookies (Achappam), sweet and crispy.', image: IMAGES.cookies },
  { id: '21', name: 'Vamposa', price: 50, unit: 'packet', category: 'Snacks', description: 'Sev-like snack with ajwain flavor.', image: IMAGES.mixture },

  // Sweets
  { id: '22', name: 'Sunundalu', price: 70, unit: 'box', category: 'Sweets', description: 'Urad dal and jaggery laddu (Box).', image: IMAGES.laddu },
  { id: '23', name: 'Pappu Undalu', price: 50, unit: 'packet', category: 'Sweets', description: 'Sweet lentil balls.', image: IMAGES.laddu },
  { id: '25', name: 'Dry Fruit Laddu', price: 650, unit: 'kg', category: 'Sweets', description: 'Premium laddu made with almonds, cashews, dates, and dry fruits. Pure ghee and jaggery.', image: IMAGES.dryFruitLaddu, popular: true },
];

// 360 Clean Partner Products (available at A K Hot Chips)
// 60ml Sachet - ₹10 each
export const PARTNER_PRODUCTS: Product[] = [
  { id: 'p1', name: '360 Clean Floor Cleaner (60ml)', price: 10, unit: 'sachet', category: 'Partner', description: 'Exotic Floral floor cleaner. Kills 99.9% bacteria. Bio Cristales formula.', image: IMAGES.floorCleaner, popular: true },
  { id: 'p2', name: '360 Clean Dish Wash (60ml)', price: 10, unit: 'sachet', category: 'Partner', description: 'Strong Lemon Formula dish wash. Kills 99.9% bacteria. Bio Cristales.', image: IMAGES.dishWash, popular: true },
  { id: 'p3', name: '360 Clean Liquid Detergent (60ml)', price: 10, unit: 'sachet', category: 'Partner', description: 'Pro Clean Formula with Advanced Colour Protection. Bio Cristales technology.', image: IMAGES.detergent, popular: true },
];

// 360 Clean Partner Info
export const PARTNER_360CLEAN = {
  name: '360 Clean',
  tagline: 'Golden Standards of Cleaning',
  website: 'https://360clean.co.in/',
  instagram: 'https://www.instagram.com/v_360clean/',
  youtube: 'https://www.youtube.com/@360clean',
  phone: '+91 91009 40494',
  whatsapp: '919100940494',
  description: 'Premium cleaning products by 360 Clean. Bio Cristales technology that kills 99.9% bacteria. Available at A K Hot Chips.'
};
