import { todoTypeprops } from '../types/types';


const Todo = (props: todoTypeprops) => {
  const { id, title } = props.todo;
  return (
    <>
      <article>
        <h3>{id}</h3>
        <h3>{title}</h3>
        <button
          onClick={() => {
            props.handleDeleteTodo(id); // Call handleDeleteTodo only when the button is clicked
          }}
        >
          Delete
        </button>
      </article>
    </>
  );
};

export default Todo;
