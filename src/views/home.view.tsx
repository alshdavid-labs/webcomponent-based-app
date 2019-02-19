import { createElement } from 'inferno-create-element';
import { Router, Component } from '~/platform';
import { TodoItemsService, TodoItem } from '~/services';
import { cloneDeep } from 'lodash';

export const homeViewComponent = (
    router: Router,
    todoItemsService: TodoItemsService
) => {
    const selector = 'app-view-home'

    class HomeViewComponent extends Component {
        state: any = {
            todoItems: {}
        }

        connectedCallback() {
            todoItemsService.store
                .subscribe(
                    v => this.state = { ...cloneDeep(this.state), todoItems: v })
        }

        private onClickItem = (index: string, item: TodoItem) => {
            todoItemsService.save(index, new TodoItem(
                item.item, item.date, !item.completed))
        }

        constructTodoList() {
            const items  = []
            for (const index in this.state.todoItems) {
                const item = this.state.todoItems[index]

                items.push(<app-todo-item 
                    item={item.item} 
                    date={item.date} 
                    completed={item.completed} 
                    onclick={() => this.onClickItem(index, item)} />)
            }

            return items
        }

        render() {
            return <div>
                <app-navbar>Bucket List</app-navbar>
                { this.constructTodoList() }
            </div>
        }
    }

    customElements.define(selector, HomeViewComponent)

}

