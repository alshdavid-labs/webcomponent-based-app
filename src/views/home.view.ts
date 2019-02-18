import Navigo from 'navigo'
import { isEqual } from 'lodash'
import { TodoItemsService, TodoItemRepository, TodoItem } from '../services';

export const bootstrapHomeViewComponent = (
    router: Navigo, 
    todoItemsService: TodoItemsService
) => {

    class HomeViewComponent extends HTMLElement {
        private todoItems: TodoItemRepository = {}
        private todoItemRefs: any = {}
        private navbarEl = document.createElement('app-navbar')
        private todoOutlet = document.createElement('div')

        connectedCallback() {
            todoItemsService.store.subscribe(v => this.onTodoUpdate(v))
            this.navbarEl.setAttribute('title', 'Bucket List')
            this.appendChild(this.navbarEl)
            this.appendChild(this.todoOutlet)
            this.onTodoUpdate(todoItemsService.todoItems)
        }

        private onTodoUpdate(items: TodoItemRepository) {
            const toRender: TodoItemRepository = {}

            for (const index in items) {
                const item = items[index]
                const current = this.todoItems[index]
                if (!current) {
                    toRender[index] = item
                }
                if (!isEqual(item, current)) {
                    toRender[index] = item
                }
            }

            for (const index in toRender) {
                const item = toRender[index]
                const el = this.itemElementCreator(index, item)
                const ref = this.todoItemRefs[index]
                if (ref) {
                    this.todoOutlet.contains(ref)
                    this.todoOutlet.removeChild(ref)
                }
                this.todoItemRefs[index] = el
                this.todoOutlet.appendChild(el)
            }
        }

        private itemElementCreator(index: string, item: TodoItem) {
            const el = document.createElement('app-todo-item')
            el.setAttribute('item', item.item)
            el.setAttribute('date', item.date)
            el.setAttribute('completed', item.completed.toString())
            el.onclick = () => this.onClickItem(index, item)
            return el
        }

        private onClickItem = (index: string, item: TodoItem) => {
            todoItemsService.save(index, new TodoItem(
                item.item, item.date, !item.completed))
        }
    }

    customElements.define('app-view-home', HomeViewComponent)

}

/**
 * 
 * for (const i in this.el.list) {
                const item = this.el.list[i]
                this.appendChild(item.ref)
                item.ref.setAttribute('item', item.item)
                item.ref.setAttribute('date', item.date)
                item.ref.setAttribute('completed', item.completed)
                item.ref.onclick = () => this.onClickItem(i, item)
            }
 */