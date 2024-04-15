import { ChangeEvent, FormEvent, useState } from 'react';

type Todo = {
  id: string;
  title: string;
};

type Props = {
  handleAddNewTodo: (newTodo: Todo) => void;
};

const AddTodo = (props: Props) => {
  const [title, setTitle] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo: Todo = { id: new Date().getTime().toString(), title };
    props.handleAddNewTodo(newTodo);
    setTitle('');
  };

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
            autoFocus
          />
        </div>
        <button>Add Todo</button>
      </form>
    </>
  );
};

export default AddTodo;
