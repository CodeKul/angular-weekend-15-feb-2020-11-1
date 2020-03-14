import { DemoService } from './../demo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-one',
  templateUrl: './demo-one.component.html',
  styleUrls: ['./demo-one.component.css'],
  // providers: [DemoService]
})
export class DemoOneComponent implements OnInit {

  counter = 0

  constructor(private sr : DemoService) { }

  ngOnInit(): void {
  }

  clk(num : number) {
    if(num === 1) {
      this.counter = this.sr.inc()
    }else {
      this.counter = this.sr.dec()
    }
  }
}
