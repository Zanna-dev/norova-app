import { InventoryStatus, ProductCategory } from './catalog.models';

export type FilterSortOrder = 'featured' | 'price-asc' | 'price-desc' | 'rating-desc';

export interface FilterFormValue {
  searchText: string;
  categories: ProductCategory[];
  minPrice: number | null;
  maxPrice: number | null;
  sortOrder: FilterSortOrder;
  inventoryStatus: InventoryStatus | 'all';
}
