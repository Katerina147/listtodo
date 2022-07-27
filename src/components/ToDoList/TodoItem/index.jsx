import React, { useState } from 'react';
import { EditableRenderer } from './EditableRenderer';
import { DefaultRenderer } from './DefaultRenderer';
import PropTypes from 'prop-types';
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
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        status: PropTypes.bool.isRequired,
    }),
};
