import { Injectable, computed, signal } from '@angular/core';

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly cartSignal = signal<CartItem[]>([]);

  public readonly cart = this.cartSignal.asReadonly();

  public readonly itemCount = computed(() => this.cartSignal().reduce((sum, item) => sum + item.quantity, 0));

  public readonly totalPrice = computed(() =>
    this.cartSignal().reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  public addToCart(productId: string, name: string, price: number): void {
    this.cartSignal.update((items) => {
      const existingItem = items.find((item) => item.productId === productId);

      if (existingItem) {
        return items.map((item) =>
          item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...items, { productId, name, price, quantity: 1 }];
    });
  }

  public removeFromCart(productId: string): void {
    this.cartSignal.update((items) => items.filter((item) => item.productId !== productId));
  }

  public updateQuantity(productId: string, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }

    this.cartSignal.update((items) =>
      items.map((item) => (item.productId === productId ? { ...item, quantity } : item))
    );
  }

  public clearCart(): void {
    this.cartSignal.set([]);
  }
}
