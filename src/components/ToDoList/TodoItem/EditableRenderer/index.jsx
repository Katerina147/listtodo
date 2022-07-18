import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { TodoContext } from '../../../../context'
import { ButtonIcon } from '../../../shared'
import { faSave } from '@fortawesome/free-solid-svg-icons'

export const EditableRenderer = ({ id, title, onSave }) => {
    const [value, setValue] = useState(title)
    const { todoList, setTodoList } = useContext(TodoContext)

    const onSaveClickHandler = () => {
        const newTodos = todoList.map((item) =>
            item.id === id ? { ...item, title: value } : item
        )
        setTodoList(newTodos)
        onSave()
    }

    return (
        <>
            <Form.Control
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <ButtonIcon onClick={onSaveClickHandler} icon={faSave} />
        </>
    )
}
