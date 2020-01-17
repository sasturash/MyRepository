import { Component } from '@angular/core'
import { Userrestservice } from './student.service';

@Component({
    selector:'rest--app',
    templateUrl:'./restservice.component.html',
    providers:[Userrestservice]
})
export class restservicecomclass
{
USerInfo:any
constructor(private us:Userrestservice){

}
public GetAllUser()
{
    this.us.getUsers().subscribe(res=>{this.USerInfo=res},err=>{this.USerInfo=err})
}
}