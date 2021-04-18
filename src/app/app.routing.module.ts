import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BotnetsPanelComponent } from './components/botnets-panel/botnets-panel.component';
import { BotnetAddComponent } from './components/botnet-add/botnet-add.component';

const routes: Routes = [
  { path: '', component: BotnetsPanelComponent },
  { path: 'add', component: BotnetAddComponent },
  { path: '**', component: BotnetsPanelComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

