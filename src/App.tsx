import { useState } from 'react';
import './App.css'
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import { todoType } from './types/types';


const todosData = [
  {
    id: "1",
    title: "todo title 1",
  },
  {
    id: "2",
    title: "todo title 2",
  },
  {
    id: "3",
    title: "todo title 3",
  },
  {
    id: "4",
    title: "todo title 4",
  },
  {
    id: "5",
    title: "todo title 5",
  },
  {
    id: "6",
    title: "todo title 6",
  },
];


function App() {

  const [todos, setTodos] = useState(todosData);

  const handleDeleteTodo = (id: string) => {
    const filterTodos = todos.filter(todo => todo.id !== id);
    setTodos(filterTodos);
  }

  const handleAddNewTodo = (newTodo: todoType) => {
    console.log(newTodo);
    setTodos((prevState) => [...prevState, newTodo]);
  };

  return (
    <>
      <AddTodo handleAddNewTodo={handleAddNewTodo} />
      <Todos todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </>
  );
}

export default App
