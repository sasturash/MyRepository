import { Pipe, PipeTransform } from '@angular/core'

@Pipe({

    name: 'cube'
})
export class CubePipe implements PipeTransform 
{

    public transform(data: number,no:number) {

        return (data * data * data)+no;

    }

}
