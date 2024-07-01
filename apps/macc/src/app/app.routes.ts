import { Routes } from '@angular/router';
import { AuthGuard } from '@macc/macc/utils';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@macc/macc/ui/layout').then((m) => m.MaccUiLayoutComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('@macc/macc/features/dashboard').then(
            (m) => m.MaccFeaturesDashboardComponent
          ),
        canActivate: [AuthGuard],
      },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('@macc/macc/features/authentication').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('@macc/macc/features/authentication').then(
        (m) => m.SignupComponent
      ),
  },
  {
    path: 'error',
    loadComponent: () =>
      import('@macc/macc/features/authentication').then(
        (m) => m.ErrorComponent
      ),
  },
  {
    path: 'access-denied',
    loadComponent: () =>
      import('@macc/macc/features/authentication').then(
        (m) => m.AccessDeniedComponent
      ),
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('@macc/macc/features/authentication').then(
        (m) => m.NotFoundComponent
      ),
  },
  { path: '**', redirectTo: 'not-found' },
];
