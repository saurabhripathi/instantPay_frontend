import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
// to add new task //
export class AddTaskComponent implements OnInit {
  value: string = ''
  @Input() displayAddTaskModal = 0
  @Output() cancelClickedEvent = new EventEmitter<any>()
  @Output() confirmClickedEvent = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }

  // resetting the modal on hide // 
  resetPreviewModal() {
    this.closeModalFn()
  }

  // on close the modal //
  closeModalFn() {
    this.cancelClickedEvent.next(true)
    this.value = ''

  }
  addTaskFn() {
    this.confirmClickedEvent.next({ value: this.value.trim() })
    this.closeModalFn()
  }

}
