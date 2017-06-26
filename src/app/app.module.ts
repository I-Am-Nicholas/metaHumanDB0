import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { MetasComponent } from './metas.component';
import { MetaService } from './meta-service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MetaService],
  bootstrap: [AppComponent]
})

export class AppModule {}
