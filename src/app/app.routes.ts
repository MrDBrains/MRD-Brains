import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/notFound/not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home.page').then(m => m.HomePageComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about.page').then(m => m.AboutPageComponent),
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services.page').then(m => m.ServicesPageComponent),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products.page').then(m => m.ProductsPageComponent),
  },
  {
    path: 'work',
    loadComponent: () =>
      import('./pages/work.page').then(m => m.WorkPageComponent),
  },
  {
    path: 'process',
    loadComponent: () =>
      import('./pages/process.page').then(m => m.ProcessPageComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact.page').then(m => m.ContactPageComponent),
  },
  {
    path: 'privacy',
    loadComponent: () =>
      import('./pages/privacy.page').then(m => m.PrivacyPageComponent),
  },
  {
    path: 'terms',
    loadComponent: () =>
      import('./pages/terms.page').then(m => m.TermsPageComponent),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];