export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  type: 'rent' | 'sale';
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  amenities: string[];
  images: string[];
  features: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
  };
}

export const properties: Property[] = [
  {
    id: 'serenity-cove',
    title: 'Serenity Cove Villas',
    description:
      'Embrace tranquility in these waterfront villas designed for ultimate relaxation. These luxurious villas offer panoramic views of the water and modern amenities for comfortable living.',
    price: 2500000,
    type: 'sale',
    location: 'Upper East Side, Manhattan',
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    amenities: [
      'Private Pool',
      'Garden',
      'Security System',
      'Smart Home Features',
      'Garage',
    ],
    images: ['/images/ny-1/16.jpg', '/images/ny-1/1.jpg', '/images/ny-1/2.jpg'],
    features: [
      'Waterfront View',
      'Modern Kitchen',
      'High Ceilings',
      'Hardwood Floors',
    ],
    agent: {
      name: 'Sarah Johnson',
      phone: '(212) 555-0123',
      email: 'sarah.j@example.com',
    },
  },
  {
    id: 'azure-oasis',
    title: 'Azure Oasis Estates',
    description:
      'Discover a sanctuary of luxury living amidst azure skies and lush landscapes. This estate offers the perfect blend of modern architecture and natural beauty.',
    price: 12000,
    type: 'rent',
    location: 'Brooklyn Heights, Brooklyn',
    bedrooms: 3,
    bathrooms: 2.5,
    area: 2800,
    amenities: [
      'Fitness Center',
      'Rooftop Terrace',
      '24/7 Concierge',
      'Pet Friendly',
    ],
    images: ['/images/ny-2/1.jpg', '/images/ny-2/2.jpg', '/images/ny-2/3.jpg'],
    features: [
      'City Views',
      'Open Floor Plan',
      'Gourmet Kitchen',
      'Walk-in Closets',
    ],
    agent: {
      name: 'Michael Chen',
      phone: '(212) 555-0456',
      email: 'michael.c@example.com',
    },
  },
  {
    id: 'radiant-horizon',
    title: 'Radiant Horizon Apartments',
    description:
      'Experience a radiant lifestyle with modern amenities and expansive horizons. These apartments offer stunning views and contemporary living spaces.',
    price: 1800000,
    type: 'sale',
    location: 'Long Island City, Queens',
    bedrooms: 2,
    bathrooms: 2,
    area: 1500,
    amenities: ['Swimming Pool', 'Gym', 'Parking', 'Storage Unit'],
    images: [
      '/images/ny-3/11.jpg',
      '/images/ny-3/12.jpg',
      '/images/ny-3/13.jpg',
    ],
    features: [
      'Floor-to-ceiling Windows',
      'Balcony',
      'Stainless Steel Appliances',
      'In-unit Laundry',
    ],
    agent: {
      name: 'Emily Rodriguez',
      phone: '(212) 555-0789',
      email: 'emily.r@example.com',
    },
  },
];
