import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExaminationListComponent } from './examination-list.component';
import { ExaminationListRoutingModule } from './examination-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ExaminationListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ExaminationListComponent
  ]
})
export class ExaminationListModule { }
