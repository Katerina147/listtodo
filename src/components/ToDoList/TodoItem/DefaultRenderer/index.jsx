import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { TodoActions } from '../Actions';
import s from '../TodoItem.module.scss';

export const DefaultRenderer = ({ data, onEdit }) => {
    const { title, id, completed } = data;
    return (
        <>
            <span className={cn({ [s.close]: completed })}>{title}</span>
            <TodoActions id={id} completed={completed} onEdit={onEdit} />
        </>
    );
};

DefaultRenderer.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }),
    onEdit: PropTypes.func.isRequired,
};
