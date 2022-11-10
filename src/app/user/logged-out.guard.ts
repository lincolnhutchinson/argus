import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserAuthService} from './user-auth.service';

@Injectable({
	providedIn: 'root'
})
export class LoggedOutGuard implements CanActivate {
	constructor(private auth: UserAuthService) {}

	async canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Promise<boolean | UrlTree> {
			return !(this.auth.isLoggedIn());
		}

}
