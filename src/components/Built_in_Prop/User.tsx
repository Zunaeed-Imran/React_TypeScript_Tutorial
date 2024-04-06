import React from 'react'
import User2 from './User2';

// built in data type is,
// string, number, boolean, void, null


const User = () => {

  return (

    <>
      <h1>Hello From Built in Props</h1>

      <User2 name="imran" age={27} isReg={false} />
    </>
  )
}

export default User;
