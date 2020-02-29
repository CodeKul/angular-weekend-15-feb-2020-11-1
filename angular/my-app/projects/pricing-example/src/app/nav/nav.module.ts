import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyNavComponent } from './my-nav.component';

@NgModule({
  declarations: [MyNavComponent],
  imports: [
    CommonModule
  ],
  exports : [
    MyNavComponent
  ]
})
export class NavModule { }
