
export class DemoService {

  demoData = 0

  constructor() { }

  demoHeavyCalculations() {
    for(let i = 0; i < 1000000; i++) {
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
