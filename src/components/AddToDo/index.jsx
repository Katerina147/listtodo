import React, { useContext, useState } from 'react'
import uuid from 'react-uuid'
import { Row, Col, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { CustomModal } from '../shared'
import s from './AddTodo.module.scss'
import { TodoContext } from '../TodoContext'

export const AddTodo = () => {
    const [value, setValue] = useState('')
    const [openModal, setOpenModal] = useState(false)

    const { todoList, setTodoList } = useContext(TodoContext)
    const addTodoClickHandler = (value) => setTodoList([...todoList, value])

    const saveTodo = () => {
        if (!value) {
            setOpenModal(true)
            return
        }
        const newTodo = {
            id: uuid.v4,
            title: value,
            status: false,
        }
        addTodoClickHandler(newTodo)
        setValue('')
    }

    const handleChangeTodoTitle = (e) => setValue(e.target.value)
    const handleModalHide = () => setOpenModal(false)

    return (
        <Row>
            <Col className={s.addTodoForm}>
                <Form.Control
                    className={s.addTodoForm}
                    placeholder="Enter a task"
                    value={value}
                    onChange={handleChangeTodoTitle}
                />
                <Button onClick={saveTodo} className={s.btn} variant="light">
                    Save
                </Button>
            </Col>
            <CustomModal
                openModal={openModal}
                onHide={handleModalHide}
                bodyLabel={'Enter a task'}
                titleLabel={'Attention!'}
            />
        </Row>
    )
}
