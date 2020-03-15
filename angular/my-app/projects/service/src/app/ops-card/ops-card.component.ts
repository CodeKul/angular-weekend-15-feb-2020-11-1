import { ProgressService } from './../progress.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ops-card',
  templateUrl: './ops-card.component.html',
  styleUrls: ['./ops-card.component.css']
})
export class OpsCardComponent implements OnInit {

  constructor(
    private progress: ProgressService
  ) { }

  ngOnInit(): void {
  }

  onProgress(bt: number) {
    this.progress.em.emit({ progressType: bt })
  }
}
