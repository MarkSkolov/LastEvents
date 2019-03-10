import { Injectable } from '@angular/core';
import { Event } from './event';
import { MockEvent } from './mock-event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getEvents(): Event[] {
    return MockEvent;
  }

}
