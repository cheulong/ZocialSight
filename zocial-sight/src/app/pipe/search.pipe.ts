import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(items: any[], value: string, label:string): any[] {
    if (!items) return [];
    if (!value) return  items;
    value = value.toLowerCase();
    if (value == '' || value == null) return [];
    return items.filter(e => e[label].toLowerCase().indexOf(value) > -1 );
    
  }
}
