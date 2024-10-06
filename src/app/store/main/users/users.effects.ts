import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  addUser,
  addUserFailure,
  addUserSuccess,
  loadUsers,
  loadUsersFailure,
  loadUsersSuccess,
} from './users.actions';
import { UsersService } from '../../../components/main/users/services/users.service';
import { UserModel } from '../../../shared/models/user.model';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private usersService: UsersService,
  ) {}

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() =>
        this.usersService.getUsers().pipe(
          map((users: UserModel[]) => loadUsersSuccess({ users })),
          catchError(() =>
            of(loadUsersFailure({ error: 'Failed to load users' })),
          ),
        ),
      ),
    ),
  );

  addUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addUser),
      mergeMap((action) =>
        this.usersService.addUser(action.user).pipe(
          map((user: UserModel) => addUserSuccess({ user })),
          catchError(() => of(addUserFailure({ error: 'Failed to add user' }))),
        ),
      ),
    ),
  );
}
