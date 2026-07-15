import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subject, debounceTime, distinctUntilChanged, map, startWith, takeUntil } from 'rxjs';
import { ProductCategory } from '../../models/catalog.models';
import { FilterFormValue, FilterSortOrder } from '../../models/filter-form.models';

interface FilterFormGroup {
  searchText: FormControl<string>;
  categories: FormArray<FormControl<boolean>>;
  minPrice: FormControl<number | null>;
  maxPrice: FormControl<number | null>;
  sortOrder: FormControl<FilterSortOrder>;
}

@Component({
  selector: 'app-product-filters',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-filters.component.html',
  styleUrl: './product-filters.component.scss'
})
export class ProductFiltersComponent implements OnInit, OnDestroy {
  private readonly formBuilder = inject(FormBuilder);
  private readonly destroy$ = new Subject<void>();

  public readonly availableCategories: ProductCategory[] = ['Electronics', 'Apparel', 'Home', 'Accessories'];
  public readonly sortOptions: Array<{ value: FilterSortOrder; label: string }> = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating-desc', label: 'Rating: High to Low' }
  ];

  public readonly filterForm: FormGroup<FilterFormGroup>;
  public readonly criteria$: Observable<FilterFormValue>;

  constructor() {
    this.filterForm = this.formBuilder.nonNullable.group({
      searchText: this.formBuilder.nonNullable.control(''),
      categories: this.formBuilder.array<FormControl<boolean>>([]),
      minPrice: this.formBuilder.control<number | null>(null),
      maxPrice: this.formBuilder.control<number | null>(null),
      sortOrder: this.formBuilder.nonNullable.control<FilterSortOrder>('featured')
    });

    this.initializeCategoryControls();

    this.criteria$ = this.filterForm.valueChanges.pipe(
      startWith(this.getNormalizedFormValue()),
      debounceTime(300),
      distinctUntilChanged((previous, current) => JSON.stringify(previous) === JSON.stringify(current)),
      map(() => this.getNormalizedFormValue()),
      takeUntil(this.destroy$)
    );
  }

  public ngOnInit(): void {
    this.criteria$.subscribe();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public toggleCategory(index: number): void {
    const categoryControl = this.filterForm.controls.categories.at(index);

    if (categoryControl) {
      categoryControl.setValue(!categoryControl.value);
    }
  }

  public getNormalizedFormValue(): FilterFormValue {
    const rawValue = this.filterForm.getRawValue();
    const selectedCategories = this.availableCategories.filter((_, index) => {
      const categoryControl = this.filterForm.controls.categories.at(index);
      return categoryControl?.value ?? false;
    });

    return {
      searchText: rawValue.searchText?.trim() ?? '',
      categories: selectedCategories,
      minPrice: rawValue.minPrice ?? null,
      maxPrice: rawValue.maxPrice ?? null,
      sortOrder: rawValue.sortOrder ?? 'featured',
      inventoryStatus: 'all'
    };
  }

  private initializeCategoryControls(): void {
    for (const _ of this.availableCategories) {
      this.filterForm.controls.categories.push(this.formBuilder.nonNullable.control(false));
    }
  }
}
