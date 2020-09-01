import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CenterEditComponent } from './center-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CenterEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CenterEditRoutingModule { }
