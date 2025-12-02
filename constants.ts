import { Item, Tier } from './types';

export const PROMO_ITEM: Item = {
  id: 'promo-1',
  title: 'Elite Circle Meetup',
  subtitle: 'Grand Hyatt • Bolgatty Island',
  imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop', // Elegant event vibe
  tier: Tier.PRIME,
  price: '₹5,000 Entry',
  category: 'Events',
  clicks: 842,
  isBestReviewed: true,
  isPromo: true,
  eventDate: 'Oct 28th, 8:00 PM',
  location: 'Grand Hyatt Bolgatty, Kochi',
  highlights: ['Celebrity Guest', 'Gala Dinner', 'Live Jazz Band', 'Cocktail Bar'],
  fullDescription: 'Join the city’s elite for the exclusive Elite Circle Meetup at Grand Hyatt Bolgatty. This seasonal gala features a curated 7-course dinner, premium beverages, and live entertainment overlooking the backwaters.'
};

export const LIFESTYLE_IMAGES = [
  'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=600&auto=format&fit=crop', // Stylish crowd
  'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=600&auto=format&fit=crop', // Toast
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop', // Rooftop vibe
  'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=600&auto=format&fit=crop', // Fashion/Bag
  'https://images.unsplash.com/photo-1519671482502-9759101d4561?q=80&w=600&auto=format&fit=crop', // Luxury dining
  'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=600&auto=format&fit=crop', // Interiors
];

