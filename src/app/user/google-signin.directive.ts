import { Directive, HostListener } from '@angular/core';
import {UserAuthService} from './user-auth.service';

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor(private auth: UserAuthService) { }

  @HostListener('click')
  onClick() {
	  this.auth.loginWithGoogle();
  }
}
