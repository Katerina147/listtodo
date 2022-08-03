import { ACTIONS } from './actions';

const initialState = {
    list: [],
    isLoading: false,
};

const todoReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ACTIONS.ADD_TODO:
            return {
                ...state,
                list: [...state.list, payload],
            };

        case ACTIONS.TOGGLE_STATUS:
            return {
                ...state,
                list: state.list.map((item) =>
                    item.id === payload.id
                        ? { ...item, completed: payload.completed }
                        : item
                ),
            };

        case ACTIONS.DELETE_TODO:
            return {
                ...state,
                list: state.list.filter((item) => item.id !== payload),
            };

        case ACTIONS.EDIT_TODO:
            return {
                ...state,
                list: state.list.map((item) =>
                    item.id === payload.id
                        ? { ...item, title: payload.title }
                        : item
                ),
            };

        case ACTIONS.GET_TODOS:
            return {
                ...state,
                list: [...state.list, ...payload.slice(0, 5)],
            };

        case ACTIONS.SET_LOADING:
            return { ...state, isLoading: payload };

        default:
            return state;
    }
};

export default todoReducer;
