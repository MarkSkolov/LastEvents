import { Pipe, PipeTransform } from '@angular/core';
import { Event } from "./event";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr:Array<Event>, subj?: string, order?: boolean): any {
    if (subj == "date" && order == true) return arr.sort((a, b) => a.date > b.date ? 1 : -1);
    if (subj == "date" && order == false) return arr.sort((a, b) => a.date < b.date ? 1 : -1);
    if (subj == "type" && order == true) return arr.sort((a, b) => a.type > b.type ? 1 : -1);
    if (subj == "type" && order == false) return arr.sort((a, b) => a.type < b.type ? 1 : -1);
  }

}
