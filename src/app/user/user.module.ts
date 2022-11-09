import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleSigninDirective } from './google-signin.directive';
import {UserRoutingModule} from './user-routing.module';


@NgModule({
  declarations: [
    GoogleSigninDirective
  ],
  imports: [
    CommonModule,
	UserRoutingModule
  ]
})
export class UserModule { }
