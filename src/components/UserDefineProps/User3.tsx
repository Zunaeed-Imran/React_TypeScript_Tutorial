// import User4 from './User4';

import Object from './Object';

// ###User Defined types => object, array, enum, union, any, custom type.


// making object
const userObj = {
  name: 'rakib',
  age: 29,
  isReg: true,
  lang: ['bangla', 'english'],
};

const User3 = () => {
  return (
    <>
      {/* <User4 lang={[' bangla',' english']}/> */}

      <Object userObj={userObj} />
    </>
  );
};

export default User3;
