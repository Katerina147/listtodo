import { ACTIONS } from './actions';
import { TODO_LIST } from '../../constants';

const initialState = {
    list: TODO_LIST,
    isloading: false,
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
                    item.id === payload
                        ? { ...item, status: !item.status }
                        : item
                ),
            };
        case ACTIONS.DELETE_TODO:
            return {
                ...state,
                list: state.list.filter((item) => item.id !== payload),
            };
        case ACTIONS.SAVE_TODO:
            return {
                ...state,
                list: state.list.map((item) =>
                    item.id === payload.id
                        ? { ...item, title: payload.value }
                        : item
                ),
            };
        default:
            return state;
    }
};

export default todoReducer;
