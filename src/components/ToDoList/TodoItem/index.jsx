import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import cn from 'classnames'
import { ButtonIcon } from '../../shared'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { TodoActions } from './Actions'
import s from './TodoItem.module.scss'

export const TodoItem = ({
    data,
    handleSave,
    handleToggleStatus,
    handleDeleteTodo,
}) => {
    const { title, id, status } = data

    const [isEdit, setIsEdit] = useState(false)
    const [value, setValue] = useState(title)

    const onDelete = () => {
        handleDeleteTodo(id)
    }

    const onToggle = () => {
        handleToggleStatus(id)
    }

    const handleClickEdit = () => setIsEdit(true)

    const onSave = () => {
        handleSave(id, value)
        setIsEdit(false)
    }

    const editableRenderer = (
        <>
            <Form.Control
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <ButtonIcon onClick={onSave} icon={faSave} />
        </>
    )

    const defaultRenderer = (
        <>
            <span className={cn('', { [s.close]: status })}>{title}</span>
            <TodoActions
                deleteTodo={onDelete}
                toggleStatusTodo={onToggle}
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
