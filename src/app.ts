import { Router } from '~/platform'
import { TodoItem } from '~services';
import * as VIEWS from '~/views'
import * as SERVICES from '~/services'

const todoItemsService = new SERVICES.TodoItemsService()

const router = new Router()
const routes = [
    { path: '/', component: VIEWS.homeViewComponent(router, todoItemsService) }
]
router.init(routes)

console.log('App is ready to go')

todoItemsService.save('item_1', new TodoItem('one', 'date'))
todoItemsService.save('item_2', new TodoItem('two', 'date'))
todoItemsService.save('item_3', new TodoItem('three', 'date'))
