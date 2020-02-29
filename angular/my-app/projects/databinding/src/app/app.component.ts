import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home work - Calculator';
  type = 'button'
  color = 'https://code.sololearn.com/WK4yOr39W3BW/#html'
  isAl = false

  redBorder = '1px solid red'

  btnClk() {
    console.log(`Clicked`)
    this.isAl = !this.isAl
  }
}
