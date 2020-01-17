import { Routes } from '@angular/router'
import { homecomponent } from './home.component'
import { aboutcomponent } from './about.component'
import { contactcomponent } from './contact.component'
import { errorcomponent } from './errorpath.component'
import { childcomponent } from './child.component'
import { AuthenticationService } from './Authentication.service'
import { AuthenticationchildService } from './AuthChild.service'

export const myroute: Routes = [
    { path: '', component: homecomponent },
    {
        path: 'about', component: aboutcomponent, canActivate: [AuthenticationService], canActivateChild: [AuthenticationService],
        children: 
        [
            { path: 'vision', component: childcomponent },
            { path: 'mission', component: contactcomponent, canActivateChild: [AuthenticationchildService] },
            { path: 'goal', component: contactcomponent }
        ]
    },
    { path: 'contact', loadChildren: './Routing/lazy.module#LazyModule' },
    { path: '**', component: errorcomponent }
] 