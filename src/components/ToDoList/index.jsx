import React, { useState } from 'react'
import { Button, NavItem } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSave,
    faTrashCan,
    faFilePen,
    faLock,
    faLockOpen,
} from '@fortawesome/free-solid-svg-icons'
import s from './TodoList.module.scss'

export const TodoList = ({ todo, setTodo }) => {
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')

    const deleteTodo = (id) => {
        const newTodo = todo.filter((elem) => elem.id !== id)
        setTodo(newTodo)
    }

    const toggleStatusTodo = (id) => {
        const newTodo = todo.map((elem) =>
            elem.id === id ? { ...elem, status: !elem.status } : elem
        )
        setTodo(newTodo)
    }

    const editTodo = (id, title) => {
        setEdit(id)
        setValue(title)
    }

    const saveTodo = (id) => {
        const newTodo = [...todo].map((elem) => {
            if (elem.id === id) {
                elem.title = value
            }
            return elem
        })
        setTodo(newTodo)
        setEdit(null)
    }

    return (
        <div>
            {todo.map((elem) => (
                <div key={elem.id} className={s.listItems}>
                    {edit === elem.id ? (
                        <div>
                            <input
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </div>
                    ) : (
                        <div className={!elem.status ? s.close : ''}>
                            {elem.title}
                        </div>
                    )}

                    {edit === elem.id ? (
                        <div onClick={() => saveTodo(elem.id)}>
                            <Button variant="light">
                                <FontAwesomeIcon icon={faSave} />
                            </Button>
                        </div>
                    ) : (
                        <div>
                            <Button
                                variant="light"
                                onClick={() => deleteTodo(elem.id)}
                            >
                                <FontAwesomeIcon icon={faTrashCan} />
                            </Button>
                            <Button
                                className={s.btn}
                                variant="light"
                                onClick={() => toggleStatusTodo(elem.id)}
                            >
                                {elem.status ? (
                                    <FontAwesomeIcon icon={faLock} />
                                ) : (
                                    <FontAwesomeIcon icon={faLockOpen} />
                                )}
                            </Button>
                            <Button
                                className={s.btn}
                                variant="light"
                                onClick={() => editTodo(elem.id, elem.title)}
                            >
                                <FontAwesomeIcon icon={faFilePen} />
                            </Button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}
