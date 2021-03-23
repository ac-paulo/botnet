import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListBotnetsComponent } from './list-botnets/list-botnets.component';


@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    ListBotnetsComponent
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ListBotnetsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
