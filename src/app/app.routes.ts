import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/shop-catalog/shop-catalog.component').then((m) => m.ShopCatalogComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
