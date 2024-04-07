

type todosType = {
  todos:{
  id: string;
  title: string;
}[];
};


const Todos = (props: todosType) => {

  return (
    <>
      {props.todos}
    </>
  )
}

export default Todos;
