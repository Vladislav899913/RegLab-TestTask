import { createAction, props } from '@ngrx/store';
import { UserModel } from '../../shared/models/user.model';

export const login = createAction(
  '[Auth] Login',
  props<{ username: string; password: string }>(),
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: UserModel }>(),
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>(),
);

export const logout = createAction('[Auth] Logout');

export const logoutSuccess = createAction('[Auth] Logout Success');

export const logoutFailure = createAction(
  '[Auth] Logout Failure',
  props<{ error: string }>(),
);
