import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterEditComponent } from './center-edit.component';
import { CenterEditRoutingModule } from './center-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CenterEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CenterEditComponent
  ]
})
export class CenterEditModule { }
