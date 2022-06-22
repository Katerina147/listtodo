import './App.css'
import Header from './components/Header/Header'
import AddTodo from './components/Header/AddToDo/AddTodo'
import TodoList from './components/Header/ToDoList/TodoList'
import { useState } from 'react'
import { Container } from 'react-bootstrap'

function App() {
    const [todo, setTodo] = useState([
        {
            id: 1,
            title: 'Learn React',
            status: true,
        },
        {
            id: 2,
            title: 'Learn Redux',
            status: true,
        },
        {
            id: 3,
            title: 'Chilling',
            status: true,
        },
    ])
    return (
        <Container>
            <Header />
            <AddTodo todo={todo} setTodo={setTodo} />
            <TodoList todo={todo} setTodo={setTodo} />
        </Container>
    )
}
export default App
