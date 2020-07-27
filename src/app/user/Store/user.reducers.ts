import { User } from 'src/app/user/user.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { userActionTypes, usersLoaded } from './user.actions';

export interface UserState extends EntityState<User> {
  usersLoaded: boolean;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState = adapter.getInitialState({
  usersLoaded: false
});

export const courseReducer = createReducer(
  initialState,

  on(userActionTypes.usersLoaded, (state, action) => {
    return adapter.addAll(
      action.users,
      {...state, usersLoaded: true}
    );
  }),

  on(userActionTypes.createUser, (state, action) => {
    return adapter.addOne(action.user, state);
  }),

  on(userActionTypes.deleteUser, (state, action) => {
    return adapter.removeOne(action.userId, state);
  }),

  on(userActionTypes.updateUser, (state, action) => {
    return adapter.updateOne(action.update, state);
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();