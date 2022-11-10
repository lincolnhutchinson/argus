import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {UserAuthService} from '../user/user-auth.service';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
	/** Based on the screen size, switch from standard to one column per row */
	cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
		map(({ matches }) => {
			if (matches) {
				return [
					{ title: 'Games', cols: 1, rows: 1 },
				];
			}

			return [
				{ title: 'Games', cols: 2, rows: 1 },
			];
		})
	);

	constructor(private breakpointObserver: BreakpointObserver, public userAuth: UserAuthService) {}
}
