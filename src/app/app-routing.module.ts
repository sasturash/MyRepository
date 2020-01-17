import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { errorcomponent } from './Routing/errorpath.component';


const routes: Routes = [
  { path: 'contact', loadChildren: './Routing/lazy.module#LazyModule' },
  { path: '**', component: errorcomponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
