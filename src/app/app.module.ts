import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { democomponent } from 'src/Demo/demo.component';
import { calculatorComponent } from 'src/Calculator/Calculator.Component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorNewComponent } from './calculator-new/calculator-new.component'
import { pipedemocomponent } from 'src/PipeDemo/PipeDemo.Component';
import { CubePipe } from 'src/PipeDemo/cube.pipe';
import { TemplateDrivenDemoComponent } from 'src/TemplateDrivenform/TemplateDrivenDemo.Component';
import { ValidationComponent } from './validation/validation.component';
import { ModelFormComponent } from './Model-Driven-Form/ModelForm.Component';
import { servicecomponentcls } from './Service/service.component';
import { studentService } from './Service/student.service';
import { HttpClientModule } from '@angular/common/http'
import { restservicecomclass } from './RESTSERVICE/restservice.component';
import { usercomponentclas } from './CRUDDEMO/User.component';
import { RouterModule } from '@angular/router';
import { homecomponent } from './Routing/home.component';
import { aboutcomponent } from './Routing/about.component';
import { contactcomponent } from './Routing/contact.component';
import { errorcomponent } from './Routing/errorpath.component';
import { myroute } from './Routing/routing.config';
import { childcomponent } from './Routing/child.component';
import { AuthenticationService } from './Routing/Authentication.service';
@NgModule({
  declarations: [
    AppComponent, democomponent, calculatorComponent, CalculatorNewComponent, pipedemocomponent, CubePipe,
    TemplateDrivenDemoComponent, ModelFormComponent, usercomponentclas, homecomponent, aboutcomponent,
    ValidationComponent, servicecomponentcls, restservicecomclass, errorcomponent, childcomponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   // RouterModule.forRoot(myroute)
  ],
  providers: [studentService, AuthenticationService],//global level registration service here.
  bootstrap: [AppComponent]
})
export class AppModule { }
