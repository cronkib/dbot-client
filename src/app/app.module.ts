import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageRowComponent } from './message-row/message-row.component';
import { MessageTableComponent } from './message-table/message-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageRowComponent,
    MessageTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
