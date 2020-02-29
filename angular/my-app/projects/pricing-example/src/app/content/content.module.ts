import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyContentComponent } from './my-content.component';
import { MyTextContentComponent } from './my-text-content/my-text-content.component';
import { MyCardContentComponent } from './my-card-content/my-card-content.component';

@NgModule({
  declarations: [MyContentComponent, MyTextContentComponent, MyCardContentComponent],
  imports: [
    CommonModule
  ],exports : [
    MyContentComponent
  ]
})
export class ContentModule { }
