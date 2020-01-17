import { Component } from '@angular/core'
import { USerClass } from './User.service';
@Component({

    selector: 'CRUD-APP',
    templateUrl: 'User.component.html',
    providers: [USerClass]
})
export class usercomponentclas {
    UserInfo: any
    SingleUser: any
    title = 'CRUD OPERATIONS'
    // UserId:number
    // singletextid:any
    constructor(private us: USerClass) {

    }
    
    public GetUserLIst() {
        this.us.GetUserList().subscribe(res => { this.UserInfo = res }, err => { this.UserInfo = err });
    }
    public GetSingleUsercls() {
        this.us.GetSingleUSer().subscribe(res => {
            if (res && res['data']) {
                this.SingleUser = res['data'];
            }
        }, err => { this.SingleUser = err });
    }
    UserId:number
    singletextid:any
    name:any
    public GetSingleUserclctext() {
        this.us.GetSingleUSertext(this.UserId,this.name).subscribe(res => {this.singletextid = res}, err => { this.singletextid = err });
    }
savedata:any
    public saveuser()
    {
        let data={name:'Sastura',job:'Software'}
        this.us.saveuserdata(data).subscribe(res=>{this.savedata=res},err=>{this.savedata=err})
    }

}