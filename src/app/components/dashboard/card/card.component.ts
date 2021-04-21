import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Output() closeIconlickedEvent = new EventEmitter<any>()
  @Output() addTaskClickEvent = new EventEmitter<any>()
  @Input() userId = null
  // header content of card //
  @Input() header = ''
  // bode of card //
  @Input() content: any = ''
  ngOnInit(): void {
  }
  //On close icon clicked //
  closeIconClickedFn() {
    this.closeIconlickedEvent.next({ userId: this.userId })
  }
  //On click  add task button //
  addTaskFn() {
    this.addTaskClickEvent.next({ userId: this.userId })
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
