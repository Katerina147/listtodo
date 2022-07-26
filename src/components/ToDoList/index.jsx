import React from 'react';
import { useSelector } from 'react-redux';
import { getTodosListSelector } from '../../store/todo-service/selectors';
import { TodoItem } from './TodoItem';
import s from './TodoList.module.scss';

export const TodoList = () => {
    const list = useSelector(getTodosListSelector);
    return (
        <div className={s.todoList}>
            {list.map((item) => (
                <TodoItem key={item.id} data={item} />
            ))}
        </div>
    );
};
