import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import todoReducer from './todo-service/reducer';

const reducers = combineReducers({
    todo: todoReducer,
});

const store = createStore(reducers, applyMiddleware(logger));

export default store;
