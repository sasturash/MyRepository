import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
@Injectable()

export class Userrestservice
{

constructor(private http:HttpClient)
{

}

public getUsers()
{
    let url='https:/reqres.in/api/users?id=2'
    return this.http.get(url)
    // /api/users/2
}

}