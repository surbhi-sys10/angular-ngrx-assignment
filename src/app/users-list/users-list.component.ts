import { getAllUsers } from './../../store/user.selectors';
import { userActionTypes } from './../../store/user.actions';
import { AppState } from './../../../store/reducers/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './../../model/user.model';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html'
})
export class ListComponent implements OnInit {

  users$: Observable<Users[]>;

  userToBeUpdated: User;

  isUpdateActivated = false;

  constructor(private userService: UserService, private store: Store<AppState>) { }

  ngOnInit() {
    this.users$ = this.store.select(getAllCourses);
  }

  deleteCourse(courseId: string) {
    this.store.dispatch(userActionTypes.deleteUser({userId}));
  }

  showUpdateForm(user: User) {
    this.userToBeUpdated = {...user};
    this.isUpdateActivated = true;
  }

  updateUser(updateForm) {
    const update: Update<User> = {
      id: this.userToBeUpdated.id,
      changes: {
        ...this.userToBeUpdated,
        ...updateForm.value
      }
    };

    this.store.dispatch(userActionTypes.updateUser({update}));

    this.isUpdateActivated = false;
    this.userToBeUpdated = null;
  }
}