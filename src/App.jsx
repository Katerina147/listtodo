import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Header, AddTodo, TodoList } from './components'
import { TODO_LIST } from './constants'
import './App.scss'

const App = () => {
    const [todo, setTodo] = useState(TODO_LIST)

    const addTodoClickHandler = (value) => setTodo([...todo, value])

    return (
        <Container>
            <Header />
            <AddTodo addTodoClickHandler={addTodoClickHandler} />
            <TodoList todo={todo} setTodo={setTodo} />
        </Container>
    )
}

export default App
