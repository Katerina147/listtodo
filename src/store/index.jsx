import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoReducer from './todo-service/reducer';
import logger from 'redux-logger';

const reducers = combineReducers({
    todo: todoReducer,
});

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
