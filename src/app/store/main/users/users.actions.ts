import { createAction, props } from '@ngrx/store';
import { UserModel } from '../../../shared/models/user.model';

export const loadUsers = createAction('[Chat] Load Users');

export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{ users: UserModel[] }>(),
);

export const loadUsersFailure = createAction(
  '[Users] Load Users Failure',
  props<{ error: string }>(),
);

export const addUser = createAction(
  '[Users] Add User',
  props<{ user: UserModel }>(),
);

export const addUserSuccess = createAction(
  '[Users] Add User Success',
  props<{ user: UserModel }>(),
);

export const addUserFailure = createAction(
  '[Users] Add User Failure',
  props<{ error: string }>(),
);
