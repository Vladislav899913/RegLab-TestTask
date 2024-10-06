import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => state.isAuthenticated,
);

export const selectCurrentUser = createSelector(
  selectAuthState,
  (state: AuthState) => state.user,
);

export const selectErrorMessage = createSelector(
  selectAuthState,
  (state: AuthState) => state.error,
);
