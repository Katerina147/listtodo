import React from 'react'
import { TodoContext } from '../../context'
import { TodoItem } from './TodoItem'

export const TodoList = () => {
    return (
        <TodoContext.Consumer>
            {({ todoList }) =>
                todoList.map((item) => <TodoItem key={item.id} data={item} />)
            }
        </TodoContext.Consumer>
    )
}
