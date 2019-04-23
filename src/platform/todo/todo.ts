import { BehaviorSubject } from 'rxjs'
import { cloneDeep } from 'lodash'

export namespace Todo {

  export class Item {
    constructor(
      public item: string,
      public date: string,
      public completed: boolean = false
    ) { }
  }

  export type ItemRepository = Record<string, Item>

  export class Service {
    public todoItems: ItemRepository = {}

    public store = new BehaviorSubject<ItemRepository>(this.todoItems)

    save(id: string, value: Item) {
      const newState = cloneDeep(this.todoItems)
      newState[id] = value
      this.todoItems = newState
      this.store.next(this.todoItems)
    }
  }

}

