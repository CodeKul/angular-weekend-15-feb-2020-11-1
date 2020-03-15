import { ProgressData } from './progress-data';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  readonly em : EventEmitter<ProgressData> = new EventEmitter()

  constructor() { }
}
