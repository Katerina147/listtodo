import React, { useContext } from 'react'
import cn from 'classnames'
import { TodoActions } from '../Actions'
import s from '../TodoItem.module.scss'
import { TodoContext } from '../../../../context'

export const DefaultRenderer = ({ data, onEdit }) => {
    const { title, id, status } = data

    const { todoList, setTodoList } = useContext(TodoContext)

    const onDeleteClickHandler = () => {
        const newTodos = todoList.filter((item) => item.id !== id)
        setTodoList(newTodos)
    }

    const handleToggleStatus = () => {
        const newTodos = todoList.map((item) =>
            item.id === id ? { ...item, status: !item.status } : item
        )
        setTodoList(newTodos)
    }

    const handleClickEdit = () => onEdit()

    return (
        <>
            <span className={cn({ [s.close]: status })}>{title}</span>
            <TodoActions
                deleteTodo={onDeleteClickHandler}
                toggleStatusTodo={handleToggleStatus}
                handleEditTodo={handleClickEdit}
                elemStatus={!status}
            />
        </>
    )
}
