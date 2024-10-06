import { createReducer, on } from '@ngrx/store';
import {
  addUser,
  addUserFailure,
  addUserSuccess,
  loadUsers,
  loadUsersFailure,
  loadUsersSuccess,
} from './users.actions';
import { UserModel } from '../../../shared/models/user.model';

export interface UsersState {
  currentUser: UserModel;
  users: UserModel[];
  error: string | null;
}

export const initialState: UsersState = {
  currentUser: new UserModel(),
  users: [],
  error: '',
};

export const usersReducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({ ...state })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    error: '',
  })),
  on(loadUsersFailure, (state, { error }) => ({ ...state, error })),
  on(addUser, (state) => ({ ...state })),
  on(addUserSuccess, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
    error: '',
  })),
  on(addUserFailure, (state, { error }) => ({ ...state, error })),
);
