import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'qrOutput'
})
export class QrOutputPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return `data:image/png;base64,${value}`;
  }

}
