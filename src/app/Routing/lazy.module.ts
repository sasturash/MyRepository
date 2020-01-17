import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { errorcomponent } from './errorpath.component';
import { contactcomponent } from './contact.component';

const route: Routes = [
    // { path: '', redirectTo: 'contact', pathMatch: 'full' },
    { path: '', component: contactcomponent },
    // { path: '**', component: errorcomponent }
]

@NgModule({
    declarations: [contactcomponent],
    imports: [CommonModule, RouterModule.forChild(route)],
    providers: [],
    exports: [contactcomponent]
})
export class LazyModule {

}