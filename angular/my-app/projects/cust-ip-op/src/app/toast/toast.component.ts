import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  @Input('wantToDisplay')
  isShown : boolean

  @Output()
  cardClose : EventEmitter<boolean> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onCloseClick() {
    this.isShown = !this.isShown
    this.cardClose.emit(this.isShown)
  }
}
