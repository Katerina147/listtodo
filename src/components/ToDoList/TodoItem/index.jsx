import React, { useState } from 'react'
import s from './TodoItem.module.scss'
import { EditableRenderer } from './EditableRenderer'
import { DefaultRenderer } from './DefaultRenderer'

export const TodoItem = ({ data }) => {
    const [isEdit, setIsEdit] = useState(false)

    const handleOpenEditView = () => setIsEdit(true)
    const handleCloseEditView = () => setIsEdit(false)

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
    )
}
