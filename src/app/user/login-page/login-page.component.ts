import { Component, OnInit } from '@angular/core';
import {UserAuthService} from '../user-auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(public auth: UserAuthService) { }

  ngOnInit(): void {
  }

}
