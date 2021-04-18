import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotnetsPanelComponent } from './botnets-panel/botnets-panel.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { BotnetAddComponent } from './botnet-add/botnet-add.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    BotnetsPanelComponent,
    BotnetAddComponent
  ],
  exports: [
    BotnetsPanelComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
