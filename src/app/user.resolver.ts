import { areUsersLoaded } from './store/user.selectors';
import { loadUsers, usersLoaded } from './store/user.actions';
import { AppState } from './../store/users/index';
import { User } from './model/user.model';
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store';
import {filter, finalize, first, tap} from 'rxjs/operators';

@Injectable()
export class UserResolver implements Resolve<Observable<any>> {

  constructor(private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store
    .pipe(
        select(areUsersLoaded),
        tap((usersLoaded) => {
          if (!usersLoaded) {
            this.store.dispatch(loadUsers());
          }

        }),
        filter(usersLoaded => usersLoaded),
        first()
    );
  }
}