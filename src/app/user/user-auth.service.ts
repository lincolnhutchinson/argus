import { Injectable } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';

@Injectable({
	providedIn: 'root'
})
export class UserAuthService {
	uid: string = "";

	constructor(private fbAuth: Auth) { 
		onAuthStateChanged(fbAuth, (user) => {
			if (user) {
				this.uid = user.uid;
			} else {
				this.uid = "";
			}
		});
	}

	isLoggedIn(): boolean {
		return this.uid !== "";
	}

	getUserID(): string {
		return this.uid;
	}

	async loginWithGoogle() {
		return await signInWithPopup(this.fbAuth, new GoogleAuthProvider());
	}
}
