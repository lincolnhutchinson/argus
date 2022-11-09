import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleSigninDirective } from './google-signin.directive';



@NgModule({
  declarations: [
    GoogleSigninDirective
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
