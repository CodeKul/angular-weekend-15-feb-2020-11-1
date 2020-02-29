import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFooterComponent } from './my-footer.component';
import { MyFooterCardComponent } from './my-footer-card/my-footer-card.component';



@NgModule({
  declarations: [MyFooterComponent, MyFooterCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MyFooterComponent
  ]
})
export class FooterModule { }
