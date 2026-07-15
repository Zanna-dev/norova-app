import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { Product } from '../../models/catalog.models';
import { FilterFormValue } from '../../models/filter-form.models';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { ProductFiltersComponent } from '../product-filters/product-filters.component';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-shop-catalog',
  standalone: true,
  imports: [CommonModule, ProductFiltersComponent, ProductCardComponent],
  templateUrl: './shop-catalog.component.html',
  styleUrl: './shop-catalog.component.scss'
})
export class ShopCatalogComponent implements AfterViewInit {
  private readonly productService = inject(ProductService);
  private readonly cartService = inject(CartService);
  public mobileFiltersOpen = false;
  private readonly filterCriteriaSubject = new BehaviorSubject<FilterFormValue>({
    searchText: '',
    categories: [],
    minPrice: null,
    maxPrice: null,
    sortOrder: 'featured',
    inventoryStatus: 'all'
  });

  @ViewChild(ProductFiltersComponent) private readonly filtersComponent?: ProductFiltersComponent;

  public readonly products$: Observable<Product[]>;

  constructor() {
    this.products$ = combineLatest([
      this.productService.products$,
      this.filterCriteriaSubject.asObservable()
    ]).pipe(map(([products, criteria]) => this.applyFilters(products, criteria)));
  }

  public ngAfterViewInit(): void {
    this.filtersComponent?.criteria$.subscribe((criteria) => {
      this.filterCriteriaSubject.next(criteria);
    });
  }

  public addToCart(product: Product): void {
    this.cartService.addToCart(product.id, product.name, product.price);
  }

  public toggleMobileFilters(): void {
    this.mobileFiltersOpen = !this.mobileFiltersOpen;
  }

  private applyFilters(products: Product[], criteria: FilterFormValue): Product[] {
    const normalizedSearch = criteria.searchText.trim().toLowerCase();
    const selectedCategories = criteria.categories;
    const minPrice = criteria.minPrice ?? 0;
    const maxPrice = criteria.maxPrice ?? Number.POSITIVE_INFINITY;

    const filteredProducts = products.filter((product) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.description.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch);

      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(product.category);

      const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
      const matchesInventory =
        criteria.inventoryStatus === 'all' || product.inventoryStatus === criteria.inventoryStatus;

      return matchesSearch && matchesCategory && matchesPrice && matchesInventory;
    });

    return [...filteredProducts].sort((left, right) => {
      switch (criteria.sortOrder) {
        case 'price-asc':
          return left.price - right.price;
        case 'price-desc':
          return right.price - left.price;
        case 'rating-desc':
          return right.rating - left.rating;
        default:
          return 0;
      }
    });
  }
}
