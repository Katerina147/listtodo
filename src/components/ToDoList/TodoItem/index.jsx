import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form'
import cn from 'classnames'
import { ButtonIcon } from '../../shared'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { TodoActions } from './Actions'
import s from './TodoItem.module.scss'
import { TodoContext } from '../../TodoContext'

export const TodoItem = ({ data }) => {
    const { title, id, status } = data
    const [isEdit, setIsEdit] = useState(false)
    const [value, setValue] = useState(title)

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

    const handleClickEdit = () => setIsEdit(true)

    const onSaveClickHandler = () => {
        const newTodos = todoList.map((item) =>
            item.id === id ? { ...item, title: value } : item
        )
        setTodoList(newTodos)
        setIsEdit(false)
    }

    const editableRenderer = (
        <>
            <Form.Control
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <ButtonIcon onClick={onSaveClickHandler} icon={faSave} />
        </>
    )

    const defaultRenderer = (
        <>
            <span className={cn('', { [s.close]: status })}>{title}</span>
            <TodoActions
                deleteTodo={onDeleteClickHandler}
                toggleStatusTodo={handleToggleStatus}
                editTodo={handleClickEdit}
                elemStatus={!status}
            />
        </>
    )

    return (
        <div className={s.listItem}>
            {isEdit ? editableRenderer : defaultRenderer}
        </div>
    )
}
