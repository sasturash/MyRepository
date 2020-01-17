import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
@Injectable()

export class USerClass
{
    constructor(private http:HttpClient){

    }
    public GetUserList()
    {
        let url="https://reqres.in/api/users?page=2"
        return this.http.get(url)
    }
    public GetSingleUSer()
    {
        let url="https://reqres.in/api/users/2"
        return this.http.get(url)
    }
    //api is not availabale..not working..
    public GetSingleUSertext(no:number,name:any)
    {
        let url='https://reqres.in/api/users?no=+name'
        return this.http.get(url)
    }
    public saveuserdata(usermodel:any)
    {
        let url='https://reqres.in/api/users'
        return this.http.post(url,usermodel)
    }
}