import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  login,
  loginSuccess,
  loginFailure,
  logout,
  logoutSuccess,
  logoutFailure,
} from './auth.actions';
import { UserModel } from '../../shared/models/user.model';
import { AuthService } from '../../components/auth/services/auth.service';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);

  constructor(private authService: AuthService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap((action) =>
        this.authService.login(action.username, action.password).pipe(
          map((user: UserModel) => loginSuccess({ user })),
          catchError(() =>
            of(loginFailure({ error: 'Invalid username or password' })),
          ),
        ),
      ),
    ),
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      mergeMap(() =>
        this.authService.logout().pipe(
          map(() => logoutSuccess()),
          catchError(() => of(logoutFailure({ error: 'Failed to logout' }))),
        ),
      ),
    ),
  );
}
