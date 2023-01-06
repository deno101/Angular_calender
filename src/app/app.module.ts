import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalenderComponent } from './components/calender/calender.component';
import { DayComponent } from './components/calender/day/day.component';
import {HttpClientModule} from "@angular/common/http";
import { CalenderGridComponent } from './components/calender/calender-grid/calender-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    DayComponent,
    CalenderGridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
