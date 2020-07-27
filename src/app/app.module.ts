import { CreateUserComponent } from './user/component/create-user/create-user.component';
import { userResolver } from './user/user.resolver';
import { UsersListComponent } from './user/component/users-list/users-list.component';
import { EffectsModule } from '@ngrx/effects';
import { UserModule } from './user/user.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const routes = [
  {
    path: 'users',
    component: UsersListComponent,
    resolve: {
      courses: UserResolver
    }
  },
  {path: 'create-user', component: CreateUserComponent},
  {path: '**', redirectTo: 'users'}
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({maxAge: 25}),
  ],
  providers: [UserResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
