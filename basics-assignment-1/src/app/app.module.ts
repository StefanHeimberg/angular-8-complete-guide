import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WarningalertComponent } from './alert/warningalert/warningalert.component';
import { SuccessalertComponent } from './alert/successalert/successalert.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningalertComponent,
    SuccessalertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }