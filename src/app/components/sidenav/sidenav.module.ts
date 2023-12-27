import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {MatListModule} from "@angular/material/list";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterOutlet,
    RouterLinkWithHref,
    MatListModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class SidenavModule { }
