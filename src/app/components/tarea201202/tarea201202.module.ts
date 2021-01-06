import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Tarea201202RoutingModule } from './tarea201202-routing.module';
import { Tarea201202Component } from './tarea201202.component';


@NgModule({
  declarations: [Tarea201202Component],
  imports: [
    CommonModule,
    Tarea201202RoutingModule
  ]
})
export class Tarea201202Module { }
