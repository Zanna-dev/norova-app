import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { mockProducts } from '../data/mock-products';
import { Product } from '../models/catalog.models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly productsSignal = signal<Product[]>(mockProducts);
  private readonly productsSubject = new BehaviorSubject<Product[]>(mockProducts);

  public readonly products = this.productsSignal.asReadonly();
  public readonly products$: Observable<Product[]> = this.productsSubject.asObservable();

  public getProducts(): Product[] {
    return this.productsSignal();
  }

  public getProductById(productId: string): Product | undefined {
    return this.productsSignal().find((product) => product.id === productId);
  }
}
