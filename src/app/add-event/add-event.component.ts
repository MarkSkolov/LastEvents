import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Event } from '../event';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  @Input() add: boolean;
  type: string;
  protected currencies: string[] = ['RUB', 'EUR', 'USD', 'JPY'];
  protected operations: string[] =['Приход', 'Расход'];
  event: Event;
  @Output() newEvent = new EventEmitter<Event>();
  @Output() isClosed = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {
  }

  show(type:string): void{
    this.type = type;
  }

  makeTrans(summ: number, valuta: string, operation: string, from: string): void{
    this.event = {
      type: "trans",
      date: new Date(),
      addition: {
        valuta: valuta,
        profit: operation == "Приход" ? true : false,
        summ: summ,
        from: from
      }
    }

    this.newEvent.emit(this.event);
    this.isClosed.emit(false);
  }

  makeNews(title: string, text:string): void{
    this.event = {
      type: "news",
      date: new Date(),
      addition: {
        text: text,
        title: title,
        readed: false
      }
    }

    this.newEvent.emit(this.event);
    this.isClosed.emit(false);
  }
}
