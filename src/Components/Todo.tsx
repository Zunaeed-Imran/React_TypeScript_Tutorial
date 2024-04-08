import { todoTypeprops} from "../types/types";

 


  const DeleteTodo = (id: string) => {
    console.log(id);
  };

  
  const Todo = (props: todoTypeprops) => {
    const { id, title } = props.todo;
    props.handleDeleteTodo(id); 
    return (
    <>
      <article>
        <h3>{id}</h3>
        <h3>{title}</h3>
        <button onClick={() => {
          DeleteTodo(id)
        }}>Delete</button>
      </article>
    </>
  );
};

export default Todo;
