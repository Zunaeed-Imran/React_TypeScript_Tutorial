// import React from 'react'


import User_Demo from "./User_Demo"

const users = [

  {
    id: 1,
    name: "imran",
    email: "zuna@gmail.com",
    age: 27,
  },
  {
    id: 2,
    name: "mesba",
    email: "mesba@gmail.com",
    age: 28,
  },
  
]

const Array_Object = () => {

  return (

    <>
      <User_Demo users={users} />
    </>
  )
}

export default Array_Object;
