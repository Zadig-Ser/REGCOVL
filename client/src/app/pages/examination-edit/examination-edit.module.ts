import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExaminationEditComponent } from './examination-edit.component';
import { ExaminationEditRoutingModule } from './examination-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ExaminationEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ExaminationEditComponent
  ]
})
export class ExaminationEditModule { }
