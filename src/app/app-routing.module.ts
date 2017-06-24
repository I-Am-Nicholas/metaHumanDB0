import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent } from './dashboard.component';
import { MetasComponent } from './metas.component';
 
const routes: Routes = [
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'Meta-Human List',  component: MetasComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
