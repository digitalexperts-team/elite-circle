export enum Tier {
  PRIME = 'PRIME',
  FEATURED = 'FEATURED',
  CURATED = 'CURATED',
}

export interface Item {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  tier: Tier;
  price?: string;
  category: string;
  clicks?: number;
  isBestReviewed?: boolean;
  isPromo?: boolean;
  eventDate?: string;
  location?: string;
  highlights?: string[];
  fullDescription?: string;
}

export interface CardProps {
  item: Item;
  onClick: (item: Item) => void;
  index: number; // For staggered animation delay
}