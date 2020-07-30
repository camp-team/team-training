import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'relativetime',
})
export class RelativetimePipe implements PipeTransform {
  transform(value: Date): string {
    return moment(value).fromNow();
  }
}
