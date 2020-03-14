import { ChatService } from './chat-service';
import { Injectable } from '@angular/core'

@Injectable({providedIn : 'root'})
export class DemoService {

  demoData = 0

  constructor() { }

  demoHeavyCalculations() {
    for (let i = 0; i < 1000000; i++) {
      // mimicing demo heavy operations
    }
  }

  inc() {
    return ++this.demoData
  }

  dec() {
    return this.demoData--
  }
}

@Injectable({providedIn : 'root'})
export class AllService {

  ///
  constructor(
    private demo: DemoService,
    private chat: ChatService
  ) {

  }
}
