import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/dashboard/dashboard.service';
import { concatMap } from 'rxjs/internal/operators/concatMap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // to show add user modal //
  displayAddTaskModal = 0
  // to display user list on dashboard //
  displayAddUserModal = 0

  userDetails: any = []
  userId: number;
  constructor(private readonly dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getUsersList().subscribe((data) => {
      this.userDetails = data.data
    })
  }

  // On cancel buttton click event catcher //
  cancelClickedEventCatchFn(event, type = '') {
    if (type === 'Task') {
      this.displayAddTaskModal = 0
    } else {
      this.displayAddUserModal = 0
    }

  }

  // On Confirm buttton click event catcher for add user and add task pop up //  
  confirmClickedEventCatchFn(event, type = '') {
    console.log(event)
    const obj = { name: event.value }
    if (type === "Task") {
      this.dashboardService.addTask(obj, this.userId).
        pipe(concatMap((res) => {
          return this.dashboardService.getUsersList()
        })).
        subscribe((data) => {
          this.userDetails = data.data
        })
    } else {
      this.dashboardService.addUser(obj).
        pipe(concatMap((res) => {
          return this.dashboardService.getUsersList()
        })).subscribe((data) => {
          this.userDetails = data.data
        }, (e) => {
          console.log(e)
        })
    }
  }

  // On delete user event catcher //  
  closeIconClickedEventCatchFn(event) {
    this.dashboardService.deleteUser(event).
      pipe(concatMap((res) => {
        return this.dashboardService.getUsersList()
      }))
      .subscribe((res) => {
        this.userDetails = res.data
      })
  }

  addTaskClickEventCatchFn(event) {
    this.displayAddTaskModal = 1
    this.userId = event.userId
  }
}
