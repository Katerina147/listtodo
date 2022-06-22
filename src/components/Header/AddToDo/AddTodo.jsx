import React, { useState } from 'react'
import uuid from 'react-uuid'
import { Row, Col, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import s from './AddTodo.module.css'

function AddTodo({ todo, setTodo }) {
    const [value, setValue] = useState('')

    function saveTodo() {
        setTodo([
            ...todo,
            {
                id: uuid.v4,
                title: value,
                status: true,
            },
        ])
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
                ></Form.Control>
                <Button onClick={saveTodo} className={s.btn} variant="light">
                    Save
                </Button>
            </Col>
        </Row>
    )
}

export default AddTodo
