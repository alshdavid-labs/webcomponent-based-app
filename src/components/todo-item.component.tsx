import React from 'react';

export interface ITodoItemProps {
    name?: string
    date?: string
    completed?: boolean
}

export const TodoItem = ({ name, date, completed }: ITodoItemProps) =>
    <div className="todo-item-component">
        {name}, {date}, {(completed || '').toString()}
    </div>
