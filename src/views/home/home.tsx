import './home.scss'
import React, { Component } from 'react';
import { Router, Todo, Observe } from '~/platform';
import { TodoItem, Navbar, FloatingActionBar } from '~/components'
    
export const homeViewComponent = (
    router: Router,
    todoService: Todo.Service
) => {
    class HomeViewComponent extends Component {

        @Observe(todoService.store)
        todoItems: Todo.ItemRepository = {}

        updateItem(index: string, item: Todo.Item) {
            return () => todoService.save(index, { ...item, completed: !item.completed})
        }

        generateTodoList() {
            return Object
                .keys(this.todoItems)
                .map(key => ({ ...this.todoItems[key], key }))
                .map(item =>
                    <TodoItem
                        onClick={this.updateItem(item.key, item)}
                        key={item.key}
                        name={item.item}
                        date={item.date}
                        completed={item.completed} />
                )
        }

        render() {
            return (
                <div className="home-view-component">
                    <Navbar>Home</Navbar>
                    { this.generateTodoList() }
                    <FloatingActionBar
                        onClick={() => router.navigate('/add')}>
                        Add
                    </FloatingActionBar>
                </div>
            )
        }

    }
    return HomeViewComponent
}
