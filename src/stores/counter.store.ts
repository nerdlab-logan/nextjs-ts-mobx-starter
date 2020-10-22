import { makeAutoObservable } from 'mobx'

class CounterStore {
  counter = 0

  constructor() {
    makeAutoObservable(this)
  }

  increase = (): void => {
    this.counter++
  }

  decrease = (): void => {
    this.counter--
  }
}

export default CounterStore
