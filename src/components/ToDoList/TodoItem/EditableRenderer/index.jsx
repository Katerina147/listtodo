import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { updateLoadTodo } from '../../../../store/todo-service/actions';
import { ButtonIcon } from '../../../shared';
import { faSave } from '@fortawesome/free-solid-svg-icons';

export const EditableRenderer = ({ id, title, onSave }) => {
    const dispatch = useDispatch();

    const [value, setValue] = useState(title);

    const handleClickSave = () => {
        dispatch(updateLoadTodo(id, value));
        onSave();
    };

    return (
        <>
            <Form.Control
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <ButtonIcon onClick={handleClickSave} icon={faSave} />
        </>
    );
};

EditableRenderer.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
};