export const MOCK_ITEMS: Item[] = [
  // --- Dining (Restaurants and Cafés) ---
  {
    id: 'd1',
    title: 'Colony Clubhouse & Grill',
    subtitle: 'Rooftop • Grand Hyatt',
    imageUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop', // Rooftop grill interior
    tier: Tier.PRIME,
    price: '₹3,500 / person',
    category: 'Dining',
    clicks: 428,
    isBestReviewed: true,
    location: 'Grand Hyatt Bolgatty, Kochi',
    highlights: ['Rooftop View', 'Premium Steaks', 'Sunset Cocktails'],
    fullDescription: 'Experience the pinnacle of rooftop dining in Kochi. Colony Clubhouse & Grill offers a sophisticated grill menu featuring the finest cuts and fresh local seafood, paired with panoramic views of the city and backwaters.'
  },
  {
    id: 'd2',
    title: 'The Rice Boat',
    subtitle: 'Seafood • Taj Malabar',
    imageUrl: 'https://cdn.sanity.io/images/ocl5w36p/prod5/08e4d84942bf739eb02d6d59b3d662d613755f57-1280x1760.webp?w=380', // Boat interior
    tier: Tier.FEATURED,
    price: '₹2,800 / person',
    category: 'Dining',
    clicks: 356,
    isBestReviewed: true,
    location: 'Taj Malabar Resort, Willingdon Island',
    highlights: ['Heritage Setting', 'Authentic Kerala', 'Backwater View'],
    fullDescription: 'Dining on a stationary kettuvallam (rice boat) with views of the harbour. The Rice Boat is Taj Malabar’s tribute to Kerala’s backwaters, serving authentic local cuisine and fresh catches of the day.'
  },
  {
    id: 'd3',
    title: 'Kashi Art Café',
    subtitle: 'Heritage • Fort Kochi',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop', // Cafe interior
    tier: Tier.CURATED,
    price: '₹800 / person',
    category: 'Dining',
    clicks: 892,
    isBestReviewed: false,
    location: 'Burgher Street, Fort Kochi',
    highlights: ['Art Gallery', 'Specialty Coffee', 'Heritage Courtyard'],
    fullDescription: 'A cultural hub in Fort Kochi, Kashi Art Café combines a contemporary art gallery with a relaxed café set in a restored heritage bungalow courtyard. Famous for its chocolate cake and calming vibe.'
  },
  {
    id: 'd4',
    title: 'Ginger House',
    subtitle: 'Waterfront • Mattancherry',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop', // Restaurant interior
    tier: Tier.FEATURED,
    price: '₹1,500 / person',
    category: 'Dining',
    clicks: 215,
    isBestReviewed: false,
    location: 'Jew Town, Mattancherry',
    highlights: ['Museum Restaurant', 'Waterfront Deck', 'Kerala Cuisine'],
    fullDescription: 'India’s only museum restaurant. Ginger House offers a unique dining experience amidst antique furniture and sculptures, with a deck opening directly onto the backwaters.'
  },

  // --- Beauty (Premium salons and wellness) ---
  {
    id: 'b1',
    title: 'Vurve Signature Salon',
    subtitle: 'Styling • MG Road',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop', // Salon interior
    tier: Tier.PRIME,
    price: '₹2,500 Cut',
    category: 'Beauty',
    clicks: 534,
    isBestReviewed: true,
    location: 'MG Road, Kochi',
    highlights: ['Celebrity Stylists', 'Kerastase Rituals', 'Bridal Makeup'],
    fullDescription: 'Vurve Signature Salon brings international styling standards to Kochi. Known for their expert colorists and premium hair rituals, it is the go-to destination for a complete makeover.'
  },
  {
    id: 'b2',
    title: 'Quan Spa',
    subtitle: 'Rejuvenation • Kochi Marriott',
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop', // Spa interior
    tier: Tier.PRIME,
    price: '₹4,500+',
    category: 'Beauty',
    clicks: 289,
    isBestReviewed: true,
    location: 'Kochi Marriott, Edappally',
    highlights: ['Ayurveda', 'Hydrotherapy', 'Couples Suite'],
    fullDescription: 'Escape to a world of tranquility at Quan Spa. Offering a blend of modern hydrotherapy and traditional Ayurvedic treatments, it is designed to restore balance and energy.'
  },
  {
    id: 'b3',
    title: 'Toni & Guy',
    subtitle: 'Global Brand • Edappally',
    imageUrl: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1000&auto=format&fit=crop', // Salon interior
    tier: Tier.FEATURED,
    price: '₹1,800 Cut',
    category: 'Beauty',
    clicks: 412,
    isBestReviewed: false,
    location: 'Lulu Mall / Edappally',
    highlights: ['Trend Cuts', 'Hair Spa', 'Professional Color'],
    fullDescription: 'The world-renowned hairdressing brand in Kochi. Toni & Guy offers cutting-edge styles and professional hair care services in a sleek, modern environment.'
  },

  // --- Fashion (Boutiques and designers) ---
  {
    id: 'f1',
    title: 'Salt Studio',
    subtitle: 'Designer Wear • Panampilly',
    imageUrl: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=1000&auto=format&fit=crop', // Boutique interior
    tier: Tier.PRIME,
    price: '₹15,000+',
    category: 'Fashion',
    clicks: 621,
    isBestReviewed: true,
    location: 'Panampilly Nagar, Kochi',
    highlights: ['Bespoke', 'Hand Embroidery', 'Contemporary Ethnic'],
    fullDescription: 'Salt Studio is a haven for contemporary ethnic wear. Known for their subtle elegance, hand embroidery, and fluid drapes, they offer ready-to-wear and bespoke bridal solutions.'
  },
  {
    id: 'f2',
    title: 'Collage Shop',
    subtitle: 'Multi-Designer • Panampilly',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop', // Fashion store interior
    tier: Tier.CURATED,
    price: 'Varies',
    category: 'Fashion',
    clicks: 184,
    isBestReviewed: false,
    location: 'Panampilly Nagar, Kochi',
    highlights: ['Top Designers', 'Curated Collections', 'Accessories'],
    fullDescription: 'A curated multi-designer store featuring collections from India’s leading fashion houses. From casual chic to festive glamour, Collage Shop brings the runway to Kochi.'
  },
  {
    id: 'f3',
    title: 'Milan Design',
    subtitle: 'Bridal • MG Road',
    imageUrl: 'https://images.unsplash.com/photo-1550614000-4b9519e02d48?q=80&w=1000&auto=format&fit=crop', // Fabric store interior
    tier: Tier.FEATURED,
    price: 'Custom',
    category: 'Fashion',
    clicks: 476,
    isBestReviewed: false,
    location: 'MG Road, Kochi',
    highlights: ['Fabric Library', 'Bridal Lehengas', 'Custom Stitching'],
    fullDescription: 'A landmark for bridal fashion in Kochi. Milan Design offers floors of exclusive fabrics, sarees, and lehengas, catering to the bride who wants something truly unique.'
  },


  // --- Stays (Hotels and boutique stays) ---
  {
    id: 's1',
    title: 'Grand Hyatt Bolgatty',
    subtitle: 'Urban Resort • Bolgatty',
    imageUrl: 'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=1000&auto=format&fit=crop', // Hotel pool/interior
    tier: Tier.PRIME,
    price: '₹18,000 Night',
    category: 'Stays',
    clicks: 945,
    isBestReviewed: true,
    location: 'Bolgatty Island, Kochi',
    highlights: ['Waterfront View', 'Convention Centre', 'Luxury Suites'],
    fullDescription: 'A waterfront urban resort on Bolgatty Island. Grand Hyatt Kochi offers breathtaking views of the backwaters, world-class dining, and lavish rooms for the ultimate staycation.'
  },
  {
    id: 's2',
    title: 'Niraamaya Retreats',
    subtitle: 'Backwaters • Kumarakom',
    imageUrl: 'https://images.unsplash.com/photo-1561049933-c8fbef49b31a?q=80&w=1000&auto=format&fit=crop', // Resort villa
    tier: Tier.FEATURED,
    price: '₹22,000 Night',
    category: 'Stays',
    clicks: 231,
    isBestReviewed: false,
    location: 'Kumarakom (Near Kochi)',
    highlights: ['Private Villas', 'Ayurveda', 'Lake View'],
    fullDescription: 'A short drive from Kochi, Niraamaya Retreats Backwaters is a sanctuary of wellness. Stay in private villas and indulge in world-class spa treatments by the serene Vembanad Lake.'
  },

  // --- Clinics (Skin and aesthetic care) ---
  {
    id: 'c1',
    title: 'La Grace Clinic',
    subtitle: 'Aesthetics • Panampilly',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop', // Modern clinic interior
    tier: Tier.PRIME,
    price: 'Consultation',
    category: 'Clinics',
    clicks: 156,
    isBestReviewed: true,
    location: 'Panampilly Nagar, Kochi',
    highlights: ['Laser Treatments', 'Dermatology', 'Anti-Aging'],
    fullDescription: 'A premium destination for aesthetic medicine in Kochi. La Grace offers advanced skin treatments, laser therapies, and cosmetic dermatology in a discreet and luxurious setting.'
  },

  // --- Lifestyle (Home, Gyms, Living) ---
  {
    id: 'ls1',
    title: 'Good Earth',
    subtitle: 'Sustainable Decor • Fort Kochi',
    imageUrl: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1000&auto=format&fit=crop', // Home decor store
    tier: Tier.PRIME,
    price: 'Premium',
    category: 'Lifestyle',
    clicks: 342,
    isBestReviewed: true,
    location: 'Fort Kochi',
    highlights: ['Sustainable', 'Handcrafted', 'Luxury Decor'],
    fullDescription: 'Good Earth celebrates the heritage of India through sustainable luxury. Their Fort Kochi boutique offers exquisite home décor, apparel, and dining sets crafted with traditional techniques.'
  },
  {
    id: 'ls2',
    title: 'Drench Fitness',
    subtitle: 'Premium Gym • Panampilly',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop', // Gym interior
    tier: Tier.FEATURED,
    price: '₹4,000 / month',
    category: 'Lifestyle',
    clicks: 267,
    isBestReviewed: false,
    location: 'Panampilly Nagar, Kochi',
    highlights: ['Personal Training', 'Modern Equipment', 'Nutrition Bar'],
    fullDescription: 'Kochi’s premier fitness destination. Drench Fitness offers state-of-the-art equipment, certified personal trainers, and a motivating luxury environment for serious fitness enthusiasts.'
  },
  {
    id: 'ls3',
    title: 'Simply My Style',
    subtitle: 'Boutique Decor • Panampilly',
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop', // Interior shop
    tier: Tier.CURATED,
    price: 'Varies',
    category: 'Lifestyle',
    clicks: 145,
    isBestReviewed: false,
    location: 'Panampilly Nagar, Kochi',
    highlights: ['Curated Decor', 'Gifting', 'Interior Styling'],
    fullDescription: 'A charming boutique in Panampilly Nagar offering a lovely collection of home accessories, curated gifts, and styling pieces to elevate your living space.'
  },

// --- Jewellery (Gold and diamond stores) ---
  {
    id: 'j1',
    title: 'Sunny Diamonds',
    subtitle: 'Internally Flawless • MG Road',
    imageUrl: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000&auto=format&fit=crop', // Jewellery store interior
    tier: Tier.PRIME,
    price: '₹50,000+',
    category: 'Jewellery',
    clicks: 689,
    isBestReviewed: true,
    location: 'MG Road, Kochi',
    highlights: ['Belgium Cut', 'Solitaires', 'Insurance Included'],
    fullDescription: 'Kochi’s most trusted name for internally flawless diamonds. Sunny Diamonds offers an exquisite collection of Belgium-cut solitaires and handcrafted diamond jewellery.'
  },
  {
    id: 'j2',
    title: 'Bhima Jewellery',
    subtitle: 'Heritage • Edappally',
    imageUrl: 'https://images.unsplash.com/photo-1617038224558-28809c884eed?q=80&w=1000&auto=format&fit=crop', // Gold jewellery store
    tier: Tier.FEATURED,
    price: 'Market Rate',
    category: 'Jewellery',
    clicks: 512,
    isBestReviewed: false,
    location: 'Edappally, Kochi',
    highlights: ['Traditional Designs', 'Gold Coins', 'Bridal Sets'],
    fullDescription: 'Since 1925, Bhima has been synonymous with trust and purity. Their Edappally showroom features sprawling collections of traditional Kerala designs, antique jewelry, and modern gold artistry.'
  },
  {
    id: 'j3',
    title: 'Malabar Gold & Diamonds',
    subtitle: 'Artistry • MG Road',
    imageUrl: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1000&auto=format&fit=crop', // Jewellery showroom
    tier: Tier.FEATURED,
    price: 'Market Rate',
    category: 'Jewellery',
    clicks: 489,
    isBestReviewed: false,
    location: 'MG Road, Kochi',
    highlights: ['Mine Diamonds', 'Era Uncut', 'Precia Gemstones'],
    fullDescription: 'One of the world’s largest jewellery retailers. The MG Road flagship store showcases an immense range of gold, diamond, and platinum jewellery, including their signature sub-brands.'
  },
  
  // --- Events (Experiences and Workshops) ---
  {
    id: 'e1',
    title: 'Kochi-Muziris Biennale',
    subtitle: 'Art Exhibition • Fort Kochi',
    imageUrl: 'https://images.unsplash.com/photo-1518998053901-5348d3969105?q=80&w=1000&auto=format&fit=crop', // Art installation
    tier: Tier.PRIME,
    price: '₹150 Entry',
    category: 'Events',
    clicks: 980,
    isBestReviewed: true,
    location: 'Aspinwall House, Fort Kochi',
    highlights: ['Contemporary Art', 'Global Artists', 'Workshops'],
    fullDescription: 'India’s largest contemporary art exhibition. The Kochi-Muziris Biennale transforms Fort Kochi into a living canvas, featuring installations and works from artists around the globe.',
    eventDate: 'Dec 12 - Mar 20'
  },
  {
    id: 'e2',
    title: 'The Cochin Club',
    subtitle: 'Social Club • Fort Kochi',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop', // Club interior
    tier: Tier.PRIME,
    price: 'Membership',
    category: 'Events',
    clicks: 745,
    isBestReviewed: true,
    location: 'St. Francis Church Road, Fort Kochi',
    highlights: ['Private Beach', 'Colonial Library', 'Tennis Courts'],
    fullDescription: 'One of the oldest clubs in the country, The Cochin Club offers an exclusive sanctuary for members. Steeped in colonial history, it features a private library, sports facilities, and refined social spaces.',
    eventDate: 'Members Only'
  },
  {
    id: 'e3',
    title: 'Cochin Yacht Club',
    subtitle: 'Sailing • Konthuruthy',
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop', // Yacht event
    tier: Tier.FEATURED,
    price: 'Members / Guests',
    category: 'Events',
    clicks: 167,
    isBestReviewed: false,
    location: 'Konthuruthy, Thevara',
    highlights: ['Sailing Classes', 'Regattas', 'River View'],
    fullDescription: 'Promoting the sport of sailing in Kochi. The Cochin Yacht Club organizes regular regattas and sailing classes, offering a unique recreational experience on the backwaters.',
    eventDate: 'Weekends'
  }
];