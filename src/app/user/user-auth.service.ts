import { Injectable } from '@angular/core';
import {Auth} from '@angular/fire/auth';
import {GoogleAuthProvider, signInWithPopup} from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private fbAuth: Auth) { }

  async loginWithGoogle() {
	  return await signInWithPopup(this.fbAuth, new GoogleAuthProvider());
  }
}
