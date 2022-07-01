import React from 'react'
import { ButtonIcon } from '../../../shared'
import {
    faTrashCan,
    faFilePen,
    faLock,
    faUnlock,
} from '@fortawesome/free-solid-svg-icons'
import s from './Actions.module.scss'

export const TodoActions = ({
    deleteTodo,
    toggleStatusTodo,
    editTodo,
    elemStatus,
}) => {
    return (
        <div>
            <ButtonIcon onClick={deleteTodo} icon={faTrashCan} />
            <ButtonIcon
                className={s.btn}
                onClick={toggleStatusTodo}
                icon={elemStatus ? faLock : faUnlock}
            />
            <ButtonIcon className={s.btn} onClick={editTodo} icon={faFilePen} />
        </div>
    )
}
