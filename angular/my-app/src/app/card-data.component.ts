import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-data',
  template: `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Data Card</h5>
          <h6 class="card-subtitle mb-2 text-muted">Bitcoing Rates</h6>
          <table border="1px">
            <tr> 
              <th>Rate</th>
              <th>Date</th>
             </tr>
             <tr> 
              <th>5</th>
              <th>20-12-2019</th>
            </tr>
            <tr> 
              <th>10</th>
              <th>20-01-2020</th>
            </tr>
          </table>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
    </div>
  `,
  styles: []
})
export class CardDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
