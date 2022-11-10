import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoggedOutGuard} from './logged-out.guard';
import {LoginPageComponent} from './login-page/login-page.component';

const routes: Routes = [
	{ path: '', component: LoginPageComponent, canActivate: [ LoggedOutGuard ] }
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UserRoutingModule {  }

