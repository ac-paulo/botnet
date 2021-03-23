import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Init4Component} from './layouts/init4/init4.component';
import {AdminLayoutComponent} from './layouts/admin-layout.component';


const routes: Routes = [
  { path: '', component: Init4Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
