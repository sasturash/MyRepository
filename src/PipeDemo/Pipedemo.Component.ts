import { Component } from '@angular/core'

@Component({
selector:'pipe-demo',
templateUrl:'Pipedemo.Component.html'
})
export class pipedemocomponent
{
    name:string='sastura sherikar'
    address:string='Hadapsar'
    design:string='i am software eng'
    todaydate:Date=new Date();
    amount:number=100
    student:any={'name':'Sastura','lastName':'Sherikar'}
    no:number=5
    public show()
    {
        alert(JSON.stringify(this.student));
    }
}
 