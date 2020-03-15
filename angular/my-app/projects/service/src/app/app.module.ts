import { ChatService } from './chat-service';
import { DemoService, AllService } from './demo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoOneComponent } from './demo-one/demo-one.component';
import { DemoTwoComponent } from './demo-two/demo-two.component';
import { ProgressCardComponent } from './progress-card/progress-card.component';
import { OpsCardComponent } from './ops-card/ops-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoOneComponent,
    DemoTwoComponent,
    ProgressCardComponent,
    OpsCardComponent
  ],
  imports: [
    BrowserModule
  ],
  //providers: [DemoService, AllService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
