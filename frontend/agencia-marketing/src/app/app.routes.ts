import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/home/home.component').then(c => c.HomeComponent) },
  { path: 'about', loadComponent: () => import('./features/about/about/about.component').then(c => c.AboutComponent) },
  { path: 'services', loadComponent: () => import('./features/services/services/services.component').then(c => c.ServicesComponent) },
  { path: 'blog', loadComponent: () => import('./features/blog/blog/blog.component').then(c => c.BlogComponent) },
  { path: 'portfolio', loadComponent: () => import('./features/portfolio/portfolio/portfolio.component').then(c => c.PortfolioComponent) },
  { path: 'testimonials', loadComponent: () => import('./features/testimonials/testimonials/testimonials.component').then(c => c.TestimonialsComponent) },
  { path: 'contact', loadComponent: () => import('./features/contact/contact/contact.component').then(c => c.ContactComponent) },
  { path: 'faq', loadComponent: () => import('./features/faq/faq/faq.component').then(c => c.FaqComponent) },
  { path: 'terms-privacy', loadComponent: () => import('./features/terms-privacy/terms-privacy/terms-privacy.component').then(c => c.TermsPrivacyComponent) },
  { path: '**', redirectTo: '', pathMatch: 'full' } // rota para redirecionar caso não encontre
];

export const appRouting = provideRouter(routes);
