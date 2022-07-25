import React from 'react';
import { useSelector } from 'react-redux';
import { getTodosListSelector } from '../../store/todo-service/selectors';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    const list = useSelector(getTodosListSelector);
    return (
        <>
            {list.map((item) => (
                <TodoItem key={item.id} data={item} />
            ))}
        </>
    );
};
