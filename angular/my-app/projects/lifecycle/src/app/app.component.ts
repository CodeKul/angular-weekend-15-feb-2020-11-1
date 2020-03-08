import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecycle';
  isSh = false

  onOkay() {
    this.title = new Date().toString()
  }

  onShow() {
    this.isSh = !this.isSh
  } 
}
