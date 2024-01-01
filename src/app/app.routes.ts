import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    title: 'Home',
    loadChildren: () => import('./modules/portfolio/portfolio.module').then(m => m.PortfolioModule),
  },
  {
    path: '**',
    redirectTo: '',
  }
];
