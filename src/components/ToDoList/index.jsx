import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todo, setTodo }) => {
    const onDeleteClickHandler = (id) => {
        const newTodo = todo.filter((elem) => elem.id !== id)
        setTodo(newTodo)
    }

    const handleToggleStatus = (id) => {
        const newTodos = todo.map((elem) =>
            elem.id === id ? { ...elem, status: !elem.status } : elem
        )
        setTodo(newTodos)
    }

    const onSaveClickHandler = (id, value) => {
        const newTodos = todo.map((item) =>
            item.id === id ? { ...item, title: value } : item
        )
        setTodo(newTodos)
    }
    return (
        <div>
            {todo.map((elem) => (
                <TodoItem
                    key={elem.id}
                    data={elem}
                    handleSave={onSaveClickHandler}
                    handleToggleStatus={handleToggleStatus}
                    handleDeleteTodo={onDeleteClickHandler}
                />
            ))}
        </div>
    )
}
