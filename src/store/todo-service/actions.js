import { nanoid } from 'nanoid';

export const ACTIONS = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_STATUS: 'TOGGLE_TODO',
    DELETE_TODO: 'DELETE_TODO',
    EDIT_TODO: 'EDIT_TODO',
};

export const addTodo = (value) => {
    return {
        type: ACTIONS.ADD_TODO,
        payload: { id: nanoid(), title: value, status: false },
    };
};

export const toggleTodoStatus = (id) => ({
    type: ACTIONS.TOGGLE_STATUS,
    payload: id,
});

export const deleteTodo = (id) => ({
    type: ACTIONS.DELETE_TODO,
    payload: id,
});

export const editTodo = (id, title) => ({
    type: ACTIONS.EDIT_TODO,
    payload: { id, title },
});
