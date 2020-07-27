import { User } from './../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class UserService {

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }

  createUser(course: Course): Observable<Course> {
    return this.http.post<Course>('/api/users', user);
  }

  deleteUser(courseId: string): Observable<any> {
    return this.http.delete('/api/users/' + courseId);
  }

  updateUser(courseId: string | number, changes: Partial<User>): Observable<any> {
    return this.http.put('/api/users/' + userId, changes);
  }
}