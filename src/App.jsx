import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Header, AddTodo, TodoList, TodoContext } from './components'
import { TODO_LIST } from './constants'
import './App.scss'

const App = () => {
    const [todoList, setTodoList] = useState(TODO_LIST)

    const todoContextValue = {
        todoList,
        setTodoList,
    }

    return (
        <TodoContext.Provider value={todoContextValue}>
            <Container>
                <Header />
                <AddTodo />
                <TodoList />
            </Container>
        </TodoContext.Provider>
    )
}

export default App
