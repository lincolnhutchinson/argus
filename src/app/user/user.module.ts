import { NgModule } from '@angular/core';
import { GoogleSigninDirective } from './google-signin.directive';
import {UserRoutingModule} from './user-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    GoogleSigninDirective,
    LoginPageComponent
  ],
  imports: [
	  SharedModule,
	UserRoutingModule
  ]
})
export class UserModule { }
