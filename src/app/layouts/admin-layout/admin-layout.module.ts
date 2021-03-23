import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { Init4Component } from '../../init4/init4.component';


@NgModule({
  declarations: [
    Init4Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
  ]
})
export class AdminLayoutModule { }
