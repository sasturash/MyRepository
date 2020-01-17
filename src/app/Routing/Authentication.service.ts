import { Injectable } from '@angular/core'
import { CanActivate, CanActivateChild } from '@angular/router';
@Injectable()
export class AuthenticationService  implements CanActivate,CanActivateChild
{
canActivate()
{
    return confirm("Are you sure you want to access this page");
}

canActivateChild()
{
    return confirm("Are you sure you want to access this page");
}

    
}