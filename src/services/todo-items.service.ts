import { Subject } from 'rxjs'
import { cloneDeep } from 'lodash'

export class TodoItem {
    constructor(
        public item: string,
        public date: string,
        public completed: boolean = false
    ) {}
}

export type TodoItemRepository = Record<string, TodoItem>

export class TodoItemsService {
    public todoItems: TodoItemRepository = {}

    public store = new Subject<TodoItemRepository>()

    save(id: string, value: TodoItem) {
        const newState = cloneDeep(this.todoItems)
        newState[id] = value
        this.todoItems = newState
        this.store.next(this.todoItems)
    }
}