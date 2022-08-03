import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { EditableRenderer } from './EditableRenderer';
import { DefaultRenderer } from './DefaultRenderer';
import s from './TodoItem.module.scss';

export const TodoItem = ({ data }) => {
    const [isEdit, setIsEdit] = useState(false);

    const handleOpenEditView = () => setIsEdit(true);
    const handleCloseEditView = () => setIsEdit(false);

    return (
        <div className={s.listItem}>
            {isEdit ? (
                <EditableRenderer
                    onSave={handleCloseEditView}
                    id={data.id}
                    title={data.title}
                />
            ) : (
                <DefaultRenderer data={data} onEdit={handleOpenEditView} />
            )}
        </div>
    );
};

TodoItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        status: PropTypes.bool,
    }),
};
