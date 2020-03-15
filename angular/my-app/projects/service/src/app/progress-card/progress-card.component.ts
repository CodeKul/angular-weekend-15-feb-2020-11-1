import { ProgressService } from './../progress.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-card',
  templateUrl: './progress-card.component.html',
  styleUrls: ['./progress-card.component.css']
})
export class ProgressCardComponent implements OnInit {

  constructor(
    private progress: ProgressService
  ) { }

  ngOnInit(): void {
    this.progress.em.subscribe(dt => console.log(dt))
  }
}
