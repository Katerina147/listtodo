import React, { useState } from 'react'
import uuid from 'react-uuid'
import { Row, Col, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import s from './AddTodo.module.scss'

export const AddTodo = ({ addTodoClickHandler }) => {
    const [value, setValue] = useState('')

    const saveTodo = () => {
        if (!value) alert('Enter what do you whant to do')
        const newTodo = {
            id: uuid.v4,
            title: value,
            status: true,
        }
        addTodoClickHandler(newTodo)
        setValue('')
    }
    return (
        <Row>
            <Col className={s.addTodoForm}>
                <Form.Control
                    className={s.addTodoForm}
                    placeholder="Enter a task"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <Button onClick={saveTodo} className={s.btn} variant="light">
                    Save
                </Button>
            </Col>
        </Row>
    )
}
