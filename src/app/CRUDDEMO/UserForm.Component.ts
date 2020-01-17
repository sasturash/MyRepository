import { Component } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'

@Component({
    selector:'UserForm-App',
    templateUrl:'./UserForm.Component.html'

})
export class userformcls{
    UserFormModel:FormGroup

    public constructor(){
        this.UserFormModel=new FormGroup({
        name: new FormControl(),
        lastname:new FormControl(),
        email:new FormControl(),
        image:new FormControl()
        })
    }

}