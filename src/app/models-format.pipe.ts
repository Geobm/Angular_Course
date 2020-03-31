import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modelsFormat'
})
export class ModelsFormatPipe implements PipeTransform {

  transform(models: any, args?: any): any {

    let fixedValue : string;
    let cant : number = models.length;

    if(cant == 1){
      return models;
    }
    else {
    fixedValue = `[${models[0]}-${models[cant-1]}]`;

    }  
    return fixedValue;
  }

}