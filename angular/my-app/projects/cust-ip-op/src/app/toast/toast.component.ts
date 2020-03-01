import { ToastInfo } from './toast-info';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  @Input('wantToDisplay')
  isShown : boolean

  @Input()
  info : ToastInfo

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
