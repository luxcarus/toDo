import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { GatemanComponent } from './gateman/gateman.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    GatemanComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'gateman',
        component: GatemanComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }      
    ])
  ],
  providers: [],
  // bootstrap: [AppComponent,GatemanComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
