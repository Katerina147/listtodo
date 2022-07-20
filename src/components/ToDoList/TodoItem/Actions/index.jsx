import React, { useContext } from 'react'
import { ButtonIcon } from '../../../shared'
import {
    faTrashCan,
    faFilePen,
    faLock,
    faUnlock,
} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import s from './Actions.module.scss'
import { TodoContext } from '../../../../context'

export const TodoActions = ({ id, status, onEdit }) => {
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
        <div>
            <ButtonIcon onClick={onDeleteClickHandler} icon={faTrashCan} />
            <ButtonIcon
                className={s.btn}
                onClick={handleToggleStatus}
                icon={!status ? faLock : faUnlock}
            />
            <ButtonIcon
                className={s.btn}
                onClick={handleClickEdit}
                icon={faFilePen}
            />
        </div>
    )
}

TodoActions.propTypes = {
    id: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    onEdit: PropTypes.func.isRequired,
}
