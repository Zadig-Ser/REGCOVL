import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterListComponent } from './center-list.component';
import { CenterListRoutingModule } from './center-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CenterListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CenterListComponent
  ]
})
export class CenterListModule { }
