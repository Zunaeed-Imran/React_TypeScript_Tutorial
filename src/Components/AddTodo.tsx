import { ChangeEvent, FormEvent, useState } from "react";

type Props = {
  handleAddNewTodo: Function;
};

const AddTodo = (props: Props) => {

  const [title, setTitle] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo = { id: new Date().getTime().toString(), title }
    props.handleAddNewTodo(newTodo);
    setTitle("");
  }

  return (
    <>
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={title}
            onChange={handleChange}
            required
            autoFocus />
        </div>
        <button type="submit">Add Todo</button>
        
      </form>
    </>
  )
}

export default AddTodo;
