import React from 'react'


type UserProps = { name: string; age: number; isReg: boolean};

const User2 = ({ name, age, isReg }: UserProps) => {
  return (
    <>
      <h2>{name}</h2>
      <h2>{age} year's old</h2>
      {isReg? <p>Register</p> : <p>Not Register</p> }
    </>
  );
};

export default User2;
