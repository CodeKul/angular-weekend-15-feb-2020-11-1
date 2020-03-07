import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'local-refs';

  @ViewChild('nm')
  nm : ElementRef

  consoleValue() {
    console.log(this.title)
    console.log(this.nm)
    this.nm.nativeElement.style.border = '1px solid red'
    // nm.style.border = '1px solid red'
  }
}
