
type todoType = {
  todo: {
    id: string;
    title: string;
  };
};


const Todo = (props: todoType) => {
  const { id, title } = props.todo;
  return (
    <>
      <article>
        <h3>{id}</h3>
        <h3>{title}</h3>
      </article>
    </>
  )
}

export default Todo;
