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
  },
  {
    path: 'ad',
    loadComponent: () =>
      import('./pages/active-directory/active-directory').then(m => m.ActiveDirectory)
  },
  {
    path: 'useful-stuff',
    loadComponent: () =>
      import('./pages/useful-stuff/useful-stuff').then(m => m.UsefulStuffComponent)
  },
  {
    path: 'password-cracking',
    loadComponent: () =>
      import('./pages/password-cracking/password-cracking').then(m => m.PasswordCrackingComponent)
  },
  {
    path: 'tool-cheatsheet',
    loadComponent: () =>
      import('./pages/tool-cheatsheet/tool-cheatsheet').then(m => m.ToolCheatsheetComponent)
  }
];