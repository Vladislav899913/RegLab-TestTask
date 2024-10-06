import { Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/main/main.component').then((m) => m.MainComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/auth/login/login.component').then(
        (m) => m.LoginComponent,
      ),
  },
  {
    path: 'user',
    loadComponent: () =>
      import('./components/user/user-profile/user-profile.component').then(
        (m) => m.UserProfileComponent,
      ),
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '' },
];
