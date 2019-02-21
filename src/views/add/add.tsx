import './add.scss'
import React, { Component } from 'react';
import { Router, Todo } from '~/platform';
import { Navbar } from '~/components'
    

export const addViewComponent = (
    router: Router,
    todoService: Todo.Service
) => {
    class AddViewComponent extends Component {

        render() {
            return (
                <div className="home-view-component">
                    <Navbar>New Todo</Navbar>
                    <div 
                        onClick={() => router.navigate('/')}>
                        Done
                    </div>
                </div>
            )
        }

    }
    return AddViewComponent
}