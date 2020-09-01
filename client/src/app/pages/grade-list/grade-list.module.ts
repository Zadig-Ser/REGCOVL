import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradeListComponent } from './grade-list.component';
import { GradeListRoutingModule } from './grade-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    GradeListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    GradeListComponent
  ]
})
export class GradeListModule { }
