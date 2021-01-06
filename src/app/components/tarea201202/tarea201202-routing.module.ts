import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tarea201202Component } from './tarea201202.component';

const routes: Routes = [{ path: '', component: Tarea201202Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tarea201202RoutingModule { }
