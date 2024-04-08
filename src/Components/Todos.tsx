import Todo from "./Todo";


type todosType = {
  todos:{
  id: string;
  title: string;
}[];
};


const Todos = (props: todosType) => {

  return (
    <>
      {props.todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
    </>
  )
}

export default Todos;
