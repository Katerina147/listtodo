import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Header, AddTodo, TodoList } from './components';
import { getTodos } from './store/todo-service/actions';
import { getTodosLoadingSelector } from './store/todo-service/selectors';
import { CustomLoader } from './components/shared/Loader';
import './App.scss';

const App = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getTodosLoadingSelector);

    useEffect(() => {
        dispatch(getTodos());
    }, [dispatch]);

    return (
        <Container>
            <Header />
            <AddTodo />
            {isLoading ? <CustomLoader /> : <TodoList />}
        </Container>
    );
};

export default App;
