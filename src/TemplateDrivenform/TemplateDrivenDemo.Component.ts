import { Component } from '@angular/core'


@Component({

    selector:'tmp-demo',
    templateUrl:'./TemplateDrivenDemo.Component.html'
})
export class TemplateDrivenDemoComponent{

title='Tempalte Driven Form';

public Save(data:any)
{
alert(JSON.stringify(data));
}

}