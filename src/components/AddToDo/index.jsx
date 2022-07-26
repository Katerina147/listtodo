import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { ButtonDefault, CustomModal } from '../shared';
import { addTodo } from '../../store/todo-service/actions';
import s from './AddTodo.module.scss';

export const AddTodo = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const saveTodo = () => {
        if (!value) {
            setOpenModal(true);
            return;
        }
        dispatch(addTodo(value));
        setValue('');
    };

    const handleChangeTodoTitle = (e) => setValue(e.target.value);
    const handleModalHide = () => setOpenModal(false);

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
    );
};
