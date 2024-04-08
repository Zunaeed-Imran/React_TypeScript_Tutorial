import { todoType } from "../types/types";

type todoTypeprops = {
  todo: todoType;
};

const Todo = (props: todoTypeprops) => {
  const { id, title } = props.todo;
  return (
    <>
      <article>
        <h3>{id}</h3>
        <h3>{title}</h3>
      </article>
    </>
  );
};

export default Todo;
