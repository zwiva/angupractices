import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'tarea201202', loadChildren: () => import('./components/tarea201202/tarea201202.module').then(m => m.Tarea201202Module) },
  { path: '**', redirectTo: 'tarea201202', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
