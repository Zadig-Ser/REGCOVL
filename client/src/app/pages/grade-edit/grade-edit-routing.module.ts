import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GradeEditComponent } from './grade-edit.component';

const routes: Routes = [
  {
    path: '',
    component: GradeEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradeEditRoutingModule { }
