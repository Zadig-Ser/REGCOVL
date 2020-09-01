import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExaminationEditComponent } from './examination-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ExaminationEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExaminationEditRoutingModule { }
