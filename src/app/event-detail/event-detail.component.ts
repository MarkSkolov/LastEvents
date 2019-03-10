import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  @Input() event: Event;
  @Input() isOpen: boolean;
  @Output() isClosed = new EventEmitter<boolean>();
  @Output() deleting = new EventEmitter<Event>();

  constructor() { }

  ngOnInit() {
  }

  readed(event: any): void {
    event.addition.readed = true;
    this.closeModal();
  }

  closeModal():void {
    this.isClosed.emit(false);
  }

  deleteEvent(event: Event): void{
    this.deleting.emit(event);
  }

}
