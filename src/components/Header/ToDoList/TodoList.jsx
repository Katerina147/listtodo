import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import s from './TodoList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSave,
    faTrashCan,
    faFilePen,
    faLock,
    faLockOpen,
} from '@fortawesome/free-solid-svg-icons'

function TodoList({ todo, setTodo }) {
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
    function deleteTodo(id) {
        let newTodo = [...todo.filter((elem) => elem.id !== id)]
        setTodo(newTodo)
    }
    function statusTodo(id) {
        let newTodo = [...todo].filter((elem) => {
            if (elem.id === id) {
                elem.status = !elem.status
            }
            return elem
        })
        setTodo(newTodo)
    }
    function editTodo(id, title) {
        setEdit(id)
        setValue(title)
    }
    function saveTodo(id) {
        let newTodo = [...todo].map((elem) => {
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
                                onClick={() => statusTodo(elem.id)}
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

export default TodoList
