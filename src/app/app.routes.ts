import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('home').then((m) => m.HomeComponent),
  },
  {
    path: 'users',
    loadComponent: () => import('users').then((m) => m.UsersComponent),
  },
];
