import { FooterModule } from './footer/footer.module';
import { ContentModule } from './content/content.module';
import { NavModule } from './nav/nav.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavModule,
    ContentModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
