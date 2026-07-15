export type ProductCategory = 'Electronics' | 'Apparel' | 'Home' | 'Accessories';
export type InventoryStatus = 'in-stock' | 'low-stock' | 'out-of-stock';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  rating: number;
  imageUrl: string;
  inventoryStatus: InventoryStatus;
}

export interface FilterCriteria {
  searchTerm: string;
  categories: ProductCategory[];
  maxPrice: number | null;
  minRating: number;
  inventoryStatus: InventoryStatus | 'all';
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'rating-desc';
}
