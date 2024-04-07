// in this example we learn what type of element we want to work with.


import React, { useState } from "react";

const NewUser = () => {

  const [userName, setUserName] = useState("");

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(userName);
    setUserName("");
  }

  return (
    <>
      <h2>Create New User</h2>
      <input
        type="text"
        name="name"
        placeholder="User Name"
        value={userName}
        onChange={handleUserNameChange} />
      
      <button onClick={handleClick}>Show Name</button>
    </>

  )
}

export default NewUser;
