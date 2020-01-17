
import { Injectable } from '@angular/core'

@Injectable()

export class studentService
{
    public student:any=[{ID:1,name:'Sastura',city:'Pune'},{ID:2,name:'Saibaba',city:'Shirdi'}]

    
     public GetAllStudent()
     {
         return this.student
     }
     
}
