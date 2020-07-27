import { UserEffects } from 'src/app/store/user.effects';
import { UserService } from 'src/app/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { UsersListComponent } from './component/users-list/users-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './store/user.reducers';
import { CreateUserComponent } from './component/create-user/create-user.component';

@NgModule({
  declarations: [
    UsersListComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: [UserService],
  bootstrap: [],
  exports: [UsersListComponent, CreateUserComponent]
})
export class UserModule { }