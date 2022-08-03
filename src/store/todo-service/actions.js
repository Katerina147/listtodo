import axios from 'axios';

export const ACTIONS = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_STATUS: 'TOGGLE_TODO',
    DELETE_TODO: 'DELETE_TODO',
    EDIT_TODO: 'EDIT_TODO',
    GET_TODOS: 'GET_TODOS',
    SET_LOADING: 'SET_LOADING',
};

export const setLoading = (payload) => ({
    type: ACTIONS.SET_LOADING,
    payload,
});

export const addTodo = (value) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.post(
            `https://jsonplaceholder.typicode.com/todos`,
            {
                title: value,
            }
        );
        const { data } = response;
        dispatch({
            type: ACTIONS.ADD_TODO,
            payload: { ...data, title: data.title },
        });
    } catch (error) {
        return error;
    } finally {
        dispatch(setLoading(false));
    }
};

export const toogleStatusTodo = (id, completed) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.patch(
            `https://jsonplaceholder.typicode.com/todos/${id}`,
            { id, completed }
        );
        const { data } = response;
        dispatch({
            type: ACTIONS.TOGGLE_STATUS,
            payload: data,
        });
    } catch (error) {
        return error;
    } finally {
        dispatch(setLoading(false));
    }
};

export const getTodos = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/todos/`
        );
        const { data } = response;
        dispatch({
            type: ACTIONS.GET_TODOS,
            payload: data,
        });
    } catch (error) {
        return error;
    } finally {
        dispatch(setLoading(false));
    }
};

export const deleteTodo = (id) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        await axios.delete(
            `https://jsonplaceholder.typicode.com/todos/${id}`,
            id
        );
        dispatch({ type: ACTIONS.DELETE_TODO, payload: id });
    } catch (error) {
        return error;
    } finally {
        dispatch(setLoading(false));
    }
};

export const updateLoadTodo = (id, title) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.patch(
            `https://jsonplaceholder.typicode.com/todos/${id}`,
            {
                title,
            }
        );
        const { data } = response;
        dispatch({
            type: ACTIONS.EDIT_TODO,
            payload: data,
        });
    } catch (error) {
        return error;
    } finally {
        dispatch(setLoading(false));
    }
};
