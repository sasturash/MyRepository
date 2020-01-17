import { Component } from '@angular/core'

@Component({

    selector:'app-calculator',
    templateUrl:'./Calculator.Component.html'
})
export class calculatorComponent
{
    public num1:number;
    public num2:number;
    public result:number;
    Addition(){
     this.result=Number(this.num1)+Number(this.num2);
    }
    Substraction(){
        this.result=Number(this.num1)-Number(this.num2);
    }
    Multiplication(){
        this.result=Number(this.num1)*Number(this.num2);

    }
    Division(){
        this.result=Number(this.num1)/Number(this.num2);

    }
}