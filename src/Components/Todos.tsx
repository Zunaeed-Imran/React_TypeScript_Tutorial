import { todoType } from "../types/types";
import Todo from "./Todo";


type todosTypeprops = {
  todos: todoType[];
};


const Todos = (props: todosTypeprops) => {

  return (
    <>
      {props.todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
    </>
  )
}

export default Todos;
