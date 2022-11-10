import { Injectable } from '@angular/core';
import { Auth, onAuthStateChanged, signOut } from '@angular/fire/auth';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';

const USER_KEY = 'user';

@Injectable({
	providedIn: 'root'
})
export class UserAuthService {
	constructor(private fbAuth: Auth) { 
		onAuthStateChanged(fbAuth, (user) => {
			if (user) {
				localStorage.setItem(USER_KEY, JSON.stringify(user));
			} else {
				localStorage.removeItem(USER_KEY);
			}
		});
	}

	isLoggedIn(): boolean {
		let user = localStorage.getItem(USER_KEY);
		return !!user;
	}

	getUserID(): string | null {
		let user_data = localStorage.getItem(USER_KEY);
		if (user_data) {
			return JSON.parse(user_data).uid;
		} else {
			return null;
		}
	}

	async loginWithGoogle() {
		return await signInWithPopup(this.fbAuth, new GoogleAuthProvider());
	}

	async logout() {
		console.log("Logging out...");
		return await signOut(this.fbAuth);
	}
}
