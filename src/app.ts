import { Router, Todo } from '~/platform';
import * as VIEWS from '~/views'
declare const window:any

const todoService = new Todo.Service()

const router = new Router()
const routes = [
    { path: '/', component: VIEWS.homeViewComponent(router, todoService) },
    { path: '/add', component: VIEWS.addViewComponent(router, todoService) }
]
router.init(routes)

console.log('App is ready to go')

todoService.save('item_1', new Todo.Item('one', 'date'))
todoService.save('item_2', new Todo.Item('two', 'date'))
todoService.save('item_3', new Todo.Item('three', 'date'))

window.todoService = todoService
window.todoItem = Todo.Item