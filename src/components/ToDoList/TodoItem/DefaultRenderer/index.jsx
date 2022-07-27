import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { TodoActions } from '../Actions';
import s from '../TodoItem.module.scss';

export const DefaultRenderer = ({ data, onEdit }) => {
    const { title, id, status } = data;
    return (
        <>
            <span className={cn({ [s.close]: status })}>{title}</span>
            <TodoActions id={id} status={status} onEdit={onEdit} />
        </>
    );
};

DefaultRenderer.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        status: PropTypes.bool.isRequired,
    }),
    onEdit: PropTypes.func.isRequired,
};
