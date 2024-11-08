import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"

import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    {input: "Hello! Add your first todo!", complete: true}
  ])

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, {input: newTodo, complete: false}]
    setTodos(newTodoList)
  }

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <TodoList todos={todos}/>
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App
