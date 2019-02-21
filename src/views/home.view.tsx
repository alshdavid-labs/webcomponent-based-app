import React, { Component } from 'react';
import { Router } from '~/platform';
import { TodoItemsService } from '~/services';
import * as Components from '~/components';

export const homeViewComponent = (
    router: Router,
    todoItemsService: TodoItemsService
) => class HomeViewComponent extends Component {

    componentDidMount() {
        console.log(router, todoItemsService)
    }

    render() {
        return <div className="home-view-component">
            <div onClick={() => router.navigate('/add')}>Go</div>
            <Components.TodoItem  
                name="hei"
                date="yo"
                completed={true} />
        </div>
    } 

}

