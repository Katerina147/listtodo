import { Container } from 'react-bootstrap';
import { Header, AddTodo, TodoList } from './components';
import './App.scss';

const App = () => {
    return (
        <Container>
            <Header />
            <AddTodo />
            <TodoList />
        </Container>
    );
};

export default App;
