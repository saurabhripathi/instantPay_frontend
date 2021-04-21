import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DashboardService } from 'src/app/shared/dashboard/dashboard.service';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
// to add new user /
export class AddUserComponent implements OnInit {
  value: string = ''
  @Input() displayAddUserModal
  @Output() cancelClickedEvent = new EventEmitter<any>()
  @Output() confirmClickedEvent = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }

  //  resetting the modal on hide // 
  resetPreviewModal() {
    this.closeModalFn()
  }

  //  on close the modal // 
  closeModalFn() {
    this.cancelClickedEvent.next(true)
    this.value = ''

  }
  addUserFn() {
    this.confirmClickedEvent.next({ value: this.value.trim() })
    this.closeModalFn()
  }
}
