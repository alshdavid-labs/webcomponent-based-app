import { Router } from '~/platform'
import { TodoItem } from '~services';
import * as VIEWS from '~/views'
import * as COMPONENTS from '~/components'
import * as SERVICES from '~/services'

const router = new Router([
    { path: '/',    componentName: 'app-view-home' },
    { path: '/add', componentName: 'app-view-add' }
])

const todoItemsService = new SERVICES.TodoItemsService()

COMPONENTS.bootstrapCheckboxComponent()
COMPONENTS.navbarComponent()
COMPONENTS.bootstrapTodoComponent()

VIEWS.homeViewComponent(router, todoItemsService)
VIEWS.addViewComponent(router)

console.log('App is ready to go')

todoItemsService.save('item_1', new TodoItem('one', 'date'))
todoItemsService.save('item_2', new TodoItem('two', 'date'))
todoItemsService.save('item_3', new TodoItem('three', 'date'))

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'app-navbar': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
            'app-todo-item': any;
            'slot': any
        }
    }
}