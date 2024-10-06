import { createReducer, on } from '@ngrx/store';
import {
  login,
  loginSuccess,
  loginFailure,
  logout,
  logoutSuccess,
  logoutFailure,
} from './auth.actions';
import { UserModel } from '../../shared/models/user.model';

export interface AuthState {
  isAuthenticated: boolean;
  user: UserModel;
  error: string;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: new UserModel(),
  error: '',
};

export const authReducer = createReducer(
  initialState,
  on(login, (state) => ({ ...state, error: '' })),
  on(loginSuccess, (state, { user }) => ({
    ...state,
    isAuthenticated: true,
    user,
    error: '',
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    isAuthenticated: false,
    user: new UserModel(),
    error,
  })),
  on(logout, (state) => ({
    ...state,
    error: '',
  })),
  on(logoutSuccess, (state) => ({
    ...state,
    isAuthenticated: false,
    user: new UserModel(),
    error: '',
  })),
  on(logoutFailure, (state, { error }) => ({
    ...state,
    isAuthenticated: true,
    error,
  })),
);
