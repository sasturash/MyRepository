import { Component } from '@angular/core'
import { FormGroup, FormControl, Validators, PatternValidator } from '@angular/forms'

@Component({
    selector: 'model-form',
    templateUrl: './ModelForm.Component.html'

})
export class ModelFormComponent {
    title = 'Model Driven Form'
    studentModel: FormGroup
    public address: FormGroup
    StudentInfo: any
    disabledAgreement: boolean = true

    //button enabled disabled..
    changeCheck(event) {

        if (event.target.checked) {
            this.disabledAgreement = false;
        }
        else {
            this.disabledAgreement = true;
        }
    }

    // phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$"


    public GetAll() {

        this.StudentInfo
    }
   public constructor() {
        this.studentModel = new FormGroup({
            name: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4}))$/)]),
            mobileno: new FormControl('', [Validators.required, Validators.pattern(/^(\+\d{0,1,3}[- ]?)?\d{10}$/)]),
            password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/)]),
            country: new FormControl(),
            state: new FormControl(),
            city: new FormControl(),
            gender: new FormControl('male', Validators.required),
            uploadfile: new FormControl(),
            chkbx: new FormControl(),

            address: new FormGroup({
                street: new FormControl('', Validators.required),
                zip: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{1,6}$/)])

            })

        })
    }
}

