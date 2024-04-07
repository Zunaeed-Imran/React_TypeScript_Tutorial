import React, { useState } from "react";

const NewUser = () => {
  
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser = { name, email };
    console.log(newUser);
  }

  return (
    <>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Eneter name"
            onChange={handleNameChange}
            required />
        </div>
        <div>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter Your Email"
            onChange={handleEmailChange}
            required />
        </div>
        <button type="submit">Create User</button>
      </form>
    </>
  )
}

export default NewUser;
