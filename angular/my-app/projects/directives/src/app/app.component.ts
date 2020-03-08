import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  showDetailed = false

  st = {
    border : '1px solid red',
    color : 'red'
  }

  quotations = [
    { id: 1, to: 'Android', from: 'Android', qty: 3, unitPrice: 50 },
    { id: 2, to: 'Google', from: 'Microsoft', qty: 5, unitPrice: 7850 },
    { id: 3, to: 'RE', from: 'Mobile Company', qty: 6, unitPrice: 721 },
    { id: 4, to: 'RE', from: 'Mobile Company', qty: 6, unitPrice: 741 },
    { id: 5, to: 'Motors', from: 'Data Company', qty: 59, unitPrice: 236 },
    { id: 6, to: 'Food', from: 'Food Company', qty: 89, unitPrice: 71 }
  ]

  onDetails() {
    this.showDetailed = !this.showDetailed
  }
}
