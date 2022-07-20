import React, { useContext, useState } from 'react'
import { nanoid } from 'nanoid'
import { Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { ButtonDefault, CustomModal } from '../shared'
import { TodoContext } from '../../context'
import s from './AddTodo.module.scss'

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
            id: nanoid(),
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
                <ButtonDefault
                    onClick={saveTodo}
                    className={s.btn}
                    variant="light"
                    label="Save"
                />
            </Col>
            <CustomModal
                openModal={openModal}
                onHide={handleModalHide}
                content={<span>Enter a task</span>}
                title="Attention!"
            />
        </Row>
    )
}
