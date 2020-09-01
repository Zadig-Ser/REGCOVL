import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExaminationListComponent } from './examination-list.component';

const routes: Routes = [
  {
    path: '',
    component: ExaminationListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExaminationListRoutingModule { }
