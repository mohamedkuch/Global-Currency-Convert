import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'currency-converter',
    pathMatch: 'full',
  },
  {
    path: 'currency-converter',
    loadComponent: () => import('./currency-converter/currency-converter.page').then( m => m.CurrencyConverterPage)
  },
];
