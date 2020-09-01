import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list.component';
import { DepartmentListRoutingModule } from './department-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    DepartmentListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    DepartmentListComponent
  ]
})
export class DepartmentListModule { }
