import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from './nav/nav.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

const components = [
	NavComponent
]

const modules = [
	CommonModule,
	RouterModule,
	MatButtonModule,
	MatSidenavModule,
	MatListModule,
	MatToolbarModule,
	MatIconModule,
]


@NgModule({
  declarations: [
	  ...components
  ],
  imports: [
	  ...modules
  ],
  exports: [
	  ...components,
	  ...modules
  ]
})
export class SharedModule { }
