  


export type todoType = {
            id: string;
            title: string;
};
        
export type todoTypeprops = {
  todo: todoType;
  handleDeleteTodo: Function;
};

export type todosTypeprops = {
  todos: todoType[];
  handleDeleteTodo: Function;
};