import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.HomeComponent)
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.HomeComponent)
  },
   {
    path: 'scan',
    loadComponent: () =>
      import('./pages/scan/scan').then(m => m.ScanComponent)
  }
];