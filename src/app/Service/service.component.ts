import { Component } from '@angular/core'
import { studentService } from './student.service'
import { Userrestservice } from '../RESTSERVICE/student.service'
@Component({

    selector: 'serveice-demo',
    templateUrl: './service.component.html',
    providers:[studentService,Userrestservice] //local level registration service

})
export class servicecomponentcls {
    title: string = 'Service Demo'
    student:string = 'Student Details'
    StudentInfo: any
    USerInfo:any
    constructor(private st: studentService,private us:Userrestservice) {

    }
public GetAllUser()
{
    this.us.getUsers().subscribe(res=>{this.USerInfo=res},err=>{this.USerInfo=err})
}
    public GetAll() {

        this.StudentInfo=this.st.GetAllStudent()
    }
}