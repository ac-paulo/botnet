import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule  } from '@angular/platform-browser';

import {BotnetsComponent} from './layouts/botnets/botnets.component';


const routes: Routes = [
  {
    path: '',
    component: BotnetsComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ]
})
export class AppRouting {}
