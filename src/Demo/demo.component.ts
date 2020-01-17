import { Component } from '@angular/core'

@Component({
selector:'app-demo',
templateUrl:'./demo.component.html'

})
export class democomponent
{

arryls:any=[{RollNo:'101',Name:'Sastura',Address:'Pune',Designation:'Software Eng'}]
public=true;
IsHidden=false;
mycolor={'color':'red','font-size': '24px', 'font-weight': 'bold','bold-text':'green'};
show:boolean=true;
isLoginIn:boolean=true;
isLogOut:boolean=false;
element:number=5;
publc:string= "oddnum"; 
 
}