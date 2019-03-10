import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {


  events: Event[];
  infoForWind: Event;
  isOpen:boolean = false;
  subj: string = "date";
  order: boolean = true;
  add: boolean = false;


  constructor(private eventService: EventService) { }

  getEvents(): void {
    this.events = this.eventService.getEvents();
  }

  ngOnInit() {
    this.getEvents();
  }
  
  onSelect(event: Event): void {
    this.infoForWind = event;
    this.toggle();
  }

  toggle(): void {
    this.isOpen =! this.isOpen;
  }

  closeEvent(isClosed: boolean): void{
    this.isOpen = isClosed;
  }

  addNewEvent(event: Event): void {
    this.events.push(event);
  }

  deleteEvent(event: Event): void{
    this.events.splice(this.events.indexOf(event),1)
    this.toggle();
  }

  sort(subj: string): void{
    this.subj = subj;
    this.order ? this.order = false : this.order = true;
  }

  addEvent(): void{
    this.add =! this.add;
  }

  closeAddWind(isClosed: boolean): void {
    this.add = isClosed;
  }
}
