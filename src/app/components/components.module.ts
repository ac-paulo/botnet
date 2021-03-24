import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListBotnetsComponent } from './list-botnets/list-botnets.component';
import { MatButtonModule } from '@angular/material/button';
import { ListOffBotnetsComponent } from './list-off-botnets/list-off-botnets.component';

import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { TrBotnetComponent } from './tr-botnet/tr-botnet.component';
import { CardInfoComponent } from './card-info/card-info.component';



@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    ListBotnetsComponent,
    ListOffBotnetsComponent,
    TrBotnetComponent,
    CardInfoComponent
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ListBotnetsComponent,
    ListOffBotnetsComponent,
    CardInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule
  ]
})
export class ComponentsModule { }
