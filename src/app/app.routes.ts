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
  },
  {
    path: 'common-services',
    loadComponent: () =>
      import('./pages/common-services/common-services').then(m => m.CommonServicesComponent)
  },
    {
    path: 'web',
    loadComponent: () =>
      import('./pages/web/web').then(m => m.Web)
  },
  {
    path: 'privesc',
    loadComponent: () =>
      import('./pages/privesc/privesc').then(m => m.Privesc)
  }
];