import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentEditComponent } from './department-edit.component';
import { DepartmentEditRoutingModule } from './department-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    DepartmentEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    DepartmentEditComponent
  ]
})
export class DepartmentEditModule { }
