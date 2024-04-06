
// in this file we will practice object


type UserProps = {
  userObj: {
    name: string;
    age: number;
    isReg: boolean;
    lang: string[];
  };
};

const Object = ({ userObj }: UserProps) => {
  return (
    <>
      <h2>{userObj.name}</h2>
      <h2>{userObj.age} year's old</h2>
      {userObj.isReg ? <p>Register</p> : <p>Not Register</p>}
      <p>
        Speakes:
        {userObj.lang.map((language, index) => {
          return <span key={index}>{language}</span>;
        })}
      </p>
    </>
  );
};

export default Object;
