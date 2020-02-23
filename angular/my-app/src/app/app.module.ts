import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CodeCardComponent } from './code-card/code-card.component';
import { CodeCardLiteComponent } from './code-card-lite/code-card-lite.component';
import { CardDataComponent } from './card-data.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeCardComponent,
    CodeCardLiteComponent,
    CardDataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
