import { User } from './../model/user.model';
import { createAction, props } from '@ngrx/store';
import {Update} from '@ngrx/entity';


export const loadUsers = createAction(
  '[Users List] Load Users via Service',
);

export const usersLoaded = createAction(
  '[Users Effect] Users Loaded Successfully',
  props<{Users: User[]}>()
);

export const createUser = createAction(
  '[Create User Component] Create User',
  props<{user: User}>()
);

export const deleteUser = createAction(
  '[Users List Operations] Delete User',
  props<{userId: string}>()
);

export const updateUser = createAction(
  '[Users List Operations] Update User',
  props<{update: Update<User>}>()
);

export const courseActionTypes = {
  loadUsers,
  usersLoaded,
  createUser,
  deleteUser,
  updateUser
};