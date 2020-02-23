import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-card-lite',
  template: `
    <div class="alert alert-info">
      hi from lite crad
    </div> 
  `,
  styles: []
})
export class CodeCardLiteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
