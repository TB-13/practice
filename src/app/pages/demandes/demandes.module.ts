import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandesComponent } from './demandes.component';
import {DemandesRoutingModule} from "./demandes-routing.component";



@NgModule({
  declarations: [
    DemandesComponent
  ],
  imports: [
    CommonModule,
    DemandesRoutingModule
  ]
})
export class DemandesModule { }
