import { Injectable } from '@angular/core';
import { Auth, onAuthStateChanged, signOut } from '@angular/fire/auth';
import {Router} from '@angular/router';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';

const USER_KEY = 'user';

@Injectable({
	providedIn: 'root'
})
export class UserAuthService {
	constructor(private fbAuth: Auth, private router: Router) { 
		onAuthStateChanged(fbAuth, (user) => {
			if (user) {
				localStorage.setItem(USER_KEY, JSON.stringify(user));
			} else {
				localStorage.removeItem(USER_KEY);
			}

			router.navigateByUrl('');
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

	getUserDisplayName(): string | null {
		let user_data = localStorage.getItem(USER_KEY);
		if (user_data) {
			return JSON.parse(user_data).displayName;
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
