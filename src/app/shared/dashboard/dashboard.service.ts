import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import * as requestUrl from '../../shared/request-url'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private readonly http: HttpService) { }

  // to get users lists /
  getUsersList() {
    return this.http.get<any>(requestUrl.Users.LIST)
  }

  // to add new user /
  addUser(obj) {
    return this.http.post<any>(requestUrl.Users.ADD, obj)
  }

  // to delete user /
  deleteUser(obj) {
    return this.http.delete<any>(requestUrl.Users.DELETE + '/' + obj.userId)
  }

  //add task to user//
  addTask(obj, userId) {
    return this.http.post<any>(requestUrl.Users.ADD_TASK + '/' + userId, obj)
  }
}
