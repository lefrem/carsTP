import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'research'
})
export class ResearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
