import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'local-refs';

  @ViewChild('nm')
  nm : ElementRef

  @ViewChild('jumbo')
  jmb : ElementRef

  consoleValue() {
    console.log(this.title)
    console.log(this.nm)
    this.nm.nativeElement.style.border = '1px solid red'
    // nm.style.border = '1px solid red'
  }

  ngAfterViewInit() {
    //this.jmb.nativeElement.style.border = '1px solid red'
  }
}
