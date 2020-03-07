import { Component, OnInit, ContentChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sample-comp',
  templateUrl: './sample-comp.component.html',
  styleUrls: ['./sample-comp.component.css']
})
export class SampleCompComponent implements OnInit, AfterViewInit {

  @ContentChild('jumbo')
  jmb : ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.jmb.nativeElement.style.border = '1px solid red'
  }

}
