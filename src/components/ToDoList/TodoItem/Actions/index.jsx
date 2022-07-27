import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
    faTrashCan,
    faFilePen,
    faLock,
    faUnlock,
} from '@fortawesome/free-solid-svg-icons';
import {
    toggleTodoStatus,
    deleteTodo,
} from '../../../../store/todo-service/actions';
import { ButtonIcon } from '../../../shared';
import s from './Actions.module.scss';

export const TodoActions = ({ id, status, onEdit }) => {
    const dispatch = useDispatch();

    const handleClickDelete = () => {
        dispatch(deleteTodo(id));
    };

    const handleToggleStatus = () => {
        dispatch(toggleTodoStatus(id));
    };

    const handleClickEdit = () => onEdit();

    return (
        <div>
            <ButtonIcon onClick={handleClickDelete} icon={faTrashCan} />
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
    );
};

TodoActions.propTypes = {
    id: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    onEdit: PropTypes.func.isRequired,
};
