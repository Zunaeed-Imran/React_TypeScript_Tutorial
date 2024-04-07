import { useState } from "react";

type User = {
  id: number,
  name: string
}


const TypingUseState = () => {

  const [users, setUsers] = useState<null | User>(null);

  const handleUserAdd = () => {
    setUsers({ id: 1, name: "imran" });
  };

  return (

    <>
      <h1>User Add: </h1>
      <button onClick={handleUserAdd}>
        AddUser</button>
      <p>{users?.id}</p>
      <p>{users?.name}</p>
    </>
  )
}

export default TypingUseState;
