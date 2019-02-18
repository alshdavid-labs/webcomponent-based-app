import Navigo from 'navigo'
import { bootstrapRouter } from './app.router'
import * as VIEWS from './views'
import * as COMPONENTS from './components'
import * as SERVICES from './services'
import { TodoItem } from './services';

const router = new Navigo()

bootstrapRouter(router, [
    { path: '/',    componentName: 'app-view-home' },
    { path: '/add', componentName: 'app-view-add' }
])

const todoItemsService = new SERVICES.TodoItemsService()

COMPONENTS.bootstrapCheckboxComponent()
COMPONENTS.bootstrapNavbarComponent()
COMPONENTS.bootstrapTodoComponent()

VIEWS.bootstrapHomeViewComponent(router, todoItemsService)
VIEWS.bootstrapAddViewComponent(router)

console.log('App is ready to go')

todoItemsService.save('item_1', new TodoItem('one', 'date'))
todoItemsService.save('item_2', new TodoItem('two', 'date'))
todoItemsService.save('item_3', new TodoItem('three', 'date'))