import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradeEditComponent } from './grade-edit.component';
import { GradeEditRoutingModule } from './grade-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    GradeEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    GradeEditComponent
  ]
})
export class GradeEditModule { }
