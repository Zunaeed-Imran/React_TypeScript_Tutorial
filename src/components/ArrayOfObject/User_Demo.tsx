// import React from 'react'e

type UserDemoProps = {
  users: {
    id: number;
    name: string;
    email: string;
    age: number;
  }[];
};


const User_Demo = ({users}:UserDemoProps) => {

  return (

    <>
      {users.map((user) => {
        const {id, name, email, age} = user
        return <div key={id}>
          <h2>{name}</h2>
          <p>{email}</p>
          <p>{age}</p>
        </div>
      })}
    </>
  )
}

export default User_Demo;
